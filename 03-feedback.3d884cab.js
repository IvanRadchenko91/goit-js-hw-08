!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var o,i,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function y(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(y(e))return O(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function O(e){return u=void 0,m&&o?v(e):(o=i=void 0,f)}function S(){var e=b(),n=y(e);if(o=arguments,i=this,l=e,n){if(void 0===u)return function(e){return c=e,u=setTimeout(h,t),s?v(e):f}(l);if(d)return u=setTimeout(h,t),v(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=j(t)||0,E(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},S.flush=function(){return void 0===u?f:O(b())},S}function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==i}(e))return o;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=u.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):f.test(e)?o:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return E(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};const h="feedback-form-state",O={formEl:document.querySelector(".feedback-form"),emailEl:document.querySelector('.feedback-form [name="email"]'),textareaEl:document.querySelector('.feedback-form [name="message"]')},S=localStorage.getItem(h);let T=S?JSON.parse(S):{};O.formEl.addEventListener("input",e(t)((e=>{T[e.target.name]=e.target.value,localStorage.setItem(h,JSON.stringify(T))}),500)),O.formEl.addEventListener("submit",(e=>{e.preventDefault(),O.emailEl.value&&O.textareaEl.value?(e.currentTarget.reset(),localStorage.removeItem(h),console.log(T),T={}):alert("Please fill in text fields")})),Object.entries(T).forEach((([e,t])=>{O.formEl.elements[e].value=t}))}();
//# sourceMappingURL=03-feedback.3d884cab.js.map
