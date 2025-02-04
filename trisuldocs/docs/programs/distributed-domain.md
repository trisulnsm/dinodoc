import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Distributed-Domain
## Prerequisite

- Download the trisul from official [website](https://www.trisul.org/get-started/) .

- Install Hub and Webtrisul in Trisul-hub server.

- Install Probe in Trisul-Hub server.

- Check if expect script is present , If not install the package.

- 7-day Timetrial license are not supported.

  <Tabs className="unique-tabs">
    <TabItem value="UBUNTU"  default>
      ```bash
      sudo apt install expect
      ```
    </TabItem>
    <TabItem value="RHEL" >
      ```bash
      sudo yum install expect
      ```
    </TabItem>
  </Tabs>

- Install probe in Trisul-probe server , for multiple probe install probe on each server.

- Configure ssh on all Trisul-server

First , you need to change the Hub-server  to distributed domain . Follow the below steps :


### Trisul-Hub server

- Run the script   -    /usr/local/share/trisul-hub/hub_distributer.exp

- It ask the following inputs Hub-Server IP , Description ,  starting port .
  
  ![](./images/hub_distributor_inputs.png)
  
  | Paraneters         | Sample Inputs      |
  | ------------------ | ------------------ |
  | Hub IP Address     | 192.168.1.6        |
  | Domain Description | Distributed domain |
  | Starting Port      | 12001              |

- Installation starts and the server will now become distributed domain.

Next , you need to add  trisul-probe to the trisul-hub . Follow this step to connect probe to hub


- Run the script - /usr/local/share/trisul-hub/add_probe.exp

- It ask for following inputs Probe-Name , Probe-ssh-IP addr , Probe-ssh-username , Probe-ssh-Password.
  
  :::note
  
  Probe name should start with probe string followed by name <br/> Ex : probeWEST
  
  :::
  
  ![](./images/add_probe_inputs.png)
  
  | Parameters         | Sample Inputs |
  | ------------------ | ------------- |
  | Probe-Name         | probeWEST     |
  | Probe-ssh-IP addr  | 192.168.1.7   |
  | Probe-ssh-username | demo-user     |
  | Probe-ssh-Password | demo-passwd   |

- The script will connect the Trisul-probe to the Trisul-hub , If you have multiple Trisul-probe , after the installation of trisul-probe over , run the same script again and provide the next Trisul-probe details.

### Check the probe is connected

- To check the probe is connected you can run this command :
  
  ```bash
  /usr/local/bin/trisulctl_hub hello
  ```
  
  You can see the list of probe connected here.

- If you can't see the probe restart the hub and probe.

- Run this below script on Trisul-hub server
  
  ```bash
  /usr/local/bin/trisulctl_hub restart domain
  ```

- Run this below script on Trisul-probe server
  
  ```bash
  /usr/local/bin/trisulctl_probe restart domain
  ```

- Again run the first command it shows the connected probe . If the probe is not shown then the installation is not done correctly.

### How it works

- In hub and probe server , the inputs is checked before the installation.

- Then , it checks the license is valid , if you have an 3-day timetrial then the installation will stopped. Contact the trisul support for license.

- In hub server , the domain and context will be stopped

- Removes the default domain0 by removing the domain cert files.

- Creates a new domain with the TCP socket by executing below commands 

```bash
/usr/local/bin/trisulctl_hub create domain
```

- After the domain is created , then it install the domain cert in hub by running following commands

```bash
trisulctl_hub install domain /usr/local/share/trisul-hub/domain0.cert 
```

And it change the endpoints by executing below command 

```bash
 /usr/local/share/trisul-hub/change_endpoints 
```

- The Trisul-probe server commands is executed through SSH in Trisul-hub server itself

- In probe server it removes the default probe0 if it exists and creates a new probe with given probe name

- The probe cert is installed in Trisul-probe itself and another copy routed to Trisul-probe and installed in Trisul-hub also.

- At last both Trisul-hub and Trisul probe is restarted 
