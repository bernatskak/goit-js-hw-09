!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function u(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}function a(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))}function c(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}i.form.addEventListener("submit",(function(e){e.preventDefault(),function(e,n,t){if(e<0||n<0||t<=0)return;for(var o=1;o<=Number(i.amount.value);o+=1)u(o,e+=1===o?0:n).then(a).catch(c)}(Number(i.delay.value),Number(i.step.value))}))}();
//# sourceMappingURL=03-promises.d062e605.js.map
