(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66],{12056:function(r,a,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/author",function(){return o(49698)}])},54812:function(r,a,o){"use strict";o.d(a,{jL:function(){return s},I8:function(){return h}});var e=o(85893),t=(o(67294),o(25675)),i=o.n(t),n=(o(95858),o(3952)),_=o.n(n),s=function(r){var a=r.bannerImage;return(0,e.jsxs)("div",{className:_().banner,children:[(0,e.jsx)("div",{className:_().banner_img,children:(0,e.jsx)(i(),{src:a,objectFit:"cover",alt:"background",height:200})}),(0,e.jsx)("div",{className:_().banner_img_mobile,children:(0,e.jsx)(i(),{src:a,objectFit:"cover",alt:"background",width:1600,height:300})})]})},u=o(41664),d=o.n(u),c=o(63743),l=o.n(c),h=function(r){var a=r.Data;return(0,e.jsx)("div",{className:l().DataCardTwo,children:null===a||void 0===a?void 0:a.map((function(r,a){return(0,e.jsx)(d(),{href:{pathname:"/Data-details",query:r},children:(0,e.jsxs)("div",{className:l().DataCardTwo_box,children:[(0,e.jsx)("div",{className:l().DataCardTwo_box_img,children:(0,e.jsx)(i(),{src:"Image"==r.dataType?r.image:r.thumbnail,alt:"Data",width:500,height:500,objectFit:"cover",className:l().DataCardTwo_box_img_img})}),(0,e.jsx)("div",{className:l().DataCardTwo_box_info,children:(0,e.jsx)("div",{className:l().DataCardTwo_box_info_left,children:(0,e.jsx)("p",{children:r.name})})}),(0,e.jsx)("div",{className:l().DataCardTwo_box_price,children:(0,e.jsxs)("div",{className:l().DataCardTwo_box_price_box,children:[(0,e.jsx)("small",{children:"Price"}),(0,e.jsxs)("p",{children:[r.price||a+4," ETH"]})]})})]})},a+1)}))})}},49698:function(r,a,o){"use strict";o.r(a),o.d(a,{default:function(){return k}});var e=o(47568),t=o(34051),i=o.n(t),n=o(85893),_=o(67294),s=o(10367),u=o.n(s),d=o(54812),c=o(95858),l=o(25675),h=o.n(l),f=o(5434),x=o(86893),b=o(92345),C=o(22920),p=o(70768),A=o.n(p),m=o(49780),w=function(r){var a=r.currentAccount,o=r.isOwner,t=r.listingPrice,s=r.updateListingPrice,u=r.marketBalance,d=r.withdraw,l=(0,_.useState)(!1),p=l[0],w=l[1],g=(0,_.useState)(t),v=g[0],P=g[1],T=(0,_.useState)(t),j=T[0],D=T[1],N=(0,_.useState)(0),k=N[0],y=N[1];(0,_.useEffect)((function(){P(t)}),[t]),(0,_.useEffect)((function(){y(Number(u))}),[u]);var E=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return w(!1),D("..."),a=C.Am.loading("Updating in progress..."),r.prev=3,r.next=6,s(v);case 6:r.sent?(D(v.toString()),C.Am.update(a,{render:"Successful update! \ud83d\udc4d",type:"success",isLoading:!1,autoClose:2e3})):(C.Am.update(a,{render:"Error while updating!",type:"error",isLoading:!1,autoClose:2e3}),D(t.toString()),P(t.toString())),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(3),console.log("Error while updating",r.t0);case 13:case"end":return r.stop()}}),r,null,[[3,10]])})));return function(){return r.apply(this,arguments)}}();return(0,n.jsx)("div",{className:A().AuthorProfileCard,children:(0,n.jsxs)("div",{className:A().AuthorProfileCard_box,children:[(0,n.jsx)("div",{className:A().AuthorProfileCard_box_img,children:(0,n.jsx)(h(),{src:c.Z.user1,className:A().AuthorProfileCard_box_img_img,alt:"Data IMAGES",width:220,height:220})}),(0,n.jsxs)("div",{className:A().AuthorProfileCard_box_info,children:[o?(0,n.jsxs)("h2",{children:["Market Owner",(0,n.jsx)("span",{children:(0,n.jsx)(f.vr,{})})," "]}):(0,n.jsxs)("h2",{children:["Author"," ",(0,n.jsx)("span",{children:(0,n.jsx)(f.vr,{})})," "]}),(0,n.jsxs)("div",{className:A().AuthorProfileCard_box_info_address,children:[(0,n.jsx)("input",{type:"text",value:a,id:"myInput",readOnly:!0}),(0,n.jsx)(x.C3L,{onClick:function(){return function(){var r=document.getElementById("myInput");r.select(),navigator.clipboard.writeText(r.value)}()},className:A().AuthorProfileCard_box_info_address_icon})]}),o&&(0,n.jsxs)("div",{className:A().AuthorProfileCard_box_info_owner,children:[(0,n.jsxs)("div",{className:A().AuthorProfileCard_box_info_owner_first,children:[(0,n.jsx)("div",{className:A().AuthorProfileCard_box_info_listing,children:(0,n.jsxs)("span",{children:["Listing Price: ",0==j?t:j," ETH"]})}),(0,n.jsxs)("div",{className:A().AuthorProfileCard_box_info_owner_button,children:[(0,n.jsx)(m.zx,{btnName:"Update listing price",handleClick:function(){w(!0)},style:{padding:"0.3rem 0.7rem"}}),(0,n.jsx)(b.Z,{open:p,onClose:function(){return w(!1)},position:"right center",children:(0,n.jsxs)("div",{className:A().AuthorProfileCard_box_popup,children:[(0,n.jsx)("div",{className:A().Form_box_input_box,children:(0,n.jsx)("input",{type:"number",value:v,onChange:function(r){return P(parseFloat(r.target.value))},step:"0.001",min:"0",max:"10"})}),(0,n.jsx)(m.zx,{btnName:"Save",handleClick:E})]})})]})]}),(0,n.jsxs)("div",{className:A().AuthorProfileCard_box_info_owner_second,children:[(0,n.jsx)("div",{className:A().AuthorProfileCard_box_info_listing,children:(0,n.jsxs)("span",{children:["Market balance: ",0===k?u:-1===k?0:k," ETH"]})}),(0,n.jsx)("div",{className:A().AuthorProfileCard_box_info_owner_button,children:(0,n.jsx)(m.zx,{btnName:"Withdraw funds",handleClick:(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(k>0||u>0&&-1!=k)){r.next=8;break}return a=C.Am.loading("Withdrawal in progress..."),r.next=4,d();case 4:r.sent?(C.Am.update(a,{render:"Successful withdrawal! \ud83d\udc4d",type:"success",isLoading:!1,autoClose:2e3}),y(-1)):C.Am.update(a,{render:"Error while withdrawing",type:"error",isLoading:!1,autoClose:2e3}),r.next=9;break;case 8:C.Am.error("Insufficient funds!",{closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 9:case"end":return r.stop()}}),r)}))),style:{padding:"0.3rem 0.7rem"}})})]})]})]}),(0,n.jsx)("div",{className:A().AuthorProfileCard_box_share})]})})},g=o(91052),v=o.n(g),P=function(r){var a=r.setCollectiables,o=r.setCreated,e=(0,_.useState)(1),t=e[0],i=e[1],s=function(r){var e=r.target.innerText;console.log(e),"Listed Datas"==e?(a(!0),o(!1),i(1)):"Own Data"==e&&(a(!1),o(!0),i(2))};return(0,n.jsx)("div",{className:v().AuthorTaps,children:(0,n.jsx)("div",{className:v().AuthorTaps_box,children:(0,n.jsx)("div",{className:v().AuthorTaps_box_left,children:(0,n.jsxs)("div",{className:v().AuthorTaps_box_left_btn,children:[(0,n.jsx)("button",{className:"".concat(1==t?v().active:""),onClick:function(r){return s(r)},children:"Listed Datas"}),(0,n.jsx)("button",{className:"".concat(2==t?v().active:""),onClick:function(r){return s(r)},children:"Own Data"})]})})})})},T=o(48037),j=o.n(T),D=function(r){var a=r.collectiables,o=r.created,e=r.Datas,t=r.myDataS;return(0,n.jsxs)("div",{className:j().AuthorDataCardBox,children:[a&&(0,n.jsx)(d.I8,{Data:e}),o&&(0,n.jsx)(d.I8,{Data:t})]})},N=o(86555),k=function(){var r=(0,_.useState)(!0),a=r[0],o=r[1],t=(0,_.useState)(!1),s=t[0],d=t[1],c=(0,_.useContext)(N.Z),l=c.fetchMyDatasOrListedDatas,h=c.currentAccount,f=c.isOwnerOfMarket,x=c.getListingPrice,b=c.updateListingPrice,C=c.getMarketBalance,p=c.withdraw,A=(c.accountBalance,(0,_.useState)([])),m=A[0],g=A[1],v=(0,_.useState)(!0),T=v[0],j=v[1],k=(0,_.useState)(0),y=k[0],E=k[1],S=(0,_.useState)(0),L=S[0],I=S[1],O=(0,_.useState)([]),B=O[0],F=O[1];return(0,_.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f();case 2:a=r.sent,j(a);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,_.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x();case 2:a=r.sent,E(a);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,_.useEffect)((function(){var r=function(){var r=(0,e.Z)(i().mark((function r(){var a;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C();case 2:a=r.sent,I(a);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,_.useEffect)((function(){l("fetchItemsListed").then((function(r){g(r)}))}),[]),(0,_.useEffect)((function(){l("fetchMyDatas").then((function(r){F(r)}))}),[]),(0,n.jsxs)("div",{className:u().author,children:[(0,n.jsx)(w,{currentAccount:h,isOwner:T,listingPrice:y,updateListingPrice:b,marketBalance:L,withdraw:p}),(0,n.jsx)(P,{setCollectiables:o,setCreated:d,currentAccount:h}),(0,n.jsx)(D,{collectiables:a,created:s,Datas:m,myDataS:B})]})}},48037:function(r){r.exports={AuthorDataCardBox:"AuthorNFTCardBox_AuthorDataCardBox__cjrtE",AuthorDataCardBox_box:"AuthorNFTCardBox_AuthorDataCardBox_box__sR7mM"}},70768:function(r){r.exports={AuthorProfileCard:"AuthorProfileCard_AuthorProfileCard__hzsF2",AuthorProfileCard_box:"AuthorProfileCard_AuthorProfileCard_box__Z8grW",AuthorProfileCard_box_img_img:"AuthorProfileCard_AuthorProfileCard_box_img_img__O60R3",AuthorProfileCard_box_info:"AuthorProfileCard_AuthorProfileCard_box_info__XeR2J",AuthorProfileCard_box_info_address:"AuthorProfileCard_AuthorProfileCard_box_info_address__lpjWU",AuthorProfileCard_box_info_listing:"AuthorProfileCard_AuthorProfileCard_box_info_listing__ZXY_n",AuthorProfileCard_box_info_address_icon:"AuthorProfileCard_AuthorProfileCard_box_info_address_icon__fDzp3",AuthorProfileCard_box_info_social:"AuthorProfileCard_AuthorProfileCard_box_info_social__1wWp8",AuthorProfileCard_box_share:"AuthorProfileCard_AuthorProfileCard_box_share__7pvWl",AuthorProfileCard_box_share_icon:"AuthorProfileCard_AuthorProfileCard_box_share_icon__5rN_f",AuthorProfileCard_box_share_upload:"AuthorProfileCard_AuthorProfileCard_box_share_upload__1usXG",AuthorProfileCard_box_share_report:"AuthorProfileCard_AuthorProfileCard_box_share_report__2kb2g",AuthorProfileCard_box_popup:"AuthorProfileCard_AuthorProfileCard_box_popup__r_hKb",AuthorProfileCard_box_info_update:"AuthorProfileCard_AuthorProfileCard_box_info_update__NqdVQ",AuthorProfileCard_box_info_owner:"AuthorProfileCard_AuthorProfileCard_box_info_owner__eRGT0",AuthorProfileCard_box_info_owner_first:"AuthorProfileCard_AuthorProfileCard_box_info_owner_first__wTPFK",AuthorProfileCard_box_info_owner_second:"AuthorProfileCard_AuthorProfileCard_box_info_owner_second__63Q6y",AuthorProfileCard_box_info_owner_button:"AuthorProfileCard_AuthorProfileCard_box_info_owner_button__jwy6V",AuthorProfileCard_box_img:"AuthorProfileCard_AuthorProfileCard_box_img__IpNLU"}},91052:function(r){r.exports={AuthorTaps:"AuthorTaps_AuthorTaps__9NF_p",AuthorTaps_box:"AuthorTaps_AuthorTaps_box__IkC60",AuthorTaps_box_left_btn:"AuthorTaps_AuthorTaps_box_left_btn__fjbDl",active:"AuthorTaps_active__94_uC",AuthorTaps_box_right:"AuthorTaps_AuthorTaps_box_right__cjsBL",AuthorTaps_box_right_para:"AuthorTaps_AuthorTaps_box_right_para__7CuOR",AuthorTaps_box_right_list:"AuthorTaps_AuthorTaps_box_right_list__vJ1Gn",AuthorTaps_box_right_list_item:"AuthorTaps_AuthorTaps_box_right_list_item__GFysw"}},3952:function(r){r.exports={banner_img_mobile:"Banner_banner_img_mobile__g6Fs3",banner_img:"Banner_banner_img__r_wlE"}},63743:function(r){r.exports={DataCardTwo:"DataCard_DataCardTwo__ERIbx",DataCardTwo_box:"DataCard_DataCardTwo_box__7Vf4L",DataCardTwo_box_like:"DataCard_DataCardTwo_box_like__gEY3Q",DataCardTwo_box_like_box_box:"DataCard_DataCardTwo_box_like_box_box__xQdum",DataCardTwo_box_like_box_box_icon:"DataCard_DataCardTwo_box_like_box_box_icon__3iX3i",DataCardTwo_box_img:"DataCard_DataCardTwo_box_img__tW2V5",DataCardTwo_box_img_img:"DataCard_DataCardTwo_box_img_img__KnyD8",DataCardTwo_box_info:"DataCard_DataCardTwo_box_info__eKWq_",DataCardTwo_box_info_left:"DataCard_DataCardTwo_box_info_left__I1ITO",DataCardTwo_box_price:"DataCard_DataCardTwo_box_price___ebw7",DataCardTwo_box_price_box:"DataCard_DataCardTwo_box_price_box__xDXYe",DataCardTwo_box_price_stock:"DataCard_DataCardTwo_box_price_stock__HGgNX"}},10367:function(r){r.exports={author_box:"author_author_box__qdVv8"}}},function(r){r.O(0,[228,682,774,888,179],(function(){return a=12056,r(r.s=a);var a}));var a=r.O();_N_E=a}]);