"use strict";(self.webpackChunkauxdibot_docs=self.webpackChunkauxdibot_docs||[]).push([[520],{790:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=d(4848),r=d(8453);const t={title:"Logging"},l=void 0,i={id:"modules/logging",title:"Logging",description:"Logs",source:"@site/docs/modules/logging.md",sourceDirName:"modules",slug:"/modules/logging",permalink:"/modules/logging",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Logging"},sidebar:"sidebar",previous:{title:"Moderation",permalink:"/modules/moderation"},next:{title:"Embeds",permalink:"/modules/embeds"}},h={},c=[{value:"Logs",id:"logs",level:2},{value:"Viewing Logs",id:"viewing-logs",level:3},{value:"Log Actions",id:"log-actions",level:2},{value:"Filtering Log Actions",id:"filtering-log-actions",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"logs",children:"Logs"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["When an action is logged on Auxdibot, your latest log will be updated and a log will be sent to the log channel on your server. The log channel can be changed with the command ",(0,s.jsx)(n.code,{children:"/settings log_channel"}),"."]}),"\n",(0,s.jsxs)("p",{class:"image",children:[(0,s.jsx)("img",{alt:"Log Embed",src:"/_assets/log_embed.png",width:"450"}),(0,s.jsx)("em",{children:"The log embed sent to the log channel, which contains additional information about the action that has occurred."})]}),"\n",(0,s.jsx)(n.h3,{id:"viewing-logs",children:"Viewing Logs"}),"\n",(0,s.jsxs)(n.p,{children:["Administrators or members with permission can view the 50 latest logs on your server by running the ",(0,s.jsx)(n.code,{children:"/logs latest"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"log-actions",children:"Log Actions"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Auxdibot will log the following actions on your server. You can view this list at any time by running ",(0,s.jsx)(n.code,{children:"/logs actions"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Log Action"}),(0,s.jsx)(n.th,{children:"Action Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Log Channel Changed"}),(0,s.jsx)(n.td,{children:"The log channel on your server was changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mute Role Changed"}),(0,s.jsx)(n.td,{children:"The mute role on your server was changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Warn"}),(0,s.jsx)(n.td,{children:"A member of your server was warned."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Kick"}),(0,s.jsx)(n.td,{children:"A member of your server was kicked."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Mute"}),(0,s.jsx)(n.td,{children:"A member of your server was muted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ban"}),(0,s.jsx)(n.td,{children:"A member of your server was banned."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Unmute"}),(0,s.jsx)(n.td,{children:"A member of your server was unmuted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Unban"}),(0,s.jsx)(n.td,{children:"A member of your server was unbanned."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Member Join"}),(0,s.jsx)(n.td,{children:"A new member has joined your server."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Member Leave"}),(0,s.jsx)(n.td,{children:"A member has left your server."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Member Server Deafened"}),(0,s.jsx)(n.td,{children:"A member has been server deafened on voice."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Member Server Muted"}),(0,s.jsx)(n.td,{children:"A member has been server muted on voice."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Punishment Expired"}),(0,s.jsx)(n.td,{children:"A punishment has expired."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Punishment Deleted"}),(0,s.jsx)(n.td,{children:"A punishment has been deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Channel Created"}),(0,s.jsx)(n.td,{children:"A channel has been created."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Channel Deleted"}),(0,s.jsx)(n.td,{children:"A channel has been deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread Created"}),(0,s.jsx)(n.td,{children:"A thread has been created."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread Deleted"}),(0,s.jsx)(n.td,{children:"A thread has been deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Message Edited"}),(0,s.jsx)(n.td,{children:"A message on your server has been edited."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Message Deleted"}),(0,s.jsx)(n.td,{children:"A message on your server has been deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Join/Leave Channel Changed"}),(0,s.jsx)(n.td,{children:"The join/leave channel has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Join Role Added"}),(0,s.jsx)(n.td,{children:"A join role has been added."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Join Role Removed"}),(0,s.jsx)(n.td,{children:"A join role has been removed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sticky Role Added"}),(0,s.jsx)(n.td,{children:"A sticky role has been added."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Sticky Role Removed"}),(0,s.jsx)(n.td,{children:"A sticky role has been removed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reaction Role Added"}),(0,s.jsx)(n.td,{children:"A reaction role has been sent."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reaction Role Removed"}),(0,s.jsx)(n.td,{children:"A reaction role has been removed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reaction Role Edited"}),(0,s.jsx)(n.td,{children:"A reaction role has been edited."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Massrole Given"}),(0,s.jsx)(n.td,{children:"A role has been massrole given."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Massrole Taken"}),(0,s.jsx)(n.td,{children:"A role has been massrole taken."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Suggestion Created"}),(0,s.jsx)(n.td,{children:"A suggestion has been created."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Suggestions Channel Changed"}),(0,s.jsx)(n.td,{children:"The suggestions channel has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Suggestions Updates Channel Changed"}),(0,s.jsx)(n.td,{children:"The suggestions update channel has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Suggestions Auto Delete Changed"}),(0,s.jsx)(n.td,{children:"The suggestions auto delete option has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Suggestions Thread Creation Changed"}),(0,s.jsx)(n.td,{children:"The suggestions thread creation option has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Suggestion Deleted"}),(0,s.jsx)(n.td,{children:"A suggestion has been deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Starboard Channel Changed"}),(0,s.jsx)(n.td,{children:"The starboard channel has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Starboard Reaction Changed"}),(0,s.jsx)(n.td,{children:"The starboard reaction has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Starboard Reaction Count Changed"}),(0,s.jsx)(n.td,{children:"The starboard reaction count has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Starboard Message Deleted"}),(0,s.jsx)(n.td,{children:"A starboard message has been removed from the starboard."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scheduled Message Created"}),(0,s.jsx)(n.td,{children:"A scheduled message has been created."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scheduled Message Deleted"}),(0,s.jsx)(n.td,{children:"A scheduled message has been deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Level Channel Changed"}),(0,s.jsx)(n.td,{children:"The level channel has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Level Reward Created"}),(0,s.jsx)(n.td,{children:"A level reward was created."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Level Reward Deleted"}),(0,s.jsx)(n.td,{children:"A level reward was deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Channel Locked"}),(0,s.jsx)(n.td,{children:"A channel has been locked."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Channel Unlocked"}),(0,s.jsx)(n.td,{children:"A channel has been unlocked."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Server Locked"}),(0,s.jsx)(n.td,{children:"The server has been locked."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Server Unlocked"}),(0,s.jsx)(n.td,{children:"The server has been unlocked."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reports Channel Changed"}),(0,s.jsx)(n.td,{children:"The reports channel has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reports Role Changed"}),(0,s.jsx)(n.td,{children:"The reports role has been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Notification Created"}),(0,s.jsx)(n.td,{children:"A notification feed has been created."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Notification Deleted"}),(0,s.jsx)(n.td,{children:"A notification feed has been deleted."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command Rules Changed"}),(0,s.jsx)(n.td,{children:"The command rules for this server have been changed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Error"}),(0,s.jsx)(n.td,{children:"A silent error has occurred."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"filtering-log-actions",children:"Filtering Log Actions"}),"\n",(0,s.jsxs)(n.p,{children:["Log Actions can be filtered with the ",(0,s.jsx)(n.code,{children:"/logs filter (log)"})," command. When a log is filtered, it will no longer be logged to your log channel. You can unfilter the log by running the ",(0,s.jsx)(n.code,{children:"/logs filter (log)"})," command again."]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>l,x:()=>i});var s=d(6540);const r={},t=s.createContext(r);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);