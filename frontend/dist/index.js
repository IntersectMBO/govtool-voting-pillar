'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React$1 = require('react');
var reactRouterDom = require('react-router-dom');
var reactQuery = require('react-query');
var axios = require('axios');
var dateFns = require('date-fns');
var reactHookForm = require('react-hook-form');
var material = require('@mui/material');
var Yup = require('yup');
var resolvers = require('@hookform/resolvers');
var emStyled = require('@emotion/styled');
var react$1 = require('@emotion/react');
var ReactDOM = require('react-dom');
var iconsMaterial = require('@mui/icons-material');
var Markdown = require('react-markdown');
var unidiff = require('unidiff');
var reactDiffView = require('react-diff-view');

function _interopNamespaceDefault(e) {
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React$1);
var Yup__namespace = /*#__PURE__*/_interopNamespaceDefault(Yup);
var ReactDOM__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM);

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=React$1,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = React$1;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	var didWarnAboutKeySpread = {};
	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum();

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    {
	      if (hasOwnProperty.call(props, 'key')) {
	        var componentName = getComponentNameFromType(type);
	        var keys = Object.keys(props).filter(function (k) {
	          return k !== 'key';
	        });
	        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

	        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
	          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

	          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

	          didWarnAboutKeySpread[componentName + beforeExample] = true;
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/internal-babel-macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage$1(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe if we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;
  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }
  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

var formatMuiErrorMessage = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: formatMuiErrorMessage$1
});

var THEME_ID = '$$material';

function _extends$1() {
  return _extends$1 = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends$1.apply(null, arguments);
}

function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min$1;

function requireReactIs_production_min$1 () {
	if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
	hasRequiredReactIs_production_min$1 = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
	reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
	reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
	reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
	return reactIs_production_min$1;
}

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development$1;

function requireReactIs_development$1 () {
	if (hasRequiredReactIs_development$1) return reactIs_development$1;
	hasRequiredReactIs_development$1 = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development$1.AsyncMode = AsyncMode;
	reactIs_development$1.ConcurrentMode = ConcurrentMode;
	reactIs_development$1.ContextConsumer = ContextConsumer;
	reactIs_development$1.ContextProvider = ContextProvider;
	reactIs_development$1.Element = Element;
	reactIs_development$1.ForwardRef = ForwardRef;
	reactIs_development$1.Fragment = Fragment;
	reactIs_development$1.Lazy = Lazy;
	reactIs_development$1.Memo = Memo;
	reactIs_development$1.Portal = Portal;
	reactIs_development$1.Profiler = Profiler;
	reactIs_development$1.StrictMode = StrictMode;
	reactIs_development$1.Suspense = Suspense;
	reactIs_development$1.isAsyncMode = isAsyncMode;
	reactIs_development$1.isConcurrentMode = isConcurrentMode;
	reactIs_development$1.isContextConsumer = isContextConsumer;
	reactIs_development$1.isContextProvider = isContextProvider;
	reactIs_development$1.isElement = isElement;
	reactIs_development$1.isForwardRef = isForwardRef;
	reactIs_development$1.isFragment = isFragment;
	reactIs_development$1.isLazy = isLazy;
	reactIs_development$1.isMemo = isMemo;
	reactIs_development$1.isPortal = isPortal;
	reactIs_development$1.isProfiler = isProfiler;
	reactIs_development$1.isStrictMode = isStrictMode;
	reactIs_development$1.isSuspense = isSuspense;
	reactIs_development$1.isValidElementType = isValidElementType;
	reactIs_development$1.typeOf = typeOf;
	  })();
	}
	return reactIs_development$1;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs$1.exports;
	hasRequiredReactIs = 1;

	if (process.env.NODE_ENV === 'production') {
	  reactIs$1.exports = requireReactIs_production_min$1();
	} else {
	  reactIs$1.exports = requireReactIs_development$1();
	}
	return reactIs$1.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = requireFactoryWithThrowingShims()();
}

var propTypesExports = propTypes.exports;
var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

var isDevelopment = false;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';
var LAYER = '@layer';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash$2 (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent), declarations);
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else
								switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children);
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length)
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';
	var length = sizeof(children);

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: element.value = element.props.join(',');
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch (hash$2(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function
  /*: EmotionCache */
createCache(options
/*: Options */
) {
  var key = options.key;

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node
    /*: HTMLStyleElement */
    ) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {};
  var container;
  /* : Node */

  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node
    /*: HTMLStyleElement */
    ) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;
  /*: (
  selector: string,
  serialized: SerializedStyles,
  sheet: StyleSheet,
  shouldCache: boolean
  ) => string | void */


  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function
      /*: void */
    insert(selector
    /*: string */
    , serialized
    /*: SerializedStyles */
    , sheet
    /*: StyleSheet */
    , shouldCache
    /*: boolean */
    ) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache
  /*: EmotionCache */
  = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

let cache;
if (typeof document === 'object') {
  cache = createCache({
    key: 'css',
    prepend: true
  });
}
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst && cache ? /*#__PURE__*/jsxRuntimeExports.jsx(react$1.CacheProvider, {
    value: cache,
    children: children
  }) : children;
}
process.env.NODE_ENV !== "production" ? StyledEngineProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: PropTypes.bool
} : void 0;

function isEmpty$1(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty$1(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/jsxRuntimeExports.jsx(react$1.Global, {
    styles: globalStyles
  });
}
process.env.NODE_ENV !== "production" ? GlobalStyles.propTypes = {
  defaultTheme: PropTypes.object,
  styles: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object, PropTypes.func])
} : void 0;

/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled$1(tag, options) {
  const stylesFactory = emStyled(tag, options);
  if (process.env.NODE_ENV !== 'production') {
    return (...styles) => {
      const component = typeof tag === 'string' ? `"${tag}"` : 'component';
      if (styles.length === 0) {
        console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
      } else if (styles.some(style => style === undefined)) {
        console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
      }
      return stylesFactory(...styles);
    };
  }
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const internal_processStyles = (tag, processor) => {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};

var styledEngine = /*#__PURE__*/Object.freeze({
	__proto__: null,
	GlobalStyles: GlobalStyles,
	StyledEngineProvider: StyledEngineProvider,
	ThemeContext: react$1.ThemeContext,
	css: react$1.css,
	default: styled$1,
	internal_processStyles: internal_processStyles,
	keyframes: react$1.keyframes
});

// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge$1(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends$1({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge$1(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

var deepmerge = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: deepmerge$1,
	isPlainObject: isPlainObject
});

const _excluded$h = ["values", "unit", "step"];
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends$1({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
      },
      unit = 'px',
      step = 5
    } = breakpoints,
    other = _objectWithoutPropertiesLoose(breakpoints, _excluded$h);
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return _extends$1({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

const shape = {
  borderRadius: 4
};

const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge$1(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}

// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize$1(string) {
  if (typeof string !== 'string') {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`capitalize(string)\` expects a string argument.` : formatMuiErrorMessage$1(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var capitalize = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: capitalize$1
});

function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize$1(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? {
    [prop]: responsivePropType
  } : {};
  fn.filterProps = [prop];
  return fn;
}

function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (typeof abs !== 'number') {
          console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${abs}.`);
        }
      }
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (process.env.NODE_ENV !== 'production') {
        if (!Number.isInteger(abs)) {
          console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
        } else if (abs > themeSpacing.length - 1) {
          console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
        }
      }
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (process.env.NODE_ENV !== 'production') {
    console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
  }
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === 'number') {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style(props, marginKeys);
}
margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
margin.filterProps = marginKeys;
function padding(props) {
  return style(props, paddingKeys);
}
padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};
padding.filterProps = paddingKeys;
process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
  obj[key] = responsivePropType;
  return obj;
}, {}) : {};

// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }

  // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://m2.material.io/design/layout/understanding-layout.html
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    if (process.env.NODE_ENV !== 'production') {
      if (!(argsInput.length <= 4)) {
        console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
      }
    }
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$1({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
  borderRadius: responsivePropType
} : {};
borderRadius.filterProps = ['borderRadius'];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = process.env.NODE_ENV !== 'production' ? {
  gap: responsivePropType
} : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  columnGap: responsivePropType
} : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
  rowGap: responsivePropType
} : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$1({
  prop: 'gridColumn'
});
const gridRow = style$1({
  prop: 'gridRow'
});
const gridAutoFlow = style$1({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$1({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$1({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$1({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$1({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$1({
  prop: 'gridTemplateAreas'
});
const gridArea = style$1({
  prop: 'gridArea'
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = style$1({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = style$1({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = style$1({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);

function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$1({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$1({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = style$1({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = style$1({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = style$1({
  prop: 'minHeight',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
style$1({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = style$1({
  prop: 'boxSizing'
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize$1(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx$1 = unstable_createStyleFunctionSx();
styleFunctionSx$1.filterProps = ['sx'];

/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 *
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={theme => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles$2(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars && typeof theme.getColorSchemeSelector === 'function') {
    // If CssVarsProvider is used as a provider,
    // returns '* :where([data-mui-color-scheme="light|dark"]) &'
    const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, '*:where($1)');
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

const _excluded$g = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$2(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded$g);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge$1({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends$1({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends$1({}, shape, shapeInput)
  }, other);
  muiTheme.applyStyles = applyStyles$2;
  muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

var createTheme$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: createTheme$2,
	private_createBreakpoints: createBreakpoints,
	unstable_applyStyles: applyStyles$2
});

function isObjectEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$4(defaultTheme = null) {
  const contextTheme = React__namespace.useContext(react$1.ThemeContext);
  return !contextTheme || isObjectEmpty$1(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme$1 = createTheme$2();
function useTheme$3(defaultTheme = systemDefaultTheme$1) {
  return useTheme$4(defaultTheme);
}

const _excluded$f = ["sx"];
const splitProps = props => {
  var _props$theme$unstable, _props$theme;
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
      sx: inSx
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends$1({}, systemProps, result);
    };
  } else {
    finalSx = _extends$1({}, systemProps, inSx);
  }
  return _extends$1({}, otherProps, {
    sx: finalSx
  });
}

var styleFunctionSx = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: styleFunctionSx$1,
	extendSxProp: extendSxProp,
	unstable_createStyleFunctionSx: unstable_createStyleFunctionSx,
	unstable_defaultSxConfig: defaultSxConfig
});

const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();

function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
}

function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}

var reactIs = {exports: {}};

var reactIs_production_min = {};

/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
	function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min.ContextConsumer=h;reactIs_production_min.ContextProvider=g;reactIs_production_min.Element=b;reactIs_production_min.ForwardRef=l;reactIs_production_min.Fragment=d;reactIs_production_min.Lazy=q;reactIs_production_min.Memo=p;reactIs_production_min.Portal=c;reactIs_production_min.Profiler=f;reactIs_production_min.StrictMode=e;reactIs_production_min.Suspense=m;
	reactIs_production_min.SuspenseList=n;reactIs_production_min.isAsyncMode=function(){return !1};reactIs_production_min.isConcurrentMode=function(){return !1};reactIs_production_min.isContextConsumer=function(a){return v(a)===h};reactIs_production_min.isContextProvider=function(a){return v(a)===g};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min.isForwardRef=function(a){return v(a)===l};reactIs_production_min.isFragment=function(a){return v(a)===d};reactIs_production_min.isLazy=function(a){return v(a)===q};reactIs_production_min.isMemo=function(a){return v(a)===p};
	reactIs_production_min.isPortal=function(a){return v(a)===c};reactIs_production_min.isProfiler=function(a){return v(a)===f};reactIs_production_min.isStrictMode=function(a){return v(a)===e};reactIs_production_min.isSuspense=function(a){return v(a)===m};reactIs_production_min.isSuspenseList=function(a){return v(a)===n};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};reactIs_production_min.typeOf=v;
	return reactIs_production_min;
}

var reactIs_development = {};

/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	          case REACT_SUSPENSE_LIST_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_SERVER_CONTEXT_TYPE:
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false;
	var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isConcurrentMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
	      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
	    }
	  }

	  return false;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}
	function isSuspenseList(object) {
	  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
	}

	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.SuspenseList = SuspenseList;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isSuspenseList = isSuspenseList;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = requireReactIs_production_min();
} else {
  reactIs.exports = requireReactIs_development();
}

var reactIsExports = reactIs.exports;

// Simplified polyfill for IE11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}
function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */
function getDisplayName$1(Component) {
  if (Component == null) {
    return undefined;
  }
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case reactIsExports.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');
      case reactIsExports.Memo:
        return getWrappedName(Component, Component.type, 'memo');
      default:
        return undefined;
    }
  }
  return undefined;
}

var getDisplayName = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: getDisplayName$1,
	getFunctionName: getFunctionName
});

/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
function resolveProps(defaultProps, props) {
  const output = _extends$1({}, props);
  Object.keys(defaultProps).forEach(propName => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends$1({}, defaultProps[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        // Reduce the iteration if the slot props is empty
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        // Reduce the iteration if the default slot props is empty
        output[propName] = slotProps;
      } else {
        output[propName] = _extends$1({}, slotProps);
        Object.keys(defaultSlotProps).forEach(slotPropName => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}

/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? React__namespace.useLayoutEffect : React__namespace.useEffect;

function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}

var clamp = /*#__PURE__*/Object.freeze({
	__proto__: null,
	default: clamp$1
});

function chainPropTypes(propType1, propType2) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }
  return function validate(...args) {
    return propType1(...args) || propType2(...args);
  };
}

function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  const {
    prototype = {}
  } = elementType;
  return Boolean(prototype.isReactComponent);
}
function acceptingRef(props, propName, componentName, location, propFullName) {
  const element = props[propName];
  const safePropName = propFullName || propName;
  if (element == null ||
  // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window === 'undefined') {
    return null;
  }
  let warningHint;
  const elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */
  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }
  if (warningHint !== undefined) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
  }
  return null;
}
const elementAcceptingRef = chainPropTypes(PropTypes.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(PropTypes.element.isRequired, acceptingRef);

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.

const specialProperty = 'exact-prop: \u200b';
function exactProp(propTypes) {
  if (process.env.NODE_ENV === 'production') {
    return propTypes;
  }
  return _extends$1({}, propTypes, {
    [specialProperty]: props => {
      const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));
      if (unsupportedProps.length > 0) {
        return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
      }
      return null;
    }
  });
}

function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  const propValue = props[propName];
  const safePropName = propFullName || propName;
  if (propValue == null) {
    return null;
  }
  if (propValue && propValue.nodeType !== 1) {
    return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
  }
  return null;
}

const refType = PropTypes.oneOfType([PropTypes.func, PropTypes.object]);

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce$1(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}

function deprecatedPropType(validator, reason) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }
  return (props, propName, componentName, location, propFullName) => {
    const componentNameSafe = componentName || '<<anonymous>>';
    const propFullNameSafe = propFullName || propName;
    if (typeof props[propName] !== 'undefined') {
      return new Error(`The ${location} \`${propFullNameSafe}\` of ` + `\`${componentNameSafe}\` is deprecated. ${reason}`);
    }
    return null;
  };
}

function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return /*#__PURE__*/React__namespace.isValidElement(element) && muiNames.indexOf( // For server components `muiName` is avaialble in element.type._payload.value.muiName
  // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
  // eslint-disable-next-line no-underscore-dangle
  (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName) !== -1;
}

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

function requirePropFactory(componentNameInError, Component) {
  if (process.env.NODE_ENV === 'production') {
    return () => null;
  }

  // eslint-disable-next-line react/forbid-foreign-prop-types
  const prevPropTypes = Component ? _extends$1({}, Component.propTypes) : null;
  const requireProp = requiredProp => (props, propName, componentName, location, propFullName, ...args) => {
    const propFullNameSafe = propFullName || propName;
    const defaultTypeChecker = prevPropTypes == null ? void 0 : prevPropTypes[propFullNameSafe];
    if (defaultTypeChecker) {
      const typeCheckerResult = defaultTypeChecker(props, propName, componentName, location, propFullName, ...args);
      if (typeCheckerResult) {
        return typeCheckerResult;
      }
    }
    if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
      return new Error(`The prop \`${propFullNameSafe}\` of ` + `\`${componentNameInError}\` can only be used together with the \`${requiredProp}\` prop.`);
    }
    return null;
  };
  return requireProp;
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = React__namespace.useState(idOverride);
  const id = idOverride || defaultId;
  React__namespace.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = React__namespace['useId'.toString()];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}

function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }
  const propFullNameSafe = propFullName || propName;
  if (typeof props[propName] !== 'undefined') {
    return new Error(`The prop \`${propFullNameSafe}\` is not supported. Please remove it.`);
  }
  return null;
}

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = React__namespace.useRef(controlled !== undefined);
  const [valueState, setValue] = React__namespace.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (process.env.NODE_ENV !== 'production') {
    React__namespace.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error([`MUI: A component is changing the ${isControlled ? '' : 'un'}controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`, 'Elements should not switch from uncontrolled to controlled (or vice versa).', `Decide between using a controlled or uncontrolled ${name} ` + 'element for the lifetime of the component.', "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", 'More info: https://fb.me/react-controlled-components'].join('\n'));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React__namespace.useRef(defaultProp);
    React__namespace.useEffect(() => {
      if (!isControlled && !Object.is(defaultValue, defaultProp)) {
        console.error([`MUI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` + `To suppress this warning opt to use a controlled ${name}.`].join('\n'));
      }
    }, [JSON.stringify(defaultProp)]);
  }
  const setValueIfUncontrolled = React__namespace.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = React__namespace.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React__namespace.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}

function useForkRef(...refs) {
  /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return React__namespace.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return instance => {
      refs.forEach(ref => {
        setRef(ref, instance);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}

const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = React__namespace.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  /* eslint-disable react-hooks/exhaustive-deps */
  React__namespace.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}

class Timeout {
  constructor() {
    this.currentId = null;
    this.clear = () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    };
    this.disposeEffect = () => {
      return this.clear;
    };
  }
  static create() {
    return new Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
const hadFocusVisibleRecentlyTimeout = new Timeout();
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};

/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */
function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;
  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}

/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}

/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(':focus-visible');
  } catch (error) {
    // Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  }

  // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = React__namespace.useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = React__namespace.useRef(false);

  /**
   * Should be called if a blur event is fired
   */
  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }

  /**
   * Should be called if a blur event is fired
   */
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  Object.keys(slots).forEach(
  // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        const utilityClass = getUtilityClass(key);
        if (utilityClass !== '') {
          acc.push(utilityClass);
        }
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
      }
      return acc;
    }, []).join(' ');
  });
  return output;
}

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends$1({}, otherProps, {
    ownerState: _extends$1({}, otherProps.ownerState, ownerState)
  });
}

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle = _extends$1({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = _extends$1({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers(_extends$1({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends$1({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends$1({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

const _excluded$e = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
      elementType,
      externalSlotProps,
      ownerState,
      skipResolvingSlotProps = false
    } = parameters,
    rest = _objectWithoutPropertiesLoose(parameters, _excluded$e);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends$1({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends$1({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

const ThemeContext = /*#__PURE__*/React__namespace.createContext(null);
if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

function useTheme$2() {
  const theme = React__namespace.useContext(ThemeContext);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useDebugValue(theme);
  }
  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);
    if (process.env.NODE_ENV !== 'production') {
      if (!mergedTheme) {
        console.error(['MUI: You should return an object from your theme function, i.e.', '<ThemeProvider theme={() => ({})} />'].join('\n'));
      }
    }
    return mergedTheme;
  }
  return _extends$1({}, outerTheme, localTheme);
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme$2();
  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const theme = React__namespace.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeContext.Provider, {
    value: theme,
    children: children
  });
}
process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$2.propTypes = exactProp(ThemeProvider$2.propTypes) : void 0;
}

const _excluded$d = ["value"];
const RtlContext = /*#__PURE__*/React__namespace.createContext();
function RtlProvider(_ref) {
  let {
      value
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$d);
  return /*#__PURE__*/jsxRuntimeExports.jsx(RtlContext.Provider, _extends$1({
    value: value != null ? value : true
  }, props));
}
process.env.NODE_ENV !== "production" ? RtlProvider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool
} : void 0;
const useRtl = () => {
  const value = React__namespace.useContext(RtlContext);
  return value != null ? value : false;
};

const PropsContext = /*#__PURE__*/React__namespace.createContext(undefined);
function DefaultPropsProvider({
  value,
  children
}) {
  return /*#__PURE__*/jsxRuntimeExports.jsx(PropsContext.Provider, {
    value: value,
    children: children
  });
}
process.env.NODE_ENV !== "production" ? DefaultPropsProvider.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object
} : void 0;
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  const config = theme.components[name];
  if (config.defaultProps) {
    // compatible with v5 signature
    return resolveProps(config.defaultProps, props);
  }
  if (!config.styleOverrides && !config.variants) {
    // v6 signature, no property 'defaultProps'
    return resolveProps(config, props);
  }
  return props;
}
function useDefaultProps$1({
  props,
  name
}) {
  const ctx = React__namespace.useContext(PropsContext);
  return getThemeProps({
    props,
    name,
    theme: {
      components: ctx
    }
  });
}

const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return React__namespace.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === 'function') {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? _extends$1({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      // must return a function for the private theme to NOT merge with the upper theme.
      // see the test case "use provided theme from a callback" in ThemeProvider.test.js
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? _extends$1({}, upperTheme, {
      [themeId]: localTheme
    }) : _extends$1({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 *
 * <ThemeProvider theme={theme}> // existing use case
 * <ThemeProvider theme={{ id: theme }}> // theme scoping
 */
function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useTheme$4(EMPTY_THEME);
  const upperPrivateTheme = useTheme$2() || EMPTY_THEME;
  if (process.env.NODE_ENV !== 'production') {
    if (upperTheme === null && typeof localTheme === 'function' || themeId && upperTheme && !upperTheme[themeId] && typeof localTheme === 'function') {
      console.error(['MUI: You are providing a theme function prop to the ThemeProvider component:', '<ThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n'));
    }
  }
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = engineTheme.direction === 'rtl';
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$2, {
    theme: privateTheme,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(react$1.ThemeContext.Provider, {
      value: engineTheme,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(RtlProvider, {
        value: rtlValue,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(DefaultPropsProvider, {
          value: engineTheme == null ? void 0 : engineTheme.components,
          children: children
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: PropTypes.string
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  process.env.NODE_ENV !== "production" ? ThemeProvider$1.propTypes = exactProp(ThemeProvider$1.propTypes) : void 0;
}

function createMixins(breakpoints, mixins) {
  return _extends$1({
    toolbar: {
      minHeight: 56,
      [breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48
        }
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}

var colorManipulator = {};

var interopRequireDefault = {exports: {}};

(function (module) {
	function _interopRequireDefault(e) {
	  return e && e.__esModule ? e : {
	    "default": e
	  };
	}
	module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports; 
} (interopRequireDefault));

var interopRequireDefaultExports = interopRequireDefault.exports;

var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(formatMuiErrorMessage);

var require$$2 = /*@__PURE__*/getAugmentedNamespace(clamp);

var _interopRequireDefault$6 = interopRequireDefaultExports;
Object.defineProperty(colorManipulator, "__esModule", {
  value: true
});
var alpha_1 = colorManipulator.alpha = alpha;
colorManipulator.blend = blend;
colorManipulator.colorChannel = void 0;
var darken_1 = colorManipulator.darken = darken;
colorManipulator.decomposeColor = decomposeColor;
colorManipulator.emphasize = emphasize;
var getContrastRatio_1 = colorManipulator.getContrastRatio = getContrastRatio;
colorManipulator.getLuminance = getLuminance;
colorManipulator.hexToRgb = hexToRgb;
colorManipulator.hslToRgb = hslToRgb;
var lighten_1 = colorManipulator.lighten = lighten;
colorManipulator.private_safeAlpha = private_safeAlpha;
colorManipulator.private_safeColorChannel = void 0;
colorManipulator.private_safeDarken = private_safeDarken;
colorManipulator.private_safeEmphasize = private_safeEmphasize;
colorManipulator.private_safeLighten = private_safeLighten;
colorManipulator.recomposeColor = recomposeColor;
colorManipulator.rgbToHex = rgbToHex;
var _formatMuiErrorMessage2 = _interopRequireDefault$6(require$$1$1);
var _clamp = _interopRequireDefault$6(require$$2);
/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
    }
  }
  return (0, _clamp.default)(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, _formatMuiErrorMessage2.default)(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, _formatMuiErrorMessage2.default)(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
};
colorManipulator.colorChannel = colorChannel;
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
colorManipulator.private_safeColorChannel = private_safeColorChannel;
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }
  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    if (warning && process.env.NODE_ENV !== 'production') {
      console.warn(warning);
    }
    return color;
  }
}

/**
 * Blend a transparent overlay color with a background color, resulting in a single
 * RGB color.
 * @param {string} background - CSS color
 * @param {string} overlay - CSS color
 * @param {number} opacity - Opacity multiplier in the range 0 - 1
 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
 */
function blend(background, overlay, opacity, gamma = 1.0) {
  const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  const backgroundColor = decomposeColor(background);
  const overlayColor = decomposeColor(overlay);
  const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
  return recomposeColor({
    type: 'rgb',
    values: rgb
  });
}

const common = {
  black: '#000',
  white: '#fff'
};

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};

const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};

const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};

const orange$1 = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};

const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};

const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};

const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};

const _excluded$c = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten_1(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken_1(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400]
    };
  }
  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800]
  };
}
function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400]
    };
  }
  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700]
  };
}
function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red[500],
      light: red[300],
      dark: red[700]
    };
  }
  return {
    main: red[700],
    light: red[400],
    dark: red[800]
  };
}
function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700]
    };
  }
  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900]
  };
}
function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green[400],
      light: green[300],
      dark: green[700]
    };
  }
  return {
    main: green[800],
    light: green[500],
    dark: green[900]
  };
}
function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }
  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(palette) {
  const {
      mode = 'light',
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette,
    other = _objectWithoutPropertiesLoose(palette, _excluded$c);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background) {
    const contrastText = getContrastRatio_1(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio_1(background, contrastText);
      if (contrast < 3) {
        console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
      }
    }
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = _extends$1({}, color);
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty('main')) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage$1(11, name ? ` (${name})` : '', mainShade));
    }
    if (typeof color.main !== 'string') {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : formatMuiErrorMessage$1(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  const modes = {
    dark,
    light
  };
  if (process.env.NODE_ENV !== 'production') {
    if (!modes[mode]) {
      console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
    }
  }
  const paletteOutput = deepmerge$1(_extends$1({
    // A collection of common colors.
    common: _extends$1({}, common),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

const _excluded$b = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round$2(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
    {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref,
    other = _objectWithoutPropertiesLoose(_ref, _excluded$b);
  if (process.env.NODE_ENV !== 'production') {
    if (typeof fontSize !== 'number') {
      console.error('MUI: `fontSize` is required to be a number.');
    }
    if (typeof htmlFontSize !== 'number') {
      console.error('MUI: `htmlFontSize` is required to be a number.');
    }
  }
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends$1({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round$2(letterSpacing / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  };
  return deepmerge$1(_extends$1({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep
  });
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

const _excluded$a = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;

  // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends$1({}, easing, inputTransitions.easing);
  const mergedDuration = _extends$1({}, duration, inputTransitions.duration);
  const create = (props = ['all'], options = {}) => {
    const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options,
      other = _objectWithoutPropertiesLoose(options, _excluded$a);
    if (process.env.NODE_ENV !== 'production') {
      const isString = value => typeof value === 'string';
      // IE11 support, replace with Number.isNaN
      // eslint-disable-next-line no-restricted-globals
      const isNumber = value => !isNaN(parseFloat(value));
      if (!isString(props) && !Array.isArray(props)) {
        console.error('MUI: Argument "props" must be a string or Array.');
      }
      if (!isNumber(durationOption) && !isString(durationOption)) {
        console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
      }
      if (!isString(easingOption)) {
        console.error('MUI: Argument "easing" must be a string.');
      }
      if (!isNumber(delay) && !isString(delay)) {
        console.error('MUI: Argument "delay" must be a number or a string.');
      }
      if (typeof options !== 'object') {
        console.error(['MUI: Secong argument of transition.create must be an object.', "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join('\n'));
      }
      if (Object.keys(other).length !== 0) {
        console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
      }
    }
    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };
  return _extends$1({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

const _excluded$9 = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options,
    other = _objectWithoutPropertiesLoose(options, _excluded$9);
  if (options.vars) {
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: \`vars\` is a private field used for CSS variables support.
Please use another name.` : formatMuiErrorMessage$1(18));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$2(options);
  let muiTheme = deepmerge$1(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends$1({}, zIndex)
  });
  muiTheme = deepmerge$1(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge$1(acc, argument), muiTheme);
  if (process.env.NODE_ENV !== 'production') {
    // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
    const stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
    const traverse = (node, component) => {
      let key;

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (key in node) {
        const child = node[key];
        if (stateClasses.indexOf(key) !== -1 && Object.keys(child).length > 0) {
          if (process.env.NODE_ENV !== 'production') {
            const stateClass = generateUtilityClass('', key);
            console.error([`MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
              root: {
                [`&.${stateClass}`]: child
              }
            }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
          }
          // Remove the style to prevent global conflicts.
          node[key] = {};
        }
      }
    };
    Object.keys(muiTheme.components).forEach(component => {
      const styleOverrides = muiTheme.components[component].styleOverrides;
      if (styleOverrides && component.indexOf('Mui') === 0) {
        traverse(styleOverrides, component);
      }
    });
  }
  muiTheme.unstable_sxConfig = _extends$1({}, defaultSxConfig, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx$1({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}

const defaultTheme = createTheme();

function useTheme$1() {
  const theme = useTheme$3(defaultTheme);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useDebugValue(theme);
  }
  return theme[THEME_ID] || theme;
}

var createStyled$1 = {};

var _extends = {exports: {}};

var hasRequired_extends;

function require_extends () {
	if (hasRequired_extends) return _extends.exports;
	hasRequired_extends = 1;
	(function (module) {
		function _extends() {
		  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
		    for (var e = 1; e < arguments.length; e++) {
		      var t = arguments[e];
		      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		    }
		    return n;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
		}
		module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (_extends));
	return _extends.exports;
}

var objectWithoutPropertiesLoose = {exports: {}};

var hasRequiredObjectWithoutPropertiesLoose;

function requireObjectWithoutPropertiesLoose () {
	if (hasRequiredObjectWithoutPropertiesLoose) return objectWithoutPropertiesLoose.exports;
	hasRequiredObjectWithoutPropertiesLoose = 1;
	(function (module) {
		function _objectWithoutPropertiesLoose(r, e) {
		  if (null == r) return {};
		  var t = {};
		  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		    if (e.includes(n)) continue;
		    t[n] = r[n];
		  }
		  return t;
		}
		module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports; 
	} (objectWithoutPropertiesLoose));
	return objectWithoutPropertiesLoose.exports;
}

var require$$1 = /*@__PURE__*/getAugmentedNamespace(styledEngine);

var require$$4 = /*@__PURE__*/getAugmentedNamespace(deepmerge);

var require$$5 = /*@__PURE__*/getAugmentedNamespace(capitalize);

var require$$6 = /*@__PURE__*/getAugmentedNamespace(getDisplayName);

var require$$7 = /*@__PURE__*/getAugmentedNamespace(createTheme$1);

var require$$8 = /*@__PURE__*/getAugmentedNamespace(styleFunctionSx);

var _interopRequireDefault$5 = interopRequireDefaultExports;
Object.defineProperty(createStyled$1, "__esModule", {
  value: true
});
var _default = createStyled$1.default = createStyled;
createStyled$1.shouldForwardProp = shouldForwardProp;
createStyled$1.systemDefaultTheme = void 0;
var _extends2 = _interopRequireDefault$5(require_extends());
var _objectWithoutPropertiesLoose2 = _interopRequireDefault$5(requireObjectWithoutPropertiesLoose());
var _styledEngine$1 = _interopRequireWildcard$1(require$$1);
var _deepmerge = require$$4;
var _capitalize = _interopRequireDefault$5(require$$5);
var _getDisplayName = _interopRequireDefault$5(require$$6);
var _createTheme = _interopRequireDefault$5(require$$7);
var _styleFunctionSx = _interopRequireDefault$5(require$$8);
const _excluded$8 = ["ownerState"],
  _excluded2$1 = ["variants"],
  _excluded3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
/* eslint-disable no-underscore-dangle */
function _getRequireWildcardCache$1(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache$1 = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard$1(e, r) { if (e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache$1(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = createStyled$1.systemDefaultTheme = (0, _createTheme.default)();
const lowercaseFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme,
  theme,
  themeId
}) {
  return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function processStyleArg(callableStyle, _ref) {
  let {
      ownerState
    } = _ref,
    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded$8);
  const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle((0, _extends2.default)({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, (0, _extends2.default)({
      ownerState
    }, props)));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
    const {
        variants = []
      } = resolvedStylesArg,
      otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2$1);
    let result = otherStyles;
    variants.forEach(variant => {
      let isMatch = true;
      if (typeof variant.props === 'function') {
        isMatch = variant.props((0, _extends2.default)({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach(key => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        result.push(typeof variant.style === 'function' ? variant.style((0, _extends2.default)({
          ownerState
        }, props, ownerState)) : variant.style);
      }
    });
    return result;
  }
  return resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = props => {
    return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
      theme: resolveTheme((0, _extends2.default)({}, props, {
        defaultTheme,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
    (0, _styledEngine$1.internal_processStyles)(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
    const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions,
      options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3);

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let label;
    if (process.env.NODE_ENV !== 'production') {
      if (componentName) {
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
      }
    }
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = (0, _styledEngine$1.default)(tag, (0, _extends2.default)({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = stylesArg => {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
        return props => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
          theme: resolveTheme({
            theme: props.theme,
            defaultTheme,
            themeId
          })
        }));
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
              theme
            }));
          });
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          var _theme$components;
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, (0, _extends2.default)({}, props, {
            theme
          }));
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill('');
        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (process.env.NODE_ENV !== 'production') {
        let displayName;
        if (componentName) {
          displayName = `${componentName}${(0, _capitalize.default)(componentSlot || '')}`;
        }
        if (displayName === undefined) {
          displayName = `Styled(${(0, _getDisplayName.default)(tag)})`;
        }
        Component.displayName = displayName;
      }
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}

// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}

const rootShouldForwardProp = prop => slotShouldForwardProp(prop) && prop !== 'classes';

const styled = _default({
  themeId: THEME_ID,
  defaultTheme,
  rootShouldForwardProp
});

const _excluded$7 = ["theme"];
function ThemeProvider(_ref) {
  let {
      theme: themeInput
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, _excluded$7);
  const scopedTheme = themeInput[THEME_ID];
  return /*#__PURE__*/jsxRuntimeExports.jsx(ThemeProvider$1, _extends$1({}, props, {
    themeId: scopedTheme ? THEME_ID : undefined,
    theme: scopedTheme || themeInput
  }));
}
process.env.NODE_ENV !== "production" ? ThemeProvider.propTypes = {
  /**
   * Your component tree.
   */
  children: PropTypes.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
} : void 0;

const primaryBlue = {
  c50: '#E6EBF7',
  c100: '#D6E2FF',
  c200: '#99ADDE',
  c300: '#6685CE',
  c400: '#335CBD',
  c500: '#0033AD',
  c600: '#002682',
  c700: '#001A57',
  c800: '#000D2B',
  c900: '#000511'
};
const orange = {
  c50: '#FFF0E7',
  c100: '#FFE0CE',
  c200: '#FFC19D',
  c300: '#FFA26C',
  c400: '#FF833B',
  c500: '#FF640A',
  c600: '#BF4B08',
  c700: '#803205',
  c800: '#401903',
  c900: '#1A0A01'
};
const cyan = {
  c50: '#E9F5F8',
  c100: '#D2EAF0',
  c200: '#A4D4E0',
  c300: '#77BFD1',
  c400: '#49A9C1',
  c500: '#1C94B2',
  c600: '#156F86',
  c700: '#0E4A59',
  c800: '#07252D',
  c900: '#030F12'
};
const successGreen = {
  c50: '#F0F9EE',
  c100: '#E0F2DC',
  c200: '#C0E4BA',
  c300: '#A1D797',
  c400: '#81C975',
  c500: '#62BC52',
  c600: '#4A8D3E',
  c700: '#315E29',
  c800: '#192F15',
  c900: '#0A1308'
};
const progressYellow = {
  c50: '#FCF6EA',
  c100: '#F8ECD4',
  c200: '#F2D9A9',
  c300: '#EBC67F',
  c400: '#E5B354',
  c500: '#DEA029',
  c600: '#A7781F',
  c700: '#6F5015',
  c800: '#38280A',
  c900: '#161004'
};
const errorRed = {
  c50: '#FBEBEB',
  c100: '#F6D5D5',
  c200: '#EDACAC',
  c300: '#E58282',
  c400: '#DC5959',
  c500: '#D32F2F',
  c600: '#9E2323',
  c700: '#6A1818',
  c800: '#350C0C',
  c900: '#150505'
};

const GOVERNANCE_ACTIONS_FILTERS = [{
  key: 'NoConfidence',
  title: 'No Confidence',
  label: 'No Confidence'
}, {
  key: 'NewCommittee',
  title: 'New Comittee',
  label: 'New Comittee'
}, {
  key: 'NewConstitution',
  title: 'Update to the Constitution',
  label: 'Update to the Constitution'
}, {
  key: 'HardForkInitiation',
  title: 'Hard Fork',
  label: 'Hard Fork'
}, {
  key: 'ParameterChange',
  title: 'Protocol Parameter Change',
  label: 'Protocol Parameter Change'
}, {
  key: 'TreasuryWithdrawals',
  title: 'Treasury Withdrawals',
  label: 'Treasury Withdrawal'
}, {
  key: 'InfoAction',
  title: 'Info Action',
  label: 'Info Action'
}];

const ICONS = {
  arrowRightIcon: '/icons/ArrowRight.svg',
  closeIcon: '/icons/Close.svg',
  copyBlueIcon: '/icons/CopyBlue.svg',
  copyBlueThinIcon: '/icons/CopyBlueThin.svg',
  copyIcon: '/icons/Copy.svg',
  copyWhiteIcon: '/icons/CopyWhite.svg',
  download: '/icons/Download.svg',
  externalLinkIcon: '/icons/ExternalLink.svg',
  filterIcon: '/icons/Filter.svg',
  filterWhiteIcon: '/icons/FilterWhite.svg',
  link: '/icons/Link.svg',
  loaderIcon: '/icons/Loader.svg',
  share: '/icons/Share.svg',
  sortIcon: '/icons/Sort.svg',
  sortWhiteIcon: '/icons/SortWhite.svg',
  timerIcon: '/icons/Timer.svg'
};

const PATHS = {
  governanceActions: '/governance_actions',
  governanceActionsAction: '/governance_actions/:proposalId',
  governanceActionsCategory: '/governance_actions/category/:category'
};

const GOVERNANCE_ACTIONS_SORTING = [{
  key: 'SoonestToExpire',
  label: 'Soon to expire'
}, {
  key: 'NewestCreated',
  label: 'Newest first'
}, {
  key: 'MostYesVotes',
  label: "Highest amount of 'Yes' votes"
}];

const IMAGES = {
  govActionListImage: '/imwages/GovActionList.png',
  successImage: '/images/Success.png',
  warningImage: '/images/Warning.png',
  warningYellowImage: '/images/WarningYellow.png'
};

const QUERY_KEYS = {
  useGetVoteContextFromFile: 'useGetVoteContextFromFile',
  useGetProposalsInfiniteKey: 'useGetProposalsInfiniteKey',
  useGetProposalsKey: 'useGetProposalsKey',
  useGetProposalKey: 'useGetProposalKey',
  useGetDRepVotesKey: 'useGetDRepVotesKey',
  useGetDRepInfoKey: 'useGetDRepInfoKey'
};

const URL_REGEX = /^(?:(?:https?:\/\/)?(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?:\/[^\s]*)?)|(?:ipfs:\/\/[a-f0-9]+(?:\/[a-zA-Z0-9_]+)*)$|^$/;

const voltaire = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 375,
      sm: 425,
      md: 768,
      lg: 1024,
      xl: 1440
    }
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: `12px !important`
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          bgcolor: 'white',
          borderColor: '#6F99FF',
          border: 1,
          borderRadius: 50,
          padding: '8px 16px',
          width: '100%'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none'
        },
        outlined: props => ({
          borderColor: props.theme.palette.lightBlue
        })
      }
    },
    MuiChip: {
      variants: [{
        props: {
          color: 'default',
          variant: 'filled'
        },
        style: {
          backgroundColor: primaryBlue.c50
        }
      }, {
        props: {
          color: 'success',
          variant: 'filled'
        },
        style: {
          backgroundColor: successGreen.c200,
          color: successGreen.c700
        }
      }, {
        props: {
          color: 'error',
          variant: 'filled'
        },
        style: {
          backgroundColor: errorRed.c100,
          color: errorRed.c500
        }
      }, {
        props: {
          color: 'warning',
          variant: 'filled'
        },
        style: {
          backgroundColor: progressYellow.c200,
          color: orange.c700
        }
      }, {
        props: {
          color: 'info',
          variant: 'filled'
        },
        style: {
          backgroundColor: cyan.c100,
          color: cyan.c500
        }
      }],
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 500,
          height: 28
        },
        filledPrimary: {
          backgroundColor: primaryBlue.c100,
          color: primaryBlue.c500
        },
        filledSecondary: {
          backgroundColor: orange.c100,
          color: orange.c600
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12
        }
      }
    },
    MuiPopover: {
      defaultProps: {
        elevation: 2
      }
    }
  },
  typography: {
    fontFamily: 'Poppins, Arial',
    allVariants: {
      color: '#242232'
    }
  },
  palette: {
    accentOrange: '#F29339',
    accentYellow: '#F2D9A9',
    arcticWhite: '#FBFBFF',
    boxShadow1: 'rgba(0, 18, 61, 0.37)',
    boxShadow2: 'rgba(47, 98, 220, 0.2)',
    errorRed: '#9E2323',
    fadedPurple: '#716E88',
    highlightBlue: '#C2EFF299',
    inputRed: '#FAEAEB',
    lightBlue: '#D6E2FF',
    lightOrange: '#FFCBAD',
    negativeRed: '#E58282',
    neutralGray: '#8E908E',
    neutralWhite: '#FFFFFF',
    orangeDark: '#803205',
    positiveGreen: '#5CC165',
    primary: {
      main: '#0033AD'
    },
    primaryBlue: '#0033AD',
    secondary: {
      main: 'rgb(255, 100, 10)'
    },
    secondaryBlue: '#6F99FF',
    specialCyan: '#1C94B2',
    specialCyanBorder: '#77BFD1',
    textBlack: '#242232',
    textGray: '#525252'
  }
});
voltaire.shadows[1] = '0px 1px 2px 0px rgba(0, 51, 173, 0.08), 0px 1px 6px 1px rgba(0, 51, 173, 0.15)';
voltaire.shadows[2] = '0px 1px 2px 0px rgba(0, 51, 173, 0.08), 0px 2px 10px 2px rgba(0, 51, 173, 0.15)';
voltaire.shadows[3] = '0px 1px 3px 0px rgba(0, 51, 173, 0.08), 0px 4px 12px 3px rgba(0, 51, 173, 0.15)';
voltaire.shadows[4] = '0px 2px 3px 0px rgba(0, 51, 173, 0.08), 0px 6px 14px 4px rgba(0, 51, 173, 0.15)';
voltaire.shadows[5] = '0px 4px 4px 0px rgba(0, 51, 173, 0.08), 0px 8px 20px 6px rgba(0, 51, 173, 0.15)';

const LOVELACE = 1000000;
const DECIMALS = 6;
const correctAdaFormat = lovelace => {
  if (lovelace) {
    return Number.parseFloat((lovelace / LOVELACE).toFixed(DECIMALS));
  }
  return 0;
};

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

/**
 * Downloads a JSON object as a file.
 * @param json - The JSON object to be downloaded.
 * @param fileName - The name of the file to be downloaded.
 * If not provided, the default name will be "data.jsonld".
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const downloadJson = (json, fileName) => {
  const blob = new Blob([JSON.stringify(json, null, 2)], {
    type: 'application/json'
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.jsonld`;
  // Fallback: If iOS/Safari doesn't support `download`, open the data in a new tab
  if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
    window.open(url, '_blank');
  } else {
    link.click();
  }
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Filters out null parameters from the original object and returns a new object.
 *
 * @param originalObject - The original object to filter.
 * @param filterOutKeys - An optional array of keys to exclude from the filtering process.
 * @returns The filtered object without null parameters.
 */
const filterOutNullParams = (originalObject, filterOutKeys) => {
  if (!originalObject) {
    return null;
  }
  const finalObject = Object.entries(originalObject).reduce((acc, [key, value]) => {
    if (value !== null && value !== undefined && !filterOutKeys?.includes(key)) {
      acc[key] = value;
    }
    return acc;
  }, {});
  return finalObject;
};

/**
 * Filters the updatable protocol parameters based on the original object,
 * reference object, and optional filter-out keys.
 *
 * @param originalObject - The original object containing the protocol parameters.
 * @param referenceObject - The reference object containing the updated protocol parameters.
 * @param filterOutKeys - An optional array of keys to be excluded from the final object.
 * @returns The filtered object containing the updatable protocol parameters or null.
 */
const filterUpdatableProtocolParams = (originalObject, referenceObject, filterOutKeys) => {
  if (!originalObject || !referenceObject) {
    return null;
  }
  const finalObject = Object.entries(referenceObject).reduce((acc, [key, referenceValue]) => {
    const isValid = !filterOutKeys?.includes(key) && originalObject.hasOwnProperty(key) && referenceValue !== undefined && referenceValue !== null;
    if (isValid) acc[key] = originalObject[key];
    return acc;
  }, {});
  return finalObject;
};

const formatDisplayDate = (date, outputFormat = 'do MMM yyyy') => dateFns.format(new Date(date), outputFormat).toString();

const getShortenedGovActionId = (txHash, index) => {
  if (txHash.length <= 6) {
    return `${txHash}#${index}`;
  }
  const firstPart = txHash.slice(0, 4);
  const lastPart = txHash.slice(-4);
  return `${firstPart}...${lastPart}#${index}`;
};
const getFullGovActionId = (txHash, index) => `${txHash}#${index}`;

var MetadataValidationStatus;
(function (MetadataValidationStatus) {
  MetadataValidationStatus["URL_NOT_FOUND"] = "URL_NOT_FOUND";
  MetadataValidationStatus["INVALID_JSONLD"] = "INVALID_JSONLD";
  MetadataValidationStatus["INVALID_HASH"] = "INVALID_HASH";
  MetadataValidationStatus["INCORRECT_FORMAT"] = "INCORRECT_FORMAT";
})(MetadataValidationStatus || (MetadataValidationStatus = {}));

var GovernanceActionType;
(function (GovernanceActionType) {
  GovernanceActionType["ParameterChange"] = "ParameterChange";
  GovernanceActionType["HardForkInitiation"] = "HardForkInitiation";
  GovernanceActionType["TreasuryWithdrawals"] = "TreasuryWithdrawals";
  GovernanceActionType["NoConfidence"] = "NoConfidence";
  GovernanceActionType["NewCommittee"] = "NewCommittee";
  GovernanceActionType["NewConstitution"] = "NewConstitution";
  GovernanceActionType["InfoAction"] = "InfoAction";
})(GovernanceActionType || (GovernanceActionType = {}));

/**
 * Retrieves the label for the given metadata validation status.
 *
 * @param status - The metadata validation status.
 * @returns The string corresponding to the status.
 */
const getMetadataDataMissingStatusTranslation = status => {
  const errorLabel = {
    [MetadataValidationStatus.URL_NOT_FOUND]: 'Data Missing',
    [MetadataValidationStatus.INVALID_JSONLD]: 'Data Formatted Incorrectly',
    [MetadataValidationStatus.INCORRECT_FORMAT]: 'Data Formatted Incorrectly',
    [MetadataValidationStatus.INVALID_HASH]: 'Data Not Verifiable'
  }[status];
  return errorLabel || 'Data missing';
};

const getProposalTypeTitle = type => {
  const title = GOVERNANCE_ACTIONS_FILTERS.find(i => i.key === type)?.title;
  return title || type;
};
const getProposalTypeLabel = type => {
  const label = GOVERNANCE_ACTIONS_FILTERS.find(i => i.key === type)?.label;
  return label || type;
};
const getProposalTypeNoEmptySpaces = type => getProposalTypeLabel(type).replace(/ /g, '');

const mapDtoToProposal = async (validationApiUrl, dto) => {
  if (dto.url && dto.metadataHash) {
    const validationResponse = await postValidate(validationApiUrl, {
      url: dto.url,
      hash: dto.metadataHash
    });
    return {
      ...dto,
      title: validationResponse.metadata?.title,
      abstract: validationResponse.metadata?.abstract,
      motivation: validationResponse.metadata?.motivation,
      rationale: validationResponse.metadata?.rationale,
      references: validationResponse.metadata?.references?.map(({
        uri
      }) => uri),
      metadataStatus: validationResponse.status || null,
      metadataValid: validationResponse.valid
    };
  }
  return {
    ...dto,
    metadataStatus: null,
    metadataValid: true
  };
};

const openInNewTab = url => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const removeDuplicatedProposals = proposals => {
  if (!proposals) return [];
  const uniqueGovActionIds = new Set();
  return proposals.filter(item => {
    const govActionId = item.txHash + item.index;
    if (!uniqueGovActionIds.has(govActionId)) {
      uniqueGovActionIds.add(govActionId);
      return true;
    }
    return false;
  });
};

const testIdFromLabel = label => label.trim().replace(/ /g, '-').toLocaleLowerCase();

const getDRepVotes = async (apiUrl, validationApiUrl, {
  dRepID,
  params
}) => {
  const {
    data
  } = await axios.get(`${apiUrl}/drep/getVotes/${dRepID}`, {
    params
  });
  const validatedData = await Promise.all(data.map(async votedProposal => ({
    ...votedProposal,
    proposal: await mapDtoToProposal(validationApiUrl, votedProposal.proposal)
  })));
  return validatedData;
};

const getProposal = async (apiUrl, validationApiUrl, proposalId, drepId) => {
  const encodedHash = encodeURIComponent(proposalId);
  const {
    data
  } = await axios.get(`${apiUrl}/proposal/get/${encodedHash}?drepId=${drepId}`);
  return {
    ...data,
    proposal: await mapDtoToProposal(validationApiUrl, data.proposal)
  };
};

const getProposals = async (apiUrl, validationApiUrl, {
  dRepID = '',
  filters = [],
  page = 0,
  // It allows fetch proposals and if we have 7 items, display 6 cards and "view all" button
  pageSize = 7,
  searchPhrase = '',
  sorting = ''
}) => {
  if (!apiUrl) {
    throw new Error('URL is undefined');
  }
  const response = await axios.get(`${apiUrl}/proposal/list`, {
    params: {
      page,
      pageSize,
      ...(searchPhrase && {
        search: searchPhrase
      }),
      ...(filters.length && {
        type: filters
      }),
      ...(sorting && {
        sort: sorting
      }),
      ...(dRepID && {
        drepId: dRepID
      })
    }
  });
  const validatedResponse = {
    ...response.data,
    elements: await Promise.all(response.data.elements.map(proposalDTO => mapDtoToProposal(validationApiUrl, proposalDTO)))
  };
  return validatedResponse;
};

const getVoteContextTextFromFile = async url => {
  if (!url) {
    throw new Error('URL is undefined');
  }
  const response = await axios.get(url);
  const voteContextText = response.data.body['CIP108:voteContextText']['@value'];
  return voteContextText;
};

const TIMEOUT_IN_SECONDS = 30 * 1000; // 1000 ms is 1 s then its 30 s
const METADATA_API = axios.create({
  timeout: TIMEOUT_IN_SECONDS
});
const postValidate = async (url, body) => {
  const response = await METADATA_API.post(url, body);
  return response.data;
};

const useGetDRepVotesQuery = (type, sort, search) => {
  const {
    dRepID,
    pendingTransaction,
    apiUrl,
    validationApiUrl
  } = usePillarContext();
  const {
    data,
    isLoading,
    refetch,
    isRefetching
  } = reactQuery.useQuery({
    queryKey: [QUERY_KEYS.useGetDRepVotesKey, pendingTransaction?.vote?.transactionHash, type, sort, search],
    queryFn: () => getDRepVotes(apiUrl, validationApiUrl, {
      dRepID: dRepID ?? '',
      params: {
        ...(search && {
          search
        }),
        ...(sort && {
          sort
        }),
        ...(type && {
          type
        })
      }
    }),
    enabled: !!dRepID
  });
  const groupedByType = data?.reduce((groups, item) => {
    const itemType = item?.proposal.type;
    /* eslint-disable @typescript-eslint/ban-ts-comment */
    // @ts-expect-error
    if (!groups[itemType]) {
      // @ts-expect-error
      groups[itemType] = {
        title: itemType,
        actions: []
      };
    }
    // @ts-expect-error
    groups[itemType].actions.push(item);
    /* eslint-enable @typescript-eslint/ban-ts-comment */
    return groups;
  }, {});
  return {
    data: Object.values(groupedByType ?? []),
    areDRepVotesLoading: isLoading,
    refetch,
    isRefetching
  };
};

const useGetProposalQuery = (proposalId, enabled) => {
  const {
    dRepID,
    apiUrl,
    validationApiUrl
  } = usePillarContext();
  const {
    data,
    isLoading,
    refetch,
    isRefetching
  } = reactQuery.useQuery([QUERY_KEYS.useGetProposalKey, dRepID, proposalId], () => getProposal(apiUrl, validationApiUrl, proposalId, dRepID), {
    staleTime: Infinity,
    enabled
  });
  return {
    data,
    isLoading,
    refetch,
    isFetching: isRefetching
  };
};

const useGetProposalsInfiniteQuery = ({
  filters = [],
  pageSize = 10,
  searchPhrase,
  sorting = ''
}) => {
  const {
    dRepID,
    isEnabled,
    pendingTransaction,
    apiUrl,
    validationApiUrl
  } = usePillarContext();
  const fetchProposals = async ({
    pageParam = 0
  }) => {
    const data = await getProposals(apiUrl, validationApiUrl, {
      dRepID,
      filters,
      page: pageParam,
      pageSize,
      searchPhrase,
      sorting
    });
    return data;
  };
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage
  } = reactQuery.useInfiniteQuery([QUERY_KEYS.useGetProposalsInfiniteKey, apiUrl, dRepID, filters, isEnabled, pendingTransaction?.vote?.transactionHash, searchPhrase, sorting], fetchProposals, {
    getNextPageParam: lastPage => {
      if (lastPage.elements.length === 0) {
        return undefined;
      }
      return lastPage.page + 1;
    },
    refetchInterval: 20000
  });
  const proposals = data?.pages.flatMap(page => page.elements);
  return {
    proposalsfetchNextPage: fetchNextPage,
    proposalsHaveNextPage: hasNextPage,
    isProposalsFetching: isFetching,
    isProposalsFetchingNextPage: isFetchingNextPage,
    isProposalsLoading: isLoading,
    proposals
  };
};

const useGetProposalsQuery = ({
  filters = [],
  searchPhrase,
  sorting
}) => {
  const {
    dRepID,
    pendingTransaction,
    apiUrl,
    validationApiUrl,
    voter
  } = usePillarContext();
  const fetchProposals = async () => {
    const allProposals = await Promise.all(filters.map(filter => getProposals(apiUrl, validationApiUrl, {
      dRepID: voter?.isRegisteredAsDRep || voter?.isRegisteredAsSoleVoter ? dRepID : undefined,
      filters: [filter],
      searchPhrase,
      sorting
    })));
    return allProposals.flatMap(proposal => proposal.elements);
  };
  const {
    data,
    isLoading
  } = reactQuery.useQuery([QUERY_KEYS.useGetProposalsKey, filters, searchPhrase, sorting, dRepID, pendingTransaction?.vote?.transactionHash], fetchProposals);
  const proposals = Object.values(groupByType(data) ?? []);
  return {
    isProposalsLoading: isLoading,
    proposals
  };
};
const groupByType = data => data?.reduce((groups, item) => {
  const itemType = item.type;
  if (!groups[itemType]) {
    groups[itemType] = {
      title: itemType,
      actions: []
    };
  }
  groups[itemType].actions.push(item);
  return groups;
}, {});

const useGetVoteContextTextFromFile = (url, enabled = true) => {
  const {
    data,
    isLoading
  } = reactQuery.useQuery([QUERY_KEYS.useGetVoteContextFromFile, url], () => getVoteContextTextFromFile(url), {
    enabled
  });
  return {
    voteContextText: data,
    isLoading
  };
};

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React$1.useState(value);
  React$1.useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timerID);
    };
  }, [value, delay]);
  return debouncedValue;
}

const windowHeightFetchThreshold = 0.85;
const useFetchNextPageDetector = (fetchNextPage, isLoading, hasNextPage) => {
  React$1.useEffect(() => {
    const onScroll = () => {
      const {
        scrollTop
      } = document.documentElement;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.offsetHeight;
      if (scrollTop + windowHeight > fullHeight * windowHeightFetchThreshold && hasNextPage && !isLoading) {
        fetchNextPage();
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [fetchNextPage, isLoading, hasNextPage]);
};

function useOnClickOutside(ref, handler) {
  React$1.useEffect(() => {
    const listener = event => {
      const target = event.target;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

const scrollPositionKey = 'governanceActionsCategoryScrollPosition';
const useSaveScrollPosition = (isLoading, isFetching) => {
  const saveScrollPosition = () => {
    sessionStorage.setItem(scrollPositionKey, window.scrollY.toString());
  };
  React$1.useEffect(() => {
    if (!isLoading && !isFetching) {
      const savedPosition = sessionStorage.getItem(scrollPositionKey);
      if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem(scrollPositionKey);
      }
    }
  }, [isLoading, isFetching]);
  return saveScrollPosition;
};

const useScreenDimension = () => {
  const [screenWidth, setScreenWidth] = React$1.useState(window.innerWidth);
  const [isMobile, setIsMobile] = React$1.useState(window.innerWidth < 768);
  let pagePadding;
  if (screenWidth < 768) {
    pagePadding = 2;
  } else if (screenWidth < 1024) {
    pagePadding = 6;
  } else if (screenWidth < 1440) {
    pagePadding = 8;
  } else if (screenWidth < 1920) {
    pagePadding = 10;
  } else {
    pagePadding = 37;
  }
  function handleWindowSizeChange() {
    setScreenWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 768);
  }
  React$1.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);
  return {
    screenWidth,
    isMobile,
    pagePadding
  };
};

var react = {};

Object.defineProperty(react,"__esModule",{value:!0});var n=React$1;function t(n){return Array.prototype.slice.call(n)}function e(n,t){var e=Math.floor(n);return e===t||e+1===t?n:t}function i(){return Date.now()}function r(n,t,e){if(t="data-keen-slider-"+t,null===e)return n.removeAttribute(t);n.setAttribute(t,e||"");}function a(n,e){return e=e||document,"function"==typeof n&&(n=n(e)),Array.isArray(n)?n:"string"==typeof n?t(e.querySelectorAll(n)):n instanceof HTMLElement?[n]:n instanceof NodeList?t(n):[]}function o$1(n){n.raw&&(n=n.raw),n.cancelable&&!n.defaultPrevented&&n.preventDefault();}function u(n){n.raw&&(n=n.raw),n.stopPropagation&&n.stopPropagation();}function c(){var n=[];return {add:function(t,e,i,r){t.addListener?t.addListener(i):t.addEventListener(e,i,r),n.push([t,e,i,r]);},input:function(n,t,e,i){this.add(n,t,function(n){return function(t){t.nativeEvent&&(t=t.nativeEvent);var e=t.changedTouches||[],i=t.targetTouches||[],r=t.detail&&t.detail.x?t.detail:null;return n({id:r?r.identifier?r.identifier:"i":i[0]?i[0]?i[0].identifier:"e":"d",idChanged:r?r.identifier?r.identifier:"i":e[0]?e[0]?e[0].identifier:"e":"d",raw:t,x:r&&r.x?r.x:i[0]?i[0].screenX:r?r.x:t.pageX,y:r&&r.y?r.y:i[0]?i[0].screenY:r?r.y:t.pageY})}}(e),i);},purge:function(){n.forEach((function(n){n[0].removeListener?n[0].removeListener(n[2]):n[0].removeEventListener(n[1],n[2],n[3]);})),n=[];}}}function s(n,t,e){return Math.min(Math.max(n,t),e)}function d(n){return (n>0?1:0)-(n<0?1:0)||+n}function l(n){var t=n.getBoundingClientRect();return {height:e(t.height,n.offsetHeight),width:e(t.width,n.offsetWidth)}}function f(n,t,e,i){var r=n&&n[t];return null==r?e:i&&"function"==typeof r?r():r}function p(n){return Math.round(1e6*n)/1e6}function v(n,t){if(n===t)return !0;var e=typeof n;if(e!==typeof t)return !1;if("object"!==e||null===n||null===t)return "function"===e&&n.toString()===t.toString();if(n.length!==t.length||Object.getOwnPropertyNames(n).length!==Object.getOwnPropertyNames(t).length)return !1;for(var i in n)if(!v(n[i],t[i]))return !1;return !0}var h=function(){return h=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},h.apply(this,arguments)};function m(n,t,e){for(var i,r=0,a=t.length;r<a;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return n.concat(i||Array.prototype.slice.call(t))}function g(n){var t,e,i,r,a,o;function u(t){o||(o=t),c(!0);var a=t-o;a>i&&(a=i);var l=r[e];if(l[3]<a)return e++,u(t);var f=l[2],p=l[4],v=l[0],h=l[1]*(0, l[5])(0===p?1:(a-f)/p);if(h&&n.track.to(v+h),a<i)return d();o=null,c(!1),s(null),n.emit("animationEnded");}function c(n){t.active=n;}function s(n){t.targetIdx=n;}function d(){var n;n=u,a=window.requestAnimationFrame(n);}function l(){var t;t=a,window.cancelAnimationFrame(t),c(!1),s(null),o&&n.emit("animationStopped"),o=null;}return t={active:!1,start:function(t){if(l(),n.track.details){var a=0,o=n.track.details.position;e=0,i=0,r=t.map((function(n){var t,e=Number(o),r=null!==(t=n.earlyExit)&&void 0!==t?t:n.duration,u=n.easing,c=n.distance*u(r/n.duration)||0;o+=c;var s=i;return i+=r,a+=c,[e,n.distance,s,i,n.duration,u]})),s(n.track.distToIdx(a)),d(),n.emit("animationStarted");}},stop:l,targetIdx:null}}function b(n){var t,e,r,a,o,u,c,l,v,h,g,b,y,x,k=1/0,w=[],M=null,T=0;function C(n){P(T+n);}function E(n){var t=z(T+n).abs;return O(t)?t:null}function z(n){var t=Math.floor(Math.abs(p(n/e))),i=p((n%e+e)%e);i===e&&(i=0);var r=d(n),a=c.indexOf(m([],c).reduce((function(n,t){return Math.abs(t-i)<Math.abs(n-i)?t:n}))),o=a;return r<0&&t++,a===u&&(o=0,t+=r>0?1:-1),{abs:o+t*u*r,origin:a,rel:o}}function I(n,t,e){var i;if(t||!S())return A(n,e);if(!O(n))return null;var r=z(null!=e?e:T),a=r.abs,o=n-r.rel,c=a+o;i=A(c);var s=A(c-u*d(o));return (null!==s&&Math.abs(s)<Math.abs(i)||null===i)&&(i=s),p(i)}function A(n,t){if(null==t&&(t=p(T)),!O(n)||null===n)return null;n=Math.round(n);var i=z(t),r=i.abs,a=i.rel,o=i.origin,s=L(n),d=(t%e+e)%e,l=c[o],f=Math.floor((n-(r-a))/u)*e;return p(l-d-l+c[s]+f+(o===u?e:0))}function O(n){return D(n)===n}function D(n){return s(n,v,h)}function S(){return a.loop}function L(n){return (n%u+u)%u}function P(t){var e;e=t-T,w.push({distance:e,timestamp:i()}),w.length>6&&(w=w.slice(-6)),T=p(t);var r=_().abs;if(r!==M){var a=null!==M;M=r,a&&n.emit("slideChanged");}}function _(i){var c=i?null:function(){if(u){var n=S(),t=n?(T%e+e)%e:T,i=(n?T%e:T)-o[0][2],c=0-(i<0&&n?e-Math.abs(i):i),s=0,l=z(T),f=l.abs,p=l.rel,m=o[p][2],k=o.map((function(t,i){var r=c+s;(r<0-t[0]||r>1)&&(r+=(Math.abs(r)>e-1&&n?e:0)*d(-r));var o=i-p,l=d(o),v=o+f;n&&(-1===l&&r>m&&(v+=u),1===l&&r<m&&(v-=u),null!==g&&v<g&&(r+=e),null!==b&&v>b&&(r-=e));var h=r+t[0]+t[1],y=Math.max(r>=0&&h<=1?1:h<0||r>1?0:r<0?Math.min(1,(t[0]+r)/t[0]):(1-r)/t[0],0);return s+=t[0]+t[1],{abs:v,distance:a.rtl?-1*r+1-t[0]:r,portion:y,size:t[0]}}));return f=D(f),p=L(f),{abs:D(f),length:r,max:x,maxIdx:h,min:y,minIdx:v,position:T,progress:n?t/e:T/r,rel:p,slides:k,slidesLength:e}}}();return t.details=c,n.emit("detailsChanged"),c}return t={absToRel:L,add:C,details:null,distToIdx:E,idxToDist:I,init:function(t){if(function(){if(a=n.options,o=(a.trackConfig||[]).map((function(n){return [f(n,"size",1),f(n,"spacing",0),f(n,"origin",0)]})),u=o.length){e=p(o.reduce((function(n,t){return n+t[0]+t[1]}),0));var t,i=u-1;r=p(e+o[0][2]-o[i][0]-o[i][2]-o[i][1]),c=o.reduce((function(n,e){if(!n)return [0];var i=o[n.length-1],r=n[n.length-1]+(i[0]+i[2])+i[1];return r-=e[2],n[n.length-1]>r&&(r=n[n.length-1]),r=p(r),n.push(r),(!t||t<r)&&(l=n.length-1),t=r,n}),null),0===r&&(l=0),c.push(p(e));}}(),!u)return _(!0);var i;!function(){var t=n.options.range,e=n.options.loop;g=v=e?f(e,"min",-1/0):0,b=h=e?f(e,"max",k):l;var i=f(t,"min",null),r=f(t,"max",null);null!==i&&(v=i),null!==r&&(h=r),y=v===-1/0?v:n.track.idxToDist(v||0,!0,0),x=h===k?h:I(h,!0,0),null===r&&(b=h),f(t,"align",!1)&&h!==k&&0===o[L(h)][2]&&(x-=1-o[L(h)][0],h=E(x-T)),y=p(y),x=p(x);}(),i=t,Number(i)===i?C(A(D(t))):_();},to:P,velocity:function(){var n=i(),t=w.reduce((function(t,e){var i=e.distance,r=e.timestamp;return n-r>200||(d(i)!==d(t.distance)&&t.distance&&(t={distance:0,lastTimestamp:0,time:0}),t.time&&(t.distance+=i),t.lastTimestamp&&(t.time+=r-t.lastTimestamp),t.lastTimestamp=r),t}),{distance:0,lastTimestamp:0,time:0});return t.distance/t.time||0}}}function y(n){var t,e,i,r,a,o,u,c;function l(n){return 2*n}function f(n){return s(n,u,c)}function p(n){return 1-Math.pow(1-n,3)}function v(){return i?n.track.velocity():0}function h(){b();var t="free-snap"===n.options.mode,e=n.track,i=v();r=d(i);var u=n.track.details,c=[];if(i||!t){var s=m(i),h=s.dist,g=s.dur;if(g=l(g),h*=r,t){var y=e.idxToDist(e.distToIdx(h),!0);y&&(h=y);}c.push({distance:h,duration:g,easing:p});var x=u.position,k=x+h;if(k<a||k>o){var w=k<a?a-x:o-x,M=0,T=i;if(d(w)===r){var C=Math.min(Math.abs(w)/Math.abs(h),1),E=function(n){return 1-Math.pow(1-n,1/3)}(C)*g;c[0].earlyExit=E,T=i*(1-C);}else c[0].earlyExit=0,M+=w;var z=m(T,100),I=z.dist*r;n.options.rubberband&&(c.push({distance:I,duration:l(z.dur),easing:p}),c.push({distance:-I+M,duration:500,easing:p}));}n.animator.start(c);}else n.moveToIdx(f(u.abs),!0,{duration:500,easing:function(n){return 1+--n*n*n*n*n}});}function m(n,t){void 0===t&&(t=1e3);var e=147e-9+(n=Math.abs(n))/t;return {dist:Math.pow(n,2)/e,dur:n/e}}function g(){var t=n.track.details;t&&(a=t.min,o=t.max,u=t.minIdx,c=t.maxIdx);}function b(){n.animator.stop();}n.on("updated",g),n.on("optionsChanged",g),n.on("created",g),n.on("dragStarted",(function(){i=!1,b(),t=e=n.track.details.abs;})),n.on("dragChecked",(function(){i=!0;})),n.on("dragEnded",(function(){var i=n.options.mode;"snap"===i&&function(){var i=n.track,r=n.track.details,u=r.position,c=d(v());(u>o||u<a)&&(c=0);var s=t+c;0===r.slides[i.absToRel(s)].portion&&(s-=c),t!==e&&(s=e),d(i.idxToDist(s,!0))!==c&&(s+=c),s=f(s);var l=i.idxToDist(s,!0);n.animator.start([{distance:l,duration:500,easing:function(n){return 1+--n*n*n*n*n}}]);}(),"free"!==i&&"free-snap"!==i||h();})),n.on("dragged",(function(){e=n.track.details.abs;}));}function x(n){var t,e,i,r,l,f,p,v,h,m,g,b,y,x,k,w,M,T,C=c();function E(t){if(f&&v===t.id){var a=O(t);if(h){if(!A(t))return I(t);m=a,h=!1,n.emit("dragChecked");}if(w)return m=a;o$1(t);var c=function(t){if(M===-1/0&&T===1/0)return t;var i=n.track.details,a=i.length,o=i.position,u=s(t,M-o,T-o);if(0===a)return 0;if(!n.options.rubberband)return u;if(o<=T&&o>=M)return t;if(o<M&&e>0||o>T&&e<0)return t;var c=(o<M?o-M:o-T)/a,d=r*a,f=Math.abs(c*d),p=Math.max(0,1-f/l*2);return p*p*t}(p(m-a)/r*i);e=d(c);var y=n.track.details.position;(y>M&&y<T||y===M&&e>0||y===T&&e<0)&&u(t),g+=c,!b&&Math.abs(g*r)>5&&(b=!0),n.track.add(c),m=a,n.emit("dragged");}}function z(t){!f&&n.track.details&&n.track.details.length&&(g=0,f=!0,b=!1,h=!0,v=t.id,A(t),m=O(t),n.emit("dragStarted"));}function I(t){f&&v===t.idChanged&&(f=!1,n.emit("dragEnded"));}function A(n){var t=D(),e=t?n.y:n.x,i=t?n.x:n.y,r=void 0!==y&&void 0!==x&&Math.abs(x-i)<=Math.abs(y-e);return y=e,x=i,r}function O(n){return D()?n.y:n.x}function D(){return n.options.vertical}function S(){r=n.size,l=D()?window.innerHeight:window.innerWidth;var t=n.track.details;t&&(M=t.min,T=t.max);}function L(n){b&&(u(n),o$1(n));}function P(){if(C.purge(),n.options.drag&&!n.options.disabled){var e;e=n.options.dragSpeed||1,p="function"==typeof e?e:function(n){return n*e},i=n.options.rtl?-1:1,S(),t=n.container,function(){var n="data-keen-slider-clickable";a("[".concat(n,"]:not([").concat(n,"=false])"),t).map((function(n){C.add(n,"dragstart",u),C.add(n,"mousedown",u),C.add(n,"touchstart",u);}));}(),C.add(t,"dragstart",(function(n){o$1(n);})),C.add(t,"click",L,{capture:!0}),C.input(t,"ksDragStart",z),C.input(t,"ksDrag",E),C.input(t,"ksDragEnd",I),C.input(t,"mousedown",z),C.input(t,"mousemove",E),C.input(t,"mouseleave",I),C.input(t,"mouseup",I),C.input(t,"touchstart",z,{passive:!0}),C.input(t,"touchmove",E,{passive:!1}),C.input(t,"touchend",I),C.input(t,"touchcancel",I),C.add(window,"wheel",(function(n){f&&o$1(n);}));var r="data-keen-slider-scrollable";a("[".concat(r,"]:not([").concat(r,"=false])"),n.container).map((function(n){return function(n){var t;C.input(n,"touchstart",(function(n){t=O(n),w=!0,k=!0;}),{passive:!0}),C.input(n,"touchmove",(function(e){var i=D(),r=i?n.scrollHeight-n.clientHeight:n.scrollWidth-n.clientWidth,a=t-O(e),u=i?n.scrollTop:n.scrollLeft,c=i&&"scroll"===n.style.overflowY||!i&&"scroll"===n.style.overflowX;if(t=O(e),(a<0&&u>0||a>0&&u<r)&&k&&c)return w=!0;k=!1,o$1(e),w=!1;})),C.input(n,"touchend",(function(){w=!1;}));}(n)}));}}n.on("updated",S),n.on("optionsChanged",P),n.on("created",P),n.on("destroyed",C.purge);}function k(n){var t,e,i=null;function r(t,e,i){n.animator.active?o(t,e,i):requestAnimationFrame((function(){return o(t,e,i)}));}function a(){r(!1,!1,e);}function o(e,r,a){var o=0,u=n.size,d=n.track.details;if(d&&t){var l=d.slides;t.forEach((function(n,t){if(e)!i&&r&&c(n,null,a),s(n,null,a);else {if(!l[t])return;var d=l[t].size*u;!i&&r&&c(n,d,a),s(n,l[t].distance*u-o,a),o+=d;}}));}}function u(t){return "performance"===n.options.renderMode?Math.round(t):t}function c(n,t,e){var i=e?"height":"width";null!==t&&(t=u(t)+"px"),n.style["min-"+i]=t,n.style["max-"+i]=t;}function s(n,t,e){if(null!==t){t=u(t);var i=e?t:0;t="translate3d(".concat(e?0:t,"px, ").concat(i,"px, 0)");}n.style.transform=t,n.style["-webkit-transform"]=t;}function d(){t&&(o(!0,!0,e),t=null),n.on("detailsChanged",a,!0);}function l(){r(!1,!0,e);}function p(){d(),e=n.options.vertical,n.options.disabled||"custom"===n.options.renderMode||(i="auto"===f(n.options.slides,"perView",null),n.on("detailsChanged",a),(t=n.slides).length&&l());}n.on("created",p),n.on("optionsChanged",p),n.on("beforeOptionsChanged",(function(){d();})),n.on("updated",l),n.on("destroyed",d);}function w(n,t){return function(e){var i,o,u,s,p,v=c();function m(n){var t;r(e.container,"reverse","rtl"!==(t=e.container,window.getComputedStyle(t,null).getPropertyValue("direction"))||n?null:""),r(e.container,"v",e.options.vertical&&!n?"":null),r(e.container,"disabled",e.options.disabled&&!n?"":null);}function g(){b()&&M();}function b(){var n=null;if(s.forEach((function(t){t.matches&&(n=t.__media);})),n===i)return !1;i||e.emit("beforeOptionsChanged"),i=n;var t=n?u.breakpoints[n]:u;return e.options=h(h({},u),t),m(),I(),A(),C(),!0}function y(n){var t=l(n);return (e.options.vertical?t.height:t.width)/e.size||1}function x(){return e.options.trackConfig.length}function k(n){for(var r in i=!1,u=h(h({},t),n),v.purge(),o=e.size,s=[],u.breakpoints||[]){var a=window.matchMedia(r);a.__media=r,s.push(a),v.add(a,"change",g);}v.add(window,"orientationchange",z),v.add(window,"resize",E),b();}function w(n){e.animator.stop();var t=e.track.details;e.track.init(null!=n?n:t?t.abs:0);}function M(n){w(n),e.emit("optionsChanged");}function T(n,t){if(n)return k(n),void M(t);I(),A();var i=x();C(),x()!==i?M(t):w(t),e.emit("updated");}function C(){var n=e.options.slides;if("function"==typeof n)return e.options.trackConfig=n(e.size,e.slides);for(var t=e.slides,i=t.length,r="number"==typeof n?n:f(n,"number",i,!0),a=[],o=f(n,"perView",1,!0),u=f(n,"spacing",0,!0)/e.size||0,c="auto"===o?u:u/o,s=f(n,"origin","auto"),d=0,l=0;l<r;l++){var p="auto"===o?y(t[l]):1/o-u+c,v="center"===s?.5-p/2:"auto"===s?0:s;a.push({origin:v,size:p,spacing:u}),d+=p;}if(d+=u*(r-1),"auto"===s&&!e.options.loop&&1!==o){var h=0;a.map((function(n){var t=d-h;return h+=n.size+u,t>=1||(n.origin=1-t-(d>1?0:1-d)),n}));}e.options.trackConfig=a;}function E(){I();var n=e.size;e.options.disabled||n===o||(o=n,T());}function z(){E(),setTimeout(E,500),setTimeout(E,2e3);}function I(){var n=l(e.container);e.size=(e.options.vertical?n.height:n.width)||1;}function A(){e.slides=a(e.options.selector,e.container);}e.container=(p=a(n,document)).length?p[0]:null,e.destroy=function(){v.purge(),e.emit("destroyed"),m(!0);},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0);},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0);},e.update=T,k(e.options);}}var M=function(n,t,e){try{return function(n,t){var e,i={};return e={emit:function(n){i[n]&&i[n].forEach((function(n){n(e);}));var t=e.options&&e.options[n];t&&t(e);},moveToIdx:function(n,t,i){var r=e.track.idxToDist(n,t);if(r){var a=e.options.defaultAnimation;e.animator.start([{distance:r,duration:f(i||a,"duration",500),easing:f(i||a,"easing",(function(n){return 1+--n*n*n*n*n}))}]);}},on:function(n,t,e){void 0===e&&(e=!1),i[n]||(i[n]=[]);var r=i[n].indexOf(t);r>-1?e&&delete i[n][r]:e||i[n].push(t);},options:n},function(){if(e.track=b(e),e.animator=g(e),t)for(var n=0,i=t;n<i.length;n++)(0,i[n])(e);e.track.init(e.options.initial||0),e.emit("created");}(),e}(t,m([w(n,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),k,x,y],e||[],!0))}catch(n){console.error(n);}};var useKeenSlider = react.useKeenSlider=function(t,e){var i=n.useRef(null),r=n.useRef(!1),a=n.useRef(t),o=n.useCallback((function(n){n?(a.current=t,i.current=new M(n,t,e),r.current=!1):(i.current&&i.current.destroy&&i.current.destroy(),i.current=null);}),[]);return n.useEffect((function(){v(a.current,t)||(a.current=t,i.current&&i.current.update(a.current));}),[t]),[o,i]};

const WheelControls = slider => {
  let touchTimeout;
  let position;
  let wheelActive = false;
  function dispatch(e, name) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(new CustomEvent(name, {
      detail: {
        x: position.x,
        y: position.y
      }
    }));
  }
  function eventWheel(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (!wheelActive) {
        position = {
          x: e.pageX,
          y: e.pageY
        };
        dispatch(e, 'ksDragStart');
        wheelActive = true;
      }
      dispatch(e, 'ksDrag');
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        wheelActive = false;
        dispatch(e, 'ksDragEnd');
      }, 50);
    }
  }
  slider.on('created', () => {
    slider.container.addEventListener('wheel', eventWheel, {
      passive: false
    });
  });
};
const useSlider = ({
  config
}) => {
  const [currentSlide, setCurrentSlide] = React$1.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    ...config,
    rubberband: false,
    detailsChanged: slider => {
      setCurrentSlide(slider.track.details.rel);
    }
  }, [WheelControls]);
  const dataLength = instanceRef?.current?.slides?.length ?? 10;
  const itemsPerView = dataLength - (instanceRef?.current?.track?.details?.maxIdx ?? 2);
  return {
    sliderRef,
    instanceRef,
    currentSlide,
    itemsPerView
  };
};

function o(o,n,a){return void 0===n&&(n={}),void 0===a&&(a={}),function(s,i,c){try{return Promise.resolve(function(t,r){try{var u=(n.context&&"development"===process.env.NODE_ENV&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(o["sync"===a.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},n,{context:i}))).then(function(t){return c.shouldUseNativeValidation&&resolvers.validateFieldsNatively({},c),{values:a.raw?s:t,errors:{}}}));}catch(e){return r(e)}return u&&u.then?u.then(void 0,r):u}(0,function(e){if(!e.inner)throw e;return {values:{},errors:resolvers.toNestErrors((o=e,n=!c.shouldUseNativeValidation&&"all"===c.criteriaMode,(o.inner||[]).reduce(function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),n){var o=e[t.path].types,a=o&&o[t.type];e[t.path]=reactHookForm.appendErrors(t.path,n,e,t.type,a?[].concat(a,t.message):t.message);}return e},{})),c)};var o,n;}))}catch(e){return Promise.reject(e)}}}

const useVoteActionFormController = () => {
  const validationSchema = React$1.useMemo(() => Yup__namespace.object().shape({
    vote: Yup__namespace.string().oneOf(['yes', 'no', 'abstain']).required()
  }), []);
  return reactHookForm.useForm({
    defaultValues: {
      vote: ''
    },
    mode: 'onChange',
    resolver: o(validationSchema)
  });
};
const useVoteActionForm = ({
  previousVote,
  voteContextHash,
  voteContextUrl
}) => {
  const [isLoading, setIsLoading] = React$1.useState(false);
  const {
    addSuccessAlert,
    buildSignSubmitConwayCertTx,
    buildVote,
    isPendingTransaction
  } = usePillarContext();
  const navigate = reactRouterDom.useNavigate();
  const {
    hash
  } = reactRouterDom.useLocation();
  const index = +hash.slice(1);
  const {
    proposalId: txHash
  } = reactRouterDom.useParams();
  const openWalletErrorModal = useWalletErrorModal();
  const {
    control,
    handleSubmit,
    formState: {
      errors,
      isDirty
    },
    setValue,
    register: registerInput
  } = useVoteActionFormController();
  const {
    vote
  } = reactHookForm.useWatch({
    control
  });
  const areFormErrors = !!errors.vote;
  const canVote = txHash !== undefined && txHash !== null && index !== undefined && index !== null && !areFormErrors && previousVote?.vote !== vote;
  const confirmVote = React$1.useCallback(async values => {
    if (!canVote) return;
    setIsLoading(true);
    const urlSubmitValue = voteContextUrl ?? '';
    const hashSubmitValue = voteContextHash ?? '';
    try {
      const isPendingTx = isPendingTransaction?.();
      if (isPendingTx) return;
      const votingBuilder = await buildVote?.(values.vote, txHash, index, urlSubmitValue, hashSubmitValue);
      const result = await buildSignSubmitConwayCertTx?.({
        votingBuilder,
        type: 'vote',
        resourceId: txHash + index
      });
      if (result) {
        addSuccessAlert('Vote submitted');
        navigate(PATHS.governanceActions, {
          state: {
            isVotedListOnLoad: !!previousVote?.vote
          }
        });
      }
    } catch (error) {
      openWalletErrorModal({
        error,
        dataTestId: 'vote-transaction-error-modal'
      });
    } finally {
      setIsLoading(false);
    }
  }, [canVote, voteContextUrl, voteContextHash, isPendingTransaction, buildVote, txHash, index, buildSignSubmitConwayCertTx, addSuccessAlert, navigate, previousVote?.vote, openWalletErrorModal]);
  return {
    confirmVote: handleSubmit(confirmVote),
    setValue,
    vote,
    registerInput,
    isDirty,
    areFormErrors,
    isVoteLoading: isLoading,
    canVote
  };
};

const useVoteContextForm = (setSavedHash, setStep, setErrorMessage) => {
  const {
    validateMetadata,
    generateMetadata,
    createJsonLD,
    createHash
  } = usePillarContext();
  const [hash, setHash] = React$1.useState(null);
  const {
    control,
    formState: {
      errors,
      isValid
    },
    getValues,
    handleSubmit,
    setValue,
    watch,
    register,
    reset
  } = reactHookForm.useFormContext();
  const onClickDownloadJson = () => {
    const json = createJsonLD(getValues());
    setHash(createHash(json));
    downloadJson(json, 'Vote_Context');
  };
  const onSubmit = React$1.useCallback(async data => {
    try {
      if (!hash) throw new Error('Hash is not generated');
      await validateMetadata(data.storingURL, hash);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error) {
      console.error(error);
      // Replace with correct one
      setErrorMessage?.(MetadataValidationStatus.INCORRECT_FORMAT);
    } finally {
      if (setSavedHash) setSavedHash(hash);
      if (setStep) setStep(4);
    }
  }, [hash, setErrorMessage, setSavedHash, setStep, validateMetadata]);
  return {
    control,
    validateURL: handleSubmit(onSubmit),
    errors,
    generateMetadata,
    getValues,
    isValid,
    onClickDownloadJson,
    register,
    reset,
    setValue,
    watch,
    hash
  };
};

const useWalletErrorModal = () => {
  const {
    openModal,
    closeModal
  } = useModal();
  const openWalletErrorModal = ({
    error,
    onSumbit,
    title,
    buttonText,
    dataTestId
  }) => {
    const errorMessage = error && typeof error === 'object' && 'info' in error ? error.info : error;
    openModal({
      type: 'statusModal',
      state: {
        status: 'warning',
        title: title ?? 'Oops!',
        message: errorMessage,
        buttonText: buttonText ?? 'Cancel',
        onSubmit: () => {
          if (onSumbit) onSumbit();
          closeModal();
        },
        dataTestId: dataTestId ?? 'wallet-error-modal'
      }
    });
  };
  return openWalletErrorModal;
};

const DataActionsBarContext = React$1.createContext(undefined);
DataActionsBarContext.displayName = 'DataActionsBarContext';
const DataActionsBarProvider = ({
  children
}) => {
  const [searchText, setSearchText] = React$1.useState('');
  const debouncedSearchText = useDebounce(searchText, 300);
  const [filtersOpen, setFiltersOpen] = React$1.useState(false);
  const [chosenFilters, setChosenFilters] = React$1.useState([]);
  const [sortOpen, setSortOpen] = React$1.useState(false);
  const [chosenSorting, setChosenSorting] = React$1.useState('');
  const closeFilters = React$1.useCallback(() => {
    setFiltersOpen(false);
  }, []);
  const closeSorts = React$1.useCallback(() => {
    setSortOpen(false);
  }, []);
  const contextValue = React$1.useMemo(() => ({
    chosenFilters,
    chosenFiltersLength: chosenFilters.length,
    chosenSorting,
    closeFilters,
    closeSorts,
    debouncedSearchText,
    filtersOpen,
    searchText,
    setChosenFilters,
    setChosenSorting,
    setFiltersOpen,
    setSearchText,
    setSortOpen,
    sortOpen
  }), [chosenFilters, chosenSorting, debouncedSearchText, filtersOpen, searchText, sortOpen, closeFilters, closeSorts]);
  return jsxRuntimeExports.jsx(DataActionsBarContext.Provider, {
    value: contextValue,
    children: children
  });
};
function useDataActionsBar() {
  const context = React$1.useContext(DataActionsBarContext);
  if (!context) {
    throw new Error('useDataActionsBar must be used within a DataActionsBarProvider');
  }
  return context;
}

process.env.NODE_ENV !== "production" ? {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  value: PropTypes.object.isRequired
} : void 0;
function useDefaultProps(params) {
  return useDefaultProps$1(params);
}

function getDividerUtilityClass(slot) {
  return generateUtilityClass('MuiDivider', slot);
}
generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);

const _excluded$6 = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"];
const useUtilityClasses$4 = ownerState => {
  const {
    absolute,
    children,
    classes,
    flexItem,
    light,
    orientation,
    textAlign,
    variant
  } = ownerState;
  const slots = {
    root: ['root', absolute && 'absolute', variant, light && 'light', orientation === 'vertical' && 'vertical', flexItem && 'flexItem', children && 'withChildren', children && orientation === 'vertical' && 'withChildrenVertical', textAlign === 'right' && orientation !== 'vertical' && 'textAlignRight', textAlign === 'left' && orientation !== 'vertical' && 'textAlignLeft'],
    wrapper: ['wrapper', orientation === 'vertical' && 'wrapperVertical']
  };
  return composeClasses(slots, getDividerUtilityClass, classes);
};
const DividerRoot = styled('div', {
  name: 'MuiDivider',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.absolute && styles.absolute, styles[ownerState.variant], ownerState.light && styles.light, ownerState.orientation === 'vertical' && styles.vertical, ownerState.flexItem && styles.flexItem, ownerState.children && styles.withChildren, ownerState.children && ownerState.orientation === 'vertical' && styles.withChildrenVertical, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && styles.textAlignRight, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && styles.textAlignLeft];
  }
})(({
  theme,
  ownerState
}) => _extends$1({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: 'solid',
  borderColor: (theme.vars || theme).palette.divider,
  borderBottomWidth: 'thin'
}, ownerState.absolute && {
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%'
}, ownerState.light && {
  borderColor: theme.vars ? `rgba(${theme.vars.palette.dividerChannel} / 0.08)` : alpha_1(theme.palette.divider, 0.08)
}, ownerState.variant === 'inset' && {
  marginLeft: 72
}, ownerState.variant === 'middle' && ownerState.orientation === 'horizontal' && {
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2)
}, ownerState.variant === 'middle' && ownerState.orientation === 'vertical' && {
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1)
}, ownerState.orientation === 'vertical' && {
  height: '100%',
  borderBottomWidth: 0,
  borderRightWidth: 'thin'
}, ownerState.flexItem && {
  alignSelf: 'stretch',
  height: 'auto'
}), ({
  ownerState
}) => _extends$1({}, ownerState.children && {
  display: 'flex',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  border: 0,
  borderTopStyle: 'solid',
  borderLeftStyle: 'solid',
  '&::before, &::after': {
    content: '""',
    alignSelf: 'center'
  }
}), ({
  theme,
  ownerState
}) => _extends$1({}, ownerState.children && ownerState.orientation !== 'vertical' && {
  '&::before, &::after': {
    width: '100%',
    borderTop: `thin solid ${(theme.vars || theme).palette.divider}`,
    borderTopStyle: 'inherit'
  }
}), ({
  theme,
  ownerState
}) => _extends$1({}, ownerState.children && ownerState.orientation === 'vertical' && {
  flexDirection: 'column',
  '&::before, &::after': {
    height: '100%',
    borderLeft: `thin solid ${(theme.vars || theme).palette.divider}`,
    borderLeftStyle: 'inherit'
  }
}), ({
  ownerState
}) => _extends$1({}, ownerState.textAlign === 'right' && ownerState.orientation !== 'vertical' && {
  '&::before': {
    width: '90%'
  },
  '&::after': {
    width: '10%'
  }
}, ownerState.textAlign === 'left' && ownerState.orientation !== 'vertical' && {
  '&::before': {
    width: '10%'
  },
  '&::after': {
    width: '90%'
  }
}));
const DividerWrapper = styled('span', {
  name: 'MuiDivider',
  slot: 'Wrapper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.wrapper, ownerState.orientation === 'vertical' && styles.wrapperVertical];
  }
})(({
  theme,
  ownerState
}) => _extends$1({
  display: 'inline-block',
  paddingLeft: `calc(${theme.spacing(1)} * 1.2)`,
  paddingRight: `calc(${theme.spacing(1)} * 1.2)`
}, ownerState.orientation === 'vertical' && {
  paddingTop: `calc(${theme.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${theme.spacing(1)} * 1.2)`
}));
const Divider = /*#__PURE__*/React__namespace.forwardRef(function Divider(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiDivider'
  });
  const {
      absolute = false,
      children,
      className,
      component = children ? 'div' : 'hr',
      flexItem = false,
      light = false,
      orientation = 'horizontal',
      role = component !== 'hr' ? 'separator' : undefined,
      textAlign = 'center',
      variant = 'fullWidth'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const ownerState = _extends$1({}, props, {
    absolute,
    component,
    flexItem,
    light,
    orientation,
    role,
    textAlign,
    variant
  });
  const classes = useUtilityClasses$4(ownerState);
  return /*#__PURE__*/jsxRuntimeExports.jsx(DividerRoot, _extends$1({
    as: component,
    className: clsx(classes.root, className),
    role: role,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: children ? /*#__PURE__*/jsxRuntimeExports.jsx(DividerWrapper, {
      className: classes.wrapper,
      ownerState: ownerState,
      children: children
    }) : null
  }));
});

/**
 * The following flag is used to ensure that this component isn't tabbable i.e.
 * does not get highlight/focus inside of MUI List.
 */
Divider.muiSkipListHighlight = true;
process.env.NODE_ENV !== "production" ? Divider.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: PropTypes.bool,
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: PropTypes.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  light: PropTypes.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * @ignore
   */
  role: PropTypes /* @typescript-to-proptypes-ignore */.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['fullWidth', 'inset', 'middle']), PropTypes.string])
} : void 0;

/**
 * @deprecated Should be replaced with @mui/material/button.
 * A customizable button component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.size='large'] - The size of the button. Possible values are 'extraLarge', 'large', 'medium', and 'small'.
 * @param {string} [props.variant='contained'] - The variant of the button. Possible values are 'contained', 'outlined', and 'text'.
 * @param {Object} [props.sx] - The custom styles for the button.
 * @param {boolean} [props.isLoading] - Determines whether the button is in a loading state.
 * @param {ReactNode} [props.children] - The content of the button.
 * @param {boolean} [props.disabled] - Determines whether the button is disabled.
 * @returns {JSX.Element} The rendered button component.
 */
const Button = ({
  size = 'large',
  variant = 'contained',
  sx,
  isLoading,
  ...props
}) => {
  const height = {
    extraLarge: 48,
    large: 40,
    medium: 36,
    small: 32
  }[size];
  const px = {
    extraLarge: 3.5,
    large: 3.25,
    medium: 3,
    small: 3
  }[size];
  return jsxRuntimeExports.jsxs(material.Button, {
    sx: {
      fontSize: size === 'extraLarge' ? 16 : 14,
      height,
      px,
      whiteSpace: 'nowrap',
      ...sx
    },
    variant: variant,
    ...props,
    disabled: isLoading || props?.disabled,
    children: [isLoading && jsxRuntimeExports.jsx(material.CircularProgress, {
      size: 26,
      sx: {
        position: 'absolute'
      }
    }), props.children]
  });
};

/**
 * @deprecated This component is deprecated in favor of replacing it with `@mui/material/Checkbox`.
 * Please update your code accordingly.
 */
const Checkbox$2 = ({
  dataTestId,
  errorMessage,
  sx,
  ...props
}) => {
  const id = React$1.useId();
  return jsxRuntimeExports.jsx(material.Checkbox, {
    id: id,
    inputProps: {
      'data-testid': dataTestId
    },
    sx: {
      '& .MuiSvgIcon-root': {
        fontSize: 18
      },
      color: errorMessage ? 'red' : '#0033AD',
      ...sx
    },
    ...props
  });
};

/**
 * CopyButton component.
 *
 * @param isChecked - Indicates whether the button is checked.
 * @param text - The text to be copied to the clipboard.
 * @param variant - The variant of the button.
 * @returns The CopyButton component.
 */
const CopyButton = ({
  isChecked,
  text,
  variant
}) => {
  const {
    addSuccessAlert
  } = usePillarContext();
  /**
   * Determines the source of the icon based on the variant and isChecked values.
   *
   * @returns The source of the icon.
   */
  const iconSrc = React$1.useMemo(() => {
    if (variant === 'blue') {
      return ICONS.copyBlueIcon;
    }
    if (variant === 'blueThin') {
      return ICONS.copyBlueThinIcon;
    }
    if (isChecked) {
      return ICONS.copyWhiteIcon;
    }
    return ICONS.copyIcon;
  }, [isChecked, variant]);
  return jsxRuntimeExports.jsx("img", {
    "data-testid": "copy-button",
    alt: "copy",
    onClick: e => {
      navigator.clipboard.writeText(text);
      addSuccessAlert('Copied to clipboard');
      e.stopPropagation();
    },
    src: iconSrc,
    style: {
      cursor: 'pointer'
    }
  });
};

/**
 * A button component that opens an external modal when clicked.
 *
 * @param label - The label text for the button.
 * @param url - The URL of the external link.
 * @param sx - Additional styling properties for the button.
 */
const ExternalModalButton = ({
  label,
  sx,
  url
}) => {
  const {
    openModal
  } = useModal();
  return jsxRuntimeExports.jsxs(Button, {
    onClick: () => {
      openModal({
        type: 'externalLink',
        state: {
          externalLink: url
        }
      });
    },
    sx: {
      p: 0,
      mb: 4,
      ':hover': {
        backgroundColor: 'transparent'
      },
      ...sx
    },
    disableRipple: true,
    variant: "text",
    "data-testid": "external-modal-button",
    children: [jsxRuntimeExports.jsx(material.Typography, {
      variant: "body1",
      fontWeight: 500,
      color: "primary",
      children: label
    }), jsxRuntimeExports.jsx("img", {
      alt: "external link",
      src: ICONS.externalLinkIcon,
      height: "20",
      width: "20",
      style: {
        marginLeft: '8px'
      }
    })]
  });
};

/**
 * Renders an error message for a form field.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.errorMessage - The error message to display.
 * @param {Object} props.errorStyles - Additional styles for the error message.
 * @returns {JSX.Element | null} The rendered error message or null if there is no error message.
 */
const FormErrorMessage = ({
  errorMessage,
  errorStyles
}) => {
  if (!errorMessage) return null;
  return jsxRuntimeExports.jsx(material.Typography, {
    color: "red",
    "data-testid": `${errorMessage.replace(/\s+/g, '-').toLowerCase()}-error`,
    fontSize: 12,
    fontWeight: 400,
    sx: {
      mt: 0.25
    },
    ...errorStyles,
    children: errorMessage
  });
};

/**
 * Renders a helpful text component for a form.
 *
 * @param {Object} props - The component props.
 * @param {string} props.helpfulText - The helpful text to be displayed.
 * @param {Object} props.helpfulTextStyle - The additional style for the helpful text.
 * @param {Object} props.sx - The additional style for the component.
 * @returns {JSX.Element | null} The rendered helpful text component.
 */
const FormHelpfulText = ({
  helpfulText,
  helpfulTextStyle,
  sx
}) => {
  if (!helpfulText) return null;
  return jsxRuntimeExports.jsx(material.Typography, {
    color: "#9792B5",
    "data-testid": `${helpfulText.replace(/\s+/g, '-').toLowerCase()}-error`,
    fontSize: 12,
    fontWeight: 400,
    sx: {
      mt: 0.5,
      ...sx
    },
    ...helpfulTextStyle,
    children: helpfulText
  });
};

/**
 * A customizable input component.
 *
 * @component
 * @example
 * // Usage:
 * <Input
 *   errorMessage="Invalid input"
 *   dataTestId="input-field"
 *   onBlur={handleBlur}
 *   onFocus={handleFocus}
 *   sx={{ marginTop: '10px' }}
 *   // ...other props
 * />
 *
 * @param {string} errorMessage - The error message to display when the input is invalid.
 * @param {string} dataTestId - The data-testid attribute value for testing purposes.
 * @param {Function} onBlur - The event handler for the blur event.
 * @param {Function} onFocus - The event handler for the focus event.
 * @param {Object} sx - The custom styles to apply to the input component.
 * @param {any} rest - The remaining props to be passed to the input component.
 * @returns {JSX.Element} The rendered Input component.
 */
const Input$2 = React$1.forwardRef(({
  errorMessage,
  dataTestId,
  onBlur,
  onFocus,
  sx,
  ...rest
}, ref) => {
  const id = React$1.useId();
  const inputRef = React$1.useRef(null);
  const handleFocus = React$1.useCallback(e => {
    onFocus?.(e);
    inputRef.current?.focus();
  }, [onFocus]);
  const handleBlur = React$1.useCallback(e => {
    onBlur?.(e);
    inputRef.current?.blur();
  }, [onBlur]);
  React$1.useImperativeHandle(ref, () => ({
    focus: handleFocus,
    blur: handleBlur,
    ...inputRef.current
  }), [handleBlur, handleFocus]);
  return jsxRuntimeExports.jsx(material.InputBase, {
    id: id,
    inputProps: {
      'data-testid': dataTestId
    },
    inputRef: inputRef,
    sx: {
      backgroundColor: errorMessage ? 'inputRed' : 'white',
      border: 1,
      borderColor: errorMessage ? 'red' : 'secondaryBlue',
      borderRadius: 50,
      padding: '8px 16px',
      width: '100%',
      '& input.Mui-disabled': {
        WebkitTextFillColor: '#4C495B'
      },
      '&.Mui-disabled': {
        backgroundColor: '#F5F5F8',
        borderColor: '#9792B5'
      },
      ...sx
    },
    ...rest
  });
});

/**
 * Renders a loader component with an optional size.
 *
 * @param {Object} props - The component props.
 * @param {number} props.size - The size of the loader component. Default is 100.
 * @returns {JSX.Element} The loader component.
 */
const Loader = ({
  size = 100
}) => jsxRuntimeExports.jsx("div", {
  style: {
    width: size,
    height: size,
    margin: '0 auto'
  },
  children: jsxRuntimeExports.jsx("img", {
    src: ICONS.loaderIcon,
    style: {
      animation: `spin 2s linear infinite`
    },
    alt: "loader"
  })
});

/**
 * Radio component represents a radio button input.
 *
 * @deprecated This component is deprecated in favor of replacing it with `@mui/material/Radio`.
 *
 * @component
 * @example
 * <Radio
 *   isChecked={true}
 *   name="radioOption"
 *   setValue={handleSetValue}
 *   title="Option 1"
 *   value="option1"
 *   dataTestId="radioOption1"
 *   register={register}
 *   disabled={false}
 * />
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isChecked - Indicates whether the radio button is checked.
 * @param {string} props.name - The name of the radio button.
 * @param {Function} props.setValue - The function to set the value of the radio button.
 * @param {string} props.title - The title of the radio button.
 * @param {string} props.value - The value of the radio button.
 * @param {string} props.dataTestId - The data-testid attribute value for testing purposes.
 * @param {Function} props.register - The function to register the radio button with a form library.
 * @param {boolean} props.disabled - Indicates whether the radio button is disabled.
 * @returns {JSX.Element} The rendered Radio component.
 */
const Radio = ({
  ...props
}) => {
  const {
    isChecked,
    name,
    setValue,
    title,
    value,
    dataTestId,
    register,
    disabled
  } = props;
  const handleClick = () => {
    setValue(name, value);
  };
  return jsxRuntimeExports.jsxs(material.Box, {
    "data-testid": dataTestId,
    onClick: () => {
      if (!disabled) handleClick();
    },
    borderRadius: isChecked ? '15px' : '12px',
    p: isChecked ? '2px' : 0,
    border: isChecked ? 2 : 0,
    borderColor: isChecked ? 'specialCyanBorder' : undefined,
    sx: [{
      boxShadow: voltaire.shadows[1],
      '&:hover': {
        color: 'blue',
        cursor: disabled ? 'default' : 'pointer'
      }
    }],
    children: [jsxRuntimeExports.jsx("input", {
      type: "radio",
      value: value,
      ...register(name),
      style: {
        display: 'none'
      },
      checked: isChecked
    }), jsxRuntimeExports.jsx(material.Box, {
      borderRadius: "12px",
      bgcolor: isChecked ? 'specialCyan' : 'white',
      py: 1.5,
      children: jsxRuntimeExports.jsx(Typography, {
        variant: "body1",
        sx: {
          textAlign: 'center',
          color: isChecked ? 'white' : 'textBlack'
        },
        children: title
      })
    })]
  });
};

/**
 * A component that adds spacing in the x and y directions.
 *
 * @param {number} x - The amount of horizontal spacing to add.
 * @param {number} y - The amount of vertical spacing to add.
 * @returns {JSX.Element} - The spacer component.
 */
const Spacer = ({
  x,
  y
}) => jsxRuntimeExports.jsx(material.Box, {
  pt: y,
  pr: x
});

/**
 * Represents a custom styled tab component.
 */
const Tab = material.styled(props => jsxRuntimeExports.jsx(material.Tab, {
  disableRipple: true,
  ...props
}))(() => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 16,
  color: '#242232',
  '&.Mui-selected': {
    color: '#FF640A',
    fontWeight: 500
  }
}));

const TextAreaBase = material.styled(material.TextareaAutosize)(() => `
  font-family: "Poppins";
  font-weight: 400;
    ::placeholder {
      font-family: "Poppins";
      font-weight: 400;
      color: #a6a6a6;
    }
    `);
/**
 * Represents a textarea input component.
 *
 * @deprecated This component is deprecated in favor of replacing it with `@mui/material/TextareaAutosize`.
 *
 * @component
 * @example
 * ```tsx
 * <TextArea
 *   errorMessage="Invalid input"
 *   maxLength={500}
 *   onBlur={handleBlur}
 *   onFocus={handleFocus}
 *   isModifiedLayout={true}
 *   // other props
 * />
 * ```
 */
const TextArea$2 = React$1.forwardRef(({
  errorMessage,
  maxLength = 500,
  onBlur,
  onFocus,
  isModifiedLayout,
  ...props
}, ref) => {
  const {
    isMobile
  } = useScreenDimension();
  const textAraeRef = React$1.useRef(null);
  const handleFocus = React$1.useCallback(e => {
    onFocus?.(e);
    textAraeRef.current?.focus();
  }, [onFocus]);
  const handleBlur = React$1.useCallback(e => {
    onBlur?.(e);
    textAraeRef.current?.blur();
  }, [onBlur]);
  React$1.useImperativeHandle(ref, () => ({
    focus: handleFocus,
    blur: handleBlur,
    ...textAraeRef.current
  }), [handleBlur, handleFocus]);
  const getTexAreaHeight = () => {
    if (isModifiedLayout && isMobile) return '312px';
    if (isModifiedLayout) return '208px';
    if (isMobile) return '104px';
    return '128px';
  };
  return jsxRuntimeExports.jsx(TextAreaBase, {
    style: {
      border: `1px solid ${errorMessage ? 'red' : '#6F99FF'}`,
      backgroundColor: errorMessage ? '#FAEAEB' : 'white',
      borderRadius: '24px',
      height: getTexAreaHeight(),
      outline: 'none',
      padding: '12px 14px',
      resize: 'none'
    },
    maxLength: maxLength,
    ref: textAraeRef,
    sx: {
      fontSize: isModifiedLayout ? '12px' : 'auto',
      '&::placeholder': {
        fontSize: isModifiedLayout ? '12px' : '16px'
      }
    },
    ...props
  });
});

function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React$1.createContext(null);

var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) forceReflow(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      React$1.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : React$1.cloneElement(React$1.Children.only(children), childProps))
    );
  };

  return Transition;
}(React$1.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

const _excluded$5 = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};

/*
 TODO v6: remove
 Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 */
const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);

/**
 * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
 * [Popover](/material-ui/react-popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow = /*#__PURE__*/React__namespace.forwardRef(function Grow(props, ref) {
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = 'auto',
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const timer = useTimeout();
  const autoTimeout = React__namespace.useRef();
  const theme = useTheme$1();
  const nodeRef = React__namespace.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(',');
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(',');
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends$1({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/React__namespace.cloneElement(children, _extends$1({
        style: _extends$1({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
process.env.NODE_ENV !== "production" ? Grow.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: PropTypes.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: PropTypes.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string
  }), PropTypes.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntered: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  onExiting: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.shape({
    appear: PropTypes.number,
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : void 0;
Grow.muiSupportAuto = true;

var useThemeWithoutDefault = {};

Object.defineProperty(useThemeWithoutDefault, "__esModule", {
  value: true
});
var default_1$5 = useThemeWithoutDefault.default = void 0;
var React = _interopRequireWildcard(React$1);
var _styledEngine = require$$1;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = React.useContext(_styledEngine.ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
default_1$5 = useThemeWithoutDefault.default = useTheme;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement$1(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement$1(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement$1(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round$1 = Math.round;

function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement$1(element)) {
    scaleX = element.offsetWidth > 0 ? round$1(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round$1(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement$1(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement$1(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement$1(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round$1(x * dpr) / dpr || 0,
    y: round$1(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement$1(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement$1(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement$1(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round$1(rect.width) / element.offsetWidth || 1;
  var scaleY = round$1(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement$1(offsetParent);
  var offsetParentIsScaled = isHTMLElement$1(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement$1(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/material-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/material-ui/api/portal/)
 */
const Portal = /*#__PURE__*/React__namespace.forwardRef(function Portal(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React__namespace.useState(null);
  // @ts-expect-error TODO upstream fix
  const handleRef = useForkRef( /*#__PURE__*/React__namespace.isValidElement(children) ? children.ref : null, forwardedRef);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return undefined;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if ( /*#__PURE__*/React__namespace.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /*#__PURE__*/React__namespace.cloneElement(children, newProps);
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(React__namespace.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/jsxRuntimeExports.jsx(React__namespace.Fragment, {
    children: mountNode ? /*#__PURE__*/ReactDOM__namespace.createPortal(children, mountNode) : mountNode
  });
});
process.env.NODE_ENV !== "production" ? Portal.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: PropTypes.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool
} : void 0;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  Portal['propTypes' + ''] = exactProp(Portal.propTypes);
}

function getPopperUtilityClass(slot) {
  return generateUtilityClass('MuiPopper', slot);
}
generateUtilityClasses('MuiPopper', ['root']);

const _excluded$4 = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
  _excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function flipPlacement(placement, direction) {
  if (direction === 'ltr') {
    return placement;
  }
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== undefined;
}
function isVirtualElement(element) {
  return !isHTMLElement(element);
}
const useUtilityClasses$3 = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/React__namespace.forwardRef(function PopperTooltip(props, forwardedRef) {
  var _slots$root;
  const {
      anchorEl,
      children,
      direction,
      disablePortal,
      modifiers,
      open,
      placement: initialPlacement,
      popperOptions,
      popperRef: popperRefProp,
      slotProps = {},
      slots = {},
      TransitionProps
      // @ts-ignore internal logic
      // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const tooltipRef = React__namespace.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = React__namespace.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = React__namespace.useRef(handlePopperRef);
  useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  React__namespace.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */
  const [placement, setPlacement] = React__namespace.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = React__namespace.useState(resolveAnchorEl(anchorEl));
  React__namespace.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  React__namespace.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect(() => {
    if (!resolvedAnchorElement || !open) {
      return undefined;
    }
    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };
    if (process.env.NODE_ENV !== 'production') {
      if (resolvedAnchorElement && isHTMLElement(resolvedAnchorElement) && resolvedAnchorElement.nodeType === 1) {
        const box = resolvedAnchorElement.getBoundingClientRect();
        if (process.env.NODE_ENV !== 'test' && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(['MUI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      }
    }
    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = createPopper(resolvedAnchorElement, tooltipRef.current, _extends$1({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement: placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = useUtilityClasses$3(props);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: 'tooltip',
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /*#__PURE__*/jsxRuntimeExports.jsx(Root, _extends$1({}, rootProps, {
    children: typeof children === 'function' ? children(childProps) : children
  }));
});

/**
 * @ignore - internal component.
 */
const Popper$1 = /*#__PURE__*/React__namespace.forwardRef(function Popper(props, forwardedRef) {
  const {
      anchorEl,
      children,
      container: containerProp,
      direction = 'ltr',
      disablePortal = false,
      keepMounted = false,
      modifiers,
      open,
      placement = 'bottom',
      popperOptions = defaultPopperOptions,
      popperRef,
      style,
      transition = false,
      slotProps = {},
      slots = {}
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded2);
  const [exited, setExited] = React__namespace.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : undefined;
  return /*#__PURE__*/jsxRuntimeExports.jsx(Portal, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/jsxRuntimeExports.jsx(PopperTooltip, _extends$1({
      anchorEl: anchorEl,
      direction: direction,
      disablePortal: disablePortal,
      modifiers: modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement: placement,
      popperOptions: popperOptions,
      popperRef: popperRef,
      slotProps: slotProps,
      slots: slots
    }, other, {
      style: _extends$1({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children: children
    }))
  });
});
process.env.NODE_ENV !== "production" ? Popper$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: chainPropTypes(PropTypes.oneOfType([HTMLElementType, PropTypes.object, PropTypes.func]), props => {
    if (props.open) {
      const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
      if (resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) && resolvedAnchorEl.nodeType === 1) {
        const box = resolvedAnchorEl.getBoundingClientRect();
        if (process.env.NODE_ENV !== 'test' && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['MUI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.getBoundingClientRect !== 'function' || isVirtualElement(resolvedAnchorEl) && resolvedAnchorEl.contextElement != null && resolvedAnchorEl.contextElement.nodeType !== 1) {
        return new Error(['MUI: The `anchorEl` prop provided to the component is invalid.', 'It should be an HTML element instance or a virtualElement ', '(https://popper.js.org/docs/v2/virtual-elements/).'].join('\n'));
      }
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: PropTypes.oneOf(['ltr', 'rtl']),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.object,
    effect: PropTypes.func,
    enabled: PropTypes.bool,
    fn: PropTypes.func,
    name: PropTypes.any,
    options: PropTypes.object,
    phase: PropTypes.oneOf(['afterMain', 'afterRead', 'afterWrite', 'beforeMain', 'beforeRead', 'beforeWrite', 'main', 'read', 'write']),
    requires: PropTypes.arrayOf(PropTypes.string),
    requiresIfExists: PropTypes.arrayOf(PropTypes.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: PropTypes.shape({
    modifiers: PropTypes.array,
    onFirstUpdate: PropTypes.func,
    placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
    strategy: PropTypes.oneOf(['absolute', 'fixed'])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: PropTypes.bool
} : void 0;

const _excluded$3 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"];
const PopperRoot = styled(Popper$1, {
  name: 'MuiPopper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 * - [Popper](https://mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/material-ui/api/popper/)
 */
const Popper = /*#__PURE__*/React__namespace.forwardRef(function Popper(inProps, ref) {
  var _slots$root;
  const theme = default_1$5();
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiPopper'
  });
  const {
      anchorEl,
      component,
      components,
      componentsProps,
      container,
      disablePortal,
      keepMounted,
      modifiers,
      open,
      placement,
      popperOptions,
      popperRef,
      transition,
      slots,
      slotProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const RootComponent = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components == null ? void 0 : components.Root;
  const otherProps = _extends$1({
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition
  }, other);
  return /*#__PURE__*/jsxRuntimeExports.jsx(PopperRoot, _extends$1({
    as: component,
    direction: theme == null ? void 0 : theme.direction,
    slots: {
      root: RootComponent
    },
    slotProps: slotProps != null ? slotProps : componentsProps
  }, otherProps, {
    ref: ref
  }));
});
process.env.NODE_ENV !== "production" ? Popper.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.object, PropTypes.func]),
  /**
   * Popper render function or node.
   */
  children: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.node, PropTypes.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Root: PropTypes.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: PropTypes.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.object,
    effect: PropTypes.func,
    enabled: PropTypes.bool,
    fn: PropTypes.func,
    name: PropTypes.any,
    options: PropTypes.object,
    phase: PropTypes.oneOf(['afterMain', 'afterRead', 'afterWrite', 'beforeMain', 'beforeRead', 'beforeWrite', 'main', 'read', 'write']),
    requires: PropTypes.arrayOf(PropTypes.string),
    requiresIfExists: PropTypes.arrayOf(PropTypes.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: PropTypes.shape({
    modifiers: PropTypes.array,
    onFirstUpdate: PropTypes.func,
    placement: PropTypes.oneOf(['auto-end', 'auto-start', 'auto', 'bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
    strategy: PropTypes.oneOf(['absolute', 'fixed'])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: refType,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: PropTypes.shape({
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    root: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: PropTypes.bool
} : void 0;

function getTooltipUtilityClass(slot) {
  return generateUtilityClass('MuiTooltip', slot);
}
const tooltipClasses = generateUtilityClasses('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);

const _excluded$2 = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const useUtilityClasses$2 = ownerState => {
  const {
    classes,
    disableInteractive,
    arrow,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ['popper', !disableInteractive && 'popperInteractive', arrow && 'popperArrow'],
    tooltip: ['tooltip', arrow && 'tooltipArrow', touch && 'touch', `tooltipPlacement${capitalize$1(placement.split('-')[0])}`],
    arrow: ['arrow']
  };
  return composeClasses(slots, getTooltipUtilityClass, classes);
};
const TooltipPopper = styled(Popper, {
  name: 'MuiTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose];
  }
})(({
  theme,
  ownerState,
  open
}) => _extends$1({
  zIndex: (theme.vars || theme).zIndex.tooltip,
  pointerEvents: 'none'
}, !ownerState.disableInteractive && {
  pointerEvents: 'auto'
}, !open && {
  pointerEvents: 'none'
}, ownerState.arrow && {
  [`&[data-popper-placement*="bottom"] .${tooltipClasses.arrow}`]: {
    top: 0,
    marginTop: '-0.71em',
    '&::before': {
      transformOrigin: '0 100%'
    }
  },
  [`&[data-popper-placement*="top"] .${tooltipClasses.arrow}`]: {
    bottom: 0,
    marginBottom: '-0.71em',
    '&::before': {
      transformOrigin: '100% 0'
    }
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses.arrow}`]: _extends$1({}, !ownerState.isRtl ? {
    left: 0,
    marginLeft: '-0.71em'
  } : {
    right: 0,
    marginRight: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '100% 100%'
    }
  }),
  [`&[data-popper-placement*="left"] .${tooltipClasses.arrow}`]: _extends$1({}, !ownerState.isRtl ? {
    right: 0,
    marginRight: '-0.71em'
  } : {
    left: 0,
    marginLeft: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '0 0'
    }
  })
}));
const TooltipTooltip = styled('div', {
  name: 'MuiTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles[`tooltipPlacement${capitalize$1(ownerState.placement.split('-')[0])}`]];
  }
})(({
  theme,
  ownerState
}) => _extends$1({
  backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : alpha_1(theme.palette.grey[700], 0.92),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  color: (theme.vars || theme).palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: '4px 8px',
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: 'break-word',
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.arrow && {
  position: 'relative',
  margin: 0
}, ownerState.touch && {
  padding: '8px 16px',
  fontSize: theme.typography.pxToRem(14),
  lineHeight: `${round(16 / 14)}em`,
  fontWeight: theme.typography.fontWeightRegular
}, {
  [`.${tooltipClasses.popper}[data-popper-placement*="left"] &`]: _extends$1({
    transformOrigin: 'right center'
  }, !ownerState.isRtl ? _extends$1({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  }) : _extends$1({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  })),
  [`.${tooltipClasses.popper}[data-popper-placement*="right"] &`]: _extends$1({
    transformOrigin: 'left center'
  }, !ownerState.isRtl ? _extends$1({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  }) : _extends$1({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  })),
  [`.${tooltipClasses.popper}[data-popper-placement*="top"] &`]: _extends$1({
    transformOrigin: 'center bottom',
    marginBottom: '14px'
  }, ownerState.touch && {
    marginBottom: '24px'
  }),
  [`.${tooltipClasses.popper}[data-popper-placement*="bottom"] &`]: _extends$1({
    transformOrigin: 'center top',
    marginTop: '14px'
  }, ownerState.touch && {
    marginTop: '24px'
  })
}));
const TooltipArrow = styled('span', {
  name: 'MuiTooltip',
  slot: 'Arrow',
  overridesResolver: (props, styles) => styles.arrow
})(({
  theme
}) => ({
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  height: '0.71em' /* = width / sqrt(2) = (length of the hypotenuse) */,
  boxSizing: 'border-box',
  color: theme.vars ? theme.vars.palette.Tooltip.bg : alpha_1(theme.palette.grey[700], 0.9),
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    transform: 'rotate(45deg)'
  }
}));
let hystersisOpen = false;
const hystersisTimer = new Timeout();
let cursorPosition = {
  x: 0,
  y: 0
};
function composeEventHandler(handler, eventHandler) {
  return (event, ...params) => {
    if (eventHandler) {
      eventHandler(event, ...params);
    }
    handler(event, ...params);
  };
}

// TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.
const Tooltip$1 = /*#__PURE__*/React__namespace.forwardRef(function Tooltip(inProps, ref) {
  var _ref, _slots$popper, _ref2, _ref3, _slots$transition, _ref4, _slots$tooltip, _ref5, _slots$arrow, _slotProps$popper, _ref6, _slotProps$popper2, _slotProps$transition, _slotProps$tooltip, _ref7, _slotProps$tooltip2, _slotProps$arrow, _ref8, _slotProps$arrow2;
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiTooltip'
  });
  const {
      arrow = false,
      children: childrenProp,
      components = {},
      componentsProps = {},
      describeChild = false,
      disableFocusListener = false,
      disableHoverListener = false,
      disableInteractive: disableInteractiveProp = false,
      disableTouchListener = false,
      enterDelay = 100,
      enterNextDelay = 0,
      enterTouchDelay = 700,
      followCursor = false,
      id: idProp,
      leaveDelay = 0,
      leaveTouchDelay = 1500,
      onClose,
      onOpen,
      open: openProp,
      placement = 'bottom',
      PopperComponent: PopperComponentProp,
      PopperProps = {},
      slotProps = {},
      slots = {},
      title,
      TransitionComponent: TransitionComponentProp = Grow,
      TransitionProps
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$2);

  // to prevent runtime errors, developers will need to provide a child as a React element anyway.
  const children = /*#__PURE__*/React__namespace.isValidElement(childrenProp) ? childrenProp : /*#__PURE__*/jsxRuntimeExports.jsx("span", {
    children: childrenProp
  });
  const theme = useTheme$1();
  const isRtl = useRtl();
  const [childNode, setChildNode] = React__namespace.useState();
  const [arrowRef, setArrowRef] = React__namespace.useState(null);
  const ignoreNonTouchEvents = React__namespace.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = useTimeout();
  const enterTimer = useTimeout();
  const leaveTimer = useTimeout();
  const touchTimer = useTimeout();
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: 'Tooltip',
    state: 'open'
  });
  let open = openState;
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {
      current: isControlled
    } = React__namespace.useRef(openProp !== undefined);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useEffect(() => {
      if (childNode && childNode.disabled && !isControlled && title !== '' && childNode.tagName.toLowerCase() === 'button') {
        console.error(['MUI: You are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Add a simple wrapper element, such as a `span`.'].join('\n'));
      }
    }, [title, childNode, isControlled]);
  }
  const id = useId(idProp);
  const prevUserSelect = React__namespace.useRef();
  const stopTouchInteraction = useEventCallback(() => {
    if (prevUserSelect.current !== undefined) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }
    touchTimer.clear();
  });
  React__namespace.useEffect(() => stopTouchInteraction, [stopTouchInteraction]);
  const handleOpen = event => {
    hystersisTimer.clear();
    hystersisOpen = true;

    // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.
    setOpenState(true);
    if (onOpen && !open) {
      onOpen(event);
    }
  };
  const handleClose = useEventCallback(
  /**
   * @param {React.SyntheticEvent | Event} event
   */
  event => {
    hystersisTimer.start(800 + leaveDelay, () => {
      hystersisOpen = false;
    });
    setOpenState(false);
    if (onClose && open) {
      onClose(event);
    }
    closeTimer.start(theme.transitions.duration.shortest, () => {
      ignoreNonTouchEvents.current = false;
    });
  });
  const handleMouseOver = event => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    }

    // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).
    if (childNode) {
      childNode.removeAttribute('title');
    }
    enterTimer.clear();
    leaveTimer.clear();
    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.start(hystersisOpen ? enterNextDelay : enterDelay, () => {
        handleOpen(event);
      });
    } else {
      handleOpen(event);
    }
  };
  const handleMouseLeave = event => {
    enterTimer.clear();
    leaveTimer.start(leaveDelay, () => {
      handleClose(event);
    });
  };
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.
  const [, setChildIsFocusVisible] = React__namespace.useState(false);
  const handleBlur = event => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleMouseLeave(event);
    }
  };
  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleMouseOver(event);
    }
  };
  const detectTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;
    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };
  const handleTouchStart = event => {
    detectTouchStart(event);
    leaveTimer.clear();
    closeTimer.clear();
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect;
    // Prevent iOS text selection on long-tap.
    document.body.style.WebkitUserSelect = 'none';
    touchTimer.start(enterTouchDelay, () => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleMouseOver(event);
    });
  };
  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }
    stopTouchInteraction();
    leaveTimer.start(leaveTouchDelay, () => {
      handleClose(event);
    });
  };
  React__namespace.useEffect(() => {
    if (!open) {
      return undefined;
    }

    /**
     * @param {KeyboardEvent} nativeEvent
     */
    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);
  const handleRef = useForkRef(children.ref, focusVisibleRef, setChildNode, ref);

  // There is no point in displaying an empty tooltip.
  // So we exclude all falsy values, except 0, which is valid.
  if (!title && title !== 0) {
    open = false;
  }
  const popperRef = React__namespace.useRef();
  const handleMouseMove = event => {
    const childrenProps = children.props;
    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }
    cursorPosition = {
      x: event.clientX,
      y: event.clientY
    };
    if (popperRef.current) {
      popperRef.current.update();
    }
  };
  const nameOrDescProps = {};
  const titleIsString = typeof title === 'string';
  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }
  const childrenProps = _extends$1({}, nameOrDescProps, other, children.props, {
    className: clsx(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});
  if (process.env.NODE_ENV !== 'production') {
    childrenProps['data-mui-internal-clone-element'] = true;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    React__namespace.useEffect(() => {
      if (childNode && !childNode.getAttribute('data-mui-internal-clone-element')) {
        console.error(['MUI: The `children` component of the Tooltip is not forwarding its props correctly.', 'Please make sure that props are spread on the same element that the ref is applied to.'].join('\n'));
      }
    }, [childNode]);
  }
  const interactiveWrapperListeners = {};
  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }
  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);
    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }
  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);
    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (children.props.title) {
      console.error(['MUI: You have provided a `title` prop to the child of <Tooltip />.', `Remove this title prop \`${children.props.title}\` or the Tooltip component.`].join('\n'));
    }
  }
  const popperOptions = React__namespace.useMemo(() => {
    var _PopperProps$popperOp;
    let tooltipModifiers = [{
      name: 'arrow',
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];
    if ((_PopperProps$popperOp = PopperProps.popperOptions) != null && _PopperProps$popperOp.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }
    return _extends$1({}, PopperProps.popperOptions, {
      modifiers: tooltipModifiers
    });
  }, [arrowRef, PopperProps]);
  const ownerState = _extends$1({}, props, {
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  });
  const classes = useUtilityClasses$2(ownerState);
  const PopperComponent = (_ref = (_slots$popper = slots.popper) != null ? _slots$popper : components.Popper) != null ? _ref : TooltipPopper;
  const TransitionComponent = (_ref2 = (_ref3 = (_slots$transition = slots.transition) != null ? _slots$transition : components.Transition) != null ? _ref3 : TransitionComponentProp) != null ? _ref2 : Grow;
  const TooltipComponent = (_ref4 = (_slots$tooltip = slots.tooltip) != null ? _slots$tooltip : components.Tooltip) != null ? _ref4 : TooltipTooltip;
  const ArrowComponent = (_ref5 = (_slots$arrow = slots.arrow) != null ? _slots$arrow : components.Arrow) != null ? _ref5 : TooltipArrow;
  const popperProps = appendOwnerState(PopperComponent, _extends$1({}, PopperProps, (_slotProps$popper = slotProps.popper) != null ? _slotProps$popper : componentsProps.popper, {
    className: clsx(classes.popper, PopperProps == null ? void 0 : PopperProps.className, (_ref6 = (_slotProps$popper2 = slotProps.popper) != null ? _slotProps$popper2 : componentsProps.popper) == null ? void 0 : _ref6.className)
  }), ownerState);
  const transitionProps = appendOwnerState(TransitionComponent, _extends$1({}, TransitionProps, (_slotProps$transition = slotProps.transition) != null ? _slotProps$transition : componentsProps.transition), ownerState);
  const tooltipProps = appendOwnerState(TooltipComponent, _extends$1({}, (_slotProps$tooltip = slotProps.tooltip) != null ? _slotProps$tooltip : componentsProps.tooltip, {
    className: clsx(classes.tooltip, (_ref7 = (_slotProps$tooltip2 = slotProps.tooltip) != null ? _slotProps$tooltip2 : componentsProps.tooltip) == null ? void 0 : _ref7.className)
  }), ownerState);
  const tooltipArrowProps = appendOwnerState(ArrowComponent, _extends$1({}, (_slotProps$arrow = slotProps.arrow) != null ? _slotProps$arrow : componentsProps.arrow, {
    className: clsx(classes.arrow, (_ref8 = (_slotProps$arrow2 = slotProps.arrow) != null ? _slotProps$arrow2 : componentsProps.arrow) == null ? void 0 : _ref8.className)
  }), ownerState);
  return /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
    children: [/*#__PURE__*/React__namespace.cloneElement(children, childrenProps), /*#__PURE__*/jsxRuntimeExports.jsx(PopperComponent, _extends$1({
      as: PopperComponentProp != null ? PopperComponentProp : Popper,
      placement: placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: cursorPosition.y,
          left: cursorPosition.x,
          right: cursorPosition.x,
          bottom: cursorPosition.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef: popperRef,
      open: childNode ? open : false,
      id: id,
      transition: true
    }, interactiveWrapperListeners, popperProps, {
      popperOptions: popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, _extends$1({
        timeout: theme.transitions.duration.shorter
      }, TransitionPropsInner, transitionProps, {
        children: /*#__PURE__*/jsxRuntimeExports.jsxs(TooltipComponent, _extends$1({}, tooltipProps, {
          children: [title, arrow ? /*#__PURE__*/jsxRuntimeExports.jsx(ArrowComponent, _extends$1({}, tooltipArrowProps, {
            ref: setArrowRef
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" ? Tooltip$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: PropTypes.bool,
  /**
   * Tooltip reference element.
   */
  children: elementAcceptingRef.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: PropTypes.shape({
    Arrow: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Tooltip: PropTypes.elementType,
    Transition: PropTypes.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: PropTypes.shape({
    arrow: PropTypes.object,
    popper: PropTypes.object,
    tooltip: PropTypes.object,
    transition: PropTypes.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: PropTypes.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: PropTypes.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: PropTypes.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: PropTypes.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: PropTypes.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: PropTypes.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: PropTypes.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: PropTypes.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: PropTypes.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: PropTypes.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: PropTypes.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: PropTypes.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: PropTypes.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: PropTypes.func,
  /**
   * If `true`, the component is shown.
   */
  open: PropTypes.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: PropTypes.elementType,
  /**
   * Props applied to the [`Popper`](/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: PropTypes.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: PropTypes.shape({
    arrow: PropTypes.object,
    popper: PropTypes.object,
    tooltip: PropTypes.object,
    transition: PropTypes.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: PropTypes.shape({
    arrow: PropTypes.elementType,
    popper: PropTypes.elementType,
    tooltip: PropTypes.elementType,
    transition: PropTypes.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: PropTypes.node,
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: PropTypes.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: PropTypes.object
} : void 0;

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const _excluded$1 = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
const useUtilityClasses$1 = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize$1(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize$1(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends$1({
  margin: 0
}, ownerState.variant === 'inherit' && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: 'inherit'
}, ownerState.variant !== 'inherit' && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
};

// TODO v6: deprecate these color values in v5.x and remove the transformation in v6
const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};
const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};
const Typography$1 = /*#__PURE__*/React__namespace.forwardRef(function Typography(inProps, ref) {
  const themeProps = useDefaultProps({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends$1({}, themeProps, {
    color
  }));
  const {
      align = 'inherit',
      className,
      component,
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      variantMapping = defaultVariantMapping
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = _extends$1({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsxRuntimeExports.jsx(TypographyRoot, _extends$1({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: clsx(classes.root, className)
  }, other));
});
process.env.NODE_ENV !== "production" ? Typography$1.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: PropTypes.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), PropTypes.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: PropTypes /* @typescript-to-proptypes-ignore */.object
} : void 0;

const StyledTooltip = material.styled(({
  className,
  ...props
}) =>
// eslint-disable-next-line react/jsx-pascal-case
jsxRuntimeExports.jsx(Tooltip$1, {
  ...props,
  arrow: true,
  classes: {
    popper: className
  }
}))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgb(36, 34, 50)'
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(36, 34, 50)',
    padding: 12
  }
}));
/**
 * Renders a tooltip component with optional heading and paragraphs.
 *
 * @param {TooltipProps} props - The props for the Tooltip component.
 * @returns {JSX.Element} The rendered Tooltip component.
 */
const Tooltip = ({
  heading,
  paragraphOne,
  paragraphTwo,
  ...tooltipProps
}) => jsxRuntimeExports.jsx(StyledTooltip, {
  ...tooltipProps,
  enterTouchDelay: 0,
  leaveTouchDelay: 1000,
  title: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [heading && jsxRuntimeExports.jsx(Typography$1, {
      fontSize: 16,
      fontWeight: 400,
      color: "#FBFBFF",
      children: heading
    }), jsxRuntimeExports.jsxs(Typography$1, {
      mt: 0.5,
      fontSize: 14,
      fontWeight: 400,
      color: "rgb(170, 170, 170)",
      children: [paragraphOne && paragraphOne, paragraphTwo && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx("br", {}), " ", jsxRuntimeExports.jsx("br", {}), paragraphTwo]
      })]
    })]
  })
});

/**
 * A custom Typography component.
 *
 * @deprecated Should be replaced with @mui/material/Typography.
 *
 * @component
 * @example
 * ```tsx
 * <Typography variant="body1" color="primary">
 *   Hello, world!
 * </Typography>
 * ```
 *
 * @param {string} color - The color of the text.
 * @param {string} variant - The variant of the text.
 * @param {ReactNode} children - The content to be displayed inside the Typography component.
 * @returns {JSX.Element} The rendered Typography component.
 */
const Typography = ({
  color,
  variant = 'body1',
  ...props
}) => {
  const fontSize = {
    headline1: 100,
    headline2: 57,
    headline3: 36,
    headline4: 32,
    headline5: 28,
    title1: 24,
    title2: 22,
    body1: 16,
    body2: 14,
    caption: 12
  }[variant];
  const fontWeight = {
    headline1: 600,
    headline2: 700,
    headline3: 400,
    headline4: 600,
    headline5: 500,
    title1: 400,
    title2: 500,
    body1: 600,
    body2: 500,
    caption: 400
  }[variant];
  const lineHeight = {
    headline1: '110px',
    headline2: '57px',
    headline3: '44px',
    headline4: '40px',
    headline5: '36px',
    title1: '32px',
    title2: '28px',
    body1: '24px',
    body2: '20px',
    caption: '16px'
  }[variant];
  return jsxRuntimeExports.jsx(material.Typography, {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    ...props,
    children: props.children
  });
};

/**
 * Renders the contents of a modal.
 *
 * @param {Props} props - The component props.
 * @param {React.ReactNode} props.children - The children to be rendered inside the modal.
 * @returns {JSX.Element} The rendered modal contents.
 */
const ModalContents = ({
  children
}) => {
  const {
    isMobile
  } = useScreenDimension();
  return jsxRuntimeExports.jsx(material.Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: isMobile ? 0 : 3,
    children: children
  });
};

/**
 * Renders the header of a modal.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The content of the header.
 * @param {Object} props.sx - The custom styling for the header.
 * @returns {JSX.Element} The rendered modal header.
 */
const ModalHeader = ({
  children,
  sx
}) => jsxRuntimeExports.jsx(Typography$1, {
  marginBottom: "8px",
  fontSize: "28px",
  fontWeight: "500",
  textAlign: "center",
  sx: sx,
  children: children
});

const BaseWrapper = styled('div')`
  box-shadow: 1px 2px 11px 0px #00123d5e;
  max-height: 90vh;
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  background: #fbfbff;
  border-radius: 24px;
  transform: translate(-50%, -50%);

  ${({
  variant
}) => {
  if (variant === 'modal') {
    return `
        width: 80vw;
        max-width: 510px;
        padding: 52px 24px 34px 24px;
        max-height: 80vh;
        overflow: auto;
      `;
  }
  if (variant === 'popup') {
    return `
        width: 320px;
        height: 320px;
      `;
  }
}}
`;
const CloseButton = styled('img')`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
`;
/**
 * Wrapper component for modals.
 *
 * @component
 * @example
 * ```tsx
 * <ModalWrapper onClose={handleClose}>
 *   <ModalContent />
 * </ModalWrapper>
 * ```
 *
 * @param {React.Ref<HTMLDivElement>} ref - Reference to the underlying HTML div element.
 * @param {Props} props - The component props.
 * @param {React.ReactNode} props.children - The content of the modal.
 * @param {Function} props.onClose - The function to be called when the modal is closed.
 * @param {string} [props.variant='modal'] - The variant of the modal.
 * @param {boolean} [props.hideCloseButton=false] - Whether to hide the close button.
 * @param {string} [props.dataTestId='modal'] - The data-testid attribute for testing purposes.
 * @param {object} [props.sx] - The custom styles for the modal.
 * @returns {JSX.Element} The rendered ModalWrapper component.
 */
const ModalWrapper = React$1.forwardRef(({
  children,
  onClose,
  variant = 'modal',
  hideCloseButton = false,
  dataTestId = 'modal',
  sx
}, ref) => {
  const {
    closeModal
  } = useModal();
  return jsxRuntimeExports.jsxs(BaseWrapper, {
    variant: variant,
    "data-testid": dataTestId,
    sx: sx,
    ref: ref,
    children: [variant !== 'popup' && !hideCloseButton && jsxRuntimeExports.jsx(CloseButton, {
      "data-testid": "close-modal-button",
      alt: "close",
      onClick: callAll(closeModal, onClose),
      src: ICONS.closeIcon
    }), children]
  });
});

/**
 * Renders a breadcrumb component.
 *
 * @param {BreadcrumbsProps} props - The props for the Breadcrumbs component.
 * @param {string} props.elementOne - The label for the first breadcrumb element.
 * @param {string} props.elementOnePath - The path for the first breadcrumb element.
 * @param {string} props.elementTwo - The label for the second breadcrumb element.
 * @param {boolean} props.isDataMissing - Indicates if data is missing.
 * @returns {JSX.Element} The rendered Breadcrumbs component.
 */
const Breadcrumbs = ({
  elementOne,
  elementOnePath,
  elementTwo,
  isDataMissing
}) => {
  const {
    isMobile
  } = useScreenDimension();
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      margin: `2px 0 ${isMobile ? '44px' : '24px'}`
    },
    children: [jsxRuntimeExports.jsx(reactRouterDom.NavLink, {
      to: elementOnePath,
      style: {
        textDecorationColor: '#0033AD'
      },
      children: jsxRuntimeExports.jsx(Typography, {
        color: "primary",
        variant: "caption",
        sx: {
          whiteSpace: 'nowrap'
        },
        children: elementOne
      })
    }), jsxRuntimeExports.jsx(Divider, {
      orientation: "vertical",
      flexItem: true,
      color: "textBlack",
      sx: {
        margin: '0 6px'
      }
    }), jsxRuntimeExports.jsx(Typography, {
      variant: "caption",
      sx: {
        fontWeight: 500,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      },
      children: isDataMissing && getMetadataDataMissingStatusTranslation(isDataMissing) || elementTwo
    })]
  });
};

/**
 * Renders a component for filtering data actions.
 *
 * @component
 * @param {Object} Props - The component props.
 * @param {string[]} Props.chosenFilters - The currently chosen filters.
 * @param {Function} Props.setChosenFilters - A function to update the chosen filters.
 * @param {Function} Props.closeFilters - A function to close the filters.
 * @param {Object[]} Props.options - The available filter options.
 * @param {string} Props.title - The title of the filter component.
 * @returns {JSX.Element} The rendered component.
 */
const DataActionsFilters = ({
  chosenFilters,
  setChosenFilters,
  closeFilters,
  options,
  title
}) => {
  const handleFilterChange = React$1.useCallback(e => {
    // TODO: Refine if it is needed to remove this eslint-disable
    // eslint-disable-next-line no-unused-expressions, no-sequences, @typescript-eslint/no-unused-expressions
    e.target.name, e.target.checked;
    let filters = [...chosenFilters];
    if (e.target.checked) {
      filters.push(e.target.name);
    } else {
      filters = filters.filter(str => str !== e.target.name);
    }
    setChosenFilters(filters);
  }, [chosenFilters, setChosenFilters]);
  const {
    isMobile,
    screenWidth
  } = useScreenDimension();
  const wrapperRef = React$1.useRef(null);
  useOnClickOutside(wrapperRef, closeFilters);
  return jsxRuntimeExports.jsxs(material.Box, {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    sx: {
      background: '#FBFBFF',
      boxShadow: '1px 2px 11px 0px #00123D5E',
      borderRadius: '10px',
      padding: '12px 0px',
      width: screenWidth < 850 ? '315px' : '415px',
      zIndex: '1',
      right: isMobile ? '59px' : '115px',
      top: '53px'
    },
    ref: wrapperRef,
    children: [title && jsxRuntimeExports.jsx(material.FormLabel, {
      sx: {
        fontSize: 14,
        fontWeight: 500,
        color: '#9792B5',
        paddingX: '20px'
      },
      children: title
    }), options.map(item => jsxRuntimeExports.jsx(material.Box, {
      paddingX: "20px",
      sx: [{
        '&:hover': {
          bgcolor: '#E6EBF7'
        }
      }],
      bgcolor: chosenFilters?.includes(item.key) ? '#FFF0E7' : 'transparent',
      children: jsxRuntimeExports.jsx(material.FormControlLabel, {
        control: jsxRuntimeExports.jsx(material.Checkbox, {
          inputProps: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            'data-testid': `${item.label.replace(/ /g, '')}-checkbox`
          },
          onChange: handleFilterChange,
          name: item.key,
          checked: chosenFilters?.includes(item.key)
        }),
        label: jsxRuntimeExports.jsx(material.Typography, {
          fontSize: 14,
          fontWeight: 500,
          children: item.label
        })
      })
    }, item.key))]
  });
};

/**
 * Component for sorting data actions.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.chosenSorting - The currently chosen sorting option.
 * @param {Function} props.setChosenSorting - The function to set the chosen sorting option.
 * @param {Function} props.closeSorts - The function to close the sorting options.
 * @param {Array} props.options - The available sorting options.
 * @returns {JSX.Element} The rendered component.
 */
const DataActionsSorting = ({
  chosenSorting,
  setChosenSorting,
  closeSorts,
  options
}) => {
  const wrapperRef = React$1.useRef(null);
  useOnClickOutside(wrapperRef, closeSorts);
  return jsxRuntimeExports.jsx(material.Box, {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    sx: {
      background: '#FBFBFF',
      boxShadow: '1px 2px 11px 0px #00123D5E',
      borderRadius: '10px',
      padding: '12px 0px',
      width: '315px',
      zIndex: '1',
      right: '3px',
      top: '53px'
    },
    ref: wrapperRef,
    children: jsxRuntimeExports.jsxs(material.FormControl, {
      children: [jsxRuntimeExports.jsxs(material.Box, {
        display: "flex",
        justifyContent: "space-between",
        px: "20px",
        children: [jsxRuntimeExports.jsx(material.Typography, {
          sx: {
            fontSize: 14,
            fontWeight: 500,
            color: '#9792B5'
          },
          children: "Sort by"
        }), jsxRuntimeExports.jsx(material.Box, {
          sx: {
            cursor: 'pointer'
          },
          onClick: () => setChosenSorting(''),
          children: jsxRuntimeExports.jsx(material.Typography, {
            fontSize: 14,
            fontWeight: 500,
            color: "primary",
            children: "Clear"
          })
        })]
      }), jsxRuntimeExports.jsx(material.RadioGroup, {
        "aria-labelledby": "demo-controlled-radio-buttons-group",
        name: "controlled-radio-buttons-group",
        value: chosenSorting,
        onChange: e => {
          setChosenSorting(e.target.value);
        },
        children: options.map(item => jsxRuntimeExports.jsx(material.FormControlLabel, {
          sx: [{
            margin: 0,
            px: '20px',
            bgcolor: chosenSorting === item.key ? '#FFF0E7' : 'transparent'
          }, {
            '&:hover': {
              bgcolor: '#E6EBF7'
            }
          }],
          value: item.key,
          control:
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          jsxRuntimeExports.jsx(material.Radio, {
            inputProps: {
              'data-testid': `${item.key}-radio`
            }
          }),
          label: item.label
        }, item.key))
      })]
    })
  });
};

/**
 * Renders a chip component for order actions.
 *
 * @component
 * @param {Props} props - The component props.
 * @returns {JSX.Element} - The rendered chip component.
 */
const OrderActionsChip = props => {
  const {
    isMobile
  } = useScreenDimension();
  const {
    palette: {
      secondary
    }
  } = voltaire;
  const {
    filtersOpen,
    setFiltersOpen = () => {},
    chosenFiltersLength = 0,
    chosenSorting,
    sortOpen,
    setSortOpen,
    isFiltering = true,
    children
  } = props;
  return jsxRuntimeExports.jsxs(material.Box, {
    display: "flex",
    width: "min-content",
    alignItems: "center",
    ml: "8px",
    gap: isMobile ? '8px' : '24px',
    position: "relative",
    sx: {
      alignSelf: 'end'
    },
    children: [isFiltering && jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        ...(!isMobile && {
          background: filtersOpen ? secondary.main : 'transparent',
          borderRadius: '99px',
          padding: '12px 14px'
        })
      },
      onClick: () => {
        setSortOpen(false);
        if (isFiltering) {
          setFiltersOpen(!filtersOpen);
        }
      },
      "data-testid": "filters-button",
      children: [jsxRuntimeExports.jsx("img", {
        alt: "filter",
        src: filtersOpen ? ICONS.filterWhiteIcon : ICONS.filterIcon,
        style: {
          borderRadius: '100%',
          marginRight: '8px',
          overflow: 'visible',
          height: 20,
          width: 20,
          objectFit: 'contain',
          ...(isMobile && {
            background: filtersOpen ? secondary.main : 'transparent',
            padding: '14px',
            marginRight: '0'
          })
        }
      }), !isMobile && jsxRuntimeExports.jsx(Typography, {
        variant: "body1",
        sx: {
          color: filtersOpen ? 'white' : 'primaryBlue',
          fontWeight: 500
        },
        children: "Filter"
      }), !filtersOpen && chosenFiltersLength > 0 && jsxRuntimeExports.jsx(material.Box, {
        sx: {
          alignItems: 'center',
          background: secondary.main,
          borderRadius: '100%',
          color: 'white',
          display: 'flex',
          fontSize: '12px',
          height: '16px',
          justifyContent: 'center',
          position: 'absolute',
          right: '-3px',
          top: '0',
          width: '16px'
        },
        children: jsxRuntimeExports.jsx(Typography, {
          variant: "caption",
          color: "#FFFFFF",
          children: chosenFiltersLength
        })
      })]
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        ...(!isMobile && {
          background: sortOpen ? secondary.main : 'transparent',
          borderRadius: '99px',
          padding: '12px 14px'
        })
      },
      onClick: () => {
        if (isFiltering) {
          setFiltersOpen(false);
        }
        setSortOpen(!sortOpen);
      },
      "data-testid": "sort-button",
      children: [jsxRuntimeExports.jsx("img", {
        alt: "sort",
        src: sortOpen ? ICONS.sortWhiteIcon : ICONS.sortIcon,
        style: {
          borderRadius: '100%',
          marginRight: '8px',
          height: 20,
          width: 20,
          objectFit: 'contain',
          ...(isMobile && {
            background: sortOpen ? secondary.main : 'transparent',
            padding: '14px',
            marginRight: '0'
          })
        }
      }), !isMobile && jsxRuntimeExports.jsx(Typography, {
        variant: "body1",
        sx: {
          color: sortOpen ? 'white' : 'primaryBlue',
          fontWeight: 500,
          whiteSpace: 'nowrap'
        },
        children: chosenSorting ? `Sort by: ${chosenSorting}` : 'Sort'
      })]
    }), children]
  });
};

/**
 * Represents the data actions bar component.
 */
const DataActionsBar = ({
  ...props
}) => {
  const {
    chosenFilters = [],
    chosenFiltersLength,
    chosenSorting,
    closeFilters = () => {},
    closeSorts,
    filterOptions = [],
    filtersOpen,
    filtersTitle,
    isFiltering = true,
    searchText,
    setChosenFilters = () => {},
    setChosenSorting,
    setFiltersOpen,
    setSearchText,
    setSortOpen,
    sortOpen,
    sortOptions = []
  } = props;
  const {
    palette: {
      boxShadow2
    }
  } = voltaire;
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsxs(material.Box, {
      alignItems: "center",
      display: "flex",
      justifyContent: "space-between",
      children: [jsxRuntimeExports.jsx(material.InputBase, {
        inputProps: {
          'data-testid': 'search-input'
        },
        onChange: e => setSearchText(e.target.value),
        placeholder: "Search...",
        value: searchText,
        startAdornment: jsxRuntimeExports.jsx(iconsMaterial.Search, {
          style: {
            color: '#99ADDE',
            height: 16,
            marginRight: 4,
            width: 16
          }
        }),
        sx: {
          bgcolor: 'white',
          border: 1,
          borderColor: 'secondaryBlue',
          borderRadius: 50,
          boxShadow: `2px 2px 20px 0px ${boxShadow2}`,
          fontSize: 11,
          fontWeight: 500,
          height: 48,
          padding: '16px 24px',
          maxWidth: 500
        }
      }), jsxRuntimeExports.jsxs(OrderActionsChip, {
        chosenFiltersLength: chosenFiltersLength,
        filtersOpen: filtersOpen,
        isFiltering: isFiltering,
        setFiltersOpen: setFiltersOpen,
        chosenSorting: chosenSorting,
        setSortOpen: setSortOpen,
        sortOpen: sortOpen,
        children: [filtersOpen && jsxRuntimeExports.jsx(DataActionsFilters, {
          chosenFilters: chosenFilters,
          setChosenFilters: setChosenFilters,
          closeFilters: closeFilters,
          options: filterOptions,
          title: filtersTitle
        }), sortOpen && jsxRuntimeExports.jsx(DataActionsSorting, {
          chosenSorting: chosenSorting,
          setChosenSorting: setChosenSorting,
          closeSorts: closeSorts,
          options: sortOptions
        })]
      })]
    })
  });
};

/**
 * Renders a header component for displaying missing data.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the header.
 * @param {boolean} props.isDataMissing - Indicates whether data is missing.
 * @param {string} props.shareLink - The share link for the header.
 * @param {Object} props.titleStyle - The custom styles for the title.
 * @returns {JSX.Element} The rendered header component.
 */
const DataMissingHeader = ({
  title,
  isDataMissing,
  shareLink,
  titleStyle
}) => jsxRuntimeExports.jsxs(material.Box, {
  sx: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: 2,
    alignItems: 'center',
    mb: 2
  },
  "data-testid": "governance-action-details-card-header",
  children: [jsxRuntimeExports.jsx(material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    children: jsxRuntimeExports.jsx(Typography, {
      sx: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 600,
        ...(isDataMissing && {
          color: 'errorRed'
        }),
        ...titleStyle
      },
      variant: "title2",
      children: isDataMissing && getMetadataDataMissingStatusTranslation(isDataMissing) || title
    })
  }), shareLink && jsxRuntimeExports.jsx(Share, {
    link: shareLink
  })]
});

/**
 * Renders an information box when data is missing for a governance action.
 * @param isDataMissing - The status of the missing data.
 * @param isInProgress - Indicates if the governance action is in progress.
 * @param isSubmitted - Indicates if the governance action has been submitted.
 * @param sx - Additional styling properties for the box.
 * @returns The DataMissingInfoBox component.
 */
const DataMissingInfoBox = ({
  isDataMissing,
  isInProgress,
  isSubmitted,
  sx
}) => {
  const gaMetadataErrorMessage = {
    [MetadataValidationStatus.URL_NOT_FOUND]: 'The data that was originally used when this Governance Action was created has not been found.',
    [MetadataValidationStatus.INVALID_JSONLD]: 'The data that was originally used when this Governance Action was created has been formatted incorrectly.',
    [MetadataValidationStatus.INVALID_HASH]: 'The data that was originally used when this Governance Action was created has changed.',
    [MetadataValidationStatus.INCORRECT_FORMAT]: 'The data that was originally used when this Governance Action was created has been formatted incorrectly.'
  }[isDataMissing];
  const gaMetadataErrorDescription = {
    [MetadataValidationStatus.URL_NOT_FOUND]: 'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that GovTool cannot locate the data on the URL specified when the Governance Action was originally posted.',
    [MetadataValidationStatus.INVALID_JSONLD]: 'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data format as defined by the Cardano community.',
    [MetadataValidationStatus.INVALID_HASH]: 'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data when the Governance Action was originally posted.',
    [MetadataValidationStatus.INCORRECT_FORMAT]: 'GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data format as defined by the Cardano community.'
  }[isDataMissing];
  return isDataMissing && !isSubmitted && !isInProgress ? jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      mb: 4,
      pr: 6,
      ...sx
    },
    children: [jsxRuntimeExports.jsx(Typography, {
      sx: {
        fontSize: '18px',
        fontWeight: 500,
        color: 'errorRed',
        mb: 0.5
      },
      children: gaMetadataErrorMessage
    }), jsxRuntimeExports.jsx(Typography, {
      sx: {
        fontWeight: 400,
        color: 'errorRed',
        mb: 0.5
      },
      children: gaMetadataErrorDescription
    }), jsxRuntimeExports.jsx(material.Link, {
      onClick: () => openInNewTab('https://docs.gov.tools/using-govtool/govtool-functions/dreps/drep-error-conditions'),
      sx: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        lineHeight: '24px',
        cursor: 'pointer'
      },
      children: "Learn more"
    })]
  }) : null;
};

/**
 * Renders the empty state message for the GovernanceActionsCategory component.
 *
 * @param {EmptyStateGovernanceActionsCategoryProps} props - The component props.
 * @param {string} props.category - The category of the governance actions.
 * @param {boolean} props.isSearch - Indicates if the empty state is for a search result.
 * @returns {JSX.Element} The rendered empty state message.
 */
const EmptyStateGovernanceActionsCategory = ({
  category,
  isSearch
}) => jsxRuntimeExports.jsx(Typography, {
  sx: {
    fontWeight: 300,
    py: 4
  },
  children: isSearch ? 'No results for the search.' : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: ["Governance actions with category \u00A0", jsxRuntimeExports.jsx(Typography, {
      sx: {
        display: 'inline',
        fontWeight: 700
      },
      children: getProposalTypeLabel(category ?? '')
    }), "\u00A0 don't exist."]
  })
});

/**
 * Checkbox component.
 *
 * @param errorMessage - The error message to display.
 * @param errorStyles - The styles for the error message.
 * @param helpfulText - The helpful text to display.
 * @param helpfulTextStyle - The styles for the helpful text.
 * @param label - The label for the checkbox.
 * @param labelStyles - The styles for the label.
 * @param layoutStyles - The styles for the layout.
 * @param onChange - The callback function for when the checkbox value changes.
 * @param value - The value of the checkbox.
 * @param rest - Additional props for the Checkbox component.
 * @returns The rendered Checkbox component.
 */
const Checkbox$1 = ({
  errorMessage,
  errorStyles,
  helpfulText,
  helpfulTextStyle,
  label,
  labelStyles,
  layoutStyles,
  onChange,
  value,
  ...rest
}) => {
  const handleValue = React$1.useCallback(() => {
    onChange(!value);
  }, [value, onChange]);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      width: '100%',
      ...layoutStyles
    },
    children: [jsxRuntimeExports.jsxs(material.Box, {
      onClick: handleValue,
      sx: {
        alignItems: 'center',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gridTemplateAreas: '"checkbox label" ". helpfulText"',
        width: 'fit-content'
      },
      children: [jsxRuntimeExports.jsx(Checkbox$2, {
        ...{
          onChange,
          value
        },
        errorMessage: errorMessage,
        ...rest
      }), label && jsxRuntimeExports.jsx(Typography, {
        variant: "caption",
        ...labelStyles,
        children: label
      }), jsxRuntimeExports.jsx(FormHelpfulText, {
        helpfulText: helpfulText,
        helpfulTextStyle: helpfulTextStyle,
        sx: {
          gridArea: 'helpfulText'
        }
      })]
    }), jsxRuntimeExports.jsx(FormErrorMessage, {
      errorMessage: errorMessage,
      errorStyles: errorStyles
    })]
  });
};

/**
 * A custom input field component.
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   label="Username"
 *   placeholder="Enter your username"
 *   onBlur={handleBlur}
 *   onFocus={handleFocus}
 *   errorMessage={error}
 *   helpfulText="Please enter your username"
 * />
 * ```
 */
const Input$1 = React$1.forwardRef(({
  errorMessage,
  errorStyles,
  helpfulText,
  helpfulTextStyle,
  label,
  labelStyles,
  layoutStyles,
  onBlur,
  onFocus,
  ...rest
}, ref) => {
  const inputRef = React$1.useRef(null);
  const handleFocus = React$1.useCallback(e => {
    onFocus?.(e);
    inputRef.current?.focus();
  }, [onFocus]);
  const handleBlur = React$1.useCallback(e => {
    onBlur?.(e);
    inputRef.current?.blur();
  }, [onBlur]);
  React$1.useImperativeHandle(ref, () => ({
    focus: handleFocus,
    blur: handleBlur,
    ...inputRef.current
  }), [handleBlur, handleFocus]);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      width: '100%',
      ...layoutStyles
    },
    children: [label && jsxRuntimeExports.jsx(Typography, {
      fontWeight: 400,
      sx: {
        mb: 0.5
      },
      variant: "body2",
      ...labelStyles,
      children: label
    }), jsxRuntimeExports.jsx(Input$2, {
      dataTestId: rest.dataTestId ?? `${label && `${testIdFromLabel(label)}-`}input`,
      errorMessage: errorMessage,
      ...rest,
      ref: inputRef
    }), jsxRuntimeExports.jsx(FormHelpfulText, {
      helpfulText: helpfulText,
      helpfulTextStyle: helpfulTextStyle
    }), jsxRuntimeExports.jsx(FormErrorMessage, {
      errorMessage: errorMessage,
      errorStyles: errorStyles
    })]
  });
});

/**
 * A custom TextArea component with the error and helpful text messages.
 */
const TextArea$1 = React$1.forwardRef(({
  errorMessage,
  errorStyles,
  helpfulText,
  helpfulTextStyle,
  hideLabel,
  label,
  labelStyles,
  layoutStyles,
  maxLength = 500,
  onBlur,
  onFocus,
  ...props
}, ref) => {
  const textAreaRef = React$1.useRef(null);
  const handleFocus = React$1.useCallback(e => {
    onFocus?.(e);
    textAreaRef.current?.focus();
  }, [onFocus]);
  const handleBlur = React$1.useCallback(e => {
    onBlur?.(e);
    textAreaRef.current?.blur();
  }, [onBlur]);
  React$1.useImperativeHandle(ref, () => ({
    focus: handleFocus,
    blur: handleBlur,
    ...textAreaRef.current
  }), [handleBlur, handleFocus]);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',
      ...layoutStyles
    },
    children: [label && jsxRuntimeExports.jsx(Typography, {
      fontWeight: 400,
      sx: {
        mb: 0.5,
        ...(hideLabel && {
          fontSize: 0,
          lineHeight: 0
        })
      },
      variant: "body2",
      ...labelStyles,
      children: label
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      },
      children: [jsxRuntimeExports.jsx(TextArea$2, {
        errorMessage: errorMessage,
        maxLength: maxLength,
        ...props,
        ref: textAreaRef
      }), jsxRuntimeExports.jsxs(Typography, {
        color: "#8E908E",
        sx: {
          bottom: 12,
          position: 'absolute',
          right: 14
        },
        variant: "caption",
        children: [props?.value?.toString()?.length ?? 0, "/", maxLength]
      })]
    }), jsxRuntimeExports.jsx(FormHelpfulText, {
      helpfulText: helpfulText,
      helpfulTextStyle: helpfulTextStyle
    }), jsxRuntimeExports.jsx(FormErrorMessage, {
      errorMessage: errorMessage,
      errorStyles: errorStyles
    })]
  });
});

const Field = ({
  children
}) => jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
  children: children
});
Field.Checkbox = Checkbox$1;
Field.Input = Input$1;
Field.TextArea = TextArea$1;

/**
 * Renders a card component for a governance action.
 *
 * @component
 * @param {ActionTypeProps} props - The props for the component.
 * @param {string} props.abstract - The abstract of the governance action.
 * @param {string} props.type - The type of the governance action.
 * @param {boolean} [props.inProgress=false] - Indicates if the governance action is in progress.
 * @param {string} props.expiryDate - The expiry date of the governance action.
 * @param {number} props.expiryEpochNo - The expiry epoch number of the governance action.
 * @param {Function} props.onClick - The click event handler for the component.
 * @param {string} props.createdDate - The created date of the governance action.
 * @param {number} props.createdEpochNo - The created epoch number of the governance action.
 * @param {string} props.txHash - The transaction hash of the governance action.
 * @param {number} props.index - The index of the governance action.
 * @param {string} props.metadataStatus - The metadata status of the governance action.
 * @param {boolean} props.metadataValid - Indicates if the metadata is valid.
 * @param {string} props.title - The title of the governance action.
 * @returns {JSX.Element} The rendered component.
 */
const GovernanceActionCard = ({
  abstract,
  type,
  inProgress = false,
  expiryDate,
  expiryEpochNo,
  onClick,
  createdDate,
  createdEpochNo,
  txHash,
  index,
  metadataStatus,
  metadataValid,
  title
}) => {
  const {
    isMobile,
    screenWidth
  } = useScreenDimension();
  const govActionId = getFullGovActionId(txHash, index);
  const boxWidth = React$1.useMemo(() => {
    if (screenWidth < 420) {
      return 290;
    }
    if (isMobile) {
      return 324;
    }
    return 350;
  }, [screenWidth, isMobile]);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      width: boxWidth,
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0px 4px 15px 0px #DDE3F5',
      borderRadius: '20px',
      backgroundColor: !metadataValid ? 'rgba(251, 235, 235, 0.50)' : 'rgba(255, 255, 255, 0.3)',
      ...(!metadataValid && {
        border: '1px solid #F6D5D5'
      }),
      ...(inProgress && {
        border: '1px solid #FFCBAD'
      })
    },
    "data-testid": `govaction-${getProposalTypeNoEmptySpaces(type)}-card`,
    children: [inProgress && jsxRuntimeExports.jsx(GovernanceActionCardStatePill, {
      variant: "inProgress"
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        padding: '40px 24px 0'
      },
      children: [jsxRuntimeExports.jsx(GovernanceActionCardHeader, {
        title: title,
        isDataMissing: metadataStatus
      }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
        label: "Abstract",
        text: abstract,
        textVariant: "twoLines",
        dataTestId: "governance-action-abstract",
        isSliderCard: true,
        isMarkdown: true
      }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
        label: "Governance Action Type:",
        text: getProposalTypeLabel(type),
        textVariant: "pill",
        dataTestId: `${getProposalTypeNoEmptySpaces(type)}-type`,
        isSliderCard: true
      }), jsxRuntimeExports.jsx(GovernanceActionsDatesBox, {
        createdDate: createdDate,
        expiryDate: expiryDate,
        expiryEpochNo: expiryEpochNo,
        createdEpochNo: createdEpochNo,
        isSliderCard: true
      }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
        label: "Governance Action ID:",
        text: getFullGovActionId(txHash, index),
        dataTestId: `${getFullGovActionId(txHash, index)}-id`,
        isCopyButton: true,
        isSliderCard: true
      })]
    }), jsxRuntimeExports.jsx(material.Box, {
      sx: {
        boxShadow: '0px 4px 15px 0px #DDE3F5',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 3,
        bgcolor: 'white'
      },
      children: jsxRuntimeExports.jsx(Button, {
        onClick: onClick,
        variant: inProgress ? 'outlined' : 'contained',
        size: "large",
        sx: {
          width: '100%'
        },
        "data-testid": `govaction-${govActionId}-view-detail`,
        children: inProgress ? 'View Details' : 'View Details and Vote'
      })
    })]
  });
};

var InfoOutlined = {};

var createSvgIcon$1 = {};

function getSvgIconUtilityClass(slot) {
  return generateUtilityClass('MuiSvgIcon', slot);
}
generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const _excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
const useUtilityClasses = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize$1(color)}`, `fontSize${capitalize$1(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize$1(ownerState.color)}`], styles[`fontSize${capitalize$1(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? undefined : 'currentColor',
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: undefined
    }[ownerState.color]
  };
});
const SvgIcon = /*#__PURE__*/React__namespace.forwardRef(function SvgIcon(inProps, ref) {
  const props = useDefaultProps({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  const {
      children,
      className,
      color = 'inherit',
      component = 'svg',
      fontSize = 'medium',
      htmlColor,
      inheritViewBox = false,
      titleAccess,
      viewBox = '0 0 24 24'
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const hasSvgAsChild = /*#__PURE__*/React__namespace.isValidElement(children) && children.type === 'svg';
  const ownerState = _extends$1({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntimeExports.jsxs(SvgIconRoot, _extends$1({
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState: ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/jsxRuntimeExports.jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" ? SvgIcon.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'action', 'disabled', 'primary', 'secondary', 'error', 'info', 'success', 'warning']), PropTypes.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'large', 'medium', 'small']), PropTypes.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: PropTypes.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: PropTypes.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: PropTypes.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: PropTypes.string
} : void 0;
SvgIcon.muiName = 'SvgIcon';

function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/jsxRuntimeExports.jsx(SvgIcon, _extends$1({
      "data-testid": `${displayName}Icon`,
      ref: ref
    }, props, {
      children: path
    }));
  }
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }
  Component.muiName = SvgIcon.muiName;
  return /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(Component));
}

// TODO: remove this export once ClassNameGenerator is stable
// eslint-disable-next-line @typescript-eslint/naming-convention
const unstable_ClassNameGenerator = {
  configure: generator => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(['MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.', '', "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", '', 'The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401', '', 'The updated documentation: https://mui.com/guides/classname-generator/'].join('\n'));
    }
    ClassNameGenerator.configure(generator);
  }
};

var utils = /*#__PURE__*/Object.freeze({
	__proto__: null,
	capitalize: capitalize$1,
	createChainedFunction: createChainedFunction,
	createSvgIcon: createSvgIcon,
	debounce: debounce$1,
	deprecatedPropType: deprecatedPropType,
	isMuiElement: isMuiElement,
	ownerDocument: ownerDocument,
	ownerWindow: ownerWindow,
	requirePropFactory: requirePropFactory,
	setRef: setRef,
	unstable_ClassNameGenerator: unstable_ClassNameGenerator,
	unstable_useEnhancedEffect: useEnhancedEffect,
	unstable_useId: useId,
	unsupportedProp: unsupportedProp,
	useControlled: useControlled,
	useEventCallback: useEventCallback,
	useForkRef: useForkRef,
	useIsFocusVisible: useIsFocusVisible
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(utils);

var hasRequiredCreateSvgIcon;

function requireCreateSvgIcon () {
	if (hasRequiredCreateSvgIcon) return createSvgIcon$1;
	hasRequiredCreateSvgIcon = 1;
	(function (exports) {
		'use client';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		Object.defineProperty(exports, "default", {
		  enumerable: true,
		  get: function () {
		    return _utils.createSvgIcon;
		  }
		});
		var _utils = require$$0; 
	} (createSvgIcon$1));
	return createSvgIcon$1;
}

var _interopRequireDefault$4 = interopRequireDefaultExports;
Object.defineProperty(InfoOutlined, "__esModule", {
  value: true
});
var default_1$4 = InfoOutlined.default = void 0;
var _createSvgIcon$4 = _interopRequireDefault$4(requireCreateSvgIcon());
var _jsxRuntime$4 = jsxRuntimeExports;
default_1$4 = InfoOutlined.default = (0, _createSvgIcon$4.default)( /*#__PURE__*/(0, _jsxRuntime$4.jsx)("path", {
  d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), 'InfoOutlined');

/**
 * Renders a card element for a governance action.
 *
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the card element.
 * @param {string} props.text - The text content for the card element.
 * @param {string} props.dataTestId - The data-testid attribute for testing purposes.
 * @param {boolean} props.isSliderCard - Indicates whether the card is a slider card.
 * @param {string} [props.textVariant='oneLine'] - The text variant for the card element.
 * @param {boolean} props.isCopyButton - Indicates whether the card has a copy button.
 * @param {object} props.tooltipProps - The tooltip properties for the card element.
 * @param {string} props.marginBottom - The margin bottom value for the card element.
 * @param {boolean} [props.isMarkdown=false] - Indicates whether the text content is in Markdown format.
 * @returns {JSX.Element | null} The rendered card element.
 */
const GovernanceActionCardElement = ({
  label,
  text,
  dataTestId,
  isSliderCard,
  textVariant = 'oneLine',
  isCopyButton,
  tooltipProps,
  marginBottom,
  isMarkdown = false
}) => {
  if (!text) {
    return null;
  }
  return jsxRuntimeExports.jsxs(material.Box, {
    "data-testid": dataTestId,
    mb: marginBottom ?? isSliderCard ? '20px' : '32px',
    maxHeight: isSliderCard ? '72px' : 'none',
    overflow: isSliderCard ? 'hidden' : 'visible',
    children: [jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        mb: '4px'
      },
      children: [jsxRuntimeExports.jsx(Typography, {
        sx: {
          fontSize: isSliderCard ? 12 : 14,
          fontWeight: isSliderCard ? 500 : 600,
          lineHeight: isSliderCard ? '16px' : '20px',
          color: 'neutralGray',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        },
        children: label
      }), tooltipProps && jsxRuntimeExports.jsx(Tooltip, {
        heading: tooltipProps?.heading,
        paragraphOne: tooltipProps?.paragraphOne,
        placement: "bottom-end",
        arrow: true,
        ...tooltipProps,
        children: jsxRuntimeExports.jsx(default_1$4, {
          sx: {
            ml: 0.7,
            mb: 0.1,
            color: '#ADAEAD',
            fontSize: 'small'
          }
        })
      })]
    }), jsxRuntimeExports.jsx(material.Box, {
      display: "flex",
      children: textVariant === 'pill' ? jsxRuntimeExports.jsx(material.Box, {
        sx: {
          padding: '6px 18px',
          overflow: 'hidden',
          bgcolor: 'lightBlue',
          borderRadius: 100
        },
        children: jsxRuntimeExports.jsx(Typography, {
          variant: "caption",
          sx: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          },
          children: text
        })
      }) : jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          flexDirection: isMarkdown ? 'column' : 'row'
        },
        children: [isMarkdown ? jsxRuntimeExports.jsx(Markdown, {
          components: {
            // eslint-disable-next-line
            p(props) {
              const {
                children
              } = props;
              return jsxRuntimeExports.jsx(Typography, {
                sx: {
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '24px',
                  maxWidth: 'auto'
                },
                children: children
              });
            }
          },
          children: text.toString()
        }) : jsxRuntimeExports.jsx(Typography, {
          sx: {
            fontSize: isSliderCard ? 14 : 16,
            fontWeight: 400,
            maxWidth: textVariant === 'oneLine' ? '283px' : 'auto',
            lineHeight: isSliderCard ? '20px' : '24px',
            ...(textVariant === 'oneLine' && {
              whiteSpace: 'nowrap'
            }),
            ...((textVariant === 'oneLine' || textVariant === 'twoLines') && {
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }),
            ...(textVariant === 'twoLines' && {
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              whiteSpace: 'normal'
            }),
            ...(isCopyButton && {
              color: 'primaryBlue'
            })
          },
          children: text
        }), isCopyButton && jsxRuntimeExports.jsx(material.Box, {
          ml: 1,
          children: jsxRuntimeExports.jsx(CopyButton, {
            text: text.toString(),
            variant: "blueThin"
          })
        })]
      })
    })]
  });
};

/**
 * Renders the header for a governance action card.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the card header.
 * @param {boolean} props.isDataMissing - Indicates whether data is missing for the card.
 * @returns {JSX.Element} The rendered component.
 */
const GovernanceActionCardHeader = ({
  title,
  isDataMissing
}) => {
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      mb: '20px',
      overflow: 'hidden'
    },
    "data-testid": "governance-action-card-header",
    children: [jsxRuntimeExports.jsx(Typography, {
      sx: {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: '24px',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        wordBreak: 'break-word',
        ...(isDataMissing && {
          color: 'errorRed'
        })
      },
      children: isDataMissing && getMetadataDataMissingStatusTranslation(isDataMissing) || title
    }), isDataMissing && typeof isDataMissing === 'string' && jsxRuntimeExports.jsx(Tooltip, {
      heading: getMetadataDataMissingStatusTranslation(isDataMissing),
      paragraphOne: "Please click \u201CView Details\u201D for more information.",
      placement: "bottom-end",
      arrow: true,
      children: jsxRuntimeExports.jsx(default_1$4, {
        style: {
          color: '#ADAEAD'
        },
        sx: {
          ml: 0.7
        },
        fontSize: "small"
      })
    })]
  });
};

const GovernanceActionCardMyVote = ({
  voteTxHash,
  vote
}) => {
  const {
    cExplorerBaseUrl
  } = usePillarContext();
  return jsxRuntimeExports.jsxs(material.Box, {
    "data-testid": "my-vote",
    mb: "20px",
    children: [jsxRuntimeExports.jsx(Typography, {
      variant: "caption",
      sx: {
        fontWeight: 500,
        color: '#8E908E'
      },
      children: "My Vote:"
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        mt: 1,
        px: '4px',
        py: '2px',
        display: 'flex',
        border: 1,
        borderColor: 'rgba(214, 226, 255, 1)',
        borderRadius: 20,
        flex: 1,
        alignItems: 'center'
      },
      children: [jsxRuntimeExports.jsx(material.Box, {
        flex: 1,
        children: jsxRuntimeExports.jsx(VotePill, {
          vote: vote
        })
      }), jsxRuntimeExports.jsx(Button, {
        onClick: () => openInNewTab(`${cExplorerBaseUrl}/tx/${voteTxHash}`),
        variant: "text",
        size: "small",
        sx: {
          paddingY: 0.75,
          flex: 1,
          whiteSpace: 'nowrap'
        },
        children: "See transaction"
      })]
    })]
  });
};

var Check = {};

var _interopRequireDefault$3 = interopRequireDefaultExports;
Object.defineProperty(Check, "__esModule", {
  value: true
});
var default_1$3 = Check.default = void 0;
var _createSvgIcon$3 = _interopRequireDefault$3(requireCreateSvgIcon());
var _jsxRuntime$3 = jsxRuntimeExports;
default_1$3 = Check.default = (0, _createSvgIcon$3.default)( /*#__PURE__*/(0, _jsxRuntime$3.jsx)("path", {
  d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), 'Check');

/**
 * Renders a state pill for a governance action card.
 *
 * @param variant - The variant of the state pill. Can be 'inProgress' or 'voteSubmitted'.
 */
const GovernanceActionCardStatePill = ({
  variant = 'voteSubmitted'
}) => jsxRuntimeExports.jsx(material.Box, {
  sx: {
    position: 'absolute',
    top: -15,
    right: 30,
    bgcolor: variant === 'inProgress' ? '#F8ECD4' : '#E0F2DC',
    border: 1,
    borderColor: variant === 'inProgress' ? '#DEA029' : '#62BC52',
    px: 2.25,
    py: 0.5,
    borderRadius: 100
  },
  children: jsxRuntimeExports.jsxs(Typography, {
    sx: {
      color: variant === 'inProgress' ? '#DEA029' : '#62BC52',
      display: 'flex',
      alignItems: 'center',
      gap: 0.5
    },
    variant: "body2",
    children: [variant === 'voteSubmitted' && jsxRuntimeExports.jsx(default_1$3, {
      sx: {
        fontSize: '17px'
      }
    }), variant === 'inProgress' ? 'In Progress' : 'Votes submitted']
  })
});

const CustomTabPanel = ({
  children,
  value,
  index
}) => {
  if (value !== index) return null;
  return jsxRuntimeExports.jsx(material.Box, {
    sx: {
      overflow: 'auto'
    },
    children: children
  });
};
const StyledTab = material.styled(props => jsxRuntimeExports.jsx(material.Tab, {
  disableRipple: true,
  ...props
}))(({
  isMobile
}) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: 16,
  width: !isMobile ? 'auto' : '50%',
  color: 'rgba(36, 34, 50, 0.5)',
  '&.Mui-selected': {
    color: 'rgba(38, 37, 45, 1)'
  }
}));
/**
 * Renders the details of a governance action card.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.isDashboard - Indicates if the component is rendered in a dashboard.
 * @param {boolean} props.isDataMissing - Indicates if the data for the governance action is missing.
 * @param {boolean} props.isInProgress - Indicates if the governance action is in progress.
 * @param {boolean} props.isOneColumn - Indicates if the component is rendered in a single column layout.
 * @param {boolean} props.isSubmitted - Indicates if the governance action has been submitted.
 * @param {object} props.proposal - The details of the governance action.
 * @param {string} props.proposal.abstract - The abstract of the governance action.
 * @param {string} props.proposal.createdDate - The date when the governance action was created.
 * @param {number} props.proposal.createdEpochNo - The epoch number when the governance action was created.
 * @param {string} props.proposal.details - The details of the governance action.
 * @param {string} props.proposal.expiryDate - The date when the governance action will expire.
 * @param {number} props.proposal.expiryEpochNo - The epoch number when the governance action will expire.
 * @param {number} props.proposal.index - The index of the governance action.
 * @param {string} props.proposal.motivation - The motivation behind the governance action.
 * @param {number} props.proposal.prevGovActionIndex - The index of the previous governance action.
 * @param {string} props.proposal.prevGovActionTxHash - The transaction hash of the previous governance action.
 * @param {string} props.proposal.rationale - The rationale behind the governance action.
 * @param {string[]} props.proposal.references - The references related to the governance action.
 * @param {string} props.proposal.title - The title of the governance action.
 * @param {string} props.proposal.txHash - The transaction hash of the governance action.
 * @param {string} props.proposal.url - The URL of the governance action.
 * @param {string} props.proposal.type - The type of the governance action.
 * @param {object} props.proposal.protocolParams - The protocol parameters of the governance action.
 *
 * @returns {JSX.Element} The rendered component.
 */
const GovernanceActionDetailsCardData = ({
  isDashboard,
  isDataMissing,
  isInProgress,
  isOneColumn,
  isSubmitted,
  proposal: {
    abstract,
    createdDate,
    createdEpochNo,
    details,
    expiryDate,
    expiryEpochNo,
    index,
    motivation,
    prevGovActionIndex,
    prevGovActionTxHash,
    rationale,
    references,
    title,
    txHash,
    url,
    type,
    protocolParams
  }
}) => {
  const {
    epochParams
  } = usePillarContext();
  const {
    screenWidth
  } = useScreenDimension();
  const {
    isMobile
  } = useScreenDimension();
  const updatableProtocolParams = React$1.useMemo(() =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterUpdatableProtocolParams(epochParams, protocolParams, ['id', 'registered_tx_id', 'key']), [epochParams, protocolParams]);
  const nonNullProtocolParams = React$1.useMemo(() => filterOutNullParams(protocolParams, ['id', 'registered_tx_id', 'key']), [protocolParams]);
  const isModifiedPadding = (isDashboard && screenWidth < 1168) ?? screenWidth < 900;
  const [selectedTab, setSelectedTab] = React$1.useState(0);
  const {
    pathname,
    hash
  } = reactRouterDom.useLocation();
  const govActionLinkToShare = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}${pathname}${hash ?? ''}`;
  const handleChange = (_event, newValue) => {
    setSelectedTab(newValue);
  };
  const label = getProposalTypeLabel(type);
  const govActionId = getFullGovActionId(txHash, index);
  const prevGovActionId = prevGovActionIndex && prevGovActionTxHash ? getFullGovActionId(prevGovActionTxHash, prevGovActionIndex) : null;
  const tabs = React$1.useMemo(() => [{
    label: 'Reasoning',
    dataTestId: 'reasoning-tab',
    content: jsxRuntimeExports.jsx(ReasoningTabContent, {
      abstract: abstract,
      motivation: motivation,
      rationale: rationale
    }),
    visible: !isDataMissing && (!!abstract || !!motivation || !!rationale)
  }, {
    label: 'Parameters',
    dataTestId: 'parameters-tab',
    content: jsxRuntimeExports.jsx(GovernanceActionDetailsDiffView, {
      oldJson: updatableProtocolParams,
      newJson: nonNullProtocolParams
    }),
    visible: type === GovernanceActionType.ParameterChange && !!protocolParams && !!epochParams
  }, {
    label: 'Details',
    dataTestId: 'hardfork-details-tab',
    content: jsxRuntimeExports.jsx(HardforkDetailsTabContent, {
      details: details,
      prevGovActionId: prevGovActionId
    }),
    visible: type === GovernanceActionType.HardForkInitiation && !!details
  }].filter(tab => tab.visible), [abstract, motivation, rationale, isDataMissing, updatableProtocolParams, nonNullProtocolParams, type, protocolParams, epochParams, details, prevGovActionId]);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      borderRadius: isOneColumn ? '20px 20px 0 0' : '20px 0 0 20px',
      bgcolor: 'rgba(255, 255, 255, 0.30)',
      p: `40px ${isModifiedPadding ? '24px' : '40px'}`,
      overflow: 'hidden'
    },
    children: [jsxRuntimeExports.jsx(DataMissingHeader, {
      isDataMissing: isDataMissing,
      shareLink: govActionLinkToShare,
      title: title
    }), jsxRuntimeExports.jsx(DataMissingInfoBox, {
      isDataMissing: isDataMissing,
      isInProgress: isInProgress,
      isSubmitted: isSubmitted
    }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
      label: "Governance Action Type:",
      text: label,
      textVariant: "pill",
      dataTestId: `${getProposalTypeNoEmptySpaces(label)}-type`
    }), jsxRuntimeExports.jsx(GovernanceActionsDatesBox, {
      createdDate: createdDate,
      expiryDate: expiryDate,
      expiryEpochNo: expiryEpochNo,
      createdEpochNo: createdEpochNo
    }), isDataMissing && jsxRuntimeExports.jsx(ExternalModalButton, {
      url: url,
      label: "See external data"
    }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
      label: "Governance Action ID:",
      text: govActionId,
      isCopyButton: true,
      dataTestId: `${govActionId}-id`
    }), tabs.length === 1 ? tabs[0].content : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [jsxRuntimeExports.jsx(material.Tabs, {
        sx: {
          marginY: 4,
          display: 'flex',
          fontSize: 16,
          fontWeight: 500
        },
        value: selectedTab,
        indicatorColor: "secondary",
        onChange: handleChange,
        "aria-label": "basic tabs example",
        children: tabs.map(tab => jsxRuntimeExports.jsx(StyledTab, {
          "data-testid": tab.dataTestId,
          label: tab.label,
          isMobile: isMobile
        }, tab.label))
      }), tabs.map((tab, tabIndex) => jsxRuntimeExports.jsx(CustomTabPanel, {
        value: selectedTab,
        index: tabIndex,
        children: tab.content
      }, tab.label))]
    }), details && type !== GovernanceActionType.HardForkInitiation && Object.keys(details).length !== 0 && Object.entries(details).map(([detailLabel, content]) => jsxRuntimeExports.jsx(GovernanceActionCardElement, {
      isCopyButton: detailLabel.toLowerCase().includes('address'),
      label: detailLabel,
      text: content,
      dataTestId: testIdFromLabel(detailLabel)
    })), jsxRuntimeExports.jsx(GovernanceActionDetailsCardLinks, {
      links: references
    })]
  });
};
const ReasoningTabContent = ({
  abstract,
  motivation,
  rationale
}) => jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
  children: [jsxRuntimeExports.jsx(GovernanceActionCardElement, {
    label: "Abstract",
    text: abstract,
    textVariant: "longText",
    dataTestId: "abstract",
    isMarkdown: true
  }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
    label: "Motivation",
    text: motivation,
    textVariant: "longText",
    dataTestId: "motivation",
    isMarkdown: true
  }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
    label: "Rationale",
    text: rationale,
    textVariant: "longText",
    dataTestId: "rationale",
    isMarkdown: true
  })]
});
const HardforkDetailsTabContent = ({
  details,
  prevGovActionId
}) => {
  const {
    epochParams
  } = usePillarContext();
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      pb: 3
    },
    children: [jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5
      },
      children: [jsxRuntimeExports.jsx(Typography, {
        variant: "body2",
        children: "Current version"
      }), jsxRuntimeExports.jsx(Typography, {
        variant: "body2",
        children: epochParams ?
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        `${epochParams?.protocol_major}.${epochParams?.protocol_minor}` : '-'
      })]
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5
      },
      children: [jsxRuntimeExports.jsx(Typography, {
        variant: "body2",
        children: "Proposed version"
      }), jsxRuntimeExports.jsx(Typography, {
        variant: "body2",
        children: details ? `${details.major}.${details.minor}` : '-'
      })]
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5
      },
      children: [jsxRuntimeExports.jsx(Typography, {
        variant: "body2",
        children: "Previous Governance Action ID"
      }), prevGovActionId ? jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          gap: 1
        },
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "body1",
          sx: {
            fontWeight: 400,
            maxWidth: 283,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'primaryBlue'
          },
          children: prevGovActionId
        }), jsxRuntimeExports.jsx(CopyButton, {
          text: prevGovActionId,
          variant: "blueThin"
        })]
      }) : jsxRuntimeExports.jsx(Typography, {
        variant: "body2",
        children: "-"
      })]
    })]
  });
};

var ArrowBackIos = {};

var _interopRequireDefault$2 = interopRequireDefaultExports;
Object.defineProperty(ArrowBackIos, "__esModule", {
  value: true
});
var default_1$2 = ArrowBackIos.default = void 0;
var _createSvgIcon$2 = _interopRequireDefault$2(requireCreateSvgIcon());
var _jsxRuntime$2 = jsxRuntimeExports;
default_1$2 = ArrowBackIos.default = (0, _createSvgIcon$2.default)( /*#__PURE__*/(0, _jsxRuntime$2.jsx)("path", {
  d: "M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"
}), 'ArrowBackIos');

/**
 * A component that renders a link with an optional icon.
 *
 * @component
 * @example
 * // Renders a link with a back arrow icon and the label "Go Back"
 * <LinkWithIcon label="Go Back" icon={<ArrowBackIcon />} onClick={handleClick} />
 *
 * @param {Object} props - The component props.
 * @param {string} props.dataTestId - The data-testid attribute for testing purposes.
 * @param {string} props.label - The label text for the link.
 * @param {Function} props.onClick - The click event handler for the link.
 * @param {ReactNode} props.icon - The optional icon element to display.
 * @param {Object} props.sx - The custom styles for the link container.
 * @param {boolean} props.cutWithEllipsis - Whether to cut the label text with an ellipsis if it overflows.
 * @returns {JSX.Element} The rendered LinkWithIcon component.
 */
const LinkWithIcon = ({
  dataTestId,
  label,
  onClick,
  icon,
  sx,
  cutWithEllipsis
}) => jsxRuntimeExports.jsxs(material.Box, {
  "data-testid": dataTestId ?? `${label.split(' ').join('-')}-link`,
  sx: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    width: 'fit-content',
    ...(cutWithEllipsis && {
      overflow: 'hidden',
      width: 'auto'
    }),
    ...sx
  },
  onClick: onClick,
  children: [icon || jsxRuntimeExports.jsx(default_1$2, {
    color: "primary",
    sx: {
      fontSize: 14
    }
  }), jsxRuntimeExports.jsx(Typography, {
    color: "primary",
    fontWeight: 400,
    variant: "body2",
    sx: {
      ml: 0.5,
      ...(cutWithEllipsis && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      })
    },
    children: label
  })]
});

/**
 * Renders a card component that displays supporting links for a governance action.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string[]} props.links - An array of links to be displayed.
 * @returns {JSX.Element} - The rendered component.
 */
const GovernanceActionDetailsCardLinks = ({
  links
}) => {
  const {
    isMobile
  } = useScreenDimension();
  const {
    openModal
  } = useModal();
  if (!links) return null;
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Typography, {
      sx: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: '20px',
        color: 'neutralGray',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        my: 2
      },
      "data-testid": "supporting-links",
      children: "Supporting links"
    }), jsxRuntimeExports.jsx(material.Box, {
      sx: {
        display: 'grid',
        gridTemplateColumns: isMobile ? undefined : '1fr 1fr',
        columnGap: 2,
        rowGap: 2
      },
      children: links.map(link => jsxRuntimeExports.jsx(LinkWithIcon, {
        label: link,
        onClick: () => {
          openModal({
            type: 'externalLink',
            state: {
              externalLink: link
            }
          });
        },
        icon: jsxRuntimeExports.jsx("img", {
          alt: "link",
          src: ICONS.link
        }),
        cutWithEllipsis: true
      }, link))
    })]
  });
};

const GovernanceActionDetailsCardVotes = ({
  setIsVoteSubmitted,
  isOneColumn,
  isVoter,
  vote,
  isDashboard,
  isInProgress,
  proposal
}) => {
  const {
    isVotingOnGovernanceActionEnabled
  } = usePillarContext();
  const {
    screenWidth
  } = useScreenDimension();
  const isModifiedPadding = (isDashboard && screenWidth < 1368) ?? screenWidth < 1100;
  return jsxRuntimeExports.jsx(material.Box, {
    sx: {
      borderRadius: isOneColumn ? '0 0 20px 20px' : '0 20px 20px 0',
      bgcolor: 'rgba(255, 255, 255, 0.60)',
      p: `40px ${isModifiedPadding ? '24px' : '80px'}`
    },
    children: isVoter && isVotingOnGovernanceActionEnabled(proposal.type) ? jsxRuntimeExports.jsx(VoteActionForm, {
      setIsVoteSubmitted: setIsVoteSubmitted,
      proposal: proposal,
      previousVote: vote,
      isInProgress: isInProgress
    }) : jsxRuntimeExports.jsx(VotesSubmitted, {
      votes: proposal
    })
  });
};

/**
 * Renders a view that displays the differences between two JSON objects.
 *
 * @param {Object} Props - The component props.
 * @param {Object} Props.oldJson - The old JSON object.
 * @param {Object} Props.newJson - The new JSON object.
 * @returns {JSX.Element} The rendered component.
 */
const GovernanceActionDetailsDiffView = ({
  oldJson,
  newJson
}) => {
  const diffText = unidiff.formatLines(unidiff.diffLines(JSON.stringify(oldJson, null, 2), JSON.stringify(newJson, null, 2)));
  const [diff] = reactDiffView.parseDiff(diffText, {});
  if (!oldJson && !newJson) return null;
  return jsxRuntimeExports.jsxs(material.Box, {
    children: [jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        mb: 3
      },
      children: [jsxRuntimeExports.jsx(material.Typography, {
        sx: {
          fontSize: '14px',
          color: 'neutralGray',
          lineHeight: '20px',
          fontWeight: 600
        },
        children: "Existing"
      }), jsxRuntimeExports.jsx(material.Typography, {
        sx: {
          fontSize: '14px',
          color: 'neutralGray',
          lineHeight: '20px',
          fontWeight: 600
        },
        children: "Proposed"
      })]
    }), jsxRuntimeExports.jsx(reactDiffView.Diff, {
      viewType: "split",
      diffType: diff.type,
      hunks: diff.hunks || [],
      children: hunks => hunks.map(hunk =>
      // Hunk component does not allow to pass children as a prop
      // but that is the typing issue as passing the children
      // is recommended by documentation approach.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      jsxRuntimeExports.jsx(reactDiffView.Hunk, {
        hunk: hunk,
        children: hunk.content
      }, hunk.content))
    })]
  });
};

/**
 * Renders a box displaying the submission date and expiry date of a governance action.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Date} props.createdDate - The date when the governance action was submitted.
 * @param {Date} props.expiryDate - The date when the governance action will expire if it doesn't reach ratification thresholds.
 * @param {number} props.expiryEpochNo - The epoch number of the expiry date.
 * @param {number} props.createdEpochNo - The epoch number of the submission date.
 * @param {boolean} props.isSliderCard - Indicates whether the component is used in a slider card.
 * @returns {JSX.Element} - The rendered component.
 */
const GovernanceActionsDatesBox = ({
  createdDate,
  expiryDate,
  expiryEpochNo,
  createdEpochNo,
  isSliderCard
}) => {
  const {
    screenWidth
  } = useScreenDimension();
  const isFontSizeSmaller = screenWidth < 420;
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      border: 1,
      borderColor: 'lightBlue',
      borderRadius: 3,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      mb: isSliderCard ? '20px' : '32px'
    },
    children: [jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        alignItems: 'center',
        bgcolor: '#D6E2FF80',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        py: '6px',
        width: '100%'
      },
      children: [jsxRuntimeExports.jsxs(Typography, {
        variant: "caption",
        sx: {
          fontSize: isFontSizeSmaller ? 11 : 12,
          fontWeight: 300
        },
        "data-testid": "submission-date",
        children: ["Submitted:", ' ', jsxRuntimeExports.jsx(Typography, {
          component: "span",
          sx: {
            fontSize: isFontSizeSmaller ? 11 : 12,
            fontWeight: 600
          },
          children: formatDisplayDate(createdDate)
        }), jsxRuntimeExports.jsx(Typography, {
          component: "span",
          variant: "caption",
          sx: {
            fontSize: isFontSizeSmaller ? 11 : 12,
            fontWeight: 300
          },
          children: ` (Epoch ${createdEpochNo})`
        })]
      }), jsxRuntimeExports.jsx(Tooltip, {
        heading: "Submission Date",
        paragraphOne: "The date when the governance action was submitted on-chain.",
        placement: "bottom-end",
        arrow: true,
        children: jsxRuntimeExports.jsx(default_1$4, {
          sx: {
            ml: 0.5,
            fontSize: isFontSizeSmaller ? '18px' : '19px',
            color: '#ADAEAD'
          }
        })
      })]
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        py: 0.75,
        width: '100%'
      },
      children: [jsxRuntimeExports.jsxs(Typography, {
        variant: "caption",
        sx: {
          fontSize: isFontSizeSmaller ? 11 : 12,
          fontWeight: 300
        },
        "data-testid": "expiry-date",
        children: ["Expires:", ' ', jsxRuntimeExports.jsx(Typography, {
          component: "span",
          sx: {
            fontSize: isFontSizeSmaller ? 11 : 12,
            fontWeight: 600
          },
          children: expiryDate ? formatDisplayDate(expiryDate) : '-'
        }), jsxRuntimeExports.jsx(Typography, {
          component: "span",
          variant: "caption",
          sx: {
            fontSize: isFontSizeSmaller ? 11 : 12,
            fontWeight: 300
          },
          children: ` (Epoch ${expiryEpochNo})`
        })]
      }), jsxRuntimeExports.jsx(Tooltip, {
        heading: "Expiry Date",
        paragraphOne: "The date when the governance action will expiry if it doesn\u2019t reach ratification thresholds.",
        paragraphTwo: "IMPORTANT: If the governance action is ratified before the expiry date it will be considered ratified and it will not be available to vote on afterwards.",
        placement: "bottom-end",
        arrow: true,
        children: jsxRuntimeExports.jsx(default_1$4, {
          sx: {
            ml: 0.5,
            fontSize: isFontSizeSmaller ? '18px' : '19px',
            color: '#ADAEAD'
          }
        })
      })]
    })]
  });
};

var ChevronRight = {};

var _interopRequireDefault$1 = interopRequireDefaultExports;
Object.defineProperty(ChevronRight, "__esModule", {
  value: true
});
var default_1$1 = ChevronRight.default = void 0;
var _createSvgIcon$1 = _interopRequireDefault$1(requireCreateSvgIcon());
var _jsxRuntime$1 = jsxRuntimeExports;
default_1$1 = ChevronRight.default = (0, _createSvgIcon$1.default)( /*#__PURE__*/(0, _jsxRuntime$1.jsx)("path", {
  d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), 'ChevronRight');

/**
 * SliderArrow component represents an arrow used in a slider.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} props.disabled - Indicates if the arrow is disabled.
 * @param {Function} props.onClick - The function to be called when the arrow is clicked.
 * @param {boolean} props.left - Indicates if the arrow is pointing to the left.
 * @returns {JSX.Element} The rendered SliderArrow component.
 */
const SliderArrow = ({
  disabled,
  onClick,
  left
}) => {
  const {
    palette: {
      primaryBlue,
      arcticWhite,
      lightBlue
    }
  } = voltaire;
  return jsxRuntimeExports.jsx(material.Box, {
    onClick: onClick,
    sx: {
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      border: `1px solid ${lightBlue}`,
      backgroundColor: arcticWhite,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.3s',
      '&:hover': {
        boxShadow: disabled ? 0 : 2
      }
    },
    children: jsxRuntimeExports.jsx(default_1$1, {
      sx: {
        transform: `rotate(${left ? 180 : 0}deg)`,
        color: disabled ? '#C1BED3' : primaryBlue
      }
    })
  });
};

/**
 * Renders the slider arrows component.
 *
 * @param {SliderArrowsProps} props - The component props.
 * @returns {JSX.Element | null} The rendered component.
 */
const SliderArrows = ({
  currentSlide,
  instanceRef,
  itemsPerView
}) => instanceRef.current && jsxRuntimeExports.jsxs(material.Box, {
  sx: {
    display: 'flex',
    gap: '4px'
  },
  children: [jsxRuntimeExports.jsx(SliderArrow, {
    left: true,
    onClick: e => {
      e.stopPropagation();
      instanceRef.current?.prev();
    },
    disabled: currentSlide === 0
  }), jsxRuntimeExports.jsx(SliderArrow, {
    onClick: e => {
      e.stopPropagation();
      instanceRef.current?.next();
    },
    disabled: currentSlide + itemsPerView >= instanceRef.current.track.details.slides.length
  })]
});

/**
 * Represents a step in a multi-step process.
 *
 * @component
 * @example
 * // Usage:
 * <Step
 *   component={<StepComponent />}
 *   componentsLayoutStyles={{ marginTop: 10 }}
 *   label="Step 1"
 *   layoutStyles={{ marginBottom: 20 }}
 *   stepNumber={1}
 * />
 *
 * @param {StepProps} props - The props for the Step component.
 * @param {React.ReactNode} props.component - The component to be rendered within the step.
 * @param {React.CSSProperties} props.componentsLayoutStyles - The CSS styles for the component container.
 * @param {string} props.label - The label for the step.
 * @param {React.CSSProperties} props.layoutStyles - The CSS styles for the step container.
 * @param {number} props.stepNumber - The step number.
 * @returns {JSX.Element} The rendered Step component.
 */
const Step = ({
  component,
  componentsLayoutStyles,
  label,
  layoutStyles,
  stepNumber
}) => {
  const {
    palette: {
      boxShadow2
    }
  } = voltaire;
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      flexDirection: 'row',
      display: 'flex',
      width: '100%',
      ...layoutStyles
    },
    children: [jsxRuntimeExports.jsx(material.Box, {
      sx: {
        alignItems: 'center',
        borderRadius: '100%',
        boxShadow: `2px 2px 20px 0px ${boxShadow2}`,
        display: 'flex',
        height: 54,
        justifyContent: 'center',
        width: 54
      },
      children: jsxRuntimeExports.jsx(Typography, {
        color: "primary",
        fontWeight: 400,
        variant: "title2",
        children: stepNumber
      })
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        ml: 3,
        ...componentsLayoutStyles
      },
      children: [jsxRuntimeExports.jsx(Typography, {
        fontWeight: 500,
        variant: "body1",
        children: label
      }), component]
    })]
  });
};

/**
 * Renders a tab panel component.
 *
 * @param props - The component props.
 * @param props.children - The content of the tab panel.
 * @param props.value - The current value of the tab panel.
 * @param props.index - The index of the tab panel.
 * @returns The rendered tab panel component.
 */
const TabPanel = props => {
  const {
    children,
    value,
    index
  } = props;
  return jsxRuntimeExports.jsx("div", {
    role: "tabpanel",
    hidden: value !== index,
    id: `simple-tabpanel-${index}`,
    "aria-labelledby": `simple-tab-${index}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: value !== index ? 0 : 1
    },
    children: value === index && jsxRuntimeExports.jsx(material.Box, {
      pb: 3,
      children: children
    })
  });
};

/**
 * Renders a vote pill component.
 *
 * @param vote - The vote value.
 * @param width - The width of the vote pill.
 * @param maxWidth - The maximum width of the vote pill.
 * @param isCC - Indicates if the vote is for a constitutional case.
 * @returns The rendered vote pill component.
 */
const VotePill = ({
  vote,
  width,
  maxWidth,
  isCC
}) => {
  const VOTE = vote.toLowerCase();
  const getVotePillLabel = React$1.useCallback(() => {
    switch (VOTE) {
      case 'yes':
        return isCC ? 'Constitutional' : 'Yes';
      case 'no':
        return isCC ? 'Unconstitutional' : 'No';
      default:
        return 'Abstain';
    }
  }, [isCC, VOTE]);
  return jsxRuntimeExports.jsx(material.Box, {
    py: 0.75,
    px: 2.25,
    border: 1,
    borderColor: VOTE === 'yes' ? '#C0E4BA' : VOTE === 'no' ? '#EDACAC' : '#99ADDE',
    bgcolor: VOTE === 'yes' ? '#F0F9EE' : VOTE === 'no' ? '#FBEBEB' : '#E6EBF7',
    borderRadius: 100,
    textAlign: "center",
    minWidth: "50px",
    maxWidth: maxWidth ? `${maxWidth}px` : 'auto',
    width: width ? `${width}px` : 'auto',
    maxHeight: "14px",
    children: jsxRuntimeExports.jsx(material.Typography, {
      textTransform: "uppercase",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "16px",
      children: getVotePillLabel()
    })
  });
};

/**
 * Renders the component that displays the votes submitted for a governance action.
 *
 * @component
 * @param {Props} votes - The votes object containing the vote counts for different categories.
 * @returns {JSX.Element} The rendered VotesSubmitted component.
 */
const VotesSubmitted = ({
  votes: {
    dRepYesVotes,
    dRepAbstainVotes,
    dRepNoVotes,
    poolYesVotes,
    poolAbstainVotes,
    poolNoVotes,
    ccYesVotes,
    ccAbstainVotes,
    ccNoVotes
  }
}) => {
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: [jsxRuntimeExports.jsx("img", {
      alt: "ga icon",
      src: IMAGES.govActionListImage,
      width: "64px",
      height: "64px",
      style: {
        marginBottom: '24px'
      }
    }), jsxRuntimeExports.jsx(Typography, {
      sx: {
        fontSize: '22px',
        fontWeight: '600',
        lineHeight: '28px'
      },
      children: "Votes submitted"
    }), jsxRuntimeExports.jsx(Typography, {
      sx: {
        fontSize: '22px',
        fontWeight: '500',
        lineHeight: '28px',
        mb: 3
      },
      children: "for this Governance Action"
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4.5
      },
      children: [jsxRuntimeExports.jsx(VotesGroup, {
        type: "dReps",
        yesVotes: dRepYesVotes,
        noVotes: dRepNoVotes,
        abstainVotes: dRepAbstainVotes
      }), jsxRuntimeExports.jsx(VotesGroup, {
        type: "sPos",
        yesVotes: poolYesVotes,
        noVotes: poolNoVotes,
        abstainVotes: poolAbstainVotes
      }), jsxRuntimeExports.jsx(VotesGroup, {
        type: "ccCommittee",
        yesVotes: ccYesVotes,
        noVotes: ccNoVotes,
        abstainVotes: ccAbstainVotes
      })]
    })]
  });
};
const VotesGroup = ({
  type,
  yesVotes,
  noVotes,
  abstainVotes
}) => {
  const getLabel = React$1.useCallback(() => {
    switch (type) {
      case 'ccCommittee':
        return 'Constitutional Committee';
      case 'dReps':
        return 'DReps';
      case 'sPos':
        return 'SPOs';
      default:
        return '';
    }
  }, [type]);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    children: [jsxRuntimeExports.jsx(Typography, {
      sx: {
        fontSize: '18px',
        fontWeight: '600',
        lineHeight: '24px'
      },
      children: getLabel()
    }), jsxRuntimeExports.jsx(Vote, {
      type: type,
      vote: "yes",
      value: yesVotes
    }), jsxRuntimeExports.jsx(Vote, {
      type: type,
      vote: "abstain",
      value: abstainVotes
    }), jsxRuntimeExports.jsx(Vote, {
      type: type,
      vote: "no",
      value: noVotes
    })]
  });
};
const Vote = ({
  type,
  vote,
  value
}) => jsxRuntimeExports.jsxs(material.Box, {
  sx: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: 1.5
  },
  children: [jsxRuntimeExports.jsx(VotePill, {
    vote: vote,
    width: 115,
    isCC: type === 'ccCommittee'
  }), jsxRuntimeExports.jsx(Typography, {
    "data-testid": `submitted-votes-${type}-${vote}`,
    sx: {
      fontSize: 16,
      wordBreak: 'break-all'
    },
    children: type === 'sPos' ? value : `₳ ${correctAdaFormat(value)}`
  })]
});

/**
 * Checkbox component.
 *
 * @component
 * @param {ControlledCheckboxProps} props - The props for the Checkbox component.
 * @returns {JSX.Element} The rendered Checkbox component.
 */
const Checkbox = ({
  control,
  name,
  errors,
  rules,
  ...props
}) => {
  const errorMessage = reactHookForm.get(errors, name)?.message;
  const renderInput = React$1.useCallback(({
    field
  }) => jsxRuntimeExports.jsx(Field.Checkbox, {
    checked: !!field.value,
    errorMessage: errorMessage,
    name: field.name,
    onChange: field.onChange,
    value: field.value,
    ...props
  }), [errorMessage, props]);
  return jsxRuntimeExports.jsx(reactHookForm.Controller, {
    name: name,
    control: control,
    rules: rules,
    render: renderInput
  });
};

/**
 * A controlled input component that integrates with a form library.
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   control={control}
 *   name="firstName"
 *   errors={errors}
 *   rules={rules}
 *   placeholder="Enter your first name"
 * />
 * ```
 *
 * @param {ControlledInputProps} props - The component props.
 * @param {React.Ref<HTMLInputElement>} ref - The ref to attach to the input element.
 * @returns {JSX.Element} The rendered input component.
 */
const Input = React$1.forwardRef(({
  control,
  name,
  errors,
  rules,
  ...props
}, ref) => {
  const errorMessage = reactHookForm.get(errors, name)?.message;
  const renderInput = React$1.useCallback(({
    field
  }) => jsxRuntimeExports.jsx(Field.Input, {
    ...props,
    ...field,
    errorMessage: errorMessage,
    ref: ref
  }), [errorMessage, props, ref]);
  return jsxRuntimeExports.jsx(reactHookForm.Controller, {
    name: name,
    control: control,
    rules: rules,
    render: renderInput
  });
});

/**
 * A controlled textarea component that integrates with form libraries like React Hook Form.
 *
 * @component
 * @example
 * // Usage:
 * <TextArea
 *   control={control}
 *   name="myTextarea"
 *   errors={errors}
 *   rules={rules}
 *   placeholder="Enter your text"
 * />
 *
 * @param {ControlledTextAreaProps} props - The props for the TextArea component.
 * @param {Control} props.control - The control object from the form library.
 * @param {string} props.name - The name of the textarea field.
 * @param {Record<string, FieldError>} props.errors - The errors object from the form library.
 * @param {RegisterOptions} props.rules - The validation rules for the textarea field.
 * @returns {JSX.Element} The rendered TextArea component.
 */
const TextArea = ({
  control,
  name,
  errors,
  rules,
  ...props
}) => {
  const errorMessage = reactHookForm.get(errors, name)?.message;
  const renderInput = React$1.useCallback(({
    field
  }) => jsxRuntimeExports.jsx(Field.TextArea, {
    ...props,
    ...field,
    errorMessage: errorMessage
  }), [errorMessage, props]);
  return jsxRuntimeExports.jsx(reactHookForm.Controller, {
    name: name,
    control: control,
    rules: rules,
    render: renderInput
  });
};

/**
 * A component that represents a controlled field.
 *
 * @component
 * @param {ControlledFieldCompositionProps} props - The props for the ControlledField component.
 * @returns {JSX.Element} The rendered ControlledField component.
 */
const ControlledField = ({
  children
}) => jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
  children: children
});
ControlledField.Checkbox = Checkbox;
ControlledField.Input = Input;
ControlledField.TextArea = TextArea;

/**
 * Renders the Governance Action Details Card component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isDashboard - Indicates if the component is rendered in the dashboard.
 * @param {boolean} props.isDataMissing - Indicates if there is missing data.
 * @param {boolean} props.isInProgress - Indicates if the action is in progress.
 * @param {boolean} [props.isVoter=true] - Indicates if the user is a voter.
 * @param {Function} props.vote - The vote function.
 * @param {Object} props.proposal - The proposal object.
 * @returns {JSX.Element} The rendered Governance Action Details Card component.
 */
const GovernanceActionDetailsCard = ({
  isDashboard,
  isDataMissing,
  isInProgress,
  isVoter = true,
  vote,
  proposal
}) => {
  const {
    isEnabled
  } = usePillarContext();
  const [isVoteSubmitted, setIsVoteSubmitted] = React$1.useState(false);
  const {
    screenWidth,
    isMobile
  } = useScreenDimension();
  const isOneColumn = (isDashboard && screenWidth < 1036) ?? isMobile;
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      borderRadius: '20px',
      display: 'grid',
      gridTemplateColumns: isOneColumn ? undefined : '0.6fr 0.4fr',
      mt: '12px',
      width: '100%',
      position: 'relative',
      boxShadow: isInProgress ? '2px 2px 20px 0px rgba(245, 90, 0, 0.20)' : isVoteSubmitted && !isDataMissing ? '2px 2px 20px 0px rgba(98, 188, 82, 0.20)' : '2px 2px 20px 0px rgba(47, 98, 220, 0.20)',
      ...(isDataMissing && {
        border: '1px solid #F6D5D5'
      })
    },
    "data-testid": "governance-action-details-card",
    children: [(isVoteSubmitted || isInProgress) && jsxRuntimeExports.jsx(GovernanceActionCardStatePill, {
      variant: isVoteSubmitted ? 'voteSubmitted' : 'inProgress'
    }), jsxRuntimeExports.jsx(GovernanceActionDetailsCardData, {
      isDashboard: isDashboard,
      isDataMissing: isDataMissing,
      isInProgress: isInProgress,
      isOneColumn: isOneColumn,
      isSubmitted: isVoteSubmitted,
      proposal: proposal
    }), jsxRuntimeExports.jsx(GovernanceActionDetailsCardVotes, {
      setIsVoteSubmitted: setIsVoteSubmitted,
      isVoter: isVoter,
      vote: vote,
      isDashboard: isEnabled,
      isOneColumn: isOneColumn,
      isInProgress: isInProgress,
      proposal: proposal
    })]
  });
};

/**
 * Represents a modal component for displaying an external link.
 * This component is used to warn users about opening external links and provides options to continue or cancel.
 *
 * @component
 * @example
 * ```tsx
 * <ExternalLinkModal />
 * ```
 */
const ExternalLinkModal = React$1.forwardRef((_, ref) => {
  const {
    state,
    closeModal
  } = useModal();
  const {
    isMobile
  } = useScreenDimension();
  const {
    palette: {
      primaryBlue,
      fadedPurple
    }
  } = voltaire;
  return jsxRuntimeExports.jsxs(ModalWrapper, {
    dataTestId: "external-link-modal",
    ref: ref,
    children: [jsxRuntimeExports.jsx("img", {
      alt: "Status icon",
      src: IMAGES.warningYellowImage,
      style: {
        height: '84px',
        margin: '0 auto',
        width: '84px'
      }
    }), jsxRuntimeExports.jsx(ModalHeader, {
      sx: {
        marginTop: '34px'
      },
      children: isMobile ? 'External Link Safety' : 'Be Careful!'
    }), jsxRuntimeExports.jsxs(ModalContents, {
      children: [jsxRuntimeExports.jsx(material.Typography, {
        textAlign: "center",
        sx: {
          fontSize: '16px'
        },
        children: isMobile ? 'This is an external link:' : 'You are about to open an external link to:'
      }), jsxRuntimeExports.jsx(material.Typography, {
        textAlign: "center",
        sx: {
          fontSize: '16px',
          marginBottom: '38px',
          color: primaryBlue,
          textDecoration: 'underline',
          wordBreak: 'break-word'
        },
        children: state?.externalLink
      }), jsxRuntimeExports.jsx(material.Typography, {
        textAlign: "center",
        sx: {
          fontSize: isMobile ? '16px' : '14px',
          marginBottom: '38px',
          color: fadedPurple
        },
        children: "Exercise caution and verify the website's authenticity before sharing personal information. To proceed, click 'Continue'. To stay on Cardano, click 'Cancel'."
      })]
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        gap: '38px'
      },
      children: [jsxRuntimeExports.jsx(material.Button, {
        "data-testid": "continue-modal-button",
        onClick: () => {
          openInNewTab(state?.externalLink || '#');
          closeModal();
        },
        sx: {
          borderRadius: 50,
          textTransform: 'none',
          height: '40px'
        },
        variant: "contained",
        children: isMobile ? 'Continue' : 'Continue to texternal link'
      }), jsxRuntimeExports.jsx(material.Button, {
        "data-testid": "cancel-modal-button",
        onClick: () => {
          closeModal();
        },
        sx: {
          borderRadius: 50,
          padding: '10px 26px',
          textTransform: 'none',
          height: '40px',
          width: '117px'
        },
        variant: "outlined",
        children: "Cancel"
      })]
    })]
  });
});

/**
 * Represents a loading modal component.
 * This component displays a loading spinner and a message while content is being loaded.
 *
 * @component
 * @example
 * ```tsx
 * <LoadingModal />
 * ```
 */
const LoadingModal = React$1.forwardRef((_, ref) => {
  const {
    state
  } = useModal();
  const {
    isMobile
  } = useScreenDimension();
  return jsxRuntimeExports.jsxs(ModalWrapper, {
    dataTestId: state ? state.dataTestId : 'loading-modal',
    hideCloseButton: true,
    ref: ref,
    children: [jsxRuntimeExports.jsx(Loader, {
      size: 100
    }), jsxRuntimeExports.jsx(ModalHeader, {
      sx: {
        marginTop: '34px',
        px: isMobile ? 0 : 3
      },
      children: state?.title
    }), jsxRuntimeExports.jsx(ModalContents, {
      children: jsxRuntimeExports.jsxs(material.Typography, {
        textAlign: "center",
        sx: {
          fontSize: '16px',
          fontWeight: '400'
        },
        children: [state?.message, ' ']
      })
    })]
  });
});

/**
 * Represents a modal component used for displaying status information.
 *
 * @component
 * @example
 * ```tsx
 * <StatusModal />
 * ```
 */
const StatusModal = React$1.forwardRef((_, ref) => {
  const {
    state,
    closeModal
  } = useModal();
  const {
    isMobile
  } = useScreenDimension();
  // const { openFeedbackWindow } = useUsersnapApi();
  const onClickFeedback = () => {
    closeModal();
  };
  return jsxRuntimeExports.jsxs(ModalWrapper, {
    dataTestId: state ? state.dataTestId : 'status-modal',
    ref: ref,
    children: [jsxRuntimeExports.jsx("img", {
      alt: "Status icon",
      src: state?.status === 'warning' ? IMAGES.warningImage : state?.status === 'success' ? IMAGES.successImage : ICONS.timerIcon,
      style: {
        height: '84px',
        margin: '0 auto',
        width: '84px'
      }
    }), jsxRuntimeExports.jsx(ModalHeader, {
      sx: {
        marginTop: '34px',
        px: isMobile ? 0 : 3
      },
      children: state?.title
    }), jsxRuntimeExports.jsx(ModalContents, {
      children: jsxRuntimeExports.jsxs(material.Typography, {
        textAlign: "center",
        sx: {
          fontSize: '16px',
          fontWeight: '400',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 8,
          wordBreak: 'break-word',
          whiteSpace: 'pre-line'
        },
        children: [state?.message, ' ', state?.link && jsxRuntimeExports.jsx(material.Link, {
          onClick: () => openInNewTab(state?.link || ''),
          target: "_blank",
          sx: [{
            '&:hover': {
              cursor: 'pointer'
            }
          }],
          children: state?.linkText || 'this link'
        })]
      })
    }), jsxRuntimeExports.jsx(material.Button, {
      "data-testid": "confirm-modal-button",
      onClick: state?.onSubmit ? state?.onSubmit : closeModal,
      sx: {
        borderRadius: 50,
        margin: '0 auto',
        padding: '10px 26px',
        textTransform: 'none',
        marginTop: '38px',
        width: '100%'
      },
      variant: "contained",
      children: state?.buttonText || 'Confirm'
    }), state?.cancelText && jsxRuntimeExports.jsx(material.Button, {
      "data-testid": "cancel-modal-button",
      onClick: state?.onCancel ? state?.onCancel : closeModal,
      sx: {
        borderRadius: 50,
        margin: '0 auto',
        padding: '10px 26px',
        textTransform: 'none',
        marginTop: '24px',
        width: '100%'
      },
      variant: "outlined",
      children: state?.cancelText
    }), state?.feedbackText && jsxRuntimeExports.jsx(material.Button, {
      "data-testid": "feedback-button",
      onClick: state?.onFeedback ? state?.onFeedback : onClickFeedback,
      sx: {
        borderRadius: 50,
        margin: '0 auto',
        padding: '10px 26px',
        textTransform: 'none',
        marginTop: '24px',
        width: '100%'
      },
      variant: "outlined",
      children: state?.feedbackText
    })]
  });
});

/**
 * Represents a modal component for displaying submitted votes.
 * @param ref - A ref object that is forwarded to the underlying div element.
 * @returns The JSX element representing the submitted votes modal.
 */
const SubmittedVotesModal = React$1.forwardRef((_, ref) => {
  const {
    state
  } = useModal();
  if (!state) return null;
  return jsxRuntimeExports.jsx(ModalWrapper, {
    dataTestId: "submitted-votes-modal",
    sx: {
      maxWidth: '372px',
      paddingBottom: 6
    },
    ref: ref,
    children: jsxRuntimeExports.jsx(ModalContents, {
      children: jsxRuntimeExports.jsx(material.Box, {
        alignItems: "center",
        children: jsxRuntimeExports.jsx(VotesSubmitted, {
          votes: state
        })
      })
    })
  });
});

/**
 * Share component.
 * Renders a button that opens a popover with a link to share.
 *
 * @param link - The link to be shared.
 */
const Share = ({
  link
}) => {
  const {
    addSuccessAlert
  } = usePillarContext();
  const [anchorEl, setAnchorEl] = React$1.useState(null);
  const [isActive, setIsActive] = React$1.useState(true);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onCopy = event => {
    navigator.clipboard.writeText(link);
    addSuccessAlert('Copied to clipboard');
    setIsActive(false);
    event.stopPropagation();
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(material.ButtonBase, {
      "data-testid": "share-button",
      "aria-describedby": id,
      onClick: handleClick,
      sx: theme => ({
        alignItems: 'center',
        bgcolor: open ? '#F7F9FB' : 'transparent',
        borderRadius: 50,
        boxShadow: open ? theme.shadows[1] : 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        padding: 1.5,
        transition: 'all 0.3s',
        '&:hover': {
          boxShadow: theme.shadows[1],
          bgcolor: '#F7F9FB'
        }
      }),
      children: jsxRuntimeExports.jsx("img", {
        alt: "",
        height: 24,
        width: 24,
        src: ICONS.share
      })
    }), jsxRuntimeExports.jsx(material.Popover, {
      id: id,
      open: open,
      onClose: handleClose,
      anchorEl: anchorEl,
      marginThreshold: 12,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      children: jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          alignItems: 'center',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '12px 24px',
          px: 3,
          width: 148
        },
        children: [jsxRuntimeExports.jsx(Typography, {
          sx: {
            alignSelf: 'flex-start'
          },
          children: "Share"
        }), jsxRuntimeExports.jsx(material.ButtonBase, {
          "data-testid": "copy-link-from-share-button",
          onClick: onCopy,
          sx: {
            alignItems: 'center',
            bgcolor: isActive ? 'lightBlue' : 'neutralWhite',
            borderRadius: 50,
            boxShadow: theme => theme.shadows[1],
            cursor: 'pointer',
            display: 'flex',
            height: 48,
            justifyContent: 'center',
            width: 48,
            mt: 1.5,
            mb: 1
          },
          children: jsxRuntimeExports.jsx("img", {
            alt: "link",
            height: 24,
            src: ICONS.link,
            width: 24
          })
        }), jsxRuntimeExports.jsx(Typography, {
          variant: "caption",
          children: isActive ? 'Click to copy link' : 'Link copied'
        })]
      })
    })]
  });
};

/**
 * Slider component that displays a slider with data.
 *
 * @param {SliderProps} props - The props for the Slider component.
 * @returns {JSX.Element} The rendered Slider component.
 */
const Slider = ({
  data,
  title,
  isShowAll = true,
  dataLength = 0,
  notSlicedDataLength = 0,
  onDashboard = false,
  filters,
  searchPhrase,
  sorting,
  pendingTransaction,
  onClickShowAll
}) => {
  const [isSliderInitialized, setIsSliderInitialized] = React$1.useState(false);
  const {
    isMobile,
    screenWidth
  } = useScreenDimension();
  const {
    palette: {
      primaryBlue,
      arcticWhite,
      lightBlue
    }
  } = voltaire;
  const DEFAULT_SLIDER_CONFIG = {
    mode: 'free',
    initial: 0,
    slides: {
      perView: 'auto',
      spacing: 20
    }
  };
  const isShowArrows = React$1.useMemo(() =>
  // Arrows are to be show only on desktop view.
  // 268 - side menu width; 40 - distance needed from the left on
  // disconnected wallet (no side menu); 350 - gov action card width;
  // other values are for paddings and margins
  screenWidth < (onDashboard ? 268 : 40) + 28 + dataLength * 350 + 20 * dataLength - 5, [screenWidth, onDashboard, dataLength]);
  const {
    sliderRef,
    instanceRef,
    currentSlide,
    itemsPerView
  } = useSlider({
    config: DEFAULT_SLIDER_CONFIG
  });
  const refresh = () => {
    instanceRef.current?.update(instanceRef.current?.options);
    instanceRef.current?.track.to(0);
    instanceRef.current?.moveToIdx(0);
  };
  React$1.useEffect(() => {
    if (instanceRef.current) {
      setIsSliderInitialized(true);
    }
  }, [instanceRef]);
  React$1.useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, sorting, searchPhrase, pendingTransaction?.vote?.resourceId, data]);
  return jsxRuntimeExports.jsxs(material.Box, {
    children: [jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
        mb: 3.5,
        height: '46px'
      },
      children: [jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        },
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "title2",
          children: title
        }), (notSlicedDataLength > 6 || isMobile && isShowAll) && jsxRuntimeExports.jsx(Button, {
          variant: "contained",
          size: "medium",
          sx: {
            border: `1px solid ${lightBlue}`,
            backgroundColor: arcticWhite,
            boxShadow: 'none',
            color: primaryBlue,
            minWidth: 93,
            '&:hover': {
              backgroundColor: arcticWhite
            }
          },
          onClick: onClickShowAll,
          children: "Show All"
        })]
      }), isSliderInitialized && isShowArrows && dataLength > 1 && !isMobile && jsxRuntimeExports.jsx(SliderArrows, {
        currentSlide: currentSlide,
        instanceRef: instanceRef,
        itemsPerView: itemsPerView
      })]
    }), jsxRuntimeExports.jsx("div", {
      ref: sliderRef,
      className: "keen-slider",
      style: {
        width: '100%',
        overflow: 'visible'
      },
      children: data
    })]
  });
};

/**
 * VoteActionForm component represents a form for voting on a proposal.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.setIsVoteSubmitted - A function to set the state of whether the vote is submitted.
 * @param {Object} props.previousVote - The previous vote object.
 * @param {boolean} props.isInProgress - A flag indicating whether the voting is in progress.
 * @param {Object} props.proposal - The proposal object.
 * @param {string} props.proposal.expiryDate - The expiry date of the proposal.
 * @param {number} props.proposal.expiryEpochNo - The expiry epoch number of the proposal.
 * @returns {JSX.Element} The rendered VoteActionForm component.
 */
const VoteActionForm = ({
  setIsVoteSubmitted,
  previousVote,
  isInProgress,
  proposal,
  proposal: {
    expiryDate,
    expiryEpochNo
  }
}) => {
  const [voteContextHash, setVoteContextHash] = React$1.useState();
  const [voteContextUrl, setVoteContextUrl] = React$1.useState();
  const [showWholeVoteContext, setShowWholeVoteContext] = React$1.useState(false);
  const {
    voter
  } = usePillarContext();
  const {
    voteContextText
  } = useGetVoteContextTextFromFile(voteContextUrl);
  const {
    isMobile,
    screenWidth
  } = useScreenDimension();
  const {
    openModal
  } = useModal();
  const {
    areFormErrors,
    confirmVote,
    isDirty,
    isVoteLoading,
    registerInput,
    setValue,
    vote,
    canVote
  } = useVoteActionForm({
    previousVote,
    voteContextHash,
    voteContextUrl
  });
  const setVoteContextData = (url, hash) => {
    setVoteContextUrl(url);
    setVoteContextHash(hash ?? undefined);
  };
  React$1.useEffect(() => {
    if (previousVote?.vote) {
      setValue('vote', previousVote.vote);
      setIsVoteSubmitted(true);
    }
  }, [previousVote?.vote, setValue, setIsVoteSubmitted]);
  React$1.useEffect(() => {
    if (previousVote?.url) {
      setVoteContextUrl(previousVote.url);
    }
  }, [previousVote?.url, setVoteContextUrl]);
  const renderCancelButton = React$1.useMemo(() => jsxRuntimeExports.jsx(Button, {
    "data-testid": "cancel-button",
    onClick: () => setValue('vote', previousVote?.vote ?? ''),
    variant: "outlined",
    size: "extraLarge",
    sx: {
      width: '100%'
    },
    children: "Cancel"
  }), [previousVote?.vote, setValue]);
  const renderChangeVoteButton = React$1.useMemo(() => jsxRuntimeExports.jsx(Button, {
    "data-testid": "change-vote",
    onClick: confirmVote,
    disabled: !canVote,
    isLoading: isVoteLoading,
    variant: "contained",
    sx: {
      borderRadius: 50,
      textTransform: 'none',
      width: '100%',
      height: 48
    },
    children: "Change vote"
  }), [confirmVote, canVote, isVoteLoading]);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      ...(isInProgress && {
        opacity: 0.5
      })
    },
    children: [jsxRuntimeExports.jsxs(material.Box, {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      children: [previousVote?.date ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsxs(Typography, {
          variant: "body1",
          sx: {
            whiteSpace: 'pre-line',
            fontWeight: 400,
            mb: 1,
            alignSelf: 'start'
          },
          children: [jsxRuntimeExports.jsx(Typography, {
            variant: "body1",
            component: "span",
            sx: {
              whiteSpace: 'pre-line',
              fontWeight: 600,
              mb: 1,
              alignSelf: 'start'
            },
            children: `You voted ${previousVote?.vote.toLocaleUpperCase()} on this proposal`
          }), jsxRuntimeExports.jsx(Typography, {
            sx: {
              whiteSpace: 'pre-line',
              fontWeight: 400,
              mb: 1,
              alignSelf: 'start'
            },
            children: `on ${formatDisplayDate(previousVote.date)} (Epoch ${previousVote.epochNo})`
          })]
        }), jsxRuntimeExports.jsx(Typography, {
          variant: "caption",
          sx: {
            lineHeight: '18px',
            alignSelf: 'start'
          },
          children: `You can change your vote up to ${expiryDate} (Epoch ${expiryEpochNo})`
        })]
      }) : jsxRuntimeExports.jsx(Typography, {
        variant: "body1",
        children: "Choose how you want to vote:"
      }), jsxRuntimeExports.jsxs(material.Box, {
        mt: 3,
        sx: {
          alignSelf: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        },
        children: [jsxRuntimeExports.jsx(Radio, {
          dataTestId: "yes-radio",
          isChecked: vote?.toLowerCase() === 'yes',
          name: "vote",
          register: registerInput,
          setValue: setValue,
          title: "Yes",
          value: "yes",
          disabled: isInProgress
        }), jsxRuntimeExports.jsx(Radio, {
          dataTestId: "no-radio",
          isChecked: vote?.toLowerCase() === 'no',
          name: "vote",
          register: registerInput,
          setValue: setValue,
          title: "No",
          value: "no",
          disabled: isInProgress
        }), jsxRuntimeExports.jsx(Radio, {
          dataTestId: "abstain-radio",
          isChecked: vote?.toLowerCase() === 'abstain',
          name: "vote",
          register: registerInput,
          setValue: setValue,
          title: "Abstain",
          value: "abstain",
          disabled: isInProgress
        })]
      }), (voter?.isRegisteredAsDRep || voter?.isRegisteredAsSoleVoter) && jsxRuntimeExports.jsx(Button, {
        "data-testid": "show-votes-button",
        variant: "text",
        size: "large",
        disabled: isInProgress,
        sx: {
          mt: '26px',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '20px'
        },
        onClick: () => {
          openModal({
            type: 'submittedVotes',
            state: {
              ...proposal,
              vote: previousVote?.vote
            }
          });
        },
        children: "Show votes"
      }), jsxRuntimeExports.jsx(Typography, {
        variant: "body1",
        sx: {
          textTransform: 'uppercase',
          fontSize: '14px',
          color: orange.c400,
          mt: 6
        },
        children: "Optional"
      }), jsxRuntimeExports.jsx(Typography, {
        variant: "body2",
        sx: {
          textAlign: 'center',
          mt: '5px'
        },
        children: voteContextText ? 'Context about your vote' : 'You can provide context about your vote. This information will be viewable by other users.'
      }), voteContextText && jsxRuntimeExports.jsxs(material.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          mt: 2
        },
        children: [jsxRuntimeExports.jsx(Typography, {
          variant: "body2",
          sx: {
            fontWeight: 400,
            color: 'neutralGray',
            ...(!showWholeVoteContext && {
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2
            })
          },
          children: voteContextText
        }), jsxRuntimeExports.jsx(Button, {
          onClick: () => {
            setShowWholeVoteContext(prev => !prev);
          },
          sx: {
            p: 0,
            margin: '0 auto',
            ':hover': {
              backgroundColor: 'transparent'
            }
          },
          disableRipple: true,
          variant: "text",
          "data-testid": "external-modal-button",
          children: jsxRuntimeExports.jsx(Typography, {
            variant: "body2",
            sx: {
              fontWeight: 400,
              color: 'primaryBlue',
              borderBottom: '1px solid'
            },
            children: showWholeVoteContext ? 'Show less' : 'Show more'
          })
        })]
      }), jsxRuntimeExports.jsx(Button, {
        variant: "outlined",
        onClick: () => {
          openModal({
            type: 'voteContext',
            state: {
              onSubmit: setVoteContextData
            }
          });
        },
        sx: {
          mt: voteContextText ? '40px' : '12px',
          fontSize: screenWidth < 390 ? '12px' : screenWidth < 1036 ? '14px' : screenWidth < 1080 ? '10.5px' : screenWidth < 1480 ? '11.5px' : '14px'
        },
        "data-testid": "provide-context-button",
        children: voteContextText ? 'Provide new context about your vote' : 'Provide context about your vote'
      })]
    }), jsxRuntimeExports.jsx(Typography, {
      sx: {
        mb: 2,
        mt: 3,
        textAlign: 'center',
        visibility: previousVote?.vote ? 'visible' : 'hidden'
      },
      variant: "caption",
      children: "Select a different option to change your vote"
    }), previousVote?.vote && previousVote?.vote !== vote ? jsxRuntimeExports.jsxs(material.Box, {
      display: "flex",
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: "space-between",
      children: [isMobile ? renderChangeVoteButton : renderCancelButton, jsxRuntimeExports.jsx(material.Box, {
        px: 1,
        py: isMobile ? 1.5 : 0
      }), isMobile ? renderCancelButton : renderChangeVoteButton]
    }) : jsxRuntimeExports.jsx(Button, {
      "data-testid": "vote-button",
      variant: "contained",
      disabled: !vote || previousVote?.vote === vote || areFormErrors && isDirty,
      isLoading: isVoteLoading,
      onClick: confirmVote,
      size: "extraLarge",
      children: "Vote"
    })]
  });
};

/**
 * Represents a modal component for voting context.
 *
 * @returns The rendered VoteContextModal component.
 */
const VoteContextModal = () => {
  const [step, setStep] = React$1.useState(1);
  const [savedHash, setSavedHash] = React$1.useState('');
  const [errorMessage, setErrorMessage] = React$1.useState(undefined);
  const {
    state,
    closeModal
  } = useModal();
  const methods = reactHookForm.useForm({
    mode: 'onChange'
  });
  const {
    getValues
  } = methods;
  const submitVoteContext = () => {
    if (state && savedHash) {
      state.onSubmit(getValues('storingURL'), savedHash, getValues('voteContextText'));
    }
    closeModal();
  };
  return jsxRuntimeExports.jsx(ModalWrapper, {
    dataTestId: "vote-context-modal",
    sx: {
      maxWidth: '700px',
      p: '60px 32px 32px'
    },
    children: jsxRuntimeExports.jsxs(reactHookForm.FormProvider, {
      ...methods,
      children: [step === 1 && jsxRuntimeExports.jsx(VoteContextText, {
        setStep: setStep,
        onCancel: closeModal
      }), step === 2 && jsxRuntimeExports.jsx(VoteContextTerms, {
        setStep: setStep,
        onCancel: closeModal
      }), step === 3 && jsxRuntimeExports.jsx(VoteContextStoringInformation, {
        setSavedHash: setSavedHash,
        setStep: setStep,
        setErrorMessage: setErrorMessage,
        onCancel: closeModal
      }), step === 4 && jsxRuntimeExports.jsx(VoteContextCheckResult, {
        submitVoteContext: submitVoteContext,
        closeModal: closeModal,
        setStep: setStep,
        errorMessage: errorMessage
      })]
    })
  });
};

var OpenInNew = {};

var _interopRequireDefault = interopRequireDefaultExports;
Object.defineProperty(OpenInNew, "__esModule", {
  value: true
});
var default_1 = OpenInNew.default = void 0;
var _createSvgIcon = _interopRequireDefault(requireCreateSvgIcon());
var _jsxRuntime = jsxRuntimeExports;
default_1 = OpenInNew.default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
}), 'OpenInNew');

/**
 * Renders the component for storing information in the vote context.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setStep - The function to set the current step.
 * @param {Function} props.setSavedHash - The function to set the saved hash.
 * @param {Function} props.setErrorMessage - The function to set the error message.
 * @param {Function} props.onCancel - The function to handle cancel action.
 * @returns {JSX.Element} The rendered component.
 */
const VoteContextStoringInformation = ({
  setStep,
  setSavedHash,
  setErrorMessage,
  onCancel
}) => {
  const {
    screenWidth
  } = useScreenDimension();
  const {
    control,
    errors,
    validateURL,
    watch,
    generateMetadata,
    onClickDownloadJson
  } = useVoteContextForm(setSavedHash, setStep, setErrorMessage);
  const openGuideAboutStoringInformation = () => openInNewTab('https://docs.gov.tools/using-govtool/govtool-functions/storing-information-offline');
  const isContinueDisabled = !watch('storingURL');
  React$1.useEffect(() => {
    generateMetadata();
  }, [generateMetadata]);
  return jsxRuntimeExports.jsxs(VoteContextWrapper, {
    onContinue: validateURL,
    isContinueDisabled: isContinueDisabled,
    onCancel: onCancel,
    children: [jsxRuntimeExports.jsx(Typography, {
      sx: {
        textAlign: 'center'
      },
      variant: "headline4",
      children: "Information Storage Steps"
    }), jsxRuntimeExports.jsx(Button, {
      endIcon: jsxRuntimeExports.jsx(default_1, {
        sx: {
          color: 'primary',
          height: 17,
          width: 17
        }
      }),
      onClick: openGuideAboutStoringInformation,
      size: "extraLarge",
      sx: {
        alignSelf: 'center',
        width: 'fit-content'
      },
      variant: "text",
      children: "Read full guide"
    }), jsxRuntimeExports.jsx(Typography, {
      fontWeight: 400,
      sx: {
        textAlign: 'center'
      },
      variant: "body1",
      children: "Download your file, save it to your chosen location, and enter the URL of that location in step 3"
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        my: 4
      },
      children: [jsxRuntimeExports.jsx(Step, {
        component: jsxRuntimeExports.jsx(Button, {
          "data-testid": "metadata-download-button",
          onClick: onClickDownloadJson,
          size: "extraLarge",
          startIcon: jsxRuntimeExports.jsx("img", {
            alt: "download",
            src: ICONS.download
          }),
          sx: {
            width: 'fit-content',
            ml: screenWidth < 1024 ? 0 : 1.75,
            mt: screenWidth < 1024 ? 1.5 : 0
          },
          variant: "outlined",
          children: "Vote_Context.jsonld"
        }),
        componentsLayoutStyles: {
          alignItems: screenWidth < 1024 ? undefined : 'center',
          flexDirection: screenWidth < 1024 ? 'column' : 'row'
        },
        label: "Vote_Context.jsonld",
        stepNumber: 1
      }), jsxRuntimeExports.jsx(Spacer, {
        y: 6
      }), jsxRuntimeExports.jsx(Step, {
        component: jsxRuntimeExports.jsx(Button, {
          endIcon: jsxRuntimeExports.jsx(default_1, {
            sx: {
              color: 'primary',
              height: 17,
              width: 17
            }
          }),
          onClick: openGuideAboutStoringInformation,
          size: "extraLarge",
          sx: {
            width: 'fit-content'
          },
          variant: "text",
          children: "Read full guide"
        }),
        label: "Save this file in a location that provides a public URL (e.g. github)",
        stepNumber: 2
      }), jsxRuntimeExports.jsx(Spacer, {
        y: 6
      }), jsxRuntimeExports.jsx(Step, {
        component: jsxRuntimeExports.jsx(ControlledField.Input, {
          ...{
            control,
            errors
          },
          dataTestId: "metadata-url-input",
          name: "storingURL",
          layoutStyles: {
            mt: 1.5
          },
          placeholder: "URL",
          rules: {
            required: {
              value: true,
              message: 'This field is required'
            },
            pattern: {
              value: URL_REGEX,
              message: 'Invalid URL'
            }
          }
        }),
        label: "Paste the URL here",
        stepNumber: 3
      })]
    })]
  });
};

/**
 * Renders the result of the vote context check.
 * @param {Object} props - The component props.
 * @param {Function} props.submitVoteContext - The function to submit the vote context.
 * @param {Function} props.closeModal - The function to close the modal.
 * @param {Function} props.setStep - The function to set the step.
 * @param {string} props.errorMessage - The error message, if any.
 * @param {boolean} props.isContinueDisabled - Indicates if the continue button is disabled.
 * @returns {JSX.Element} The rendered component.
 */
const VoteContextCheckResult = ({
  submitVoteContext,
  closeModal,
  setStep,
  errorMessage,
  isContinueDisabled
}) => {
  const {
    isMobile
  } = useScreenDimension();
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    children: [jsxRuntimeExports.jsx("img", {
      alt: "Status icon",
      src: errorMessage ? IMAGES.warningImage : IMAGES.successImage,
      style: {
        height: '84px',
        margin: '0 auto',
        width: '84px'
      }
    }), jsxRuntimeExports.jsx(Typography, {
      variant: "title2",
      sx: {
        lineHeight: '34px',
        mb: 1,
        mt: 3
      },
      children: errorMessage ? 'Data validation failed' : 'Success'
    }), jsxRuntimeExports.jsx(Typography, {
      variant: "body1",
      sx: {
        fontWeight: 400,
        mb: 2
      },
      children: errorMessage ?? 'Data check has been successful'
    }), !errorMessage ? jsxRuntimeExports.jsx(Button, {
      "data-testid": "go-to-vote-modal-button",
      onClick: submitVoteContext,
      sx: {
        borderRadius: 50,
        margin: '0 auto',
        padding: '10px 26px',
        textTransform: 'none',
        marginTop: '38px',
        width: '100%'
      },
      variant: "contained",
      children: "Go to Vote"
    }) : jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '40px',
        width: '100%',
        ...(isMobile && {
          flexDirection: 'column-reverse',
          gap: 3
        })
      },
      children: [jsxRuntimeExports.jsx(Button, {
        "data-testid": "go-back-modal-button",
        onClick: () => setStep(3),
        size: "large",
        sx: {
          width: isMobile ? '100%' : '154px'
        },
        variant: "outlined",
        children: "Go back"
      }), jsxRuntimeExports.jsx(Button, {
        "data-testid": "close-modal-button",
        disabled: isContinueDisabled,
        onClick: closeModal,
        size: "large",
        sx: {
          width: isMobile ? '100%' : '154px'
        },
        variant: "contained",
        children: "Close"
      })]
    })]
  });
};

/**
 * Renders the VoteContextTerms component.
 *
 * @param {StoreDataInfoProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 */
const VoteContextTerms = ({
  setStep,
  onCancel
}) => {
  const {
    control,
    errors,
    watch
  } = useVoteContextForm();
  const {
    isMobile
  } = useScreenDimension();
  const openLink = () => openInNewTab('https://docs.gov.tools/using-govtool/govtool-functions/storing-information-offline');
  const isContinueDisabled = !watch('terms');
  return jsxRuntimeExports.jsxs(VoteContextWrapper, {
    onContinue: () => setStep(3),
    isContinueDisabled: isContinueDisabled,
    onCancel: onCancel,
    children: [jsxRuntimeExports.jsx(Typography, {
      sx: {
        textAlign: 'center'
      },
      variant: "headline4",
      children: "Store and Maintain the Data Yourself"
    }), jsxRuntimeExports.jsx(material.Link, {
      onClick: openLink,
      sx: {
        cursor: 'pointer',
        fontSize: 16,
        fontWeight: 500,
        fontFamily: 'Poppins',
        my: 4,
        textAlign: 'center',
        textDecoration: 'none'
      },
      children: "Learn more about storing information"
    }), jsxRuntimeExports.jsx(ControlledField.Checkbox, {
      ...{
        control,
        errors
      },
      name: "terms",
      label: "I agree to store correctly this information and to maintain them over the years",
      layoutStyles: {
        display: 'flex',
        justifyContent: 'center'
      }
    }), jsxRuntimeExports.jsx(Spacer, {
      y: isMobile ? 4 : 12.5
    }), jsxRuntimeExports.jsx(material.Box, {
      display: "flex",
      flex: 1
    })]
  });
};

/**
 * Wrapper component for the VoteContext.
 *
 * @component
 * @param {PropsWithChildren<VoteContextWrapperProps>} props - The component props.
 * @param {Function} props.onContinue - The function to be called when the "Continue" button is clicked.
 * @param {boolean} props.isContinueDisabled - A boolean indicating whether the "Continue" button should be disabled.
 * @param {Function} props.onCancel - The function to be called when the "Cancel" button is clicked.
 * @param {ReactNode} props.children - The child components to be rendered inside the wrapper.
 * @returns {JSX.Element} The rendered VoteContextWrapper component.
 */
const VoteContextWrapper = ({
  onContinue,
  isContinueDisabled,
  onCancel,
  children
}) => {
  const {
    isMobile
  } = useScreenDimension();
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: children
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '40px',
        ...(isMobile && {
          flexDirection: 'column-reverse',
          gap: 3
        })
      },
      children: [jsxRuntimeExports.jsx(Button, {
        "data-testid": "cancel-modal-button",
        onClick: onCancel,
        size: "large",
        sx: {
          width: isMobile ? '100%' : '154px'
        },
        variant: "outlined",
        children: "Cancel"
      }), jsxRuntimeExports.jsx(Button, {
        "data-testid": "confirm-modal-button",
        disabled: isContinueDisabled,
        onClick: onContinue,
        size: "large",
        sx: {
          width: isMobile ? '100%' : '154px'
        },
        variant: "contained",
        children: "Continue"
      })]
    })]
  });
};

/**
 * Renders the vote context text component.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.setStep - The function to set the current step.
 * @param {Function} props.onCancel - The function to handle cancel action.
 * @returns {JSX.Element} The rendered component.
 */
const VoteContextText = ({
  setStep,
  onCancel
}) => {
  const {
    control,
    errors,
    watch
  } = useVoteContextForm();
  const isContinueDisabled = !watch('voteContextText');
  const fieldProps = {
    key: 'voteContextText',
    layoutStyles: {
      mb: 3
    },
    name: 'voteContextText',
    placeholder: 'Provide context',
    rules: {
      required: {
        value: true,
        message: 'This field is required'
      },
      maxLength: {
        value: 500,
        message: `Max ${500} characters`
      }
    }
  };
  return jsxRuntimeExports.jsxs(VoteContextWrapper, {
    onContinue: () => setStep(2),
    isContinueDisabled: isContinueDisabled,
    onCancel: onCancel,
    children: [jsxRuntimeExports.jsx(Typography, {
      variant: "body1",
      sx: {
        textTransform: 'uppercase',
        color: orange.c400
      },
      children: "Optional"
    }), jsxRuntimeExports.jsx(Typography, {
      variant: "title2",
      sx: {
        lineHeight: '34px',
        mb: 1
      },
      children: "Provide context about your vote"
    }), jsxRuntimeExports.jsx(Typography, {
      variant: "body1",
      sx: {
        fontWeight: 400,
        mb: 2
      },
      children: "Additional information about your vote"
    }), jsxRuntimeExports.jsx(ControlledField.TextArea, {
      ...{
        control,
        errors
      },
      ...fieldProps,
      isModifiedLayout: true,
      "data-testid": "provide-context-input"
    })]
  });
};

const GovernanceActionVotedOnCard = ({
  votedProposal,
  inProgress
}) => {
  const navigate = reactRouterDom.useNavigate();
  const {
    proposal,
    vote
  } = votedProposal;
  const {
    abstract,
    createdDate,
    createdEpochNo,
    expiryDate,
    expiryEpochNo,
    index,
    metadataStatus,
    metadataValid,
    txHash,
    type,
    title
  } = proposal;
  const {
    isMobile,
    screenWidth
  } = useScreenDimension();
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      width: screenWidth < 420 ? 290 : isMobile ? 324 : 350,
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0px 4px 15px 0px #DDE3F5',
      borderRadius: '20px',
      backgroundColor: !metadataValid ? 'rgba(251, 235, 235, 0.50)' : 'rgba(255, 255, 255, 0.3)',
      border: inProgress ? '1px solid #FFCBAD' : !metadataValid ? '1px solid #F6D5D5' : '1px solid #C0E4BA'
    },
    "data-testid": `govaction-${getProposalTypeNoEmptySpaces(type)}-card`,
    children: [jsxRuntimeExports.jsx(GovernanceActionCardStatePill, {
      variant: inProgress ? 'inProgress' : 'voteSubmitted'
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        padding: '40px 24px 0'
      },
      children: [jsxRuntimeExports.jsx(GovernanceActionCardHeader, {
        title: title,
        isDataMissing: metadataStatus
      }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
        label: "Abstract",
        text: abstract,
        textVariant: "twoLines",
        dataTestId: "governance-action-abstract",
        isSliderCard: true
      }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
        label: "Governance Action Type:",
        text: getProposalTypeLabel(type),
        textVariant: "pill",
        dataTestId: `${getProposalTypeNoEmptySpaces(type)}-type`,
        isSliderCard: true
      }), jsxRuntimeExports.jsx(GovernanceActionsDatesBox, {
        createdDate: createdDate,
        expiryDate: expiryDate,
        expiryEpochNo: expiryEpochNo,
        createdEpochNo: createdEpochNo,
        isSliderCard: true
      }), jsxRuntimeExports.jsx(GovernanceActionCardElement, {
        label: "Governance Action ID:",
        text: getFullGovActionId(txHash, index),
        dataTestId: `${getFullGovActionId(txHash, index)}-id`,
        isCopyButton: true,
        isSliderCard: true
      }), jsxRuntimeExports.jsx(GovernanceActionCardMyVote, {
        voteTxHash: vote.txHash,
        vote: vote.vote
      })]
    }), jsxRuntimeExports.jsx(material.Box, {
      bgcolor: "white",
      px: isMobile ? 2 : 5,
      py: 2,
      sx: {
        boxShadow: '0px 4px 15px 0px #DDE3F5',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
      },
      children: jsxRuntimeExports.jsx(Button, {
        disabled: inProgress,
        "data-testid": `govaction-${getFullGovActionId(txHash, index)}-change-your-vote`,
        onClick: () => navigate(PATHS.governanceActionsAction.replace(':proposalId', getFullGovActionId(txHash, index)), {
          state: {
            proposal,
            vote
          }
        }),
        sx: {
          width: '100%'
        },
        variant: "contained",
        children: "View details"
      })
    })]
  });
};

({
  none: {
    component: null
  },
  loadingModal: {
    component: jsxRuntimeExports.jsx(LoadingModal, {})
  },
  statusModal: {
    component: jsxRuntimeExports.jsx(StatusModal, {})
  },
  externalLink: {
    component: jsxRuntimeExports.jsx(ExternalLinkModal, {})
  },
  submittedVotes: {
    component: jsxRuntimeExports.jsx(SubmittedVotesModal, {})
  },
  voteContext: {
    component: jsxRuntimeExports.jsx(VoteContextModal, {})
  }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModalContext = React$1.createContext({});
ModalContext.displayName = 'ModalContext';
function useModal() {
  const context = React$1.useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

const PillarContext = React$1.createContext(undefined);
const PillarProvider = ({
  children,
  apiUrl,
  walletApi,
  validationApiUrl,
  cExplorerBaseUrl,
  openFeedbackWindow,
  isVotingOnGovernanceActionEnabled,
  epochParams,
  addSuccessAlert,
  validateMetadata,
  generateMetadata,
  createJsonLD,
  createHash,
  voter
}) => {
  const contextValue = React$1.useMemo(() => ({
    apiUrl,
    validationApiUrl,
    cExplorerBaseUrl,
    openFeedbackWindow,
    isVotingOnGovernanceActionEnabled,
    epochParams,
    addSuccessAlert,
    validateMetadata,
    generateMetadata,
    createJsonLD,
    createHash,
    voter,
    ...(walletApi || {})
  }), [apiUrl, validationApiUrl, openFeedbackWindow, isVotingOnGovernanceActionEnabled, epochParams, addSuccessAlert, validateMetadata, generateMetadata, createJsonLD, createHash, voter, walletApi, cExplorerBaseUrl]);
  return jsxRuntimeExports.jsx(PillarContext.Provider, {
    value: contextValue,
    children: children
  });
};
const usePillarContext = () => {
  const context = React$1.useContext(PillarContext);
  if (context === undefined) {
    throw new Error('usePillarContext must be used within a PillarProvider');
  }
  return context;
};

/**
 * Renders a component that displays governance actions to vote on.
 *
 * @param filters - The filters to apply to the governance actions.
 * @param onDashboard - A boolean indicating whether the component is being rendered on the dashboard.
 * @param proposals - An array of proposal data.
 * @param searchPhrase - The search phrase to filter the governance actions.
 * @param sorting - The sorting option for the governance actions.
 * @returns The rendered component.
 */
const GovernanceActionsToVote = ({
  filters,
  onDashboard = true,
  proposals,
  searchPhrase,
  sorting
}) => {
  const {
    isMobile
  } = useScreenDimension();
  const navigate = reactRouterDom.useNavigate();
  const onGovernanceActionCardClick = React$1.useCallback(action => () => {
    navigate(reactRouterDom.generatePath(PATHS.governanceActionsAction, {
      proposalId: getFullGovActionId(action.txHash, action.index)
    }), {
      state: {
        proposal: action
      }
    });
  }, [navigate]);
  const onGovernanceActionSliderShowAllClick = React$1.useCallback(title => () => {
    navigate(reactRouterDom.generatePath(PATHS.governanceActionsCategory, {
      category: title
    }));
  }, [navigate]);
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: !proposals.length ? jsxRuntimeExports.jsx(Typography, {
      fontWeight: 300,
      sx: {
        py: 4
      },
      children: "No results for the search."
    }) : jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: proposals?.map((item, index) => jsxRuntimeExports.jsxs(material.Box, {
        pb: 2.5,
        children: [jsxRuntimeExports.jsx(Slider, {
          data: item.actions.slice(0, 6).map(action => jsxRuntimeExports.jsx("div", {
            className: "keen-slider__slide",
            style: {
              overflow: 'visible',
              width: 'auto'
            },
            children: jsxRuntimeExports.jsx(GovernanceActionCard, {
              ...action,
              inProgress: false,
              onClick: onGovernanceActionCardClick(action)
            })
          }, action.id)),
          dataLength: item.actions.slice(0, 6).length,
          filters: filters,
          notSlicedDataLength: item.actions.length,
          onDashboard: onDashboard,
          searchPhrase: searchPhrase,
          sorting: sorting,
          title: getProposalTypeTitle(item.title),
          onClickShowAll: onGovernanceActionSliderShowAllClick(item.title)
        }), index < proposals.length - 1 && jsxRuntimeExports.jsx(material.Box, {
          height: isMobile ? 40 : 52
        })]
      }, item.title))
    })
  });
};

/**
 * Renders a component that displays the Governance Actions that the user has voted on.
 *
 * @param filters - The filters to apply to the Governance Actions.
 * @param searchPhrase - The search phrase to filter the Governance Actions.
 * @param sorting - The sorting options for the Governance Actions.
 * @returns The rendered component.
 */
const GovernanceActionsVotedOn = ({
  filters,
  searchPhrase,
  sorting
}) => {
  const {
    data,
    areDRepVotesLoading
  } = useGetDRepVotesQuery(filters, sorting, searchPhrase);
  const {
    isMobile
  } = useScreenDimension();
  const {
    pendingTransaction
  } = usePillarContext();
  const navigate = reactRouterDom.useNavigate();
  const onGovernanceActionSliderShowAllClick = React$1.useCallback(title => () => {
    navigate(reactRouterDom.generatePath(PATHS.governanceActionsCategory, {
      category: title
    }));
  }, [navigate]);
  const filteredData = React$1.useMemo(() => {
    if (data.length && searchPhrase) {
      return data.map(entry => ({
        ...entry,
        actions: entry.actions.filter(action => getFullGovActionId(action.proposal.txHash, action.proposal.index).toLowerCase().includes(searchPhrase.toLowerCase()))
      })).filter(entry => entry.actions.length > 0);
    }
    return data;
  }, [data, searchPhrase]);
  return areDRepVotesLoading ? jsxRuntimeExports.jsx(material.Box, {
    py: 4,
    display: "flex",
    justifyContent: "center",
    children: jsxRuntimeExports.jsx(material.CircularProgress, {})
  }) : jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: !data.length ? jsxRuntimeExports.jsx(material.Typography, {
      py: 4,
      fontWeight: "300",
      children: "You haven't voted on any Governance Actions yet. Check the 'To vote on' section to vote on Governance Actions."
    }) : !filteredData?.length ? jsxRuntimeExports.jsx(material.Typography, {
      py: 4,
      fontWeight: "300",
      children: "No results for the search."
    }) : jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
      children: filteredData?.map(item => jsxRuntimeExports.jsxs("div", {
        children: [jsxRuntimeExports.jsx(Slider, {
          title: getProposalTypeLabel(item.title),
          searchPhrase: searchPhrase,
          dataLength: item.actions.slice(0, 6).length,
          onDashboard: true,
          onClickShowAll: onGovernanceActionSliderShowAllClick(item.title),
          data: item.actions.map(action => jsxRuntimeExports.jsx("div", {
            className: "keen-slider__slide",
            style: {
              overflow: 'visible',
              width: 'auto'
            },
            children: jsxRuntimeExports.jsx(GovernanceActionVotedOnCard, {
              votedProposal: action,
              inProgress: pendingTransaction?.vote?.resourceId === action.proposal.txHash + action.proposal.index
            })
          }, `${action?.proposal.id}${action.vote.vote}`))
        }, item.title), jsxRuntimeExports.jsx(material.Box, {
          height: isMobile ? 50 : 72
        })]
      }, item.title))
    })
  });
};

const defaultCategories = GOVERNANCE_ACTIONS_FILTERS.map(category => category.key);
const GovernanceActionsPage = () => {
  const {
    debouncedSearchText,
    ...dataActionsBarProps
  } = useDataActionsBar();
  const {
    chosenFilters,
    chosenSorting
  } = dataActionsBarProps;
  const queryFilters = chosenFilters.length > 0 ? chosenFilters : defaultCategories;
  const {
    isMobile,
    pagePadding
  } = useScreenDimension();
  const {
    isEnabled,
    voter
  } = usePillarContext();
  const {
    proposals,
    isProposalsLoading
  } = useGetProposalsQuery({
    filters: queryFilters,
    sorting: chosenSorting,
    searchPhrase: debouncedSearchText
  });
  const {
    state
  } = reactRouterDom.useLocation();
  const [content, setContent] = React$1.useState(state && state.isVotedListOnLoad ? 1 : 0);
  const handleChange = (_event, newValue) => {
    setContent(newValue);
  };
  React$1.useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);
  return jsxRuntimeExports.jsxs(material.Box, {
    sx: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      pt: isMobile ? 3.25 : 6.25
    },
    children: [jsxRuntimeExports.jsx(Typography, {
      sx: {
        mb: isMobile ? 3.75 : 6,
        px: pagePadding
      },
      variant: isMobile ? 'title1' : 'headline3',
      children: "Governance Actions"
    }), isMobile && jsxRuntimeExports.jsx(material.Divider, {
      style: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        marginBottom: 30
      }
    }), jsxRuntimeExports.jsxs(material.Box, {
      sx: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        px: pagePadding
      },
      children: [jsxRuntimeExports.jsx(DataActionsBar, {
        ...dataActionsBarProps,
        filterOptions: GOVERNANCE_ACTIONS_FILTERS,
        filtersTitle: "Governance Action Type",
        sortOptions: GOVERNANCE_ACTIONS_SORTING
      }), !proposals || isProposalsLoading ? jsxRuntimeExports.jsx(material.Box, {
        sx: {
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          justifyContent: 'center'
        },
        children: jsxRuntimeExports.jsx(material.CircularProgress, {})
      }) : isEnabled && (voter?.isRegisteredAsDRep || voter?.isRegisteredAsSoleVoter) ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsxs(material.Tabs, {
          sx: {
            marginTop: 3,
            display: 'flex',
            fontSize: 16,
            fontWeight: 500
          },
          value: content,
          indicatorColor: "secondary",
          onChange: handleChange,
          "aria-label": "Governance Actions tabs",
          children: [jsxRuntimeExports.jsx(Tab, {
            "data-testid": "to-vote-tab",
            label: "To vote",
            sx: {
              textTransform: 'none',
              width: !isMobile ? 'auto' : '50%'
            }
          }), jsxRuntimeExports.jsx(Tab, {
            "data-testid": "voted-tab",
            label: "Voted on by me",
            sx: {
              textTransform: 'none',
              width: !isMobile ? 'auto' : '50%'
            }
          })]
        }), ' ', jsxRuntimeExports.jsx(material.Box, {
          height: isMobile ? 24 : 60
        }), jsxRuntimeExports.jsx(TabPanel, {
          value: content,
          index: 0,
          children: jsxRuntimeExports.jsx(GovernanceActionsToVote, {
            filters: chosenFilters,
            onDashboard: true,
            searchPhrase: debouncedSearchText,
            sorting: chosenSorting,
            proposals: proposals
          })
        }), jsxRuntimeExports.jsx(TabPanel, {
          value: content,
          index: 1,
          children: jsxRuntimeExports.jsx(GovernanceActionsVotedOn, {
            filters: chosenFilters,
            searchPhrase: debouncedSearchText,
            sorting: chosenSorting
          })
        })]
      }) : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(material.Box, {
          height: isMobile ? 60 : 80
        }), jsxRuntimeExports.jsx(GovernanceActionsToVote, {
          filters: dataActionsBarProps.chosenFilters,
          onDashboard: false,
          searchPhrase: debouncedSearchText,
          sorting: dataActionsBarProps.chosenSorting,
          proposals: proposals
        })]
      })]
    })]
  });
};

// TODO: Refactor: GovernanceActionDetals and DashboardGovernanceActionDetails are almost identical
// and should be unified
const GovernanceActionDetails = () => {
  const {
    state: untypedState,
    hash
  } = reactRouterDom.useLocation();
  const state = untypedState;
  const index = hash.slice(1);
  const navigate = reactRouterDom.useNavigate();
  const {
    pagePadding,
    isMobile
  } = useScreenDimension();
  const {
    proposalId: txHash
  } = reactRouterDom.useParams();
  const fullProposalId = txHash && getFullGovActionId(txHash, index);
  const shortenedGovActionId = txHash && getShortenedGovActionId(txHash, index);
  const {
    data,
    isLoading
  } = useGetProposalQuery(fullProposalId ?? '', !state?.proposal);
  const proposal = (data ?? state)?.proposal;
  return jsxRuntimeExports.jsx(material.Box, {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    pt: 2,
    px: pagePadding,
    children: jsxRuntimeExports.jsxs(material.Box, {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      width: "100%",
      children: [isMobile ? jsxRuntimeExports.jsx(material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          padding: '8px 0 24px',
          mb: '10px',
          borderBottom: '1px solid #FFF'
        },
        children: jsxRuntimeExports.jsx(Typography, {
          variant: "title1",
          children: "Governance Actions"
        })
      }) : null, jsxRuntimeExports.jsx(Breadcrumbs, {
        elementOne: "Governance Actions",
        elementOnePath: PATHS.governanceActions,
        elementTwo: proposal?.title ?? '',
        isDataMissing: proposal?.metadataStatus ?? null
      }), jsxRuntimeExports.jsxs(material.Link, {
        sx: {
          cursor: 'pointer',
          display: 'flex',
          textDecoration: 'none'
        },
        onClick: () => navigate(state && state.openedFromCategoryPage ? reactRouterDom.generatePath(PATHS.governanceActionsCategory, {
          category: state?.proposal?.type
        }) : PATHS.governanceActions),
        children: [jsxRuntimeExports.jsx("img", {
          alt: "arrow",
          src: ICONS.arrowRightIcon,
          style: {
            marginRight: '12px',
            transform: 'rotate(180deg)'
          }
        }), jsxRuntimeExports.jsx(Typography, {
          color: "primary",
          fontWeight: 400,
          variant: "body2",
          children: "Back"
        })]
      }), isLoading ? jsxRuntimeExports.jsx(material.Box, {
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        children: jsxRuntimeExports.jsx(material.CircularProgress, {})
      }) : proposal ? jsxRuntimeExports.jsx(material.Box, {
        "data-testid": "governance-action-details",
        children: jsxRuntimeExports.jsx(GovernanceActionDetailsCard, {
          proposal: proposal,
          metadataValid: true
        })
      }) : jsxRuntimeExports.jsxs(material.Box, {
        display: "flex",
        flexWrap: "wrap",
        mt: 4,
        children: [jsxRuntimeExports.jsx(Typography, {
          fontWeight: 300,
          children: "Governance action with id \u00A0"
        }), jsxRuntimeExports.jsx(Typography, {
          fontWeight: 500,
          children: ` ${shortenedGovActionId} `
        }), jsxRuntimeExports.jsx(Typography, {
          fontWeight: 300,
          children: "\u00A0 does not exist."
        })]
      })]
    })
  });
};

const GovernanceActionsCategory = () => {
  const {
    category
  } = reactRouterDom.useParams();
  const {
    debouncedSearchText,
    ...dataActionsBarProps
  } = useDataActionsBar();
  const {
    chosenSorting
  } = dataActionsBarProps;
  const {
    isMobile,
    pagePadding,
    screenWidth
  } = useScreenDimension();
  const navigate = reactRouterDom.useNavigate();
  const {
    isProposalsFetching,
    isProposalsFetchingNextPage,
    isProposalsLoading,
    proposals,
    proposalsfetchNextPage,
    proposalsHaveNextPage
  } = useGetProposalsInfiniteQuery({
    filters: [category?.replace(/ /g, '') ?? ''],
    sorting: chosenSorting,
    searchPhrase: debouncedSearchText
  });
  const loadNextPageRef = React$1.useRef(null);
  useFetchNextPageDetector(proposalsfetchNextPage, isProposalsLoading || isProposalsFetchingNextPage, proposalsHaveNextPage);
  const saveScrollPosition = useSaveScrollPosition(isProposalsLoading, isProposalsFetching);
  const mappedData = React$1.useMemo(() => removeDuplicatedProposals(proposals), [proposals]);
  // useEffect(() => {
  //   if (isEnabled && getItemFromLocalStorage(`${WALLET_LS_KEY}_stake_key`)) {
  //     const { pathname } = window.location;
  //     navigate(`/connected${pathname}`);
  //   }
  // }, [isEnabled]);
  return jsxRuntimeExports.jsx(material.Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    minHeight: "100vh",
    children: jsxRuntimeExports.jsx(material.Box, {
      flex: 1,
      pt: isMobile ? 3.25 : 6.25,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      children: jsxRuntimeExports.jsxs(material.Box, {
        px: pagePadding,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        children: [jsxRuntimeExports.jsxs(material.Link, {
          "data-testid": "back-to-list-link",
          sx: {
            cursor: 'pointer',
            display: 'flex',
            textDecoration: 'none',
            marginBottom: 4.25
          },
          onClick: () => navigate(PATHS.governanceActions),
          children: [jsxRuntimeExports.jsx("img", {
            src: ICONS.arrowRightIcon,
            alt: "arrow",
            style: {
              marginRight: '12px',
              transform: 'rotate(180deg)'
            }
          }), jsxRuntimeExports.jsx(Typography, {
            variant: "body2",
            color: "primary",
            fontWeight: 400,
            children: "Back to Governance Actions"
          })]
        }), jsxRuntimeExports.jsx(DataActionsBar, {
          ...dataActionsBarProps,
          isFiltering: false,
          sortOptions: GOVERNANCE_ACTIONS_SORTING
        }), jsxRuntimeExports.jsx(Typography, {
          variant: "title2",
          sx: {
            m: '32px 0 32px'
          },
          children: getProposalTypeLabel(category ?? '')
        }), !isProposalsLoading ? !mappedData?.length ? jsxRuntimeExports.jsx(EmptyStateGovernanceActionsCategory, {
          category: category,
          isSearch: !!debouncedSearchText.length
        }) : jsxRuntimeExports.jsxs(material.Box, {
          columnGap: "20px",
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${screenWidth < 420 ? '290px' : isMobile ? '324px' : '350px'}, 1fr))`,
          children: [mappedData.map(item => jsxRuntimeExports.jsx(material.Box, {
            pb: 4.25,
            children: jsxRuntimeExports.jsx(GovernanceActionCard, {
              ...item,
              onClick: () => {
                saveScrollPosition();
                navigate(PATHS.governanceActionsAction.replace(':proposalId', getFullGovActionId(item.txHash, item.index)), {
                  state: {
                    proposal: item,
                    openedFromCategoryPage: true
                  }
                });
              }
            })
          }, item.txHash + item.index)), proposalsHaveNextPage && isProposalsFetchingNextPage && jsxRuntimeExports.jsx(material.Box, {
            py: 4,
            display: "flex",
            justifyContent: "center",
            ref: loadNextPageRef,
            children: jsxRuntimeExports.jsx(material.CircularProgress, {})
          })]
        }) : jsxRuntimeExports.jsx(material.Box, {
          alignItems: "center",
          py: 4,
          display: "flex",
          justifyContent: "center",
          flex: 1,
          children: jsxRuntimeExports.jsx(material.CircularProgress, {})
        })]
      })
    })
  });
};

const VotingPillar = ({
  walletApi,
  apiUrl,
  validationApiUrl,
  ...props
}) => jsxRuntimeExports.jsx(PillarProvider, {
  ...props,
  walletApi: walletApi,
  apiUrl: apiUrl,
  validationApiUrl: validationApiUrl,
  children: jsxRuntimeExports.jsx(reactQuery.QueryClientProvider, {
    client: new reactQuery.QueryClient(),
    children: jsxRuntimeExports.jsx(ThemeProvider, {
      theme: voltaire,
      children: jsxRuntimeExports.jsx(DataActionsBarProvider, {
        children: jsxRuntimeExports.jsx(reactRouterDom.BrowserRouter, {
          children: jsxRuntimeExports.jsxs(reactRouterDom.Routes, {
            children: [jsxRuntimeExports.jsx(reactRouterDom.Route, {
              path: PATHS.governanceActions,
              element: jsxRuntimeExports.jsx(GovernanceActionsPage, {})
            }), jsxRuntimeExports.jsx(reactRouterDom.Route, {
              path: PATHS.governanceActionsAction,
              element: jsxRuntimeExports.jsx(GovernanceActionDetails, {})
            }), jsxRuntimeExports.jsx(reactRouterDom.Route, {
              path: PATHS.governanceActionsCategory,
              element: jsxRuntimeExports.jsx(GovernanceActionsCategory, {})
            })]
          })
        })
      })
    })
  })
});

exports.GovernanceActionDetails = GovernanceActionDetails;
exports.GovernanceActionsCategory = GovernanceActionsCategory;
exports.GovernanceActionsPage = GovernanceActionsPage;
exports.default = VotingPillar;
//# sourceMappingURL=index.js.map
