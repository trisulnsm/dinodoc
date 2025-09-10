# Changelog

This changelog outlines the key updates, improvements, and fixes made to Trisul across various releases. Browse through the release notes below to learn about the latest features, enhancements, and bug fixes.

## WEBTRISUL 7.0.2572 (September 5,2025)
0105937: Added option to generate and display Authentication/API tokens.
0105936: Manage users(add/edit/delete) with admin or super admin access.
0105935: Added menu to explore flows & aggregate flows from interface drilldown
0105958: Added drop down menu for peering and prefix analytics drilldown.
0105976: IPDR customer import supports multiple IPS in one CSV row.
0106000: Alerts now include country flags for blacklisted IPs.
0105998: Automated TCA alerts for ICMP flood detection.
0105999: Top Hosts & Apps in email alerts (HTML Format).
0106008: Syslog now uses journalctl for Ubuntu 24 and RHEL9.
0106011: PDF reports now match UI data for "Current Apps".
0106013: Autocomplete enabled across real-time modules.
0105927: Add MaxMind GEOIP key configuration via WebTrisul.
0105978: Detects and skips duplicate entries in IPDR CSV imports.
0105986: Added Send email report option in scheduled report page.
0105991: New Sankey chart module in the dashboard.
0106001: Email settings include "Ignore TLS" option.
0106012: Real-time module error that caused file descriptor limits to be exceeded.
0106017: Automatically use port from nginx configuration file.
0106018: Enhanced Change webserver port and set SSL via nginx for https.
0106020: Threshold Crossing Alert now show control box interface.
0106022: Show ifspeed on Custom Key Monitor (Flow Interface Selection).
0106023: Custom Key Monitor Report for High Utilization Interfaces (75%).
0106024: Added summary table at top of reports.
0106026: TCA alert emails now show utilization in bps for flow interface counter group.
0106033: TCA Alert reports now downloadable.
0106041: Custom Key Monitor supports regex for filtering keys.
0106050: Multicast GraphX supports any three-level cross key mapping.
0106063: IPDR mode now applicable to multiple probes.
0106068: Enhanced Real-time single-value modules for multi-probe environments.


## WEBTRISUL 7.0.2551 (March 13,2025)

0105786: WEB: Fixed help text in Web Trisul App Settings.  
0105787: PKG: Fixed start scripts failure in RHEL9 caused by deprecated init scripts.  
0105790: Added file to specify API details (host, port, key) for IPDR satellite compliance.  
0105791: Added Latitude and Longitude in the IPDR report.  
0105794: Enabled Terminal ID in IPDR Customers CSV import.  
0105796: New Crosskey Tree module introduced.  
0105806: Pop over description now showing in side menu.  
0105807: Set refresh time for custom key monitor.  
0105809: Resolved toppers table alignment overflow issue.  			
0105811: IPDR:Remove duplicate IPs warning if timestamps are different.  
0105812 :IPDR:Allowing now user to specify expiry date for subnet.  
0105814: Showing description now on long term traffic expression on pop over.  
0105815: Removed flows tab from the Interface Drilldown as an option.  
0105821: Interface drill down conversation now showing from trackers when NBAR/AppID/UserID present.  
0105823: Removed Apps/Host from interface drilldown page when the user has enabled only flow tracker for that interface.  
0105843: Custom key monitor dashboard now supports transmit/receive dropdown.  
0105837: Interface Drilldown page crashed on Interface tracker enabled now working properly.  
0105843: Custom key monitor dashboard now supports transmit/receive dropdown.  
0105845: Added bulk edit for toppers counts and bottom counts.  
0105858: WEB: VAPT Enhancements: XSS prevention and Probe validation.  
0105861: System health page now showing when new disk is added.  
0105863: Live SNMP Monitoring now works with management IP assignment.  
0105867: Added "conns" metric to connections modules of current host and current apps dashboards.  
0105871: Total, Max, min values on Current Apps Dashboard now working.  
0105872: Resolved issue in cloning dashboards by assigning a new key.  
0105873: Resolved: Routers and Interface's PDF and Excel Reports now include missing some metrics.  
0105876: Enhanced usability with Key field addition in Long-Term Traffic and Monthly chart dashboards.  
0105877: Download Option on Flow Tagger now available.  
0105887: Fixed an issue in Interface Tracker where users could attempt to disable a non-existent Protocol Tracker for an interface.  
0105891: Added ENABLE_HIGH_SECURITY in default OEM settings file for enhanced security of web app.  
0105893: Updated Manage Storage search for date and slice names.  
0105897: Export to Dashboard json now works with grouped modules.  
0105898: Live/Realtime traffic chart now works for all counter groups.  
0105899: Added option to remove Download XLSX.  
0105901: PDF download option now working in current host dashboard.  

## WEBTRISUL 7.0.2540 (October 18,2024)

0105730: Download resource logs as text files.  
0105731: Support added for uploading apps from the UI while offline.  
0105733: Added list view in top-level menus page on dashboards.  
0105738: Added an option to restart the IDPR process directly via UI.  
0105739: Added start IPDR service option to hub task dropdown menu.  
0105743: Crosskey data now displayed in the Interface utilization report .  
0105746: Added support for updating user logos and avatars.  
0105747: Help text added for module descriptions.  
0105749: Added IP Type in the IPDR excel report.  
0105753: Removed duplicate titles and descriptions for apps and dashboards.  
0105757: Added NBAR support in the conversation section of Interface Utilization report .  
0105759: Added webtrisul option to resolve VeloCloud's ifspeed_tx and ifspeed_rx data.  
0105769: Added unit type in MRTG chart tables.  
0105771: Added options to enable and disable option to the schedule report.  
0105774: MRTG : Added webtrisul option to hide MRTG yearly view button.  

## WEBTRISUL 7.0.2509 (June 18,2024)

0105548: Alpine JS Database Storage Analyzer tool with option to tag slices  
0105572: watchdog.sh and monit install scripts to ensure continous flushes  
0105485: Single sign-on support for integration with outside platforms  
0105489: IPDR Subscriber DB show IPS  
0105491: Copy menu to multiple users at single time  
0105504: User can create custom reports and choose to share with other users or not  
0105496: Cronmail Report -> Add zip and tar.gz support to send attachment with compressed format  
0105503: Adding real time module to the dashboard is not working .  
0105502: Alert if disk disk utilisation is more than 90% upon login  
0105501: WEB: flow tracker volume cutoff allow entering units MB KB GB  
0105511: Remove Threatcrowd defunct link in key dasahboard  
0105513: Netflow wizard enable/disable edges,ring  
0105507: NETFLOW: Interface drilldown shows source/dest in Transmit and Receive directions  
0105518: Dashboard creator now has new help text to show what type of chart module is  
0105527: SNMP resolve add oemsettings options to not update router name or ifspeed to allow override  
0105525: Threshold band - Options to remove alerts on weekend  
0105530: Threshold band : Edit/Updating threshold band comparedays not working  
0105534: Router and interfaces show brocade switch image  
0105543: Custom report , Toppers table now shows routername for interface toppers  
0105542: Chart expression is now working when we don't have data for particular item  
0105541: Webtrisul key traffic module edit not showing key in text box  
0105532: Deep drilldown of Internal host new report use aggregate flows instead of query session  
0105546: Custom Report add new type crosskey drilldown  
0105550: New System Health check report  
0105558: Allow change of super admin username from the default 'admin'  
0105560: Hide context selection in login page  
0105548: Alpine JS Metaslice viewer added to Admin > Storage Analyzer  
0105590: SNMP Resolve from PROBE instead of HUB option using ssh tunnel option via Web Settings  
0105588: Netflow : Routers and Intefaces shows latest bandwidth even if yesterday date is chosen  
0105581: MSP Tenants: Context manager  
0105597: Netflow wizard add two more trackers for Palo Alto firewalls  

## WEBTRISUL 7.0.2493 (Feb 19,2024)

Main feature improvements to the Web Interface are a new architecture to support 10K plus devices on the Routers and Interfaces page. New options to DoT IPDR Compliance use case and several other improvements.  

0105439: Add option to remove "Others not show " in toppers list  
0105445: New UI to Analyze Storage, shows per item storage using PIE charts etc  
0105446: New UI to View Netflow Templates recieved  
0105450: Gerbilcharts detailed_legend length of long keys show router name/ip  
0105450: Apexchart reverted to 3.35 from 3.45 due to slow retro counters performance  
0105456: Custom report can now be imported from a JSON file  
0105460: Offcanvas duplicating issue in multiselect combo   
0105461: Raw key format in router intf longtermchart to pdf, show full names  
0105462: Drilldowns from KeyDashboard of ROUTERS does not work at all for some routers  
0105459: Complex bug with key format if key is 64.60.23.17 IP format also 40.3C.17.11  
0105468: Interface Drilldown page enhancements  
0105469: Router and Interface major update to support > 10000 devices  
0105472: Search bar router and interfaces to see specific IP  
0105476: Adding delete option in multiselect option for capture apdapters  
0105479: MRTG chart PDF download statistics table comes inside chart  
0105481: Interface drilldown add option to remove some tabs if not required  
0105489: IPDR Subscriber DB show IP subnets assigned to subscriber  

## WEBTRISUL 7.0.2475 (November 3,2023)

New updates to UI, a fresh ALERT summary count in menu bar. Updates to SNMP resolve process.
A ton of bug fixes and UI improvements.  
 
0105386: Fixed a crash when incompatible character encodings: UTF-8 and ISO-8859-1  
0105387: Support for SNMPV3 SHA256 protocol  
0105389: LDAP Search option in UI : Option to dump LDAP attributes.  
0105388: SNMP resolve major updates, allows for 100s of devices by resolving ASYNC  
0105393: NBAR APPID now tagged with flow trackers, this speeds up interface drilldown  
0105392: APPS: Update show what changed  
0105396: WEB: Crash when scheduling interface usage report with no selection  
0105398: IPDR: show flash or sweetalert if ipdr service is stopped   
0105403: WEB: Add a new module to show alert list like stable keys and all  
0105404: WEB: Customer not able to see/download report is user selects 3 months data  
0105409: New Webtrisul Module template to show data from custom action  
0105424: WEB: IPDR XLSX add subscriber ID column  

## WEBTRISUL 7.0.2457 (June 23,2023)

FEATURE BRAND New user interface , new styles, new widgets icons, Night mode, etc  

- For Topper PDF Reports add key-filter and inverse-key-filter support  
- Conversation in aggregated flows  
- Move real time Websocket port to 3000. Now there is no need for a second open port  
- Extra archive support allows unlimited number of data storage mount points for old data  
- IPDR Search logs by subscriber User ID and/or NAT IP address  
- DB status page not showing slices if you enabled extra archive(x_archive)  
- IPDR - Excel report in full compliance with regulations for log retention  
- MRTG application fully migrated to new platform  
- WEBTRISUL: Admin option to Cancel all real time stabbers  
- NBAR: Autocomplete Flowtagger  
- IPDR Customer details added in excel report  

## WEBTRISUL 6.5.2337 (November 3,2021)


- FEATURE: USER RESOURCES: allows you to assign routers and interfaces IP subnet to select users.  
- FEATURE: NEW MENU MGMT: Users can have their own special menus and admin can copy one users menu to another  
- FEATURE: FLOW LEGS CORRELATION Add a new feature flows legs correlation in explore flows  
- FEATURE: Scheduled reports page , now user can download past PDF reports that were emailed out  
- NETFLOW: SNMP Enable resolve router and Interface name if SNMP global settings is available  
- USER: Operator or forensics operator please remove snmp setting from router and interfaces screen  
- USER: Don't show explore flows, aggregate flow, Router and interface drill down form to operator user 
- APP: Peering Analytics show routes now working,remove router desc in query
- SNMP : Add a new option to enable huawei snmp port mapping depending. (From Netflow port to SNMP)  
- WEB : Added ldaps communication(ldap ssl) default LDAP auth changed to simple from anonymous  
- NETFLOW : Router and interfaces drilldown add show/hide table columns  
- NETFLOW : Show interface IP addresses in Netflow Routers and Interfaces table  
- WEB : Show email alert status whether alert send and not  
- WEB : Changes to charting - new surface type STACKEDAREATABLE and new charts added  

## WEBTRISUL 6.5.2321 (August 26,2021)  

- WEB : Created new report for interface utilization  
- REPORT: Separate tab for Neflow based reports  
- WEB : Test mail checking with PDF attachment.  
- TCA: Create threshold cross alerts in bulk ; eg an alert when any interface > 80% utilization.  
- CHARTS: Added new MRTG chart type to use MRTG like color Green solid + Blue line  
- REPORT: New FlexiReports for completely customizable PDF reports  
- SNMP: To correlate and resolve VLAN IDs and VLAN interface names by correlating different MIBs  
- WEB: Export Flows include flow tags in csv file.  
- WEB: Now each user can have their own menu layouts per context  
- WEB: Email sending support for SMTP relay providers like SendGrid and Pepipost  
- LDAP: User sync from various attributes  
- WEB: DBAnalyzer UI option dropdown  
- WEB: LUA apps can now include JSON to add counter groups, menus etc.  
- NETFLOW: Interface Drilldown many enhancements  
- REPORT: Interface drilldown report schedule via Quick Report  

## WEBTRISUL 6.5.2300 (March 26, 2021)

- WEB: Sometimes topper lists will show items like 102% percent in sparklines chart  
- FLOWS: Link to Aggregates from Interface list  
- NETFLOW: Huawei SNMP to Netflow interface name mapping  
- NETFLOW: Router and interfaces pagination added to support thousands of interfaces  
- SNMP: For verification purposes admin user can see the SNMPWALK output file  
- BUG: PDF report was not working if interface name includes angle brackets like /<pppoe-abcde-1234/>  
- BUG: Explore flows flow count is wrong when aggregated per ip, port, interface, tagger etc  
- BUG: SNMP snmpv3 authNoPriv was not working, fixed it.  
- KEYSET: Key must be unique only within a counter group, currently uniqueness enforced to all counter groups  
- ADMIN: Admin > Start/Stop Tasks now shows any timestamp drift in distributed environment  
- TCA: Assign priority to TCA and FlowTracker alerts  
- DR/HA: Improve DC DR visibility with bandwidth chart for DR side , allows you to see DR(Backup) health from DC(Primary)  
- PDF: Router and interfaces screen add export to pdf functionality for interface drilldown  
- REPORTS: New user interface to show scheduled reports whether they were delivered via E-Mail or not  
- REPORT: New Netflow Interface PDF report to show usage and top host/apps  

## WEBTRISUL 6.5.2275 (January 6,2021)  

- In Retro counters you can now type a string which is used as a filter to retrieve toppers  
- Webtrisul : show description in popover for keys  
- Autocomplete for comma separated list while entering list of keys etc  
- Remove LDAP authentication check box from login page, it is now automatic  
- Default SNMP settings added. This will be used when per-router SNMP is not specified  
- Easy way to add a customer logo  
- SNMP automatic resolver process added to cron, will run every night by default  
- A new type of subscriber user created who can only export flows, used for compliance and LI  
- Automatic login via a Token used can now integrate Web Trisul with an external SIEM or system  
- Fixed many PDF reports in readymade reports  
- Completely reworked interface drilldown page  
- Added $ symbol to string if it is a key. If you add a $ sign to a key item in any chart it is not taken as a label 
- Add a time selector that allows you to show any arbitrary time frame on live dashboards  
- Metrics can be combined into expressions on any chart to show +,-,/,%  
- Hundreds of other UI fixes and enhancements  

## WEBTRISUL : 6.5.2209 (January 7,2020)  

- FEATURE: Import a CSV file to assign labels to any counter group, export to CSV  
- BUG: Retro dashboard schedule report accept selected probe parameter  
- HA: HA show status in admin page  
- FEATURE: Search by flow tag added to topper  
- BUG: Malformed utf-8 invalid byte sequence error fixed on bad flowtag  
- NETFLOW: Resolve router and interface name via management ip  
- API: Update Key remove key attributes and refresh  
- NETFLOW: Bugfix with SNMPv3 authNoPriv mode  
- NETFLOW: Togger interface name/ alias button  
- FEATURE: Show 95th Percentile on all charts  
- FEATURE: Show Feed Data Update status on Admin page  
- BUG: Session leak on login page (eg when load balancer keeps loading page)  
- FEAT: Show BGP Peer status and few routes (IPv4 and IPv6)  
- CHARTS: Chart anything module added help icon to explain expression(0104628)  
- FEATURE: Import dashboard from JSON URL - easy to share dashboards  
- CHARTS: SNMP LIVE chart router and interfaces v3 support added  
- FLOWS: Export all IPv6 flows option   

## WEBTRISUL : 6.5.2171 (June 5,2019)  

- FEATURE: Trisul Apps: Meta Apps install application packs. For example SSL App Pack will install TLS Print, SNI analysis, Prune TLS apps.  
- NEW: AMC contract info added in license page for licensed users  
- NEW: Retroi Retro Tools. Added the Edge Analytics tool to view relationship graphs  
- NEW: Tools Aggregate Flows. Added Tag group  
- BUG: Netflow SNMP resolve v1 OID error fixed  
- FEATURE: Plugins can now attach themselves to any menu and obtain the context  
- BUG: App if already installed just update it don't create new one  
- API: In your APPS you can now use HAML for the framework. Client side haml to html support added via haml.js  
- BUGFIX: SNMP v3 resolve error if priv_password is not set  
- BUGFIX: Pie chart legend text size is reduced ,some times so long and pie chart is not visible  
- FEATURE: Multiple hub support added. Now you can distribute the backend load to hub0 , hub1, hub2 etc.  
- FEATURE: Key Dashboard > Assign UserLabel > Now you can add any Key atttributes  
- NEW: Chart loading progress placeholder added  
- NEW: Machineid added to link to get extended license and many UI enhancements   

## WEBTRISUL : 6.5.2163 (January 28,2019)  

- Feature: Explore Flows report now has an Export to XLSX option  
- Cross Key counter group UI  
- Netflow: Router interface drilldown report to PDF  
- Schedule report for Netflow router interface drilldown  















