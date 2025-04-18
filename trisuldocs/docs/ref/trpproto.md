# Trisul Remote Protocol

The proto file shown below describes theTRPprotocol.



## What to do with this file ?

You compile this file into the format for your target language.  
For C++/Java/Python : You can use the protoc compiler from google, an example:

`protoc trp.proto --python_out /tmp`

For other languages (Ruby/C#/Haskell/Erlang/Javascript) visit the Google Protocol Buffers[Third Party Addons](https://code.google.com/p/protobuf/wiki/ThirdPartyAddOns)page to select an appropriate tool.



## trp.proto

The latest`trp.proto`file is available on Github on[trisul-scripts trp.proto file](https://raw.githubusercontent.com/trisulnsm/trisul-scripts/master/trp/trp.proto)

Automatically loaded from Github below.

```protobuf
/// trp.proto - Trisul Remote Protocol .proto file 
/// TRP : Trisul Remote Protocol is a remote query API that allows
/// clients to connect and retrieve data from Trisul Hub

// Trisul Remote Protocol (TRP) definition
// Based on Google Protocol Buffers
// (c) 2012-16, Unleash Networks (http://www.unleashnetworks.com)
// $Rev: 6946 $

option optimize_for = LITE_RUNTIME; 


package TRP;

//
// Basic structures
//
/// Timestamp : Epoch time unix time  (seconds since Jan 1 1970) 
message Timestamp  {
  required int64            tv_sec=1;
  optional int64            tv_usec=2 [default=0];
}

/// TimeInterval from and to 
message TimeInterval  {
    required Timestamp      from=1;  /// start time 
    required Timestamp      to=2;    /// end  time 
}

/// StatsTuple : a single timeseries vaue (t,v) 
message StatsTuple {
    required Timestamp      ts=1;       /// ts 
    required int64          val=2;      /// value metric  
}

/// StatsArray : multiple timeseries values (t, v1, v2, v3...vn) 
///    notice we use ts_tv_sec. Most Trisul data have 1 sec resolution.
message StatsArray {
    required int64          ts_tv_sec=1;  /// tv.tv_sec 
    repeated int64          values=2;     /// array of values 
}

/// MeterValues : a timeseries  (meter_id, stat1, stat2, ... statn) 
///     this is rarely used because StatsArray is available .
message MeterValues {
    required int32          meter=1;        /// metric id , eg Hosts:TotalConnections 
    repeated StatsTuple     values=2;
    optional int64          total=3;        /// total of all metric values 
    optional int64          seconds=4;      /// total number of seconds in time series 
}


/// MeterType : information about a particular meter
/// 
message MeterInfo {

    /// types of meters 
    // from TrisulAPI 
    enum MeterType
    {
        VT_INVALID=0;
        VT_RATE_COUNTER_WITH_SLIDING_WINDOW=1;///  this for top-N type counters
        VT_COUNTER=2;                         ///  basic counter, stores val in the raw
        VT_COUNTER_WITH_SLIDING_WINDOW=3;     ///  use this for top-N type counters
        VT_RATE_COUNTER=4;                    ///  rate counter stores val/sec
        VT_GAUGE=5;                           ///  basic gauge
        VT_GAUGE_MIN_MAX_AVG=6;               ///  gauge with 3 additional min/avg/max cols (auto)
        VT_AUTO=7;                            ///  automatic (eg, min/max/avg/stddev/)
        VT_RUNNING_COUNTER=8;                 ///  running counter, no delta calc 
        VT_AVERAGE=9;                         ///  average of samples, total/sampl uses 32bt|32bit
        VT_DELTA_RATE_COUNTER=10;             ///  link snmp running counter 
		VT_MAX=11;                 		      /// max of samples 
		VT_MIN=12;                 		      /// min of samples 
    }


    required int32          id=1;
    required MeterType      type=2;
    required int32          topcount=3;
    required string         name=4;
    optional string         description=5;
    optional string         units=6;
}

/// KeyStats - A full time series item (countergroup, key, timeseries) 
///   
message KeyStats {
    required string         counter_group=2;        /// guid of counter group 
    required KeyT           key=3;                  /// key representing an item 
    repeated MeterValues    meters=4;               /// array of timeseries (timeseries-meter0, ts-meter1, ...ts-meter-n) 
}



/// KeyT : Represents a Key 
/// Top level objects are named ObjT 
///   eg KeyT - Key Type, SessionT - Session Type etc.
message KeyT {
    optional string         key=1;                  /// key in trisul key format eg, C0.A8.01.02 for 192.168.1.2
    optional string         readable=2;             /// human friendly name
    optional string         label=3;                /// a user label eg, a hostname or manually assigned name 
    optional string         description=4;          /// description 
    optional int64          metric=5;               /// optional : a single metric value - relevant to the query used 

	message  NameValueT {
		required string		attr_name=1;
		required string		attr_value=2;
	}
	repeated NameValueT		attributes=6;			/// New: Attributes are NVP for keys 
    optional int64          metric_max=7;           /// optional : max observed value for metric  in context
    optional int64          metric_min=8;           /// optional : max observed value for metric 
    optional int64          metric_avg=9;           /// optional : max observed value for metric 
}


/// CounterGroupT : Represents a counter group 
/// 
message CounterGroupT {
    required string         guid=1;                 /// guid identifying the CG 
    required string         name=2;                 /// CG name 
    optional int64          bucket_size=3;          /// bucketsize for all meters in this group 
    optional TimeInterval   time_interval=4;        /// total time interval available in DB 
    optional int64          topper_bucket_size=5;   /// topper bucketsize (streaming analytics window)
    repeated MeterInfo      meters=6;               /// array of meter information (m0, m1, .. mn) 

	message Crosskey {
		required string		parentguid=1;			/// parent GUID of ckey counter group
		required string		crosskeyguid_1=2;		/// crosskey 1 guid - required 
		optional string		crosskeyguid_2=3;		/// crosskey 2 guid - optional 
	}
	optional Crosskey		crosskey=7;				/// for cross key counter group

}

/// SessionT : an IP flow 
/// 
message SessionT  {
    optional string         session_key=1;          /// Trisul format eg 06A:C0.A8.01.02:p-0B94_D1.D8.F9.3A:p-0016
    required string         session_id=2;           /// SID once stored in DB 883:3:883488
    optional string         user_label=3;           /// any label assigned by user 
    required TimeInterval   time_interval=4;        /// start and end time of flow 
    optional int64          state=5;                /// flow state (see docs)
    optional int64          az_bytes=6;             /// bytes in A>Z direction, see KeyA>KeyZ 
    optional int64          za_bytes=7;             /// bytes in  Z>A direction
    optional int64          az_packets=8;           /// pkts in A>Z direction
    optional int64          za_packets=9;           /// pkts in Z>A direction
    required KeyT           key1A=10;               /// basically IP A End
    required KeyT           key2A=11;               /// Port Z End (can be a string like ICMP00, GRE00, for non TCP/UDP)
    required KeyT           key1Z=12;               /// IP Z end
    required KeyT           key2Z=13;               /// Port Z End
    required KeyT           protocol=14;            /// IP Protocol 
    optional KeyT           nf_routerid=15;         /// Netflow only : Router ID 
    optional KeyT           nf_ifindex_in=16;       /// Netflow only : Interface Index 
    optional KeyT           nf_ifindex_out=17;      /// Netflow only : Interface Index 
    optional string         tags=18;                /// tags assigned using flow taggers 
    optional int64          az_payload=19;          /// AZ payload - actual content transferred
    optional int64          za_payload=20;          /// ZA payload  
    optional int64          setup_rtt=21;           /// Round Trip Time for setup : Must have TCPReassmbly enabled on Probe
    optional int64          retransmissions=22;     /// Retransmissiosn total 
    optional int64          tracker_statval=23;     /// Metric for flow trackers 
    optional string         probe_id=24;            /// Probe ID generating this flow 
}


/// AlertT : an alert in Trisul 
///  all alert types Threshold Crossing, Flow Tracker, Badfellas, custom alerts use 
///  the same object below 
message AlertT{
    optional int64          sensor_id=1;            /// source of alert, usually not used
    required Timestamp      time=2;                 /// timestamp 
    required string         alert_id=3;             /// DB alert ID eg 99:8:98838
    optional KeyT           source_ip=4;            /// source ip 
    optional KeyT           source_port=5;
    optional KeyT           destination_ip=6;
    optional KeyT           destination_port=7;
    optional KeyT           sigid=8;                /// unique key representing alert type 
    optional KeyT           classification=9;       /// classification (from IDS terminology)
    optional KeyT           priority=10;            /// priority 1,2,3 
    optional Timestamp      dispatch_time=11;       /// sent time 
    optional string         dispatch_message1=12;   /// a free format string created by generator of alert
    optional string         dispatch_message2=13;   /// second format 
    optional int64          occurrances=14[default=1];/// number of occurranes, used by QueryAlerts for aggregation 
    optional string         group_by_key=15;        /// aggregation key 
    optional string         probe_id=16;            /// probe generating this alert 
    optional string         alert_status=17;        /// FIRE,CLEAR,BLOCK etc 
    optional int64          acknowledge_flag=18;    /// ACK or NOT 
}


/// ResourceT : represents a "resource" object 
/// examples DNS records, HTTP URLs, TLS Certificates, extracted file hashes, etc 
message ResourceT {
    required Timestamp      time=1;                 /// time resource was seen 
    required string         resource_id=2;          /// DB id format = 988:0:8388383
    optional KeyT           source_ip=3;            
    optional KeyT           source_port=4;
    optional KeyT           destination_ip=5;
    optional KeyT           destination_port=6;
    optional string         uri=7;                  /// raw resource - uniform resource id ,dns names, http url, etc
    optional string         userlabel=8;            /// additional data 
    optional string         probe_id=9;             /// which probe detected this 
}

/// DocumentT : a full text document 
///     full HTTP headers, printable TLS certs, etc 
message DocumentT  {
    required string         dockey=1;               /// unique id 
    optional string         fts_attributes=2;       /// attibutes used for facets
    optional string         fullcontent=3;          /// full document text 

    /// this document was seen at these time and on this flow 
    message Flow {
        required Timestamp  time=1;     
        required string     key=2;
    }

    repeated Flow           flows=4;             /// list of flows where this doc was seen 
    optional string         probe_id=5;             
}

/// VertexGroupT : a group of vertices 
/// 
message VertexGroupT {
    required string         vertex_group=1;      /// GUID of vertices in this message
    repeated KeyT           vertex_keys=2;       /// list of vertices 
}


/// EdgeGraphT : a graph
///     subjectnode -> vertices(of a particular type) 
message EdgeGraphT  {
	required TimeInterval  	time_interval=4;     /// covers this window 
    repeated VertexGroupT   vertex_groups=3;     /// vertices grouped by type 
}


/// Enums
///  Auth Level 
enum AuthLevel {
    ADMIN=1;
    BASIC_USER=2;
    FORENSIC_USER=3;
    BLOCKED_USER=4;
}

/// Compression: Used by PCAP or other content requests 
enum CompressionType {
    UNCOMPRESSED=1;
    GZIP=2;
}

/// Pcap: format 
enum  PcapFormat {
    LIBPCAP=1;                      /// normal libpcap format *.pcap
    UNSNIFF=2;                      ///
    LIBPCAPNOFILEHEADER=3;          /// libpcap but without the pcap file header 
}

enum DomainNodeType
{
    HUB=0;
    PROBE=1;
    CONFIG=2;
    ROUTER=3;
    WEB=4;
    MONITOR=5;
}

enum DomainOperation {
    GETNODES=1;
    HEARTBEAT=2;
    REGISTER=3;
}

message NameValue {
    required string name=1;
    optional string value=2;
}

/// Top level message is TRP::Message
/// wraps the actual request or response 
/// 
/// You must set trp.command =  for EACH request in addition to 
/// constructing the actual TRP request message 
/// 
message Message {
    enum Command {  HELLO_REQUEST=1; 
                    HELLO_RESPONSE=2;
                    OK_RESPONSE=3;
                    ERROR_RESPONSE=5;
                    COUNTER_GROUP_TOPPER_REQUEST=6;
                    COUNTER_GROUP_TOPPER_RESPONSE=7;
                    COUNTER_ITEM_REQUEST=8;
                    COUNTER_ITEM_RESPONSE=9;
                    PCAP_REQUEST=14;
                    PCAP_RESPONSE=15;
                    SEARCH_KEYS_REQUEST=18;                   
                    SEARCH_KEYS_RESPONSE=19;                        
                    COUNTER_GROUP_INFO_REQUEST=20;              
                    COUNTER_GROUP_INFO_RESPONSE=21;             
                    SESSION_TRACKER_REQUEST=22;                     
                    SESSION_TRACKER_RESPONSE=23;                    
                    UPDATE_KEY_REQUEST=32;                            
                    UPDATE_KEY_RESPONSE=33;                           
                    QUERY_SESSIONS_REQUEST=34;                     
                    QUERY_SESSIONS_RESPONSE=35;
                    PROBE_STATS_REQUEST=38;                    
                    PROBE_STATS_RESPONSE=39;                              
                    QUERY_ALERTS_REQUEST=44;
                    QUERY_ALERTS_RESPONSE=45;
                    QUERY_RESOURCES_REQUEST=48;
                    QUERY_RESOURCES_RESPONSE=49;
                    GREP_REQUEST=60;
                    GREP_RESPONSE=61;
                    KEYSPACE_REQUEST=70;
                    KEYSPACE_RESPONSE=71;
                    TOPPER_TREND_REQUEST=72;
                    TOPPER_TREND_RESPONSE=73;
                    STAB_PUBSUB_CTL=80;
                    QUERY_FTS_REQUEST=90;
                    QUERY_FTS_RESPONSE=91;
                    TIMESLICES_REQUEST=92;
                    TIMESLICES_RESPONSE=93;
                    DELETE_ALERTS_REQUEST=94;
                    METRICS_SUMMARY_REQUEST=95;
                    METRICS_SUMMARY_RESPONSE=96;
                    PCAP_SLICES_REQUEST=97;
                    SERVICE_REQUEST=101;
                    SERVICE_RESPONSE=102;
                    CONFIG_REQUEST=103;
                    CONFIG_RESPONSE=104;
                    LOG_REQUEST=105;
                    LOG_RESPONSE=106;
                    CONTEXT_CREATE_REQUEST=108;
                    CONTEXT_DELETE_REQUEST=109;
                    CONTEXT_START_REQUEST=110;
                    CONTEXT_STOP_REQUEST=111;
                    CONTEXT_INFO_REQUEST=112;
                    CONTEXT_INFO_RESPONSE=113;
                    CONTEXT_CONFIG_REQUEST=114;
                    CONTEXT_CONFIG_RESPONSE=115;
                    DOMAIN_REQUEST=116;
                    DOMAIN_RESPONSE=117;
                    NODE_CONFIG_REQUEST=118;
                    NODE_CONFIG_RESPONSE=119;
                    ASYNC_REQUEST=120;
                    ASYNC_RESPONSE=121;
                    FILE_REQUEST=122;
                    FILE_RESPONSE=123;
                    SUBSYSTEM_INIT=124;         // init msg  used to prepare services 
                    SUBSYSTEM_EXIT=125;
                    GRAPH_REQUEST=130;
                    GRAPH_RESPONSE=131;
                    AGGREGATE_SESSIONS_REQUEST=132;                     
                    AGGREGATE_SESSIONS_RESPONSE=133;
                    RUNTOOL_REQUEST=134;
                    RUNTOOL_RESPONSE=135;
                    HA_CONTROL_REQUEST=140;
                    HA_CONTROL_RESPONSE=141;
					DOMAIN_PING=142;
					TOOL_INFO_REQUEST=143;
					TOOL_INFO_RESPONSE=144;

    }

    required Command    trp_command=1;
    optional HelloRequest hello_request=2;
    optional HelloResponse hello_response=3;
    optional OKResponse ok_response=4;
    optional ErrorResponse error_response=5;
    optional CounterGroupTopperRequest counter_group_topper_request=6;
    optional CounterGroupTopperResponse counter_group_topper_response=7;
    optional CounterItemRequest counter_item_request=8;
    optional CounterItemResponse counter_item_response=9;
    optional PcapRequest pcap_request=14;
    optional PcapResponse pcap_response=15;
    optional SearchKeysRequest search_keys_request=18;
    optional SearchKeysResponse search_keys_response=19;
    optional CounterGroupInfoRequest counter_group_info_request=20;
    optional CounterGroupInfoResponse counter_group_info_response=21;
    optional UpdateKeyRequest update_key_request=30;
    optional QuerySessionsRequest query_sessions_request=31;
    optional QuerySessionsResponse  query_sessions_response=32;
    optional SessionTrackerRequest session_tracker_request=33;
    optional SessionTrackerResponse session_tracker_response=34;
    optional ProbeStatsRequest probe_stats_request=37;
    optional ProbeStatsResponse probe_stats_response=38;
    optional QueryAlertsRequest query_alerts_request=43;
    optional QueryAlertsResponse  query_alerts_response=44;
    optional QueryResourcesRequest query_resources_request=47;
    optional QueryResourcesResponse  query_resources_response=48;
    optional GrepRequest  grep_request=51;
    optional GrepResponse  grep_response=52;
    optional TopperTrendRequest  topper_trend_request=55;
    optional TopperTrendResponse  topper_trend_response=56;
    optional SubscribeCtl  subscribe_ctl=59;
    optional QueryFTSRequest  query_fts_request=60;
    optional QueryFTSResponse  query_fts_response=61;
    optional TimeSlicesRequest  time_slices_request=62;
    optional TimeSlicesResponse  time_slices_response=63;
    optional DeleteAlertsRequest delete_alerts_request=64;
    optional MetricsSummaryRequest metrics_summary_request=65;
    optional MetricsSummaryResponse metrics_summary_response=66;
    optional KeySpaceRequest key_space_request=67;
    optional KeySpaceResponse  key_space_response=68;
    optional PcapSlicesRequest  pcap_slices_request=69;
    optional LogRequest  log_request=105;
    optional LogResponse  log_response=106;
    optional ContextCreateRequest  context_create_request=108;
    optional ContextDeleteRequest  context_delete_request=109;
    optional ContextStartRequest  context_start_request=110;
    optional ContextStopRequest  context_stop_request=111;
    optional ContextConfigRequest  context_config_request=112;
    optional ContextConfigResponse  context_config_response=113;
    optional ContextInfoRequest   context_info_request=114;
    optional ContextInfoResponse   context_info_response=115;
    optional DomainRequest   domain_request=116;
    optional DomainResponse   domain_response=117;
    optional NodeConfigRequest   node_config_request=118;
    optional NodeConfigResponse   node_config_response=119;
    optional AsyncRequest   async_request=120;
    optional AsyncResponse   async_response=121;
    optional FileRequest   file_request=122;
    optional FileResponse    file_response=123;
    optional GraphRequest   graph_request=130;
    optional GraphResponse    graph_response=131;
    optional AggregateSessionsRequest  aggregate_sessions_request=140;
    optional AggregateSessionsResponse  aggregate_sessions_response=141;
    optional AggregateResourcesRequest  aggregate_resources_request=142;
    optional AggregateResourcesResponse  aggregate_resources_response=143;
    optional RunToolRequest  run_tool_request=144;
    optional RunToolResponse  run_tool_response=145;
    optional HAControlRequest  ha_control_request=150;
    optional HAControlResponse  ha_control_response=151;
    optional ToolInfoRequest  tool_info_request=152;
    optional ToolInfoResponse  tool_info_response=153;
    optional string     destination_node=200;   // todo move 2nd
    optional string     probe_id=201;           // todo move 3rd 
    optional bool       run_async=202;          /// if run_async = true, then you will immediately get a AsynResponse with a token you can poll 

}


//////////////////////////////////////////////////////////////
// --------------- Messages Section -------------------------//
// TRP is a synchronous request response protocol            //
// Send a xyz_Request() and wait for xyz_Response            //
// All requests necessarily get a response                   //
// --------------- Messages Section -------------------------//
//////////////////////////////////////////////////////////////

/// Hello Request : use to check connectivity 
message HelloRequest{
  required string   station_id=1;       /// an id of the query client trying to connect 
  optional string   message=2;          /// a message (will be echoed back in response) 
}       

message HelloResponse{
  required string       station_id=1;           /// station id of the query server 
  optional string       station_id_request=2;   /// station id found in the request 
  optional string       message=3;              /// message found in the request 
  optional int64        local_timestamp=4;      /// local timestamp at server, used to detect drifts 
  optional string       local_timestamp_string=5; /// on server with time zone, use this 
  optional bool         is_primary=6;              /// is this a primary or HA node 
}

/// ErrorResponse
/// All XYZRequest() messages can either generate a XYZResponse() or an ErrorResponse()
/// you need to handle the error case 
message ErrorResponse{
   required int64       original_command=1;     /// Command ID of request 
   required int64       error_code=2;           /// numeric error code 
   required string      error_message=3;        /// error string 
}

/// OKResponse
/// many messages return an OKResponse indicating success of operation
message OKResponse{
   required int64       original_command=1;     /// command id of request 
   optional string      message=2;              /// success message 
}


/// CounterItemRequest : Time series history statistics for an item 
message CounterItemRequest{
    required string         counter_group=2;                /// guid of counter group 
    optional int64          meter=3;                        /// optional meter, default will retrieve all (same cost)
    required KeyT           key=4;                          /// key (can specify key.key, key.label, etc too 
    required TimeInterval   time_interval=5;                /// Time interval for query
    optional int64          volumes_only=6 [default=0];     /// if '1' ; then only retrieves totals for each meter 
}

/// CounterItemResponse  - 
message CounterItemResponse{
    required string         counter_group=1;                /// guid of CG 
    required KeyT           key=2;                          /// key : filled up with readable,label automatically 
    optional StatsArray     totals=3;                       /// if volumes_only = 1 in request, this contains totals for each metric 
    repeated StatsArray     stats=4;                        /// time series stats - can use to draw charts etc 
}


/// CounterGroupTopperRequest  - retrieve toppers for a counter group (top-K)
message CounterGroupTopperRequest{
    required string         counter_group=2;                /// guid of CG 
    optional int64          meter=3 [default=0];            /// meter; eg to get Top Hosts By Connections use cg=Hosts meter = 6(connections)
    optional int64          maxitems=4 [default=100];       /// number of top items to retreive 
    optional TimeInterval   time_interval=5;                /// time interval , leave blank for latest interval 
    optional Timestamp      time_instant=6;                 /// 
    optional int64          flags=7;                        
    optional bool           resolve_keys=8 [default=true];  /// retrieve labels as set in the response for each key 
	optional string			key_filter=9;					/// only get keys with this pattern and SYS:GROUP
	optional string			inverse_key_filter=10;			/// only get keys without this pattern  NOT
}

/// CounterGroupTopperResponse  
message  CounterGroupTopperResponse{
    required string         counter_group=2;                /// request cgid
    required int64          meter=3;                        /// from request 
    optional int64          sysgrouptotal=4;                /// the metric value for "Others.."  after Top-K
    repeated KeyT           keys=6;                         /// topper keys, KeyT.metric contains the top-k value 
}


/// SearchkeysRequest - search for keys 
message SearchKeysRequest{
    required string         counter_group=2;        
    optional int64          maxitems=3[default=100];
    optional string         pattern=4;        
    optional string         label=5;
    repeated string         keys=6;
    optional int64          offset=7[default=0];
    optional bool           get_totals=8[default=false];
	optional bool			get_attributes=9[default=false];
} 

/// SearchKeysResponse
message SearchKeysResponse{
    required string         counter_group=2;        
    repeated KeyT           keys=3;
    optional int64          total_count=4;

} 

/// CounterGroupInfoRequest - retrieve information about enabled counter groups 
message CounterGroupInfoRequest{
    optional string        counter_group=2;
    optional bool          get_meter_info=3[default=false];
}

/// CounterGroupInfoResponse
message CounterGroupInfoResponse{
    repeated CounterGroupT    group_details=2;
}

/// QuerySessions - Query flows 
///   fields filled are treated as AND criteria 
///   See SessionT for description of common query fields 
message QuerySessionsRequest {
    optional string         session_group=2[default="{99A78737-4B41-4387-8F31-8077DB917336}"];
    optional TimeInterval   time_interval=3;
    optional string         key=4;
    optional KeyT           source_ip=5;
    optional KeyT           source_port=6;
    optional KeyT           dest_ip=7;
    optional KeyT           dest_port=8;
    optional KeyT           any_ip=9;           /// source or dest match
    optional KeyT           any_port=10;        /// source or dest match
    repeated KeyT           ip_pair=11;         /// array of 2 ips 
    optional KeyT           protocol=12;
    optional string         flowtag=13;         /// string flow tagger text 
    optional KeyT           nf_routerid=14;
    optional KeyT           nf_ifindex_in=15;
    optional KeyT           nf_ifindex_out=16;
    optional string         subnet_24=17;       /// ip /24 subnet  matching 
    optional string         subnet_16=18;       /// ip /16 subnet 
    optional int64          maxitems=19[default=100];   /// maximum number of matching flows to retrieve 
    optional int64          volume_filter=20[default=0];    /// only retrieve flows > this many bytes (a+z)
    optional bool           resolve_keys=21[default=true];  
    optional string         outputpath=22;      /// write results to a file (CSV) on trisul-hub (for very large dumps) 
    repeated string         idlist=23;          /// array of flow ids , usually from SessionTracker response 
    optional KeyT           any_nf_ifindex=24;  /// composite query for both ifindex 
}


/// QuerySessionsResponse 
///  a list of matching flows 
message QuerySessionsResponse {
    required string             session_group=2;
    repeated SessionT           sessions=3;         /// matching flows SessionT objects
    optional string             outputpath=4;       /// if 'outputpath' set in request, the sessions are here (in CSV format)
}


/// AggregateSessions - count star 
///   query flow and then count the numbers 
///   by default aggregate on ALL fields
message AggregateSessionsRequest {
    optional string         session_group=2[default="{99A78737-4B41-4387-8F31-8077DB917336}"];
    optional TimeInterval   time_interval=3;
    optional KeyT           source_ip=5;
    optional KeyT           source_port=6;
    optional KeyT           dest_ip=7;
    optional KeyT           dest_port=8;
    optional KeyT           any_ip=9;           /// source or dest match
    optional KeyT           any_port=10;            /// source or dest match
    repeated KeyT           ip_pair=11;         /// array of 2 ips 
    optional KeyT           protocol=12;
    optional string         flowtag=13;         /// string flow tagger text 
    optional KeyT           nf_routerid=14;
    optional KeyT           nf_ifindex_in=15;
    optional KeyT           nf_ifindex_out=16;
    optional string         subnet_24=17;       /// ip /24 subnet  matching 
    optional string         subnet_16=18;       /// ip /16 subnet 
    optional int64          aggregate_topcount=19[default=100];   	/// number of count-star per field 
	repeated string         group_by_fields=20; /// list of field names 
    optional KeyT           any_nf_ifindex=21;  /// matches either gen2 or gen3 
}

/// AggregateSessionsResponse 
///   contains counts  of each key 
message AggregateSessionsResponse {

	message KeyTCount {
		required KeyT	key=1;                  ///  aggregate key 
		required int64  count=2;                ///  number of matching flows
		required int64  metric=3;               ///  aggregated metrics, eg total bytes 
	}

	message TagGroup {
		required string 	group_name=1;
		repeated KeyTCount	tag_metrics=2;
	}

    required string         session_group=2;
    optional TimeInterval   time_interval=3;
    repeated KeyTCount      source_ip=5;        /// top IPs 
    repeated KeyTCount      source_port=6;      /// top ports 
    repeated KeyTCount      dest_ip=7;	        /// dest IPs
    repeated KeyTCount      dest_port=8;	    /// dest ports 
    repeated KeyTCount      any_ip=9;           /// source or dest match
    repeated KeyTCount      any_port=10;        /// source or dest match
    repeated KeyTCount      ip_pair=11;         /// array of 2 ips 
    repeated KeyTCount      protocol=12;        /// protocols 
    repeated KeyTCount      flowtag=13;         /// string flow tagger text 
    repeated KeyTCount      nf_routerid=14;
    repeated KeyTCount      nf_ifindex_in=15;
    repeated KeyTCount      nf_ifindex_out=16;
    repeated KeyTCount      subnet_24=17;       /// ip /24 subnet  matching 
    repeated KeyTCount      internal_port=18;   /// internal IP ports
    repeated KeyTCount      internal_ip=19;     /// internal IPs 
    repeated KeyTCount      external_ip=20;     /// external IPs
	repeated TagGroup		tag_group=21;		/// tag groups 
}


/// UpdatekeysRequest
/// Response = OKResponse or ErrorResponse
message UpdateKeyRequest{
    required string         counter_group=2;
    repeated KeyT           keys=4;  		         /// key  : if you set both key and label, the DB label will be updated 
	optional bool           remove_all_attributes=5; /// remove all key attributes from keys 
	repeated string         remove_attributes=6;     /// remove these attributes only from keys 
}

/// SessionTrackerRequest  - query session trackers 
///     session trackers are top-k streaming algorithm for network flows 
///     They are Top Sessions fulfilling a particular preset criterion 
message SessionTrackerRequest {
    optional string         session_group=2[default="{99A78737-4B41-4387-8F31-8077DB917336}"];
    optional int64          tracker_id=3;       /// session tracker id 
    optional int64          maxitems=4 [default=100];       
    required TimeInterval   time_interval=5;
    optional bool           resolve_keys=6 [default=true];
    optional string         tracker_name=7;       /// query by tracker name for auto generated trackers
}

/// SessionTrackerResponse - results of tracker
///  returns a list of SessionT  for the matching sessions. 
///  Note: the returned list of SessionT only contains keys (in key format) and the 
///  tracker_statval reprsenting the tracker metric. You need to send further QuerySession
///  request with the session_key to retrive the fullflow 
message SessionTrackerResponse{
    required string         session_group=2;
    repeated SessionT       sessions=3;         /// contains session_key and tracker_statval 
    optional int64          tracker_id=4;
}

/// QueryAlertsRequest - query alerts in system, can group_by (aggregate) any one field 
/// multiple query fields are treated as AND 
message QueryAlertsRequest  {
    required string         alert_group=2;
    optional TimeInterval   time_interval=3;
    optional int64          maxitems=5 [default=100];
    optional KeyT           source_ip=6;
    optional KeyT           source_port=7;
    optional KeyT           destination_ip=8;
    optional KeyT           destination_port=9;
    optional KeyT           sigid=10;
    optional KeyT           classification=11;
    optional KeyT           priority=12;
    optional string         aux_message1=13;        /// matches dispatchmessage1 in AlertT
    optional string         aux_message2=14;        /// matches dispatchmessage2 in AlertT
    optional string         group_by_fieldname=15;  /// can group by any field - group by 'sigid' will group results by sigid 
    repeated string         idlist=16;              /// list of alert ids
    optional bool           resolve_keys=17[default=true];
    optional KeyT           any_ip=18;              /// search by any_ip (source_dest) 
    optional KeyT           any_port=19;            /// search by any_port (source_dest) 
    repeated KeyT           ip_pair=20;             /// array of 2 ips 
    optional string         message_regex=21;       /// searech via regex of the dispatch message 
	optional bool			approx_count_only=22[default=false];	/// approx count per alert group 
}

/// QueryAlertsResponse - response 
/// if you used group_by_fieldname then AlertT.occurrances would contain the count 
message QueryAlertsResponse {
    required string         alert_group=2;
    repeated AlertT         alerts=3;       		/// array of matching alerts 
	optional int64			approx_count=4; 		/// approx count 
}


///  QueryResourcesRequest - resource queries 
///     DNS, HTTP, 
message QueryResourcesRequest {
    required string         resource_group=2;
    optional TimeInterval   time_interval=3;
    optional int64          maxitems=4 [default=100];
    optional KeyT           source_ip=5;
    optional KeyT           source_port=6;
    optional KeyT           destination_ip=7; 
    optional KeyT           destination_port=8;
    optional string         uri_pattern=9;			 /// DEPRECATED: use regex_uri for everything
    optional string         userlabel_pattern=10;	 /// DEPRECATED: uri_pattern will search both URI and USERLABEL 
    repeated string         regex_uri=12;            /// cant be combined with others 
    repeated string         idlist=13;               /// resource ID list 
    optional bool           resolve_keys=14 [default=true];
    optional KeyT           any_port=15;
    optional KeyT           any_ip=16;
    repeated KeyT           ip_pair=17;              // array of 2 ips 
	optional bool			approx_count_only=18[default=false];	 // count-star  only  over time interval 
	repeated string 		exclude_iplist=19;		 /// Exclude these IPs, cant be used with other IP fields 
	optional bool			invert_regex=20[default=false]; /// Invert the regex RE2 cant reject 
}

/// QueryResourceResponse  
message QueryResourcesResponse {
    required string         resource_group=2;
    repeated ResourceT      resources=3;
	optional int64			approx_count=4;
}


///  AggregatedResourceRequest - resource queries 
///     DNS, HTTP, 
message AggregateResourcesRequest  {
	required QueryResourcesRequest	query=1;
    optional int64                  aggregate_topcount=2[default=100];   	/// number of count-star per field 
}

/// AggregateResourcesResponse  
///     various counters 
message AggregateResourcesResponse {

	message KeyTCount {
		required KeyT	key=1;
		required int64  count=2;
	}

    repeated KeyTCount           source_ip=5;
    repeated KeyTCount           source_port=6;
    repeated KeyTCount           destination_ip=7; 
    repeated KeyTCount           destination_port=8;
    repeated KeyTCount           uri=9;			 ///  group by URI 
    repeated KeyTCount           userlabel=10;	 ///  group by Pattern
}


/// KeySpaceRequest - search hits in Key Space 
/// for example you can search the key space 10.0.0.0 to 11.0.0.0 to get all IP 
/// seen in that range 
message KeySpaceRequest {
    required string         counter_group=2;
    required TimeInterval   time_interval=3;
    optional int64          maxitems=4 [default=100];

    message KeySpace {
        required KeyT   from_key=1;     /// from key representing start of keyspace
        required KeyT   to_key=2;       /// end of key space 
    }

    repeated KeySpace       spaces=5;	                   /// space1 OR space2 OR ..
    optional bool           resolve_keys=6[default=true];  /// resolve names 
	optional bool           totals_only=7[default=false];  /// if set, only totals returned
}

/// KeySpaceResponse  
message KeySpaceResponse  {
    optional string         counter_group=2;    /// counter group 
    repeated KeyT           hits=3;             /// array of keys in the requested space 
	optional int64          total_hits=4;       /// if totals_only() this contains total(hits) 
}

/// TopperTrendRequest - raw top-K at each topper snapshot interval
/// can use this to see "Top apps over 1 Week" 
message TopperTrendRequest {
    required string         counter_group=2;
    optional int64          meter=3 [default=0];
    optional int64          maxitems=4 [default=100];
    optional TimeInterval   time_interval=5;
	optional string			key_filter=6;					/// only get keys with this pattern and SYS:GROUP
	optional string			inverse_key_filter=7;			/// only get keys without this pattern  NOT
}

/// TopperTrendResponse   
message  TopperTrendResponse {
    required string         counter_group=2;
    required int64          meter=3;    
    repeated KeyStats       keytrends=4;    /// timeseries - ts, (array of key stats) for each snapshot interval 
}



/// Subscribe - add a subcription to the Real Time channel
message SubscribeCtl  {

    // from TrisulAPI 
    enum StabberType 
    {
        ST_COUNTER_ITEM=0;
        ST_ALERT=1;         
        ST_FLOW=2;         
        ST_TOPPER=3;     
    }

    enum CtlType
    {
        CT_SUBSCRIBE=0;
        CT_UNSUBSCRIBE=1;
    }

    required string         context_name=1;
    required CtlType        ctl=2;
    required StabberType    type=3;
    optional string         guid=4;
    optional string         key=5;
    optional int64          meterid=6;
}



/// FTS
///  query to return docs, docids, and flows based on keyword search
///
message QueryFTSRequest  {

    required TimeInterval       time_interval=2;
    required string             fts_group=3;
    required string             keywords=4;
    optional int64              maxitems=5[default=100];
	optional bool               approx_count_only=6[default=false];
}


message QueryFTSResponse {

    required string             fts_group=2;
    repeated DocumentT          documents=3;   
	optional int64			    approx_count=4; 		/// approx count 

}


/// Timeslices - retrieves the backend timeslice details 
///
/// get the METERS METASLICE info 
/// .. response = TimeSlicesResponse
message TimeSlicesRequest  {
    optional bool   get_disk_usage=1[default=false];     /// get disk usage per SLICE 

    optional bool   get_all_engines=2[default=false];    /// by default (set to false) we only get instance-0 
	                                                     /// because are interested in iterating over 
														 /// the time interval rather then each slice
														 /// inside the time interval. set this to true
														 /// if you want each slice to be reported 

    optional bool   get_total_window=3[default=false];   /// just get the total time window in the 
	                                                     /// trisul database 
}

/// .. response = TimeSlicesResponse
/// get the PCAP METASLICE based info 
message PcapSlicesRequest {
    required string context_name=1;
    optional bool   get_total_window=2[default=false];
}

message TimeSlicesResponse  {
    message SliceT
    {
        required TimeInterval   time_interval=1;
        optional string         name=2;
        optional string         status=3;
        optional int64          disk_size=4;
        optional string         path=5;
        optional bool           available=6;
    };

    repeated SliceT         slices=1;
    optional TimeInterval   total_window=2;
    optional string         context_name=3;
}


/// DeleteAlerts
///  - very limited exception to Trisul rule of not having delete options 
message DeleteAlertsRequest  {
    required string         alert_group=2;
    required TimeInterval   time_interval=3;
    optional KeyT           source_ip=6;
    optional KeyT           source_port=7;
    optional KeyT           destination_ip=8;
    optional KeyT           destination_port=9;
    optional KeyT           sigid=10;
    optional KeyT           classification=11;
    optional KeyT           priority=12;
    optional KeyT           any_ip=18;
    optional KeyT           any_port=19;
    optional string         message_regex=21;       /// delete using regex 
} 

/// MetricsSummaryRequest - used to retrieve DB stats 
message MetricsSummaryRequest{
     optional  TimeInterval   time_interval=1;
     required  string         metric_name=2;
     optional  bool           totals_only=3[default=true];
}

/// MetricsSummaryResponse
message MetricsSummaryResponse {
    required  string         metric_name=2;
    repeated  StatsTuple     vals=3;
}



/// LogRequest  - get log file  from a domain node 
message LogRequest  {

     required  string         context_name=1;
     required  string         log_type=2;
     optional  string         regex_filter=4;
     optional  int64          maxlines=5[default=1000];
     optional  string         continue_logfilename=6;
     optional  int64          continue_seekpos=7;
     optional  bool           latest_run_only=8[default=false];
}


message LogResponse  {

     required  string         context_name=1;
     optional  string         logfilename=6;
     optional  int64          seekpos=7;
     repeated  string         log_lines=8; /// compressed gz 
}


/// messages to routerX backend 
message DomainRequest {
    required    DomainOperation     cmd=1;
    optional    string              station_id=2;
    optional    string              params=3;
    optional    DomainNodeType      nodetype=4;
}

message DomainResponse {


    message Node {

        required string             id=1;
        required DomainNodeType     nodetype=2;
        optional string             station_id=3; 
        optional string             extra_info=4;
        optional Timestamp          register_time=5; 
        optional Timestamp          heartbeat_time=6; 
		optional bool               is_primary=7[default=true]; /// primary or backup HA mode 

    }

    required DomainOperation        cmd=1;
    repeated Node                   nodes=2;
    optional string                 req_params=3;
    optional string                 params=4;
    optional bool                   need_reconnect=5[default=false];
}

/// messages to HAControl
message HAControlRequest {
    enum HAOperation
    {
        HA_TEST_REACHABILITY=0;		///  test if primary or backup is reachable (test the other side)
        HA_SWITCH_BACKUP=1;			///  switch all nodes to backup HA 
        HA_SWITCH_PRIMARY=2;        ///  switch to primary HA 
    }


    required    HAOperation         cmd=1;
    optional    string              station_id=2;
    optional    string              params=3;
}

message HAControlResponse {
    optional    bool                control_success=1;
    optional    string              station_id=2;
    optional    string              status_message=3;
	optional    bool                primary_reachable=4;
	optional    bool                backup_reachable=5;
}

/// tool info 
/// general purpose probe information gathering tool 
/// use cases :   get BGP route receiver peer status 
message ToolInfoRequest {
    optional    string              context_name=1;
    optional    string              tool_name=2;
    repeated    string              tool_info_requested=3; ///  array of information elements requested 
}

message ToolInfoResponse  {
    repeated    NameValue           tool_info=1;	/// info elements Name=Value 
}


message NodeConfigRequest {
    optional string message=1;

    message IntelFeed {
        required string     guid=1;                   /// identifying feed group (eg Geo, Badfellas)
        optional string     name=2;                   /// feed name (eg badfellas) 
        optional string     download_rules=3;         /// xml file with feed update instructions
        repeated string     uri=4;                    /// individual files in config//.. for FileRequest download 
		repeated string     usernodes=5;              /// user requesting the feed, the probe0, probe1, etc 
		optional int64		sub_feed_id=6[default=-1];/// sub feed ID, when a feed consists of several sub-feeds 
		optional bool       restore_mode=7[default=false]; /// restore mode will backup and restore, used with add,remove

    }

    optional IntelFeed      add_feed=2;
    optional IntelFeed      process_new_feed=3;
    optional bool           get_all_nodes=4[default=true];
    repeated NameValue      query_config=5;
    optional IntelFeed      remove_feed=6;            
}

message NodeConfigResponse {

    message Node {
        required string id=1;
        required DomainNodeType  nodetype=2;
        required string description=3;
        required string public_key=4;
    }

    repeated Node               domains=1;
    repeated Node               hubs=2;
    repeated Node               probes=3;
    repeated string             feeds=4;
    repeated NameValue          config_values=5;
}


/// ContextRequest  - Context methods 
///  response Ok or Error, follow up with ContextInfo to print details 
/// 
message ContextCreateRequest  {
     required  string         context_name=1;
     optional  string         clone_from=2;
}

/// ContextInfo : one or all contexts
///  use is_init to prime with config 
message ContextInfoRequest {
     optional   string         context_name=1;      /// if not  set all context get in 
     optional   bool           get_size_on_disk=2[default=false]; ///  get size on disk (expensive) 
	 optional   string         tool_name=3;         /// get status of this tool, freeform bgp, suricata, snort, udpsink etc..
}

message ContextInfoResponse {


    message Item
    {
        required string         context_name=1;
        required bool           is_initialized=2;
        required bool           is_running=3;       /// trisul processes runs 
        optional int64          size_on_disk=4;
        optional TimeInterval   time_interval=5;
        optional bool           is_clean=6;
        optional string         extrainfo=7;        /// freeform text output when tool is specified , can be long string 
        repeated TimeInterval   run_history=8;
        optional string         profile=9;
        optional string         runmode=10;
        optional string         node_version=11;
    }

    repeated  Item  items=1;
}

/// ContextDelete  : initialize 
///      reset data only .. 
message ContextDeleteRequest   {
     required   string         context_name=1;      /// if not  set all context get in 
     optional   bool           reset_data=2;        /// reset data dont delete everything
}

/// ContextStart  : run 
///      run data only .. 
message ContextStartRequest   {
     required   string         context_name=1;      /// if not  set all context get in 
     optional   string         mode=2;				/// same as trisul cmdline run mode 
     optional   bool           background=3[default=true];
     optional   string         pcap_path=4;
     optional   string         run_tool=5;          /// snort, suricata supported..
     optional   string         tool_ids_config=6;
     optional   string         tool_av_config=7;
     optional   string         cmd_in=8;			/// maps to trisul -in
     optional   string         cmd_out=9;			/// maps to trisul -out
     optional   string         cmd_args=10;			/// maps to trisul -args

}

/// ContextSttop  : kill  the context processes 
message ContextStopRequest   {
     required   string         context_name=1;      /// if not  set all context get in 
     optional   string         run_tool=5;          /// snort, suricata , trp, flushd supported..
}


/// ContextConfigRequest - start stop status 
///  OK or ERROR response 
///  Status = OK if running with PID etc in message text 
message ContextConfigRequest {
     required  string         context_name=1;
     optional  string         profile=2;
     optional  string         params=3;
     optional  bytes          push_config_blob=4;     /// push this .. 
     repeated  NameValue      query_config=5;         /// query, leave the .value field blank
     repeated  NameValue      set_config_values=6;    /// push this ..  (name=value;name=value ..)
}


message ContextConfigResponse {

    message Layer
    {
        required int64  layer=1;
        required string probe_id=2;
        optional string probe_description=3;
    }

    required  string            context_name=1;
    optional  string            profile=2;
    optional  string            params=3;               /// what kind of config you want 
    optional  bytes             pull_config_blob=4;     /// config 
    optional  bytes             config_blob=5;          /// compress tar.gz ..
    repeated  string            endpoints_flush=6;
    repeated  string            endpoints_query=7;
    repeated  string            endpoints_pub=8;
    repeated  NameValue         config_values=10;       /// query, leave the .value field blank
    repeated  Layer             layers=11;

}

/// PcapRequest - retrieve a PCAP
/// Sent directly to each probe rather than to the DB query HUB   
///
/// the flow is PCAP Request for a file -> put a file on the probe > return a token
///    > use that token in FileRequest to download the file from the probe 
///
/// see app notes and examples
///
///  NOTE - only one of the various filters are supported
///  sending > 1 will result in error 
///  
/// Modes
///  1.  nothing set => PCAP file in contents
///  2.  save_file_prefix set =>  file download token
///  3.  merge_pcap_files => file download token 
/// 
/// 
message PcapRequest {
    required string             context_name=1; // context 
    optional int64              max_bytes=2[default=100000000]; // max return PCAP size default=100MB , can increase to 0.75 Filesystem freespace
    optional CompressionType    compress_type=3[default=UNCOMPRESSED];              
    optional TimeInterval       time_interval=4;                // not needed for merge option 
    optional string             save_file_prefix=5;
    optional string             filter_expression=6;    /// PCAP filter expression in Trisul Filter format 
    repeated string             merge_pcap_files=7; /// list of PCAP files on probe that you need to merge 
    optional bool               delete_after_merge=8[default=true];
    optional PcapFormat         format=9[default=LIBPCAP];                                 
}


/// Pcap Response - for small files (<1MB) contents directly contain the PCAP 
///   for larger files, save_file contains a download token for use by FileRequest 
message PcapResponse  {
    required string             context_name=1;
    optional PcapFormat         format=2[default=LIBPCAP];                                 
    optional CompressionType    compress_type=3[default=UNCOMPRESSED];                   
    optional TimeInterval       time_interval=4;                
    optional int64              num_bytes=5;      
    optional string             sha1=6;
    optional bytes              contents=7;
    optional string             save_file=8;        //use FileRequest framework to download 
}

/// GrepRequest - reconstruct and search for patterns in saved packets 
message GrepRequest {
    required string         context_name=1;
    required TimeInterval   time_interval=2;
    optional int64          maxitems=3 [default=100];
    optional int64          flowcutoff_bytes=4;
    optional string         pattern_hex=5;      /// hex patttern 
    optional string         pattern_text=6;     /// plain text 
    optional string         pattern_file=7;     /// a file - must be available at probe 
    repeated string         md5list=8;          /// a list of MD5 matching the content 
    optional bool           resolve_keys=9 [default=true];
}

/// GrepResponse  
message GrepResponse  {
    required string         context_name=1;
    repeated SessionT       sessions=2;     /// sessionT with keys containing the content 
    repeated string         hints=3;        /// some surrounding context for the match 
    optional string         probe_id=4;
}

/// ProbeStatsRequest - DOMAIN 
/// retrieve statistics about probe cpu, mem, etc 
message ProbeStatsRequest{
     required  string       context_name=1;
     optional  string       param=2;
}

/// ProbeStatsResponse
message ProbeStatsResponse {
    required string         context_name=1;
    required string         instance_name=2;
    required int64          connections=3;
    required int64          uptime_seconds=4;
    required double         cpu_usage_percent_trisul=5;
    required double         cpu_usage_percent_total=6;
    required double         mem_usage_trisul=7;
    required double         mem_usage_total=8;
    required double         mem_total=9;
    required double         drop_percent_cap=10;
    required double         drop_percent_trisul=11;
    optional int64          proc_bytes=12;
    optional int64          proc_packets=13;
    optional string         offline_pcap_file=14;
    optional bool           is_running=15;
}

/// AsyncResponse   - a token represnting a future response
///  you will get an AsyncResponse  for TRP Request  if you set the run_async=true at the message level 
message AsyncResponse  {
    required int64          token=1; /// use this token in AsyncRequest polling until you get the original Response you expected 
    optional string         response_message=3;
    optional Message        response=4;
}

/// AsyncRequest - Asynchrononous query framework 
///      response taken from original , the token 
message AsyncRequest {
     required  int64        token=1;	// token from AsyncResponse
     optional  string       request_message =2; // basically extra text for logging 
}

/// FileRequest   - used to download files from Trisul domain nodes like probes 
message FileRequest  {
    required string         uri=1;      /// uri of resource you want to download , example PcapResponse.save_file 
    required int64          position=2; /// seek position in that file
    optional string         params=3;   /// local meaning sentback n response
    optional string         context_name=4; /// context name 
    optional bool           delete_on_eof=5[default=false];
}

/// FileResponse
///      one chunk at at time, Trisul has slightly inefficient File Transfer
///      for very large files, since most files are data feeds  < 100MB fine for now
message FileResponse  {
     required  string       uri=1;      /// requested URI 
     required  bool         eof=2;      /// end of all chunks 
     optional  int64        position=3; /// current  position 
     optional  bytes        content=4;  /// file chunk content 
     optional  string       request_params =5; 
     optional string        context_name=6;
}

/// GraphRequest
///		given a subject node, retrive a  graph for a given time window 
message GraphRequest {
	required TimeInterval	time_interval=1;  /// time window 
	required string			subject_group=2;  /// guid of subject, eg counter or alert guid 
    required KeyT           subject_key=3;    /// key (can specify key.key, key.label, etc too 
	optional string			vertex_group=4;	  /// optional vertex group (only get vertices in this group) 
}

message GraphResponse {
	required string			subject_group=1;  /// from request
    required KeyT           subject_key=2;    /// from request 
	repeated EdgeGraphT		graphs=3;		  /// graphs - an EdgeGraphT message 
											  /// repeated because returned in time chunks 
}

/// RunToolRequest  : run  set of named tools 
message RunToolRequest   {
     required   string         context_name=1;      /// if not  set all context get in 
	 enum NodeTool {
	 	PING=1;
		DF=2;
		GEOQUERY=3;
		TOP=4;
		BGPQUERY=5;
	 }
	 required  NodeTool 		tool=2;				/// which of these tools you want to run on node
	 optional  string           tool_input=3;		/// input 
	 optional  string           tool_input_file_data=4;/// data that goes into a tool input file 
}

/// RunToolResponse  : ouput 
message RunToolResponse   {
     required   string         context_name=1;      /// if not  set all context get in 
     optional   string         tool_output=2;       /// cmd lines 
}
```


