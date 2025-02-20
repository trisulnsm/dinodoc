INSTALL MONIT

root@it2-test:/usr/local/share/trisul-hub# ./install_monit.sh -h
Usage: ./install_monit.sh [ -n HUBNODE(default hub0) ] [ -p PROBENODE(default probe0) ] [ -d MONIT_IPDR ] [ -x CONTEXT(default context0) ] 
Detail: -d monit ipdr process, -x exclude a context from being monited (can use it multiple times)
Example: ./install_monit.sh -n hub0 -p probe0 -x netflow -x context0 -d 
For Help: ./install_monit.sh -h


If hub and probe and webtrisul stops in between unexpectedly . The data is not stored and customer also not know it is stoped .

So we have a script called ./install_monit.sh 

This script will start the hub , probe , webtrisul if it stops in between .


for netflow customer it you have to run this script 

./install_monit.sh -n hub0 -p probe0 -x netflow -x context0 

for IPDR customer it you have to run this script 

./install_monit.sh -n hub0 -p probe0 -x netflow -x context0 -d 
-d options only for ipdr


how it works (for clarification )

Monit script will check for every minute for the process of (hub probe and webtrisul ) if it finds the process is not running then it will start the process

so when you run script will add the process list in  /etc/monit.rc 

for every miniute it will check the given process is running . If it process not running it will start the process




