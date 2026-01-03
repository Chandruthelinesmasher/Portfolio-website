# Prometheus Installation (Kubernetes)

This project uses **Prometheus** for cluster-level and application-level monitoring.

## Installation Method
Prometheus is installed using **Helm**, which is the recommended approach in production environments.

### Add Helm Repository
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
