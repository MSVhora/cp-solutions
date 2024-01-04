"use strict";(self.webpackChunkcp_solutions=self.webpackChunkcp_solutions||[]).push([[9553],{3905:(r,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>y});var n=t(7294);function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function s(r,e){if(null==r)return{};var t,n,a=function(r,e){if(null==r)return{};var t,n,a={},o=Object.keys(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)t=o[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}var l=n.createContext({}),c=function(r){var e=n.useContext(l),t=e;return r&&(t="function"==typeof r?r(e):i(i({},e),r)),t},p=function(r){var e=c(r.components);return n.createElement(l.Provider,{value:e},r.children)},u="mdxType",d={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(r,e){var t=r.components,a=r.mdxType,o=r.originalType,l=r.parentName,p=s(r,["components","mdxType","originalType","parentName"]),u=c(t),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(y,i(i({ref:e},p),{},{components:t})):n.createElement(y,i({ref:e},p))}));function y(r,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=r,s[u]="string"==typeof r?r:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7528:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={id:"array",title:"Array",description:"",tags:["array"]},i=void 0,s={unversionedId:"data-structures/array",id:"data-structures/array",title:"Array",description:"",source:"@site/docs/data-structures/01-array.mdx",sourceDirName:"data-structures",slug:"/data-structures/array",permalink:"/cp-solutions/docs/data-structures/array",draft:!1,editUrl:"https://github.com/MSVhora/cp-solutions/blob/master/docs/data-structures/01-array.mdx",tags:[{label:"array",permalink:"/cp-solutions/docs/tags/array"}],version:"current",sidebarPosition:1,frontMatter:{id:"array",title:"Array",description:"",tags:["array"]},sidebar:"mainSidebar",previous:{title:"Data Structures",permalink:"/cp-solutions/docs/category/data-structures"},next:{title:"String",permalink:"/cp-solutions/docs/data-structures/string"}},l={},c=[{value:"What is an Array?",id:"what-is-an-array",level:2},{value:"Declare &amp; Initialize an array",id:"declare--initialize-an-array",level:2},{value:"Some common methods of String",id:"some-common-methods-of-string",level:2}],p=r=>function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},u=p("Tabs"),d=p("TabItem"),m=p("SolutionAuthor"),y={toc:c},f="wrapper";function b(r){let{components:e,...t}=r;return(0,a.kt)(f,(0,n.Z)({},y,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-is-an-array"},"What is an Array?"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"array")," is a collection of items of the same variable type that are stored at contiguous memory locations. It\u2019s one of the most popular and simple data structures and is often used to implement other data structures. Each item in an array is indexed starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,a.kt)("h2",{id:"declare--initialize-an-array"},"Declare & Initialize an array"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(d,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(m,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"// Empty Array of specific Type\nvar arr = emptyArray<Int>() // emptyArray<[DataType]>()\n\n// Int Array\nvar arr = intArrayOf()\n\n// Long Array\nvar arr = longArrayOf()\n\n// Float Array\nvar arr = floatArrayOf()\n\n// Double Array\nvar arr = doubleArrayOf()\n\n// Array with specific size & default value\nvar arr = Array<Int>(10) { 0 } //Array<[DataType]>([size]) { [defaultValue] }\nvar arr = IntArray(10) { 0 }\n\n")))),(0,a.kt)("h2",{id:"some-common-methods-of-string"},"Some common methods of String"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(d,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(m,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kt"},"// Size of array\narr.size\n\n// Get lastIndex\narr.lastIndex\n\n// Binary Search\narr.binarySearch(\n    element = 10,\n    comparator = { a,b ->\n        a - b // Return Int -1, 0, 1\n    },\n    fromIndex = 0,\n    toIndex = arr.size\n)\n\n// Find element in arr\narr.contains(10) // Returns boolean\n\n// Distinct\nval list: List<Int> = arr.distinct() // distinctBy for selector\n\n// drop - Returns list containing all elements except first 2 elements\narr.drop(2)\n\n// dropLast - Returns list containing all elements except last 2 elements\narr.dropLast(2)\n\n// dropWhile - Drops first n elements based on predicate condition\narr.dropWhile { it == 1 }\n\n// Filter - Filter array based on predicate condition\narr.filter {\n    it % 2 == 0\n}\n\n// Convert array to string\narr.joinToString()\n\n// Sort array inplace\narr.sort()\n\n// Return sorted array \narr.sorted()\n\n")))))}b.isMDXComponent=!0}}]);