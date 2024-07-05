# Name resolution

You can assign a user friendly name for any type of item.

## Manually assign a name

### 1 From the key dashboard

This is the easiest way to edit. You can come to the key dashboard by
clicking on a link or by searching for a specific item.

1. You can also edit by clicking the link on the IP or Port from any
   module or table  

2. You will be redirected to [Key Traffic](/docs/ug/ui/dashboards.html#key_dashboard) dashboard  

3. Find the module **Key Details** and click the “Edit” link

### 2 From top keys

Use this if you want to see recently active keys and assign them names
in one page.

:::note navigation

Select Customize -\> Keys

:::

1. List of counter groups will appear  

2. Click the **show recently active** in any counter group  

3. You will get list of keys and click the **edit** icon  

4. You will be redirected to a page with following fields

| Field Name  | Description                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| Key         | A unique identifier for the entity.                                                                               |
| Name        | A user friendly name for this key. Examples: Host names for IP Addresses, Application names for port numbers, etc |
| Description | More information about this entity. This doesn’t show up anywhere except in the key details panel.                |

### 3 Resolve keys in bulk from csv file

:::note navigation

Select Customize -\> Keys

:::

List of counter groups will appear  

1. Click the **Import from csv**  

2. Upload a csv file  

3. Select the column numbers that contain the key and label  

4. Click Import CSV File

## Automatically name resolution

Trisul comes with a sophisticated way to resolve keys automatically in
the background. This works magically by only resolving those keys which
are likely to be “interesting”. The process is designed to place as
little load on your DNS servers as possible.

> Automatic name resolution is disabled by default

### How to enable automatic name resolution

:::note navigation

Customize -\> App Settings

:::

1. Enable **Automatically resolve** top IPs option.

Once enabled wait for about 10-15 minutes for hostnames to start
appearing in your UI.

## Export labels to CSV file

You can export assigned labels to csv file

:::note navigation

Select Customize -\> Keys

:::

1. List of counter groups will appear  

2. Click the **Export to CSV**

### Troubleshooting

If for some reason you are not able to see hostnames in Trisul, try
these steps.

1. Check if there are any errors in the log. Go to *Admin -\> View Logs
   -\> Background Tasks Log*
2. Check if crontab is enabled. Type `crontab -l` to check entries
3. Check if DNS works, click on any IP to bring up key dashboard, then
   click on *Resolve*
