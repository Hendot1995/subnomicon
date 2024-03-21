"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[220],{2512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(7624),i=a(2172);const o={title:"Advancing Blockchain",sidebar_position:3,description:"How Subspace resolves key concerns with blockchain",keywords:["Introduction","Motivation","Goals"],last_update:{date:"10/27/2023",author:"Dariia Porechna"}},s=void 0,r={id:"advancements",title:"Advancing Blockchain",description:"How Subspace resolves key concerns with blockchain",source:"@site/docs/advancements.md",sourceDirName:".",slug:"/advancements",permalink:"/docs/advancements",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Dariia Porechna",lastUpdatedAt:1698357600,formattedLastUpdatedAt:"Oct 26, 2023",sidebarPosition:3,frontMatter:{title:"Advancing Blockchain",sidebar_position:3,description:"How Subspace resolves key concerns with blockchain",keywords:["Introduction","Motivation","Goals"],last_update:{date:"10/27/2023",author:"Dariia Porechna"}},sidebar:"tutorialSidebar",previous:{title:"Architecture Overview",permalink:"/docs/overview"},next:{title:"Terminology",permalink:"/docs/terminology"}},l={},c=[{value:"Resolving Farmer&#39;s Dilemma",id:"resolving-farmers-dilemma",level:2},{value:"Eliminating Blockchain Bloat",id:"eliminating-blockchain-bloat",level:2},{value:"Addressing State Bloat",id:"addressing-state-bloat",level:2},{value:"Scaling Blockspace",id:"scaling-blockspace",level:2},{value:"Aligning Incentives for Optimal Scalability",id:"aligning-incentives-for-optimal-scalability",level:2}];function d(e){const t={h2:"h2",p:"p",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Designed from first principles, the Subspace Protocol resolves several critical challenges within the industry."}),"\n",(0,n.jsx)(t.h2,{id:"resolving-farmers-dilemma",children:"Resolving Farmer's Dilemma"}),"\n",(0,n.jsx)(t.p,{children:"In an effort to make blockchains more energy-efficient, egalitarian, and decentralized, several protocols\nemploy consensus based on Proof-of-Space, replacing compute-intensive mining with storage-intensive farming. PoSpace consensus introduces a unique mechanism\ndesign challenge called the farmer's dilemma, which\nsuggests that existing constructions are not actually incentive-compatible. Simply put, farmers must decide whether to allocate\nscarce storage resources to maintain the chain\nstate and history or maximize the amount of space they pledge\ntowards consensus. Rational farmers will always choose the latter,\nat best becoming light clients, while at worst encouraging pooled\nfarming under a few trusted operators."}),"\n",(0,n.jsxs)("div",{align:"center",children:[(0,n.jsx)("img",{src:"/img/Farmers_Dilemma-light.svg#gh-light-mode-only",alt:"Farmers_Dilemma"}),(0,n.jsx)("img",{src:"/img/Farmers_Dilemma-dark.svg#gh-dark-mode-only",alt:"Farmers_Dilemma"})]}),"\n",(0,n.jsx)(t.p,{children:"To resolve this dilemma, Subspace farmers\nmaintain only minimal state and history while retaining the\nsecurity properties and decentralization benefits of a full node.\nConsensus in Subspace is based on proofs of replicated storage\nof the history of the blockchain itself. Farmers store the history\ncollectively, many times over, with each farmer storing as many\nreplicas as their disk space allows. Consensus and computation\nare then decoupled, so farmers only propose an ordering\nfor transactions, while staked executor nodes maintain the state\nand compute transitions. This separation of concerns significantly\nreduces the storage and compute overhead needed to operate a\nfarmer, even in an Ethereum-style execution model, allowing for\nhigh levels of participation."}),"\n",(0,n.jsxs)("div",{align:"center",children:[(0,n.jsx)("img",{src:"/img/Farmers_Dilemma_Solution-light.svg#gh-light-mode-only",alt:"Farmers_Dilemma_Solution"}),(0,n.jsx)("img",{src:"/img/Farmers_Dilemma_Solution-dark.svg#gh-dark-mode-only",alt:"Farmers_Dilemma_Solution"})]}),"\n",(0,n.jsx)(t.h2,{id:"eliminating-blockchain-bloat",children:"Eliminating Blockchain Bloat"}),"\n",(0,n.jsx)(t.p,{children:"The Subspace consensus protocol is designed to overcome the critical problem of blockchain bloat or the tendency for blockchains to become more centralized over time, especially as they scale. Bloat is a result of the desire for every full node to store the chain's entire transaction history and resulting execution state. Subspace eliminates bloat by uniquely combining the best parts of layer-one blockchains like Ethereum, Filecoin and Chia, resulting in a new storage-based consensus protocol, a permanent distributed storage service, and a scalable off-chain execution framework."}),"\n",(0,n.jsx)(t.h2,{id:"addressing-state-bloat",children:"Addressing State Bloat"}),"\n",(0,n.jsx)(t.p,{children:"To resolve the problem of state bloat, Subspace introduces a decoupled execution framework (DecEx). Under this framework, farmers will only confirm the availability of transactions and provide an ordering. At the same time, a secondary network of staked operator nodes will execute the transactions and maintain the resulting chain state. DecEx separates the probabilistic process of coming to a consensus over ordering transactions from the deterministic process of executing transactions. Since these roles are now decoupled, we can have different hardware requirements for each node type, allowing us to keep farming lightweight and open to anyone while also providing a foundation for scaling execution both vertically, based on the hardware capabilities of operators, and horizontally, by later partitioning operators into different namespaced execution domains."}),"\n",(0,n.jsx)(t.h2,{id:"scaling-blockspace",children:"Scaling Blockspace"}),"\n",(0,n.jsx)(t.p,{children:"The overall execution throughput is ultimately constrained by the blockspace bandwidth. Blockspace is space on a blockchain that can run code or store data. To achieve optimal throughput, our scalability framework should seek to increase the blockspace linearly as more nodes contribute resources to the network \u2013 without reducing security or decentralization."}),"\n",(0,n.jsx)(t.p,{children:"Subspace achieves optimal scalability through Orthogonal Execution (OE) by first horizontally scaling the blockspace of the base data availability layer and then vertically scaling the transaction throughput for each domain. OE starts with the unique properties of the Subspace protocol and extends them with several ideas originating within the Tse Lab at Stanford University. These include the Prism protocol for vertical scaling, the Free2Shard protocol for horizontal scaling, the Semi-AVID-PR scheme for distributed data availability, and the Ebb-and-Flow protocols for flexible finality."}),"\n",(0,n.jsx)(t.h2,{id:"aligning-incentives-for-optimal-scalability",children:"Aligning Incentives for Optimal Scalability"}),"\n",(0,n.jsx)(t.p,{children:"Subspace includes a novel algorithm to dynamically adjust the cost of blockspace in response to changes in supply and demand to economically secure the network in an open environment. Such adjustment naturally keeps the network incentive compatible for farmers, providing storage and data availability bandwidth and for operators providing raw compute power."}),"\n",(0,n.jsx)(t.p,{children:"Subspace creates the world's first two-sided marketplace for blockspace, allowing it to have a dynamic on-chain cost-of-blockspace and a stable off-chain price-of-blockspace without relying on centralized control or coordination.\nOn one side are the farmers, who collectively supply blockspace bandwidth through their storage of the blockchain history. On the other side are dApp developers and users, who demand blockspace to deploy and run their applications. Subspace's marketplace algorithm adjusts the on-chain cost-of-blockspace paid out to farmers based on real-time supply and demand. When demand is high, the cost rises to incentivize more farmers to join. When demand is low, the cost falls to disincentivize over-investment in storage. This dynamic adjustment process occurs transparently on-chain through the protocol rules."}),"\n",(0,n.jsx)(t.p,{children:"When combined with existing scalability frameworks, Subspace can achieve linear scaling of the blockspace as more nodes join the network without sacrificing security or decentralization."})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2172:(e,t,a)=>{a.d(t,{I:()=>r,M:()=>s});var n=a(1504);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);