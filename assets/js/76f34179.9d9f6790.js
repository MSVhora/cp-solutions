"use strict";(self.webpackChunkcp_solutions=self.webpackChunkcp_solutions||[]).push([[3124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,c=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={id:"heap",title:"Heap",description:"",tags:["heap"]},o=void 0,p={unversionedId:"data-structures/heap",id:"data-structures/heap",title:"Heap",description:"",source:"@site/docs/data-structures/07-heap.mdx",sourceDirName:"data-structures",slug:"/data-structures/heap",permalink:"/cp-solutions/docs/data-structures/heap",draft:!1,editUrl:"https://github.com/MSVhora/cp-solutions/blob/master/docs/data-structures/07-heap.mdx",tags:[{label:"heap",permalink:"/cp-solutions/docs/tags/heap"}],version:"current",sidebarPosition:7,frontMatter:{id:"heap",title:"Heap",description:"",tags:["heap"]},sidebar:"mainSidebar",previous:{title:"Tree",permalink:"/cp-solutions/docs/data-structures/tree"},next:{title:"Patterns",permalink:"/cp-solutions/docs/category/patterns"}},l={},s=[{value:"What is a Heap?",id:"what-is-a-heap",level:2},{value:"What is a Complete Binary Tree?",id:"what-is-a-complete-binary-tree",level:3},{value:"Types of heaps",id:"types-of-heaps",level:2},{value:"Max-Heap",id:"max-heap",level:3},{value:"Min-Heap",id:"min-heap",level:3},{value:"Heap Operations",id:"heap-operations",level:2},{value:"Heapify",id:"heapify",level:3},{value:"Insertion",id:"insertion",level:3},{value:"Deletion",id:"deletion",level:3},{value:"Custom Implementation",id:"custom-implementation",level:2},{value:"Library Implementation and Common Methods",id:"library-implementation-and-common-methods",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=d("Tabs"),u=d("TabItem"),h=d("SolutionAuthor"),c={toc:s},f="wrapper";function v(e){let{components:t,...i}=e;return(0,r.kt)(f,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-a-heap"},"What is a Heap?"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Heap")," is a special Tree-based Data Structure in which the tree is a ",(0,r.kt)("strong",{parentName:"p"},"complete binary tree"),"."),(0,r.kt)("h3",{id:"what-is-a-complete-binary-tree"},"What is a Complete Binary Tree?"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"complete binary tree")," is a special type of binary tree where all the levels of the tree are filled completely except the lowest level nodes which are filled from as left as possible."),(0,r.kt)("h2",{id:"types-of-heaps"},"Types of heaps"),(0,r.kt)("h3",{id:"max-heap"},"Max-Heap"),(0,r.kt)("p",null,"In this heap, the value of the root node must be the greatest among all its child nodes and the same thing must be done for its left and right sub-tree also."),(0,r.kt)("h3",{id:"min-heap"},"Min-Heap"),(0,r.kt)("p",null,"In this heap, the value of the root node must be the smallest among all its child nodes and the same thing must be done for its left and right sub-tree also."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Heap",src:n(4964).Z,width:"1000",height:"599"})),(0,r.kt)("h2",{id:"heap-operations"},"Heap Operations"),(0,r.kt)("h3",{id:"heapify"},"Heapify"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is the process to rearrange the elements to maintain the property of heap data structure. It is done when a certain node creates an imbalance in the heap due to some operations on that node."),(0,r.kt)("li",{parentName:"ul"},"It takes ",(0,r.kt)("inlineCode",{parentName:"li"},"O(log N)")," to balance the tree.")),(0,r.kt)("h3",{id:"insertion"},"Insertion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we insert a new element into the heap since we are adding a new element into the heap so it will distort the properties of the heap so we need to perform the heapify operation so that it maintains the property of the heap."),(0,r.kt)("li",{parentName:"ul"},"This operation also takes ",(0,r.kt)("inlineCode",{parentName:"li"},"O(logN)")," time.")),(0,r.kt)("h3",{id:"deletion"},"Deletion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If we delete the element from the heap it always deletes the root element of the tree and replaces it with the last element of the tree."),(0,r.kt)("li",{parentName:"ul"},"Since we delete the root element from the heap it will distort the properties of the heap so we need to perform heapify operations so that it maintains the property of the heap."),(0,r.kt)("li",{parentName:"ul"},"It takes ",(0,r.kt)("inlineCode",{parentName:"li"},"O(logN)")," time.")),(0,r.kt)("h2",{id:"custom-implementation"},"Custom Implementation"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(u,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(h,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},'import java.util.Collections\n\nclass Heap<T>(\n        private val comparator: Comparator<in T>\n) {\n    companion object {\n        private fun parent(index: Int) = index shr 1\n        private fun left(index: Int) = index shl 1\n        private fun right(index: Int) = left(index) + 1\n    }\n\n    private val arr = mutableListOf<T>()\n    private var size = 0\n\n    private tailrec fun heapify(index: Int) {\n        val left = left(index)\n        val right = right(index)\n\n        var ordered = index\n\n        if (left < size && comparator.compare(arr[left], arr[ordered]) > 0) {\n            ordered = left\n        }\n\n        if (right < size && comparator.compare(arr[right], arr[ordered]) > 0) {\n            ordered = right\n        }\n\n        if (ordered != index) {\n            Collections.swap(arr, index, ordered)\n            heapify(ordered)\n        }\n    }\n\n    fun size() = size\n\n    fun add(value: T) {\n        if (size < arr.size) {\n            arr[size] = value\n        } else {\n            arr.add(value)\n        }\n        size++\n        var current = size - 1\n        var parent = parent(current)\n        while (parent >= 0 && comparator.compare(arr[current], arr[parent]) > 0) {\n            Collections.swap(arr, current, parent)\n            current = parent.also { parent = parent(parent) }\n        }\n    }\n\n    fun peek(): T {\n        if (size == 0)\n            throw NoSuchElementException("Heap is empty.")\n        return arr[0]\n    }\n\n    fun pop(): T {\n        if (size == 0)\n            throw NoSuchElementException("Heap is empty.")\n\n        val popped = peek()\n        arr[0] = arr[--size]\n        heapify(0)\n        return popped\n    }\n\n    override fun toString(): String {\n        return arr.joinToString(\n                separator = ", ",\n                prefix = "[",\n                postfix = "]",\n        )\n    }\n\n}\n\nfun main() {\n    val minHeap = Heap<Int> { a, b ->\n        b - a\n    }\n\n    minHeap.add(1)\n    minHeap.add(2)\n    println(minHeap.peek())\n    minHeap.add(3)\n    minHeap.add(4)\n\n    println(minHeap)\n\n    println(minHeap.pop())\n\n    println(minHeap.peek())\n\n    println(minHeap.pop())\n\n    println(minHeap.pop())\n\n    minHeap.add(5)\n    println(minHeap.peek())\n    minHeap.add(1)\n    println(minHeap.peek())\n    println(minHeap)\n    println(minHeap.size())\n\n}\n\n')))),(0,r.kt)("h2",{id:"library-implementation-and-common-methods"},"Library Implementation and Common Methods"),(0,r.kt)(m,{mdxType:"Tabs"},(0,r.kt)(u,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(h,{name:"@msvhora",mdxType:"SolutionAuthor"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kt"},"import java.util.PriorityQueue\n\nfun main() {\n    val minHeap = PriorityQueue<Int> { a, b ->\n        a - b\n    }\n    \n    // Insert\n    minHeap.add(1)\n    minHeap.add(2)\n    \n    // Peek\n    minHeap.peek()\n    \n    // Remove\n    val removedElement = minHeap.remove()\n\n    // Size\n    minHeap.size\n}\n\n")))))}v.isMDXComponent=!0},4964:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-1ed4ba6603fddd114f2e0f7db783479c.png"}}]);