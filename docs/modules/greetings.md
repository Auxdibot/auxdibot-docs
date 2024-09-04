---
title: Greetings
---

## Greetings

---



Greetings allow Auxdibot to broadcast messages announcing members joining and leaving your server.

Administrators or members with permission can set where join/leave messages are broadcast by running the command `/greetings channel [channel]`. When a greetings channel is not set, no Join/Leave messages are sent.

### Greeting Types

:::warning
Join DM messages will only be privately messaged to a user if their Discord privacy settings allow it.
:::

Greeting messages are sent under different greeting types, which can be individually customized.


| Type | Description |
| --- | --- |
| Join | Broadcast to the greetings channel when a member joins your server. |
| Leave | Broadcast to the greetings channel when a member leaves your server. |
| Join DM | Sent privately to a member when they join your server. |


### Customizing Greetings

:::tip
You can create a Stored Embed by running the commands `/embeds builder (id)`, `/embeds storage command (id) [...embed parameters]`, `/embeds storage json (id) (json) [webhook_url]`.

To view more information about Embeds, check out the [Embeds](/modules/embeds) section of the documentation.
:::

You can modify the Join/Leave/Join DM messages at any time by running the `/greetings (join|leave|join_dm) message (id)` commands. Additionally, you can preview the Join/Leave/Join DM messages by running the commands `/greetings (join|leave|join_dm) preview`.

### Greetings Commands

| Command | Description |
| --- | --- |
| `/greetings channel [channel]` | Set the greetings channel for this server, where join and leave messages are broadcast. |
| `/greetings join message (id)` | Set the join message. (See /embeds storage list for stored embeds.) |
| `/greetings join preview` | Preview the join message. |
| `/greetings leave message (id)` | Set the leave message. (See /embeds storage list for stored embeds.) |
| `/greetings leave preview` | Preview the leave message. |
| `/greetings join_dm message (id)` | Set the join DM message. (See /embeds storage list for stored embeds.) |
| `/greetings join_dm preview` | Preview the join DM message. |