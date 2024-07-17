# Alert Group

Create a new Alert Group.

You can extend Trisul’s functionality by creating your own Alert Groups in addition to Trisul built in ones. You can then use the LUA API to generate alerts for that group. They will be integrated into the user interface and the metrics backend seamlessly.

## Structure

**[New Alert Group skeleton script]([trisul-scripts/lua/skeletons/new_alert_group.lua at master · trisulnsm/trisul-scripts · GitHub](https://github.com/trisulnsm/trisul-scripts/blob/master/lua/skeletons/new_alert_group.lua))**

## Table `alertgroup`

The table alertgroup has a single section called control that assigns a GUID to the group.

1. `control` — the GUID, name, and description
   
   ```lua
   alertgroup = {
   
      -- id and parameters of new group
     control = {
       guid = '{0409EAC7-1E60-43D3-C0FA-A87429F99728}',
       name = 'My SSH Alerts',
       description = 'Alert on successful login and ssh events'
   
     },
   }
   ```

| name                                                                    | description                                    |
| ----------------------------------------------------------------------- | ---------------------------------------------- |
| table [control](/docs/lua/alert_group#tablecontrol ) | assigns a name and guid to the new alert group |

## Table `control`

The control table assigns a unique GUID to the new alert group.

| guid        | string | A [guid](/docs/ref/guid) that identifies the group. |
| ----------- | ------ | --------------------------------------------------- |
| name        | string | Name of the alert group. Keep it short < 15 chars   |
| description | string |                                                     |
