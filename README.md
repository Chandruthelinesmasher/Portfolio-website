# 🌐 DevOps Portfolio Website

# Architecture

<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/f9e4116e-8c29-4c9d-9148-23b426e20c7c" />


A modern, responsive **DevOps Engineer Portfolio Website** built using **React + Vite** to showcase professional experience, certifications, projects, and technical expertise in DevOps, Cloud, and Automation.

<img width="1894" height="901" alt="image" src="https://github.com/user-attachments/assets/cdcada9a-18ac-4e38-9b73-06f7434f399a" />

<img width="1888" height="896" alt="image" src="https://github.com/user-attachments/assets/3b8185b9-c423-4d55-9a60-4508abf058e7" />

<img width="1886" height="727" alt="image" src="https://github.com/user-attachments/assets/fbf58fd9-6305-4d82-bfba-e82a3804e4db" />

<img width="1886" height="901" alt="image" src="https://github.com/user-attachments/assets/970c1100-34b1-4f4a-ae2f-d7a892e48e43" />

<img width="1892" height="901" alt="image" src="https://github.com/user-attachments/assets/3ab48174-e8ca-43a0-b41f-fcb7cae2415a" />

<img width="1887" height="742" alt="image" src="https://github.com/user-attachments/assets/6124aea9-33b6-4cf4-bc59-ceb0f9b7353a" />

<img width="1890" height="904" alt="image" src="https://github.com/user-attachments/assets/0682f1da-d2e9-488e-85a3-c47797968bd7" />


# 🚀 DevOps Portfolio Website – Production-Ready Cloud Deployment

## 📌 Overview

This project demonstrates a **production-grade DevOps implementation** for deploying a portfolio website using **modern cloud-native DevOps practices**.

It covers the **complete lifecycle**:

> Source Code → CI/CD → Infrastructure as Code → Containerization → Kubernetes Deployment → Monitoring & Scalability

The goal of this project is to showcase **real-world DevOps skills**, not just tool usage.

---

## 🧠 What This Project Demonstrates (Why It Matters)

This project answers the following interviewer questions:

* Can you deploy applications reliably?
* Can you manage cloud infrastructure using IaC?
* Can you handle failures in production?
* Can you automate end-to-end delivery pipelines?
* Can you think like a **DevOps / SRE engineer**, not just run commands?

---

## 🏗️ High-Level Architecture

**Flow:**

```
Developer → GitHub
        → CI/CD Pipeline
        → Docker Build
        → Container Registry
        → Kubernetes (AKS)
        → LoadBalancer / Ingress
        → End Users
```

### Core Components:

* **CI/CD:** GitHub Actions / Azure Pipelines
* **Containerization:** Docker (multi-stage builds)
* **Orchestration:** Kubernetes
* **Infrastructure:** Terraform (IaC)
* **Cloud:** Azure (design is cloud-agnostic)

---

## ⚙️ Technology Stack

| Category               | Tools                            |
| ---------------------- | -------------------------------- |
| OS & Scripting         | Linux, Bash                      |
| Containerization       | Docker                           |
| Orchestration          | Kubernetes                       |
| CI/CD                  | GitHub Actions / Azure Pipelines |
| Infrastructure as Code | Terraform                        |
| Cloud Provider         | Azure (extendable to AWS)        |
| Monitoring (basic)     | Kubernetes Metrics               |

---

## 🔄 CI/CD Pipeline Design

### Pipeline Responsibilities:

* Code checkout
* Docker image build
* Image push to registry
* Kubernetes deployment
* Zero-downtime rollout

### Key DevOps Practices Used:

* Immutable Docker images
* Automated deployments
* Environment-specific variables
* Idempotent infrastructure execution

---

## 📦 Docker Implementation

* Multi-stage Docker build to reduce image size
* Non-root user execution for security
* Optimized Docker layer caching

### Why multi-stage Docker builds?

* Smaller image size
* Faster deployments
* Reduced attack surface

---

## ☸️ Kubernetes Deployment Strategy

### Kubernetes Resources Used:

* Deployment
* Service
* Ingress / LoadBalancer
* ConfigMaps & Secrets (conceptual usage)

### Production Best Practices:

* Rolling updates for zero downtime
* Pod replicas for high availability
* Readiness & liveness probes
* Horizontal Pod Autoscaling (HPA – supported)

---

## 🧱 Infrastructure as Code (Terraform)

Infrastructure is managed using **Terraform** to ensure:

* Repeatable and predictable deployments
* Version-controlled infrastructure
* No manual cloud configuration

### Terraform Concepts Applied:

* Modular design (extendable)
* Variables and outputs
* Remote backend (recommended)
* State consistency & drift awareness

---

## 🛡️ Production Readiness Considerations

### Zero-Downtime Deployments

* Kubernetes rolling update strategy
* Multiple replicas ensure service availability

### Rollback Strategy

* Kubernetes rollout history
* Quick rollback to last stable image

### Scaling

* Horizontal Pod Autoscaler based on CPU metrics
* Automatic scaling during traffic spikes

### Security

* Non-root containers
* Secrets not hardcoded
* IAM-based access for cloud resources

---

## 🔥 Failure Scenarios & Debugging (Interview-Ready)

### 1️⃣ Pod stuck in `Pending`

**Checks:**

* Node availability
* Resource requests vs limits
* Scheduler events

### 2️⃣ `ImagePullBackOff`

**Fix:**

* Validate image tag
* Check container registry authentication
* Confirm successful image push in CI/CD

### 3️⃣ Application Crash (`CrashLoopBackOff`)

**Debug:**

* `kubectl logs`
* Environment variable validation
* Application startup configuration

### 4️⃣ CI/CD Pipeline Failure

**Approach:**

* Identify failed stage
* Fix root cause
* Re-run pipeline or rollback deployment

### 5️⃣ Terraform Apply Failure

**Handling:**

* Review Terraform state
* Identify partially created resources
* Fix configuration and re-apply safely

---

## 📊 Monitoring & Observability (Basic)

* Kubernetes Metrics Server
* Pod and node-level resource usage
* Ready for Prometheus & Grafana integration

---

## 🧪 Run Locally (Optional)

```bash
docker build -t devops-portfolio .
docker run -p 8080:80 devops-portfolio
```

---

## 📈 Why This Project is Interview-Ready

✔ End-to-end CI/CD automation
✔ Infrastructure as Code (Terraform)
✔ Kubernetes production concepts
✔ Failure handling & debugging mindset
✔ Cloud-native DevOps design

This project reflects **how DevOps works in real companies**, not just tutorials.

---

## 👨‍💻 About Me

**DevOps Engineer** with ~3.6 years of experience, specializing in:

* Kubernetes & Docker
* Terraform & Infrastructure as Code
* CI/CD automation
* Cloud infrastructure (Azure & AWS basics)
* Linux & production troubleshooting

🎯 Actively targeting **₹12–15 LPA DevOps roles in Bangalore**.

---

## 🏁 Final Note for Interviewers

> This project is designed to reflect **production-level thinking**, not just deployment success.

---

### 🔒 Planned Enhancements

* Full monitoring stack (Prometheus + Grafana)
* Advanced Terraform modules
* Blue-green / canary deployments
* Cost optimization and security hardening





<!-- optional: add a screenshot if available -->



# Install dependencies
npm install

# Run the development server
npm run dev
