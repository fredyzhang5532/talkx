var f=(s,a,r)=>new Promise((c,t)=>{var i=e=>{try{o(r.next(e))}catch(n){t(n)}},d=e=>{try{o(r.throw(e))}catch(n){t(n)}},o=e=>e.done?c(e.value):Promise.resolve(e.value).then(i,d);o((r=r.apply(s,a)).next())});import{g as p,q as w,t as F,bk as b}from"./bundle.0.0.2.js?v=0.6036900755232442";function z({listDom:s=p(),scolllDom:a=p(),bottomH:r=50,type:c="bottom"}={}){const t=p(0),i=[],d=l=>{o(),i.push(l)},o=()=>{s.value&&(t.value=parseFloat(getComputedStyle(s.value).height))},e=b(()=>{i.forEach(l=>l())},100);let n=0;const v=l=>{if((!s.value||!t.value)&&o(),a.value){const h=parseFloat(getComputedStyle(a.value).height),u=l.target.scrollTop,g=h-(t.value+u);(c=="bottom"&&u>n&&g<r||c==="top"&&u<n&&u<50)&&e(),n=u}};return w(()=>f(this,null,function*(){window.addEventListener("resize",o),o()})),F(()=>{window.removeEventListener("resize",o)}),{listDom:s,scolllDom:a,wrapperH:t,scroll:v,addScrollFun:d}}export{z as u};
