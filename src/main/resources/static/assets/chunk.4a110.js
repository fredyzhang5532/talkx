var Ee=Object.defineProperty,Me=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var Be=(e,n,r)=>n in e?Ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,me=(e,n)=>{for(var r in n||(n={}))qe.call(n,r)&&Be(e,r,n[r]);if(Se)for(var r of Se(n))Le.call(n,r)&&Be(e,r,n[r]);return e},ve=(e,n)=>Me(e,He(n));var ie=(e,n,r)=>new Promise((o,i)=>{var l=m=>{try{p(r.next(m))}catch(v){i(v)}},b=m=>{try{p(r.throw(m))}catch(v){i(v)}},p=m=>m.done?o(m.value):Promise.resolve(m.value).then(l,b);p((r=r.apply(e,n)).next())});import{aw as cB,ax as c,ay as cE,ao as defineComponent,az as useConfig,aA as useStyle,aB as h,aC as createTheme,aD as commonLight,aE as buttonLight,aF as toHexaString,aG as rgba,aH as toHslaString,aI as rgb2hsl,aJ as toHsvaString,aK as rgb2hsv,aL as toRgbaString,aM as hsla,aN as hsl2rgb,aO as hsl2hsv,aP as hsva,aQ as hsv2rgb,aR as hsv2hsl,g as ref,c as computed,aS as on,aT as off,aU as createInjectionKey,i as inject,W as watchEffect,aV as toHexString,aW as toHslString,aX as toRgbString,aY as toHsvString,aZ as warn,a_ as fadeInScaleUpTransition,a$ as cM,b0 as useFormItem,b1 as useTheme,b2 as provide,b3 as toRef,b4 as useMergedState,a4 as watch,b5 as createKey,b6 as useThemeClass,b7 as isMounted,b8 as getPreciseEventTarget,b9 as Transition,Y as withDirectives,ba as clickoutside,bb as call,ae as NButton,G as nextTick,bc as insideModal,bd as insidePopover,be as onBeforeUpdate,bf as onBeforeUnmount,bg as resolveSlot,y as default_friend_avatar,bh as isInteger,_ as _export_sfc,o as openBlock,b as createBlock,D as withCtx,e as createBaseVNode,A as toDisplayString,v as unref,k as useMessage,q as onMounted,f as createVNode,z as createTextVNode,a as createElementBlock,x as renderList,F as Fragment,d as createCommentVNode,bi as mergeProps,bj as systemPrompt_url,bk as debance,C as normalizeStyle,w as normalizeClass,Z as vShow,bl as base64ToFile,bm as uploadImg,h as useRoute,j as useRouter,l as useChatStore,a2 as useGlobalStore,n as getCurrentInstance,t as onUnmounted,ah as routerBack,bn as updateFriend,bo as createFriend,bp as queryFriend}from"./bundle.0.0.2.js?v=0.11238350990833812";import{u as useAdjustedTo,V as VBinder,a as VTarget,b as VFollower,N as NPopover}from"./chunk.4a123.js";import{N as NFormItem,a as NSelect,b as NForm,c as NTabs,d as NTabPane}from"./chunk.4a149.js";import{i as inputLight,N as NInput}from"./chunk.4a131.js";import{U as Upload}from"./chunk.4a129.js";import{u as useLocale}from"./chunk.4a139.js";import"./chunk.4a150.js";import"./chunk.4a134.js";import"./chunk.4a127.js";const style$2=cB("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[c(">",[cB("input",[c("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),c("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),cB("button",[c("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[cE("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),c("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[cE("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),c("*",[c("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[c(">",[cB("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),cB("base-selection",[cB("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),cB("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),cE("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),c("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[c(">",[cB("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),cB("base-selection",[cB("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),cB("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),cE("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),inputGroupProps={},NInputGroup=defineComponent({name:"InputGroup",props:inputGroupProps,setup(e){const{mergedClsPrefixRef:n}=useConfig(e);return useStyle("-input-group",style$2,n),{mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-input-group`},this.$slots)}});function self$1(e){const{fontSize:n,boxShadow2:r,popoverColor:o,textColor2:i,borderRadius:l,borderColor:b,heightSmall:p,heightMedium:m,heightLarge:v,fontSizeSmall:k,fontSizeMedium:z,fontSizeLarge:C,dividerColor:T}=e;return{panelFontSize:n,boxShadow:r,color:o,textColor:i,borderRadius:l,border:`1px solid ${b}`,heightSmall:p,heightMedium:m,heightLarge:v,fontSizeSmall:k,fontSizeMedium:z,fontSizeLarge:C,dividerColor:T}}const colorPickerLight=createTheme({name:"ColorPicker",common:commonLight,peers:{Input:inputLight,Button:buttonLight},self:self$1}),colorPickerLight$1=colorPickerLight;function deriveDefaultValue(e,n){switch(e[0]){case"hex":return n?"#000000FF":"#000000";case"rgb":return n?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return n?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return n?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function getModeFromValue(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function normalizeHue(e){return e=Math.round(e),e>=360?359:e<0?0:e}function normalizeAlpha(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const convert={rgb:{hex(e){return toHexaString(rgba(e))},hsl(e){const[n,r,o,i]=rgba(e);return toHslaString([...rgb2hsl(n,r,o),i])},hsv(e){const[n,r,o,i]=rgba(e);return toHsvaString([...rgb2hsv(n,r,o),i])}},hex:{rgb(e){return toRgbaString(rgba(e))},hsl(e){const[n,r,o,i]=rgba(e);return toHslaString([...rgb2hsl(n,r,o),i])},hsv(e){const[n,r,o,i]=rgba(e);return toHsvaString([...rgb2hsv(n,r,o),i])}},hsl:{hex(e){const[n,r,o,i]=hsla(e);return toHexaString([...hsl2rgb(n,r,o),i])},rgb(e){const[n,r,o,i]=hsla(e);return toRgbaString([...hsl2rgb(n,r,o),i])},hsv(e){const[n,r,o,i]=hsla(e);return toHsvaString([...hsl2hsv(n,r,o),i])}},hsv:{hex(e){const[n,r,o,i]=hsva(e);return toHexaString([...hsv2rgb(n,r,o),i])},rgb(e){const[n,r,o,i]=hsva(e);return toRgbaString([...hsv2rgb(n,r,o),i])},hsl(e){const[n,r,o,i]=hsva(e);return toHslaString([...hsv2hsl(n,r,o),i])}}};function convertColor(e,n,r){return r=r||getModeFromValue(e),r?r===n?e:convert[r][n](e):null}const HANDLE_SIZE$2="12px",HANDLE_SIZE_NUM$1=12,RADIUS$2="6px",AlphaSlider=defineComponent({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const n=ref(null);function r(l){!n.value||!e.rgba||(on("mousemove",document,o),on("mouseup",document,i),o(l))}function o(l){const{value:b}=n;if(!b)return;const{width:p,left:m}=b.getBoundingClientRect(),v=(l.clientX-m)/(p-HANDLE_SIZE_NUM$1);e.onUpdateAlpha(normalizeAlpha(v))}function i(){var l;off("mousemove",document,o),off("mouseup",document,i),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:n,railBackgroundImage:computed(()=>{const{rgba:l}=e;return l?`linear-gradient(to right, rgba(${l[0]}, ${l[1]}, ${l[2]}, 0) 0%, rgba(${l[0]}, ${l[1]}, ${l[2]}, 1) 100%)`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:HANDLE_SIZE$2,borderRadius:RADIUS$2},onMousedown:this.handleMouseDown},h("div",{style:{borderRadius:RADIUS$2,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},h("div",{class:`${e}-color-picker-checkboard`}),h("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&h("div",{style:{position:"absolute",left:RADIUS$2,right:RADIUS$2,top:0,bottom:0}},h("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${RADIUS$2})`,borderRadius:RADIUS$2,width:HANDLE_SIZE$2,height:HANDLE_SIZE$2}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:toRgbaString(this.rgba),borderRadius:RADIUS$2,width:HANDLE_SIZE$2,height:HANDLE_SIZE$2}}))))}}),colorPickerInjectionKey=createInjectionKey("n-color-picker");function normalizeRgbUnit(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function normalizeHueUnit(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function normalizeSlvUnit(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function normalizeHexaUnit(e){const n=e.trim();return/^#[0-9a-fA-F]+$/.test(n)?[4,5,7,9].includes(n.length):!1}function normalizeAlphaUnit(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const inputThemeOverrides={paddingSmall:"0 4px"},ColorInputUnit=defineComponent({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const n=ref(""),{themeRef:r}=inject(colorPickerInjectionKey,null);watchEffect(()=>{n.value=o()});function o(){const{value:b}=e;if(b===null)return"";const{label:p}=e;return p==="HEX"?b:p==="A"?`${Math.floor(b*100)}%`:String(Math.floor(b))}function i(b){n.value=b}function l(b){let p,m;switch(e.label){case"HEX":m=normalizeHexaUnit(b),m&&e.onUpdateValue(b),n.value=o();break;case"H":p=normalizeHueUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break;case"S":case"L":case"V":p=normalizeSlvUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break;case"A":p=normalizeAlphaUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break;case"R":case"G":case"B":p=normalizeRgbUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break}}return{mergedTheme:r,inputValue:n,handleInputChange:l,handleInputUpdateValue:i}},render(){const{mergedTheme:e}=this;return h(NInput,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:inputThemeOverrides,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),ColorInput=defineComponent({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(n,r){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?toHexaString:toHexString)(r));return}let i;switch(e.valueArr===null?i=[0,0,0,0]:i=Array.from(e.valueArr),e.mode){case"hsv":i[n]=r,e.onUpdateValue((o?toHsvaString:toHsvString)(i));break;case"rgb":i[n]=r,e.onUpdateValue((o?toRgbaString:toRgbString)(i));break;case"hsl":i[n]=r,e.onUpdateValue((o?toHslaString:toHslString)(i));break}}}},render(){const{clsPrefix:e,modes:n}=this;return h("div",{class:`${e}-color-picker-input`},h("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:n.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),h(NInputGroup,null,{default:()=>{const{mode:r,valueArr:o,showAlpha:i}=this;if(r==="hex"){let l=null;try{l=o===null?null:(i?toHexaString:toHexString)(o)}catch(b){}return h(ColorInputUnit,{label:"HEX",showAlpha:i,value:l,onUpdateValue:b=>{this.handleUnitUpdateValue(0,b)}})}return(r+(i?"a":"")).split("").map((l,b)=>h(ColorInputUnit,{label:l.toUpperCase(),value:o===null?null:o[b],onUpdateValue:p=>{this.handleUnitUpdateValue(b,p)}}))}}))}});function normalizeColor(e,n){if(n==="hsv"){const[r,o,i,l]=hsva(e);return toRgbaString([...hsv2rgb(r,o,i),l])}return e}function getHexFromName(e){const n=document.createElement("canvas").getContext("2d");return n?(n.fillStyle=e,n.fillStyle):"#000000"}const ColorPickerSwatches=defineComponent({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const n=computed(()=>e.swatches.map(l=>{const b=getModeFromValue(l);return{value:l,mode:b,legalValue:normalizeColor(l,b)}}));function r(l){const{mode:b}=e;let{value:p,mode:m}=l;return m||(m="hex",/^[a-zA-Z]+$/.test(p)?p=getHexFromName(p):(warn("color-picker",`color ${p} in swatches is invalid.`),p="#000000")),m===b?p:convertColor(p,b,m)}function o(l){e.onUpdateColor(r(l))}function i(l,b){l.key==="Enter"&&o(b)}return{parsedSwatchesRef:n,handleSwatchSelect:o,handleSwatchKeyDown:i}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(n=>h("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(n)},onKeydown:r=>{this.handleSwatchKeyDown(r,n)}},h("div",{class:`${e}-color-picker-swatch__fill`,style:{background:n.legalValue}}))))}}),ColorPickerTrigger=defineComponent({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:n,renderLabelRef:r}=inject(colorPickerInjectionKey,null);return()=>{const{hsla:o,value:i,clsPrefix:l,onClick:b,disabled:p}=e,m=n.label||r.value;return h("div",{class:[`${l}-color-picker-trigger`,p&&`${l}-color-picker-trigger--disabled`],onClick:p?void 0:b},h("div",{class:`${l}-color-picker-trigger__fill`},h("div",{class:`${l}-color-picker-checkboard`}),h("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?toHslaString(o):""}}),i&&o?h("div",{class:`${l}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},m?m(i):i):null))}}}),ColorPreview=defineComponent({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const n=getModeFromValue(e);return!!(!e||n&&n!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function n(r){var o;const i=r.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,convertColor(i.toUpperCase(),e.mode,"hex")),r.stopPropagation()}return{handleChange:n}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-preview__preview`},h("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),h("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),HANDLE_SIZE$1="12px",HANDLE_SIZE_NUM=12,RADIUS$1="6px",RADIUS_NUM=6,GRADIENT="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",HueSlider=defineComponent({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const n=ref(null);function r(l){n.value&&(on("mousemove",document,o),on("mouseup",document,i),o(l))}function o(l){const{value:b}=n;if(!b)return;const{width:p,left:m}=b.getBoundingClientRect(),v=normalizeHue((l.clientX-m-RADIUS_NUM)/(p-HANDLE_SIZE_NUM)*360);e.onUpdateHue(v)}function i(){var l;off("mousemove",document,o),off("mouseup",document,i),(l=e.onComplete)===null||l===void 0||l.call(e)}return{railRef:n,handleMouseDown:r}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-slider`,style:{height:HANDLE_SIZE$1,borderRadius:RADIUS$1}},h("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:GRADIENT,height:HANDLE_SIZE$1,borderRadius:RADIUS$1,position:"relative"},onMousedown:this.handleMouseDown},h("div",{style:{position:"absolute",left:RADIUS$1,right:RADIUS$1,top:0,bottom:0}},h("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${RADIUS$1})`,borderRadius:RADIUS$1,width:HANDLE_SIZE$1,height:HANDLE_SIZE$1}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:RADIUS$1,width:HANDLE_SIZE$1,height:HANDLE_SIZE$1}})))))}}),HANDLE_SIZE="12px",RADIUS="6px",Pallete=defineComponent({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const n=ref(null);function r(l){n.value&&(on("mousemove",document,o),on("mouseup",document,i),o(l))}function o(l){const{value:b}=n;if(!b)return;const{width:p,height:m,left:v,bottom:k}=b.getBoundingClientRect(),z=(k-l.clientY)/m,C=(l.clientX-v)/p,T=100*(C>1?1:C<0?0:C),L=100*(z>1?1:z<0?0:z);e.onUpdateSV(T,L)}function i(){var l;off("mousemove",document,o),off("mouseup",document,i),(l=e.onComplete)===null||l===void 0||l.call(e)}return{palleteRef:n,handleColor:computed(()=>{const{rgba:l}=e;return l?`rgb(${l[0]}, ${l[1]}, ${l[2]})`:""}),handleMouseDown:r}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},h("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),h("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&h("div",{class:`${e}-color-picker-handle`,style:{width:HANDLE_SIZE,height:HANDLE_SIZE,borderRadius:RADIUS,left:`calc(${this.displayedSv[0]}% - ${RADIUS})`,bottom:`calc(${this.displayedSv[1]}% - ${RADIUS})`}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:RADIUS,width:HANDLE_SIZE,height:HANDLE_SIZE}})))}}),style$1=c([cB("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),cB("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[fadeInScaleUpTransition(),cB("input",`
 text-align: center;
 `)]),cB("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[c("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),cB("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[cE("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),c("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),cB("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[cE("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),cB("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[cE("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[cM("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),cB("color-picker-preview",`
 display: flex;
 `,[cE("sliders",`
 flex: 1 0 auto;
 `),cE("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),cE("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),cE("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),cB("color-picker-input",`
 display: flex;
 align-items: center;
 `,[cB("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),cE("mode",`
 width: 72px;
 text-align: center;
 `)]),cB("color-picker-control",`
 padding: 12px;
 `),cB("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[cB("button","margin-left: 8px;")]),cB("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[cE("value",`
 white-space: nowrap;
 position: relative;
 `),cE("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),cM("disabled","cursor: not-allowed"),cB("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[c("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),cB("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[cB("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[cE("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),c("&:focus",`
 outline: none;
 `,[cE("fill",[c("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),colorPickerProps=Object.assign(Object.assign({},useTheme.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:useAdjustedTo.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),NColorPicker=defineComponent({name:"ColorPicker",props:colorPickerProps,slots:Object,setup(e,{slots:n}){const r=ref(null);let o=null;const i=useFormItem(e),{mergedSizeRef:l,mergedDisabledRef:b}=i,{localeRef:p}=useLocale("global"),{mergedClsPrefixRef:m,namespaceRef:v,inlineThemeDisabled:k}=useConfig(e),z=useTheme("ColorPicker","-color-picker",style$1,colorPickerLight$1,e,m);provide(colorPickerInjectionKey,{themeRef:z,renderLabelRef:toRef(e,"renderLabel"),colorPickerSlots:n});const C=ref(e.defaultShow),T=useMergedState(toRef(e,"show"),C);function L(u){const{onUpdateShow:S,"onUpdate:show":R}=e;S&&call(S,u),R&&call(R,u),C.value=u}const{defaultValue:G}=e,W=ref(G===void 0?deriveDefaultValue(e.modes,e.showAlpha):G),B=useMergedState(toRef(e,"value"),W),N=ref([B.value]),g=ref(0),U=computed(()=>getModeFromValue(B.value)),{modes:H}=e,M=ref(getModeFromValue(B.value)||H[0]||"rgb");function O(){const{modes:u}=e,{value:S}=M,R=u.findIndex(F=>F===S);~R?M.value=u[(R+1)%u.length]:M.value="rgb"}let I,D,j,Y,J,w,a,s;const $=computed(()=>{const{value:u}=B;if(!u)return null;switch(U.value){case"hsv":return hsva(u);case"hsl":return[I,D,j,s]=hsla(u),[...hsl2hsv(I,D,j),s];case"rgb":case"hex":return[J,w,a,s]=rgba(u),[...rgb2hsv(J,w,a),s]}}),V=computed(()=>{const{value:u}=B;if(!u)return null;switch(U.value){case"rgb":case"hex":return rgba(u);case"hsv":return[I,D,Y,s]=hsva(u),[...hsv2rgb(I,D,Y),s];case"hsl":return[I,D,j,s]=hsla(u),[...hsl2rgb(I,D,j),s]}}),X=computed(()=>{const{value:u}=B;if(!u)return null;switch(U.value){case"hsl":return hsla(u);case"hsv":return[I,D,Y,s]=hsva(u),[...hsv2hsl(I,D,Y),s];case"rgb":case"hex":return[J,w,a,s]=rgba(u),[...rgb2hsl(J,w,a),s]}}),se=computed(()=>{switch(M.value){case"rgb":case"hex":return V.value;case"hsv":return $.value;case"hsl":return X.value}}),ee=ref(0),te=ref(1),oe=ref([0,0]);function ae(u,S){const{value:R}=$,F=ee.value,P=R?R[3]:1;oe.value=[u,S];const{showAlpha:t}=e;switch(M.value){case"hsv":E((t?toHsvaString:toHsvString)([F,u,S,P]),"cursor");break;case"hsl":E((t?toHslaString:toHslString)([...hsv2hsl(F,u,S),P]),"cursor");break;case"rgb":E((t?toRgbaString:toRgbString)([...hsv2rgb(F,u,S),P]),"cursor");break;case"hex":E((t?toHexaString:toHexString)([...hsv2rgb(F,u,S),P]),"cursor");break}}function pe(u){ee.value=u;const{value:S}=$;if(!S)return;const[,R,F,P]=S,{showAlpha:t}=e;switch(M.value){case"hsv":E((t?toHsvaString:toHsvString)([u,R,F,P]),"cursor");break;case"rgb":E((t?toRgbaString:toRgbString)([...hsv2rgb(u,R,F),P]),"cursor");break;case"hex":E((t?toHexaString:toHexString)([...hsv2rgb(u,R,F),P]),"cursor");break;case"hsl":E((t?toHslaString:toHslString)([...hsv2hsl(u,R,F),P]),"cursor");break}}function ge(u){switch(M.value){case"hsv":[I,D,Y]=$.value,E(toHsvaString([I,D,Y,u]),"cursor");break;case"rgb":[J,w,a]=V.value,E(toRgbaString([J,w,a,u]),"cursor");break;case"hex":[J,w,a]=V.value,E(toHexaString([J,w,a,u]),"cursor");break;case"hsl":[I,D,j]=X.value,E(toHslaString([I,D,j,u]),"cursor");break}te.value=u}function E(u,S){S==="cursor"?o=u:o=null;const{nTriggerFormChange:R,nTriggerFormInput:F}=i,{onUpdateValue:P,"onUpdate:value":t}=e;P&&call(P,u),t&&call(t,u),R(),F(),W.value=u}function be(u){E(u,"input"),nextTick(re)}function re(u=!0){const{value:S}=B;if(S){const{nTriggerFormChange:R,nTriggerFormInput:F}=i,{onComplete:P}=e;P&&P(S);const{value:t}=N,{value:d}=g;u&&(t.splice(d+1,t.length,S),g.value=d+1),R(),F()}}function ce(){const{value:u}=g;u-1<0||(E(N.value[u-1],"input"),re(!1),g.value=u-1)}function xe(){const{value:u}=g;u<0||u+1>=N.value.length||(E(N.value[u+1],"input"),re(!1),g.value=u+1)}function ye(){E(null,"input");const{onClear:u}=e;u&&u(),L(!1)}function de(){const{value:u}=B,{onConfirm:S}=e;S&&S(u),L(!1)}const ue=computed(()=>g.value>=1),fe=computed(()=>{const{value:u}=N;return u.length>1&&g.value<u.length-1});watch(T,u=>{u||(N.value=[B.value],g.value=0)}),watchEffect(()=>{if(!(o&&o===B.value)){const{value:u}=$;u&&(ee.value=u[0],te.value=u[3],oe.value=[u[1],u[2]])}o=null});const he=computed(()=>{const{value:u}=l,{common:{cubicBezierEaseInOut:S},self:{textColor:R,color:F,panelFontSize:P,boxShadow:t,border:d,borderRadius:f,dividerColor:_,[createKey("height",u)]:A,[createKey("fontSize",u)]:q}}=z.value;return{"--n-bezier":S,"--n-text-color":R,"--n-color":F,"--n-panel-font-size":P,"--n-font-size":q,"--n-box-shadow":t,"--n-border":d,"--n-border-radius":f,"--n-height":A,"--n-divider-color":_}}),Q=k?useThemeClass("color-picker",computed(()=>l.value[0]),he,e):void 0;function _e(){var u;const{value:S}=V,{value:R}=ee,{internalActions:F,modes:P,actions:t}=e,{value:d}=z,{value:f}=m;return h("div",{class:[`${f}-color-picker-panel`,Q==null?void 0:Q.themeClass.value],onDragstart:_=>{_.preventDefault()},style:k?void 0:he.value},h("div",{class:`${f}-color-picker-control`},h(Pallete,{clsPrefix:f,rgba:S,displayedHue:R,displayedSv:oe.value,onUpdateSV:ae,onComplete:re}),h("div",{class:`${f}-color-picker-preview`},h("div",{class:`${f}-color-picker-preview__sliders`},h(HueSlider,{clsPrefix:f,hue:R,onUpdateHue:pe,onComplete:re}),e.showAlpha?h(AlphaSlider,{clsPrefix:f,rgba:S,alpha:te.value,onUpdateAlpha:ge,onComplete:re}):null),e.showPreview?h(ColorPreview,{clsPrefix:f,mode:M.value,color:V.value&&toHexString(V.value),onUpdateColor:_=>{E(_,"input")}}):null),h(ColorInput,{clsPrefix:f,showAlpha:e.showAlpha,mode:M.value,modes:P,onUpdateMode:O,value:B.value,valueArr:se.value,onUpdateValue:be}),((u=e.swatches)===null||u===void 0?void 0:u.length)&&h(ColorPickerSwatches,{clsPrefix:f,mode:M.value,swatches:e.swatches,onUpdateColor:_=>{E(_,"input")}})),t!=null&&t.length?h("div",{class:`${f}-color-picker-action`},t.includes("confirm")&&h(NButton,{size:"small",onClick:de,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button},{default:()=>p.value.confirm}),t.includes("clear")&&h(NButton,{size:"small",onClick:ye,disabled:!B.value,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button},{default:()=>p.value.clear})):null,n.action?h("div",{class:`${f}-color-picker-action`},{default:n.action}):F?h("div",{class:`${f}-color-picker-action`},F.includes("undo")&&h(NButton,{size:"small",onClick:ce,disabled:!ue.value,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button},{default:()=>p.value.undo}),F.includes("redo")&&h(NButton,{size:"small",onClick:xe,disabled:!fe.value,theme:d.peers.Button,themeOverrides:d.peerOverrides.Button},{default:()=>p.value.redo})):null)}return{mergedClsPrefix:m,namespace:v,selfRef:r,hsla:X,rgba:V,mergedShow:T,mergedDisabled:b,isMounted:isMounted(),adjustedTo:useAdjustedTo(e),mergedValue:B,handleTriggerClick(){L(!0)},handleClickOutside(u){var S;!((S=r.value)===null||S===void 0)&&S.contains(getPreciseEventTarget(u))||L(!1)},renderPanel:_e,cssVars:k?void 0:he,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender}},render(){const{mergedClsPrefix:e,onRender:n}=this;return n==null||n(),h("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},h(VBinder,null,{default:()=>[h(VTarget,null,{default:()=>h(ColorPickerTrigger,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),h(VFollower,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===useAdjustedTo.tdkey,to:this.adjustedTo},{default:()=>h(Transition,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?withDirectives(this.renderPanel(),[[clickoutside,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),sizeVariables={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};function self(e){const n="rgba(0, 0, 0, .85)",r="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:i,baseColor:l,cardColor:b,modalColor:p,popoverColor:m,borderRadius:v,fontSize:k,opacityDisabled:z}=e;return Object.assign(Object.assign({},sizeVariables),{fontSize:k,markFontSize:k,railColor:o,railColorHover:o,fillColor:i,fillColorHover:i,opacityDisabled:z,handleColor:"#FFF",dotColor:b,dotColorModal:p,dotColorPopover:m,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:r,indicatorTextColor:l,indicatorBorderRadius:v,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${i}`,dotBoxShadow:""})}const sliderLight={name:"Slider",common:commonLight,self},sliderLight$1=sliderLight,style=c([cB("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[cM("reverse",[cB("slider-handles",[cB("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),cB("slider-dots",[cB("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),cM("vertical",[cB("slider-handles",[cB("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),cB("slider-marks",[cB("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),cB("slider-dots",[cB("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),cM("vertical",`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[cB("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[cB("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),cB("slider-rail",`
 height: 100%;
 `,[cE("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),cM("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),cB("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[cB("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),cB("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[cB("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),cM("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[cB("slider-handle",`
 cursor: not-allowed;
 `)]),cM("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),c("&:hover",[cB("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[cE("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),cB("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),cM("active",[cB("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[cE("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),cB("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),cB("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[cB("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),cB("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[cE("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),cB("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[cB("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[cB("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[c("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),c("&:focus",[cB("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[c("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),cB("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[cM("transition-disabled",[cB("slider-dot","transition: none;")]),cB("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[cM("active","border: var(--n-dot-border-active);")])])]),cB("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[fadeInScaleUpTransition()]),cB("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[cM("top",`
 margin-bottom: 12px;
 `),cM("right",`
 margin-left: 12px;
 `),cM("bottom",`
 margin-top: 12px;
 `),cM("left",`
 margin-right: 12px;
 `),fadeInScaleUpTransition()]),insideModal(cB("slider",[cB("slider-dot","background-color: var(--n-dot-color-modal);")])),insidePopover(cB("slider",[cB("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function isTouchEvent(e){return window.TouchEvent&&e instanceof window.TouchEvent}function useRefs(){const e=new Map,n=r=>o=>{e.set(r,o)};return onBeforeUpdate(()=>{e.clear()}),[e,n]}const eventButtonLeft=0,sliderProps=Object.assign(Object.assign({},useTheme.props),{to:useAdjustedTo.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),NSlider=defineComponent({name:"Slider",props:sliderProps,slots:Object,setup(e){const{mergedClsPrefixRef:n,namespaceRef:r,inlineThemeDisabled:o}=useConfig(e),i=useTheme("Slider","-slider",style,sliderLight$1,e,n),l=ref(null),[b,p]=useRefs(),[m,v]=useRefs(),k=ref(new Set),z=useFormItem(e),{mergedDisabledRef:C}=z,T=computed(()=>{const{step:t}=e;if(Number(t)<=0||t==="mark")return 0;const d=t.toString();let f=0;return d.includes(".")&&(f=d.length-d.indexOf(".")-1),f}),L=ref(e.defaultValue),G=toRef(e,"value"),W=useMergedState(G,L),B=computed(()=>{const{value:t}=W;return(e.range?t:[t]).map(oe)}),N=computed(()=>B.value.length>2),g=computed(()=>e.placement===void 0?e.vertical?"right":"top":e.placement),U=computed(()=>{const{marks:t}=e;return t?Object.keys(t).map(Number.parseFloat):null}),H=ref(-1),M=ref(-1),O=ref(-1),I=ref(!1),D=ref(!1),j=computed(()=>{const{vertical:t,reverse:d}=e;return t?d?"top":"bottom":d?"right":"left"}),Y=computed(()=>{if(N.value)return;const t=B.value,d=ae(e.range?Math.min(...t):e.min),f=ae(e.range?Math.max(...t):t[0]),{value:_}=j;return e.vertical?{[_]:`${d}%`,height:`${f-d}%`}:{[_]:`${d}%`,width:`${f-d}%`}}),J=computed(()=>{const t=[],{marks:d}=e;if(d){const f=B.value.slice();f.sort((K,Z)=>K-Z);const{value:_}=j,{value:A}=N,{range:q}=e,ne=A?()=>!1:K=>q?K>=f[0]&&K<=f[f.length-1]:K<=f[0];for(const K of Object.keys(d)){const Z=Number(K);t.push({active:ne(Z),key:Z,label:d[K],style:{[_]:`${ae(Z)}%`}})}}return t});function w(t,d){const f=ae(t),{value:_}=j;return{[_]:`${f}%`,zIndex:d===H.value?1:0}}function a(t){return e.showTooltip||O.value===t||H.value===t&&I.value}function s(t){return I.value?!(H.value===t&&M.value===t):!0}function $(t){var d;~t&&(H.value=t,(d=b.get(t))===null||d===void 0||d.focus())}function V(){m.forEach((t,d)=>{a(d)&&t.syncPosition()})}function X(t){const{"onUpdate:value":d,onUpdateValue:f}=e,{nTriggerFormInput:_,nTriggerFormChange:A}=z;f&&call(f,t),d&&call(d,t),L.value=t,_(),A()}function se(t){const{range:d}=e;if(d){if(Array.isArray(t)){const{value:f}=B;t.join()!==f.join()&&X(t)}}else Array.isArray(t)||B.value[0]!==t&&X(t)}function ee(t,d){if(e.range){const f=B.value.slice();f.splice(d,1,t),se(f)}else se(t)}function te(t,d,f){const _=f!==void 0;f||(f=t-d>0?1:-1);const A=U.value||[],{step:q}=e;if(q==="mark"){const Z=E(t,A.concat(d),_?f:void 0);return Z?Z.value:d}if(q<=0)return d;const{value:ne}=T;let K;if(_){const Z=Number((d/q).toFixed(ne)),le=Math.floor(Z),we=Z>le?le:le-1,ke=Z<le?le:le+1;K=E(d,[Number((we*q).toFixed(ne)),Number((ke*q).toFixed(ne)),...A],f)}else{const Z=ge(t);K=E(t,[...A,Z])}return K?oe(K.value):d}function oe(t){return Math.min(e.max,Math.max(e.min,t))}function ae(t){const{max:d,min:f}=e;return(t-f)/(d-f)*100}function pe(t){const{max:d,min:f}=e;return f+(d-f)*t}function ge(t){const{step:d,min:f}=e;if(Number(d)<=0||d==="mark")return t;const _=Math.round((t-f)/d)*d+f;return Number(_.toFixed(T.value))}function E(t,d=U.value,f){if(!(d!=null&&d.length))return null;let _=null,A=-1;for(;++A<d.length;){const q=d[A]-t,ne=Math.abs(q);(f===void 0||q*f>0)&&(_===null||ne<_.distance)&&(_={index:A,distance:ne,value:d[A]})}return _}function be(t){const d=l.value;if(!d)return;const f=isTouchEvent(t)?t.touches[0]:t,_=d.getBoundingClientRect();let A;return e.vertical?A=(_.bottom-f.clientY)/_.height:A=(f.clientX-_.left)/_.width,e.reverse&&(A=1-A),pe(A)}function re(t){if(C.value||!e.keyboard)return;const{vertical:d,reverse:f}=e;switch(t.key){case"ArrowUp":t.preventDefault(),ce(d&&f?-1:1);break;case"ArrowRight":t.preventDefault(),ce(!d&&f?-1:1);break;case"ArrowDown":t.preventDefault(),ce(d&&f?1:-1);break;case"ArrowLeft":t.preventDefault(),ce(!d&&f?1:-1);break}}function ce(t){const d=H.value;if(d===-1)return;const{step:f}=e,_=B.value[d],A=Number(f)<=0||f==="mark"?_:_+f*t;ee(te(A,_,t>0?1:-1),d)}function xe(t){var d,f;if(C.value||!isTouchEvent(t)&&t.button!==eventButtonLeft)return;const _=be(t);if(_===void 0)return;const A=B.value.slice(),q=e.range?(f=(d=E(_,A))===null||d===void 0?void 0:d.index)!==null&&f!==void 0?f:-1:0;q!==-1&&(t.preventDefault(),$(q),ye(),ee(te(_,B.value[q]),q))}function ye(){I.value||(I.value=!0,e.onDragstart&&call(e.onDragstart),on("touchend",document,fe),on("mouseup",document,fe),on("touchmove",document,ue),on("mousemove",document,ue))}function de(){I.value&&(I.value=!1,e.onDragend&&call(e.onDragend),off("touchend",document,fe),off("mouseup",document,fe),off("touchmove",document,ue),off("mousemove",document,ue))}function ue(t){const{value:d}=H;if(!I.value||d===-1){de();return}const f=be(t);f!==void 0&&ee(te(f,B.value[d]),d)}function fe(){de()}function he(t){H.value=t,C.value||(O.value=t)}function Q(t){H.value===t&&(H.value=-1,de()),O.value===t&&(O.value=-1)}function _e(t){O.value=t}function u(t){O.value===t&&(O.value=-1)}watch(H,(t,d)=>void nextTick(()=>M.value=d)),watch(W,()=>{if(e.marks){if(D.value)return;D.value=!0,nextTick(()=>{D.value=!1})}nextTick(V)}),onBeforeUnmount(()=>{de()});const S=computed(()=>{const{self:{markFontSize:t,railColor:d,railColorHover:f,fillColor:_,fillColorHover:A,handleColor:q,opacityDisabled:ne,dotColor:K,dotColorModal:Z,handleBoxShadow:le,handleBoxShadowHover:we,handleBoxShadowActive:ke,handleBoxShadowFocus:Ce,dotBorder:Ne,dotBoxShadow:Ve,railHeight:De,railWidthVertical:Re,handleSize:Ie,dotHeight:$e,dotWidth:Ae,dotBorderRadius:ze,fontSize:Ue,dotBorderActive:Pe,dotColorPopover:Te},common:{cubicBezierEaseInOut:Fe}}=i.value;return{"--n-bezier":Fe,"--n-dot-border":Ne,"--n-dot-border-active":Pe,"--n-dot-border-radius":ze,"--n-dot-box-shadow":Ve,"--n-dot-color":K,"--n-dot-color-modal":Z,"--n-dot-color-popover":Te,"--n-dot-height":$e,"--n-dot-width":Ae,"--n-fill-color":_,"--n-fill-color-hover":A,"--n-font-size":Ue,"--n-handle-box-shadow":le,"--n-handle-box-shadow-active":ke,"--n-handle-box-shadow-focus":Ce,"--n-handle-box-shadow-hover":we,"--n-handle-color":q,"--n-handle-size":Ie,"--n-opacity-disabled":ne,"--n-rail-color":d,"--n-rail-color-hover":f,"--n-rail-height":De,"--n-rail-width-vertical":Re,"--n-mark-font-size":t}}),R=o?useThemeClass("slider",void 0,S,e):void 0,F=computed(()=>{const{self:{fontSize:t,indicatorColor:d,indicatorBoxShadow:f,indicatorTextColor:_,indicatorBorderRadius:A}}=i.value;return{"--n-font-size":t,"--n-indicator-border-radius":A,"--n-indicator-box-shadow":f,"--n-indicator-color":d,"--n-indicator-text-color":_}}),P=o?useThemeClass("slider-indicator",void 0,F,e):void 0;return{mergedClsPrefix:n,namespace:r,uncontrolledValue:L,mergedValue:W,mergedDisabled:C,mergedPlacement:g,isMounted:isMounted(),adjustedTo:useAdjustedTo(e),dotTransitionDisabled:D,markInfos:J,isShowTooltip:a,shouldKeepTooltipTransition:s,handleRailRef:l,setHandleRefs:p,setFollowerRefs:v,fillStyle:Y,getHandleStyle:w,activeIndex:H,arrifiedValues:B,followerEnabledIndexSet:k,handleRailMouseDown:xe,handleHandleFocus:he,handleHandleBlur:Q,handleHandleMouseEnter:_e,handleHandleMouseLeave:u,handleRailKeyDown:re,indicatorCssVars:o?void 0:F,indicatorThemeClass:P==null?void 0:P.themeClass,indicatorOnRender:P==null?void 0:P.onRender,cssVars:o?void 0:S,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender}},render(){var e;const{mergedClsPrefix:n,themeClass:r,formatTooltip:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${n}-slider`,r,{[`${n}-slider--disabled`]:this.mergedDisabled,[`${n}-slider--active`]:this.activeIndex!==-1,[`${n}-slider--with-mark`]:this.marks,[`${n}-slider--vertical`]:this.vertical,[`${n}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},h("div",{class:`${n}-slider-rail`},h("div",{class:`${n}-slider-rail__fill`,style:this.fillStyle}),this.marks?h("div",{class:[`${n}-slider-dots`,this.dotTransitionDisabled&&`${n}-slider-dots--transition-disabled`]},this.markInfos.map(i=>h("div",{key:i.key,class:[`${n}-slider-dot`,{[`${n}-slider-dot--active`]:i.active}],style:i.style}))):null,h("div",{ref:"handleRailRef",class:`${n}-slider-handles`},this.arrifiedValues.map((i,l)=>{const b=this.isShowTooltip(l);return h(VBinder,null,{default:()=>[h(VTarget,null,{default:()=>h("div",{ref:this.setHandleRefs(l),class:`${n}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":i,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(i,l),onFocus:()=>{this.handleHandleFocus(l)},onBlur:()=>{this.handleHandleBlur(l)},onMouseenter:()=>{this.handleHandleMouseEnter(l)},onMouseleave:()=>{this.handleHandleMouseLeave(l)}},resolveSlot(this.$slots.thumb,()=>[h("div",{class:`${n}-slider-handle`})]))}),this.tooltip&&h(VFollower,{ref:this.setFollowerRefs(l),show:b,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(l),teleportDisabled:this.adjustedTo===useAdjustedTo.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>h(Transition,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(l),onEnter:()=>{this.followerEnabledIndexSet.add(l)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(l)}},{default:()=>{var p;return b?((p=this.indicatorOnRender)===null||p===void 0||p.call(this),h("div",{class:[`${n}-slider-handle-indicator`,this.indicatorThemeClass,`${n}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof o=="function"?o(i):i)):null}})})]})})),this.marks?h("div",{class:`${n}-slider-marks`},this.markInfos.map(i=>h("div",{key:i.key,class:`${n}-slider-mark`,style:i.style},typeof i.label=="function"?i.label():i.label))):null))}}),formRef=ref(null),SourceType={plaza:1,created:2},defaultFormData={userFriendId:0,avatar:default_friend_avatar,cssAvatar:"",name:"",friendType:1,tag:"",intro:"",welcome:"",systemPrompt:"",contentPrompt:"",messageContextSize:32,friendSource:SourceType.created,conversationStart:[""],aliyunDashscopeWorkspaceId:"",aliyunDashscopeAppId:"",aliyunDashscopeApiKey:"",variables:"",openaiRequestBody:{maxTokens:1e3,temperature:1,topP:0,presencePenalty:0,frequencyPenalty:0}},formData=ref(JSON.parse(JSON.stringify(defaultFormData))),verify=(e,n)=>{let r=e;const{step:o,max:i,min:l}=n;if(o)if(isInteger(o)){const b=Math.floor(e/o);r=o*b}else{const b=String(o),[p,m]=b.split(".");let v=1;for(let C=0;C<m.length;C++)v*=10;const k=o*v,z=Math.floor(e*v/k);r=k*z/v}return i&&(r=r>i?i:r),l&&(r=r<l?l:r),r},config={messageContextSize:{label:"上下文数量",popover:"每次聊天发送消息时携带的历史消息数量越多，话题关联性就越高；反之，数量越少，关联性就越低。如果设置的消息数量超过模型的最大限制，系统会自动截取，以确保话题的正常进行。",attrs:{min:2,max:64,step:2},stepVerify:e=>verify(Number(e),config.messageContextSize.attrs)},openaiRequestBody:{maxTokens:{label:"最大回复数",popover:"生成内容的最大 token 数量。输入和生成的总长度受模型上下文长度的限制。",attrs:{min:100,max:2800,step:50},stepVerify:e=>verify(Number(e),config.openaiRequestBody.maxTokens.attrs)},temperature:{label:"随机性",popover:"生成内容的随机性，在0和2之间。较高的值如0.8会使输出更随机，而较低的值如0.2会使其更加集中和确定性。我们通常建议修改这个或者「词汇熟悉」，但不要同时修改两者。",attrs:{min:0,max:2,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.temperature.attrs)},topP:{label:"词汇属性",popover:"一种与随机性相对的方法，模型考虑的是具有 top_p 概率质量的标记的结果。因此，0.1 表示只考虑组成前 10% 概率质量的标记。我们通常建议修改这个或者「随机性」，但不要同时修改两者。",attrs:{min:0,max:1,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.topP.attrs)},presencePenalty:{label:"话题新鲜度",popover:"默认值为 0，值越大，越能够让Ai更好地控制新话题的引入，建议微调或不变。",attrs:{min:-2,max:2,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.presencePenalty.attrs)},frequencyPenalty:{label:"频率惩罚度",popover:"在-2.0和2.0之间的数字。正值根据文本中新标记的现有频率对其进行惩罚，从而降低模型重复相同行的可能性。",attrs:{min:-2,max:2,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.frequencyPenalty.attrs)}}},rules={name:{required:!0,message:" ",trigger:"blur"},aliyunDashscopeWorkspaceId:{required:()=>formData.value.friendType===3,message:" ",trigger:"blur"},aliyunDashscopeAppId:{required:()=>formData.value.friendType===3,message:" ",trigger:"blur"}},formDataClear=()=>{formData.value=JSON.parse(JSON.stringify(defaultFormData))},Popover_vue_vue_type_style_index_0_scoped_c95df1c2_lang="",_hoisted_1$5={class:"right_tip"},_sfc_main$6={__name:"Popover",props:["text"],setup(e){const n=e;return(r,o)=>(openBlock(),createBlock(unref(NPopover),{trigger:"hover",raw:""},{trigger:withCtx(()=>o[0]||(o[0]=[createBaseVNode("span",{class:"iconfont icon-wenhao"},null,-1)])),default:withCtx(()=>[createBaseVNode("div",_hoisted_1$5,toDisplayString(n.text),1)]),_:1}))}},Popover=_export_sfc(_sfc_main$6,[["__scopeId","data-v-c95df1c2"]]),FormComp_vue_vue_type_style_index_0_scoped_57a46553_lang="",_hoisted_1$4={class:"item_contet"},_hoisted_2$4={class:"item_contet"},_hoisted_3$2={class:"item_contet"},_hoisted_4$1={class:"item_contet"},_hoisted_5$1={class:"close"},_hoisted_6$1={class:"flex"},_hoisted_7$1={class:"flex"},_hoisted_8$1={class:"flex"},_hoisted_9$1={class:"flex"},_hoisted_10$1={class:"flex"},_hoisted_11$1={class:"flex"},_hoisted_12={key:1,class:"diver"},_hoisted_13={class:"item_contet"},_hoisted_14={key:3,class:"diver"},_hoisted_15={key:4},_hoisted_16={class:"item_contet"},_hoisted_17={class:"item_contet"},_hoisted_18={class:"item_contet"},_hoisted_19={class:"item_contet"},_hoisted_20={class:"close"},_hoisted_21={class:"footer flex"},_sfc_main$5={__name:"FormComp",props:["tags"],emits:["confirm","close"],setup(e,{expose:n,emit:r}){const o=useMessage(),i=inject("resize"),l=e,b=r,p=window.__talkx__.openUrl,m=[{label:"基础对话",value:1},{label:"GPTs (已过时)",value:2,disabled:!0},{label:"阿里云百炼应用",value:3}],v=ref([{text:""}]),k=ref([{}]);watch(()=>formData.value.variables,()=>{try{const w=JSON.parse(formData.value.variables||"{}");k.value=Object.entries(w).map(([a,s])=>({name:a,value:s}))||[]}catch(w){console.error("解析variables失败:",w),k.value=[]}},{immediate:!0});const C=(w,a)=>{},T=w=>{console.log("closeVariable",w),k.value.splice(w,1)},L=()=>{if(k.value.length>=10){o.warning("最多添加10个变量");return}k.value.push({name:"",value:""})},G=()=>{try{const w=JSON.parse(formData.value.variables||"[]");k.value=Object.entries(w).map(([a,s])=>({name:a,value:s}))}catch(w){k.value=[]}},W=(w,a)=>{const s=v.value.length;w&&a==s-1&&s<4&&v.value.push({text:""})},B=w=>{if(v.value.length<=1){o.warning("至少需要一个快速开始");return}v.value.splice(w,1)};watch(v,(w,a)=>{formData.value.conversationStart=w.filter(({text:s})=>s.trim()).map(({text:s})=>s)},{deep:!0});const N=()=>{v.value=formData.value.conversationStart.filter(w=>w).map(w=>({text:w})),v.value.length<4&&v.value.push({text:""})},g=()=>p(systemPrompt_url),U=computed(()=>l.tags.map(({name:w})=>({label:w,value:w}))||[]),H=debance(w=>w(),300),M=(w,a)=>{const[s,$]=a.split(".");let V=w;if(s&&$){const X=config[s][$].stepVerify;X&&H(()=>{formData.value[s][$]=X(V)}),formData.value[s][$]=V}else{const X=config[s].stepVerify;X&&H(()=>{formData.value[s]=X(V)}),formData.value[s]=V}},O=()=>{formData.value.openaiRequestBody.temperature=0},I=()=>{formData.value.openaiRequestBody.topP=0};let D=!1;const j=()=>D=!1,Y=()=>b("close"),J=()=>ie(this,null,function*(){if(!formRef.value||D)return;if(D=!0,Array.isArray(k.value)){const a=k.value.filter(s=>s&&typeof s=="object"&&s.name&&s.value).filter(({name:s,value:$})=>s.trim()&&$.trim()).map(({name:s,value:$})=>[s.trim(),$.trim()]);formData.value.variables=JSON.stringify(Object.fromEntries(a))}if(yield new Promise(a=>formRef.value.validate(a)))return j();b("confirm",j)});return onMounted(()=>{N(),G()}),n({update:N}),(w,a)=>(openBlock(),createBlock(unref(NForm),{class:"formComp",ref_key:"formRef",ref:formRef,"label-placement":unref(i).smallRef.value?"top":"left","label-width":110,model:unref(formData),rules:unref(rules)},{default:withCtx(()=>[a[37]||(a[37]=createBaseVNode("div",{class:"diver"},"基本信息",-1)),createVNode(unref(NFormItem),{label:"昵称",path:"name"},{default:withCtx(()=>[createVNode(unref(NInput),{class:"_input",value:unref(formData).name,"onUpdate:value":a[0]||(a[0]=s=>unref(formData).name=s),maxlength:"12","show-count":"",placeholder:""},null,8,["value"])]),_:1}),createVNode(unref(NFormItem),{label:"AI类型",path:"type"},{default:withCtx(()=>[createVNode(unref(NSelect),{class:"tp_select",value:unref(formData).friendType,"onUpdate:value":a[1]||(a[1]=s=>unref(formData).friendType=s),options:m,disabled:unref(formData).userFriendId},null,8,["value","disabled"])]),_:1}),createVNode(unref(NFormItem),{label:"标签",path:"tag"},{default:withCtx(()=>[createVNode(unref(NSelect),{class:"tp_select",value:unref(formData).tag,"onUpdate:value":a[2]||(a[2]=s=>unref(formData).tag=s),options:U.value},null,8,["value","options"])]),_:1}),createVNode(unref(NFormItem),{label:"简介",path:"intro"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$4,[createVNode(unref(NInput),{class:"_input",value:unref(formData).intro,"onUpdate:value":a[3]||(a[3]=s=>unref(formData).intro=s),maxlength:"30","show-count":"",placeholder:""},null,8,["value"]),a[22]||(a[22]=createBaseVNode("div",{class:"desc"},"简单介绍它的作用",-1))])]),_:1}),createVNode(unref(NFormItem),{label:"招呼语",path:"welcome"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2$4,[createVNode(unref(NInput),{class:"_input",value:unref(formData).welcome,"onUpdate:value":a[4]||(a[4]=s=>unref(formData).welcome=s),maxlength:"100","show-count":"",placeholder:""},null,8,["value"]),a[23]||(a[23]=createBaseVNode("div",{class:"desc"},"建立新话题页面所展示的招呼",-1))])]),_:1}),createVNode(unref(NFormItem),{label:"指令",path:"systemPrompt"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$2,[createVNode(unref(NInput),{class:"_input",type:"textarea","show-count":"",autosize:{minRows:5,maxRows:5},value:unref(formData).systemPrompt,"onUpdate:value":a[5]||(a[5]=s=>unref(formData).systemPrompt=s),maxlength:"4000",placeholder:""},null,8,["value"]),createBaseVNode("div",{class:"desc"},[createBaseVNode("div",null,[a[24]||(a[24]=createTextVNode("设置这个AI的系统指令（角色描述），通过 ")),createBaseVNode("span",{class:"model_look",onClick:g},"「这里」"),a[25]||(a[25]=createTextVNode(" 可以获取一些帮助"))]),a[26]||(a[26]=createBaseVNode("div",null,"当AI类型是阿里云百炼应用时，设置该指令将会覆盖应用已经配置的提示词。",-1))])])]),_:1}),unref(formData).friendSource==unref(SourceType).created?(openBlock(),createBlock(unref(NFormItem),{key:0,label:"快速开始",path:"conversationStart"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_4$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(v.value,(s,$)=>(openBlock(),createElementBlock("div",{class:"rowInput",key:s},[(openBlock(),createBlock(unref(NInput),{key:$,value:s.text,"onUpdate:value":V=>s.text=V,onInput:V=>W(V,$),class:"_input",maxlength:"100","show-count":"",placeholder:""},null,8,["value","onUpdate:value","onInput"])),createBaseVNode("div",_hoisted_5$1,[createVNode(unref(NButton),{class:"_close_btn",onClick:V=>B($)},{default:withCtx(()=>a[27]||(a[27]=[createBaseVNode("span",{class:"iconfont icon-close"},null,-1)])),_:2},1032,["onClick"])])]))),128)),a[28]||(a[28]=createBaseVNode("div",{class:"desc"},"提供用户快速开始对话的示例",-1))])]),_:1})):createCommentVNode("",!0),a[38]||(a[38]=createBaseVNode("div",{class:"diver"},"模型设置",-1)),createBaseVNode("div",null,[createVNode(unref(NFormItem),{class:"modelSet",path:"messageContextSize"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).messageContextSize.label),1),createVNode(Popover,{text:unref(config).messageContextSize.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_6$1,[createVNode(unref(NSlider),mergeProps({class:"slider",value:unref(formData).messageContextSize,"onUpdate:value":a[6]||(a[6]=s=>unref(formData).messageContextSize=s)},unref(config).messageContextSize.attrs),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).messageContextSize,onInput:a[7]||(a[7]=s=>M(s,"messageContextSize")),placeholder:""},null,8,["value"])])]),_:1}),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:0,class:"modelSet",path:"openaiRequestBody.maxTokens"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.maxTokens.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.maxTokens.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_7$1,[createVNode(unref(NSlider),mergeProps({class:"slider"},unref(config).openaiRequestBody.maxTokens.attrs,{value:unref(formData).openaiRequestBody.maxTokens,"onUpdate:value":a[8]||(a[8]=s=>unref(formData).openaiRequestBody.maxTokens=s)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.maxTokens,onInput:a[9]||(a[9]=s=>M(s,"openaiRequestBody.maxTokens")),placeholder:""},null,8,["value"])])]),_:1})):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:1,class:"modelSet",path:"openaiRequestBody.temperature"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.temperature.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.temperature.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_8$1,[createVNode(unref(NSlider),mergeProps({class:"slider","onUpdate:value":I},unref(config).openaiRequestBody.temperature.attrs,{value:unref(formData).openaiRequestBody.temperature,"onUpdate:value":a[10]||(a[10]=s=>unref(formData).openaiRequestBody.temperature=s)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.temperature,onInput:a[11]||(a[11]=s=>M(s,"openaiRequestBody.temperature")),placeholder:""},null,8,["value"])])]),_:1})):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:2,class:"modelSet",path:"openaiRequestBody.topP"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.topP.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.topP.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_9$1,[createVNode(unref(NSlider),mergeProps({class:"slider","onUpdate:value":O},unref(config).openaiRequestBody.topP.attrs,{value:unref(formData).openaiRequestBody.topP,"onUpdate:value":a[12]||(a[12]=s=>unref(formData).openaiRequestBody.topP=s)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.topP,onInput:a[13]||(a[13]=s=>M(s,"openaiRequestBody.topP")),placeholder:""},null,8,["value"])])]),_:1})):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:3,class:"modelSet",path:"openaiRequestBody.presencePenalty"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.presencePenalty.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.presencePenalty.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_10$1,[createVNode(unref(NSlider),mergeProps({class:"slider"},unref(config).openaiRequestBody.presencePenalty.attrs,{value:unref(formData).openaiRequestBody.presencePenalty,"onUpdate:value":a[14]||(a[14]=s=>unref(formData).openaiRequestBody.presencePenalty=s)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.presencePenalty,onInput:a[15]||(a[15]=s=>M(s,"openaiRequestBody.presencePenalty")),placeholder:""},null,8,["value"])])]),_:1})):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:4,class:"modelSet",path:"openaiRequestBody.frequencyPenalty"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.frequencyPenalty.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.frequencyPenalty.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_11$1,[createVNode(unref(NSlider),mergeProps({class:"slider"},unref(config).openaiRequestBody.frequencyPenalty.attrs,{value:unref(formData).openaiRequestBody.frequencyPenalty,"onUpdate:value":a[16]||(a[16]=s=>unref(formData).openaiRequestBody.frequencyPenalty=s)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.frequencyPenalty,onInput:a[17]||(a[17]=s=>M(s,"openaiRequestBody.frequencyPenalty")),placeholder:""},null,8,["value"])])]),_:1})):createCommentVNode("",!0)]),unref(formData).friendType===1?(openBlock(),createElementBlock("div",_hoisted_12,"其他设置")):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:2,label:"Prompt Template",path:"contentPrompt"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_13,[createVNode(unref(NInput),{class:"_input",type:"textarea","show-count":"",autosize:{minRows:5,maxRows:5},value:unref(formData).contentPrompt,"onUpdate:value":a[18]||(a[18]=s=>unref(formData).contentPrompt=s),maxlength:"4000",placeholder:""},null,8,["value"]),a[29]||(a[29]=createBaseVNode("div",{class:"desc"}," 修改用户的提问时的模板脚本，默认情况不建议设置。 ",-1))])]),_:1})):createCommentVNode("",!0),unref(formData).friendType===3?(openBlock(),createElementBlock("div",_hoisted_14,"阿里云百炼设置")):createCommentVNode("",!0),unref(formData).friendType===3?(openBlock(),createElementBlock("div",_hoisted_15,[unref(formData).friendSource===unref(SourceType).created?(openBlock(),createBlock(unref(NFormItem),{key:0,label:"业务空间ID",path:"aliyunDashscopeWorkspaceId"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_16,[createVNode(unref(NInput),{class:"_input",value:unref(formData).aliyunDashscopeWorkspaceId,"onUpdate:value":a[19]||(a[19]=s=>unref(formData).aliyunDashscopeWorkspaceId=s),maxlength:"128","show-count":"",placeholder:""},null,8,["value"]),a[30]||(a[30]=createBaseVNode("div",{class:"desc"},"填写阿里云百炼空间ID",-1))])]),_:1})):createCommentVNode("",!0),unref(formData).friendSource===unref(SourceType).created?(openBlock(),createBlock(unref(NFormItem),{key:1,label:"应用ID",path:"aliyunDashscopeAppId"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_17,[createVNode(unref(NInput),{class:"_input",value:unref(formData).aliyunDashscopeAppId,"onUpdate:value":a[20]||(a[20]=s=>unref(formData).aliyunDashscopeAppId=s),maxlength:"128","show-count":"",placeholder:""},null,8,["value"]),a[31]||(a[31]=createBaseVNode("div",{class:"desc"},"填写阿里云百炼应用ID",-1))])]),_:1})):createCommentVNode("",!0),unref(formData).friendSource===unref(SourceType).created?(openBlock(),createBlock(unref(NFormItem),{key:2,label:"调用密钥",path:"aliyunDashscopeApiKey"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_18,[createVNode(unref(NInput),{class:"_input",value:unref(formData).aliyunDashscopeApiKey,"onUpdate:value":a[21]||(a[21]=s=>unref(formData).aliyunDashscopeApiKey=s),maxlength:"128","show-count":"",placeholder:""},null,8,["value"]),a[32]||(a[32]=createBaseVNode("div",{class:"desc"},"填写阿里云百炼应用调用的密钥，如果不填则使用系统全局配置的。",-1))])]),_:1})):createCommentVNode("",!0),createVNode(unref(NFormItem),{label:"自定义变量",path:"variables"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_19,[(openBlock(!0),createElementBlock(Fragment,null,renderList(k.value,(s,$)=>(openBlock(),createElementBlock("div",{class:"rowInput",key:s},[(openBlock(),createBlock(unref(NInput),{key:$,value:s.name,"onUpdate:value":V=>s.name=V,onInput:V=>C(V,$),class:"_input variable_name",maxlength:"50","show-count":"",placeholder:"变量名"},null,8,["value","onUpdate:value","onInput"])),(openBlock(),createBlock(unref(NInput),{key:$,type:"textarea",value:s.value,"onUpdate:value":V=>s.value=V,onInput:V=>C(V,$),class:"_input variable_value",rows:"1",maxlength:"1000","show-count":"",placeholder:"变量值"},null,8,["value","onUpdate:value","onInput"])),createBaseVNode("div",_hoisted_20,[createVNode(unref(NButton),{class:"_close_btn",onClick:V=>T($)},{default:withCtx(()=>a[33]||(a[33]=[createBaseVNode("span",{class:"iconfont icon-close"},null,-1)])),_:2},1032,["onClick"])])]))),128)),k.value.length<10?(openBlock(),createBlock(unref(NButton),{key:0,class:"_close_btn _add_var_btn",onClick:L},{default:withCtx(()=>a[34]||(a[34]=[createTextVNode(" 添加一个变量 ")])),_:1})):createCommentVNode("",!0)])]),_:1})])):createCommentVNode("",!0),createVNode(unref(NFormItem),null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_21,[createVNode(unref(NButton),{class:"_close_btn",onClick:Y},{default:withCtx(()=>a[35]||(a[35]=[createTextVNode("取消")])),_:1}),createVNode(unref(NButton),{class:"_confirm_btn",onClick:J,type:"info"},{default:withCtx(()=>a[36]||(a[36]=[createTextVNode(" 确定 ")])),_:1})])]),_:1})]),_:1},8,["label-placement","model","rules"]))}},FormComp=_export_sfc(_sfc_main$5,[["__scopeId","data-v-57a46553"]]),index_vue_vue_type_style_index_0_scoped_66c60425_lang="",scale=2,_sfc_main$4={__name:"index",props:{size:{typeof:Object,default:{width:80,height:80}},bgColor:{type:String,default:"#50c7da"},type:{type:String,default:"text"},text:{type:String,default:"文字"},fontFamily:{type:String,default:"Arial"},offset:{typeof:Object,default:{x:0,y:0}},fontSize:Number},setup(__props,{expose:__expose}){const props=__props,style=computed(()=>{const{width:e,height:n}=props.size;return{width:e+"px",height:n+"px"}}),canvasRef=ref(null);let canvas,ctx;const initCanvas=()=>{!canvasRef.value||canvas||(canvas=canvasRef.value,ctx=canvas.getContext("2d"))},draw=()=>{if(!canvasRef.value)return;initCanvas();const{width,height}=props.size;canvas.width=width*scale,canvas.height=height*scale;const fontSize=props.fontSize||Math.min(Math.floor((width-10)/props.text.length),30);ctx.fillStyle=props.bgColor,ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font=`${fontSize*scale}px ${props.fontFamily}`,ctx.textBaseline="middle",ctx.textAlign="center",ctx.fillStyle="#fff";let text=props.text;props.type=="icon"&&(text?text=eval(('("&#x'+text).replace("&#x","\\u").replace(";","")+'")'):text="");const x=width/2+props.offset.x,y=height/2+props.offset.y;ctx.fillText(text,x*scale,y*scale)};watch(props,draw);const toUrl=()=>canvas.toDataURL("image/png");return onMounted(()=>draw()),__expose({toUrl}),(e,n)=>(openBlock(),createElementBlock("canvas",{class:"canvas",ref_key:"canvasRef",ref:canvasRef,style:normalizeStyle(style.value)},null,4))}},CanvasAvater=_export_sfc(_sfc_main$4,[["__scopeId","data-v-66c60425"]]),styles=`@font-face {
    font-family: "aicon";
    /* Project id 4089911 */
    src: url('//at.alicdn.com/t/c/font_4089911_odspi0n5e6k.woff2?t=1697099145811') format('woff2');
}

.aicon {
    font-family: "aicon" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-b132:before {
    content: "\\e683";
}

.icon-b131:before {
    content: "\\e67d";
}

.icon-b130:before {
    content: "\\e67e";
}

.icon-b129:before {
    content: "\\e680";
}

.icon-b128:before {
    content: "\\e682";
}

.icon-b127:before {
    content: "\\e8cb";
}

.icon-b104:before {
    content: "\\e644";
}

.icon-b120:before {
    content: "\\e67c";
}

.icon-b49:before {
    content: "\\e7c0";
}

.icon-b119:before {
    content: "\\e675";
}

.icon-b118:before {
    content: "\\e798";
}

.icon-b117:before {
    content: "\\f274";
}

.icon-b116:before {
    content: "\\e6fd";
}

.icon-b115:before {
    content: "\\e67a";
}

.icon-b114:before {
    content: "\\e67b";
}

.icon-b113:before {
    content: "\\e707";
}

.icon-b112:before {
    content: "\\ec1e";
}

.icon-b111:before {
    content: "\\e7b4";
}

.icon-b108:before {
    content: "\\e660";
}

.icon-b110:before {
    content: "\\e7b7";
}

.icon-b109:before {
    content: "\\e671";
}

.icon-b107:before {
    content: "\\e72a";
}

.icon-jingdong:before {
    content: "\\e657";
}

.icon-b106:before {
    content: "\\e653";
}

.icon-b105:before {
    content: "\\e631";
}

.icon-a58:before {
    content: "\\e797";
}

.icon-a81:before {
    content: "\\e66d";
}

.icon-a57:before {
    content: "\\e67f";
}

.icon-b103:before {
    content: "\\e75b";
}

.icon-b102:before {
    content: "\\e62a";
}

.icon-b101:before {
    content: "\\e669";
}

.icon-b100:before {
    content: "\\e638";
}

.icon-a5:before {
    content: "\\e6c7";
}

.icon-a70:before {
    content: "\\e69f";
}

.icon-b99:before {
    content: "\\eb46";
}

.icon-a48:before {
    content: "\\e640";
}

.icon-a33:before {
    content: "\\e6fc";
}

.icon-b98:before {
    content: "\\e652";
}

.icon-b93:before {
    content: "\\e674";
}

.icon-a65:before {
    content: "\\e664";
}

.icon-b121:before {
    content: "\\e665";
}

.icon-b123:before {
    content: "\\e676";
}

.icon-b124:before {
    content: "\\e678";
}

.icon-b125:before {
    content: "\\e679";
}

.icon-b126:before {
    content: "\\e842";
}

.icon-b92:before {
    content: "\\e615";
}

.icon-b96:before {
    content: "\\e64f";
}

.icon-b91:before {
    content: "\\e65c";
}

.icon-b97:before {
    content: "\\e65d";
}

.icon-b88:before {
    content: "\\e6b6";
}

.icon-b89:before {
    content: "\\e666";
}

.icon-b90:before {
    content: "\\e667";
}

.icon-b87:before {
    content: "\\e66c";
}

.icon-b85:before {
    content: "\\e66a";
}

.icon-b86:before {
    content: "\\e9c8";
}

.icon-b94:before {
    content: "\\e66b";
}

.icon-b84:before {
    content: "\\e66e";
}

.icon-b95:before {
    content: "\\e66f";
}

.icon-b83:before {
    content: "\\e672";
}

.icon-a80:before {
    content: "\\e673";
}

.icon-b82:before {
    content: "\\e677";
}

.icon-b60:before {
    content: "\\e64a";
}

.icon-b61:before {
    content: "\\e870";
}

.icon-b62:before {
    content: "\\e65b";
}

.icon-b58:before {
    content: "\\e687";
}

.icon-b50:before {
    content: "\\e7ba";
}

.icon-b63:before {
    content: "\\e6ab";
}

.icon-b59:before {
    content: "\\e8b2";
}

.icon-b57:before {
    content: "\\e8f4";
}

.icon-b81:before {
    content: "\\e68a";
}

.icon-b64:before {
    content: "\\e646";
}

.icon-b30:before {
    content: "\\e7bf";
}

.icon-b53:before {
    content: "\\e647";
}

.icon-b54:before {
    content: "\\e63e";
}

.icon-b52:before {
    content: "\\e78c";
}

.icon-b80:before {
    content: "\\e63f";
}

.icon-b79:before {
    content: "\\e6b1";
}

.icon-b55:before {
    content: "\\e6bc";
}

.icon-b56:before {
    content: "\\e69e";
}

.icon-b78:before {
    content: "\\e63d";
}

.icon-b77:before {
    content: "\\e641";
}

.icon-b76:before {
    content: "\\e648";
}

.icon-b75:before {
    content: "\\e64c";
}

.icon-b74:before {
    content: "\\e64d";
}

.icon-b73:before {
    content: "\\e64e";
}

.icon-b72:before {
    content: "\\e650";
}

.icon-b71:before {
    content: "\\e651";
}

.icon-b70:before {
    content: "\\e654";
}

.icon-b69:before {
    content: "\\e655";
}

.icon-b68:before {
    content: "\\e656";
}

.icon-b48:before {
    content: "\\e658";
}

.icon-b47:before {
    content: "\\e659";
}

.icon-b67:before {
    content: "\\e62b";
}

.icon-b51:before {
    content: "\\e63b";
}

.icon-b65:before {
    content: "\\e63c";
}

.icon-a79:before {
    content: "\\e603";
}

.icon-a78:before {
    content: "\\e611";
}

.icon-b46:before {
    content: "\\e628";
}

.icon-b45:before {
    content: "\\e985";
}

.icon-b44:before {
    content: "\\e63a";
}

.icon-b28:before {
    content: "\\e627";
}

.icon-b27:before {
    content: "\\e645";
}

.icon-a71:before {
    content: "\\e623";
}

.icon-a72:before {
    content: "\\e629";
}

.icon-a76:before {
    content: "\\e748";
}

.icon-a73:before {
    content: "\\e634";
}

.icon-a3:before {
    content: "\\e636";
}

.icon-a75:before {
    content: "\\e637";
}

.icon-a74:before {
    content: "\\eb39";
}

.icon-b25:before {
    content: "\\e630";
}

.icon-a13:before {
    content: "\\e69d";
}

.icon-a77:before {
    content: "\\e618";
}

.icon-b26:before {
    content: "\\e663";
}

.icon-a12:before {
    content: "\\e6b3";
}

.icon-a64:before {
    content: "\\e6eb";
}

.icon-a63:before {
    content: "\\e612";
}

.icon-a21:before {
    content: "\\e622";
}

.icon-a66:before {
    content: "\\e6ba";
}

.icon-a69:before {
    content: "\\e614";
}

.icon-a62:before {
    content: "\\e62c";
}

.icon-a29:before {
    content: "\\ec68";
}

.icon-b41:before {
    content: "\\e65a";
}

.icon-a51:before {
    content: "\\e62f";
}

.icon-b43:before {
    content: "\\e6df";
}

.icon-b42:before {
    content: "\\e739";
}

.icon-b21:before {
    content: "\\e6e0";
}

.icon-a55:before {
    content: "\\e65f";
}

.icon-a68:before {
    content: "\\f467";
}

.icon-a30:before {
    content: "\\e643";
}

.icon-a31:before {
    content: "\\e69a";
}

.icon-a54:before {
    content: "\\e6c4";
}

.icon-a56:before {
    content: "\\e6e1";
}

.icon-a59:before {
    content: "\\e632";
}

.icon-a60:before {
    content: "\\e633";
}

.icon-a61:before {
    content: "\\e6bb";
}

.icon-a4:before {
    content: "\\e681";
}

.icon-a67:before {
    content: "\\e635";
}

.icon-a2:before {
    content: "\\e668";
}

.icon-a43:before {
    content: "\\e789";
}

.icon-a44:before {
    content: "\\e6fe";
}

.icon-a45:before {
    content: "\\e706";
}

.icon-a14:before {
    content: "\\e709";
}

.icon-b6:before {
    content: "\\ec66";
}

.icon-a8:before {
    content: "\\f616";
}

.icon-a7:before {
    content: "\\fd58";
}

.icon-a41:before {
    content: "\\fd5b";
}

.icon-a42:before {
    content: "\\fd65";
}

.icon-a40:before {
    content: "\\fd73";
}

.icon-a39:before {
    content: "\\fd78";
}

.icon-a46:before {
    content: "\\e74f";
}

.icon-b8:before {
    content: "\\e606";
}

.icon-b7:before {
    content: "\\e73d";
}

.icon-a23:before {
    content: "\\e65e";
}

.icon-a22:before {
    content: "\\e662";
}

.icon-b1:before {
    content: "\\e88d";
}

.icon-b3:before {
    content: "\\e88e";
}

.icon-b4:before {
    content: "\\e88f";
}

.icon-b2:before {
    content: "\\e890";
}

.icon-a15:before {
    content: "\\e893";
}

.icon-a6:before {
    content: "\\e894";
}

.icon-b34:before {
    content: "\\e6d3";
}

.icon-b37:before {
    content: "\\e6fa";
}

.icon-b36:before {
    content: "\\e6fb";
}

.icon-a47:before {
    content: "\\e639";
}

.icon-a24:before {
    content: "\\e670";
}

.icon-b11:before {
    content: "\\e617";
}

.icon-a1:before {
    content: "\\e60e";
}

.icon-a25:before {
    content: "\\ee13";
}

.icon-a9:before {
    content: "\\ee15";
}

.icon-a26:before {
    content: "\\ee16";
}

.icon-a27:before {
    content: "\\ee17";
}

.icon-a28:before {
    content: "\\ee18";
}

.icon-b12:before {
    content: "\\e60f";
}

.icon-b5:before {
    content: "\\e610";
}

.icon-b29:before {
    content: "\\e613";
}

.icon-b31:before {
    content: "\\e619";
}

.icon-a32:before {
    content: "\\e642";
}

.icon-b22:before {
    content: "\\e602";
}

.icon-b14:before {
    content: "\\e60a";
}

.icon-b16:before {
    content: "\\e60b";
}

.icon-b17:before {
    content: "\\e60c";
}

.icon-b15:before {
    content: "\\e60d";
}

.icon-b18:before {
    content: "\\e61a";
}

.icon-b19:before {
    content: "\\e61c";
}

.icon-b20:before {
    content: "\\e61d";
}

.icon-b13:before {
    content: "\\e61e";
}

.icon-a11:before {
    content: "\\e607";
}

.icon-a10:before {
    content: "\\e608";
}

.icon-a49:before {
    content: "\\e61f";
}

.icon-a16:before {
    content: "\\e620";
}

.icon-a35:before {
    content: "\\e621";
}

.icon-a20:before {
    content: "\\e604";
}

.icon-b35:before {
    content: "\\e84f";
}

.icon-b23:before {
    content: "\\e851";
}

.icon-a50:before {
    content: "\\e852";
}

.icon-a38:before {
    content: "\\e624";
}

.icon-a19:before {
    content: "\\e625";
}

.icon-a34:before {
    content: "\\e626";
}

.icon-a18:before {
    content: "\\e605";
}

.icon-b32:before {
    content: "\\e62d";
}

.icon-b10:before {
    content: "\\e62e";
}

.icon-b33:before {
    content: "\\e61b";
}

.icon-a52:before {
    content: "\\e601";
}

.icon-b9:before {
    content: "\\e600";
}

.icon-b38:before {
    content: "\\e755";
}

.icon-a53:before {
    content: "\\e649";
}

.icon-b24:before {
    content: "\\e68d";
}

.icon-a36:before {
    content: "\\e661";
}

.icon-b39:before {
    content: "\\e8db";
}

.icon-a17:before {
    content: "\\e64b";
}

.icon-b40:before {
    content: "\\e616";
}

.icon-a37:before {
    content: "\\e609";
}`,index_vue_vue_type_style_index_0_scoped_5171e641_lang="",_hoisted_1$3={class:"AvatarIcons flex"},_hoisted_2$3=["onClick"],_sfc_main$3={__name:"index",props:["value","bgColor"],emits:["update:value","font"],setup(e,{emit:n}){const r=/icon-[a-zA-Z0-9]{2,8}/g,o=/content: "\\[a-zA-Z0-9]{4}/g,i=ref(styles.match(r)),l=styles.match(o),b=e,p=n,m=computed(()=>({"background-color":b.bgColor||"#0095ff"}));onMounted(()=>{b.value||setTimeout(()=>v(i.value[0],0),100)});const v=(k,z)=>{const C=l[z].slice(11),T="aicon";p("update:value",k),p("font",{text:C,family:T})};return(k,z)=>(openBlock(),createElementBlock("div",_hoisted_1$3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(i.value,(C,T)=>(openBlock(),createElementBlock("div",{class:"icon_w",key:C,style:normalizeStyle(m.value),onClick:L=>v(C,T)},[createBaseVNode("span",{class:normalizeClass(["aicon",C])},null,2)],12,_hoisted_2$3))),128))]))}},AvatarIcons=_export_sfc(_sfc_main$3,[["__scopeId","data-v-5171e641"]]),index_vue_vue_type_style_index_0_scoped_0aa434d5_lang="",_hoisted_1$2={class:"colorbar flex_b"},_hoisted_2$2=["onClick"],_hoisted_3$1={class:"picker_wrapper"},_sfc_main$2={__name:"index",props:["value"],emits:["update:value"],setup(e,{emit:n}){const r=e,o=n,i=["#ff515b","#ff7500","#ffcb00","#85d700","#00cb95","#00cadd","#0095ff","#8c9dff","#ff71a2"];onMounted(()=>{r.value||o("update:value",i[0])});const l=b=>{o("update:value",b)};return(b,p)=>(openBlock(),createElementBlock("div",_hoisted_1$2,[(openBlock(),createElementBlock(Fragment,null,renderList(i,m=>createBaseVNode("div",{class:"color_item",key:m,onClick:v=>l(m),style:normalizeStyle({"background-color":m})},null,12,_hoisted_2$2)),64)),createBaseVNode("div",_hoisted_3$1,[createVNode(unref(NColorPicker),{size:"small",value:r.value,"onUpdate:value":l},null,8,["value"])])]))}},ColorBar=_export_sfc(_sfc_main$2,[["__scopeId","data-v-0aa434d5"]]),FormAvater_vue_vue_type_style_index_0_scoped_658d02ba_lang="",_hoisted_1$1={class:"formAvater"},_hoisted_2$1={class:"preview"},_hoisted_3=["src"],_hoisted_4={key:1,class:"preview_icon"},_hoisted_5={key:2,class:"",style:{"text-align":"center"}},_hoisted_6={class:"imgAvater"},_hoisted_7={class:"iconAvater"},_hoisted_8={class:"icon_wrapper"},_hoisted_9={class:"color_wrapper"},_hoisted_10={class:"textAvater"},_hoisted_11={class:"color_wrapper"},_sfc_main$1={__name:"FormAvater",setup(e,{expose:n}){const r=inject("resize"),o=ref(!1),i=ref(null),l=ref(null),b=ref({width:100,height:100}),p=ref("img"),m=ref(""),v=ref({color:"",icon:""}),k=ref({color:"",text:"文字头像"}),z=ref({text:"",family:"aicon"}),C=N=>{z.value.text=N.text},T=N=>ie(this,null,function*(){const g=base64ToFile(N),U=new FormData;return U.append("file",g),yield uploadImg(U)}),L=N=>{o.value=N};let G=!1;const W=()=>ie(this,null,function*(){if(G)return;G=!0;let N=m.value;const g={tab:p.value,text:k.value,icon:v.value};switch(p.value){case"img":break;case"icon":N=yield T(i.value.toUrl());break;case"text":N=yield T(l.value.toUrl());break}formData.value.avatar=N,formData.value.cssAvatar=JSON.stringify(g),G=!1,o.value=!1}),B=()=>{m.value=formData.value.avatar;const N=formData.value.cssAvatar;if(N){const{text:g,icon:U,tab:H}=JSON.parse(N);p.value="img",k.value=g,v.value=U}};return n({update:B}),onMounted(()=>{B()}),(N,g)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[createVNode(unref(NPopover),{trigger:"click",placement:"bottom",show:o.value,"onUpdate:show":L},{trigger:withCtx(()=>[createBaseVNode("div",{class:"avater",style:normalizeStyle({width:b.value.width+"px",height:b.value.height+"px"})},[createBaseVNode("div",_hoisted_2$1,[p.value==="img"?withDirectives((openBlock(),createElementBlock("img",{key:0,class:"img",src:m.value},null,8,_hoisted_3)),[[vShow,m.value]]):p.value==="icon"?(openBlock(),createElementBlock("div",_hoisted_4,[createVNode(CanvasAvater,{ref_key:"iconCanvasRef",ref:i,text:z.value.text,bgColor:v.value.color,size:b.value,fontSize:b.value.width*.8,type:"icon",fontFamily:z.value.family},null,8,["text","bgColor","size","fontSize","fontFamily"])])):p.value==="text"?(openBlock(),createElementBlock("div",_hoisted_5,[createVNode(CanvasAvater,{ref_key:"textCanvasRef",ref:l,text:k.value.text,bgColor:k.value.color,size:b.value,offset:{x:0,y:1}},null,8,["text","bgColor","size"])])):createCommentVNode("",!0)]),g[6]||(g[6]=createBaseVNode("div",{class:"icon"},[createBaseVNode("span",{class:"iconfont icon-edit"})],-1))],4)]),default:withCtx(()=>[createBaseVNode("div",{class:normalizeClass(["content",{small:unref(r).smallRef.value}])},[createVNode(unref(NTabs),{type:"line",animated:"",value:p.value,"onUpdate:value":g[5]||(g[5]=U=>p.value=U)},{default:withCtx(()=>[createVNode(unref(NTabPane),{name:"img",tab:"图片头像"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_6,[createVNode(Upload,{imgs:m.value,"onUpdate:imgs":g[0]||(g[0]=U=>m.value=U),max:1,size:1024*1024*5},null,8,["imgs"]),g[8]||(g[8]=createBaseVNode("div",{class:"tips"},"请先删除后再上传新头像",-1)),createVNode(unref(NButton),{class:"nextButtom",onClick:W,type:"info"},{default:withCtx(()=>g[7]||(g[7]=[createTextVNode(" 确认 ")])),_:1})])]),_:1}),createVNode(unref(NTabPane),{name:"icon",tab:"图标头像"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_7,[createBaseVNode("div",_hoisted_8,[createVNode(AvatarIcons,{onFont:C,value:v.value.icon,"onUpdate:value":g[1]||(g[1]=U=>v.value.icon=U),bgColor:v.value.color},null,8,["value","bgColor"])]),createBaseVNode("div",_hoisted_9,[createVNode(ColorBar,{value:v.value.color,"onUpdate:value":g[2]||(g[2]=U=>v.value.color=U)},null,8,["value"])]),createVNode(unref(NButton),{class:"nextButtom",onClick:W,type:"info"},{default:withCtx(()=>g[9]||(g[9]=[createTextVNode(" 确认 ")])),_:1})])]),_:1}),createVNode(unref(NTabPane),{name:"text",tab:"文字头像"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_10,[createVNode(unref(NInput),{class:"_input",value:k.value.text,"onUpdate:value":g[3]||(g[3]=U=>k.value.text=U),maxlength:"4","show-count":"",placeholder:""},null,8,["value"]),createBaseVNode("div",_hoisted_11,[createVNode(ColorBar,{value:k.value.color,"onUpdate:value":g[4]||(g[4]=U=>k.value.color=U)},null,8,["value"])]),createVNode(unref(NButton),{class:"nextButtom",onClick:W,type:"info"},{default:withCtx(()=>g[10]||(g[10]=[createTextVNode(" 确认 ")])),_:1})])]),_:1})]),_:1},8,["value"])],2)]),_:1},8,["show"])]))}},FormAvater=_export_sfc(_sfc_main$1,[["__scopeId","data-v-658d02ba"]]),Edit_vue_vue_type_style_index_0_scoped_95669ee6_lang="",_hoisted_1={class:"content"},_hoisted_2={class:"fromWrapper"},_sfc_main={__name:"Edit",setup(e){const n=ref(null),r=ref(null),o=useRoute(),i=useRouter(),l=useMessage(),b=useChatStore(),p=inject("resize"),m=useGlobalStore(),k=getCurrentInstance().appContext.config.globalProperties.$bus,z=computed(()=>o.query.id),C=computed(()=>m.tags),T=ref("add"),L=computed(()=>p.IDERef.value?1:0);let G={};const W=()=>ie(this,null,function*(){G=yield queryFriend({productType:L.value,friendId:z.value});const{userFriendId:O,avatar:I,cssAvatar:D,name:j,friendType:Y,tag:J=C.value[0].name,intro:w,welcome:a,systemPrompt:s,contentPrompt:$,friendSource:V=defaultFormData.friendSource,conversationStart:X=defaultFormData.conversationStart,aliyunDashscopeWorkspaceId:se,aliyunDashscopeAppId:ee,aliyunDashscopeApiKey:te,variables:oe,messageContextSize:ae=defaultFormData.messageContextSize,openaiRequestBody:pe=JSON.parse(JSON.stringify(defaultFormData.openaiRequestBody))}=G;formData.value={userFriendId:O,avatar:I,cssAvatar:D,name:j,friendType:Y,tag:J,intro:w,welcome:a,systemPrompt:s,contentPrompt:$,friendSource:V,conversationStart:X,aliyunDashscopeWorkspaceId:se,aliyunDashscopeAppId:ee,aliyunDashscopeApiKey:te,variables:oe,messageContextSize:Number(ae),openaiRequestBody:pe}}),B=()=>{n.value&&n.value.update(),r.value&&r.value.update()},N=()=>{formDataClear(),p.IDERef.value&&T.value=="add"?formData.value.tag="编程":formData.value&&(formData.value.tag=C.value[0].name)},g=()=>ie(this,null,function*(){z.value?(T.value="edit",N(),yield W()):(T.value="add",N()),B()});watch(()=>o.query.id,()=>{["d_friendsPlazaEdit"].includes(o.name)&&g()}),onMounted(g),onUnmounted(formDataClear);const U=()=>{},H=()=>{routerBack(i,{name:"dialogue"})},M=O=>ie(this,null,function*(){const I=ve(me({},formData.value),{productType:L.value});let D=T.value==="edit"?yield updateFriend(ve(me({},I),{id:G.userFriendId})):yield createFriend(I);if(D.err){O(),D.errMsg&&l.error(D.errMsg||"操作失败");return}O(),N();const j=T.value==="edit"?"编辑成功":"添加成功";l.success(j),b.addFriends(D),routerBack(i,{name:"dialogue"}),k.emit("friendFollow",ve(me({},D),{__type:T.value}))});return(O,I)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["FriendsPlazaEdit tpage",{small:unref(p).smallRef.value}])},[createBaseVNode("div",_hoisted_1,[createVNode(FormAvater,{ref_key:"FormAvaterRef",ref:r,onOver:U},null,512),createBaseVNode("div",_hoisted_2,[createVNode(FormComp,{ref_key:"FormCompRef",ref:n,tags:C.value,onClose:H,onConfirm:M},null,8,["tags"])])])],2))}},Edit=_export_sfc(_sfc_main,[["__scopeId","data-v-95669ee6"]]);export{Edit as default};
