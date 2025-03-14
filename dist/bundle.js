/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = ansiHTML\r\n\r\n// Reference to https://github.com/sindresorhus/ansi-regex\r\nvar _regANSI = /(?:(?:\\u001b\\[)|\\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\\u001b[A-M]/\r\n\r\nvar _defColors = {\r\n  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]\r\n  black: '000',\r\n  red: 'ff0000',\r\n  green: '209805',\r\n  yellow: 'e8bf03',\r\n  blue: '0000ff',\r\n  magenta: 'ff00ff',\r\n  cyan: '00ffee',\r\n  lightgrey: 'f0f0f0',\r\n  darkgrey: '888'\r\n}\r\nvar _styles = {\r\n  30: 'black',\r\n  31: 'red',\r\n  32: 'green',\r\n  33: 'yellow',\r\n  34: 'blue',\r\n  35: 'magenta',\r\n  36: 'cyan',\r\n  37: 'lightgrey'\r\n}\r\nvar _openTags = {\r\n  '1': 'font-weight:bold', // bold\r\n  '2': 'opacity:0.5', // dim\r\n  '3': '<i>', // italic\r\n  '4': '<u>', // underscore\r\n  '8': 'display:none', // hidden\r\n  '9': '<del>' // delete\r\n}\r\nvar _closeTags = {\r\n  '23': '</i>', // reset italic\r\n  '24': '</u>', // reset underscore\r\n  '29': '</del>' // reset delete\r\n}\r\n\r\n;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {\r\n  _closeTags[n] = '</span>'\r\n})\r\n\r\n/**\r\n * Converts text with ANSI color codes to HTML markup.\r\n * @param {String} text\r\n * @returns {*}\r\n */\r\nfunction ansiHTML (text) {\r\n  // Returns the text if the string has no ANSI escape code.\r\n  if (!_regANSI.test(text)) {\r\n    return text\r\n  }\r\n\r\n  // Cache opened sequence.\r\n  var ansiCodes = []\r\n  // Replace with markup.\r\n  var ret = text.replace(/\\033\\[(\\d+)m/g, function (match, seq) {\r\n    var ot = _openTags[seq]\r\n    if (ot) {\r\n      // If current sequence has been opened, close it.\r\n      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast\r\n        ansiCodes.pop()\r\n        return '</span>'\r\n      }\r\n      // Open tag.\r\n      ansiCodes.push(seq)\r\n      return ot[0] === '<' ? ot : '<span style=\"' + ot + ';\">'\r\n    }\r\n\r\n    var ct = _closeTags[seq]\r\n    if (ct) {\r\n      // Pop sequence\r\n      ansiCodes.pop()\r\n      return ct\r\n    }\r\n    return ''\r\n  })\r\n\r\n  // Make sure tags are closed.\r\n  var l = ansiCodes.length\r\n  ;(l > 0) && (ret += Array(l + 1).join('</span>'))\r\n\r\n  return ret\r\n}\r\n\r\n/**\r\n * Customize colors.\r\n * @param {Object} colors reference to _defColors\r\n */\r\nansiHTML.setColors = function (colors) {\r\n  if (typeof colors !== 'object') {\r\n    throw new Error('`colors` parameter must be an Object.')\r\n  }\r\n\r\n  var _finalColors = {}\r\n  for (var key in _defColors) {\r\n    var hex = colors.hasOwnProperty(key) ? colors[key] : null\r\n    if (!hex) {\r\n      _finalColors[key] = _defColors[key]\r\n      continue\r\n    }\r\n    if ('reset' === key) {\r\n      if (typeof hex === 'string') {\r\n        hex = [hex]\r\n      }\r\n      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {\r\n        return typeof h !== 'string'\r\n      })) {\r\n        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')\r\n      }\r\n      var defHexColor = _defColors[key]\r\n      if (!hex[0]) {\r\n        hex[0] = defHexColor[0]\r\n      }\r\n      if (hex.length === 1 || !hex[1]) {\r\n        hex = [hex[0]]\r\n        hex.push(defHexColor[1])\r\n      }\r\n\r\n      hex = hex.slice(0, 2)\r\n    } else if (typeof hex !== 'string') {\r\n      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')\r\n    }\r\n    _finalColors[key] = hex\r\n  }\r\n  _setTags(_finalColors)\r\n}\r\n\r\n/**\r\n * Reset colors.\r\n */\r\nansiHTML.reset = function () {\r\n  _setTags(_defColors)\r\n}\r\n\r\n/**\r\n * Expose tags, including open and close.\r\n * @type {Object}\r\n */\r\nansiHTML.tags = {}\r\n\r\nif (Object.defineProperty) {\r\n  Object.defineProperty(ansiHTML.tags, 'open', {\r\n    get: function () { return _openTags }\r\n  })\r\n  Object.defineProperty(ansiHTML.tags, 'close', {\r\n    get: function () { return _closeTags }\r\n  })\r\n} else {\r\n  ansiHTML.tags.open = _openTags\r\n  ansiHTML.tags.close = _closeTags\r\n}\r\n\r\nfunction _setTags (colors) {\r\n  // reset all\r\n  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]\r\n  // inverse\r\n  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]\r\n  // dark grey\r\n  _openTags['90'] = 'color:#' + colors.darkgrey\r\n\r\n  for (var code in _styles) {\r\n    var color = _styles[code]\r\n    var oriColor = colors[color] || '000'\r\n    _openTags[code] = 'color:#' + oriColor\r\n    code = parseInt(code)\r\n    _openTags[(code + 10).toString()] = 'background:#' + oriColor\r\n  }\r\n}\r\n\r\nansiHTML.reset()\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/ansi-html-community/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\r\n//\r\n// Permission is hereby granted, free of charge, to any person obtaining a\r\n// copy of this software and associated documentation files (the\r\n// \"Software\"), to deal in the Software without restriction, including\r\n// without limitation the rights to use, copy, modify, merge, publish,\r\n// distribute, sublicense, and/or sell copies of the Software, and to permit\r\n// persons to whom the Software is furnished to do so, subject to the\r\n// following conditions:\r\n//\r\n// The above copyright notice and this permission notice shall be included\r\n// in all copies or substantial portions of the Software.\r\n//\r\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\r\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\r\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\r\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\r\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\r\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\r\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\r\n\r\n\r\n\r\nvar R = typeof Reflect === 'object' ? Reflect : null\r\nvar ReflectApply = R && typeof R.apply === 'function'\r\n  ? R.apply\r\n  : function ReflectApply(target, receiver, args) {\r\n    return Function.prototype.apply.call(target, receiver, args);\r\n  }\r\n\r\nvar ReflectOwnKeys\r\nif (R && typeof R.ownKeys === 'function') {\r\n  ReflectOwnKeys = R.ownKeys\r\n} else if (Object.getOwnPropertySymbols) {\r\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\r\n    return Object.getOwnPropertyNames(target)\r\n      .concat(Object.getOwnPropertySymbols(target));\r\n  };\r\n} else {\r\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\r\n    return Object.getOwnPropertyNames(target);\r\n  };\r\n}\r\n\r\nfunction ProcessEmitWarning(warning) {\r\n  if (console && console.warn) console.warn(warning);\r\n}\r\n\r\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\r\n  return value !== value;\r\n}\r\n\r\nfunction EventEmitter() {\r\n  EventEmitter.init.call(this);\r\n}\r\nmodule.exports = EventEmitter;\r\nmodule.exports.once = once;\r\n\r\n// Backwards-compat with node 0.10.x\r\nEventEmitter.EventEmitter = EventEmitter;\r\n\r\nEventEmitter.prototype._events = undefined;\r\nEventEmitter.prototype._eventsCount = 0;\r\nEventEmitter.prototype._maxListeners = undefined;\r\n\r\n// By default EventEmitters will print a warning if more than 10 listeners are\r\n// added to it. This is a useful default which helps finding memory leaks.\r\nvar defaultMaxListeners = 10;\r\n\r\nfunction checkListener(listener) {\r\n  if (typeof listener !== 'function') {\r\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\r\n  }\r\n}\r\n\r\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\r\n  enumerable: true,\r\n  get: function() {\r\n    return defaultMaxListeners;\r\n  },\r\n  set: function(arg) {\r\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\r\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\r\n    }\r\n    defaultMaxListeners = arg;\r\n  }\r\n});\r\n\r\nEventEmitter.init = function() {\r\n\r\n  if (this._events === undefined ||\r\n      this._events === Object.getPrototypeOf(this)._events) {\r\n    this._events = Object.create(null);\r\n    this._eventsCount = 0;\r\n  }\r\n\r\n  this._maxListeners = this._maxListeners || undefined;\r\n};\r\n\r\n// Obviously not all Emitters should be limited to 10. This function allows\r\n// that to be increased. Set to zero for unlimited.\r\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\r\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\r\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\r\n  }\r\n  this._maxListeners = n;\r\n  return this;\r\n};\r\n\r\nfunction _getMaxListeners(that) {\r\n  if (that._maxListeners === undefined)\r\n    return EventEmitter.defaultMaxListeners;\r\n  return that._maxListeners;\r\n}\r\n\r\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\r\n  return _getMaxListeners(this);\r\n};\r\n\r\nEventEmitter.prototype.emit = function emit(type) {\r\n  var args = [];\r\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\r\n  var doError = (type === 'error');\r\n\r\n  var events = this._events;\r\n  if (events !== undefined)\r\n    doError = (doError && events.error === undefined);\r\n  else if (!doError)\r\n    return false;\r\n\r\n  // If there is no 'error' event listener then throw.\r\n  if (doError) {\r\n    var er;\r\n    if (args.length > 0)\r\n      er = args[0];\r\n    if (er instanceof Error) {\r\n      // Note: The comments on the `throw` lines are intentional, they show\r\n      // up in Node's output if this results in an unhandled exception.\r\n      throw er; // Unhandled 'error' event\r\n    }\r\n    // At least give some kind of context to the user\r\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\r\n    err.context = er;\r\n    throw err; // Unhandled 'error' event\r\n  }\r\n\r\n  var handler = events[type];\r\n\r\n  if (handler === undefined)\r\n    return false;\r\n\r\n  if (typeof handler === 'function') {\r\n    ReflectApply(handler, this, args);\r\n  } else {\r\n    var len = handler.length;\r\n    var listeners = arrayClone(handler, len);\r\n    for (var i = 0; i < len; ++i)\r\n      ReflectApply(listeners[i], this, args);\r\n  }\r\n\r\n  return true;\r\n};\r\n\r\nfunction _addListener(target, type, listener, prepend) {\r\n  var m;\r\n  var events;\r\n  var existing;\r\n\r\n  checkListener(listener);\r\n\r\n  events = target._events;\r\n  if (events === undefined) {\r\n    events = target._events = Object.create(null);\r\n    target._eventsCount = 0;\r\n  } else {\r\n    // To avoid recursion in the case that type === \"newListener\"! Before\r\n    // adding it to the listeners, first emit \"newListener\".\r\n    if (events.newListener !== undefined) {\r\n      target.emit('newListener', type,\r\n                  listener.listener ? listener.listener : listener);\r\n\r\n      // Re-assign `events` because a newListener handler could have caused the\r\n      // this._events to be assigned to a new object\r\n      events = target._events;\r\n    }\r\n    existing = events[type];\r\n  }\r\n\r\n  if (existing === undefined) {\r\n    // Optimize the case of one listener. Don't need the extra array object.\r\n    existing = events[type] = listener;\r\n    ++target._eventsCount;\r\n  } else {\r\n    if (typeof existing === 'function') {\r\n      // Adding the second element, need to change to array.\r\n      existing = events[type] =\r\n        prepend ? [listener, existing] : [existing, listener];\r\n      // If we've already got an array, just append.\r\n    } else if (prepend) {\r\n      existing.unshift(listener);\r\n    } else {\r\n      existing.push(listener);\r\n    }\r\n\r\n    // Check for listener leak\r\n    m = _getMaxListeners(target);\r\n    if (m > 0 && existing.length > m && !existing.warned) {\r\n      existing.warned = true;\r\n      // No error code for this since it is a Warning\r\n      // eslint-disable-next-line no-restricted-syntax\r\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\r\n                          existing.length + ' ' + String(type) + ' listeners ' +\r\n                          'added. Use emitter.setMaxListeners() to ' +\r\n                          'increase limit');\r\n      w.name = 'MaxListenersExceededWarning';\r\n      w.emitter = target;\r\n      w.type = type;\r\n      w.count = existing.length;\r\n      ProcessEmitWarning(w);\r\n    }\r\n  }\r\n\r\n  return target;\r\n}\r\n\r\nEventEmitter.prototype.addListener = function addListener(type, listener) {\r\n  return _addListener(this, type, listener, false);\r\n};\r\n\r\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\r\n\r\nEventEmitter.prototype.prependListener =\r\n    function prependListener(type, listener) {\r\n      return _addListener(this, type, listener, true);\r\n    };\r\n\r\nfunction onceWrapper() {\r\n  if (!this.fired) {\r\n    this.target.removeListener(this.type, this.wrapFn);\r\n    this.fired = true;\r\n    if (arguments.length === 0)\r\n      return this.listener.call(this.target);\r\n    return this.listener.apply(this.target, arguments);\r\n  }\r\n}\r\n\r\nfunction _onceWrap(target, type, listener) {\r\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\r\n  var wrapped = onceWrapper.bind(state);\r\n  wrapped.listener = listener;\r\n  state.wrapFn = wrapped;\r\n  return wrapped;\r\n}\r\n\r\nEventEmitter.prototype.once = function once(type, listener) {\r\n  checkListener(listener);\r\n  this.on(type, _onceWrap(this, type, listener));\r\n  return this;\r\n};\r\n\r\nEventEmitter.prototype.prependOnceListener =\r\n    function prependOnceListener(type, listener) {\r\n      checkListener(listener);\r\n      this.prependListener(type, _onceWrap(this, type, listener));\r\n      return this;\r\n    };\r\n\r\n// Emits a 'removeListener' event if and only if the listener was removed.\r\nEventEmitter.prototype.removeListener =\r\n    function removeListener(type, listener) {\r\n      var list, events, position, i, originalListener;\r\n\r\n      checkListener(listener);\r\n\r\n      events = this._events;\r\n      if (events === undefined)\r\n        return this;\r\n\r\n      list = events[type];\r\n      if (list === undefined)\r\n        return this;\r\n\r\n      if (list === listener || list.listener === listener) {\r\n        if (--this._eventsCount === 0)\r\n          this._events = Object.create(null);\r\n        else {\r\n          delete events[type];\r\n          if (events.removeListener)\r\n            this.emit('removeListener', type, list.listener || listener);\r\n        }\r\n      } else if (typeof list !== 'function') {\r\n        position = -1;\r\n\r\n        for (i = list.length - 1; i >= 0; i--) {\r\n          if (list[i] === listener || list[i].listener === listener) {\r\n            originalListener = list[i].listener;\r\n            position = i;\r\n            break;\r\n          }\r\n        }\r\n\r\n        if (position < 0)\r\n          return this;\r\n\r\n        if (position === 0)\r\n          list.shift();\r\n        else {\r\n          spliceOne(list, position);\r\n        }\r\n\r\n        if (list.length === 1)\r\n          events[type] = list[0];\r\n\r\n        if (events.removeListener !== undefined)\r\n          this.emit('removeListener', type, originalListener || listener);\r\n      }\r\n\r\n      return this;\r\n    };\r\n\r\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\r\n\r\nEventEmitter.prototype.removeAllListeners =\r\n    function removeAllListeners(type) {\r\n      var listeners, events, i;\r\n\r\n      events = this._events;\r\n      if (events === undefined)\r\n        return this;\r\n\r\n      // not listening for removeListener, no need to emit\r\n      if (events.removeListener === undefined) {\r\n        if (arguments.length === 0) {\r\n          this._events = Object.create(null);\r\n          this._eventsCount = 0;\r\n        } else if (events[type] !== undefined) {\r\n          if (--this._eventsCount === 0)\r\n            this._events = Object.create(null);\r\n          else\r\n            delete events[type];\r\n        }\r\n        return this;\r\n      }\r\n\r\n      // emit removeListener for all listeners on all events\r\n      if (arguments.length === 0) {\r\n        var keys = Object.keys(events);\r\n        var key;\r\n        for (i = 0; i < keys.length; ++i) {\r\n          key = keys[i];\r\n          if (key === 'removeListener') continue;\r\n          this.removeAllListeners(key);\r\n        }\r\n        this.removeAllListeners('removeListener');\r\n        this._events = Object.create(null);\r\n        this._eventsCount = 0;\r\n        return this;\r\n      }\r\n\r\n      listeners = events[type];\r\n\r\n      if (typeof listeners === 'function') {\r\n        this.removeListener(type, listeners);\r\n      } else if (listeners !== undefined) {\r\n        // LIFO order\r\n        for (i = listeners.length - 1; i >= 0; i--) {\r\n          this.removeListener(type, listeners[i]);\r\n        }\r\n      }\r\n\r\n      return this;\r\n    };\r\n\r\nfunction _listeners(target, type, unwrap) {\r\n  var events = target._events;\r\n\r\n  if (events === undefined)\r\n    return [];\r\n\r\n  var evlistener = events[type];\r\n  if (evlistener === undefined)\r\n    return [];\r\n\r\n  if (typeof evlistener === 'function')\r\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\r\n\r\n  return unwrap ?\r\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\r\n}\r\n\r\nEventEmitter.prototype.listeners = function listeners(type) {\r\n  return _listeners(this, type, true);\r\n};\r\n\r\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\r\n  return _listeners(this, type, false);\r\n};\r\n\r\nEventEmitter.listenerCount = function(emitter, type) {\r\n  if (typeof emitter.listenerCount === 'function') {\r\n    return emitter.listenerCount(type);\r\n  } else {\r\n    return listenerCount.call(emitter, type);\r\n  }\r\n};\r\n\r\nEventEmitter.prototype.listenerCount = listenerCount;\r\nfunction listenerCount(type) {\r\n  var events = this._events;\r\n\r\n  if (events !== undefined) {\r\n    var evlistener = events[type];\r\n\r\n    if (typeof evlistener === 'function') {\r\n      return 1;\r\n    } else if (evlistener !== undefined) {\r\n      return evlistener.length;\r\n    }\r\n  }\r\n\r\n  return 0;\r\n}\r\n\r\nEventEmitter.prototype.eventNames = function eventNames() {\r\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\r\n};\r\n\r\nfunction arrayClone(arr, n) {\r\n  var copy = new Array(n);\r\n  for (var i = 0; i < n; ++i)\r\n    copy[i] = arr[i];\r\n  return copy;\r\n}\r\n\r\nfunction spliceOne(list, index) {\r\n  for (; index + 1 < list.length; index++)\r\n    list[index] = list[index + 1];\r\n  list.pop();\r\n}\r\n\r\nfunction unwrapListeners(arr) {\r\n  var ret = new Array(arr.length);\r\n  for (var i = 0; i < ret.length; ++i) {\r\n    ret[i] = arr[i].listener || arr[i];\r\n  }\r\n  return ret;\r\n}\r\n\r\nfunction once(emitter, name) {\r\n  return new Promise(function (resolve, reject) {\r\n    function errorListener(err) {\r\n      emitter.removeListener(name, resolver);\r\n      reject(err);\r\n    }\r\n\r\n    function resolver() {\r\n      if (typeof emitter.removeListener === 'function') {\r\n        emitter.removeListener('error', errorListener);\r\n      }\r\n      resolve([].slice.call(arguments));\r\n    };\r\n\r\n    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });\r\n    if (name !== 'error') {\r\n      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });\r\n    }\r\n  });\r\n}\r\n\r\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\r\n  if (typeof emitter.on === 'function') {\r\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\r\n  }\r\n}\r\n\r\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\r\n  if (typeof emitter.on === 'function') {\r\n    if (flags.once) {\r\n      emitter.once(name, listener);\r\n    } else {\r\n      emitter.on(name, listener);\r\n    }\r\n  } else if (typeof emitter.addEventListener === 'function') {\r\n    // EventTarget does not have `error` event semantics like Node\r\n    // EventEmitters, we do not listen for `error` events here.\r\n    emitter.addEventListener(name, function wrapListener(arg) {\r\n      // IE does not have builtin `{ once: true }` support so we\r\n      // have to do it manually.\r\n      if (flags.once) {\r\n        emitter.removeEventListener(name, wrapListener);\r\n      }\r\n      listener(arg);\r\n    });\r\n  } else {\r\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + typeof emitter);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\n/* eslint-env browser */\r\n/*\r\n  eslint-disable\r\n  no-console,\r\n  func-names\r\n*/\r\n\r\n/** @typedef {any} TODO */\r\n\r\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\r\nvar srcByModuleId = Object.create(null);\r\nvar noDocument = typeof document === \"undefined\";\r\nvar forEach = Array.prototype.forEach;\r\n\r\n/**\r\n * @param {function} fn\r\n * @param {number} time\r\n * @returns {(function(): void)|*}\r\n */\r\nfunction debounce(fn, time) {\r\n  var timeout = 0;\r\n  return function () {\r\n    // @ts-ignore\r\n    var self = this;\r\n    // eslint-disable-next-line prefer-rest-params\r\n    var args = arguments;\r\n    var functionCall = function functionCall() {\r\n      return fn.apply(self, args);\r\n    };\r\n    clearTimeout(timeout);\r\n\r\n    // @ts-ignore\r\n    timeout = setTimeout(functionCall, time);\r\n  };\r\n}\r\nfunction noop() {}\r\n\r\n/**\r\n * @param {TODO} moduleId\r\n * @returns {TODO}\r\n */\r\nfunction getCurrentScriptUrl(moduleId) {\r\n  var src = srcByModuleId[moduleId];\r\n  if (!src) {\r\n    if (document.currentScript) {\r\n      src = ( /** @type {HTMLScriptElement} */document.currentScript).src;\r\n    } else {\r\n      var scripts = document.getElementsByTagName(\"script\");\r\n      var lastScriptTag = scripts[scripts.length - 1];\r\n      if (lastScriptTag) {\r\n        src = lastScriptTag.src;\r\n      }\r\n    }\r\n    srcByModuleId[moduleId] = src;\r\n  }\r\n\r\n  /**\r\n   * @param {string} fileMap\r\n   * @returns {null | string[]}\r\n   */\r\n  return function (fileMap) {\r\n    if (!src) {\r\n      return null;\r\n    }\r\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\r\n    var filename = splitResult && splitResult[1];\r\n    if (!filename) {\r\n      return [src.replace(\".js\", \".css\")];\r\n    }\r\n    if (!fileMap) {\r\n      return [src.replace(\".js\", \".css\")];\r\n    }\r\n    return fileMap.split(\",\").map(function (mapRule) {\r\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), \"g\");\r\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\r\n    });\r\n  };\r\n}\r\n\r\n/**\r\n * @param {TODO} el\r\n * @param {string} [url]\r\n */\r\nfunction updateCss(el, url) {\r\n  if (!url) {\r\n    if (!el.href) {\r\n      return;\r\n    }\r\n\r\n    // eslint-disable-next-line\r\n    url = el.href.split(\"?\")[0];\r\n  }\r\n  if (!isUrlRequest( /** @type {string} */url)) {\r\n    return;\r\n  }\r\n  if (el.isLoaded === false) {\r\n    // We seem to be about to replace a css link that hasn't loaded yet.\r\n    // We're probably changing the same file more than once.\r\n    return;\r\n  }\r\n  if (!url || !(url.indexOf(\".css\") > -1)) {\r\n    return;\r\n  }\r\n\r\n  // eslint-disable-next-line no-param-reassign\r\n  el.visited = true;\r\n  var newEl = el.cloneNode();\r\n  newEl.isLoaded = false;\r\n  newEl.addEventListener(\"load\", function () {\r\n    if (newEl.isLoaded) {\r\n      return;\r\n    }\r\n    newEl.isLoaded = true;\r\n    el.parentNode.removeChild(el);\r\n  });\r\n  newEl.addEventListener(\"error\", function () {\r\n    if (newEl.isLoaded) {\r\n      return;\r\n    }\r\n    newEl.isLoaded = true;\r\n    el.parentNode.removeChild(el);\r\n  });\r\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\r\n  if (el.nextSibling) {\r\n    el.parentNode.insertBefore(newEl, el.nextSibling);\r\n  } else {\r\n    el.parentNode.appendChild(newEl);\r\n  }\r\n}\r\n\r\n/**\r\n * @param {string} href\r\n * @param {TODO} src\r\n * @returns {TODO}\r\n */\r\nfunction getReloadUrl(href, src) {\r\n  var ret;\r\n\r\n  // eslint-disable-next-line no-param-reassign\r\n  href = normalizeUrl(href);\r\n  src.some(\r\n  /**\r\n   * @param {string} url\r\n   */\r\n  // eslint-disable-next-line array-callback-return\r\n  function (url) {\r\n    if (href.indexOf(src) > -1) {\r\n      ret = url;\r\n    }\r\n  });\r\n  return ret;\r\n}\r\n\r\n/**\r\n * @param {string} [src]\r\n * @returns {boolean}\r\n */\r\nfunction reloadStyle(src) {\r\n  if (!src) {\r\n    return false;\r\n  }\r\n  var elements = document.querySelectorAll(\"link\");\r\n  var loaded = false;\r\n  forEach.call(elements, function (el) {\r\n    if (!el.href) {\r\n      return;\r\n    }\r\n    var url = getReloadUrl(el.href, src);\r\n    if (!isUrlRequest(url)) {\r\n      return;\r\n    }\r\n    if (el.visited === true) {\r\n      return;\r\n    }\r\n    if (url) {\r\n      updateCss(el, url);\r\n      loaded = true;\r\n    }\r\n  });\r\n  return loaded;\r\n}\r\nfunction reloadAll() {\r\n  var elements = document.querySelectorAll(\"link\");\r\n  forEach.call(elements, function (el) {\r\n    if (el.visited === true) {\r\n      return;\r\n    }\r\n    updateCss(el);\r\n  });\r\n}\r\n\r\n/**\r\n * @param {string} url\r\n * @returns {boolean}\r\n */\r\nfunction isUrlRequest(url) {\r\n  // An URL is not an request if\r\n\r\n  // It is not http or https\r\n  if (!/^[a-zA-Z][a-zA-Z\\d+\\-.]*:/.test(url)) {\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\r\n/**\r\n * @param {TODO} moduleId\r\n * @param {TODO} options\r\n * @returns {TODO}\r\n */\r\nmodule.exports = function (moduleId, options) {\r\n  if (noDocument) {\r\n    console.log(\"no window.document found, will not HMR CSS\");\r\n    return noop;\r\n  }\r\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\r\n  function update() {\r\n    var src = getScriptSrc(options.filename);\r\n    var reloaded = reloadStyle(src);\r\n    if (options.locals) {\r\n      console.log(\"[HMR] Detected local css modules. Reload all css\");\r\n      reloadAll();\r\n      return;\r\n    }\r\n    if (reloaded) {\r\n      console.log(\"[HMR] css reload %s\", src.join(\" \"));\r\n    } else {\r\n      console.log(\"[HMR] Reload all css\");\r\n      reloadAll();\r\n    }\r\n  }\r\n  return debounce(update, 50);\r\n};\n\n//# sourceURL=webpack://proyecto_app/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* eslint-disable */\r\n\r\n/**\r\n * @param {string[]} pathComponents\r\n * @returns {string}\r\n */\r\nfunction normalizeUrl(pathComponents) {\r\n  return pathComponents.reduce(function (accumulator, item) {\r\n    switch (item) {\r\n      case \"..\":\r\n        accumulator.pop();\r\n        break;\r\n      case \".\":\r\n        break;\r\n      default:\r\n        accumulator.push(item);\r\n    }\r\n    return accumulator;\r\n  }, /** @type {string[]} */[]).join(\"/\");\r\n}\r\n\r\n/**\r\n * @param {string} urlString\r\n * @returns {string}\r\n */\r\nmodule.exports = function (urlString) {\r\n  urlString = urlString.trim();\r\n  if (/^data:/i.test(urlString)) {\r\n    return urlString;\r\n  }\r\n  var protocol = urlString.indexOf(\"//\") !== -1 ? urlString.split(\"//\")[0] + \"//\" : \"\";\r\n  var components = urlString.replace(new RegExp(protocol, \"i\"), \"\").split(\"/\");\r\n  var host = components[0].toLowerCase().replace(/\\.$/, \"\");\r\n  components[0] = \"\";\r\n  var path = normalizeUrl(components);\r\n  return protocol + host + path;\r\n};\n\n//# sourceURL=webpack://proyecto_app/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ WebSocketClient)\n/* harmony export */ });\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\r\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\r\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\r\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\r\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\r\n\r\nvar WebSocketClient = /*#__PURE__*/function () {\r\n  /**\r\n   * @param {string} url\r\n   */\r\n  function WebSocketClient(url) {\r\n    _classCallCheck(this, WebSocketClient);\r\n    this.client = new WebSocket(url);\r\n    this.client.onerror = function (error) {\r\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);\r\n    };\r\n  }\r\n\r\n  /**\r\n   * @param {(...args: any[]) => void} f\r\n   */\r\n  return _createClass(WebSocketClient, [{\r\n    key: \"onOpen\",\r\n    value: function onOpen(f) {\r\n      this.client.onopen = f;\r\n    }\r\n\r\n    /**\r\n     * @param {(...args: any[]) => void} f\r\n     */\r\n  }, {\r\n    key: \"onClose\",\r\n    value: function onClose(f) {\r\n      this.client.onclose = f;\r\n    }\r\n\r\n    // call f with the message string as the first argument\r\n    /**\r\n     * @param {(...args: any[]) => void} f\r\n     */\r\n  }, {\r\n    key: \"onMessage\",\r\n    value: function onMessage(f) {\r\n      this.client.onmessage = function (e) {\r\n        f(e.data);\r\n      };\r\n    }\r\n  }]);\r\n}();\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/clients/WebSocketClient.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var __resourceQuery = \"?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSocketURL: () => (/* binding */ createSocketURL),\n/* harmony export */   getCurrentScriptSource: () => (/* binding */ getCurrentScriptSource),\n/* harmony export */   parseURL: () => (/* binding */ parseURL)\n/* harmony export */ });\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ \"./node_modules/webpack/hot/log.js\");\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack/hot/emitter.js */ \"./node_modules/webpack/hot/emitter.js\");\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ \"./node_modules/webpack-dev-server/client/socket.js\");\n/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.js */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/sendMessage.js */ \"./node_modules/webpack-dev-server/client/utils/sendMessage.js\");\n/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.js */ \"./node_modules/webpack-dev-server/client/progress.js\");\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\r\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\r\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\r\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\r\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\r\n/* global __resourceQuery, __webpack_hash__ */\r\n/// <reference types=\"webpack/module\" />\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * @typedef {Object} OverlayOptions\r\n * @property {boolean | (error: Error) => boolean} [warnings]\r\n * @property {boolean | (error: Error) => boolean} [errors]\r\n * @property {boolean | (error: Error) => boolean} [runtimeErrors]\r\n * @property {string} [trustedTypesPolicyName]\r\n */\r\n\r\n/**\r\n * @typedef {Object} Options\r\n * @property {boolean} hot\r\n * @property {boolean} liveReload\r\n * @property {boolean} progress\r\n * @property {boolean | OverlayOptions} overlay\r\n * @property {string} [logging]\r\n * @property {number} [reconnect]\r\n */\r\n\r\n/**\r\n * @typedef {Object} Status\r\n * @property {boolean} isUnloading\r\n * @property {string} currentHash\r\n * @property {string} [previousHash]\r\n */\r\n\r\n/**\r\n * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions\r\n */\r\nvar decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {\r\n  if (typeof overlayOptions === \"object\") {\r\n    [\"warnings\", \"errors\", \"runtimeErrors\"].forEach(function (property) {\r\n      if (typeof overlayOptions[property] === \"string\") {\r\n        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);\r\n\r\n        // eslint-disable-next-line no-new-func\r\n        overlayOptions[property] = new Function(\"message\", \"var callback = \".concat(overlayFilterFunctionString, \"\\n        return callback(message)\"));\r\n      }\r\n    });\r\n  }\r\n};\r\n\r\n/**\r\n * @type {Status}\r\n */\r\nvar status = {\r\n  isUnloading: false,\r\n  // eslint-disable-next-line camelcase\r\n  currentHash: __webpack_require__.h()\r\n};\r\n\r\n/**\r\n * @returns {string}\r\n */\r\nvar getCurrentScriptSource = function getCurrentScriptSource() {\r\n  // `document.currentScript` is the most accurate way to find the current script,\r\n  // but is not supported in all browsers.\r\n  if (document.currentScript) {\r\n    return document.currentScript.getAttribute(\"src\");\r\n  }\r\n\r\n  // Fallback to getting all scripts running in the document.\r\n  var scriptElements = document.scripts || [];\r\n  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {\r\n    return element.getAttribute(\"src\");\r\n  });\r\n  if (scriptElementsWithSrc.length > 0) {\r\n    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];\r\n    return currentScript.getAttribute(\"src\");\r\n  }\r\n\r\n  // Fail as there was no script to use.\r\n  throw new Error(\"[webpack-dev-server] Failed to get current script source.\");\r\n};\r\n\r\n/**\r\n * @param {string} resourceQuery\r\n * @returns {{ [key: string]: string | boolean }}\r\n */\r\nvar parseURL = function parseURL(resourceQuery) {\r\n  /** @type {{ [key: string]: string }} */\r\n  var result = {};\r\n  if (typeof resourceQuery === \"string\" && resourceQuery !== \"\") {\r\n    var searchParams = resourceQuery.slice(1).split(\"&\");\r\n    for (var i = 0; i < searchParams.length; i++) {\r\n      var pair = searchParams[i].split(\"=\");\r\n      result[pair[0]] = decodeURIComponent(pair[1]);\r\n    }\r\n  } else {\r\n    // Else, get the url from the <script> this file was called with.\r\n    var scriptSource = getCurrentScriptSource();\r\n    var scriptSourceURL;\r\n    try {\r\n      // The placeholder `baseURL` with `window.location.href`,\r\n      // is to allow parsing of path-relative or protocol-relative URLs,\r\n      // and will have no effect if `scriptSource` is a fully valid URL.\r\n      scriptSourceURL = new URL(scriptSource, self.location.href);\r\n    } catch (error) {\r\n      // URL parsing failed, do nothing.\r\n      // We will still proceed to see if we can recover using `resourceQuery`\r\n    }\r\n    if (scriptSourceURL) {\r\n      result = scriptSourceURL;\r\n      result.fromCurrentScript = true;\r\n    }\r\n  }\r\n  return result;\r\n};\r\nvar parsedResourceQuery = parseURL(__resourceQuery);\r\nvar enabledFeatures = {\r\n  \"Hot Module Replacement\": false,\r\n  \"Live Reloading\": false,\r\n  Progress: false,\r\n  Overlay: false\r\n};\r\n\r\n/** @type {Options} */\r\nvar options = {\r\n  hot: false,\r\n  liveReload: false,\r\n  progress: false,\r\n  overlay: false\r\n};\r\nif (parsedResourceQuery.hot === \"true\") {\r\n  options.hot = true;\r\n  enabledFeatures[\"Hot Module Replacement\"] = true;\r\n}\r\nif (parsedResourceQuery[\"live-reload\"] === \"true\") {\r\n  options.liveReload = true;\r\n  enabledFeatures[\"Live Reloading\"] = true;\r\n}\r\nif (parsedResourceQuery.progress === \"true\") {\r\n  options.progress = true;\r\n  enabledFeatures.Progress = true;\r\n}\r\nif (parsedResourceQuery.overlay) {\r\n  try {\r\n    options.overlay = JSON.parse(parsedResourceQuery.overlay);\r\n  } catch (e) {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(\"Error parsing overlay options from resource query:\", e);\r\n  }\r\n\r\n  // Fill in default \"true\" params for partially-specified objects.\r\n  if (typeof options.overlay === \"object\") {\r\n    options.overlay = _objectSpread({\r\n      errors: true,\r\n      warnings: true,\r\n      runtimeErrors: true\r\n    }, options.overlay);\r\n    decodeOverlayOptions(options.overlay);\r\n  }\r\n  enabledFeatures.Overlay = true;\r\n}\r\nif (parsedResourceQuery.logging) {\r\n  options.logging = parsedResourceQuery.logging;\r\n}\r\nif (typeof parsedResourceQuery.reconnect !== \"undefined\") {\r\n  options.reconnect = Number(parsedResourceQuery.reconnect);\r\n}\r\n\r\n/**\r\n * @param {string} level\r\n */\r\nvar setAllLogLevel = function setAllLogLevel(level) {\r\n  // This is needed because the HMR logger operate separately from dev server logger\r\n  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === \"verbose\" || level === \"log\" ? \"info\" : level);\r\n  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_4__.setLogLevel)(level);\r\n};\r\nif (options.logging) {\r\n  setAllLogLevel(options.logging);\r\n}\r\nvar logEnabledFeatures = function logEnabledFeatures(features) {\r\n  var listEnabledFeatures = Object.keys(features);\r\n  if (!features || listEnabledFeatures.length === 0) {\r\n    return;\r\n  }\r\n  var logString = \"Server started:\";\r\n\r\n  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.\r\n  for (var i = 0; i < listEnabledFeatures.length; i++) {\r\n    var key = listEnabledFeatures[i];\r\n    logString += \" \".concat(key, \" \").concat(features[key] ? \"enabled\" : \"disabled\", \",\");\r\n  }\r\n  // replace last comma with a period\r\n  logString = logString.slice(0, -1).concat(\".\");\r\n  _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(logString);\r\n};\r\nlogEnabledFeatures(enabledFeatures);\r\nself.addEventListener(\"beforeunload\", function () {\r\n  status.isUnloading = true;\r\n});\r\nvar overlay = typeof window !== \"undefined\" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.createOverlay)(typeof options.overlay === \"object\" ? {\r\n  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,\r\n  catchRuntimeError: options.overlay.runtimeErrors\r\n} : {\r\n  trustedTypesPolicyName: false,\r\n  catchRuntimeError: options.overlay\r\n}) : {\r\n  send: function send() {}\r\n};\r\n\r\n/**\r\n * @param {Options} options\r\n * @param {Status} currentStatus\r\n */\r\nvar reloadApp = function reloadApp(_ref, currentStatus) {\r\n  var hot = _ref.hot,\r\n    liveReload = _ref.liveReload;\r\n  if (currentStatus.isUnloading) {\r\n    return;\r\n  }\r\n  var currentHash = currentStatus.currentHash,\r\n    previousHash = currentStatus.previousHash;\r\n  var isInitial = currentHash.indexOf(/** @type {string} */previousHash) >= 0;\r\n  if (isInitial) {\r\n    return;\r\n  }\r\n\r\n  /**\r\n   * @param {Window} rootWindow\r\n   * @param {number} intervalId\r\n   */\r\n  function applyReload(rootWindow, intervalId) {\r\n    clearInterval(intervalId);\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App updated. Reloading...\");\r\n    rootWindow.location.reload();\r\n  }\r\n  var search = self.location.search.toLowerCase();\r\n  var allowToHot = search.indexOf(\"webpack-dev-server-hot=false\") === -1;\r\n  var allowToLiveReload = search.indexOf(\"webpack-dev-server-live-reload=false\") === -1;\r\n  if (hot && allowToHot) {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App hot update...\");\r\n    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default().emit(\"webpackHotUpdate\", currentStatus.currentHash);\r\n    if (typeof self !== \"undefined\" && self.window) {\r\n      // broadcast update to window\r\n      self.postMessage(\"webpackHotUpdate\".concat(currentStatus.currentHash), \"*\");\r\n    }\r\n  }\r\n  // allow refreshing the page only if liveReload isn't disabled\r\n  else if (liveReload && allowToLiveReload) {\r\n    var rootWindow = self;\r\n\r\n    // use parent window for reload (in case we're in an iframe with no valid src)\r\n    var intervalId = self.setInterval(function () {\r\n      if (rootWindow.location.protocol !== \"about:\") {\r\n        // reload immediately if protocol is valid\r\n        applyReload(rootWindow, intervalId);\r\n      } else {\r\n        rootWindow = rootWindow.parent;\r\n        if (rootWindow.parent === rootWindow) {\r\n          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\r\n          applyReload(rootWindow, intervalId);\r\n        }\r\n      }\r\n    });\r\n  }\r\n};\r\nvar ansiRegex = new RegExp([\"[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)\", \"(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-nq-uy=><~]))\"].join(\"|\"), \"g\");\r\n\r\n/**\r\n *\r\n * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.\r\n * Adapted from code originally released by Sindre Sorhus\r\n * Licensed the MIT License\r\n *\r\n * @param {string} string\r\n * @return {string}\r\n */\r\nvar stripAnsi = function stripAnsi(string) {\r\n  if (typeof string !== \"string\") {\r\n    throw new TypeError(\"Expected a `string`, got `\".concat(typeof string, \"`\"));\r\n  }\r\n  return string.replace(ansiRegex, \"\");\r\n};\r\nvar onSocketMessage = {\r\n  hot: function hot() {\r\n    if (parsedResourceQuery.hot === \"false\") {\r\n      return;\r\n    }\r\n    options.hot = true;\r\n  },\r\n  liveReload: function liveReload() {\r\n    if (parsedResourceQuery[\"live-reload\"] === \"false\") {\r\n      return;\r\n    }\r\n    options.liveReload = true;\r\n  },\r\n  invalid: function invalid() {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App updated. Recompiling...\");\r\n\r\n    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\r\n    if (options.overlay) {\r\n      overlay.send({\r\n        type: \"DISMISS\"\r\n      });\r\n    }\r\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Invalid\");\r\n  },\r\n  /**\r\n   * @param {string} hash\r\n   */\r\n  hash: function hash(_hash) {\r\n    status.previousHash = status.currentHash;\r\n    status.currentHash = _hash;\r\n  },\r\n  logging: setAllLogLevel,\r\n  /**\r\n   * @param {boolean} value\r\n   */\r\n  overlay: function overlay(value) {\r\n    if (typeof document === \"undefined\") {\r\n      return;\r\n    }\r\n    options.overlay = value;\r\n    decodeOverlayOptions(options.overlay);\r\n  },\r\n  /**\r\n   * @param {number} value\r\n   */\r\n  reconnect: function reconnect(value) {\r\n    if (parsedResourceQuery.reconnect === \"false\") {\r\n      return;\r\n    }\r\n    options.reconnect = value;\r\n  },\r\n  /**\r\n   * @param {boolean} value\r\n   */\r\n  progress: function progress(value) {\r\n    options.progress = value;\r\n  },\r\n  /**\r\n   * @param {{ pluginName?: string, percent: number, msg: string }} data\r\n   */\r\n  \"progress-update\": function progressUpdate(data) {\r\n    if (options.progress) {\r\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"\".concat(data.pluginName ? \"[\".concat(data.pluginName, \"] \") : \"\").concat(data.percent, \"% - \").concat(data.msg, \".\"));\r\n    }\r\n    if ((0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.isProgressSupported)()) {\r\n      if (typeof options.progress === \"string\") {\r\n        var progress = document.querySelector(\"wds-progress\");\r\n        if (!progress) {\r\n          (0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.defineProgressElement)();\r\n          progress = document.createElement(\"wds-progress\");\r\n          document.body.appendChild(progress);\r\n        }\r\n        progress.setAttribute(\"progress\", data.percent);\r\n        progress.setAttribute(\"type\", options.progress);\r\n      }\r\n    }\r\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Progress\", data);\r\n  },\r\n  \"still-ok\": function stillOk() {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"Nothing changed.\");\r\n    if (options.overlay) {\r\n      overlay.send({\r\n        type: \"DISMISS\"\r\n      });\r\n    }\r\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"StillOk\");\r\n  },\r\n  ok: function ok() {\r\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Ok\");\r\n    if (options.overlay) {\r\n      overlay.send({\r\n        type: \"DISMISS\"\r\n      });\r\n    }\r\n    reloadApp(options, status);\r\n  },\r\n  /**\r\n   * @param {string} file\r\n   */\r\n  \"static-changed\": function staticChanged(file) {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\r\n    self.location.reload();\r\n  },\r\n  /**\r\n   * @param {Error[]} warnings\r\n   * @param {any} params\r\n   */\r\n  warnings: function warnings(_warnings, params) {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn(\"Warnings while compiling.\");\r\n    var printableWarnings = _warnings.map(function (error) {\r\n      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)(\"warning\", error),\r\n        header = _formatProblem.header,\r\n        body = _formatProblem.body;\r\n      return \"\".concat(header, \"\\n\").concat(stripAnsi(body));\r\n    });\r\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Warnings\", printableWarnings);\r\n    for (var i = 0; i < printableWarnings.length; i++) {\r\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn(printableWarnings[i]);\r\n    }\r\n    var overlayWarningsSetting = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.warnings;\r\n    if (overlayWarningsSetting) {\r\n      var warningsToDisplay = typeof overlayWarningsSetting === \"function\" ? _warnings.filter(overlayWarningsSetting) : _warnings;\r\n      if (warningsToDisplay.length) {\r\n        overlay.send({\r\n          type: \"BUILD_ERROR\",\r\n          level: \"warning\",\r\n          messages: _warnings\r\n        });\r\n      }\r\n    }\r\n    if (params && params.preventReloading) {\r\n      return;\r\n    }\r\n    reloadApp(options, status);\r\n  },\r\n  /**\r\n   * @param {Error[]} errors\r\n   */\r\n  errors: function errors(_errors) {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(\"Errors while compiling. Reload prevented.\");\r\n    var printableErrors = _errors.map(function (error) {\r\n      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)(\"error\", error),\r\n        header = _formatProblem2.header,\r\n        body = _formatProblem2.body;\r\n      return \"\".concat(header, \"\\n\").concat(stripAnsi(body));\r\n    });\r\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Errors\", printableErrors);\r\n    for (var i = 0; i < printableErrors.length; i++) {\r\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(printableErrors[i]);\r\n    }\r\n    var overlayErrorsSettings = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.errors;\r\n    if (overlayErrorsSettings) {\r\n      var errorsToDisplay = typeof overlayErrorsSettings === \"function\" ? _errors.filter(overlayErrorsSettings) : _errors;\r\n      if (errorsToDisplay.length) {\r\n        overlay.send({\r\n          type: \"BUILD_ERROR\",\r\n          level: \"error\",\r\n          messages: _errors\r\n        });\r\n      }\r\n    }\r\n  },\r\n  /**\r\n   * @param {Error} error\r\n   */\r\n  error: function error(_error) {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(_error);\r\n  },\r\n  close: function close() {\r\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"Disconnected!\");\r\n    if (options.overlay) {\r\n      overlay.send({\r\n        type: \"DISMISS\"\r\n      });\r\n    }\r\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Close\");\r\n  }\r\n};\r\n\r\n/**\r\n * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL\r\n * @returns {string}\r\n */\r\nvar formatURL = function formatURL(objURL) {\r\n  var protocol = objURL.protocol || \"\";\r\n  if (protocol && protocol.substr(-1) !== \":\") {\r\n    protocol += \":\";\r\n  }\r\n  var auth = objURL.auth || \"\";\r\n  if (auth) {\r\n    auth = encodeURIComponent(auth);\r\n    auth = auth.replace(/%3A/i, \":\");\r\n    auth += \"@\";\r\n  }\r\n  var host = \"\";\r\n  if (objURL.hostname) {\r\n    host = auth + (objURL.hostname.indexOf(\":\") === -1 ? objURL.hostname : \"[\".concat(objURL.hostname, \"]\"));\r\n    if (objURL.port) {\r\n      host += \":\".concat(objURL.port);\r\n    }\r\n  }\r\n  var pathname = objURL.pathname || \"\";\r\n  if (objURL.slashes) {\r\n    host = \"//\".concat(host || \"\");\r\n    if (pathname && pathname.charAt(0) !== \"/\") {\r\n      pathname = \"/\".concat(pathname);\r\n    }\r\n  } else if (!host) {\r\n    host = \"\";\r\n  }\r\n  var search = objURL.search || \"\";\r\n  if (search && search.charAt(0) !== \"?\") {\r\n    search = \"?\".concat(search);\r\n  }\r\n  var hash = objURL.hash || \"\";\r\n  if (hash && hash.charAt(0) !== \"#\") {\r\n    hash = \"#\".concat(hash);\r\n  }\r\n  pathname = pathname.replace(/[?#]/g,\r\n  /**\r\n   * @param {string} match\r\n   * @returns {string}\r\n   */\r\n  function (match) {\r\n    return encodeURIComponent(match);\r\n  });\r\n  search = search.replace(\"#\", \"%23\");\r\n  return \"\".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);\r\n};\r\n\r\n/**\r\n * @param {URL & { fromCurrentScript?: boolean }} parsedURL\r\n * @returns {string}\r\n */\r\nvar createSocketURL = function createSocketURL(parsedURL) {\r\n  var hostname = parsedURL.hostname;\r\n\r\n  // Node.js module parses it as `::`\r\n  // `new URL(urlString, [baseURLString])` parses it as '[::]'\r\n  var isInAddrAny = hostname === \"0.0.0.0\" || hostname === \"::\" || hostname === \"[::]\";\r\n\r\n  // why do we need this check?\r\n  // hostname n/a for file protocol (example, when using electron, ionic)\r\n  // see: https://github.com/webpack/webpack-dev-server/pull/384\r\n  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf(\"http\") === 0) {\r\n    hostname = self.location.hostname;\r\n  }\r\n  var socketURLProtocol = parsedURL.protocol || self.location.protocol;\r\n\r\n  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.\r\n  if (socketURLProtocol === \"auto:\" || hostname && isInAddrAny && self.location.protocol === \"https:\") {\r\n    socketURLProtocol = self.location.protocol;\r\n  }\r\n  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, \"ws\");\r\n  var socketURLAuth = \"\";\r\n\r\n  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property\r\n  // Parse authentication credentials in case we need them\r\n  if (parsedURL.username) {\r\n    socketURLAuth = parsedURL.username;\r\n\r\n    // Since HTTP basic authentication does not allow empty username,\r\n    // we only include password if the username is not empty.\r\n    if (parsedURL.password) {\r\n      // Result: <username>:<password>\r\n      socketURLAuth = socketURLAuth.concat(\":\", parsedURL.password);\r\n    }\r\n  }\r\n\r\n  // In case the host is a raw IPv6 address, it can be enclosed in\r\n  // the brackets as the brackets are needed in the final URL string.\r\n  // Need to remove those as url.format blindly adds its own set of brackets\r\n  // if the host string contains colons. That would lead to non-working\r\n  // double brackets (e.g. [[::]]) host\r\n  //\r\n  // All of these web socket url params are optionally passed in through resourceQuery,\r\n  // so we need to fall back to the default if they are not provided\r\n  var socketURLHostname = (hostname || self.location.hostname || \"localhost\").replace(/^\\[(.*)\\]$/, \"$1\");\r\n  var socketURLPort = parsedURL.port;\r\n  if (!socketURLPort || socketURLPort === \"0\") {\r\n    socketURLPort = self.location.port;\r\n  }\r\n\r\n  // If path is provided it'll be passed in via the resourceQuery as a\r\n  // query param so it has to be parsed out of the querystring in order for the\r\n  // client to open the socket to the correct location.\r\n  var socketURLPathname = \"/ws\";\r\n  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {\r\n    socketURLPathname = parsedURL.pathname;\r\n  }\r\n  return formatURL({\r\n    protocol: socketURLProtocol,\r\n    auth: socketURLAuth,\r\n    hostname: socketURLHostname,\r\n    port: socketURLPort,\r\n    pathname: socketURLPathname,\r\n    slashes: true\r\n  });\r\n};\r\nvar socketURL = createSocketURL(parsedResourceQuery);\r\n(0,_socket_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(socketURL, onSocketMessage, options.reconnect);\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/******/ (function() { // webpackBootstrap\r\n/******/ \t\"use strict\";\r\n/******/ \tvar __webpack_modules__ = ({\r\n\r\n/***/ \"./client-src/modules/logger/tapable.js\":\r\n/*!**********************************************!*\\\r\n  !*** ./client-src/modules/logger/tapable.js ***!\r\n  \\**********************************************/\r\n/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_380__) {\r\n\r\n__nested_webpack_require_380__.r(__nested_webpack_exports__);\r\n/* harmony export */ __nested_webpack_require_380__.d(__nested_webpack_exports__, {\r\n/* harmony export */   SyncBailHook: function() { return /* binding */ SyncBailHook; }\r\n/* harmony export */ });\r\nfunction SyncBailHook() {\r\n  return {\r\n    call: function call() {}\r\n  };\r\n}\r\n\r\n/**\r\n * Client stub for tapable SyncBailHook\r\n */\r\n// eslint-disable-next-line import/prefer-default-export\r\n\r\n\r\n/***/ }),\r\n\r\n/***/ \"./node_modules/webpack/lib/logging/Logger.js\":\r\n/*!****************************************************!*\\\r\n  !*** ./node_modules/webpack/lib/logging/Logger.js ***!\r\n  \\****************************************************/\r\n/***/ (function(module) {\r\n\r\n/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n\r\n\r\n\r\nfunction _toConsumableArray(r) {\r\n  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();\r\n}\r\nfunction _nonIterableSpread() {\r\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\r\n}\r\nfunction _unsupportedIterableToArray(r, a) {\r\n  if (r) {\r\n    if (\"string\" == typeof r) return _arrayLikeToArray(r, a);\r\n    var t = {}.toString.call(r).slice(8, -1);\r\n    return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;\r\n  }\r\n}\r\nfunction _iterableToArray(r) {\r\n  if (\"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).iterator] || null != r[\"@@iterator\"]) return Array.from(r);\r\n}\r\nfunction _arrayWithoutHoles(r) {\r\n  if (Array.isArray(r)) return _arrayLikeToArray(r);\r\n}\r\nfunction _arrayLikeToArray(r, a) {\r\n  (null == a || a > r.length) && (a = r.length);\r\n  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\r\n  return n;\r\n}\r\nfunction _classCallCheck(a, n) {\r\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\r\n}\r\nfunction _defineProperties(e, r) {\r\n  for (var t = 0; t < r.length; t++) {\r\n    var o = r[t];\r\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);\r\n  }\r\n}\r\nfunction _createClass(e, r, t) {\r\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\r\n    writable: !1\r\n  }), e;\r\n}\r\nfunction _toPropertyKey(t) {\r\n  var i = _toPrimitive(t, \"string\");\r\n  return \"symbol\" == typeof i ? i : i + \"\";\r\n}\r\nfunction _toPrimitive(t, r) {\r\n  if (\"object\" != typeof t || !t) return t;\r\n  var e = t[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).toPrimitive];\r\n  if (void 0 !== e) {\r\n    var i = e.call(t, r || \"default\");\r\n    if (\"object\" != typeof i) return i;\r\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\r\n  }\r\n  return (\"string\" === r ? String : Number)(t);\r\n}\r\nvar LogType = Object.freeze({\r\n  error: (/** @type {\"error\"} */\"error\"),\r\n  // message, c style arguments\r\n  warn: (/** @type {\"warn\"} */\"warn\"),\r\n  // message, c style arguments\r\n  info: (/** @type {\"info\"} */\"info\"),\r\n  // message, c style arguments\r\n  log: (/** @type {\"log\"} */\"log\"),\r\n  // message, c style arguments\r\n  debug: (/** @type {\"debug\"} */\"debug\"),\r\n  // message, c style arguments\r\n\r\n  trace: (/** @type {\"trace\"} */\"trace\"),\r\n  // no arguments\r\n\r\n  group: (/** @type {\"group\"} */\"group\"),\r\n  // [label]\r\n  groupCollapsed: (/** @type {\"groupCollapsed\"} */\"groupCollapsed\"),\r\n  // [label]\r\n  groupEnd: (/** @type {\"groupEnd\"} */\"groupEnd\"),\r\n  // [label]\r\n\r\n  profile: (/** @type {\"profile\"} */\"profile\"),\r\n  // [profileName]\r\n  profileEnd: (/** @type {\"profileEnd\"} */\"profileEnd\"),\r\n  // [profileName]\r\n\r\n  time: (/** @type {\"time\"} */\"time\"),\r\n  // name, time as [seconds, nanoseconds]\r\n\r\n  clear: (/** @type {\"clear\"} */\"clear\"),\r\n  // no arguments\r\n  status: (/** @type {\"status\"} */\"status\") // message, arguments\r\n});\r\nmodule.exports.LogType = LogType;\r\n\r\n/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */\r\n\r\nvar LOG_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; })(\"webpack logger raw log method\");\r\nvar TIMERS_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; })(\"webpack logger times\");\r\nvar TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; })(\"webpack logger aggregated times\");\r\nvar WebpackLogger = /*#__PURE__*/function () {\r\n  /**\r\n   * @param {function(LogTypeEnum, EXPECTED_ANY[]=): void} log log function\r\n   * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger\r\n   */\r\n  function WebpackLogger(log, getChildLogger) {\r\n    _classCallCheck(this, WebpackLogger);\r\n    this[LOG_SYMBOL] = log;\r\n    this.getChildLogger = getChildLogger;\r\n  }\r\n\r\n  /**\r\n   * @param {...EXPECTED_ANY} args args\r\n   */\r\n  return _createClass(WebpackLogger, [{\r\n    key: \"error\",\r\n    value: function error() {\r\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\r\n        args[_key] = arguments[_key];\r\n      }\r\n      this[LOG_SYMBOL](LogType.error, args);\r\n    }\r\n\r\n    /**\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"warn\",\r\n    value: function warn() {\r\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\r\n        args[_key2] = arguments[_key2];\r\n      }\r\n      this[LOG_SYMBOL](LogType.warn, args);\r\n    }\r\n\r\n    /**\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"info\",\r\n    value: function info() {\r\n      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\r\n        args[_key3] = arguments[_key3];\r\n      }\r\n      this[LOG_SYMBOL](LogType.info, args);\r\n    }\r\n\r\n    /**\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"log\",\r\n    value: function log() {\r\n      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\r\n        args[_key4] = arguments[_key4];\r\n      }\r\n      this[LOG_SYMBOL](LogType.log, args);\r\n    }\r\n\r\n    /**\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"debug\",\r\n    value: function debug() {\r\n      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\r\n        args[_key5] = arguments[_key5];\r\n      }\r\n      this[LOG_SYMBOL](LogType.debug, args);\r\n    }\r\n\r\n    /**\r\n     * @param {EXPECTED_ANY} assertion assertion\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"assert\",\r\n    value: function assert(assertion) {\r\n      if (!assertion) {\r\n        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {\r\n          args[_key6 - 1] = arguments[_key6];\r\n        }\r\n        this[LOG_SYMBOL](LogType.error, args);\r\n      }\r\n    }\r\n  }, {\r\n    key: \"trace\",\r\n    value: function trace() {\r\n      this[LOG_SYMBOL](LogType.trace, [\"Trace\"]);\r\n    }\r\n  }, {\r\n    key: \"clear\",\r\n    value: function clear() {\r\n      this[LOG_SYMBOL](LogType.clear);\r\n    }\r\n\r\n    /**\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"status\",\r\n    value: function status() {\r\n      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\r\n        args[_key7] = arguments[_key7];\r\n      }\r\n      this[LOG_SYMBOL](LogType.status, args);\r\n    }\r\n\r\n    /**\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"group\",\r\n    value: function group() {\r\n      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {\r\n        args[_key8] = arguments[_key8];\r\n      }\r\n      this[LOG_SYMBOL](LogType.group, args);\r\n    }\r\n\r\n    /**\r\n     * @param {...EXPECTED_ANY} args args\r\n     */\r\n  }, {\r\n    key: \"groupCollapsed\",\r\n    value: function groupCollapsed() {\r\n      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {\r\n        args[_key9] = arguments[_key9];\r\n      }\r\n      this[LOG_SYMBOL](LogType.groupCollapsed, args);\r\n    }\r\n  }, {\r\n    key: \"groupEnd\",\r\n    value: function groupEnd() {\r\n      this[LOG_SYMBOL](LogType.groupEnd);\r\n    }\r\n\r\n    /**\r\n     * @param {string=} label label\r\n     */\r\n  }, {\r\n    key: \"profile\",\r\n    value: function profile(label) {\r\n      this[LOG_SYMBOL](LogType.profile, [label]);\r\n    }\r\n\r\n    /**\r\n     * @param {string=} label label\r\n     */\r\n  }, {\r\n    key: \"profileEnd\",\r\n    value: function profileEnd(label) {\r\n      this[LOG_SYMBOL](LogType.profileEnd, [label]);\r\n    }\r\n\r\n    /**\r\n     * @param {string} label label\r\n     */\r\n  }, {\r\n    key: \"time\",\r\n    value: function time(label) {\r\n      /** @type {Map<string | undefined, [number, number]>} */\r\n      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();\r\n      this[TIMERS_SYMBOL].set(label, process.hrtime());\r\n    }\r\n\r\n    /**\r\n     * @param {string=} label label\r\n     */\r\n  }, {\r\n    key: \"timeLog\",\r\n    value: function timeLog(label) {\r\n      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\r\n      if (!prev) {\r\n        throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeLog()\"));\r\n      }\r\n      var time = process.hrtime(prev);\r\n      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\r\n    }\r\n\r\n    /**\r\n     * @param {string=} label label\r\n     */\r\n  }, {\r\n    key: \"timeEnd\",\r\n    value: function timeEnd(label) {\r\n      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\r\n      if (!prev) {\r\n        throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeEnd()\"));\r\n      }\r\n      var time = process.hrtime(prev);\r\n      /** @type {Map<string | undefined, [number, number]>} */\r\n      this[TIMERS_SYMBOL].delete(label);\r\n      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\r\n    }\r\n\r\n    /**\r\n     * @param {string=} label label\r\n     */\r\n  }, {\r\n    key: \"timeAggregate\",\r\n    value: function timeAggregate(label) {\r\n      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\r\n      if (!prev) {\r\n        throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeAggregate()\"));\r\n      }\r\n      var time = process.hrtime(prev);\r\n      /** @type {Map<string | undefined, [number, number]>} */\r\n      this[TIMERS_SYMBOL].delete(label);\r\n      /** @type {Map<string | undefined, [number, number]>} */\r\n      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();\r\n      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);\r\n      if (current !== undefined) {\r\n        if (time[1] + current[1] > 1e9) {\r\n          time[0] += current[0] + 1;\r\n          time[1] = time[1] - 1e9 + current[1];\r\n        } else {\r\n          time[0] += current[0];\r\n          time[1] += current[1];\r\n        }\r\n      }\r\n      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);\r\n    }\r\n\r\n    /**\r\n     * @param {string=} label label\r\n     */\r\n  }, {\r\n    key: \"timeAggregateEnd\",\r\n    value: function timeAggregateEnd(label) {\r\n      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;\r\n      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);\r\n      if (time === undefined) return;\r\n      this[TIMERS_AGGREGATES_SYMBOL].delete(label);\r\n      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\r\n    }\r\n  }]);\r\n}();\r\nmodule.exports.Logger = WebpackLogger;\r\n\r\n/***/ }),\r\n\r\n/***/ \"./node_modules/webpack/lib/logging/createConsoleLogger.js\":\r\n/*!*****************************************************************!*\\\r\n  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!\r\n  \\*****************************************************************/\r\n/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_12524__) {\r\n\r\n/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n\r\n\r\n\r\nfunction _slicedToArray(r, e) {\r\n  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();\r\n}\r\nfunction _nonIterableRest() {\r\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\r\n}\r\nfunction _iterableToArrayLimit(r, l) {\r\n  var t = null == r ? null : \"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }) && r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).iterator] || r[\"@@iterator\"];\r\n  if (null != t) {\r\n    var e,\r\n      n,\r\n      i,\r\n      u,\r\n      a = [],\r\n      f = !0,\r\n      o = !1;\r\n    try {\r\n      if (i = (t = t.call(r)).next, 0 === l) {\r\n        if (Object(t) !== t) return;\r\n        f = !1;\r\n      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\r\n    } catch (r) {\r\n      o = !0, n = r;\r\n    } finally {\r\n      try {\r\n        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;\r\n      } finally {\r\n        if (o) throw n;\r\n      }\r\n    }\r\n    return a;\r\n  }\r\n}\r\nfunction _arrayWithHoles(r) {\r\n  if (Array.isArray(r)) return r;\r\n}\r\nfunction _toConsumableArray(r) {\r\n  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();\r\n}\r\nfunction _nonIterableSpread() {\r\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\r\n}\r\nfunction _unsupportedIterableToArray(r, a) {\r\n  if (r) {\r\n    if (\"string\" == typeof r) return _arrayLikeToArray(r, a);\r\n    var t = {}.toString.call(r).slice(8, -1);\r\n    return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;\r\n  }\r\n}\r\nfunction _iterableToArray(r) {\r\n  if (\"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).iterator] || null != r[\"@@iterator\"]) return Array.from(r);\r\n}\r\nfunction _arrayWithoutHoles(r) {\r\n  if (Array.isArray(r)) return _arrayLikeToArray(r);\r\n}\r\nfunction _arrayLikeToArray(r, a) {\r\n  (null == a || a > r.length) && (a = r.length);\r\n  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\r\n  return n;\r\n}\r\nvar _require = __nested_webpack_require_12524__(/*! ./Logger */ \"./node_modules/webpack/lib/logging/Logger.js\"),\r\n  LogType = _require.LogType;\r\n\r\n/** @typedef {import(\"../../declarations/WebpackOptions\").FilterItemTypes} FilterItemTypes */\r\n/** @typedef {import(\"../../declarations/WebpackOptions\").FilterTypes} FilterTypes */\r\n/** @typedef {import(\"./Logger\").LogTypeEnum} LogTypeEnum */\r\n\r\n/** @typedef {function(string): boolean} FilterFunction */\r\n/** @typedef {function(string, LogTypeEnum, EXPECTED_ANY[]=): void} LoggingFunction */\r\n\r\n/**\r\n * @typedef {object} LoggerConsole\r\n * @property {function(): void} clear\r\n * @property {function(): void} trace\r\n * @property {(...args: EXPECTED_ANY[]) => void} info\r\n * @property {(...args: EXPECTED_ANY[]) => void} log\r\n * @property {(...args: EXPECTED_ANY[]) => void} warn\r\n * @property {(...args: EXPECTED_ANY[]) => void} error\r\n * @property {(...args: EXPECTED_ANY[]) => void=} debug\r\n * @property {(...args: EXPECTED_ANY[]) => void=} group\r\n * @property {(...args: EXPECTED_ANY[]) => void=} groupCollapsed\r\n * @property {(...args: EXPECTED_ANY[]) => void=} groupEnd\r\n * @property {(...args: EXPECTED_ANY[]) => void=} status\r\n * @property {(...args: EXPECTED_ANY[]) => void=} profile\r\n * @property {(...args: EXPECTED_ANY[]) => void=} profileEnd\r\n * @property {(...args: EXPECTED_ANY[]) => void=} logTime\r\n */\r\n\r\n/**\r\n * @typedef {object} LoggerOptions\r\n * @property {false|true|\"none\"|\"error\"|\"warn\"|\"info\"|\"log\"|\"verbose\"} level loglevel\r\n * @property {FilterTypes|boolean} debug filter for debug logging\r\n * @property {LoggerConsole} console the console to log to\r\n */\r\n\r\n/**\r\n * @param {FilterItemTypes} item an input item\r\n * @returns {FilterFunction | undefined} filter function\r\n */\r\nvar filterToFunction = function filterToFunction(item) {\r\n  if (typeof item === \"string\") {\r\n    var regExp = new RegExp(\"[\\\\\\\\/]\".concat(item.replace(/[-[\\]{}()*+?.\\\\^$|]/g, \"\\\\$&\"), \"([\\\\\\\\/]|$|!|\\\\?)\"));\r\n    return function (ident) {\r\n      return regExp.test(ident);\r\n    };\r\n  }\r\n  if (item && typeof item === \"object\" && typeof item.test === \"function\") {\r\n    return function (ident) {\r\n      return item.test(ident);\r\n    };\r\n  }\r\n  if (typeof item === \"function\") {\r\n    return item;\r\n  }\r\n  if (typeof item === \"boolean\") {\r\n    return function () {\r\n      return item;\r\n    };\r\n  }\r\n};\r\n\r\n/**\r\n * @enum {number}\r\n */\r\nvar LogLevel = {\r\n  none: 6,\r\n  false: 6,\r\n  error: 5,\r\n  warn: 4,\r\n  info: 3,\r\n  log: 2,\r\n  true: 2,\r\n  verbose: 1\r\n};\r\n\r\n/**\r\n * @param {LoggerOptions} options options object\r\n * @returns {LoggingFunction} logging function\r\n */\r\nmodule.exports = function (_ref) {\r\n  var _ref$level = _ref.level,\r\n    level = _ref$level === void 0 ? \"info\" : _ref$level,\r\n    _ref$debug = _ref.debug,\r\n    debug = _ref$debug === void 0 ? false : _ref$debug,\r\n    console = _ref.console;\r\n  var debugFilters = /** @type {FilterFunction[]} */\r\n\r\n  typeof debug === \"boolean\" ? [function () {\r\n    return debug;\r\n  }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);\r\n  /** @type {number} */\r\n  var loglevel = LogLevel[\"\".concat(level)] || 0;\r\n\r\n  /**\r\n   * @param {string} name name of the logger\r\n   * @param {LogTypeEnum} type type of the log entry\r\n   * @param {EXPECTED_ANY[]=} args arguments of the log entry\r\n   * @returns {void}\r\n   */\r\n  var logger = function logger(name, type, args) {\r\n    var labeledArgs = function labeledArgs() {\r\n      if (Array.isArray(args)) {\r\n        if (args.length > 0 && typeof args[0] === \"string\") {\r\n          return [\"[\".concat(name, \"] \").concat(args[0])].concat(_toConsumableArray(args.slice(1)));\r\n        }\r\n        return [\"[\".concat(name, \"]\")].concat(_toConsumableArray(args));\r\n      }\r\n      return [];\r\n    };\r\n    var debug = debugFilters.some(function (f) {\r\n      return f(name);\r\n    });\r\n    switch (type) {\r\n      case LogType.debug:\r\n        if (!debug) return;\r\n        if (typeof console.debug === \"function\") {\r\n          console.debug.apply(console, _toConsumableArray(labeledArgs()));\r\n        } else {\r\n          console.log.apply(console, _toConsumableArray(labeledArgs()));\r\n        }\r\n        break;\r\n      case LogType.log:\r\n        if (!debug && loglevel > LogLevel.log) return;\r\n        console.log.apply(console, _toConsumableArray(labeledArgs()));\r\n        break;\r\n      case LogType.info:\r\n        if (!debug && loglevel > LogLevel.info) return;\r\n        console.info.apply(console, _toConsumableArray(labeledArgs()));\r\n        break;\r\n      case LogType.warn:\r\n        if (!debug && loglevel > LogLevel.warn) return;\r\n        console.warn.apply(console, _toConsumableArray(labeledArgs()));\r\n        break;\r\n      case LogType.error:\r\n        if (!debug && loglevel > LogLevel.error) return;\r\n        console.error.apply(console, _toConsumableArray(labeledArgs()));\r\n        break;\r\n      case LogType.trace:\r\n        if (!debug) return;\r\n        console.trace();\r\n        break;\r\n      case LogType.groupCollapsed:\r\n        if (!debug && loglevel > LogLevel.log) return;\r\n        if (!debug && loglevel > LogLevel.verbose) {\r\n          if (typeof console.groupCollapsed === \"function\") {\r\n            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));\r\n          } else {\r\n            console.log.apply(console, _toConsumableArray(labeledArgs()));\r\n          }\r\n          break;\r\n        }\r\n      // falls through\r\n      case LogType.group:\r\n        if (!debug && loglevel > LogLevel.log) return;\r\n        if (typeof console.group === \"function\") {\r\n          console.group.apply(console, _toConsumableArray(labeledArgs()));\r\n        } else {\r\n          console.log.apply(console, _toConsumableArray(labeledArgs()));\r\n        }\r\n        break;\r\n      case LogType.groupEnd:\r\n        if (!debug && loglevel > LogLevel.log) return;\r\n        if (typeof console.groupEnd === \"function\") {\r\n          console.groupEnd();\r\n        }\r\n        break;\r\n      case LogType.time:\r\n        {\r\n          if (!debug && loglevel > LogLevel.log) return;\r\n          var _args = _slicedToArray(/** @type {[string, number, number]} */\r\n            args, 3),\r\n            label = _args[0],\r\n            start = _args[1],\r\n            end = _args[2];\r\n          var ms = start * 1000 + end / 1000000;\r\n          var msg = \"[\".concat(name, \"] \").concat(label, \": \").concat(ms, \" ms\");\r\n          if (typeof console.logTime === \"function\") {\r\n            console.logTime(msg);\r\n          } else {\r\n            console.log(msg);\r\n          }\r\n          break;\r\n        }\r\n      case LogType.profile:\r\n        if (typeof console.profile === \"function\") {\r\n          console.profile.apply(console, _toConsumableArray(labeledArgs()));\r\n        }\r\n        break;\r\n      case LogType.profileEnd:\r\n        if (typeof console.profileEnd === \"function\") {\r\n          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));\r\n        }\r\n        break;\r\n      case LogType.clear:\r\n        if (!debug && loglevel > LogLevel.log) return;\r\n        if (typeof console.clear === \"function\") {\r\n          console.clear();\r\n        }\r\n        break;\r\n      case LogType.status:\r\n        if (!debug && loglevel > LogLevel.info) return;\r\n        if (typeof console.status === \"function\") {\r\n          if (!args || args.length === 0) {\r\n            console.status();\r\n          } else {\r\n            console.status.apply(console, _toConsumableArray(labeledArgs()));\r\n          }\r\n        } else if (args && args.length !== 0) {\r\n          console.info.apply(console, _toConsumableArray(labeledArgs()));\r\n        }\r\n        break;\r\n      default:\r\n        throw new Error(\"Unexpected LogType \".concat(type));\r\n    }\r\n  };\r\n  return logger;\r\n};\r\n\r\n/***/ }),\r\n\r\n/***/ \"./node_modules/webpack/lib/logging/runtime.js\":\r\n/*!*****************************************************!*\\\r\n  !*** ./node_modules/webpack/lib/logging/runtime.js ***!\r\n  \\*****************************************************/\r\n/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_23162__) {\r\n\r\n/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n\r\n\r\n\r\nfunction _extends() {\r\n  return _extends = Object.assign ? Object.assign.bind() : function (n) {\r\n    for (var e = 1; e < arguments.length; e++) {\r\n      var t = arguments[e];\r\n      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);\r\n    }\r\n    return n;\r\n  }, _extends.apply(null, arguments);\r\n}\r\nvar _require = __nested_webpack_require_23162__(/*! tapable */ \"./client-src/modules/logger/tapable.js\"),\r\n  SyncBailHook = _require.SyncBailHook;\r\nvar _require2 = __nested_webpack_require_23162__(/*! ./Logger */ \"./node_modules/webpack/lib/logging/Logger.js\"),\r\n  Logger = _require2.Logger;\r\nvar createConsoleLogger = __nested_webpack_require_23162__(/*! ./createConsoleLogger */ \"./node_modules/webpack/lib/logging/createConsoleLogger.js\");\r\n\r\n/** @type {createConsoleLogger.LoggerOptions} */\r\nvar currentDefaultLoggerOptions = {\r\n  level: \"info\",\r\n  debug: false,\r\n  console: console\r\n};\r\nvar currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\r\n\r\n/**\r\n * @param {string} name name of the logger\r\n * @returns {Logger} a logger\r\n */\r\nmodule.exports.getLogger = function (name) {\r\n  return new Logger(function (type, args) {\r\n    if (module.exports.hooks.log.call(name, type, args) === undefined) {\r\n      currentDefaultLogger(name, type, args);\r\n    }\r\n  }, function (childName) {\r\n    return module.exports.getLogger(\"\".concat(name, \"/\").concat(childName));\r\n  });\r\n};\r\n\r\n/**\r\n * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options\r\n * @returns {void}\r\n */\r\nmodule.exports.configureDefaultLogger = function (options) {\r\n  _extends(currentDefaultLoggerOptions, options);\r\n  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\r\n};\r\nmodule.exports.hooks = {\r\n  log: new SyncBailHook([\"origin\", \"type\", \"args\"])\r\n};\r\n\r\n/***/ })\r\n\r\n/******/ \t});\r\n/************************************************************************/\r\n/******/ \t// The module cache\r\n/******/ \tvar __webpack_module_cache__ = {};\r\n/******/ \t\r\n/******/ \t// The require function\r\n/******/ \tfunction __nested_webpack_require_25305__(moduleId) {\r\n/******/ \t\t// Check if module is in cache\r\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\r\n/******/ \t\tif (cachedModule !== undefined) {\r\n/******/ \t\t\treturn cachedModule.exports;\r\n/******/ \t\t}\r\n/******/ \t\t// Create a new module (and put it into the cache)\r\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\r\n/******/ \t\t\t// no module.id needed\r\n/******/ \t\t\t// no module.loaded needed\r\n/******/ \t\t\texports: {}\r\n/******/ \t\t};\r\n/******/ \t\r\n/******/ \t\t// Execute the module function\r\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_25305__);\r\n/******/ \t\r\n/******/ \t\t// Return the exports of the module\r\n/******/ \t\treturn module.exports;\r\n/******/ \t}\r\n/******/ \t\r\n/************************************************************************/\r\n/******/ \t/* webpack/runtime/define property getters */\r\n/******/ \t!function() {\r\n/******/ \t\t// define getter functions for harmony exports\r\n/******/ \t\t__nested_webpack_require_25305__.d = function(exports, definition) {\r\n/******/ \t\t\tfor(var key in definition) {\r\n/******/ \t\t\t\tif(__nested_webpack_require_25305__.o(definition, key) && !__nested_webpack_require_25305__.o(exports, key)) {\r\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\r\n/******/ \t\t\t\t}\r\n/******/ \t\t\t}\r\n/******/ \t\t};\r\n/******/ \t}();\r\n/******/ \t\r\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\r\n/******/ \t!function() {\r\n/******/ \t\t__nested_webpack_require_25305__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }\r\n/******/ \t}();\r\n/******/ \t\r\n/******/ \t/* webpack/runtime/make namespace object */\r\n/******/ \t!function() {\r\n/******/ \t\t// define __esModule on exports\r\n/******/ \t\t__nested_webpack_require_25305__.r = function(exports) {\r\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\r\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\r\n/******/ \t\t\t}\r\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\r\n/******/ \t\t};\r\n/******/ \t}();\r\n/******/ \t\r\n/************************************************************************/\r\nvar __nested_webpack_exports__ = {};\r\n// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.\r\n!function() {\r\n/*!********************************************!*\\\r\n  !*** ./client-src/modules/logger/index.js ***!\r\n  \\********************************************/\r\n__nested_webpack_require_25305__.r(__nested_webpack_exports__);\r\n/* harmony export */ __nested_webpack_require_25305__.d(__nested_webpack_exports__, {\r\n/* harmony export */   \"default\": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }\r\n/* harmony export */ });\r\n/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25305__(/*! webpack/lib/logging/runtime.js */ \"./node_modules/webpack/lib/logging/runtime.js\");\r\n\r\n}();\r\nvar __webpack_export_target__ = exports;\r\nfor(var __webpack_i__ in __nested_webpack_exports__) __webpack_export_target__[__webpack_i__] = __nested_webpack_exports__[__webpack_i__];\r\nif(__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, \"__esModule\", { value: true });\r\n/******/ })()\r\n;\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/modules/logger/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createOverlay: () => (/* binding */ createOverlay),\n/* harmony export */   formatProblem: () => (/* binding */ formatProblem)\n/* harmony export */ });\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ \"./node_modules/ansi-html-community/index.js\");\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\r\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\r\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\r\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\r\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\r\n// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\r\n// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\r\n\r\n\r\n\r\n/**\r\n * @type {(input: string, position: number) => string}\r\n */\r\nvar getCodePoint = String.prototype.codePointAt ? function (input, position) {\r\n  return input.codePointAt(position);\r\n} : function (input, position) {\r\n  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;\r\n};\r\n\r\n/**\r\n * @param {string} macroText\r\n * @param {RegExp} macroRegExp\r\n * @param {(input: string) => string} macroReplacer\r\n * @returns {string}\r\n */\r\nvar replaceUsingRegExp = function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {\r\n  macroRegExp.lastIndex = 0;\r\n  var replaceMatch = macroRegExp.exec(macroText);\r\n  var replaceResult;\r\n  if (replaceMatch) {\r\n    replaceResult = \"\";\r\n    var replaceLastIndex = 0;\r\n    do {\r\n      if (replaceLastIndex !== replaceMatch.index) {\r\n        replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);\r\n      }\r\n      var replaceInput = replaceMatch[0];\r\n      replaceResult += macroReplacer(replaceInput);\r\n      replaceLastIndex = replaceMatch.index + replaceInput.length;\r\n      // eslint-disable-next-line no-cond-assign\r\n    } while (replaceMatch = macroRegExp.exec(macroText));\r\n    if (replaceLastIndex !== macroText.length) {\r\n      replaceResult += macroText.substring(replaceLastIndex);\r\n    }\r\n  } else {\r\n    replaceResult = macroText;\r\n  }\r\n  return replaceResult;\r\n};\r\nvar references = {\r\n  \"<\": \"&lt;\",\r\n  \">\": \"&gt;\",\r\n  '\"': \"&quot;\",\r\n  \"'\": \"&apos;\",\r\n  \"&\": \"&amp;\"\r\n};\r\n\r\n/**\r\n * @param {string} text text\r\n * @returns {string}\r\n */\r\nfunction encode(text) {\r\n  if (!text) {\r\n    return \"\";\r\n  }\r\n  return replaceUsingRegExp(text, /[<>'\"&]/g, function (input) {\r\n    var result = references[input];\r\n    if (!result) {\r\n      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);\r\n      result = \"&#\".concat(code, \";\");\r\n    }\r\n    return result;\r\n  });\r\n}\r\n\r\n/**\r\n * @typedef {Object} StateDefinitions\r\n * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]\r\n */\r\n\r\n/**\r\n * @typedef {Object} Options\r\n * @property {{[state: string]: StateDefinitions}} states\r\n * @property {object} context;\r\n * @property {string} initial\r\n */\r\n\r\n/**\r\n * @typedef {Object} Implementation\r\n * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions\r\n */\r\n\r\n/**\r\n * A simplified `createMachine` from `@xstate/fsm` with the following differences:\r\n *\r\n *  - the returned machine is technically a \"service\". No `interpret(machine).start()` is needed.\r\n *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.\r\n *  - event passed to `send` must be an object with `type` property.\r\n *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.\r\n *  Do not return anything if you just want to invoke side effect.\r\n *\r\n * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using\r\n * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.\r\n *\r\n * @param {Options} options\r\n * @param {Implementation} implementation\r\n */\r\nfunction createMachine(_ref, _ref2) {\r\n  var states = _ref.states,\r\n    context = _ref.context,\r\n    initial = _ref.initial;\r\n  var actions = _ref2.actions;\r\n  var currentState = initial;\r\n  var currentContext = context;\r\n  return {\r\n    send: function send(event) {\r\n      var currentStateOn = states[currentState].on;\r\n      var transitionConfig = currentStateOn && currentStateOn[event.type];\r\n      if (transitionConfig) {\r\n        currentState = transitionConfig.target;\r\n        if (transitionConfig.actions) {\r\n          transitionConfig.actions.forEach(function (actName) {\r\n            var actionImpl = actions[actName];\r\n            var nextContextValue = actionImpl && actionImpl(currentContext, event);\r\n            if (nextContextValue) {\r\n              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);\r\n            }\r\n          });\r\n        }\r\n      }\r\n    }\r\n  };\r\n}\r\n\r\n/**\r\n * @typedef {Object} ShowOverlayData\r\n * @property {'warning' | 'error'} level\r\n * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\r\n * @property {'build' | 'runtime'} messageSource\r\n */\r\n\r\n/**\r\n * @typedef {Object} CreateOverlayMachineOptions\r\n * @property {(data: ShowOverlayData) => void} showOverlay\r\n * @property {() => void} hideOverlay\r\n */\r\n\r\n/**\r\n * @param {CreateOverlayMachineOptions} options\r\n */\r\nvar createOverlayMachine = function createOverlayMachine(options) {\r\n  var hideOverlay = options.hideOverlay,\r\n    showOverlay = options.showOverlay;\r\n  return createMachine({\r\n    initial: \"hidden\",\r\n    context: {\r\n      level: \"error\",\r\n      messages: [],\r\n      messageSource: \"build\"\r\n    },\r\n    states: {\r\n      hidden: {\r\n        on: {\r\n          BUILD_ERROR: {\r\n            target: \"displayBuildError\",\r\n            actions: [\"setMessages\", \"showOverlay\"]\r\n          },\r\n          RUNTIME_ERROR: {\r\n            target: \"displayRuntimeError\",\r\n            actions: [\"setMessages\", \"showOverlay\"]\r\n          }\r\n        }\r\n      },\r\n      displayBuildError: {\r\n        on: {\r\n          DISMISS: {\r\n            target: \"hidden\",\r\n            actions: [\"dismissMessages\", \"hideOverlay\"]\r\n          },\r\n          BUILD_ERROR: {\r\n            target: \"displayBuildError\",\r\n            actions: [\"appendMessages\", \"showOverlay\"]\r\n          }\r\n        }\r\n      },\r\n      displayRuntimeError: {\r\n        on: {\r\n          DISMISS: {\r\n            target: \"hidden\",\r\n            actions: [\"dismissMessages\", \"hideOverlay\"]\r\n          },\r\n          RUNTIME_ERROR: {\r\n            target: \"displayRuntimeError\",\r\n            actions: [\"appendMessages\", \"showOverlay\"]\r\n          },\r\n          BUILD_ERROR: {\r\n            target: \"displayBuildError\",\r\n            actions: [\"setMessages\", \"showOverlay\"]\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }, {\r\n    actions: {\r\n      dismissMessages: function dismissMessages() {\r\n        return {\r\n          messages: [],\r\n          level: \"error\",\r\n          messageSource: \"build\"\r\n        };\r\n      },\r\n      appendMessages: function appendMessages(context, event) {\r\n        return {\r\n          messages: context.messages.concat(event.messages),\r\n          level: event.level || context.level,\r\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\r\n        };\r\n      },\r\n      setMessages: function setMessages(context, event) {\r\n        return {\r\n          messages: event.messages,\r\n          level: event.level || context.level,\r\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\r\n        };\r\n      },\r\n      hideOverlay: hideOverlay,\r\n      showOverlay: showOverlay\r\n    }\r\n  });\r\n};\r\n\r\n/**\r\n *\r\n * @param {Error} error\r\n */\r\nvar parseErrorToStacks = function parseErrorToStacks(error) {\r\n  if (!error || !(error instanceof Error)) {\r\n    throw new Error(\"parseErrorToStacks expects Error object\");\r\n  }\r\n  if (typeof error.stack === \"string\") {\r\n    return error.stack.split(\"\\n\").filter(function (stack) {\r\n      return stack !== \"Error: \".concat(error.message);\r\n    });\r\n  }\r\n};\r\n\r\n/**\r\n * @callback ErrorCallback\r\n * @param {ErrorEvent} error\r\n * @returns {void}\r\n */\r\n\r\n/**\r\n * @param {ErrorCallback} callback\r\n */\r\nvar listenToRuntimeError = function listenToRuntimeError(callback) {\r\n  window.addEventListener(\"error\", callback);\r\n  return function cleanup() {\r\n    window.removeEventListener(\"error\", callback);\r\n  };\r\n};\r\n\r\n/**\r\n * @callback UnhandledRejectionCallback\r\n * @param {PromiseRejectionEvent} rejectionEvent\r\n * @returns {void}\r\n */\r\n\r\n/**\r\n * @param {UnhandledRejectionCallback} callback\r\n */\r\nvar listenToUnhandledRejection = function listenToUnhandledRejection(callback) {\r\n  window.addEventListener(\"unhandledrejection\", callback);\r\n  return function cleanup() {\r\n    window.removeEventListener(\"unhandledrejection\", callback);\r\n  };\r\n};\r\n\r\n// Styles are inspired by `react-error-overlay`\r\n\r\nvar msgStyles = {\r\n  error: {\r\n    backgroundColor: \"rgba(206, 17, 38, 0.1)\",\r\n    color: \"#fccfcf\"\r\n  },\r\n  warning: {\r\n    backgroundColor: \"rgba(251, 245, 180, 0.1)\",\r\n    color: \"#fbf5b4\"\r\n  }\r\n};\r\nvar iframeStyle = {\r\n  position: \"fixed\",\r\n  top: 0,\r\n  left: 0,\r\n  right: 0,\r\n  bottom: 0,\r\n  width: \"100vw\",\r\n  height: \"100vh\",\r\n  border: \"none\",\r\n  \"z-index\": 9999999999\r\n};\r\nvar containerStyle = {\r\n  position: \"fixed\",\r\n  boxSizing: \"border-box\",\r\n  left: 0,\r\n  top: 0,\r\n  right: 0,\r\n  bottom: 0,\r\n  width: \"100vw\",\r\n  height: \"100vh\",\r\n  fontSize: \"large\",\r\n  padding: \"2rem 2rem 4rem 2rem\",\r\n  lineHeight: \"1.2\",\r\n  whiteSpace: \"pre-wrap\",\r\n  overflow: \"auto\",\r\n  backgroundColor: \"rgba(0, 0, 0, 0.9)\",\r\n  color: \"white\"\r\n};\r\nvar headerStyle = {\r\n  color: \"#e83b46\",\r\n  fontSize: \"2em\",\r\n  whiteSpace: \"pre-wrap\",\r\n  fontFamily: \"sans-serif\",\r\n  margin: \"0 2rem 2rem 0\",\r\n  flex: \"0 0 auto\",\r\n  maxHeight: \"50%\",\r\n  overflow: \"auto\"\r\n};\r\nvar dismissButtonStyle = {\r\n  color: \"#ffffff\",\r\n  lineHeight: \"1rem\",\r\n  fontSize: \"1.5rem\",\r\n  padding: \"1rem\",\r\n  cursor: \"pointer\",\r\n  position: \"absolute\",\r\n  right: 0,\r\n  top: 0,\r\n  backgroundColor: \"transparent\",\r\n  border: \"none\"\r\n};\r\nvar msgTypeStyle = {\r\n  color: \"#e83b46\",\r\n  fontSize: \"1.2em\",\r\n  marginBottom: \"1rem\",\r\n  fontFamily: \"sans-serif\"\r\n};\r\nvar msgTextStyle = {\r\n  lineHeight: \"1.5\",\r\n  fontSize: \"1rem\",\r\n  fontFamily: \"Menlo, Consolas, monospace\"\r\n};\r\n\r\n// ANSI HTML\r\n\r\nvar colors = {\r\n  reset: [\"transparent\", \"transparent\"],\r\n  black: \"181818\",\r\n  red: \"E36049\",\r\n  green: \"B3CB74\",\r\n  yellow: \"FFD080\",\r\n  blue: \"7CAFC2\",\r\n  magenta: \"7FACCA\",\r\n  cyan: \"C3C2EF\",\r\n  lightgrey: \"EBE7E3\",\r\n  darkgrey: \"6D7891\"\r\n};\r\nansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);\r\n\r\n/**\r\n * @param {string} type\r\n * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item\r\n * @returns {{ header: string, body: string }}\r\n */\r\nvar formatProblem = function formatProblem(type, item) {\r\n  var header = type === \"warning\" ? \"WARNING\" : \"ERROR\";\r\n  var body = \"\";\r\n  if (typeof item === \"string\") {\r\n    body += item;\r\n  } else {\r\n    var file = item.file || \"\";\r\n    // eslint-disable-next-line no-nested-ternary\r\n    var moduleName = item.moduleName ? item.moduleName.indexOf(\"!\") !== -1 ? \"\".concat(item.moduleName.replace(/^(\\s|\\S)*!/, \"\"), \" (\").concat(item.moduleName, \")\") : \"\".concat(item.moduleName) : \"\";\r\n    var loc = item.loc;\r\n    header += \"\".concat(moduleName || file ? \" in \".concat(moduleName ? \"\".concat(moduleName).concat(file ? \" (\".concat(file, \")\") : \"\") : file).concat(loc ? \" \".concat(loc) : \"\") : \"\");\r\n    body += item.message || \"\";\r\n  }\r\n  if (Array.isArray(item.stack)) {\r\n    item.stack.forEach(function (stack) {\r\n      if (typeof stack === \"string\") {\r\n        body += \"\\r\\n\".concat(stack);\r\n      }\r\n    });\r\n  }\r\n  return {\r\n    header: header,\r\n    body: body\r\n  };\r\n};\r\n\r\n/**\r\n * @typedef {Object} CreateOverlayOptions\r\n * @property {string | null} trustedTypesPolicyName\r\n * @property {boolean | (error: Error) => void} [catchRuntimeError]\r\n */\r\n\r\n/**\r\n *\r\n * @param {CreateOverlayOptions} options\r\n */\r\nvar createOverlay = function createOverlay(options) {\r\n  /** @type {HTMLIFrameElement | null | undefined} */\r\n  var iframeContainerElement;\r\n  /** @type {HTMLDivElement | null | undefined} */\r\n  var containerElement;\r\n  /** @type {HTMLDivElement | null | undefined} */\r\n  var headerElement;\r\n  /** @type {Array<(element: HTMLDivElement) => void>} */\r\n  var onLoadQueue = [];\r\n  /** @type {TrustedTypePolicy | undefined} */\r\n  var overlayTrustedTypesPolicy;\r\n\r\n  /**\r\n   *\r\n   * @param {HTMLElement} element\r\n   * @param {CSSStyleDeclaration} style\r\n   */\r\n  function applyStyle(element, style) {\r\n    Object.keys(style).forEach(function (prop) {\r\n      element.style[prop] = style[prop];\r\n    });\r\n  }\r\n\r\n  /**\r\n   * @param {string | null} trustedTypesPolicyName\r\n   */\r\n  function createContainer(trustedTypesPolicyName) {\r\n    // Enable Trusted Types if they are available in the current browser.\r\n    if (window.trustedTypes) {\r\n      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || \"webpack-dev-server#overlay\", {\r\n        createHTML: function createHTML(value) {\r\n          return value;\r\n        }\r\n      });\r\n    }\r\n    iframeContainerElement = document.createElement(\"iframe\");\r\n    iframeContainerElement.id = \"webpack-dev-server-client-overlay\";\r\n    iframeContainerElement.src = \"about:blank\";\r\n    applyStyle(iframeContainerElement, iframeStyle);\r\n    iframeContainerElement.onload = function () {\r\n      var contentElement = /** @type {Document} */\r\n      (/** @type {HTMLIFrameElement} */\r\n      iframeContainerElement.contentDocument).createElement(\"div\");\r\n      containerElement = /** @type {Document} */\r\n      (/** @type {HTMLIFrameElement} */\r\n      iframeContainerElement.contentDocument).createElement(\"div\");\r\n      contentElement.id = \"webpack-dev-server-client-overlay-div\";\r\n      applyStyle(contentElement, containerStyle);\r\n      headerElement = document.createElement(\"div\");\r\n      headerElement.innerText = \"Compiled with problems:\";\r\n      applyStyle(headerElement, headerStyle);\r\n      var closeButtonElement = document.createElement(\"button\");\r\n      applyStyle(closeButtonElement, dismissButtonStyle);\r\n      closeButtonElement.innerText = \"×\";\r\n      closeButtonElement.ariaLabel = \"Dismiss\";\r\n      closeButtonElement.addEventListener(\"click\", function () {\r\n        // eslint-disable-next-line no-use-before-define\r\n        overlayService.send({\r\n          type: \"DISMISS\"\r\n        });\r\n      });\r\n      contentElement.appendChild(headerElement);\r\n      contentElement.appendChild(closeButtonElement);\r\n      contentElement.appendChild(containerElement);\r\n\r\n      /** @type {Document} */\r\n      (/** @type {HTMLIFrameElement} */\r\n      iframeContainerElement.contentDocument).body.appendChild(contentElement);\r\n      onLoadQueue.forEach(function (onLoad) {\r\n        onLoad(/** @type {HTMLDivElement} */contentElement);\r\n      });\r\n      onLoadQueue = [];\r\n\r\n      /** @type {HTMLIFrameElement} */\r\n      iframeContainerElement.onload = null;\r\n    };\r\n    document.body.appendChild(iframeContainerElement);\r\n  }\r\n\r\n  /**\r\n   * @param {(element: HTMLDivElement) => void} callback\r\n   * @param {string | null} trustedTypesPolicyName\r\n   */\r\n  function ensureOverlayExists(callback, trustedTypesPolicyName) {\r\n    if (containerElement) {\r\n      containerElement.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(\"\") : \"\";\r\n      // Everything is ready, call the callback right away.\r\n      callback(containerElement);\r\n      return;\r\n    }\r\n    onLoadQueue.push(callback);\r\n    if (iframeContainerElement) {\r\n      return;\r\n    }\r\n    createContainer(trustedTypesPolicyName);\r\n  }\r\n\r\n  // Successful compilation.\r\n  function hide() {\r\n    if (!iframeContainerElement) {\r\n      return;\r\n    }\r\n\r\n    // Clean up and reset internal state.\r\n    document.body.removeChild(iframeContainerElement);\r\n    iframeContainerElement = null;\r\n    containerElement = null;\r\n  }\r\n\r\n  // Compilation with errors (e.g. syntax error or missing modules).\r\n  /**\r\n   * @param {string} type\r\n   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\r\n   * @param {string | null} trustedTypesPolicyName\r\n   * @param {'build' | 'runtime'} messageSource\r\n   */\r\n  function show(type, messages, trustedTypesPolicyName, messageSource) {\r\n    ensureOverlayExists(function () {\r\n      headerElement.innerText = messageSource === \"runtime\" ? \"Uncaught runtime errors:\" : \"Compiled with problems:\";\r\n      messages.forEach(function (message) {\r\n        var entryElement = document.createElement(\"div\");\r\n        var msgStyle = type === \"warning\" ? msgStyles.warning : msgStyles.error;\r\n        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {\r\n          padding: \"1rem 1rem 1.5rem 1rem\"\r\n        }));\r\n        var typeElement = document.createElement(\"div\");\r\n        var _formatProblem = formatProblem(type, message),\r\n          header = _formatProblem.header,\r\n          body = _formatProblem.body;\r\n        typeElement.innerText = header;\r\n        applyStyle(typeElement, msgTypeStyle);\r\n        if (message.moduleIdentifier) {\r\n          applyStyle(typeElement, {\r\n            cursor: \"pointer\"\r\n          });\r\n          // element.dataset not supported in IE\r\n          typeElement.setAttribute(\"data-can-open\", true);\r\n          typeElement.addEventListener(\"click\", function () {\r\n            fetch(\"/webpack-dev-server/open-editor?fileName=\".concat(message.moduleIdentifier));\r\n          });\r\n        }\r\n\r\n        // Make it look similar to our terminal.\r\n        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()(encode(body));\r\n        var messageTextNode = document.createElement(\"div\");\r\n        applyStyle(messageTextNode, msgTextStyle);\r\n        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;\r\n        entryElement.appendChild(typeElement);\r\n        entryElement.appendChild(messageTextNode);\r\n\r\n        /** @type {HTMLDivElement} */\r\n        containerElement.appendChild(entryElement);\r\n      });\r\n    }, trustedTypesPolicyName);\r\n  }\r\n  var overlayService = createOverlayMachine({\r\n    showOverlay: function showOverlay(_ref3) {\r\n      var _ref3$level = _ref3.level,\r\n        level = _ref3$level === void 0 ? \"error\" : _ref3$level,\r\n        messages = _ref3.messages,\r\n        messageSource = _ref3.messageSource;\r\n      return show(level, messages, options.trustedTypesPolicyName, messageSource);\r\n    },\r\n    hideOverlay: hide\r\n  });\r\n  if (options.catchRuntimeError) {\r\n    /**\r\n     * @param {Error | undefined} error\r\n     * @param {string} fallbackMessage\r\n     */\r\n    var handleError = function handleError(error, fallbackMessage) {\r\n      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);\r\n      var shouldDisplay = typeof options.catchRuntimeError === \"function\" ? options.catchRuntimeError(errorObject) : true;\r\n      if (shouldDisplay) {\r\n        overlayService.send({\r\n          type: \"RUNTIME_ERROR\",\r\n          messages: [{\r\n            message: errorObject.message,\r\n            stack: parseErrorToStacks(errorObject)\r\n          }]\r\n        });\r\n      }\r\n    };\r\n    listenToRuntimeError(function (errorEvent) {\r\n      // error property may be empty in older browser like IE\r\n      var error = errorEvent.error,\r\n        message = errorEvent.message;\r\n      if (!error && !message) {\r\n        return;\r\n      }\r\n      handleError(error, message);\r\n    });\r\n    listenToUnhandledRejection(function (promiseRejectionEvent) {\r\n      var reason = promiseRejectionEvent.reason;\r\n      handleError(reason, \"Unknown promise rejection reason\");\r\n    });\r\n  }\r\n  return overlayService;\r\n};\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/overlay.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/progress.js":
/*!************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/progress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defineProgressElement: () => (/* binding */ defineProgressElement),\n/* harmony export */   isProgressSupported: () => (/* binding */ isProgressSupported)\n/* harmony export */ });\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\r\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\r\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\r\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\r\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\r\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\r\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == typeof e || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\r\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\r\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\r\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\r\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\r\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\r\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\r\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\r\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\r\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\r\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\r\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\r\nfunction isProgressSupported() {\r\n  return \"customElements\" in self && !!HTMLElement.prototype.attachShadow;\r\n}\r\nfunction defineProgressElement() {\r\n  var _WebpackDevServerProgress;\r\n  if (customElements.get(\"wds-progress\")) {\r\n    return;\r\n  }\r\n  var _WebpackDevServerProgress_brand = /*#__PURE__*/new WeakSet();\r\n  var WebpackDevServerProgress = /*#__PURE__*/function (_HTMLElement) {\r\n    function WebpackDevServerProgress() {\r\n      var _this;\r\n      _classCallCheck(this, WebpackDevServerProgress);\r\n      _this = _callSuper(this, WebpackDevServerProgress);\r\n      _classPrivateMethodInitSpec(_this, _WebpackDevServerProgress_brand);\r\n      _this.attachShadow({\r\n        mode: \"open\"\r\n      });\r\n      _this.maxDashOffset = -219.99078369140625;\r\n      _this.animationTimer = null;\r\n      return _this;\r\n    }\r\n    _inherits(WebpackDevServerProgress, _HTMLElement);\r\n    return _createClass(WebpackDevServerProgress, [{\r\n      key: \"connectedCallback\",\r\n      value: function connectedCallback() {\r\n        _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);\r\n      }\r\n    }, {\r\n      key: \"attributeChangedCallback\",\r\n      value: function attributeChangedCallback(name, oldValue, newValue) {\r\n        if (name === \"progress\") {\r\n          _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, Number(newValue));\r\n        } else if (name === \"type\") {\r\n          _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);\r\n        }\r\n      }\r\n    }], [{\r\n      key: \"observedAttributes\",\r\n      get: function get() {\r\n        return [\"progress\", \"type\"];\r\n      }\r\n    }]);\r\n  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\r\n  _WebpackDevServerProgress = WebpackDevServerProgress;\r\n  function _reset() {\r\n    var _this$getAttribute, _Number;\r\n    clearTimeout(this.animationTimer);\r\n    this.animationTimer = null;\r\n    var typeAttr = (_this$getAttribute = this.getAttribute(\"type\")) === null || _this$getAttribute === void 0 ? void 0 : _this$getAttribute.toLowerCase();\r\n    this.type = typeAttr === \"circular\" ? \"circular\" : \"linear\";\r\n    var innerHTML = this.type === \"circular\" ? _circularTemplate.call(_WebpackDevServerProgress) : _linearTemplate.call(_WebpackDevServerProgress);\r\n    this.shadowRoot.innerHTML = innerHTML;\r\n    this.initialProgress = (_Number = Number(this.getAttribute(\"progress\"))) !== null && _Number !== void 0 ? _Number : 0;\r\n    _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, this.initialProgress);\r\n  }\r\n  function _circularTemplate() {\r\n    return \"\\n        <style>\\n        :host {\\n            width: 200px;\\n            height: 200px;\\n            position: fixed;\\n            right: 5%;\\n            top: 5%;\\n            transition: opacity .25s ease-in-out;\\n            z-index: 2147483645;\\n        }\\n\\n        circle {\\n            fill: #282d35;\\n        }\\n\\n        path {\\n            fill: rgba(0, 0, 0, 0);\\n            stroke: rgb(186, 223, 172);\\n            stroke-dasharray: 219.99078369140625;\\n            stroke-dashoffset: -219.99078369140625;\\n            stroke-width: 10;\\n            transform: rotate(90deg) translate(0px, -80px);\\n        }\\n\\n        text {\\n            font-family: 'Open Sans', sans-serif;\\n            font-size: 18px;\\n            fill: #ffffff;\\n            dominant-baseline: middle;\\n            text-anchor: middle;\\n        }\\n\\n        tspan#percent-super {\\n            fill: #bdc3c7;\\n            font-size: 0.45em;\\n            baseline-shift: 10%;\\n        }\\n\\n        @keyframes fade {\\n            0% { opacity: 1; transform: scale(1); }\\n            100% { opacity: 0; transform: scale(0); }\\n        }\\n\\n        .disappear {\\n            animation: fade 0.3s;\\n            animation-fill-mode: forwards;\\n            animation-delay: 0.5s;\\n        }\\n\\n        .hidden {\\n            display: none;\\n        }\\n        </style>\\n        <svg id=\\\"progress\\\" class=\\\"hidden noselect\\\" viewBox=\\\"0 0 80 80\\\">\\n        <circle cx=\\\"50%\\\" cy=\\\"50%\\\" r=\\\"35\\\"></circle>\\n        <path d=\\\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\\\"></path>\\n        <text x=\\\"50%\\\" y=\\\"51%\\\">\\n            <tspan id=\\\"percent-value\\\">0</tspan>\\n            <tspan id=\\\"percent-super\\\">%</tspan>\\n        </text>\\n        </svg>\\n      \";\r\n  }\r\n  function _linearTemplate() {\r\n    return \"\\n        <style>\\n        :host {\\n            position: fixed;\\n            top: 0;\\n            left: 0;\\n            height: 4px;\\n            width: 100vw;\\n            z-index: 2147483645;\\n        }\\n\\n        #bar {\\n            width: 0%;\\n            height: 4px;\\n            background-color: rgb(186, 223, 172);\\n        }\\n\\n        @keyframes fade {\\n            0% { opacity: 1; }\\n            100% { opacity: 0; }\\n        }\\n\\n        .disappear {\\n            animation: fade 0.3s;\\n            animation-fill-mode: forwards;\\n            animation-delay: 0.5s;\\n        }\\n\\n        .hidden {\\n            display: none;\\n        }\\n        </style>\\n        <div id=\\\"progress\\\"></div>\\n        \";\r\n  }\r\n  function _update(percent) {\r\n    var element = this.shadowRoot.querySelector(\"#progress\");\r\n    if (this.type === \"circular\") {\r\n      var path = this.shadowRoot.querySelector(\"path\");\r\n      var value = this.shadowRoot.querySelector(\"#percent-value\");\r\n      var offset = (100 - percent) / 100 * this.maxDashOffset;\r\n      path.style.strokeDashoffset = offset;\r\n      value.textContent = percent;\r\n    } else {\r\n      element.style.width = \"\".concat(percent, \"%\");\r\n    }\r\n    if (percent >= 100) {\r\n      _assertClassBrand(_WebpackDevServerProgress_brand, this, _hide).call(this);\r\n    } else if (percent > 0) {\r\n      _assertClassBrand(_WebpackDevServerProgress_brand, this, _show).call(this);\r\n    }\r\n  }\r\n  function _show() {\r\n    var element = this.shadowRoot.querySelector(\"#progress\");\r\n    element.classList.remove(\"hidden\");\r\n  }\r\n  function _hide() {\r\n    var _this2 = this;\r\n    var element = this.shadowRoot.querySelector(\"#progress\");\r\n    if (this.type === \"circular\") {\r\n      element.classList.add(\"disappear\");\r\n      element.addEventListener(\"animationend\", function () {\r\n        element.classList.add(\"hidden\");\r\n        _assertClassBrand(_WebpackDevServerProgress_brand, _this2, _update).call(_this2, 0);\r\n      }, {\r\n        once: true\r\n      });\r\n    } else if (this.type === \"linear\") {\r\n      element.classList.add(\"disappear\");\r\n      this.animationTimer = setTimeout(function () {\r\n        element.classList.remove(\"disappear\");\r\n        element.classList.add(\"hidden\");\r\n        element.style.width = \"0%\";\r\n        _this2.animationTimer = null;\r\n      }, 800);\r\n    }\r\n  }\r\n  customElements.define(\"wds-progress\", WebpackDevServerProgress);\r\n}\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/progress.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: () => (/* binding */ client),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* global __webpack_dev_server_client__ */\r\n\r\n\r\n\r\n\r\n// this WebsocketClient is here as a default fallback, in case the client is not injected\r\n/* eslint-disable camelcase */\r\nvar Client =\r\n// eslint-disable-next-line no-nested-ternary\r\ntypeof __webpack_dev_server_client__ !== \"undefined\" ? typeof __webpack_dev_server_client__.default !== \"undefined\" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n/* eslint-enable camelcase */\r\n\r\nvar retries = 0;\r\nvar maxRetries = 10;\r\n\r\n// Initialized client is exported so external consumers can utilize the same instance\r\n// It is mutable to enforce singleton\r\n// eslint-disable-next-line import/no-mutable-exports\r\nvar client = null;\r\n\r\n/**\r\n * @param {string} url\r\n * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\r\n * @param {number} [reconnect]\r\n */\r\nvar socket = function initSocket(url, handlers, reconnect) {\r\n  client = new Client(url);\r\n  client.onOpen(function () {\r\n    retries = 0;\r\n    if (typeof reconnect !== \"undefined\") {\r\n      maxRetries = reconnect;\r\n    }\r\n  });\r\n  client.onClose(function () {\r\n    if (retries === 0) {\r\n      handlers.close();\r\n    }\r\n\r\n    // Try to reconnect.\r\n    client = null;\r\n\r\n    // After 10 retries stop trying, to prevent logspam.\r\n    if (retries < maxRetries) {\r\n      // Exponentially increase timeout to reconnect.\r\n      // Respectfully copied from the package `got`.\r\n      // eslint-disable-next-line no-restricted-properties\r\n      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\r\n      retries += 1;\r\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"Trying to reconnect...\");\r\n      setTimeout(function () {\r\n        socket(url, handlers, reconnect);\r\n      }, retryInMs);\r\n    }\r\n  });\r\n  client.onMessage(\r\n  /**\r\n   * @param {any} data\r\n   */\r\n  function (data) {\r\n    var message = JSON.parse(data);\r\n    if (handlers[message.type]) {\r\n      handlers[message.type](message.data, message.params);\r\n    }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/socket.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   log: () => (/* binding */ log),\n/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)\n/* harmony export */ });\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ \"./node_modules/webpack-dev-server/client/modules/logger/index.js\");\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\nvar name = \"webpack-dev-server\";\r\n// default level is set on the client side, so it does not need\r\n// to be set by the CLI or API\r\nvar defaultLevel = \"info\";\r\n\r\n// options new options, merge with old options\r\n/**\r\n * @param {false | true | \"none\" | \"error\" | \"warn\" | \"info\" | \"log\" | \"verbose\"} level\r\n * @returns {void}\r\n */\r\nfunction setLogLevel(level) {\r\n  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({\r\n    level: level\r\n  });\r\n}\r\nsetLogLevel(defaultLevel);\r\nvar log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/utils/log.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* global __resourceQuery WorkerGlobalScope */\r\n\r\n// Send messages to the outside, so plugins can consume it.\r\n/**\r\n * @param {string} type\r\n * @param {any} [data]\r\n */\r\nfunction sendMsg(type, data) {\r\n  if (typeof self !== \"undefined\" && (typeof WorkerGlobalScope === \"undefined\" || !(self instanceof WorkerGlobalScope))) {\r\n    self.postMessage({\r\n      type: \"webpack\".concat(type),\r\n      data: data\r\n    }, \"*\");\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack-dev-server/client/utils/sendMessage.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n/* globals __webpack_hash__ */\r\nif (true) {\r\n\t/** @type {undefined|string} */\r\n\tvar lastHash;\r\n\tvar upToDate = function upToDate() {\r\n\t\treturn /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;\r\n\t};\r\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\r\n\tvar check = function check() {\r\n\t\tmodule.hot\r\n\t\t\t.check(true)\r\n\t\t\t.then(function (updatedModules) {\r\n\t\t\t\tif (!updatedModules) {\r\n\t\t\t\t\tlog(\r\n\t\t\t\t\t\t\"warning\",\r\n\t\t\t\t\t\t\"[HMR] Cannot find update. \" +\r\n\t\t\t\t\t\t\t(typeof window !== \"undefined\"\r\n\t\t\t\t\t\t\t\t? \"Need to do a full reload!\"\r\n\t\t\t\t\t\t\t\t: \"Please reload manually!\")\r\n\t\t\t\t\t);\r\n\t\t\t\t\tlog(\r\n\t\t\t\t\t\t\"warning\",\r\n\t\t\t\t\t\t\"[HMR] (Probably because of restarting the webpack-dev-server)\"\r\n\t\t\t\t\t);\r\n\t\t\t\t\tif (typeof window !== \"undefined\") {\r\n\t\t\t\t\t\twindow.location.reload();\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (!upToDate()) {\r\n\t\t\t\t\tcheck();\r\n\t\t\t\t}\r\n\r\n\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\r\n\r\n\t\t\t\tif (upToDate()) {\r\n\t\t\t\t\tlog(\"info\", \"[HMR] App is up to date.\");\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t\t.catch(function (err) {\r\n\t\t\t\tvar status = module.hot.status();\r\n\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\r\n\t\t\t\t\tlog(\r\n\t\t\t\t\t\t\"warning\",\r\n\t\t\t\t\t\t\"[HMR] Cannot apply update. \" +\r\n\t\t\t\t\t\t\t(typeof window !== \"undefined\"\r\n\t\t\t\t\t\t\t\t? \"Need to do a full reload!\"\r\n\t\t\t\t\t\t\t\t: \"Please reload manually!\")\r\n\t\t\t\t\t);\r\n\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\r\n\t\t\t\t\tif (typeof window !== \"undefined\") {\r\n\t\t\t\t\t\twindow.location.reload();\r\n\t\t\t\t\t}\r\n\t\t\t\t} else {\r\n\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t};\r\n\tvar hotEmitter = __webpack_require__(/*! ./emitter */ \"./node_modules/webpack/hot/emitter.js\");\r\n\thotEmitter.on(\"webpackHotUpdate\", function (currentHash) {\r\n\t\tlastHash = currentHash;\r\n\t\tif (!upToDate() && module.hot.status() === \"idle\") {\r\n\t\t\tlog(\"info\", \"[HMR] Checking for updates on the server...\");\r\n\t\t\tcheck();\r\n\t\t}\r\n\t});\r\n\tlog(\"info\", \"[HMR] Waiting for update signal from WDS...\");\r\n} else {}\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack/hot/dev-server.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var EventEmitter = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\r\nmodule.exports = new EventEmitter();\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack/hot/emitter.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n\r\n/**\r\n * @param {(string | number)[]} updatedModules updated modules\r\n * @param {(string | number)[] | null} renewedModules renewed modules\r\n */\r\nmodule.exports = function (updatedModules, renewedModules) {\r\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\r\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\r\n\t});\r\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\r\n\r\n\tif (unacceptedModules.length > 0) {\r\n\t\tlog(\r\n\t\t\t\"warning\",\r\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\r\n\t\t);\r\n\t\tunacceptedModules.forEach(function (moduleId) {\r\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\r\n\t\t});\r\n\t}\r\n\r\n\tif (!renewedModules || renewedModules.length === 0) {\r\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\r\n\t} else {\r\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\r\n\t\trenewedModules.forEach(function (moduleId) {\r\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\r\n\t\t\t\tvar parts = moduleId.split(\"!\");\r\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\r\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\r\n\t\t\t\tlog.groupEnd(\"info\");\r\n\t\t\t} else {\r\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\r\n\t\t\t}\r\n\t\t});\r\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\r\n\t\t\treturn typeof moduleId === \"number\";\r\n\t\t});\r\n\t\tif (numberIds)\r\n\t\t\tlog(\r\n\t\t\t\t\"info\",\r\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\r\n\t\t\t);\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\r\n\r\n/** @type {LogLevel} */\r\nvar logLevel = \"info\";\r\n\r\nfunction dummy() {}\r\n\r\n/**\r\n * @param {LogLevel} level log level\r\n * @returns {boolean} true, if should log\r\n */\r\nfunction shouldLog(level) {\r\n\tvar shouldLog =\r\n\t\t(logLevel === \"info\" && level === \"info\") ||\r\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\r\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\r\n\treturn shouldLog;\r\n}\r\n\r\n/**\r\n * @param {(msg?: string) => void} logFn log function\r\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\r\n */\r\nfunction logGroup(logFn) {\r\n\treturn function (level, msg) {\r\n\t\tif (shouldLog(level)) {\r\n\t\t\tlogFn(msg);\r\n\t\t}\r\n\t};\r\n}\r\n\r\n/**\r\n * @param {LogLevel} level log level\r\n * @param {string|Error} msg message\r\n */\r\nmodule.exports = function (level, msg) {\r\n\tif (shouldLog(level)) {\r\n\t\tif (level === \"info\") {\r\n\t\t\tconsole.log(msg);\r\n\t\t} else if (level === \"warning\") {\r\n\t\t\tconsole.warn(msg);\r\n\t\t} else if (level === \"error\") {\r\n\t\t\tconsole.error(msg);\r\n\t\t}\r\n\t}\r\n};\r\n\r\nvar group = console.group || dummy;\r\nvar groupCollapsed = console.groupCollapsed || dummy;\r\nvar groupEnd = console.groupEnd || dummy;\r\n\r\nmodule.exports.group = logGroup(group);\r\n\r\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\r\n\r\nmodule.exports.groupEnd = logGroup(groupEnd);\r\n\r\n/**\r\n * @param {LogLevel} level log level\r\n */\r\nmodule.exports.setLogLevel = function (level) {\r\n\tlogLevel = level;\r\n};\r\n\r\n/**\r\n * @param {Error} err error\r\n * @returns {string} formatted error\r\n */\r\nmodule.exports.formatError = function (err) {\r\n\tvar message = err.message;\r\n\tvar stack = err.stack;\r\n\tif (!stack) {\r\n\t\treturn message;\r\n\t} else if (stack.indexOf(message) < 0) {\r\n\t\treturn message + \"\\n\" + stack;\r\n\t}\r\n\treturn stack;\r\n};\r\n\n\n//# sourceURL=webpack://proyecto_app/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./src/public/css/styles.css":
/*!***********************************!*\
  !*** ./src/public/css/styles.css ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      (function() {\n        var localsJsonString = undefined;\n        // 1741973185128\n        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {});\n        // only invalidate when locals change\n        if (\n          module.hot.data &&\n          module.hot.data.value &&\n          module.hot.data.value !== localsJsonString\n        ) {\n          module.hot.invalidate();\n        } else {\n          module.hot.accept();\n        }\n        module.hot.dispose(function(data) {\n          data.value = localsJsonString;\n          cssReload();\n        });\n      })();\n    }\n  \n\n//# sourceURL=webpack://proyecto_app/./src/public/css/styles.css?");

/***/ }),

/***/ "./src/public/js/script.js":
/*!*********************************!*\
  !*** ./src/public/js/script.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ../css/styles.css */ \"./src/public/css/styles.css\");\nconsole.log(\"🚀 Webpack está funcionando correctamente\");\n\n//# sourceURL=webpack://proyecto_app/./src/public/js/script.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f958921914b94f3de4c7")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "proyecto_app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateproyecto_app"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/js/script.js");
/******/ 	
/******/ })()
;