---
sidebar_position: 4
---

# User Roles

Trisul web users fall into three roles

- Administrators  

- Forensics Operators  

- Operators  

- Subscriber

The default built-in user called **admin**. You can create other users with the same privileges.  

> Important:  The built-in admin user cannot be deleted.

## Roles

There are four roles that a user can possess.

| Role name           | Powers                                                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| Administrator       | Can do anything                                                                                                 |
| Operators           | No admin powers. Can only monitor traffic. Cannot look at flows, resources, or raw packets                      |
| Forensics Operators | No admin powers. Can monitor traffic, but also inspect in depth what anyone is doing, down to the packet level. |
| Subscriber          | No admin powers. Can investigate subscribed IPs or Interfaces                                                   |

A role is but a set of allowed and disallowed operations. You can change
what a role is allowed to do

Login as `admin` user to manage user roles.

:::note navigation

Select *Webadmin* \> Manage -\> Roles

:::

For each role  

- The **red** color operations are prevented 

- The **green** color operations are allowed  

- The **blue** color operations are read only

## Inactivity Security Timeout

Due to the sensitive nature of the data presented by Trisul, there is an
inactivity timeout associated with each user. If no user interaction is
seen by Webtrisul server for a certain period of time, the user is
automatically logged out. They will then have to present their
login/password again to re-enter the system.

You can increase inactivity timeout  
:::note navigation 
To access, Select Manage -\> App settings -\> Web Server -\> Idle Timeout  
:::

If you want to disable it - set it to some *huge value* (1000000
seconds)

## Authentication Audit Log

All login activity is logged by the server

> Login as `admin` user to view login activity.

:::note navigation

Select *Webadmin* -\> Manage -\> Auth Log

:::

The following details are logged by the server  

- Login time  

- Login IP  

- Login Status  

- Reason for failure to login (eg, wrong password)  

- Logout (with reason)  

- Inactivity timeout log
