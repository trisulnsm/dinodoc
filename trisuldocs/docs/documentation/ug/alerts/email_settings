# 9.2. Email alert delivery

This page describes how you can configure Trisul to send you an email when any alert fires.

The way the alerting pipeline works is the following.

- Alerts are first sent to syslog
- The email alert service watches syslog for alerts and dispatches them

## 9.2.1 Using the Email Alerts Wizard

Trisul has a new Email Alert Wizard that lets you configure everything from one place.

To access that

:::note navigation

Login as Admin → Select Context and profile → Under Alerts → Email Alerts Wizard

:::

You can just follow the steps in the wizard.

## 9.2.2 Basic steps to enable email alerts

The following steps are needed to forward email alerts.

- ##### Setup SMTP Server to send emails
  
  :::note navigation
  
  Login as Admin → Manage → [Email Settings](https://trisul.org/docs/ug/reports/emailsettings.html)
  
  :::

- ##### Ensure who receives the Alert Emails
  
  :::note navigation
  
  Login as Admin → Manage → [Email Settings](https://trisul.org/docs/ug/reports/emailsettings.html) → Select “Configure Email Alerts”
  
  :::

- ##### Ensure alerts are forwarded to syslog
  
  :::note navigation
  
  Login as Admin → Select Context > profile → “View Alert Groups” > Check if your alert is forwarded to syslog/email. Use “Edit” to enable
  
  :::

- ##### Start the email Notification service
  
  The email notification service logtails the syslog and dispatches 
  alerts. The service is careful not to flood < 5 minutes and can 
  automatically create digests if alert volume are too high.
  
  :::note navigation
  
  Login as Admin → Manage > Start/Stop Tasks → "Start Email Notification Service
  
  :::

## 9.2.3 Advanced customization of email subjects and bodies

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

| EMAIL_BLOCK_PRIORITIES | []  | Block these priorities. Set this to `[3]` to block emails for low priority alerts |
| ---------------------- | --- | --------------------------------------------------------------------------------- |
| EMAIL_BLOCK_SIGS       | []  | Block these signatures for email alerts                                           |
