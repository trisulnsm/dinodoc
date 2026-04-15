# Installing a License File

This section helps you apply a new license to your Trisul system so it can run with the correct features and limits.

## Understanding the License File

When a new license is issued, you’ll receive a file named in this format:  
 `License.{emailid/username}.txt`

The license would look something like this: 

```
----------------------------------------------------------------
User:  Tim HoprXXXX
Email: test@xx
Mode:  PRODUCTON;UNLIMITED-DAYWINDOW;UNLIMITED-PCAP;RSNTW;INTERNAL_NODES=UNLIMITED
Muuid: 4C4C4544-0052-5610-8035-C8C04F375633
Due:   0 (Upgrade at will)
Maint: 1725273471 (Sep 2 2024)
Ver:   7
Key:   Below
----------------------------------------------------------------
BG5fK4vUHyAf5QN2P4noQXtPTZOIPvnPXEqoEkfMLf2LBOjUbd4l6ENL0SWyglS+
LKVr80cDlii6U7v1w0U3lGOcwe3nj1N/T1A06f+7nIQ=
----------------------------------------------------------------
GirSyXktWOM7qct2MwrIrsAs+DtVbY66pKL3pQO+ZxELOZTvjWkwD8owZ7Z/Qdhw
KQIDAQAB
----------------------------------------------------------------
```

:::danger one license file per machine
A new license file is required for every machine because it is locked to a MachineID. For most customers on a single machine you only need a single license file
:::


## Install Using Web Interface

For most deployments, the web interface is the simplest and safest way to install a license.

:::info navigation

:point_right: Login as Admin → Select Context :default → Licensing

:::

On the Licensing page you can click on the **Upload** Button shown in the image below to select the new License file and upload it.

![](images/license_upload.png)  
*Figure: Showing the Upload button used to install new license files*  

## Install New Licenses Using the Command Line

This alternative method installs the license file directly in the correct directories. It’s useful when the web interface isn’t accessible or when you’re setting up automated or scripted deployments.

### Install License on Trisul Probe Node

1. Put the new license file in `/usr/local/etc/trisul-probe` 
1. Change the name  of the new file to `LicenseKey.txt`  *OR*
2. Edit the `LicenseFile` parameter in [trisulProbeConfig.xml](/docs/ref/trisulconfig#app ) to point to the new file. 


Repeat the same for the Hub (even if on the same machine)

### Install License on Trisul Hub Node

1. Put the new license file in`/usr/local/etc/trisul-hub`
1. Change the name of the new file to `LicenseKey.txt` *OR*
2. Edit the `LicenseFile` parameter in [trisulHubConfig.xml](/docs/ref/trisulconfig#app ) to point to the new file. 

### Restart Trisul Hub and Probe Node

:::info
Please restart both hub and probe node to take effect
:::


## View the License File in Effect

:::info navigation

:point_right: Login as Admin → Select Context → Licensing

:::

The active license details are displayed on this page, including the enabled mode and limits.

## Moving an Existing License to New Hardware

If you move any Trisul node (Probe or Hub) to a new machine or VM, send us the new machine id and we will reissue the License.