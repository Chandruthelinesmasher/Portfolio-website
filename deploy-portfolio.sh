#!/bin/bash

# Set the full image path
IMAGE="devopsportfolioacr37692.azurecr.io/portfolio-website:df087a8"

# Extract repository and tag
IMAGE_REPO="${IMAGE%:*}"
IMAGE_TAG="${IMAGE##*:}"

echo "Deploying with:"
echo "Repository: $IMAGE_REPO"
echo "Tag: $IMAGE_TAG"

# Create namespace if it doesn't exist
kubectl create namespace production --dry-run=client -o yaml | kubectl apply -f -

# Deploy with Helm
helm upgrade --install portfolio-prod ./helm/portfolio \
  -n production \
  -f helm/portfolio/values-prod.yaml \
  --set image.repository="$IMAGE_REPO" \
  --set image.tag="$IMAGE_TAG" \
  --wait \
  --timeout 10m \
  --debug

# Check deployment status
echo ""
echo "Checking deployment status..."
kubectl get pods -n production
kubectl get deployments -n production
kubectl get svc -n production
kubectl get ingress -n production

# Show pod logs if any pods are failing
echo ""
echo "Recent pod events:"
kubectl get events -n production --sort-by='.lastTimestamp' | tail -20