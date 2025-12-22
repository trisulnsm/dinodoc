# Managing Storage

Once Trisul is running and you’ve verified activity through logs, the next concern is how data is stored, retained, and managed over time.

This section covers the administrative tasks related to Trisul’s on-disk data, including:

- Setting retention policies to control how many days of data are kept.  
- Moving stored data to a different disk or volume  
- Resetting stored data when required  
- Viewing disk usage and storage details  

These tasks are typically performed during **initial capacity planning or when storage requirements change**, rather than as part of daily operations.

### Before You Continue

This section focuses on operational controls, not internal design.

To understand how Trisul organizes and writes data on disk, see Storage Architecture in the Concepts section. 

:::warning Concepts

:memo: See: [Storage Architecture](/docs/ag/domain/storage_arch) in the Concepts section. Reading this architecture overview first will make retention and disk decisions easier to reason about. 

:::