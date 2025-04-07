# User API

The User API enables administrators to assign roles to users, defining the level of access and permissions associated with each role, and grant permissions to specific contexts, controlling what actions users can perform within those contexts, including controlling deletion of contexts, thereby implementing fine-grained access control and ensuring users only have access to necessary contexts and resources.

## Contexts

A Trisul Context is a separate instance of Trisul, comprising its own isolated database, configuration settings, and processes. Each context operates independently, allowing for secure and efficient management of multiple tenants.  
To create a new context, follow the provided link: [Creating a new context](https://docs.trisul.org/docs/ag/domain/contexts/#creating-a-new-context)

A tenant is mapped to a single context, enabling the isolation of tenant data and configurations within the Trisul platform. Each tenant requires a unique context for mapping, and one context can be mapped to only one tenant. 

For example, you can create a context named "unplcorp" and map it to the "unpl_corporate" tenant, ensuring that the tenant's data and configurations are isolated within the "unplcorp" context.

## Generating API Key

To manage tenants, you require a unique API key. This key grants access to tenant management capabilities for a specific user.  
To generate an API key, follow the provided link: [Generate API token](https://docs.trisul.org/docs/ag/webadmin/manageusers#generate-api-token)

By generating an API key, you not only enable tenant management for the selected user but also grant them access to the specified tenant. This ensures that the user can perform tenant-related tasks, such as configuration and monitoring, within the authorized scope.

## Adding Users

## Updating Users

## Deleting Users