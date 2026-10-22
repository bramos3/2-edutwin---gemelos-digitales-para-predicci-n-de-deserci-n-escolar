(()=>{var Fb=Object.create;var $0=Object.defineProperty;var zb=Object.getOwnPropertyDescriptor;var Hb=Object.getOwnPropertyNames;var kb=Object.getPrototypeOf,Gb=Object.prototype.hasOwnProperty;var ti=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Vb=(t,e,a,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Hb(e))!Gb.call(t,i)&&i!==a&&$0(t,i,{get:()=>e[i],enumerable:!(n=zb(e,i))||n.enumerable});return t};var vi=(t,e,a)=>(a=t!=null?Fb(kb(t)):{},Vb(e||!t||!t.__esModule?$0(a,"default",{value:t,enumerable:!0}):a,t));var cx=ti(Qe=>{"use strict";var Hh=Symbol.for("react.transitional.element"),qb=Symbol.for("react.portal"),Wb=Symbol.for("react.fragment"),Xb=Symbol.for("react.strict_mode"),Yb=Symbol.for("react.profiler"),Zb=Symbol.for("react.consumer"),Kb=Symbol.for("react.context"),Jb=Symbol.for("react.forward_ref"),Qb=Symbol.for("react.suspense"),jb=Symbol.for("react.memo"),ix=Symbol.for("react.lazy"),$b=Symbol.for("react.activity"),ex=Symbol.iterator;function e1(t){return t===null||typeof t!="object"?null:(t=ex&&t[ex]||t["@@iterator"],typeof t=="function"?t:null)}var sx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rx=Object.assign,ox={};function Br(t,e,a){this.props=t,this.context=e,this.refs=ox,this.updater=a||sx}Br.prototype.isReactComponent={};Br.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Br.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lx(){}lx.prototype=Br.prototype;function kh(t,e,a){this.props=t,this.context=e,this.refs=ox,this.updater=a||sx}var Gh=kh.prototype=new lx;Gh.constructor=kh;rx(Gh,Br.prototype);Gh.isPureReactComponent=!0;var tx=Array.isArray;function zh(){}var Nt={H:null,A:null,T:null,S:null},ux=Object.prototype.hasOwnProperty;function Vh(t,e,a){var n=a.ref;return{$$typeof:Hh,type:t,key:e,ref:n!==void 0?n:null,props:a}}function t1(t,e){return Vh(t.type,e,t.props)}function qh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hh}function a1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return e[a]})}var ax=/\/+/g;function Fh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?a1(""+t.key):e.toString(36)}function n1(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(zh,zh):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ur(t,e,a,n,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var r=!1;if(t===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(t.$$typeof){case Hh:case qb:r=!0;break;case ix:return r=t._init,Ur(r(t._payload),e,a,n,i)}}if(r)return i=i(t),r=n===""?"."+Fh(t,0):n,tx(i)?(a="",r!=null&&(a=r.replace(ax,"$&/")+"/"),Ur(i,e,a,"",function(u){return u})):i!=null&&(qh(i)&&(i=t1(i,a+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(ax,"$&/")+"/")+r)),e.push(i)),1;r=0;var o=n===""?".":n+":";if(tx(t))for(var l=0;l<t.length;l++)n=t[l],s=o+Fh(n,l),r+=Ur(n,e,a,s,i);else if(l=e1(t),typeof l=="function")for(t=l.call(t),l=0;!(n=t.next()).done;)n=n.value,s=o+Fh(n,l++),r+=Ur(n,e,a,s,i);else if(s==="object"){if(typeof t.then=="function")return Ur(n1(t),e,a,n,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return r}function $u(t,e,a){if(t==null)return t;var n=[],i=0;return Ur(t,n,"","",function(s){return e.call(a,s,i++)}),n}function i1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nx=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},s1={map:$u,forEach:function(t,e,a){$u(t,function(){e.apply(this,arguments)},a)},count:function(t){var e=0;return $u(t,function(){e++}),e},toArray:function(t){return $u(t,function(e){return e})||[]},only:function(t){if(!qh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Activity=$b;Qe.Children=s1;Qe.Component=Br;Qe.Fragment=Wb;Qe.Profiler=Yb;Qe.PureComponent=kh;Qe.StrictMode=Xb;Qe.Suspense=Qb;Qe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Nt;Qe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Nt.H.useMemoCache(t)}};Qe.cache=function(t){return function(){return t.apply(null,arguments)}};Qe.cacheSignal=function(){return null};Qe.cloneElement=function(t,e,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var n=rx({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!ux.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(n[s]=e[s]);var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){for(var r=Array(s),o=0;o<s;o++)r[o]=arguments[o+2];n.children=r}return Vh(t.type,i,n)};Qe.createContext=function(t){return t={$$typeof:Kb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Zb,_context:t},t};Qe.createElement=function(t,e,a){var n,i={},s=null;if(e!=null)for(n in e.key!==void 0&&(s=""+e.key),e)ux.call(e,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(i[n]=e[n]);var r=arguments.length-2;if(r===1)i.children=a;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];i.children=o}if(t&&t.defaultProps)for(n in r=t.defaultProps,r)i[n]===void 0&&(i[n]=r[n]);return Vh(t,s,i)};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:Jb,render:t}};Qe.isValidElement=qh;Qe.lazy=function(t){return{$$typeof:ix,_payload:{_status:-1,_result:t},_init:i1}};Qe.memo=function(t,e){return{$$typeof:jb,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=Nt.T,a={};Nt.T=a;try{var n=t(),i=Nt.S;i!==null&&i(a,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(zh,nx)}catch(s){nx(s)}finally{e!==null&&a.types!==null&&(e.types=a.types),Nt.T=e}};Qe.unstable_useCacheRefresh=function(){return Nt.H.useCacheRefresh()};Qe.use=function(t){return Nt.H.use(t)};Qe.useActionState=function(t,e,a){return Nt.H.useActionState(t,e,a)};Qe.useCallback=function(t,e){return Nt.H.useCallback(t,e)};Qe.useContext=function(t){return Nt.H.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t,e){return Nt.H.useDeferredValue(t,e)};Qe.useEffect=function(t,e){return Nt.H.useEffect(t,e)};Qe.useEffectEvent=function(t){return Nt.H.useEffectEvent(t)};Qe.useId=function(){return Nt.H.useId()};Qe.useImperativeHandle=function(t,e,a){return Nt.H.useImperativeHandle(t,e,a)};Qe.useInsertionEffect=function(t,e){return Nt.H.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return Nt.H.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return Nt.H.useMemo(t,e)};Qe.useOptimistic=function(t,e){return Nt.H.useOptimistic(t,e)};Qe.useReducer=function(t,e,a){return Nt.H.useReducer(t,e,a)};Qe.useRef=function(t){return Nt.H.useRef(t)};Qe.useState=function(t){return Nt.H.useState(t)};Qe.useSyncExternalStore=function(t,e,a){return Nt.H.useSyncExternalStore(t,e,a)};Qe.useTransition=function(){return Nt.H.useTransition()};Qe.version="19.2.8"});var Qs=ti((TR,dx)=>{"use strict";dx.exports=cx()});var _x=ti(Wt=>{"use strict";function Zh(t,e){var a=t.length;t.push(e);e:for(;0<a;){var n=a-1>>>1,i=t[n];if(0<ec(i,e))t[n]=e,t[a]=i,a=n;else break e}}function ai(t){return t.length===0?null:t[0]}function ac(t){if(t.length===0)return null;var e=t[0],a=t.pop();if(a!==e){t[0]=a;e:for(var n=0,i=t.length,s=i>>>1;n<s;){var r=2*(n+1)-1,o=t[r],l=r+1,u=t[l];if(0>ec(o,a))l<i&&0>ec(u,o)?(t[n]=u,t[l]=a,n=l):(t[n]=o,t[r]=a,n=r);else if(l<i&&0>ec(u,a))t[n]=u,t[l]=a,n=l;else break e}}return e}function ec(t,e){var a=t.sortIndex-e.sortIndex;return a!==0?a:t.id-e.id}Wt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(fx=performance,Wt.unstable_now=function(){return fx.now()}):(Wh=Date,hx=Wh.now(),Wt.unstable_now=function(){return Wh.now()-hx});var fx,Wh,hx,Si=[],ts=[],r1=1,Ln=null,Pa=3,Kh=!1,il=!1,sl=!1,Jh=!1,gx=typeof setTimeout=="function"?setTimeout:null,xx=typeof clearTimeout=="function"?clearTimeout:null,px=typeof setImmediate<"u"?setImmediate:null;function tc(t){for(var e=ai(ts);e!==null;){if(e.callback===null)ac(ts);else if(e.startTime<=t)ac(ts),e.sortIndex=e.expirationTime,Zh(Si,e);else break;e=ai(ts)}}function Qh(t){if(sl=!1,tc(t),!il)if(ai(Si)!==null)il=!0,Or||(Or=!0,Nr());else{var e=ai(ts);e!==null&&jh(Qh,e.startTime-t)}}var Or=!1,rl=-1,yx=5,vx=-1;function Sx(){return Jh?!0:!(Wt.unstable_now()-vx<yx)}function Xh(){if(Jh=!1,Or){var t=Wt.unstable_now();vx=t;var e=!0;try{e:{il=!1,sl&&(sl=!1,xx(rl),rl=-1),Kh=!0;var a=Pa;try{t:{for(tc(t),Ln=ai(Si);Ln!==null&&!(Ln.expirationTime>t&&Sx());){var n=Ln.callback;if(typeof n=="function"){Ln.callback=null,Pa=Ln.priorityLevel;var i=n(Ln.expirationTime<=t);if(t=Wt.unstable_now(),typeof i=="function"){Ln.callback=i,tc(t),e=!0;break t}Ln===ai(Si)&&ac(Si),tc(t)}else ac(Si);Ln=ai(Si)}if(Ln!==null)e=!0;else{var s=ai(ts);s!==null&&jh(Qh,s.startTime-t),e=!1}}break e}finally{Ln=null,Pa=a,Kh=!1}e=void 0}}finally{e?Nr():Or=!1}}}var Nr;typeof px=="function"?Nr=function(){px(Xh)}:typeof MessageChannel<"u"?(Yh=new MessageChannel,mx=Yh.port2,Yh.port1.onmessage=Xh,Nr=function(){mx.postMessage(null)}):Nr=function(){gx(Xh,0)};var Yh,mx;function jh(t,e){rl=gx(function(){t(Wt.unstable_now())},e)}Wt.unstable_IdlePriority=5;Wt.unstable_ImmediatePriority=1;Wt.unstable_LowPriority=4;Wt.unstable_NormalPriority=3;Wt.unstable_Profiling=null;Wt.unstable_UserBlockingPriority=2;Wt.unstable_cancelCallback=function(t){t.callback=null};Wt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):yx=0<t?Math.floor(1e3/t):5};Wt.unstable_getCurrentPriorityLevel=function(){return Pa};Wt.unstable_next=function(t){switch(Pa){case 1:case 2:case 3:var e=3;break;default:e=Pa}var a=Pa;Pa=e;try{return t()}finally{Pa=a}};Wt.unstable_requestPaint=function(){Jh=!0};Wt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Pa;Pa=t;try{return e()}finally{Pa=a}};Wt.unstable_scheduleCallback=function(t,e,a){var n=Wt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?n+a:n):a=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=a+i,t={id:r1++,callback:e,priorityLevel:t,startTime:a,expirationTime:i,sortIndex:-1},a>n?(t.sortIndex=a,Zh(ts,t),ai(Si)===null&&t===ai(ts)&&(sl?(xx(rl),rl=-1):sl=!0,jh(Qh,a-n))):(t.sortIndex=i,Zh(Si,t),il||Kh||(il=!0,Or||(Or=!0,Nr()))),t};Wt.unstable_shouldYield=Sx;Wt.unstable_wrapCallback=function(t){var e=Pa;return function(){var a=Pa;Pa=e;try{return t.apply(this,arguments)}finally{Pa=a}}}});var bx=ti((CR,Mx)=>{"use strict";Mx.exports=_x()});var Ex=ti(Ha=>{"use strict";var o1=Qs();function Tx(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function as(){}var za={d:{f:as,r:function(){throw Error(Tx(522))},D:as,C:as,L:as,m:as,X:as,S:as,M:as},p:0,findDOMNode:null},l1=Symbol.for("react.portal");function u1(t,e,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l1,key:n==null?null:""+n,children:t,containerInfo:e,implementation:a}}var ol=o1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function nc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ha.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=za;Ha.createPortal=function(t,e){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Tx(299));return u1(t,e,null,a)};Ha.flushSync=function(t){var e=ol.T,a=za.p;try{if(ol.T=null,za.p=2,t)return t()}finally{ol.T=e,za.p=a,za.d.f()}};Ha.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,za.d.C(t,e))};Ha.prefetchDNS=function(t){typeof t=="string"&&za.d.D(t)};Ha.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var a=e.as,n=nc(a,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;a==="style"?za.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:n,integrity:i,fetchPriority:s}):a==="script"&&za.d.X(t,{crossOrigin:n,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ha.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var a=nc(e.as,e.crossOrigin);za.d.M(t,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&za.d.M(t)};Ha.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var a=e.as,n=nc(a,e.crossOrigin);za.d.L(t,a,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ha.preloadModule=function(t,e){if(typeof t=="string")if(e){var a=nc(e.as,e.crossOrigin);za.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else za.d.m(t)};Ha.requestFormReset=function(t){za.d.r(t)};Ha.unstable_batchedUpdates=function(t,e){return t(e)};Ha.useFormState=function(t,e,a){return ol.H.useFormState(t,e,a)};Ha.useFormStatus=function(){return ol.H.useHostTransitionStatus()};Ha.version="19.2.8"});var Lx=ti((LR,Ax)=>{"use strict";function Cx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cx)}catch(t){console.error(t)}}Cx(),Ax.exports=Ex()});var H_=ti(Ld=>{"use strict";var ha=bx(),ev=Qs(),c1=Lx();function ne(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function tv(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function nv(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function wx(t){if(Yl(t)!==t)throw Error(ne(188))}function d1(t){var e=t.alternate;if(!e){if(e=Yl(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var a=t,n=e;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return wx(i),t;if(s===n)return wx(i),e;s=s.sibling}throw Error(ne(188))}if(a.return!==n.return)a=i,n=s;else{for(var r=!1,o=i.child;o;){if(o===a){r=!0,a=i,n=s;break}if(o===n){r=!0,n=i,a=s;break}o=o.sibling}if(!r){for(o=s.child;o;){if(o===a){r=!0,a=s,n=i;break}if(o===n){r=!0,n=s,a=i;break}o=o.sibling}if(!r)throw Error(ne(189))}}if(a.alternate!==n)throw Error(ne(190))}if(a.tag!==3)throw Error(ne(188));return a.stateNode.current===a?t:e}function iv(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=iv(t),e!==null)return e;t=t.sibling}return null}var zt=Object.assign,f1=Symbol.for("react.element"),ic=Symbol.for("react.transitional.element"),ml=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),sv=Symbol.for("react.strict_mode"),Dp=Symbol.for("react.profiler"),rv=Symbol.for("react.consumer"),Li=Symbol.for("react.context"),Am=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Up=Symbol.for("react.suspense_list"),Lm=Symbol.for("react.memo"),ns=Symbol.for("react.lazy");Symbol.for("react.scope");var Bp=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var h1=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var Ix=Symbol.iterator;function ll(t){return t===null||typeof t!="object"?null:(t=Ix&&t[Ix]||t["@@iterator"],typeof t=="function"?t:null)}var p1=Symbol.for("react.client.reference");function Np(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===p1?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Dp:return"Profiler";case sv:return"StrictMode";case Pp:return"Suspense";case Up:return"SuspenseList";case Bp:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ml:return"Portal";case Li:return t.displayName||"Context";case rv:return(t._context.displayName||"Context")+".Consumer";case Am:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lm:return e=t.displayName||null,e!==null?e:Np(t.type)||"Memo";case ns:e=t._payload,t=t._init;try{return Np(t(e))}catch{}}return null}var gl=Array.isArray,We=ev.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,St=c1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nr={pending:!1,data:null,method:null,action:null},Op=[],qr=-1;function oi(t){return{current:t}}function va(t){0>qr||(t.current=Op[qr],Op[qr]=null,qr--)}function Ut(t,e){qr++,Op[qr]=t.current,t.current=e}var ri=oi(null),Pl=oi(null),ps=oi(null),Oc=oi(null);function Fc(t,e){switch(Ut(ps,e),Ut(Pl,t),Ut(ri,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Oy(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Oy(e),t=C_(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}va(ri),Ut(ri,t)}function lo(){va(ri),va(Pl),va(ps)}function Fp(t){t.memoizedState!==null&&Ut(Oc,t);var e=ri.current,a=C_(e,t.type);e!==a&&(Ut(Pl,t),Ut(ri,a))}function zc(t){Pl.current===t&&(va(ri),va(Pl)),Oc.current===t&&(va(Oc),ql._currentValue=nr)}var $h,Rx;function $s(t){if($h===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);$h=e&&e[1]||"",Rx=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$h+t+Rx}var ep=!1;function tp(t,e){if(!t||ep)return"";ep=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(h){var c=h}Reflect.construct(t,[],p)}else{try{p.call()}catch(h){c=h}t.call(p.prototype)}}else{try{throw Error()}catch(h){c=h}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(h){if(h&&c&&typeof h.stack=="string")return[h.stack,c.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],o=s[1];if(r&&o){var l=r.split(`
`),u=o.split(`
`);for(i=n=0;n<l.length&&!l[n].includes("DetermineComponentFrameRoot");)n++;for(;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;if(n===l.length||i===u.length)for(n=l.length-1,i=u.length-1;1<=n&&0<=i&&l[n]!==u[i];)i--;for(;1<=n&&0<=i;n--,i--)if(l[n]!==u[i]){if(n!==1||i!==1)do if(n--,i--,0>i||l[n]!==u[i]){var f=`
`+l[n].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=n&&0<=i);break}}}finally{ep=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?$s(a):""}function m1(t,e){switch(t.tag){case 26:case 27:case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return t.child!==e&&e!==null?$s("Suspense Fallback"):$s("Suspense");case 19:return $s("SuspenseList");case 0:case 15:return tp(t.type,!1);case 11:return tp(t.type.render,!1);case 1:return tp(t.type,!0);case 31:return $s("Activity");default:return""}}function Dx(t){try{var e="",a=null;do e+=m1(t,a),a=t,t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var zp=Object.prototype.hasOwnProperty,wm=ha.unstable_scheduleCallback,ap=ha.unstable_cancelCallback,g1=ha.unstable_shouldYield,x1=ha.unstable_requestPaint,dn=ha.unstable_now,y1=ha.unstable_getCurrentPriorityLevel,ov=ha.unstable_ImmediatePriority,lv=ha.unstable_UserBlockingPriority,Hc=ha.unstable_NormalPriority,v1=ha.unstable_LowPriority,uv=ha.unstable_IdlePriority,S1=ha.log,_1=ha.unstable_setDisableYieldValue,Zl=null,fn=null;function us(t){if(typeof S1=="function"&&_1(t),fn&&typeof fn.setStrictMode=="function")try{fn.setStrictMode(Zl,t)}catch{}}var hn=Math.clz32?Math.clz32:T1,M1=Math.log,b1=Math.LN2;function T1(t){return t>>>=0,t===0?32:31-(M1(t)/b1|0)|0}var sc=256,rc=262144,oc=4194304;function er(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fd(t,e,a){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,r=t.pingedLanes;t=t.warmLanes;var o=n&134217727;return o!==0?(n=o&~s,n!==0?i=er(n):(r&=o,r!==0?i=er(r):a||(a=o&~t,a!==0&&(i=er(a))))):(o=n&~s,o!==0?i=er(o):r!==0?i=er(r):a||(a=n&~t,a!==0&&(i=er(a)))),i===0?0:e!==0&&e!==i&&(e&s)===0&&(s=i&-i,a=e&-e,s>=a||s===32&&(a&4194048)!==0)?e:i}function Kl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function E1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cv(){var t=oc;return oc<<=1,(oc&62914560)===0&&(oc=4194304),t}function np(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Jl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function C1(t,e,a,n,i,s){var r=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(a=r&~a;0<a;){var f=31-hn(a),p=1<<f;o[f]=0,l[f]=-1;var c=u[f];if(c!==null)for(u[f]=null,f=0;f<c.length;f++){var h=c[f];h!==null&&(h.lane&=-536870913)}a&=~p}n!==0&&dv(t,n,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(r&~e))}function dv(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var n=31-hn(e);t.entangledLanes|=e,t.entanglements[n]=t.entanglements[n]|1073741824|a&261930}function fv(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var n=31-hn(a),i=1<<n;i&e|t[n]&e&&(t[n]|=e),a&=~i}}function hv(t,e){var a=e&-e;return a=(a&42)!==0?1:Im(a),(a&(t.suspendedLanes|e))!==0?0:a}function Im(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Rm(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function pv(){var t=St.p;return t!==0?t:(t=window.event,t===void 0?32:O_(t.type))}function Px(t,e){var a=St.p;try{return St.p=t,e()}finally{St.p=a}}var As=Math.random().toString(36).slice(2),Ea="__reactFiber$"+As,$a="__reactProps$"+As,So="__reactContainer$"+As,Hp="__reactEvents$"+As,A1="__reactListeners$"+As,L1="__reactHandles$"+As,Ux="__reactResources$"+As,Ql="__reactMarker$"+As;function Dm(t){delete t[Ea],delete t[$a],delete t[Hp],delete t[A1],delete t[L1]}function Wr(t){var e=t[Ea];if(e)return e;for(var a=t.parentNode;a;){if(e=a[So]||a[Ea]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Gy(t);t!==null;){if(a=t[Ea])return a;t=Gy(t)}return e}t=a,a=t.parentNode}return null}function _o(t){if(t=t[Ea]||t[So]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function xl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(ne(33))}function to(t){var e=t[Ux];return e||(e=t[Ux]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function ya(t){t[Ql]=!0}var mv=new Set,gv={};function hr(t,e){uo(t,e),uo(t+"Capture",e)}function uo(t,e){for(gv[t]=e,t=0;t<e.length;t++)mv.add(e[t])}var w1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bx={},Nx={};function I1(t){return zp.call(Nx,t)?!0:zp.call(Bx,t)?!1:w1.test(t)?Nx[t]=!0:(Bx[t]=!0,!1)}function Mc(t,e,a){if(I1(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var n=e.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function lc(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function _i(t,e,a,n){if(n===null)t.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+n)}}function In(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R1(t,e,a){var n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(r){a=""+r,s.call(this,r)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(r){a=""+r},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function kp(t){if(!t._valueTracker){var e=xv(t)?"checked":"value";t._valueTracker=R1(t,e,""+t[e])}}function yv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),n="";return t&&(n=xv(t)?t.checked?"true":"false":t.value),t=n,t!==a?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var D1=/[\n"\\]/g;function Pn(t){return t.replace(D1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Gp(t,e,a,n,i,s,r,o){t.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?t.type=r:t.removeAttribute("type"),e!=null?r==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+In(e)):t.value!==""+In(e)&&(t.value=""+In(e)):r!=="submit"&&r!=="reset"||t.removeAttribute("value"),e!=null?Vp(t,r,In(e)):a!=null?Vp(t,r,In(a)):n!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+In(o):t.removeAttribute("name")}function vv(t,e,a,n,i,s,r,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){kp(t);return}a=a!=null?""+In(a):"",e=e!=null?""+In(e):a,o||e===t.value||(t.value=e),t.defaultValue=e}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,t.checked=o?t.checked:!!n,t.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.name=r),kp(t)}function Vp(t,e,a){e==="number"&&kc(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ao(t,e,a,n){if(t=t.options,e){e={};for(var i=0;i<a.length;i++)e["$"+a[i]]=!0;for(a=0;a<t.length;a++)i=e.hasOwnProperty("$"+t[a].value),t[a].selected!==i&&(t[a].selected=i),i&&n&&(t[a].defaultSelected=!0)}else{for(a=""+In(a),e=null,i=0;i<t.length;i++){if(t[i].value===a){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sv(t,e,a){if(e!=null&&(e=""+In(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+In(a):""}function _v(t,e,a,n){if(e==null){if(n!=null){if(a!=null)throw Error(ne(92));if(gl(n)){if(1<n.length)throw Error(ne(93));n=n[0]}a=n}a==null&&(a=""),e=a}a=In(e),t.defaultValue=a,n=t.textContent,n===a&&n!==""&&n!==null&&(t.value=n),kp(t)}function co(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var P1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ox(t,e,a){var n=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":n?t.setProperty(e,a):typeof a!="number"||a===0||P1.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Mv(t,e,a){if(e!=null&&typeof e!="object")throw Error(ne(62));if(t=t.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||e!=null&&e.hasOwnProperty(n)||(n.indexOf("--")===0?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="");for(var i in e)n=e[i],e.hasOwnProperty(i)&&a[i]!==n&&Ox(t,i,n)}else for(var s in e)e.hasOwnProperty(s)&&Ox(t,s,e[s])}function Pm(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bc(t){return B1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function wi(){}var qp=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xr=null,no=null;function Fx(t){var e=_o(t);if(e&&(t=e.stateNode)){var a=t[$a]||null;e:switch(t=e.stateNode,e.type){case"input":if(Gp(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pn(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var n=a[e];if(n!==t&&n.form===t.form){var i=n[$a]||null;if(!i)throw Error(ne(90));Gp(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<a.length;e++)n=a[e],n.form===t.form&&yv(n)}break e;case"textarea":Sv(t,a.value,a.defaultValue);break e;case"select":e=a.value,e!=null&&ao(t,!!a.multiple,e,!1)}}}var ip=!1;function bv(t,e,a){if(ip)return t(e,a);ip=!0;try{var n=t(e);return n}finally{if(ip=!1,(Xr!==null||no!==null)&&(Td(),Xr&&(e=Xr,t=no,no=Xr=null,Fx(e),t)))for(e=0;e<t.length;e++)Fx(t[e])}}function Ul(t,e){var a=t.stateNode;if(a===null)return null;var n=a[$a]||null;if(n===null)return null;a=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(ne(231,e,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wp=!1;if(Ui)try{Fr={},Object.defineProperty(Fr,"passive",{get:function(){Wp=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Wp=!1}var Fr,cs=null,Bm=null,Tc=null;function Tv(){if(Tc)return Tc;var t,e=Bm,a=e.length,n,i="value"in cs?cs.value:cs.textContent,s=i.length;for(t=0;t<a&&e[t]===i[t];t++);var r=a-t;for(n=1;n<=r&&e[a-n]===i[s-n];n++);return Tc=i.slice(t,1<n?1-n:void 0)}function Ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uc(){return!0}function zx(){return!1}function en(t){function e(a,n,i,s,r){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uc:zx,this.isPropagationStopped=zx,this}return zt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uc)},persist:function(){},isPersistent:uc}),e}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=en(pr),jl=zt({},pr,{view:0,detail:0}),N1=en(jl),sp,rp,ul,pd=zt({},jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ul&&(ul&&t.type==="mousemove"?(sp=t.screenX-ul.screenX,rp=t.screenY-ul.screenY):rp=sp=0,ul=t),sp)},movementY:function(t){return"movementY"in t?t.movementY:rp}}),Hx=en(pd),O1=zt({},pd,{dataTransfer:0}),F1=en(O1),z1=zt({},jl,{relatedTarget:0}),op=en(z1),H1=zt({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),k1=en(H1),G1=zt({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),V1=en(G1),q1=zt({},pr,{data:0}),kx=en(q1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Y1[t])?!!e[t]:!1}function Nm(){return Z1}var K1=zt({},jl,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?X1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nm,charCode:function(t){return t.type==="keypress"?Ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J1=en(K1),Q1=zt({},pd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gx=en(Q1),j1=zt({},jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nm}),$1=en(j1),eT=zt({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tT=en(eT),aT=zt({},pd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nT=en(aT),iT=zt({},pr,{newState:0,oldState:0}),sT=en(iT),rT=[9,13,27,32],Om=Ui&&"CompositionEvent"in window,Sl=null;Ui&&"documentMode"in document&&(Sl=document.documentMode);var oT=Ui&&"TextEvent"in window&&!Sl,Ev=Ui&&(!Om||Sl&&8<Sl&&11>=Sl),Vx=" ",qx=!1;function Cv(t,e){switch(t){case"keyup":return rT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function lT(t,e){switch(t){case"compositionend":return Av(e);case"keypress":return e.which!==32?null:(qx=!0,Vx);case"textInput":return t=e.data,t===Vx&&qx?null:t;default:return null}}function uT(t,e){if(Yr)return t==="compositionend"||!Om&&Cv(t,e)?(t=Tv(),Tc=Bm=cs=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ev&&e.locale!=="ko"?null:e.data;default:return null}}var cT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cT[t.type]:e==="textarea"}function Lv(t,e,a,n){Xr?no?no.push(n):no=[n]:Xr=n,e=sd(e,"onChange"),0<e.length&&(a=new hd("onChange","change",null,a,n),t.push({event:a,listeners:e}))}var _l=null,Bl=null;function dT(t){b_(t,0)}function md(t){var e=xl(t);if(yv(e))return t}function Xx(t,e){if(t==="change")return e}var wv=!1;Ui&&(Ui?(dc="oninput"in document,dc||(lp=document.createElement("div"),lp.setAttribute("oninput","return;"),dc=typeof lp.oninput=="function"),cc=dc):cc=!1,wv=cc&&(!document.documentMode||9<document.documentMode));var cc,dc,lp;function Yx(){_l&&(_l.detachEvent("onpropertychange",Iv),Bl=_l=null)}function Iv(t){if(t.propertyName==="value"&&md(Bl)){var e=[];Lv(e,Bl,t,Um(t)),bv(dT,e)}}function fT(t,e,a){t==="focusin"?(Yx(),_l=e,Bl=a,_l.attachEvent("onpropertychange",Iv)):t==="focusout"&&Yx()}function hT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return md(Bl)}function pT(t,e){if(t==="click")return md(e)}function mT(t,e){if(t==="input"||t==="change")return md(e)}function gT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:gT;function Nl(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),n=Object.keys(e);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!zp.call(e,i)||!mn(t[i],e[i]))return!1}return!0}function Zx(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kx(t,e){var a=Zx(t);t=0;for(var n;a;){if(a.nodeType===3){if(n=t+a.textContent.length,t<=e&&n>=e)return{node:a,offset:e-t};t=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zx(a)}}function Rv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dv(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=kc(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=kc(t.document)}return e}function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var xT=Ui&&"documentMode"in document&&11>=document.documentMode,Zr=null,Xp=null,Ml=null,Yp=!1;function Jx(t,e,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yp||Zr==null||Zr!==kc(n)||(n=Zr,"selectionStart"in n&&Fm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ml&&Nl(Ml,n)||(Ml=n,n=sd(Xp,"onSelect"),0<n.length&&(e=new hd("onSelect","select",null,e,a),t.push({event:e,listeners:n}),e.target=Zr)))}function js(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Kr={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionrun:js("Transition","TransitionRun"),transitionstart:js("Transition","TransitionStart"),transitioncancel:js("Transition","TransitionCancel"),transitionend:js("Transition","TransitionEnd")},up={},Pv={};Ui&&(Pv=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function mr(t){if(up[t])return up[t];if(!Kr[t])return t;var e=Kr[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in Pv)return up[t]=e[a];return t}var Uv=mr("animationend"),Bv=mr("animationiteration"),Nv=mr("animationstart"),yT=mr("transitionrun"),vT=mr("transitionstart"),ST=mr("transitioncancel"),Ov=mr("transitionend"),Fv=new Map,Zp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zp.push("scrollEnd");function Wn(t,e){Fv.set(t,e),hr(e,[t])}var Gc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},wn=[],Jr=0,zm=0;function gd(){for(var t=Jr,e=zm=Jr=0;e<t;){var a=wn[e];wn[e++]=null;var n=wn[e];wn[e++]=null;var i=wn[e];wn[e++]=null;var s=wn[e];if(wn[e++]=null,n!==null&&i!==null){var r=n.pending;r===null?i.next=i:(i.next=r.next,r.next=i),n.pending=i}s!==0&&zv(a,i,s)}}function xd(t,e,a,n){wn[Jr++]=t,wn[Jr++]=e,wn[Jr++]=a,wn[Jr++]=n,zm|=n,t.lanes|=n,t=t.alternate,t!==null&&(t.lanes|=n)}function Hm(t,e,a,n){return xd(t,e,a,n),Vc(t)}function gr(t,e){return xd(t,null,null,e),Vc(t)}function zv(t,e,a){t.lanes|=a;var n=t.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=t.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-hn(a),t=s.hiddenUpdates,n=t[i],n===null?t[i]=[e]:n.push(e),e.lane=a|536870912),s):null}function Vc(t){if(50<Rl)throw Rl=0,mm=null,Error(ne(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Qr={};function _T(t,e,a,n){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,a,n){return new _T(t,e,a,n)}function km(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ri(t,e){var a=t.alternate;return a===null?(a=un(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hv(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Cc(t,e,a,n,i,s){var r=0;if(n=t,typeof t=="function")km(t)&&(r=1);else if(typeof t=="string")r=TE(t,a,ri.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Bp:return t=un(31,a,e,i),t.elementType=Bp,t.lanes=s,t;case Vr:return ir(a.children,i,s,e);case sv:r=8,i|=24;break;case Dp:return t=un(12,a,e,i|2),t.elementType=Dp,t.lanes=s,t;case Pp:return t=un(13,a,e,i),t.elementType=Pp,t.lanes=s,t;case Up:return t=un(19,a,e,i),t.elementType=Up,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Li:r=10;break e;case rv:r=9;break e;case Am:r=11;break e;case Lm:r=14;break e;case ns:r=16,n=null;break e}r=29,a=Error(ne(130,t===null?"null":typeof t,"")),n=null}return e=un(r,a,e,i),e.elementType=t,e.type=n,e.lanes=s,e}function ir(t,e,a,n){return t=un(7,t,n,e),t.lanes=a,t}function cp(t,e,a){return t=un(6,t,null,e),t.lanes=a,t}function kv(t){var e=un(18,null,null,0);return e.stateNode=t,e}function dp(t,e,a){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Qx=new WeakMap;function Un(t,e){if(typeof t=="object"&&t!==null){var a=Qx.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Dx(e)},Qx.set(t,e),e)}return{value:t,source:e,stack:Dx(e)}}var jr=[],$r=0,qc=null,Ol=0,Rn=[],Dn=0,bs=null,ni=1,ii="";function Ci(t,e){jr[$r++]=Ol,jr[$r++]=qc,qc=t,Ol=e}function Gv(t,e,a){Rn[Dn++]=ni,Rn[Dn++]=ii,Rn[Dn++]=bs,bs=t;var n=ni;t=ii;var i=32-hn(n)-1;n&=~(1<<i),a+=1;var s=32-hn(e)+i;if(30<s){var r=i-i%5;s=(n&(1<<r)-1).toString(32),n>>=r,i-=r,ni=1<<32-hn(e)+i|a<<i|n,ii=s+t}else ni=1<<s|a<<i|n,ii=t}function Gm(t){t.return!==null&&(Ci(t,1),Gv(t,1,0))}function Vm(t){for(;t===qc;)qc=jr[--$r],jr[$r]=null,Ol=jr[--$r],jr[$r]=null;for(;t===bs;)bs=Rn[--Dn],Rn[Dn]=null,ii=Rn[--Dn],Rn[Dn]=null,ni=Rn[--Dn],Rn[Dn]=null}function Vv(t,e){Rn[Dn++]=ni,Rn[Dn++]=ii,Rn[Dn++]=bs,ni=e.id,ii=e.overflow,bs=t}var Ca=null,Ft=null,ht=!1,ms=null,Bn=!1,Kp=Error(ne(519));function Ts(t){var e=Error(ne(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(Un(e,t)),Kp}function jx(t){var e=t.stateNode,a=t.type,n=t.memoizedProps;switch(e[Ea]=t,e[$a]=n,a){case"dialog":st("cancel",e),st("close",e);break;case"iframe":case"object":case"embed":st("load",e);break;case"video":case"audio":for(a=0;a<Gl.length;a++)st(Gl[a],e);break;case"source":st("error",e);break;case"img":case"image":case"link":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"input":st("invalid",e),vv(e,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":st("invalid",e);break;case"textarea":st("invalid",e),_v(e,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||n.suppressHydrationWarning===!0||E_(e.textContent,a)?(n.popover!=null&&(st("beforetoggle",e),st("toggle",e)),n.onScroll!=null&&st("scroll",e),n.onScrollEnd!=null&&st("scrollend",e),n.onClick!=null&&(e.onclick=wi),e=!0):e=!1,e||Ts(t,!0)}function $x(t){for(Ca=t.return;Ca;)switch(Ca.tag){case 5:case 31:case 13:Bn=!1;return;case 27:case 3:Bn=!0;return;default:Ca=Ca.return}}function zr(t){if(t!==Ca)return!1;if(!ht)return $x(t),ht=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sm(t.type,t.memoizedProps)),a=!a),a&&Ft&&Ts(t),$x(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));Ft=ky(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));Ft=ky(t)}else e===27?(e=Ft,Ls(t.type)?(t=Tm,Tm=null,Ft=t):Ft=e):Ft=Ca?On(t.stateNode.nextSibling):null;return!0}function lr(){Ft=Ca=null,ht=!1}function fp(){var t=ms;return t!==null&&(Qa===null?Qa=t:Qa.push.apply(Qa,t),ms=null),t}function Fl(t){ms===null?ms=[t]:ms.push(t)}var Jp=oi(null),xr=null,Ii=null;function ss(t,e,a){Ut(Jp,e._currentValue),e._currentValue=a}function Di(t){t._currentValue=Jp.current,va(Jp)}function Qp(t,e,a){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===a)break;t=t.return}}function jp(t,e,a,n){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var r=i.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=i;for(var l=0;l<e.length;l++)if(o.context===e[l]){s.lanes|=a,o=s.alternate,o!==null&&(o.lanes|=a),Qp(s.return,a,t),n||(r=null);break e}s=o.next}}else if(i.tag===18){if(r=i.return,r===null)throw Error(ne(341));r.lanes|=a,s=r.alternate,s!==null&&(s.lanes|=a),Qp(r,a,t),r=null}else r=i.child;if(r!==null)r.return=i;else for(r=i;r!==null;){if(r===t){r=null;break}if(i=r.sibling,i!==null){i.return=r.return,r=i;break}r=r.return}i=r}}function Mo(t,e,a,n){t=null;for(var i=e,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var r=i.alternate;if(r===null)throw Error(ne(387));if(r=r.memoizedProps,r!==null){var o=i.type;mn(i.pendingProps.value,r.value)||(t!==null?t.push(o):t=[o])}}else if(i===Oc.current){if(r=i.alternate,r===null)throw Error(ne(387));r.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(ql):t=[ql])}i=i.return}t!==null&&jp(e,t,a,n),e.flags|=262144}function Wc(t){for(t=t.firstContext;t!==null;){if(!mn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ur(t){xr=t,Ii=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Aa(t){return qv(xr,t)}function fc(t,e){return xr===null&&ur(t),qv(t,e)}function qv(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ii===null){if(t===null)throw Error(ne(308));Ii=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ii=Ii.next=e;return a}var MT=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,n){t.push(n)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},bT=ha.unstable_scheduleCallback,TT=ha.unstable_NormalPriority,la={$$typeof:Li,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qm(){return{controller:new MT,data:new Map,refCount:0}}function $l(t){t.refCount--,t.refCount===0&&bT(TT,function(){t.controller.abort()})}var bl=null,$p=0,fo=0,io=null;function ET(t,e){if(bl===null){var a=bl=[];$p=0,fo=mg(),io={status:"pending",value:void 0,then:function(n){a.push(n)}}}return $p++,e.then(ey,ey),e}function ey(){if(--$p===0&&bl!==null){io!==null&&(io.status="fulfilled");var t=bl;bl=null,fo=0,io=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function CT(t,e){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return t.then(function(){n.status="fulfilled",n.value=e;for(var i=0;i<a.length;i++)(0,a[i])(e)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var ty=We.S;We.S=function(t,e){i_=dn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ET(t,e),ty!==null&&ty(t,e)};var sr=oi(null);function Wm(){var t=sr.current;return t!==null?t:It.pooledCache}function Ac(t,e){e===null?Ut(sr,sr.current):Ut(sr,e.pool)}function Wv(){var t=Wm();return t===null?null:{parent:la._currentValue,pool:t}}var bo=Error(ne(460)),Xm=Error(ne(474)),yd=Error(ne(542)),Xc={then:function(){}};function ay(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xv(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(wi,wi),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,iy(t),t;default:if(typeof e.status=="string")e.then(wi,wi);else{if(t=It,t!==null&&100<t.shellSuspendCounter)throw Error(ne(482));t=e,t.status="pending",t.then(function(n){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=n}},function(n){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=n}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,iy(t),t}throw rr=e,bo}}function tr(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rr=a,bo):a}}var rr=null;function ny(){if(rr===null)throw Error(ne(459));var t=rr;return rr=null,t}function iy(t){if(t===bo||t===yd)throw Error(ne(483))}var so=null,zl=0;function hc(t){var e=zl;return zl+=1,so===null&&(so=[]),Xv(so,t,e)}function cl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pc(t,e){throw e.$$typeof===f1?Error(ne(525)):(t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Yv(t){function e(d,m){if(t){var _=d.deletions;_===null?(d.deletions=[m],d.flags|=16):_.push(m)}}function a(d,m){if(!t)return null;for(;m!==null;)e(d,m),m=m.sibling;return null}function n(d){for(var m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(d,m){return d=Ri(d,m),d.index=0,d.sibling=null,d}function s(d,m,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<m?(d.flags|=67108866,m):_):(d.flags|=67108866,m)):(d.flags|=1048576,m)}function r(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function o(d,m,_,x){return m===null||m.tag!==6?(m=cp(_,d.mode,x),m.return=d,m):(m=i(m,_),m.return=d,m)}function l(d,m,_,x){var C=_.type;return C===Vr?f(d,m,_.props.children,x,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ns&&tr(C)===m.type)?(m=i(m,_.props),cl(m,_),m.return=d,m):(m=Cc(_.type,_.key,_.props,null,d.mode,x),cl(m,_),m.return=d,m)}function u(d,m,_,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=dp(_,d.mode,x),m.return=d,m):(m=i(m,_.children||[]),m.return=d,m)}function f(d,m,_,x,C){return m===null||m.tag!==7?(m=ir(_,d.mode,x,C),m.return=d,m):(m=i(m,_),m.return=d,m)}function p(d,m,_){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=cp(""+m,d.mode,_),m.return=d,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ic:return _=Cc(m.type,m.key,m.props,null,d.mode,_),cl(_,m),_.return=d,_;case ml:return m=dp(m,d.mode,_),m.return=d,m;case ns:return m=tr(m),p(d,m,_)}if(gl(m)||ll(m))return m=ir(m,d.mode,_,null),m.return=d,m;if(typeof m.then=="function")return p(d,hc(m),_);if(m.$$typeof===Li)return p(d,fc(d,m),_);pc(d,m)}return null}function c(d,m,_,x){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return C!==null?null:o(d,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ic:return _.key===C?l(d,m,_,x):null;case ml:return _.key===C?u(d,m,_,x):null;case ns:return _=tr(_),c(d,m,_,x)}if(gl(_)||ll(_))return C!==null?null:f(d,m,_,x,null);if(typeof _.then=="function")return c(d,m,hc(_),x);if(_.$$typeof===Li)return c(d,m,fc(d,_),x);pc(d,_)}return null}function h(d,m,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return d=d.get(_)||null,o(m,d,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ic:return d=d.get(x.key===null?_:x.key)||null,l(m,d,x,C);case ml:return d=d.get(x.key===null?_:x.key)||null,u(m,d,x,C);case ns:return x=tr(x),h(d,m,_,x,C)}if(gl(x)||ll(x))return d=d.get(_)||null,f(m,d,x,C,null);if(typeof x.then=="function")return h(d,m,_,hc(x),C);if(x.$$typeof===Li)return h(d,m,_,fc(m,x),C);pc(m,x)}return null}function v(d,m,_,x){for(var C=null,A=null,L=m,y=m=0,E=null;L!==null&&y<_.length;y++){L.index>y?(E=L,L=null):E=L.sibling;var I=c(d,L,_[y],x);if(I===null){L===null&&(L=E);break}t&&L&&I.alternate===null&&e(d,L),m=s(I,m,y),A===null?C=I:A.sibling=I,A=I,L=E}if(y===_.length)return a(d,L),ht&&Ci(d,y),C;if(L===null){for(;y<_.length;y++)L=p(d,_[y],x),L!==null&&(m=s(L,m,y),A===null?C=L:A.sibling=L,A=L);return ht&&Ci(d,y),C}for(L=n(L);y<_.length;y++)E=h(L,d,y,_[y],x),E!==null&&(t&&E.alternate!==null&&L.delete(E.key===null?y:E.key),m=s(E,m,y),A===null?C=E:A.sibling=E,A=E);return t&&L.forEach(function(P){return e(d,P)}),ht&&Ci(d,y),C}function M(d,m,_,x){if(_==null)throw Error(ne(151));for(var C=null,A=null,L=m,y=m=0,E=null,I=_.next();L!==null&&!I.done;y++,I=_.next()){L.index>y?(E=L,L=null):E=L.sibling;var P=c(d,L,I.value,x);if(P===null){L===null&&(L=E);break}t&&L&&P.alternate===null&&e(d,L),m=s(P,m,y),A===null?C=P:A.sibling=P,A=P,L=E}if(I.done)return a(d,L),ht&&Ci(d,y),C;if(L===null){for(;!I.done;y++,I=_.next())I=p(d,I.value,x),I!==null&&(m=s(I,m,y),A===null?C=I:A.sibling=I,A=I);return ht&&Ci(d,y),C}for(L=n(L);!I.done;y++,I=_.next())I=h(L,d,y,I.value,x),I!==null&&(t&&I.alternate!==null&&L.delete(I.key===null?y:I.key),m=s(I,m,y),A===null?C=I:A.sibling=I,A=I);return t&&L.forEach(function(O){return e(d,O)}),ht&&Ci(d,y),C}function g(d,m,_,x){if(typeof _=="object"&&_!==null&&_.type===Vr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ic:e:{for(var C=_.key;m!==null;){if(m.key===C){if(C=_.type,C===Vr){if(m.tag===7){a(d,m.sibling),x=i(m,_.props.children),x.return=d,d=x;break e}}else if(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ns&&tr(C)===m.type){a(d,m.sibling),x=i(m,_.props),cl(x,_),x.return=d,d=x;break e}a(d,m);break}else e(d,m);m=m.sibling}_.type===Vr?(x=ir(_.props.children,d.mode,x,_.key),x.return=d,d=x):(x=Cc(_.type,_.key,_.props,null,d.mode,x),cl(x,_),x.return=d,d=x)}return r(d);case ml:e:{for(C=_.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){a(d,m.sibling),x=i(m,_.children||[]),x.return=d,d=x;break e}else{a(d,m);break}else e(d,m);m=m.sibling}x=dp(_,d.mode,x),x.return=d,d=x}return r(d);case ns:return _=tr(_),g(d,m,_,x)}if(gl(_))return v(d,m,_,x);if(ll(_)){if(C=ll(_),typeof C!="function")throw Error(ne(150));return _=C.call(_),M(d,m,_,x)}if(typeof _.then=="function")return g(d,m,hc(_),x);if(_.$$typeof===Li)return g(d,m,fc(d,_),x);pc(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,m!==null&&m.tag===6?(a(d,m.sibling),x=i(m,_),x.return=d,d=x):(a(d,m),x=cp(_,d.mode,x),x.return=d,d=x),r(d)):a(d,m)}return function(d,m,_,x){try{zl=0;var C=g(d,m,_,x);return so=null,C}catch(L){if(L===bo||L===yd)throw L;var A=un(29,L,null,d.mode);return A.lanes=x,A.return=d,A}finally{}}}var cr=Yv(!0),Zv=Yv(!1),is=!1;function Ym(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function em(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function gs(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xs(t,e,a){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,(vt&2)!==0){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.pending=e,e=Vc(t),zv(t,null,a),e}return xd(t,n,e,a),Vc(t)}function Tl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,fv(t,a)}}function hp(t,e){var a=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var r={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=r:s=s.next=r,a=a.next}while(a!==null);s===null?i=s=e:s=s.next=e}else i=s=e;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var tm=!1;function El(){if(tm){var t=io;if(t!==null)throw t}}function Cl(t,e,a,n){tm=!1;var i=t.updateQueue;is=!1;var s=i.firstBaseUpdate,r=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,r===null?s=u:r.next=u,r=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;r=0,f=u=l=null,o=s;do{var c=o.lane&-536870913,h=c!==o.lane;if(h?(ut&c)===c:(n&c)===c){c!==0&&c===fo&&(tm=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var v=t,M=o;c=e;var g=a;switch(M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(g,p,c);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,c=typeof v=="function"?v.call(g,p,c):v,c==null)break e;p=zt({},p,c);break e;case 2:is=!0}}c=o.callback,c!==null&&(t.flags|=64,h&&(t.flags|=8192),h=i.callbacks,h===null?i.callbacks=[c]:h.push(c))}else h={lane:c,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=h,l=p):f=f.next=h,r|=c;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);f===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,s===null&&(i.shared.lanes=0),Cs|=r,t.lanes=r,t.memoizedState=p}}function Kv(t,e){if(typeof t!="function")throw Error(ne(191,t));t.call(e)}function Jv(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Kv(a[t],e)}var ho=oi(null),Yc=oi(0);function sy(t,e){t=Fi,Ut(Yc,t),Ut(ho,e),Fi=t|e.baseLanes}function am(){Ut(Yc,Fi),Ut(ho,ho.current)}function Zm(){Fi=Yc.current,va(ho),va(Yc)}var gn=oi(null),Nn=null;function rs(t){var e=t.alternate;Ut(na,na.current&1),Ut(gn,t),Nn===null&&(e===null||ho.current!==null||e.memoizedState!==null)&&(Nn=t)}function nm(t){Ut(na,na.current),Ut(gn,t),Nn===null&&(Nn=t)}function Qv(t){t.tag===22?(Ut(na,na.current),Ut(gn,t),Nn===null&&(Nn=t)):os(t)}function os(){Ut(na,na.current),Ut(gn,gn.current)}function ln(t){va(gn),Nn===t&&(Nn=null),va(na)}var na=oi(0);function Zc(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mm(a)||bm(a)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bi=0,et=null,At=null,ra=null,Kc=!1,ro=!1,dr=!1,Jc=0,Hl=0,oo=null,AT=0;function jt(){throw Error(ne(321))}function Km(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!mn(t[a],e[a]))return!1;return!0}function Jm(t,e,a,n,i,s){return Bi=s,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,We.H=t===null||t.memoizedState===null?LS:og,dr=!1,s=a(n,i),dr=!1,ro&&(s=$v(e,a,n,i)),jv(t),s}function jv(t){We.H=kl;var e=At!==null&&At.next!==null;if(Bi=0,ra=At=et=null,Kc=!1,Hl=0,oo=null,e)throw Error(ne(300));t===null||ua||(t=t.dependencies,t!==null&&Wc(t)&&(ua=!0))}function $v(t,e,a,n){et=t;var i=0;do{if(ro&&(oo=null),Hl=0,ro=!1,25<=i)throw Error(ne(301));if(i+=1,ra=At=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}We.H=wS,s=e(a,n)}while(ro);return s}function LT(){var t=We.H,e=t.useState()[0];return e=typeof e.then=="function"?eu(e):e,t=t.useState()[0],(At!==null?At.memoizedState:null)!==t&&(et.flags|=1024),e}function Qm(){var t=Jc!==0;return Jc=0,t}function jm(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function $m(t){if(Kc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Kc=!1}Bi=0,ra=At=et=null,ro=!1,Hl=Jc=0,oo=null}function ka(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ra===null?et.memoizedState=ra=t:ra=ra.next=t,ra}function ia(){if(At===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=ra===null?et.memoizedState:ra.next;if(e!==null)ra=e,At=t;else{if(t===null)throw et.alternate===null?Error(ne(467)):Error(ne(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},ra===null?et.memoizedState=ra=t:ra=ra.next=t}return ra}function vd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eu(t){var e=Hl;return Hl+=1,oo===null&&(oo=[]),t=Xv(oo,t,e),e=et,(ra===null?e.memoizedState:ra.next)===null&&(e=e.alternate,We.H=e===null||e.memoizedState===null?LS:og),t}function Sd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eu(t);if(t.$$typeof===Li)return Aa(t)}throw Error(ne(438,String(t)))}function eg(t){var e=null,a=et.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var n=et.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(e={data:n.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=vd(),et.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),n=0;n<t;n++)a[n]=h1;return e.index++,a}function Ni(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=ia();return tg(e,At,t)}function tg(t,e,a){var n=t.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=a;var i=t.baseQueue,s=n.pending;if(s!==null){if(i!==null){var r=i.next;i.next=s.next,s.next=r}e.baseQueue=i=s,n.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var o=r=null,l=null,u=e,f=!1;do{var p=u.lane&-536870913;if(p!==u.lane?(ut&p)===p:(Bi&p)===p){var c=u.revertLane;if(c===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===fo&&(f=!0);else if((Bi&c)===c){u=u.next,c===fo&&(f=!0);continue}else p={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=p,r=s):l=l.next=p,et.lanes|=c,Cs|=c;p=u.action,dr&&a(s,p),s=u.hasEagerState?u.eagerState:a(s,p)}else c={lane:p,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(o=l=c,r=s):l=l.next=c,et.lanes|=p,Cs|=p;u=u.next}while(u!==null&&u!==e);if(l===null?r=s:l.next=o,!mn(s,t.memoizedState)&&(ua=!0,f&&(a=io,a!==null)))throw a;t.memoizedState=s,t.baseState=r,t.baseQueue=l,n.lastRenderedState=s}return i===null&&(n.lanes=0),[t.memoizedState,n.dispatch]}function pp(t){var e=ia(),a=e.queue;if(a===null)throw Error(ne(311));a.lastRenderedReducer=t;var n=a.dispatch,i=a.pending,s=e.memoizedState;if(i!==null){a.pending=null;var r=i=i.next;do s=t(s,r.action),r=r.next;while(r!==i);mn(s,e.memoizedState)||(ua=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),a.lastRenderedState=s}return[s,n]}function eS(t,e,a){var n=et,i=ia(),s=ht;if(s){if(a===void 0)throw Error(ne(407));a=a()}else a=e();var r=!mn((At||i).memoizedState,a);if(r&&(i.memoizedState=a,ua=!0),i=i.queue,ag(nS.bind(null,n,i,t),[t]),i.getSnapshot!==e||r||ra!==null&&ra.memoizedState.tag&1){if(n.flags|=2048,po(9,{destroy:void 0},aS.bind(null,n,i,a,e),null),It===null)throw Error(ne(349));s||(Bi&127)!==0||tS(n,e,a)}return a}function tS(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=et.updateQueue,e===null?(e=vd(),et.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function aS(t,e,a,n){e.value=a,e.getSnapshot=n,iS(e)&&sS(t)}function nS(t,e,a){return a(function(){iS(e)&&sS(t)})}function iS(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!mn(t,a)}catch{return!0}}function sS(t){var e=gr(t,2);e!==null&&ja(e,t,2)}function im(t){var e=ka();if(typeof t=="function"){var a=t;if(t=a(),dr){us(!0);try{a()}finally{us(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},e}function rS(t,e,a,n){return t.baseState=a,tg(t,At,typeof n=="function"?n:Ni)}function wT(t,e,a,n,i){if(Md(t))throw Error(ne(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};We.T!==null?a(!0):s.isTransition=!1,n(s),a=e.pending,a===null?(s.next=e.pending=s,oS(e,s)):(s.next=a.next,e.pending=a.next=s)}}function oS(t,e){var a=e.action,n=e.payload,i=t.state;if(e.isTransition){var s=We.T,r={};We.T=r;try{var o=a(i,n),l=We.S;l!==null&&l(r,o),ry(t,e,o)}catch(u){sm(t,e,u)}finally{s!==null&&r.types!==null&&(s.types=r.types),We.T=s}}else try{s=a(i,n),ry(t,e,s)}catch(u){sm(t,e,u)}}function ry(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){oy(t,e,n)},function(n){return sm(t,e,n)}):oy(t,e,a)}function oy(t,e,a){e.status="fulfilled",e.value=a,lS(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,oS(t,a)))}function sm(t,e,a){var n=t.pending;if(t.pending=null,n!==null){n=n.next;do e.status="rejected",e.reason=a,lS(e),e=e.next;while(e!==n)}t.action=null}function lS(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function uS(t,e){return e}function ly(t,e){if(ht){var a=It.formState;if(a!==null){e:{var n=et;if(ht){if(Ft){t:{for(var i=Ft,s=Bn;i.nodeType!==8;){if(!s){i=null;break t}if(i=On(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ft=On(i.nextSibling),n=i.data==="F!";break e}}Ts(n)}n=!1}n&&(e=a[0])}}return a=ka(),a.memoizedState=a.baseState=e,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uS,lastRenderedState:e},a.queue=n,a=ES.bind(null,et,n),n.dispatch=a,n=im(!1),s=rg.bind(null,et,!1,n.queue),n=ka(),i={state:e,dispatch:null,action:t,pending:null},n.queue=i,a=wT.bind(null,et,i,s,a),i.dispatch=a,n.memoizedState=t,[e,a,!1]}function uy(t){var e=ia();return cS(e,At,t)}function cS(t,e,a){if(e=tg(t,e,uS)[0],t=Lc(Ni)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var n=eu(e)}catch(r){throw r===bo?yd:r}else n=e;e=ia();var i=e.queue,s=i.dispatch;return a!==e.memoizedState&&(et.flags|=2048,po(9,{destroy:void 0},IT.bind(null,i,a),null)),[n,s,t]}function IT(t,e){t.action=e}function cy(t){var e=ia(),a=At;if(a!==null)return cS(e,a,t);ia(),e=e.memoizedState,a=ia();var n=a.queue.dispatch;return a.memoizedState=t,[e,n,!1]}function po(t,e,a,n){return t={tag:t,create:a,deps:n,inst:e,next:null},e=et.updateQueue,e===null&&(e=vd(),et.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(n=a.next,a.next=t,t.next=n,e.lastEffect=t),t}function dS(){return ia().memoizedState}function wc(t,e,a,n){var i=ka();et.flags|=t,i.memoizedState=po(1|e,{destroy:void 0},a,n===void 0?null:n)}function _d(t,e,a,n){var i=ia();n=n===void 0?null:n;var s=i.memoizedState.inst;At!==null&&n!==null&&Km(n,At.memoizedState.deps)?i.memoizedState=po(e,s,a,n):(et.flags|=t,i.memoizedState=po(1|e,s,a,n))}function dy(t,e){wc(8390656,8,t,e)}function ag(t,e){_d(2048,8,t,e)}function RT(t){et.flags|=4;var e=et.updateQueue;if(e===null)e=vd(),et.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function fS(t){var e=ia().memoizedState;return RT({ref:e,nextImpl:t}),function(){if((vt&2)!==0)throw Error(ne(440));return e.impl.apply(void 0,arguments)}}function hS(t,e){return _d(4,2,t,e)}function pS(t,e){return _d(4,4,t,e)}function mS(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gS(t,e,a){a=a!=null?a.concat([t]):null,_d(4,4,mS.bind(null,e,t),a)}function ng(){}function xS(t,e){var a=ia();e=e===void 0?null:e;var n=a.memoizedState;return e!==null&&Km(e,n[1])?n[0]:(a.memoizedState=[t,e],t)}function yS(t,e){var a=ia();e=e===void 0?null:e;var n=a.memoizedState;if(e!==null&&Km(e,n[1]))return n[0];if(n=t(),dr){us(!0);try{t()}finally{us(!1)}}return a.memoizedState=[n,e],n}function ig(t,e,a){return a===void 0||(Bi&1073741824)!==0&&(ut&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=r_(),et.lanes|=t,Cs|=t,a)}function vS(t,e,a,n){return mn(a,e)?a:ho.current!==null?(t=ig(t,a,n),mn(t,e)||(ua=!0),t):(Bi&42)===0||(Bi&1073741824)!==0&&(ut&261930)===0?(ua=!0,t.memoizedState=a):(t=r_(),et.lanes|=t,Cs|=t,e)}function SS(t,e,a,n,i){var s=St.p;St.p=s!==0&&8>s?s:8;var r=We.T,o={};We.T=o,rg(t,!1,e,a);try{var l=i(),u=We.S;if(u!==null&&u(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=CT(l,n);Al(t,e,f,pn(t))}else Al(t,e,n,pn(t))}catch(p){Al(t,e,{then:function(){},status:"rejected",reason:p},pn())}finally{St.p=s,r!==null&&o.types!==null&&(r.types=o.types),We.T=r}}function DT(){}function rm(t,e,a,n){if(t.tag!==5)throw Error(ne(476));var i=_S(t).queue;SS(t,i,e,nr,a===null?DT:function(){return MS(t),a(n)})}function _S(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:nr,baseState:nr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:nr},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function MS(t){var e=_S(t);e.next===null&&(e=t.alternate.memoizedState),Al(t,e.next.queue,{},pn())}function sg(){return Aa(ql)}function bS(){return ia().memoizedState}function TS(){return ia().memoizedState}function PT(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=pn();t=gs(a);var n=xs(e,t,a);n!==null&&(ja(n,e,a),Tl(n,e,a)),e={cache:qm()},t.payload=e;return}e=e.return}}function UT(t,e,a){var n=pn();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Md(t)?CS(e,a):(a=Hm(t,e,a,n),a!==null&&(ja(a,t,n),AS(a,e,n)))}function ES(t,e,a){var n=pn();Al(t,e,a,n)}function Al(t,e,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Md(t))CS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var r=e.lastRenderedState,o=s(r,a);if(i.hasEagerState=!0,i.eagerState=o,mn(o,r))return xd(t,e,i,0),It===null&&gd(),!1}catch{}finally{}if(a=Hm(t,e,i,n),a!==null)return ja(a,t,n),AS(a,e,n),!0}return!1}function rg(t,e,a,n){if(n={lane:2,revertLane:mg(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Md(t)){if(e)throw Error(ne(479))}else e=Hm(t,a,n,2),e!==null&&ja(e,t,2)}function Md(t){var e=t.alternate;return t===et||e!==null&&e===et}function CS(t,e){ro=Kc=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function AS(t,e,a){if((a&4194048)!==0){var n=e.lanes;n&=t.pendingLanes,a|=n,e.lanes=a,fv(t,a)}}var kl={readContext:Aa,use:Sd,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt,useHostTransitionStatus:jt,useFormState:jt,useActionState:jt,useOptimistic:jt,useMemoCache:jt,useCacheRefresh:jt};kl.useEffectEvent=jt;var LS={readContext:Aa,use:Sd,useCallback:function(t,e){return ka().memoizedState=[t,e===void 0?null:e],t},useContext:Aa,useEffect:dy,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,wc(4194308,4,mS.bind(null,e,t),a)},useLayoutEffect:function(t,e){return wc(4194308,4,t,e)},useInsertionEffect:function(t,e){wc(4,2,t,e)},useMemo:function(t,e){var a=ka();e=e===void 0?null:e;var n=t();if(dr){us(!0);try{t()}finally{us(!1)}}return a.memoizedState=[n,e],n},useReducer:function(t,e,a){var n=ka();if(a!==void 0){var i=a(e);if(dr){us(!0);try{a(e)}finally{us(!1)}}}else i=e;return n.memoizedState=n.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},n.queue=t,t=t.dispatch=UT.bind(null,et,t),[n.memoizedState,t]},useRef:function(t){var e=ka();return t={current:t},e.memoizedState=t},useState:function(t){t=im(t);var e=t.queue,a=ES.bind(null,et,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:ng,useDeferredValue:function(t,e){var a=ka();return ig(a,t,e)},useTransition:function(){var t=im(!1);return t=SS.bind(null,et,t.queue,!0,!1),ka().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var n=et,i=ka();if(ht){if(a===void 0)throw Error(ne(407));a=a()}else{if(a=e(),It===null)throw Error(ne(349));(ut&127)!==0||tS(n,e,a)}i.memoizedState=a;var s={value:a,getSnapshot:e};return i.queue=s,dy(nS.bind(null,n,s,t),[t]),n.flags|=2048,po(9,{destroy:void 0},aS.bind(null,n,s,a,e),null),a},useId:function(){var t=ka(),e=It.identifierPrefix;if(ht){var a=ii,n=ni;a=(n&~(1<<32-hn(n)-1)).toString(32)+a,e="_"+e+"R_"+a,a=Jc++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=AT++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:sg,useFormState:ly,useActionState:ly,useOptimistic:function(t){var e=ka();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=rg.bind(null,et,!0,a),a.dispatch=e,[t,e]},useMemoCache:eg,useCacheRefresh:function(){return ka().memoizedState=PT.bind(null,et)},useEffectEvent:function(t){var e=ka(),a={impl:t};return e.memoizedState=a,function(){if((vt&2)!==0)throw Error(ne(440));return a.impl.apply(void 0,arguments)}}},og={readContext:Aa,use:Sd,useCallback:xS,useContext:Aa,useEffect:ag,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:yS,useReducer:Lc,useRef:dS,useState:function(){return Lc(Ni)},useDebugValue:ng,useDeferredValue:function(t,e){var a=ia();return vS(a,At.memoizedState,t,e)},useTransition:function(){var t=Lc(Ni)[0],e=ia().memoizedState;return[typeof t=="boolean"?t:eu(t),e]},useSyncExternalStore:eS,useId:bS,useHostTransitionStatus:sg,useFormState:uy,useActionState:uy,useOptimistic:function(t,e){var a=ia();return rS(a,At,t,e)},useMemoCache:eg,useCacheRefresh:TS};og.useEffectEvent=fS;var wS={readContext:Aa,use:Sd,useCallback:xS,useContext:Aa,useEffect:ag,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:yS,useReducer:pp,useRef:dS,useState:function(){return pp(Ni)},useDebugValue:ng,useDeferredValue:function(t,e){var a=ia();return At===null?ig(a,t,e):vS(a,At.memoizedState,t,e)},useTransition:function(){var t=pp(Ni)[0],e=ia().memoizedState;return[typeof t=="boolean"?t:eu(t),e]},useSyncExternalStore:eS,useId:bS,useHostTransitionStatus:sg,useFormState:cy,useActionState:cy,useOptimistic:function(t,e){var a=ia();return At!==null?rS(a,At,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:eg,useCacheRefresh:TS};wS.useEffectEvent=fS;function mp(t,e,a,n){e=t.memoizedState,a=a(n,e),a=a==null?e:zt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var om={enqueueSetState:function(t,e,a){t=t._reactInternals;var n=pn(),i=gs(n);i.payload=e,a!=null&&(i.callback=a),e=xs(t,i,n),e!==null&&(ja(e,t,n),Tl(e,t,n))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var n=pn(),i=gs(n);i.tag=1,i.payload=e,a!=null&&(i.callback=a),e=xs(t,i,n),e!==null&&(ja(e,t,n),Tl(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=pn(),n=gs(a);n.tag=2,e!=null&&(n.callback=e),e=xs(t,n,a),e!==null&&(ja(e,t,a),Tl(e,t,a))}};function fy(t,e,a,n,i,s,r){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,r):e.prototype&&e.prototype.isPureReactComponent?!Nl(a,n)||!Nl(i,s):!0}function hy(t,e,a,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,n),e.state!==t&&om.enqueueReplaceState(e,e.state,null)}function fr(t,e){var a=e;if("ref"in e){a={};for(var n in e)n!=="ref"&&(a[n]=e[n])}if(t=t.defaultProps){a===e&&(a=zt({},a));for(var i in t)a[i]===void 0&&(a[i]=t[i])}return a}function IS(t){Gc(t)}function RS(t){console.error(t)}function DS(t){Gc(t)}function Qc(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(n){setTimeout(function(){throw n})}}function py(t,e,a){try{var n=t.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lm(t,e,a){return a=gs(a),a.tag=3,a.payload={element:null},a.callback=function(){Qc(t,e)},a}function PS(t){return t=gs(t),t.tag=3,t}function US(t,e,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;t.payload=function(){return i(s)},t.callback=function(){py(e,a,n)}}var r=a.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){py(e,a,n),typeof i!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function BT(t,e,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(e=a.alternate,e!==null&&Mo(e,a,i,!0),a=gn.current,a!==null){switch(a.tag){case 31:case 13:return Nn===null?ad():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Xc?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([n]):e.add(n),Cp(t,n,i)),!1;case 22:return a.flags|=65536,n===Xc?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([n]):a.add(n)),Cp(t,n,i)),!1}throw Error(ne(435,a.tag))}return Cp(t,n,i),ad(),!1}if(ht)return e=gn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,n!==Kp&&(t=Error(ne(422),{cause:n}),Fl(Un(t,a)))):(n!==Kp&&(e=Error(ne(423),{cause:n}),Fl(Un(e,a))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,n=Un(n,a),i=lm(t.stateNode,n,i),hp(t,i),$t!==4&&($t=2)),!1;var s=Error(ne(520),{cause:n});if(s=Un(s,a),Il===null?Il=[s]:Il.push(s),$t!==4&&($t=2),e===null)return!0;n=Un(n,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=i&-i,a.lanes|=t,t=lm(a.stateNode,n,t),hp(a,t),!1;case 1:if(e=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ys===null||!ys.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=PS(i),US(i,t,a,n),hp(a,i),!1}a=a.return}while(a!==null);return!1}var lg=Error(ne(461)),ua=!1;function Ta(t,e,a,n){e.child=t===null?Zv(e,null,a,n):cr(e,t.child,a,n)}function my(t,e,a,n,i){a=a.render;var s=e.ref;if("ref"in n){var r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}else r=n;return ur(e),n=Jm(t,e,a,r,s,i),o=Qm(),t!==null&&!ua?(jm(t,e,i),Oi(t,e,i)):(ht&&o&&Gm(e),e.flags|=1,Ta(t,e,n,i),e.child)}function gy(t,e,a,n,i){if(t===null){var s=a.type;return typeof s=="function"&&!km(s)&&s.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=s,BS(t,e,s,n,i)):(t=Cc(a.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!ug(t,i)){var r=s.memoizedProps;if(a=a.compare,a=a!==null?a:Nl,a(r,n)&&t.ref===e.ref)return Oi(t,e,i)}return e.flags|=1,t=Ri(s,n),t.ref=e.ref,t.return=e,e.child=t}function BS(t,e,a,n,i){if(t!==null){var s=t.memoizedProps;if(Nl(s,n)&&t.ref===e.ref)if(ua=!1,e.pendingProps=n=s,ug(t,i))(t.flags&131072)!==0&&(ua=!0);else return e.lanes=t.lanes,Oi(t,e,i)}return um(t,e,a,n,i)}function NS(t,e,a,n){var i=n.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((e.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,t!==null){for(n=e.child=t.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,e.child=null;return xy(t,e,s,a,n)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ac(e,s!==null?s.cachePool:null),s!==null?sy(e,s):am(),Qv(e);else return n=e.lanes=536870912,xy(t,e,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(Ac(e,s.cachePool),sy(e,s),os(e),e.memoizedState=null):(t!==null&&Ac(e,null),am(),os(e));return Ta(t,e,i,a),e.child}function yl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function xy(t,e,a,n,i){var s=Wm();return s=s===null?null:{parent:la._currentValue,pool:s},e.memoizedState={baseLanes:a,cachePool:s},t!==null&&Ac(e,null),am(),Qv(e),t!==null&&Mo(t,e,n,!0),e.childLanes=i,null}function Ic(t,e){return e=jc({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function yy(t,e,a){return cr(e,t.child,null,a),t=Ic(e,e.pendingProps),t.flags|=2,ln(e),e.memoizedState=null,t}function NT(t,e,a){var n=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ht){if(n.mode==="hidden")return t=Ic(e,n),e.lanes=536870912,yl(null,t);if(nm(e),(t=Ft)?(t=L_(t,Bn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:bs!==null?{id:ni,overflow:ii}:null,retryLane:536870912,hydrationErrors:null},a=kv(t),a.return=e,e.child=a,Ca=e,Ft=null)):t=null,t===null)throw Ts(e);return e.lanes=536870912,null}return Ic(e,n)}var s=t.memoizedState;if(s!==null){var r=s.dehydrated;if(nm(e),i)if(e.flags&256)e.flags&=-257,e=yy(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(ne(558));else if(ua||Mo(t,e,a,!1),i=(a&t.childLanes)!==0,ua||i){if(n=It,n!==null&&(r=hv(n,a),r!==0&&r!==s.retryLane))throw s.retryLane=r,gr(t,r),ja(n,t,r),lg;ad(),e=yy(t,e,a)}else t=s.treeContext,Ft=On(r.nextSibling),Ca=e,ht=!0,ms=null,Bn=!1,t!==null&&Vv(e,t),e=Ic(e,n),e.flags|=4096;return e}return t=Ri(t.child,{mode:n.mode,children:n.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Rc(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(ne(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function um(t,e,a,n,i){return ur(e),a=Jm(t,e,a,n,void 0,i),n=Qm(),t!==null&&!ua?(jm(t,e,i),Oi(t,e,i)):(ht&&n&&Gm(e),e.flags|=1,Ta(t,e,a,i),e.child)}function vy(t,e,a,n,i,s){return ur(e),e.updateQueue=null,a=$v(e,n,a,i),jv(t),n=Qm(),t!==null&&!ua?(jm(t,e,s),Oi(t,e,s)):(ht&&n&&Gm(e),e.flags|=1,Ta(t,e,a,s),e.child)}function Sy(t,e,a,n,i){if(ur(e),e.stateNode===null){var s=Qr,r=a.contextType;typeof r=="object"&&r!==null&&(s=Aa(r)),s=new a(n,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=om,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=n,s.state=e.memoizedState,s.refs={},Ym(e),r=a.contextType,s.context=typeof r=="object"&&r!==null?Aa(r):Qr,s.state=e.memoizedState,r=a.getDerivedStateFromProps,typeof r=="function"&&(mp(e,a,r,n),s.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&om.enqueueReplaceState(s,s.state,null),Cl(e,n,s,i),El(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,l=fr(a,o);s.props=l;var u=s.context,f=a.contextType;r=Qr,typeof f=="object"&&f!==null&&(r=Aa(f));var p=a.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||u!==r)&&hy(e,s,n,r),is=!1;var c=e.memoizedState;s.state=c,Cl(e,n,s,i),El(),u=e.memoizedState,o||c!==u||is?(typeof p=="function"&&(mp(e,a,p,n),u=e.memoizedState),(l=is||fy(e,a,l,n,c,u,r))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=u),s.props=n,s.state=u,s.context=r,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,em(t,e),r=e.memoizedProps,f=fr(a,r),s.props=f,p=e.pendingProps,c=s.context,u=a.contextType,l=Qr,typeof u=="object"&&u!==null&&(l=Aa(u)),o=a.getDerivedStateFromProps,(u=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==p||c!==l)&&hy(e,s,n,l),is=!1,c=e.memoizedState,s.state=c,Cl(e,n,s,i),El();var h=e.memoizedState;r!==p||c!==h||is||t!==null&&t.dependencies!==null&&Wc(t.dependencies)?(typeof o=="function"&&(mp(e,a,o,n),h=e.memoizedState),(f=is||fy(e,a,f,n,c,h,l)||t!==null&&t.dependencies!==null&&Wc(t.dependencies))?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,h,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,h,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=h),s.props=n,s.state=h,s.context=l,n=f):(typeof s.componentDidUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),n=!1)}return s=n,Rc(t,e),n=(e.flags&128)!==0,s||n?(s=e.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&n?(e.child=cr(e,t.child,null,i),e.child=cr(e,null,a,i)):Ta(t,e,a,i),e.memoizedState=s.state,t=e.child):t=Oi(t,e,i),t}function _y(t,e,a,n){return lr(),e.flags|=256,Ta(t,e,a,n),e.child}var gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xp(t){return{baseLanes:t,cachePool:Wv()}}function yp(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=cn),t}function OS(t,e,a){var n=e.pendingProps,i=!1,s=(e.flags&128)!==0,r;if((r=s)||(r=t!==null&&t.memoizedState===null?!1:(na.current&2)!==0),r&&(i=!0,e.flags&=-129),r=(e.flags&32)!==0,e.flags&=-33,t===null){if(ht){if(i?rs(e):os(e),(t=Ft)?(t=L_(t,Bn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:bs!==null?{id:ni,overflow:ii}:null,retryLane:536870912,hydrationErrors:null},a=kv(t),a.return=e,e.child=a,Ca=e,Ft=null)):t=null,t===null)throw Ts(e);return bm(t)?e.lanes=32:e.lanes=536870912,null}var o=n.children;return n=n.fallback,i?(os(e),i=e.mode,o=jc({mode:"hidden",children:o},i),n=ir(n,i,a,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n=e.child,n.memoizedState=xp(a),n.childLanes=yp(t,r,a),e.memoizedState=gp,yl(null,n)):(rs(e),cm(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(s)e.flags&256?(rs(e),e.flags&=-257,e=vp(t,e,a)):e.memoizedState!==null?(os(e),e.child=t.child,e.flags|=128,e=null):(os(e),o=n.fallback,i=e.mode,n=jc({mode:"visible",children:n.children},i),o=ir(o,i,a,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,cr(e,t.child,null,a),n=e.child,n.memoizedState=xp(a),n.childLanes=yp(t,r,a),e.memoizedState=gp,e=yl(null,n));else if(rs(e),bm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,n=Error(ne(419)),n.stack="",n.digest=r,Fl({value:n,source:null,stack:null}),e=vp(t,e,a)}else if(ua||Mo(t,e,a,!1),r=(a&t.childLanes)!==0,ua||r){if(r=It,r!==null&&(n=hv(r,a),n!==0&&n!==l.retryLane))throw l.retryLane=n,gr(t,n),ja(r,t,n),lg;Mm(o)||ad(),e=vp(t,e,a)}else Mm(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,Ft=On(o.nextSibling),Ca=e,ht=!0,ms=null,Bn=!1,t!==null&&Vv(e,t),e=cm(e,n.children),e.flags|=4096);return e}return i?(os(e),o=n.fallback,i=e.mode,l=t.child,u=l.sibling,n=Ri(l,{mode:"hidden",children:n.children}),n.subtreeFlags=l.subtreeFlags&65011712,u!==null?o=Ri(u,o):(o=ir(o,i,a,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,yl(null,n),n=e.child,o=t.child.memoizedState,o===null?o=xp(a):(i=o.cachePool,i!==null?(l=la._currentValue,i=i.parent!==l?{parent:l,pool:l}:i):i=Wv(),o={baseLanes:o.baseLanes|a,cachePool:i}),n.memoizedState=o,n.childLanes=yp(t,r,a),e.memoizedState=gp,yl(t.child,n)):(rs(e),a=t.child,t=a.sibling,a=Ri(a,{mode:"visible",children:n.children}),a.return=e,a.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=a,e.memoizedState=null,a)}function cm(t,e){return e=jc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function jc(t,e){return t=un(22,t,null,e),t.lanes=0,t}function vp(t,e,a){return cr(e,t.child,null,a),t=cm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function My(t,e,a){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Qp(t.return,e,a)}function Sp(t,e,a,n,i,s){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=a,r.tailMode=i,r.treeForkCount=s)}function FS(t,e,a){var n=e.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var r=na.current,o=(r&2)!==0;if(o?(r=r&1|2,e.flags|=128):r&=1,Ut(na,r),Ta(t,e,n,a),n=ht?Ol:0,!o&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&My(t,a,e);else if(t.tag===19)My(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(a=e.child,i=null;a!==null;)t=a.alternate,t!==null&&Zc(t)===null&&(i=a),a=a.sibling;a=i,a===null?(i=e.child,e.child=null):(i=a.sibling,a.sibling=null),Sp(e,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zc(t)===null){e.child=i;break}t=i.sibling,i.sibling=a,a=i,i=t}Sp(e,!0,a,null,s,n);break;case"together":Sp(e,!1,null,null,void 0,n);break;default:e.memoizedState=null}return e.child}function Oi(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),Cs|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(Mo(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,a=Ri(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Ri(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function ug(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Wc(t)))}function OT(t,e,a){switch(e.tag){case 3:Fc(e,e.stateNode.containerInfo),ss(e,la,t.memoizedState.cache),lr();break;case 27:case 5:Fp(e);break;case 4:Fc(e,e.stateNode.containerInfo);break;case 10:ss(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,nm(e),null;break;case 13:var n=e.memoizedState;if(n!==null)return n.dehydrated!==null?(rs(e),e.flags|=128,null):(a&e.child.childLanes)!==0?OS(t,e,a):(rs(e),t=Oi(t,e,a),t!==null?t.sibling:null);rs(e);break;case 19:var i=(t.flags&128)!==0;if(n=(a&e.childLanes)!==0,n||(Mo(t,e,a,!1),n=(a&e.childLanes)!==0),i){if(n)return FS(t,e,a);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ut(na,na.current),n)break;return null;case 22:return e.lanes=0,NS(t,e,a,e.pendingProps);case 24:ss(e,la,t.memoizedState.cache)}return Oi(t,e,a)}function zS(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)ua=!0;else{if(!ug(t,a)&&(e.flags&128)===0)return ua=!1,OT(t,e,a);ua=(t.flags&131072)!==0}else ua=!1,ht&&(e.flags&1048576)!==0&&Gv(e,Ol,e.index);switch(e.lanes=0,e.tag){case 16:e:{var n=e.pendingProps;if(t=tr(e.elementType),e.type=t,typeof t=="function")km(t)?(n=fr(t,n),e.tag=1,e=Sy(null,e,t,n,a)):(e.tag=0,e=um(null,e,t,n,a));else{if(t!=null){var i=t.$$typeof;if(i===Am){e.tag=11,e=my(null,e,t,n,a);break e}else if(i===Lm){e.tag=14,e=gy(null,e,t,n,a);break e}}throw e=Np(t)||t,Error(ne(306,e,""))}}return e;case 0:return um(t,e,e.type,e.pendingProps,a);case 1:return n=e.type,i=fr(n,e.pendingProps),Sy(t,e,n,i,a);case 3:e:{if(Fc(e,e.stateNode.containerInfo),t===null)throw Error(ne(387));n=e.pendingProps;var s=e.memoizedState;i=s.element,em(t,e),Cl(e,n,null,a);var r=e.memoizedState;if(n=r.cache,ss(e,la,n),n!==s.cache&&jp(e,[la],a,!0),El(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=_y(t,e,n,a);break e}else if(n!==i){i=Un(Error(ne(424)),e),Fl(i),e=_y(t,e,n,a);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ft=On(t.firstChild),Ca=e,ht=!0,ms=null,Bn=!0,a=Zv(e,null,n,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(lr(),n===i){e=Oi(t,e,a);break e}Ta(t,e,n,a)}e=e.child}return e;case 26:return Rc(t,e),t===null?(a=qy(e.type,null,e.pendingProps,null))?e.memoizedState=a:ht||(a=e.type,t=e.pendingProps,n=rd(ps.current).createElement(a),n[Ea]=e,n[$a]=t,La(n,a,t),ya(n),e.stateNode=n):e.memoizedState=qy(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Fp(e),t===null&&ht&&(n=e.stateNode=w_(e.type,e.pendingProps,ps.current),Ca=e,Bn=!0,i=Ft,Ls(e.type)?(Tm=i,Ft=On(n.firstChild)):Ft=i),Ta(t,e,e.pendingProps.children,a),Rc(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ht&&((i=n=Ft)&&(n=dE(n,e.type,e.pendingProps,Bn),n!==null?(e.stateNode=n,Ca=e,Ft=On(n.firstChild),Bn=!1,i=!0):i=!1),i||Ts(e)),Fp(e),i=e.type,s=e.pendingProps,r=t!==null?t.memoizedProps:null,n=s.children,Sm(i,s)?n=null:r!==null&&Sm(i,r)&&(e.flags|=32),e.memoizedState!==null&&(i=Jm(t,e,LT,null,null,a),ql._currentValue=i),Rc(t,e),Ta(t,e,n,a),e.child;case 6:return t===null&&ht&&((t=a=Ft)&&(a=fE(a,e.pendingProps,Bn),a!==null?(e.stateNode=a,Ca=e,Ft=null,t=!0):t=!1),t||Ts(e)),null;case 13:return OS(t,e,a);case 4:return Fc(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=cr(e,null,n,a):Ta(t,e,n,a),e.child;case 11:return my(t,e,e.type,e.pendingProps,a);case 7:return Ta(t,e,e.pendingProps,a),e.child;case 8:return Ta(t,e,e.pendingProps.children,a),e.child;case 12:return Ta(t,e,e.pendingProps.children,a),e.child;case 10:return n=e.pendingProps,ss(e,e.type,n.value),Ta(t,e,n.children,a),e.child;case 9:return i=e.type._context,n=e.pendingProps.children,ur(e),i=Aa(i),n=n(i),e.flags|=1,Ta(t,e,n,a),e.child;case 14:return gy(t,e,e.type,e.pendingProps,a);case 15:return BS(t,e,e.type,e.pendingProps,a);case 19:return FS(t,e,a);case 31:return NT(t,e,a);case 22:return NS(t,e,a,e.pendingProps);case 24:return ur(e),n=Aa(la),t===null?(i=Wm(),i===null&&(i=It,s=qm(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),e.memoizedState={parent:n,cache:i},Ym(e),ss(e,la,i)):((t.lanes&a)!==0&&(em(t,e),Cl(e,null,null,a),El()),i=t.memoizedState,s=e.memoizedState,i.parent!==n?(i={parent:n,cache:n},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),ss(e,la,n)):(n=s.cache,ss(e,la,n),n!==i.cache&&jp(e,[la],a,!0))),Ta(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(ne(156,e.tag))}function Mi(t){t.flags|=4}function _p(t,e,a,n,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(u_())t.flags|=8192;else throw rr=Xc,Xm}else t.flags&=-16777217}function by(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!D_(e))if(u_())t.flags|=8192;else throw rr=Xc,Xm}function mc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?cv():536870912,t.lanes|=e,mo|=e)}function dl(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,n=0;if(e)for(var i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=a,e}function FT(t,e,a){var n=e.pendingProps;switch(Vm(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return Ot(e),null;case 3:return a=e.stateNode,n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Di(la),lo(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zr(e)?Mi(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,fp())),Ot(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(Mi(e),s!==null?(Ot(e),by(e,s)):(Ot(e),_p(e,i,null,n,a))):s?s!==t.memoizedState?(Mi(e),Ot(e),by(e,s)):(Ot(e),e.flags&=-16777217):(t=t.memoizedProps,t!==n&&Mi(e),Ot(e),_p(e,i,t,n,a)),null;case 27:if(zc(e),a=ps.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Mi(e);else{if(!n){if(e.stateNode===null)throw Error(ne(166));return Ot(e),null}t=ri.current,zr(e)?jx(e,t):(t=w_(i,n,a),e.stateNode=t,Mi(e))}return Ot(e),null;case 5:if(zc(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==n&&Mi(e);else{if(!n){if(e.stateNode===null)throw Error(ne(166));return Ot(e),null}if(s=ri.current,zr(e))jx(e,s);else{var r=rd(ps.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(i,{is:n.is}):r.createElement(i)}}s[Ea]=e,s[$a]=n;e:for(r=e.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break e;for(;r.sibling===null;){if(r.return===null||r.return===e)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}e.stateNode=s;e:switch(La(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Mi(e)}}return Ot(e),_p(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==n&&Mi(e);else{if(typeof n!="string"&&e.stateNode===null)throw Error(ne(166));if(t=ps.current,zr(e)){if(t=e.stateNode,a=e.memoizedProps,n=null,i=Ca,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}t[Ea]=e,t=!!(t.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||E_(t.nodeValue,a)),t||Ts(e,!0)}else t=rd(t).createTextNode(n),t[Ea]=e,e.stateNode=t}return Ot(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(n=zr(e),a!==null){if(t===null){if(!n)throw Error(ne(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(557));t[Ea]=e}else lr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),t=!1}else a=fp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(ln(e),e):(ln(e),null);if((e.flags&128)!==0)throw Error(ne(558))}return Ot(e),null;case 13:if(n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=zr(e),n!==null&&n.dehydrated!==null){if(t===null){if(!i)throw Error(ne(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ne(317));i[Ea]=e}else lr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ot(e),i=!1}else i=fp(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(ln(e),e):(ln(e),null)}return ln(e),(e.flags&128)!==0?(e.lanes=a,e):(a=n!==null,t=t!==null&&t.memoizedState!==null,a&&(n=e.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),mc(e,e.updateQueue),Ot(e),null);case 4:return lo(),t===null&&gg(e.stateNode.containerInfo),Ot(e),null;case 10:return Di(e.type),Ot(e),null;case 19:if(va(na),n=e.memoizedState,n===null)return Ot(e),null;if(i=(e.flags&128)!==0,s=n.rendering,s===null)if(i)dl(n,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Zc(t),s!==null){for(e.flags|=128,dl(n,!1),t=s.updateQueue,e.updateQueue=t,mc(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Hv(a,t),a=a.sibling;return Ut(na,na.current&1|2),ht&&Ci(e,n.treeForkCount),e.child}t=t.sibling}n.tail!==null&&dn()>ed&&(e.flags|=128,i=!0,dl(n,!1),e.lanes=4194304)}else{if(!i)if(t=Zc(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,mc(e,t),dl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ht)return Ot(e),null}else 2*dn()-n.renderingStartTime>ed&&a!==536870912&&(e.flags|=128,i=!0,dl(n,!1),e.lanes=4194304);n.isBackwards?(s.sibling=e.child,e.child=s):(t=n.last,t!==null?t.sibling=s:e.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=dn(),t.sibling=null,a=na.current,Ut(na,i?a&1|2:a&1),ht&&Ci(e,n.treeForkCount),t):(Ot(e),null);case 22:case 23:return ln(e),Zm(),n=e.memoizedState!==null,t!==null?t.memoizedState!==null!==n&&(e.flags|=8192):n&&(e.flags|=8192),n?(a&536870912)!==0&&(e.flags&128)===0&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),a=e.updateQueue,a!==null&&mc(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==a&&(e.flags|=2048),t!==null&&va(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Di(la),Ot(e),null;case 25:return null;case 30:return null}throw Error(ne(156,e.tag))}function zT(t,e){switch(Vm(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Di(la),lo(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return zc(e),null;case 31:if(e.memoizedState!==null){if(ln(e),e.alternate===null)throw Error(ne(340));lr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ln(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));lr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return va(na),null;case 4:return lo(),null;case 10:return Di(e.type),null;case 22:case 23:return ln(e),Zm(),t!==null&&va(sr),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Di(la),null;case 25:return null;default:return null}}function HS(t,e){switch(Vm(e),e.tag){case 3:Di(la),lo();break;case 26:case 27:case 5:zc(e);break;case 4:lo();break;case 31:e.memoizedState!==null&&ln(e);break;case 13:ln(e);break;case 19:va(na);break;case 10:Di(e.type);break;case 22:case 23:ln(e),Zm(),t!==null&&va(sr);break;case 24:Di(la)}}function tu(t,e){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){n=void 0;var s=a.create,r=a.inst;n=s(),r.destroy=n}a=a.next}while(a!==i)}}catch(o){bt(e,e.return,o)}}function Es(t,e,a){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&t)===t){var r=n.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,i=e;var l=a,u=o;try{u()}catch(f){bt(i,l,f)}}}n=n.next}while(n!==s)}}catch(f){bt(e,e.return,f)}}function kS(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Jv(e,a)}catch(n){bt(t,t.return,n)}}}function GS(t,e,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(n){bt(t,e,n)}}function Ll(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var n=t.stateNode;break;case 30:n=t.stateNode;break;default:n=t.stateNode}typeof a=="function"?t.refCleanup=a(n):a.current=n}}catch(i){bt(t,e,i)}}function si(t,e){var a=t.ref,n=t.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){bt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){bt(t,e,i)}else a.current=null}function VS(t){var e=t.type,a=t.memoizedProps,n=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){bt(t,t.return,i)}}function Mp(t,e,a){try{var n=t.stateNode;sE(n,t.type,a,e),n[$a]=e}catch(i){bt(t,t.return,i)}}function qS(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ls(t.type)||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ls(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dm(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=wi));else if(n!==4&&(n===27&&Ls(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(dm(t,e,a),t=t.sibling;t!==null;)dm(t,e,a),t=t.sibling}function $c(t,e,a){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(n!==4&&(n===27&&Ls(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($c(t,e,a),t=t.sibling;t!==null;)$c(t,e,a),t=t.sibling}function WS(t){var e=t.stateNode,a=t.memoizedProps;try{for(var n=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);La(e,n,a),e[Ea]=t,e[$a]=a}catch(s){bt(t,t.return,s)}}var Ai=!1,oa=!1,Tp=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,xa=null;function HT(t,e){if(t=t.containerInfo,ym=cd,t=Dv(t),Fm(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var r=0,o=-1,l=-1,u=0,f=0,p=t,c=null;t:for(;;){for(var h;p!==a||i!==0&&p.nodeType!==3||(o=r+i),p!==s||n!==0&&p.nodeType!==3||(l=r+n),p.nodeType===3&&(r+=p.nodeValue.length),(h=p.firstChild)!==null;)c=p,p=h;for(;;){if(p===t)break t;if(c===a&&++u===i&&(o=r),c===s&&++f===n&&(l=r),(h=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=h}a=o===-1||l===-1?null:{start:o,end:l}}else a=null}a=a||{start:0,end:0}}else a=null;for(vm={focusedElem:t,selectionRange:a},cd=!1,xa=e;xa!==null;)if(e=xa,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xa=t;else for(;xa!==null;){switch(e=xa,s=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)i=t[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&s!==null){t=void 0,a=e,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var v=fr(a.type,i);t=n.getSnapshotBeforeUpdate(v,s),n.__reactInternalSnapshotBeforeUpdate=t}catch(M){bt(a,a.return,M)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)_m(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_m(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(ne(163))}if(t=e.sibling,t!==null){t.return=e.return,xa=t;break}xa=e.return}}function XS(t,e,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ti(t,a),n&4&&tu(5,a);break;case 1:if(Ti(t,a),n&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(r){bt(a,a.return,r)}else{var i=fr(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(r){bt(a,a.return,r)}}n&64&&kS(a),n&512&&Ll(a,a.return);break;case 3:if(Ti(t,a),n&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Jv(t,e)}catch(r){bt(a,a.return,r)}}break;case 27:e===null&&n&4&&WS(a);case 26:case 5:Ti(t,a),e===null&&n&4&&VS(a),n&512&&Ll(a,a.return);break;case 12:Ti(t,a);break;case 31:Ti(t,a),n&4&&KS(t,a);break;case 13:Ti(t,a),n&4&&JS(t,a),n&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=KT.bind(null,a),hE(t,a))));break;case 22:if(n=a.memoizedState!==null||Ai,!n){e=e!==null&&e.memoizedState!==null||oa,i=Ai;var s=oa;Ai=n,(oa=e)&&!s?Ei(t,a,(a.subtreeFlags&8772)!==0):Ti(t,a),Ai=i,oa=s}break;case 30:break;default:Ti(t,a)}}function YS(t){var e=t.alternate;e!==null&&(t.alternate=null,YS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Dm(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xt=null,Ja=!1;function bi(t,e,a){for(a=a.child;a!==null;)ZS(t,e,a),a=a.sibling}function ZS(t,e,a){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(Zl,a)}catch{}switch(a.tag){case 26:oa||si(a,e),bi(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:oa||si(a,e);var n=Xt,i=Ja;Ls(a.type)&&(Xt=a.stateNode,Ja=!1),bi(t,e,a),Dl(a.stateNode),Xt=n,Ja=i;break;case 5:oa||si(a,e);case 6:if(n=Xt,i=Ja,Xt=null,bi(t,e,a),Xt=n,Ja=i,Xt!==null)if(Ja)try{(Xt.nodeType===9?Xt.body:Xt.nodeName==="HTML"?Xt.ownerDocument.body:Xt).removeChild(a.stateNode)}catch(s){bt(a,e,s)}else try{Xt.removeChild(a.stateNode)}catch(s){bt(a,e,s)}break;case 18:Xt!==null&&(Ja?(t=Xt,zy(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vo(t)):zy(Xt,a.stateNode));break;case 4:n=Xt,i=Ja,Xt=a.stateNode.containerInfo,Ja=!0,bi(t,e,a),Xt=n,Ja=i;break;case 0:case 11:case 14:case 15:Es(2,a,e),oa||Es(4,a,e),bi(t,e,a);break;case 1:oa||(si(a,e),n=a.stateNode,typeof n.componentWillUnmount=="function"&&GS(a,e,n)),bi(t,e,a);break;case 21:bi(t,e,a);break;case 22:oa=(n=oa)||a.memoizedState!==null,bi(t,e,a),oa=n;break;default:bi(t,e,a)}}function KS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vo(t)}catch(a){bt(e,e.return,a)}}}function JS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vo(t)}catch(a){bt(e,e.return,a)}}function kT(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Ty),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Ty),e;default:throw Error(ne(435,t.tag))}}function gc(t,e){var a=kT(t);e.forEach(function(n){if(!a.has(n)){a.add(n);var i=JT.bind(null,t,n);n.then(i,i)}})}function Za(t,e){var a=e.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=t,r=e,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Ls(o.type)){Xt=o.stateNode,Ja=!1;break e}break;case 5:Xt=o.stateNode,Ja=!1;break e;case 3:case 4:Xt=o.stateNode.containerInfo,Ja=!0;break e}o=o.return}if(Xt===null)throw Error(ne(160));ZS(s,r,i),Xt=null,Ja=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)QS(e,t),e=e.sibling}var qn=null;function QS(t,e){var a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Za(e,t),Ka(t),n&4&&(Es(3,t,t.return),tu(3,t),Es(5,t,t.return));break;case 1:Za(e,t),Ka(t),n&512&&(oa||a===null||si(a,a.return)),n&64&&Ai&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=qn;if(Za(e,t),Ka(t),n&512&&(oa||a===null||si(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=t.memoizedState,a===null)if(n===null)if(t.stateNode===null){e:{n=t.type,a=t.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Ql]||s[Ea]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),La(s,n,a),s[Ea]=t,ya(s),n=s;break e;case"link":var r=Xy("link","href",i).get(n+(a.href||""));if(r){for(var o=0;o<r.length;o++)if(s=r[o],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){r.splice(o,1);break t}}s=i.createElement(n),La(s,n,a),i.head.appendChild(s);break;case"meta":if(r=Xy("meta","content",i).get(n+(a.content||""))){for(o=0;o<r.length;o++)if(s=r[o],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){r.splice(o,1);break t}}s=i.createElement(n),La(s,n,a),i.head.appendChild(s);break;default:throw Error(ne(468,n))}s[Ea]=t,ya(s),n=s}t.stateNode=n}else Yy(i,t.type,t.stateNode);else t.stateNode=Wy(i,n,t.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Yy(i,t.type,t.stateNode):Wy(i,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Mp(t,t.memoizedProps,a.memoizedProps)}break;case 27:Za(e,t),Ka(t),n&512&&(oa||a===null||si(a,a.return)),a!==null&&n&4&&Mp(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Za(e,t),Ka(t),n&512&&(oa||a===null||si(a,a.return)),t.flags&32){i=t.stateNode;try{co(i,"")}catch(v){bt(t,t.return,v)}}n&4&&t.stateNode!=null&&(i=t.memoizedProps,Mp(t,i,a!==null?a.memoizedProps:i)),n&1024&&(Tp=!0);break;case 6:if(Za(e,t),Ka(t),n&4){if(t.stateNode===null)throw Error(ne(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n}catch(v){bt(t,t.return,v)}}break;case 3:if(Uc=null,i=qn,qn=od(e.containerInfo),Za(e,t),qn=i,Ka(t),n&4&&a!==null&&a.memoizedState.isDehydrated)try{vo(e.containerInfo)}catch(v){bt(t,t.return,v)}Tp&&(Tp=!1,jS(t));break;case 4:n=qn,qn=od(t.stateNode.containerInfo),Za(e,t),Ka(t),qn=n;break;case 12:Za(e,t),Ka(t);break;case 31:Za(e,t),Ka(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gc(t,n)));break;case 13:Za(e,t),Ka(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bd=dn()),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gc(t,n)));break;case 22:i=t.memoizedState!==null;var l=a!==null&&a.memoizedState!==null,u=Ai,f=oa;if(Ai=u||i,oa=f||l,Za(e,t),oa=f,Ai=u,Ka(t),n&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(a===null||l||Ai||oa||ar(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){l=a=e;try{if(s=l.stateNode,i)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var p=l.memoizedProps.style,c=p!=null&&p.hasOwnProperty("display")?p.display:null;o.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(v){bt(l,l.return,v)}}}else if(e.tag===6){if(a===null){l=e;try{l.stateNode.nodeValue=i?"":l.memoizedProps}catch(v){bt(l,l.return,v)}}}else if(e.tag===18){if(a===null){l=e;try{var h=l.stateNode;i?Hy(h,!0):Hy(l.stateNode,!1)}catch(v){bt(l,l.return,v)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}n&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,gc(t,a))));break;case 19:Za(e,t),Ka(t),n&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,gc(t,n)));break;case 30:break;case 21:break;default:Za(e,t),Ka(t)}}function Ka(t){var e=t.flags;if(e&2){try{for(var a,n=t.return;n!==null;){if(qS(n)){a=n;break}n=n.return}if(a==null)throw Error(ne(160));switch(a.tag){case 27:var i=a.stateNode,s=bp(t);$c(t,s,i);break;case 5:var r=a.stateNode;a.flags&32&&(co(r,""),a.flags&=-33);var o=bp(t);$c(t,o,r);break;case 3:case 4:var l=a.stateNode.containerInfo,u=bp(t);dm(t,u,l);break;default:throw Error(ne(161))}}catch(f){bt(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jS(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;jS(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Ti(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)XS(t,e.alternate,e),e=e.sibling}function ar(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Es(4,e,e.return),ar(e);break;case 1:si(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&GS(e,e.return,a),ar(e);break;case 27:Dl(e.stateNode);case 26:case 5:si(e,e.return),ar(e);break;case 22:e.memoizedState===null&&ar(e);break;case 30:ar(e);break;default:ar(e)}t=t.sibling}}function Ei(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var n=e.alternate,i=t,s=e,r=s.flags;switch(s.tag){case 0:case 11:case 15:Ei(i,s,a),tu(4,s);break;case 1:if(Ei(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(u){bt(n,n.return,u)}if(n=s,i=n.updateQueue,i!==null){var o=n.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)Kv(l[i],o)}catch(u){bt(n,n.return,u)}}a&&r&64&&kS(s),Ll(s,s.return);break;case 27:WS(s);case 26:case 5:Ei(i,s,a),a&&n===null&&r&4&&VS(s),Ll(s,s.return);break;case 12:Ei(i,s,a);break;case 31:Ei(i,s,a),a&&r&4&&KS(i,s);break;case 13:Ei(i,s,a),a&&r&4&&JS(i,s);break;case 22:s.memoizedState===null&&Ei(i,s,a),Ll(s,s.return);break;case 30:break;default:Ei(i,s,a)}e=e.sibling}}function cg(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$l(a))}function dg(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$l(t))}function Vn(t,e,a,n){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$S(t,e,a,n),e=e.sibling}function $S(t,e,a,n){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Vn(t,e,a,n),i&2048&&tu(9,e);break;case 1:Vn(t,e,a,n);break;case 3:Vn(t,e,a,n),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&$l(t)));break;case 12:if(i&2048){Vn(t,e,a,n),t=e.stateNode;try{var s=e.memoizedProps,r=s.id,o=s.onPostCommit;typeof o=="function"&&o(r,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){bt(e,e.return,l)}}else Vn(t,e,a,n);break;case 31:Vn(t,e,a,n);break;case 13:Vn(t,e,a,n);break;case 23:break;case 22:s=e.stateNode,r=e.alternate,e.memoizedState!==null?s._visibility&2?Vn(t,e,a,n):wl(t,e):s._visibility&2?Vn(t,e,a,n):(s._visibility|=2,kr(t,e,a,n,(e.subtreeFlags&10256)!==0||!1)),i&2048&&cg(r,e);break;case 24:Vn(t,e,a,n),i&2048&&dg(e.alternate,e);break;default:Vn(t,e,a,n)}}function kr(t,e,a,n,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,r=e,o=a,l=n,u=r.flags;switch(r.tag){case 0:case 11:case 15:kr(s,r,o,l,i),tu(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?kr(s,r,o,l,i):wl(s,r):(f._visibility|=2,kr(s,r,o,l,i)),i&&u&2048&&cg(r.alternate,r);break;case 24:kr(s,r,o,l,i),i&&u&2048&&dg(r.alternate,r);break;default:kr(s,r,o,l,i)}e=e.sibling}}function wl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,n=e,i=n.flags;switch(n.tag){case 22:wl(a,n),i&2048&&cg(n.alternate,n);break;case 24:wl(a,n),i&2048&&dg(n.alternate,n);break;default:wl(a,n)}e=e.sibling}}var vl=8192;function Hr(t,e,a){if(t.subtreeFlags&vl)for(t=t.child;t!==null;)e_(t,e,a),t=t.sibling}function e_(t,e,a){switch(t.tag){case 26:Hr(t,e,a),t.flags&vl&&t.memoizedState!==null&&EE(a,qn,t.memoizedState,t.memoizedProps);break;case 5:Hr(t,e,a);break;case 3:case 4:var n=qn;qn=od(t.stateNode.containerInfo),Hr(t,e,a),qn=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=vl,vl=16777216,Hr(t,e,a),vl=n):Hr(t,e,a));break;default:Hr(t,e,a)}}function t_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function fl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];xa=n,n_(n,t)}t_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)a_(t),t=t.sibling}function a_(t){switch(t.tag){case 0:case 11:case 15:fl(t),t.flags&2048&&Es(9,t,t.return);break;case 3:fl(t);break;case 12:fl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Dc(t)):fl(t);break;default:fl(t)}}function Dc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var n=e[a];xa=n,n_(n,t)}t_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Es(8,e,e.return),Dc(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Dc(e));break;default:Dc(e)}t=t.sibling}}function n_(t,e){for(;xa!==null;){var a=xa;switch(a.tag){case 0:case 11:case 15:Es(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:$l(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,xa=n;else e:for(a=t;xa!==null;){n=xa;var i=n.sibling,s=n.return;if(YS(n),n===a){xa=null;break e}if(i!==null){i.return=s,xa=i;break e}xa=s}}}var GT={getCacheForType:function(t){var e=Aa(la),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Aa(la).controller.signal}},VT=typeof WeakMap=="function"?WeakMap:Map,vt=0,It=null,rt=null,ut=0,Mt=0,on=null,ds=!1,To=!1,fg=!1,Fi=0,$t=0,Cs=0,or=0,hg=0,cn=0,mo=0,Il=null,Qa=null,fm=!1,bd=0,i_=0,ed=1/0,td=null,ys=null,fa=0,vs=null,go=null,Pi=0,hm=0,pm=null,s_=null,Rl=0,mm=null;function pn(){return(vt&2)!==0&&ut!==0?ut&-ut:We.T!==null?mg():pv()}function r_(){if(cn===0)if((ut&536870912)===0||ht){var t=rc;rc<<=1,(rc&3932160)===0&&(rc=262144),cn=t}else cn=536870912;return t=gn.current,t!==null&&(t.flags|=32),cn}function ja(t,e,a){(t===It&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)&&(xo(t,0),fs(t,ut,cn,!1)),Jl(t,a),((vt&2)===0||t!==It)&&(t===It&&((vt&2)===0&&(or|=a),$t===4&&fs(t,ut,cn,!1)),li(t))}function o_(t,e,a){if((vt&6)!==0)throw Error(ne(327));var n=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Kl(t,e),i=n?XT(t,e):Ep(t,e,!0),s=n;do{if(i===0){To&&!n&&fs(t,e,0,!1);break}else{if(a=t.current.alternate,s&&!qT(a)){i=Ep(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var r=0;else r=t.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){e=r;e:{var o=t;i=Il;var l=o.current.memoizedState.isDehydrated;if(l&&(xo(o,r).flags|=256),r=Ep(o,r,!1),r!==2){if(fg&&!l){o.errorRecoveryDisabledLanes|=s,or|=s,i=4;break e}s=Qa,Qa=i,s!==null&&(Qa===null?Qa=s:Qa.push.apply(Qa,s))}i=r}if(s=!1,i!==2)continue}}if(i===1){xo(t,0),fs(t,e,0,!0);break}e:{switch(n=t,s=i,s){case 0:case 1:throw Error(ne(345));case 4:if((e&4194048)!==e)break;case 6:fs(n,e,cn,!ds);break e;case 2:Qa=null;break;case 3:case 5:break;default:throw Error(ne(329))}if((e&62914560)===e&&(i=bd+300-dn(),10<i)){if(fs(n,e,cn,!ds),fd(n,0,!0)!==0)break e;Pi=e,n.timeoutHandle=A_(Ey.bind(null,n,a,Qa,td,fm,e,cn,or,mo,ds,s,"Throttled",-0,0),i);break e}Ey(n,a,Qa,td,fm,e,cn,or,mo,ds,s,null,-0,0)}}break}while(!0);li(t)}function Ey(t,e,a,n,i,s,r,o,l,u,f,p,c,h){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:wi},e_(e,s,p);var v=(s&62914560)===s?bd-dn():(s&4194048)===s?i_-dn():0;if(v=CE(p,v),v!==null){Pi=s,t.cancelPendingCommit=v(Ay.bind(null,t,e,s,a,n,i,r,o,l,f,p,null,c,h)),fs(t,s,r,!u);return}}Ay(t,e,s,a,n,i,r,o,l)}function qT(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!mn(s(),i))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fs(t,e,a,n){e&=~hg,e&=~or,t.suspendedLanes|=e,t.pingedLanes&=~e,n&&(t.warmLanes|=e),n=t.expirationTimes;for(var i=e;0<i;){var s=31-hn(i),r=1<<s;n[s]=-1,i&=~r}a!==0&&dv(t,a,e)}function Td(){return(vt&6)===0?(au(0,!1),!1):!0}function pg(){if(rt!==null){if(Mt===0)var t=rt.return;else t=rt,Ii=xr=null,$m(t),so=null,zl=0,t=rt;for(;t!==null;)HS(t.alternate,t),t=t.return;rt=null}}function xo(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,lE(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Pi=0,pg(),It=t,rt=a=Ri(t.current,null),ut=e,Mt=0,on=null,ds=!1,To=Kl(t,e),fg=!1,mo=cn=hg=or=Cs=$t=0,Qa=Il=null,fm=!1,(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var i=31-hn(n),s=1<<i;e|=t[i],n&=~s}return Fi=e,gd(),a}function l_(t,e){et=null,We.H=kl,e===bo||e===yd?(e=ny(),Mt=3):e===Xm?(e=ny(),Mt=4):Mt=e===lg?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,on=e,rt===null&&($t=1,Qc(t,Un(e,t.current)))}function u_(){var t=gn.current;return t===null?!0:(ut&4194048)===ut?Nn===null:(ut&62914560)===ut||(ut&536870912)!==0?t===Nn:!1}function c_(){var t=We.H;return We.H=kl,t===null?kl:t}function d_(){var t=We.A;return We.A=GT,t}function ad(){$t=4,ds||(ut&4194048)!==ut&&gn.current!==null||(To=!0),(Cs&134217727)===0&&(or&134217727)===0||It===null||fs(It,ut,cn,!1)}function Ep(t,e,a){var n=vt;vt|=2;var i=c_(),s=d_();(It!==t||ut!==e)&&(td=null,xo(t,e)),e=!1;var r=$t;e:do try{if(Mt!==0&&rt!==null){var o=rt,l=on;switch(Mt){case 8:pg(),r=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(e=!0);var u=Mt;if(Mt=0,on=null,eo(t,o,l,u),a&&To){r=0;break e}break;default:u=Mt,Mt=0,on=null,eo(t,o,l,u)}}WT(),r=$t;break}catch(f){l_(t,f)}while(!0);return e&&t.shellSuspendCounter++,Ii=xr=null,vt=n,We.H=i,We.A=s,rt===null&&(It=null,ut=0,gd()),r}function WT(){for(;rt!==null;)f_(rt)}function XT(t,e){var a=vt;vt|=2;var n=c_(),i=d_();It!==t||ut!==e?(td=null,ed=dn()+500,xo(t,e)):To=Kl(t,e);e:do try{if(Mt!==0&&rt!==null){e=rt;var s=on;t:switch(Mt){case 1:Mt=0,on=null,eo(t,e,s,1);break;case 2:case 9:if(ay(s)){Mt=0,on=null,Cy(e);break}e=function(){Mt!==2&&Mt!==9||It!==t||(Mt=7),li(t)},s.then(e,e);break e;case 3:Mt=7;break e;case 4:Mt=5;break e;case 7:ay(s)?(Mt=0,on=null,Cy(e)):(Mt=0,on=null,eo(t,e,s,7));break;case 5:var r=null;switch(rt.tag){case 26:r=rt.memoizedState;case 5:case 27:var o=rt;if(r?D_(r):o.stateNode.complete){Mt=0,on=null;var l=o.sibling;if(l!==null)rt=l;else{var u=o.return;u!==null?(rt=u,Ed(u)):rt=null}break t}}Mt=0,on=null,eo(t,e,s,5);break;case 6:Mt=0,on=null,eo(t,e,s,6);break;case 8:pg(),$t=6;break e;default:throw Error(ne(462))}}YT();break}catch(f){l_(t,f)}while(!0);return Ii=xr=null,We.H=n,We.A=i,vt=a,rt!==null?0:(It=null,ut=0,gd(),$t)}function YT(){for(;rt!==null&&!g1();)f_(rt)}function f_(t){var e=zS(t.alternate,t,Fi);t.memoizedProps=t.pendingProps,e===null?Ed(t):rt=e}function Cy(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=vy(a,e,e.pendingProps,e.type,void 0,ut);break;case 11:e=vy(a,e,e.pendingProps,e.type.render,e.ref,ut);break;case 5:$m(e);default:HS(a,e),e=rt=Hv(e,Fi),e=zS(a,e,Fi)}t.memoizedProps=t.pendingProps,e===null?Ed(t):rt=e}function eo(t,e,a,n){Ii=xr=null,$m(e),so=null,zl=0;var i=e.return;try{if(BT(t,i,e,a,ut)){$t=1,Qc(t,Un(a,t.current)),rt=null;return}}catch(s){if(i!==null)throw rt=i,s;$t=1,Qc(t,Un(a,t.current)),rt=null;return}e.flags&32768?(ht||n===1?t=!0:To||(ut&536870912)!==0?t=!1:(ds=t=!0,(n===2||n===9||n===3||n===6)&&(n=gn.current,n!==null&&n.tag===13&&(n.flags|=16384))),h_(e,t)):Ed(e)}function Ed(t){var e=t;do{if((e.flags&32768)!==0){h_(e,ds);return}t=e.return;var a=FT(e.alternate,e,Fi);if(a!==null){rt=a;return}if(e=e.sibling,e!==null){rt=e;return}rt=e=t}while(e!==null);$t===0&&($t=5)}function h_(t,e){do{var a=zT(t.alternate,t);if(a!==null){a.flags&=32767,rt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){rt=t;return}rt=t=a}while(t!==null);$t=6,rt=null}function Ay(t,e,a,n,i,s,r,o,l){t.cancelPendingCommit=null;do Cd();while(fa!==0);if((vt&6)!==0)throw Error(ne(327));if(e!==null){if(e===t.current)throw Error(ne(177));if(s=e.lanes|e.childLanes,s|=zm,C1(t,a,s,r,o,l),t===It&&(rt=It=null,ut=0),go=e,vs=t,Pi=a,hm=s,pm=i,s_=n,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,QT(Hc,function(){return y_(),null})):(t.callbackNode=null,t.callbackPriority=0),n=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||n){n=We.T,We.T=null,i=St.p,St.p=2,r=vt,vt|=4;try{HT(t,e,a)}finally{vt=r,St.p=i,We.T=n}}fa=1,p_(),m_(),g_()}}function p_(){if(fa===1){fa=0;var t=vs,e=go,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=We.T,We.T=null;var n=St.p;St.p=2;var i=vt;vt|=4;try{QS(e,t);var s=vm,r=Dv(t.containerInfo),o=s.focusedElem,l=s.selectionRange;if(r!==o&&o&&o.ownerDocument&&Rv(o.ownerDocument.documentElement,o)){if(l!==null&&Fm(o)){var u=l.start,f=l.end;if(f===void 0&&(f=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(f,o.value.length);else{var p=o.ownerDocument||document,c=p&&p.defaultView||window;if(c.getSelection){var h=c.getSelection(),v=o.textContent.length,M=Math.min(l.start,v),g=l.end===void 0?M:Math.min(l.end,v);!h.extend&&M>g&&(r=g,g=M,M=r);var d=Kx(o,M),m=Kx(o,g);if(d&&m&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==m.node||h.focusOffset!==m.offset)){var _=p.createRange();_.setStart(d.node,d.offset),h.removeAllRanges(),M>g?(h.addRange(_),h.extend(m.node,m.offset)):(_.setEnd(m.node,m.offset),h.addRange(_))}}}}for(p=[],h=o;h=h.parentNode;)h.nodeType===1&&p.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<p.length;o++){var x=p[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}cd=!!ym,vm=ym=null}finally{vt=i,St.p=n,We.T=a}}t.current=e,fa=2}}function m_(){if(fa===2){fa=0;var t=vs,e=go,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=We.T,We.T=null;var n=St.p;St.p=2;var i=vt;vt|=4;try{XS(t,e.alternate,e)}finally{vt=i,St.p=n,We.T=a}}fa=3}}function g_(){if(fa===4||fa===3){fa=0,x1();var t=vs,e=go,a=Pi,n=s_;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?fa=5:(fa=0,go=vs=null,x_(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(ys=null),Rm(a),e=e.stateNode,fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(Zl,e,void 0,(e.current.flags&128)===128)}catch{}if(n!==null){e=We.T,i=St.p,St.p=2,We.T=null;try{for(var s=t.onRecoverableError,r=0;r<n.length;r++){var o=n[r];s(o.value,{componentStack:o.stack})}}finally{We.T=e,St.p=i}}(Pi&3)!==0&&Cd(),li(t),i=t.pendingLanes,(a&261930)!==0&&(i&42)!==0?t===mm?Rl++:(Rl=0,mm=t):Rl=0,au(0,!1)}}function x_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,$l(e)))}function Cd(){return p_(),m_(),g_(),y_()}function y_(){if(fa!==5)return!1;var t=vs,e=hm;hm=0;var a=Rm(Pi),n=We.T,i=St.p;try{St.p=32>a?32:a,We.T=null,a=pm,pm=null;var s=vs,r=Pi;if(fa=0,go=vs=null,Pi=0,(vt&6)!==0)throw Error(ne(331));var o=vt;if(vt|=4,a_(s.current),$S(s,s.current,r,a),vt=o,au(0,!1),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(Zl,s)}catch{}return!0}finally{St.p=i,We.T=n,x_(t,e)}}function Ly(t,e,a){e=Un(a,e),e=lm(t.stateNode,e,2),t=xs(t,e,2),t!==null&&(Jl(t,2),li(t))}function bt(t,e,a){if(t.tag===3)Ly(t,t,a);else for(;e!==null;){if(e.tag===3){Ly(e,t,a);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ys===null||!ys.has(n))){t=Un(a,t),a=PS(2),n=xs(e,a,2),n!==null&&(US(a,n,e,t),Jl(n,2),li(n));break}}e=e.return}}function Cp(t,e,a){var n=t.pingCache;if(n===null){n=t.pingCache=new VT;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&(i=new Set,n.set(e,i));i.has(a)||(fg=!0,i.add(a),t=ZT.bind(null,t,e,a),e.then(t,t))}function ZT(t,e,a){var n=t.pingCache;n!==null&&n.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,It===t&&(ut&a)===a&&($t===4||$t===3&&(ut&62914560)===ut&&300>dn()-bd?(vt&2)===0&&xo(t,0):hg|=a,mo===ut&&(mo=0)),li(t)}function v_(t,e){e===0&&(e=cv()),t=gr(t,e),t!==null&&(Jl(t,e),li(t))}function KT(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),v_(t,a)}function JT(t,e){var a=0;switch(t.tag){case 31:case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=t.stateNode;break;case 22:n=t.stateNode._retryCache;break;default:throw Error(ne(314))}n!==null&&n.delete(e),v_(t,a)}function QT(t,e){return wm(t,e)}var nd=null,Gr=null,gm=!1,id=!1,Ap=!1,hs=0;function li(t){t!==Gr&&t.next===null&&(Gr===null?nd=Gr=t:Gr=Gr.next=t),id=!0,gm||(gm=!0,$T())}function au(t,e){if(!Ap&&id){Ap=!0;do for(var a=!1,n=nd;n!==null;){if(!e)if(t!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var r=n.suspendedLanes,o=n.pingedLanes;s=(1<<31-hn(42|t)+1)-1,s&=i&~(r&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,wy(n,s))}else s=ut,s=fd(n,n===It?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Kl(n,s)||(a=!0,wy(n,s));n=n.next}while(a);Ap=!1}}function jT(){S_()}function S_(){id=gm=!1;var t=0;hs!==0&&oE()&&(t=hs);for(var e=dn(),a=null,n=nd;n!==null;){var i=n.next,s=__(n,e);s===0?(n.next=null,a===null?nd=i:a.next=i,i===null&&(Gr=a)):(a=n,(t!==0||(s&3)!==0)&&(id=!0)),n=i}fa!==0&&fa!==5||au(t,!1),hs!==0&&(hs=0)}function __(t,e){for(var a=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var r=31-hn(s),o=1<<r,l=i[r];l===-1?((o&a)===0||(o&n)!==0)&&(i[r]=E1(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}if(e=It,a=ut,a=fd(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n=t.callbackNode,a===0||t===e&&(Mt===2||Mt===9)||t.cancelPendingCommit!==null)return n!==null&&n!==null&&ap(n),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Kl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(n!==null&&ap(n),Rm(a)){case 2:case 8:a=lv;break;case 32:a=Hc;break;case 268435456:a=uv;break;default:a=Hc}return n=M_.bind(null,t),a=wm(a,n),t.callbackPriority=e,t.callbackNode=a,e}return n!==null&&n!==null&&ap(n),t.callbackPriority=2,t.callbackNode=null,2}function M_(t,e){if(fa!==0&&fa!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cd()&&t.callbackNode!==a)return null;var n=ut;return n=fd(t,t===It?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),n===0?null:(o_(t,n,e),__(t,dn()),t.callbackNode!=null&&t.callbackNode===a?M_.bind(null,t):null)}function wy(t,e){if(Cd())return null;o_(t,e,!0)}function $T(){uE(function(){(vt&6)!==0?wm(ov,jT):S_()})}function mg(){if(hs===0){var t=fo;t===0&&(t=sc,sc<<=1,(sc&261888)===0&&(sc=256)),hs=t}return hs}function Iy(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:bc(""+t)}function Ry(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function eE(t,e,a,n,i){if(e==="submit"&&a&&a.stateNode===i){var s=Iy((i[$a]||null).action),r=n.submitter;r&&(e=(e=r[$a]||null)?Iy(e.formAction):r.getAttribute("formAction"),e!==null&&(s=e,r=null));var o=new hd("action","action",null,n,i);t.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(hs!==0){var l=r?Ry(i,r):new FormData(i);rm(a,{pending:!0,data:l,method:i.method,action:s},null,l)}}else typeof s=="function"&&(o.preventDefault(),l=r?Ry(i,r):new FormData(i),rm(a,{pending:!0,data:l,method:i.method,action:s},s,l))},currentTarget:i}]})}}for(xc=0;xc<Zp.length;xc++)yc=Zp[xc],Dy=yc.toLowerCase(),Py=yc[0].toUpperCase()+yc.slice(1),Wn(Dy,"on"+Py);var yc,Dy,Py,xc;Wn(Uv,"onAnimationEnd");Wn(Bv,"onAnimationIteration");Wn(Nv,"onAnimationStart");Wn("dblclick","onDoubleClick");Wn("focusin","onFocus");Wn("focusout","onBlur");Wn(yT,"onTransitionRun");Wn(vT,"onTransitionStart");Wn(ST,"onTransitionCancel");Wn(Ov,"onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseover"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl));function b_(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var n=t[a],i=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var r=n.length-1;0<=r;r--){var o=n[r],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Gc(f)}i.currentTarget=null,s=l}else for(r=0;r<n.length;r++){if(o=n[r],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;s=o,i.currentTarget=u;try{s(i)}catch(f){Gc(f)}i.currentTarget=null,s=l}}}}function st(t,e){var a=e[Hp];a===void 0&&(a=e[Hp]=new Set);var n=t+"__bubble";a.has(n)||(T_(e,t,2,!1),a.add(n))}function Lp(t,e,a){var n=0;e&&(n|=4),T_(a,t,n,e)}var vc="_reactListening"+Math.random().toString(36).slice(2);function gg(t){if(!t[vc]){t[vc]=!0,mv.forEach(function(a){a!=="selectionchange"&&(tE.has(a)||Lp(a,!1,t),Lp(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vc]||(e[vc]=!0,Lp("selectionchange",!1,e))}}function T_(t,e,a,n){switch(O_(e)){case 2:var i=wE;break;case 8:i=IE;break;default:i=Sg}a=i.bind(null,e,a,t),i=void 0,!Wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,a,{capture:!0,passive:i}):t.addEventListener(e,a,!0):i!==void 0?t.addEventListener(e,a,{passive:i}):t.addEventListener(e,a,!1)}function wp(t,e,a,n,i){var s=n;if((e&1)===0&&(e&2)===0&&n!==null)e:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var o=n.stateNode.containerInfo;if(o===i)break;if(r===4)for(r=n.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===i)return;r=r.return}for(;o!==null;){if(r=Wr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){n=s=r;continue e}o=o.parentNode}}n=n.return}bv(function(){var u=s,f=Um(a),p=[];e:{var c=Fv.get(t);if(c!==void 0){var h=hd,v=t;switch(t){case"keypress":if(Ec(a)===0)break e;case"keydown":case"keyup":h=J1;break;case"focusin":v="focus",h=op;break;case"focusout":v="blur",h=op;break;case"beforeblur":case"afterblur":h=op;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Hx;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=$1;break;case Uv:case Bv:case Nv:h=k1;break;case Ov:h=tT;break;case"scroll":case"scrollend":h=N1;break;case"wheel":h=nT;break;case"copy":case"cut":case"paste":h=V1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gx;break;case"toggle":case"beforetoggle":h=sT}var M=(e&4)!==0,g=!M&&(t==="scroll"||t==="scrollend"),d=M?c!==null?c+"Capture":null:c;M=[];for(var m=u,_;m!==null;){var x=m;if(_=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||_===null||d===null||(x=Ul(m,d),x!=null&&M.push(Vl(m,x,_))),g)break;m=m.return}0<M.length&&(c=new h(c,v,null,a,f),p.push({event:c,listeners:M}))}}if((e&7)===0){e:{if(c=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",c&&a!==qp&&(v=a.relatedTarget||a.fromElement)&&(Wr(v)||v[So]))break e;if((h||c)&&(c=f.window===f?f:(c=f.ownerDocument)?c.defaultView||c.parentWindow:window,h?(v=a.relatedTarget||a.toElement,h=u,v=v?Wr(v):null,v!==null&&(g=Yl(v),M=v.tag,v!==g||M!==5&&M!==27&&M!==6)&&(v=null)):(h=null,v=u),h!==v)){if(M=Hx,x="onMouseLeave",d="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=Gx,x="onPointerLeave",d="onPointerEnter",m="pointer"),g=h==null?c:xl(h),_=v==null?c:xl(v),c=new M(x,m+"leave",h,a,f),c.target=g,c.relatedTarget=_,x=null,Wr(f)===u&&(M=new M(d,m+"enter",v,a,f),M.target=_,M.relatedTarget=g,x=M),g=x,h&&v)t:{for(M=aE,d=h,m=v,_=0,x=d;x;x=M(x))_++;x=0;for(var C=m;C;C=M(C))x++;for(;0<_-x;)d=M(d),_--;for(;0<x-_;)m=M(m),x--;for(;_--;){if(d===m||m!==null&&d===m.alternate){M=d;break t}d=M(d),m=M(m)}M=null}else M=null;h!==null&&Uy(p,c,h,M,!1),v!==null&&g!==null&&Uy(p,g,v,M,!0)}}e:{if(c=u?xl(u):window,h=c.nodeName&&c.nodeName.toLowerCase(),h==="select"||h==="input"&&c.type==="file")var A=Xx;else if(Wx(c))if(wv)A=mT;else{A=hT;var L=fT}else h=c.nodeName,!h||h.toLowerCase()!=="input"||c.type!=="checkbox"&&c.type!=="radio"?u&&Pm(u.elementType)&&(A=Xx):A=pT;if(A&&(A=A(t,u))){Lv(p,A,a,f);break e}L&&L(t,c,u),t==="focusout"&&u&&c.type==="number"&&u.memoizedProps.value!=null&&Vp(c,"number",c.value)}switch(L=u?xl(u):window,t){case"focusin":(Wx(L)||L.contentEditable==="true")&&(Zr=L,Xp=u,Ml=null);break;case"focusout":Ml=Xp=Zr=null;break;case"mousedown":Yp=!0;break;case"contextmenu":case"mouseup":case"dragend":Yp=!1,Jx(p,a,f);break;case"selectionchange":if(xT)break;case"keydown":case"keyup":Jx(p,a,f)}var y;if(Om)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Yr?Cv(t,a)&&(E="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(E="onCompositionStart");E&&(Ev&&a.locale!=="ko"&&(Yr||E!=="onCompositionStart"?E==="onCompositionEnd"&&Yr&&(y=Tv()):(cs=f,Bm="value"in cs?cs.value:cs.textContent,Yr=!0)),L=sd(u,E),0<L.length&&(E=new kx(E,t,null,a,f),p.push({event:E,listeners:L}),y?E.data=y:(y=Av(a),y!==null&&(E.data=y)))),(y=oT?lT(t,a):uT(t,a))&&(E=sd(u,"onBeforeInput"),0<E.length&&(L=new kx("onBeforeInput","beforeinput",null,a,f),p.push({event:L,listeners:E}),L.data=y)),eE(p,t,u,a,f)}b_(p,e)})}function Vl(t,e,a){return{instance:t,listener:e,currentTarget:a}}function sd(t,e){for(var a=e+"Capture",n=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Ul(t,a),i!=null&&n.unshift(Vl(t,i,s)),i=Ul(t,e),i!=null&&n.push(Vl(t,i,s))),t.tag===3)return n;t=t.return}return[]}function aE(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Uy(t,e,a,n,i){for(var s=e._reactName,r=[];a!==null&&a!==n;){var o=a,l=o.alternate,u=o.stateNode;if(o=o.tag,l!==null&&l===n)break;o!==5&&o!==26&&o!==27||u===null||(l=u,i?(u=Ul(a,s),u!=null&&r.unshift(Vl(a,u,l))):i||(u=Ul(a,s),u!=null&&r.push(Vl(a,u,l)))),a=a.return}r.length!==0&&t.push({event:e,listeners:r})}var nE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function By(t){return(typeof t=="string"?t:""+t).replace(nE,`
`).replace(iE,"")}function E_(t,e){return e=By(e),By(t)===e}function Ct(t,e,a,n,i,s){switch(a){case"children":typeof n=="string"?e==="body"||e==="textarea"&&n===""||co(t,n):(typeof n=="number"||typeof n=="bigint")&&e!=="body"&&co(t,""+n);break;case"className":lc(t,"class",n);break;case"tabIndex":lc(t,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":lc(t,a,n);break;case"style":Mv(t,n,s);break;case"data":if(e!=="object"){lc(t,"data",n);break}case"src":case"href":if(n===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=bc(""+n),t.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(e!=="input"&&Ct(t,e,"name",i.name,i,null),Ct(t,e,"formEncType",i.formEncType,i,null),Ct(t,e,"formMethod",i.formMethod,i,null),Ct(t,e,"formTarget",i.formTarget,i,null)):(Ct(t,e,"encType",i.encType,i,null),Ct(t,e,"method",i.method,i,null),Ct(t,e,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){t.removeAttribute(a);break}n=bc(""+n),t.setAttribute(a,n);break;case"onClick":n!=null&&(t.onclick=wi);break;case"onScroll":n!=null&&st("scroll",t);break;case"onScrollEnd":n!=null&&st("scrollend",t);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ne(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ne(60));t.innerHTML=a}}break;case"multiple":t.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":t.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){t.removeAttribute("xlink:href");break}a=bc(""+n),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""+n):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":n===!0?t.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?t.setAttribute(a,n):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?t.setAttribute(a,n):t.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?t.removeAttribute(a):t.setAttribute(a,n);break;case"popover":st("beforetoggle",t),st("toggle",t),Mc(t,"popover",n);break;case"xlinkActuate":_i(t,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":_i(t,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":_i(t,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":_i(t,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":_i(t,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":_i(t,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":_i(t,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":_i(t,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":_i(t,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Mc(t,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=U1.get(a)||a,Mc(t,a,n))}}function xm(t,e,a,n,i,s){switch(a){case"style":Mv(t,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(ne(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(ne(60));t.innerHTML=a}}break;case"children":typeof n=="string"?co(t,n):(typeof n=="number"||typeof n=="bigint")&&co(t,""+n);break;case"onScroll":n!=null&&st("scroll",t);break;case"onScrollEnd":n!=null&&st("scrollend",t);break;case"onClick":n!=null&&(t.onclick=wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gv.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),e=a.slice(2,i?a.length-7:void 0),s=t[$a]||null,s=s!=null?s[a]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,n,i);break e}a in t?t[a]=n:n===!0?t.setAttribute(a,""):Mc(t,a,n)}}}function La(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",t),st("load",t);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var r=a[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(ne(137,e));default:Ct(t,e,s,r,a,null)}}i&&Ct(t,e,"srcSet",a.srcSet,a,null),n&&Ct(t,e,"src",a.src,a,null);return;case"input":st("invalid",t);var o=s=r=i=null,l=null,u=null;for(n in a)if(a.hasOwnProperty(n)){var f=a[n];if(f!=null)switch(n){case"name":i=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":u=f;break;case"value":s=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(ne(137,e));break;default:Ct(t,e,n,f,a,null)}}vv(t,s,o,l,u,r,i,!1);return;case"select":st("invalid",t),n=r=s=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":s=o;break;case"defaultValue":r=o;break;case"multiple":n=o;default:Ct(t,e,i,o,a,null)}e=s,a=r,t.multiple=!!n,e!=null?ao(t,!!n,e,!1):a!=null&&ao(t,!!n,a,!0);return;case"textarea":st("invalid",t),s=i=n=null;for(r in a)if(a.hasOwnProperty(r)&&(o=a[r],o!=null))switch(r){case"value":n=o;break;case"defaultValue":i=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(ne(91));break;default:Ct(t,e,r,o,a,null)}_v(t,n,i,s);return;case"option":for(l in a)if(a.hasOwnProperty(l)&&(n=a[l],n!=null))switch(l){case"selected":t.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ct(t,e,l,n,a,null)}return;case"dialog":st("beforetoggle",t),st("toggle",t),st("cancel",t),st("close",t);break;case"iframe":case"object":st("load",t);break;case"video":case"audio":for(n=0;n<Gl.length;n++)st(Gl[n],t);break;case"image":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"embed":case"source":case"link":st("error",t),st("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(ne(137,e));default:Ct(t,e,u,n,a,null)}return;default:if(Pm(e)){for(f in a)a.hasOwnProperty(f)&&(n=a[f],n!==void 0&&xm(t,e,f,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&Ct(t,e,o,n,a,null))}function sE(t,e,a,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,r=null,o=null,l=null,u=null,f=null;for(h in a){var p=a[h];if(a.hasOwnProperty(h)&&p!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=p;default:n.hasOwnProperty(h)||Ct(t,e,h,null,n,p)}}for(var c in n){var h=n[c];if(p=a[c],n.hasOwnProperty(c)&&(h!=null||p!=null))switch(c){case"type":s=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":f=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(ne(137,e));break;default:h!==p&&Ct(t,e,c,h,n,p)}}Gp(t,r,o,l,u,f,s,i);return;case"select":h=r=o=c=null;for(s in a)if(l=a[s],a.hasOwnProperty(s)&&l!=null)switch(s){case"value":break;case"multiple":h=l;default:n.hasOwnProperty(s)||Ct(t,e,s,null,n,l)}for(i in n)if(s=n[i],l=a[i],n.hasOwnProperty(i)&&(s!=null||l!=null))switch(i){case"value":c=s;break;case"defaultValue":o=s;break;case"multiple":r=s;default:s!==l&&Ct(t,e,i,s,n,l)}e=o,a=r,n=h,c!=null?ao(t,!!a,c,!1):!!n!=!!a&&(e!=null?ao(t,!!a,e,!0):ao(t,!!a,a?[]:"",!1));return;case"textarea":h=c=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ct(t,e,o,null,n,i)}for(r in n)if(i=n[r],s=a[r],n.hasOwnProperty(r)&&(i!=null||s!=null))switch(r){case"value":c=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(ne(91));break;default:i!==s&&Ct(t,e,r,i,n,s)}Sv(t,c,h);return;case"option":for(var v in a)if(c=a[v],a.hasOwnProperty(v)&&c!=null&&!n.hasOwnProperty(v))switch(v){case"selected":t.selected=!1;break;default:Ct(t,e,v,null,n,c)}for(l in n)if(c=n[l],h=a[l],n.hasOwnProperty(l)&&c!==h&&(c!=null||h!=null))switch(l){case"selected":t.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ct(t,e,l,c,n,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in a)c=a[M],a.hasOwnProperty(M)&&c!=null&&!n.hasOwnProperty(M)&&Ct(t,e,M,null,n,c);for(u in n)if(c=n[u],h=a[u],n.hasOwnProperty(u)&&c!==h&&(c!=null||h!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(c!=null)throw Error(ne(137,e));break;default:Ct(t,e,u,c,n,h)}return;default:if(Pm(e)){for(var g in a)c=a[g],a.hasOwnProperty(g)&&c!==void 0&&!n.hasOwnProperty(g)&&xm(t,e,g,void 0,n,c);for(f in n)c=n[f],h=a[f],!n.hasOwnProperty(f)||c===h||c===void 0&&h===void 0||xm(t,e,f,c,n,h);return}}for(var d in a)c=a[d],a.hasOwnProperty(d)&&c!=null&&!n.hasOwnProperty(d)&&Ct(t,e,d,null,n,c);for(p in n)c=n[p],h=a[p],!n.hasOwnProperty(p)||c===h||c==null&&h==null||Ct(t,e,p,c,n,h)}function Ny(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rE(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,r=i.initiatorType,o=i.duration;if(s&&o&&Ny(r)){for(r=0,o=i.responseEnd,n+=1;n<a.length;n++){var l=a[n],u=l.startTime;if(u>o)break;var f=l.transferSize,p=l.initiatorType;f&&Ny(p)&&(l=l.responseEnd,r+=f*(l<o?1:(o-u)/(l-u)))}if(--n,e+=8*(s+r)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ym=null,vm=null;function rd(t){return t.nodeType===9?t:t.ownerDocument}function Oy(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function C_(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ip=null;function oE(){var t=window.event;return t&&t.type==="popstate"?t===Ip?!1:(Ip=t,!0):(Ip=null,!1)}var A_=typeof setTimeout=="function"?setTimeout:void 0,lE=typeof clearTimeout=="function"?clearTimeout:void 0,Fy=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof Fy<"u"?function(t){return Fy.resolve(null).then(t).catch(cE)}:A_;function cE(t){setTimeout(function(){throw t})}function Ls(t){return t==="head"}function zy(t,e){var a=e,n=0;do{var i=a.nextSibling;if(t.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){t.removeChild(i),vo(e);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Dl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Dl(a);for(var s=a.firstChild;s;){var r=s.nextSibling,o=s.nodeName;s[Ql]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=r}}else a==="body"&&Dl(t.ownerDocument.body);a=i}while(a);vo(e)}function Hy(t,e){var a=t;t=0;do{var n=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=n}while(a)}function _m(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_m(a),Dm(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function dE(t,e,a,n){for(;t.nodeType===1;){var i=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!n&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(n){if(!t[Ql])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=On(t.nextSibling),t===null)break}return null}function fE(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=On(t.nextSibling),t===null))return null;return t}function L_(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=On(t.nextSibling),t===null))return null;return t}function Mm(t){return t.data==="$?"||t.data==="$~"}function bm(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hE(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var n=function(){e(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),t._reactRetry=n}}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Tm=null;function ky(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return On(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Gy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function w_(t,e,a){switch(e=rd(a),t){case"html":if(t=e.documentElement,!t)throw Error(ne(452));return t;case"head":if(t=e.head,!t)throw Error(ne(453));return t;case"body":if(t=e.body,!t)throw Error(ne(454));return t;default:throw Error(ne(451))}}function Dl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Dm(t)}var Fn=new Map,Vy=new Set;function od(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var zi=St.d;St.d={f:pE,r:mE,D:gE,C:xE,L:yE,m:vE,X:_E,S:SE,M:ME};function pE(){var t=zi.f(),e=Td();return t||e}function mE(t){var e=_o(t);e!==null&&e.tag===5&&e.type==="form"?MS(e):zi.r(t)}var Eo=typeof document>"u"?null:document;function I_(t,e,a){var n=Eo;if(n&&typeof e=="string"&&e){var i=Pn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Vy.has(i)||(Vy.add(i),t={rel:t,crossOrigin:a,href:e},n.querySelector(i)===null&&(e=n.createElement("link"),La(e,"link",t),ya(e),n.head.appendChild(e)))}}function gE(t){zi.D(t),I_("dns-prefetch",t,null)}function xE(t,e){zi.C(t,e),I_("preconnect",t,e)}function yE(t,e,a){zi.L(t,e,a);var n=Eo;if(n&&t&&e){var i='link[rel="preload"][as="'+Pn(e)+'"]';e==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Pn(a.imageSizes)+'"]')):i+='[href="'+Pn(t)+'"]';var s=i;switch(e){case"style":s=yo(t);break;case"script":s=Co(t)}Fn.has(s)||(t=zt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),Fn.set(s,t),n.querySelector(i)!==null||e==="style"&&n.querySelector(nu(s))||e==="script"&&n.querySelector(iu(s))||(e=n.createElement("link"),La(e,"link",t),ya(e),n.head.appendChild(e)))}}function vE(t,e){zi.m(t,e);var a=Eo;if(a&&t){var n=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+Pn(n)+'"][href="'+Pn(t)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Co(t)}if(!Fn.has(s)&&(t=zt({rel:"modulepreload",href:t},e),Fn.set(s,t),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(iu(s)))return}n=a.createElement("link"),La(n,"link",t),ya(n),a.head.appendChild(n)}}}function SE(t,e,a){zi.S(t,e,a);var n=Eo;if(n&&t){var i=to(n).hoistableStyles,s=yo(t);e=e||"default";var r=i.get(s);if(!r){var o={loading:0,preload:null};if(r=n.querySelector(nu(s)))o.loading=5;else{t=zt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=Fn.get(s))&&xg(t,a);var l=r=n.createElement("link");ya(l),La(l,"link",t),l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Pc(r,e,n)}r={type:"stylesheet",instance:r,count:1,state:o},i.set(s,r)}}}function _E(t,e){zi.X(t,e);var a=Eo;if(a&&t){var n=to(a).hoistableScripts,i=Co(t),s=n.get(i);s||(s=a.querySelector(iu(i)),s||(t=zt({src:t,async:!0},e),(e=Fn.get(i))&&yg(t,e),s=a.createElement("script"),ya(s),La(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function ME(t,e){zi.M(t,e);var a=Eo;if(a&&t){var n=to(a).hoistableScripts,i=Co(t),s=n.get(i);s||(s=a.querySelector(iu(i)),s||(t=zt({src:t,async:!0,type:"module"},e),(e=Fn.get(i))&&yg(t,e),s=a.createElement("script"),ya(s),La(s,"link",t),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function qy(t,e,a,n){var i=(i=ps.current)?od(i):null;if(!i)throw Error(ne(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=yo(a.href),a=to(i).hoistableStyles,n=a.get(e),n||(n={type:"style",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=yo(a.href);var s=to(i).hoistableStyles,r=s.get(t);if(r||(i=i.ownerDocument||i,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,r),(s=i.querySelector(nu(t)))&&!s._p&&(r.instance=s,r.state.loading=5),Fn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Fn.set(t,a),s||bE(i,t,a,r.state))),e&&n===null)throw Error(ne(528,""));return r}if(e&&n!==null)throw Error(ne(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Co(a),a=to(i).hoistableScripts,n=a.get(e),n||(n={type:"script",instance:null,count:0,state:null},a.set(e,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(ne(444,t))}}function yo(t){return'href="'+Pn(t)+'"'}function nu(t){return'link[rel="stylesheet"]['+t+"]"}function R_(t){return zt({},t,{"data-precedence":t.precedence,precedence:null})}function bE(t,e,a,n){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?n.loading=1:(e=t.createElement("link"),n.preload=e,e.addEventListener("load",function(){return n.loading|=1}),e.addEventListener("error",function(){return n.loading|=2}),La(e,"link",a),ya(e),t.head.appendChild(e))}function Co(t){return'[src="'+Pn(t)+'"]'}function iu(t){return"script[async]"+t}function Wy(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var n=t.querySelector('style[data-href~="'+Pn(a.href)+'"]');if(n)return e.instance=n,ya(n),n;var i=zt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(t.ownerDocument||t).createElement("style"),ya(n),La(n,"style",i),Pc(n,a.precedence,t),e.instance=n;case"stylesheet":i=yo(a.href);var s=t.querySelector(nu(i));if(s)return e.state.loading|=4,e.instance=s,ya(s),s;n=R_(a),(i=Fn.get(i))&&xg(n,i),s=(t.ownerDocument||t).createElement("link"),ya(s);var r=s;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),La(s,"link",n),e.state.loading|=4,Pc(s,a.precedence,t),e.instance=s;case"script":return s=Co(a.src),(i=t.querySelector(iu(s)))?(e.instance=i,ya(i),i):(n=a,(i=Fn.get(s))&&(n=zt({},a),yg(n,i)),t=t.ownerDocument||t,i=t.createElement("script"),ya(i),La(i,"link",n),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(ne(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(n=e.instance,e.state.loading|=4,Pc(n,a.precedence,t));return e.instance}function Pc(t,e,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,r=0;r<n.length;r++){var o=n[r];if(o.dataset.precedence===e)s=o;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function xg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function yg(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Uc=null;function Xy(t,e,a){if(Uc===null){var n=new Map,i=Uc=new Map;i.set(a,n)}else i=Uc,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(t))return n;for(n.set(t,null),a=a.getElementsByTagName(t),i=0;i<a.length;i++){var s=a[i];if(!(s[Ql]||s[Ea]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(e)||"";r=t+r;var o=n.get(r);o?o.push(s):n.set(r,[s])}}return n}function Yy(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function TE(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function D_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function EE(t,e,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=yo(n.href),s=e.querySelector(nu(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=ld.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=s,ya(s);return}s=e.ownerDocument||e,n=R_(n),(i=Fn.get(i))&&xg(n,i),s=s.createElement("link"),ya(s);var r=s;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),La(s,"link",n),a.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ld.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Rp=0;function CE(t,e){return t.stylesheets&&t.count===0&&Bc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var n=setTimeout(function(){if(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Rp===0&&(Rp=62500*rE());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bc(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Rp?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function ld(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ud=null;function Bc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ud=new Map,e.forEach(AE,t),ud=null,ld.call(t))}function AE(t,e){if(!(e.state.loading&4)){var a=ud.get(t);if(a)var n=a.get(null);else{a=new Map,ud.set(t,a);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var r=i[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(a.set(r.dataset.precedence,r),n=r)}n&&a.set(null,n)}i=e.instance,r=i.getAttribute("data-precedence"),s=a.get(r)||n,s===n&&a.set(null,i),a.set(r,i),this.count++,n=ld.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var ql={$$typeof:Li,Provider:null,Consumer:null,_currentValue:nr,_currentValue2:nr,_threadCount:0};function LE(t,e,a,n,i,s,r,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=np(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=np(0),this.hiddenUpdates=np(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function P_(t,e,a,n,i,s,r,o,l,u,f,p){return t=new LE(t,e,a,r,l,u,f,p,o),e=1,s===!0&&(e|=24),s=un(3,null,null,e),t.current=s,s.stateNode=t,e=qm(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:e},Ym(s),t}function U_(t){return t?(t=Qr,t):Qr}function B_(t,e,a,n,i,s){i=U_(i),n.context===null?n.context=i:n.pendingContext=i,n=gs(e),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=xs(t,n,e),a!==null&&(ja(a,t,e),Tl(a,t,e))}function Zy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function vg(t,e){Zy(t,e),(t=t.alternate)&&Zy(t,e)}function N_(t){if(t.tag===13||t.tag===31){var e=gr(t,67108864);e!==null&&ja(e,t,67108864),vg(t,67108864)}}function Ky(t){if(t.tag===13||t.tag===31){var e=pn();e=Im(e);var a=gr(t,e);a!==null&&ja(a,t,e),vg(t,e)}}var cd=!0;function wE(t,e,a,n){var i=We.T;We.T=null;var s=St.p;try{St.p=2,Sg(t,e,a,n)}finally{St.p=s,We.T=i}}function IE(t,e,a,n){var i=We.T;We.T=null;var s=St.p;try{St.p=8,Sg(t,e,a,n)}finally{St.p=s,We.T=i}}function Sg(t,e,a,n){if(cd){var i=Em(n);if(i===null)wp(t,e,n,dd,a),Jy(t,n);else if(DE(i,t,e,a,n))n.stopPropagation();else if(Jy(t,n),e&4&&-1<RE.indexOf(t)){for(;i!==null;){var s=_o(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=er(s.pendingLanes);if(r!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-hn(r);o.entanglements[1]|=l,r&=~l}li(s),(vt&6)===0&&(ed=dn()+500,au(0,!1))}}break;case 31:case 13:o=gr(s,2),o!==null&&ja(o,s,2),Td(),vg(s,2)}if(s=Em(n),s===null&&wp(t,e,n,dd,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else wp(t,e,n,null,a)}}function Em(t){return t=Um(t),_g(t)}var dd=null;function _g(t){if(dd=null,t=Wr(t),t!==null){var e=Yl(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=av(e),t!==null)return t;t=null}else if(a===31){if(t=nv(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return dd=t,null}function O_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(y1()){case ov:return 2;case lv:return 8;case Hc:case v1:return 32;case uv:return 268435456;default:return 32}default:return 32}}var Cm=!1,Ss=null,_s=null,Ms=null,Wl=new Map,Xl=new Map,ls=[],RE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Jy(t,e){switch(t){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":Ms=null;break;case"pointerover":case"pointerout":Wl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xl.delete(e.pointerId)}}function hl(t,e,a,n,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_o(e),e!==null&&N_(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DE(t,e,a,n,i){switch(e){case"focusin":return Ss=hl(Ss,t,e,a,n,i),!0;case"dragenter":return _s=hl(_s,t,e,a,n,i),!0;case"mouseover":return Ms=hl(Ms,t,e,a,n,i),!0;case"pointerover":var s=i.pointerId;return Wl.set(s,hl(Wl.get(s)||null,t,e,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Xl.set(s,hl(Xl.get(s)||null,t,e,a,n,i)),!0}return!1}function F_(t){var e=Wr(t.target);if(e!==null){var a=Yl(e);if(a!==null){if(e=a.tag,e===13){if(e=av(a),e!==null){t.blockedOn=e,Px(t.priority,function(){Ky(a)});return}}else if(e===31){if(e=nv(a),e!==null){t.blockedOn=e,Px(t.priority,function(){Ky(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Em(t.nativeEvent);if(a===null){a=t.nativeEvent;var n=new a.constructor(a.type,a);qp=n,a.target.dispatchEvent(n),qp=null}else return e=_o(a),e!==null&&N_(e),t.blockedOn=a,!1;e.shift()}return!0}function Qy(t,e,a){Nc(t)&&a.delete(e)}function PE(){Cm=!1,Ss!==null&&Nc(Ss)&&(Ss=null),_s!==null&&Nc(_s)&&(_s=null),Ms!==null&&Nc(Ms)&&(Ms=null),Wl.forEach(Qy),Xl.forEach(Qy)}function Sc(t,e){t.blockedOn===e&&(t.blockedOn=null,Cm||(Cm=!0,ha.unstable_scheduleCallback(ha.unstable_NormalPriority,PE)))}var _c=null;function jy(t){_c!==t&&(_c=t,ha.unstable_scheduleCallback(ha.unstable_NormalPriority,function(){_c===t&&(_c=null);for(var e=0;e<t.length;e+=3){var a=t[e],n=t[e+1],i=t[e+2];if(typeof n!="function"){if(_g(n||a)===null)continue;break}var s=_o(a);s!==null&&(t.splice(e,3),e-=3,rm(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function vo(t){function e(l){return Sc(l,t)}Ss!==null&&Sc(Ss,t),_s!==null&&Sc(_s,t),Ms!==null&&Sc(Ms,t),Wl.forEach(e),Xl.forEach(e);for(var a=0;a<ls.length;a++){var n=ls[a];n.blockedOn===t&&(n.blockedOn=null)}for(;0<ls.length&&(a=ls[0],a.blockedOn===null);)F_(a),a.blockedOn===null&&ls.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],r=i[$a]||null;if(typeof s=="function")r||jy(a);else if(r){var o=null;if(s&&s.hasAttribute("formAction")){if(i=s,r=s[$a]||null)o=r.formAction;else if(_g(i)!==null)continue}else o=r.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),jy(a)}}}function z_(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return i=r})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function Mg(t){this._internalRoot=t}Ad.prototype.render=Mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));var a=e.current,n=pn();B_(a,n,t,e,null,null)};Ad.prototype.unmount=Mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;B_(t.current,2,null,t,null,null),Td(),e[So]=null}};function Ad(t){this._internalRoot=t}Ad.prototype.unstable_scheduleHydration=function(t){if(t){var e=pv();t={blockedOn:null,target:t,priority:e};for(var a=0;a<ls.length&&e!==0&&e<ls[a].priority;a++);ls.splice(a,0,t),a===0&&F_(t)}};var $y=ev.version;if($y!=="19.2.8")throw Error(ne(527,$y,"19.2.8"));St.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=d1(e),t=t!==null?iv(t):null,t=t===null?null:t.stateNode,t};var UE={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:We,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(pl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!pl.isDisabled&&pl.supportsFiber))try{Zl=pl.inject(UE),fn=pl}catch{}var pl;Ld.createRoot=function(t,e){if(!tv(t))throw Error(ne(299));var a=!1,n="",i=IS,s=RS,r=DS;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=P_(t,1,!1,null,null,a,n,null,i,s,r,z_),t[So]=e.current,gg(t),new Mg(e)};Ld.hydrateRoot=function(t,e,a){if(!tv(t))throw Error(ne(299));var n=!1,i="",s=IS,r=RS,o=DS,l=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(r=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(l=a.formState)),e=P_(t,1,!0,e,a??null,n,i,l,s,r,o,z_),e.context=U_(null),a=e.current,n=pn(),n=Im(n),i=gs(n),i.callback=null,xs(a,i,n),a=n,e.current.lanes=a,Jl(e,a),li(e),t[So]=e.current,gg(t),new Ad(e)};Ld.version="19.2.8"});var V_=ti((IR,G_)=>{"use strict";function k_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k_)}catch(t){console.error(t)}}k_(),G_.exports=H_()});var Ub=ti(Oh=>{"use strict";var vR=Symbol.for("react.transitional.element"),SR=Symbol.for("react.fragment");function Pb(t,e,a){var n=null;if(a!==void 0&&(n=""+a),e.key!==void 0&&(n=""+e.key),"key"in e){a={};for(var i in e)i!=="key"&&(a[i]=e[i])}else a=e;return e=a.ref,{$$typeof:vR,type:t,key:n,ref:e!==void 0?e:null,props:a}}Oh.Fragment=SR;Oh.jsx=Pb;Oh.jsxs=Pb});var ju=ti((CP,Bb)=>{"use strict";Bb.exports=Ub()});var Ir=vi(Qs(),1),Ob=vi(V_(),1);var Vt=vi(Qs(),1);var mM=0,o0=1,gM=2;var Pu=1,Ff=2,Qo=3,Xi=0,Xa=1,Na=2,pi=0,Tr=1,l0=2,u0=3,c0=4,xM=5;var Ns=100,yM=101,vM=102,SM=103,_M=104,MM=200,bM=201,TM=202,EM=203,Jd=204,Qd=205,CM=206,AM=207,LM=208,wM=209,IM=210,RM=211,DM=212,PM=213,UM=214,jd=0,$d=1,ef=2,Er=3,tf=4,af=5,nf=6,sf=7,d0=0,BM=1,NM=2,Jn=0,f0=1,h0=2,p0=3,m0=4,g0=5,x0=6,y0=7;var v0=300,Vs=301,Ar=302,zf=303,Hf=304,Uu=306,rf=1e3,di=1001,of=1002,_a=1003,OM=1004;var Bu=1005;var Ia=1006,kf=1007;var qs=1008;var nn=1009,S0=1010,_0=1011,jo=1012,Gf=1013,Qn=1014,jn=1015,mi=1016,Vf=1017,qf=1018,$o=1020,M0=35902,b0=35899,T0=1021,E0=1022,kn=1023,fi=1026,Ws=1027,C0=1028,Wf=1029,Xs=1030,Xf=1031;var Yf=1033,Nu=33776,Ou=33777,Fu=33778,zu=33779,Zf=35840,Kf=35841,Jf=35842,Qf=35843,jf=36196,$f=37492,eh=37496,th=37488,ah=37489,Hu=37490,nh=37491,ih=37808,sh=37809,rh=37810,oh=37811,lh=37812,uh=37813,ch=37814,dh=37815,fh=37816,hh=37817,ph=37818,mh=37819,gh=37820,xh=37821,yh=36492,vh=36494,Sh=36495,_h=36283,Mh=36284,ku=36285,bh=36286;var fu=2300,lf=2301,Kd=2302,Jg=2303,Qg=2400,jg=2401,$g=2402;var FM=3200;var Th=0,zM=1,Qi="",vn="srgb",hu="srgb-linear",pu="linear",_t="srgb";var Mr=7680;var e0=519,HM=512,kM=513,GM=514,Eh=515,VM=516,qM=517,Ch=518,WM=519,t0=35044;var A0="300 es",Kn=2e3,Ho=2001;function BE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function NE(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function XM(){let t=mu("canvas");return t.style.display="block",t}var q_={},ko=null;function L0(...t){let e="THREE."+t.shift();ko?ko("log",e,...t):console.log(e,...t)}function YM(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let a=t[1];a&&a.isStackTrace?t[0]+=" "+a.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=YM(t);let e="THREE."+t.shift();if(ko)ko("warn",e,...t);else{let a=t[0];a&&a.isStackTrace?console.warn(a.getError(e)):console.warn(e,...t)}}function Ve(...t){t=YM(t);let e="THREE."+t.shift();if(ko)ko("error",e,...t);else{let a=t[0];a&&a.isStackTrace?console.error(a.getError(e)):console.error(e,...t)}}function br(...t){let e=t.join(" ");e in q_||(q_[e]=!0,Ge(...t))}function ZM(t,e,a){return new Promise(function(n,i){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:i();break;case t.TIMEOUT_EXPIRED:setTimeout(s,a);break;default:n()}}setTimeout(s,a)})}var KM={[jd]:$d,[ef]:nf,[tf]:sf,[Er]:af,[$d]:jd,[nf]:ef,[sf]:tf,[af]:Er},hi=class{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(a)===-1&&n[e].push(a)}hasEventListener(e,a){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(a)!==-1}removeEventListener(e,a){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(a);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let a=this._listeners;if(a===void 0)return;let n=a[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},Ua=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bg=Math.PI/180,uf=180/Math.PI;function Gu(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ua[t&255]+Ua[t>>8&255]+Ua[t>>16&255]+Ua[t>>24&255]+"-"+Ua[e&255]+Ua[e>>8&255]+"-"+Ua[e>>16&15|64]+Ua[e>>24&255]+"-"+Ua[a&63|128]+Ua[a>>8&255]+"-"+Ua[a>>16&255]+Ua[a>>24&255]+Ua[n&255]+Ua[n>>8&255]+Ua[n>>16&255]+Ua[n>>24&255]).toLowerCase()}function ot(t,e,a){return Math.max(e,Math.min(a,t))}function OE(t,e){return(t%e+e)%e}function Tg(t,e,a){return(1-a)*t+a*e}function su(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pe=class t{static{t.prototype.isVector2=!0}constructor(e=0,a=0){this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let a=this.x,n=this.y,i=e.elements;return this.x=i[0]*a+i[3]*n+i[6],this.y=i[1]*a+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=ot(this.x,e.x,a.x),this.y=ot(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=ot(this.x,e,a),this.y=ot(this.y,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y;return a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){let n=Math.cos(a),i=Math.sin(a),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,a=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=n,this._w=i}static slerpFlat(e,a,n,i,s,r,o){let l=n[i+0],u=n[i+1],f=n[i+2],p=n[i+3],c=s[r+0],h=s[r+1],v=s[r+2],M=s[r+3];if(p!==M||l!==c||u!==h||f!==v){let g=l*c+u*h+f*v+p*M;g<0&&(c=-c,h=-h,v=-v,M=-M,g=-g);let d=1-o;if(g<.9995){let m=Math.acos(g),_=Math.sin(m);d=Math.sin(d*m)/_,o=Math.sin(o*m)/_,l=l*d+c*o,u=u*d+h*o,f=f*d+v*o,p=p*d+M*o}else{l=l*d+c*o,u=u*d+h*o,f=f*d+v*o,p=p*d+M*o;let m=1/Math.sqrt(l*l+u*u+f*f+p*p);l*=m,u*=m,f*=m,p*=m}}e[a]=l,e[a+1]=u,e[a+2]=f,e[a+3]=p}static multiplyQuaternionsFlat(e,a,n,i,s,r){let o=n[i],l=n[i+1],u=n[i+2],f=n[i+3],p=s[r],c=s[r+1],h=s[r+2],v=s[r+3];return e[a]=o*v+f*p+l*h-u*c,e[a+1]=l*v+f*c+u*p-o*h,e[a+2]=u*v+f*h+o*c-l*p,e[a+3]=f*v-o*p-l*c-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,n,i){return this._x=e,this._y=a,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(n/2),f=o(i/2),p=o(s/2),c=l(n/2),h=l(i/2),v=l(s/2);switch(r){case"XYZ":this._x=c*f*p+u*h*v,this._y=u*h*p-c*f*v,this._z=u*f*v+c*h*p,this._w=u*f*p-c*h*v;break;case"YXZ":this._x=c*f*p+u*h*v,this._y=u*h*p-c*f*v,this._z=u*f*v-c*h*p,this._w=u*f*p+c*h*v;break;case"ZXY":this._x=c*f*p-u*h*v,this._y=u*h*p+c*f*v,this._z=u*f*v+c*h*p,this._w=u*f*p-c*h*v;break;case"ZYX":this._x=c*f*p-u*h*v,this._y=u*h*p+c*f*v,this._z=u*f*v-c*h*p,this._w=u*f*p+c*h*v;break;case"YZX":this._x=c*f*p+u*h*v,this._y=u*h*p+c*f*v,this._z=u*f*v-c*h*p,this._w=u*f*p-c*h*v;break;case"XZY":this._x=c*f*p-u*h*v,this._y=u*h*p-c*f*v,this._z=u*f*v+c*h*p,this._w=u*f*p+c*h*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){let n=a/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let a=e.elements,n=a[0],i=a[4],s=a[8],r=a[1],o=a[5],l=a[9],u=a[2],f=a[6],p=a[10],c=n+o+p;if(c>0){let h=.5/Math.sqrt(c+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-u)*h,this._z=(r-i)*h}else if(n>o&&n>p){let h=2*Math.sqrt(1+n-o-p);this._w=(f-l)/h,this._x=.25*h,this._y=(i+r)/h,this._z=(s+u)/h}else if(o>p){let h=2*Math.sqrt(1+o-n-p);this._w=(s-u)/h,this._x=(i+r)/h,this._y=.25*h,this._z=(l+f)/h}else{let h=2*Math.sqrt(1+p-n-o);this._w=(r-i)/h,this._x=(s+u)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let n=e.dot(a)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,a){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,a/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=a._x,l=a._y,u=a._z,f=a._w;return this._x=n*f+r*o+i*u-s*l,this._y=i*f+r*l+s*o-n*u,this._z=s*f+r*u+n*l-i*o,this._w=r*f-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(e,a){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let l=1-a;if(o<.9995){let u=Math.acos(o),f=Math.sin(u);l=Math.sin(l*u)/f,a=Math.sin(a*u)/f,this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this._onChangeCallback()}else this._x=this._x*l+n*a,this._y=this._y*l+i*a,this._z=this._z*l+s*a,this._w=this._w*l+r*a,this.normalize();return this}slerpQuaternions(e,a,n){return this.copy(e).slerp(a,n)}random(){let e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(a),s*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class t{static{t.prototype.isVector3=!0}constructor(e=0,a=0,n=0){this.x=e,this.y=a,this.z=n}set(e,a,n){return n===void 0&&(n=this.z),this.x=e,this.y=a,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(W_.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(W_.setFromAxisAngle(e,a))}applyMatrix3(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[3]*n+s[6]*i,this.y=s[1]*a+s[4]*n+s[7]*i,this.z=s[2]*a+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*a+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*a+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*a+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*a+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let a=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*i-o*n),f=2*(o*a-s*i),p=2*(s*n-r*a);return this.x=a+l*u+r*p-o*f,this.y=n+l*f+o*u-s*p,this.z=i+l*p+s*f-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let a=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*a+s[4]*n+s[8]*i,this.y=s[1]*a+s[5]*n+s[9]*i,this.z=s[2]*a+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=ot(this.x,e.x,a.x),this.y=ot(this.y,e.y,a.y),this.z=ot(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=ot(this.x,e,a),this.y=ot(this.y,e,a),this.z=ot(this.z,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){let n=e.x,i=e.y,s=e.z,r=a.x,o=a.y,l=a.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){let a=e.lengthSq();if(a===0)return this.set(0,0,0);let n=e.dot(this)/a;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eg.copy(this).projectOnVector(e),this.sub(Eg)}reflect(e){return this.sub(Eg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;let n=this.dot(e)/a;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let a=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return a*a+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,n){let i=Math.sin(a)*e;return this.x=i*Math.sin(n),this.y=Math.cos(a)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,n){return this.x=e*Math.sin(a),this.y=n,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){let a=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=n,this.z=i,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,a=Math.random()*2-1,n=Math.sqrt(1-a*a);return this.x=n*Math.cos(e),this.y=a,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eg=new U,W_=new _n,Ye=class t{static{t.prototype.isMatrix3=!0}constructor(e,a,n,i,s,r,o,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u)}set(e,a,n,i,s,r,o,l,u){let f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=a,f[4]=s,f[5]=l,f[6]=n,f[7]=r,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],this}extractBasis(e,a,n){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[3],l=n[6],u=n[1],f=n[4],p=n[7],c=n[2],h=n[5],v=n[8],M=i[0],g=i[3],d=i[6],m=i[1],_=i[4],x=i[7],C=i[2],A=i[5],L=i[8];return s[0]=r*M+o*m+l*C,s[3]=r*g+o*_+l*A,s[6]=r*d+o*x+l*L,s[1]=u*M+f*m+p*C,s[4]=u*g+f*_+p*A,s[7]=u*d+f*x+p*L,s[2]=c*M+h*m+v*C,s[5]=c*g+h*_+v*A,s[8]=c*d+h*x+v*L,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return a*r*f-a*o*u-n*s*f+n*o*l+i*s*u-i*r*l}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=f*r-o*u,c=o*l-f*s,h=u*s-r*l,v=a*p+n*c+i*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/v;return e[0]=p*M,e[1]=(i*u-f*n)*M,e[2]=(o*n-i*r)*M,e[3]=c*M,e[4]=(f*a-i*l)*M,e[5]=(i*s-o*a)*M,e[6]=h*M,e[7]=(n*l-u*a)*M,e[8]=(r*a-n*s)*M,this}transpose(){let e,a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,n,i,s,r,o){let l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*r+u*o)+r+e,-i*u,i*l,-i*(-u*r+l*o)+o+a,0,0,1),this}scale(e,a){return br("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cg.makeScale(e,a)),this}rotate(e){return br("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cg.makeRotation(-e)),this}translate(e,a){return br("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cg.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,n,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<9;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<9;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Cg=new Ye,X_=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y_=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FE(){let t={enabled:!0,workingColorSpace:hu,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_t&&(i.r=Wi(i.r),i.g=Wi(i.g),i.b=Wi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_t&&(i.r=zo(i.r),i.g=zo(i.g),i.b=zo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qi?pu:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],n=[.3127,.329];return t.define({[hu]:{primaries:e,whitePoint:n,transfer:pu,toXYZ:X_,fromXYZ:Y_,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:X_,fromXYZ:Y_,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),t}var ct=FE();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Ao,cf=class{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ao===void 0&&(Ao=mu("canvas")),Ao.width=e.width,Ao.height=e.height;let i=Ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ao}return n.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let a=mu("canvas");a.width=e.width,a.height=e.height;let n=a.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Wi(s[r]/255)*255;return n.putImageData(i,0,0),a}else if(e.data){let a=e.data.slice(0);for(let n=0;n<a.length;n++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[n]=Math.floor(Wi(a[n]/255)*255):a[n]=Wi(a[n]);return{data:a,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zE=0,Go=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Gu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):typeof VideoFrame<"u"&&a instanceof VideoFrame?e.set(a.displayWidth,a.displayHeight,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Ag(i[r].image)):s.push(Ag(i[r]))}else s=Ag(i);n.url=s}return a||(e.images[this.uuid]=n),n}};function Ag(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?cf.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var HE=0,Lg=new U,an=class t extends hi{constructor(e=t.DEFAULT_IMAGE,a=t.DEFAULT_MAPPING,n=di,i=di,s=Ia,r=qs,o=kn,l=nn,u=t.DEFAULT_ANISOTROPY,f=Qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=Gu(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lg).x}get height(){return this.source.getSize(Lg).y}get depth(){return this.source.getSize(Lg).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let a in e){let n=e[a];if(n===void 0){Ge(`Texture.setValues(): parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ge(`Texture.setValues(): property '${a}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),a||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rf:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rf:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=v0;an.DEFAULT_ANISOTROPY=1;var Yt=class t{static{t.prototype.isVector4=!0}constructor(e=0,a=0,n=0,i=1){this.x=e,this.y=a,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,n,i){return this.x=e,this.y=a,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let a=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*a+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*a+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*a+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*a+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,n,i,s,l=e.elements,u=l[0],f=l[4],p=l[8],c=l[1],h=l[5],v=l[9],M=l[2],g=l[6],d=l[10];if(Math.abs(f-c)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+c)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(u+h+d-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;let _=(u+1)/2,x=(h+1)/2,C=(d+1)/2,A=(f+c)/4,L=(p+M)/4,y=(v+g)/4;return _>x&&_>C?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=A/n,s=L/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=y/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=L/s,i=y/s),this.set(n,i,s,a),this}let m=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(c-f)*(c-f));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(p-M)/m,this.z=(c-f)/m,this.w=Math.acos((u+h+d-1)/2),this}setFromMatrixPosition(e){let a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=ot(this.x,e.x,a.x),this.y=ot(this.y,e.y,a.y),this.z=ot(this.z,e.z,a.z),this.w=ot(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=ot(this.x,e,a),this.y=ot(this.y,e,a),this.z=ot(this.z,e,a),this.w=ot(this.w,e,a),this}clampLength(e,a){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,n){return this.x=e.x+(a.x-e.x)*n,this.y=e.y+(a.y-e.y)*n,this.z=e.z+(a.z-e.z)*n,this.w=e.w+(a.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},df=class extends hi{constructor(e=1,a=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ia,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=n.depth,this.scissor=new Yt(0,0,e,a),this.scissorTest=!1,this.viewport=new Yt(0,0,e,a),this.textures=[];let i={width:e,height:a,depth:n.depth},s=new an(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let a={minFilter:Ia,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,n=1){if(this.width!==e||this.height!==a||this.depth!==n){this.width=e,this.height=a,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=a,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;let i=Object.assign({},e.textures[a].image);this.textures[a].source=new Go(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends df{constructor(e=1,a=1,n={}){super(e,a,n),this.isWebGLRenderTarget=!0}},gu=class extends an{constructor(e=null,a=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=_a,this.minFilter=_a,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ff=class extends an{constructor(e=null,a=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:n,depth:i},this.magFilter=_a,this.minFilter=_a,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kt=class t{static{t.prototype.isMatrix4=!0}constructor(e,a,n,i,s,r,o,l,u,f,p,c,h,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,n,i,s,r,o,l,u,f,p,c,h,v,M,g)}set(e,a,n,i,s,r,o,l,u,f,p,c,h,v,M,g){let d=this.elements;return d[0]=e,d[4]=a,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=p,d[14]=c,d[3]=h,d[7]=v,d[11]=M,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let a=this.elements,n=e.elements;return a[0]=n[0],a[1]=n[1],a[2]=n[2],a[3]=n[3],a[4]=n[4],a[5]=n[5],a[6]=n[6],a[7]=n[7],a[8]=n[8],a[9]=n[9],a[10]=n[10],a[11]=n[11],a[12]=n[12],a[13]=n[13],a[14]=n[14],a[15]=n[15],this}copyPosition(e){let a=this.elements,n=e.elements;return a[12]=n[12],a[13]=n[13],a[14]=n[14],this}setFromMatrix3(e){let a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,n){return this.determinantAffine()===0?(e.set(1,0,0),a.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,a,n){return this.set(e.x,a.x,n.x,0,e.y,a.y,n.y,0,e.z,a.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let a=this.elements,n=e.elements,i=1/Lo.setFromMatrixColumn(e,0).length(),s=1/Lo.setFromMatrixColumn(e,1).length(),r=1/Lo.setFromMatrixColumn(e,2).length();return a[0]=n[0]*i,a[1]=n[1]*i,a[2]=n[2]*i,a[3]=0,a[4]=n[4]*s,a[5]=n[5]*s,a[6]=n[6]*s,a[7]=0,a[8]=n[8]*r,a[9]=n[9]*r,a[10]=n[10]*r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){let a=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),f=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let c=r*f,h=r*p,v=o*f,M=o*p;a[0]=l*f,a[4]=-l*p,a[8]=u,a[1]=h+v*u,a[5]=c-M*u,a[9]=-o*l,a[2]=M-c*u,a[6]=v+h*u,a[10]=r*l}else if(e.order==="YXZ"){let c=l*f,h=l*p,v=u*f,M=u*p;a[0]=c+M*o,a[4]=v*o-h,a[8]=r*u,a[1]=r*p,a[5]=r*f,a[9]=-o,a[2]=h*o-v,a[6]=M+c*o,a[10]=r*l}else if(e.order==="ZXY"){let c=l*f,h=l*p,v=u*f,M=u*p;a[0]=c-M*o,a[4]=-r*p,a[8]=v+h*o,a[1]=h+v*o,a[5]=r*f,a[9]=M-c*o,a[2]=-r*u,a[6]=o,a[10]=r*l}else if(e.order==="ZYX"){let c=r*f,h=r*p,v=o*f,M=o*p;a[0]=l*f,a[4]=v*u-h,a[8]=c*u+M,a[1]=l*p,a[5]=M*u+c,a[9]=h*u-v,a[2]=-u,a[6]=o*l,a[10]=r*l}else if(e.order==="YZX"){let c=r*l,h=r*u,v=o*l,M=o*u;a[0]=l*f,a[4]=M-c*p,a[8]=v*p+h,a[1]=p,a[5]=r*f,a[9]=-o*f,a[2]=-u*f,a[6]=h*p+v,a[10]=c-M*p}else if(e.order==="XZY"){let c=r*l,h=r*u,v=o*l,M=o*u;a[0]=l*f,a[4]=-p,a[8]=u*f,a[1]=c*p+M,a[5]=r*f,a[9]=h*p-v,a[2]=v*p-h,a[6]=o*f,a[10]=M*p+c}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kE,e,GE)}lookAt(e,a,n){let i=this.elements;return xn.subVectors(e,a),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ws.crossVectors(n,xn),ws.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ws.crossVectors(n,xn)),ws.normalize(),wd.crossVectors(xn,ws),i[0]=ws.x,i[4]=wd.x,i[8]=xn.x,i[1]=ws.y,i[5]=wd.y,i[9]=xn.y,i[2]=ws.z,i[6]=wd.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){let n=e.elements,i=a.elements,s=this.elements,r=n[0],o=n[4],l=n[8],u=n[12],f=n[1],p=n[5],c=n[9],h=n[13],v=n[2],M=n[6],g=n[10],d=n[14],m=n[3],_=n[7],x=n[11],C=n[15],A=i[0],L=i[4],y=i[8],E=i[12],I=i[1],P=i[5],O=i[9],K=i[13],Y=i[2],H=i[6],Z=i[10],k=i[14],ee=i[3],oe=i[7],xe=i[11],Se=i[15];return s[0]=r*A+o*I+l*Y+u*ee,s[4]=r*L+o*P+l*H+u*oe,s[8]=r*y+o*O+l*Z+u*xe,s[12]=r*E+o*K+l*k+u*Se,s[1]=f*A+p*I+c*Y+h*ee,s[5]=f*L+p*P+c*H+h*oe,s[9]=f*y+p*O+c*Z+h*xe,s[13]=f*E+p*K+c*k+h*Se,s[2]=v*A+M*I+g*Y+d*ee,s[6]=v*L+M*P+g*H+d*oe,s[10]=v*y+M*O+g*Z+d*xe,s[14]=v*E+M*K+g*k+d*Se,s[3]=m*A+_*I+x*Y+C*ee,s[7]=m*L+_*P+x*H+C*oe,s[11]=m*y+_*O+x*Z+C*xe,s[15]=m*E+_*K+x*k+C*Se,this}multiplyScalar(e){let a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],u=e[13],f=e[2],p=e[6],c=e[10],h=e[14],v=e[3],M=e[7],g=e[11],d=e[15],m=l*h-u*c,_=o*h-u*p,x=o*c-l*p,C=r*h-u*f,A=r*c-l*f,L=r*p-o*f;return a*(M*m-g*_+d*x)-n*(v*m-g*C+d*A)+i*(v*_-M*C+d*L)-s*(v*x-M*A+g*L)}determinantAffine(){let e=this.elements,a=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],l=e[2],u=e[6],f=e[10];return a*(r*f-o*u)-n*(s*f-o*l)+i*(s*u-r*l)}transpose(){let e=this.elements,a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=a,i[14]=n),this}invert(){let e=this.elements,a=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],u=e[7],f=e[8],p=e[9],c=e[10],h=e[11],v=e[12],M=e[13],g=e[14],d=e[15],m=a*o-n*r,_=a*l-i*r,x=a*u-s*r,C=n*l-i*o,A=n*u-s*o,L=i*u-s*l,y=f*M-p*v,E=f*g-c*v,I=f*d-h*v,P=p*g-c*M,O=p*d-h*M,K=c*d-h*g,Y=m*K-_*O+x*P+C*I-A*E+L*y;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/Y;return e[0]=(o*K-l*O+u*P)*H,e[1]=(i*O-n*K-s*P)*H,e[2]=(M*L-g*A+d*C)*H,e[3]=(c*A-p*L-h*C)*H,e[4]=(l*I-r*K-u*E)*H,e[5]=(a*K-i*I+s*E)*H,e[6]=(g*x-v*L-d*_)*H,e[7]=(f*L-c*x+h*_)*H,e[8]=(r*O-o*I+u*y)*H,e[9]=(n*I-a*O-s*y)*H,e[10]=(v*A-M*x+d*m)*H,e[11]=(p*x-f*A-h*m)*H,e[12]=(o*E-r*P-l*y)*H,e[13]=(a*P-n*E+i*y)*H,e[14]=(M*_-v*C-g*m)*H,e[15]=(f*C-p*_+c*m)*H,this}scale(e){let a=this.elements,n=e.x,i=e.y,s=e.z;return a[0]*=n,a[4]*=i,a[8]*=s,a[1]*=n,a[5]*=i,a[9]*=s,a[2]*=n,a[6]*=i,a[10]*=s,a[3]*=n,a[7]*=i,a[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,n,i))}makeTranslation(e,a,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,n,0,0,0,1),this}makeRotationX(e){let a=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,a,-n,0,0,n,a,0,0,0,0,1),this}makeRotationY(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,0,n,0,0,1,0,0,-n,0,a,0,0,0,0,1),this}makeRotationZ(e){let a=Math.cos(e),n=Math.sin(e);return this.set(a,-n,0,0,n,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){let n=Math.cos(a),i=Math.sin(a),s=1-n,r=e.x,o=e.y,l=e.z,u=s*r,f=s*o;return this.set(u*r+n,u*o-i*l,u*l+i*o,0,u*o+i*l,f*o+n,f*l-i*r,0,u*l-i*o,f*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,a,n){return this.set(e,0,0,0,0,a,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,a,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,a,i,1,0,0,0,0,1),this}compose(e,a,n){let i=this.elements,s=a._x,r=a._y,o=a._z,l=a._w,u=s+s,f=r+r,p=o+o,c=s*u,h=s*f,v=s*p,M=r*f,g=r*p,d=o*p,m=l*u,_=l*f,x=l*p,C=n.x,A=n.y,L=n.z;return i[0]=(1-(M+d))*C,i[1]=(h+x)*C,i[2]=(v-_)*C,i[3]=0,i[4]=(h-x)*A,i[5]=(1-(c+d))*A,i[6]=(g+m)*A,i[7]=0,i[8]=(v+_)*L,i[9]=(g-m)*L,i[10]=(1-(c+M))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,a,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),a.identity(),this;let r=Lo.set(i[0],i[1],i[2]).length(),o=Lo.set(i[4],i[5],i[6]).length(),l=Lo.set(i[8],i[9],i[10]).length();s<0&&(r=-r),Xn.copy(this);let u=1/r,f=1/o,p=1/l;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=f,Xn.elements[5]*=f,Xn.elements[6]*=f,Xn.elements[8]*=p,Xn.elements[9]*=p,Xn.elements[10]*=p,a.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=l,this}makePerspective(e,a,n,i,s,r,o=Kn,l=!1){let u=this.elements,f=2*s/(a-e),p=2*s/(n-i),c=(a+e)/(a-e),h=(n+i)/(n-i),v,M;if(l)v=s/(r-s),M=r*s/(r-s);else if(o===Kn)v=-(r+s)/(r-s),M=-2*r*s/(r-s);else if(o===Ho)v=-r/(r-s),M=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=c,u[12]=0,u[1]=0,u[5]=p,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,a,n,i,s,r,o=Kn,l=!1){let u=this.elements,f=2/(a-e),p=2/(n-i),c=-(a+e)/(a-e),h=-(n+i)/(n-i),v,M;if(l)v=1/(r-s),M=r/(r-s);else if(o===Kn)v=-2/(r-s),M=-(r+s)/(r-s);else if(o===Ho)v=-1/(r-s),M=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=c,u[1]=0,u[5]=p,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){let a=this.elements,n=e.elements;for(let i=0;i<16;i++)if(a[i]!==n[i])return!1;return!0}fromArray(e,a=0){for(let n=0;n<16;n++)this.elements[n]=e[n+a];return this}toArray(e=[],a=0){let n=this.elements;return e[a]=n[0],e[a+1]=n[1],e[a+2]=n[2],e[a+3]=n[3],e[a+4]=n[4],e[a+5]=n[5],e[a+6]=n[6],e[a+7]=n[7],e[a+8]=n[8],e[a+9]=n[9],e[a+10]=n[10],e[a+11]=n[11],e[a+12]=n[12],e[a+13]=n[13],e[a+14]=n[14],e[a+15]=n[15],e}},Lo=new U,Xn=new kt,kE=new U(0,0,0),GE=new U(1,1,1),ws=new U,wd=new U,xn=new U,Z_=new kt,K_=new _n,Yi=class t{constructor(e=0,a=0,n=0,i=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,n,i=this._order){return this._x=e,this._y=a,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],u=i[5],f=i[9],p=i[2],c=i[6],h=i[10];switch(a){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-p,h),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(c,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ot(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,n){return Z_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Z_,a,n)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return K_.setFromEuler(this),this.setFromQuaternion(K_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yi.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VE=0,J_=new U,wo=new _n,Hi=new kt,Id=new U,ru=new U,qE=new U,WE=new _n,Q_=new U(1,0,0),j_=new U(0,1,0),$_=new U(0,0,1),eM={type:"added"},XE={type:"removed"},Io={type:"childadded",child:null},wg={type:"childremoved",child:null},Ga=class t extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VE++}),this.uuid=Gu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new U,a=new Yi,n=new _n,i=new U(1,1,1);function s(){n.setFromEuler(a,!1)}function r(){a.setFromQuaternion(n,void 0,!1)}a._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Ye}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return wo.setFromAxisAngle(e,a),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,a){return wo.setFromAxisAngle(e,a),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(Q_,e)}rotateY(e){return this.rotateOnAxis(j_,e)}rotateZ(e){return this.rotateOnAxis($_,e)}translateOnAxis(e,a){return J_.copy(e).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(Q_,e)}translateY(e){return this.translateOnAxis(j_,e)}translateZ(e){return this.translateOnAxis($_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,a,n){e.isVector3?Id.copy(e):Id.set(e,a,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ru.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ru,Id,this.up):Hi.lookAt(Id,ru,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),wo.setFromRotationMatrix(Hi),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eM),Io.child=e,this.dispatchEvent(Io),Io.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(XE),wg.child=e,this.dispatchEvent(wg),wg.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eM),Io.child=e,this.dispatchEvent(Io),Io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,a);if(r!==void 0)return r}}getObjectsByProperty(e,a,n=[]){this[e]===a&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,a,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ru,e,qE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ru,WE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].traverseVisible(e)}traverseAncestors(e){let a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let a=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=a-s[0]*a-s[4]*n-s[8]*i,s[13]+=n-s[1]*a-s[5]*n-s[9]*i,s[14]+=i-s[2]*a-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let a=this.children;for(let n=0,i=a.length;n<i;n++)a[n].updateMatrixWorld(e)}updateWorldMatrix(e,a,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),a===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let a=e===void 0||typeof e=="string",n={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){let p=l[u];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(a){let o=r(e.geometries),l=r(e.materials),u=r(e.textures),f=r(e.images),p=r(e.shapes),c=r(e.skeletons),h=r(e.animations),v=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),c.length>0&&(n.skeletons=c),h.length>0&&(n.animations=h),v.length>0&&(n.nodes=v)}return n.object=i,n;function r(o){let l=[];for(let u in o){let f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ga.DEFAULT_UP=new U(0,1,0);Ga.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ga.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends Ga{constructor(){super(),this.isGroup=!0,this.type="Group"}},YE={type:"move"},qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let a=this._hand;if(a)for(let n of e.hand.values())this._getHandJoint(a,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,n){let i=null,s=null,r=null,o=this._targetRay,l=this._grip,u=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(let M of e.hand.values()){let g=a.getJointPose(M,n),d=this._getHandJoint(u,M);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let f=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],c=f.position.distanceTo(p.position),h=.02,v=.005;u.inputState.pinching&&c>h+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&c<=h-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=a.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=a.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[a.jointName]=n,e.add(n)}return e.joints[a.jointName]}},JM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},Rd={h:0,s:0,l:0};function Ig(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*6*(2/3-a):t}var Ue=class{constructor(e,a,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,n)}set(e,a,n){if(a===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,a,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,a),this}setRGB(e,a,n,i=ct.workingColorSpace){return this.r=e,this.g=a,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,a,n,i=ct.workingColorSpace){if(e=OE(e,1),a=ot(a,0,1),n=ot(n,0,1),a===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+a):n+a-n*a,r=2*n-s;this.r=Ig(r,s,e+1/3),this.g=Ig(r,s,e),this.b=Ig(r,s,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,a=vn){function n(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,a);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,a);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,a);break;default:Ge("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,a);if(r===6)return this.setHex(parseInt(s,16),a);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=vn){let n=JM[e.toLowerCase()];return n!==void 0?this.setHex(n,a):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return ct.workingToColorSpace(Ba.copy(this),e),Math.round(ot(Ba.r*255,0,255))*65536+Math.round(ot(Ba.g*255,0,255))*256+Math.round(ot(Ba.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=ct.workingColorSpace){ct.workingToColorSpace(Ba.copy(this),a);let n=Ba.r,i=Ba.g,s=Ba.b,r=Math.max(n,i,s),o=Math.min(n,i,s),l,u,f=(o+r)/2;if(o===r)l=0,u=0;else{let p=r-o;switch(u=f<=.5?p/(r+o):p/(2-r-o),r){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,a=ct.workingColorSpace){return ct.workingToColorSpace(Ba.copy(this),a),e.r=Ba.r,e.g=Ba.g,e.b=Ba.b,e}getStyle(e=vn){ct.workingToColorSpace(Ba.copy(this),e);let a=Ba.r,n=Ba.g,i=Ba.b;return e!==vn?`color(${e} ${a.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,a,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+a,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,n){return this.r=e.r+(a.r-e.r)*n,this.g=e.g+(a.g-e.g)*n,this.b=e.b+(a.b-e.b)*n,this}lerpHSL(e,a){this.getHSL(Is),e.getHSL(Rd);let n=Tg(Is.h,Rd.h,a),i=Tg(Is.s,Rd.s,a),s=Tg(Is.l,Rd.l,a);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let a=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*a+s[3]*n+s[6]*i,this.g=s[1]*a+s[4]*n+s[7]*i,this.b=s[2]*a+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ba=new Ue;Ue.NAMES=JM;var xu=class t{constructor(e,a=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=a}clone(){return new t(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var yu=class extends Ga{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}},Yn=new U,ki=new U,Rg=new U,Gi=new U,Ro=new U,Do=new U,tM=new U,Dg=new U,Pg=new U,Ug=new U,Bg=new Yt,Ng=new Yt,Og=new Yt,Bs=class t{constructor(e=new U,a=new U,n=new U){this.a=e,this.b=a,this.c=n}static getNormal(e,a,n,i){i.subVectors(n,a),Yn.subVectors(e,a),i.cross(Yn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,a,n,i,s){Yn.subVectors(i,a),ki.subVectors(n,a),Rg.subVectors(e,a);let r=Yn.dot(Yn),o=Yn.dot(ki),l=Yn.dot(Rg),u=ki.dot(ki),f=ki.dot(Rg),p=r*u-o*o;if(p===0)return s.set(0,0,0),null;let c=1/p,h=(u*l-o*f)*c,v=(r*f-o*l)*c;return s.set(1-h-v,v,h)}static containsPoint(e,a,n,i){return this.getBarycoord(e,a,n,i,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,a,n,i,s,r,o,l){return this.getBarycoord(e,a,n,i,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(r,Gi.y),l.addScaledVector(o,Gi.z),l)}static getInterpolatedAttribute(e,a,n,i,s,r){return Bg.setScalar(0),Ng.setScalar(0),Og.setScalar(0),Bg.fromBufferAttribute(e,a),Ng.fromBufferAttribute(e,n),Og.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Bg,s.x),r.addScaledVector(Ng,s.y),r.addScaledVector(Og,s.z),r}static isFrontFacing(e,a,n,i){return Yn.subVectors(n,a),ki.subVectors(e,a),Yn.cross(ki).dot(i)<0}set(e,a,n){return this.a.copy(e),this.b.copy(a),this.c.copy(n),this}setFromPointsAndIndices(e,a,n,i){return this.a.copy(e[a]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,a,n,i){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),Yn.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return t.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,n,i,s){return t.getInterpolation(e,this.a,this.b,this.c,a,n,i,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){let n=this.a,i=this.b,s=this.c,r,o;Ro.subVectors(i,n),Do.subVectors(s,n),Dg.subVectors(e,n);let l=Ro.dot(Dg),u=Do.dot(Dg);if(l<=0&&u<=0)return a.copy(n);Pg.subVectors(e,i);let f=Ro.dot(Pg),p=Do.dot(Pg);if(f>=0&&p<=f)return a.copy(i);let c=l*p-f*u;if(c<=0&&l>=0&&f<=0)return r=l/(l-f),a.copy(n).addScaledVector(Ro,r);Ug.subVectors(e,s);let h=Ro.dot(Ug),v=Do.dot(Ug);if(v>=0&&h<=v)return a.copy(s);let M=h*u-l*v;if(M<=0&&u>=0&&v<=0)return o=u/(u-v),a.copy(n).addScaledVector(Do,o);let g=f*v-h*p;if(g<=0&&p-f>=0&&h-v>=0)return tM.subVectors(s,i),o=(p-f)/(p-f+(h-v)),a.copy(i).addScaledVector(tM,o);let d=1/(g+M+c);return r=M*d,o=c*d,a.copy(n).addScaledVector(Ro,r).addScaledVector(Do,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Os=class{constructor(e=new U(1/0,1/0,1/0),a=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a+=3)this.expandByPoint(Zn.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,n=e.count;a<n;a++)this.expandByPoint(Zn.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,n=e.length;a<n;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){let n=Zn.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(a===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Zn):Zn.fromBufferAttribute(s,r),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dd.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dd.copy(n.boundingBox)),Dd.applyMatrix4(e.matrixWorld),this.union(Dd)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,n;return e.normal.x>0?(a=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),a<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ou),Pd.subVectors(this.max,ou),Po.subVectors(e.a,ou),Uo.subVectors(e.b,ou),Bo.subVectors(e.c,ou),Rs.subVectors(Uo,Po),Ds.subVectors(Bo,Uo),yr.subVectors(Po,Bo);let a=[0,-Rs.z,Rs.y,0,-Ds.z,Ds.y,0,-yr.z,yr.y,Rs.z,0,-Rs.x,Ds.z,0,-Ds.x,yr.z,0,-yr.x,-Rs.y,Rs.x,0,-Ds.y,Ds.x,0,-yr.y,yr.x,0];return!Fg(a,Po,Uo,Bo,Pd)||(a=[1,0,0,0,1,0,0,0,1],!Fg(a,Po,Uo,Bo,Pd))?!1:(Ud.crossVectors(Rs,Ds),a=[Ud.x,Ud.y,Ud.z],Fg(a,Po,Uo,Bo,Pd))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,Dd=new Os,Po=new U,Uo=new U,Bo=new U,Rs=new U,Ds=new U,yr=new U,ou=new U,Pd=new U,Ud=new U,vr=new U;function Fg(t,e,a,n,i){for(let s=0,r=t.length-3;s<=r;s+=3){vr.fromArray(t,s);let o=i.x*Math.abs(vr.x)+i.y*Math.abs(vr.y)+i.z*Math.abs(vr.z),l=e.dot(vr),u=a.dot(vr),f=n.dot(vr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}var ca=new U,Bd=new Pe,ZE=0,Sn=class extends hi{constructor(e,a,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZE++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=n,this.usage=t0,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,n){e*=this.itemSize,n*=a.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=a.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,n=this.count;a<n;a++)Bd.fromBufferAttribute(this,a),Bd.applyMatrix3(e),this.setXY(a,Bd.x,Bd.y);else if(this.itemSize===3)for(let a=0,n=this.count;a<n;a++)ca.fromBufferAttribute(this,a),ca.applyMatrix3(e),this.setXYZ(a,ca.x,ca.y,ca.z);return this}applyMatrix4(e){for(let a=0,n=this.count;a<n;a++)ca.fromBufferAttribute(this,a),ca.applyMatrix4(e),this.setXYZ(a,ca.x,ca.y,ca.z);return this}applyNormalMatrix(e){for(let a=0,n=this.count;a<n;a++)ca.fromBufferAttribute(this,a),ca.applyNormalMatrix(e),this.setXYZ(a,ca.x,ca.y,ca.z);return this}transformDirection(e){for(let a=0,n=this.count;a<n;a++)ca.fromBufferAttribute(this,a),ca.transformDirection(e),this.setXYZ(a,ca.x,ca.y,ca.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let n=this.array[e*this.itemSize+a];return this.normalized&&(n=su(n,this.array)),n}setComponent(e,a,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+a]=n,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=su(a,this.array)),a}setX(e,a){return this.normalized&&(a=tn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=su(a,this.array)),a}setY(e,a){return this.normalized&&(a=tn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=su(a,this.array)),a}setZ(e,a){return this.normalized&&(a=tn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=su(a,this.array)),a}setW(e,a){return this.normalized&&(a=tn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,n){return e*=this.itemSize,this.normalized&&(a=tn(a,this.array),n=tn(n,this.array)),this.array[e+0]=a,this.array[e+1]=n,this}setXYZ(e,a,n,i){return e*=this.itemSize,this.normalized&&(a=tn(a,this.array),n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,a,n,i,s){return e*=this.itemSize,this.normalized&&(a=tn(a,this.array),n=tn(n,this.array),i=tn(i,this.array),s=tn(s,this.array)),this.array[e+0]=a,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}};var vu=class extends Sn{constructor(e,a,n){super(new Uint16Array(e),a,n)}};var Su=class extends Sn{constructor(e,a,n){super(new Uint32Array(e),a,n)}};var Rt=class extends Sn{constructor(e,a,n){super(new Float32Array(e),a,n)}},KE=new Os,lu=new U,zg=new U,Wo=class{constructor(e=new U,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){let n=this.center;a!==void 0?n.copy(a):KE.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){let n=this.center.distanceToSquared(e);return a.copy(e),n>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lu.subVectors(e,this.center);let a=lu.lengthSq();if(a>this.radius*this.radius){let n=Math.sqrt(a),i=(n-this.radius)*.5;this.center.addScaledVector(lu,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lu.copy(e.center).add(zg)),this.expandByPoint(lu.copy(e.center).sub(zg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},JE=0,zn=new kt,Hg=new Ga,No=new U,yn=new Os,uu=new Os,Sa=new U,Va=class t extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=Gu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BE(e)?Su:vu)(e,1):this.index=e,this}setIndirect(e,a=0){return this.indirect=e,this.indirectOffset=a,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,n=0){this.groups.push({start:e,count:a,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){let a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,a,n){return zn.makeTranslation(e,a,n),this.applyMatrix4(zn),this}scale(e,a,n){return zn.makeScale(e,a,n),this.applyMatrix4(zn),this}lookAt(e){return Hg.lookAt(e),Hg.updateMatrix(),this.applyMatrix4(Hg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(e){let a=this.getAttribute("position");if(a===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Rt(n,3))}else{let n=Math.min(e.length,a.count);for(let i=0;i<n;i++){let s=e[i];a.setXYZ(i,s.x,s.y,s.z||0)}e.length>a.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let n=0,i=a.length;n<i;n++){let s=a[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Sa.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Sa),Sa.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Sa)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);let e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),a)for(let s=0,r=a.length;s<r;s++){let o=a[s];uu.setFromBufferAttribute(o),this.morphTargetsRelative?(Sa.addVectors(yn.min,uu.min),yn.expandByPoint(Sa),Sa.addVectors(yn.max,uu.max),yn.expandByPoint(Sa)):(yn.expandByPoint(uu.min),yn.expandByPoint(uu.max))}yn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Sa.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Sa));if(a)for(let s=0,r=a.length;s<r;s++){let o=a[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Sa.fromBufferAttribute(o,u),l&&(No.fromBufferAttribute(e,u),Sa.add(No)),i=Math.max(i,n.distanceToSquared(Sa))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=a.position,i=a.normal,s=a.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new U,l[y]=new U;let u=new U,f=new U,p=new U,c=new Pe,h=new Pe,v=new Pe,M=new U,g=new U;function d(y,E,I){u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,E),p.fromBufferAttribute(n,I),c.fromBufferAttribute(s,y),h.fromBufferAttribute(s,E),v.fromBufferAttribute(s,I),f.sub(u),p.sub(u),h.sub(c),v.sub(c);let P=1/(h.x*v.y-v.x*h.y);isFinite(P)&&(M.copy(f).multiplyScalar(v.y).addScaledVector(p,-h.y).multiplyScalar(P),g.copy(p).multiplyScalar(h.x).addScaledVector(f,-v.x).multiplyScalar(P),o[y].add(M),o[E].add(M),o[I].add(M),l[y].add(g),l[E].add(g),l[I].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,E=m.length;y<E;++y){let I=m[y],P=I.start,O=I.count;for(let K=P,Y=P+O;K<Y;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let _=new U,x=new U,C=new U,A=new U;function L(y){C.fromBufferAttribute(i,y),A.copy(C);let E=o[y];_.copy(E),_.sub(C.multiplyScalar(C.dot(E))).normalize(),x.crossVectors(A,E);let P=x.dot(l[y])<0?-1:1;r.setXYZW(y,_.x,_.y,_.z,P)}for(let y=0,E=m.length;y<E;++y){let I=m[y],P=I.start,O=I.count;for(let K=P,Y=P+O;K<Y;K+=3)L(e.getX(K+0)),L(e.getX(K+1)),L(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,a=this.getAttribute("position");if(a!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==a.count)n=new Sn(new Float32Array(a.count*3),3),this.setAttribute("normal",n);else for(let c=0,h=n.count;c<h;c++)n.setXYZ(c,0,0,0);let i=new U,s=new U,r=new U,o=new U,l=new U,u=new U,f=new U,p=new U;if(e)for(let c=0,h=e.count;c<h;c+=3){let v=e.getX(c+0),M=e.getX(c+1),g=e.getX(c+2);i.fromBufferAttribute(a,v),s.fromBufferAttribute(a,M),r.fromBufferAttribute(a,g),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,g),o.add(f),l.add(f),u.add(f),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let c=0,h=a.count;c<h;c+=3)i.fromBufferAttribute(a,c+0),s.fromBufferAttribute(a,c+1),r.fromBufferAttribute(a,c+2),f.subVectors(r,s),p.subVectors(i,s),f.cross(p),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let a=0,n=e.count;a<n;a++)Sa.fromBufferAttribute(e,a),Sa.normalize(),e.setXYZ(a,Sa.x,Sa.y,Sa.z)}toNonIndexed(){function e(o,l){let u=o.array,f=o.itemSize,p=o.normalized,c=new u.constructor(l.length*f),h=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?h=l[M]*o.data.stride+o.offset:h=l[M]*f;for(let d=0;d<f;d++)c[v++]=u[h++]}return new Sn(c,f,p)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let a=new t,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=e(l,n);a.setAttribute(o,u)}let s=this.morphAttributes;for(let o in s){let l=[],u=s[o];for(let f=0,p=u.length;f<p;f++){let c=u[f],h=e(c,n);l.push(h)}a.morphAttributes[o]=l}a.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let u=r[o];a.addGroup(u.start,u.count,u.materialIndex)}return a}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};let a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});let n=this.attributes;for(let l in n){let u=n[l];e.data.attributes[l]=u.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],f=[];for(let p=0,c=u.length;p<c;p++){let h=u[p];f.push(h.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let a={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let u in i){let f=i[u];this.setAttribute(u,f.clone(a))}let s=e.morphAttributes;for(let u in s){let f=[],p=s[u];for(let c=0,h=p.length;c<h;c++)f.push(p[c].clone(a));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let u=0,f=r.length;u<f;u++){let p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var QE=0,Fs=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=Gu(),this.name="",this.type="Material",this.blending=Tr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=Qd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let a in e){let n=e[a];if(n===void 0){Ge(`Material: parameter '${a}' has value of undefined.`);continue}let i=this[a];if(i===void 0){Ge(`Material: '${a}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[a]=n}}toJSON(e){let a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(n.blending=this.blending),this.side!==Xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jd&&(n.blendSrc=this.blendSrc),this.blendDst!==Qd&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(a){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,a){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=a[e.map]||null),e.matcap!==void 0&&(this.matcap=a[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=a[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=a[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=a[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Pe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=a[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=a[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=a[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=a[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=a[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=a[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=a[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=a[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=a[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=a[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=a[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=a[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=a[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=a[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=a[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=a[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=a[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=a[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=a[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=a[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=a[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let a=e.clippingPlanes,n=null;if(a!==null){let i=a.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=a[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qi=new U,kg=new U,Nd=new U,Ps=new U,Gg=new U,Od=new U,Vg=new U,_u=class{constructor(e=new U,a=new U(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);let n=a.dot(this.direction);return n<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let a=qi.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,a),qi.distanceToSquared(e))}distanceSqToSegment(e,a,n,i){kg.copy(e).add(a).multiplyScalar(.5),Nd.copy(a).sub(e).normalize(),Ps.copy(this.origin).sub(kg);let s=e.distanceTo(a)*.5,r=-this.direction.dot(Nd),o=Ps.dot(this.direction),l=-Ps.dot(Nd),u=Ps.lengthSq(),f=Math.abs(1-r*r),p,c,h,v;if(f>0)if(p=r*l-o,c=r*o-l,v=s*f,p>=0)if(c>=-v)if(c<=v){let M=1/f;p*=M,c*=M,h=p*(p+r*c+2*o)+c*(r*p+c+2*l)+u}else c=s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c=-s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;else c<=-v?(p=Math.max(0,-(-r*s+o)),c=p>0?-s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u):c<=v?(p=0,c=Math.min(Math.max(-s,-l),s),h=c*(c+2*l)+u):(p=Math.max(0,-(r*s+o)),c=p>0?s:Math.min(Math.max(-s,-l),s),h=-p*p+c*(c+2*l)+u);else c=r>0?-s:s,p=Math.max(0,-(r*c+o)),h=-p*p+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(kg).addScaledVector(Nd,c),h}intersectSphere(e,a){qi.subVectors(e.center,this.origin);let n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,a):this.at(o,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/a;return n>=0?n:null}intersectPlane(e,a){let n=this.distanceToPlane(e);return n===null?null:this.at(n,a)}intersectsPlane(e){let a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let n,i,s,r,o,l,u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,c=this.origin;return u>=0?(n=(e.min.x-c.x)*u,i=(e.max.x-c.x)*u):(n=(e.max.x-c.x)*u,i=(e.min.x-c.x)*u),f>=0?(s=(e.min.y-c.y)*f,r=(e.max.y-c.y)*f):(s=(e.max.y-c.y)*f,r=(e.min.y-c.y)*f),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),p>=0?(o=(e.min.z-c.z)*p,l=(e.max.z-c.z)*p):(o=(e.max.z-c.z)*p,l=(e.min.z-c.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,a)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,a,n,i,s){Gg.subVectors(a,e),Od.subVectors(n,e),Vg.crossVectors(Gg,Od);let r=this.direction.dot(Vg),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ps.subVectors(this.origin,e);let l=o*this.direction.dot(Od.crossVectors(Ps,Od));if(l<0)return null;let u=o*this.direction.dot(Gg.cross(Ps));if(u<0||l+u>r)return null;let f=-o*Ps.dot(Vg);return f<0?null:this.at(f/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ra=class extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},aM=new kt,Sr=new _u,Fd=new Wo,nM=new U,zd=new U,Hd=new U,kd=new U,qg=new U,Gd=new U,iM=new U,Vd=new U,de=class extends Ga{constructor(e=new Va,a=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let a=this.geometry.morphAttributes,n=Object.keys(a);if(n.length>0){let i=a[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,a){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;a.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Gd.set(0,0,0);for(let l=0,u=s.length;l<u;l++){let f=o[l],p=s[l];f!==0&&(qg.fromBufferAttribute(p,e),r?Gd.addScaledVector(qg,f):Gd.addScaledVector(qg.sub(a),f))}a.add(Gd)}return a}raycast(e,a){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fd.copy(n.boundingSphere),Fd.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(Fd.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Fd,nM)===null||Sr.origin.distanceToSquared(nM)>(e.far-e.near)**2))&&(aM.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(aM),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,a,Sr)))}_computeIntersections(e,a,n){let i,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,c=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,M=c.length;v<M;v++){let g=c[v],d=r[g.materialIndex],m=Math.max(g.start,h.start),_=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let x=m,C=_;x<C;x+=3){let A=o.getX(x),L=o.getX(x+1),y=o.getX(x+2);i=qd(this,d,e,n,u,f,p,A,L,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let v=Math.max(0,h.start),M=Math.min(o.count,h.start+h.count);for(let g=v,d=M;g<d;g+=3){let m=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);i=qd(this,r,e,n,u,f,p,m,_,x),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,M=c.length;v<M;v++){let g=c[v],d=r[g.materialIndex],m=Math.max(g.start,h.start),_=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let x=m,C=_;x<C;x+=3){let A=x,L=x+1,y=x+2;i=qd(this,d,e,n,u,f,p,A,L,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,a.push(i))}}else{let v=Math.max(0,h.start),M=Math.min(l.count,h.start+h.count);for(let g=v,d=M;g<d;g+=3){let m=g,_=g+1,x=g+2;i=qd(this,r,e,n,u,f,p,m,_,x),i&&(i.faceIndex=Math.floor(g/3),a.push(i))}}}};function jE(t,e,a,n,i,s,r,o){let l;if(e.side===Xa?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===Xi,o),l===null)return null;Vd.copy(o),Vd.applyMatrix4(t.matrixWorld);let u=a.ray.origin.distanceTo(Vd);return u<a.near||u>a.far?null:{distance:u,point:Vd.clone(),object:t}}function qd(t,e,a,n,i,s,r,o,l,u){t.getVertexPosition(o,zd),t.getVertexPosition(l,Hd),t.getVertexPosition(u,kd);let f=jE(t,e,a,n,zd,Hd,kd,iM);if(f){let p=new U;Bs.getBarycoord(iM,zd,Hd,kd,p),i&&(f.uv=Bs.getInterpolatedAttribute(i,o,l,u,p,new Pe)),s&&(f.uv1=Bs.getInterpolatedAttribute(s,o,l,u,p,new Pe)),r&&(f.normal=Bs.getInterpolatedAttribute(r,o,l,u,p,new U),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let c={a:o,b:l,c:u,normal:new U,materialIndex:0};Bs.getNormal(zd,Hd,kd,c.normal),f.face=c,f.barycoord=p}return f}var hf=class extends an{constructor(e=null,a=1,n=1,i,s,r,o,l,u=_a,f=_a,p,c){super(null,r,o,l,u,f,i,s,p,c),this.isDataTexture=!0,this.image={data:e,width:a,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wg=new U,$E=new U,eC=new Ye,ci=class{constructor(e=new U(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,n,i){return this.normal.set(e,a,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,n){let i=Wg.subVectors(n,a).cross($E.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a,n=!0){let i=e.delta(Wg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:a.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let a=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return a<0&&n>0||n<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){let n=a||eC.getNormalMatrix(e),i=this.coplanarPoint(Wg).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_r=new Wo,tC=new Pe(.5,.5),Wd=new U,Xo=class{constructor(e=new ci,a=new ci,n=new ci,i=new ci,s=new ci,r=new ci){this.planes=[e,a,n,i,s,r]}set(e,a,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(a),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let a=this.planes;for(let n=0;n<6;n++)a[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,a=Kn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],u=s[3],f=s[4],p=s[5],c=s[6],h=s[7],v=s[8],M=s[9],g=s[10],d=s[11],m=s[12],_=s[13],x=s[14],C=s[15];if(i[0].setComponents(u-r,h-f,d-v,C-m).normalize(),i[1].setComponents(u+r,h+f,d+v,C+m).normalize(),i[2].setComponents(u+o,h+p,d+M,C+_).normalize(),i[3].setComponents(u-o,h-p,d-M,C-_).normalize(),n)i[4].setComponents(l,c,g,x).normalize(),i[5].setComponents(u-l,h-c,d-g,C-x).normalize();else if(i[4].setComponents(u-l,h-c,d-g,C-x).normalize(),a===Kn)i[5].setComponents(u+l,h+c,d+g,C+x).normalize();else if(a===Ho)i[5].setComponents(l,c,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),_r.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);let a=tC.distanceTo(e.center);return _r.radius=.7071067811865476+a,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){let a=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(a[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let a=this.planes;for(let n=0;n<6;n++){let i=a[n];if(Wd.x=i.normal.x>0?e.max.x:e.min.x,Wd.y=i.normal.y>0?e.max.y:e.min.y,Wd.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wd)<0)return!1}return!0}containsPoint(e){let a=this.planes;for(let n=0;n<6;n++)if(a[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mu=class extends an{constructor(e=[],a=Vs,n,i,s,r,o,l,u,f){super(e,a,n,i,s,r,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Zi=class extends an{constructor(e,a,n=Qn,i,s,r,o=_a,l=_a,u,f=fi,p=1){if(f!==fi&&f!==Ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let c={width:e,height:a,depth:p};super(c,i,s,r,o,l,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Go(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}},pf=class extends Zi{constructor(e,a=Qn,n=Vs,i,s,r=_a,o=_a,l,u=fi){let f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,a,n,i,s,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bu=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Gt=class t extends Va{constructor(e=1,a=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let l=[],u=[],f=[],p=[],c=0,h=0;v("z","y","x",-1,-1,n,a,e,r,s,0),v("z","y","x",1,-1,n,a,-e,r,s,1),v("x","z","y",1,1,e,n,a,i,r,2),v("x","z","y",1,-1,e,n,-a,i,r,3),v("x","y","z",1,-1,e,a,n,i,s,4),v("x","y","z",-1,-1,e,a,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(p,2));function v(M,g,d,m,_,x,C,A,L,y,E){let I=x/L,P=C/y,O=x/2,K=C/2,Y=A/2,H=L+1,Z=y+1,k=0,ee=0,oe=new U;for(let xe=0;xe<Z;xe++){let Se=xe*P-K;for(let Ce=0;Ce<H;Ce++){let pt=Ce*I-O;oe[M]=pt*m,oe[g]=Se*_,oe[d]=Y,u.push(oe.x,oe.y,oe.z),oe[M]=0,oe[g]=0,oe[d]=A>0?1:-1,f.push(oe.x,oe.y,oe.z),p.push(Ce/L),p.push(1-xe/y),k+=1}}for(let xe=0;xe<y;xe++)for(let Se=0;Se<L;Se++){let Ce=c+Se+H*xe,pt=c+Se+H*(xe+1),qt=c+(Se+1)+H*(xe+1),mt=c+(Se+1)+H*xe;l.push(Ce,pt,mt),l.push(pt,qt,mt),ee+=6}o.addGroup(h,ee,E),h+=ee,c+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Dt=class t extends Va{constructor(e=1,a=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:a,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};let u=this;i=Math.floor(i),s=Math.floor(s);let f=[],p=[],c=[],h=[],v=0,M=[],g=n/2,d=0;m(),r===!1&&(e>0&&_(!0),a>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2));function m(){let x=new U,C=new U,A=0,L=(a-e)/n;for(let y=0;y<=s;y++){let E=[],I=y/s,P=I*(a-e)+e;for(let O=0;O<=i;O++){let K=O/i,Y=K*l+o,H=Math.sin(Y),Z=Math.cos(Y);C.x=P*H,C.y=-I*n+g,C.z=P*Z,p.push(C.x,C.y,C.z),x.set(H,L,Z).normalize(),c.push(x.x,x.y,x.z),h.push(K,1-I),E.push(v++)}M.push(E)}for(let y=0;y<i;y++)for(let E=0;E<s;E++){let I=M[E][y],P=M[E+1][y],O=M[E+1][y+1],K=M[E][y+1];(e>0||E!==0)&&(f.push(I,P,K),A+=3),(a>0||E!==s-1)&&(f.push(P,O,K),A+=3)}u.addGroup(d,A,0),d+=A}function _(x){let C=v,A=new Pe,L=new U,y=0,E=x===!0?e:a,I=x===!0?1:-1;for(let O=1;O<=i;O++)p.push(0,g*I,0),c.push(0,I,0),h.push(.5,.5),v++;let P=v;for(let O=0;O<=i;O++){let Y=O/i*l+o,H=Math.cos(Y),Z=Math.sin(Y);L.x=E*Z,L.y=g*I,L.z=E*H,p.push(L.x,L.y,L.z),c.push(0,I,0),A.x=H*.5+.5,A.y=Z*.5*I+.5,h.push(A.x,A.y),v++}for(let O=0;O<i;O++){let K=C+O,Y=P+O;x===!0?f.push(Y,Y+1,K):f.push(Y+1,Y,K),y+=3}u.addGroup(d,y,x===!0?1:2),d+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Tu=class t extends Va{constructor(e=[],a=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:a,radius:n,detail:i};let s=[],r=[];o(i),u(n),f(),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(s.slice(),3)),this.setAttribute("uv",new Rt(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let _=new U,x=new U,C=new U;for(let A=0;A<a.length;A+=3)h(a[A+0],_),h(a[A+1],x),h(a[A+2],C),l(_,x,C,m)}function l(m,_,x,C){let A=C+1,L=[];for(let y=0;y<=A;y++){L[y]=[];let E=m.clone().lerp(x,y/A),I=_.clone().lerp(x,y/A),P=A-y;for(let O=0;O<=P;O++)O===0&&y===A?L[y][O]=E:L[y][O]=E.clone().lerp(I,O/P)}for(let y=0;y<A;y++)for(let E=0;E<2*(A-y)-1;E++){let I=Math.floor(E/2);E%2===0?(c(L[y][I+1]),c(L[y+1][I]),c(L[y][I])):(c(L[y][I+1]),c(L[y+1][I+1]),c(L[y+1][I]))}}function u(m){let _=new U;for(let x=0;x<s.length;x+=3)_.x=s[x+0],_.y=s[x+1],_.z=s[x+2],_.normalize().multiplyScalar(m),s[x+0]=_.x,s[x+1]=_.y,s[x+2]=_.z}function f(){let m=new U;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];let x=g(m)/2/Math.PI+.5,C=d(m)/Math.PI+.5;r.push(x,1-C)}v(),p()}function p(){for(let m=0;m<r.length;m+=6){let _=r[m+0],x=r[m+2],C=r[m+4],A=Math.max(_,x,C),L=Math.min(_,x,C);A>.9&&L<.1&&(_<.2&&(r[m+0]+=1),x<.2&&(r[m+2]+=1),C<.2&&(r[m+4]+=1))}}function c(m){s.push(m.x,m.y,m.z)}function h(m,_){let x=m*3;_.x=e[x+0],_.y=e[x+1],_.z=e[x+2]}function v(){let m=new U,_=new U,x=new U,C=new U,A=new Pe,L=new Pe,y=new Pe;for(let E=0,I=0;E<s.length;E+=9,I+=6){m.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),x.set(s[E+6],s[E+7],s[E+8]),A.set(r[I+0],r[I+1]),L.set(r[I+2],r[I+3]),y.set(r[I+4],r[I+5]),C.copy(m).add(_).add(x).divideScalar(3);let P=g(C);M(A,I+0,m,P),M(L,I+2,_,P),M(y,I+4,x,P)}}function M(m,_,x,C){C<0&&m.x===1&&(r[_]=m.x-1),x.x===0&&x.z===0&&(r[_]=C/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.vertices,e.indices,e.radius,e.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,a){let n=this.getUtoTmapping(e);return this.getPoint(n,a)}getPoints(e=5){let a=[];for(let n=0;n<=e;n++)a.push(this.getPoint(n/e));return a}getSpacedPoints(e=5){let a=[];for(let n=0;n<=e;n++)a.push(this.getPointAt(n/e));return a}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let a=[],n,i=this.getPoint(0),s=0;a.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),a.push(s),i=n;return this.cacheArcLengths=a,a}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,a=null){let n=this.getLengths(),i=0,s=n.length,r;a?r=a:r=e*n[s-1];let o=0,l=s-1,u;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),u=n[i]-r,u<0)o=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);let f=n[i],c=n[i+1]-f,h=(r-f)/c;return(i+h)/(s-1)}getTangent(e,a){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),o=this.getPoint(s),l=a||(r.isVector2?new Pe:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,a){let n=this.getUtoTmapping(e);return this.getTangent(n,a)}computeFrenetFrames(e,a=!1){let n=new U,i=[],s=[],r=[],o=new U,l=new kt;for(let h=0;h<=e;h++){let v=h/e;i[h]=this.getTangentAt(v,new U)}s[0]=new U,r[0]=new U;let u=Number.MAX_VALUE,f=Math.abs(i[0].x),p=Math.abs(i[0].y),c=Math.abs(i[0].z);f<=u&&(u=f,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),c<=u&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=e;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),o.crossVectors(i[h-1],i[h]),o.length()>Number.EPSILON){o.normalize();let v=Math.acos(ot(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,v))}r[h].crossVectors(i[h],s[h])}if(a===!0){let h=Math.acos(ot(s[0].dot(s[e]),-1,1));h/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(h=-h);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(i[v],h*v)),r[v].crossVectors(i[v],s[v])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Eu=class extends Hn{constructor(e=0,a=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=a,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,a=new Pe){let n=a,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),c=l-this.aX,h=u-this.aY;l=c*f-h*p+this.aX,u=c*p+h*f+this.aY}return n.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mf=class extends Eu{constructor(e,a,n,i,s,r){super(e,a,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function w0(){let t=0,e=0,a=0,n=0;function i(s,r,o,l){t=s,e=o,a=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,u){i(r,o,u*(o-s),u*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,u,f,p){let c=(r-s)/u-(o-s)/(u+f)+(o-r)/f,h=(o-r)/f-(l-r)/(f+p)+(l-o)/p;c*=f,h*=f,i(r,o,c,h)},calc:function(s){let r=s*s,o=r*s;return t+e*s+a*r+n*o}}}var sM=new U,rM=new U,Xg=new w0,Yg=new w0,Zg=new w0,Yo=class extends Hn{constructor(e=[],a=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=a,this.curveType=n,this.tension=i}getPoint(e,a=new U){let n=a,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,f;this.closed||o>0?u=i[(o-1)%s]:(rM.subVectors(i[0],i[1]).add(i[0]),u=rM);let p=i[o%s],c=i[(o+1)%s];if(this.closed||o+2<s?f=i[(o+2)%s]:(sM.subVectors(i[s-1],i[s-2]).add(i[s-1]),f=sM),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,v=Math.pow(u.distanceToSquared(p),h),M=Math.pow(p.distanceToSquared(c),h),g=Math.pow(c.distanceToSquared(f),h);M<1e-4&&(M=1),v<1e-4&&(v=M),g<1e-4&&(g=M),Xg.initNonuniformCatmullRom(u.x,p.x,c.x,f.x,v,M,g),Yg.initNonuniformCatmullRom(u.y,p.y,c.y,f.y,v,M,g),Zg.initNonuniformCatmullRom(u.z,p.z,c.z,f.z,v,M,g)}else this.curveType==="catmullrom"&&(Xg.initCatmullRom(u.x,p.x,c.x,f.x,this.tension),Yg.initCatmullRom(u.y,p.y,c.y,f.y,this.tension),Zg.initCatmullRom(u.z,p.z,c.z,f.z,this.tension));return n.set(Xg.calc(l),Yg.calc(l),Zg.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let a=0,n=e.points.length;a<n;a++){let i=e.points[a];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,n=this.points.length;a<n;a++){let i=this.points[a];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,n=e.points.length;a<n;a++){let i=e.points[a];this.points.push(new U().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function oM(t,e,a,n,i){let s=(n-e)*.5,r=(i-a)*.5,o=t*t,l=t*o;return(2*a-2*n+s+r)*l+(-3*a+3*n-2*s-r)*o+s*t+a}function aC(t,e){let a=1-t;return a*a*e}function nC(t,e){return 2*(1-t)*t*e}function iC(t,e){return t*t*e}function cu(t,e,a,n){return aC(t,e)+nC(t,a)+iC(t,n)}function sC(t,e){let a=1-t;return a*a*a*e}function rC(t,e){let a=1-t;return 3*a*a*t*e}function oC(t,e){return 3*(1-t)*t*t*e}function lC(t,e){return t*t*t*e}function du(t,e,a,n,i){return sC(t,e)+rC(t,a)+oC(t,n)+lC(t,i)}var gf=class extends Hn{constructor(e=new Pe,a=new Pe,n=new Pe,i=new Pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=a,this.v2=n,this.v3=i}getPoint(e,a=new Pe){let n=a,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(du(e,i.x,s.x,r.x,o.x),du(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xf=class extends Hn{constructor(e=new U,a=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=a,this.v2=n,this.v3=i}getPoint(e,a=new U){let n=a,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(du(e,i.x,s.x,r.x,o.x),du(e,i.y,s.y,r.y,o.y),du(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yf=class extends Hn{constructor(e=new Pe,a=new Pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=a}getPoint(e,a=new Pe){let n=a;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new Pe){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vf=class extends Hn{constructor(e=new U,a=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=a}getPoint(e,a=new U){let n=a;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,a){return this.getPoint(e,a)}getTangent(e,a=new U){return a.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,a){return this.getTangent(e,a)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sf=class extends Hn{constructor(e=new Pe,a=new Pe,n=new Pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=a,this.v2=n}getPoint(e,a=new Pe){let n=a,i=this.v0,s=this.v1,r=this.v2;return n.set(cu(e,i.x,s.x,r.x),cu(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ki=class extends Hn{constructor(e=new U,a=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=a,this.v2=n}getPoint(e,a=new U){let n=a,i=this.v0,s=this.v1,r=this.v2;return n.set(cu(e,i.x,s.x,r.x),cu(e,i.y,s.y,r.y),cu(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_f=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,a=new Pe){let n=a,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],u=i[r],f=i[r>i.length-2?i.length-1:r+1],p=i[r>i.length-3?i.length-1:r+2];return n.set(oM(o,l.x,u.x,f.x,p.x),oM(o,l.y,u.y,f.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let a=0,n=e.points.length;a<n;a++){let i=e.points[a];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let a=0,n=this.points.length;a<n;a++){let i=this.points[a];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let a=0,n=e.points.length;a<n;a++){let i=e.points[a];this.points.push(new Pe().fromArray(i))}return this}},uC=Object.freeze({__proto__:null,ArcCurve:mf,CatmullRomCurve3:Yo,CubicBezierCurve:gf,CubicBezierCurve3:xf,EllipseCurve:Eu,LineCurve:yf,LineCurve3:vf,QuadraticBezierCurve:Sf,QuadraticBezierCurve3:Ki,SplineCurve:_f});var Ji=class t extends Tu{constructor(e=1,a=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,a),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:a}}static fromJSON(e){return new t(e.radius,e.detail)}};var zs=class t extends Tu{constructor(e=1,a=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,a),this.type="OctahedronGeometry",this.parameters={radius:e,detail:a}}static fromJSON(e){return new t(e.radius,e.detail)}},Cu=class t extends Va{constructor(e=1,a=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:n,heightSegments:i};let s=e/2,r=a/2,o=Math.floor(n),l=Math.floor(i),u=o+1,f=l+1,p=e/o,c=a/l,h=[],v=[],M=[],g=[];for(let d=0;d<f;d++){let m=d*c-r;for(let _=0;_<u;_++){let x=_*p-s;v.push(x,-m,0),M.push(0,0,1),g.push(_/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let _=m+u*d,x=m+u*(d+1),C=m+1+u*(d+1),A=m+1+u*d;h.push(_,x,A),h.push(x,C,A)}this.setIndex(h),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(M,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}};var qa=class t extends Va{constructor(e=1,a=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},a=Math.max(3,Math.floor(a)),n=Math.max(2,Math.floor(n));let l=Math.min(r+o,Math.PI),u=0,f=[],p=new U,c=new U,h=[],v=[],M=[],g=[];for(let d=0;d<=n;d++){let m=[],_=d/n,x=r+_*o,C=e*Math.cos(x),A=Math.sqrt(e*e-C*C),L=0;d===0&&r===0?L=.5/a:d===n&&l===Math.PI&&(L=-.5/a);for(let y=0;y<=a;y++){let E=y/a,I=i+E*s;p.x=-A*Math.cos(I),p.y=C,p.z=A*Math.sin(I),v.push(p.x,p.y,p.z),c.copy(p).normalize(),M.push(c.x,c.y,c.z),g.push(E+L,1-_),m.push(u++)}f.push(m)}for(let d=0;d<n;d++)for(let m=0;m<a;m++){let _=f[d][m+1],x=f[d][m],C=f[d+1][m],A=f[d+1][m+1];(d!==0||r>0)&&h.push(_,x,A),(d!==n-1||l<Math.PI)&&h.push(x,C,A)}this.setIndex(h),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(M,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Wa=class t extends Va{constructor(e=1,a=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:a,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],u=[],f=[],p=[],c=new U,h=new U,v=new U;for(let M=0;M<=n;M++){let g=r+M/n*o;for(let d=0;d<=i;d++){let m=d/i*s;h.x=(e+a*Math.cos(g))*Math.cos(m),h.y=(e+a*Math.cos(g))*Math.sin(m),h.z=a*Math.sin(g),u.push(h.x,h.y,h.z),c.x=e*Math.cos(m),c.y=e*Math.sin(m),v.subVectors(h,c).normalize(),f.push(v.x,v.y,v.z),p.push(d/i),p.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=i;g++){let d=(i+1)*M+g-1,m=(i+1)*(M-1)+g-1,_=(i+1)*(M-1)+g,x=(i+1)*M+g;l.push(d,m,x),l.push(m,_,x)}this.setIndex(l),this.setAttribute("position",new Rt(u,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Cr=class t extends Va{constructor(e=new Ki(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),a=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:a,radius:n,radialSegments:i,closed:s};let r=e.computeFrenetFrames(a,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new U,l=new U,u=new Pe,f=new U,p=[],c=[],h=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new Rt(p,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(h,2));function M(){for(let _=0;_<a;_++)g(_);g(s===!1?a:0),m(),d()}function g(_){f=e.getPointAt(_/a,f);let x=r.normals[_],C=r.binormals[_];for(let A=0;A<=i;A++){let L=A/i*Math.PI*2,y=Math.sin(L),E=-Math.cos(L);l.x=E*x.x+y*C.x,l.y=E*x.y+y*C.y,l.z=E*x.z+y*C.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=f.x+n*l.x,o.y=f.y+n*l.y,o.z=f.z+n*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let _=1;_<=a;_++)for(let x=1;x<=i;x++){let C=(i+1)*(_-1)+(x-1),A=(i+1)*_+(x-1),L=(i+1)*_+x,y=(i+1)*(_-1)+x;v.push(C,A,y),v.push(A,L,y)}}function m(){for(let _=0;_<=a;_++)for(let x=0;x<=i;x++)u.x=_/a,u.y=x/i,h.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new uC[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Lr(t){let e={};for(let a in t){e[a]={};for(let n in t[a]){let i=t[a][n];if(lM(i))i.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][n]=null):e[a][n]=i.clone();else if(Array.isArray(i))if(lM(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[a][n]=s}else e[a][n]=i.slice();else e[a][n]=i}}return e}function Oa(t){let e={};for(let a=0;a<t.length;a++){let n=Lr(t[a]);for(let i in n)e[i]=n[i]}return e}function lM(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function cC(t){let e=[];for(let a=0;a<t.length;a++)e.push(t[a].clone());return e}function I0(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var QM={clone:Lr,merge:Oa},dC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dC,this.fragmentShader=fC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=cC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?a.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?a.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?a.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?a.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?a.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?a.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?a.uniforms[i]={type:"m4",value:r.toArray()}:a.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(a.extensions=n),a}fromJSON(e,a){if(super.fromJSON(e,a),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=a[i.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(i.value);break;case"v2":this.uniforms[n].value=new Pe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mf=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends Fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Th,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var bf=class extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tf=class extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xd(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Hs=class{constructor(e,a,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new a.constructor(n),this.sampleValues=a,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let a=this.parameterPositions,n=this._cachedIndex,i=a[n],s=a[n-1];e:{t:{let r;a:{n:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break n;return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=a[++n],e<i)break t}r=a.length;break a}if(!(e>=s)){let o=a[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=a[--n-1],e>=s)break t}r=n,n=0;break a}break e}for(;n<r;){let o=n+r>>>1;e<a[o]?r=o:n=o+1}if(i=a[n],s=a[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=a.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let a=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)a[r]=n[s+r];return a}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ef=class extends Hs{constructor(e,a,n,i){super(e,a,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qg,endingEnd:Qg}}intervalChanged_(e,a,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case jg:s=e,o=2*a-n;break;case $g:s=i.length-2,o=a+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jg:r=e,l=2*n-a;break;case $g:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=a}let u=(n-a)*.5,f=this.valueSize;this._weightPrev=u/(a-o),this._weightNext=u/(l-n),this._offsetPrev=s*f,this._offsetNext=r*f}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this._offsetPrev,p=this._offsetNext,c=this._weightPrev,h=this._weightNext,v=(n-a)/(i-a),M=v*v,g=M*v,d=-c*g+2*c*M-c*v,m=(1+c)*g+(-1.5-2*c)*M+(-.5+c)*v+1,_=(-1-h)*g+(1.5+h)*M+.5*v,x=h*g-h*M;for(let C=0;C!==o;++C)s[C]=d*r[f+C]+m*r[u+C]+_*r[l+C]+x*r[p+C];return s}},Cf=class extends Hs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=(n-a)/(i-a),p=1-f;for(let c=0;c!==o;++c)s[c]=r[u+c]*p+r[l+c]*f;return s}},Af=class extends Hs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Lf=class extends Hs{interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,u=l-o,f=this.inTangents,p=this.outTangents;if(!f||!p){let v=(n-a)/(i-a),M=1-v;for(let g=0;g!==o;++g)s[g]=r[u+g]*M+r[l+g]*v;return s}let c=o*2,h=e-1;for(let v=0;v!==o;++v){let M=r[u+v],g=r[l+v],d=h*c+v*2,m=p[d],_=p[d+1],x=e*c+v*2,C=f[x],A=f[x+1],L=(n-a)/(i-a),y,E,I,P,O;for(let K=0;K<8;K++){y=L*L,E=y*L,I=1-L,P=I*I,O=P*I;let H=O*a+3*P*L*m+3*I*y*C+E*i-n;if(Math.abs(H)<1e-10)break;let Z=3*P*(m-a)+6*I*L*(C-m)+3*y*(i-C);if(Math.abs(Z)<1e-10)break;L=L-H/Z,L=Math.max(0,Math.min(1,L))}s[v]=O*M+3*P*L*_+3*I*y*A+E*g}return s}},Tn=class{constructor(e,a,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(a===void 0||a.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xd(a,this.TimeBufferType),this.values=Xd(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let a=e.constructor,n;if(a.toJSON!==this.toJSON)n=a.toJSON(e);else{n={name:e.name,times:Xd(e.times,Array),values:Xd(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Af(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ef(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let a=new Lf(this.times,this.values,this.getValueSize(),e);return this.settings&&(a.inTangents=this.settings.inTangents,a.outTangents=this.settings.outTangents),a}setInterpolation(e){let a;switch(e){case fu:a=this.InterpolantFactoryMethodDiscrete;break;case lf:a=this.InterpolantFactoryMethodLinear;break;case Kd:a=this.InterpolantFactoryMethodSmooth;break;case Jg:a=this.InterpolantFactoryMethodBezier;break}if(a===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ge("KeyframeTrack:",n),this}return this.createInterpolant=a,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fu;case this.InterpolantFactoryMethodLinear:return lf;case this.InterpolantFactoryMethodSmooth:return Kd;case this.InterpolantFactoryMethodBezier:return Jg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]+=e}return this}scale(e){if(e!==1){let a=this.times;for(let n=0,i=a.length;n!==i;++n)a[n]*=e}return this}trim(e,a){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>a;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,a=this.getValueSize();a-Math.floor(a)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Ve("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&NE(i))for(let o=0,l=i.length;o!==l;++o){let u=i[o];if(isNaN(u)){Ve("KeyframeTrack: Value is not a valid number.",this,o,u),e=!1;break}}return e}optimize(){let e=this.times.slice(),a=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Kd,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,u=e[o],f=e[o+1];if(u!==f&&(o!==1||u!==e[0]))if(i)l=!0;else{let p=o*n,c=p-n,h=p+n;for(let v=0;v!==n;++v){let M=a[p+v];if(M!==a[c+v]||M!==a[h+v]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let p=o*n,c=r*n;for(let h=0;h!==n;++h)a[c+h]=a[p+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,u=0;u!==n;++u)a[l+u]=a[o+u];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=a.slice(0,r*n)):(this.times=e,this.values=a),this}clone(){let e=this.times.slice(),a=this.values.slice(),n=this.constructor,i=new n(this.name,e,a);return i.createInterpolant=this.createInterpolant,i}};Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=lf;var ks=class extends Tn{constructor(e,a,n){super(e,a,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=fu;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var wf=class extends Tn{constructor(e,a,n,i){super(e,a,n,i)}};wf.prototype.ValueTypeName="color";var If=class extends Tn{constructor(e,a,n,i){super(e,a,n,i)}};If.prototype.ValueTypeName="number";var Rf=class extends Hs{constructor(e,a,n,i){super(e,a,n,i)}interpolate_(e,a,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-a)/(i-a),u=e*o;for(let f=u+o;u!==f;u+=4)_n.slerpFlat(s,0,r,u-o,r,u,l);return s}},Au=class extends Tn{constructor(e,a,n,i){super(e,a,n,i)}InterpolantFactoryMethodLinear(e){return new Rf(this.times,this.values,this.getValueSize(),e)}};Au.prototype.ValueTypeName="quaternion";Au.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Tn{constructor(e,a,n){super(e,a,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=fu;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Df=class extends Tn{constructor(e,a,n,i){super(e,a,n,i)}};Df.prototype.ValueTypeName="vector";var Pf=class{constructor(e,a,n){let i=this,s=!1,r=0,o=0,l,u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=a,this.onError=n,this._abortController=null,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,r,o),s=!0},this.itemEnd=function(f){r++,i.onProgress!==void 0&&i.onProgress(f,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){let p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,c=u.length;p<c;p+=2){let h=u[p],v=u[p+1];if(h.global&&(h.lastIndex=0),h.test(f))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jM=new Pf,Uf=class{constructor(e){this.manager=e!==void 0?e:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,a){let n=this;return new Promise(function(i,s){n.load(e,i,a,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Uf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zo=class extends Ga{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=a}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,a}};var Kg=new kt,uM=new U,cM=new U,Bf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xo,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let a=this.camera,n=this.matrix;uM.setFromMatrixPosition(e.matrixWorld),a.position.copy(uM),cM.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(cM),a.updateMatrixWorld(),Kg.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kg,a.coordinateSystem,a.reversedDepth),a.coordinateSystem===Ho||a.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kg)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yd=new U,Zd=new _n,ui=new U,Lu=class extends Ga{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yd,Zd,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yd,Zd,ui.set(1,1,1)).invert()}updateWorldMatrix(e,a,n=!1){super.updateWorldMatrix(e,a,n),this.matrixWorld.decompose(Yd,Zd,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yd,Zd,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Us=new U,dM=new Pe,fM=new Pe,wa=class extends Lu{constructor(e=50,a=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let a=.5*this.getFilmHeight()/e;this.fov=uf*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bg*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uf*2*Math.atan(Math.tan(bg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,n){Us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Us.x,Us.y).multiplyScalar(-e/Us.z),Us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Us.x,Us.y).multiplyScalar(-e/Us.z)}getViewSize(e,a){return this.getViewBounds(e,dM,fM),a.subVectors(fM,dM)}setViewOffset(e,a,n,i,s,r){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,a=e*Math.tan(bg*.5*this.fov)/this.zoom,n=2*a,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,u=r.fullHeight;s+=r.offsetX*i/l,a-=r.offsetY*n/u,i*=r.width/l,n*=r.height/u}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,a,a-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}};var a0=class extends Bf{constructor(){super(new wa(90,1,.5,500)),this.isPointLightShadow=!0}},Ko=class extends Zo{constructor(e,a,n=0,i=2){super(e,a),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new a0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,a){return super.copy(e,a),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.distance=this.distance,a.object.decay=this.decay,a.object.shadow=this.shadow.toJSON(),a}},Jo=class extends Lu{constructor(e=-1,a=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+a,l=i-a;if(this.view!==null&&this.view.enabled){let u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,r=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}},n0=class extends Bf{constructor(){super(new Jo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wu=class extends Zo{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ga.DEFAULT_UP),this.updateMatrix(),this.target=new Ga,this.shadow=new n0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let a=super.toJSON(e);return a.object.shadow=this.shadow.toJSON(),a.object.target=this.target.uuid,a}},Iu=class extends Zo{constructor(e,a){super(e,a),this.isAmbientLight=!0,this.type="AmbientLight"}};var Oo=-90,Fo=1,Nf=class extends Ga{constructor(e,a,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wa(Oo,Fo,e,a);i.layers=this.layers,this.add(i);let s=new wa(Oo,Fo,e,a);s.layers=this.layers,this.add(s);let r=new wa(Oo,Fo,e,a);r.layers=this.layers,this.add(r);let o=new wa(Oo,Fo,e,a);o.layers=this.layers,this.add(o);let l=new wa(Oo,Fo,e,a);l.layers=this.layers,this.add(l);let u=new wa(Oo,Fo,e,a);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){let e=this.coordinateSystem,a=this.children.concat(),[n,i,s,r,o,l]=a;for(let u of a)this.remove(u);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let u of a)this.add(u),u.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,u,f]=this.children,p=e.getRenderTarget(),c=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,r),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,u),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(a,f),e.setRenderTarget(p,c,h),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},Of=class extends wa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var R0="\\[\\]\\.:\\/",hC=new RegExp("["+R0+"]","g"),D0="[^"+R0+"]",pC="[^"+R0.replace("\\.","")+"]",mC=/((?:WC+[\/:])*)/.source.replace("WC",D0),gC=/(WCOD+)?/.source.replace("WCOD",pC),xC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",D0),yC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",D0),vC=new RegExp("^"+mC+gC+xC+yC+"$"),SC=["material","materials","bones","map"],i0=class{constructor(e,a,n){let i=n||Ht.parseTrackName(a);this._targetGroup=e,this._bindings=e.subscribe_(a,i)}getValue(e,a){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,a)}setValue(e,a){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,a)}bind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].bind()}unbind(){let e=this._bindings;for(let a=this._targetGroup.nCachedObjects_,n=e.length;a!==n;++a)e[a].unbind()}},Ht=class t{constructor(e,a,n){this.path=a,this.parsedPath=n||t.parseTrackName(a),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,a,n){return e&&e.isAnimationObjectGroup?new t.Composite(e,a,n):new t(e,a,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hC,"")}static parseTrackName(e){let a=vC.exec(e);if(a===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:a[2],objectName:a[3],objectIndex:a[4],propertyName:a[5],propertyIndex:a[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);SC.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,a){if(a===void 0||a===""||a==="."||a===-1||a===e.name||a===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(a);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===a||o.uuid===a)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,a){e[a]=this.targetObject[this.propertyName]}_getValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[a++]=n[i]}_getValue_arrayElement(e,a){e[a]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,a){this.resolvedProperty.toArray(e,a)}_setValue_direct(e,a){this.targetObject[this.propertyName]=e[a]}_setValue_direct_setNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,a){this.targetObject[this.propertyName]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++]}_setValue_array_setNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,a){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[a++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,a){this.resolvedProperty[this.propertyIndex]=e[a]}_setValue_arrayElement_setNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty[this.propertyIndex]=e[a],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,a){this.resolvedProperty.fromArray(e,a)}_setValue_fromArray_setNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,a){this.resolvedProperty.fromArray(e,a),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,a){this.bind(),this.getValue(e,a)}_setValue_unbound(e,a){this.bind(),this.setValue(e,a)}bind(){let e=this.node,a=this.parsedPath,n=a.objectName,i=a.propertyName,s=a.propertyIndex;if(e||(e=t.findNode(this.rootNode,a.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=a.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===u){u=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(u!==void 0){if(e[u]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let r=e[i];if(r===void 0){let u=a.nodeName;Ve("PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=i0;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RR=new Float32Array(1);var hM=new kt,Ru=class{constructor(e,a,n=0,i=1/0){this.ray=new _u(e,a),this.near=n,this.far=i,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,a){this.ray.set(e,a)}setFromCamera(e,a){a.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(a.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(a).sub(this.ray.origin).normalize(),this.camera=a):a.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,a.projectionMatrix.elements[14]).unproject(a),this.ray.direction.set(0,0,-1).transformDirection(a.matrixWorld),this.camera=a):Ve("Raycaster: Unsupported camera type: "+a.type)}setFromXRController(e){return hM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hM),this}intersectObject(e,a=!0,n=[]){return s0(e,this,n,a),n.sort(pM),n}intersectObjects(e,a=!0,n=[]){for(let i=0,s=e.length;i<s;i++)s0(e[i],this,n,a);return n.sort(pM),n}};function pM(t,e){return t.distance-e.distance}function s0(t,e,a,n){let i=!0;if(t.layers.test(e.layers)&&t.raycast(e,a)===!1&&(i=!1),i===!0&&n===!0){let s=t.children;for(let r=0,o=s.length;r<o;r++)s0(s[r],e,a,!0)}}var Du=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ge("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let a=performance.now();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}};var r0=class t{static{t.prototype.isMatrix2=!0}constructor(e,a,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,a,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,a=0){for(let n=0;n<4;n++)this.elements[n]=e[n+a];return this}set(e,a,n,i){let s=this.elements;return s[0]=e,s[2]=a,s[1]=n,s[3]=i,this}};function P0(t,e,a,n){let i=_C(n);switch(a){case T0:return t*e;case C0:return t*e/i.components*i.byteLength;case Wf:return t*e/i.components*i.byteLength;case Xs:return t*e*2/i.components*i.byteLength;case Xf:return t*e*2/i.components*i.byteLength;case E0:return t*e*3/i.components*i.byteLength;case kn:return t*e*4/i.components*i.byteLength;case Yf:return t*e*4/i.components*i.byteLength;case Nu:case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fu:case zu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Qf:return Math.max(t,16)*Math.max(e,8)/4;case Zf:case Jf:return Math.max(t,8)*Math.max(e,8)/2;case jf:case $f:case th:case ah:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eh:case Hu:case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yh:case vh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _h:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ku:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function _C(t){switch(t){case nn:case S0:return{byteLength:1,components:1};case jo:case _0:case mi:return{byteLength:2,components:1};case Vf:case qf:return{byteLength:2,components:4};case Qn:case Gf:case jn:return{byteLength:4,components:1};case M0:case b0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function _b(){let t=null,e=!1,a=null,n=null;function i(s,r){a(s,r),n=t.requestAnimationFrame(i)}return{start:function(){e!==!0&&a!==null&&t!==null&&(n=t.requestAnimationFrame(i),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){a=s},setContext:function(s){t=s}}}function bC(t){let e=new WeakMap;function a(o,l){let u=o.array,f=o.usage,p=u.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,u,f),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,l,u){let f=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,f);else{p.sort((h,v)=>h.start-v.start);let c=0;for(let h=1;h<p.length;h++){let v=p[c],M=p[h];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++c,p[c]=M)}p.length=c+1;for(let h=0,v=p.length;h<v;h++){let M=p[h];t.bufferSubData(u,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=e.get(o);if(u===void 0)e.set(o,a(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:s,update:r}}var TC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,PC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NC=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,JC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$C=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eA="gl_FragColor = linearToOutputTexel( gl_FragColor );",tA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_A=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,AA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,YA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$A=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ML=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,TL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$L=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:TC,alphahash_pars_fragment:EC,alphamap_fragment:CC,alphamap_pars_fragment:AC,alphatest_fragment:LC,alphatest_pars_fragment:wC,aomap_fragment:IC,aomap_pars_fragment:RC,batching_pars_vertex:DC,batching_vertex:PC,begin_vertex:UC,beginnormal_vertex:BC,bsdfs:NC,iridescence_fragment:OC,bumpmap_pars_fragment:FC,clipping_planes_fragment:zC,clipping_planes_pars_fragment:HC,clipping_planes_pars_vertex:kC,clipping_planes_vertex:GC,color_fragment:VC,color_pars_fragment:qC,color_pars_vertex:WC,color_vertex:XC,common:YC,cube_uv_reflection_fragment:ZC,defaultnormal_vertex:KC,displacementmap_pars_vertex:JC,displacementmap_vertex:QC,emissivemap_fragment:jC,emissivemap_pars_fragment:$C,colorspace_fragment:eA,colorspace_pars_fragment:tA,envmap_fragment:aA,envmap_common_pars_fragment:nA,envmap_pars_fragment:iA,envmap_pars_vertex:sA,envmap_physical_pars_fragment:gA,envmap_vertex:rA,fog_vertex:oA,fog_pars_vertex:lA,fog_fragment:uA,fog_pars_fragment:cA,gradientmap_pars_fragment:dA,lightmap_pars_fragment:fA,lights_lambert_fragment:hA,lights_lambert_pars_fragment:pA,lights_pars_begin:mA,lights_toon_fragment:xA,lights_toon_pars_fragment:yA,lights_phong_fragment:vA,lights_phong_pars_fragment:SA,lights_physical_fragment:_A,lights_physical_pars_fragment:MA,lights_fragment_begin:bA,lights_fragment_maps:TA,lights_fragment_end:EA,lightprobes_pars_fragment:CA,logdepthbuf_fragment:AA,logdepthbuf_pars_fragment:LA,logdepthbuf_pars_vertex:wA,logdepthbuf_vertex:IA,map_fragment:RA,map_pars_fragment:DA,map_particle_fragment:PA,map_particle_pars_fragment:UA,metalnessmap_fragment:BA,metalnessmap_pars_fragment:NA,morphinstance_vertex:OA,morphcolor_vertex:FA,morphnormal_vertex:zA,morphtarget_pars_vertex:HA,morphtarget_vertex:kA,normal_fragment_begin:GA,normal_fragment_maps:VA,normal_pars_fragment:qA,normal_pars_vertex:WA,normal_vertex:XA,normalmap_pars_fragment:YA,clearcoat_normal_fragment_begin:ZA,clearcoat_normal_fragment_maps:KA,clearcoat_pars_fragment:JA,iridescence_pars_fragment:QA,opaque_fragment:jA,packing:$A,premultiplied_alpha_fragment:eL,project_vertex:tL,dithering_fragment:aL,dithering_pars_fragment:nL,roughnessmap_fragment:iL,roughnessmap_pars_fragment:sL,shadowmap_pars_fragment:rL,shadowmap_pars_vertex:oL,shadowmap_vertex:lL,shadowmask_pars_fragment:uL,skinbase_vertex:cL,skinning_pars_vertex:dL,skinning_vertex:fL,skinnormal_vertex:hL,specularmap_fragment:pL,specularmap_pars_fragment:mL,tonemapping_fragment:gL,tonemapping_pars_fragment:xL,transmission_fragment:yL,transmission_pars_fragment:vL,uv_pars_fragment:SL,uv_pars_vertex:_L,uv_vertex:ML,worldpos_vertex:bL,background_vert:TL,background_frag:EL,backgroundCube_vert:CL,backgroundCube_frag:AL,cube_vert:LL,cube_frag:wL,depth_vert:IL,depth_frag:RL,distance_vert:DL,distance_frag:PL,equirect_vert:UL,equirect_frag:BL,linedashed_vert:NL,linedashed_frag:OL,meshbasic_vert:FL,meshbasic_frag:zL,meshlambert_vert:HL,meshlambert_frag:kL,meshmatcap_vert:GL,meshmatcap_frag:VL,meshnormal_vert:qL,meshnormal_frag:WL,meshphong_vert:XL,meshphong_frag:YL,meshphysical_vert:ZL,meshphysical_frag:KL,meshtoon_vert:JL,meshtoon_frag:QL,points_vert:jL,points_frag:$L,shadow_vert:ew,shadow_frag:tw,sprite_vert:aw,sprite_frag:nw},ve={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},xi={basic:{uniforms:Oa([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Oa([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Oa([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Oa([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Oa([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ue(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Oa([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Oa([ve.points,ve.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Oa([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Oa([ve.common,ve.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Oa([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Oa([ve.sprite,ve.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Oa([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Oa([ve.lights,ve.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};xi.physical={uniforms:Oa([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Ah={r:0,b:0,g:0},iw=new kt,Mb=new Ye;Mb.set(-1,0,0,0,1,0,0,0,1);function sw(t,e,a,n,i,s){let r=new Ue(0),o=i===!0?0:1,l,u,f=null,p=0,c=null;function h(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){let x=m.backgroundBlurriness>0;_=e.get(_,x)}return _}function v(m){let _=!1,x=h(m);x===null?g(r,o):x&&x.isColor&&(g(x,1),_=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?a.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,_){let x=h(_);x&&(x.isCubeTexture||x.mapping===Uu)?(u===void 0&&(u=new de(new Gt(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Lr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iw.makeRotationFromEuler(_.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Mb),u.material.toneMapped=ct.getTransfer(x.colorSpace)!==_t,(f!==x||p!==x.version||c!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,p=x.version,c=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new de(new Cu(2,2),new bn({name:"BackgroundMaterial",uniforms:Lr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||p!==x.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,f=x,p=x.version,c=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Ah,I0(t)),a.buffers.color.setClear(Ah.r,Ah.g,Ah.b,_,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(m,_=1){r.set(m),o=_,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:v,addToRenderList:M,dispose:d}}function rw(t,e){let a=t.getParameter(t.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,r=!1;function o(P,O,K,Y,H){let Z=!1,k=p(P,Y,K,O);s!==k&&(s=k,u(s.object)),Z=h(P,Y,K,H),Z&&v(P,Y,K,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(Z||r)&&(r=!1,x(P,O,K,Y),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function p(P,O,K,Y){let H=Y.wireframe===!0,Z=n[O.id];Z===void 0&&(Z={},n[O.id]=Z);let k=P.isInstancedMesh===!0?P.id:0,ee=Z[k];ee===void 0&&(ee={},Z[k]=ee);let oe=ee[K.id];oe===void 0&&(oe={},ee[K.id]=oe);let xe=oe[H];return xe===void 0&&(xe=c(l()),oe[H]=xe),xe}function c(P){let O=[],K=[],Y=[];for(let H=0;H<a;H++)O[H]=0,K[H]=0,Y[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:K,attributeDivisors:Y,object:P,attributes:{},index:null}}function h(P,O,K,Y){let H=s.attributes,Z=O.attributes,k=0,ee=K.getAttributes();for(let oe in ee)if(ee[oe].location>=0){let Se=H[oe],Ce=Z[oe];if(Ce===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Ce=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Ce=P.instanceColor)),Se===void 0||Se.attribute!==Ce||Ce&&Se.data!==Ce.data)return!0;k++}return s.attributesNum!==k||s.index!==Y}function v(P,O,K,Y){let H={},Z=O.attributes,k=0,ee=K.getAttributes();for(let oe in ee)if(ee[oe].location>=0){let Se=Z[oe];Se===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(Se=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(Se=P.instanceColor));let Ce={};Ce.attribute=Se,Se&&Se.data&&(Ce.data=Se.data),H[oe]=Ce,k++}s.attributes=H,s.attributesNum=k,s.index=Y}function M(){let P=s.newAttributes;for(let O=0,K=P.length;O<K;O++)P[O]=0}function g(P){d(P,0)}function d(P,O){let K=s.newAttributes,Y=s.enabledAttributes,H=s.attributeDivisors;K[P]=1,Y[P]===0&&(t.enableVertexAttribArray(P),Y[P]=1),H[P]!==O&&(t.vertexAttribDivisor(P,O),H[P]=O)}function m(){let P=s.newAttributes,O=s.enabledAttributes;for(let K=0,Y=O.length;K<Y;K++)O[K]!==P[K]&&(t.disableVertexAttribArray(K),O[K]=0)}function _(P,O,K,Y,H,Z,k){k===!0?t.vertexAttribIPointer(P,O,K,H,Z):t.vertexAttribPointer(P,O,K,Y,H,Z)}function x(P,O,K,Y){M();let H=Y.attributes,Z=K.getAttributes(),k=O.defaultAttributeValues;for(let ee in Z){let oe=Z[ee];if(oe.location>=0){let xe=H[ee];if(xe===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(xe=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(xe=P.instanceColor)),xe!==void 0){let Se=xe.normalized,Ce=xe.itemSize,pt=e.get(xe);if(pt===void 0)continue;let qt=pt.buffer,mt=pt.type,$=pt.bytesPerElement,me=mt===t.INT||mt===t.UNSIGNED_INT||xe.gpuType===Gf;if(xe.isInterleavedBufferAttribute){let le=xe.data,qe=le.stride,Ze=xe.offset;if(le.isInstancedInterleavedBuffer){for(let ie=0;ie<oe.locationSize;ie++)d(oe.location+ie,le.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ie=0;ie<oe.locationSize;ie++)g(oe.location+ie);t.bindBuffer(t.ARRAY_BUFFER,qt);for(let ie=0;ie<oe.locationSize;ie++)_(oe.location+ie,Ce/oe.locationSize,mt,Se,qe*$,(Ze+Ce/oe.locationSize*ie)*$,me)}else{if(xe.isInstancedBufferAttribute){for(let le=0;le<oe.locationSize;le++)d(oe.location+le,xe.meshPerAttribute);P.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let le=0;le<oe.locationSize;le++)g(oe.location+le);t.bindBuffer(t.ARRAY_BUFFER,qt);for(let le=0;le<oe.locationSize;le++)_(oe.location+le,Ce/oe.locationSize,mt,Se,Ce*$,Ce/oe.locationSize*le*$,me)}}else if(k!==void 0){let Se=k[ee];if(Se!==void 0)switch(Se.length){case 2:t.vertexAttrib2fv(oe.location,Se);break;case 3:t.vertexAttrib3fv(oe.location,Se);break;case 4:t.vertexAttrib4fv(oe.location,Se);break;default:t.vertexAttrib1fv(oe.location,Se)}}}}m()}function C(){E();for(let P in n){let O=n[P];for(let K in O){let Y=O[K];for(let H in Y){let Z=Y[H];for(let k in Z)f(Z[k].object),delete Z[k];delete Y[H]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let K in O){let Y=O[K];for(let H in Y){let Z=Y[H];for(let k in Z)f(Z[k].object),delete Z[k];delete Y[H]}}delete n[P.id]}function L(P){for(let O in n){let K=n[O];for(let Y in K){let H=K[Y];if(H[P.id]===void 0)continue;let Z=H[P.id];for(let k in Z)f(Z[k].object),delete Z[k];delete H[P.id]}}}function y(P){for(let O in n){let K=n[O],Y=P.isInstancedMesh===!0?P.id:0,H=K[Y];if(H!==void 0){for(let Z in H){let k=H[Z];for(let ee in k)f(k[ee].object),delete k[ee];delete H[Z]}delete K[Y],Object.keys(K).length===0&&delete n[O]}}}function E(){I(),r=!0,s!==i&&(s=i,u(s.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function ow(t,e,a){let n;function i(l){n=l}function s(l,u){t.drawArrays(n,l,u),a.update(u,n,1)}function r(l,u,f){f!==0&&(t.drawArraysInstanced(n,l,u,f),a.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let c=0;for(let h=0;h<f;h++)c+=u[h];a.update(c,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function lw(t,e,a,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){return!(L!==kn&&n.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let y=L===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==nn&&n.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==jn&&!y)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=a.precision!==void 0?a.precision:"highp",f=l(u);f!==u&&(Ge("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);let p=a.logarithmicDepthBuffer===!0,c=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control");a.reversedDepthBuffer===!0&&c===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:c,maxTextures:h,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:x,maxSamples:C,samples:A}}function uw(t){let e=this,a=null,n=0,i=!1,s=!1,r=new ci,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,c){let h=p.length!==0||c||n!==0||i;return i=c,n=p.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,c){a=f(p,c,0)},this.setState=function(p,c,h){let v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!i||v===null||v.length===0||s&&!g)s?f(null):u();else{let m=s?0:n,_=m*4,x=d.clippingState||null;l.value=x,x=f(v,c,_,h);for(let C=0;C!==_;++C)x[C]=a[C];d.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==a&&(l.value=a,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(p,c,h,v){let M=p!==null?p.length:0,g=null;if(M!==0){if(g=l.value,v!==!0||g===null){let d=h+M*4,m=c.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,x=h;_!==M;++_,x+=4)r.copy(p[_]).applyMatrix4(m,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}var Ys=4,$M=[.125,.215,.35,.446,.526,.582],wr=20,cw=256,Vu=new Jo,eb=new Ue,U0=null,B0=0,N0=0,O0=!1,dw=new U,wh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,a=0,n=.1,i=100,s={}){let{size:r=256,position:o=dw}=s;U0=this._renderer.getRenderTarget(),B0=this._renderer.getActiveCubeFace(),N0=this._renderer.getActiveMipmapLevel(),O0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),a>0&&this._blur(l,0,0,a),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ab(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(U0,B0,N0),this._renderer.xr.enabled=O0,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===Vs||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),U0=this._renderer.getRenderTarget(),B0=this._renderer.getActiveCubeFace(),N0=this._renderer.getActiveMipmapLevel(),O0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=a||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,n={magFilter:Ia,minFilter:Ia,generateMipmaps:!1,type:mi,format:kn,colorSpace:hu,depthBuffer:!1},i=tb(e,a,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tb(e,a,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fw(s)),this._blurMaterial=pw(s,e,a),this._ggxMaterial=hw(s,e,a)}return i}_compileMaterial(e){let a=new de(new Va,e);this._renderer.compile(a,Vu)}_sceneToCubeUV(e,a,n,i,s){let l=new wa(90,1,a,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,c=p.autoClear,h=p.toneMapping;p.getClearColor(eb),p.toneMapping=Jn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(i),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new de(new Gt,new Ra({name:"PMREM.Background",side:Xa,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,d=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,d=!0):(g.color.copy(eb),d=!0);for(let _=0;_<6;_++){let x=_%3;x===0?(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):x===1?(l.up.set(0,0,u[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));let C=this._cubeSize;el(i,x*C,_>2?C:0,C,C),p.setRenderTarget(i),d&&p.render(M,l),p.render(e,l)}p.toneMapping=h,p.autoClear=c,e.background=m}_textureToCubeUV(e,a){let n=this._renderer,i=e.mapping===Vs||e.mapping===Ar;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ab());let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;el(a,0,0,3*l,2*l),n.setRenderTarget(a),n.render(r,Vu)}_applyPMREM(e){let a=this._renderer,n=a.autoClear;a.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);a.autoClear=n}_applyGGXFilter(e,a,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;let l=r.uniforms,u=n/(this._lodMeshes.length-1),f=a/(this._lodMeshes.length-1),p=Math.sqrt(u*u-f*f),c=0+u*1.25,h=p*c,{_lodMax:v}=this,M=this._sizeLods[n],g=3*M*(n>v-Ys?n-v+Ys:0),d=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=v-a,el(s,g,d,3*M,2*M),i.setRenderTarget(s),i.render(o,Vu),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-n,el(e,g,d,3*M,2*M),i.setRenderTarget(e),i.render(o,Vu)}_blur(e,a,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(e,r,a,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,a,n,i,s,r,o){let l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let f=3,p=this._lodMeshes[i];p.material=u;let c=u.uniforms,h=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*wr-1),M=s/v,g=isFinite(s)?1+Math.floor(f*M):wr;g>wr&&Ge(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${wr}`);let d=[],m=0;for(let L=0;L<wr;++L){let y=L/M,E=Math.exp(-y*y/2);d.push(E),L===0?m+=E:L<g&&(m+=2*E)}for(let L=0;L<d.length;L++)d[L]=d[L]/m;c.envMap.value=e.texture,c.samples.value=g,c.weights.value=d,c.latitudinal.value=r==="latitudinal",o&&(c.poleAxis.value=o);let{_lodMax:_}=this;c.dTheta.value=v,c.mipInt.value=_-n;let x=this._sizeLods[i],C=3*x*(i>_-Ys?i-_+Ys:0),A=4*(this._cubeSize-x);el(a,C,A,3*x,2*x),l.setRenderTarget(a),l.render(p,Vu)}};function fw(t){let e=[],a=[],n=[],i=t,s=t-Ys+1+$M.length;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let l=1/o;r>t-Ys?l=$M[r-t+Ys-1]:r===0&&(l=0),a.push(l);let u=1/(o-2),f=-u,p=1+u,c=[f,f,p,f,p,p,f,f,p,p,f,p],h=6,v=6,M=3,g=2,d=1,m=new Float32Array(M*v*h),_=new Float32Array(g*v*h),x=new Float32Array(d*v*h);for(let A=0;A<h;A++){let L=A%3*2/3-1,y=A>2?0:-1,E=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];m.set(E,M*v*A),_.set(c,g*v*A);let I=[A,A,A,A,A,A];x.set(I,d*v*A)}let C=new Va;C.setAttribute("position",new Sn(m,M)),C.setAttribute("uv",new Sn(_,g)),C.setAttribute("faceIndex",new Sn(x,d)),n.push(new de(C,null)),i>Ys&&i--}return{lodMeshes:n,sizeLods:e,sigmas:a}}function tb(t,e,a){let n=new Mn(t,e,a);return n.texture.mapping=Uu,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function el(t,e,a,n,i){t.viewport.set(e,a,n,i),t.scissor.set(e,a,n,i)}function hw(t,e,a){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function pw(t,e,a){let n=new Float32Array(wr),i=new U(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ab(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function nb(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ih=class extends Mn{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mu(i),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gt(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xa,blending:pi});s.uniforms.tEquirect.value=a;let r=new de(i,s),o=a.minFilter;return a.minFilter===qs&&(a.minFilter=Ia),new Nf(1,10,this).update(e,r),a.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,a=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(a,n,i);e.setRenderTarget(s)}};function mw(t){let e=new WeakMap,a=new WeakMap,n=null;function i(c,h=!1){return c==null?null:h?r(c):s(c)}function s(c){if(c&&c.isTexture){let h=c.mapping;if(h===zf||h===Hf)if(e.has(c)){let v=e.get(c).texture;return o(v,c.mapping)}else{let v=c.image;if(v&&v.height>0){let M=new Ih(v.height);return M.fromEquirectangularTexture(t,c),e.set(c,M),c.addEventListener("dispose",u),o(M.texture,c.mapping)}else return null}}return c}function r(c){if(c&&c.isTexture){let h=c.mapping,v=h===zf||h===Hf,M=h===Vs||h===Ar;if(v||M){let g=a.get(c),d=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return n===null&&(n=new wh(t)),g=v?n.fromEquirectangular(c,g):n.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,a.set(c,g),g.texture;if(g!==void 0)return g.texture;{let m=c.image;return v&&m&&m.height>0||M&&m&&l(m)?(n===null&&(n=new wh(t)),g=v?n.fromEquirectangular(c):n.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,a.set(c,g),c.addEventListener("dispose",f),g.texture):null}}}return c}function o(c,h){return h===zf?c.mapping=Vs:h===Hf&&(c.mapping=Ar),c}function l(c){let h=0,v=6;for(let M=0;M<v;M++)c[M]!==void 0&&h++;return h===v}function u(c){let h=c.target;h.removeEventListener("dispose",u);let v=e.get(h);v!==void 0&&(e.delete(h),v.dispose())}function f(c){let h=c.target;h.removeEventListener("dispose",f);let v=a.get(h);v!==void 0&&(a.delete(h),v.dispose())}function p(){e=new WeakMap,a=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:p}}function gw(t){let e={};function a(n){if(e[n]!==void 0)return e[n];let i=t.getExtension(n);return e[n]=i,i}return{has:function(n){return a(n)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(n){let i=a(n);return i===null&&br("WebGLRenderer: "+n+" extension not supported."),i}}}function xw(t,e,a,n){let i={},s=new WeakMap;function r(p){let c=p.target;c.index!==null&&e.remove(c.index);for(let v in c.attributes)e.remove(c.attributes[v]);c.removeEventListener("dispose",r),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,a.memory.geometries--}function o(p,c){return i[c.id]===!0||(c.addEventListener("dispose",r),i[c.id]=!0,a.memory.geometries++),c}function l(p){let c=p.attributes;for(let h in c)e.update(c[h],t.ARRAY_BUFFER)}function u(p){let c=[],h=p.index,v=p.attributes.position,M=0;if(v===void 0)return;if(h!==null){let m=h.array;M=h.version;for(let _=0,x=m.length;_<x;_+=3){let C=m[_+0],A=m[_+1],L=m[_+2];c.push(C,A,A,L,L,C)}}else{let m=v.array;M=v.version;for(let _=0,x=m.length/3-1;_<x;_+=3){let C=_+0,A=_+1,L=_+2;c.push(C,A,A,L,L,C)}}let g=new(v.count>=65535?Su:vu)(c,1);g.version=M;let d=s.get(p);d&&e.remove(d),s.set(p,g)}function f(p){let c=s.get(p);if(c){let h=p.index;h!==null&&c.version<h.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:f}}function yw(t,e,a){let n;function i(p){n=p}let s,r;function o(p){s=p.type,r=p.bytesPerElement}function l(p,c){t.drawElements(n,c,s,p*r),a.update(c,n,1)}function u(p,c,h){h!==0&&(t.drawElementsInstanced(n,c,s,p*r,h),a.update(c,n,h))}function f(p,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,s,p,0,h);let M=0;for(let g=0;g<h;g++)M+=c[g];a.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function vw(t){let e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(a.calls++,r){case t.TRIANGLES:a.triangles+=o*(s/3);break;case t.LINES:a.lines+=o*(s/2);break;case t.LINE_STRIP:a.lines+=o*(s-1);break;case t.LINE_LOOP:a.lines+=o*s;break;case t.POINTS:a.points+=o*s;break;default:Ve("WebGLInfo: Unknown draw mode:",r);break}}function i(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:i,update:n}}function Sw(t,e,a){let n=new WeakMap,i=new Yt;function s(r,o,l){let u=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=f!==void 0?f.length:0,c=n.get(o);if(c===void 0||c.count!==p){let E=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",E)};c!==void 0&&c.texture.dispose();let h=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],m=o.morphAttributes.color||[],_=0;h===!0&&(_=1),v===!0&&(_=2),M===!0&&(_=3);let x=o.attributes.position.count*_,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let A=new Float32Array(x*C*4*p),L=new gu(A,x,C,p);L.type=jn,L.needsUpdate=!0;let y=_*4;for(let I=0;I<p;I++){let P=g[I],O=d[I],K=m[I],Y=x*C*4*I;for(let H=0;H<P.count;H++){let Z=H*y;h===!0&&(i.fromBufferAttribute(P,H),A[Y+Z+0]=i.x,A[Y+Z+1]=i.y,A[Y+Z+2]=i.z,A[Y+Z+3]=0),v===!0&&(i.fromBufferAttribute(O,H),A[Y+Z+4]=i.x,A[Y+Z+5]=i.y,A[Y+Z+6]=i.z,A[Y+Z+7]=0),M===!0&&(i.fromBufferAttribute(K,H),A[Y+Z+8]=i.x,A[Y+Z+9]=i.y,A[Y+Z+10]=i.z,A[Y+Z+11]=K.itemSize===4?i.w:1)}}c={count:p,texture:L,size:new Pe(x,C)},n.set(o,c),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,a);else{let h=0;for(let M=0;M<u.length;M++)h+=u[M];let v=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,a),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function _w(t,e,a,n,i){let s=new WeakMap;function r(u){let f=i.render.frame,p=u.geometry,c=e.get(u,p);if(s.get(c)!==f&&(e.update(c),s.set(c,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==f&&(a.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&a.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){let h=u.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return c}function o(){s=new WeakMap}function l(u){let f=u.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),a.remove(f.instanceMatrix),f.instanceColor!==null&&a.remove(f.instanceColor)}return{update:r,dispose:o}}var Mw={[f0]:"LINEAR_TONE_MAPPING",[h0]:"REINHARD_TONE_MAPPING",[p0]:"CINEON_TONE_MAPPING",[m0]:"ACES_FILMIC_TONE_MAPPING",[x0]:"AGX_TONE_MAPPING",[y0]:"NEUTRAL_TONE_MAPPING",[g0]:"CUSTOM_TONE_MAPPING"};function bw(t,e,a,n,i,s){let r=new Mn(e,a,{type:t,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new Zi(e,a):void 0}),o=new Mn(e,a,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new Va;l.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Rt([0,2,0,0,2,0],2));let u=new Mf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new de(l,u),p=new Jo(-1,1,1,-1,0,1),c=null,h=null,v=!1,M,g=null,d=[],m=!1;this.setSize=function(_,x){r.setSize(_,x),o.setSize(_,x);for(let C=0;C<d.length;C++){let A=d[C];A.setSize&&A.setSize(_,x)}},this.setEffects=function(_){d=_,m=d.length>0&&d[0].isRenderPass===!0;let x=r.width,C=r.height;for(let A=0;A<d.length;A++){let L=d[A];L.setSize&&L.setSize(x,C)}},this.begin=function(_,x){if(v||_.toneMapping===Jn&&d.length===0)return!1;if(g=x,x!==null){let C=x.width,A=x.height;(r.width!==C||r.height!==A)&&this.setSize(C,A)}return m===!1&&_.setRenderTarget(r),M=_.toneMapping,_.toneMapping=Jn,!0},this.hasRenderPass=function(){return m},this.end=function(_,x){_.toneMapping=M,v=!0;let C=r,A=o;for(let L=0;L<d.length;L++){let y=d[L];if(y.enabled!==!1&&(y.render(_,A,C,x),y.needsSwap!==!1)){let E=C;C=A,A=E}}if(c!==_.outputColorSpace||h!==_.toneMapping){c=_.outputColorSpace,h=_.toneMapping,u.defines={},ct.getTransfer(c)===_t&&(u.defines.SRGB_TRANSFER="");let L=Mw[h];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=C.texture,_.setRenderTarget(g),_.render(f,p),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),u.dispose()}}var bb=new an,H0=new Zi(1,1),Tb=new gu,Eb=new ff,Cb=new Mu,ib=[],sb=[],rb=new Float32Array(16),ob=new Float32Array(9),lb=new Float32Array(4);function al(t,e,a){let n=t[0];if(n<=0||n>0)return t;let i=e*a,s=ib[i];if(s===void 0&&(s=new Float32Array(i),ib[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=a,t[r].toArray(s,o)}return s}function pa(t,e){if(t.length!==e.length)return!1;for(let a=0,n=t.length;a<n;a++)if(t[a]!==e[a])return!1;return!0}function ma(t,e){for(let a=0,n=e.length;a<n;a++)t[a]=e[a]}function Ph(t,e){let a=sb[e];a===void 0&&(a=new Int32Array(e),sb[e]=a);for(let n=0;n!==e;++n)a[n]=t.allocateTextureUnit();return a}function Tw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1f(this.addr,e),a[0]=e)}function Ew(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(pa(a,e))return;t.uniform2fv(this.addr,e),ma(a,e)}}function Cw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(pa(a,e))return;t.uniform3fv(this.addr,e),ma(a,e)}}function Aw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(pa(a,e))return;t.uniform4fv(this.addr,e),ma(a,e)}}function Lw(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(pa(a,e))return;t.uniformMatrix2fv(this.addr,!1,e),ma(a,e)}else{if(pa(a,n))return;lb.set(n),t.uniformMatrix2fv(this.addr,!1,lb),ma(a,n)}}function ww(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(pa(a,e))return;t.uniformMatrix3fv(this.addr,!1,e),ma(a,e)}else{if(pa(a,n))return;ob.set(n),t.uniformMatrix3fv(this.addr,!1,ob),ma(a,n)}}function Iw(t,e){let a=this.cache,n=e.elements;if(n===void 0){if(pa(a,e))return;t.uniformMatrix4fv(this.addr,!1,e),ma(a,e)}else{if(pa(a,n))return;rb.set(n),t.uniformMatrix4fv(this.addr,!1,rb),ma(a,n)}}function Rw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1i(this.addr,e),a[0]=e)}function Dw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(pa(a,e))return;t.uniform2iv(this.addr,e),ma(a,e)}}function Pw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(pa(a,e))return;t.uniform3iv(this.addr,e),ma(a,e)}}function Uw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(pa(a,e))return;t.uniform4iv(this.addr,e),ma(a,e)}}function Bw(t,e){let a=this.cache;a[0]!==e&&(t.uniform1ui(this.addr,e),a[0]=e)}function Nw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(pa(a,e))return;t.uniform2uiv(this.addr,e),ma(a,e)}}function Ow(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(pa(a,e))return;t.uniform3uiv(this.addr,e),ma(a,e)}}function Fw(t,e){let a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(pa(a,e))return;t.uniform4uiv(this.addr,e),ma(a,e)}}function zw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i);let s;this.type===t.SAMPLER_2D_SHADOW?(H0.compareFunction=a.isReversedDepthBuffer()?Ch:Eh,s=H0):s=bb,a.setTexture2D(e||s,i)}function Hw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture3D(e||Eb,i)}function kw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTextureCube(e||Cb,i)}function Gw(t,e,a){let n=this.cache,i=a.allocateTextureUnit();n[0]!==i&&(t.uniform1i(this.addr,i),n[0]=i),a.setTexture2DArray(e||Tb,i)}function Vw(t){switch(t){case 5126:return Tw;case 35664:return Ew;case 35665:return Cw;case 35666:return Aw;case 35674:return Lw;case 35675:return ww;case 35676:return Iw;case 5124:case 35670:return Rw;case 35667:case 35671:return Dw;case 35668:case 35672:return Pw;case 35669:case 35673:return Uw;case 5125:return Bw;case 36294:return Nw;case 36295:return Ow;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return zw;case 35679:case 36299:case 36307:return Hw;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Gw}}function qw(t,e){t.uniform1fv(this.addr,e)}function Ww(t,e){let a=al(e,this.size,2);t.uniform2fv(this.addr,a)}function Xw(t,e){let a=al(e,this.size,3);t.uniform3fv(this.addr,a)}function Yw(t,e){let a=al(e,this.size,4);t.uniform4fv(this.addr,a)}function Zw(t,e){let a=al(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,a)}function Kw(t,e){let a=al(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,a)}function Jw(t,e){let a=al(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,a)}function Qw(t,e){t.uniform1iv(this.addr,e)}function jw(t,e){t.uniform2iv(this.addr,e)}function $w(t,e){t.uniform3iv(this.addr,e)}function eI(t,e){t.uniform4iv(this.addr,e)}function tI(t,e){t.uniform1uiv(this.addr,e)}function aI(t,e){t.uniform2uiv(this.addr,e)}function nI(t,e){t.uniform3uiv(this.addr,e)}function iI(t,e){t.uniform4uiv(this.addr,e)}function sI(t,e,a){let n=this.cache,i=e.length,s=Ph(a,i);pa(n,s)||(t.uniform1iv(this.addr,s),ma(n,s));let r;this.type===t.SAMPLER_2D_SHADOW?r=H0:r=bb;for(let o=0;o!==i;++o)a.setTexture2D(e[o]||r,s[o])}function rI(t,e,a){let n=this.cache,i=e.length,s=Ph(a,i);pa(n,s)||(t.uniform1iv(this.addr,s),ma(n,s));for(let r=0;r!==i;++r)a.setTexture3D(e[r]||Eb,s[r])}function oI(t,e,a){let n=this.cache,i=e.length,s=Ph(a,i);pa(n,s)||(t.uniform1iv(this.addr,s),ma(n,s));for(let r=0;r!==i;++r)a.setTextureCube(e[r]||Cb,s[r])}function lI(t,e,a){let n=this.cache,i=e.length,s=Ph(a,i);pa(n,s)||(t.uniform1iv(this.addr,s),ma(n,s));for(let r=0;r!==i;++r)a.setTexture2DArray(e[r]||Tb,s[r])}function uI(t){switch(t){case 5126:return qw;case 35664:return Ww;case 35665:return Xw;case 35666:return Yw;case 35674:return Zw;case 35675:return Kw;case 35676:return Jw;case 5124:case 35670:return Qw;case 35667:case 35671:return jw;case 35668:case 35672:return $w;case 35669:case 35673:return eI;case 5125:return tI;case 36294:return aI;case 36295:return nI;case 36296:return iI;case 35678:case 36198:case 36298:case 36306:case 35682:return sI;case 35679:case 36299:case 36307:return rI;case 35680:case 36300:case 36308:case 36293:return oI;case 36289:case 36303:case 36311:case 36292:return lI}}var k0=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.setValue=Vw(a.type)}},G0=class{constructor(e,a,n){this.id=e,this.addr=n,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=uI(a.type)}},V0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,a[o.id],n)}}},F0=/(\w+)(\])?(\[|\.)?/g;function ub(t,e){t.seq.push(e),t.map[e.id]=e}function cI(t,e,a){let n=t.name,i=n.length;for(F0.lastIndex=0;;){let s=F0.exec(n),r=F0.lastIndex,o=s[1],l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===i){ub(a,u===void 0?new k0(o,t,e):new G0(o,t,e));break}else{let p=a.map[o];p===void 0&&(p=new V0(o),ub(a,p)),a=p}}}var tl=class{constructor(e,a){this.seq=[],this.map={};let n=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(a,r),l=e.getUniformLocation(a,o.name);cI(o,l,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,a,n,i){let s=this.map[a];s!==void 0&&s.setValue(e,n,i)}setOptional(e,a,n){let i=a[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,a,n,i){for(let s=0,r=a.length;s!==r;++s){let o=a[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,a){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in a&&n.push(r)}return n}};function cb(t,e,a){let n=t.createShader(e);return t.shaderSource(n,a),t.compileShader(n),n}var dI=37297,fI=0;function hI(t,e){let a=t.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,a.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${a[r]}`)}return n.join(`
`)}var db=new Ye;function pI(t){ct._getMatrix(db,ct.workingColorSpace,t);let e=`mat3( ${db.elements.map(a=>a.toFixed(4))} )`;switch(ct.getTransfer(t)){case pu:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function fb(t,e,a){let n=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return a.toUpperCase()+`

`+s+`

`+hI(t.getShaderSource(e),o)}else return s}function mI(t,e){let a=pI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}var gI={[f0]:"Linear",[h0]:"Reinhard",[p0]:"Cineon",[m0]:"ACESFilmic",[x0]:"AgX",[y0]:"Neutral",[g0]:"Custom"};function xI(t,e){let a=gI[e];return a===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}var Lh=new U;function yI(){ct.getLuminanceCoefficients(Lh);let t=Lh.x.toFixed(4),e=Lh.y.toFixed(4),a=Lh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wu).join(`
`)}function SI(t){let e=[];for(let a in t){let n=t[a];n!==!1&&e.push("#define "+a+" "+n)}return e.join(`
`)}function _I(t,e){let a={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=t.getActiveAttrib(e,i),r=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),a[r]={type:s.type,location:t.getAttribLocation(e,r),locationSize:o}}return a}function Wu(t){return t!==""}function hb(t,e){let a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pb(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MI=/^[ \t]*#include +<([\w\d./]+)>/gm;function q0(t){return t.replace(MI,TI)}var bI=new Map;function TI(t,e){let a=nt[e];if(a===void 0){let n=bI.get(e);if(n!==void 0)a=nt[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return q0(a)}var EI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mb(t){return t.replace(EI,CI)}function CI(t,e,a,n){let i="";for(let s=parseInt(e);s<parseInt(a);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function gb(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var AI={[Pu]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function LI(t){return AI[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wI={[Vs]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE",[Uu]:"ENVMAP_TYPE_CUBE_UV"};function II(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":wI[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var RI={[Ar]:"ENVMAP_MODE_REFRACTION"};function DI(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":RI[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var PI={[d0]:"ENVMAP_BLENDING_MULTIPLY",[BM]:"ENVMAP_BLENDING_MIX",[NM]:"ENVMAP_BLENDING_ADD"};function UI(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":PI[t.combine]||"ENVMAP_BLENDING_NONE"}function BI(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let a=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:n,maxMip:a}}function NI(t,e,a,n){let i=t.getContext(),s=a.defines,r=a.vertexShader,o=a.fragmentShader,l=LI(a),u=II(a),f=DI(a),p=UI(a),c=BI(a),h=vI(a),v=SI(s),M=i.createProgram(),g,d,m=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(g=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,v].filter(Wu).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,v].filter(Wu).join(`
`),d.length>0&&(d+=`
`)):(g=[gb(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,v,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+f:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexNormals?"#define HAS_NORMAL":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wu).join(`
`),d=[gb(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,v,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+u:"",a.envMap?"#define "+f:"",a.envMap?"#define "+p:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor?"#define USE_COLOR":"",a.vertexAlphas||a.batchingColor?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+l:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==Jn?"#define TONE_MAPPING":"",a.toneMapping!==Jn?nt.tonemapping_pars_fragment:"",a.toneMapping!==Jn?xI("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,mI("linearToOutputTexel",a.outputColorSpace),yI(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(Wu).join(`
`)),r=q0(r),r=hb(r,a),r=pb(r,a),o=q0(o),o=hb(o,a),o=pb(o,a),r=mb(r),o=mb(o),a.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",a.glslVersion===A0?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===A0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let _=m+g+r,x=m+d+o,C=cb(i,i.VERTEX_SHADER,_),A=cb(i,i.FRAGMENT_SHADER,x);i.attachShader(M,C),i.attachShader(M,A),a.index0AttributeName!==void 0?i.bindAttribLocation(M,0,a.index0AttributeName):a.hasPositionAttribute===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function L(P){if(t.debug.checkShaderErrors){let O=i.getProgramInfoLog(M)||"",K=i.getShaderInfoLog(C)||"",Y=i.getShaderInfoLog(A)||"",H=O.trim(),Z=K.trim(),k=Y.trim(),ee=!0,oe=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(ee=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(i,M,C,A);else{let xe=fb(i,C,"vertex"),Se=fb(i,A,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+xe+`
`+Se)}else H!==""?Ge("WebGLProgram: Program Info Log:",H):(Z===""||k==="")&&(oe=!1);oe&&(P.diagnostics={runnable:ee,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:k,prefix:d}})}i.deleteShader(C),i.deleteShader(A),y=new tl(i,M),E=_I(i,M)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let E;this.getAttributes=function(){return E===void 0&&L(this),E};let I=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(M,dI)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=fI++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=A,this}var OI=0,W0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,a,n){let i=this._getShaderCacheForMaterial(e);return i.has(a)===!1&&(i.add(a),a.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let a=this.materialCache.get(e);for(let n of a)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let a=this.materialCache,n=a.get(e);return n===void 0&&(n=new Set,a.set(e,n)),n}_getShaderStage(e){let a=this.shaderCache,n=a.get(e);return n===void 0&&(n=new X0(e),a.set(e,n)),n}},X0=class{constructor(e){this.id=OI++,this.code=e,this.usedTimes=0}};function FI(t){return t===Xs||t===Hu||t===ku}function zI(t,e,a,n,i,s){let r=new Vo,o=new W0,l=new Set,u=[],f=new Map,p=n.logarithmicDepthBuffer,c=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,E,I,P,O,K){let Y=P.fog,H=O.geometry,Z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ee=e.get(y.envMap||Z,k),oe=ee&&ee.mapping===Uu?ee.image.height:null,xe=h[y.type];y.precision!==null&&(c=n.getMaxPrecision(y.precision),c!==y.precision&&Ge("WebGLProgram.getParameters:",y.precision,"not supported, using",c,"instead."));let Se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ce=Se!==void 0?Se.length:0,pt=0;H.morphAttributes.position!==void 0&&(pt=1),H.morphAttributes.normal!==void 0&&(pt=2),H.morphAttributes.color!==void 0&&(pt=3);let qt,mt,$,me;if(xe){let ue=xi[xe];qt=ue.vertexShader,mt=ue.fragmentShader}else{qt=y.vertexShader,mt=y.fragmentShader;let ue=o.getVertexShaderStage(y),Ie=o.getFragmentShaderStage(y);o.update(y,ue,Ie),$=ue.id,me=Ie.id}let le=t.getRenderTarget(),qe=t.state.buffers.depth.getReversed(),Ze=O.isInstancedMesh===!0,ie=O.isBatchedMesh===!0,Re=!!y.map,Ee=!!y.matcap,He=!!ee,be=!!y.aoMap,he=!!y.lightMap,Be=!!y.bumpMap&&y.wireframe===!1,ke=!!y.normalMap,gt=!!y.displacementMap,Tt=!!y.emissiveMap,lt=!!y.metalnessMap,dt=!!y.roughnessMap,N=y.anisotropy>0,Zt=y.clearcoat>0,Xe=y.dispersion>0,T=y.iridescence>0,S=y.sheen>0,D=y.transmission>0,R=N&&!!y.anisotropyMap,B=Zt&&!!y.clearcoatMap,te=Zt&&!!y.clearcoatNormalMap,se=Zt&&!!y.clearcoatRoughnessMap,z=T&&!!y.iridescenceMap,q=T&&!!y.iridescenceThicknessMap,j=S&&!!y.sheenColorMap,_e=S&&!!y.sheenRoughnessMap,fe=!!y.specularMap,ce=!!y.specularColorMap,Ae=!!y.specularIntensityMap,Oe=D&&!!y.transmissionMap,ze=D&&!!y.thicknessMap,w=!!y.gradientMap,Q=!!y.alphaMap,X=y.alphaTest>0,ae=!!y.alphaHash,re=!!y.extensions,J=Jn;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(J=t.toneMapping);let pe={shaderID:xe,shaderType:y.type,shaderName:y.name,vertexShader:qt,fragmentShader:mt,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:c,batching:ie,batchingColor:ie&&O._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&O.instanceColor!==null,instancingMorph:Ze&&O.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Re,matcap:Ee,envMap:He,envMapMode:He&&ee.mapping,envMapCubeUVHeight:oe,aoMap:be,lightMap:he,bumpMap:Be,normalMap:ke,displacementMap:gt,emissiveMap:Tt,normalMapObjectSpace:ke&&y.normalMapType===zM,normalMapTangentSpace:ke&&y.normalMapType===Th,packedNormalMap:ke&&y.normalMapType===Th&&FI(y.normalMap.format),metalnessMap:lt,roughnessMap:dt,anisotropy:N,anisotropyMap:R,clearcoat:Zt,clearcoatMap:B,clearcoatNormalMap:te,clearcoatRoughnessMap:se,dispersion:Xe,iridescence:T,iridescenceMap:z,iridescenceThicknessMap:q,sheen:S,sheenColorMap:j,sheenRoughnessMap:_e,specularMap:fe,specularColorMap:ce,specularIntensityMap:Ae,transmission:D,transmissionMap:Oe,thicknessMap:ze,gradientMap:w,opaque:y.transparent===!1&&y.blending===Tr&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:X,alphaHash:ae,combine:y.combine,mapUv:Re&&v(y.map.channel),aoMapUv:be&&v(y.aoMap.channel),lightMapUv:he&&v(y.lightMap.channel),bumpMapUv:Be&&v(y.bumpMap.channel),normalMapUv:ke&&v(y.normalMap.channel),displacementMapUv:gt&&v(y.displacementMap.channel),emissiveMapUv:Tt&&v(y.emissiveMap.channel),metalnessMapUv:lt&&v(y.metalnessMap.channel),roughnessMapUv:dt&&v(y.roughnessMap.channel),anisotropyMapUv:R&&v(y.anisotropyMap.channel),clearcoatMapUv:B&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:q&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:j&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(y.sheenRoughnessMap.channel),specularMapUv:fe&&v(y.specularMap.channel),specularColorMapUv:ce&&v(y.specularColorMap.channel),specularIntensityMapUv:Ae&&v(y.specularIntensityMap.channel),transmissionMapUv:Oe&&v(y.transmissionMap.channel),thicknessMapUv:ze&&v(y.thicknessMap.channel),alphaMapUv:Q&&v(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ke||N),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Re||Q),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&ke===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:qe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:J,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===_t,decodeVideoTextureEmissive:Tt&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Na,flipSided:y.side===Xa,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:re&&y.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&y.extensions.multiDraw===!0||ie)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=l.has(1),pe.vertexUv2s=l.has(2),pe.vertexUv3s=l.has(3),l.clear(),pe}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(d(E,y),m(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function d(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function m(y,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function _(y){let E=h[y.type],I;if(E){let P=xi[E];I=QM.clone(P.uniforms)}else I=y.uniforms;return I}function x(y,E){let I=f.get(E);return I!==void 0?++I.usedTimes:(I=new NI(t,E,y,i),u.push(I),f.set(E,I)),I}function C(y){if(--y.usedTimes===0){let E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),f.delete(y.cacheKey),y.destroy()}}function A(y){o.remove(y)}function L(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:_,acquireProgram:x,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:L}}function HI(){let t=new WeakMap;function e(r){return t.has(r)}function a(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function n(r){t.delete(r)}function i(r,o,l){t.get(r)[o]=l}function s(){t=new WeakMap}return{has:e,get:a,remove:n,update:i,dispose:s}}function kI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function xb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yb(){let t=[],e=0,a=[],n=[],i=[];function s(){e=0,a.length=0,n.length=0,i.length=0}function r(c){let h=0;return c.isInstancedMesh&&(h+=2),c.isSkinnedMesh&&(h+=1),h}function o(c,h,v,M,g,d){let m=t[e];return m===void 0?(m={id:c.id,object:c,geometry:h,material:v,materialVariant:r(c),groupOrder:M,renderOrder:c.renderOrder,z:g,group:d},t[e]=m):(m.id=c.id,m.object=c,m.geometry=h,m.material=v,m.materialVariant=r(c),m.groupOrder=M,m.renderOrder=c.renderOrder,m.z=g,m.group=d),e++,m}function l(c,h,v,M,g,d){let m=o(c,h,v,M,g,d);v.transmission>0?n.push(m):v.transparent===!0?i.push(m):a.push(m)}function u(c,h,v,M,g,d){let m=o(c,h,v,M,g,d);v.transmission>0?n.unshift(m):v.transparent===!0?i.unshift(m):a.unshift(m)}function f(c,h,v){a.length>1&&a.sort(c||kI),n.length>1&&n.sort(h||xb),i.length>1&&i.sort(h||xb),v&&(a.reverse(),n.reverse(),i.reverse())}function p(){for(let c=e,h=t.length;c<h;c++){let v=t[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:a,transmissive:n,transparent:i,init:s,push:l,unshift:u,finish:p,sort:f}}function GI(){let t=new WeakMap;function e(n,i){let s=t.get(n),r;return s===void 0?(r=new yb,t.set(n,[r])):i>=s.length?(r=new yb,s.push(r)):r=s[i],r}function a(){t=new WeakMap}return{get:e,dispose:a}}function VI(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new U,color:new Ue};break;case"SpotLight":a={position:new U,direction:new U,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new U,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":a={direction:new U,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":a={color:new Ue,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=a,a}}}function qI(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=a,a}}}var WI=0;function XI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YI(t){let e=new VI,a=qI(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new U);let i=new U,s=new kt,r=new kt;function o(u){let f=0,p=0,c=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let h=0,v=0,M=0,g=0,d=0,m=0,_=0,x=0,C=0,A=0,L=0;u.sort(XI);for(let E=0,I=u.length;E<I;E++){let P=u[E],O=P.color,K=P.intensity,Y=P.distance,H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Xs?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=O.r*K,p+=O.g*K,c+=O.b*K;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],K);L++}else if(P.isDirectionalLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,ee=a.get(P);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,n.directionalShadow[h]=ee,n.directionalShadowMap[h]=H,n.directionalShadowMatrix[h]=P.shadow.matrix,m++}n.directional[h]=Z,h++}else if(P.isSpotLight){let Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(O).multiplyScalar(K),Z.distance=Y,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[M]=Z;let k=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,k.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[M]=k.matrix,P.castShadow){let ee=a.get(P);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=H,x++}M++}else if(P.isRectAreaLight){let Z=e.get(P);Z.color.copy(O).multiplyScalar(K),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=Z,g++}else if(P.isPointLight){let Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let k=P.shadow,ee=a.get(P);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,ee.shadowCameraNear=k.camera.near,ee.shadowCameraFar=k.camera.far,n.pointShadow[v]=ee,n.pointShadowMap[v]=H,n.pointShadowMatrix[v]=P.shadow.matrix,_++}n.point[v]=Z,v++}else if(P.isHemisphereLight){let Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(K),Z.groundColor.copy(P.groundColor).multiplyScalar(K),n.hemi[d]=Z,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=c;let y=n.hash;(y.directionalLength!==h||y.pointLength!==v||y.spotLength!==M||y.rectAreaLength!==g||y.hemiLength!==d||y.numDirectionalShadows!==m||y.numPointShadows!==_||y.numSpotShadows!==x||y.numSpotMaps!==C||y.numLightProbes!==L)&&(n.directional.length=h,n.spot.length=M,n.rectArea.length=g,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,y.directionalLength=h,y.pointLength=v,y.spotLength=M,y.rectAreaLength=g,y.hemiLength=d,y.numDirectionalShadows=m,y.numPointShadows=_,y.numSpotShadows=x,y.numSpotMaps=C,y.numLightProbes=L,n.version=WI++)}function l(u,f){let p=0,c=0,h=0,v=0,M=0,g=f.matrixWorldInverse;for(let d=0,m=u.length;d<m;d++){let _=u[d];if(_.isDirectionalLight){let x=n.directional[p];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),p++}else if(_.isSpotLight){let x=n.spot[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),h++}else if(_.isRectAreaLight){let x=n.rectArea[v];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),r.identity(),s.copy(_.matrixWorld),s.premultiply(g),r.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),v++}else if(_.isPointLight){let x=n.point[c];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),c++}else if(_.isHemisphereLight){let x=n.hemi[M];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:n}}function vb(t){let e=new YI(t),a=[],n=[],i=[];function s(c){p.camera=c,a.length=0,n.length=0,i.length=0}function r(c){a.push(c)}function o(c){n.push(c)}function l(c){i.push(c)}function u(){e.setup(a)}function f(c){e.setupView(a,c)}let p={lightsArray:a,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:f,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function ZI(t){let e=new WeakMap;function a(i,s=0){let r=e.get(i),o;return r===void 0?(o=new vb(t),e.set(i,[o])):s>=r.length?(o=new vb(t),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:a,dispose:n}}var KI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,QI=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],jI=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Sb=new kt,qu=new U,z0=new U;function $I(t,e,a){let n=new Xo,i=new Pe,s=new Pe,r=new Yt,o=new bf,l=new Tf,u={},f=a.maxTextureSize,p={[Xi]:Xa,[Xa]:Xi,[Na]:Na},c=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:KI,fragmentShader:JI}),h=c.clone();h.defines.HORIZONTAL_PASS=1;let v=new Va;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new de(v,c),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let d=this.type;this.render=function(A,L,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Ff&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pu);let E=t.getRenderTarget(),I=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),O=t.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let K=d!==this.type;K&&L.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(H=>H.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,H=A.length;Y<H;Y++){let Z=A[Y],k=Z.shadow;if(k===void 0){Ge("WebGLShadowMap:",Z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let ee=k.getFrameExtents();i.multiply(ee),s.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/ee.x),i.x=s.x*ee.x,k.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/ee.y),i.y=s.y*ee.y,k.mapSize.y=s.y));let oe=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=oe,k.map===null||K===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Qo){if(Z.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Mn(i.x,i.y,{format:Xs,type:mi,minFilter:Ia,magFilter:Ia,generateMipmaps:!1}),k.map.texture.name=Z.name+".shadowMap",k.map.depthTexture=new Zi(i.x,i.y,jn),k.map.depthTexture.name=Z.name+".shadowMapDepth",k.map.depthTexture.format=fi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_a,k.map.depthTexture.magFilter=_a}else Z.isPointLight?(k.map=new Ih(i.x),k.map.depthTexture=new pf(i.x,Qn)):(k.map=new Mn(i.x,i.y),k.map.depthTexture=new Zi(i.x,i.y,Qn)),k.map.depthTexture.name=Z.name+".shadowMap",k.map.depthTexture.format=fi,this.type===Pu?(k.map.depthTexture.compareFunction=oe?Ch:Eh,k.map.depthTexture.minFilter=Ia,k.map.depthTexture.magFilter=Ia):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=_a,k.map.depthTexture.magFilter=_a);k.camera.updateProjectionMatrix()}let xe=k.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<xe;Se++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,Se),t.clear();else{Se===0&&(t.setRenderTarget(k.map),t.clear());let Ce=k.getViewport(Se);r.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),O.viewport(r)}if(Z.isPointLight){let Ce=k.camera,pt=k.matrix,qt=Z.distance||Ce.far;qt!==Ce.far&&(Ce.far=qt,Ce.updateProjectionMatrix()),qu.setFromMatrixPosition(Z.matrixWorld),Ce.position.copy(qu),z0.copy(Ce.position),z0.add(QI[Se]),Ce.up.copy(jI[Se]),Ce.lookAt(z0),Ce.updateMatrixWorld(),pt.makeTranslation(-qu.x,-qu.y,-qu.z),Sb.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Sb,Ce.coordinateSystem,Ce.reversedDepth)}else k.updateMatrices(Z);n=k.getFrustum(),x(L,y,k.camera,Z,this.type)}k.isPointLightShadow!==!0&&this.type===Qo&&m(k,y),k.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,I,P)};function m(A,L){let y=e.update(M);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mn(i.x,i.y,{format:Xs,type:mi})),c.uniforms.shadow_pass.value=A.map.depthTexture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(L,null,y,c,M,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(L,null,y,h,M,null)}function _(A,L,y,E){let I=null,P=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)I=P;else if(I=y.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let O=I.uuid,K=L.uuid,Y=u[O];Y===void 0&&(Y={},u[O]=Y);let H=Y[K];H===void 0&&(H=I.clone(),Y[K]=H,L.addEventListener("dispose",C)),I=H}if(I.visible=L.visible,I.wireframe=L.wireframe,E===Qo?I.side=L.shadowSide!==null?L.shadowSide:L.side:I.side=L.shadowSide!==null?L.shadowSide:p[L.side],I.alphaMap=L.alphaMap,I.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,I.map=L.map,I.clipShadows=L.clipShadows,I.clippingPlanes=L.clippingPlanes,I.clipIntersection=L.clipIntersection,I.displacementMap=L.displacementMap,I.displacementScale=L.displacementScale,I.displacementBias=L.displacementBias,I.wireframeLinewidth=L.wireframeLinewidth,I.linewidth=L.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=t.properties.get(I);O.light=y}return I}function x(A,L,y,E,I){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===Qo)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);let K=e.update(A),Y=A.material;if(Array.isArray(Y)){let H=K.groups;for(let Z=0,k=H.length;Z<k;Z++){let ee=H[Z],oe=Y[ee.materialIndex];if(oe&&oe.visible){let xe=_(A,oe,E,I);A.onBeforeShadow(t,A,L,y,K,xe,ee),t.renderBufferDirect(y,null,K,xe,A,ee),A.onAfterShadow(t,A,L,y,K,xe,ee)}}}else if(Y.visible){let H=_(A,Y,E,I);A.onBeforeShadow(t,A,L,y,K,H,null),t.renderBufferDirect(y,null,K,H,A,null),A.onAfterShadow(t,A,L,y,K,H,null)}}let O=A.children;for(let K=0,Y=O.length;K<Y;K++)x(O[K],L,y,E,I)}function C(A){A.target.removeEventListener("dispose",C);for(let y in u){let E=u[y],I=A.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function eR(t,e){function a(){let w=!1,Q=new Yt,X=null,ae=new Yt(0,0,0,0);return{setMask:function(re){X!==re&&!w&&(t.colorMask(re,re,re,re),X=re)},setLocked:function(re){w=re},setClear:function(re,J,pe,ue,Ie){Ie===!0&&(re*=ue,J*=ue,pe*=ue),Q.set(re,J,pe,ue),ae.equals(Q)===!1&&(t.clearColor(re,J,pe,ue),ae.copy(Q))},reset:function(){w=!1,X=null,ae.set(-1,0,0,0)}}}function n(){let w=!1,Q=!1,X=null,ae=null,re=null;return{setReversed:function(J){if(Q!==J){let pe=e.get("EXT_clip_control");J?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),Q=J;let ue=re;re=null,this.setClear(ue)}},getReversed:function(){return Q},setTest:function(J){J?le(t.DEPTH_TEST):qe(t.DEPTH_TEST)},setMask:function(J){X!==J&&!w&&(t.depthMask(J),X=J)},setFunc:function(J){if(Q&&(J=KM[J]),ae!==J){switch(J){case jd:t.depthFunc(t.NEVER);break;case $d:t.depthFunc(t.ALWAYS);break;case ef:t.depthFunc(t.LESS);break;case Er:t.depthFunc(t.LEQUAL);break;case tf:t.depthFunc(t.EQUAL);break;case af:t.depthFunc(t.GEQUAL);break;case nf:t.depthFunc(t.GREATER);break;case sf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=J}},setLocked:function(J){w=J},setClear:function(J){re!==J&&(re=J,Q&&(J=1-J),t.clearDepth(J))},reset:function(){w=!1,X=null,ae=null,re=null,Q=!1}}}function i(){let w=!1,Q=null,X=null,ae=null,re=null,J=null,pe=null,ue=null,Ie=null;return{setTest:function(Ke){w||(Ke?le(t.STENCIL_TEST):qe(t.STENCIL_TEST))},setMask:function(Ke){Q!==Ke&&!w&&(t.stencilMask(Ke),Q=Ke)},setFunc:function(Ke,ga,ba){(X!==Ke||ae!==ga||re!==ba)&&(t.stencilFunc(Ke,ga,ba),X=Ke,ae=ga,re=ba)},setOp:function(Ke,ga,ba){(J!==Ke||pe!==ga||ue!==ba)&&(t.stencilOp(Ke,ga,ba),J=Ke,pe=ga,ue=ba)},setLocked:function(Ke){w=Ke},setClear:function(Ke){Ie!==Ke&&(t.clearStencil(Ke),Ie=Ke)},reset:function(){w=!1,Q=null,X=null,ae=null,re=null,J=null,pe=null,ue=null,Ie=null}}}let s=new a,r=new n,o=new i,l=new WeakMap,u=new WeakMap,f={},p={},c={},h=new WeakMap,v=[],M=null,g=!1,d=null,m=null,_=null,x=null,C=null,A=null,L=null,y=new Ue(0,0,0),E=0,I=!1,P=null,O=null,K=null,Y=null,H=null,Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ee=0,oe=t.getParameter(t.VERSION);oe.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(oe)[1]),k=ee>=1):oe.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),k=ee>=2);let xe=null,Se={},Ce=t.getParameter(t.SCISSOR_BOX),pt=t.getParameter(t.VIEWPORT),qt=new Yt().fromArray(Ce),mt=new Yt().fromArray(pt);function $(w,Q,X,ae){let re=new Uint8Array(4),J=t.createTexture();t.bindTexture(w,J),t.texParameteri(w,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(w,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pe=0;pe<X;pe++)w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(Q+pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return J}let me={};me[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),le(t.DEPTH_TEST),r.setFunc(Er),Be(!1),ke(o0),le(t.CULL_FACE),be(pi);function le(w){f[w]!==!0&&(t.enable(w),f[w]=!0)}function qe(w){f[w]!==!1&&(t.disable(w),f[w]=!1)}function Ze(w,Q){return c[w]!==Q?(t.bindFramebuffer(w,Q),c[w]=Q,w===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=Q),w===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=Q),!0):!1}function ie(w,Q){let X=v,ae=!1;if(w){X=h.get(Q),X===void 0&&(X=[],h.set(Q,X));let re=w.textures;if(X.length!==re.length||X[0]!==t.COLOR_ATTACHMENT0){for(let J=0,pe=re.length;J<pe;J++)X[J]=t.COLOR_ATTACHMENT0+J;X.length=re.length,ae=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,ae=!0);ae&&t.drawBuffers(X)}function Re(w){return M!==w?(t.useProgram(w),M=w,!0):!1}let Ee={[Ns]:t.FUNC_ADD,[yM]:t.FUNC_SUBTRACT,[vM]:t.FUNC_REVERSE_SUBTRACT};Ee[SM]=t.MIN,Ee[_M]=t.MAX;let He={[MM]:t.ZERO,[bM]:t.ONE,[TM]:t.SRC_COLOR,[Jd]:t.SRC_ALPHA,[IM]:t.SRC_ALPHA_SATURATE,[LM]:t.DST_COLOR,[CM]:t.DST_ALPHA,[EM]:t.ONE_MINUS_SRC_COLOR,[Qd]:t.ONE_MINUS_SRC_ALPHA,[wM]:t.ONE_MINUS_DST_COLOR,[AM]:t.ONE_MINUS_DST_ALPHA,[RM]:t.CONSTANT_COLOR,[DM]:t.ONE_MINUS_CONSTANT_COLOR,[PM]:t.CONSTANT_ALPHA,[UM]:t.ONE_MINUS_CONSTANT_ALPHA};function be(w,Q,X,ae,re,J,pe,ue,Ie,Ke){if(w===pi){g===!0&&(qe(t.BLEND),g=!1);return}if(g===!1&&(le(t.BLEND),g=!0),w!==xM){if(w!==d||Ke!==I){if((m!==Ns||C!==Ns)&&(t.blendEquation(t.FUNC_ADD),m=Ns,C=Ns),Ke)switch(w){case Tr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case l0:t.blendFunc(t.ONE,t.ONE);break;case u0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case c0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ve("WebGLState: Invalid blending: ",w);break}else switch(w){case Tr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case l0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case u0:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case c0:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",w);break}_=null,x=null,A=null,L=null,y.set(0,0,0),E=0,d=w,I=Ke}return}re=re||Q,J=J||X,pe=pe||ae,(Q!==m||re!==C)&&(t.blendEquationSeparate(Ee[Q],Ee[re]),m=Q,C=re),(X!==_||ae!==x||J!==A||pe!==L)&&(t.blendFuncSeparate(He[X],He[ae],He[J],He[pe]),_=X,x=ae,A=J,L=pe),(ue.equals(y)===!1||Ie!==E)&&(t.blendColor(ue.r,ue.g,ue.b,Ie),y.copy(ue),E=Ie),d=w,I=!1}function he(w,Q){w.side===Na?qe(t.CULL_FACE):le(t.CULL_FACE);let X=w.side===Xa;Q&&(X=!X),Be(X),w.blending===Tr&&w.transparent===!1?be(pi):be(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),r.setFunc(w.depthFunc),r.setTest(w.depthTest),r.setMask(w.depthWrite),s.setMask(w.colorWrite);let ae=w.stencilWrite;o.setTest(ae),ae&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Tt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(w){P!==w&&(w?t.frontFace(t.CW):t.frontFace(t.CCW),P=w)}function ke(w){w!==mM?(le(t.CULL_FACE),w!==O&&(w===o0?t.cullFace(t.BACK):w===gM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):qe(t.CULL_FACE),O=w}function gt(w){w!==K&&(k&&t.lineWidth(w),K=w)}function Tt(w,Q,X){w?(le(t.POLYGON_OFFSET_FILL),(Y!==Q||H!==X)&&(Y=Q,H=X,r.getReversed()&&(Q=-Q),t.polygonOffset(Q,X))):qe(t.POLYGON_OFFSET_FILL)}function lt(w){w?le(t.SCISSOR_TEST):qe(t.SCISSOR_TEST)}function dt(w){w===void 0&&(w=t.TEXTURE0+Z-1),xe!==w&&(t.activeTexture(w),xe=w)}function N(w,Q,X){X===void 0&&(xe===null?X=t.TEXTURE0+Z-1:X=xe);let ae=Se[X];ae===void 0&&(ae={type:void 0,texture:void 0},Se[X]=ae),(ae.type!==w||ae.texture!==Q)&&(xe!==X&&(t.activeTexture(X),xe=X),t.bindTexture(w,Q||me[w]),ae.type=w,ae.texture=Q)}function Zt(){let w=Se[xe];w!==void 0&&w.type!==void 0&&(t.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Xe(){try{t.compressedTexImage2D(...arguments)}catch(w){Ve("WebGLState:",w)}}function T(){try{t.compressedTexImage3D(...arguments)}catch(w){Ve("WebGLState:",w)}}function S(){try{t.texSubImage2D(...arguments)}catch(w){Ve("WebGLState:",w)}}function D(){try{t.texSubImage3D(...arguments)}catch(w){Ve("WebGLState:",w)}}function R(){try{t.compressedTexSubImage2D(...arguments)}catch(w){Ve("WebGLState:",w)}}function B(){try{t.compressedTexSubImage3D(...arguments)}catch(w){Ve("WebGLState:",w)}}function te(){try{t.texStorage2D(...arguments)}catch(w){Ve("WebGLState:",w)}}function se(){try{t.texStorage3D(...arguments)}catch(w){Ve("WebGLState:",w)}}function z(){try{t.texImage2D(...arguments)}catch(w){Ve("WebGLState:",w)}}function q(){try{t.texImage3D(...arguments)}catch(w){Ve("WebGLState:",w)}}function j(w){return p[w]!==void 0?p[w]:t.getParameter(w)}function _e(w,Q){p[w]!==Q&&(t.pixelStorei(w,Q),p[w]=Q)}function fe(w){qt.equals(w)===!1&&(t.scissor(w.x,w.y,w.z,w.w),qt.copy(w))}function ce(w){mt.equals(w)===!1&&(t.viewport(w.x,w.y,w.z,w.w),mt.copy(w))}function Ae(w,Q){let X=u.get(Q);X===void 0&&(X=new WeakMap,u.set(Q,X));let ae=X.get(w);ae===void 0&&(ae=t.getUniformBlockIndex(Q,w.name),X.set(w,ae))}function Oe(w,Q){let ae=u.get(Q).get(w);l.get(Q)!==ae&&(t.uniformBlockBinding(Q,ae,w.__bindingPointIndex),l.set(Q,ae))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},p={},xe=null,Se={},c={},h=new WeakMap,v=[],M=null,g=!1,d=null,m=null,_=null,x=null,C=null,A=null,L=null,y=new Ue(0,0,0),E=0,I=!1,P=null,O=null,K=null,Y=null,H=null,qt.set(0,0,t.canvas.width,t.canvas.height),mt.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:le,disable:qe,bindFramebuffer:Ze,drawBuffers:ie,useProgram:Re,setBlending:be,setMaterial:he,setFlipSided:Be,setCullFace:ke,setLineWidth:gt,setPolygonOffset:Tt,setScissorTest:lt,activeTexture:dt,bindTexture:N,unbindTexture:Zt,compressedTexImage2D:Xe,compressedTexImage3D:T,texImage2D:z,texImage3D:q,pixelStorei:_e,getParameter:j,updateUBOMapping:Ae,uniformBlockBinding:Oe,texStorage2D:te,texStorage3D:se,texSubImage2D:S,texSubImage3D:D,compressedTexSubImage2D:R,compressedTexSubImage3D:B,scissor:fe,viewport:ce,reset:ze}}function tR(t,e,a,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Pe,f=new WeakMap,p=new Set,c,h=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,S){return v?new OffscreenCanvas(T,S):mu("canvas")}function g(T,S,D){let R=1,B=Xe(T);if((B.width>D||B.height>D)&&(R=D/Math.max(B.width,B.height)),R<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let te=Math.floor(R*B.width),se=Math.floor(R*B.height);c===void 0&&(c=M(te,se));let z=S?M(te,se):c;return z.width=te,z.height=se,z.getContext("2d").drawImage(T,0,0,te,se),Ge("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+te+"x"+se+")."),z}else return"data"in T&&Ge("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),T;return T}function d(T){return T.generateMipmaps}function m(T){t.generateMipmap(T)}function _(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(T,S,D,R,B,te=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se;R&&(se=e.get("EXT_texture_norm16"),se||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let z=S;if(S===t.RED&&(D===t.FLOAT&&(z=t.R32F),D===t.HALF_FLOAT&&(z=t.R16F),D===t.UNSIGNED_BYTE&&(z=t.R8),D===t.UNSIGNED_SHORT&&se&&(z=se.R16_EXT),D===t.SHORT&&se&&(z=se.R16_SNORM_EXT)),S===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.R8UI),D===t.UNSIGNED_SHORT&&(z=t.R16UI),D===t.UNSIGNED_INT&&(z=t.R32UI),D===t.BYTE&&(z=t.R8I),D===t.SHORT&&(z=t.R16I),D===t.INT&&(z=t.R32I)),S===t.RG&&(D===t.FLOAT&&(z=t.RG32F),D===t.HALF_FLOAT&&(z=t.RG16F),D===t.UNSIGNED_BYTE&&(z=t.RG8),D===t.UNSIGNED_SHORT&&se&&(z=se.RG16_EXT),D===t.SHORT&&se&&(z=se.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RG8UI),D===t.UNSIGNED_SHORT&&(z=t.RG16UI),D===t.UNSIGNED_INT&&(z=t.RG32UI),D===t.BYTE&&(z=t.RG8I),D===t.SHORT&&(z=t.RG16I),D===t.INT&&(z=t.RG32I)),S===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RGB8UI),D===t.UNSIGNED_SHORT&&(z=t.RGB16UI),D===t.UNSIGNED_INT&&(z=t.RGB32UI),D===t.BYTE&&(z=t.RGB8I),D===t.SHORT&&(z=t.RGB16I),D===t.INT&&(z=t.RGB32I)),S===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&(z=t.RGBA8UI),D===t.UNSIGNED_SHORT&&(z=t.RGBA16UI),D===t.UNSIGNED_INT&&(z=t.RGBA32UI),D===t.BYTE&&(z=t.RGBA8I),D===t.SHORT&&(z=t.RGBA16I),D===t.INT&&(z=t.RGBA32I)),S===t.RGB&&(D===t.UNSIGNED_SHORT&&se&&(z=se.RGB16_EXT),D===t.SHORT&&se&&(z=se.RGB16_SNORM_EXT),D===t.UNSIGNED_INT_5_9_9_9_REV&&(z=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&(z=t.R11F_G11F_B10F)),S===t.RGBA){let q=te?pu:ct.getTransfer(B);D===t.FLOAT&&(z=t.RGBA32F),D===t.HALF_FLOAT&&(z=t.RGBA16F),D===t.UNSIGNED_BYTE&&(z=q===_t?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT&&se&&(z=se.RGBA16_EXT),D===t.SHORT&&se&&(z=se.RGBA16_SNORM_EXT),D===t.UNSIGNED_SHORT_4_4_4_4&&(z=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&(z=t.RGB5_A1)}return(z===t.R16F||z===t.R32F||z===t.RG16F||z===t.RG32F||z===t.RGBA16F||z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function C(T,S){let D;return T?S===null||S===Qn||S===$o?D=t.DEPTH24_STENCIL8:S===jn?D=t.DEPTH32F_STENCIL8:S===jo&&(D=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qn||S===$o?D=t.DEPTH_COMPONENT24:S===jn?D=t.DEPTH_COMPONENT32F:S===jo&&(D=t.DEPTH_COMPONENT16),D}function A(T,S){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==_a&&T.minFilter!==Ia?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function L(T){let S=T.target;S.removeEventListener("dispose",L),E(S),S.isVideoTexture&&f.delete(S),S.isHTMLTexture&&p.delete(S)}function y(T){let S=T.target;S.removeEventListener("dispose",y),P(S)}function E(T){let S=n.get(T);if(S.__webglInit===void 0)return;let D=T.source,R=h.get(D);if(R){let B=R[S.__cacheKey];B.usedTimes--,B.usedTimes===0&&I(T),Object.keys(R).length===0&&h.delete(D)}n.remove(T)}function I(T){let S=n.get(T);t.deleteTexture(S.__webglTexture);let D=T.source,R=h.get(D);delete R[S.__cacheKey],r.memory.textures--}function P(T){let S=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let R=0;R<6;R++){if(Array.isArray(S.__webglFramebuffer[R]))for(let B=0;B<S.__webglFramebuffer[R].length;B++)t.deleteFramebuffer(S.__webglFramebuffer[R][B]);else t.deleteFramebuffer(S.__webglFramebuffer[R]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[R])}else{if(Array.isArray(S.__webglFramebuffer))for(let R=0;R<S.__webglFramebuffer.length;R++)t.deleteFramebuffer(S.__webglFramebuffer[R]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let R=0;R<S.__webglColorRenderbuffer.length;R++)S.__webglColorRenderbuffer[R]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[R]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let D=T.textures;for(let R=0,B=D.length;R<B;R++){let te=n.get(D[R]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),r.memory.textures--),n.remove(D[R])}n.remove(T)}let O=0;function K(){O=0}function Y(){return O}function H(T){O=T}function Z(){let T=O;return T>=i.maxTextures&&Ge("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),O+=1,T}function k(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function ee(T,S){let D=n.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&D.__version!==T.version){let R=T.image;if(R===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{qe(D,T,S);return}}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);a.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+S)}function oe(T,S){let D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){qe(D,T,S);return}else T.isExternalTexture&&(D.__webglTexture=T.sourceTexture?T.sourceTexture:null);a.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+S)}function xe(T,S){let D=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){qe(D,T,S);return}a.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+S)}function Se(T,S){let D=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&D.__version!==T.version){Ze(D,T,S);return}a.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+S)}let Ce={[rf]:t.REPEAT,[di]:t.CLAMP_TO_EDGE,[of]:t.MIRRORED_REPEAT},pt={[_a]:t.NEAREST,[OM]:t.NEAREST_MIPMAP_NEAREST,[Bu]:t.NEAREST_MIPMAP_LINEAR,[Ia]:t.LINEAR,[kf]:t.LINEAR_MIPMAP_NEAREST,[qs]:t.LINEAR_MIPMAP_LINEAR},qt={[HM]:t.NEVER,[WM]:t.ALWAYS,[kM]:t.LESS,[Eh]:t.LEQUAL,[GM]:t.EQUAL,[Ch]:t.GEQUAL,[VM]:t.GREATER,[qM]:t.NOTEQUAL};function mt(T,S){if(S.type===jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ia||S.magFilter===kf||S.magFilter===Bu||S.magFilter===qs||S.minFilter===Ia||S.minFilter===kf||S.minFilter===Bu||S.minFilter===qs)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Ce[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Ce[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Ce[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,pt[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,qt[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_a||S.minFilter!==Bu&&S.minFilter!==qs||S.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function $(T,S){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",L));let R=S.source,B=h.get(R);B===void 0&&(B={},h.set(R,B));let te=k(S);if(te!==T.__cacheKey){B[te]===void 0&&(B[te]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,D=!0),B[te].usedTimes++;let se=B[T.__cacheKey];se!==void 0&&(B[T.__cacheKey].usedTimes--,se.usedTimes===0&&I(S)),T.__cacheKey=te,T.__webglTexture=B[te].texture}return D}function me(T,S,D){return Math.floor(Math.floor(T/D)/S)}function le(T,S,D,R){let te=T.updateRanges;if(te.length===0)a.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,D,R,S.data);else{te.sort((_e,fe)=>_e.start-fe.start);let se=0;for(let _e=1;_e<te.length;_e++){let fe=te[se],ce=te[_e],Ae=fe.start+fe.count,Oe=me(ce.start,S.width,4),ze=me(fe.start,S.width,4);ce.start<=Ae+1&&Oe===ze&&me(ce.start+ce.count-1,S.width,4)===Oe?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++se,te[se]=ce)}te.length=se+1;let z=a.getParameter(t.UNPACK_ROW_LENGTH),q=a.getParameter(t.UNPACK_SKIP_PIXELS),j=a.getParameter(t.UNPACK_SKIP_ROWS);a.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let _e=0,fe=te.length;_e<fe;_e++){let ce=te[_e],Ae=Math.floor(ce.start/4),Oe=Math.ceil(ce.count/4),ze=Ae%S.width,w=Math.floor(Ae/S.width),Q=Oe,X=1;a.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),a.pixelStorei(t.UNPACK_SKIP_ROWS,w),a.texSubImage2D(t.TEXTURE_2D,0,ze,w,Q,X,D,R,S.data)}T.clearUpdateRanges(),a.pixelStorei(t.UNPACK_ROW_LENGTH,z),a.pixelStorei(t.UNPACK_SKIP_PIXELS,q),a.pixelStorei(t.UNPACK_SKIP_ROWS,j)}}function qe(T,S,D){let R=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(R=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(R=t.TEXTURE_3D);let B=$(T,S),te=S.source;a.bindTexture(R,T.__webglTexture,t.TEXTURE0+D);let se=n.get(te);if(te.version!==se.__version||B===!0){if(a.activeTexture(t.TEXTURE0+D),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let X=ct.getPrimaries(ct.workingColorSpace),ae=S.colorSpace===Qi?null:ct.getPrimaries(S.colorSpace),re=S.colorSpace===Qi||X===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}a.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let q=g(S.image,!1,i.maxTextureSize);q=Zt(S,q);let j=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),fe=x(S.internalFormat,j,_e,S.normalized,S.colorSpace,S.isVideoTexture);mt(R,S);let ce,Ae=S.mipmaps,Oe=S.isVideoTexture!==!0,ze=se.__version===void 0||B===!0,w=te.dataReady,Q=A(S,q);if(S.isDepthTexture)fe=C(S.format===Ws,S.type),ze&&(Oe?a.texStorage2D(t.TEXTURE_2D,1,fe,q.width,q.height):a.texImage2D(t.TEXTURE_2D,0,fe,q.width,q.height,0,j,_e,null));else if(S.isDataTexture)if(Ae.length>0){Oe&&ze&&a.texStorage2D(t.TEXTURE_2D,Q,fe,Ae[0].width,Ae[0].height);for(let X=0,ae=Ae.length;X<ae;X++)ce=Ae[X],Oe?w&&a.texSubImage2D(t.TEXTURE_2D,X,0,0,ce.width,ce.height,j,_e,ce.data):a.texImage2D(t.TEXTURE_2D,X,fe,ce.width,ce.height,0,j,_e,ce.data);S.generateMipmaps=!1}else Oe?(ze&&a.texStorage2D(t.TEXTURE_2D,Q,fe,q.width,q.height),w&&le(S,q,j,_e)):a.texImage2D(t.TEXTURE_2D,0,fe,q.width,q.height,0,j,_e,q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&ze&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Q,fe,Ae[0].width,Ae[0].height,q.depth);for(let X=0,ae=Ae.length;X<ae;X++)if(ce=Ae[X],S.format!==kn)if(j!==null)if(Oe){if(w)if(S.layerUpdates.size>0){let re=P0(ce.width,ce.height,S.format,S.type);for(let J of S.layerUpdates){let pe=ce.data.subarray(J*re/ce.data.BYTES_PER_ELEMENT,(J+1)*re/ce.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,J,ce.width,ce.height,1,j,pe)}S.clearLayerUpdates()}else a.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,q.depth,j,ce.data)}else a.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,fe,ce.width,ce.height,q.depth,0,ce.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?w&&a.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,q.depth,j,_e,ce.data):a.texImage3D(t.TEXTURE_2D_ARRAY,X,fe,ce.width,ce.height,q.depth,0,j,_e,ce.data)}else{Oe&&ze&&a.texStorage2D(t.TEXTURE_2D,Q,fe,Ae[0].width,Ae[0].height);for(let X=0,ae=Ae.length;X<ae;X++)ce=Ae[X],S.format!==kn?j!==null?Oe?w&&a.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ce.width,ce.height,j,ce.data):a.compressedTexImage2D(t.TEXTURE_2D,X,fe,ce.width,ce.height,0,ce.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?w&&a.texSubImage2D(t.TEXTURE_2D,X,0,0,ce.width,ce.height,j,_e,ce.data):a.texImage2D(t.TEXTURE_2D,X,fe,ce.width,ce.height,0,j,_e,ce.data)}else if(S.isDataArrayTexture)if(Oe){if(ze&&a.texStorage3D(t.TEXTURE_2D_ARRAY,Q,fe,q.width,q.height,q.depth),w)if(S.layerUpdates.size>0){let X=P0(q.width,q.height,S.format,S.type);for(let ae of S.layerUpdates){let re=q.data.subarray(ae*X/q.data.BYTES_PER_ELEMENT,(ae+1)*X/q.data.BYTES_PER_ELEMENT);a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,q.width,q.height,1,j,_e,re)}S.clearLayerUpdates()}else a.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,j,_e,q.data)}else a.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,q.width,q.height,q.depth,0,j,_e,q.data);else if(S.isData3DTexture)Oe?(ze&&a.texStorage3D(t.TEXTURE_3D,Q,fe,q.width,q.height,q.depth),w&&a.texSubImage3D(t.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,j,_e,q.data)):a.texImage3D(t.TEXTURE_3D,0,fe,q.width,q.height,q.depth,0,j,_e,q.data);else if(S.isFramebufferTexture){if(ze)if(Oe)a.texStorage2D(t.TEXTURE_2D,Q,fe,q.width,q.height);else{let X=q.width,ae=q.height;for(let re=0;re<Q;re++)a.texImage2D(t.TEXTURE_2D,re,fe,X,ae,0,j,_e,null),X>>=1,ae>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){let X=t.canvas;if(X.hasAttribute("layoutsubtree")||X.setAttribute("layoutsubtree","true"),q.parentNode!==X){X.appendChild(q),p.add(S),X.onpaint=ae=>{let re=ae.changedElements;for(let J of p)re.includes(J.image)&&(J.needsUpdate=!0)},X.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,q);else{let re=t.RGBA,J=t.RGBA,pe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,re,J,pe,q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Oe&&ze){let X=Xe(Ae[0]);a.texStorage2D(t.TEXTURE_2D,Q,fe,X.width,X.height)}for(let X=0,ae=Ae.length;X<ae;X++)ce=Ae[X],Oe?w&&a.texSubImage2D(t.TEXTURE_2D,X,0,0,j,_e,ce):a.texImage2D(t.TEXTURE_2D,X,fe,j,_e,ce);S.generateMipmaps=!1}else if(Oe){if(ze){let X=Xe(q);a.texStorage2D(t.TEXTURE_2D,Q,fe,X.width,X.height)}w&&a.texSubImage2D(t.TEXTURE_2D,0,0,0,j,_e,q)}else a.texImage2D(t.TEXTURE_2D,0,fe,j,_e,q);d(S)&&m(R),se.__version=te.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Ze(T,S,D){if(S.image.length!==6)return;let R=$(T,S),B=S.source;a.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+D);let te=n.get(B);if(B.version!==te.__version||R===!0){a.activeTexture(t.TEXTURE0+D);let se=ct.getPrimaries(ct.workingColorSpace),z=S.colorSpace===Qi?null:ct.getPrimaries(S.colorSpace),q=S.colorSpace===Qi||se===z?t.NONE:t.BROWSER_DEFAULT_WEBGL;a.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),a.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),a.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),a.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let j=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!j&&!_e?fe[J]=g(S.image[J],!0,i.maxCubemapSize):fe[J]=_e?S.image[J].image:S.image[J],fe[J]=Zt(S,fe[J]);let ce=fe[0],Ae=s.convert(S.format,S.colorSpace),Oe=s.convert(S.type),ze=x(S.internalFormat,Ae,Oe,S.normalized,S.colorSpace),w=S.isVideoTexture!==!0,Q=te.__version===void 0||R===!0,X=B.dataReady,ae=A(S,ce);mt(t.TEXTURE_CUBE_MAP,S);let re;if(j){w&&Q&&a.texStorage2D(t.TEXTURE_CUBE_MAP,ae,ze,ce.width,ce.height);for(let J=0;J<6;J++){re=fe[J].mipmaps;for(let pe=0;pe<re.length;pe++){let ue=re[pe];S.format!==kn?Ae!==null?w?X&&a.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,ue.width,ue.height,Ae,ue.data):a.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,ze,ue.width,ue.height,0,ue.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?X&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,0,0,ue.width,ue.height,Ae,Oe,ue.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe,ze,ue.width,ue.height,0,Ae,Oe,ue.data)}}}else{if(re=S.mipmaps,w&&Q){re.length>0&&ae++;let J=Xe(fe[0]);a.texStorage2D(t.TEXTURE_CUBE_MAP,ae,ze,J.width,J.height)}for(let J=0;J<6;J++)if(_e){w?X&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,Ae,Oe,fe[J].data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,fe[J].width,fe[J].height,0,Ae,Oe,fe[J].data);for(let pe=0;pe<re.length;pe++){let Ie=re[pe].image[J].image;w?X&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ie.width,Ie.height,Ae,Oe,Ie.data):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,ze,Ie.width,Ie.height,0,Ae,Oe,Ie.data)}}else{w?X&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ae,Oe,fe[J]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Ae,Oe,fe[J]);for(let pe=0;pe<re.length;pe++){let ue=re[pe];w?X&&a.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,0,0,Ae,Oe,ue.image[J]):a.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,pe+1,ze,Ae,Oe,ue.image[J])}}}d(S)&&m(t.TEXTURE_CUBE_MAP),te.__version=B.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function ie(T,S,D,R,B,te){let se=s.convert(D.format,D.colorSpace),z=s.convert(D.type),q=x(D.internalFormat,se,z,D.normalized,D.colorSpace),j=n.get(S),_e=n.get(D);if(_e.__renderTarget=S,!j.__hasExternalTextures){let fe=Math.max(1,S.width>>te),ce=Math.max(1,S.height>>te);B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?a.texImage3D(B,te,q,fe,ce,S.depth,0,se,z,null):a.texImage2D(B,te,q,fe,ce,0,se,z,null)}a.bindFramebuffer(t.FRAMEBUFFER,T),dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,R,B,_e.__webglTexture,0,lt(S)):(B===t.TEXTURE_2D||B>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,R,B,_e.__webglTexture,te),a.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(T,S,D){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){let R=S.depthTexture,B=R&&R.isDepthTexture?R.type:null,te=C(S.stencilBuffer,B),se=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,lt(S),te,S.width,S.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,lt(S),te,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,te,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,T)}else{let R=S.textures;for(let B=0;B<R.length;B++){let te=R[B],se=s.convert(te.format,te.colorSpace),z=s.convert(te.type),q=x(te.internalFormat,se,z,te.normalized,te.colorSpace);dt(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,lt(S),q,S.width,S.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,lt(S),q,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,q,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ee(T,S,D){let R=S.isWebGLCubeRenderTarget===!0;if(a.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let B=n.get(S.depthTexture);if(B.__renderTarget=S,(!B.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),R){if(B.__webglInit===void 0&&(B.__webglInit=!0,S.depthTexture.addEventListener("dispose",L)),B.__webglTexture===void 0){B.__webglTexture=t.createTexture(),a.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture),mt(t.TEXTURE_CUBE_MAP,S.depthTexture);let j=s.convert(S.depthTexture.format),_e=s.convert(S.depthTexture.type),fe;S.depthTexture.format===fi?fe=t.DEPTH_COMPONENT24:S.depthTexture.format===Ws&&(fe=t.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,S.width,S.height,0,j,_e,null)}}else ee(S.depthTexture,0);let te=B.__webglTexture,se=lt(S),z=R?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,q=S.depthTexture.format===Ws?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===fi)dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,z,te,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,q,z,te,0);else if(S.depthTexture.format===Ws)dt(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,z,te,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,q,z,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function He(T){let S=n.get(T),D=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let R=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),R){let B=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,R.removeEventListener("dispose",B)};R.addEventListener("dispose",B),S.__depthDisposeCallback=B}S.__boundDepthTexture=R}if(T.depthTexture&&!S.__autoAllocateDepthBuffer)if(D)for(let R=0;R<6;R++)Ee(S.__webglFramebuffer[R],T,R);else{let R=T.texture.mipmaps;R&&R.length>0?Ee(S.__webglFramebuffer[0],T,0):Ee(S.__webglFramebuffer,T,0)}else if(D){S.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(a.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[R]),S.__webglDepthbuffer[R]===void 0)S.__webglDepthbuffer[R]=t.createRenderbuffer(),Re(S.__webglDepthbuffer[R],T,!1);else{let B=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[R];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,B,t.RENDERBUFFER,te)}}else{let R=T.texture.mipmaps;if(R&&R.length>0?a.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):a.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Re(S.__webglDepthbuffer,T,!1);else{let B=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,B,t.RENDERBUFFER,te)}}a.bindFramebuffer(t.FRAMEBUFFER,null)}function be(T,S,D){let R=n.get(T);S!==void 0&&ie(R.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&He(T)}function he(T){let S=T.texture,D=n.get(T),R=n.get(S);T.addEventListener("dispose",y);let B=T.textures,te=T.isWebGLCubeRenderTarget===!0,se=B.length>1;if(se||(R.__webglTexture===void 0&&(R.__webglTexture=t.createTexture()),R.__version=S.version,r.memory.textures++),te){D.__webglFramebuffer=[];for(let z=0;z<6;z++)if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer[z]=[];for(let q=0;q<S.mipmaps.length;q++)D.__webglFramebuffer[z][q]=t.createFramebuffer()}else D.__webglFramebuffer[z]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){D.__webglFramebuffer=[];for(let z=0;z<S.mipmaps.length;z++)D.__webglFramebuffer[z]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(se)for(let z=0,q=B.length;z<q;z++){let j=n.get(B[z]);j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture(),r.memory.textures++)}if(T.samples>0&&dt(T)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],a.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let z=0;z<B.length;z++){let q=B[z];D.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[z]);let j=s.convert(q.format,q.colorSpace),_e=s.convert(q.type),fe=x(q.internalFormat,j,_e,q.normalized,q.colorSpace,T.isXRRenderTarget===!0),ce=lt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,fe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,D.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(D.__webglDepthRenderbuffer,T,!0)),a.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){a.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture),mt(t.TEXTURE_CUBE_MAP,S);for(let z=0;z<6;z++)if(S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)ie(D.__webglFramebuffer[z][q],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,q);else ie(D.__webglFramebuffer[z],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0);d(S)&&m(t.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(se){for(let z=0,q=B.length;z<q;z++){let j=B[z],_e=n.get(j),fe=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(fe=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(fe,_e.__webglTexture),mt(fe,j),ie(D.__webglFramebuffer,T,j,t.COLOR_ATTACHMENT0+z,fe,0),d(j)&&m(fe)}a.unbindTexture()}else{let z=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(z=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),a.bindTexture(z,R.__webglTexture),mt(z,S),S.mipmaps&&S.mipmaps.length>0)for(let q=0;q<S.mipmaps.length;q++)ie(D.__webglFramebuffer[q],T,S,t.COLOR_ATTACHMENT0,z,q);else ie(D.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,z,0);d(S)&&m(z),a.unbindTexture()}T.depthBuffer&&He(T)}function Be(T){let S=T.textures;for(let D=0,R=S.length;D<R;D++){let B=S[D];if(d(B)){let te=_(T),se=n.get(B).__webglTexture;a.bindTexture(te,se),m(te),a.unbindTexture()}}}let ke=[],gt=[];function Tt(T){if(T.samples>0){if(dt(T)===!1){let S=T.textures,D=T.width,R=T.height,B=t.COLOR_BUFFER_BIT,te=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=n.get(T),z=S.length>1;if(z)for(let j=0;j<S.length;j++)a.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,null),a.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.TEXTURE_2D,null,0);a.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer);let q=T.texture.mipmaps;q&&q.length>0?a.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer[0]):a.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let j=0;j<S.length;j++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(B|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(B|=t.STENCIL_BUFFER_BIT)),z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[j]);let _e=n.get(S[j]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,D,R,0,0,D,R,B,t.NEAREST),l===!0&&(ke.length=0,gt.length=0,ke.push(t.COLOR_ATTACHMENT0+j),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ke.push(te),gt.push(te),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,gt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ke))}if(a.bindFramebuffer(t.READ_FRAMEBUFFER,null),a.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let j=0;j<S.length;j++){a.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,se.__webglColorRenderbuffer[j]);let _e=n.get(S[j]).__webglTexture;a.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.TEXTURE_2D,_e,0)}a.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function lt(T){return Math.min(i.maxSamples,T.samples)}function dt(T){let S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(T){let S=r.render.frame;f.get(T)!==S&&(f.set(T,S),T.update())}function Zt(T,S){let D=T.colorSpace,R=T.format,B=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==hu&&D!==Qi&&(ct.getTransfer(D)===_t?(R!==kn||B!==nn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",D)),S}function Xe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.getTextureUnits=Y,this.setTextureUnits=H,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=xe,this.setTextureCube=Se,this.rebindTextures=be,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return a.buffers.depth.getReversed()}}function aR(t,e){function a(n,i=Qi){let s,r=ct.getTransfer(i);if(n===nn)return t.UNSIGNED_BYTE;if(n===Vf)return t.UNSIGNED_SHORT_4_4_4_4;if(n===qf)return t.UNSIGNED_SHORT_5_5_5_1;if(n===M0)return t.UNSIGNED_INT_5_9_9_9_REV;if(n===b0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(n===S0)return t.BYTE;if(n===_0)return t.SHORT;if(n===jo)return t.UNSIGNED_SHORT;if(n===Gf)return t.INT;if(n===Qn)return t.UNSIGNED_INT;if(n===jn)return t.FLOAT;if(n===mi)return t.HALF_FLOAT;if(n===T0)return t.ALPHA;if(n===E0)return t.RGB;if(n===kn)return t.RGBA;if(n===fi)return t.DEPTH_COMPONENT;if(n===Ws)return t.DEPTH_STENCIL;if(n===C0)return t.RED;if(n===Wf)return t.RED_INTEGER;if(n===Xs)return t.RG;if(n===Xf)return t.RG_INTEGER;if(n===Yf)return t.RGBA_INTEGER;if(n===Nu||n===Ou||n===Fu||n===zu)if(r===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Nu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Nu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ou)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zf||n===Kf||n===Jf||n===Qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jf||n===$f||n===eh||n===th||n===ah||n===Hu||n===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jf||n===$f)return r===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===th)return s.COMPRESSED_R11_EAC;if(n===ah)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Hu)return s.COMPRESSED_RG11_EAC;if(n===nh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ih||n===sh||n===rh||n===oh||n===lh||n===uh||n===ch||n===dh||n===fh||n===hh||n===ph||n===mh||n===gh||n===xh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ih)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ch)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ph)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yh||n===vh||n===Sh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yh)return r===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===Mh||n===ku||n===bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_h)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Mh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ku)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$o?t.UNSIGNED_INT_24_8:t[n]!==void 0?t[n]:null}return{convert:a}}var nR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Y0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){let n=new bu(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let a=e.cameras[0].viewport,n=new bn({vertexShader:nR,fragmentShader:iR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new de(new Cu(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Z0=class extends hi{constructor(e,a){super();let n=this,i=null,s=1,r=null,o="local-floor",l=1,u=null,f=null,p=null,c=null,h=null,v=null,M=typeof XRWebGLBinding<"u",g=new Y0,d={},m=a.getContextAttributes(),_=null,x=null,C=[],A=[],L=new Pe,y=null,E=new wa;E.viewport=new Yt;let I=new wa;I.viewport=new Yt;let P=[E,I],O=new Of,K=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let me=C[$];return me===void 0&&(me=new qo,C[$]=me),me.getTargetRaySpace()},this.getControllerGrip=function($){let me=C[$];return me===void 0&&(me=new qo,C[$]=me),me.getGripSpace()},this.getHand=function($){let me=C[$];return me===void 0&&(me=new qo,C[$]=me),me.getHandSpace()};function H($){let me=A.indexOf($.inputSource);if(me===-1)return;let le=C[me];le!==void 0&&(le.update($.inputSource,$.frame,u||r),le.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",k);for(let $=0;$<C.length;$++){let me=A[$];me!==null&&(A[$]=null,C[$].disconnect(me))}K=null,Y=null,g.reset();for(let $ in d)delete d[$];e.setRenderTarget(_),h=null,c=null,p=null,i=null,x=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return c!==null?c:h},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(i,a)),p},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await a.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(L),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,qe=null,Ze=null;m.depth&&(Ze=m.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,le=m.stencil?Ws:fi,qe=m.stencil?$o:Qn);let ie={colorFormat:a.RGBA8,depthFormat:Ze,scaleFactor:s};p=this.getBinding(),c=p.createProjectionLayer(ie),i.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),x=new Mn(c.textureWidth,c.textureHeight,{format:kn,type:nn,depthTexture:new Zi(c.textureWidth,c.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,a,le),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Mn(h.framebufferWidth,h.framebufferHeight,{format:kn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await i.requestReferenceSpace(o),mt.setContext(i),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k($){for(let me=0;me<$.removed.length;me++){let le=$.removed[me],qe=A.indexOf(le);qe>=0&&(A[qe]=null,C[qe].disconnect(le))}for(let me=0;me<$.added.length;me++){let le=$.added[me],qe=A.indexOf(le);if(qe===-1){for(let ie=0;ie<C.length;ie++)if(ie>=A.length){A.push(le),qe=ie;break}else if(A[ie]===null){A[ie]=le,qe=ie;break}if(qe===-1)break}let Ze=C[qe];Ze&&Ze.connect(le)}}let ee=new U,oe=new U;function xe($,me,le){ee.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(le.matrixWorld);let qe=ee.distanceTo(oe),Ze=me.projectionMatrix.elements,ie=le.projectionMatrix.elements,Re=Ze[14]/(Ze[10]-1),Ee=Ze[14]/(Ze[10]+1),He=(Ze[9]+1)/Ze[5],be=(Ze[9]-1)/Ze[5],he=(Ze[8]-1)/Ze[0],Be=(ie[8]+1)/ie[0],ke=Re*he,gt=Re*Be,Tt=qe/(-he+Be),lt=Tt*-he;if(me.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(lt),$.translateZ(Tt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ze[10]===-1)$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{let dt=Re+Tt,N=Ee+Tt,Zt=ke-lt,Xe=gt+(qe-lt),T=He*Ee/N*dt,S=be*Ee/N*dt;$.projectionMatrix.makePerspective(Zt,Xe,T,S,dt,N),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Se($,me){me===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(me.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let me=$.near,le=$.far;g.texture!==null&&(g.depthNear>0&&(me=g.depthNear),g.depthFar>0&&(le=g.depthFar)),O.near=I.near=E.near=me,O.far=I.far=E.far=le,(K!==O.near||Y!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),K=O.near,Y=O.far),O.layers.mask=$.layers.mask|6,E.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let qe=$.parent,Ze=O.cameras;Se(O,qe);for(let ie=0;ie<Ze.length;ie++)Se(Ze[ie],qe);Ze.length===2?xe(O,E,I):O.projectionMatrix.copy(E.projectionMatrix),Ce($,O,qe)};function Ce($,me,le){le===null?$.matrix.copy(me.matrixWorld):($.matrix.copy(le.matrixWorld),$.matrix.invert(),$.matrix.multiply(me.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(me.projectionMatrix),$.projectionMatrixInverse.copy(me.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=uf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(c===null&&h===null))return l},this.setFoveation=function($){l=$,c!==null&&(c.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function($){return d[$]};let pt=null;function qt($,me){if(f=me.getViewerPose(u||r),v=me,f!==null){let le=f.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let qe=!1;le.length!==O.cameras.length&&(O.cameras.length=0,qe=!0);for(let Ee=0;Ee<le.length;Ee++){let He=le[Ee],be=null;if(h!==null)be=h.getViewport(He);else{let Be=p.getViewSubImage(c,He);be=Be.viewport,Ee===0&&(e.setRenderTargetTextures(x,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(x))}let he=P[Ee];he===void 0&&(he=new wa,he.layers.enable(Ee),he.viewport=new Yt,P[Ee]=he),he.matrix.fromArray(He.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(He.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(be.x,be.y,be.width,be.height),Ee===0&&(O.matrix.copy(he.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),qe===!0&&O.cameras.push(he)}let Ze=i.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){p=n.getBinding();let Ee=p.getDepthInformation(le[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(Ee,i.renderState)}if(Ze&&Ze.includes("camera-access")&&M){e.state.unbindTexture(),p=n.getBinding();for(let Ee=0;Ee<le.length;Ee++){let He=le[Ee].camera;if(He){let be=d[He];be||(be=new bu,d[He]=be);let he=p.getCameraImage(He);be.sourceTexture=he}}}}for(let le=0;le<C.length;le++){let qe=A[le],Ze=C[le];qe!==null&&Ze!==void 0&&Ze.update(qe,me,u||r)}pt&&pt($,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),v=null}let mt=new _b;mt.setAnimationLoop(qt),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}},sR=new kt,Ab=new Ye;Ab.set(-1,0,0,0,1,0,0,0,1);function rR(t,e){function a(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,I0(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,m,_,x){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),c(g,d),d.isMeshPhysicalMaterial&&h(g,d,x)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),M(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(r(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,_):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,a(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,a(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,a(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Xa&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,a(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Xa&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,a(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,a(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,a(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=e.get(d),_=m.envMap,x=m.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(x)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ab),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,a(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,a(d.aoMap,g.aoMapTransform))}function r(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,a(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=_*.5,d.map&&(g.map.value=d.map,a(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,a(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,a(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,a(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function c(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,a(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,a(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function h(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,a(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,a(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,a(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,a(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,a(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xa&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,a(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,a(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,a(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,a(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,a(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,a(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,a(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function M(g,d){let m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oR(t,e,a,n){let i={},s={},r=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,C){let A=C.program;n.uniformBlockBinding(x,A)}function u(x,C){let A=i[x.id];A===void 0&&(g(x),A=f(x),i[x.id]=A,x.addEventListener("dispose",m));let L=C.program;n.updateUBOMapping(x,L);let y=e.render.frame;s[x.id]!==y&&(c(x),s[x.id]=y)}function f(x){let C=p();x.__bindingPointIndex=C;let A=t.createBuffer(),L=x.__size,y=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,L,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,A),A}function p(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){let C=i[x.id],A=x.uniforms,L=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let y=0,E=A.length;y<E;y++){let I=A[y];if(Array.isArray(I))for(let P=0,O=I.length;P<O;P++)h(I[P],y,P,L);else h(I,y,0,L)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,C,A,L){if(M(x,C,A,L)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let I=0;for(let P=0;P<E.length;P++){let O=E[P],K=d(O);v(O,x.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(E,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,x.__data)}}function v(x,C,A){typeof x=="number"||typeof x=="boolean"?C[0]=x:x.isMatrix3?(C[0]=x.elements[0],C[1]=x.elements[1],C[2]=x.elements[2],C[3]=0,C[4]=x.elements[3],C[5]=x.elements[4],C[6]=x.elements[5],C[7]=0,C[8]=x.elements[6],C[9]=x.elements[7],C[10]=x.elements[8],C[11]=0):ArrayBuffer.isView(x)?C.set(new x.constructor(x.buffer,x.byteOffset,C.length)):x.toArray(C,A)}function M(x,C,A,L){let y=x.value,E=C+"_"+A;if(L[E]===void 0)return typeof y=="number"||typeof y=="boolean"?L[E]=y:ArrayBuffer.isView(y)?L[E]=y.slice():L[E]=y.clone(),!0;{let I=L[E];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return L[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(x){let C=x.uniforms,A=0,L=16;for(let E=0,I=C.length;E<I;E++){let P=Array.isArray(C[E])?C[E]:[C[E]];for(let O=0,K=P.length;O<K;O++){let Y=P[O],H=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,k=H.length;Z<k;Z++){let ee=H[Z],oe=d(ee),xe=A%L,Se=xe%oe.boundary,Ce=xe+Se;A+=Se,Ce!==0&&L-Ce<oe.storage&&(A+=L-Ce),Y.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=oe.storage}}}let y=A%L;return y>0&&(A+=L-y),x.__size=A,x.__cache={},this}function d(x){let C={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(C.boundary=4,C.storage=4):x.isVector2?(C.boundary=8,C.storage=8):x.isVector3||x.isColor?(C.boundary=16,C.storage=12):x.isVector4?(C.boundary=16,C.storage=16):x.isMatrix3?(C.boundary=48,C.storage=48):x.isMatrix4?(C.boundary=64,C.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(C.boundary=16,C.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),C}function m(x){let C=x.target;C.removeEventListener("dispose",m);let A=r.indexOf(C.__bindingPointIndex);r.splice(A,1),t.deleteBuffer(i[C.id]),delete i[C.id],delete s[C.id]}function _(){for(let x in i)t.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:l,update:u,dispose:_}}var lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function uR(){return gi===null&&(gi=new hf(lR,16,16,Xs,mi),gi.name="DFG_LUT",gi.minFilter=Ia,gi.magFilter=Ia,gi.wrapS=di,gi.wrapT=di,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var Rh=class{constructor(e={}){let{canvas:a=XM(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:c=!1,outputBufferType:h=nn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=r;let M=h,g=new Set([Yf,Xf,Wf]),d=new Set([nn,Qn,jo,$o,Vf,qf]),m=new Uint32Array(4),_=new Int32Array(4),x=new U,C=null,A=null,L=[],y=[],E=null;this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,O=null,K=null,Y=null,H=null;this._outputColorSpace=vn;let Z=0,k=0,ee=null,oe=-1,xe=null,Se=new Yt,Ce=new Yt,pt=null,qt=new Ue(0),mt=0,$=a.width,me=a.height,le=1,qe=null,Ze=null,ie=new Yt(0,0,$,me),Re=new Yt(0,0,$,me),Ee=!1,He=new Xo,be=!1,he=!1,Be=new kt,ke=new U,gt=new Yt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function dt(){return ee===null?le:1}let N=n;function Zt(b,F){return a.getContext(b,F)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${"185"}`),a.addEventListener("webglcontextlost",Ie,!1),a.addEventListener("webglcontextrestored",Ke,!1),a.addEventListener("webglcontextcreationerror",ga,!1),N===null){let F="webgl2";if(N=Zt(F,b),N===null)throw Zt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Ve("WebGLRenderer: "+b.message),b}let Xe,T,S,D,R,B,te,se,z,q,j,_e,fe,ce,Ae,Oe,ze,w,Q,X,ae,re,J;function pe(){Xe=new gw(N),Xe.init(),ae=new aR(N,Xe),T=new lw(N,Xe,e,ae),S=new eR(N,Xe),T.reversedDepthBuffer&&c&&S.buffers.depth.setReversed(!0),K=N.createFramebuffer(),Y=N.createFramebuffer(),H=N.createFramebuffer(),D=new vw(N),R=new HI,B=new tR(N,Xe,S,R,T,ae,D),te=new mw(I),se=new bC(N),re=new rw(N,se),z=new xw(N,se,D,re),q=new _w(N,z,se,re,D),w=new Sw(N,T,B),Ae=new uw(R),j=new zI(I,te,Xe,T,re,Ae),_e=new rR(I,R),fe=new GI,ce=new ZI(Xe),ze=new sw(I,te,S,q,v,l),Oe=new $I(I,q,T),J=new oR(N,D,T,S),Q=new ow(N,Xe,D),X=new yw(N,Xe,D),D.programs=j.programs,I.capabilities=T,I.extensions=Xe,I.properties=R,I.renderLists=fe,I.shadowMap=Oe,I.state=S,I.info=D}pe(),M!==nn&&(E=new bw(M,a.width,a.height,o,i,s));let ue=new Z0(I,N);this.xr=ue,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=Xe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Xe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(b){b!==void 0&&(le=b,this.setSize($,me,!1))},this.getSize=function(b){return b.set($,me)},this.setSize=function(b,F,W=!0){if(ue.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,me=F,a.width=Math.floor(b*le),a.height=Math.floor(F*le),W===!0&&(a.style.width=b+"px",a.style.height=F+"px"),E!==null&&E.setSize(a.width,a.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set($*le,me*le).floor()},this.setDrawingBufferSize=function(b,F,W){$=b,me=F,le=W,a.width=Math.floor(b*W),a.height=Math.floor(F*W),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(M===nn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Se)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,F,W,G){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,F,W,G),S.viewport(Se.copy(ie).multiplyScalar(le).round())},this.getScissor=function(b){return b.copy(Re)},this.setScissor=function(b,F,W,G){b.isVector4?Re.set(b.x,b.y,b.z,b.w):Re.set(b,F,W,G),S.scissor(Ce.copy(Re).multiplyScalar(le).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(b){S.setScissorTest(Ee=b)},this.setOpaqueSort=function(b){qe=b},this.setTransparentSort=function(b){Ze=b},this.getClearColor=function(b){return b.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,W=!0){let G=0;if(b){let V=!1;if(ee!==null){let ge=ee.texture.format;V=g.has(ge)}if(V){let ge=ee.texture.type,Me=d.has(ge),ye=ze.getClearColor(),we=ze.getClearAlpha(),De=ye.r,Je=ye.g,it=ye.b;Me?(m[0]=De,m[1]=Je,m[2]=it,m[3]=we,N.clearBufferuiv(N.COLOR,0,m)):(_[0]=De,_[1]=Je,_[2]=it,_[3]=we,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}F&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){a.removeEventListener("webglcontextlost",Ie,!1),a.removeEventListener("webglcontextrestored",Ke,!1),a.removeEventListener("webglcontextcreationerror",ga,!1),ze.dispose(),fe.dispose(),ce.dispose(),R.dispose(),te.dispose(),q.dispose(),re.dispose(),J.dispose(),j.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",tt),ue.removeEventListener("sessionend",at),Bt.stop()};function Ie(b){b.preventDefault(),L0("WebGLRenderer: Context Lost."),P=!0}function Ke(){L0("WebGLRenderer: Context Restored."),P=!1;let b=D.autoReset,F=Oe.enabled,W=Oe.autoUpdate,G=Oe.needsUpdate,V=Oe.type;pe(),D.autoReset=b,Oe.enabled=F,Oe.autoUpdate=W,Oe.needsUpdate=G,Oe.type=V}function ga(b){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ba(b){let F=b.target;F.removeEventListener("dispose",ba),Kt(F)}function Kt(b){da(b),R.remove(b)}function da(b){let F=R.get(b).programs;F!==void 0&&(F.forEach(function(W){j.releaseProgram(W)}),b.isShaderMaterial&&j.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,W,G,V,ge){F===null&&(F=Tt);let Me=V.isMesh&&V.matrixWorld.determinantAffine()<0,ye=ft(b,F,W,G,V);S.setMaterial(G,Me);let we=W.index,De=1;if(G.wireframe===!0){if(we=z.getWireframeAttribute(W),we===void 0)return;De=2}let Je=W.drawRange,it=W.attributes.position,Fe=Je.start*De,Et=(Je.start+Je.count)*De;ge!==null&&(Fe=Math.max(Fe,ge.start*De),Et=Math.min(Et,(ge.start+ge.count)*De)),we!==null?(Fe=Math.max(Fe,0),Et=Math.min(Et,we.count)):it!=null&&(Fe=Math.max(Fe,0),Et=Math.min(Et,it.count));let ta=Et-Fe;if(ta<0||ta===1/0)return;re.setup(V,G,ye,W,we);let Qt,Lt=Q;if(we!==null&&(Qt=se.get(we),Lt=X,Lt.setIndex(Qt)),V.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*dt()),Lt.setMode(N.LINES)):Lt.setMode(N.TRIANGLES);else if(V.isLine){let Da=G.linewidth;Da===void 0&&(Da=1),S.setLineWidth(Da*dt()),V.isLineSegments?Lt.setMode(N.LINES):V.isLineLoop?Lt.setMode(N.LINE_LOOP):Lt.setMode(N.LINE_STRIP)}else V.isPoints?Lt.setMode(N.POINTS):V.isSprite&&Lt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))Lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Da=V._multiDrawStarts,Te=V._multiDrawCounts,rn=V._multiDrawCount,xt=we?se.get(we).bytesPerElement:1,An=R.get(G).currentProgram.getUniforms();for(let ei=0;ei<rn;ei++)An.setValue(N,"_gl_DrawID",ei),Lt.render(Da[ei]/xt,Te[ei])}else if(V.isInstancedMesh)Lt.renderInstances(Fe,ta,V.count);else if(W.isInstancedBufferGeometry){let Da=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,Da);Lt.renderInstances(Fe,ta,Te)}else Lt.render(Fe,ta)};function Ya(b,F,W){b.transparent===!0&&b.side===Na&&b.forceSinglePass===!1?(b.side=Xa,b.needsUpdate=!0,$n(b,F,W),b.side=Xi,b.needsUpdate=!0,$n(b,F,W),b.side=Na):$n(b,F,W)}this.compile=function(b,F,W=null){W===null&&(W=b),A=ce.get(W),A.init(F),y.push(A),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),b!==W&&b.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();let G=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ge=V.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let ye=ge[Me];Ya(ye,W,V),G.add(ye)}else Ya(ge,W,V),G.add(ge)}),A=y.pop(),G},this.compileAsync=function(b,F,W=null){let G=this.compile(b,F,W);return new Promise(V=>{function ge(){if(G.forEach(function(Me){R.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){V(b);return}setTimeout(ge,10)}Xe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Le=null;function $e(b){Le&&Le(b)}function tt(){Bt.stop()}function at(){Bt.start()}let Bt=new _b;Bt.setAnimationLoop($e),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(b){Le=b,ue.setAnimationLoop(b),b===null?Bt.stop():Bt.start()},ue.addEventListener("sessionstart",tt),ue.addEventListener("sessionend",at),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(b,F);let W=ue.enabled===!0&&ue.isPresenting===!0,G=E!==null&&(ee===null||W)&&E.begin(I,ee);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(I,b,F,ee),A=ce.get(b,y.length),A.init(F),A.state.textureUnits=B.getTextureUnits(),y.push(A),Be.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),He.setFromProjectionMatrix(Be,Kn,F.reversedDepth),he=this.localClippingEnabled,be=Ae.init(this.clippingPlanes,he),C=fe.get(b,L.length),C.init(),L.push(C),ue.enabled===!0&&ue.isPresenting===!0){let Me=I.xr.getDepthSensingMesh();Me!==null&&Cn(Me,F,-1/0,I.sortObjects)}Cn(b,F,0,I.sortObjects),C.finish(),I.sortObjects===!0&&C.sort(qe,Ze,F.reversedDepth),lt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,lt&&ze.addToRenderList(C,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),be===!0&&Ae.beginShadows();let V=A.state.shadowsArray;if(Oe.render(V,b,F),be===!0&&Ae.endShadows(),(G&&E.hasRenderPass())===!1){let Me=C.opaque,ye=C.transmissive;if(A.setupLights(),F.isArrayCamera){let we=F.cameras;if(ye.length>0)for(let De=0,Je=we.length;De<Je;De++){let it=we[De];ea(Me,ye,b,it)}lt&&ze.render(b);for(let De=0,Je=we.length;De<Je;De++){let it=we[De];Jt(C,b,it,it.viewport)}}else ye.length>0&&ea(Me,ye,b,F),lt&&ze.render(b),Jt(C,b,F)}ee!==null&&k===0&&(B.updateMultisampleRenderTarget(ee),B.updateRenderTargetMipmap(ee)),G&&E.end(I),b.isScene===!0&&b.onAfterRender(I,b,F),re.resetDefaultState(),oe=-1,xe=null,y.pop(),y.length>0?(A=y[y.length-1],B.setTextureUnits(A.state.textureUnits),be===!0&&Ae.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,L.pop(),L.length>0?C=L[L.length-1]:C=null,O!==null&&O.renderEnd()};function Cn(b,F,W,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||He.intersectsSprite(b)){G&&gt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Be);let Me=q.update(b),ye=b.material;ye.visible&&C.push(b,Me,ye,W,gt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||He.intersectsObject(b))){let Me=q.update(b),ye=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),gt.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),gt.copy(Me.boundingSphere.center)),gt.applyMatrix4(b.matrixWorld).applyMatrix4(Be)),Array.isArray(ye)){let we=Me.groups;for(let De=0,Je=we.length;De<Je;De++){let it=we[De],Fe=ye[it.materialIndex];Fe&&Fe.visible&&C.push(b,Me,Fe,W,gt.z,it)}}else ye.visible&&C.push(b,Me,ye,W,gt.z,null)}}let ge=b.children;for(let Me=0,ye=ge.length;Me<ye;Me++)Cn(ge[Me],F,W,G)}function Jt(b,F,W,G){let{opaque:V,transmissive:ge,transparent:Me}=b;A.setupLightsView(W),be===!0&&Ae.setGlobalState(I.clippingPlanes,W),G&&S.viewport(Se.copy(G)),V.length>0&&Gn(V,F,W),ge.length>0&&Gn(ge,F,W),Me.length>0&&Gn(Me,F,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ea(b,F,W,G){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[G.id]===void 0){let Fe=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[G.id]=new Mn(1,1,{generateMipmaps:!0,type:Fe?mi:nn,minFilter:qs,samples:Math.max(4,T.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let ge=A.state.transmissionRenderTarget[G.id],Me=G.viewport||Se;ge.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);let ye=I.getRenderTarget(),we=I.getActiveCubeFace(),De=I.getActiveMipmapLevel();I.setRenderTarget(ge),I.getClearColor(qt),mt=I.getClearAlpha(),mt<1&&I.setClearColor(16777215,.5),I.clear(),lt&&ze.render(W);let Je=I.toneMapping;I.toneMapping=Jn;let it=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),A.setupLightsView(G),be===!0&&Ae.setGlobalState(I.clippingPlanes,G),Gn(b,W,G),B.updateMultisampleRenderTarget(ge),B.updateRenderTargetMipmap(ge),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Et=0,ta=F.length;Et<ta;Et++){let Qt=F[Et],{object:Lt,geometry:Da,material:Te,group:rn}=Qt;if(Te.side===Na&&Lt.layers.test(G.layers)){let xt=Te.side;Te.side=Xa,Te.needsUpdate=!0,Rr(Lt,W,G,Da,Te,rn),Te.side=xt,Te.needsUpdate=!0,Fe=!0}}Fe===!0&&(B.updateMultisampleRenderTarget(ge),B.updateRenderTargetMipmap(ge))}I.setRenderTarget(ye,we,De),I.setClearColor(qt,mt),it!==void 0&&(G.viewport=it),I.toneMapping=Je}function Gn(b,F,W){let G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,ge=b.length;V<ge;V++){let Me=b[V],{object:ye,geometry:we,group:De}=Me,Je=Me.material;Je.allowOverride===!0&&G!==null&&(Je=G),ye.layers.test(W.layers)&&Rr(ye,F,W,we,Je,De)}}function Rr(b,F,W,G,V,ge){b.onBeforeRender(I,F,W,G,V,ge),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(I,F,W,G,b,ge),V.transparent===!0&&V.side===Na&&V.forceSinglePass===!1?(V.side=Xa,V.needsUpdate=!0,I.renderBufferDirect(W,F,G,V,b,ge),V.side=Xi,V.needsUpdate=!0,I.renderBufferDirect(W,F,G,V,b,ge),V.side=Na):I.renderBufferDirect(W,F,G,V,b,ge),b.onAfterRender(I,F,W,G,V,ge)}function $n(b,F,W){F.isScene!==!0&&(F=Tt);let G=R.get(b),V=A.state.lights,ge=A.state.shadowsArray,Me=V.state.version,ye=j.getParameters(b,V.state,ge,F,W,A.state.lightProbeGridArray),we=j.getProgramCacheKey(ye),De=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=te.get(b.envMap||G.environment,Je),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",ba),De=new Map,G.programs=De);let it=De.get(we);if(it!==void 0){if(G.currentProgram===it&&G.lightsStateVersion===Me)return Js(b,ye),it}else ye.uniforms=j.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,W,ye),b.onBeforeCompile(ye,I),it=j.acquireProgram(ye,we),De.set(we,it),G.uniforms=ye.uniforms;let Fe=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Fe.clippingPlanes=Ae.uniform),Js(b,ye),G.needsLights=Fa(b),G.lightsStateVersion=Me,G.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=A.state.lightProbeGridArray.length>0,G.currentProgram=it,G.uniformsList=null,it}function yi(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=tl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Js(b,F){let W=R.get(b);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function nl(b,F){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let W=0,G=b.length;W<G;W++){let V=b[W];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function ft(b,F,W,G,V){F.isScene!==!0&&(F=Tt),B.resetTextureUnits();let ge=F.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,ye=ee===null?I.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ct.workingColorSpace,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=te.get(G.envMap||Me,we),Je=G.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,it=!!W.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!W.morphAttributes.position,Et=!!W.morphAttributes.normal,ta=!!W.morphAttributes.color,Qt=Jn;G.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Qt=I.toneMapping);let Lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Da=Lt!==void 0?Lt.length:0,Te=R.get(G),rn=A.state.lights;if(be===!0&&(he===!0||b!==xe)){let Pt=b===xe&&G.id===oe;Ae.setState(G,b,Pt)}let xt=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==rn.state.version||Te.outputColorSpace!==ye||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==De||G.fog===!0&&Te.fog!==ge||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ae.numPlanes||Te.numIntersection!==Ae.numIntersection)||Te.vertexAlphas!==Je||Te.vertexTangents!==it||Te.morphTargets!==Fe||Te.morphNormals!==Et||Te.morphColors!==ta||Te.toneMapping!==Qt||Te.morphTargetsCount!==Da||!!Te.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Te.__version=G.version);let An=Te.currentProgram;xt===!0&&(An=$n(G,F,V),O&&G.isNodeMaterial&&O.onUpdateProgram(G,An,Te));let ei=!1,ji=!1,Dr=!1,wt=An.getUniforms(),aa=Te.uniforms;if(S.useProgram(An.program)&&(ei=!0,ji=!0,Dr=!0),G.id!==oe&&(oe=G.id,ji=!0),Te.needsLights){let Pt=nl(A.state.lightProbeGridArray,V);Te.lightProbeGrid!==Pt&&(Te.lightProbeGrid=Pt,ji=!0)}if(ei||xe!==b){S.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),wt.setValue(N,"projectionMatrix",b.projectionMatrix),wt.setValue(N,"viewMatrix",b.matrixWorldInverse);let es=wt.map.cameraPosition;es!==void 0&&es.setValue(N,ke.setFromMatrixPosition(b.matrixWorld)),T.logarithmicDepthBuffer&&wt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&wt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),xe!==b&&(xe=b,ji=!0,Dr=!0)}if(Te.needsLights&&(rn.state.directionalShadowMap.length>0&&wt.setValue(N,"directionalShadowMap",rn.state.directionalShadowMap,B),rn.state.spotShadowMap.length>0&&wt.setValue(N,"spotShadowMap",rn.state.spotShadowMap,B),rn.state.pointShadowMap.length>0&&wt.setValue(N,"pointShadowMap",rn.state.pointShadowMap,B)),V.isSkinnedMesh){wt.setOptional(N,V,"bindMatrix"),wt.setOptional(N,V,"bindMatrixInverse");let Pt=V.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),wt.setValue(N,"boneTexture",Pt.boneTexture,B))}V.isBatchedMesh&&(wt.setOptional(N,V,"batchingTexture"),wt.setValue(N,"batchingTexture",V._matricesTexture,B),wt.setOptional(N,V,"batchingIdTexture"),wt.setValue(N,"batchingIdTexture",V._indirectTexture,B),wt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&wt.setValue(N,"batchingColorTexture",V._colorsTexture,B));let $i=W.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&w.update(V,W,An),(ji||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,wt.setValue(N,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(aa.envMapIntensity.value=F.environmentIntensity),aa.dfgLUT!==void 0&&(aa.dfgLUT.value=uR()),ji){if(wt.setValue(N,"toneMappingExposure",I.toneMappingExposure),Te.needsLights&&sa(aa,Dr),ge&&G.fog===!0&&_e.refreshFogUniforms(aa,ge),_e.refreshMaterialUniforms(aa,G,le,me,A.state.transmissionRenderTarget[b.id]),Te.needsLights&&Te.lightProbeGrid){let Pt=Te.lightProbeGrid;aa.probesSH.value=Pt.texture,aa.probesMin.value.copy(Pt.boundingBox.min),aa.probesMax.value.copy(Pt.boundingBox.max),aa.probesResolution.value.copy(Pt.resolution)}tl.upload(N,yi(Te),aa,B)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(tl.upload(N,yi(Te),aa,B),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&wt.setValue(N,"center",V.center),wt.setValue(N,"modelViewMatrix",V.modelViewMatrix),wt.setValue(N,"normalMatrix",V.normalMatrix),wt.setValue(N,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let Pt=G.uniformsGroups;for(let es=0,Pr=Pt.length;es<Pr;es++){let j0=Pt[es];J.update(j0,An),J.bind(j0,An)}}return An}function sa(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Fa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(b,F,W){let G=R.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),R.get(b.texture).__webglTexture=F,R.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:W,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let W=R.get(b);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,W=0){ee=b,Z=F,k=W;let G=null,V=!1,ge=!1;if(b){let ye=R.get(b);if(ye.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),Se.copy(b.viewport),Ce.copy(b.scissor),pt=b.scissorTest,S.viewport(Se),S.scissor(Ce),S.setScissorTest(pt),oe=-1;return}else if(ye.__webglFramebuffer===void 0)B.setupRenderTarget(b);else if(ye.__hasExternalTextures)B.rebindTextures(b,R.get(b.texture).__webglTexture,R.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Je=b.depthTexture;if(ye.__boundDepthTexture!==Je){if(Je!==null&&R.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(b)}}let we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ge=!0);let De=R.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[F])?G=De[F][W]:G=De[F],V=!0):b.samples>0&&B.useMultisampledRTT(b)===!1?G=R.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[W]:G=De,Se.copy(b.viewport),Ce.copy(b.scissor),pt=b.scissorTest}else Se.copy(ie).multiplyScalar(le).floor(),Ce.copy(Re).multiplyScalar(le).floor(),pt=Ee;if(W!==0&&(G=K),S.bindFramebuffer(N.FRAMEBUFFER,G)&&S.drawBuffers(b,G),S.viewport(Se),S.scissor(Ce),S.setScissorTest(pt),V){let ye=R.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,W)}else if(ge){let ye=F;for(let we=0;we<b.textures.length;we++){let De=R.get(b.textures[we]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+we,De.__webglTexture,W,ye)}}else if(b!==null&&W!==0){let ye=R.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,W)}oe=-1},this.readRenderTargetPixels=function(b,F,W,G,V,ge,Me,ye=0){if(!(b&&b.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=R.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){S.bindFramebuffer(N.FRAMEBUFFER,we);try{let De=b.textures[ye],Je=De.format,it=De.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye),!T.textureFormatReadable(Je)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!T.textureTypeReadable(it)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&W>=0&&W<=b.height-V&&N.readPixels(F,W,G,V,ae.convert(Je),ae.convert(it),ge)}finally{let De=ee!==null?R.get(ee).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,F,W,G,V,ge,Me,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=R.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(F>=0&&F<=b.width-G&&W>=0&&W<=b.height-V){S.bindFramebuffer(N.FRAMEBUFFER,we);let De=b.textures[ye],Je=De.format,it=De.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye),!T.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!T.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Fe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(F,W,G,V,ae.convert(Je),ae.convert(it),0);let Et=ee!==null?R.get(ee).__webglFramebuffer:null;S.bindFramebuffer(N.FRAMEBUFFER,Et);let ta=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ZM(N,ta,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Fe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(Fe),N.deleteSync(ta),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,W=0){let G=Math.pow(2,-W),V=Math.floor(b.image.width*G),ge=Math.floor(b.image.height*G),Me=F!==null?F.x:0,ye=F!==null?F.y:0;B.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Me,ye,V,ge),S.unbindTexture()},this.copyTextureToTexture=function(b,F,W=null,G=null,V=0,ge=0){let Me,ye,we,De,Je,it,Fe,Et,ta,Qt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(W!==null)Me=W.max.x-W.min.x,ye=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,Je=W.min.y,it=W.isBox3?W.min.z:0;else{let aa=Math.pow(2,-V);Me=Math.floor(Qt.width*aa),ye=Math.floor(Qt.height*aa),b.isDataArrayTexture?we=Qt.depth:b.isData3DTexture?we=Math.floor(Qt.depth*aa):we=1,De=0,Je=0,it=0}G!==null?(Fe=G.x,Et=G.y,ta=G.z):(Fe=0,Et=0,ta=0);let Lt=ae.convert(F.format),Da=ae.convert(F.type),Te;F.isData3DTexture?(B.setTexture3D(F,0),Te=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(B.setTexture2DArray(F,0),Te=N.TEXTURE_2D_ARRAY):(B.setTexture2D(F,0),Te=N.TEXTURE_2D),S.activeTexture(N.TEXTURE0),S.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);let rn=S.getParameter(N.UNPACK_ROW_LENGTH),xt=S.getParameter(N.UNPACK_IMAGE_HEIGHT),An=S.getParameter(N.UNPACK_SKIP_PIXELS),ei=S.getParameter(N.UNPACK_SKIP_ROWS),ji=S.getParameter(N.UNPACK_SKIP_IMAGES);S.pixelStorei(N.UNPACK_ROW_LENGTH,Qt.width),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Qt.height),S.pixelStorei(N.UNPACK_SKIP_PIXELS,De),S.pixelStorei(N.UNPACK_SKIP_ROWS,Je),S.pixelStorei(N.UNPACK_SKIP_IMAGES,it);let Dr=b.isDataArrayTexture||b.isData3DTexture,wt=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let aa=R.get(b),$i=R.get(F),Pt=R.get(aa.__renderTarget),es=R.get($i.__renderTarget);S.bindFramebuffer(N.READ_FRAMEBUFFER,Pt.__webglFramebuffer),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let Pr=0;Pr<we;Pr++)Dr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,R.get(b).__webglTexture,V,it+Pr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,R.get(F).__webglTexture,ge,ta+Pr)),N.blitFramebuffer(De,Je,Me,ye,Fe,Et,Me,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||R.has(b)){let aa=R.get(b),$i=R.get(F);S.bindFramebuffer(N.READ_FRAMEBUFFER,Y),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let Pt=0;Pt<we;Pt++)Dr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,aa.__webglTexture,V,it+Pt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,aa.__webglTexture,V),wt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$i.__webglTexture,ge,ta+Pt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$i.__webglTexture,ge),V!==0?N.blitFramebuffer(De,Je,Me,ye,Fe,Et,Me,ye,N.COLOR_BUFFER_BIT,N.NEAREST):wt?N.copyTexSubImage3D(Te,ge,Fe,Et,ta+Pt,De,Je,Me,ye):N.copyTexSubImage2D(Te,ge,Fe,Et,De,Je,Me,ye);S.bindFramebuffer(N.READ_FRAMEBUFFER,null),S.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else wt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Te,ge,Fe,Et,ta,Me,ye,we,Lt,Da,Qt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,ge,Fe,Et,ta,Me,ye,we,Lt,Qt.data):N.texSubImage3D(Te,ge,Fe,Et,ta,Me,ye,we,Lt,Da,Qt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Fe,Et,Me,ye,Lt,Da,Qt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Fe,Et,Qt.width,Qt.height,Lt,Qt.data):N.texSubImage2D(N.TEXTURE_2D,ge,Fe,Et,Me,ye,Lt,Da,Qt);S.pixelStorei(N.UNPACK_ROW_LENGTH,rn),S.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt),S.pixelStorei(N.UNPACK_SKIP_PIXELS,An),S.pixelStorei(N.UNPACK_SKIP_ROWS,ei),S.pixelStorei(N.UNPACK_SKIP_IMAGES,ji),ge===0&&F.generateMipmaps&&N.generateMipmap(Te),S.unbindTexture()},this.initRenderTarget=function(b){R.get(b).__webglFramebuffer===void 0&&B.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?B.setTextureCube(b,0):b.isData3DTexture?B.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?B.setTexture2DArray(b,0):B.setTexture2D(b,0),S.unbindTexture()},this.resetState=function(){Z=0,k=0,ee=null,S.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let a=this.getContext();a.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),a.unpackColorSpace=ct._getUnpackColorSpace()}};function Uh(t,e){let a=t.dropoutProbability,n=e.mealProgramBoost/100*.22*(t.householdPovertyIndex/10),i=Math.min(1,t.distanceKm/5),s=e.transportSubsidy/100*.26*i,r=e.psychosocialMentoring/100*.19*((100-t.attendanceRate)/100),o=Math.max(0,(14-t.gpa)/14),l=e.remedialClasses/100*.18*o,u=Math.min(1,t.workBurdenHoursWeekly/20),f=e.familyCashTransfer/100*.24*u,p=t.digitalAccess?e.connectivityAid/100*.04:e.connectivityAid/100*.12,c=Math.min(.68,n+s+r+l+f+p),h=Math.max(.04,Number((a-c).toFixed(3))),v=Number(((a-h)/a*100).toFixed(1)),M="low";h>=.65?M="high":h>=.35?M="medium":M="low";let g=t.shapFactors.map(d=>{let m=d.contribution;return d.featureKey==="householdPovertyIndex"&&e.familyCashTransfer>0&&(m-=e.familyCashTransfer/100*.08),d.featureKey==="distanceKm"&&e.transportSubsidy>0&&(m-=e.transportSubsidy/100*.12),d.featureKey==="attendanceRate"&&(e.mealProgramBoost>0||e.psychosocialMentoring>0)&&(m-=(e.mealProgramBoost+e.psychosocialMentoring)/200*.1),d.featureKey==="gpa"&&e.remedialClasses>0&&(m-=e.remedialClasses/100*.07),{...d,contribution:Number(m.toFixed(3))}});return{simulatedProbability:h,simulatedTier:M,riskReduction:v,updatedShap:g}}function K0(t,e,a){let n=e.filter(f=>f.schoolId===t.id);if(n.length===0)return{simulatedRiskScore:t.dropoutRiskScore,simulatedAttendance:t.attendanceAvg,buildingColor:t.buildingColor};let i=0;n.forEach(f=>{let{simulatedProbability:p}=Uh(f,a);i+=p});let s=i/n.length,r=Math.round(s*100),o=a.mealProgramBoost*.08+a.transportSubsidy*.07+a.psychosocialMentoring*.05,l=Math.min(96,Number((t.attendanceAvg+o).toFixed(1))),u="#10b981";return r>=70?u="#ef4444":r>=45&&(u="#f59e0b"),{simulatedRiskScore:r,simulatedAttendance:l,buildingColor:u}}var Lb={es:{appTitle:"EduTwin AI",appSubtitle:"Gemelos Digitales para la Predicci\xF3n y Prevenci\xF3n de Deserci\xF3n Escolar",tagline:"Inteligencia Predictiva y Simulaci\xF3n 3D en Zonas Vulnerables",roles:{admin:"Administrador Ministerial",director:"Director de Plantel",counselor:"Docente / Tutor de Apoyo",researcher:"Investigador / ONG"},nav:{twin3d:"Gemelo Digital 3D",analytics:"Anal\xEDtica Predictiva & SHAP",simulator:"Simulador de Impacto",reports:"Centro de Reportes",ethics:"\xC9tica & Auditor\xEDa de Sesgo",architecture:"Arquitectura & Docs",alerts:"Alertas Tempranas"},twinLevels:{macro:"Macro: Regi\xF3n Geogr\xE1fica",meso:"Meso: Plantel Educativo",micro:"Micro: Estudiante & Huella 3D",backToMacro:"Volver a Vista Regional (Macro)",backToMeso:"Volver a Vista Plantel (Meso)",switchView:"Nivel de Observaci\xF3n",controlsHint:"Rotar: Clic Izquierdo | Mover: Clic Derecho | Zoom: Rueda del Rat\xF3n"},metrics:{totalMonitored:"Estudiantes Monitoreados",highRiskRate:"Tasa de Riesgo Cr\xEDtico",activeAlerts:"Alertas Tempranas Activas",simulatedRescue:"Estudiantes Rescatables (Simulaci\xF3n)",fairnessIndex:"\xCDndice de Equidad Algor\xEDtmica",avgAttendance:"Asistencia Promedio",vulnerabilityIndex:"\xCDndice Vulnerabilidad Zonal",dropoutProb:"Probabilidad de Deserci\xF3n"},riskTiers:{low:"Riesgo Bajo",medium:"Riesgo Medio",high:"Riesgo Alto (Cr\xEDtico)",lowShort:"Bajo",mediumShort:"Medio",highShort:"Alto"},simulator:{title:"Simulador de Escenarios 'What-If'",subtitle:"Modele el impacto preventivo de pol\xEDticas educativas en tiempo real sobre el gemelo 3D",mealBoost:"Refuerzo Programa de Alimentaci\xF3n Escolar",transportSubsidy:"Subsidio de Transporte Rural/Periurbano",mentoring:"Tutor\xEDa Psicopedag\xF3gica Personalizada",remedial:"Nivelaci\xF3n Acad\xE9mica (Matem\xE1ticas/Lenguaje)",cashTransfer:"Bono Condicionado de Emergencia Familiar",connectivity:"Kits de Conectividad & Acceso Digital",applySimulation:"Aplicar Simulaci\xF3n al Gemelo 3D",resetSimulation:"Restablecer Par\xE1metros Base",simulatedImpact:"Impacto Estimado del Escenario",riskReduction:"Reducci\xF3n Neta del Riesgo",rescuedStudents:"Estudiantes Proyectados Fuera de Riesgo",estimatedCost:"Presupuesto Estimado de Implementaci\xF3n",socialRoi:"Multiplicador de Retorno Social",activeStatus:"Simulaci\xF3n Activa"},student:{hashId:"ID An\xF3nimo / Hash",riskFootprint:"Huella de Riesgo Multidimensional",shapAnalysis:"Explicabilidad Algor\xEDtmica SHAP",baseValue:"Probabilidad Base del Modelo",factorsContributingRisk:"Factores que Incrementan Riesgo (+)",factorsReducingRisk:"Factores Protectores (-)",attendanceHistory:"Historial de Asistencia Semestral",gradesHistory:"Historial de Rendimiento Acad\xE9mico (GPA)",socioeconomicFactors:"Factores Socioecon\xF3micos",distanceKm:"Distancia al Plantel",travelTime:"Tiempo de Traslado",workBurden:"Carga Laboral / Cuidado Familiar",parentalConsent:"Consentimiento Parental Informado",consentSigned:"Firmado Digitalmente",consentPending:"Pendiente de Autorizaci\xF3n",assignedInterventions:"Intervenciones Asignadas",askAiAboutStudent:"Consultar Diagn\xF3stico con IA",noAlerts:"Sin alertas cr\xEDticas activas",protectedMinorNotice:"Datos 100% anonimizados bajo protocolo \xE9tico de protecci\xF3n a menores."},school:{schoolCode:"C\xF3digo Modular",infrastructure:"\xCDndice de Infraestructura",connectivity:"Nivel de Conectividad",mealActive:"Comedor Escolar Operativo",classroomsCount:"Aulas Monitoreadas",enterSchool3D:"Inspeccionar Plantel en 3D (Meso)",viewStudentsRoster:"Ver N\xF3mina de Estudiantes"},classroom:{gradeAndSection:"Grado y Secci\xF3n",homeroomTeacher:"Docente Tutor",studentsCount:"Total Estudiantes",avgRiskScore:"Score de Riesgo Promedio",viewStudentsInClass:"Explorar Estudiantes del Aula"},reports:{title:"Centro de Reportes Ejecutivos & T\xE9cnicos",subtitle:"Generaci\xF3n automatizada de reportes descargables en PDF, Word y Excel con auditor\xEDa de fairness",formatSelect:"Formato de Exportaci\xF3n",pdfFormat:"Documento PDF Profesional",docxFormat:"Plantilla Word (.docx)",xlsxFormat:"Libro de C\xE1lculo Excel (.xlsx)",previewTitle:"Previsualizaci\xF3n del Reporte",downloadReport:"Descargar Reporte",printReport:"Imprimir / Guardar PDF",generateNew:"Generar Nuevo Reporte",autoSchedule:"Programar Env\xEDo Autom\xE1tico (Semanal/Mensual)",scheduleSuccess:"Programaci\xF3n configurada con \xE9xito para los correos directivos.",filterSchool:"Filtrar por Plantel",filterGrade:"Filtrar por Grado",filterRisk:"Filtrar por Nivel de Riesgo",allSchools:"Todos los Planteles de la Regi\xF3n",allGrades:"Todos los Grados",allRiskTiers:"Todos los Niveles de Riesgo",executiveSummary:"Resumen Ejecutivo de Vulnerabilidad y Deserci\xF3n",shapReportSection:"Desglose de Explicabilidad SHAP Agregada",recommendationsSection:"Recomendaciones Estrat\xE9gicas de Intervenci\xF3n Prioritaria"},ethics:{title:"Marco \xC9tico, Legal y Auditor\xEDa de Algoritmos",subtitle:"Supervisi\xF3n de equidad algor\xEDtmica (Fairness), anonimizaci\xF3n estricta y protecci\xF3n de menores",fairnessAudit:"Auditor\xEDa de Sesgo Algor\xEDtmico",disparateImpact:"Ratio de Impacto Dispar (Disparate Impact)",genderParity:"Paridad de Oportunidad por G\xE9nero (Equalized Odds)",urbanRuralEquity:"Equidad Geogr\xE1fica (Urbano-Marginal vs Rural)",minorProtection:"Protecci\xF3n de Datos & Privacidad de Menores",anonymizationStatus:"Anonimizaci\xF3n Activa: Hashing Criptogr\xE1fico SHA-256",consentManagement:"M\xF3dulo de Gesti\xF3n de Consentimientos Parentales",totalConsents:"Consentimientos Registrados",pendingConsents:"Autorizaciones Pendientes",gdprCompliance:"Cumplimiento Normativo (RGPD / LPDP / UNICEF XAI)"},aiChat:{title:"Asistente de Inteligencia Educativa",placeholder:"Pregunta sobre causas de deserci\xF3n, intervenciones o navega el gemelo 3D...",quickPrompt1:"\xBFPor qu\xE9 el estudiante seleccionado tiene riesgo alto?",quickPrompt2:"Simular pol\xEDtica de beca alimentaria +30%",quickPrompt3:"Generar resumen ejecutivo de la regi\xF3n",quickPrompt4:"Auditar sesgo de g\xE9nero en el modelo ML",typing:"El asistente est\xE1 analizando los datos del gemelo 3D...",contextBadge:"Contexto 3D:",clearChat:"Limpiar conversaci\xF3n"},techDocs:{title:"Entregables T\xE9cnicos & Arquitectura del Sistema",subtitle:"Diagramas de arquitectura, modelo relacional ER, manual Docker y documentaci\xF3n de modelos ML",tabs:{architecture:"Arquitectura del Sistema",erDiagram:"Diagrama ER Base de Datos",docker:"Despliegue Docker & Compose",postman:"Colecci\xF3n Postman API",mlDocs:"Documentaci\xF3n Modelo ML",dataset:"Dataset Sint\xE9tico"},copyCode:"Copiar C\xF3digo",copied:"\xA1Copiado al portapapeles!"}},en:{appTitle:"EduTwin AI",appSubtitle:"Digital Twins for School Dropout Prediction and Prevention",tagline:"Predictive Intelligence & 3D Simulation in High-Vulnerability Zones",roles:{admin:"Ministry Administrator",director:"School Principal",counselor:"Counselor / Support Tutor",researcher:"Researcher / NGO"},nav:{twin3d:"3D Digital Twin",analytics:"Predictive Analytics & SHAP",simulator:"Impact Simulator",reports:"Report Center",ethics:"Ethics & Bias Audit",architecture:"Architecture & Docs",alerts:"Early Warnings"},twinLevels:{macro:"Macro: Geographic Region",meso:"Meso: School Campus",micro:"Micro: Student & 3D Footprint",backToMacro:"Return to Regional View (Macro)",backToMeso:"Return to Campus View (Meso)",switchView:"Observation Level",controlsHint:"Rotate: Left Click | Pan: Right Click | Zoom: Mouse Scroll"},metrics:{totalMonitored:"Monitored Students",highRiskRate:"Critical Risk Rate",activeAlerts:"Active Early Alerts",simulatedRescue:"Rescuable Students (Simulated)",fairnessIndex:"Algorithmic Fairness Index",avgAttendance:"Average Attendance",vulnerabilityIndex:"Zonal Vulnerability Index",dropoutProb:"Dropout Probability"},riskTiers:{low:"Low Risk",medium:"Medium Risk",high:"High Risk (Critical)",lowShort:"Low",mediumShort:"Medium",highShort:"High"},simulator:{title:"'What-If' Scenario Simulator",subtitle:"Model the preventive impact of educational policies in real time on the 3D twin",mealBoost:"School Feeding Program Expansion",transportSubsidy:"Rural/Peri-urban Transportation Subsidy",mentoring:"Personalized Psychopedagogical Mentoring",remedial:"Academic Remediation (Math/Language)",cashTransfer:"Emergency Family Conditional Cash Transfer",connectivity:"Connectivity Kits & Digital Access",applySimulation:"Apply Simulation to 3D Twin",resetSimulation:"Reset Baseline Parameters",simulatedImpact:"Estimated Scenario Impact",riskReduction:"Net Risk Reduction",rescuedStudents:"Projected Students Removed From Risk",estimatedCost:"Estimated Implementation Budget",socialRoi:"Social Return Multiplier",activeStatus:"Simulation Active"},student:{hashId:"Anonymous ID / Hash",riskFootprint:"Multidimensional Risk Footprint",shapAnalysis:"SHAP Algorithmic Explainability",baseValue:"Model Base Probability",factorsContributingRisk:"Factors Increasing Risk (+)",factorsReducingRisk:"Protective Factors (-)",attendanceHistory:"Semester Attendance History",gradesHistory:"Academic Performance History (GPA)",socioeconomicFactors:"Socioeconomic Factors",distanceKm:"Distance to School",travelTime:"Commute Time",workBurden:"Child Labor / Care Burden",parentalConsent:"Informed Parental Consent",consentSigned:"Digitally Signed",consentPending:"Pending Authorization",assignedInterventions:"Assigned Interventions",askAiAboutStudent:"Ask AI About This Student",noAlerts:"No active critical alerts",protectedMinorNotice:"100% anonymized data under ethical child protection protocols."},school:{schoolCode:"Modular Code",infrastructure:"Infrastructure Score",connectivity:"Connectivity Level",mealActive:"Operational School Cafeteria",classroomsCount:"Monitored Classrooms",enterSchool3D:"Inspect School Campus in 3D (Meso)",viewStudentsRoster:"View Students Roster"},classroom:{gradeAndSection:"Grade & Section",homeroomTeacher:"Homeroom Teacher",studentsCount:"Total Students",avgRiskScore:"Average Risk Score",viewStudentsInClass:"Explore Classroom Students"},reports:{title:"Executive & Technical Report Center",subtitle:"Automated downloadable PDF, Word, and Excel reports with algorithmic fairness audit",formatSelect:"Export Format",pdfFormat:"Professional PDF Document",docxFormat:"Word Template (.docx)",xlsxFormat:"Excel Spreadsheet (.xlsx)",previewTitle:"Report Preview",downloadReport:"Download Report",printReport:"Print / Save PDF",generateNew:"Generate New Report",autoSchedule:"Schedule Automated Delivery (Weekly/Monthly)",scheduleSuccess:"Automated dispatch schedule successfully configured for directors.",filterSchool:"Filter by School",filterGrade:"Filter by Grade",filterRisk:"Filter by Risk Level",allSchools:"All Regional Schools",allGrades:"All Grades",allRiskTiers:"All Risk Tiers",executiveSummary:"Executive Summary on Vulnerability & Dropout",shapReportSection:"Aggregated SHAP Explainability Breakdown",recommendationsSection:"Strategic Priority Intervention Recommendations"},ethics:{title:"Ethical, Legal Framework & Algorithmic Audit",subtitle:"Algorithmic fairness oversight, strict anonymization, and minor data protection",fairnessAudit:"Algorithmic Bias Audit",disparateImpact:"Disparate Impact Ratio",genderParity:"Gender Opportunity Parity (Equalized Odds)",urbanRuralEquity:"Geographic Equity (Urban-Marginal vs Rural)",minorProtection:"Data Protection & Minor Privacy",anonymizationStatus:"Active Anonymization: SHA-256 Cryptographic Hashing",consentManagement:"Parental Informed Consent Management",totalConsents:"Registered Consents",pendingConsents:"Pending Authorizations",gdprCompliance:"Regulatory Compliance (GDPR / LPDP / UNICEF XAI)"},aiChat:{title:"Educational Intelligence Assistant",placeholder:"Ask about dropout causes, simulated interventions or 3D navigation...",quickPrompt1:"Why does the selected student have high risk?",quickPrompt2:"Simulate school meal expansion by +30%",quickPrompt3:"Generate regional executive summary",quickPrompt4:"Audit gender bias in the ML model",typing:"Assistant is analyzing the 3D digital twin data...",contextBadge:"3D Context:",clearChat:"Clear conversation"},techDocs:{title:"Technical Deliverables & System Architecture",subtitle:"Architecture diagrams, relational ER model, Docker manuals and ML model specifications",tabs:{architecture:"System Architecture",erDiagram:"Database ER Diagram",docker:"Docker & Compose Deployment",postman:"Postman API Collection",mlDocs:"ML Model Documentation",dataset:"Synthetic Dataset"},copyCode:"Copy Code",copied:"Copied to clipboard!"}}};var Nh=vi(Qs());var wb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dR=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,n)=>n?n.toUpperCase():a.toLowerCase()),J0=t=>{let e=dR(t);return e.charAt(0).toUpperCase()+e.slice(1)},Bh=(...t)=>t.filter((e,a,n)=>!!e&&e.trim()!==""&&n.indexOf(e)===a).join(" ").trim(),Ib=t=>{for(let e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var Xu=vi(Qs());var Rb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Db=(0,Xu.forwardRef)(({color:t="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:n,className:i="",children:s,iconNode:r,...o},l)=>(0,Xu.createElement)("svg",{ref:l,...Rb,width:e,height:e,stroke:t,strokeWidth:n?Number(a)*24/Number(e):a,className:Bh("lucide",i),...!s&&!Ib(o)&&{"aria-hidden":"true"},...o},[...r.map(([u,f])=>(0,Xu.createElement)(u,f)),...Array.isArray(s)?s:[s]]));var sn=(t,e)=>{let a=(0,Nh.forwardRef)(({className:n,...i},s)=>(0,Nh.createElement)(Db,{ref:s,iconNode:e,className:Bh(`lucide-${wb(J0(t))}`,`lucide-${t}`,n),...i}));return a.displayName=J0(t),a};var fR=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Yu=sn("compass",fR);var hR=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zu=sn("eye",hR);var pR=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Zs=sn("layers",pR);var mR=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Ku=sn("rotate-cw",mR);var gR=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Ks=sn("sparkles",gR);var xR=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Ju=sn("zoom-in",xR);var yR=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],Qu=sn("zoom-out",yR);var je=vi(ju(),1),Nb=({level:t,setLevel:e,schools:a,selectedSchool:n,setSelectedSchool:i,selectedClassroom:s,setSelectedClassroom:r,selectedStudent:o,setSelectedStudent:l,students:u,simulationParams:f,theme:p,language:c,embeddedMode:h=!1})=>{let v=(0,Vt.useRef)(null),M=Lb[c],[g,d]=(0,Vt.useState)(!1),m=(0,Vt.useRef)(!1);(0,Vt.useEffect)(()=>{m.current=g},[g]);let[_,x]=(0,Vt.useState)(null),[C,A]=(0,Vt.useState)("perspective"),L=(0,Vt.useRef)(null),y=(0,Vt.useRef)(null),E=(0,Vt.useRef)(null),I=(0,Vt.useRef)(null),P=(0,Vt.useRef)(null),O=(0,Vt.useRef)(new Ru),K=(0,Vt.useRef)(new Pe),Y=(0,Vt.useRef)([]),H=(0,Vt.useRef)(!1),Z=(0,Vt.useRef)({x:0,y:0}),k=(0,Vt.useRef)({radius:24,theta:Math.PI/4,phi:Math.PI/3}),ee=(0,Vt.useRef)(new U(0,0,0));(0,Vt.useEffect)(()=>{if(!v.current)return;let ie=v.current.clientWidth,Re=v.current.clientHeight,Ee=new yu;L.current=Ee;let He=p==="dark"?461328:16317180;Ee.background=new Ue(He),Ee.fog=new xu(He,.025);let be=new wa(45,ie/Re,.1,1e3);y.current=be,oe();let he=new Rh({antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});he.setSize(ie,Re),he.setPixelRatio(Math.min(window.devicePixelRatio,2)),he.shadowMap.enabled=!0,he.shadowMap.type=Ff,E.current=he,he.domElement.parentElement!==v.current&&v.current.appendChild(he.domElement);let Be=new Iu(p==="dark"?4674921:9741240,p==="dark"?1.4:1.8);Ee.add(Be);let ke=new wu(16777215,p==="dark"?1.5:2);ke.position.set(20,40,20),ke.castShadow=!0,ke.shadow.mapSize.width=2048,ke.shadow.mapSize.height=2048,Ee.add(ke);let gt=new Ko(1357990,1.35,50);gt.position.set(-15,10,-15),Ee.add(gt);let Tt=new Ko(13216104,1.05,50);Tt.position.set(15,10,15),Ee.add(Tt);let lt=new yt;P.current=lt,Ee.add(lt);let dt=new ResizeObserver(Xe=>{for(let T of Xe){let S=T.contentRect.width,D=T.contentRect.height;S>0&&D>0&&y.current&&E.current&&(y.current.aspect=S/D,y.current.updateProjectionMatrix(),E.current.setSize(S,D))}});dt.observe(v.current);let N=new Du,Zt=()=>{I.current=requestAnimationFrame(Zt);let Xe=N.getDelta(),T=N.getElapsedTime();m.current&&!H.current&&(k.current.theta+=Xe*.25,oe()),lt.userData?.animate&&lt.userData.animate(T,Xe),lt.children.forEach(S=>{S.userData?.animate&&S.userData.animate(T,Xe)}),he.render(Ee,be)};return Zt(),()=>{dt.disconnect(),I.current&&cancelAnimationFrame(I.current),I.current=null,he.domElement.parentElement===v.current&&he.domElement.remove(),he.dispose(),E.current===he&&(E.current=null),L.current=null,P.current=null}},[p]);let oe=(0,Vt.useCallback)(()=>{if(!y.current)return;let{radius:ie,theta:Re,phi:Ee}=k.current,He=ee.current,be=He.x+ie*Math.sin(Ee)*Math.sin(Re),he=He.y+ie*Math.cos(Ee),Be=He.z+ie*Math.sin(Ee)*Math.cos(Re);y.current.position.set(be,he,Be),y.current.lookAt(He)},[]);(0,Vt.useEffect)(()=>{if(!P.current||!L.current)return;let ie=P.current;for(;ie.children.length>0;){let be=ie.children[0];ie.remove(be),be.geometry&&be.geometry.dispose()}if(Y.current=[],t==="macro")xe(ie),ee.current.set(0,.5,0),k.current.radius=34/Math.min(1,y.current?.aspect||1),k.current.theta=Math.PI/5,k.current.phi=Math.PI/2.6,oe();else if(t==="meso"){let be=n||a[0];be&&Se(ie,be),ee.current.set(0,1.8,0),k.current.radius=24/Math.min(1,y.current?.aspect||1),k.current.theta=Math.PI/6,k.current.phi=Math.PI/2.4,oe()}else if(t==="micro"){let be=o||u[0];be&&Ce(ie,be),ee.current.set(0,1.3,0),k.current.radius=9/Math.min(1,y.current?.aspect||1),k.current.theta=Math.PI/4,k.current.phi=Math.PI/2.3,oe()}let Re=L.current,Ee=y.current,He=E.current;Re&&Ee&&He&&He.render(Re,Ee)},[t,n,s,o,f,p,a,u]);let xe=ie=>{let Re=new yt,Ee={outer:new Ne({color:p==="dark"?725536:14412542,metalness:.85,roughness:.2}),mid:new Ne({color:p==="dark"?988970:12573694,metalness:.9,roughness:.15}),core:new Ne({color:2282478,emissive:440020,emissiveIntensity:p==="dark"?.9:.45,metalness:.5,roughness:.2})};for(let T=0;T<4;T++){let S=5.4-T*.75,D=T===0?.35:.22,R=new de(new Dt(S,S+.08,D,64),T===0?Ee.outer:Ee.mid);R.position.y=T*.22,R.castShadow=!0,R.receiveShadow=!0,Re.add(R);let B=new de(new Wa(S-.02,.035,10,80),Ee.core);B.rotation.x=Math.PI/2,B.position.y=T*.22+D/2,Re.add(B)}let He=3*.22+.11;for(let T=-5;T<=5;T++)for(let S=-5;S<=5;S++){if(Math.sqrt(T*T+S*S)>3.6)continue;let R=new Ne({color:2282478,emissive:561586,emissiveIntensity:.25+Math.random()*.55,metalness:.7,roughness:.2,transparent:!0,opacity:.35+Math.random()*.45}),B=new de(new Dt(.25,.25,.03,6),R);B.position.set(T*.48+(S%2===0?0:.24),He+.015,S*.42),B.userData={baseEmissive:R.emissiveIntensity},Re.add(B)}ie.add(Re);let be=new yt;be.position.y=He+.6;let he=new Ne({color:6514417,emissive:8490232,emissiveIntensity:1.15,metalness:.55,roughness:.15}),Be=new de(new Ji(.7,1),he);be.add(Be);let ke=new de(new Ji(.98,1),new Ne({color:10980346,emissive:12891645,emissiveIntensity:1,wireframe:!0,transparent:!0,opacity:.85}));be.add(ke);for(let T=0;T<3;T++){let S=new Ra({color:T===0?2282478:T===1?8490232:16020150,transparent:!0,opacity:.09,side:Na}),D=new de(new qa(1.3+T*.25,32,32),S);D.userData={layer:T},be.add(D)}let gt=[{radius:1.55,tiltX:Math.PI/2,tiltZ:0,color:2282478,speed:.35},{radius:1.85,tiltX:Math.PI/3,tiltZ:Math.PI/5,color:10980346,speed:-.28},{radius:2.15,tiltX:Math.PI/4,tiltZ:-Math.PI/4,color:16020150,speed:.22}],Tt=[];gt.forEach(T=>{let S=new Ne({color:T.color,emissive:T.color,emissiveIntensity:.85,metalness:.95,roughness:.05,transparent:!0,opacity:.9}),D=new de(new Wa(T.radius,.045,14,96),S);D.rotation.x=T.tiltX,D.rotation.z=T.tiltZ,D.userData=T,Tt.push(D),be.add(D);for(let R=0;R<3;R++){let B=new Ne({color:T.color,emissive:T.color,emissiveIntensity:1.1,metalness:.8,roughness:.1,flatShading:!0}),te=new de(new zs(.09,0),B),se=R/3*Math.PI*2;te.userData={orbitIdx:Tt.length-1,angle:se,radius:T.radius,tiltX:T.tiltX,tiltZ:T.tiltZ},be.add(te)}});for(let T=-1;T<=1;T+=2){let S=new de(new Dt(.08,.85,4.2,24,1,!0),new Ra({color:3718648,transparent:!0,opacity:.08,side:Na}));S.position.y=T*2.4,be.add(S);let D=new yt;for(let R=0;R<6;R++){let B=new de(new qa(.045,10,10),new Ra({color:2282478,transparent:!0,opacity:.9}));B.userData={idx:R},D.add(B)}D.userData={dir:T},be.add(D)}ie.add(be);let lt=[6.5,8.8,11],dt=[.12,-.22,.18],N=[.08,-.06,.05],Zt=a.length;a.forEach((T,S)=>{let D=S%lt.length,{buildingColor:R}=K0(T,u,f),B=lt[D],te=S/Math.max(1,Zt)*Math.PI*2+D*.55,se=new yt,z=new yt;z.rotation.z=dt[D],se.add(z);let q=new yt;q.position.set(B,0,0),z.add(q);let j=new Ue(R),_e=new zs(.55,0),fe=new Ne({color:j,emissive:j,emissiveIntensity:p==="dark"?.85:.5,metalness:.85,roughness:.12,flatShading:!0,transparent:!0,opacity:.95}),ce=new de(_e,fe);ce.scale.set(.8,1.6,.8),ce.castShadow=!0,q.add(ce);let Ae=new de(new zs(.32,0),fe.clone());Ae.position.set(.3,.25,.2),Ae.scale.set(.7,1.1,.7),Ae.material.opacity=.75,q.add(Ae);let Oe=new Ra({color:j,wireframe:!0,transparent:!0,opacity:.55}),ze=new de(new Dt(.7,.7,1.6,6,1,!0),Oe);ze.rotation.y=Math.PI/6,q.add(ze);let w=[2282478,16498468];for(let Kt=0;Kt<2;Kt++){let da=new Ne({color:w[Kt],emissive:w[Kt],emissiveIntensity:1,metalness:.95,roughness:.05,transparent:!0,opacity:.85}),Ya=new de(new Wa(.82,.035,12,48),da);Ya.rotation.x=Kt===0?Math.PI/2:Math.PI/3,Ya.rotation.z=Kt===1?Math.PI/4:0,q.add(Ya)}let Q=new de(new Dt(.02,.03,.85,6),new Ne({color:9741240,metalness:.95,roughness:.15}));Q.position.y=1.25,q.add(Q);let X=new Ne({color:j,emissive:j,emissiveIntensity:1.3}),ae=new de(new Ji(.08,0),X);ae.position.y=1.72,q.add(ae);let re=new de(new Dt(.9,1,.08,32),new Ne({color:1976635,metalness:.9,roughness:.15}));re.position.y=-.65,q.add(re);let J=new de(new Wa(.92,.05,10,48),new Ne({color:j,emissive:j,emissiveIntensity:.9,metalness:.9,roughness:.1}));J.rotation.x=Math.PI/2,J.position.y=-.62,q.add(J);for(let Kt=0;Kt<3;Kt++){let da=new yt;for(let Le=0;Le<5;Le++){let $e=new de(new Gt(.05,.1,.05),new Ne({color:j,emissive:j,emissiveIntensity:1,transparent:!0,opacity:.9}));$e.userData={pIdx:Le,slot:Kt},da.add($e)}let Ya=Kt/3*Math.PI*2;da.position.set(Math.cos(Ya)*.32,-.15,Math.sin(Ya)*.32),q.add(da)}let pe=new U(0,0,0),ue=new U(-B*.5,2.6+Math.sin(te*2)*.8,Math.sin(te)*B*.25),Ie=new U(-B,0,0),Ke=new Ki(Ie,ue,pe),ga=new de(new Cr(Ke,64,.045,8,!1),new Ne({color:j,emissive:j,emissiveIntensity:.7,metalness:.85,roughness:.1,transparent:!0,opacity:.7}));q.add(ga);let ba=new yt;for(let Kt=0;Kt<4;Kt++){let da=new de(new qa(.075,12,12),new Ne({color:j,emissive:j,emissiveIntensity:1.4,transparent:!0,opacity:.95}));da.userData={t:Kt/4,curve:Ke},ba.add(da)}q.add(ba),se.userData={orbitIdx:D,baseAngle:te,orbitalRadius:B,tilt:dt[D],orbitSpeed:N[D],type:"schoolNode"},ie.add(se),Y.current.push({mesh:ce,data:T,type:"school"})});let Xe=new yt;for(let T=0;T<120;T++){let S=.02+Math.random()*.05,D=Math.random(),R=D<.33?2282478:D<.66?10980346:16498468,B=new de(new qa(S,8,8),new Ra({color:R,transparent:!0,opacity:.4+Math.random()*.5})),te=3+Math.random()*10,se=Math.random()*Math.PI*2,z=-1+Math.random()*5.5;B.position.set(Math.cos(se)*te,z,Math.sin(se)*te),B.userData={r:te,a:se,y:z,speed:.1+Math.random()*.3,sway:Math.random()*Math.PI*2},Xe.add(B)}ie.add(Xe),ie.userData={animate:(T,S)=>{Re.children.forEach(D=>{let R=D;R.geometry?.type==="CylinderGeometry"&&R.material?.emissive&&R.userData?.baseEmissive!==void 0&&(R.material.emissiveIntensity=R.userData.baseEmissive+Math.sin(T*2+D.position.x*3+D.position.z*2)*.25)}),Be.scale.setScalar(1+Math.sin(T*2.6)*.06),Be.rotation.y=T*.6,Be.rotation.x=T*.22,ke.rotation.y=-T*.38,ke.rotation.z=T*.24,ke.scale.setScalar(1+Math.sin(T*1.8)*.05),be.children.forEach(D=>{let R=D;if(R.geometry?.type==="SphereGeometry"&&R.material?.opacity!==void 0&&R.userData?.layer!==void 0){let B=1+Math.sin(T*1.4+R.userData.layer)*.12;R.scale.setScalar(B),R.material.opacity=.07+Math.abs(Math.sin(T*1.4+R.userData.layer))*.08}}),Tt.forEach((D,R)=>{let B=D.userData;D.rotation.x=B.tiltX+Math.sin(T*.3+R)*.08,D.rotation.y+=B.speed*S*60}),be.children.forEach(D=>{let R=D,B=R.userData;if(B?.orbitIdx!==void 0&&B.radius!==void 0&&R.geometry?.type==="OctahedronGeometry"){let te=gt[B.orbitIdx],se=B.angle+T*te.speed*2,z=Math.cos(se)*B.radius,q=Math.sin(se)*B.radius,j=new U(z,0,q),_e=new _n().setFromAxisAngle(new U(1,0,0),B.tiltX),fe=new _n().setFromAxisAngle(new U(0,0,1),B.tiltZ);j.applyQuaternion(fe).applyQuaternion(_e),R.position.copy(j),R.rotation.x=T*2.4,R.rotation.y=T*3.1,R.scale.setScalar(1+Math.sin(T*3+B.angle)*.15)}}),be.children.forEach(D=>{let R=D;if(R.children?.length>0&&R.userData?.dir!==void 0&&R.children[0].userData?.idx!==void 0){let B=R.userData.dir;R.children.forEach((te,se)=>{let z=(T*.6+se*.17)%1,q=B===1?z:1-z;te.position.y=-2.1+q*4.2,te.scale.setScalar(.6+Math.sin(z*Math.PI)*1.4),te.material.opacity=Math.sin(z*Math.PI)*.95,te.position.x=Math.sin(z*Math.PI*3+se)*.12,te.position.z=Math.cos(z*Math.PI*2.5+se*.7)*.12})}}),ie.children.forEach(D=>{let R=D,B=R.userData;if(B?.type==="schoolNode"){let te=B.baseAngle+T*B.orbitSpeed;R.rotation.y=te,R.position.y=Math.sin(T*.9+B.baseAngle)*.35;let se=R.children[0]?.children?.[0];se&&(se.position.y=.35+Math.sin(T*1.6+B.baseAngle*3)*.22,se.rotation.y=T*.55+B.baseAngle,se.children.forEach(z=>{let q=z;if(q.geometry?.type==="OctahedronGeometry"&&(q.rotation.x=T*1.1,q.rotation.z=T*.8),q.geometry?.type==="IcosahedronGeometry"&&q.position.y>1.6){let j=q.material;j.emissiveIntensity=.9+Math.abs(Math.sin(T*4+B.baseAngle))*.9,q.scale.setScalar(1+Math.sin(T*3.6+B.baseAngle)*.2)}q.children?.length>0&&q.children[0]?.userData?.pIdx!==void 0&&q.children.forEach(j=>{if(j.userData?.pIdx!==void 0){let _e=(T*1.4+j.userData.pIdx*.2)%1;j.position.y=_e*1.1-.1,j.scale.setScalar(.7+Math.sin(_e*Math.PI)*.9),j.material.opacity=Math.sin(_e*Math.PI)*.95}}),q.children?.length>0&&q.children[0]?.userData?.curve!==void 0&&q.children.forEach(j=>{if(j.userData?.curve){let _e=(T*.55+j.userData.t)%1,fe=j.userData.curve.getPointAt(_e);j.position.copy(fe),j.scale.setScalar(.7+Math.sin(_e*Math.PI)*.7);let ce=j.material;ce.opacity=.3+Math.sin(_e*Math.PI)*.7}})}))}}),Xe.children.forEach(D=>{let R=D,B=R.userData;B.a+=B.speed*.002,B.sway+=.01,R.position.x=Math.cos(B.a)*B.r+Math.sin(B.sway)*.25,R.position.z=Math.sin(B.a)*B.r+Math.cos(B.sway)*.25,R.position.y=B.y+Math.sin(T*.8+B.sway)*.35;let te=R.material;te.opacity=.3+Math.abs(Math.sin(T*1.2+B.sway))*.6})}}},Se=(ie,Re)=>{let Ee=u.filter(w=>w.schoolId===Re.id).reduce((w,Q)=>{let X=Q.classroomName||Q.classroomId||"Grado "+Q.grade,ae=w.get(X);ae||(ae={count:0,risk:0,ids:[]},w.set(X,ae)),ae.count++;let{simulatedProbability:re}=Uh(Q,f);return ae.risk+=re,ae.ids.push(Q.idHash),w},new Map),He=Array.from(Ee.entries()).map(([w,Q])=>({name:w,count:Q.count,avgRisk:Q.count>0?Q.risk/Q.count:0,sampleId:Q.ids[0],tier:Q.count>0?Q.risk/Q.count:0})),be=w=>w>.65?15680580:w>.35?16096779:1096065,he=new yt;for(let w=0;w<3;w++){let Q=7.4-w*.9,X=w===0?.45:.3,ae=new Ne({color:w===0?p==="dark"?725536:14412542:p==="dark"?988970:12573694,metalness:.9,roughness:.15}),re=new de(new Dt(Q,Q+.1,X,64),ae);re.position.y=w*.3,he.add(re);let J=new Ne({color:w===0?2282478:10980346,emissive:w===0?440020:8490232,emissiveIntensity:.7,metalness:.9}),pe=new de(new Wa(Q-.02,.03,10,90),J);pe.rotation.x=Math.PI/2,pe.position.y=w*.3+X/2,he.add(pe)}let Be=2*.3,ke=new Ne({color:4674921,metalness:.95,roughness:.1});[[-5.8,-3.2],[5.8,-3.2],[-5.8,3.2],[5.8,3.2]].forEach(([w,Q])=>{let X=new de(new Gt(.45,6.2,.45),ke);X.position.set(w,Be+3.1,Q),he.add(X);let ae=new Ne({color:2282478,emissive:440020,emissiveIntensity:.9}),re=new de(new Gt(.08,5.8,.02),ae);re.position.set(w<0?w-.24:w+.24,Be+3.1,Q),re.userData={col:w<0?.2:.7},he.add(re)});let Tt=new Ne({color:p==="dark"?727598:10859772,metalness:.7,roughness:.25}),lt=new de(new Gt(12.2,6.4,.45),Tt);lt.position.set(0,Be+3.4,-.22),he.add(lt);let dt=new yt;for(let w=-5;w<=5;w+=.8){let Q=new de(new Gt(.02,5.6,.01),new Ne({color:2282478,emissive:440020,emissiveIntensity:.4}));Q.position.set(w,0,0),dt.add(Q)}for(let w=-2.5;w<=2.5;w+=.8){let Q=new de(new Gt(10.6,.02,.01),new Ne({color:10980346,emissive:8490232,emissiveIntensity:.35}));Q.position.set(0,w,0),dt.add(Q)}dt.position.set(0,Be+3.4,.02),he.add(dt),ie.add(he);let N=new yt;N.position.set(0,Be+6.25,1.3);let Zt=new Ne({color:p==="dark"?1976635:9684477,metalness:.9,roughness:.15}),Xe=new de(new Gt(2.4,1.2,1.8),Zt);N.add(Xe);let T=new Ne({color:6514417,emissive:8490232,emissiveIntensity:1.1,metalness:.4,roughness:.15,transparent:!0,opacity:.9}),S=new de(new zs(.55,0),T);S.position.set(0,0,.05),N.add(S);for(let w=0;w<12;w++){let Q=w%3===0?2282478:w%3===1?1096065:16498468,X=new de(new Gt(.12,.05,.04),new Ne({color:Q,emissive:Q,emissiveIntensity:.8}));X.position.set(-1+w*.18,-.68,.9),X.userData={idx:w,base:Q},N.add(X)}let D=new de(new Dt(.03,.05,.85,8),new Ne({color:9741240,metalness:.95}));D.position.set(0,1,0),N.add(D);let R=new de(new Ji(.09,0),new Ne({color:16020150,emissive:15485081,emissiveIntensity:1.2}));R.position.set(0,1.45,0),N.add(R),ie.add(N);let B=3,te=Math.max(2,Math.ceil(He.length/B)),se=3.2,z=1.6,q=.5,j=.4,_e=B*se+(B-1)*q,fe=te*z+(te-1)*j,ce=-_e/2+se/2,Ae=Be+5.2,Oe=[];He.forEach((w,Q)=>{let X=Math.floor(Q/B),ae=Q%B,re=ce+ae*(se+q),J=Ae-X*(z+j),pe=.8,ue=new Ue(be(w.avgRisk)),Ie=new yt;Ie.position.set(re,J,pe),Oe.push(Ie);let Ke=new Ne({color:p==="dark"?1976635:14739455,metalness:.92,roughness:.13}),ga=new de(new Gt(se,z,.75),Ke);Ie.add(ga);let ba=new Gt(se-.32,z-.32,.05),Kt=new Ne({color:p==="dark"?132631:988970,emissive:ue,emissiveIntensity:.22,roughness:.25}),da=new de(ba,Kt);da.position.z=.4,Ie.add(da);let Ya=new Ne({color:ue,emissive:ue,emissiveIntensity:.75,metalness:.8,roughness:.1}),Le=new de(new Gt(se,.08,.77),Ya);Le.position.set(0,z/2-.04,0),Ie.add(Le);let $e=Le.clone();$e.position.set(0,-z/2+.04,0),Ie.add($e);let tt=new de(new Gt(.9,.12,.22),new Ne({color:4674921,metalness:.95,roughness:.08}));tt.position.set(0,-z/2+.25,.52),Ie.add(tt);let at=[2282478,1096065,16498468,15680580];for(let ft=0;ft<4;ft++){let sa=new Ne({color:at[ft],emissive:at[ft],emissiveIntensity:.9}),Fa=new de(new Dt(.04,.04,.04,10),sa);Fa.rotation.x=Math.PI/2,Fa.position.set(-se/2+.15,-.45+ft*.3,.41),Fa.userData={ledIdx:ft},Ie.add(Fa)}for(let ft=0;ft<7;ft++){let sa=new de(new Gt(.22,.06,.78),new Ne({color:132631,roughness:.6}));sa.position.set(se/2-.22,-.5+ft*.17,0),Ie.add(sa)}let Bt=new Ne({color:16498468,emissive:14251782,emissiveIntensity:.45,metalness:.95,roughness:.08});for(let ft=0;ft<2;ft++){let sa=new de(new Dt(.06,.06,z*.9,12),Bt);sa.position.set(-.4+ft*.8,0,-.4),Ie.add(sa);for(let Fa=0;Fa<3;Fa++){let b=new de(new qa(.05,10,10),new Ne({color:16638023,emissive:16436245,emissiveIntensity:1.2,transparent:!0,opacity:.95}));b.userData={slot:ft,t:Fa*.33},Ie.add(b)}}for(let ft=0;ft<2;ft++){let sa=new yt,Fa=new de(new Dt(.25,.25,.1,20),new Ne({color:1120295,metalness:.8,roughness:.3}));sa.add(Fa);let b=new yt;for(let F=0;F<5;F++){let W=new de(new Gt(.45,.04,.06),new Ne({color:6583435,metalness:.9}));W.rotation.y=F/5*Math.PI*2,b.add(W)}sa.add(b),b.userData={fan:ft},sa.position.set(-.7+ft*1.4,z/2+.06,0),Ie.add(sa)}let Cn=new Ne({color:ue,emissive:ue,emissiveIntensity:.9,metalness:.9,roughness:.08,transparent:!0,opacity:.8}),Jt=new de(new Wa(.7,.055,10,60),Cn);if(Jt.rotation.x=Math.PI/2,Jt.position.set(0,z/2+.75,.3),Jt.userData={halo:!0},Ie.add(Jt),w.avgRisk>.35){let ft=new de(new Wa(.5,.04,10,60),Cn.clone());ft.material.opacity=.65,ft.rotation.x=Math.PI/3,ft.rotation.y=Math.PI/4,ft.position.copy(Jt.position),Ie.add(ft)}let ea=new U(0,0,-.38),Gn=new U(re,J-1.6,-.15),Rr=new Ki(ea.clone(),new U(ea.x+Math.sin(Q)*.2,ea.y-.9,ea.z-.3),new U(0,0,-ea.z-.15).add(ea).sub(ea).multiplyScalar(0)),$n=new Ki(new U(0,0,-.45),new U(Math.sin(Q*.9)*.3,-.9,-.6),new U(0,-1.8,-1.1)),yi=new de(new Cr($n,30,.055,8,!1),new Ne({color:ue,emissive:ue,emissiveIntensity:.55,metalness:.9,roughness:.15,transparent:!0,opacity:.75}));Ie.add(yi);let Js=new yt;for(let ft=0;ft<3;ft++){let sa=new de(new qa(.075,12,12),new Ne({color:ue,emissive:ue,emissiveIntensity:1.4,transparent:!0,opacity:.95}));sa.userData={t:ft*.33,curve:$n},Js.add(sa)}Ie.add(Js);let nl=da;Y.current.push({mesh:nl,data:{id:"class-"+Q,name:w.name,schoolId:Re.id,grade:w.name,capacity:w.count},type:"classroom"}),ie.add(Ie)});let ze=new yt;for(let w=0;w<60;w++){let Q=.025+Math.random()*.04,X=Math.random()<.5?2282478:10980346,ae=new de(new qa(Q,8,8),new Ra({color:X,transparent:!0,opacity:.3+Math.random()*.6}));ae.position.set(-6+Math.random()*12,Be+1+Math.random()*5,-.5+Math.random()*2.2),ae.userData={ox:ae.position.x,oy:ae.position.y,oz:ae.position.z,ph:Math.random()*Math.PI*2},ze.add(ae)}ie.add(ze),ie.userData={animate:(w,Q)=>{S.rotation.y=w*.8,S.rotation.x=w*.4,S.scale.setScalar(1+Math.sin(w*2.2)*.1),R.rotation.y=w*.7,R.scale.setScalar(1+Math.sin(w*3.1)*.2);let X=R.material;X.emissiveIntensity=1+Math.abs(Math.sin(w*5))*.8,N.children.forEach(ae=>{let re=ae;if(re.userData?.idx!==void 0&&re.geometry?.type==="BoxGeometry"&&re.scale.y===.05){let J=re.material;J.emissiveIntensity=.4+Math.abs(Math.sin(w*4+re.userData.idx*.8))*.9}}),he.children.forEach(ae=>{let re=ae;if(re.userData?.col!==void 0){let J=re.material;J.emissiveIntensity=.6+Math.abs(Math.sin(w*2.5+re.userData.col*6))*.7}}),Oe.forEach((ae,re)=>{let J=w+re*.37;ae.position.z=.8+Math.sin(J*1.1)*.08,ae.rotation.x=Math.sin(J*.7)*.015,ae.rotation.y=Math.sin(J*.55)*.02,ae.children.forEach(pe=>{let ue=pe,Ie=ue.userData;if(Ie?.ledIdx!==void 0){let Ke=ue.material;Ke.emissiveIntensity=.3+Math.abs(Math.sin(w*5+Ie.ledIdx+re))*1}Ie?.halo===!0&&(ue.rotation.z=w*.6+re,ue.scale.setScalar(.9+Math.sin(w*2.4+re)*.15)),ue.type==="Group"&&Ie?.fan!==void 0&&(ue.rotation.y=w*(6+Ie.fan*2)+re)}),ae.children.forEach(pe=>{let ue=pe,Ie=ue.userData;if(Ie?.slot!==void 0&&Ie?.t!==void 0&&Ie.curve===void 0){let Ke=(w*.8+Ie.t)%1;ue.position.set(-.4+Ie.slot*.8,-z/2+.12+Ke*(z-.24),-.4),ue.scale.setScalar(.6+Math.sin(Ke*Math.PI)*1),ue.material.opacity=Math.sin(Ke*Math.PI)*.95}if(Ie?.curve!==void 0&&Ie?.t!==void 0){let Ke=(w*.5+Ie.t)%1,ga=Ie.curve.getPointAt(Ke);ue.position.copy(ga),ue.scale.setScalar(.7+Math.sin(Ke*Math.PI)*.7)}})}),ze.children.forEach((ae,re)=>{let J=ae,pe=J.userData;pe.ph+=.01,J.position.x=pe.ox+Math.sin(pe.ph)*.35,J.position.y=pe.oy+Math.cos(pe.ph*1.3)*.25,J.position.z=pe.oz+Math.sin(pe.ph*.8+re*.4)*.2;let ue=J.material;ue.opacity=.3+Math.abs(Math.sin(pe.ph*2))*.6})}}},Ce=(ie,Re)=>{let{simulatedProbability:Ee,simulatedTier:He,updatedShap:be}=Uh(Re,f),he="#10b981";He==="high"?he="#ef4444":He==="medium"&&(he="#f59e0b");let Be=new Dt(3.1,3.4,.12,48),ke=new Ne({color:p==="dark"?790294:14870768,metalness:.5,roughness:.4}),gt=new de(Be,ke);gt.position.y=-.38,gt.receiveShadow=!0,ie.add(gt);let Tt=new Dt(2.6,2.8,.18,48),lt=new Ne({color:p==="dark"?1120295:13358561,metalness:.7,roughness:.3}),dt=new de(Tt,lt);dt.position.y=-.23,dt.receiveShadow=!0,ie.add(dt);let N=new Dt(2.1,2.3,.3,48),Zt=new Ne({color:p==="dark"?988970:14870768,metalness:.75,roughness:.25}),Xe=new de(N,Zt);Xe.position.y=0,Xe.receiveShadow=!0,ie.add(Xe);for(let Le=0;Le<3;Le++){let $e=new Wa(2.05-Le*.3,.03,10,64),tt=new Ne({color:new Ue(he),emissive:new Ue(he),emissiveIntensity:1-Le*.25,metalness:.9,roughness:.1}),at=new de($e,tt);at.rotation.x=-Math.PI/2,at.position.y=.12-Le*.06,at.userData={animate:Bt=>{at.rotation.z=Bt*(Le%2===0?.5:-.5)}},ie.add(at)}let T=new Dt(.4,2,2.8,40,1,!0),S=new Ra({color:new Ue(he),transparent:!0,opacity:.09,side:Na}),D=new de(T,S);D.position.y=1.4,ie.add(D);let R=new yt;R.position.set(0,.15,0);let B=new Ne({color:new Ue(he),roughness:.22,metalness:.42,emissive:new Ue(he),emissiveIntensity:p==="dark"?.55:.25,flatShading:!0}),te=new de(new Gt(.6,.28,.42),B);te.position.y=.62,te.castShadow=!0,R.add(te),[-1,1].forEach(Le=>{let $e=new de(new Dt(.12,.14,.5,10),B);$e.position.set(Le*.18,.22,0),$e.castShadow=!0,R.add($e);let tt=new de(new Dt(.1,.11,.48,10),B);tt.position.set(Le*.18,-.28,0),tt.castShadow=!0,R.add(tt);let at=new de(new Gt(.18,.08,.28),B);at.position.set(Le*.18,-.58,.08),R.add(at)});let se=new Dt(.32,.42,.9,14),z=new de(se,B);z.position.y=1.22,z.castShadow=!0,R.add(z),[-1,1].forEach(Le=>{let $e=new de(new Dt(.1,.12,.5,10),B);$e.position.set(Le*.48,1.28,0),$e.rotation.z=Le*.35,$e.castShadow=!0,R.add($e);let tt=new de(new Dt(.08,.1,.46,10),B);tt.position.set(Le*.72,1,0),tt.rotation.z=Le*.55,tt.castShadow=!0,R.add(tt);let at=new de(new qa(.11,12,12),B);at.position.set(Le*.88,.78,0),R.add(at)});let q=new de(new Dt(.12,.14,.18,12),B);q.position.y=1.78,R.add(q);let j=new yt,_e=new qa(.33,20,20),fe=new de(_e,B);fe.castShadow=!0,j.add(fe);let ce=new de(new qa(.34,20,12,0,Math.PI*2,0,Math.PI/2.2),new Ne({color:new Ue(he),emissive:new Ue(he),emissiveIntensity:p==="dark"?.85:.45,wireframe:!0,transparent:!0,opacity:.85}));j.add(ce);let Ae=new Wa(.34,.045,14,36),Oe=new Ne({color:3718648,metalness:.95,roughness:.05,emissive:440020,emissiveIntensity:.95}),ze=new de(Ae,Oe);ze.rotation.x=Math.PI/2,ze.position.y=.02,j.add(ze);let w=new de(new Gt(.38,.015,.04),new Ra({color:2282478}));w.position.set(0,.04,.3),j.add(w);let Q=w.clone();Q.scale.set(.6,1,1),Q.position.set(0,-.02,.3),j.add(Q),j.position.y=2.02,R.add(j);let X=new yt,ae=Math.min(6,be.length),re=[1.7,2.1,2.5],J=[.25,-.35,.15],pe=[1,-1,1];be.slice(0,ae).forEach((Le,$e)=>{let tt=$e%re.length,at=re[tt],Bt=J[tt],Cn=pe[tt],Jt=$e/ae*Math.PI*2,ea=Le.contribution>0?"#ef4444":"#10b981",Gn=new yt,Rr=Math.cos(Jt)*at,$n=Math.sin(Jt)*at;Gn.position.set(Rr,1.3+Math.sin(Jt)*.5,$n);let yi=new de(new Wa(at,.02,8,80),new Ne({color:new Ue(ea),emissive:new Ue(ea),emissiveIntensity:.45,metalness:.6,transparent:!0,opacity:.55}));yi.rotation.x=Math.PI/2+Bt,yi.rotation.z=Bt*.5,yi.position.set(0,1.3,0),X.add(yi);let Js=new Ji(.24,0),nl=new Ne({color:new Ue(ea),emissive:new Ue(ea),emissiveIntensity:1,roughness:.15,metalness:.75,flatShading:!0}),ft=new de(Js,nl);Gn.add(ft);let sa=new de(new Wa(.38,.02,8,32),new Ra({color:new Ue(ea),transparent:!0,opacity:.7}));sa.rotation.x=Math.random()*Math.PI,Gn.add(sa);let Fa=[],b=16;for(let ge=0;ge<=b;ge++){let Me=ge/b,ye=(1-Me)*Rr,we=1.22+(1-Me)*(Math.sin(Jt)*.5),De=(1-Me)*$n,Je=Math.sin(Me*Math.PI)*.5;Fa.push(new U(ye,we+Je,De))}let F=new Yo(Fa),W=new Cr(F,30,.022,6,!1),G=new Ra({color:new Ue(ea),transparent:!0,opacity:.55}),V=new de(W,G);X.add(V),Gn.userData={baseAngle:Jt,orbitIdx:tt,orbitRadius:at,orbitIncline:Bt,orbitDir:Cn,orbitSpeed:.18+$e%3*.05},X.add(Gn),Y.current.push({mesh:ft,data:Le,type:"studentNode"})}),R.add(X);let ue=new qa(2.9,40,40,0,Math.PI*2,0,Math.PI/2+.1),Ie=new Ra({color:new Ue(he),transparent:!0,opacity:.08,side:Na,wireframe:!0}),Ke=new de(ue,Ie);Ke.position.y=1.2,R.add(Ke);let ga=new Dt(2.55,2.55,2.8,48,1,!0),ba=new Ne({color:new Ue(he),transparent:!0,opacity:.05,side:Na,metalness:.5,roughness:.1,emissive:new Ue(he),emissiveIntensity:.2}),Kt=new de(ga,ba);Kt.position.y=1.3,R.add(Kt);let da=new yt;da.position.y=.02;for(let Le=-3;Le<=3;Le++)for(let $e=-3;$e<=3;$e++){if(Math.sqrt(Le*Le+$e*$e)>3.2)continue;let at=new de(new Dt(.22,.22,.02,6),new Ne({color:new Ue(he),emissive:new Ue(he),emissiveIntensity:.25+Math.random()*.4,metalness:.6,roughness:.2,transparent:!0,opacity:.35+Math.random()*.35}));at.position.set(Le*.42+($e%2===0?0:.21),0,$e*.36),da.add(at)}ie.add(da);let Ya=[2282478,10980346,16020150,16498468];for(let Le=0;Le<4;Le++){let $e=Le/4*Math.PI*2+Math.PI/4,tt=new yt;tt.position.set(Math.cos($e)*2.8,0,Math.sin($e)*2.8);for(let at=0;at<8;at++){let Bt=new de(new Gt(.08,.18,.08),new Ne({color:Ya[Le],emissive:Ya[Le],emissiveIntensity:1,transparent:!0,opacity:.85}));Bt.userData={particleIdx:at,streamIdx:Le},tt.add(Bt)}tt.userData={animate:at=>{tt.children.forEach((Bt,Cn)=>{let Jt=Bt,ea=(at*.7+Cn*.18)%1;Jt.position.y=ea*3.2,Jt.scale.setScalar(1-Math.abs(ea-.5)*1.3),Jt.material.opacity=.9-ea*.7,Jt.rotation.y=at*2})}},ie.add(tt)}R.userData={animate:Le=>{R.position.y=.15+Math.sin(Le*1.4)*.12,R.rotation.y=Math.sin(Le*.4)*.2,j.position.y=2.02+Math.sin(Le*2.2)*.05,ce.rotation.y=Le*.7,ze.rotation.z=Math.sin(Le*2.5)*.08,w.scale.x=.85+Math.sin(Le*4.2)*.15,Q.scale.x=.5+Math.sin(Le*5.1+1)*.25,R.children.forEach($e=>{if($e.type==="Mesh"&&$e.geometry.type==="CylinderGeometry"&&$e.position.y>.9&&$e.position.y<1.4&&Math.abs($e.position.x)>.3){let tt=$e,at=Math.sign(tt.position.x);tt.rotation.z=at*(.35+Math.sin(Le*1.8)*.12)}}),Ke.rotation.y=Le*.15,Kt.rotation.y=-Le*.1,X.rotation.y=Le*.22,X.children.forEach($e=>{if($e.userData?.baseAngle!==void 0){let tt=$e,at=tt.userData,Bt=Le*at.orbitSpeed*at.orbitDir+at.baseAngle,Cn=at.orbitIncline,Jt=at.orbitRadius;tt.position.x=Math.cos(Bt)*Jt,tt.position.z=Math.sin(Bt)*Jt,tt.position.y=1.3+Math.sin(Bt*2)*.4+Math.sin(Bt)*Jt*Math.sin(Cn),tt.rotation.y=Le*2,tt.rotation.x=Le*1.6,tt.children[1]&&(tt.children[1].rotation.x=Le*1.2,tt.children[1].rotation.z=Le*1.8)}}),da.rotation.y=Le*.08}},ie.add(R)},pt=ie=>{H.current=!0,Z.current={x:ie.clientX,y:ie.clientY}},qt=ie=>{if(!v.current||!y.current||!E.current)return;let Re=v.current.getBoundingClientRect(),Ee=(ie.clientX-Re.left)/Re.width*2-1,He=-((ie.clientY-Re.top)/Re.height)*2+1;if(K.current.set(Ee,He),H.current){let be=ie.clientX-Z.current.x,he=ie.clientY-Z.current.y;k.current.theta-=be*.008,k.current.phi=Math.max(.1,Math.min(Math.PI/2-.05,k.current.phi-he*.008)),Z.current={x:ie.clientX,y:ie.clientY},oe()}else{O.current.setFromCamera(K.current,y.current);let be=Y.current.map(Be=>Be.mesh),he=O.current.intersectObjects(be,!1);if(he.length>0){let Be=Y.current.find(ke=>ke.mesh===he[0].object);if(Be){if(Be.type==="school"){let ke=Be.data,{simulatedRiskScore:gt}=K0(ke,u,f);x({text:ke.name,subtext:`${M.metrics.dropoutProb}: ${gt}% | ${ke.totalStudents} ${M.metrics.totalMonitored.toLowerCase()}`,x:ie.clientX-Re.left,y:ie.clientY-Re.top})}else if(Be.type==="classroom"){let ke=Be.data;x({text:ke.name,subtext:`${ke.teacherName} | ${M.classroom.avgRiskScore}: ${ke.riskScore}%`,x:ie.clientX-Re.left,y:ie.clientY-Re.top})}else if(Be.type==="studentNode"){let ke=Be.data;x({text:ke.featureName[c],subtext:`${c==="es"?"Aporte SHAP":"SHAP Impact"}: ${ke.contribution>0?"+":""}${ke.contribution} | ${ke.value}`,x:ie.clientX-Re.left,y:ie.clientY-Re.top})}return}}x(null)}},mt=()=>{H.current=!1},$=ie=>{if(h||!v.current||!y.current)return;let Re=v.current.getBoundingClientRect(),Ee=(ie.clientX-Re.left)/Re.width*2-1,He=-((ie.clientY-Re.top)/Re.height)*2+1;K.current.set(Ee,He),O.current.setFromCamera(K.current,y.current);let be=Y.current.map(Be=>Be.mesh),he=O.current.intersectObjects(be,!1);if(he.length>0){let Be=Y.current.find(ke=>ke.mesh===he[0].object);if(Be){if(Be.type==="school")i(Be.data),e("meso");else if(Be.type==="classroom"){r(Be.data);let ke=u.find(gt=>gt.classroomId===Be.data.id)||u[0];l(ke)}}}},me=ie=>{ie.preventDefault();let Re=ie.deltaY*.02,Ee=t==="micro"?3.5:t==="meso"?8:12,He=t==="micro"?14:t==="meso"?32:55;k.current.radius=Math.max(Ee,Math.min(He,k.current.radius+Re)),oe()},le=()=>{k.current.radius=Math.max(3.5,k.current.radius-3),oe()},qe=()=>{k.current.radius=Math.min(50,k.current.radius+3),oe()},Ze=()=>{let ie=Math.min(1,y.current?.aspect||1);t==="macro"?(k.current={radius:34/ie,theta:Math.PI/5,phi:Math.PI/2.6},ee.current.set(0,.5,0)):t==="meso"?(k.current={radius:24/ie,theta:Math.PI/6,phi:Math.PI/2.4},ee.current.set(0,1.5,0)):(k.current={radius:9/ie,theta:Math.PI/4,phi:Math.PI/2.3},ee.current.set(0,1.2,0)),oe()};return(0,je.jsxs)("div",{id:"digital-twin-viewport-container",className:"digital-twin-stage relative w-full h-full min-h-[460px] lg:min-h-[580px] overflow-hidden select-none",children:[(0,je.jsx)("div",{ref:v,className:"w-full h-full cursor-grab active:cursor-grabbing",onPointerDown:pt,onPointerMove:qt,onPointerUp:mt,onClick:$,onWheel:me}),!h&&(0,je.jsxs)("div",{className:"twin-floating-control absolute top-4 left-4 z-20 flex flex-wrap items-center gap-1.5 px-2 py-2 rounded-lg text-xs sm:text-sm font-medium",children:[(0,je.jsxs)("button",{id:"btn-macro-level",onClick:()=>e("macro"),className:`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${t==="macro"?"twin-tab-active font-semibold":"twin-tab-passive"}`,children:[(0,je.jsx)(Zs,{className:"w-3.5 h-3.5"}),(0,je.jsx)("span",{children:M.twinLevels.macro.split(":")[0]})]}),(0,je.jsx)("span",{className:"text-slate-600 px-0.5",children:"/"}),(0,je.jsxs)("button",{id:"btn-meso-level",onClick:()=>e("meso"),className:`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${t==="meso"?"twin-tab-active font-semibold":"twin-tab-passive"}`,children:[(0,je.jsx)(Yu,{className:"w-3.5 h-3.5"}),(0,je.jsx)("span",{children:M.twinLevels.meso.split(":")[0]})]}),(0,je.jsx)("span",{className:"text-slate-600 px-0.5",children:"/"}),(0,je.jsxs)("button",{id:"btn-micro-level",onClick:()=>e("micro"),className:`px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 ${t==="micro"?"twin-tab-active font-semibold":"twin-tab-passive"}`,children:[(0,je.jsx)(Ks,{className:"w-3.5 h-3.5"}),(0,je.jsx)("span",{children:M.twinLevels.micro.split(":")[0]})]})]}),(0,je.jsxs)("div",{className:"twin-floating-control absolute top-4 right-14 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-xs",children:[(0,je.jsx)("div",{className:"w-2 h-2 rounded-full bg-emerald-400"}),(0,je.jsxs)("span",{className:"font-medium text-slate-700 dark:text-slate-300",children:[t==="macro"&&`${a.length} ${c==="es"?"Planteles en Red":"Schools in Network"}`,t==="meso"&&(n?.name||a[0]?.name||(c==="es"?"Sin unidad seleccionada":"No school selected")),t==="micro"&&`${o?.anonymousId||"#STD-7489X"} (Anon ID)`]})]}),_&&(0,je.jsxs)("div",{className:"pointer-events-none absolute z-30 transform -translate-x-1/2 -translate-y-full mb-3 bg-slate-950/95 text-white text-xs px-3 py-2 rounded-md shadow-xl border border-slate-700/80 backdrop-blur-sm max-w-xs transition-opacity duration-150",style:{left:_.x,top:_.y},children:[(0,je.jsx)("p",{className:"font-semibold text-slate-100",children:_.text}),_.subtext&&(0,je.jsx)("p",{className:"text-sky-300 text-[11px] mt-0.5",children:_.subtext})]}),(0,je.jsxs)("div",{className:"twin-floating-control absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-20 flex items-center justify-between sm:justify-end gap-2 p-1.5 rounded-lg",children:[(0,je.jsxs)("div",{className:"flex items-center gap-1",children:[(0,je.jsx)("button",{id:"btn-camera-zoom-in",onClick:le,title:"Zoom In",className:"p-2 rounded-md text-slate-300 hover:bg-slate-800/80 transition",children:(0,je.jsx)(Ju,{className:"w-4 h-4"})}),(0,je.jsx)("button",{id:"btn-camera-zoom-out",onClick:qe,title:"Zoom Out",className:"p-2 rounded-md text-slate-300 hover:bg-slate-800/80 transition",children:(0,je.jsx)(Qu,{className:"w-4 h-4"})}),(0,je.jsx)("button",{id:"btn-camera-rotate-toggle",onClick:()=>d(!g),title:"Auto Rotate",className:`p-2 rounded-md transition ${g?"bg-teal-500/15 text-teal-200 font-medium":"text-slate-300 hover:bg-slate-800/80"}`,children:(0,je.jsx)(Ku,{className:`w-4 h-4 ${g?"animate-spin":""}`})}),(0,je.jsx)("button",{id:"btn-camera-reset",onClick:Ze,title:"Reset Camera",className:"p-2 rounded-md text-slate-300 hover:bg-slate-800/80 transition",children:(0,je.jsx)(Zu,{className:"w-4 h-4"})})]}),(0,je.jsxs)("div",{className:"hidden md:flex items-center gap-3 pl-3 pr-2 border-l border-slate-700/80 text-xs",children:[(0,je.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,je.jsx)("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),(0,je.jsxs)("span",{className:"text-slate-400 text-[11px]",children:[M.riskTiers.lowShort," (<35%)"]})]}),(0,je.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,je.jsx)("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),(0,je.jsxs)("span",{className:"text-slate-400 text-[11px]",children:[M.riskTiers.mediumShort," (35-65%)"]})]}),(0,je.jsxs)("div",{className:"flex items-center gap-1.5",children:[(0,je.jsx)("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),(0,je.jsxs)("span",{className:"text-slate-400 text-[11px]",children:[M.riskTiers.highShort," (>65%)"]})]})]})]}),(0,je.jsx)("div",{className:"absolute bottom-4 left-4 z-10 hidden lg:block text-[11px] text-slate-500 pointer-events-none bg-slate-950/40 backdrop-blur-sm px-2.5 py-1 rounded-md",children:M.twinLevels.controlsHint})]})};var En=vi(ju(),1),Ma=JSON.parse(document.getElementById("twin-data").textContent);function _R(){let[t,e]=(0,Ir.useState)(Ma.level||"macro"),[a,n]=(0,Ir.useState)(Ma.schools.find(l=>l.id===Ma.schoolId)||Ma.schools[0]),[i,s]=(0,Ir.useState)(Ma.students.find(l=>l.idHash===Ma.studentId)||Ma.students[0]),[r,o]=(0,Ir.useState)(null);return(0,En.jsxs)("main",{className:Ma.embedded?"embedded-twin":"",children:[!Ma.embedded&&(0,En.jsxs)("div",{className:"selection-bar",children:[(0,En.jsx)("span",{children:"GEMELO DIGITAL"}),t==="micro"?(0,En.jsx)("select",{"aria-label":"Estudiante del gemelo",value:i.idHash,onChange:l=>s(Ma.students.find(u=>u.idHash===l.target.value)),children:Ma.students.map(l=>(0,En.jsx)("option",{value:l.idHash,children:l.anonymousId},l.idHash))}):(0,En.jsx)("select",{"aria-label":"Unidad del gemelo",value:a.id,onChange:l=>{n(Ma.schools.find(u=>u.id===l.target.value)),o(null)},children:Ma.schools.map(l=>(0,En.jsx)("option",{value:l.id,children:l.name},l.id))})]}),(0,En.jsx)(Nb,{level:t,setLevel:e,schools:Ma.schools,students:Ma.students,selectedSchool:a,setSelectedSchool:l=>{l&&n(l)},selectedStudent:i,setSelectedStudent:l=>{l&&s(l)},selectedClassroom:r,setSelectedClassroom:o,simulationParams:Ma.simulation,theme:"dark",language:Ma.language||"es",embeddedMode:!!Ma.embedded})]})}var Q0=class extends Ir.default.Component{constructor(){super(...arguments);this.state={error:""}}static getDerivedStateFromError(a){return{error:a.message}}render(){return this.state.error?(0,En.jsxs)("p",{role:"alert",children:["No se pudo iniciar el visor 3D: ",this.state.error]}):this.props.children}};(0,Ob.createRoot)(document.getElementById("root")).render((0,En.jsx)(Q0,{children:(0,En.jsx)(_R,{})}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

lucide-react/dist/esm/shared/src/utils.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/compass.js:
lucide-react/dist/esm/icons/eye.js:
lucide-react/dist/esm/icons/layers.js:
lucide-react/dist/esm/icons/rotate-cw.js:
lucide-react/dist/esm/icons/sparkles.js:
lucide-react/dist/esm/icons/zoom-in.js:
lucide-react/dist/esm/icons/zoom-out.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.546.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
