# Resource Group

Create a new Resource Group.

You can extend Trisul’s functionality by creating your own Resource Groups in addition to Trisul built in ones like HTTP URLs, SSL Certs, DNS Records, File Hashes, etc. You can then use the LUA API method [engine:add_resource](/docs/lua/obj_engine#functionadd_resource) to generate resource logs for that group.

## Structure

**[New Resource group skeleton script]([trisul-scripts/lua/skeletons/new_resource_group.lua at master · trisulnsm/trisul-scripts · GitHub](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/new_resource_group.lua))**

## Table `resourcegroup`

The table resourcegroup has a single section called control that assigns a GUID to the group.

1. `control` — the GUID, name, and description

| name                                                                       | description                                       |
| -------------------------------------------------------------------------- | ------------------------------------------------- |
| table [control](/docs/lua/resource_group#tablecontrol) | assigns a name and guid to the new resource group |

## Table `control`

The control table assigns a unique GUID to the new resource group.

| name        | type   | description                                                                                                                                    |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| guid        | string | A unique guid that identifies the group. See [section on GUIDs](/docs/lua/basics#on-guids)                                          |
| name        | string | Name of the resource group. We suggest purely as a style guide to keep it short < 15 chars. This is shown in various UI elements.              |
| description | string | A description. **Note: This is mandatory unlike description fields in other objects**. This can be a longer description of the resource group. |
