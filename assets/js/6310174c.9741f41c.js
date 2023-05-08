"use strict";(self.webpackChunkcp_solutions=self.webpackChunkcp_solutions||[]).push([[6590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"pattern-22",title:"Pattern 22",description:"Print given * pattern.",tags:["patterns","loops"]},p="Pattern 3",l={unversionedId:"patterns/pattern-22",id:"patterns/pattern-22",title:"Pattern 22",description:"Print given * pattern.",source:"@site/docs/patterns/22-pattern.mdx",sourceDirName:"patterns",slug:"/patterns/pattern-22",permalink:"/cp-solutions/docs/patterns/pattern-22",draft:!1,editUrl:"https://github.com/MSVhora/cp-solutions/docs/patterns/22-pattern.mdx",tags:[{label:"patterns",permalink:"/cp-solutions/docs/tags/patterns"},{label:"loops",permalink:"/cp-solutions/docs/tags/loops"}],version:"current",sidebarPosition:22,frontMatter:{id:"pattern-22",title:"Pattern 22",description:"Print given * pattern.",tags:["patterns","loops"]},sidebar:"tutorialSidebar",previous:{title:"Pattern 2",permalink:"/cp-solutions/docs/patterns/pattern-21"},next:{title:"Pattern 23",permalink:"/cp-solutions/docs/patterns/pattern-23"}},i={},s=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach",id:"approach",level:2},{value:"Output",id:"output",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=c("Tabs"),m=c("TabItem"),d=c("SolutionAuthor"),f={toc:s},b="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pattern-3"},"Pattern 3"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md"},"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Print the given patterns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\n*****\n****\n***\n**\n*\n\n")),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find how many rows are there and how they are printed, that will define the outer loop"),(0,a.kt)("li",{parentName:"ul"},"Find how many columns are there, and how they are printed."),(0,a.kt)("li",{parentName:"ul"},"In the given pattern, we can see, each row prints ",(0,a.kt)("inlineCode",{parentName:"li"},"n - row + 1")," number of columns.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"     1   2   3   4   5\n1    *   *   *   *   *\n2    *   *   *   *\n3    *   *   *\n4    *   *\n5    *\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check for spaces, print them if needed"),(0,a.kt)("li",{parentName:"ul"},"Print the given character")),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(m,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(d,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},'fun pattern3(n: Int) {\n    for(row in 1..n) {\n        val noOfCols = n - row + 1\n        print("*".repeat(noOfCols))\n        println()\n    }\n}\n\nfun main() {    \n    pattern3(5)\n}\n')))),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"*****\n****\n***\n**\n*\n")))}h.isMDXComponent=!0}}]);