"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=c(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?i.createElement(d,s(s({ref:t},p),{},{components:n})):i.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={title:"Overview",sidebar_position:1,description:"Dilithium Consensus Overview",keywords:["Consensus","Dilithium"]},s=void 0,a={unversionedId:"consensus/overview",id:"consensus/overview",title:"Overview",description:"Dilithium Consensus Overview",source:"@site/docs/consensus/overview.md",sourceDirName:"consensus",slug:"/consensus/overview",permalink:"/docs/consensus/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1,description:"Dilithium Consensus Overview",keywords:["Consensus","Dilithium"]},sidebar:"tutorialSidebar",previous:{title:"Consensus",permalink:"/docs/category/consensus"},next:{title:"Genesis",permalink:"/docs/consensus/genesis"}},l={},c=[{value:"<em>Dilithium</em>",id:"dilithium",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Subspace is powered by ",(0,r.kt)("em",{parentName:"p"},"Dilithium")," - a lightweight and secure consensus mechanism that is environmentally friendly, permissionless, and fair. ",(0,r.kt)("em",{parentName:"p"},"Dilithium")," is a Proof-of-Archival-Storage (PoAS), Nakamoto-style consensus protocol based on proofs of storing the blockchain's history. "),(0,r.kt)("p",null,"In PoAS, farmers (not miners) store as many unique pieces of the blockchain history as their disk space allows. PoAS incentivizes the storage of the blockchain history, resolving the critical mechanism design failure, which has hindered scalability and led to centralization within Proof-of-Space blockchains like Filecoin and Chia. Since PoAS consensus is based on storage rather than computing power or wealth, it is eco-friendly and accessible to ordinary people with available disk space. This approach allows us to combine the high security of Bitcoin-style Proof-of-Work with the energy efficiency of Ethereum-style Proof-of-Stake. PoAS also provides the basis for a more generic solution to the blockchain bloat problem. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ConsensusPhases",src:n(6654).Z+"#gh-light-mode-only",width:"597",height:"481"}),(0,r.kt)("img",{alt:"ConsensusPhases",src:n(1893).Z+"#gh-dark-mode-only",width:"597",height:"481"})),(0,r.kt)("p",null,"Formally, PoAS is a three-phase protocol, consisting of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an initial ",(0,r.kt)("strong",{parentName:"li"},"Genesis")," phase (starting the chain)"),(0,r.kt)("li",{parentName:"ul"},"a recurring deterministic ",(0,r.kt)("strong",{parentName:"li"},"Archiving")," phase (given new blocks of the chain, constructing a canonical history)"),(0,r.kt)("li",{parentName:"ul"},"a unique setup or ",(0,r.kt)("strong",{parentName:"li"},"Plotting")," phase done individually by each farmer (given the canonical history of the blockchain, generate a unique replica (the plot) and store it on disk)"),(0,r.kt)("li",{parentName:"ul"},"a probabilistic ",(0,r.kt)("strong",{parentName:"li"},"Farming")," phase (given a challenge from a secure randomness beacon, scan the plot for a solution that satisfies some threshold, return a proof, and propose a block). The scan is based on a recurring slot challenge from a secure randomness beacon, with a one timeslot per second frequency. ")),(0,r.kt)("h2",{id:"dilithium"},(0,r.kt)("em",{parentName:"h2"},"Dilithium")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Dilithium")," is a second-generation PoAS consensus algorithm that uses erasure coding and KZG commitments for distributed archiving while combining polynomial encoding with an ASIC-resistant Proof-of-Space for plotting and AES-based Proof-of-Time. The protocol represents a significant step forward in security and user experience for Subspace Network participants. ",(0,r.kt)("em",{parentName:"p"},"Dilithium")," is also designed to be SSD-friendly, further enhancing energy efficiency and decentralization. "),(0,r.kt)("p",null,"For those familiar with our initial consensus design, ",(0,r.kt)("em",{parentName:"p"},"Dilithium")," fulfills all the fundamental ideas described in the original ",(0,r.kt)("a",{parentName:"p",href:"https://subspace.network/news/subspace-network-whitepaper"},"whitepaper")," but implements them better."))}u.isMDXComponent=!0},1893:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Consensus_Phases-dark-55795e2ed1efaaa621638c777db51a79.svg"},6654:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Consensus_Phases-light-7e3f66d42a33104717503ba3a94dcadf.svg"}}]);