/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 666: 
    /***/ (__unused_webpack_module, exports) => {
      "use strict";
      ({
        value: true
      });
      void 0;
      function jsonEqualish(actual, expected) {
        if (Object.is(actual, expected)) return true;
        // For non-objects, use Object.is. This will cause 'undefined' and 'null' to
        // be different, as desired.
                if (!actual || !expected || "object" !== typeof actual && "object" !== typeof expected) 
        // Except for numbers, since we want '-0' and '+0' to be equivalent
        // (We should really just use JSON.stringify here. Might be slower but would
        // it matter?)
        return "number" === typeof actual ? actual === expected : Object.is(actual, expected);
        return objEquiv(actual, expected);
      }
      jsonEqualish;
      function objEquiv(a, b) {
        if (typeof a !== typeof b) return false;
        if (a instanceof Date) return b instanceof Date && a.getTime() == b.getTime();
        if (Array.isArray(a) !== Array.isArray(b)) return false;
        // We only deal with POD at the moment.
                if (a.constructor && a.constructor !== Object && a.constructor !== Array || b.constructor && b.constructor !== Object && b.constructor !== Array) throw new Error("Trying to compare something fancy");
        const aKeys = definedKeys(a);
        const bKeys = definedKeys(b);
        if (aKeys.length !== bKeys.length) return false;
        aKeys.sort();
        bKeys.sort();
        // Compare keys first
                for (let i = 0; i < aKeys.length; ++i) if (aKeys[i] != bKeys[i]) return false;
        // Compare values
                for (const key of aKeys) if (!jsonEqualish(a[key], b[key])) return false;
        return true;
      }
      function definedKeys(a) {
        return Object.keys(a).filter((key => "undefined" !== typeof a[key]));
      }
      jsonEqualish;
      /***/    },
    /***/ 508: 
    /***/ module => {
      (function(f) {
        if (true) module.exports = f(); else ;
      })((function() {
        var define;
        var _$breadcrumbTypes_8 = [ "navigation", "request", "process", "log", "user", "state", "error", "manual" ];
        // Array#reduce
                var _$reduce_17 = function(arr, fn, accum) {
          var val = accum;
          for (var i = 0, len = arr.length; i < len; i++) val = fn(val, arr[i], i, arr);
          return val;
        };
        /* removed: var _$reduce_17 = require('./reduce'); */        // Array#filter
        var _$filter_12 = function(arr, fn) {
          return _$reduce_17(arr, (function(accum, item, i, arr) {
            return !fn(item, i, arr) ? accum : accum.concat(item);
          }), []);
        };
        /* removed: var _$reduce_17 = require('./reduce'); */        // Array#includes
        var _$includes_13 = function(arr, x) {
          return _$reduce_17(arr, (function(accum, item, i, arr) {
            return true === accum || item === x;
          }), false);
        };
        // Array#isArray
                var _$isArray_14 = function(obj) {
          return "[object Array]" === Object.prototype.toString.call(obj);
        };
        /* eslint-disable-next-line no-prototype-builtins */        var _hasDontEnumBug = !{
          toString: null
        }.propertyIsEnumerable("toString");
        var _dontEnums = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ];
 // Object#keys
                var _$keys_15 = function(obj) {
          // stripped down version of
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Keys
          var result = [];
          var prop;
          for (prop in obj) if (Object.prototype.hasOwnProperty.call(obj, prop)) result.push(prop);
          if (!_hasDontEnumBug) return result;
          for (var i = 0, len = _dontEnums.length; i < len; i++) if (Object.prototype.hasOwnProperty.call(obj, _dontEnums[i])) result.push(_dontEnums[i]);
          return result;
        };
        var _$intRange_24 = function(min, max) {
          if (void 0 === min) min = 1;
          if (void 0 === max) max = 1 / 0;
          return function(value) {
            return "number" === typeof value && parseInt("" + value, 10) === value && value >= min && value <= max;
          };
        };
        /* removed: var _$filter_12 = require('../es-utils/filter'); */        var _$listOfFunctions_25 = function(value) {
          return "function" === typeof value || _$isArray_14(value) && _$filter_12(value, (function(f) {
            return "function" === typeof f;
          })).length === value.length;
        };
        var _$stringWithLength_26 = function(value) {
          return "string" === typeof value && !!value.length;
        };
        var _$config_5 = {};
        /* removed: var _$filter_12 = require('./lib/es-utils/filter'); */        var defaultErrorTypes = function() {
          return {
            unhandledExceptions: true,
            unhandledRejections: true
          };
        };
        _$config_5.schema = {
          apiKey: {
            defaultValue: function() {
              return null;
            },
            message: "is required",
            validate: _$stringWithLength_26
          },
          appVersion: {
            defaultValue: function() {
              return;
            },
            message: "should be a string",
            validate: function(value) {
              return void 0 === value || _$stringWithLength_26(value);
            }
          },
          appType: {
            defaultValue: function() {
              return;
            },
            message: "should be a string",
            validate: function(value) {
              return void 0 === value || _$stringWithLength_26(value);
            }
          },
          autoDetectErrors: {
            defaultValue: function() {
              return true;
            },
            message: "should be true|false",
            validate: function(value) {
              return true === value || false === value;
            }
          },
          enabledErrorTypes: {
            defaultValue: function() {
              return defaultErrorTypes();
            },
            message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
            allowPartialObject: true,
            validate: function(value) {
              // ensure we have an object
              if ("object" !== typeof value || !value) return false;
              var providedKeys = _$keys_15(value);
              var defaultKeys = _$keys_15(defaultErrorTypes());
 // ensure it only has a subset of the allowed keys
                            if (_$filter_12(providedKeys, (function(k) {
                return _$includes_13(defaultKeys, k);
              })).length < providedKeys.length) return false;
 // ensure all of the values are boolean
                            if (_$filter_12(_$keys_15(value), (function(k) {
                return "boolean" !== typeof value[k];
              })).length > 0) return false;
              return true;
            }
          },
          onError: {
            defaultValue: function() {
              return [];
            },
            message: "should be a function or array of functions",
            validate: _$listOfFunctions_25
          },
          onSession: {
            defaultValue: function() {
              return [];
            },
            message: "should be a function or array of functions",
            validate: _$listOfFunctions_25
          },
          onBreadcrumb: {
            defaultValue: function() {
              return [];
            },
            message: "should be a function or array of functions",
            validate: _$listOfFunctions_25
          },
          endpoints: {
            defaultValue: function() {
              return {
                notify: "https://notify.bugsnag.com",
                sessions: "https://sessions.bugsnag.com"
              };
            },
            message: "should be an object containing endpoint URLs { notify, sessions }",
            validate: function(val) {
              // first, ensure it's an object
              return val && "object" === typeof val && // notify and sessions must always be set
              _$stringWithLength_26(val.notify) && _$stringWithLength_26(val.sessions) && // ensure no keys other than notify/session are set on endpoints object
              0 === _$filter_12(_$keys_15(val), (function(k) {
                return !_$includes_13([ "notify", "sessions" ], k);
              })).length;
            }
          },
          autoTrackSessions: {
            defaultValue: function(val) {
              return true;
            },
            message: "should be true|false",
            validate: function(val) {
              return true === val || false === val;
            }
          },
          enabledReleaseStages: {
            defaultValue: function() {
              return null;
            },
            message: "should be an array of strings",
            validate: function(value) {
              return null === value || _$isArray_14(value) && _$filter_12(value, (function(f) {
                return "string" === typeof f;
              })).length === value.length;
            }
          },
          releaseStage: {
            defaultValue: function() {
              return "production";
            },
            message: "should be a string",
            validate: function(value) {
              return "string" === typeof value && value.length;
            }
          },
          maxBreadcrumbs: {
            defaultValue: function() {
              return 25;
            },
            message: "should be a number ≤100",
            validate: function(value) {
              return _$intRange_24(0, 100)(value);
            }
          },
          enabledBreadcrumbTypes: {
            defaultValue: function() {
              return _$breadcrumbTypes_8;
            },
            message: "should be null or a list of available breadcrumb types (" + _$breadcrumbTypes_8.join(",") + ")",
            validate: function(value) {
              return null === value || _$isArray_14(value) && _$reduce_17(value, (function(accum, maybeType) {
                if (false === accum) return accum;
                return _$includes_13(_$breadcrumbTypes_8, maybeType);
              }), true);
            }
          },
          context: {
            defaultValue: function() {
              return;
            },
            message: "should be a string",
            validate: function(value) {
              return void 0 === value || "string" === typeof value;
            }
          },
          user: {
            defaultValue: function() {
              return {};
            },
            message: "should be an object with { id, email, name } properties",
            validate: function(value) {
              return null === value || value && _$reduce_17(_$keys_15(value), (function(accum, key) {
                return accum && _$includes_13([ "id", "email", "name" ], key);
              }), true);
            }
          },
          metadata: {
            defaultValue: function() {
              return {};
            },
            message: "should be an object",
            validate: function(value) {
              return "object" === typeof value && null !== value;
            }
          },
          logger: {
            defaultValue: function() {
              return;
            },
            message: "should be null or an object with methods { debug, info, warn, error }",
            validate: function(value) {
              return !value || value && _$reduce_17([ "debug", "info", "warn", "error" ], (function(accum, method) {
                return accum && "function" === typeof value[method];
              }), true);
            }
          },
          redactedKeys: {
            defaultValue: function() {
              return [ "password" ];
            },
            message: "should be an array of strings|regexes",
            validate: function(value) {
              return _$isArray_14(value) && value.length === _$filter_12(value, (function(s) {
                return "string" === typeof s || s && "function" === typeof s.test;
              })).length;
            }
          },
          plugins: {
            defaultValue: function() {
              return [];
            },
            message: "should be an array of plugin objects",
            validate: function(value) {
              return _$isArray_14(value) && value.length === _$filter_12(value, (function(p) {
                return p && "object" === typeof p && "function" === typeof p.load;
              })).length;
            }
          },
          featureFlags: {
            defaultValue: function() {
              return [];
            },
            message: 'should be an array of objects that have a "name" property',
            validate: function(value) {
              return _$isArray_14(value) && value.length === _$filter_12(value, (function(feature) {
                return feature && "object" === typeof feature && "string" === typeof feature.name;
              })).length;
            }
          }
        };
        // extends helper from babel
        // https://github.com/babel/babel/blob/916429b516e6466fd06588ee820e40e025d7f3a3/packages/babel-helpers/src/helpers.js#L377-L393
                var _$assign_11 = function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
          }
          return target;
        };
        /* removed: var _$reduce_17 = require('./reduce'); */        // Array#map
        var _$map_16 = function(arr, fn) {
          return _$reduce_17(arr, (function(accum, item, i, arr) {
            return accum.concat(fn(item, i, arr));
          }), []);
        };
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        var schema = _$config_5.schema;
        /* removed: var _$map_16 = require('@bugsnag/core/lib/es-utils/map'); */        var _$config_1 = {
          releaseStage: _$assign_11({}, schema.releaseStage, {
            defaultValue: function() {
              if (/^localhost(:\d+)?$/.test(window.location.host)) return "development";
              return "production";
            }
          }),
          appType: _extends({}, schema.appType, {
            defaultValue: function() {
              return "browser";
            }
          }),
          logger: _$assign_11({}, schema.logger, {
            defaultValue: function() {
              // set logger based on browser capability
              return "undefined" !== typeof console && "function" === typeof console.debug ? getPrefixedConsole() : void 0;
            }
          })
        };
        var getPrefixedConsole = function() {
          var logger = {};
          var consoleLog = console.log;
          _$map_16([ "debug", "info", "warn", "error" ], (function(method) {
            var consoleMethod = console[method];
            logger[method] = "function" === typeof consoleMethod ? consoleMethod.bind(console, "[bugsnag]") : consoleLog.bind(console, "[bugsnag]");
          }));
          return logger;
        };
        var Breadcrumb =  function() {
          function Breadcrumb(message, metadata, type, timestamp) {
            if (void 0 === timestamp) timestamp = new Date;
            this.type = type;
            this.message = message;
            this.metadata = metadata;
            this.timestamp = timestamp;
          }
          var _proto = Breadcrumb.prototype;
          _proto.toJSON = function() {
            return {
              type: this.type,
              name: this.message,
              timestamp: this.timestamp,
              metaData: this.metadata
            };
          };
          return Breadcrumb;
        }();
        var _$Breadcrumb_3 = Breadcrumb;
        var _$stackframe_34 = {};
        (function(root, factory) {
          "use strict";
 // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
          /* istanbul ignore next */          if ("function" === typeof define && define.amd) define("stackframe", [], factory); else if ("object" === typeof _$stackframe_34) _$stackframe_34 = factory(); else root.StackFrame = factory();
        })(this, (function() {
          "use strict";
          function _isNumber(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }
          function _capitalize(str) {
            return str.charAt(0).toUpperCase() + str.substring(1);
          }
          function _getter(p) {
            return function() {
              return this[p];
            };
          }
          var booleanProps = [ "isConstructor", "isEval", "isNative", "isToplevel" ];
          var numericProps = [ "columnNumber", "lineNumber" ];
          var stringProps = [ "fileName", "functionName", "source" ];
          var arrayProps = [ "args" ];
          var props = booleanProps.concat(numericProps, stringProps, arrayProps);
          function StackFrame(obj) {
            if (obj instanceof Object) for (var i = 0; i < props.length; i++) if (obj.hasOwnProperty(props[i]) && void 0 !== obj[props[i]]) this["set" + _capitalize(props[i])](obj[props[i]]);
          }
          StackFrame.prototype = {
            getArgs: function() {
              return this.args;
            },
            setArgs: function(v) {
              if ("[object Array]" !== Object.prototype.toString.call(v)) throw new TypeError("Args must be an Array");
              this.args = v;
            },
            getEvalOrigin: function() {
              return this.evalOrigin;
            },
            setEvalOrigin: function(v) {
              if (v instanceof StackFrame) this.evalOrigin = v; else if (v instanceof Object) this.evalOrigin = new StackFrame(v); else throw new TypeError("Eval Origin must be an Object or StackFrame");
            },
            toString: function() {
              var functionName = this.getFunctionName() || "{anonymous}";
              var args = "(" + (this.getArgs() || []).join(",") + ")";
              var fileName = this.getFileName() ? "@" + this.getFileName() : "";
              var lineNumber = _isNumber(this.getLineNumber()) ? ":" + this.getLineNumber() : "";
              var columnNumber = _isNumber(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
              return functionName + args + fileName + lineNumber + columnNumber;
            }
          };
          for (var i = 0; i < booleanProps.length; i++) {
            StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
            StackFrame.prototype["set" + _capitalize(booleanProps[i])] = function(p) {
              return function(v) {
                this[p] = Boolean(v);
              };
            }(booleanProps[i]);
          }
          for (var j = 0; j < numericProps.length; j++) {
            StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
            StackFrame.prototype["set" + _capitalize(numericProps[j])] = function(p) {
              return function(v) {
                if (!_isNumber(v)) throw new TypeError(p + " must be a Number");
                this[p] = Number(v);
              };
            }(numericProps[j]);
          }
          for (var k = 0; k < stringProps.length; k++) {
            StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
            StackFrame.prototype["set" + _capitalize(stringProps[k])] = function(p) {
              return function(v) {
                this[p] = String(v);
              };
            }(stringProps[k]);
          }
          return StackFrame;
        }));
        var _$errorStackParser_31 = {};
        (function(root, factory) {
          "use strict";
 // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
          /* istanbul ignore next */          if ("function" === typeof define && define.amd) define("error-stack-parser", [ "stackframe" ], factory); else if ("object" === typeof _$errorStackParser_31) _$errorStackParser_31 = factory(_$stackframe_34); else root.ErrorStackParser = factory(root.StackFrame);
        })(this, (function(StackFrame) {
          "use strict";
          var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
          var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
          var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
          return {
            /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
            parse: function(error) {
              if ("undefined" !== typeof error.stacktrace || "undefined" !== typeof error["opera#sourceloc"]) return this.parseOpera(error); else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) return this.parseV8OrIE(error); else if (error.stack) return this.parseFFOrSafari(error); else throw new Error("Cannot parse given Error object");
            },
            // Separate line and column numbers from a string of the form: (URI:Line:Column)
            extractLocation: function(urlLike) {
              // Fail-fast but return locations like "(native)"
              if (-1 === urlLike.indexOf(":")) return [ urlLike ];
              var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
              var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ""));
              return [ parts[1], parts[2] || void 0, parts[3] || void 0 ];
            },
            parseV8OrIE: function(error) {
              var filtered = error.stack.split("\n").filter((function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
              }), this);
              return filtered.map((function(line) {
                if (line.indexOf("(eval ") > -1) 
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
                var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(");
 // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
                // case it has spaces in it, as the string is split on \s+ later on
                                var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);
 // remove the parenthesized location from the line, if it was matched
                                sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
                var tokens = sanitizedLine.split(/\s+/).slice(1);
 // if a location was matched, pass it to extractLocation() otherwise pop the last token
                                var locationParts = this.extractLocation(location ? location[1] : tokens.pop());
                var functionName = tokens.join(" ") || void 0;
                var fileName = [ "eval", "<anonymous>" ].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
                return new StackFrame({
                  functionName,
                  fileName,
                  lineNumber: locationParts[1],
                  columnNumber: locationParts[2],
                  source: line
                });
              }), this);
            },
            parseFFOrSafari: function(error) {
              var filtered = error.stack.split("\n").filter((function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
              }), this);
              return filtered.map((function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(" > eval") > -1) line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1");
                if (-1 === line.indexOf("@") && -1 === line.indexOf(":")) 
                // Safari eval frames only have function names and nothing else
                return new StackFrame({
                  functionName: line
                }); else {
                  var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                  var matches = line.match(functionNameRegex);
                  var functionName = matches && matches[1] ? matches[1] : void 0;
                  var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
                  return new StackFrame({
                    functionName,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                  });
                }
              }), this);
            },
            parseOpera: function(e) {
              if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) return this.parseOpera9(e); else if (!e.stack) return this.parseOpera10(e); else return this.parseOpera11(e);
            },
            parseOpera9: function(e) {
              var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
              var lines = e.message.split("\n");
              var result = [];
              for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) result.push(new StackFrame({
                  fileName: match[2],
                  lineNumber: match[1],
                  source: lines[i]
                }));
              }
              return result;
            },
            parseOpera10: function(e) {
              var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
              var lines = e.stacktrace.split("\n");
              var result = [];
              for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) result.push(new StackFrame({
                  functionName: match[3] || void 0,
                  fileName: match[2],
                  lineNumber: match[1],
                  source: lines[i]
                }));
              }
              return result;
            },
            // Opera 10.65+ Error.stack very similar to FF/Safari
            parseOpera11: function(error) {
              var filtered = error.stack.split("\n").filter((function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
              }), this);
              return filtered.map((function(line) {
                var tokens = line.split("@");
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = tokens.shift() || "";
                var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
                var args = void 0 === argsRaw || "[arguments not available]" === argsRaw ? void 0 : argsRaw.split(",");
                return new StackFrame({
                  functionName,
                  args,
                  fileName: locationParts[0],
                  lineNumber: locationParts[1],
                  columnNumber: locationParts[2],
                  source: line
                });
              }), this);
            }
          };
        }));
        var _$errorStackParser_10 = _$errorStackParser_31;
        var _$safeJsonStringify_30 = function(data, replacer, space, opts) {
          var redactedKeys = opts && opts.redactedKeys ? opts.redactedKeys : [];
          var redactedPaths = opts && opts.redactedPaths ? opts.redactedPaths : [];
          return JSON.stringify(prepareObjForSerialization(data, redactedKeys, redactedPaths), replacer, space);
        };
        var MAX_DEPTH = 20;
        var MAX_EDGES = 25000;
        var MIN_PRESERVED_DEPTH = 8;
        var REPLACEMENT_NODE = "...";
        function isError(o) {
          return o instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(o));
        }
        function throwsMessage(err) {
          return "[Throws: " + (err ? err.message : "?") + "]";
        }
        function find(haystack, needle) {
          for (var i = 0, len = haystack.length; i < len; i++) if (haystack[i] === needle) return true;
          return false;
        }
 // returns true if the string `path` starts with any of the provided `paths`
                function isDescendent(paths, path) {
          for (var i = 0, len = paths.length; i < len; i++) if (0 === path.indexOf(paths[i])) return true;
          return false;
        }
        function shouldRedact(patterns, key) {
          for (var i = 0, len = patterns.length; i < len; i++) {
            if ("string" === typeof patterns[i] && patterns[i].toLowerCase() === key.toLowerCase()) return true;
            if (patterns[i] && "function" === typeof patterns[i].test && patterns[i].test(key)) return true;
          }
          return false;
        }
        function __isArray_30(obj) {
          return "[object Array]" === Object.prototype.toString.call(obj);
        }
        function safelyGetProp(obj, prop) {
          try {
            return obj[prop];
          } catch (err) {
            return throwsMessage(err);
          }
        }
        function prepareObjForSerialization(obj, redactedKeys, redactedPaths) {
          var seen = [];
 // store references to objects we have seen before
                    var edges = 0;
          function visit(obj, path) {
            function edgesExceeded() {
              return path.length > MIN_PRESERVED_DEPTH && edges > MAX_EDGES;
            }
            edges++;
            if (path.length > MAX_DEPTH) return REPLACEMENT_NODE;
            if (edgesExceeded()) return REPLACEMENT_NODE;
            if (null === obj || "object" !== typeof obj) return obj;
            if (find(seen, obj)) return "[Circular]";
            seen.push(obj);
            if ("function" === typeof obj.toJSON) try {
              // we're not going to count this as an edge because it
              // replaces the value of the currently visited object
              edges--;
              var fResult = visit(obj.toJSON(), path);
              seen.pop();
              return fResult;
            } catch (err) {
              return throwsMessage(err);
            }
            var er = isError(obj);
            if (er) {
              edges--;
              var eResult = visit({
                name: obj.name,
                message: obj.message
              }, path);
              seen.pop();
              return eResult;
            }
            if (__isArray_30(obj)) {
              var aResult = [];
              for (var i = 0, len = obj.length; i < len; i++) {
                if (edgesExceeded()) {
                  aResult.push(REPLACEMENT_NODE);
                  break;
                }
                aResult.push(visit(obj[i], path.concat("[]")));
              }
              seen.pop();
              return aResult;
            }
            var result = {};
            try {
              for (var prop in obj) {
                if (!Object.prototype.hasOwnProperty.call(obj, prop)) continue;
                if (isDescendent(redactedPaths, path.join(".")) && shouldRedact(redactedKeys, prop)) {
                  result[prop] = "[REDACTED]";
                  continue;
                }
                if (edgesExceeded()) {
                  result[prop] = REPLACEMENT_NODE;
                  break;
                }
                result[prop] = visit(safelyGetProp(obj, prop), path.concat(prop));
              }
            } catch (e) {}
            seen.pop();
            return result;
          }
          return visit(obj, []);
        }
        /* removed: var _$map_16 = require('./es-utils/map'); */        function add(existingFeatures, existingFeatureKeys, name, variant) {
          if ("string" !== typeof name) return;
          if (void 0 === variant) variant = null; else if (null !== variant && "string" !== typeof variant) variant = _$safeJsonStringify_30(variant);
          var existingIndex = existingFeatureKeys[name];
          if ("number" === typeof existingIndex) {
            existingFeatures[existingIndex] = {
              name,
              variant
            };
            return;
          }
          existingFeatures.push({
            name,
            variant
          });
          existingFeatureKeys[name] = existingFeatures.length - 1;
        }
        function merge(existingFeatures, newFeatures, existingFeatureKeys) {
          if (!_$isArray_14(newFeatures)) return;
          for (var i = 0; i < newFeatures.length; ++i) {
            var feature = newFeatures[i];
            if (null === feature || "object" !== typeof feature) continue;
 // 'add' will handle if 'name' doesn't exist & 'variant' is optional
                        add(existingFeatures, existingFeatureKeys, feature.name, feature.variant);
          }
          return existingFeatures;
        }
 // convert feature flags from a map of 'name -> variant' into the format required
        // by the Bugsnag Event API:
        //   [{ featureFlag: 'name', variant: 'variant' }, { featureFlag: 'name 2' }]
                function toEventApi(featureFlags) {
          return _$map_16(_$filter_12(featureFlags, Boolean), (function(_ref) {
            var name = _ref.name, variant = _ref.variant;
            var flag = {
              featureFlag: name
            };
 // don't add a 'variant' property unless there's actually a value
                        if ("string" === typeof variant) flag.variant = variant;
            return flag;
          }));
        }
        function clear(features, featuresIndex, name) {
          var existingIndex = featuresIndex[name];
          if ("number" === typeof existingIndex) {
            features[existingIndex] = null;
            delete featuresIndex[name];
          }
        }
        var _$featureFlagDelegate_18 = {
          add,
          clear,
          merge,
          toEventApi
        };
        // Given `err` which may be an error, does it have a stack property which is a string?
                var _$hasStack_19 = function(err) {
          return !!err && (!!err.stack || !!err.stacktrace || !!err["opera#sourceloc"]) && "string" === typeof (err.stack || err.stacktrace || err["opera#sourceloc"]) && err.stack !== err.name + ": " + err.message;
        };
        /**
 * Expose `isError`.
 */        var _$isError_32 = __isError_32;
        /**
 * Test whether `value` is error object.
 *
 * @param {*} value
 * @returns {boolean}
 */        function __isError_32(value) {
          switch (Object.prototype.toString.call(value)) {
           case "[object Error]":
            return true;

           case "[object Exception]":
            return true;

           case "[object DOMException]":
            return true;

           default:
            return value instanceof Error;
          }
        }
        var _$iserror_20 = _$isError_32;
        /* removed: var _$assign_11 = require('./es-utils/assign'); */        var __add_22 = function(state, section, keyOrObj, maybeVal) {
          var _updates;
          if (!section) return;
          var updates;
 // addMetadata("section", null) -> clears section
                    if (null === keyOrObj) return __clear_22(state, section);
 // normalise the two supported input types into object form
                    if ("object" === typeof keyOrObj) updates = keyOrObj;
          if ("string" === typeof keyOrObj) updates = (_updates = {}, _updates[keyOrObj] = maybeVal, 
          _updates);
 // exit if we don't have an updates object at this point
                    if (!updates) return;
 // ensure a section with this name exists
                    if (!state[section]) state[section] = {};
 // merge the updates with the existing section
                    state[section] = _$assign_11({}, state[section], updates);
        };
        var get = function(state, section, key) {
          if ("string" !== typeof section) return;
          if (!key) return state[section];
          if (state[section]) return state[section][key];
          return;
        };
        var __clear_22 = function(state, section, key) {
          if ("string" !== typeof section) return;
 // clear an entire section
                    if (!key) {
            delete state[section];
            return;
          }
 // clear a single value from a section
                    if (state[section]) delete state[section][key];
        };
        var _$metadataDelegate_22 = {
          add: __add_22,
          get,
          clear: __clear_22
        };
        var _$stackGenerator_33 = {};
        (function(root, factory) {
          "use strict";
 // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.
          /* istanbul ignore next */          if ("function" === typeof define && define.amd) define("stack-generator", [ "stackframe" ], factory); else if ("object" === typeof _$stackGenerator_33) _$stackGenerator_33 = factory(_$stackframe_34); else root.StackGenerator = factory(root.StackFrame);
        })(this, (function(StackFrame) {
          return {
            backtrace: function(opts) {
              var stack = [];
              var maxStackSize = 10;
              if ("object" === typeof opts && "number" === typeof opts.maxStackSize) maxStackSize = opts.maxStackSize;
              var curr = arguments.callee;
              while (curr && stack.length < maxStackSize && curr["arguments"]) {
                // Allow V8 optimizations
                var args = new Array(curr["arguments"].length);
                for (var i = 0; i < args.length; ++i) args[i] = curr["arguments"][i];
                if (/function(?:\s+([\w$]+))+\s*\(/.test(curr.toString())) stack.push(new StackFrame({
                  functionName: RegExp.$1 || void 0,
                  args
                })); else stack.push(new StackFrame({
                  args
                }));
                try {
                  curr = curr.caller;
                } catch (e) {
                  break;
                }
              }
              return stack;
            }
          };
        }));
        /* removed: var _$errorStackParser_10 = require('./lib/error-stack-parser'); */        var Event =  function() {
          function Event(errorClass, errorMessage, stacktrace, handledState, originalError) {
            if (void 0 === stacktrace) stacktrace = [];
            if (void 0 === handledState) handledState = defaultHandledState();
            this.apiKey = void 0;
            this.context = void 0;
            this.groupingHash = void 0;
            this.originalError = originalError;
            this._handledState = handledState;
            this.severity = this._handledState.severity;
            this.unhandled = this._handledState.unhandled;
            this.app = {};
            this.device = {};
            this.request = {};
            this.breadcrumbs = [];
            this.threads = [];
            this._metadata = {};
            this._features = [];
            this._featuresIndex = {};
            this._user = {};
            this._session = void 0;
            this.errors = [ createBugsnagError(errorClass, errorMessage, Event.__type, stacktrace) ];
 // Flags.
            // Note these are not initialised unless they are used
            // to save unnecessary bytes in the browser bundle
            /* this.attemptImmediateDelivery, default: true */          }
          var _proto = Event.prototype;
          _proto.addMetadata = function(section, keyOrObj, maybeVal) {
            return _$metadataDelegate_22.add(this._metadata, section, keyOrObj, maybeVal);
          };
          _proto.getMetadata = function(section, key) {
            return _$metadataDelegate_22.get(this._metadata, section, key);
          };
          _proto.clearMetadata = function(section, key) {
            return _$metadataDelegate_22.clear(this._metadata, section, key);
          };
          _proto.addFeatureFlag = function(name, variant) {
            if (void 0 === variant) variant = null;
            _$featureFlagDelegate_18.add(this._features, this._featuresIndex, name, variant);
          };
          _proto.addFeatureFlags = function(featureFlags) {
            _$featureFlagDelegate_18.merge(this._features, featureFlags, this._featuresIndex);
          };
          _proto.getFeatureFlags = function() {
            return _$featureFlagDelegate_18.toEventApi(this._features);
          };
          _proto.clearFeatureFlag = function(name) {
            _$featureFlagDelegate_18.clear(this._features, this._featuresIndex, name);
          };
          _proto.clearFeatureFlags = function() {
            this._features = [];
            this._featuresIndex = {};
          };
          _proto.getUser = function() {
            return this._user;
          };
          _proto.setUser = function(id, email, name) {
            this._user = {
              id,
              email,
              name
            };
          };
          _proto.toJSON = function() {
            return {
              payloadVersion: "4",
              exceptions: _$map_16(this.errors, (function(er) {
                return _$assign_11({}, er, {
                  message: er.errorMessage
                });
              })),
              severity: this.severity,
              unhandled: this._handledState.unhandled,
              severityReason: this._handledState.severityReason,
              app: this.app,
              device: this.device,
              request: this.request,
              breadcrumbs: this.breadcrumbs,
              context: this.context,
              groupingHash: this.groupingHash,
              metaData: this._metadata,
              user: this._user,
              session: this._session,
              featureFlags: this.getFeatureFlags()
            };
          };
          return Event;
        }();
 // takes a stacktrace.js style stackframe (https://github.com/stacktracejs/stackframe)
        // and returns a Bugsnag compatible stackframe (https://docs.bugsnag.com/api/error-reporting/#json-payload)
                var formatStackframe = function(frame) {
          var f = {
            file: frame.fileName,
            method: normaliseFunctionName(frame.functionName),
            lineNumber: frame.lineNumber,
            columnNumber: frame.columnNumber,
            code: void 0,
            inProject: void 0
          };
 // Some instances result in no file:
          // - calling notify() from chrome's terminal results in no file/method.
          // - non-error exception thrown from global code in FF
          // This adds one.
                    if (f.lineNumber > -1 && !f.file && !f.method) f.file = "global code";
          return f;
        };
        var normaliseFunctionName = function(name) {
          return /^global code$/i.test(name) ? "global code" : name;
        };
        var defaultHandledState = function() {
          return {
            unhandled: false,
            severity: "warning",
            severityReason: {
              type: "handledException"
            }
          };
        };
        var ensureString = function(str) {
          return "string" === typeof str ? str : "";
        };
        function createBugsnagError(errorClass, errorMessage, type, stacktrace) {
          return {
            errorClass: ensureString(errorClass),
            errorMessage: ensureString(errorMessage),
            type,
            stacktrace: _$reduce_17(stacktrace, (function(accum, frame) {
              var f = formatStackframe(frame);
 // don't include a stackframe if none of its properties are defined
                            try {
                if ("{}" === JSON.stringify(f)) return accum;
                return accum.concat(f);
              } catch (e) {
                return accum;
              }
            }), [])
          };
        }
        function getCauseStack(error) {
          if (error.cause) return [ error ].concat(getCauseStack(error.cause)); else return [ error ];
        }
 // Helpers
                Event.getStacktrace = function(error, errorFramesToSkip, backtraceFramesToSkip) {
          if (_$hasStack_19(error)) return _$errorStackParser_10.parse(error).slice(errorFramesToSkip);
 // error wasn't provided or didn't have a stacktrace so try to walk the callstack
                    try {
            return _$filter_12(_$stackGenerator_33.backtrace(), (function(frame) {
              return -1 === (frame.functionName || "").indexOf("StackGenerator$$");
            })).slice(1 + backtraceFramesToSkip);
          } catch (e) {
            return [];
          }
        };
        Event.create = function(maybeError, tolerateNonErrors, handledState, component, errorFramesToSkip, logger) {
          if (void 0 === errorFramesToSkip) errorFramesToSkip = 0;
          var _normaliseError = normaliseError(maybeError, tolerateNonErrors, component, logger), error = _normaliseError[0], internalFrames = _normaliseError[1];
          var event;
          try {
            var stacktrace = Event.getStacktrace(error, // if an error was created/throw in the normaliseError() function, we need to
            // tell the getStacktrace() function to skip the number of frames we know will
            // be from our own functions. This is added to the number of frames deep we
            // were told about
            internalFrames > 0 ? 1 + internalFrames + errorFramesToSkip : 0, // if there's no stacktrace, the callstack may be walked to generated one.
            // this is how many frames should be removed because they come from our library
            1 + errorFramesToSkip);
            event = new Event(error.name, error.message, stacktrace, handledState, maybeError);
          } catch (e) {
            event = new Event(error.name, error.message, [], handledState, maybeError);
          }
          if ("InvalidError" === error.name) event.addMetadata("" + component, "non-error parameter", makeSerialisable(maybeError));
          if (error.cause) {
            var _event$errors;
            var causes = getCauseStack(error).slice(1);
            var normalisedCauses = _$map_16(causes, (function(cause) {
              // Only get stacktrace for error causes that are a valid JS Error and already have a stack
              var stacktrace = _$iserror_20(cause) && _$hasStack_19(cause) ? _$errorStackParser_10.parse(cause) : [];
              var _normaliseError2 = normaliseError(cause, true, "error cause"), error = _normaliseError2[0];
              if ("InvalidError" === error.name) event.addMetadata("error cause", makeSerialisable(cause));
              return createBugsnagError(error.name, error.message, Event.__type, stacktrace);
            }));
            (_event$errors = event.errors).push.apply(_event$errors, normalisedCauses);
          }
          return event;
        };
        var makeSerialisable = function(err) {
          if (null === err) return "null";
          if (void 0 === err) return "undefined";
          return err;
        };
        var normaliseError = function(maybeError, tolerateNonErrors, component, logger) {
          var error;
          var internalFrames = 0;
          var createAndLogInputError = function(reason) {
            var verb = "error cause" === component ? "was" : "received";
            if (logger) logger.warn(component + " " + verb + ' a non-error: "' + reason + '"');
            var err = new Error(component + " " + verb + ' a non-error. See "' + component + '" tab for more detail.');
            err.name = "InvalidError";
            return err;
          };
 // In some cases:
          
          //  - the promise rejection handler (both in the browser and node)
          //  - the node uncaughtException handler
          
          // We are really limited in what we can do to get a stacktrace. So we use the
          // tolerateNonErrors option to ensure that the resulting error communicates as
          // such.
                    if (!tolerateNonErrors) if (_$iserror_20(maybeError)) error = maybeError; else {
            error = createAndLogInputError(typeof maybeError);
            internalFrames += 2;
          } else switch (typeof maybeError) {
           case "string":
           case "number":
           case "boolean":
            error = new Error(String(maybeError));
            internalFrames += 1;
            break;

           case "function":
            error = createAndLogInputError("function");
            internalFrames += 2;
            break;

           case "object":
            if (null !== maybeError && _$iserror_20(maybeError)) error = maybeError; else if (null !== maybeError && hasNecessaryFields(maybeError)) {
              error = new Error(maybeError.message || maybeError.errorMessage);
              error.name = maybeError.name || maybeError.errorClass;
              internalFrames += 1;
            } else {
              error = createAndLogInputError(null === maybeError ? "null" : "unsupported object");
              internalFrames += 2;
            }
            break;

           default:
            error = createAndLogInputError("nothing");
            internalFrames += 2;
          }
          if (!_$hasStack_19(error)) 
          // in IE10/11 a new Error() doesn't have a stacktrace until you throw it, so try that here
          try {
            throw error;
          } catch (e) {
            if (_$hasStack_19(e)) {
              error = e;
 // if the error only got a stacktrace after we threw it here, we know it
              // will only have one extra internal frame from this function, regardless
              // of whether it went through createAndLogInputError() or not
                            internalFrames = 1;
            }
          }
          return [ error, internalFrames ];
        };
 // default value for stacktrace.type
                Event.__type = "browserjs";
        var hasNecessaryFields = function(error) {
          return ("string" === typeof error.name || "string" === typeof error.errorClass) && ("string" === typeof error.message || "string" === typeof error.errorMessage);
        };
        var _$Event_6 = Event;
        // This is a heavily modified/simplified version of
        //   https://github.com/othiym23/async-some
        // with the logic flipped so that it is akin to the
        // synchronous "every" method instead of "some".
        // run the asynchronous test function (fn) over each item in the array (arr)
        // in series until:
        //   - fn(item, cb) => calls cb(null, false)
        //   - or the end of the array is reached
        // the callback (cb) will be passed (null, false) if any of the items in arr
        // caused fn to call back with false, otherwise it will be passed (null, true)
                var _$asyncEvery_7 = function(arr, fn, cb) {
          var index = 0;
          var next = function() {
            if (index >= arr.length) return cb(null, true);
            fn(arr[index], (function(err, result) {
              if (err) return cb(err);
              if (false === result) return cb(null, false);
              index++;
              next();
            }));
          };
          next();
        };
        /* removed: var _$asyncEvery_7 = require('./async-every'); */        var _$callbackRunner_9 = function(callbacks, event, onCallbackError, cb) {
          // This function is how we support different kinds of callback:
          //  - synchronous - return value
          //  - node-style async with callback - cb(err, value)
          //  - promise/thenable - resolve(value)
          // It normalises each of these into the lowest common denominator – a node-style callback
          var runMaybeAsyncCallback = function(fn, cb) {
            if ("function" !== typeof fn) return cb(null);
            try {
              // if function appears sync…
              if (2 !== fn.length) {
                var ret = fn(event);
 // check if it returned a "thenable" (promise)
                                if (ret && "function" === typeof ret.then) return ret.then((// resolve
                function(val) {
                  return setTimeout((function() {
                    return cb(null, val);
                  }));
                }), (// reject
                function(err) {
                  setTimeout((function() {
                    onCallbackError(err);
                    return cb(null, true);
                  }));
                }));
                return cb(null, ret);
              }
 // if function is async…
                            fn(event, (function(err, result) {
                if (err) {
                  onCallbackError(err);
                  return cb(null);
                }
                cb(null, result);
              }));
            } catch (e) {
              onCallbackError(e);
              cb(null);
            }
          };
          _$asyncEvery_7(callbacks, runMaybeAsyncCallback, cb);
        };
        var _$syncCallbackRunner_23 = function(callbacks, callbackArg, callbackType, logger) {
          var ignore = false;
          var cbs = callbacks.slice();
          while (!ignore) {
            if (!cbs.length) break;
            try {
              ignore = false === cbs.pop()(callbackArg);
            } catch (e) {
              logger.error("Error occurred in " + callbackType + " callback, continuing anyway…");
              logger.error(e);
            }
          }
          return ignore;
        };
        var _$pad_29 = function(num, size) {
          var s = "000000000" + num;
          return s.substr(s.length - size);
        };
        /* removed: var _$pad_29 = require('./pad.js'); */        var env = "object" === typeof window ? window : self;
        var globalCount = 0;
        for (var prop in env) if (Object.hasOwnProperty.call(env, prop)) globalCount++;
        var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
        var clientId = _$pad_29((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);
        var _$fingerprint_28 = function() {
          return clientId;
        };
        /**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */
        /* removed: var _$fingerprint_28 = require('./lib/fingerprint.js'); */        var c = 0, blockSize = 4, base = 36, discreteValues = Math.pow(base, blockSize);
        function randomBlock() {
          return _$pad_29((Math.random() * discreteValues << 0).toString(base), blockSize);
        }
        function safeCounter() {
          c = c < discreteValues ? c : 0;
          c++;
 // this is not subliminal
                    return c - 1;
        }
        function cuid() {
          // Starting with a lowercase letter makes
          // it HTML element ID friendly.
          var letter = "c", 
          // hard-coded allows for sequential access
          // timestamp
          // warning: this exposes the exact date and time
          // that the uid was created.
          timestamp = (new Date).getTime().toString(base), 
          // Prevent same-machine collisions.
          counter = _$pad_29(safeCounter().toString(base), blockSize), 
          // A few chars to generate distinct ids for different
          // clients (so different computers are far less
          // likely to generate the same id)
          print = _$fingerprint_28(), 
          // Grab some more chars from Math.random()
          random = randomBlock() + randomBlock();
          return letter + timestamp + counter + print + random;
        }
        cuid.fingerprint = _$fingerprint_28;
        var _$cuid_27 = cuid;
        /* removed: var _$cuid_27 = require('@bugsnag/cuid'); */        var Session =  function() {
          function Session() {
            this.id = _$cuid_27();
            this.startedAt = new Date;
            this._handled = 0;
            this._unhandled = 0;
            this._user = {};
            this.app = {};
            this.device = {};
          }
          var _proto = Session.prototype;
          _proto.getUser = function() {
            return this._user;
          };
          _proto.setUser = function(id, email, name) {
            this._user = {
              id,
              email,
              name
            };
          };
          _proto.toJSON = function() {
            return {
              id: this.id,
              startedAt: this.startedAt,
              events: {
                handled: this._handled,
                unhandled: this._unhandled
              }
            };
          };
          _proto._track = function(event) {
            this[event._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
          };
          return Session;
        }();
        var _$Session_35 = Session;
        /* removed: var _$config_5 = require('./config'); */        var __add_4 = _$featureFlagDelegate_18.add, __clear_4 = _$featureFlagDelegate_18.clear, __merge_4 = _$featureFlagDelegate_18.merge;
        var noop = function() {};
        var Client =  function() {
          function Client(configuration, schema, internalPlugins, notifier) {
            var _this = this;
            if (void 0 === schema) schema = _$config_5.schema;
            if (void 0 === internalPlugins) internalPlugins = [];
            // notifier id
                        this._notifier = notifier;
 // intialise opts and config
                        this._config = {};
            this._schema = schema;
 // i/o
                        this._delivery = {
              sendSession: noop,
              sendEvent: noop
            };
            this._logger = {
              debug: noop,
              info: noop,
              warn: noop,
              error: noop
            };
 // plugins
                        this._plugins = {};
 // state
                        this._breadcrumbs = [];
            this._session = null;
            this._metadata = {};
            this._featuresIndex = {};
            this._features = [];
            this._context = void 0;
            this._user = {};
 // callbacks:
            //  e: onError
            //  s: onSession
            //  sp: onSessionPayload
            //  b: onBreadcrumb
            // (note these names are minified by hand because object
            // properties are not safe to minify automatically)
                        this._cbs = {
              e: [],
              s: [],
              sp: [],
              b: []
            };
 // expose internal constructors
                        this.Client = Client;
            this.Event = _$Event_6;
            this.Breadcrumb = _$Breadcrumb_3;
            this.Session = _$Session_35;
            this._config = this._configure(configuration, internalPlugins);
            _$map_16(internalPlugins.concat(this._config.plugins), (function(pl) {
              if (pl) _this._loadPlugin(pl);
            }));
 // when notify() is called we need to know how many frames are from our own source
            // this inital value is 1 not 0 because we wrap notify() to ensure it is always
            // bound to have the client as its `this` value – see below.
                        this._depth = 1;
            var self = this;
            var notify = this.notify;
            this.notify = function() {
              return notify.apply(self, arguments);
            };
          }
          var _proto = Client.prototype;
          _proto.addMetadata = function(section, keyOrObj, maybeVal) {
            return _$metadataDelegate_22.add(this._metadata, section, keyOrObj, maybeVal);
          };
          _proto.getMetadata = function(section, key) {
            return _$metadataDelegate_22.get(this._metadata, section, key);
          };
          _proto.clearMetadata = function(section, key) {
            return _$metadataDelegate_22.clear(this._metadata, section, key);
          };
          _proto.addFeatureFlag = function(name, variant) {
            if (void 0 === variant) variant = null;
            __add_4(this._features, this._featuresIndex, name, variant);
          };
          _proto.addFeatureFlags = function(featureFlags) {
            __merge_4(this._features, featureFlags, this._featuresIndex);
          };
          _proto.clearFeatureFlag = function(name) {
            __clear_4(this._features, this._featuresIndex, name);
          };
          _proto.clearFeatureFlags = function() {
            this._features = [];
            this._featuresIndex = {};
          };
          _proto.getContext = function() {
            return this._context;
          };
          _proto.setContext = function(c) {
            this._context = c;
          };
          _proto._configure = function(opts, internalPlugins) {
            var schema = _$reduce_17(internalPlugins, (function(schema, plugin) {
              if (plugin && plugin.configSchema) return _$assign_11({}, schema, plugin.configSchema);
              return schema;
            }), this._schema);
 // accumulate configuration and error messages
                        var _reduce = _$reduce_17(_$keys_15(schema), (function(accum, key) {
              var defaultValue = schema[key].defaultValue(opts[key]);
              if (void 0 !== opts[key]) {
                var valid = schema[key].validate(opts[key]);
                if (!valid) {
                  accum.errors[key] = schema[key].message;
                  accum.config[key] = defaultValue;
                } else if (schema[key].allowPartialObject) accum.config[key] = _$assign_11(defaultValue, opts[key]); else accum.config[key] = opts[key];
              } else accum.config[key] = defaultValue;
              return accum;
            }), {
              errors: {},
              config: {}
            }), errors = _reduce.errors, config = _reduce.config;
            if (schema.apiKey) {
              // missing api key is the only fatal error
              if (!config.apiKey) throw new Error("No Bugsnag API Key set");
 // warn about an apikey that is not of the expected format
                            if (!/^[0-9a-f]{32}$/i.test(config.apiKey)) errors.apiKey = "should be a string of 32 hexadecimal characters";
            }
 // update and elevate some options
                        this._metadata = _$assign_11({}, config.metadata);
            __merge_4(this._features, config.featureFlags, this._featuresIndex);
            this._user = _$assign_11({}, config.user);
            this._context = config.context;
            if (config.logger) this._logger = config.logger;
 // add callbacks
                        if (config.onError) this._cbs.e = this._cbs.e.concat(config.onError);
            if (config.onBreadcrumb) this._cbs.b = this._cbs.b.concat(config.onBreadcrumb);
            if (config.onSession) this._cbs.s = this._cbs.s.concat(config.onSession);
 // finally warn about any invalid config where we fell back to the default
                        if (_$keys_15(errors).length) this._logger.warn(generateConfigErrorMessage(errors, opts));
            return config;
          };
          _proto.getUser = function() {
            return this._user;
          };
          _proto.setUser = function(id, email, name) {
            this._user = {
              id,
              email,
              name
            };
          };
          _proto._loadPlugin = function(plugin) {
            var result = plugin.load(this);
 // JS objects are not the safest way to store arbitrarily keyed values,
            // so bookend the key with some characters that prevent tampering with
            // stuff like __proto__ etc. (only store the result if the plugin had a
            // name)
                        if (plugin.name) this._plugins["~" + plugin.name + "~"] = result;
            return this;
          };
          _proto.getPlugin = function(name) {
            return this._plugins["~" + name + "~"];
          };
          _proto._setDelivery = function(d) {
            this._delivery = d(this);
          };
          _proto.startSession = function() {
            var session = new _$Session_35;
            session.app.releaseStage = this._config.releaseStage;
            session.app.version = this._config.appVersion;
            session.app.type = this._config.appType;
            session._user = _$assign_11({}, this._user);
 // run onSession callbacks
                        var ignore = _$syncCallbackRunner_23(this._cbs.s, session, "onSession", this._logger);
            if (ignore) {
              this._logger.debug("Session not started due to onSession callback");
              return this;
            }
            return this._sessionDelegate.startSession(this, session);
          };
          _proto.addOnError = function(fn, front) {
            if (void 0 === front) front = false;
            this._cbs.e[front ? "unshift" : "push"](fn);
          };
          _proto.removeOnError = function(fn) {
            this._cbs.e = _$filter_12(this._cbs.e, (function(f) {
              return f !== fn;
            }));
          };
          _proto._addOnSessionPayload = function(fn) {
            this._cbs.sp.push(fn);
          };
          _proto.addOnSession = function(fn) {
            this._cbs.s.push(fn);
          };
          _proto.removeOnSession = function(fn) {
            this._cbs.s = _$filter_12(this._cbs.s, (function(f) {
              return f !== fn;
            }));
          };
          _proto.addOnBreadcrumb = function(fn, front) {
            if (void 0 === front) front = false;
            this._cbs.b[front ? "unshift" : "push"](fn);
          };
          _proto.removeOnBreadcrumb = function(fn) {
            this._cbs.b = _$filter_12(this._cbs.b, (function(f) {
              return f !== fn;
            }));
          };
          _proto.pauseSession = function() {
            return this._sessionDelegate.pauseSession(this);
          };
          _proto.resumeSession = function() {
            return this._sessionDelegate.resumeSession(this);
          };
          _proto.leaveBreadcrumb = function(message, metadata, type) {
            // coerce bad values so that the defaults get set
            message = "string" === typeof message ? message : "";
            type = "string" === typeof type && _$includes_13(_$breadcrumbTypes_8, type) ? type : "manual";
            metadata = "object" === typeof metadata && null !== metadata ? metadata : {};
 // if no message, discard
                        if (!message) return;
            var crumb = new _$Breadcrumb_3(message, metadata, type);
 // run onBreadcrumb callbacks
                        var ignore = _$syncCallbackRunner_23(this._cbs.b, crumb, "onBreadcrumb", this._logger);
            if (ignore) {
              this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback");
              return;
            }
 // push the valid crumb onto the queue and maintain the length
                        this._breadcrumbs.push(crumb);
            if (this._breadcrumbs.length > this._config.maxBreadcrumbs) this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs);
          };
          _proto._isBreadcrumbTypeEnabled = function(type) {
            var types = this._config.enabledBreadcrumbTypes;
            return null === types || _$includes_13(types, type);
          };
          _proto.notify = function(maybeError, onError, postReportCallback) {
            if (void 0 === postReportCallback) postReportCallback = noop;
            var event = _$Event_6.create(maybeError, true, void 0, "notify()", this._depth + 1, this._logger);
            this._notify(event, onError, postReportCallback);
          };
          _proto._notify = function(event, onError, postReportCallback) {
            var _this2 = this;
            if (void 0 === postReportCallback) postReportCallback = noop;
            event.app = _$assign_11({}, event.app, {
              releaseStage: this._config.releaseStage,
              version: this._config.appVersion,
              type: this._config.appType
            });
            event.context = event.context || this._context;
            event._metadata = _$assign_11({}, event._metadata, this._metadata);
            event._user = _$assign_11({}, event._user, this._user);
            event.breadcrumbs = this._breadcrumbs.slice();
            __merge_4(event._features, this._features, event._featuresIndex);
 // exit early if events should not be sent on the current releaseStage
                        if (null !== this._config.enabledReleaseStages && !_$includes_13(this._config.enabledReleaseStages, this._config.releaseStage)) {
              this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration");
              return postReportCallback(null, event);
            }
            var originalSeverity = event.severity;
            var onCallbackError = function(err) {
              // errors in callbacks are tolerated but we want to log them out
              _this2._logger.error("Error occurred in onError callback, continuing anyway…");
              _this2._logger.error(err);
            };
            var callbacks = [].concat(this._cbs.e).concat(onError);
            _$callbackRunner_9(callbacks, event, onCallbackError, (function(err, shouldSend) {
              if (err) onCallbackError(err);
              if (!shouldSend) {
                _this2._logger.debug("Event not sent due to onError callback");
                return postReportCallback(null, event);
              }
              if (_this2._isBreadcrumbTypeEnabled("error")) 
              // only leave a crumb for the error if actually got sent
              Client.prototype.leaveBreadcrumb.call(_this2, event.errors[0].errorClass, {
                errorClass: event.errors[0].errorClass,
                errorMessage: event.errors[0].errorMessage,
                severity: event.severity
              }, "error");
              if (originalSeverity !== event.severity) event._handledState.severityReason = {
                type: "userCallbackSetSeverity"
              };
              if (event.unhandled !== event._handledState.unhandled) {
                event._handledState.severityReason.unhandledOverridden = true;
                event._handledState.unhandled = event.unhandled;
              }
              if (_this2._session) {
                _this2._session._track(event);
                event._session = _this2._session;
              }
              _this2._delivery.sendEvent({
                apiKey: event.apiKey || _this2._config.apiKey,
                notifier: _this2._notifier,
                events: [ event ]
              }, (function(err) {
                return postReportCallback(err, event);
              }));
            }));
          };
          return Client;
        }();
        var generateConfigErrorMessage = function(errors, rawInput) {
          var er = new Error("Invalid configuration\n" + _$map_16(_$keys_15(errors), (function(key) {
            return "  - " + key + " " + errors[key] + ", got " + stringify(rawInput[key]);
          })).join("\n\n"));
          return er;
        };
        var stringify = function(val) {
          switch (typeof val) {
           case "string":
           case "number":
           case "object":
            return JSON.stringify(val);

           default:
            return String(val);
          }
        };
        var _$Client_4 = Client;
        var _$jsonPayload_21 = {};
        /* removed: var _$safeJsonStringify_30 = require('@bugsnag/safe-json-stringify'); */        var EVENT_REDACTION_PATHS = [ "events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request" ];
        _$jsonPayload_21.event = function(event, redactedKeys) {
          var payload = _$safeJsonStringify_30(event, null, null, {
            redactedPaths: EVENT_REDACTION_PATHS,
            redactedKeys
          });
          if (payload.length > 10e5) {
            event.events[0]._metadata = {
              notifier: "WARNING!\nSerialized payload was " + payload.length / 10e5 + "MB (limit = 1MB)\nmetadata was removed"
            };
            payload = _$safeJsonStringify_30(event, null, null, {
              redactedPaths: EVENT_REDACTION_PATHS,
              redactedKeys
            });
            if (payload.length > 10e5) throw new Error("payload exceeded 1MB limit");
          }
          return payload;
        };
        _$jsonPayload_21.session = function(event, redactedKeys) {
          var payload = _$safeJsonStringify_30(event, null, null);
          if (payload.length > 10e5) throw new Error("payload exceeded 1MB limit");
          return payload;
        };
        var _$delivery_36 = {};
        /* removed: var _$jsonPayload_21 = require('@bugsnag/core/lib/json-payload'); */        _$delivery_36 = function(client, win) {
          if (void 0 === win) win = window;
          return {
            sendEvent: function(event, cb) {
              if (void 0 === cb) cb = function() {};
              var url = getApiUrl(client._config, "notify", "4", win);
              var req = new win.XDomainRequest;
              req.onload = function() {
                cb(null);
              };
              req.open("POST", url);
              setTimeout((function() {
                try {
                  req.send(_$jsonPayload_21.event(event, client._config.redactedKeys));
                } catch (e) {
                  client._logger.error(e);
                  cb(e);
                }
              }), 0);
            },
            sendSession: function(session, cb) {
              if (void 0 === cb) cb = function() {};
              var url = getApiUrl(client._config, "sessions", "1", win);
              var req = new win.XDomainRequest;
              req.onload = function() {
                cb(null);
              };
              req.open("POST", url);
              setTimeout((function() {
                try {
                  req.send(_$jsonPayload_21.session(session, client._config.redactedKeys));
                } catch (e) {
                  client._logger.error(e);
                  cb(e);
                }
              }), 0);
            }
          };
        };
        var getApiUrl = function(config, endpoint, version, win) {
          // IE8 doesn't support Date.prototype.toISOstring(), but it does convert a date
          // to an ISO string when you use JSON stringify. Simply parsing the result of
          // JSON.stringify is smaller than using a toISOstring() polyfill.
          var isoDate = JSON.parse(JSON.stringify(new Date));
          var url = matchPageProtocol(config.endpoints[endpoint], win.location.protocol);
          return url + "?apiKey=" + encodeURIComponent(config.apiKey) + "&payloadVersion=" + version + "&sentAt=" + encodeURIComponent(isoDate);
        };
        var matchPageProtocol = _$delivery_36._matchPageProtocol = function(endpoint, pageProtocol) {
          return "http:" === pageProtocol ? endpoint.replace(/^https:/, "http:") : endpoint;
        };
        /* removed: var _$jsonPayload_21 = require('@bugsnag/core/lib/json-payload'); */        var _$delivery_37 = function(client, win) {
          if (void 0 === win) win = window;
          return {
            sendEvent: function(event, cb) {
              if (void 0 === cb) cb = function() {};
              try {
                var url = client._config.endpoints.notify;
                var req = new win.XMLHttpRequest;
                req.onreadystatechange = function() {
                  if (req.readyState === win.XMLHttpRequest.DONE) cb(null);
                };
                req.open("POST", url);
                req.setRequestHeader("Content-Type", "application/json");
                req.setRequestHeader("Bugsnag-Api-Key", event.apiKey || client._config.apiKey);
                req.setRequestHeader("Bugsnag-Payload-Version", "4");
                req.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString());
                req.send(_$jsonPayload_21.event(event, client._config.redactedKeys));
              } catch (e) {
                client._logger.error(e);
              }
            },
            sendSession: function(session, cb) {
              if (void 0 === cb) cb = function() {};
              try {
                var url = client._config.endpoints.sessions;
                var req = new win.XMLHttpRequest;
                req.onreadystatechange = function() {
                  if (req.readyState === win.XMLHttpRequest.DONE) cb(null);
                };
                req.open("POST", url);
                req.setRequestHeader("Content-Type", "application/json");
                req.setRequestHeader("Bugsnag-Api-Key", client._config.apiKey);
                req.setRequestHeader("Bugsnag-Payload-Version", "1");
                req.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString());
                req.send(_$jsonPayload_21.session(session, client._config.redactedKeys));
              } catch (e) {
                client._logger.error(e);
              }
            }
          };
        };
        var appStart = new Date;
        var reset = function() {
          appStart = new Date;
        };
        var _$app_38 = {
          name: "appDuration",
          load: function(client) {
            client.addOnError((function(event) {
              var now = new Date;
              event.app.duration = now - appStart;
            }), true);
            return {
              reset
            };
          }
        };
        /*
 * Sets the default context to be the current URL
 */        var _$context_39 = function(win) {
          if (void 0 === win) win = window;
          return {
            load: function(client) {
              client.addOnError((function(event) {
                if (void 0 !== event.context) return;
                event.context = win.location.pathname;
              }), true);
            }
          };
        };
        var _$pad_43 = function(num, size) {
          var s = "000000000" + num;
          return s.substr(s.length - size);
        };
        /* removed: var _$pad_43 = require('./pad.js'); */        var __env_42 = "object" === typeof window ? window : self;
        var __globalCount_42 = 0;
        for (var __prop_42 in __env_42) if (Object.hasOwnProperty.call(__env_42, __prop_42)) __globalCount_42++;
        var __mimeTypesLength_42 = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
        var __clientId_42 = _$pad_43((__mimeTypesLength_42 + navigator.userAgent.length).toString(36) + __globalCount_42.toString(36), 4);
        var _$fingerprint_42 = function() {
          return __clientId_42;
        };
        /**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */
        /* removed: var _$fingerprint_42 = require('./lib/fingerprint.js'); */        var __c_41 = 0, __blockSize_41 = 4, __base_41 = 36, __discreteValues_41 = Math.pow(__base_41, __blockSize_41);
        function __randomBlock_41() {
          return _$pad_43((Math.random() * __discreteValues_41 << 0).toString(__base_41), __blockSize_41);
        }
        function __safeCounter_41() {
          __c_41 = __c_41 < __discreteValues_41 ? __c_41 : 0;
          __c_41++;
 // this is not subliminal
                    return __c_41 - 1;
        }
        function __cuid_41() {
          // Starting with a lowercase letter makes
          // it HTML element ID friendly.
          var letter = "c", 
          // hard-coded allows for sequential access
          // timestamp
          // warning: this exposes the exact date and time
          // that the uid was created.
          timestamp = (new Date).getTime().toString(__base_41), 
          // Prevent same-machine collisions.
          counter = _$pad_43(__safeCounter_41().toString(__base_41), __blockSize_41), 
          // A few chars to generate distinct ids for different
          // clients (so different computers are far less
          // likely to generate the same id)
          print = _$fingerprint_42(), 
          // Grab some more chars from Math.random()
          random = __randomBlock_41() + __randomBlock_41();
          return letter + timestamp + counter + print + random;
        }
        __cuid_41.fingerprint = _$fingerprint_42;
        var _$cuid_41 = __cuid_41;
        /* removed: var _$cuid_41 = require('@bugsnag/cuid'); */        var BUGSNAG_ANONYMOUS_ID_KEY = "bugsnag-anonymous-id";
        var getDeviceId = function() {
          try {
            var storage = window.localStorage;
            var id = storage.getItem(BUGSNAG_ANONYMOUS_ID_KEY);
 // If we get an ID, make sure it looks like a valid cuid. The length can
            // fluctuate slightly, so some leeway is built in
                        if (id && /^c[a-z0-9]{20,32}$/.test(id)) return id;
            id = _$cuid_41();
            storage.setItem(BUGSNAG_ANONYMOUS_ID_KEY, id);
            return id;
          } catch (err) {// If localStorage is not available (e.g. because it's disabled) then give up
          }
        };
        /*
 * Automatically detects browser device details
 */        var _$device_40 = function(nav, screen) {
          if (void 0 === nav) nav = navigator;
          if (void 0 === screen) screen = window.screen;
          return {
            load: function(client) {
              var device = {
                locale: nav.browserLanguage || nav.systemLanguage || nav.userLanguage || nav.language,
                userAgent: nav.userAgent
              };
              if (screen && screen.orientation && screen.orientation.type) device.orientation = screen.orientation.type; else device.orientation = document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait";
              if (client._config.generateAnonymousId) device.id = getDeviceId();
              client.addOnSession((function(session) {
                session.device = _$assign_11({}, session.device, device);
 // only set device id if collectUserIp is false
                                if (!client._config.collectUserIp) setDefaultUserId(session);
              }));
 // add time just as the event is sent
                            client.addOnError((function(event) {
                event.device = _$assign_11({}, event.device, device, {
                  time: new Date
                });
                if (!client._config.collectUserIp) setDefaultUserId(event);
              }), true);
            },
            configSchema: {
              generateAnonymousId: {
                validate: function(value) {
                  return true === value || false === value;
                },
                defaultValue: function() {
                  return true;
                },
                message: "should be true|false"
              }
            }
          };
        };
        var setDefaultUserId = function(eventOrSession) {
          // device id is also used to populate the user id field, if it's not already set
          var user = eventOrSession.getUser();
          if (!user || !user.id) eventOrSession.setUser(eventOrSession.device.id);
        };
        /* removed: var _$assign_11 = require('@bugsnag/core/lib/es-utils/assign'); */        
        /*
 * Sets the event request: { url } to be the current href
 */
        var _$request_44 = function(win) {
          if (void 0 === win) win = window;
          return {
            load: function(client) {
              client.addOnError((function(event) {
                if (event.request && event.request.url) return;
                event.request = _$assign_11({}, event.request, {
                  url: win.location.href
                });
              }), true);
            }
          };
        };
        /* removed: var _$includes_13 = require('@bugsnag/core/lib/es-utils/includes'); */        var _$session_45 = {
          load: function(client) {
            client._sessionDelegate = sessionDelegate;
          }
        };
        var sessionDelegate = {
          startSession: function(client, session) {
            var sessionClient = client;
            sessionClient._session = session;
            sessionClient._pausedSession = null;
 // exit early if the current releaseStage is not enabled
                        if (null !== sessionClient._config.enabledReleaseStages && !_$includes_13(sessionClient._config.enabledReleaseStages, sessionClient._config.releaseStage)) {
              sessionClient._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration");
              return sessionClient;
            }
            sessionClient._delivery.sendSession({
              notifier: sessionClient._notifier,
              device: session.device,
              app: session.app,
              sessions: [ {
                id: session.id,
                startedAt: session.startedAt,
                user: session._user
              } ]
            });
            return sessionClient;
          },
          resumeSession: function(client) {
            // Do nothing if there's already an active session
            if (client._session) return client;
 // If we have a paused session then make it the active session
                        if (client._pausedSession) {
              client._session = client._pausedSession;
              client._pausedSession = null;
              return client;
            }
 // Otherwise start a new session
                        return client.startSession();
          },
          pauseSession: function(client) {
            client._pausedSession = client._session;
            client._session = null;
          }
        };
        /* removed: var _$assign_11 = require('@bugsnag/core/lib/es-utils/assign'); */        
        /*
 * Prevent collection of user IPs
 */
        var _$clientIp_46 = {
          load: function(client) {
            if (client._config.collectUserIp) return;
            client.addOnError((function(event) {
              // If user.id is explicitly undefined, it will be missing from the payload. It needs
              // removing so that the following line replaces it
              if (event._user && "undefined" === typeof event._user.id) delete event._user.id;
              event._user = _$assign_11({
                id: "[REDACTED]"
              }, event._user);
              event.request = _$assign_11({
                clientIp: "[REDACTED]"
              }, event.request);
            }));
          },
          configSchema: {
            collectUserIp: {
              defaultValue: function() {
                return true;
              },
              message: "should be true|false",
              validate: function(value) {
                return true === value || false === value;
              }
            }
          }
        };
        var _$consoleBreadcrumbs_47 = {};
        /* removed: var _$map_16 = require('@bugsnag/core/lib/es-utils/map'); */        
        /*
 * Leaves breadcrumbs when console log methods are called
 */
        _$consoleBreadcrumbs_47.load = function(client) {
          var isDev = /^(local-)?dev(elopment)?$/.test(client._config.releaseStage);
          if (isDev || !client._isBreadcrumbTypeEnabled("log")) return;
          _$map_16(CONSOLE_LOG_METHODS, (function(method) {
            var original = console[method];
            console[method] = function() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
              client.leaveBreadcrumb("Console output", _$reduce_17(args, (function(accum, arg, i) {
                // do the best/simplest stringification of each argument
                var stringified = "[Unknown value]";
 // this may fail if the input is:
                // - an object whose [[Prototype]] is null (no toString)
                // - an object with a broken toString or @@toPrimitive implementation
                                try {
                  stringified = String(arg);
                } catch (e) {}
 // if it stringifies to [object Object] attempt to JSON stringify
                                if ("[object Object]" === stringified) 
                // catch stringify errors and fallback to [object Object]
                try {
                  stringified = JSON.stringify(arg);
                } catch (e) {}
                accum["[" + i + "]"] = stringified;
                return accum;
              }), {
                severity: 0 === method.indexOf("group") ? "log" : method
              }), "log");
              original.apply(console, args);
            };
            console[method]._restore = function() {
              console[method] = original;
            };
          }));
        };
        if (false) ;
        var CONSOLE_LOG_METHODS = _$filter_12([ "log", "debug", "info", "warn", "error" ], (function(method) {
          return "undefined" !== typeof console && "function" === typeof console[method];
        }));
        /* removed: var _$map_16 = require('@bugsnag/core/lib/es-utils/map'); */        var MAX_LINE_LENGTH = 200;
        var MAX_SCRIPT_LENGTH = 500000;
        var _$inlineScriptContent_48 = function(doc, win) {
          if (void 0 === doc) doc = document;
          if (void 0 === win) win = window;
          return {
            load: function(client) {
              if (!client._config.trackInlineScripts) return;
              var originalLocation = win.location.href;
              var html = "";
 // in IE8-10 the 'interactive' state can fire too soon (before scripts have finished executing), so in those
              // we wait for the 'complete' state before assuming that synchronous scripts are no longer executing
                            var isOldIe = !!doc.attachEvent;
              var DOMContentLoaded = isOldIe ? "complete" === doc.readyState : "loading" !== doc.readyState;
              var getHtml = function() {
                return doc.documentElement.outerHTML;
              };
 // get whatever HTML exists at this point in time
                            html = getHtml();
              var prev = doc.onreadystatechange;
 // then update it when the DOM content has loaded
                            doc.onreadystatechange = function() {
                // IE8 compatible alternative to document#DOMContentLoaded
                if ("interactive" === doc.readyState) {
                  html = getHtml();
                  DOMContentLoaded = true;
                }
                try {
                  prev.apply(this, arguments);
                } catch (e) {}
              };
              var _lastScript = null;
              var updateLastScript = function(script) {
                _lastScript = script;
              };
              var getCurrentScript = function() {
                var script = doc.currentScript || _lastScript;
                if (!script && !DOMContentLoaded) {
                  var scripts = doc.scripts || doc.getElementsByTagName("script");
                  script = scripts[scripts.length - 1];
                }
                return script;
              };
              var addSurroundingCode = function(lineNumber) {
                // get whatever html has rendered at this point
                if (!DOMContentLoaded || !html) html = getHtml();
 // simulate the raw html
                                var htmlLines = [ "\x3c!-- DOC START --\x3e" ].concat(html.split("\n"));
                var zeroBasedLine = lineNumber - 1;
                var start = Math.max(zeroBasedLine - 3, 0);
                var end = Math.min(zeroBasedLine + 3, htmlLines.length);
                return _$reduce_17(htmlLines.slice(start, end), (function(accum, line, i) {
                  accum[start + 1 + i] = line.length <= MAX_LINE_LENGTH ? line : line.substr(0, MAX_LINE_LENGTH);
                  return accum;
                }), {});
              };
              client.addOnError((function(event) {
                // remove any of our own frames that may be part the stack this
                // happens before the inline script check as it happens for all errors
                event.errors[0].stacktrace = _$filter_12(event.errors[0].stacktrace, (function(f) {
                  return !/__trace__$/.test(f.method);
                }));
                var frame = event.errors[0].stacktrace[0];
 // if frame.file exists and is not the original location of the page, this can't be an inline script
                                if (frame && frame.file && frame.file.replace(/#.*$/, "") !== originalLocation.replace(/#.*$/, "")) return;
 // grab the last script known to have run
                                var currentScript = getCurrentScript();
                if (currentScript) {
                  var content = currentScript.innerHTML;
                  event.addMetadata("script", "content", content.length <= MAX_SCRIPT_LENGTH ? content : content.substr(0, MAX_SCRIPT_LENGTH));
 // only attempt to grab some surrounding code if we have a line number
                                    if (frame && frame.lineNumber) frame.code = addSurroundingCode(frame.lineNumber);
                }
              }), true);
 // Proxy all the timer functions whose callback is their 0th argument.
              // Keep a reference to the original setTimeout because we need it later
                            var _map = _$map_16([ "setTimeout", "setInterval", "setImmediate", "requestAnimationFrame" ], (function(fn) {
                return __proxy(win, fn, (function(original) {
                  return __traceOriginalScript(original, (function(args) {
                    return {
                      get: function() {
                        return args[0];
                      },
                      replace: function(fn) {
                        args[0] = fn;
                      }
                    };
                  }));
                }));
              })), _setTimeout = _map[0];
 // Proxy all the host objects whose prototypes have an addEventListener function
                            _$map_16([ "EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload" ], (function(o) {
                if (!win[o] || !win[o].prototype || !Object.prototype.hasOwnProperty.call(win[o].prototype, "addEventListener")) return;
                __proxy(win[o].prototype, "addEventListener", (function(original) {
                  return __traceOriginalScript(original, eventTargetCallbackAccessor);
                }));
                __proxy(win[o].prototype, "removeEventListener", (function(original) {
                  return __traceOriginalScript(original, eventTargetCallbackAccessor, true);
                }));
              }));
              function __traceOriginalScript(fn, callbackAccessor, alsoCallOriginal) {
                if (void 0 === alsoCallOriginal) alsoCallOriginal = false;
                return function() {
                  // this is required for removeEventListener to remove anything added with
                  // addEventListener before the functions started being wrapped by Bugsnag
                  var args = [].slice.call(arguments);
                  try {
                    var cba = callbackAccessor(args);
                    var cb = cba.get();
                    if (alsoCallOriginal) fn.apply(this, args);
                    if ("function" !== typeof cb) return fn.apply(this, args);
                    if (cb.__trace__) cba.replace(cb.__trace__); else {
                      var script = getCurrentScript();
 // this function mustn't be annonymous due to a bug in the stack
                      // generation logic, meaning it gets tripped up
                      // see: https://github.com/stacktracejs/stack-generator/issues/6
                                            cb.__trace__ = function() {
                        // set the script that called this function
                        updateLastScript(script);
 // immediately unset the currentScript synchronously below, however
                        // if this cb throws an error the line after will not get run so schedule
                        // an almost-immediate aysnc update too
                                                _setTimeout((function() {
                          updateLastScript(null);
                        }), 0);
                        var ret = cb.apply(this, arguments);
                        updateLastScript(null);
                        return ret;
                      };
                      cb.__trace__.__trace__ = cb.__trace__;
                      cba.replace(cb.__trace__);
                    }
                  } catch (e) {// swallow these errors on Selenium:
                    // Permission denied to access property '__trace__'
                    // WebDriverException: Message: Permission denied to access property "handleEvent"
                  }
 // IE8 doesn't let you call .apply() on setTimeout/setInterval
                                    if (fn.apply) return fn.apply(this, args);
                  switch (args.length) {
                   case 1:
                    return fn(args[0]);

                   case 2:
                    return fn(args[0], args[1]);

                   default:
                    return fn();
                  }
                };
              }
            },
            configSchema: {
              trackInlineScripts: {
                validate: function(value) {
                  return true === value || false === value;
                },
                defaultValue: function() {
                  return true;
                },
                message: "should be true|false"
              }
            }
          };
        };
        function __proxy(host, name, replacer) {
          var original = host[name];
          if (!original) return original;
          var replacement = replacer(original);
          host[name] = replacement;
          return original;
        }
        function eventTargetCallbackAccessor(args) {
          var isEventHandlerObj = !!args[1] && "function" === typeof args[1].handleEvent;
          return {
            get: function() {
              return isEventHandlerObj ? args[1].handleEvent : args[1];
            },
            replace: function(fn) {
              if (isEventHandlerObj) args[1].handleEvent = fn; else args[1] = fn;
            }
          };
        }
        /*
 * Leaves breadcrumbs when the user interacts with the DOM
 */        var _$interactionBreadcrumbs_49 = function(win) {
          if (void 0 === win) win = window;
          return {
            load: function(client) {
              if (!("addEventListener" in win)) return;
              if (!client._isBreadcrumbTypeEnabled("user")) return;
              win.addEventListener("click", (function(event) {
                var targetText, targetSelector;
                try {
                  targetText = getNodeText(event.target);
                  targetSelector = getNodeSelector(event.target, win);
                } catch (e) {
                  targetText = "[hidden]";
                  targetSelector = "[hidden]";
                  client._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z");
                }
                client.leaveBreadcrumb("UI click", {
                  targetText,
                  targetSelector
                }, "user");
              }), true);
            }
          };
        };
 // extract text content from a element
                var getNodeText = function(el) {
          var text = el.textContent || el.innerText || "";
          if (!text && ("submit" === el.type || "button" === el.type)) text = el.value;
          text = text.replace(/^\s+|\s+$/g, "");
 // trim whitespace
                    return truncate(text, 140);
        };
 // Create a label from tagname, id and css class of the element
                function getNodeSelector(el, win) {
          var parts = [ el.tagName ];
          if (el.id) parts.push("#" + el.id);
          if (el.className && el.className.length) parts.push("." + el.className.split(" ").join("."));
 // Can't get much more advanced with the current browser
                    if (!win.document.querySelectorAll || !Array.prototype.indexOf) return parts.join("");
          try {
            if (1 === win.document.querySelectorAll(parts.join("")).length) return parts.join("");
          } catch (e) {
            // Sometimes the query selector can be invalid just return it as-is
            return parts.join("");
          }
 // try to get a more specific selector if this one matches more than one element
                    if (el.parentNode.childNodes.length > 1) {
            var index = Array.prototype.indexOf.call(el.parentNode.childNodes, el) + 1;
            parts.push(":nth-child(" + index + ")");
          }
          if (1 === win.document.querySelectorAll(parts.join("")).length) return parts.join("");
 // try prepending the parent node selector
                    if (el.parentNode) return getNodeSelector(el.parentNode, win) + " > " + parts.join("");
          return parts.join("");
        }
        function truncate(value, length) {
          var ommision = "(...)";
          if (value && value.length <= length) return value;
          return value.slice(0, length - ommision.length) + ommision;
        }
        var _$navigationBreadcrumbs_50 = {};
        /*
* Leaves breadcrumbs when navigation methods are called or events are emitted
*/        _$navigationBreadcrumbs_50 = function(win) {
          if (void 0 === win) win = window;
          var plugin = {
            load: function(client) {
              if (!("addEventListener" in win)) return;
              if (!client._isBreadcrumbTypeEnabled("navigation")) return;
 // returns a function that will drop a breadcrumb with a given name
                            var drop = function(name) {
                return function() {
                  return client.leaveBreadcrumb(name, {}, "navigation");
                };
              };
 // simple drops – just names, no meta
                            win.addEventListener("pagehide", drop("Page hidden"), true);
              win.addEventListener("pageshow", drop("Page shown"), true);
              win.addEventListener("load", drop("Page loaded"), true);
              win.document.addEventListener("DOMContentLoaded", drop("DOMContentLoaded"), true);
 // some browsers like to emit popstate when the page loads, so only add the popstate listener after that
                            win.addEventListener("load", (function() {
                return win.addEventListener("popstate", drop("Navigated back"), true);
              }));
 // hashchange has some metadata that we care about
                            win.addEventListener("hashchange", (function(event) {
                var metadata = event.oldURL ? {
                  from: relativeLocation(event.oldURL, win),
                  to: relativeLocation(event.newURL, win),
                  state: getCurrentState(win)
                } : {
                  to: relativeLocation(win.location.href, win)
                };
                client.leaveBreadcrumb("Hash changed", metadata, "navigation");
              }), true);
 // the only way to know about replaceState/pushState is to wrap them… >_<
                            if (win.history.replaceState) wrapHistoryFn(client, win.history, "replaceState", win);
              if (win.history.pushState) wrapHistoryFn(client, win.history, "pushState", win);
            }
          };
          if (false) ;
          return plugin;
        };
        if (false) ;
 // takes a full url like http://foo.com:1234/pages/01.html?yes=no#section-2 and returns
        // just the path and hash parts, e.g. /pages/01.html?yes=no#section-2
                var relativeLocation = function(url, win) {
          var a = win.document.createElement("A");
          a.href = url;
          return "" + a.pathname + a.search + a.hash;
        };
        var stateChangeToMetadata = function(win, state, title, url) {
          var currentPath = relativeLocation(win.location.href, win);
          return {
            title,
            state,
            prevState: getCurrentState(win),
            to: url || currentPath,
            from: currentPath
          };
        };
        var wrapHistoryFn = function(client, target, fn, win) {
          var orig = target[fn];
          target[fn] = function(state, title, url) {
            client.leaveBreadcrumb("History " + fn, stateChangeToMetadata(win, state, title, url), "navigation");
 // if throttle plugin is in use, reset the event sent count
                        if ("function" === typeof client.resetEventCount) client.resetEventCount();
 // if the client is operating in auto session-mode, a new route should trigger a new session
                        if (client._config.autoTrackSessions) client.startSession();
 // Internet Explorer will convert `undefined` to a string when passed, causing an unintended redirect
            // to '/undefined'. therefore we only pass the url if it's not undefined.
                        orig.apply(target, [ state, title ].concat(void 0 !== url ? url : []));
          };
          if (false) ;
        };
        var getCurrentState = function(win) {
          try {
            return win.history.state;
          } catch (e) {}
        };
        var BREADCRUMB_TYPE = "request";
        /* removed: var _$includes_13 = require('@bugsnag/core/lib/es-utils/includes'); */        
        /*
 * Leaves breadcrumbs when network requests occur
 */
        var _$networkBreadcrumbs_51 = function(_ignoredUrls, win) {
          if (void 0 === _ignoredUrls) _ignoredUrls = [];
          if (void 0 === win) win = window;
          var plugin = {
            load: function(client) {
              if (!client._isBreadcrumbTypeEnabled("request")) return;
              var ignoredUrls = [ client._config.endpoints.notify, client._config.endpoints.sessions ].concat(_ignoredUrls);
              monkeyPatchXMLHttpRequest();
              monkeyPatchFetch();
 // XMLHttpRequest monkey patch
                            function monkeyPatchXMLHttpRequest() {
                if (!("addEventListener" in win.XMLHttpRequest.prototype)) return;
                var nativeOpen = win.XMLHttpRequest.prototype.open;
 // override native open()
                                win.XMLHttpRequest.prototype.open = function(method, url) {
                  var _this = this;
                  var requestSetupKey = false;
                  var error = function() {
                    return handleXHRError(method, url);
                  };
                  var load = function() {
                    return handleXHRLoad(method, url, _this.status);
                  };
 // if we have already setup listeners, it means open() was called twice, we need to remove
                  // the listeners and recreate them
                                    if (requestSetupKey) {
                    this.removeEventListener("load", load);
                    this.removeEventListener("error", error);
                  }
 // attach load event listener
                                    this.addEventListener("load", load);
 // attach error event listener
                                    this.addEventListener("error", error);
                  requestSetupKey = true;
                  nativeOpen.apply(this, arguments);
                };
                if (false) ;
              }
              function handleXHRLoad(method, url, status) {
                if (void 0 === url) {
                  client._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                  return;
                }
 // an XMLHttpRequest's URL can be an object as long as its 'toString'
                // returns a URL, e.g. a HTMLAnchorElement
                                if ("string" === typeof url && _$includes_13(ignoredUrls, url.replace(/\?.*$/, ""))) 
                // don't leave a network breadcrumb from bugsnag notify calls
                return;
                var metadata = {
                  status,
                  request: method + " " + url
                };
                if (status >= 400) 
                // contacted server but got an error response
                client.leaveBreadcrumb("XMLHttpRequest failed", metadata, BREADCRUMB_TYPE); else client.leaveBreadcrumb("XMLHttpRequest succeeded", metadata, BREADCRUMB_TYPE);
              }
              function handleXHRError(method, url) {
                if (void 0 === url) {
                  client._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                  return;
                }
                if ("string" === typeof url && _$includes_13(ignoredUrls, url.replace(/\?.*$/, ""))) 
                // don't leave a network breadcrumb from bugsnag notify calls
                return;
 // failed to contact server
                                client.leaveBreadcrumb("XMLHttpRequest error", {
                  request: method + " " + url
                }, BREADCRUMB_TYPE);
              }
 // window.fetch monkey patch
                            function monkeyPatchFetch() {
                // only patch it if it exists and if it is not a polyfill (patching a polyfilled
                // fetch() results in duplicate breadcrumbs for the same request because the
                // implementation uses XMLHttpRequest which is also patched)
                if (!("fetch" in win) || win.fetch.polyfill) return;
                var oldFetch = win.fetch;
                win.fetch = function() {
                  var _arguments = arguments;
                  var urlOrRequest = arguments[0];
                  var options = arguments[1];
                  var method;
                  var url = null;
                  if (urlOrRequest && "object" === typeof urlOrRequest) {
                    url = urlOrRequest.url;
                    if (options && "method" in options) method = options.method; else if (urlOrRequest && "method" in urlOrRequest) method = urlOrRequest.method;
                  } else {
                    url = urlOrRequest;
                    if (options && "method" in options) method = options.method;
                  }
                  if (void 0 === method) method = "GET";
                  return new Promise((function(resolve, reject) {
                    // pass through to native fetch
                    oldFetch.apply(void 0, _arguments).then((function(response) {
                      handleFetchSuccess(response, method, url);
                      resolve(response);
                    }))["catch"]((function(error) {
                      handleFetchError(method, url);
                      reject(error);
                    }));
                  }));
                };
                if (false) ;
              }
              var handleFetchSuccess = function(response, method, url) {
                var metadata = {
                  status: response.status,
                  request: method + " " + url
                };
                if (response.status >= 400) 
                // when the request comes back with a 4xx or 5xx status it does not reject the fetch promise,
                client.leaveBreadcrumb("fetch() failed", metadata, BREADCRUMB_TYPE); else client.leaveBreadcrumb("fetch() succeeded", metadata, BREADCRUMB_TYPE);
              };
              var handleFetchError = function(method, url) {
                client.leaveBreadcrumb("fetch() error", {
                  request: method + " " + url
                }, BREADCRUMB_TYPE);
              };
            }
          };
          if (false) ;
          return plugin;
        };
        /* removed: var _$intRange_24 = require('@bugsnag/core/lib/validators/int-range'); */        
        /*
 * Throttles and dedupes events
 */
        var _$throttle_52 = {
          load: function(client) {
            // track sent events for each init of the plugin
            var n = 0;
 // add onError hook
                        client.addOnError((function(event) {
              // have max events been sent already?
              if (n >= client._config.maxEvents) {
                client._logger.warn("Cancelling event send due to maxEvents per session limit of " + client._config.maxEvents + " being reached");
                return false;
              }
              n++;
            }));
            client.resetEventCount = function() {
              n = 0;
            };
          },
          configSchema: {
            maxEvents: {
              defaultValue: function() {
                return 10;
              },
              message: "should be a positive integer ≤100",
              validate: function(val) {
                return _$intRange_24(1, 100)(val);
              }
            }
          }
        };
        var _$stripQueryString_53 = {};
        /*
 * Remove query strings (and fragments) from stacktraces
 */
        /* removed: var _$map_16 = require('@bugsnag/core/lib/es-utils/map'); */        _$stripQueryString_53 = {
          load: function(client) {
            client.addOnError((function(event) {
              var allFrames = _$reduce_17(event.errors, (function(accum, er) {
                return accum.concat(er.stacktrace);
              }), []);
              _$map_16(allFrames, (function(frame) {
                frame.file = strip(frame.file);
              }));
            }));
          }
        };
        var strip = _$stripQueryString_53._strip = function(str) {
          return "string" === typeof str ? str.replace(/\?.*$/, "").replace(/#.*$/, "") : str;
        };
        /*
 * Automatically notifies Bugsnag when window.onerror is called
 */        var _$onerror_54 = function(win) {
          if (void 0 === win) win = window;
          return {
            load: function(client) {
              if (!client._config.autoDetectErrors) return;
              if (!client._config.enabledErrorTypes.unhandledExceptions) return;
              function onerror(messageOrEvent, url, lineNo, charNo, error) {
                // Ignore errors with no info due to CORS settings
                if (0 === lineNo && /Script error\.?/.test(messageOrEvent)) client._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z"); else {
                  // any error sent to window.onerror is unhandled and has severity=error
                  var handledState = {
                    severity: "error",
                    unhandled: true,
                    severityReason: {
                      type: "unhandledException"
                    }
                  };
                  var event;
 // window.onerror can be called in a number of ways. This big if-else is how we
                  // figure out which arguments were supplied, and what kind of values it received.
                                    if (error) {
                    // if the last parameter (error) was supplied, this is a modern browser's
                    // way of saying "this value was thrown and not caught"
                    event = client.Event.create(error, true, handledState, "window onerror", 1);
                    decorateStack(event.errors[0].stacktrace, url, lineNo, charNo);
                  } else if (// This complex case detects "error" events that are typically synthesised
                  // by jquery's trigger method (although can be created in other ways). In
                  // order to detect this:
                  // - the first argument (message) must exist and be an object (most likely it's a jQuery event)
                  // - the second argument (url) must either not exist or be something other than a string (if it
                  //    exists and is not a string, it'll be the extraParameters argument from jQuery's trigger()
                  //    function)
                  // - the third, fourth and fifth arguments must not exist (lineNo, charNo and error)
                  "object" === typeof messageOrEvent && null !== messageOrEvent && (!url || "string" !== typeof url) && !lineNo && !charNo && !error) {
                    // The jQuery event may have a "type" property, if so use it as part of the error message
                    var name = messageOrEvent.type ? "Event: " + messageOrEvent.type : "Error";
 // attempt to find a message from one of the conventional properties, but
                    // default to empty string (the event will fill it with a placeholder)
                                        var message = messageOrEvent.message || messageOrEvent.detail || "";
                    event = client.Event.create({
                      name,
                      message
                    }, true, handledState, "window onerror", 1);
 // provide the original thing onerror received – not our error-like object we passed to _notify
                                        event.originalError = messageOrEvent;
 // include the raw input as metadata – it might contain more info than we extracted
                                        event.addMetadata("window onerror", {
                      event: messageOrEvent,
                      extraParameters: url
                    });
                  } else {
                    // Lastly, if there was no "error" parameter this event was probably from an old
                    // browser that doesn't support that. Instead we need to generate a stacktrace.
                    event = client.Event.create(messageOrEvent, true, handledState, "window onerror", 1);
                    decorateStack(event.errors[0].stacktrace, url, lineNo, charNo);
                  }
                  client._notify(event);
                }
                if ("function" === typeof prevOnError) prevOnError.apply(this, arguments);
              }
              var prevOnError = win.onerror;
              win.onerror = onerror;
            }
          };
        };
 // Sometimes the stacktrace has less information than was passed to window.onerror.
        // This function will augment the first stackframe with any useful info that was
        // received as arguments to the onerror callback.
                var decorateStack = function(stack, url, lineNo, charNo) {
          if (!stack[0]) stack.push({});
          var culprit = stack[0];
          if (!culprit.file && "string" === typeof url) culprit.file = url;
          if (!culprit.lineNumber && isActualNumber(lineNo)) culprit.lineNumber = lineNo;
          if (!culprit.columnNumber) if (isActualNumber(charNo)) culprit.columnNumber = charNo; else if (window.event && isActualNumber(window.event.errorCharacter)) culprit.columnNumber = window.event.errorCharacter;
        };
        var isActualNumber = function(n) {
          return "number" === typeof n && "NaN" !== String.call(n);
        };
        /* removed: var _$map_16 = require('@bugsnag/core/lib/es-utils/map'); */        
        /*
 * Automatically notifies Bugsnag when window.onunhandledrejection is called
 */
        var _$unhandledRejection_55 = function(win) {
          if (void 0 === win) win = window;
          var plugin = {
            load: function(client) {
              if (!client._config.autoDetectErrors || !client._config.enabledErrorTypes.unhandledRejections) return;
              var listener = function(evt) {
                var error = evt.reason;
                var isBluebird = false;
 // accessing properties on evt.detail can throw errors (see #394)
                                try {
                  if (evt.detail && evt.detail.reason) {
                    error = evt.detail.reason;
                    isBluebird = true;
                  }
                } catch (e) {}
                var event = client.Event.create(error, false, {
                  severity: "error",
                  unhandled: true,
                  severityReason: {
                    type: "unhandledPromiseRejection"
                  }
                }, "unhandledrejection handler", 1, client._logger);
                if (isBluebird) _$map_16(event.errors[0].stacktrace, fixBluebirdStacktrace(error));
                client._notify(event, (function(event) {
                  if (_$iserror_20(event.originalError) && !event.originalError.stack) {
                    var _event$addMetadata;
                    event.addMetadata("unhandledRejection handler", (_event$addMetadata = {}, _event$addMetadata[Object.prototype.toString.call(event.originalError)] = {
                      name: event.originalError.name,
                      message: event.originalError.message,
                      code: event.originalError.code
                    }, _event$addMetadata));
                  }
                }));
              };
              if ("addEventListener" in win) win.addEventListener("unhandledrejection", listener); else win.onunhandledrejection = function(reason, promise) {
                listener({
                  detail: {
                    reason,
                    promise
                  }
                });
              };
              listener;
            }
          };
          if (false) ;
          return plugin;
        };
 // The stack parser on bluebird stacks in FF get a suprious first frame:
        
        // Error: derp
        //   b@http://localhost:5000/bluebird.html:22:24
        //   a@http://localhost:5000/bluebird.html:18:9
        //   @http://localhost:5000/bluebird.html:14:9
        
        // results in
        //   […]
        //     0: Object { file: "Error: derp", method: undefined, lineNumber: undefined, … }
        //     1: Object { file: "http://localhost:5000/bluebird.html", method: "b", lineNumber: 22, … }
        //     2: Object { file: "http://localhost:5000/bluebird.html", method: "a", lineNumber: 18, … }
        //     3: Object { file: "http://localhost:5000/bluebird.html", lineNumber: 14, columnNumber: 9, … }
        
        // so the following reduce/accumulator function removes such frames
        
        // Bluebird pads method names with spaces so trim that too…
        // https://github.com/petkaantonov/bluebird/blob/b7f21399816d02f979fe434585334ce901dcaf44/src/debuggability.js#L568-L571
                var fixBluebirdStacktrace = function(error) {
          return function(frame) {
            if (frame.file === error.toString()) return;
            if (frame.method) frame.method = frame.method.replace(/^\s+/, "");
          };
        };
        var _$notifier_2 = {};
        var name = "Bugsnag JavaScript";
        var version = "7.17.4";
        var url = "https://github.com/bugsnag/bugsnag-js";
        /* removed: var _$Client_4 = require('@bugsnag/core/client'); */        // extend the base config schema with some browser-specific options
        var __schema_2 = _$assign_11({}, _$config_5.schema, _$config_1);
        /* removed: var _$onerror_54 = require('@bugsnag/plugin-window-onerror'); */        var Bugsnag = {
          _client: null,
          createClient: function(opts) {
            // handle very simple use case where user supplies just the api key as a string
            if ("string" === typeof opts) opts = {
              apiKey: opts
            };
            if (!opts) opts = {};
            var internalPlugins = [ // add browser-specific plugins
            _$app_38, _$device_40(), _$context_39(), _$request_44(), _$throttle_52, _$session_45, _$clientIp_46, _$stripQueryString_53, _$onerror_54(), _$unhandledRejection_55(), _$navigationBreadcrumbs_50(), _$interactionBreadcrumbs_49(), _$networkBreadcrumbs_51(), _$consoleBreadcrumbs_47, // this one added last to avoid wrapping functionality before bugsnag uses it
            _$inlineScriptContent_48() ];
 // configure a client with user supplied options
                        var bugsnag = new _$Client_4(opts, __schema_2, internalPlugins, {
              name,
              version,
              url
            });
 // set delivery based on browser capability (IE 8+9 have an XDomainRequest object)
                        bugsnag._setDelivery(window.XDomainRequest ? _$delivery_36 : _$delivery_37);
            bugsnag._logger.debug("Loaded!");
            bugsnag.leaveBreadcrumb("Bugsnag loaded", {}, "state");
            return bugsnag._config.autoTrackSessions ? bugsnag.startSession() : bugsnag;
          },
          start: function(opts) {
            if (Bugsnag._client) {
              Bugsnag._client._logger.warn("Bugsnag.start() was called more than once. Ignoring.");
              return Bugsnag._client;
            }
            Bugsnag._client = Bugsnag.createClient(opts);
            return Bugsnag._client;
          },
          isStarted: function() {
            return null != Bugsnag._client;
          }
        };
        _$map_16([ "resetEventCount" ].concat(_$keys_15(_$Client_4.prototype)), (function(m) {
          if (/^_/.test(m)) return;
          Bugsnag[m] = function() {
            if (!Bugsnag._client) return console.log("Bugsnag." + m + "() was called before Bugsnag.start()");
            Bugsnag._client._depth += 1;
            var ret = Bugsnag._client[m].apply(Bugsnag._client, arguments);
            Bugsnag._client._depth -= 1;
            return ret;
          };
        }));
        _$notifier_2 = Bugsnag;
        _$notifier_2.Client = _$Client_4;
        _$notifier_2.Event = _$Event_6;
        _$notifier_2.Session = _$Session_35;
        _$notifier_2.Breadcrumb = _$Breadcrumb_3;
 // Export a "default" property for compatibility with ESM imports
                _$notifier_2["default"] = Bugsnag;
        return _$notifier_2;
      }));
      /***/    },
    /***/ 393: 
    /***/ function(__unused_webpack_module, exports) {
      !function(g, c) {
        true ? c(exports) : 0;
      }(0, (function(g) {
        const c = Symbol("newer"), e = Symbol("older");
        class n {
          constructor(a, b) {
            "number" !== typeof a && (b = a, a = 0), this.size = 0, this.limit = a, this.oldest = this.newest = void 0, 
            this._keymap = new Map, b && (this.assign(b), a < 1 && (this.limit = this.size));
          }
          _markEntryAsUsed(a) {
            if (a === this.newest) return;
            a[c] && (a === this.oldest && (this.oldest = a[c]), a[c][e] = a[e]), a[e] && (a[e][c] = a[c]), 
            a[c] = void 0, a[e] = this.newest, this.newest && (this.newest[c] = a), this.newest = a;
          }
          assign(a) {
            let b, d = this.limit || Number.MAX_VALUE;
            this._keymap.clear();
            let m = a[Symbol.iterator]();
            for (let h = m.next(); !h.done; h = m.next()) {
              let f = new l(h.value[0], h.value[1]);
              this._keymap.set(f.key, f), b ? (b[c] = f, f[e] = b) : this.oldest = f, b = f;
              if (0 == d--) throw new Error("overflow");
            }
            this.newest = b, this.size = this._keymap.size;
          }
          get(a) {
            var b = this._keymap.get(a);
            return b ? (this._markEntryAsUsed(b), b.value) : void 0;
          }
          set(a, b) {
            var d = this._keymap.get(a);
            return d ? (d.value = b, this._markEntryAsUsed(d), this) : (this._keymap.set(a, d = new l(a, b)), 
            this.newest ? (this.newest[c] = d, d[e] = this.newest) : this.oldest = d, this.newest = d, 
            ++this.size, this.size > this.limit && this.shift(), this);
          }
          shift() {
            var a = this.oldest;
            if (a) return this.oldest[c] ? (this.oldest = this.oldest[c], this.oldest[e] = void 0) : (this.oldest = void 0, 
            this.newest = void 0), a[c] = a[e] = void 0, this._keymap.delete(a.key), --this.size, 
            [ a.key, a.value ];
          }
          find(a) {
            let b = this._keymap.get(a);
            return b ? b.value : void 0;
          }
          has(a) {
            return this._keymap.has(a);
          }
          delete(a) {
            var b = this._keymap.get(a);
            return b ? (this._keymap.delete(b.key), b[c] && b[e] ? (b[e][c] = b[c], b[c][e] = b[e]) : b[c] ? (b[c][e] = void 0, 
            this.oldest = b[c]) : b[e] ? (b[e][c] = void 0, this.newest = b[e]) : this.oldest = this.newest = void 0, 
            this.size--, b.value) : void 0;
          }
          clear() {
            this.oldest = this.newest = void 0, this.size = 0, this._keymap.clear();
          }
          keys() {
            return new j(this.oldest);
          }
          values() {
            return new k(this.oldest);
          }
          entries() {
            return this;
          }
          [Symbol.iterator]() {
            return new i(this.oldest);
          }
          forEach(a, b) {
            "object" !== typeof b && (b = this);
            let d = this.oldest;
            for (;d; ) a.call(b, d.value, d.key, this), d = d[c];
          }
          toJSON() {
            for (var a = new Array(this.size), b = 0, d = this.oldest; d; ) a[b++] = {
              key: d.key,
              value: d.value
            }, d = d[c];
            return a;
          }
          toString() {
            for (var a = "", b = this.oldest; b; ) a += String(b.key) + ":" + b.value, b = b[c], 
            b && (a += " < ");
            return a;
          }
        }
        g.LRUMap = n;
        function l(a, b) {
          this.key = a, this.value = b, this[c] = void 0, this[e] = void 0;
        }
        function i(a) {
          this.entry = a;
        }
        i.prototype[Symbol.iterator] = function() {
          return this;
        }, i.prototype.next = function() {
          let a = this.entry;
          return a ? (this.entry = a[c], {
            done: !1,
            value: [ a.key, a.value ]
          }) : {
            done: !0,
            value: void 0
          };
        };
        function j(a) {
          this.entry = a;
        }
        j.prototype[Symbol.iterator] = function() {
          return this;
        }, j.prototype.next = function() {
          let a = this.entry;
          return a ? (this.entry = a[c], {
            done: !1,
            value: a.key
          }) : {
            done: !0,
            value: void 0
          };
        };
        function k(a) {
          this.entry = a;
        }
        k.prototype[Symbol.iterator] = function() {
          return this;
        }, k.prototype.next = function() {
          let a = this.entry;
          return a ? (this.entry = a[c], {
            done: !1,
            value: a.value
          }) : {
            done: !0,
            value: void 0
          };
        };
      }));
      /***/    },
    /***/ 739: 
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      "use strict";
      ({
        value: true
      });
      exports.browser = __webpack_require__(935);
      /***/    },
    /***/ 935: 
    /***/ function(module, exports) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      (function(global, factory) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ module ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        __WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
        void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else ;
      })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, (function(module) {
        /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */
        /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
        /* vim: set sts=2 sw=2 et tw=80: */
        /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
        "use strict";
        if ("undefined" === typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
 // Wrapping the bulk of this polyfill in a one-time-use function is a minor
          // optimization for Firefox. Since Spidermonkey does not fully parse the
          // contents of a function until the first time it's called, and since it will
          // never actually need to be called, this allows the polyfill to be included
          // in Firefox nearly for free.
                    const wrapAPIs = extensionAPIs => {
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: false
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: true
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (0 === Object.keys(apiMetadata).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) this.set(key, this.createItem(key));
                return super.get(key);
              }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */            const isThenable = value => value && "object" === typeof value && "function" === typeof value.then;
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */            const makeCallback = (promise, metadata) => (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message)); else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && false !== metadata.singleCallbackArg) promise.resolve(callbackArgs[0]); else promise.resolve(callbackArgs);
            };
            const pluralizeArguments = numArgs => 1 == numArgs ? "argument" : "arguments"
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */;
            const wrapAsyncFunction = (name, metadata) => function(target, ...args) {
              if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise(((resolve, reject) => {
                if (metadata.fallbackToNoCallback) 
                // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                // and so the polyfill will try to call it with a callback first, and it will fallback
                // to not passing the callback if the first call fails.
                try {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                } catch (cbError) {
                  console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                  target[name](...args);
 // Update the API method metadata, so that the next API calls will not try to
                  // use the unsupported callback anymore.
                                    metadata.fallbackToNoCallback = false;
                  metadata.noCallback = true;
                  resolve();
                } else if (metadata.noCallback) {
                  target[name](...args);
                  resolve();
                } else target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              }));
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */            const wrapMethod = (target, method, wrapper) => new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = Object.create(null);
              let handlers = {
                has(proxyTarget, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget, prop, receiver) {
                  if (prop in cache) return cache[prop];
                  if (!(prop in target)) return;
                  let value = target[prop];
                  if ("function" === typeof value) 
                  // This is a method on the underlying object. Check if we need to do
                  // any wrapping.
                  if ("function" === typeof wrappers[prop]) 
                  // We have a special-case wrapper for this method.
                  value = wrapMethod(target, target[prop], wrappers[prop]); else if (hasOwnProperty(metadata, prop)) {
                    // This is an async method that we have metadata for. Create a
                    // Promise wrapper for it.
                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                    value = wrapMethod(target, target[prop], wrapper);
                  } else 
                  // This is a method that we don't know or care about. Return the
                  // original method, bound to the underlying object.
                  value = value.bind(target); else if ("object" === typeof value && null !== value && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) 
                  // This is an object that we need to do some wrapping for the children
                  // of. Create a sub-object wrapper for it with the appropriate child
                  // metadata.
                  value = wrapObject(value, wrappers[prop], metadata[prop]); else if (hasOwnProperty(metadata, "*")) 
                  // Wrap all properties in * namespace.
                  value = wrapObject(value, wrappers[prop], metadata["*"]); else {
                    // We don't need to do any wrapping for this property,
                    // so just forward all access to the underlying object.
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value) {
                        target[prop] = value;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget, prop, value, receiver) {
                  if (prop in cache) cache[prop] = value; else target[prop] = value;
                  return true;
                },
                defineProperty(proxyTarget, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
 // Per contract of the Proxy API, the "get" proxy handler must return the
              // original value of the target if that value is declared read-only and
              // non-configurable. For this reason, we create an object with the
              // prototype set to `target` instead of using `target` directly.
              // Otherwise we cannot return a custom object for APIs that
              // are declared read-only and non-configurable, such as `chrome.devtools`.
              
              // The proxy handlers themselves will still use the original `target`
              // instead of the `proxyTarget`, so that the methods and properties are
              // dereferenced via the original targets.
                            let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */            const wrapEvent = wrapperMap => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener => {
              if ("function" !== typeof listener) return listener;
              /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */              return function(req) {
                const wrappedReq = wrapObject(req, {}
                /* wrappers */ , {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            }));
 // Keep track if the deprecation warning has been logged at least once.
                        let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener => {
              if ("function" !== typeof listener) return listener;
              /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */              return function(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve => {
                  wrappedSendResponse = function(response) {
                    if (!loggedSendResponseDeprecationWarning) {
                      console.warn(SEND_RESPONSE_DEPRECATION_WARNING, (new Error).stack);
                      loggedSendResponseDeprecationWarning = true;
                    }
                    didCallSendResponse = true;
                    resolve(response);
                  };
                }));
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = true !== result && isThenable(result);
 // If the listener didn't returned true or a Promise, or called
                // wrappedSendResponse synchronously, we can exit earlier
                // because there will be no response sent from this listener.
                                if (true !== result && !isResultThenable && !didCallSendResponse) return false;
 // A small helper to send the message if the promise resolves
                // and an error if the promise rejects (a wrapped sendMessage has
                // to translate the message into a resolved promise or a rejected
                // promise).
                                const sendPromisedResult = promise => {
                  promise.then((msg => {
                    // send the message value.
                    sendResponse(msg);
                  }), (error => {
                    // Send a JSON representation of the error if the rejected value
                    // is an instance of error, or the object itself otherwise.
                    let message;
                    if (error && (error instanceof Error || "string" === typeof error.message)) message = error.message; else message = "An unexpected error occurred";
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message
                    });
                  })).catch((err => {
                    // Print an error on the console if unable to send the response.
                    console.error("Failed to send onMessage rejected reply", err);
                  }));
                };
 // If the listener returned a Promise, send the resolved value as a
                // result, otherwise wait the promise related to the wrappedSendResponse
                // callback to resolve and send it as a response.
                                if (isResultThenable) sendPromisedResult(result); else sendPromisedResult(sendResponsePromise);
 // Let Chrome know that the listener is replying.
                                return true;
              };
            }));
            const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
              if (extensionAPIs.runtime.lastError) 
              // Detect when none of the listeners replied to the sendMessage call and resolve
              // the promise to undefined as in Firefox.
              // See https://github.com/mozilla/webextension-polyfill/issues/130
              if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve(); else reject(new Error(extensionAPIs.runtime.lastError.message)); else if (reply && reply.__mozWebExtensionPolyfillReject__) 
              // Convert back the JSON representation of the error into
              // an Error instance.
              reject(new Error(reply.message)); else resolve(reply);
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise(((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              }));
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
 // The build process adds a UMD wrapper around this file, which makes the
          // `module` variable available.
                    module.exports = wrapAPIs(chrome);
        } else module.exports = browser;
      }));
      /***/    }
    /******/  };
  /************************************************************************/
  /******/ // The module cache
  /******/  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/    if (void 0 !== cachedModule) 
    /******/ return cachedModule.exports;
    /******/
    /******/ // Create a new module (and put it into the cache)
    /******/    var module = __webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/    };
    /******/
    /******/ // Execute the module function
    /******/    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/    return module.exports;
    /******/  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = module => {
      /******/ var getter = module && module.__esModule ? 
      /******/ () => module["default"]
      /******/ : () => module
      /******/;
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/      return getter;
      /******/    };
    /******/  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/  (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) 
      /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) 
      /******/ Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
      /******/
      /******/
      /******/    };
    /******/  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/  (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/;
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/  (() => {
    /******/ __webpack_require__.p = "/";
    /******/  })();
  /******/
  /************************************************************************/  
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    // CONCATENATED MODULE: ./manifest.json.src
    /* harmony default export */ __webpack_require__.p;
    // EXTERNAL MODULE: ./node_modules/@birchill/json-equalish/dist/index.js
        __webpack_require__(666);
    // CONCATENATED MODULE: ./node_modules/@birchill/jpdict-idb/node_modules/superstruct/lib/index.es.js
    /**
 * A `StructFailure` represents a single specific failure in validation.
 */
    /**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */
    class StructError extends TypeError {
      constructor(failure, failures) {
        let cached;
        const {message, ...rest} = failure;
        const {path} = failure;
        const msg = 0 === path.length ? message : "At path: " + path.join(".") + " -- " + message;
        super(msg);
        this.value = void 0;
        this.key = void 0;
        this.type = void 0;
        this.refinement = void 0;
        this.path = void 0;
        this.branch = void 0;
        this.failures = void 0;
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = () => {
          var _cached;
          return null != (_cached = cached) ? _cached : cached = [ failure, ...failures() ];
        };
      }
    }
    /**
 * Check if a value is an iterator.
 */    function isIterable(x) {
      return isObject(x) && "function" === typeof x[Symbol.iterator];
    }
    /**
 * Check if a value is a plain object.
 */    function isObject(x) {
      return "object" === typeof x && null != x;
    }
    /**
 * Check if a value is a plain object.
 */    
    /**
 * Return a value as a printable string.
 */
    function print(value) {
      return "string" === typeof value ? JSON.stringify(value) : "" + value;
    }
    /**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */    function shiftIterator(input) {
      const {done, value} = input.next();
      return done ? void 0 : value;
    }
    /**
 * Convert a single validation result to a failure.
 */    function toFailure(result, context, struct, value) {
      if (true === result) return; else if (false === result) result = {}; else if ("string" === typeof result) result = {
        message: result
      };
      const {path, branch} = context;
      const {type} = struct;
      const {refinement, message = "Expected a value of type `" + type + "`" + (refinement ? " with refinement `" + refinement + "`" : "") + ", but received: `" + print(value) + "`"} = result;
      return {
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch,
        ...result,
        message
      };
    }
    /**
 * Convert a validation result to an iterable of failures.
 */    function* toFailures(result, context, struct, value) {
      if (!isIterable(result)) result = [ result ];
      for (const r of result) {
        const failure = toFailure(r, context, struct, value);
        if (failure) yield failure;
      }
    }
    /**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */    function* run(value, struct, options) {
      if (void 0 === options) options = {};
      const {path = [], branch = [ value ], coerce = false, mask = false} = options;
      const ctx = {
        path,
        branch
      };
      if (coerce) {
        value = struct.coercer(value, ctx);
        if (mask && "type" !== struct.type && isObject(struct.schema) && isObject(value) && !Array.isArray(value)) for (const key in value) if (void 0 === struct.schema[key]) delete value[key];
      }
      let status = "valid";
      for (const failure of struct.validator(value, ctx)) {
        status = "not_valid";
        yield [ failure, void 0 ];
      }
      for (let [k, v, s] of struct.entries(value, ctx)) {
        const ts = run(v, s, {
          path: void 0 === k ? path : [ ...path, k ],
          branch: void 0 === k ? branch : [ ...branch, v ],
          coerce,
          mask
        });
        for (const t of ts) if (t[0]) {
          status = null != t[0].refinement ? "not_refined" : "not_valid";
          yield [ t[0], void 0 ];
        } else if (coerce) {
          v = t[1];
          if (void 0 === k) value = v; else if (value instanceof Map) value.set(k, v); else if (value instanceof Set) value.add(v); else if (isObject(value)) value[k] = v;
        }
      }
      if ("not_valid" !== status) for (const failure of struct.refiner(value, ctx)) {
        status = "not_refined";
        yield [ failure, void 0 ];
      }
      if ("valid" === status) yield [ void 0, value ];
    }
    /**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */    class Struct {
      constructor(props) {
        this.TYPE = void 0;
        this.type = void 0;
        this.schema = void 0;
        this.coercer = void 0;
        this.validator = void 0;
        this.refiner = void 0;
        this.entries = void 0;
        const {type, schema, validator, refiner, coercer = value => value, entries = function*() {}} = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) this.validator = (value, context) => {
          const result = validator(value, context);
          return toFailures(result, context, this, value);
        }; else this.validator = () => [];
        if (refiner) this.refiner = (value, context) => {
          const result = refiner(value, context);
          return toFailures(result, context, this, value);
        }; else this.refiner = () => [];
      }
      /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */      assert(value) {
        return assert(value, this);
      }
      /**
   * Create a value with the struct's coercion logic, then validate it.
   */      create(value) {
        return create(value, this);
      }
      /**
   * Check if a value passes the struct's validation.
   */      is(value) {
        return is(value, this);
      }
      /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */      mask(value) {
        return mask(value, this);
      }
      /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */      validate(value, options) {
        if (void 0 === options) options = {};
        return validate(value, this, options);
      }
    }
    /**
 * Assert that a value passes a struct, throwing if it doesn't.
 */    function assert(value, struct) {
      const result = validate(value, struct);
      if (result[0]) throw result[0];
    }
    /**
 * Create a value with the coercion logic of struct and validate it.
 */    function create(value, struct) {
      const result = validate(value, struct, {
        coerce: true
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Mask a value, returning only the subset of properties defined by a struct.
 */    function mask(value, struct) {
      const result = validate(value, struct, {
        coerce: true,
        mask: true
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Check if a value passes a struct.
 */    function is(value, struct) {
      const result = validate(value, struct);
      return !result[0];
    }
    /**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */    function validate(value, struct, options) {
      if (void 0 === options) options = {};
      const tuples = run(value, struct, options);
      const tuple = shiftIterator(tuples);
      if (tuple[0]) {
        const error = new StructError(tuple[0], (function*() {
          for (const t of tuples) if (t[0]) yield t[0];
        }));
        return [ error, void 0 ];
      } else {
        const v = tuple[1];
        return [ void 0, v ];
      }
    }
    /**
 * Define a new struct type with a custom validation function.
 */
    function index_es_define(name, validator) {
      return new Struct({
        type: name,
        schema: null,
        validator
      });
    }
    /**
 * Create a new struct based on an existing struct, but the value is allowed to
 * be `undefined`. `log` will be called if the value is not `undefined`.
 */    function array(Element) {
      return new Struct({
        type: "array",
        schema: Element,
        * entries(value) {
          if (Element && Array.isArray(value)) for (const [i, v] of value.entries()) yield [ i, v, Element ];
        },
        coercer(value) {
          return Array.isArray(value) ? value.slice() : value;
        },
        validator(value) {
          return Array.isArray(value) || "Expected an array value, but received: " + print(value);
        }
      });
    }
    /**
 * Ensure that a value is a bigint.
 */    function enums(values) {
      const schema = {};
      const description = values.map((v => print(v))).join();
      for (const key of values) schema[key] = key;
      return new Struct({
        type: "enums",
        schema,
        validator(value) {
          return values.includes(value) || "Expected one of `" + description + "`, but received: " + print(value);
        }
      });
    }
    /**
 * Ensure that a value is a function.
 */    
    /**
 * Ensure that a value is an integer.
 */
    function integer() {
      return index_es_define("integer", (value => "number" === typeof value && !isNaN(value) && Number.isInteger(value) || "Expected an integer, but received: " + print(value)));
    }
    /**
 * Ensure that a value matches all of a set of types.
 */    function literal(constant) {
      const description = print(constant);
      const t = typeof constant;
      return new Struct({
        type: "literal",
        schema: "string" === t || "number" === t || "boolean" === t ? constant : null,
        validator(value) {
          return value === constant || "Expected the literal `" + description + "`, but received: " + print(value);
        }
      });
    }
    /**
 * Ensure that a value is a number.
 */
    function number() {
      return index_es_define("number", (value => "number" === typeof value && !isNaN(value) || "Expected a number, but received: " + print(value)));
    }
    /**
 * Augment a struct to allow `undefined` values.
 */
    function optional(struct) {
      return new Struct({
        ...struct,
        validator: (value, ctx) => void 0 === value || struct.validator(value, ctx),
        refiner: (value, ctx) => void 0 === value || struct.refiner(value, ctx)
      });
    }
    /**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */    function record(Key, Value) {
      return new Struct({
        type: "record",
        schema: null,
        * entries(value) {
          if (isObject(value)) for (const k in value) {
            const v = value[k];
            yield [ k, k, Key ];
            yield [ k, v, Value ];
          }
        },
        validator(value) {
          return isObject(value) || "Expected an object, but received: " + print(value);
        }
      });
    }
    /**
 * Ensure that a value is a `RegExp`.
 *
 * Note: this does not test the value against the regular expression! For that
 * you need to use the `pattern()` refinement.
 */    
    /**
 * Ensure that a value is a string.
 */
    function string() {
      return index_es_define("string", (value => "string" === typeof value || "Expected a string, but received: " + print(value)));
    }
    /**
 * Ensure that a value is a tuple of a specific length, and that each of its
 * elements is of a specific type.
 */    
    /**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */
    function type(schema) {
      const keys = Object.keys(schema);
      return new Struct({
        type: "type",
        schema,
        * entries(value) {
          if (isObject(value)) for (const k of keys) yield [ k, value[k], schema[k] ];
        },
        validator(value) {
          return isObject(value) || "Expected an object, but received: " + print(value);
        }
      });
    }
    /**
 * Ensure that a value matches one of a set of types.
 */    function union(Structs) {
      const description = Structs.map((s => s.type)).join(" | ");
      return new Struct({
        type: "union",
        schema: null,
        coercer(value, ctx) {
          const firstMatch = Structs.find((s => {
            const [e] = s.validate(value, {
              coerce: true
            });
            return !e;
          })) || unknown();
          return firstMatch.coercer(value, ctx);
        },
        validator(value, ctx) {
          const failures = [];
          for (const S of Structs) {
            const [...tuples] = run(value, S, ctx);
            const [first] = tuples;
            if (!first[0]) return []; else for (const [failure] of tuples) if (failure) failures.push(failure);
          }
          return [ "Expected the value to satisfy a union of `" + description + "`, but received: " + print(value), ...failures ];
        }
      });
    }
    /**
 * Ensure that any value passes validation, without widening its type to `any`.
 */    function unknown() {
      return index_es_define("unknown", (() => true));
    }
    /**
 * Augment a `Struct` to add an additional coercion step to its input.
 *
 * This allows you to transform input data before validating it, to increase the
 * likelihood that it passes validation—for example for default values, parsing
 * different formats, etc.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */    function getSize(value) {
      if (value instanceof Map || value instanceof Set) return value.size; else return value.length;
    }
    /**
 * Ensure that a number or date is below a threshold.
 */    
    /**
 * Ensure that a number or date is above a threshold.
 */
    function min(struct, threshold, options) {
      if (void 0 === options) options = {};
      const {exclusive} = options;
      return refine(struct, "min", (value => exclusive ? value > threshold : value >= threshold || "Expected a " + struct.type + " greater than " + (exclusive ? "" : "or equal to ") + threshold + " but received `" + value + "`"));
    }
    /**
 * Ensure that a string, array, map or set is not empty.
 */    function nonempty(struct) {
      return refine(struct, "nonempty", (value => {
        const size = getSize(value);
        return size > 0 || "Expected a nonempty " + struct.type + " but received an empty one";
      }));
    }
    /**
 * Ensure that a string matches a regular expression.
 */    
    /**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */
    function refine(struct, name, refiner) {
      return new Struct({
        ...struct,
        * refiner(value, ctx) {
          yield* struct.refiner(value, ctx);
          const result = refiner(value, ctx);
          const failures = toFailures(result, ctx, struct, value);
          for (const failure of failures) yield {
            ...failure,
            refinement: name
          };
        }
      });
    }
    // CONCATENATED MODULE: ./node_modules/idb/build/wrap-idb-value.js
    const instanceOfAny = (object, constructors) => constructors.some((c => object instanceof c));
    let idbProxyableTypes;
    let cursorAdvanceMethods;
    // This is a function to prevent it throwing up in node environments.
        function getIdbProxyableTypes() {
      return idbProxyableTypes || (idbProxyableTypes = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]);
    }
    // This is a function to prevent it throwing up in node environments.
        function getCursorAdvanceMethods() {
      return cursorAdvanceMethods || (cursorAdvanceMethods = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ]);
    }
    const cursorRequestMap = new WeakMap;
    const transactionDoneMap = new WeakMap;
    const transactionStoreNamesMap = new WeakMap;
    const transformCache = new WeakMap;
    const reverseTransformCache = new WeakMap;
    function promisifyRequest(request) {
      const promise = new Promise(((resolve, reject) => {
        const unlisten = () => {
          request.removeEventListener("success", success);
          request.removeEventListener("error", error);
        };
        const success = () => {
          resolve(wrap_idb_value_wrap(request.result));
          unlisten();
        };
        const error = () => {
          reject(request.error);
          unlisten();
        };
        request.addEventListener("success", success);
        request.addEventListener("error", error);
      }));
      promise.then((value => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) cursorRequestMap.set(value, request);
        // Catching to avoid "Uncaught Promise exceptions"
            })).catch((() => {}));
      // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
      // is because we create many promises from a single IDBRequest.
            reverseTransformCache.set(promise, request);
      return promise;
    }
    function cacheDonePromiseForTransaction(tx) {
      // Early bail if we've already created a done promise for this transaction.
      if (transactionDoneMap.has(tx)) return;
      const done = new Promise(((resolve, reject) => {
        const unlisten = () => {
          tx.removeEventListener("complete", complete);
          tx.removeEventListener("error", error);
          tx.removeEventListener("abort", error);
        };
        const complete = () => {
          resolve();
          unlisten();
        };
        const error = () => {
          reject(tx.error || new DOMException("AbortError", "AbortError"));
          unlisten();
        };
        tx.addEventListener("complete", complete);
        tx.addEventListener("error", error);
        tx.addEventListener("abort", error);
      }));
      // Cache it for later retrieval.
            transactionDoneMap.set(tx, done);
    }
    let idbProxyTraps = {
      get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
          // Special handling for transaction.done.
          if ("done" === prop) return transactionDoneMap.get(target);
          // Polyfill for objectStoreNames because of Edge.
                    if ("objectStoreNames" === prop) return target.objectStoreNames || transactionStoreNamesMap.get(target);
          // Make tx.store return the only store in the transaction, or undefined if there are many.
                    if ("store" === prop) return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
        // Else transform whatever we get back.
                return wrap_idb_value_wrap(target[prop]);
      },
      set(target, prop, value) {
        target[prop] = value;
        return true;
      },
      has(target, prop) {
        if (target instanceof IDBTransaction && ("done" === prop || "store" === prop)) return true;
        return prop in target;
      }
    };
    function replaceTraps(callback) {
      idbProxyTraps = callback(idbProxyTraps);
    }
    function wrapFunction(func) {
      // Due to expected object equality (which is enforced by the caching in `wrap`), we
      // only create one new func per func.
      // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
      if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [ storeNames ]);
        return wrap_idb_value_wrap(tx);
      };
      // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
      // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
      // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
      // with real promises, so each advance methods returns a new promise for the cursor object, or
      // undefined if the end of the cursor has been reached.
            if (getCursorAdvanceMethods().includes(func)) return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        func.apply(unwrap(this), args);
        return wrap_idb_value_wrap(cursorRequestMap.get(this));
      };
      return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap_idb_value_wrap(func.apply(unwrap(this), args));
      };
    }
    function transformCachableValue(value) {
      if ("function" === typeof value) return wrapFunction(value);
      // This doesn't return, it just creates a 'done' promise for the transaction,
      // which is later returned for transaction.done (see idbObjectHandler).
            if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
      if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
      // Return the same value back if we're not going to transform it.
            return value;
    }
    function wrap_idb_value_wrap(value) {
      // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
      // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
      if (value instanceof IDBRequest) return promisifyRequest(value);
      // If we've already transformed this value before, reuse the transformed value.
      // This is faster, but it also provides object equality.
            if (transformCache.has(value)) return transformCache.get(value);
      const newValue = transformCachableValue(value);
      // Not all types are transformed.
      // These may be primitive types, so they can't be WeakMap keys.
            if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
      }
      return newValue;
    }
    const unwrap = value => reverseTransformCache.get(value);
    // CONCATENATED MODULE: ./node_modules/idb/build/index.js
    /**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
    function build_openDB(name, version, {blocked, upgrade, blocking, terminated} = {}) {
      const request = indexedDB.open(name, version);
      const openPromise = wrap_idb_value_wrap(request);
      if (upgrade) request.addEventListener("upgradeneeded", (event => {
        upgrade(wrap_idb_value_wrap(request.result), event.oldVersion, event.newVersion, wrap_idb_value_wrap(request.transaction));
      }));
      if (blocked) request.addEventListener("blocked", (() => blocked()));
      openPromise.then((db => {
        if (terminated) db.addEventListener("close", (() => terminated()));
        if (blocking) db.addEventListener("versionchange", (() => blocking()));
      })).catch((() => {}));
      return openPromise;
    }
    /**
 * Delete a database.
 *
 * @param name Name of the database.
 */    const readMethods = [ "get", "getKey", "getAll", "getAllKeys", "count" ];
    const writeMethods = [ "put", "add", "delete", "clear" ];
    const cachedMethods = new Map;
    function getMethod(target, prop) {
      if (!(target instanceof IDBDatabase && !(prop in target) && "string" === typeof prop)) return;
      if (cachedMethods.get(prop)) return cachedMethods.get(prop);
      const targetFuncName = prop.replace(/FromIndex$/, "");
      const useIndex = prop !== targetFuncName;
      const isWrite = writeMethods.includes(targetFuncName);
      if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
      const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
                return (await Promise.all([ target[targetFuncName](...args), isWrite && tx.done ]))[0];
      };
      cachedMethods.set(prop, method);
      return method;
    }
    replaceTraps((oldTraps => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
    })));
    // CONCATENATED MODULE: ./node_modules/idb/build/async-iterators.js
    const advanceMethodProps = [ "continue", "continuePrimaryKey", "advance" ];
    const methodMap = {};
    const advanceResults = new WeakMap;
    const ittrProxiedCursorToOriginalProxy = new WeakMap;
    const cursorIteratorTraps = {
      get(target, prop) {
        if (!advanceMethodProps.includes(prop)) return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) cachedFunc = methodMap[prop] = function(...args) {
          advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
        };
        return cachedFunc;
      }
    };
    async function* iterate(...args) {
      // tslint:disable-next-line:no-this-assignment
      let cursor = this;
      if (!(cursor instanceof IDBCursor)) cursor = await cursor.openCursor(...args);
      if (!cursor) return;
      cursor;
      const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
      ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
      // Map this double-proxy back to the original, so other cursor methods work.
            reverseTransformCache.set(proxiedCursor, unwrap(cursor));
      while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
                cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
      }
    }
    function isIteratorProp(target, prop) {
      return prop === Symbol.asyncIterator && instanceOfAny(target, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === prop && instanceOfAny(target, [ IDBIndex, IDBObjectStore ]);
    }
    replaceTraps((oldTraps => ({
      ...oldTraps,
      get(target, prop, receiver) {
        if (isIteratorProp(target, prop)) return iterate;
        return oldTraps.get(target, prop, receiver);
      },
      has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
      }
    })));
    // CONCATENATED MODULE: ./node_modules/safari-14-idb-fix/dist/index.js
    /**
 * Work around Safari 14 IndexedDB open bug.
 *
 * Safari has a horrible bug where IDB requests can hang while the browser is starting up. https://bugs.webkit.org/show_bug.cgi?id=226547
 * The only solution is to keep nudging it until it's awake.
 */
    function dist_idbReady() {
      var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
      // No point putting other browsers or older versions of Safari through this mess.
            if (!isSafari || !indexedDB.databases) return Promise.resolve();
      var intervalId;
      return new Promise((function(resolve) {
        var tryIdb = function() {
          return indexedDB.databases().finally(resolve);
        };
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
      })).finally((function() {
        return clearInterval(intervalId);
      }));
    }
    /* harmony default export */    const safari_14_idb_fix_dist = dist_idbReady;
    // CONCATENATED MODULE: ./node_modules/@birchill/normal-jp/dist/esm/expand-choon.js
    /**
 * Expands the ー character to equivalent kana.
 *
 * Note that for some combinations there are multiple possible expansions.
 * e.g. カオー could be カオウ but オーサカ is オオサカ.
 *
 * (Technically, ー represents an extended vowel sound and オオ is actually
 * pronounced _differently_ to オウ, as two separate sounds, but people still
 * write オーサカ so we should recognize it.)
 *
 * This function returns an empty array if the input string contains no
 * ー characters.
 */
    function expandChoon(input) {
      if (-1 === input.indexOf("ー")) return [];
      const replacer = vowel => (match, start) => `${start}${vowel.repeat(match.length - 1)}`
      // Expand the simple cases
      ;
      const initialResult = input.replace(/([うくぐすずつづぬふぶぷむゆゅる])ー+/g, replacer("う")).replace(/([ウクグスズツヅヌフブプムユュル])ー+/g, replacer("ウ")).replace(/([あかがさざただなはばぱまやゃらわ])ー+/g, replacer("あ")).replace(/([アカガサザタダナハバパマヤャラワ])ー+/g, replacer("ア")).replace(/([いきぎしじちぢにひびぴみり])ー+/g, replacer("い")).replace(/([イキギシジチヂニイブピミリ])ー+/g, replacer("イ")).replace(/([えけげせぜてでねへべぺめれ])ー+/g, replacer("え")).replace(/([エケゲセゼテデネヘベペメレ])ー+/g, replacer("エ"));
      // Now generate a result for each possible expansion of お・う
            const result = [];
      const matchO = /([おこごそぞとどのほぼぽもよょろを])ー+/;
      const matchKatakanaO = /([オコゴソゾトドノホボポモヨョロヲ])ー+/;
      const expandO = base => {
        let expandedWithU = base.replace(matchO, replacer("う"));
        if (expandedWithU === base) expandedWithU = base.replace(matchKatakanaO, replacer("ウ"));
        // If there have been no changes, then there are no more substitutions to
        // make for this string.
                if (expandedWithU === base) {
          // Check that there is _some_ change from the original input, however.
          if (base !== input) result.push(expandedWithU);
          return;
        }
        // Continue expanding with this base
                expandO(expandedWithU);
        // Also, in "parallel", try expanding using お・オ
                let expandedWithO = base.replace(matchO, replacer("お"));
        if (expandedWithO === base) expandedWithO = base.replace(matchKatakanaO, replacer("オ"));
        expandO(expandedWithO);
      };
      expandO(initialResult);
      return result;
    }
    // CONCATENATED MODULE: ./node_modules/@birchill/normal-jp/dist/esm/kana-to-hiragana.js
    function kana_to_hiragana_kanaToHiragana(input) {
      let result = "";
      for (const char of input) {
        let c = char.codePointAt(0);
        if (c >= 0x30a1 && c <= 0x30f6 || 0x30fd === c || 0x30fe === c) c -= 0x60;
        result += String.fromCodePoint(c);
      }
      return result;
    }
    // CONCATENATED MODULE: ./node_modules/@birchill/normal-jp/dist/esm/kyuujitai.js
    /**
 * Converts various 旧字体 (kyuujitai, old character forms) to 新字体
 * (shinjitai, new character forms).
 *
 * Based on the data in https://en.wikipedia.org/wiki/Kyūjitai but does not
 * handle kyuujitai represented using variation selectors since these are
 * stripped by `toNormalized`.
 */
    function kyuujitaiToShinjitai(input) {
      const inputCodePoints = [ ...input ].map((c => c.codePointAt(0)));
      const outputCodePoints = [];
      for (const c of inputCodePoints) outputCodePoints.push(KYUU_TO_SHIN[c] || c);
      return String.fromCodePoint(...outputCodePoints);
    }
    const KYUU_TO_SHIN = {
      20056: 20055,
      20098: 20081,
      20121: 20120,
      20126: 20124,
      20315: 20175,
      20358: 26469,
      20482: 20341,
      20551: 20206,
      20659: 20253,
      20702: 20605,
      20729: 20385,
      20745: 20537,
      20818: 20816,
      20841: 20001,
      20904: 23500,
      20937: 28092,
      20955: 20956,
      21097: 21104,
      21133: 21091,
      21137: 21092,
      21214: 21172,
      21235: 21234,
      21237: 21169,
      21240: 21223,
      21312: 21306,
      21367: 24059,
      21373: 21363,
      21443: 21442,
      21854: 21782,
      21934: 21336,
      22169: 22107,
      22196: 21427,
      22225: 22065,
      22280: 22287,
      22283: 22269,
      22285: 22258,
      22291: 20870,
      22294: 22259,
      22296: 22243,
      22492: 37326,
      22575: 23597,
      22686: 22679,
      22702: 22549,
      22739: 22311,
      22744: 22593,
      22750: 22730,
      22756: 22732,
      22767: 22766,
      22777: 22769,
      22781: 23551,
      22887: 22885,
      22892: 22888,
      23363: 23330,
      23416: 23398,
      23522: 23517,
      23526: 23455,
      23531: 20889,
      23532: 23515,
      23542: 23453,
      23559: 23558,
      23560: 23554,
      23565: 23550,
      23622: 23626,
      23643: 23631,
      23660: 23646,
      23791: 23792,
      23805: 23777,
      23947: 23798,
      23997: 23731,
      24022: 24012,
      24034: 24035,
      24118: 24111,
      24183: 24182,
      24290: 24259,
      24291: 24195,
      24307: 24193,
      24392: 24382,
      24396: 24357,
      24398: 24367,
      24465: 24452,
      24478: 24467,
      24501: 24500,
      24503: 24499,
      24646: 24658,
      24800: 24693,
      24801: 24746,
      24817: 24745,
      24892: 24910,
      24920: 24808,
      25033: 24540,
      25079: 25040,
      25088: 24651,
      25136: 25126,
      25138: 25135,
      25150: 25147,
      25282: 25173,
      25300: 25244,
      25308: 25309,
      25406: 25375,
      25554: 25407,
      25581: 25522,
      25620: 25531,
      25622: 25594,
      25628: 25436,
      25799: 25246,
      25802: 25731,
      25812: 25285,
      25818: 25312,
      25831: 25369,
      25844: 25313,
      25885: 25666,
      25898: 25785,
      25910: 21454,
      25928: 21177,
      25933: 21465,
      25941: 21189,
      25976: 25968,
      26039: 26029,
      26180: 26179,
      26202: 26217,
      26205: 26172,
      26310: 26278,
      26313: 26241,
      26366: 26365,
      26371: 20250,
      26781: 26465,
      26855: 26719,
      27054: 26628,
      27079: 27097,
      27114: 27010,
      27138: 27005,
      27155: 27004,
      27166: 26530,
      27171: 27096,
      27243: 27178,
      27292: 26727,
      27298: 26908,
      27387: 26716,
      27402: 27177,
      27472: 27431,
      27489: 27475,
      27493: 27497,
      27511: 27508,
      27512: 24112,
      27544: 27531,
      27580: 27579,
      27590: 27572,
      27599: 27598,
      27683: 27671,
      28041: 28169,
      28122: 28057,
      28136: 27972,
      28154: 27973,
      28212: 28167,
      28330: 28179,
      28331: 28201,
      28399: 28382,
      28415: 28288,
      28497: 28300,
      28507: 28508,
      28545: 28171,
      28580: 27810,
      28629: 28287,
      28639: 28168,
      28657: 27996,
      28670: 27818,
      28711: 28381,
      28712: 28716,
      28771: 28286,
      28976: 28948,
      29128: 28783,
      29138: 28988,
      29151: 21942,
      29200: 28809,
      29229: 20105,
      29234: 28858,
      29351: 29344,
      29376: 29366,
      29433: 29421,
      29518: 22888,
      29544: 29420,
      29557: 29471,
      29560: 29539,
      29563: 29486,
      29923: 24321,
      29953: 29942,
      30059: 30011,
      30070: 24403,
      30090: 30067,
      30246: 30185,
      30305: 30196,
      30332: 30330,
      30403: 26479,
      30428: 30423,
      30433: 23613,
      30494: 30495,
      30799: 30740,
      30862: 30741,
      31014: 30783,
      31061: 31192,
      31103: 31108,
      31146: 31109,
      31150: 31036,
      31152: 31074,
      31153: 31095,
      31281: 31216,
      31291: 31282,
      31310: 38964,
      31319: 31298,
      31337: 31311,
      31344: 31331,
      31434: 31363,
      31453: 20006,
      31929: 31883,
      32114: 31992,
      32147: 32076,
      32160: 32209,
      32214: 32210,
      32227: 32257,
      32291: 30476,
      32305: 32294,
      32317: 32207,
      32353: 32333,
      32361: 32260,
      32362: 32117,
      32363: 32331,
      32380: 32153,
      32396: 32154,
      32406: 32330,
      32570: 27424,
      32592: 32566,
      32882: 22768,
      32893: 32884,
      32901: 31899,
      33126: 33075,
      33213: 32966,
      33247: 33235,
      33274: 21488,
      33287: 19982,
      33290: 26087,
      33399: 33398,
      33674: 33624,
      33686: 33550,
      33824: 33804,
      33836: 19975,
      34083: 33931,
      34199: 22290,
      34224: 34219,
      34255: 34101,
      34269: 33464,
      34277: 34220,
      34310: 33446,
      34389: 20966,
      34395: 34394,
      34399: 21495,
      34722: 34509,
      34802: 34411,
      34847: 34635,
      34870: 34453,
      34875: 34542,
      34910: 34907,
      35037: 35013,
      35139: 35090,
      35258: 35226,
      35261: 35239,
      35264: 35251,
      35320: 35302,
      35616: 35617,
      35657: 35388,
      35695: 35379,
      35709: 35465,
      35712: 35501,
      35722: 22793,
      35731: 35698,
      35738: 35715,
      35920: 35914,
      35924: 33398,
      35947: 20104,
      36019: 24336,
      36067: 22770,
      36084: 38972,
      36106: 36059,
      36368: 36341,
      36544: 36527,
      36629: 36605,
      36635: 36620,
      36681: 36578,
      36776: 24321,
      36781: 36766,
      36783: 24321,
      36953: 36965,
      36958: 36883,
      36978: 36933,
      37002: 36794,
      37086: 37070,
      37141: 37111,
      37257: 37204,
      37291: 21307,
      37292: 37284,
      37297: 37271,
      37312: 37304,
      37323: 37320,
      37636: 37682,
      37666: 37549,
      37706: 37676,
      37805: 37806,
      37941: 37444,
      37956: 37619,
      37979: 37489,
      38364: 38306,
      38519: 38501,
      38568: 38543,
      38570: 38522,
      38577: 38560,
      38617: 21452,
      38620: 38609,
      38712: 35207,
      38728: 38666,
      38748: 38745,
      39002: 39003,
      39023: 38997,
      39132: 32763,
      39192: 20313,
      39200: 39173,
      39368: 39366,
      39479: 39442,
      39493: 39366,
      39511: 39443,
      39515: 39365,
      39635: 39620,
      39636: 20307,
      39662: 39658,
      39725: 38360,
      40388: 40335,
      40407: 40206,
      40572: 40568,
      40573: 22633,
      40613: 40614,
      40628: 40633,
      40629: 40634,
      40643: 40644,
      40657: 40658,
      40664: 40665,
      40670: 28857,
      40680: 20826,
      40778: 25993,
      40779: 25998,
      40786: 27503,
      40801: 40802,
      40845: 31452,
      40860: 20096
    };
    // CONCATENATED MODULE: ./node_modules/@birchill/normal-jp/dist/esm/numbers.js
    function halfToFullWidthNum(input) {
      let result = "";
      for (const char of input) {
        let c = char.codePointAt(0);
        if (c >= 0x30 && c <= 0x39) c += 0xff10 - 0x30; else if (c >= 0x2c && c <= 0x2e) c += 0xff0c - 0x2c;
        result += String.fromCodePoint(c);
      }
      return result;
    }
    // CONCATENATED MODULE: ./node_modules/@birchill/normal-jp/dist/esm/to-normalized.js
    // prettier-ignore
    const HANKAKU_KATAKANA_TO_ZENKAKU = [ 0x3002, 0x300c, 0x300d, 0x3001, 0x30fb, 0x30f2, 0x30a1, 0x30a3, 0x30a5, 0x30a7, 0x30a9, 0x30e3, 0x30e5, 0x30e7, 0x30c3, 0x30fc, 0x30a2, 0x30a4, 0x30a6, 0x30a8, 0x30aa, 0x30ab, 0x30ad, 0x30af, 0x30b1, 0x30b3, 0x30b5, 0x30b7, 0x30b9, 0x30bb, 0x30bd, 0x30bf, 0x30c1, 0x30c4, 0x30c6, 0x30c8, 0x30ca, 0x30cb, 0x30cc, 0x30cd, 0x30ce, 0x30cf, 0x30d2, 0x30d5, 0x30d8, 0x30db, 0x30de, 0x30df, 0x30e0, 0x30e1, 0x30e2, 0x30e4, 0x30e6, 0x30e8, 0x30e9, 0x30ea, 0x30eb, 0x30ec, 0x30ed, 0x30ef, 0x30f3, 0x3099, 0x309a ];
    // prettier-ignore
        const VOICED_TO_COMPOSED = new Map([ [ 0x3046, 0x3094 ], [ 0x304b, 0x304c ], [ 0x304d, 0x304e ], [ 0x304f, 0x3050 ], [ 0x3051, 0x3052 ], [ 0x3053, 0x3054 ], [ 0x3055, 0x3056 ], [ 0x3057, 0x3058 ], [ 0x3059, 0x305a ], [ 0x305b, 0x305c ], [ 0x305d, 0x305e ], [ 0x305f, 0x3060 ], [ 0x3061, 0x3062 ], [ 0x3064, 0x3065 ], [ 0x3066, 0x3067 ], [ 0x3068, 0x3069 ], [ 0x306f, 0x3070 ], [ 0x3072, 0x3073 ], [ 0x3075, 0x3076 ], [ 0x3078, 0x3079 ], [ 0x307b, 0x307c ], [ 0x309d, 0x309e ], [ 0x30ab, 0x30ac ], [ 0x30ad, 0x30ae ], [ 0x30a6, 0x30f4 ], [ 0x30af, 0x30b0 ], [ 0x30b1, 0x30b2 ], [ 0x30b3, 0x30b4 ], [ 0x30b5, 0x30b6 ], [ 0x30b7, 0x30b8 ], [ 0x30b9, 0x30ba ], [ 0x30bb, 0x30bc ], [ 0x30bd, 0x30be ], [ 0x30bf, 0x30c0 ], [ 0x30c1, 0x30c2 ], [ 0x30c4, 0x30c5 ], [ 0x30c6, 0x30c7 ], [ 0x30c8, 0x30c9 ], [ 0x30cf, 0x30d0 ], [ 0x30d2, 0x30d3 ], [ 0x30d5, 0x30d6 ], [ 0x30d8, 0x30d9 ], [ 0x30db, 0x30dc ], [ 0x30ef, 0x30f7 ], [ 0x30f0, 0x30f8 ], [ 0x30f1, 0x30f9 ], [ 0x30f2, 0x30fa ], [ 0x30fd, 0x30fe ] ]);
    // prettier-ignore
        const SEMIVOICED_TO_COMPOSED = new Map([ [ 0x306f, 0x3071 ], [ 0x3072, 0x3074 ], [ 0x3075, 0x3077 ], [ 0x3078, 0x307a ], [ 0x307b, 0x307d ], [ 0x30cf, 0x30d1 ], [ 0x30d2, 0x30d4 ], [ 0x30d5, 0x30d7 ], [ 0x30d8, 0x30da ], [ 0x30db, 0x30dd ] ]);
    // First part of the CJK Compatibility block: 0x3300-0x3370
    // prettier-ignore
        const COMBINED_CHARS_A = [ "アパート", "アルファ", "アンペア", "アール", "イニング", "インチ", "ウォン", "エスクード", "エーカー", "オンス", "オーム", "カイリ", "カラット", "カロリー", "ガロン", "ガンマ", "ギガ", "ギニー", "キュリー", "ギルダー", "キロ", "キログラム", "キロメートル", "キロワット", "グラム", "グラムトン", "クルゼイロ", "クローネ", "ケース", "コルナ", "コーポ", "サイクル", "サンチーム", "シリング", "センチ", "セント", "ダース", "デシ", "ドル", "トン", "ナノ", "ノット", "ハイツ", "パーセント", "パーツ", "バーレル", "ピアストル", "ピクル", "ピコ", "ビル", "ファラッド", "フィート", "ブッシェル", "フラン", "ヘクタール", "ペソ", "ペニヒ", "ヘルツ", "ペンス", "ページ", "ベータ", "ポイント", "ボルト", "ホン", "ポンド", "ホール", "ホーン", "マイクロ", "マイル", "マッハ", "マルク", "マンション", "ミクロン", "ミリ", "ミリバール", "メガ", "メガトン", "メートル", "ヤード", "ヤール", "ユアン", "リットル", "リラ", "ルピー", "ルーブル", "レム", "レントゲン", "ワット", "0点", "1点", "2点", "3点", "4点", "5点", "6点", "7点", "8点", "9点", "10点", "11点", "12点", "13点", "14点", "15点", "16点", "17点", "18点", "19点", "20点", "21点", "22点", "23点", "24点" ];
    // Second part of the CJK Compatibility block: 0x337b-0x337f
    // prettier-ignore
        const COMBINED_CHARS_B = [ "平成", "昭和", "大正", "明治", "株式会社" ];
    // First part of Enclosed CJK letters and motnhs block: 0x3220-0x3247
    // prettier-ignore
        const ENCLOSED_CHARS_A = [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "月", "火", "水", "木", "金", "土", "日", "株", "有", "社", "名", "特", "財", "祝", "労", "代", "呼", "学", "監", "企", "資", "協", "祭", "休", "自", "至", "問", "幼", "文", "箏" ];
    // Second part of Enclosed CJK letters and motnhs block: 0x3280-0x32b0
    // prettier-ignore
        const ENCLOSED_CHARS_B = [ "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "月", "火", "水", "木", "金", "土", "日", "株", "有", "社", "名", "特", "財", "祝", "労", "秘", "男", "女", "適", "優", "印", "注", "頂", "休", "写", "正", "上", "中", "下", "左", "右", "医", "宗", "学", "監", "企", "資", "協", "夜" ];
    // Third part of Enclosed CJK letters and motnhs block: 0x32c0-0x32cb
    // prettier-ignore
        const ENCLOSED_CHARS_C = [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ];
    // Fourth part of Enclosed CJK letters and motnhs block: 0x32d0-0x32ff
    // prettier-ignore
        const ENCLOSED_CHARS_D = [ "ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヰ", "ヱ", "ヲ", "令和" ];
    // We should handle the Enclosed Ideographic Supplement too
    // (https://en.wikipedia.org/wiki/Enclosed_Ideographic_Supplement)
    // but it's in the SMP so it makes processing more complicated.
    
    // We'll wait until it's actually needed.
    // Converts:
    
    // - half-width katakana to full-width katakana (e.g. ｶﾞｰﾃﾞﾝ → ガーデン)
    // - decomposed characters to their composed equivalents
    //   (e.g. ダイエット → ダイエット)
    // - various enclosed characters into their plain form
    //   (e.g. ㋕ → カ)
    // - various combined characters into their expanded form
    //   (e.g. ㌀ → アパート, ㋿ → 令和)
    // - characters with variation selectors into the base character only
    
    // while maintaining a mapping from output character offsets to input
    // offsets.
        function toNormalized(input) {
      let inputLengths = [ 0 ];
      let result = "";
      for (let i = 0; i < input.length; ++i) {
        let c = input.charCodeAt(i);
        // Drop Unicode variation selectors
                if (c >= 0xfe00 && c <= 0xfe0f || c >= 0xe0100 && c <= 0xe011f) {
          inputLengths[result.length] = i + 1;
          continue;
        }
        // Half-width to full-width katakana
                if (c >= 0xff61 && c <= 0xff9f) c = HANKAKU_KATAKANA_TO_ZENKAKU[c - 0xff61];
        // Decomposed characters (including any half-width katakana which we just
        // converted since half-width katakana is always decomposed).
                const prevChar = result.length ? result.charCodeAt(result.length - 1) : 0;
        if (0x3099 === c) {
          const composed = VOICED_TO_COMPOSED.get(prevChar);
          if (composed) {
            result = result.slice(0, -1);
            c = composed;
          }
        } else if (0x309a === c) {
          // Decomposed semi-voiced mark (full-width or half-width)
          const composed = SEMIVOICED_TO_COMPOSED.get(prevChar);
          if (composed) {
            result = result.slice(0, -1);
            c = composed;
          }
        }
        // Look for an expanded character
                let expanded = null;
        if (c >= 0x3300 && c <= 0x3370) expanded = COMBINED_CHARS_A[c - 0x3300]; else if (c >= 0x337b && c <= 0x337f) expanded = COMBINED_CHARS_B[c - 0x337b]; else if (c >= 0x3220 && c <= 0x3247) expanded = ENCLOSED_CHARS_A[c - 0x3220]; else if (c >= 0x3280 && c <= 0x32b0) expanded = ENCLOSED_CHARS_B[c - 0x3280]; else if (c >= 0x32c0 && c <= 0x32cb) expanded = ENCLOSED_CHARS_C[c - 0x32c0]; else if (c >= 0x32d0 && c <= 0x32ff) expanded = ENCLOSED_CHARS_D[c - 0x32d0];
        if (expanded) {
          result += expanded;
          inputLengths.push(...Array(expanded.length - 1).fill(i));
        } else result += String.fromCharCode(c);
        inputLengths[result.length] = i + 1;
      }
      return [ result, inputLengths ];
    }
    // CONCATENATED MODULE: ./node_modules/@birchill/jpdict-idb/dist/index.js
    class AbortError extends Error {
      constructor(...params) {
        super(...params);
        Object.setPrototypeOf(this, AbortError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, AbortError);
        this.name = "AbortError";
      }
    }
    const allMajorDataSeries = [ "words", "kanji", "names" ];
    Error;
    const safeInteger = () => refine(integer(), "safeInteger", (value => Number.isSafeInteger(value)));
    const VersionInfoStruct = type({
      major: min(safeInteger(), 1),
      minor: min(safeInteger(), 0),
      patch: min(safeInteger(), 0),
      parts: optional(min(safeInteger(), 1)),
      databaseVersion: optional(string()),
      dateOfCreation: nonempty(string())
    });
    record(string(), record(string(), VersionInfoStruct));
    /**
 * A helper to remove certain fields from an object.
 */
    function stripFields(o, fields) {
      const result = {
        ...o
      };
      for (const field of fields) delete result[field];
      return result;
    }
    type({
      type: literal("header"),
      version: type({
        major: min(safeInteger(), 1),
        minor: min(safeInteger(), 0),
        patch: min(safeInteger(), 0),
        databaseVersion: optional(string()),
        dateOfCreation: nonempty(string())
      }),
      records: min(safeInteger(), 0),
      part: optional(min(safeInteger(), 0)),
      format: enums([ "patch", "full" ])
    });
    type({
      _: enums([ "+", "-", "~" ])
    });
    Error;
    // ----------------------------------------------------------------------------
    // Words
    // ----------------------------------------------------------------------------
    const KanjiMetaSchema = type({
      i: optional(array(string())),
      p: optional(array(string()))
    });
    const AccentSchema = type({
      i: min(safeInteger(), 0),
      pos: optional(array(string()))
    });
    const ReadingMetaSchema = type({
      i: optional(array(string())),
      p: optional(array(string())),
      app: optional(min(safeInteger(), 0)),
      a: optional(union([ min(safeInteger(), 0), array(AccentSchema) ]))
    });
    // The following typing is because Describe struggles with union types
        const CrossReferenceSchema = union([ type({
      k: nonempty(string()),
      sense: optional(min(safeInteger(), 0))
    }), type({
      r: nonempty(string()),
      sense: optional(min(safeInteger(), 0))
    }), type({
      k: nonempty(string()),
      r: string(),
      sense: optional(min(safeInteger(), 0))
    }) ]);
    const LangSourceSchema = type({
      lang: optional(nonempty(string())),
      src: optional(string()),
      // The following should be:
      //   part: s.optional(s.literal(true)),
      //   wasei: s.optional(s.literal(true)),
      // But Describe doesn't seem to handle optional boolean literals so we try
      // this way for now.
      part: union([ literal(true), literal(void 0) ]),
      wasei: union([ literal(true), literal(void 0) ])
    });
    const WordSenseSchema = type({
      g: nonempty(array(nonempty(string()))),
      gt: optional(min(safeInteger(), 1)),
      lang: optional(nonempty(string())),
      kapp: optional(min(safeInteger(), 0)),
      rapp: optional(min(safeInteger(), 0)),
      pos: optional(array(string())),
      field: optional(array(string())),
      misc: optional(array(string())),
      dial: optional(array(string())),
      inf: optional(nonempty(string())),
      xref: optional(nonempty(array(CrossReferenceSchema))),
      ant: optional(nonempty(array(CrossReferenceSchema))),
      lsrc: optional(nonempty(array(LangSourceSchema)))
    });
    const WordIdSchema = min(safeInteger(), 1);
    type({
      id: WordIdSchema,
      k: optional(nonempty(array(string()))),
      km: optional(nonempty(array(union([ literal(0), KanjiMetaSchema ])))),
      r: array(nonempty(nonempty(string()))),
      rm: optional(nonempty(array(union([ literal(0), ReadingMetaSchema ])))),
      s: array(WordSenseSchema)
    });
    type({
      id: WordIdSchema
    });
    // ----------------------------------------------------------------------------
    // Names
    // ----------------------------------------------------------------------------
    const NameTranslationSchema = type({
      type: optional(array(string())),
      det: array(nonempty(string())),
      cf: optional(array(nonempty(string())))
    });
    const NameIdSchema = min(safeInteger(), 1);
    type({
      id: NameIdSchema,
      k: optional(array(nonempty(string()))),
      r: nonempty(array(nonempty(string()))),
      tr: array(NameTranslationSchema)
    });
    type({
      id: NameIdSchema
    });
    // ----------------------------------------------------------------------------
    // Kanji
    // ----------------------------------------------------------------------------
    const ReadingsStruct = type({
      on: optional(array(string())),
      kun: optional(array(string())),
      na: optional(array(string())),
      py: optional(array(string()))
    });
    const RadicalStruct = type({
      x: min(safeInteger(), 0),
      nelson: optional(min(safeInteger(), 0)),
      name: optional(array(string())),
      var: optional(string())
    });
    const MiscSchema = type({
      gr: optional(safeInteger()),
      sc: min(safeInteger(), 1),
      freq: optional(min(safeInteger(), 0)),
      // The following three items should really have a minimum value of 1, but in
      // the interests of being (a bit) forgiving in what we accept, we allow 0 too.
      jlpt: optional(min(safeInteger(), 0)),
      jlptn: optional(min(safeInteger(), 0)),
      kk: optional(min(safeInteger(), 0)),
      meta: optional(array(string()))
    });
    const KanjiIdSchema = nonempty(string());
    type({
      c: KanjiIdSchema,
      r: ReadingsStruct,
      m: array(string()),
      m_lang: optional(string()),
      rad: RadicalStruct,
      refs: record(string(), union([ string(), number() ])),
      misc: MiscSchema,
      comp: optional(string()),
      var: optional(array(string())),
      cf: optional(union([ string(), array(string()) ]))
    });
    type({
      c: KanjiIdSchema
    });
    // ----------------------------------------------------------------------------
    // Radicals
    // ----------------------------------------------------------------------------
    const RadicalIdSchema = nonempty(string());
    type({
      id: RadicalIdSchema,
      r: min(safeInteger(), 1),
      b: optional(nonempty(string())),
      k: optional(nonempty(string())),
      pua: optional(safeInteger()),
      s: safeInteger(),
      na: array(nonempty(string())),
      posn: optional(nonempty(string())),
      m: array(nonempty(string())),
      m_lang: optional(nonempty(string()))
    });
    type({
      id: RadicalIdSchema
    });
    Error;
    const GLOSS_TYPE_MAX = 4 /* GlossType.Tm */;
    const BITS_PER_GLOSS_TYPE = Math.floor(Math.log2(GLOSS_TYPE_MAX)) + 1;
    function toWordResult(record, search, matchMode) {
      let kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches;
      if ("string" !== typeof search) [kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches] = getMatchMetadataForCrossRefLookup(record, search, matchMode); else [kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches] = getMatchMetadata(record, search, matchMode);
      return makeWordResult(record, kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches, []);
    }
    function makeWordResult(record, kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches, matchedGlossRanges) {
      return {
        id: record.id,
        k: mergeMeta(record.k, record.km, kanjiMatches, kanjiMatchRanges, ((key, match, matchRange, meta) => {
          const result = {
            ent: key,
            ...meta,
            match
          };
          if (matchRange) result.matchRange = matchRange;
          return result;
        })),
        r: mergeMeta(record.r, record.rm, kanaMatches, kanaMatchRanges, ((key, match, matchRange, meta) => {
          const result = {
            ent: key,
            ...meta,
            match
          };
          if (matchRange) result.matchRange = matchRange;
          return result;
        })),
        s: expandSenses(record.s, senseMatches, matchedGlossRanges)
      };
    }
    function getMatchMetadata(record, search, matchMode) {
      // There are three cases:
      // 1) We matched on a kanji entry
      //    -- All k entries that exactly match `search` should match.
      //    -- All r entries that apply to the k entry should match.
      //       (i.e. no app field or one that matches).
      //    -- All s entries that:
      //       -- Have a kapp field, and it matches, should match.
      //       -- Have only a rapp field, and the corresponding r entry matches,
      //          should match.
      //       -- Have no kapp or rapp field should match.
      // 2) We matched on a reading (kana) entry
      //    -- All r entries that exactly match `search` should match.
      //    -- All k entries to which the matching r entries apply should match.
      //    -- All s entries that:
      //       -- Have a rapp field, and the corresponding r entry matches,
      //          should match.
      //       -- Have a kapp field, and the corresponding k entry matches,
      //          should match.
      //       -- Have no rapp or kapp field should match.
      // 3) We matched on a hiragana index
      //    -- As above trying (1) first then (2) using the hiragana-converted
      //       term.
      // Because of (3), we just always search both arrays.
      var _a;
      // First build up a bitfield of all kanji matches.
            const matcher = str => {
        switch (matchMode) {
         case 0 /* MatchMode.Lexeme */ :
          return str === search;

         case 1 /* MatchMode.KanaEquivalentLexeme */ :
          return kana_to_hiragana_kanaToHiragana(str) === search;

         case 2 /* MatchMode.StartsWithLexeme */ :
          return str.startsWith(search);

         case 3 /* MatchMode.StartsWithKanaEquivalentLexeme */ :
          return kana_to_hiragana_kanaToHiragana(str).startsWith(search);

         case 4 /* MatchMode.Kanji */ :
          return [ ...str ].includes(search);
        }
      };
      let kanjiMatches = arrayToBitfield(record.k || [], matcher);
      // Fill out any match information
            const kanjiMatchRanges = [];
      for (let i = 0; i < ((null === (_a = record.k) || void 0 === _a ? void 0 : _a.length) || 0); i++) if (kanjiMatches & 1 << i) switch (matchMode) {
       case 0 /* MatchMode.Lexeme */ :
       case 1 /* MatchMode.KanaEquivalentLexeme */ :
       case 2 /* MatchMode.StartsWithLexeme */ :
       case 3 /* MatchMode.StartsWithKanaEquivalentLexeme */ :
        kanjiMatchRanges.push([ i, 0, search.length ]);
        break;

       case 4 /* MatchMode.Kanji */ :
        {
          const index = [ ...record.k[i] ].indexOf(search);
          kanjiMatchRanges.push([ i, index, index + 1 ]);
        }
        break;
      }
      let kanaMatches = 0;
      let senseMatches = 0;
      const kanaMatchRanges = [];
      if (kanjiMatches) {
        // Case (1) from above: Find corresponding kana matches
        kanaMatches = kanaMatchesForKanji(record, kanjiMatches);
        senseMatches = arrayToBitfield(record.s, (sense => {
          if ("undefined" !== typeof sense.kapp) return !!(sense.kapp & kanjiMatches); else if ("undefined" !== typeof sense.rapp) return !!(sense.rapp & kanaMatches); else return true;
        }));
      } else if (0 /* MatchMode.Lexeme */ === matchMode || 1 /* MatchMode.KanaEquivalentLexeme */ === matchMode || 2 /* MatchMode.StartsWithLexeme */ === matchMode || 3 /* MatchMode.StartsWithKanaEquivalentLexeme */ === matchMode) {
        // Case (2) from above: Find kana matches and the kanji they apply to.
        kanaMatches = arrayToBitfield(record.r, matcher);
        kanjiMatches = kanjiMatchesForKana(record, kanaMatches);
        senseMatches = arrayToBitfield(record.s, (sense => {
          if ("undefined" !== typeof sense.rapp) return !!(sense.rapp & kanaMatches); else if ("undefined" !== typeof sense.kapp) return !!(sense.kapp & kanjiMatches); else return true;
        }));
        // Fill out kana match range information
                for (let i = 0; i < record.r.length; i++) if (kanaMatches & 1 << i) {
          kanaMatchRanges.push([ i, 0, search.length ]);
          break;
        }
      }
      return [ kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches ];
    }
    function getMatchMetadataForCrossRefLookup(record, xref, matchMode) {
      var _a;
      let kanjiMatches = 0;
      let kanjiMatchRanges = [];
      let kanaMatches = 0;
      let kanaMatchRanges = [];
      let senseMatches = 0;
      const xRefK = xref.k;
      const xRefR = xref.r;
      if (xRefK && xRefR) {
        // Fill out kanji match information
        kanjiMatches = arrayToBitfield(record.k || [], (k => k === xRefK));
        for (let i = 0; i < ((null === (_a = record.k) || void 0 === _a ? void 0 : _a.length) || 0); i++) if (kanjiMatches & 1 << i) kanjiMatchRanges.push([ i, 0, xRefK.length ]);
        // Fill out reading match information
                kanaMatches = arrayToBitfield(record.r, (r => r === xRefR));
        for (let i = 0; i < record.r.length; i++) if (kanaMatches & 1 << i) kanaMatchRanges.push([ i, 0, xRefR.length ]);
        // Fill out sense information, although we may end up overwriting this
        // below.
                senseMatches = arrayToBitfield(record.s, (sense => {
          if ("undefined" !== typeof sense.kapp) return !!(sense.kapp & kanjiMatches); else if ("undefined" !== typeof sense.rapp) return !!(sense.rapp & kanaMatches); else return true;
        }));
      } else [kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches] = getMatchMetadata(record, xRefK || xRefR, matchMode);
      if (xref.sense) senseMatches = 1 << xref.sense - 1;
      return [ kanjiMatches, kanjiMatchRanges, kanaMatches, kanaMatchRanges, senseMatches ];
    }
    function kanaMatchesForKanji(record, kanjiMatches) {
      const kanaIsMatch = rm => !rm || "undefined" === typeof rm.app || !!(rm.app & kanjiMatches);
      return arrayToBitfield(
      // We need to extend the rm array with nulls so that any readings without
      // meta fields are treated as applying to all kanji.
      extendWithNulls(record.rm || [], record.r.length), kanaIsMatch);
    }
    function extendWithNulls(arr, len) {
      const extra = Math.max(len - arr.length, 0);
      return arr.concat(Array(extra).fill(null));
    }
    function kanjiMatchesForKana(record, kanaMatches) {
      const wildCardMatch = (1 << (record.k || []).length) - 1;
      const matchingKanjiAtIndex = i => {
        var _a;
        if (!record.rm || record.rm.length < i + 1 || null === record.rm[i]) return wildCardMatch;
        return null !== (_a = record.rm[i].app) && void 0 !== _a ? _a : wildCardMatch;
      };
      let matches = 0;
      for (let i = 0; i < record.r.length; i++) matches |= kanaMatches & 1 << i ? matchingKanjiAtIndex(i) : 0;
      return matches;
    }
    function arrayToBitfield(arr, test) {
      return arr.reduce(((value, elem, i) => test(elem) ? value | 1 << i : value), 0);
    }
    function mergeMeta(keys, metaArray, matches, matchRanges, merge) {
      var _a;
      const result = [];
      for (const [i, key] of (keys || []).entries()) {
        const match = !!(matches & 1 << i);
        const meta = metaArray && metaArray.length >= i + 1 && null !== metaArray[i] ? metaArray[i] : void 0;
        const matchRange = null === (_a = matchRanges.find((item => item[0] === i))) || void 0 === _a ? void 0 : _a.slice(1);
        result.push(merge(key, match, matchRange, meta));
      }
      return result;
    }
    function expandSenses(senses, senseMatches, matchedGlossRanges) {
      const getRangesForSense = i => matchedGlossRanges.filter((([senseIndex]) => senseIndex === i)).map((([, gloss, start, end]) => [ gloss, start, end ]));
      return senses.map(((sense, i) => ({
        g: expandGlosses(sense, getRangesForSense(i)),
        ...stripFields(sense, [ "g", "gt" ]),
        match: !!(senseMatches & 1 << i)
      })));
    }
    function expandGlosses(sense, matchedRanges) {
      // Helpers to work out the gloss type
      const gt = sense.gt || 0;
      const typeMask = (1 << BITS_PER_GLOSS_TYPE) - 1;
      const glossTypeAtIndex = i => gt >> i * BITS_PER_GLOSS_TYPE & typeMask;
      return sense.g.map(((gloss, i) => {
        // This rather convoluted mess is because our test harness differentiates
        // between properties that are not set and those that are set to
        // undefined.
        const result = {
          str: gloss
        };
        const type = glossTypeAtIndex(i);
        if (0 /* GlossType.None */ !== type) result.type = type;
        let range;
        while (matchedRanges.length && matchedRanges[0][0] <= i) range = matchedRanges.shift();
        if (range) result.matchRange = range.slice(1);
        return result;
      }));
    }
    // As with Array.prototype.sort, sorts `results` in-place, but returns the
    // result to support chaining.
        function sortResultsByPriority(results) {
      const idToScore = new Map;
      for (const result of results) idToScore.set(result.id, getPriority(result));
      results.sort(((a, b) => idToScore.get(b.id) - idToScore.get(a.id)));
      return results;
    }
    function getPriority(result) {
      // Go through each _matching_ kanji / reading and look for priority
      // information and return the highest score.
      const scores = [ 0 ];
      const isHeadwordSearch = result.k.some((k => !!k.matchRange)) || result.r.some((r => !!r.matchRange));
      // Scores from kanji readings
            for (const k of result.k) {
        if ((isHeadwordSearch ? !k.matchRange : !k.match) || !k.p) continue;
        scores.push(getPrioritySum(k.p));
      }
      // Scores from kana readings
            for (const r of result.r) {
        if ((isHeadwordSearch ? !r.matchRange : !r.match) || !r.p) continue;
        scores.push(getPrioritySum(r.p));
      }
      // Return top score
            return Math.max(...scores);
    }
    // Produce an overall priority from a series of priority strings.
    
    // This should produce a value somewhere in the range 0~67.
    
    // In general we report the highest priority, but if we have several priority
    // scores we add a decreasing fraction (10%) of the lesser scores as an
    // indication that several sources have attested to the priority.
    
    // That should typically produce a maximum attainable score of 66.8.
    // Having a bounded range like this makes it easier to combine this value with
    // other metrics when sorting.
        function getPrioritySum(priorities) {
      const scores = priorities.map(getPriorityScore).sort().reverse();
      return scores.length ? scores[0] + scores.slice(1).reduce(((total, score, index) => total + score / Math.pow(10, index + 1)), 0) : 0;
    }
    // This assignment is pretty arbitrary however it's mostly used for sorting
    // entries where all we need to do is distinguish between the really common ones
    // and the obscure academic ones.
    
    // Entries with (P) are those ones that are marked with (P) in Edict.
        const PRIORITY_ASSIGNMENTS = new Map([ [ "i1", 50 ], [ "i2", 20 ], [ "n1", 40 ], [ "n2", 20 ], [ "s1", 32 ], [ "s2", 20 ], [ "g1", 30 ], [ "g2", 15 ] ]);
    function getPriorityScore(p) {
      if (PRIORITY_ASSIGNMENTS.has(p)) return PRIORITY_ASSIGNMENTS.get(p);
      if (p.startsWith("nf")) {
        // The wordfreq scores are groups of 500 words.
        // e.g. nf01 is the top 500 words, and nf48 is the 23,501 ~ 24,000
        // most popular words.
        const wordfreq = parseInt(p.substring(2), 10);
        if (wordfreq > 0 && wordfreq < 48) return 48 - wordfreq / 2;
      }
      return 0;
    }
    // A variant on sortResultsByPriority that is useful for substring matching.
    
    // We want to make sure exact matches sort first. So we have:
    
    // * Find the matching entry (i.e. the one with matchRange set) and
    //   get its full length.
    
    //   Sort by the number of excess characters such that entries with
    //   fewer excess characters sort first.
    
    // * Then sort by priority value.
    
        function sortResultsByPriorityAndMatchLength(results, searchLength) {
      const sortMeta = new Map;
      for (const result of results) {
        const matchingHeadword = result.k.find((k => k.matchRange)) || result.r.find((r => r.matchRange));
        const excessChars = matchingHeadword ? matchingHeadword.ent.length - searchLength : void 0;
        const priority = getPriority(result);
        sortMeta.set(result.id, {
          excessChars,
          priority
        });
      }
      results.sort(((a, b) => {
        const metaA = sortMeta.get(a.id);
        const metaB = sortMeta.get(b.id);
        if ("undefined" !== typeof metaA.excessChars && "undefined" !== typeof metaB.excessChars && metaA.excessChars !== metaB.excessChars) return metaA.excessChars - metaB.excessChars;
        return metaB.priority - metaA.priority;
      }));
      return results;
    }
    // Database query methods
    
    // This is in a separate file so that we can include just the query methods
    // in a separate worker / context and tree-shake out the rest of the module.
    
    // Furthermore, these methods are careful not to read from the version table
    // since that can block when the database is being updated. Instead, these
    // methods are intended to be run on a separate thread to where the database
    // update methods are being run so that it is still possible for the user to
    // user the database while it is being updated.
    // -------------------------------------------------------------------------
    
    // Opening
    
    // -------------------------------------------------------------------------
        let _state = "idle";
    let _db;
    let _openPromise;
    function dist_open() {
      if ("open" === _state) return Promise.resolve(_db);
      if ("opening" === _state) return _openPromise;
      _state = "opening";
      _openPromise = safari_14_idb_fix_dist().then((() => build_openDB("jpdict", 4, {
        upgrade(_db, _oldVersion, _newVersion, transaction) {
          // If the database does not exist, do not try to create it.
          // If it is for an old version, do not try to use it.
          transaction.abort();
        },
        blocked() {
          console.log("Opening blocked");
        },
        blocking() {
          if (_db) {
            _db.close();
            _db = void 0;
            _state = "idle";
          }
        },
        terminated() {
          _db = void 0;
          _state = "idle";
        }
      }).then((db => {
        _db = db;
        _state = "open";
        return db;
      })).catch((() => {
        _state = "idle";
        _db = void 0;
        return null;
      })).finally((() => {
        _openPromise = void 0;
      }))));
      return _openPromise;
    }
    async function dist_getWords(search, options) {
      var _a, _b;
      const db = await dist_open();
      if (!db) return [];
      // Resolve match type and limit
            const matchType = null !== (_a = null === options || void 0 === options ? void 0 : options.matchType) && void 0 !== _a ? _a : "exact";
      const limit = null !== (_b = null === options || void 0 === options ? void 0 : options.limit) && void 0 !== _b ? _b : 1 / 0;
      // Normalize search string
            const lookup = search.normalize();
      // Set up our output value.
            const addedRecords = new Set;
      const results = [];
      const maybeAddRecord = (record, term, kanaMatching = "exact") => {
        if (addedRecords.has(record.id)) return;
        let matchMode;
        if ("exact" === matchType) matchMode = "exact" === kanaMatching ? 0 /* MatchMode.Lexeme */ : 1 /* MatchMode.KanaEquivalentLexeme */; else matchMode = "exact" === kanaMatching ? 2 /* MatchMode.StartsWithLexeme */ : 3 /* MatchMode.StartsWithKanaEquivalentLexeme */;
        results.push(toWordResult(record, term, matchMode));
        addedRecords.add(record.id);
      };
      // Try the k (kanji) index first
            const kanjiIndex = db.transaction("words").store.index("k");
      // (We explicitly use IDBKeyRange.only because otherwise the idb TS typings
      // fail to recognize that these indices are multi-entry and hence it is
      // valid to supply a single string instead of an array of strings.)
            const key = "exact" === matchType ? IDBKeyRange.only(lookup) : IDBKeyRange.bound(lookup, lookup + "￿");
      for await (const cursor of kanjiIndex.iterate(key)) maybeAddRecord(cursor.value, lookup);
      // Then the r (reading) index
            const readingIndex = db.transaction("words").store.index("r");
      for await (const cursor of readingIndex.iterate(key)) maybeAddRecord(cursor.value, lookup);
      // Then finally try converting to hiragana and using the hiragana index
            {
        const hiraganaIndex = db.transaction("words").store.index("h");
        const hiragana = kana_to_hiragana_kanaToHiragana(lookup);
        const hiraganaKey = "exact" === matchType ? IDBKeyRange.only(hiragana) : IDBKeyRange.bound(hiragana, hiragana + "￿");
        for await (const cursor of hiraganaIndex.iterate(hiraganaKey)) maybeAddRecord(cursor.value, hiragana, "kana-equivalent");
      }
      // Sort using the following arrangement:
      
      // A) For exact searching, sorting by priority is enough.
      
      // B) For prefix ("starts with") searching, we want to make sure exact
      //    matches sort first so we penalize matches where the matched string
      //    is longer than the search term.
      
            let sortedResult;
      if ("exact" === matchType) sortedResult = sortResultsByPriority(results); else sortedResult = sortResultsByPriorityAndMatchLength(results, lookup.length);
      if (limit) sortedResult.splice(limit);
      return sortedResult;
    }
    // -------------------------------------------------------------------------
    // Kanji
    // -------------------------------------------------------------------------
    async function getKanji({kanji, lang, logWarningMessage = console.log}) {
      const ids = kanji.map((kanji => kanji.codePointAt(0)));
      const kanjiRecords = await getKanjiById(ids);
      const radicalResults = await getRadicalForKanji({
        kanjiRecords,
        lang,
        logWarningMessage
      });
      if (kanjiRecords.length !== radicalResults.length) throw new Error(`There should be as many kanji records (${kanjiRecords.length}) as radical blocks (${radicalResults.length})`);
      const componentResults = await getComponentsForKanji({
        kanjiRecords,
        lang,
        logWarningMessage
      });
      if (kanjiRecords.length !== componentResults.length) throw new Error(`There should be as many kanji records (${kanjiRecords.length}) as component arrays (${componentResults.length})`);
      const relatedResults = await getRelatedKanji(kanjiRecords, lang);
      if (kanjiRecords.length !== relatedResults.length) throw new Error(`There should be as many kanji records (${kanjiRecords.length}) as related kanji arrays (${relatedResults.length})`);
      // Zip the arrays together
            return kanjiRecords.map(((record, i) => stripFields({
        ...record,
        c: String.fromCodePoint(record.c),
        m_lang: record.m_lang || lang,
        rad: radicalResults[i],
        comp: componentResults[i],
        cf: relatedResults[i]
      }, [ "var" ])));
    }
    async function getKanjiById(ids) {
      const db = await dist_open();
      if (!db) return [];
      const kanjiRecords = [];
      {
        const tx = db.transaction("kanji");
        for (const c of ids) {
          const record = await tx.store.get(c);
          if (record) kanjiRecords.push(record);
        }
      }
      return kanjiRecords;
    }
    async function getRadicalForKanji({kanjiRecords, lang, logWarningMessage}) {
      const radicals = await getRadicals();
      return kanjiRecords.map((record => {
        const variantId = getRadicalVariantId(record);
        const baseId = formatRadicalId(record.rad.x);
        const radicalVariant = radicals.get(variantId || baseId);
        let rad;
        if (radicalVariant) {
          rad = {
            x: record.rad.x,
            b: radicalVariant.b,
            k: radicalVariant.k,
            na: radicalVariant.na,
            m: radicalVariant.m,
            m_lang: radicalVariant.m_lang || lang
          };
          if (record.rad.nelson) rad.nelson = record.rad.nelson;
        } else {
          // The radical was not found. This should basically never happen.
          // But rather than crash fatally, just fill in some nonsense data
          // instead.
          logWarningMessage(`Failed to find radical: ${variantId || baseId}`);
          rad = {
            ...record.rad,
            // We generally maintain the invariant that either 'b' or 'k' is
            // filled in (or both for a base radical) so even though the TS
            // typings don't require it, we should provide one here.
            b: "�",
            na: [ "" ],
            m: [ "" ],
            m_lang: lang
          };
        }
        // If this a variant, return the base radical information too
                if (variantId) {
          const baseRadical = radicals.get(baseId);
          if (baseRadical) {
            const {b, k, na, m, m_lang} = baseRadical;
            rad.base = {
              b,
              k,
              na,
              m,
              m_lang: m_lang || lang
            };
          }
        }
        return rad;
      }));
    }
    function formatRadicalId(id) {
      return id.toString().padStart(3, "0");
    }
    function parseVariants(record) {
      const variants = [];
      if (record.var) for (const variantId of record.var) {
        const matches = variantId.match(/^(\d+)-/);
        if (matches) {
          const [, radical] = matches;
          variants.push({
            radical: parseInt(radical, 10),
            id: variantId
          });
        }
      }
      return variants;
    }
    function popVariantForRadical(radical, variants) {
      // Add special handling so that if we are searching for a variant for 74 (⽉)
      // but we find 130-2 (にくづき) we match that.
      const variantIndex = variants.findIndex((a => a.radical === radical || 74 === radical && "130-2" === a.id));
      if (-1 === variantIndex) return;
      const id = variants[variantIndex].id;
      variants.splice(variantIndex, 1);
      return id;
    }
    function getRadicalVariantId(record) {
      const variants = parseVariants(record);
      const variant = variants.find((a => a.radical === record.rad.x));
      return null === variant || void 0 === variant ? void 0 : variant.id;
    }
    // NOTE: This is NOT meant to be a generic romaji utility. It does NOT
    // cover e.g. ファ or ジャ. It is very specifically for filling out component
    // records that use a katakana character and handles exactly the range we use
    // there to detect katakana (which excludes some katakana at the end of the
    // Unicode katakana block like ヾ).
    
    // It also doesn't differentiate between e.g. ア or ァ. In fact, it is only
    // ever expected to cover ム and ユ but we've made it a little bit more generic
    // simply because the kanji components data is expected to be frequently updated
    // and it's completely possible that other katakana symbols might show up there
    // in the future.
        const katakanaToRoman = [ [ "ァ", "a" ], [ "ア", "a" ], [ "ィ", "i" ], [ "イ", "i" ], [ "ゥ", "u" ], [ "ウ", "u" ], [ "ェ", "e" ], [ "エ", "e" ], [ "ォ", "o" ], [ "オ", "o" ], [ "カ", "ka" ], [ "ガ", "ga" ], [ "キ", "ki" ], [ "ギ", "gi" ], [ "ク", "ku" ], [ "グ", "gu" ], [ "ケ", "ke" ], [ "ゲ", "ge" ], [ "コ", "ko" ], [ "ゴ", "go" ], [ "サ", "sa" ], [ "ザ", "za" ], [ "シ", "shi" ], [ "ジ", "ji" ], [ "ス", "su" ], [ "ズ", "zu" ], [ "セ", "se" ], [ "ゼ", "ze" ], [ "ソ", "so" ], [ "ゾ", "zo" ], [ "タ", "ta" ], [ "ダ", "da" ], [ "チ", "chi" ], [ "ヂ", "di" ], [ "ッ", "tsu" ], [ "ツ", "tsu" ], [ "ヅ", "dzu" ], [ "テ", "te" ], [ "デ", "de" ], [ "ト", "to" ], [ "ド", "do" ], [ "ナ", "na" ], [ "ニ", "ni" ], [ "ヌ", "nu" ], [ "ネ", "ne" ], [ "ノ", "no" ], [ "ハ", "ha" ], [ "バ", "ba" ], [ "パ", "pa" ], [ "ヒ", "hi" ], [ "ビ", "bi" ], [ "ピ", "pi" ], [ "フ", "fu" ], [ "ブ", "bu" ], [ "プ", "pu" ], [ "ヘ", "he" ], [ "ベ", "be" ], [ "ペ", "pe" ], [ "ホ", "ho" ], [ "ボ", "bo" ], [ "ポ", "po" ], [ "マ", "ma" ], [ "ミ", "mi" ], [ "ム", "mu" ], [ "メ", "me" ], [ "モ", "mo" ], [ "ャ", "ya" ], [ "ヤ", "ya" ], [ "ュ", "yu" ], [ "ユ", "yu" ], [ "ョ", "yo" ], [ "ヨ", "yo" ], [ "ラ", "ra" ], [ "リ", "ri" ], [ "ル", "ru" ], [ "レ", "re" ], [ "ロ", "ro" ], [ "ヮ", "wa" ], [ "ワ", "wa" ], [ "ヰ", "wi" ], [ "ヱ", "we" ], [ "ヲ", "wo" ], [ "ン", "n" ], [ "ヴ", "vu" ], [ "ヵ", "ka" ], [ "ヶ", "ke" ], [ "ヷ", "ga" ], [ "ヸ", "vi" ], [ "ヹ", "ve" ], [ "ヺ", "vo" ] ];
    async function getComponentsForKanji({kanjiRecords, lang, logWarningMessage}) {
      // Collect all the characters together
      const components = kanjiRecords.reduce(((components, record) => components.concat(record.comp ? [ ...record.comp ] : [])), []);
      // Work out which kanji characters we need to lookup
            const radicalMap = await getCharToRadicalMapping();
      const kanjiToLookup = new Set;
      for (const c of components) if (c && !radicalMap.has(c)) kanjiToLookup.add(c.codePointAt(0));
      // ... And look them up
            let kanjiMap = new Map;
      if (kanjiToLookup.size) {
        const kanjiRecords = await getKanjiById([ ...kanjiToLookup ]);
        kanjiMap = new Map(kanjiRecords.map((record => [ String.fromCodePoint(record.c), record ])));
      }
      // Now fill out the information
            const radicals = await getRadicals();
      const result = [];
      for (const record of kanjiRecords) {
        const comp = [];
        const variants = parseVariants(record);
        for (const c of record.comp ? [ ...record.comp ] : []) if (radicalMap.has(c)) {
          let radicalRecord = radicals.get(radicalMap.get(c));
          if (radicalRecord) {
            // Look for a matching variant
            const variantId = popVariantForRadical(radicalRecord.r, variants);
            if ("undefined" !== typeof variantId) {
              const variantRadical = radicals.get(variantId);
              if (variantRadical) radicalRecord = variantRadical; else logWarningMessage(`Couldn't find radical record for variant ${variantId}`);
            }
            const component = {
              c,
              na: radicalRecord.na,
              m: radicalRecord.m,
              m_lang: radicalRecord.m_lang || lang
            };
            const baseRadical = radicals.get(formatRadicalId(radicalRecord.r));
            if (baseRadical && baseRadical.k) component.k = baseRadical.k;
            comp.push(component);
          } else logWarningMessage(`Couldn't find radical record for ${c}`);
        } else if (kanjiMap.has(c)) {
          const kanjiRecord = kanjiMap.get(c);
          if (kanjiRecord) {
            let na = [];
            if (kanjiRecord.r.kun && kanjiRecord.r.kun.length) na = kanjiRecord.r.kun.map((reading => reading.replace(".", ""))); else if (kanjiRecord.r.on && kanjiRecord.r.on.length) na = kanjiRecord.r.on;
            comp.push({
              c,
              na,
              m: kanjiRecord.m,
              m_lang: kanjiRecord.m_lang || lang
            });
          }
        } else if (c.codePointAt(0) >= 0x30a1 && c.codePointAt(0) <= 0x30fa) 
        // NOTE: If we ever support languages that are not roman-based, or
        // where it doesn't make sense to convert katakana into a roman
        // equivalent we should detect that here.
        // For now we handle Japanese simply because that seems likely.
        if ("ja" === lang) comp.push({
          c,
          na: [ c ],
          m: [ `片仮名の${c}` ],
          m_lang: lang
        }); else {
          const asRoman = katakanaToRoman[c.codePointAt(0) - 0x30a1][1];
          // NOTE: We only currently deal with a very limited number of
          // languages where it seems legitimate to write 片仮名 as
          // "katakana" (as best I can tell).
          
          // Once we come to handle languages like Korean and so on we'll
          // actually want to localize this properly.
          
          // e.g.
          
          //   Korean: 카타카나
          //   Chinese (what kind?): 片假名
          //   Arabic: الكاتاكانا ?
          //   Persian: काताकाना ?
          //   Russian: Ката́кана ?
          
          // Given that all these languages fall back to English anyway,
          // though, it's probably not so bad if we forget to do this.
          
          // TODO: Update this when we handle word dictionary
                    if (![ "en", "es", "pt", "fr" ].includes(lang)) logWarningMessage(`Generating katakana record for unknown language: ${lang}`);
          comp.push({
            c,
            na: [ c ],
            m: [ `katakana ${asRoman}` ],
            m_lang: lang
          });
        } else logWarningMessage(`Couldn't find a radical or kanji entry for ${c}`);
        result.push(comp);
      }
      return result;
    }
    async function getRelatedKanji(kanjiRecords, lang) {
      // Collect all the characters together
      const cf = kanjiRecords.reduce(((cf, record) => cf.concat(record.cf ? [ ...record.cf ].map((c => c.codePointAt(0) || 0)) : [])), []);
      const kanjiToLookup = new Set(cf);
      // ... And look them up
            let kanjiMap = new Map;
      if (kanjiToLookup.size) {
        const kanjiRecords = await getKanjiById([ ...kanjiToLookup ]);
        kanjiMap = new Map(kanjiRecords.map((record => [ String.fromCodePoint(record.c), record ])));
      }
      // Now fill out the information
            const result = [];
      for (const record of kanjiRecords) {
        const relatedKanji = [];
        for (const cfChar of record.cf ? [ ...record.cf ] : []) {
          const kanji = kanjiMap.get(cfChar);
          if (!kanji) continue;
          const {r, m, m_lang, misc} = kanji;
          relatedKanji.push({
            c: cfChar,
            r,
            m,
            m_lang: m_lang || lang,
            misc
          });
        }
        result.push(relatedKanji);
      }
      return result;
    }
    async function getRadicals() {
      const db = await dist_open();
      if (!db) return new Map;
      return db.getAll("radicals").then((records => new Map(records.map((record => [ record.id, record ])))));
    }
    async function getCharToRadicalMapping() {
      const radicals = await getRadicals();
      let baseRadical;
      const mapping = new Map;
      for (const radical of radicals.values()) if (-1 === radical.id.indexOf("-")) {
        baseRadical = radical;
        if (radical.b) mapping.set(radical.b, radical.id);
        if (radical.k) mapping.set(radical.k, radical.id);
      } else {
        if (!baseRadical) throw new Error("Radicals out of order--no base radical found");
        if (radical.r !== baseRadical.r) throw new Error("Radicals out of order--ID mismatch");
        // Skip 130-2. This one is special. It's にくづき which has the same
        // unicode codepoint as つき but we don't want to clobber that record
        // (which we'll end up doing because they have different base radicals).
        
        // Instead, we'll take care to pick up variants like this in
        // getComponentsForKanji (or more specifically popVariantForRadical).
                if ("130-2" === radical.id) continue;
        if (radical.b && radical.b !== baseRadical.b) mapping.set(radical.b, radical.id);
        if (radical.k && radical.k !== baseRadical.k) mapping.set(radical.k, radical.id);
      }
      return mapping;
    }
    // -------------------------------------------------------------------------
    
    // Names
    
    // -------------------------------------------------------------------------
        async function getNames(search) {
      const db = await dist_open();
      if (!db) return [];
      // Normalize search string
            const lookup = search.normalize();
      // Set up our output value.
            const addedRecords = new Set;
      const result = [];
      const maybeAddRecord = record => {
        if (!addedRecords.has(record.id)) {
          result.push(stripFields(record, [ "h" ]));
          addedRecords.add(record.id);
        }
      };
      // Try the k (kanji) index first
            const kanjiIndex = db.transaction("names").store.index("k");
      // (We explicitly use IDBKeyRange.only because otherwise the idb TS typings
      // fail to recognize that these indices are multi-entry and hence it is
      // valid to supply a single string instead of an array of strings.)
            for await (const cursor of kanjiIndex.iterate(IDBKeyRange.only(lookup))) maybeAddRecord(cursor.value);
      // Then the r (reading) index
            const readingIndex = db.transaction("names").store.index("r");
      for await (const cursor of readingIndex.iterate(IDBKeyRange.only(lookup))) maybeAddRecord(cursor.value);
      // Then finally try converting to hiragana and using the hiragana index
            const hiraganaIndex = db.transaction("names").store.index("h");
      const hiragana = kana_to_hiragana_kanaToHiragana(lookup);
      for await (const cursor of hiraganaIndex.iterate(IDBKeyRange.only(hiragana))) maybeAddRecord(cursor.value);
      return result;
    }
    // This is in part:
    // - Missing typings for requestIdleCallback
    // - Polyfill for browsers that don't support requestIdleCallback
    // - Polyfill for non-Window contexts (e.g. workers)
    let requestIdleCallback;
    let cancelIdleCallback;
    if ("object" === typeof self && "function" === typeof self.requestIdleCallback && "function" === typeof self.cancelIdleCallback) {
      requestIdleCallback = self.requestIdleCallback;
      cancelIdleCallback = self.cancelIdleCallback;
    } else {
      requestIdleCallback = (callback, options) => {
        // Use half the specified timeout since it probably represents a worst-case
        // scenario.
        const timeout = options ? options.timeout / 2 : 0;
        return self.setTimeout((() => {
          callback({
            timeRemaining: () => 0,
            didTimeout: true
          });
        }), timeout);
      };
      cancelIdleCallback = handle => {
        clearTimeout(handle);
      };
    }
    new Map;
    new Map;
    // ---------------------------------------------------------------------------
    
    // State transitions
    
    // ---------------------------------------------------------------------------
        // EXTERNAL MODULE: ./node_modules/@bugsnag/browser/dist/bugsnag.js
    var bugsnag = __webpack_require__(508);
    var bugsnag_default =  __webpack_require__.n(bugsnag);
    // CONCATENATED MODULE: ./node_modules/superstruct/dist/index.mjs
    /**
 * A `StructFailure` represents a single specific failure in validation.
 */
    /**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */
    class dist_StructError extends TypeError {
      constructor(failure, failures) {
        let cached;
        const {message, explanation, ...rest} = failure;
        const {path} = failure;
        const msg = 0 === path.length ? message : `At path: ${path.join(".")} -- ${message}`;
        super(explanation ?? msg);
        if (null != explanation) this.cause = msg;
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = () => cached ?? (cached = [ failure, ...failures() ]);
      }
    }
    /**
 * Check if a value is an iterator.
 */    function dist_isIterable(x) {
      return superstruct_dist_isObject(x) && "function" === typeof x[Symbol.iterator];
    }
    /**
 * Check if a value is a plain object.
 */    function superstruct_dist_isObject(x) {
      return "object" === typeof x && null != x;
    }
    /**
 * Check if a value is a plain object.
 */    
    /**
 * Return a value as a printable string.
 */
    function dist_print(value) {
      if ("symbol" === typeof value) return value.toString();
      return "string" === typeof value ? JSON.stringify(value) : `${value}`;
    }
    /**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */    function dist_shiftIterator(input) {
      const {done, value} = input.next();
      return done ? void 0 : value;
    }
    /**
 * Convert a single validation result to a failure.
 */    function dist_toFailure(result, context, struct, value) {
      if (true === result) return; else if (false === result) result = {}; else if ("string" === typeof result) result = {
        message: result
      };
      const {path, branch} = context;
      const {type} = struct;
      const {refinement, message = `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${dist_print(value)}\``} = result;
      return {
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch,
        ...result,
        message
      };
    }
    /**
 * Convert a validation result to an iterable of failures.
 */    function* dist_toFailures(result, context, struct, value) {
      if (!dist_isIterable(result)) result = [ result ];
      for (const r of result) {
        const failure = dist_toFailure(r, context, struct, value);
        if (failure) yield failure;
      }
    }
    /**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */    function* dist_run(value, struct, options = {}) {
      const {path = [], branch = [ value ], coerce = false, mask = false} = options;
      const ctx = {
        path,
        branch
      };
      if (coerce) {
        value = struct.coercer(value, ctx);
        if (mask && "type" !== struct.type && superstruct_dist_isObject(struct.schema) && superstruct_dist_isObject(value) && !Array.isArray(value)) for (const key in value) if (void 0 === struct.schema[key]) delete value[key];
      }
      let status = "valid";
      for (const failure of struct.validator(value, ctx)) {
        failure.explanation = options.message;
        status = "not_valid";
        yield [ failure, void 0 ];
      }
      for (let [k, v, s] of struct.entries(value, ctx)) {
        const ts = dist_run(v, s, {
          path: void 0 === k ? path : [ ...path, k ],
          branch: void 0 === k ? branch : [ ...branch, v ],
          coerce,
          mask,
          message: options.message
        });
        for (const t of ts) if (t[0]) {
          status = null != t[0].refinement ? "not_refined" : "not_valid";
          yield [ t[0], void 0 ];
        } else if (coerce) {
          v = t[1];
          if (void 0 === k) value = v; else if (value instanceof Map) value.set(k, v); else if (value instanceof Set) value.add(v); else if (superstruct_dist_isObject(value)) if (void 0 !== v || k in value) value[k] = v;
        }
      }
      if ("not_valid" !== status) for (const failure of struct.refiner(value, ctx)) {
        failure.explanation = options.message;
        status = "not_refined";
        yield [ failure, void 0 ];
      }
      if ("valid" === status) yield [ void 0, value ];
    }
    /**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */    class dist_Struct {
      constructor(props) {
        const {type, schema, validator, refiner, coercer = value => value, entries = function*() {}} = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) this.validator = (value, context) => {
          const result = validator(value, context);
          return dist_toFailures(result, context, this, value);
        }; else this.validator = () => [];
        if (refiner) this.refiner = (value, context) => {
          const result = refiner(value, context);
          return dist_toFailures(result, context, this, value);
        }; else this.refiner = () => [];
      }
      /**
     * Assert that a value passes the struct's validation, throwing if it doesn't.
     */      assert(value, message) {
        return dist_assert(value, this, message);
      }
      /**
     * Create a value with the struct's coercion logic, then validate it.
     */      create(value, message) {
        return dist_create(value, this, message);
      }
      /**
     * Check if a value passes the struct's validation.
     */      is(value) {
        return dist_is(value, this);
      }
      /**
     * Mask a value, coercing and validating it, but returning only the subset of
     * properties defined by the struct's schema.
     */      mask(value, message) {
        return dist_mask(value, this, message);
      }
      /**
     * Validate a value with the struct's validation logic, returning a tuple
     * representing the result.
     *
     * You may optionally pass `true` for the `withCoercion` argument to coerce
     * the value before attempting to validate it. If you do, the result will
     * contain the coerced result when successful.
     */      validate(value, options = {}) {
        return dist_validate(value, this, options);
      }
    }
    /**
 * Assert that a value passes a struct, throwing if it doesn't.
 */    function dist_assert(value, struct, message) {
      const result = dist_validate(value, struct, {
        message
      });
      if (result[0]) throw result[0];
    }
    /**
 * Create a value with the coercion logic of struct and validate it.
 */    function dist_create(value, struct, message) {
      const result = dist_validate(value, struct, {
        coerce: true,
        message
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Mask a value, returning only the subset of properties defined by a struct.
 */    function dist_mask(value, struct, message) {
      const result = dist_validate(value, struct, {
        coerce: true,
        mask: true,
        message
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Check if a value passes a struct.
 */    function dist_is(value, struct) {
      const result = dist_validate(value, struct);
      return !result[0];
    }
    /**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */    function dist_validate(value, struct, options = {}) {
      const tuples = dist_run(value, struct, options);
      const tuple = dist_shiftIterator(tuples);
      if (tuple[0]) {
        const error = new dist_StructError(tuple[0], (function*() {
          for (const t of tuples) if (t[0]) yield t[0];
        }));
        return [ error, void 0 ];
      } else {
        const v = tuple[1];
        return [ void 0, v ];
      }
    }
    function dist_assign(...Structs) {
      const isType = "type" === Structs[0].type;
      const schemas = Structs.map((s => s.schema));
      const schema = Object.assign({}, ...schemas);
      return isType ? dist_type(schema) : dist_object(schema);
    }
    /**
 * Define a new struct type with a custom validation function.
 */    function dist_define(name, validator) {
      return new dist_Struct({
        type: name,
        schema: null,
        validator
      });
    }
    /**
 * Create a new struct based on an existing struct, but the value is allowed to
 * be `undefined`. `log` will be called if the value is not `undefined`.
 */    
    /**
 * Ensure that a value is a boolean.
 */
    function dist_boolean() {
      return dist_define("boolean", (value => "boolean" === typeof value));
    }
    /**
 * Ensure that a value is a valid `Date`.
 *
 * Note: this also ensures that the value is *not* an invalid `Date` object,
 * which can occur when parsing a date fails but still returns a `Date`.
 */    function dist_enums(values) {
      const schema = {};
      const description = values.map((v => dist_print(v))).join();
      for (const key of values) schema[key] = key;
      return new dist_Struct({
        type: "enums",
        schema,
        validator(value) {
          return values.includes(value) || `Expected one of \`${description}\`, but received: ${dist_print(value)}`;
        }
      });
    }
    /**
 * Ensure that a value is a function.
 */    
    /**
 * Ensure that a value is an integer.
 */
    function dist_integer() {
      return dist_define("integer", (value => "number" === typeof value && !isNaN(value) && Number.isInteger(value) || `Expected an integer, but received: ${dist_print(value)}`));
    }
    /**
 * Ensure that a value matches all of a set of types.
 */    function dist_literal(constant) {
      const description = dist_print(constant);
      const t = typeof constant;
      return new dist_Struct({
        type: "literal",
        schema: "string" === t || "number" === t || "boolean" === t ? constant : null,
        validator(value) {
          return value === constant || `Expected the literal \`${description}\`, but received: ${dist_print(value)}`;
        }
      });
    }
    /**
 * Ensure that no value ever passes validation.
 */
    function dist_never() {
      return dist_define("never", (() => false));
    }
    /**
 * Augment an existing struct to allow `null` values.
 */    
    /**
 * Ensure that a value is a number.
 */
    function dist_number() {
      return dist_define("number", (value => "number" === typeof value && !isNaN(value) || `Expected a number, but received: ${dist_print(value)}`));
    }
    function dist_object(schema) {
      const knowns = schema ? Object.keys(schema) : [];
      const Never = dist_never();
      return new dist_Struct({
        type: "object",
        schema: schema ? schema : null,
        * entries(value) {
          if (schema && superstruct_dist_isObject(value)) {
            const unknowns = new Set(Object.keys(value));
            for (const key of knowns) {
              unknowns.delete(key);
              yield [ key, value[key], schema[key] ];
            }
            for (const key of unknowns) yield [ key, value[key], Never ];
          }
        },
        validator(value) {
          return superstruct_dist_isObject(value) || `Expected an object, but received: ${dist_print(value)}`;
        },
        coercer(value) {
          return superstruct_dist_isObject(value) ? {
            ...value
          } : value;
        }
      });
    }
    /**
 * Augment a struct to allow `undefined` values.
 */    function dist_optional(struct) {
      return new dist_Struct({
        ...struct,
        validator: (value, ctx) => void 0 === value || struct.validator(value, ctx),
        refiner: (value, ctx) => void 0 === value || struct.refiner(value, ctx)
      });
    }
    /**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */    function dist_record(Key, Value) {
      return new dist_Struct({
        type: "record",
        schema: null,
        * entries(value) {
          if (superstruct_dist_isObject(value)) for (const k in value) {
            const v = value[k];
            yield [ k, k, Key ];
            yield [ k, v, Value ];
          }
        },
        validator(value) {
          return superstruct_dist_isObject(value) || `Expected an object, but received: ${dist_print(value)}`;
        }
      });
    }
    /**
 * Ensure that a value is a `RegExp`.
 *
 * Note: this does not test the value against the regular expression! For that
 * you need to use the `pattern()` refinement.
 */    
    /**
 * Ensure that a value is a string.
 */
    function dist_string() {
      return dist_define("string", (value => "string" === typeof value || `Expected a string, but received: ${dist_print(value)}`));
    }
    /**
 * Ensure that a value is a tuple of a specific length, and that each of its
 * elements is of a specific type.
 */    
    /**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */
    function dist_type(schema) {
      const keys = Object.keys(schema);
      return new dist_Struct({
        type: "type",
        schema,
        * entries(value) {
          if (superstruct_dist_isObject(value)) for (const k of keys) yield [ k, value[k], schema[k] ];
        },
        validator(value) {
          return superstruct_dist_isObject(value) || `Expected an object, but received: ${dist_print(value)}`;
        },
        coercer(value) {
          return superstruct_dist_isObject(value) ? {
            ...value
          } : value;
        }
      });
    }
    /**
 * Ensure that a value matches one of a set of types.
 */    
    /**
 * Ensure that a number or date is above a threshold.
 */
    function dist_min(struct, threshold, options = {}) {
      const {exclusive} = options;
      return dist_refine(struct, "min", (value => exclusive ? value > threshold : value >= threshold || `Expected a ${struct.type} greater than ${exclusive ? "" : "or equal to "}${threshold} but received \`${value}\``));
    }
    /**
 * Ensure that a string, array, map or set is not empty.
 */    
    /**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */
    function dist_refine(struct, name, refiner) {
      return new dist_Struct({
        ...struct,
        * refiner(value, ctx) {
          yield* struct.refiner(value, ctx);
          const result = refiner(value, ctx);
          const failures = dist_toFailures(result, ctx, struct, value);
          for (const failure of failures) yield {
            ...failure,
            refinement: name
          };
        }
      });
    }
    // EXTERNAL MODULE: ./node_modules/webextension-polyfill-ts/lib/index.js
        var lib = __webpack_require__(739);
    // CONCATENATED MODULE: ./src/common/extension-storage-error.ts
    class ExtensionStorageError extends Error {
      constructor({key, action}, ...params) {
        super(...params);
        Object.setPrototypeOf(this, ExtensionStorageError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, ExtensionStorageError);
        this.name = "ExtensionStorageError";
        this.message = `Failed to ${action} '${key}'`;
        this.key = key;
        this.action = action;
      }
    }
    // CONCATENATED MODULE: ./src/background/fx-data.ts
    const FxLocalDataSchema = dist_type({
      timestamp: dist_min(dist_integer(), 0),
      rates: dist_record(dist_string(), dist_number()),
      updated: dist_min(dist_integer(), 0)
    });
    async function getLocalFxData(onUpdate) {
      var _a;
      if (onUpdate) lib.browser.storage.onChanged.addListener(getStorageChangeCallback(onUpdate));
      try {
        const fxData = null === (_a = await lib.browser.storage.local.get("fx")) || void 0 === _a ? void 0 : _a.fx;
        if (!fxData) return;
        const [error, validated] = dist_validate(fxData, FxLocalDataSchema);
        if (validated) return validated; else if (error) bugsnag_default().notify(error, (event => {
          event.severity = "warning";
        }));
      } catch (e) {
        bugsnag_default().notify(new ExtensionStorageError({
          key: "fx",
          action: "get"
        }), (event => {
          event.severity = "warning";
          event.addMetadata("error", {
            error: e
          });
        }));
      }
      return;
    }
    function getStorageChangeCallback(onChange) {
      return (changes, areaName) => {
        if ("local" !== areaName) return;
        if ("fx" in changes) {
          const [error, validated] = dist_validate(changes.fx.newValue, FxLocalDataSchema);
          if (validated) onChange(validated); else bugsnag_default().notify(error, (event => {
            event.severity = "warning";
          }));
        }
      };
    }
    // Detect if the primary input means is capable of hovering. If it is NOT
    // we show the puck by default.
    // e.g. if we're on a laptop device that has a touchpad or mouse we generally
    // _don't_ want to show the puck unless the user explicitly enables it.
    // For a smartphone or tablet, however, we want to show the puck by default.
    function getHoverCapabilityMql() {
      // The undefined case here is just for the sake of our unit tests.
      return window.matchMedia ? window.matchMedia("(hover: hover)") : void 0;
    }
    function getMouseCapabilityMql() {
      return window.matchMedia ? window.matchMedia("(hover: hover) and (pointer: fine)") : void 0;
    }
    // CONCATENATED MODULE: ./src/utils/is-object.ts
    function is_object_isObject(a) {
      return "object" === typeof a && null !== a && !Array.isArray(a);
    }
    // CONCATENATED MODULE: ./src/utils/strip-fields.ts
    /**
 * A helper to strip certain fields from an object.
 */
    function strip_fields_stripFields(o, fields) {
      const result = {
        ...o
      };
      for (const field of fields) delete result[field];
      return result;
    }
    // CONCATENATED MODULE: ./src/common/db-languages.ts
    const dbLanguages = [ "de", "en", "es", "fr", "hu", "nl", "pt", "ru", "sl", "sv" ];
    // CONCATENATED MODULE: ./src/common/refs.ts
    const SUPPORTED_REFERENCES = [ 
    // The radical for the kanji (number and character, from rad field)
    "radical", 
    // Nelson radical (from rad field)
    "nelson_r", 
    // Kanji kentei (from misc field)
    "kk", 
    // Pinyin reading
    "py", 
    // JLPT level (from misc field)
    "jlpt", 
    // Unicode codepoint (generated)
    "unicode", 
    // Conning, The Kodansha Kanji Learner's Course
    "conning", 
    // New Japanese-English Character Dictionary
    "halpern_njecd", 
    // Learners Dictionary 2nd ed.
    "halpern_kkld_2ed", 
    // Remembering the Kanji (6th ed.)
    "heisig6", 
    // A Guide To Remembering Japanese Characters
    "henshall", 
    // Kanji and Kana (2011 edition)
    "sh_kk2", 
    // Japanese For Busy People vols I-III
    "busy_people", 
    // Kanji in Context by Nishiguchi and Kono
    "kanji_in_context", 
    // the Kodansha Compact Kanji Guide
    "kodansha_compact", 
    // Yves Maniette's "Les Kanjis dans la tete" French adaptation of Heisig
    // (Only included for lang:fr)
    "maniette", 
    // "Classic" Nelson - Modern Reader's Japanese-English Character Dictionary
    "nelson_c", 
    // The New Nelson Japanese-English Character Dictionary
    "nelson_n", 
    // Halpern's SKIP (System of Kanji Indexing by Patterns)
    "skip", 
    // Descriptor codes for The Kanji Dictionary
    "sh_desc" ];
    function getReferencesForLang(lang) {
      if ("fr" !== lang) return SUPPORTED_REFERENCES.filter((ref => "maniette" !== ref));
      return SUPPORTED_REFERENCES;
    }
    const REFERENCE_ABBREV_MAPPING = {
      CO: "conning",
      H: "halpern_njecd",
      L: "heisig6",
      E: "henshall",
      KK: "kk",
      DK: "halpern_kkld_2ed",
      N: "nelson_c",
      NR: "nelson_r",
      V: "nelson_n",
      P: "skip",
      IN: "sh_kk2",
      I: "sh_desc",
      U: "unicode",
      Y: "py"
    };
    function convertLegacyReference(ref) {
      return REFERENCE_ABBREV_MAPPING.hasOwnProperty(ref) ? REFERENCE_ABBREV_MAPPING[ref] : void 0;
    }
    // Note that when adding or modifying labels here, it is important that the full
    // and short versions sort roughly the same so that they appear to be in
    // alphabetical order in both the popup (where we use the short form) and
    // options page (where we use the long form).
    
    // We sort by the short label, where available, which enables, for example,
    // showing an initial "The" in the long label but still sorting by the short
    // label (which does not include the "The"). Such exceptions aside, however, the
    // full and short versions should generally start with the same first few words.
        // CONCATENATED MODULE: ./src/common/config.ts
    // This is largely a wrapper about the browser.sync.settings API which provides
    // following important features:
    // * Only options that are explicitly set get saved. (This prevents the
    //   "FoxClocks problem" where, when you install the FoxClocks add-on on a new
    //   computer it sets all the settings to their default values before a sync
    //   happens so then all other synchronized computers end up having their
    //   settings reset to their default values.)
    // * Provides a snapshot of all options with their default values filled-in for
    //   passing to the content process.
    const DEFAULT_KEY_SETTINGS = [ {
      name: "nextDictionary",
      keys: [ "Shift", "Enter", "n" ],
      enabledKeys: [ "Shift", "Enter" ],
      l10nKey: "options_popup_switch_dictionaries"
    }, {
      name: "kanjiLookup",
      keys: [ "Shift" ],
      enabledKeys: [],
      l10nKey: "options_popup_kanji_lookup"
    }, {
      name: "toggleDefinition",
      keys: [ "d" ],
      enabledKeys: [],
      l10nKey: "options_popup_toggle_definition"
    }, {
      name: "closePopup",
      keys: [ "Esc", "x" ],
      enabledKeys: [ "Esc" ],
      l10nKey: "options_popup_close_popup"
    }, {
      name: "pinPopup",
      keys: [ "Alt", "Ctrl", "Space" ],
      enabledKeys: [ "Ctrl" ],
      l10nKey: "options_popup_pin_popup"
    }, {
      name: "movePopupDownOrUp",
      keys: [ "j,k" ],
      enabledKeys: [],
      l10nKey: "options_popup_move_popup_down_or_up"
    }, {
      name: "startCopy",
      keys: [ "c" ],
      enabledKeys: [ "c" ],
      l10nKey: "options_popup_start_copy"
    } ];
    // The following references were added to this extension in a later version and
    // so we turn them off by default to avoid overwhelming users with too many
    // references.
        const OFF_BY_DEFAULT_REFERENCES = new Set([ "busy_people", "kanji_in_context", "kodansha_compact", "maniette" ]);
    class Config {
      constructor() {
        this.settings = {};
        this.changeListeners = [];
        this.mouseCapabilityMql = getMouseCapabilityMql();
        this.readyPromise = this.readSettings().then((async () => {
          this.fxData = await getLocalFxData(this.onFxDataChange.bind(this));
        }));
        this.previousDefaultLang = this.getDefaultLang();
        this.onChange = this.onChange.bind(this);
        lib.browser.storage.onChanged.addListener(this.onChange);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        window.addEventListener("languagechange", this.onLanguageChange);
        this.onHoverCapabilityChange = this.onHoverCapabilityChange.bind(this);
      }
      async readSettings() {
        let settings;
        try {
          settings = await lib.browser.storage.sync.get(null);
        } catch {
          settings = {};
        }
        try {
          settings.localSettings = (await lib.browser.storage.local.get("settings")).settings;
        } catch {
          // Ignore
        }
        this.settings = settings;
        await this.upgradeSettings();
        this.maybeListenToHoverCapabilityChanges();
      }
      async upgradeSettings() {
        // If we have old kanji reference settings but not new ones, upgrade them.
        if (this.settings.hasOwnProperty("kanjiReferences") && !this.settings.kanjiReferencesV2) {
          const newSettings = {};
          const existingSettings = this.settings.kanjiReferences;
          for (const [ref, enabled] of Object.entries(existingSettings)) {
            const newRef = convertLegacyReference(ref);
            if (newRef) newSettings[newRef] = enabled;
          }
          this.settings.kanjiReferencesV2 = newSettings;
          try {
            await lib.browser.storage.sync.set({
              kanjiReferencesV2: newSettings
            });
          } catch {
            // If we failed to store the upgraded settings that's fine since at
            // least the in-memory version of the settings has been upgraded.
            // We'll try upgrading the stored settings next time we're loaded
            // anyway.
            console.error("Failed to upgrade kanji references settings");
          }
        }
      }
      get ready() {
        return this.readyPromise;
      }
      async onChange(changes, areaName) {
        if ("sync" !== areaName && "local" !== areaName) return;
        // Re-read settings in case the changes were made by a different instance of
        // this class.
                await this.readSettings();
        // Extract the changes in a suitable form
                const updatedChanges = "sync" === areaName ? {
          ...changes
        } : this.extractLocalSettingChanges(changes);
        // Fill in default setting values
                for (const key of Object.keys(updatedChanges)) switch (key) {
         case "dictLang":
          updatedChanges.dictLang = {
            ...changes.dictLang
          };
          if (!updatedChanges.dictLang.newValue) updatedChanges.dictLang.newValue = this.dictLang;
          if (!updatedChanges.dictLang.oldValue) updatedChanges.dictLang.oldValue = this.previousDefaultLang;
          break;

          // Following is just the set of properties we know we actually inspect
          // the `newValue` of. We don't have a convenient means of fetching the
          // default value to fill in the oldValue, but we don't currently need
          // it either.
                   case "contextMenuEnable":
         case "popupStyle":
         case "toolbarIcon":
          updatedChanges[key] = {
            ...changes[key]
          };
          if ("undefined" === typeof updatedChanges[key].newValue || null === updatedChanges[key].newValue) updatedChanges[key].newValue = this[key];
          break;
        }
        if (!Object.keys(updatedChanges).length) return;
        // Fill out computed values
                if (updatedChanges.hasOwnProperty("showPuck")) updatedChanges["computed:showPuck"] = {
          newValue: this.contentConfig.showPuck
        };
        for (const listener of this.changeListeners) listener(updatedChanges);
      }
      async onFxDataChange(fxData) {
        this.fxData = fxData;
        const updatedChanges = {
          fxCurrencies: {
            newValue: this.fxCurrencies
          },
          fx: {
            newValue: this.contentConfig.fx
          }
        };
        for (const listener of this.changeListeners) listener(updatedChanges);
      }
      extractLocalSettingChanges(changes) {
        var _a, _b;
        if ("object" !== typeof changes.settings || !is_object_isObject(changes.settings)) return {};
        const settingsChange = changes.settings;
        const settings = [ ...new Set([ ...Object.keys(settingsChange.newValue || {}), ...Object.keys(settingsChange.oldValue || {}) ]) ];
        const result = {};
        for (const setting of settings) result[setting] = {
          newValue: null === (_a = settingsChange.newValue) || void 0 === _a ? void 0 : _a[setting],
          oldValue: null === (_b = settingsChange.oldValue) || void 0 === _b ? void 0 : _b[setting]
        };
        return result;
      }
      addChangeListener(callback) {
        if (-1 !== this.changeListeners.indexOf(callback)) return;
        this.changeListeners.push(callback);
      }
      removeChangeListener(callback) {
        const index = this.changeListeners.indexOf(callback);
        if (-1 === index) return;
        this.changeListeners.splice(index, 1);
      }
      // accentDisplay: Defaults to binary
      get accentDisplay() {
        return "undefined" === typeof this.settings.accentDisplay ? "binary" : this.settings.accentDisplay;
      }
      set accentDisplay(value) {
        if ("undefined" !== typeof this.settings.accentDisplay && this.settings.accentDisplay === value) return;
        this.settings.accentDisplay = value;
        void lib.browser.storage.sync.set({
          accentDisplay: value
        });
      }
      // contextMenuEnable: Defaults to true
      get contextMenuEnable() {
        return "undefined" === typeof this.settings.contextMenuEnable || this.settings.contextMenuEnable;
      }
      set contextMenuEnable(value) {
        if ("undefined" !== typeof this.settings.contextMenuEnable && this.settings.contextMenuEnable === value) return;
        this.settings.contextMenuEnable = value;
        void lib.browser.storage.sync.set({
          contextMenuEnable: value
        });
      }
      // dictLang: Defaults to the first match from navigator.languages found in
      // dbLanguages, or 'en' otherwise.
      get dictLang() {
        return this.useDefaultLang() ? this.getDefaultLang() : this.settings.dictLang;
      }
      set dictLang(value) {
        if (this.settings.dictLang && this.settings.dictLang === value) return;
        // Note that we don't need to check that `value` is valid since TypeScript
        // does that for us.
        // If the value to set matches the default we clear the setting. This is so
        // that if we later support one of the user's more preferred languages we
        // can update them automatically.
                if (value === this.getDefaultLang()) {
          lib.browser.storage.sync.remove("dictLang").catch((() => {
            bugsnag_default().notify(new ExtensionStorageError({
              key: "dictLang",
              action: "remove"
            }), (event => {
              event.severity = "warning";
            }));
          }));
          delete this.settings.dictLang;
        } else {
          lib.browser.storage.sync.set({
            dictLang: value
          }).catch((() => {
            bugsnag_default().notify(new ExtensionStorageError({
              key: "dictLang",
              action: "set"
            }), (event => {
              event.severity = "warning";
            }));
          }));
          this.settings.dictLang = value;
        }
      }
      useDefaultLang() {
        // Check that the language that is set is valid. It might be invalid if we
        // deprecated a language or we synced a value from a newer version of the
        // extension.
        if (this.settings.dictLang) return !dbLanguages.includes(this.settings.dictLang);
        return true;
      }
      getDefaultLang() {
        const availableLanguages = new Set(dbLanguages);
        for (const lang of navigator.languages) {
          const langCode = lang.split("-")[0];
          if (availableLanguages.has(langCode)) return langCode;
        }
        return "en";
      }
      onLanguageChange() {
        // If the user's accept-languages setting changed AND we are basing the
        // dictLang value on that we should notify listeners of the change.
        if (!this.useDefaultLang()) return;
        const newValue = this.getDefaultLang();
        if (this.previousDefaultLang !== newValue) {
          const oldValue = this.previousDefaultLang;
          this.previousDefaultLang = newValue;
          const changes = {
            dictLang: {
              newValue,
              oldValue
            }
          };
          for (const listener of this.changeListeners) listener(changes);
        }
      }
      // fxCurrency: Defaults to USD
      get fxCurrency() {
        return "string" === typeof this.settings.fxCurrency ? this.settings.fxCurrency : "USD";
      }
      set fxCurrency(value) {
        const storedSetting = this.settings.fxCurrency;
        if (value === storedSetting) return;
        // Unlike many other settings, we don't reset the setting if the user
        // chooses the default value ('USD') since in this case we treat it as an
        // explicit signal they want currencies displayed in USD even if we later
        // change the default.
                void lib.browser.storage.sync.set({
          fxCurrency: value
        });
        this.settings.fxCurrency = value;
      }
      get fxCurrencies() {
        return this.fxData ? Object.keys(this.fxData.rates).sort(((a, b) => a.localeCompare(b))) : void 0;
      }
      // highlightStyle: Defaults to 'yellow'
      get highlightStyle() {
        var _a;
        return null !== (_a = this.settings.highlightStyle) && void 0 !== _a ? _a : "yellow";
      }
      set highlightStyle(value) {
        if (this.highlightStyle === value) return;
        if ("yellow" === value) {
          this.settings.highlightStyle = void 0;
          void lib.browser.storage.sync.remove("highlightStyle");
        } else {
          this.settings.highlightStyle = value;
          void lib.browser.storage.sync.set({
            highlightStyle: value
          });
        }
      }
      // holdToShowKeys: Defaults to null
      get holdToShowKeys() {
        return "string" === typeof this.settings.holdToShowKeys ? this.settings.holdToShowKeys : null;
      }
      set holdToShowKeys(value) {
        const storedSetting = this.settings.holdToShowKeys || null;
        if (value === storedSetting) return;
        if (null === value) {
          void lib.browser.storage.sync.remove("holdToShowKeys");
          delete this.settings.holdToShowKeys;
        } else {
          void lib.browser.storage.sync.set({
            holdToShowKeys: value
          });
          this.settings.holdToShowKeys = value;
        }
        // If holdToShowImageKeys was mirroring this setting, save the previous
        // value as its own value.
                if ("undefined" === typeof this.settings.holdToShowImageKeys) this.holdToShowImageKeys = storedSetting; else if (!value && "none" === this.settings.holdToShowImageKeys) this.holdToShowImageKeys = null;
      }
      // holdToShowImageKeys: Default is... complicated.
      // This setting was introduced after the "holdToShowKeys" setting was
      // introduced and we want the default behavior to be:
      // - For new users, nothing, since that's the default for "holdToShow" keys
      //   and it makes sense to surface this by default and let users who find it
      //   annoying turn it off.
      // - For users who have previously configured a "holdToShowKeys" setting,
      //   the same value as the "holdToShowKeys" setting since previously that
      //   setting controlled this behavior.
      // But how do we distinguish between a user who has previously configured the
      // "holdToShowKeys" setting (meaning we should mirror that value here) vs one
      // who has configured the "holdToShowKeys" setting _since_ this setting was
      // introduced and deliberately wants different behavior to that setting?
      // We achieve that by deliberately storing "none" as the value for this
      // setting any time we alter the "holdToShowKeys" setting while this is null.
      get holdToShowImageKeys() {
        // If there is an explicit setting for this value, use that.
        if ("string" === typeof this.settings.holdToShowImageKeys) return "none" === this.settings.holdToShowImageKeys ? null : this.settings.holdToShowImageKeys;
        // Otherwise, mirror the holdToShowKeys setting
                return this.holdToShowKeys;
      }
      set holdToShowImageKeys(value) {
        // If this is null AND holdToShowKeys is null, then we can clear the local
        // setting. We only need to store 'none' if holdToShowKeys is set (in order
        // to ensure we DON'T mirror that setting).
        const settingToStore = null === value && this.holdToShowKeys ? "none" : value;
        // Ignore null-op changes
                const storedSetting = this.settings.holdToShowImageKeys || null;
        if (settingToStore === storedSetting) return;
        if (null === settingToStore) {
          void lib.browser.storage.sync.remove("holdToShowImageKeys");
          delete this.settings.holdToShowImageKeys;
        } else {
          void lib.browser.storage.sync.set({
            holdToShowImageKeys: settingToStore
          });
          this.settings.holdToShowImageKeys = settingToStore;
        }
      }
      // kanjiReferences: Defaults to true for all but a few references
      // that were added more recently.
      get kanjiReferences() {
        const setValues = this.settings.kanjiReferencesV2 || {};
        const result = [];
        for (const ref of getReferencesForLang(this.dictLang)) if ("undefined" === typeof setValues[ref]) {
          if (!OFF_BY_DEFAULT_REFERENCES.has(ref)) result.push(ref);
        } else if (setValues[ref]) result.push(ref);
        return result;
      }
      updateKanjiReferences(updatedReferences) {
        const existingSettings = this.settings.kanjiReferencesV2 || {};
        this.settings.kanjiReferencesV2 = {
          ...existingSettings,
          ...updatedReferences
        };
        void lib.browser.storage.sync.set({
          kanjiReferencesV2: this.settings.kanjiReferencesV2
        });
      }
      // keys: Defaults are defined by DEFAULT_KEY_SETTINGS, and particularly the
      // enabledKeys member.
      getDefaultEnabledKeys() {
        return DEFAULT_KEY_SETTINGS.reduce(((defaultKeys, setting) => {
          defaultKeys[setting.name] = setting.enabledKeys;
          return defaultKeys;
        }), {});
      }
      get keys() {
        var _a;
        const setValues = this.settings.keys || {};
        const keys = {
          ...this.getDefaultEnabledKeys(),
          ...setValues
        };
        // If there is no key set for the pin popup key, but there _is_ a suitable
        // hold-to-show key set, we should use that as the default value.
        
        // (Note that all this complexity might be meaningless. At least on Firefox
        // on Windows, no one in their right mind would configure Alt as their
        // hold-to-show key. Every time you release it the menu pops up!)
                if (!("pinPopup" in setValues)) {
          // Hold-to-show keys contains a string like `Alt+Ctrl` but we can only
          // re-use the hold-to-show keys when it's a single item like 'Alt'.
          const holdToShowKeys = null === (_a = this.holdToShowKeys) || void 0 === _a ? void 0 : _a.split("+");
          if (1 === (null === holdToShowKeys || void 0 === holdToShowKeys ? void 0 : holdToShowKeys.length)) {
            const holdToShowKey = holdToShowKeys[0];
            const availableKeys = DEFAULT_KEY_SETTINGS.find((k => "pinPopup" === k.name));
            if (null === availableKeys || void 0 === availableKeys ? void 0 : availableKeys.keys.includes(holdToShowKey)) keys.pinPopup = [ holdToShowKey ];
          }
        }
        return keys;
      }
      get keysNormalized() {
        const storedKeys = this.keys;
        const [down, up] = this.keys.movePopupDownOrUp.map((key => key.split(",", 2))).reduce((([existingDown, existingUp], [down, up]) => [ [ ...existingDown, down ], [ ...existingUp, up ] ]), [ [], [] ]);
        return {
          ...strip_fields_stripFields(storedKeys, [ "movePopupDownOrUp" ]),
          movePopupDown: down,
          movePopupUp: up
        };
      }
      updateKeys(keys) {
        const existingSettings = this.settings.keys || {};
        this.settings.keys = {
          ...existingSettings,
          ...keys
        };
        void lib.browser.storage.sync.set({
          keys: this.settings.keys
        });
      }
      // noTextHighlight: Defaults to false
      get noTextHighlight() {
        return !!this.settings.noTextHighlight;
      }
      set noTextHighlight(value) {
        if ("undefined" !== typeof this.settings.noTextHighlight && this.settings.noTextHighlight === value) return;
        this.settings.noTextHighlight = value;
        void lib.browser.storage.sync.set({
          noTextHighlight: value
        });
      }
      // popupInteractive (local): Defaults to true
      get popupInteractive() {
        var _a, _b;
        return null !== (_b = null === (_a = this.settings.localSettings) || void 0 === _a ? void 0 : _a.popupInteractive) && void 0 !== _b ? _b : true;
      }
      set popupInteractive(value) {
        var _a;
        const storedSetting = null === (_a = this.settings.localSettings) || void 0 === _a ? void 0 : _a.popupInteractive;
        if (storedSetting === value) return;
        const localSettings = {
          ...this.settings.localSettings
        };
        if (value) delete localSettings.popupInteractive; else localSettings.popupInteractive = false;
        this.settings.localSettings = localSettings;
        void lib.browser.storage.local.set({
          settings: localSettings
        });
        // We currently _don't_ set the `hasDismissedMouseOnboarding` property when
        // the user disables interactivity using the onboarding Disable button.
        
        // That's because this `popupInteractive` setting is a local setting and the
        // user will likely _want_ the onboarding to show up on synchronized devices
        // so they can easily click "Disable" there too.
        
        // However, if they re-enable interactivity, we should make sure that flag
        // is set so they no longer get bothered by the popup.
                if (value) this.setHasDismissedMouseOnboarding();
      }
      // popupStyle: Defaults to 'default'
      get popupStyle() {
        return "undefined" === typeof this.settings.popupStyle ? "default" : this.settings.popupStyle;
      }
      set popupStyle(value) {
        if ("undefined" !== typeof this.settings.popupStyle && this.settings.popupStyle === value || "undefined" === typeof this.settings.popupStyle && "default" === value) return;
        if ("default" !== value) {
          this.settings.popupStyle = value;
          void lib.browser.storage.sync.set({
            popupStyle: value
          });
        } else {
          this.settings.popupStyle = void 0;
          void lib.browser.storage.sync.remove("popupStyle");
        }
      }
      // posDisplay: Defaults to expl
      get posDisplay() {
        return "undefined" === typeof this.settings.posDisplay ? "expl" : this.settings.posDisplay;
      }
      set posDisplay(value) {
        if ("undefined" !== typeof this.settings.posDisplay && this.settings.posDisplay === value) return;
        this.settings.posDisplay = value;
        void lib.browser.storage.sync.set({
          posDisplay: value
        });
      }
      // readingOnly: Defaults to false
      get readingOnly() {
        return !!this.settings.readingOnly;
      }
      set readingOnly(value) {
        if ("undefined" !== typeof this.settings.readingOnly && this.settings.readingOnly === value) return;
        this.settings.readingOnly = value;
        void lib.browser.storage.sync.set({
          readingOnly: value
        });
      }
      toggleReadingOnly() {
        this.readingOnly = !this.settings.readingOnly;
      }
      // showKanjiComponents: Defaults to true
      get showKanjiComponents() {
        return "undefined" === typeof this.settings.showKanjiComponents || this.settings.showKanjiComponents;
      }
      set showKanjiComponents(value) {
        this.settings.showKanjiComponents = value;
        void lib.browser.storage.sync.set({
          showKanjiComponents: value
        });
      }
      // showPriority: Defaults to true
      get showPriority() {
        return "undefined" === typeof this.settings.showPriority || this.settings.showPriority;
      }
      set showPriority(value) {
        this.settings.showPriority = value;
        void lib.browser.storage.sync.set({
          showPriority: value
        });
      }
      // showPuck (local): Defaults to 'auto'
      get showPuck() {
        var _a;
        return (null === (_a = this.settings.localSettings) || void 0 === _a ? void 0 : _a.showPuck) || "auto";
      }
      set showPuck(value) {
        var _a;
        const storedSetting = (null === (_a = this.settings.localSettings) || void 0 === _a ? void 0 : _a.showPuck) || "auto";
        if (storedSetting === value) return;
        const localSettings = {
          ...this.settings.localSettings
        };
        if ("auto" === value) delete localSettings.showPuck; else localSettings.showPuck = value;
        this.settings.localSettings = localSettings;
        // We should make sure to set up the MediaQueryList _before_ updating local
        // storage since this will ensure that this.hoverCapabilityMql is
        // initialized before any StorageChange is dispatched.
                this.maybeListenToHoverCapabilityChanges();
        void lib.browser.storage.local.set({
          settings: localSettings
        });
      }
      maybeListenToHoverCapabilityChanges() {
        var _a, _b;
        if ("auto" === this.showPuck) {
          this.hoverCapabilityMql = this.hoverCapabilityMql || getHoverCapabilityMql();
          null === (_a = this.hoverCapabilityMql) || void 0 === _a ? void 0 : _a.addEventListener("change", this.onHoverCapabilityChange);
        } else null === (_b = this.hoverCapabilityMql) || void 0 === _b ? void 0 : _b.removeEventListener("change", this.onHoverCapabilityChange);
      }
      onHoverCapabilityChange(event) {
        if ("auto" !== this.showPuck) return;
        const changes = {
          "computed:showPuck": {
            newValue: event.matches ? "hide" : "show"
          }
        };
        for (const listener of this.changeListeners) listener(changes);
      }
      // showRomaji: Defaults to false
      get showRomaji() {
        return !!this.settings.showRomaji;
      }
      set showRomaji(value) {
        if ("undefined" !== typeof this.settings.showRomaji && this.settings.showRomaji === value) return;
        this.settings.showRomaji = value;
        void lib.browser.storage.sync.set({
          showRomaji: value
        });
      }
      // tabDisplay: Defaults to 'top'
      get tabDisplay() {
        return "undefined" === typeof this.settings.tabDisplay ? "top" : this.settings.tabDisplay;
      }
      set tabDisplay(value) {
        if ("undefined" !== typeof this.settings.tabDisplay && this.settings.tabDisplay === value || "undefined" === typeof this.settings.tabDisplay && "top" === value) return;
        if ("top" !== value) {
          this.settings.tabDisplay = value;
          void lib.browser.storage.sync.set({
            tabDisplay: value
          });
        } else {
          this.settings.tabDisplay = void 0;
          void lib.browser.storage.sync.remove("tabDisplay");
        }
      }
      // toolbarIcon: Defaults to 'default'
      get toolbarIcon() {
        return "undefined" === typeof this.settings.toolbarIcon ? "default" : this.settings.toolbarIcon;
      }
      set toolbarIcon(value) {
        if ("undefined" !== typeof this.settings.toolbarIcon && this.settings.toolbarIcon === value || "undefined" === typeof this.settings.toolbarIcon && "default" === value) return;
        if ("default" !== value) {
          this.settings.toolbarIcon = value;
          void lib.browser.storage.sync.set({
            toolbarIcon: value
          });
        } else {
          this.settings.toolbarIcon = void 0;
          void lib.browser.storage.sync.remove("toolbarIcon");
        }
      }
      // Mouse onboarding-related prefs (to be removed eventually)
      get hasDismissedMouseOnboarding() {
        return !!this.settings.hasDismissedMouseOnboarding;
      }
      setHasDismissedMouseOnboarding() {
        if (this.hasDismissedMouseOnboarding) return;
        this.settings.hasDismissedMouseOnboarding = true;
        void lib.browser.storage.sync.set({
          hasDismissedMouseOnboarding: true
        });
      }
      get hasUpgradedFromPreMouse() {
        var _a;
        return !!(null === (_a = this.settings.localSettings) || void 0 === _a ? void 0 : _a.hasUpgradedFromPreMouse);
      }
      setHasUpgradedFromPreMouse() {
        if (this.hasUpgradedFromPreMouse) return;
        const localSettings = {
          ...this.settings.localSettings
        };
        localSettings.hasUpgradedFromPreMouse = true;
        this.settings.localSettings = localSettings;
        void lib.browser.storage.local.set({
          settings: localSettings
        });
      }
      get numLookupsWithMouseOnboarding() {
        var _a, _b;
        return null !== (_b = null === (_a = this.settings.localSettings) || void 0 === _a ? void 0 : _a.numLookupsWithMouseOnboarding) && void 0 !== _b ? _b : 0;
      }
      incrementNumLookupsWithMouseOnboarding() {
        const localSettings = {
          ...this.settings.localSettings
        };
        if (localSettings.numLookupsWithMouseOnboarding) localSettings.numLookupsWithMouseOnboarding++; else localSettings.numLookupsWithMouseOnboarding = 1;
        this.settings.localSettings = localSettings;
        void lib.browser.storage.local.set({
          settings: localSettings
        });
      }
      // Get all the options the content process cares about at once
      get contentConfig() {
        var _a, _b;
        return {
          accentDisplay: this.accentDisplay,
          dictLang: this.dictLang,
          fx: this.fxData && this.fxCurrency in this.fxData.rates ? {
            currency: this.fxCurrency,
            rate: this.fxData.rates[this.fxCurrency],
            timestamp: this.fxData.timestamp
          } : void 0,
          hasDismissedMouseOnboarding: this.hasDismissedMouseOnboarding,
          hasUpgradedFromPreMouse: this.hasUpgradedFromPreMouse,
          highlightStyle: this.highlightStyle,
          holdToShowKeys: this.holdToShowKeys ? this.holdToShowKeys.split("+") : [],
          holdToShowImageKeys: this.holdToShowImageKeys ? this.holdToShowImageKeys.split("+") : [],
          kanjiReferences: this.kanjiReferences,
          keys: this.keysNormalized,
          noTextHighlight: this.noTextHighlight,
          popupInteractive: 
          // Force the value to true if we don't have a mouse
          this.popupInteractive || !(null === (_a = this.mouseCapabilityMql) || void 0 === _a ? void 0 : _a.matches),
          popupStyle: this.popupStyle,
          posDisplay: this.posDisplay,
          readingOnly: this.readingOnly,
          showKanjiComponents: this.showKanjiComponents,
          showPriority: this.showPriority,
          showPuck: "auto" === this.showPuck ? (null === (_b = this.hoverCapabilityMql) || void 0 === _b ? void 0 : _b.matches) ? "hide" : "show" : this.showPuck,
          showRomaji: this.showRomaji,
          tabDisplay: this.tabDisplay,
          toolbarIcon: this.toolbarIcon
        };
      }
    }
    // CONCATENATED MODULE: ./src/common/db-listener-messages.ts
    const notifyDbStateUpdated = state => ({
      type: "dbstateupdated",
      state
    });
    // CONCATENATED MODULE: ./src/utils/release-stage.ts
    let releaseStage = "production";
    if (lib.browser.management) lib.browser.management.getSelf().then((info => {
      if ("development" === info.installType) releaseStage = "development";
    })).catch((e => {
      console.warn(e);
    }));
    function getReleaseStage() {
      return releaseStage;
    }
    // CONCATENATED MODULE: ./src/utils/bugsnag.ts
    const getExtensionInstallId = async () => {
      var _a;
      let internalUuid;
      try {
        // In Firefox, each install gets a unique internal UUID which differs from
        // the extension ID (provided it is set through the
        // browser_specific_settings in manifest.json).
        // Specifically:
        // browser.runtime.id = Extension ID
        // browser.runtime.getURL('yer').host = Internal UUID
        // browser.getMessage('@@extension_id') = Internal UUID
        // In other browsers I think all of the above return the Extension ID.
        // (I haven't checked Safari, however.)
        // If that internal UUID is available, we use it because it is sometimes
        // helpful when Firefox users contact us describing a bug, to be able to
        // find error reports generated from their installation.
        internalUuid = new URL(lib.browser.runtime.getURL("yer")).host;
      } catch {
        // Ignore
      }
      if (internalUuid && internalUuid !== lib.browser.runtime.id) return internalUuid;
      // Generate/fetch a unique install ID since the browser doesn't provide one.
            try {
        let storedInstallId = null === (_a = await lib.browser.storage.local.get("installid")) || void 0 === _a ? void 0 : _a.installid;
        if (!storedInstallId) {
          const installId = getRandomId();
          await lib.browser.storage.local.set({
            installid: installId
          });
          storedInstallId = installId;
        }
        return storedInstallId;
      } catch {
        // Ignore because we are probably already in the middle of reporting an error
      }
      return "unknown";
    };
    function getRandomId() {
      const number = getRandomNumber(10);
      return `${"0".repeat(10)}${number.toString(36)}`.slice(-10);
    }
    // |length| here is the maximum number of base-36 digits we want to generate.
        function getRandomNumber(length) {
      if (Math.pow(36, length) > Number.MAX_SAFE_INTEGER) console.error(`A base-36 number with ${length} digits overflows the range of an integer`);
      const values = new Uint8Array(length);
      crypto.getRandomValues(values);
      const max = Math.pow(2, 8);
      let result = 0;
      for (let i = 0; i < values.length; i++) {
        result *= 36;
        result += Math.round(values[i] / max * 35);
      }
      return result;
    }
    function startBugsnag() {
      const manifest = lib.browser.runtime.getManifest();
      bugsnag_default().start({
        apiKey: "e707c9ae84265d122b019103641e6462",
        appVersion: manifest.version_name || manifest.version,
        autoTrackSessions: false,
        collectUserIp: false,
        enabledBreadcrumbTypes: [ "log", "error", "request" ],
        logger: null,
        onError: async event => {
          // Fill out the user ID
          // Bugsnag will generate a unique device ID, store it in local storage,
          // and use that as the user ID but that won't help us once we move to
          // MV3 (no local storage) or if we try to use it in a content script
          // (different local storage context) so we use our own ID that we store
          // in extension local storage.
          event.setUser(await getExtensionInstallId());
          // Group download errors by URL and error code
                    if ("DownloadError" === event.errors[0].errorClass && event.originalError && "undefined" !== typeof event.originalError.url) {
            event.groupingHash = String(event.originalError.code) + event.originalError.url;
            event.request.url = event.originalError.url;
          }
          // Group extension errors by action and key
                    if ("ExtensionStorageError" === event.errors[0].errorClass && event.originalError) {
            const {key, action} = event.originalError;
            event.groupingHash = `${action}:${key}`;
          }
          // Update release stage here since we can only fetch this async but
          // bugsnag doesn't allow updating the instance after initializing.
                    event.app.releaseStage = getReleaseStage();
          // Update paths in stack trace so that:
          
          // (a) They are the same across installations of the same version (since
          //     the installed extension ID in the path differs per installation).
          // (b) They point to where the source is available publicly.
          
          // Note that this is also necessary because Bugsnag's backend discards stack
          // frames from extensions.
          
          // See: https://docs.bugsnag.com/platforms/javascript/faq/?#how-can-i-get-error-reports-from-browser-extensions
                    const basePath = `https://github.com/birchill/10ten-ja-reader/releases/download/v${manifest.version}`;
          for (const error of event.errors) for (const frame of error.stacktrace) frame.file = frame.file.replace(/^(moz-extension|chrome-extension|extension|safari-extension):\/\/[0-9a-z-]+/, basePath);
          // If we get a QuotaExceededError, report how much disk space was available.
                    if ("QuotaExceededError" === event.errors[0].errorClass) try {
            const {quota, usage} = await navigator.storage.estimate();
            event.addMetadata("storage", {
              quota,
              usage
            });
          } catch {
            console.warn("Failed to get storage estimate");
          }
          return true;
        }
      });
    }
    // CONCATENATED MODULE: ./src/utils/request-idle-callback.ts
    // This is in part:
    // - Missing typings for requestIdleCallback
    // - Polyfill for browsers that don't support requestIdleCallback
    // - Polyfill for non-Window contexts (e.g. workers)
    let request_idle_callback_requestIdleCallback;
    let request_idle_callback_cancelIdleCallback;
    if (self.requestIdleCallback && self.cancelIdleCallback) {
      request_idle_callback_requestIdleCallback = self.requestIdleCallback.bind(self);
      request_idle_callback_cancelIdleCallback = self.cancelIdleCallback.bind(self);
    } else {
      request_idle_callback_requestIdleCallback = (callback, options) => {
        // Use half the specified timeout since it probably represents a worst-case
        // scenario.
        const timeout = options ? options.timeout / 2 : 0;
        return self.setTimeout((() => {
          callback({
            timeRemaining: () => 0,
            didTimeout: true
          });
        }), timeout);
      };
      request_idle_callback_cancelIdleCallback = handle => {
        self.clearTimeout(handle);
      };
    }
    // CONCATENATED MODULE: ./node_modules/@birchill/discriminator/dist/index.js
    // Similar to assign() but only takes two arguments and if the first argument
    // is a discriminator(), it merges the properties of an object() or type()
    // into the discriminator()'s various branches.
    // Needed for supporting nested discriminator() types.
    function extend(a, b) {
      if ("discriminator" === a.type) {
        const discriminatorSchema = a.schema;
        const mapping = {};
        for (const [key, value] of Object.entries(discriminatorSchema.mapping)) mapping[key] = dist_assign(value, b);
        return discriminator(a.schema.field, mapping);
      }
      return dist_assign(a, b);
    }
    // This is a slight tweak on what superstruct does because printing "[Object
    // object]" is rarely useful.
        function discriminator_dist_print(value) {
      // If the value is a string we use JSON.stringify for the quotes.
      // For objects we use JSON.stringify as a cheap pretty-print function unless
      // the object includes its own toString() method.
      if ("string" === typeof value || "object" === typeof value && value.toString === Object.prototype.toString) return JSON.stringify(value);
      return `${value}`;
    }
    function discriminator_dist_isObject(a) {
      return "object" === typeof a && null !== a && !Array.isArray(a);
    }
    const discriminator = (field, mapping) => {
      const keys = Object.keys(mapping);
      const getStructForValue = value => {
        if (!discriminator_dist_isObject(value) || "string" !== typeof value[field] || !keys.includes(value[field])) return;
        const branch = value[field];
        const branchStruct = mapping[branch];
        if (!branchStruct) return;
        return extend(branchStruct, dist_object({
          [field]: dist_literal(branch)
        }));
      };
      return new dist_Struct({
        type: "discriminator",
        schema: {
          field,
          mapping
        },
        * entries(value, context) {
          const struct = getStructForValue(value);
          if (struct) yield* struct.entries(value, context);
        },
        validator(value, context) {
          if (!discriminator_dist_isObject(value)) return `Expected an object, but received: ${discriminator_dist_print(value)}`;
          if (!(field in value) || "string" !== typeof value[field]) return `Expected an object with '${field}' property, but received: ${discriminator_dist_print(value)}`;
          if (!keys.includes(value[field])) return `Expected '${field}' to be one of ${keys.map((key => `'${key}'`)).join(", ")}, but received: '${value[field]}'`;
          const struct = getStructForValue(value);
          if (!struct) return true;
          return struct.validator(value, context);
        }
      });
    };
    // CONCATENATED MODULE: ./src/content/popup-state.ts
    const PopupStateSchema = dist_type({
      // Record the position of the window
      pos: dist_optional(dist_type({
        // The frame to which the coordinates are relative.
        frameId: dist_number(),
        // Page coordinates
        x: dist_number(),
        y: dist_number(),
        width: dist_number(),
        height: dist_number(),
        direction: dist_enums([ "vertical", "horizontal", "disjoint" ]),
        side: dist_enums([ "before", "after", "disjoint" ]),
        // Reference lookup point we should use for determining if a mouse move is
        // "between" the lookup point and the popup.
        lookupPoint: dist_optional(dist_type({
          // Page coordinates
          x: dist_number(),
          y: dist_number(),
          // Area around the lookup point that should be treated as being "on"
          // the point.
          // For example, when the lookup point is the center of a text
          // character, we want to treat the whole the bbox of the character as
          // being part of the "point'.
          // This is only needed when the popup transitions from hover -> ghost
          // display mode and hold-to-show keys are configured (but no longer
          // pressed, hence the transition). Without this, we can easily get
          // mousemove events that are outside the lookup point and not on the
          // path to the popup but where we really don't want to close the
          // popup since they're still in roughly the same place.
          // When we _don't_ have hold-to-show keys configured this is not
          // a problem because, provided the mouse is still inside the character
          // that triggered the lookup, we'll keep showing the popup.
          // This is expressed as a margin simply so that we don't have to
          // convert it when transferring between frames.
          marginX: dist_number(),
          marginY: dist_number()
        }))
      })),
      // The type of content the popup is positioned relative to.
      contentType: dist_enums([ "text", "image" ]),
      // The particular appearance and behavior of the popup
      display: discriminator("mode", {
        // static: no interactivity, small tabs, no close button etc.
        static: dist_type({}),
        // ghost: not interactive yet, shows tabs etc. but has a dotted outline,
        // has no pointer events, and no arrow. Used while scanning using the mouse
        // before settling on a word to lookup.
        ghost: discriminator("trigger", {
          // Transition to hover when the timeout expires
          timeout: dist_type({
            timeout: dist_number()
          }),
          // Transition to hover when the following keys are no longer held
          keys: dist_type({
            keyType: dist_number()
          })
        }),
        // hover: interactive using the mouse by hovering over it. Shows an arrow
        // to the lookup point.
        hover: dist_type({}),
        // pinned: similar to hover but remains visible even if the mouse moves
        // outside the popup.
        pinned: dist_type({}),
        // touch: interactive using touch events. Has no arrow to the lookup point
        // and does not allowing hovering over using the mouse.
        touch: dist_type({})
      })
    });
    // CONCATENATED MODULE: ./src/background/background-request.ts
    const SearchRequestSchema = dist_type({
      input: dist_string(),
      includeRomaji: dist_optional(dist_boolean())
    });
    const BackgroundRequestSchema = discriminator("type", {
      // Requests for the background page
      disabled: dist_type({}),
      disableMouseInteraction: dist_type({}),
      dismissedMouseOnboarding: dist_type({}),
      "enable?": dist_type({}),
      enabled: dist_type({
        src: dist_string()
      }),
      options: dist_type({}),
      searchWords: SearchRequestSchema,
      searchOther: SearchRequestSchema,
      showMouseOnboarding: dist_type({}),
      toggleDefinition: dist_type({}),
      translate: dist_type({
        input: dist_string(),
        includeRomaji: dist_optional(dist_boolean())
      }),
      // Requests to be forwarded to different frames
      // We send these messages via the background page simply because using
      // postMessage causes some Web pages to break when they encounter unrecognized
      // messages.
      // Popup showing status
      "frame:popupShown": dist_type({
        frameId: dist_number(),
        state: dist_optional(PopupStateSchema)
      }),
      "children:popupShown": dist_type({
        state: dist_optional(PopupStateSchema)
      }),
      "children:popupHidden": dist_type({}),
      "top:isPopupShowing": dist_type({}),
      // Text highlighting
      "frame:highlightText": dist_type({
        length: dist_number(),
        frameId: dist_number()
      }),
      "frame:clearTextHighlight": dist_type({
        frameId: dist_number()
      }),
      // Lookup-related requests
      "top:lookup": dist_type({
        // We don't validate the bulk of the contents here but leave that to the
        // receiving end.
        // Parameters for designating the iframe source properties
        source: dist_type({
          src: dist_string(),
          dimensions: dist_type({
            width: dist_number(),
            height: dist_number()
          })
        })
      }),
      "top:pinPopup": dist_type({}),
      "top:unpinPopup": dist_type({}),
      "top:commitPopup": dist_type({}),
      "top:clearResult": dist_type({}),
      "top:nextDictionary": dist_type({}),
      "top:toggleDefinition": dist_type({}),
      "top:movePopup": dist_type({
        direction: dist_enums([ "up", "down" ])
      }),
      // Copy mode requests
      "top:enterCopyMode": dist_type({}),
      "top:exitCopyMode": dist_type({}),
      "top:nextCopyEntry": dist_type({}),
      "top:copyCurrentEntry": dist_type({
        copyType: dist_enums([ "entry", "tab", "word" ])
      })
    });
    // CONCATENATED MODULE: ./src/background/all-tab-manager.ts
    class AllTabManager {
      constructor() {
        this.enabled = false;
        this.listeners = [];
        this.tabs = [];
      }
      async init(config) {
        this.config = config;
        // Try to fetch our previous enabled state from local storage
                this.enabled = await this.getStoredEnabledState();
        // Notify listeners
                if (this.enabled) this.notifyListeners(true);
        // Try to enable the active tab in each window
                if (this.enabled) this.enableActiveTabs().catch(bugsnag_default().notify);
        // Since we only enable the content script in the active tabs, if any other
        // tab becomes active we should make sure it gets enabled too.
                lib.browser.tabs.onActivated.addListener((({tabId}) => this.enableTab(tabId)));
        // Response to enabling-related messages
                lib.browser.runtime.onMessage.addListener(((request, sender) => {
          if (!dist_is(request, BackgroundRequestSchema)) return;
          switch (request.type) {
           case "enable?":
            if (!sender.tab || "number" !== typeof sender.tab.id) return;
            void this.enableTab(sender.tab.id, sender.frameId);
            break;

           case "enabled":
            if (!sender.tab || "number" !== typeof sender.tab.id || "number" !== typeof sender.frameId) return;
            this.updateFrames({
              tabId: sender.tab.id,
              frameId: sender.frameId,
              src: request.src
            });
            return Promise.resolve({
              frameId: sender.frameId
            });

           case "disabled":
            if (!sender.tab || "number" !== typeof sender.tab.id) return;
            this.dropFrame({
              tabId: sender.tab.id,
              frameId: sender.frameId
            });
            break;
          }
        }));
      }
      async getStoredEnabledState() {
        let getEnabledResult;
        try {
          getEnabledResult = await lib.browser.storage.local.get("enabled");
        } catch {
          bugsnag_default().notify(new ExtensionStorageError({
            key: "enabled",
            action: "get"
          }), (event => {
            event.severity = "warning";
          }));
          return false;
        }
        return getEnabledResult.hasOwnProperty("enabled") && !!getEnabledResult.enabled;
      }
      async enableActiveTabs() {
        // browser.tabs.query sometimes fails with a generic Error with message "An
        // unexpected error occurred". I don't know why. Maybe it should fail? Maybe
        // it's a timing thing? Who knows �‍♂️
        // For now, we just do a single retry, two seconds later. If that fails,
        // I suppose the user will have to try again.
        const tryToEnable = async () => {
          const tabs = await lib.browser.tabs.query({
            active: true
          });
          if (!tabs) return;
          for (const tab of tabs) if ("number" === typeof tab.id) await this.enableTab(tab.id);
        };
        // Try to enable but only wait on the first attempt.
                try {
          await tryToEnable();
        } catch {
          console.log("Failed to re-enable. Will retry in two seconds.");
          setTimeout((() => {
            tryToEnable().catch((() => {
              console.log("Second attempt to re-enable failed. Giving up.");
            }));
          }), 2000);
        }
      }
      // State queries
      getEnabledState() {
        return Promise.resolve([ {
          enabled: this.enabled,
          tabId: void 0
        } ]);
      }
      // Toggling related interface
      async toggleTab(_tab, config) {
        // Update our local copy of the config
        this.config = config;
        if (!this.enabled) bugsnag_default().leaveBreadcrumb("Enabling active tabs from toggle");
        // Update local state
                this.enabled = !this.enabled;
        // Update tabs
                if (this.enabled) 
        // Enable the active tabs
        await this.enableActiveTabs(); else 
        // Disable all tabs
        await sendMessageToAllTabs({
          type: "disable",
          frame: "*"
        });
        // Store our local value
                if (this.enabled) lib.browser.storage.local.set({
          enabled: true
        }).catch((() => {})); else lib.browser.storage.local.remove("enabled").catch((() => {}));
        this.notifyListeners(this.enabled);
      }
      async enableTab(tabId, frameId) {
        if (!this.config) throw new Error("Should have called init before enableTab");
        if (!this.enabled) return;
        try {
          await lib.browser.tabs.sendMessage(tabId, {
            type: "enable",
            config: this.config,
            // At the point when the listener gets this message it won't know what
            // its frameId is so it's pointless to specify it here.
            frame: "*"
          }, {
            frameId
          });
        } catch {
          // Some tabs don't have the content script so just ignore
          // connection failures here.
        }
      }
      // Config updates
      async updateConfig(config) {
        // Ignore redundant changes
        if (JSON.stringify(this.config) === JSON.stringify(config)) return;
        this.config = config;
        if (!this.enabled) return;
        await sendMessageToAllTabs({
          type: "enable",
          config,
          frame: "*"
        });
      }
      // Frame management
      sendMessageToFrame({tabId, message, frameId}) {
        lib.browser.tabs.sendMessage(tabId, {
          ...message,
          frame: frameId
        }, {
          frameId
        }).catch((() => {}));
      }
      sendMessageToTopFrame({tabId, message}) {
        const frameId = this.getTopFrameId(tabId);
        if (null === frameId) return;
        lib.browser.tabs.sendMessage(tabId, {
          ...message,
          frame: "top"
        }, {
          frameId
        }).catch((() => {}));
      }
      getTopFrameId(tabId) {
        if (!(tabId in this.tabs)) return null;
        return Number(Object.keys(this.tabs[tabId].frames)[0]);
      }
      getInitialFrameSrc({tabId, frameId}) {
        if (!(frameId in this.tabs[tabId].frames)) return;
        return this.tabs[tabId].frames[frameId].initialSrc;
      }
      updateFrames({tabId, frameId, src}) {
        if (tabId in this.tabs) {
          const tab = this.tabs[tabId];
          if (0 === frameId) tab.src = src;
          // If we have navigated the root frame, blow away all the child frames
                    if (0 === frameId && tab.src !== src && "" !== tab.src) tab.frames = [];
        } else this.tabs[tabId] = {
          src: 0 === frameId ? src : "",
          frames: []
        };
        const tab = this.tabs[tabId];
        const addedFrame = !(frameId in tab.frames);
        tab.frames[frameId] = {
          initialSrc: src
        };
        // Try to detect the "no content script in the root window" case
                if (addedFrame && !tab.frames[0] && !tab.rootWindowCheckTimeout) tab.rootWindowCheckTimeout = self.setTimeout((() => {
          if (!this.tabs[tabId] || !Object.keys(this.tabs[tabId].frames).length) return;
          this.tabs[tabId].rootWindowCheckTimeout = void 0;
          const topMostFrameId = Number(Object.keys(this.tabs[tabId].frames)[0]);
          if (0 !== topMostFrameId) this.sendMessageToFrame({
            tabId,
            message: {
              type: "isTopMost"
            },
            frameId: topMostFrameId
          });
        }), 3000);
        // Schedule a task to clean up any tabs that have been closed
                if (!this.tabsCleanupTask) this.tabsCleanupTask = request_idle_callback_requestIdleCallback((async () => {
          this.tabsCleanupTask = void 0;
          try {
            const allTabs = await lib.browser.tabs.query({});
            const ourTabs = Object.keys(this.tabs).map(Number);
            for (const tabId of ourTabs) if (!allTabs.some((t => t.id === tabId))) delete this.tabs[tabId];
          } catch (e) {
            // Sometimes tabs.query will fail (e.g. if the user is dragging tabs).
            // That's fine since presumably this task will get scheduled again
            // eventually.
            bugsnag_default().leaveBreadcrumb("Error cleaning up tabs", e);
          }
        }));
      }
      dropFrame({tabId, frameId}) {
        if (!this.tabs[tabId]) return;
        if ("number" === typeof frameId) {
          const tab = this.tabs[tabId];
          delete tab.frames[frameId];
          if (!tab.frames.length) delete this.tabs[tabId];
        } else delete this.tabs[tabId];
      }
      // Listeners
      addListener(listener) {
        if (!this.listeners.includes(listener)) this.listeners.push(listener);
        // Call with initial state, after spinning the event loop to give the client
        // a chance to initialize.
                setTimeout((() => {
          listener({
            enabled: this.enabled,
            anyEnabled: this.enabled
          });
        }), 0);
      }
      removeListener(listener) {
        this.listeners = this.listeners.filter((l => l !== listener));
      }
      notifyListeners(enabled) {
        for (const listener of this.listeners.slice()) listener({
          enabled,
          anyEnabled: enabled
        });
      }
    }
    async function sendMessageToAllTabs(message) {
      const allTabs = [];
      // We could probably always just use `browser.tabs.query` but for some reason
      // I decided to use browser.window.getAll. We use `browser.tabs.query` as a
      // fallback when that is not available (e.g. Firefox for Android).
      
      // 2021-09-20: I think we prefer windows.getAll over tabs.query because
      // tabs.query is not particularly reliable (e.g. when the user is dragging
      // tabs it will fail).
            if (lib.browser.windows) {
        let windows = [];
        const windowTypes = [ "normal" ];
        // Firefox will just return an empty array if we pass a window type it
        // doesn't recognize so we need to "feature-detect" if we are in a mail
        // extension context or not. For now the presence/absence of the
        // composeAction member will do.
                if (lib.browser.composeAction) windowTypes.push("messageCompose", "messageDisplay");
        try {
          windows = await lib.browser.windows.getAll({
            populate: true,
            windowTypes
          });
        } catch (e) {
          bugsnag_default().leaveBreadcrumb("Error getting windows", {
            error: e
          });
        }
        for (const win of windows) {
          if (!win.tabs) continue;
          allTabs.push(...win.tabs);
        }
      } else {
        const tabs = await lib.browser.tabs.query({});
        allTabs.push(...tabs);
      }
      for (const tab of allTabs) {
        if (!tab.id) continue;
        lib.browser.tabs.sendMessage(tab.id, message).catch((() => {}));
      }
    }
    // CONCATENATED MODULE: ./src/common/data-series-labels.ts
    const labels = {
      kanji: "options_kanji_data_name",
      radicals: "options_bushu_data_name",
      names: "options_name_data_name",
      words: "options_words_data_name"
    };
    function getLocalizedDataSeriesLabel(series) {
      return lib.browser.i18n.getMessage(labels[series]);
    }
    // CONCATENATED MODULE: ./src/utils/throttle.ts
    function throttle(func, limit) {
      let lastInvocationTimeout;
      let lastRan;
      return function(...args) {
        /* eslint @typescript-eslint/no-this-alias: 0 */
        const context = this;
        const run = () => {
          func.apply(context, args);
          lastRan = Date.now();
        };
        if (!lastRan) run(); else {
          self.clearTimeout(lastInvocationTimeout);
          lastInvocationTimeout = self.setTimeout((function() {
            if (Date.now() - lastRan >= limit) run();
          }), limit - (Date.now() - lastRan));
        }
      };
    }
    // CONCATENATED MODULE: ./src/background/browser-action.ts
    // Chrome makes the tooltip disappear for a second or so if we try updating it
    // while it is showing so if we update it too quickly it becomes impossible to
    // read. Instead we need to throttle our updates. 2.5s or so seems like a good
    // balance between being up-to-date and being readable.
    const throttledSetTitle = throttle(((...args) => {
      void lib.browser.browserAction.setTitle(...args);
    }), 2500);
    let currentUpdate;
    function updateBrowserAction(params) {
      // If we are already trying to update the browser action, queue our changes,
      // clobbering any other queued changes.
      // We need to ensure only one update runs at a time because in Chromium-based
      // browsers setIcon is not FIFO and we can have earlier changes clobbering
      // later ones.
      if (currentUpdate) {
        currentUpdate.next = params;
        return;
      }
      void (async () => {
        let nextParams = params;
        while (nextParams) {
          try {
            // Indicate an update is running
            currentUpdate = {};
            await doUpdateBrowserAction(nextParams);
          } catch {
            // Ignore
          }
          // Look for the next update
                    nextParams = null === currentUpdate || void 0 === currentUpdate ? void 0 : currentUpdate.next;
        }
        // No updates left
                currentUpdate = void 0;
      })();
    }
    async function doUpdateBrowserAction({enabled, jpdictState, tabId, toolbarIcon}) {
      var _a, _b, _c, _d;
      const iconFilenameParts = [ "10ten" ];
      let tooltip;
      // Apply the variant, if needed
            if ("sky" === toolbarIcon) iconFilenameParts.push("sky");
      // First choose the base icon type / text
            if (enabled) {
        const jpdictWords = jpdictState.words.state;
        const fallbackWords = jpdictState.words.fallbackState;
        if ("ok" === jpdictWords || "ok" === fallbackWords) tooltip = lib.browser.i18n.getMessage("command_toggle_enabled"); else if ("init" === jpdictWords || "loading" === fallbackWords) tooltip = lib.browser.i18n.getMessage("command_toggle_loading"); else if ("unloaded" === fallbackWords) 
        // If we get this far, we've either failed to load the jpdict database or
        // we simply haven't got around to populating it yet (e.g. we're still
        // downloading the other databases).
        // However, we won't load the fallback database until the user actually
        // tries to look something up so we don't know if it's available yet or
        // not. For now, assume everything is ok.
        tooltip = lib.browser.i18n.getMessage("command_toggle_enabled"); else {
          iconFilenameParts.push("error");
          tooltip = lib.browser.i18n.getMessage("error_loading_dictionary");
        }
      } else {
        iconFilenameParts.push("disabled");
        tooltip = lib.browser.i18n.getMessage("command_toggle_disabled");
      }
      const seriesColors = {
        words: "green",
        names: "blue",
        kanji: "purple",
        radicals: "purple"
      };
      // Next determine if we need to overlay any additional information.
            switch (jpdictState.updateState.type) {
       case "checking":
        // Technically the 'indeterminate' icon would be more correct here but
        // using '0' instead leads to less flicker.
        iconFilenameParts.push("0p", seriesColors[jpdictState.updateState.series]);
        tooltip = lib.browser.i18n.getMessage("command_toggle_checking");
        break;

       case "updating":
        {
          const {totalProgress, series} = jpdictState.updateState;
          // We only have progress variants for the regular and disabled styles.
                    if (!iconFilenameParts.includes("error")) iconFilenameParts.push(20 * Math.round(5 * totalProgress) + "p", seriesColors[series]);
          const dbLabel = getLocalizedDataSeriesLabel(series);
          const progressAsPercent = Math.round(100 * totalProgress);
          tooltip = lib.browser.i18n.getMessage("command_toggle_downloading", [ dbLabel, String(progressAsPercent) ]);
        }
        break;
      }
      // Set the icon
      
      // We'd like to feature-detect if SVG icons are supported but Safari will
      // just fail silently if we try.
            const iconFilename = iconFilenameParts.join("-");
      await setIcon(iconFilename, tabId);
      // Add a warning overlay and update the string if there was a fatal
      // update error.
            const hasNotOkDatabase = allMajorDataSeries.some((series => "ok" !== jpdictState[series].state));
      if (hasNotOkDatabase && !!jpdictState.updateError && "AbortError" !== jpdictState.updateError.name && 
      // Don't show quota exceeded errors. If the quota is exceeded, there's not
      // a lot the user can do about it, and we don't want to bother them with
      // a constant error signal.
      "QuotaExceededError" !== jpdictState.updateError.name) {
        await lib.browser.browserAction.setBadgeText({
          text: "!",
          tabId
        });
        await (null === (_a = lib.browser.composeAction) || void 0 === _a ? void 0 : _a.setBadgeText({
          text: "!"
        }));
        await lib.browser.browserAction.setBadgeBackgroundColor({
          color: "yellow",
          tabId
        });
        await (null === (_b = lib.browser.composeAction) || void 0 === _b ? void 0 : _b.setBadgeBackgroundColor({
          color: "yellow"
        }));
        tooltip = lib.browser.i18n.getMessage("command_toggle_update_error");
      } else {
        await lib.browser.browserAction.setBadgeText({
          text: "",
          tabId
        });
        await (null === (_c = lib.browser.composeAction) || void 0 === _c ? void 0 : _c.setBadgeText({
          text: ""
        }));
      }
      // Set the caption
            throttledSetTitle({
        title: tooltip,
        tabId
      });
      await (null === (_d = lib.browser.composeAction) || void 0 === _d ? void 0 : _d.setTitle({
        title: tooltip
      }));
    }
    async function setIcon(iconFilename, tabId) {
      var _b;
      // We'd like to feature-detect if SVG icons are supported but Safari will
      // just fail silently if we try.
            if (false) ; else {
        const details = {
          path: {
            16: `images/${iconFilename}-16.png`,
            32: `images/${iconFilename}-32.png`,
            48: `images/${iconFilename}-48.png`
          }
        };
        await lib.browser.browserAction.setIcon({
          ...details,
          tabId
        });
        await (null === (_b = lib.browser.composeAction) || void 0 === _b ? void 0 : _b.setIcon(details));
      }
    }
    // This will clobber any existing icon settings so it is only intended
    // to be used on startup (when no existing icon is already set) or when the icon
    // setting is changed (in which case we will update the browser action for
    // enabled tabs immediately afterwards anyway).
        function setDefaultToolbarIcon(toolbarIcon) {
      const iconFilename = "sky" === toolbarIcon ? "10ten-disabled" : "10ten-sky-disabled";
      void setIcon(iconFilename);
    }
    // CONCATENATED MODULE: ./src/background/context-menus.ts
    let onToggleMenu;
    let onTogglePuck;
    let tabManager;
    let toggleMenuCreated = false;
    let enablePuckMenuCreated = false;
    // Thunderbird does not support contextMenus, only menus.
        const contextMenus = lib.browser.contextMenus || lib.browser.menus;
    async function initContextMenus(options) {
      onToggleMenu = options.onToggleMenu;
      onTogglePuck = options.onTogglePuck;
      tabManager = options.tabManager;
      const {toggleMenuEnabled, showPuck} = options;
      await updateContextMenus({
        toggleMenuEnabled,
        showPuck
      });
    }
    async function updateContextMenus({tabEnabled, toggleMenuEnabled, showPuck}) {
      // This can happen when the background page initializes the tab manager (in
      // order to determine the tab enabled state) and it ends up notifying about
      // the enabled state before the background page has a chance to call
      // initContextMenus.
      if (!tabManager || !onToggleMenu || !onTogglePuck) return;
      // Resolve the tabEnabled state
            if ("undefined" === typeof tabEnabled) {
        // Determining if the tab is enabled or not is not straightforward since
        // different windows can have different enabled states.
        // So if we get multiple windows, we should try to find out which one is the
        // current window and use that.
        const enabledStates = await tabManager.getEnabledState();
        tabEnabled = false;
        if (1 === enabledStates.length) tabEnabled = enabledStates[0].enabled; else if (enabledStates.length > 1) try {
          const currentWindowTabs = await lib.browser.tabs.query({
            active: true,
            currentWindow: true
          });
          const match = currentWindowTabs.length ? enabledStates.find((s => s.tabId === currentWindowTabs[0].id)) : void 0;
          tabEnabled = !!(null === match || void 0 === match ? void 0 : match.enabled);
        } catch {
          // Ignore
        }
      }
      // Update the toggle menu
            if (toggleMenuEnabled) if (!toggleMenuCreated) {
        await addToggleMenu(tabEnabled, onToggleMenu);
        toggleMenuCreated = true;
      } else await updateMenuItemCheckedState("context-toggle", tabEnabled); else {
        toggleMenuCreated = false;
        await removeMenuItem("context-toggle");
      }
      // Update the enable puck menu -- we only show this item if the tab is enabled
            if (tabEnabled) if (!enablePuckMenuCreated) {
        await addEnablePuckMenu(showPuck, onTogglePuck);
        enablePuckMenuCreated = true;
      } else await updateMenuItemCheckedState("context-enable-puck", showPuck); else {
        enablePuckMenuCreated = false;
        await removeMenuItem("context-enable-puck");
      }
    }
    async function addToggleMenu(enabled, onClick) {
      const contexts = [ "browser_action", "editable", "frame", "image", "link", "page", "selection", "video" ];
      // Safari throws if we try to include 'tab' in the set of contexts.
      // (Chrome just ignores it, despite not supporting it.)
            if (false) ;
      // We'd like to use:
      
      //   command: '_execute_browser_action'
      
      // here instead of onclick but:
      
      // a) Chrome etc. don't support that
      // b) Firefox passes the wrong tab ID to the callback when the command is
      //    activated from the context menu of a non-active tab.
            return createMenuItem({
        id: "context-toggle",
        type: "checkbox",
        title: lib.browser.i18n.getMessage("menu_enable_extension"),
        onclick: (_info, tab) => onClick(tab),
        contexts,
        checked: enabled
      });
    }
    async function addEnablePuckMenu(enabled, onClick) {
      return createMenuItem({
        id: "context-enable-puck",
        type: "checkbox",
        title: lib.browser.i18n.getMessage("menu_enable_puck"),
        onclick: info => onClick(!!info.checked),
        contexts: [ "browser_action" ],
        checked: enabled
      });
    }
    async function createMenuItem(createProperties) {
      return new Promise((resolve => {
        contextMenus.create(createProperties, (() => {
          // This is just to silence Safari which will complain if the menu
          if (lib.browser.runtime.lastError) ;
          resolve();
        }));
      })).catch((() => {}));
    }
    async function removeMenuItem(menuItemId) {
      try {
        await contextMenus.remove(menuItemId);
      } catch {
        // Ignore
      }
    }
    async function updateMenuItemCheckedState(menuItemId, checked) {
      try {
        await contextMenus.update(menuItemId, {
          checked
        });
      } catch {
        // Ignore
      }
    }
    // CONCATENATED MODULE: ./src/utils/fetch.ts
    class TimeoutError extends Error {
      constructor(...params) {
        super(...params);
        Object.setPrototypeOf(this, TimeoutError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, TimeoutError);
        this.name = "TimeoutError";
      }
    }
    function fetch_fetchWithTimeout(resource, options) {
      const controller = new AbortController;
      if (null === options || void 0 === options ? void 0 : options.signal) options.signal.addEventListener("abort", (() => {
        controller.abort();
      }));
      // Set up timeout callback
            const {timeout = 5000} = options || {};
      let didTimeout = false;
      let timeoutId;
      if (timeout && timeout !== 1 / 0) timeoutId = window.setTimeout((() => {
        didTimeout = true;
        controller.abort();
      }), timeout);
      const responsePromise = new Promise(((resolve, reject) => {
        fetch(resource, {
          ...options,
          signal: controller.signal
        }).then((response => {
          if (timeoutId) self.clearTimeout(timeoutId);
          resolve(response);
        })).catch((e => {
          if ("AbortError" === (null === e || void 0 === e ? void 0 : e.name) && didTimeout) reject(new TimeoutError); else reject(e);
        }));
      }));
      return responsePromise;
    }
    // CONCATENATED MODULE: ./src/utils/is-error.ts
    // Based heavily on: https://github.com/mk-pmb/is-error-js
    // which has the following license:
    // Copyright (c) 2015 is-error.
    // Permission is hereby granted, free of charge, to any person obtaining a copy
    // of this software and associated documentation files (the "Software"), to deal
    // in the Software without restriction, including without limitation the rights
    // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    // copies of the Software, and to permit persons to whom the Software is
    // furnished to do so, subject to the following conditions:
    // The above copyright notice and this permission notice shall be included in
    // all copies or substantial portions of the Software.
    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    // THE SOFTWARE.
    const objectToString = Object.prototype.toString;
    const getPrototypeOf = Object.getPrototypeOf;
    const ERROR_TYPE = "[object Error]";
    function isError(a) {
      if (a instanceof Error) return true;
      let err = a;
      while (err) {
        if (objectToString.call(err) === ERROR_TYPE) return true;
        err = getPrototypeOf(err);
      }
      return false;
    }
    // CONCATENATED MODULE: ./src/background/fx-fetcher.ts
    const FxDataSchema = dist_type({
      timestamp: dist_min(dist_integer(), 0),
      rates: dist_record(dist_string(), dist_number())
    });
    // Hopefully this is sufficiently similar enough to the DownloadError class used
    // by jpdict-idb that our Bugsnag grouping code should treat them as the same.
        class fx_fetcher_DownloadError extends Error {
      constructor(url, code, ...params) {
        super(...params);
        Object.setPrototypeOf(this, fx_fetcher_DownloadError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, fx_fetcher_DownloadError);
        this.name = "DownloadError";
        this.code = code;
        this.url = url;
      }
    }
    const ONE_MINUTE = 60 * 1000;
    const ONE_HOUR = 60 * ONE_MINUTE;
    const ONE_DAY = 24 * ONE_HOUR;
    class FxFetcher {
      constructor() {
        this.fetchState = {
          type: "idle"
        };
        lib.browser.alarms.onAlarm.addListener((alarm => {
          if ("fx-update" === alarm.name) {
            bugsnag_default().leaveBreadcrumb("Running FX data update from alarm");
            this.fetchData().catch((e => {
              bugsnag_default().notify(e);
            }));
          }
        }));
        // Fetch the latest update date and if we've never downloaded the data,
        // do it now.
        
        // No need to catch errors here, getLocalFxData does its own error
        // handling.
                void getLocalFxData().then((fxData => {
          if (!fxData) {
            bugsnag_default().leaveBreadcrumb("No stored FX data. Doing initial fetch.");
            this.fetchData().catch((e => {
              bugsnag_default().notify(e);
            }));
          } else {
            bugsnag_default().leaveBreadcrumb(`Got stored FX data from ${new Date(fxData.timestamp)}. Last updated ${new Date(fxData.updated)}.`);
            this.updated = fxData.updated;
          }
        }));
      }
      async fetchData() {
        // Don't try fetching if we are offline
        if (!navigator.onLine) {
          bugsnag_default().leaveBreadcrumb("Deferring FX data update until we are online");
          window.addEventListener("online", (() => {
            bugsnag_default().leaveBreadcrumb("Fetching FX data update now that we are online");
            void this.fetchData();
          }));
          return;
        }
        // Don't try if we are already fetching
                if ("fetching" === this.fetchState.type) {
          bugsnag_default().leaveBreadcrumb("Overlapping attempt to fetch FX data.");
          return;
        }
        // Abort any timeout to retry
                if ("waiting to retry" === this.fetchState.type) window.clearTimeout(this.fetchState.timeout);
        // Update our state
                this.fetchState = {
          type: "fetching",
          retryCount: "waiting to retry" === this.fetchState.type ? this.fetchState.retryCount + 1 : void 0
        };
        // Set up base URL
                let url = "https://data.10ten.study/fx/jpy.json";
        // Set up query string
                const manifest = lib.browser.runtime.getManifest();
        const queryParams = new URLSearchParams({
          sp: "10ten-ja-reader",
          sv: manifest.version_name || manifest.version,
          sc: "production" === getReleaseStage() ? "prod" : "dev"
        });
        url += `?${queryParams.toString()}`;
        // Do the fetch
                try {
          const response = await fetch_fetchWithTimeout(url, {
            mode: "cors",
            timeout: 20000
          });
          // Check the response
                    if (!response.ok) throw new fx_fetcher_DownloadError(url, response.status, response.statusText);
          // Parse the response
                    const result = await response.json();
          dist_assert(result, FxDataSchema);
          // Store the response
          
          // If this fails (e.g. due to a QuotaExceededError) there's not much we
          // can do since we communicate the FX data with other components via
          // local storage.
                    const updated = Date.now();
          await lib.browser.storage.local.set({
            fx: {
              ...result,
              updated
            }
          });
          // Update our local state now that everything succeeded
                    this.updated = updated;
          this.fetchState = {
            type: "idle"
          };
        } catch (e) {
          // Convert network errors disguised as TypeErrors to DownloadErrors
          let error = e;
          if (isError(e) && e instanceof TypeError && (e.message.startsWith("NetworkError") || "Failed to fetch" === e.message)) 
          // Use 418 just so that we pass the check for a retry-able error below
          // which looks for a status code in the 4xx~5xx range.
          error = new fx_fetcher_DownloadError(url, 418, e.message);
          // Possibly schedule a retry
                    const retryAbleError = isError(error) && ("TimeoutError" === error.name || "NetworkError" === error.name || "DownloadError" === error.name && error.code >= 400 && error.code < 500);
          const retryCount = "fetching" === this.fetchState.type && "number" === typeof this.fetchState.retryCount ? this.fetchState.retryCount : 0;
          if (retryAbleError && retryCount < 3) {
            console.warn(error);
            bugsnag_default().leaveBreadcrumb(`Failed attempt #${retryCount + 1} to fetch FX data. Will retry.`, {
              error
            });
            // We're using setTimeout here but in the case of event pages (as we
            // use on some platforms) these are not guaranteed to run.
            
            // That's fine though because if the background page gets killed then
            // when it restarts it will trigger a new fetch anyway.
                        const timeout = window.setTimeout((() => this.fetchData()), 10000);
            this.fetchState = {
              type: "waiting to retry",
              retryCount,
              timeout
            };
          } else {
            console.error(error);
            bugsnag_default().notify(error);
            this.fetchState = {
              type: "idle",
              didFail: true
            };
          }
        }
        // Clear any alarm that might have triggered us so we can set a new alarm.
                await this.cancelScheduledUpdate();
        // If we succeeded, or failed outright, schedule our next update.
        
        // For the failed outright case, we determined that retrying isn't going to
        // help but who knows, maybe in an hour it will?
                await this.scheduleNextUpdate();
      }
      async scheduleNextUpdate() {
        // If we have an existing alarm, it's not likely to be later than we
        const existingAlarm = await lib.browser.alarms.get("fx-update");
        if (existingAlarm) return;
        // If we are already fetching (or waiting to re-fetch) let it run. It will
        // schedule the next run when it completes.
                if ("idle" !== this.fetchState.type) return;
        // Schedule the next run to run in a day from the last update.
        
        // If we failed the last update (or failed _every_ update) try again in an
        // hour. We don't want to re-trigger too soon, however, or else we'll ping
        // the server unnecessarily.
                const now = Date.now();
        let nextRun;
        if ("undefined" === typeof this.updated || this.fetchState.didFail) nextRun = now + ONE_HOUR; else nextRun = Math.max(this.updated + ONE_DAY, now);
        // If the next UTC day is before we're scheduled to run next, bring the next
        // run forwards so that we get the data when it is as fresh as possible.
                const nextUtcDay = now + ONE_DAY - now % ONE_DAY;
        if (nextUtcDay < nextRun) 
        // ... but add a few minutes to avoid all the clients hitting the server
        // at the same time.
        nextRun = nextUtcDay + Math.random() * ONE_HOUR;
        // If the next run is within a minute or so, run it now. Otherwise, schedule
        // it for later.
                if (nextRun <= now + ONE_MINUTE) 
        // Don't wait on fetchData -- it does its own error handling and caller's
        // of this function shouldn't have to wait for us to run the fetch, only
        // to schedule it.
        void this.fetchData(); else try {
          bugsnag_default().leaveBreadcrumb(`Scheduling next FX data update for ${new Date(nextRun)}`);
          lib.browser.alarms.create("fx-update", {
            when: nextRun
          });
        } catch (e) {
          console.error(e);
          bugsnag_default().notify(e);
        }
      }
      async cancelScheduledUpdate() {
        await lib.browser.alarms.clear("fx-update");
      }
    }
    // CONCATENATED MODULE: ./src/utils/normalize-input.ts
    // This method returns an array of input lengths which use 16-bit character
    // offsets as opposed to Unicode codepoints.
    // That allows us to use .length, .substring etc. on the matched string.
    // If we make this return the positions of Unicode codepoints we will need to
    // update all users of this output to be non-BMP character aware.
    function normalizeInput(input) {
      // Convert to full-width, normalize decomposed characters, expand combined
      // characters etc.
      const fullWidthInput = halfToFullWidthNum(input);
      let [normalized, inputLengths] = toNormalized(fullWidthInput);
      // Strip out any zero-width non-joiners (as Google Docs sometimes likes to
      // stick them between every single character).
            [normalized, inputLengths] = stripZwnj(normalized, inputLengths);
      // Truncate if we find characters outside the expected range.
            for (let i = 0; i < fullWidthInput.length; ++i) {
        const char = fullWidthInput.codePointAt(i);
        // If we find a character out of range, we need to trim both normalized
        // and inputLengths
                if (char <= 0x3002 && 0x200c != char) {
          let outputIndex = 0;
          while (inputLengths[outputIndex] < i) outputIndex++;
          normalized = normalized.substring(0, outputIndex);
          inputLengths = inputLengths.slice(0, outputIndex ? outputIndex + 1 : 0);
          break;
        }
      }
      return [ normalized, inputLengths ];
    }
    function stripZwnj(input, inputLengths) {
      let normalized = "";
      const lengths = [];
      let last = 0;
      for (let i = 0; i < input.length; ++i) if (0x200c !== input.codePointAt(i)) {
        normalized += input[i];
        lengths.push(inputLengths[i]);
        last = inputLengths[i + 1];
      }
      if (last) lengths.push(last);
      return [ normalized, lengths ];
    }
    // CONCATENATED MODULE: ./src/worker/jpdict-worker-messages.ts
    const queryState = () => ({
      type: "querystate"
    });
    const jpdict_worker_messages_updateDb = ({lang, force}) => ({
      type: "update",
      lang,
      force
    });
    const jpdict_worker_messages_cancelDbUpdate = () => ({
      type: "cancelupdate"
    });
    const jpdict_worker_messages_deleteDb = () => ({
      type: "delete"
    });
    // EXTERNAL MODULE: ./node_modules/lru_map/dist/lru.js
    var lru = __webpack_require__(393);
    // CONCATENATED MODULE: ./src/background/word-match-sorting.ts
    // This is duplicated from jpdict-idb's sorting of entries.
    // We only use it for sorting in the case where we've fallen back to the
    // flat file database so it doesn't need to be perfect or even keep in sync
    // with changes to jpdict-idb. It's really just a stop-gap measure.
    // As with Array.prototype.sort, sorts `results` in-place, but returns the
    // result to support chaining.
    function sortMatchesByPriority(results) {
      results.sort(((a, b) => word_match_sorting_getPriority(b) - word_match_sorting_getPriority(a)));
      return results;
    }
    function word_match_sorting_getPriority(result) {
      const scores = [ 0 ];
      // Scores from kanji readings
            for (const k of result.k || []) {
        if (!k.matchRange || !k.p) continue;
        scores.push(word_match_sorting_getPrioritySum(k.p));
      }
      // Scores from kana readings
            for (const r of result.r) {
        if (!r.matchRange || !r.p) continue;
        scores.push(word_match_sorting_getPrioritySum(r.p));
      }
      // Return top score
            return Math.max(...scores);
    }
    // Produce an overall priority from a series of priority strings.
    
    // This should produce a value somewhere in the range 0~67.
    
    // In general we report the highest priority, but if we have several priority
    // scores we add a decreasing fraction (10%) of the lesser scores as an
    // indication that several sources have attested to the priority.
    
    // That should typically produce a maximum attainable score of 66.8.
    // Having a bounded range like this makes it easier to combine this value with
    // other metrics when sorting.
        function word_match_sorting_getPrioritySum(priorities) {
      const scores = priorities.map(word_match_sorting_getPriorityScore).sort().reverse();
      return scores.length ? scores[0] + scores.slice(1).reduce(((total, score, index) => total + score / Math.pow(10, index + 1)), 0) : 0;
    }
    // This assignment is pretty arbitrary however it's mostly used for sorting
    // entries where all we need to do is distinguish between the really common ones
    // and the obscure academic ones.
    
    // Entries with (P) are those ones that are marked with (P) in Edict.
        const word_match_sorting_PRIORITY_ASSIGNMENTS = new Map([ [ "i1", 50 ], [ "i2", 20 ], [ "n1", 40 ], [ "n2", 20 ], [ "s1", 32 ], [ "s2", 20 ], [ "g1", 30 ], [ "g2", 15 ] ]);
    function word_match_sorting_getPriorityScore(p) {
      if (word_match_sorting_PRIORITY_ASSIGNMENTS.has(p)) return word_match_sorting_PRIORITY_ASSIGNMENTS.get(p);
      if (p.startsWith("nf")) {
        // The wordfreq scores are groups of 500 words.
        // e.g. nf01 is the top 500 words, and nf48 is the 23,501 ~ 24,000
        // most popular words.
        const wordfreq = parseInt(p.substring(2), 10);
        if (wordfreq > 0 && wordfreq < 48) return 48 - wordfreq / 2;
      }
      return 0;
    }
    // CONCATENATED MODULE: ./src/background/flat-file.ts
    class FlatFileDatabase {
      constructor(options) {
        this.listeners = [];
        this.lookupCache = new lru.LRUMap(500);
        this.bugsnag = options.bugsnag;
        this.loaded = this.loadData();
      }
      // Loading
      async loadData() {
        try {
          // Read in series to reduce contention
          this.wordDict = await this.readFileWithAutoRetry(lib.browser.runtime.getURL("data/words.ljson"));
          this.wordIndex = await this.readFileWithAutoRetry(lib.browser.runtime.getURL("data/words.idx"));
          this.notifyListeners({
            type: "loaded"
          });
        } catch (e) {
          this.notifyListeners({
            type: "error",
            error: e,
            willRetry: false
          });
        }
      }
      async readFileWithAutoRetry(url) {
        let attempts = 0;
        // Bugsnag only gives us 30 characters for the breadcrumb but it's the
        // end of the url we really want to record.
                const makeBreadcrumb = (prefix, url) => {
          const urlStart = Math.max(0, url.length - (30 - prefix.length - 1));
          return prefix + "…" + url.substring(urlStart);
        };
        if (this.bugsnag) this.bugsnag.leaveBreadcrumb(makeBreadcrumb("Loading: ", url));
        while (true) {
          // We seem to occasionally hit loads that never finish (particularly on
          // Linux and particularly on startup / upgrade). Set a timeout so that
          // we can at least abort and try again.
          const TIMEOUT_MS = 5 * 1000;
          let timeoutId;
          try {
            let controller;
            let requestOptions;
            // It turns out some people are still using Firefox < 57. :/
                        if ("function" === typeof AbortController) {
              controller = new AbortController;
              requestOptions = {
                signal: controller.signal
              };
            }
            timeoutId = window.setTimeout((() => {
              timeoutId = void 0;
              if (controller) {
                console.error(`Load of ${url} timed out. Aborting.`);
                if (this.bugsnag) this.bugsnag.leaveBreadcrumb(makeBreadcrumb("Aborting: ", url));
                controller.abort();
              } else {
                // TODO: This error doesn't actually propagate and do anything
                // useful yet. But for now at least it means Firefox 56 doesn't
                // break altogether.
                if (this.bugsnag) this.bugsnag.notify("[Pre FF57] Load timed out");
                throw new Error(`Load of ${url} timed out.`);
              }
            }), TIMEOUT_MS * (attempts + 1));
            const response = await fetch(url, requestOptions);
            const responseText = await response.text();
            clearTimeout(timeoutId);
            if (this.bugsnag) this.bugsnag.leaveBreadcrumb(makeBreadcrumb("Loaded: ", url));
            return responseText;
          } catch (e) {
            if ("number" === typeof timeoutId) clearTimeout(timeoutId);
            if (this.bugsnag) this.bugsnag.leaveBreadcrumb(makeBreadcrumb(`Failed(#${attempts + 1}): `, url));
            if (++attempts >= 3) {
              console.error(`Failed to load ${url} after ${attempts} attempts`);
              throw e;
            }
            this.notifyListeners({
              type: "error",
              error: e,
              willRetry: true
            });
            // Wait for a (probably) increasing interval before trying again
                        const intervalToWait = Math.round(Math.random() * attempts * 1000);
            console.log(`Failed to load ${url}. Trying again in ${intervalToWait}ms`);
            await new Promise((resolve => setTimeout(resolve, intervalToWait)));
          }
        }
      }
      // Searching
      async getWords({input, maxResults}) {
        await this.loaded;
        let offsets = this.lookupCache.get(input);
        if (!offsets) {
          const lookupResult = findLineStartingWith({
            source: this.wordIndex,
            text: input + ","
          });
          if (!lookupResult) {
            this.lookupCache.set(input, []);
            return [];
          }
          offsets = lookupResult.split(",").slice(1).map(Number);
          this.lookupCache.set(input, offsets);
        }
        const result = [];
        for (const offset of offsets) {
          const entry = JSON.parse(this.wordDict.substring(offset, this.wordDict.indexOf("\n", offset)));
          result.push(toDictionaryWordResult({
            entry,
            matchingText: input,
            offset
          }));
        }
        // Sort before capping the number of results
                sortMatchesByPriority(result);
        result.splice(maxResults);
        return result;
      }
      // Listeners
      addListener(listener) {
        if (this.listeners.includes(listener)) return;
        this.listeners.push(listener);
      }
      removeListener(listener) {
        this.listeners = this.listeners.filter((l => l !== listener));
      }
      notifyListeners(event) {
        const listenersCopy = this.listeners.slice();
        for (const listener of listenersCopy) listener(event);
      }
    }
    // Performs a binary search of a linefeed delimited string, |data|, for |text|.
        function findLineStartingWith({source, text}) {
      const tlen = text.length;
      let start = 0;
      let end = source.length - 1;
      while (start < end) {
        const midpoint = start + end >> 1;
        const i = source.lastIndexOf("\n", midpoint) + 1;
        const candidate = source.substr(i, tlen);
        if (text < candidate) end = i - 1; else if (text > candidate) start = source.indexOf("\n", midpoint + 1) + 1; else return source.substring(i, source.indexOf("\n", midpoint + 1));
      }
      return null;
    }
    function toDictionaryWordResult({entry, matchingText, offset}) {
      const kanjiMatch = !!entry.k && entry.k.some((k => kana_to_hiragana_kanaToHiragana(k) === matchingText));
      const kanaMatch = !kanjiMatch && entry.r.some((r => kana_to_hiragana_kanaToHiragana(r) === matchingText));
      return {
        id: offset,
        k: flat_file_mergeMeta(entry.k, entry.km, ((key, meta) => ({
          ent: key,
          ...meta,
          match: kanjiMatch && kana_to_hiragana_kanaToHiragana(key) === matchingText || !kanjiMatch,
          matchRange: kana_to_hiragana_kanaToHiragana(key) === matchingText ? [ 0, key.length ] : void 0
        }))),
        r: flat_file_mergeMeta(entry.r, entry.rm, ((key, meta) => ({
          ent: key,
          ...meta,
          match: kanaMatch && kana_to_hiragana_kanaToHiragana(key) === matchingText || !kanaMatch,
          matchRange: kana_to_hiragana_kanaToHiragana(key) === matchingText ? [ 0, key.length ] : void 0
        }))),
        s: flat_file_expandSenses(entry.s)
      };
    }
    function flat_file_mergeMeta(keys, metaArray, merge) {
      const result = [];
      for (const [i, key] of (keys || []).entries()) {
        const meta = metaArray && metaArray.length >= i + 1 && 0 !== metaArray[i] ? metaArray[i] : void 0;
        result.push(merge(key, meta));
      }
      return result;
    }
    function flat_file_expandSenses(senses) {
      return senses.map((sense => ({
        g: flat_file_expandGlosses(sense),
        ...strip_fields_stripFields(sense, [ "g", "gt" ]),
        match: true
      })));
    }
    const flat_file_BITS_PER_GLOSS_TYPE = Math.floor(Math.log2(GLOSS_TYPE_MAX)) + 1;
    function flat_file_expandGlosses(sense) {
      // Helpers to work out the gloss type
      const gt = sense.gt || 0;
      const typeMask = (1 << flat_file_BITS_PER_GLOSS_TYPE) - 1;
      const glossTypeAtIndex = i => gt >> i * flat_file_BITS_PER_GLOSS_TYPE & typeMask;
      return sense.g.map(((gloss, i) => {
        // This rather convoluted mess is because our test harness differentiates
        // between properties that are not set and those that are set to
        // undefined.
        const result = {
          str: gloss
        };
        const type = glossTypeAtIndex(i);
        if (0 /* GlossType.None */ !== type) result.type = type;
        return result;
      }));
    }
    class FlatFileDatabaseLoader {
      constructor(options) {
        this.loadState = "unloaded";
        this.bugsnag = options.bugsnag;
        this.onFlatFileDatabaseUpdated = this.onFlatFileDatabaseUpdated.bind(this);
      }
      resetIfNotLoaded() {
        if ("ok" === this.loadState) return;
        if (this.flatFileDatabase) {
          this.flatFileDatabase.removeListener(this.onFlatFileDatabaseUpdated);
          this.flatFileDatabase = void 0;
        }
        this.loadState = "unloaded";
      }
      load() {
        if (this.flatFileDatabase && this.loadPromise) return this.loadPromise;
        this.flatFileDatabase = new FlatFileDatabase({
          bugsnag: this.bugsnag
        });
        this.flatFileDatabase.addListener(this.onFlatFileDatabaseUpdated);
        this.loadPromise = new Promise(((resolve, reject) => {
          this.resolveLoad = resolve;
          this.rejectLoad = reject;
        }));
        this.loadState = "loading";
        if (this.onUpdate) this.onUpdate(this.loadState);
        return this.loadPromise;
      }
      onFlatFileDatabaseUpdated(event) {
        var _a;
        switch (event.type) {
         case "loaded":
          this.loadState = "ok";
          this.loadError = void 0;
          // If this is the initial load, make sure to resolve the load promise.
          
          // (If it is NOT the initial load, resolveLoad will be a no-op since
          // rejectLoad will have already been called.)
                    if (this.resolveLoad && this.flatFileDatabase) this.resolveLoad(this.flatFileDatabase);
          // If this is not the initial load, make sure to replace the loadPromise
          // so that anyone who waits on it from now on will get the resolved
          // database.
                    if (this.flatFileDatabase) this.loadPromise = Promise.resolve(this.flatFileDatabase);
          break;

         case "error":
          if (event.willRetry) this.loadState = "retrying"; else {
            this.loadState = "error";
            // Reset the flat file database so that subsequence calls to load()
            // will retry loading.
                        null === (_a = this.flatFileDatabase) || void 0 === _a ? void 0 : _a.removeListener(this.onFlatFileDatabaseUpdated);
            this.flatFileDatabase = void 0;
          }
          this.loadError = event.error;
          if (this.rejectLoad) this.rejectLoad(event.error);
          break;
        }
        if (this.onUpdate) this.onUpdate(this.loadState);
      }
      get database() {
        switch (this.loadState) {
         case "unloaded":
          return this.load();

         case "loading":
          return this.loadPromise;

         case "retrying":
 // This should fail since we don't want the caller to wait on retries so
          // this falls through
                   case "error":
          return Promise.reject(this.loadError);

         case "ok":
          return Promise.resolve(this.flatFileDatabase);
        }
      }
    }
    // CONCATENATED MODULE: ./src/utils/char-range.ts
    const halfWidthNumbers = /[0-9]/;
    // U+FF01~U+FF5E is for full-width alphanumerics (includes some punctuation
    // like ＆ and ～ because they appear in the kanji headwords for some entries)
    
    // Note that U+FF5E is full-width tilde ～ (not 〜 which is a wave dash).
    
    // U+FF61~U+FF65 is some halfwidth ideographic symbols, e.g. ｡ but we skip them
    // (although previous rikai-tachi included them) since they're mostly going to
    // be delimiters
        const fullWidthAlphanumerics = /[\uff01-\uff5e]/;
    // On some platforms, Google Docs puts zero-width joiner characters between
    // _all_ the characters so we need to match on them in order to match runs of
    // characters.
        const zeroWidthNonJoiner = /[\u200c]/;
    // * U+25CB is 'white circle' often used to represent a blank
    //   (U+3007 is an ideographic zero that is also sometimes used for this
    //   purpose, but this is included in the U+3001~U+30FF range.)
        const whiteCircle = /[\u25cb]/;
    // * U+3000~U+3039 is ideographic punctuation but we skip:
    
    //    U+3000 (ideographic space),
    //    U+3001 (、 ideographic comma),
    //    U+3002 (。 ideographic full stop),
    //    U+3003 (〃 ditto mark),
    //    U+3008,U+3009 (〈〉),
    //    U+300A,U+300B (《》),
    //    U+300C,U+300D (「」 corner brackets for quotations),
    //                  [ENAMDICT actually uses this in one entry,
    //                  "ウィリアム「バッファロービル」コーディ", but I think we
    //                  can live without being able to recognize that)
    //    U+300E,U+300F (『 』), and
    //    U+3010,U+3011 (【 】),
    
    //   since these are typically only going to delimit words.
        const nonDelimitingIdeographicPunctuation = /[\u3004-\u3007\u3012-\u3039]/;
    // U+3041~U+309F is the hiragana range
        const hiragana = /[\u3041-\u309f\u{1b001}]/u;
    // U+30A0~U+30FF is the katakana range
        const katakana = /[\u30a0-\u30ff\u{1b000}]/u;
    // * U+3220~U+3247 is various enclosed characters like ㈵
    // * U+3280~U+32B0 is various enclosed characters like ㊞
    // * U+32D0~U+32FF is various enclosed characters like ㋐ and ㋿.
        const enclosedChars = /[\u3220-\u3247\u3280-\u32b0\u32d0-\u32ff]/;
    // U+3300~U+3357 is various shorthand characters from the CJK compatibility
    // block like ㍍
        const shorthandChars = /[\u3300-\u3357]/;
    // U+3358~U+3370 is numbers composed with 点 e.g. ㍘
        const tenChars = /[\u3358-\u3370]/;
    // U+337B~U+337E is various era names e.g. ㍻
        const eraChars = /[\u337B-\u337E]/;
    // U+337F is ㍿
        const kabushikiGaisha = /[\u337F]/;
    // U+4E00~U+9FFF is the CJK Unified Ideographs block ("the kanji")
        const kanji = /[\u4e00-\u9fff]/;
    // * U+3400~U+4DBF is the CJK Unified Ideographs Extension A block (rare
    //   kanji)
    // * U+F900~U+FAFF is the CJK Compatibility Ideographs block (random odd
    //   kanji, because standards)
    // * U+20000~U+2A6DF is CJK Unified Ideographs Extension B (more rare kanji)
        const rareKanji = /[\u3400-\u4dbf\uf900-\ufaff\u{20000}-\u{2a6df}]/u;
    // U+FF66~U+FF9F is halfwidth katakana
        const halfwidthKatakanaChar = /[\uff66-\uff9f]/;
    // U+1B002-U+1B0FF is hentaigana
        const hentaigana = /[\u{1b002}-\u{1b0ff}]/u;
    function getCombinedCharRange(ranges) {
      let source = "[";
      let flags = "";
      for (const range of ranges) {
        // Check we have a character class
        if (!isCharacterClassRange(range)) throw new Error(`Expected a character class range, got: ${range.source}`);
        // Check it is not negated
                if ("^" === range.source[1]) throw new Error(`Expected a non-negated character class range, got ${range.source}`);
        source += range.source.substring(1, range.source.length - 1);
        if (-1 !== range.flags.indexOf("u")) flags = "u";
      }
      source += "]";
      return new RegExp(source, flags);
    }
    // This is far from complete but all the RegExps we deal with are ones we've
    // written so hopefully it's a good-enough sanity check.
        function isCharacterClassRange(re) {
      return re.source.length >= 2 && re.source.startsWith("[") && re.source.endsWith("]");
    }
    // "Japanese" here simply means any character we treat as worth attempting to
    // translate, including full-width alphanumerics etc. but NOT characters that
    // typically delimit words.
        const japaneseChar = getCombinedCharRange([ fullWidthAlphanumerics, zeroWidthNonJoiner, whiteCircle, nonDelimitingIdeographicPunctuation, hiragana, katakana, enclosedChars, shorthandChars, tenChars, eraChars, kabushikiGaisha, kanji, rareKanji, halfwidthKatakanaChar, hentaigana ]);
    function getNegatedCharRange(range) {
      // Check if we got a character class range
      if (!isCharacterClassRange(range)) throw new Error(`Expected a character class range, got: ${range.source}`);
      const negated = "^" === range.source[1];
      const source = `[${negated ? "" : "^"}${range.source.substring(negated ? 2 : 1, range.source.length - 1)}]`;
      return new RegExp(source, range.flags);
    }
    getNegatedCharRange(japaneseChar);
    getNegatedCharRange(getCombinedCharRange([ japaneseChar, halfWidthNumbers, /[,、.．]/ ]));
    const onlyDigits = /^[0-9０-９,，、.．]+$/;
    function isOnlyDigits(input) {
      return onlyDigits.test(input);
    }
    // CONCATENATED MODULE: ./src/utils/romaji.ts
    // Convert using a modified Hepburn-ish romajification
    const replacements = [ [ "あ", "a" ], [ "い", "i" ], [ "う", "u" ], [ "え", "e" ], [ "お", "o" ], [ "か", "ka" ], [ "き", "ki" ], [ "く", "ku" ], [ "け", "ke" ], [ "こ", "ko" ], [ "きゃ", "kya" ], [ "きゅ", "kyu" ], [ "きょ", "kyo" ], [ "さ", "sa" ], [ "し", "shi" ], [ "す", "su" ], [ "せ", "se" ], [ "そ", "so" ], [ "しゃ", "sha" ], [ "しゅ", "shu" ], [ "しょ", "sho" ], [ "た", "ta" ], [ "ち", "chi" ], [ "つ", "tsu" ], [ "て", "te" ], [ "と", "to" ], [ "ちゃ", "cha" ], [ "ちゅ", "chu" ], [ "ちょ", "cho" ], [ "な", "na" ], [ "に", "ni" ], [ "ぬ", "nu" ], [ "ね", "ne" ], [ "の", "no" ], [ "にゃ", "nya" ], [ "にゅ", "nyu" ], [ "にょ", "nyo" ], [ "は", "ha" ], [ "ひ", "hi" ], [ "ふ", "fu" ], [ "へ", "he" ], [ "ほ", "ho" ], [ "ひゃ", "hya" ], [ "ひゅ", "hyu" ], [ "ひょ", "hyo" ], [ "ま", "ma" ], [ "み", "mi" ], [ "む", "mu" ], [ "め", "me" ], [ "も", "mo" ], [ "みゃ", "mya" ], [ "みゅ", "myu" ], [ "みょ", "myo" ], [ "や", "ya" ], [ "ゆ", "yu" ], [ "よ", "yo" ], [ "ら", "ra" ], [ "り", "ri" ], [ "る", "ru" ], [ "れ", "re" ], [ "ろ", "ro" ], [ "りゃ", "rya" ], [ "りゅ", "ryu" ], [ "りょ", "ryo" ], [ "わ", "wa" ], [ "ゐ", "i" ], [ "ゑ", "e" ], [ "を", "o" ], [ "ん", "n" ], [ "が", "ga" ], [ "ぎ", "gi" ], [ "ぐ", "gu" ], [ "げ", "ge" ], [ "ご", "go" ], [ "ぎゃ", "gya" ], [ "ぎゅ", "gyu" ], [ "ぎょ", "gyo" ], [ "ざ", "za" ], [ "じ", "ji" ], [ "ず", "zu" ], [ "ぜ", "ze" ], [ "ぞ", "zo" ], [ "じゃ", "ja" ], [ "じゅ", "ju" ], [ "じょ", "jo" ], [ "だ", "da" ], [ "ぢ", "ji" ], [ "づ", "zu" ], [ "で", "de" ], [ "ど", "do" ], [ "ぢゃ", "ja" ], [ "ぢゅ", "ju" ], [ "ぢょ", "jo" ], [ "ば", "ba" ], [ "び", "bi" ], [ "ぶ", "bu" ], [ "べ", "be" ], [ "ぼ", "bo" ], [ "びゃ", "bya" ], [ "びゅ", "byu" ], [ "びょ", "byo" ], [ "ぱ", "pa" ], [ "ぴ", "pi" ], [ "ぷ", "pu" ], [ "ぺ", "pe" ], [ "ぽ", "po" ], [ "ぴゃ", "pya" ], [ "ぴゅ", "pyu" ], [ "ぴょ", "pyo" ], 
    // The following almost always appear in katakana, but well, people do crazy
    // stuff so let's handle them in hiragana too (and it makes handling this
    // easier too since we can just blindly convert everything to hiragana as
    // a pre-processing step).
    [ "いぃ", "yi" ], [ "いぇ", "ye" ], [ "うぁ", "wa" ], [ "うぃ", "wi" ], [ "うぅ", "wu" ], [ "うぇ", "we" ], [ "うぉ", "wo" ], [ "うゅ", "wyu" ], [ "ゔぁ", "va" ], [ "ゔぃ", "vi" ], [ "ゔ", "vu" ], [ "ゔぇ", "ve" ], [ "ゔぉ", "vo" ], [ "ゔゃ", "vya" ], [ "ゔゅ", "vyu" ], [ "ゔぃぇ", "vye" ], [ "ゔょ", "vyo" ], [ "きぇ", "kye" ], [ "ぎぇ", "gye" ], [ "くぁ", "kwa" ], [ "くぃ", "kwi" ], [ "くぇ", "kwe" ], [ "くぉ", "kwo" ], [ "くゎ", "kwa" ], [ "ぐぁ", "gwa" ], [ "ぐぃ", "gwi" ], [ "ぐぇ", "gwe" ], [ "ぐぉ", "gwo" ], [ "ぐゎ", "gwa" ], [ "しぇ", "she" ], [ "じぇ", "je" ], [ "すぃ", "si" ], [ "ずぃ", "zi" ], [ "ちぇ", "che" ], [ "つぁ", "tsa" ], [ "つぃ", "tsi" ], [ "つぇ", "tse" ], [ "つぉ", "tso" ], [ "つゅ", "tsyu" ], [ "てぃ", "ti" ], [ "とぅ", "tu" ], [ "てゅ", "tyu" ], [ "でぃ", "di" ], [ "どぅ", "du" ], [ "でゅ", "dyu" ], [ "にぇ", "nye" ], [ "ひぇ", "hye" ], [ "びぇ", "bye" ], [ "ぴぇ", "pye" ], [ "ふぁ", "fa" ], [ "ふぃ", "fi" ], [ "ふぇ", "fe" ], [ "ふぉ", "fo" ], [ "ふゃ", "fya" ], [ "ふゅ", "fyu" ], [ "ふぃぇ", "fye" ], [ "ふょ", "fyo" ], [ "ほぅ", "hu" ], [ "みぇ", "mye" ], [ "りぇ", "rye" ], [ "ら゜", "la" ], [ "り゜", "li" ], [ "る゜", "lu" ], [ "れ゜", "le" ], [ "ろ゜", "lo" ], [ "り゜ゃ", "lya" ], [ "り゜ゅ", "lyu" ], [ "り゜ぇ", "lye" ], [ "り゜ょ", "lyo" ], 
    // These ones don't have hiragana equivalents, but these are basically for
    // マニアック anyway.
    [ "ヷ", "va" ], [ "ヸ", "vi" ], [ "ヹ", "ve" ], [ "ヺ", "vo" ], [ "ー", "-" ], 
    // Seriously maniac territory here
    [ "ゟ", "yori" ], [ "ヿ", "koto" ] ];
    const maxReplacementLength = Math.max(...replacements.map((([a]) => a.length)));
    const replacementMap = new Map(replacements);
    function toRomaji(kana) {
      // We don't currently convert half-width katakana simply because we're not
      // expecting to encounter it. If we do, we can use toNormalize for that.
      const hiragana = kana_to_hiragana_kanaToHiragana(kana);
      let result = "";
      // Special handling for っ so we can handle すっっっっっっごく high-tension
      // expressions.
      
      // (This will probably never appear in any dictionary entries, but in the
      // interests of making this function a little more general-use we handle it
      // anyway.)
            let explosiveness = 0;
      // Apply any built-up explosiveness when we don't have any following hiragana
      // to apply it to.
            const explode = () => {
        if (explosiveness) {
          result += "'".repeat(explosiveness);
          explosiveness = 0;
        }
      };
      let i = 0;
      while (i < hiragana.length) {
        const firstCharCode = hiragana.charCodeAt(i);
        // Check for っ
                if (0x3063 === firstCharCode) {
          explosiveness++;
          i++;
          continue;
        }
        // Skip anything that is clearly out of range
                if (firstCharCode < 0x3041) {
          explode();
          result += hiragana.substr(i, 1);
          i++;
          continue;
        }
        let substringLength = Math.max(maxReplacementLength, hiragana.length - i);
        while (substringLength) {
          const substring = hiragana.substr(i, substringLength);
          const replacement = replacementMap.get(substring);
          if (replacement) {
            if (explosiveness) {
              const initial = "c" === replacement[0] ? "t" : replacement[0];
              result += initial.repeat(explosiveness);
              explosiveness = 0;
            }
            // Separate a vowel from a previous ん
                        if (1 === replacement.length && result && "n" === result[result.length - 1] && [ "a", "e", "i", "o", "u" ].includes(replacement)) result += "-";
            result += replacement;
            break;
          }
          substringLength--;
        }
        // No match found, just append the character as-is.
                if (!substringLength) {
          explode();
          result += hiragana.substr(i, 1);
          substringLength = 1;
        }
        i += substringLength;
      }
      // Handle final っ (e.g. あつっ → atsu')
            explode();
      return result;
    }
    // CONCATENATED MODULE: ./src/background/deinflect.ts
    const deinflectL10NKeys = {
      [0 /* Reason.PolitePastNegative */ ]: "deinflect_polite_past_negative",
      [1 /* Reason.PoliteNegative */ ]: "deinflect_polite_negative",
      [2 /* Reason.PoliteVolitional */ ]: "deinflect_polite_volitional",
      [3 /* Reason.Chau */ ]: "deinflect_chau",
      [4 /* Reason.Sugiru */ ]: "deinflect_sugiru",
      [5 /* Reason.Nasai */ ]: "deinflect_nasai",
      [6 /* Reason.PolitePast */ ]: "deinflect_polite_past",
      [7 /* Reason.Tara */ ]: "deinflect_tara",
      [8 /* Reason.Tari */ ]: "deinflect_tari",
      [9 /* Reason.Causative */ ]: "deinflect_causative",
      [10 /* Reason.PotentialOrPassive */ ]: "deinflect_potential_or_passive",
      [12 /* Reason.Sou */ ]: "deinflect_sou",
      [11 /* Reason.Toku */ ]: "deinflect_toku",
      [13 /* Reason.Tai */ ]: "deinflect_tai",
      [14 /* Reason.Polite */ ]: "deinflect_polite",
      [15 /* Reason.Past */ ]: "deinflect_past",
      [16 /* Reason.Negative */ ]: "deinflect_negative",
      [17 /* Reason.Passive */ ]: "deinflect_passive",
      [18 /* Reason.Ba */ ]: "deinflect_ba",
      [19 /* Reason.Volitional */ ]: "deinflect_volitional",
      [20 /* Reason.Potential */ ]: "deinflect_potential",
      [21 /* Reason.CausativePassive */ ]: "deinflect_causative_passive",
      [22 /* Reason.Te */ ]: "deinflect_te",
      [23 /* Reason.Zu */ ]: "deinflect_zu",
      [24 /* Reason.Imperative */ ]: "deinflect_imperative",
      [25 /* Reason.MasuStem */ ]: "deinflect_masu_stem",
      [26 /* Reason.Adv */ ]: "deinflect_adv",
      [27 /* Reason.Noun */ ]: "deinflect_noun",
      [28 /* Reason.ImperativeNegative */ ]: "deinflect_imperative_negative",
      [29 /* Reason.Continuous */ ]: "deinflect_continuous",
      [30 /* Reason.Ki */ ]: "deinflect_ki",
      [31 /* Reason.SuruNoun */ ]: "deinflect_suru_noun",
      [32 /* Reason.ZaruWoEnai */ ]: "deinflect_zaru_wo_enai",
      [33 /* Reason.NegativeTe */ ]: "deinflect_negative_te"
    };
    const deinflectRuleData = [ 
    // -------------- 12 --------------
    [ "いらっしゃいませんでした", "いらっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], 
    // -------------- 11 --------------
    [ "おっしゃいませんでした", "おっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], 
    // -------------- 9 --------------
    [ "いらっしゃいました", "いらっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "くありませんでした", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 0 /* Reason.PolitePastNegative */ ], 
    // -------------- 8 --------------
    [ "いらっしゃいます", "いらっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "おっしゃいました", "おっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "仰いませんでした", "仰る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], 
    // -------------- 7 --------------
    [ "いませんでした", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "おっしゃいます", "おっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "きませんでした", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "きませんでした", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "ぎませんでした", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "しませんでした", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "しませんでした", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "しませんでした", "す", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "ちませんでした", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "にませんでした", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "びませんでした", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "みませんでした", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "りませんでした", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 0 /* Reason.PolitePastNegative */ ], 
    // -------------- 6 --------------
    [ "いらっしゃい", "いらっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "いらっしゃい", "いらっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "くありません", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 1 /* Reason.PoliteNegative */ ], [ "ざるをえない", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "ざるを得ない", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "ませんでした", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 0 /* Reason.PolitePastNegative */ ], [ "のたもうたら", "のたまう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "のたもうたり", "のたまう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], 
    // -------------- 5 --------------
    [ "いましょう", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "仰いました", "仰る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "おっしゃい", "おっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "おっしゃい", "おっしゃる", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "きましょう", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "きましょう", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "ぎましょう", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "ざるえない", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "ざる得ない", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "ざるをえぬ", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "ざるを得ぬ", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "しましょう", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "しましょう", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "しましょう", "す", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "ちましょう", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "にましょう", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "のたもうた", "のたまう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "のたもうて", "のたまう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "びましょう", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "みましょう", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "りましょう", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 2 /* Reason.PoliteVolitional */ ], 
    // -------------- 4 --------------
    [ "いじゃう", "ぐ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "いすぎる", "う", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "いちゃう", "く", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "いったら", "いく", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "いったり", "いく", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "いている", "く", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "いでいる", "ぐ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "いなさい", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "いました", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "いません", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "おうたら", "おう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "おうたり", "おう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "仰います", "仰る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "かされる", "く", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "かったら", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 7 /* Reason.Tara */ ], [ "かったり", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 8 /* Reason.Tari */ ], [ "がされる", "ぐ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "きすぎる", "く", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "きすぎる", "くる", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 4 /* Reason.Sugiru */ ], [ "ぎすぎる", "ぐ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "きちゃう", "くる", 2 /* Type.GodanVerb */ , 8 /* Type.KuruVerb */ , 3 /* Reason.Chau */ ], [ "きている", "くる", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 29 /* Reason.Continuous */ ], [ "きなさい", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "きなさい", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 5 /* Reason.Nasai */ ], [ "ぎなさい", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "きました", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "きました", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 6 /* Reason.PolitePast */ ], [ "ぎました", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "きません", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "きません", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 1 /* Reason.PoliteNegative */ ], [ "ぎません", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "こうたら", "こう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "こうたり", "こう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "こさせる", "くる", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 9 /* Reason.Causative */ ], [ "こられる", "くる", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 10 /* Reason.PotentialOrPassive */ ], [ "ざるえぬ", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "ざる得ぬ", "ない", 4 /* Type.IAdj */ , 128 /* Type.VNai */ , 32 /* Reason.ZaruWoEnai */ ], [ "しすぎる", "す", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 4 /* Reason.Sugiru */ ], [ "しすぎる", "する", 1 /* Type.IchidanVerb */ , 16 /* Type.SuruVerb */ , 4 /* Reason.Sugiru */ ], [ "しちゃう", "す", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 3 /* Reason.Chau */ ], [ "しちゃう", "する", 2 /* Type.GodanVerb */ , 16 /* Type.SuruVerb */ , 3 /* Reason.Chau */ ], [ "している", "す", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 29 /* Reason.Continuous */ ], [ "している", "する", 1 /* Type.IchidanVerb */ , 16 /* Type.SuruVerb */ , 29 /* Reason.Continuous */ ], [ "しなさい", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 5 /* Reason.Nasai */ ], [ "しなさい", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 5 /* Reason.Nasai */ ], [ "しました", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 6 /* Reason.PolitePast */ ], [ "しました", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 6 /* Reason.PolitePast */ ], [ "しません", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 1 /* Reason.PoliteNegative */ ], [ "しません", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 1 /* Reason.PoliteNegative */ ], [ "そうたら", "そう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "そうたり", "そう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "たされる", "つ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "ちすぎる", "つ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "ちなさい", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "ちました", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "ちません", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "っちゃう", "う", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "っちゃう", "く", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "っちゃう", "つ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "っちゃう", "る", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "っている", "う", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "っている", "つ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "っている", "る", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "とうたら", "とう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "とうたり", "とう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "なされる", "ぬ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "にすぎる", "ぬ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "になさい", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "にました", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "にません", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "ばされる", "ぶ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "びすぎる", "ぶ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "びなさい", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "びました", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "びません", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "まされる", "む", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "ましょう", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 2 /* Reason.PoliteVolitional */ ], [ "みすぎる", "む", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "みなさい", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "みました", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "みません", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "らされる", "る", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "りすぎる", "る", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 4 /* Reason.Sugiru */ ], [ "りなさい", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 5 /* Reason.Nasai */ ], [ "りました", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 6 /* Reason.PolitePast */ ], [ "りません", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "わされる", "う", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 21 /* Reason.CausativePassive */ ], [ "んじゃう", "ぬ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "んじゃう", "ぶ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "んじゃう", "む", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 3 /* Reason.Chau */ ], [ "んでいる", "ぬ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "んでいる", "ぶ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "んでいる", "む", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "行ったら", "行く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "行ったり", "行く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "逝ったら", "逝く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "逝ったり", "逝く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "往ったら", "往く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "往ったり", "往く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "逝ったら", "逝く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "逝ったり", "逝く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "往ったら", "往く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "往ったり", "往く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "請うたら", "請う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "請うたり", "請う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "乞うたら", "乞う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "乞うたり", "乞う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "恋うたら", "恋う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "恋うたり", "恋う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "来させる", "来る", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 9 /* Reason.Causative */ ], [ "來させる", "來る", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 9 /* Reason.Causative */ ], [ "来ました", "来る", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 6 /* Reason.PolitePast */ ], [ "来ません", "来る", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 1 /* Reason.PoliteNegative */ ], [ "來ました", "來る", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 6 /* Reason.PolitePast */ ], [ "來ません", "來る", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 1 /* Reason.PoliteNegative */ ], [ "来られる", "来る", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 10 /* Reason.PotentialOrPassive */ ], [ "來られる", "來る", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 10 /* Reason.PotentialOrPassive */ ], [ "問うたら", "問う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "問うたり", "問う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "負うたら", "負う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "負うたり", "負う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "沿うたら", "沿う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "沿うたり", "沿う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "添うたら", "添う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "添うたり", "添う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "副うたら", "副う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "副うたり", "副う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "厭うたら", "厭う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "厭うたり", "厭う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], 
    // -------------- 3 --------------
    [ "いそう", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "いたい", "う", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "いたら", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "いだら", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "いたり", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "いだり", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "いった", "いく", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "いって", "いく", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "いてる", "く", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "いでる", "ぐ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "いとく", "く", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "いどく", "ぐ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "います", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "おうた", "おう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "おうて", "おう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "かせる", "く", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "がせる", "ぐ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "かった", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 15 /* Reason.Past */ ], [ "かない", "く", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "がない", "ぐ", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "かれる", "く", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "がれる", "ぐ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "きそう", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "きそう", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 12 /* Reason.Sou */ ], [ "ぎそう", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "きたい", "く", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "きたい", "くる", 4 /* Type.IAdj */ , 8 /* Type.KuruVerb */ , 13 /* Reason.Tai */ ], [ "ぎたい", "ぐ", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "きたら", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 7 /* Reason.Tara */ ], [ "きたり", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 8 /* Reason.Tari */ ], [ "きてる", "くる", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 29 /* Reason.Continuous */ ], [ "きとく", "くる", 2 /* Type.GodanVerb */ , 8 /* Type.KuruVerb */ , 11 /* Reason.Toku */ ], [ "きます", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "きます", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 14 /* Reason.Polite */ ], [ "ぎます", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "くない", "い", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 4 /* Type.IAdj */ , 16 /* Reason.Negative */ ], [ "ければ", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 18 /* Reason.Ba */ ], [ "こうた", "こう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "こうて", "こう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "こない", "くる", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 8 /* Type.KuruVerb */ , 16 /* Reason.Negative */ ], [ "こよう", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 19 /* Reason.Volitional */ ], [ "これる", "くる", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 20 /* Reason.Potential */ ], [ "来れる", "来る", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 20 /* Reason.Potential */ ], [ "來れる", "來る", 1 /* Type.IchidanVerb */ , 8 /* Type.KuruVerb */ , 20 /* Reason.Potential */ ], [ "させる", "する", 1 /* Type.IchidanVerb */ , 16 /* Type.SuruVerb */ , 9 /* Reason.Causative */ ], [ "させる", "る", 1 /* Type.IchidanVerb */ , 1 /* Type.IchidanVerb */ , 9 /* Reason.Causative */ ], [ "させる", "す", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 9 /* Reason.Causative */ ], [ "さない", "す", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "される", "す", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 17 /* Reason.Passive */ ], [ "される", "する", 1 /* Type.IchidanVerb */ , 16 /* Type.SuruVerb */ , 17 /* Reason.Passive */ ], [ "しそう", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 12 /* Reason.Sou */ ], [ "しそう", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 12 /* Reason.Sou */ ], [ "したい", "す", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 13 /* Reason.Tai */ ], [ "したい", "する", 4 /* Type.IAdj */ , 16 /* Type.SuruVerb */ , 13 /* Reason.Tai */ ], [ "したら", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 7 /* Reason.Tara */ ], [ "したら", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 7 /* Reason.Tara */ ], [ "したり", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 8 /* Reason.Tari */ ], [ "したり", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 8 /* Reason.Tari */ ], [ "してる", "す", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 29 /* Reason.Continuous */ ], [ "してる", "する", 1 /* Type.IchidanVerb */ , 16 /* Type.SuruVerb */ , 29 /* Reason.Continuous */ ], [ "しとく", "す", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 11 /* Reason.Toku */ ], [ "しとく", "する", 2 /* Type.GodanVerb */ , 16 /* Type.SuruVerb */ , 11 /* Reason.Toku */ ], [ "しない", "する", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 16 /* Type.SuruVerb */ , 16 /* Reason.Negative */ ], [ "します", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 14 /* Reason.Polite */ ], [ "します", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 14 /* Reason.Polite */ ], [ "しよう", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 19 /* Reason.Volitional */ ], [ "すぎる", "い", 1 /* Type.IchidanVerb */ , 4 /* Type.IAdj */ , 4 /* Reason.Sugiru */ ], [ "すぎる", "る", 1 /* Type.IchidanVerb */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 4 /* Reason.Sugiru */ ], [ "そうた", "そう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "そうて", "そう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "たせる", "つ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "たない", "つ", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "たれる", "つ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "ちそう", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "ちたい", "つ", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "ちます", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "ちゃう", "る", 2 /* Type.GodanVerb */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 3 /* Reason.Chau */ ], [ "ったら", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "ったら", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "ったら", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "ったり", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "ったり", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "ったり", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "ってる", "う", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "ってる", "つ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "ってる", "る", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "っとく", "う", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "っとく", "つ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "っとく", "る", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "ている", "る", 1 /* Type.IchidanVerb */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 29 /* Reason.Continuous */ ], [ "できる", "する", 1 /* Type.IchidanVerb */ , 16 /* Type.SuruVerb */ , 20 /* Reason.Potential */ ], [ "とうた", "とう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "とうて", "とう", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "ないで", "ない", 64 /* Type.Initial */ , 128 /* Type.VNai */ , 33 /* Reason.NegativeTe */ ], [ "なさい", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 5 /* Reason.Nasai */ ], [ "なせる", "ぬ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "なない", "ぬ", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "なれる", "ぬ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "にそう", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "にたい", "ぬ", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "にます", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "ばせる", "ぶ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "ばない", "ぶ", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "ばれる", "ぶ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "びそう", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "びたい", "ぶ", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "びます", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "ました", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 6 /* Reason.PolitePast */ ], [ "ませる", "む", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "ません", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 1 /* Reason.PoliteNegative */ ], [ "まない", "む", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "まれる", "む", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "みそう", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "みたい", "む", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "みます", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "らせる", "る", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "らない", "る", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "られる", "る", 1 /* Type.IchidanVerb */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 10 /* Reason.PotentialOrPassive */ ], [ "られる", "る", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "りそう", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 12 /* Reason.Sou */ ], [ "りたい", "る", 4 /* Type.IAdj */ , 2 /* Type.GodanVerb */ , 13 /* Reason.Tai */ ], [ "ります", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 14 /* Reason.Polite */ ], [ "わせる", "う", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 9 /* Reason.Causative */ ], [ "わない", "う", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "われる", "う", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 17 /* Reason.Passive */ ], [ "んだら", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "んだら", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "んだら", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 7 /* Reason.Tara */ ], [ "んだり", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "んだり", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "んだり", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 8 /* Reason.Tari */ ], [ "んでる", "ぬ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "んでる", "ぶ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "んでる", "む", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 29 /* Reason.Continuous */ ], [ "んどく", "ぬ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "んどく", "ぶ", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "んどく", "む", 2 /* Type.GodanVerb */ , 2 /* Type.GodanVerb */ , 11 /* Reason.Toku */ ], [ "行った", "行く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "行って", "行く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "逝った", "逝く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "逝って", "逝く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "往った", "往く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "往って", "往く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "請うた", "請う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "請うて", "請う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "乞うた", "乞う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "乞うて", "乞う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "恋うた", "恋う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "恋うて", "恋う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "問うた", "問う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "問うて", "問う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "負うた", "負う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "負うて", "負う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "沿うた", "沿う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "沿うて", "沿う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "添うた", "添う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "添うて", "添う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "副うた", "副う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "副うて", "副う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "厭うた", "厭う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "厭うて", "厭う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], 
    // -------------- 2 --------------
    [ "いた", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "いだ", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "いて", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "いで", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "えば", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 18 /* Reason.Ba */ ], [ "える", "う", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "おう", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "仰い", "仰る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "仰い", "仰る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "かず", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "がず", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "かぬ", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "かん", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "がぬ", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "がん", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "きた", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 15 /* Reason.Past */ ], [ "きて", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 22 /* Reason.Te */ ], [ "くて", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 22 /* Reason.Te */ ], [ "けば", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 18 /* Reason.Ba */ ], [ "げば", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 18 /* Reason.Ba */ ], [ "ける", "く", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "げる", "ぐ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "こい", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 24 /* Reason.Imperative */ ], [ "こう", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "ごう", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "こず", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 23 /* Reason.Zu */ ], [ "こぬ", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 16 /* Reason.Negative */ ], [ "こん", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 16 /* Reason.Negative */ ], [ "さず", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "さぬ", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "さん", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "した", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 15 /* Reason.Past */ ], [ "した", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 15 /* Reason.Past */ ], [ "して", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 22 /* Reason.Te */ ], [ "して", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 22 /* Reason.Te */ ], [ "しろ", "す", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 24 /* Reason.Imperative */ ], [ "しろ", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 24 /* Reason.Imperative */ ], [ "する", "", 16 /* Type.SuruVerb */ , 32 /* Type.NounVS */ , 31 /* Reason.SuruNoun */ ], [ "せず", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 23 /* Reason.Zu */ ], [ "せぬ", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 16 /* Reason.Negative */ ], [ "せん", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 16 /* Reason.Negative */ ], [ "せず", "す", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 23 /* Reason.Zu */ ], [ "せぬ", "す", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 16 /* Reason.Negative */ ], [ "せん", "す", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 16 /* Reason.Negative */ ], [ "せば", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ | 16 /* Type.SuruVerb */ , 18 /* Reason.Ba */ ], [ "せよ", "する", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 24 /* Reason.Imperative */ ], [ "せよ", "す", 64 /* Type.Initial */ , 16 /* Type.SuruVerb */ , 24 /* Reason.Imperative */ ], [ "せる", "す", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "そう", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 12 /* Reason.Sou */ ], [ "そう", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "そう", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 12 /* Reason.Sou */ ], [ "たい", "る", 4 /* Type.IAdj */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 13 /* Reason.Tai */ ], [ "たず", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "たぬ", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "たん", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "たら", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 7 /* Reason.Tara */ ], [ "たり", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 8 /* Reason.Tari */ ], [ "った", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "った", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "った", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "って", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "って", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "って", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "てば", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 18 /* Reason.Ba */ ], [ "てる", "つ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "てる", "る", 1 /* Type.IchidanVerb */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 29 /* Reason.Continuous */ ], [ "とう", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "とく", "る", 2 /* Type.GodanVerb */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 11 /* Reason.Toku */ ], [ "ない", "る", 4 /* Type.IAdj */ | 128 /* Type.VNai */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 16 /* Reason.Negative */ ], [ "なず", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "なぬ", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "なん", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "ねば", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 18 /* Reason.Ba */ ], [ "ねる", "ぬ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "のう", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "ばず", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "ばぬ", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "ばん", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "べば", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 18 /* Reason.Ba */ ], [ "べる", "ぶ", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "ぼう", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "ます", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 14 /* Reason.Polite */ ], [ "まず", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "まぬ", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "まん", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "めば", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 18 /* Reason.Ba */ ], [ "める", "む", 1 /* Type.IchidanVerb */ , 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "もう", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "よう", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 19 /* Reason.Volitional */ ], [ "らず", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "らぬ", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "らん", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "れば", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 2 /* Type.GodanVerb */ | 8 /* Type.KuruVerb */ | 16 /* Type.SuruVerb */ , 18 /* Reason.Ba */ ], [ "れる", "る", 1 /* Type.IchidanVerb */ , 1 /* Type.IchidanVerb */ | 2 /* Type.GodanVerb */ , 20 /* Reason.Potential */ ], [ "ろう", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 19 /* Reason.Volitional */ ], [ "わず", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 23 /* Reason.Zu */ ], [ "わぬ", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "わん", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 16 /* Reason.Negative */ ], [ "んだ", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "んだ", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "んだ", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 15 /* Reason.Past */ ], [ "んで", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "んで", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], [ "んで", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 22 /* Reason.Te */ ], 
    // -------------- 1 --------------
    [ "い", "いる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "い", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "い", "る", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 24 /* Reason.Imperative */ ], [ "え", "う", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "え", "える", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "き", "きる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "き", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "き", "くる", 64 /* Type.Initial */ , 8 /* Type.KuruVerb */ , 25 /* Reason.MasuStem */ ], [ "ぎ", "ぎる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "ぎ", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "き", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 30 /* Reason.Ki */ ], [ "く", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 26 /* Reason.Adv */ ], [ "け", "く", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "け", "ける", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "げ", "ぐ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "げ", "げる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "さ", "い", 64 /* Type.Initial */ , 4 /* Type.IAdj */ , 27 /* Reason.Noun */ ], [ "し", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "じ", "じる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "ず", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 23 /* Reason.Zu */ ], [ "せ", "す", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "せ", "せる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "ぜ", "ぜる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "た", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 15 /* Reason.Past */ ], [ "ち", "ちる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "ち", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "て", "つ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "て", "てる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "て", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 8 /* Type.KuruVerb */ , 22 /* Reason.Te */ ], [ "で", "でる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "な", "", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ | 2 /* Type.GodanVerb */ | 8 /* Type.KuruVerb */ | 16 /* Type.SuruVerb */ , 28 /* Reason.ImperativeNegative */ ], [ "に", "にる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "に", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "ぬ", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 16 /* Reason.Negative */ ], [ "ん", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 16 /* Reason.Negative */ ], [ "ね", "ぬ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "ね", "ねる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "ひ", "ひる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "び", "びる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "び", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "へ", "へる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "べ", "ぶ", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "べ", "べる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "み", "みる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "み", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "め", "む", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "め", "める", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "よ", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 24 /* Reason.Imperative */ ], [ "り", "りる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "り", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 25 /* Reason.MasuStem */ ], [ "れ", "る", 64 /* Type.Initial */ , 2 /* Type.GodanVerb */ , 24 /* Reason.Imperative */ ], [ "れ", "れる", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 25 /* Reason.MasuStem */ ], [ "ろ", "る", 64 /* Type.Initial */ , 1 /* Type.IchidanVerb */ , 24 /* Reason.Imperative */ ] ];
    const deinflectRuleGroups = [];
    function getDeinflectRuleGroups() {
      if (!deinflectRuleGroups.length) {
        let prevLen = -1;
        let ruleGroup;
        for (const [from, to, fromType, toType, reason] of deinflectRuleData) {
          const rule = {
            from,
            to,
            fromType,
            toType,
            reason
          };
          if (prevLen !== rule.from.length) {
            prevLen = rule.from.length;
            ruleGroup = {
              rules: [],
              fromLen: prevLen
            };
            deinflectRuleGroups.push(ruleGroup);
          }
          ruleGroup.rules.push(rule);
        }
      }
      return deinflectRuleGroups;
    }
    // Returns an array of possible de-inflected versions of |word|.
        function deinflect(word) {
      let result = [];
      const resultIndex = {};
      const ruleGroups = getDeinflectRuleGroups();
      const original = {
        word,
        // Initially we don't know what type of word we have so we set the type
        // mask to match all rules.
        type: 0xff,
        reasons: []
      };
      result.push(original);
      resultIndex[word] = 0;
      let i = 0;
      do {
        const thisCandidate = result[i];
        // Don't deinflect masu-stem results any further since they should already
        // be the plain form.
        
        // Without this we would take something like 食べて, try deinflecting it as
        // a masu stem into 食べてる and then try de-inflecting it as a continuous
        // form. However, we should just stop immediately after de-inflecting to
        // the plain form.
                if (1 === thisCandidate.reasons.length && 1 === thisCandidate.reasons[0].length && 25 /* Reason.MasuStem */ === thisCandidate.reasons[0][0]) continue;
        const word = thisCandidate.word;
        const type = thisCandidate.type;
        for (const ruleGroup of ruleGroups) {
          if (ruleGroup.fromLen > word.length) continue;
          const ending = word.slice(-ruleGroup.fromLen);
          const hiraganaEnding = kana_to_hiragana_kanaToHiragana(ending);
          for (const rule of ruleGroup.rules) {
            if (!(type & rule.fromType)) continue;
            if (ending !== rule.from && hiraganaEnding !== rule.from) continue;
            const newWord = word.substring(0, word.length - rule.from.length) + rule.to;
            if (newWord.length <= 1) continue;
            // If we already have a candidate for this word with the same
            // 'to' type(s), expand the possible reasons.
            
            // If the 'to' type(s) differ, then we'll add a separate candidate
            // and just hope that when we go to match against dictionary words
            // we'll filter out the mismatching one(s).
                        if (resultIndex[newWord]) {
              const candidate = result[resultIndex[newWord]];
              if (candidate.type === rule.toType) {
                // Start a new reason chain
                candidate.reasons.unshift([ rule.reason ]);
                continue;
              }
            }
            resultIndex[newWord] = result.length;
            
            // Start a new candidate
            
            // Deep clone multidimensional array
                        const reasons = [];
            for (const array of thisCandidate.reasons) reasons.push([ ...array ]);
            // Add our new reason in
            
            // If we already have reason chains, prepend to the first chain
                        if (reasons.length) {
              const firstReasonChain = reasons[0];
              // Rather having causative + passive, combine the two rules into
              // "causative passive":
                            if (9 /* Reason.Causative */ === rule.reason && firstReasonChain.length && 10 /* Reason.PotentialOrPassive */ === firstReasonChain[0]) firstReasonChain.splice(0, 1, 21 /* Reason.CausativePassive */); else if (
              // If we're inflecting a Vない type word back to V, then we don't want
              // to add the "negative" reason since it's already expected to be in
              // negative form.
              128 /* Type.VNai */ === thisCandidate.type && 16 /* Reason.Negative */ === rule.reason) ; else firstReasonChain.unshift(rule.reason);
            } else 
            // Add new reason to the start of the chain
            reasons.push([ rule.reason ]);
            const candidate = {
              reasons,
              type: rule.toType,
              word: newWord
            };
            result.push(candidate);
          }
        }
      } while (++i < result.length);
      // Post-process to filter out any lingering intermediate forms
            result = result.filter((r => 63 /* Type.All */ & r.type));
      return result;
    }
    // CONCATENATED MODULE: ./src/background/yoon.ts
    // きしちにひみりぎじびぴ
    const yoonStart = [ 0x304d, 0x3057, 0x3061, 0x306b, 0x3072, 0x307f, 0x308a, 0x304e, 0x3058, 0x3073, 0x3074 ];
    // ゃゅょ
        const smallY = [ 0x3083, 0x3085, 0x3087 ];
    function endsInYoon(input) {
      const length = [ ...input ].length;
      return length > 1 && smallY.includes(input.codePointAt(length - 1)) && yoonStart.includes(input.codePointAt(length - 2));
    }
    // CONCATENATED MODULE: ./src/background/word-search.ts
    async function wordSearch({abortSignal, getWords, input, inputLengths, maxResults, includeRomaji}) {
      let longestMatch = 0;
      let have = new Set;
      const result = {
        type: "words",
        data: [],
        more: false,
        matchLen: 0
      };
      let includeVariants = true;
      while (input.length) {
        // Check if we have been aborted
        if (null === abortSignal || void 0 === abortSignal ? void 0 : abortSignal.aborted) throw new AbortError;
        // If we only have digits left, don't bother looking them up since we don't
        // want to bother the user by showing the popup every time they hover over a
        // digit.
                if (isOnlyDigits(input)) break;
        // If we include a de-inflected substring we show it in the reasons string.
                const showInflections = !!result.data.length;
        const variations = [ input ];
        // Generate variations on this substring
                if (includeVariants) {
          // Expand ー to its various possibilities
          variations.push(...expandChoon(input));
          // See if there are any 旧字体 we can convert to 新字体
                    const toNew = kyuujitaiToShinjitai(input);
          if (toNew !== input) variations.push(toNew);
        }
        for (const variant of variations) {
          const wordResults = await lookupCandidates({
            abortSignal,
            existingEntries: have,
            getWords,
            input: variant,
            includeRomaji,
            maxResults,
            showInflections
          });
          if (!wordResults.length) continue;
          // Now that we have filtered our set of matches to those we plan to keep,
          // update our duplicates set.
                    have = new Set([ ...have, ...wordResults.map((word => word.id)) ]);
          // And now that we know we will add at least one entry for this candidate
          // we can update our longest match length.
                    longestMatch = Math.max(longestMatch, inputLengths[input.length]);
          // Process each match into a suitable result
                    for (const wordResult of wordResults) {
            result.data.push(wordResult);
            if (result.data.length >= maxResults) {
              result.more = true;
              break;
            }
          }
          // Continue refining this variant excluding all others
                    input = variant;
          includeVariants = false;
          break;
        }
        if (result.data.length >= maxResults) break;
        // Shorten input, but don't split a ようおん (e.g. きゃ).
                const lengthToShorten = endsInYoon(input) ? 2 : 1;
        input = input.substring(0, input.length - lengthToShorten);
      }
      if (!result.data.length) return null;
      result.matchLen = longestMatch;
      return result;
    }
    async function lookupCandidates({abortSignal, existingEntries, getWords, includeRomaji, input, maxResults, showInflections}) {
      const result = [];
      const candidates = deinflect(input);
      for (const [candidateIndex, candidate] of candidates.entries()) {
        if (null === abortSignal || void 0 === abortSignal ? void 0 : abortSignal.aborted) throw new AbortError;
        let wordResults = await lookupCandidate({
          candidate,
          getWords,
          includeRomaji,
          originalInput: input,
          isDeinflection: 0 !== candidateIndex,
          maxResults,
          showInflections
        });
        // Drop redundant results
                wordResults = wordResults.filter((word => !existingEntries.has(word.id)));
        result.push(...wordResults);
      }
      return result;
    }
    async function lookupCandidate({candidate, getWords, includeRomaji, originalInput: input, isDeinflection, maxResults, showInflections}) {
      let matches = await getWords({
        input: candidate.word,
        maxResults
      });
      // The deinflection code doesn't know anything about the actual words. It just
      // produces possible deinflections along with a type that says what kind of a
      // word (e.g. godan verb, i-adjective etc.) it must be in order for that
      // deinflection to be valid.
      
      // So, if we have a possible deinflection, we need to check that it matches
      // the kind of word we looked up.
            matches = matches.filter((match => !isDeinflection || entryMatchesType(match, candidate.type)));
      if (!matches.length) return [];
      // Generate the reason string
            let reason;
      if (candidate.reasons.length) {
        reason = "< " + candidate.reasons.map((reasonList => reasonList.map((reason => lib.browser.i18n.getMessage(deinflectL10NKeys[reason]))).join(" < "))).join(lib.browser.i18n.getMessage("deinflect_alternate"));
        if (showInflections) reason += ` < ${input}`;
      }
      // Process each match into a suitable result
            const result = [];
      for (const match of matches) {
        const wordResult = {
          ...match,
          reason
        };
        if (includeRomaji) wordResult.romaji = match.r.map((r => toRomaji(r.ent)));
        result.push(wordResult);
      }
      return result;
    }
    // Tests if a given entry matches the type of a generated deflection
        function entryMatchesType(entry, type) {
      const hasMatchingSense = test => entry.s.some((sense => {
        var _a;
        return null === (_a = sense.pos) || void 0 === _a ? void 0 : _a.some(test);
      }));
      if (1 /* WordType.IchidanVerb */ & type && hasMatchingSense((pos => pos.startsWith("v1")))) return true;
      if (2 /* WordType.GodanVerb */ & type && hasMatchingSense((pos => pos.startsWith("v5") || pos.startsWith("v4")))) return true;
      if (4 /* WordType.IAdj */ & type && hasMatchingSense((pos => pos.startsWith("adj-i")))) return true;
      if (8 /* WordType.KuruVerb */ & type && hasMatchingSense((pos => "vk" === pos))) return true;
      if (16 /* WordType.SuruVerb */ & type && hasMatchingSense((pos => pos.startsWith("vs-")))) return true;
      if (32 /* WordType.NounVS */ & type && hasMatchingSense((pos => "vs" === pos))) return true;
      return false;
    }
    // CONCATENATED MODULE: ./src/background/name-search.ts
    async function nameSearch({abortSignal, input, inputLengths, minInputLength, maxResults}) {
      const result = {
        type: "names",
        data: [],
        more: false,
        matchLen: 0
      };
      // Record the position of existing entries for grouping purposes
            const existingItems = new Map;
      let currentString = input;
      while (currentString.length > 0) {
        // Check if we have been aborted
        if (null === abortSignal || void 0 === abortSignal ? void 0 : abortSignal.aborted) throw new AbortError;
        const currentInputLength = inputLengths[currentString.length];
        if (minInputLength && minInputLength > currentInputLength) break;
        // Don't lookup the input if we only have digits remaining.
                if (isOnlyDigits(input)) break;
        // Expand ー to its various possibilities
                const variations = [ currentString, ...expandChoon(currentString) ];
        // See if there are any 旧字体 we can convert to 新字体
                const toNew = kyuujitaiToShinjitai(currentString);
        if (toNew !== currentString) variations.push(toNew);
        for (const variant of variations) {
          let names;
          try {
            names = await getNames(variant);
          } catch (e) {
            console.error(e);
            bugsnag_default().notify(e || "(Error looking up names)");
            return null;
          }
          if (!names.length) continue;
          result.matchLen = Math.max(result.matchLen, currentInputLength);
          for (const name of names) {
            // We group together entries where the kana readings and translation
            // details are all equal.
            const nameContents = getNameEntryHash(name);
            // Check for an existing entry to combine with
                        const existingIndex = existingItems.get(nameContents);
            if ("undefined" !== typeof existingIndex) {
              const existingEntry = result.data[existingIndex];
              if (name.k) {
                if (!existingEntry.k) existingEntry.k = [];
                existingEntry.k.push(...name.k);
              }
            } else {
              result.data.push({
                ...name,
                matchLen: currentInputLength
              });
              existingItems.set(nameContents, result.data.length - 1);
            }
            if (result.data.length >= maxResults) return result;
          }
          // Unlike word searching, we don't restrict subsequent searches to this
          // variant since if we get a search for オーサカ we want to return matches
          // for _both_ おうさか and おおさか and name entries.
                }
        // Shorten input, but don't split a ようおん (e.g. きゃ).
                const lengthToShorten = endsInYoon(currentString) ? 2 : 1;
        currentString = currentString.substr(0, currentString.length - lengthToShorten);
      }
      if (!result.data.length) return null;
      return result;
    }
    function getNameEntryHash(name) {
      return name.r.join("-") + "#" + name.tr.map((tr => `${(tr.type || []).join(",")}-${tr.det.join(",")}${tr.cf ? "-" + tr.cf.join(",") : ""}`)).join(";");
    }
    // CONCATENATED MODULE: ./src/background/jpdict.ts
    // Minimum amount of time to wait before checking for database updates.
    const UPDATE_THRESHOLD_MS = 12 * 60 * 60 * 1000;
 // 12 hours
    
    // Worker setup
    
        const jpdictWorker = new Worker("./10ten-ja-jpdict.js", {
      type: "module"
    });
    jpdictWorker.onmessageerror = event => {
      console.error(`Worker error: ${JSON.stringify(event)}`);
      bugsnag_default().notify(`Worker error: ${JSON.stringify(event)}`);
    };
    // Local state tracking
    
    // We track some state locally because we want to avoid querying the database
    // when it is being updated since this can block for several seconds.
        let dbState = {
      words: {
        state: "init",
        version: null,
        fallbackState: "unloaded"
      },
      kanji: {
        state: "init",
        version: null
      },
      radicals: {
        state: "init",
        version: null
      },
      names: {
        state: "init",
        version: null
      },
      updateState: {
        type: "idle",
        lastCheck: null
      }
    };
    // Is the IDB database available for the given series?
    
    // We structure the tables and access them in a way that means we _should_ be
    // able to use, e.g., the 'words' table in a performant manner while the 'names'
    // table is being updated, but this doesn't appear to work for Chrome which
    // suffers significant lag when any tables in the database are being accessed.
    
    // As a result we simply don't touch IDB while it's being updated.
        function getDataSeriesStatus(series) {
      // If we're unavailable or initializing, treat the database as unavailable
      // regardless of whether or not we're updating.
      if ("unavailable" === dbState[series].state || "init" === dbState[series].state) return "unavailable";
      // Otherwise, whether we're empty or ok, check if we're updating.
            if ("idle" !== dbState.updateState.type) return "updating";
      // Otherwise treat empty as unavailable.
            return "ok" === dbState[series].state ? "ok" : "unavailable";
    }
    // Fallback words database to use if we can't read the IndexedDB one (e.g.
    // because we hit a quota error, or because it is currently being updated).
        const fallbackDatabaseLoader = new FlatFileDatabaseLoader({
      // If 'process' is defined, we're running in a node environment, which
      // which probably means we're running in a test environment and should not
      // bother trying to call bugsnag.
      bugsnag: "object" === typeof process ? void 0 : bugsnag_default()
    });
    // We also need to track the lastUpdateTime locally. That's because if
    // we tried to read it from extension storage when we get worker messages,
    // because the API is async, on Chrome we can get situations where we actually
    // end up applying the database state messages in the wrong order.
        let lastUpdateTime = null;
    
    // Public API
    
        async function initDb({lang, onUpdate}) {
      lastUpdateTime = await getLastUpdateTime();
      bugsnag_default().leaveBreadcrumb(`Got last update time of ${lastUpdateTime}`);
      // Register the listener
            jpdictWorker.onmessage = async event => {
        const message = event.data;
        switch (message.type) {
         case "dbstateupdated":
          {
            // Prepare the new state while preserving the existing fallback state.
            const state = {
              ...message.state,
              words: {
                ...message.state.words,
                fallbackState: dbState.words.fallbackState
              }
            };
            // Fill out the lastCheck field in the updateState.
            
            // This value will only be set if we already did a check this session.
            // It is _not_ a stored value.  So, if it is not set, use the value we
            // stored instead.
                        if (null === state.updateState.lastCheck && lastUpdateTime) state.updateState.lastCheck = new Date(lastUpdateTime);
            dbState = state;
            onUpdate(state);
          }
          break;

         case "dbupdatecomplete":
          if (message.lastCheck) void setLastUpdateTime(message.lastCheck.getTime());
          break;

         case "breadcrumb":
          bugsnag_default().leaveBreadcrumb(message.message);
          break;

         case "error":
          {
            const error = new Error(message.message);
            error.name = message.name;
            error.stack = message.stack;
            bugsnag_default().notify(error, (event => {
              event.severity = message.severity;
            }));
          }
          break;
        }
      };
      // Make sure updates to the fallback database loading state are also reported.
      
      // But first, reset any loads that might have errored or hung so that the
      // user can retry the load by disabling/enabling the add-on.
            fallbackDatabaseLoader.resetIfNotLoaded();
      fallbackDatabaseLoader.onUpdate = fallbackDatabaseState => {
        dbState.words.fallbackState = fallbackDatabaseState;
        onUpdate(dbState);
      };
      // Fetch the initial state
            jpdictWorker.postMessage(queryState());
      // If we updated within the minimum window then we're done.
            if (lastUpdateTime && Date.now() - lastUpdateTime < UPDATE_THRESHOLD_MS) {
        bugsnag_default().leaveBreadcrumb("Downloaded data is up-to-date");
        return;
      }
      jpdict_updateDb({
        lang,
        force: false
      });
    }
    async function getLastUpdateTime() {
      try {
        const getResult = await lib.browser.storage.local.get("lastDbUpdateTime");
        if ("number" === typeof getResult.lastDbUpdateTime) return getResult.lastDbUpdateTime;
      } catch {
        // Extension storage can sometimes randomly fail with 'An unexpected error
        // occurred'. Ignore, but log it.
        bugsnag_default().notify(new ExtensionStorageError({
          key: "lastDbUpdateTime",
          action: "get"
        }), (event => {
          event.severity = "warning";
        }));
      }
      return null;
    }
    async function setLastUpdateTime(time) {
      // Make sure to update the local version too.
      lastUpdateTime = time;
      // Extension storage can randomly fail with "An unexpected error occurred".
            try {
        if (time) await lib.browser.storage.local.set({
          lastDbUpdateTime: time
        }); else await lib.browser.storage.local.remove("lastDbUpdateTime");
        // Try to remove any old value we stored so we don't end up using it
        // accidentally.
                lib.browser.storage.local.remove("lastUpdateKanjiDb").catch((() => {}));
      } catch {
        bugsnag_default().notify(new ExtensionStorageError({
          key: "lastDbUpdateTime",
          action: "set"
        }), (event => {
          event.severity = "warning";
        }));
      }
    }
    function jpdict_updateDb({lang, force}) {
      jpdictWorker.postMessage(jpdict_worker_messages_updateDb({
        lang,
        force
      }));
    }
    function cancelUpdateDb() {
      jpdictWorker.postMessage(jpdict_worker_messages_cancelDbUpdate());
    }
    function jpdict_deleteDb() {
      jpdictWorker.postMessage(jpdict_worker_messages_deleteDb());
      void setLastUpdateTime(null);
    }
    // ---------------------------------------------------------------------------
    
    // Words
    
    // ---------------------------------------------------------------------------
        const WORDS_MAX_ENTRIES = 7;
    async function searchWords({input, abortSignal, includeRomaji = false, max = 0}) {
      let [word, inputLengths] = normalizeInput(input);
      const maxResults = max > 0 ? Math.min(WORDS_MAX_ENTRIES, max) : WORDS_MAX_ENTRIES;
      // Determine which dictionary to use: The IndexedDB one or the flat-file
      // fallback dictionary.
            let getWords;
      const dbStatus = getDataSeriesStatus("words");
      if ("ok" === dbStatus) getWords = ({input, maxResults}) => dist_getWords(input, {
        matchType: "exact",
        limit: maxResults
      }); else try {
        const flatFileDatabase = await fallbackDatabaseLoader.database;
        getWords = flatFileDatabase.getWords.bind(flatFileDatabase);
        // The IDB database handles kana variations but for the flat file database
        // we need to do it ourselves.
                word = kana_to_hiragana_kanaToHiragana(word);
      } catch {
        return [ null, dbStatus ];
      }
      return [ await wordSearch({
        abortSignal,
        getWords,
        input: word,
        inputLengths,
        maxResults,
        includeRomaji
      }), "ok" !== dbStatus ? dbStatus : void 0 ];
    }
    // ---------------------------------------------------------------------------
    
    // Translate
    
    // ---------------------------------------------------------------------------
        async function translate({text, includeRomaji = false}) {
      const result = {
        type: "translate",
        data: [],
        textLen: text.length,
        more: false
      };
      let skip;
      while (text.length > 0) {
        const [searchResult, dbStatus] = await searchWords({
          input: text,
          max: 1,
          includeRomaji
        });
        if (searchResult && searchResult.data) {
          if (result.data.length >= WORDS_MAX_ENTRIES) {
            result.more = true;
            break;
          }
          // Just take first match
                    result.data.push(searchResult.data[0]);
          skip = searchResult.matchLen;
        } else skip = 1;
        if (searchResult && dbStatus) result.dbStatus = dbStatus;
        text = text.substring(skip);
      }
      if (0 === result.data.length) return null;
      result.textLen -= text.length;
      return result;
    }
    // ---------------------------------------------------------------------------
    
    // Kanji
    
    // ---------------------------------------------------------------------------
        async function searchKanji(kanji) {
      var _a, _b;
      // Pre-check (might not be needed anymore)
            const codepoint = kanji.codePointAt(0);
      if (!codepoint || codepoint < 0x3000) return null;
      const kanjiStatus = getDataSeriesStatus("kanji");
      const radicalStatus = getDataSeriesStatus("radicals");
      if ("unavailable" === kanjiStatus || "unavailable" === radicalStatus) return "unavailable";
      if ("updating" === kanjiStatus || "updating" === radicalStatus) return "updating";
      const logWarningMessage = message => {
        // Ignore certain warnings that are not currently meaningful
        if (message.startsWith("Couldn't find a radical or kanji entry for")) return;
        bugsnag_default().notify(message, (event => {
          event.severity = "warning";
        }));
      };
      let result;
      try {
        result = await getKanji({
          kanji: [ kanji ],
          lang: null !== (_b = null === (_a = dbState.kanji.version) || void 0 === _a ? void 0 : _a.lang) && void 0 !== _b ? _b : "en",
          logWarningMessage
        });
      } catch (e) {
        console.error(e);
        bugsnag_default().notify(e || "(Error looking up kanji)");
        return null;
      }
      if (!result.length) return null;
      if (result.length > 1) logWarningMessage(`Got more than one result for ${kanji}`);
      return {
        type: "kanji",
        data: result[0],
        matchLen: 1
      };
    }
    // ---------------------------------------------------------------------------
    
    // Names
    
    // ---------------------------------------------------------------------------
        const NAMES_MAX_ENTRIES = 20;
    async function searchNames({abortSignal, input, minLength}) {
      const dbStatus = getDataSeriesStatus("names");
      if ("ok" !== dbStatus) return dbStatus;
      const [normalized, inputLengths] = normalizeInput(input);
      return nameSearch({
        abortSignal,
        input: normalized,
        inputLengths,
        minInputLength: minLength,
        maxResults: NAMES_MAX_ENTRIES
      });
    }
    // CONCATENATED MODULE: ./src/background/quota-management.ts
    async function shouldRequestPersistentStorage() {
      // Prior to Firefox 77, Firefox would prompt the user if we request persistent
      // storage. That could be annyoing (especially if the user denies the request)
      // so we don't request persistent storage unless it looks like the user needs
      // it.
      const firefoxMajorVersion = getFirefoxMajorVersion();
      return null === firefoxMajorVersion || firefoxMajorVersion >= 77 || await wouldBenefitFromPersistentStorage();
    }
    function getFirefoxMajorVersion() {
      const matches = navigator.userAgent.match(/\sFirefox\/([0-9.]+)/);
      if (!matches) return null;
      return Math.floor(parseFloat(matches[1]));
    }
    async function wouldBenefitFromPersistentStorage() {
      let estimate;
      try {
        estimate = await navigator.storage.estimate();
      } catch {
        return false;
      }
      // If we couldn't get an estimate, assume attempting to persist storage will
      // fail so just return false.
            if ("undefined" === typeof estimate.quota || "undefined" === typeof estimate.usage) return false;
      // We could use persistent storage if we have less than 200Mb for our quota or
      // are over 80% of our quota.
            const quotaInMb = estimate.quota / (1024 * 1024);
      const usageAsPercent = estimate.usage / estimate.quota;
      return quotaInMb < 200 || usageAsPercent > 0.8;
    }
    // CONCATENATED MODULE: ./src/background/background.ts
    /*

  10ten Japanese Reader
  by Brian Birtles
  https://github.com/birchill/10ten-ja-reader

  ---

  Originally based on Rikaikun
  by Erek Speed
  http://code.google.com/p/rikaikun/

  ---

  Originally based on Rikaichan 1.07
  by Jonathan Zarate
  http://www.polarcloud.com/

  ---

  Originally based on RikaiXUL 0.4 by Todd Rudick
  http://www.rikai.com/
  http://rikaixul.mozdev.org/

  ---

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <https://www.gnu.org/licenses/>.

  ---

  Please do not change or remove any of the copyrights or links to web pages
  when modifying any of the files. - Jon

*/
    var _a;
    
    // Setup bugsnag
    
        startBugsnag();
    
    // Setup tab manager
    
        const background_tabManager = new AllTabManager;
    const fxFetcher = new FxFetcher;
    background_tabManager.addListener((async ({enabled, tabId, anyEnabled}) => {
      // Typically we will run initJpDict from onStartup or onInstalled but if we
      // are in development mode and reloading the extension neither of those
      // callbacks will be called so make sure the database is initialized here.
      if (enabled) {
        bugsnag_default().leaveBreadcrumb("Triggering database update from enableTab...");
        initJpDict().catch((e => bugsnag_default().notify(e)));
      }
      try {
        await config.ready;
      } catch (e) {
        bugsnag_default().notify(e || "(No error)");
        return;
      }
      // Update browser action with enabled state
            updateBrowserAction({
        enabled,
        jpdictState,
        tabId,
        toolbarIcon: config.toolbarIcon
      });
      // Update context menus
            await updateContextMenus({
        tabEnabled: enabled,
        toggleMenuEnabled: config.contextMenuEnable,
        showPuck: "show" === config.contentConfig.showPuck
      });
      // If we have enabled a tab, make sure we update our FX data.
      
      // We don't do this unless a tab is enabled because some users may have the
      // add-on installed but never enabled and we shouldn't download FX data each
      // day in that case.
            if (anyEnabled) await fxFetcher.scheduleNextUpdate(); else await fxFetcher.cancelScheduledUpdate();
    }));
    
    // Setup config
    
        const config = new Config;
    config.addChangeListener((async changes => {
      var _a, _b;
      // Update toolbar icon as needed
            if (changes.hasOwnProperty("toolbarIcon")) {
        const toolbarIcon = changes.toolbarIcon.newValue;
        // Update all the different windows separately since they may have differing
        // enabled states.
                const enabledStates = await background_tabManager.getEnabledState();
        // If we are targetting individual tabs, however, first update the default
        // icon for all tabs.
                if (!enabledStates.length || "undefined" !== typeof enabledStates[0].tabId) setDefaultToolbarIcon(config.toolbarIcon);
        for (const tabState of enabledStates) updateBrowserAction({
          enabled: tabState.enabled,
          jpdictState,
          tabId: tabState.tabId,
          toolbarIcon
        });
      }
      // Update context menus as needed
            const toggleMenuEnabled = null === (_a = changes.contextMenuEnable) || void 0 === _a ? void 0 : _a.newValue;
      const showPuck = null === (_b = changes["computed:showPuck"]) || void 0 === _b ? void 0 : _b.newValue;
      if ("undefined" !== typeof toggleMenuEnabled || "undefined" !== typeof showPuck) try {
        await updateContextMenus({
          toggleMenuEnabled: "undefined" === typeof toggleMenuEnabled ? config.contextMenuEnable : toggleMenuEnabled,
          showPuck: "undefined" === typeof showPuck ? "show" === config.contentConfig.showPuck : "show" === showPuck
        });
      } catch (e) {
        bugsnag_default().notify(e);
      }
      // Update dictionary language
            if (changes.hasOwnProperty("dictLang")) {
        const newLang = changes.dictLang.newValue;
        bugsnag_default().leaveBreadcrumb(`Changing language of database to ${newLang}.`);
        jpdict_updateDb({
          lang: newLang,
          force: true
        });
      }
      // Tell the content scripts about any changes
            await background_tabManager.updateConfig(config.contentConfig);
    }));
    void config.ready.then((async () => {
      // If we have a non-default toolbar icon, set it for all tabs now so that
      // when we open a new tab, etc. it will be set correctly.
      if ("default" !== config.toolbarIcon) setDefaultToolbarIcon(config.toolbarIcon);
      // Initialize the tab manager first since we'll need its enabled state for
      // a number of other things.
            await background_tabManager.init(config.contentConfig);
      await initContextMenus({
        onToggleMenu: toggle,
        onTogglePuck: enabled => {
          config.showPuck = enabled ? "show" : "hide";
        },
        tabManager: background_tabManager,
        toggleMenuEnabled: config.contextMenuEnable,
        showPuck: "show" === config.contentConfig.showPuck
      });
    }));
    
    // Jpdict database
    
        let jpdictState = {
      words: {
        state: "init",
        version: null,
        fallbackState: "unloaded"
      },
      kanji: {
        state: "init",
        version: null
      },
      radicals: {
        state: "init",
        version: null
      },
      names: {
        state: "init",
        version: null
      },
      updateState: {
        type: "idle",
        lastCheck: null
      }
    };
    // Don't run initJpDict more that we need to
        let dbInitialized = false;
    async function initJpDict() {
      if (dbInitialized) return;
      dbInitialized = true;
      await config.ready;
      await initDb({
        lang: config.dictLang,
        onUpdate: onDbStatusUpdated
      });
    }
    async function onDbStatusUpdated(state) {
      jpdictState = state;
      // Update all the different windows separately since they may have differing
      // enabled states.
            const enabledStates = await background_tabManager.getEnabledState();
      for (const tabState of enabledStates) updateBrowserAction({
        enabled: tabState.enabled,
        jpdictState: state,
        tabId: tabState.tabId,
        toolbarIcon: config.toolbarIcon
      });
      notifyDbListeners();
    }
    
    // Database listeners
    
        const dbListeners = [];
    function isDbListenerMessage(event) {
      return "object" === typeof event && "string" === typeof event.type;
    }
    lib.browser.runtime.onConnect.addListener((port => {
      if ("options" !== port.name) return;
      dbListeners.push(port);
      // Push initial state to new listener
            notifyDbListeners(port);
      port.onMessage.addListener((async event => {
        if (!isDbListenerMessage(event)) return;
        switch (event.type) {
         case "updatedb":
          await config.ready;
          bugsnag_default().leaveBreadcrumb("Manually triggering database update");
          jpdict_updateDb({
            lang: config.dictLang,
            force: true
          });
          break;

         case "cancelupdatedb":
          bugsnag_default().leaveBreadcrumb("Manually canceling database update");
          cancelUpdateDb();
          break;

         case "deletedb":
          bugsnag_default().leaveBreadcrumb("Manually deleting database");
          jpdict_deleteDb();
          break;
        }
      }));
      port.onDisconnect.addListener((() => {
        const index = dbListeners.indexOf(port);
        if (-1 !== index) dbListeners.splice(index, 1);
      }));
    }));
    function notifyDbListeners(specifiedListener) {
      if (!dbListeners.length) return;
      const message = notifyDbStateUpdated(jpdictState);
      for (const listener of dbListeners) {
        if (specifiedListener && listener !== specifiedListener) continue;
        try {
          listener.postMessage(message);
        } catch (e) {
          console.error("Error posting message", e);
          bugsnag_default().notify(e || "(Error posting message update message)");
        }
      }
    }
    
    // Search
    
        async function background_searchWords({input, includeRomaji, abortSignal}) {
      const [words, dbStatus] = await searchWords({
        abortSignal,
        input,
        includeRomaji
      });
      return {
        words,
        dbStatus
      };
    }
    async function searchOther({input, abortSignal}) {
      // Kanji
      const kanjiResult = await searchKanji([ ...input ][0]);
      const kanji = "string" === typeof kanjiResult ? null : kanjiResult;
      if (abortSignal.aborted) throw new AbortError;
      // Names
            const nameResult = await searchNames({
        abortSignal,
        input
      });
      const names = "string" === typeof nameResult ? null : nameResult;
      if (abortSignal.aborted) throw new AbortError;
      if (!kanji && !names) return null;
      return {
        kanji,
        names
      };
    }
    
    // Browser event handlers
    
        async function toggle(tab) {
      await config.ready;
      await background_tabManager.toggleTab(tab, config.contentConfig);
    }
    lib.browser.browserAction.onClicked.addListener(toggle);
    null === (_a = lib.browser.composeAction) || void 0 === _a ? void 0 : _a.onClicked.addListener(toggle);
    // We can sometimes find ourselves in a situation where we have a backlog of
    // search requests. To avoid that, we simply cancel any previous request.
        let pendingSearchWordsRequest;
    let pendingSearchOtherRequest;
    lib.browser.runtime.onMessage.addListener(((request, sender) => {
      var _a, _b, _c, _d;
      if (!dist_is(request, BackgroundRequestSchema)) {
        console.warn(`Unrecognized request: ${JSON.stringify(request)}`);
        bugsnag_default().notify(`Unrecognized request: ${JSON.stringify(request)}`, (event => {
          event.severity = "warning";
        }));
        return;
      }
      switch (request.type) {
       case "options":
        return lib.browser.runtime.openOptionsPage();

       case "searchWords":
        if (pendingSearchWordsRequest) {
          pendingSearchWordsRequest.controller.abort();
          pendingSearchWordsRequest = void 0;
        }
        // Go ahead and stop any searches of other dictionaries too since they
        // are no longer relevant and will only make this search take longer.
                if (pendingSearchOtherRequest) {
          pendingSearchOtherRequest.controller.abort();
          pendingSearchOtherRequest = void 0;
        }
        pendingSearchWordsRequest = {
          input: request.input,
          controller: new AbortController
        };
        // Detect if this was likely a lookup that resulted in the mouse
        // onboarding being shown so we can set a hard limit on how many times
        // we show it.
        
        // Specifically, if the user has done over a thousand lookups on this
        // device and _still_ hasn't dismissed the onboarding, they're probably
        // never going to (or have hit some snag where they _can't_).
        // In that case, we should dismiss it for them instead of continuing to
        // bother them.
        
        // The following logic roughly mimicks the conditions used in the content
        // script to determine if we should show the onboarding but doesn't
        // account for whether or not the user is looking up using the puck or
        // touch. As a result, if the user is consistently using the puck/touch,
        // we may decide we no longer need to show the onboarding and, if the
        // user later decides to try using the mouse, they'll miss our beautiful
        // onboarding notice.
        
        // That's probably ok, however, and saves us having to thread the "was
        // a mouse lookup?" state all the way from the content thread.
                if (config.popupInteractive && !config.hasDismissedMouseOnboarding && config.hasUpgradedFromPreMouse) {
          config.incrementNumLookupsWithMouseOnboarding();
          if (config.numLookupsWithMouseOnboarding > 1000) config.setHasDismissedMouseOnboarding();
        }
        return (async () => {
          try {
            return await background_searchWords({
              ...request,
              abortSignal: pendingSearchWordsRequest.controller.signal
            });
          } catch (e) {
            if ("AbortError" === e.name) return "aborted";
            bugsnag_default().notify(e);
            return null;
          } finally {
            if ((null === pendingSearchWordsRequest || void 0 === pendingSearchWordsRequest ? void 0 : pendingSearchWordsRequest.input) === request.input) pendingSearchWordsRequest = void 0;
          }
        })();

       case "searchOther":
        if (pendingSearchOtherRequest) {
          pendingSearchOtherRequest.controller.abort();
          pendingSearchOtherRequest = void 0;
        }
        pendingSearchOtherRequest = {
          input: request.input,
          controller: new AbortController
        };
        return (async () => {
          try {
            return await searchOther({
              ...request,
              abortSignal: pendingSearchOtherRequest.controller.signal
            });
          } catch (e) {
            if ("AbortError" === e.name) return "aborted";
            bugsnag_default().notify(e);
            return null;
          } finally {
            if ((null === pendingSearchOtherRequest || void 0 === pendingSearchOtherRequest ? void 0 : pendingSearchOtherRequest.input) === request.input) pendingSearchOtherRequest = void 0;
          }
        })();

       case "showMouseOnboarding":
        return lib.browser.tabs.create({
          url: lib.browser.runtime.getURL("docs/introducing-the-mouse.html")
        });

       case "translate":
        return translate({
          text: request.input,
          includeRomaji: request.includeRomaji
        });

       case "toggleDefinition":
        config.toggleReadingOnly();
        break;

       case "disableMouseInteraction":
        config.popupInteractive = false;
        break;

       case "dismissedMouseOnboarding":
        config.setHasDismissedMouseOnboarding();
        break;

        
        // Forwarded messages
        
               case "frame:popupShown":
       case "frame:highlightText":
       case "frame:clearTextHighlight":
        {
          const [, type] = request.type.split(":");
          if (null === (_a = sender.tab) || void 0 === _a ? void 0 : _a.id) background_tabManager.sendMessageToFrame({
            tabId: sender.tab.id,
            message: {
              ...strip_fields_stripFields(request, [ "frameId" ]),
              type
            },
            frameId: request.frameId
          });
        }
        break;

       case "children:popupHidden":
       case "children:popupShown":
        {
          if (!(null === (_b = sender.tab) || void 0 === _b ? void 0 : _b.id)) break;
          const [, type] = request.type.split(":");
          const message = {
            ...request,
            type,
            frame: "children"
          };
          lib.browser.tabs.sendMessage(sender.tab.id, message).catch((() => {}));
        }
        break;

       case "top:lookup":
        {
          if (!(null === (_c = sender.tab) || void 0 === _c ? void 0 : _c.id) || "number" !== typeof sender.frameId) break;
          const initialSrc = background_tabManager.getInitialFrameSrc({
            tabId: sender.tab.id,
            frameId: sender.frameId
          });
          background_tabManager.sendMessageToTopFrame({
            tabId: sender.tab.id,
            message: {
              ...request,
              type: "lookup",
              source: {
                frameId: sender.frameId,
                initialSrc,
                currentSrc: request.source.src,
                dimensions: request.source.dimensions
              }
            }
          });
        }
        break;

       case "top:isPopupShowing":
       case "top:pinPopup":
       case "top:unpinPopup":
       case "top:commitPopup":
       case "top:clearResult":
       case "top:nextDictionary":
       case "top:toggleDefinition":
       case "top:movePopup":
       case "top:enterCopyMode":
       case "top:exitCopyMode":
       case "top:nextCopyEntry":
       case "top:copyCurrentEntry":
        {
          if (!(null === (_d = sender.tab) || void 0 === _d ? void 0 : _d.id)) break;
          const [, type] = request.type.split(":");
          background_tabManager.sendMessageToTopFrame({
            tabId: sender.tab.id,
            message: {
              ...request,
              type
            }
          });
        }
        break;
      }
    }));
    lib.browser.runtime.onInstalled.addListener((async details => {
      // Request persistent storage permission
      if (navigator.storage) {
        let persisted = await navigator.storage.persisted();
        if (!persisted && await shouldRequestPersistentStorage()) {
          persisted = await navigator.storage.persist();
          if (persisted) bugsnag_default().leaveBreadcrumb("Got persistent storage permission"); else bugsnag_default().leaveBreadcrumb("Failed to get persistent storage permission");
        }
      }
      bugsnag_default().leaveBreadcrumb("Running initJpDict from onInstalled...");
      initJpDict().catch((e => bugsnag_default().notify(e)));
      if ("update" === details.reason && details.previousVersion && !details.temporary) {
        bugsnag_default().leaveBreadcrumb(`Updated from version ${details.previousVersion} to ${lib.browser.runtime.getManifest().version}`);
        const [major, minor] = details.previousVersion.split(".").map(Number);
        if (1 === major && minor < 12) 
        // Wait for config to load before trying to update it or else we'll
        // clobber the other local settings.
        void config.ready.then((() => {
          config.setHasUpgradedFromPreMouse();
        }));
      }
      // If we are still developing pre-1.12, act like we are upgrading so we can
      // test the onboarding banner.
            if (details.temporary && "1.13.5" === "1.11.0") ;
    }));
    lib.browser.runtime.onStartup.addListener((async () => {
      bugsnag_default().leaveBreadcrumb("Running initJpDict from onStartup...");
      initJpDict().catch((e => bugsnag_default().notify(e)));
    }));
    // Mail extension steps
        void (async () => {
      var _a, _b;
      if (lib.browser.messageDisplayScripts || lib.browser.composeScripts) try {
        await (null === (_a = lib.browser.messageDisplayScripts) || void 0 === _a ? void 0 : _a.register({
          js: [ {
            file: "/10ten-ja-content.js"
          } ]
        }));
        await (null === (_b = lib.browser.composeScripts) || void 0 === _b ? void 0 : _b.register({
          js: [ {
            file: "/10ten-ja-content.js"
          } ]
        }));
      } catch (e) {
        console.error("Failed to register message display or compose scripts", e);
        bugsnag_default().notify(e);
      }
    })();
  })();
  /******/})();