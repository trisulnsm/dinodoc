#!/bin/bash 
rsync -e "ssh -i /home/sathana/.ssh/docsserverkey"  -rtvucz build/ root@staging.trisul.org:/var/www/docusaurus/


