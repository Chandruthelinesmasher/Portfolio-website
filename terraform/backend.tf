terraform {
  backend "azurerm" {
    # Configuration provided via -backend-config flags in CI/CD
    # This allows dynamic backend configuration
  }
}