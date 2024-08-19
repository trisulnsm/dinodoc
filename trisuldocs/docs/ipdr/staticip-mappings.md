# Static IP mappings

How to load customer IP mappings.


## Customer details

Adding customer details for static IP can be done in two methods

- Automatically use a REST API – since this is going to be custom work, please contact us with the API details from the ISP end.
- Enter or upload static IP to customer mappings

The following section describes how enter customer mappings.

### Adding Customer to IP mappings

For ISPs who provide business services with static IPs for their customers, the manual mapping is the easiest option.

The flow is

- Add customers first
- Assign IP addresses to customers

Login as admin

:::note navigation

Goto Context: default → Admin Tasks → IPDR Customers

:::

The column subnets shows the IP Addresses addressed to each customer along with other details.

#### Add Customer

Press the Add button to add a new Customer.  
Fill in the details and add the customer.

#### Add IP Subnet to Customer mapping

Press the Add/Edit Subnet option

![](images/ipdr-customer-add-subnet.png)

Then add the IP Address in the format you can use the plain IP address `192.168.1.23` or `192.168.1.23/32` CIDR format.

Once done simply press the back button to go back to the customer mappings.

#### Bulk import from Excel/CSV format

You can also import an entire customer database at once via a CSV file. If you have an EXCEL file you can save it as CSV and import it in.

The CSV format is shown here:

![](images/ipdr-csv-format.png)

A sample working CSV file can be edited with the information as needed.

- Step 1 : Select the CSV file
- Step 2 : Select the column numbers, if you followed the sample file above you can skip this step and directly press IMPORT
- Step 3 : Confirm
