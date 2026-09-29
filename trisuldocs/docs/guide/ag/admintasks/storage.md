# Managing Storage

This section covers how Trisul keeps data on disk: how long it is kept, where it is stored, and how to clear it.

| Task | Page |
| --- | --- |
| Set how many days of data the Hub keeps, and how much packet data the Probe keeps | [Configure Retention Policy](/docs/guide/ag/basictasks/configure_storage) |
| Move stored data to a different disk or volume | [Relocate Trisul Database](/docs/guide/ag/basictasks/reloc) |
| Delete stored data, or a whole context | [Cleaning the Database](/docs/guide/ag/basictasks/cleanenv) |
| See what is stored, and how it is spread across Oper, Ref and Archive | [DB Status](/docs/guide/ag/admintasks/dbstatus) |
| Check that the disk, Hub, Probe and flow processing are healthy | [System Health](/docs/guide/ag/admintasks/system_health) |
| See disk usage per day and per storage pool | [Storage Status](/docs/guide/ag/admintasks/storage_status) |

You usually do these tasks during initial capacity planning, or when storage needs change, not as part of daily operations.

## Before You Continue

[Storage Architecture](/docs/guide/learntrisul/concepts/storage_arch) explains how the Probe stores raw packets in slices. The Hub retention settings are described under [SlicePolicy](/docs/guide/ref/trisulhubconfig#slicepolicy) in the Trisul Hub Configuration reference.
