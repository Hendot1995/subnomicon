"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[386],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(r),h=o,f=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Rewards & Fees",sidebar_position:8,description:"Rewards and Fees paid and received by Subspace Network participants",keywords:["Rewards","Fees","Tokenomics"]},s=void 0,i={unversionedId:"rewards_fees",id:"rewards_fees",title:"Rewards & Fees",description:"Rewards and Fees paid and received by Subspace Network participants",source:"@site/docs/rewards_fees.md",sourceDirName:".",slug:"/rewards_fees",permalink:"/docs/rewards_fees",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Rewards & Fees",sidebar_position:8,description:"Rewards and Fees paid and received by Subspace Network participants",keywords:["Rewards","Fees","Tokenomics"]},sidebar:"tutorialSidebar",previous:{title:"Staking",permalink:"/docs/decex/staking"}},c={},l=[{value:"Farmers",id:"farmers",level:2},{value:"Operators",id:"operators",level:2},{value:"Nominators",id:"nominators",level:2},{value:"Designated Storage Fund",id:"designated-storage-fund",level:2}],d={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All the participants of the Subspace Network are compensated for the work they do to keep the network live and secure. In this context, we define the following terms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Fees"),": The payments for transactions on the Subspace Network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rewards"),": The compensation for the work done by the participants of the Subspace Network."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Issuance"),": The issuance of the newly minted SSC by the protocol.")),(0,o.kt)("p",null,"Different participants receive their compensation through a combination of the above based on their role."),(0,o.kt)("h2",{id:"farmers"},"Farmers"),(0,o.kt)("p",null,"Currently, farmer rewards include: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fees for the transactions they include in consensus chain blocks,"),(0,o.kt)("li",{parentName:"ul"},"block rewards for the blocks they proposed, issued by the protocol,"),(0,o.kt)("li",{parentName:"ul"},"vote rewards issued by the protocol,"),(0,o.kt)("li",{parentName:"ul"},"Designated Storage Fund (DSF) subsidy.")),(0,o.kt)("h2",{id:"operators"},"Operators"),(0,o.kt)("p",null,"Currently, operators are solely rewarded with the fees for domain transactions they execute. Since domain transactions (e.g. EVM contract calls) are usually much more computationally heavy, than those performed on the consensus chain (e.g. balance transfers), they are substantially expensive to compensate operators fairly for their work. The operators receive the reward for the executed transactions only after the corresponding domain block has cleared the challenge period. For more details, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/decex/domains/workflow#domain-block-rewards"},"Domain Block Rewards"),"."),(0,o.kt)("h2",{id:"nominators"},"Nominators"),(0,o.kt)("p",null,"Currently, nominators receive a portion of the rewards of the operator they nominated, based on their shares in the pool. For more details on how the pool shares and rewards are calculated, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/decex/staking#nomination-pools"},"Nomination Pools"),"."),(0,o.kt)("h2",{id:"designated-storage-fund"},"Designated Storage Fund"),(0,o.kt)("p",null,"The purpose of the Designated Storage Fund (DSF) is to ensure that the network can remain incentive compatible in the long-term (i.e. if inflationary token rewards trend towards zero over time), ensuring the history is preserved decades into the future. Currently, 10% of transaction storage fees collected in each block are assigned to the DSF payment, which is retained by the consensus protocol within an on-chain deposit account. This treasury can be seen as a hard-coded smart contract that can only be modified by a consensus protocol upgrade. Each block, a small portion of the entire DSF (currently, 0.01%) is disbursed back to the block proposer."))}p.isMDXComponent=!0}}]);