parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function r(){var r=prompt("Введіть Ваше ім'я");alert("Привіт "+r)}function t(){var r=prompt("Введіть Ваш рік народження");alert("Вам "+(2020-r)+" років")}function o(){var r=prompt('Введіть довжину сторони квадрата "см"');alert("Периметр квадрата становить "+4*r+" см")}function p(){var r=prompt("Введіть довжину радіуса кола"),t=Math.pow(r,2);alert("Площа кола становить "+t+" см")}function a(){var r=prompt('Введіть вістань між містами у "км"'),t=prompt('Введіть час, який ви готові потратити на подолання відстанні у "год"');alert("Ви повинні рухатися зі швидкістю "+r/t+" км/год")}function n(){var r=prompt("Введіть бажану суму американських доларів, для конвертації");alert("Ви отримаєте "+.84*r+" Euro")}function f(){var r=prompt('Введіть об\'єм флешки у "Gb"'),t=1024*r/820;alert("На Вашу флешку об'ємом "+r+" Gb. Вміститься "+Math.floor(t)+" фільмів об'ємом 820 Mb")}function l(){var r=prompt('Введіть суму грошей, яку Ви готові потратити "грн"'),t=prompt('Введіть ціну плитку шоколаду "грн"'),o=r/t,p=r-Math.floor(o)*t;alert("Маючи наявну суму гроше, Ви можете придбати "+Math.floor(o)+" плитки шоколаду. Та у Вас залишиться "+p+" грн")}function e(){var r=prompt("Введіть будь-яке число");alert((""+r).split("").reverse().join(""))}function i(){}
},{}]},{},["Focm"], null)