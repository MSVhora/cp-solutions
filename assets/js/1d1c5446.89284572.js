"use strict";(self.webpackChunkcp_solutions=self.webpackChunkcp_solutions||[]).push([[7780],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,g=s["".concat(o,".").concat(k)]||s[k]||d[k]||p;return n?r.createElement(g,l(l({ref:e},m),{},{components:n})):r.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,l=new Array(p);l[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2753:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={id:"pattern-25",title:"Pattern 25",description:"Print given * pattern.",tags:["patterns","loops"]},l="Pattern 25",i={unversionedId:"patterns/pattern-25",id:"patterns/pattern-25",title:"Pattern 25",description:"Print given * pattern.",source:"@site/docs/patterns/25-pattern.mdx",sourceDirName:"patterns",slug:"/patterns/pattern-25",permalink:"/cp-solutions/docs/patterns/pattern-25",draft:!1,editUrl:"https://github.com/MSVhora/cp-solutions/docs/patterns/25-pattern.mdx",tags:[{label:"patterns",permalink:"/cp-solutions/docs/tags/patterns"},{label:"loops",permalink:"/cp-solutions/docs/tags/loops"}],version:"current",sidebarPosition:25,frontMatter:{id:"pattern-25",title:"Pattern 25",description:"Print given * pattern.",tags:["patterns","loops"]},sidebar:"patternsSidebar",previous:{title:"Pattern 24",permalink:"/cp-solutions/docs/patterns/pattern-24"},next:{title:"Pattern 26",permalink:"/cp-solutions/docs/patterns/pattern-26"}},o={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach",id:"approach",level:2},{value:"Output",id:"output",level:2}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},s=m("TableWrapper"),d=m("Tabs"),k=m("TabItem"),g=m("SolutionAuthor"),u={toc:c},N="wrapper";function b(t){let{components:e,...n}=t;return(0,a.kt)(N,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pattern-25"},"Pattern 25"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md"},"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Print the given pattern."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\n    *****\n   *   *\n  *   *\n *   *\n*****\n\n")),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the given pattern, we can see there are ",(0,a.kt)("strong",{parentName:"li"},"n")," rows and ",(0,a.kt)("strong",{parentName:"li"},"2n - 1")," columns."),(0,a.kt)("li",{parentName:"ul"},"We have to print some spaces before printing the ",(0,a.kt)("strong",{parentName:"li"},"*")," characters."),(0,a.kt)("li",{parentName:"ul"},"For starting spaces, we need to print n - rowIndex number of spaces;"),(0,a.kt)("li",{parentName:"ul"},"For rowIndex == 1 or rowIndex == n, print ",(0,a.kt)("strong",{parentName:"li"},"*")," in every column."),(0,a.kt)("li",{parentName:"ul"},"For every other row print ",(0,a.kt)("strong",{parentName:"li"},"*"),", ",(0,a.kt)("strong",{parentName:"li"},"n - 2")," number of spaces, and ",(0,a.kt)("strong",{parentName:"li"},"*"))),(0,a.kt)(s,{rows:"5",cols:"2n - 1 = 9",mdxType:"TableWrapper"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"8"),(0,a.kt)("th",{parentName:"tr",align:"center"},"9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}))))),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(k,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(g,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},'fun pattern25(n: Int) {\n    for(rowIndex in 1..n) {\n        // Starting spaces\n        print(" ".repeat(n - rowIndex))\n        \n        val noOfSpaces = n - 2\n        print("*")\n        print((if(rowIndex == 1 || rowIndex == n) "*" else " ").repeat(noOfSpaces))\n        print("*")\n        println()\n    }\n}\n\n\nfun main() {    \n    pattern25(5)\n}\n')))),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"\n    *****\n   *   *\n  *   *\n *   *\n*****\n\n")))}b.isMDXComponent=!0}}]);