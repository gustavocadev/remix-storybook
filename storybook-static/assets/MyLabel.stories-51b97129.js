import{j as _}from"./jsx-runtime-e6a661ac.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";const s=({label:t,size:x,allCaps:L,color:v="text-tertiary",fontColor:o})=>_("span",{className:`${x} ${v} label`,style:{textTransform:L?"uppercase":"none",color:o||""},children:t}),S=s;try{s.displayName="MyLabel",s.__docgenInfo={description:`AllCaps: boolean,
color: text-primary | text-secondary | text-tertiary
fontColor: string, text del span`,displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"Label size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"Capitalize all text",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"text-tertiary"},description:"Color of the text",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:{value:"#000"},description:"Custom color of the text",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const q={title:"Example/MyLabel",component:S,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps",allCaps:!1,size:"normal"}},r={args:{label:"Secondary Label"}},l={args:{label:"Custom Label"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var i,u,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'All Caps',
    allCaps: false,
    size: 'normal'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,f,g;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom Label'
  }
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,A as __namedExportsOrder,q as default};
//# sourceMappingURL=MyLabel.stories-51b97129.js.map
