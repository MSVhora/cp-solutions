"use strict";(self.webpackChunkcp_solutions=self.webpackChunkcp_solutions||[]).push([[6650],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=c(n),k=a,g=s["".concat(i,".").concat(k)]||s[k]||d[k]||p;return n?r.createElement(g,l(l({ref:e},m),{},{components:n})):r.createElement(g,l({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,l=new Array(p);l[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[s]="string"==typeof t?t:a,l[1]=o;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},799:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={id:"pattern-14",title:"Pattern 14",description:"Print given * pattern.",tags:["patterns","loops"]},l="Pattern 14",o={unversionedId:"patterns/pattern-14",id:"patterns/pattern-14",title:"Pattern 14",description:"Print given * pattern.",source:"@site/docs/patterns/14-pattern.mdx",sourceDirName:"patterns",slug:"/patterns/pattern-14",permalink:"/cp-solutions/docs/patterns/pattern-14",draft:!1,editUrl:"https://github.com/MSVhora/cp-solutions/docs/patterns/14-pattern.mdx",tags:[{label:"patterns",permalink:"/cp-solutions/docs/tags/patterns"},{label:"loops",permalink:"/cp-solutions/docs/tags/loops"}],version:"current",sidebarPosition:14,frontMatter:{id:"pattern-14",title:"Pattern 14",description:"Print given * pattern.",tags:["patterns","loops"]},sidebar:"patternsSidebar",previous:{title:"Pattern 13",permalink:"/cp-solutions/docs/patterns/pattern-13"},next:{title:"Pattern 15",permalink:"/cp-solutions/docs/patterns/pattern-15"}},i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach",id:"approach",level:2},{value:"Output",id:"output",level:2}],m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},s=m("TableWrapper"),d=m("Tabs"),k=m("TabItem"),g=m("SolutionAuthor"),u={toc:c},N="wrapper";function b(t){let{components:e,...n}=t;return(0,a.kt)(N,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pattern-14"},"Pattern 14"),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md"},"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Print the given pattern."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\n********* \n *     * \n  *   * \n   * * \n    * \n\n")),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the given pattern, we can see there are ",(0,a.kt)("strong",{parentName:"li"},"n")," rows and ",(0,a.kt)("strong",{parentName:"li"},"2n - 1")," columns."),(0,a.kt)("li",{parentName:"ul"},"We have to print some spaces before printing the ",(0,a.kt)("strong",{parentName:"li"},"*")," characters."),(0,a.kt)("li",{parentName:"ul"},"As we can see we have to print ",(0,a.kt)("strong",{parentName:"li"},"rowIndex - 1")," number of spaces."),(0,a.kt)("li",{parentName:"ul"},"For columns we have to loop from ",(0,a.kt)("strong",{parentName:"li"},"1")," to ",(0,a.kt)("strong",{parentName:"li"},"2 * (n - rowIndex + 1) - 1"),", and print ",(0,a.kt)("strong",{parentName:"li"},"*")," for edge index else print space."),(0,a.kt)("li",{parentName:"ul"},"Lastly for first row, we have to print all ",(0,a.kt)("strong",{parentName:"li"},"*")," character for every column")),(0,a.kt)(s,{rows:"5",cols:"2n - 1 = 9",mdxType:"TableWrapper"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"8"),(0,a.kt)("th",{parentName:"tr",align:"center"},"9"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}))))),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(k,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(g,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},'fun pattern14(n: Int) {\n    for(rowIndex in 1..n) {\n        val noOfCols = 2 * (n - rowIndex + 1) -1\n        val noOfSpaces = rowIndex - 1\n        print(" ".repeat(noOfSpaces))\n        \n        for(colIndex in 1..noOfCols) {\n            if(rowIndex == 1 || colIndex == 1 || colIndex == noOfCols)\n                print("*")\n            else\n                print(" ")\n        }\n        println()\n    }\n}\n\nfun main() {    \n    pattern14(5)\n}\n')))),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"\n********* \n *     * \n  *   * \n   * * \n    * \n\n")))}b.isMDXComponent=!0}}]);