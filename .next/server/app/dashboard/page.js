(()=>{var e={};e.id=702,e.ids=[702],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9241:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l}),r(8551),r(1506),r(5866);var s=r(3191),o=r(8716),a=r(7922),i=r.n(a),n=r(5231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);r.d(t,d);let l=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8551)),"C:\\Users\\Shahid\\Desktop\\New folder\\frontend-NextJS\\app\\dashboard\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"C:\\Users\\Shahid\\Desktop\\New folder\\frontend-NextJS\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],u=["C:\\Users\\Shahid\\Desktop\\New folder\\frontend-NextJS\\app\\dashboard\\page.tsx"],c="/dashboard/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8576:(e,t,r)=>{Promise.resolve().then(r.bind(r,2221))},3232:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},9490:(e,t,r)=>{Promise.resolve().then(r.bind(r,381))},2221:(e,t,r)=>{"use strict";r.d(t,{AddProductForm:()=>n});var s=r(326),o=r(7577),a=r(4099),i=r(381);function n(){let[e,t]=(0,o.useState)(""),[r,n]=(0,o.useState)(0),[d,l]=(0,o.useState)(0),[u,c]=(0,o.useState)([]),[p,m]=(0,o.useState)([]),[x,h]=(0,o.useState)(!1),g=()=>{t(""),n(0),l(0),c([]),m([])},b=async e=>{let t=new FormData;t.append("file",e),t.append("upload_preset","gapchap"),t.append("cloud_name","dfd5b7gfr");let r=await fetch("https://api.cloudinary.com/v1_1/dfd5b7gfr/image/upload",{method:"post",body:t});return(await r.json()).url},f=async t=>{if(t.preventDefault(),h(!0),""===e||r<=0||d<=0){i.Am.error("Please fill all fields."),h(!1);return}try{if(u.length<1||u.length>6){i.Am.error("Please upload between 1 and 6 pictures."),h(!1);return}let t=u.map(b),s=await Promise.all(t),o=await a.Z.post("http://www.localhost:5000/api/product/add",{name:e,price:r,quantity:d,userId:"6660a631631322d2b5805ad5",pictures:s});o.data&&o.data?(i.Am.success("Product added successfully"),g()):i.Am.error("Something went wrong. Please try again.")}catch(e){i.Am.error("Something went wrong. Please try again.")}h(!1)};return s.jsx("div",{className:"flex items-center justify-center bg-gray-100",children:(0,s.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-lg",children:[s.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Add New Product"}),(0,s.jsxs)("form",{onSubmit:f,className:"space-y-4",children:[(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"productName",className:"block text-sm font-medium text-gray-700",children:"Product Name:"}),s.jsx("input",{type:"text",id:"productName",value:e,onChange:e=>t(e.target.value),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"productPrice",className:"block text-sm font-medium text-gray-700",children:"Product Price:"}),s.jsx("input",{type:"number",id:"productPrice",value:r,onChange:e=>n(Number(e.target.value)),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"productQuantity",className:"block text-sm font-medium text-gray-700",children:"Product Quantity:"}),s.jsx("input",{type:"number",id:"productQuantity",value:d,onChange:e=>l(Number(e.target.value)),required:!0,className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"})]}),(0,s.jsxs)("div",{children:[s.jsx("label",{htmlFor:"productPictures",className:"block text-sm font-medium text-gray-700",children:"Upload Pictures:"}),s.jsx("input",{type:"file",id:"productPictures",multiple:!0,accept:"image/*",onChange:e=>{let t=Array.from(e.target.files||[]);c(t),m(t.map(e=>URL.createObjectURL(e)))},className:"mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none"})]}),s.jsx("div",{className:"mt-2 grid grid-cols-3 gap-4",children:p.map((e,t)=>s.jsx("img",{src:e,alt:`Uploaded ${t}`,style:{maxWidth:"75px",maxHeight:"75px",margin:"5px"}},t))}),s.jsx("button",{type:"submit",className:"w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500",disabled:x,children:x?"Adding...":"Submit"})]})]})})}},8551:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(9510),o=r(8570);let a=(0,o.createProxy)(String.raw`C:\Users\Shahid\Desktop\New folder\frontend-NextJS\components\AddProductForm.tsx`),{__esModule:i,$$typeof:n}=a;a.default;let d=(0,o.createProxy)(String.raw`C:\Users\Shahid\Desktop\New folder\frontend-NextJS\components\AddProductForm.tsx#AddProductForm`),l=()=>s.jsx("div",{className:"flex justify-center items-center h-screen",children:s.jsx(d,{})})},1506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>n});var s=r(9510),o=r(7366),a=r.n(o);r(7272);var i=r(9125);let n={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[s.jsx("body",{className:a().className,children:e}),s.jsx(i.x7,{})]})}},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[521,99],()=>r(9241));module.exports=s})();