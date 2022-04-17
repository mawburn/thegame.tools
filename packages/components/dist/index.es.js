import e,{useMemo as t,useCallback as a,Fragment as r}from"react";import{customAlphabet as n}from"nanoid";import{alphanumeric as l}from"nanoid-dictionary";import m from"clsx";import c from"next/link";var o={imgBucket:"https://storage.googleapis.com/thegametools",twitter:"@_mawburn",instagram:"@_mawburn",homepage:"https://mawburn.com",coreSite:"https://thegame.tools"},s=function(t){var a=t.children,r=void 0===a?null:a,n=t.footerClasses,l=void 0===n?"":n,m=t.sectionClasses,c=void 0===m?"":m;return e.createElement("footer",{className:"text-sm max-w-2xl my-4 mx-auto ".concat(l)},r,e.createElement("section",{className:"flex justify-center items-center mt-3 ".concat(c)},"© 2021"," ",e.createElement("a",{href:"https://thegame.tools",className:"ml-2 font-semibold"},"TheGame.tools"),e.createElement("span",{className:"mx-2"},"|"),e.createElement("a",{href:"https://mawburn.com",rel:"noopener me",className:"flex justify-center items-center"},e.createElement("div",{className:"mr-2 pt-1"},e.createElement("img",{src:"".concat(o.imgBucket,"/builtby.svg"),width:20,height:20,alt:"Built by mawburn",loading:"lazy"})),e.createElement("div",null,"by mawburn.com"))))},i="styles-module_githubCorner__oeCq7",u="styles-module_octoArm__C6ZBg",f=function(){return e.createElement("a",{href:"https://github.com/mawburn/thegame.tools",className:i,rel:"noopener","aria-label":"View source on GitHub"},e.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",className:"fill-[#151513] text-white absolute top-0 right-0 border-0 ","aria-hidden":"true"},e.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),e.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:u}),e.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"})))},h=function(e,t){var a=Math.ceil(e),r=Math.floor(t);return Math.floor(Math.random()*(r-a+1)+a)},d=function(e){return e[h(0,e.length-1)]},p=function(t){var a=t.className,r=void 0===a?"":a;return e.createElement("div",{className:"flex bg-ttl h-12 py-1 mb-4 md:not-sr-only sr-only ".concat(r)},e.createElement("a",{className:"flex justify-between items-center h-full w-full no-underline",href:"https://tabletop.land",target:"_new"},e.createElement("div",{className:"flex"},e.createElement("span",{className:"text-white text-xs mr-8"},"Built & Sponsored By"),e.createElement("img",{src:"".concat(o.imgBucket,"/tabletopland.png"),width:109,height:42,alt:"tabletop.land",loading:"eager"}),e.createElement("h2",{className:"font-ttl tracking-wider text-ttlFont font-bold my-2 font-normal"},"Tabletop.Land")),e.createElement("h3",{className:"font-ttl tracking-wider text-ttlFont text-sm font-normal"},"Buy & Sell tabletop terrain, miniatures, or accessories!"),e.createElement("div",null),e.createElement("div",null),e.createElement("div",null)))},g=function(e){var r=t((function(){if(e)return n(l,10)()}),[e]);return a((function(e){return"".concat(r).concat(e)}),[r])},x=function(t){var a=t.classes,r=t.children;return a?e.createElement("section",{className:a},r):e.createElement(e.Fragment,null,r)},E=function(t){var a=t.list,n=void 0===a?[]:a,l=t.sectionClasses,m=g(n),c=l&&Array.isArray(l)?l.join(" "):l;return n.length>0?e.createElement(x,{classes:c},n.map((function(t,a){return e.createElement(r,{key:m(a)},t)}))):null},b=new RegExp(/[=|+|\\/]/g),v=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var a=function(e){return btoa?btoa(e).replace(b,""):Buffer.from(e).toString("base64").replace(b,"")};return a(e.join(""))},y=function(t){var a=t.links,r=t.subText;return e.createElement("div",{className:"h-20 flex justify-start py-1 px-4 bg-white items-center mb-8 md:mb-0"},e.createElement(c,{href:"/"},e.createElement("a",{className:"flex"},e.createElement("img",{src:"".concat(o.imgBucket,"/logoIcon.svg"),height:50,width:35.5,alt:"TheGame.tools"}),e.createElement("div",{className:"flex flex-col\ttext-primary md:ml-2 uppercase px-3 justify-center items-center md:not-sr-only sr-only"},e.createElement("div",{className:"font- text-center text-sm"},"TheGame.tools"),r&&e.createElement("div",{className:"text-xs "},r)))),e.createElement("nav",{className:"flex justify-center items-center pl-4 h-full"},e.createElement("ul",{className:"md:flex md:h-full list-none md:p-0 md:m-0"},a.map((function(t,a){return e.createElement("li",{key:v(t.url,"string"==typeof t.render?t.render:a),className:"h-full md:block ".concat(m(t.className))},e.createElement(c,{href:t.url},e.createElement("a",{className:"flex justify-center items-center h-full px-3 mx-1 hover:underline whitespace-nowrap"},t.render)))})))))};export{s as Footer,f as Github,y as NavBar,p as SponsoredBy,E as TableGenerator,o as baseConfig,h as randomInt,d as rollOnTable,g as useKey};
//# sourceMappingURL=index.es.js.map
