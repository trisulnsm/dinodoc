# Context Not Getting Created

If you're having trouble creating a new context in Trisul, follow these steps to identify and resolve the issue.

### Step 1: Verify CLI Tool Usage

Ensure you're using the correct CLI tool command to create a context. Use trisulctl_hub to create and manage contexts on the hub node.

```
$ trisulctl_hub
trisul_hub:LAT1(domain0)> create context <context_name>
```

Replace \<context_name\> with your desired context name, keeping it alphanumeric with underscores and under 12 characters for better display in the UI.

### Step 2: Check Context Creation

After executing the create context command, verify the context was successfully created using the info context command.

```
$ trisulctl_hub
trisul_hub:LAT1(domain0)> info context <context_name>
```
This command displays information about the context, including node, context name, version, state, data window, profile name, run mode and disk size.

### Step 3: Analyze the Output

Check the output of the info context command for any errors or inconsistencies. Verify the context state is "RUNNING" and the initialization status is as expected (e.g., "INIT" or "READY").

**Common Issues**

- Invalid context name: Ensure the context name follows the naming conventions (alphanumeric with underscores, under 12 characters).
- Permission issues: Run the command as root or with the necessary permissions.
- Node configuration: Verify all probe and hub nodes are correctly configured and communicating with each other.

## Troubleshooting: Tenant Mapping Issues

If you're experiencing issues with tenant mapping, follow these steps to identify and resolve the problem.

### Step 1: Verify Tenant Mapping Creation

Ensure you've created a tenant mapping using the correct API request. The create_tenant_mapping API endpoint is used to create or update a tenant mapping.

**API Request**

Method: GET
URL: api/tenants_ip_mapping/create_tenant_mapping
Required Parameters:
api_key: Your API key
username: Your username (use auth_username in the URL)
subdomain: The subdomain for the tenant
Optional Parameters:
probe: The probe name (defaults to probe0)

**Example Request**

```
http://192.168.1.77:8013/api/tenants_ip_mapping/create_tenant_mapping?auth_username=apiuser&api_token=hbQ0WN0pgY6CAGhnLetI&probe=probe0&subdomain=unpl_corporate
```
### Step 2: Check API Response
Verify the API response indicates a successful creation or update of the tenant mapping.

Expected Response

Status Code: 200
Response Body: \{"status": "Success","message": "Successfully created/updated tenant \<subdomain\> for the probe \<probe\>"\}

**Common Issues**

- Missing or incorrect parameters: Ensure all required parameters are included and correctly formatted in the API request.
- Authentication issues: Verify your API key and username are correct and have the necessary permissions.
- Probe configuration: Ensure the specified probe is correctly configured and running.

### Managing IP Addresses for a Tenant

After creating a tenant mapping, you can add or remove IP addresses for the tenant. Ensure the tenant mapping is successfully created before attempting to manage IP addresses.