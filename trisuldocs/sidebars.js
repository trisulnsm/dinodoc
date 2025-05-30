/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

	// But you can create a sidebar manually
	docsSidebar: [
	  {
		  type: 'category', 
		  label: 'Trisul User Guide',
		  link: { type: 'doc', id:'ug/index'},
		  items: [
			  {
				  type: "autogenerated",
				  dirName: "ug"
			  }
		  ],
	  },
	{
		  type: 'category', 
		  label: 'HowTos',
		  items: [
			  {
				  type: "autogenerated",
				  dirName: "howto"
			  }
		  ],
	  },
  
	],
  
  
  
	// IPDR User Guide Sidebar
	ipdrSidebar: [
	  {
	  type: 'category',
	  label: 'Trisul IPDR User Guide',
	  link: { type: 'doc', id:'ipdr/index'},
	  items: [
			  "ipdr/intro",
			  {
				  type: "category",
				  label: "Get started",
				  link: { type: 'doc', id:'ipdr/install'},
				  items: [
					  "ipdr/requirements",
					  "ipdr/install",
					  "ipdr/specialuser",
					  {
							  type: "category",
							  label:"Settings",
							  items : [
							  "ipdr/ipdr-settings",
							  "ipdr/advanced"
							  ],
						  }
					  ]
			  },
			  {
				  type: "category",
				  label: "Network Config",
				  link: { type: 'doc', id:'ipdr/network-config'},
				  items: [
					  "ipdr/netflow",
					  "ipdr/radius",
					  "ipdr/syslog"
					  ]
			  },
			  {
				  type: "category",
				  label: "Programs and Scripts",
				  link: { type: 'doc', id:'ipdr/scripts'},
				  items: [
					  "ipdr/trisul_aaaing",
					  "ipdr/ipdruserquery",
					  "ipdr/ipdr_bulkquery",
  
					  ]
			  },
  
			  "ipdr/ipdrui",
			  "ipdr/submit-queries",
			  "ipdr/ipdrdashboard",
			  "ipdr/ipdrstatistics",
			  "ipdr/ipdrexportfields",
			  "ipdr/staticip-mappings",
			  "ipdr/api",
			  "ipdr/latlong",
			  "ipdr/tape",
			  "ipdr/faq",
  
	   ],
		},
	],
  
  
	// LUA API Sidebar 
	luaAPISidebar: [
	  {
		  type: "category",
		  label: "LUA API",
		  items: [
				  "lua/index",
				  "lua/basics",
				  "lua/faq",
				  "lua/tutorial1",
				  "lua/tutorial2",
				  "lua/selector",
				  "lua/debugger",
				  "lua/async-exec",
				  {
					  type: "category",
					  label:"Global LUA Objects",
					  items : [
						  "lua/obj_ac",
						  "lua/obj_buffer",
						  "lua/obj_engine",
						  "lua/obj_flowid",
						  "lua/obj_globalt",
						  "lua/obj_tasync",
						  "lua/obj_layer",
						  "lua/obj_packet",
						  "lua/obj_re2",
						  "lua/obj_httpheader",
					  ],
  
				  },
				  {
					  type: "category",
					  label:"Frontend Scripts",
					  items : [
						  "lua/inputfilter",
						  "lua/counter_group",
						  "lua/alert_group",
						  "lua/resource_group",
						  "lua/simple_counter",
						  "lua/fileextractoverview",
						  "lua/fileextract",
						  "lua/reassembly",
						  "lua/packet_storage",
						  "lua/protocol_handler",
						  "lua/message_monitor",
					  ],
  
				  },
				  {
					  type: "category",
					  label:"Backend Scripts",
					  items : [
						  "lua/alert_monitor",
						  "lua/cg_monitor",
						  "lua/sg_monitor",
						  "lua/resource_monitor",
						  "lua/fts_monitor",
						  "lua/engine_monitor",
						  "lua/flow_tracker",
					  ],
  
				  },
  
		  ],
	  },
	  {
		  type: "category",
		  label: "TRP API",
		  items: [
			  {
				  type: 'autogenerated',
				  dirName: 'trp'
			  }
		  ],
	  },
	],
  
  
	// Ref sidebar 
	refSidebar: [
	  {
		  type: 'category', 
		  label: 'Config Files Reference',
		  link: { type: 'doc', id:'ref/index'},
		  items: [
			  {
				  type: "autogenerated",
				  dirName: "ref"
			  }
		  ],
	  },
	{
		  type: 'category', 
		  label: 'Program Files Reference',
		  items: [
			  {
				  type: "autogenerated",
				  dirName: "programs"
			  }
		  ],
	  },
	{
		  type: 'category', 
		  label: 'Counter Groups Reference',
		  link: { type: 'doc', id:'counter-groups/index'},
		  items: [
			  {
				  type: "autogenerated",
				  dirName: "counter-groups"
			  }
		  ],
	  },
	],
  
	ispSidebar:[
	{
	  type: 'category',
	  label: 'Trisul ISP  Guide',
	  link: { type: 'doc', id:'isp/index'},
			items : [
						  "isp/requirements",
						  "isp/bgp",
						  "isp/isapps",
						  "isp/isp_analytics_dashboard",
						  "isp/resourcegroups",
						  "isp/pingmonitor",
						  "isp/rtg",
						  "isp/ott_analytics",
						  "isp/api",
						  "isp/userapi",
				  ],							
	   },
	],
  
	TroubleshootingSidebar:[
	  {
		type: 'category',
		label: 'Troubleshooting a Step by Step Guide',
		link: { type: 'doc', id:'Troubleshooting/index'},
			  items : [
							"Troubleshooting/netflownotreceiving",
						  "Troubleshooting/unabletologin",
						  "Troubleshooting/contextnotgettingcreated",
					],							
		 },
	  ],
  
	// Admin Guide
	adminGuideSidebar: [
	  {
			  type: 'category', 
			  label: 'Trisul Admininstrator Guide',
			  link: { type: 'doc', id:'ag/index'},
			  items: [
			  'ag/install/requirements',
  
  
				  /* Installation */
				  {
					  type: "category",
					  label: "Installation",
					  link: {type: 'doc',  id:'ag/install/index'},
					  items: [
							  
							  {
								  type: "category",  
								  label: "Packages", 					
								  link: {type: 'doc',  id:'ag/install/packages'},
								  items: [ 'ag/install/badfellas', 'ag/install/geoasn']
  
							  },
							  'ag/install/pkgverify',
							  'ag/install/doinstall',
							  'ag/install/selectmode',
							  'ag/install/doupgrade',
							  'ag/install/douninstall',
							  'ag/install/openports'
						  ],
				  }, /* end Installation */
  
  
				  /* Licensing */
				  {
					  type: "category",
					  label: "Licensing",
					  link: {type: 'doc',  id:'ag/license/index'},
					  items: [
							  'ag/license/intro',
							  'ag/license/install',
					]
				  }, /* end Licensing*/
  
				  /* Network */
				  {
					  type: "category",
					  label: "Configure the Network",
					  link: {type: 'doc',  id:'ag/network/index'},
					  items: [
							  'ag/network/input_packets',
							  'ag/network/input_netflow',
					]
				  }, /* end Network*/
  
				  /* Admin Tasks */
				  {
					  type: "category",
					  label: "Admin Tasks",
					  link: {type: 'doc',  id:'ag/basictasks/index'},
					  items: [
						  'ag/admintasks/startstop',
							  'ag/basictasks/logfiles',
							  {
								  type: "category",  
								  label: "Managing Storage", 					
								  link: {type: 'doc',  id:'ag/admintasks/storage'},
								items:  [
									  'ag/basictasks/configure_storage',
									  'ag/basictasks/reloc',
									  'ag/basictasks/cleanenv',
									  'ag/admintasks/dbstatus',
									  'ag/admintasks/system_health',
									  'ag/admintasks/storage_status',
									  ]
							  },
						  'ag/admintasks/manage_profiles',
							  'ag/admintasks/probe_health',
							  'ag/admintasks/netflow_templatedb',
							  'ag/admintasks/drdc_status',
							  'ag/admintasks/userresources'
  
					]
				  }, /* end Basic Tasks*/
					  
				  /* UI*/
				  {
					  type: "category",
					  label: "Using the Admin UI",
					  link: {type: 'doc',  id:'ag/basictasks/index'},
					  items: [
							  'ag/ui/adminlayout',
					]
				  }, /* end Basic Tasks*/
					  
				  /* Web Admin*/
				  {
					  type: "category",
					  label: "Managing Trisul",
					  link: {type: 'doc',  id:'ag/webadmin/index'},
					  items: [
						  'ag/webadmin/admin_menus',
						  'ag/webadmin/manageusers',
							  'ag/webadmin/ldap_login',
							  'ag/webadmin/userroles',
							  'ag/webadmin/authlog',
							  'ag/webadmin/web_options',
							  'ag/webadmin/emailsettings',
							  'ag/webadmin/modules',
							  'ag/webadmin/dashboards',
							  'ag/webadmin/menus',
							  'ag/webadmin/startorstop_tasks',
							  'ag/webadmin/logs',
							  'ag/webadmin/apps',
							  'ag/webadmin/plugin_data_update'
					  ]
				  }, /* end Web Admin*/
  
  
  
				  /* Context Menu*/
  
				  {
					  type: "category",
					  label: "Configuring Trisul",
					  link: {type: 'doc',  id:'ag/context/index'},
					  items: [
					  'ag/context/login',
						  'ag/context/profiles',
							  'ag/context/home_networks',
							  'ag/context/homenetwork_concepts',
							  'ag/context/access_points',
							  'ag/context/crontasks',
							  'ag/context/customize',
							  'ag/context/backup',
							  'ag/context/disk_usage_alerts',
							  'ag/context/advanced',
							  {
								  type: "category",  
								  label: "Custom Countergroups", 					
								  link: {type: 'doc',  id:'ag/context/custom_countergroup'},
								items:  [
									  'ag/context/filtered_countergroups',
									  'ag/context/keyset_countergroups',
									  'ag/context/statbased_countergroups',
									  'ag/context/rulebased_countergroups',
									  'ag/context/crosskey_countergroups',
									  'ag/context/cardinality_countergroups',
									  ]
							  },
							  `ag/context/countergroup_settings`,
							  `ag/context/managekeys`,
							  `ag/context/profilemenu`,
							  `ag/context/snmp_agent`,
  
					  ] /* end Context Menu*/
				  },
					  
  
  
				  /* HA */
				  {
					  type: "category",
					  label: "High Availability",
					  link: {type: 'doc',  id:'ag/ha/index'},
					  items: [
					  {
  
						  type:"autogenerated",
						  dirName: "ag/ha"
					  }
					  ]
				  }, /* end HA*/
  
				  {
					  type: "category",
					  label: "Manage Contexts",
					  link: {type: 'doc',  id:'ag/manage_contexts/listcontexts'},
					  items: [
					  {
  
						  type:"autogenerated",
						  dirName: "ag/manage_contexts"
					  }
					  ]
				  } ,/* end HA*/
  
				  /* Domain*/
				  {
					  type: "category",
					  label: "Concepts",
					  link: {type: 'doc',  id:'ag/domain/index'},
					  items: [
					  {
  
						  type:"autogenerated",
						  dirName: "ag/domain"
					  }
					  ]
				  } /* end Domain*/
  
			  ], 
  
  
  
		  },
	],
  
  
  };
  
  export default sidebars;
  