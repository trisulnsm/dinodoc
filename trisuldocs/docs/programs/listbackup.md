

usage 
./list_backup_slices.sh: illegal option -- h
Usage: ./list_backup_slices.sh [ -s SOURCE_NODE(default hub0) ]  [ -c CONTEXT(default context0) ]  [ -f FROM_DATE-YYYY-MM-DD ]  [ -t TO_DATE-YYYY-MM-DD ]
Examples  ./list_backup_slices.sh -c netflow
          ./list_backup_slices.sh -c netflow  -f 2020-12-20 -t 2020-12-31
root@test:/usr/local/share/trisul-hub# 





If customer need to talke backup of particular days they don't know which slice they should take backup  because in storage pool each slice will have random name 

so this script will provide the slice name to take backup 


how to use this script 


/usr/local/share/trisul-hub# /usr/local/share/trisul-hub/list_backup_slices.sh  -f 2025-01-20 -t 2025-01-24

when you run the above line then it will list all the slices between that date 
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.qFf0ew
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.S6ZJ0r
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.M6Bt9k
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.ibZ8DV
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.1fKqnQ
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.reFmJ5
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.YTq0e2
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.LPC6gW
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.weYyY5
/usr/local/var/lib/trisul-hub/domain0/hub0/context0/meters/ref/SLICE.A4FSOE
root@test:/usr/local/share/trisul-hub# 


so that customer will take this slices as backup