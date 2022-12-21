import{O as x,u as C,g as m,a,w as d,o as u,d as t,b as o,F as w,D as S,e as _,n as $,t as V,f as N,h as j,C as B}from"./app-c187b5f3.js";import{_ as n,a as F,b as g}from"./TextInput-cb9bb7ec.js";import{_ as D,a as E}from"./SecondaryButton-45540225.js";import{_ as U}from"./PrimaryButton-671b2a5f.js";import{_ as A}from"./Checkbox-29d60762.js";const M={class:"space-y-6"},O=["onSubmit"],q=t("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Add role ",-1),z={class:"my-6 space-y-4"},L={class:"flex justify-start items-center space-x-2 mt-2"},P={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2"},R=["id","value"],T={class:"flex justify-end"},Q={__name:"Create",props:{show:Boolean,permissions:Object},emits:["close"],setup(h,{emit:c}){const i=h,r=x({multipleSelect:!1}),e=C({name:"",guard_name:"web",permissions:[]}),p=()=>{e.post(route("role.store"),{preserveScroll:!0,onSuccess:()=>{c("close"),e.reset(),r.multipleSelect=!1},onError:()=>null,onFinish:()=>null})},v=f=>{f.target.checked===!1?e.permissions=[]:i.permissions.forEach(s=>{e.permissions.push(s.id)})},y=()=>{i.permissions.length==e.permissions.length?r.multipleSelect=!0:r.multipleSelect=!1};return(f,s)=>(u(),m("section",M,[a(D,{show:i.show,onClose:s[4]||(s[4]=l=>c("close"))},{default:d(()=>[t("form",{class:"p-6",onSubmit:N(p,["prevent"])},[q,t("div",z,[t("div",null,[a(n,{for:"name",value:"Name"}),a(F,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:o(e).name,"onUpdate:modelValue":s[0]||(s[0]=l=>o(e).name=l),required:"",placeholder:"Role Name"},null,8,["modelValue"]),a(g,{class:"mt-2",message:o(e).errors.name},null,8,["message"])]),t("div",null,[a(n,{value:"Permission"}),a(g,{class:"mt-2",message:o(e).errors.permissions},null,8,["message"]),t("div",L,[a(A,{id:"permission-all",checked:r.multipleSelect,"onUpdate:checked":s[1]||(s[1]=l=>r.multipleSelect=l),onChange:v},null,8,["checked"]),a(n,{for:"permission-all",value:"Check all"})]),t("div",P,[(u(!0),m(w,null,S(i.permissions,(l,k)=>(u(),m("div",{class:"flex items-center justify-start space-x-2",key:k},[j(t("input",{onChange:y,class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800",type:"checkbox",id:"permission_"+l.id,value:l.id,"onUpdate:modelValue":s[2]||(s[2]=b=>o(e).permissions=b)},null,40,R),[[B,o(e).permissions]]),a(n,{for:"permission_"+l.id,value:l.name},null,8,["for","value"])]))),128))])])]),t("div",T,[a(E,{disabled:o(e).processing,onClick:s[3]||(s[3]=l=>c("close"))},{default:d(()=>[_(" Close ")]),_:1},8,["disabled"]),a(U,{class:$(["ml-3",{"opacity-25":o(e).processing}]),disabled:o(e).processing,onClick:p},{default:d(()=>[_(V(o(e).processing?"Create...":"Create"),1)]),_:1},8,["class","disabled"])])],40,O)]),_:1},8,["show"])]))}};export{Q as default};
