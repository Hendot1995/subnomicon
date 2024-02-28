"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[412],{5216:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=i(7624),s=i(2172);const o={title:"Terminology",sidebar_position:4,description:"Definitions for all things Subspace",keywords:["Terminology","Definitions","Glossary"],last_update:{date:"01/29/2024",author:"Dariia Porechna"}},a=void 0,r={id:"terminology",title:"Terminology",description:"Definitions for all things Subspace",source:"@site/docs/terminology.md",sourceDirName:".",slug:"/terminology",permalink:"/docs/terminology",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Dariia Porechna",lastUpdatedAt:1706482800,formattedLastUpdatedAt:"Jan 28, 2024",sidebarPosition:4,frontMatter:{title:"Terminology",sidebar_position:4,description:"Definitions for all things Subspace",keywords:["Terminology","Definitions","Glossary"],last_update:{date:"01/29/2024",author:"Dariia Porechna"}},sidebar:"tutorialSidebar",previous:{title:"Advancing Blockchain",permalink:"/docs/advancements"},next:{title:"Consensus",permalink:"/docs/category/consensus"}},c={},l=[{value:"Subspace",id:"subspace",level:2},{value:"Subspace Network",id:"subspace-network",level:2},{value:"Blockchain History",id:"blockchain-history",level:2},{value:"Blockchain State",id:"blockchain-state",level:2},{value:"Dilithium",id:"dilithium",level:2},{value:"Consensus Chain",id:"consensus-chain",level:2},{value:"DSN",id:"dsn",level:2},{value:"Domain",id:"domain",level:2},{value:"Domain Chain",id:"domain-chain",level:2},{value:"Domain Epoch",id:"domain-epoch",level:2},{value:"Node",id:"node",level:2},{value:"Farmer",id:"farmer",level:2},{value:"Domain Operator",id:"domain-operator",level:2},{value:"Timekeeper",id:"timekeeper",level:2},{value:"Client",id:"client",level:2},{value:"Archiving",id:"archiving",level:2},{value:"Archived History",id:"archived-history",level:2},{value:"Plotting",id:"plotting",level:2},{value:"Farming",id:"farming",level:2},{value:"Segment",id:"segment",level:2},{value:"Segment Header",id:"segment-header",level:2},{value:"Raw Record",id:"raw-record",level:2},{value:"Record",id:"record",level:2},{value:"Piece",id:"piece",level:2},{value:"Sector",id:"sector",level:2},{value:"Plot",id:"plot",level:2},{value:"Commitment",id:"commitment",level:2},{value:"Reconstruction",id:"reconstruction",level:2},{value:"SSC",id:"ssc",level:2},{value:"Shannon",id:"shannon",level:2},{value:"Subspace CLI",id:"subspace-cli",level:2}];function d(e){const n={annotation:"annotation",h2:"h2",li:"li",math:"math",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"subspace",children:"Subspace"}),"\n",(0,t.jsx)(n.p,{children:"Typically encapsulates everything about the project and is not limited in scope just to the blockchain or any other component specifically. Often, it can be clarified to something more specific but is used interchangeably for simplicity."}),"\n",(0,t.jsx)(n.h2,{id:"subspace-network",children:"Subspace Network"}),"\n",(0,t.jsx)(n.p,{children:"Typically means a combination of Subspace consensus chain, domain chains and Distributed Storage Network as a whole system."}),"\n",(0,t.jsx)(n.h2,{id:"blockchain-history",children:"Blockchain History"}),"\n",(0,t.jsx)(n.p,{children:"An ordered collection of blocks of the blockchain, specifically in Subspace, means SCALE-encoded blocks of the blockchain."}),"\n",(0,t.jsx)(n.h2,{id:"blockchain-state",children:"Blockchain State"}),"\n",(0,t.jsx)(n.p,{children:"The result of executing transactions on a blockchain (like state of account balances, smart contracts, etc.)"}),"\n",(0,t.jsx)(n.h2,{id:"dilithium",children:"Dilithium"}),"\n",(0,t.jsx)(n.p,{children:"The Subspace Network Proof-of-Archival-Storage consensus mechanism which defines Archiving, Plotting, Farming, Proving and Verification."}),"\n",(0,t.jsx)(n.h2,{id:"consensus-chain",children:"Consensus Chain"}),"\n",(0,t.jsx)(n.p,{children:"A blockchain over which farmers achieve consensus. A lightweight, quick to sync chain, free from most of the computation to reduce the storage and computation overhead for Farmers."}),"\n",(0,t.jsx)(n.h2,{id:"dsn",children:"DSN"}),"\n",(0,t.jsx)(n.p,{children:"Short for Distributed Storage Network, a network of Farmers that have plotted pieces of Archival History and serve them to Clients. The DSN handles data storage, retrieval and replication across the network."}),"\n",(0,t.jsx)(n.h2,{id:"domain",children:"Domain"}),"\n",(0,t.jsx)(n.p,{children:"An application-specific blockchain anchored and validated by the Subspace Network. Domains allow arbitrary computation and state transitions tailored to the needs of a specific application or use case. Each domain has its gossip network (domain subnet) and a configurable runtime. Staked executors can opt-in to operate a domain as Domain Operators, collect compute fees from domain users, and challenge invalid state commitments."}),"\n",(0,t.jsx)(n.h2,{id:"domain-chain",children:"Domain Chain"}),"\n",(0,t.jsx)(n.p,{children:"An application-specific blockchain that operators use to run the state transitions over transaction bundles, which blindly follows the consensus of the Consensus Chain and deterministically executes transaction bundles in the order defined by the Consensus Chain."}),"\n",(0,t.jsx)(n.h2,{id:"domain-epoch",children:"Domain Epoch"}),"\n",(0,t.jsx)(n.p,{children:"An interval, in domain chain blocks, between each stake allocation re-adjustment. Operator stakes are fixed at the start of the epoch for its duration. At the end of each epoch, the stake distribution is adjusted based on new stake deposits, withdrawal requests and slashing events."}),"\n",(0,t.jsx)(n.h2,{id:"node",children:"Node"}),"\n",(0,t.jsx)(n.p,{children:"A participant in the P2P network. A node connects to other nodes on the P2P network, maintains history and state, can do block production for consensus, all things around execution, serves as an endpoint for client or farmer, etc. A node encompasses various roles like Farmer, Domain Operator, and Timekeeper."}),"\n",(0,t.jsx)(n.h2,{id:"farmer",children:"Farmer"}),"\n",(0,t.jsx)(n.p,{children:"A role on the Subspace Network responsible for maintaining consensus (safety of the Consensus Chain). A Farmer plots pieces of Archival History to disk, farms the created plot for block and vote rewards, and joins the DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients)."}),"\n",(0,t.jsx)(n.h2,{id:"domain-operator",children:"Domain Operator"}),"\n",(0,t.jsx)(n.p,{children:"A role on the Subspace Network responsible for running arbitrary computation on Domains, state transitions, and maintaining state (liveness of the Execution Chain)."}),"\n",(0,t.jsx)(n.h2,{id:"timekeeper",children:"Timekeeper"}),"\n",(0,t.jsx)(n.p,{children:"A role on the Subspace Network responsible for running the Proof-of-Time chain and maintaining the randomness beacon for the Consensus Chain."}),"\n",(0,t.jsx)(n.h2,{id:"client",children:"Client"}),"\n",(0,t.jsx)(n.p,{children:"A user of the Subspace Network that interacts with it through a light client like Substrate Connect or other frontend applications. Clients can submit transactions, query the state but don't participate directly in consensus or run full nodes. They rely on nodes like farmers for data retrieval."}),"\n",(0,t.jsx)(n.h2,{id:"archiving",children:"Archiving"}),"\n",(0,t.jsx)(n.p,{children:"An integral part of Dilithium consensus, a process of transforming Blockchain History into Archived History."}),"\n",(0,t.jsx)(n.h2,{id:"archived-history",children:"Archived History"}),"\n",(0,t.jsx)(n.p,{children:"The immutable ordered collection of blocks that have been archived and permanently stored in a redundant, verifiable and retrievable way across the DSN. Archived History is the result of Archiving blocks at a particular depth from the tip of the chain."}),"\n",(0,t.jsx)(n.h2,{id:"plotting",children:"Plotting"}),"\n",(0,t.jsx)(n.p,{children:"An integral part of Dilithium consensus, Plotting is a process of creating and maintaining plots on disk by Farmers from Archived History. Plots allow efficient proofs of possession and retrievability of Archived History."}),"\n",(0,t.jsx)(n.h2,{id:"farming",children:"Farming"}),"\n",(0,t.jsx)(n.p,{children:"An integral part of Dilithium consensus, Farming is a process of participation in the consensus by solving a puzzle based on the previously created plot (during Plotting). Farmers compete to farm blocks and earn rewards by being the first to solve the puzzle and submit a valid proof."}),"\n",(0,t.jsx)(n.h2,{id:"segment",children:"Segment"}),"\n",(0,t.jsx)(n.p,{children:"A collection of (potentially partial) blocks of the blockchain history\nSpecifically, in Subspace means two things:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Recorded History Segment"}),": a fixed-size portion of the Blockchain History in a buffer before Archiving. A Recorded History Segment consists of Raw Records."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Archived History Segment"}),": a fixed-size portion of the Archived History. An Archived History Segment is a Recorded History Segment transformed by the Archiving process. An Archived History Segment consists of Pieces. An Archived History Segment can be later turned back into a Recorded History Segment History with Reconstructing process"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"segment-header",children:"Segment Header"}),"\n",(0,t.jsx)(n.p,{children:"A compact header in an Archived History Segment containing the segment index, segment commitment, a pointer to the previous segment header and information about the progress of block archiving."}),"\n",(0,t.jsx)(n.h2,{id:"raw-record",children:"Raw Record"}),"\n",(0,t.jsx)(n.p,{children:'A fragment of Blockchain History, the "useful data" for the PoAS consensus protocols before being archived.'}),"\n",(0,t.jsx)(n.h2,{id:"record",children:"Record"}),"\n",(0,t.jsx)(n.p,{children:"A Raw Record that was transformed and prepared for Archiving."}),"\n",(0,t.jsx)(n.h2,{id:"piece",children:"Piece"}),"\n",(0,t.jsx)(n.p,{children:"The unit of measurement of Archived History is conceptually a piece of Archived History from which Archived History Segments are composed. Each Piece is composed of Record + Commitment + Witness."}),"\n",(0,t.jsx)(n.h2,{id:"sector",children:"Sector"}),"\n",(0,t.jsx)(n.p,{children:"A collection of encoded Pieces written to disk during Plotting that can be used for Farming. A sector contains encoded record data from pieces, original piece commitments, witnesses, and other metadata about stored pieces. A collection of Sectors comprises a Plot."}),"\n",(0,t.jsx)(n.h2,{id:"plot",children:"Plot"}),"\n",(0,t.jsx)(n.p,{children:"A collection of Sectors written to disk that can be used for Farming"}),"\n",(0,t.jsx)(n.h2,{id:"commitment",children:"Commitment"}),"\n",(0,t.jsx)(n.p,{children:"Specifically, in Subspace in the context of Archiving implementation means two things:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Record Commitment:"})," a KZG commitment to blockchain data in a Raw Record"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Segment Commitment:"})," a KZG commitment to hashes of all Record Commitments in an Archived History Segment"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"reconstruction",children:"Reconstruction"}),"\n",(0,t.jsx)(n.p,{children:"A process of transforming Archived History back into Blockchain History. Specifically, it is transforming pieces of Archived History, one Archived History Segment at a time, back into blocks of the blockchain history that can be used for starting a new Full Node from Genesis."}),"\n",(0,t.jsx)(n.h2,{id:"ssc",children:"SSC"}),"\n",(0,t.jsx)(n.p,{children:"Short for Subspace Credit, the native token of Subspace Network. While SSC is integral to and necessary for the operation of the Subspace Network, it is intended as a utility currency to pay for the use of the Subspace (i.e., transaction fees, domain leader election)."}),"\n",(0,t.jsx)(n.h2,{id:"shannon",children:"Shannon"}),"\n",(0,t.jsxs)(n.p,{children:["A Shannon is the smallest unit of an SSC, equal to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mn,{children:"1"}),(0,t.jsxs)(n.msup,{children:[(0,t.jsx)(n.mn,{children:"0"}),(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mo,{children:"\u2212"}),(0,t.jsx)(n.mn,{children:"18"})]})]})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"10^{-18}"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.8141em"}}),(0,t.jsx)(n.span,{className:"mord",children:"1"}),(0,t.jsxs)(n.span,{className:"mord",children:[(0,t.jsx)(n.span,{className:"mord",children:"0"}),(0,t.jsx)(n.span,{className:"msupsub",children:(0,t.jsx)(n.span,{className:"vlist-t",children:(0,t.jsx)(n.span,{className:"vlist-r",children:(0,t.jsx)(n.span,{className:"vlist",style:{height:"0.8141em"},children:(0,t.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,t.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,t.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsxs)(n.span,{className:"mord mtight",children:[(0,t.jsx)(n.span,{className:"mord mtight",children:"\u2212"}),(0,t.jsx)(n.span,{className:"mord mtight",children:"18"})]})})]})})})})})]})]})})]})," SSC. SSCs are divisible up to 18 decimal places to allow for microtransactions."]}),"\n",(0,t.jsx)(n.p,{children:'Shannon is named after Claude Shannon, a mathematician, electrical engineer, and cryptographer known as "the father of information theory". His work was central to the rise of digital computing and laid the foundations for the information age.'}),"\n",(0,t.jsx)(n.h2,{id:"subspace-cli",children:"Subspace CLI"}),"\n",(0,t.jsx)(n.p,{children:"A Command Line Interface application automates the tasks of Subspace Farmers and Executors by running an instance of Farmer and Full Node within the same terminal instance."})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>r,M:()=>a});var t=i(1504);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);