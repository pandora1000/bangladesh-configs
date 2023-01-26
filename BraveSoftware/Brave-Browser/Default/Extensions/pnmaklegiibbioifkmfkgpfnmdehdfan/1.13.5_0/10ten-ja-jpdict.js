/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/  var __webpack_modules__ = {
    /***/ 666: 
    /***/ (__unused_webpack_module, exports) => {
      ({
        value: true
      });
      exports.kl = void 0;
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
      exports.kl = jsonEqualish;
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
      /***/
      /******/    }
  };
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
    /******/    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/    return module.exports;
    /******/  }
  /******/
  /************************************************************************/  
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    // EXTERNAL MODULE: ./node_modules/@birchill/json-equalish/dist/index.js
    var dist = __webpack_require__(666);
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
          resolve(wrap(request.result));
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
                return wrap(target[prop]);
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
        return wrap(tx);
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
        return wrap(cursorRequestMap.get(this));
      };
      return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
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
    function wrap(value) {
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
      const openPromise = wrap(request);
      if (upgrade) request.addEventListener("upgradeneeded", (event => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction));
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
 */    function deleteDB(name, {blocked} = {}) {
      const request = indexedDB.deleteDatabase(name);
      if (blocked) request.addEventListener("blocked", (() => blocked()));
      return wrap(request).then((() => {}));
    }
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
    // prettier-ignore
    new Map([ [ 0x3046, 0x3094 ], [ 0x304b, 0x304c ], [ 0x304d, 0x304e ], [ 0x304f, 0x3050 ], [ 0x3051, 0x3052 ], [ 0x3053, 0x3054 ], [ 0x3055, 0x3056 ], [ 0x3057, 0x3058 ], [ 0x3059, 0x305a ], [ 0x305b, 0x305c ], [ 0x305d, 0x305e ], [ 0x305f, 0x3060 ], [ 0x3061, 0x3062 ], [ 0x3064, 0x3065 ], [ 0x3066, 0x3067 ], [ 0x3068, 0x3069 ], [ 0x306f, 0x3070 ], [ 0x3072, 0x3073 ], [ 0x3075, 0x3076 ], [ 0x3078, 0x3079 ], [ 0x307b, 0x307c ], [ 0x309d, 0x309e ], [ 0x30ab, 0x30ac ], [ 0x30ad, 0x30ae ], [ 0x30a6, 0x30f4 ], [ 0x30af, 0x30b0 ], [ 0x30b1, 0x30b2 ], [ 0x30b3, 0x30b4 ], [ 0x30b5, 0x30b6 ], [ 0x30b7, 0x30b8 ], [ 0x30b9, 0x30ba ], [ 0x30bb, 0x30bc ], [ 0x30bd, 0x30be ], [ 0x30bf, 0x30c0 ], [ 0x30c1, 0x30c2 ], [ 0x30c4, 0x30c5 ], [ 0x30c6, 0x30c7 ], [ 0x30c8, 0x30c9 ], [ 0x30cf, 0x30d0 ], [ 0x30d2, 0x30d3 ], [ 0x30d5, 0x30d6 ], [ 0x30d8, 0x30d9 ], [ 0x30db, 0x30dc ], [ 0x30ef, 0x30f7 ], [ 0x30f0, 0x30f8 ], [ 0x30f1, 0x30f9 ], [ 0x30f2, 0x30fa ], [ 0x30fd, 0x30fe ] ]);
    // prettier-ignore
        new Map([ [ 0x306f, 0x3071 ], [ 0x3072, 0x3074 ], [ 0x3075, 0x3077 ], [ 0x3078, 0x307a ], [ 0x307b, 0x307d ], [ 0x30cf, 0x30d1 ], [ 0x30d2, 0x30d4 ], [ 0x30d5, 0x30d7 ], [ 0x30d8, 0x30da ], [ 0x30db, 0x30dd ] ]);
    // First part of the CJK Compatibility block: 0x3300-0x3370
    // prettier-ignore
        // CONCATENATED MODULE: ./node_modules/@birchill/jpdict-idb/dist/index.js
    class AbortError extends Error {
      constructor(...params) {
        super(...params);
        Object.setPrototypeOf(this, AbortError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, AbortError);
        this.name = "AbortError";
      }
    }
    const allDataSeries = [ "words", "kanji", "radicals", "names" ];
    const allMajorDataSeries = [ "words", "kanji", "names" ];
    class DownloadError extends Error {
      constructor({code, url}, ...params) {
        super(...params);
        Object.setPrototypeOf(this, DownloadError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, DownloadError);
        this.name = "DownloadError";
        this.code = code;
        this.url = url;
      }
    }
    function dist_isObject(a) {
      return "object" === typeof a && null !== a && !Array.isArray(a);
    }
    function isAbortError(e) {
      return dist_isObject(e) && "name" in e && "AbortError" === e.name;
    }
    function isDownloadError(e) {
      return dist_isObject(e) && "name" in e && "DownloadError" === e.name;
    }
    function getErrorMessage(e) {
      return dist_isObject(e) && "string" === typeof e.message ? e.message : String(e);
    }
    // Utility function for fetch that allows setting a timeout as well as taking an
    // AbortController so that the callee can abort the request before that point
    // too.
    
    // If it times out the `response` Promise will reject with a TimeoutError
    // so that a timeout can be distinguished from a deliberate abort.
        async function fetchWithTimeout(resource, options) {
      var _a, _b;
      // Set up abort controller
            const controller = new AbortController;
      const onAbort = () => controller.abort();
      null === (_a = null === options || void 0 === options ? void 0 : options.signal) || void 0 === _a ? void 0 : _a.addEventListener("abort", onAbort);
      // Set up timeout callback
            const {timeout} = options;
      let didTimeout = false;
      let timeoutId;
      if (timeout && timeout !== 1 / 0) timeoutId = setTimeout((() => {
        didTimeout = true;
        controller.abort();
      }), timeout);
      try {
        const response = await fetch(resource, {
          ...options,
          signal: controller.signal
        });
        if (timeoutId) clearTimeout(timeoutId);
        return response;
      } catch (e) {
        // Check for a timeout
        if (didTimeout && isAbortError(e)) throw new DownloadError({
          code: "Timeout",
          url: "string" === typeof resource ? resource : resource.url
        }, `Download timed out after ${timeout / 1000} second(s).`);
        throw e;
      } finally {
        null === (_b = null === options || void 0 === options ? void 0 : options.signal) || void 0 === _b ? void 0 : _b.removeEventListener("abort", onAbort);
      }
    }
    const safeInteger = () => refine(integer(), "safeInteger", (value => Number.isSafeInteger(value)));
    async function getVersionInfo({baseUrl, series, lang, majorVersion, timeout, signal}) {
      const versionInfoFile = await getVersionInfoFile({
        baseUrl,
        lang,
        timeout,
        signal
      });
      // Extract the appropriate database version information
            const dbVersionInfo = getCurrentVersionInfo(versionInfoFile, series, majorVersion);
      if (!dbVersionInfo) throw new DownloadError({
        code: "VersionFileInvalid"
      }, `Invalid version object: the requested series, ${series} was not available in this language ('${lang}')`);
      return dbVersionInfo;
    }
    function clearCachedVersionInfo() {
      cachedVersionInfo = void 0;
    }
    const CACHE_TIMEOUT = 3000 * 60;
 // Cache version file contents for 3 minutes
        let cachedVersionInfo;
    async function getVersionInfoFile({baseUrl, lang, timeout, signal}) {
      if ((null === cachedVersionInfo || void 0 === cachedVersionInfo ? void 0 : cachedVersionInfo.lang) === lang && cachedVersionInfo.accessTime > Date.now() - CACHE_TIMEOUT) return cachedVersionInfo.versionInfoFile;
      cachedVersionInfo = void 0;
      const accessTime = Date.now();
      let rawVersionInfoFile;
      const url = `${baseUrl}jpdict/reader/version-${lang}.json`;
      let response;
      try {
        response = await fetchWithTimeout(url, {
          signal,
          timeout
        });
      } catch (e) {
        if (isAbortError(e) || isDownloadError(e)) throw e;
        throw new DownloadError({
          code: "VersionFileNotAccessible",
          url
        }, `Version file ${url} not accessible (${getErrorMessage(e)})`);
      }
      // Fetch rejects the promise for network errors, but not for HTTP errors :(
            if (!response.ok) {
        const code = 404 === response.status ? "VersionFileNotFound" : "VersionFileNotAccessible";
        throw new DownloadError({
          code,
          url
        }, `Version file ${url} not accessible (status: ${response.status})`);
      }
      // Try to parse it
            try {
        rawVersionInfoFile = await response.json();
      } catch (e) {
        throw new DownloadError({
          code: "VersionFileInvalid",
          url
        }, `Invalid version object: ${getErrorMessage(e) || "(No detailed error message)"}`);
      }
      if (null === signal || void 0 === signal ? void 0 : signal.aborted) throw new AbortError;
      const versionInfoFile = parseVersionInfoFile(rawVersionInfoFile);
      cachedVersionInfo = {
        lang,
        versionInfoFile,
        accessTime
      };
      return versionInfoFile;
    }
    const VersionInfoStruct = type({
      major: min(safeInteger(), 1),
      minor: min(safeInteger(), 0),
      patch: min(safeInteger(), 0),
      parts: optional(min(safeInteger(), 1)),
      databaseVersion: optional(string()),
      dateOfCreation: nonempty(string())
    });
    const VersionInfoFileStruct = record(string(), record(string(), VersionInfoStruct));
    function parseVersionInfoFile(rawVersionInfoFile) {
      if (!rawVersionInfoFile) throw new DownloadError({
        code: "VersionFileInvalid"
      }, "Empty version info file");
      const [error, versionInfoFile] = validate(rawVersionInfoFile, VersionInfoFileStruct);
      if (error) throw new DownloadError({
        code: "VersionFileInvalid"
      }, `Version file was invalid: ${error}`);
      return versionInfoFile;
    }
    function getCurrentVersionInfo(versionInfoFile, series, majorVersion) {
      if (!(series in versionInfoFile)) return null;
      if (!(majorVersion in versionInfoFile[series])) throw new DownloadError({
        code: "MajorVersionNotFound"
      }, `No ${majorVersion}.x version information for ${series} data`);
      return versionInfoFile[series][majorVersion];
    }
    async function* ljsonStreamIterator({stream, signal, timeout, url}) {
      const reader = stream.getReader();
      const lineEnd = /\n|\r|\r\n/m;
      const decoder = new TextDecoder("utf-8");
      let buffer = "";
      const parseLine = line => {
        try {
          return JSON.parse(line);
        } catch {
          try {
            reader.releaseLock();
          } catch {
            // Ignore
          }
          throw new DownloadError({
            code: "DatabaseFileInvalidJSON",
            url
          }, `Could not parse JSON in database file: ${line}`);
        }
      };
      while (true) {
        let readResult;
        try {
          readResult = await waitWithTimeout({
            promise: reader.read(),
            timeout,
            url
          });
        } catch (e) {
          try {
            reader.releaseLock();
          } catch {
            // Ignore
          }
          if (isAbortError(e) || isDownloadError(e)) throw e;
          throw new DownloadError({
            code: "DatabaseFileNotAccessible",
            url
          }, `Could not read database file (${getErrorMessage(e)})`);
        }
        const {done, value} = readResult;
        if (done) {
          buffer += decoder.decode();
          if (buffer) {
            yield parseLine(buffer);
            buffer = "";
          }
          return;
        }
        buffer += decoder.decode(value, {
          stream: true
        });
        const lines = buffer.split(lineEnd);
        // We don't know if the last line is actually the last line of the
        // input or not until we get done: true so we just assume it is
        // a partial line for now.
                buffer = lines.length ? lines.splice(lines.length - 1, 1)[0] : "";
        for (const line of lines) {
          if (signal.aborted) throw new AbortError;
          if (!line) continue;
          yield parseLine(line);
        }
      }
    }
    function waitWithTimeout({promise, timeout, url}) {
      let timeoutId;
      const timeoutPromise = new Promise(((_, reject) => {
        timeoutId = self.setTimeout((() => {
          clearTimeout(timeoutId);
          reject(new DownloadError({
            code: "Timeout",
            url
          }, `Download timed out after ${timeout / 1000} seconds.`));
        }), timeout);
      }));
      return Promise.race([ promise, timeoutPromise ]).then((val => {
        clearTimeout(timeoutId);
        return val;
      }));
    }
    /**
 * A helper to remove certain fields from an object.
 */    function stripFields(o, fields) {
      const result = {
        ...o
      };
      for (const field of fields) delete result[field];
      return result;
    }
    function compareVersions(a, b) {
      if (a.major < b.major) return -1;
      if (a.major > b.major) return 1;
      if (a.minor < b.minor) return -1;
      if (a.minor > b.minor) return 1;
      if (a.patch < b.patch) return -1;
      if (a.patch > b.patch) return 1;
      return 0;
    }
    
    // Configuration constants
    
        const BASE_URL = "https://data.10ten.study/";
    const DOWNLOAD_TIMEOUT = 20000;
    async function hasLanguage({series, majorVersion, lang, signal}) {
      try {
        const result = await getVersionInfo({
          baseUrl: BASE_URL,
          series,
          lang,
          majorVersion,
          timeout: DOWNLOAD_TIMEOUT,
          signal
        });
        return !!result;
      } catch (e) {
        return false;
      }
    }
    async function* download({series, majorVersion, currentVersion, lang, signal}) {
      const versionInfo = await getVersionInfo({
        baseUrl: BASE_URL,
        series,
        lang,
        majorVersion,
        timeout: DOWNLOAD_TIMEOUT,
        signal
      });
      const {files, type} = getDownloadList({
        currentVersion,
        latestVersion: versionInfo
      });
      if ("reset" === type && currentVersion) yield {
        type: "reset"
      };
      yield {
        type: "downloadstart",
        files: files.length
      };
      for (const file of files) yield* getEvents({
        baseUrl: BASE_URL,
        series,
        lang,
        version: file.version,
        signal,
        format: file.format,
        partInfo: file.partInfo
      });
      yield {
        type: "downloadend"
      };
    }
    function getDownloadList({currentVersion, latestVersion}) {
      // Check the local database is not ahead of what we're about to download
      // This can happen when the version file gets cached because we can
      // download a more recent version (e.g. we have DevTools open with "skip
      // cache" ticked) and then try again to fetch the file but get the older
      // version.
      if (currentVersion && compareVersions(currentVersion, latestVersion) > 0) {
        const versionToString = ({major, minor, patch}) => `${major}.${minor}.${patch}`;
        throw new DownloadError({
          code: "DatabaseTooOld"
        }, `Database version (${versionToString(latestVersion)}) is older than the current version (${versionToString(currentVersion)})`);
      }
      // If there's no current version or if there's been a change in major/minor
      // version, reset any existing data.
            let downloadType = !currentVersion || compareVersions(currentVersion, {
        ...latestVersion,
        patch: 0
      }) < 0 ? "reset" : "update";
      // Furthermore, if we're resuming a multi-part initial download but there have
      // since been more than 10 new patches to that minor version, we should just
      // start over.
      
      // This will probably be faster and, more importantly, it means we can archive
      // the full (i.e. non-patch) version files of any minor version that is more
      // than 10 patches old without having to worry about really out-of-date
      // clients later requesting those parts.
            if ("update" === downloadType && (null === currentVersion || void 0 === currentVersion ? void 0 : currentVersion.partInfo) && latestVersion.patch - currentVersion.patch > 10) downloadType = "reset";
      // There are four cases to consider:
      
      // 1. We are doing a full download of a partitioned data series
      //    i.e. we need to download all the parts from 0 to `parts - 1`.
      
      // 2. We are doing a full download of an unpartitioned data series
      //    i.e. we simply need to download the data file for the current patch
      //    level.
      
      // 3. We are resuming a full download
      //    i.e. we need to download all the remaining parts _and_ the any
      //    subsequent patches.
      
      // 4. We are patching an existing series
      //    i.e. we need to download each patch from the one after the current
      //    version up to and including the latest patch.
      // Case 1: Partitioned series
            if ("reset" === downloadType && latestVersion.parts) {
        const files = [];
        let nextPart = 1;
        while (nextPart <= latestVersion.parts) {
          files.push({
            format: "full",
            version: {
              major: latestVersion.major,
              minor: latestVersion.minor,
              patch: latestVersion.patch
            },
            partInfo: {
              part: nextPart,
              parts: latestVersion.parts
            }
          });
          nextPart++;
        }
        return {
          type: downloadType,
          files
        };
      }
      // Case 2: Unpartitioned series
            if ("reset" === downloadType) return {
        type: downloadType,
        files: [ {
          format: "full",
          version: {
            major: latestVersion.major,
            minor: latestVersion.minor,
            patch: latestVersion.patch
          }
        } ]
      };
      // The following is just to help TypeScript realise that `currentVersion` must
      // be defined if `downloadType` is 'update'.
            if (!currentVersion) throw new Error("We should have already dealt with the initial download case");
      // Case 3 (part 1): Resumed partitioned series
            const files = [];
      if (currentVersion.partInfo) {
        let nextPart = currentVersion.partInfo.part + 1;
        while (nextPart <= currentVersion.partInfo.parts) {
          files.push({
            format: "full",
            version: {
              major: currentVersion.major,
              minor: currentVersion.minor,
              patch: currentVersion.patch
            },
            partInfo: {
              part: nextPart,
              parts: currentVersion.partInfo.parts
            }
          });
          nextPart++;
        }
      }
      // Case 3 (part 2) and case 4: Updating a series
            let nextPatch = currentVersion.patch + 1;
      while (nextPatch <= latestVersion.patch) {
        files.push({
          format: "patch",
          version: {
            major: latestVersion.major,
            minor: latestVersion.minor,
            patch: nextPatch
          }
        });
        nextPatch++;
      }
      return {
        type: downloadType,
        files
      };
    }
    const HeaderLineStruct = type({
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
    const PatchLineStruct = type({
      _: enums([ "+", "-", "~" ])
    });
    async function* getEvents({baseUrl, series, lang, version, signal, format, partInfo}) {
      const dottedVersion = `${version.major}.${version.minor}.${version.patch}`;
      const commonUrlStart = `${baseUrl}jpdict/reader/${series}/${lang}/${dottedVersion}`;
      const url = "patch" === format ? `${commonUrlStart}-patch.jsonl` : partInfo ? `${commonUrlStart}-${partInfo.part}.jsonl` : `${commonUrlStart}.jsonl`;
      let response;
      try {
        response = await fetchWithTimeout(url, {
          signal,
          timeout: DOWNLOAD_TIMEOUT
        });
      } catch (e) {
        if (isAbortError(e) || isDownloadError(e)) throw e;
        throw new DownloadError({
          code: "DatabaseFileNotFound",
          url
        }, `Database file ${url} not accessible (${getErrorMessage(e)})`);
      }
      if (!response.ok) {
        const code = 404 === response.status ? "DatabaseFileNotFound" : "DatabaseFileNotAccessible";
        throw new DownloadError({
          code,
          url
        }, `Database file ${url} not accessible (status: ${response.status})`);
      }
      if (null === response.body) throw new DownloadError({
        code: "DatabaseFileNotAccessible",
        url
      }, "Body is null");
      let headerRead = false;
      for await (const line of ljsonStreamIterator({
        stream: response.body,
        signal,
        timeout: DOWNLOAD_TIMEOUT,
        url
      })) if (is(line, HeaderLineStruct)) {
        if (headerRead) throw new DownloadError({
          code: "DatabaseFileHeaderDuplicate",
          url
        }, `Got duplicate database header: ${JSON.stringify(line)}`);
        if (0 !== compareVersions(line.version, version)) throw new DownloadError({
          code: "DatabaseFileVersionMismatch",
          url
        }, `Got mismatched database versions (Expected: ${JSON.stringify(version)} got: ${JSON.stringify(line.version)})`);
        if (line.part !== (null === partInfo || void 0 === partInfo ? void 0 : partInfo.part)) throw new DownloadError({
          code: "DatabaseFileVersionMismatch",
          url
        }, `Got mismatched database part number (Expected: ${null === partInfo || void 0 === partInfo ? void 0 : partInfo.part}, got: ${line.part})`);
        if (line.format !== format) throw new DownloadError({
          code: "DatabaseFileVersionMismatch",
          url
        }, `Expected to get a data file in ${format} format but got '${line.format}' format instead`);
        let fileStartEvent;
        if (void 0 !== line.part) fileStartEvent = {
          type: "filestart",
          totalRecords: line.records,
          version: {
            ...line.version,
            partInfo: {
              part: line.part,
              parts: partInfo.parts
            },
            lang
          }
        }; else fileStartEvent = {
          type: "filestart",
          totalRecords: line.records,
          version: {
            ...line.version,
            lang
          }
        };
        yield fileStartEvent;
        headerRead = true;
      } else if ("patch" === format && is(line, PatchLineStruct)) {
        if (!headerRead) throw new DownloadError({
          code: "DatabaseFileHeaderMissing",
          url
        }, `Expected database version but got ${JSON.stringify(line)}`);
        const mode = "+" === line._ ? "add" : "-" === line._ ? "delete" : "change";
        yield {
          type: "record",
          mode,
          record: stripFields(line, [ "_" ])
        };
      } else if ("full" === format && dist_isObject(line)) {
        if (!headerRead) throw new DownloadError({
          code: "DatabaseFileHeaderMissing",
          url
        }, `Expected database version but got ${JSON.stringify(line)}`);
        if ("_" in line) throw new DownloadError({
          code: "DatabaseFileInvalidRecord",
          url
        }, `Got patch-like '_' field in non-patch record: ${JSON.stringify(line)}`);
        yield {
          type: "record",
          mode: "add",
          record: line
        };
      } else 
      // If we encounter anything unexpected we should fail.
      // It might be tempting to make this "robust" by ignoring unrecognized
      // inputs but that could effectively leave us in an invalid state where
      // we claim to be update-to-date with database version X but are
      // actually missing some of the records.
      // If anything unexpected shows up we should fail so we can debug
      // exactly what happenned.
      throw new DownloadError({
        code: "DatabaseFileInvalidRecord",
        url
      }, `Got unexpected record: ${JSON.stringify(line)}`);
      yield {
        type: "fileend"
      };
    }
    class QuotaExceededError extends Error {
      constructor(...params) {
        super(...params);
        Object.setPrototypeOf(this, QuotaExceededError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, QuotaExceededError);
        this.name = "QuotaExceededError";
        this.message = "The current transaction exceeded its quota limitations.";
      }
    }
    function hasHiragana(str) {
      return [ ...str ].map((c => c.codePointAt(0))).some((c => c >= 0x3041 && c <= 0x309f));
    }
    function toWordStoreRecord(record) {
      const result = {
        ...record,
        rm: record.rm ? record.rm.map((elem => 0 === elem ? null : elem)) : void 0,
        km: record.km ? record.km.map((elem => 0 === elem ? null : elem)) : void 0,
        h: keysToHiragana([ ...record.k || [], ...record.r ]),
        kc: [],
        gt_en: [],
        gt_l: []
      };
      // I'm not sure if IndexedDB preserves properties with undefined values
      // (I think it does, although JSON does not) but just to be sure we don't
      // end up storing unnecessary values, drop any undefined properties we may
      // have just added.
            if (!result.rm) delete result.rm;
      if (!result.km) delete result.km;
      return result;
    }
    function getStoreIdForWordRecord(record) {
      return record.id;
    }
    function toNameStoreRecord(entry) {
      return {
        ...entry,
        h: keysToHiragana([ ...entry.k || [], ...entry.r ])
      };
    }
    function getStoreIdForNameRecord(record) {
      return record.id;
    }
    function toKanjiStoreRecord(record) {
      return {
        ...record,
        c: record.c.codePointAt(0)
      };
    }
    function getStoreIdForKanjiRecord(record) {
      return record.c.codePointAt(0);
    }
    function toRadicalStoreRecord(record) {
      return record;
    }
    function getStoreIdForRadicalRecord(record) {
      return record.id;
    }
    // ---------------------------------------------------------------------------
    
    // Common
    
    // ---------------------------------------------------------------------------
        function keysToHiragana(values) {
      // We only add hiragana keys for words that actually have some hiragana in
      // them. Any purely kanji keys should match on the 'k' index and won't benefit
      // from converting the input and source to hiragana so we can match them.
      return Array.from(new Set(values.map((value => kana_to_hiragana_kanaToHiragana(value))).filter(hasHiragana)));
    }
    function getVersionKey(series) {
      switch (series) {
       case "words":
        return 4;

       case "kanji":
        return 1;

       case "radicals":
        return 2;

       case "names":
        return 3;
      }
    }
    class JpdictStore {
      constructor() {
        this.state = "idle";
        this.toStoreRecord = {
          words: toWordStoreRecord,
          names: toNameStoreRecord,
          kanji: toKanjiStoreRecord,
          radicals: toRadicalStoreRecord
        };
        this.getStoreId = {
          words: getStoreIdForWordRecord,
          names: getStoreIdForNameRecord,
          kanji: getStoreIdForKanjiRecord,
          radicals: getStoreIdForRadicalRecord
        };
      }
      async open() {
        if ("open" === this.state) return this.db;
        if ("opening" === this.state) return this.openPromise;
        if ("deleting" === this.state) await this.deletePromise;
        this.state = "opening";
        /* eslint @typescript-eslint/no-this-alias: 0 */        const self = this;
        this.openPromise = safari_14_idb_fix_dist().then((() => build_openDB("jpdict", 4, {
          upgrade(db, oldVersion, _newVersion, transaction) {
            if (oldVersion < 1) {
              const kanjiTable = db.createObjectStore("kanji", {
                keyPath: "c"
              });
              kanjiTable.createIndex("r.on", "r.on", {
                multiEntry: true
              });
              kanjiTable.createIndex("r.kun", "r.kun", {
                multiEntry: true
              });
              kanjiTable.createIndex("r.na", "r.na", {
                multiEntry: true
              });
              const radicalsTable = db.createObjectStore("radicals", {
                keyPath: "id"
              });
              radicalsTable.createIndex("r", "r");
              radicalsTable.createIndex("b", "b");
              radicalsTable.createIndex("k", "k");
              db.createObjectStore("version", {
                keyPath: "id"
              });
            }
            if (oldVersion < 2) {
              const namesTable = db.createObjectStore("names", {
                keyPath: "id"
              });
              namesTable.createIndex("k", "k", {
                multiEntry: true
              });
              namesTable.createIndex("r", "r", {
                multiEntry: true
              });
            }
            if (oldVersion < 3) {
              const namesTable = transaction.objectStore("names");
              namesTable.createIndex("h", "h", {
                multiEntry: true
              });
            }
            if (oldVersion < 4) {
              const wordsTable = db.createObjectStore("words", {
                keyPath: "id"
              });
              wordsTable.createIndex("k", "k", {
                multiEntry: true
              });
              wordsTable.createIndex("r", "r", {
                multiEntry: true
              });
              wordsTable.createIndex("h", "h", {
                multiEntry: true
              });
              wordsTable.createIndex("kc", "kc", {
                multiEntry: true
              });
              wordsTable.createIndex("gt_en", "gt_en", {
                multiEntry: true
              });
              wordsTable.createIndex("gt_l", "gt_l", {
                multiEntry: true
              });
            }
          },
          blocked() {
            console.log("Opening blocked");
          },
          blocking() {
            if (self.db) {
              try {
                self.db.close();
              } catch {
                // Ignore
              }
              self.db = void 0;
              self.state = "idle";
            }
          }
        }).then((db => {
          self.db = db;
          self.state = "open";
          return db;
        }))));
        try {
          await this.openPromise;
        } catch (e) {
          this.state = "error";
          throw e;
        } finally {
          // This is not strictly necessary, but it doesn't hurt.
          this.openPromise = void 0;
        }
        // IndexedDB doesn't provide a way to check if a database exists
        // so we just unconditionally try to delete the old database, in case it
        // exists, _every_ _single_ _time_.
        
        // We don't bother waiting on it or reporting errors, however.
                deleteDB("KanjiStore").catch((() => {}));
        return this.db;
      }
      async close() {
        var _a;
        if ("idle" === this.state) return;
        if ("deleting" === this.state) return this.deletePromise;
        if ("opening" === this.state) await this.openPromise;
        null === (_a = this.db) || void 0 === _a ? void 0 : _a.close();
        this.db = void 0;
        this.state = "idle";
      }
      async destroy() {
        if ("idle" !== this.state) await this.close();
        this.state = "deleting";
        this.deletePromise = deleteDB("jpdict", {
          blocked() {
            console.log("Deletion blocked");
          }
        });
        await this.deletePromise;
        this.deletePromise = void 0;
        this.state = "idle";
      }
      async clearSeries(series) {
        const db = await this.open();
        const tx = db.transaction([ series, "version" ], "readwrite");
        try {
          // Drop the table
          const targetTable = tx.objectStore(series);
          await targetTable.clear();
          // Drop the version record
                    const versionTable = tx.objectStore("version");
          const id = getVersionKey(series);
          void versionTable.delete(id);
        } catch (e) {
          console.error(`Error deleting data series '${series}'`, e);
          // Ignore the abort from the transaction
                    tx.done.catch((() => {}));
          try {
            tx.abort();
          } catch {
            // Ignore exceptions from aborting the transaction.
            // This can happen is the transaction has already been aborted by this
            // point.
          }
          throw e;
        }
        await tx.done;
      }
      async getDataVersion(series) {
        await this.open();
        const key = getVersionKey(series);
        const versionDoc = await this.db.get("version", key);
        if (!versionDoc) return null;
        return stripFields(versionDoc, [ "id" ]);
      }
      async updateDataVersion({series, version}) {
        await this.open();
        try {
          const id = getVersionKey(series);
          await this.db.put("version", {
            ...version,
            id
          });
        } catch (e) {
          console.error(`Error updating version of '${series}' to ${JSON.stringify(version)}`, e);
          throw e;
        }
      }
      async updateSeries({series, updates}) {
        await this.open();
        const tx = this.db.transaction(series, "readwrite");
        const table = tx.store;
        try {
          // The important thing here is NOT to wait on the result of each
          // put/delete. This speeds up the operation by an order of magnitude or
          // two and is Dexie's secret sauce.
          // See: https://jsfiddle.net/birtles/vx4urLkw/17/
          for (const update of updates) if ("delete" === update.mode) void table.delete(this.getStoreId[series](update.record)); else void table.put(this.toStoreRecord[series](update.record));
          await tx.done;
        } catch (e) {
          console.error(`Error updating series ${series}`, e);
          // Ignore the abort from the transaction
                    tx.done.catch((() => {}));
          try {
            tx.abort();
          } catch (_) {
            // As above, ignore exceptions from aborting the transaction.
          }
          // We sometimes encounter a situation where Firefox throws an Error with
          // an undefined message. All we have to go by is a user's screenshot that
          // shows the following in the browser console:
          
          //   Error: undefined
          
          // We _think_ this happens in some cases where the disk space quota is
          // exceeded so we try to detect that case and throw an actual
          // QuotaExceededError instead.
                    if (isVeryGenericError(e) && await atOrNearQuota()) {
            console.info("Detected generic error masking a quota exceeded situation");
            throw new QuotaExceededError;
          }
          throw e;
        }
      }
      // Test API
      async _getKanji(kanji) {
        await this.open();
        const result = [];
        {
          const tx = this.db.transaction("kanji");
          for (const c of kanji) {
            const record = await tx.store.get(c);
            if (record) result.push(record);
          }
        }
        return result;
      }
    }
    // We occasionally get these obscure errors when running IndexedDB in an
    // extension context where the error returned serializes as simply:
    
    //   Error: undefined
    
    // Our current theory is that it occurs when we hit an out-of-quota situation.
        function isVeryGenericError(e) {
      if ("undefined" === typeof e) return true;
      // Look for an Error without a name or an object with name 'Error' but no
      // message
            return e instanceof Error && !(null === e || void 0 === e ? void 0 : e.name) || "Error" === (null === e || void 0 === e ? void 0 : e.name) && !(null === e || void 0 === e ? void 0 : e.message);
    }
    async function atOrNearQuota() {
      try {
        const estimate = await self.navigator.storage.estimate();
        return "undefined" !== typeof estimate.usage && "undefined" !== typeof estimate.quota && estimate.usage / estimate.quota > 0.9;
      } catch (_e) {
        return false;
      }
    }
    function reducer(state, action) {
      switch (action.type) {
       case "start":
        return {
          type: "checking",
          series: action.series,
          lastCheck: state.lastCheck
        };

       case "end":
        return {
          type: "idle",
          lastCheck: action.checkDate
        };

       case "error":
        return {
          type: "idle",
          lastCheck: action.checkDate || state.lastCheck
        };

       case "updatestart":
       case "updateend":
        // Nothing to do here since the 'start' and 'end' events take care of
        // initialization and returning to the 'idle' state.
        // (Furthermore, the 'start' event comes before the 'updatestart'
        // event--which only comes after we've fetched the version file and
        // confirmed there is something to update--so it's a more suitable queue
        // for transitioning to the 'checking' state.)
        return state;

       case "filestart":
        if ("idle" === state.type) {
          console.error("Should not get filestart event in the idle state");
          return state;
        }
        return {
          type: "updating",
          series: state.series,
          version: action.version,
          fileProgress: 0,
          totalProgress: "updating" === state.type ? state.totalProgress : 0,
          lastCheck: state.lastCheck
        };

       case "fileend":
        // Nothing to do here -- the 'progress' action will take care of updating
        // the progress and the 'end' action will take care returning to the
        // 'idle' state once all is complete.
        return state;

       case "progress":
        if ("updating" !== state.type) {
          console.error(`Should not get progress event in '${state.type}' state`);
          return state;
        }
        return {
          ...state,
          fileProgress: action.fileProgress,
          totalProgress: action.totalProgress
        };

       case "parseerror":
        // Nothing to do here
        return state;
      }
    }
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
    const WordDownloadRecordSchema = type({
      id: WordIdSchema,
      k: optional(nonempty(array(string()))),
      km: optional(nonempty(array(union([ literal(0), KanjiMetaSchema ])))),
      r: array(nonempty(nonempty(string()))),
      rm: optional(nonempty(array(union([ literal(0), ReadingMetaSchema ])))),
      s: array(WordSenseSchema)
    });
    function validateWordDownloadRecord(record) {
      return validate(record, WordDownloadRecordSchema);
    }
    const WordDownloadDeleteRecordSchema = type({
      id: WordIdSchema
    });
    function validateWordDownloadDeleteRecord(record) {
      return validate(record, WordDownloadDeleteRecordSchema);
    }
    // ----------------------------------------------------------------------------
    
    // Names
    
    // ----------------------------------------------------------------------------
        const NameTranslationSchema = type({
      type: optional(array(string())),
      det: array(nonempty(string())),
      cf: optional(array(nonempty(string())))
    });
    const NameIdSchema = min(safeInteger(), 1);
    const NameDownloadRecordSchema = type({
      id: NameIdSchema,
      k: optional(array(nonempty(string()))),
      r: nonempty(array(nonempty(string()))),
      tr: array(NameTranslationSchema)
    });
    function validateNameDownloadRecord(record) {
      return validate(record, NameDownloadRecordSchema);
    }
    const NameDownloadDeleteRecordSchema = type({
      id: NameIdSchema
    });
    function validateNameDownloadDeleteRecord(record) {
      return validate(record, NameDownloadDeleteRecordSchema);
    }
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
    const KanjiDownloadRecordSchema = type({
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
    function validateKanjiDownloadRecord(record) {
      return validate(record, KanjiDownloadRecordSchema);
    }
    const KanjiDownloadDeleteRecordSchema = type({
      c: KanjiIdSchema
    });
    function validateKanjiDownloadDeleteRecord(record) {
      return validate(record, KanjiDownloadDeleteRecordSchema);
    }
    // ----------------------------------------------------------------------------
    
    // Radicals
    
    // ----------------------------------------------------------------------------
        const RadicalIdSchema = nonempty(string());
    const RadicalDownloadRecordSchema = type({
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
    function validateRadicalDownloadRecord(record) {
      return validate(record, RadicalDownloadRecordSchema);
    }
    const RadicalDownloadDeleteRecordSchema = type({
      id: RadicalIdSchema
    });
    function validateRadicalDownloadDeleteRecord(record) {
      return validate(record, RadicalDownloadDeleteRecordSchema);
    }
    const validateDownloadRecordMapping = {
      words: validateWordDownloadRecord,
      names: validateNameDownloadRecord,
      kanji: validateKanjiDownloadRecord,
      radicals: validateRadicalDownloadRecord
    };
    function validateDownloadRecord({series, record}) {
      return validateDownloadRecordMapping[series](record);
    }
    const validateDownloadDeleteRecordMapping = {
      words: validateWordDownloadDeleteRecord,
      names: validateNameDownloadDeleteRecord,
      kanji: validateKanjiDownloadDeleteRecord,
      radicals: validateRadicalDownloadDeleteRecord
    };
    function validateDownloadDeleteRecord({series, record}) {
      return validateDownloadDeleteRecordMapping[series](record);
    }
    // The number of records to queue up before updating the store.
    
    // For IndexedDB, bigger batches are faster since we can just wait on the
    // transaction to complete rather than each individual put or delete and that
    // tends to be dramatically faster.
    
    // However, making the batches too big introduces janky progress because
    // typically the download speed is faster than the update speed so we try to
    // make sure the batches aren't _too_ big.
    
    // (In case that doesn't make sense, suppose we use a batch size of 10,000.
    // Often, downloading 10,000 records takes a fraction of a second while on many
    // systems putting 10,000 records into IndexedDB takes a second or two. If we
    // dispatch progress events based on the 'record' events we get from the
    // download and then do a big database update we'll get a series of quick
    // progress events and then a big pause while we update.
    
    // We could try to dispatch progress events while we're updating too--in fact,
    // we used to do just that--but it's simpler if we can just have one type of
    // progress event and dispatch it fairly consistently.)
        const BATCH_SIZE = 2000;
    // Don't update the progress until it has changed by at least 1%.
        const MAX_PROGRESS_RESOLUTION = 0.01;
    async function update({callback, currentVersion, lang, majorVersion, series, signal, store}) {
      return doUpdate({
        callback,
        currentVersion,
        lang,
        majorVersion,
        series,
        signal,
        store
      });
    }
    async function doUpdate({callback, currentVersion, lang, majorVersion, series, signal, store}) {
      // Clear the database if the current version is empty in case we have records
      // lying around from an incomplete initial download.
      if (!currentVersion) await store.clearSeries(series);
      let currentFile = 0;
      let currentFileVersion;
      let totalFiles = 0;
      let currentRecord = 0;
      let totalRecords = 0;
      let updates = [];
      let lastReportedTotalProgress;
      for await (const event of download({
        series,
        majorVersion,
        currentVersion,
        lang,
        signal
      })) {
        if (signal.aborted) throw new AbortError;
        switch (event.type) {
         case "reset":
          await store.clearSeries(series);
          break;

         case "downloadstart":
          totalFiles = event.files;
          callback({
            type: "updatestart"
          });
          break;

         case "downloadend":
          callback({
            type: "updateend"
          });
          break;

         case "filestart":
          currentFile++;
          currentRecord = 0;
          totalRecords = event.totalRecords;
          currentFileVersion = event.version;
          callback({
            type: "filestart",
            version: event.version
          });
          if (1 === currentFile) {
            callback({
              type: "progress",
              fileProgress: 0,
              totalProgress: 0
            });
            lastReportedTotalProgress = 0;
          }
          break;

         case "fileend":
          {
            // Save remaining batched items
            if (updates.length) {
              await store.updateSeries({
                series,
                updates
              });
              updates = [];
            }
            // Commit version info
            
            // If this is the last part in a multi-part series, however, don't
            // write the part info.
                        const versionToWrite = currentFileVersion;
            if (versionToWrite.partInfo && versionToWrite.partInfo.part === versionToWrite.partInfo.parts) delete versionToWrite.partInfo;
            await store.updateDataVersion({
              series,
              version: versionToWrite
            });
            // Final progress event
                        const totalProgress = currentFile / totalFiles;
            callback({
              type: "progress",
              fileProgress: 1,
              totalProgress
            });
            lastReportedTotalProgress = totalProgress;
            callback({
              type: "fileend",
              version: versionToWrite
            });
          }
          break;

         case "record":
          {
            const [error, update] = parseRecordEvent({
              series,
              event
            });
            if (error) callback({
              type: "parseerror",
              message: error.message,
              record: event.record
            }); else {
              updates.push(update);
              if (updates.length >= BATCH_SIZE) {
                await store.updateSeries({
                  series,
                  updates
                });
                updates = [];
              }
            }
            // We update the total number of records even if we failed to validate
            // the incoming record because the progress should continue even if
            // all the records are bad.
                        currentRecord++;
            // If we have processed enough records to pass the progress event
            // threshold, dispatch a progress event.
                        const fileProgress = currentRecord / totalRecords;
            const totalProgress = (currentFile - 1 + fileProgress) / totalFiles;
            if (
            // Don't dispatch a 100% file progress event until after we've
            // updated the version database (as part of processing the 'fileend'
            // event.)
            fileProgress < 1 && (void 0 === lastReportedTotalProgress || totalProgress - lastReportedTotalProgress > MAX_PROGRESS_RESOLUTION)) {
              callback({
                type: "progress",
                fileProgress,
                totalProgress
              });
              lastReportedTotalProgress = totalProgress;
            }
          }
          break;
        }
      }
    }
    function parseRecordEvent({series, event}) {
      const {mode, record: unvalidatedRecord} = event;
      if ("delete" === mode) {
        const [err, record] = validateDownloadDeleteRecord({
          series,
          record: unvalidatedRecord
        });
        return err ? [ err, void 0 ] : [ void 0, {
          mode,
          record
        } ];
      }
      const [err, record] = validateDownloadRecord({
        series,
        record: unvalidatedRecord
      });
      return err ? [ err, void 0 ] : [ void 0, {
        mode,
        record
      } ];
    }
    const MAJOR_VERSION = {
      kanji: 4,
      radicals: 4,
      names: 3,
      words: 2
    };
    class JpdictIdb {
      // -------------------------------------------------------------------------
      // Initialization
      // -------------------------------------------------------------------------
      constructor({verbose = false} = {}) {
        this.kanji = {
          state: "init",
          version: null,
          updateState: {
            type: "idle",
            lastCheck: null
          }
        };
        this.radicals = {
          state: "init",
          version: null,
          updateState: {
            type: "idle",
            lastCheck: null
          }
        };
        this.names = {
          state: "init",
          version: null,
          updateState: {
            type: "idle",
            lastCheck: null
          }
        };
        this.words = {
          state: "init",
          version: null,
          updateState: {
            type: "idle",
            lastCheck: null
          }
        };
        this.verbose = false;
        this.changeListeners = [];
        this.inProgressUpdates = {
          words: void 0,
          kanji: void 0,
          names: void 0
        };
        this.store = new JpdictStore;
        this.verbose = verbose;
        // Fetch initial state
                this.readyPromise = (async () => {
          try {
            for (const series of allDataSeries) {
              // (2022-04-20 w/ TS 4.6.3) The following cast is needed to convince
              // TS that `store` has been initialized.
              // See https://stackoverflow.com/questions/51675833/typescript-error-property-is-used-before-being-assigned
              const dataVersion = await this.store.getDataVersion(series);
              this.updateDataVersion(series, dataVersion);
            }
          } catch (e) {
            console.error("Failed to open IndexedDB");
            console.error(e);
            // Reset state and version information
                        for (const series of allDataSeries) this[series] = {
              ...this[series],
              state: "unavailable",
              version: null
            };
            throw e;
          } finally {
            this.notifyChanged("stateupdated");
          }
        })();
      }
      get ready() {
        return this.readyPromise;
      }
      // -------------------------------------------------------------------------
      // Destruction
      // -------------------------------------------------------------------------
      async destroy() {
        try {
          await this.ready;
        } catch {
          // Ignore, we're going to destroy anyway
        }
        const hasData = allDataSeries.some((key => "unavailable" !== this[key].state));
        if (hasData) await this.store.destroy();
        const hasInProgressUpdate = allMajorDataSeries.some((s => "undefined" !== typeof this.inProgressUpdates[s]));
        if (this.verbose && hasInProgressUpdate) console.info("Destroying database while there is an in-progress update");
        this.store = new JpdictStore;
        for (const series of allDataSeries) this[series] = {
          state: "empty",
          version: null,
          updateState: {
            type: "idle",
            lastCheck: null
          }
        };
        this.notifyChanged("deleted");
      }
      async deleteSeries(series) {
        if (this.inProgressUpdates[series]) this.cancelUpdate(series);
        await this.store.clearSeries(series);
        this.updateDataVersion(series, null);
        if ("kanji" === series) {
          await this.store.clearSeries("radicals");
          this.updateDataVersion("radicals", null);
        }
      }
      // -------------------------------------------------------------------------
      // Change listeners
      // -------------------------------------------------------------------------
      addChangeListener(callback) {
        if (-1 !== this.changeListeners.indexOf(callback)) return;
        this.changeListeners.push(callback);
      }
      removeChangeListener(callback) {
        const index = this.changeListeners.indexOf(callback);
        if (-1 === index) return;
        this.changeListeners.splice(index, 1);
      }
      notifyChanged(topic) {
        const changeListeners = this.changeListeners.slice();
        for (const callback of changeListeners) callback(topic);
      }
      // -------------------------------------------------------------------------
      // Updating
      // -------------------------------------------------------------------------
      async update({series, lang}) {
        // Check for an existing update
        const existingUpdate = this.inProgressUpdates[series];
        if (existingUpdate && existingUpdate.lang === lang) {
          if (this.verbose) console.info(`Detected overlapping update for '${series}' series. Re-using existing update.`);
          return existingUpdate.promise;
        }
        // Cancel the existing update since the language doesn't match
                if (existingUpdate) {
          if (this.verbose) console.info(`Cancelling existing update for '${series}' series since the requested language (${lang}) doesn't match that of the existing update(${existingUpdate.lang})`);
          this.cancelUpdate(series);
        }
        const controller = new AbortController;
        const signal = controller.signal;
        const updatePromise = (async () => {
          await this.ready;
          if (signal.aborted) throw new AbortError;
          switch (series) {
           case "words":
            await this.doUpdate({
              series: "words",
              signal,
              lang
            });
            break;

           case "kanji":
            await this.doUpdate({
              series: "kanji",
              signal,
              lang
            });
            if (signal.aborted) throw new AbortError;
            await this.doUpdate({
              series: "radicals",
              signal,
              lang
            });
            break;

           case "names":
            await this.doUpdate({
              series: "names",
              signal,
              lang
            });
            break;
          }
          if (signal.aborted) throw new AbortError;
        })();
        this.inProgressUpdates[series] = {
          lang,
          controller,
          promise: updatePromise.catch((() => {})).finally((() => {
            // Reset the in-progress update but only if the language wasn't
            // changed (since we don't want to clobber a new request).
            if (this.inProgressUpdates[series] && this.inProgressUpdates[series].lang === lang) this.inProgressUpdates[series] = void 0;
            this.notifyChanged("stateupdated");
          }))
        };
        return updatePromise;
      }
      async doUpdate({series, signal, lang: requestedLang}) {
        var _a;
        let wroteSomething = false;
        const reducer$1 = action => {
          this[series].updateState = reducer(this[series].updateState, action);
          if ("fileend" === action.type) {
            wroteSomething = true;
            this.updateDataVersion(series, action.version);
          }
          if ("parseerror" === action.type && this.verbose) console.warn("Encountered parse error", action.message, action.record);
          this.notifyChanged("stateupdated");
        };
        // Check if we have been canceled while waiting to become ready
                if (signal.aborted) {
          reducer$1({
            type: "error",
            checkDate: null
          });
          throw new AbortError;
        }
        const checkDate = new Date;
        try {
          reducer$1({
            type: "start",
            series
          });
          // Check if the requested language is available for this series, and
          // fallback to English if not.
                    const lang = "en" !== requestedLang && await hasLanguage({
            series,
            lang: requestedLang,
            majorVersion: MAJOR_VERSION[series],
            signal
          }) ? requestedLang : "en";
          // If the language we have stored (if any) differs from the language we
          // are about to update to, clobber the existing data for this series.
                    const currentLang = "ok" === this[series].state ? null === (_a = this[series].version) || void 0 === _a ? void 0 : _a.lang : void 0;
          if (currentLang && currentLang !== lang) {
            if (this.verbose) console.info(`Clobbering '${series}' data to change lang to '${lang}'`);
            await this.store.clearSeries(series);
            this.updateDataVersion(series, null);
          }
          if (signal.aborted) throw new AbortError;
          if (this.verbose) console.info(`Requesting download for '${series}' series with current version ${JSON.stringify(this[series].version || void 0)}`);
          await update({
            callback: reducer$1,
            currentVersion: this[series].version || void 0,
            lang,
            majorVersion: MAJOR_VERSION[series],
            signal,
            series,
            store: this.store
          });
          if (signal.aborted) throw new AbortError;
          reducer$1({
            type: "end",
            checkDate
          });
        } catch (e) {
          // We should only update the last-check date if we actually made some
          // sort of update.
          reducer$1({
            type: "error",
            checkDate: wroteSomething ? checkDate : null
          });
          throw e;
        }
      }
      updateDataVersion(series, version) {
        if ("init" !== this[series].state && "unavailable" !== this[series].state && (0, 
        dist /* jsonEqualish */ .kl)(this[series].version, version)) return;
        this[series].version = version;
        this[series].state = version ? "ok" : "empty";
        this.notifyChanged("stateupdated");
      }
      cancelUpdate(series) {
        const inProgressUpdate = this.inProgressUpdates[series];
        if (!inProgressUpdate) return false;
        inProgressUpdate.controller.abort();
        return true;
      }
      // -------------------------------------------------------------------------
      // Misc
      // -------------------------------------------------------------------------
      get isVerbose() {
        return this.verbose;
      }
    }
    class OfflineError extends Error {
      constructor(...params) {
        super(...params);
        Object.setPrototypeOf(this, OfflineError.prototype);
        if ("function" === typeof Error.captureStackTrace) Error.captureStackTrace(this, OfflineError);
        this.name = "OfflineError";
      }
    }
    const GLOSS_TYPE_MAX = 4 /* GlossType.Tm */;
    Math.floor(Math.log2(GLOSS_TYPE_MAX));
    // This assignment is pretty arbitrary however it's mostly used for sorting
    // entries where all we need to do is distinguish between the really common ones
    // and the obscure academic ones.
    // Entries with (P) are those ones that are marked with (P) in Edict.
    new Map([ [ "i1", 50 ], [ "i2", 20 ], [ "n1", 40 ], [ "n2", 20 ], [ "s1", 32 ], [ "s2", 20 ], [ "g1", 30 ], [ "g2", 15 ] ]);
    function toUpdateErrorState({error, nextRetry, retryCount}) {
      return {
        name: error.name,
        message: error.message,
        code: error instanceof DownloadError ? error.code : void 0,
        url: error instanceof DownloadError ? error.url : void 0,
        nextRetry,
        retryCount
      };
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
    function uuid() {
      return (1e7.toString() + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c => (Number(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16)));
    }
    const dbToUuid = new Map;
    function getUpdateKey(obj, series) {
      if (!dbToUuid.has(obj)) dbToUuid.set(obj, uuid());
      const baseId = dbToUuid.get(obj);
      return `${baseId}-${series}`;
    }
    // Updates the passed-in database and retries in the case of failure due to
    // network failures or being offline.
    
    // Note that if there is an existing call to this function in motion
    // (including waiting to retry) the existing call will be re-used.
    // As a result, if the passed-in callback functions differ between invocations,
    // only the originally passed-in callback functions will be called.
    
    // (This is fixable but it introduces complexity and currently all clients
    // have a single point where they call into this so it is not necessary to try
    // and store a list of callback functions.)
    
    // If the `updateNow` parameter is set then an existing call to this function
    // will be canceled first UNLESS it is already running or blocked due to being
    // offline. That is, the `updateNow` flag is meant to say, "Update now if you
    // are not already."
    
    // Furthermore, note that if an invocation is canceled there is no abort
    // callback or AbortError or anything of the sort. (Again, this is fixable but
    // it requires us to store the callbacks passed-in, and currently no client
    // needs this.)
        function updateWithRetry({db, lang, series, onUpdateComplete, onUpdateError, setTimeout = self.setTimeout, updateNow = false}) {
      startUpdate({
        db,
        lang,
        series,
        setTimeout,
        onUpdateComplete,
        onUpdateError,
        updateNow
      });
    }
    function runUpdate({db, lang, series, setTimeout, onUpdateComplete, onUpdateError}) {
      // If we are offline, wait until we are online.
      if (!navigator.onLine) {
        const onlineCallback = async () => {
          runUpdate({
            db,
            lang,
            series,
            setTimeout,
            onUpdateComplete,
            onUpdateError
          });
        };
        addEventListener("online", onlineCallback, {
          once: true
        });
        goOffline({
          db,
          series,
          lang,
          onlineCallback
        });
        null === onUpdateError || void 0 === onUpdateError ? void 0 : onUpdateError({
          error: new OfflineError
        });
        return;
      }
      // Transition to updating state.
            beginUpdating({
        db,
        series,
        lang
      });
      // Actually run the update and handle any errors
            void (async () => {
        try {
          await db.update({
            series,
            lang
          });
          resetUpdate({
            db,
            series
          });
          if (db.isVerbose) console.log("Successfully completed update.");
          null === onUpdateComplete || void 0 === onUpdateComplete ? void 0 : onUpdateComplete();
        } catch (e) {
          if (db.isVerbose) console.error("Got error while updating", e);
          let retryCount;
          let nextRetry;
          let suppressError = false;
          // Retry network errors at decreasing intervals
                    const isNetworkError = e instanceof DownloadError;
          if (isNetworkError) {
            const scheduleResult = maybeScheduleRetry({
              db,
              lang,
              series,
              setTimeout,
              onUpdateComplete,
              onUpdateError
            });
            if (scheduleResult) ({nextRetry, retryCount} = scheduleResult);
          } else if (e && e instanceof Error && "ConstraintError" === e.name) {
            const scheduleResult = maybeScheduleIdleRetry({
              db,
              lang,
              series,
              setTimeout,
              onUpdateComplete,
              onUpdateError
            });
            if (scheduleResult) ({retryCount} = scheduleResult);
            suppressError = !!scheduleResult;
          } else resetUpdate({
            db,
            series
          });
          if (!suppressError && onUpdateError) {
            const error = e instanceof Error ? e : new Error(String(e));
            onUpdateError({
              error,
              nextRetry,
              retryCount
            });
          }
        }
      })();
    }
    function onDatabaseChange({db, series, topic}) {
      // If the database was deleted, cancel any scheduled retries.
      if ("deleted" === topic) {
        resetUpdate({
          db,
          series
        });
        return;
      }
      // topic === 'stateupdated'
      
      // If we successfully downloaded *something*, reset the retry interval.
      
      // We should only do this when we have a retry interval set since we DON'T
      // want to reset the retry count if we are retrying due to a database error.
            const seriesHasProgress = series => "updating" === db[series].updateState.type && db[series].updateState.fileProgress > 0;
      const downloadedSomething = "kanji" === series ? seriesHasProgress("kanji") || seriesHasProgress("radicals") : seriesHasProgress(series);
      if (downloadedSomething) clearRetryInterval({
        db,
        series
      });
    }
    function cancelUpdateWithRetry({db, series}) {
      resetUpdate({
        db,
        series
      });
    }
    const inProgressUpdates = new Map;
    // ---------------------------------------------------------------------------
    
    // State transitions
    
    // ---------------------------------------------------------------------------
        function startUpdate({db, lang, series, setTimeout, onUpdateComplete, onUpdateError, updateNow}) {
      // Check if we have an in-progress update.
      const updateKey = getUpdateKey(db, series);
      let retryState = inProgressUpdates.get(updateKey);
      // If the languages differ, we should cancel the existing update.
            if (retryState && retryState.lang !== lang) {
        if (db.isVerbose) console.info("Canceling existing call to updateWithRetry because the requested language has changed.");
        resetUpdate({
          db,
          series
        });
      }
      // Re-fetch the retry status since we may have canceled it.
            retryState = inProgressUpdates.get(updateKey);
      if (retryState) {
        // If we are not trying to force an update then use the existing in-progress
        // update.
        if (!updateNow) {
          if (db.isVerbose) console.info("Overlapping calls to updateWithRetry. Re-using existing invocation. This could be problematic if different callback functions were passed on each invocation.");
          return;
        }
        // If we're offline, then we're not even going to try updating until we
        // are online (at which point we will retry immediately).
                if ("offline" === retryState.type) {
          if (db.isVerbose) console.info("Deferring forced update. Currently offline.");
          return;
        }
        // Even if we are trying to force the update, if we just started an update
        // (or are retrying rapidly) then use the existing update.
                if ("updating" === retryState.type) {
          if (db.isVerbose) console.info("Skipping forced update. Already updating presently.");
          return;
        }
        // Otherwise, cancel the in-progress update.
                if (db.isVerbose) console.log("Canceling existing queued retry.");
        resetUpdate({
          db,
          series
        });
      }
      // If we _still_ have an in-progress update here, it means we got an
      // overlapping call to this method while we were waiting to cancel the
      // previous in-progress update.
            retryState = inProgressUpdates.get(updateKey);
      if (retryState) {
        if (db.isVerbose) console.log("Skipping overlapping auto-retry request.");
        return;
      }
      runUpdate({
        db,
        lang,
        series,
        setTimeout,
        onUpdateComplete,
        onUpdateError
      });
    }
    function resetUpdate({db, series}) {
      const updateKey = getUpdateKey(db, series);
      const retryState = inProgressUpdates.get(updateKey);
      if (!retryState) return;
      switch (retryState.type) {
       case "offline":
        removeEventListener("online", retryState.onlineCallback);
        break;

       case "waiting-for-timeout":
        clearTimeout(retryState.setTimeoutHandle);
        break;

       case "waiting-for-idle":
        cancelIdleCallback(retryState.requestIdleCallbackHandle);
        break;
      }
      db.removeChangeListener(retryState.changeCallback);
      inProgressUpdates.delete(updateKey);
      db.cancelUpdate(series);
    }
    function goOffline({db, lang, onlineCallback, series}) {
      const updateKey = getUpdateKey(db, series);
      const retryState = inProgressUpdates.get(updateKey);
      if (retryState) resetUpdate({
        db,
        series
      });
      inProgressUpdates.set(updateKey, {
        type: "offline",
        lang,
        onlineCallback,
        changeCallback: getOrRegisterChangeCallback({
          db,
          series
        })
      });
    }
    function beginUpdating({db, lang, series}) {
      const updateKey = getUpdateKey(db, series);
      const retryState = inProgressUpdates.get(updateKey);
      inProgressUpdates.set(updateKey, {
        type: "updating",
        lang,
        changeCallback: getOrRegisterChangeCallback({
          db,
          series
        }),
        retryCount: getRetryCount(retryState),
        retryIntervalMs: getRetryIntervalMs(retryState)
      });
    }
    function maybeScheduleRetry({db, lang, series, setTimeout, onUpdateComplete, onUpdateError}) {
      const updateKey = getUpdateKey(db, series);
      const retryState = inProgressUpdates.get(updateKey);
      // If we are not updating to begin with, don't schedule a retry since it
      // probably means we were canceled.
            if ("updating" !== (null === retryState || void 0 === retryState ? void 0 : retryState.type)) return;
      let retryIntervalMs = retryState.retryIntervalMs;
      if (retryIntervalMs) 
      // Don't let the interval become longer than 12 hours
      retryIntervalMs = Math.min(2 * retryIntervalMs, 12 * 60 * 60 * 1000); else 
      // Randomize the initial interval to somewhere between 3s ~ 6s.
      retryIntervalMs = 3000 + 3000 * Math.random();
      let retryCount = retryState.retryCount;
      retryCount = "number" === typeof retryCount ? retryCount + 1 : 0;
      if (db.isVerbose) console.log(`Scheduling retry of update in ${retryIntervalMs}ms`);
      const setTimeoutHandle = setTimeout((() => {
        if (db.isVerbose) console.log("Running automatic retry of update...");
        runUpdate({
          db,
          lang,
          series,
          setTimeout,
          onUpdateComplete,
          onUpdateError
        });
      }), retryIntervalMs);
      const nextRetry = new Date(Date.now() + retryIntervalMs);
      inProgressUpdates.set(updateKey, {
        type: "waiting-for-timeout",
        lang,
        changeCallback: getOrRegisterChangeCallback({
          db,
          series
        }),
        retryCount,
        retryIntervalMs,
        setTimeoutHandle
      });
      return {
        nextRetry,
        retryCount
      };
    }
    function clearRetryInterval({db, series}) {
      const updateKey = getUpdateKey(db, series);
      const retryState = inProgressUpdates.get(updateKey);
      // The check here for `retryIntervalMs` being set ensures we don't clear the
      // interval when we call this as a result of an idle callback running.
            if ("updating" !== (null === retryState || void 0 === retryState ? void 0 : retryState.type) || !retryState.retryIntervalMs) return;
      inProgressUpdates.set(updateKey, {
        ...retryState,
        retryIntervalMs: void 0,
        retryCount: void 0
      });
    }
    function maybeScheduleIdleRetry({db, lang, series, setTimeout, onUpdateComplete, onUpdateError}) {
      const updateKey = getUpdateKey(db, series);
      const retryState = inProgressUpdates.get(updateKey);
      // If we are not updating to begin with, don't schedule a retry since it
      // probably means we were canceled.
            if ("updating" !== (null === retryState || void 0 === retryState ? void 0 : retryState.type)) return;
      // We only want to do this kind of rapid retry a few times (it's for database
      // errors).
            let retryCount = retryState.retryCount;
      if (retryCount && retryCount >= 2) return;
      retryCount = "number" === typeof retryCount ? retryCount + 1 : 0;
      if (db.isVerbose) console.log("Retrying update momentarily");
      const requestIdleCallbackHandle = requestIdleCallback((() => {
        if (db.isVerbose) console.log("Running automatic retry of update...");
        runUpdate({
          db,
          lang,
          series,
          setTimeout,
          onUpdateComplete,
          onUpdateError
        });
      }), {
        timeout: 2000
      });
      inProgressUpdates.set(updateKey, {
        type: "waiting-for-idle",
        lang,
        changeCallback: getOrRegisterChangeCallback({
          db,
          series
        }),
        requestIdleCallbackHandle,
        retryCount
      });
      return {
        retryCount
      };
    }
    // ----------------------------------------------------------------------------
    
    // State helpers
    
    // ----------------------------------------------------------------------------
        function getOrRegisterChangeCallback({db, series}) {
      const updateKey = getUpdateKey(db, series);
      const retryState = inProgressUpdates.get(updateKey);
      if (retryState) return retryState.changeCallback;
      const changeCallback = topic => onDatabaseChange({
        db,
        series,
        topic
      });
      db.addChangeListener(changeCallback);
      return changeCallback;
    }
    function getRetryCount(retryState) {
      return "offline" !== (null === retryState || void 0 === retryState ? void 0 : retryState.type) ? null === retryState || void 0 === retryState ? void 0 : retryState.retryCount : void 0;
    }
    function getRetryIntervalMs(retryState) {
      return "waiting-for-timeout" === (null === retryState || void 0 === retryState ? void 0 : retryState.type) || "updating" === (null === retryState || void 0 === retryState ? void 0 : retryState.type) ? null === retryState || void 0 === retryState ? void 0 : retryState.retryIntervalMs : void 0;
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
    function requestIdleCallbackPromise(options) {
      return new Promise((resolve => request_idle_callback_requestIdleCallback((() => {
        resolve();
      }), options)));
    }
    // CONCATENATED MODULE: ./src/utils/serialize-error.ts
    // Convert an error into a form that able to sent with postMessage and that
    // is also compatible with Bugsnag's NotifiableError type.
    function serializeError(error) {
      let name;
      // Occasionally we get an undefined error object. We saw this at least once
      // on Firefox 68. Note sure where it's coming from.
            if (!error) {
        // Generate a stack in the hope of getting some clue where this is coming
        // from.
        let stack;
        try {
          throw new Error("(Unknown error)");
        } catch (e) {
          stack = e.stack;
        }
        return {
          name: "(Unknown error)",
          message: stack || ""
        };
      }
      // We need to be careful not to read the 'code' field unless it's a string
      // because DOMExceptions, for example, have a code field that is a number
      // but what we really want from them is their 'name' field.
            if ("string" === typeof error.code) name = error.code; else name = error.name || error.message;
      // Also, if we get a generic "Error" with a more specific message field, we
      // should use that.
            if ("Error" === name && "string" === typeof error.message && error.message.length) name = error.message;
      // Common conversions to more specific/useful error classes.
            if (error instanceof TypeError && error.message.startsWith("NetworkError")) name = "NetworkError";
      if ("NetworkError" === name && !self.navigator.onLine) name = "OfflineError";
      // Set the message to the message field, unless we're already using that as
      // the name.
            let message = error.message || "";
      if (message === name) message = "";
      return {
        name,
        message
      };
    }
    const notifyDbStateUpdated = state => ({
      type: "dbstateupdated",
      state
    });
    const notifyDbUpdateComplete = lastCheck => ({
      type: "dbupdatecomplete",
      lastCheck
    });
    const leaveBreadcrumb = ({message}) => ({
      type: "breadcrumb",
      message
    });
    const notifyError = ({error, severity = "error"}) => ({
      type: "error",
      severity,
      ...serializeError(error),
      stack: error.stack
    });
    // CONCATENATED MODULE: ./src/worker/jpdict-worker.ts
    self.onmessage = async event => {
      // We seem to get random events here occasionally. Not sure where they come
      // from.
      if (!event.data) return;
      switch (event.data.type) {
       case "querystate":
        if (await dbIsInitialized) doDbStateNotification();
        break;

       case "update":
        try {
          await updateAllSeries({
            lang: event.data.lang,
            forceUpdate: event.data.force
          });
        } catch (error) {
          self.postMessage(notifyError({
            error
          }));
        }
        break;

       case "cancelupdate":
        cancelUpdate();
        break;

       case "delete":
        if (db) try {
          await db.destroy();
        } catch (error) {
          self.postMessage(notifyError({
            error
          }));
        }
        break;
      }
    };
    self.onerror = e => {
      self.postMessage(notifyError({
        error: e.error || e
      }));
    };
    let db;
    const dbIsInitialized = initDb().then((() => true)).catch((() => false));
    async function initDb() {
      let retryCount = 0;
      while (true) {
        if (db) try {
          await db.destroy();
        } catch {
          console.log("Failed to destroy previous database");
        }
        db = new JpdictIdb({
          verbose: true
        });
        db.addChangeListener(doDbStateNotification);
        try {
          await db.ready;
          return db;
        } catch (e) {
          if (retryCount >= 3) {
            console.log("Giving up opening database. Likely in permanent private browsing mode.");
            throw e;
          }
          retryCount++;
          console.log(`Failed to open database. Retrying shortly (attempt: ${retryCount})...`);
          await requestIdleCallbackPromise({
            timeout: 1000
          });
        }
      }
    }
    let currentUpdate;
    let lastUpdateError;
    async function updateAllSeries({lang, forceUpdate}) {
      if (!await dbIsInitialized) return;
      // Check for a current update
            let wasForcedUpdate = false;
      if (currentUpdate) {
        // If the language matches and we're not (newly) forcing an update, then
        // just let the current update run.
        if (currentUpdate.lang === lang && (currentUpdate.forceUpdate || !forceUpdate)) return;
        // Otherwise, cancel the current update but make sure to propagate the
        // forced flag if we were forced.
                wasForcedUpdate = currentUpdate.forceUpdate;
        cancelUpdate();
        currentUpdate = void 0;
      }
      const onUpdateError = series => params => {
        const {error, nextRetry, retryCount} = params;
        if (nextRetry) {
          const diffInMs = nextRetry.getTime() - Date.now();
          self.postMessage(leaveBreadcrumb({
            message: `Encountered ${error.name} error updating ${series} database. Retrying in ${diffInMs}ms.`
          }));
          // We don't want to report all download errors since the auto-retry
          // behavior will mean we get too many. Also, we don't care about
          // intermittent failures for users on flaky network connections.
          
          // However, if a lot of clients are failing multiple times to fetch
          // a particular resource, we want to know.
                    if (5 === retryCount) self.postMessage(notifyError({
            error,
            severity: "warning"
          }));
        } else if ("AbortError" !== error.name && "OfflineError" !== error.name) self.postMessage(notifyError({
          error
        })); else self.postMessage(leaveBreadcrumb({
          message: `Database update for ${series} database encountered ${error.name} error`
        }));
        lastUpdateError = toUpdateErrorState(params);
        doDbStateNotification();
      };
      const runNextUpdate = () => {
        // Check if we successfully updated a series
        if (currentUpdate) {
          lastUpdateError = void 0;
          self.postMessage(leaveBreadcrumb({
            message: `Successfully updated ${currentUpdate.series} database`
          }));
          doDbStateNotification();
        }
        // Cycle through data series
        
        // We use the following order:
        
        // 1. Kanji
        // 2. Names
        // 3. Words
        
        // Although the words dictionary is the most important one, we already have
        // the flat-file version available for words so, if we're going to run out
        // of disk space, it would be good to try and get as much of the other data
        // in first.
                if (!currentUpdate) currentUpdate = {
          lang,
          series: "kanji",
          forceUpdate: forceUpdate || wasForcedUpdate
        }; else if ("kanji" === currentUpdate.series) currentUpdate.series = "names"; else if ("names" === currentUpdate.series) currentUpdate.series = "words"; else {
          currentUpdate = void 0;
          self.postMessage(notifyDbUpdateComplete(getLatestCheckTime(db)));
          return;
        }
        if (forceUpdate || wasForcedUpdate) clearCachedVersionInfo();
        void updateWithRetry({
          db,
          series: currentUpdate.series,
          lang,
          onUpdateComplete: runNextUpdate,
          onUpdateError: onUpdateError(currentUpdate.series)
        });
      };
      runNextUpdate();
    }
    function cancelUpdate() {
      if (!currentUpdate) return;
      cancelUpdateWithRetry({
        db,
        series: currentUpdate.series
      });
      currentUpdate = void 0;
    }
    function doDbStateNotification() {
      // Wait until we have finished resolving the database versions before
      // reporting anything.
      if (!db || "init" === db.words.state || "init" === db.kanji.state || "init" === db.radicals.state || "init" === db.names.state) return;
      // Merge update states to show the current / latest update
            const lastCheck = getLatestCheckTime(db);
      const updateState = currentUpdate ? db[currentUpdate.series].updateState : {
        type: "idle",
        lastCheck
      };
      const state = {
        words: {
          state: db.words.state,
          version: db.words.version
        },
        kanji: {
          state: db.kanji.state,
          version: db.kanji.version
        },
        radicals: {
          state: db.radicals.state,
          version: db.radicals.version
        },
        names: {
          state: db.names.state,
          version: db.names.version
        },
        updateState,
        updateError: lastUpdateError
      };
      try {
        self.postMessage(notifyDbStateUpdated(state));
      } catch (e) {
        console.log("Error posting message");
        console.log(e);
      }
    }
    function getLatestCheckTime(db) {
      const latestCheckAsNumber = Math.max.apply(null, allMajorDataSeries.map((series => db[series].updateState.lastCheck)));
      return 0 !== latestCheckAsNumber ? new Date(latestCheckAsNumber) : null;
    }
  })();
  /******/})();