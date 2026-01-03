resource "random_integer" "acr_rand" {
  min = 10000
  max = 99999
}

resource "azurerm_container_registry" "acr" {
  name                = "${local.project_acr}acr${random_integer.acr_rand.result}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location
  sku                 = "Standard"
  admin_enabled       = true
}
