---
sidebar_position: 2
---

# Users

Manage users and their access levels.

## Types of Users

A brand new install of Trisul has two users pre-provisioned

- **admin** - username `admin` and password `admin`

The `admin` login must be used to perform all tasks that involve system
configuration change, starting and stopping Trisul processes, user and
role management.

- **user** - username `user` and password `user`

The `user` login is for all other operations like viewing and scheduling
reports, packet analysis, viewing alerts, and pretty much everything
else a normal operator would do on a regular basis.


## Create a New User

Login as `admin` user to create a new user

:::info 

:point_right: Select Web Admin &rarr; Manage &rarr; Users

:::

* A list of current users is shown  
* Click **Create a new user** button  
* Fill up details below

| Field                | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| User Name            | The long name of user                                               |
| Authentication       | User can use [LDAP](/docs/ag/webadmin/ldap_login) password to login |
| Password             | Password for local authentication of the user                       |
| Password Again       | Repeat the password again                                           |
| Full Name            | Login name for user, no spaces, keep it short                       |
| Role                 | Webtrisul user Roles .See [Roles](userroles) section for more  |
| Allow multiple Login | Allows concurrent login option to user. The tickbox is checked by default which means concurrent logins are allowed. <br/>When unchecked, If a user logs in with an ID that is already logged in, the older login session will be terminated.|
| Default Dashboard    | If you set a Default Dashboard, the user will be taken directly to that dashboard after logging in. |
| Default Home Page URL | If you set a Default Home Page URL, that takes priority over the Default Dashboard. After logging in, the user will be taken to the specified page (it can be any page, not just a dashboard).<br/> Users can also set their own home page by clicking the Home 🏠 icon from within their dashboards. |
| Allowed Context      | Restrict user to these selected contexts only|
| Change User Avatar   | Click to choose file and upload the avatar to set it as user avatar. This shows in the top right of the page. |


:::note For LDAP Users

For LDAP Login User Name should be LDAP filter attribute value.  
For Example if you specified `Email` as filter attribute in LDAP domain
configuration then you need to enter the users email attribute  in the  User Name field.

:::


### Changing Avatar Logo

:::info 

:point_right: Select Web Admin &rarr; Manage &rarr; Users 

:::

Click on the **Edit** option (from the action button) against the user and in the  **Change User Avatar** field Click **Browse** to choose a file and upload the avatar to set it as user avatar. The figure below shows the user avatar.

![](images/avatar.png)  
*Figure: Avatar Logo*   


## Edit Existing User

Login as `admin` user to create a new user

:::info navigation

:point_right: Select Web Admin &rarr; Manage &rarr; Users

:::

Click the **Edit** option (from the action button dropdown) against the user and modify the fields.


#### Reset Password

In the **Admin Operations** button from the top right corner, click the **Reset password** option. You will be shown the new automatically
generated password (This can be viewed only once). Please send it to the user and have them create a new password immediately on login.

## Delete User

You have to have admin rights as well as the user you are trying to
delete must be logged off.

Login as `admin` user to create a new user

:::info navigation

:point_right: Select Web Admin &rarr; Manage &rarr; Users

:::

Click the **Delete** option (from the action button dropdown) against the user

## Change Own Password

- Click the [*Account button*](/docs/ug/ui/userlayout#account) at the upper right hand side of the page to open the dropdown menu and
- Click *My Account*  
- Click **Change Password** button to change your password.  

## Reset password by admin

The `admin` user can reset the password of any user.

:::info navigation
:point_right: Select Web Admin &rarr; Manage &rarr; Users &rarr; Select **Edit** (from the action button dropdown) against any user. 
:::

Select **Reset Password** from the Admin Operations menu button on the top right corner.


## Generate API Token

Trisul supports login as well as API access using a login token for any user you choose.

:::info navigation
:point_right: Select Web Admin &rarr; Manage &rarr; Users &rarr; Select **Edit** (from the action button dropdown) against any user.
:::

:::info navigation
Select **Generate Login Token** from the **Admin Operations** menu on the top right.
:::


You will get a API Token like the one shown in the figure below, you can copy and share it with the user.  

![api token](images/apitoken.png)

*Figure: API Token for user* 

This token can be viewed again by 
:::info navigation
:point_right: Clicking **View Login/API Token** from the **Admin Operations** menu on the top right.
:::

## Changing Super Admin Name

:::info navigation
:point_right: Select Web Admin &rarr; Manage &rarr; Users &rarr; Select Action button against admin user.
:::

![](images/superadminname.png)  
*Figure: Changing Super Admin Name*

To change the Superadmin username, click the **Action button** next to it and select **Edit Super Admin Name**. In the dialog box, enter the new name, click **Update**, and the change will appear immediately in the top-right username display.


## Username Guidelines

![](images/username_criteria.png)  
*Figure: Showing Username in Webadmin*

- There are no specific constraints for choosing a username.
- You may use any username that is not already taken.

## Password Guidelines

![](images/password_criteria.png)  
*Figure: Showing Password Minimum Length in Webadmin*

- There are no restrictions on the characters you can use in your password.
- Passwords are **case-sensitive**.
- You can include repeated characters, special characters, numbers, or any combination.
- The only password constraint is the minimum number of characters i.e.length which can be customized through the [**Web Trisul server : App Settings**](/docs/ag/webadmin/web_options#ui) and specify the minimum number of characters by specifying in the "User Password Minimum length".

## Password Policy

- For security reasons, we do **not** store previously entered passwords.
- Passwords do **not** expire.
- You can reset your password at any time using [**Reset Settings**](/docs/ag/webadmin/manageusers#reset-password-by-admin)