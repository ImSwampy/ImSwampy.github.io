import{w as i,g as f,Y as p,z as _,Z as h,_ as E,h as s,d as o,a as T,m as g}from"./NitZzSDk.js";function w(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function r(n,t){var e=_;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function M(n,t){var e=(t&h)!==0,c=(t&E)!==0,a,m=!n.startsWith("<!>");return()=>{if(s)return r(o,null),o;a===void 0&&(a=w(m?n:"<!>"+n),e||(a=f(a)));var d=c||p?document.importNode(a,!0):a.cloneNode(!0);if(e){var l=f(d),v=d.lastChild;r(l,v)}else r(d,d);return d}}function N(n=""){if(!s){var t=i(n+"");return r(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),g(e)),r(e,e),e}function L(){if(s)return r(o,null),o;var n=document.createDocumentFragment(),t=document.createComment(""),e=i();return n.append(t,e),r(t,e),n}function P(n,t){if(s){_.nodes_end=o,T();return}n!==null&&n.before(t)}const y="5";var u;typeof window<"u"&&((u=window.__svelte??(window.__svelte={})).v??(u.v=new Set)).add(y);export{P as a,r as b,L as c,N as d,M as t};
