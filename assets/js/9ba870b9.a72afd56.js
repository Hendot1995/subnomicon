"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[93],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Staking",sidebar_position:3,description:"Operator and farmer staking",keywords:["DecEx","Domains","Staking"]},i=void 0,s={unversionedId:"decex/staking",id:"decex/staking",title:"Staking",description:"Operator and farmer staking",source:"@site/docs/decex/staking.md",sourceDirName:"decex",slug:"/decex/staking",permalink:"/docs/decex/staking",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Staking",sidebar_position:3,description:"Operator and farmer staking",keywords:["DecEx","Domains","Staking"]},sidebar:"tutorialSidebar",previous:{title:"General Workflow",permalink:"/docs/decex/domains/workflow"}},l={},c=[{value:"Power Balance",id:"power-balance",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Subspace Network relies on staking from both domain operators and farmers to secure the network and provide resources. Subspace implements a Nominated Proof-of-Stake algorithm where farmers endorse operators who execute transactions and produce blocks."),(0,n.kt)("p",null,"Our staking model consists of two tiers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Operators stake to gain the right to execute transactions within a domain and produce blocks. They are responsible for validating and executing transactions, producing execution receipts, and applying state transitions and earn rewards for their work. The operator chances to be elected as a slot leader are weighted by stake. Operators can be nominated by farmers."),(0,n.kt)("li",{parentName:"ul"},"Farmers earn rewards proportional to their pledged storage. Farmers can choose to nominate operators and back them with their own stake, increasing their chance of being elected as a slot leader. We implement a mechanism for farmers to automatically stake their block rewards with nominated operators to maximize yield.")),(0,n.kt)("p",null,"NPoS allows for virtually all SSC holders to participate, thus maintaining high levels of security by putting more value at stake and allowing more people to earn a yield based on their holdings."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"DelegatedStaking",src:r(379).Z,width:"870",height:"452"})),(0,n.kt)("h2",{id:"power-balance"},"Power Balance"),(0,n.kt)("p",null,"Farmers, who have earned storage rewards, nominate operators to execute transactions. This nomination system balances the power between farmers and operators and both parties share the rewards and the potential penalties (slashing). Farmer nominated operators get a higher chance to produce blocks proportional to the amount of stake backing them - and thus, higher revenues. Farmers have the power to nominate operators they trust to execute transactions properly, while operators compete to be nominated by providing good service, maintaining good reputation within the community, and having reasonable commission.\nFarmers also retain the power to withdraw their nominations at any time, ensuring operators remain accountable."),(0,n.kt)("p",null,"This two-tiered structure provides robust security guarantees. By enabling the consolidation of vast quantities of stake \u2014 far exceeding the SSC holdings of any individual party \u2014 it creates significant barriers for malicious actors trying to elect dishonest operators. Gaining the necessary backing requires building a considerable reputation, making it a challenging feat for adversaries. Additionally, attacking the system would be prohibitively expensive, as it would lead to the slashing of large amounts of stake. We anticipate that a substantial portion of the entire SSC supply will be staked in the NPoS system at any given time."))}d.isMDXComponent=!0},379:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/DelegatedStaking-972142c5a080face01a9271c952a3637.png"}}]);