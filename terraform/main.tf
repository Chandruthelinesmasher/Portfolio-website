locals {
  # Standard sanitization for most Azure resources (alphanumeric, dash, underscore, parentheses, period)
  project_clean = lower(replace(var.project_name, "/[^a-zA-Z0-9-_().]/", "-"))
  
  # ACR-specific sanitization (alphanumeric only, no special characters)
  project_acr = lower(replace(var.project_name, "/[^a-zA-Z0-9]/", ""))
  
  # DNS-safe sanitization (alphanumeric and dash only)
  project_dns = lower(replace(var.project_name, "/[^a-zA-Z0-9-]/", "-"))
}

resource "azurerm_resource_group" "rg" {
  name     = "${local.project_clean}-rg"
  location = var.location
}