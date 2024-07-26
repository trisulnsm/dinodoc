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
  {
               type: 'category',
                label: 'Trisul ISP  Guide',
                link: { type: 'doc', id:'isp/index'},
                items: [
                        {
                                type: "autogenerated",
                                dirName: "isp"
                        }
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

};

export default sidebars;
