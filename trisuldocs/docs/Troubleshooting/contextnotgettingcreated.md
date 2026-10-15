# Context Not Getting Created

If you're having trouble creating a new context in Trisul, follow these steps to identify and resolve the issue.

### Step 1: Verify CLI Tool Usage

Ensure you're using the correct CLI tool command to create a context. Use trisulctl_hub to create and manage contexts on the hub node.

```
$ trisulctl_hub
trisul_hub:LAT1(domain0)> create context <context_name>
```

Replace \<context_name\> with your context name. Use letters and digits only. There is no length limit.

### Step 2: Check Context Creation

After executing the create context command, verify the context was successfully created using the info context command.

```
$ trisulctl_hub
trisul_hub:LAT1(domain0)> info context <context_name>
```
This command displays information about the context, including node, context name, version, state, data window, profile name, run mode and disk size.

### Step 3: Analyze the Output

`info context` lists every context on the server, one row per node. Check that your context appears, that the `init` column shows `INIT`, and that the `state` column shows `RUNNING` for the nodes you expect to run. Sample output:

~~~
node      context_name   version    init   state    size_disk  data_window   #runs  profile   runmode
------------------------------------------------------------------------------------------------------
config0   default        8.0.3322   INIT   RUNNING  -          00h 00m 00s   0      profile0
hub0      default        8.0.3322   INIT   DOWN     -          04h 02m 00s   0
probe0    default        8.0.3426   INIT   DOWN     -          00h 00m 00s   1      profile0  online_rxring
~~~

**Common Issues**

- Invalid context name: Use letters and digits only.
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
api_token: Your API token
username: Your username (use auth_username in the URL)
subdomain: The subdomain for the tenant
Optional Parameters:
probe: The probe name (defaults to probe0)

**Example Request**

```
http://192.168.1.77:8013/api/tenants_ip_mapping/create_tenant_mapping?auth_username=apiuser&api_token=YOUR_API_TOKEN&probe=probe0&subdomain=unpl_corporate
```

Replace `YOUR_API_TOKEN` with your own API token, and `8013` with the port your WebTrisul server runs on.

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