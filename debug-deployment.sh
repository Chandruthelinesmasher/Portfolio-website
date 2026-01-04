#!/bin/bash

echo "=== Checking Namespace ==="
kubectl get namespace production

echo ""
echo "=== Checking Pods Status ==="
kubectl get pods -n production -o wide

echo ""
echo "=== Checking Deployment Status ==="
kubectl describe deployment portfolio-portfolio-prod -n production

echo ""
echo "=== Checking Pod Details (if any exist) ==="
POD_NAME=$(kubectl get pods -n production -l app.kubernetes.io/name=portfolio -o jsonpath='{.items[0].metadata.name}' 2>/dev/null)
if [ ! -z "$POD_NAME" ]; then
  echo "Pod: $POD_NAME"
  echo ""
  echo "--- Pod Description ---"
  kubectl describe pod $POD_NAME -n production
  
  echo ""
  echo "--- Pod Logs ---"
  kubectl logs $POD_NAME -n production --tail=50
  
  echo ""
  echo "--- Previous Pod Logs (if crashed) ---"
  kubectl logs $POD_NAME -n production --previous --tail=50 2>/dev/null || echo "No previous logs available"
else
  echo "No pods found"
fi

echo ""
echo "=== Checking Events ==="
kubectl get events -n production --sort-by='.lastTimestamp' | tail -30

echo ""
echo "=== Checking ReplicaSets ==="
kubectl get rs -n production

echo ""
echo "=== Checking HPA (if enabled) ==="
kubectl get hpa -n production

echo ""
echo "=== Checking Service ==="
kubectl get svc -n production

echo ""
echo "=== Checking Ingress ==="
kubectl get ingress -n production