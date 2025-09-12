# REST API 

## Overview

This API allows you to manage IPDR customers by performing CRUD operations (Create, Read, Update, Delete). The use case for this API is 

- assign user names, address, email and other info for RADIUS/AAA customers
- assign Static IP users

Typically our customers will plug this API into their CRM system. 



## Base URL
https://SERVER_IP
/api/ipdrcustomers


## Authentication



:::warning  API TOKEN
All requests require an API token and a username for authentication.

:memo: See [Generate API Token in Manage Users in the Admin Guide](/docs/ag/webadmin/manageusers#generate-api-token)
:::



All requests must include the following parameters in the request body:
- `api_token`: Your API token for authentication.
- `username`: Your username.


## Methods

### 1. READ
Retrieve the list of IPDR customers.

#### Request Format

```bash
curl -X HTTP_METHOD 'http://SERVER_IP:PORT/api/ipdrcustomers' -H 'Content-Type: application/json' -d '{"api_token": "API_TOKEN", "contextname" : "default", username":"USERNAME", KEY:VALUE, KEY:VALUE}'
```

#### Request Example
```bash
curl -X GET 'http://192.168.1.77:8000/api/ipdrcustomers' -H 'Content-Type: application/json' -d '{"api_token": "GiXwBWWv5g2Fs6QeaTlx",  "contextname" : "default", "username":"user"}'
```

#### Output Example

```json
[
    {
        "id": 5,
        "Name": "Trisul",
        "Address": "Chennai",
        "Email": "demo@gmail.com",
        "PhoneNumber": "1234567890",
        "AltPhoneNumber": "9999999999",
        "UserID": "B68t19"
    },
    {
        "id": 6,
        "Name": "Trisul Network Analytics",
        "Address": "India",
        "Email": "test@gmail.com",
        "PhoneNumber": "3333333333",
        "AltPhoneNumber": "5555555555",
        "UserID": "Xlr8d3"
    }
]
```

### 2. CREATE
Create a new IPDR customer.


#### Example
```bash
curl -X POST 'http://192.168.1.77:8000/api/ipdrcustomers' -H 'Content-Type: application/json' -d '{ "api_token": "GiXwBWWv5g2Fs6QeaTlx",  "contextname" : "default", "username": "user", "Name": "Trisul", "Address": "Chennai", "Email": "demo@gmail.com", "PhoneNumber": "1234567890", "AltPhoneNumber": "9999999999", "UserID": "B68t19"}'
```


### 3. UPDATE
Update an existing IPDR customer.


#### Example
```bash
curl -X PUT 'http://192.168.1.77:8000/api/ipdrcustomers/B68t19' -H 'Content-Type: application/json' -d '{ "api_token": "GiXwBWWv5g2Fs6QeaTlx", "contextname" : "default", "username":"user", "Name": "Trisul Network Analyzer", "Address": "India", "Email": "test@gmail.com", "PhoneNumber": "3333333333", "AltPhoneNumber": "5555555555", "UserID": "B68t19"}'
```


### 4. PARTIAL UPDATE
Partially update an existing IPDR customer.

#### Example
```bash
curl -X PATCH 'http://192.168.1.77:8000/api/ipdrcustomers/B68t19' -H 'Content-Type: application/json' -d '{"api_token": "GiXwBWWv5g2Fs6QeaTlx", "contextname" : "default", "username":"user", "Address": "Partially Updated"}'
```

The difference between the update and partial update is that in the update, you have to provide the values for all fields, even if you don't change them. In a partial update, you can pass only the values that you want to change in the record.


### 5. DELETE
Delete an existing IPDR customer.

#### Example
```bash
curl -X DELETE 'http://192.168.1.77:8000/api/ipdrcustomers/B68t19' -H 'Content-Type: application/json' -d '{"api_token": "GiXwBWWv5g2Fs6QeaTlx", "contextname" : "default", "username":"user"}'
```










