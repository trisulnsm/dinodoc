# User API

## Overview 

The User Management API is designed to manage users within the Trisul application. This API allows administrators and super administrators to perform various operations, including creating, updating, deleting, and listing users.

## Authentication

All requests to the User Management API require authentication. The following parameters must be included in every request. 

| Parameters | Description |
|------------|-------------|
| auth_username | The username of the administrator or super administrator making the request. |
| api_token | The API token associated with the auth_username |

## Response Format

The User Management API returns error responses in JSON format when a request fails or cannot be processed. In such cases, the API returns a JSON object with the following fields:

- status: Set to "Error" to indicate that the request was unsuccessful.
- message: A descriptive error message providing more information about the error.

\{"status":"Error","message":"User test2 dont have a permission"\}

## Endpoints

### Get Roles

Returns a list of available roles within the web application

**Request**: http://127.0.0.1:3000/api/webusers/get_all_roles?auth_username=user&api_token=D0oHZYPcPeXzoY13ALmA

**Response**: A JSON array of roles, where each role is represented as an array with two elements: id and name.

**Example Response**: [[1,"Administrator"],[2,"Operator"],[3,"Forensic Operator"],[4,"Subscriber"]]

### List all Users

Returns a list of all created users within the application

**Request**: http://192.168.1.17:3000/api/webusers/index?auth_username=user&api_token=D0oHZYPcPeXzoY13ALmA  
**Response**: A JSON array of user objects, where each user object contains the following fields: username, Name, and id.

**Example Response**: [\{"username":"admin","Name":"admin","id":null\},
\{"username":"user","Name":"user","id":null\},\{"username":"apiuser","Name":"API
User","id":null\}]

### Show

Returns information about a specific user including their role and allowed tenants

**Parameters**

| Parameters | Description | Example |
|------------|-------------|---------|
| username | Name of the user to check | test10 |

- If the user exists, the response will include the username, allowed tenants (indicating the user can view all data associated with the specified tenants or subdomains), and role. 

For example: \{"username":"test10","allowed_tenants":["All Tenants"],"role":"Operator"\}

- If the user does not exist, the response will indicate that the user was not found, with a status of "Not Found" and a message.

For example: \{"status":"Not Found","message":"User test10 doesn't exists"\}

### Create

Creates a new user within the application.

**Request**: http://127.0.0.1:3000/api/webusers/create?auth_username=user&api_token=D0oHZYPcPeXzoY13ALmA&username=test4&webtrisul_role_id=2&login_token=REvQ8eWtAAhnGhpC9eG9F4bH8NGQYS&allowed_sub_domains=unplcorp&copy_menu=1&copy_from_user=test1&copy_from_subdomain=unplcorp

**Parameters**

| Parameter | Description | Example |
|-----------|-------------|---------|
| username | Name of the user to create | test10 |
| webtrisul_role_id | Role of the user (You can use get_all_roles request to check all available roles.) | 2 |
| allowed_sub_domains | A comma-separated list of subdomains or tenants that the new user is allowed to access. | Unplcorp,ipdr,customer1 |
| login_token | Login token for the new user to login from other external websites. The Default string is extlogintoken | CpeXzoY13ALmA |
| copy_menu | A boolean value indicating whether to copy the menu from an existing user. When creating a new user, you can choose to copy the menu settings from an existing user. If you don't copy from another user, the system will automatically create a standard set of menu items for the new user. | 1- to copy menu
0- Disable menu copy |
| copy_from_user | The username of the user from which to copy the menu | testuser |
| copy_from_subdomain | The menu is copied from the specified user and subdomain, allowing for customized menus for each subdomain. This means that a user can have different menus associated with different subdomains. | Unplcorp |

**Response**

A JSON object containing the new user's information, including their username, role, and allowed_tenants.

**Example Response**: \{"status":"success","message":"User test4 succesfully created","role":"Operator","allowed_tenants":["UNPL Corporate"]\}

### Update

http://127.0.0.1:3000/api/webusers/update api method updates an existing user within the application.

**Request**: http://127.0.0.1:3000/api/webusers/update?auth_username=user&api_token=D0oHZYPcPeXzoY13ALmA&sername=test11&webtrisul_role_id=2&login_token=REvQ8eWtAAhnGhpC9eG9F4bH8NGQYS&copy_menu=1&copy_from_user=test1&copy_from_subdomain=unplcorp&allowed_sub_domains=unplcorp

**Response**: The response includes the status, message, updated role, and allowed tenants. The response will indicate that the user was updated successfully, along with the updated role and allowed tenants.

**Example Response**: \{"status":"success","message":"User test11 succesfully updated","role":"Operator","allowed_tenants":["UNPL Corporate"]\}

### Delete

Deletes an existing user.

**Request**: http://127.0.0.1:3000/api/webusers/delete?auth_username=user&api_token=D0oHZYPcPeXzoY13ALmA&username=test11

**Response**: The response will indicate that the user was deleted successfully.

**Example Response**: \{"status":"success","message":"User test11 succesfully deleted"\}






