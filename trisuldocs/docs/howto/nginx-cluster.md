Customizing the web server stack
================================

The default install of Webtrisul comes with 5 instances of *thin*
servers with a *nginx* reverse proxy. This should be sufficient for many
sites, but you can increase the number of servers if\
\* you experience sluggishness\
\* if you have many simultaneous users

How to increase the number of backend *thin* servers
----------------------------------------------------

The configuration files are stored in `/usr/local/share/webtrisul/build`

Make the following changes in these files

  ------------------ -----------------------------------------------------------------------------------------------------------
  nginx.conf         Add names of additional servers sequentially in the upstream thin\_cluster section. Counting starts at 0.
  thin-nginxd.conf   Update the NO\_OF\_SERVERS to what you want
  thin-config.yml    Update the variable *servers* to match in other files.
  ------------------ -----------------------------------------------------------------------------------------------------------
