import{c as I,r as B,a as o,o as s,b as g,d as i,e as t,w as l,u as a,i as v,F as V,f as b,g as d,v as p,s as r,h as _,j as G,k as K,l as H,t as S,m as w,n as Y,E as Z,p as $,q as ee}from"./index-4a944b7c.js";import{_ as te}from"./_plugin-vue_export-helper-c27b6911.js";const le=C=>($("data-v-8815df1e"),C=C(),ee(),C),ne={class:"main_page-container"},oe=le(()=>i("span",null,"Разделы",-1)),ae={class:"page"},se={class:"auth-page__header-content"},ue={class:"page-title"},ie={class:"page-router"},ce={href:"/home/news"},re={class:"drawer-content"},_e={class:"drawer-content__field"},de=["href"],pe=["href"],me={__name:"Home",setup(C){const R=I(()=>{const f=b.options.routes[0].children[0].children.slice(0,6),n=b.options.routes[0].children[0].children.slice(6);return{links:f,linksParts:n}}),N=f=>I(()=>{r.commit("routerGo",f)}).value;let c=B(!1),u=B(""),m=B(!1);function A(f){f!=="fastRequest"&&N(f)}function k(){u.value?alert("in development"):Z({type:"warning",title:"Внимание",message:"Вы не ввели артикул",duration:5e3,showClose:!0})}return(f,n)=>{const q=o("el-image"),D=o("House"),y=o("el-icon"),x=o("el-menu-item"),U=o("el-input"),M=o("el-button"),F=o("Search"),P=o("Grid"),L=o("el-menu-item-group"),j=o("el-sub-menu"),z=o("el-menu"),E=o("el-scrollbar"),O=o("el-page-header"),T=o("el-card"),J=o("router-view"),Q=o("el-divider"),W=o("el-drawer"),X=o("el-dialog");return s(),g(V,null,[i("div",ne,[t(E,{class:"el-scrollbar-custom","max-height":"100vh"},{default:l(()=>[d(t(z,{class:"el-menu-custom","default-active":a(b).currentRoute.value.path,"default-openeds":[a(r).state.defaultMenuOpened?"1":""],ellipsis:!1,collapse:a(r).state.isMenuCollapse,onSelect:A},{default:l(()=>[t(x,{index:"news"},{default:l(()=>[a(r).state.isMenuCollapse?(s(),_(y,{key:1},{default:l(()=>[t(D)]),_:1})):(s(),_(q,{key:0,class:"menu__item-logo-picture",src:"/logo.png",fit:"scale-down"}))]),_:1}),a(r).state.isMenuCollapse?(s(),_(x,{key:1,index:"fastRequest",onClick:n[1]||(n[1]=e=>v(m)?m.value=!0:m=!0)},{default:l(()=>[t(y,null,{default:l(()=>[t(F)]),_:1})]),_:1})):(s(),_(x,{key:0,index:"fastRequest"},{default:l(()=>[t(U,{class:"el-input-menu__custom",placeholder:"Быстрый запрос",modelValue:a(u),"onUpdate:modelValue":n[0]||(n[0]=e=>v(u)?u.value=e:u=e),onKeyup:G(k,["enter"])},null,8,["modelValue","onKeyup"]),t(M,{class:"menu__item-fast_request-button",icon:"Search",link:"",onClick:k})]),_:1})),(s(!0),g(V,null,K(R.value.links,(e,h)=>d((s(),_(x,{key:h,index:e.path},{default:l(()=>[d(t(y,null,{default:l(()=>[(s(),_(H(e.meta.icon)))]),_:2},1536),[[p,e.meta.icon]]),i("span",null,S(e.meta.title),1)]),_:2},1032,["index"])),[[p,e.meta.isShowMenu]])),128)),t(j,{index:"1"},{title:l(()=>[t(y,null,{default:l(()=>[t(P)]),_:1}),oe]),default:l(()=>[t(L,null,{default:l(()=>[(s(!0),g(V,null,K(R.value.linksParts,(e,h)=>(s(),_(x,{key:h,index:e.path},{default:l(()=>[w(S(e.meta.title),1)]),_:2},1032,["index"]))),128))]),_:1})]),_:1})]),_:1},8,["default-active","default-openeds","collapse"]),[[p,a(r).state.isAuth]])]),_:1}),t(E,{"max-height":"100vh",native:""},{default:l(()=>[i("div",ae,[d(t(O,{class:"mobile-page__header",title:"Меню",icon:"Expand",onBack:n[2]||(n[2]=e=>v(c)?c.value=!a(c):c=!a(c))},{content:l(()=>[t(q,{class:"page__header-logo-picture",src:"/logo.png"})]),_:1},512),[[p,a(r).state.isAuth]]),d(t(T,{class:"auth-page__header","body-style":"background: rgb(63,107,183);"},{default:l(()=>[i("div",se,[t(q,{src:"/logo.png",fit:"scale-down"}),t(M,{class:"auth-page__header-content--button",link:"",icon:"User",onClick:n[3]||(n[3]=e=>a(r).commit("routerGo","/auth"))},{default:l(()=>[w(" Войти ")]),_:1})])]),_:1},512),[[p,!a(r).state.isAuth]]),i("h1",ue,S(a(b).currentRoute.value.meta.title),1),i("div",ie,[t(J)])])]),_:1})]),t(W,{class:"el-drawer-custom",modelValue:a(c),"onUpdate:modelValue":n[5]||(n[5]=e=>v(c)?c.value=e:c=e),direction:"ltr",title:"Меню",style:{"min-width":"300px"}},{header:l(()=>[i("a",ce,[t(q,{src:"/logo-stroke.png"})])]),default:l(()=>[i("div",re,[i("div",_e,[t(U,{placeholder:"Введите артикул",modelValue:a(u),"onUpdate:modelValue":n[4]||(n[4]=e=>v(u)?u.value=e:u=e),onKeyup:G(k,["enter"])},null,8,["modelValue","onKeyup"]),t(M,{icon:"Search",onClick:k})]),(s(!0),g(V,null,K(R.value.links,(e,h)=>d((s(),g("a",{class:"drawer-content__link",key:h,href:e.path,style:Y({color:e.path===a(b).currentRoute.value.path?"var(--el-color-primary)":"currentcolor"})},[d(t(y,null,{default:l(()=>[(s(),_(H(e.meta.icon)))]),_:2},1536),[[p,e.meta.icon]]),w(" "+S(e.meta.title),1)],12,de)),[[p,e.meta.isShowMenu]])),128)),t(Q,{"content-position":"left"},{default:l(()=>[w("Разделы")]),_:1}),(s(!0),g(V,null,K(R.value.linksParts,(e,h)=>(s(),g("a",{class:"drawer-content__link",key:h,href:e.path},[d(t(y,null,{default:l(()=>[(s(),_(H(e.meta.icon)))]),_:2},1536),[[p,e.meta.icon]]),w(" "+S(e.meta.title),1)],8,pe))),128))])]),_:1},8,["modelValue"]),t(X,{modelValue:a(m),"onUpdate:modelValue":n[7]||(n[7]=e=>v(m)?m.value=e:m=e),"align-center":"","append-to-body":"",width:"400",title:"Быстрый запрос по артикулу"},{default:l(()=>[t(U,{placeholder:"Введите артикул",modelValue:a(u),"onUpdate:modelValue":n[6]||(n[6]=e=>v(u)?u.value=e:u=e),onKeyup:G(k,["enter"])},null,8,["modelValue","onKeyup"]),t(M,{icon:"Search",style:{width:"100%","margin-top":"10px"},onClick:k},{default:l(()=>[w(" Запросить ")]),_:1})]),_:1},8,["modelValue"])],64)}}},ge=te(me,[["__scopeId","data-v-8815df1e"]]);export{ge as default};
