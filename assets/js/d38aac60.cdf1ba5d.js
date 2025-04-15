"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[1371],{6357:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"tutorials/selenium-mcp","title":"Selenium Extension","description":"Add Selenium MCP Server as a Goose Extension","source":"@site/docs/tutorials/selenium-mcp.md","sourceDirName":"tutorials","slug":"/tutorials/selenium-mcp","permalink":"/goose/docs/tutorials/selenium-mcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Selenium Extension","description":"Add Selenium MCP Server as a Goose Extension"},"sidebar":"tutorialSidebar","previous":{"title":"Repomix Extension","permalink":"/goose/docs/tutorials/repomix-mcp"},"next":{"title":"Speech Extension","permalink":"/goose/docs/tutorials/speech-mcp"}}');var t=o(4848),s=o(8453),l=o(5537),r=o(9329);o(5887);const a={title:"Selenium Extension",description:"Add Selenium MCP Server as a Goose Extension"},d=void 0,c={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Goose Prompt",id:"goose-prompt",level:3},{value:"Goose Output",id:"goose-output",level:3}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This tutorial covers how to add the ",(0,t.jsx)(n.a,{href:"https://github.com/angiejones/mcp-selenium",children:"Selenium MCP Server"})," as a Goose extension to automate browser interactions such as navigating web pages and completing forms."]}),"\n",(0,t.jsxs)(n.admonition,{title:"TLDR",type:"tip",children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Command"})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"npx -y @angiejones/mcp-selenium\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Note that you'll need ",(0,t.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," installed on your system to run this command, as it uses ",(0,t.jsx)(n.code,{children:"npx"}),"."]})}),"\n",(0,t.jsxs)(l.A,{groupId:"interface",children:[(0,t.jsxs)(r.A,{value:"cli",label:"Goose CLI",default:!0,children:[(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Run the ",(0,t.jsx)(n.code,{children:"configure"})," command:"]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"goose configure\n"})}),(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Choose to add a ",(0,t.jsx)(n.code,{children:"Command-line Extension"})]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c6  What type of extension would you like to add?\n  \u2502  \u25cb Built-in Extension \n  // highlight-start    \n  \u2502  \u25cf Command-line Extension (Run a local command or script)\n  // highlight-end    \n  \u2502  \u25cb Remote Extension \n  \u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Give your extension a name"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  // highlight-start\n  \u25c6  What would you like to call this extension?\n  \u2502  Selenium\n  // highlight-end\n  \u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Enter the command"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"  \u250c   goose-configure \n  \u2502\n  \u25c7  What would you like to configure?\n  \u2502  Add Extension \n  \u2502\n  \u25c7  What type of extension would you like to add?\n  \u2502  Command-line Extension \n  \u2502\n  \u25c7  What would you like to call this extension?\n  \u2502  Selenium\n  \u2502\n  // highlight-start\n  \u25c6  What command should be run?\n  \u2502  npx -y @angiejones/mcp-selenium\n  // highlight-end\n  \u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Enter the number of seconds Goose should wait for actions to complete before timing out. Default is 300s"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"\u250c   goose-configure \n\u2502\n\u25c7  What would you like to configure?\n\u2502  Add Extension \n\u2502\n\u25c7  What type of extension would you like to add?\n\u2502  Command-line Extension \n\u2502\n\u25c7  What would you like to call this extension?\n\u2502  Selenium\n\u2502\n\u25c7  What command should be run?\n\u2502  npx -y @angiejones/mcp-selenium\n\u2502\n// highlight-start\n\u25c6  Please set the timeout for this tool (in secs):\n\u2502  300\n// highlight-end\n\u2502\n\u2514 \n"})}),(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Choose No when asked to add environment variables"}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:" \u250c   goose-configure \n \u2502\n \u25c7  What would you like to configure?\n \u2502  Add Extension \n \u2502\n \u25c7  What type of extension would you like to add?\n \u2502  Command-line Extension \n \u2502\n \u25c7  What would you like to call this extension?\n \u2502  Selenium\n \u2502\n \u25c7  What command should be run?\n \u2502  npx -y @angiejones/mcp-selenium\n \u2502     \n \u25c7  Please set the timeout for this tool (in secs):\n \u2502  300\n \u2502    \n // highlight-start\n \u25c6  Would you like to add environment variables?\n \u2502  No \n \u2502\n // highlight-end\n \u2514  Added Selenium extension\n"})})]}),(0,t.jsx)(r.A,{value:"ui",label:"Goose Desktop",children:(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"goose://extension?cmd=npx&arg=-y&arg=%40angiejones%2Fmcp-selenium&id=selenium-mcp&name=Selenium%20MCP&description=automates%20browser%20interactions",children:"Launch the installer"})}),"\n",(0,t.jsxs)(n.li,{children:["Press ",(0,t.jsx)(n.code,{children:"Yes"})," to confirm the installation"]}),"\n",(0,t.jsxs)(n.li,{children:["Click ",(0,t.jsx)(n.code,{children:"Save Configuration"})]}),"\n",(0,t.jsxs)(n.li,{children:["Scroll to the top and click ",(0,t.jsx)(n.code,{children:"Exit"})," from the upper left corner"]}),"\n"]})})]}),"\n",(0,t.jsx)(n.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,t.jsx)(n.p,{children:"Let's use Goose to build a test automation project from scratch! We'll use the Selenium MCP to automate filling out a web form, then have Goose generate a Selenium project with the code so that we can run these tests again when needed."}),"\n",(0,t.jsx)(n.h3,{id:"goose-prompt",children:"Goose Prompt"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Use selenium to go to the heroku formy site and fill out the form page with generic data. then can you turn what you've done into an automation script for me? I would like it in Java. Also use the Page Object Model pattern."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"goose-output",children:"Goose Output"}),"\n",(0,t.jsx)("iframe",{class:"aspect-ratio",src:"https://www.youtube.com/embed/mRV0N8hcgYA?start=28&end=152",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5887:(e,n,o)=>{o.d(n,{A:()=>s});o(6540);var i=o(2362),t=o(4848);const s=e=>{let{videoUrl:n}=e;return(0,t.jsxs)("div",{children:[(0,t.jsx)(i.A,{type:"info",icon:"\ud83c\udfa5",title:"Plug & Play",className:"alert--video",children:(0,t.jsxs)("details",{children:[(0,t.jsx)("summary",{children:"Watch the demo"}),(0,t.jsx)("div",{style:{textAlign:"center",margin:"20px 0"},children:(0,t.jsx)("iframe",{width:"100%",height:"540",src:n,title:"YouTube Short",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})}),(0,t.jsx)("hr",{})]})}}}]);