var Ee=Object.defineProperty,Me=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var Ce=(e,n,a)=>n in e?Ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,be=(e,n)=>{for(var a in n||(n={}))qe.call(n,a)&&Ce(e,a,n[a]);if(Se)for(var a of Se(n))Le.call(n,a)&&Ce(e,a,n[a]);return e},me=(e,n)=>Me(e,He(n));var ie=(e,n,a)=>new Promise((o,l)=>{var i=m=>{try{p(a.next(m))}catch(g){l(g)}},b=m=>{try{p(a.throw(m))}catch(g){l(g)}},p=m=>m.done?o(m.value):Promise.resolve(m.value).then(i,b);p((a=a.apply(e,n)).next())});import{aw as cB,ax as c,ay as cE,ao as defineComponent,az as useConfig,aA as useStyle,aB as h,aC as createTheme,aD as commonLight,aE as buttonLight,aF as toHexaString,aG as rgba,aH as toHslaString,aI as rgb2hsl,aJ as toHsvaString,aK as rgb2hsv,aL as toRgbaString,aM as hsla,aN as hsl2rgb,aO as hsl2hsv,aP as hsva,aQ as hsv2rgb,aR as hsv2hsl,g as ref,c as computed,aS as on,aT as off,aU as createInjectionKey,i as inject,W as watchEffect,aV as toHexString,aW as toHslString,aX as toRgbString,aY as toHsvString,aZ as warn,a_ as fadeInScaleUpTransition,a$ as cM,b0 as useFormItem,b1 as useTheme,b2 as provide,b3 as toRef,b4 as useMergedState,a4 as watch,b5 as createKey,b6 as useThemeClass,b7 as isMounted,b8 as getPreciseEventTarget,b9 as Transition,Y as withDirectives,ba as clickoutside,bb as call,ae as NButton,G as nextTick,bc as insideModal,bd as insidePopover,be as onBeforeUpdate,bf as onBeforeUnmount,bg as resolveSlot,y as default_friend_avatar,bh as isInteger,_ as _export_sfc,o as openBlock,b as createBlock,D as withCtx,e as createBaseVNode,A as toDisplayString,v as unref,k as useMessage,q as onMounted,f as createVNode,z as createTextVNode,d as createCommentVNode,a as createElementBlock,x as renderList,F as Fragment,bi as mergeProps,bj as systemPrompt_url,bk as debance,C as normalizeStyle,w as normalizeClass,Z as vShow,bl as base64ToFile,bm as uploadImg,h as useRoute,j as useRouter,l as useChatStore,a2 as useGlobalStore,n as getCurrentInstance,t as onUnmounted,ah as routerBack,bn as updateFriend,bo as createFriend,bp as queryFriend}from"./bundle.0.0.2.js?v=0.8274610612687818";import{u as useAdjustedTo,V as VBinder,a as VTarget,b as VFollower,N as NPopover}from"./chunk.1t423.js";import{N as NFormItem,a as NSelect,b as NForm,c as NTabs,d as NTabPane}from"./chunk.1t449.js";import{i as inputLight,N as NInput}from"./chunk.1t431.js";import{U as Upload}from"./chunk.1t429.js";import{u as useLocale}from"./chunk.1t439.js";import"./chunk.1t450.js";import"./chunk.1t434.js";import"./chunk.1t427.js";const style$2=cB("input-group",`
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
 `)])])])])])]),inputGroupProps={},NInputGroup=defineComponent({name:"InputGroup",props:inputGroupProps,setup(e){const{mergedClsPrefixRef:n}=useConfig(e);return useStyle("-input-group",style$2,n),{mergedClsPrefix:n}},render(){const{mergedClsPrefix:e}=this;return h("div",{class:`${e}-input-group`},this.$slots)}});function self$1(e){const{fontSize:n,boxShadow2:a,popoverColor:o,textColor2:l,borderRadius:i,borderColor:b,heightSmall:p,heightMedium:m,heightLarge:g,fontSizeSmall:C,fontSizeMedium:R,fontSizeLarge:B,dividerColor:z}=e;return{panelFontSize:n,boxShadow:a,color:o,textColor:l,borderRadius:i,border:`1px solid ${b}`,heightSmall:p,heightMedium:m,heightLarge:g,fontSizeSmall:C,fontSizeMedium:R,fontSizeLarge:B,dividerColor:z}}const colorPickerLight=createTheme({name:"ColorPicker",common:commonLight,peers:{Input:inputLight,Button:buttonLight},self:self$1}),colorPickerLight$1=colorPickerLight;function deriveDefaultValue(e,n){switch(e[0]){case"hex":return n?"#000000FF":"#000000";case"rgb":return n?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return n?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return n?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function getModeFromValue(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function normalizeHue(e){return e=Math.round(e),e>=360?359:e<0?0:e}function normalizeAlpha(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const convert={rgb:{hex(e){return toHexaString(rgba(e))},hsl(e){const[n,a,o,l]=rgba(e);return toHslaString([...rgb2hsl(n,a,o),l])},hsv(e){const[n,a,o,l]=rgba(e);return toHsvaString([...rgb2hsv(n,a,o),l])}},hex:{rgb(e){return toRgbaString(rgba(e))},hsl(e){const[n,a,o,l]=rgba(e);return toHslaString([...rgb2hsl(n,a,o),l])},hsv(e){const[n,a,o,l]=rgba(e);return toHsvaString([...rgb2hsv(n,a,o),l])}},hsl:{hex(e){const[n,a,o,l]=hsla(e);return toHexaString([...hsl2rgb(n,a,o),l])},rgb(e){const[n,a,o,l]=hsla(e);return toRgbaString([...hsl2rgb(n,a,o),l])},hsv(e){const[n,a,o,l]=hsla(e);return toHsvaString([...hsl2hsv(n,a,o),l])}},hsv:{hex(e){const[n,a,o,l]=hsva(e);return toHexaString([...hsv2rgb(n,a,o),l])},rgb(e){const[n,a,o,l]=hsva(e);return toRgbaString([...hsv2rgb(n,a,o),l])},hsl(e){const[n,a,o,l]=hsva(e);return toHslaString([...hsv2hsl(n,a,o),l])}}};function convertColor(e,n,a){return a=a||getModeFromValue(e),a?a===n?e:convert[a][n](e):null}const HANDLE_SIZE$2="12px",HANDLE_SIZE_NUM$1=12,RADIUS$2="6px",AlphaSlider=defineComponent({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const n=ref(null);function a(i){!n.value||!e.rgba||(on("mousemove",document,o),on("mouseup",document,l),o(i))}function o(i){const{value:b}=n;if(!b)return;const{width:p,left:m}=b.getBoundingClientRect(),g=(i.clientX-m)/(p-HANDLE_SIZE_NUM$1);e.onUpdateAlpha(normalizeAlpha(g))}function l(){var i;off("mousemove",document,o),off("mouseup",document,l),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:n,railBackgroundImage:computed(()=>{const{rgba:i}=e;return i?`linear-gradient(to right, rgba(${i[0]}, ${i[1]}, ${i[2]}, 0) 0%, rgba(${i[0]}, ${i[1]}, ${i[2]}, 1) 100%)`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:HANDLE_SIZE$2,borderRadius:RADIUS$2},onMousedown:this.handleMouseDown},h("div",{style:{borderRadius:RADIUS$2,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},h("div",{class:`${e}-color-picker-checkboard`}),h("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&h("div",{style:{position:"absolute",left:RADIUS$2,right:RADIUS$2,top:0,bottom:0}},h("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${RADIUS$2})`,borderRadius:RADIUS$2,width:HANDLE_SIZE$2,height:HANDLE_SIZE$2}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:toRgbaString(this.rgba),borderRadius:RADIUS$2,width:HANDLE_SIZE$2,height:HANDLE_SIZE$2}}))))}}),colorPickerInjectionKey=createInjectionKey("n-color-picker");function normalizeRgbUnit(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function normalizeHueUnit(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function normalizeSlvUnit(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function normalizeHexaUnit(e){const n=e.trim();return/^#[0-9a-fA-F]+$/.test(n)?[4,5,7,9].includes(n.length):!1}function normalizeAlphaUnit(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}const inputThemeOverrides={paddingSmall:"0 4px"},ColorInputUnit=defineComponent({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const n=ref(""),{themeRef:a}=inject(colorPickerInjectionKey,null);watchEffect(()=>{n.value=o()});function o(){const{value:b}=e;if(b===null)return"";const{label:p}=e;return p==="HEX"?b:p==="A"?`${Math.floor(b*100)}%`:String(Math.floor(b))}function l(b){n.value=b}function i(b){let p,m;switch(e.label){case"HEX":m=normalizeHexaUnit(b),m&&e.onUpdateValue(b),n.value=o();break;case"H":p=normalizeHueUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break;case"S":case"L":case"V":p=normalizeSlvUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break;case"A":p=normalizeAlphaUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break;case"R":case"G":case"B":p=normalizeRgbUnit(b),p===!1?n.value=o():e.onUpdateValue(p);break}}return{mergedTheme:a,inputValue:n,handleInputChange:i,handleInputUpdateValue:l}},render(){const{mergedTheme:e}=this;return h(NInput,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:inputThemeOverrides,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),ColorInput=defineComponent({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(n,a){const{showAlpha:o}=e;if(e.mode==="hex"){e.onUpdateValue((o?toHexaString:toHexString)(a));return}let l;switch(e.valueArr===null?l=[0,0,0,0]:l=Array.from(e.valueArr),e.mode){case"hsv":l[n]=a,e.onUpdateValue((o?toHsvaString:toHsvString)(l));break;case"rgb":l[n]=a,e.onUpdateValue((o?toRgbaString:toRgbString)(l));break;case"hsl":l[n]=a,e.onUpdateValue((o?toHslaString:toHslString)(l));break}}}},render(){const{clsPrefix:e,modes:n}=this;return h("div",{class:`${e}-color-picker-input`},h("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:n.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),h(NInputGroup,null,{default:()=>{const{mode:a,valueArr:o,showAlpha:l}=this;if(a==="hex"){let i=null;try{i=o===null?null:(l?toHexaString:toHexString)(o)}catch(b){}return h(ColorInputUnit,{label:"HEX",showAlpha:l,value:i,onUpdateValue:b=>{this.handleUnitUpdateValue(0,b)}})}return(a+(l?"a":"")).split("").map((i,b)=>h(ColorInputUnit,{label:i.toUpperCase(),value:o===null?null:o[b],onUpdateValue:p=>{this.handleUnitUpdateValue(b,p)}}))}}))}});function normalizeColor(e,n){if(n==="hsv"){const[a,o,l,i]=hsva(e);return toRgbaString([...hsv2rgb(a,o,l),i])}return e}function getHexFromName(e){const n=document.createElement("canvas").getContext("2d");return n?(n.fillStyle=e,n.fillStyle):"#000000"}const ColorPickerSwatches=defineComponent({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const n=computed(()=>e.swatches.map(i=>{const b=getModeFromValue(i);return{value:i,mode:b,legalValue:normalizeColor(i,b)}}));function a(i){const{mode:b}=e;let{value:p,mode:m}=i;return m||(m="hex",/^[a-zA-Z]+$/.test(p)?p=getHexFromName(p):(warn("color-picker",`color ${p} in swatches is invalid.`),p="#000000")),m===b?p:convertColor(p,b,m)}function o(i){e.onUpdateColor(a(i))}function l(i,b){i.key==="Enter"&&o(b)}return{parsedSwatchesRef:n,handleSwatchSelect:o,handleSwatchKeyDown:l}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(n=>h("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(n)},onKeydown:a=>{this.handleSwatchKeyDown(a,n)}},h("div",{class:`${e}-color-picker-swatch__fill`,style:{background:n.legalValue}}))))}}),ColorPickerTrigger=defineComponent({name:"ColorPickerTrigger",slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:n,renderLabelRef:a}=inject(colorPickerInjectionKey,null);return()=>{const{hsla:o,value:l,clsPrefix:i,onClick:b,disabled:p}=e,m=n.label||a.value;return h("div",{class:[`${i}-color-picker-trigger`,p&&`${i}-color-picker-trigger--disabled`],onClick:p?void 0:b},h("div",{class:`${i}-color-picker-trigger__fill`},h("div",{class:`${i}-color-picker-checkboard`}),h("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:o?toHslaString(o):""}}),l&&o?h("div",{class:`${i}-color-picker-trigger__value`,style:{color:o[2]>50||o[3]<.5?"black":"white"}},m?m(l):l):null))}}}),ColorPreview=defineComponent({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const n=getModeFromValue(e);return!!(!e||n&&n!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function n(a){var o;const l=a.target.value;(o=e.onUpdateColor)===null||o===void 0||o.call(e,convertColor(l.toUpperCase(),e.mode,"hex")),a.stopPropagation()}return{handleChange:n}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-preview__preview`},h("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),h("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),HANDLE_SIZE$1="12px",HANDLE_SIZE_NUM=12,RADIUS$1="6px",RADIUS_NUM=6,GRADIENT="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",HueSlider=defineComponent({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const n=ref(null);function a(i){n.value&&(on("mousemove",document,o),on("mouseup",document,l),o(i))}function o(i){const{value:b}=n;if(!b)return;const{width:p,left:m}=b.getBoundingClientRect(),g=normalizeHue((i.clientX-m-RADIUS_NUM)/(p-HANDLE_SIZE_NUM)*360);e.onUpdateHue(g)}function l(){var i;off("mousemove",document,o),off("mouseup",document,l),(i=e.onComplete)===null||i===void 0||i.call(e)}return{railRef:n,handleMouseDown:a}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-slider`,style:{height:HANDLE_SIZE$1,borderRadius:RADIUS$1}},h("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:GRADIENT,height:HANDLE_SIZE$1,borderRadius:RADIUS$1,position:"relative"},onMousedown:this.handleMouseDown},h("div",{style:{position:"absolute",left:RADIUS$1,right:RADIUS$1,top:0,bottom:0}},h("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${RADIUS$1})`,borderRadius:RADIUS$1,width:HANDLE_SIZE$1,height:HANDLE_SIZE$1}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:RADIUS$1,width:HANDLE_SIZE$1,height:HANDLE_SIZE$1}})))))}}),HANDLE_SIZE="12px",RADIUS="6px",Pallete=defineComponent({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const n=ref(null);function a(i){n.value&&(on("mousemove",document,o),on("mouseup",document,l),o(i))}function o(i){const{value:b}=n;if(!b)return;const{width:p,height:m,left:g,bottom:C}=b.getBoundingClientRect(),R=(C-i.clientY)/m,B=(i.clientX-g)/p,z=100*(B>1?1:B<0?0:B),H=100*(R>1?1:R<0?0:R);e.onUpdateSV(z,H)}function l(){var i;off("mousemove",document,o),off("mouseup",document,l),(i=e.onComplete)===null||i===void 0||i.call(e)}return{palleteRef:n,handleColor:computed(()=>{const{rgba:i}=e;return i?`rgb(${i[0]}, ${i[1]}, ${i[2]})`:""}),handleMouseDown:a}},render(){const{clsPrefix:e}=this;return h("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},h("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),h("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&h("div",{class:`${e}-color-picker-handle`,style:{width:HANDLE_SIZE,height:HANDLE_SIZE,borderRadius:RADIUS,left:`calc(${this.displayedSv[0]}% - ${RADIUS})`,bottom:`calc(${this.displayedSv[1]}% - ${RADIUS})`}},h("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:RADIUS,width:HANDLE_SIZE,height:HANDLE_SIZE}})))}}),style$1=c([cB("color-picker",`
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
 `)])])])])]),colorPickerProps=Object.assign(Object.assign({},useTheme.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:useAdjustedTo.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),NColorPicker=defineComponent({name:"ColorPicker",props:colorPickerProps,slots:Object,setup(e,{slots:n}){const a=ref(null);let o=null;const l=useFormItem(e),{mergedSizeRef:i,mergedDisabledRef:b}=l,{localeRef:p}=useLocale("global"),{mergedClsPrefixRef:m,namespaceRef:g,inlineThemeDisabled:C}=useConfig(e),R=useTheme("ColorPicker","-color-picker",style$1,colorPickerLight$1,e,m);provide(colorPickerInjectionKey,{themeRef:R,renderLabelRef:toRef(e,"renderLabel"),colorPickerSlots:n});const B=ref(e.defaultShow),z=useMergedState(toRef(e,"show"),B);function H(u){const{onUpdateShow:k,"onUpdate:show":V}=e;k&&call(k,u),V&&call(V,u),B.value=u}const{defaultValue:Z}=e,F=ref(Z===void 0?deriveDefaultValue(e.modes,e.showAlpha):Z),S=useMergedState(toRef(e,"value"),F),N=ref([S.value]),v=ref(0),D=computed(()=>getModeFromValue(S.value)),{modes:E}=e,L=ref(getModeFromValue(S.value)||E[0]||"rgb");function w(){const{modes:u}=e,{value:k}=L,V=u.findIndex(A=>A===k);~V?L.value=u[(V+1)%u.length]:L.value="rgb"}let r,d,U,T,q,W,G,j;const ee=computed(()=>{const{value:u}=S;if(!u)return null;switch(D.value){case"hsv":return hsva(u);case"hsl":return[r,d,U,j]=hsla(u),[...hsl2hsv(r,d,U),j];case"rgb":case"hex":return[q,W,G,j]=rgba(u),[...rgb2hsv(q,W,G),j]}}),X=computed(()=>{const{value:u}=S;if(!u)return null;switch(D.value){case"rgb":case"hex":return rgba(u);case"hsv":return[r,d,T,j]=hsva(u),[...hsv2rgb(r,d,T),j];case"hsl":return[r,d,U,j]=hsla(u),[...hsl2rgb(r,d,U),j]}}),te=computed(()=>{const{value:u}=S;if(!u)return null;switch(D.value){case"hsl":return hsla(u);case"hsv":return[r,d,T,j]=hsva(u),[...hsv2hsl(r,d,T),j];case"rgb":case"hex":return[q,W,G,j]=rgba(u),[...rgb2hsl(q,W,G),j]}}),le=computed(()=>{switch(L.value){case"rgb":case"hex":return X.value;case"hsv":return ee.value;case"hsl":return te.value}}),Y=ref(0),ne=ref(1),oe=ref([0,0]);function se(u,k){const{value:V}=ee,A=Y.value,$=V?V[3]:1;oe.value=[u,k];const{showAlpha:t}=e;switch(L.value){case"hsv":P((t?toHsvaString:toHsvString)([A,u,k,$]),"cursor");break;case"hsl":P((t?toHslaString:toHslString)([...hsv2hsl(A,u,k),$]),"cursor");break;case"rgb":P((t?toRgbaString:toRgbString)([...hsv2rgb(A,u,k),$]),"cursor");break;case"hex":P((t?toHexaString:toHexString)([...hsv2rgb(A,u,k),$]),"cursor");break}}function ve(u){Y.value=u;const{value:k}=ee;if(!k)return;const[,V,A,$]=k,{showAlpha:t}=e;switch(L.value){case"hsv":P((t?toHsvaString:toHsvString)([u,V,A,$]),"cursor");break;case"rgb":P((t?toRgbaString:toRgbString)([...hsv2rgb(u,V,A),$]),"cursor");break;case"hex":P((t?toHexaString:toHexString)([...hsv2rgb(u,V,A),$]),"cursor");break;case"hsl":P((t?toHslaString:toHslString)([...hsv2hsl(u,V,A),$]),"cursor");break}}function ge(u){switch(L.value){case"hsv":[r,d,T]=ee.value,P(toHsvaString([r,d,T,u]),"cursor");break;case"rgb":[q,W,G]=X.value,P(toRgbaString([q,W,G,u]),"cursor");break;case"hex":[q,W,G]=X.value,P(toHexaString([q,W,G,u]),"cursor");break;case"hsl":[r,d,U]=te.value,P(toHslaString([r,d,U,u]),"cursor");break}ne.value=u}function P(u,k){k==="cursor"?o=u:o=null;const{nTriggerFormChange:V,nTriggerFormInput:A}=l,{onUpdateValue:$,"onUpdate:value":t}=e;$&&call($,u),t&&call(t,u),V(),A(),F.value=u}function he(u){P(u,"input"),nextTick(ae)}function ae(u=!0){const{value:k}=S;if(k){const{nTriggerFormChange:V,nTriggerFormInput:A}=l,{onComplete:$}=e;$&&$(k);const{value:t}=N,{value:s}=v;u&&(t.splice(s+1,t.length,k),v.value=s+1),V(),A()}}function ce(){const{value:u}=v;u-1<0||(P(N.value[u-1],"input"),ae(!1),v.value=u-1)}function xe(){const{value:u}=v;u<0||u+1>=N.value.length||(P(N.value[u+1],"input"),ae(!1),v.value=u+1)}function ye(){P(null,"input");const{onClear:u}=e;u&&u(),H(!1)}function de(){const{value:u}=S,{onConfirm:k}=e;k&&k(u),H(!1)}const ue=computed(()=>v.value>=1),fe=computed(()=>{const{value:u}=N;return u.length>1&&v.value<u.length-1});watch(z,u=>{u||(N.value=[S.value],v.value=0)}),watchEffect(()=>{if(!(o&&o===S.value)){const{value:u}=ee;u&&(Y.value=u[0],ne.value=u[3],oe.value=[u[1],u[2]])}o=null});const pe=computed(()=>{const{value:u}=i,{common:{cubicBezierEaseInOut:k},self:{textColor:V,color:A,panelFontSize:$,boxShadow:t,border:s,borderRadius:f,dividerColor:_,[createKey("height",u)]:I,[createKey("fontSize",u)]:M}}=R.value;return{"--n-bezier":k,"--n-text-color":V,"--n-color":A,"--n-panel-font-size":$,"--n-font-size":M,"--n-box-shadow":t,"--n-border":s,"--n-border-radius":f,"--n-height":I,"--n-divider-color":_}}),J=C?useThemeClass("color-picker",computed(()=>i.value[0]),pe,e):void 0;function _e(){var u;const{value:k}=X,{value:V}=Y,{internalActions:A,modes:$,actions:t}=e,{value:s}=R,{value:f}=m;return h("div",{class:[`${f}-color-picker-panel`,J==null?void 0:J.themeClass.value],onDragstart:_=>{_.preventDefault()},style:C?void 0:pe.value},h("div",{class:`${f}-color-picker-control`},h(Pallete,{clsPrefix:f,rgba:k,displayedHue:V,displayedSv:oe.value,onUpdateSV:se,onComplete:ae}),h("div",{class:`${f}-color-picker-preview`},h("div",{class:`${f}-color-picker-preview__sliders`},h(HueSlider,{clsPrefix:f,hue:V,onUpdateHue:ve,onComplete:ae}),e.showAlpha?h(AlphaSlider,{clsPrefix:f,rgba:k,alpha:ne.value,onUpdateAlpha:ge,onComplete:ae}):null),e.showPreview?h(ColorPreview,{clsPrefix:f,mode:L.value,color:X.value&&toHexString(X.value),onUpdateColor:_=>{P(_,"input")}}):null),h(ColorInput,{clsPrefix:f,showAlpha:e.showAlpha,mode:L.value,modes:$,onUpdateMode:w,value:S.value,valueArr:le.value,onUpdateValue:he}),((u=e.swatches)===null||u===void 0?void 0:u.length)&&h(ColorPickerSwatches,{clsPrefix:f,mode:L.value,swatches:e.swatches,onUpdateColor:_=>{P(_,"input")}})),t!=null&&t.length?h("div",{class:`${f}-color-picker-action`},t.includes("confirm")&&h(NButton,{size:"small",onClick:de,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button},{default:()=>p.value.confirm}),t.includes("clear")&&h(NButton,{size:"small",onClick:ye,disabled:!S.value,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button},{default:()=>p.value.clear})):null,n.action?h("div",{class:`${f}-color-picker-action`},{default:n.action}):A?h("div",{class:`${f}-color-picker-action`},A.includes("undo")&&h(NButton,{size:"small",onClick:ce,disabled:!ue.value,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button},{default:()=>p.value.undo}),A.includes("redo")&&h(NButton,{size:"small",onClick:xe,disabled:!fe.value,theme:s.peers.Button,themeOverrides:s.peerOverrides.Button},{default:()=>p.value.redo})):null)}return{mergedClsPrefix:m,namespace:g,selfRef:a,hsla:te,rgba:X,mergedShow:z,mergedDisabled:b,isMounted:isMounted(),adjustedTo:useAdjustedTo(e),mergedValue:S,handleTriggerClick(){H(!0)},handleClickOutside(u){var k;!((k=a.value)===null||k===void 0)&&k.contains(getPreciseEventTarget(u))||H(!1)},renderPanel:_e,cssVars:C?void 0:pe,themeClass:J==null?void 0:J.themeClass,onRender:J==null?void 0:J.onRender}},render(){const{mergedClsPrefix:e,onRender:n}=this;return n==null||n(),h("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},h(VBinder,null,{default:()=>[h(VTarget,null,{default:()=>h(ColorPickerTrigger,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick})}),h(VFollower,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===useAdjustedTo.tdkey,to:this.adjustedTo},{default:()=>h(Transition,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?withDirectives(this.renderPanel(),[[clickoutside,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),sizeVariables={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};function self(e){const n="rgba(0, 0, 0, .85)",a="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:o,primaryColor:l,baseColor:i,cardColor:b,modalColor:p,popoverColor:m,borderRadius:g,fontSize:C,opacityDisabled:R}=e;return Object.assign(Object.assign({},sizeVariables),{fontSize:C,markFontSize:C,railColor:o,railColorHover:o,fillColor:l,fillColorHover:l,opacityDisabled:R,handleColor:"#FFF",dotColor:b,dotColorModal:p,dotColorPopover:m,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:n,indicatorBoxShadow:a,indicatorTextColor:i,indicatorBorderRadius:g,dotBorder:`2px solid ${o}`,dotBorderActive:`2px solid ${l}`,dotBoxShadow:""})}const sliderLight={name:"Slider",common:commonLight,self},sliderLight$1=sliderLight,style=c([cB("slider",`
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
 `),fadeInScaleUpTransition()]),insideModal(cB("slider",[cB("slider-dot","background-color: var(--n-dot-color-modal);")])),insidePopover(cB("slider",[cB("slider-dot","background-color: var(--n-dot-color-popover);")]))]);function isTouchEvent(e){return window.TouchEvent&&e instanceof window.TouchEvent}function useRefs(){const e=new Map,n=a=>o=>{e.set(a,o)};return onBeforeUpdate(()=>{e.clear()}),[e,n]}const eventButtonLeft=0,sliderProps=Object.assign(Object.assign({},useTheme.props),{to:useAdjustedTo.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),NSlider=defineComponent({name:"Slider",props:sliderProps,slots:Object,setup(e){const{mergedClsPrefixRef:n,namespaceRef:a,inlineThemeDisabled:o}=useConfig(e),l=useTheme("Slider","-slider",style,sliderLight$1,e,n),i=ref(null),[b,p]=useRefs(),[m,g]=useRefs(),C=ref(new Set),R=useFormItem(e),{mergedDisabledRef:B}=R,z=computed(()=>{const{step:t}=e;if(Number(t)<=0||t==="mark")return 0;const s=t.toString();let f=0;return s.includes(".")&&(f=s.length-s.indexOf(".")-1),f}),H=ref(e.defaultValue),Z=toRef(e,"value"),F=useMergedState(Z,H),S=computed(()=>{const{value:t}=F;return(e.range?t:[t]).map(oe)}),N=computed(()=>S.value.length>2),v=computed(()=>e.placement===void 0?e.vertical?"right":"top":e.placement),D=computed(()=>{const{marks:t}=e;return t?Object.keys(t).map(Number.parseFloat):null}),E=ref(-1),L=ref(-1),w=ref(-1),r=ref(!1),d=ref(!1),U=computed(()=>{const{vertical:t,reverse:s}=e;return t?s?"top":"bottom":s?"right":"left"}),T=computed(()=>{if(N.value)return;const t=S.value,s=se(e.range?Math.min(...t):e.min),f=se(e.range?Math.max(...t):t[0]),{value:_}=U;return e.vertical?{[_]:`${s}%`,height:`${f-s}%`}:{[_]:`${s}%`,width:`${f-s}%`}}),q=computed(()=>{const t=[],{marks:s}=e;if(s){const f=S.value.slice();f.sort((K,O)=>K-O);const{value:_}=U,{value:I}=N,{range:M}=e,Q=I?()=>!1:K=>M?K>=f[0]&&K<=f[f.length-1]:K<=f[0];for(const K of Object.keys(s)){const O=Number(K);t.push({active:Q(O),key:O,label:s[K],style:{[_]:`${se(O)}%`}})}}return t});function W(t,s){const f=se(t),{value:_}=U;return{[_]:`${f}%`,zIndex:s===E.value?1:0}}function G(t){return e.showTooltip||w.value===t||E.value===t&&r.value}function j(t){return r.value?!(E.value===t&&L.value===t):!0}function ee(t){var s;~t&&(E.value=t,(s=b.get(t))===null||s===void 0||s.focus())}function X(){m.forEach((t,s)=>{G(s)&&t.syncPosition()})}function te(t){const{"onUpdate:value":s,onUpdateValue:f}=e,{nTriggerFormInput:_,nTriggerFormChange:I}=R;f&&call(f,t),s&&call(s,t),H.value=t,_(),I()}function le(t){const{range:s}=e;if(s){if(Array.isArray(t)){const{value:f}=S;t.join()!==f.join()&&te(t)}}else Array.isArray(t)||S.value[0]!==t&&te(t)}function Y(t,s){if(e.range){const f=S.value.slice();f.splice(s,1,t),le(f)}else le(t)}function ne(t,s,f){const _=f!==void 0;f||(f=t-s>0?1:-1);const I=D.value||[],{step:M}=e;if(M==="mark"){const O=P(t,I.concat(s),_?f:void 0);return O?O.value:s}if(M<=0)return s;const{value:Q}=z;let K;if(_){const O=Number((s/M).toFixed(Q)),re=Math.floor(O),we=O>re?re:re-1,ke=O<re?re:re+1;K=P(s,[Number((we*M).toFixed(Q)),Number((ke*M).toFixed(Q)),...I],f)}else{const O=ge(t);K=P(t,[...I,O])}return K?oe(K.value):s}function oe(t){return Math.min(e.max,Math.max(e.min,t))}function se(t){const{max:s,min:f}=e;return(t-f)/(s-f)*100}function ve(t){const{max:s,min:f}=e;return f+(s-f)*t}function ge(t){const{step:s,min:f}=e;if(Number(s)<=0||s==="mark")return t;const _=Math.round((t-f)/s)*s+f;return Number(_.toFixed(z.value))}function P(t,s=D.value,f){if(!(s!=null&&s.length))return null;let _=null,I=-1;for(;++I<s.length;){const M=s[I]-t,Q=Math.abs(M);(f===void 0||M*f>0)&&(_===null||Q<_.distance)&&(_={index:I,distance:Q,value:s[I]})}return _}function he(t){const s=i.value;if(!s)return;const f=isTouchEvent(t)?t.touches[0]:t,_=s.getBoundingClientRect();let I;return e.vertical?I=(_.bottom-f.clientY)/_.height:I=(f.clientX-_.left)/_.width,e.reverse&&(I=1-I),ve(I)}function ae(t){if(B.value||!e.keyboard)return;const{vertical:s,reverse:f}=e;switch(t.key){case"ArrowUp":t.preventDefault(),ce(s&&f?-1:1);break;case"ArrowRight":t.preventDefault(),ce(!s&&f?-1:1);break;case"ArrowDown":t.preventDefault(),ce(s&&f?1:-1);break;case"ArrowLeft":t.preventDefault(),ce(!s&&f?1:-1);break}}function ce(t){const s=E.value;if(s===-1)return;const{step:f}=e,_=S.value[s],I=Number(f)<=0||f==="mark"?_:_+f*t;Y(ne(I,_,t>0?1:-1),s)}function xe(t){var s,f;if(B.value||!isTouchEvent(t)&&t.button!==eventButtonLeft)return;const _=he(t);if(_===void 0)return;const I=S.value.slice(),M=e.range?(f=(s=P(_,I))===null||s===void 0?void 0:s.index)!==null&&f!==void 0?f:-1:0;M!==-1&&(t.preventDefault(),ee(M),ye(),Y(ne(_,S.value[M]),M))}function ye(){r.value||(r.value=!0,e.onDragstart&&call(e.onDragstart),on("touchend",document,fe),on("mouseup",document,fe),on("touchmove",document,ue),on("mousemove",document,ue))}function de(){r.value&&(r.value=!1,e.onDragend&&call(e.onDragend),off("touchend",document,fe),off("mouseup",document,fe),off("touchmove",document,ue),off("mousemove",document,ue))}function ue(t){const{value:s}=E;if(!r.value||s===-1){de();return}const f=he(t);f!==void 0&&Y(ne(f,S.value[s]),s)}function fe(){de()}function pe(t){E.value=t,B.value||(w.value=t)}function J(t){E.value===t&&(E.value=-1,de()),w.value===t&&(w.value=-1)}function _e(t){w.value=t}function u(t){w.value===t&&(w.value=-1)}watch(E,(t,s)=>void nextTick(()=>L.value=s)),watch(F,()=>{if(e.marks){if(d.value)return;d.value=!0,nextTick(()=>{d.value=!1})}nextTick(X)}),onBeforeUnmount(()=>{de()});const k=computed(()=>{const{self:{markFontSize:t,railColor:s,railColorHover:f,fillColor:_,fillColorHover:I,handleColor:M,opacityDisabled:Q,dotColor:K,dotColorModal:O,handleBoxShadow:re,handleBoxShadowHover:we,handleBoxShadowActive:ke,handleBoxShadowFocus:Be,dotBorder:Ne,dotBoxShadow:Ve,railHeight:Re,railWidthVertical:De,handleSize:Ie,dotHeight:$e,dotWidth:ze,dotBorderRadius:Ae,fontSize:Ue,dotBorderActive:Pe,dotColorPopover:Te},common:{cubicBezierEaseInOut:Fe}}=l.value;return{"--n-bezier":Fe,"--n-dot-border":Ne,"--n-dot-border-active":Pe,"--n-dot-border-radius":Ae,"--n-dot-box-shadow":Ve,"--n-dot-color":K,"--n-dot-color-modal":O,"--n-dot-color-popover":Te,"--n-dot-height":$e,"--n-dot-width":ze,"--n-fill-color":_,"--n-fill-color-hover":I,"--n-font-size":Ue,"--n-handle-box-shadow":re,"--n-handle-box-shadow-active":ke,"--n-handle-box-shadow-focus":Be,"--n-handle-box-shadow-hover":we,"--n-handle-color":M,"--n-handle-size":Ie,"--n-opacity-disabled":Q,"--n-rail-color":s,"--n-rail-color-hover":f,"--n-rail-height":Re,"--n-rail-width-vertical":De,"--n-mark-font-size":t}}),V=o?useThemeClass("slider",void 0,k,e):void 0,A=computed(()=>{const{self:{fontSize:t,indicatorColor:s,indicatorBoxShadow:f,indicatorTextColor:_,indicatorBorderRadius:I}}=l.value;return{"--n-font-size":t,"--n-indicator-border-radius":I,"--n-indicator-box-shadow":f,"--n-indicator-color":s,"--n-indicator-text-color":_}}),$=o?useThemeClass("slider-indicator",void 0,A,e):void 0;return{mergedClsPrefix:n,namespace:a,uncontrolledValue:H,mergedValue:F,mergedDisabled:B,mergedPlacement:v,isMounted:isMounted(),adjustedTo:useAdjustedTo(e),dotTransitionDisabled:d,markInfos:q,isShowTooltip:G,shouldKeepTooltipTransition:j,handleRailRef:i,setHandleRefs:p,setFollowerRefs:g,fillStyle:T,getHandleStyle:W,activeIndex:E,arrifiedValues:S,followerEnabledIndexSet:C,handleRailMouseDown:xe,handleHandleFocus:pe,handleHandleBlur:J,handleHandleMouseEnter:_e,handleHandleMouseLeave:u,handleRailKeyDown:ae,indicatorCssVars:o?void 0:A,indicatorThemeClass:$==null?void 0:$.themeClass,indicatorOnRender:$==null?void 0:$.onRender,cssVars:o?void 0:k,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender}},render(){var e;const{mergedClsPrefix:n,themeClass:a,formatTooltip:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${n}-slider`,a,{[`${n}-slider--disabled`]:this.mergedDisabled,[`${n}-slider--active`]:this.activeIndex!==-1,[`${n}-slider--with-mark`]:this.marks,[`${n}-slider--vertical`]:this.vertical,[`${n}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},h("div",{class:`${n}-slider-rail`},h("div",{class:`${n}-slider-rail__fill`,style:this.fillStyle}),this.marks?h("div",{class:[`${n}-slider-dots`,this.dotTransitionDisabled&&`${n}-slider-dots--transition-disabled`]},this.markInfos.map(l=>h("div",{key:l.key,class:[`${n}-slider-dot`,{[`${n}-slider-dot--active`]:l.active}],style:l.style}))):null,h("div",{ref:"handleRailRef",class:`${n}-slider-handles`},this.arrifiedValues.map((l,i)=>{const b=this.isShowTooltip(i);return h(VBinder,null,{default:()=>[h(VTarget,null,{default:()=>h("div",{ref:this.setHandleRefs(i),class:`${n}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:"slider","aria-valuenow":l,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?"vertical":"horizontal","aria-disabled":this.disabled,style:this.getHandleStyle(l,i),onFocus:()=>{this.handleHandleFocus(i)},onBlur:()=>{this.handleHandleBlur(i)},onMouseenter:()=>{this.handleHandleMouseEnter(i)},onMouseleave:()=>{this.handleHandleMouseLeave(i)}},resolveSlot(this.$slots.thumb,()=>[h("div",{class:`${n}-slider-handle`})]))}),this.tooltip&&h(VFollower,{ref:this.setFollowerRefs(i),show:b,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(i),teleportDisabled:this.adjustedTo===useAdjustedTo.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>h(Transition,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(i),onEnter:()=>{this.followerEnabledIndexSet.add(i)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(i)}},{default:()=>{var p;return b?((p=this.indicatorOnRender)===null||p===void 0||p.call(this),h("div",{class:[`${n}-slider-handle-indicator`,this.indicatorThemeClass,`${n}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof o=="function"?o(l):l)):null}})})]})})),this.marks?h("div",{class:`${n}-slider-marks`},this.markInfos.map(l=>h("div",{key:l.key,class:`${n}-slider-mark`,style:l.style},typeof l.label=="function"?l.label():l.label))):null))}}),formRef=ref(null),SourceType={plaza:1,created:2},defaultFormData={avatar:default_friend_avatar,cssAvatar:"",name:"",friendType:1,tag:"",intro:"",welcome:"",systemPrompt:"",contentPrompt:"",messageContextSize:32,friendSource:SourceType.created,conversationStart:[""],aliyunDashscopeWorkspaceId:"",aliyunDashscopeAppId:"",aliyunDashscopeApiKey:"",openaiRequestBody:{maxTokens:1e3,temperature:1,topP:0,presencePenalty:0,frequencyPenalty:0}},formData=ref(JSON.parse(JSON.stringify(defaultFormData))),verify=(e,n)=>{let a=e;const{step:o,max:l,min:i}=n;if(o)if(isInteger(o)){const b=Math.floor(e/o);a=o*b}else{const b=String(o),[p,m]=b.split(".");let g=1;for(let B=0;B<m.length;B++)g*=10;const C=o*g,R=Math.floor(e*g/C);a=C*R/g}return l&&(a=a>l?l:a),i&&(a=a<i?i:a),a},config={messageContextSize:{label:"上下文数量",popover:"每次聊天发送消息时携带的历史消息数量越多，话题关联性就越高；反之，数量越少，关联性就越低。如果设置的消息数量超过模型的最大限制，系统会自动截取，以确保话题的正常进行。",attrs:{min:2,max:64,step:2},stepVerify:e=>verify(Number(e),config.messageContextSize.attrs)},openaiRequestBody:{maxTokens:{label:"最大回复数",popover:"生成内容的最大 token 数量。输入和生成的总长度受模型上下文长度的限制。",attrs:{min:100,max:2800,step:50},stepVerify:e=>verify(Number(e),config.openaiRequestBody.maxTokens.attrs)},temperature:{label:"随机性",popover:"生成内容的随机性，在0和2之间。较高的值如0.8会使输出更随机，而较低的值如0.2会使其更加集中和确定性。我们通常建议修改这个或者「词汇熟悉」，但不要同时修改两者。",attrs:{min:0,max:2,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.temperature.attrs)},topP:{label:"词汇属性",popover:"一种与随机性相对的方法，模型考虑的是具有 top_p 概率质量的标记的结果。因此，0.1 表示只考虑组成前 10% 概率质量的标记。我们通常建议修改这个或者「随机性」，但不要同时修改两者。",attrs:{min:0,max:1,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.topP.attrs)},presencePenalty:{label:"话题新鲜度",popover:"默认值为 0，值越大，越能够让Ai更好地控制新话题的引入，建议微调或不变。",attrs:{min:-2,max:2,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.presencePenalty.attrs)},frequencyPenalty:{label:"频率惩罚度",popover:"在-2.0和2.0之间的数字。正值根据文本中新标记的现有频率对其进行惩罚，从而降低模型重复相同行的可能性。",attrs:{min:-2,max:2,step:.1},stepVerify:e=>verify(Number(e),config.openaiRequestBody.frequencyPenalty.attrs)}}},rules={name:{required:!0,message:" ",trigger:"blur"},aliyunDashscopeWorkspaceId:{required:()=>formData.value.friendType===3,message:" ",trigger:"blur"},aliyunDashscopeAppId:{required:()=>formData.value.friendType===3,message:" ",trigger:"blur"}},formDataClear=()=>{formData.value=JSON.parse(JSON.stringify(defaultFormData))},Popover_vue_vue_type_style_index_0_scoped_c95df1c2_lang="",_hoisted_1$5={class:"right_tip"},_sfc_main$6={__name:"Popover",props:["text"],setup(e){const n=e;return(a,o)=>(openBlock(),createBlock(unref(NPopover),{trigger:"hover",raw:""},{trigger:withCtx(()=>o[0]||(o[0]=[createBaseVNode("span",{class:"iconfont icon-wenhao"},null,-1)])),default:withCtx(()=>[createBaseVNode("div",_hoisted_1$5,toDisplayString(n.text),1)]),_:1}))}},Popover=_export_sfc(_sfc_main$6,[["__scopeId","data-v-c95df1c2"]]),FormComp_vue_vue_type_style_index_0_scoped_eab2f6dd_lang="",_hoisted_1$4={class:"item_contet"},_hoisted_2$4={class:"item_contet"},_hoisted_3$2={class:"item_contet"},_hoisted_4$1={class:"item_contet"},_hoisted_5$1={class:"close"},_hoisted_6$1={key:2,class:"diver"},_hoisted_7$1={key:3},_hoisted_8$1={class:"flex"},_hoisted_9$1={class:"flex"},_hoisted_10$1={class:"flex"},_hoisted_11$1={class:"flex"},_hoisted_12={class:"flex"},_hoisted_13={class:"flex"},_hoisted_14={key:4,class:"diver"},_hoisted_15={class:"item_contet"},_hoisted_16={key:6,class:"diver"},_hoisted_17={key:7},_hoisted_18={class:"item_contet"},_hoisted_19={class:"item_contet"},_hoisted_20={class:"item_contet"},_hoisted_21={class:"footer flex"},_sfc_main$5={__name:"FormComp",props:["tags"],emits:["confirm","close"],setup(e,{expose:n,emit:a}){const o=useMessage(),l=inject("resize"),i=e,b=a,p=window.__talkx__.openUrl,m=[{label:"基础对话",value:1},{label:"GPTs (已过时)",value:2,disabled:!0},{label:"阿里云百炼应用",value:3}],g=ref([{text:""}]),C=(w,r)=>{const d=g.value.length;w&&r==d-1&&d<4&&g.value.push({text:""})},R=w=>{if(g.value.length<=1){o.warning("至少需要一个快速开始");return}g.value.splice(w,1)};watch(g,(w,r)=>{formData.value.conversationStart=w.filter(({text:d})=>d.trim()).map(({text:d})=>d)},{deep:!0});const B=()=>{g.value=formData.value.conversationStart.filter(w=>w).map(w=>({text:w})),g.value.length<4&&g.value.push({text:""})},z=()=>p(systemPrompt_url),H=computed(()=>i.tags.map(({name:w})=>({label:w,value:w}))||[]),Z=debance(w=>w(),300),F=(w,r)=>{const[d,U]=r.split(".");let T=w;if(d&&U){const q=config[d][U].stepVerify;q&&Z(()=>{formData.value[d][U]=q(T)}),formData.value[d][U]=T}else{const q=config[d].stepVerify;q&&Z(()=>{formData.value[d]=q(T)}),formData.value[d]=T}},S=()=>{formData.value.openaiRequestBody.temperature=0},N=()=>{formData.value.openaiRequestBody.topP=0};let v=!1;const D=()=>v=!1,E=()=>b("close"),L=()=>ie(this,null,function*(){if(!formRef.value||v)return;if(v=!0,yield new Promise(r=>formRef.value.validate(r)))return D();b("confirm",D)});return onMounted(()=>B()),n({update:B}),(w,r)=>(openBlock(),createBlock(unref(NForm),{class:"formComp",ref_key:"formRef",ref:formRef,"label-placement":unref(l).smallRef.value?"top":"left","label-width":110,model:unref(formData),rules:unref(rules)},{default:withCtx(()=>[r[34]||(r[34]=createBaseVNode("div",{class:"diver"},"基本信息",-1)),createVNode(unref(NFormItem),{label:"昵称",path:"name"},{default:withCtx(()=>[createVNode(unref(NInput),{class:"_input",value:unref(formData).name,"onUpdate:value":r[0]||(r[0]=d=>unref(formData).name=d),maxlength:"12","show-count":"",placeholder:""},null,8,["value"])]),_:1}),createVNode(unref(NFormItem),{label:"AI类型",path:"type"},{default:withCtx(()=>[createVNode(unref(NSelect),{class:"tp_select",value:unref(formData).friendType,"onUpdate:value":r[1]||(r[1]=d=>unref(formData).friendType=d),options:m},null,8,["value"])]),_:1}),createVNode(unref(NFormItem),{label:"标签",path:"tag"},{default:withCtx(()=>[createVNode(unref(NSelect),{class:"tp_select",value:unref(formData).tag,"onUpdate:value":r[2]||(r[2]=d=>unref(formData).tag=d),options:H.value},null,8,["value","options"])]),_:1}),createVNode(unref(NFormItem),{label:"简介",path:"intro"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_1$4,[createVNode(unref(NInput),{class:"_input",value:unref(formData).intro,"onUpdate:value":r[3]||(r[3]=d=>unref(formData).intro=d),maxlength:"30","show-count":"",placeholder:""},null,8,["value"]),r[22]||(r[22]=createBaseVNode("div",{class:"desc"},"简单介绍它的作用",-1))])]),_:1}),createVNode(unref(NFormItem),{label:"招呼语",path:"welcome"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_2$4,[createVNode(unref(NInput),{class:"_input",value:unref(formData).welcome,"onUpdate:value":r[4]||(r[4]=d=>unref(formData).welcome=d),maxlength:"100","show-count":"",placeholder:""},null,8,["value"]),r[23]||(r[23]=createBaseVNode("div",{class:"desc"},"建立新话题页面所展示的招呼",-1))])]),_:1}),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:0,label:"指令",path:"systemPrompt"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_3$2,[createVNode(unref(NInput),{class:"_input",type:"textarea","show-count":"",autosize:{minRows:5,maxRows:5},value:unref(formData).systemPrompt,"onUpdate:value":r[5]||(r[5]=d=>unref(formData).systemPrompt=d),maxlength:"4000",placeholder:""},null,8,["value"]),createBaseVNode("div",{class:"desc"},[r[24]||(r[24]=createTextVNode(" 设置这个AI的系统指令（角色描述），通过 ")),createBaseVNode("span",{class:"model_look",onClick:z},"「这里」"),r[25]||(r[25]=createTextVNode(" 可以获取一些帮助 "))])])]),_:1})):createCommentVNode("",!0),unref(formData).friendSource==unref(SourceType).created?(openBlock(),createBlock(unref(NFormItem),{key:1,label:"快速开始",path:"conversationStart"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_4$1,[(openBlock(!0),createElementBlock(Fragment,null,renderList(g.value,(d,U)=>(openBlock(),createElementBlock("div",{class:"rowInput",key:d},[(openBlock(),createBlock(unref(NInput),{key:U,value:d.text,"onUpdate:value":T=>d.text=T,onInput:T=>C(T,U),class:"_input",maxlength:"100","show-count":"",placeholder:""},null,8,["value","onUpdate:value","onInput"])),createBaseVNode("div",_hoisted_5$1,[createVNode(unref(NButton),{class:"_close_btn",onClick:T=>R(U)},{default:withCtx(()=>r[26]||(r[26]=[createBaseVNode("span",{class:"iconfont icon-close"},null,-1)])),_:2},1032,["onClick"])])]))),128)),r[27]||(r[27]=createBaseVNode("div",{class:"desc"},"提供用户快速开始对话的示例",-1))])]),_:1})):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createElementBlock("div",_hoisted_6$1,"模型设置")):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createElementBlock("div",_hoisted_7$1,[createVNode(unref(NFormItem),{class:"modelSet",path:"messageContextSize"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).messageContextSize.label),1),createVNode(Popover,{text:unref(config).messageContextSize.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_8$1,[createVNode(unref(NSlider),mergeProps({class:"slider",value:unref(formData).messageContextSize,"onUpdate:value":r[6]||(r[6]=d=>unref(formData).messageContextSize=d)},unref(config).messageContextSize.attrs),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).messageContextSize,onInput:r[7]||(r[7]=d=>F(d,"messageContextSize")),placeholder:""},null,8,["value"])])]),_:1}),createVNode(unref(NFormItem),{class:"modelSet",path:"openaiRequestBody.maxTokens"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.maxTokens.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.maxTokens.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_9$1,[createVNode(unref(NSlider),mergeProps({class:"slider"},unref(config).openaiRequestBody.maxTokens.attrs,{value:unref(formData).openaiRequestBody.maxTokens,"onUpdate:value":r[8]||(r[8]=d=>unref(formData).openaiRequestBody.maxTokens=d)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.maxTokens,onInput:r[9]||(r[9]=d=>F(d,"openaiRequestBody.maxTokens")),placeholder:""},null,8,["value"])])]),_:1}),createVNode(unref(NFormItem),{class:"modelSet",path:"openaiRequestBody.temperature"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.temperature.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.temperature.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_10$1,[createVNode(unref(NSlider),mergeProps({class:"slider","onUpdate:value":N},unref(config).openaiRequestBody.temperature.attrs,{value:unref(formData).openaiRequestBody.temperature,"onUpdate:value":r[10]||(r[10]=d=>unref(formData).openaiRequestBody.temperature=d)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.temperature,onInput:r[11]||(r[11]=d=>F(d,"openaiRequestBody.temperature")),placeholder:""},null,8,["value"])])]),_:1}),createVNode(unref(NFormItem),{class:"modelSet",path:"openaiRequestBody.topP"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.topP.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.topP.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_11$1,[createVNode(unref(NSlider),mergeProps({class:"slider","onUpdate:value":S},unref(config).openaiRequestBody.topP.attrs,{value:unref(formData).openaiRequestBody.topP,"onUpdate:value":r[12]||(r[12]=d=>unref(formData).openaiRequestBody.topP=d)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.topP,onInput:r[13]||(r[13]=d=>F(d,"openaiRequestBody.topP")),placeholder:""},null,8,["value"])])]),_:1}),createVNode(unref(NFormItem),{class:"modelSet",path:"openaiRequestBody.presencePenalty"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.presencePenalty.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.presencePenalty.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_12,[createVNode(unref(NSlider),mergeProps({class:"slider"},unref(config).openaiRequestBody.presencePenalty.attrs,{value:unref(formData).openaiRequestBody.presencePenalty,"onUpdate:value":r[14]||(r[14]=d=>unref(formData).openaiRequestBody.presencePenalty=d)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.presencePenalty,onInput:r[15]||(r[15]=d=>F(d,"openaiRequestBody.presencePenalty")),placeholder:""},null,8,["value"])])]),_:1}),createVNode(unref(NFormItem),{class:"modelSet",path:"openaiRequestBody.frequencyPenalty"},{label:withCtx(()=>[createBaseVNode("span",null,toDisplayString(unref(config).openaiRequestBody.frequencyPenalty.label),1),createVNode(Popover,{text:unref(config).openaiRequestBody.frequencyPenalty.popover},null,8,["text"])]),default:withCtx(()=>[createBaseVNode("div",_hoisted_13,[createVNode(unref(NSlider),mergeProps({class:"slider"},unref(config).openaiRequestBody.frequencyPenalty.attrs,{value:unref(formData).openaiRequestBody.frequencyPenalty,"onUpdate:value":r[16]||(r[16]=d=>unref(formData).openaiRequestBody.frequencyPenalty=d)}),null,16,["value"]),createVNode(unref(NInput),{class:"input _input",value:unref(formData).openaiRequestBody.frequencyPenalty,onInput:r[17]||(r[17]=d=>F(d,"openaiRequestBody.frequencyPenalty")),placeholder:""},null,8,["value"])])]),_:1})])):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createElementBlock("div",_hoisted_14,"其他设置")):createCommentVNode("",!0),unref(formData).friendType===1?(openBlock(),createBlock(unref(NFormItem),{key:5,label:"Prompt Template",path:"contentPrompt"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_15,[createVNode(unref(NInput),{class:"_input",type:"textarea","show-count":"",autosize:{minRows:5,maxRows:5},value:unref(formData).contentPrompt,"onUpdate:value":r[18]||(r[18]=d=>unref(formData).contentPrompt=d),maxlength:"4000",placeholder:""},null,8,["value"]),r[28]||(r[28]=createBaseVNode("div",{class:"desc"}," 修改用户的提问时的模板脚本，默认情况不建议设置。 ",-1))])]),_:1})):createCommentVNode("",!0),unref(formData).friendType===3?(openBlock(),createElementBlock("div",_hoisted_16,"阿里云百炼设置")):createCommentVNode("",!0),unref(formData).friendType===3?(openBlock(),createElementBlock("div",_hoisted_17,[createVNode(unref(NFormItem),{label:"业务空间ID",path:"aliyunDashscopeWorkspaceId"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_18,[createVNode(unref(NInput),{class:"_input",value:unref(formData).aliyunDashscopeWorkspaceId,"onUpdate:value":r[19]||(r[19]=d=>unref(formData).aliyunDashscopeWorkspaceId=d),maxlength:"128","show-count":"",placeholder:""},null,8,["value"]),r[29]||(r[29]=createBaseVNode("div",{class:"desc"},"填写阿里云百炼空间ID",-1))])]),_:1}),createVNode(unref(NFormItem),{label:"应用ID",path:"aliyunDashscopeAppId"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_19,[createVNode(unref(NInput),{class:"_input",value:unref(formData).aliyunDashscopeAppId,"onUpdate:value":r[20]||(r[20]=d=>unref(formData).aliyunDashscopeAppId=d),maxlength:"128","show-count":"",placeholder:""},null,8,["value"]),r[30]||(r[30]=createBaseVNode("div",{class:"desc"},"填写阿里云百炼应用ID",-1))])]),_:1}),createVNode(unref(NFormItem),{label:"调用密钥",path:"aliyunDashscopeApiKey"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_20,[createVNode(unref(NInput),{class:"_input",value:unref(formData).aliyunDashscopeApiKey,"onUpdate:value":r[21]||(r[21]=d=>unref(formData).aliyunDashscopeApiKey=d),maxlength:"128","show-count":"",placeholder:""},null,8,["value"]),r[31]||(r[31]=createBaseVNode("div",{class:"desc"},"填写阿里云百炼应用调用的密钥，如果不填则使用系统全局配置的。",-1))])]),_:1})])):createCommentVNode("",!0),createVNode(unref(NFormItem),null,{default:withCtx(()=>[createBaseVNode("div",_hoisted_21,[createVNode(unref(NButton),{class:"_close_btn",onClick:E},{default:withCtx(()=>r[32]||(r[32]=[createTextVNode("取消")])),_:1}),createVNode(unref(NButton),{class:"_confirm_btn",onClick:L,type:"info"},{default:withCtx(()=>r[33]||(r[33]=[createTextVNode(" 确定 ")])),_:1})])]),_:1})]),_:1},8,["label-placement","model","rules"]))}},FormComp=_export_sfc(_sfc_main$5,[["__scopeId","data-v-eab2f6dd"]]),index_vue_vue_type_style_index_0_scoped_66c60425_lang="",scale=2,_sfc_main$4={__name:"index",props:{size:{typeof:Object,default:{width:80,height:80}},bgColor:{type:String,default:"#50c7da"},type:{type:String,default:"text"},text:{type:String,default:"文字"},fontFamily:{type:String,default:"Arial"},offset:{typeof:Object,default:{x:0,y:0}},fontSize:Number},setup(__props,{expose:__expose}){const props=__props,style=computed(()=>{const{width:e,height:n}=props.size;return{width:e+"px",height:n+"px"}}),canvasRef=ref(null);let canvas,ctx;const initCanvas=()=>{!canvasRef.value||canvas||(canvas=canvasRef.value,ctx=canvas.getContext("2d"))},draw=()=>{if(!canvasRef.value)return;initCanvas();const{width,height}=props.size;canvas.width=width*scale,canvas.height=height*scale;const fontSize=props.fontSize||Math.min(Math.floor((width-10)/props.text.length),30);ctx.fillStyle=props.bgColor,ctx.fillRect(0,0,canvas.width,canvas.height),ctx.font=`${fontSize*scale}px ${props.fontFamily}`,ctx.textBaseline="middle",ctx.textAlign="center",ctx.fillStyle="#fff";let text=props.text;props.type=="icon"&&(text?text=eval(('("&#x'+text).replace("&#x","\\u").replace(";","")+'")'):text="");const x=width/2+props.offset.x,y=height/2+props.offset.y;ctx.fillText(text,x*scale,y*scale)};watch(props,draw);const toUrl=()=>canvas.toDataURL("image/png");return onMounted(()=>draw()),__expose({toUrl}),(e,n)=>(openBlock(),createElementBlock("canvas",{class:"canvas",ref_key:"canvasRef",ref:canvasRef,style:normalizeStyle(style.value)},null,4))}},CanvasAvater=_export_sfc(_sfc_main$4,[["__scopeId","data-v-66c60425"]]),styles=`@font-face {
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
}`,index_vue_vue_type_style_index_0_scoped_5171e641_lang="",_hoisted_1$3={class:"AvatarIcons flex"},_hoisted_2$3=["onClick"],_sfc_main$3={__name:"index",props:["value","bgColor"],emits:["update:value","font"],setup(e,{emit:n}){const a=/icon-[a-zA-Z0-9]{2,8}/g,o=/content: "\\[a-zA-Z0-9]{4}/g,l=ref(styles.match(a)),i=styles.match(o),b=e,p=n,m=computed(()=>({"background-color":b.bgColor||"#0095ff"}));onMounted(()=>{b.value||setTimeout(()=>g(l.value[0],0),100)});const g=(C,R)=>{const B=i[R].slice(11),z="aicon";p("update:value",C),p("font",{text:B,family:z})};return(C,R)=>(openBlock(),createElementBlock("div",_hoisted_1$3,[(openBlock(!0),createElementBlock(Fragment,null,renderList(l.value,(B,z)=>(openBlock(),createElementBlock("div",{class:"icon_w",key:B,style:normalizeStyle(m.value),onClick:H=>g(B,z)},[createBaseVNode("span",{class:normalizeClass(["aicon",B])},null,2)],12,_hoisted_2$3))),128))]))}},AvatarIcons=_export_sfc(_sfc_main$3,[["__scopeId","data-v-5171e641"]]),index_vue_vue_type_style_index_0_scoped_0aa434d5_lang="",_hoisted_1$2={class:"colorbar flex_b"},_hoisted_2$2=["onClick"],_hoisted_3$1={class:"picker_wrapper"},_sfc_main$2={__name:"index",props:["value"],emits:["update:value"],setup(e,{emit:n}){const a=e,o=n,l=["#ff515b","#ff7500","#ffcb00","#85d700","#00cb95","#00cadd","#0095ff","#8c9dff","#ff71a2"];onMounted(()=>{a.value||o("update:value",l[0])});const i=b=>{o("update:value",b)};return(b,p)=>(openBlock(),createElementBlock("div",_hoisted_1$2,[(openBlock(),createElementBlock(Fragment,null,renderList(l,m=>createBaseVNode("div",{class:"color_item",key:m,onClick:g=>i(m),style:normalizeStyle({"background-color":m})},null,12,_hoisted_2$2)),64)),createBaseVNode("div",_hoisted_3$1,[createVNode(unref(NColorPicker),{size:"small",value:a.value,"onUpdate:value":i},null,8,["value"])])]))}},ColorBar=_export_sfc(_sfc_main$2,[["__scopeId","data-v-0aa434d5"]]),FormAvater_vue_vue_type_style_index_0_scoped_658d02ba_lang="",_hoisted_1$1={class:"formAvater"},_hoisted_2$1={class:"preview"},_hoisted_3=["src"],_hoisted_4={key:1,class:"preview_icon"},_hoisted_5={key:2,class:"",style:{"text-align":"center"}},_hoisted_6={class:"imgAvater"},_hoisted_7={class:"iconAvater"},_hoisted_8={class:"icon_wrapper"},_hoisted_9={class:"color_wrapper"},_hoisted_10={class:"textAvater"},_hoisted_11={class:"color_wrapper"},_sfc_main$1={__name:"FormAvater",setup(e,{expose:n}){const a=inject("resize"),o=ref(!1),l=ref(null),i=ref(null),b=ref({width:100,height:100}),p=ref("img"),m=ref(""),g=ref({color:"",icon:""}),C=ref({color:"",text:"文字头像"}),R=ref({text:"",family:"aicon"}),B=N=>{R.value.text=N.text},z=N=>ie(this,null,function*(){const v=base64ToFile(N),D=new FormData;return D.append("file",v),yield uploadImg(D)}),H=N=>{o.value=N};let Z=!1;const F=()=>ie(this,null,function*(){if(Z)return;Z=!0;let N=m.value;const v={tab:p.value,text:C.value,icon:g.value};switch(p.value){case"img":break;case"icon":N=yield z(l.value.toUrl());break;case"text":N=yield z(i.value.toUrl());break}formData.value.avatar=N,formData.value.cssAvatar=JSON.stringify(v),Z=!1,o.value=!1}),S=()=>{m.value=formData.value.avatar;const N=formData.value.cssAvatar;if(N){const{text:v,icon:D,tab:E}=JSON.parse(N);p.value="img",C.value=v,g.value=D}};return n({update:S}),onMounted(()=>{S()}),(N,v)=>(openBlock(),createElementBlock("div",_hoisted_1$1,[createVNode(unref(NPopover),{trigger:"click",placement:"bottom",show:o.value,"onUpdate:show":H},{trigger:withCtx(()=>[createBaseVNode("div",{class:"avater",style:normalizeStyle({width:b.value.width+"px",height:b.value.height+"px"})},[createBaseVNode("div",_hoisted_2$1,[p.value==="img"?withDirectives((openBlock(),createElementBlock("img",{key:0,class:"img",src:m.value},null,8,_hoisted_3)),[[vShow,m.value]]):p.value==="icon"?(openBlock(),createElementBlock("div",_hoisted_4,[createVNode(CanvasAvater,{ref_key:"iconCanvasRef",ref:l,text:R.value.text,bgColor:g.value.color,size:b.value,fontSize:b.value.width*.8,type:"icon",fontFamily:R.value.family},null,8,["text","bgColor","size","fontSize","fontFamily"])])):p.value==="text"?(openBlock(),createElementBlock("div",_hoisted_5,[createVNode(CanvasAvater,{ref_key:"textCanvasRef",ref:i,text:C.value.text,bgColor:C.value.color,size:b.value,offset:{x:0,y:1}},null,8,["text","bgColor","size"])])):createCommentVNode("",!0)]),v[6]||(v[6]=createBaseVNode("div",{class:"icon"},[createBaseVNode("span",{class:"iconfont icon-edit"})],-1))],4)]),default:withCtx(()=>[createBaseVNode("div",{class:normalizeClass(["content",{small:unref(a).smallRef.value}])},[createVNode(unref(NTabs),{type:"line",animated:"",value:p.value,"onUpdate:value":v[5]||(v[5]=D=>p.value=D)},{default:withCtx(()=>[createVNode(unref(NTabPane),{name:"img",tab:"图片头像"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_6,[createVNode(Upload,{imgs:m.value,"onUpdate:imgs":v[0]||(v[0]=D=>m.value=D),max:1,size:1024*1024*5},null,8,["imgs"]),v[8]||(v[8]=createBaseVNode("div",{class:"tips"},"请先删除后再上传新头像",-1)),createVNode(unref(NButton),{class:"nextButtom",onClick:F,type:"info"},{default:withCtx(()=>v[7]||(v[7]=[createTextVNode(" 确认 ")])),_:1})])]),_:1}),createVNode(unref(NTabPane),{name:"icon",tab:"图标头像"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_7,[createBaseVNode("div",_hoisted_8,[createVNode(AvatarIcons,{onFont:B,value:g.value.icon,"onUpdate:value":v[1]||(v[1]=D=>g.value.icon=D),bgColor:g.value.color},null,8,["value","bgColor"])]),createBaseVNode("div",_hoisted_9,[createVNode(ColorBar,{value:g.value.color,"onUpdate:value":v[2]||(v[2]=D=>g.value.color=D)},null,8,["value"])]),createVNode(unref(NButton),{class:"nextButtom",onClick:F,type:"info"},{default:withCtx(()=>v[9]||(v[9]=[createTextVNode(" 确认 ")])),_:1})])]),_:1}),createVNode(unref(NTabPane),{name:"text",tab:"文字头像"},{default:withCtx(()=>[createBaseVNode("div",_hoisted_10,[createVNode(unref(NInput),{class:"_input",value:C.value.text,"onUpdate:value":v[3]||(v[3]=D=>C.value.text=D),maxlength:"4","show-count":"",placeholder:""},null,8,["value"]),createBaseVNode("div",_hoisted_11,[createVNode(ColorBar,{value:C.value.color,"onUpdate:value":v[4]||(v[4]=D=>C.value.color=D)},null,8,["value"])]),createVNode(unref(NButton),{class:"nextButtom",onClick:F,type:"info"},{default:withCtx(()=>v[10]||(v[10]=[createTextVNode(" 确认 ")])),_:1})])]),_:1})]),_:1},8,["value"])],2)]),_:1},8,["show"])]))}},FormAvater=_export_sfc(_sfc_main$1,[["__scopeId","data-v-658d02ba"]]),Edit_vue_vue_type_style_index_0_scoped_aabbec33_lang="",_hoisted_1={class:"content"},_hoisted_2={class:"fromWrapper"},_sfc_main={__name:"Edit",setup(e){const n=ref(null),a=ref(null),o=useRoute(),l=useRouter(),i=useMessage(),b=useChatStore(),p=inject("resize"),m=useGlobalStore(),C=getCurrentInstance().appContext.config.globalProperties.$bus,R=computed(()=>o.query.id),B=computed(()=>m.tags),z=ref("add"),H=computed(()=>p.IDERef.value?1:0);let Z={};const F=()=>ie(this,null,function*(){Z=yield queryFriend({productType:H.value,friendId:R.value});const{avatar:w,cssAvatar:r,name:d,friendType:U,tag:T=B.value[0].name,intro:q,welcome:W,systemPrompt:G,contentPrompt:j,friendSource:ee=defaultFormData.friendSource,conversationStart:X=defaultFormData.conversationStart,aliyunDashscopeWorkspaceId:te,aliyunDashscopeAppId:le,aliyunDashscopeApiKey:Y,messageContextSize:ne=defaultFormData.messageContextSize,openaiRequestBody:oe=JSON.parse(JSON.stringify(defaultFormData.openaiRequestBody))}=Z;formData.value={avatar:w,cssAvatar:r,name:d,friendType:U,tag:T,intro:q,welcome:W,systemPrompt:G,contentPrompt:j,friendSource:ee,conversationStart:X,aliyunDashscopeWorkspaceId:te,aliyunDashscopeAppId:le,aliyunDashscopeApiKey:Y,messageContextSize:Number(ne),openaiRequestBody:oe}}),S=()=>{n.value&&n.value.update(),a.value&&a.value.update()},N=()=>{formDataClear(),p.IDERef.value&&z.value=="add"?formData.value.tag="编程":formData.value&&(formData.value.tag=B.value[0].name)},v=()=>ie(this,null,function*(){R.value?(z.value="edit",N(),yield F()):(z.value="add",N()),S()});watch(()=>o.query.id,()=>{["d_friendsPlazaEdit"].includes(o.name)&&v()}),onMounted(v),onUnmounted(formDataClear);const D=()=>{},E=()=>{routerBack(l,{name:"dialogue"})},L=w=>ie(this,null,function*(){const r=me(be({},formData.value),{productType:H.value});let d=z.value==="edit"?yield updateFriend(me(be({},r),{id:Z.userFriendId})):yield createFriend(r);if(d.err){w(),d.errMsg&&i.error(d.errMsg||"操作失败");return}w(),N();const U=z.value==="edit"?"编辑成功":"添加成功";i.success(U),b.addFriends(d),routerBack(l,{name:"dialogue"}),C.emit("friendFollow",me(be({},d),{__type:z.value}))});return(w,r)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["FriendsPlazaEdit tpage",{small:unref(p).smallRef.value}])},[createBaseVNode("div",_hoisted_1,[createVNode(FormAvater,{ref_key:"FormAvaterRef",ref:a,onOver:D},null,512),createBaseVNode("div",_hoisted_2,[createVNode(FormComp,{ref_key:"FormCompRef",ref:n,tags:B.value,onClose:E,onConfirm:L},null,8,["tags"])])])],2))}},Edit=_export_sfc(_sfc_main,[["__scopeId","data-v-aabbec33"]]);export{Edit as default};
