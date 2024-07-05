# Alerts

You can set up Trisul to generate alerts based on network activity.

These alerts can be

- viewed on the alert bar on the top right (automatically within 1 minute)
- analyzed from the alerts menu
- dispatched via SYSLOG, EMAIL, or SMS notification

![](image/alerts1.png)

## Types of alerts

Trisul can generate 5 different types of alerts.

### Threshold Band Anomaly alerts

**NEW**

Threshold bands are created for selected metrics based on past 
historical activity. Metrics are continously compared with expected 
values and alerts are generated if they fall out of bounds.

- [Threshold Band Anomaly alerts](https://trisul.org/docs/ug/alerts/tband.html)

### Threshold Crossing Alerts

Notifies you when ever any traffic meter crosses pre-configured hi and lo water marks.

- [Working with TCAs](https://trisul.org/docs/ug/alerts/tca.html)

### Flow Tracker Alerts

Alert on certain predefined flow activity. For example : Alert on 
flows that upload 20MB or more out of your network. There are many other
 types of flow activity that can be alerted upon as well.

- [Flow Tracker Alerts](https://trisul.org/docs/ug/alerts/ft.html)

### Intrusion Alerts (IDS)

Trisul interfaces with Snort/Suricata using Unix Sockets. The alerts are correlated with other traffic metrics.

- [The web based Real Time Alert Console](https://trisul.org/docs/ug/alerts/ids_stabber.html)
- [Connecting Trisul with Snort via a Unix Socket](https://trisul.org/docs/howto/setup_ids_alerts.html)

### Blacklist alerts (Badfellas)

Requires the Badfellas plugin. Trisul will continuously monitor your 
traffic and hold it up against millions of blacklisted entities. Any 
traffic that trips one of the blacklists, be it spam, phishing attacks, 
botnet C&C, is flagged.

- [Installing the BadFellas plugin](https://trisul.org/docs/ug/install/badfellas.html)
- [Badfellas Alerts](https://trisul.org/docs/ug/alerts/mw.html)

## Viewing and forwarding alerts

The alerts generated appear immediately on the user interface. You can also setup the following

1. Sending alerts to [SYSLOG](https://trisul.org/docs/ref/trisulconfig.html#syslog) – from where you can send it to your other logging / alerting tools
2. Send alerts via [email](https://trisul.org/docs/ug/alerts/email_settings.html)
3. Send alerts via [SMS service](https://trisul.org/docs/ug/alerts/sms_settings.html)
4. Send alerts to [Microsoft Teams](https://trisul.org/docs/ug/alerts/msteams.html)

The Email and SMS services work by reading the SYSLOG alerts. So you need [ensure SYSLOG alerting is enabled](https://trisul.org/docs/ref/trisulconfig.html#syslog) in trisulConfig.xml. It is enabled by default.
