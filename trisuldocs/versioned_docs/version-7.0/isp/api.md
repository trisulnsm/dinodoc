# Tenant API

The Tenant Management page provides a comprehensive overview of all tenants, their network mappings, and key statistics.

## Contexts

A Trisul Context is a separate instance of Trisul, comprising its own isolated database, configuration settings, and processes. Each context operates independently, allowing for secure and efficient management of multiple tenants.  
To create a new context, follow the provided link: [Creating a new context](https://docs.trisul.org/docs/ag/domain/contexts/#creating-a-new-context)

A **tenant** is mapped to a single context, enabling the isolation of tenant data and configurations within the Trisul platform. Each tenant requires a unique context for mapping, and one context can be mapped to only one tenant. 

For example, you can create a context named "unplcorp" and map it to the "unpl_corporate" tenant, ensuring that the tenant's data and configurations are isolated within the "unplcorp" context.

## Generating API Key

To manage tenants, you require a unique API key. This key grants access to tenant management capabilities for a specific user.  
To generate an API key, follow the provided link: [Generate API token](https://docs.trisul.org/docs/ag/webadmin/manageusers#generate-api-token)

By generating an API key, you not only enable tenant management for the selected user but also grant them access to the specified tenant. This ensures that the user can perform tenant-related tasks, such as configuration and monitoring, within the authorized scope.

## Managing Tenants 

### Creating Tenant Mapping 

To manage IP addresses for a tenant, you must first create a tenant mapping. This mapping is essential for adding or removing IP addresses from a tenant.

**Request**

| Method | URL |
|--------|-----|
| GET    | api/tenants_ip_mapping/create_tenant_mapping |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |
| subdomain_description | (Required) string to provide additional context or details about the subdomain. | -  |
| probe | (Optional) string | probe0 |

Example:
http://192.168.1.77:8013/api/tenants_ip_mapping/create_tenant_mapping?auth_username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate

**Response**

| Status | Response |
|--------|----------|
| 200    | ```{"status": "Success","message": "Successfully created/updated tenant unpl_corporate for the probe probe0"}``` |

### Verifying Context Mapping

Before managing a tenant, it is essential to verify that the context is mapped to the tenant. You can check the context-tenant mapping to ensure that it exists.

If the context is not mapped to the tenant, you can create a new mapping using the Create Mapping API request. This ensures that the context and tenant are properly linked.

**Request**

| Method | URL |
|--------|-----|
| GET    | /api/tenants_ip_mapping/check_content_mapping_status |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |
| probe | (Optional) string | probe0 |

Example:

http://192.168.1.77:8013/api/tenants_ip_mapping/check_content_mapping_status?auth_username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate

### Response Handling

If the tenant is not found during the mapping process, an error status will be returned, indicating that the tenant mapping was not found. This error message helps you identify and resolve the issue.

**Response**

| Status | Response |
|--------|----------|
| 200    | ```{"status": "ERROR","message": "Tenant unpl_corporate mapping not found for the probe probe0"}```|

If the tenant mapping is found, a success response will be returned, confirming that the context and tenant are correctly mapped.

**Response**


| Status | Response |
|--------|----------|
| 200    | ```{"status": "ERROR","message": "Tenant unpl_corporate mapping found for the probe probe0"}``` |

### Adding IP Addresses to a Tenant 

You can add one or more IP addresses to a tenant by specifying them in a comma-separated list or using CIDR notation. This allows for flexible and efficient management of IP addresses associated with a tenant.

>Important: After adding IP addresses to a tenant, you must restart the probe to ensure that the changes take effect.

**Request**

| Method | URL |
|--------|-----|
| GET    | api/tenants_ip_mapping/add_ips |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username |(Required) string | - |
| subdomain | (Required) string | -|
| probe | (Optional) string | probe0 |
| IPs | (Required) string | - |

Example : 
http://192.168.1.77:8013/api/tenants_ip_mapping/add_ips?username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate&ips=192.168.1.12,10.6.4.7,192.168.2.13/32

| Status | Response |
|--------|----------|
| 200    | ```{ "status": "success","message": "Successfully added ips for the tenant    unpl_corporate.Please restart the tenant"}``` |


### Getting List of Added IPS for Tenant 

You can get the list of added IPs for the tenant.

**Request**

| Method | URL |
|--------|-----|
| GET    | api/tenants_ip_mapping/list_ips |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |
| probe | (Optional) string | probe0 |

Example:
http://192.168.1.77:8013/api/tenants_ip_mapping/list_ips?username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate

**Response**

| Status | Response |
|--------|----------|
| 200    | ```{"count": 3,"list": ["192.168.1.10","10.6.4.5","192.168.2.10/32"]}``` |


### Removing IPs Addresses from a Tenant 

You can remove one or more IP addresses from a tenant. This allows for efficient management and updating of IP addresses associated with a tenant.

>Important: After removing IP addresses from a tenant, you must restart the probe to ensure that the changes take effect.

**Request**

| Method | URL |
|-------|-----|
| GET | api/tenants_ip_mapping/remove_ips |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username |(Required) string | - |
| subdomain | (Required) string | -|
| probe | (Optional) string | probe0 |
| IPs | (Required) string | - |

Example:
http://192.168.1.77:8013/api/tenants_ip_mapping/remove_ips?username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate&ips=192.168.1.10

| Status | Response |
|--------|----------|
| 200    | ```{ "status": "success","message": "Successfully removed ips for the tanent unpl_corporate " }``` |

### Removing all IP Addresses from a Tenant

You can remove all IP addresses associated with a tenant in a single request, providing a convenient and efficient way to reset or clear IP address assignments for a tenant. 

**Request**

| Method | URL |
|------|-----|
| GET | api/tenants_ip_mapping/remove_all_ips |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | -|
| probe | (Optional) string | probe0 |

Example : 
http://192.168.1.77:8013/api/tenants_ip_mapping/remove_all_ips?username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate

| Status | Response |
|--------|----------|
| 200    | ```{ "status": "success","message": "Successfully removed all ips from the tanent unpl_corporate " }``` |

### Restarting a Tenant 

After adding or removing IP addresses from a tenant, it is necessary to restart the probe tenant to ensure that the changes take effect. This restart action updates the tenant configuration and applies the new IP address assignments.

| Method | URL |
|------|-----|
| GET | api/tenants_ip_mapping/restart_tenant|

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | -|
| node | (Optional) string | - |

### Restarting Probe0

You can send the request to restart probe0 only.

Example : 
http://192.168.1.77:8013/api/tenants_ip_mapping/restart_tenant?username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&subdomain=unpl_corporate&node=probe0

**Response**

| Status | Response |
|--------|----------|
| 200    | ```{ "status": "success","message": "Successfully restarted probe0 for the tenant unpl_corporate" }``` |

### Restarting All the Nodes for a Tenant 

You have the option to restart all nodes associated with a tenant, including hub0, probe0, probe1, and other nodes. This allows for a comprehensive restart of all components related to the tenant, ensuring that any changes or updates are fully applied. 

Example : 
http://127.0.0.1:3000/api/tenants_ip_mapping/restart_tenant?username=apiuser&api_token=54LRhACgm54ULJPdXBmw&probe=probe0&subdomain=unpl_corporate

| Status | Response |
|--------|----------|
| 200    | ```{"status": "success","message": "Successfully restarted tenant unpl_corporate" }``` |

### Synchronizing or Adding Attributes to a Link

You can set or update attributes for a link, such as SNMP interface speed or configuration details. This feature allows you to customize and enhance the link's attributes.

### Attribute Synchronization using SNMP

By default, the system resolves the router and interface details using SNMP before setting or overriding the attributes. This ensures that the attributes are accurately updated based on the latest SNMP data.

### Optional: Direct Attribute Setting without SNMP Resolution

If you prefer to set attributes directly without resolving SNMP details, you can pass the parameter snmp_resolver:0 in the request. This option by passes the SNMP resolution step, allowing you to update attributes independently.

### Using pattern match to Set Attributes

You can utilize pattern matching to search for links based on a specified filter pattern. Once the matching links are identified, you can set or update attributes for those links. This feature enables efficient and targeted attribute management for multiple links that match the defined pattern.Pattern match will match any of the attributes like interface ip address,mac,name,ifalias etc.

**Request**

| Method | URL |
|------|-----|
| GET | api/tenants_ip_mapping/sync_attributes |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |
| IP | (Required) string | - |
| filter pattern | (Required) string | - |
| attributes | (Required) JSON | - |
| snmp_resolve | (Optional) Integer | 1|

Example : 
http://192.168.1.77:8013/api/tenants_ip_mapping/sync_attributes?username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate&ip=192.168.201.150&filter_pattern=GigabitEthernet0/0/0&attributes={"snmp.ifspeed_rx":10000000,"config.lsi":19991}

| Status | Response |
|--------|----------|
| 200    | ```{  "status": "success","message": "Successfully synced snmp attributes for the ip 192.168.201.150" }``` |

### Setting Attributes withhout resolve snmp

Example : 
http://192.168.1.77:8013/api/tenants_ip_mapping/sync_attributes?username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate&ip=192.168.201.150&wan_ip=100.64.0.0&snmp_resolver=0&attributes={"snmp.ifspeed_rx":10000000,"config.lsi":19991}

### Pushing Attributes Changes to Probe (push_to_probe)

After modifying attributes, such as SNMP interface speed, you must push these changes to the probe. This step ensures that the probe operates with the updated attributes, allowing for accurate and efficient data collection and processing.

**Request**

| Method | URL |
|------|-----|
| GET | api/tenants_ip_mapping/push_to_probe |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |

Example : 
http://192.168.1.77:8013/api/tenants_ip_mapping/push_to_probes?auth_username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&subdomain=unpl_corporate

| Status | Response |
|--------|----------|
| 200    | ```{ "status": "Success","message": "Changes pushed to probes" }``` |

### Tenant Running Status Check ( tenant running status)

 You can verify the running status of a tenant, which indicates whether all nodes are operational. If any node is down, the tenant's running status will be reported as false. The response will provide detailed information on the status of each node, including:  
   • Nodes that are currently down  
   • Nodes that are currently up  

**Request**

| Method | URL |
|------|-----|
| GET | api/tenants_ip_mapping/check_tenant_running_status |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |

Example 
http://192.168.1.77:8013/api/tenants_ip_mapping/check_tenant_running_status?auth_username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&subdomain=unpl_corporate

| Status | Response |
|--------|----------|
| 200    | ```{ "status": "info","is_running": "true","nodes": [{"node": "hub0","is_running": true},{"node": "probe0","is_running": true] }``` 

### Removing Tenant Mapping 

You can delete an existing tenant mapping. 

**Request**

| Method | URL |
|------|-----|
| GET | api/tenants_ip_mapping/remove_tenant_mapping |

| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |

Example :
http://192.168.1.77:8013/api/tenants_ip_mapping/remove_tenant_mapping?auth_username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&subdomain=unpl_corporate

| Status | Response |
|--------|----------|
| 200 | ```{ "status": "ERROR","message": "Tanent unpl_corporate mapping not found for the probe probe0" }``` |

>Important: Before removing tenant mapping, ensure that you have deleted all associated IP addresses. Failure to do so may result in errors.

| Status | Response |
|--------|----------|
| 200    | ```{ "status": "Success","message": "Successfully removed tenant UIIC for the probe probe0" }``` |

### Get Netflow Recevied IPS

You can get list of Ips that receives netflow . 

**Request**

| Method | URL |
|------|-----|
| GET | api/tenants_ip_mapping/netflow_received_ips| 


| Params | Values | Default |
|--------|--------|---------|
| api_key | (Required) string | - |
| username | (Required) string | - |
| subdomain | (Required) string | - |

Example :
http://127.0.0.1:3000/api/tenants_ip_mapping/netflow_received_ips?username=apiuser&api_token=54LRhACgm54ULJPdXBmw&probe=probe0&subdomain=UIIC

**Response**

| Status | Response |
|--------|----------|
| 200    | ```{"status": "Info","netflow_configured_count": 8,"netflow_received_count": 8,"ips": ["100.98.8.11","100.98.8.0","100.98.8.9","100.98.8.12","100.98.8.1","100.98.8.8","100.98.8.10","100.98.8.4"]}``` |
