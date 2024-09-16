---
sidebar_position: 5
---

# Accessing Reports

Select *Reports* by clicking on the PDF Icon in the top menu section

### Categories

The reports are grouped into :

| Executive                   | Single click reports for traffic and security overviews                       |
| --------------------------- | ----------------------------------------------------------------------------- |
| End Points and Applications | Detailed usage reports for a particular IP, application, or Netflow interface |
| ISP Peering Analytics       | Top Level ISP Reports for AS,Country,Prefix, etc                              |
| Commonly Used               | Single click commonly used reports                                            |
| Netflow                     | Commonly used netflow reports                                                 |
| Direct reports              | Reports for any type of counter, flow, or security data types in Trisul       |

## Time Range

The various time ranges are explained below :

| Today Till Now | From midnight today till now                                |
| -------------- | ----------------------------------------------------------- |
| Yesterday      | 24 hours yesterday                                          |
| Pick day       | Pick a day from a calendar from the past 3 months           |
| Pick week      | Pick a day to generate a weekly report for that entire week |
| Custom         | Directly specify a from date and to date                    |

## Customizing the PDF

You can customize the PDF to include your organizations logo and taglines.

##### Adding Logos

1. Logos can be placed in the 3 corners of the PDF except the top-right
2. You need to replace 3 images (32×32) in the /usr/local/share/webtrisul/public/images directory
3. The images names are expected to named as follows
4. logo_tlhs.png → This image is placed on the top-left of the PDF
5. logo_blhs.png → This image is placed on the bottom-left of the PDF
6. logo_brhs.png → This image is placed on the bottom-right of the PDF

##### Customizing Names

Refer to the [oem_settings](/docs/ug/webadmin/customize) for instructions.
