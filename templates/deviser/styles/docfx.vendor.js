/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
  * Bootstrap v4.6.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
 !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery)}(this,(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=n(e);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function s(t){var e=this,n=!1;return i.default(this).one(l.TRANSITION_END,(function(){n=!0})),setTimeout((function(){n||l.triggerTransitionEnd(e)}),t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i.default(t).css("transition-duration"),n=i.default(t).css("transition-delay"),o=parseFloat(e),r=parseFloat(n);return o||r?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i.default(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],a=r&&l.isElement(r)?"element":null===(s=r)||"undefined"==typeof s?""+s:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var s},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?l.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof i.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=i.default.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};l.jQueryDetection(),i.default.fn.emulateTransitionEnd=s,i.default.event.special[l.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(i.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var u="alert",f=i.default.fn[u],d=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){i.default.removeData(this._element,"bs.alert"),this._element=null},e._getRootElement=function(t){var e=l.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=i.default(t).closest(".alert")[0]),n},e._triggerCloseEvent=function(t){var e=i.default.Event("close.bs.alert");return i.default(t).trigger(e),e},e._removeElement=function(t){var e=this;if(i.default(t).removeClass("show"),i.default(t).hasClass("fade")){var n=l.getTransitionDurationFromElement(t);i.default(t).one(l.TRANSITION_END,(function(n){return e._destroyElement(t,n)})).emulateTransitionEnd(n)}else this._destroyElement(t)},e._destroyElement=function(t){i.default(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.alert");o||(o=new t(this),n.data("bs.alert",o)),"close"===e&&o[e](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),t}();i.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),i.default.fn[u]=d._jQueryInterface,i.default.fn[u].Constructor=d,i.default.fn[u].noConflict=function(){return i.default.fn[u]=f,d._jQueryInterface};var c=i.default.fn.button,h=function(){function t(t){this._element=t,this.shouldAvoidTriggerChange=!1}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=i.default(this._element).closest('[data-toggle="buttons"]')[0];if(n){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var r=n.querySelector(".active");r&&i.default(r).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),this.shouldAvoidTriggerChange||i.default(o).trigger("change")),o.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&i.default(this._element).toggleClass("active"))},e.dispose=function(){i.default.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this),r=o.data("bs.button");r||(r=new t(this),o.data("bs.button",r)),r.shouldAvoidTriggerChange=n,"toggle"===e&&r[e]()}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),t}();i.default(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var e=t.target,n=e;if(i.default(e).hasClass("btn")||(e=i.default(e).closest(".btn")[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var o=e.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"INPUT"!==n.tagName&&"LABEL"===e.tagName||h._jQueryInterface.call(i.default(e),"toggle","INPUT"===n.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var e=i.default(t.target).closest(".btn")[0];i.default(e).toggleClass("focus",/^focus(in)?$/.test(t.type))})),i.default(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var r=0,a=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<a;r++){var s=t[r];"true"===s.getAttribute("aria-pressed")?s.classList.add("active"):s.classList.remove("active")}})),i.default.fn.button=h._jQueryInterface,i.default.fn.button.Constructor=h,i.default.fn.button.noConflict=function(){return i.default.fn.button=c,h._jQueryInterface};var p="carousel",m=".bs.carousel",g=i.default.fn[p],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},_={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},b={TOUCH:"touch",PEN:"pen"},y=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide("next")},e.nextWhenVisible=function(){var t=i.default(this._element);!document.hidden&&t.is(":visible")&&"hidden"!==t.css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide("prev")},e.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=this._element.querySelector(".active.carousel-item");var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)i.default(this._element).one("slid.bs.carousel",(function(){return e.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var o=t>n?"next":"prev";this._slide(o,this._items[t])}},e.dispose=function(){i.default(this._element).off(m),i.default.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=a({},v,t),l.typeCheckConfig(p,t,_),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&i.default(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&i.default(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var e=function(e){t._pointerEvent&&b[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},n=function(e){t._pointerEvent&&b[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(i.default(this._element).on("pointerdown.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("pointerup.bs.carousel",(function(t){return n(t)})),this._element.classList.add("pointer-event")):(i.default(this._element).on("touchstart.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),i.default(this._element).on("touchend.bs.carousel",(function(t){return n(t)})))}},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var a=(o+("prev"===t?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),r=i.default.Event("slide.bs.carousel",{relatedTarget:t,direction:e,from:o,to:n});return i.default(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));i.default(e).removeClass("active");var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&i.default(n).addClass("active")}},e._updateInterval=function(){var t=this._activeElement||this._element.querySelector(".active.carousel-item");if(t){var e=parseInt(t.getAttribute("data-interval"),10);e?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=e):this._config.interval=this._config.defaultInterval||this._config.interval}},e._slide=function(t,e){var n,o,r,a=this,s=this._element.querySelector(".active.carousel-item"),u=this._getItemIndex(s),f=e||s&&this._getItemByDirection(t,s),d=this._getItemIndex(f),c=Boolean(this._interval);if("next"===t?(n="carousel-item-left",o="carousel-item-next",r="left"):(n="carousel-item-right",o="carousel-item-prev",r="right"),f&&i.default(f).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(f,r).isDefaultPrevented()&&s&&f){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(f),this._activeElement=f;var h=i.default.Event("slid.bs.carousel",{relatedTarget:f,direction:r,from:u,to:d});if(i.default(this._element).hasClass("slide")){i.default(f).addClass(o),l.reflow(f),i.default(s).addClass(n),i.default(f).addClass(n);var p=l.getTransitionDurationFromElement(s);i.default(s).one(l.TRANSITION_END,(function(){i.default(f).removeClass(n+" "+o).addClass("active"),i.default(s).removeClass("active "+o+" "+n),a._isSliding=!1,setTimeout((function(){return i.default(a._element).trigger(h)}),0)})).emulateTransitionEnd(p)}else i.default(s).removeClass("active"),i.default(f).addClass("active"),this._isSliding=!1,i.default(this._element).trigger(h);c&&this.cycle()}},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data("bs.carousel"),o=a({},v,i.default(this).data());"object"==typeof e&&(o=a({},o,e));var r="string"==typeof e?e:o.slide;if(n||(n=new t(this,o),i.default(this).data("bs.carousel",n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if("undefined"==typeof n[r])throw new TypeError('No method named "'+r+'"');n[r]()}else o.interval&&o.ride&&(n.pause(),n.cycle())}))},t._dataApiClickHandler=function(e){var n=l.getSelectorFromElement(this);if(n){var o=i.default(n)[0];if(o&&i.default(o).hasClass("carousel")){var r=a({},i.default(o).data(),i.default(this).data()),s=this.getAttribute("data-slide-to");s&&(r.interval=!1),t._jQueryInterface.call(i.default(o),r),s&&i.default(o).data("bs.carousel").to(s),e.preventDefault()}}},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return v}}]),t}();i.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",y._dataApiClickHandler),i.default(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,n=t.length;e<n;e++){var o=i.default(t[e]);y._jQueryInterface.call(o,o.data())}})),i.default.fn[p]=y._jQueryInterface,i.default.fn[p].Constructor=y,i.default.fn[p].noConflict=function(){return i.default.fn[p]=g,y._jQueryInterface};var w="collapse",E=i.default.fn[w],T={toggle:!0,parent:""},C={toggle:"boolean",parent:"(string|element)"},S=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var r=n[i],a=l.getSelectorFromElement(r),s=[].slice.call(document.querySelectorAll(a)).filter((function(e){return e===t}));null!==a&&s.length>0&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){i.default(this._element).hasClass("show")?this.hide():this.show()},e.show=function(){var e,n,o=this;if(!this._isTransitioning&&!i.default(this._element).hasClass("show")&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(e=null),!(e&&(n=i.default(e).not(this._selector).data("bs.collapse"))&&n._isTransitioning))){var r=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call(i.default(e).not(this._selector),"hide"),n||i.default(e).data("bs.collapse",null));var a=this._getDimension();i.default(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[a]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(a[0].toUpperCase()+a.slice(1)),u=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,(function(){i.default(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[a]="",o.setTransitioning(!1),i.default(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(u),this._element.style[a]=this._element[s]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&i.default(this._element).hasClass("show")){var e=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",l.reflow(this._element),i.default(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var r=0;r<o;r++){var a=this._triggerArray[r],s=l.getSelectorFromElement(a);if(null!==s)i.default([].slice.call(document.querySelectorAll(s))).hasClass("show")||i.default(a).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var u=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,(function(){t.setTransitioning(!1),i.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(u)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){i.default.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=a({},T,t)).toggle=Boolean(t.toggle),l.typeCheckConfig(w,t,C),t},e._getDimension=function(){return i.default(this._element).hasClass("width")?"width":"height"},e._getParent=function(){var e,n=this;l.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(e.querySelectorAll(o));return i.default(r).each((function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])})),e},e._addAriaAndCollapsedClass=function(t,e){var n=i.default(t).hasClass("show");e.length&&i.default(e).toggleClass("collapsed",!n).attr("aria-expanded",n)},t._getTargetFromElement=function(t){var e=l.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.collapse"),r=a({},T,n.data(),"object"==typeof e&&e?e:{});if(!o&&r.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new t(this,r),n.data("bs.collapse",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return T}}]),t}();i.default(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=i.default(this),n=l.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(n));i.default(o).each((function(){var t=i.default(this),n=t.data("bs.collapse")?"toggle":e.data();S._jQueryInterface.call(t,n)}))})),i.default.fn[w]=S._jQueryInterface,i.default.fn[w].Constructor=S,i.default.fn[w].noConflict=function(){return i.default.fn[w]=E,S._jQueryInterface};var D="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,N=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(D&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();var k=D&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),N))}};function A(t){return t&&"[object Function]"==={}.toString.call(t)}function I(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function O(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function x(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=I(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:x(O(t))}function j(t){return t&&t.referenceNode?t.referenceNode:t}var L=D&&!(!window.MSInputMethodContext||!document.documentMode),P=D&&/MSIE 10/.test(navigator.userAgent);function F(t){return 11===t?L:10===t?P:L||P}function R(t){if(!t)return document.documentElement;for(var e=F(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===I(n,"position")?R(n):n:t?t.ownerDocument.documentElement:document.documentElement}function H(t){return null!==t.parentNode?H(t.parentNode):t}function M(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var a,s,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(s=(a=l).nodeName)||"HTML"!==s&&R(a.firstElementChild)!==a?R(l):l;var u=H(t);return u.host?M(u.host,e):M(t,H(e).host)}function q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[n]}return t[n]}function B(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=q(e,"top"),o=q(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function Q(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function W(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],F(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function U(t){var e=t.body,n=t.documentElement,i=F(10)&&getComputedStyle(n);return{height:W("Height",e,n,i),width:W("Width",e,n,i)}}var V=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),z=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function K(t){return X({},t,{right:t.left+t.width,bottom:t.top+t.height})}function G(t){var e={};try{if(F(10)){e=t.getBoundingClientRect();var n=q(t,"top"),i=q(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?U(t.ownerDocument):{},a=r.width||t.clientWidth||o.width,s=r.height||t.clientHeight||o.height,l=t.offsetWidth-a,u=t.offsetHeight-s;if(l||u){var f=I(t);l-=Q(f,"x"),u-=Q(f,"y"),o.width-=l,o.height-=u}return K(o)}function $(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=F(10),o="HTML"===e.nodeName,r=G(t),a=G(e),s=x(t),l=I(e),u=parseFloat(l.borderTopWidth),f=parseFloat(l.borderLeftWidth);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=K({top:r.top-a.top-u,left:r.left-a.left-f,width:r.width,height:r.height});if(d.marginTop=0,d.marginLeft=0,!i&&o){var c=parseFloat(l.marginTop),h=parseFloat(l.marginLeft);d.top-=u-c,d.bottom-=u-c,d.left-=f-h,d.right-=f-h,d.marginTop=c,d.marginLeft=h}return(i&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(d=B(d,e)),d}function J(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=$(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),a=e?0:q(n),s=e?0:q(n,"left"),l={top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:r};return K(l)}function Z(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===I(t,"position"))return!0;var n=O(t);return!!n&&Z(n)}function tt(t){if(!t||!t.parentElement||F())return document.documentElement;for(var e=t.parentElement;e&&"none"===I(e,"transform");)e=e.parentElement;return e||document.documentElement}function et(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},a=o?tt(t):M(t,j(e));if("viewport"===i)r=J(a,o);else{var s=void 0;"scrollParent"===i?"BODY"===(s=x(O(e))).nodeName&&(s=t.ownerDocument.documentElement):s="window"===i?t.ownerDocument.documentElement:i;var l=$(s,a,o);if("HTML"!==s.nodeName||Z(a))r=l;else{var u=U(t.ownerDocument),f=u.height,d=u.width;r.top+=l.top-l.marginTop,r.bottom=f+l.top,r.left+=l.left-l.marginLeft,r.right=d+l.left}}var c="number"==typeof(n=n||0);return r.left+=c?n:n.left||0,r.top+=c?n:n.top||0,r.right-=c?n:n.right||0,r.bottom-=c?n:n.bottom||0,r}function nt(t){return t.width*t.height}function it(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=et(n,i,r,o),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},l=Object.keys(s).map((function(t){return X({key:t},s[t],{area:nt(s[t])})})).sort((function(t,e){return e.area-t.area})),u=l.filter((function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight})),f=u.length>0?u[0].key:l[0].key,d=t.split("-")[1];return f+(d?"-"+d:"")}function ot(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?tt(e):M(e,j(n));return $(n,o,i)}function rt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function at(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function st(t,e,n){n=n.split("-")[0];var i=rt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),a=r?"top":"left",s=r?"left":"top",l=r?"height":"width",u=r?"width":"height";return o[a]=e[a]+e[l]/2-i[l]/2,o[s]=n===s?e[s]-i[u]:e[at(s)],o}function lt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function ut(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));var i=lt(t,(function(t){return t[e]===n}));return t.indexOf(i)}(t,"name",n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&A(n)&&(e.offsets.popper=K(e.offsets.popper),e.offsets.reference=K(e.offsets.reference),e=n(e,t))})),e}function ft(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=ot(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=it(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=st(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=ut(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function dt(t,e){return t.some((function(t){var n=t.name;return t.enabled&&n===e}))}function ct(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function ht(){return this.state.isDestroyed=!0,dt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ct("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function pt(t){var e=t.ownerDocument;return e?e.defaultView:window}function mt(t,e,n,i){n.updateBound=i,pt(t).addEventListener("resize",n.updateBound,{passive:!0});var o=x(t);return function t(e,n,i,o){var r="BODY"===e.nodeName,a=r?e.ownerDocument.defaultView:e;a.addEventListener(n,i,{passive:!0}),r||t(x(a.parentNode),n,i,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function gt(){this.state.eventsEnabled||(this.state=mt(this.reference,this.options,this.state,this.scheduleUpdate))}function vt(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,pt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function _t(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function bt(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&_t(e[n])&&(i="px"),t.style[n]=e[n]+i}))}var yt=D&&/Firefox/i.test(navigator.userAgent);function wt(t,e,n){var i=lt(t,(function(t){return t.name===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}));if(!o){var r="`"+e+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var Et=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Tt=Et.slice(3);function Ct(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Tt.indexOf(t),i=Tt.slice(n+1).concat(Tt.slice(0,n));return e?i.reverse():i}var St="flip",Dt="clockwise",Nt="counterclockwise";function kt(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),a=t.split(/(\+|\-)/).map((function(t){return t.trim()})),s=a.indexOf(lt(a,(function(t){return-1!==t.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return(u=u.map((function(t,i){var o=(1===i?!r:r)?"height":"width",a=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],a=o[2];if(!r)return t;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return K(s)[e]/100*r}if("vh"===a||"vw"===a)return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;return r}(t,o,e,n)}))}))).forEach((function(t,e){t.forEach((function(n,i){_t(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}var At={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",u=s?"width":"height",f={start:z({},l,r[l]),end:z({},l,r[l]+r[u]-a[u])};t.offsets.popper=X({},a,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,a=o.reference,s=i.split("-")[0],l=void 0;return l=_t(+n)?[+n,0]:kt(n,r,a,s),"left"===s?(r.top+=l[0],r.left-=l[1]):"right"===s?(r.top+=l[0],r.left+=l[1]):"top"===s?(r.left+=l[0],r.top-=l[1]):"bottom"===s&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||R(t.instance.popper);t.instance.reference===n&&(n=R(n));var i=ct("transform"),o=t.instance.popper.style,r=o.top,a=o.left,s=o[i];o.top="",o.left="",o[i]="";var l=et(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=r,o.left=a,o[i]=s,e.boundaries=l;var u=e.priority,f=t.offsets.popper,d={primary:function(t){var n=f[t];return f[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(f[t],l[t])),z({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=f[n];return f[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(f[n],l[t]-("right"===t?f.width:f.height))),z({},n,i)}};return u.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=X({},f,d[e](t))})),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",u=a?"width":"height";return n[s]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[u]),n[l]>r(i[s])&&(t.offsets.popper[l]=r(i[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!wt(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,a=r.popper,s=r.reference,l=-1!==["left","right"].indexOf(o),u=l?"height":"width",f=l?"Top":"Left",d=f.toLowerCase(),c=l?"left":"top",h=l?"bottom":"right",p=rt(i)[u];s[h]-p<a[d]&&(t.offsets.popper[d]-=a[d]-(s[h]-p)),s[d]+p>a[h]&&(t.offsets.popper[d]+=s[d]+p-a[h]),t.offsets.popper=K(t.offsets.popper);var m=s[d]+s[u]/2-p/2,g=I(t.instance.popper),v=parseFloat(g["margin"+f]),_=parseFloat(g["border"+f+"Width"]),b=m-t.offsets.popper[d]-v-_;return b=Math.max(Math.min(a[u]-p,b),0),t.arrowElement=i,t.offsets.arrow=(z(n={},d,Math.round(b)),z(n,c,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(dt(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=et(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=at(i),r=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case St:a=[i,o];break;case Dt:a=Ct(i);break;case Nt:a=Ct(i,!0);break;default:a=e.behavior}return a.forEach((function(s,l){if(i!==s||a.length===l+1)return t;i=t.placement.split("-")[0],o=at(i);var u=t.offsets.popper,f=t.offsets.reference,d=Math.floor,c="left"===i&&d(u.right)>d(f.left)||"right"===i&&d(u.left)<d(f.right)||"top"===i&&d(u.bottom)>d(f.top)||"bottom"===i&&d(u.top)<d(f.bottom),h=d(u.left)<d(n.left),p=d(u.right)>d(n.right),m=d(u.top)<d(n.top),g=d(u.bottom)>d(n.bottom),v="left"===i&&h||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,_=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(_&&"start"===r&&h||_&&"end"===r&&p||!_&&"start"===r&&m||!_&&"end"===r&&g),y=!!e.flipVariationsByContent&&(_&&"start"===r&&p||_&&"end"===r&&h||!_&&"start"===r&&g||!_&&"end"===r&&m),w=b||y;(c||v||w)&&(t.flipped=!0,(c||v)&&(i=a[l+1]),w&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=X({},t.offsets.popper,st(t.instance.popper,t.offsets.reference,t.placement)),t=ut(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=r[n]-(s?o[a?"width":"height"]:0),t.placement=at(e),t.offsets.popper=K(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!wt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=lt(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=lt(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==r?r:e.gpuAcceleration,s=R(t.instance.popper),l=G(s),u={position:o.position},f=function(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,a=Math.floor,s=function(t){return t},l=r(o.width),u=r(i.width),f=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),c=e?f||d||l%2==u%2?r:a:s,h=e?r:s;return{left:c(l%2==1&&u%2==1&&!d&&e?i.left-1:i.left),top:h(i.top),bottom:h(i.bottom),right:c(i.right)}}(t,window.devicePixelRatio<2||!yt),d="bottom"===n?"top":"bottom",c="right"===i?"left":"right",h=ct("transform"),p=void 0,m=void 0;if(m="bottom"===d?"HTML"===s.nodeName?-s.clientHeight+f.bottom:-l.height+f.bottom:f.top,p="right"===c?"HTML"===s.nodeName?-s.clientWidth+f.right:-l.width+f.right:f.left,a&&h)u[h]="translate3d("+p+"px, "+m+"px, 0)",u[d]=0,u[c]=0,u.willChange="transform";else{var g="bottom"===d?-1:1,v="right"===c?-1:1;u[d]=m*g,u[c]=p*v,u.willChange=d+", "+c}var _={"x-placement":t.placement};return t.attributes=X({},_,t.attributes),t.styles=X({},u,t.styles),t.arrowStyles=X({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return bt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&bt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=ot(o,e,t,n.positionFixed),a=it(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",a),bt(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},It=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};V(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=k(this.update.bind(this)),this.options=X({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(X({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=X({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return X({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&A(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Y(t,[{key:"update",value:function(){return ft.call(this)}},{key:"destroy",value:function(){return ht.call(this)}},{key:"enableEventListeners",value:function(){return gt.call(this)}},{key:"disableEventListeners",value:function(){return vt.call(this)}}]),t}();It.Utils=("undefined"!=typeof window?window:global).PopperUtils,It.placements=Et,It.Defaults=At;var Ot="dropdown",xt=i.default.fn[Ot],jt=new RegExp("38|40|27"),Lt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Pt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Ft=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!i.default(this._element).hasClass("disabled")){var e=i.default(this._menu).hasClass("show");t._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||i.default(this._element).hasClass("disabled")||i.default(this._menu).hasClass("show"))){var n={relatedTarget:this._element},o=i.default.Event("show.bs.dropdown",n),r=t._getParentFromElement(this._element);if(i.default(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof It)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var a=this._element;"parent"===this._config.reference?a=r:l.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&i.default(r).addClass("position-static"),this._popper=new It(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===i.default(r).closest(".navbar-nav").length&&i.default(document.body).children().on("mouseover",null,i.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),i.default(this._menu).toggleClass("show"),i.default(r).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown",n))}}},e.hide=function(){if(!this._element.disabled&&!i.default(this._element).hasClass("disabled")&&i.default(this._menu).hasClass("show")){var e={relatedTarget:this._element},n=i.default.Event("hide.bs.dropdown",e),o=t._getParentFromElement(this._element);i.default(o).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),i.default(this._menu).toggleClass("show"),i.default(o).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown",e)))}},e.dispose=function(){i.default.removeData(this._element,"bs.dropdown"),i.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;i.default(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},e._getConfig=function(t){return t=a({},this.constructor.Default,i.default(this._element).data(),t),l.typeCheckConfig(Ot,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},e._getPlacement=function(){var t=i.default(this._element.parentNode),e="bottom-start";return t.hasClass("dropup")?e=i.default(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":i.default(this._menu).hasClass("dropdown-menu-right")&&(e="bottom-end"),e},e._detectNavbar=function(){return i.default(this._element).closest(".navbar").length>0},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a({},t,this._config.popperConfig)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data("bs.dropdown");if(n||(n=new t(this,"object"==typeof e?e:null),i.default(this).data("bs.dropdown",n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,r=n.length;o<r;o++){var a=t._getParentFromElement(n[o]),s=i.default(n[o]).data("bs.dropdown"),l={relatedTarget:n[o]};if(e&&"click"===e.type&&(l.clickEvent=e),s){var u=s._menu;if(i.default(a).hasClass("show")&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&i.default.contains(a,e.target))){var f=i.default.Event("hide.bs.dropdown",l);i.default(a).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),n[o].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),i.default(u).removeClass("show"),i.default(a).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=l.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(e){if(!(/input|textarea/i.test(e.target.tagName)?32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||i.default(e.target).closest(".dropdown-menu").length):!jt.test(e.which))&&!this.disabled&&!i.default(this).hasClass("disabled")){var n=t._getParentFromElement(this),o=i.default(n).hasClass("show");if(o||27!==e.which){if(e.preventDefault(),e.stopPropagation(),!o||27===e.which||32===e.which)return 27===e.which&&i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void i.default(this).trigger("click");var r=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return i.default(t).is(":visible")}));if(0!==r.length){var a=r.indexOf(e.target);38===e.which&&a>0&&a--,40===e.which&&a<r.length-1&&a++,a<0&&(a=0),r[a].focus()}}}},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return Lt}},{key:"DefaultType",get:function(){return Pt}}]),t}();i.default(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',Ft._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",Ft._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",Ft._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),Ft._jQueryInterface.call(i.default(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),i.default.fn[Ot]=Ft._jQueryInterface,i.default.fn[Ot].Constructor=Ft,i.default.fn[Ot].noConflict=function(){return i.default.fn[Ot]=xt,Ft._jQueryInterface};var Rt=i.default.fn.modal,Ht={backdrop:!0,keyboard:!0,focus:!0,show:!0},Mt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},qt=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){i.default(this._element).hasClass("fade")&&(this._isTransitioning=!0);var n=i.default.Event("show.bs.modal",{relatedTarget:t});i.default(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i.default(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return e.hide(t)})),i.default(this._dialog).on("mousedown.dismiss.bs.modal",(function(){i.default(e._element).one("mouseup.dismiss.bs.modal",(function(t){i.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=i.default.Event("hide.bs.modal");if(i.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var o=i.default(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i.default(document).off("focusin.bs.modal"),i.default(this._element).removeClass("show"),i.default(this._element).off("click.dismiss.bs.modal"),i.default(this._dialog).off("mousedown.dismiss.bs.modal"),o){var r=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,(function(t){return e._hideModal(t)})).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return i.default(t).off(".bs.modal")})),i.default(document).off("focusin.bs.modal"),i.default.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=a({},Ht,t),l.typeCheckConfig("modal",t,Mt),t},e._triggerBackdropTransition=function(){var t=this,e=i.default.Event("hidePrevented.bs.modal");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var o=l.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(l.TRANSITION_END),i.default(this._element).one(l.TRANSITION_END,(function(){t._element.classList.remove("modal-static"),n||i.default(t._element).one(l.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}},e._showElement=function(t){var e=this,n=i.default(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i.default(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,n&&l.reflow(this._element),i.default(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var r=i.default.Event("shown.bs.modal",{relatedTarget:t}),a=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,i.default(e._element).trigger(r)};if(n){var s=l.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(l.TRANSITION_END,a).emulateTransitionEnd(s)}else a()},e._enforceFocus=function(){var t=this;i.default(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(e){document!==e.target&&t._element!==e.target&&0===i.default(t._element).has(e.target).length&&t._element.focus()}))},e._setEscapeEvent=function(){var t=this;this._isShown?i.default(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||i.default(this._element).off("keydown.dismiss.bs.modal")},e._setResizeEvent=function(){var t=this;this._isShown?i.default(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):i.default(window).off("resize.bs.modal")},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i.default(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),i.default(t._element).trigger("hidden.bs.modal")}))},e._removeBackdrop=function(){this._backdrop&&(i.default(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=i.default(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),i.default(this._backdrop).appendTo(document.body),i.default(this._element).on("click.dismiss.bs.modal",(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._triggerBackdropTransition():e.hide())})),n&&l.reflow(this._backdrop),i.default(this._backdrop).addClass("show"),!t)return;if(!n)return void t();var o=l.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(l.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){i.default(this._backdrop).removeClass("show");var r=function(){e._removeBackdrop(),t&&t()};if(i.default(this._element).hasClass("fade")){var a=l.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(l.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),n=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(e,n){var o=n.style.paddingRight,r=i.default(n).css("padding-right");i.default(n).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")})),i.default(n).each((function(e,n){var o=n.style.marginRight,r=i.default(n).css("margin-right");i.default(n).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,r=i.default(document.body).css("padding-right");i.default(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}i.default(document.body).addClass("modal-open")},e._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));i.default(t).each((function(t,e){var n=i.default(e).data("padding-right");i.default(e).removeData("padding-right"),e.style.paddingRight=n||""}));var e=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(t,e){var n=i.default(e).data("margin-right");"undefined"!=typeof n&&i.default(e).css("margin-right",n).removeData("margin-right")}));var n=i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this).data("bs.modal"),r=a({},Ht,i.default(this).data(),"object"==typeof e&&e?e:{});if(o||(o=new t(this,r),i.default(this).data("bs.modal",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return Ht}}]),t}();i.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var e,n=this,o=l.getSelectorFromElement(this);o&&(e=document.querySelector(o));var r=i.default(e).data("bs.modal")?"toggle":a({},i.default(e).data(),i.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=i.default(e).one("show.bs.modal",(function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",(function(){i.default(n).is(":visible")&&n.focus()}))}));qt._jQueryInterface.call(i.default(e),r,this)})),i.default.fn.modal=qt._jQueryInterface,i.default.fn.modal.Constructor=qt,i.default.fn.modal.noConflict=function(){return i.default.fn.modal=Rt,qt._jQueryInterface};var Bt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Qt={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Wt=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,Ut=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Vt(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),a=function(t,n){var i=r[t],a=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var s=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[a]||[]);s.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===Bt.indexOf(n)||Boolean(t.nodeValue.match(Wt)||t.nodeValue.match(Ut));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},s=0,l=r.length;s<l;s++)a(s);return i.body.innerHTML}var Yt="tooltip",zt=i.default.fn[Yt],Xt=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Kt=["sanitize","whiteList","sanitizeFn"],Gt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},$t={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Jt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:Qt,popperConfig:null},Zt={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},te=function(){function t(t,e){if("undefined"==typeof It)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=i.default(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(i.default(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),i.default.removeData(this.element,this.constructor.DATA_KEY),i.default(this.element).off(this.constructor.EVENT_KEY),i.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===i.default(this.element).css("display"))throw new Error("Please use show on visible elements");var e=i.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i.default(this.element).trigger(e);var n=l.findShadowRoot(this.element),o=i.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!o)return;var r=this.getTipElement(),a=l.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&i.default(r).addClass("fade");var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,u=this._getAttachment(s);this.addAttachmentClass(u);var f=this._getContainer();i.default(r).data(this.constructor.DATA_KEY,this),i.default.contains(this.element.ownerDocument.documentElement,this.tip)||i.default(r).appendTo(f),i.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new It(this.element,r,this._getPopperConfig(u)),i.default(r).addClass("show"),i.default(r).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&i.default(document.body).children().on("mouseover",null,i.default.noop);var d=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,i.default(t.element).trigger(t.constructor.Event.SHOWN),"out"===e&&t._leave(null,t)};if(i.default(this.tip).hasClass("fade")){var c=l.getTransitionDurationFromElement(this.tip);i.default(this.tip).one(l.TRANSITION_END,d).emulateTransitionEnd(c)}else d()}},e.hide=function(t){var e=this,n=this.getTipElement(),o=i.default.Event(this.constructor.Event.HIDE),r=function(){"show"!==e._hoverState&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),i.default(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(i.default(this.element).trigger(o),!o.isDefaultPrevented()){if(i.default(n).removeClass("show"),"ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,i.default(this.tip).hasClass("fade")){var a=l.getTransitionDurationFromElement(n);i.default(n).one(l.TRANSITION_END,r).emulateTransitionEnd(a)}else r();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-tooltip-"+t)},e.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement();this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")),this.getTitle()),i.default(t).removeClass("fade show")},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Vt(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?i.default(e).parent().is(t)||t.empty().append(e):t.text(i.default(e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this;return a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:l.isElement(this.config.container)?i.default(this.config.container):i.default(document).find(this.config.container)},e._getAttachment=function(t){return $t[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)i.default(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==e){var n="hover"===e?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===e?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;i.default(t.element).on(n,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},i.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),i.default(e.getTipElement()).hasClass("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout((function(){"show"===e._hoverState&&e.show()}),e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout((function(){"out"===e._hoverState&&e.hide()}),e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){var e=i.default(this.element).data();return Object.keys(e).forEach((function(t){-1!==Kt.indexOf(t)&&delete e[t]})),"number"==typeof(t=a({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l.typeCheckConfig(Yt,t,this.constructor.DefaultType),t.sanitize&&(t.template=Vt(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(Xt);null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(i.default(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.tooltip"),r="object"==typeof e&&e;if((o||!/dispose|hide/.test(e))&&(o||(o=new t(this,r),n.data("bs.tooltip",o)),"string"==typeof e)){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return Jt}},{key:"NAME",get:function(){return Yt}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Zt}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Gt}}]),t}();i.default.fn[Yt]=te._jQueryInterface,i.default.fn[Yt].Constructor=te,i.default.fn[Yt].noConflict=function(){return i.default.fn[Yt]=zt,te._jQueryInterface};var ee="popover",ne=i.default.fn[ee],ie=new RegExp("(^|\\s)bs-popover\\S+","g"),oe=a({},te.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),re=a({},te.DefaultType,{content:"(string|element|function)"}),ae={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},se=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=o.prototype;return a.isWithContent=function(){return this.getTitle()||this._getContent()},a.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-popover-"+t)},a.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},a.setContent=function(){var t=i.default(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},a._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},a._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(ie);null!==e&&e.length>0&&t.removeClass(e.join(""))},o._jQueryInterface=function(t){return this.each((function(){var e=i.default(this).data("bs.popover"),n="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new o(this,n),i.default(this).data("bs.popover",e)),"string"==typeof t)){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},r(o,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return oe}},{key:"NAME",get:function(){return ee}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return ae}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return re}}]),o}(te);i.default.fn[ee]=se._jQueryInterface,i.default.fn[ee].Constructor=se,i.default.fn[ee].noConflict=function(){return i.default.fn[ee]=ne,se._jQueryInterface};var le="scrollspy",ue=i.default.fn[le],fe={offset:10,method:"auto",target:""},de={offset:"number",method:"string",target:"(string|element)"},ce=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,i.default(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return n._process(t)})),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":"position",n="auto"===this._config.method?e:this._config.method,o="position"===n?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var e,r=l.getSelectorFromElement(t);if(r&&(e=document.querySelector(r)),e){var a=e.getBoundingClientRect();if(a.width||a.height)return[i.default(e)[n]().top+o,r]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},e.dispose=function(){i.default.removeData(this._element,"bs.scrollspy"),i.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=a({},fe,"object"==typeof t&&t?t:{})).target&&l.isElement(t.target)){var e=i.default(t.target).attr("id");e||(e=l.getUID(le),i.default(t.target).attr("id",e)),t.target="#"+e}return l.typeCheckConfig(le,t,de),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),n=i.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass("active"),n.addClass("active")):(n.addClass("active"),n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),i.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data("bs.scrollspy");if(n||(n=new t(this,"object"==typeof e&&e),i.default(this).data("bs.scrollspy",n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"Default",get:function(){return fe}}]),t}();i.default(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var n=i.default(t[e]);ce._jQueryInterface.call(n,n.data())}})),i.default.fn[le]=ce._jQueryInterface,i.default.fn[le].Constructor=ce,i.default.fn[le].noConflict=function(){return i.default.fn[le]=ue,ce._jQueryInterface};var he=i.default.fn.tab,pe=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&i.default(this._element).hasClass("active")||i.default(this._element).hasClass("disabled"))){var e,n,o=i.default(this._element).closest(".nav, .list-group")[0],r=l.getSelectorFromElement(this._element);if(o){var a="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";n=(n=i.default.makeArray(i.default(o).find(a)))[n.length-1]}var s=i.default.Event("hide.bs.tab",{relatedTarget:this._element}),u=i.default.Event("show.bs.tab",{relatedTarget:n});if(n&&i.default(n).trigger(s),i.default(this._element).trigger(u),!u.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=document.querySelector(r)),this._activate(this._element,o);var f=function(){var e=i.default.Event("hidden.bs.tab",{relatedTarget:t._element}),o=i.default.Event("shown.bs.tab",{relatedTarget:n});i.default(n).trigger(e),i.default(t._element).trigger(o)};e?this._activate(e,e.parentNode,f):f()}}},e.dispose=function(){i.default.removeData(this._element,"bs.tab"),this._element=null},e._activate=function(t,e,n){var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?i.default(e).children(".active"):i.default(e).find("> li > .active"))[0],a=n&&r&&i.default(r).hasClass("fade"),s=function(){return o._transitionComplete(t,r,n)};if(r&&a){var u=l.getTransitionDurationFromElement(r);i.default(r).removeClass("show").one(l.TRANSITION_END,s).emulateTransitionEnd(u)}else s()},e._transitionComplete=function(t,e,n){if(e){i.default(e).removeClass("active");var o=i.default(e.parentNode).find("> .dropdown-menu .active")[0];o&&i.default(o).removeClass("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(i.default(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),l.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&i.default(t.parentNode).hasClass("dropdown-menu")){var r=i.default(t).closest(".dropdown")[0];if(r){var a=[].slice.call(r.querySelectorAll(".dropdown-toggle"));i.default(a).addClass("active")}t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.tab");if(o||(o=new t(this),n.data("bs.tab",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}}]),t}();i.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),pe._jQueryInterface.call(i.default(this),"show")})),i.default.fn.tab=pe._jQueryInterface,i.default.fn.tab.Constructor=pe,i.default.fn.tab.noConflict=function(){return i.default.fn.tab=he,pe._jQueryInterface};var me=i.default.fn.toast,ge={animation:"boolean",autohide:"boolean",delay:"number"},ve={animation:!0,autohide:!0,delay:500},_e=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var e=t.prototype;return e.show=function(){var t=this,e=i.default.Event("show.bs.toast");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),i.default(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),l.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,n).emulateTransitionEnd(o)}else n()}},e.hide=function(){if(this._element.classList.contains("show")){var t=i.default.Event("hide.bs.toast");i.default(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},e.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),i.default(this._element).off("click.dismiss.bs.toast"),i.default.removeData(this._element,"bs.toast"),this._element=null,this._config=null},e._getConfig=function(t){return t=a({},ve,i.default(this._element).data(),"object"==typeof t&&t?t:{}),l.typeCheckConfig("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this;i.default(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},e._close=function(){var t=this,e=function(){t._element.classList.add("hide"),i.default(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var n=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},e._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.toast");if(o||(o=new t(this,"object"==typeof e&&e),n.data("bs.toast",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](this)}}))},r(t,null,[{key:"VERSION",get:function(){return"4.6.0"}},{key:"DefaultType",get:function(){return ge}},{key:"Default",get:function(){return ve}}]),t}();i.default.fn.toast=_e._jQueryInterface,i.default.fn.toast.Constructor=_e,i.default.fn.toast.noConflict=function(){return i.default.fn.toast=me,_e._jQueryInterface},t.Alert=d,t.Button=h,t.Carousel=y,t.Collapse=S,t.Dropdown=Ft,t.Modal=qt,t.Popover=se,t.Scrollspy=ce,t.Tab=pe,t.Toast=_e,t.Tooltip=te,t.Util=l,Object.defineProperty(t,"__esModule",{value:!0})}));
 //# sourceMappingURL=bootstrap.bundle.min.js.map

/*
  Highlight.js 10.5.0 (af20048d)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs = function () {
    "use strict"; function e(t) {
        return t instanceof Map ? t.clear = t.delete = t.set = () => {
            throw Error("map is read-only")
        } : t instanceof Set && (t.add = t.clear = t.delete = () => {
            throw Error("set is read-only")
        }), Object.freeze(t), Object.getOwnPropertyNames(t).forEach((n => {
            var s = t[n]
            ; "object" != typeof s || Object.isFrozen(s) || e(s)
        })), t
    } var t = e, n = e; t.default = n
        ; class s {
            constructor(e) { void 0 === e.data && (e.data = {}), this.data = e.data }
        ignoreMatch() { this.ignore = !0 }
    } function r(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    } function a(e, ...t) {
        const n = Object.create(null); for (const t in e) n[t] = e[t]
            ; return t.forEach((e => { for (const t in e) n[t] = e[t] })), n
    } const i = e => !!e.kind
        ; class o {
            constructor(e, t) {
                this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
            } addText(e) {
                this.buffer += r(e)
            } openNode(e) {
                if (!i(e)) return; let t = e.kind
                    ; e.sublanguage || (t = `${this.classPrefix}${t}`), this.span(t)
            } closeNode(e) {
                i(e) && (this.buffer += "</span>")
            } value() { return this.buffer } span(e) {
                this.buffer += `<span class="${e}">`
            }
    } class l {
        constructor() {
            this.rootNode = {
                children: []
            }, this.stack = [this.rootNode]
        } get top() {
            return this.stack[this.stack.length - 1]
        } get root() { return this.rootNode } add(e) {
            this.top.children.push(e)
        } openNode(e) {
            const t = { kind: e, children: [] }
            ; this.add(t), this.stack.push(t)
        } closeNode() {
            if (this.stack.length > 1) return this.stack.pop()
        } closeAllNodes() {
            for (; this.closeNode(););
        } toJSON() { return JSON.stringify(this.rootNode, null, 4) }
        walk(e) { return this.constructor._walk(e, this.rootNode) } static _walk(e, t) {
            return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t),
                t.children.forEach((t => this._walk(e, t))), e.closeNode(t)), e
        } static _collapse(e) {
            "string" != typeof e && e.children && (e.children.every((e => "string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e => {
                l._collapse(e)
            })))
        }
    } class c extends l {
        constructor(e) { super(), this.options = e }
        addKeyword(e, t) { "" !== e && (this.openNode(t), this.addText(e), this.closeNode()) }
        addText(e) { "" !== e && this.add(e) } addSublanguage(e, t) {
            const n = e.root
            ; n.kind = t, n.sublanguage = !0, this.add(n)
        } toHTML() {
            return new o(this, this.options).value()
        } finalize() { return !0 }
    } function u(e) {
        return e ? "string" == typeof e ? e : e.source : null
    }
    const g = "[a-zA-Z]\\w*", d = "[a-zA-Z_]\\w*", h = "\\b\\d+(\\.\\d+)?", f = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", p = "\\b(0b[01]+)", m = {
        begin: "\\\\[\\s\\S]", relevance: 0
    }, b = {
        className: "string", begin: "'", end: "'",
        illegal: "\\n", contains: [m]
    }, x = {
        className: "string", begin: '"', end: '"',
        illegal: "\\n", contains: [m]
    }, E = {
        begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    }, v = (e, t, n = {}) => {
        const s = a({ className: "comment", begin: e, end: t, contains: [] }, n)
        ; return s.contains.push(E), s.contains.push({
            className: "doctag",
            begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):", relevance: 0
        }), s
    }, N = v("//", "$"), w = v("/\\*", "\\*/"), R = v("#", "$"); var y = Object.freeze({
        __proto__: null, IDENT_RE: g, UNDERSCORE_IDENT_RE: d, NUMBER_RE: h, C_NUMBER_RE: f,
        BINARY_NUMBER_RE: p,
        RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
        SHEBANG: (e = {}) => {
            const t = /^#![ ]*\//
            ; return e.binary && (e.begin = ((...e) => e.map((e => u(e))).join(""))(t, /.*\b/, e.binary, /\b.*/)),
                a({
                    className: "meta", begin: t, end: /$/, relevance: 0, "on:begin": (e, t) => {
                        0 !== e.index && t.ignoreMatch()
                    }
                }, e)
        }, BACKSLASH_ESCAPE: m, APOS_STRING_MODE: b,
        QUOTE_STRING_MODE: x, PHRASAL_WORDS_MODE: E, COMMENT: v, C_LINE_COMMENT_MODE: N,
        C_BLOCK_COMMENT_MODE: w, HASH_COMMENT_MODE: R, NUMBER_MODE: {
            className: "number",
            begin: h, relevance: 0
        }, C_NUMBER_MODE: { className: "number", begin: f, relevance: 0 },
        BINARY_NUMBER_MODE: { className: "number", begin: p, relevance: 0 }, CSS_NUMBER_MODE: {
            className: "number",
            begin: h + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
            relevance: 0
        }, REGEXP_MODE: {
            begin: /(?=\/[^/\n]*\/)/, contains: [{
                className: "regexp",
                begin: /\//, end: /\/[gimuy]*/, illegal: /\n/, contains: [m, {
                    begin: /\[/, end: /\]/,
                    relevance: 0, contains: [m]
                }]
            }]
        }, TITLE_MODE: {
            className: "title", begin: g, relevance: 0
        }, UNDERSCORE_TITLE_MODE: { className: "title", begin: d, relevance: 0 }, METHOD_GUARD: {
            begin: "\\.\\s*[a-zA-Z_]\\w*", relevance: 0
        }, END_SAME_AS_BEGIN: e => Object.assign(e, {
            "on:begin": (e, t) => { t.data._beginMatch = e[1] }, "on:end": (e, t) => {
                t.data._beginMatch !== e[1] && t.ignoreMatch()
            }
        })
    }); function _(e, t) {
        "." === e.input[e.index - 1] && t.ignoreMatch()
    } function k(e, t) {
        t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)",
            e.__beforeBegin = _, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords)
    } function M(e, t) {
        Array.isArray(e.illegal) && (e.illegal = ((...e) => "(" + e.map((e => u(e))).join("|") + ")")(...e.illegal))
    } function O(e, t) {
        if (e.match) {
            if (e.begin || e.end) throw Error("begin & end are not supported with match")
                ; e.begin = e.match, delete e.match
        }
    } function A(e, t) {
        void 0 === e.relevance && (e.relevance = 1)
    }
    const L = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"]
        ; function B(e, t) { return t ? Number(t) : (e => L.includes(e.toLowerCase()))(e) ? 0 : 1 }
    function I(e, { plugins: t }) {
        function n(t, n) {
            return RegExp(u(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
        } class s {
            constructor() {
                this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
            }
            addRule(e, t) {
                t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]),
                    this.matchAt += (e => RegExp(e.toString() + "|").exec("").length - 1)(e) + 1
            } compile() {
                0 === this.regexes.length && (this.exec = () => null)
                    ; const e = this.regexes.map((e => e[1])); this.matcherRe = n(((e, t = "|") => {
                        const n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./; let s = 0, r = ""
                            ; for (let a = 0; a < e.length; a++) {
                                s += 1; const i = s; let o = u(e[a])
                                    ; for (a > 0 && (r += t), r += "("; o.length > 0;) {
                                        const e = n.exec(o); if (null == e) { r += o; break }
                                        r += o.substring(0, e.index),
                                            o = o.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? r += "\\" + (Number(e[1]) + i) : (r += e[0],
                                                "(" === e[0] && s++)
                                    } r += ")"
                            } return r
                    })(e), !0), this.lastIndex = 0
            } exec(e) {
                this.matcherRe.lastIndex = this.lastIndex; const t = this.matcherRe.exec(e)
                    ; if (!t) return null
                        ; const n = t.findIndex(((e, t) => t > 0 && void 0 !== e)), s = this.matchIndexes[n]
                    ; return t.splice(0, n), Object.assign(t, s)
            }
        } class r {
            constructor() {
                this.rules = [], this.multiRegexes = [],
                    this.count = 0, this.lastIndex = 0, this.regexIndex = 0
            } getMatcher(e) {
                if (this.multiRegexes[e]) return this.multiRegexes[e]; const t = new s
                    ; return this.rules.slice(e).forEach((([e, n]) => t.addRule(e, n))),
                        t.compile(), this.multiRegexes[e] = t, t
            } resumingScanAtSamePosition() {
                return 0 !== this.regexIndex
            } considerAll() { this.regexIndex = 0 } addRule(e, t) {
                this.rules.push([e, t]), "begin" === t.type && this.count++
            } exec(e) {
                const t = this.getMatcher(this.regexIndex); t.lastIndex = this.lastIndex
                    ; let n = t.exec(e)
                    ; if (this.resumingScanAtSamePosition()) if (n && n.index === this.lastIndex); else {
                        const t = this.getMatcher(0); t.lastIndex = this.lastIndex + 1, n = t.exec(e)
                    }
                return n && (this.regexIndex += n.position + 1,
                    this.regexIndex === this.count && this.considerAll()), n
            }
        }
        if (e.compilerExtensions || (e.compilerExtensions = []),
            e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
            ; return e.classNameAliases = a(e.classNameAliases || {}), function t(s, i) {
                const o = s
                ; if (s.compiled) return o
                    ;[O].forEach((e => e(s, i))), e.compilerExtensions.forEach((e => e(s, i))),
                        s.__beforeBegin = null, [k, M, A].forEach((e => e(s, i))), s.compiled = !0; let l = null
                    ; if ("object" == typeof s.keywords && (l = s.keywords.$pattern,
                        delete s.keywords.$pattern), s.keywords && (s.keywords = ((e, t) => {
                            const n = {}
                            ; return "string" == typeof e ? s("keyword", e) : Object.keys(e).forEach((t => {
                                s(t, e[t])
                            })), n; function s(e, s) {
                                t && (s = s.toLowerCase()), s.split(" ").forEach((t => {
                                    const s = t.split("|"); n[s[0]] = [e, B(s[0], s[1])]
                                }))
                            }
                        })(s.keywords, e.case_insensitive)),
                        s.lexemes && l) throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
                    ; return l = l || s.lexemes || /\w+/,
                        o.keywordPatternRe = n(l, !0), i && (s.begin || (s.begin = /\B|\b/),
                            o.beginRe = n(s.begin), s.endSameAsBegin && (s.end = s.begin),
                            s.end || s.endsWithParent || (s.end = /\B|\b/),
                            s.end && (o.endRe = n(s.end)), o.terminatorEnd = u(s.end) || "",
                            s.endsWithParent && i.terminatorEnd && (o.terminatorEnd += (s.end ? "|" : "") + i.terminatorEnd)),
                        s.illegal && (o.illegalRe = n(s.illegal)),
                        s.contains || (s.contains = []), s.contains = [].concat(...s.contains.map((e => (e => (e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((t => a(e, {
                            variants: null
                        }, t)))), e.cachedVariants ? e.cachedVariants : T(e) ? a(e, {
                            starts: e.starts ? a(e.starts) : null
                        }) : Object.isFrozen(e) ? a(e) : e))("self" === e ? s : e)))), s.contains.forEach((e => {
                            t(e, o)
                        })), s.starts && t(s.starts, i), o.matcher = (e => {
                            const t = new r
                            ; return e.contains.forEach((e => t.addRule(e.begin, {
                                rule: e, type: "begin"
                            }))), e.terminatorEnd && t.addRule(e.terminatorEnd, {
                                type: "end"
                            }), e.illegal && t.addRule(e.illegal, { type: "illegal" }), t
                        })(o), o
            }(e)
    } function T(e) {
        return !!e && (e.endsWithParent || T(e.starts))
    } function j(e) {
        const t = {
            props: ["language", "code", "autodetect"], data: () => ({
                detectedLanguage: "",
                unknownLanguage: !1
            }), computed: {
                className() {
                    return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                }, highlighted() {
                    if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`),
                        this.unknownLanguage = !0, r(this.code); let t = {}
                        ; return this.autoDetect ? (t = e.highlightAuto(this.code),
                            this.detectedLanguage = t.language) : (t = e.highlight(this.language, this.code, this.ignoreIllegals),
                                this.detectedLanguage = this.language), t.value
                }, autoDetect() {
                    return !(this.language && (e = this.autodetect, !e && "" !== e)); var e
                },
                ignoreIllegals: () => !0
            }, render(e) {
                return e("pre", {}, [e("code", {
                    class: this.className, domProps: { innerHTML: this.highlighted }
                })])
            }
        }; return {
            Component: t, VuePlugin: { install(e) { e.component("highlightjs", t) } }
        }
    } const S = {
        "after:highlightBlock": ({ block: e, result: t, text: n }) => {
            const s = D(e)
            ; if (!s.length) return; const a = document.createElement("div")
                ; a.innerHTML = t.value, t.value = ((e, t, n) => {
                    let s = 0, a = ""; const i = []; function o() {
                        return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                    } function l(e) {
                        a += "<" + P(e) + [].map.call(e.attributes, (function (e) {
                            return " " + e.nodeName + '="' + r(e.value) + '"'
                        })).join("") + ">"
                    } function c(e) {
                        a += "</" + P(e) + ">"
                    } function u(e) { ("start" === e.event ? l : c)(e.node) }
                    for (; e.length || t.length;) {
                        let t = o()
                        ; if (a += r(n.substring(s, t[0].offset)), s = t[0].offset, t === e) {
                            i.reverse().forEach(c)
                            ; do { u(t.splice(0, 1)[0]), t = o() } while (t === e && t.length && t[0].offset === s)
                                ; i.reverse().forEach(l)
                        } else "start" === t[0].event ? i.push(t[0].node) : i.pop(), u(t.splice(0, 1)[0])
                    }
                    return a + r(n.substr(s))
                })(s, D(a), n)
        }
    }; function P(e) {
        return e.nodeName.toLowerCase()
    } function D(e) {
        const t = []; return function e(n, s) {
            for (let r = n.firstChild; r; r = r.nextSibling)3 === r.nodeType ? s += r.nodeValue.length : 1 === r.nodeType && (t.push({
                event: "start", offset: s, node: r
            }), s = e(r, s), P(r).match(/br|hr|img|input/) || t.push({
                event: "stop", offset: s, node: r
            })); return s
        }(e, 0), t
    } const C = e => {
        console.error(e)
    }, H = (e, ...t) => { console.log("WARN: " + e, ...t) }, $ = (e, t) => {
        console.log(`Deprecated as of ${e}. ${t}`)
    }, U = r, z = a, K = Symbol("nomatch")
        ; return (e => {
            const n = Object.create(null), r = Object.create(null), a = []; let i = !0
                ; const o = /(^(<[^>]+>|\t|)+|\n)/gm, l = "Could not find the language '{}', did you forget to load/include a language module?", u = {
                    disableAutodetect: !0, name: "Plain text", contains: []
                }; let g = {
                    noHighlightRe: /^(no-?highlight)$/i,
                    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i, classPrefix: "hljs-",
                    tabReplace: null, useBR: !1, languages: null, __emitter: c
                }; function d(e) {
                    return g.noHighlightRe.test(e)
                } function h(e, t, n, s) {
                    const r = { code: t, language: e }
                    ; _("before:highlight", r); const a = r.result ? r.result : f(r.language, r.code, n, s)
                        ; return a.code = r.code, _("after:highlight", a), a
                } function f(e, t, r, o) {
                    const c = t
                    ; function u(e, t) {
                        const n = w.case_insensitive ? t[0].toLowerCase() : t[0]
                        ; return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
                    }
                    function d() {
                        null != _.subLanguage ? (() => {
                            if ("" === O) return; let e = null
                                ; if ("string" == typeof _.subLanguage) {
                                    if (!n[_.subLanguage]) return void M.addText(O)
                                        ; e = f(_.subLanguage, O, !0, k[_.subLanguage]), k[_.subLanguage] = e.top
                                } else e = p(O, _.subLanguage.length ? _.subLanguage : null)
                                ; _.relevance > 0 && (A += e.relevance), M.addSublanguage(e.emitter, e.language)
                        })() : (() => {
                            if (!_.keywords) return void M.addText(O); let e = 0
                                ; _.keywordPatternRe.lastIndex = 0; let t = _.keywordPatternRe.exec(O), n = ""; for (; t;) {
                                    n += O.substring(e, t.index); const s = u(_, t); if (s) {
                                        const [e, r] = s
                                        ; M.addText(n), n = "", A += r; const a = w.classNameAliases[e] || e; M.addKeyword(t[0], a)
                                    } else n += t[0]; e = _.keywordPatternRe.lastIndex, t = _.keywordPatternRe.exec(O)
                                }
                            n += O.substr(e), M.addText(n)
                        })(), O = ""
                    } function h(e) {
                        return e.className && M.openNode(w.classNameAliases[e.className] || e.className),
                            _ = Object.create(e, { parent: { value: _ } }), _
                    } function m(e, t, n) {
                        let r = ((e, t) => {
                            const n = e && e.exec(t); return n && 0 === n.index
                        })(e.endRe, n); if (r) {
                            if (e["on:end"]) {
                                const n = new s(e); e["on:end"](t, n), n.ignore && (r = !1)
                            } if (r) {
                                for (; e.endsParent && e.parent;)e = e.parent; return e
                            }
                        }
                        if (e.endsWithParent) return m(e.parent, t, n)
                    } function b(e) {
                        return 0 === _.matcher.regexIndex ? (O += e[0], 1) : (T = !0, 0)
                    } function x(e) {
                        const t = e[0], n = c.substr(e.index), s = m(_, e, n); if (!s) return K; const r = _
                            ; r.skip ? O += t : (r.returnEnd || r.excludeEnd || (O += t), d(), r.excludeEnd && (O = t)); do {
                                _.className && M.closeNode(), _.skip || _.subLanguage || (A += _.relevance), _ = _.parent
                            } while (_ !== s.parent)
                            ; return s.starts && (s.endSameAsBegin && (s.starts.endRe = s.endRe),
                                h(s.starts)), r.returnEnd ? 0 : t.length
                    } let E = {}; function v(t, n) {
                        const a = n && n[0]
                        ; if (O += t, null == a) return d(), 0
                            ; if ("begin" === E.type && "end" === n.type && E.index === n.index && "" === a) {
                                if (O += c.slice(n.index, n.index + 1), !i) {
                                    const t = Error("0 width match regex")
                                    ; throw t.languageName = e, t.badRule = E.rule, t
                                } return 1
                            }
                        if (E = n, "begin" === n.type) return function (e) {
                            const t = e[0], n = e.rule, r = new s(n), a = [n.__beforeBegin, n["on:begin"]]
                                ; for (const n of a) if (n && (n(e, r), r.ignore)) return b(t)
                                    ; return n && n.endSameAsBegin && (n.endRe = RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")),
                                        n.skip ? O += t : (n.excludeBegin && (O += t),
                                            d(), n.returnBegin || n.excludeBegin || (O = t)), h(n), n.returnBegin ? 0 : t.length
                        }(n)
                            ; if ("illegal" === n.type && !r) {
                                const e = Error('Illegal lexeme "' + a + '" for mode "' + (_.className || "<unnamed>") + '"')
                                    ; throw e.mode = _, e
                            } if ("end" === n.type) { const e = x(n); if (e !== K) return e }
                        if ("illegal" === n.type && "" === a) return 1
                            ; if (B > 1e5 && B > 3 * n.index) throw Error("potential infinite loop, way more iterations than matches")
                                ; return O += a, a.length
                    } const w = N(e)
                        ; if (!w) throw C(l.replace("{}", e)), Error('Unknown language: "' + e + '"')
                            ; const R = I(w, { plugins: a }); let y = "", _ = o || R; const k = {}, M = new g.__emitter(g); (() => {
                                const e = []; for (let t = _; t !== w; t = t.parent)t.className && e.unshift(t.className)
                                    ; e.forEach((e => M.openNode(e)))
                            })(); let O = "", A = 0, L = 0, B = 0, T = !1; try {
                                for (_.matcher.considerAll(); ;) {
                                    B++, T ? T = !1 : _.matcher.considerAll(), _.matcher.lastIndex = L
                                        ; const e = _.matcher.exec(c); if (!e) break; const t = v(c.substring(L, e.index), e)
                                        ; L = e.index + t
                                } return v(c.substr(L)), M.closeAllNodes(), M.finalize(), y = M.toHTML(), {
                                    relevance: A, value: y, language: e, illegal: !1, emitter: M, top: _
                                }
                            } catch (t) {
                                if (t.message && t.message.includes("Illegal")) return {
                                    illegal: !0, illegalBy: {
                                        msg: t.message, context: c.slice(L - 100, L + 100), mode: t.mode
                                    }, sofar: y, relevance: 0,
                                    value: U(c), emitter: M
                                }; if (i) return {
                                    illegal: !1, relevance: 0, value: U(c), emitter: M,
                                    language: e, top: _, errorRaised: t
                                }; throw t
                            }
                } function p(e, t) {
                    t = t || g.languages || Object.keys(n); const s = (e => {
                        const t = {
                            relevance: 0,
                            emitter: new g.__emitter(g), value: U(e), illegal: !1, top: u
                        }
                        ; return t.emitter.addText(e), t
                    })(e), r = t.filter(N).filter(R).map((t => f(t, e, !1)))
                        ; r.unshift(s); const a = r.sort(((e, t) => {
                            if (e.relevance !== t.relevance) return t.relevance - e.relevance
                                ; if (e.language && t.language) {
                                    if (N(e.language).supersetOf === t.language) return 1
                                        ; if (N(t.language).supersetOf === e.language) return -1
                                } return 0
                        })), [i, o] = a, l = i
                        ; return l.second_best = o, l
                } const m = {
                    "before:highlightBlock": ({ block: e }) => {
                        g.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n"))
                    }, "after:highlightBlock": ({ result: e }) => {
                        g.useBR && (e.value = e.value.replace(/\n/g, "<br>"))
                    }
                }, b = /^(<[^>]+>|\t)+/gm, x = {
                    "after:highlightBlock": ({ result: e }) => {
                        g.tabReplace && (e.value = e.value.replace(b, (e => e.replace(/\t/g, g.tabReplace))))
                    }
                }
                ; function E(e) {
                    let t = null; const n = (e => {
                        let t = e.className + " "
                        ; t += e.parentNode ? e.parentNode.className : ""; const n = g.languageDetectRe.exec(t)
                            ; if (n) {
                                const t = N(n[1])
                                ; return t || (H(l.replace("{}", n[1])), H("Falling back to no-highlight mode for this block.", e)),
                                    t ? n[1] : "no-highlight"
                            } return t.split(/\s+/).find((e => d(e) || N(e)))
                    })(e)
                        ; if (d(n)) return; _("before:highlightBlock", { block: e, language: n }), t = e
                        ; const s = t.textContent, a = n ? h(n, s, !0) : p(s); _("after:highlightBlock", {
                            block: e,
                            result: a, text: s
                        }), e.innerHTML = a.value, ((e, t, n) => {
                            const s = t ? r[t] : n
                            ; e.classList.add("hljs"), s && e.classList.add(s)
                        })(e, n, a.language), e.result = {
                            language: a.language, re: a.relevance, relavance: a.relevance
                        }, a.second_best && (e.second_best = {
                            language: a.second_best.language,
                            re: a.second_best.relevance, relavance: a.second_best.relevance
                        })
                } const v = () => {
                    v.called || (v.called = !0, document.querySelectorAll("pre code").forEach(E))
                }
                ; function N(e) { return e = (e || "").toLowerCase(), n[e] || n[r[e]] }
            function w(e, { languageName: t }) {
                "string" == typeof e && (e = [e]), e.forEach((e => {
                    r[e] = t
                }))
            } function R(e) { const t = N(e); return t && !t.disableAutodetect } function _(e, t) {
                const n = e; a.forEach((e => { e[n] && e[n](t) }))
            } Object.assign(e, {
                highlight: h,
                highlightAuto: p, fixMarkup: e => {
                    return $("10.2.0", "fixMarkup will be removed entirely in v11.0"),
                        $("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"),
                        t = e,
                        g.tabReplace || g.useBR ? t.replace(o, (e => "\n" === e ? g.useBR ? "<br>" : e : g.tabReplace ? e.replace(/\t/g, g.tabReplace) : e)) : t
                        ; var t
                }, highlightBlock: E, configure: e => {
                    e.useBR && ($("10.3.0", "'useBR' will be removed entirely in v11.0"),
                        $("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")),
                        g = z(g, e)
                }, initHighlighting: v, initHighlightingOnLoad: () => {
                    window.addEventListener("DOMContentLoaded", v, !1)
                }, registerLanguage: (t, s) => {
                    let r = null; try { r = s(e) } catch (e) {
                        if (C("Language definition for '{}' could not be registered.".replace("{}", t)),
                            !i) throw e; C(e), r = u
                    }
                    r.name || (r.name = t), n[t] = r, r.rawDefinition = s.bind(null, e), r.aliases && w(r.aliases, {
                        languageName: t
                    })
                }, listLanguages: () => Object.keys(n), getLanguage: N,
                registerAliases: w, requireLanguage: e => {
                    $("10.4.0", "requireLanguage will be removed entirely in v11."),
                        $("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844")
                        ; const t = N(e); if (t) return t
                            ; throw Error("The '{}' language is required, but not loaded.".replace("{}", e))
                },
                autoDetection: R, inherit: z, addPlugin: e => { a.push(e) }, vuePlugin: j(e).VuePlugin
            }), e.debugMode = () => { i = !1 }, e.safeMode = () => { i = !0 }, e.versionString = "10.5.0"
                ; for (const e in y) "object" == typeof y[e] && t(y[e])
                    ; return Object.assign(e, y), e.addPlugin(m), e.addPlugin(S), e.addPlugin(x), e
        })({})
}(); "object" == typeof exports && "undefined" != typeof module && (module.exports = hljs);
hljs.registerLanguage("apache", (() => {
    "use strict"; return e => {
        const n = {
            className: "number", begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
        }
        ; return {
            name: "Apache config", aliases: ["apacheconf"], case_insensitive: !0,
            contains: [e.HASH_COMMENT_MODE, {
                className: "section", begin: /<\/?/, end: />/,
                contains: [n, {
                    className: "number", begin: /:\d{1,5}/
                }, e.inherit(e.QUOTE_STRING_MODE, { relevance: 0 })]
            }, {
                className: "attribute",
                begin: /\w+/, relevance: 0, keywords: {
                    nomarkup: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                }, starts: {
                    end: /$/, relevance: 0, keywords: { literal: "on off all deny allow" },
                    contains: [{ className: "meta", begin: /\s\[/, end: /\]$/ }, {
                        className: "variable",
                        begin: /[\$%]\{/, end: /\}/, contains: ["self", { className: "number", begin: /[$%]\d+/ }]
                    }, n, { className: "number", begin: /\d+/ }, e.QUOTE_STRING_MODE]
                }
            }], illegal: /\S/
        }
    }
})());
hljs.registerLanguage("bash", (() => {
    "use strict"; function e(...e) {
        return e.map((e => {
            return (s = e) ? "string" == typeof s ? s : s.source : null; var s
        })).join("")
    } return s => {
        const n = {}, t = {
            begin: /\$\{/, end: /\}/, contains: ["self", {
                begin: /:-/, contains: [n]
            }]
        }; Object.assign(n, {
            className: "variable", variants: [{
                begin: e(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")
            }, t]
        }); const a = {
            className: "subst", begin: /\$\(/, end: /\)/, contains: [s.BACKSLASH_ESCAPE]
        }, i = {
            begin: /<<-?\s*(?=\w+)/, starts: {
                contains: [s.END_SAME_AS_BEGIN({
                    begin: /(\w+)/,
                    end: /(\w+)/, className: "string"
                })]
            }
        }, c = {
            className: "string", begin: /"/, end: /"/,
            contains: [s.BACKSLASH_ESCAPE, n, a]
        }; a.contains.push(c); const o = {
            begin: /\$\(\(/,
            end: /\)\)/, contains: [{ begin: /\d+#[0-9a-f]+/, className: "number" }, s.NUMBER_MODE, n]
        }, r = s.SHEBANG({
            binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)", relevance: 10
        }), l = {
            className: "function", begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/, returnBegin: !0,
            contains: [s.inherit(s.TITLE_MODE, { begin: /\w[\w\d_]*/ })], relevance: 0
        }; return {
            name: "Bash", aliases: ["sh", "zsh"], keywords: {
                $pattern: /\b[a-z._-]+\b/,
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"
            }, contains: [r, s.SHEBANG(), l, o, s.HASH_COMMENT_MODE, i, c, {
                className: "", begin: /\\"/
            }, { className: "string", begin: /'/, end: /'/ }, n]
        }
    }
})());
hljs.registerLanguage("c", (() => {
    "use strict"; function e(e) {
        return ((...e) => e.map((e => (e => e ? "string" == typeof e ? e : e.source : null)(e))).join(""))("(", e, ")?")
    } return t => {
        const n = (t => {
            const n = t.COMMENT("//", "$", {
                contains: [{ begin: /\\\n/ }]
            }), r = "[a-zA-Z_]\\w*::", a = "(decltype\\(auto\\)|" + e(r) + "[a-zA-Z_]\\w*" + e("<[^<>]+>") + ")", s = {
                className: "keyword", begin: "\\b[a-z\\d_]*_t\\b"
            }, i = {
                className: "string",
                variants: [{
                    begin: '(u8?|U|L)?"', end: '"', illegal: "\\n",
                    contains: [t.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'", illegal: "."
                }, t.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/
                })]
            }, o = {
                className: "number", variants: [{ begin: "\\b(0b[01']+)" }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }], relevance: 0
            }, c = {
                className: "meta", begin: /#\s*[a-z]+\b/, end: /$/, keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                }, contains: [{ begin: /\\\n/, relevance: 0 }, t.inherit(i, { className: "meta-string" }), {
                    className: "meta-string", begin: /<.*?>/, end: /$/, illegal: "\\n"
                }, n, t.C_BLOCK_COMMENT_MODE]
            }, l = {
                className: "title", begin: e(r) + t.IDENT_RE,
                relevance: 0
            }, d = e(r) + t.IDENT_RE + "\\s*\\(", u = {
                keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
                built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
                literal: "true false nullptr NULL"
            }, m = [c, s, n, t.C_BLOCK_COMMENT_MODE, o, i], p = {
                variants: [{ begin: /=/, end: /;/ }, { begin: /\(/, end: /\)/ }, {
                    beginKeywords: "new throw return else", end: /;/
                }], keywords: u, contains: m.concat([{
                    begin: /\(/, end: /\)/, keywords: u, contains: m.concat(["self"]), relevance: 0
                }]),
                relevance: 0
            }, _ = {
                className: "function", begin: "(" + a + "[\\*&\\s]+)+" + d,
                returnBegin: !0, end: /[{;=]/, excludeEnd: !0, keywords: u, illegal: /[^\w\s\*&:<>.]/,
                contains: [{ begin: "decltype\\(auto\\)", keywords: u, relevance: 0 }, {
                    begin: d,
                    returnBegin: !0, contains: [l], relevance: 0
                }, {
                    className: "params", begin: /\(/,
                    end: /\)/, keywords: u, relevance: 0, contains: [n, t.C_BLOCK_COMMENT_MODE, i, o, s, {
                        begin: /\(/, end: /\)/, keywords: u, relevance: 0,
                        contains: ["self", n, t.C_BLOCK_COMMENT_MODE, i, o, s]
                    }]
                }, s, n, t.C_BLOCK_COMMENT_MODE, c]
            }; return {
                aliases: ["c", "cc", "h", "c++", "h++", "hpp", "hh", "hxx", "cxx"], keywords: u,
                disableAutodetect: !0, illegal: "</", contains: [].concat(p, _, m, [c, {
                    begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                    end: ">", keywords: u, contains: ["self", s]
                }, { begin: t.IDENT_RE + "::", keywords: u }, {
                        className: "class", beginKeywords: "enum class struct union", end: /[{;:<>=]/,
                        contains: [{ beginKeywords: "final class struct" }, t.TITLE_MODE]
                    }]), exports: {
                        preprocessor: c, strings: i, keywords: u
                    }
            }
        })(t)
        ; return n.name = "C", n.aliases = ["c", "h"], n
    }
})());
hljs.registerLanguage("coffeescript", (() => {
    "use strict"
        ; const e = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], n = ["true", "false", "null", "undefined", "NaN", "Infinity"], a = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"])
        ; return r => {
            const t = {
                keyword: e.concat(["then", "unless", "until", "loop", "by", "when", "and", "or", "is", "isnt", "not"]).filter((i = ["var", "const", "let", "function", "static"],
                    e => !i.includes(e))).join(" "),
                literal: n.concat(["yes", "no", "on", "off"]).join(" "),
                built_in: a.concat(["npm", "print"]).join(" ")
            }; var i
                ; const s = "[A-Za-z$_][0-9A-Za-z$_]*", o = {
                    className: "subst", begin: /#\{/, end: /\}/,
                    keywords: t
                }, c = [r.BINARY_NUMBER_MODE, r.inherit(r.C_NUMBER_MODE, {
                    starts: {
                        end: "(\\s*/)?", relevance: 0
                    }
                }), {
                    className: "string", variants: [{
                        begin: /'''/,
                        end: /'''/, contains: [r.BACKSLASH_ESCAPE]
                    }, {
                        begin: /'/, end: /'/,
                        contains: [r.BACKSLASH_ESCAPE]
                    }, {
                        begin: /"""/, end: /"""/,
                        contains: [r.BACKSLASH_ESCAPE, o]
                    }, {
                        begin: /"/, end: /"/,
                        contains: [r.BACKSLASH_ESCAPE, o]
                    }]
                }, {
                    className: "regexp", variants: [{
                        begin: "///",
                        end: "///", contains: [o, r.HASH_COMMENT_MODE]
                    }, {
                        begin: "//[gim]{0,3}(?=\\W)",
                        relevance: 0
                    }, { begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/ }]
                }, {
                    begin: "@" + s
                }, {
                    subLanguage: "javascript", excludeBegin: !0, excludeEnd: !0, variants: [{
                        begin: "```", end: "```"
                    }, { begin: "`", end: "`" }]
                }]; o.contains = c
                ; const l = r.inherit(r.TITLE_MODE, { begin: s }), d = "(\\(.*\\)\\s*)?\\B[-=]>", g = {
                    className: "params", begin: "\\([^\\(]", returnBegin: !0, contains: [{
                        begin: /\(/,
                        end: /\)/, keywords: t, contains: ["self"].concat(c)
                    }]
                }; return {
                    name: "CoffeeScript",
                    aliases: ["coffee", "cson", "iced"], keywords: t, illegal: /\/\*/,
                    contains: c.concat([r.COMMENT("###", "###"), r.HASH_COMMENT_MODE, {
                        className: "function", begin: "^\\s*" + s + "\\s*=\\s*" + d, end: "[-=]>", returnBegin: !0,
                        contains: [l, g]
                    }, {
                        begin: /[:\(,=]\s*/, relevance: 0, contains: [{
                            className: "function",
                            begin: d, end: "[-=]>", returnBegin: !0, contains: [g]
                        }]
                    }, {
                        className: "class",
                        beginKeywords: "class", end: "$", illegal: /[:="\[\]]/, contains: [{
                            beginKeywords: "extends", endsWithParent: !0, illegal: /[:="\[\]]/, contains: [l]
                        }, l]
                    }, { begin: s + ":", end: ":", returnBegin: !0, returnEnd: !0, relevance: 0 }])
                }
        }
})());
hljs.registerLanguage("cpp", (() => {
    "use strict"; function e(e) {
        return ((...e) => e.map((e => (e => e ? "string" == typeof e ? e : e.source : null)(e))).join(""))("(", e, ")?")
    } return t => {
        const n = (t => {
            const n = t.COMMENT("//", "$", {
                contains: [{ begin: /\\\n/ }]
            }), r = "[a-zA-Z_]\\w*::", a = "(decltype\\(auto\\)|" + e(r) + "[a-zA-Z_]\\w*" + e("<[^<>]+>") + ")", s = {
                className: "keyword", begin: "\\b[a-z\\d_]*_t\\b"
            }, i = {
                className: "string",
                variants: [{
                    begin: '(u8?|U|L)?"', end: '"', illegal: "\\n",
                    contains: [t.BACKSLASH_ESCAPE]
                }, {
                    begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                    end: "'", illegal: "."
                }, t.END_SAME_AS_BEGIN({
                    begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/
                })]
            }, c = {
                className: "number", variants: [{ begin: "\\b(0b[01']+)" }, {
                    begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"
                }, {
                    begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
                }], relevance: 0
            }, o = {
                className: "meta", begin: /#\s*[a-z]+\b/, end: /$/, keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"
                }, contains: [{ begin: /\\\n/, relevance: 0 }, t.inherit(i, { className: "meta-string" }), {
                    className: "meta-string", begin: /<.*?>/, end: /$/, illegal: "\\n"
                }, n, t.C_BLOCK_COMMENT_MODE]
            }, l = {
                className: "title", begin: e(r) + t.IDENT_RE,
                relevance: 0
            }, d = e(r) + t.IDENT_RE + "\\s*\\(", u = {
                keyword: "int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_t short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",
                built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",
                literal: "true false nullptr NULL"
            }, p = [o, s, n, t.C_BLOCK_COMMENT_MODE, c, i], m = {
                variants: [{ begin: /=/, end: /;/ }, { begin: /\(/, end: /\)/ }, {
                    beginKeywords: "new throw return else", end: /;/
                }], keywords: u, contains: p.concat([{
                    begin: /\(/, end: /\)/, keywords: u, contains: p.concat(["self"]), relevance: 0
                }]),
                relevance: 0
            }, _ = {
                className: "function", begin: "(" + a + "[\\*&\\s]+)+" + d,
                returnBegin: !0, end: /[{;=]/, excludeEnd: !0, keywords: u, illegal: /[^\w\s\*&:<>.]/,
                contains: [{ begin: "decltype\\(auto\\)", keywords: u, relevance: 0 }, {
                    begin: d,
                    returnBegin: !0, contains: [l], relevance: 0
                }, {
                    className: "params", begin: /\(/,
                    end: /\)/, keywords: u, relevance: 0, contains: [n, t.C_BLOCK_COMMENT_MODE, i, c, s, {
                        begin: /\(/, end: /\)/, keywords: u, relevance: 0,
                        contains: ["self", n, t.C_BLOCK_COMMENT_MODE, i, c, s]
                    }]
                }, s, n, t.C_BLOCK_COMMENT_MODE, o]
            }; return {
                aliases: ["c", "cc", "h", "c++", "h++", "hpp", "hh", "hxx", "cxx"], keywords: u,
                disableAutodetect: !0, illegal: "</", contains: [].concat(m, _, p, [o, {
                    begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                    end: ">", keywords: u, contains: ["self", s]
                }, { begin: t.IDENT_RE + "::", keywords: u }, {
                        className: "class", beginKeywords: "enum class struct union", end: /[{;:<>=]/,
                        contains: [{ beginKeywords: "final class struct" }, t.TITLE_MODE]
                    }]), exports: {
                        preprocessor: o, strings: i, keywords: u
                    }
            }
        })(t)
        ; return n.disableAutodetect = !1, n.name = "C++",
            n.aliases = ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"], n
    }
})());
hljs.registerLanguage("csharp", (() => {
    "use strict"; return e => {
        var n = {
            keyword: ["abstract", "as", "base", "break", "case", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]).join(" "),
            built_in: "bool byte char decimal delegate double dynamic enum float int long nint nuint object sbyte short string ulong unit ushort",
            literal: "default false null true"
        }, a = e.inherit(e.TITLE_MODE, {
            begin: "[a-zA-Z](\\.?\\w)*"
        }), i = {
            className: "number", variants: [{
                begin: "\\b(0b[01']+)"
            }, {
                begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
            }, {
                begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
            }], relevance: 0
        }, s = {
            className: "string", begin: '@"', end: '"', contains: [{ begin: '""' }]
        }, t = e.inherit(s, { illegal: /\n/ }), r = {
            className: "subst", begin: /\{/, end: /\}/,
            keywords: n
        }, l = e.inherit(r, { illegal: /\n/ }), c = {
            className: "string", begin: /\$"/,
            end: '"', illegal: /\n/, contains: [{ begin: /\{\{/ }, {
                begin: /\}\}/
            }, e.BACKSLASH_ESCAPE, l]
        }, o = {
            className: "string", begin: /\$@"/, end: '"', contains: [{
                begin: /\{\{/
            }, { begin: /\}\}/ }, { begin: '""' }, r]
        }, d = e.inherit(o, {
            illegal: /\n/,
            contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, l]
        })
        ; r.contains = [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.C_BLOCK_COMMENT_MODE],
            l.contains = [d, c, t, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, i, e.inherit(e.C_BLOCK_COMMENT_MODE, {
                illegal: /\n/
            })]; var g = {
                variants: [o, c, s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            }, E = {
                begin: "<", end: ">", contains: [{ beginKeywords: "in out" }, a]
            }, _ = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", b = {
                begin: "@" + e.IDENT_RE, relevance: 0
            }; return {
                name: "C#", aliases: ["cs", "c#"],
                keywords: n, illegal: /::/, contains: [e.COMMENT("///", "$", {
                    returnBegin: !0,
                    contains: [{
                        className: "doctag", variants: [{ begin: "///", relevance: 0 }, {
                            begin: "\x3c!--|--\x3e"
                        }, { begin: "</?", end: ">" }]
                    }]
                }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    className: "meta", begin: "#",
                    end: "$", keywords: {
                        "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
                    }
                }, g, i, {
                    beginKeywords: "class interface", relevance: 0, end: /[{;=]/,
                    illegal: /[^\s:,]/, contains: [{
                        beginKeywords: "where class"
                    }, a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    beginKeywords: "namespace",
                    relevance: 0, end: /[{;=]/, illegal: /[^\s:]/,
                    contains: [a, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    beginKeywords: "record", relevance: 0, end: /[{;=]/, illegal: /[^\s:]/,
                    contains: [a, E, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    className: "meta",
                    begin: "^\\s*\\[", excludeBegin: !0, end: "\\]", excludeEnd: !0, contains: [{
                        className: "meta-string", begin: /"/, end: /"/
                    }]
                }, {
                    beginKeywords: "new return throw await else", relevance: 0
                }, {
                    className: "function",
                    begin: "(" + _ + "\\s+)+" + e.IDENT_RE + "\\s*(<.+>\\s*)?\\(", returnBegin: !0,
                    end: /\s*[{;=]/, excludeEnd: !0, keywords: n, contains: [{
                        beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                        relevance: 0
                    }, {
                        begin: e.IDENT_RE + "\\s*(<.+>\\s*)?\\(", returnBegin: !0,
                        contains: [e.TITLE_MODE, E], relevance: 0
                    }, {
                        className: "params", begin: /\(/, end: /\)/,
                        excludeBegin: !0, excludeEnd: !0, keywords: n, relevance: 0,
                        contains: [g, i, e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, b]
            }
    }
})());
hljs.registerLanguage("css", (() => {
    "use strict"; return e => {
        var n = "[a-zA-Z-][a-zA-Z0-9_-]*", a = {
            begin: /([*]\s?)?(?:[A-Z_.\-\\]+|--[a-zA-Z0-9_-]+)\s*(\/\*\*\/)?:/,
            returnBegin: !0, end: ";", endsWithParent: !0, contains: [{
                className: "attribute",
                begin: /\S/, end: ":", excludeEnd: !0, starts: {
                    endsWithParent: !0, excludeEnd: !0,
                    contains: [{
                        begin: /[\w-]+\(/, returnBegin: !0, contains: [{
                            className: "built_in",
                            begin: /[\w-]+/
                        }, {
                            begin: /\(/, end: /\)/,
                            contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                        }]
                    }, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
                        className: "number", begin: "#[0-9A-Fa-f]+"
                    }, { className: "meta", begin: "!important" }]
                }
            }]
        }; return {
            name: "CSS", case_insensitive: !0, illegal: /[=|'\$]/,
            contains: [e.C_BLOCK_COMMENT_MODE, {
                className: "selector-id",
                begin: /#[A-Za-z0-9_-]+/
            }, { className: "selector-class", begin: "\\." + n }, {
                className: "selector-attr", begin: /\[/, end: /\]/, illegal: "$",
                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
            }, {
                className: "selector-pseudo",
                begin: /:(:)?[a-zA-Z0-9_+()"'.-]+/
            }, {
                begin: "@(page|font-face)",
                lexemes: "@[a-z-]+", keywords: "@page @font-face"
            }, {
                begin: "@", end: "[{;]",
                illegal: /:/, returnBegin: !0, contains: [{
                    className: "keyword",
                    begin: /@-?\w[\w]*(-\w+)*/
                }, {
                    begin: /\s/, endsWithParent: !0, excludeEnd: !0,
                    relevance: 0, keywords: "and or not only", contains: [{
                        begin: /[a-z-]+:/,
                        className: "attribute"
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                }]
            }, { className: "selector-tag", begin: n, relevance: 0 }, {
                begin: /\{/, end: /\}/,
                illegal: /\S/, contains: [e.C_BLOCK_COMMENT_MODE, { begin: /;/ }, a]
            }]
        }
    }
})());
hljs.registerLanguage("diff", (() => {
    "use strict"; return e => ({
        name: "Diff",
        aliases: ["patch"], contains: [{
            className: "meta", relevance: 10, variants: [{
                begin: /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/
            }, { begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ }, {
                begin: /^--- +\d+,\d+ +----$/
            }]
        }, {
            className: "comment", variants: [{
                begin: /Index: /,
                end: /$/
            }, { begin: /^index/, end: /$/ }, { begin: /={3,}/, end: /$/ }, {
                begin: /^-{3}/, end: /$/
            }, { begin: /^\*{3} /, end: /$/ }, { begin: /^\+{3}/, end: /$/ }, { begin: /^\*{15}$/ }, {
                begin: /^diff --git/, end: /$/
            }]
        }, { className: "addition", begin: /^\+/, end: /$/ }, {
            className: "deletion", begin: /^-/, end: /$/
        }, {
            className: "addition", begin: /^!/,
            end: /$/
        }]
    })
})());
hljs.registerLanguage("go", (() => {
    "use strict"; return e => {
        const n = {
            keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
            literal: "true false iota nil",
            built_in: "append cap close complex copy imag len make new panic print println real recover delete"
        }; return {
            name: "Go", aliases: ["golang"], keywords: n, illegal: "</",
            contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "string",
                variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, { begin: "`", end: "`" }]
            }, {
                className: "number", variants: [{
                    begin: e.C_NUMBER_RE + "[i]", relevance: 1
                }, e.C_NUMBER_MODE]
            }, { begin: /:=/ }, {
                className: "function", beginKeywords: "func",
                end: "\\s*(\\{|$)", excludeEnd: !0, contains: [e.TITLE_MODE, {
                    className: "params",
                    begin: /\(/, end: /\)/, keywords: n, illegal: /["']/
                }]
            }]
        }
    }
})());
hljs.registerLanguage("http", (() => {
    "use strict"; function e(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null; var n
        })).join("")
    } return n => {
        const a = "HTTP/(2|1\\.[01])", s = [{
            className: "attribute",
            begin: e("^", /[A-Za-z][A-Za-z0-9-]*/, "(?=\\:\\s)"), starts: {
                contains: [{
                    className: "punctuation", begin: /: /, relevance: 0, starts: { end: "$", relevance: 0 }
                }]
            }
        }, { begin: "\\n\\n", starts: { subLanguage: [], endsWithParent: !0 } }]; return {
            name: "HTTP", aliases: ["https"], illegal: /\S/, contains: [{
                begin: "^(?=" + a + " \\d{3})",
                end: /$/, contains: [{ className: "meta", begin: a }, {
                    className: "number",
                    begin: "\\b\\d{3}\\b"
                }], starts: { end: /\b\B/, illegal: /\S/, contains: s }
            }, {
                begin: "(?=^[A-Z]+ (.*?) " + a + "$)", end: /$/, contains: [{
                    className: "string",
                    begin: " ", end: " ", excludeBegin: !0, excludeEnd: !0
                }, { className: "meta", begin: a }, {
                    className: "keyword", begin: "[A-Z]+"
                }], starts: { end: /\b\B/, illegal: /\S/, contains: s }
            }]
        }
    }
})());
hljs.registerLanguage("ini", (() => {
    "use strict"; function e(e) {
        return e ? "string" == typeof e ? e : e.source : null
    } function n(...n) {
        return n.map((n => e(n))).join("")
    } return s => {
        const a = {
            className: "number",
            relevance: 0, variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: s.NUMBER_RE }]
        }, i = s.COMMENT(); i.variants = [{ begin: /;/, end: /$/ }, { begin: /#/, end: /$/ }]; const t = {
            className: "variable", variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, {
                begin: /\$\{(.*?)\}/
            }]
        }, r = { className: "literal", begin: /\bon|off|true|false|yes|no\b/ }, l = {
            className: "string", contains: [s.BACKSLASH_ESCAPE], variants: [{
                begin: "'''",
                end: "'''", relevance: 10
            }, { begin: '"""', end: '"""', relevance: 10 }, {
                begin: '"', end: '"'
            }, { begin: "'", end: "'" }]
        }, c = {
            begin: /\[/, end: /\]/, contains: [i, r, t, l, a, "self"],
            relevance: 0
        }, g = "(" + [/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/].map((n => e(n))).join("|") + ")"
            ; return {
                name: "TOML, also INI", aliases: ["toml"], case_insensitive: !0, illegal: /\S/,
                contains: [i, { className: "section", begin: /\[+/, end: /\]+/ }, {
                    begin: n(g, "(\\s*\\.\\s*", g, ")*", n("(?=", /\s*=\s*[^#\s]/, ")")), className: "attr",
                    starts: { end: /$/, contains: [i, c, r, t, l, a] }
                }]
            }
    }
})());
hljs.registerLanguage("java", (() => {
    "use strict"
        ; var e = "\\.([0-9](_*[0-9])*)", n = "[0-9a-fA-F](_*[0-9a-fA-F])*", a = {
            className: "number", variants: [{
                begin: `(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
            }, { begin: `\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` }, {
                begin: `(${e})[fFdD]?\\b`
            }, { begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b" }, {
                begin: `\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
            }, { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" }, { begin: `\\b0[xX](${n})[lL]?\\b` }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }],
            relevance: 0
        }; return e => {
            var n = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do", s = {
                className: "meta", begin: "@[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*",
                contains: [{ begin: /\(/, end: /\)/, contains: ["self"] }]
            }; const r = a; return {
                name: "Java", aliases: ["jsp"], keywords: n, illegal: /<\/|#/,
                contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0, contains: [{
                        begin: /\w+@/,
                        relevance: 0
                    }, { className: "doctag", begin: "@[A-Za-z]+" }]
                }), {
                    begin: /import java\.[a-z]+\./, keywords: "import", relevance: 2
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                    className: "class", beginKeywords: "class interface enum", end: /[{;=]/,
                    excludeEnd: !0, keywords: "class interface enum", illegal: /[:"\[\]]/, contains: [{
                        beginKeywords: "extends implements"
                    }, e.UNDERSCORE_TITLE_MODE]
                }, {
                    beginKeywords: "new throw return else", relevance: 0
                }, {
                    className: "class",
                    begin: "record\\s+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(", returnBegin: !0, excludeEnd: !0,
                    end: /[{;=]/, keywords: n, contains: [{ beginKeywords: "record" }, {
                        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(", returnBegin: !0, relevance: 0,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        className: "params", begin: /\(/, end: /\)/,
                        keywords: n, relevance: 0, contains: [e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    className: "function",
                    begin: "([\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(<[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*(\\s*,\\s*[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*)*>)?\\s+)+" + e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                    returnBegin: !0, end: /[{;=]/, excludeEnd: !0, keywords: n, contains: [{
                        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(", returnBegin: !0, relevance: 0,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        className: "params", begin: /\(/, end: /\)/,
                        keywords: n, relevance: 0,
                        contains: [s, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, r, s]
            }
        }
})());
hljs.registerLanguage("javascript", (() => {
    "use strict"
        ; const e = "[A-Za-z$_][0-9A-Za-z$_]*", n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], a = ["true", "false", "null", "undefined", "NaN", "Infinity"], s = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"])
        ; function r(e) { return i("(?=", e, ")") } function i(...e) {
            return e.map((e => {
                return (n = e) ? "string" == typeof n ? n : n.source : null; var n
            })).join("")
        } return t => {
            const c = e, o = {
                begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
                isTrulyOpeningTag: (e, n) => {
                    const a = e[0].length + e.index, s = e.input[a]
                    ; "<" !== s ? ">" === s && (((e, { after: n }) => {
                        const a = "</" + e[0].slice(1)
                        ; return -1 !== e.input.indexOf(a, n)
                    })(e, {
                        after: a
                    }) || n.ignoreMatch()) : n.ignoreMatch()
                }
            }, l = {
                $pattern: e, keyword: n.join(" "),
                literal: a.join(" "), built_in: s.join(" ")
            }, b = "\\.([0-9](_?[0-9])*)", g = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", d = {
                className: "number", variants: [{
                    begin: `(\\b(${g})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`
                }, {
                    begin: `\\b(${g})\\b((${b})\\b|\\.)?|(${b})\\b`
                }, {
                    begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                }, {
                    begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                }, {
                    begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, {
                    begin: "\\b0[0-7]+n?\\b"
                }], relevance: 0
            }, E = {
                className: "subst", begin: "\\$\\{",
                end: "\\}", keywords: l, contains: []
            }, u = {
                begin: "html`", end: "", starts: {
                    end: "`",
                    returnEnd: !1, contains: [t.BACKSLASH_ESCAPE, E], subLanguage: "xml"
                }
            }, _ = {
                begin: "css`", end: "", starts: {
                    end: "`", returnEnd: !1,
                    contains: [t.BACKSLASH_ESCAPE, E], subLanguage: "css"
                }
            }, m = {
                className: "string",
                begin: "`", end: "`", contains: [t.BACKSLASH_ESCAPE, E]
            }, N = {
                className: "comment",
                variants: [t.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0, contains: [{
                        className: "doctag", begin: "@[A-Za-z]+", contains: [{
                            className: "type", begin: "\\{",
                            end: "\\}", relevance: 0
                        }, {
                            className: "variable", begin: c + "(?=\\s*(-)|$)",
                            endsParent: !0, relevance: 0
                        }, { begin: /(?=[^\n])\s/, relevance: 0 }]
                    }]
                }), t.C_BLOCK_COMMENT_MODE, t.C_LINE_COMMENT_MODE]
            }, y = [t.APOS_STRING_MODE, t.QUOTE_STRING_MODE, u, _, m, d, t.REGEXP_MODE]
                ; E.contains = y.concat({
                    begin: /\{/, end: /\}/, keywords: l, contains: ["self"].concat(y)
                }); const f = [].concat(N, E.contains), A = f.concat([{
                    begin: /\(/, end: /\)/, keywords: l,
                    contains: ["self"].concat(f)
                }]), p = {
                    className: "params", begin: /\(/, end: /\)/,
                    excludeBegin: !0, excludeEnd: !0, keywords: l, contains: A
                }; return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"], keywords: l, exports: { PARAMS_CONTAINS: A },
                    illegal: /#(?![$_A-z])/, contains: [t.SHEBANG({
                        label: "shebang", binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict", className: "meta", relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, t.APOS_STRING_MODE, t.QUOTE_STRING_MODE, u, _, m, N, d, {
                        begin: i(/[{,\n]\s*/, r(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + "\\s*:"))),
                        relevance: 0, contains: [{ className: "attr", begin: c + r("\\s*:"), relevance: 0 }]
                    }, {
                        begin: "(" + t.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case", contains: [N, t.REGEXP_MODE, {
                            className: "function",
                            begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + t.UNDERSCORE_IDENT_RE + ")\\s*=>",
                            returnBegin: !0, end: "\\s*=>", contains: [{
                                className: "params", variants: [{
                                    begin: t.UNDERSCORE_IDENT_RE, relevance: 0
                                }, {
                                    className: null, begin: /\(\s*\)/, skip: !0
                                }, { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: l, contains: A }]
                            }]
                        }, { begin: /,/, relevance: 0 }, { className: "", begin: /\s/, end: /\s*/, skip: !0 }, {
                                variants: [{ begin: "<>", end: "</>" }, {
                                    begin: o.begin, "on:begin": o.isTrulyOpeningTag,
                                    end: o.end
                                }], subLanguage: "xml", contains: [{
                                    begin: o.begin, end: o.end, skip: !0,
                                    contains: ["self"]
                                }]
                            }], relevance: 0
                    }, {
                        className: "function",
                        beginKeywords: "function", end: /[{;]/, excludeEnd: !0, keywords: l,
                        contains: ["self", t.inherit(t.TITLE_MODE, { begin: c }), p], illegal: /%/
                    }, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        className: "function",
                        begin: t.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0, contains: [p, t.inherit(t.TITLE_MODE, { begin: c })]
                    }, {
                        variants: [{
                            begin: "\\." + c
                        }, { begin: "\\$" + c }], relevance: 0
                    }, {
                        className: "class",
                        beginKeywords: "class", end: /[{;=]/, excludeEnd: !0, illegal: /[:"[\]]/, contains: [{
                            beginKeywords: "extends"
                        }, t.UNDERSCORE_TITLE_MODE]
                    }, {
                        begin: /\b(?=constructor)/,
                        end: /[{;]/, excludeEnd: !0, contains: [t.inherit(t.TITLE_MODE, { begin: c }), "self", p]
                    }, {
                        begin: "(get|set)\\s+(?=" + c + "\\()", end: /\{/, keywords: "get set",
                        contains: [t.inherit(t.TITLE_MODE, { begin: c }), { begin: /\(\)/ }, p]
                    }, { begin: /\$[(.]/ }]
                }
        }
})());
hljs.registerLanguage("json", (() => {
    "use strict"; return n => {
        const e = {
            literal: "true false null"
        }, i = [n.C_LINE_COMMENT_MODE, n.C_BLOCK_COMMENT_MODE], a = [n.QUOTE_STRING_MODE, n.C_NUMBER_MODE], l = {
            end: ",", endsWithParent: !0, excludeEnd: !0, contains: a, keywords: e
        }, t = {
            begin: /\{/,
            end: /\}/, contains: [{
                className: "attr", begin: /"/, end: /"/,
                contains: [n.BACKSLASH_ESCAPE], illegal: "\\n"
            }, n.inherit(l, {
                begin: /:/
            })].concat(i), illegal: "\\S"
        }, s = {
            begin: "\\[", end: "\\]", contains: [n.inherit(l)],
            illegal: "\\S"
        }; return a.push(t, s), i.forEach((n => { a.push(n) })), {
            name: "JSON",
            contains: a, keywords: e, illegal: "\\S"
        }
    }
})());
hljs.registerLanguage("kotlin", (() => {
    "use strict"
        ; var e = "\\.([0-9](_*[0-9])*)", n = "[0-9a-fA-F](_*[0-9a-fA-F])*", a = {
            className: "number", variants: [{
                begin: `(\\b([0-9](_*[0-9])*)((${e})|\\.)?|(${e}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
            }, { begin: `\\b([0-9](_*[0-9])*)((${e})[fFdD]?\\b|\\.([fFdD]\\b)?)` }, {
                begin: `(${e})[fFdD]?\\b`
            }, { begin: "\\b([0-9](_*[0-9])*)[fFdD]\\b" }, {
                begin: `\\b0[xX]((${n})\\.?|(${n})?\\.(${n}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`
            }, { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" }, { begin: `\\b0[xX](${n})[lL]?\\b` }, {
                begin: "\\b0(_*[0-7])*[lL]?\\b"
            }, { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }],
            relevance: 0
        }; return e => {
            const n = {
                keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                literal: "true false null"
            }, i = {
                className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@"
            }, s = { className: "subst", begin: /\$\{/, end: /\}/, contains: [e.C_NUMBER_MODE] }, t = {
                className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE
            }, r = {
                className: "string",
                variants: [{ begin: '"""', end: '"""(?=[^"])', contains: [t, s] }, {
                    begin: "'", end: "'",
                    illegal: /\n/, contains: [e.BACKSLASH_ESCAPE]
                }, {
                    begin: '"', end: '"', illegal: /\n/,
                    contains: [e.BACKSLASH_ESCAPE, t, s]
                }]
            }; s.contains.push(r); const l = {
                className: "meta",
                begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
            }, c = {
                className: "meta", begin: "@" + e.UNDERSCORE_IDENT_RE, contains: [{
                    begin: /\(/,
                    end: /\)/, contains: [e.inherit(r, { className: "meta-string" })]
                }]
            }, o = a, b = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }), E = {
                variants: [{ className: "type", begin: e.UNDERSCORE_IDENT_RE }, {
                    begin: /\(/, end: /\)/,
                    contains: []
                }]
            }, d = E; return d.variants[1].contains = [E], E.variants[1].contains = [d],
            {
                name: "Kotlin", aliases: ["kt"], keywords: n, contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0, contains: [{ className: "doctag", begin: "@[A-Za-z]+" }]
                }), e.C_LINE_COMMENT_MODE, b, {
                    className: "keyword",
                    begin: /\b(break|continue|return|this)\b/, starts: {
                        contains: [{
                            className: "symbol",
                            begin: /@\w+/
                        }]
                    }
                }, i, l, c, {
                    className: "function", beginKeywords: "fun", end: "[(]|$",
                    returnBegin: !0, excludeEnd: !0, keywords: n, relevance: 5, contains: [{
                        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(", returnBegin: !0, relevance: 0,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        className: "type", begin: /</, end: />/,
                        keywords: "reified", relevance: 0
                    }, {
                        className: "params", begin: /\(/, end: /\)/,
                        endsParent: !0, keywords: n, relevance: 0, contains: [{
                            begin: /:/, end: /[=,\/]/,
                            endsWithParent: !0, contains: [E, e.C_LINE_COMMENT_MODE, b], relevance: 0
                        }, e.C_LINE_COMMENT_MODE, b, l, c, r, e.C_NUMBER_MODE]
                    }, b]
                }, {
                    className: "class",
                    beginKeywords: "class interface trait", end: /[:\{(]|$/, excludeEnd: !0,
                    illegal: "extends implements", contains: [{
                        beginKeywords: "public protected internal private constructor"
                    }, e.UNDERSCORE_TITLE_MODE, {
                        className: "type", begin: /</, end: />/, excludeBegin: !0,
                        excludeEnd: !0, relevance: 0
                    }, {
                        className: "type", begin: /[,:]\s*/, end: /[<\(,]|$/,
                        excludeBegin: !0, returnEnd: !0
                    }, l, c]
                }, r, {
                    className: "meta", begin: "^#!/usr/bin/env",
                    end: "$", illegal: "\n"
                }, o]
            }
        }
})());
hljs.registerLanguage("less", (() => {
    "use strict"; return e => {
        var n = "([\\w-]+|@\\{[\\w-]+\\})", a = [], s = [], t = e => ({
            className: "string",
            begin: "~?" + e + ".*?" + e
        }), r = (e, n, a) => ({ className: e, begin: n, relevance: a }), i = {
            begin: "\\(", end: "\\)", contains: s, relevance: 0
        }
            ; s.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t("'"), t('"'), e.CSS_NUMBER_MODE, {
                begin: "(url|data-uri)\\(", starts: {
                    className: "string", end: "[\\)\\n]",
                    excludeEnd: !0
                }
            }, r("number", "#[0-9A-Fa-f]+\\b"), i, r("variable", "@@?[\\w-]+", 10), r("variable", "@\\{[\\w-]+\\}"), r("built_in", "~?`[^`]*?`"), {
                className: "attribute", begin: "[\\w-]+\\s*:", end: ":", returnBegin: !0, excludeEnd: !0
            }, { className: "meta", begin: "!important" }); var c = s.concat({
                begin: /\{/, end: /\}/,
                contains: a
            }), l = {
                beginKeywords: "when", endsWithParent: !0, contains: [{
                    beginKeywords: "and not"
                }].concat(s)
            }, g = {
                begin: n + "\\s*:", returnBegin: !0,
                end: "[;}]", relevance: 0, contains: [{
                    className: "attribute", begin: n, end: ":",
                    excludeEnd: !0, starts: { endsWithParent: !0, illegal: "[<=$]", relevance: 0, contains: s }
                }]
            }, d = {
                className: "keyword",
                begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                starts: { end: "[;{}]", returnEnd: !0, contains: s, relevance: 0 }
            }, o = {
                className: "variable", variants: [{ begin: "@[\\w-]+\\s*:", relevance: 15 }, {
                    begin: "@[\\w-]+"
                }], starts: { end: "[;}]", returnEnd: !0, contains: c }
            }, b = {
                variants: [{
                    begin: "[\\.#:&\\[>]", end: "[;{}]"
                }, { begin: n, end: /\{/ }], returnBegin: !0,
                returnEnd: !0, illegal: "[<='$\"]", relevance: 0,
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, l, r("keyword", "all\\b"), r("variable", "@\\{[\\w-]+\\}"), r("selector-tag", n + "%?", 0), r("selector-id", "#" + n), r("selector-class", "\\." + n, 0), r("selector-tag", "&", 0), {
                    className: "selector-attr", begin: "\\[", end: "\\]"
                }, {
                    className: "selector-pseudo",
                    begin: /:(:)?[a-zA-Z0-9_\-+()"'.]+/
                }, { begin: "\\(", end: "\\)", contains: c }, {
                    begin: "!important"
                }]
            }
            ; return a.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, d, o, g, b), {
                name: "Less", case_insensitive: !0, illegal: "[=>'/<($\"]", contains: a
            }
    }
})());
hljs.registerLanguage("lua", (() => {
    "use strict"; return e => {
        const t = "\\[=*\\[", a = "\\]=*\\]", n = {
            begin: t, end: a, contains: ["self"]
        }, o = [e.COMMENT("--(?!\\[=*\\[)", "$"), e.COMMENT("--\\[=*\\[", a, {
            contains: [n],
            relevance: 10
        })]; return {
            name: "Lua", keywords: {
                $pattern: e.UNDERSCORE_IDENT_RE,
                literal: "true false nil",
                keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
                built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
            }, contains: o.concat([{
                className: "function", beginKeywords: "function", end: "\\)",
                contains: [e.inherit(e.TITLE_MODE, {
                    begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
                }), {
                    className: "params",
                    begin: "\\(", endsWithParent: !0, contains: o
                }].concat(o)
            }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                className: "string",
                begin: t, end: a, contains: [n], relevance: 5
            }])
        }
    }
})());
hljs.registerLanguage("makefile", (() => {
    "use strict"; return e => {
        const i = {
            className: "variable", variants: [{
                begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                contains: [e.BACKSLASH_ESCAPE]
            }, { begin: /\$[@%<?\^\+\*]/ }]
        }, a = {
            className: "string",
            begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, i]
        }, n = {
            className: "variable",
            begin: /\$\([\w-]+\s/, end: /\)/, keywords: {
                built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"
            }, contains: [i]
        }, s = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" }, r = {
            className: "section", begin: /^[^\s]+:/, end: /$/, contains: [i]
        }; return {
            name: "Makefile", aliases: ["mk", "mak", "make"], keywords: {
                $pattern: /[\w-]+/,
                keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
            }, contains: [e.HASH_COMMENT_MODE, i, a, n, s, {
                className: "meta", begin: /^\.PHONY:/,
                end: /$/, keywords: { $pattern: /[\.\w]+/, "meta-keyword": ".PHONY" }
            }, r]
        }
    }
})());
hljs.registerLanguage("xml", (() => {
    "use strict"; function e(e) {
        return e ? "string" == typeof e ? e : e.source : null
    } function n(e) { return a("(?=", e, ")") }
    function a(...n) { return n.map((n => e(n))).join("") } function s(...n) {
        return "(" + n.map((n => e(n))).join("|") + ")"
    } return e => {
        const t = a(/[A-Z_]/, a("(", /[A-Z0-9_.-]+:/, ")?"), /[A-Z0-9_.-]*/), i = {
            className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
        }, r = {
            begin: /\s/,
            contains: [{ className: "meta-keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ }]
        }, c = e.inherit(r, { begin: /\(/, end: /\)/ }), l = e.inherit(e.APOS_STRING_MODE, {
            className: "meta-string"
        }), g = e.inherit(e.QUOTE_STRING_MODE, {
            className: "meta-string"
        }), m = {
            endsWithParent: !0, illegal: /</, relevance: 0,
            contains: [{ className: "attr", begin: /[A-Za-z0-9._:-]+/, relevance: 0 }, {
                begin: /=\s*/,
                relevance: 0, contains: [{
                    className: "string", endsParent: !0, variants: [{
                        begin: /"/,
                        end: /"/, contains: [i]
                    }, { begin: /'/, end: /'/, contains: [i] }, { begin: /[^\s"'=<>`]+/ }]
                }]
            }]
        }; return {
            name: "HTML, XML",
            aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
            case_insensitive: !0, contains: [{
                className: "meta", begin: /<![a-z]/, end: />/,
                relevance: 10, contains: [r, g, l, c, {
                    begin: /\[/, end: /\]/, contains: [{
                        className: "meta",
                        begin: /<![a-z]/, end: />/, contains: [r, c, g, l]
                    }]
                }]
            }, e.COMMENT(/<!--/, /-->/, {
                relevance: 10
            }), { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 }, i, {
                className: "meta", begin: /<\?xml/, end: /\?>/, relevance: 10
            }, {
                className: "tag",
                begin: /<style(?=\s|>)/, end: />/, keywords: { name: "style" }, contains: [m], starts: {
                    end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"]
                }
            }, {
                className: "tag",
                begin: /<script(?=\s|>)/, end: />/, keywords: { name: "script" }, contains: [m], starts: {
                    end: /<\/script>/, returnEnd: !0, subLanguage: ["javascript", "handlebars", "xml"]
                }
            }, {
                className: "tag", begin: /<>|<\/>/
            }, {
                className: "tag",
                begin: a(/</, n(a(t, s(/\/>/, />/, /\s/)))), end: /\/?>/, contains: [{
                    className: "name",
                    begin: t, relevance: 0, starts: m
                }]
            }, {
                className: "tag", begin: a(/<\//, n(a(t, />/))),
                contains: [{ className: "name", begin: t, relevance: 0 }, { begin: />/, relevance: 0 }]
            }]
        }
    }
})());
hljs.registerLanguage("markdown", (() => {
    "use strict"; function n(...n) {
        return n.map((n => {
            return (e = n) ? "string" == typeof e ? e : e.source : null; var e
        })).join("")
    } return e => {
        const a = {
            begin: /<\/?[A-Za-z_]/, end: ">",
            subLanguage: "xml", relevance: 0
        }, i = {
            variants: [{
                begin: /\[.+?\]\[.*?\]/, relevance: 0
            }, {
                begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                relevance: 2
            }, {
                begin: n(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                relevance: 2
            }, { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 }, {
                begin: /\[.+?\]\(.*?\)/, relevance: 0
            }], returnBegin: !0, contains: [{
                className: "string", relevance: 0, begin: "\\[", end: "\\]", excludeBegin: !0,
                returnEnd: !0
            }, {
                className: "link", relevance: 0, begin: "\\]\\(", end: "\\)",
                excludeBegin: !0, excludeEnd: !0
            }, {
                className: "symbol", relevance: 0, begin: "\\]\\[",
                end: "\\]", excludeBegin: !0, excludeEnd: !0
            }]
        }, s = {
            className: "strong", contains: [],
            variants: [{ begin: /_{2}/, end: /_{2}/ }, { begin: /\*{2}/, end: /\*{2}/ }]
        }, c = {
            className: "emphasis", contains: [], variants: [{ begin: /\*(?!\*)/, end: /\*/ }, {
                begin: /_(?!_)/, end: /_/, relevance: 0
            }]
        }; s.contains.push(c), c.contains.push(s)
            ; let t = [a, i]
            ; return s.contains = s.contains.concat(t), c.contains = c.contains.concat(t),
                t = t.concat(s, c), {
                    name: "Markdown", aliases: ["md", "mkdown", "mkd"], contains: [{
                        className: "section", variants: [{ begin: "^#{1,6}", end: "$", contains: t }, {
                            begin: "(?=^.+?\\n[=-]{2,}$)", contains: [{ begin: "^[=-]*$" }, {
                                begin: "^", end: "\\n",
                                contains: t
                            }]
                        }]
                    }, a, {
                        className: "bullet", begin: "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
                        end: "\\s+", excludeEnd: !0
                    }, s, c, {
                        className: "quote", begin: "^>\\s+", contains: t,
                        end: "$"
                    }, {
                        className: "code", variants: [{ begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" }, {
                            begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"
                        }, { begin: "```", end: "```+[ ]*$" }, {
                            begin: "~~~", end: "~~~+[ ]*$"
                        }, { begin: "`.+?`" }, {
                            begin: "(?=^( {4}|\\t))",
                            contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }], relevance: 0
                        }]
                    }, {
                        begin: "^[-\\*]{3,}", end: "$"
                    }, i, {
                        begin: /^\[[^\n]+\]:/, returnBegin: !0, contains: [{
                            className: "symbol", begin: /\[/, end: /\]/, excludeBegin: !0, excludeEnd: !0
                        }, {
                            className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0
                        }]
                    }]
            }
    }
})());
hljs.registerLanguage("nginx", (() => {
    "use strict"; return e => {
        const n = {
            className: "variable", variants: [{ begin: /\$\d+/ }, { begin: /\$\{/, end: /\}/ }, {
                begin: /[$@]/ + e.UNDERSCORE_IDENT_RE
            }]
        }, a = {
            endsWithParent: !0, keywords: {
                $pattern: "[a-z/_]+",
                literal: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
            }, relevance: 0, illegal: "=>", contains: [e.HASH_COMMENT_MODE, {
                className: "string",
                contains: [e.BACKSLASH_ESCAPE, n], variants: [{ begin: /"/, end: /"/ }, {
                    begin: /'/, end: /'/
                }]
            }, {
                begin: "([a-z]+):/", end: "\\s", endsWithParent: !0, excludeEnd: !0, contains: [n]
            }, {
                className: "regexp", contains: [e.BACKSLASH_ESCAPE, n], variants: [{
                    begin: "\\s\\^",
                    end: "\\s|\\{|;", returnEnd: !0
                }, { begin: "~\\*?\\s+", end: "\\s|\\{|;", returnEnd: !0 }, {
                    begin: "\\*(\\.[a-z\\-]+)+"
                }, { begin: "([a-z\\-]+\\.)+\\*" }]
            }, {
                className: "number",
                begin: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
            }, {
                className: "number", begin: "\\b\\d+[kKmMgGdshdwy]*\\b", relevance: 0
            }, n]
        }; return {
            name: "Nginx config", aliases: ["nginxconf"], contains: [e.HASH_COMMENT_MODE, {
                begin: e.UNDERSCORE_IDENT_RE + "\\s+\\{", returnBegin: !0, end: /\{/, contains: [{
                    className: "section", begin: e.UNDERSCORE_IDENT_RE
                }], relevance: 0
            }, {
                begin: e.UNDERSCORE_IDENT_RE + "\\s", end: ";|\\{", returnBegin: !0, contains: [{
                    className: "attribute", begin: e.UNDERSCORE_IDENT_RE, starts: a
                }], relevance: 0
            }],
            illegal: "[^\\s\\}]"
        }
    }
})());
hljs.registerLanguage("objectivec", (() => {
    "use strict"; return e => {
        const n = /[a-zA-Z@][a-zA-Z0-9_]*/, _ = {
            $pattern: n,
            keyword: "@interface @class @protocol @implementation"
        }; return {
            name: "Objective-C", aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
            keywords: {
                $pattern: n,
                keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
                literal: "false true FALSE TRUE nil YES NO NULL",
                built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
            }, illegal: "</", contains: [{
                className: "built_in",
                begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
            }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                className: "string", variants: [{
                    begin: '@"', end: '"', illegal: "\\n",
                    contains: [e.BACKSLASH_ESCAPE]
                }]
            }, {
                className: "meta", begin: /#\s*[a-z]+\b/, end: /$/,
                keywords: {
                    "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
                }, contains: [{ begin: /\\\n/, relevance: 0 }, e.inherit(e.QUOTE_STRING_MODE, {
                    className: "meta-string"
                }), {
                    className: "meta-string", begin: /<.*?>/, end: /$/,
                    illegal: "\\n"
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
            }, {
                className: "class", begin: "(" + _.keyword.split(" ").join("|") + ")\\b", end: /(\{|$)/,
                excludeEnd: !0, keywords: _, contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0
            }]
        }
    }
})());
hljs.registerLanguage("perl", (() => {
    "use strict"; function e(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null; var n
        })).join("")
    } return n => {
        const t = /[dualxmsipn]{0,12}/, s = {
            $pattern: /[\w.]+/,
            keyword: "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmget sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when"
        }, r = { className: "subst", begin: "[$@]\\{", end: "\\}", keywords: s }, i = {
            begin: /->\{/,
            end: /\}/
        }, a = {
            variants: [{ begin: /\$\d/ }, {
                begin: e(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")
            }, { begin: /[$%@][^\s\w{]/, relevance: 0 }]
        }, o = [n.BACKSLASH_ESCAPE, r, a], c = [a, n.HASH_COMMENT_MODE, n.COMMENT(/^=\w/, /=cut/, {
            endsWithParent: !0
        }), i, {
            className: "string", contains: o, variants: [{
                begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5
            }, {
                begin: "q[qwxr]?\\s*\\[",
                end: "\\]", relevance: 5
            }, { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 }, {
                begin: "q[qwxr]?\\s*\\|", end: "\\|", relevance: 5
            }, {
                begin: "q[qwxr]?\\s*<", end: ">",
                relevance: 5
            }, { begin: "qw\\s+q", end: "q", relevance: 5 }, {
                begin: "'", end: "'",
                contains: [n.BACKSLASH_ESCAPE]
            }, { begin: '"', end: '"' }, {
                begin: "`", end: "`",
                contains: [n.BACKSLASH_ESCAPE]
            }, { begin: /\{\w+\}/, contains: [], relevance: 0 }, {
                begin: "-?\\w+\\s*=>", contains: [], relevance: 0
            }]
            }, {
                className: "number",
                begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                relevance: 0
            }, {
                begin: "(\\/\\/|" + n.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                keywords: "split return print reverse grep", relevance: 0,
                contains: [n.HASH_COMMENT_MODE, {
                    className: "regexp",
                    begin: e(/(s|tr|y)/, /\//, /(\\.|[^\\\/])*/, /\//, /(\\.|[^\\\/])*/, /\//, t),
                    relevance: 10
                }, {
                    className: "regexp", begin: /(m|qr)?\//, end: e(/\//, t),
                    contains: [n.BACKSLASH_ESCAPE], relevance: 0
                }]
            }, {
                className: "function",
                beginKeywords: "sub", end: "(\\s*\\(.*?\\))?[;{]", excludeEnd: !0, relevance: 5,
                contains: [n.TITLE_MODE]
            }, { begin: "-\\w\\b", relevance: 0 }, {
                begin: "^__DATA__$",
                end: "^__END__$", subLanguage: "mojolicious", contains: [{
                    begin: "^@@.*", end: "$",
                    className: "comment"
                }]
            }]; return r.contains = c, i.contains = c, {
                name: "Perl",
                aliases: ["pl", "pm"], keywords: s, contains: c
            }
    }
})());
hljs.registerLanguage("php", (() => {
    "use strict"; return e => {
        const r = {
            className: "variable",
            begin: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$])"
        }, t = {
            className: "meta", variants: [{ begin: /<\?php/, relevance: 10 }, { begin: /<\?[=]?/ }, {
                begin: /\?>/
            }]
        }, a = {
            className: "subst", variants: [{ begin: /\$\w+/ }, {
                begin: /\{\$/,
                end: /\}/
            }]
        }, n = e.inherit(e.APOS_STRING_MODE, {
            illegal: null
        }), i = e.inherit(e.QUOTE_STRING_MODE, {
            illegal: null,
            contains: e.QUOTE_STRING_MODE.contains.concat(a)
        }), o = e.END_SAME_AS_BEGIN({
            begin: /<<<[ \t]*(\w+)\n/, end: /[ \t]*(\w+)\b/,
            contains: e.QUOTE_STRING_MODE.contains.concat(a)
        }), l = {
            className: "string",
            contains: [e.BACKSLASH_ESCAPE, t], variants: [e.inherit(n, {
                begin: "b'", end: "'"
            }), e.inherit(i, { begin: 'b"', end: '"' }), i, n, o]
        }, c = {
            variants: [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE]
        }, s = {
            keyword: "__CLASS__ __DIR__ __FILE__ __FUNCTION__ __LINE__ __METHOD__ __NAMESPACE__ __TRAIT__ die echo exit include include_once print require require_once array abstract and as binary bool boolean break callable case catch class clone const continue declare default do double else elseif empty enddeclare endfor endforeach endif endswitch endwhile eval extends final finally float for foreach from global goto if implements instanceof insteadof int integer interface isset iterable list match|0 new object or private protected public real return string switch throw trait try unset use var void while xor yield",
            literal: "false null true",
            built_in: "Error|0 AppendIterator ArgumentCountError ArithmeticError ArrayIterator ArrayObject AssertionError BadFunctionCallException BadMethodCallException CachingIterator CallbackFilterIterator CompileError Countable DirectoryIterator DivisionByZeroError DomainException EmptyIterator ErrorException Exception FilesystemIterator FilterIterator GlobIterator InfiniteIterator InvalidArgumentException IteratorIterator LengthException LimitIterator LogicException MultipleIterator NoRewindIterator OutOfBoundsException OutOfRangeException OuterIterator OverflowException ParentIterator ParseError RangeException RecursiveArrayIterator RecursiveCachingIterator RecursiveCallbackFilterIterator RecursiveDirectoryIterator RecursiveFilterIterator RecursiveIterator RecursiveIteratorIterator RecursiveRegexIterator RecursiveTreeIterator RegexIterator RuntimeException SeekableIterator SplDoublyLinkedList SplFileInfo SplFileObject SplFixedArray SplHeap SplMaxHeap SplMinHeap SplObjectStorage SplObserver SplObserver SplPriorityQueue SplQueue SplStack SplSubject SplSubject SplTempFileObject TypeError UnderflowException UnexpectedValueException ArrayAccess Closure Generator Iterator IteratorAggregate Serializable Throwable Traversable WeakReference Directory __PHP_Incomplete_Class parent php_user_filter self static stdClass"
        }; return {
            aliases: ["php", "php3", "php4", "php5", "php6", "php7", "php8"],
            case_insensitive: !0, keywords: s,
            contains: [e.HASH_COMMENT_MODE, e.COMMENT("//", "$", {
                contains: [t]
            }), e.COMMENT("/\\*", "\\*/", {
                contains: [{ className: "doctag", begin: "@[A-Za-z]+" }]
            }), e.COMMENT("__halt_compiler.+?;", !1, {
                endsWithParent: !0,
                keywords: "__halt_compiler"
            }), t, { className: "keyword", begin: /\$this\b/ }, r, {
                begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                className: "function",
                relevance: 0, beginKeywords: "fn function", end: /[;{]/, excludeEnd: !0,
                illegal: "[$%\\[]", contains: [e.UNDERSCORE_TITLE_MODE, { begin: "=>" }, {
                    className: "params", begin: "\\(", end: "\\)", excludeBegin: !0, excludeEnd: !0,
                    keywords: s, contains: ["self", r, e.C_BLOCK_COMMENT_MODE, l, c]
                }]
            }, {
                className: "class",
                beginKeywords: "class interface", relevance: 0, end: /\{/, excludeEnd: !0,
                illegal: /[:($"]/, contains: [{
                    beginKeywords: "extends implements"
                }, e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "namespace", relevance: 0, end: ";",
                illegal: /[.']/, contains: [e.UNDERSCORE_TITLE_MODE]
            }, {
                beginKeywords: "use",
                relevance: 0, end: ";", contains: [e.UNDERSCORE_TITLE_MODE]
            }, l, c]
        }
    }
})());
hljs.registerLanguage("php-template", (() => {
    "use strict"; return n => ({
        name: "PHP template", subLanguage: "xml", contains: [{
            begin: /<\?(php|=)?/, end: /\?>/,
            subLanguage: "php", contains: [{ begin: "/\\*", end: "\\*/", skip: !0 }, {
                begin: 'b"',
                end: '"', skip: !0
            }, { begin: "b'", end: "'", skip: !0 }, n.inherit(n.APOS_STRING_MODE, {
                illegal: null, className: null, contains: null, skip: !0
            }), n.inherit(n.QUOTE_STRING_MODE, {
                illegal: null, className: null, contains: null,
                skip: !0
            })]
        }]
    })
})());
hljs.registerLanguage("plaintext", (() => {
    "use strict"; return t => ({
        name: "Plain text", aliases: ["text", "txt"], disableAutodetect: !0
    })
})());
hljs.registerLanguage("properties", (() => {
    "use strict"; return e => {
        var n = "[ \\t\\f]*", a = n + "[:=]" + n, t = "(" + a + "|[ \\t\\f]+)", r = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+", s = "([^\\\\:= \\t\\f\\n]|\\\\.)+", i = {
            end: t, relevance: 0, starts: {
                className: "string", end: /$/, relevance: 0, contains: [{
                    begin: "\\\\\\\\"
                }, { begin: "\\\\\\n" }]
            }
        }; return {
            name: ".properties",
            case_insensitive: !0, illegal: /\S/, contains: [e.COMMENT("^\\s*[!#]", "$"), {
                returnBegin: !0, variants: [{ begin: r + a, relevance: 1 }, {
                    begin: r + "[ \\t\\f]+",
                    relevance: 0
                }], contains: [{ className: "attr", begin: r, endsParent: !0, relevance: 0 }],
                starts: i
            }, {
                begin: s + t, returnBegin: !0, relevance: 0, contains: [{
                    className: "meta",
                    begin: s, endsParent: !0, relevance: 0
                }], starts: i
            }, {
                className: "attr", relevance: 0,
                begin: s + n + "$"
            }]
        }
    }
})());
hljs.registerLanguage("python", (() => {
    "use strict"; return e => {
        const n = {
            keyword: "and as assert async await break class continue def del elif else except finally for  from global if import in is lambda nonlocal|10 not or pass raise return try while with yield",
            built_in: "__import__ abs all any ascii bin bool breakpoint bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval exec filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow print property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip",
            literal: "__debug__ Ellipsis False None NotImplemented True"
        }, a = {
            className: "meta", begin: /^(>>>|\.\.\.) /
        }, s = {
            className: "subst", begin: /\{/,
            end: /\}/, keywords: n, illegal: /#/
        }, i = { begin: /\{\{/, relevance: 0 }, r = {
            className: "string", contains: [e.BACKSLASH_ESCAPE], variants: [{
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, a], relevance: 10
            }, {
                begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, end: /"""/,
                contains: [e.BACKSLASH_ESCAPE, a], relevance: 10
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])'''/, end: /'''/,
                contains: [e.BACKSLASH_ESCAPE, a, i, s]
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                end: /"""/, contains: [e.BACKSLASH_ESCAPE, a, i, s]
            }, {
                begin: /([uU]|[rR])'/, end: /'/,
                relevance: 10
            }, { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 }, {
                begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/
            }, {
                begin: /([bB]|[bB][rR]|[rR][bB])"/,
                end: /"/
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])'/, end: /'/,
                contains: [e.BACKSLASH_ESCAPE, i, s]
            }, {
                begin: /([fF][rR]|[rR][fF]|[fF])"/, end: /"/,
                contains: [e.BACKSLASH_ESCAPE, i, s]
            }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
        }, t = "[0-9](_?[0-9])*", l = `(\\b(${t}))?\\.(${t})|\\b(${t})\\.`, b = {
            className: "number", relevance: 0, variants: [{
                begin: `(\\b(${t})|(${l}))[eE][+-]?(${t})[jJ]?\\b`
            }, { begin: `(${l})[jJ]?` }, {
                begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"
            }, {
                begin: "\\b0[bB](_?[01])+[lL]?\\b"
            }, { begin: "\\b0[oO](_?[0-7])+[lL]?\\b" }, {
                begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"
            }, { begin: `\\b(${t})[jJ]\\b` }]
        }, o = {
            className: "params", variants: [{ begin: /\(\s*\)/, skip: !0, className: null }, {
                begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: n,
                contains: ["self", a, b, r, e.HASH_COMMENT_MODE]
            }]
        }; return s.contains = [r, b, a], {
            name: "Python", aliases: ["py", "gyp", "ipython"], keywords: n,
            illegal: /(<\/|->|\?)|=>/, contains: [a, b, { begin: /\bself\b/ }, {
                beginKeywords: "if",
                relevance: 0
            }, r, e.HASH_COMMENT_MODE, {
                variants: [{
                    className: "function",
                    beginKeywords: "def"
                }, { className: "class", beginKeywords: "class" }], end: /:/,
                    illegal: /[${=;\n,]/, contains: [e.UNDERSCORE_TITLE_MODE, o, {
                        begin: /->/,
                        endsWithParent: !0, keywords: "None"
                    }]
                }, {
                    className: "meta", begin: /^[\t ]*@/,
                    end: /(?=#)|$/, contains: [b, o, r]
                }, { begin: /\b(print|exec)\(/ }]
        }
    }
})());
hljs.registerLanguage("python-repl", (() => {
    "use strict"; return s => ({
        aliases: ["pycon"], contains: [{
            className: "meta", starts: {
                end: / |$/, starts: {
                    end: "$",
                    subLanguage: "python"
                }
            }, variants: [{ begin: /^>>>(?=[ ]|$)/ }, {
                begin: /^\.\.\.(?=[ ]|$)/
            }]
        }]
    })
})());
hljs.registerLanguage("r", (() => {
    "use strict"; function e(...e) {
        return e.map((e => {
            return (a = e) ? "string" == typeof a ? a : a.source : null; var a
        })).join("")
    } return a => {
        const n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/; return {
            name: "R",
            illegal: /->/, keywords: {
                $pattern: n,
                keyword: "function if in break next repeat else for while",
                literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
            }, compilerExtensions: [(a, n) => {
                if (!a.beforeMatch) return
                    ; if (a.starts) throw Error("beforeMatch cannot be used with starts")
                        ; const i = Object.assign({}, a); Object.keys(a).forEach((e => {
                            delete a[e]
                        })), a.begin = e(i.beforeMatch, e("(?=", i.begin, ")")), a.starts = {
                            relevance: 0,
                            contains: [Object.assign(i, { endsParent: !0 })]
                        }, a.relevance = 0, delete i.beforeMatch
            }], contains: [a.COMMENT(/#'/, /$/, {
                contains: [{
                    className: "doctag",
                    begin: "@examples", starts: {
                        contains: [{ begin: /\n/ }, {
                            begin: /#'\s*(?=@[a-zA-Z]+)/,
                            endsParent: !0
                        }, { begin: /#'/, end: /$/, excludeBegin: !0 }]
                    }
                }, {
                    className: "doctag",
                    begin: "@param", end: /$/, contains: [{
                        className: "variable", variants: [{ begin: n }, {
                            begin: /`(?:\\.|[^`\\])+`/
                        }], endsParent: !0
                    }]
                }, {
                    className: "doctag",
                    begin: /@[a-zA-Z]+/
                }, { className: "meta-keyword", begin: /\\[a-zA-Z]+/ }]
            }), a.HASH_COMMENT_MODE, {
                className: "string", contains: [a.BACKSLASH_ESCAPE],
                variants: [a.END_SAME_AS_BEGIN({
                    begin: /[rR]"(-*)\(/, end: /\)(-*)"/
                }), a.END_SAME_AS_BEGIN({
                    begin: /[rR]"(-*)\{/, end: /\}(-*)"/
                }), a.END_SAME_AS_BEGIN({
                    begin: /[rR]"(-*)\[/, end: /\](-*)"/
                }), a.END_SAME_AS_BEGIN({
                    begin: /[rR]'(-*)\(/, end: /\)(-*)'/
                }), a.END_SAME_AS_BEGIN({
                    begin: /[rR]'(-*)\{/, end: /\}(-*)'/
                }), a.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }), {
                    begin: '"', end: '"',
                    relevance: 0
                }, { begin: "'", end: "'", relevance: 0 }]
            }, {
                className: "number", relevance: 0,
                beforeMatch: /([^a-zA-Z0-9._])/, variants: [{
                    match: /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/
                }, {
                    match: /0[xX][0-9a-fA-F]+([pP][+-]?\d+)?[Li]?/
                }, {
                    match: /(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?[Li]?/
                }]
            }, { begin: "%", end: "%" }, {
                begin: e(/[a-zA-Z][a-zA-Z_0-9]*/, "\\s+<-\\s+")
            }, {
                begin: "`", end: "`", contains: [{
                    begin: /\\./
                }]
            }]
        }
    }
})());
hljs.registerLanguage("ruby", (() => {
    "use strict"; function e(...e) {
        return e.map((e => {
            return (n = e) ? "string" == typeof n ? n : n.source : null; var n
        })).join("")
    } return n => {
        var a, i = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", s = {
            keyword: "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__",
            built_in: "proc lambda", literal: "true false nil"
        }, r = {
            className: "doctag",
            begin: "@[A-Za-z]+"
        }, b = { begin: "#<", end: ">" }, t = [n.COMMENT("#", "$", {
            contains: [r]
        }), n.COMMENT("^=begin", "^=end", {
            contains: [r], relevance: 10
        }), n.COMMENT("^__END__", "\\n$")], c = {
            className: "subst", begin: /#\{/, end: /\}/,
            keywords: s
        }, d = {
            className: "string", contains: [n.BACKSLASH_ESCAPE, c], variants: [{
                begin: /'/, end: /'/
            }, { begin: /"/, end: /"/ }, { begin: /`/, end: /`/ }, {
                begin: /%[qQwWx]?\(/,
                end: /\)/
            }, { begin: /%[qQwWx]?\[/, end: /\]/ }, { begin: /%[qQwWx]?\{/, end: /\}/ }, {
                begin: /%[qQwWx]?</, end: />/
            }, { begin: /%[qQwWx]?\//, end: /\// }, {
                begin: /%[qQwWx]?%/,
                end: /%/
            }, { begin: /%[qQwWx]?-/, end: /-/ }, { begin: /%[qQwWx]?\|/, end: /\|/ }, {
                begin: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
            }, {
                begin: /<<[-~]?'?(\w+)\n(?:[^\n]*\n)*?\s*\1\b/, returnBegin: !0, contains: [{
                    begin: /<<[-~]?'?/
                }, n.END_SAME_AS_BEGIN({
                    begin: /(\w+)/, end: /(\w+)/,
                    contains: [n.BACKSLASH_ESCAPE, c]
                })]
            }]
        }, g = "[0-9](_?[0-9])*", l = {
            className: "number",
            relevance: 0, variants: [{
                begin: `\\b([1-9](_?[0-9])*|0)(\\.(${g}))?([eE][+-]?(${g})|r)?i?\\b`
            }, {
                begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"
            }, {
                begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"
            }, { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" }, {
                begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"
            }, {
                begin: "\\b0(_?[0-7])+r?i?\\b"
            }]
        }, o = {
            className: "params", begin: "\\(", end: "\\)",
            endsParent: !0, keywords: s
        }, _ = [d, {
            className: "class", beginKeywords: "class module",
            end: "$|;", illegal: /=/, contains: [n.inherit(n.TITLE_MODE, {
                begin: "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?"
            }), {
                begin: "<\\s*", contains: [{
                    begin: "(" + n.IDENT_RE + "::)?" + n.IDENT_RE
                }]
            }].concat(t)
        }, {
            className: "function",
                begin: e(/def\s*/, (a = i + "\\s*(\\(|;|$)", e("(?=", a, ")"))), keywords: "def", end: "$|;",
                contains: [n.inherit(n.TITLE_MODE, { begin: i }), o].concat(t)
            }, {
                begin: n.IDENT_RE + "::"
            }, { className: "symbol", begin: n.UNDERSCORE_IDENT_RE + "(!|\\?)?:", relevance: 0 }, {
                className: "symbol", begin: ":(?!\\s)", contains: [d, { begin: i }], relevance: 0
            }, l, {
                className: "variable",
                begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
            }, {
                className: "params", begin: /\|/, end: /\|/, relevance: 0, keywords: s
            }, {
                begin: "(" + n.RE_STARTERS_RE + "|unless)\\s*", keywords: "unless", contains: [{
                    className: "regexp", contains: [n.BACKSLASH_ESCAPE, c], illegal: /\n/, variants: [{
                        begin: "/", end: "/[a-z]*"
                    }, { begin: /%r\{/, end: /\}[a-z]*/ }, {
                        begin: "%r\\(",
                        end: "\\)[a-z]*"
                    }, { begin: "%r!", end: "![a-z]*" }, { begin: "%r\\[", end: "\\][a-z]*" }]
                }].concat(b, t), relevance: 0
            }].concat(b, t); c.contains = _, o.contains = _; var E = [{
                begin: /^\s*=>/, starts: { end: "$", contains: _ }
            }, {
                className: "meta",
                begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                starts: { end: "$", contains: _ }
            }]; return t.unshift(b), {
                name: "Ruby",
                aliases: ["rb", "gemspec", "podspec", "thor", "irb"], keywords: s, illegal: /\/\*/,
                contains: [n.SHEBANG({ binary: "ruby" })].concat(E).concat(t).concat(_)
            }
    }
})());
hljs.registerLanguage("rust", (() => {
    "use strict"; return e => {
        const n = "([ui](8|16|32|64|128|size)|f(32|64))?", t = "drop i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator Extend IntoIterator DoubleEndedIterator ExactSizeIterator SliceConcatExt ToString assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! debug_assert! debug_assert_eq! env! panic! file! format! format_args! include_bin! include_str! line! local_data_key! module_path! option_env! print! println! select! stringify! try! unimplemented! unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!"
            ; return {
                name: "Rust", aliases: ["rs"], keywords: {
                    $pattern: e.IDENT_RE + "!?",
                    keyword: "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
                    literal: "true false Some None Ok Err", built_in: t
                }, illegal: "</",
                contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
                    contains: ["self"]
                }), e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }), {
                    className: "string", variants: [{ begin: /r(#*)"(.|\n)*?"\1(?!#)/ }, {
                        begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/
                    }]
                }, {
                    className: "symbol",
                    begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
                }, {
                    className: "number", variants: [{
                        begin: "\\b0b([01_]+)" + n
                    }, { begin: "\\b0o([0-7_]+)" + n }, {
                        begin: "\\b0x([A-Fa-f0-9_]+)" + n
                    }, {
                        begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + n
                    }], relevance: 0
                }, {
                    className: "function", beginKeywords: "fn", end: "(\\(|<)", excludeEnd: !0,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {
                    className: "meta", begin: "#!?\\[", end: "\\]",
                    contains: [{ className: "meta-string", begin: /"/, end: /"/ }]
                }, {
                    className: "class",
                    beginKeywords: "type", end: ";", contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {
                        endsParent: !0
                    })], illegal: "\\S"
                }, {
                    className: "class",
                    beginKeywords: "trait enum struct union", end: /\{/,
                    contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { endsParent: !0 })], illegal: "[\\w\\d]"
                }, { begin: e.IDENT_RE + "::", keywords: { built_in: t } }, { begin: "->" }]
            }
    }
})());
hljs.registerLanguage("scss", (() => {
    "use strict"; return e => {
        var t = "@[a-z-]+", i = {
            className: "variable", begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
        }, r = {
            className: "number", begin: "#[0-9A-Fa-f]+"
        }
        ; return e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
                name: "SCSS", case_insensitive: !0,
            illegal: "[=/|']", contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "selector-id", begin: "#[A-Za-z0-9_-]+", relevance: 0
            }, {
                className: "selector-class", begin: "\\.[A-Za-z0-9_-]+", relevance: 0
            }, {
                className: "selector-attr", begin: "\\[", end: "\\]", illegal: "$"
            }, {
                className: "selector-tag",
                begin: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
                relevance: 0
            }, {
                className: "selector-pseudo",
                begin: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
            }, {
                className: "selector-pseudo",
                begin: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
            }, i, {
                className: "attribute",
                begin: "\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
                illegal: "[^\\s]"
            }, {
                begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
            }, {
                begin: ":", end: ";",
                contains: [i, r, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                    className: "meta", begin: "!important"
                }]
            }, {
                begin: "@(page|font-face)", lexemes: t,
                keywords: "@page @font-face"
            }, {
                begin: "@", end: "[{;]", returnBegin: !0,
                keywords: "and or not only", contains: [{
                    begin: t, className: "keyword"
                }, i, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, r, e.CSS_NUMBER_MODE]
            }]
        }
    }
})());
hljs.registerLanguage("shell", (() => {
    "use strict"; return s => ({
        name: "Shell Session", aliases: ["console"], contains: [{
            className: "meta",
            begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/, starts: {
                end: /[^\\](?=\s*$)/,
                subLanguage: "bash"
            }
        }]
    })
})());
hljs.registerLanguage("sql", (() => {
    "use strict"; function e(e) {
        return e ? "string" == typeof e ? e : e.source : null
    } function r(...r) {
        return r.map((r => e(r))).join("")
    } function t(...r) {
        return "(" + r.map((r => e(r))).join("|") + ")"
    } return e => {
        const n = e.COMMENT("--", "$"), a = ["true", "false", "unknown"], i = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"], s = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"], o = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"], c = s, l = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update   ", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter((e => !s.includes(e))), u = {
            begin: r(/\b/, t(...c), /\s*\(/), keywords: { built_in: c.join(" ") }
        }; return {
            name: "SQL", case_insensitive: !0, illegal: /[{}]|<\//, keywords: {
                $pattern: /\b[\w\.]+/, keyword: ((e, { exceptions: r, when: t } = {}) => {
                    const n = t
                    ; return r = r || [], e.map((e => e.match(/\|\d+$/) || r.includes(e) ? e : n(e) ? e + "|0" : e))
                })(l, { when: e => e.length < 3 }).join(" "), literal: a.join(" "), type: i.join(" "),
                built_in: "current_catalog current_date current_default_transform_group current_path current_role current_schema current_transform_group_for_type current_user session_user system_time system_user current_time localtime current_timestamp localtimestamp"
            }, contains: [{
                begin: t(...o), keywords: {
                    $pattern: /[\w\.]+/,
                    keyword: l.concat(o).join(" "), literal: a.join(" "), type: i.join(" ")
                }
            }, {
                className: "type",
                begin: t("double precision", "large object", "with timezone", "without timezone")
            }, u, { className: "variable", begin: /@[a-z0-9]+/ }, {
                className: "string", variants: [{
                    begin: /'/, end: /'/, contains: [{ begin: /''/ }]
                }]
            }, {
                begin: /"/, end: /"/, contains: [{
                    begin: /""/
                }]
            }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, n, {
                className: "operator",
                begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, relevance: 0
            }]
        }
    }
})());
hljs.registerLanguage("swift", (() => {
    "use strict"; function e(e) {
        return e ? "string" == typeof e ? e : e.source : null
    } function n(e) { return i("(?=", e, ")") }
    function i(...n) { return n.map((n => e(n))).join("") } function a(...n) {
        return "(" + n.map((n => e(n))).join("|") + ")"
    }
    const t = e => i(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/), u = ["Protocol", "Type"].map(t), s = ["init", "self"].map(t), r = ["Any", "Self"], o = ["associatedtype", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "do", "dynamic", "else", "enum", "extension", "fallthrough", "fileprivate(set)", "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", "internal(set)", "internal", "in", "is", "lazy", "let", "mutating", "nonmutating", "open(set)", "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", "private(set)", "private", "protocol", "public(set)", "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", "unowned(safe)", "unowned(unsafe)", "unowned", "var", "weak", "where", "while", "willSet"], l = ["false", "nil", "true"], c = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"], b = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"], p = a(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/), F = a(p, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/), d = i(p, F, "*"), g = a(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFFFD]/), f = a(g, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), m = i(g, f, "*"), w = i(/[A-Z]/, f, "*"), E = ["autoclosure", i(/convention\(/, a("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", i(/objc\(/, m, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "testable", "UIApplicationMain", "unknown", "usableFromInline"], y = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"]
        ; return e => {
            const p = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }), g = {
                className: "keyword", begin: i(/\./, n(a(...u, ...s))), end: a(...u, ...s),
                excludeBegin: !0
            }, A = {
                begin: i(/\./, a(...o)), relevance: 0
            }, C = o.filter((e => "string" == typeof e)).concat(["_|0"]), v = {
                variants: [{
                    className: "keyword",
                    begin: a(...o.filter((e => "string" != typeof e)).concat(r).map(t), ...s)
                }]
            }, _ = {
                $pattern: a(/\b\w+(\(\w+\))?/, /#\w+/), keyword: C.concat(c).join(" "),
                literal: l.join(" ")
            }, N = [g, A, v], D = [{ begin: i(/\./, a(...b)), relevance: 0 }, {
                className: "built_in", begin: i(/\b/, a(...b), /(?=\()/)
            }], B = {
                begin: /->/, relevance: 0
            }, M = [B, {
                className: "operator", relevance: 0, variants: [{ begin: d }, {
                    begin: `\\.(\\.|${F})+`
                }]
            }], h = "([0-9a-fA-F]_*)+", S = {
                className: "number",
                relevance: 0, variants: [{
                    begin: "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"
                }, {
                    begin: `\\b0x(${h})(\\.(${h}))?([pP][+-]?(([0-9]_*)+))?\\b`
                }, {
                    begin: /\b0o([0-7]_*)+\b/
                }, { begin: /\b0b([01]_*)+\b/ }]
            }, O = (e = "") => ({
                className: "subst", variants: [{ begin: i(/\\/, e, /[0\\tnr"']/) }, {
                    begin: i(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)
                }]
            }), x = (e = "") => ({
                className: "subst",
                begin: i(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)
            }), k = (e = "") => ({
                className: "subst",
                label: "interpol", begin: i(/\\/, e, /\(/), end: /\)/
            }), L = (e = "") => ({
                begin: i(e, /"""/),
                end: i(/"""/, e), contains: [O(e), x(e), k(e)]
            }), I = (e = "") => ({
                begin: i(e, /"/),
                end: i(/"/, e), contains: [O(e), k(e)]
            }), $ = {
                className: "string",
                variants: [L(), L("#"), L("##"), L("###"), I(), I("#"), I("##"), I("###")]
            }, T = [{
                begin: i(/`/, m, /`/)
            }, { className: "variable", begin: /\$\d+/ }, {
                className: "variable",
                begin: `\\$${f}+`
            }], j = [{
                begin: /(@|#)available\(/, end: /\)/, keywords: {
                    $pattern: /[@#]?\w+/, keyword: y.concat(["@available", "#available"]).join(" ")
                },
                contains: [...M, S, $]
            }, { className: "keyword", begin: i(/@/, a(...E)) }, {
                className: "meta", begin: i(/@/, m)
            }], K = {
                begin: n(/\b[A-Z]/), relevance: 0, contains: [{
                    className: "type",
                    begin: i(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, f, "+")
                }, { className: "type", begin: w, relevance: 0 }, { begin: /[?!]+/, relevance: 0 }, {
                    begin: /\.\.\./, relevance: 0
                }, { begin: i(/\s+&\s+/, n(w)), relevance: 0 }]
            }, P = {
                begin: /</, end: />/, keywords: _, contains: [...N, ...j, B, K]
            }; K.contains.push(P)
                ; for (const e of $.variants) {
                    const n = e.contains.find((e => "interpol" === e.label))
                    ; n.keywords = _; const i = [...N, ...D, ...M, S, $, ...T]; n.contains = [...i, {
                        begin: /\(/,
                        end: /\)/, contains: ["self", ...i]
                    }]
                } return {
                    name: "Swift", keywords: _,
                    contains: [e.C_LINE_COMMENT_MODE, p, {
                        className: "function", beginKeywords: "func",
                        end: /\{/, excludeEnd: !0, contains: [e.inherit(e.TITLE_MODE, {
                            begin: /[A-Za-z$_][0-9A-Za-z$_]*/
                        }), { begin: /</, end: />/ }, {
                            className: "params",
                            begin: /\(/, end: /\)/, endsParent: !0, keywords: _,
                            contains: ["self", ...N, S, $, e.C_BLOCK_COMMENT_MODE, { begin: ":" }], illegal: /["']/
                        }],
                        illegal: /\[|%/
                    }, {
                        className: "class",
                        beginKeywords: "struct protocol class extension enum", end: "\\{", excludeEnd: !0,
                        keywords: _, contains: [e.inherit(e.TITLE_MODE, {
                            begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                        }), ...N]
                    }, {
                        beginKeywords: "import",
                        end: /$/, contains: [e.C_LINE_COMMENT_MODE, p], relevance: 0
                    }, ...N, ...D, ...M, S, $, ...T, ...j, K]
                }
        }
})());
hljs.registerLanguage("typescript", (() => {
    "use strict"
        ; const e = "[A-Za-z$_][0-9A-Za-z$_]*", n = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], a = ["true", "false", "null", "undefined", "NaN", "Infinity"], s = [].concat(["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], ["Intl", "DataView", "Number", "Math", "Date", "String", "RegExp", "Object", "Function", "Boolean", "Error", "Symbol", "Set", "Map", "WeakSet", "WeakMap", "Proxy", "Reflect", "JSON", "Promise", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Float32Array", "Array", "Uint8Array", "Uint8ClampedArray", "ArrayBuffer"], ["EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"])
        ; function t(e) { return i("(?=", e, ")") } function i(...e) {
            return e.map((e => {
                return (n = e) ? "string" == typeof n ? n : n.source : null; var n
            })).join("")
        } return r => {
            const c = {
                $pattern: e,
                keyword: n.concat(["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"]).join(" "),
                literal: a.join(" "),
                built_in: s.concat(["any", "void", "number", "boolean", "string", "object", "never", "enum"]).join(" ")
            }, o = { className: "meta", begin: "@[A-Za-z$_][0-9A-Za-z$_]*" }, l = (e, n, a) => {
                const s = e.contains.findIndex((e => e.label === n))
                    ; if (-1 === s) throw Error("can not find mode to replace"); e.contains.splice(s, 1, a)
            }, b = (r => {
                const c = e, o = {
                    begin: /<[A-Za-z0-9\\._:-]+/,
                    end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e, n) => {
                        const a = e[0].length + e.index, s = e.input[a]; "<" !== s ? ">" === s && (((e, { after: n }) => {
                            const a = "</" + e[0].slice(1); return -1 !== e.input.indexOf(a, n)
                        })(e, {
                            after: a
                        }) || n.ignoreMatch()) : n.ignoreMatch()
                    }
                }, l = {
                    $pattern: e, keyword: n.join(" "),
                    literal: a.join(" "), built_in: s.join(" ")
                }, b = "\\.([0-9](_?[0-9])*)", d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", g = {
                    className: "number", variants: [{
                        begin: `(\\b(${d})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`
                    }, {
                        begin: `\\b(${d})\\b((${b})\\b|\\.)?|(${b})\\b`
                    }, {
                        begin: "\\b(0|[1-9](_?[0-9])*)n\\b"
                    }, {
                        begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"
                    }, {
                        begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"
                    }, { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" }, {
                        begin: "\\b0[0-7]+n?\\b"
                    }], relevance: 0
                }, u = {
                    className: "subst", begin: "\\$\\{",
                    end: "\\}", keywords: l, contains: []
                }, E = {
                    begin: "html`", end: "", starts: {
                        end: "`",
                        returnEnd: !1, contains: [r.BACKSLASH_ESCAPE, u], subLanguage: "xml"
                    }
                }, m = {
                    begin: "css`", end: "", starts: {
                        end: "`", returnEnd: !1,
                        contains: [r.BACKSLASH_ESCAPE, u], subLanguage: "css"
                    }
                }, _ = {
                    className: "string",
                    begin: "`", end: "`", contains: [r.BACKSLASH_ESCAPE, u]
                }, y = {
                    className: "comment",
                    variants: [r.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                        relevance: 0, contains: [{
                            className: "doctag", begin: "@[A-Za-z]+", contains: [{
                                className: "type", begin: "\\{",
                                end: "\\}", relevance: 0
                            }, {
                                className: "variable", begin: c + "(?=\\s*(-)|$)",
                                endsParent: !0, relevance: 0
                            }, { begin: /(?=[^\n])\s/, relevance: 0 }]
                        }]
                    }), r.C_BLOCK_COMMENT_MODE, r.C_LINE_COMMENT_MODE]
                }, p = [r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, E, m, _, g, r.REGEXP_MODE]
                ; u.contains = p.concat({
                    begin: /\{/, end: /\}/, keywords: l, contains: ["self"].concat(p)
                }); const N = [].concat(y, u.contains), f = N.concat([{
                    begin: /\(/, end: /\)/, keywords: l,
                    contains: ["self"].concat(N)
                }]), A = {
                    className: "params", begin: /\(/, end: /\)/,
                    excludeBegin: !0, excludeEnd: !0, keywords: l, contains: f
                }; return {
                    name: "Javascript",
                    aliases: ["js", "jsx", "mjs", "cjs"], keywords: l, exports: { PARAMS_CONTAINS: f },
                    illegal: /#(?![$_A-z])/, contains: [r.SHEBANG({
                        label: "shebang", binary: "node",
                        relevance: 5
                    }), {
                        label: "use_strict", className: "meta", relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    }, r.APOS_STRING_MODE, r.QUOTE_STRING_MODE, E, m, _, y, g, {
                        begin: i(/[{,\n]\s*/, t(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, c + "\\s*:"))),
                        relevance: 0, contains: [{ className: "attr", begin: c + t("\\s*:"), relevance: 0 }]
                    }, {
                        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                        keywords: "return throw case", contains: [y, r.REGEXP_MODE, {
                            className: "function",
                            begin: "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>",
                            returnBegin: !0, end: "\\s*=>", contains: [{
                                className: "params", variants: [{
                                    begin: r.UNDERSCORE_IDENT_RE, relevance: 0
                                }, {
                                    className: null, begin: /\(\s*\)/, skip: !0
                                }, { begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: l, contains: f }]
                            }]
                        }, { begin: /,/, relevance: 0 }, { className: "", begin: /\s/, end: /\s*/, skip: !0 }, {
                                variants: [{ begin: "<>", end: "</>" }, {
                                    begin: o.begin, "on:begin": o.isTrulyOpeningTag,
                                    end: o.end
                                }], subLanguage: "xml", contains: [{
                                    begin: o.begin, end: o.end, skip: !0,
                                    contains: ["self"]
                                }]
                            }], relevance: 0
                    }, {
                        className: "function",
                        beginKeywords: "function", end: /[{;]/, excludeEnd: !0, keywords: l,
                        contains: ["self", r.inherit(r.TITLE_MODE, { begin: c }), A], illegal: /%/
                    }, {
                        beginKeywords: "while if switch catch for"
                    }, {
                        className: "function",
                        begin: r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                        returnBegin: !0, contains: [A, r.inherit(r.TITLE_MODE, { begin: c })]
                    }, {
                        variants: [{
                            begin: "\\." + c
                        }, { begin: "\\$" + c }], relevance: 0
                    }, {
                        className: "class",
                        beginKeywords: "class", end: /[{;=]/, excludeEnd: !0, illegal: /[:"[\]]/, contains: [{
                            beginKeywords: "extends"
                        }, r.UNDERSCORE_TITLE_MODE]
                    }, {
                        begin: /\b(?=constructor)/,
                        end: /[{;]/, excludeEnd: !0, contains: [r.inherit(r.TITLE_MODE, { begin: c }), "self", A]
                    }, {
                        begin: "(get|set)\\s+(?=" + c + "\\()", end: /\{/, keywords: "get set",
                        contains: [r.inherit(r.TITLE_MODE, { begin: c }), { begin: /\(\)/ }, A]
                    }, { begin: /\$[(.]/ }]
                }
            })(r)
                ; return Object.assign(b.keywords, c), b.exports.PARAMS_CONTAINS.push(o), b.contains = b.contains.concat([o, {
                    beginKeywords: "namespace", end: /\{/, excludeEnd: !0
                }, {
                    beginKeywords: "interface",
                        end: /\{/, excludeEnd: !0, keywords: "interface extends"
                    }]), l(b, "shebang", r.SHEBANG()), l(b, "use_strict", {
                        className: "meta", relevance: 10,
                        begin: /^\s*['"]use strict['"]/
                    }), b.contains.find((e => "function" === e.className)).relevance = 0, Object.assign(b, {
                        name: "TypeScript", aliases: ["ts"]
                    }), b
        }
})());
hljs.registerLanguage("vbnet", (() => {
    "use strict"; function e(e) {
        return e ? "string" == typeof e ? e : e.source : null
    } function n(...n) {
        return n.map((n => e(n))).join("")
    } function t(...n) {
        return "(" + n.map((n => e(n))).join("|") + ")"
    } return e => {
        const a = /\d{1,2}\/\d{1,2}\/\d{4}/, i = /\d{4}-\d{1,2}-\d{1,2}/, s = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, r = /\d{1,2}(:\d{1,2}){1,2}/, o = {
            className: "literal", variants: [{ begin: n(/# */, t(i, a), / *#/) }, {
                begin: n(/# */, r, / *#/)
            }, { begin: n(/# */, s, / *#/) }, {
                begin: n(/# */, t(i, a), / +/, t(s, r), / *#/)
            }]
        }, l = e.COMMENT(/'''/, /$/, {
            contains: [{
                className: "doctag", begin: /<\/?/, end: />/
            }]
        }), c = e.COMMENT(null, /$/, {
            variants: [{
                begin: /'/
            }, { begin: /([\t ]|^)REM(?=\s)/ }]
        }); return {
            name: "Visual Basic .NET",
            aliases: ["vb"], case_insensitive: !0, classNameAliases: { label: "symbol" }, keywords: {
                keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                literal: "true false nothing"
            },
            illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ", contains: [{
                className: "string", begin: /"(""|[^/n])"C\b/
            }, {
                className: "string", begin: /"/,
                end: /"/, illegal: /\n/, contains: [{ begin: /""/ }]
            }, o, {
                className: "number", relevance: 0,
                variants: [{
                    begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/
                }, { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ }, { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ }, {
                    begin: /&O[0-7_]+((U?[SIL])|[%&])?/
                }, { begin: /&B[01_]+((U?[SIL])|[%&])?/ }]
            }, {
                className: "label", begin: /^\w+:/
            }, l, c, {
                className: "meta",
                begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                end: /$/, keywords: {
                    "meta-keyword": "const disable else elseif enable end externalsource if region then"
                }, contains: [c]
            }]
        }
    }
})());
hljs.registerLanguage("yaml", (() => {
    "use strict"; return e => {
        var n = "true false yes no null", a = "[\\w#;/?:@&=+$,.~*'()[\\]]+", s = {
            className: "string", relevance: 0, variants: [{ begin: /'/, end: /'/ }, {
                begin: /"/, end: /"/
            }, { begin: /\S+/ }], contains: [e.BACKSLASH_ESCAPE, {
                className: "template-variable",
                variants: [{ begin: /\{\{/, end: /\}\}/ }, { begin: /%\{/, end: /\}/ }]
            }]
        }, i = e.inherit(s, {
            variants: [{ begin: /'/, end: /'/ }, { begin: /"/, end: /"/ }, { begin: /[^\s,{}[\]]+/ }]
        }), l = {
            end: ",", endsWithParent: !0, excludeEnd: !0, contains: [], keywords: n, relevance: 0
        }, t = {
            begin: /\{/, end: /\}/, contains: [l], illegal: "\\n", relevance: 0
        }, g = {
            begin: "\\[",
            end: "\\]", contains: [l], illegal: "\\n", relevance: 0
        }, b = [{
            className: "attr",
            variants: [{ begin: "\\w[\\w :\\/.-]*:(?=[ \t]|$)" }, {
                begin: '"\\w[\\w :\\/.-]*":(?=[ \t]|$)'
            }, {
                begin: "'\\w[\\w :\\/.-]*':(?=[ \t]|$)"
            }]
        }, { className: "meta", begin: "^---\\s*$", relevance: 10 }, {
            className: "string",
            begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
        }, {
            begin: "<%[%=-]?", end: "[%-]?%>", subLanguage: "ruby", excludeBegin: !0, excludeEnd: !0,
            relevance: 0
        }, { className: "type", begin: "!\\w+!" + a }, {
            className: "type",
            begin: "!<" + a + ">"
        }, { className: "type", begin: "!" + a }, {
            className: "type", begin: "!!" + a
        }, { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" }, {
            className: "meta",
            begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"
        }, {
            className: "bullet", begin: "-(?=[ ]|$)",
            relevance: 0
        }, e.HASH_COMMENT_MODE, { beginKeywords: n, keywords: { literal: n } }, {
            className: "number",
            begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
        }, { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 }, t, g, s], r = [...b]
            ; return r.pop(), r.push(i), l.contains = r, {
                name: "YAML", case_insensitive: !0,
                aliases: ["yml", "YAML"], contains: b
            }
    }
})());
/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Mark = t() }(this, function () { "use strict"; var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, t = function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }, n = function () { function e(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t } }(), r = Object.assign || function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }, i = function () { function e(n) { var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5e3; t(this, e), this.ctx = n, this.iframes = r, this.exclude = i, this.iframesTimeout = o } return n(e, [{ key: "getContexts", value: function () { var e = []; return (void 0 !== this.ctx && this.ctx ? NodeList.prototype.isPrototypeOf(this.ctx) ? Array.prototype.slice.call(this.ctx) : Array.isArray(this.ctx) ? this.ctx : "string" == typeof this.ctx ? Array.prototype.slice.call(document.querySelectorAll(this.ctx)) : [this.ctx] : []).forEach(function (t) { var n = e.filter(function (e) { return e.contains(t) }).length > 0; -1 !== e.indexOf(t) || n || e.push(t) }), e } }, { key: "getIframeContents", value: function (e, t) { var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () { }, r = void 0; try { var i = e.contentWindow; if (r = i.document, !i || !r) throw new Error("iframe inaccessible") } catch (e) { n() } r && t(r) } }, { key: "isIframeBlank", value: function (e) { var t = e.getAttribute("src").trim(); return "about:blank" === e.contentWindow.location.href && "about:blank" !== t && t } }, { key: "observeIframeLoad", value: function (e, t, n) { var r = this, i = !1, o = null, a = function a() { if (!i) { i = !0, clearTimeout(o); try { r.isIframeBlank(e) || (e.removeEventListener("load", a), r.getIframeContents(e, t, n)) } catch (e) { n() } } }; e.addEventListener("load", a), o = setTimeout(a, this.iframesTimeout) } }, { key: "onIframeReady", value: function (e, t, n) { try { "complete" === e.contentWindow.document.readyState ? this.isIframeBlank(e) ? this.observeIframeLoad(e, t, n) : this.getIframeContents(e, t, n) : this.observeIframeLoad(e, t, n) } catch (e) { n() } } }, { key: "waitForIframes", value: function (e, t) { var n = this, r = 0; this.forEachIframe(e, function () { return !0 }, function (e) { r++, n.waitForIframes(e.querySelector("html"), function () { --r || t() }) }, function (e) { e || t() }) } }, { key: "forEachIframe", value: function (t, n, r) { var i = this, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () { }, a = t.querySelectorAll("iframe"), s = a.length, c = 0; a = Array.prototype.slice.call(a); var u = function () { --s <= 0 && o(c) }; s || u(), a.forEach(function (t) { e.matches(t, i.exclude) ? u() : i.onIframeReady(t, function (e) { n(t) && (c++, r(e)), u() }, u) }) } }, { key: "createIterator", value: function (e, t, n) { return document.createNodeIterator(e, t, n, !1) } }, { key: "createInstanceOnIframe", value: function (t) { return new e(t.querySelector("html"), this.iframes) } }, { key: "compareNodeIframe", value: function (e, t, n) { if (e.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING) { if (null === t) return !0; if (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_FOLLOWING) return !0 } return !1 } }, { key: "getIteratorNode", value: function (e) { var t = e.previousNode(); return { prevNode: t, node: null === t ? e.nextNode() : e.nextNode() && e.nextNode() } } }, { key: "checkIframeFilter", value: function (e, t, n, r) { var i = !1, o = !1; return r.forEach(function (e, t) { e.val === n && (i = t, o = e.handled) }), this.compareNodeIframe(e, t, n) ? (!1 !== i || o ? !1 === i || o || (r[i].handled = !0) : r.push({ val: n, handled: !0 }), !0) : (!1 === i && r.push({ val: n, handled: !1 }), !1) } }, { key: "handleOpenIframes", value: function (e, t, n, r) { var i = this; e.forEach(function (e) { e.handled || i.getIframeContents(e.val, function (e) { i.createInstanceOnIframe(e).forEachNode(t, n, r) }) }) } }, { key: "iterateThroughNodes", value: function (e, t, n, r, i) { for (var o, a = this, s = this.createIterator(t, e, r), c = [], u = [], l = void 0, h = void 0; void 0, o = a.getIteratorNode(s), h = o.prevNode, l = o.node;)this.iframes && this.forEachIframe(t, function (e) { return a.checkIframeFilter(l, h, e, c) }, function (t) { a.createInstanceOnIframe(t).forEachNode(e, function (e) { return u.push(e) }, r) }), u.push(l); u.forEach(function (e) { n(e) }), this.iframes && this.handleOpenIframes(c, e, n, r), i() } }, { key: "forEachNode", value: function (e, t, n) { var r = this, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () { }, o = this.getContexts(), a = o.length; a || i(), o.forEach(function (o) { var s = function () { r.iterateThroughNodes(e, o, t, n, function () { --a <= 0 && i() }) }; r.iframes ? r.waitForIframes(o, s) : s() }) } }], [{ key: "matches", value: function (e, t) { var n = "string" == typeof t ? [t] : t, r = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector; if (r) { var i = !1; return n.every(function (t) { return !r.call(e, t) || (i = !0, !1) }), i } return !1 } }]), e }(), o = function () { function o(e) { t(this, o), this.ctx = e, this.ie = !1; var n = window.navigator.userAgent; (n.indexOf("MSIE") > -1 || n.indexOf("Trident") > -1) && (this.ie = !0) } return n(o, [{ key: "log", value: function (t) { var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "debug", r = this.opt.log; this.opt.debug && "object" === (void 0 === r ? "undefined" : e(r)) && "function" == typeof r[n] && r[n]("mark.js: " + t) } }, { key: "escapeStr", value: function (e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") } }, { key: "createRegExp", value: function (e) { return "disabled" !== this.opt.wildcards && (e = this.setupWildcardsRegExp(e)), e = this.escapeStr(e), Object.keys(this.opt.synonyms).length && (e = this.createSynonymsRegExp(e)), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)), this.opt.diacritics && (e = this.createDiacriticsRegExp(e)), e = this.createMergedBlanksRegExp(e), (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.createJoinersRegExp(e)), "disabled" !== this.opt.wildcards && (e = this.createWildcardsRegExp(e)), e = this.createAccuracyRegExp(e) } }, { key: "createSynonymsRegExp", value: function (e) { var t = this.opt.synonyms, n = this.opt.caseSensitive ? "" : "i", r = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? "\0" : ""; for (var i in t) if (t.hasOwnProperty(i)) { var o = t[i], a = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(i) : this.escapeStr(i), s = "disabled" !== this.opt.wildcards ? this.setupWildcardsRegExp(o) : this.escapeStr(o); "" !== a && "" !== s && (e = e.replace(new RegExp("(" + this.escapeStr(a) + "|" + this.escapeStr(s) + ")", "gm" + n), r + "(" + this.processSynomyms(a) + "|" + this.processSynomyms(s) + ")" + r)) } return e } }, { key: "processSynomyms", value: function (e) { return (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) && (e = this.setupIgnoreJoinersRegExp(e)), e } }, { key: "setupWildcardsRegExp", value: function (e) { return (e = e.replace(/(?:\\)*\?/g, function (e) { return "\\" === e.charAt(0) ? "?" : "" })).replace(/(?:\\)*\*/g, function (e) { return "\\" === e.charAt(0) ? "*" : "" }) } }, { key: "createWildcardsRegExp", value: function (e) { var t = "withSpaces" === this.opt.wildcards; return e.replace(/\u0001/g, t ? "[\\S\\s]?" : "\\S?").replace(/\u0002/g, t ? "[\\S\\s]*?" : "\\S*") } }, { key: "setupIgnoreJoinersRegExp", value: function (e) { return e.replace(/[^(|)\\]/g, function (e, t, n) { var r = n.charAt(t + 1); return /[(|)\\]/.test(r) || "" === r ? e : e + "\0" }) } }, { key: "createJoinersRegExp", value: function (e) { var t = [], n = this.opt.ignorePunctuation; return Array.isArray(n) && n.length && t.push(this.escapeStr(n.join(""))), this.opt.ignoreJoiners && t.push("\\u00ad\\u200b\\u200c\\u200d"), t.length ? e.split(/\u0000+/).join("[" + t.join("") + "]*") : e } }, { key: "createDiacriticsRegExp", value: function (e) { var t = this.opt.caseSensitive ? "" : "i", n = this.opt.caseSensitive ? ["aàáảãạăằắẳẵặâầấẩẫậäåāą", "AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćč", "CÇĆČ", "dđď", "DĐĎ", "eèéẻẽẹêềếểễệëěēę", "EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïī", "IÌÍỈĨỊÎÏĪ", "lł", "LŁ", "nñňń", "NÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøō", "OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rř", "RŘ", "sšśșş", "SŠŚȘŞ", "tťțţ", "TŤȚŢ", "uùúủũụưừứửữựûüůū", "UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿ", "YÝỲỶỸỴŸ", "zžżź", "ZŽŻŹ"] : ["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ", "cçćčCÇĆČ", "dđďDĐĎ", "eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ", "iìíỉĩịîïīIÌÍỈĨỊÎÏĪ", "lłLŁ", "nñňńNÑŇŃ", "oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ", "rřRŘ", "sšśșşSŠŚȘŞ", "tťțţTŤȚŢ", "uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ", "yýỳỷỹỵÿYÝỲỶỸỴŸ", "zžżźZŽŻŹ"], r = []; return e.split("").forEach(function (i) { n.every(function (n) { if (-1 !== n.indexOf(i)) { if (r.indexOf(n) > -1) return !1; e = e.replace(new RegExp("[" + n + "]", "gm" + t), "[" + n + "]"), r.push(n) } return !0 }) }), e } }, { key: "createMergedBlanksRegExp", value: function (e) { return e.replace(/[\s]+/gim, "[\\s]+") } }, { key: "createAccuracyRegExp", value: function (e) { var t = this, n = this.opt.accuracy, r = "string" == typeof n ? n : n.value, i = ""; switch (("string" == typeof n ? [] : n.limiters).forEach(function (e) { i += "|" + t.escapeStr(e) }), r) { case "partially": default: return "()(" + e + ")"; case "complementary": return "()([^" + (i = "\\s" + (i || this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿"))) + "]*" + e + "[^" + i + "]*)"; case "exactly": return "(^|\\s" + i + ")(" + e + ")(?=$|\\s" + i + ")" } } }, { key: "getSeparatedKeywords", value: function (e) { var t = this, n = []; return e.forEach(function (e) { t.opt.separateWordSearch ? e.split(" ").forEach(function (e) { e.trim() && -1 === n.indexOf(e) && n.push(e) }) : e.trim() && -1 === n.indexOf(e) && n.push(e) }), { keywords: n.sort(function (e, t) { return t.length - e.length }), length: n.length } } }, { key: "isNumeric", value: function (e) { return Number(parseFloat(e)) == e } }, { key: "checkRanges", value: function (e) { var t = this; if (!Array.isArray(e) || "[object Object]" !== Object.prototype.toString.call(e[0])) return this.log("markRanges() will only accept an array of objects"), this.opt.noMatch(e), []; var n = [], r = 0; return e.sort(function (e, t) { return e.start - t.start }).forEach(function (e) { var i = t.callNoMatchOnInvalidRanges(e, r), o = i.start, a = i.end; i.valid && (e.start = o, e.length = a - o, n.push(e), r = a) }), n } }, { key: "callNoMatchOnInvalidRanges", value: function (e, t) { var n = void 0, r = void 0, i = !1; return e && void 0 !== e.start ? (r = (n = parseInt(e.start, 10)) + parseInt(e.length, 10), this.isNumeric(e.start) && this.isNumeric(e.length) && r - t > 0 && r - n > 0 ? i = !0 : (this.log("Ignoring invalid or overlapping range: " + JSON.stringify(e)), this.opt.noMatch(e))) : (this.log("Ignoring invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)), { start: n, end: r, valid: i } } }, { key: "checkWhitespaceRanges", value: function (e, t, n) { var r = void 0, i = !0, o = n.length, a = t - o, s = parseInt(e.start, 10) - a; return (r = (s = s > o ? o : s) + parseInt(e.length, 10)) > o && (r = o, this.log("End range automatically set to the max value of " + o)), s < 0 || r - s < 0 || s > o || r > o ? (i = !1, this.log("Invalid range: " + JSON.stringify(e)), this.opt.noMatch(e)) : "" === n.substring(s, r).replace(/\s+/g, "") && (i = !1, this.log("Skipping whitespace only range: " + JSON.stringify(e)), this.opt.noMatch(e)), { start: s, end: r, valid: i } } }, { key: "getTextNodes", value: function (e) { var t = this, n = "", r = []; this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function (e) { r.push({ start: n.length, end: (n += e.textContent).length, node: e }) }, function (e) { return t.matchesExclude(e.parentNode) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT }, function () { e({ value: n, nodes: r }) }) } }, { key: "matchesExclude", value: function (e) { return i.matches(e, this.opt.exclude.concat(["script", "style", "title", "head", "html"])) } }, { key: "wrapRangeInTextNode", value: function (e, t, n) { var r = this.opt.element ? this.opt.element : "mark", i = e.splitText(t), o = i.splitText(n - t), a = document.createElement(r); return a.setAttribute("data-markjs", "true"), this.opt.className && a.setAttribute("class", this.opt.className), a.textContent = i.textContent, i.parentNode.replaceChild(a, i), o } }, { key: "wrapRangeInMappedTextNode", value: function (e, t, n, r, i) { var o = this; e.nodes.every(function (a, s) { var c = e.nodes[s + 1]; if (void 0 === c || c.start > t) { if (!r(a.node)) return !1; var u = t - a.start, l = (n > a.end ? a.end : n) - a.start, h = e.value.substr(0, a.start), f = e.value.substr(l + a.start); if (a.node = o.wrapRangeInTextNode(a.node, u, l), e.value = h + f, e.nodes.forEach(function (t, n) { n >= s && (e.nodes[n].start > 0 && n !== s && (e.nodes[n].start -= l), e.nodes[n].end -= l) }), n -= l, i(a.node.previousSibling, a.start), !(n > a.end)) return !1; t = a.end } return !0 }) } }, { key: "wrapMatches", value: function (e, t, n, r, i) { var o = this, a = 0 === t ? 0 : t + 1; this.getTextNodes(function (t) { t.nodes.forEach(function (t) { t = t.node; for (var i = void 0; null !== (i = e.exec(t.textContent)) && "" !== i[a];)if (n(i[a], t)) { var s = i.index; if (0 !== a) for (var c = 1; c < a; c++)s += i[c].length; t = o.wrapRangeInTextNode(t, s, s + i[a].length), r(t.previousSibling), e.lastIndex = 0 } }), i() }) } }, { key: "wrapMatchesAcrossElements", value: function (e, t, n, r, i) { var o = this, a = 0 === t ? 0 : t + 1; this.getTextNodes(function (t) { for (var s = void 0; null !== (s = e.exec(t.value)) && "" !== s[a];) { var c = s.index; if (0 !== a) for (var u = 1; u < a; u++)c += s[u].length; var l = c + s[a].length; o.wrapRangeInMappedTextNode(t, c, l, function (e) { return n(s[a], e) }, function (t, n) { e.lastIndex = n, r(t) }) } i() }) } }, { key: "wrapRangeFromIndex", value: function (e, t, n, r) { var i = this; this.getTextNodes(function (o) { var a = o.value.length; e.forEach(function (e, r) { var s = i.checkWhitespaceRanges(e, a, o.value), c = s.start, u = s.end; s.valid && i.wrapRangeInMappedTextNode(o, c, u, function (n) { return t(n, e, o.value.substring(c, u), r) }, function (t) { n(t, e) }) }), r() }) } }, { key: "unwrapMatches", value: function (e) { for (var t = e.parentNode, n = document.createDocumentFragment(); e.firstChild;)n.appendChild(e.removeChild(e.firstChild)); t.replaceChild(n, e), this.ie ? this.normalizeTextNode(t) : t.normalize() } }, { key: "normalizeTextNode", value: function (e) { if (e) { if (3 === e.nodeType) for (; e.nextSibling && 3 === e.nextSibling.nodeType;)e.nodeValue += e.nextSibling.nodeValue, e.parentNode.removeChild(e.nextSibling); else this.normalizeTextNode(e.firstChild); this.normalizeTextNode(e.nextSibling) } } }, { key: "markRegExp", value: function (e, t) { var n = this; this.opt = t, this.log('Searching with expression "' + e + '"'); var r = 0, i = "wrapMatches"; this.opt.acrossElements && (i = "wrapMatchesAcrossElements"), this[i](e, this.opt.ignoreGroups, function (e, t) { return n.opt.filter(t, e, r) }, function (e) { r++, n.opt.each(e) }, function () { 0 === r && n.opt.noMatch(e), n.opt.done(r) }) } }, { key: "mark", value: function (e, t) { var n = this; this.opt = t; var r = 0, i = "wrapMatches", o = this.getSeparatedKeywords("string" == typeof e ? [e] : e), a = o.keywords, s = o.length, c = this.opt.caseSensitive ? "" : "i"; this.opt.acrossElements && (i = "wrapMatchesAcrossElements"), 0 === s ? this.opt.done(r) : function e(t) { var o = new RegExp(n.createRegExp(t), "gm" + c), u = 0; n.log('Searching with expression "' + o + '"'), n[i](o, 1, function (e, i) { return n.opt.filter(i, t, r, u) }, function (e) { u++, r++, n.opt.each(e) }, function () { 0 === u && n.opt.noMatch(t), a[s - 1] === t ? n.opt.done(r) : e(a[a.indexOf(t) + 1]) }) }(a[0]) } }, { key: "markRanges", value: function (e, t) { var n = this; this.opt = t; var r = 0, i = this.checkRanges(e); i && i.length ? (this.log("Starting to mark with the following ranges: " + JSON.stringify(i)), this.wrapRangeFromIndex(i, function (e, t, r, i) { return n.opt.filter(e, t, r, i) }, function (e, t) { r++, n.opt.each(e, t) }, function () { n.opt.done(r) })) : this.opt.done(r) } }, { key: "unmark", value: function (e) { var t = this; this.opt = e; var n = this.opt.element ? this.opt.element : "*"; n += "[data-markjs]", this.opt.className && (n += "." + this.opt.className), this.log('Removal selector "' + n + '"'), this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function (e) { t.unwrapMatches(e) }, function (e) { var r = i.matches(e, n), o = t.matchesExclude(e); return !r || o ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT }, this.opt.done) } }, { key: "opt", set: function (e) { this._opt = r({}, { element: "", className: "", exclude: [], iframes: !1, iframesTimeout: 5e3, separateWordSearch: !0, diacritics: !0, synonyms: {}, accuracy: "partially", acrossElements: !1, caseSensitive: !1, ignoreJoiners: !1, ignoreGroups: 0, ignorePunctuation: [], wildcards: "disabled", each: function () { }, noMatch: function () { }, filter: function () { return !0 }, done: function () { }, debug: !1, log: window.console }, e) }, get: function () { return this._opt } }, { key: "iterator", get: function () { return new i(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout) } }]), o }(); return function (e) { var t = this, n = new o(e); return this.mark = function (e, r) { return n.mark(e, r), t }, this.markRegExp = function (e, r) { return n.markRegExp(e, r), t }, this.markRanges = function (e, r) { return n.markRanges(e, r), t }, this.unmark = function (e) { return n.unmark(e), t }, this } });
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
//
// AnchorJS - v4.3.0 - 2020-10-21
// https://www.bryanbraun.com/anchorjs/
// Copyright (c) 2020 Bryan Braun; Licensed MIT
//
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
!function(A,e){"use strict";"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports?module.exports=e():(A.AnchorJS=e(),A.anchors=new A.AnchorJS)}(this,function(){"use strict";return function(A){function d(A){A.icon=Object.prototype.hasOwnProperty.call(A,"icon")?A.icon:"",A.visible=Object.prototype.hasOwnProperty.call(A,"visible")?A.visible:"hover",A.placement=Object.prototype.hasOwnProperty.call(A,"placement")?A.placement:"right",A.ariaLabel=Object.prototype.hasOwnProperty.call(A,"ariaLabel")?A.ariaLabel:"Anchor",A.class=Object.prototype.hasOwnProperty.call(A,"class")?A.class:"",A.base=Object.prototype.hasOwnProperty.call(A,"base")?A.base:"",A.truncate=Object.prototype.hasOwnProperty.call(A,"truncate")?Math.floor(A.truncate):64,A.titleText=Object.prototype.hasOwnProperty.call(A,"titleText")?A.titleText:""}function f(A){var e;if("string"==typeof A||A instanceof String)e=[].slice.call(document.querySelectorAll(A));else{if(!(Array.isArray(A)||A instanceof NodeList))throw new TypeError("The selector provided to AnchorJS was invalid.");e=[].slice.call(A)}return e}this.options=A||{},this.elements=[],d(this.options),this.isTouchDevice=function(){return Boolean("ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch)},this.add=function(A){var e,t,o,n,i,s,a,r,c,l,h,u,p=[];if(d(this.options),"touch"===(h=this.options.visible)&&(h=this.isTouchDevice()?"always":"hover"),0===(e=f(A=A||"h2, h3, h4, h5, h6")).length)return this;for(!function(){if(null!==document.head.querySelector("style.anchorjs"))return;var A,e=document.createElement("style");e.className="anchorjs",e.appendChild(document.createTextNode("")),void 0===(A=document.head.querySelector('[rel="stylesheet"],style'))?document.head.appendChild(e):document.head.insertBefore(e,A);e.sheet.insertRule(".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",e.sheet.cssRules.length),e.sheet.insertRule(":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}",e.sheet.cssRules.length),e.sheet.insertRule("[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}",e.sheet.cssRules.length),e.sheet.insertRule('@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}',e.sheet.cssRules.length)}(),t=document.querySelectorAll("[id]"),o=[].map.call(t,function(A){return A.id}),i=0;i<e.length;i++)if(this.hasAnchorJSLink(e[i]))p.push(i);else{if(e[i].hasAttribute("id"))n=e[i].getAttribute("id");else if(e[i].hasAttribute("data-anchor-id"))n=e[i].getAttribute("data-anchor-id");else{for(c=r=this.urlify(e[i].textContent),a=0;void 0!==s&&(c=r+"-"+a),a+=1,-1!==(s=o.indexOf(c)););s=void 0,o.push(c),e[i].setAttribute("id",c),n=c}(l=document.createElement("a")).className="anchorjs-link "+this.options.class,l.setAttribute("aria-label",this.options.ariaLabel),l.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(l.title=this.options.titleText),u=document.querySelector("base")?window.location.pathname+window.location.search:"",u=this.options.base||u,l.href=u+"#"+n,"always"===h&&(l.style.opacity="1"),""===this.options.icon&&(l.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(l.style.lineHeight="inherit")),"left"===this.options.placement?(l.style.position="absolute",l.style.marginLeft="-1em",l.style.paddingRight=".5em",e[i].insertBefore(l,e[i].firstChild)):(l.style.paddingLeft=".375em",e[i].appendChild(l))}for(i=0;i<p.length;i++)e.splice(p[i]-i,1);return this.elements=this.elements.concat(e),this},this.remove=function(A){for(var e,t,o=f(A),n=0;n<o.length;n++)(t=o[n].querySelector(".anchorjs-link"))&&(-1!==(e=this.elements.indexOf(o[n]))&&this.elements.splice(e,1),o[n].removeChild(t));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(A){var e=document.createElement("textarea");e.innerHTML=A,A=e.value;return this.options.truncate||d(this.options),A.trim().replace(/'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(A){var e=A.firstChild&&-1<(" "+A.firstChild.className+" ").indexOf(" anchorjs-link "),t=A.lastChild&&-1<(" "+A.lastChild.className+" ").indexOf(" anchorjs-link ");return e||t||!1}}});
// @license-end
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});