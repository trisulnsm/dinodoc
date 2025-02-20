

Usage: ./ipdr_bulkquery.sh [ -c hub-config-xml-file | default=default-hub-xml] [ -f From Date DD-MM-YYYY(-HH:MM)] [ -t To DATE DD-MM-YYYY(-HH:MM) ] [-i list-of-ip-file ]


Examples  ./ipdr_bulkquery.sh -f 25-12-2024 -t 26-12-2024 -i list-of-ips1.txt
Examples  ./ipdr_bulkquery.sh -f 25-12-2024-14:30 -t 26-12-2024-15:30  -i list-of-ips1.txt


To query for a single ip we can query in explore-flows and gets the flow details . 
What if you want to search for a lakshs of ips . You cannot put each ip in the query right . So we have an script called ipdr_bulk_query.sh 

The list of ip you need to search should be in the text file example 

ip_list.txt 
192.168.1.12
192.168.1.13
192.168.1.14
..
..
..


next you have to pass this file to the script 

Like this , 

./ipdr_bulk_query.sh -i ip_list.txt -f -f 25-12-2024 -t 26-12-2024

You have to provide from date and to date .
You can alo provide date along with time like this 

./ipdr_bulkquery.sh -i ip_list.txt -f 25-12-2024-14:30 -t 26-12-2024-15:30 


By default the output is stored in /tmp/


if you run the script you will get like this 

root@old-jammy:/usr/local/share/trisul-hub# ./ipdr_bulkquery.sh -f 25-12-2024 -t 26-12-2024 -i list_of_ip.txt 
Writing output files to directory /tmp/ipdrresults-1740052909
Querying IP 192.168.1.12
Finished IP 192.168.1.12 in 0 seconds 
Querying IP 192.168.1.77
Finished IP 192.168.1.77 in 0 seconds 
Check results directory : /tmp/ipdrresults-1740052909


the result stored in /tmp/ipdrresults-1740052909


the result looks like  : 

root@old-jammy:/tmp/ipdrresults-1740052909# ls
queryresults.192.168.1.12  queryresults.192.168.1.12.csv  queryresults.192.168.1.77  queryresults.192.168.1.77.csv
root@old-jammy:/tmp/ipdrresults-1740052909# 

so for each ip in the iplist it will create a text file and csv file .

I have attached a screenshot for this in images please refer 
bul_query1.png , bul_query2.png



