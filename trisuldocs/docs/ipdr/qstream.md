# Trisul Query Flow Stream

## Overview

`tool_qstreamflow` is the command-line tool used by Trisul to query the flow database and generate IPDR/compliance reports in a streaming, low-memory manner.

It is well-suited for:

- IPDR extraction for LEA / DoT compliance
- Investigating traffic for specific IPs, ports, or protocols
- Running large-range flow queries without loading everything into memory
- Processing thousands of IPs using lists or files
- Subscriber/AAA identity lookups during flow reporting

This is the backend engine used internally by Trisul’s IPDR search UI.
For full details of every flag, refer to the system manpage.


## Basic Usage
### General Form
```bash
tool_qstreamflow [OPTIONS]
```

At minimum, you provide:

- A date/time range
- One or more filters (IP, port, protocol, tag, IP list, IP file)

## Typical Usage Patterns

Query a single IP
```bash
tool_qstreamflow -f FROM_DATE -t TO_DATE -i <IP>
```
Query multiple IPs
```bash
tool_qstreamflow -f FROM_DATE -t TO_DATE --ip-list <IP1,IP2,IP3>
```
Query using large IP lists (text file)
```bash
tool_qstreamflow -f FROM_DATE -t TO_DATE --ip-file <file>
```
Generate compliance output (TRAI format)
```bash
tool_qstreamflow -f FROM_DATE -t TO_DATE --report-format trai -i <IP>
```
Save results to a file
```bash
tool_qstreamflow -f FROM_DATE -t TO_DATE -i <IP> -o <output_file>
```
Enable subscriber/AAA lookup
```bash
tool_qstreamflow -f FROM_DATE -t TO_DATE -i <IP> --subscriber-db <DBFILE> --lookup-userid
```
## Essential Options (Quick Summary)

You will commonly use:

- `-f, --from-date` - Start time
- `-t, --to-date` - End time
- `-i, --ipaddress` - IP to search
- `--ip-list` - Comma-separated list of IPs
- `--ip-file` - File containing IPs/CIDR blocks
- `--report-format` - `full | fullcsv | trai`
- `-o, --output` - Output file
- `--show-progress` - Show progress (for long jobs)

For full list and descriptions, refer to the manpage included with Trisul.
