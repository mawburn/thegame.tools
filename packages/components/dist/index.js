"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("next/image"),a=require("nanoid"),l=require("nanoid-dictionary");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t),i={imgBucket:"https://storage.googleapis.com/thegametools",twitter:"@_mawburn",instagram:"@_mawburn",homepage:"https://mawburn.com",coreSite:"https://thegame.tools"},s=function(e,t){var a=Math.ceil(e),l=Math.floor(t);return Math.floor(Math.random()*(l-a+1)+a)},c={display:"flex",backgroundColor:"#3e1856",height:"50px",minHeight:"50px",padding:"0 0.25rem",marginBottom:"1rem"},u={display:"flex"},m={display:"flex",justifyContent:"space-between",alignItems:"center",height:"100%",width:"100%"},f={color:"#ffffff",fontSize:"10px",marginRight:"2rem"},d={fontFamily:"Coolvetica, sans-serif",letterSpacing:"2px",color:"#f5b829",fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700",margin:"auto 0.5rem"},h={fontFamily:"Coolvetica, sans-serif",letterSpacing:"2px",color:"#f5b829",fontSize:"12px",lineHeight:"14px",fontWeight:"400"},p=function(t){var r=e.useMemo((function(){if(t)return a.customAlphabet(l.alphanumeric,10)()}),[t]);return e.useCallback((function(e){return"".concat(r).concat(e)}),[r])},g=function(e){var t=e.classes,a=e.children;return t?n.default.createElement("section",{className:t},a):n.default.createElement(n.default.Fragment,null,a)};exports.Footer=function(e){var t=e.children,a=void 0===t?null:t,l=e.footerClasses,r=void 0===l?"":l,s=e.sectionClasses,c=void 0===s?"":s;return n.default.createElement("footer",{className:"text-sm max-w-2xl my-4 mx-auto ".concat(r)},a,n.default.createElement("section",{className:"flex justify-center items-center mt-3 ".concat(c)},"© 2021"," ",n.default.createElement("a",{href:"https://thegame.tools",className:"ml-2 font-semibold"},"TheGame.tools"),n.default.createElement("span",{className:"mx-2"},"|"),n.default.createElement("a",{href:"https://mawburn.com",rel:"noopener me",className:"flex justify-center items-center"},n.default.createElement("div",{className:"mr-2 pt-1"},n.default.createElement(o.default,{src:"".concat(i.imgBucket,"/builtby.svg"),width:20,height:20,alt:"Built by mawburn",loading:"lazy"})),n.default.createElement("div",null,"by mawburn.com"))))},exports.Github=function(){return n.default.createElement("a",{href:"https://github.com/mawburn/thegame.tools",className:"github-corner",rel:"noopener","aria-label":"View source on GitHub"},n.default.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",className:"fill-[#151513] text-white absolute top-0 right-0 border-0","aria-hidden":"true"},n.default.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),n.default.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),n.default.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))},exports.SponsoredBy=function(e){var t=e.classes;return n.default.createElement("div",{style:c,className:t},n.default.createElement("a",{style:m,href:"https://tabletop.land",target:"_new"},n.default.createElement("div",{style:u},n.default.createElement("span",{style:f},"Built & Sponsored By"),n.default.createElement("img",{src:"https://storage.googleapis.com/tabletopland/tabletopland.png",width:"109",height:"42",alt:"tabletop.land"}),n.default.createElement("h2",{style:d},"Tabletop.Land")),n.default.createElement("h3",{style:h},"Buy & Sell tabletop terrain, miniatures, or accessories!"),n.default.createElement("div",null),n.default.createElement("div",null),n.default.createElement("div",null)))},exports.TableGenerator=function(t){var a=t.list,l=void 0===a?[]:a,r=t.sectionClasses,o=p(l),i=r&&Array.isArray(r)?r.join(" "):r;return l.length>0?n.default.createElement(g,{classes:i},l.map((function(t,a){return n.default.createElement(e.Fragment,{key:o(a)},t)}))):null},exports.baseConfig=i,exports.randomInt=s,exports.rollOnTable=function(e){return e[s(0,e.length-1)]},exports.useKey=p;
//# sourceMappingURL=index.js.map