# Trisul AI CLI

## **What this does**
Trisul AI CLI is a conversational interface for **Trisul Network Analytics**.

It lets you ask questions about your network in plain English and get answers directly in the terminal.

This is an optional feature available at no extra cost.
You can install it after completing [Trisul package installation](/docs/ag/install/doinstall) and [selecting the product mode](/docs/ag/install/selectmode).

## **Before you begin**
Make sure the following are available:

- Python 3.8 or later
- A running Trisul instance
- API key for the configured LLM
- Access to the Trisul context (local or remote)

## **Install**
### 1) Install system packages
```
sudo apt update
sudo apt install python3-pip python3.12-venv -y
```
### 2) Create virtual environment
```
python3 -m venv .venv
source .venv/bin/activate
```
### 3) Install package
```
pip install trisul_ai_cli
```
### 4) Run

```
trisul_ai_cli
```

## **Connect to Trisul**
### 1) Default (local)
Uses:
```
context0
```
No additional setup required.

### 2) Remote
Specify endpoint:
```
tcp://<ip>:<port>
```
All queries are executed on the selected endpoint.

## **Run queries**  
Enter queries directly.  
Examples:
 
"*top hosts last 1 hour"  
"top applications by traffic"  
"https traffic today*"    

Output is returned as a table or summary.

### 1) Charts  
To view traffic over time:
```
https traffic for 192.168.10.25 last 6 hours
```
Displays chart and corresponding data.

### 2) Commands
```
exit
quit
change_api_key
```

### 3) Logs  
Written to:
```
trisul_ai_cli.log
```
## **If something does not work**

### No response

- Check Trisul is running
- Verify context or endpoint

### Invalid key

- Run change_api_key

### No data

- Check time range
- Check counter groups