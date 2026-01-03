resource "azurerm_kubernetes_cluster" "aks" {
  name                = "${local.project_clean}-aks"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  dns_prefix = "${local.project_dns}-dns"

  default_node_pool {
    name                = "default"
    node_count          = 1
    vm_size             = "Standard_DC2s_v3"
    type                = "VirtualMachineScaleSets"
    vnet_subnet_id      = azurerm_subnet.private[0].id
  }

  identity {
    type = "SystemAssigned"
  }

  network_profile {
    network_plugin     = "azure"
    network_policy     = "azure"
    service_cidr       = "10.100.0.0/16"
    dns_service_ip     = "10.100.0.10"
  }
}

# CRITICAL: Grant AKS permission to pull from ACR
resource "azurerm_role_assignment" "aks_acr_pull" {
  principal_id                     = azurerm_kubernetes_cluster.aks.kubelet_identity[0].object_id
  role_definition_name             = "AcrPull"
  scope                            = azurerm_container_registry.acr.id
  skip_service_principal_aad_check = true
}

