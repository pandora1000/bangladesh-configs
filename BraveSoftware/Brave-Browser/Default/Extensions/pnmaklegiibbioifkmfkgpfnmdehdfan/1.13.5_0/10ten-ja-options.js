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
    // CONCATENATED MODULE: ./html/options.html.src
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
    const readMethods = [ "get", "getKey", "getAll", "getAllKeys", "count" ];
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
    // prettier-ignore
    new Map([ [ 0x3046, 0x3094 ], [ 0x304b, 0x304c ], [ 0x304d, 0x304e ], [ 0x304f, 0x3050 ], [ 0x3051, 0x3052 ], [ 0x3053, 0x3054 ], [ 0x3055, 0x3056 ], [ 0x3057, 0x3058 ], [ 0x3059, 0x305a ], [ 0x305b, 0x305c ], [ 0x305d, 0x305e ], [ 0x305f, 0x3060 ], [ 0x3061, 0x3062 ], [ 0x3064, 0x3065 ], [ 0x3066, 0x3067 ], [ 0x3068, 0x3069 ], [ 0x306f, 0x3070 ], [ 0x3072, 0x3073 ], [ 0x3075, 0x3076 ], [ 0x3078, 0x3079 ], [ 0x307b, 0x307c ], [ 0x309d, 0x309e ], [ 0x30ab, 0x30ac ], [ 0x30ad, 0x30ae ], [ 0x30a6, 0x30f4 ], [ 0x30af, 0x30b0 ], [ 0x30b1, 0x30b2 ], [ 0x30b3, 0x30b4 ], [ 0x30b5, 0x30b6 ], [ 0x30b7, 0x30b8 ], [ 0x30b9, 0x30ba ], [ 0x30bb, 0x30bc ], [ 0x30bd, 0x30be ], [ 0x30bf, 0x30c0 ], [ 0x30c1, 0x30c2 ], [ 0x30c4, 0x30c5 ], [ 0x30c6, 0x30c7 ], [ 0x30c8, 0x30c9 ], [ 0x30cf, 0x30d0 ], [ 0x30d2, 0x30d3 ], [ 0x30d5, 0x30d6 ], [ 0x30d8, 0x30d9 ], [ 0x30db, 0x30dc ], [ 0x30ef, 0x30f7 ], [ 0x30f0, 0x30f8 ], [ 0x30f1, 0x30f9 ], [ 0x30f2, 0x30fa ], [ 0x30fd, 0x30fe ] ]);
    // prettier-ignore
        new Map([ [ 0x306f, 0x3071 ], [ 0x3072, 0x3074 ], [ 0x3075, 0x3077 ], [ 0x3078, 0x307a ], [ 0x307b, 0x307d ], [ 0x30cf, 0x30d1 ], [ 0x30d2, 0x30d4 ], [ 0x30d5, 0x30d7 ], [ 0x30d8, 0x30da ], [ 0x30db, 0x30dd ] ]);
    // First part of the CJK Compatibility block: 0x3300-0x3370
    // prettier-ignore
        // CONCATENATED MODULE: ./node_modules/@birchill/jpdict-idb/dist/index.js
    Error;
    const allDataSeries = [ "words", "kanji", "radicals", "names" ];
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
    Math.floor(Math.log2(GLOSS_TYPE_MAX));
    // This assignment is pretty arbitrary however it's mostly used for sorting
    // entries where all we need to do is distinguish between the really common ones
    // and the obscure academic ones.
    // Entries with (P) are those ones that are marked with (P) in Edict.
    new Map([ [ "i1", 50 ], [ "i2", 20 ], [ "n1", 40 ], [ "n2", 20 ], [ "s1", 32 ], [ "s2", 20 ], [ "g1", 30 ], [ "g2", 15 ] ]);
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
    // EXTERNAL MODULE: ./node_modules/webextension-polyfill-ts/lib/index.js
        var lib = __webpack_require__(739);
    // CONCATENATED MODULE: ./src/common/copy-keys.ts
    // Various common definitions used for the keys supported in copy mode.
    const CopyKeys = [ {
      type: "entry",
      key: "e",
      optionsString: "options_popup_copy_entry",
      popupString: "content_copy_keys_entry_label"
    }, {
      type: "tab",
      key: "t",
      optionsString: "options_popup_copy_fields",
      popupString: "content_copy_keys_fields_label"
    }, {
      type: "word",
      key: "w",
      optionsString: "options_popup_copy_word_kanji",
      popupString: "content_copy_keys_word_label"
    } ];
    const CopyNextKeyStrings = {
      optionsString: "options_popup_copy_next",
      popupString: "content_copy_keys_next_label"
    };
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
    /**
 * Define a new struct type with a custom validation function.
 */
    function dist_define(name, validator) {
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
 * Ensure that a value is an integer.
 */
    function dist_integer() {
      return dist_define("integer", (value => "number" === typeof value && !isNaN(value) && Number.isInteger(value) || `Expected an integer, but received: ${dist_print(value)}`));
    }
    /**
 * Ensure that a value matches all of a set of types.
 */    
    /**
 * Ensure that a value is a number.
 */
    function dist_number() {
      return dist_define("number", (value => "number" === typeof value && !isNaN(value) || `Expected a number, but received: ${dist_print(value)}`));
    }
    /**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */
    function dist_record(Key, Value) {
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
    const dbLanguageMeta = [ [ "de", {
      name: "Deutsch",
      hasWords: true
    } ], [ "en", {
      name: "English",
      hasKanji: true,
      hasWords: true
    } ], [ "es", {
      name: "Español",
      hasKanji: true,
      hasWords: true
    } ], [ "fr", {
      name: "Français",
      hasKanji: true,
      hasWords: true
    } ], [ "hu", {
      name: "Magyar",
      hasWords: true
    } ], [ "nl", {
      name: "Nederlands",
      hasWords: true
    } ], [ "pt", {
      name: "Português",
      hasKanji: true
    } ], [ "ru", {
      name: "Русский",
      hasWords: true
    } ], [ "sl", {
      name: "Slovenščina",
      hasWords: true
    } ], [ "sv", {
      name: "Svenska",
      hasWords: true
    } ] ];
    function isDbLanguageId(id) {
      return dbLanguages.includes(id);
    }
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
        const REFERENCE_LABELS = {
      conning: {
        full: "Conning - Kodansha Kanji Learner's Course",
        short: "Conning"
      },
      sh_kk2: {
        full: "Kanji & Kana (Hadamitzky, Tuttle, 2011)",
        short: "Kanji & Kana"
      },
      halpern_njecd: {
        full: "Halpern - New Japanese-English Character Dictionary",
        short: "Halpern"
      },
      halpern_kkld_2ed: {
        full: "Kanji Learner's Dictionary (Halpbern, Kodansha, 2nd ed.)",
        short: "Kanji Learner's Dictionary"
      },
      heisig6: {
        full: "Heisig - Rembering the Kanji (6th ed.)",
        short: "Heisig"
      },
      henshall: {
        full: "Henshall - A Guide to Remembering Japanese Characters",
        short: "Henshall"
      },
      busy_people: {
        full: "Japanese for Busy People"
      },
      kanji_in_context: {
        full: "Kanji in Context"
      },
      kodansha_compact: {
        full: "Compact Kanji Guide (Kodansha)",
        short: "Compact Kanji Guide"
      },
      maniette: {
        full: "Les Kanjis dans la tete"
      },
      nelson_c: {
        full: "Classic Nelson - Modern Reader's Japanese-English Character Dictionary",
        short: "Classic Nelson"
      },
      nelson_n: {
        full: "New Nelson Japanese-English Character Dictionary",
        short: "New Nelson"
      },
      py: {
        full: "Pinyin"
      },
      skip: {
        full: "SKIP"
      },
      sh_desc: {
        full: "The Kanji Dictionary (Spahn)",
        short: "Kanji Dictionary"
      }
    };
    function getReferenceLabelsForLang(lang) {
      const result = [];
      for (const ref of SUPPORTED_REFERENCES) {
        if ("fr" !== lang && "maniette" === ref) continue;
        result.push({
          ref,
          ...getLabelForReference(ref)
        });
      }
      // Sort by short version first since this is what will be shown in the pop-up.
            result.sort(((a, b) => (a.short || a.full).localeCompare(b.short || b.full)));
      return result;
    }
    function getLabelForReference(ref) {
      switch (ref) {
       case "radical":
        return {
          full: lib.browser.i18n.getMessage("ref_label_radical")
        };

       case "nelson_r":
        return {
          full: lib.browser.i18n.getMessage("ref_label_nelson_r")
        };

       case "kk":
        return {
          full: lib.browser.i18n.getMessage("ref_label_kk")
        };

       case "jlpt":
        return {
          full: lib.browser.i18n.getMessage("ref_label_jlpt")
        };

       case "py":
        return {
          full: lib.browser.i18n.getMessage("ref_label_py")
        };

       case "unicode":
        return {
          full: lib.browser.i18n.getMessage("ref_label_unicode")
        };

       default:
        return REFERENCE_LABELS[ref];
      }
    }
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
    const updateDb = () => ({
      type: "updatedb"
    });
    const cancelDbUpdate = () => ({
      type: "cancelupdatedb"
    });
    const deleteDb = () => ({
      type: "deletedb"
    });
    // CONCATENATED MODULE: ./src/utils/dom-utils.ts
    const SVG_NS = "http://www.w3.org/2000/svg";
    const HTML_NS = "http://www.w3.org/1999/xhtml";
    function dom_utils_empty(elem) {
      while (elem.firstChild) elem.firstChild.remove();
    }
    // CONCATENATED MODULE: ./src/utils/builder.ts
    // Little helper to simplify creating HTML elements that takes care of:
    // - Adding the HTML namespace (needed so the popup works in standalong SVG
    //   documents)
    // - Returning the correct type (TypeScript's lib.dom.d.ts has createElementNS
    //   returning an HTMLElement in all cases, unlike createElement).
    // - Setting attributes (for convenience)
    function html(tagName, attributes, ...children) {
      const elem = document.createElementNS(HTML_NS, tagName);
      if (attributes) for (const key in attributes) {
        const val = attributes[key];
        if ("undefined" !== typeof val) elem.setAttribute(key, val);
      }
      if (children) elem.append(...children);
      return elem;
    }
    function builder_svg(tagName, attributes, ...children) {
      const elem = document.createElementNS(SVG_NS, tagName);
      if (attributes) for (const key in attributes) {
        const val = attributes[key];
        if ("undefined" !== typeof val) elem.setAttribute(key, val);
      }
      if (children) elem.append(...children);
      return elem;
    }
    function renderStar(style) {
      return builder_svg("svg", {
        class: "svgicon",
        viewBox: "0 0 98.6 93.2",
        style: "opacity: 0.5"
      }, builder_svg("path", {
        d: "full" === style ? "M98 34a4 4 0 00-3-1l-30-4L53 2a4 4 0 00-7 0L33 29 4 33a4 4 0 00-3 6l22 20-6 29a4 4 0 004 5 4 4 0 002 0l26-15 26 15a4 4 0 002 0 4 4 0 004-4 4 4 0 000-1l-6-29 22-20a4 4 0 001-5z" : "M77 93a4 4 0 004-4 4 4 0 000-1l-6-29 22-20a4 4 0 00-2-6l-30-4L53 2a4 4 0 00-7 0L33 29 4 33a4 4 0 00-3 6l22 20-6 29a4 4 0 004 5 4 4 0 002 0l26-15 26 15a4 4 0 002 0zm-5-12L51 70a4 4 0 00-4 0L27 81l5-22a4 4 0 00-1-4L13 40l23-3a4 4 0 004-2l9-21 10 21a4 4 0 003 2l23 3-17 15a4 4 0 00-1 4z"
      }));
    }
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
    // CONCATENATED MODULE: ./src/utils/ua-utils.ts
    function isFirefox() {
      return -1 !== navigator.userAgent.indexOf("Firefox/");
    }
    function isFenix() {
      return isFirefox() && -1 !== navigator.userAgent.indexOf("Android");
    }
    function isChromium() {
      return -1 !== navigator.userAgent.indexOf("Chrome/") || -1 !== navigator.userAgent.indexOf("Chromium/");
    }
    function isEdge() {
      return -1 !== navigator.userAgent.indexOf("Edg/");
    }
    function isSafari() {
      return -1 !== navigator.userAgent.indexOf("Safari/") && !isChromium();
    }
    function isMac() {
      return /^Mac/i.test(navigator.platform);
    }
    function isThunderbird() {
      return -1 !== navigator.userAgent.indexOf("Thunderbird/");
    }
    // CONCATENATED MODULE: ./src/utils/themes.ts
    function getThemeClass(theme) {
      if ("default" !== theme) return `theme-${theme}`;
      // It is up to the call site to register for media query updates if they
      // need to respond to dark mode changes. Generally, e.g. for popups etc.,
      // however, the usage of this value is short-lived enough that it's not
      // needed.
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "theme-black";
      return "theme-light";
    }
    // CONCATENATED MODULE: ./src/options/commands.ts
    const PRIMARY_MODIFIER_MAP = {
      Ctrl: "Ctrl",
      Command: "Ctrl",
      "⌘": "Ctrl",
      Strg: "Ctrl",
      Alt: "Alt",
      "⌥": "Alt",
      Alternatif: "Alt",
      MacCtrl: "MacCtrl",
      "⌃": "MacCtrl"
    };
    const SECONDARY_MODIFIER_MAP = {
      ...PRIMARY_MODIFIER_MAP,
      Shift: "Shift",
      "⇧": "Shift"
    };
    const MEDIA_KEYS = [ "MediaNextTrack", "MediaPlayPause", "MediaPrevTrack", "MediaStop" ];
    const SPECIAL_KEYS = [ "Comma", "Period", "Home", "End", "PageUp", "PageDown", "Space", "Insert", "Delete", "Up", "Down", "Left", "Right" ];
    const isFunctionKey = key => /^F([1-9]|(1[0-2]))$/.test(key);
    const isValidKey = key => /^[A-Z0-9]$/.test(key) || isFunctionKey(key) || SPECIAL_KEYS.includes(key);
    class Command {
      constructor(key, modifier, secondaryModifier) {
        console.assert(MEDIA_KEYS.includes(key) || isValidKey(key), `Set invalid key ${key}. Probably should have used one of the fromXXX methods`);
        console.assert(MEDIA_KEYS.includes(key) || isFunctionKey(key) || "undefined" !== typeof modifier, "Should have a modifier unless we are using a media key or function key. Probably should have used one of the fromXXX methods");
        this._key = key;
        this._modifier = modifier;
        this._secondaryModifier = secondaryModifier;
      }
      static fromString(value) {
        if (MEDIA_KEYS.includes(value)) return new Command(value);
        // Normally keys take the form Alt+Ctrl+R etc. but Chrome on Mac represents
        // the different modifiers as ⌥⇧⌃⌘.
                let parts = value.split(/([⌥⇧⌃⌘])|\+/).filter(Boolean).map((key => key.trim()));
        // Normalize the case of modifiers.
        
        // On Edge, at least on the German locale, the modifiers appear to be
        // uppercased.
                const modifiers = new Map([ ...new Set(Object.values(SECONDARY_MODIFIER_MAP)) ].map((m => [ m.toLowerCase(), m ])));
        parts = parts.map((p => modifiers.get(p.toLowerCase()) || p));
        if (!parts.length || parts.length > 3) throw new Error(lib.browser.i18n.getMessage("error_command_could_not_parse", value));
        const key = parts[parts.length - 1];
        if (!key.length) throw new Error(lib.browser.i18n.getMessage("error_command_has_no_key"));
        if (!isValidKey(key)) throw new Error(lib.browser.i18n.getMessage("error_command_key_is_not_allowed", key));
        if (!isFunctionKey(key) && (parts.length < 2 || !PRIMARY_MODIFIER_MAP.hasOwnProperty(parts[0]))) {
          console.warn(`Unexpected command string: ${value}`);
          throw new Error(lib.browser.i18n.getMessage("error_command_is_missing_modifier_key"));
        }
        let modifier;
        if (parts.length > 1) {
          if (!PRIMARY_MODIFIER_MAP.hasOwnProperty(parts[0])) throw new Error(lib.browser.i18n.getMessage("error_command_disallowed_modifier_key", parts[0]));
          modifier = PRIMARY_MODIFIER_MAP[parts[0]];
        }
        let secondaryModifier;
        if (parts.length > 2) {
          if (!SECONDARY_MODIFIER_MAP.hasOwnProperty(parts[1])) throw new Error(lib.browser.i18n.getMessage("error_command_disallowed_modifier_key", parts[1]));
          secondaryModifier = SECONDARY_MODIFIER_MAP[parts[1]];
        }
        // There are a few other checks we could do such as:
        
        // - Checking that we don't have BOTH Ctrl and Command (since Ctrl maps to
        //   Command on Macs and Command doesn't exist on other platforms).
        // - Checking that we don't use MacCtrl or Command on non-Mac platforms.
        
        // However, since we no longer sync toggle keys, they can only be set by
        // our UI or the browser UI, presumably both of which ensure the key is
        // valid for the above cases.
                return new Command(key, modifier, secondaryModifier);
      }
      static fromParams(params) {
        if (MEDIA_KEYS.includes(params.key)) {
          if (params.alt || params.ctrl || params.shift) throw new Error(lib.browser.i18n.getMessage("error_command_media_key_with_modifier_key"));
          return new Command(params.key);
        }
        if (!params.key.length) throw new Error(lib.browser.i18n.getMessage("error_command_has_no_key"));
        if (!isValidKey(params.key)) throw new Error(lib.browser.i18n.getMessage("error_command_key_is_not_allowed", params.key));
        if (!isFunctionKey(params.key) && !(params.alt || params.ctrl || params.macCtrl)) {
          console.warn(`Unexpected command params: ${JSON.stringify(params)}`);
          throw new Error(lib.browser.i18n.getMessage("error_command_is_missing_modifier_key"));
        }
        // Function key + Shift is not allowed
                if (isFunctionKey(params.key) && params.shift && !(params.alt || params.ctrl || params.macCtrl)) throw new Error(lib.browser.i18n.getMessage("error_command_disallowed_modifier_key", "Shift"));
        const modifierCount = [ params.alt ? 1 : 0, params.shift ? 1 : 0, params.ctrl ? 1 : 0, params.macCtrl ? 1 : 0 ].reduce(((value, currentValue) => currentValue + value));
        if (modifierCount > 2) throw new Error(lib.browser.i18n.getMessage("error_command_too_many_modifiers"));
        let modifier;
        if (params.alt) modifier = "Alt"; else if (params.ctrl) modifier = "Ctrl"; else if (params.macCtrl) modifier = "MacCtrl";
        let secondaryModifier;
        if (modifier) if (params.ctrl && "Ctrl" !== modifier) secondaryModifier = "Ctrl"; else if (params.macCtrl && "MacCtrl" !== modifier) secondaryModifier = "MacCtrl"; else if (params.shift) secondaryModifier = "Shift";
        return new Command(params.key, modifier, secondaryModifier);
      }
      static isValid(params) {
        try {
          Command.fromParams(params);
          return true;
        } catch {
          return false;
        }
      }
      // This should be taken to mean "Command" when on Mac
      get ctrl() {
        return "Ctrl" === this._modifier || "Ctrl" === this._secondaryModifier;
      }
      get alt() {
        return "Alt" === this._modifier || "Alt" === this._secondaryModifier;
      }
      get shift() {
        return "Shift" === this._secondaryModifier;
      }
      get macCtrl() {
        return "MacCtrl" === this._modifier || "MacCtrl" === this._secondaryModifier;
      }
      get key() {
        return this._key;
      }
      toString() {
        const parts = [];
        if (this._modifier) parts.push(this._modifier);
        if (this._secondaryModifier) parts.push(this._secondaryModifier);
        parts.push(this._key);
        return parts.join("+");
      }
    }
    /* harmony default export */    // CONCATENATED MODULE: ./src/options/l10n.ts
    // The following code is based __very__ heavily on
    // https://github.com/piroor/webextensions-lib-l10n
    const getString = fullKey => fullKey.replace(/__MSG_([@\w]+)__/g, ((matched, key) => lib.browser.i18n.getMessage(key) || matched));
    function translateDoc() {
      const texts = document.evaluate('descendant::text()[contains(self::text(), "__MSG_")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      for (let i = 0, maxi = texts.snapshotLength; i < maxi; i++) {
        const text = texts.snapshotItem(i);
        if (text) text.nodeValue = getString(text.nodeValue || "");
      }
      const attributes = document.evaluate('descendant::*/attribute::*[contains(., "__MSG_")]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      for (let i = 0, maxi = attributes.snapshotLength; i < maxi; i++) {
        const attribute = attributes.snapshotItem(i);
        if (attribute) attribute.value = getString(attribute.value);
      }
    }
    /* harmony default export */    // CONCATENATED MODULE: ./src/options/options.ts
    startBugsnag();
    const config = new Config;
    function completeForm() {
      // UA-specific styles
      // We only add the 'firefox' class on desktop Firefox since Fenix doesn't
      // include browser styles.
      if (isFirefox() && !isFenix()) document.documentElement.classList.add("firefox");
      if (isChromium()) document.documentElement.classList.add("chromium");
      if (isEdge()) document.documentElement.classList.add("edge");
      if (isSafari()) document.documentElement.classList.add("safari");
      // Pop-up
            renderPopupStyleSelect();
      setTabDisplayTheme(config.popupStyle);
      // Refresh the theme used in the tab preview if the dark mode setting changes
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (() => {
        setTabDisplayTheme(config.popupStyle);
      }));
      const mouseOnboardingLink = document.getElementById("mouse-onboarding-link");
      // Safari doesn't support opening extension pages, at least not with our
      // current permissions.
      
      // (Trust me, I tried over and over again to make Safari open these but it
      // just flat our rejects any safari-web-extension:// URLs.)
            mouseOnboardingLink.href = isSafari() ? "https://10ten.study/reader/docs/mouse-onboarding.html" : lib.browser.runtime.getURL("docs/introducing-the-mouse.html");
      // Thunderbird doesn't seem to open extension URLs from links and if we give
      // it a regular Web page then it opens it in the user's browser, instead of
      // a Thunderbird tab so instead we override the click event to force opening
      // a new tab.
            if (isThunderbird()) mouseOnboardingLink.addEventListener("click", (event => {
        void lib.browser.tabs.create({
          url: lib.browser.runtime.getURL("docs/introducing-the-mouse.html")
        });
        event.preventDefault();
      }));
      // Keyboard
            configureCommands();
      configureHoldToShowKeys();
      addPopupKeys();
      translateKeys();
      // Puck
            configurePuckSettings();
      // Language
            fillInLanguages();
      // Kanji
            createKanjiReferences();
      // l10n
            translateDoc();
      // Auto-expire new badges
            expireNewBadges();
      document.getElementById("highlightText").addEventListener("click", (event => {
        config.noTextHighlight = !event.target.checked;
      }));
      const highlightStyleOptions = Array.from(document.querySelectorAll("input[type=radio][name=highlightStyle]"));
      for (const option of highlightStyleOptions) option.addEventListener("change", (event => {
        const highlightStyle = event.target.value;
        config.highlightStyle = highlightStyle;
      }));
      document.getElementById("contextMenuEnable").addEventListener("click", (event => {
        config.contextMenuEnable = event.target.checked;
      }));
      const toolbarIconOptions = Array.from(document.querySelectorAll("input[type=radio][name=toolbarIcon]"));
      for (const option of toolbarIconOptions) option.addEventListener("change", (event => {
        const toolbarIcon = event.target.value;
        config.toolbarIcon = toolbarIcon;
      }));
      document.getElementById("showPriority").addEventListener("click", (event => {
        config.showPriority = event.target.checked;
        renderPopupStyleSelect();
      }));
      document.getElementById("showRomaji").addEventListener("click", (event => {
        config.showRomaji = event.target.checked;
        renderPopupStyleSelect();
      }));
      document.getElementById("showDefinitions").addEventListener("click", (event => {
        config.readingOnly = !event.target.checked;
        renderPopupStyleSelect();
      }));
      document.getElementById("accentDisplay").addEventListener("input", (event => {
        config.accentDisplay = event.target.value;
        renderPopupStyleSelect();
      }));
      document.getElementById("posDisplay").addEventListener("input", (event => {
        config.posDisplay = event.target.value;
        renderPopupStyleSelect();
      }));
      const mouseInteractivityOptions = Array.from(document.querySelectorAll("input[type=radio][name=mouseInteractivity]"));
      for (const option of mouseInteractivityOptions) option.addEventListener("change", (event => {
        const popupInteractive = event.target.value;
        config.popupInteractive = "enable" === popupInteractive;
      }));
      const tabDisplayOptions = Array.from(document.querySelectorAll("input[type=radio][name=tabDisplay]"));
      for (const option of tabDisplayOptions) option.addEventListener("change", (event => {
        const tabDisplay = event.target.value;
        config.tabDisplay = tabDisplay;
      }));
      document.getElementById("fxCurrency").addEventListener("input", (event => {
        config.fxCurrency = event.target.value;
      }));
      document.getElementById("showKanjiComponents").addEventListener("click", (event => {
        config.showKanjiComponents = event.target.checked;
      }));
      if (lib.browser.management) void lib.browser.management.getSelf().then((info => {
        if ("development" === info.installType) {
          document.querySelector(".db-admin").style.display = "block";
          document.getElementById("deleteDatabase").addEventListener("click", (() => {
            if (browserPort) browserPort.postMessage(deleteDb());
          }));
        }
      }));
    }
    function renderPopupStyleSelect() {
      const popupStyleSelect = document.getElementById("popupstyle-select");
      dom_utils_empty(popupStyleSelect);
      const themes = [ "default", "light", "blue", "lightblue", "black", "yellow" ];
      for (const theme of themes) {
        const input = html("input", {
          type: "radio",
          name: "popupStyle",
          value: theme,
          id: `popupstyle-${theme}`
        });
        popupStyleSelect.appendChild(input);
        input.addEventListener("click", (() => {
          config.popupStyle = theme;
          setTabDisplayTheme(theme);
        }));
        const label = html("label", {
          for: `popupstyle-${theme}`
        });
        popupStyleSelect.appendChild(label);
        // The default theme alternates between light and dark so we need to
        // generate two popup previews and overlay them.
                if ("default" === theme) label.appendChild(html("div", {
          class: "overlay"
        }, renderPopupPreview("light"), renderPopupPreview("black"))); else label.appendChild(renderPopupPreview(theme));
      }
    }
    function renderPopupPreview(theme) {
      const popupPreview = html("div", {
        class: `popup-preview window theme-${theme}`
      });
      const entry = html("div", {
        class: "entry"
      });
      popupPreview.appendChild(entry);
      const headingDiv = html("div", {});
      entry.append(headingDiv);
      const spanKanji = html("span", {
        class: "w-kanji"
      }, "理解");
      if (config.showPriority) spanKanji.append(renderStar("full"));
      headingDiv.appendChild(spanKanji);
      const spanKana = html("span", {
        class: "w-kana"
      });
      switch (config.accentDisplay) {
       case "downstep":
        spanKana.textContent = "りꜜかい";
        break;

       case "binary":
       case "binary-hi-contrast":
        spanKana.append(html("span", {
          class: `w-binary${"binary-hi-contrast" === config.accentDisplay ? " -hi-contrast" : ""}`
        }, html("span", {
          class: "h-l"
        }, "り"), html("span", {
          class: "l"
        }, "かい")));
        break;

       case "none":
        spanKana.textContent = "りかい";
        break;
      }
      if (config.showPriority) spanKana.append(renderStar("full"));
      headingDiv.appendChild(spanKana);
      if (config.showRomaji) headingDiv.appendChild(html("span", {
        class: "w-romaji"
      }, "rikai"));
      if (!config.readingOnly) {
        const spanDef = html("span", {
          class: "w-def"
        });
        if ("none" !== config.posDisplay) {
          const posSpan = html("span", {
            class: "w-pos tag"
          });
          switch (config.posDisplay) {
           case "expl":
            posSpan.append([ "n", "vs" ].map((pos => lib.browser.i18n.getMessage(`pos_label_${pos}`) || pos)).join(", "));
            break;

           case "code":
            posSpan.append("n, vs");
            break;
          }
          spanDef.append(posSpan);
        }
        spanDef.append("​understanding");
        entry.appendChild(spanDef);
      }
      return popupPreview;
    }
    function setTabDisplayTheme(theme) {
      const tabIcons = Array.from(document.querySelectorAll(".interactivity-select .icon .svg, .tabdisplay-select .icon .svg"));
      const themeClass = getThemeClass(theme);
      for (const tabIcon of tabIcons) {
        for (const className of tabIcon.classList.values()) if (className.startsWith("theme-")) tabIcon.classList.remove(className);
        tabIcon.classList.add(themeClass);
      }
    }
    function renderCurrencyList(selectedCurrency, currencies) {
      const heading = document.querySelector(".currency-heading");
      const body = document.querySelector(".currency-body");
      if (!currencies || !currencies.length) {
        heading.style.display = "none";
        body.style.display = "none";
        return;
      }
      heading.style.display = "revert";
      body.style.display = "revert";
      // Drop all the existing currencies since the set of currencies may have
      // changed
            const fxCurrency = document.getElementById("fxCurrency");
      while (fxCurrency.options.length) fxCurrency.options.remove(0);
      // Re-add them
            const currencyNames = Intl.DisplayNames ? new Intl.DisplayNames([ "en" ], {
        type: "currency"
      }) : void 0;
      const options = [ "none", ...currencies ];
      for (const currency of options) {
        let label;
        if ("none" === currency) label = lib.browser.i18n.getMessage("options_currency_none_label"); else label = currencyNames ? `${currency} - ${currencyNames.of(currency)}` : currency;
        fxCurrency.options.add(new Option(label, currency));
      }
      fxCurrency.value = selectedCurrency;
    }
    function configureCommands() {
      // Disable any controls associated with configuring browser.commands if the
      // necessary APIs are not available.
      const canConfigureCommands = lib.browser.commands && "function" === typeof lib.browser.commands.update && "function" === typeof lib.browser.commands.reset;
      const browserCommandControls = document.querySelectorAll(".key.command input");
      for (const control of browserCommandControls) control.disabled = !canConfigureCommands;
      const explanationBlock = document.getElementById("browser-commands-alternative");
      explanationBlock.style.display = canConfigureCommands ? "none" : "revert";
      if (!canConfigureCommands) {
        if (isEdge()) explanationBlock.textContent = lib.browser.i18n.getMessage("options_browser_commands_no_toggle_key_edge"); else if (isChromium()) explanationBlock.textContent = lib.browser.i18n.getMessage("options_browser_commands_no_toggle_key_chrome"); else explanationBlock.textContent = lib.browser.i18n.getMessage("options_browser_commands_no_toggle_key");
        return;
      }
      const getFormToggleKeyValue = () => {
        var _a, _b, _c, _d, _e;
        const getControl = part => document.getElementById(`toggle-${part}`);
        const params = {
          alt: null === (_a = getControl("alt")) || void 0 === _a ? void 0 : _a.checked,
          ctrl: null === (_b = getControl("ctrl")) || void 0 === _b ? void 0 : _b.checked,
          macCtrl: null === (_c = getControl("macctrl")) || void 0 === _c ? void 0 : _c.checked,
          shift: null === (_d = getControl("shift")) || void 0 === _d ? void 0 : _d.checked,
          key: (null === (_e = getControl("key")) || void 0 === _e ? void 0 : _e.value) || ""
        };
        return Command.fromParams(params);
      };
      const updateToggleKey = async () => {
        try {
          const shortcut = getFormToggleKeyValue();
          await lib.browser.commands.update({
            name: "_execute_browser_action",
            shortcut: shortcut.toString()
          });
          setToggleKeyWarningState("ok");
        } catch (e) {
          setToggleKeyWarningState("error", e.message);
        }
      };
      const toggleKeyCheckboxes = document.querySelectorAll(".command input[type=checkbox][id^=toggle-]");
      for (const checkbox of toggleKeyCheckboxes) checkbox.addEventListener("click", updateToggleKey);
      const toggleKeyTextbox = document.getElementById("toggle-key");
      toggleKeyTextbox.addEventListener("keydown", (event => {
        let key = event.key;
        if (1 === event.key.length) key = key.toUpperCase();
        if (!isValidKey(key)) {
          // Most printable keys are one character in length so make sure we don't
          // allow the default action of adding them to the text input. For other
          // keys we don't handle though (e.g. Tab) we probably want to allow the
          // default action.
          if (1 === event.key.length) event.preventDefault();
          return;
        }
        toggleKeyTextbox.value = key;
        event.preventDefault();
        void updateToggleKey();
      }));
      toggleKeyTextbox.addEventListener("compositionstart", (() => {
        toggleKeyTextbox.value = "";
      }));
      toggleKeyTextbox.addEventListener("compositionend", (() => {
        toggleKeyTextbox.value = toggleKeyTextbox.value.toUpperCase();
        void updateToggleKey();
      }));
    }
    function setToggleKeyWarningState(state, message) {
      const icon = document.getElementById("toggle-key-icon");
      icon.classList.toggle("-warning", "warning" === state);
      icon.classList.toggle("-error", "error" === state);
      if (message) icon.setAttribute("title", message); else icon.removeAttribute("title");
    }
    async function getConfiguredToggleKeyValue() {
      // Firefox for Android does not support the browser.commands API at all
      // but probably not many people want to use keyboard shortcuts on Android
      // anyway so we can just return null from here in that case.
      if (!lib.browser.commands) return null;
      const commands = await lib.browser.commands.getAll();
      // Safari (14.1.1) has a very broken implementation of
      // chrome.commands.getAll(). It returns an object but it has no properties
      // and is not iterable.
      
      // There's not much we can do in that case so we just hard code the default
      // key since Safari also has no way of changing shortcut keys. Hopefully
      // Safari will fix chrome.commands.getAll() before or at the same time it
      // provides a way of re-assigning shortcut keys.
            if ("object" === typeof commands && "function" !== typeof commands[Symbol.iterator]) return new Command("R", "MacCtrl", "Ctrl");
      for (const command of commands) if ("_execute_browser_action" === command.name && command.shortcut) return Command.fromString(command.shortcut);
      return null;
    }
    function configureHoldToShowKeys() {
      const getHoldToShowKeysValue = checkboxes => {
        const parts = [];
        for (const checkbox of checkboxes) if (checkbox.checked) parts.push(checkbox.value);
        if (!parts.length) return null;
        return parts.join("+");
      };
      const settings = [ "holdToShowKeys", "holdToShowImageKeys" ];
      for (const setting of settings) {
        const checkboxes = document.querySelectorAll(`.${setting.toLowerCase()} input[type=checkbox][id^=show-]`);
        for (const checkbox of checkboxes) checkbox.addEventListener("click", (() => {
          config[setting] = getHoldToShowKeysValue(checkboxes);
        }));
      }
    }
    function addPopupKeys() {
      const grid = document.getElementById("key-grid");
      for (const setting of DEFAULT_KEY_SETTINGS) {
        // Don't show the copy entry if the clipboard API is not available
        if ("startCopy" === setting.name && (!navigator.clipboard || "function" !== typeof navigator.clipboard.writeText)) continue;
        const keyBlock = html("div", {
          class: "key browser-style"
        });
        for (const key of setting.keys) {
          const keyInput = html("input", {
            type: "checkbox",
            class: `key-${setting.name}`,
            id: `key-${setting.name}-${key}`,
            name: `key-${setting.name}-${key}`
          });
          keyInput.dataset.key = key;
          keyBlock.append(keyInput);
          keyBlock.append(" ");
 // <-- Mimick the whitespace in the template file
                    keyInput.addEventListener("click", (() => {
            const checkedKeys = document.querySelectorAll(`input[type=checkbox].key-${setting.name}:checked`);
            config.updateKeys({
              [setting.name]: Array.from(checkedKeys).map((checkbox => checkbox.dataset.key))
            });
          }));
          const keyLabel = html("label", {
            for: `key-${setting.name}-${key}`
          });
          // We need to add an extra span inside in order to be able to get
          // consistent layout when using older versions of extensions.css that put
          // the checkbox in a pseudo.
                    if ("movePopupDownOrUp" === setting.name) {
            const [down, up] = key.split(",", 2);
            keyLabel.append(html("span", {
              class: "key-box"
            }, down));
            keyLabel.append(html("span", {
              class: "or"
            }, "/"));
            keyLabel.append(html("span", {
              class: "key-box"
            }, up));
          } else keyLabel.append(html("span", {
            class: "key-box"
          }, key));
          keyBlock.append(keyLabel);
        }
        grid.append(keyBlock);
        const keyDescription = html("div", {
          class: "key-description"
        }, lib.browser.i18n.getMessage(setting.l10nKey));
        // Copy keys has an extended description.
                if ("startCopy" === setting.name) {
          const copyKeyList = html("ul", {
            class: "key-list"
          });
          const copyKeys = CopyKeys.map((({key, optionsString}) => ({
            key,
            l10nKey: optionsString
          })));
          copyKeys.push({
            // We just show the first key here. This matches what we show in the
            // pop-up too.
            key: setting.keys[0],
            l10nKey: CopyNextKeyStrings.optionsString
          });
          for (const copyKey of copyKeys) copyKeyList.append(html("li", {
            class: "key"
          }, html("label", {}, html("span", {
            class: "key-box"
          }, copyKey.key)), lib.browser.i18n.getMessage(copyKey.l10nKey)));
          keyDescription.appendChild(copyKeyList);
        }
        grid.appendChild(keyDescription);
      }
    }
    function translateKeys() {
      const mac = isMac();
      // Hide MacCtrl key if we're not on Mac
            const macCtrlInput = document.getElementById("toggle-macctrl");
      const labels = (null === macCtrlInput || void 0 === macCtrlInput ? void 0 : macCtrlInput.labels) ? Array.from(macCtrlInput.labels) : [];
      if (macCtrlInput) macCtrlInput.style.display = mac ? "revert" : "none";
      for (const label of labels) label.style.display = mac ? "revert" : "none";
      if (!mac) return;
      const keyLabels = document.querySelectorAll(".key > label > span");
      for (const label of keyLabels) {
        // Look for a special key on the label saying what it really is.
        // We need to do this because we have an odd situation where the 'commands'
        // manifest.json property treats 'Ctrl' as 'Command' but in all other cases
        // where we see 'Ctrl', it should actually be 'Control'.
        // So to cover this, we stick data-mac="Command" on any labels that map to
        // 'commands'.
        const labelText = label.dataset["mac"] || label.textContent;
        if ("Command" === labelText) label.textContent = "⌘"; else if ("Ctrl" === labelText) label.textContent = "Control"; else if ("Alt" === labelText) label.textContent = "⌥";
      }
    }
    function configurePuckSettings() {
      const showPuckOptions = Array.from(document.querySelectorAll("input[type=radio][name=showPuck]"));
      for (const option of showPuckOptions) option.addEventListener("change", (event => {
        const setting = event.target.value;
        config.showPuck = setting;
      }));
    }
    function fillInLanguages() {
      const select = document.querySelector("select#lang");
      for (const [id, data] of dbLanguageMeta) {
        let label = data.name;
        if (data.hasWords && !data.hasKanji) label += lib.browser.i18n.getMessage("options_lang_words_only"); else if (!data.hasWords && data.hasKanji) label += lib.browser.i18n.getMessage("options_lang_kanji_only");
        select.append(html("option", {
          value: id
        }, label));
      }
      select.addEventListener("change", (() => {
        if (!isDbLanguageId(select.value)) {
          const msg = `Got unexpected language code: ${select.value}`;
          bugsnag_default().notify(new Error(msg));
          console.error(msg);
          return;
        }
        config.dictLang = select.value;
      }));
    }
    function createKanjiReferences() {
      const container = document.getElementById("kanji-reference-list");
      // Remove any non-static entries
            for (const child of Array.from(container.children)) if (!child.classList.contains("static")) child.remove();
      const referenceNames = getReferenceLabelsForLang(config.dictLang);
      for (const {ref, full} of referenceNames) {
        const checkbox = html("input", {
          type: "checkbox",
          id: `ref-${ref}`,
          name: ref
        });
        checkbox.addEventListener("click", (event => {
          config.updateKanjiReferences({
            [ref]: event.target.checked
          });
        }));
        container.append(html("div", {
          class: "browser-style checkbox-row"
        }, checkbox, html("label", {
          for: `ref-${ref}`
        }, full)));
      }
      // We want to match the arrangement of references when they are displayed,
      // that is, in a vertically flowing grid. See comments where we generate the
      // popup styles for more explanation.
      
      // We need to add 1 to the number of references, however, to accommodate the
      // "Kanji components" item.
            container.style.gridTemplateRows = `repeat(${Math.ceil((referenceNames.length + 1) / 2)}, minmax(min-content, max-content))`;
    }
    // Expire current set of badges on Jan 31
        const NEW_EXPIRY = new Date(2023, 0, 31);
    function expireNewBadges() {
      if (new Date < NEW_EXPIRY) return;
      const badges = document.querySelectorAll(".new-badge");
      for (const badge of badges) if (badge instanceof HTMLElement) badge.style.display = "none";
    }
    function fillVals() {
      const optform = document.getElementById("optform");
      optform.highlightStyle.value = config.highlightStyle;
      optform.showPriority.checked = config.showPriority;
      optform.showRomaji.checked = config.showRomaji;
      optform.showDefinitions.checked = !config.readingOnly;
      optform.accentDisplay.value = config.accentDisplay;
      optform.posDisplay.value = config.posDisplay;
      optform.highlightText.checked = !config.noTextHighlight;
      optform.contextMenuEnable.checked = config.contextMenuEnable;
      optform.showKanjiComponents.checked = config.showKanjiComponents;
      optform.mouseInteractivity.value = config.popupInteractive ? "enable" : "disable";
      optform.popupStyle.value = config.popupStyle;
      optform.tabDisplay.value = config.tabDisplay;
      optform.toolbarIcon.value = config.toolbarIcon;
      optform.showPuck.value = config.showPuck;
      renderCurrencyList(config.fxCurrency, config.fxCurrencies);
      getConfiguredToggleKeyValue().then((toggleCommand => {
        const getToggleControl = part => document.getElementById(`toggle-${part}`);
        getToggleControl("alt").checked = !!(null === toggleCommand || void 0 === toggleCommand ? void 0 : toggleCommand.alt);
        getToggleControl("ctrl").checked = !!(null === toggleCommand || void 0 === toggleCommand ? void 0 : toggleCommand.ctrl);
        getToggleControl("shift").checked = !!(null === toggleCommand || void 0 === toggleCommand ? void 0 : toggleCommand.shift);
        if (getToggleControl("macctrl")) getToggleControl("macctrl").checked = !!(null === toggleCommand || void 0 === toggleCommand ? void 0 : toggleCommand.macCtrl);
        getToggleControl("key").value = (null === toggleCommand || void 0 === toggleCommand ? void 0 : toggleCommand.key) || "";
      })).catch((e => {
        console.error(e);
        bugsnag_default().notify(e);
      }));
      // Note that this setting is hidden when we detect the device does not likely
      // have a physical keyboard.
            const holdToShowSettings = [ "holdToShowKeys", "holdToShowImageKeys" ];
      for (const setting of holdToShowSettings) {
        const holdKeyParts = "string" === typeof config[setting] ? config[setting].split("+") : [];
        const holdKeyCheckboxes = document.querySelectorAll(`.${setting.toLowerCase()} input[type=checkbox][id^=show-]`);
        for (const checkbox of holdKeyCheckboxes) checkbox.checked = holdKeyParts.includes(checkbox.value);
      }
      for (const [setting, keys] of Object.entries(config.keys)) {
        const checkboxes = document.querySelectorAll(`input[type=checkbox].key-${setting}`);
        for (const checkbox of checkboxes) checkbox.checked = !!checkbox.dataset.key && keys.includes(checkbox.dataset.key);
      }
      const langSelect = document.querySelector("select#lang");
      const langOptions = langSelect.querySelectorAll("option");
      const dictLang = config.dictLang;
      for (const option of langOptions) option.selected = option.value === dictLang;
      const enabledReferences = new Set(config.kanjiReferences);
      for (const ref of getReferencesForLang(config.dictLang)) {
        const checkbox = document.getElementById(`ref-${ref}`);
        if (checkbox) checkbox.checked = enabledReferences.has(ref);
      }
    }
    let browserPort;
    function isDbStateUpdatedMessage(event) {
      return "object" === typeof event && "string" === typeof event.type && "dbstateupdated" === event.type;
    }
    function updateFormFromConfig() {
      // If the language changes, the set of references we should show might also
      // change. We need to do this before calling `fillVals` since that will take
      // care of ticking the right boxes.
      createKanjiReferences();
      fillVals();
    }
    window.onload = async () => {
      try {
        await config.ready;
        completeForm();
        fillVals();
      } finally {
        // Reveal contents now that it is complete
        document.documentElement.classList.add("initialized");
      }
      config.addChangeListener(updateFormFromConfig);
      // Listen to changes to the database.
            browserPort = lib.browser.runtime.connect(void 0, {
        name: "options"
      });
      browserPort.onMessage.addListener((event => {
        var _a;
        if (isDbStateUpdatedMessage(event)) {
          // For Runtime.Port.postMessage Chrome appears to serialize objects using
          // JSON serialization (not structured cloned). As a result, any Date
          // objects will be transformed into strings.
          // Ideally we'd introduce a new type for these deserialized objects that
          // converts `Date` to `Date | string` but that is likely to take a full
          // day of TypeScript wrestling so instead we just manually reach into
          // this object and convert the fields known to possibly contain dates
          // into dates.
          if ("string" === typeof event.state.updateState.lastCheck) event.state.updateState.lastCheck = new Date(event.state.updateState.lastCheck);
          if ("string" === typeof (null === (_a = event.state.updateError) || void 0 === _a ? void 0 : _a.nextRetry)) event.state.updateError.nextRetry = new Date(event.state.updateError.nextRetry);
          updateDatabaseSummary(event);
        }
      }));
      // It's possible this might be disconnected on iOS which doesn't seem to
      // keep inactive ports alive.
      
      // Note that according to the docs, this should not be called when _we_ call
      // disconnect():
      
      //  https://developer.chrome.com/docs/extensions/mv3/messaging/#port-lifetime
      
      // Nevertheless, we check that `browserPort` is not undefined before trying to
      // re-connect just in case some browsers behave differently here.
            browserPort.onDisconnect.addListener((port => {
        // Firefox annotates `port` with an `error` but Chrome does not.
        const error = is_object_isObject(port.error) && "string" === typeof port.error.message ? port.error.message : lib.browser.runtime.lastError;
        bugsnag_default().leaveBreadcrumb(`Options page disconnected from background page: ${error}`);
        // Wait a moment and try to reconnect
                setTimeout((() => {
          try {
            // Check that browserPort is still set to _something_. If it is
            // undefined it probably means we are shutting down.
            if (!browserPort) return;
            browserPort = lib.browser.runtime.connect(void 0, {
              name: "options"
            });
          } catch (e) {
            bugsnag_default().notify(e);
          }
        }), 1000);
      }));
    };
    window.onunload = () => {
      config.removeChangeListener(updateFormFromConfig);
      if (browserPort) {
        browserPort.disconnect();
        browserPort = void 0;
      }
    };
    function updateDatabaseSummary(event) {
      updateDatabaseBlurb();
      updateDatabaseStatus(event);
    }
    function updateDatabaseBlurb() {
      const blurb = document.querySelector(".db-summary-blurb");
      dom_utils_empty(blurb);
      const attribution = lib.browser.i18n.getMessage("options_data_source");
      blurb.append(linkify(attribution, [ {
        keyword: "JMdict/EDICT",
        href: "https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project"
      }, {
        keyword: "KANJIDIC",
        href: "https://www.edrdg.org/wiki/index.php/KANJIDIC_Project"
      }, {
        keyword: "JMnedict/ENAMDICT",
        href: "https://www.edrdg.org/enamdict/enamdict_doc.html"
      } ]));
      const license = lib.browser.i18n.getMessage("options_edrdg_license");
      const licenseKeyword = lib.browser.i18n.getMessage("options_edrdg_license_keyword");
      blurb.append(linkify(license, [ {
        keyword: "Electronic Dictionary Research and Development Group",
        href: "https://www.edrdg.org/"
      }, {
        keyword: licenseKeyword,
        href: "https://www.edrdg.org/edrdg/licence.html"
      } ]));
      const accentAttribution = lib.browser.i18n.getMessage("options_accent_data_source");
      blurb.append(html("p", {}, accentAttribution));
    }
    function updateDatabaseStatus(event) {
      const {updateState} = event.state;
      const statusElem = document.querySelector(".db-summary-status");
      dom_utils_empty(statusElem);
      statusElem.classList.remove("-error");
      statusElem.classList.remove("-warning");
      // Fill out the info part
            switch (updateState.type) {
       case "idle":
        void updateIdleStateSummary(event, statusElem);
        break;

       case "checking":
        statusElem.append(html("div", {
          class: "db-summary-info"
        }, lib.browser.i18n.getMessage("options_checking_for_updates")));
        break;

       case "updating":
        {
          const infoDiv = html("div", {
            class: "db-summary-info"
          }, html("progress", {
            class: "progress",
            max: "100",
            value: String(100 * updateState.totalProgress),
            id: "update-progress"
          }));
          const labelElem = html("label", {
            class: "label",
            for: "update-progress"
          });
          const {major, minor, patch} = updateState.version;
          const versionString = `${major}.${minor}.${patch}`;
          const progressAsPercent = Math.round(100 * updateState.totalProgress);
          const dbLabel = getLocalizedDataSeriesLabel(updateState.series);
          labelElem.textContent = lib.browser.i18n.getMessage("options_downloading_data", [ dbLabel, versionString, String(progressAsPercent) ]);
          infoDiv.append(labelElem);
          statusElem.append(infoDiv);
          break;
        }
      }
      // Add the action button info if any
            const buttonDiv = html("div", {
        class: "db-summary-button"
      });
      switch (updateState.type) {
       case "idle":
        {
          // We should probably skip this when we are offline, but for now it
          // doesn't really matter.
          const updateButton = html("button", {
            class: "browser-style",
            type: "button"
          });
          const isUnavailable = allDataSeries.some((series => "unavailable" === event.state[series].state));
          updateButton.textContent = lib.browser.i18n.getMessage("idle" === updateState.type && !isUnavailable ? "options_update_check_button_label" : "options_update_retry_button_label");
          updateButton.addEventListener("click", triggerDatabaseUpdate);
          buttonDiv.append(updateButton);
          if (updateState.lastCheck) {
            const lastCheckString = lib.browser.i18n.getMessage("options_last_database_check", formatDate(updateState.lastCheck));
            buttonDiv.append(html("div", {
              class: "last-check"
            }, lastCheckString));
          }
          break;
        }

       case "checking":
       case "updating":
        {
          const cancelButton = html("button", {
            class: "browser-style",
            type: "button"
          }, lib.browser.i18n.getMessage("options_cancel_update_button_label"));
          cancelButton.addEventListener("click", cancelDatabaseUpdate);
          buttonDiv.append(cancelButton);
          break;
        }
      }
      statusElem.append(buttonDiv);
    }
    async function updateIdleStateSummary(event, statusElem) {
      const {updateError} = event.state;
      if (!!updateError && "OfflineError" === updateError.name) {
        statusElem.classList.add("-warning");
        statusElem.append(html("div", {
          class: "db-summary-info"
        }, lib.browser.i18n.getMessage("options_offline_explanation")));
        return;
      }
      if (!!updateError && "AbortError" !== updateError.name) {
        const infoDiv = html("div", {
          class: "db-summary-info"
        });
        let errorMessage;
        if ("QuotaExceededError" === updateError.name) try {
          let {quota} = await navigator.storage.estimate();
          if ("undefined" !== typeof quota) {
            // For Firefox, typically origins get a maximum of 20% of the global
            // limit. When we have unlimitedStorage permission, however, we can
            // use up to the full amount of the global limit. The storage API,
            // however, still returns 20% as the quota, so multiplying by 5 will
            // give the actual quota.
            if (isFirefox()) quota *= 5;
            errorMessage = lib.browser.i18n.getMessage("options_db_update_quota_error", formatSize(quota));
          }
        } catch {
          // Ignore. This UA likely doesn't support the navigator.storage API
        }
        if (!errorMessage) errorMessage = lib.browser.i18n.getMessage("options_db_update_error", updateError.message);
        infoDiv.append(html("div", {}, errorMessage));
        if (updateError.nextRetry) infoDiv.append(html("div", {}, lib.browser.i18n.getMessage("options_db_update_next_retry", formatDate(updateError.nextRetry))));
        statusElem.classList.add("-error");
        statusElem.append(infoDiv);
        return;
      }
      // If we have no version information, seem if we have a suitable summary to
      // display instead.
            const hasVersionInfo = allMajorDataSeries.some((series => !!event.state[series].version));
      if (!hasVersionInfo) {
        const summaryStates = [ [ "init", "options_db_initializing" ], [ "empty", "options_no_database" ], [ "unavailable", "options_database_unavailable" ] ];
        for (const [state, key] of summaryStates) if (allMajorDataSeries.some((series => event.state[series].state === state))) {
          statusElem.classList.toggle("-error", "unavailable" === state);
          statusElem.append(html("div", {
            class: "db-summary-info"
          }, lib.browser.i18n.getMessage(key)));
          return;
        }
      }
      const gridDiv = html("div", {
        class: "db-summary-version-grid"
      });
      for (const series of allMajorDataSeries) {
        const versionInfo = event.state[series].version;
        if (!versionInfo) continue;
        const {major, minor, patch, lang} = versionInfo;
        const titleKeys = {
          kanji: "options_kanji_data_title",
          names: "options_name_data_title",
          words: "options_words_data_title"
        };
        const titleString = lib.browser.i18n.getMessage(titleKeys[series], `${major}.${minor}.${patch} (${lang})`);
        gridDiv.append(html("div", {
          class: "db-source-title"
        }, titleString));
        const sourceNames = {
          kanji: "KANJIDIC",
          names: "JMnedict/ENAMDICT",
          words: "JMdict/EDICT"
        };
        const sourceName = sourceNames[series];
        const {databaseVersion, dateOfCreation} = versionInfo;
        let sourceString;
        if (databaseVersion && "n/a" !== databaseVersion) sourceString = lib.browser.i18n.getMessage("options_data_series_version_and_date", [ sourceName, databaseVersion, dateOfCreation ]); else sourceString = lib.browser.i18n.getMessage("options_data_series_date_only", [ sourceName, dateOfCreation ]);
        gridDiv.append(html("div", {
          class: "db-source-version"
        }, sourceString));
      }
      statusElem.append(gridDiv);
    }
    function linkify(source, replacements) {
      const matchedReplacements = [];
      for (const replacement of replacements) {
        const index = source.indexOf(replacement.keyword);
        if (-1 !== index) matchedReplacements.push({
          index,
          ...replacement
        });
      }
      matchedReplacements.sort(((a, b) => a.index - b.index));
      const result = new DocumentFragment;
      let position = 0;
      for (const replacement of matchedReplacements) {
        if (position < replacement.index) result.append(source.substring(position, replacement.index));
        result.append(html("a", {
          href: replacement.href,
          target: "_blank",
          rel: "noopener"
        }, replacement.keyword));
        position = replacement.index + replacement.keyword.length;
      }
      if (position < source.length) result.append(source.substring(position, source.length));
      return result;
    }
    // Our special date formatting that is a simplified ISO 8601 in local time
    // without seconds.
        function formatDate(date) {
      const pad = n => n < 10 ? "0" + n : n;
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
    }
    function formatSize(sizeInBytes) {
      const kilobyte = 1024;
      const megabyte = 1024 * kilobyte;
      const gigabyte = 1024 * megabyte;
      const terabyte = 1024 * gigabyte;
      // We don't bother localizing any of this. Anyone able to make sense of a
      // file size, can probably understand an English file size prefix.
            if (sizeInBytes >= terabyte) return (sizeInBytes / terabyte).toFixed(3) + "Tb";
      if (sizeInBytes >= gigabyte) return (sizeInBytes / gigabyte).toFixed(2) + "Gb";
      if (sizeInBytes >= megabyte) return (sizeInBytes / megabyte).toFixed(1) + "Mb";
      if (sizeInBytes >= kilobyte) return Math.round(sizeInBytes / kilobyte) + "Kb";
      return sizeInBytes + " bytes";
    }
    function triggerDatabaseUpdate() {
      if (!browserPort) return;
      browserPort.postMessage(updateDb());
    }
    function cancelDatabaseUpdate() {
      if (!browserPort) return;
      browserPort.postMessage(cancelDbUpdate());
    }
  })();
  /******/})();