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
})({"index.js":[function(require,module,exports) {
function basics1() {
  var name = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0412\u0430\u0448\u0435 \u0456\u043C'\u044F");
  alert('Привіт ' + name);
}

function basics2() {
  var birthYear = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0412\u0430\u0448 \u0440\u0456\u043A \u043D\u0430\u0440\u043E\u0434\u0436\u0435\u043D\u043D\u044F");
  var year = 2020;
  var result = year - birthYear;
  alert('Вам ' + result + ' років');
}

function basics3() {
  var side = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0438 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \"\u0441\u043C\"");
  var result = side * 4;
  alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C " + result + " \u0441\u043C");
}

function basics4() {
  var radius = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0434\u043E\u0432\u0436\u0438\u043D\u0443 \u0440\u0430\u0434\u0456\u0443\u0441\u0430 \u043A\u043E\u043B\u0430");
  var result = Math.pow(radius, 2);
  alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C " + result + " \u0441\u043C");
}

function basics5() {
  var distance = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0456\u0441\u0442\u0430\u043D\u044C \u043C\u0456\u0436 \u043C\u0456\u0441\u0442\u0430\u043C\u0438 \u0443 \"\u043A\u043C\"");
  var time = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0447\u0430\u0441, \u044F\u043A\u0438\u0439 \u0432\u0438 \u0433\u043E\u0442\u043E\u0432\u0456 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \u043D\u0430 \u043F\u043E\u0434\u043E\u043B\u0430\u043D\u043D\u044F \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u043D\u0456 \u0443 \"\u0433\u043E\u0434\"");
  var speed = distance / time;
  alert("\u0412\u0438 \u043F\u043E\u0432\u0438\u043D\u043D\u0456 \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E " + speed + " \u043A\u043C/\u0433\u043E\u0434");
}

function basics6() {
  var amount = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0431\u0430\u0436\u0430\u043D\u0443 \u0441\u0443\u043C\u0443 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u044C\u043A\u0438\u0445 \u0434\u043E\u043B\u0430\u0440\u0456\u0432, \u0434\u043B\u044F \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0430\u0446\u0456\u0457");
  var euroRate = 0.84;
  var result = amount * euroRate;
  alert("\u0412\u0438 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 " + result + " Euro");
}

function basics7() {
  var memory = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043E\u0431'\u0454\u043C \u0444\u043B\u0435\u0448\u043A\u0438 \u0443 \"Gb\"");
  var memoryMb = memory * 1024;
  var filmInclud = memoryMb / 820;
  alert("\u041D\u0430 \u0412\u0430\u0448\u0443 \u0444\u043B\u0435\u0448\u043A\u0443 \u043E\u0431'\u0454\u043C\u043E\u043C " + memory + " Gb. " + "\u0412\u043C\u0456\u0441\u0442\u0438\u0442\u044C\u0441\u044F " + Math.floor(filmInclud) + " \u0444\u0456\u043B\u044C\u043C\u0456\u0432 \u043E\u0431'\u0454\u043C\u043E\u043C 820 Mb");
}

function basics8() {
  var money = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0441\u0443\u043C\u0443 \u0433\u0440\u043E\u0448\u0435\u0439, \u044F\u043A\u0443 \u0412\u0438 \u0433\u043E\u0442\u043E\u0432\u0456 \u043F\u043E\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \"\u0433\u0440\u043D\"");
  var price = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0446\u0456\u043D\u0443 \u043F\u043B\u0438\u0442\u043A\u0443 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0443 \"\u0433\u0440\u043D\"");
  var ChocolateCount = money / price; //кількість шоколадок

  var spendMoney = Math.floor(ChocolateCount) * price;
  var restMoney = money - spendMoney;
  alert("\u041C\u0430\u044E\u0447\u0438 \u043D\u0430\u044F\u0432\u043D\u0443 \u0441\u0443\u043C\u0443 \u0433\u0440\u043E\u0448\u0435, \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 " + Math.floor(ChocolateCount) + " \u043F\u043B\u0438\u0442\u043A\u0438 \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u0443. \u0422\u0430 \u0443 \u0412\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F " + restMoney + " \u0433\u0440\u043D");
}

function basics9() {
  var number = prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u044F\u043A\u0435 \u0447\u0438\u0441\u043B\u043E");
  alert(('' + number).split('').reverse().join(''));
}

function basics10() {}
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65263" + '/');

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