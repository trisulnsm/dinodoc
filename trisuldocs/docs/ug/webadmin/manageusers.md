---
sidebar_position: 2
---

# Manage Users

Manage users and their access levels.

## Types of Users

A brand new install of Trisul has two users pre-provisioned

- admin - username `admin` and password `admin`

- user - username `user` and password `user`

The admin login must be used to perform all tasks that involve system
configuration change, starting and stopping Trisul processes, user and
role management.

The user login is for all other operations like viewing and scheduling
reports, packet analysis, viewing alerts, and pretty much everything
else a normal operator would do on a regular basis.


## Create a New User

Login as `admin` user to create a new user

:::note 

Select Web Admin &rarr; Manage &rarr; Users

:::

* A list of current users is shown  
* Click **Create a new user** button  
* Fill up details below

| Field                | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| User Name            | The long name of user                                               |
| Name                 | Login name for user, no spaces, keep it short                       |
| Role                 | Webtrisul user Roles .See ” Roles”:userroles.html section for more  |
| LDAP Login           | User can use [LDAP](/docs/ug/webadmin/ldap_login) password to login |
| Password             | Password for user                                                   |
| Password Again       | Repeat the password again                                           |
| Allow multiple Login | Allow concurrent login option to user. The default is `true` which means concurrent logins are allowed. <br/>When set to `false`  If a user logs in with an ID that is already logged in, the older login session will be terminated.|
| Default Home Page    | User will be redirected to the page after successfull login         |
| Default Dashboard    | When user logs in he/she is taken directly to this dashboard |
| Allowed Context      | Restrict user to this context only                                  |

> For LDAP Login User Name should be LDAP filter attribute value.  
> For Example if you specified `Email` as filter attribute in LDAP domain
> configuration then you need to enter you email in User Name field.

## Edit Existing User

Login as `admin` user to create a new user

:::note navigation

Select Web Admin &rarr; Manage &rarr; Users

:::

- Click the **Edit** link

- Edit the fields described as under “Add User”

#### Reset Password

Click the `Reset password` button at bottom left side in **Edit User**
form to reset password. You will be shown the new automatically
generated password. Please send it to the user and have them create a
new password immediately on login.

## Delete User

You have to have admin rights as well as the user you are trying to
delete must be logged off.

Login as `admin` user to create a new user

:::note navigation

Select Web Admin &rarr; Manage &rarr; Users

:::

Click the **Delete** link next to the user

## Change Own Password

- Click the user name `dropdown` list at the top right side

- Click the edit button

- Click **Change Password** button to change password
