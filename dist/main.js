(()=>{"use strict";var e={858:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Statue=void 0,t.Statue=class{constructor(e,t,n,a){this.title=e,this.price=t,this.year=n,this.height=a}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}(()=>{const e=n(858);let t=[],a=document.getElementById("nev"),o=document.getElementById("ar"),r=document.getElementById("keszites_eve"),u=document.getElementById("magassag"),s=document.getElementById("Hiba");function l(e){return!!(new RegExp("ABC",",- ").test(e)&&e.length>=1&&""!=e)}function v(e){return e>=1}function i(e){return e>=20}function c(e){return e<=2022&&e>=0}function d(){l(a.value)&&v(parseInt(o.value))&&i(parseInt(u.value))&&c(parseInt(r.value))?(t.push(new e.Statue(a.value,parseInt(o.value),parseInt(u.value),parseInt(r.value))),console.log(t)):(s.textContent="",console.log("valami nem jó"),l(a.value)?v(parseInt(o.value))?i(parseInt(u.value))?c(parseInt(r.value))||(s.textContent="Az év nem lehet negatív vagy nem lehet nagyobb mint a mostani év"):s.textContent="A magasság nem lehet negatív":s.textContent="Az ár nem lehet negatív":s.textContent="Hibás a cim")}document.addEventListener("DOMContentLoaded",(()=>{var e;null===(e=document.getElementById("felvesz"))||void 0===e||e.addEventListener("click",d)}))})()})();