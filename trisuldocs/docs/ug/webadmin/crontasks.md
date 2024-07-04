# 12.8. Background tasks

Trisul installs the following background tasks

| Task Name              | Run Frequency | Description                                                                          |
| ---------------------- | ------------- | ------------------------------------------------------------------------------------ |
| cronmailreport         | 15 Mins       | Generates scheduled reports and mails them out                                       |
| tca_dispatch           | 5 Mins        | Summarizes threshold crossing alerts into an email and sends it out                  |
| data_refresh           | 30 Mins       | Automatically refresh plugins data (GeoIP, Badfellas blacklists, URLFilter database) |
| clean_wt_tmp           | 12:00:00 AM   | Removes 7 days older file from webtrisul tmp directory                               |
| clean_persists         | 12:00:00 AM   | Removes 10% resolved keys from persists key table to retain db size                  |
| threshold_update_bands | 12:15:00 AM   | Updates the trisul training data                                                     |
| summary_counts_update  | 1:00:00 AM    | Updates flow,resource,fts count                                                      |

## 12.8.1.View or modify

Trisul uses the regular unix `crontab` to schedule background tasks.

##### To view crontab list

> Login as root, then type :
> crontab -l

```
##__webtrisul_pdf_report__
*/15 * * * * /usr/local/share/webtrisul/lib/tasks/rbenv_exec.sh /usr/local/share/webtrisul/lib/tasks/cronmailreport.rb 
##__webtrisul_tca_report__
*/5  * * * * /usr/local/share/webtrisul/lib/tasks/rbenv_exec.sh /usr/local/share/webtrisul/lib/tasks/tca_dispatch.rb 
##__data_refresh__
*/30 * * * * /usr/local/share/webtrisul/lib/tasks/rbenv_exec.sh /usr/local/share/webtrisul/lib/tasks/data_refresh.rb 
##__clean_wt_tmp__
0 0 * * * /usr/local/share/webtrisul/lib/tasks/rbenv_exec.sh /usr/local/share/webtrisul/lib/tasks/clean_wt_tmp.rb 
##__clean_persists__
0 0 * * * /usr/local/share/webtrisul/lib/tasks/rbenv_exec.sh /usr/local/share/webtrisul/lib/tasks/clean_persists.rb 
##__threshold_update_bands__
15 0 * * * /usr/local/share/webtrisul/lib/tasks/rbenv_exec.sh /usr/local/share/webtrisul/lib/tasks/threshold_update_bands.rb 
##__summary_counts_update__
0 1 * * * /usr/local/share/webtrisul/lib/tasks/rbenv_exec.sh /usr/local/share/webtrisul/lib/tasks/summary_counts_update.rb
```

##### To modify crontab list

> Login as root, then type : pre(language-bash). crontab -e

## 12.8.2.Background tasks log files

Login as `admin` user to manage menus.

All the Trisul background tasks send its output to the log file located
at  ***/usr/local/share/webtrisul/logs/back_tasks.log***

You can also access these logs from the web interface

:::note navigation

Select *Webadmin* -\> Manage -\> Web Server Logs -\>Background tasks log

:::
