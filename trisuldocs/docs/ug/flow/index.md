# Flow Analysis

A _flow_ is piece of information that represents a record of data 
transfer between two IP addresses. This is a crucial entity in both 
traffic and security monitoring. Trisul stores all _flows_ in highly 
efficient, compressed format optimized for fast queries over large 
datasets. This section describes the tools available to work with flows.

##### Tools: working with flows in Trisul

[Flow Tracker](https://trisul.org/docs/ug/flow/tracker.html)

Tracks the top-N flows matching a certain criteria over a certain period of time.

[Flow Tagger](https://trisul.org/docs/ug/flow/tagger.html)

Tags interesting flows based on observation of certain types of traffic.

[Real Time Stabber](https://trisul.org/docs/ug/flow/stabber.html)

A stabber that enables you to monitor _currently active_ flows involving a host or application

[Explore Flows](https://trisul.org/docs/ug/tools/explore_flows.html)

General purpose flow query

[Investigate IP activity](https://trisul.org/docs/ug/tools/investigate_ip_activity.html)

Investigate all flow based and alert activity of an IP

##### Howto: with flows

- Find out which flows caused a traffic spike
- View flow activity of a host or port in real time
- Jump from alerts to flows that caused them
- Search flows for IP
- Optimize full content storage (eg, store only first 1M of each flow)

[All tasks](https://trisul.org/docs/ug/flow/tasks.html)

### Working with flows

You can do all of the following

1. Record all flows, no summarization or roll ups
2. Fast retrieval of flows
3. Access to flows from alerts, traffic, end points
4. Pull up PCAPs for any flow
5. Flow Taggers - Tag flows automatically for future searches
6. Flow Tracker - Track top flows that interest you
7. Flow alerts - Get an alert when someone uploads 10MB out of your network
8. Payload search - Reassemble TCP, HTTP and search inside flows
