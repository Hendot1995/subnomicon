"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[324],{340:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=o(7624),i=o(2172);const a={title:"General Workflow",sidebar_position:1,description:"Domains Workflow",keywords:["DecEx","Domains","Staking"]},s=void 0,l={id:"decex/domains/workflow",title:"General Workflow",description:"Domains Workflow",source:"@site/docs/decex/domains/workflow.md",sourceDirName:"decex/domains",slug:"/decex/domains/workflow",permalink:"/docs/decex/domains/workflow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"General Workflow",sidebar_position:1,description:"Domains Workflow",keywords:["DecEx","Domains","Staking"]},sidebar:"tutorialSidebar",previous:{title:"Domains",permalink:"/docs/category/domains"},next:{title:"Nova EVM",permalink:"/docs/decex/domains/evm"}},r={},d=[{value:"Domain Creation",id:"domain-creation",level:2},{value:"Operator Staking",id:"operator-staking",level:2},{value:"Domain Transactions",id:"domain-transactions",level:2},{value:"Leader Election",id:"leader-election",level:2},{value:"Bundle Production",id:"bundle-production",level:2},{value:"Bundle Verification",id:"bundle-verification",level:2},{value:"Bundle Inclusion in the Consensus Block",id:"bundle-inclusion-in-the-consensus-block",level:2},{value:"Domain Block Execution",id:"domain-block-execution",level:2},{value:"Challenging Operators",id:"challenging-operators",level:2},{value:"Domain Block Fees",id:"domain-block-fees",level:2}];function c(e){const n={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The following is an overview of domain sub-protocols. The existence of domains assumes a live consensus chain with at least one farmer and block production. On its own, the consensus chain will only issue rewards to farmers and allow for balance transfers of SSC."}),"\n",(0,t.jsx)(n.h2,{id:"domain-creation",children:"Domain Creation"}),"\n",(0,t.jsx)(n.p,{children:"The sudo user registers the first domain runtime and uploads its WASM runtime directly into the chain state."}),"\n",(0,t.jsx)(n.p,{children:"The sudo user then instantiates the first domain on the previously registered domain runtime. Instantiation includes a genesis config, from which a chainspec and a genesis block for this domain are built. The domain genesis config includes domain name, runtime code and other specific configuration items, such as maximum block size and weight and number of bundles in each slot and block."}),"\n",(0,t.jsx)(n.h2,{id:"operator-staking",children:"Operator Staking"}),"\n",(0,t.jsx)(n.p,{children:"After a domain is instantiated, anyone may deposit SSC and stake as an operator of this domain, allowing them to participate in the leader election to produce bundles and execute domain blocks.\nThey do this by submitting a registration extrinsic with a staking deposit, targeting the first domain instance. They will be listed in the Operator Registry and eligible to participate in the leader election on the next stake epoch."}),"\n",(0,t.jsx)(n.h2,{id:"domain-transactions",children:"Domain Transactions"}),"\n",(0,t.jsx)(n.p,{children:"The users of the first domain may now produce extrinsics (transactions) and submit them to operators on the domain's subnet."}),"\n",(0,t.jsx)(n.p,{children:"When pre-validating extrinsics, operators only check to ensure the extrinsic is well-formed and that the user can afford the blockspace storage fee. They have yet to attempt to execute the transaction to determine if the execution weight fees can be paid."}),"\n",(0,t.jsx)(n.h2,{id:"leader-election",children:"Leader Election"}),"\n",(0,t.jsx)(n.p,{children:"For each time slot, all registered operators will attempt to solve a VRF puzzle with a success probability defined in the domain genesis config. To do so, they sign the slot challenge and check if the result is below the desired threshold. The operator will gather transactions from the pool and produce a new domain bundle if elected."}),"\n",(0,t.jsx)(n.h2,{id:"bundle-production",children:"Bundle Production"}),"\n",(0,t.jsx)(n.p,{children:"To produce a new bundle, the operator has to include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a proof of election showing that they are a leader for this time slot,"}),"\n",(0,t.jsx)(n.li,{children:"an Execution Receipt that either extends or confirms the previous domain block tracked on the consensus chain,"}),"\n",(0,t.jsx)(n.li,{children:"all bundle extrinsics that fall within the operator's portion of the extrinsic pool."}),"\n",(0,t.jsx)(n.li,{children:"storage fees for the bundle extrinsics."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The bundle is then broadcast on the consensus chain gossip network."}),"\n",(0,t.jsx)(n.h2,{id:"bundle-verification",children:"Bundle Verification"}),"\n",(0,t.jsx)(n.p,{children:"All consensus nodes receiving the bundle will verify that it is well-formed. The bundle header should include a valid proof of election based on the stake distribution for this epoch, and the Execution Receipt should build on the current execution chain block tree for this domain.\nConsensus nodes broadcast all valid bundles to their peers and place them within their local extrinsic pool."}),"\n",(0,t.jsx)(n.h2,{id:"bundle-inclusion-in-the-consensus-block",children:"Bundle Inclusion in the Consensus Block"}),"\n",(0,t.jsx)(n.p,{children:"When a consensus node is elected to produce a new consensus chain block, it will include as many valid domain bundles as will fit into the block and broadcast the block on the consensus network. Other nodes will only accept blocks that include valid bundles."}),"\n",(0,t.jsx)(n.h2,{id:"domain-block-execution",children:"Domain Block Execution"}),"\n",(0,t.jsx)(n.p,{children:"Given a valid consensus block with at least one domain bundle, the operator may build and execute the corresponding domain block.\nOn block execution, each bundle header will be applied to the consensus chain state, and each extrinsic will be added to the domain's execution inbox.\nExtrinsics will be deduplicated, grouped by the sender, and deterministically shuffled to mitigate the ability of operators to extract value from users by re-ordering or inserting extrinsics (MEV).\nThe domain block will then be carefully executed, one extrinsic at a time, allowing the operator to produce an Execution Receipt."}),"\n",(0,t.jsx)(n.h2,{id:"challenging-operators",children:"Challenging Operators"}),"\n",(0,t.jsx)(n.p,{children:"Any node who observes an Execution Receipt within any bundle for any consensus chain block that differs from what they produced locally has detected fraud. They will produce an extrinsic with a fraud proof to handle the fraud. If the fraud proof is valid, it will be included in the consensus chain, which will prune the Execution Receipt in question and all children from the block tree and slash all related operators. Currently, the challenge period is 14400 domain blocks (~1 day)."}),"\n",(0,t.jsx)(n.h2,{id:"domain-block-fees",children:"Domain Block Fees"}),"\n",(0,t.jsx)(n.p,{children:"When a domain block is out of the challenge period it is considered confirmed and can no longer be disputed. The total fees of the block include all execution and storage fees and tips of all of the transactions included in this block. After a domain block is confirmed, the total fees for this block are applied as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The total storage fees of the confirmed block are refunded to the operators who authored bundles in this block according to the respective storage sizes of their bundles."}),"\n",(0,t.jsxs)(n.li,{children:["The total execution fees of the confirmed block are added to the current epoch fees for this domain. The fees are split equally among the pools of operators who have previously submitted the Execution Receipt for this block. The current epoch fees are noted in the Operator Registry until the epoch transition and do not affect the stake distribution yet. All the fees will be auto-staked to the pools' stakes at the end of the current epoch. For more details on staking epochs, see the ",(0,t.jsx)(n.a,{href:"/docs/decex/staking#staking-epochs",children:"Staking"})," page."]}),"\n",(0,t.jsx)(n.li,{children:"Operator will get a cut of all fees earned by their pool as per nomination tax specified in operator\u2019s config at the next epoch transition."}),"\n",(0,t.jsxs)(n.li,{children:["Operator\u2019s cut will be automatically re-staked to the operator\u2019s stake at next epoch transition. Operator\u2019s shares, total pool shares and total stake will be updated with the corresponding deposit. For an exmaple on shares calculation, see the ",(0,t.jsx)(n.a,{href:"/docs/decex/staking#example",children:"Staking"})," page."]}),"\n",(0,t.jsx)(n.li,{children:"At the next epoch transition the domain applies all changes corresponding to fees, deposits and withdrawals to the total stakes of all registered operators. Note that this only changes the total pool balance, but does not affect shares for any individual nominators."}),"\n"]}),"\n",(0,t.jsxs)("div",{align:"center",children:[(0,t.jsx)("img",{src:"/img/Domain_Tx_To_Reward-light.svg#gh-light-mode-only",alt:"Domain_Tx_To_Reward"}),(0,t.jsx)("img",{src:"/img/Domain_Tx_To_Reward-dark.svg#gh-dark-mode-only",alt:"Domain_Tx_To_Reward"})]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,o)=>{o.d(n,{I:()=>l,M:()=>s});var t=o(1504);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);