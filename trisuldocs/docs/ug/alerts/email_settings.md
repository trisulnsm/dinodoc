---
sidebar_position: 2
---

# Email Alert Delivery

This page describes how you can configure Trisul to send you an email when any alert fires.

The way the alerting pipeline works is the following.

- Alerts are first sent to syslog
- The email alert service watches syslog for alerts and dispatches them

## Using the Email Alerts Wizard

Trisul has a new Email Alert Wizard that lets you configure everything from one place.

To access that Login as Admin

:::info navigation
:point_right: Go to Context: default → Profile0 → Alerts → Setup Email
:::

This will take you to the Email Alerts Wizard as shown in this example. And against each settings it will be shown if the service is configured or disabled. 

![](image/emailalertswizard.png)

*Figure: Email Alerts Configuration Wizard*


### Setup SMTP Server to send emails

1) In the Email Alerts Configuration Wizard, Click Email Account Settings. This will open the Email server account settings and follow this: [Basic Steps to Enable Email Alerts](/docs/ag/webadmin/emailsettings) 

2) In the Email Alerts Configuration Wizard, Click Start/Stop. This will take you to the administrative tasks page where you can start or stop email alerts notification service. Check here to do that: [Start or Stop Tasks](/docs/ag/webadmin/startorstop_tasks#startstop-an-email-notification-service)


##### Ensure alerts are forwarded to syslog
  
  From the Email Alerts Configuration Wizard, click "Alerts go to syslog". This will open the alert groups window and you can see the list of all the alert groups and their GUIDs status. You can see the total number of alert groups and the number of alert groups currently enabled and disabled right next to the title. You can disable all the alert groups by clicking "Disable all" on the top right corner.
  
  ![](image/emailsettings3.png)
  
  *Figure: Email Alerts Groups and their GUIDs*
  
  The alert groups table contains the following components and options.
  
  | Components              | Descriptions                                                                    |
  | ----------------------- | ------------------------------------------------------------------------------- |
  | Name                    | Name of the Alert Group                                                         |
  | Description/GUID        | Description of the Alert group and its GUID                                     |
  | Status                  | Status of the Alert group if its enabled or disabled                            |
  | Forward to syslog/email | Syslog level to automatically forward all alerts in this group to syslog and email|
  | Option toolbar          | You can edit or disable each alert group by clicking on the three lines options against each alert group.                                                                                   |

These components can be edited or disabled by clicking on the option toolbar against each alert group. Once providing all the fields, click Update to save the configuration.

## Advanced Customization of Email Subjects and Bodies

Trisul uses ERB Templates to configure email subjects and bodies.

The config file is located in  
`/usr/local/share/webtrisul/config/initializers/emailalert_settings.rb`

The config file is well documented and should be self describing.

The file contains 5 sections. Each controlling a particular type of alert

1. TCA = Threshold Crossing Alerts
2. FT = Flow Tracker Alerts
3. BADFELLAS = Blacklist based Alerts
4. IDS = Snort/Suricata alerts
5. TBA = Threshold Band Alerts

### IDS Alerts

IDS alerts from Snort/Suricata processed via Trisul.

| EMAIL_BLOCK_PRIORITIES | []  | Block these priorities. Set this to `[3]` to block emails for low priority alerts|
| ---------------------- | --- | ---------------------------------------------------------------------------------|
| EMAIL_BLOCK_SIGS       | []  | Block these signatures for email alerts                                          |
