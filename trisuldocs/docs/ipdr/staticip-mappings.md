# Customer Inventory Mappings

The IPDR Customers list provides a comprehensive repository of customer details. Basically tells how to add customer information, so that they are automatically filled into the output EXCEL report.This feature allows authorized users to:

   **Add**: Create new customer entries with detailed information  
   **Edit**: Update existing customer records as needed  
   **Delete**: Remove customer entries from the list  

   :::tip
You can also add customer information for static IP and usernames using the [Trisul IPDR API](api) . 
:::

## Compliance Requirement

The DoT compliance letter clearly mentions that the following details need to be provided in the output report.  These are called CAF fields. CAF stands for Customer Acquisition Form. 

![caf_fields](images/letter-caf.png)

*Figure: Compliance requirement to add customer info* 

:::info  Static vs AAA customers
This feature is most useful for the static IP customers of the ISP. Because the inventory is more stable than large scale ISP providing residiential services. For the latter, talk to us to use a REST API to get the fields
:::

Adding customer details for static IP customers can be done in two methods

- Automatically use a REST API – contact us offline for this
- Enter each mapping or upload a CSV file containing all static IP to customer mappings

## Manually Add Static IP Mappings 

:::info navigation 
:point_right: Go to Context:default &rarr; Admin Tasks &rarr; IPDR Customers
:::

The column subnets shows the IP Addresses addressed to each customer along with other details.

![](images/pagination-ipdr.png)  
*Figure: Showing IPDR Customers List*

### Adding Details of a New Customer

To add a new customer, click the *Add* button and complete the required fields:

| Field | Descriptions |
|-------|--------------|
| Name | Enter the customer's full name |
| Address | Enter the customer's physical address |
| Email | Enter the customer's primary email address |
| Phone Number | Enter the customer's primary phone number |
| Alternative Phone number | Enter the customer's alternative phone number |
| User ID | Enter the Unique Identifier of the customer. (Example: NB4002) |

And click *Create*.


## Importing New Customer Details

When importing new customer details into the system, please note that it will override any existing customer information. To ensure that all customer details are retained, follow these steps:

- **Export Existing Customer Details**: First, export the current list of customer details from the system. This will prevent any loss of existing data.
- **Combine New and Existing Customer Details**: Add the new customer details to the exported list, ensuring that all information is accurate and up-to-date.
- **Import Combined Customer Details**: Import the combined list of customer details into the system. This will update the system with the complete and accurate customer information.

By following these steps, you can ensure a seamless integration of new customer details without overwriting existing data.

### Importing

:::info navigation 
:point_right: Go to Context:default &rarr; Admin Tasks &rarr; IPDR Customers
:::

To import IP to customer mappings for IPDR, follow these steps:

- Click the Import button located in the top right corner.
- Browse and select the CSV file containing the IP to customer mappings, with one mapping per line.
- Click Upload CSV File to initiate the upload process. 

Once the CSV file is uploaded, you can see a status summary displaying the total customers uploaded, the number successfully imported, the number of records skipped, and the number of IP addresses skipped.

![](images/csvimport.png)
*Figure: Showing Summary of Successful Import*

### Exporting

:::info navigation 
:point_right: Go to Context:default &rarr; Admin Tasks &rarr; IPDR Customers
:::

To export the details of existing IPDR customers, follow these simple steps:

- Navigate to the IPDR customer list page.
- Click the Export button.

The system will automatically export all IPDR customer details in CSV format.

### Bulk Import from CSV File Format

The CSV file should have a specific format, with each line containing nine columns. Each column represents a detail of the customer or subnet. The following default date settings apply when importing IP to customer mappings:

- Valid From: If no date is specified for "Valid From," the system defaults to January 1, 1970 (Epoch timestamp: 0).
- Valid To: If no date is specified for "Valid To," the system assumes the validity period is perpetual, with no end date.

These default settings can be adjusted or overridden during the import process or after importing the data.
Sample:

![](images/csv_format.png)  
*Figure: CSV Format showing nine columns*

Multiple IPs can be added using IPs in double quotes separated by commas.  
For example: `"192.12.3.2","192.18.10.1","192.10.22.2"`

The default mapping of all the columns to customer and subnet details can be modified in the UI after importing the CSV file.

![](images/csvformat.png)  
*Figure: CSV Format*


## Delete All

To delete all the details of the customers, click on the *Delete All* button on the top right corner. You cannot recover the details of the customers once deleted. 

## Action Button

Click on the action button against each customer to *edit*, *delete*, or *add/edit subnets*

### Add/Edit Subnets

To manage subnets and terminal IDs, click on the *Add/Edit Subnets* option from the action button dropdown. This will prompt you to enter the following details:

| Field | Description |
|-------|-------------|
| IP Subnet | Enter the IP subnet address in CIDR notation 
| Valid From | Select the date from which the subnet will be valid from. |
| Terminal ID | Enter the unique identifier for the terminal device associated with the subnet. |

![](images/ipsubnet_terminalid.png)
*Figure: Showing IPDR Customers terminal IDs with subnets*

Below that are the list of assigned subnets to customer containing details such as 

| Column| Descriptions |
|--------|--------------|
| IP Subnet | Displays the IP subnet in CIDR notation. |
| Valid from | Shows the data from which the subnet invalid. |
| Valid to | Displays the date until which the subnet is valid. By default it is set to "not set" indicating perpetual validity. |
| Terminal ID | Lists the unique identifier for the terminal device associated with the assigned subnet |


:::info Validity timeframe of mappings - `ValidFrom` and `ValidTo` 
The Static IP mapping captures the validity of the assignment via the *Valid From* and *Valid To* fields. While generating the IPDR Report , Trisul IPDR uses the *Valid From* and *Valid To* timestamps to fill out the customer details. Users should do a *Set Expiry* for decommissioned customers rather than *Delete* them. This allows historical mappings to be correctly filled out as per the compliance mandate. 
:::

Click on the action button against a subnet for two options say
1) Set Expiry
2) Delete

Click on *Set Expiry* to set "Valid to" date for the selected subnet that shows the flows until the set expiry date but not the customer details in the report. Click *Delete* to delete that particular subnet.