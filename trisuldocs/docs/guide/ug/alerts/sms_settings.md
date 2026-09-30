# SMS Alert Delivery

If you have access to an SMS Message Gateway you can dispatch alerts via SMS to your Mobile phone.

Trisul can send SMS for four alert types: threshold crossing alerts (TCA), flow tracker alerts (FTA), Badfellas (blacklist) alerts and IDS alerts. Each type has its own on/off switch and message template in the configuration file.

## Step 1: Edit the sms_settings Configuration File

The configuration file is located in  
`/usr/local/share/webtrisul/config/initializers/sms_settings.rb`

## Configurations

| Variable | Default | Meaning |
| --- | --- | --- |
| SMS_ENABLED | false | Set to `true` to send SMS |
| SMS_USERNAME | user | Gateway user name, if your gateway needs one |
| SMS_PASSWORD | password | Gateway password, if your gateway needs one |
| SMS_APIKEY | (sample key) | Gateway API key. Replace the sample value with your own key |
| SMS_MOBILETO | 0000000000 | Destination mobile number |
| SMS_MOBILEFROM | 1111111111 | Sender number |
| SMS_HTTP_TEMPLATE | see below | Gateway URL that Trisul calls for each SMS |
| SMS_MSG_TEMPLATE | see below | Default message text |
| SYSLOG_DIRS_SMS | /var/log/syslog /var/log/messages | Where Trisul reads alerts from. Add your location first if you redirect Trisul syslogs |
| SMS_MIN_INTERVAL | 300 | Minimum seconds between SMS |
| SMS_MAX_CHARS | 150 | Maximum characters per SMS |
| SMS_TCA, SMS_FTA, SMS_BADFELLAS, SMS_IDS | true | Send SMS for this alert type |
| SMS_BLOCK_TCAID, SMS_BLOCK_FTAID | [] | TCA or flow tracker IDs to suppress, for example `[2,3]` |
| SMS_BLOCK_BADFELLAS | [] | Badfellas types to suppress, for example `["DNSBH"]` |
| SMS_BLOCK_PRIORITIES | [] | IDS priorities to suppress (1 = high, 2 = medium, 3 = low), for example `[2,3]` |
| SMS_BLOCK_SIGS | [] | IDS signatures to suppress, in `sid-xxx` format |

The shipped `SMS_HTTP_TEMPLATE` points at a sample gateway with `test=true`. Replace it with your gateway's URL:

~~~ruby
SMS_HTTP_TEMPLATE=%q(https://api.textlocal.in/send/?api_key=<%= SMS_APIKEY %>&numbers=<%= sms_to_numbers %>&message=<%= sms_message %>&test=true)
~~~

The default message template:

~~~ruby
SMS_MSG_TEMPLATE = <<MSGEND
  Trisul <%= kipa%>-<%= kipz %> <%= ksid %> ports <%= kpoa%>-<%= kpoz%>
MSGEND
~~~

Each alert type also has its own template: `SMS_TCA_MSG_TEMPLATE`, `SMS_FTA_MSG_TEMPLATE`, `SMS_BL_MSG_TEMPLATE` and `SMS_IDS_MSG_TEMPLATE`.

## Step 2: Restart the SMS notification service

Go to **Web Admin → Manage → Start/Stop Tasks**, then stop and start **SMS notification service**. See [Start/Stop Tasks](/docs/guide/ag/webadmin/startorstop_tasks).
