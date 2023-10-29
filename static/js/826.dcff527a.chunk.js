"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[826],{7826:function(n,e,i){i.r(e),i.d(e,{default:function(){return tn}});var t,r,o,c,a,l,s,d,u,x,p,m,h,b,f,g=i(2791),w=i(4270),Z=i(9434),j=i(9439),y=i(5705),v=i(6727),k=i(8174),z=(i(5462),i(6916)),C=function(n){return n.filter},_=function(n){return n.contacts.isLoading},q=function(n){return n.contacts.error},L=(0,z.P1)([function(n){return n.contacts.items},C],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),N=i(3634),P=i(168),F=i(1109),I=(0,F.Z)(y.l0)(t||(t=(0,P.Z)(["\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 2px black solid;\n  border-radius: 5px;\n  min-width: 350px;\n"]))),S=F.Z.label(r||(r=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 2px;\n  color: white;\n  max-width: 300px;\n"]))),A=(0,F.Z)(y.gN)(o||(o=(0,P.Z)(["\n  min-width: 300px;\n  min-height: 26px;\n  padding: 1px 5px;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  border-width: 0;\n"]))),K=F.Z.button(c||(c=(0,P.Z)(["\n  padding: 5px 10px;\n  font-family: inherit;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 5px;\n\n  min-width: 140px;\n  min-height: 30px;\n  margin: 0;\n\n  background-color: white;\n  border: 2px black solid;\n  border-radius: 5px;\n  cursor: pointer;\n\n  font-size: 16px;\n  font-family: inherit;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover {\n    color: white;\n    background-color: black;\n    border-color: white;\n  }\n"]))),B=(0,F.Z)(y.Bc)(a||(a=(0,P.Z)(["\n  font-size: 14px;\n  color: black;\n  max-width: 300px;\n"]))),D=i(1127),E=i(3329),G={name:"",number:""},J=v.Ry().shape({name:v.Z_().required("Name is required"),number:v.Z_().required("Phone number is required").matches(/^[\d()+-]+$/,"Phone number must contain only 0-9 and these symbols: ( ) - +").min(8,"Phone number must be at least 8 characters")}),R=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(L),i=(0,Z.v9)(_),t=(0,g.useState)(!1),r=(0,j.Z)(t,2),o=r[0],c=r[1];return(0,E.jsx)(y.J9,{initialValues:G,onSubmit:function(i,t){if(c(!0),e.some((function(n){return n.name.toLowerCase()===i.name.toLowerCase()})))return k.Am.warn("".concat(i.name," is already in contacts."));n((0,N.uK)(i)).then((function(){c(!1)})),t.resetForm()},validationSchema:J,children:(0,E.jsxs)(I,{children:[(0,E.jsxs)(S,{children:["Name",(0,E.jsx)(A,{type:"text",name:"name"}),(0,E.jsx)(B,{name:"name",component:"div"})]}),(0,E.jsxs)(S,{children:["Number",(0,E.jsx)(A,{type:"tel",name:"number"}),(0,E.jsx)(B,{name:"number",component:"div"})]}),(0,E.jsxs)(K,{type:"submit",disabled:i&&o,children:[i&&o&&(0,E.jsx)(D.a,{}),"Add Contact"]})]})})},T=F.Z.ul(l||(l=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  row-gap: 10px;\n"]))),V=F.Z.li(s||(s=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  column-gap: 10px;\n  color: white;\n"]))),Y=F.Z.button(d||(d=(0,P.Z)(["\n  padding: 5px 10px;\n  min-width: 100px;\n  font-family: inherit;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 5px;\n\n  margin: 0;\n  margin-left: auto;\n\n  background-color: white;\n  border: 2px black solid;\n  border-radius: 5px;\n  cursor: pointer;\n\n  font-size: 16px;\n  font-family: inherit;\n\n  transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),\n    border-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);\n\n  &:hover,\n  &:focus {\n    color: white;\n    background-color: black;\n    border-color: white;\n  }\n"]))),$=F.Z.p(u||(u=(0,P.Z)(["\n  color: white;\n"]))),H=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(L),i=(0,Z.v9)(_),t=(0,Z.v9)(q),r=(0,g.useState)(null),o=(0,j.Z)(r,2),c=o[0],a=o[1];return(null===e||void 0===e||!e.length)&&!t&!i?(0,E.jsx)($,{children:"No contacts added yet."}):t?(0,E.jsx)("p",{children:t}):(0,E.jsx)(T,{children:e.map((function(e,t){var r=e.id,o=e.name,l=e.number;return(0,E.jsxs)(V,{children:[(0,E.jsxs)("div",{children:[t+1,"."]}),o,": ",l,(0,E.jsxs)(Y,{onClick:function(){a(r),n((0,N.GK)(r)).then((function(){a(null)}))},disabled:i&&c===r,children:[c===r&&(0,E.jsx)(D.a,{}),"Delete"]})]},r)}))})},M=F.Z.input(x||(x=(0,P.Z)(["\n  min-width: 250px;\n  min-height: 26px;\n  margin-bottom: 10px;\n  padding: 1px 5px;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  border-width: 0;\n"]))),O=i(1634),Q=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(C);return(0,E.jsx)(M,{type:"text",value:e,onChange:function(e){return n((0,O.T)(e.target.value.trim()))}})},U=F.Z.div(p||(p=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 600px;\n  margin: 0 auto;\n"]))),W=F.Z.div(m||(m=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  align-items: center;\n  padding: 20px;\n  border: 2px black solid;\n  border-radius: 5px;\n  min-width: 350px;\n"]))),X=F.Z.h1(h||(h=(0,P.Z)(["\n  margin-bottom: 20px;\n\n  font-size: 32px;\n  text-align: center;\n  color: white;\n"]))),nn=F.Z.p(b||(b=(0,P.Z)(["\n  margin-bottom: 10px;\n\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  color: white;\n"]))),en=F.Z.p(f||(f=(0,P.Z)(["\n  margin-bottom: 3px;\n\n  font-size: 18px;\n  text-align: center;\n  color: white;\n"])));function tn(){var n=(0,Z.I0)();return(0,g.useEffect)((function(){n((0,N.yF)())}),[n]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(w.q,{children:(0,E.jsx)("title",{children:"Your Contacts"})}),(0,E.jsxs)(U,{children:[(0,E.jsx)(X,{children:"Phonebook"}),(0,E.jsx)(R,{}),(0,E.jsx)(nn,{children:"Contacts"}),(0,E.jsxs)(W,{children:[(0,E.jsx)(en,{children:"Find contacts by name"}),(0,E.jsx)(Q,{}),(0,E.jsx)(H,{})]})]})]})}}}]);
//# sourceMappingURL=826.dcff527a.chunk.js.map