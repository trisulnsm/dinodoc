# Troubleshooting NetFlow Data Ingestion Issues: A Step-by-Step Guide

When NetFlow is not being received, a methodical approach is crucial to identify and resolve the issue efficiently. Please wait at least 5 minutes after starting Trisul. If the data is still not showing follow these sequential steps to troubleshoot and ensure seamless NetFlow data ingestion.

**Step 1: Verify Trisul Configuration**  
## NetFlow Mode Validation  

Confirm that Trisul is explicitly configred to operate in NetFlow mode. This basic check helps prevent misconfiguration-related issues. Review the Trisul Product Mode Selector settings to ensure that it is set to collect and process NetFlow data.

**Step 2: Validate NetFlow Packet Receipt**  
## Packet Capture 

Utlize `tcpdump` to capture and verify the receipt of NetFlow packets. This helps determine if the issue lies with the network or the Trisul configuration. Run the following command to capture NetFlow packets.

Tcpdump -nnn -i eth0 `port 2055`
Replace eth0 with the relevant network interface and 2055 with the expected NetFlow port (if different).

**Step 3: Port Verification**
## Check whether the port number points to Netflow or Sflow

Ensure that NetFlow packets are being received on the correct ports. Verify that the port numbers match the expected configuration. 
- UDP port 2055 (default for NetFlow)
- UDP port 6343 (default for sflow)

If packets are not captured or are received on incorrect ports, investigate firewall connectivity, routing issues, or misconfigured port settings.

**Step 4: Verify Template Receipt**
## Template Packet Validation

Confirm the template packets are being received by Trisul. Template packets contain essential information for decoding NetFlow data. Use `tcpdump` and inspect template packets. Look for packets with the following characteristics.  

- source address
- destination address
- protocol
- source port
- destination port
- interface input
- interface output
- counter byte long
- counter packet long
- timestamp absolute first
- timestamp absolute last

**Step 5: Validate Template Correctness**
## Template Contents Verification

Verify that the received templates are correctly formatted and contain the expected fields. Check the template ID, field count, and field types to ensure they match the expected configuration. This step helps identify issues with template configuration or corruption during transmission.

By following these systematic troubleshooting steps, you can efficiently identify and resolve issues related to NetFlow data ingestion, ensuring accurate and reliable data collection and analysis.