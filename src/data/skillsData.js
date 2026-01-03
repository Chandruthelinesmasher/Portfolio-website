import { Code, Cloud, Server, Activity } from 'lucide-react';

export const skillsData = {
  'CI/CD': {
    icon: Code,
    skills: ['Jenkins', 'GitLab CI', 'GitHub Actions','Azure Pipelines']
  },
  'Cloud': {
    icon: Cloud,
    skills: ['AWS', 'Azure',]
  },
  'Containers': {
    icon: Server,
    skills: ['Docker', 'ACR', 'ECR']
  },
  'Orchestration': {
    icon: Server,
    skills: ['Kubernetes', 'AKS', 'EKS']
  },
  'IaC': {
    icon: Activity,
    skills: ['Terraform', 'Ansible',]
  },
  'Monitoring': {
    icon: Activity,
    skills: ['Prometheus', 'Grafana',]
  },
  'Scripting': {
    icon: Code,
    skills: ['Python', 'Bash', 'PowerShell', 'Go']
  },
  'System Administration': {
    icon: Code,
    skills: ['Linux', 'Windows',]
  }
  
};

