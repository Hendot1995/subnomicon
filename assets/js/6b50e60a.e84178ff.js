"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={title:"Terminology",sidebar_position:4,description:"Definitions for all things Subspace",keywords:["Terminology","Definitions","Glossary"]},r=void 0,s={unversionedId:"terminology",id:"terminology",title:"Terminology",description:"Definitions for all things Subspace",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/docs/terminology",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Terminology",sidebar_position:4,description:"Definitions for all things Subspace",keywords:["Terminology","Definitions","Glossary"]},sidebar:"tutorialSidebar",previous:{title:"Advancing Blockchain",permalink:"/docs/advancements"},next:{title:"Dilithium Consensus",permalink:"/docs/category/dilithium-consensus"}},l={},c=[{value:"Subspace",id:"subspace",level:2},{value:"Subspace Network",id:"subspace-network",level:2},{value:"Blockchain History",id:"blockchain-history",level:2},{value:"Blockchain State",id:"blockchain-state",level:2},{value:"Dilithium",id:"dilithium",level:2},{value:"Consensus Chain",id:"consensus-chain",level:2},{value:"DSN",id:"dsn",level:2},{value:"Domain",id:"domain",level:2},{value:"Domain Chain",id:"domain-chain",level:2},{value:"Domain Epoch",id:"domain-epoch",level:2},{value:"Node",id:"node",level:2},{value:"Farmer",id:"farmer",level:2},{value:"Domain Operator",id:"domain-operator",level:2},{value:"Timekeeper",id:"timekeeper",level:2},{value:"Client",id:"client",level:2},{value:"Archiving",id:"archiving",level:2},{value:"Archived History",id:"archived-history",level:2},{value:"Plotting",id:"plotting",level:2},{value:"Farming",id:"farming",level:2},{value:"Segment",id:"segment",level:2},{value:"Segment Header",id:"segment-header",level:2},{value:"Raw Record",id:"raw-record",level:2},{value:"Record",id:"record",level:2},{value:"Piece",id:"piece",level:2},{value:"Sector",id:"sector",level:2},{value:"Plot",id:"plot",level:2},{value:"Commitment",id:"commitment",level:2},{value:"Reconstruction",id:"reconstruction",level:2},{value:"SSC",id:"ssc",level:2},{value:"Shannon",id:"shannon",level:2},{value:"Subspace CLI",id:"subspace-cli",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"subspace"},"Subspace"),(0,i.kt)("p",null,"Typically encapsulates everything about the project and is not limited in scope just to the blockchain or any other component specifically. Often, it can be clarified to something more specific but is used interchangeably for simplicity."),(0,i.kt)("h2",{id:"subspace-network"},"Subspace Network"),(0,i.kt)("p",null,"Typically means a combination of Subspace consensus chain, domain chains and Distributed Storage Network as a whole system."),(0,i.kt)("h2",{id:"blockchain-history"},"Blockchain History"),(0,i.kt)("p",null,"An ordered collection of blocks of the blockchain, specifically in Subspace, means SCALE-encoded blocks of the blockchain. "),(0,i.kt)("h2",{id:"blockchain-state"},"Blockchain State"),(0,i.kt)("p",null,"The result of executing transactions on a blockchain (like state of account balances, smart contracts, etc.)"),(0,i.kt)("h2",{id:"dilithium"},"Dilithium"),(0,i.kt)("p",null,"The Subspace Network Proof-of-Archival-Storage consensus mechanism which defines Archiving, Plotting, Farming, Proving and Verification, including Proof-of-Space and Proof-of-Time components."),(0,i.kt)("h2",{id:"consensus-chain"},"Consensus Chain"),(0,i.kt)("p",null,"A blockchain over which farmers achieve consensus. A lightweight, quick to sync chain, free from most of the computation to reduce the storage and computation overhead for Farmers."),(0,i.kt)("h2",{id:"dsn"},"DSN"),(0,i.kt)("p",null,"Short for Distributed Storage Network, a network of Farmers that have plotted pieces of Archival History and serve them to Clients. The DSN handles data storage, retrieval and replication across the network."),(0,i.kt)("h2",{id:"domain"},"Domain"),(0,i.kt)("p",null,"An application-specific blockchain anchored and validated by the Subspace Network. Domains allow arbitrary computation and state transitions tailored to the needs of a specific application or use case. Each domain has its gossip network (domain subnet) and a configurable runtime. Staked executors can opt-in to operate a domain as Domain Operators, collect compute fees from domain users, and challenge invalid state commitments."),(0,i.kt)("h2",{id:"domain-chain"},"Domain Chain"),(0,i.kt)("p",null,"An application-specific blockchain that operators use to run the state transitions over transaction bundles, which blindly follows the consensus of the Consensus Chain and deterministically executes transaction bundles in the order defined by the Consensus Chain."),(0,i.kt)("h2",{id:"domain-epoch"},"Domain Epoch"),(0,i.kt)("p",null,"An interval, in domain chain blocks, between each stake allocation re-adjustment. Operator stakes are fixed at the start of the epoch for its duration. At the end of each epoch, the stake distribution is adjusted based on new stake deposits, withdrawal requests and slashing events."),(0,i.kt)("h2",{id:"node"},"Node"),(0,i.kt)("p",null,"A participant in the P2P network. A node connects to other nodes on the P2P network, maintains history and state, can do block production for consensus, all things around execution, serves as an endpoint for client or farmer, etc. A node encompasses various roles like Farmer, Domain Operator, and Timekeeper."),(0,i.kt)("h2",{id:"farmer"},"Farmer"),(0,i.kt)("p",null,"A role on the Subspace Network responsible for maintaining consensus (safety of the Consensus Chain). A Farmer plots pieces of Archival History to disk, farms the created plot for block rewards, and joins the DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients)."),(0,i.kt)("h2",{id:"domain-operator"},"Domain Operator"),(0,i.kt)("p",null,"A role on the Subspace Network responsible for running arbitrary computation on Domains, state transitions, and maintaining state (liveness of the Execution Chain)."),(0,i.kt)("h2",{id:"timekeeper"},"Timekeeper"),(0,i.kt)("p",null,"A role on the Subspace Network responsible for running the Proof-of-Time chain and maintaining the randomness beacon for the Consensus Chain."),(0,i.kt)("h2",{id:"client"},"Client"),(0,i.kt)("p",null,"A user of the Subspace Network that interacts with it through a light client like Substrate Connect or other frontend applications. Clients can submit transactions, query the state but don't participate directly in consensus or run full nodes. They rely on nodes like farmers for data retrieval."),(0,i.kt)("h2",{id:"archiving"},"Archiving"),(0,i.kt)("p",null,"An integral part of Dilithium consensus, a process of transforming Blockchain History into Archived History."),(0,i.kt)("h2",{id:"archived-history"},"Archived History"),(0,i.kt)("p",null,"The immutable ordered collection of blocks that have been archived and permanently stored in a redundant, verifiable and retrievable way across the DSN. Archived History is the result of Archiving blocks at a particular depth from the tip of the chain."),(0,i.kt)("h2",{id:"plotting"},"Plotting"),(0,i.kt)("p",null,"An integral part of Dilithium consensus, Plotting is a process of creating and maintaining plots on disk by Farmers from Archived History. Plots allow efficient proofs of possession and retrievability of Archived History."),(0,i.kt)("h2",{id:"farming"},"Farming"),(0,i.kt)("p",null,"An integral part of Dilithium consensus, Farming is a process of participation in the consensus by solving a puzzle based on the previously created plot (during Plotting). Farmers compete to farm blocks and earn rewards by being the first to solve the puzzle and submit valid proof."),(0,i.kt)("h2",{id:"segment"},"Segment"),(0,i.kt)("p",null,"A collection of (potentially partial) blocks of the blockchain history\nSpecifically, in Subspace means two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recorded History Segment"),": a fixed-size portion of the Blockchain History in a buffer before Archiving. A Recorded History Segment consists of Raw Records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Archived History Segment"),": a fixed-size portion of the Archived History. An Archived History Segment is a Recorded History Segment transformed by the Archiving process. An Archived History Segment consists of Pieces. An Archived History Segment can be later turned back into a Recorded History Segment History with Reconstructing process")),(0,i.kt)("h2",{id:"segment-header"},"Segment Header"),(0,i.kt)("p",null,"A compact header in an Archived History Segment containing the segment index, segment commitment, a pointer to the previous segment header and information about the progress of block archiving."),(0,i.kt)("h2",{id:"raw-record"},"Raw Record"),(0,i.kt)("p",null,'A fragment of Blockchain History, the "useful data" for the PoAS consensus protocols before being archived.'),(0,i.kt)("h2",{id:"record"},"Record"),(0,i.kt)("p",null,"A Raw Record that was transformed and prepared for Archiving."),(0,i.kt)("h2",{id:"piece"},"Piece"),(0,i.kt)("p",null,"The unit of measurement of Archived History is conceptually a piece of Archived History from which Archived History Segments are composed. Each Piece is composed of Record + Commitment + Witness."),(0,i.kt)("h2",{id:"sector"},"Sector"),(0,i.kt)("p",null,"A collection of encoded Pieces written to disk during Plotting that can be used for Farming. A sector contains encoded record data from pieces, original piece commitments, witnesses, and other metadata about stored pieces. A collection of Sectors comprises a Plot."),(0,i.kt)("h2",{id:"plot"},"Plot"),(0,i.kt)("p",null,"A collection of Sectors written to disk that can be used for Farming"),(0,i.kt)("h2",{id:"commitment"},"Commitment"),(0,i.kt)("p",null,"Specifically, in Subspace in the context of Archiving implementation means two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Record Commitment:")," a KZG commitment to blockchain data in a Raw Record"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Segment Commitment:")," a KZG commitment to hashes of all Record Commitments in an Archived History Segment")),(0,i.kt)("h2",{id:"reconstruction"},"Reconstruction"),(0,i.kt)("p",null,"A process of transforming Archived History back into Blockchain History. Specifically, it is transforming pieces of Archived History, one Archived History Segment at a time, back into blocks of the blockchain history that can be used for starting a new Full Node from Genesis."),(0,i.kt)("h2",{id:"ssc"},"SSC"),(0,i.kt)("p",null,"Short for Subspace Credit, the native token of Subspace Network. While SSC is integral to and necessary for the operation of the Subspace Network, it is intended as a utility currency to pay for the use of the Subspace (i.e., transaction fees, domain leader election)."),(0,i.kt)("h2",{id:"shannon"},"Shannon"),(0,i.kt)("p",null,"A Shannon is the smallest unit of an SSC, equal to ",(0,i.kt)("span",{parentName:"p",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mn",{parentName:"msup"},"0"),(0,i.kt)("mrow",{parentName:"msup"},(0,i.kt)("mo",{parentName:"mrow"},"\u2212"),(0,i.kt)("mn",{parentName:"mrow"},"18")))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{-18}")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord"},"0"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"18")))))))))))))," SSC. SSCs are divisible up to 18 decimal places to allow for microtransactions."),(0,i.kt)("p",null,'Shannon is named after Claude Shannon, a mathematician, electrical engineer, and cryptographer known as "the father of information theory". His work was central to the rise of digital computing and laid the foundations for the information age.'),(0,i.kt)("h2",{id:"subspace-cli"},"Subspace CLI"),(0,i.kt)("p",null,"A Command Line Interface application automates the tasks of Subspace Farmers and Executors by running an instance of Farmer and Full Node within the same terminal instance."))}p.isMDXComponent=!0}}]);