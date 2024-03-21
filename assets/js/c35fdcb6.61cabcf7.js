"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[416],{1183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(7624),o=t(2172);const i={title:"Farming",sidebar_position:4,description:"Farming Phase",keywords:["Consensus","Farming"],last_update:{date:"01/30/2024",author:"Dariia Porechna"}},r=void 0,a={id:"consensus/consensus/farming",title:"Farming",description:"Farming Phase",source:"@site/docs/consensus/consensus/farming.md",sourceDirName:"consensus/consensus",slug:"/consensus/consensus/farming",permalink:"/docs/consensus/consensus/farming",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Dariia Porechna",lastUpdatedAt:1706569200,formattedLastUpdatedAt:"Jan 29, 2024",sidebarPosition:4,frontMatter:{title:"Farming",sidebar_position:4,description:"Farming Phase",keywords:["Consensus","Farming"],last_update:{date:"01/30/2024",author:"Dariia Porechna"}},sidebar:"tutorialSidebar",previous:{title:"Plotting",permalink:"/docs/consensus/consensus/plotting"},next:{title:"Proof-of-Time",permalink:"/docs/consensus/pot"}},l={},c=[{value:"Difficulty Adjustment",id:"difficulty-adjustment",level:2}];function d(e){const n={h2:"h2",li:"li",ol:"ol",p:"p",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Farming is participating in the consensus by solving a puzzle based on a previously created plot."}),"\n",(0,s.jsx)(n.p,{children:"The plot audits are designed to be SSD-friendly by favoring the random read approach vs. large sequential reads and optimized for typical SSD read size. For illustration, a farmer only needs to read below 32KiB at a random location per sector to check for a solution, and they only need to read more if their solution is eligible to win the block."}),"\n",(0,s.jsxs)("div",{align:"center",children:[(0,s.jsx)("img",{src:"/img/Farming-light.svg#gh-light-mode-only",alt:"Farming"}),(0,s.jsx)("img",{src:"/img/Farming-dark.svg#gh-dark-mode-only",alt:"Farming"})]}),"\n",(0,s.jsx)(n.p,{children:"After the farmer plots at least one sector, they can begin farming. As soon as they observe a new challenge from the global randomness beacon, the farmer scans each plot sector for a solution and proposes a block if they find one, as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"For each sector, derive a corresponding audit index."}),"\n",(0,s.jsx)(n.li,{children:"Read from disk the s-bucket at that index."}),"\n",(0,s.jsx)(n.li,{children:"Scan it for a chunk within the acceptable solution range from the block challenge."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Remember that each bucket contains chunks from all records. Therefore, if the farmer honestly stores all encoded records in the sector, they have the highest chance of success."}),"\n",(0,s.jsx)(n.p,{children:"If the farmer finds a winning chunk for the current block challenge, they perform the following steps to prove their solution is valid:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Identify the parent record of the winning chunk from its offset in the s-bucket."}),"\n",(0,s.jsx)(n.li,{children:"Read from disk all other encoded chunks of this record"}),"\n",(0,s.jsx)(n.li,{children:"Compute the corresponding proof-of-space table the same way as during Plotting."}),"\n",(0,s.jsx)(n.li,{children:"Query the table for proof values."}),"\n",(0,s.jsx)(n.li,{children:"Decode the record by XORing it with those proofs."}),"\n",(0,s.jsx)(n.li,{children:"Compute a KZG witness that the winning chunk belongs to a piece in the archived history."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Finally, the farmer can propose a block with the attached solution and proof of a valid solution."}),"\n",(0,s.jsx)(n.h2,{id:"difficulty-adjustment",children:"Difficulty Adjustment"}),"\n",(0,s.jsx)(n.p,{children:"The difficulty of farming is defined by the solution range: the narrower the solution range, the fewer possible chunks exist within that range, the smaller the probability for any given farmer to be storing such chunks on their disks. Similarly to Bitcoin, Dilithium uses an automatic difficulty adjustment mechanism to address fluctuations in network storage and keep block times relatively stable. Subspace targets a block time of approximately 6 seconds. The difficulty is adjusted every 2016 blocks based on the actual time it took to farm the previous 2016 blocks."})]})}function h(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(1504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);