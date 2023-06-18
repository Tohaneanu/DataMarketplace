(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{12056:function(r,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author",function(){return o(84267)}])},84267:function(r,a,o){"use strict";o.r(a),o.d(a,{default:function(){return k}});var e=o(47568),t=o(34051),i=o.n(t),n=o(85893),_=o(67294),s=o(10367),u=o.n(s),d=o(25675),c=o.n(d),l=o(5434),h=o(86893),f=o(92345),x=o(22920),b=o(93136),C=o.n(b),p=o(95713),A=o(42906),m=function(r){var a=r.currentAccount,o=r.isOwner,t=r.listingPrice,s=r.updateListingPrice,u=r.marketBalance,d=r.withdraw,b=(0,_.useState)(!1),m=b[0],w=b[1],v=(0,_.useState)(t),P=v[0],g=v[1],T=(0,_.useState)(t),j=T[0],D=T[1],N=(0,_.useState)(0),k=N[0],S=N[1];(0,_.useEffect)((function(){g(t)}),[t]),(0,_.useEffect)((function(){S(Number(u))}),[u]);var y=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return w(!1),D("..."),a=x.Am.loading("Updating in progress..."),r.prev=3,r.next=6,s(P);case 6:r.sent?(D(P.toString()),x.Am.update(a,{render:"Successful update! \ud83d\udc4d",type:"success",isLoading:!1,autoClose:2e3})):(x.Am.update(a,{render:"Error while updating!",type:"error",isLoading:!1,autoClose:2e3}),D(t.toString()),g(t.toString())),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),console.log("Error while updating",r.t0);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})));return function(){return r.apply(this,arguments)}}();return(0,n.jsx)("div",{className:C().AuthorProfileCard,children:(0,n.jsxs)("div",{className:C().AuthorProfileCard_box,children:[(0,n.jsx)("div",{className:C().AuthorProfileCard_box_img,children:(0,n.jsx)(c(),{src:p.Z.user1,className:C().AuthorProfileCard_box_img_img,alt:"Data IMAGES",width:220,height:220})}),(0,n.jsxs)("div",{className:C().AuthorProfileCard_box_info,children:[o?(0,n.jsxs)("h2",{children:["Market Owner",(0,n.jsx)("span",{children:(0,n.jsx)(l.vr,{})})," "]}):(0,n.jsxs)("h2",{children:["Author"," ",(0,n.jsx)("span",{children:(0,n.jsx)(l.vr,{})})," "]}),(0,n.jsxs)("div",{className:C().AuthorProfileCard_box_info_address,children:[(0,n.jsx)("input",{type:"text",value:a,id:"myInput",readOnly:!0}),(0,n.jsx)(h.C3L,{onClick:function(){return function(){var r=document.getElementById("myInput");r.select(),navigator.clipboard.writeText(r.value)}()},className:C().AuthorProfileCard_box_info_address_icon})]}),o&&(0,n.jsxs)("div",{className:C().AuthorProfileCard_box_info_owner,children:[(0,n.jsxs)("div",{className:C().AuthorProfileCard_box_info_owner_first,children:[(0,n.jsx)("div",{className:C().AuthorProfileCard_box_info_listing,children:(0,n.jsxs)("span",{children:["Listing Price: ",0==j?t:j," ETH"]})}),(0,n.jsxs)("div",{className:C().AuthorProfileCard_box_info_owner_button,children:[(0,n.jsx)(A.zx,{btnName:"Update listing price",handleClick:function(){w(!0)},style:{padding:"0.3rem 0.7rem"}}),(0,n.jsx)(f.Z,{open:m,onClose:function(){return w(!1)},position:"right center",children:(0,n.jsxs)("div",{className:C().AuthorProfileCard_box_popup,children:[(0,n.jsx)("div",{className:C().Form_box_input_box,children:(0,n.jsx)("input",{type:"number",value:P,onChange:function(r){return g(parseFloat(r.target.value))},step:"0.001",min:"0",max:"10"})}),(0,n.jsx)(A.zx,{btnName:"Save",handleClick:y})]})})]})]}),(0,n.jsxs)("div",{className:C().AuthorProfileCard_box_info_owner_second,children:[(0,n.jsx)("div",{className:C().AuthorProfileCard_box_info_listing,children:(0,n.jsxs)("span",{children:["Market balance: ",0===k?u:-1===k?0:k," ETH"]})}),(0,n.jsx)("div",{className:C().AuthorProfileCard_box_info_owner_button,children:(0,n.jsx)(A.zx,{btnName:"Withdraw funds",handleClick:(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(k>0||u>0&&-1!=k)){r.next=8;break}return a=x.Am.loading("Withdrawal in progress..."),r.next=4,d();case 4:r.sent?(x.Am.update(a,{render:"Successful withdrawal! \ud83d\udc4d",type:"success",isLoading:!1,autoClose:2e3}),S(-1)):x.Am.update(a,{render:"Error while withdrawing",type:"error",isLoading:!1,autoClose:2e3}),r.next=9;break;case 8:x.Am.error("Insufficient funds!",{closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 9:case"end":return r.stop()}}),r)}))),style:{padding:"0.3rem 0.7rem"}})})]})]})]}),(0,n.jsx)("div",{className:C().AuthorProfileCard_box_share})]})})},w=o(86283),v=o.n(w),P=function(r){var a=r.setCollectiables,o=r.setCreated,e=(0,_.useState)(1),t=e[0],i=e[1],s=function(r){var e=r.target.innerText;"Listed Datas"==e?(a(!0),o(!1),i(1)):"Own Data"==e&&(a(!1),o(!0),i(2))};return(0,n.jsx)("div",{className:v().AuthorTaps,children:(0,n.jsx)("div",{className:v().AuthorTaps_box,children:(0,n.jsx)("div",{className:v().AuthorTaps_box_left,children:(0,n.jsxs)("div",{className:v().AuthorTaps_box_left_btn,children:[(0,n.jsx)("button",{className:"".concat(1==t?v().active:""),onClick:function(r){return s(r)},children:"Listed Datas"}),(0,n.jsx)("button",{className:"".concat(2==t?v().active:""),onClick:function(r){return s(r)},children:"Own Data"})]})})})})},g=o(39168),T=o.n(g),j=o(76433),D=function(r){var a=r.collectiables,o=r.created,e=r.Datas,t=r.myDataS;return(0,n.jsxs)("div",{className:T().AuthorDataCardBox,children:[a&&(0,n.jsx)(j.I8,{Data:e}),o&&(0,n.jsx)(j.I8,{Data:t})]})},N=o(86555),k=function(){var r=(0,_.useState)(!0),a=r[0],o=r[1],t=(0,_.useState)(!1),s=t[0],d=t[1],c=(0,_.useContext)(N.Z),l=c.fetchMyDatasOrListedDatas,h=c.currentAccount,f=c.isOwnerOfMarket,x=c.getListingPrice,b=c.updateListingPrice,C=c.getMarketBalance,p=c.withdraw,A=(c.accountBalance,(0,_.useState)([])),w=A[0],v=A[1],g=(0,_.useState)(!0),T=g[0],j=g[1],k=(0,_.useState)(0),S=k[0],y=k[1],L=(0,_.useState)(0),E=L[0],B=L[1],O=(0,_.useState)([]),I=O[0],X=O[1];return(0,_.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f();case 2:a=r.sent,j(a);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,_.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x();case 2:a=r.sent,y(a);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,_.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C();case 2:a=r.sent,B(a);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,_.useEffect)((function(){l("fetchItemsListed").then((function(r){v(r)}))}),[]),(0,_.useEffect)((function(){l("fetchMyDatas").then((function(r){X(r)}))}),[]),(0,n.jsxs)("div",{className:u().author,children:[(0,n.jsx)(m,{currentAccount:h,isOwner:T,listingPrice:S,updateListingPrice:b,marketBalance:E,withdraw:p}),(0,n.jsx)(P,{setCollectiables:o,setCreated:d,currentAccount:h}),(0,n.jsx)(D,{collectiables:a,created:s,Datas:w,myDataS:I})]})}},76433:function(r,a,o){"use strict";o.d(a,{jL:function(){return u},I8:function(){return f}});var e=o(85893),t=(o(67294),o(25675)),i=o.n(t),n=o(95713),_=o(64880),s=o.n(_),u=function(r){var a=r.bannerImage;return(0,e.jsxs)("div",{className:s().banner,children:[(0,e.jsx)("div",{className:s().banner_img,children:(0,e.jsx)(i(),{src:a,objectFit:"cover",alt:"background",height:200})}),(0,e.jsx)("div",{className:s().banner_img_mobile,children:(0,e.jsx)(i(),{src:a,objectFit:"cover",alt:"background",width:1600,height:300})})]})},d=o(41664),c=o.n(d),l=o(37899),h=o.n(l),f=function(r){var a=r.Data;return(0,e.jsx)("div",{className:h().DataCardTwo,children:null===a||void 0===a?void 0:a.map((function(r,a){return(0,e.jsx)(c(),{href:{pathname:"/dataDetails",query:r},children:(0,e.jsxs)("div",{className:h().DataCardTwo_box,children:[(0,e.jsx)("div",{className:h().DataCardTwo_box_img,children:(0,e.jsx)(i(),{src:"Image"==r.dataType?r.image:"Video"==r.dataType?r.thumbnail:n.Z.musiceWave2,alt:"Data",width:500,height:500,objectFit:"cover",className:h().DataCardTwo_box_img_img})}),(0,e.jsx)("div",{className:h().DataCardTwo_box_info,children:(0,e.jsx)("div",{className:h().DataCardTwo_box_info_left,children:(0,e.jsx)("p",{children:r.name})})}),(0,e.jsx)("div",{className:h().DataCardTwo_box_price,children:(0,e.jsxs)("div",{className:h().DataCardTwo_box_price_box,children:[(0,e.jsx)("small",{children:"Price"}),(0,e.jsxs)("p",{children:[r.price||a+4," ETH"]})]})})]})},a+1)}))})}},10367:function(r){r.exports={author_box:"author_author_box__qdVv8"}},39168:function(r){r.exports={AuthorDataCardBox:"AuthorNFTCardBox_AuthorDataCardBox__oOFBl",AuthorDataCardBox_box:"AuthorNFTCardBox_AuthorDataCardBox_box__7Eat_"}},93136:function(r){r.exports={AuthorProfileCard:"AuthorProfileCard_AuthorProfileCard__F3aLy",AuthorProfileCard_box:"AuthorProfileCard_AuthorProfileCard_box__cMSJH",AuthorProfileCard_box_img_img:"AuthorProfileCard_AuthorProfileCard_box_img_img__SK4to",AuthorProfileCard_box_info:"AuthorProfileCard_AuthorProfileCard_box_info__SXgvV",AuthorProfileCard_box_info_address:"AuthorProfileCard_AuthorProfileCard_box_info_address__msmsH",AuthorProfileCard_box_info_listing:"AuthorProfileCard_AuthorProfileCard_box_info_listing__kLmfr",AuthorProfileCard_box_info_address_icon:"AuthorProfileCard_AuthorProfileCard_box_info_address_icon__H5ezl",AuthorProfileCard_box_info_social:"AuthorProfileCard_AuthorProfileCard_box_info_social__BkL2x",AuthorProfileCard_box_share:"AuthorProfileCard_AuthorProfileCard_box_share__kjNz0",AuthorProfileCard_box_share_icon:"AuthorProfileCard_AuthorProfileCard_box_share_icon__k3ALY",AuthorProfileCard_box_share_upload:"AuthorProfileCard_AuthorProfileCard_box_share_upload__m5X62",AuthorProfileCard_box_share_report:"AuthorProfileCard_AuthorProfileCard_box_share_report__hOSBq",AuthorProfileCard_box_popup:"AuthorProfileCard_AuthorProfileCard_box_popup__XpodX",AuthorProfileCard_box_info_update:"AuthorProfileCard_AuthorProfileCard_box_info_update__dQIKo",AuthorProfileCard_box_info_owner:"AuthorProfileCard_AuthorProfileCard_box_info_owner__qCSYp",AuthorProfileCard_box_info_owner_first:"AuthorProfileCard_AuthorProfileCard_box_info_owner_first__IV2zJ",AuthorProfileCard_box_info_owner_second:"AuthorProfileCard_AuthorProfileCard_box_info_owner_second__xnA5U",AuthorProfileCard_box_info_owner_button:"AuthorProfileCard_AuthorProfileCard_box_info_owner_button__hCREp",AuthorProfileCard_box_img:"AuthorProfileCard_AuthorProfileCard_box_img__Uq8Gf"}},86283:function(r){r.exports={AuthorTaps:"AuthorTaps_AuthorTaps__tf8Xh",AuthorTaps_box:"AuthorTaps_AuthorTaps_box__GhItu",AuthorTaps_box_left_btn:"AuthorTaps_AuthorTaps_box_left_btn__8XKd_",active:"AuthorTaps_active__sO6Bl",AuthorTaps_box_right:"AuthorTaps_AuthorTaps_box_right__MBwar",AuthorTaps_box_right_para:"AuthorTaps_AuthorTaps_box_right_para__lKPvd",AuthorTaps_box_right_list:"AuthorTaps_AuthorTaps_box_right_list__eo4M1",AuthorTaps_box_right_list_item:"AuthorTaps_AuthorTaps_box_right_list_item__Nqx7f"}},64880:function(r){r.exports={banner_img_mobile:"Banner_banner_img_mobile__Xo5Li",banner_img:"Banner_banner_img__ZawQn"}},37899:function(r){r.exports={DataCardTwo:"DataCard_DataCardTwo__NSx3A",DataCardTwo_box:"DataCard_DataCardTwo_box__JtnHi",DataCardTwo_box_like:"DataCard_DataCardTwo_box_like__0Yr_6",DataCardTwo_box_like_box_box:"DataCard_DataCardTwo_box_like_box_box__XLQpS",DataCardTwo_box_like_box_box_icon:"DataCard_DataCardTwo_box_like_box_box_icon__0xHhT",DataCardTwo_box_img:"DataCard_DataCardTwo_box_img__bnTiL",DataCardTwo_box_img_img:"DataCard_DataCardTwo_box_img_img__wcuKf",DataCardTwo_box_info:"DataCard_DataCardTwo_box_info__biXbL",DataCardTwo_box_info_left:"DataCard_DataCardTwo_box_info_left__xG4B2",DataCardTwo_box_price:"DataCard_DataCardTwo_box_price__I6CfB",DataCardTwo_box_price_box:"DataCard_DataCardTwo_box_price_box__8m7Ta",DataCardTwo_box_price_stock:"DataCard_DataCardTwo_box_price_stock__830P9"}}},function(r){r.O(0,[228,682,774,888,179],(function(){return a=12056,r(r.s=a);var a}));var a=r.O();_N_E=a}]);