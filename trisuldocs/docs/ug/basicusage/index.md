# First login

Congrats ! You now have a Trisul login screen and may be wondering where
to go next. This page will get you from the login screen to the
dashboards where you can view your first stats.

## Viewing stats

##### Login

Login as username = `admin` password=`admin`

##### Start Trisul

- Go to `Context : default > Admin Tasks > Start/Stop` Tasks
- Press the start button for `trisul-hub` and `trisul-probe`
- Make sure both the components are started. They should be in “UP”
  state.

**Getting an error here?**

The error message is usually displayed right below. The most common
reasons are

- incorrect network adapter : By default `trisul-probe` listens for
  traffic on `eth0` If you do not have an `eth0` on the box the you need
  to switch the network adapter to the correct one using the steps in
  [Configuring packet capture adapters](/docs/ug/webadmin/profiles.html)

##### Login as a normal user

Now you should log out and admin and log back in as a normal user in
order to view the reports.

- Logout as admin from the top right side menu

- In the login screen, log in again as user = `user` , password = `user`

- You should be viewing the hosts dashboard now. Wait for roughly 5
  minutes for the data to be available.

- Switch to `Dashboards > Real time traffic` to immediately start viewing traffic statistics.
  
  Congratulations ! You are now on Trisul!
