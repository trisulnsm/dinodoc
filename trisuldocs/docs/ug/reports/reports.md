---
sidebar_position: 1
---

# PDF Reports

This section describes the readymade reports available in Trisul.

### Installing librsvg2

Trisul requires the **librsvg2** library in order to generate charts for PDF reports. This is not included in the installation package as it 
requires several megabytes of packages. You can however easily install 
it yourself.

```bash
# on ubuntu
sudo apt-get install librsvg2-bin
# on centos
yum install librsvg2-tools
```

If fonts on your charts are not displaying properly , you may also need to install the following package.

Install the *ms-fonts* package found on [rpm.pbone.net](http://rpm.pbone.net/index.php3/stat/4/idpl/30428080/dir/centos_7/com/ms-fonts-1.1-2.4.noarch.rpm.html)

```bash
wget ftp://ftp.pbone.net/mirror/ftp5.gwdg.de/pub/opensuse/repositories/home:/Kenzy:/packages/CentOS_7/noarch/ms-fonts-1.1-2.4.noarch.rpm

rpm -Uvh ms-fonts-1.1-2.4.noarch.rpm
```

### Accessing Reports

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
