/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LE: () => (/* binding */ MinimogTheme)
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogSettings, MinimogStrings, MinimogLibs */
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8971);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9280);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_loadjs__WEBPACK_IMPORTED_MODULE_0__);


window.MinimogEvents = window.MinimogEvents || new _utils_events__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
window._ThemeEvent = window.MinimogEvents;
window.MinimogLibs.loadjs = __loadjs;
const MinimogEvents = window.MinimogEvents;
const MinimogTheme = window.MinimogTheme || {};
const MinimogSettings = window.MinimogSettings || {};
const MinimogStrings = window.MinimogStrings || {};
const MinimogLibs = window.MinimogLibs || {};

/***/ }),

/***/ 9280:
/***/ (() => {

__loadjs = function () {
  var h = function () {},
    c = {},
    u = {},
    f = {};
  function o(e, n) {
    if (e) {
      var r = f[e];
      if (u[e] = n, r) for (; r.length;) r[0](e, n), r.splice(0, 1);
    }
  }
  function l(e, n) {
    e.call && (e = {
      success: e
    }), n.length ? (e.error || h)(n) : (e.success || h)(e);
  }
  function d(r, t, s, i) {
    var c,
      o,
      e = document,
      n = s.async,
      u = (s.numRetries || 0) + 1,
      f = s.before || h,
      l = r.replace(/[\?|#].*$/, ""),
      a = r.replace(/^(css|img)!/, "");
    i = i || 0, /(^css!|\.css$)/.test(l) ? ((o = e.createElement("link")).rel = "stylesheet", o.href = a, (c = "hideFocus" in o) && o.relList && (c = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l) ? (o = e.createElement("img")).src = a : ((o = e.createElement("script")).src = r, o.async = void 0 === n || n), !(o.onload = o.onerror = o.onbeforeload = function (e) {
      var n = e.type[0];
      if (c) try {
        o.sheet.cssText.length || (n = "e");
      } catch (e) {
        18 != e.code && (n = "e");
      }
      if ("e" == n) {
        if ((i += 1) < u) return d(r, t, s, i);
      } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
      t(r, n, e.defaultPrevented);
    }) !== f(r, o) && e.head.appendChild(o);
  }
  function r(e, n, r) {
    var t, s;
    if (n && n.trim && (t = n), s = (t ? r : n) || {}, t) {
      if (t in c) throw "LoadJS";
      c[t] = !0;
    }
    function i(n, r) {
      !function (e, t, n) {
        var r,
          s,
          i = (e = e.push ? e : [e]).length,
          c = i,
          o = [];
        for (r = function (e, n, r) {
          if ("e" == n && o.push(e), "b" == n) {
            if (!r) return;
            o.push(e);
          }
          --i || t(o);
        }, s = 0; s < c; s++) d(e[s], r, n);
      }(e, function (e) {
        l(s, e), n && l({
          success: n,
          error: r
        }, e), o(t, e);
      }, s);
    }
    if (s.returnPromise) return new Promise(i);
    i();
  }
  return r.ready = function (e, n) {
    return function (e, r) {
      e = e.push ? e : [e];
      var n,
        t,
        s,
        i = [],
        c = e.length,
        o = c;
      for (n = function (e, n) {
        n.length && i.push(e), --o || r(i);
      }; c--;) t = e[c], (s = u[t]) ? n(t, s) : (f[t] = f[t] || []).push(n);
    }(e, function (e) {
      l(n, e);
    }), r;
  }, r.done = function (e) {
    o(e, []);
  }, r.reset = function () {
    c = {}, u = {}, f = {};
  }, r.isDefined = function (e) {
    return e in c;
  }, r;
}();

/***/ }),

/***/ 8971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Event)
/* harmony export */ });
/* unused harmony export addEventDelegate */
const addEventDelegate = _ref => {
  let {
    context = document.documentElement,
    event = 'click',
    selector,
    handler,
    capture = false
  } = _ref;
  const listener = function (e) {
    // loop parent nodes from the target to the delegation node
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      if (target.matches(selector)) {
        handler.call(target, e, target);
        break;
      }
    }
  };
  context.addEventListener(event, listener, capture);
  return () => {
    context.removeEventListener(event, listener, capture);
  };
};
class Event {
  constructor() {
    this.events = {};
  }
  get evts() {
    return Object.keys(this.events);
  }
  subscribe(event, handler) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
    return () => this.unSubscribe(event, handler);
  }
  unSubscribe(event, handler) {
    const handlers = this.events[event];
    if (handlers && Array.isArray(handlers)) {
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    console.groupCollapsed(`Event emitted: ${event}`);
    console.trace();
    console.groupEnd();
    (this.events[event] || []).forEach(handler => {
      handler(...args);
    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/section.js
var SECTION_ID_ATTR = 'data-section-id';
function Section(container, properties) {
  this.container = validateContainerElement(container);
  this.id = container.getAttribute(SECTION_ID_ATTR);
  this.extensions = [];

  // eslint-disable-next-line es5/no-es6-static-methods
  Object.assign(this, validatePropertiesObject(properties));
  this.onLoad();
}
Section.prototype = {
  onLoad: Function.prototype,
  onUnload: Function.prototype,
  onSelect: Function.prototype,
  onDeselect: Function.prototype,
  onBlockSelect: Function.prototype,
  onBlockDeselect: Function.prototype,
  extend: function extend(extension) {
    this.extensions.push(extension); // Save original extension

    // eslint-disable-next-line es5/no-es6-static-methods
    var extensionClone = Object.assign({}, extension);
    delete extensionClone.init; // Remove init function before assigning extension properties

    // eslint-disable-next-line es5/no-es6-static-methods
    Object.assign(this, extensionClone);
    if (typeof extension.init === 'function') {
      extension.init.apply(this);
    }
  }
};
function validateContainerElement(container) {
  if (!(container instanceof Element)) {
    throw new TypeError('Theme Sections: Attempted to load section. The section container provided is not a DOM element.');
  }
  if (container.getAttribute(SECTION_ID_ATTR) === null) {
    throw new Error('Theme Sections: The section container provided does not have an id assigned to the ' + SECTION_ID_ATTR + ' attribute.');
  }
  return container;
}
function validatePropertiesObject(value) {
  if (typeof value !== 'undefined' && typeof value !== 'object' || value === null) {
    throw new TypeError('Theme Sections: The properties object provided is not a valid');
  }
  return value;
}

// Object.assign() polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js
/*
 * @shopify/theme-sections
 * -----------------------------------------------------------------------------
 *
 * A framework to provide structure to your Shopify sections and a load and unload
 * lifecycle. The lifecycle is automatically connected to theme editor events so
 * that your sections load and unload as the editor changes the content and
 * settings of your sections.
 */


var SECTION_TYPE_ATTR = 'data-section-type';
var theme_sections_SECTION_ID_ATTR = 'data-section-id';
window.Shopify = window.Shopify || {};
window.Shopify.theme = window.Shopify.theme || {};
window.Shopify.theme.sections = window.Shopify.theme.sections || {};
var registered = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {};
var instances = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];
function register(type, properties) {
  if (typeof type !== 'string') {
    throw new TypeError('Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered');
  }
  if (typeof registered[type] !== 'undefined') {
    throw new Error('Theme Sections: A section of type "' + type + '" has already been registered. You cannot register the same section type twice');
  }
  function TypedSection(container) {
    Section.call(this, container, properties);
  }
  TypedSection.constructor = Section;
  TypedSection.prototype = Object.create(Section.prototype);
  TypedSection.prototype.type = type;
  return registered[type] = TypedSection;
}
function unregister(types) {
  types = normalizeType(types);
  types.forEach(function (type) {
    delete registered[type];
  });
}
function load(types, containers) {
  types = normalizeType(types);
  if (typeof containers === 'undefined') {
    containers = document.querySelectorAll('[' + SECTION_TYPE_ATTR + ']');
  }
  containers = normalizeContainers(containers);
  types.forEach(function (type) {
    var TypedSection = registered[type];
    if (typeof TypedSection === 'undefined') {
      return;
    }
    containers = containers.filter(function (container) {
      // Filter from list of containers because container already has an instance loaded
      if (isInstance(container)) {
        return false;
      }

      // Filter from list of containers because container doesn't have data-section-type attribute
      if (container.getAttribute(SECTION_TYPE_ATTR) === null) {
        return false;
      }

      // Keep in list of containers because current type doesn't match
      if (container.getAttribute(SECTION_TYPE_ATTR) !== type) {
        return true;
      }
      instances.push(new TypedSection(container));

      // Filter from list of containers because container now has an instance loaded
      return false;
    });
  });
}
function unload(selector) {
  var instancesToUnload = getInstances(selector);
  instancesToUnload.forEach(function (instance) {
    var index = instances.map(function (e) {
      return e.id;
    }).indexOf(instance.id);
    instances.splice(index, 1);
    instance.onUnload();
  });
}
function extend(selector, extension) {
  var instancesToExtend = getInstances(selector);
  instancesToExtend.forEach(function (instance) {
    instance.extend(extension);
  });
}
function getInstances(selector) {
  var filteredInstances = [];

  // Fetch first element if its an array
  if (NodeList.prototype.isPrototypeOf(selector) || Array.isArray(selector)) {
    var firstElement = selector[0];
  }

  // If selector element is DOM element
  if (selector instanceof Element || firstElement instanceof Element) {
    var containers = normalizeContainers(selector);
    containers.forEach(function (container) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.container === container;
      }));
    });

    // If select is type string
  } else if (typeof selector === 'string' || typeof firstElement === 'string') {
    var types = normalizeType(selector);
    types.forEach(function (type) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.type === type;
      }));
    });
  }
  return filteredInstances;
}
function getInstanceById(id) {
  var instance;
  for (var i = 0; i < instances.length; i++) {
    if (instances[i].id === id) {
      instance = instances[i];
      break;
    }
  }
  return instance;
}
function isInstance(selector) {
  return getInstances(selector).length > 0;
}
function normalizeType(types) {
  // If '*' then fetch all registered section types
  if (types === '*') {
    types = Object.keys(registered);

    // If a single section type string is passed, put it in an array
  } else if (typeof types === 'string') {
    types = [types];

    // If single section constructor is passed, transform to array with section
    // type string
  } else if (types.constructor === Section) {
    types = [types.prototype.type];

    // If array of typed section constructors is passed, transform the array to
    // type strings
  } else if (Array.isArray(types) && types[0].constructor === Section) {
    types = types.map(function (TypedSection) {
      return TypedSection.prototype.type;
    });
  }
  types = types.map(function (type) {
    return type.toLowerCase();
  });
  return types;
}
function normalizeContainers(containers) {
  // Nodelist with entries
  if (NodeList.prototype.isPrototypeOf(containers) && containers.length > 0) {
    containers = Array.prototype.slice.call(containers);

    // Empty Nodelist
  } else if (NodeList.prototype.isPrototypeOf(containers) && containers.length === 0) {
    containers = [];

    // Handle null (document.querySelector() returns null with no match)
  } else if (containers === null) {
    containers = [];

    // Single DOM element
  } else if (!Array.isArray(containers) && containers instanceof Element) {
    containers = [containers];
  }
  return containers;
}
if (window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');
    if (container !== null) {
      load(container.getAttribute(SECTION_TYPE_ATTR), container);
    }
  });
  document.addEventListener('shopify:section:unload', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');
    var instance = getInstances(container)[0];
    if (typeof instance === 'object') {
      unload(container);
    }
  });
  document.addEventListener('shopify:section:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onSelect(event);
    }
  });
  document.addEventListener('shopify:section:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onDeselect(event);
    }
  });
  document.addEventListener('shopify:block:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onBlockSelect(event);
    }
  });
  document.addEventListener('shopify:block:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onBlockDeselect(event);
    }
  });
}
;// CONCATENATED MODULE: ./src/js/sections/foxkit-flashsale.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];

register('foxkit-flashsale', {
  onLoad: function () {
    this.selectors = {
      productsContainer: '#CollectionProductGrid',
      products: ['.sf__pcard']
    };
    this.domNodes = queryDomNodes(this.selectors);
    const collectionID = this.container.dataset.collectionId;
    if (collectionID) this.initFlashSale(collectionID);
  },
  initFlashSale: async function (collectionID) {
    const res = await fetchCountDown(collectionID);
    if (res.ok && res.payload) {
      this.settings = res.payload[0];
      this.initCountdown();
      const {
        expires_date
      } = this.settings;
      this.expires_date = expires_date;
      if (new Date(expires_date).getTime() < Date.now()) {
        return this.container.classList.add('hidden');
      }
      this.container.classList.remove('hidden');
      const products = this.domNodes.productsContainer.querySelectorAll(this.selectors.products);
      products.forEach(card => {
        const content = card.querySelector('.sf__pcard-content');
        const soldNumber = card.dataset.soldNumber;
        const component = saleProgress(this.settings, card.dataset.productId, soldNumber);
        const newComponent = generateDomFromString(component);
        content.appendChild(newComponent);
      });
    }
  },
  initCountdown: function () {
    var _this$settings;
    this.container.classList.add((_this$settings = this.settings) === null || _this$settings === void 0 ? void 0 : _this$settings.cdt_style);
    loadAssets('countdown.js').then(() => {
      var _this$Countdown;
      this.Countdown = new MinimogTheme.ProductCountdown(this.settings);
      if ((_this$Countdown = this.Countdown) !== null && _this$Countdown !== void 0 && _this$Countdown.ended) this.container.classList.add('hidden');
    });
  }
});
load('foxkit-flashsale');
})();

/******/ })()
;