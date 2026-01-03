resource "azurerm_virtual_network" "vnet" {
  name                = "${local.project_clean}-vnet"
  location            = var.location
  resource_group_name = azurerm_resource_group.rg.name
  address_space       = ["10.0.0.0/16"]
}

resource "azurerm_subnet" "public" {
  count                = 2
  name                 = "public-subnet-${count.index}"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.${count.index}.0/24"]
}

resource "azurerm_subnet" "private" {
  count                = 2
  name                 = "private-subnet-${count.index}"
  resource_group_name  = azurerm_resource_group.rg.name
  virtual_network_name = azurerm_virtual_network.vnet.name
  address_prefixes     = ["10.0.${count.index + 10}.0/24"]
}

resource "azurerm_nat_gateway" "ng" {
  name                = "${local.project_clean}-nat"
  location            = var.location
  resource_group_name = azurerm_resource_group.rg.name
  sku_name            = "Standard"
}