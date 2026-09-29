# Trisul Administrator Guide

This guide picks up once Trisul is installed, licensed, and you've logged in for the first time. If you haven't done that yet, start with [**Start Here → Setup Trisul**](/docs/guide/starthere/setuptrisul/install/requirements) for installation, licensing, and network configuration — then come back here. All [**four Trisul products**](/docs/guide/starthere/setuptrisul/install/selectmode) run on the same core platform, so most of this guide applies to every product. Some pages apply only to one product mode or input type. For example, NetFlow Template DB applies only when Trisul receives NetFlow or IPFIX.

:::tip
Start with **Admin Tasks**: start Trisul, check its logs, and set up storage. Come back to the other sections when you need them.
:::

:point_right: Here's what's in the **Admin Guide**:

- **[Admin Tasks](/docs/guide/ag/admintasks/)** — the day-to-day operations console: start/stop Hub and Probe nodes, manage profiles, check probe health and storage status, licensing, NetFlow template DB, audit log, DR/DC status, and user resources.
- **[Using the Admin UI](/docs/guide/ag/ui/adminlayout)** — a short tour of the admin interface layout.
- **[Managing Trisul](/docs/guide/ag/webadmin/)** — platform-wide web admin settings: users, roles, LDAP login, email, dashboards, menus, background jobs, IPAM, SMS, and more.
- **[Configuring Trisul](/docs/guide/ag/context/)** — per-context configuration: home networks, access points, cron tasks, backups, custom counter groups, SNMP agent, and other context-level settings.
- **[High Availability](/docs/guide/ag/ha/)** — HA and disaster-recovery setups for production deployments.
- **[Manage Contexts](/docs/guide/ag/manage_contexts/listcontexts)** — create, list, and sync contexts (tenants) for multi-tenant / MSP deployments.