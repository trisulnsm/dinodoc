# NetFlow Not Receiving Issues

:::info Applies to
Trisul NetFlow Analyzer, Trisul IPDR DoT Compliance Solution and Trisul ISP Analytics, which use flow-based processing.
:::

When NetFlow is not being received, a methodical approach is crucial to identify and resolve the issue efficiently. Please wait at least 5 minutes after starting Trisul. If the data is still not showing follow these sequential steps to troubleshoot and ensure seamless NetFlow data ingestion.

**Step 1: Verify Trisul Configuration**  
## NetFlow Mode Validation  

Confirm that Trisul is explicitly configured to operate in NetFlow mode. This basic check helps prevent misconfiguration-related issues. Review the Trisul Product Mode Selector settings to ensure that it is set to collect and process NetFlow data.

**Step 2: Validate NetFlow Packet Receipt**  
## Packet Capture 

Use `tcpdump` to capture and verify the receipt of NetFlow packets. This helps determine if the issue lies with the network or the Trisul configuration. Run the following command to capture NetFlow packets.

```
sudo tcpdump -i eth0 -nnn "udp port 2055"
```

Replace eth0 with the relevant network interface and 2055 with the expected NetFlow port (if different).

**Step 3: Port Verification**
## Check whether the port number points to Netflow or Sflow

Ensure that NetFlow packets are being received on the correct ports. Verify that the port numbers match the expected configuration. 
- UDP ports 2055, 2056, 2057, 9500 and 9993 (NetFlow defaults)
- UDP port 6343 (sFlow default)

These are the default ports listed in [Configuring NetFlow](/docs/guide/ug/netflow/netflow_setup). If your exporter sends to another port, map it in **Context: default &rarr; profile0 &rarr; Access Points**.

If packets are not captured or are received on incorrect ports, investigate firewall connectivity, routing issues, or misconfigured port settings.

**Step 4: Verify Template Receipt**
## Template Packet Validation

Confirm the template packets are being received by Trisul. Template packets contain essential information for decoding NetFlow data. To see the templates Trisul has received, go to **Context: default &rarr; Admin Tasks &rarr; NetFlow Template DB** and select the Probe and the router. See [NetFlow Template DB](/docs/guide/ag/admintasks/netflow_templatedb). Check that the templates include fields such as:  

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