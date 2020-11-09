// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/hw1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hw1 = void 0;

var hw1 = function hw1() {
  document.getElementById("task1.1").onclick = function basics1() {
    var name = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0412\u0430\u0448\u0435 \u0456\u043C'\u044F");
    alert('Привіт ' + name);
  };

  document.getElementById("task1.2").onclick = function basics2() {
    var birthYear = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0412\u0430\u0448 \u0440\u0456\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F");
    var year = 2020;
    var result = year - birthYear;
    alert('Вам ' + result + ' років');
  };

  document.getElementById("task1.3").onclick = function basics3() {
    var side = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \"\u0441\u043C\"");
    var result = side * 4;
    alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C " + result + " \u0441\u043C");
  };

  document.getElementById("task1.4").onclick = function basics4() {
    var radius = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u0440\u0430\u0434\u0456\u0443\u0441\u0430 \u043A\u043E\u043B\u0430");
    var result = Math.pow(radius, 2);
    alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C " + result + " \u0441\u043C");
  };

  document.getElementById("task1.5").onclick = function basics5() {
    var distance = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u0441\u0442\u0430\u043D\u044C \u043C\u0456\u0436 \u043C\u0456\u0441\u0442\u0430\u043C\u0438 \u0443 \"\u043A\u043C\"");
    var time = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0430\u0441, \u044F\u043A\u0438\u0439 \u0432\u0438 \u0433\u043E\u0442\u043E\u0432\u0456 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \u043D\u0430 \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u043D\u0456 \u0443 \"\u0433\u043E\u0434\"");
    var speed = distance / time;
    alert("\u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E " + speed + " \u043A\u043C/\u0433\u043E\u0434");
  };

  document.getElementById("task1.6").onclick = function basics6() {
    var amount = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0431\u0430\u0436\u0430\u043D\u0443 \u0441\u0443\u043C\u0443 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u0445 \u0434\u043E\u043B\u0430\u0440\u0456\u0432, \u0434\u043B\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0456\u0457");
    var euroRate = 0.84;
    var result = amount * euroRate;
    alert("\u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 " + result + " Euro");
  };

  document.getElementById("task1.7").onclick = function basics7() {
    var memory = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043E\u0431'\u0454\u043C \u0444\u043B\u0435\u0448\u043A\u0438 \u0443 \"Gb\"");
    var memoryMb = memory * 1024;
    var filmInclud = memoryMb / 820;
    alert("\u041D\u0430 \u0412\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u043E\u0431'\u0454\u043C\u043E\u043C " + memory + " Gb. " + "\u0412\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F " + Math.floor(filmInclud) + " \u0444\u0456\u043B\u044C\u043C\u0456\u0432 \u043E\u0431'\u0454\u043C\u043E\u043C 820 Mb");
  };

  document.getElementById("task1.8").onclick = function basics8() {
    var money = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0433\u0440\u043E\u0448\u0435\u0439, \u044F\u043A\u0443 \u0412\u0438 \u0433\u043E\u0442\u043E\u0432\u0456 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \"\u0433\u0440\u043D\"");
    var price = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0446\u0456\u043D\u0443 \u043F\u043B\u0438\u0442\u043A\u0443 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0443 \"\u0433\u0440\u043D\"");
    var ChocolateCount = money / price;
    var spendMoney = Math.floor(ChocolateCount) * price;
    var restMoney = money - spendMoney;
    alert("\u041C\u0430\u044E\u0447\u0438 \u043D\u0430\u044F\u0432\u043D\u0443 \u0441\u0443\u043C\u0443 \u0433\u0440\u043E\u0448\u0435, \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 " + Math.floor(ChocolateCount) + " \u043F\u043B\u0438\u0442\u043A\u0438 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0443. \u0422\u0430 \u0443 \u0412\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F " + restMoney + " \u0433\u0440\u043D");
  };

  document.getElementById("task1.9").onclick = function basics9() {
    var number = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0447\u0438\u0441\u043B\u043E");
    alert(('' + number).split('').reverse().join(''));
  };

  document.getElementById("task1.10").onclick = function basics10() {
    var sum = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u044F\u043A\u0443 \u0431\u0430\u0436\u0430\u0454\u0442\u0435 \u0456\u043D\u0432\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438");
    var interest = 0.0042;
    var monthIncome = sum * interest * 2;
    alert("\u042F\u043A\u0449\u043E \u0412\u0438 \u0437\u0430\u0456\u043D\u0432\u0435\u0441\u0442\u0443\u0454\u0442\u0435 " + sum + " \u0433\u0440\u043D. \u0412\u0430\u0448 \u0434\u043E\u0445\u0456\u0434 \u0437\u0430 \u0434\u0432\u0430 \u043C\u0456\u0441\u044F\u0446\u0456 \u0441\u043A\u043B\u0430\u0434\u0435 " + monthIncome + " \u0433\u0440\u043D");
  };
};

exports.hw1 = hw1;
},{}],"js/hw2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hw2 = void 0;

var hw2 = function hw2() {
  document.getElementById("task2.1").onclick = function basics11() {
    var year = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0412\u0430\u0448 \u0432\u0456\u043A");

    if (year >= 0 & year <= 12) {
      alert("\u0412\u0438 \u0449\u0435 \u0434\u0438\u043D\u0438\u043D\u0430");
    } else if (year >= 13 & year <= 18) {
      alert("\u0412\u0438 \u0432\u0436\u0435 \u043F\u0456\u0434\u043B\u0456\u0442\u043E\u043A");
    } else if (year >= 19 & year <= 60) {
      alert("\u0412\u0438 \u0432\u0436\u0435 \u0434\u043E\u0440\u043E\u0441\u043B\u0430 \u043B\u044E\u0434\u0438\u043D\u0430");
    } else if (year > 60) {
      alert("\u0412\u0438 \u0432\u0436\u0435 \u043F\u0435\u043D\u0441\u0456\u0439\u043D\u043E\u0433\u043E \u0432\u0456\u043A\u0443");
    }
  };

  document.getElementById("task2.2").onclick = function basics12() {
    var symbol = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 9");

    switch (symbol) {
      case 0:
        alert("\u041F\u0456\u0434 0 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  )  ");
        break;

      case 1:
        alert(" \u041F\u0456\u0434 1 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  !  ");
        break;

      case 2:
        alert("\u041F\u0456\u0434 2 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  \" ");
        break;

      case 3:
        alert("\u041F\u0456\u0434 3 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  #");
        break;

      case 4:
        alert("\u041F\u0456\u0434 4 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  ;");
        break;

      case 5:
        alert("\u041F\u0456\u0434 5 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  %");
        break;

      case 6:
        alert("\u041F\u0456\u0434 6 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  ^");
        break;

      case 7:
        alert("\u041F\u0456\u0434 7 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  &");
        break;

      case 8:
        alert("\u041F\u0456\u0434 8 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  *");
        break;

      case 9:
        alert("\u041F\u0456\u0434 9 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u0438\u043C\u0432\u043E\u043B  (");
        break;
    }
  };

  document.getElementById("task2.3").onclick = function basics13() {
    var number = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0440\u044C\u043E\u0445\u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E");

    if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
      alert("\u0423 \u0432\u0432\u0435\u0434\u0435\u043D\u043E\u043C\u0443 \u0412\u0430\u043C\u0438 \u0447\u0438\u0441\u043B\u0456 \u0454 \u0441\u0445\u043E\u0436\u0456 \u0447\u0438\u0441\u043B\u0430");
    } else {
      alert("\u0423 \u0432\u0435\u0434\u0435\u043D\u043E\u043C\u0443 \u0412\u0430\u043C\u0438 \u0447\u0438\u0441\u043B\u0456 \u0441\u0445\u043E\u0436\u0438\u0445 \u0447\u0438\u0441\u0435\u043B \u043D\u0435\u043C\u0430\u0454");
    }
  };

  document.getElementById("task2.4").onclick = function basics14() {
    var year = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0440\u0456\u043A \u0412\u0430\u0448\u043E\u0433\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F");

    if (year % 4 == 0 || year % 400 == 0 && year % 100 !== 0) {
      alert("\u0420\u0456\u043A \u0412\u0430\u0448\u043E\u0433\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0454 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u043C");
    } else {
      alert("\u0420\u0456\u043A \u0412\u0430\u0448\u043E\u0433\u043E \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u043D\u0435 \u0454 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u0438\u043C");
    }
  };

  document.getElementById("task2.5").onclick = function basics15() {
    var number = prompt("\u0432\u0432\u0435\u0434\u0456\u0442\u044C 5-\u0442\u0438 \u0437\u043D\u0430\u0447\u043D\u0435 \u0447\u0438\u0441\u043B\u043E");

    if (number[0] == number[4] && number[1] == number[3]) {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 \u043F\u0430\u043D\u0446\u0438\u0444\u0440\u043E\u0432\u0435 \u0447\u0438\u0441\u043B\u043E");
    } else {
      alert("\u0412\u0438 \u0432\u0432\u0435\u043B\u0438 - \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0435 \u0447\u0438\u0441\u043B\u043E");
    }
  };

  document.getElementById("task2.6").onclick = function basics16() {
    var sum = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0443 USD \u0434\u043B\u044F \u043E\u0431\u043C\u0456\u043D\u0443");
    var currency = prompt("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u0430\u043B\u044E\u0442\u0443: EUR, UAH, AZN");
    var euroRate = 0.85;
    var uanRate = 28.36;
    var aznRate = 1.70;

    switch (currency) {
      case "EUR":
        alert('Ви отримаєте ' + sum * euroRate + " \u0404\u0432\u0440\u043E");
        break;

      case "eur":
        alert('Ви отримаєте ' + sum * euroRate + " \u0404\u0432\u0440\u043E");
        break;

      case "UAH":
        alert('Ви отримаєте ' + sum * uanRate + " \u0413\u0440\u0438\u0432\u0435\u043D\u044C");
        break;

      case "uah":
        alert('Ви отримаєте ' + sum * uanRate + " \u0413\u0440\u0438\u0432\u0435\u043D\u044C");
        break;

      case "AZN":
        alert('Ви отримаєте ' + sum * aznRate + " \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u044C\u043A\u0438\u0445 \u043C\u0430\u043D\u0430\u0442\u0456\u0432");
        break;

      case "azn":
        alert('Ви отримаєте ' + sum * aznRate + " \u0410\u0437\u0435\u0440\u0431\u0430\u0439\u0434\u0436\u0430\u043D\u0441\u044C\u043A\u0438\u0445 \u043C\u0430\u043D\u0430\u0442\u0456\u0432");
        break;
    }
  };

  document.getElementById("task2.7").onclick = function basics17() {
    var discountOne = 0.03;
    var discountSecond = 0.05;
    var discountThird = 0.07;
    var sumSpend = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u0443 \u0412\u0430\u043C\u0438 \u0441\u0443\u043C\u0443 \u0432 \u043D\u0430\u0448\u043E\u043C\u0443 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0456");

    if (sumSpend >= 200 && sumSpend <= 299) {
      alert("\u0412\u0430\u0448\u0430 \u0437\u043D\u0438\u0436\u043A\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 3%, \u0442\u0430 \u0441\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C " + (sumSpend - sumSpend * discountOne) + " \u0433\u0440\u043D");
    } else if (sumSpend >= 300 && sumSpend <= 499) {
      alert("\u0412\u0430\u0448\u0430 \u0437\u043D\u0438\u0436\u043A\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 5%, \u0442\u0430 \u0441\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C " + (sumSpend - sumSpend * discountSecond) + " \u0433\u0440\u043D");
    } else if (sumSpend > 500) {
      alert("\u0412\u0430\u0448\u0430 \u0437\u043D\u0438\u0436\u043A\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C 7%, \u0442\u0430 \u0441\u0443\u043C\u0430 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C " + (sumSpend - sumSpend * discountThird) + " \u0433\u0440\u043D");
    }
  };

  document.getElementById("task2.8").onclick = function basics18() {
    var circleLength = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u043A\u043E\u043B\u0430");
    var circleDiameter = circleLength / 3.14;
    var squarePerimeter = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430");
    var squareSide = squarePerimeter / 4;

    if (squareSide > circleDiameter) {
      alert("\u0423\u0440\u0430... \u0412\u0430\u0448\u0435 \u043A\u043E\u043B\u043E \u043F\u043E\u043C\u0456\u0449\u0430\u0454\u0442\u044C\u0441\u044F \u0443 \u043A\u0432\u0430\u0434\u0440\u0430\u0442 ");
    } else {
      alert("\u041D\u0430\u0436\u0430\u043B\u044C... \u041A\u043E\u043B\u043E \u043D\u0435 \u043F\u043E\u043C\u0456\u0449\u0430\u0454\u0442\u044C\u0441\u044F \u0443 \u043A\u0432\u0430\u0434\u0440\u0430\u0442");
    }
  };

  document.getElementById("task2.9").onclick = function basics19() {
    var questionOne = prompt("\u0412\u0430\u043C \u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F \u0417\u0435\u043B\u0435\u043D\u0441\u044C\u043A\u0438\u0439? 1 - \u0442\u0430\u043A; 2 - \u043D\u0456; 3 - \u0430 \u0445\u0442\u043E \u0446\u0435?");
    var questionTwo = prompt("\u0412\u0438 \u0433\u043E\u043B\u043E\u0441\u0443\u0432\u0430\u043B\u0438 \u0437\u0430 \u0417\u0435\u043B\u0435\u043D\u0441\u044C\u043A\u043E\u0433\u043E? 1 - \u0442\u0430\u043A; 2 - \u043D\u0456; 3 - \u0443\u0442\u0440\u0438\u043C\u0443\u044E\u0441\u044F \u0432\u0456\u0434 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456)");
    var questionThird = prompt("\u0412\u0438 \u0431 \u043E\u0431\u0440\u0430\u043B\u0438 \u043A\u043B\u043E\u0443\u043D\u0430 \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0439 \u0442\u0435\u0440\u043C\u0456\u043D? 1 -\u0442\u0430\u043A; 2 - \u043D\u0456; 3 - \u043B\u0438\u0448\u0435 \u0439\u043E\u0433\u043E ");
    var points = 0;

    if (questionOne == 3) {
      points += 2;
    }

    if (questionTwo == 2) {
      points += 2;
    }

    if (questionThird == 2) {
      points += 2;
    }

    alert("\u0412\u0438 \u0449\u0438\u0440\u0438\u0439 \u043F\u0430\u0442\u0440\u0456\u043E\u0442 " + points);
  };

  document.getElementById("task2.10").onclick = function basics20() {
    var date = new Date(prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0443 \u0434\u0430\u0442\u0443 yyyy-mm-dd"));
    date.setDate(date.getDate() + 1);
    alert(date);
  };
};

exports.hw2 = hw2;
},{}],"js/hw3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hw3 = void 0;

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hw3 = function hw3() {
  // 3.1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.
  document.getElementById("task3.1").onclick = function basics21() {
    var startRange = +prompt("Enter start of the range", "");
    var endRange = +prompt("Enter end of the range", '');
    var sum = 0;

    while (startRange <= endRange) {
      sum += startRange;
      startRange++;
    }

    alert(sum);
  }; // 3.2 Запросить 2 числа и найти только наибольший общий делитель.


  document.getElementById("task3.2").onclick = function basics22() {
    var num1 = +prompt("Enter any number", "");
    var num2 = +prompt("Enter any number", "");

    while (num1 !== 0 && num2 !== 0) {
      num1 > num2 ? num1 %= num2 : num2 %= num1;
    }

    alert(num1 + num2);
  }; // 3.3 Запросить у пользователя число и вывести все делители этого числа.


  document.getElementById("task3.3").onclick = function basics23() {
    var num = +prompt("Enter any number", "");
    var i = 0;

    while (i++ <= num) {
      if (num % i == 0) {
        alert(i);
      }
    }
  }; // 3.4 Определить количество цифр в введенном числе.


  document.getElementById("task3.4").onclick = function basics24() {
    var countNum = +prompt("Enter any number", "1234");
    var i = 0;

    if (countNum == 0) {
      i++;
    }

    for (; countNum > 1 || countNum < -1; i++) {
      countNum /= 10;
    }

    alert(i);
  }; // 3.5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем


  document.getElementById("task3.5").onclick = function basics25() {
    var positiveNum = 0;
    var negativeNum = 0;
    var zeroNum = 0;
    var oddNum = 0;
    var evenNum = 0;

    for (var i = 1; i <= 10; i++) {
      var num = +prompt("Enter ten numbers. Number: ".concat(i));

      if (num == 0) {
        zeroNum += 1;
      } else if (num < 0) {
        negativeNum += 1;
      } else {
        positiveNum += 1;
      }

      if (num % 2 == 0) {
        evenNum += 1;
      } else if (num % 2 !== 0) {
        oddNum += 1;
      } else {
        alert("incorect number");
      }
    }

    alert("You enter: null = ".concat(zeroNum, "; positive = ").concat(positiveNum, "; negative = ").concat(negativeNum, "; odd numbers = ").concat(oddNum, "; even numbers = ").concat(evenNum, "; "));
  }; // 3.6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.


  document.getElementById("task3.6").onclick = function basics26() {
    while (true) {
      alert("Let's calculate a little?");
      var firstNum = +prompt("Enter first number", "1");
      var operation = prompt("Enter operation you want to do", "+ , - , * , / ");
      var secondNum = +prompt("Enter second number", "2");
      var result = 0;

      if (operation == '+') {
        result = firstNum + secondNum;
        alert(result);
      } else if (operation == '-') {
        result = firstNum - secondNum;
        alert(result);
      } else if (operation == '*') {
        result = firstNum * secondNum;
        alert(result);
      } else {
        result = firstNum / secondNum;
        alert(result);
      }

      var ask = confirm("Do you want to do one more operation?");

      if (!ask) {
        break;
      }
    }
  }; // 3.7 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).


  document.getElementById("task3.7").onclick = function basics27() {
    var num = prompt("Enter number", '3');
    var step = +prompt("Enter step number", '2');
    var arr = num.split('');

    for (var i = 0; i < step; i++) {
      arr.push(arr.shift());
    }

    alert(arr.join(_templateObject()));
  }; // 3.8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.


  document.getElementById("task3.8").onclick = function basics28() {
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sundey'];
    var count = 0;

    while (confirm("It's ".concat(days[count], ". Do you want to see next day?"))) {
      count = (count + 1) % days.length;
    }
  }; // 3.9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.


  document.getElementById("task3.9").onclick = function basics29() {
    for (var i = 2; i <= 9; i++) {
      for (var j = 1; j <= 10; j++) {
        console.log("".concat(i, " * ").concat(j, " = ").concat(i * j));
      }
    }

    alert("Open console");
  }; // 3.10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.


  document.getElementById("task3.10").onclick = function basics30() {
    alert('Загадайте число від 1 до 100');
    var startNum = 0;
    var endNum = 100;

    while (true) {
      var N = Math.floor(startNum + (endNum - startNum) / 2);
      var guessNum = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E >, < \u0430\u0431\u043E = ".concat(N), ">,<,=");

      if (guessNum == "<") {
        endNum = N - 1;
      } else if (guessNum == ">") {
        startNum = N + 1;
      } else if (guessNum == "=") {
        alert("\u0413\u0440\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0430. \u0414\u0443\u043C\u0430\u044E, \u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E ".concat(N));
        break;
      }
    }
  };
};

exports.hw3 = hw3;
},{}],"js/hw4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hw4 = void 0;

var hw4 = function hw4() {
  document.getElementById("task4.1").onclick = function basics31() {
    alert("\u041F\u0440\u0438\u0432\u0456\u0442. \u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0432\u0430 \u0447\u0438\u0441\u043B\u0430");
    var firstNum = +prompt("\u0412\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E", '30');
    var secondNum = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E", '40');

    function checkNum(firstNum, secondNum) {
      if (firstNum > secondNum) {
        return "1";
      } else if (firstNum < secondNum) {
        return "-1";
      }

      return "0";
    }

    alert(checkNum(firstNum, secondNum));
  };

  document.getElementById("task4.2").onclick = function basics32() {
    var a = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0438\u0441\u043B\u043E", '10');

    function factorial(a) {
      return a != 1 ? a * factorial(a - 1) : 1;
    }

    alert(factorial(a));
  };

  document.getElementById("task4.3").onclick = function basics33() {
    var a = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0435\u0440\u0448\u0435 \u0447\u0438\u0441\u043B\u043E", '5');
    var b = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0435 \u0447\u0438\u0441\u043B\u043E", '3');
    var c = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0442\u0440\u0435\u0442\u0454 \u0447\u0438\u0441\u043B\u043E", '10');

    function oneNum() {
      var one = [a, b, c];
      alert(one.join(''));
    }

    oneNum();
  };

  document.getElementById("task4.4").onclick = function basics34() {
    var a = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443", '30');
    var b = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0448\u0438\u0440\u0438\u043D\u0443", '20');

    function square(a, b) {
      if (!b) {
        var one = a * a;
        return one;
      } else {
        var two = a * b;
        return two;
      }
    }

    alert(square(a, b));
  };
};

exports.hw4 = hw4;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _hw = require("./js/hw1");

var _hw2 = require("./js/hw2");

var _hw3 = require("./js/hw3");

var _hw4 = require("./js/hw4");

(0, _hw.hw1)();
(0, _hw2.hw2)();
(0, _hw3.hw3)();
(0, _hw4.hw4)();
},{"./js/hw1":"js/hw1.js","./js/hw2":"js/hw2.js","./js/hw3":"js/hw3.js","./js/hw4":"js/hw4.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62429" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js-module.e31bb0bc.js.map