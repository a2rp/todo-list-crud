(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))d(h);new MutationObserver(h=>{for(const w of h)if(w.type==="childList")for(const N of w.addedNodes)N.tagName==="LINK"&&N.rel==="modulepreload"&&d(N)}).observe(document,{childList:!0,subtree:!0});function u(h){const w={};return h.integrity&&(w.integrity=h.integrity),h.referrerPolicy&&(w.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?w.credentials="include":h.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function d(h){if(h.ep)return;h.ep=!0;const w=u(h);fetch(h.href,w)}})();function Vp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Sa={exports:{}},Vr={},Ca={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac;function Hp(){if(Ac)return ae;Ac=1;var i=Symbol.for("react.element"),s=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),N=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),O=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),M=Symbol.iterator;function W(g){return g===null||typeof g!="object"?null:(g=M&&g[M]||g["@@iterator"],typeof g=="function"?g:null)}var re={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function H(g,S,K){this.props=g,this.context=S,this.refs=Q,this.updater=K||re}H.prototype.isReactComponent={},H.prototype.setState=function(g,S){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,S,"setState")},H.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function le(){}le.prototype=H.prototype;function B(g,S,K){this.props=g,this.context=S,this.refs=Q,this.updater=K||re}var ve=B.prototype=new le;ve.constructor=B,G(ve,H.prototype),ve.isPureReactComponent=!0;var ge=Array.isArray,ie=Object.prototype.hasOwnProperty,se={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function ne(g,S,K){var J,ee={},ue=null,ce=null;if(S!=null)for(J in S.ref!==void 0&&(ce=S.ref),S.key!==void 0&&(ue=""+S.key),S)ie.call(S,J)&&!V.hasOwnProperty(J)&&(ee[J]=S[J]);var de=arguments.length-2;if(de===1)ee.children=K;else if(1<de){for(var ye=Array(de),Te=0;Te<de;Te++)ye[Te]=arguments[Te+2];ee.children=ye}if(g&&g.defaultProps)for(J in de=g.defaultProps,de)ee[J]===void 0&&(ee[J]=de[J]);return{$$typeof:i,type:g,key:ue,ref:ce,props:ee,_owner:se.current}}function $e(g,S){return{$$typeof:i,type:g.type,key:S,ref:g.ref,props:g.props,_owner:g._owner}}function Be(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function ze(g){var S={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(K){return S[K]})}var Ue=/\/+/g;function pe(g,S){return typeof g=="object"&&g!==null&&g.key!=null?ze(""+g.key):S.toString(36)}function Le(g,S,K,J,ee){var ue=typeof g;(ue==="undefined"||ue==="boolean")&&(g=null);var ce=!1;if(g===null)ce=!0;else switch(ue){case"string":case"number":ce=!0;break;case"object":switch(g.$$typeof){case i:case s:ce=!0}}if(ce)return ce=g,ee=ee(ce),g=J===""?"."+pe(ce,0):J,ge(ee)?(K="",g!=null&&(K=g.replace(Ue,"$&/")+"/"),Le(ee,S,K,"",function(Te){return Te})):ee!=null&&(Be(ee)&&(ee=$e(ee,K+(!ee.key||ce&&ce.key===ee.key?"":(""+ee.key).replace(Ue,"$&/")+"/")+g)),S.push(ee)),1;if(ce=0,J=J===""?".":J+":",ge(g))for(var de=0;de<g.length;de++){ue=g[de];var ye=J+pe(ue,de);ce+=Le(ue,S,K,ye,ee)}else if(ye=W(g),typeof ye=="function")for(g=ye.call(g),de=0;!(ue=g.next()).done;)ue=ue.value,ye=J+pe(ue,de++),ce+=Le(ue,S,K,ye,ee);else if(ue==="object")throw S=String(g),Error("Objects are not valid as a React child (found: "+(S==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":S)+"). If you meant to render a collection of children, use an array instead.");return ce}function We(g,S,K){if(g==null)return g;var J=[],ee=0;return Le(g,J,"","",function(ue){return S.call(K,ue,ee++)}),J}function P(g){if(g._status===-1){var S=g._result;S=S(),S.then(function(K){(g._status===0||g._status===-1)&&(g._status=1,g._result=K)},function(K){(g._status===0||g._status===-1)&&(g._status=2,g._result=K)}),g._status===-1&&(g._status=0,g._result=S)}if(g._status===1)return g._result.default;throw g._result}var A={current:null},C={transition:null},D={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:C,ReactCurrentOwner:se};function T(){throw Error("act(...) is not supported in production builds of React.")}return ae.Children={map:We,forEach:function(g,S,K){We(g,function(){S.apply(this,arguments)},K)},count:function(g){var S=0;return We(g,function(){S++}),S},toArray:function(g){return We(g,function(S){return S})||[]},only:function(g){if(!Be(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},ae.Component=H,ae.Fragment=u,ae.Profiler=h,ae.PureComponent=B,ae.StrictMode=d,ae.Suspense=k,ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,ae.act=T,ae.cloneElement=function(g,S,K){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var J=G({},g.props),ee=g.key,ue=g.ref,ce=g._owner;if(S!=null){if(S.ref!==void 0&&(ue=S.ref,ce=se.current),S.key!==void 0&&(ee=""+S.key),g.type&&g.type.defaultProps)var de=g.type.defaultProps;for(ye in S)ie.call(S,ye)&&!V.hasOwnProperty(ye)&&(J[ye]=S[ye]===void 0&&de!==void 0?de[ye]:S[ye])}var ye=arguments.length-2;if(ye===1)J.children=K;else if(1<ye){de=Array(ye);for(var Te=0;Te<ye;Te++)de[Te]=arguments[Te+2];J.children=de}return{$$typeof:i,type:g.type,key:ee,ref:ue,props:J,_owner:ce}},ae.createContext=function(g){return g={$$typeof:N,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:w,_context:g},g.Consumer=g},ae.createElement=ne,ae.createFactory=function(g){var S=ne.bind(null,g);return S.type=g,S},ae.createRef=function(){return{current:null}},ae.forwardRef=function(g){return{$$typeof:E,render:g}},ae.isValidElement=Be,ae.lazy=function(g){return{$$typeof:I,_payload:{_status:-1,_result:g},_init:P}},ae.memo=function(g,S){return{$$typeof:O,type:g,compare:S===void 0?null:S}},ae.startTransition=function(g){var S=C.transition;C.transition={};try{g()}finally{C.transition=S}},ae.unstable_act=T,ae.useCallback=function(g,S){return A.current.useCallback(g,S)},ae.useContext=function(g){return A.current.useContext(g)},ae.useDebugValue=function(){},ae.useDeferredValue=function(g){return A.current.useDeferredValue(g)},ae.useEffect=function(g,S){return A.current.useEffect(g,S)},ae.useId=function(){return A.current.useId()},ae.useImperativeHandle=function(g,S,K){return A.current.useImperativeHandle(g,S,K)},ae.useInsertionEffect=function(g,S){return A.current.useInsertionEffect(g,S)},ae.useLayoutEffect=function(g,S){return A.current.useLayoutEffect(g,S)},ae.useMemo=function(g,S){return A.current.useMemo(g,S)},ae.useReducer=function(g,S,K){return A.current.useReducer(g,S,K)},ae.useRef=function(g){return A.current.useRef(g)},ae.useState=function(g){return A.current.useState(g)},ae.useSyncExternalStore=function(g,S,K){return A.current.useSyncExternalStore(g,S,K)},ae.useTransition=function(){return A.current.useTransition()},ae.version="18.3.1",ae}var $c;function $a(){return $c||($c=1,Ca.exports=Hp()),Ca.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bc;function Qp(){if(Bc)return Vr;Bc=1;var i=$a(),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function N(E,k,O){var I,M={},W=null,re=null;O!==void 0&&(W=""+O),k.key!==void 0&&(W=""+k.key),k.ref!==void 0&&(re=k.ref);for(I in k)d.call(k,I)&&!w.hasOwnProperty(I)&&(M[I]=k[I]);if(E&&E.defaultProps)for(I in k=E.defaultProps,k)M[I]===void 0&&(M[I]=k[I]);return{$$typeof:s,type:E,key:W,ref:re,props:M,_owner:h.current}}return Vr.Fragment=u,Vr.jsx=N,Vr.jsxs=N,Vr}var Uc;function Gp(){return Uc||(Uc=1,Sa.exports=Qp()),Sa.exports}var v=Gp(),ui={},Ea={exports:{}},lt={},ja={exports:{}},_a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc;function Kp(){return Wc||(Wc=1,function(i){function s(C,D){var T=C.length;C.push(D);e:for(;0<T;){var g=T-1>>>1,S=C[g];if(0<h(S,D))C[g]=D,C[T]=S,T=g;else break e}}function u(C){return C.length===0?null:C[0]}function d(C){if(C.length===0)return null;var D=C[0],T=C.pop();if(T!==D){C[0]=T;e:for(var g=0,S=C.length,K=S>>>1;g<K;){var J=2*(g+1)-1,ee=C[J],ue=J+1,ce=C[ue];if(0>h(ee,T))ue<S&&0>h(ce,ee)?(C[g]=ce,C[ue]=T,g=ue):(C[g]=ee,C[J]=T,g=J);else if(ue<S&&0>h(ce,T))C[g]=ce,C[ue]=T,g=ue;else break e}}return D}function h(C,D){var T=C.sortIndex-D.sortIndex;return T!==0?T:C.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;i.unstable_now=function(){return w.now()}}else{var N=Date,E=N.now();i.unstable_now=function(){return N.now()-E}}var k=[],O=[],I=1,M=null,W=3,re=!1,G=!1,Q=!1,H=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(C){for(var D=u(O);D!==null;){if(D.callback===null)d(O);else if(D.startTime<=C)d(O),D.sortIndex=D.expirationTime,s(k,D);else break;D=u(O)}}function ge(C){if(Q=!1,ve(C),!G)if(u(k)!==null)G=!0,P(ie);else{var D=u(O);D!==null&&A(ge,D.startTime-C)}}function ie(C,D){G=!1,Q&&(Q=!1,le(ne),ne=-1),re=!0;var T=W;try{for(ve(D),M=u(k);M!==null&&(!(M.expirationTime>D)||C&&!ze());){var g=M.callback;if(typeof g=="function"){M.callback=null,W=M.priorityLevel;var S=g(M.expirationTime<=D);D=i.unstable_now(),typeof S=="function"?M.callback=S:M===u(k)&&d(k),ve(D)}else d(k);M=u(k)}if(M!==null)var K=!0;else{var J=u(O);J!==null&&A(ge,J.startTime-D),K=!1}return K}finally{M=null,W=T,re=!1}}var se=!1,V=null,ne=-1,$e=5,Be=-1;function ze(){return!(i.unstable_now()-Be<$e)}function Ue(){if(V!==null){var C=i.unstable_now();Be=C;var D=!0;try{D=V(!0,C)}finally{D?pe():(se=!1,V=null)}}else se=!1}var pe;if(typeof B=="function")pe=function(){B(Ue)};else if(typeof MessageChannel<"u"){var Le=new MessageChannel,We=Le.port2;Le.port1.onmessage=Ue,pe=function(){We.postMessage(null)}}else pe=function(){H(Ue,0)};function P(C){V=C,se||(se=!0,pe())}function A(C,D){ne=H(function(){C(i.unstable_now())},D)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_continueExecution=function(){G||re||(G=!0,P(ie))},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$e=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return W},i.unstable_getFirstCallbackNode=function(){return u(k)},i.unstable_next=function(C){switch(W){case 1:case 2:case 3:var D=3;break;default:D=W}var T=W;W=D;try{return C()}finally{W=T}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(C,D){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=W;W=C;try{return D()}finally{W=T}},i.unstable_scheduleCallback=function(C,D,T){var g=i.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?g+T:g):T=g,C){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=T+S,C={id:I++,callback:D,priorityLevel:C,startTime:T,expirationTime:S,sortIndex:-1},T>g?(C.sortIndex=T,s(O,C),u(k)===null&&C===u(O)&&(Q?(le(ne),ne=-1):Q=!0,A(ge,T-g))):(C.sortIndex=S,s(k,C),G||re||(G=!0,P(ie))),C},i.unstable_shouldYield=ze,i.unstable_wrapCallback=function(C){var D=W;return function(){var T=W;W=D;try{return C.apply(this,arguments)}finally{W=T}}}}(_a)),_a}var Vc;function Yp(){return Vc||(Vc=1,ja.exports=Kp()),ja.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hc;function Xp(){if(Hc)return lt;Hc=1;var i=$a(),s=Yp();function u(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,h={};function w(e,t){N(e,t),N(e+"Capture",t)}function N(e,t){for(h[e]=t,e=0;e<t.length;e++)d.add(t[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I={},M={};function W(e){return k.call(M,e)?!0:k.call(I,e)?!1:O.test(e)?M[e]=!0:(I[e]=!0,!1)}function re(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G(e,t,n,r){if(t===null||typeof t>"u"||re(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Q(e,t,n,r,o,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];H[t]=new Q(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(le,B);H[t]=new Q(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(le,B);H[t]=new Q(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(le,B);H[t]=new Q(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function ve(e,t,n,r){var o=H.hasOwnProperty(t)?H[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G(t,n,o,r)&&(n=null),r||o===null?W(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ge=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ie=Symbol.for("react.element"),se=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),$e=Symbol.for("react.profiler"),Be=Symbol.for("react.provider"),ze=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),Le=Symbol.for("react.suspense_list"),We=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),C=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var T=Object.assign,g;function S(e){if(g===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var K=!1;function J(e,t){if(!e||K)return"";K=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(x){var r=x}Reflect.construct(e,[],t)}else{try{t.call()}catch(x){r=x}e.call(t.prototype)}else{try{throw Error()}catch(x){r=x}e()}}catch(x){if(x&&r&&typeof x.stack=="string"){for(var o=x.stack.split(`
`),l=r.stack.split(`
`),a=o.length-1,c=l.length-1;1<=a&&0<=c&&o[a]!==l[c];)c--;for(;1<=a&&0<=c;a--,c--)if(o[a]!==l[c]){if(a!==1||c!==1)do if(a--,c--,0>c||o[a]!==l[c]){var f=`
`+o[a].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=a&&0<=c);break}}}finally{K=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?S(e):""}function ee(e){switch(e.tag){case 5:return S(e.type);case 16:return S("Lazy");case 13:return S("Suspense");case 19:return S("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case se:return"Portal";case $e:return"Profiler";case ne:return"StrictMode";case pe:return"Suspense";case Le:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ze:return(e.displayName||"Context")+".Consumer";case Be:return(e._context.displayName||"Context")+".Provider";case Ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case We:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}function ce(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(t);case 8:return t===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function de(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Te(e){var t=ye(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jr(e){e._valueTracker||(e._valueTracker=Te(e))}function Ha(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ye(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function qr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function zi(e,t){var n=t.checked;return T({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=de(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ga(e,t){t=t.checked,t!=null&&ve(e,"checked",t,!1)}function Li(e,t){Ga(e,t);var n=de(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ti(e,t.type,de(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ti(e,t,n){(t!=="number"||qr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ir=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+de(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(u(91));return T({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(u(92));if(ir(n)){if(1<n.length)throw Error(u(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:de(n)}}function Xa(e,t){var n=de(t.value),r=de(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Za(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ja(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ja(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,qa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ar={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gd=["Webkit","ms","Moz","O"];Object.keys(ar).forEach(function(e){Gd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ar[t]=ar[e]})});function es(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ar.hasOwnProperty(e)&&ar[e]?(""+t).trim():t+"px"}function ts(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=es(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Kd=T({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ii(e,t){if(t){if(Kd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(u(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(u(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(u(61))}if(t.style!=null&&typeof t.style!="object")throw Error(u(62))}}function bi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Mi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fi=null,zn=null,Ln=null;function ns(e){if(e=zr(e)){if(typeof Fi!="function")throw Error(u(280));var t=e.stateNode;t&&(t=Eo(t),Fi(e.stateNode,e.type,t))}}function rs(e){zn?Ln?Ln.push(e):Ln=[e]:zn=e}function os(){if(zn){var e=zn,t=Ln;if(Ln=zn=null,ns(e),t)for(e=0;e<t.length;e++)ns(t[e])}}function is(e,t){return e(t)}function ls(){}var Ai=!1;function as(e,t,n){if(Ai)return e(t,n);Ai=!0;try{return is(e,t,n)}finally{Ai=!1,(zn!==null||Ln!==null)&&(ls(),os())}}function sr(e,t){var n=e.stateNode;if(n===null)return null;var r=Eo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var $i=!1;if(E)try{var ur={};Object.defineProperty(ur,"passive",{get:function(){$i=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{$i=!1}function Yd(e,t,n,r,o,l,a,c,f){var x=Array.prototype.slice.call(arguments,3);try{t.apply(n,x)}catch(_){this.onError(_)}}var cr=!1,to=null,no=!1,Bi=null,Xd={onError:function(e){cr=!0,to=e}};function Zd(e,t,n,r,o,l,a,c,f){cr=!1,to=null,Yd.apply(Xd,arguments)}function Jd(e,t,n,r,o,l,a,c,f){if(Zd.apply(this,arguments),cr){if(cr){var x=to;cr=!1,to=null}else throw Error(u(198));no||(no=!0,Bi=x)}}function dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ss(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function us(e){if(dn(e)!==e)throw Error(u(188))}function qd(e){var t=e.alternate;if(!t){if(t=dn(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return us(o),e;if(l===r)return us(o),t;l=l.sibling}throw Error(u(188))}if(n.return!==r.return)n=o,r=l;else{for(var a=!1,c=o.child;c;){if(c===n){a=!0,n=o,r=l;break}if(c===r){a=!0,r=o,n=l;break}c=c.sibling}if(!a){for(c=l.child;c;){if(c===n){a=!0,n=l,r=o;break}if(c===r){a=!0,r=l,n=o;break}c=c.sibling}if(!a)throw Error(u(189))}}if(n.alternate!==r)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function cs(e){return e=qd(e),e!==null?ds(e):null}function ds(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ds(e);if(t!==null)return t;e=e.sibling}return null}var fs=s.unstable_scheduleCallback,ps=s.unstable_cancelCallback,ef=s.unstable_shouldYield,tf=s.unstable_requestPaint,Re=s.unstable_now,nf=s.unstable_getCurrentPriorityLevel,Ui=s.unstable_ImmediatePriority,hs=s.unstable_UserBlockingPriority,ro=s.unstable_NormalPriority,rf=s.unstable_LowPriority,gs=s.unstable_IdlePriority,oo=null,Pt=null;function of(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(oo,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:sf,lf=Math.log,af=Math.LN2;function sf(e){return e>>>=0,e===0?32:31-(lf(e)/af|0)|0}var io=64,lo=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ao(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var c=a&~o;c!==0?r=dr(c):(l&=a,l!==0&&(r=dr(l)))}else a=n&~o,a!==0?r=dr(a):l!==0&&(r=dr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function uf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-xt(l),c=1<<a,f=o[a];f===-1?((c&n)===0||(c&r)!==0)&&(o[a]=uf(c,t)):f<=t&&(e.expiredLanes|=c),l&=~c}}function Wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ms(){var e=io;return io<<=1,(io&4194240)===0&&(io=64),e}function Vi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function df(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Hi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var xe=0;function vs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ys,Qi,xs,ws,ks,Gi=!1,so=[],Wt=null,Vt=null,Ht=null,pr=new Map,hr=new Map,Qt=[],ff="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function gr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=zr(t),t!==null&&Qi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function pf(e,t,n,r,o){switch(t){case"focusin":return Wt=gr(Wt,e,t,n,r,o),!0;case"dragenter":return Vt=gr(Vt,e,t,n,r,o),!0;case"mouseover":return Ht=gr(Ht,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return pr.set(l,gr(pr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,hr.set(l,gr(hr.get(l)||null,e,t,n,r,o)),!0}return!1}function Cs(e){var t=fn(e.target);if(t!==null){var n=dn(t);if(n!==null){if(t=n.tag,t===13){if(t=ss(n),t!==null){e.blockedOn=t,ks(e.priority,function(){xs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Di=r,n.target.dispatchEvent(r),Di=null}else return t=zr(n),t!==null&&Qi(t),e.blockedOn=n,!1;t.shift()}return!0}function Es(e,t,n){uo(e)&&n.delete(t)}function hf(){Gi=!1,Wt!==null&&uo(Wt)&&(Wt=null),Vt!==null&&uo(Vt)&&(Vt=null),Ht!==null&&uo(Ht)&&(Ht=null),pr.forEach(Es),hr.forEach(Es)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,Gi||(Gi=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,hf)))}function vr(e){function t(o){return mr(o,e)}if(0<so.length){mr(so[0],e);for(var n=1;n<so.length;n++){var r=so[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&mr(Wt,e),Vt!==null&&mr(Vt,e),Ht!==null&&mr(Ht,e),pr.forEach(t),hr.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Cs(n),n.blockedOn===null&&Qt.shift()}var Tn=ge.ReactCurrentBatchConfig,co=!0;function gf(e,t,n,r){var o=xe,l=Tn.transition;Tn.transition=null;try{xe=1,Ki(e,t,n,r)}finally{xe=o,Tn.transition=l}}function mf(e,t,n,r){var o=xe,l=Tn.transition;Tn.transition=null;try{xe=4,Ki(e,t,n,r)}finally{xe=o,Tn.transition=l}}function Ki(e,t,n,r){if(co){var o=Yi(e,t,n,r);if(o===null)fl(e,t,r,fo,n),Ss(e,r);else if(pf(o,e,t,n,r))r.stopPropagation();else if(Ss(e,r),t&4&&-1<ff.indexOf(e)){for(;o!==null;){var l=zr(o);if(l!==null&&ys(l),l=Yi(e,t,n,r),l===null&&fl(e,t,r,fo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var fo=null;function Yi(e,t,n,r){if(fo=null,e=Mi(r),e=fn(e),e!==null)if(t=dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ss(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return fo=e,null}function js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nf()){case Ui:return 1;case hs:return 4;case ro:case rf:return 16;case gs:return 536870912;default:return 16}default:return 16}}var Gt=null,Xi=null,po=null;function _s(){if(po)return po;var e,t=Xi,n=t.length,r,o="value"in Gt?Gt.value:Gt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[l-r];r++);return po=o.slice(e,1<r?1-r:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Ns(){return!1}function at(e){function t(n,r,o,l,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?go:Ns,this.isPropagationStopped=Ns,this}return T(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zi=at(On),yr=T({},On,{view:0,detail:0}),vf=at(yr),Ji,qi,xr,mo=T({},yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(Ji=e.screenX-xr.screenX,qi=e.screenY-xr.screenY):qi=Ji=0,xr=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:qi}}),Ps=at(mo),yf=T({},mo,{dataTransfer:0}),xf=at(yf),wf=T({},yr,{relatedTarget:0}),el=at(wf),kf=T({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Sf=at(kf),Cf=T({},On,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ef=at(Cf),jf=T({},On,{data:0}),zs=at(jf),_f={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pf[e])?!!t[e]:!1}function tl(){return zf}var Lf=T({},yr,{key:function(e){if(e.key){var t=_f[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tl,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tf=at(Lf),Of=T({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=at(Of),Rf=T({},yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tl}),If=at(Rf),bf=T({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Df=at(bf),Mf=T({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ff=at(Mf),Af=[9,13,27,32],nl=E&&"CompositionEvent"in window,wr=null;E&&"documentMode"in document&&(wr=document.documentMode);var $f=E&&"TextEvent"in window&&!wr,Ts=E&&(!nl||wr&&8<wr&&11>=wr),Os=" ",Rs=!1;function Is(e,t){switch(e){case"keyup":return Af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function Bf(e,t){switch(e){case"compositionend":return bs(t);case"keypress":return t.which!==32?null:(Rs=!0,Os);case"textInput":return e=t.data,e===Os&&Rs?null:e;default:return null}}function Uf(e,t){if(Rn)return e==="compositionend"||!nl&&Is(e,t)?(e=_s(),po=Xi=Gt=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ts&&t.locale!=="ko"?null:t.data;default:return null}}var Wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wf[e.type]:t==="textarea"}function Ms(e,t,n,r){rs(r),t=ko(t,"onChange"),0<t.length&&(n=new Zi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var kr=null,Sr=null;function Vf(e){tu(e,0)}function vo(e){var t=Fn(e);if(Ha(t))return e}function Hf(e,t){if(e==="change")return t}var Fs=!1;if(E){var rl;if(E){var ol="oninput"in document;if(!ol){var As=document.createElement("div");As.setAttribute("oninput","return;"),ol=typeof As.oninput=="function"}rl=ol}else rl=!1;Fs=rl&&(!document.documentMode||9<document.documentMode)}function $s(){kr&&(kr.detachEvent("onpropertychange",Bs),Sr=kr=null)}function Bs(e){if(e.propertyName==="value"&&vo(Sr)){var t=[];Ms(t,Sr,e,Mi(e)),as(Vf,t)}}function Qf(e,t,n){e==="focusin"?($s(),kr=t,Sr=n,kr.attachEvent("onpropertychange",Bs)):e==="focusout"&&$s()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(Sr)}function Kf(e,t){if(e==="click")return vo(t)}function Yf(e,t){if(e==="input"||e==="change")return vo(t)}function Xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Xf;function Cr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!wt(e[o],t[o]))return!1}return!0}function Us(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ws(e,t){var n=Us(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Us(n)}}function Vs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hs(){for(var e=window,t=qr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=qr(e.document)}return t}function il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zf(e){var t=Hs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vs(n.ownerDocument.documentElement,n)){if(r!==null&&il(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ws(n,l);var a=Ws(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jf=E&&"documentMode"in document&&11>=document.documentMode,In=null,ll=null,Er=null,al=!1;function Qs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||In==null||In!==qr(r)||(r=In,"selectionStart"in r&&il(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Er&&Cr(Er,r)||(Er=r,r=ko(ll,"onSelect"),0<r.length&&(t=new Zi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=In)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},sl={},Gs={};E&&(Gs=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function xo(e){if(sl[e])return sl[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gs)return sl[e]=t[n];return e}var Ks=xo("animationend"),Ys=xo("animationiteration"),Xs=xo("animationstart"),Zs=xo("transitionend"),Js=new Map,qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kt(e,t){Js.set(e,t),w(t,[e])}for(var ul=0;ul<qs.length;ul++){var cl=qs[ul],qf=cl.toLowerCase(),ep=cl[0].toUpperCase()+cl.slice(1);Kt(qf,"on"+ep)}Kt(Ks,"onAnimationEnd"),Kt(Ys,"onAnimationIteration"),Kt(Xs,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(Zs,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tp=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function eu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Jd(r,t,void 0,e),e.currentTarget=null}function tu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var c=r[a],f=c.instance,x=c.currentTarget;if(c=c.listener,f!==l&&o.isPropagationStopped())break e;eu(o,c,x),l=f}else for(a=0;a<r.length;a++){if(c=r[a],f=c.instance,x=c.currentTarget,c=c.listener,f!==l&&o.isPropagationStopped())break e;eu(o,c,x),l=f}}}if(no)throw e=Bi,no=!1,Bi=null,e}function Se(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var r=e+"__bubble";n.has(r)||(nu(t,e,2,!1),n.add(r))}function dl(e,t,n){var r=0;t&&(r|=4),nu(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[wo]){e[wo]=!0,d.forEach(function(n){n!=="selectionchange"&&(tp.has(n)||dl(n,!1,e),dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,dl("selectionchange",!1,t))}}function nu(e,t,n,r){switch(js(t)){case 1:var o=gf;break;case 4:o=mf;break;default:o=Ki}n=o.bind(null,t,n,e),o=void 0,!$i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===o||f.nodeType===8&&f.parentNode===o))return;a=a.return}for(;c!==null;){if(a=fn(c),a===null)return;if(f=a.tag,f===5||f===6){r=l=a;continue e}c=c.parentNode}}r=r.return}as(function(){var x=l,_=Mi(n),z=[];e:{var j=Js.get(e);if(j!==void 0){var R=Zi,F=e;switch(e){case"keypress":if(ho(n)===0)break e;case"keydown":case"keyup":R=Tf;break;case"focusin":F="focus",R=el;break;case"focusout":F="blur",R=el;break;case"beforeblur":case"afterblur":R=el;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=If;break;case Ks:case Ys:case Xs:R=Sf;break;case Zs:R=Df;break;case"scroll":R=vf;break;case"wheel":R=Ff;break;case"copy":case"cut":case"paste":R=Ef;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Ls}var $=(t&4)!==0,Ie=!$&&e==="scroll",m=$?j!==null?j+"Capture":null:j;$=[];for(var p=x,y;p!==null;){y=p;var L=y.stateNode;if(y.tag===5&&L!==null&&(y=L,m!==null&&(L=sr(p,m),L!=null&&$.push(Nr(p,L,y)))),Ie)break;p=p.return}0<$.length&&(j=new R(j,F,null,n,_),z.push({event:j,listeners:$}))}}if((t&7)===0){e:{if(j=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",j&&n!==Di&&(F=n.relatedTarget||n.fromElement)&&(fn(F)||F[Rt]))break e;if((R||j)&&(j=_.window===_?_:(j=_.ownerDocument)?j.defaultView||j.parentWindow:window,R?(F=n.relatedTarget||n.toElement,R=x,F=F?fn(F):null,F!==null&&(Ie=dn(F),F!==Ie||F.tag!==5&&F.tag!==6)&&(F=null)):(R=null,F=x),R!==F)){if($=Ps,L="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&($=Ls,L="onPointerLeave",m="onPointerEnter",p="pointer"),Ie=R==null?j:Fn(R),y=F==null?j:Fn(F),j=new $(L,p+"leave",R,n,_),j.target=Ie,j.relatedTarget=y,L=null,fn(_)===x&&($=new $(m,p+"enter",F,n,_),$.target=y,$.relatedTarget=Ie,L=$),Ie=L,R&&F)t:{for($=R,m=F,p=0,y=$;y;y=Dn(y))p++;for(y=0,L=m;L;L=Dn(L))y++;for(;0<p-y;)$=Dn($),p--;for(;0<y-p;)m=Dn(m),y--;for(;p--;){if($===m||m!==null&&$===m.alternate)break t;$=Dn($),m=Dn(m)}$=null}else $=null;R!==null&&ru(z,j,R,$,!1),F!==null&&Ie!==null&&ru(z,Ie,F,$,!0)}}e:{if(j=x?Fn(x):window,R=j.nodeName&&j.nodeName.toLowerCase(),R==="select"||R==="input"&&j.type==="file")var U=Hf;else if(Ds(j))if(Fs)U=Yf;else{U=Gf;var Y=Qf}else(R=j.nodeName)&&R.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(U=Kf);if(U&&(U=U(e,x))){Ms(z,U,n,_);break e}Y&&Y(e,j,x),e==="focusout"&&(Y=j._wrapperState)&&Y.controlled&&j.type==="number"&&Ti(j,"number",j.value)}switch(Y=x?Fn(x):window,e){case"focusin":(Ds(Y)||Y.contentEditable==="true")&&(In=Y,ll=x,Er=null);break;case"focusout":Er=ll=In=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,Qs(z,n,_);break;case"selectionchange":if(Jf)break;case"keydown":case"keyup":Qs(z,n,_)}var X;if(nl)e:{switch(e){case"compositionstart":var te="onCompositionStart";break e;case"compositionend":te="onCompositionEnd";break e;case"compositionupdate":te="onCompositionUpdate";break e}te=void 0}else Rn?Is(e,n)&&(te="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(te="onCompositionStart");te&&(Ts&&n.locale!=="ko"&&(Rn||te!=="onCompositionStart"?te==="onCompositionEnd"&&Rn&&(X=_s()):(Gt=_,Xi="value"in Gt?Gt.value:Gt.textContent,Rn=!0)),Y=ko(x,te),0<Y.length&&(te=new zs(te,e,null,n,_),z.push({event:te,listeners:Y}),X?te.data=X:(X=bs(n),X!==null&&(te.data=X)))),(X=$f?Bf(e,n):Uf(e,n))&&(x=ko(x,"onBeforeInput"),0<x.length&&(_=new zs("onBeforeInput","beforeinput",null,n,_),z.push({event:_,listeners:x}),_.data=X))}tu(z,t)})}function Nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=sr(e,n),l!=null&&r.unshift(Nr(e,l,o)),l=sr(e,t),l!=null&&r.push(Nr(e,l,o))),e=e.return}return r}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ru(e,t,n,r,o){for(var l=t._reactName,a=[];n!==null&&n!==r;){var c=n,f=c.alternate,x=c.stateNode;if(f!==null&&f===r)break;c.tag===5&&x!==null&&(c=x,o?(f=sr(n,l),f!=null&&a.unshift(Nr(n,f,c))):o||(f=sr(n,l),f!=null&&a.push(Nr(n,f,c)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var np=/\r\n?/g,rp=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(np,`
`).replace(rp,"")}function So(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(u(425))}function Co(){}var pl=null,hl=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,iu=typeof Promise=="function"?Promise:void 0,ip=typeof queueMicrotask=="function"?queueMicrotask:typeof iu<"u"?function(e){return iu.resolve(null).then(e).catch(lp)}:ml;function lp(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),zt="__reactFiber$"+Mn,Pr="__reactProps$"+Mn,Rt="__reactContainer$"+Mn,yl="__reactEvents$"+Mn,ap="__reactListeners$"+Mn,sp="__reactHandles$"+Mn;function fn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[zt])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function zr(e){return e=e[zt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(u(33))}function Eo(e){return e[Pr]||null}var xl=[],An=-1;function Xt(e){return{current:e}}function Ce(e){0>An||(e.current=xl[An],xl[An]=null,An--)}function ke(e,t){An++,xl[An]=e.current,e.current=t}var Zt={},Ye=Xt(Zt),tt=Xt(!1),pn=Zt;function $n(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function nt(e){return e=e.childContextTypes,e!=null}function jo(){Ce(tt),Ce(Ye)}function au(e,t,n){if(Ye.current!==Zt)throw Error(u(168));ke(Ye,t),ke(tt,n)}function su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(u(108,ce(e)||"Unknown",o));return T({},n,r)}function _o(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,pn=Ye.current,ke(Ye,e),ke(tt,tt.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(u(169));n?(e=su(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,Ce(tt),Ce(Ye),ke(Ye,e)):Ce(tt),ke(tt,n)}var It=null,No=!1,wl=!1;function cu(e){It===null?It=[e]:It.push(e)}function up(e){No=!0,cu(e)}function Jt(){if(!wl&&It!==null){wl=!0;var e=0,t=xe;try{var n=It;for(xe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,No=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),fs(Ui,Jt),o}finally{xe=t,wl=!1}}return null}var Bn=[],Un=0,Po=null,zo=0,ft=[],pt=0,hn=null,bt=1,Dt="";function gn(e,t){Bn[Un++]=zo,Bn[Un++]=Po,Po=e,zo=t}function du(e,t,n){ft[pt++]=bt,ft[pt++]=Dt,ft[pt++]=hn,hn=e;var r=bt;e=Dt;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var l=32-xt(t)+o;if(30<l){var a=o-o%5;l=(r&(1<<a)-1).toString(32),r>>=a,o-=a,bt=1<<32-xt(t)+o|n<<o|r,Dt=l+e}else bt=1<<l|n<<o|r,Dt=e}function kl(e){e.return!==null&&(gn(e,1),du(e,1,0))}function Sl(e){for(;e===Po;)Po=Bn[--Un],Bn[Un]=null,zo=Bn[--Un],Bn[Un]=null;for(;e===hn;)hn=ft[--pt],ft[pt]=null,Dt=ft[--pt],ft[pt]=null,bt=ft[--pt],ft[pt]=null}var st=null,ut=null,je=!1,kt=null;function fu(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,ut=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,ut=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=hn!==null?{id:bt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,ut=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function El(e){if(je){var t=ut;if(t){var n=t;if(!pu(e,t)){if(Cl(e))throw Error(u(418));t=Yt(n.nextSibling);var r=st;t&&pu(e,t)?fu(r,n):(e.flags=e.flags&-4097|2,je=!1,st=e)}}else{if(Cl(e))throw Error(u(418));e.flags=e.flags&-4097|2,je=!1,st=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function Lo(e){if(e!==st)return!1;if(!je)return hu(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=ut)){if(Cl(e))throw gu(),Error(u(418));for(;t;)fu(e,t),t=Yt(t.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ut=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ut=null}}else ut=st?Yt(e.stateNode.nextSibling):null;return!0}function gu(){for(var e=ut;e;)e=Yt(e.nextSibling)}function Wn(){ut=st=null,je=!1}function jl(e){kt===null?kt=[e]:kt.push(e)}var cp=ge.ReactCurrentBatchConfig;function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(u(309));var r=n.stateNode}if(!r)throw Error(u(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var c=o.refs;a===null?delete c[l]:c[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(u(284));if(!n._owner)throw Error(u(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mu(e){var t=e._init;return t(e._payload)}function vu(e){function t(m,p){if(e){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=an(m,p),m.index=0,m.sibling=null,m}function l(m,p,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function c(m,p,y,L){return p===null||p.tag!==6?(p=ma(y,m.mode,L),p.return=m,p):(p=o(p,y),p.return=m,p)}function f(m,p,y,L){var U=y.type;return U===V?_(m,p,y.props.children,L,y.key):p!==null&&(p.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===P&&mu(U)===p.type)?(L=o(p,y.props),L.ref=Lr(m,p,y),L.return=m,L):(L=ti(y.type,y.key,y.props,null,m.mode,L),L.ref=Lr(m,p,y),L.return=m,L)}function x(m,p,y,L){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=va(y,m.mode,L),p.return=m,p):(p=o(p,y.children||[]),p.return=m,p)}function _(m,p,y,L,U){return p===null||p.tag!==7?(p=Cn(y,m.mode,L,U),p.return=m,p):(p=o(p,y),p.return=m,p)}function z(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ma(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ie:return y=ti(p.type,p.key,p.props,null,m.mode,y),y.ref=Lr(m,null,p),y.return=m,y;case se:return p=va(p,m.mode,y),p.return=m,p;case P:var L=p._init;return z(m,L(p._payload),y)}if(ir(p)||D(p))return p=Cn(p,m.mode,y,null),p.return=m,p;To(m,p)}return null}function j(m,p,y,L){var U=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return U!==null?null:c(m,p,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ie:return y.key===U?f(m,p,y,L):null;case se:return y.key===U?x(m,p,y,L):null;case P:return U=y._init,j(m,p,U(y._payload),L)}if(ir(y)||D(y))return U!==null?null:_(m,p,y,L,null);To(m,y)}return null}function R(m,p,y,L,U){if(typeof L=="string"&&L!==""||typeof L=="number")return m=m.get(y)||null,c(p,m,""+L,U);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ie:return m=m.get(L.key===null?y:L.key)||null,f(p,m,L,U);case se:return m=m.get(L.key===null?y:L.key)||null,x(p,m,L,U);case P:var Y=L._init;return R(m,p,y,Y(L._payload),U)}if(ir(L)||D(L))return m=m.get(y)||null,_(p,m,L,U,null);To(p,L)}return null}function F(m,p,y,L){for(var U=null,Y=null,X=p,te=p=0,Qe=null;X!==null&&te<y.length;te++){X.index>te?(Qe=X,X=null):Qe=X.sibling;var he=j(m,X,y[te],L);if(he===null){X===null&&(X=Qe);break}e&&X&&he.alternate===null&&t(m,X),p=l(he,p,te),Y===null?U=he:Y.sibling=he,Y=he,X=Qe}if(te===y.length)return n(m,X),je&&gn(m,te),U;if(X===null){for(;te<y.length;te++)X=z(m,y[te],L),X!==null&&(p=l(X,p,te),Y===null?U=X:Y.sibling=X,Y=X);return je&&gn(m,te),U}for(X=r(m,X);te<y.length;te++)Qe=R(X,m,te,y[te],L),Qe!==null&&(e&&Qe.alternate!==null&&X.delete(Qe.key===null?te:Qe.key),p=l(Qe,p,te),Y===null?U=Qe:Y.sibling=Qe,Y=Qe);return e&&X.forEach(function(sn){return t(m,sn)}),je&&gn(m,te),U}function $(m,p,y,L){var U=D(y);if(typeof U!="function")throw Error(u(150));if(y=U.call(y),y==null)throw Error(u(151));for(var Y=U=null,X=p,te=p=0,Qe=null,he=y.next();X!==null&&!he.done;te++,he=y.next()){X.index>te?(Qe=X,X=null):Qe=X.sibling;var sn=j(m,X,he.value,L);if(sn===null){X===null&&(X=Qe);break}e&&X&&sn.alternate===null&&t(m,X),p=l(sn,p,te),Y===null?U=sn:Y.sibling=sn,Y=sn,X=Qe}if(he.done)return n(m,X),je&&gn(m,te),U;if(X===null){for(;!he.done;te++,he=y.next())he=z(m,he.value,L),he!==null&&(p=l(he,p,te),Y===null?U=he:Y.sibling=he,Y=he);return je&&gn(m,te),U}for(X=r(m,X);!he.done;te++,he=y.next())he=R(X,m,te,he.value,L),he!==null&&(e&&he.alternate!==null&&X.delete(he.key===null?te:he.key),p=l(he,p,te),Y===null?U=he:Y.sibling=he,Y=he);return e&&X.forEach(function(Wp){return t(m,Wp)}),je&&gn(m,te),U}function Ie(m,p,y,L){if(typeof y=="object"&&y!==null&&y.type===V&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ie:e:{for(var U=y.key,Y=p;Y!==null;){if(Y.key===U){if(U=y.type,U===V){if(Y.tag===7){n(m,Y.sibling),p=o(Y,y.props.children),p.return=m,m=p;break e}}else if(Y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===P&&mu(U)===Y.type){n(m,Y.sibling),p=o(Y,y.props),p.ref=Lr(m,Y,y),p.return=m,m=p;break e}n(m,Y);break}else t(m,Y);Y=Y.sibling}y.type===V?(p=Cn(y.props.children,m.mode,L,y.key),p.return=m,m=p):(L=ti(y.type,y.key,y.props,null,m.mode,L),L.ref=Lr(m,p,y),L.return=m,m=L)}return a(m);case se:e:{for(Y=y.key;p!==null;){if(p.key===Y)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=o(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=va(y,m.mode,L),p.return=m,m=p}return a(m);case P:return Y=y._init,Ie(m,p,Y(y._payload),L)}if(ir(y))return F(m,p,y,L);if(D(y))return $(m,p,y,L);To(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,y),p.return=m,m=p):(n(m,p),p=ma(y,m.mode,L),p.return=m,m=p),a(m)):n(m,p)}return Ie}var Vn=vu(!0),yu=vu(!1),Oo=Xt(null),Ro=null,Hn=null,_l=null;function Nl(){_l=Hn=Ro=null}function Pl(e){var t=Oo.current;Ce(Oo),e._currentValue=t}function zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qn(e,t){Ro=e,_l=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function ht(e){var t=e._currentValue;if(_l!==e)if(e={context:e,memoizedValue:t,next:null},Hn===null){if(Ro===null)throw Error(u(308));Hn=e,Ro.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return t}var mn=null;function Ll(e){mn===null?mn=[e]:mn.push(e)}function xu(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ll(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Tl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(fe&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ll(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hi(e,n)}}function ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var o=e.updateQueue;qt=!1;var l=o.firstBaseUpdate,a=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var f=c,x=f.next;f.next=null,a===null?l=x:a.next=x,a=f;var _=e.alternate;_!==null&&(_=_.updateQueue,c=_.lastBaseUpdate,c!==a&&(c===null?_.firstBaseUpdate=x:c.next=x,_.lastBaseUpdate=f))}if(l!==null){var z=o.baseState;a=0,_=x=f=null,c=l;do{var j=c.lane,R=c.eventTime;if((r&j)===j){_!==null&&(_=_.next={eventTime:R,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var F=e,$=c;switch(j=t,R=n,$.tag){case 1:if(F=$.payload,typeof F=="function"){z=F.call(R,z,j);break e}z=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=$.payload,j=typeof F=="function"?F.call(R,z,j):F,j==null)break e;z=T({},z,j);break e;case 2:qt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,j=o.effects,j===null?o.effects=[c]:j.push(c))}else R={eventTime:R,lane:j,tag:c.tag,payload:c.payload,callback:c.callback,next:null},_===null?(x=_=R,f=z):_=_.next=R,a|=j;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;j=c,c=j.next,j.next=null,o.lastBaseUpdate=j,o.shared.pending=null}}while(!0);if(_===null&&(f=z),o.baseState=f,o.firstBaseUpdate=x,o.lastBaseUpdate=_,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);xn|=a,e.lanes=a,e.memoizedState=z}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(u(191,o));o.call(r)}}}var Tr={},Lt=Xt(Tr),Or=Xt(Tr),Rr=Xt(Tr);function vn(e){if(e===Tr)throw Error(u(174));return e}function Ol(e,t){switch(ke(Rr,t),ke(Or,e),ke(Lt,Tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ri(t,e)}Ce(Lt),ke(Lt,t)}function Gn(){Ce(Lt),Ce(Or),Ce(Rr)}function Cu(e){vn(Rr.current);var t=vn(Lt.current),n=Ri(t,e.type);t!==n&&(ke(Or,e),ke(Lt,n))}function Rl(e){Or.current===e&&(Ce(Lt),Ce(Or))}var Ne=Xt(0);function Do(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Il=[];function bl(){for(var e=0;e<Il.length;e++)Il[e]._workInProgressVersionPrimary=null;Il.length=0}var Mo=ge.ReactCurrentDispatcher,Dl=ge.ReactCurrentBatchConfig,yn=0,Pe=null,Me=null,Ve=null,Fo=!1,Ir=!1,br=0,dp=0;function Xe(){throw Error(u(321))}function Ml(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function Fl(e,t,n,r,o,l){if(yn=l,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mo.current=e===null||e.memoizedState===null?gp:mp,e=n(r,o),Ir){l=0;do{if(Ir=!1,br=0,25<=l)throw Error(u(301));l+=1,Ve=Me=null,t.updateQueue=null,Mo.current=vp,e=n(r,o)}while(Ir)}if(Mo.current=Bo,t=Me!==null&&Me.next!==null,yn=0,Ve=Me=Pe=null,Fo=!1,t)throw Error(u(300));return e}function Al(){var e=br!==0;return br=0,e}function Tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Pe.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function gt(){if(Me===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ve===null?Pe.memoizedState:Ve.next;if(t!==null)Ve=t,Me=e;else{if(e===null)throw Error(u(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ve===null?Pe.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Dr(e,t){return typeof t=="function"?t(e):t}function $l(e){var t=gt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=Me,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var a=o.next;o.next=l.next,l.next=a}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var c=a=null,f=null,x=l;do{var _=x.lane;if((yn&_)===_)f!==null&&(f=f.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),r=x.hasEagerState?x.eagerState:e(r,x.action);else{var z={lane:_,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};f===null?(c=f=z,a=r):f=f.next=z,Pe.lanes|=_,xn|=_}x=x.next}while(x!==null&&x!==l);f===null?a=r:f.next=c,wt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Pe.lanes|=l,xn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=gt(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do l=e(l,a.action),a=a.next;while(a!==o);wt(l,t.memoizedState)||(rt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Eu(){}function ju(e,t){var n=Pe,r=gt(),o=t(),l=!wt(r.memoizedState,o);if(l&&(r.memoizedState=o,rt=!0),r=r.queue,Ul(Pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Mr(9,Nu.bind(null,n,r,o,t),void 0,null),He===null)throw Error(u(349));(yn&30)!==0||_u(n,t,o)}return o}function _u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nu(e,t,n,r){t.value=n,t.getSnapshot=r,zu(t)&&Lu(e)}function Pu(e,t,n){return n(function(){zu(t)&&Lu(e)})}function zu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Lu(e){var t=Mt(e,1);t!==null&&jt(t,e,1,-1)}function Tu(e){var t=Tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:e},t.queue=e,e=e.dispatch=hp.bind(null,Pe,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ou(){return gt().memoizedState}function Ao(e,t,n,r){var o=Tt();Pe.flags|=e,o.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function $o(e,t,n,r){var o=gt();r=r===void 0?null:r;var l=void 0;if(Me!==null){var a=Me.memoizedState;if(l=a.destroy,r!==null&&Ml(r,a.deps)){o.memoizedState=Mr(t,n,l,r);return}}Pe.flags|=e,o.memoizedState=Mr(1|t,n,l,r)}function Ru(e,t){return Ao(8390656,8,e,t)}function Ul(e,t){return $o(2048,8,e,t)}function Iu(e,t){return $o(4,2,e,t)}function bu(e,t){return $o(4,4,e,t)}function Du(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mu(e,t,n){return n=n!=null?n.concat([e]):null,$o(4,4,Du.bind(null,t,e),n)}function Wl(){}function Fu(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ml(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $u(e,t,n){return(yn&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n):(wt(n,t)||(n=ms(),Pe.lanes|=n,xn|=n,e.baseState=!0),t)}function fp(e,t){var n=xe;xe=n!==0&&4>n?n:4,e(!0);var r=Dl.transition;Dl.transition={};try{e(!1),t()}finally{xe=n,Dl.transition=r}}function Bu(){return gt().memoizedState}function pp(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uu(e))Wu(t,n);else if(n=xu(e,t,n,r),n!==null){var o=et();jt(n,e,r,o),Vu(n,t,r)}}function hp(e,t,n){var r=on(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uu(e))Wu(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,c=l(a,n);if(o.hasEagerState=!0,o.eagerState=c,wt(c,a)){var f=t.interleaved;f===null?(o.next=o,Ll(t)):(o.next=f.next,f.next=o),t.interleaved=o;return}}catch{}finally{}n=xu(e,t,o,r),n!==null&&(o=et(),jt(n,e,r,o),Vu(n,t,r))}}function Uu(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function Wu(e,t){Ir=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hi(e,n)}}var Bo={readContext:ht,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},gp={readContext:ht,useCallback:function(e,t){return Tt().memoizedState=[e,t===void 0?null:t],e},useContext:ht,useEffect:Ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,Du.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=Tt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=pp.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=Tt();return e={current:e},t.memoizedState=e},useState:Tu,useDebugValue:Wl,useDeferredValue:function(e){return Tt().memoizedState=e},useTransition:function(){var e=Tu(!1),t=e[0];return e=fp.bind(null,e[1]),Tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=Tt();if(je){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),He===null)throw Error(u(349));(yn&30)!==0||_u(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ru(Pu.bind(null,r,l,e),[e]),r.flags|=2048,Mr(9,Nu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Tt(),t=He.identifierPrefix;if(je){var n=Dt,r=bt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=br++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mp={readContext:ht,useCallback:Fu,useContext:ht,useEffect:Ul,useImperativeHandle:Mu,useInsertionEffect:Iu,useLayoutEffect:bu,useMemo:Au,useReducer:$l,useRef:Ou,useState:function(){return $l(Dr)},useDebugValue:Wl,useDeferredValue:function(e){var t=gt();return $u(t,Me.memoizedState,e)},useTransition:function(){var e=$l(Dr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:ju,useId:Bu,unstable_isNewReconciler:!1},vp={readContext:ht,useCallback:Fu,useContext:ht,useEffect:Ul,useImperativeHandle:Mu,useInsertionEffect:Iu,useLayoutEffect:bu,useMemo:Au,useReducer:Bl,useRef:Ou,useState:function(){return Bl(Dr)},useDebugValue:Wl,useDeferredValue:function(e){var t=gt();return Me===null?t.memoizedState=e:$u(t,Me.memoizedState,e)},useTransition:function(){var e=Bl(Dr)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Eu,useSyncExternalStore:ju,useId:Bu,unstable_isNewReconciler:!1};function St(e,t){if(e&&e.defaultProps){t=T({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:T({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Uo={isMounted:function(e){return(e=e._reactInternals)?dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=et(),o=on(e),l=Ft(r,o);l.payload=t,n!=null&&(l.callback=n),t=en(e,l,o),t!==null&&(jt(t,e,o,r),Io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=et(),o=on(e),l=Ft(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=en(e,l,o),t!==null&&(jt(t,e,o,r),Io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),r=on(e),o=Ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(jt(t,e,r,n),Io(t,e,r))}};function Hu(e,t,n,r,o,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Cr(n,r)||!Cr(o,l):!0}function Qu(e,t,n){var r=!1,o=Zt,l=t.contextType;return typeof l=="object"&&l!==null?l=ht(l):(o=nt(t)?pn:Ye.current,r=t.contextTypes,l=(r=r!=null)?$n(e,o):Zt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Uo.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Tl(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=ht(l):(l=nt(t)?pn:Ye.current,o.context=$n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Vl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Uo.enqueueReplaceState(o,o.state,null),bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=ee(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ql(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var yp=typeof WeakMap=="function"?WeakMap:Map;function Ku(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Yo||(Yo=!0,sa=r),Gl(e,t)},n}function Yu(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Gl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Gl(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new yp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Op.bind(null,e,t,n),t.then(e,e))}function Zu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ju(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var xp=ge.ReactCurrentOwner,rt=!1;function qe(e,t,n,r){t.child=e===null?yu(t,null,n,r):Vn(t,e.child,n,r)}function qu(e,t,n,r,o){n=n.render;var l=t.ref;return Qn(t,o),r=Fl(e,t,n,r,l,o),n=Al(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(je&&n&&kl(t),t.flags|=1,qe(e,t,r,o),t.child)}function ec(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!ga(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,tc(e,t,l,r,o)):(e=ti(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Cr,n(a,r)&&e.ref===t.ref)return At(e,t,o)}return t.flags|=1,e=an(l,r),e.ref=t.ref,e.return=t,t.child=e}function tc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Cr(l,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,At(e,t,o)}return Kl(e,t,n,r,o)}function nc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(Xn,ct),ct|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(Xn,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ke(Xn,ct),ct|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ke(Xn,ct),ct|=r;return qe(e,t,o,n),t.child}function rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Kl(e,t,n,r,o){var l=nt(n)?pn:Ye.current;return l=$n(t,l),Qn(t,o),n=Fl(e,t,n,r,l,o),r=Al(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,At(e,t,o)):(je&&r&&kl(t),t.flags|=1,qe(e,t,n,o),t.child)}function oc(e,t,n,r,o){if(nt(n)){var l=!0;_o(t)}else l=!1;if(Qn(t,o),t.stateNode===null)Vo(e,t),Qu(t,n,r),Hl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,c=t.memoizedProps;a.props=c;var f=a.context,x=n.contextType;typeof x=="object"&&x!==null?x=ht(x):(x=nt(n)?pn:Ye.current,x=$n(t,x));var _=n.getDerivedStateFromProps,z=typeof _=="function"||typeof a.getSnapshotBeforeUpdate=="function";z||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||f!==x)&&Gu(t,a,r,x),qt=!1;var j=t.memoizedState;a.state=j,bo(t,r,a,o),f=t.memoizedState,c!==r||j!==f||tt.current||qt?(typeof _=="function"&&(Vl(t,n,_,r),f=t.memoizedState),(c=qt||Hu(t,n,c,r,j,f,x))?(z||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=x,r=c):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,wu(e,t),c=t.memoizedProps,x=t.type===t.elementType?c:St(t.type,c),a.props=x,z=t.pendingProps,j=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=ht(f):(f=nt(n)?pn:Ye.current,f=$n(t,f));var R=n.getDerivedStateFromProps;(_=typeof R=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==z||j!==f)&&Gu(t,a,r,f),qt=!1,j=t.memoizedState,a.state=j,bo(t,r,a,o);var F=t.memoizedState;c!==z||j!==F||tt.current||qt?(typeof R=="function"&&(Vl(t,n,R,r),F=t.memoizedState),(x=qt||Hu(t,n,x,r,j,F,f)||!1)?(_||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,F,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,F,f)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=F),a.props=r,a.state=F,a.context=f,r=x):(typeof a.componentDidUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,l,o)}function Yl(e,t,n,r,o,l){rc(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&uu(t,n,!1),At(e,t,l);r=t.stateNode,xp.current=t;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Vn(t,e.child,null,l),t.child=Vn(t,null,c,l)):qe(e,t,c,l),t.memoizedState=r.state,o&&uu(t,n,!0),t.child}function ic(e){var t=e.stateNode;t.pendingContext?au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&au(e,t.context,!1),Ol(e,t.containerInfo)}function lc(e,t,n,r,o){return Wn(),jl(o),t.flags|=256,qe(e,t,n,r),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ac(e,t,n){var r=t.pendingProps,o=Ne.current,l=!1,a=(t.flags&128)!==0,c;if((c=a)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ke(Ne,o&1),e===null)return El(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=a):l=ni(a,r,0,null),e=Cn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Zl(n),t.memoizedState=Xl,e):Jl(t,a));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return wp(e,t,a,r,c,o,n);if(l){l=r.fallback,a=t.mode,o=e.child,c=o.sibling;var f={mode:"hidden",children:r.children};return(a&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=an(o,f),r.subtreeFlags=o.subtreeFlags&14680064),c!==null?l=an(c,l):(l=Cn(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Xl,r}return l=e.child,e=l.sibling,r=an(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jl(e,t){return t=ni({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wo(e,t,n,r){return r!==null&&jl(r),Vn(t,e.child,null,n),e=Jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wp(e,t,n,r,o,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Ql(Error(u(422))),Wo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=ni({mode:"visible",children:r.children},o,0,null),l=Cn(l,o,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Vn(t,e.child,null,a),t.child.memoizedState=Zl(a),t.memoizedState=Xl,l);if((t.mode&1)===0)return Wo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;return r=c,l=Error(u(419)),r=Ql(l,r,void 0),Wo(e,t,a,r)}if(c=(a&e.childLanes)!==0,rt||c){if(r=He,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|a))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Mt(e,o),jt(r,e,o,-1))}return ha(),r=Ql(Error(u(421))),Wo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Rp.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ut=Yt(o.nextSibling),st=t,je=!0,kt=null,e!==null&&(ft[pt++]=bt,ft[pt++]=Dt,ft[pt++]=hn,bt=e.id,Dt=e.overflow,hn=t),t=Jl(t,r.children),t.flags|=4096,t)}function sc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zl(e.return,t,n)}function ql(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function uc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(qe(e,t,r.children,n),r=Ne.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sc(e,n,t);else if(e.tag===19)sc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ke(Ne,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Do(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ql(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Do(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ql(t,!0,n,null,l);break;case"together":ql(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kp(e,t,n){switch(t.tag){case 3:ic(t),Wn();break;case 5:Cu(t);break;case 1:nt(t.type)&&_o(t);break;case 4:Ol(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ke(Oo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ke(Ne,Ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?ac(e,t,n):(ke(Ne,Ne.current&1),e=At(e,t,n),e!==null?e.sibling:null);ke(Ne,Ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return uc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ke(Ne,Ne.current),r)break;return null;case 22:case 23:return t.lanes=0,nc(e,t,n)}return At(e,t,n)}var cc,ea,dc,fc;cc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ea=function(){},dc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vn(Lt.current);var l=null;switch(n){case"input":o=zi(e,o),r=zi(e,r),l=[];break;case"select":o=T({},o,{value:void 0}),r=T({},r,{value:void 0}),l=[];break;case"textarea":o=Oi(e,o),r=Oi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Co)}Ii(n,r);var a;n=null;for(x in o)if(!r.hasOwnProperty(x)&&o.hasOwnProperty(x)&&o[x]!=null)if(x==="style"){var c=o[x];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(h.hasOwnProperty(x)?l||(l=[]):(l=l||[]).push(x,null));for(x in r){var f=r[x];if(c=o!=null?o[x]:void 0,r.hasOwnProperty(x)&&f!==c&&(f!=null||c!=null))if(x==="style")if(c){for(a in c)!c.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&c[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(l||(l=[]),l.push(x,n)),n=f;else x==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,c=c?c.__html:void 0,f!=null&&c!==f&&(l=l||[]).push(x,f)):x==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(x,""+f):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(h.hasOwnProperty(x)?(f!=null&&x==="onScroll"&&Se("scroll",e),l||c===f||(l=[])):(l=l||[]).push(x,f))}n&&(l=l||[]).push("style",n);var x=l;(t.updateQueue=x)&&(t.flags|=4)}},fc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Sp(e,t,n){var r=t.pendingProps;switch(Sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return nt(t.type)&&jo(),Ze(t),null;case 3:return r=t.stateNode,Gn(),Ce(tt),Ce(Ye),bl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kt!==null&&(da(kt),kt=null))),ea(e,t),Ze(t),null;case 5:Rl(t);var o=vn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)dc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(u(166));return Ze(t),null}if(e=vn(Lt.current),Lo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[zt]=t,r[Pr]=l,e=(t.mode&1)!==0,n){case"dialog":Se("cancel",r),Se("close",r);break;case"iframe":case"object":case"embed":Se("load",r);break;case"video":case"audio":for(o=0;o<jr.length;o++)Se(jr[o],r);break;case"source":Se("error",r);break;case"img":case"image":case"link":Se("error",r),Se("load",r);break;case"details":Se("toggle",r);break;case"input":Qa(r,l),Se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},Se("invalid",r);break;case"textarea":Ya(r,l),Se("invalid",r)}Ii(n,l),o=null;for(var a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="children"?typeof c=="string"?r.textContent!==c&&(l.suppressHydrationWarning!==!0&&So(r.textContent,c,e),o=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(l.suppressHydrationWarning!==!0&&So(r.textContent,c,e),o=["children",""+c]):h.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&Se("scroll",r)}switch(n){case"input":Jr(r),Ka(r,l,!0);break;case"textarea":Jr(r),Za(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Co)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ja(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[zt]=t,e[Pr]=r,cc(e,t,!1,!1),t.stateNode=e;e:{switch(a=bi(n,r),n){case"dialog":Se("cancel",e),Se("close",e),o=r;break;case"iframe":case"object":case"embed":Se("load",e),o=r;break;case"video":case"audio":for(o=0;o<jr.length;o++)Se(jr[o],e);o=r;break;case"source":Se("error",e),o=r;break;case"img":case"image":case"link":Se("error",e),Se("load",e),o=r;break;case"details":Se("toggle",e),o=r;break;case"input":Qa(e,r),o=zi(e,r),Se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=T({},r,{value:void 0}),Se("invalid",e);break;case"textarea":Ya(e,r),o=Oi(e,r),Se("invalid",e);break;default:o=r}Ii(n,o),c=o;for(l in c)if(c.hasOwnProperty(l)){var f=c[l];l==="style"?ts(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&qa(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&lr(e,f):typeof f=="number"&&lr(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(h.hasOwnProperty(l)?f!=null&&l==="onScroll"&&Se("scroll",e):f!=null&&ve(e,l,f,a))}switch(n){case"input":Jr(e),Ka(e,r,!1);break;case"textarea":Jr(e),Za(e);break;case"option":r.value!=null&&e.setAttribute("value",""+de(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Pn(e,!!r.multiple,l,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Co)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ze(t),null;case 6:if(e&&t.stateNode!=null)fc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(u(166));if(n=vn(Rr.current),vn(Lt.current),Lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(l=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:So(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&So(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ze(t),null;case 13:if(Ce(Ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ut!==null&&(t.mode&1)!==0&&(t.flags&128)===0)gu(),Wn(),t.flags|=98560,l=!1;else if(l=Lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[zt]=t}else Wn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),l=!1}else kt!==null&&(da(kt),kt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Ne.current&1)!==0?Fe===0&&(Fe=3):ha())),t.updateQueue!==null&&(t.flags|=4),Ze(t),null);case 4:return Gn(),ea(e,t),e===null&&_r(t.stateNode.containerInfo),Ze(t),null;case 10:return Pl(t.type._context),Ze(t),null;case 17:return nt(t.type)&&jo(),Ze(t),null;case 19:if(Ce(Ne),l=t.memoizedState,l===null)return Ze(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)Fr(l,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Do(e),a!==null){for(t.flags|=128,Fr(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Ne,Ne.current&1|2),t.child}e=e.sibling}l.tail!==null&&Re()>Zn&&(t.flags|=128,r=!0,Fr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Do(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!je)return Ze(t),null}else 2*Re()-l.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,Fr(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Re(),t.sibling=null,n=Ne.current,ke(Ne,r?n&1|2:n&1),t):(Ze(t),null);case 22:case 23:return pa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(ct&1073741824)!==0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),null;case 24:return null;case 25:return null}throw Error(u(156,t.tag))}function Cp(e,t){switch(Sl(t),t.tag){case 1:return nt(t.type)&&jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),Ce(tt),Ce(Ye),bl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Rl(t),null;case 13:if(Ce(Ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));Wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Ne),null;case 4:return Gn(),null;case 10:return Pl(t.type._context),null;case 22:case 23:return pa(),null;case 24:return null;default:return null}}var Ho=!1,Je=!1,Ep=typeof WeakSet=="function"?WeakSet:Set,b=null;function Yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(e,t,r)}else n.current=null}function ta(e,t,n){try{n()}catch(r){Oe(e,t,r)}}var pc=!1;function jp(e,t){if(pl=co,e=Hs(),il(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,c=-1,f=-1,x=0,_=0,z=e,j=null;t:for(;;){for(var R;z!==n||o!==0&&z.nodeType!==3||(c=a+o),z!==l||r!==0&&z.nodeType!==3||(f=a+r),z.nodeType===3&&(a+=z.nodeValue.length),(R=z.firstChild)!==null;)j=z,z=R;for(;;){if(z===e)break t;if(j===n&&++x===o&&(c=a),j===l&&++_===r&&(f=a),(R=z.nextSibling)!==null)break;z=j,j=z.parentNode}z=R}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},co=!1,b=t;b!==null;)if(t=b,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,b=e;else for(;b!==null;){t=b;try{var F=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(F!==null){var $=F.memoizedProps,Ie=F.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?$:St(t.type,$),Ie);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(u(163))}}catch(L){Oe(t,t.return,L)}if(e=t.sibling,e!==null){e.return=t.return,b=e;break}b=t.return}return F=pc,pc=!1,F}function Ar(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ta(t,n,l)}o=o.next}while(o!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function na(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hc(e){var t=e.alternate;t!==null&&(e.alternate=null,hc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Pr],delete t[yl],delete t[ap],delete t[sp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gc(e){return e.tag===5||e.tag===3||e.tag===4}function mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Co));else if(r!==4&&(e=e.child,e!==null))for(ra(e,t,n),e=e.sibling;e!==null;)ra(e,t,n),e=e.sibling}function oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(oa(e,t,n),e=e.sibling;e!==null;)oa(e,t,n),e=e.sibling}var Ge=null,Ct=!1;function tn(e,t,n){for(n=n.child;n!==null;)vc(e,t,n),n=n.sibling}function vc(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(oo,n)}catch{}switch(n.tag){case 5:Je||Yn(n,t);case 6:var r=Ge,o=Ct;Ge=null,tn(e,t,n),Ge=r,Ct=o,Ge!==null&&(Ct?(e=Ge,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Ct?(e=Ge,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),vr(e)):vl(Ge,n.stateNode));break;case 4:r=Ge,o=Ct,Ge=n.stateNode.containerInfo,Ct=!0,tn(e,t,n),Ge=r,Ct=o;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,a=l.destroy;l=l.tag,a!==void 0&&((l&2)!==0||(l&4)!==0)&&ta(n,t,a),o=o.next}while(o!==r)}tn(e,t,n);break;case 1:if(!Je&&(Yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Oe(n,t,c)}tn(e,t,n);break;case 21:tn(e,t,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,tn(e,t,n),Je=r):tn(e,t,n);break;default:tn(e,t,n)}}function yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ep),t.forEach(function(r){var o=Ip.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,a=t,c=a;e:for(;c!==null;){switch(c.tag){case 5:Ge=c.stateNode,Ct=!1;break e;case 3:Ge=c.stateNode.containerInfo,Ct=!0;break e;case 4:Ge=c.stateNode.containerInfo,Ct=!0;break e}c=c.return}if(Ge===null)throw Error(u(160));vc(l,a,o),Ge=null,Ct=!1;var f=o.alternate;f!==null&&(f.return=null),o.return=null}catch(x){Oe(o,t,x)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xc(t,e),t=t.sibling}function xc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Ot(e),r&4){try{Ar(3,e,e.return),Qo(3,e)}catch($){Oe(e,e.return,$)}try{Ar(5,e,e.return)}catch($){Oe(e,e.return,$)}}break;case 1:Et(t,e),Ot(e),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(Et(t,e),Ot(e),r&512&&n!==null&&Yn(n,n.return),e.flags&32){var o=e.stateNode;try{lr(o,"")}catch($){Oe(e,e.return,$)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,c=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{c==="input"&&l.type==="radio"&&l.name!=null&&Ga(o,l),bi(c,a);var x=bi(c,l);for(a=0;a<f.length;a+=2){var _=f[a],z=f[a+1];_==="style"?ts(o,z):_==="dangerouslySetInnerHTML"?qa(o,z):_==="children"?lr(o,z):ve(o,_,z,x)}switch(c){case"input":Li(o,l);break;case"textarea":Xa(o,l);break;case"select":var j=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var R=l.value;R!=null?Pn(o,!!l.multiple,R,!1):j!==!!l.multiple&&(l.defaultValue!=null?Pn(o,!!l.multiple,l.defaultValue,!0):Pn(o,!!l.multiple,l.multiple?[]:"",!1))}o[Pr]=l}catch($){Oe(e,e.return,$)}}break;case 6:if(Et(t,e),Ot(e),r&4){if(e.stateNode===null)throw Error(u(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch($){Oe(e,e.return,$)}}break;case 3:if(Et(t,e),Ot(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch($){Oe(e,e.return,$)}break;case 4:Et(t,e),Ot(e);break;case 13:Et(t,e),Ot(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(aa=Re())),r&4&&yc(e);break;case 22:if(_=n!==null&&n.memoizedState!==null,e.mode&1?(Je=(x=Je)||_,Et(t,e),Je=x):Et(t,e),Ot(e),r&8192){if(x=e.memoizedState!==null,(e.stateNode.isHidden=x)&&!_&&(e.mode&1)!==0)for(b=e,_=e.child;_!==null;){for(z=b=_;b!==null;){switch(j=b,R=j.child,j.tag){case 0:case 11:case 14:case 15:Ar(4,j,j.return);break;case 1:Yn(j,j.return);var F=j.stateNode;if(typeof F.componentWillUnmount=="function"){r=j,n=j.return;try{t=r,F.props=t.memoizedProps,F.state=t.memoizedState,F.componentWillUnmount()}catch($){Oe(r,n,$)}}break;case 5:Yn(j,j.return);break;case 22:if(j.memoizedState!==null){Sc(z);continue}}R!==null?(R.return=j,b=R):Sc(z)}_=_.sibling}e:for(_=null,z=e;;){if(z.tag===5){if(_===null){_=z;try{o=z.stateNode,x?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(c=z.stateNode,f=z.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,c.style.display=es("display",a))}catch($){Oe(e,e.return,$)}}}else if(z.tag===6){if(_===null)try{z.stateNode.nodeValue=x?"":z.memoizedProps}catch($){Oe(e,e.return,$)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;_===z&&(_=null),z=z.return}_===z&&(_=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:Et(t,e),Ot(e),r&4&&yc(e);break;case 21:break;default:Et(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gc(n)){var r=n;break e}n=n.return}throw Error(u(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(lr(o,""),r.flags&=-33);var l=mc(e);oa(e,l,o);break;case 3:case 4:var a=r.stateNode.containerInfo,c=mc(e);ra(e,c,a);break;default:throw Error(u(161))}}catch(f){Oe(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _p(e,t,n){b=e,wc(e)}function wc(e,t,n){for(var r=(e.mode&1)!==0;b!==null;){var o=b,l=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ho;if(!a){var c=o.alternate,f=c!==null&&c.memoizedState!==null||Je;c=Ho;var x=Je;if(Ho=a,(Je=f)&&!x)for(b=o;b!==null;)a=b,f=a.child,a.tag===22&&a.memoizedState!==null?Cc(o):f!==null?(f.return=a,b=f):Cc(o);for(;l!==null;)b=l,wc(l),l=l.sibling;b=o,Ho=c,Je=x}kc(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,b=l):kc(e)}}function kc(e){for(;b!==null;){var t=b;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Je||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Je)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Su(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,a,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var x=t.alternate;if(x!==null){var _=x.memoizedState;if(_!==null){var z=_.dehydrated;z!==null&&vr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(u(163))}Je||t.flags&512&&na(t)}catch(j){Oe(t,t.return,j)}}if(t===e){b=null;break}if(n=t.sibling,n!==null){n.return=t.return,b=n;break}b=t.return}}function Sc(e){for(;b!==null;){var t=b;if(t===e){b=null;break}var n=t.sibling;if(n!==null){n.return=t.return,b=n;break}b=t.return}}function Cc(e){for(;b!==null;){var t=b;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(f){Oe(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(f){Oe(t,o,f)}}var l=t.return;try{na(t)}catch(f){Oe(t,l,f)}break;case 5:var a=t.return;try{na(t)}catch(f){Oe(t,a,f)}}}catch(f){Oe(t,t.return,f)}if(t===e){b=null;break}var c=t.sibling;if(c!==null){c.return=t.return,b=c;break}b=t.return}}var Np=Math.ceil,Go=ge.ReactCurrentDispatcher,ia=ge.ReactCurrentOwner,mt=ge.ReactCurrentBatchConfig,fe=0,He=null,be=null,Ke=0,ct=0,Xn=Xt(0),Fe=0,$r=null,xn=0,Ko=0,la=0,Br=null,ot=null,aa=0,Zn=1/0,$t=null,Yo=!1,sa=null,nn=null,Xo=!1,rn=null,Zo=0,Ur=0,ua=null,Jo=-1,qo=0;function et(){return(fe&6)!==0?Re():Jo!==-1?Jo:Jo=Re()}function on(e){return(e.mode&1)===0?1:(fe&2)!==0&&Ke!==0?Ke&-Ke:cp.transition!==null?(qo===0&&(qo=ms()),qo):(e=xe,e!==0||(e=window.event,e=e===void 0?16:js(e.type)),e)}function jt(e,t,n,r){if(50<Ur)throw Ur=0,ua=null,Error(u(185));fr(e,n,r),((fe&2)===0||e!==He)&&(e===He&&((fe&2)===0&&(Ko|=n),Fe===4&&ln(e,Ke)),it(e,r),n===1&&fe===0&&(t.mode&1)===0&&(Zn=Re()+500,No&&Jt()))}function it(e,t){var n=e.callbackNode;cf(e,t);var r=ao(e,e===He?Ke:0);if(r===0)n!==null&&ps(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ps(n),t===1)e.tag===0?up(jc.bind(null,e)):cu(jc.bind(null,e)),ip(function(){(fe&6)===0&&Jt()}),n=null;else{switch(vs(r)){case 1:n=Ui;break;case 4:n=hs;break;case 16:n=ro;break;case 536870912:n=gs;break;default:n=ro}n=Rc(n,Ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ec(e,t){if(Jo=-1,qo=0,(fe&6)!==0)throw Error(u(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=ao(e,e===He?Ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ei(e,r);else{t=r;var o=fe;fe|=2;var l=Nc();(He!==e||Ke!==t)&&($t=null,Zn=Re()+500,kn(e,t));do try{Lp();break}catch(c){_c(e,c)}while(!0);Nl(),Go.current=l,fe=o,be!==null?t=0:(He=null,Ke=0,t=Fe)}if(t!==0){if(t===2&&(o=Wi(e),o!==0&&(r=o,t=ca(e,o))),t===1)throw n=$r,kn(e,0),ln(e,r),it(e,Re()),n;if(t===6)ln(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Pp(o)&&(t=ei(e,r),t===2&&(l=Wi(e),l!==0&&(r=l,t=ca(e,l))),t===1))throw n=$r,kn(e,0),ln(e,r),it(e,Re()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(u(345));case 2:Sn(e,ot,$t);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=aa+500-Re(),10<t)){if(ao(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){et(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ml(Sn.bind(null,e,ot,$t),t);break}Sn(e,ot,$t);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-xt(r);l=1<<a,a=t[a],a>o&&(o=a),r&=~l}if(r=o,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Np(r/1960))-r,10<r){e.timeoutHandle=ml(Sn.bind(null,e,ot,$t),r);break}Sn(e,ot,$t);break;case 5:Sn(e,ot,$t);break;default:throw Error(u(329))}}}return it(e,Re()),e.callbackNode===n?Ec.bind(null,e):null}function ca(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=ei(e,t),e!==2&&(t=ot,ot=n,t!==null&&da(t)),e}function da(e){ot===null?ot=e:ot.push.apply(ot,e)}function Pp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!wt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~la,t&=~Ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if((fe&6)!==0)throw Error(u(327));Jn();var t=ao(e,0);if((t&1)===0)return it(e,Re()),null;var n=ei(e,t);if(e.tag!==0&&n===2){var r=Wi(e);r!==0&&(t=r,n=ca(e,r))}if(n===1)throw n=$r,kn(e,0),ln(e,t),it(e,Re()),n;if(n===6)throw Error(u(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sn(e,ot,$t),it(e,Re()),null}function fa(e,t){var n=fe;fe|=1;try{return e(t)}finally{fe=n,fe===0&&(Zn=Re()+500,No&&Jt())}}function wn(e){rn!==null&&rn.tag===0&&(fe&6)===0&&Jn();var t=fe;fe|=1;var n=mt.transition,r=xe;try{if(mt.transition=null,xe=1,e)return e()}finally{xe=r,mt.transition=n,fe=t,(fe&6)===0&&Jt()}}function pa(){ct=Xn.current,Ce(Xn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,op(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(Sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:Gn(),Ce(tt),Ce(Ye),bl();break;case 5:Rl(r);break;case 4:Gn();break;case 13:Ce(Ne);break;case 19:Ce(Ne);break;case 10:Pl(r.type._context);break;case 22:case 23:pa()}n=n.return}if(He=e,be=e=an(e.current,null),Ke=ct=t,Fe=0,$r=null,la=Ko=xn=0,ot=Br=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=o,r.next=a}n.pending=r}mn=null}return e}function _c(e,t){do{var n=be;try{if(Nl(),Mo.current=Bo,Fo){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Fo=!1}if(yn=0,Ve=Me=Pe=null,Ir=!1,br=0,ia.current=null,n===null||n.return===null){Fe=1,$r=t,be=null;break}e:{var l=e,a=n.return,c=n,f=t;if(t=Ke,c.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=f,_=c,z=_.tag;if((_.mode&1)===0&&(z===0||z===11||z===15)){var j=_.alternate;j?(_.updateQueue=j.updateQueue,_.memoizedState=j.memoizedState,_.lanes=j.lanes):(_.updateQueue=null,_.memoizedState=null)}var R=Zu(a);if(R!==null){R.flags&=-257,Ju(R,a,c,l,t),R.mode&1&&Xu(l,x,t),t=R,f=x;var F=t.updateQueue;if(F===null){var $=new Set;$.add(f),t.updateQueue=$}else F.add(f);break e}else{if((t&1)===0){Xu(l,x,t),ha();break e}f=Error(u(426))}}else if(je&&c.mode&1){var Ie=Zu(a);if(Ie!==null){(Ie.flags&65536)===0&&(Ie.flags|=256),Ju(Ie,a,c,l,t),jl(Kn(f,c));break e}}l=f=Kn(f,c),Fe!==4&&(Fe=2),Br===null?Br=[l]:Br.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var m=Ku(l,f,t);ku(l,m);break e;case 1:c=f;var p=l.type,y=l.stateNode;if((l.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nn===null||!nn.has(y)))){l.flags|=65536,t&=-t,l.lanes|=t;var L=Yu(l,c,t);ku(l,L);break e}}l=l.return}while(l!==null)}zc(n)}catch(U){t=U,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Nc(){var e=Go.current;return Go.current=Bo,e===null?Bo:e}function ha(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),He===null||(xn&268435455)===0&&(Ko&268435455)===0||ln(He,Ke)}function ei(e,t){var n=fe;fe|=2;var r=Nc();(He!==e||Ke!==t)&&($t=null,kn(e,t));do try{zp();break}catch(o){_c(e,o)}while(!0);if(Nl(),fe=n,Go.current=r,be!==null)throw Error(u(261));return He=null,Ke=0,Fe}function zp(){for(;be!==null;)Pc(be)}function Lp(){for(;be!==null&&!ef();)Pc(be)}function Pc(e){var t=Oc(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?zc(e):be=t,ia.current=null}function zc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Sp(n,t,ct),n!==null){be=n;return}}else{if(n=Cp(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,be=null;return}}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Fe===0&&(Fe=5)}function Sn(e,t,n){var r=xe,o=mt.transition;try{mt.transition=null,xe=1,Tp(e,t,n,r)}finally{mt.transition=o,xe=r}return null}function Tp(e,t,n,r){do Jn();while(rn!==null);if((fe&6)!==0)throw Error(u(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(u(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(df(e,l),e===He&&(be=He=null,Ke=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Xo||(Xo=!0,Rc(ro,function(){return Jn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=mt.transition,mt.transition=null;var a=xe;xe=1;var c=fe;fe|=4,ia.current=null,jp(e,n),xc(n,e),Zf(hl),co=!!pl,hl=pl=null,e.current=n,_p(n),tf(),fe=c,xe=a,mt.transition=l}else e.current=n;if(Xo&&(Xo=!1,rn=e,Zo=o),l=e.pendingLanes,l===0&&(nn=null),of(n.stateNode),it(e,Re()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Yo)throw Yo=!1,e=sa,sa=null,e;return(Zo&1)!==0&&e.tag!==0&&Jn(),l=e.pendingLanes,(l&1)!==0?e===ua?Ur++:(Ur=0,ua=e):Ur=0,Jt(),null}function Jn(){if(rn!==null){var e=vs(Zo),t=mt.transition,n=xe;try{if(mt.transition=null,xe=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,Zo=0,(fe&6)!==0)throw Error(u(331));var o=fe;for(fe|=4,b=e.current;b!==null;){var l=b,a=l.child;if((b.flags&16)!==0){var c=l.deletions;if(c!==null){for(var f=0;f<c.length;f++){var x=c[f];for(b=x;b!==null;){var _=b;switch(_.tag){case 0:case 11:case 15:Ar(8,_,l)}var z=_.child;if(z!==null)z.return=_,b=z;else for(;b!==null;){_=b;var j=_.sibling,R=_.return;if(hc(_),_===x){b=null;break}if(j!==null){j.return=R,b=j;break}b=R}}}var F=l.alternate;if(F!==null){var $=F.child;if($!==null){F.child=null;do{var Ie=$.sibling;$.sibling=null,$=Ie}while($!==null)}}b=l}}if((l.subtreeFlags&2064)!==0&&a!==null)a.return=l,b=a;else e:for(;b!==null;){if(l=b,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Ar(9,l,l.return)}var m=l.sibling;if(m!==null){m.return=l.return,b=m;break e}b=l.return}}var p=e.current;for(b=p;b!==null;){a=b;var y=a.child;if((a.subtreeFlags&2064)!==0&&y!==null)y.return=a,b=y;else e:for(a=p;b!==null;){if(c=b,(c.flags&2048)!==0)try{switch(c.tag){case 0:case 11:case 15:Qo(9,c)}}catch(U){Oe(c,c.return,U)}if(c===a){b=null;break e}var L=c.sibling;if(L!==null){L.return=c.return,b=L;break e}b=c.return}}if(fe=o,Jt(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(oo,e)}catch{}r=!0}return r}finally{xe=n,mt.transition=t}}return!1}function Lc(e,t,n){t=Kn(n,t),t=Ku(e,t,1),e=en(e,t,1),t=et(),e!==null&&(fr(e,1,t),it(e,t))}function Oe(e,t,n){if(e.tag===3)Lc(e,e,n);else for(;t!==null;){if(t.tag===3){Lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=Kn(n,e),e=Yu(t,e,1),t=en(t,e,1),e=et(),t!==null&&(fr(t,1,e),it(t,e));break}}t=t.return}}function Op(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,He===e&&(Ke&n)===n&&(Fe===4||Fe===3&&(Ke&130023424)===Ke&&500>Re()-aa?kn(e,0):la|=n),it(e,t)}function Tc(e,t){t===0&&((e.mode&1)===0?t=1:(t=lo,lo<<=1,(lo&130023424)===0&&(lo=4194304)));var n=et();e=Mt(e,t),e!==null&&(fr(e,t,n),it(e,n))}function Rp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tc(e,n)}function Ip(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(u(314))}r!==null&&r.delete(t),Tc(e,n)}var Oc;Oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)rt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return rt=!1,kp(e,t,n);rt=(e.flags&131072)!==0}else rt=!1,je&&(t.flags&1048576)!==0&&du(t,zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vo(e,t),e=t.pendingProps;var o=$n(t,Ye.current);Qn(t,n),o=Fl(null,t,r,e,o,n);var l=Al();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(l=!0,_o(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Tl(t),o.updater=Uo,t.stateNode=o,o._reactInternals=t,Hl(t,r,e,n),t=Yl(null,t,r,!0,l,n)):(t.tag=0,je&&l&&kl(t),qe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Dp(r),e=St(r,e),o){case 0:t=Kl(null,t,r,e,n);break e;case 1:t=oc(null,t,r,e,n);break e;case 11:t=qu(null,t,r,e,n);break e;case 14:t=ec(null,t,r,St(r.type,e),n);break e}throw Error(u(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Kl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),oc(e,t,r,o,n);case 3:e:{if(ic(t),e===null)throw Error(u(387));r=t.pendingProps,l=t.memoizedState,o=l.element,wu(e,t),bo(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Kn(Error(u(423)),t),t=lc(e,t,r,n,o);break e}else if(r!==o){o=Kn(Error(u(424)),t),t=lc(e,t,r,n,o);break e}else for(ut=Yt(t.stateNode.containerInfo.firstChild),st=t,je=!0,kt=null,n=yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wn(),r===o){t=At(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return Cu(t),e===null&&El(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,a=o.children,gl(r,o)?a=null:l!==null&&gl(r,l)&&(t.flags|=32),rc(e,t),qe(e,t,a,n),t.child;case 6:return e===null&&El(t),null;case 13:return ac(e,t,n);case 4:return Ol(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),qu(e,t,r,o,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,a=o.value,ke(Oo,r._currentValue),r._currentValue=a,l!==null)if(wt(l.value,a)){if(l.children===o.children&&!tt.current){t=At(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){a=l.child;for(var f=c.firstContext;f!==null;){if(f.context===r){if(l.tag===1){f=Ft(-1,n&-n),f.tag=2;var x=l.updateQueue;if(x!==null){x=x.shared;var _=x.pending;_===null?f.next=f:(f.next=_.next,_.next=f),x.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),zl(l.return,n,t),c.lanes|=n;break}f=f.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(u(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),zl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}qe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Qn(t,n),o=ht(o),r=r(o),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,o=St(r,t.pendingProps),o=St(r.type,o),ec(e,t,r,o,n);case 15:return tc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:St(r,o),Vo(e,t),t.tag=1,nt(r)?(e=!0,_o(t)):e=!1,Qn(t,n),Qu(t,r,o),Hl(t,r,o,n),Yl(null,t,r,!0,e,n);case 19:return uc(e,t,n);case 22:return nc(e,t,n)}throw Error(u(156,t.tag))};function Rc(e,t){return fs(e,t)}function bp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new bp(e,t,n,r)}function ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dp(e){if(typeof e=="function")return ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ue)return 11;if(e===We)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ti(e,t,n,r,o,l){var a=2;if(r=e,typeof e=="function")ga(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case V:return Cn(n.children,o,l,t);case ne:a=8,o|=8;break;case $e:return e=vt(12,n,t,o|2),e.elementType=$e,e.lanes=l,e;case pe:return e=vt(13,n,t,o),e.elementType=pe,e.lanes=l,e;case Le:return e=vt(19,n,t,o),e.elementType=Le,e.lanes=l,e;case A:return ni(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Be:a=10;break e;case ze:a=9;break e;case Ue:a=11;break e;case We:a=14;break e;case P:a=16,r=null;break e}throw Error(u(130,e==null?e:typeof e,""))}return t=vt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Cn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function ni(e,t,n,r){return e=vt(22,e,r,t),e.elementType=A,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mp(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vi(0),this.expirationTimes=Vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ya(e,t,n,r,o,l,a,c,f){return e=new Mp(e,t,n,c,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=vt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tl(l),e}function Fp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ic(e){if(!e)return Zt;e=e._reactInternals;e:{if(dn(e)!==e||e.tag!==1)throw Error(u(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(u(171))}if(e.tag===1){var n=e.type;if(nt(n))return su(e,n,t)}return t}function bc(e,t,n,r,o,l,a,c,f){return e=ya(n,r,!0,e,o,l,a,c,f),e.context=Ic(null),n=e.current,r=et(),o=on(n),l=Ft(r,o),l.callback=t??null,en(n,l,o),e.current.lanes=o,fr(e,o,r),it(e,r),e}function ri(e,t,n,r){var o=t.current,l=et(),a=on(o);return n=Ic(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,a),e!==null&&(jt(e,o,a,l),Io(e,o,a)),a}function oi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xa(e,t){Dc(e,t),(e=e.alternate)&&Dc(e,t)}function Ap(){return null}var Mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function wa(e){this._internalRoot=e}ii.prototype.render=wa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));ri(e,t,null,null)},ii.prototype.unmount=wa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){ri(null,e,null,null)}),t[Rt]=null}};function ii(e){this._internalRoot=e}ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=ws();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&Cs(e)}};function ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function li(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fc(){}function $p(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var x=oi(a);l.call(x)}}var a=bc(t,r,e,0,null,!1,!1,"",Fc);return e._reactRootContainer=a,e[Rt]=a.current,_r(e.nodeType===8?e.parentNode:e),wn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var c=r;r=function(){var x=oi(f);c.call(x)}}var f=ya(e,0,!1,null,null,!1,!1,"",Fc);return e._reactRootContainer=f,e[Rt]=f.current,_r(e.nodeType===8?e.parentNode:e),wn(function(){ri(t,f,n,r)}),f}function ai(e,t,n,r,o){var l=n._reactRootContainer;if(l){var a=l;if(typeof o=="function"){var c=o;o=function(){var f=oi(a);c.call(f)}}ri(t,a,e,o)}else a=$p(n,t,e,o,r);return oi(a)}ys=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Hi(t,n|1),it(t,Re()),(fe&6)===0&&(Zn=Re()+500,Jt()))}break;case 13:wn(function(){var r=Mt(e,1);if(r!==null){var o=et();jt(r,e,1,o)}}),xa(e,1)}},Qi=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=et();jt(t,e,134217728,n)}xa(e,134217728)}},xs=function(e){if(e.tag===13){var t=on(e),n=Mt(e,t);if(n!==null){var r=et();jt(n,e,t,r)}xa(e,t)}},ws=function(){return xe},ks=function(e,t){var n=xe;try{return xe=e,t()}finally{xe=n}},Fi=function(e,t,n){switch(t){case"input":if(Li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Eo(r);if(!o)throw Error(u(90));Ha(r),Li(r,o)}}}break;case"textarea":Xa(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}},is=fa,ls=wn;var Bp={usingClientEntryPoint:!1,Events:[zr,Fn,Eo,rs,os,fa]},Wr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Up={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cs(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||Ap,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{oo=si.inject(Up),Pt=si}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ka(t))throw Error(u(200));return Fp(e,t,null,n)},lt.createRoot=function(e,t){if(!ka(e))throw Error(u(299));var n=!1,r="",o=Mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ya(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,_r(e.nodeType===8?e.parentNode:e),new wa(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=cs(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return wn(e)},lt.hydrate=function(e,t,n){if(!li(t))throw Error(u(200));return ai(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!ka(e))throw Error(u(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",a=Mc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=bc(t,null,e,1,n??null,o,!1,l,a),e[Rt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ii(t)},lt.render=function(e,t,n){if(!li(t))throw Error(u(200));return ai(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!li(e))throw Error(u(40));return e._reactRootContainer?(wn(function(){ai(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1},lt.unstable_batchedUpdates=fa,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!li(n))throw Error(u(200));if(e==null||e._reactInternals===void 0)throw Error(u(38));return ai(e,t,n,!1,r)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var Qc;function Zp(){if(Qc)return Ea.exports;Qc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(s){console.error(s)}}return i(),Ea.exports=Xp(),Ea.exports}var Gc;function Jp(){if(Gc)return ui;Gc=1;var i=Zp();return ui.createRoot=i.createRoot,ui.hydrateRoot=i.hydrateRoot,ui}var qp=Jp(),we=$a();const dt=Vp(we);var hd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Kc=dt.createContext&&dt.createContext(hd),eh=["attr","size","title"];function th(i,s){if(i==null)return{};var u,d,h=nh(i,s);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(i);for(d=0;d<w.length;d++)u=w[d],s.indexOf(u)===-1&&{}.propertyIsEnumerable.call(i,u)&&(h[u]=i[u])}return h}function nh(i,s){if(i==null)return{};var u={};for(var d in i)if({}.hasOwnProperty.call(i,d)){if(s.indexOf(d)!==-1)continue;u[d]=i[d]}return u}function mi(){return mi=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var d in u)({}).hasOwnProperty.call(u,d)&&(i[d]=u[d])}return i},mi.apply(null,arguments)}function Yc(i,s){var u=Object.keys(i);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(i);s&&(d=d.filter(function(h){return Object.getOwnPropertyDescriptor(i,h).enumerable})),u.push.apply(u,d)}return u}function vi(i){for(var s=1;s<arguments.length;s++){var u=arguments[s]!=null?arguments[s]:{};s%2?Yc(Object(u),!0).forEach(function(d){rh(i,d,u[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(u)):Yc(Object(u)).forEach(function(d){Object.defineProperty(i,d,Object.getOwnPropertyDescriptor(u,d))})}return i}function rh(i,s,u){return(s=oh(s))in i?Object.defineProperty(i,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[s]=u,i}function oh(i){var s=ih(i,"string");return typeof s=="symbol"?s:s+""}function ih(i,s){if(typeof i!="object"||!i)return i;var u=i[Symbol.toPrimitive];if(u!==void 0){var d=u.call(i,s);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(i)}function gd(i){return i&&i.map((s,u)=>dt.createElement(s.tag,vi({key:u},s.attr),gd(s.child)))}function _e(i){return s=>dt.createElement(lh,mi({attr:vi({},i.attr)},s),gd(i.child))}function lh(i){var s=u=>{var d=i.attr,h=i.size,w=i.title,N=th(i,eh),E=h||u.size||"1em",k;return u.className&&(k=u.className),i.className&&(k=(k?k+" ":"")+i.className),dt.createElement("svg",mi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},u.attr,d,N,{className:k,style:vi(vi({color:i.color||u.color},u.style),i.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),w&&dt.createElement("title",null,w),i.children)};return Kc!==void 0?dt.createElement(Kc.Consumer,null,u=>s(u)):s(hd)}function ah(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(i)}function wi(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(i)}function Xc(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"3 6 5 6 21 6"},child:[]},{tag:"path",attr:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",y1:"11",x2:"10",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",y1:"11",x2:"14",y2:"17"},child:[]}]})(i)}function Zc(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(i)}function sh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function Jc(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(i)}function uh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"},child:[]}]})(i)}function ch(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}function qc(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(i)}function dh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(i)}function fh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function ph(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function md(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function hh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(i)}function gh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"},child:[]}]})(i)}function mh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function vh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function yh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"},child:[]},{tag:"line",attr:{x1:"12",y1:"22",x2:"12",y2:"15.5"},child:[]},{tag:"polyline",attr:{points:"22 8.5 12 15.5 2 8.5"},child:[]},{tag:"polyline",attr:{points:"2 15.5 12 8.5 22 15.5"},child:[]},{tag:"line",attr:{x1:"12",y1:"2",x2:"12",y2:"8.5"},child:[]}]})(i)}function vd(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(i)}function xh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function wh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"},child:[]}]})(i)}function kh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function Sh(i){return _e({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}var Ee="-ms-",Kr="-moz-",me="-webkit-",yd="comm",ki="rule",Ba="decl",Ch="@import",Eh="@namespace",xd="@keyframes",jh="@layer",wd=Math.abs,Ua=String.fromCharCode,Ra=Object.assign;function _h(i,s){return Ae(i,0)^45?(((s<<2^Ae(i,0))<<2^Ae(i,1))<<2^Ae(i,2))<<2^Ae(i,3):0}function kd(i){return i.trim()}function Ut(i,s){return(i=s.exec(i))?i[0]:i}function oe(i,s,u){return i.replace(s,u)}function di(i,s,u){return i.indexOf(s,u)}function Ae(i,s){return i.charCodeAt(s)|0}function Nn(i,s,u){return i.slice(s,u)}function _t(i){return i.length}function Sd(i){return i.length}function Qr(i,s){return s.push(i),i}function Nh(i,s){return i.map(s).join("")}function ed(i,s){return i.filter(function(u){return!Ut(u,s)})}var Si=1,tr=1,Cd=0,yt=0,De=0,or="";function Ci(i,s,u,d,h,w,N,E){return{value:i,root:s,parent:u,type:d,props:h,children:w,line:Si,column:tr,length:N,return:"",siblings:E}}function un(i,s){return Ra(Ci("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},s)}function qn(i){for(;i.root;)i=un(i.root,{children:[i]});Qr(i,i.siblings)}function Ph(){return De}function zh(){return De=yt>0?Ae(or,--yt):0,tr--,De===10&&(tr=1,Si--),De}function Nt(){return De=yt<Cd?Ae(or,yt++):0,tr++,De===10&&(tr=1,Si++),De}function cn(){return Ae(or,yt)}function fi(){return yt}function Ei(i,s){return Nn(or,i,s)}function Xr(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Lh(i){return Si=tr=1,Cd=_t(or=i),yt=0,[]}function Th(i){return or="",i}function Na(i){return kd(Ei(yt-1,Ia(i===91?i+2:i===40?i+1:i)))}function Oh(i){for(;(De=cn())&&De<33;)Nt();return Xr(i)>2||Xr(De)>3?"":" "}function Rh(i,s){for(;--s&&Nt()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return Ei(i,fi()+(s<6&&cn()==32&&Nt()==32))}function Ia(i){for(;Nt();)switch(De){case i:return yt;case 34:case 39:i!==34&&i!==39&&Ia(De);break;case 40:i===41&&Ia(i);break;case 92:Nt();break}return yt}function Ih(i,s){for(;Nt()&&i+De!==57;)if(i+De===84&&cn()===47)break;return"/*"+Ei(s,yt-1)+"*"+Ua(i===47?i:Nt())}function bh(i){for(;!Xr(cn());)Nt();return Ei(i,yt)}function Dh(i){return Th(pi("",null,null,null,[""],i=Lh(i),0,[0],i))}function pi(i,s,u,d,h,w,N,E,k){for(var O=0,I=0,M=N,W=0,re=0,G=0,Q=1,H=1,le=1,B=0,ve="",ge=h,ie=w,se=d,V=ve;H;)switch(G=B,B=Nt()){case 40:if(G!=108&&Ae(V,M-1)==58){di(V+=oe(Na(B),"&","&\f"),"&\f",wd(O?E[O-1]:0))!=-1&&(le=-1);break}case 34:case 39:case 91:V+=Na(B);break;case 9:case 10:case 13:case 32:V+=Oh(G);break;case 92:V+=Rh(fi()-1,7);continue;case 47:switch(cn()){case 42:case 47:Qr(Mh(Ih(Nt(),fi()),s,u,k),k),(Xr(G||1)==5||Xr(cn()||1)==5)&&_t(V)&&Nn(V,-1,void 0)!==" "&&(V+=" ");break;default:V+="/"}break;case 123*Q:E[O++]=_t(V)*le;case 125*Q:case 59:case 0:switch(B){case 0:case 125:H=0;case 59+I:le==-1&&(V=oe(V,/\f/g,"")),re>0&&(_t(V)-M||Q===0&&G===47)&&Qr(re>32?nd(V+";",d,u,M-1,k):nd(oe(V," ","")+";",d,u,M-2,k),k);break;case 59:V+=";";default:if(Qr(se=td(V,s,u,O,I,h,E,ve,ge=[],ie=[],M,w),w),B===123)if(I===0)pi(V,s,se,se,ge,w,M,E,ie);else{switch(W){case 99:if(Ae(V,3)===110)break;case 108:if(Ae(V,2)===97)break;default:I=0;case 100:case 109:case 115:}I?pi(i,se,se,d&&Qr(td(i,se,se,0,0,h,E,ve,h,ge=[],M,ie),ie),h,ie,M,E,d?ge:ie):pi(V,se,se,se,[""],ie,0,E,ie)}}O=I=re=0,Q=le=1,ve=V="",M=N;break;case 58:M=1+_t(V),re=G;default:if(Q<1){if(B==123)--Q;else if(B==125&&Q++==0&&zh()==125)continue}switch(V+=Ua(B),B*Q){case 38:le=I>0?1:(V+="\f",-1);break;case 44:E[O++]=(_t(V)-1)*le,le=1;break;case 64:cn()===45&&(V+=Na(Nt())),W=cn(),I=M=_t(ve=V+=bh(fi())),B++;break;case 45:G===45&&_t(V)==2&&(Q=0)}}return w}function td(i,s,u,d,h,w,N,E,k,O,I,M){for(var W=h-1,re=h===0?w:[""],G=Sd(re),Q=0,H=0,le=0;Q<d;++Q)for(var B=0,ve=Nn(i,W+1,W=wd(H=N[Q])),ge=i;B<G;++B)(ge=kd(H>0?re[B]+" "+ve:oe(ve,/&\f/g,re[B])))&&(k[le++]=ge);return Ci(i,s,u,h===0?ki:E,k,O,I,M)}function Mh(i,s,u,d){return Ci(i,s,u,yd,Ua(Ph()),Nn(i,2,-2),0,d)}function nd(i,s,u,d,h){return Ci(i,s,u,Ba,Nn(i,0,d),Nn(i,d+1,-1),d,h)}function Ed(i,s,u){switch(_h(i,s)){case 5103:return me+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return me+i+i;case 4855:return me+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return Kr+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return me+i+Kr+i+Ee+i+i;case 5936:switch(Ae(i,s+11)){case 114:return me+i+Ee+oe(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return me+i+Ee+oe(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return me+i+Ee+oe(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return me+i+Ee+i+i;case 6165:return me+i+Ee+"flex-"+i+i;case 5187:return me+i+oe(i,/(\w+).+(:[^]+)/,me+"box-$1$2"+Ee+"flex-$1$2")+i;case 5443:return me+i+Ee+"flex-item-"+oe(i,/flex-|-self/g,"")+(Ut(i,/flex-|baseline/)?"":Ee+"grid-row-"+oe(i,/flex-|-self/g,""))+i;case 4675:return me+i+Ee+"flex-line-pack"+oe(i,/align-content|flex-|-self/g,"")+i;case 5548:return me+i+Ee+oe(i,"shrink","negative")+i;case 5292:return me+i+Ee+oe(i,"basis","preferred-size")+i;case 6060:return me+"box-"+oe(i,"-grow","")+me+i+Ee+oe(i,"grow","positive")+i;case 4554:return me+oe(i,/([^-])(transform)/g,"$1"+me+"$2")+i;case 6187:return oe(oe(oe(i,/(zoom-|grab)/,me+"$1"),/(image-set)/,me+"$1"),i,"")+i;case 5495:case 3959:return oe(i,/(image-set\([^]*)/,me+"$1$`$1");case 4968:return oe(oe(i,/(.+:)(flex-)?(.*)/,me+"box-pack:$3"+Ee+"flex-pack:$3"),/space-between/,"justify")+me+i+i;case 4200:if(!Ut(i,/flex-|baseline/))return Ee+"grid-column-align"+Nn(i,s)+i;break;case 2592:case 3360:return Ee+oe(i,"template-","")+i;case 4384:case 3616:return u&&u.some(function(d,h){return s=h,Ut(d.props,/grid-\w+-end/)})?~di(i+(u=u[s].value),"span",0)?i:Ee+oe(i,"-start","")+i+Ee+"grid-row-span:"+(~di(u,"span",0)?Ut(u,/\d+/):+Ut(u,/\d+/)-+Ut(i,/\d+/))+";":Ee+oe(i,"-start","")+i;case 4896:case 4128:return u&&u.some(function(d){return Ut(d.props,/grid-\w+-start/)})?i:Ee+oe(oe(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return oe(i,/(.+)-inline(.+)/,me+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(i)-1-s>6)switch(Ae(i,s+1)){case 109:if(Ae(i,s+4)!==45)break;case 102:return oe(i,/(.+:)(.+)-([^]+)/,"$1"+me+"$2-$3$1"+Kr+(Ae(i,s+3)==108?"$3":"$2-$3"))+i;case 115:return~di(i,"stretch",0)?Ed(oe(i,"stretch","fill-available"),s,u)+i:i}break;case 5152:case 5920:return oe(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(d,h,w,N,E,k,O){return Ee+h+":"+w+O+(N?Ee+h+"-span:"+(E?k:+k-+w)+O:"")+i});case 4949:if(Ae(i,s+6)===121)return oe(i,":",":"+me)+i;break;case 6444:switch(Ae(i,Ae(i,14)===45?18:11)){case 120:return oe(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+me+(Ae(i,14)===45?"inline-":"")+"box$3$1"+me+"$2$3$1"+Ee+"$2box$3")+i;case 100:return oe(i,":",":"+Ee)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return oe(i,"scroll-","scroll-snap-")+i}return i}function yi(i,s){for(var u="",d=0;d<i.length;d++)u+=s(i[d],d,i,s)||"";return u}function Fh(i,s,u,d){switch(i.type){case jh:if(i.children.length)break;case Ch:case Eh:case Ba:return i.return=i.return||i.value;case yd:return"";case xd:return i.return=i.value+"{"+yi(i.children,d)+"}";case ki:if(!_t(i.value=i.props.join(",")))return""}return _t(u=yi(i.children,d))?i.return=i.value+"{"+u+"}":""}function Ah(i){var s=Sd(i);return function(u,d,h,w){for(var N="",E=0;E<s;E++)N+=i[E](u,d,h,w)||"";return N}}function $h(i){return function(s){s.root||(s=s.return)&&i(s)}}function Bh(i,s,u,d){if(i.length>-1&&!i.return)switch(i.type){case Ba:i.return=Ed(i.value,i.length,u);return;case xd:return yi([un(i,{value:oe(i.value,"@","@"+me)})],d);case ki:if(i.length)return Nh(u=i.props,function(h){switch(Ut(h,d=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qn(un(i,{props:[oe(h,/:(read-\w+)/,":"+Kr+"$1")]})),qn(un(i,{props:[h]})),Ra(i,{props:ed(u,d)});break;case"::placeholder":qn(un(i,{props:[oe(h,/:(plac\w+)/,":"+me+"input-$1")]})),qn(un(i,{props:[oe(h,/:(plac\w+)/,":"+Kr+"$1")]})),qn(un(i,{props:[oe(h,/:(plac\w+)/,Ee+"input-$1")]})),qn(un(i,{props:[h]})),Ra(i,{props:ed(u,d)});break}return""})}}var er={},Pa,za;const nr=typeof process<"u"&&er!==void 0&&(er.REACT_APP_SC_ATTR||er.SC_ATTR)||"data-styled",jd="active",_d="data-styled-version",ji="6.5.3",Wa=`/*!sc*/
`,Yr=typeof window<"u"&&typeof document<"u";function rd(i){if(typeof process<"u"&&er!==void 0){const s=er[i];if(s!==void 0&&s!=="")return s!=="false"}}const Uh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(za=(Pa=rd("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Pa!==void 0?Pa:rd("SC_DISABLE_SPEEDY"))!==null&&za!==void 0?za:typeof process<"u"&&er!==void 0&&!1),Wh="sc-keyframes-";function _i(i,...s){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${i} for more information.${s.length>0?` Args: ${s.join(", ")}`:""}`)}let hi=new Map,xi=new Map,gi=1;const ci=i=>{if(hi.has(i))return hi.get(i);for(;xi.has(gi);)gi++;const s=gi++;return hi.set(i,s),xi.set(s,i),s},Vh=i=>xi.get(i),Hh=(i,s)=>{gi=s+1,hi.set(i,s),xi.set(s,i)},Va=Object.freeze([]),rr=Object.freeze({});function Qh(i,s,u=rr){return i.theme!==u.theme&&i.theme||s||u.theme}const Gh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Kh=/(^-|-$)/g;function Nd(i){return i.replace(Gh,"-").replace(Kh,"")}const Yh=/(a)(d)/gi,od=i=>String.fromCharCode(i+(i>25?39:97));function Pd(i){let s,u="";for(s=Math.abs(i);s>52;s=s/52|0)u=od(s%52)+u;return(od(s%52)+u).replace(Yh,"$1-$2")}const ba=5381,jn=(i,s)=>{let u=s.length;for(;u;)i=33*i^s.charCodeAt(--u);return i},zd=i=>jn(ba,i);function Xh(i){return Pd(zd(i)>>>0)}function Zh(i){return i.displayName||i.name||"Component"}function Da(i){return typeof i=="string"&&!0}function Jh(i){return Da(i)?`styled.${i}`:`Styled(${Zh(i)})`}const Ld=Symbol.for("react.memo"),qh=Symbol.for("react.forward_ref"),e0={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},t0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Td={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},n0={[qh]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ld]:Td};function id(i){return("type"in(s=i)&&s.type.$$typeof)===Ld?Td:"$$typeof"in i?n0[i.$$typeof]:e0;var s}const r0=Object.defineProperty,o0=Object.getOwnPropertyNames,i0=Object.getOwnPropertySymbols,l0=Object.getOwnPropertyDescriptor,a0=Object.getPrototypeOf,s0=Object.prototype;function Od(i,s,u){if(typeof s!="string"){const d=a0(s);d&&d!==s0&&Od(i,d,u);const h=o0(s).concat(i0(s)),w=id(i),N=id(s);for(let E=0;E<h.length;++E){const k=h[E];if(!(k in t0||u&&u[k]||N&&k in N||w&&k in w)){const O=l0(s,k);try{r0(i,k,O)}catch{}}}}return i}function Ni(i){return typeof i=="function"}const u0=Symbol.for("react.forward_ref");function Rd(i){return i!=null&&(typeof i=="object"||typeof i=="function")&&i.$$typeof===u0&&"styledComponentId"in i}function Gr(i,s){return i&&s?i+" "+s:i||s||""}function ld(i,s){return i.join("")}function Zr(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Ma(i,s,u=!1){if(!u&&!Zr(i)&&!Array.isArray(i))return s;if(Array.isArray(s))for(let d=0;d<s.length;d++)i[d]=Ma(i[d],s[d]);else if(Zr(s))for(const d in s)i[d]=Ma(i[d],s[d]);return i}function Id(i,s){Object.defineProperty(i,"toString",{value:s})}const c0=class{constructor(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i,this._cGroup=0,this._cIndex=0}indexOfGroup(i){if(i===this._cGroup)return this._cIndex;let s=this._cIndex;if(i>this._cGroup)for(let u=this._cGroup;u<i;u++)s+=this.groupSizes[u];else for(let u=this._cGroup-1;u>=i;u--)s-=this.groupSizes[u];return this._cGroup=i,this._cIndex=s,s}insertRules(i,s){if(i>=this.groupSizes.length){const h=this.groupSizes,w=h.length;let N=w;for(;i>=N;)if(N<<=1,N<0)throw _i(16,`${i}`);this.groupSizes=new Uint32Array(N),this.groupSizes.set(h),this.length=N;for(let E=w;E<N;E++)this.groupSizes[E]=0}let u=this.indexOfGroup(i+1),d=0;for(let h=0,w=s.length;h<w;h++)this.tag.insertRule(u,s[h])&&(this.groupSizes[i]++,u++,d++);d>0&&this._cGroup>i&&(this._cIndex+=d)}clearGroup(i){if(i<this.length){const s=this.groupSizes[i],u=this.indexOfGroup(i),d=u+s;this.groupSizes[i]=0;for(let h=u;h<d;h++)this.tag.deleteRule(u);s>0&&this._cGroup>i&&(this._cIndex-=s)}}getGroup(i){let s="";if(i>=this.length||this.groupSizes[i]===0)return s;const u=this.groupSizes[i],d=this.indexOfGroup(i),h=d+u;for(let w=d;w<h;w++)s+=this.tag.getRule(w)+Wa;return s}},d0=`style[${nr}][${_d}="${ji}"]`,f0=new RegExp(`^${nr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ad=i=>typeof ShadowRoot<"u"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11,Fa=i=>{if(!i)return document;if(ad(i))return i;if("getRootNode"in i){const s=i.getRootNode();if(ad(s))return s}return document},p0=(i,s,u)=>{const d=u.split(",");let h;for(let w=0,N=d.length;w<N;w++)(h=d[w])&&i.registerName(s,h)},h0=(i,s)=>{var u;const d=((u=s.textContent)!==null&&u!==void 0?u:"").split(Wa),h=[];for(let w=0,N=d.length;w<N;w++){const E=d[w].trim();if(!E)continue;const k=E.match(f0);if(k){const O=0|parseInt(k[1],10),I=k[2];O!==0&&(Hh(I,O),p0(i,I,k[3]),i.getTag().insertRules(O,h)),h.length=0}else h.push(E)}},La=i=>{const s=Fa(i.options.target).querySelectorAll(d0);for(let u=0,d=s.length;u<d;u++){const h=s[u];h&&h.getAttribute(nr)!==jd&&(h0(i,h),h.parentNode&&h.parentNode.removeChild(h))}};let Hr=!1;function g0(){if(Hr!==!1)return Hr;if(typeof document<"u"){const i=document.head.querySelector('meta[property="csp-nonce"]');if(i)return Hr=i.nonce||i.getAttribute("content")||void 0;const s=document.head.querySelector('meta[name="sc-nonce"]');if(s)return Hr=s.getAttribute("content")||void 0}return Hr=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const bd=(i,s)=>{const u=document.head,d=i||u,h=document.createElement("style"),w=(k=>{const O=Array.from(k.querySelectorAll(`style[${nr}]`));return O[O.length-1]})(d),N=w!==void 0?w.nextSibling:null;h.setAttribute(nr,jd),h.setAttribute(_d,ji);const E=s||g0();return E&&h.setAttribute("nonce",E),d.insertBefore(h,N),h},m0=class{constructor(i,s){this.element=bd(i,s),this.element.appendChild(document.createTextNode("")),this.sheet=(u=>{var d;if(u.sheet)return u.sheet;const h=(d=u.getRootNode().styleSheets)!==null&&d!==void 0?d:document.styleSheets;for(let w=0,N=h.length;w<N;w++){const E=h[w];if(E.ownerNode===u)return E}throw _i(17)})(this.element),this.length=0}insertRule(i,s){try{return this.sheet.insertRule(s,i),this.length++,!0}catch{return!1}}deleteRule(i){this.sheet.deleteRule(i),this.length--}getRule(i){const s=this.sheet.cssRules[i];return s&&s.cssText?s.cssText:""}},v0=class{constructor(i,s){this.element=bd(i,s),this.nodes=this.element.childNodes,this.length=0}insertRule(i,s){if(i<=this.length&&i>=0){const u=document.createTextNode(s);return this.element.insertBefore(u,this.nodes[i]||null),this.length++,!0}return!1}deleteRule(i){this.element.removeChild(this.nodes[i]),this.length--}getRule(i){return i<this.length?this.nodes[i].textContent:""}};let sd=Yr;const y0={isServer:!Yr,useCSSOMInjection:!Uh};class Pi{static registerId(s){return ci(s)}constructor(s=rr,u={},d){this.options=Object.assign(Object.assign({},y0),s),this.gs=u,this.keyframeIds=new Set,this.names=new Map(d),this.server=!!s.isServer,!this.server&&Yr&&sd&&(sd=!1,La(this)),Id(this,()=>(h=>{const w=h.getTag(),{length:N}=w;let E="";for(let k=0;k<N;k++){const O=Vh(k);if(O===void 0)continue;const I=h.names.get(O);if(I===void 0||!I.size)continue;const M=w.getGroup(k);if(M.length===0)continue;const W=nr+".g"+k+'[id="'+O+'"]';let re="";for(const G of I)G.length>0&&(re+=G+",");E+=M+W+'{content:"'+re+'"}'+Wa}return E})(this))}rehydrate(){!this.server&&Yr&&La(this)}reconstructWithOptions(s,u=!0){const d=new Pi(Object.assign(Object.assign({},this.options),s),this.gs,u&&this.names||void 0);return d.keyframeIds=new Set(this.keyframeIds),!this.server&&Yr&&s.target!==this.options.target&&Fa(this.options.target)!==Fa(s.target)&&La(d),d}allocateGSInstance(s){return this.gs[s]=(this.gs[s]||0)+1}getTag(){return this.tag||(this.tag=(s=(({useCSSOMInjection:u,target:d,nonce:h})=>u?new m0(d,h):new v0(d,h))(this.options),new c0(s)));var s}hasNameForId(s,u){var d,h;return(h=(d=this.names.get(s))===null||d===void 0?void 0:d.has(u))!==null&&h!==void 0&&h}registerName(s,u){ci(s),s.startsWith(Wh)&&this.keyframeIds.add(s);const d=this.names.get(s);d?d.add(u):this.names.set(s,new Set([u]))}insertRules(s,u,d){this.registerName(s,u),this.getTag().insertRules(ci(s),d)}clearNames(s){this.names.has(s)&&this.names.get(s).clear()}clearRules(s){this.getTag().clearGroup(ci(s)),this.clearNames(s)}clearTag(){this.tag=void 0}}const Dd=new WeakSet,x0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function w0(i,s){return s==null||typeof s=="boolean"||s===""?"":typeof s!="number"||s===0||i in x0||i.startsWith("--")?String(s).trim():s+"px"}const En=47;function ud(i){if(i.charCodeAt(0)===45&&i.charCodeAt(1)===45)return i;let s="";for(let u=0;u<i.length;u++){const d=i.charCodeAt(u);s+=d>=65&&d<=90?"-"+String.fromCharCode(d+32):i[u]}return s.startsWith("ms-")?"-"+s:s}const k0=Symbol.for("sc-keyframes");function S0(i){return typeof i=="object"&&i!==null&&k0 in i}function Md(i){return Ni(i)&&!(i.prototype&&i.prototype.isReactComponent)}const Fd=i=>i==null||i===!1||i==="",C0=Symbol.for("react.client.reference");function cd(i){return i.$$typeof===C0}function Ad(i,s){for(const u in i){const d=i[u];i.hasOwnProperty(u)&&!Fd(d)&&(Array.isArray(d)&&Dd.has(d)||Ni(d)?s.push(ud(u)+":",d,";"):Zr(d)?(s.push(u+" {"),Ad(d,s),s.push("}")):s.push(ud(u)+": "+w0(u,d)+";"))}}function _n(i,s,u,d,h=[]){if(Fd(i))return h;const w=typeof i;if(w==="string")return h.push(i),h;if(w==="function"){if(cd(i))return h;if(Md(i)&&s){const N=i(s);return _n(N,s,u,d,h)}return h.push(i),h}if(Array.isArray(i)){for(let N=0;N<i.length;N++)_n(i[N],s,u,d,h);return h}return Rd(i)?(h.push(`.${i.styledComponentId}`),h):S0(i)?(u?(i.inject(u,d),h.push(i.getName(d))):h.push(i),h):cd(i)?h:Zr(i)?i.toString!==Object.prototype.toString?(h.push(i.toString()),h):(Ad(i,h),h):(h.push(i.toString()),h)}const E0=zd(ji);class j0{constructor(s,u,d){this.rules=s,this.componentId=u,this.baseHash=jn(E0,u),this.baseStyle=d,Pi.registerId(u)}generateAndInjectStyles(s,u,d){let h=this.baseStyle?this.baseStyle.generateAndInjectStyles(s,u,d):"";{let w="";for(let N=0;N<this.rules.length;N++){const E=this.rules[N];if(typeof E=="string")w+=E;else if(E)if(Md(E)){const k=E(s);typeof k=="string"?w+=k:k!=null&&k!==!1&&(w+=ld(_n(k,s,u,d)))}else w+=ld(_n(E,s,u,d))}if(w){this.dynamicNameCache||(this.dynamicNameCache=new Map);const N=d.hash?d.hash+w:w;let E=this.dynamicNameCache.get(N);if(!E){if(E=Pd(jn(jn(this.baseHash,d.hash),w)>>>0),this.dynamicNameCache.size>=200){const k=this.dynamicNameCache.keys().next().value;k!==void 0&&this.dynamicNameCache.delete(k)}this.dynamicNameCache.set(N,E)}if(!u.hasNameForId(this.componentId,E)){const k=d(w,"."+E,void 0,this.componentId);u.insertRules(this.componentId,E,k)}h=Gr(h,E)}}return h}}const _0=/&/g;function $d(i,s){let u=0;for(;--s>=0&&i.charCodeAt(s)===92;)u++;return!(1&~u)}function Ta(i){const s=i.length;let u="",d=0,h=0,w=0,N=!1,E=!1;for(let k=0;k<s;k++){const O=i.charCodeAt(k);if(w!==0||N||O!==En||i.charCodeAt(k+1)!==42)if(N)O===42&&i.charCodeAt(k+1)===En&&(N=!1,k++);else if(O!==34&&O!==39||$d(i,k)){if(w===0)if(O===123)h++;else if(O===125){if(h--,h<0){E=!0;let I=k+1;for(;I<s;){const M=i.charCodeAt(I);if(M===59||M===10)break;I++}I<s&&i.charCodeAt(I)===59&&I++,h=0,k=I-1,d=I;continue}h===0&&(u+=i.substring(d,k+1),d=k+1)}else O===59&&h===0&&(u+=i.substring(d,k+1),d=k+1)}else w===0?w=O:w===O&&(w=0);else N=!0,k++}return E||h!==0||w!==0?(d<s&&h===0&&w===0&&(u+=i.substring(d)),u):i}function Bd(i,s){const u=s+" ",d=","+u;for(let h=0;h<i.length;h++){const w=i[h];if(w.type==="rule"){w.value=(u+w.value).replaceAll(",",d);const N=w.props,E=[];for(let k=0;k<N.length;k++)E[k]=u+N[k];w.props=E}Array.isArray(w.children)&&w.type!=="@keyframes"&&Bd(w.children,s)}return i}function N0({options:i=rr,plugins:s=Va}=rr){let u,d,h;const w=(W,re,G)=>G.startsWith(d)&&G.endsWith(d)&&G.replaceAll(d,"").length>0?`.${u}`:W,N=s.slice();N.push(W=>{W.type===ki&&W.value.includes("&")&&(h||(h=new RegExp(`\\${d}\\b`,"g")),W.props[0]=W.props[0].replace(_0,d).replace(h,w))}),i.prefix&&N.push(Bh),N.push(Fh);let E=[];const k=Ah(N.concat($h(W=>E.push(W)))),O=(W,re="",G="",Q="&")=>{u=Q,d=re,h=void 0;const H=function(B){const ve=B.indexOf("//")!==-1,ge=B.indexOf("}")!==-1;if(!ve&&!ge)return B;if(!ve)return Ta(B);const ie=B.length;let se="",V=0,ne=0,$e=0,Be=0,ze=0,Ue=!1;for(;ne<ie;){const pe=B.charCodeAt(ne);if(pe!==34&&pe!==39||$d(B,ne))if($e===0)if(pe===En&&ne+1<ie&&B.charCodeAt(ne+1)===42){for(ne+=2;ne+1<ie&&(B.charCodeAt(ne)!==42||B.charCodeAt(ne+1)!==En);)ne++;ne+=2}else if(pe!==40)if(pe!==41)if(Be>0)ne++;else if(pe===42&&ne+1<ie&&B.charCodeAt(ne+1)===En)se+=B.substring(V,ne),ne+=2,V=ne,Ue=!0;else if(pe===En&&ne+1<ie&&B.charCodeAt(ne+1)===En){for(se+=B.substring(V,ne);ne<ie&&B.charCodeAt(ne)!==10;)ne++;V=ne,Ue=!0}else pe===123?ze++:pe===125&&ze--,ne++;else Be>0&&Be--,ne++;else Be++,ne++;else ne++;else $e===0?$e=pe:$e===pe&&($e=0),ne++}return Ue?(V<ie&&(se+=B.substring(V)),ze===0?se:Ta(se)):ze===0?B:Ta(B)}(W);let le=Dh(G||re?G+" "+re+" { "+H+" }":H);return i.namespace&&(le=Bd(le,i.namespace)),E=[],yi(le,k),E},I=i;let M=ba;for(let W=0;W<s.length;W++)s[W].name||_i(15),M=jn(M,s[W].name);return I!=null&&I.namespace&&(M=jn(M,I.namespace)),I!=null&&I.prefix&&(M=jn(M,"p")),O.hash=M!==ba?M.toString():"",O}const P0=new Pi,z0=N0(),Ud=dt.createContext({shouldForwardProp:void 0,styleSheet:P0,stylis:z0,stylisPlugins:void 0});Ud.Consumer;function L0(){return dt.useContext(Ud)}const Wd=dt.createContext(void 0);Wd.Consumer;const dd=Object.prototype.hasOwnProperty,Oa={};function T0(i,s){const u=typeof i!="string"?"sc":Nd(i);Oa[u]=(Oa[u]||0)+1;const d=u+"-"+Xh(ji+u+Oa[u]);return s?s+"-"+d:d}function O0(i,s,u){const d=Rd(i),h=i,w=!Da(i),{attrs:N=Va,componentId:E=T0(s.displayName,s.parentComponentId),displayName:k=Jh(i)}=s,O=s.displayName&&s.componentId?Nd(s.displayName)+"-"+s.componentId:s.componentId||E,I=d&&h.attrs?h.attrs.concat(N).filter(Boolean):N;let{shouldForwardProp:M}=s;if(d&&h.shouldForwardProp){const Q=h.shouldForwardProp;if(s.shouldForwardProp){const H=s.shouldForwardProp;M=(le,B)=>Q(le,B)&&H(le,B)}else M=Q}const W=new j0(u,O,d?h.componentStyle:void 0);function re(Q,H){return function(le,B,ve){const{attrs:ge,componentStyle:ie,defaultProps:se,foldedComponentIds:V,styledComponentId:ne,target:$e}=le,Be=dt.useContext(Wd),ze=L0(),Ue=le.shouldForwardProp||ze.shouldForwardProp,pe=Qh(B,Be,se)||rr;let Le,We;{const D=dt.useRef(null),T=D.current;if(T!==null&&T[1]===pe&&T[2]===ze.styleSheet&&T[3]===ze.stylis&&T[7]===ie&&function(g,S,K){const J=g,ee=S;let ue=0;for(const ce in ee)if(dd.call(ee,ce)&&(ue++,J[ce]!==ee[ce]))return!1;return ue===K}(T[0],B,T[4]))Le=T[5],We=T[6];else{Le=function(S,K,J){const ee=Object.assign(Object.assign({},K),{className:void 0,theme:J}),ue=S.length>1;for(let ce=0;ce<S.length;ce++){const de=S[ce],ye=Ni(de)?de(ue?Object.assign({},ee):ee):de;for(const Te in ye)Te==="className"?ee.className=Gr(ee.className,ye[Te]):Te==="style"?ee.style=Object.assign(Object.assign({},ee.style),ye[Te]):Te in K&&K[Te]===void 0||(ee[Te]=ye[Te])}return"className"in K&&typeof K.className=="string"&&(ee.className=Gr(ee.className,K.className)),ee}(ge,B,pe),We=ie.generateAndInjectStyles(Le,ze.styleSheet,ze.stylis);let g=0;for(const S in B)dd.call(B,S)&&g++;D.current=[B,pe,ze.styleSheet,ze.stylis,g,Le,We,ie]}}const P=Le.as||$e,A=function(D,T,g,S){const K={};for(const J in D)D[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&D.theme===g||(J==="forwardedAs"?K.as=D.forwardedAs:S&&!S(J,T)||(K[J]=D[J]));return K}(Le,P,pe,Ue);let C=Gr(V,ne);return We&&(C+=" "+We),Le.className&&(C+=" "+Le.className),A[Da(P)&&P.includes("-")?"class":"className"]=C,ve&&(A.ref=ve),we.createElement(P,A)}(G,Q,H)}re.displayName=k;let G=dt.forwardRef(re);return G.attrs=I,G.componentStyle=W,G.displayName=k,G.shouldForwardProp=M,G.foldedComponentIds=d?Gr(h.foldedComponentIds,h.styledComponentId):"",G.styledComponentId=O,G.target=d?h.target:i,Object.defineProperty(G,"defaultProps",{get(){return this._foldedDefaultProps},set(Q){this._foldedDefaultProps=d?function(H,...le){for(const B of le)Ma(H,B,!0);return H}({},h.defaultProps,Q):Q}}),Id(G,()=>`.${G.styledComponentId}`),w&&Od(G,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}var R0=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function fd(i,s){const u=[i[0]];for(let d=0,h=s.length;d<h;d+=1)u.push(s[d],i[d+1]);return u}const pd=i=>(Dd.add(i),i);function Vd(i,...s){if(Ni(i)||Zr(i))return pd(_n(fd(Va,[i,...s])));const u=i;return s.length===0&&u.length===1&&typeof u[0]=="string"?_n(u):pd(_n(fd(u,s)))}function Aa(i,s,u=rr){if(!s)throw _i(1,s);const d=(h,...w)=>i(s,u,Vd(h,...w));return d.attrs=h=>Aa(i,s,Object.assign(Object.assign({},u),{attrs:Array.prototype.concat(u.attrs,h).filter(Boolean)})),d.withConfig=h=>Aa(i,s,Object.assign(Object.assign({},u),h)),d}const Hd=i=>Aa(O0,i),Z=Hd;R0.forEach(i=>{Z[i]=Hd(i)});const I0={Wrapper:Z.button`
        position: fixed;
        right: 22px;
        bottom: 22px;

        z-index: 1200;

        display: grid;
        place-items: center;

        width: 44px;
        height: 44px;

        padding: 0;

        color: var(--heading);
        background: var(--card);

        border: 1px solid var(--border-strong);

        border-radius: 10px;

        box-shadow: var(--shadow-md);

        opacity: ${({$visible:i})=>i?1:0};

        visibility: ${({$visible:i})=>i?"visible":"hidden"};

        pointer-events: ${({$visible:i})=>i?"auto":"none"};

        cursor: pointer;

        transition:
            opacity 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-lg);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 600px) {
            right: 14px;
            bottom: 14px;

            width: 42px;
            height: 42px;
        }
    `},b0=()=>{const[i,s]=we.useState(!1);we.useEffect(()=>{const d=()=>{s(window.scrollY>500)};return d(),window.addEventListener("scroll",d,{passive:!0}),()=>{window.removeEventListener("scroll",d)}},[]);const u=()=>{const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.scrollTo({top:0,behavior:d?"auto":"smooth"})};return v.jsx(I0.Wrapper,{type:"button",$visible:i,onClick:u,"aria-label":"Back to top",title:"Back to top",children:v.jsx(kh,{"aria-hidden":"true"})})};function D0(i){return _e({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"},child:[]}]})(i)}const M0={Wrapper:Z.footer`
        background: linear-gradient(180deg, #060606, #030303);

        border-top: 1px solid var(--border);

        box-shadow: 0 -12px 34px rgba(0, 0, 0, 0.18);

        transition: border-color var(--transition);

        &:hover {
            border-color: var(--border-strong);
        }

        .inner {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;

            width: min(1180px, calc(100% - 40px));

            margin: 0 auto;

            padding: 34px 0;
        }

        .info {
            max-width: 520px;
        }

        .info strong {
            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        .info:hover strong {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
        }

        .text {
            margin-top: 7px;

            color: var(--muted);

            font-size: 0.58rem;
            line-height: 1.7;

            transition: color var(--transition);
        }

        .info:hover .text {
            color: var(--text);
        }

        .copyright {
            margin-top: 10px;

            color: var(--muted);

            font-size: 0.56rem;
        }

        .copyright a {
            color: var(--text);

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                color var(--transition),
                border-color var(--transition),
                text-shadow var(--transition);
        }

        .copyright a:hover {
            color: var(--heading);

            border-color: var(--accent);

            text-shadow: 0 0 12px rgba(254, 69, 0, 0.14);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;

            max-width: 440px;
        }

        .links a {
            display: grid;
            place-items: center;

            width: 36px;
            height: 36px;

            color: var(--text);

            background: linear-gradient(180deg, #101010, #090909);

            border: 1px solid var(--border);

            border-radius: 8px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

            text-decoration: none;

            transition:
                color var(--transition),
                border-color var(--transition),
                box-shadow var(--transition);
        }

        .links a:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-sm),
                0 0 18px rgba(254, 69, 0, 0.05);
        }

        .copyright a:focus-visible,
        .links a:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 800px) {
            .inner {
                align-items: flex-start;
                flex-direction: column;

                width: calc(100% - 28px);
            }

            .links {
                justify-content: flex-start;

                max-width: 100%;
            }
        }

        @media (max-width: 375px) {
            .links a {
                width: 34px;
                height: 34px;
            }
        }
    `},F0=[{id:"portfolio",label:"Portfolio",href:"https://www.ashishranjan.net",icon:v.jsx(ph,{"aria-hidden":"true"})},{id:"github",label:"GitHub",href:"https://github.com/a2rp",icon:v.jsx(md,{"aria-hidden":"true"})},{id:"codepen",label:"CodePen",href:"https://codepen.io/ash1198",icon:v.jsx(yh,{"aria-hidden":"true"})},{id:"linkedin",label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:v.jsx(dh,{"aria-hidden":"true"})},{id:"facebook",label:"Facebook",href:"https://www.facebook.com/theash.ashish",icon:v.jsx(hh,{"aria-hidden":"true"})},{id:"youtube",label:"YouTube",href:"https://www.youtube.com/channel/UCLHIBQeFQIxmRveVAjLvlbQ",icon:v.jsx(ah,{"aria-hidden":"true"})},{id:"email",label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:v.jsx(ch,{"aria-hidden":"true"}),newTab:!1},{id:"support",label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:v.jsx(fh,{"aria-hidden":"true"})},{id:"coffee",label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:v.jsx(vh,{"aria-hidden":"true"})},{id:"patreon",label:"Patreon",href:"https://www.patreon.com/a2rp",icon:v.jsx(D0,{"aria-hidden":"true"})}],A0=()=>{const i=new Date().getFullYear();return v.jsx(M0.Wrapper,{children:v.jsxs("div",{className:"inner",children:[v.jsxs("div",{className:"info",children:[v.jsx("strong",{children:"To-Do List CRUD"}),v.jsx("p",{className:"text",children:"Local task management with categories, due dates, search, filtering and browser storage."}),v.jsxs("p",{className:"copyright",children:["Copyright © ",i," ",v.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),v.jsx("nav",{className:"links","aria-label":"External links",children:F0.map(s=>v.jsx("a",{href:s.href,target:s.newTab===!1?void 0:"_blank",rel:s.newTab===!1?void 0:"noopener noreferrer","aria-label":s.label,title:s.label,children:s.icon},s.id))})]})})},$0={Wrapper:Z.header`
        position: fixed;

        top: ${({$visible:i})=>i?"0":"-82px"};

        left: 0;

        z-index: 1000;

        width: 100%;

        background: linear-gradient(
            180deg,
            rgba(8, 8, 8, 0.97),
            rgba(5, 5, 5, 0.92)
        );

        border-bottom: 1px solid var(--border);

        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);

        backdrop-filter: blur(18px);

        transition:
            top var(--transition),
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--border-strong);

            box-shadow: 0 14px 36px rgba(0, 0, 0, 0.28);
        }

        .inner {
            display: grid;
            grid-template-columns:
                auto
                1fr
                auto;

            align-items: center;
            gap: 24px;

            width: min(1180px, calc(100% - 40px));

            min-height: 72px;

            margin: 0 auto;
        }

        .brand {
            display: inline-flex;
            align-items: center;
            gap: 10px;

            color: var(--heading);

            text-decoration: none;
        }

        .logo {
            width: 42px;
            height: 42px;

            flex-shrink: 0;

            object-fit: cover;

            border: 1px solid var(--border);

            border-radius: 10px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);

            transition:
                border-color var(--transition),
                box-shadow var(--transition);
        }

        .brand:hover .logo {
            border-color: var(--accent-border);

            box-shadow:
                var(--shadow-sm),
                0 0 22px rgba(254, 69, 0, 0.08);
        }

        .brandText {
            min-width: 0;
        }

        .brand strong {
            display: block;

            font-family: "Antonio", sans-serif;

            font-size: 1rem;
            font-weight: 600;
            line-height: 1.1;

            transition: text-shadow var(--transition);
        }

        .brand:hover strong {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.09);
        }

        .brand span {
            display: block;

            margin-top: 4px;

            color: var(--muted);

            font-size: 0.5rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;

            transition: color var(--transition);
        }

        .brand:hover span {
            color: var(--text);
        }

        .desktopNav {
            display: flex;
            justify-content: center;
            gap: 22px;
        }

        .desktopNav a {
            position: relative;

            color: var(--text);

            font-size: 0.62rem;
            font-weight: 700;

            text-decoration: none;

            border-bottom: 1px solid transparent;

            transition:
                color var(--transition),
                border-color var(--transition),
                text-shadow var(--transition);
        }

        .desktopNav a:hover {
            color: var(--heading);

            border-color: var(--accent);

            text-shadow: 0 0 14px rgba(254, 69, 0, 0.16);
        }

        .actions {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .iconButton,
        .menuButton {
            display: grid;
            place-items: center;

            width: 40px;
            height: 40px;

            padding: 0;

            color: var(--text);

            background: linear-gradient(180deg, #111111, #0b0b0b);

            border: 1px solid var(--border);

            border-radius: 9px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

            text-decoration: none;

            cursor: pointer;

            transition:
                color var(--transition),
                border-color var(--transition),
                box-shadow var(--transition);
        }

        .iconButton:hover,
        .menuButton:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.04),
                var(--shadow-sm),
                0 0 20px rgba(254, 69, 0, 0.05);
        }

        .menuButton {
            display: none;
        }

        .mobileNav {
            display: none;

            border-top: 1px solid var(--border);

            background: rgba(7, 7, 7, 0.98);

            box-shadow: 0 18px 38px rgba(0, 0, 0, 0.28);
        }

        .mobileNavInner {
            display: grid;

            width: calc(100% - 28px);

            margin: 0 auto;

            padding: 10px 0 14px;
        }

        .mobileNav a {
            display: flex;
            align-items: center;

            min-height: 46px;

            padding: 8px 10px;

            color: var(--text);

            border-bottom: 1px solid var(--border);

            font-size: 0.66rem;
            font-weight: 700;

            text-decoration: none;

            transition:
                color var(--transition),
                border-color var(--transition),
                text-shadow var(--transition);
        }

        .mobileNav a:last-child {
            border-bottom: 0;
        }

        .mobileNav a:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            text-shadow: 0 0 12px rgba(254, 69, 0, 0.12);
        }

        .brand:focus-visible,
        .desktopNav a:focus-visible,
        .mobileNav a:focus-visible,
        .iconButton:focus-visible,
        .menuButton:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }

        @media (max-width: 760px) {
            .inner {
                grid-template-columns:
                    1fr
                    auto;

                width: calc(100% - 28px);
            }

            .desktopNav {
                display: none;
            }

            .menuButton {
                display: grid;
            }

            .mobileNav {
                display: block;
            }
        }

        @media (max-width: 375px) {
            .brand span {
                display: none;
            }

            .logo {
                width: 38px;
                height: 38px;
            }

            .iconButton,
            .menuButton {
                width: 38px;
                height: 38px;
            }
        }
    `},B0=()=>{const i=we.useRef(0),[s,u]=we.useState(!0),[d,h]=we.useState(!1);we.useEffect(()=>{const N=()=>{const E=window.scrollY;E<=20||d?u(!0):u(E<i.current),i.current=E};return i.current=window.scrollY,window.addEventListener("scroll",N,{passive:!0}),()=>{window.removeEventListener("scroll",N)}},[d]),we.useEffect(()=>{const N=k=>{k.key==="Escape"&&h(!1)},E=()=>{window.innerWidth>760&&h(!1)};return document.addEventListener("keydown",N),window.addEventListener("resize",E),()=>{document.removeEventListener("keydown",N),window.removeEventListener("resize",E)}},[]);const w=()=>{h(!1)};return v.jsxs($0.Wrapper,{$visible:s||d,children:[v.jsxs("div",{className:"inner",children:[v.jsxs("a",{className:"brand",href:"#top",onClick:w,"aria-label":"To-Do List home",children:[v.jsx("img",{className:"logo",src:"/todo-list-crud/logo.png",alt:"","aria-hidden":"true"}),v.jsxs("div",{className:"brandText",children:[v.jsx("strong",{children:"To-Do List"}),v.jsx("span",{children:"Local Task Manager"})]})]}),v.jsxs("nav",{className:"desktopNav","aria-label":"Primary navigation",children:[v.jsx("a",{href:"#tasks",children:"Tasks"}),v.jsx("a",{href:"#add-task",children:"Add Task"})]}),v.jsxs("div",{className:"actions",children:[v.jsx("a",{className:"iconButton",href:"https://github.com/a2rp/todo-list-crud",target:"_blank",rel:"noopener noreferrer","aria-label":"View project on GitHub",title:"View on GitHub",children:v.jsx(md,{"aria-hidden":"true"})}),v.jsx("button",{className:"menuButton",type:"button",onClick:()=>{u(!0),h(N=>!N)},"aria-expanded":d,"aria-controls":"mobile-navigation","aria-label":d?"Close navigation menu":"Open navigation menu",title:d?"Close menu":"Open menu",children:d?v.jsx(wi,{"aria-hidden":"true"}):v.jsx(uh,{"aria-hidden":"true"})})]})]}),d&&v.jsx("nav",{id:"mobile-navigation",className:"mobileNav","aria-label":"Mobile navigation",children:v.jsxs("div",{className:"mobileNavInner",children:[v.jsx("a",{href:"#tasks",onClick:w,children:"Tasks"}),v.jsx("a",{href:"#add-task",onClick:w,children:"Add Task"})]})})]})},Bt={Overlay:Z.div`
        position: fixed;
        inset: 0;

        z-index: 2000;

        display: grid;
        place-items: center;

        padding: 20px;

        background: rgba(0, 0, 0, 0.78);

        backdrop-filter: blur(10px);
    `,Dialog:Z.div`
        width: min(500px, 100%);

        padding: 22px;

        color: var(--text);

        background: linear-gradient(145deg, #121212, #0a0a0a);

        border: 1px solid var(--border-strong);

        border-radius: 16px;

        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.035),
            var(--shadow-lg);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.045),
                var(--shadow-lg),
                0 0 34px rgba(254, 69, 0, 0.045);
        }
    `,Header:Z.div`
        display: grid;
        grid-template-columns:
            auto
            minmax(0, 1fr)
            auto;

        align-items: start;
        gap: 14px;
    `,Icon:Z.div`
        display: grid;
        place-items: center;

        width: 42px;
        height: 42px;

        color: ${({$tone:i})=>i==="danger"?"var(--danger)":"var(--accent)"};

        background: ${({$tone:i})=>i==="danger"?"var(--danger-soft)":"var(--accent-soft)"};

        border: 1px solid
            ${({$tone:i})=>i==="danger"?"var(--danger-border)":"var(--accent-border)"};

        border-radius: 10px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

        font-size: 1rem;

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            box-shadow: var(--shadow-sm);
        }
    `,Heading:Z.div`
        min-width: 0;

        h2 {
            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.45rem;
            font-weight: 600;
            letter-spacing: 0.01em;

            transition: text-shadow var(--transition);
        }

        h2:hover {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
        }

        p {
            margin-top: 7px;

            color: var(--text);

            font-size: 0.7rem;
            line-height: 1.7;
        }
    `,CloseButton:Z.button`
        display: grid;
        place-items: center;

        width: 36px;
        height: 36px;

        padding: 0;

        color: var(--text);

        background: linear-gradient(180deg, #111111, #0b0b0b);

        border: 1px solid var(--border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            color var(--transition),
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `,Actions:Z.div`
        display: flex;
        justify-content: flex-end;
        gap: 9px;

        margin-top: 24px;

        @media (max-width: 480px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    `,CancelButton:Z.button`
        min-height: 42px;

        padding: 9px 14px;

        color: var(--heading);

        background: linear-gradient(180deg, #121212, #0c0c0c);

        border: 1px solid var(--border-strong);

        border-radius: 8px;

        font-size: 0.65rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);

            text-shadow: 0 0 10px rgba(255, 255, 255, 0.08);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `,ConfirmButton:Z.button`
        min-height: 42px;

        padding: 9px 14px;

        color: #ffffff;

        background: ${({$tone:i})=>i==="danger"?"linear-gradient(180deg, #ff7474, #e94d4d)":"linear-gradient(180deg, #ff5518, var(--accent))"};

        border: 1px solid
            ${({$tone:i})=>i==="danger"?"var(--danger)":"var(--accent)"};

        border-radius: 8px;

        font-size: 0.65rem;
        font-weight: 800;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover {
            border-color: ${({$tone:i})=>i==="danger"?"#ff8a8a":"#ff7442"};

            box-shadow: ${({$tone:i})=>i==="danger"?"0 10px 28px rgba(255, 102, 102, 0.13)":"0 10px 28px rgba(254, 69, 0, 0.16)"};

            text-shadow: 0 0 12px rgba(255, 255, 255, 0.28);
        }

        &:focus-visible {
            outline: 2px solid var(--heading);

            outline-offset: 3px;
        }
    `},U0=({title:i,message:s,confirmText:u="Confirm",cancelText:d="Cancel",tone:h="default",onConfirm:w,onCancel:N})=>{const E=we.useRef(null),k=we.useRef(null);return we.useEffect(()=>{var W;const O=document.activeElement,I=document.body.style.overflow;document.body.style.overflow="hidden",(W=k.current)==null||W.focus();const M=re=>{var le;if(re.key==="Escape"){re.preventDefault(),N();return}if(re.key!=="Tab")return;const G=(le=E.current)==null?void 0:le.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');if(!G||G.length===0)return;const Q=G[0],H=G[G.length-1];re.shiftKey&&document.activeElement===Q?(re.preventDefault(),H.focus()):!re.shiftKey&&document.activeElement===H&&(re.preventDefault(),Q.focus())};return document.addEventListener("keydown",M),()=>{var re;document.body.style.overflow=I,document.removeEventListener("keydown",M),(re=O==null?void 0:O.focus)==null||re.call(O)}},[N]),v.jsx(Bt.Overlay,{onMouseDown:O=>{O.target===O.currentTarget&&N()},children:v.jsxs(Bt.Dialog,{ref:E,role:"alertdialog","aria-modal":"true","aria-labelledby":"confirm-modal-title","aria-describedby":s?"confirm-modal-message":void 0,children:[v.jsxs(Bt.Header,{children:[v.jsx(Bt.Icon,{$tone:h,children:v.jsx(Sh,{"aria-hidden":"true"})}),v.jsxs(Bt.Heading,{children:[v.jsx("h2",{id:"confirm-modal-title",children:i}),s&&v.jsx("p",{id:"confirm-modal-message",children:s})]}),v.jsx(Bt.CloseButton,{type:"button",onClick:N,"aria-label":"Close confirmation dialog",title:"Close",children:v.jsx(wi,{"aria-hidden":"true"})})]}),v.jsxs(Bt.Actions,{children:[v.jsx(Bt.CancelButton,{type:"button",onClick:N,children:d}),v.jsx(Bt.ConfirmButton,{ref:k,type:"button",$tone:h,onClick:w,children:u})]})]})})},q={Page:Z.main`
        min-height: 100vh;

        padding-top: 72px;

        background:
            radial-gradient(
                circle at 8% 7%,
                rgba(254, 69, 0, 0.06),
                transparent 30rem
            ),
            linear-gradient(
                180deg,
                var(--background),
                #060606 55%,
                var(--background)
            );
    `,Container:Z.div`
        width: min(1180px, calc(100% - 40px));

        margin: 0 auto;

        padding: 78px 0 90px;

        @media (max-width: 760px) {
            width: calc(100% - 28px);

            padding: 60px 0 70px;
        }
    `,Intro:Z.section`
        display: grid;
        grid-template-columns:
            minmax(0, 1fr)
            auto;

        align-items: end;
        gap: 50px;

        margin-bottom: 42px;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
            gap: 28px;
        }
    `,Label:Z.p`
        color: var(--accent);

        font-size: 0.62rem;
        font-weight: 800;
        letter-spacing: 0.13em;
        text-transform: uppercase;

        text-shadow: 0 0 18px rgba(254, 69, 0, 0.18);
    `,Title:Z.h1`
        max-width: 760px;

        margin-top: 10px;

        color: var(--heading);

        font-family: "Antonio", sans-serif;

        font-size: clamp(4rem, 8vw, 7.2rem);

        font-weight: 700;
        letter-spacing: -0.04em;
        line-height: 0.9;

        text-shadow: 0 8px 28px rgba(0, 0, 0, 0.34);

        span {
            display: block;

            color: var(--muted);

            transition:
                color var(--transition),
                text-shadow var(--transition);
        }

        &:hover span {
            color: #777777;

            text-shadow: 0 0 26px rgba(255, 255, 255, 0.035);
        }
    `,Subtitle:Z.p`
        max-width: 620px;

        margin-top: 22px;

        color: var(--text);

        font-size: 0.75rem;
        line-height: 1.9;

        transition: color var(--transition);

        &:hover {
            color: var(--text-strong);
        }
    `,Stats:Z.div`
        display: grid;
        grid-template-columns: repeat(3, 92px);

        gap: 8px;

        div {
            padding: 16px 12px;

            text-align: center;

            background: linear-gradient(145deg, #111111, #0a0a0a);

            border: 1px solid var(--border);

            border-radius: 12px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

            transition:
                border-color var(--transition),
                box-shadow var(--transition);
        }

        div:hover {
            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.045),
                var(--shadow-sm),
                var(--shadow-accent);
        }

        strong {
            display: block;

            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.6rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        div:hover strong {
            text-shadow: 0 0 18px rgba(254, 69, 0, 0.18);
        }

        span {
            display: block;

            margin-top: 4px;

            color: var(--muted);

            font-size: 0.52rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        @media (max-width: 420px) {
            grid-template-columns: repeat(3, 1fr);
        }
    `,Card:Z.section`
        padding: 22px;

        background: linear-gradient(145deg, #101010, #0b0b0b);

        border: 1px solid var(--border);

        border-radius: 16px;

        box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.025),
            var(--shadow-xs);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--border-strong);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.04),
                var(--shadow-md);
        }
    `,CardHeader:Z.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 20px;

        h2 {
            margin-top: 5px;

            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.45rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        &:hover h2 {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.055);
        }

        > svg {
            color: var(--accent);

            font-size: 1.2rem;

            filter: drop-shadow(0 0 8px rgba(254, 69, 0, 0.18));
        }
    `,SectionLabel:Z.p`
        color: var(--accent);

        font-size: 0.55rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;

        text-shadow: 0 0 14px rgba(254, 69, 0, 0.16);
    `,FormRow:Z.div`
        display: grid;

        grid-template-columns:
            minmax(200px, 1fr)
            210px
            170px
            auto;

        gap: 9px;

        @media (max-width: 900px) {
            grid-template-columns:
                1fr
                1fr;
        }

        @media (max-width: 560px) {
            grid-template-columns: 1fr;
        }
    `,Input:Z.input`
        width: 100%;
        min-height: 44px;

        padding: 10px 12px;

        color: var(--heading);

        background: linear-gradient(180deg, #090909, #070707);

        border: 1px solid var(--border);

        border-radius: 8px;

        font: inherit;
        font-size: 0.68rem;

        outline: none;

        color-scheme: dark;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.018);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &::placeholder {
            color: var(--muted);
        }

        &:hover {
            border-color: var(--border-strong);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.028),
                var(--shadow-xs);
        }

        &:focus {
            border-color: var(--accent-border-strong);

            box-shadow:
                0 0 0 3px rgba(254, 69, 0, 0.055),
                var(--shadow-sm);
        }
    `,PrimaryButton:Z.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 44px;

        padding: 10px 14px;

        color: #ffffff;

        background: linear-gradient(180deg, #ff5012, var(--accent));

        border: 1px solid var(--accent);

        border-radius: 8px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);

        font: inherit;
        font-size: 0.64rem;
        font-weight: 800;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover:not(:disabled) {
            border-color: #ff7442;

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.22),
                0 10px 28px rgba(254, 69, 0, 0.18);

            text-shadow: 0 0 12px rgba(255, 255, 255, 0.35);
        }

        &:focus-visible {
            outline: 2px solid var(--heading);

            outline-offset: 3px;
        }

        &:disabled {
            opacity: 0.38;
            cursor: not-allowed;
        }
    `,Toolbar:Z.section`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;

        margin: 16px 0 32px;

        padding: 14px;

        background: linear-gradient(145deg, #0c0c0c, #080808);

        border: 1px solid var(--border);

        border-radius: 12px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--border-strong);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-sm);
        }

        @media (max-width: 900px) {
            align-items: stretch;
            flex-direction: column;
        }
    `,Filters:Z.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        @media (max-width: 650px) {
            display: grid;
            grid-template-columns: 1fr;
        }
    `,Field:Z.div`
        display: flex;
        align-items: center;
        gap: 8px;

        min-height: 42px;

        padding-left: 11px;

        color: var(--muted);

        background: linear-gradient(180deg, #111111, #0c0c0c);

        border: 1px solid var(--border);

        border-radius: 8px;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--text);

            border-color: var(--border-strong);

            box-shadow: var(--shadow-xs);
        }

        &:focus-within {
            color: var(--accent);

            border-color: var(--accent-border);

            box-shadow: 0 0 0 3px rgba(254, 69, 0, 0.04);
        }

        > svg {
            flex-shrink: 0;
        }
    `,Select:Z.select`
        min-height: 40px;

        padding: 8px 30px 8px 0;

        color: var(--heading);
        background: transparent;

        border: 0;

        outline: none;

        font: inherit;
        font-size: 0.63rem;

        cursor: pointer;

        color-scheme: dark;

        option {
            color: var(--heading);
            background: var(--card);
        }
    `,SearchField:Z.div`
        display: flex;
        align-items: center;
        gap: 8px;

        min-height: 42px;

        padding: 0 10px;

        color: var(--muted);

        background: linear-gradient(180deg, #111111, #0c0c0c);

        border: 1px solid var(--border);

        border-radius: 8px;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--text);

            border-color: var(--border-strong);

            box-shadow: var(--shadow-xs);
        }

        &:focus-within {
            color: var(--accent);

            border-color: var(--accent-border);

            box-shadow: 0 0 0 3px rgba(254, 69, 0, 0.04);
        }

        input {
            width: 190px;

            padding: 10px 0;

            color: var(--heading);
            background: transparent;

            border: 0;

            outline: 0;

            font: inherit;
            font-size: 0.63rem;
        }

        input::placeholder {
            color: var(--muted);
        }

        button {
            display: grid;
            place-items: center;

            width: 28px;
            height: 28px;

            padding: 0;

            color: var(--muted);
            background: transparent;

            border: 0;

            cursor: pointer;

            transition:
                color var(--transition),
                text-shadow var(--transition);
        }

        button:hover {
            color: var(--heading);

            text-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 650px) {
            input {
                width: 100%;
            }
        }
    `,BulkActions:Z.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        @media (max-width: 560px) {
            display: grid;
            grid-template-columns: 1fr;
        }
    `,Button:Z.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 12px;

        color: var(--heading);

        background: linear-gradient(180deg, #121212, #0d0d0d);

        border: 1px solid var(--border);

        border-radius: 8px;

        font: inherit;
        font-size: 0.61rem;
        font-weight: 700;

        cursor: pointer;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover:not(:disabled) {
            border-color: var(--accent-border);

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-sm);

            text-shadow: 0 0 12px rgba(254, 69, 0, 0.12);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.34;
            cursor: not-allowed;
        }
    `,DangerButton:Z.button`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        min-height: 42px;

        padding: 9px 12px;

        color: var(--danger);

        background: linear-gradient(
            180deg,
            rgba(255, 102, 102, 0.065),
            rgba(255, 102, 102, 0.035)
        );

        border: 1px solid var(--danger-border);

        border-radius: 8px;

        font: inherit;
        font-size: 0.61rem;
        font-weight: 700;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover:not(:disabled) {
            border-color: rgba(255, 102, 102, 0.7);

            box-shadow: 0 10px 26px rgba(255, 102, 102, 0.07);

            text-shadow: 0 0 12px rgba(255, 102, 102, 0.15);
        }

        &:focus-visible {
            outline: 2px solid var(--danger);

            outline-offset: 2px;
        }

        &:disabled {
            opacity: 0.32;
            cursor: not-allowed;
        }
    `,ResultsHeader:Z.div`
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 20px;

        margin-bottom: 14px;

        h2 {
            margin-top: 4px;

            color: var(--heading);

            font-family: "Antonio", sans-serif;

            font-size: 1.6rem;
            font-weight: 600;

            transition: text-shadow var(--transition);
        }

        &:hover h2 {
            text-shadow: 0 0 18px rgba(255, 255, 255, 0.055);
        }

        > span {
            color: var(--muted);

            font-size: 0.58rem;
            font-weight: 700;
        }
    `,List:Z.div`
        display: grid;
        gap: 9px;
    `,Empty:Z.div`
        display: grid;
        justify-items: center;
        gap: 8px;

        padding: 54px 20px;

        text-align: center;

        background: linear-gradient(145deg, #0f0f0f, #090909);

        border: 1px dashed var(--border-strong);

        border-radius: 14px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: var(--accent-border);

            box-shadow: var(--shadow-sm);
        }

        > svg {
            color: var(--accent);

            font-size: 1.35rem;
        }

        strong {
            color: var(--heading);

            font-size: 0.72rem;
        }

        span {
            color: var(--muted);

            font-size: 0.62rem;
        }
    `,Item:Z.article`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;

        padding: 16px;

        background: linear-gradient(145deg, #0f0f0f, #0a0a0a);

        border: 1px solid
            ${({$overdue:i})=>i?"var(--danger-border)":"var(--border)"};

        border-radius: 12px;

        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.018);

        opacity: ${({$done:i})=>i?.64:1};

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            opacity var(--transition);

        &:hover {
            border-color: ${({$overdue:i})=>i?"rgba(255, 102, 102, 0.62)":"var(--accent-border)"};

            box-shadow:
                inset 0 1px 0 rgba(255, 255, 255, 0.035),
                var(--shadow-md);

            opacity: 1;
        }

        @media (max-width: 620px) {
            align-items: stretch;
            flex-direction: column;
        }
    `,ItemLeft:Z.div`
        display: flex;
        align-items: flex-start;
        gap: 13px;

        min-width: 0;
        flex: 1;
    `,CheckboxLabel:Z.label`
        position: relative;

        display: grid;
        place-items: center;

        width: 22px;
        height: 22px;

        flex-shrink: 0;

        margin-top: 1px;

        cursor: pointer;

        input {
            position: absolute;

            width: 1px;
            height: 1px;

            opacity: 0;
        }

        span {
            display: grid;
            place-items: center;

            width: 22px;
            height: 22px;

            color: transparent;

            background: linear-gradient(180deg, #0a0a0a, #070707);

            border: 1px solid var(--border-strong);

            border-radius: 6px;

            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.025);

            transition:
                border-color var(--transition),
                box-shadow var(--transition),
                color var(--transition);
        }

        &:hover span {
            border-color: var(--accent-border);

            box-shadow: 0 0 0 3px rgba(254, 69, 0, 0.04);
        }

        input:checked + span {
            color: #ffffff;

            background: linear-gradient(180deg, #ff5518, var(--accent));

            border-color: var(--accent);

            box-shadow: 0 8px 20px rgba(254, 69, 0, 0.14);
        }

        input:focus-visible + span {
            outline: 2px solid var(--accent);

            outline-offset: 3px;
        }
    `,ItemContent:Z.div`
        min-width: 0;
        flex: 1;
    `,ItemTitle:Z.h3`
        color: var(--heading);

        font-size: 0.72rem;
        font-weight: 700;
        line-height: 1.5;

        overflow-wrap: anywhere;

        transition:
            color var(--transition),
            text-shadow var(--transition);

        ${({$done:i})=>i&&Vd`
                color: var(--muted);

                text-decoration: line-through;
            `}

        &:hover {
            text-shadow: 0 0 14px rgba(255, 255, 255, 0.08);
        }
    `,ItemMeta:Z.div`
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;

        margin-top: 8px;

        color: var(--muted);

        font-size: 0.56rem;

        .date {
            display: inline-flex;
            align-items: center;
            gap: 5px;

            transition: color var(--transition);
        }

        .date:hover {
            color: var(--text);
        }
    `,Tag:Z.span`
        display: inline-flex;
        align-items: center;
        gap: 5px;

        padding: 4px 7px;

        color: ${({$muted:i})=>i?"var(--muted)":"var(--text)"};

        background: rgba(255, 255, 255, 0.012);

        border: 1px solid var(--border);

        border-radius: 999px;

        font-size: 0.54rem;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow: 0 0 18px rgba(254, 69, 0, 0.05);
        }
    `,DueHint:Z.span`
        padding: 4px 7px;

        color: ${({$overdue:i})=>i?"var(--danger)":"var(--text)"};

        background: ${({$overdue:i})=>i?"var(--danger-soft)":"rgba(255, 255, 255, 0.018)"};

        border: 1px solid
            ${({$overdue:i})=>i?"var(--danger-border)":"var(--border)"};

        border-radius: 999px;

        font-weight: 700;

        transition:
            border-color var(--transition),
            box-shadow var(--transition);

        &:hover {
            border-color: ${({$overdue:i})=>i?"rgba(255, 102, 102, 0.6)":"var(--border-strong)"};

            box-shadow: var(--shadow-xs);
        }
    `,ItemActions:Z.div`
        display: flex;
        align-items: center;
        gap: 7px;

        @media (max-width: 620px) {
            justify-content: flex-end;
        }
    `,IconButton:Z.button`
        display: grid;
        place-items: center;

        width: 38px;
        height: 38px;

        padding: 0;

        color: var(--text);

        background: linear-gradient(180deg, #101010, #0a0a0a);

        border: 1px solid var(--border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            color var(--transition);

        &:hover {
            color: var(--heading);

            border-color: var(--accent-border);

            box-shadow:
                var(--shadow-sm),
                0 0 20px rgba(254, 69, 0, 0.05);
        }

        &:focus-visible {
            outline: 2px solid var(--accent);

            outline-offset: 2px;
        }
    `,DeleteButton:Z.button`
        display: grid;
        place-items: center;

        width: 38px;
        height: 38px;

        padding: 0;

        color: var(--danger);

        background: linear-gradient(
            180deg,
            rgba(255, 102, 102, 0.055),
            rgba(255, 102, 102, 0.025)
        );

        border: 1px solid var(--danger-border);

        border-radius: 8px;

        cursor: pointer;

        transition:
            border-color var(--transition),
            box-shadow var(--transition),
            text-shadow var(--transition);

        &:hover {
            border-color: rgba(255, 102, 102, 0.68);

            box-shadow: 0 10px 24px rgba(255, 102, 102, 0.07);

            text-shadow: 0 0 10px rgba(255, 102, 102, 0.2);
        }

        &:focus-visible {
            outline: 2px solid var(--danger);

            outline-offset: 2px;
        }
    `,EditItem:Z.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;

        padding: 14px;

        background: linear-gradient(145deg, #101010, #090909);

        border: 1px solid var(--accent-border);

        border-radius: 12px;

        box-shadow: 0 12px 34px rgba(254, 69, 0, 0.06);

        @media (max-width: 760px) {
            align-items: stretch;
            flex-direction: column;
        }
    `,EditFields:Z.div`
        display: grid;

        grid-template-columns:
            minmax(200px, 1fr)
            180px
            165px;

        gap: 8px;

        min-width: 0;
        flex: 1;

        @media (max-width: 760px) {
            grid-template-columns: 1fr;
        }
    `,EditActions:Z.div`
        display: flex;
        gap: 7px;

        @media (max-width: 480px) {
            display: grid;
            grid-template-columns:
                1fr
                1fr;
        }
    `,StorageNote:Z.p`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        margin-top: 24px;

        color: var(--muted);

        font-size: 0.58rem;
        line-height: 1.6;

        text-align: center;

        transition:
            color var(--transition),
            text-shadow var(--transition);

        &:hover {
            color: var(--text);

            text-shadow: 0 0 14px rgba(255, 255, 255, 0.035);
        }

        svg {
            flex-shrink: 0;

            color: var(--accent);
        }
    `},Qd="todo-list.v1",W0=()=>`${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`,V0=()=>{const i=new Date,s=i.getFullYear(),u=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0");return`${s}-${u}-${d}`},H0=i=>i?new Date(`${i}T00:00:00`).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}):"No due date",Q0=i=>{if(!i)return null;const s=new Date(`${i}T00:00:00`),u=new Date(`${V0()}T00:00:00`);return Math.round((s-u)/(1e3*60*60*24))},G0=()=>{try{return JSON.parse(localStorage.getItem(Qd))??[]}catch{return[]}},K0=()=>{const[i,s]=we.useState(G0),[u,d]=we.useState(""),[h,w]=we.useState(""),[N,E]=we.useState(""),[k,O]=we.useState(""),[I,M]=we.useState("All"),[W,re]=we.useState("created"),[G,Q]=we.useState(null),[H,le]=we.useState(null);we.useEffect(()=>{localStorage.setItem(Qd,JSON.stringify(i))},[i]);const B=i.filter(P=>!P.done).length,ve=i.filter(P=>P.done).length,ge=we.useMemo(()=>{const P=new Set(i.map(A=>A.category).filter(Boolean));return["All",...Array.from(P).sort((A,C)=>A.localeCompare(C))]},[i]),ie=we.useMemo(()=>{let P=i;if(I!=="All"&&(P=P.filter(A=>(A.category||"").toLowerCase()===I.toLowerCase())),k.trim()){const A=k.trim().toLowerCase();P=P.filter(C=>C.title.toLowerCase().includes(A)||(C.category||"").toLowerCase().includes(A))}return W==="dueAsc"?[...P].sort((A,C)=>(A.due||"9999-12-31").localeCompare(C.due||"9999-12-31")):W==="dueDesc"?[...P].sort((A,C)=>(C.due||"0000-01-01").localeCompare(A.due||"0000-01-01")):[...P].sort((A,C)=>C.createdAt-A.createdAt)},[i,I,k,W]),se=ie.filter(P=>!P.done).length,V=P=>{le({title:"Are you sure?",message:"",confirmText:"Confirm",cancelText:"Cancel",tone:"default",...P})},ne=()=>{le(null)},$e=()=>{const P=H==null?void 0:H.onConfirm;le(null),typeof P=="function"&&P()},Be=P=>{P.preventDefault();const A=u.trim(),C=h.trim();if(!A)return;const D=Date.now(),T={id:W0(),title:A,category:C||"",due:N||"",done:!1,createdAt:D,updatedAt:D};s(g=>[T,...g]),d(""),w(""),E("")},ze=P=>{s(A=>A.map(C=>C.id===P?{...C,done:!C.done,updatedAt:Date.now()}:C))},Ue=P=>{s(A=>A.filter(C=>C.id!==P))},pe=(P,A)=>{s(C=>C.map(D=>D.id===P?{...D,...A,updatedAt:Date.now()}:D)),Q(null)},Le=()=>{s(P=>P.filter(A=>!A.done))},We=()=>{const P=new Set(ie.map(A=>A.id));s(A=>A.map(C=>P.has(C.id)?{...C,done:!0,updatedAt:Date.now()}:C))};return v.jsxs(q.Page,{id:"tasks",children:[v.jsxs(q.Container,{children:[v.jsxs(q.Intro,{children:[v.jsxs("div",{children:[v.jsx(q.Label,{children:"Local Task Manager"}),v.jsxs(q.Title,{children:["Plan tasks.",v.jsx("span",{children:"Keep moving."})]}),v.jsx(q.Subtitle,{children:"Create, edit, complete, search, filter and organize tasks directly in your browser."})]}),v.jsxs(q.Stats,{children:[v.jsxs("div",{children:[v.jsx("strong",{children:B}),v.jsx("span",{children:"Open"})]}),v.jsxs("div",{children:[v.jsx("strong",{children:ve}),v.jsx("span",{children:"Done"})]}),v.jsxs("div",{children:[v.jsx("strong",{children:i.length}),v.jsx("span",{children:"Total"})]})]})]}),v.jsxs(q.Card,{as:"form",id:"add-task",onSubmit:Be,children:[v.jsxs(q.CardHeader,{children:[v.jsxs("div",{children:[v.jsx(q.SectionLabel,{children:"New Task"}),v.jsx("h2",{children:"Add something to your list"})]}),v.jsx(Jc,{"aria-hidden":"true"})]}),v.jsxs(q.FormRow,{children:[v.jsx(q.Input,{placeholder:"Task title *",value:u,onChange:P=>d(P.target.value),"aria-label":"Task title",required:!0}),v.jsx(q.Input,{placeholder:"Category",value:h,onChange:P=>w(P.target.value),"aria-label":"Category",list:"category-suggestions"}),v.jsx("datalist",{id:"category-suggestions",children:ge.filter(P=>P!=="All").map(P=>v.jsx("option",{value:P},P))}),v.jsx(q.Input,{type:"date",value:N,onChange:P=>E(P.target.value),"aria-label":"Due date",min:"1900-01-01"}),v.jsxs(q.PrimaryButton,{type:"submit",disabled:!u.trim(),children:[v.jsx(Jc,{"aria-hidden":"true"}),"Add Task"]})]})]}),v.jsxs(q.Toolbar,{children:[v.jsxs(q.Filters,{children:[v.jsxs(q.Field,{children:[v.jsx(Zc,{"aria-hidden":"true"}),v.jsx(q.Select,{value:I,onChange:P=>M(P.target.value),"aria-label":"Filter by category",children:ge.map(P=>v.jsx("option",{value:P,children:P},P))})]}),v.jsxs(q.Field,{children:[v.jsx(qc,{"aria-hidden":"true"}),v.jsxs(q.Select,{value:W,onChange:P=>re(P.target.value),"aria-label":"Sort tasks",children:[v.jsx("option",{value:"created",children:"Newest"}),v.jsx("option",{value:"dueAsc",children:"Due date ascending"}),v.jsx("option",{value:"dueDesc",children:"Due date descending"})]})]}),v.jsxs(q.SearchField,{children:[v.jsx(sh,{"aria-hidden":"true"}),v.jsx("input",{type:"search",placeholder:"Search tasks...",value:k,onChange:P=>O(P.target.value),"aria-label":"Search tasks"}),k&&v.jsx("button",{type:"button",onClick:()=>O(""),"aria-label":"Clear search",title:"Clear search",children:v.jsx(wi,{"aria-hidden":"true"})})]})]}),v.jsxs(q.BulkActions,{children:[v.jsxs(q.Button,{type:"button",disabled:se===0,onClick:()=>V({title:"Complete visible tasks?",message:`Mark ${se} visible task(s) as completed?`,confirmText:"Complete",onConfirm:We}),children:[v.jsx(xh,{"aria-hidden":"true"}),"Complete visible"]}),v.jsxs(q.DangerButton,{type:"button",disabled:ve===0,onClick:()=>V({title:"Clear completed tasks?",message:`Remove ${ve} completed task(s) permanently?`,confirmText:"Clear",tone:"danger",onConfirm:Le}),children:[v.jsx(Xc,{"aria-hidden":"true"}),"Clear completed"]})]})]}),v.jsxs(q.ResultsHeader,{children:[v.jsxs("div",{children:[v.jsx(q.SectionLabel,{children:"Task List"}),v.jsxs("h2",{children:[ie.length," result",ie.length===1?"":"s"]})]}),v.jsx("span",{children:I==="All"?"All categories":I})]}),v.jsxs(q.List,{children:[ie.length===0&&v.jsxs(q.Empty,{children:[v.jsx(qc,{"aria-hidden":"true"}),v.jsx("strong",{children:"No tasks found"}),v.jsx("span",{children:"Add a new task or change your filters."})]}),ie.map(P=>{const A=Q0(P.due),C=A!==null&&A<0&&!P.done;return G===P.id?v.jsx(Y0,{item:P,onCancel:()=>Q(null),onSave:pe},P.id):v.jsxs(q.Item,{$done:P.done,$overdue:C,children:[v.jsxs(q.ItemLeft,{children:[v.jsxs(q.CheckboxLabel,{children:[v.jsx("input",{type:"checkbox",checked:P.done,onChange:()=>ze(P.id),"aria-label":`Mark ${P.title} ${P.done?"not done":"done"}`}),v.jsx("span",{children:v.jsx(vd,{"aria-hidden":"true"})})]}),v.jsxs(q.ItemContent,{children:[v.jsx(q.ItemTitle,{$done:P.done,children:P.title}),v.jsxs(q.ItemMeta,{children:[v.jsxs(q.Tag,{$muted:!P.category,children:[v.jsx(Zc,{"aria-hidden":"true"}),P.category?P.category:"No category"]}),v.jsxs("span",{className:"date",children:[v.jsx(wh,{"aria-hidden":"true"}),P.due?`Due ${H0(P.due)}`:"No due date"]}),P.due&&!P.done&&v.jsx(q.DueHint,{$overdue:C,children:A===0?"Today":A<0?`${Math.abs(A)}d overdue`:`${A}d left`})]})]})]}),v.jsxs(q.ItemActions,{children:[v.jsx(q.IconButton,{type:"button",onClick:()=>Q(P.id),"aria-label":`Edit ${P.title}`,title:"Edit task",children:v.jsx(gh,{"aria-hidden":"true"})}),v.jsx(q.DeleteButton,{type:"button",onClick:()=>V({title:"Delete task?",message:`Delete "${P.title}" permanently?`,confirmText:"Delete",tone:"danger",onConfirm:()=>Ue(P.id)}),"aria-label":`Delete ${P.title}`,title:"Delete task",children:v.jsx(Xc,{"aria-hidden":"true"})})]})]},P.id)})]}),v.jsxs(q.StorageNote,{children:[v.jsx(mh,{"aria-hidden":"true"}),"Tasks are stored locally in this browser using localStorage."]})]}),H&&v.jsx(U0,{title:H.title,message:H.message,confirmText:H.confirmText,cancelText:H.cancelText,tone:H.tone,onConfirm:$e,onCancel:ne})]})},Y0=({item:i,onCancel:s,onSave:u})=>{const[d,h]=we.useState(i.title),[w,N]=we.useState(i.category||""),[E,k]=we.useState(i.due||""),O=I=>{I.preventDefault();const M=d.trim();M&&u(i.id,{title:M,category:w.trim(),due:E})};return v.jsxs(q.EditItem,{as:"form",onSubmit:O,children:[v.jsxs(q.EditFields,{children:[v.jsx(q.Input,{value:d,onChange:I=>h(I.target.value),"aria-label":"Edit task title",placeholder:"Title *",required:!0,autoFocus:!0}),v.jsx(q.Input,{value:w,onChange:I=>N(I.target.value),"aria-label":"Edit category",placeholder:"Category"}),v.jsx(q.Input,{type:"date",value:E,onChange:I=>k(I.target.value),"aria-label":"Edit due date"})]}),v.jsxs(q.EditActions,{children:[v.jsxs(q.PrimaryButton,{type:"submit",disabled:!d.trim(),children:[v.jsx(vd,{"aria-hidden":"true"}),"Save"]}),v.jsxs(q.Button,{type:"button",onClick:s,children:[v.jsx(wi,{"aria-hidden":"true"}),"Cancel"]})]})]})},X0=()=>v.jsxs(v.Fragment,{children:[v.jsx("div",{id:"top"}),v.jsx(B0,{}),v.jsx(K0,{}),v.jsx(A0,{}),v.jsx(b0,{})]});qp.createRoot(document.getElementById("root")).render(v.jsx(v.Fragment,{children:v.jsx(X0,{})}));
