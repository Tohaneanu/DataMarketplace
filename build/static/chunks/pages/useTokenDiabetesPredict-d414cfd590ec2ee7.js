(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[659],{63917:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/useTokenDiabetesPredict",function(){return s(98244)}])},98244:function(e,n,s){"use strict";s.r(n);var r=s(47568),o=s(34051),i=s.n(o),l=s(85893),t=s(67294),a=s(6077),c=s(22920),u=s(46356),_=s.n(u),d=s(42906),x=s(86555);n.default=function(){var e=(0,t.useContext)(x.Z).hasTokenFromOwner,n=(0,t.useState)(null),s=n[0],o=n[1],u=(0,t.useState)(null),b=u[0],m=u[1],p=(0,t.useState)(null),h=p[0],v=p[1],F=(0,t.useState)(null),j=F[0],N=F[1],f=(0,t.useState)(null),g=f[0],k=f[1],P=(0,t.useState)(null),w=P[0],T=P[1],y=(0,t.useState)(null),C=y[0],D=y[1],S=(0,t.useState)(null),B=S[0],O=S[1],E=(0,t.useState)(null),I=E[0],A=E[1];function G(){return(G=(0,r.Z)(i().mark((function n(){var r,o,l,t,u,_;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=I,!n.t0){n.next=5;break}return n.next=4,e();case 4:n.t0=n.sent;case 5:if(!n.t0){n.next=9;break}null!==s&&null!==b&&null!==h&&null!==j&&null!==g&&null!==w&&null!==C&&null!==B?(r=[Number(s),Number(b),Number(h),Number(j),Number(g),Number(w),Number(C),Number(B)],o=(0,a.odF)([r]),l=[3.845052,120.894531,69.105469,20.536458,79.799479,31.992578,.471876,33.240885],t=[3.369578,31.972618,19.355807,15.952218,115.244002,7.88416,.331329,11.760232],u=(0,a.luU)(o,l).div(t),_=I.predict(u),1===_.argMax(1).dataSync()[0]?console.log("Predic\u021bie: Persoana prezint\u0103 diabet"):console.log("Predic\u021bie: Persoana nu prezint\u0103 diabet")):c.Am.error("Please insert all data!",{hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),n.next=10;break;case 9:c.Am.error("The service is not working right now, please try again later or reload the page!",{hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(0,t.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,a.FBF)("/model/model1.json");case 2:n=e.sent,A(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var M=(0,l.jsxs)("div",{className:_().useTokenDiabetesPredict,children:[(0,l.jsxs)("div",{className:_().Form_box,children:[(0,l.jsxs)("div",{className:_().Form_box_row,children:[(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"Pregnancies",children:"Pregnancies"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"Pregnancies",onChange:function(e){return o(e.target.value)},step:"0.01"})})]})})}),(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"Glucose",children:"Glucose"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"Glucose",onChange:function(e){return m(e.target.value)},step:"0.01"})})]})})})]}),(0,l.jsxs)("div",{className:_().Form_box_row,children:[(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"BloodPressure",children:"BloodPressure"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"BloodPressure",onChange:function(e){return v(e.target.value)},step:"0.01"})})]})})}),(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"SkinThickness",children:"SkinThickness"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"SkinThickness",onChange:function(e){return N(e.target.value)},step:"0.01"})})]})})})]}),(0,l.jsxs)("div",{className:_().Form_box_row,children:[(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"Insulin",children:"Insulin"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"Insulin",onChange:function(e){return k(e.target.value)},step:"0.01"})})]})})}),(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"BMI",children:"BMI"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"BMI",onChange:function(e){return T(e.target.value)},step:"0.01"})})]})})})]}),(0,l.jsxs)("div",{className:_().Form_box_row,children:[(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"DiabetesPedigreeFunction",children:"DiabetesPedigreeFunction"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"DiabetesPedigreeFunction",onChange:function(e){return D(e.target.value)},step:"0.01"})})]})})}),(0,l.jsx)("div",{className:_().Form_box_col,children:(0,l.jsx)("div",{className:_().Form_box_input_social,children:(0,l.jsxs)("div",{className:_().Form_box_input,children:[(0,l.jsx)("label",{htmlFor:"Age",children:"Age"}),(0,l.jsx)("div",{className:_().Form_box_input_box,children:(0,l.jsx)("input",{type:"number",placeholder:"Age",onChange:function(e){return O(e.target.value)},step:"0.01"})})]})})})]})]}),(0,l.jsx)("div",{className:_().upload_box_btn,children:(0,l.jsx)(d.zx,{btnName:"Check",handleClick:function(){!function(){G.apply(this,arguments)}()},classStyle:_().upload_box_btn_style})})]});return(0,l.jsx)(d.xb,{children:M})}},46356:function(e){e.exports={useTokenDiabetesPredict:"useTokenDiabetesPredict_useTokenDiabetesPredict__d5wqD",Form_box:"useTokenDiabetesPredict_Form_box__px3bU",Form_box_row:"useTokenDiabetesPredict_Form_box_row__kVmu5",Form_box_input:"useTokenDiabetesPredict_Form_box_input__G5UYb",Form_box_input_box:"useTokenDiabetesPredict_Form_box_input_box__Sd2JK",upload_box_btn:"useTokenDiabetesPredict_upload_box_btn__7lJKi",upload_box_btn_style:"useTokenDiabetesPredict_upload_box_btn_style__i_Tr9"}},75410:function(){},48628:function(){},31601:function(){},67792:function(){},34977:function(){},75042:function(){}},function(e){e.O(0,[864,904,295,723,974,132,773,4,774,888,179],(function(){return n=63917,e(e.s=n);var n}));var n=e.O();_N_E=n}]);