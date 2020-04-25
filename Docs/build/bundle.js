var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}function i(t,e,n,r){if(t){const o=u(t,e,n,r);return t[0](o)}}function u(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function a(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}function l(e){return e&&o(e.destroy)?e.destroy:t}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function m(){return $(" ")}function g(){return $("")}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e,n){t.classList[n?"add":"remove"](e)}let b;function x(t){b=t}function w(){const t=function(){if(!b)throw new Error("Function called outside component initialization");return b}();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}function E(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const k=[],_=[],A=[],N=[],L=Promise.resolve();let j=!1;function C(t){A.push(t)}let O=!1;const T=new Set;function P(){if(!O){O=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];x(e),q(e.$$)}for(k.length=0;_.length;)_.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];T.has(e)||(T.add(e),e())}A.length=0}while(k.length);for(;N.length;)N.pop()();j=!1,O=!1,T.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const M=new Set;let S;function D(){S={r:0,c:[],p:S}}function H(){S.r||r(S.c),S=S.p}function I(t,e){t&&t.i&&(M.delete(t),t.i(e))}function R(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),S.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function F(t){t&&t.c()}function W(t,n,s){const{fragment:c,on_mount:i,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,s),C(()=>{const n=i.map(e).filter(o);u?u.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(C)}function z(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){-1===t.$$.dirty[0]&&(k.push(t),j||(j=!0,L.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,o,s,c,i,u,a=[-1]){const l=b;x(e);const f=o.props||{},p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:n(),dirty:a};let h=!1;if(p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&i(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&B(e,t)),n}):[],p.update(),h=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();o.intro&&I(e.$$.fragment),W(e,o.target,o.anchor),P()}x(l)}class G{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const J=[];function K(t,e){return{subscribe:Q(t,e).subscribe}}function Q(e,n=t){let r;const o=[];function c(t){if(s(e,t)&&(e=t,r)){const t=!J.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),J.push(n,e)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,i=t){const u=[s,i];return o.push(u),1===o.length&&(r=n(c)||t),s(e),()=>{const t=o.indexOf(u);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}function U(e,n,s){const i=!Array.isArray(e),u=i?[e]:e,a=n.length<2;return K(s,e=>{let s=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const r=n(i?l[0]:l,e);a?e(r):p=o(r)?r:t},h=u.map((t,e)=>c(t,t=>{l[e]=t,f&=~(1<<e),s&&d()},()=>{f|=1<<e}));return s=!0,d(),function(){r(h),p()}})}function X(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,o,s,c=[],i="",u=t.split("/");for(u[0]||u.shift();o=u.shift();)"*"===(n=o[0])?(c.push("wild"),i+="/(.*)"):":"===n?(r=o.indexOf("?",1),s=o.indexOf(".",1),c.push(o.substring(1,~r?r:~s?s:o.length)),i+=~r&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~r?"?":"")+"\\"+o.substring(s))):i+="/"+o;return{keys:c,pattern:new RegExp("^"+i+(e?"(?=$|/)":"/?$"),"i")}}function Y(t){let e,n;var r=t[0];if(r){var o=new r({});o.$on("routeEvent",t[10])}return{c(){o&&F(o.$$.fragment),e=g()},m(t,r){o&&W(o,t,r),p(t,e,r),n=!0},p(t,n){if(r!==(r=t[0])){if(o){D();const t=o;R(t.$$.fragment,1,0,()=>{z(t,1)}),H()}r?((o=new r({})).$on("routeEvent",t[10]),F(o.$$.fragment),I(o.$$.fragment,1),W(o,e.parentNode,e)):o=null}},i(t){n||(o&&I(o.$$.fragment,t),n=!0)},o(t){o&&R(o.$$.fragment,t),n=!1},d(t){t&&d(e),o&&z(o,t)}}}function Z(t){let e,n;var r=t[0];function o(t){return{props:{params:t[1]}}}if(r){var s=new r(o(t));s.$on("routeEvent",t[9])}return{c(){s&&F(s.$$.fragment),e=g()},m(t,r){s&&W(s,t,r),p(t,e,r),n=!0},p(t,n){const c={};if(2&n&&(c.params=t[1]),r!==(r=t[0])){if(s){D();const t=s;R(t.$$.fragment,1,0,()=>{z(t,1)}),H()}r?((s=new r(o(t))).$on("routeEvent",t[9]),F(s.$$.fragment),I(s.$$.fragment,1),W(s,e.parentNode,e)):s=null}else r&&s.$set(c)},i(t){n||(s&&I(s.$$.fragment,t),n=!0)},o(t){s&&R(s.$$.fragment,t),n=!1},d(t){t&&d(e),s&&z(s,t)}}}function tt(t){let e,n,r,o;const s=[Z,Y],c=[];function i(t,e){return t[1]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},m(t,n){c[e].m(t,n),p(t,r,n),o=!0},p(t,[o]){let u=e;e=i(t),e===u?c[e].p(t,o):(D(),R(c[u],1,1,()=>{c[u]=null}),H(),n=c[e],n||(n=c[e]=s[e](t),n.c()),I(n,1),n.m(r.parentNode,r))},i(t){o||(I(n),o=!0)},o(t){R(n),o=!1},d(t){c[e].d(t),t&&d(r)}}}function et(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const nt=K(et(),(function(t){const e=()=>{t(et())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));U(nt,t=>t.location),U(nt,t=>t.querystring);function rt(t){if(!t||!t.tagName||"a"!=t.tagName.toLowerCase())throw Error('Action "link" can only be used with <a> tags');const e=t.getAttribute("href");if(!e||e.length<1||"/"!=e.charAt(0))throw Error('Invalid value for "href" attribute');t.setAttribute("href","#"+e)}function ot(e,n,r){let o,s=t;!function(t,e,n){t.$$.on_destroy.push(c(e,n))}(e,nt,t=>r(4,o=t)),e.$$.on_destroy.push(()=>s());let{routes:i={}}=n,{prefix:u=""}=n;class a{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument');const{pattern:n,keys:r}=X(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.route,this.conditions=e.conditions||[],this.userData=e.userData):(this.component=e,this.conditions=[],this.userData=void 0),this._pattern=n,this._keys=r}match(t){u&&t.startsWith(u)&&(t=t.substr(u.length)||"/");const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let r=0;for(;r<this._keys.length;)n[this._keys[r]]=e[++r]||null;return n}checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!this.conditions[e](t))return!1;return!0}}const l=[];i instanceof Map?i.forEach((t,e)=>{l.push(new a(e,t))}):Object.keys(i).forEach(t=>{l.push(new a(t,i[t]))});let f=null,p=null;const d=w(),h=(t,e)=>{setTimeout(()=>{d(t,e)},0)};return e.$set=t=>{"routes"in t&&r(2,i=t.routes),"prefix"in t&&r(3,u=t.prefix)},e.$$.update=()=>{if(17&e.$$.dirty){r(0,f=null);let t=0;for(;!f&&t<l.length;){const e=l[t].match(o.location);if(e){const n={component:l[t].component,name:l[t].component.name,location:o.location,querystring:o.querystring,userData:l[t].userData};if(!l[t].checkConditions(n)){h("conditionsFailed",n);break}r(0,f=l[t].component),e&&"object"==typeof e&&Object.keys(e).length?r(1,p=e):r(1,p=null),h("routeLoaded",n)}t++}}},[f,p,i,u,o,a,l,d,h,function(t){E(e,t)},function(t){E(e,t)}]}class st extends G{constructor(t){super(),V(this,t,ot,tt,s,{routes:2,prefix:3})}}const ct=t=>({}),it=t=>({}),ut=t=>({}),at=t=>({}),lt=t=>({}),ft=t=>({});function pt(e){let n,r,o,s,c,l,$,g,b,x,w;const E=e[2]["sidebar-top"],k=i(E,e,e[1],ft),_=k||function(t){let e;return{c(){e=h("div"),e.innerHTML='<div class="sidebar-heading">\n\t      Welcome!\n\t    </div>',y(e,"class","pure-menu-heading")},m(t,n){p(t,e,n)},d(t){t&&d(e)}}}(),A=e[2].sidebar,N=i(A,e,e[1],at),L=N||{c:t,m:t,d:t},j=e[2].content,C=i(j,e,e[1],it),O=C||{c:t,m:t,d:t};return{c(){n=h("div"),r=h("div"),r.innerHTML="<span></span>",o=m(),s=h("div"),c=h("div"),_&&_.c(),l=m(),$=h("ul"),L&&L.c(),g=m(),b=h("div"),O&&O.c(),y(r,"id","menuLink"),y(r,"class","menu-link"),v(r,"active",e[0]),y($,"class","pure-menu-list"),y(c,"class","pure-menu"),y(s,"id","menu"),v(s,"active",e[0]),y(b,"id","main"),y(n,"id","layout"),v(n,"active",e[0])},m(t,i,u){var a,d,h,m;p(t,n,i),f(n,r),f(n,o),f(n,s),f(s,c),_&&_.m(c,null),f(c,l),f(c,$),L&&L.m($,null),f(n,g),f(n,b),O&&O.m(b,null),x=!0,u&&w(),a=r,d="click",h=e[3],a.addEventListener(d,h,m),w=()=>a.removeEventListener(d,h,m)},p(t,[e]){1&e&&v(r,"active",t[0]),k&&k.p&&2&e&&k.p(u(E,t,t[1],ft),a(E,t[1],e,lt)),N&&N.p&&2&e&&N.p(u(A,t,t[1],at),a(A,t[1],e,ut)),1&e&&v(s,"active",t[0]),C&&C.p&&2&e&&C.p(u(j,t,t[1],it),a(j,t[1],e,ct)),1&e&&v(n,"active",t[0])},i(t){x||(I(_,t),I(L,t),I(O,t),x=!0)},o(t){R(_,t),R(L,t),R(O,t),x=!1},d(t){t&&d(n),_&&_.d(t),L&&L.d(t),O&&O.d(t),w()}}}function dt(t,e,n){let r=!1,{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o,()=>n(0,r=!r)]}class ht extends G{constructor(t){super(),V(this,t,dt,pt,s,{})}}const $t=[];let mt;function gt(t){t.node.classList.remove(t.className),t.pattern.test(mt)&&t.node.classList.add(t.className)}function yt(t,e){if(!(e=e&&("string"==typeof e||"object"==typeof e&&e instanceof RegExp)?{path:e}:e||{}).path&&t.hasAttribute("href")&&(e.path=t.getAttribute("href"),e.path&&e.path.length>1&&"#"==e.path.charAt(0)&&(e.path=e.path.substring(1))),e.className||(e.className="active"),!e.path||"string"==typeof e.path&&(e.path.length<1||"/"!=e.path.charAt(0)&&"*"!=e.path.charAt(0)))throw Error('Invalid value for "path" argument');const{pattern:n}="string"==typeof e.path?X(e.path):{pattern:e.path},r={node:t,className:e.className,pattern:n};return $t.push(r),gt(r),{destroy(){$t.splice($t.indexOf(r),1)}}}function vt(e){let n,o,s,c,$,m,g;const v=e[3].default,b=i(v,e,e[2],null),x=b||{c:t,m:t,d:t};return{c(){n=h("li"),o=h("a"),x&&x.c(),y(o,"href",e[0]),y(o,"class",s="pure-menu-link "+e[1]),y(n,"class","pure-menu-item")},m(t,e,s){p(t,n,e),f(n,o),x&&x.m(o,null),m=!0,s&&r(g),g=[l(c=rt.call(null,o)),l($=yt.call(null,o))]},p(t,[e]){b&&b.p&&4&e&&b.p(u(v,t,t[2],null),a(v,t[2],e,null)),(!m||1&e)&&y(o,"href",t[0]),(!m||2&e&&s!==(s="pure-menu-link "+t[1]))&&y(o,"class",s)},i(t){m||(I(x,t),m=!0)},o(t){R(x,t),m=!1},d(t){t&&d(n),x&&x.d(t),r(g)}}}function bt(t,e,n){let{href:r}=e,{eclass:o}=e,{$$slots:s={},$$scope:c}=e;return t.$set=t=>{"href"in t&&n(0,r=t.href),"eclass"in t&&n(1,o=t.eclass),"$$scope"in t&&n(2,c=t.$$scope)},[r,o,c,s]}nt.subscribe(t=>{mt=t.location+(t.querystring?"?"+t.querystring:""),$t.map(gt)});class xt extends G{constructor(t){super(),V(this,t,bt,vt,s,{href:0,eclass:1})}}function wt(e){let n,r,o;return{c(){n=h("div"),n.innerHTML="<h1>Purecss svelte demo</h1> \n  <h2>Easy single page application</h2>",r=m(),o=h("div"),o.innerHTML='<h2>Svelte</h2> \n\n  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> \n  <p> This Single Page Application (SPA) is made with svelte and <a href="https://github.com/ItalyPaleAle/svelte-spa-router">svelte-spa-router</a></p> \n\n  <h2>Purecss responsive sidebar</h2> \n  <p>The layout of this page is taken from <a href="https://purecss.io/layouts/side-menu/">purecss demo layout</a>.</p> \n  <p>Please try to resize this page</p>',y(n,"class","header"),y(o,"class","content")},m(t,e){p(t,n,e),p(t,r,e),p(t,o,e)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(r),t&&d(o)}}}class Et extends G{constructor(t){super(),V(this,t,null,wt,s,{})}}function kt(e){let n,r,o;return{c(){n=h("h1"),n.textContent="This is an example page!",r=m(),o=h("p"),o.textContent="Hello World"},m(t,e){p(t,n,e),p(t,r,e),p(t,o,e)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(r),t&&d(o)}}}class _t extends G{constructor(t){super(),V(this,t,null,kt,s,{})}}function At(e){let n,r,o;return{c(){n=h("h2"),n.textContent="NotFound",r=m(),o=h("p"),o.textContent="Oops, this route doesn't exist!",y(n,"class","routetitle")},m(t,e){p(t,n,e),p(t,r,e),p(t,o,e)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(r),t&&d(o)}}}class Nt extends G{constructor(t){super(),V(this,t,null,At,s,{})}}function Lt(t){let e;return{c(){e=$("Home")},m(t,n){p(t,e,n)},d(t){t&&d(e)}}}function jt(t){let e;return{c(){e=$("Example Page")},m(t,n){p(t,e,n)},d(t){t&&d(e)}}}function Ct(t){let e;return{c(){e=$("Dummy menu")},m(t,n){p(t,e,n)},d(t){t&&d(e)}}}function Ot(t){let e,n,r,o;const s=new xt({props:{href:"/",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),c=new xt({props:{href:"/page",$$slots:{default:[jt]},$$scope:{ctx:t}}}),i=new xt({props:{href:"/toto",eclass:"menu-item-divided",$$slots:{default:[Ct]},$$scope:{ctx:t}}});return{c(){e=h("span"),F(s.$$.fragment),n=m(),F(c.$$.fragment),r=m(),F(i.$$.fragment),y(e,"slot","sidebar")},m(t,u){p(t,e,u),W(s,e,null),f(e,n),W(c,e,null),f(e,r),W(i,e,null),o=!0},p(t,e){const n={};2&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n);const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),c.$set(r);const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),i.$set(o)},i(t){o||(I(s.$$.fragment,t),I(c.$$.fragment,t),I(i.$$.fragment,t),o=!0)},o(t){R(s.$$.fragment,t),R(c.$$.fragment,t),R(i.$$.fragment,t),o=!1},d(t){t&&d(e),z(s),z(c),z(i)}}}function Tt(e){let n,r;const o=new st({props:{routes:e[0]}});return{c(){n=h("span"),F(o.$$.fragment),y(n,"slot","content")},m(t,e){p(t,n,e),W(o,n,null),r=!0},p:t,i(t){r||(I(o.$$.fragment,t),r=!0)},o(t){R(o.$$.fragment,t),r=!1},d(t){t&&d(n),z(o)}}}function Pt(e){let n;return{c(){n=m()},m(t,e){p(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}function qt(t){let e;const n=new ht({props:{$$slots:{default:[Pt],content:[Tt],sidebar:[Ot]},$$scope:{ctx:t}}});return{c(){F(n.$$.fragment)},m(t,r){W(n,t,r),e=!0},p(t,[e]){const r={};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){R(n.$$.fragment,t),e=!1},d(t){z(n,t)}}}function Mt(t){return[{"/":Et,"/page":_t,"*":Nt}]}return new class extends G{constructor(t){super(),V(this,t,Mt,qt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
