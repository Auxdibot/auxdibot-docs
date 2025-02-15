---
title: Suggestions
---

Auxdibot features a robust Suggestions system, allowing administrators to gather feedback from their users.

## Suggestions Settings

---------

### Suggestions Channel

Administrators or members with permission can set the channel where suggestions are output to by running the command `/suggestions channel [channel]`. When a user creates a suggestion using the `/suggest (suggestion)` or `/suggestions create (suggestion)` commands, their suggestion will be output to the suggestions channel for your members to vote on.


### Suggestions Updates

When a suggestion is updated (approved/denied/considered/added), if an update channel is specified using the command `/suggestions updates_channel [channel]`, Auxdibot will send a message to that channel showcasing the current state of the suggestion.

### Suggestions Reactions

By default, suggestions created will have three reactions: 🔼, 🟦, 🔽.

Administrators can add up to 5 suggestions reactions by running the command `/suggestions add_reaction (reaction)`. Suggestions Reactions will be added automatically by Auxdibot to newly created suggestions.

A reaction can be removed at any time by running the command `/suggestions remove_reaction (reaction|index)`.

### Discussion Threads

:::warning
If you do not give members of your server the "Send Messages in Threads" permission for the suggestions channel, Discussion Threads cannot be used.
:::
Auxdibot suggestions by default will create a discussion thread for every discussion submitted.

Administrators or members with permission can disable Discussion Threads by running the command `/suggestions discussion_threads (create_thread)`.

## Responding & Moderating Suggestions

-----

### Updating a Suggestion

Administrators or members with permission can respond to a suggestion, marking it as approved/denied/considered/added by running the command `/suggestions respond (id) (response) [reason]`. When a suggestion is updated, Auxdibot will send a message to your channel showcasing the current state of the suggestion, and the suggestion will be deleted (can be changed with `/suggestions auto_delete (auto_delete)`).



### Suggestions Bans

Users can be banned from creating suggestions. Administrators or member with permissions can ban an abusive user by running the command `/suggestions ban (user)`. Users banned from suggestions can be unbanned when an administrator or member with permission unbans them with the command `/suggestions unban (user)`.

## Suggestions Commands
---

| Command  | Description |
| ------------- | ------------------- |
| `/suggest (suggestion)` | Create a suggestion. |
| `/suggestions create (suggestion)` | Create a suggestion. |
| `/suggestions channel [channel]` | Change the channel where suggestions are posted. |
| `/suggestions updates_channel [channel]` | Change the channel where updates to suggestions are posted. |
| `/suggestions reactions` | List the reactions for suggestions. |
| `/suggestions add_reaction (reaction)` | Add a reaction to the reactions on suggestions. |
| `/suggestions remove_reaction (reaction\|index)` | Remove a reaction from the reactions on suggestions. |
| `/suggestions auto_delete (delete)` | Set whether suggestions are deleted upon being approved, denied, or marked as added. |
| `/suggestions discussion_threads (create_thread)` | Set whether a discussion thread is created when a suggestion is created. |
| `/suggestions ban (user)` | Ban a user from using suggestions. |
| `/suggestions unban (user)` | Unban a user, allowing them to use suggestions. |
| `/suggestions respond (id) (response) [reason]` | Respond to a suggestion submitted by a user. |

