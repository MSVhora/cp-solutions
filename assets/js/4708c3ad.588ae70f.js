"use strict";(self.webpackChunkcp_solutions=self.webpackChunkcp_solutions||[]).push([[7538],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),c=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(i.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||p;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,o=new Array(p);o[0]=u;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[m]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5166:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>N,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const p={id:"pattern-20",title:"Pattern 20",description:"Print given * pattern.",tags:["patterns","loops"]},o=void 0,l={unversionedId:"patterns/pattern-20",id:"patterns/pattern-20",title:"Pattern 20",description:"Print given * pattern.",source:"@site/docs/patterns/20-pattern.mdx",sourceDirName:"patterns",slug:"/patterns/pattern-20",permalink:"/cp-solutions/docs/patterns/pattern-20",draft:!1,editUrl:"https://github.com/MSVhora/cp-solutions/blob/master/docs/patterns/20-pattern.mdx",tags:[{label:"patterns",permalink:"/cp-solutions/docs/tags/patterns"},{label:"loops",permalink:"/cp-solutions/docs/tags/loops"}],version:"current",sidebarPosition:20,frontMatter:{id:"pattern-20",title:"Pattern 20",description:"Print given * pattern.",tags:["patterns","loops"]},sidebar:"mainSidebar",previous:{title:"Pattern 19",permalink:"/cp-solutions/docs/patterns/pattern-19"},next:{title:"Pattern 21",permalink:"/cp-solutions/docs/patterns/pattern-21"}},i={},c=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach",id:"approach",level:2},{value:"Output",id:"output",level:2}],s=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},m=s("TableWrapper"),d=s("Tabs"),u=s("TabItem"),k=s("SolutionAuthor"),g={toc:c},b="wrapper";function N(t){let{components:e,...n}=t;return(0,a.kt)(b,(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"problem-link"},"Problem Link"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kunal-kushwaha/DSA-Bootcamp-Java/blob/main/assignments/09-patterns.md"},"Visit the problem")),(0,a.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Print the given pattern."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\n****\n*  *\n*  *\n*  *\n****\n\n")),(0,a.kt)("h2",{id:"approach"},"Approach"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the given pattern, we can see there are ",(0,a.kt)("strong",{parentName:"li"},"n")," rows and ",(0,a.kt)("strong",{parentName:"li"},"n - 1")," columns."),(0,a.kt)("li",{parentName:"ul"},"For rowIndex == 1 or rowIndex == n, print ",(0,a.kt)("strong",{parentName:"li"},"*")," in every column."),(0,a.kt)("li",{parentName:"ul"},"For every other row print ",(0,a.kt)("strong",{parentName:"li"},"*"),", ",(0,a.kt)("strong",{parentName:"li"},"n - 3")," number of spaces, and ",(0,a.kt)("strong",{parentName:"li"},"*"))),(0,a.kt)(m,{rows:"5",cols:"4",mdxType:"TableWrapper"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"}),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"2"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"),(0,a.kt)("td",{parentName:"tr",align:"center"},"*"))))),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(k,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},'fun pattern20(n: Int) {\n    for(rowIndex in 1..n) {\n        val noOfSpaces = n - 3\n        print("*")\n        print((if(rowIndex == 1 || rowIndex == n) "*" else " ").repeat(noOfSpaces))\n        print("*")\n        println()\n    }\n}\n\nfun main() {    \n    pattern20(5)\n}\n\n')))),(0,a.kt)("h2",{id:"output"},"Output"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"\n****\n*  *\n*  *\n*  *\n****\n\n")))}N.isMDXComponent=!0}}]);