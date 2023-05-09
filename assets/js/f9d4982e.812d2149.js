"use strict";(self.webpackChunkcp_solutions=self.webpackChunkcp_solutions||[]).push([[8739],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=c(n),u=a,k=s["".concat(i,".").concat(u)]||s[u]||d[u]||p;return n?r.createElement(k,l(l({ref:e},m),{},{components:n})):r.createElement(k,l({ref:e},m))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,l=new Array(p);l[0]=u;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[s]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6819:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={id:"pattern-3",title:"Pattern 3",description:"Print given * pattern.",tags:["patterns","loops"]},l="Pattern 3",o={unversionedId:"patterns/pattern-3",id:"patterns/pattern-3",title:"Pattern 3",description:"Print given * pattern.",source:"@site/docs/patterns/03-pattern.mdx",sourceDirName:"patterns",slug:"/patterns/pattern-3",permalink:"/cp-solutions/docs/patterns/pattern-3",draft:!1,editUrl:"https://github.com/MSVhora/cp-solutions/docs/patterns/03-pattern.mdx",tags:[{label:"patterns",permalink:"/cp-solutions/docs/tags/patterns"},{label:"loops",permalink:"/cp-solutions/docs/tags/loops"}],version:"current",sidebarPosition:3,frontMatter:{id:"pattern-3",title:"Pattern 3",description:"Print given * pattern.",tags:["patterns","loops"]},sidebar:"patternsSidebar",previous:{title:"Pattern 2",permalink:"/cp-solutions/docs/patterns/pattern-2"},next:{title:"Pattern 4",permalink:"/cp-solutions/docs/patterns/pattern-4"}},i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach",id:"approach",level:2},{value:"Output",id:"output",level:2}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},s=m("TableWrapper"),d=m("Tabs"),u=m("TabItem"),k=m("SolutionAuthor"),g={toc:c},b="wrapper";function h(t){let{components:e,...n}=t;return(0,a.kt)(b,(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pattern-3"},"Pattern 3"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md"},"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Print the given pattern."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\n*****\n****\n***\n**\n*\n\n")),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find how many rows are there and how they are printed, that will define the outer loop"),(0,a.kt)("li",{parentName:"ul"},"Find how many columns are there, and how they are printed."),(0,a.kt)("li",{parentName:"ul"},"In the given pattern, we can see, each row prints ",(0,a.kt)("strong",{parentName:"li"},"n - rowIndex + 1")," number of columns.")),(0,a.kt)(s,{rows:"5",cols:"5",mdxType:"TableWrapper"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check for spaces, print them if needed"),(0,a.kt)("li",{parentName:"ul"},"Print the given character")),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(k,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},'fun pattern3(n: Int) {\n    for(rowIndex in 1..n) {\n        val noOfCols = n - rowIndex + 1\n        print("*".repeat(noOfCols))\n        println()\n    }\n}\n\nfun main() {    \n    pattern3(5)\n}\n')))),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"\n*****\n****\n***\n**\n*\n\n")))}h.isMDXComponent=!0}}]);