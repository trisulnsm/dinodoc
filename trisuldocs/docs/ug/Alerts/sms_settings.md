---
sidebar_position: 8

sidebar_label: SMS Alert Delivery

---

# SMS alert delivery

If you have access to an SMS Message Gateway you can dispatch alerts via SMS to your Mobile phone.

Currently only dispatch of IDS alerts is supported via SMS.

## Step 1: Edit the sms_settings configuration file

The configuration file is located in  
`/usr/local/share/webtrisul/config/initializers/sms_settings.rb`

## Configurations

| Variable             | Default                                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SMS_USERNAME         | user                                                                                                                                                     |
| SMS_PASSWORD         | password                                                                                                                                                 |
| SMS_MOBILETO         | 0000000000                                                                                                                                               |
| SMS_MOBILEFROM       | 1111111111                                                                                                                                               |
| SMS_HTTP_TEMPLATE    | `<http://www.mygateway.com/username=<%= SMS_USERNAME%>&password=<%= SMS_PASSWORD >&to=<= SMS_MOBILETO >&from=<= SMS_MOBILEFROM >&text=<= sms_message %>` |
| SMS_MSG_TEMPLATE     | `Trisul <%= kipa%>-<%= kipz > <= ksid > ports <= kpoa%>-<%= kpoz%>`                                                                                      |
| SMS_BLOCK_PRIORITIES | []                                                                                                                                                       |
| SMS_BLOCK_SIGS       | []                                                                                                                                                       |
| SMS_MIN_INTERVAL     | 300                                                                                                                                                      |
| SMS_MAX_CHARS        | 130                                                                                                                                                      |
