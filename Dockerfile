# =============================================
# Stage 1: Build Stage
# =============================================
FROM node:22-alpine AS builder

# Install system dependencies required for native npm builds
RUN apk update && \
    apk add --no-cache python3 make g++ && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

WORKDIR /app

# Copy only package files to maximize caching
COPY package*.json ./

# Install all dependencies (including devDependencies)
RUN npm ci --include=dev && \
    npm cache clean --force

# Copy application source
COPY . .

# CRITICAL FIX: Set permissions BEFORE switching user
# Vite needs write access to create temporary files during build
RUN chown -R nextjs:nodejs /app && \
    chmod -R 755 /app

# Now switch to nextjs user for the build
USER nextjs

# Build Vite application
RUN npm run build

# =============================================
# Stage 2: Production Stage (Nginx)
# =============================================
FROM nginx:1.27-alpine AS production

# Install minimal runtime tools, drop default site
RUN apk update && \
    apk add --no-cache curl ca-certificates && \
    rm -f /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built assets from builder stage
# IMPORTANT: Use nginx:nginx ownership, not nextjs
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

# Ensure nginx can read the files
RUN chmod -R 755 /usr/share/nginx/html

# CRITICAL: Create necessary temp directories for non-root nginx
RUN mkdir -p /tmp/client_temp /tmp/proxy_temp_path /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    chown -R nginx:nginx /tmp/client_temp /tmp/proxy_temp_path /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    chmod -R 755 /tmp/client_temp /tmp/proxy_temp_path /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    # Allow nginx to write pid file to /tmp
    touch /tmp/nginx.pid && \
    chown nginx:nginx /tmp/nginx.pid

# Expose non-privileged port (8080 instead of 80)
EXPOSE 8080

# Metadata
LABEL maintainer="kumaravelchadnru982@gmail.com"
LABEL description="Portfolio Website - Chandru K - DevOps Engineer"
LABEL org.opencontainers.image.source="https://github.com/Chandruthelinesmasher/DEVOPS-PORTFOLIO-WEBSITE"

# Health check on port 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Run as nginx user for security
USER nginx

CMD ["nginx", "-g", "daemon off;"]