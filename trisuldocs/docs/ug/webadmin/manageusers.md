# 12.2.Manage Users

Manage users and their access levels.

## 12.2.1.Types of users

A brand new install of Trisul has two users pre-provisioned

- admin - username `admin` and password `admin`

- user - username `user` and password `user`

The admin login must be used to perform all tasks that involve system
configuration change, starting and stopping Trisul processes, user and
role management.

The user login is for all other operations like viewing and scheduling
reports, packet analysis, viewing alerts, and pretty much everything
else a normal operator would do on a regular basis.

> #### Trisul 7.0 new
> 
> This splitting of web interface based on user type is new in Trisul
> 6.0.  
> All the operations in this page require an admin user.

## 12.2.2.Create a new user

Login as `admin` user to create a new user

:::note 

Select Web Admin -\> Manage -\> Users

:::

\# A list of current users is shown  
\# Click **Create a new user** button  
\# Fill up details below

| Field                | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| User Name            | The long name of user                                                    |
| Name                 | Login name for user, no spaces, keep it short                            |
| Role                 | Webtrisul user Roles .See ” Roles”:userroles.html section for more       |
| LDAP Login           | User can use [LDAP](/docs/ug/webadmin/ldap_login.html) password to login |
| Password             | Password for user                                                        |
| Password Again       | Repeat the password again                                                |
| Allow multiple Login | Allow concurrent login option to user                                    |
| Default Home Page    | User will be redirected to the page after successfull login              |
| Default Dashboard    | When user logs in he/she is taken directly to this dashboard)            |
| Allowed Context      | Restrict user to this context only                                       |

> For LDAP Login User Name should be LDAP filter attribute value.  
> For Example if you specified `Email` as filter attribute in LDAP domain
> configuration then you need to enter you email in User Name field.

## 12.2.3.Edit existing user

Login as `admin` user to create a new user

:::note navigation

Select Web Admin -\> Manage -\> Users

:::

- Click the **Edit** link

- Edit the fields described as under “Add User”

#### Reset Password

Click the `Reset password` button at bottom left side in **Edit User**
form to reset password. You will be shown the new automatically
generated password. Please send it to the user and have them create a
new password immediately on login.

## 12.2.4.Delete User

You have to have admin rights as well as the user you are trying to
delete must be logged off.

Login as `admin` user to create a new user

:::note navigation

Select Web Admin -\> Manage -\> Users

:::

Click the **Delete** link next to the user

## 12.2.5.Change Own Password

- Click the user name `dropdown` list at the top right side

- Click the edit button

- Click **Change Password** button to change password
