
when you need to search for a particular user you can use this script  it will list all below details 


root@netflow-logs:/usr/local/share/trisul-hub# ./ipdr_userquery.sh -h
./ipdr_userquery.sh: illegal option -- h
Usage: ./ipdr_userquery.sh [ -d domain(default domain0) ] [ -n node(default hub0) ] [ -c CONTEXT(default context0) ]  [ -f From Date YYYY-MM-DD  ] [ -t To DATE Date DATE YYYY-MM-DD] [-u userid]
Examples  ./ipdr_userquery.sh -f 2024-12-24 -t 2024-12-26 -u MarkJenny123
Examples  ./ipdr_userquery.sh -f 2024-12-24-14:30 -t 2024-12-26-15:30  -u MarkJenny123
root@netflow-logs:/usr/local/share/trisul-hub# 


root@netflow-logs:/usr/local/share/trisul-hub# ./ipdr_userquery.sh -f 2025-02-13 -t 2025-02-15 -u raghupathy
------------------------------------------------------------------------------------------------------------------


IP                  LeaseStart               LeaseEnd                 UserID                        SubscriberID        
------------------------------------------------------------------------------------------------------------------
103.194.240.2/172.16.174.21812-02-2025-10:06         13-02-2025-01:39         ACS008172                     raghupathy          
103.194.240.2/172.16.183.21912-02-2025-01:02         12-02-2025-01:13         ACS008172                     raghupathy          
103.194.240.2/172.16.187.20613-02-2025-14:14         14-02-2025-00:24         ACS008172                     raghupathy          
103.194.240.2/172.16.174.21813-02-2025-01:07         13-02-2025-01:39         ACS008172                     raghupathy          
103.194.240.2/172.16.182.16414-02-2025-09:46         14-02-2025-17:43         ACS008172                     raghupathy          
103.194.240.2/172.16.186.20714-02-2025-17:49         15-02-2025-00:26         ACS008172                     raghupathy          
103.194.240.2/172.16.187.20613-02-2025-14:14         14-02-2025-01:38         ACS008172                     raghupathy          
103.194.240.2/172.16.161.9315-02-2025-08:10         15-02-2025-19:21         ACS008172                     raghupathy          
103.194.240.2/172.16.173.24515-02-2025-19:26         16-02-2025-00:28         ACS008172                     raghupathy          
103.194.240.2/172.16.182.16414-02-2025-09:46         14-02-2025-17:43         ACS008172                     raghupathy          
103.194.240.2/172.16.186.20714-02-2025-17:49         15-02-2025-01:39         ACS008172                     raghupathy          
103.194.240.2/172.16.187.20614-02-2025-01:07         14-02-2025-01:38         ACS008172                     raghupathy          
------------------------------------------------------------------------------------------------------------------
