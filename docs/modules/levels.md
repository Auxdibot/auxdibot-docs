---
title: Levels
---

Auxdibot's levels feature allows users to gain XP by interacting with your server in various ways.

## Viewing Level Data
---

### Level Statistics

Users on your server can view their level at any time by running the `/mylevel [user]` command. If a user is not specified, the user runnning the command's level data is shown. The top users on the server can be viewed by running the `/leaderboard` command.

### Leaderboard Website

Auxdibot's leveling module comes with a leaderboard website for every server, which is enabled by default. This website can be accessed at `https://auxdibot.xyz/leaderboard/(server id here)`

To disable the leaderboard website, Administrators or members with permission can run the command `/levels settings leaderboard_visibility (visibility)`

## Editing Level Data
---

### Give/Take XP

Administrators or members with permission can award or remove XP from members by running the command `/levels xp (award|remove) (xp) (user)`.

### Reset XP

Administrators or members with permission can reset a member's XP progress by running the command `/levels xp reset (user)`.

:::danger
Resetting the Levels for your server is dangerous. Level data will be lost forever. Only do this as a last resort!
:::
Additionally, Levels for the entire server can be reset by running the `/levels xp reset_all` command.

### Importing/Exporting CSV Level Data (Advanced)

Administrators or members with permission can export their server's XP data by running the command `/levels data export_csv`.

Level data CSV files are comprised of 2 CSV columns, `userID` and `xp`.

Administrators or members with permission can import an Auxdibot level data CSV file to your server by running the command `/levels data import_csv (csv)`. The CSV file much be attached in the `csv` argument for the command to run. When Auxdibot has finished processing the CSV file you have imported, members on your server should have their XP data assigned. This will not affect members who are not in your server.

## Level Rewards
---

### Adding Level Rewards

Level Rewards are roles given to users when they reach a specific level. Administrators or members with permission can add a role as a Level Reward by running the command `/levels rewards add (level) (role)`.

### Removing Level Rewards

Level Rewards can be removed using the `/levels rewards remove (level|index)` command, or by deleting the role on Discord.

## Level Message
---

### Levelup Message

The levelup message can be customized by Administrators or members with permission by running the `/levels message set` command. 

It can be reset to its default by running the `/levels message reset` command, and can be previewed by running the `/levels message preview` command.

The level the user is leveling up from, and the level the user is leveling up to, can be added by using the `%LEVEL_FROM%` and `%LEVEL_TO%` placeholders respectively.

### Levelup Messages Channel

When a user levels up, by default Auxdibot will reply to the message that caused the user to level up, notifying them of their level increase. Administrators or members with permission can set a channel where levelup messages are sent by running the command `/levels settings channel [channel]`. When a level channel is set, levelup messages are broadcast to that channel, and the user is pinged.

### Disabling Levelup Messages

The message sent for levelling up can be disabled/enabled by running the `/levels settings toggle_embed` command.

## Level XP Rates
---

### Setting XP Rates

Level XP rates for messages, starboarded messages, voice chat activity, and events can be set as either a fixed number (ex. `20`), or a range for a random number to be in-between (inclusive) (ex. `10-50`).

### Set Message XP

Administrators or members with permission can set the message XP for your server by running the command `/levels settings message_xp (xp)`. When a member sends a message on your server, they will receive the `message_xp` specified.

### Set Event XP

:::note
Members will only recieve the event XP bonus once per event.
:::
Administrators or members with permission can set the event XP for your server by running the command `/levels settings event_xp (xp)`. When a member joins a voice chat during an event, they will receive the `event_xp` specified.

### Set Voice XP

Administrators or members with permission can set the message XP for your server by running the command `/levels settings voice_xp (xp)`. When a member has been in a voice chat for 1 minute, they will receive the `voice_xp` specified.

### Set Starboard XP

:::info
The "Starboard" module must be enabled and atleast one Starboard must be configured for this feature to function. See the [Starboard](/modules/starboard) documentation for more information.
:::

Administrators or members with permission can set the message XP for your server by running the command `/levels settings starboard_xp (xp)`. When a member's message receives enough reactions to be posted to your server's Starboard, they will receive the `starboard_xp` specified.

## Level XP Multipliers
---

### Role Multipliers

Role multipliers allow users to receive a multiplier on experience earned by interacting with your server while having a specific Role on Discord.

Role multipliers can be added by running the `/levels multipliers add_role (role) (multiplier)` command.

Role multipliers can be removed by running the `/levels multipliers remove_role (role|index)` command, or by deleting the role on Discord.

### Channel Multipliers

Channel multipliers allow users to receive a multiplier on experience earned by interacting with your server in specific channels.

Channel multipliers can be added by running the `/levels multipliers add_channel (channel) (multiplier)` command.

Channel multipliers can be removed by running the `/levels multipliers remove_channel (channel|index)` command, or by deleting the channel on Discord.

### Global Multiplier

A global multiplier can be set for your entire server by running the `/levels multipliers set_global [multiplier]` command.

## Levels Commands
---

| Command | Description |
| --- | --- |
| `/levels stats level [user]` | View a user's level stats. Leave empty to view your own. |
| `/mylevel [user]` | View a user's level stats. Leave empty to view your own. |
| `/levels stats leaderboard` | View the top leveled members on this server. |
| `/leaderboard` | View a user's level stats. Leave empty to view your own. |
| `/levels data export_csv` | Export the levels data to a CSV file. |
| `/levels data import_csv (csv) [overwrite]` | Import data from a CSV file. |
| `/levels rewards add (level) (role)` | Add a reward to the Level Rewards. |
| `/levels rewards remove [level\|index]` | Remove a reward from the Level Rewards. |
| `/levels rewards list` | View the Level Rewards for this server. |
| `/levels message set [...embed parameters]` | Set the levelup message. (Use %LEVEL_FROM% for the user's previous level and %LEVEL_TO% for the user's new level) |
| `/levels message reset` | Reset the levelup message back to its default value. |
| `/levels message preview` | Preview the levelup message. |
| `/levels xp award (xp) (user)` | Award a user XP points. |
| `/levels xp remove (xp) (user)` | Remove XP points from a user. |
| `/levels xp reset (user)` | Reset a user's level and XP. |
| `/levels xp reset_all` | Reset every member's level and XP. (WARNING: THIS CANNOT BE RECOVERED) |
| `/levels multipliers add_channel (channel) (multiplier)` | Add a channel to the multiplier list. |
| `/levels multipliers remove_channel (channel\|index)` | Remove a reward from the Level Rewards. |
| `/levels multipliers add_role (role) (multiplier)` | Add a role to the multiplier list. |
| `/levels multipliers remove_role (role\|index)` | Remove a reward from the Level Rewards. |
| `/levels multipliers list` | List all multipliers on your server. |
| `/levels multipliers set_global [multiplier]` | Set the global XP multiplier for the server. (If empty, set to 1.) |
| `/levels settings message_xp (xp)` | Set the amount of XP given for sending a message. |
| `/levels settings toggle_embed` | Toggle whether the Level embed is sent upon a user leveling up. |
| `/levels settings channel [channel]` | Levelup messages channel, or leave empty for Auxdibot to reply to the current message. |
| `/levels settings event_xp (xp)` | Set the amount of XP given for attending an event on your Discord server. |
| `/levels settings starboard_xp (xp)` | Set the amount of XP given for starring a message on your Discord server. |
| `/levels settings voice_xp (xp)` | Set the amount of XP given for joining a voice channel for 1 minute. |
| `/levels settings leaderboard_visibility` | Toggle whether the leaderboard can be viewed online. |
