!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e=e||self,t(e.diff={}))}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){return s(e)||d(e)||c(e)||u()}function s(e){if(Array.isArray(e))return l(e)}function d(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,t,r){var n=null;if(ae.protected.has(e)||ae.allocated.has(e))n=e;else if(!e||ne(e)){var a=e?e.length:0;r=[];for(var o=0;o<a;o++)r.push(e[o]);n=f(oe,null,r)}if(n)return n;var s="object"==typeof e,d=e;if(e&&s&&"ownerDocument"in d){var c;if(3===d.nodeType){var l=f(ie,d.nodeValue);return B.set(l,e),l}t={},r=[];var u=d.attributes;if(1===d.nodeType&&u&&u.length)for(var h=0;h<u.length;h++){var p=u[h],v=p.name,m=p.value;""===m&&v in d?t[v]=e[v]:t[v]=m}if((1===d.nodeType||11===d.nodeType)&&d.childNodes.length){r=[];for(var g=0;g<d.childNodes.length;g++){var N=d.childNodes[g];r.push(f(N))}}return B.forEach(function(t,r){t===e&&(n=r)}),n=n||f(d.nodeName,t,r),n.attributes=t,n.childNodes.length=0,(c=n.childNodes).push.apply(c,i(r)),B.set(n,e),n}if(s){var y=e.rawNodeName,b=e.nodeName,T=e.nodeValue,E=e.attributes,w=e.childNodes,k=e.children,S=y||b,O=f(S,E||null,k||w);return T&&(O.nodeValue=T),O}for(var x=arguments.length,_=new Array(x>3?x-3:0),C=3;C<x;C++)_[C-3]=arguments[C];_.length&&(r=[r].concat(_)),n=re.get();var A=e===ie;"string"==typeof e?(n.rawNodeName=e,n.nodeName=n.rawNodeName.toLowerCase()):(n.rawNodeName=e,n.nodeName=oe),n.nodeValue="",n.key="",n.childNodes.length=0,n.attributes={};var R=ne(t)||"object"!=typeof t,I=R?t:r,j=ne(I)?I:[I];if(A){var M=j.join("");return n.nodeType=3,n.nodeValue=String(M||""),n}if(n.nodeName===oe?n.nodeType=11:n.nodeType="#comment"===e?8:1,I&&j.length)for(var V=0;V<j.length;V++){var L=j[V];if(ne(L)){var H;(H=n.childNodes).push.apply(H,i(L))}else{if(!L)continue;if(11===L.nodeType&&"string"==typeof L.rawNodeName){var P;(P=n.childNodes).push.apply(P,i(L.childNodes))}else L&&"object"==typeof L?n.childNodes.push(f(L)):n.childNodes.push(f(ie,null,L))}}return t&&"object"==typeof t&&!ne(t)&&(n.attributes=t),"script"===n.nodeName&&n.attributes.src&&(n.key=String(n.attributes.src)),n.attributes&&"key"in n.attributes&&(n.key=String(n.attributes.key)),Y.size&&Y.forEach(function(e,t){(t=e(n))&&(n=f(t))}),n}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r.parser||(r.parser={}),t||(t=ue);var n=new Set(r.parser.rawElements?r.parser.rawElements:pe),a=new Set(r.parser.selfClosingElements||ve),o=/<!--[^]*?(?=-->)-->|<(\/?)([a-z\-\_][a-z0-9\-\_]*)\s*([^>]*?)(\/?)>/gi,i=f("#document-fragment",null,[]),s=[i],d=i,c=-1;if(!e.includes("<")&&e)return Ne(d,e,t),i;for(var l,u,h=0;l=o.exec(e);h++){c>-1&&c+l[0].length<o.lastIndex&&(u=e.slice(c,o.lastIndex-l[0].length))&&Ne(d,u,t);var p=o.lastIndex-l[0].length;if(-1===c&&p>0){var v=e.slice(0,p);v&&!ce.exec(v)&&Ne(d,v,t)}if(c=o.lastIndex,"!"!==l[0][1]){var m=le.exec(l[2]),g=m&&t.tags[m[1]],N=g?g.name||g:l[2];if(!l[1]&&(!l[4]&&me[d.rawNodeName]&&me[d.rawNodeName][N]&&(s.pop(),d=s[s.length-1]),d=d.childNodes[d.childNodes.push(ye(l[2],l[3],t))-1],s.push(d),r.parser.strict||n.has(N))){var y="</".concat(N,">"),b=e.indexOf(y,o.lastIndex);if(n.has(N)){-1===b?c=o.lastIndex=e.length+1:(c=b+y.length,o.lastIndex=c,l[1]=" ");var T=e.slice(l.index+l[0].length,b);Ne(d,T,t)}}if(l[1]||l[4]||a.has(N))for(;d;){if("/"===l[4]&&m){s.pop(),d=s[s.length-1];break}if(g&&d.rawNodeName===N){s.pop(),d=s[s.length-1];break}if(d.rawNodeName===N){s.pop(),d=s[s.length-1];break}var E=ge[d.rawNodeName];{if(!E||!E[N])break;s.pop(),d=s[s.length-1]}}}}var w=e.slice(-1===c?0:c);if(w&&Ne(d,w,t),i.childNodes.length&&"html"===i.childNodes[0].nodeName){var k={before:[],after:[]},S={after:[]},O=i.childNodes[0],x=!0,_=!0;if(O.childNodes=O.childNodes.filter(function(e){if("body"===e.nodeName||"head"===e.nodeName)return"head"===e.nodeName&&(x=!1),"body"===e.nodeName&&(_=!1),!0;1===e.nodeType&&(x&&_?k.before.push(e):!x&&_?k.after.push(e):_||S.after.push(e))}),O.childNodes[0]&&"head"===O.childNodes[0].nodeName){var C=O.childNodes[0].childNodes;C.unshift.apply(C,k.before),C.push.apply(C,k.after)}else{var A=f("head",null,[]);if(A){var R=A.childNodes;R.unshift.apply(R,k.before),R.push.apply(R,k.after),O.childNodes.unshift(A)}}if(O.childNodes[1]&&"body"===O.childNodes[1].nodeName){var I=O.childNodes[1].childNodes;I.push.apply(I,S.after)}else{var j=f("body",null,[]);if(j){var M=j.childNodes;M.push.apply(M,S.after),O.childNodes.push(j)}}}return i}function p(e){be(e);for(var t=0;t<e.childNodes.length;t++)p(e.childNodes[t]);return e}function v(e){Te(e);for(var t=0;t<e.childNodes.length;t++)v(e.childNodes[t]);return B.delete(e),e}function m(){Ee.allocated.forEach(function(e){Ee.free.add(e),Ee.allocated.delete(e),B.delete(e)})}function g(e,t){var r=xe&&location.search.includes(Oe),n=_e&&se.argv.includes(Oe);if(!r&&!n)return Ce;var a=t;return function(t){var r=e.host;e&&r?t="".concat(r.constructor.name," ").concat(t):a&&"function"==typeof a.rawNodeName&&(t="".concat(a.rawNodeName.name," ").concat(t));var n="".concat(t,"-end");if(ke.has(t)){var o=(performance.now()-ke.get(t)).toFixed(3);ke.delete(t),performance.mark(n),performance.measure("".concat(Se," ").concat(t," (").concat(o,"ms)"),t,n)}else ke.set(t,performance.now()),performance.mark(t)}}function N(e){var t=e.state,r=t.isRendering;z.forEach(function(n){var a=n.activeTransaction&&n.activeTransaction.domNode,o=e.domNode;a&&a.contains&&o&&o.contains&&(a.contains(o)&&n.isRendering?(t=n,r=!0):o.contains(a)&&n.isRendering&&(t=n,r=!0))});var n=t,a=n.activeTransaction,o=n.nextTransaction;if(r){var i=e.tasks,s=o||a;t.nextTransaction=e,e.abort();var d=s.promise||Promise.resolve();return e.promise=d.then(function(){return e.aborted=!1,e.state.isRendering=!0,e.state.activeTransaction=e,Je.flow(e,i.slice(1))})}t.isRendering=!0,t.activeTransaction=e}function y(e){var t=e.domNode,r=e.markup,n=e.state,a=e.state.measure,o=e.options,i=o.inner?"innerHTML":"outerHTML";a("should update");var s=t;if("string"==typeof r&&s[i]===r)return e.abort(!0);"string"==typeof r&&(n.markup=r),a("should update")}function b(e){var t=z.get(e);if(t&&(z.delete(e),t.oldTree&&!B.has(t.oldTree)&&(v(t.oldTree),G.forEach(function(e){return e(t.oldTree)}))),e){var r=e;if(r.childNodes&&r.childNodes.length)for(var n=0;n<r.childNodes.length;n++)b(r.childNodes[n]);r.shadowRoot&&b(r.shadowRoot),B.forEach(function(e,t){e===r&&(v(t),G.forEach(function(e){return e(t)}))})}}function T(e){var t=e.state,r=e.domNode,n=e.markup,a=e.options,o=t.previousMarkup,i=a.inner,s=r.outerHTML;o===s&&t.oldTree&&s||(b(r),t.oldTree=f(r),p(t.oldTree),z.set(r,t)),e.newTree||(e.newTree=f(n)),e.oldTree=t.oldTree;var d=e.oldTree,c=e.newTree;if(i&&d&&c){var l=d.nodeName,u=d.attributes,h="string"!=typeof c.rawNodeName,v=11===c.nodeType,m=v&&!h?c.childNodes:c;e.newTree=f(l,u,m)}}function E(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e||(e=Ae),t||(t=Ae);var a=n.svgElements,o=void 0===a?new Set:a,i=(e.nodeName,11===t.nodeType||e.nodeType,e===Ae),s="svg"===t.nodeName||o.has(t),d=null;if(q.forEach(function(r){var n=r(e,t);n&&n===e?d=!0:n&&(t=n)}),d)return r;for(var c={old:new Map,new:new Map},l=0;l<Re.length;l++){var u=Re[l],f=c[u],h=arguments[l],p=h&&h.childNodes;if(p&&p.length)for(var v=0;v<p.length;v++){var m=p[v];m.key&&f.set(m.key,m)}}var g=1===t.nodeType;if(t.nodeName===Ie){if(e.nodeName===Ie&&e.nodeValue!==t.nodeValue)return r.push(D.NODE_VALUE,e,t.nodeValue,e.nodeValue),e.nodeValue=t.nodeValue,r;if(i)return r.push(D.NODE_VALUE,t,t.nodeValue,null),r}if(g){var N=i?Ae:e.attributes,y=t.attributes;for(var b in y){var T=y[b];b in N&&N[b]===y[b]||(i||(N[b]=T),(e&&"script"===e.nodeName||"script"!==t.nodeName||"type"!==b)&&r.push(D.SET_ATTRIBUTE,i?t:e,b,T))}if(!i)for(var w in N)w in y||(r.push(D.REMOVE_ATTRIBUTE,e,w),delete N[w])}var k=t.childNodes||[];if(i){for(var S=0;S<k.length;S++)s&&o.add(k[S]),E(null,k[S],r,n);return r}for(var O=e.childNodes,x=0;x<k.length;x++){var _=O&&O[x],C=k[x],A=C.key;if((s||"svg"===C.nodeName)&&o.add(C),_){var R=_.key,I=c.new.has(R),j=c.old.has(A);if(R||A){if(!I&&!j){O.splice(O.indexOf(_),1,C),E(null,C,r,n),r.push(D.REPLACE_CHILD,C,_),x-=1;continue}if(!I){r.push(D.REMOVE_CHILD,_),O.splice(O.indexOf(_),1),x-=1;continue}if(A!==R){var M=C;A&&j?(M=c.old.get(A),O.splice(O.indexOf(M),1)):M=C,E(null,M,r,n),r.push(D.INSERT_BEFORE,e,M,_),O.splice(x,0,M);continue}}if(_.nodeName===C.nodeName)E(_,C,r,n);else{O[x]=C;var V=O.lastIndexOf(C);V>x&&O.splice(V,1),E(null,C,r,n),r.push(D.REPLACE_CHILD,C,_)}}else O.push(C),E(null,C,r,n),r.push(D.INSERT_BEFORE,e,C,null)}if(O.length!==k.length){for(var L=k.length;L<O.length;L++)r.push(D.REMOVE_CHILD,O[L]);O.length=k.length}return r}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Le,r=arguments.length>2?arguments[2]:void 0,n=f(e),a=B.get(n);if(a)return a;var o=n.nodeName,i=n.rawNodeName,s=void 0===i?o:i,d=n.childNodes,c=void 0===d?[]:d;r=r||"svg"===o;var l=null;$.forEach(function(e,t){(t=e(n))&&(l=t)}),null===l&&(l="#text"===o?t.createTextNode(n.nodeValue||""):"#document-fragment"===o?t.createDocumentFragment():r?t.createElementNS(Ve,s):t.createElement(s),"script"===o&&(l.type="no-execute"));var u=l;B.set(n,u);for(var h=0;h<c.length;h++){var p=w(c[h],t,r);u.appendChild(p)}return u}function k(e){var t=e.state,r=e.state.measure,n=e.oldTree,a=e.newTree,o=e.domNode;if(r("sync trees"),n&&a&&n.nodeName!==a.nodeName&&11!==a.nodeType){e.patches=[D.REPLACE_CHILD,a,n],e.oldTree=t.oldTree=a;var i=w(a);z.delete(o),z.set(i,t),e.domNode=i,"script"===a.nodeName&&t.scriptsToExecute.set(a,a.attributes.type||"")}else e.patches=E(n||null,a||null,[],t);r("sync trees")}function S(e,t){U.get(e).add(t)}function O(e,t){if(!t&&e)U.get(e).clear();else if(e&&t)U.get(e).delete(t);else for(var r=0;r<He.length;r++)U.get(He[r]).clear()}function x(e){for(var t=U.get(e),r=[],n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var s=a[0],d=a.slice(1);return!t.size||"textChanged"!==e&&1!==s.nodeType?r:(t.forEach(function(e){var t=e.apply(void 0,[B.get(s)].concat(i(d)));"object"==typeof t&&t.then&&r.push(t)}),"attached"!==e&&"detached"!==e||s.childNodes.forEach(function(t){r.push.apply(r,i(x.apply(void 0,[e,t].concat(i(d)))))}),r)}function _(e){return Pe&&e&&e.indexOf&&e.includes("&")?(Pe.innerHTML=e,Pe.textContent||""):e}function C(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],n=t.ownerDocument,a=t.svgElements,o=void 0===a?new Set:a,s=e.length,d=0;;){var c=e[d];if(d===s)break;switch(c){case D.SET_ATTRIBUTE:if("break"===function(){var t=e[d+1],a=e[d+2],s=_(e[d+3]);d+=4;var c=o.has(t),l=w(t,n,c),u=l.getAttribute(a),f=x("attributeChanged",t,a,u,s);return p(t),f.length?(Promise.all(f).then(function(){return Fe(t,l,a,s)}),r.push.apply(r,i(f))):Fe(t,l,a,s),"break"}())break;case D.REMOVE_ATTRIBUTE:if("break"===function(){var t=e[d+1],a=e[d+2];d+=3;var s=o.has(t),c=w(t,n,s),l=c.getAttribute(a),u=x("attributeChanged",t,a,l,null);return p(t),u.length?(Promise.all(u).then(function(){return Ye(c,a)}),r.push.apply(r,i(u))):Ye(c,a),"break"}())break;case D.NODE_VALUE:if("break"===function(){var t=e[d+1],a=e[d+2],s=e[d+3],c=o.has(t);d+=4;var l=w(t,n,c);p(t);var u=x("textChanged",t,s,a);return u.length?(Promise.all(u).then(function(){return $e(l,a)}),r.push.apply(r,i(u))):$e(l,a),"break"}())break;case D.INSERT_BEFORE:var l=e[d+1],u=e[d+2],f=e[d+3];d+=4;var h=B.get(l);if(!h)break;var m=o.has(u);p(u);var g=f&&w(f,n,m),N=w(u,n,m);h.insertBefore(N,g||null),r.push.apply(r,i(x("attached",u)));break;case D.REPLACE_CHILD:if("break"===function(){var t=e[d+1],a=e[d+2];d+=3;var s=o.has(t),c=B.get(a),l=w(t,n,s);if(!c||!c.parentNode)return"break";p(t);var u=U.get("attached").size,f=U.get("detached").size,h=U.get("replaced").size;if(!u&&!f&&!h)return c.parentNode&&(v(a),c.parentNode.replaceChild(l,c)),"break";c.parentNode&&c.parentNode.insertBefore(l,c);var m=x("attached",t),g=x("detached",a),N=x("replaced",a,l),y=[].concat(i(m),i(g),i(N));return y.length?(Promise.all(y).then(function(){c.parentNode&&c.parentNode.removeChild(c),v(a)}),r.push.apply(r,i(y))):(c.parentNode&&c.parentNode.removeChild(c),v(a)),"break"}())break;case D.REMOVE_CHILD:if("break"===function(){var t=e[d+1];d+=2;var n=B.get(t);if(!n||!n.parentNode)return"break";var a=x("detached",t);return a.length?(Promise.all(a).then(function(){n.parentNode&&n.parentNode.removeChild(n),v(t)}),r.push.apply(r,i(a))):(n.parentNode&&n.parentNode.removeChild(n),v(t)),"break"}())break}}return r}function A(e){var t=e.domNode,r=e.state,n=e.state,a=n.measure,o=n.scriptsToExecute,s=e.patches,d=t.ownerDocument,c=e.promises||[];r.ownerDocument=d||document;var l=function(e){"script"===e.nodeName&&(o.set(e,e.attributes.type),e.attributes.type="no-execute")};$.add(l),a("patch node"),c.push.apply(c,i(C(s,r))),a("patch node"),$.delete(l),e.promises=c}function R(e){var t=e.promises;return t&&t.length?e.promise=Promise.all(t).then(function(){return e.end()}):e.promise=Promise.resolve(e.end())}function I(e){var t=e.state,r=e.markup,n=e.options,a=t.measure,o=n.inner;if("string"==typeof r){a("parsing markup for new tree");var i=h(r,void 0,n),s=i.childNodes,d=f(o?s:s[0]||s);d&&(e.newTree=d),a("parsing markup for new tree")}}function j(e){return e.replace(/[&<>]/g,function(e){return"&#".concat(e.charCodeAt(0),";")})}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.inner=!0,r.executeScripts=!("executeScripts"in r)||r.executeScripts,r.tasks=r.tasks||qe,Je.create(e,t,r).start()}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r.inner=!1,r.tasks=r.tasks||qe,r.executeScripts=!("executeScripts"in r)||r.executeScripts,Je.create(e,t,r).start()}function L(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=f("#text","");if(!e)return a;if("string"==typeof e&&(e=[e]),1===e.length&&!r.length){var o=L.isStrict;if(L.isStrict=!1,!e[0])return a;var i=h(e[0],void 0,{parser:{strict:o}}),s=i.childNodes;return f(1===s.length?s[0]:s)}var d="",c={attributes:{},children:{},tags:{}};e.forEach(function(e,t){if(d+=e,r.length){var n=Xe(r),a=d.trim().slice(-1),o=d.lastIndexOf(">")<d.lastIndexOf("<"),i=Boolean(a.match(We)),s="string"==typeof n,l="object"==typeof n,u="".concat(de).concat(t,"__");i&&!s?(c.tags[t]=n,d+=u):o?(c.attributes[t]=n,d+=u):Qe(n)||l?(c.children[t]=f(n),d+=u):n&&(d+=n)}});var l=L.isStrict;L.isStrict=!1;var u=h(d,c,{parser:{strict:l}}),p=u.childNodes;return f(1===p.length?p[0]:p)}function H(e){L.isStrict=!0;for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return L.apply(void 0,[e].concat(r))}function P(e){var t="function"==typeof e,r=e.subscribe,n=e.unsubscribe,a=e.createTreeHook,o=e.createNodeHook,i=e.syncTreeHook,s=e.releaseHook;return t&&F.add(e),r&&r(Ke),a&&Y.add(a),o&&$.add(o),i&&q.add(i),s&&G.add(s),function(){t&&F.delete(e),n&&n(Ke),Y.delete(a),$.delete(o),q.delete(i),G.delete(s)}}var D={SET_ATTRIBUTE:0,REMOVE_ATTRIBUTE:1,NODE_VALUE:2,INSERT_BEFORE:3,REPLACE_CHILD:4,REMOVE_CHILD:5},z=new Map,B=new Map,U=new Map,F=new Set,Y=new Set,$=new Set,q=new Set,G=new Set,J=new Set,K=Object.freeze({__proto__:null,StateCache:z,NodeCache:B,TransitionCache:U,MiddlewareCache:F,CreateTreeHookCache:Y,CreateNodeHookCache:$,SyncTreeHookCache:q,ReleaseHookCache:G,ParserHookCache:J}),Q=new Set,W=new Set,X=new Set,Z=function(){return{rawNodeName:"",nodeName:"",nodeValue:"",nodeType:1,key:"",childNodes:[],attributes:{}}},ee={free:Q,allocated:W,protected:X},te=Q.values(),re={size:1e4,memory:ee,fill:function(){for(var e=this,t=Q.size;t<this.size;t++)Q.add(Z());this.size<Q.size&&Q.forEach(function(t){Q.size!==e.size&&Q.delete(t)})},get:function(){var e=te.next(),t=e.value,r=void 0===t?Z():t;return e.done&&(te=Q.values()),Q.delete(r),W.add(r),r},protect:function(e){W.delete(e),X.add(e)},unprotect:function(e){X.has(e)?(X.delete(e),Q.add(e)):W.has(e)&&(W.delete(e),Q.add(e))}};re.fill();var ne=Array.isArray,ae=re.memory,oe="#document-fragment",ie="#text",se="undefined"!=typeof process?process:{env:{NODE_ENV:"development"},argv:[]},de="__DIFFHTML__",ce=/<!.*>/i,le=new RegExp("".concat(de,"([^_]*)__")),ue={tags:[],attributes:{},children:{}},fe=Object.assign,he=Array.isArray,pe=["script","noscript","style","code","template"],ve=["meta","img","link","input","area","br","hr","area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],me={li:{li:!0},p:{p:!0,div:!0},td:{td:!0,th:!0},th:{td:!0,th:!0}},ge={li:{ul:!0,ol:!0},a:{div:!0},b:{div:!0},i:{div:!0},p:{div:!0},td:{tr:!0,table:!0},th:{tr:!0,table:!0}},Ne=function(e,t,r){var n;if(!("childNodes"in e.attributes)){if(t&&!ce.test(t)&&!le.test(t))return e.childNodes.push(f("#text",t));for(var a=[],o=t.split(le),s=0;s<o.length;s++){var d=o[s];if(d)if(s%2==1){var c=r.children[d],l=d in r.children?c:f("#text","".concat(de).concat(d,"__"));if(!l)continue;var u=11===l.nodeType;"string"==typeof l.rawNodeName&&u?a.push.apply(a,i(l.childNodes)):a.push(l)}else ce.test(d)||a.push(f("#text",d))}(n=e.childNodes).push.apply(n,a)}},ye=function(e,t,r,n){var a=null,o=/\b([_a-z][_a-z0-9\-:]*)\s*(=\s*("([^"]+)"|'([^']+)'|(\S+)))?/gi;if(a=le.exec(e))return ye(r.tags[a[1]],t,r);for(var i,s={};i=o.exec(t||"");){var d="string"==typeof e,c=i[1],l=i[6]||i[5]||i[4],u=l||(d?i[1]:l||!0),h=String(u).match(le);if(h&&h.length)for(var p=String(u).split(le),v=le.exec(c),m=v?r.attributes[v[1]]:c,g=0;g<p.length;g++){var N=p[g];if(N)if(g%2==1){var y="object"==typeof m,b=r.attributes[N],T="".concat(de).concat(N,"__");s[m]?s[m]+=N in r.attributes?b:T:y?m&&!he(m)&&fe(s,m):m&&(s[m]=N in r.attributes?b:T)}else s[m]?s[m]+=N:s[m]=N}else if(h=le.exec(c)){var E=r.attributes[h[1]];"object"!=typeof E||he(E)?s[E]="":fe(s,E)}else s[c]="''"===u||'""'===u?"":u}return f(e,s,s.childNodes||[])},be=re.protect,Te=re.unprotect,Ee=re.memory,we=Object.freeze({__proto__:null,protectVTree:p,unprotectVTree:v,gc:m}),ke=new Map,Se="diffHTML",Oe="diff_perf",xe="undefined"!=typeof location,_e=se.argv,Ce=function(){},Ae={},Re=["old","new"],Ie="#text",je="object"==typeof global?global:window||{},Me=Symbol.for("diffHTML"),Ve="http://www.w3.org/2000/svg",Le=je.document||null,He=["attached","detached","replaced","attributeChanged","textChanged"];He.forEach(function(e){return U.set(e,new Set)});var Pe=je.document?document.createElement("div"):null,De=Object.keys,ze=new Set,Be=new Set,Ue=["class","checked","disabled","selected"],Fe=function(e,t,r,n){var a="object"==typeof n&&n,o="function"==typeof n,i="symbol"==typeof n,s=0===r.indexOf("on"),d=s?r.toLowerCase():r,c=e.nodeName+"-"+d,l=t;if(Be.has(c))t[d]=n;else if(!ze.has(c))try{t[d]=n,Be.add(c)}catch(e){ze.add(c)}if(a||o||i){if(a&&"style"===d)for(var u=De(n),f=0;f<u.length;f++)l.style[u[f]]=n[u[f]]}else{var h=null===n||void 0===n;d&&l.setAttribute(d,h?"":n)}},Ye=function(e,t){var r=0===t.indexOf("on");e.removeAttribute(t);var n=e.nodeName+"-"+t;if(Be.has(n)){var a=e;r?a[t]=void 0:delete a[t],Ue.includes(t)&&(e[t]=!1)}else if(!ze.has(n))try{var o=e;r?o[t]=void 0:delete o[t],Ue.includes(t)&&(e[t]=!1),Be.add(n)}catch(e){ze.add(n)}},$e=function(e,t){var r=e;t.includes("&")?r.nodeValue=_(t):r.nodeValue=t},qe=[N,y,T,k,A,R],Ge={schedule:N,shouldUpdate:y,reconcileTrees:T,syncTrees:k,patchNode:A,endAsPromise:R},Je=function(){function e(r,n,o){t(this,e),a(this,"domNode",""),a(this,"markup",""),a(this,"oldTree",void 0),a(this,"newTree",void 0),a(this,"promise",void 0),a(this,"promises",void 0),a(this,"tasks",[]),a(this,"patches",[]),this.domNode=r,this.markup=n,this.options=o,this.state=z.get(r)||{measure:g(r,n),svgElements:new Set,scriptsToExecute:new Map},o.tasks&&o.tasks.length&&(this.tasks=i(o.tasks)),this.endedCallbacks=new Set,z.set(r,this.state)}return n(e,null,[{key:"create",value:function(t,r,n){return new e(t,r,n)}},{key:"flow",value:function(e,t){for(var r=e,n=0;n<t.length;n++){if(e.aborted)return r;if(void 0!==(r=t[n](e))&&r!==e)return r}return r}},{key:"assert",value:function(e){}},{key:"invokeMiddleware",value:function(e){var t=e.tasks;F.forEach(function(r){var n=r(e);n&&t.push(n)})}}]),n(e,[{key:"start",value:function(){var t=this.state.measure,r=this.tasks,n=r.pop();return this.aborted=!1,e.invokeMiddleware(this),t("render"),n&&r.push(n),e.flow(this,r)}},{key:"abort",value:function(e){if(this.aborted=!0,e)return this.tasks[this.tasks.length-1](this)}},{key:"end",value:function(){var e=this,t=this.state,r=this.domNode,n=this.options,a=t.measure,o=t.svgElements,i=t.scriptsToExecute;return a("finalize"),this.completed=!0,o.clear(),t.isRendering=!1,i.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=B.get(t);e?r.setAttribute("type",e):r.removeAttribute("type")}),t.previousMarkup="outerHTML"in r?r.outerHTML:"",n.executeScripts&&i.forEach(function(e,r){var n=B.get(r),a=n.cloneNode(!0);z.has(n)&&(b(n),z.set(a,t)),B.set(r,a),n.parentNode.replaceChild(a,n)}),i.clear(),a("finalize"),a("render"),m(),this.endedCallbacks.forEach(function(t){return t(e)}),this.endedCallbacks.clear(),this}},{key:"onceEnded",value:function(e){this.endedCallbacks.add(e)}}]),e}(),Ke=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({decodeEntities:_,escape:j,makeMeasure:g,memory:we,Pool:re,process:se,PATCH_TYPE:D,createNode:w,syncTree:E},K),Qe=Array.isArray,We=/(<|\/)/,Xe=function(e){var t=e.shift();return"string"==typeof t?j(_(t)):t};L.isStrict=!1,L.strict=H;var Ze=Object.assign;qe.splice(qe.indexOf(T),0,I),Ze(Ke,{parse:h,defaultTasks:qe,tasks:Ge,VERSION:"1.0.0-beta.18"});var et={};et.VERSION="1.0.0-beta.18",et.addTransitionState=S,et.removeTransitionState=O,et.release=b,et.createTree=f,et.use=P,et.outerHTML=V,et.innerHTML=M,et.html=L,et.Internals=Ke;var tt=je;if(Me in je){var rt=tt[Me];"1.0.0-beta.18"!==rt.VERSION&&console.log("Tried to load ".concat("1.0.0-beta.18"," after ").concat(rt.VERSION)),Ze(et,tt[Me])}else tt[Me]=et,tt.devTools&&(tt.unsubscribeDevTools=P(tt.devTools(Ke)));e.Internals=Ke,e.VERSION="1.0.0-beta.18",e.addTransitionState=S,e.createTree=f,e.default=et,e.html=L,e.innerHTML=M,e.outerHTML=V,e.release=b,e.removeTransitionState=O,e.use=P,Object.defineProperty(e,"__esModule",{value:!0})});