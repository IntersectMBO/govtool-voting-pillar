import { jsx as v, jsxs as G, Fragment as Ye } from "react/jsx-runtime";
import * as Z from "react";
import pe, { useState as Be, useEffect as Mt, useCallback as Re, useMemo as qe, createContext as Ji, useContext as Xi, useId as Ac, forwardRef as zt, useRef as un, useImperativeHandle as Zi, memo as ea } from "react";
import Fh from "react-dom";
import { Button as Wn, CircularProgress as Gn, Checkbox as Pc, Typography as Qe, InputBase as Fc, Box as Q, styled as ta, Tab as Dc, TextareaAutosize as Dh, FormLabel as Rh, FormControlLabel as Rc, FormControl as Ih, RadioGroup as Nh, Radio as Mh, Link as na, Tabs as Ic, ButtonBase as Qs, Popover as Lh, Divider as $h } from "@mui/material";
import Bh from "@mui/material/Divider";
import { createTheme as jh, styled as Nc, ThemeProvider as Mc } from "@mui/material/styles";
import * as _a from "@mui/material/Tooltip";
import fo from "@mui/material/Typography";
import "@mui/material/Modal";
import { Search as zh } from "@mui/icons-material";
import Ti from "@mui/icons-material/InfoOutlined";
import Uh from "@mui/icons-material/Check";
import Vh from "@mui/icons-material/ArrowBackIos";
import Wh from "@mui/icons-material/ChevronRight";
import "@mui/icons-material/OpenInNew";
function ho(e, t) {
  return ho = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, ho(e, t);
}
function Jn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ho(e, t);
}
var Lr = /* @__PURE__ */ function() {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return t.subscribe = function(r) {
    var i = this, a = r || function() {
    };
    return this.listeners.push(a), this.onSubscribe(), function() {
      i.listeners = i.listeners.filter(function(o) {
        return o !== a;
      }), i.onUnsubscribe();
    };
  }, t.hasListeners = function() {
    return this.listeners.length > 0;
  }, t.onSubscribe = function() {
  }, t.onUnsubscribe = function() {
  }, e;
}();
function Se() {
  return Se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Se.apply(null, arguments);
}
var Ai = typeof window > "u";
function Je() {
}
function qh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function po(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Pi(e) {
  return Array.isArray(e) ? e : [e];
}
function Lc(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function vr(e, t, n) {
  return ra(e) ? typeof t == "function" ? Se({}, n, {
    queryKey: e,
    queryFn: t
  }) : Se({}, t, {
    queryKey: e
  }) : e;
}
function en(e, t, n) {
  return ra(e) ? [Se({}, t, {
    queryKey: e
  }), n] : [e || {}, t];
}
function Hh(e, t) {
  if (e === !0 && t === !0 || e == null && t == null)
    return "all";
  if (e === !1 && t === !1)
    return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function Ys(e, t) {
  var n = e.active, r = e.exact, i = e.fetching, a = e.inactive, o = e.predicate, s = e.queryKey, l = e.stale;
  if (ra(s)) {
    if (r) {
      if (t.queryHash !== Yo(s, t.options))
        return !1;
    } else if (!Fi(t.queryKey, s))
      return !1;
  }
  var u = Hh(n, a);
  if (u === "none")
    return !1;
  if (u !== "all") {
    var c = t.isActive();
    if (u === "active" && !c || u === "inactive" && c)
      return !1;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || typeof i == "boolean" && t.isFetching() !== i || o && !o(t));
}
function Ks(e, t) {
  var n = e.exact, r = e.fetching, i = e.predicate, a = e.mutationKey;
  if (ra(a)) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (vn(t.options.mutationKey) !== vn(a))
        return !1;
    } else if (!Fi(t.options.mutationKey, a))
      return !1;
  }
  return !(typeof r == "boolean" && t.state.status === "loading" !== r || i && !i(t));
}
function Yo(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || vn;
  return n(e);
}
function vn(e) {
  var t = Pi(e);
  return Gh(t);
}
function Gh(e) {
  return JSON.stringify(e, function(t, n) {
    return mo(n) ? Object.keys(n).sort().reduce(function(r, i) {
      return r[i] = n[i], r;
    }, {}) : n;
  });
}
function Fi(e, t) {
  return $c(Pi(e), Pi(t));
}
function $c(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(function(n) {
    return !$c(e[n], t[n]);
  }) : !1;
}
function Di(e, t) {
  if (e === t)
    return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || mo(e) && mo(t)) {
    for (var r = n ? e.length : Object.keys(e).length, i = n ? t : Object.keys(t), a = i.length, o = n ? [] : {}, s = 0, l = 0; l < a; l++) {
      var u = n ? l : i[l];
      o[u] = Di(e[u], t[u]), o[u] === e[u] && s++;
    }
    return r === a && s === r ? e : o;
  }
  return t;
}
function Qh(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (var n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function mo(e) {
  if (!Js(e))
    return !1;
  var t = e.constructor;
  if (typeof t > "u")
    return !0;
  var n = t.prototype;
  return !(!Js(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function Js(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ra(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Yh(e) {
  return new Promise(function(t) {
    setTimeout(t, e);
  });
}
function Xs(e) {
  Promise.resolve().then(e).catch(function(t) {
    return setTimeout(function() {
      throw t;
    });
  });
}
function Bc() {
  if (typeof AbortController == "function")
    return new AbortController();
}
var Kh = /* @__PURE__ */ function(e) {
  Jn(t, e);
  function t() {
    var r;
    return r = e.call(this) || this, r.setup = function(i) {
      var a;
      if (!Ai && ((a = window) != null && a.addEventListener)) {
        var o = function() {
          return i();
        };
        return window.addEventListener("visibilitychange", o, !1), window.addEventListener("focus", o, !1), function() {
          window.removeEventListener("visibilitychange", o), window.removeEventListener("focus", o);
        };
      }
    }, r;
  }
  var n = t.prototype;
  return n.onSubscribe = function() {
    this.cleanup || this.setEventListener(this.setup);
  }, n.onUnsubscribe = function() {
    if (!this.hasListeners()) {
      var i;
      (i = this.cleanup) == null || i.call(this), this.cleanup = void 0;
    }
  }, n.setEventListener = function(i) {
    var a, o = this;
    this.setup = i, (a = this.cleanup) == null || a.call(this), this.cleanup = i(function(s) {
      typeof s == "boolean" ? o.setFocused(s) : o.onFocus();
    });
  }, n.setFocused = function(i) {
    this.focused = i, i && this.onFocus();
  }, n.onFocus = function() {
    this.listeners.forEach(function(i) {
      i();
    });
  }, n.isFocused = function() {
    return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState);
  }, t;
}(Lr), br = new Kh(), Jh = /* @__PURE__ */ function(e) {
  Jn(t, e);
  function t() {
    var r;
    return r = e.call(this) || this, r.setup = function(i) {
      var a;
      if (!Ai && ((a = window) != null && a.addEventListener)) {
        var o = function() {
          return i();
        };
        return window.addEventListener("online", o, !1), window.addEventListener("offline", o, !1), function() {
          window.removeEventListener("online", o), window.removeEventListener("offline", o);
        };
      }
    }, r;
  }
  var n = t.prototype;
  return n.onSubscribe = function() {
    this.cleanup || this.setEventListener(this.setup);
  }, n.onUnsubscribe = function() {
    if (!this.hasListeners()) {
      var i;
      (i = this.cleanup) == null || i.call(this), this.cleanup = void 0;
    }
  }, n.setEventListener = function(i) {
    var a, o = this;
    this.setup = i, (a = this.cleanup) == null || a.call(this), this.cleanup = i(function(s) {
      typeof s == "boolean" ? o.setOnline(s) : o.onOnline();
    });
  }, n.setOnline = function(i) {
    this.online = i, i && this.onOnline();
  }, n.onOnline = function() {
    this.listeners.forEach(function(i) {
      i();
    });
  }, n.isOnline = function() {
    return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine;
  }, t;
}(Lr), di = new Jh();
function Xh(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function Ri(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var jc = function(t) {
  this.revert = t == null ? void 0 : t.revert, this.silent = t == null ? void 0 : t.silent;
};
function hi(e) {
  return e instanceof jc;
}
var zc = function(t) {
  var n = this, r = !1, i, a, o, s;
  this.abort = t.abort, this.cancel = function(h) {
    return i == null ? void 0 : i(h);
  }, this.cancelRetry = function() {
    r = !0;
  }, this.continueRetry = function() {
    r = !1;
  }, this.continue = function() {
    return a == null ? void 0 : a();
  }, this.failureCount = 0, this.isPaused = !1, this.isResolved = !1, this.isTransportCancelable = !1, this.promise = new Promise(function(h, d) {
    o = h, s = d;
  });
  var l = function(d) {
    n.isResolved || (n.isResolved = !0, t.onSuccess == null || t.onSuccess(d), a == null || a(), o(d));
  }, u = function(d) {
    n.isResolved || (n.isResolved = !0, t.onError == null || t.onError(d), a == null || a(), s(d));
  }, c = function() {
    return new Promise(function(d) {
      a = d, n.isPaused = !0, t.onPause == null || t.onPause();
    }).then(function() {
      a = void 0, n.isPaused = !1, t.onContinue == null || t.onContinue();
    });
  }, f = function h() {
    if (!n.isResolved) {
      var d;
      try {
        d = t.fn();
      } catch (p) {
        d = Promise.reject(p);
      }
      i = function(m) {
        if (!n.isResolved && (u(new jc(m)), n.abort == null || n.abort(), Ri(d)))
          try {
            d.cancel();
          } catch {
          }
      }, n.isTransportCancelable = Ri(d), Promise.resolve(d).then(l).catch(function(p) {
        var m, y;
        if (!n.isResolved) {
          var g = (m = t.retry) != null ? m : 3, w = (y = t.retryDelay) != null ? y : Xh, x = typeof w == "function" ? w(n.failureCount, p) : w, N = g === !0 || typeof g == "number" && n.failureCount < g || typeof g == "function" && g(n.failureCount, p);
          if (r || !N) {
            u(p);
            return;
          }
          n.failureCount++, t.onFail == null || t.onFail(n.failureCount, p), Yh(x).then(function() {
            if (!br.isFocused() || !di.isOnline())
              return c();
          }).then(function() {
            r ? u(p) : h();
          });
        }
      });
    }
  };
  f();
}, Zh = /* @__PURE__ */ function() {
  function e() {
    this.queue = [], this.transactions = 0, this.notifyFn = function(n) {
      n();
    }, this.batchNotifyFn = function(n) {
      n();
    };
  }
  var t = e.prototype;
  return t.batch = function(r) {
    var i;
    this.transactions++;
    try {
      i = r();
    } finally {
      this.transactions--, this.transactions || this.flush();
    }
    return i;
  }, t.schedule = function(r) {
    var i = this;
    this.transactions ? this.queue.push(r) : Xs(function() {
      i.notifyFn(r);
    });
  }, t.batchCalls = function(r) {
    var i = this;
    return function() {
      for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++)
        o[s] = arguments[s];
      i.schedule(function() {
        r.apply(void 0, o);
      });
    };
  }, t.flush = function() {
    var r = this, i = this.queue;
    this.queue = [], i.length && Xs(function() {
      r.batchNotifyFn(function() {
        i.forEach(function(a) {
          r.notifyFn(a);
        });
      });
    });
  }, t.setNotifyFunction = function(r) {
    this.notifyFn = r;
  }, t.setBatchNotifyFunction = function(r) {
    this.batchNotifyFn = r;
  }, e;
}(), Ne = new Zh(), Uc = console;
function Ii() {
  return Uc;
}
function ep(e) {
  Uc = e;
}
var tp = /* @__PURE__ */ function() {
  function e(n) {
    this.abortSignalConsumed = !1, this.hadObservers = !1, this.defaultOptions = n.defaultOptions, this.setOptions(n.options), this.observers = [], this.cache = n.cache, this.queryKey = n.queryKey, this.queryHash = n.queryHash, this.initialState = n.state || this.getDefaultState(this.options), this.state = this.initialState, this.meta = n.meta, this.scheduleGc();
  }
  var t = e.prototype;
  return t.setOptions = function(r) {
    var i;
    this.options = Se({}, this.defaultOptions, r), this.meta = r == null ? void 0 : r.meta, this.cacheTime = Math.max(this.cacheTime || 0, (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3);
  }, t.setDefaultOptions = function(r) {
    this.defaultOptions = r;
  }, t.scheduleGc = function() {
    var r = this;
    this.clearGcTimeout(), po(this.cacheTime) && (this.gcTimeout = setTimeout(function() {
      r.optionalRemove();
    }, this.cacheTime));
  }, t.clearGcTimeout = function() {
    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0);
  }, t.optionalRemove = function() {
    this.observers.length || (this.state.isFetching ? this.hadObservers && this.scheduleGc() : this.cache.remove(this));
  }, t.setData = function(r, i) {
    var a, o, s = this.state.data, l = qh(r, s);
    return (a = (o = this.options).isDataEqual) != null && a.call(o, s, l) ? l = s : this.options.structuralSharing !== !1 && (l = Di(s, l)), this.dispatch({
      data: l,
      type: "success",
      dataUpdatedAt: i == null ? void 0 : i.updatedAt
    }), l;
  }, t.setState = function(r, i) {
    this.dispatch({
      type: "setState",
      state: r,
      setStateOptions: i
    });
  }, t.cancel = function(r) {
    var i, a = this.promise;
    return (i = this.retryer) == null || i.cancel(r), a ? a.then(Je).catch(Je) : Promise.resolve();
  }, t.destroy = function() {
    this.clearGcTimeout(), this.cancel({
      silent: !0
    });
  }, t.reset = function() {
    this.destroy(), this.setState(this.initialState);
  }, t.isActive = function() {
    return this.observers.some(function(r) {
      return r.options.enabled !== !1;
    });
  }, t.isFetching = function() {
    return this.state.isFetching;
  }, t.isStale = function() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(function(r) {
      return r.getCurrentResult().isStale;
    });
  }, t.isStaleByTime = function(r) {
    return r === void 0 && (r = 0), this.state.isInvalidated || !this.state.dataUpdatedAt || !Lc(this.state.dataUpdatedAt, r);
  }, t.onFocus = function() {
    var r, i = this.observers.find(function(a) {
      return a.shouldFetchOnWindowFocus();
    });
    i && i.refetch(), (r = this.retryer) == null || r.continue();
  }, t.onOnline = function() {
    var r, i = this.observers.find(function(a) {
      return a.shouldFetchOnReconnect();
    });
    i && i.refetch(), (r = this.retryer) == null || r.continue();
  }, t.addObserver = function(r) {
    this.observers.indexOf(r) === -1 && (this.observers.push(r), this.hadObservers = !0, this.clearGcTimeout(), this.cache.notify({
      type: "observerAdded",
      query: this,
      observer: r
    }));
  }, t.removeObserver = function(r) {
    this.observers.indexOf(r) !== -1 && (this.observers = this.observers.filter(function(i) {
      return i !== r;
    }), this.observers.length || (this.retryer && (this.retryer.isTransportCancelable || this.abortSignalConsumed ? this.retryer.cancel({
      revert: !0
    }) : this.retryer.cancelRetry()), this.cacheTime ? this.scheduleGc() : this.cache.remove(this)), this.cache.notify({
      type: "observerRemoved",
      query: this,
      observer: r
    }));
  }, t.getObserversCount = function() {
    return this.observers.length;
  }, t.invalidate = function() {
    this.state.isInvalidated || this.dispatch({
      type: "invalidate"
    });
  }, t.fetch = function(r, i) {
    var a = this, o, s, l;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (i != null && i.cancelRefetch))
        this.cancel({
          silent: !0
        });
      else if (this.promise) {
        var u;
        return (u = this.retryer) == null || u.continueRetry(), this.promise;
      }
    }
    if (r && this.setOptions(r), !this.options.queryFn) {
      var c = this.observers.find(function(w) {
        return w.options.queryFn;
      });
      c && this.setOptions(c.options);
    }
    var f = Pi(this.queryKey), h = Bc(), d = {
      queryKey: f,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(d, "signal", {
      enumerable: !0,
      get: function() {
        if (h)
          return a.abortSignalConsumed = !0, h.signal;
      }
    });
    var p = function() {
      return a.options.queryFn ? (a.abortSignalConsumed = !1, a.options.queryFn(d)) : Promise.reject("Missing queryFn");
    }, m = {
      fetchOptions: i,
      options: this.options,
      queryKey: f,
      state: this.state,
      fetchFn: p,
      meta: this.meta
    };
    if ((o = this.options.behavior) != null && o.onFetch) {
      var y;
      (y = this.options.behavior) == null || y.onFetch(m);
    }
    if (this.revertState = this.state, !this.state.isFetching || this.state.fetchMeta !== ((s = m.fetchOptions) == null ? void 0 : s.meta)) {
      var g;
      this.dispatch({
        type: "fetch",
        meta: (g = m.fetchOptions) == null ? void 0 : g.meta
      });
    }
    return this.retryer = new zc({
      fn: m.fetchFn,
      abort: h == null || (l = h.abort) == null ? void 0 : l.bind(h),
      onSuccess: function(x) {
        a.setData(x), a.cache.config.onSuccess == null || a.cache.config.onSuccess(x, a), a.cacheTime === 0 && a.optionalRemove();
      },
      onError: function(x) {
        hi(x) && x.silent || a.dispatch({
          type: "error",
          error: x
        }), hi(x) || (a.cache.config.onError == null || a.cache.config.onError(x, a), Ii().error(x)), a.cacheTime === 0 && a.optionalRemove();
      },
      onFail: function() {
        a.dispatch({
          type: "failed"
        });
      },
      onPause: function() {
        a.dispatch({
          type: "pause"
        });
      },
      onContinue: function() {
        a.dispatch({
          type: "continue"
        });
      },
      retry: m.options.retry,
      retryDelay: m.options.retryDelay
    }), this.promise = this.retryer.promise, this.promise;
  }, t.dispatch = function(r) {
    var i = this;
    this.state = this.reducer(this.state, r), Ne.batch(function() {
      i.observers.forEach(function(a) {
        a.onQueryUpdate(r);
      }), i.cache.notify({
        query: i,
        type: "queryUpdated",
        action: r
      });
    });
  }, t.getDefaultState = function(r) {
    var i = typeof r.initialData == "function" ? r.initialData() : r.initialData, a = typeof r.initialData < "u", o = a ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0, s = typeof i < "u";
    return {
      data: i,
      dataUpdateCount: 0,
      dataUpdatedAt: s ? o ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: !1,
      isInvalidated: !1,
      isPaused: !1,
      status: s ? "success" : "idle"
    };
  }, t.reducer = function(r, i) {
    var a, o;
    switch (i.type) {
      case "failed":
        return Se({}, r, {
          fetchFailureCount: r.fetchFailureCount + 1
        });
      case "pause":
        return Se({}, r, {
          isPaused: !0
        });
      case "continue":
        return Se({}, r, {
          isPaused: !1
        });
      case "fetch":
        return Se({}, r, {
          fetchFailureCount: 0,
          fetchMeta: (a = i.meta) != null ? a : null,
          isFetching: !0,
          isPaused: !1
        }, !r.dataUpdatedAt && {
          error: null,
          status: "loading"
        });
      case "success":
        return Se({}, r, {
          data: i.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: (o = i.dataUpdatedAt) != null ? o : Date.now(),
          error: null,
          fetchFailureCount: 0,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: "success"
        });
      case "error":
        var s = i.error;
        return hi(s) && s.revert && this.revertState ? Se({}, this.revertState) : Se({}, r, {
          error: s,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          isFetching: !1,
          isPaused: !1,
          status: "error"
        });
      case "invalidate":
        return Se({}, r, {
          isInvalidated: !0
        });
      case "setState":
        return Se({}, r, i.state);
      default:
        return r;
    }
  }, e;
}(), np = /* @__PURE__ */ function(e) {
  Jn(t, e);
  function t(r) {
    var i;
    return i = e.call(this) || this, i.config = r || {}, i.queries = [], i.queriesMap = {}, i;
  }
  var n = t.prototype;
  return n.build = function(i, a, o) {
    var s, l = a.queryKey, u = (s = a.queryHash) != null ? s : Yo(l, a), c = this.get(u);
    return c || (c = new tp({
      cache: this,
      queryKey: l,
      queryHash: u,
      options: i.defaultQueryOptions(a),
      state: o,
      defaultOptions: i.getQueryDefaults(l),
      meta: a.meta
    }), this.add(c)), c;
  }, n.add = function(i) {
    this.queriesMap[i.queryHash] || (this.queriesMap[i.queryHash] = i, this.queries.push(i), this.notify({
      type: "queryAdded",
      query: i
    }));
  }, n.remove = function(i) {
    var a = this.queriesMap[i.queryHash];
    a && (i.destroy(), this.queries = this.queries.filter(function(o) {
      return o !== i;
    }), a === i && delete this.queriesMap[i.queryHash], this.notify({
      type: "queryRemoved",
      query: i
    }));
  }, n.clear = function() {
    var i = this;
    Ne.batch(function() {
      i.queries.forEach(function(a) {
        i.remove(a);
      });
    });
  }, n.get = function(i) {
    return this.queriesMap[i];
  }, n.getAll = function() {
    return this.queries;
  }, n.find = function(i, a) {
    var o = en(i, a), s = o[0];
    return typeof s.exact > "u" && (s.exact = !0), this.queries.find(function(l) {
      return Ys(s, l);
    });
  }, n.findAll = function(i, a) {
    var o = en(i, a), s = o[0];
    return Object.keys(s).length > 0 ? this.queries.filter(function(l) {
      return Ys(s, l);
    }) : this.queries;
  }, n.notify = function(i) {
    var a = this;
    Ne.batch(function() {
      a.listeners.forEach(function(o) {
        o(i);
      });
    });
  }, n.onFocus = function() {
    var i = this;
    Ne.batch(function() {
      i.queries.forEach(function(a) {
        a.onFocus();
      });
    });
  }, n.onOnline = function() {
    var i = this;
    Ne.batch(function() {
      i.queries.forEach(function(a) {
        a.onOnline();
      });
    });
  }, t;
}(Lr), rp = /* @__PURE__ */ function() {
  function e(n) {
    this.options = Se({}, n.defaultOptions, n.options), this.mutationId = n.mutationId, this.mutationCache = n.mutationCache, this.observers = [], this.state = n.state || ip(), this.meta = n.meta;
  }
  var t = e.prototype;
  return t.setState = function(r) {
    this.dispatch({
      type: "setState",
      state: r
    });
  }, t.addObserver = function(r) {
    this.observers.indexOf(r) === -1 && this.observers.push(r);
  }, t.removeObserver = function(r) {
    this.observers = this.observers.filter(function(i) {
      return i !== r;
    });
  }, t.cancel = function() {
    return this.retryer ? (this.retryer.cancel(), this.retryer.promise.then(Je).catch(Je)) : Promise.resolve();
  }, t.continue = function() {
    return this.retryer ? (this.retryer.continue(), this.retryer.promise) : this.execute();
  }, t.execute = function() {
    var r = this, i, a = this.state.status === "loading", o = Promise.resolve();
    return a || (this.dispatch({
      type: "loading",
      variables: this.options.variables
    }), o = o.then(function() {
      r.mutationCache.config.onMutate == null || r.mutationCache.config.onMutate(r.state.variables, r);
    }).then(function() {
      return r.options.onMutate == null ? void 0 : r.options.onMutate(r.state.variables);
    }).then(function(s) {
      s !== r.state.context && r.dispatch({
        type: "loading",
        context: s,
        variables: r.state.variables
      });
    })), o.then(function() {
      return r.executeMutation();
    }).then(function(s) {
      i = s, r.mutationCache.config.onSuccess == null || r.mutationCache.config.onSuccess(i, r.state.variables, r.state.context, r);
    }).then(function() {
      return r.options.onSuccess == null ? void 0 : r.options.onSuccess(i, r.state.variables, r.state.context);
    }).then(function() {
      return r.options.onSettled == null ? void 0 : r.options.onSettled(i, null, r.state.variables, r.state.context);
    }).then(function() {
      return r.dispatch({
        type: "success",
        data: i
      }), i;
    }).catch(function(s) {
      return r.mutationCache.config.onError == null || r.mutationCache.config.onError(s, r.state.variables, r.state.context, r), Ii().error(s), Promise.resolve().then(function() {
        return r.options.onError == null ? void 0 : r.options.onError(s, r.state.variables, r.state.context);
      }).then(function() {
        return r.options.onSettled == null ? void 0 : r.options.onSettled(void 0, s, r.state.variables, r.state.context);
      }).then(function() {
        throw r.dispatch({
          type: "error",
          error: s
        }), s;
      });
    });
  }, t.executeMutation = function() {
    var r = this, i;
    return this.retryer = new zc({
      fn: function() {
        return r.options.mutationFn ? r.options.mutationFn(r.state.variables) : Promise.reject("No mutationFn found");
      },
      onFail: function() {
        r.dispatch({
          type: "failed"
        });
      },
      onPause: function() {
        r.dispatch({
          type: "pause"
        });
      },
      onContinue: function() {
        r.dispatch({
          type: "continue"
        });
      },
      retry: (i = this.options.retry) != null ? i : 0,
      retryDelay: this.options.retryDelay
    }), this.retryer.promise;
  }, t.dispatch = function(r) {
    var i = this;
    this.state = ap(this.state, r), Ne.batch(function() {
      i.observers.forEach(function(a) {
        a.onMutationUpdate(r);
      }), i.mutationCache.notify(i);
    });
  }, e;
}();
function ip() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0
  };
}
function ap(e, t) {
  switch (t.type) {
    case "failed":
      return Se({}, e, {
        failureCount: e.failureCount + 1
      });
    case "pause":
      return Se({}, e, {
        isPaused: !0
      });
    case "continue":
      return Se({}, e, {
        isPaused: !1
      });
    case "loading":
      return Se({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables
      });
    case "success":
      return Se({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1
      });
    case "error":
      return Se({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error"
      });
    case "setState":
      return Se({}, e, t.state);
    default:
      return e;
  }
}
var op = /* @__PURE__ */ function(e) {
  Jn(t, e);
  function t(r) {
    var i;
    return i = e.call(this) || this, i.config = r || {}, i.mutations = [], i.mutationId = 0, i;
  }
  var n = t.prototype;
  return n.build = function(i, a, o) {
    var s = new rp({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: i.defaultMutationOptions(a),
      state: o,
      defaultOptions: a.mutationKey ? i.getMutationDefaults(a.mutationKey) : void 0,
      meta: a.meta
    });
    return this.add(s), s;
  }, n.add = function(i) {
    this.mutations.push(i), this.notify(i);
  }, n.remove = function(i) {
    this.mutations = this.mutations.filter(function(a) {
      return a !== i;
    }), i.cancel(), this.notify(i);
  }, n.clear = function() {
    var i = this;
    Ne.batch(function() {
      i.mutations.forEach(function(a) {
        i.remove(a);
      });
    });
  }, n.getAll = function() {
    return this.mutations;
  }, n.find = function(i) {
    return typeof i.exact > "u" && (i.exact = !0), this.mutations.find(function(a) {
      return Ks(i, a);
    });
  }, n.findAll = function(i) {
    return this.mutations.filter(function(a) {
      return Ks(i, a);
    });
  }, n.notify = function(i) {
    var a = this;
    Ne.batch(function() {
      a.listeners.forEach(function(o) {
        o(i);
      });
    });
  }, n.onFocus = function() {
    this.resumePausedMutations();
  }, n.onOnline = function() {
    this.resumePausedMutations();
  }, n.resumePausedMutations = function() {
    var i = this.mutations.filter(function(a) {
      return a.state.isPaused;
    });
    return Ne.batch(function() {
      return i.reduce(function(a, o) {
        return a.then(function() {
          return o.continue().catch(Je);
        });
      }, Promise.resolve());
    });
  }, t;
}(Lr);
function go() {
  return {
    onFetch: function(t) {
      t.fetchFn = function() {
        var n, r, i, a, o, s, l = (n = t.fetchOptions) == null || (r = n.meta) == null ? void 0 : r.refetchPage, u = (i = t.fetchOptions) == null || (a = i.meta) == null ? void 0 : a.fetchMore, c = u == null ? void 0 : u.pageParam, f = (u == null ? void 0 : u.direction) === "forward", h = (u == null ? void 0 : u.direction) === "backward", d = ((o = t.state.data) == null ? void 0 : o.pages) || [], p = ((s = t.state.data) == null ? void 0 : s.pageParams) || [], m = Bc(), y = m == null ? void 0 : m.signal, g = p, w = !1, x = t.options.queryFn || function() {
          return Promise.reject("Missing queryFn");
        }, N = function(T, M, B, z) {
          return g = z ? [M].concat(g) : [].concat(g, [M]), z ? [B].concat(T) : [].concat(T, [B]);
        }, R = function(T, M, B, z) {
          if (w)
            return Promise.reject("Cancelled");
          if (typeof B > "u" && !M && T.length)
            return Promise.resolve(T);
          var H = {
            queryKey: t.queryKey,
            signal: y,
            pageParam: B,
            meta: t.meta
          }, K = x(H), S = Promise.resolve(K).then(function(ee) {
            return N(T, B, ee, z);
          });
          if (Ri(K)) {
            var J = S;
            J.cancel = K.cancel;
          }
          return S;
        }, A;
        if (!d.length)
          A = R([]);
        else if (f) {
          var L = typeof c < "u", C = L ? c : yo(t.options, d);
          A = R(d, L, C);
        } else if (h) {
          var F = typeof c < "u", P = F ? c : Vc(t.options, d);
          A = R(d, F, P, !0);
        } else
          (function() {
            g = [];
            var O = typeof t.options.getNextPageParam > "u", T = l && d[0] ? l(d[0], 0, d) : !0;
            A = T ? R([], O, p[0]) : Promise.resolve(N([], p[0], d[0]));
            for (var M = function(H) {
              A = A.then(function(K) {
                var S = l && d[H] ? l(d[H], H, d) : !0;
                if (S) {
                  var J = O ? p[H] : yo(t.options, K);
                  return R(K, O, J);
                }
                return Promise.resolve(N(K, p[H], d[H]));
              });
            }, B = 1; B < d.length; B++)
              M(B);
          })();
        var b = A.then(function(O) {
          return {
            pages: O,
            pageParams: g
          };
        }), E = b;
        return E.cancel = function() {
          w = !0, m == null || m.abort(), Ri(A) && A.cancel();
        }, b;
      };
    }
  };
}
function yo(e, t) {
  return e.getNextPageParam == null ? void 0 : e.getNextPageParam(t[t.length - 1], t);
}
function Vc(e, t) {
  return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(t[0], t);
}
function sp(e, t) {
  if (e.getNextPageParam && Array.isArray(t)) {
    var n = yo(e, t);
    return typeof n < "u" && n !== null && n !== !1;
  }
}
function lp(e, t) {
  if (e.getPreviousPageParam && Array.isArray(t)) {
    var n = Vc(e, t);
    return typeof n < "u" && n !== null && n !== !1;
  }
}
var Wc = /* @__PURE__ */ function() {
  function e(n) {
    n === void 0 && (n = {}), this.queryCache = n.queryCache || new np(), this.mutationCache = n.mutationCache || new op(), this.defaultOptions = n.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [];
  }
  var t = e.prototype;
  return t.mount = function() {
    var r = this;
    this.unsubscribeFocus = br.subscribe(function() {
      br.isFocused() && di.isOnline() && (r.mutationCache.onFocus(), r.queryCache.onFocus());
    }), this.unsubscribeOnline = di.subscribe(function() {
      br.isFocused() && di.isOnline() && (r.mutationCache.onOnline(), r.queryCache.onOnline());
    });
  }, t.unmount = function() {
    var r, i;
    (r = this.unsubscribeFocus) == null || r.call(this), (i = this.unsubscribeOnline) == null || i.call(this);
  }, t.isFetching = function(r, i) {
    var a = en(r, i), o = a[0];
    return o.fetching = !0, this.queryCache.findAll(o).length;
  }, t.isMutating = function(r) {
    return this.mutationCache.findAll(Se({}, r, {
      fetching: !0
    })).length;
  }, t.getQueryData = function(r, i) {
    var a;
    return (a = this.queryCache.find(r, i)) == null ? void 0 : a.state.data;
  }, t.getQueriesData = function(r) {
    return this.getQueryCache().findAll(r).map(function(i) {
      var a = i.queryKey, o = i.state, s = o.data;
      return [a, s];
    });
  }, t.setQueryData = function(r, i, a) {
    var o = vr(r), s = this.defaultQueryOptions(o);
    return this.queryCache.build(this, s).setData(i, a);
  }, t.setQueriesData = function(r, i, a) {
    var o = this;
    return Ne.batch(function() {
      return o.getQueryCache().findAll(r).map(function(s) {
        var l = s.queryKey;
        return [l, o.setQueryData(l, i, a)];
      });
    });
  }, t.getQueryState = function(r, i) {
    var a;
    return (a = this.queryCache.find(r, i)) == null ? void 0 : a.state;
  }, t.removeQueries = function(r, i) {
    var a = en(r, i), o = a[0], s = this.queryCache;
    Ne.batch(function() {
      s.findAll(o).forEach(function(l) {
        s.remove(l);
      });
    });
  }, t.resetQueries = function(r, i, a) {
    var o = this, s = en(r, i, a), l = s[0], u = s[1], c = this.queryCache, f = Se({}, l, {
      active: !0
    });
    return Ne.batch(function() {
      return c.findAll(l).forEach(function(h) {
        h.reset();
      }), o.refetchQueries(f, u);
    });
  }, t.cancelQueries = function(r, i, a) {
    var o = this, s = en(r, i, a), l = s[0], u = s[1], c = u === void 0 ? {} : u;
    typeof c.revert > "u" && (c.revert = !0);
    var f = Ne.batch(function() {
      return o.queryCache.findAll(l).map(function(h) {
        return h.cancel(c);
      });
    });
    return Promise.all(f).then(Je).catch(Je);
  }, t.invalidateQueries = function(r, i, a) {
    var o, s, l, u = this, c = en(r, i, a), f = c[0], h = c[1], d = Se({}, f, {
      // if filters.refetchActive is not provided and filters.active is explicitly false,
      // e.g. invalidateQueries({ active: false }), we don't want to refetch active queries
      active: (o = (s = f.refetchActive) != null ? s : f.active) != null ? o : !0,
      inactive: (l = f.refetchInactive) != null ? l : !1
    });
    return Ne.batch(function() {
      return u.queryCache.findAll(f).forEach(function(p) {
        p.invalidate();
      }), u.refetchQueries(d, h);
    });
  }, t.refetchQueries = function(r, i, a) {
    var o = this, s = en(r, i, a), l = s[0], u = s[1], c = Ne.batch(function() {
      return o.queryCache.findAll(l).map(function(h) {
        return h.fetch(void 0, Se({}, u, {
          meta: {
            refetchPage: l == null ? void 0 : l.refetchPage
          }
        }));
      });
    }), f = Promise.all(c).then(Je);
    return u != null && u.throwOnError || (f = f.catch(Je)), f;
  }, t.fetchQuery = function(r, i, a) {
    var o = vr(r, i, a), s = this.defaultQueryOptions(o);
    typeof s.retry > "u" && (s.retry = !1);
    var l = this.queryCache.build(this, s);
    return l.isStaleByTime(s.staleTime) ? l.fetch(s) : Promise.resolve(l.state.data);
  }, t.prefetchQuery = function(r, i, a) {
    return this.fetchQuery(r, i, a).then(Je).catch(Je);
  }, t.fetchInfiniteQuery = function(r, i, a) {
    var o = vr(r, i, a);
    return o.behavior = go(), this.fetchQuery(o);
  }, t.prefetchInfiniteQuery = function(r, i, a) {
    return this.fetchInfiniteQuery(r, i, a).then(Je).catch(Je);
  }, t.cancelMutations = function() {
    var r = this, i = Ne.batch(function() {
      return r.mutationCache.getAll().map(function(a) {
        return a.cancel();
      });
    });
    return Promise.all(i).then(Je).catch(Je);
  }, t.resumePausedMutations = function() {
    return this.getMutationCache().resumePausedMutations();
  }, t.executeMutation = function(r) {
    return this.mutationCache.build(this, r).execute();
  }, t.getQueryCache = function() {
    return this.queryCache;
  }, t.getMutationCache = function() {
    return this.mutationCache;
  }, t.getDefaultOptions = function() {
    return this.defaultOptions;
  }, t.setDefaultOptions = function(r) {
    this.defaultOptions = r;
  }, t.setQueryDefaults = function(r, i) {
    var a = this.queryDefaults.find(function(o) {
      return vn(r) === vn(o.queryKey);
    });
    a ? a.defaultOptions = i : this.queryDefaults.push({
      queryKey: r,
      defaultOptions: i
    });
  }, t.getQueryDefaults = function(r) {
    var i;
    return r ? (i = this.queryDefaults.find(function(a) {
      return Fi(r, a.queryKey);
    })) == null ? void 0 : i.defaultOptions : void 0;
  }, t.setMutationDefaults = function(r, i) {
    var a = this.mutationDefaults.find(function(o) {
      return vn(r) === vn(o.mutationKey);
    });
    a ? a.defaultOptions = i : this.mutationDefaults.push({
      mutationKey: r,
      defaultOptions: i
    });
  }, t.getMutationDefaults = function(r) {
    var i;
    return r ? (i = this.mutationDefaults.find(function(a) {
      return Fi(r, a.mutationKey);
    })) == null ? void 0 : i.defaultOptions : void 0;
  }, t.defaultQueryOptions = function(r) {
    if (r != null && r._defaulted)
      return r;
    var i = Se({}, this.defaultOptions.queries, this.getQueryDefaults(r == null ? void 0 : r.queryKey), r, {
      _defaulted: !0
    });
    return !i.queryHash && i.queryKey && (i.queryHash = Yo(i.queryKey, i)), i;
  }, t.defaultQueryObserverOptions = function(r) {
    return this.defaultQueryOptions(r);
  }, t.defaultMutationOptions = function(r) {
    return r != null && r._defaulted ? r : Se({}, this.defaultOptions.mutations, this.getMutationDefaults(r == null ? void 0 : r.mutationKey), r, {
      _defaulted: !0
    });
  }, t.clear = function() {
    this.queryCache.clear(), this.mutationCache.clear();
  }, e;
}(), qc = /* @__PURE__ */ function(e) {
  Jn(t, e);
  function t(r, i) {
    var a;
    return a = e.call(this) || this, a.client = r, a.options = i, a.trackedProps = [], a.selectError = null, a.bindMethods(), a.setOptions(i), a;
  }
  var n = t.prototype;
  return n.bindMethods = function() {
    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this);
  }, n.onSubscribe = function() {
    this.listeners.length === 1 && (this.currentQuery.addObserver(this), Zs(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers());
  }, n.onUnsubscribe = function() {
    this.listeners.length || this.destroy();
  }, n.shouldFetchOnReconnect = function() {
    return vo(this.currentQuery, this.options, this.options.refetchOnReconnect);
  }, n.shouldFetchOnWindowFocus = function() {
    return vo(this.currentQuery, this.options, this.options.refetchOnWindowFocus);
  }, n.destroy = function() {
    this.listeners = [], this.clearTimers(), this.currentQuery.removeObserver(this);
  }, n.setOptions = function(i, a) {
    var o = this.options, s = this.currentQuery;
    if (this.options = this.client.defaultQueryObserverOptions(i), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = o.queryKey), this.updateQuery();
    var l = this.hasListeners();
    l && el(this.currentQuery, s, this.options, o) && this.executeFetch(), this.updateResult(a), l && (this.currentQuery !== s || this.options.enabled !== o.enabled || this.options.staleTime !== o.staleTime) && this.updateStaleTimeout();
    var u = this.computeRefetchInterval();
    l && (this.currentQuery !== s || this.options.enabled !== o.enabled || u !== this.currentRefetchInterval) && this.updateRefetchInterval(u);
  }, n.getOptimisticResult = function(i) {
    var a = this.client.defaultQueryObserverOptions(i), o = this.client.getQueryCache().build(this.client, a);
    return this.createResult(o, a);
  }, n.getCurrentResult = function() {
    return this.currentResult;
  }, n.trackResult = function(i, a) {
    var o = this, s = {}, l = function(c) {
      o.trackedProps.includes(c) || o.trackedProps.push(c);
    };
    return Object.keys(i).forEach(function(u) {
      Object.defineProperty(s, u, {
        configurable: !1,
        enumerable: !0,
        get: function() {
          return l(u), i[u];
        }
      });
    }), (a.useErrorBoundary || a.suspense) && l("error"), s;
  }, n.getNextResult = function(i) {
    var a = this;
    return new Promise(function(o, s) {
      var l = a.subscribe(function(u) {
        u.isFetching || (l(), u.isError && (i != null && i.throwOnError) ? s(u.error) : o(u));
      });
    });
  }, n.getCurrentQuery = function() {
    return this.currentQuery;
  }, n.remove = function() {
    this.client.getQueryCache().remove(this.currentQuery);
  }, n.refetch = function(i) {
    return this.fetch(Se({}, i, {
      meta: {
        refetchPage: i == null ? void 0 : i.refetchPage
      }
    }));
  }, n.fetchOptimistic = function(i) {
    var a = this, o = this.client.defaultQueryObserverOptions(i), s = this.client.getQueryCache().build(this.client, o);
    return s.fetch().then(function() {
      return a.createResult(s, o);
    });
  }, n.fetch = function(i) {
    var a = this;
    return this.executeFetch(i).then(function() {
      return a.updateResult(), a.currentResult;
    });
  }, n.executeFetch = function(i) {
    this.updateQuery();
    var a = this.currentQuery.fetch(this.options, i);
    return i != null && i.throwOnError || (a = a.catch(Je)), a;
  }, n.updateStaleTimeout = function() {
    var i = this;
    if (this.clearStaleTimeout(), !(Ai || this.currentResult.isStale || !po(this.options.staleTime))) {
      var a = Lc(this.currentResult.dataUpdatedAt, this.options.staleTime), o = a + 1;
      this.staleTimeoutId = setTimeout(function() {
        i.currentResult.isStale || i.updateResult();
      }, o);
    }
  }, n.computeRefetchInterval = function() {
    var i;
    return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (i = this.options.refetchInterval) != null ? i : !1;
  }, n.updateRefetchInterval = function(i) {
    var a = this;
    this.clearRefetchInterval(), this.currentRefetchInterval = i, !(Ai || this.options.enabled === !1 || !po(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(function() {
      (a.options.refetchIntervalInBackground || br.isFocused()) && a.executeFetch();
    }, this.currentRefetchInterval));
  }, n.updateTimers = function() {
    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval());
  }, n.clearTimers = function() {
    this.clearStaleTimeout(), this.clearRefetchInterval();
  }, n.clearStaleTimeout = function() {
    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0);
  }, n.clearRefetchInterval = function() {
    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0);
  }, n.createResult = function(i, a) {
    var o = this.currentQuery, s = this.options, l = this.currentResult, u = this.currentResultState, c = this.currentResultOptions, f = i !== o, h = f ? i.state : this.currentQueryInitialState, d = f ? this.currentResult : this.previousQueryResult, p = i.state, m = p.dataUpdatedAt, y = p.error, g = p.errorUpdatedAt, w = p.isFetching, x = p.status, N = !1, R = !1, A;
    if (a.optimisticResults) {
      var L = this.hasListeners(), C = !L && Zs(i, a), F = L && el(i, o, a, s);
      (C || F) && (w = !0, m || (x = "loading"));
    }
    if (a.keepPreviousData && !p.dataUpdateCount && (d != null && d.isSuccess) && x !== "error")
      A = d.data, m = d.dataUpdatedAt, x = d.status, N = !0;
    else if (a.select && typeof p.data < "u")
      if (l && p.data === (u == null ? void 0 : u.data) && a.select === this.selectFn)
        A = this.selectResult;
      else
        try {
          this.selectFn = a.select, A = a.select(p.data), a.structuralSharing !== !1 && (A = Di(l == null ? void 0 : l.data, A)), this.selectResult = A, this.selectError = null;
        } catch (E) {
          Ii().error(E), this.selectError = E;
        }
    else
      A = p.data;
    if (typeof a.placeholderData < "u" && typeof A > "u" && (x === "loading" || x === "idle")) {
      var P;
      if (l != null && l.isPlaceholderData && a.placeholderData === (c == null ? void 0 : c.placeholderData))
        P = l.data;
      else if (P = typeof a.placeholderData == "function" ? a.placeholderData() : a.placeholderData, a.select && typeof P < "u")
        try {
          P = a.select(P), a.structuralSharing !== !1 && (P = Di(l == null ? void 0 : l.data, P)), this.selectError = null;
        } catch (E) {
          Ii().error(E), this.selectError = E;
        }
      typeof P < "u" && (x = "success", A = P, R = !0);
    }
    this.selectError && (y = this.selectError, A = this.selectResult, g = Date.now(), x = "error");
    var b = {
      status: x,
      isLoading: x === "loading",
      isSuccess: x === "success",
      isError: x === "error",
      isIdle: x === "idle",
      data: A,
      dataUpdatedAt: m,
      error: y,
      errorUpdatedAt: g,
      failureCount: p.fetchFailureCount,
      errorUpdateCount: p.errorUpdateCount,
      isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
      isFetchedAfterMount: p.dataUpdateCount > h.dataUpdateCount || p.errorUpdateCount > h.errorUpdateCount,
      isFetching: w,
      isRefetching: w && x !== "loading",
      isLoadingError: x === "error" && p.dataUpdatedAt === 0,
      isPlaceholderData: R,
      isPreviousData: N,
      isRefetchError: x === "error" && p.dataUpdatedAt !== 0,
      isStale: Ko(i, a),
      refetch: this.refetch,
      remove: this.remove
    };
    return b;
  }, n.shouldNotifyListeners = function(i, a) {
    if (!a)
      return !0;
    var o = this.options, s = o.notifyOnChangeProps, l = o.notifyOnChangePropsExclusions;
    if (!s && !l || s === "tracked" && !this.trackedProps.length)
      return !0;
    var u = s === "tracked" ? this.trackedProps : s;
    return Object.keys(i).some(function(c) {
      var f = c, h = i[f] !== a[f], d = u == null ? void 0 : u.some(function(m) {
        return m === c;
      }), p = l == null ? void 0 : l.some(function(m) {
        return m === c;
      });
      return h && !p && (!u || d);
    });
  }, n.updateResult = function(i) {
    var a = this.currentResult;
    if (this.currentResult = this.createResult(this.currentQuery, this.options), this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, !Qh(this.currentResult, a)) {
      var o = {
        cache: !0
      };
      (i == null ? void 0 : i.listeners) !== !1 && this.shouldNotifyListeners(this.currentResult, a) && (o.listeners = !0), this.notify(Se({}, o, i));
    }
  }, n.updateQuery = function() {
    var i = this.client.getQueryCache().build(this.client, this.options);
    if (i !== this.currentQuery) {
      var a = this.currentQuery;
      this.currentQuery = i, this.currentQueryInitialState = i.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (a == null || a.removeObserver(this), i.addObserver(this));
    }
  }, n.onQueryUpdate = function(i) {
    var a = {};
    i.type === "success" ? a.onSuccess = !0 : i.type === "error" && !hi(i.error) && (a.onError = !0), this.updateResult(a), this.hasListeners() && this.updateTimers();
  }, n.notify = function(i) {
    var a = this;
    Ne.batch(function() {
      i.onSuccess ? (a.options.onSuccess == null || a.options.onSuccess(a.currentResult.data), a.options.onSettled == null || a.options.onSettled(a.currentResult.data, null)) : i.onError && (a.options.onError == null || a.options.onError(a.currentResult.error), a.options.onSettled == null || a.options.onSettled(void 0, a.currentResult.error)), i.listeners && a.listeners.forEach(function(o) {
        o(a.currentResult);
      }), i.cache && a.client.getQueryCache().notify({
        query: a.currentQuery,
        type: "observerResultsUpdated"
      });
    });
  }, t;
}(Lr);
function up(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Zs(e, t) {
  return up(e, t) || e.state.dataUpdatedAt > 0 && vo(e, t, t.refetchOnMount);
}
function vo(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Ko(e, t);
  }
  return !1;
}
function el(e, t, n, r) {
  return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Ko(e, n);
}
function Ko(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var cp = /* @__PURE__ */ function(e) {
  Jn(t, e);
  function t(r, i) {
    return e.call(this, r, i) || this;
  }
  var n = t.prototype;
  return n.bindMethods = function() {
    e.prototype.bindMethods.call(this), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }, n.setOptions = function(i, a) {
    e.prototype.setOptions.call(this, Se({}, i, {
      behavior: go()
    }), a);
  }, n.getOptimisticResult = function(i) {
    return i.behavior = go(), e.prototype.getOptimisticResult.call(this, i);
  }, n.fetchNextPage = function(i) {
    var a;
    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (a = i == null ? void 0 : i.cancelRefetch) != null ? a : !0,
      throwOnError: i == null ? void 0 : i.throwOnError,
      meta: {
        fetchMore: {
          direction: "forward",
          pageParam: i == null ? void 0 : i.pageParam
        }
      }
    });
  }, n.fetchPreviousPage = function(i) {
    var a;
    return this.fetch({
      // TODO consider removing `?? true` in future breaking change, to be consistent with `refetch` API (see https://github.com/tannerlinsley/react-query/issues/2617)
      cancelRefetch: (a = i == null ? void 0 : i.cancelRefetch) != null ? a : !0,
      throwOnError: i == null ? void 0 : i.throwOnError,
      meta: {
        fetchMore: {
          direction: "backward",
          pageParam: i == null ? void 0 : i.pageParam
        }
      }
    });
  }, n.createResult = function(i, a) {
    var o, s, l, u, c, f, h = i.state, d = e.prototype.createResult.call(this, i, a);
    return Se({}, d, {
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: sp(a, (o = h.data) == null ? void 0 : o.pages),
      hasPreviousPage: lp(a, (s = h.data) == null ? void 0 : s.pages),
      isFetchingNextPage: h.isFetching && ((l = h.fetchMeta) == null || (u = l.fetchMore) == null ? void 0 : u.direction) === "forward",
      isFetchingPreviousPage: h.isFetching && ((c = h.fetchMeta) == null || (f = c.fetchMore) == null ? void 0 : f.direction) === "backward"
    });
  }, t;
}(qc), fp = Fh.unstable_batchedUpdates;
Ne.setBatchNotifyFunction(fp);
var dp = console;
ep(dp);
var tl = /* @__PURE__ */ pe.createContext(void 0), Hc = /* @__PURE__ */ pe.createContext(!1);
function Gc(e) {
  return e && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = tl), window.ReactQueryClientContext) : tl;
}
var hp = function() {
  var t = pe.useContext(Gc(pe.useContext(Hc)));
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Qc = function(t) {
  var n = t.client, r = t.contextSharing, i = r === void 0 ? !1 : r, a = t.children;
  pe.useEffect(function() {
    return n.mount(), function() {
      n.unmount();
    };
  }, [n]);
  var o = Gc(i);
  return /* @__PURE__ */ pe.createElement(Hc.Provider, {
    value: i
  }, /* @__PURE__ */ pe.createElement(o.Provider, {
    value: n
  }, a));
};
function pp() {
  var e = !1;
  return {
    clearReset: function() {
      e = !1;
    },
    reset: function() {
      e = !0;
    },
    isReset: function() {
      return e;
    }
  };
}
var mp = /* @__PURE__ */ pe.createContext(pp()), gp = function() {
  return pe.useContext(mp);
};
function yp(e, t, n) {
  return typeof t == "function" ? t.apply(void 0, n) : typeof t == "boolean" ? t : !!e;
}
function Yc(e, t) {
  var n = pe.useRef(!1), r = pe.useState(0), i = r[1], a = hp(), o = gp(), s = a.defaultQueryObserverOptions(e);
  s.optimisticResults = !0, s.onError && (s.onError = Ne.batchCalls(s.onError)), s.onSuccess && (s.onSuccess = Ne.batchCalls(s.onSuccess)), s.onSettled && (s.onSettled = Ne.batchCalls(s.onSettled)), s.suspense && (typeof s.staleTime != "number" && (s.staleTime = 1e3), s.cacheTime === 0 && (s.cacheTime = 1)), (s.suspense || s.useErrorBoundary) && (o.isReset() || (s.retryOnMount = !1));
  var l = pe.useState(function() {
    return new t(a, s);
  }), u = l[0], c = u.getOptimisticResult(s);
  if (pe.useEffect(function() {
    n.current = !0, o.clearReset();
    var f = u.subscribe(Ne.batchCalls(function() {
      n.current && i(function(h) {
        return h + 1;
      });
    }));
    return u.updateResult(), function() {
      n.current = !1, f();
    };
  }, [o, u]), pe.useEffect(function() {
    u.setOptions(s, {
      listeners: !1
    });
  }, [s, u]), s.suspense && c.isLoading)
    throw u.fetchOptimistic(s).then(function(f) {
      var h = f.data;
      s.onSuccess == null || s.onSuccess(h), s.onSettled == null || s.onSettled(h, null);
    }).catch(function(f) {
      o.clearReset(), s.onError == null || s.onError(f), s.onSettled == null || s.onSettled(void 0, f);
    });
  if (c.isError && !o.isReset() && !c.isFetching && yp(s.suspense, s.useErrorBoundary, [c.error, u.getCurrentQuery()]))
    throw c.error;
  return s.notifyOnChangeProps === "tracked" && (c = u.trackResult(c, s)), c;
}
function ia(e, t, n) {
  var r = vr(e, t, n);
  return Yc(r, qc);
}
function vp(e, t, n) {
  var r = vr(e, t, n);
  return Yc(r, cp);
}
const Ta = {
  c50: "#E6EBF7",
  c100: "#D6E2FF",
  c500: "#0033AD"
}, pi = {
  c100: "#FFE0CE",
  c400: "#FF833B",
  c600: "#BF4B08",
  c700: "#803205"
}, nl = {
  c100: "#D2EAF0",
  c500: "#1C94B2"
}, rl = {
  c200: "#C0E4BA",
  c700: "#315E29"
}, bp = {
  c200: "#F2D9A9"
}, il = {
  c100: "#F6D5D5",
  c500: "#D32F2F"
}, aa = [
  {
    key: "NoConfidence",
    title: "No Confidence",
    label: "No Confidence"
  },
  {
    key: "NewCommittee",
    title: "New Comittee",
    label: "New Comittee"
  },
  {
    key: "NewConstitution",
    title: "Update to the Constitution",
    label: "Update to the Constitution"
  },
  {
    key: "HardForkInitiation",
    title: "Hard Fork",
    label: "Hard Fork"
  },
  {
    key: "ParameterChange",
    title: "Protocol Parameter Change",
    label: "Protocol Parameter Change"
  },
  {
    key: "TreasuryWithdrawals",
    title: "Treasury Withdrawals",
    label: "Treasury Withdrawal"
  },
  {
    key: "InfoAction",
    title: "Info Action",
    label: "Info Action"
  }
], Ge = {
  arrowRightIcon: "/icons/ArrowRight.svg",
  closeIcon: "/icons/Close.svg",
  copyBlueIcon: "/icons/CopyBlue.svg",
  copyBlueThinIcon: "/icons/CopyBlueThin.svg",
  copyIcon: "/icons/Copy.svg",
  copyWhiteIcon: "/icons/CopyWhite.svg",
  externalLinkIcon: "/icons/ExternalLink.svg",
  filterIcon: "/icons/Filter.svg",
  filterWhiteIcon: "/icons/FilterWhite.svg",
  link: "/icons/Link.svg",
  loaderIcon: "/icons/Loader.svg",
  share: "/icons/Share.svg",
  sortIcon: "/icons/Sort.svg",
  sortWhiteIcon: "/icons/SortWhite.svg",
  timerIcon: "/icons/Timer.svg"
}, Ni = {
  govActionListImage: "/images/GovActionList.png",
  successImage: "/images/Success.png",
  warningImage: "/images/Warning.png",
  warningYellowImage: "/images/WarningYellow.png"
}, qt = {
  governanceActions: "/",
  governanceActionsAction: "/governance_actions/:proposalId",
  governanceActionsCategory: "/governance_actions/category/:category"
}, $r = {
  useGetVoteContextFromFile: "useGetVoteContextFromFile",
  useGetProposalsInfiniteKey: "useGetProposalsInfiniteKey",
  useGetProposalsKey: "useGetProposalsKey",
  useGetProposalKey: "useGetProposalKey",
  useGetDRepVotesKey: "useGetDRepVotesKey"
}, Kc = [
  {
    key: "SoonestToExpire",
    label: "Soon to expire"
  },
  {
    key: "NewestCreated",
    label: "Newest first"
  },
  {
    key: "MostYesVotes",
    label: "Highest amount of 'Yes' votes"
  }
];
function Jc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: wp } = Object.prototype, { getPrototypeOf: Jo } = Object, oa = /* @__PURE__ */ ((e) => (t) => {
  const n = wp.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ot = (e) => (e = e.toLowerCase(), (t) => oa(t) === e), sa = (e) => (t) => typeof t === e, { isArray: Xn } = Array, kr = sa("undefined");
function xp(e) {
  return e !== null && !kr(e) && e.constructor !== null && !kr(e.constructor) && yt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Xc = Ot("ArrayBuffer");
function Sp(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xc(e.buffer), t;
}
const Cp = sa("string"), yt = sa("function"), Zc = sa("number"), la = (e) => e !== null && typeof e == "object", Ep = (e) => e === !0 || e === !1, mi = (e) => {
  if (oa(e) !== "object")
    return !1;
  const t = Jo(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, kp = Ot("Date"), Op = Ot("File"), _p = Ot("Blob"), Tp = Ot("FileList"), Ap = (e) => la(e) && yt(e.pipe), Pp = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || yt(e.append) && ((t = oa(e)) === "formdata" || // detect form-data instance
  t === "object" && yt(e.toString) && e.toString() === "[object FormData]"));
}, Fp = Ot("URLSearchParams"), [Dp, Rp, Ip, Np] = ["ReadableStream", "Request", "Response", "Headers"].map(Ot), Mp = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Br(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), Xn(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let s;
    for (r = 0; r < o; r++)
      s = a[r], t.call(null, e[s], s, e);
  }
}
function ef(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const bn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, tf = (e) => !kr(e) && e !== bn;
function bo() {
  const { caseless: e } = tf(this) && this || {}, t = {}, n = (r, i) => {
    const a = e && ef(t, i) || i;
    mi(t[a]) && mi(r) ? t[a] = bo(t[a], r) : mi(r) ? t[a] = bo({}, r) : Xn(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Br(arguments[r], n);
  return t;
}
const Lp = (e, t, n, { allOwnKeys: r } = {}) => (Br(t, (i, a) => {
  n && yt(i) ? e[a] = Jc(i, n) : e[a] = i;
}, { allOwnKeys: r }), e), $p = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bp = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, jp = (e, t, n, r) => {
  let i, a, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0; )
      o = i[a], (!r || r(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = n !== !1 && Jo(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zp = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Up = (e) => {
  if (!e) return null;
  if (Xn(e)) return e;
  let t = e.length;
  if (!Zc(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Vp = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Jo(Uint8Array)), Wp = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const a = i.value;
    t.call(e, a[0], a[1]);
  }
}, qp = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Hp = Ot("HTMLFormElement"), Gp = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), al = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Qp = Ot("RegExp"), nf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Br(n, (i, a) => {
    let o;
    (o = t(i, a, e)) !== !1 && (r[a] = o || i);
  }), Object.defineProperties(e, r);
}, Yp = (e) => {
  nf(e, (t, n) => {
    if (yt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (yt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Kp = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((a) => {
      n[a] = !0;
    });
  };
  return Xn(e) ? r(e) : r(String(e).split(t)), n;
}, Jp = () => {
}, Xp = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Zp(e) {
  return !!(e && yt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const em = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (la(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const a = Xn(r) ? [] : {};
        return Br(r, (o, s) => {
          const l = n(o, i + 1);
          !kr(l) && (a[s] = l);
        }), t[i] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, tm = Ot("AsyncFunction"), nm = (e) => e && (la(e) || yt(e)) && yt(e.then) && yt(e.catch), rf = ((e, t) => e ? setImmediate : t ? ((n, r) => (bn.addEventListener("message", ({ source: i, data: a }) => {
  i === bn && a === n && r.length && r.shift()();
}, !1), (i) => {
  r.push(i), bn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  yt(bn.postMessage)
), rm = typeof queueMicrotask < "u" ? queueMicrotask.bind(bn) : typeof process < "u" && process.nextTick || rf, j = {
  isArray: Xn,
  isArrayBuffer: Xc,
  isBuffer: xp,
  isFormData: Pp,
  isArrayBufferView: Sp,
  isString: Cp,
  isNumber: Zc,
  isBoolean: Ep,
  isObject: la,
  isPlainObject: mi,
  isReadableStream: Dp,
  isRequest: Rp,
  isResponse: Ip,
  isHeaders: Np,
  isUndefined: kr,
  isDate: kp,
  isFile: Op,
  isBlob: _p,
  isRegExp: Qp,
  isFunction: yt,
  isStream: Ap,
  isURLSearchParams: Fp,
  isTypedArray: Vp,
  isFileList: Tp,
  forEach: Br,
  merge: bo,
  extend: Lp,
  trim: Mp,
  stripBOM: $p,
  inherits: Bp,
  toFlatObject: jp,
  kindOf: oa,
  kindOfTest: Ot,
  endsWith: zp,
  toArray: Up,
  forEachEntry: Wp,
  matchAll: qp,
  isHTMLForm: Hp,
  hasOwnProperty: al,
  hasOwnProp: al,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nf,
  freezeMethods: Yp,
  toObjectSet: Kp,
  toCamelCase: Gp,
  noop: Jp,
  toFiniteNumber: Xp,
  findKey: ef,
  global: bn,
  isContextDefined: tf,
  isSpecCompliantForm: Zp,
  toJSONObject: em,
  isAsyncFn: tm,
  isThenable: nm,
  setImmediate: rf,
  asap: rm
};
function ve(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i, this.status = i.status ? i.status : null);
}
j.inherits(ve, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const af = ve.prototype, of = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  of[e] = { value: e };
});
Object.defineProperties(ve, of);
Object.defineProperty(af, "isAxiosError", { value: !0 });
ve.from = (e, t, n, r, i, a) => {
  const o = Object.create(af);
  return j.toFlatObject(e, o, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), ve.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const im = null;
function wo(e) {
  return j.isPlainObject(e) || j.isArray(e);
}
function sf(e) {
  return j.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ol(e, t, n) {
  return e ? e.concat(t).map(function(i, a) {
    return i = sf(i), !n && a ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function am(e) {
  return j.isArray(e) && !e.some(wo);
}
const om = j.toFlatObject(j, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ua(e, t, n) {
  if (!j.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = j.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, y) {
    return !j.isUndefined(y[m]);
  });
  const r = n.metaTokens, i = n.visitor || c, a = n.dots, o = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(t);
  if (!j.isFunction(i))
    throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (j.isDate(p))
      return p.toISOString();
    if (!l && j.isBlob(p))
      throw new ve("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(p) || j.isTypedArray(p) ? l && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, m, y) {
    let g = p;
    if (p && !y && typeof p == "object") {
      if (j.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (j.isArray(p) && am(p) || (j.isFileList(p) || j.endsWith(m, "[]")) && (g = j.toArray(p)))
        return m = sf(m), g.forEach(function(x, N) {
          !(j.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? ol([m], N, a) : o === null ? m : m + "[]",
            u(x)
          );
        }), !1;
    }
    return wo(p) ? !0 : (t.append(ol(y, m, a), u(p)), !1);
  }
  const f = [], h = Object.assign(om, {
    defaultVisitor: c,
    convertValue: u,
    isVisitable: wo
  });
  function d(p, m) {
    if (!j.isUndefined(p)) {
      if (f.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(p), j.forEach(p, function(g, w) {
        (!(j.isUndefined(g) || g === null) && i.call(
          t,
          g,
          j.isString(w) ? w.trim() : w,
          m,
          h
        )) === !0 && d(g, m ? m.concat(w) : [w]);
      }), f.pop();
    }
  }
  if (!j.isObject(e))
    throw new TypeError("data must be an object");
  return d(e), t;
}
function sl(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Xo(e, t) {
  this._pairs = [], e && ua(e, this, t);
}
const lf = Xo.prototype;
lf.append = function(t, n) {
  this._pairs.push([t, n]);
};
lf.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, sl);
  } : sl;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function sm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function uf(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || sm;
  j.isFunction(n) && (n = {
    serialize: n
  });
  const i = n && n.serialize;
  let a;
  if (i ? a = i(t, n) : a = j.isURLSearchParams(t) ? t.toString() : new Xo(t, n).toString(r), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ll {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    j.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const cf = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, lm = typeof URLSearchParams < "u" ? URLSearchParams : Xo, um = typeof FormData < "u" ? FormData : null, cm = typeof Blob < "u" ? Blob : null, fm = {
  isBrowser: !0,
  classes: {
    URLSearchParams: lm,
    FormData: um,
    Blob: cm
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Zo = typeof window < "u" && typeof document < "u", xo = typeof navigator == "object" && navigator || void 0, dm = Zo && (!xo || ["ReactNative", "NativeScript", "NS"].indexOf(xo.product) < 0), hm = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pm = Zo && window.location.href || "http://localhost", mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Zo,
  hasStandardBrowserEnv: dm,
  hasStandardBrowserWebWorkerEnv: hm,
  navigator: xo,
  origin: pm
}, Symbol.toStringTag, { value: "Module" })), Xe = {
  ...mm,
  ...fm
};
function gm(e, t) {
  return ua(e, new Xe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, a) {
      return Xe.isNode && j.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ym(e) {
  return j.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function vm(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let a;
  for (r = 0; r < i; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function ff(e) {
  function t(n, r, i, a) {
    let o = n[a++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), l = a >= n.length;
    return o = !o && j.isArray(i) ? i.length : o, l ? (j.hasOwnProp(i, o) ? i[o] = [i[o], r] : i[o] = r, !s) : ((!i[o] || !j.isObject(i[o])) && (i[o] = []), t(n, r, i[o], a) && j.isArray(i[o]) && (i[o] = vm(i[o])), !s);
  }
  if (j.isFormData(e) && j.isFunction(e.entries)) {
    const n = {};
    return j.forEachEntry(e, (r, i) => {
      t(ym(r), i, n, 0);
    }), n;
  }
  return null;
}
function bm(e, t, n) {
  if (j.isString(e))
    try {
      return (t || JSON.parse)(e), j.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const jr = {
  transitional: cf,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, a = j.isObject(t);
    if (a && j.isHTMLForm(t) && (t = new FormData(t)), j.isFormData(t))
      return i ? JSON.stringify(ff(t)) : t;
    if (j.isArrayBuffer(t) || j.isBuffer(t) || j.isStream(t) || j.isFile(t) || j.isBlob(t) || j.isReadableStream(t))
      return t;
    if (j.isArrayBufferView(t))
      return t.buffer;
    if (j.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return gm(t, this.formSerializer).toString();
      if ((s = j.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return ua(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || i ? (n.setContentType("application/json", !1), bm(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || jr.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (j.isResponse(t) || j.isReadableStream(t))
      return t;
    if (t && j.isString(t) && (r && !this.responseType || i)) {
      const o = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? ve.from(s, ve.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Xe.classes.FormData,
    Blob: Xe.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  jr.headers[e] = {};
});
const wm = j.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), xm = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), n = o.substring(0, i).trim().toLowerCase(), r = o.substring(i + 1).trim(), !(!n || t[n] && wm[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ul = Symbol("internals");
function ar(e) {
  return e && String(e).trim().toLowerCase();
}
function gi(e) {
  return e === !1 || e == null ? e : j.isArray(e) ? e.map(gi) : String(e);
}
function Sm(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Cm = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Aa(e, t, n, r, i) {
  if (j.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!j.isString(t)) {
    if (j.isString(r))
      return t.indexOf(r) !== -1;
    if (j.isRegExp(r))
      return r.test(t);
  }
}
function Em(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function km(e, t) {
  const n = j.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, a, o) {
        return this[r].call(this, t, i, a, o);
      },
      configurable: !0
    });
  });
}
let ut = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function a(s, l, u) {
      const c = ar(l);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const f = j.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || u === void 0 && i[f] !== !1) && (i[f || l] = gi(s));
    }
    const o = (s, l) => j.forEach(s, (u, c) => a(u, c, l));
    if (j.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (j.isString(t) && (t = t.trim()) && !Cm(t))
      o(xm(t), n);
    else if (j.isHeaders(t))
      for (const [s, l] of t.entries())
        a(l, s, r);
    else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ar(t), t) {
      const r = j.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return Sm(i);
        if (j.isFunction(n))
          return n.call(this, i, r);
        if (j.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ar(t), t) {
      const r = j.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Aa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function a(o) {
      if (o = ar(o), o) {
        const s = j.findKey(r, o);
        s && (!n || Aa(r, r[s], s, n)) && (delete r[s], i = !0);
      }
    }
    return j.isArray(t) ? t.forEach(a) : a(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || Aa(this, this[a], a, t, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return j.forEach(this, (i, a) => {
      const o = j.findKey(r, a);
      if (o) {
        n[o] = gi(i), delete n[a];
        return;
      }
      const s = t ? Em(a) : String(a).trim();
      s !== a && delete n[a], n[s] = gi(i), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && j.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[ul] = this[ul] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = ar(o);
      r[s] || (km(i, o), r[s] = !0);
    }
    return j.isArray(t) ? t.forEach(a) : a(t), this;
  }
};
ut.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(ut.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
j.freezeMethods(ut);
function Pa(e, t) {
  const n = this || jr, r = t || n, i = ut.from(r.headers);
  let a = r.data;
  return j.forEach(e, function(s) {
    a = s.call(n, a, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), a;
}
function df(e) {
  return !!(e && e.__CANCEL__);
}
function Zn(e, t, n) {
  ve.call(this, e ?? "canceled", ve.ERR_CANCELED, t, n), this.name = "CanceledError";
}
j.inherits(Zn, ve, {
  __CANCEL__: !0
});
function hf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new ve(
    "Request failed with status code " + n.status,
    [ve.ERR_BAD_REQUEST, ve.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Om(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function _m(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const u = Date.now(), c = r[a];
    o || (o = u), n[i] = l, r[i] = u;
    let f = a, h = 0;
    for (; f !== i; )
      h += n[f++], f = f % e;
    if (i = (i + 1) % e, i === a && (a = (a + 1) % e), u - o < t)
      return;
    const d = c && u - c;
    return d ? Math.round(h * 1e3 / d) : void 0;
  };
}
function Tm(e, t) {
  let n = 0, r = 1e3 / t, i, a;
  const o = (u, c = Date.now()) => {
    n = c, i = null, a && (clearTimeout(a), a = null), e.apply(null, u);
  };
  return [(...u) => {
    const c = Date.now(), f = c - n;
    f >= r ? o(u, c) : (i = u, a || (a = setTimeout(() => {
      a = null, o(i);
    }, r - f)));
  }, () => i && o(i)];
}
const Mi = (e, t, n = 3) => {
  let r = 0;
  const i = _m(50, 250);
  return Tm((a) => {
    const o = a.loaded, s = a.lengthComputable ? a.total : void 0, l = o - r, u = i(l), c = o <= s;
    r = o;
    const f = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && s && c ? (s - o) / u : void 0,
      event: a,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, cl = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, fl = (e) => (...t) => j.asap(() => e(...t)), Am = Xe.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Xe.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Xe.origin),
  Xe.navigator && /(msie|trident)/i.test(Xe.navigator.userAgent)
) : () => !0, Pm = Xe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, a) {
      const o = [e + "=" + encodeURIComponent(t)];
      j.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), j.isString(r) && o.push("path=" + r), j.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Fm(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Dm(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function pf(e, t, n) {
  let r = !Fm(t);
  return e && r || n == !1 ? Dm(e, t) : t;
}
const dl = (e) => e instanceof ut ? { ...e } : e;
function En(e, t) {
  t = t || {};
  const n = {};
  function r(u, c, f, h) {
    return j.isPlainObject(u) && j.isPlainObject(c) ? j.merge.call({ caseless: h }, u, c) : j.isPlainObject(c) ? j.merge({}, c) : j.isArray(c) ? c.slice() : c;
  }
  function i(u, c, f, h) {
    if (j.isUndefined(c)) {
      if (!j.isUndefined(u))
        return r(void 0, u, f, h);
    } else return r(u, c, f, h);
  }
  function a(u, c) {
    if (!j.isUndefined(c))
      return r(void 0, c);
  }
  function o(u, c) {
    if (j.isUndefined(c)) {
      if (!j.isUndefined(u))
        return r(void 0, u);
    } else return r(void 0, c);
  }
  function s(u, c, f) {
    if (f in t)
      return r(u, c);
    if (f in e)
      return r(void 0, u);
  }
  const l = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (u, c, f) => i(dl(u), dl(c), f, !0)
  };
  return j.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const f = l[c] || i, h = f(e[c], t[c], c);
    j.isUndefined(h) && f !== s || (n[c] = h);
  }), n;
}
const mf = (e) => {
  const t = En({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s } = t;
  t.headers = o = ut.from(o), t.url = uf(pf(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let l;
  if (j.isFormData(n)) {
    if (Xe.hasStandardBrowserEnv || Xe.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((l = o.getContentType()) !== !1) {
      const [u, ...c] = l ? l.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([u || "multipart/form-data", ...c].join("; "));
    }
  }
  if (Xe.hasStandardBrowserEnv && (r && j.isFunction(r) && (r = r(t)), r || r !== !1 && Am(t.url))) {
    const u = i && a && Pm.read(a);
    u && o.set(i, u);
  }
  return t;
}, Rm = typeof XMLHttpRequest < "u", Im = Rm && function(e) {
  return new Promise(function(n, r) {
    const i = mf(e);
    let a = i.data;
    const o = ut.from(i.headers).normalize();
    let { responseType: s, onUploadProgress: l, onDownloadProgress: u } = i, c, f, h, d, p;
    function m() {
      d && d(), p && p(), i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c);
    }
    let y = new XMLHttpRequest();
    y.open(i.method.toUpperCase(), i.url, !0), y.timeout = i.timeout;
    function g() {
      if (!y)
        return;
      const x = ut.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), R = {
        data: !s || s === "text" || s === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: x,
        config: e,
        request: y
      };
      hf(function(L) {
        n(L), m();
      }, function(L) {
        r(L), m();
      }, R), y = null;
    }
    "onloadend" in y ? y.onloadend = g : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, y.onabort = function() {
      y && (r(new ve("Request aborted", ve.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      r(new ve("Network Error", ve.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let N = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const R = i.transitional || cf;
      i.timeoutErrorMessage && (N = i.timeoutErrorMessage), r(new ve(
        N,
        R.clarifyTimeoutError ? ve.ETIMEDOUT : ve.ECONNABORTED,
        e,
        y
      )), y = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in y && j.forEach(o.toJSON(), function(N, R) {
      y.setRequestHeader(R, N);
    }), j.isUndefined(i.withCredentials) || (y.withCredentials = !!i.withCredentials), s && s !== "json" && (y.responseType = i.responseType), u && ([h, p] = Mi(u, !0), y.addEventListener("progress", h)), l && y.upload && ([f, d] = Mi(l), y.upload.addEventListener("progress", f), y.upload.addEventListener("loadend", d)), (i.cancelToken || i.signal) && (c = (x) => {
      y && (r(!x || x.type ? new Zn(null, e, y) : x), y.abort(), y = null);
    }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
    const w = Om(i.url);
    if (w && Xe.protocols.indexOf(w) === -1) {
      r(new ve("Unsupported protocol " + w + ":", ve.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(a || null);
  });
}, Nm = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), i;
    const a = function(u) {
      if (!i) {
        i = !0, s();
        const c = u instanceof Error ? u : this.reason;
        r.abort(c instanceof ve ? c : new Zn(c instanceof Error ? c.message : c));
      }
    };
    let o = t && setTimeout(() => {
      o = null, a(new ve(`timeout ${t} of ms exceeded`, ve.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(a) : u.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", a));
    const { signal: l } = r;
    return l.unsubscribe = () => j.asap(s), l;
  }
}, Mm = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, Lm = async function* (e, t) {
  for await (const n of $m(e))
    yield* Mm(n, t);
}, $m = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, hl = (e, t, n, r) => {
  const i = Lm(e, t);
  let a = 0, o, s = (l) => {
    o || (o = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: c } = await i.next();
        if (u) {
          s(), l.close();
          return;
        }
        let f = c.byteLength;
        if (n) {
          let h = a += f;
          n(h);
        }
        l.enqueue(new Uint8Array(c));
      } catch (u) {
        throw s(u), u;
      }
    },
    cancel(l) {
      return s(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, ca = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", gf = ca && typeof ReadableStream == "function", Bm = ca && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), yf = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, jm = gf && yf(() => {
  let e = !1;
  const t = new Request(Xe.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), pl = 64 * 1024, So = gf && yf(() => j.isReadableStream(new Response("").body)), Li = {
  stream: So && ((e) => e.body)
};
ca && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Li[t] && (Li[t] = j.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new ve(`Response type '${t}' is not supported`, ve.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const zm = async (e) => {
  if (e == null)
    return 0;
  if (j.isBlob(e))
    return e.size;
  if (j.isSpecCompliantForm(e))
    return (await new Request(Xe.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (j.isArrayBufferView(e) || j.isArrayBuffer(e))
    return e.byteLength;
  if (j.isURLSearchParams(e) && (e = e + ""), j.isString(e))
    return (await Bm(e)).byteLength;
}, Um = async (e, t) => {
  const n = j.toFiniteNumber(e.getContentLength());
  return n ?? zm(t);
}, Vm = ca && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: i,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: s,
    onUploadProgress: l,
    responseType: u,
    headers: c,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = mf(e);
  u = u ? (u + "").toLowerCase() : "text";
  let d = Nm([i, a && a.toAbortSignal()], o), p;
  const m = d && d.unsubscribe && (() => {
    d.unsubscribe();
  });
  let y;
  try {
    if (l && jm && n !== "get" && n !== "head" && (y = await Um(c, r)) !== 0) {
      let R = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), A;
      if (j.isFormData(r) && (A = R.headers.get("content-type")) && c.setContentType(A), R.body) {
        const [L, C] = cl(
          y,
          Mi(fl(l))
        );
        r = hl(R.body, pl, L, C);
      }
    }
    j.isString(f) || (f = f ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    p = new Request(t, {
      ...h,
      signal: d,
      method: n.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: g ? f : void 0
    });
    let w = await fetch(p);
    const x = So && (u === "stream" || u === "response");
    if (So && (s || x && m)) {
      const R = {};
      ["status", "statusText", "headers"].forEach((F) => {
        R[F] = w[F];
      });
      const A = j.toFiniteNumber(w.headers.get("content-length")), [L, C] = s && cl(
        A,
        Mi(fl(s), !0)
      ) || [];
      w = new Response(
        hl(w.body, pl, L, () => {
          C && C(), m && m();
        }),
        R
      );
    }
    u = u || "text";
    let N = await Li[j.findKey(Li, u) || "text"](w, e);
    return !x && m && m(), await new Promise((R, A) => {
      hf(R, A, {
        data: N,
        headers: ut.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: p
      });
    });
  } catch (g) {
    throw m && m(), g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(
      new ve("Network Error", ve.ERR_NETWORK, e, p),
      {
        cause: g.cause || g
      }
    ) : ve.from(g, g && g.code, e, p);
  }
}), Co = {
  http: im,
  xhr: Im,
  fetch: Vm
};
j.forEach(Co, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const ml = (e) => `- ${e}`, Wm = (e) => j.isFunction(e) || e === null || e === !1, vf = {
  getAdapter: (e) => {
    e = j.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let o;
      if (r = n, !Wm(n) && (r = Co[(o = String(n)).toLowerCase()], r === void 0))
        throw new ve(`Unknown adapter '${o}'`);
      if (r)
        break;
      i[o || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(i).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(ml).join(`
`) : " " + ml(a[0]) : "as no adapter specified";
      throw new ve(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Co
};
function Fa(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Zn(null, e);
}
function gl(e) {
  return Fa(e), e.headers = ut.from(e.headers), e.data = Pa.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vf.getAdapter(e.adapter || jr.adapter)(e).then(function(r) {
    return Fa(e), r.data = Pa.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ut.from(r.headers), r;
  }, function(r) {
    return df(r) || (Fa(e), r && r.response && (r.response.data = Pa.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ut.from(r.response.headers))), Promise.reject(r);
  });
}
const bf = "1.8.3", fa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  fa[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const yl = {};
fa.transitional = function(t, n, r) {
  function i(a, o) {
    return "[Axios v" + bf + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, s) => {
    if (t === !1)
      throw new ve(
        i(o, " has been removed" + (n ? " in " + n : "")),
        ve.ERR_DEPRECATED
      );
    return n && !yl[o] && (yl[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, s) : !0;
  };
};
fa.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function qm(e, t, n) {
  if (typeof e != "object")
    throw new ve("options must be an object", ve.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const a = r[i], o = t[a];
    if (o) {
      const s = e[a], l = s === void 0 || o(s, a, e);
      if (l !== !0)
        throw new ve("option " + a + " must be " + l, ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new ve("Unknown option " + a, ve.ERR_BAD_OPTION);
  }
}
const yi = {
  assertOptions: qm,
  validators: fa
}, Pt = yi.validators;
let Sn = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ll(),
      response: new ll()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = En(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: a } = n;
    r !== void 0 && yi.assertOptions(r, {
      silentJSONParsing: Pt.transitional(Pt.boolean),
      forcedJSONParsing: Pt.transitional(Pt.boolean),
      clarifyTimeoutError: Pt.transitional(Pt.boolean)
    }, !1), i != null && (j.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : yi.assertOptions(i, {
      encode: Pt.function,
      serialize: Pt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), yi.assertOptions(n, {
      baseUrl: Pt.spelling("baseURL"),
      withXsrfToken: Pt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = a && j.merge(
      a.common,
      a[n.method]
    );
    a && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), n.headers = ut.concat(o, a);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (l = l && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(m) {
      u.push(m.fulfilled, m.rejected);
    });
    let c, f = 0, h;
    if (!l) {
      const p = [gl.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, u), h = p.length, c = Promise.resolve(n); f < h; )
        c = c.then(p[f++], p[f++]);
      return c;
    }
    h = s.length;
    let d = n;
    for (f = 0; f < h; ) {
      const p = s[f++], m = s[f++];
      try {
        d = p(d);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      c = gl.call(this, d);
    } catch (p) {
      return Promise.reject(p);
    }
    for (f = 0, h = u.length; f < h; )
      c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = En(this.defaults, t);
    const n = pf(t.baseURL, t.url, t.allowAbsoluteUrls);
    return uf(n, t.params, t.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function(t) {
  Sn.prototype[t] = function(n, r) {
    return this.request(En(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, o, s) {
      return this.request(En(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Sn.prototype[t] = n(), Sn.prototype[t + "Form"] = n(!0);
});
let Hm = class wf {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((s) => {
        r.subscribe(s), a = s;
      }).then(i);
      return o.cancel = function() {
        r.unsubscribe(a);
      }, o;
    }, t(function(a, o, s) {
      r.reason || (r.reason = new Zn(a, o, s), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new wf(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
};
function Gm(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Qm(e) {
  return j.isObject(e) && e.isAxiosError === !0;
}
const Eo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Eo).forEach(([e, t]) => {
  Eo[t] = e;
});
function xf(e) {
  const t = new Sn(e), n = Jc(Sn.prototype.request, t);
  return j.extend(n, Sn.prototype, t, { allOwnKeys: !0 }), j.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return xf(En(e, i));
  }, n;
}
const De = xf(jr);
De.Axios = Sn;
De.CanceledError = Zn;
De.CancelToken = Hm;
De.isCancel = df;
De.VERSION = bf;
De.toFormData = ua;
De.AxiosError = ve;
De.Cancel = De.CanceledError;
De.all = function(t) {
  return Promise.all(t);
};
De.spread = Gm;
De.isAxiosError = Qm;
De.mergeConfig = En;
De.AxiosHeaders = ut;
De.formToJSON = (e) => ff(j.isHTMLForm(e) ? new FormData(e) : e);
De.getAdapter = vf.getAdapter;
De.HttpStatusCode = Eo;
De.default = De;
const {
  Axios: dO,
  AxiosError: hO,
  CanceledError: pO,
  isCancel: mO,
  CancelToken: gO,
  VERSION: yO,
  all: vO,
  Cancel: bO,
  isAxiosError: wO,
  spread: xO,
  toFormData: SO,
  AxiosHeaders: CO,
  HttpStatusCode: EO,
  formToJSON: kO,
  getAdapter: OO,
  mergeConfig: _O
} = De, Ym = 1e6, Km = 6, Jm = (e) => e ? Number.parseFloat((e / Ym).toFixed(Km)) : 0, Xm = (...e) => (...t) => e.forEach((n) => n && n(...t)), Zm = (e, t) => e ? Object.entries(e).reduce(
  (r, [i, a]) => (a != null && !(t != null && t.includes(i)) && (r[i] = a), r),
  {}
) : null, eg = (e, t, n) => !e || !t ? null : Object.entries(t).reduce((i, [a, o]) => (!(n != null && n.includes(a)) && e.hasOwnProperty(a) && o !== void 0 && o !== null && (i[a] = e[a]), i), {}), Sf = 6048e5, tg = 864e5, vl = Symbol.for("constructDateFrom");
function sn(e, t) {
  return typeof e == "function" ? e(t) : e && typeof e == "object" && vl in e ? e[vl](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
function _t(e, t) {
  return sn(t || e, e);
}
let ng = {};
function da() {
  return ng;
}
function Or(e, t) {
  var s, l, u, c;
  const n = da(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = _t(e, t == null ? void 0 : t.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
  return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
function $i(e, t) {
  return Or(e, { ...t, weekStartsOn: 1 });
}
function Cf(e, t) {
  const n = _t(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = sn(n, 0);
  i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
  const a = $i(i), o = sn(n, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const s = $i(o);
  return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
function bl(e) {
  const t = _t(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function rg(e, ...t) {
  const n = sn.bind(
    null,
    t.find((r) => typeof r == "object")
  );
  return t.map(n);
}
function wl(e, t) {
  const n = _t(e, t == null ? void 0 : t.in);
  return n.setHours(0, 0, 0, 0), n;
}
function ig(e, t, n) {
  const [r, i] = rg(
    n == null ? void 0 : n.in,
    e,
    t
  ), a = wl(r), o = wl(i), s = +a - bl(a), l = +o - bl(o);
  return Math.round((s - l) / tg);
}
function ag(e, t) {
  const n = Cf(e, t), r = sn(e, 0);
  return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), $i(r);
}
function og(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function sg(e) {
  return !(!og(e) && typeof e != "number" || isNaN(+_t(e)));
}
function lg(e, t) {
  const n = _t(e, t == null ? void 0 : t.in);
  return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
const ug = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, cg = (e, t, n) => {
  let r;
  const i = ug[e];
  return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Da(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const fg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, dg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, hg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, pg = {
  date: Da({
    formats: fg,
    defaultWidth: "full"
  }),
  time: Da({
    formats: dg,
    defaultWidth: "full"
  }),
  dateTime: Da({
    formats: hg,
    defaultWidth: "full"
  })
}, mg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, gg = (e, t, n, r) => mg[e];
function or(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let i;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : o;
      i = e.formattingValues[s] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      i = e.values[s] || e.values[o];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
const yg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, vg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, bg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, wg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, xg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Sg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Cg = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Eg = {
  ordinalNumber: Cg,
  era: or({
    values: yg,
    defaultWidth: "wide"
  }),
  quarter: or({
    values: vg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: or({
    values: bg,
    defaultWidth: "wide"
  }),
  day: or({
    values: wg,
    defaultWidth: "wide"
  }),
  dayPeriod: or({
    values: xg,
    defaultWidth: "wide",
    formattingValues: Sg,
    defaultFormattingWidth: "wide"
  })
};
function sr(e) {
  return (t, n = {}) => {
    const r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Og(s, (f) => f.test(o)) : (
      // [TODO] -- I challenge you to fix the type
      kg(s, (f) => f.test(o))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      n.valueCallback(u)
    ) : u;
    const c = t.slice(o.length);
    return { value: u, rest: c };
  };
}
function kg(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Og(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function _g(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const i = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const s = t.slice(i.length);
    return { value: o, rest: s };
  };
}
const Tg = /^(\d+)(th|st|nd|rd)?/i, Ag = /\d+/i, Pg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Fg = {
  any: [/^b/i, /^(a|c)/i]
}, Dg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Rg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ig = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ng = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Mg = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Lg = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, $g = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Bg = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, jg = {
  ordinalNumber: _g({
    matchPattern: Tg,
    parsePattern: Ag,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: sr({
    matchPatterns: Pg,
    defaultMatchWidth: "wide",
    parsePatterns: Fg,
    defaultParseWidth: "any"
  }),
  quarter: sr({
    matchPatterns: Dg,
    defaultMatchWidth: "wide",
    parsePatterns: Rg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: sr({
    matchPatterns: Ig,
    defaultMatchWidth: "wide",
    parsePatterns: Ng,
    defaultParseWidth: "any"
  }),
  day: sr({
    matchPatterns: Mg,
    defaultMatchWidth: "wide",
    parsePatterns: Lg,
    defaultParseWidth: "any"
  }),
  dayPeriod: sr({
    matchPatterns: $g,
    defaultMatchWidth: "any",
    parsePatterns: Bg,
    defaultParseWidth: "any"
  })
}, zg = {
  code: "en-US",
  formatDistance: cg,
  formatLong: pg,
  formatRelative: gg,
  localize: Eg,
  match: jg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Ug(e, t) {
  const n = _t(e, t == null ? void 0 : t.in);
  return ig(n, lg(n)) + 1;
}
function Vg(e, t) {
  const n = _t(e, t == null ? void 0 : t.in), r = +$i(n) - +ag(n);
  return Math.round(r / Sf) + 1;
}
function Ef(e, t) {
  var c, f, h, d;
  const n = _t(e, t == null ? void 0 : t.in), r = n.getFullYear(), i = da(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? i.firstWeekContainsDate ?? ((d = (h = i.locale) == null ? void 0 : h.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = sn((t == null ? void 0 : t.in) || e, 0);
  o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
  const s = Or(o, t), l = sn((t == null ? void 0 : t.in) || e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const u = Or(l, t);
  return +n >= +s ? r + 1 : +n >= +u ? r : r - 1;
}
function Wg(e, t) {
  var s, l, u, c;
  const n = da(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((c = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? 1, i = Ef(e, t), a = sn((t == null ? void 0 : t.in) || e, 0);
  return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Or(a, t);
}
function qg(e, t) {
  const n = _t(e, t == null ? void 0 : t.in), r = +Or(n, t) - +Wg(n, t);
  return Math.round(r / Sf) + 1;
}
function Oe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Xt = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Oe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Oe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Oe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Oe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Oe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Oe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Oe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), i = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Oe(i, t.length);
  }
}, Pn = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, xl = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), i = r > 0 ? r : 1 - r;
      return n.ordinalNumber(i, { unit: "year" });
    }
    return Xt.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const i = Ef(e, r), a = i > 0 ? i : 1 - i;
    if (t === "YY") {
      const o = a % 100;
      return Oe(o, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Oe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Cf(e);
    return Oe(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Oe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "Q":
        return String(r);
      // 01, 02, 03, 04
      case "QQ":
        return Oe(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      // 1, 2, 3, 4
      case "q":
        return String(r);
      // 01, 02, 03, 04
      case "qq":
        return Oe(r, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Xt.M(e, t);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      // 1, 2, ..., 12
      case "L":
        return String(r + 1);
      // 01, 02, ..., 12
      case "LL":
        return Oe(r + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const i = qg(e, r);
    return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Oe(i, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Vg(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Oe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Xt.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Ug(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Oe(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(a);
      // Padded numerical value
      case "ee":
        return Oe(a, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(i, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return n.day(i, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return n.day(i, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return n.day(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      // Numerical value (same as in `e`)
      case "c":
        return String(a);
      // Padded numerical value
      case "cc":
        return Oe(a, t.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(i, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return n.day(i, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return n.day(i, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return n.day(i, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), i = r === 0 ? 7 : r;
    switch (t) {
      // 2
      case "i":
        return String(i);
      // 02
      case "ii":
        return Oe(i, t.length);
      // 2nd
      case "io":
        return n.ordinalNumber(i, { unit: "day" });
      // Tue
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const i = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r === 12 ? i = Pn.noon : r === 0 ? i = Pn.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let i;
    switch (r >= 17 ? i = Pn.evening : r >= 12 ? i = Pn.afternoon : r >= 4 ? i = Pn.morning : i = Pn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(i, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(i, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(i, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Xt.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Xt.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Oe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Oe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Xt.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Xt.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Xt.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      // Hours and optional minutes
      case "X":
        return Cl(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return gn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return gn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Hours and optional minutes
      case "x":
        return Cl(r);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return gn(r);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return gn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Sl(r, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + gn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Sl(r, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + gn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(+e / 1e3);
    return Oe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    return Oe(+e, t.length);
  }
};
function Sl(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(i) : n + String(i) + t + Oe(a, 2);
}
function Cl(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Oe(Math.abs(e) / 60, 2) : gn(e, t);
}
function gn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), i = Oe(Math.trunc(r / 60), 2), a = Oe(r % 60, 2);
  return n + i + t + a;
}
const El = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, kf = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, Hg = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
  if (!i)
    return El(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", El(r, t)).replace("{{time}}", kf(i, t));
}, Gg = {
  p: kf,
  P: Hg
}, Qg = /^D+$/, Yg = /^Y+$/, Kg = ["D", "DD", "YY", "YYYY"];
function Jg(e) {
  return Qg.test(e);
}
function Xg(e) {
  return Yg.test(e);
}
function Zg(e, t, n) {
  const r = ey(e, t, n);
  if (console.warn(r), Kg.includes(e)) throw new RangeError(r);
}
function ey(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const ty = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ny = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ry = /^'([^]*?)'?$/, iy = /''/g, ay = /[a-zA-Z]/;
function oy(e, t, n) {
  var c, f, h, d;
  const r = da(), i = r.locale ?? zg, a = r.firstWeekContainsDate ?? ((f = (c = r.locale) == null ? void 0 : c.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = r.weekStartsOn ?? ((d = (h = r.locale) == null ? void 0 : h.options) == null ? void 0 : d.weekStartsOn) ?? 0, s = _t(e, n == null ? void 0 : n.in);
  if (!sg(s))
    throw new RangeError("Invalid time value");
  let l = t.match(ny).map((p) => {
    const m = p[0];
    if (m === "p" || m === "P") {
      const y = Gg[m];
      return y(p, i.formatLong);
    }
    return p;
  }).join("").match(ty).map((p) => {
    if (p === "''")
      return { isToken: !1, value: "'" };
    const m = p[0];
    if (m === "'")
      return { isToken: !1, value: sy(p) };
    if (xl[m])
      return { isToken: !0, value: p };
    if (m.match(ay))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + m + "`"
      );
    return { isToken: !1, value: p };
  });
  i.localize.preprocessor && (l = i.localize.preprocessor(s, l));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: o,
    locale: i
  };
  return l.map((p) => {
    if (!p.isToken) return p.value;
    const m = p.value;
    (Xg(m) || Jg(m)) && Zg(m, t, String(e));
    const y = xl[m[0]];
    return y(s, m, i.localize, u);
  }).join("");
}
function sy(e) {
  const t = e.match(ry);
  return t ? t[1].replace(iy, "'") : e;
}
const ko = (e, t = "do MMM yyyy") => oy(new Date(e), t).toString(), ly = (e, t) => {
  if (e.length <= 6)
    return `${e}#${t}`;
  const n = e.slice(0, 4), r = e.slice(-4);
  return `${n}...${r}#${t}`;
}, pt = (e, t) => `${e}#${t}`;
var ht = /* @__PURE__ */ ((e) => (e.URL_NOT_FOUND = "URL_NOT_FOUND", e.INVALID_JSONLD = "INVALID_JSONLD", e.INVALID_HASH = "INVALID_HASH", e.INCORRECT_FORMAT = "INCORRECT_FORMAT", e))(ht || {}), vi = /* @__PURE__ */ ((e) => (e.ParameterChange = "ParameterChange", e.HardForkInitiation = "HardForkInitiation", e.TreasuryWithdrawals = "TreasuryWithdrawals", e.NoConfidence = "NoConfidence", e.NewCommittee = "NewCommittee", e.NewConstitution = "NewConstitution", e.InfoAction = "InfoAction", e))(vi || {});
const Bi = (e) => ({
  [ht.URL_NOT_FOUND]: "Data Missing",
  [ht.INVALID_JSONLD]: "Data Formatted Incorrectly",
  [ht.INCORRECT_FORMAT]: "Data Formatted Incorrectly",
  [ht.INVALID_HASH]: "Data Not Verifiable"
})[e] || "Data missing", uy = (e) => {
  var n;
  return ((n = aa.find((r) => r.key === e)) == null ? void 0 : n.title) ?? e;
}, kn = (e) => {
  var n;
  return ((n = aa.find((r) => r.key === e)) == null ? void 0 : n.label) ?? e;
}, _r = (e) => kn(e).replace(/ /g, ""), es = async (e, t) => {
  var n, r, i, a, o, s;
  if (t.url && t.metadataHash) {
    const l = await gy(
      e,
      {
        url: t.url,
        hash: t.metadataHash
      }
    );
    return {
      ...t,
      title: (n = l.metadata) == null ? void 0 : n.title,
      abstract: (r = l.metadata) == null ? void 0 : r.abstract,
      motivation: (i = l.metadata) == null ? void 0 : i.motivation,
      rationale: (a = l.metadata) == null ? void 0 : a.rationale,
      references: (s = (o = l.metadata) == null ? void 0 : o.references) == null ? void 0 : s.map(
        ({ uri: u }) => u
      ),
      metadataStatus: l.status ?? null,
      metadataValid: l.valid
    };
  }
  return {
    ...t,
    metadataStatus: null,
    metadataValid: !0
  };
}, ha = (e) => {
  const t = window.open(e, "_blank", "noopener,noreferrer");
  t && (t.opener = null);
}, cy = (e) => {
  if (!e) return [];
  const t = /* @__PURE__ */ new Set();
  return e.filter((n) => {
    const r = n.txHash + n.index;
    return t.has(r) ? !1 : (t.add(r), !0);
  });
}, Of = (e) => e.trim().replace(/ /g, "-").toLocaleLowerCase(), fy = async (e, t, {
  dRepID: n,
  params: r
}) => {
  const { data: i } = await De.get(
    `${e}/drep/getVotes/${n}`,
    { params: r }
  );
  return await Promise.all(
    i.map(async (o) => ({
      ...o,
      proposal: await es(
        t,
        o.proposal
      )
    }))
  );
}, dy = async (e, t, n, r) => {
  const i = encodeURIComponent(n), { data: a } = await De.get(
    `${e}/proposal/get/${i}?drepId=${r}`
  );
  return {
    ...a,
    proposal: await es(t, a)
  };
}, _f = async (e, t, {
  dRepID: n = "",
  filters: r = [],
  page: i = 0,
  // It allows fetch proposals and if we have 7 items, display 6 cards and "view all" button
  pageSize: a = 7,
  searchPhrase: o = "",
  sorting: s = ""
}) => {
  if (!e)
    throw new Error("URL is undefined");
  const l = await De.get(
    `${e}/proposal/list`,
    {
      params: {
        page: i,
        pageSize: a,
        ...o && { search: o },
        ...r.length && { type: r },
        ...s && { sort: s },
        ...n && { drepId: n }
      }
    }
  );
  return {
    ...l.data,
    elements: await Promise.all(
      l.data.elements.map(
        (c) => es(t, c)
      )
    )
  };
}, hy = async (e) => {
  if (!e)
    throw new Error("URL is undefined");
  return (await De.get(e)).data.body["CIP108:voteContextText"]["@value"];
}, py = 30 * 1e3, my = De.create({
  timeout: py
}), gy = async (e, t) => (await my.post(e, t)).data, yy = (e, t, n) => {
  var h;
  const { dRepID: r, pendingTransaction: i, apiUrl: a, validationApiUrl: o } = Ve(), { data: s, isLoading: l, refetch: u, isRefetching: c } = ia({
    queryKey: [
      $r.useGetDRepVotesKey,
      (h = i == null ? void 0 : i.vote) == null ? void 0 : h.transactionHash,
      e,
      t,
      n
    ],
    queryFn: () => fy(a, o, {
      dRepID: r ?? "",
      params: {
        ...n && { search: n },
        ...t && { sort: t },
        ...e && { type: e }
      }
    }),
    enabled: !!r
  }), f = s == null ? void 0 : s.reduce((d, p) => {
    const m = p == null ? void 0 : p.proposal.type;
    return d[m] || (d[m] = {
      title: m,
      actions: []
    }), d[m].actions.push(p), d;
  }, {});
  return {
    data: Object.values(f ?? []),
    areDRepVotesLoading: l,
    refetch: u,
    isRefetching: c
  };
}, vy = (e, t) => {
  const { dRepID: n, apiUrl: r, validationApiUrl: i } = Ve(), { data: a, isLoading: o, refetch: s, isRefetching: l } = ia(
    [$r.useGetProposalKey, n, e],
    () => dy(r, i, e, n),
    {
      staleTime: 1 / 0,
      enabled: t
    }
  );
  return {
    data: a,
    isLoading: o,
    refetch: s,
    isFetching: l
  };
}, by = ({
  filters: e = [],
  pageSize: t = 10,
  searchPhrase: n,
  sorting: r = ""
}) => {
  var g;
  const { dRepID: i, isEnabled: a, pendingTransaction: o, apiUrl: s, validationApiUrl: l } = Ve(), u = async ({ pageParam: w = 0 }) => await _f(s, l, {
    dRepID: i,
    filters: e,
    page: w,
    pageSize: t,
    searchPhrase: n,
    sorting: r
  }), {
    data: c,
    isLoading: f,
    fetchNextPage: h,
    hasNextPage: d,
    isFetching: p,
    isFetchingNextPage: m
  } = vp(
    [
      $r.useGetProposalsInfiniteKey,
      s,
      i,
      e,
      a,
      (g = o == null ? void 0 : o.vote) == null ? void 0 : g.transactionHash,
      n,
      r
    ],
    u,
    {
      getNextPageParam: (w) => {
        if (w.elements.length !== 0)
          return w.page + 1;
      },
      refetchInterval: 2e4
    }
  ), y = c == null ? void 0 : c.pages.flatMap(
    (w) => w.elements
  );
  return {
    proposalsfetchNextPage: h,
    proposalsHaveNextPage: d,
    isProposalsFetching: p,
    isProposalsFetchingNextPage: m,
    isProposalsLoading: f,
    proposals: y
  };
}, wy = ({
  filters: e = [],
  searchPhrase: t,
  sorting: n
}) => {
  var h;
  const { dRepID: r, pendingTransaction: i, apiUrl: a, validationApiUrl: o, voter: s } = Ve(), l = async () => (await Promise.all(
    e.map(
      (p) => _f(a, o, {
        dRepID: s != null && s.isRegisteredAsDRep || s != null && s.isRegisteredAsSoleVoter ? r : void 0,
        filters: [p],
        searchPhrase: t,
        sorting: n
      })
    )
  )).flatMap((p) => p.elements), { data: u, isLoading: c } = ia(
    [
      $r.useGetProposalsKey,
      e,
      t,
      n,
      r,
      (h = i == null ? void 0 : i.vote) == null ? void 0 : h.transactionHash
    ],
    l
  ), f = Object.values(xy(u) ?? []);
  return {
    isProposalsLoading: c,
    proposals: f
  };
}, xy = (e) => e == null ? void 0 : e.reduce((t, n) => {
  const r = n.type;
  return t[r] || (t[r] = {
    title: r,
    actions: []
  }), t[r].actions.push(n), t;
}, {}), Sy = (e, t = !0) => {
  const { data: n, isLoading: r } = ia(
    [$r.useGetVoteContextFromFile, e],
    () => hy(e),
    {
      enabled: t
    }
  );
  return { voteContextText: n, isLoading: r };
};
function Cy(e, t) {
  const [n, r] = Be(e);
  return Mt(() => {
    const i = setTimeout(() => {
      r(e);
    }, t);
    return () => {
      clearTimeout(i);
    };
  }, [e, t]), n;
}
const Ey = 0.85, ky = (e, t, n) => {
  Mt(() => {
    const r = () => {
      const { scrollTop: i } = document.documentElement, a = window.innerHeight, o = document.documentElement.offsetHeight;
      i + a > o * Ey && n && !t && e();
    };
    return window.addEventListener("scroll", r), () => {
      window.removeEventListener("scroll", r);
    };
  }, [e, t, n]);
};
function Tf(e, t) {
  Mt(() => {
    const n = (r) => {
      const i = r.target;
      !e.current || e.current.contains(i) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}
const Ra = "governanceActionsCategoryScrollPosition", Oy = (e, t) => {
  const n = () => {
    sessionStorage.setItem(Ra, window.scrollY.toString());
  };
  return Mt(() => {
    if (!e && !t) {
      const r = sessionStorage.getItem(Ra);
      r !== null && (window.scrollTo(0, parseInt(r, 10)), sessionStorage.removeItem(Ra));
    }
  }, [e, t]), n;
}, Ie = () => {
  const [e, t] = Be(window.innerWidth), [n, r] = Be(window.innerWidth < 768);
  let i;
  e < 768 ? i = 2 : e < 1024 ? i = 6 : e < 1440 ? i = 8 : e < 1920 ? i = 10 : i = 37;
  function a() {
    t(window.innerWidth), r(window.innerWidth < 768);
  }
  return Mt(() => (window.addEventListener("resize", a), () => {
    window.removeEventListener("resize", a);
  }), []), {
    screenWidth: e,
    isMobile: n,
    pagePadding: i
  };
};
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Kr = {}, kl;
function _y() {
  if (kl) return Kr;
  kl = 1, Object.defineProperty(Kr, "__esModule", { value: !0 });
  var e = pe;
  function t(C) {
    return Array.prototype.slice.call(C);
  }
  function n(C, F) {
    var P = Math.floor(C);
    return P === F || P + 1 === F ? C : F;
  }
  function r() {
    return Date.now();
  }
  function i(C, F, P) {
    if (F = "data-keen-slider-" + F, P === null) return C.removeAttribute(F);
    C.setAttribute(F, P || "");
  }
  function a(C, F) {
    return F = F || document, typeof C == "function" && (C = C(F)), Array.isArray(C) ? C : typeof C == "string" ? t(F.querySelectorAll(C)) : C instanceof HTMLElement ? [C] : C instanceof NodeList ? t(C) : [];
  }
  function o(C) {
    C.raw && (C = C.raw), C.cancelable && !C.defaultPrevented && C.preventDefault();
  }
  function s(C) {
    C.raw && (C = C.raw), C.stopPropagation && C.stopPropagation();
  }
  function l() {
    var C = [];
    return { add: function(F, P, b, E) {
      F.addListener ? F.addListener(b) : F.addEventListener(P, b, E), C.push([F, P, b, E]);
    }, input: function(F, P, b, E) {
      this.add(F, P, /* @__PURE__ */ function(O) {
        return function(T) {
          T.nativeEvent && (T = T.nativeEvent);
          var M = T.changedTouches || [], B = T.targetTouches || [], z = T.detail && T.detail.x ? T.detail : null;
          return O({ id: z ? z.identifier ? z.identifier : "i" : B[0] ? B[0] ? B[0].identifier : "e" : "d", idChanged: z ? z.identifier ? z.identifier : "i" : M[0] ? M[0] ? M[0].identifier : "e" : "d", raw: T, x: z && z.x ? z.x : B[0] ? B[0].screenX : z ? z.x : T.pageX, y: z && z.y ? z.y : B[0] ? B[0].screenY : z ? z.y : T.pageY });
        };
      }(b), E);
    }, purge: function() {
      C.forEach(function(F) {
        F[0].removeListener ? F[0].removeListener(F[2]) : F[0].removeEventListener(F[1], F[2], F[3]);
      }), C = [];
    } };
  }
  function u(C, F, P) {
    return Math.min(Math.max(C, F), P);
  }
  function c(C) {
    return (C > 0 ? 1 : 0) - (C < 0 ? 1 : 0) || +C;
  }
  function f(C) {
    var F = C.getBoundingClientRect();
    return { height: n(F.height, C.offsetHeight), width: n(F.width, C.offsetWidth) };
  }
  function h(C, F, P, b) {
    var E = C && C[F];
    return E == null ? P : b && typeof E == "function" ? E() : E;
  }
  function d(C) {
    return Math.round(1e6 * C) / 1e6;
  }
  function p(C, F) {
    if (C === F) return !0;
    var P = typeof C;
    if (P !== typeof F) return !1;
    if (P !== "object" || C === null || F === null) return P === "function" && C.toString() === F.toString();
    if (C.length !== F.length || Object.getOwnPropertyNames(C).length !== Object.getOwnPropertyNames(F).length) return !1;
    for (var b in C) if (!p(C[b], F[b])) return !1;
    return !0;
  }
  var m = function() {
    return m = Object.assign || function(C) {
      for (var F, P = 1, b = arguments.length; P < b; P++) for (var E in F = arguments[P]) Object.prototype.hasOwnProperty.call(F, E) && (C[E] = F[E]);
      return C;
    }, m.apply(this, arguments);
  };
  function y(C, F, P) {
    for (var b, E = 0, O = F.length; E < O; E++) !b && E in F || (b || (b = Array.prototype.slice.call(F, 0, E)), b[E] = F[E]);
    return C.concat(b || Array.prototype.slice.call(F));
  }
  function g(C) {
    var F, P, b, E, O, T;
    function M(S) {
      T || (T = S), B(!0);
      var J = S - T;
      J > b && (J = b);
      var ee = E[P];
      if (ee[3] < J) return P++, M(S);
      var k = ee[2], ae = ee[4], oe = ee[0], ne = ee[1] * (0, ee[5])(ae === 0 ? 1 : (J - k) / ae);
      if (ne && C.track.to(oe + ne), J < b) return H();
      T = null, B(!1), z(null), C.emit("animationEnded");
    }
    function B(S) {
      F.active = S;
    }
    function z(S) {
      F.targetIdx = S;
    }
    function H() {
      var S;
      S = M, O = window.requestAnimationFrame(S);
    }
    function K() {
      var S;
      S = O, window.cancelAnimationFrame(S), B(!1), z(null), T && C.emit("animationStopped"), T = null;
    }
    return F = { active: !1, start: function(S) {
      if (K(), C.track.details) {
        var J = 0, ee = C.track.details.position;
        P = 0, b = 0, E = S.map(function(k) {
          var ae, oe = Number(ee), ne = (ae = k.earlyExit) !== null && ae !== void 0 ? ae : k.duration, le = k.easing, we = k.distance * le(ne / k.duration) || 0;
          ee += we;
          var he = b;
          return b += ne, J += we, [oe, k.distance, he, b, k.duration, le];
        }), z(C.track.distToIdx(J)), H(), C.emit("animationStarted");
      }
    }, stop: K, targetIdx: null };
  }
  function w(C) {
    var F, P, b, E, O, T, M, B, z, H, K, S, J, ee, k = 1 / 0, ae = [], oe = null, ne = 0;
    function le(_) {
      _e(ne + _);
    }
    function we(_) {
      var D = he(ne + _).abs;
      return ce(D) ? D : null;
    }
    function he(_) {
      var D = Math.floor(Math.abs(d(_ / P))), I = d((_ % P + P) % P);
      I === P && (I = 0);
      var W = c(_), U = M.indexOf(y([], M).reduce(function(X, re) {
        return Math.abs(re - I) < Math.abs(X - I) ? re : X;
      })), V = U;
      return W < 0 && D++, U === T && (V = 0, D += W > 0 ? 1 : -1), { abs: V + D * T * W, origin: U, rel: V };
    }
    function be(_, D, I) {
      var W;
      if (D || !Me()) return ie(_, I);
      if (!ce(_)) return null;
      var U = he(I ?? ne), V = U.abs, X = _ - U.rel, re = V + X;
      W = ie(re);
      var $ = ie(re - T * c(X));
      return ($ !== null && Math.abs($) < Math.abs(W) || W === null) && (W = $), d(W);
    }
    function ie(_, D) {
      if (D == null && (D = d(ne)), !ce(_) || _ === null) return null;
      _ = Math.round(_);
      var I = he(D), W = I.abs, U = I.rel, V = I.origin, X = Le(_), re = (D % P + P) % P, $ = M[V], q = Math.floor((_ - (W - U)) / T) * P;
      return d($ - re - $ + M[X] + q + (V === T ? P : 0));
    }
    function ce(_) {
      return Ce(_) === _;
    }
    function Ce(_) {
      return u(_, z, H);
    }
    function Me() {
      return E.loop;
    }
    function Le(_) {
      return (_ % T + T) % T;
    }
    function _e(_) {
      var D;
      D = _ - ne, ae.push({ distance: D, timestamp: r() }), ae.length > 6 && (ae = ae.slice(-6)), ne = d(_);
      var I = fe().abs;
      if (I !== oe) {
        var W = oe !== null;
        oe = I, W && C.emit("slideChanged");
      }
    }
    function fe(_) {
      var D = _ ? null : function() {
        if (T) {
          var I = Me(), W = I ? (ne % P + P) % P : ne, U = (I ? ne % P : ne) - O[0][2], V = 0 - (U < 0 && I ? P - Math.abs(U) : U), X = 0, re = he(ne), $ = re.abs, q = re.rel, ue = O[q][2], me = O.map(function(ge, He) {
            var Te = V + X;
            (Te < 0 - ge[0] || Te > 1) && (Te += (Math.abs(Te) > P - 1 && I ? P : 0) * c(-Te));
            var et = He - q, At = c(et), nt = et + $;
            I && (At === -1 && Te > ue && (nt += T), At === 1 && Te < ue && (nt -= T), K !== null && nt < K && (Te += P), S !== null && nt > S && (Te -= P));
            var Ke = Te + ge[0] + ge[1], Jt = Math.max(Te >= 0 && Ke <= 1 ? 1 : Ke < 0 || Te > 1 ? 0 : Te < 0 ? Math.min(1, (ge[0] + Te) / ge[0]) : (1 - Te) / ge[0], 0);
            return X += ge[0] + ge[1], { abs: nt, distance: E.rtl ? -1 * Te + 1 - ge[0] : Te, portion: Jt, size: ge[0] };
          });
          return $ = Ce($), q = Le($), { abs: Ce($), length: b, max: ee, maxIdx: H, min: J, minIdx: z, position: ne, progress: I ? W / P : ne / b, rel: q, slides: me, slidesLength: P };
        }
      }();
      return F.details = D, C.emit("detailsChanged"), D;
    }
    return F = { absToRel: Le, add: le, details: null, distToIdx: we, idxToDist: be, init: function(_) {
      if (function() {
        if (E = C.options, O = (E.trackConfig || []).map(function(U) {
          return [h(U, "size", 1), h(U, "spacing", 0), h(U, "origin", 0)];
        }), T = O.length) {
          P = d(O.reduce(function(U, V) {
            return U + V[0] + V[1];
          }, 0));
          var I, W = T - 1;
          b = d(P + O[0][2] - O[W][0] - O[W][2] - O[W][1]), M = O.reduce(function(U, V) {
            if (!U) return [0];
            var X = O[U.length - 1], re = U[U.length - 1] + (X[0] + X[2]) + X[1];
            return re -= V[2], U[U.length - 1] > re && (re = U[U.length - 1]), re = d(re), U.push(re), (!I || I < re) && (B = U.length - 1), I = re, U;
          }, null), b === 0 && (B = 0), M.push(d(P));
        }
      }(), !T) return fe(!0);
      var D;
      (function() {
        var I = C.options.range, W = C.options.loop;
        K = z = W ? h(W, "min", -1 / 0) : 0, S = H = W ? h(W, "max", k) : B;
        var U = h(I, "min", null), V = h(I, "max", null);
        U !== null && (z = U), V !== null && (H = V), J = z === -1 / 0 ? z : C.track.idxToDist(z || 0, !0, 0), ee = H === k ? H : be(H, !0, 0), V === null && (S = H), h(I, "align", !1) && H !== k && O[Le(H)][2] === 0 && (ee -= 1 - O[Le(H)][0], H = we(ee - ne)), J = d(J), ee = d(ee);
      })(), D = _, Number(D) === D ? le(ie(Ce(_))) : fe();
    }, to: _e, velocity: function() {
      var _ = r(), D = ae.reduce(function(I, W) {
        var U = W.distance, V = W.timestamp;
        return _ - V > 200 || (c(U) !== c(I.distance) && I.distance && (I = { distance: 0, lastTimestamp: 0, time: 0 }), I.time && (I.distance += U), I.lastTimestamp && (I.time += V - I.lastTimestamp), I.lastTimestamp = V), I;
      }, { distance: 0, lastTimestamp: 0, time: 0 });
      return D.distance / D.time || 0;
    } };
  }
  function x(C) {
    var F, P, b, E, O, T, M, B;
    function z(oe) {
      return 2 * oe;
    }
    function H(oe) {
      return u(oe, M, B);
    }
    function K(oe) {
      return 1 - Math.pow(1 - oe, 3);
    }
    function S() {
      return b ? C.track.velocity() : 0;
    }
    function J() {
      ae();
      var oe = C.options.mode === "free-snap", ne = C.track, le = S();
      E = c(le);
      var we = C.track.details, he = [];
      if (le || !oe) {
        var be = ee(le), ie = be.dist, ce = be.dur;
        if (ce = z(ce), ie *= E, oe) {
          var Ce = ne.idxToDist(ne.distToIdx(ie), !0);
          Ce && (ie = Ce);
        }
        he.push({ distance: ie, duration: ce, easing: K });
        var Me = we.position, Le = Me + ie;
        if (Le < O || Le > T) {
          var _e = Le < O ? O - Me : T - Me, fe = 0, _ = le;
          if (c(_e) === E) {
            var D = Math.min(Math.abs(_e) / Math.abs(ie), 1), I = function(V) {
              return 1 - Math.pow(1 - V, 1 / 3);
            }(D) * ce;
            he[0].earlyExit = I, _ = le * (1 - D);
          } else he[0].earlyExit = 0, fe += _e;
          var W = ee(_, 100), U = W.dist * E;
          C.options.rubberband && (he.push({ distance: U, duration: z(W.dur), easing: K }), he.push({ distance: -U + fe, duration: 500, easing: K }));
        }
        C.animator.start(he);
      } else C.moveToIdx(H(we.abs), !0, { duration: 500, easing: function(V) {
        return 1 + --V * V * V * V * V;
      } });
    }
    function ee(oe, ne) {
      ne === void 0 && (ne = 1e3);
      var le = 147e-9 + (oe = Math.abs(oe)) / ne;
      return { dist: Math.pow(oe, 2) / le, dur: oe / le };
    }
    function k() {
      var oe = C.track.details;
      oe && (O = oe.min, T = oe.max, M = oe.minIdx, B = oe.maxIdx);
    }
    function ae() {
      C.animator.stop();
    }
    C.on("updated", k), C.on("optionsChanged", k), C.on("created", k), C.on("dragStarted", function() {
      b = !1, ae(), F = P = C.track.details.abs;
    }), C.on("dragChecked", function() {
      b = !0;
    }), C.on("dragEnded", function() {
      var oe = C.options.mode;
      oe === "snap" && function() {
        var ne = C.track, le = C.track.details, we = le.position, he = c(S());
        (we > T || we < O) && (he = 0);
        var be = F + he;
        le.slides[ne.absToRel(be)].portion === 0 && (be -= he), F !== P && (be = P), c(ne.idxToDist(be, !0)) !== he && (be += he), be = H(be);
        var ie = ne.idxToDist(be, !0);
        C.animator.start([{ distance: ie, duration: 500, easing: function(ce) {
          return 1 + --ce * ce * ce * ce * ce;
        } }]);
      }(), oe !== "free" && oe !== "free-snap" || J();
    }), C.on("dragged", function() {
      P = C.track.details.abs;
    });
  }
  function N(C) {
    var F, P, b, E, O, T, M, B, z, H, K, S, J, ee, k, ae, oe, ne, le = l();
    function we(fe) {
      if (T && B === fe.id) {
        var _ = ce(fe);
        if (z) {
          if (!ie(fe)) return be(fe);
          H = _, z = !1, C.emit("dragChecked");
        }
        if (ae) return H = _;
        o(fe);
        var D = function(W) {
          if (oe === -1 / 0 && ne === 1 / 0) return W;
          var U = C.track.details, V = U.length, X = U.position, re = u(W, oe - X, ne - X);
          if (V === 0) return 0;
          if (!C.options.rubberband) return re;
          if (X <= ne && X >= oe || X < oe && P > 0 || X > ne && P < 0) return W;
          var $ = (X < oe ? X - oe : X - ne) / V, q = E * V, ue = Math.abs($ * q), me = Math.max(0, 1 - ue / O * 2);
          return me * me * W;
        }(M(H - _) / E * b);
        P = c(D);
        var I = C.track.details.position;
        (I > oe && I < ne || I === oe && P > 0 || I === ne && P < 0) && s(fe), K += D, !S && Math.abs(K * E) > 5 && (S = !0), C.track.add(D), H = _, C.emit("dragged");
      }
    }
    function he(fe) {
      !T && C.track.details && C.track.details.length && (K = 0, T = !0, S = !1, z = !0, B = fe.id, ie(fe), H = ce(fe), C.emit("dragStarted"));
    }
    function be(fe) {
      T && B === fe.idChanged && (T = !1, C.emit("dragEnded"));
    }
    function ie(fe) {
      var _ = Ce(), D = _ ? fe.y : fe.x, I = _ ? fe.x : fe.y, W = J !== void 0 && ee !== void 0 && Math.abs(ee - I) <= Math.abs(J - D);
      return J = D, ee = I, W;
    }
    function ce(fe) {
      return Ce() ? fe.y : fe.x;
    }
    function Ce() {
      return C.options.vertical;
    }
    function Me() {
      E = C.size, O = Ce() ? window.innerHeight : window.innerWidth;
      var fe = C.track.details;
      fe && (oe = fe.min, ne = fe.max);
    }
    function Le(fe) {
      S && (s(fe), o(fe));
    }
    function _e() {
      if (le.purge(), C.options.drag && !C.options.disabled) {
        var fe;
        fe = C.options.dragSpeed || 1, M = typeof fe == "function" ? fe : function(D) {
          return D * fe;
        }, b = C.options.rtl ? -1 : 1, Me(), F = C.container, function() {
          var D = "data-keen-slider-clickable";
          a("[".concat(D, "]:not([").concat(D, "=false])"), F).map(function(I) {
            le.add(I, "dragstart", s), le.add(I, "mousedown", s), le.add(I, "touchstart", s);
          });
        }(), le.add(F, "dragstart", function(D) {
          o(D);
        }), le.add(F, "click", Le, { capture: !0 }), le.input(F, "ksDragStart", he), le.input(F, "ksDrag", we), le.input(F, "ksDragEnd", be), le.input(F, "mousedown", he), le.input(F, "mousemove", we), le.input(F, "mouseleave", be), le.input(F, "mouseup", be), le.input(F, "touchstart", he, { passive: !0 }), le.input(F, "touchmove", we, { passive: !1 }), le.input(F, "touchend", be), le.input(F, "touchcancel", be), le.add(window, "wheel", function(D) {
          T && o(D);
        });
        var _ = "data-keen-slider-scrollable";
        a("[".concat(_, "]:not([").concat(_, "=false])"), C.container).map(function(D) {
          return function(I) {
            var W;
            le.input(I, "touchstart", function(U) {
              W = ce(U), ae = !0, k = !0;
            }, { passive: !0 }), le.input(I, "touchmove", function(U) {
              var V = Ce(), X = V ? I.scrollHeight - I.clientHeight : I.scrollWidth - I.clientWidth, re = W - ce(U), $ = V ? I.scrollTop : I.scrollLeft, q = V && I.style.overflowY === "scroll" || !V && I.style.overflowX === "scroll";
              if (W = ce(U), (re < 0 && $ > 0 || re > 0 && $ < X) && k && q) return ae = !0;
              k = !1, o(U), ae = !1;
            }), le.input(I, "touchend", function() {
              ae = !1;
            });
          }(D);
        });
      }
    }
    C.on("updated", Me), C.on("optionsChanged", _e), C.on("created", _e), C.on("destroyed", le.purge);
  }
  function R(C) {
    var F, P, b = null;
    function E(J, ee, k) {
      C.animator.active ? T(J, ee, k) : requestAnimationFrame(function() {
        return T(J, ee, k);
      });
    }
    function O() {
      E(!1, !1, P);
    }
    function T(J, ee, k) {
      var ae = 0, oe = C.size, ne = C.track.details;
      if (ne && F) {
        var le = ne.slides;
        F.forEach(function(we, he) {
          if (J) !b && ee && B(we, null, k), z(we, null, k);
          else {
            if (!le[he]) return;
            var be = le[he].size * oe;
            !b && ee && B(we, be, k), z(we, le[he].distance * oe - ae, k), ae += be;
          }
        });
      }
    }
    function M(J) {
      return C.options.renderMode === "performance" ? Math.round(J) : J;
    }
    function B(J, ee, k) {
      var ae = k ? "height" : "width";
      ee !== null && (ee = M(ee) + "px"), J.style["min-" + ae] = ee, J.style["max-" + ae] = ee;
    }
    function z(J, ee, k) {
      if (ee !== null) {
        ee = M(ee);
        var ae = k ? ee : 0;
        ee = "translate3d(".concat(k ? 0 : ee, "px, ").concat(ae, "px, 0)");
      }
      J.style.transform = ee, J.style["-webkit-transform"] = ee;
    }
    function H() {
      F && (T(!0, !0, P), F = null), C.on("detailsChanged", O, !0);
    }
    function K() {
      E(!1, !0, P);
    }
    function S() {
      H(), P = C.options.vertical, C.options.disabled || C.options.renderMode === "custom" || (b = h(C.options.slides, "perView", null) === "auto", C.on("detailsChanged", O), (F = C.slides).length && K());
    }
    C.on("created", S), C.on("optionsChanged", S), C.on("beforeOptionsChanged", function() {
      H();
    }), C.on("updated", K), C.on("destroyed", H);
  }
  function A(C, F) {
    return function(P) {
      var b, E, O, T, M, B = l();
      function z(ie) {
        var ce;
        i(P.container, "reverse", (ce = P.container, window.getComputedStyle(ce, null).getPropertyValue("direction") !== "rtl" || ie ? null : "")), i(P.container, "v", P.options.vertical && !ie ? "" : null), i(P.container, "disabled", P.options.disabled && !ie ? "" : null);
      }
      function H() {
        K() && ae();
      }
      function K() {
        var ie = null;
        if (T.forEach(function(Ce) {
          Ce.matches && (ie = Ce.__media);
        }), ie === b) return !1;
        b || P.emit("beforeOptionsChanged"), b = ie;
        var ce = ie ? O.breakpoints[ie] : O;
        return P.options = m(m({}, O), ce), z(), he(), be(), ne(), !0;
      }
      function S(ie) {
        var ce = f(ie);
        return (P.options.vertical ? ce.height : ce.width) / P.size || 1;
      }
      function J() {
        return P.options.trackConfig.length;
      }
      function ee(ie) {
        for (var ce in b = !1, O = m(m({}, F), ie), B.purge(), E = P.size, T = [], O.breakpoints || []) {
          var Ce = window.matchMedia(ce);
          Ce.__media = ce, T.push(Ce), B.add(Ce, "change", H);
        }
        B.add(window, "orientationchange", we), B.add(window, "resize", le), K();
      }
      function k(ie) {
        P.animator.stop();
        var ce = P.track.details;
        P.track.init(ie ?? (ce ? ce.abs : 0));
      }
      function ae(ie) {
        k(ie), P.emit("optionsChanged");
      }
      function oe(ie, ce) {
        if (ie) return ee(ie), void ae(ce);
        he(), be();
        var Ce = J();
        ne(), J() !== Ce ? ae(ce) : k(ce), P.emit("updated");
      }
      function ne() {
        var ie = P.options.slides;
        if (typeof ie == "function") return P.options.trackConfig = ie(P.size, P.slides);
        for (var ce = P.slides, Ce = ce.length, Me = typeof ie == "number" ? ie : h(ie, "number", Ce, !0), Le = [], _e = h(ie, "perView", 1, !0), fe = h(ie, "spacing", 0, !0) / P.size || 0, _ = _e === "auto" ? fe : fe / _e, D = h(ie, "origin", "auto"), I = 0, W = 0; W < Me; W++) {
          var U = _e === "auto" ? S(ce[W]) : 1 / _e - fe + _, V = D === "center" ? 0.5 - U / 2 : D === "auto" ? 0 : D;
          Le.push({ origin: V, size: U, spacing: fe }), I += U;
        }
        if (I += fe * (Me - 1), D === "auto" && !P.options.loop && _e !== 1) {
          var X = 0;
          Le.map(function(re) {
            var $ = I - X;
            return X += re.size + fe, $ >= 1 || (re.origin = 1 - $ - (I > 1 ? 0 : 1 - I)), re;
          });
        }
        P.options.trackConfig = Le;
      }
      function le() {
        he();
        var ie = P.size;
        P.options.disabled || ie === E || (E = ie, oe());
      }
      function we() {
        le(), setTimeout(le, 500), setTimeout(le, 2e3);
      }
      function he() {
        var ie = f(P.container);
        P.size = (P.options.vertical ? ie.height : ie.width) || 1;
      }
      function be() {
        P.slides = a(P.options.selector, P.container);
      }
      P.container = (M = a(C, document)).length ? M[0] : null, P.destroy = function() {
        B.purge(), P.emit("destroyed"), z(!0);
      }, P.prev = function() {
        P.moveToIdx(P.track.details.abs - 1, !0);
      }, P.next = function() {
        P.moveToIdx(P.track.details.abs + 1, !0);
      }, P.update = oe, ee(P.options);
    };
  }
  var L = function(C, F, P) {
    try {
      return function(b, E) {
        var O, T = {};
        return O = { emit: function(M) {
          T[M] && T[M].forEach(function(z) {
            z(O);
          });
          var B = O.options && O.options[M];
          B && B(O);
        }, moveToIdx: function(M, B, z) {
          var H = O.track.idxToDist(M, B);
          if (H) {
            var K = O.options.defaultAnimation;
            O.animator.start([{ distance: H, duration: h(z || K, "duration", 500), easing: h(z || K, "easing", function(S) {
              return 1 + --S * S * S * S * S;
            }) }]);
          }
        }, on: function(M, B, z) {
          z === void 0 && (z = !1), T[M] || (T[M] = []);
          var H = T[M].indexOf(B);
          H > -1 ? z && delete T[M][H] : z || T[M].push(B);
        }, options: b }, function() {
          if (O.track = w(O), O.animator = g(O), E) for (var M = 0, B = E; M < B.length; M++) (0, B[M])(O);
          O.track.init(O.options.initial || 0), O.emit("created");
        }(), O;
      }(F, y([A(C, { drag: !0, mode: "snap", renderMode: "precision", rubberband: !0, selector: ".keen-slider__slide" }), R, N, x], P || [], !0));
    } catch (b) {
      console.error(b);
    }
  };
  return Kr.useKeenSlider = function(C, F) {
    var P = e.useRef(null), b = e.useRef(!1), E = e.useRef(C), O = e.useCallback(function(T) {
      T ? (E.current = C, P.current = new L(T, C, F), b.current = !1) : (P.current && P.current.destroy && P.current.destroy(), P.current = null);
    }, []);
    return e.useEffect(function() {
      p(E.current, C) || (E.current = C, P.current && P.current.update(E.current));
    }, [C]), [O, P];
  }, Kr;
}
var Ty = _y();
const Ay = (e) => {
  let t, n, r = !1;
  function i(o, s) {
    n.x -= o.deltaX, n.y -= o.deltaY, e.container.dispatchEvent(
      new CustomEvent(s, {
        detail: {
          x: n.x,
          y: n.y
        }
      })
    );
  }
  function a(o) {
    Math.abs(o.deltaX) > Math.abs(o.deltaY) && (o.preventDefault(), r || (n = {
      x: o.pageX,
      y: o.pageY
    }, i(o, "ksDragStart"), r = !0), i(o, "ksDrag"), clearTimeout(t), t = setTimeout(() => {
      r = !1, i(o, "ksDragEnd");
    }, 50));
  }
  e.on("created", () => {
    e.container.addEventListener("wheel", a, {
      passive: !1
    });
  });
}, Py = ({ config: e }) => {
  var s, l, u, c, f;
  const [t, n] = Be(0), [r, i] = Ty.useKeenSlider(
    {
      ...e,
      rubberband: !1,
      detailsChanged: (h) => {
        n(h.track.details.rel);
      }
    },
    [Ay]
  ), o = (((l = (s = i == null ? void 0 : i.current) == null ? void 0 : s.slides) == null ? void 0 : l.length) ?? 10) - (((f = (c = (u = i == null ? void 0 : i.current) == null ? void 0 : u.track) == null ? void 0 : c.details) == null ? void 0 : f.maxIdx) ?? 2);
  return {
    sliderRef: r,
    instanceRef: i,
    currentSlide: t,
    itemsPerView: o
  };
};
var zr = (e) => e.type === "checkbox", wn = (e) => e instanceof Date, tt = (e) => e == null;
const Af = (e) => typeof e == "object";
var ze = (e) => !tt(e) && !Array.isArray(e) && Af(e) && !wn(e), Pf = (e) => ze(e) && e.target ? zr(e.target) ? e.target.checked : e.target.value : e, Fy = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Ff = (e, t) => e.has(Fy(t)), Dy = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return ze(t) && t.hasOwnProperty("isPrototypeOf");
}, ns = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function ot(e) {
  let t;
  const n = Array.isArray(e), r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ns && (e instanceof Blob || r)) && (n || ze(e)))
    if (t = n ? [] : {}, !n && !Dy(e))
      t = e;
    else
      for (const i in e)
        e.hasOwnProperty(i) && (t[i] = ot(e[i]));
  else
    return e;
  return t;
}
var pa = (e) => Array.isArray(e) ? e.filter(Boolean) : [], $e = (e) => e === void 0, te = (e, t, n) => {
  if (!t || !ze(e))
    return n;
  const r = pa(t.split(/[,[\].]+?/)).reduce((i, a) => tt(i) ? i : i[a], e);
  return $e(r) || r === e ? $e(e[t]) ? n : e[t] : r;
}, wt = (e) => typeof e == "boolean", rs = (e) => /^\w*$/.test(e), Df = (e) => pa(e.replace(/["|']|\]/g, "").split(/\.|\[/)), ke = (e, t, n) => {
  let r = -1;
  const i = rs(t) ? [t] : Df(t), a = i.length, o = a - 1;
  for (; ++r < a; ) {
    const s = i[r];
    let l = n;
    if (r !== o) {
      const u = e[s];
      l = ze(u) || Array.isArray(u) ? u : isNaN(+i[r + 1]) ? {} : [];
    }
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return;
    e[s] = l, e = e[s];
  }
  return e;
};
const ji = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Et = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Vt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ry = pe.createContext(null), is = () => pe.useContext(Ry);
var Rf = (e, t, n, r = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(i, a, {
      get: () => {
        const o = a;
        return t._proxyFormState[o] !== Et.all && (t._proxyFormState[o] = !r || Et.all), n && (n[o] = !0), e[o];
      }
    });
  return i;
}, st = (e) => ze(e) && !Object.keys(e).length, If = (e, t, n, r) => {
  n(e);
  const { name: i, ...a } = e;
  return st(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((o) => t[o] === (!r || Et.all));
}, wr = (e) => Array.isArray(e) ? e : [e], Nf = (e, t, n) => !e || !t || e === t || wr(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function as(e) {
  const t = pe.useRef(e);
  t.current = e, pe.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function Iy(e) {
  const t = is(), { control: n = t.control, disabled: r, name: i, exact: a } = e || {}, [o, s] = pe.useState(n._formState), l = pe.useRef(!0), u = pe.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), c = pe.useRef(i);
  return c.current = i, as({
    disabled: r,
    next: (f) => l.current && Nf(c.current, f.name, a) && If(f, u.current, n._updateFormState) && s({
      ...n._formState,
      ...f
    }),
    subject: n._subjects.state
  }), pe.useEffect(() => (l.current = !0, u.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), pe.useMemo(() => Rf(o, n, u.current, !1), [o, n]);
}
var Nt = (e) => typeof e == "string", Mf = (e, t, n, r, i) => Nt(e) ? (r && t.watch.add(e), te(n, e, i)) : Array.isArray(e) ? e.map((a) => (r && t.watch.add(a), te(n, a))) : (r && (t.watchAll = !0), n);
function Lf(e) {
  const t = is(), { control: n = t.control, name: r, defaultValue: i, disabled: a, exact: o } = e || {}, s = pe.useRef(r);
  s.current = r, as({
    disabled: a,
    subject: n._subjects.values,
    next: (c) => {
      Nf(s.current, c.name, o) && u(ot(Mf(s.current, n._names, c.values || n._formValues, !1, i)));
    }
  });
  const [l, u] = pe.useState(n._getWatch(r, i));
  return pe.useEffect(() => n._removeUnmounted()), l;
}
function Ny(e) {
  const t = is(), { name: n, disabled: r, control: i = t.control, shouldUnregister: a } = e, o = Ff(i._names.array, n), s = Lf({
    control: i,
    name: n,
    defaultValue: te(i._formValues, n, te(i._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = Iy({
    control: i,
    name: n,
    exact: !0
  }), u = pe.useRef(i.register(n, {
    ...e.rules,
    value: s,
    ...wt(e.disabled) ? { disabled: e.disabled } : {}
  })), c = pe.useMemo(() => Object.defineProperties({}, {
    invalid: {
      enumerable: !0,
      get: () => !!te(l.errors, n)
    },
    isDirty: {
      enumerable: !0,
      get: () => !!te(l.dirtyFields, n)
    },
    isTouched: {
      enumerable: !0,
      get: () => !!te(l.touchedFields, n)
    },
    isValidating: {
      enumerable: !0,
      get: () => !!te(l.validatingFields, n)
    },
    error: {
      enumerable: !0,
      get: () => te(l.errors, n)
    }
  }), [l, n]), f = pe.useMemo(() => ({
    name: n,
    value: s,
    ...wt(r) || l.disabled ? { disabled: l.disabled || r } : {},
    onChange: (h) => u.current.onChange({
      target: {
        value: Pf(h),
        name: n
      },
      type: ji.CHANGE
    }),
    onBlur: () => u.current.onBlur({
      target: {
        value: te(i._formValues, n),
        name: n
      },
      type: ji.BLUR
    }),
    ref: (h) => {
      const d = te(i._fields, n);
      d && h && (d._f.ref = {
        focus: () => h.focus(),
        select: () => h.select(),
        setCustomValidity: (p) => h.setCustomValidity(p),
        reportValidity: () => h.reportValidity()
      });
    }
  }), [
    n,
    i._formValues,
    r,
    l.disabled,
    s,
    i._fields
  ]);
  return pe.useEffect(() => {
    const h = i._options.shouldUnregister || a, d = (p, m) => {
      const y = te(i._fields, p);
      y && y._f && (y._f.mount = m);
    };
    if (d(n, !0), h) {
      const p = ot(te(i._options.defaultValues, n));
      ke(i._defaultValues, n, p), $e(te(i._formValues, n)) && ke(i._formValues, n, p);
    }
    return !o && i.register(n), () => {
      (o ? h && !i._state.action : h) ? i.unregister(n) : d(n, !1);
    };
  }, [n, i, o, a]), pe.useEffect(() => {
    i._updateDisabledField({
      disabled: r,
      fields: i._fields,
      name: n
    });
  }, [r, n, i]), pe.useMemo(() => ({
    field: f,
    formState: l,
    fieldState: c
  }), [f, l, c]);
}
const My = (e) => e.render(Ny(e));
var $f = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: i || !0
  }
} : {}, Ol = (e) => ({
  isOnSubmit: !e || e === Et.onSubmit,
  isOnBlur: e === Et.onBlur,
  isOnChange: e === Et.onChange,
  isOnAll: e === Et.all,
  isOnTouch: e === Et.onTouched
}), _l = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const xr = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const a = te(e, i);
    if (a) {
      const { _f: o, ...s } = a;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], i) && !r)
          return !0;
        if (o.ref && t(o.ref, o.name) && !r)
          return !0;
        if (xr(s, t))
          break;
      } else if (ze(s) && xr(s, t))
        break;
    }
  }
};
var Ly = (e, t, n) => {
  const r = wr(te(e, n));
  return ke(r, "root", t[n]), ke(e, n, r), e;
}, os = (e) => e.type === "file", Rt = (e) => typeof e == "function", zi = (e) => {
  if (!ns)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, bi = (e) => Nt(e), ss = (e) => e.type === "radio", Ui = (e) => e instanceof RegExp;
const Tl = {
  value: !1,
  isValid: !1
}, Al = { value: !0, isValid: !0 };
var Bf = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !$e(e[0].attributes.value) ? $e(e[0].value) || e[0].value === "" ? Al : { value: e[0].value, isValid: !0 } : Al
    ) : Tl;
  }
  return Tl;
};
const Pl = {
  isValid: !1,
  value: null
};
var jf = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Pl) : Pl;
function Fl(e, t, n = "validate") {
  if (bi(e) || Array.isArray(e) && e.every(bi) || wt(e) && !e)
    return {
      type: n,
      message: bi(e) ? e : "",
      ref: t
    };
}
var Fn = (e) => ze(e) && !Ui(e) ? e : {
  value: e,
  message: ""
}, Dl = async (e, t, n, r, i, a) => {
  const { ref: o, refs: s, required: l, maxLength: u, minLength: c, min: f, max: h, pattern: d, validate: p, name: m, valueAsNumber: y, mount: g } = e._f, w = te(n, m);
  if (!g || t.has(m))
    return {};
  const x = s ? s[0] : o, N = (E) => {
    i && x.reportValidity && (x.setCustomValidity(wt(E) ? "" : E || ""), x.reportValidity());
  }, R = {}, A = ss(o), L = zr(o), C = A || L, F = (y || os(o)) && $e(o.value) && $e(w) || zi(o) && o.value === "" || w === "" || Array.isArray(w) && !w.length, P = $f.bind(null, m, r, R), b = (E, O, T, M = Vt.maxLength, B = Vt.minLength) => {
    const z = E ? O : T;
    R[m] = {
      type: E ? M : B,
      message: z,
      ref: o,
      ...P(E ? M : B, z)
    };
  };
  if (a ? !Array.isArray(w) || !w.length : l && (!C && (F || tt(w)) || wt(w) && !w || L && !Bf(s).isValid || A && !jf(s).isValid)) {
    const { value: E, message: O } = bi(l) ? { value: !!l, message: l } : Fn(l);
    if (E && (R[m] = {
      type: Vt.required,
      message: O,
      ref: x,
      ...P(Vt.required, O)
    }, !r))
      return N(O), R;
  }
  if (!F && (!tt(f) || !tt(h))) {
    let E, O;
    const T = Fn(h), M = Fn(f);
    if (!tt(w) && !isNaN(w)) {
      const B = o.valueAsNumber || w && +w;
      tt(T.value) || (E = B > T.value), tt(M.value) || (O = B < M.value);
    } else {
      const B = o.valueAsDate || new Date(w), z = (S) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + S), H = o.type == "time", K = o.type == "week";
      Nt(T.value) && w && (E = H ? z(w) > z(T.value) : K ? w > T.value : B > new Date(T.value)), Nt(M.value) && w && (O = H ? z(w) < z(M.value) : K ? w < M.value : B < new Date(M.value));
    }
    if ((E || O) && (b(!!E, T.message, M.message, Vt.max, Vt.min), !r))
      return N(R[m].message), R;
  }
  if ((u || c) && !F && (Nt(w) || a && Array.isArray(w))) {
    const E = Fn(u), O = Fn(c), T = !tt(E.value) && w.length > +E.value, M = !tt(O.value) && w.length < +O.value;
    if ((T || M) && (b(T, E.message, O.message), !r))
      return N(R[m].message), R;
  }
  if (d && !F && Nt(w)) {
    const { value: E, message: O } = Fn(d);
    if (Ui(E) && !w.match(E) && (R[m] = {
      type: Vt.pattern,
      message: O,
      ref: o,
      ...P(Vt.pattern, O)
    }, !r))
      return N(O), R;
  }
  if (p) {
    if (Rt(p)) {
      const E = await p(w, n), O = Fl(E, x);
      if (O && (R[m] = {
        ...O,
        ...P(Vt.validate, O.message)
      }, !r))
        return N(O.message), R;
    } else if (ze(p)) {
      let E = {};
      for (const O in p) {
        if (!st(E) && !r)
          break;
        const T = Fl(await p[O](w, n), x, O);
        T && (E = {
          ...T,
          ...P(O, T.message)
        }, N(T.message), r && (R[m] = E));
      }
      if (!st(E) && (R[m] = {
        ref: x,
        ...E
      }, !r))
        return R;
    }
  }
  return N(!0), R;
};
function $y(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = $e(e) ? r++ : e[t[r++]];
  return e;
}
function By(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !$e(e[t]))
      return !1;
  return !0;
}
function We(e, t) {
  const n = Array.isArray(t) ? t : rs(t) ? [t] : Df(t), r = n.length === 1 ? e : $y(e, n), i = n.length - 1, a = n[i];
  return r && delete r[a], i !== 0 && (ze(r) && st(r) || Array.isArray(r) && By(r)) && We(e, n.slice(0, -1)), e;
}
var Ia = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const a of e)
        a.next && a.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((a) => a !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Oo = (e) => tt(e) || !Af(e);
function tn(e, t) {
  if (Oo(e) || Oo(t))
    return e === t;
  if (wn(e) && wn(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const i of n) {
    const a = e[i];
    if (!r.includes(i))
      return !1;
    if (i !== "ref") {
      const o = t[i];
      if (wn(a) && wn(o) || ze(a) && ze(o) || Array.isArray(a) && Array.isArray(o) ? !tn(a, o) : a !== o)
        return !1;
    }
  }
  return !0;
}
var zf = (e) => e.type === "select-multiple", jy = (e) => ss(e) || zr(e), Na = (e) => zi(e) && e.isConnected, Uf = (e) => {
  for (const t in e)
    if (Rt(e[t]))
      return !0;
  return !1;
};
function Vi(e, t = {}) {
  const n = Array.isArray(e);
  if (ze(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || ze(e[r]) && !Uf(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, Vi(e[r], t[r])) : tt(e[r]) || (t[r] = !0);
  return t;
}
function Vf(e, t, n) {
  const r = Array.isArray(e);
  if (ze(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || ze(e[i]) && !Uf(e[i]) ? $e(t) || Oo(n[i]) ? n[i] = Array.isArray(e[i]) ? Vi(e[i], []) : { ...Vi(e[i]) } : Vf(e[i], tt(t) ? {} : t[i], n[i]) : n[i] = !tn(e[i], t[i]);
  return n;
}
var lr = (e, t) => Vf(e, t, Vi(t)), Wf = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => $e(e) ? e : t ? e === "" ? NaN : e && +e : n && Nt(e) ? new Date(e) : r ? r(e) : e;
function Ma(e) {
  const t = e.ref;
  return os(t) ? t.files : ss(t) ? jf(e.refs).value : zf(t) ? [...t.selectedOptions].map(({ value: n }) => n) : zr(t) ? Bf(e.refs).value : Wf($e(t.value) ? e.ref.value : t.value, e);
}
var zy = (e, t, n, r) => {
  const i = {};
  for (const a of e) {
    const o = te(t, a);
    o && ke(i, a, o._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: r
  };
}, ur = (e) => $e(e) ? e : Ui(e) ? e.source : ze(e) ? Ui(e.value) ? e.value.source : e.value : e;
const Rl = "AsyncFunction";
var Uy = (e) => !!e && !!e.validate && !!(Rt(e.validate) && e.validate.constructor.name === Rl || ze(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Rl)), Vy = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Il(e, t, n) {
  const r = te(e, n);
  if (r || rs(n))
    return {
      error: r,
      name: n
    };
  const i = n.split(".");
  for (; i.length; ) {
    const a = i.join("."), o = te(t, a), s = te(e, a);
    if (o && !Array.isArray(o) && n !== a)
      return { name: n };
    if (s && s.type)
      return {
        name: a,
        error: s
      };
    i.pop();
  }
  return {
    name: n
  };
}
var Wy = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, qy = (e, t) => !pa(te(e, t)).length && We(e, t);
const Hy = {
  mode: Et.onSubmit,
  reValidateMode: Et.onChange,
  shouldFocusError: !0
};
function Gy(e = {}) {
  let t = {
    ...Hy,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Rt(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, i = ze(t.defaultValues) || ze(t.values) ? ot(t.defaultValues || t.values) || {} : {}, a = t.shouldUnregister ? {} : ot(i), o = {
    action: !1,
    mount: !1,
    watch: !1
  }, s = {
    mount: /* @__PURE__ */ new Set(),
    disabled: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, u = 0;
  const c = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: Ia(),
    array: Ia(),
    state: Ia()
  }, h = Ol(t.mode), d = Ol(t.reValidateMode), p = t.criteriaMode === Et.all, m = (_) => (D) => {
    clearTimeout(u), u = setTimeout(_, D);
  }, y = async (_) => {
    if (!t.disabled && (c.isValid || _)) {
      const D = t.resolver ? st((await C()).errors) : await P(r, !0);
      D !== n.isValid && f.state.next({
        isValid: D
      });
    }
  }, g = (_, D) => {
    !t.disabled && (c.isValidating || c.validatingFields) && ((_ || Array.from(s.mount)).forEach((I) => {
      I && (D ? ke(n.validatingFields, I, D) : We(n.validatingFields, I));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !st(n.validatingFields)
    }));
  }, w = (_, D = [], I, W, U = !0, V = !0) => {
    if (W && I && !t.disabled) {
      if (o.action = !0, V && Array.isArray(te(r, _))) {
        const X = I(te(r, _), W.argA, W.argB);
        U && ke(r, _, X);
      }
      if (V && Array.isArray(te(n.errors, _))) {
        const X = I(te(n.errors, _), W.argA, W.argB);
        U && ke(n.errors, _, X), qy(n.errors, _);
      }
      if (c.touchedFields && V && Array.isArray(te(n.touchedFields, _))) {
        const X = I(te(n.touchedFields, _), W.argA, W.argB);
        U && ke(n.touchedFields, _, X);
      }
      c.dirtyFields && (n.dirtyFields = lr(i, a)), f.state.next({
        name: _,
        isDirty: E(_, D),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      ke(a, _, D);
  }, x = (_, D) => {
    ke(n.errors, _, D), f.state.next({
      errors: n.errors
    });
  }, N = (_) => {
    n.errors = _, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, R = (_, D, I, W) => {
    const U = te(r, _);
    if (U) {
      const V = te(a, _, $e(I) ? te(i, _) : I);
      $e(V) || W && W.defaultChecked || D ? ke(a, _, D ? V : Ma(U._f)) : M(_, V), o.mount && y();
    }
  }, A = (_, D, I, W, U) => {
    let V = !1, X = !1;
    const re = {
      name: _
    };
    if (!t.disabled) {
      const $ = !!(te(r, _) && te(r, _)._f && te(r, _)._f.disabled);
      if (!I || W) {
        c.isDirty && (X = n.isDirty, n.isDirty = re.isDirty = E(), V = X !== re.isDirty);
        const q = $ || tn(te(i, _), D);
        X = !!(!$ && te(n.dirtyFields, _)), q || $ ? We(n.dirtyFields, _) : ke(n.dirtyFields, _, !0), re.dirtyFields = n.dirtyFields, V = V || c.dirtyFields && X !== !q;
      }
      if (I) {
        const q = te(n.touchedFields, _);
        q || (ke(n.touchedFields, _, I), re.touchedFields = n.touchedFields, V = V || c.touchedFields && q !== I);
      }
      V && U && f.state.next(re);
    }
    return V ? re : {};
  }, L = (_, D, I, W) => {
    const U = te(n.errors, _), V = c.isValid && wt(D) && n.isValid !== D;
    if (t.delayError && I ? (l = m(() => x(_, I)), l(t.delayError)) : (clearTimeout(u), l = null, I ? ke(n.errors, _, I) : We(n.errors, _)), (I ? !tn(U, I) : U) || !st(W) || V) {
      const X = {
        ...W,
        ...V && wt(D) ? { isValid: D } : {},
        errors: n.errors,
        name: _
      };
      n = {
        ...n,
        ...X
      }, f.state.next(X);
    }
  }, C = async (_) => {
    g(_, !0);
    const D = await t.resolver(a, t.context, zy(_ || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return g(_), D;
  }, F = async (_) => {
    const { errors: D } = await C(_);
    if (_)
      for (const I of _) {
        const W = te(D, I);
        W ? ke(n.errors, I, W) : We(n.errors, I);
      }
    else
      n.errors = D;
    return D;
  }, P = async (_, D, I = {
    valid: !0
  }) => {
    for (const W in _) {
      const U = _[W];
      if (U) {
        const { _f: V, ...X } = U;
        if (V) {
          const re = s.array.has(V.name), $ = U._f && Uy(U._f);
          $ && c.validatingFields && g([W], !0);
          const q = await Dl(U, s.disabled, a, p, t.shouldUseNativeValidation && !D, re);
          if ($ && c.validatingFields && g([W]), q[V.name] && (I.valid = !1, D))
            break;
          !D && (te(q, V.name) ? re ? Ly(n.errors, q, V.name) : ke(n.errors, V.name, q[V.name]) : We(n.errors, V.name));
        }
        !st(X) && await P(X, D, I);
      }
    }
    return I.valid;
  }, b = () => {
    for (const _ of s.unMount) {
      const D = te(r, _);
      D && (D._f.refs ? D._f.refs.every((I) => !Na(I)) : !Na(D._f.ref)) && ne(_);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, E = (_, D) => !t.disabled && (_ && D && ke(a, _, D), !tn(J(), i)), O = (_, D, I) => Mf(_, s, {
    ...o.mount ? a : $e(D) ? i : Nt(_) ? { [_]: D } : D
  }, I, D), T = (_) => pa(te(o.mount ? a : i, _, t.shouldUnregister ? te(i, _, []) : [])), M = (_, D, I = {}) => {
    const W = te(r, _);
    let U = D;
    if (W) {
      const V = W._f;
      V && (!V.disabled && ke(a, _, Wf(D, V)), U = zi(V.ref) && tt(D) ? "" : D, zf(V.ref) ? [...V.ref.options].forEach((X) => X.selected = U.includes(X.value)) : V.refs ? zr(V.ref) ? V.refs.length > 1 ? V.refs.forEach((X) => (!X.defaultChecked || !X.disabled) && (X.checked = Array.isArray(U) ? !!U.find((re) => re === X.value) : U === X.value)) : V.refs[0] && (V.refs[0].checked = !!U) : V.refs.forEach((X) => X.checked = X.value === U) : os(V.ref) ? V.ref.value = "" : (V.ref.value = U, V.ref.type || f.values.next({
        name: _,
        values: { ...a }
      })));
    }
    (I.shouldDirty || I.shouldTouch) && A(_, U, I.shouldTouch, I.shouldDirty, !0), I.shouldValidate && S(_);
  }, B = (_, D, I) => {
    for (const W in D) {
      const U = D[W], V = `${_}.${W}`, X = te(r, V);
      (s.array.has(_) || ze(U) || X && !X._f) && !wn(U) ? B(V, U, I) : M(V, U, I);
    }
  }, z = (_, D, I = {}) => {
    const W = te(r, _), U = s.array.has(_), V = ot(D);
    ke(a, _, V), U ? (f.array.next({
      name: _,
      values: { ...a }
    }), (c.isDirty || c.dirtyFields) && I.shouldDirty && f.state.next({
      name: _,
      dirtyFields: lr(i, a),
      isDirty: E(_, V)
    })) : W && !W._f && !tt(V) ? B(_, V, I) : M(_, V, I), _l(_, s) && f.state.next({ ...n }), f.values.next({
      name: o.mount ? _ : void 0,
      values: { ...a }
    });
  }, H = async (_) => {
    o.mount = !0;
    const D = _.target;
    let I = D.name, W = !0;
    const U = te(r, I), V = () => D.type ? Ma(U._f) : Pf(_), X = (re) => {
      W = Number.isNaN(re) || wn(re) && isNaN(re.getTime()) || tn(re, te(a, I, re));
    };
    if (U) {
      let re, $;
      const q = V(), ue = _.type === ji.BLUR || _.type === ji.FOCUS_OUT, me = !Vy(U._f) && !t.resolver && !te(n.errors, I) && !U._f.deps || Wy(ue, te(n.touchedFields, I), n.isSubmitted, d, h), ge = _l(I, s, ue);
      ke(a, I, q), ue ? (U._f.onBlur && U._f.onBlur(_), l && l(0)) : U._f.onChange && U._f.onChange(_);
      const He = A(I, q, ue, !1), Te = !st(He) || ge;
      if (!ue && f.values.next({
        name: I,
        type: _.type,
        values: { ...a }
      }), me)
        return c.isValid && (t.mode === "onBlur" && ue ? y() : ue || y()), Te && f.state.next({ name: I, ...ge ? {} : He });
      if (!ue && ge && f.state.next({ ...n }), t.resolver) {
        const { errors: et } = await C([I]);
        if (X(q), W) {
          const At = Il(n.errors, r, I), nt = Il(et, r, At.name || I);
          re = nt.error, I = nt.name, $ = st(et);
        }
      } else
        g([I], !0), re = (await Dl(U, s.disabled, a, p, t.shouldUseNativeValidation))[I], g([I]), X(q), W && (re ? $ = !1 : c.isValid && ($ = await P(r, !0)));
      W && (U._f.deps && S(U._f.deps), L(I, $, re, He));
    }
  }, K = (_, D) => {
    if (te(n.errors, D) && _.focus)
      return _.focus(), 1;
  }, S = async (_, D = {}) => {
    let I, W;
    const U = wr(_);
    if (t.resolver) {
      const V = await F($e(_) ? _ : U);
      I = st(V), W = _ ? !U.some((X) => te(V, X)) : I;
    } else _ ? (W = (await Promise.all(U.map(async (V) => {
      const X = te(r, V);
      return await P(X && X._f ? { [V]: X } : X);
    }))).every(Boolean), !(!W && !n.isValid) && y()) : W = I = await P(r);
    return f.state.next({
      ...!Nt(_) || c.isValid && I !== n.isValid ? {} : { name: _ },
      ...t.resolver || !_ ? { isValid: I } : {},
      errors: n.errors
    }), D.shouldFocus && !W && xr(r, K, _ ? U : s.mount), W;
  }, J = (_) => {
    const D = {
      ...o.mount ? a : i
    };
    return $e(_) ? D : Nt(_) ? te(D, _) : _.map((I) => te(D, I));
  }, ee = (_, D) => ({
    invalid: !!te((D || n).errors, _),
    isDirty: !!te((D || n).dirtyFields, _),
    error: te((D || n).errors, _),
    isValidating: !!te(n.validatingFields, _),
    isTouched: !!te((D || n).touchedFields, _)
  }), k = (_) => {
    _ && wr(_).forEach((D) => We(n.errors, D)), f.state.next({
      errors: _ ? n.errors : {}
    });
  }, ae = (_, D, I) => {
    const W = (te(r, _, { _f: {} })._f || {}).ref, U = te(n.errors, _) || {}, { ref: V, message: X, type: re, ...$ } = U;
    ke(n.errors, _, {
      ...$,
      ...D,
      ref: W
    }), f.state.next({
      name: _,
      errors: n.errors,
      isValid: !1
    }), I && I.shouldFocus && W && W.focus && W.focus();
  }, oe = (_, D) => Rt(_) ? f.values.subscribe({
    next: (I) => _(O(void 0, D), I)
  }) : O(_, D, !0), ne = (_, D = {}) => {
    for (const I of _ ? wr(_) : s.mount)
      s.mount.delete(I), s.array.delete(I), D.keepValue || (We(r, I), We(a, I)), !D.keepError && We(n.errors, I), !D.keepDirty && We(n.dirtyFields, I), !D.keepTouched && We(n.touchedFields, I), !D.keepIsValidating && We(n.validatingFields, I), !t.shouldUnregister && !D.keepDefaultValue && We(i, I);
    f.values.next({
      values: { ...a }
    }), f.state.next({
      ...n,
      ...D.keepDirty ? { isDirty: E() } : {}
    }), !D.keepIsValid && y();
  }, le = ({ disabled: _, name: D, field: I, fields: W }) => {
    (wt(_) && o.mount || _ || s.disabled.has(D)) && (_ ? s.disabled.add(D) : s.disabled.delete(D), A(D, Ma(I ? I._f : te(W, D)._f), !1, !1, !0));
  }, we = (_, D = {}) => {
    let I = te(r, _);
    const W = wt(D.disabled) || wt(t.disabled);
    return ke(r, _, {
      ...I || {},
      _f: {
        ...I && I._f ? I._f : { ref: { name: _ } },
        name: _,
        mount: !0,
        ...D
      }
    }), s.mount.add(_), I ? le({
      field: I,
      disabled: wt(D.disabled) ? D.disabled : t.disabled,
      name: _
    }) : R(_, !0, D.value), {
      ...W ? { disabled: D.disabled || t.disabled } : {},
      ...t.progressive ? {
        required: !!D.required,
        min: ur(D.min),
        max: ur(D.max),
        minLength: ur(D.minLength),
        maxLength: ur(D.maxLength),
        pattern: ur(D.pattern)
      } : {},
      name: _,
      onChange: H,
      onBlur: H,
      ref: (U) => {
        if (U) {
          we(_, D), I = te(r, _);
          const V = $e(U.value) && U.querySelectorAll && U.querySelectorAll("input,select,textarea")[0] || U, X = jy(V), re = I._f.refs || [];
          if (X ? re.find(($) => $ === V) : V === I._f.ref)
            return;
          ke(r, _, {
            _f: {
              ...I._f,
              ...X ? {
                refs: [
                  ...re.filter(Na),
                  V,
                  ...Array.isArray(te(i, _)) ? [{}] : []
                ],
                ref: { type: V.type, name: _ }
              } : { ref: V }
            }
          }), R(_, !1, void 0, V);
        } else
          I = te(r, _, {}), I._f && (I._f.mount = !1), (t.shouldUnregister || D.shouldUnregister) && !(Ff(s.array, _) && o.action) && s.unMount.add(_);
      }
    };
  }, he = () => t.shouldFocusError && xr(r, K, s.mount), be = (_) => {
    wt(_) && (f.state.next({ disabled: _ }), xr(r, (D, I) => {
      const W = te(r, I);
      W && (D.disabled = W._f.disabled || _, Array.isArray(W._f.refs) && W._f.refs.forEach((U) => {
        U.disabled = W._f.disabled || _;
      }));
    }, 0, !1));
  }, ie = (_, D) => async (I) => {
    let W;
    I && (I.preventDefault && I.preventDefault(), I.persist && I.persist());
    let U = ot(a);
    if (s.disabled.size)
      for (const V of s.disabled)
        ke(U, V, void 0);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: V, values: X } = await C();
      n.errors = V, U = X;
    } else
      await P(r);
    if (We(n.errors, "root"), st(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await _(U, I);
      } catch (V) {
        W = V;
      }
    } else
      D && await D({ ...n.errors }, I), he(), setTimeout(he);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: st(n.errors) && !W,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), W)
      throw W;
  }, ce = (_, D = {}) => {
    te(r, _) && ($e(D.defaultValue) ? z(_, ot(te(i, _))) : (z(_, D.defaultValue), ke(i, _, ot(D.defaultValue))), D.keepTouched || We(n.touchedFields, _), D.keepDirty || (We(n.dirtyFields, _), n.isDirty = D.defaultValue ? E(_, ot(te(i, _))) : E()), D.keepError || (We(n.errors, _), c.isValid && y()), f.state.next({ ...n }));
  }, Ce = (_, D = {}) => {
    const I = _ ? ot(_) : i, W = ot(I), U = st(_), V = U ? i : W;
    if (D.keepDefaultValues || (i = I), !D.keepValues) {
      if (D.keepDirtyValues) {
        const X = /* @__PURE__ */ new Set([
          ...s.mount,
          ...Object.keys(lr(i, a))
        ]);
        for (const re of Array.from(X))
          te(n.dirtyFields, re) ? ke(V, re, te(a, re)) : z(re, te(V, re));
      } else {
        if (ns && $e(_))
          for (const X of s.mount) {
            const re = te(r, X);
            if (re && re._f) {
              const $ = Array.isArray(re._f.refs) ? re._f.refs[0] : re._f.ref;
              if (zi($)) {
                const q = $.closest("form");
                if (q) {
                  q.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      a = t.shouldUnregister ? D.keepDefaultValues ? ot(i) : {} : ot(V), f.array.next({
        values: { ...V }
      }), f.values.next({
        values: { ...V }
      });
    }
    s = {
      mount: D.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      disabled: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, o.mount = !c.isValid || !!D.keepIsValid || !!D.keepDirtyValues, o.watch = !!t.shouldUnregister, f.state.next({
      submitCount: D.keepSubmitCount ? n.submitCount : 0,
      isDirty: U ? !1 : D.keepDirty ? n.isDirty : !!(D.keepDefaultValues && !tn(_, i)),
      isSubmitted: D.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: U ? {} : D.keepDirtyValues ? D.keepDefaultValues && a ? lr(i, a) : n.dirtyFields : D.keepDefaultValues && _ ? lr(i, _) : D.keepDirty ? n.dirtyFields : {},
      touchedFields: D.keepTouched ? n.touchedFields : {},
      errors: D.keepErrors ? n.errors : {},
      isSubmitSuccessful: D.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Me = (_, D) => Ce(Rt(_) ? _(a) : _, D);
  return {
    control: {
      register: we,
      unregister: ne,
      getFieldState: ee,
      handleSubmit: ie,
      setError: ae,
      _executeSchema: C,
      _getWatch: O,
      _getDirty: E,
      _updateValid: y,
      _removeUnmounted: b,
      _updateFieldArray: w,
      _updateDisabledField: le,
      _getFieldArray: T,
      _reset: Ce,
      _resetDefaultValues: () => Rt(t.defaultValues) && t.defaultValues().then((_) => {
        Me(_, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (_) => {
        n = {
          ...n,
          ..._
        };
      },
      _disableForm: be,
      _subjects: f,
      _proxyFormState: c,
      _setErrors: N,
      get _fields() {
        return r;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return o;
      },
      set _state(_) {
        o = _;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return s;
      },
      set _names(_) {
        s = _;
      },
      get _formState() {
        return n;
      },
      set _formState(_) {
        n = _;
      },
      get _options() {
        return t;
      },
      set _options(_) {
        t = {
          ...t,
          ..._
        };
      }
    },
    trigger: S,
    register: we,
    handleSubmit: ie,
    watch: oe,
    setValue: z,
    getValues: J,
    reset: Me,
    resetField: ce,
    clearErrors: k,
    unregister: ne,
    setError: ae,
    setFocus: (_, D = {}) => {
      const I = te(r, _), W = I && I._f;
      if (W) {
        const U = W.refs ? W.refs[0] : W.ref;
        U.focus && (U.focus(), D.shouldSelect && Rt(U.select) && U.select());
      }
    },
    getFieldState: ee
  };
}
function Qy(e = {}) {
  const t = pe.useRef(void 0), n = pe.useRef(void 0), [r, i] = pe.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Rt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Rt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Gy(e),
    formState: r
  });
  const a = t.current.control;
  return a._options = e, as({
    subject: a._subjects.state,
    next: (o) => {
      If(o, a._proxyFormState, a._updateFormState, !0) && i({ ...a._formState });
    }
  }), pe.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), pe.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const o = a._getDirty();
      o !== r.isDirty && a._subjects.state.next({
        isDirty: o
      });
    }
  }, [a, r.isDirty]), pe.useEffect(() => {
    e.values && !tn(e.values, n.current) ? (a._reset(e.values, a._options.resetOptions), n.current = e.values, i((o) => ({ ...o }))) : a._resetDefaultValues();
  }, [e.values, a]), pe.useEffect(() => {
    e.errors && a._setErrors(e.errors);
  }, [e.errors, a]), pe.useEffect(() => {
    a._state.mount || (a._updateValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
  }), pe.useEffect(() => {
    e.shouldUnregister && a._subjects.values.next({
      values: a._getWatch()
    });
  }, [e.shouldUnregister, a]), t.current.formState = Rf(r, a), t.current;
}
var La, Nl;
function Yy() {
  if (Nl) return La;
  Nl = 1;
  function e(g) {
    this._maxSize = g, this.clear();
  }
  e.prototype.clear = function() {
    this._size = 0, this._values = /* @__PURE__ */ Object.create(null);
  }, e.prototype.get = function(g) {
    return this._values[g];
  }, e.prototype.set = function(g, w) {
    return this._size >= this._maxSize && this.clear(), g in this._values || this._size++, this._values[g] = w;
  };
  var t = /[^.^\]^[]+|(?=\[\]|\.\.)/g, n = /^\d+$/, r = /^\d/, i = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, a = /^\s*(['"]?)(.*?)(\1)\s*$/, o = 512, s = new e(o), l = new e(o), u = new e(o);
  La = {
    Cache: e,
    split: f,
    normalizePath: c,
    setter: function(g) {
      var w = c(g);
      return l.get(g) || l.set(g, function(N, R) {
        for (var A = 0, L = w.length, C = N; A < L - 1; ) {
          var F = w[A];
          if (F === "__proto__" || F === "constructor" || F === "prototype")
            return N;
          C = C[w[A++]];
        }
        C[w[A]] = R;
      });
    },
    getter: function(g, w) {
      var x = c(g);
      return u.get(g) || u.set(g, function(R) {
        for (var A = 0, L = x.length; A < L; )
          if (R != null || !w) R = R[x[A++]];
          else return;
        return R;
      });
    },
    join: function(g) {
      return g.reduce(function(w, x) {
        return w + (d(x) || n.test(x) ? "[" + x + "]" : (w ? "." : "") + x);
      }, "");
    },
    forEach: function(g, w, x) {
      h(Array.isArray(g) ? g : f(g), w, x);
    }
  };
  function c(g) {
    return s.get(g) || s.set(
      g,
      f(g).map(function(w) {
        return w.replace(a, "$2");
      })
    );
  }
  function f(g) {
    return g.match(t) || [""];
  }
  function h(g, w, x) {
    var N = g.length, R, A, L, C;
    for (A = 0; A < N; A++)
      R = g[A], R && (y(R) && (R = '"' + R + '"'), C = d(R), L = !C && /^\d+$/.test(R), w.call(x, R, C, L, A, g));
  }
  function d(g) {
    return typeof g == "string" && g && ["'", '"'].indexOf(g.charAt(0)) !== -1;
  }
  function p(g) {
    return g.match(r) && !g.match(n);
  }
  function m(g) {
    return i.test(g);
  }
  function y(g) {
    return !d(g) && (p(g) || m(g));
  }
  return La;
}
var Cn = Yy(), $a, Ml;
function Ky() {
  if (Ml) return $a;
  Ml = 1;
  const e = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g, t = (c) => c.match(e) || [], n = (c) => c[0].toUpperCase() + c.slice(1), r = (c, f) => t(c).join(f).toLowerCase(), i = (c) => t(c).reduce(
    (f, h) => `${f}${f ? h[0].toUpperCase() + h.slice(1).toLowerCase() : h.toLowerCase()}`,
    ""
  );
  return $a = {
    words: t,
    upperFirst: n,
    camelCase: i,
    pascalCase: (c) => n(i(c)),
    snakeCase: (c) => r(c, "_"),
    kebabCase: (c) => r(c, "-"),
    sentenceCase: (c) => n(r(c, " ")),
    titleCase: (c) => t(c).map(n).join(" ")
  }, $a;
}
var Ba = Ky(), Jr = { exports: {} }, Ll;
function Jy() {
  if (Ll) return Jr.exports;
  Ll = 1, Jr.exports = function(i) {
    return e(t(i), i);
  }, Jr.exports.array = e;
  function e(i, a) {
    var o = i.length, s = new Array(o), l = {}, u = o, c = n(a), f = r(i);
    for (a.forEach(function(d) {
      if (!f.has(d[0]) || !f.has(d[1]))
        throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }); u--; )
      l[u] || h(i[u], u, /* @__PURE__ */ new Set());
    return s;
    function h(d, p, m) {
      if (m.has(d)) {
        var y;
        try {
          y = ", node was:" + JSON.stringify(d);
        } catch {
          y = "";
        }
        throw new Error("Cyclic dependency" + y);
      }
      if (!f.has(d))
        throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(d));
      if (!l[p]) {
        l[p] = !0;
        var g = c.get(d) || /* @__PURE__ */ new Set();
        if (g = Array.from(g), p = g.length) {
          m.add(d);
          do {
            var w = g[--p];
            h(w, f.get(w), m);
          } while (p);
          m.delete(d);
        }
        s[--o] = d;
      }
    }
  }
  function t(i) {
    for (var a = /* @__PURE__ */ new Set(), o = 0, s = i.length; o < s; o++) {
      var l = i[o];
      a.add(l[0]), a.add(l[1]);
    }
    return Array.from(a);
  }
  function n(i) {
    for (var a = /* @__PURE__ */ new Map(), o = 0, s = i.length; o < s; o++) {
      var l = i[o];
      a.has(l[0]) || a.set(l[0], /* @__PURE__ */ new Set()), a.has(l[1]) || a.set(l[1], /* @__PURE__ */ new Set()), a.get(l[0]).add(l[1]);
    }
    return a;
  }
  function r(i) {
    for (var a = /* @__PURE__ */ new Map(), o = 0, s = i.length; o < s; o++)
      a.set(i[o], o);
    return a;
  }
  return Jr.exports;
}
var Xy = Jy();
const Zy = /* @__PURE__ */ ts(Xy), ev = Object.prototype.toString, tv = Error.prototype.toString, nv = RegExp.prototype.toString, rv = typeof Symbol < "u" ? Symbol.prototype.toString : () => "", iv = /^Symbol\((.*)\)(.*)$/;
function av(e) {
  return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
}
function $l(e, t = !1) {
  if (e == null || e === !0 || e === !1) return "" + e;
  const n = typeof e;
  if (n === "number") return av(e);
  if (n === "string") return t ? `"${e}"` : e;
  if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
  if (n === "symbol") return rv.call(e).replace(iv, "Symbol($1)");
  const r = ev.call(e).slice(8, -1);
  return r === "Date" ? isNaN(e.getTime()) ? "" + e : e.toISOString(e) : r === "Error" || e instanceof Error ? "[" + tv.call(e) + "]" : r === "RegExp" ? nv.call(e) : null;
}
function rn(e, t) {
  let n = $l(e, t);
  return n !== null ? n : JSON.stringify(e, function(r, i) {
    let a = $l(this[r], t);
    return a !== null ? a : i;
  }, 2);
}
function qf(e) {
  return e == null ? [] : [].concat(e);
}
let Hf, Gf, Qf, ov = /\$\{\s*(\w+)\s*\}/g;
Hf = Symbol.toStringTag;
class Bl {
  constructor(t, n, r, i) {
    this.name = void 0, this.message = void 0, this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = void 0, this.inner = void 0, this[Hf] = "Error", this.name = "ValidationError", this.value = n, this.path = r, this.type = i, this.errors = [], this.inner = [], qf(t).forEach((a) => {
      if (lt.isError(a)) {
        this.errors.push(...a.errors);
        const o = a.inner.length ? a.inner : [a];
        this.inner.push(...o);
      } else
        this.errors.push(a);
    }), this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
  }
}
Gf = Symbol.hasInstance;
Qf = Symbol.toStringTag;
class lt extends Error {
  static formatError(t, n) {
    const r = n.label || n.path || "this";
    return n = Object.assign({}, n, {
      path: r,
      originalPath: n.path
    }), typeof t == "string" ? t.replace(ov, (i, a) => rn(n[a])) : typeof t == "function" ? t(n) : t;
  }
  static isError(t) {
    return t && t.name === "ValidationError";
  }
  constructor(t, n, r, i, a) {
    const o = new Bl(t, n, r, i);
    if (a)
      return o;
    super(), this.value = void 0, this.path = void 0, this.type = void 0, this.params = void 0, this.errors = [], this.inner = [], this[Qf] = "Error", this.name = o.name, this.message = o.message, this.type = o.type, this.value = o.value, this.path = o.path, this.errors = o.errors, this.inner = o.inner, Error.captureStackTrace && Error.captureStackTrace(this, lt);
  }
  static [Gf](t) {
    return Bl[Symbol.hasInstance](t) || super[Symbol.hasInstance](t);
  }
}
let Dt = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path: e,
    type: t,
    value: n,
    originalValue: r
  }) => {
    const i = r != null && r !== n ? ` (cast from the value \`${rn(r, !0)}\`).` : ".";
    return t !== "mixed" ? `${e} must be a \`${t}\` type, but the final value was: \`${rn(n, !0)}\`` + i : `${e} must match the configured type. The validated value was: \`${rn(n, !0)}\`` + i;
  }
}, rt = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  datetime: "${path} must be a valid ISO date-time",
  datetime_precision: "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
  datetime_offset: '${path} must be a valid ISO date-time with UTC "Z" timezone',
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
}, sv = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
}, _o = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
}, lv = {
  isValue: "${path} field must be ${value}"
}, wi = {
  noUnknown: "${path} field has unspecified keys: ${unknown}",
  exact: "${path} object contains unknown properties: ${properties}"
}, uv = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
}, cv = {
  notType: (e) => {
    const {
      path: t,
      value: n,
      spec: r
    } = e, i = r.types.length;
    if (Array.isArray(n)) {
      if (n.length < i) return `${t} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${rn(n, !0)}\``;
      if (n.length > i) return `${t} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${rn(n, !0)}\``;
    }
    return lt.formatError(Dt.notType, e);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed: Dt,
  string: rt,
  number: sv,
  date: _o,
  object: wi,
  array: uv,
  boolean: lv,
  tuple: cv
});
const ls = (e) => e && e.__isYupSchema__;
class Wi {
  static fromOptions(t, n) {
    if (!n.then && !n.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is: r,
      then: i,
      otherwise: a
    } = n, o = typeof r == "function" ? r : (...s) => s.every((l) => l === r);
    return new Wi(t, (s, l) => {
      var u;
      let c = o(...s) ? i : a;
      return (u = c == null ? void 0 : c(l)) != null ? u : l;
    });
  }
  constructor(t, n) {
    this.fn = void 0, this.refs = t, this.refs = t, this.fn = n;
  }
  resolve(t, n) {
    let r = this.refs.map((a) => (
      // TODO: ? operator here?
      a.getValue(n == null ? void 0 : n.value, n == null ? void 0 : n.parent, n == null ? void 0 : n.context)
    )), i = this.fn(r, t, n);
    if (i === void 0 || // @ts-ignore this can be base
    i === t)
      return t;
    if (!ls(i)) throw new TypeError("conditions must return a schema object");
    return i.resolve(n);
  }
}
const Xr = {
  context: "$",
  value: "."
};
class On {
  constructor(t, n = {}) {
    if (this.key = void 0, this.isContext = void 0, this.isValue = void 0, this.isSibling = void 0, this.path = void 0, this.getter = void 0, this.map = void 0, typeof t != "string") throw new TypeError("ref must be a string, got: " + t);
    if (this.key = t.trim(), t === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === Xr.context, this.isValue = this.key[0] === Xr.value, this.isSibling = !this.isContext && !this.isValue;
    let r = this.isContext ? Xr.context : this.isValue ? Xr.value : "";
    this.path = this.key.slice(r.length), this.getter = this.path && Cn.getter(this.path, !0), this.map = n.map;
  }
  getValue(t, n, r) {
    let i = this.isContext ? r : this.isValue ? t : n;
    return this.getter && (i = this.getter(i || {})), this.map && (i = this.map(i)), i;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(t, n) {
    return this.getValue(t, n == null ? void 0 : n.parent, n == null ? void 0 : n.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(t) {
    return t && t.__isYupRef;
  }
}
On.prototype.__isYupRef = !0;
const xn = (e) => e == null;
function Dn(e) {
  function t({
    value: n,
    path: r = "",
    options: i,
    originalValue: a,
    schema: o
  }, s, l) {
    const {
      name: u,
      test: c,
      params: f,
      message: h,
      skipAbsent: d
    } = e;
    let {
      parent: p,
      context: m,
      abortEarly: y = o.spec.abortEarly,
      disableStackTrace: g = o.spec.disableStackTrace
    } = i;
    function w(b) {
      return On.isRef(b) ? b.getValue(n, p, m) : b;
    }
    function x(b = {}) {
      const E = Object.assign({
        value: n,
        originalValue: a,
        label: o.spec.label,
        path: b.path || r,
        spec: o.spec,
        disableStackTrace: b.disableStackTrace || g
      }, f, b.params);
      for (const T of Object.keys(E)) E[T] = w(E[T]);
      const O = new lt(lt.formatError(b.message || h, E), n, E.path, b.type || u, E.disableStackTrace);
      return O.params = E, O;
    }
    const N = y ? s : l;
    let R = {
      path: r,
      parent: p,
      type: u,
      from: i.from,
      createError: x,
      resolve: w,
      options: i,
      originalValue: a,
      schema: o
    };
    const A = (b) => {
      lt.isError(b) ? N(b) : b ? l(null) : N(x());
    }, L = (b) => {
      lt.isError(b) ? N(b) : s(b);
    };
    if (d && xn(n))
      return A(!0);
    let F;
    try {
      var P;
      if (F = c.call(R, n, R), typeof ((P = F) == null ? void 0 : P.then) == "function") {
        if (i.sync)
          throw new Error(`Validation test of type: "${R.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        return Promise.resolve(F).then(A, L);
      }
    } catch (b) {
      L(b);
      return;
    }
    A(F);
  }
  return t.OPTIONS = e, t;
}
function fv(e, t, n, r = n) {
  let i, a, o;
  return t ? (Cn.forEach(t, (s, l, u) => {
    let c = l ? s.slice(1, s.length - 1) : s;
    e = e.resolve({
      context: r,
      parent: i,
      value: n
    });
    let f = e.type === "tuple", h = u ? parseInt(c, 10) : 0;
    if (e.innerType || f) {
      if (f && !u) throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);
      if (n && h >= n.length)
        throw new Error(`Yup.reach cannot resolve an array item at index: ${s}, in the path: ${t}. because there is no value at that index. `);
      i = n, n = n && n[h], e = f ? e.spec.types[h] : e.innerType;
    }
    if (!u) {
      if (!e.fields || !e.fields[c]) throw new Error(`The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`);
      i = n, n = n && n[c], e = e.fields[c];
    }
    a = c, o = l ? "[" + s + "]" : "." + s;
  }), {
    schema: e,
    parent: i,
    parentPath: a
  }) : {
    parent: i,
    parentPath: t,
    schema: e
  };
}
class qi extends Set {
  describe() {
    const t = [];
    for (const n of this.values())
      t.push(On.isRef(n) ? n.describe() : n);
    return t;
  }
  resolveAll(t) {
    let n = [];
    for (const r of this.values())
      n.push(t(r));
    return n;
  }
  clone() {
    return new qi(this.values());
  }
  merge(t, n) {
    const r = this.clone();
    return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
  }
}
function Vn(e, t = /* @__PURE__ */ new Map()) {
  if (ls(e) || !e || typeof e != "object") return e;
  if (t.has(e)) return t.get(e);
  let n;
  if (e instanceof Date)
    n = new Date(e.getTime()), t.set(e, n);
  else if (e instanceof RegExp)
    n = new RegExp(e), t.set(e, n);
  else if (Array.isArray(e)) {
    n = new Array(e.length), t.set(e, n);
    for (let r = 0; r < e.length; r++) n[r] = Vn(e[r], t);
  } else if (e instanceof Map) {
    n = /* @__PURE__ */ new Map(), t.set(e, n);
    for (const [r, i] of e.entries()) n.set(r, Vn(i, t));
  } else if (e instanceof Set) {
    n = /* @__PURE__ */ new Set(), t.set(e, n);
    for (const r of e) n.add(Vn(r, t));
  } else if (e instanceof Object) {
    n = {}, t.set(e, n);
    for (const [r, i] of Object.entries(e)) n[r] = Vn(i, t);
  } else
    throw Error(`Unable to clone ${e}`);
  return n;
}
let Lt = class {
  constructor(t) {
    this.type = void 0, this.deps = [], this.tests = void 0, this.transforms = void 0, this.conditions = [], this._mutate = void 0, this.internalTests = {}, this._whitelist = new qi(), this._blacklist = new qi(), this.exclusiveTests = /* @__PURE__ */ Object.create(null), this._typeCheck = void 0, this.spec = void 0, this.tests = [], this.transforms = [], this.withMutation(() => {
      this.typeError(Dt.notType);
    }), this.type = t.type, this._typeCheck = t.check, this.spec = Object.assign({
      strip: !1,
      strict: !1,
      abortEarly: !0,
      recursive: !0,
      disableStackTrace: !1,
      nullable: !1,
      optional: !0,
      coerce: !0
    }, t == null ? void 0 : t.spec), this.withMutation((n) => {
      n.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(t) {
    if (this._mutate)
      return t && Object.assign(this.spec, t), this;
    const n = Object.create(Object.getPrototypeOf(this));
    return n.type = this.type, n._typeCheck = this._typeCheck, n._whitelist = this._whitelist.clone(), n._blacklist = this._blacklist.clone(), n.internalTests = Object.assign({}, this.internalTests), n.exclusiveTests = Object.assign({}, this.exclusiveTests), n.deps = [...this.deps], n.conditions = [...this.conditions], n.tests = [...this.tests], n.transforms = [...this.transforms], n.spec = Vn(Object.assign({}, this.spec, t)), n;
  }
  label(t) {
    let n = this.clone();
    return n.spec.label = t, n;
  }
  meta(...t) {
    if (t.length === 0) return this.spec.meta;
    let n = this.clone();
    return n.spec.meta = Object.assign(n.spec.meta || {}, t[0]), n;
  }
  withMutation(t) {
    let n = this._mutate;
    this._mutate = !0;
    let r = t(this);
    return this._mutate = n, r;
  }
  concat(t) {
    if (!t || t === this) return this;
    if (t.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);
    let n = this, r = t.clone();
    const i = Object.assign({}, n.spec, r.spec);
    return r.spec = i, r.internalTests = Object.assign({}, n.internalTests, r.internalTests), r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist), r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist), r.tests = n.tests, r.exclusiveTests = n.exclusiveTests, r.withMutation((a) => {
      t.tests.forEach((o) => {
        a.test(o.OPTIONS);
      });
    }), r.transforms = [...n.transforms, ...r.transforms], r;
  }
  isType(t) {
    return t == null ? !!(this.spec.nullable && t === null || this.spec.optional && t === void 0) : this._typeCheck(t);
  }
  resolve(t) {
    let n = this;
    if (n.conditions.length) {
      let r = n.conditions;
      n = n.clone(), n.conditions = [], n = r.reduce((i, a) => a.resolve(i, t), n), n = n.resolve(t);
    }
    return n;
  }
  resolveOptions(t) {
    var n, r, i, a;
    return Object.assign({}, t, {
      from: t.from || [],
      strict: (n = t.strict) != null ? n : this.spec.strict,
      abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
      recursive: (i = t.recursive) != null ? i : this.spec.recursive,
      disableStackTrace: (a = t.disableStackTrace) != null ? a : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(t, n = {}) {
    let r = this.resolve(Object.assign({
      value: t
    }, n)), i = n.assert === "ignore-optionality", a = r._cast(t, n);
    if (n.assert !== !1 && !r.isType(a)) {
      if (i && xn(a))
        return a;
      let o = rn(t), s = rn(a);
      throw new TypeError(`The value of ${n.path || "field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
` + (s !== o ? `result of cast: ${s}` : ""));
    }
    return a;
  }
  _cast(t, n) {
    let r = t === void 0 ? t : this.transforms.reduce((i, a) => a.call(this, i, t, this), t);
    return r === void 0 && (r = this.getDefault(n)), r;
  }
  _validate(t, n = {}, r, i) {
    let {
      path: a,
      originalValue: o = t,
      strict: s = this.spec.strict
    } = n, l = t;
    s || (l = this._cast(l, Object.assign({
      assert: !1
    }, n)));
    let u = [];
    for (let c of Object.values(this.internalTests))
      c && u.push(c);
    this.runTests({
      path: a,
      value: l,
      originalValue: o,
      options: n,
      tests: u
    }, r, (c) => {
      if (c.length)
        return i(c, l);
      this.runTests({
        path: a,
        value: l,
        originalValue: o,
        options: n,
        tests: this.tests
      }, r, i);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(t, n, r) {
    let i = !1, {
      tests: a,
      value: o,
      originalValue: s,
      path: l,
      options: u
    } = t, c = (m) => {
      i || (i = !0, n(m, o));
    }, f = (m) => {
      i || (i = !0, r(m, o));
    }, h = a.length, d = [];
    if (!h) return f([]);
    let p = {
      value: o,
      originalValue: s,
      path: l,
      options: u,
      schema: this
    };
    for (let m = 0; m < a.length; m++) {
      const y = a[m];
      y(p, c, function(w) {
        w && (Array.isArray(w) ? d.push(...w) : d.push(w)), --h <= 0 && f(d);
      });
    }
  }
  asNestedTest({
    key: t,
    index: n,
    parent: r,
    parentPath: i,
    originalParent: a,
    options: o
  }) {
    const s = t ?? n;
    if (s == null)
      throw TypeError("Must include `key` or `index` for nested validations");
    const l = typeof s == "number";
    let u = r[s];
    const c = Object.assign({}, o, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: !0,
      parent: r,
      value: u,
      originalValue: a[s],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [l ? "index" : "key"]: s,
      path: l || s.includes(".") ? `${i || ""}[${l ? s : `"${s}"`}]` : (i ? `${i}.` : "") + t
    });
    return (f, h, d) => this.resolve(c)._validate(u, c, h, d);
  }
  validate(t, n) {
    var r;
    let i = this.resolve(Object.assign({}, n, {
      value: t
    })), a = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
    return new Promise((o, s) => i._validate(t, n, (l, u) => {
      lt.isError(l) && (l.value = u), s(l);
    }, (l, u) => {
      l.length ? s(new lt(l, u, void 0, void 0, a)) : o(u);
    }));
  }
  validateSync(t, n) {
    var r;
    let i = this.resolve(Object.assign({}, n, {
      value: t
    })), a, o = (r = n == null ? void 0 : n.disableStackTrace) != null ? r : i.spec.disableStackTrace;
    return i._validate(t, Object.assign({}, n, {
      sync: !0
    }), (s, l) => {
      throw lt.isError(s) && (s.value = l), s;
    }, (s, l) => {
      if (s.length) throw new lt(s, t, void 0, void 0, o);
      a = l;
    }), a;
  }
  isValid(t, n) {
    return this.validate(t, n).then(() => !0, (r) => {
      if (lt.isError(r)) return !1;
      throw r;
    });
  }
  isValidSync(t, n) {
    try {
      return this.validateSync(t, n), !0;
    } catch (r) {
      if (lt.isError(r)) return !1;
      throw r;
    }
  }
  _getDefault(t) {
    let n = this.spec.default;
    return n == null ? n : typeof n == "function" ? n.call(this, t) : Vn(n);
  }
  getDefault(t) {
    return this.resolve(t || {})._getDefault(t);
  }
  default(t) {
    return arguments.length === 0 ? this._getDefault() : this.clone({
      default: t
    });
  }
  strict(t = !0) {
    return this.clone({
      strict: t
    });
  }
  nullability(t, n) {
    const r = this.clone({
      nullable: t
    });
    return r.internalTests.nullable = Dn({
      message: n,
      name: "nullable",
      test(i) {
        return i === null ? this.schema.spec.nullable : !0;
      }
    }), r;
  }
  optionality(t, n) {
    const r = this.clone({
      optional: t
    });
    return r.internalTests.optionality = Dn({
      message: n,
      name: "optionality",
      test(i) {
        return i === void 0 ? this.schema.spec.optional : !0;
      }
    }), r;
  }
  optional() {
    return this.optionality(!0);
  }
  defined(t = Dt.defined) {
    return this.optionality(!1, t);
  }
  nullable() {
    return this.nullability(!0);
  }
  nonNullable(t = Dt.notNull) {
    return this.nullability(!1, t);
  }
  required(t = Dt.required) {
    return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
  }
  notRequired() {
    return this.clone().withMutation((t) => t.nullable().optional());
  }
  transform(t) {
    let n = this.clone();
    return n.transforms.push(t), n;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...t) {
    let n;
    if (t.length === 1 ? typeof t[0] == "function" ? n = {
      test: t[0]
    } : n = t[0] : t.length === 2 ? n = {
      name: t[0],
      test: t[1]
    } : n = {
      name: t[0],
      message: t[1],
      test: t[2]
    }, n.message === void 0 && (n.message = Dt.default), typeof n.test != "function") throw new TypeError("`test` is a required parameters");
    let r = this.clone(), i = Dn(n), a = n.exclusive || n.name && r.exclusiveTests[n.name] === !0;
    if (n.exclusive && !n.name)
      throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    return n.name && (r.exclusiveTests[n.name] = !!n.exclusive), r.tests = r.tests.filter((o) => !(o.OPTIONS.name === n.name && (a || o.OPTIONS.test === i.OPTIONS.test))), r.tests.push(i), r;
  }
  when(t, n) {
    !Array.isArray(t) && typeof t != "string" && (n = t, t = ".");
    let r = this.clone(), i = qf(t).map((a) => new On(a));
    return i.forEach((a) => {
      a.isSibling && r.deps.push(a.key);
    }), r.conditions.push(typeof n == "function" ? new Wi(i, n) : Wi.fromOptions(i, n)), r;
  }
  typeError(t) {
    let n = this.clone();
    return n.internalTests.typeError = Dn({
      message: t,
      name: "typeError",
      skipAbsent: !0,
      test(r) {
        return this.schema._typeCheck(r) ? !0 : this.createError({
          params: {
            type: this.schema.type
          }
        });
      }
    }), n;
  }
  oneOf(t, n = Dt.oneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._whitelist.add(i), r._blacklist.delete(i);
    }), r.internalTests.whiteList = Dn({
      message: n,
      name: "oneOf",
      skipAbsent: !0,
      test(i) {
        let a = this.schema._whitelist, o = a.resolveAll(this.resolve);
        return o.includes(i) ? !0 : this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        });
      }
    }), r;
  }
  notOneOf(t, n = Dt.notOneOf) {
    let r = this.clone();
    return t.forEach((i) => {
      r._blacklist.add(i), r._whitelist.delete(i);
    }), r.internalTests.blacklist = Dn({
      message: n,
      name: "notOneOf",
      test(i) {
        let a = this.schema._blacklist, o = a.resolveAll(this.resolve);
        return o.includes(i) ? this.createError({
          params: {
            values: Array.from(a).join(", "),
            resolved: o
          }
        }) : !0;
      }
    }), r;
  }
  strip(t = !0) {
    let n = this.clone();
    return n.spec.strip = t, n;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(), {
      label: r,
      meta: i,
      optional: a,
      nullable: o
    } = n.spec;
    return {
      meta: i,
      label: r,
      optional: a,
      nullable: o,
      default: n.getDefault(t),
      type: n.type,
      oneOf: n._whitelist.describe(),
      notOneOf: n._blacklist.describe(),
      tests: n.tests.map((l) => ({
        name: l.OPTIONS.name,
        params: l.OPTIONS.params
      })).filter((l, u, c) => c.findIndex((f) => f.name === l.name) === u)
    };
  }
};
Lt.prototype.__isYupSchema__ = !0;
for (const e of ["validate", "validateSync"]) Lt.prototype[`${e}At`] = function(t, n, r = {}) {
  const {
    parent: i,
    parentPath: a,
    schema: o
  } = fv(this, t, n, r.context);
  return o[e](i && i[a], Object.assign({}, r, {
    parent: i,
    path: t
  }));
};
for (const e of ["equals", "is"]) Lt.prototype[e] = Lt.prototype.oneOf;
for (const e of ["not", "nope"]) Lt.prototype[e] = Lt.prototype.notOneOf;
const dv = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function hv(e) {
  const t = To(e);
  if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
  if (t.z === void 0 && t.plusMinus === void 0)
    return new Date(t.year, t.month, t.day, t.hour, t.minute, t.second, t.millisecond).valueOf();
  let n = 0;
  return t.z !== "Z" && t.plusMinus !== void 0 && (n = t.hourOffset * 60 + t.minuteOffset, t.plusMinus === "+" && (n = 0 - n)), Date.UTC(t.year, t.month, t.day, t.hour, t.minute + n, t.second, t.millisecond);
}
function To(e) {
  var t, n;
  const r = dv.exec(e);
  return r ? {
    year: Wt(r[1]),
    month: Wt(r[2], 1) - 1,
    day: Wt(r[3], 1),
    hour: Wt(r[4]),
    minute: Wt(r[5]),
    second: Wt(r[6]),
    millisecond: r[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      Wt(r[7].substring(0, 3))
    ) : 0,
    precision: (t = (n = r[7]) == null ? void 0 : n.length) != null ? t : void 0,
    z: r[8] || void 0,
    plusMinus: r[9] || void 0,
    hourOffset: Wt(r[10]),
    minuteOffset: Wt(r[11])
  } : null;
}
function Wt(e, t = 0) {
  return Number(e) || t;
}
let pv = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
), mv = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
), gv = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, yv = "^\\d{4}-\\d{2}-\\d{2}", vv = "\\d{2}:\\d{2}:\\d{2}", bv = "(([+-]\\d{2}(:?\\d{2})?)|Z)", wv = new RegExp(`${yv}T${vv}(\\.\\d+)?${bv}$`), xv = (e) => xn(e) || e === e.trim(), Sv = {}.toString();
function Yf() {
  return new Kf();
}
class Kf extends Lt {
  constructor() {
    super({
      type: "string",
      check(t) {
        return t instanceof String && (t = t.valueOf()), typeof t == "string";
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => {
        if (!r.spec.coerce || r.isType(t) || Array.isArray(t)) return t;
        const i = t != null && t.toString ? t.toString() : t;
        return i === Sv ? t : i;
      });
    });
  }
  required(t) {
    return super.required(t).withMutation((n) => n.test({
      message: t || Dt.required,
      name: "required",
      skipAbsent: !0,
      test: (r) => !!r.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((t) => (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required"), t));
  }
  length(t, n = rt.length) {
    return this.test({
      message: n,
      name: "length",
      exclusive: !0,
      params: {
        length: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length === this.resolve(t);
      }
    });
  }
  min(t, n = rt.min) {
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length >= this.resolve(t);
      }
    });
  }
  max(t, n = rt.max) {
    return this.test({
      name: "max",
      exclusive: !0,
      message: n,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(r) {
        return r.length <= this.resolve(t);
      }
    });
  }
  matches(t, n) {
    let r = !1, i, a;
    return n && (typeof n == "object" ? {
      excludeEmptyString: r = !1,
      message: i,
      name: a
    } = n : i = n), this.test({
      name: a || "matches",
      message: i || rt.matches,
      params: {
        regex: t
      },
      skipAbsent: !0,
      test: (o) => o === "" && r || o.search(t) !== -1
    });
  }
  email(t = rt.email) {
    return this.matches(pv, {
      name: "email",
      message: t,
      excludeEmptyString: !0
    });
  }
  url(t = rt.url) {
    return this.matches(mv, {
      name: "url",
      message: t,
      excludeEmptyString: !0
    });
  }
  uuid(t = rt.uuid) {
    return this.matches(gv, {
      name: "uuid",
      message: t,
      excludeEmptyString: !1
    });
  }
  datetime(t) {
    let n = "", r, i;
    return t && (typeof t == "object" ? {
      message: n = "",
      allowOffset: r = !1,
      precision: i = void 0
    } = t : n = t), this.matches(wv, {
      name: "datetime",
      message: n || rt.datetime,
      excludeEmptyString: !0
    }).test({
      name: "datetime_offset",
      message: n || rt.datetime_offset,
      params: {
        allowOffset: r
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || r) return !0;
        const o = To(a);
        return o ? !!o.z : !1;
      }
    }).test({
      name: "datetime_precision",
      message: n || rt.datetime_precision,
      params: {
        precision: i
      },
      skipAbsent: !0,
      test: (a) => {
        if (!a || i == null) return !0;
        const o = To(a);
        return o ? o.precision === i : !1;
      }
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((t) => t === null ? "" : t);
  }
  trim(t = rt.trim) {
    return this.transform((n) => n != null ? n.trim() : n).test({
      message: t,
      name: "trim",
      test: xv
    });
  }
  lowercase(t = rt.lowercase) {
    return this.transform((n) => xn(n) ? n : n.toLowerCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => xn(n) || n === n.toLowerCase()
    });
  }
  uppercase(t = rt.uppercase) {
    return this.transform((n) => xn(n) ? n : n.toUpperCase()).test({
      message: t,
      name: "string_case",
      exclusive: !0,
      skipAbsent: !0,
      test: (n) => xn(n) || n === n.toUpperCase()
    });
  }
}
Yf.prototype = Kf.prototype;
let Cv = /* @__PURE__ */ new Date(""), Ev = (e) => Object.prototype.toString.call(e) === "[object Date]";
class us extends Lt {
  constructor() {
    super({
      type: "date",
      check(t) {
        return Ev(t) && !isNaN(t.getTime());
      }
    }), this.withMutation(() => {
      this.transform((t, n, r) => !r.spec.coerce || r.isType(t) || t === null ? t : (t = hv(t), isNaN(t) ? us.INVALID_DATE : new Date(t)));
    });
  }
  prepareParam(t, n) {
    let r;
    if (On.isRef(t))
      r = t;
    else {
      let i = this.cast(t);
      if (!this._typeCheck(i)) throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);
      r = i;
    }
    return r;
  }
  min(t, n = _o.min) {
    let r = this.prepareParam(t, "min");
    return this.test({
      message: n,
      name: "min",
      exclusive: !0,
      params: {
        min: t
      },
      skipAbsent: !0,
      test(i) {
        return i >= this.resolve(r);
      }
    });
  }
  max(t, n = _o.max) {
    let r = this.prepareParam(t, "max");
    return this.test({
      message: n,
      name: "max",
      exclusive: !0,
      params: {
        max: t
      },
      skipAbsent: !0,
      test(i) {
        return i <= this.resolve(r);
      }
    });
  }
}
us.INVALID_DATE = Cv;
function kv(e, t = []) {
  let n = [], r = /* @__PURE__ */ new Set(), i = new Set(t.map(([o, s]) => `${o}-${s}`));
  function a(o, s) {
    let l = Cn.split(o)[0];
    r.add(l), i.has(`${s}-${l}`) || n.push([s, l]);
  }
  for (const o of Object.keys(e)) {
    let s = e[o];
    r.add(o), On.isRef(s) && s.isSibling ? a(s.path, o) : ls(s) && "deps" in s && s.deps.forEach((l) => a(l, o));
  }
  return Zy.array(Array.from(r), n).reverse();
}
function jl(e, t) {
  let n = 1 / 0;
  return e.some((r, i) => {
    var a;
    if ((a = t.path) != null && a.includes(r))
      return n = i, !0;
  }), n;
}
function Jf(e) {
  return (t, n) => jl(e, t) - jl(e, n);
}
const Ov = (e, t, n) => {
  if (typeof e != "string")
    return e;
  let r = e;
  try {
    r = JSON.parse(e);
  } catch {
  }
  return n.isType(r) ? r : e;
};
function xi(e) {
  if ("fields" in e) {
    const t = {};
    for (const [n, r] of Object.entries(e.fields))
      t[n] = xi(r);
    return e.setFields(t);
  }
  if (e.type === "array") {
    const t = e.optional();
    return t.innerType && (t.innerType = xi(t.innerType)), t;
  }
  return e.type === "tuple" ? e.optional().clone({
    types: e.spec.types.map(xi)
  }) : "optional" in e ? e.optional() : e;
}
const _v = (e, t) => {
  const n = [...Cn.normalizePath(t)];
  if (n.length === 1) return n[0] in e;
  let r = n.pop(), i = Cn.getter(Cn.join(n), !0)(e);
  return !!(i && r in i);
};
let zl = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Ul(e, t) {
  let n = Object.keys(e.fields);
  return Object.keys(t).filter((r) => n.indexOf(r) === -1);
}
const Tv = Jf([]);
function Xf(e) {
  return new Zf(e);
}
class Zf extends Lt {
  constructor(t) {
    super({
      type: "object",
      check(n) {
        return zl(n) || typeof n == "function";
      }
    }), this.fields = /* @__PURE__ */ Object.create(null), this._sortErrors = Tv, this._nodes = [], this._excludedEdges = [], this.withMutation(() => {
      t && this.shape(t);
    });
  }
  _cast(t, n = {}) {
    var r;
    let i = super._cast(t, n);
    if (i === void 0) return this.getDefault(n);
    if (!this._typeCheck(i)) return i;
    let a = this.fields, o = (r = n.stripUnknown) != null ? r : this.spec.noUnknown, s = [].concat(this._nodes, Object.keys(i).filter((f) => !this._nodes.includes(f))), l = {}, u = Object.assign({}, n, {
      parent: l,
      __validating: n.__validating || !1
    }), c = !1;
    for (const f of s) {
      let h = a[f], d = f in i;
      if (h) {
        let p, m = i[f];
        u.path = (n.path ? `${n.path}.` : "") + f, h = h.resolve({
          value: m,
          context: n.context,
          parent: l
        });
        let y = h instanceof Lt ? h.spec : void 0, g = y == null ? void 0 : y.strict;
        if (y != null && y.strip) {
          c = c || f in i;
          continue;
        }
        p = !n.__validating || !g ? (
          // TODO: use _cast, this is double resolving
          h.cast(i[f], u)
        ) : i[f], p !== void 0 && (l[f] = p);
      } else d && !o && (l[f] = i[f]);
      (d !== f in l || l[f] !== i[f]) && (c = !0);
    }
    return c ? l : i;
  }
  _validate(t, n = {}, r, i) {
    let {
      from: a = [],
      originalValue: o = t,
      recursive: s = this.spec.recursive
    } = n;
    n.from = [{
      schema: this,
      value: o
    }, ...a], n.__validating = !0, n.originalValue = o, super._validate(t, n, r, (l, u) => {
      if (!s || !zl(u)) {
        i(l, u);
        return;
      }
      o = o || u;
      let c = [];
      for (let f of this._nodes) {
        let h = this.fields[f];
        !h || On.isRef(h) || c.push(h.asNestedTest({
          options: n,
          key: f,
          parent: u,
          parentPath: n.path,
          originalParent: o
        }));
      }
      this.runTests({
        tests: c,
        value: u,
        originalValue: o,
        options: n
      }, r, (f) => {
        i(f.sort(this._sortErrors).concat(l), u);
      });
    });
  }
  clone(t) {
    const n = super.clone(t);
    return n.fields = Object.assign({}, this.fields), n._nodes = this._nodes, n._excludedEdges = this._excludedEdges, n._sortErrors = this._sortErrors, n;
  }
  concat(t) {
    let n = super.concat(t), r = n.fields;
    for (let [i, a] of Object.entries(this.fields)) {
      const o = r[i];
      r[i] = o === void 0 ? a : o;
    }
    return n.withMutation((i) => (
      // XXX: excludes here is wrong
      i.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
    ));
  }
  _getDefault(t) {
    if ("default" in this.spec)
      return super._getDefault(t);
    if (!this._nodes.length)
      return;
    let n = {};
    return this._nodes.forEach((r) => {
      var i;
      const a = this.fields[r];
      let o = t;
      (i = o) != null && i.value && (o = Object.assign({}, o, {
        parent: o.value,
        value: o.value[r]
      })), n[r] = a && "getDefault" in a ? a.getDefault(o) : void 0;
    }), n;
  }
  setFields(t, n) {
    let r = this.clone();
    return r.fields = t, r._nodes = kv(t, n), r._sortErrors = Jf(Object.keys(t)), n && (r._excludedEdges = n), r;
  }
  shape(t, n = []) {
    return this.clone().withMutation((r) => {
      let i = r._excludedEdges;
      return n.length && (Array.isArray(n[0]) || (n = [n]), i = [...r._excludedEdges, ...n]), r.setFields(Object.assign(r.fields, t), i);
    });
  }
  partial() {
    const t = {};
    for (const [n, r] of Object.entries(this.fields))
      t[n] = "optional" in r && r.optional instanceof Function ? r.optional() : r;
    return this.setFields(t);
  }
  deepPartial() {
    return xi(this);
  }
  pick(t) {
    const n = {};
    for (const r of t)
      this.fields[r] && (n[r] = this.fields[r]);
    return this.setFields(n, this._excludedEdges.filter(([r, i]) => t.includes(r) && t.includes(i)));
  }
  omit(t) {
    const n = [];
    for (const r of Object.keys(this.fields))
      t.includes(r) || n.push(r);
    return this.pick(n);
  }
  from(t, n, r) {
    let i = Cn.getter(t, !0);
    return this.transform((a) => {
      if (!a) return a;
      let o = a;
      return _v(a, t) && (o = Object.assign({}, a), r || delete o[t], o[n] = i(a)), o;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(Ov);
  }
  /**
   * Similar to `noUnknown` but only validates that an object is the right shape without stripping the unknown keys
   */
  exact(t) {
    return this.test({
      name: "exact",
      exclusive: !0,
      message: t || wi.exact,
      test(n) {
        if (n == null) return !0;
        const r = Ul(this.schema, n);
        return r.length === 0 || this.createError({
          params: {
            properties: r.join(", ")
          }
        });
      }
    });
  }
  stripUnknown() {
    return this.clone({
      noUnknown: !0
    });
  }
  noUnknown(t = !0, n = wi.noUnknown) {
    typeof t != "boolean" && (n = t, t = !0);
    let r = this.test({
      name: "noUnknown",
      exclusive: !0,
      message: n,
      test(i) {
        if (i == null) return !0;
        const a = Ul(this.schema, i);
        return !t || a.length === 0 || this.createError({
          params: {
            unknown: a.join(", ")
          }
        });
      }
    });
    return r.spec.noUnknown = t, r;
  }
  unknown(t = !0, n = wi.noUnknown) {
    return this.noUnknown(!t, n);
  }
  transformKeys(t) {
    return this.transform((n) => {
      if (!n) return n;
      const r = {};
      for (const i of Object.keys(n)) r[t(i)] = n[i];
      return r;
    });
  }
  camelCase() {
    return this.transformKeys(Ba.camelCase);
  }
  snakeCase() {
    return this.transformKeys(Ba.snakeCase);
  }
  constantCase() {
    return this.transformKeys((t) => Ba.snakeCase(t).toUpperCase());
  }
  describe(t) {
    const n = (t ? this.resolve(t) : this).clone(), r = super.describe(t);
    r.fields = {};
    for (const [a, o] of Object.entries(n.fields)) {
      var i;
      let s = t;
      (i = s) != null && i.value && (s = Object.assign({}, s, {
        parent: s.value,
        value: s.value[a]
      })), r.fields[a] = o.describe(s);
    }
    return r;
  }
}
Xf.prototype = Zf.prototype;
const Vl = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = te(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, ed = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? Vl(r.ref, n, e) : r.refs && r.refs.forEach((i) => Vl(i, n, e));
  }
}, Av = (e, t) => {
  t.shouldUseNativeValidation && ed(e, t);
  const n = {};
  for (const r in e) {
    const i = te(t.fields, r), a = Object.assign(e[r] || {}, { ref: i && i.ref });
    if (Pv(t.names || Object.keys(e), r)) {
      const o = Object.assign({}, te(n, r));
      ke(o, "root", a), ke(n, r, o);
    } else ke(n, r, a);
  }
  return n;
}, Pv = (e, t) => e.some((n) => n.startsWith(t + "."));
function Fv(e, t, n) {
  return t === void 0 && (t = {}), n === void 0 && (n = {}), function(r, i, a) {
    try {
      return Promise.resolve(function(o, s) {
        try {
          var l = (t.context && process.env.NODE_ENV === "development" && console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"), Promise.resolve(e[n.mode === "sync" ? "validateSync" : "validate"](r, Object.assign({ abortEarly: !1 }, t, { context: i }))).then(function(u) {
            return a.shouldUseNativeValidation && ed({}, a), { values: n.raw ? r : u, errors: {} };
          }));
        } catch (u) {
          return s(u);
        }
        return l && l.then ? l.then(void 0, s) : l;
      }(0, function(o) {
        if (!o.inner) throw o;
        return { values: {}, errors: Av((s = o, l = !a.shouldUseNativeValidation && a.criteriaMode === "all", (s.inner || []).reduce(function(u, c) {
          if (u[c.path] || (u[c.path] = { message: c.message, type: c.type }), l) {
            var f = u[c.path].types, h = f && f[c.type];
            u[c.path] = $f(c.path, l, u, c.type, h ? [].concat(h, c.message) : c.message);
          }
          return u;
        }, {})), a) };
        var s, l;
      }));
    } catch (o) {
      return Promise.reject(o);
    }
  };
}
const Dv = () => {
  const e = qe(
    () => Xf().shape({
      vote: Yf().oneOf(["yes", "no", "abstain"]).required()
    }),
    []
  );
  return Qy({
    defaultValues: { vote: "" },
    mode: "onChange",
    resolver: Fv(e)
  });
}, Rv = ({
  previousVote: e,
  voteContextHash: t,
  voteContextUrl: n
}) => {
  const [r, i] = Be(!1), {
    addSuccessAlert: a,
    buildSignSubmitConwayCertTx: o,
    buildVote: s,
    isPendingTransaction: l,
    useLocation: u,
    useParams: c,
    useRouter: f
  } = Ve(), h = f(), { hash: d } = u(), p = +d.slice(1), { proposalId: m } = c("/governance_actions/[hash]"), y = Iv(), {
    control: g,
    handleSubmit: w,
    formState: { errors: x, isDirty: N },
    setValue: R,
    register: A
  } = Dv(), { vote: L } = Lf({
    control: g
  }), C = !!x.vote, F = m != null && p !== void 0 && p !== null && !C && (e == null ? void 0 : e.vote) !== L, P = Re(
    async (b) => {
      if (!F) return;
      i(!0);
      const E = n ?? "", O = t ?? "";
      try {
        if (l == null ? void 0 : l()) return;
        const M = await (s == null ? void 0 : s(
          b.vote,
          m,
          p,
          E,
          O
        ));
        await (o == null ? void 0 : o({
          votingBuilder: M,
          type: "vote",
          resourceId: m + p
        })) && (a("Vote submitted"), h.push(qt.governanceActions));
      } catch (T) {
        y({
          error: T,
          dataTestId: "vote-transaction-error-modal"
        });
      } finally {
        i(!1);
      }
    },
    [
      F,
      n,
      t,
      l,
      s,
      m,
      p,
      o,
      a,
      h,
      y
    ]
  );
  return {
    confirmVote: w(P),
    setValue: R,
    vote: L,
    registerInput: A,
    isDirty: N,
    areFormErrors: C,
    isVoteLoading: r,
    canVote: F
  };
}, Iv = () => {
  const { openModal: e, closeModal: t } = Yt();
  return ({
    error: r,
    onSumbit: i,
    title: a,
    buttonText: o,
    dataTestId: s
  }) => {
    const l = r && typeof r == "object" && "info" in r ? r.info : r;
    e({
      type: "statusModal",
      state: {
        status: "warning",
        title: a ?? "Oops!",
        message: l,
        buttonText: o ?? "Cancel",
        onSubmit: () => {
          i && i(), t();
        },
        dataTestId: s ?? "wallet-error-modal"
      }
    });
  };
}, cs = Ji(void 0);
cs.displayName = "DataActionsBarContext";
const td = ({ children: e }) => {
  const [t, n] = Be(""), r = Cy(t, 300), [i, a] = Be(!1), [o, s] = Be([]), [l, u] = Be(!1), [c, f] = Be(""), h = Re(() => {
    a(!1);
  }, []), d = Re(() => {
    u(!1);
  }, []), p = qe(
    () => ({
      chosenFilters: o,
      chosenFiltersLength: o.length,
      chosenSorting: c,
      closeFilters: h,
      closeSorts: d,
      debouncedSearchText: r,
      filtersOpen: i,
      searchText: t,
      setChosenFilters: s,
      setChosenSorting: f,
      setFiltersOpen: a,
      setSearchText: n,
      setSortOpen: u,
      sortOpen: l
    }),
    [
      o,
      c,
      r,
      i,
      t,
      l,
      h,
      d
    ]
  );
  return /* @__PURE__ */ v(cs.Provider, { value: p, children: e });
};
function nd() {
  const e = Xi(cs);
  if (!e)
    throw new Error(
      "useDataActionsBar must be used within a DataActionsBarProvider"
    );
  return e;
}
const Ct = ({
  size: e = "large",
  variant: t = "contained",
  sx: n,
  isLoading: r,
  ...i
}) => {
  const a = {
    extraLarge: 48,
    large: 40,
    medium: 36,
    small: 32
  }[e], o = {
    extraLarge: 3.5,
    large: 3.25,
    medium: 3,
    small: 3
  }[e];
  return /* @__PURE__ */ G(
    Wn,
    {
      sx: {
        fontSize: e === "extraLarge" ? 16 : 14,
        height: a,
        px: o,
        whiteSpace: "nowrap",
        ...n
      },
      variant: t,
      ...i,
      disabled: r || (i == null ? void 0 : i.disabled),
      children: [
        r && /* @__PURE__ */ v(Gn, { size: 26, sx: { position: "absolute" } }),
        i.children
      ]
    }
  );
}, Nv = ({
  dataTestId: e,
  errorMessage: t,
  sx: n,
  ...r
}) => {
  const i = Ac();
  return /* @__PURE__ */ v(
    Pc,
    {
      id: i,
      inputProps: {
        "data-testid": e
      },
      sx: {
        "& .MuiSvgIcon-root": { fontSize: 18 },
        color: t ? "red" : "#0033AD",
        ...n
      },
      ...r
    }
  );
}, rd = ({ isChecked: e, text: t, variant: n }) => {
  const { addSuccessAlert: r } = Ve(), i = qe(() => n === "blue" ? Ge.copyBlueIcon : n === "blueThin" ? Ge.copyBlueThinIcon : e ? Ge.copyWhiteIcon : Ge.copyIcon, [e, n]);
  return /* @__PURE__ */ v(
    "img",
    {
      "data-testid": "copy-button",
      alt: "copy",
      onClick: (a) => {
        navigator.clipboard.writeText(t), r("Copied to clipboard"), a.stopPropagation();
      },
      src: i,
      style: { cursor: "pointer" }
    }
  );
}, Mv = ({
  label: e,
  sx: t,
  url: n
}) => {
  const { openModal: r } = Yt();
  return /* @__PURE__ */ G(
    Ct,
    {
      onClick: () => {
        r({
          type: "externalLink",
          state: {
            externalLink: n
          }
        });
      },
      sx: {
        p: 0,
        mb: 4,
        ":hover": {
          backgroundColor: "transparent"
        },
        ...t
      },
      disableRipple: !0,
      variant: "text",
      "data-testid": "external-modal-button",
      children: [
        /* @__PURE__ */ v(Qe, { variant: "body1", fontWeight: 500, color: "primary", children: e }),
        /* @__PURE__ */ v(
          "img",
          {
            alt: "external link",
            src: Ge.externalLinkIcon,
            height: "20",
            width: "20",
            style: { marginLeft: "8px" }
          }
        )
      ]
    }
  );
}, fs = ({
  errorMessage: e,
  errorStyles: t
}) => e ? /* @__PURE__ */ v(
  Qe,
  {
    color: "red",
    "data-testid": `${e.replace(/\s+/g, "-").toLowerCase()}-error`,
    fontSize: 12,
    fontWeight: 400,
    sx: { mt: 0.25 },
    ...t,
    children: e
  }
) : null, ds = ({
  helpfulText: e,
  helpfulTextStyle: t,
  sx: n
}) => e ? /* @__PURE__ */ v(
  Qe,
  {
    color: "#9792B5",
    "data-testid": `${e.replace(/\s+/g, "-").toLowerCase()}-error`,
    fontSize: 12,
    fontWeight: 400,
    sx: { mt: 0.5, ...n },
    ...t,
    children: e
  }
) : null, Lv = zt(
  ({ errorMessage: e, dataTestId: t, onBlur: n, onFocus: r, sx: i, ...a }, o) => {
    const s = Ac(), l = un(null), u = Re(
      (f) => {
        var h;
        r == null || r(f), (h = l.current) == null || h.focus();
      },
      [r]
    ), c = Re(
      (f) => {
        var h;
        n == null || n(f), (h = l.current) == null || h.blur();
      },
      [n]
    );
    return Zi(
      o,
      () => ({
        focus: u,
        blur: c,
        ...l.current
      }),
      [c, u]
    ), /* @__PURE__ */ v(
      Fc,
      {
        id: s,
        inputProps: { "data-testid": t },
        inputRef: l,
        sx: {
          backgroundColor: e ? "inputRed" : "white",
          border: 1,
          borderColor: e ? "red" : "secondaryBlue",
          borderRadius: 50,
          padding: "8px 16px",
          width: "100%",
          "& input.Mui-disabled": {
            WebkitTextFillColor: "#4C495B"
          },
          "&.Mui-disabled": {
            backgroundColor: "#F5F5F8",
            borderColor: "#9792B5"
          },
          ...i
        },
        ...a
      }
    );
  }
), $v = ({ size: e = 100 }) => /* @__PURE__ */ v("div", { style: { width: e, height: e, margin: "0 auto" }, children: /* @__PURE__ */ v(
  "img",
  {
    src: Ge.loaderIcon,
    style: { animation: "spin 2s linear infinite" },
    alt: "loader"
  }
) }), vt = jh({
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
          borderRadius: "12px !important"
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          bgcolor: "white",
          borderColor: "#6F99FF",
          border: 1,
          borderRadius: 50,
          padding: "8px 16px",
          width: "100%"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: "none"
        },
        outlined: (e) => ({
          borderColor: e.theme.palette.lightBlue
        })
      }
    },
    MuiChip: {
      variants: [
        {
          props: { color: "default", variant: "filled" },
          style: {
            backgroundColor: Ta.c50
          }
        },
        {
          props: { color: "success", variant: "filled" },
          style: {
            backgroundColor: rl.c200,
            color: rl.c700
          }
        },
        {
          props: { color: "error", variant: "filled" },
          style: {
            backgroundColor: il.c100,
            color: il.c500
          }
        },
        {
          props: { color: "warning", variant: "filled" },
          style: {
            backgroundColor: bp.c200,
            color: pi.c700
          }
        },
        {
          props: { color: "info", variant: "filled" },
          style: {
            backgroundColor: nl.c100,
            color: nl.c500
          }
        }
      ],
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          fontWeight: 500,
          height: 28
        },
        filledPrimary: {
          backgroundColor: Ta.c100,
          color: Ta.c500
        },
        filledSecondary: {
          backgroundColor: pi.c100,
          color: pi.c600
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
    fontFamily: "Poppins, Arial",
    allVariants: {
      color: "#242232"
    }
  },
  palette: {
    accentOrange: "#F29339",
    accentYellow: "#F2D9A9",
    arcticWhite: "#FBFBFF",
    boxShadow1: "rgba(0, 18, 61, 0.37)",
    boxShadow2: "rgba(47, 98, 220, 0.2)",
    errorRed: "#9E2323",
    fadedPurple: "#716E88",
    highlightBlue: "#C2EFF299",
    inputRed: "#FAEAEB",
    lightBlue: "#D6E2FF",
    lightOrange: "#FFCBAD",
    negativeRed: "#E58282",
    neutralGray: "#8E908E",
    neutralWhite: "#FFFFFF",
    orangeDark: "#803205",
    positiveGreen: "#5CC165",
    primary: { main: "#0033AD" },
    primaryBlue: "#0033AD",
    secondary: { main: "rgb(255, 100, 10)" },
    secondaryBlue: "#6F99FF",
    specialCyan: "#1C94B2",
    specialCyanBorder: "#77BFD1",
    textBlack: "#242232",
    textGray: "#525252"
  }
});
vt.shadows[1] = "0px 1px 2px 0px rgba(0, 51, 173, 0.08), 0px 1px 6px 1px rgba(0, 51, 173, 0.15)";
vt.shadows[2] = "0px 1px 2px 0px rgba(0, 51, 173, 0.08), 0px 2px 10px 2px rgba(0, 51, 173, 0.15)";
vt.shadows[3] = "0px 1px 3px 0px rgba(0, 51, 173, 0.08), 0px 4px 12px 3px rgba(0, 51, 173, 0.15)";
vt.shadows[4] = "0px 2px 3px 0px rgba(0, 51, 173, 0.08), 0px 6px 14px 4px rgba(0, 51, 173, 0.15)";
vt.shadows[5] = "0px 4px 4px 0px rgba(0, 51, 173, 0.08), 0px 8px 20px 6px rgba(0, 51, 173, 0.15)";
const ja = ({ ...e }) => {
  const {
    isChecked: t,
    name: n,
    setValue: r,
    title: i,
    value: a,
    dataTestId: o,
    register: s,
    disabled: l
  } = e, u = () => {
    r(n, a);
  };
  return /* @__PURE__ */ G(
    Q,
    {
      "data-testid": o,
      onClick: () => {
        l || u();
      },
      borderRadius: t ? "15px" : "12px",
      p: t ? "2px" : 0,
      border: t ? 2 : 0,
      borderColor: t ? "specialCyanBorder" : void 0,
      sx: [
        {
          boxShadow: vt.shadows[1],
          "&:hover": {
            color: "blue",
            cursor: l ? "default" : "pointer"
          }
        }
      ],
      children: [
        /* @__PURE__ */ v(
          "input",
          {
            type: "radio",
            value: a,
            ...s(n),
            style: { display: "none" },
            checked: t
          }
        ),
        /* @__PURE__ */ v(
          Q,
          {
            borderRadius: "12px",
            bgcolor: t ? "specialCyan" : "white",
            py: 1.5,
            children: /* @__PURE__ */ v(
              se,
              {
                variant: "body1",
                sx: {
                  textAlign: "center",
                  color: t ? "white" : "textBlack"
                },
                children: i
              }
            )
          }
        )
      ]
    }
  );
}, Wl = ta((e) => /* @__PURE__ */ v(Dc, { disableRipple: !0, ...e }))(() => ({
  textTransform: "none",
  fontWeight: 400,
  fontSize: 16,
  color: "#242232",
  "&.Mui-selected": {
    color: "#FF640A",
    fontWeight: 500
  }
})), Bv = ta(Dh)(
  () => `
  font-family: "Poppins";
  font-weight: 400;
    ::placeholder {
      font-family: "Poppins";
      font-weight: 400;
      color: #a6a6a6;
    }
    `
), jv = zt(
  ({
    errorMessage: e,
    maxLength: t = 500,
    onBlur: n,
    onFocus: r,
    isModifiedLayout: i,
    ...a
  }, o) => {
    const { isMobile: s } = Ie(), l = un(null), u = Re(
      (h) => {
        var d;
        r == null || r(h), (d = l.current) == null || d.focus();
      },
      [r]
    ), c = Re(
      (h) => {
        var d;
        n == null || n(h), (d = l.current) == null || d.blur();
      },
      [n]
    );
    return Zi(
      o,
      () => ({
        focus: u,
        blur: c,
        ...l.current
      }),
      [c, u]
    ), /* @__PURE__ */ v(
      Bv,
      {
        style: {
          border: `1px solid ${e ? "red" : "#6F99FF"}`,
          backgroundColor: e ? "#FAEAEB" : "white",
          borderRadius: "24px",
          height: i && s ? "312px" : i ? "208px" : s ? "104px" : "128px",
          outline: "none",
          padding: "12px 14px",
          resize: "none"
        },
        maxLength: t,
        ref: l,
        sx: {
          fontSize: i ? "12px" : "auto",
          "&::placeholder": {
            fontSize: i ? "12px" : "16px"
          }
        },
        ...a
      }
    );
  }
), zv = ta(
  ({ className: e, ...t }) => (
    // eslint-disable-next-line react/jsx-pascal-case
    /* @__PURE__ */ v(_a.default, { ...t, arrow: !0, classes: { popper: e } })
  )
)(() => ({
  [`& .${_a.tooltipClasses.arrow}`]: {
    color: "rgb(36, 34, 50)"
  },
  [`& .${_a.tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(36, 34, 50)",
    padding: 12
  }
})), Hi = ({
  heading: e,
  paragraphOne: t,
  paragraphTwo: n,
  ...r
}) => /* @__PURE__ */ v(
  zv,
  {
    ...r,
    enterTouchDelay: 0,
    leaveTouchDelay: 1e3,
    title: /* @__PURE__ */ G(Ye, { children: [
      e && /* @__PURE__ */ v(fo, { fontSize: 16, fontWeight: 400, color: "#FBFBFF", children: e }),
      /* @__PURE__ */ G(
        fo,
        {
          mt: 0.5,
          fontSize: 14,
          fontWeight: 400,
          color: "rgb(170, 170, 170)",
          children: [
            t && t,
            n && /* @__PURE__ */ G(Ye, { children: [
              /* @__PURE__ */ v("br", {}),
              " ",
              /* @__PURE__ */ v("br", {}),
              n
            ] })
          ]
        }
      )
    ] })
  }
), se = ({
  color: e,
  variant: t = "body1",
  ...n
}) => {
  const r = {
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
  }[t], i = {
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
  }[t], a = {
    headline1: "110px",
    headline2: "57px",
    headline3: "44px",
    headline4: "40px",
    headline5: "36px",
    title1: "32px",
    title2: "28px",
    body1: "24px",
    body2: "20px",
    caption: "16px"
  }[t];
  return /* @__PURE__ */ v(
    Qe,
    {
      color: e,
      fontSize: r,
      fontWeight: i,
      lineHeight: a,
      ...n,
      children: n.children
    }
  );
}, ma = ({ children: e }) => {
  const { isMobile: t } = Ie();
  return /* @__PURE__ */ v(
    Q,
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      px: t ? 0 : 3,
      children: e
    }
  );
}, hs = ({ children: e, sx: t }) => /* @__PURE__ */ v(
  fo,
  {
    marginBottom: "8px",
    fontSize: "28px",
    fontWeight: "500",
    textAlign: "center",
    sx: t,
    children: e
  }
), Uv = Nc("div")`
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

  ${({ variant: e }) => {
  if (e === "modal")
    return `
        width: 80vw;
        max-width: 510px;
        padding: 52px 24px 34px 24px;
        max-height: 80vh;
        overflow: auto;
      `;
  if (e === "popup")
    return `
        width: 320px;
        height: 320px;
      `;
}}
`, Vv = Nc("img")`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
`, ga = zt(
  ({
    children: e,
    onClose: t,
    variant: n = "modal",
    hideCloseButton: r = !1,
    dataTestId: i = "modal",
    sx: a
  }, o) => {
    const { closeModal: s } = Yt();
    return /* @__PURE__ */ G(Uv, { variant: n, "data-testid": i, sx: a, ref: o, children: [
      n !== "popup" && !r && /* @__PURE__ */ v(
        Vv,
        {
          "data-testid": "close-modal-button",
          alt: "close",
          onClick: Xm(s, t),
          src: Ge.closeIcon
        }
      ),
      e
    ] });
  }
), Wv = ({
  // elementOne,
  // elementOnePath,
  elementTwo: e,
  isDataMissing: t
}) => {
  const { isMobile: n } = Ie();
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        margin: `2px 0 ${n ? "44px" : "24px"}`
      },
      children: [
        /* @__PURE__ */ v(
          Bh,
          {
            orientation: "vertical",
            flexItem: !0,
            color: "textBlack",
            sx: { margin: "0 6px" }
          }
        ),
        /* @__PURE__ */ v(
          se,
          {
            variant: "caption",
            sx: {
              fontWeight: 500,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            children: t && Bi(t) || e
          }
        )
      ]
    }
  );
}, qv = ({
  chosenFilters: e,
  setChosenFilters: t,
  closeFilters: n,
  options: r,
  title: i
}) => {
  const a = Re(
    (u) => {
      u.target.name, u.target.checked;
      let c = [...e];
      u.target.checked ? c.push(u.target.name) : c = c.filter((f) => f !== u.target.name), t(c);
    },
    [e, t]
  ), { isMobile: o, screenWidth: s } = Ie(), l = un(null);
  return Tf(l, n), /* @__PURE__ */ G(
    Q,
    {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      sx: {
        background: "#FBFBFF",
        boxShadow: "1px 2px 11px 0px #00123D5E",
        borderRadius: "10px",
        padding: "12px 0px",
        width: s < 850 ? "315px" : "415px",
        zIndex: "1",
        right: o ? "59px" : "115px",
        top: "53px"
      },
      ref: l,
      children: [
        i && /* @__PURE__ */ v(
          Rh,
          {
            sx: {
              fontSize: 14,
              fontWeight: 500,
              color: "#9792B5",
              paddingX: "20px"
            },
            children: i
          }
        ),
        r.map((u) => /* @__PURE__ */ v(
          Q,
          {
            paddingX: "20px",
            sx: [{ "&:hover": { bgcolor: "#E6EBF7" } }],
            bgcolor: e != null && e.includes(u.key) ? "#FFF0E7" : "transparent",
            children: /* @__PURE__ */ v(
              Rc,
              {
                control: /* @__PURE__ */ v(
                  Pc,
                  {
                    inputProps: {
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-expect-error
                      "data-testid": `${u.label.replace(/ /g, "")}-checkbox`
                    },
                    onChange: a,
                    name: u.key,
                    checked: e == null ? void 0 : e.includes(u.key)
                  }
                ),
                label: /* @__PURE__ */ v(Qe, { fontSize: 14, fontWeight: 500, children: u.label })
              }
            )
          },
          u.key
        ))
      ]
    }
  );
}, Hv = ({
  chosenSorting: e,
  setChosenSorting: t,
  closeSorts: n,
  options: r
}) => {
  const i = un(null);
  return Tf(i, n), /* @__PURE__ */ v(
    Q,
    {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      sx: {
        background: "#FBFBFF",
        boxShadow: "1px 2px 11px 0px #00123D5E",
        borderRadius: "10px",
        padding: "12px 0px",
        width: "315px",
        zIndex: "1",
        right: "3px",
        top: "53px"
      },
      ref: i,
      children: /* @__PURE__ */ G(Ih, { children: [
        /* @__PURE__ */ G(Q, { display: "flex", justifyContent: "space-between", px: "20px", children: [
          /* @__PURE__ */ v(Qe, { sx: { fontSize: 14, fontWeight: 500, color: "#9792B5" }, children: "Sort by" }),
          /* @__PURE__ */ v(Q, { sx: { cursor: "pointer" }, onClick: () => t(""), children: /* @__PURE__ */ v(Qe, { fontSize: 14, fontWeight: 500, color: "primary", children: "Clear" }) })
        ] }),
        /* @__PURE__ */ v(
          Nh,
          {
            "aria-labelledby": "demo-controlled-radio-buttons-group",
            name: "controlled-radio-buttons-group",
            value: e,
            onChange: (a) => {
              t(a.target.value);
            },
            children: r.map((a) => /* @__PURE__ */ v(
              Rc,
              {
                sx: [
                  {
                    margin: 0,
                    px: "20px",
                    bgcolor: e === a.key ? "#FFF0E7" : "transparent"
                  },
                  { "&:hover": { bgcolor: "#E6EBF7" } }
                ],
                value: a.key,
                control: (
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  /* @__PURE__ */ v(Mh, { inputProps: { "data-testid": `${a.key}-radio` } })
                ),
                label: a.label
              },
              a.key
            ))
          }
        )
      ] })
    }
  );
}, AO = ({ children: e }) => /* @__PURE__ */ v(Mc, { theme: vt, children: e }), Gv = (e) => {
  const { isMobile: t } = Ie(), {
    palette: { secondary: n }
  } = vt, {
    filtersOpen: r,
    setFiltersOpen: i = () => {
    },
    chosenFiltersLength: a = 0,
    chosenSorting: o,
    sortOpen: s,
    setSortOpen: l,
    isFiltering: u = !0,
    children: c
  } = e;
  return /* @__PURE__ */ G(
    Q,
    {
      display: "flex",
      width: "min-content",
      alignItems: "center",
      ml: "8px",
      gap: t ? "8px" : "24px",
      position: "relative",
      sx: { alignSelf: "end" },
      children: [
        u && /* @__PURE__ */ G(
          Q,
          {
            sx: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ...!t && {
                background: r ? n.main : "transparent",
                borderRadius: "99px",
                padding: "12px 14px"
              }
            },
            onClick: () => {
              l(!1), u && i(!r);
            },
            "data-testid": "filters-button",
            children: [
              /* @__PURE__ */ v(
                "img",
                {
                  alt: "filter",
                  src: r ? Ge.filterWhiteIcon : Ge.filterIcon,
                  style: {
                    borderRadius: "100%",
                    marginRight: "8px",
                    overflow: "visible",
                    height: 20,
                    width: 20,
                    objectFit: "contain",
                    ...t && {
                      background: r ? n.main : "transparent",
                      padding: "14px",
                      marginRight: "0"
                    }
                  }
                }
              ),
              !t && /* @__PURE__ */ v(
                se,
                {
                  variant: "body1",
                  sx: {
                    color: r ? "white" : "primaryBlue",
                    fontWeight: 500
                  },
                  children: "Filter"
                }
              ),
              !r && a > 0 && /* @__PURE__ */ v(
                Q,
                {
                  sx: {
                    alignItems: "center",
                    background: n.main,
                    borderRadius: "100%",
                    color: "white",
                    display: "flex",
                    fontSize: "12px",
                    height: "16px",
                    justifyContent: "center",
                    position: "absolute",
                    right: "-3px",
                    top: "0",
                    width: "16px"
                  },
                  children: /* @__PURE__ */ v(se, { variant: "caption", color: "#FFFFFF", children: a })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ G(
          Q,
          {
            sx: {
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              ...!t && {
                background: s ? n.main : "transparent",
                borderRadius: "99px",
                padding: "12px 14px"
              }
            },
            onClick: () => {
              u && i(!1), l(!s);
            },
            "data-testid": "sort-button",
            children: [
              /* @__PURE__ */ v(
                "img",
                {
                  alt: "sort",
                  src: s ? Ge.sortWhiteIcon : Ge.sortIcon,
                  style: {
                    borderRadius: "100%",
                    marginRight: "8px",
                    height: 20,
                    width: 20,
                    objectFit: "contain",
                    ...t && {
                      background: s ? n.main : "transparent",
                      padding: "14px",
                      marginRight: "0"
                    }
                  }
                }
              ),
              !t && /* @__PURE__ */ v(
                se,
                {
                  variant: "body1",
                  sx: {
                    color: s ? "white" : "primaryBlue",
                    fontWeight: 500,
                    whiteSpace: "nowrap"
                  },
                  children: o ? `Sort by: ${o}` : "Sort"
                }
              )
            ]
          }
        ),
        c
      ]
    }
  );
}, id = ({ ...e }) => {
  const {
    chosenFilters: t = [],
    chosenFiltersLength: n,
    chosenSorting: r,
    closeFilters: i = () => {
    },
    closeSorts: a,
    filterOptions: o = [],
    filtersOpen: s,
    filtersTitle: l,
    isFiltering: u = !0,
    searchText: c,
    setChosenFilters: f = () => {
    },
    setChosenSorting: h,
    setFiltersOpen: d,
    setSearchText: p,
    setSortOpen: m,
    sortOpen: y,
    sortOptions: g = []
  } = e, {
    palette: { boxShadow2: w }
  } = vt;
  return /* @__PURE__ */ v(Ye, { children: /* @__PURE__ */ G(Q, { alignItems: "center", display: "flex", justifyContent: "space-between", children: [
    /* @__PURE__ */ v(
      Fc,
      {
        inputProps: { "data-testid": "search-input" },
        onChange: (x) => p(x.target.value),
        placeholder: "Search...",
        value: c,
        startAdornment: /* @__PURE__ */ v(
          zh,
          {
            style: {
              color: "#99ADDE",
              height: 16,
              marginRight: 4,
              width: 16
            }
          }
        ),
        sx: {
          bgcolor: "white",
          border: 1,
          borderColor: "secondaryBlue",
          borderRadius: 50,
          boxShadow: `2px 2px 20px 0px ${w}`,
          fontSize: 11,
          fontWeight: 500,
          height: 48,
          padding: "16px 24px",
          maxWidth: 500
        }
      }
    ),
    /* @__PURE__ */ G(
      Gv,
      {
        chosenFiltersLength: n,
        filtersOpen: s,
        isFiltering: u,
        setFiltersOpen: d,
        chosenSorting: r,
        setSortOpen: m,
        sortOpen: y,
        children: [
          s && /* @__PURE__ */ v(
            qv,
            {
              chosenFilters: t,
              setChosenFilters: f,
              closeFilters: i,
              options: o,
              title: l
            }
          ),
          y && /* @__PURE__ */ v(
            Hv,
            {
              chosenSorting: r,
              setChosenSorting: h,
              closeSorts: a,
              options: g
            }
          )
        ]
      }
    )
  ] }) });
}, Qv = ({
  title: e,
  isDataMissing: t,
  shareLink: n,
  titleStyle: r
}) => /* @__PURE__ */ G(
  Q,
  {
    sx: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 2,
      alignItems: "center",
      mb: 2
    },
    "data-testid": "governance-action-details-card-header",
    children: [
      /* @__PURE__ */ v(
        Q,
        {
          sx: {
            display: "flex",
            alignItems: "center"
          },
          children: /* @__PURE__ */ v(
            se,
            {
              sx: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                fontWeight: 600,
                ...t && { color: "errorRed" },
                ...r
              },
              variant: "title2",
              children: t && Bi(
                t
              ) || e
            }
          )
        }
      ),
      n && /* @__PURE__ */ v(SE, { link: n })
    ]
  }
), Yv = ({
  isDataMissing: e,
  isInProgress: t,
  isSubmitted: n,
  sx: r
}) => {
  const i = {
    [ht.URL_NOT_FOUND]: "The data that was originally used when this Governance Action was created has not been found.",
    [ht.INVALID_JSONLD]: "The data that was originally used when this Governance Action was created has been formatted incorrectly.",
    [ht.INVALID_HASH]: "The data that was originally used when this Governance Action was created has changed.",
    [ht.INCORRECT_FORMAT]: "The data that was originally used when this Governance Action was created has been formatted incorrectly."
  }[e], a = {
    [ht.URL_NOT_FOUND]: "GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that GovTool cannot locate the data on the URL specified when the Governance Action was originally posted.",
    [ht.INVALID_JSONLD]: "GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data format as defined by the Cardano community.",
    [ht.INVALID_HASH]: "GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data when the Governance Action was originally posted.",
    [ht.INCORRECT_FORMAT]: "GovTool uses external sources for Governance Action data, and these sources are maintained by the proposers of the Actions. This error means that the data stored by the Proposer does not match the data format as defined by the Cardano community."
  }[e];
  return e && !n && !t ? /* @__PURE__ */ G(
    Q,
    {
      sx: {
        mb: 4,
        pr: 6,
        ...r
      },
      children: [
        /* @__PURE__ */ v(
          se,
          {
            sx: {
              fontSize: "18px",
              fontWeight: 500,
              color: "errorRed",
              mb: 0.5
            },
            children: i
          }
        ),
        /* @__PURE__ */ v(
          se,
          {
            sx: {
              fontWeight: 400,
              color: "errorRed",
              mb: 0.5
            },
            children: a
          }
        ),
        /* @__PURE__ */ v(
          na,
          {
            onClick: () => ha(
              "https://docs.gov.tools/using-govtool/govtool-functions/dreps/drep-error-conditions"
            ),
            sx: {
              fontFamily: "Poppins",
              fontSize: "16px",
              lineHeight: "24px",
              cursor: "pointer"
            },
            children: "Learn more"
          }
        )
      ]
    }
  ) : null;
}, Kv = ({
  category: e,
  isSearch: t
}) => /* @__PURE__ */ v(
  se,
  {
    sx: {
      fontWeight: 300,
      py: 4
    },
    children: t ? "No results for the search." : /* @__PURE__ */ G(Ye, { children: [
      "Governance actions with category  ",
      /* @__PURE__ */ v(
        se,
        {
          sx: {
            display: "inline",
            fontWeight: 700
          },
          children: kn(e ?? "")
        }
      ),
      "  don't exist."
    ] })
  }
), Jv = ({
  errorMessage: e,
  errorStyles: t,
  helpfulText: n,
  helpfulTextStyle: r,
  label: i,
  labelStyles: a,
  layoutStyles: o,
  onChange: s,
  value: l,
  ...u
}) => {
  const c = Re(() => {
    s(!l);
  }, [l, s]);
  return /* @__PURE__ */ G(Q, { sx: { width: "100%", ...o }, children: [
    /* @__PURE__ */ G(
      Q,
      {
        onClick: c,
        sx: {
          alignItems: "center",
          cursor: "pointer",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridTemplateAreas: '"checkbox label" ". helpfulText"',
          width: "fit-content"
        },
        children: [
          /* @__PURE__ */ v(
            Nv,
            {
              onChange: s,
              value: l,
              errorMessage: e,
              ...u
            }
          ),
          i && /* @__PURE__ */ v(se, { variant: "caption", ...a, children: i }),
          /* @__PURE__ */ v(
            ds,
            {
              helpfulText: n,
              helpfulTextStyle: r,
              sx: { gridArea: "helpfulText" }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ v(fs, { errorMessage: e, errorStyles: t })
  ] });
}, Xv = zt(
  ({
    errorMessage: e,
    errorStyles: t,
    helpfulText: n,
    helpfulTextStyle: r,
    label: i,
    labelStyles: a,
    layoutStyles: o,
    onBlur: s,
    onFocus: l,
    ...u
  }, c) => {
    const f = un(null), h = Re(
      (p) => {
        var m;
        l == null || l(p), (m = f.current) == null || m.focus();
      },
      [l]
    ), d = Re(
      (p) => {
        var m;
        s == null || s(p), (m = f.current) == null || m.blur();
      },
      [s]
    );
    return Zi(
      c,
      () => ({
        focus: h,
        blur: d,
        ...f.current
      }),
      [d, h]
    ), /* @__PURE__ */ G(Q, { sx: { width: "100%", ...o }, children: [
      i && /* @__PURE__ */ v(
        se,
        {
          fontWeight: 400,
          sx: { mb: 0.5 },
          variant: "body2",
          ...a,
          children: i
        }
      ),
      /* @__PURE__ */ v(
        Lv,
        {
          dataTestId: u.dataTestId ?? `${i && `${Of(i)}-`}input`,
          errorMessage: e,
          ...u,
          ref: f
        }
      ),
      /* @__PURE__ */ v(
        ds,
        {
          helpfulText: n,
          helpfulTextStyle: r
        }
      ),
      /* @__PURE__ */ v(
        fs,
        {
          errorMessage: e,
          errorStyles: t
        }
      )
    ] });
  }
), Zv = zt(
  ({
    errorMessage: e,
    errorStyles: t,
    helpfulText: n,
    helpfulTextStyle: r,
    hideLabel: i,
    label: a,
    labelStyles: o,
    layoutStyles: s,
    maxLength: l = 500,
    onBlur: u,
    onFocus: c,
    ...f
  }, h) => {
    var y, g;
    const d = un(null), p = Re(
      (w) => {
        var x;
        c == null || c(w), (x = d.current) == null || x.focus();
      },
      [c]
    ), m = Re(
      (w) => {
        var x;
        u == null || u(w), (x = d.current) == null || x.blur();
      },
      [u]
    );
    return Zi(
      h,
      () => ({
        focus: p,
        blur: m,
        ...d.current
      }),
      [m, p]
    ), /* @__PURE__ */ G(
      Q,
      {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          position: "relative",
          ...s
        },
        children: [
          a && /* @__PURE__ */ v(
            se,
            {
              fontWeight: 400,
              sx: { mb: 0.5, ...i && { fontSize: 0, lineHeight: 0 } },
              variant: "body2",
              ...o,
              children: a
            }
          ),
          /* @__PURE__ */ G(
            Q,
            {
              sx: {
                display: "flex",
                flexDirection: "column",
                position: "relative"
              },
              children: [
                /* @__PURE__ */ v(
                  jv,
                  {
                    errorMessage: e,
                    maxLength: l,
                    ...f,
                    ref: d
                  }
                ),
                /* @__PURE__ */ G(
                  se,
                  {
                    color: "#8E908E",
                    sx: {
                      bottom: 12,
                      position: "absolute",
                      right: 14
                    },
                    variant: "caption",
                    children: [
                      ((g = (y = f == null ? void 0 : f.value) == null ? void 0 : y.toString()) == null ? void 0 : g.length) ?? 0,
                      "/",
                      l
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ v(
            ds,
            {
              helpfulText: n,
              helpfulTextStyle: r
            }
          ),
          /* @__PURE__ */ v(
            fs,
            {
              errorMessage: e,
              errorStyles: t
            }
          )
        ]
      }
    );
  }
), ya = ({ children: e }) => /* @__PURE__ */ v(Ye, { children: e });
ya.Checkbox = Jv;
ya.Input = Xv;
ya.TextArea = Zv;
const ad = ({
  abstract: e,
  type: t,
  inProgress: n = !1,
  expiryDate: r,
  expiryEpochNo: i,
  onClick: a,
  createdDate: o,
  createdEpochNo: s,
  txHash: l,
  index: u,
  metadataStatus: c,
  metadataValid: f,
  title: h,
  isVoter: d = !1
}) => {
  const { isMobile: p, screenWidth: m } = Ie(), y = pt(l, u), g = qe(() => m < 420 ? 290 : p ? 324 : 350, [m, p]);
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        width: g,
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 4px 15px 0px #DDE3F5",
        borderRadius: "20px",
        backgroundColor: f ? "rgba(255, 255, 255, 0.3)" : "rgba(251, 235, 235, 0.50)",
        ...!f && {
          border: "1px solid #F6D5D5"
        },
        ...n && {
          border: "1px solid #FFCBAD"
        }
      },
      "data-testid": `govaction-${_r(t)}-card`,
      children: [
        n && /* @__PURE__ */ v(Ts, { variant: "inProgress" }),
        /* @__PURE__ */ G(
          Q,
          {
            sx: {
              padding: "40px 24px 0"
            },
            children: [
              /* @__PURE__ */ v(
                Ud,
                {
                  title: h,
                  isDataMissing: c
                }
              ),
              /* @__PURE__ */ v(
                St,
                {
                  label: "Abstract",
                  text: e,
                  textVariant: "twoLines",
                  dataTestId: "governance-action-abstract",
                  isSliderCard: !0,
                  isMarkdown: !0
                }
              ),
              /* @__PURE__ */ v(
                St,
                {
                  label: "Governance Action Type:",
                  text: kn(t),
                  textVariant: "pill",
                  dataTestId: `${_r(t)}-type`,
                  isSliderCard: !0
                }
              ),
              /* @__PURE__ */ v(
                Us,
                {
                  createdDate: o,
                  expiryDate: r,
                  expiryEpochNo: i,
                  createdEpochNo: s,
                  isSliderCard: !0
                }
              ),
              /* @__PURE__ */ v(
                St,
                {
                  label: "Governance Action ID:",
                  text: pt(l, u),
                  dataTestId: `${pt(l, u)}-id`,
                  isCopyButton: !0,
                  isSliderCard: !0
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ v(
          Q,
          {
            sx: {
              boxShadow: "0px 4px 15px 0px #DDE3F5",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              padding: 3,
              bgcolor: "white"
            },
            children: /* @__PURE__ */ v(
              Ct,
              {
                onClick: a,
                variant: n ? "outlined" : "contained",
                size: "large",
                sx: {
                  width: "100%"
                },
                "data-testid": `govaction-${y}-view-detail`,
                children: n && !d ? "View Details" : "View Details and Vote"
              }
            )
          }
        )
      ]
    }
  );
};
function e0(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const t0 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, n0 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, r0 = {};
function ql(e, t) {
  return (r0.jsx ? n0 : t0).test(e);
}
const i0 = /[ \t\n\f\r]/g;
function a0(e) {
  return typeof e == "object" ? e.type === "text" ? Hl(e.value) : !1 : Hl(e);
}
function Hl(e) {
  return e.replace(i0, "") === "";
}
class Ur {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
Ur.prototype.normal = {};
Ur.prototype.property = {};
Ur.prototype.space = void 0;
function od(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new Ur(n, r, t);
}
function Ao(e) {
  return e.toLowerCase();
}
class ft {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
ft.prototype.attribute = "";
ft.prototype.booleanish = !1;
ft.prototype.boolean = !1;
ft.prototype.commaOrSpaceSeparated = !1;
ft.prototype.commaSeparated = !1;
ft.prototype.defined = !1;
ft.prototype.mustUseProperty = !1;
ft.prototype.number = !1;
ft.prototype.overloadedBoolean = !1;
ft.prototype.property = "";
ft.prototype.spaceSeparated = !1;
ft.prototype.space = void 0;
let o0 = 0;
const ye = _n(), Ue = _n(), sd = _n(), Y = _n(), Ae = _n(), qn = _n(), dt = _n();
function _n() {
  return 2 ** ++o0;
}
const Po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ye,
  booleanish: Ue,
  commaOrSpaceSeparated: dt,
  commaSeparated: qn,
  number: Y,
  overloadedBoolean: sd,
  spaceSeparated: Ae
}, Symbol.toStringTag, { value: "Module" })), za = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Po)
);
class ps extends ft {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, n, r, i) {
    let a = -1;
    if (super(t, n), Gl(this, "space", i), typeof r == "number")
      for (; ++a < za.length; ) {
        const o = za[a];
        Gl(this, za[a], (r & Po[o]) === Po[o]);
      }
  }
}
ps.prototype.defined = !0;
function Gl(e, t, n) {
  n && (e[t] = n);
}
function er(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const a = new ps(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Ao(r)] = r, n[Ao(a.attribute)] = r;
  }
  return new Ur(t, n, e.space);
}
const ld = er({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ue,
    ariaAutoComplete: null,
    ariaBusy: Ue,
    ariaChecked: Ue,
    ariaColCount: Y,
    ariaColIndex: Y,
    ariaColSpan: Y,
    ariaControls: Ae,
    ariaCurrent: null,
    ariaDescribedBy: Ae,
    ariaDetails: null,
    ariaDisabled: Ue,
    ariaDropEffect: Ae,
    ariaErrorMessage: null,
    ariaExpanded: Ue,
    ariaFlowTo: Ae,
    ariaGrabbed: Ue,
    ariaHasPopup: null,
    ariaHidden: Ue,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ae,
    ariaLevel: Y,
    ariaLive: null,
    ariaModal: Ue,
    ariaMultiLine: Ue,
    ariaMultiSelectable: Ue,
    ariaOrientation: null,
    ariaOwns: Ae,
    ariaPlaceholder: null,
    ariaPosInSet: Y,
    ariaPressed: Ue,
    ariaReadOnly: Ue,
    ariaRelevant: null,
    ariaRequired: Ue,
    ariaRoleDescription: Ae,
    ariaRowCount: Y,
    ariaRowIndex: Y,
    ariaRowSpan: Y,
    ariaSelected: Ue,
    ariaSetSize: Y,
    ariaSort: null,
    ariaValueMax: Y,
    ariaValueMin: Y,
    ariaValueNow: Y,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function ud(e, t) {
  return t in e ? e[t] : t;
}
function cd(e, t) {
  return ud(e, t.toLowerCase());
}
const s0 = er({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: qn,
    acceptCharset: Ae,
    accessKey: Ae,
    action: null,
    allow: null,
    allowFullScreen: ye,
    allowPaymentRequest: ye,
    allowUserMedia: ye,
    alt: null,
    as: null,
    async: ye,
    autoCapitalize: null,
    autoComplete: Ae,
    autoFocus: ye,
    autoPlay: ye,
    blocking: Ae,
    capture: null,
    charSet: null,
    checked: ye,
    cite: null,
    className: Ae,
    cols: Y,
    colSpan: null,
    content: null,
    contentEditable: Ue,
    controls: ye,
    controlsList: Ae,
    coords: Y | qn,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ye,
    defer: ye,
    dir: null,
    dirName: null,
    disabled: ye,
    download: sd,
    draggable: Ue,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ye,
    formTarget: null,
    headers: Ae,
    height: Y,
    hidden: ye,
    high: Y,
    href: null,
    hrefLang: null,
    htmlFor: Ae,
    httpEquiv: Ae,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ye,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ye,
    itemId: null,
    itemProp: Ae,
    itemRef: Ae,
    itemScope: ye,
    itemType: Ae,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ye,
    low: Y,
    manifest: null,
    max: null,
    maxLength: Y,
    media: null,
    method: null,
    min: null,
    minLength: Y,
    multiple: ye,
    muted: ye,
    name: null,
    nonce: null,
    noModule: ye,
    noValidate: ye,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: ye,
    optimum: Y,
    pattern: null,
    ping: Ae,
    placeholder: null,
    playsInline: ye,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ye,
    referrerPolicy: null,
    rel: Ae,
    required: ye,
    reversed: ye,
    rows: Y,
    rowSpan: Y,
    sandbox: Ae,
    scope: null,
    scoped: ye,
    seamless: ye,
    selected: ye,
    shadowRootClonable: ye,
    shadowRootDelegatesFocus: ye,
    shadowRootMode: null,
    shape: null,
    size: Y,
    sizes: null,
    slot: null,
    span: Y,
    spellCheck: Ue,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: Y,
    step: null,
    style: null,
    tabIndex: Y,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ye,
    useMap: null,
    value: Ue,
    width: Y,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Ae,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: Y,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: Y,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: ye,
    // Lists. Use CSS to reduce space between items instead
    declare: ye,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: Y,
    // `<img>` and `<object>`
    leftMargin: Y,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: Y,
    // `<body>`
    marginWidth: Y,
    // `<body>`
    noResize: ye,
    // `<frame>`
    noHref: ye,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ye,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ye,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: Y,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ue,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: Y,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: Y,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ye,
    disableRemotePlayback: ye,
    prefix: null,
    property: null,
    results: Y,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: cd
}), l0 = er({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: dt,
    accentHeight: Y,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: Y,
    amplitude: Y,
    arabicForm: null,
    ascent: Y,
    attributeName: null,
    attributeType: null,
    azimuth: Y,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: Y,
    by: null,
    calcMode: null,
    capHeight: Y,
    className: Ae,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: Y,
    diffuseConstant: Y,
    direction: null,
    display: null,
    dur: null,
    divisor: Y,
    dominantBaseline: null,
    download: ye,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: Y,
    enableBackground: null,
    end: null,
    event: null,
    exponent: Y,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: Y,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: qn,
    g2: qn,
    glyphName: qn,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: Y,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: Y,
    horizOriginX: Y,
    horizOriginY: Y,
    id: null,
    ideographic: Y,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: Y,
    k: Y,
    k1: Y,
    k2: Y,
    k3: Y,
    k4: Y,
    kernelMatrix: dt,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: Y,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: Y,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: Y,
    overlineThickness: Y,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: Y,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ae,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: Y,
    pointsAtY: Y,
    pointsAtZ: Y,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: dt,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: dt,
    rev: dt,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: dt,
    requiredFeatures: dt,
    requiredFonts: dt,
    requiredFormats: dt,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: Y,
    specularExponent: Y,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: Y,
    strikethroughThickness: Y,
    string: null,
    stroke: null,
    strokeDashArray: dt,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: Y,
    strokeOpacity: Y,
    strokeWidth: null,
    style: null,
    surfaceScale: Y,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: dt,
    tabIndex: Y,
    tableValues: null,
    target: null,
    targetX: Y,
    targetY: Y,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: dt,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: Y,
    underlineThickness: Y,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: Y,
    values: null,
    vAlphabetic: Y,
    vMathematical: Y,
    vectorEffect: null,
    vHanging: Y,
    vIdeographic: Y,
    version: null,
    vertAdvY: Y,
    vertOriginX: Y,
    vertOriginY: Y,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: Y,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: ud
}), fd = er({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), dd = er({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: cd
}), hd = er({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), u0 = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, c0 = /[A-Z]/g, Ql = /-[a-z]/g, f0 = /^data[-\w.:]+$/i;
function d0(e, t) {
  const n = Ao(t);
  let r = t, i = ft;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && f0.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(Ql, p0);
      r = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!Ql.test(a)) {
        let o = a.replace(c0, h0);
        o.charAt(0) !== "-" && (o = "-" + o), t = "data" + o;
      }
    }
    i = ps;
  }
  return new i(r, t);
}
function h0(e) {
  return "-" + e.toLowerCase();
}
function p0(e) {
  return e.charAt(1).toUpperCase();
}
const m0 = od([ld, s0, fd, dd, hd], "html"), ms = od([ld, l0, fd, dd, hd], "svg");
function g0(e) {
  return e.join(" ").trim();
}
var Rn = {}, Ua, Yl;
function y0() {
  if (Yl) return Ua;
  Yl = 1;
  var e = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, t = /\n/g, n = /^\s*/, r = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, i = /^:\s*/, a = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, o = /^[;\s]*/, s = /^\s+|\s+$/g, l = `
`, u = "/", c = "*", f = "", h = "comment", d = "declaration";
  Ua = function(m, y) {
    if (typeof m != "string")
      throw new TypeError("First argument must be a string");
    if (!m) return [];
    y = y || {};
    var g = 1, w = 1;
    function x(O) {
      var T = O.match(t);
      T && (g += T.length);
      var M = O.lastIndexOf(l);
      w = ~M ? O.length - M : w + O.length;
    }
    function N() {
      var O = { line: g, column: w };
      return function(T) {
        return T.position = new R(O), C(), T;
      };
    }
    function R(O) {
      this.start = O, this.end = { line: g, column: w }, this.source = y.source;
    }
    R.prototype.content = m;
    function A(O) {
      var T = new Error(
        y.source + ":" + g + ":" + w + ": " + O
      );
      if (T.reason = O, T.filename = y.source, T.line = g, T.column = w, T.source = m, !y.silent) throw T;
    }
    function L(O) {
      var T = O.exec(m);
      if (T) {
        var M = T[0];
        return x(M), m = m.slice(M.length), T;
      }
    }
    function C() {
      L(n);
    }
    function F(O) {
      var T;
      for (O = O || []; T = P(); )
        T !== !1 && O.push(T);
      return O;
    }
    function P() {
      var O = N();
      if (!(u != m.charAt(0) || c != m.charAt(1))) {
        for (var T = 2; f != m.charAt(T) && (c != m.charAt(T) || u != m.charAt(T + 1)); )
          ++T;
        if (T += 2, f === m.charAt(T - 1))
          return A("End of comment missing");
        var M = m.slice(2, T - 2);
        return w += 2, x(M), m = m.slice(T), w += 2, O({
          type: h,
          comment: M
        });
      }
    }
    function b() {
      var O = N(), T = L(r);
      if (T) {
        if (P(), !L(i)) return A("property missing ':'");
        var M = L(a), B = O({
          type: d,
          property: p(T[0].replace(e, f)),
          value: M ? p(M[0].replace(e, f)) : f
        });
        return L(o), B;
      }
    }
    function E() {
      var O = [];
      F(O);
      for (var T; T = b(); )
        T !== !1 && (O.push(T), F(O));
      return O;
    }
    return C(), E();
  };
  function p(m) {
    return m ? m.replace(s, f) : f;
  }
  return Ua;
}
var Kl;
function v0() {
  if (Kl) return Rn;
  Kl = 1;
  var e = Rn && Rn.__importDefault || function(r) {
    return r && r.__esModule ? r : { default: r };
  };
  Object.defineProperty(Rn, "__esModule", { value: !0 }), Rn.default = n;
  var t = e(y0());
  function n(r, i) {
    var a = null;
    if (!r || typeof r != "string")
      return a;
    var o = (0, t.default)(r), s = typeof i == "function";
    return o.forEach(function(l) {
      if (l.type === "declaration") {
        var u = l.property, c = l.value;
        s ? i(u, c, l) : c && (a = a || {}, a[u] = c);
      }
    }), a;
  }
  return Rn;
}
var cr = {}, Jl;
function b0() {
  if (Jl) return cr;
  Jl = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.camelCase = void 0;
  var e = /^--[a-zA-Z0-9_-]+$/, t = /-([a-z])/g, n = /^[^-]+$/, r = /^-(webkit|moz|ms|o|khtml)-/, i = /^-(ms)-/, a = function(u) {
    return !u || n.test(u) || e.test(u);
  }, o = function(u, c) {
    return c.toUpperCase();
  }, s = function(u, c) {
    return "".concat(c, "-");
  }, l = function(u, c) {
    return c === void 0 && (c = {}), a(u) ? u : (u = u.toLowerCase(), c.reactCompat ? u = u.replace(i, s) : u = u.replace(r, s), u.replace(t, o));
  };
  return cr.camelCase = l, cr;
}
var fr, Xl;
function w0() {
  if (Xl) return fr;
  Xl = 1;
  var e = fr && fr.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  }, t = e(v0()), n = b0();
  function r(i, a) {
    var o = {};
    return !i || typeof i != "string" || (0, t.default)(i, function(s, l) {
      s && l && (o[(0, n.camelCase)(s, a)] = l);
    }), o;
  }
  return r.default = r, fr = r, fr;
}
var x0 = w0();
const S0 = /* @__PURE__ */ ts(x0), pd = md("end"), gs = md("start");
function md(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function C0(e) {
  const t = gs(e), n = pd(e);
  if (t && n)
    return { start: t, end: n };
}
function Sr(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Zl(e.position) : "start" in e || "end" in e ? Zl(e) : "line" in e || "column" in e ? Fo(e) : "";
}
function Fo(e) {
  return eu(e && e.line) + ":" + eu(e && e.column);
}
function Zl(e) {
  return Fo(e && e.start) + "-" + Fo(e && e.end);
}
function eu(e) {
  return e && typeof e == "number" ? e : 1;
}
class Ze extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", a = {}, o = !1;
    if (n && ("line" in n && "column" in n ? a = { place: n } : "start" in n && "end" in n ? a = { place: n } : "type" in n ? a = {
      ancestors: [n],
      place: n.position
    } : a = { ...n }), typeof t == "string" ? i = t : !a.cause && t && (o = !0, i = t.message, a.cause = t), !a.ruleId && !a.source && typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? a.ruleId = r : (a.source = r.slice(0, l), a.ruleId = r.slice(l + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const l = a.ancestors[a.ancestors.length - 1];
      l && (a.place = l.position);
    }
    const s = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = s ? s.line : void 0, this.name = Sr(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = o && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
Ze.prototype.file = "";
Ze.prototype.name = "";
Ze.prototype.reason = "";
Ze.prototype.message = "";
Ze.prototype.stack = "";
Ze.prototype.column = void 0;
Ze.prototype.line = void 0;
Ze.prototype.ancestors = void 0;
Ze.prototype.cause = void 0;
Ze.prototype.fatal = void 0;
Ze.prototype.place = void 0;
Ze.prototype.ruleId = void 0;
Ze.prototype.source = void 0;
const ys = {}.hasOwnProperty, E0 = /* @__PURE__ */ new Map(), k0 = /[A-Z]/g, O0 = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), _0 = /* @__PURE__ */ new Set(["td", "th"]), gd = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function T0(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = M0(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = N0(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? ms : m0,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = yd(i, e, void 0);
  return a && typeof a != "string" ? a : i.create(
    e,
    i.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function yd(e, t, n) {
  if (t.type === "element")
    return A0(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return P0(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return D0(e, t, n);
  if (t.type === "mdxjsEsm")
    return F0(e, t);
  if (t.type === "root")
    return R0(e, t, n);
  if (t.type === "text")
    return I0(e, t);
}
function A0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ms, e.schema = i), e.ancestors.push(t);
  const a = bd(e, t.tagName, !1), o = L0(e, t);
  let s = bs(e, t);
  return O0.has(t.tagName) && (s = s.filter(function(l) {
    return typeof l == "string" ? !a0(l) : !0;
  })), vd(e, o, a, t), vs(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function P0(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  Tr(e, t.position);
}
function F0(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Tr(e, t.position);
}
function D0(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = ms, e.schema = i), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : bd(e, t.name, !0), o = $0(e, t), s = bs(e, t);
  return vd(e, o, a, t), vs(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function R0(e, t, n) {
  const r = {};
  return vs(r, bs(e, t)), e.create(t, e.Fragment, r, n);
}
function I0(e, t) {
  return t.value;
}
function vd(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function vs(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function N0(e, t, n) {
  return r;
  function r(i, a, o, s) {
    const u = Array.isArray(o.children) ? n : t;
    return s ? u(a, o, s) : u(a, o);
  }
}
function M0(e, t) {
  return n;
  function n(r, i, a, o) {
    const s = Array.isArray(a.children), l = gs(r);
    return t(
      i,
      a,
      o,
      s,
      {
        columnNumber: l ? l.column - 1 : void 0,
        fileName: e,
        lineNumber: l ? l.line : void 0
      },
      void 0
    );
  }
}
function L0(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && ys.call(t.properties, i)) {
      const a = B0(e, i, t.properties[i]);
      if (a) {
        const [o, s] = a;
        e.tableCellAlignToStyle && o === "align" && typeof s == "string" && _0.has(t.tagName) ? r = s : n[o] = s;
      }
    }
  if (r) {
    const a = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function $0(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const a = r.data.estree.body[0];
        a.type;
        const o = a.expression;
        o.type;
        const s = o.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        Tr(e, t.position);
    else {
      const i = r.name;
      let a;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, a = e.evaluater.evaluateExpression(s.expression);
        } else
          Tr(e, t.position);
      else
        a = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      a;
    }
  return n;
}
function bs(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : E0;
  for (; ++r < t.children.length; ) {
    const a = t.children[r];
    let o;
    if (e.passKeys) {
      const l = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (l) {
        const u = i.get(l) || 0;
        o = l + "-" + u, i.set(l, u + 1);
      }
    }
    const s = yd(e, a, o);
    s !== void 0 && n.push(s);
  }
  return n;
}
function B0(e, t, n) {
  const r = d0(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? e0(n) : g0(n)), r.property === "style") {
      let i = typeof n == "object" ? n : j0(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = z0(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? u0[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function j0(e, t) {
  try {
    return S0(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new Ze("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = gd + "#cannot-parse-style-attribute", i;
  }
}
function bd(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let a = -1, o;
    for (; ++a < i.length; ) {
      const s = ql(i[a]) ? { type: "Identifier", name: i[a] } : { type: "Literal", value: i[a] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: s,
        computed: !!(a && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = o;
  } else
    r = ql(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return ys.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  Tr(e);
}
function Tr(e, t) {
  const n = new Ze(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = gd + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function z0(e) {
  const t = {};
  let n;
  for (n in e)
    ys.call(e, n) && (t[U0(n)] = e[n]);
  return t;
}
function U0(e) {
  let t = e.replace(k0, V0);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function V0(e) {
  return "-" + e.toLowerCase();
}
const Va = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, W0 = {};
function q0(e, t) {
  const n = W0, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return wd(e, r, i);
}
function wd(e, t, n) {
  if (H0(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return tu(e.children, t, n);
  }
  return Array.isArray(e) ? tu(e, t, n) : "";
}
function tu(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = wd(e[i], t, n);
  return r.join("");
}
function H0(e) {
  return !!(e && typeof e == "object");
}
const nu = document.createElement("i");
function ws(e) {
  const t = "&" + e + ";";
  nu.innerHTML = t;
  const n = nu.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
  );
}
function $t(e, t, n, r) {
  const i = e.length;
  let a = 0, o;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(t, n), e.splice(...o);
  else
    for (n && e.splice(t, n); a < r.length; )
      o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function xt(e, t) {
  return e.length > 0 ? ($t(e, e.length, 0, t), e) : t;
}
const ru = {}.hasOwnProperty;
function G0(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    Q0(t, e[n]);
  return t;
}
function Q0(e, t) {
  let n;
  for (n in t) {
    const i = (ru.call(e, n) ? e[n] : void 0) || (e[n] = {}), a = t[n];
    let o;
    if (a)
      for (o in a) {
        ru.call(i, o) || (i[o] = []);
        const s = a[o];
        Y0(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function Y0(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  $t(e, 0, 0, r);
}
function xd(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Hn(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const It = cn(/[A-Za-z]/), mt = cn(/[\dA-Za-z]/), K0 = cn(/[#-'*+\--9=?A-Z^-~]/);
function Do(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Ro = cn(/\d/), J0 = cn(/[\dA-Fa-f]/), X0 = cn(/[!-/:-@[-`{-~]/);
function de(e) {
  return e !== null && e < -2;
}
function ct(e) {
  return e !== null && (e < 0 || e === 32);
}
function Ee(e) {
  return e === -2 || e === -1 || e === 32;
}
const Z0 = cn(new RegExp("\\p{P}|\\p{S}", "u")), eb = cn(/\s/);
function cn(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function tr(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const a = e.charCodeAt(n);
    let o = "";
    if (a === 37 && mt(e.charCodeAt(n + 1)) && mt(e.charCodeAt(n + 2)))
      i = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const s = e.charCodeAt(n + 1);
      a < 56320 && s > 56319 && s < 57344 ? (o = String.fromCharCode(a, s), i = 1) : o = "�";
    } else
      o = String.fromCharCode(a);
    o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function Pe(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return o;
  function o(l) {
    return Ee(l) ? (e.enter(n), s(l)) : t(l);
  }
  function s(l) {
    return Ee(l) && a++ < i ? (e.consume(l), s) : (e.exit(n), t(l));
  }
}
const tb = {
  tokenize: nb
};
function nb(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), Pe(e, t, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), a(s);
  }
  function a(s) {
    const l = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, o(s);
  }
  function o(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return de(s) ? (e.consume(s), e.exit("chunkText"), a) : (e.consume(s), o);
  }
}
const rb = {
  tokenize: ib
}, iu = {
  tokenize: ab
};
function ib(e) {
  const t = this, n = [];
  let r = 0, i, a, o;
  return s;
  function s(x) {
    if (r < n.length) {
      const N = n[r];
      return t.containerState = N[1], e.attempt(N[0].continuation, l, u)(x);
    }
    return u(x);
  }
  function l(x) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && w();
      const N = t.events.length;
      let R = N, A;
      for (; R--; )
        if (t.events[R][0] === "exit" && t.events[R][1].type === "chunkFlow") {
          A = t.events[R][1].end;
          break;
        }
      g(r);
      let L = N;
      for (; L < t.events.length; )
        t.events[L][1].end = {
          ...A
        }, L++;
      return $t(t.events, R + 1, 0, t.events.slice(N)), t.events.length = L, u(x);
    }
    return s(x);
  }
  function u(x) {
    if (r === n.length) {
      if (!i)
        return h(x);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return p(x);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(iu, c, f)(x);
  }
  function c(x) {
    return i && w(), g(r), h(x);
  }
  function f(x) {
    return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, p(x);
  }
  function h(x) {
    return t.containerState = {}, e.attempt(iu, d, p)(x);
  }
  function d(x) {
    return r++, n.push([t.currentConstruct, t.containerState]), h(x);
  }
  function p(x) {
    if (x === null) {
      i && w(), g(0), e.consume(x);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: a
    }), m(x);
  }
  function m(x) {
    if (x === null) {
      y(e.exit("chunkFlow"), !0), g(0), e.consume(x);
      return;
    }
    return de(x) ? (e.consume(x), y(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(x), m);
  }
  function y(x, N) {
    const R = t.sliceStream(x);
    if (N && R.push(null), x.previous = a, a && (a.next = x), a = x, i.defineSkip(x.start), i.write(R), t.parser.lazy[x.start.line]) {
      let A = i.events.length;
      for (; A--; )
        if (
          // The token starts before the line ending…
          i.events[A][1].start.offset < o && // …and either is not ended yet…
          (!i.events[A][1].end || // …or ends after it.
          i.events[A][1].end.offset > o)
        )
          return;
      const L = t.events.length;
      let C = L, F, P;
      for (; C--; )
        if (t.events[C][0] === "exit" && t.events[C][1].type === "chunkFlow") {
          if (F) {
            P = t.events[C][1].end;
            break;
          }
          F = !0;
        }
      for (g(r), A = L; A < t.events.length; )
        t.events[A][1].end = {
          ...P
        }, A++;
      $t(t.events, C + 1, 0, t.events.slice(L)), t.events.length = A;
    }
  }
  function g(x) {
    let N = n.length;
    for (; N-- > x; ) {
      const R = n[N];
      t.containerState = R[1], R[0].exit.call(t, e);
    }
    n.length = x;
  }
  function w() {
    i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function ab(e, t, n) {
  return Pe(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function au(e) {
  if (e === null || ct(e) || eb(e))
    return 1;
  if (Z0(e))
    return 2;
}
function xs(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const a = e[i].resolveAll;
    a && !r.includes(a) && (t = a(t, n), r.push(a));
  }
  return t;
}
const Io = {
  name: "attention",
  resolveAll: ob,
  tokenize: sb
};
function ob(e, t) {
  let n = -1, r, i, a, o, s, l, u, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          l = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const f = {
            ...e[r][1].end
          }, h = {
            ...e[n][1].start
          };
          ou(f, -l), ou(h, l), o = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: h
          }, a = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...s.end
            }
          }, e[r][1].end = {
            ...o.start
          }, e[n][1].start = {
            ...s.end
          }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = xt(u, [["enter", e[r][1], t], ["exit", e[r][1], t]])), u = xt(u, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["enter", a, t]]), u = xt(u, xs(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), u = xt(u, [["exit", a, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, u = xt(u, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, $t(e, r - 1, n - r + 3, u), n = r + u.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function sb(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = au(r);
  let a;
  return o;
  function o(l) {
    return a = l, e.enter("attentionSequence"), s(l);
  }
  function s(l) {
    if (l === a)
      return e.consume(l), s;
    const u = e.exit("attentionSequence"), c = au(l), f = !c || c === 2 && i || n.includes(l), h = !i || i === 2 && c || n.includes(r);
    return u._open = !!(a === 42 ? f : f && (i || !h)), u._close = !!(a === 42 ? h : h && (c || !f)), t(l);
  }
}
function ou(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const lb = {
  name: "autolink",
  tokenize: ub
};
function ub(e, t, n) {
  let r = 0;
  return i;
  function i(d) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(d) {
    return It(d) ? (e.consume(d), o) : d === 64 ? n(d) : u(d);
  }
  function o(d) {
    return d === 43 || d === 45 || d === 46 || mt(d) ? (r = 1, s(d)) : u(d);
  }
  function s(d) {
    return d === 58 ? (e.consume(d), r = 0, l) : (d === 43 || d === 45 || d === 46 || mt(d)) && r++ < 32 ? (e.consume(d), s) : (r = 0, u(d));
  }
  function l(d) {
    return d === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : d === null || d === 32 || d === 60 || Do(d) ? n(d) : (e.consume(d), l);
  }
  function u(d) {
    return d === 64 ? (e.consume(d), c) : K0(d) ? (e.consume(d), u) : n(d);
  }
  function c(d) {
    return mt(d) ? f(d) : n(d);
  }
  function f(d) {
    return d === 46 ? (e.consume(d), r = 0, c) : d === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(d), e.exit("autolinkMarker"), e.exit("autolink"), t) : h(d);
  }
  function h(d) {
    if ((d === 45 || mt(d)) && r++ < 63) {
      const p = d === 45 ? h : f;
      return e.consume(d), p;
    }
    return n(d);
  }
}
const va = {
  partial: !0,
  tokenize: cb
};
function cb(e, t, n) {
  return r;
  function r(a) {
    return Ee(a) ? Pe(e, i, "linePrefix")(a) : i(a);
  }
  function i(a) {
    return a === null || de(a) ? t(a) : n(a);
  }
}
const Sd = {
  continuation: {
    tokenize: db
  },
  exit: hb,
  name: "blockQuote",
  tokenize: fb
};
function fb(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(o), e.exit("blockQuoteMarker"), a;
    }
    return n(o);
  }
  function a(o) {
    return Ee(o) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(o), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(o));
  }
}
function db(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return Ee(o) ? Pe(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : a(o);
  }
  function a(o) {
    return e.attempt(Sd, t, n)(o);
  }
}
function hb(e) {
  e.exit("blockQuote");
}
const Cd = {
  name: "characterEscape",
  tokenize: pb
};
function pb(e, t, n) {
  return r;
  function r(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), i;
  }
  function i(a) {
    return X0(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(a);
  }
}
const Ed = {
  name: "characterReference",
  tokenize: mb
};
function mb(e, t, n) {
  const r = this;
  let i = 0, a, o;
  return s;
  function s(f) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), l;
  }
  function l(f) {
    return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), a = 31, o = mt, c(f));
  }
  function u(f) {
    return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = J0, c) : (e.enter("characterReferenceValue"), a = 7, o = Ro, c(f));
  }
  function c(f) {
    if (f === 59 && i) {
      const h = e.exit("characterReferenceValue");
      return o === mt && !ws(r.sliceSerialize(h)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return o(f) && i++ < a ? (e.consume(f), c) : n(f);
  }
}
const su = {
  partial: !0,
  tokenize: yb
}, lu = {
  concrete: !0,
  name: "codeFenced",
  tokenize: gb
};
function gb(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: R
  };
  let a = 0, o = 0, s;
  return l;
  function l(A) {
    return u(A);
  }
  function u(A) {
    const L = r.events[r.events.length - 1];
    return a = L && L[1].type === "linePrefix" ? L[2].sliceSerialize(L[1], !0).length : 0, s = A, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(A);
  }
  function c(A) {
    return A === s ? (o++, e.consume(A), c) : o < 3 ? n(A) : (e.exit("codeFencedFenceSequence"), Ee(A) ? Pe(e, f, "whitespace")(A) : f(A));
  }
  function f(A) {
    return A === null || de(A) ? (e.exit("codeFencedFence"), r.interrupt ? t(A) : e.check(su, m, N)(A)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), h(A));
  }
  function h(A) {
    return A === null || de(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(A)) : Ee(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), Pe(e, d, "whitespace")(A)) : A === 96 && A === s ? n(A) : (e.consume(A), h);
  }
  function d(A) {
    return A === null || de(A) ? f(A) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), p(A));
  }
  function p(A) {
    return A === null || de(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(A)) : A === 96 && A === s ? n(A) : (e.consume(A), p);
  }
  function m(A) {
    return e.attempt(i, N, y)(A);
  }
  function y(A) {
    return e.enter("lineEnding"), e.consume(A), e.exit("lineEnding"), g;
  }
  function g(A) {
    return a > 0 && Ee(A) ? Pe(e, w, "linePrefix", a + 1)(A) : w(A);
  }
  function w(A) {
    return A === null || de(A) ? e.check(su, m, N)(A) : (e.enter("codeFlowValue"), x(A));
  }
  function x(A) {
    return A === null || de(A) ? (e.exit("codeFlowValue"), w(A)) : (e.consume(A), x);
  }
  function N(A) {
    return e.exit("codeFenced"), t(A);
  }
  function R(A, L, C) {
    let F = 0;
    return P;
    function P(M) {
      return A.enter("lineEnding"), A.consume(M), A.exit("lineEnding"), b;
    }
    function b(M) {
      return A.enter("codeFencedFence"), Ee(M) ? Pe(A, E, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(M) : E(M);
    }
    function E(M) {
      return M === s ? (A.enter("codeFencedFenceSequence"), O(M)) : C(M);
    }
    function O(M) {
      return M === s ? (F++, A.consume(M), O) : F >= o ? (A.exit("codeFencedFenceSequence"), Ee(M) ? Pe(A, T, "whitespace")(M) : T(M)) : C(M);
    }
    function T(M) {
      return M === null || de(M) ? (A.exit("codeFencedFence"), L(M)) : C(M);
    }
  }
}
function yb(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
const Wa = {
  name: "codeIndented",
  tokenize: bb
}, vb = {
  partial: !0,
  tokenize: wb
};
function bb(e, t, n) {
  const r = this;
  return i;
  function i(u) {
    return e.enter("codeIndented"), Pe(e, a, "linePrefix", 5)(u);
  }
  function a(u) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? o(u) : n(u);
  }
  function o(u) {
    return u === null ? l(u) : de(u) ? e.attempt(vb, o, l)(u) : (e.enter("codeFlowValue"), s(u));
  }
  function s(u) {
    return u === null || de(u) ? (e.exit("codeFlowValue"), o(u)) : (e.consume(u), s);
  }
  function l(u) {
    return e.exit("codeIndented"), t(u);
  }
}
function wb(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : de(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), i) : Pe(e, a, "linePrefix", 5)(o);
  }
  function a(o) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : de(o) ? i(o) : n(o);
  }
}
const xb = {
  name: "codeText",
  previous: Cb,
  resolve: Sb,
  tokenize: Eb
};
function Sb(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function Cb(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Eb(e, t, n) {
  let r = 0, i, a;
  return o;
  function o(f) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(f);
  }
  function s(f) {
    return f === 96 ? (e.consume(f), r++, s) : (e.exit("codeTextSequence"), l(f));
  }
  function l(f) {
    return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), l) : f === 96 ? (a = e.enter("codeTextSequence"), i = 0, c(f)) : de(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), l) : (e.enter("codeTextData"), u(f));
  }
  function u(f) {
    return f === null || f === 32 || f === 96 || de(f) ? (e.exit("codeTextData"), l(f)) : (e.consume(f), u);
  }
  function c(f) {
    return f === 96 ? (e.consume(f), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (a.type = "codeTextData", u(f));
  }
}
class kb {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && dr(this.left, r), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), dr(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), dr(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        dr(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        dr(this.left, n.reverse());
      }
  }
}
function dr(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function kd(e) {
  const t = {};
  let n = -1, r, i, a, o, s, l, u;
  const c = new kb(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, a = 0, a < l.length && l[a][1].type === "lineEndingBlank" && (a += 2), a < l.length && l[a][1].type === "content"))
      for (; ++a < l.length && l[a][1].type !== "content"; )
        l[a][1].type === "chunkText" && (l[a][1]._isInFirstContentOfListItem = !0, a++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Ob(c, n)), n = t[n], u = !0);
    else if (r[1]._container) {
      for (a = n, i = void 0; a--; )
        if (o = c.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, s = c.slice(i, n), s.unshift(r), c.splice(i, n - i + 1, s));
    }
  }
  return $t(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !u;
}
function Ob(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const a = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const s = o.events, l = [], u = {};
  let c, f, h = -1, d = n, p = 0, m = 0;
  const y = [m];
  for (; d; ) {
    for (; e.get(++i)[1] !== d; )
      ;
    a.push(i), d._tokenizer || (c = r.sliceStream(d), d.next || c.push(null), f && o.defineSkip(d.start), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(c), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), f = d, d = d.next;
  }
  for (d = n; ++h < s.length; )
    // Find a void token that includes a break.
    s[h][0] === "exit" && s[h - 1][0] === "enter" && s[h][1].type === s[h - 1][1].type && s[h][1].start.line !== s[h][1].end.line && (m = h + 1, y.push(m), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (o.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : y.pop(), h = y.length; h--; ) {
    const g = s.slice(y[h], y[h + 1]), w = a.pop();
    l.push([w, w + g.length - 1]), e.splice(w, 2, g);
  }
  for (l.reverse(), h = -1; ++h < l.length; )
    u[p + l[h][0]] = p + l[h][1], p += l[h][1] - l[h][0] - 1;
  return u;
}
const _b = {
  resolve: Ab,
  tokenize: Pb
}, Tb = {
  partial: !0,
  tokenize: Fb
};
function Ab(e) {
  return kd(e), e;
}
function Pb(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? a(s) : de(s) ? e.check(Tb, o, a)(s) : (e.consume(s), i);
  }
  function a(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function o(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Fb(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), Pe(e, a, "linePrefix");
  }
  function a(o) {
    if (o === null || de(o))
      return n(o);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o);
  }
}
function Od(e, t, n, r, i, a, o, s, l) {
  const u = l || Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(g) {
    return g === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(g), e.exit(a), h) : g === null || g === 32 || g === 41 || Do(g) ? n(g) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), m(g));
  }
  function h(g) {
    return g === 62 ? (e.enter(a), e.consume(g), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), d(g));
  }
  function d(g) {
    return g === 62 ? (e.exit("chunkString"), e.exit(s), h(g)) : g === null || g === 60 || de(g) ? n(g) : (e.consume(g), g === 92 ? p : d);
  }
  function p(g) {
    return g === 60 || g === 62 || g === 92 ? (e.consume(g), d) : d(g);
  }
  function m(g) {
    return !c && (g === null || g === 41 || ct(g)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(g)) : c < u && g === 40 ? (e.consume(g), c++, m) : g === 41 ? (e.consume(g), c--, m) : g === null || g === 32 || g === 40 || Do(g) ? n(g) : (e.consume(g), g === 92 ? y : m);
  }
  function y(g) {
    return g === 40 || g === 41 || g === 92 ? (e.consume(g), m) : m(g);
  }
}
function _d(e, t, n, r, i, a) {
  const o = this;
  let s = 0, l;
  return u;
  function u(d) {
    return e.enter(r), e.enter(i), e.consume(d), e.exit(i), e.enter(a), c;
  }
  function c(d) {
    return s > 999 || d === null || d === 91 || d === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(d) : d === 93 ? (e.exit(a), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : de(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), f(d));
  }
  function f(d) {
    return d === null || d === 91 || d === 93 || de(d) || s++ > 999 ? (e.exit("chunkString"), c(d)) : (e.consume(d), l || (l = !Ee(d)), d === 92 ? h : f);
  }
  function h(d) {
    return d === 91 || d === 92 || d === 93 ? (e.consume(d), s++, f) : f(d);
  }
}
function Td(e, t, n, r, i, a) {
  let o;
  return s;
  function s(h) {
    return h === 34 || h === 39 || h === 40 ? (e.enter(r), e.enter(i), e.consume(h), e.exit(i), o = h === 40 ? 41 : h, l) : n(h);
  }
  function l(h) {
    return h === o ? (e.enter(i), e.consume(h), e.exit(i), e.exit(r), t) : (e.enter(a), u(h));
  }
  function u(h) {
    return h === o ? (e.exit(a), l(o)) : h === null ? n(h) : de(h) ? (e.enter("lineEnding"), e.consume(h), e.exit("lineEnding"), Pe(e, u, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(h));
  }
  function c(h) {
    return h === o || h === null || de(h) ? (e.exit("chunkString"), u(h)) : (e.consume(h), h === 92 ? f : c);
  }
  function f(h) {
    return h === o || h === 92 ? (e.consume(h), c) : c(h);
  }
}
function Cr(e, t) {
  let n;
  return r;
  function r(i) {
    return de(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Ee(i) ? Pe(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Db = {
  name: "definition",
  tokenize: Ib
}, Rb = {
  partial: !0,
  tokenize: Nb
};
function Ib(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(d) {
    return e.enter("definition"), o(d);
  }
  function o(d) {
    return _d.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function s(d) {
    return i = Hn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (e.enter("definitionMarker"), e.consume(d), e.exit("definitionMarker"), l) : n(d);
  }
  function l(d) {
    return ct(d) ? Cr(e, u)(d) : u(d);
  }
  function u(d) {
    return Od(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function c(d) {
    return e.attempt(Rb, f, f)(d);
  }
  function f(d) {
    return Ee(d) ? Pe(e, h, "whitespace")(d) : h(d);
  }
  function h(d) {
    return d === null || de(d) ? (e.exit("definition"), r.parser.defined.push(i), t(d)) : n(d);
  }
}
function Nb(e, t, n) {
  return r;
  function r(s) {
    return ct(s) ? Cr(e, i)(s) : n(s);
  }
  function i(s) {
    return Td(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function a(s) {
    return Ee(s) ? Pe(e, o, "whitespace")(s) : o(s);
  }
  function o(s) {
    return s === null || de(s) ? t(s) : n(s);
  }
}
const Mb = {
  name: "hardBreakEscape",
  tokenize: Lb
};
function Lb(e, t, n) {
  return r;
  function r(a) {
    return e.enter("hardBreakEscape"), e.consume(a), i;
  }
  function i(a) {
    return de(a) ? (e.exit("hardBreakEscape"), t(a)) : n(a);
  }
}
const $b = {
  name: "headingAtx",
  resolve: Bb,
  tokenize: jb
};
function Bb(e, t) {
  let n = e.length - 2, r = 3, i, a;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, a = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, $t(e, r, n - r + 1, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["exit", i, t]])), e;
}
function jb(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), a(c);
  }
  function a(c) {
    return e.enter("atxHeadingSequence"), o(c);
  }
  function o(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), o) : c === null || ct(c) ? (e.exit("atxHeadingSequence"), s(c)) : n(c);
  }
  function s(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), l(c)) : c === null || de(c) ? (e.exit("atxHeading"), t(c)) : Ee(c) ? Pe(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), u(c));
  }
  function l(c) {
    return c === 35 ? (e.consume(c), l) : (e.exit("atxHeadingSequence"), s(c));
  }
  function u(c) {
    return c === null || c === 35 || ct(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), u);
  }
}
const zb = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], uu = ["pre", "script", "style", "textarea"], Ub = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: qb,
  tokenize: Hb
}, Vb = {
  partial: !0,
  tokenize: Qb
}, Wb = {
  partial: !0,
  tokenize: Gb
};
function qb(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Hb(e, t, n) {
  const r = this;
  let i, a, o, s, l;
  return u;
  function u(k) {
    return c(k);
  }
  function c(k) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(k), f;
  }
  function f(k) {
    return k === 33 ? (e.consume(k), h) : k === 47 ? (e.consume(k), a = !0, m) : k === 63 ? (e.consume(k), i = 3, r.interrupt ? t : S) : It(k) ? (e.consume(k), o = String.fromCharCode(k), y) : n(k);
  }
  function h(k) {
    return k === 45 ? (e.consume(k), i = 2, d) : k === 91 ? (e.consume(k), i = 5, s = 0, p) : It(k) ? (e.consume(k), i = 4, r.interrupt ? t : S) : n(k);
  }
  function d(k) {
    return k === 45 ? (e.consume(k), r.interrupt ? t : S) : n(k);
  }
  function p(k) {
    const ae = "CDATA[";
    return k === ae.charCodeAt(s++) ? (e.consume(k), s === ae.length ? r.interrupt ? t : E : p) : n(k);
  }
  function m(k) {
    return It(k) ? (e.consume(k), o = String.fromCharCode(k), y) : n(k);
  }
  function y(k) {
    if (k === null || k === 47 || k === 62 || ct(k)) {
      const ae = k === 47, oe = o.toLowerCase();
      return !ae && !a && uu.includes(oe) ? (i = 1, r.interrupt ? t(k) : E(k)) : zb.includes(o.toLowerCase()) ? (i = 6, ae ? (e.consume(k), g) : r.interrupt ? t(k) : E(k)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(k) : a ? w(k) : x(k));
    }
    return k === 45 || mt(k) ? (e.consume(k), o += String.fromCharCode(k), y) : n(k);
  }
  function g(k) {
    return k === 62 ? (e.consume(k), r.interrupt ? t : E) : n(k);
  }
  function w(k) {
    return Ee(k) ? (e.consume(k), w) : P(k);
  }
  function x(k) {
    return k === 47 ? (e.consume(k), P) : k === 58 || k === 95 || It(k) ? (e.consume(k), N) : Ee(k) ? (e.consume(k), x) : P(k);
  }
  function N(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || mt(k) ? (e.consume(k), N) : R(k);
  }
  function R(k) {
    return k === 61 ? (e.consume(k), A) : Ee(k) ? (e.consume(k), R) : x(k);
  }
  function A(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96 ? n(k) : k === 34 || k === 39 ? (e.consume(k), l = k, L) : Ee(k) ? (e.consume(k), A) : C(k);
  }
  function L(k) {
    return k === l ? (e.consume(k), l = null, F) : k === null || de(k) ? n(k) : (e.consume(k), L);
  }
  function C(k) {
    return k === null || k === 34 || k === 39 || k === 47 || k === 60 || k === 61 || k === 62 || k === 96 || ct(k) ? R(k) : (e.consume(k), C);
  }
  function F(k) {
    return k === 47 || k === 62 || Ee(k) ? x(k) : n(k);
  }
  function P(k) {
    return k === 62 ? (e.consume(k), b) : n(k);
  }
  function b(k) {
    return k === null || de(k) ? E(k) : Ee(k) ? (e.consume(k), b) : n(k);
  }
  function E(k) {
    return k === 45 && i === 2 ? (e.consume(k), B) : k === 60 && i === 1 ? (e.consume(k), z) : k === 62 && i === 4 ? (e.consume(k), J) : k === 63 && i === 3 ? (e.consume(k), S) : k === 93 && i === 5 ? (e.consume(k), K) : de(k) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Vb, ee, O)(k)) : k === null || de(k) ? (e.exit("htmlFlowData"), O(k)) : (e.consume(k), E);
  }
  function O(k) {
    return e.check(Wb, T, ee)(k);
  }
  function T(k) {
    return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), M;
  }
  function M(k) {
    return k === null || de(k) ? O(k) : (e.enter("htmlFlowData"), E(k));
  }
  function B(k) {
    return k === 45 ? (e.consume(k), S) : E(k);
  }
  function z(k) {
    return k === 47 ? (e.consume(k), o = "", H) : E(k);
  }
  function H(k) {
    if (k === 62) {
      const ae = o.toLowerCase();
      return uu.includes(ae) ? (e.consume(k), J) : E(k);
    }
    return It(k) && o.length < 8 ? (e.consume(k), o += String.fromCharCode(k), H) : E(k);
  }
  function K(k) {
    return k === 93 ? (e.consume(k), S) : E(k);
  }
  function S(k) {
    return k === 62 ? (e.consume(k), J) : k === 45 && i === 2 ? (e.consume(k), S) : E(k);
  }
  function J(k) {
    return k === null || de(k) ? (e.exit("htmlFlowData"), ee(k)) : (e.consume(k), J);
  }
  function ee(k) {
    return e.exit("htmlFlow"), t(k);
  }
}
function Gb(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return de(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), a) : n(o);
  }
  function a(o) {
    return r.parser.lazy[r.now().line] ? n(o) : t(o);
  }
}
function Qb(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(va, t, n);
  }
}
const Yb = {
  name: "htmlText",
  tokenize: Kb
};
function Kb(e, t, n) {
  const r = this;
  let i, a, o;
  return s;
  function s(S) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(S), l;
  }
  function l(S) {
    return S === 33 ? (e.consume(S), u) : S === 47 ? (e.consume(S), R) : S === 63 ? (e.consume(S), x) : It(S) ? (e.consume(S), C) : n(S);
  }
  function u(S) {
    return S === 45 ? (e.consume(S), c) : S === 91 ? (e.consume(S), a = 0, p) : It(S) ? (e.consume(S), w) : n(S);
  }
  function c(S) {
    return S === 45 ? (e.consume(S), d) : n(S);
  }
  function f(S) {
    return S === null ? n(S) : S === 45 ? (e.consume(S), h) : de(S) ? (o = f, z(S)) : (e.consume(S), f);
  }
  function h(S) {
    return S === 45 ? (e.consume(S), d) : f(S);
  }
  function d(S) {
    return S === 62 ? B(S) : S === 45 ? h(S) : f(S);
  }
  function p(S) {
    const J = "CDATA[";
    return S === J.charCodeAt(a++) ? (e.consume(S), a === J.length ? m : p) : n(S);
  }
  function m(S) {
    return S === null ? n(S) : S === 93 ? (e.consume(S), y) : de(S) ? (o = m, z(S)) : (e.consume(S), m);
  }
  function y(S) {
    return S === 93 ? (e.consume(S), g) : m(S);
  }
  function g(S) {
    return S === 62 ? B(S) : S === 93 ? (e.consume(S), g) : m(S);
  }
  function w(S) {
    return S === null || S === 62 ? B(S) : de(S) ? (o = w, z(S)) : (e.consume(S), w);
  }
  function x(S) {
    return S === null ? n(S) : S === 63 ? (e.consume(S), N) : de(S) ? (o = x, z(S)) : (e.consume(S), x);
  }
  function N(S) {
    return S === 62 ? B(S) : x(S);
  }
  function R(S) {
    return It(S) ? (e.consume(S), A) : n(S);
  }
  function A(S) {
    return S === 45 || mt(S) ? (e.consume(S), A) : L(S);
  }
  function L(S) {
    return de(S) ? (o = L, z(S)) : Ee(S) ? (e.consume(S), L) : B(S);
  }
  function C(S) {
    return S === 45 || mt(S) ? (e.consume(S), C) : S === 47 || S === 62 || ct(S) ? F(S) : n(S);
  }
  function F(S) {
    return S === 47 ? (e.consume(S), B) : S === 58 || S === 95 || It(S) ? (e.consume(S), P) : de(S) ? (o = F, z(S)) : Ee(S) ? (e.consume(S), F) : B(S);
  }
  function P(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || mt(S) ? (e.consume(S), P) : b(S);
  }
  function b(S) {
    return S === 61 ? (e.consume(S), E) : de(S) ? (o = b, z(S)) : Ee(S) ? (e.consume(S), b) : F(S);
  }
  function E(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? n(S) : S === 34 || S === 39 ? (e.consume(S), i = S, O) : de(S) ? (o = E, z(S)) : Ee(S) ? (e.consume(S), E) : (e.consume(S), T);
  }
  function O(S) {
    return S === i ? (e.consume(S), i = void 0, M) : S === null ? n(S) : de(S) ? (o = O, z(S)) : (e.consume(S), O);
  }
  function T(S) {
    return S === null || S === 34 || S === 39 || S === 60 || S === 61 || S === 96 ? n(S) : S === 47 || S === 62 || ct(S) ? F(S) : (e.consume(S), T);
  }
  function M(S) {
    return S === 47 || S === 62 || ct(S) ? F(S) : n(S);
  }
  function B(S) {
    return S === 62 ? (e.consume(S), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(S);
  }
  function z(S) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), H;
  }
  function H(S) {
    return Ee(S) ? Pe(e, K, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : K(S);
  }
  function K(S) {
    return e.enter("htmlTextData"), o(S);
  }
}
const Ss = {
  name: "labelEnd",
  resolveAll: ew,
  resolveTo: tw,
  tokenize: nw
}, Jb = {
  tokenize: rw
}, Xb = {
  tokenize: iw
}, Zb = {
  tokenize: aw
};
function ew(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && $t(e, 0, e.length, n), e;
}
function tw(e, t) {
  let n = e.length, r = 0, i, a, o, s;
  for (; n--; )
    if (i = e[n][1], a) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const l = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[o][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[a + r + 2][1].end
    },
    end: {
      ...e[o - 2][1].start
    }
  };
  return s = [["enter", l, t], ["enter", u, t]], s = xt(s, e.slice(a + 1, a + r + 3)), s = xt(s, [["enter", c, t]]), s = xt(s, xs(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = xt(s, [["exit", c, t], e[o - 2], e[o - 1], ["exit", u, t]]), s = xt(s, e.slice(o + 1)), s = xt(s, [["exit", l, t]]), $t(e, a, e.length, s), e;
}
function nw(e, t, n) {
  const r = this;
  let i = r.events.length, a, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      a = r.events[i][1];
      break;
    }
  return s;
  function s(h) {
    return a ? a._inactive ? f(h) : (o = r.parser.defined.includes(Hn(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(h), e.exit("labelMarker"), e.exit("labelEnd"), l) : n(h);
  }
  function l(h) {
    return h === 40 ? e.attempt(Jb, c, o ? c : f)(h) : h === 91 ? e.attempt(Xb, c, o ? u : f)(h) : o ? c(h) : f(h);
  }
  function u(h) {
    return e.attempt(Zb, c, f)(h);
  }
  function c(h) {
    return t(h);
  }
  function f(h) {
    return a._balanced = !0, n(h);
  }
}
function rw(e, t, n) {
  return r;
  function r(f) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
  }
  function i(f) {
    return ct(f) ? Cr(e, a)(f) : a(f);
  }
  function a(f) {
    return f === 41 ? c(f) : Od(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
  }
  function o(f) {
    return ct(f) ? Cr(e, l)(f) : c(f);
  }
  function s(f) {
    return n(f);
  }
  function l(f) {
    return f === 34 || f === 39 || f === 40 ? Td(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : c(f);
  }
  function u(f) {
    return ct(f) ? Cr(e, c)(f) : c(f);
  }
  function c(f) {
    return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
  }
}
function iw(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return _d.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(s);
  }
  function a(s) {
    return r.parser.defined.includes(Hn(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function o(s) {
    return n(s);
  }
}
function aw(e, t, n) {
  return r;
  function r(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), i;
  }
  function i(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : n(a);
  }
}
const ow = {
  name: "labelStartImage",
  resolveAll: Ss.resolveAll,
  tokenize: sw
};
function sw(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), a;
  }
  function a(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), o) : n(s);
  }
  function o(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const lw = {
  name: "labelStartLink",
  resolveAll: Ss.resolveAll,
  tokenize: uw
};
function uw(e, t, n) {
  const r = this;
  return i;
  function i(o) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(o), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : t(o);
  }
}
const qa = {
  name: "lineEnding",
  tokenize: cw
};
function cw(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), Pe(e, t, "linePrefix");
  }
}
const Si = {
  name: "thematicBreak",
  tokenize: fw
};
function fw(e, t, n) {
  let r = 0, i;
  return a;
  function a(u) {
    return e.enter("thematicBreak"), o(u);
  }
  function o(u) {
    return i = u, s(u);
  }
  function s(u) {
    return u === i ? (e.enter("thematicBreakSequence"), l(u)) : r >= 3 && (u === null || de(u)) ? (e.exit("thematicBreak"), t(u)) : n(u);
  }
  function l(u) {
    return u === i ? (e.consume(u), r++, l) : (e.exit("thematicBreakSequence"), Ee(u) ? Pe(e, s, "whitespace")(u) : s(u));
  }
}
const it = {
  continuation: {
    tokenize: mw
  },
  exit: yw,
  name: "list",
  tokenize: pw
}, dw = {
  partial: !0,
  tokenize: vw
}, hw = {
  partial: !0,
  tokenize: gw
};
function pw(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return s;
  function s(d) {
    const p = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (p === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : Ro(d)) {
      if (r.containerState.type || (r.containerState.type = p, e.enter(p, {
        _container: !0
      })), p === "listUnordered")
        return e.enter("listItemPrefix"), d === 42 || d === 45 ? e.check(Si, n, u)(d) : u(d);
      if (!r.interrupt || d === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), l(d);
    }
    return n(d);
  }
  function l(d) {
    return Ro(d) && ++o < 10 ? (e.consume(d), l) : (!r.interrupt || o < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (e.exit("listItemValue"), u(d)) : n(d);
  }
  function u(d) {
    return e.enter("listItemMarker"), e.consume(d), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, e.check(
      va,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(dw, h, f)
    );
  }
  function c(d) {
    return r.containerState.initialBlankLine = !0, a++, h(d);
  }
  function f(d) {
    return Ee(d) ? (e.enter("listItemPrefixWhitespace"), e.consume(d), e.exit("listItemPrefixWhitespace"), h) : n(d);
  }
  function h(d) {
    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(d);
  }
}
function mw(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(va, i, a);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, Pe(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function a(s) {
    return r.containerState.furtherBlankLines || !Ee(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(hw, t, o)(s));
  }
  function o(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, Pe(e, e.attempt(it, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function gw(e, t, n) {
  const r = this;
  return Pe(e, i, "listItemIndent", r.containerState.size + 1);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(a) : n(a);
  }
}
function yw(e) {
  e.exit(this.containerState.type);
}
function vw(e, t, n) {
  const r = this;
  return Pe(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(a) {
    const o = r.events[r.events.length - 1];
    return !Ee(a) && o && o[1].type === "listItemPrefixWhitespace" ? t(a) : n(a);
  }
}
const cu = {
  name: "setextUnderline",
  resolveTo: bw,
  tokenize: ww
};
function bw(e, t) {
  let n = e.length, r, i, a;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
  const o = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, ["enter", o, t]), e.splice(a + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[a][1].end
  }) : e[r][1] = o, e.push(["exit", o, t]), e;
}
function ww(e, t, n) {
  const r = this;
  let i;
  return a;
  function a(u) {
    let c = r.events.length, f;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        f = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = u, o(u)) : n(u);
  }
  function o(u) {
    return e.enter("setextHeadingLineSequence"), s(u);
  }
  function s(u) {
    return u === i ? (e.consume(u), s) : (e.exit("setextHeadingLineSequence"), Ee(u) ? Pe(e, l, "lineSuffix")(u) : l(u));
  }
  function l(u) {
    return u === null || de(u) ? (e.exit("setextHeadingLine"), t(u)) : n(u);
  }
}
const xw = {
  tokenize: Sw
};
function Sw(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    va,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, Pe(e, e.attempt(this.parser.constructs.flow, i, e.attempt(_b, i)), "linePrefix"))
  );
  return n;
  function r(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const Cw = {
  resolveAll: Pd()
}, Ew = Ad("string"), kw = Ad("text");
function Ad(e) {
  return {
    resolveAll: Pd(e === "text" ? Ow : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], a = n.attempt(i, o, s);
    return o;
    function o(c) {
      return u(c) ? a(c) : s(c);
    }
    function s(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), l;
    }
    function l(c) {
      return u(c) ? (n.exit("data"), a(c)) : (n.consume(c), l);
    }
    function u(c) {
      if (c === null)
        return !0;
      const f = i[c];
      let h = -1;
      if (f)
        for (; ++h < f.length; ) {
          const d = f[h];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Pd(e) {
  return t;
  function t(n, r) {
    let i = -1, a;
    for (; ++i <= n.length; )
      a === void 0 ? n[i] && n[i][1].type === "data" && (a = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== a + 2 && (n[a][1].end = n[i - 1][1].end, n.splice(a + 2, i - a - 2), i = a + 2), a = void 0);
    return e ? e(n, r) : n;
  }
}
function Ow(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let a = i.length, o = -1, s = 0, l;
      for (; a--; ) {
        const u = i[a];
        if (typeof u == "string") {
          for (o = u.length; u.charCodeAt(o - 1) === 32; )
            s++, o--;
          if (o) break;
          o = -1;
        } else if (u === -2)
          l = !0, s++;
        else if (u !== -1) {
          a++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
        const u = {
          type: n === e.length || l || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? o : r.start._bufferIndex + o,
            _index: r.start._index + a,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), n += 2);
      }
      n++;
    }
  return e;
}
const _w = {
  42: it,
  43: it,
  45: it,
  48: it,
  49: it,
  50: it,
  51: it,
  52: it,
  53: it,
  54: it,
  55: it,
  56: it,
  57: it,
  62: Sd
}, Tw = {
  91: Db
}, Aw = {
  [-2]: Wa,
  [-1]: Wa,
  32: Wa
}, Pw = {
  35: $b,
  42: Si,
  45: [cu, Si],
  60: Ub,
  61: cu,
  95: Si,
  96: lu,
  126: lu
}, Fw = {
  38: Ed,
  92: Cd
}, Dw = {
  [-5]: qa,
  [-4]: qa,
  [-3]: qa,
  33: ow,
  38: Ed,
  42: Io,
  60: [lb, Yb],
  91: lw,
  92: [Mb, Cd],
  93: Ss,
  95: Io,
  96: xb
}, Rw = {
  null: [Io, Cw]
}, Iw = {
  null: [42, 95]
}, Nw = {
  null: []
}, Mw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Iw,
  contentInitial: Tw,
  disable: Nw,
  document: _w,
  flow: Pw,
  flowInitial: Aw,
  insideSpan: Rw,
  string: Fw,
  text: Dw
}, Symbol.toStringTag, { value: "Module" }));
function Lw(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, a = [];
  let o = [], s = [];
  const l = {
    attempt: L(R),
    check: L(A),
    consume: w,
    enter: x,
    exit: N,
    interrupt: L(A, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: m,
    events: [],
    now: p,
    parser: e,
    previous: null,
    sliceSerialize: h,
    sliceStream: d,
    write: f
  };
  let c = t.tokenize.call(u, l);
  return t.resolveAll && a.push(t), u;
  function f(b) {
    return o = xt(o, b), y(), o[o.length - 1] !== null ? [] : (C(t, 0), u.events = xs(a, u.events, u), u.events);
  }
  function h(b, E) {
    return Bw(d(b), E);
  }
  function d(b) {
    return $w(o, b);
  }
  function p() {
    const {
      _bufferIndex: b,
      _index: E,
      line: O,
      column: T,
      offset: M
    } = r;
    return {
      _bufferIndex: b,
      _index: E,
      line: O,
      column: T,
      offset: M
    };
  }
  function m(b) {
    i[b.line] = b.column, P();
  }
  function y() {
    let b;
    for (; r._index < o.length; ) {
      const E = o[r._index];
      if (typeof E == "string")
        for (b = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === b && r._bufferIndex < E.length; )
          g(E.charCodeAt(r._bufferIndex));
      else
        g(E);
    }
  }
  function g(b) {
    c = c(b);
  }
  function w(b) {
    de(b) ? (r.line++, r.column = 1, r.offset += b === -3 ? 2 : 1, P()) : b !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = b;
  }
  function x(b, E) {
    const O = E || {};
    return O.type = b, O.start = p(), u.events.push(["enter", O, u]), s.push(O), O;
  }
  function N(b) {
    const E = s.pop();
    return E.end = p(), u.events.push(["exit", E, u]), E;
  }
  function R(b, E) {
    C(b, E.from);
  }
  function A(b, E) {
    E.restore();
  }
  function L(b, E) {
    return O;
    function O(T, M, B) {
      let z, H, K, S;
      return Array.isArray(T) ? (
        /* c8 ignore next 1 */
        ee(T)
      ) : "tokenize" in T ? (
        // Looks like a construct.
        ee([
          /** @type {Construct} */
          T
        ])
      ) : J(T);
      function J(ne) {
        return le;
        function le(we) {
          const he = we !== null && ne[we], be = we !== null && ne.null, ie = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(he) ? he : he ? [he] : [],
            ...Array.isArray(be) ? be : be ? [be] : []
          ];
          return ee(ie)(we);
        }
      }
      function ee(ne) {
        return z = ne, H = 0, ne.length === 0 ? B : k(ne[H]);
      }
      function k(ne) {
        return le;
        function le(we) {
          return S = F(), K = ne, ne.partial || (u.currentConstruct = ne), ne.name && u.parser.constructs.disable.null.includes(ne.name) ? oe() : ne.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            E ? Object.assign(Object.create(u), E) : u,
            l,
            ae,
            oe
          )(we);
        }
      }
      function ae(ne) {
        return b(K, S), M;
      }
      function oe(ne) {
        return S.restore(), ++H < z.length ? k(z[H]) : B;
      }
    }
  }
  function C(b, E) {
    b.resolveAll && !a.includes(b) && a.push(b), b.resolve && $t(u.events, E, u.events.length - E, b.resolve(u.events.slice(E), u)), b.resolveTo && (u.events = b.resolveTo(u.events, u));
  }
  function F() {
    const b = p(), E = u.previous, O = u.currentConstruct, T = u.events.length, M = Array.from(s);
    return {
      from: T,
      restore: B
    };
    function B() {
      r = b, u.previous = E, u.currentConstruct = O, u.events.length = T, s = M, P();
    }
  }
  function P() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function $w(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex;
  let o;
  if (n === i)
    o = [e[n].slice(r, a)];
  else {
    if (o = e.slice(n, i), r > -1) {
      const s = o[0];
      typeof s == "string" ? o[0] = s.slice(r) : o.shift();
    }
    a > 0 && o.push(e[i].slice(0, a));
  }
  return o;
}
function Bw(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const a = e[n];
    let o;
    if (typeof a == "string")
      o = a;
    else switch (a) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(a);
    }
    i = a === -2, r.push(o);
  }
  return r.join("");
}
function jw(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      G0([Mw, ...(e || {}).extensions || []])
    ),
    content: i(tb),
    defined: [],
    document: i(rb),
    flow: i(xw),
    lazy: {},
    string: i(Ew),
    text: i(kw)
  };
  return r;
  function i(a) {
    return o;
    function o(s) {
      return Lw(r, a, s);
    }
  }
}
function zw(e) {
  for (; !kd(e); )
    ;
  return e;
}
const fu = /[\0\t\n\r]/g;
function Uw() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(a, o, s) {
    const l = [];
    let u, c, f, h, d;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(o || void 0).decode(a)), f = 0, t = "", n && (a.charCodeAt(0) === 65279 && f++, n = void 0); f < a.length; ) {
      if (fu.lastIndex = f, u = fu.exec(a), h = u && u.index !== void 0 ? u.index : a.length, d = a.charCodeAt(h), !u) {
        t = a.slice(f);
        break;
      }
      if (d === 10 && f === h && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), f < h && (l.push(a.slice(f, h)), e += h - f), d) {
          case 0: {
            l.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, l.push(-2); e++ < c; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      f = h + 1;
    }
    return s && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
const Vw = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ww(e) {
  return e.replace(Vw, qw);
}
function qw(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), a = i === 120 || i === 88;
    return xd(n.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return ws(n) || e;
}
const Fd = {}.hasOwnProperty;
function Hw(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), Gw(n)(zw(jw(n).document().write(Uw()(e, t, !0))));
}
function Gw(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(D),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: a(Le),
      blockQuote: a(be),
      characterEscape: F,
      characterReference: F,
      codeFenced: a(ie),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: a(ie, o),
      codeText: a(ce, o),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: a(Ce),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: a(Me),
      hardBreakEscape: a(_e),
      hardBreakTrailing: a(_e),
      htmlFlow: a(fe, o),
      htmlFlowData: F,
      htmlText: a(fe, o),
      htmlTextData: F,
      image: a(_),
      label: o,
      link: a(D),
      listItem: a(W),
      listItemValue: h,
      listOrdered: a(I, f),
      listUnordered: a(I),
      paragraph: a(U),
      reference: k,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: a(Le),
      strong: a(V),
      thematicBreak: a(re)
    },
    exit: {
      atxHeading: l(),
      atxHeadingSequence: R,
      autolink: l(),
      autolinkEmail: he,
      autolinkProtocol: we,
      blockQuote: l(),
      characterEscapeValue: P,
      characterReferenceMarkerHexadecimal: oe,
      characterReferenceMarkerNumeric: oe,
      characterReferenceValue: ne,
      characterReference: le,
      codeFenced: l(y),
      codeFencedFence: m,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: p,
      codeFlowValue: P,
      codeIndented: l(g),
      codeText: l(M),
      codeTextData: P,
      data: P,
      definition: l(),
      definitionDestinationString: N,
      definitionLabelString: w,
      definitionTitleString: x,
      emphasis: l(),
      hardBreakEscape: l(E),
      hardBreakTrailing: l(E),
      htmlFlow: l(O),
      htmlFlowData: P,
      htmlText: l(T),
      htmlTextData: P,
      image: l(z),
      label: K,
      labelText: H,
      lineEnding: b,
      link: l(B),
      listItem: l(),
      listOrdered: l(),
      listUnordered: l(),
      paragraph: l(),
      referenceString: ae,
      resourceDestinationString: S,
      resourceTitleString: J,
      resource: ee,
      setextHeading: l(C),
      setextHeadingLineSequence: L,
      setextHeadingText: A,
      strong: l(),
      thematicBreak: l()
    }
  };
  Dd(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r($) {
    let q = {
      type: "root",
      children: []
    };
    const ue = {
      stack: [q],
      tokenStack: [],
      config: t,
      enter: s,
      exit: u,
      buffer: o,
      resume: c,
      data: n
    }, me = [];
    let ge = -1;
    for (; ++ge < $.length; )
      if ($[ge][1].type === "listOrdered" || $[ge][1].type === "listUnordered")
        if ($[ge][0] === "enter")
          me.push(ge);
        else {
          const He = me.pop();
          ge = i($, He, ge);
        }
    for (ge = -1; ++ge < $.length; ) {
      const He = t[$[ge][0]];
      Fd.call(He, $[ge][1].type) && He[$[ge][1].type].call(Object.assign({
        sliceSerialize: $[ge][2].sliceSerialize
      }, ue), $[ge][1]);
    }
    if (ue.tokenStack.length > 0) {
      const He = ue.tokenStack[ue.tokenStack.length - 1];
      (He[1] || du).call(ue, void 0, He[0]);
    }
    for (q.position = {
      start: Zt($.length > 0 ? $[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Zt($.length > 0 ? $[$.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ge = -1; ++ge < t.transforms.length; )
      q = t.transforms[ge](q) || q;
    return q;
  }
  function i($, q, ue) {
    let me = q - 1, ge = -1, He = !1, Te, et, At, nt;
    for (; ++me <= ue; ) {
      const Ke = $[me];
      switch (Ke[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ke[0] === "enter" ? ge++ : ge--, nt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ke[0] === "enter" && (Te && !nt && !ge && !At && (At = me), nt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          nt = void 0;
      }
      if (!ge && Ke[0] === "enter" && Ke[1].type === "listItemPrefix" || ge === -1 && Ke[0] === "exit" && (Ke[1].type === "listUnordered" || Ke[1].type === "listOrdered")) {
        if (Te) {
          let Jt = me;
          for (et = void 0; Jt--; ) {
            const Ut = $[Jt];
            if (Ut[1].type === "lineEnding" || Ut[1].type === "lineEndingBlank") {
              if (Ut[0] === "exit") continue;
              et && ($[et][1].type = "lineEndingBlank", He = !0), Ut[1].type = "lineEnding", et = Jt;
            } else if (!(Ut[1].type === "linePrefix" || Ut[1].type === "blockQuotePrefix" || Ut[1].type === "blockQuotePrefixWhitespace" || Ut[1].type === "blockQuoteMarker" || Ut[1].type === "listItemIndent")) break;
          }
          At && (!et || At < et) && (Te._spread = !0), Te.end = Object.assign({}, et ? $[et][1].start : Ke[1].end), $.splice(et || me, 0, ["exit", Te, Ke[2]]), me++, ue++;
        }
        if (Ke[1].type === "listItemPrefix") {
          const Jt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ke[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          Te = Jt, $.splice(me, 0, ["enter", Jt, Ke[2]]), me++, ue++, At = void 0, nt = !0;
        }
      }
    }
    return $[q][1]._spread = He, ue;
  }
  function a($, q) {
    return ue;
    function ue(me) {
      s.call(this, $(me), me), q && q.call(this, me);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s($, q, ue) {
    this.stack[this.stack.length - 1].children.push($), this.stack.push($), this.tokenStack.push([q, ue || void 0]), $.position = {
      start: Zt(q.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function l($) {
    return q;
    function q(ue) {
      $ && $.call(this, ue), u.call(this, ue);
    }
  }
  function u($, q) {
    const ue = this.stack.pop(), me = this.tokenStack.pop();
    if (me)
      me[0].type !== $.type && (q ? q.call(this, $, me[0]) : (me[1] || du).call(this, $, me[0]));
    else throw new Error("Cannot close `" + $.type + "` (" + Sr({
      start: $.start,
      end: $.end
    }) + "): it’s not open");
    ue.position.end = Zt($.end);
  }
  function c() {
    return q0(this.stack.pop());
  }
  function f() {
    this.data.expectingFirstListItemValue = !0;
  }
  function h($) {
    if (this.data.expectingFirstListItemValue) {
      const q = this.stack[this.stack.length - 2];
      q.start = Number.parseInt(this.sliceSerialize($), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function d() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.lang = $;
  }
  function p() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.meta = $;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function y() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = $.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function g() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = $.replace(/(\r?\n|\r)$/g, "");
  }
  function w($) {
    const q = this.resume(), ue = this.stack[this.stack.length - 1];
    ue.label = q, ue.identifier = Hn(this.sliceSerialize($)).toLowerCase();
  }
  function x() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = $;
  }
  function N() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = $;
  }
  function R($) {
    const q = this.stack[this.stack.length - 1];
    if (!q.depth) {
      const ue = this.sliceSerialize($).length;
      q.depth = ue;
    }
  }
  function A() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function L($) {
    const q = this.stack[this.stack.length - 1];
    q.depth = this.sliceSerialize($).codePointAt(0) === 61 ? 1 : 2;
  }
  function C() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F($) {
    const ue = this.stack[this.stack.length - 1].children;
    let me = ue[ue.length - 1];
    (!me || me.type !== "text") && (me = X(), me.position = {
      start: Zt($.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ue.push(me)), this.stack.push(me);
  }
  function P($) {
    const q = this.stack.pop();
    q.value += this.sliceSerialize($), q.position.end = Zt($.end);
  }
  function b($) {
    const q = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ue = q.children[q.children.length - 1];
      ue.position.end = Zt($.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(q.type) && (F.call(this, $), P.call(this, $));
  }
  function E() {
    this.data.atHardBreak = !0;
  }
  function O() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = $;
  }
  function T() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = $;
  }
  function M() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = $;
  }
  function B() {
    const $ = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const q = this.data.referenceType || "shortcut";
      $.type += "Reference", $.referenceType = q, delete $.url, delete $.title;
    } else
      delete $.identifier, delete $.label;
    this.data.referenceType = void 0;
  }
  function z() {
    const $ = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const q = this.data.referenceType || "shortcut";
      $.type += "Reference", $.referenceType = q, delete $.url, delete $.title;
    } else
      delete $.identifier, delete $.label;
    this.data.referenceType = void 0;
  }
  function H($) {
    const q = this.sliceSerialize($), ue = this.stack[this.stack.length - 2];
    ue.label = Ww(q), ue.identifier = Hn(q).toLowerCase();
  }
  function K() {
    const $ = this.stack[this.stack.length - 1], q = this.resume(), ue = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ue.type === "link") {
      const me = $.children;
      ue.children = me;
    } else
      ue.alt = q;
  }
  function S() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = $;
  }
  function J() {
    const $ = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = $;
  }
  function ee() {
    this.data.inReference = void 0;
  }
  function k() {
    this.data.referenceType = "collapsed";
  }
  function ae($) {
    const q = this.resume(), ue = this.stack[this.stack.length - 1];
    ue.label = q, ue.identifier = Hn(this.sliceSerialize($)).toLowerCase(), this.data.referenceType = "full";
  }
  function oe($) {
    this.data.characterReferenceType = $.type;
  }
  function ne($) {
    const q = this.sliceSerialize($), ue = this.data.characterReferenceType;
    let me;
    ue ? (me = xd(q, ue === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : me = ws(q);
    const ge = this.stack[this.stack.length - 1];
    ge.value += me;
  }
  function le($) {
    const q = this.stack.pop();
    q.position.end = Zt($.end);
  }
  function we($) {
    P.call(this, $);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize($);
  }
  function he($) {
    P.call(this, $);
    const q = this.stack[this.stack.length - 1];
    q.url = "mailto:" + this.sliceSerialize($);
  }
  function be() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function ie() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ce() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Ce() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Me() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function Le() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function _e() {
    return {
      type: "break"
    };
  }
  function fe() {
    return {
      type: "html",
      value: ""
    };
  }
  function _() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function D() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function I($) {
    return {
      type: "list",
      ordered: $.type === "listOrdered",
      start: null,
      spread: $._spread,
      children: []
    };
  }
  function W($) {
    return {
      type: "listItem",
      spread: $._spread,
      checked: null,
      children: []
    };
  }
  function U() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function V() {
    return {
      type: "strong",
      children: []
    };
  }
  function X() {
    return {
      type: "text",
      value: ""
    };
  }
  function re() {
    return {
      type: "thematicBreak"
    };
  }
}
function Zt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function Dd(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? Dd(e, r) : Qw(e, r);
  }
}
function Qw(e, t) {
  let n;
  for (n in t)
    if (Fd.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function du(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Sr({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Sr({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Sr({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Yw(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Hw(r, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function Kw(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Jw(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Xw(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function Zw(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function ex(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function tx(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = tr(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
  let o, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
  const l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  e.patch(t, l);
  const u = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [l]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function nx(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function rx(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function Rd(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), a = i[0];
  a && a.type === "text" ? a.value = "[" + a.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function ix(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Rd(e, t);
  const i = { src: tr(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function ax(e, t) {
  const n = { src: tr(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function ox(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function sx(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return Rd(e, t);
  const i = { href: tr(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function lx(e, t) {
  const n = { href: tr(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ux(e, t, n) {
  const r = e.all(t), i = n ? cx(n) : Id(t), a = {}, o = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let f;
    c && c.type === "element" && c.tagName === "p" ? f = c : (f = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(f)), f.children.length > 0 && f.children.unshift({ type: "text", value: " " }), f.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const c = r[s];
    (i || s !== 0 || c.type !== "element" || c.tagName !== "p") && o.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? o.push(...c.children) : o.push(c);
  }
  const l = r[r.length - 1];
  l && (i || l.type !== "element" || l.tagName !== "p") && o.push({ type: "text", value: `
` });
  const u = { type: "element", tagName: "li", properties: a, children: o };
  return e.patch(t, u), e.applyData(t, u);
}
function cx(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = Id(n[r]);
  }
  return t;
}
function Id(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function fx(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function dx(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function hx(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function px(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function mx(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, s = gs(t.children[1]), l = pd(t.children[t.children.length - 1]);
    s && l && (o.position = { start: s, end: l }), i.push(o);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function gx(e, t, n) {
  const r = n ? n.children : void 0, a = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, s = o ? o.length : t.children.length;
  let l = -1;
  const u = [];
  for (; ++l < s; ) {
    const f = t.children[l], h = {}, d = o ? o[l] : void 0;
    d && (h.align = d);
    let p = { type: "element", tagName: a, properties: h, children: [] };
    f && (p.children = e.all(f), e.patch(f, p), p = e.applyData(f, p)), u.push(p);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(u, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function yx(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const hu = 9, pu = 32;
function vx(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const a = [];
  for (; r; )
    a.push(
      mu(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return a.push(mu(t.slice(i), i > 0, !1)), a.join("");
}
function mu(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let a = e.codePointAt(r);
    for (; a === hu || a === pu; )
      r++, a = e.codePointAt(r);
  }
  if (n) {
    let a = e.codePointAt(i - 1);
    for (; a === hu || a === pu; )
      i--, a = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function bx(e, t) {
  const n = { type: "text", value: vx(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function wx(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const xx = {
  blockquote: Kw,
  break: Jw,
  code: Xw,
  delete: Zw,
  emphasis: ex,
  footnoteReference: tx,
  heading: nx,
  html: rx,
  imageReference: ix,
  image: ax,
  inlineCode: ox,
  linkReference: sx,
  link: lx,
  listItem: ux,
  list: fx,
  paragraph: dx,
  // @ts-expect-error: root is different, but hard to type.
  root: hx,
  strong: px,
  table: mx,
  tableCell: yx,
  tableRow: gx,
  text: bx,
  thematicBreak: wx,
  toml: Zr,
  yaml: Zr,
  definition: Zr,
  footnoteDefinition: Zr
};
function Zr() {
}
const Nd = -1, ba = 0, Er = 1, Gi = 2, Cs = 3, Es = 4, ks = 5, Os = 6, Md = 7, Ld = 8, gu = typeof self == "object" ? self : globalThis, Sx = (e, t) => {
  const n = (i, a) => (e.set(a, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [a, o] = t[i];
    switch (a) {
      case ba:
      case Nd:
        return n(o, i);
      case Er: {
        const s = n([], i);
        for (const l of o)
          s.push(r(l));
        return s;
      }
      case Gi: {
        const s = n({}, i);
        for (const [l, u] of o)
          s[r(l)] = r(u);
        return s;
      }
      case Cs:
        return n(new Date(o), i);
      case Es: {
        const { source: s, flags: l } = o;
        return n(new RegExp(s, l), i);
      }
      case ks: {
        const s = n(/* @__PURE__ */ new Map(), i);
        for (const [l, u] of o)
          s.set(r(l), r(u));
        return s;
      }
      case Os: {
        const s = n(/* @__PURE__ */ new Set(), i);
        for (const l of o)
          s.add(r(l));
        return s;
      }
      case Md: {
        const { name: s, message: l } = o;
        return n(new gu[s](l), i);
      }
      case Ld:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: s } = new Uint8Array(o);
        return n(new DataView(s), o);
      }
    }
    return n(new gu[a](o), i);
  };
  return r;
}, yu = (e) => Sx(/* @__PURE__ */ new Map(), e)(0), In = "", { toString: Cx } = {}, { keys: Ex } = Object, hr = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [ba, t];
  const n = Cx.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [Er, In];
    case "Object":
      return [Gi, In];
    case "Date":
      return [Cs, In];
    case "RegExp":
      return [Es, In];
    case "Map":
      return [ks, In];
    case "Set":
      return [Os, In];
    case "DataView":
      return [Er, n];
  }
  return n.includes("Array") ? [Er, n] : n.includes("Error") ? [Md, n] : [Gi, n];
}, ei = ([e, t]) => e === ba && (t === "function" || t === "symbol"), kx = (e, t, n, r) => {
  const i = (o, s) => {
    const l = r.push(o) - 1;
    return n.set(s, l), l;
  }, a = (o) => {
    if (n.has(o))
      return n.get(o);
    let [s, l] = hr(o);
    switch (s) {
      case ba: {
        let c = o;
        switch (l) {
          case "bigint":
            s = Ld, c = o.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + l);
            c = null;
            break;
          case "undefined":
            return i([Nd], o);
        }
        return i([s, c], o);
      }
      case Er: {
        if (l) {
          let h = o;
          return l === "DataView" ? h = new Uint8Array(o.buffer) : l === "ArrayBuffer" && (h = new Uint8Array(o)), i([l, [...h]], o);
        }
        const c = [], f = i([s, c], o);
        for (const h of o)
          c.push(a(h));
        return f;
      }
      case Gi: {
        if (l)
          switch (l) {
            case "BigInt":
              return i([l, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([l, o.valueOf()], o);
          }
        if (t && "toJSON" in o)
          return a(o.toJSON());
        const c = [], f = i([s, c], o);
        for (const h of Ex(o))
          (e || !ei(hr(o[h]))) && c.push([a(h), a(o[h])]);
        return f;
      }
      case Cs:
        return i([s, o.toISOString()], o);
      case Es: {
        const { source: c, flags: f } = o;
        return i([s, { source: c, flags: f }], o);
      }
      case ks: {
        const c = [], f = i([s, c], o);
        for (const [h, d] of o)
          (e || !(ei(hr(h)) || ei(hr(d)))) && c.push([a(h), a(d)]);
        return f;
      }
      case Os: {
        const c = [], f = i([s, c], o);
        for (const h of o)
          (e || !ei(hr(h))) && c.push(a(h));
        return f;
      }
    }
    const { message: u } = o;
    return i([s, { name: l, message: u }], o);
  };
  return a;
}, vu = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return kx(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Qi = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? yu(vu(e, t)) : structuredClone(e)
) : (e, t) => yu(vu(e, t));
function Ox(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function _x(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Tx(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Ox, r = e.options.footnoteBackLabel || _x, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let l = -1;
  for (; ++l < e.footnoteOrder.length; ) {
    const u = e.footnoteById.get(
      e.footnoteOrder[l]
    );
    if (!u)
      continue;
    const c = e.all(u), f = String(u.identifier).toUpperCase(), h = tr(f.toLowerCase());
    let d = 0;
    const p = [], m = e.footnoteCounts.get(f);
    for (; m !== void 0 && ++d <= m; ) {
      p.length > 0 && p.push({ type: "text", value: " " });
      let w = typeof n == "string" ? n : n(l, d);
      typeof w == "string" && (w = { type: "text", value: w }), p.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + h + (d > 1 ? "-" + d : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(l, d),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(w) ? w : [w]
      });
    }
    const y = c[c.length - 1];
    if (y && y.type === "element" && y.tagName === "p") {
      const w = y.children[y.children.length - 1];
      w && w.type === "text" ? w.value += " " : y.children.push({ type: "text", value: " " }), y.children.push(...p);
    } else
      c.push(...p);
    const g = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + h },
      children: e.wrap(c, !0)
    };
    e.patch(u, g), s.push(g);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Qi(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const $d = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Dx;
    if (typeof e == "function")
      return wa(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Ax(e) : Px(e);
    if (typeof e == "string")
      return Fx(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Ax(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = $d(e[n]);
  return wa(r);
  function r(...i) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, i)) return !0;
    return !1;
  }
}
function Px(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return wa(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let a;
    for (a in e)
      if (i[a] !== t[a]) return !1;
    return !0;
  }
}
function Fx(e) {
  return wa(t);
  function t(n) {
    return n && n.type === e;
  }
}
function wa(e) {
  return t;
  function t(n, r, i) {
    return !!(Rx(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function Dx() {
  return !0;
}
function Rx(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Bd = [], Ix = !0, bu = !1, Nx = "skip";
function Mx(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const a = $d(i), o = r ? -1 : 1;
  s(e, void 0, [])();
  function s(l, u, c) {
    const f = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof f.type == "string") {
      const d = (
        // `hast`
        typeof f.tagName == "string" ? f.tagName : (
          // `xast`
          typeof f.name == "string" ? f.name : void 0
        )
      );
      Object.defineProperty(h, "name", {
        value: "node (" + (l.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return h;
    function h() {
      let d = Bd, p, m, y;
      if ((!t || a(l, u, c[c.length - 1] || void 0)) && (d = Lx(n(l, c)), d[0] === bu))
        return d;
      if ("children" in l && l.children) {
        const g = (
          /** @type {UnistParent} */
          l
        );
        if (g.children && d[0] !== Nx)
          for (m = (r ? g.children.length : -1) + o, y = c.concat(g); m > -1 && m < g.children.length; ) {
            const w = g.children[m];
            if (p = s(w, m, y)(), p[0] === bu)
              return p;
            m = typeof p[1] == "number" ? p[1] : m + o;
          }
      }
      return d;
    }
  }
}
function Lx(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Ix, e] : e == null ? Bd : [e];
}
function jd(e, t, n, r) {
  let i, a, o;
  typeof t == "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Mx(e, a, s, i);
  function s(l, u) {
    const c = u[u.length - 1], f = c ? c.children.indexOf(l) : void 0;
    return o(l, f, c);
  }
}
const No = {}.hasOwnProperty, $x = {};
function Bx(e, t) {
  const n = t || $x, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = { ...xx, ...n.handlers }, s = {
    all: u,
    applyData: zx,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: o,
    one: l,
    options: n,
    patch: jx,
    wrap: Vx
  };
  return jd(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const f = c.type === "definition" ? r : i, h = String(c.identifier).toUpperCase();
      f.has(h) || f.set(h, c);
    }
  }), s;
  function l(c, f) {
    const h = c.type, d = s.handlers[h];
    if (No.call(s.handlers, h) && d)
      return d(s, c, f);
    if (s.options.passThrough && s.options.passThrough.includes(h)) {
      if ("children" in c) {
        const { children: m, ...y } = c, g = Qi(y);
        return g.children = s.all(c), g;
      }
      return Qi(c);
    }
    return (s.options.unknownHandler || Ux)(s, c, f);
  }
  function u(c) {
    const f = [];
    if ("children" in c) {
      const h = c.children;
      let d = -1;
      for (; ++d < h.length; ) {
        const p = s.one(h[d], c);
        if (p) {
          if (d && h[d - 1].type === "break" && (!Array.isArray(p) && p.type === "text" && (p.value = wu(p.value)), !Array.isArray(p) && p.type === "element")) {
            const m = p.children[0];
            m && m.type === "text" && (m.value = wu(m.value));
          }
          Array.isArray(p) ? f.push(...p) : f.push(p);
        }
      }
    }
    return f;
  }
}
function jx(e, t) {
  e.position && (t.position = C0(e));
}
function zx(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, a = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && a && Object.assign(n.properties, Qi(a)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Ux(e, t) {
  const n = t.data || {}, r = "value" in t && !(No.call(n, "hProperties") || No.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Vx(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function wu(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function xu(e, t) {
  const n = Bx(e, t), r = n.one(e, void 0), i = Tx(n), a = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && a.children.push({ type: "text", value: `
` }, i), a;
}
function Wx(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      xu(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      xu(n, { file: r, ...e || t })
    );
  };
}
function Su(e) {
  if (e)
    throw e;
}
var Ha, Cu;
function qx() {
  if (Cu) return Ha;
  Cu = 1;
  var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(u) {
    return typeof Array.isArray == "function" ? Array.isArray(u) : t.call(u) === "[object Array]";
  }, a = function(u) {
    if (!u || t.call(u) !== "[object Object]")
      return !1;
    var c = e.call(u, "constructor"), f = u.constructor && u.constructor.prototype && e.call(u.constructor.prototype, "isPrototypeOf");
    if (u.constructor && !c && !f)
      return !1;
    var h;
    for (h in u)
      ;
    return typeof h > "u" || e.call(u, h);
  }, o = function(u, c) {
    n && c.name === "__proto__" ? n(u, c.name, {
      enumerable: !0,
      configurable: !0,
      value: c.newValue,
      writable: !0
    }) : u[c.name] = c.newValue;
  }, s = function(u, c) {
    if (c === "__proto__")
      if (e.call(u, c)) {
        if (r)
          return r(u, c).value;
      } else return;
    return u[c];
  };
  return Ha = function l() {
    var u, c, f, h, d, p, m = arguments[0], y = 1, g = arguments.length, w = !1;
    for (typeof m == "boolean" && (w = m, m = arguments[1] || {}, y = 2), (m == null || typeof m != "object" && typeof m != "function") && (m = {}); y < g; ++y)
      if (u = arguments[y], u != null)
        for (c in u)
          f = s(m, c), h = s(u, c), m !== h && (w && h && (a(h) || (d = i(h))) ? (d ? (d = !1, p = f && i(f) ? f : []) : p = f && a(f) ? f : {}, o(m, { name: c, newValue: l(w, p, h) })) : typeof h < "u" && o(m, { name: c, newValue: h }));
    return m;
  }, Ha;
}
var Hx = qx();
const Ga = /* @__PURE__ */ ts(Hx);
function Mo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Gx() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let a = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    s(null, ...i);
    function s(l, ...u) {
      const c = e[++a];
      let f = -1;
      if (l) {
        o(l);
        return;
      }
      for (; ++f < i.length; )
        (u[f] === null || u[f] === void 0) && (u[f] = i[f]);
      i = u, c ? Qx(c, s)(...u) : o(null, ...u);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function Qx(e, t) {
  let n;
  return r;
  function r(...o) {
    const s = e.length > o.length;
    let l;
    s && o.push(i);
    try {
      l = e.apply(this, o);
    } catch (u) {
      const c = (
        /** @type {Error} */
        u
      );
      if (s && n)
        throw c;
      return i(c);
    }
    s || (l && l.then && typeof l.then == "function" ? l.then(a, i) : l instanceof Error ? i(l) : a(l));
  }
  function i(o, ...s) {
    n || (n = !0, t(o, ...s));
  }
  function a(o) {
    i(null, o);
  }
}
const Ft = { basename: Yx, dirname: Kx, extname: Jx, join: Xx, sep: "/" };
function Yx(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  Vr(e);
  let n = 0, r = -1, i = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (a) {
          n = i + 1;
          break;
        }
      } else r < 0 && (a = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let o = -1, s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (a) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
  return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function Kx(e) {
  if (Vr(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function Jx(e) {
  Vr(e);
  let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (o) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Xx(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    Vr(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Zx(n);
}
function Zx(e) {
  Vr(e);
  const t = e.codePointAt(0) === 47;
  let n = e1(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function e1(e, t) {
  let n = "", r = 0, i = -1, a = 0, o = -1, s, l;
  for (; ++o <= e.length; ) {
    if (o < e.length)
      s = e.codePointAt(o);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
              l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = o, a = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
      i = o, a = 0;
    } else s === 46 && a > -1 ? a++ : a = -1;
  }
  return n;
}
function Vr(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const t1 = { cwd: n1 };
function n1() {
  return "/";
}
function Lo(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function r1(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Lo(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return i1(e);
}
function i1(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const Qa = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class zd {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let n;
    t ? Lo(t) ? n = { path: t } : typeof t == "string" || a1(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : t1.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < Qa.length; ) {
      const a = Qa[r];
      a in n && n[a] !== void 0 && n[a] !== null && (this[a] = a === "history" ? [...n[a]] : n[a]);
    }
    let i;
    for (i in n)
      Qa.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ft.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Ka(t, "basename"), Ya(t, "basename"), this.path = Ft.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ft.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    Eu(this.basename, "dirname"), this.path = Ft.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ft.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (Ya(t, "extname"), Eu(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ft.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Lo(t) && (t = r1(t)), Ka(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ft.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Ka(t, "stem"), Ya(t, "stem"), this.path = Ft.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, n, r) {
    const i = new Ze(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function Ya(e, t) {
  if (e && e.includes(Ft.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Ft.sep + "`"
    );
}
function Ka(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Eu(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function a1(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const o1 = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], a = function() {
      return i.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, r), a;
  }
), s1 = {}.hasOwnProperty;
class _s extends o1 {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Gx();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new _s()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(Ga(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (Za("data", this.frozen), this.namespace[t] = n, this) : s1.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Za("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const n = ti(t), r = this.parser || this.Parser;
    return Ja("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, n) {
    const r = this;
    return this.freeze(), Ja("process", this.parser || this.Parser), Xa("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(a, o) {
      const s = ti(t), l = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(l, s, function(c, f, h) {
        if (c || !f || !h)
          return u(c);
        const d = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          f
        ), p = r.stringify(d, h);
        c1(p) ? h.value = p : h.result = p, u(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          h
        );
      });
      function u(c, f) {
        c || !f ? o(c) : a ? a(f) : n(void 0, f);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let n = !1, r;
    return this.freeze(), Ja("processSync", this.parser || this.Parser), Xa("processSync", this.compiler || this.Compiler), this.process(t, i), Ou("processSync", "process", n), r;
    function i(a, o) {
      n = !0, Su(a), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, n, r) {
    ku(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? a(void 0, r) : new Promise(a);
    function a(o, s) {
      const l = ti(n);
      i.run(t, l, u);
      function u(c, f, h) {
        const d = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          f || t
        );
        c ? s(c) : o ? o(d) : r(void 0, d, h);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, a), Ou("runSync", "run", r), i;
    function a(o, s) {
      Su(o), i = s, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, n) {
    this.freeze();
    const r = ti(n), i = this.compiler || this.Compiler;
    return Xa("stringify", i), ku(t), i(t, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (Za("use", this.frozen), t != null) if (typeof t == "function")
      l(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : o(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(u) {
      if (typeof u == "function")
        l(u, []);
      else if (typeof u == "object")
        if (Array.isArray(u)) {
          const [c, ...f] = (
            /** @type {PluginTuple<Array<unknown>>} */
            u
          );
          l(c, f);
        } else
          o(u);
      else
        throw new TypeError("Expected usable value, not `" + u + "`");
    }
    function o(u) {
      if (!("plugins" in u) && !("settings" in u))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(u.plugins), u.settings && (i.settings = Ga(!0, i.settings, u.settings));
    }
    function s(u) {
      let c = -1;
      if (u != null) if (Array.isArray(u))
        for (; ++c < u.length; ) {
          const f = u[c];
          a(f);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + u + "`");
    }
    function l(u, c) {
      let f = -1, h = -1;
      for (; ++f < r.length; )
        if (r[f][0] === u) {
          h = f;
          break;
        }
      if (h === -1)
        r.push([u, ...c]);
      else if (c.length > 0) {
        let [d, ...p] = c;
        const m = r[h][1];
        Mo(m) && Mo(d) && (d = Ga(!0, m, d)), r[h] = [u, d, ...p];
      }
    }
  }
}
const l1 = new _s().freeze();
function Ja(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Xa(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Za(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function ku(e) {
  if (!Mo(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ou(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function ti(e) {
  return u1(e) ? e : new zd(e);
}
function u1(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function c1(e) {
  return typeof e == "string" || f1(e);
}
function f1(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const d1 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", _u = [], Tu = { allowDangerousHtml: !0 }, h1 = /^(https?|ircs?|mailto|xmpp)$/i, p1 = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function m1(e) {
  const t = g1(e), n = y1(e);
  return v1(t.runSync(t.parse(n), n), e);
}
function g1(e) {
  const t = e.rehypePlugins || _u, n = e.remarkPlugins || _u, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Tu } : Tu;
  return l1().use(Yw).use(n).use(Wx, r).use(t);
}
function y1(e) {
  const t = e.children || "", n = new zd();
  return typeof t == "string" && (n.value = t), n;
}
function v1(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, l = t.urlTransform || b1;
  for (const c of p1)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + d1 + c.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), jd(e, u), T0(e, {
    Fragment: Ye,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: v,
    jsxs: G,
    passKeys: !0,
    passNode: !0
  });
  function u(c, f, h) {
    if (c.type === "raw" && h && typeof f == "number")
      return o ? h.children.splice(f, 1) : h.children[f] = { type: "text", value: c.value }, f;
    if (c.type === "element") {
      let d;
      for (d in Va)
        if (Object.hasOwn(Va, d) && Object.hasOwn(c.properties, d)) {
          const p = c.properties[d], m = Va[d];
          (m === null || m.includes(c.tagName)) && (c.properties[d] = l(String(p || ""), d, c));
        }
    }
    if (c.type === "element") {
      let d = n ? !n.includes(c.tagName) : a ? a.includes(c.tagName) : !1;
      if (!d && r && typeof f == "number" && (d = !r(c, f, h)), d && h && typeof f == "number")
        return s && c.children ? h.children.splice(f, 1, ...c.children) : h.children.splice(f, 1), f;
    }
  }
}
function b1(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    h1.test(e.slice(0, t)) ? e : ""
  );
}
const St = ({
  label: e,
  text: t,
  dataTestId: n,
  isSliderCard: r,
  textVariant: i = "oneLine",
  isCopyButton: a,
  tooltipProps: o,
  marginBottom: s,
  isMarkdown: l = !1
}) => t ? /* @__PURE__ */ G(
  Q,
  {
    "data-testid": n,
    mb: s ?? r ? "20px" : "32px",
    maxHeight: r ? "72px" : "none",
    overflow: r ? "hidden" : "visible",
    children: [
      /* @__PURE__ */ G(
        Q,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            mb: "4px"
          },
          children: [
            /* @__PURE__ */ v(
              se,
              {
                sx: {
                  fontSize: r ? 12 : 14,
                  fontWeight: r ? 500 : 600,
                  lineHeight: r ? "16px" : "20px",
                  color: "neutralGray",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: e
              }
            ),
            o && /* @__PURE__ */ v(
              Hi,
              {
                heading: o == null ? void 0 : o.heading,
                paragraphOne: o == null ? void 0 : o.paragraphOne,
                placement: "bottom-end",
                arrow: !0,
                ...o,
                children: /* @__PURE__ */ v(
                  Ti,
                  {
                    sx: { ml: 0.7, mb: 0.1, color: "#ADAEAD", fontSize: "small" }
                  }
                )
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ v(Q, { display: "flex", children: i === "pill" ? /* @__PURE__ */ v(
        Q,
        {
          sx: {
            padding: "6px 18px",
            overflow: "hidden",
            bgcolor: "lightBlue",
            borderRadius: 100
          },
          children: /* @__PURE__ */ v(
            se,
            {
              variant: "caption",
              sx: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: t
            }
          )
        }
      ) : /* @__PURE__ */ G(
        Q,
        {
          sx: {
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            flexDirection: l ? "column" : "row"
          },
          children: [
            l ? /* @__PURE__ */ v(
              m1,
              {
                components: {
                  // eslint-disable-next-line
                  p(u) {
                    const { children: c } = u;
                    return /* @__PURE__ */ v(
                      se,
                      {
                        sx: {
                          fontSize: 16,
                          fontWeight: 400,
                          lineHeight: "24px",
                          maxWidth: "auto"
                        },
                        children: c
                      }
                    );
                  }
                },
                children: t.toString()
              }
            ) : /* @__PURE__ */ v(
              se,
              {
                sx: {
                  fontSize: r ? 14 : 16,
                  fontWeight: 400,
                  maxWidth: i === "oneLine" ? "283px" : "auto",
                  lineHeight: r ? "20px" : "24px",
                  ...i === "oneLine" && { whiteSpace: "nowrap" },
                  ...(i === "oneLine" || i === "twoLines") && {
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  },
                  ...i === "twoLines" && {
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    whiteSpace: "normal"
                  },
                  ...a && {
                    color: "primaryBlue"
                  }
                },
                children: t
              }
            ),
            a && /* @__PURE__ */ v(Q, { ml: 1, children: /* @__PURE__ */ v(rd, { text: t.toString(), variant: "blueThin" }) })
          ]
        }
      ) })
    ]
  }
) : null, Ud = ({
  title: e,
  isDataMissing: t
}) => /* @__PURE__ */ G(
  Q,
  {
    sx: {
      display: "flex",
      alignItems: "center",
      mb: "20px",
      overflow: "hidden"
    },
    "data-testid": "governance-action-card-header",
    children: [
      /* @__PURE__ */ v(
        se,
        {
          sx: {
            fontSize: 18,
            fontWeight: 600,
            lineHeight: "24px",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            wordBreak: "break-word",
            ...t && { color: "errorRed" }
          },
          children: t && Bi(
            t
          ) || e
        }
      ),
      t && typeof t == "string" && /* @__PURE__ */ v(
        Hi,
        {
          heading: Bi(
            t
          ),
          paragraphOne: "Please click “View Details” for more information.",
          placement: "bottom-end",
          arrow: !0,
          children: /* @__PURE__ */ v(
            Ti,
            {
              style: {
                color: "#ADAEAD"
              },
              sx: { ml: 0.7 },
              fontSize: "small"
            }
          )
        }
      )
    ]
  }
), w1 = ({ voteTxHash: e, vote: t }) => {
  const { cExplorerBaseUrl: n } = Ve();
  return /* @__PURE__ */ G(Q, { "data-testid": "my-vote", mb: "20px", children: [
    /* @__PURE__ */ v(
      se,
      {
        variant: "caption",
        sx: {
          fontWeight: 500,
          color: "#8E908E"
        },
        children: "My Vote:"
      }
    ),
    /* @__PURE__ */ G(
      Q,
      {
        sx: {
          mt: 1,
          px: "4px",
          py: "2px",
          display: "flex",
          border: 1,
          borderColor: "rgba(214, 226, 255, 1)",
          borderRadius: 20,
          flex: 1,
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ v(Q, { flex: 1, children: /* @__PURE__ */ v(ph, { vote: t }) }),
          /* @__PURE__ */ v(
            Ct,
            {
              onClick: () => ha(`${n}/tx/${e}`),
              variant: "text",
              size: "small",
              sx: {
                paddingY: 0.75,
                flex: 1,
                whiteSpace: "nowrap"
              },
              children: "See transaction"
            }
          )
        ]
      }
    )
  ] });
}, Ts = ({
  variant: e = "voteSubmitted"
}) => /* @__PURE__ */ v(
  Q,
  {
    sx: {
      position: "absolute",
      top: -15,
      right: 30,
      bgcolor: e === "inProgress" ? "#F8ECD4" : "#E0F2DC",
      border: 1,
      borderColor: e === "inProgress" ? "#DEA029" : "#62BC52",
      px: 2.25,
      py: 0.5,
      borderRadius: 100
    },
    children: /* @__PURE__ */ G(
      se,
      {
        sx: {
          color: e === "inProgress" ? "#DEA029" : "#62BC52",
          display: "flex",
          alignItems: "center",
          gap: 0.5
        },
        variant: "body2",
        children: [
          e === "voteSubmitted" && /* @__PURE__ */ v(
            Uh,
            {
              sx: {
                fontSize: "17px"
              }
            }
          ),
          e === "inProgress" ? "In Progress" : "Votes submitted"
        ]
      }
    )
  }
), x1 = ({ children: e, value: t, index: n }) => t !== n ? null : /* @__PURE__ */ v(Q, { sx: { overflow: "auto" }, children: e }), S1 = ta((e) => /* @__PURE__ */ v(Dc, { disableRipple: !0, ...e }))(({ isMobile: e }) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: 16,
  width: e ? "50%" : "auto",
  color: "rgba(36, 34, 50, 0.5)",
  "&.Mui-selected": {
    color: "rgba(38, 37, 45, 1)"
  }
})), C1 = ({
  isDashboard: e,
  isDataMissing: t,
  isInProgress: n,
  isOneColumn: r,
  isSubmitted: i,
  proposal: {
    abstract: a,
    createdDate: o,
    createdEpochNo: s,
    details: l,
    expiryDate: u,
    expiryEpochNo: c,
    index: f,
    motivation: h,
    prevGovActionIndex: d,
    prevGovActionTxHash: p,
    rationale: m,
    references: y,
    title: g,
    txHash: w,
    url: x,
    type: N,
    protocolParams: R
  }
}) => {
  const { epochParams: A, useLocation: L } = Ve(), { screenWidth: C } = Ie(), { isMobile: F } = Ie(), P = qe(
    () => (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      eg(A, R, [
        "id",
        "registered_tx_id",
        "key"
      ])
    ),
    [A, R]
  ), b = qe(
    () => Zm(R, ["id", "registered_tx_id", "key"]),
    [R]
  ), E = (e && C < 1168) ?? C < 900, [O, T] = Be(0), { pathname: M, hash: B } = L(), z = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ""}${M}${B ?? ""}`, H = (k, ae) => {
    T(ae);
  }, K = kn(N), S = pt(w, f), J = d && p ? pt(p, d) : null, ee = qe(
    () => [
      {
        label: "Reasoning",
        dataTestId: "reasoning-tab",
        content: /* @__PURE__ */ v(
          E1,
          {
            abstract: a,
            motivation: h,
            rationale: m
          }
        ),
        visible: !t && (!!a || !!h || !!m)
      },
      {
        label: "Parameters",
        dataTestId: "parameters-tab",
        content: /* @__PURE__ */ v(
          bE,
          {
            oldJson: P,
            newJson: b
          }
        ),
        visible: N === vi.ParameterChange && !!R && !!A
      },
      {
        label: "Details",
        dataTestId: "hardfork-details-tab",
        content: /* @__PURE__ */ v(
          k1,
          {
            details: l,
            prevGovActionId: J
          }
        ),
        visible: N === vi.HardForkInitiation && !!l
      }
    ].filter((k) => k.visible),
    [
      a,
      h,
      m,
      t,
      P,
      b,
      N,
      R,
      A,
      l,
      J
    ]
  );
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        borderRadius: r ? "20px 20px 0 0" : "20px 0 0 20px",
        bgcolor: "rgba(255, 255, 255, 0.30)",
        p: `40px ${E ? "24px" : "40px"}`,
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ v(
          Qv,
          {
            isDataMissing: t,
            shareLink: z,
            title: g
          }
        ),
        /* @__PURE__ */ v(
          Yv,
          {
            isDataMissing: t,
            isInProgress: n,
            isSubmitted: i
          }
        ),
        /* @__PURE__ */ v(
          St,
          {
            label: "Governance Action Type:",
            text: K,
            textVariant: "pill",
            dataTestId: `${_r(K)}-type`
          }
        ),
        /* @__PURE__ */ v(
          Us,
          {
            createdDate: o,
            expiryDate: u,
            expiryEpochNo: c,
            createdEpochNo: s
          }
        ),
        t && /* @__PURE__ */ v(Mv, { url: x, label: "See external data" }),
        /* @__PURE__ */ v(
          St,
          {
            label: "Governance Action ID:",
            text: S,
            isCopyButton: !0,
            dataTestId: `${S}-id`
          }
        ),
        ee.length === 1 ? ee[0].content : /* @__PURE__ */ G(Ye, { children: [
          /* @__PURE__ */ v(
            Ic,
            {
              sx: {
                marginY: 4,
                display: "flex",
                fontSize: 16,
                fontWeight: 500
              },
              value: O,
              indicatorColor: "secondary",
              onChange: H,
              "aria-label": "basic tabs example",
              children: ee.map((k) => /* @__PURE__ */ v(
                S1,
                {
                  "data-testid": k.dataTestId,
                  label: k.label,
                  isMobile: F
                },
                k.label
              ))
            }
          ),
          ee.map((k, ae) => /* @__PURE__ */ v(
            x1,
            {
              value: O,
              index: ae,
              children: k.content
            },
            k.label
          ))
        ] }),
        l && N !== vi.HardForkInitiation && Object.keys(l).length !== 0 && Object.entries(l).map(([k, ae]) => /* @__PURE__ */ v(
          St,
          {
            isCopyButton: k.toLowerCase().includes("address"),
            label: k,
            text: ae,
            dataTestId: Of(k)
          }
        )),
        /* @__PURE__ */ v(_1, { links: y })
      ]
    }
  );
}, E1 = ({
  abstract: e,
  motivation: t,
  rationale: n
}) => /* @__PURE__ */ G(Ye, { children: [
  /* @__PURE__ */ v(
    St,
    {
      label: "Abstract",
      text: e,
      textVariant: "longText",
      dataTestId: "abstract",
      isMarkdown: !0
    }
  ),
  /* @__PURE__ */ v(
    St,
    {
      label: "Motivation",
      text: t,
      textVariant: "longText",
      dataTestId: "motivation",
      isMarkdown: !0
    }
  ),
  /* @__PURE__ */ v(
    St,
    {
      label: "Rationale",
      text: n,
      textVariant: "longText",
      dataTestId: "rationale",
      isMarkdown: !0
    }
  )
] }), k1 = ({
  details: e,
  prevGovActionId: t
}) => {
  const { epochParams: n } = Ve();
  return /* @__PURE__ */ G(Q, { sx: { display: "flex", flexDirection: "column", gap: 3, pb: 3 }, children: [
    /* @__PURE__ */ G(Q, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ v(se, { variant: "body2", children: "Current version" }),
      /* @__PURE__ */ v(se, { variant: "body2", children: n ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        `${n == null ? void 0 : n.protocol_major}.${n == null ? void 0 : n.protocol_minor}`
      ) : "-" })
    ] }),
    /* @__PURE__ */ G(Q, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ v(se, { variant: "body2", children: "Proposed version" }),
      /* @__PURE__ */ v(se, { variant: "body2", children: e ? `${e.major}.${e.minor}` : "-" })
    ] }),
    /* @__PURE__ */ G(Q, { sx: { display: "flex", flexDirection: "column", gap: 1.5 }, children: [
      /* @__PURE__ */ v(se, { variant: "body2", children: "Previous Governance Action ID" }),
      t ? /* @__PURE__ */ G(Q, { sx: { display: "flex", gap: 1 }, children: [
        /* @__PURE__ */ v(
          se,
          {
            variant: "body1",
            sx: {
              fontWeight: 400,
              maxWidth: 283,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "primaryBlue"
            },
            children: t
          }
        ),
        /* @__PURE__ */ v(rd, { text: t, variant: "blueThin" })
      ] }) : /* @__PURE__ */ v(se, { variant: "body2", children: "-" })
    ] })
  ] });
}, O1 = ({
  dataTestId: e,
  label: t,
  onClick: n,
  icon: r,
  sx: i,
  cutWithEllipsis: a
}) => /* @__PURE__ */ G(
  Q,
  {
    "data-testid": e ?? `${t.split(" ").join("-")}-link`,
    sx: {
      alignItems: "center",
      cursor: "pointer",
      display: "flex",
      width: "fit-content",
      ...a && {
        overflow: "hidden",
        width: "auto"
      },
      ...i
    },
    onClick: n,
    children: [
      r || /* @__PURE__ */ v(Vh, { color: "primary", sx: { fontSize: 14 } }),
      /* @__PURE__ */ v(
        se,
        {
          color: "primary",
          fontWeight: 400,
          variant: "body2",
          sx: {
            ml: 0.5,
            ...a && {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }
          },
          children: t
        }
      )
    ]
  }
), _1 = ({
  links: e
}) => {
  const { isMobile: t } = Ie(), { openModal: n } = Yt();
  return e ? /* @__PURE__ */ G(Ye, { children: [
    /* @__PURE__ */ v(
      se,
      {
        sx: {
          fontSize: 14,
          fontWeight: 600,
          lineHeight: "20px",
          color: "neutralGray",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          my: 2
        },
        "data-testid": "supporting-links",
        children: "Supporting links"
      }
    ),
    /* @__PURE__ */ v(
      Q,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: t ? void 0 : "1fr 1fr",
          columnGap: 2,
          rowGap: 2
        },
        children: e.map((r) => /* @__PURE__ */ v(
          O1,
          {
            label: r,
            onClick: () => {
              n({
                type: "externalLink",
                state: {
                  externalLink: r
                }
              });
            },
            icon: /* @__PURE__ */ v("img", { alt: "link", src: Ge.link }),
            cutWithEllipsis: !0
          },
          r
        ))
      }
    )
  ] }) : null;
}, T1 = ({
  setIsVoteSubmitted: e,
  isOneColumn: t,
  isVoter: n,
  vote: r,
  isDashboard: i,
  isInProgress: a,
  proposal: o
}) => {
  const { isVotingOnGovernanceActionEnabled: s } = Ve(), { screenWidth: l } = Ie(), u = (i && l < 1368) ?? l < 1100;
  return /* @__PURE__ */ v(
    Q,
    {
      sx: {
        borderRadius: t ? "0 0 20px 20px" : "0 20px 20px 0",
        bgcolor: "rgba(255, 255, 255, 0.60)",
        p: `40px ${u ? "24px" : "80px"}`
      },
      children: n && s(o.type) ? /* @__PURE__ */ v(
        CE,
        {
          setIsVoteSubmitted: e,
          proposal: o,
          previousVote: r,
          isInProgress: a
        }
      ) : /* @__PURE__ */ v(mh, { votes: o })
    }
  );
};
var eo = {}, to = {}, no = {}, Au;
function fn() {
  return Au || (Au = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = t;
    function t() {
    }
    t.prototype = {
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      diff: function(i, a) {
        var o, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = s.callback;
        typeof s == "function" && (l = s, s = {}), this.options = s;
        var u = this;
        function c(L) {
          return l ? (setTimeout(function() {
            l(void 0, L);
          }, 0), !0) : L;
        }
        i = this.castInput(i), a = this.castInput(a), i = this.removeEmpty(this.tokenize(i)), a = this.removeEmpty(this.tokenize(a));
        var f = a.length, h = i.length, d = 1, p = f + h;
        s.maxEditLength && (p = Math.min(p, s.maxEditLength));
        var m = (
          /*istanbul ignore start*/
          (o = /*istanbul ignore end*/
          s.timeout) !== null && o !== void 0 ? o : 1 / 0
        ), y = Date.now() + m, g = [{
          oldPos: -1,
          lastComponent: void 0
        }], w = this.extractCommon(g[0], a, i, 0);
        if (g[0].oldPos + 1 >= h && w + 1 >= f)
          return c([{
            value: this.join(a),
            count: a.length
          }]);
        var x = -1 / 0, N = 1 / 0;
        function R() {
          for (var L = Math.max(x, -d); L <= Math.min(N, d); L += 2) {
            var C = (
              /*istanbul ignore start*/
              void 0
            ), F = g[L - 1], P = g[L + 1];
            F && (g[L - 1] = void 0);
            var b = !1;
            if (P) {
              var E = P.oldPos - L;
              b = P && 0 <= E && E < f;
            }
            var O = F && F.oldPos + 1 < h;
            if (!b && !O) {
              g[L] = void 0;
              continue;
            }
            if (!O || b && F.oldPos + 1 < P.oldPos ? C = u.addToPath(P, !0, void 0, 0) : C = u.addToPath(F, void 0, !0, 1), w = u.extractCommon(C, a, i, L), C.oldPos + 1 >= h && w + 1 >= f)
              return c(n(u, C.lastComponent, a, i, u.useLongestToken));
            g[L] = C, C.oldPos + 1 >= h && (N = Math.min(N, L - 1)), w + 1 >= f && (x = Math.max(x, L + 1));
          }
          d++;
        }
        if (l)
          (function L() {
            setTimeout(function() {
              if (d > p || Date.now() > y)
                return l();
              R() || L();
            }, 0);
          })();
        else
          for (; d <= p && Date.now() <= y; ) {
            var A = R();
            if (A)
              return A;
          }
      },
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      addToPath: function(i, a, o, s) {
        var l = i.lastComponent;
        return l && l.added === a && l.removed === o ? {
          oldPos: i.oldPos + s,
          lastComponent: {
            count: l.count + 1,
            added: a,
            removed: o,
            previousComponent: l.previousComponent
          }
        } : {
          oldPos: i.oldPos + s,
          lastComponent: {
            count: 1,
            added: a,
            removed: o,
            previousComponent: l
          }
        };
      },
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      extractCommon: function(i, a, o, s) {
        for (var l = a.length, u = o.length, c = i.oldPos, f = c - s, h = 0; f + 1 < l && c + 1 < u && this.equals(a[f + 1], o[c + 1]); )
          f++, c++, h++;
        return h && (i.lastComponent = {
          count: h,
          previousComponent: i.lastComponent
        }), i.oldPos = c, f;
      },
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      equals: function(i, a) {
        return this.options.comparator ? this.options.comparator(i, a) : i === a || this.options.ignoreCase && i.toLowerCase() === a.toLowerCase();
      },
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      removeEmpty: function(i) {
        for (var a = [], o = 0; o < i.length; o++)
          i[o] && a.push(i[o]);
        return a;
      },
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      castInput: function(i) {
        return i;
      },
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      tokenize: function(i) {
        return i.split("");
      },
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      join: function(i) {
        return i.join("");
      }
    };
    function n(r, i, a, o, s) {
      for (var l = [], u; i; )
        l.push(i), u = i.previousComponent, delete i.previousComponent, i = u;
      l.reverse();
      for (var c = 0, f = l.length, h = 0, d = 0; c < f; c++) {
        var p = l[c];
        if (p.removed) {
          if (p.value = r.join(o.slice(d, d + p.count)), d += p.count, c && l[c - 1].added) {
            var y = l[c - 1];
            l[c - 1] = l[c], l[c] = y;
          }
        } else {
          if (!p.added && s) {
            var m = a.slice(h, h + p.count);
            m = m.map(function(w, x) {
              var N = o[d + x];
              return N.length > w.length ? N : w;
            }), p.value = r.join(m);
          } else
            p.value = r.join(a.slice(h, h + p.count));
          h += p.count, p.added || (d += p.count);
        }
      }
      var g = l[f - 1];
      return f > 1 && typeof g.value == "string" && (g.added || g.removed) && r.equals("", g.value) && (l[f - 2].value += g.value, l.pop()), l;
    }
  }(no)), no;
}
var Nn = {}, Pu;
function A1() {
  if (Pu) return Nn;
  Pu = 1, Object.defineProperty(Nn, "__esModule", {
    value: !0
  }), Nn.diffChars = r, Nn.characterDiff = void 0;
  var e = t(fn());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = new /*istanbul ignore start*/
  e.default();
  Nn.characterDiff = n;
  function r(i, a, o) {
    return n.diff(i, a, o);
  }
  return Nn;
}
var dn = {}, ni = {}, Fu;
function Vd() {
  if (Fu) return ni;
  Fu = 1, Object.defineProperty(ni, "__esModule", {
    value: !0
  }), ni.generateOptions = e;
  function e(t, n) {
    if (typeof t == "function")
      n.callback = t;
    else if (t)
      for (var r in t)
        t.hasOwnProperty(r) && (n[r] = t[r]);
    return n;
  }
  return ni;
}
var Du;
function P1() {
  if (Du) return dn;
  Du = 1, Object.defineProperty(dn, "__esModule", {
    value: !0
  }), dn.diffWords = o, dn.diffWordsWithSpace = s, dn.wordDiff = void 0;
  var e = n(fn()), t = Vd();
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  var r = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, i = /\S/, a = new /*istanbul ignore start*/
  e.default();
  dn.wordDiff = a, a.equals = function(l, u) {
    return this.options.ignoreCase && (l = l.toLowerCase(), u = u.toLowerCase()), l === u || this.options.ignoreWhitespace && !i.test(l) && !i.test(u);
  }, a.tokenize = function(l) {
    for (var u = l.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), c = 0; c < u.length - 1; c++)
      !u[c + 1] && u[c + 2] && r.test(u[c]) && r.test(u[c + 2]) && (u[c] += u[c + 2], u.splice(c + 1, 2), c--);
    return u;
  };
  function o(l, u, c) {
    return c = /*istanbul ignore start*/
    /*istanbul ignore end*/
    /*istanbul ignore start*/
    (0, t.generateOptions)(c, {
      ignoreWhitespace: !0
    }), a.diff(l, u, c);
  }
  function s(l, u, c) {
    return a.diff(l, u, c);
  }
  return dn;
}
var hn = {}, Ru;
function As() {
  if (Ru) return hn;
  Ru = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.diffLines = i, hn.diffTrimmedLines = a, hn.lineDiff = void 0;
  var e = n(fn()), t = Vd();
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = new /*istanbul ignore start*/
  e.default();
  hn.lineDiff = r, r.tokenize = function(o) {
    this.options.stripTrailingCr && (o = o.replace(/\r\n/g, `
`));
    var s = [], l = o.split(/(\n|\r\n)/);
    l[l.length - 1] || l.pop();
    for (var u = 0; u < l.length; u++) {
      var c = l[u];
      u % 2 && !this.options.newlineIsToken ? s[s.length - 1] += c : (this.options.ignoreWhitespace && (c = c.trim()), s.push(c));
    }
    return s;
  };
  function i(o, s, l) {
    return r.diff(o, s, l);
  }
  function a(o, s, l) {
    var u = (
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      /*istanbul ignore start*/
      (0, t.generateOptions)(l, {
        ignoreWhitespace: !0
      })
    );
    return r.diff(o, s, u);
  }
  return hn;
}
var Mn = {}, Iu;
function F1() {
  if (Iu) return Mn;
  Iu = 1, Object.defineProperty(Mn, "__esModule", {
    value: !0
  }), Mn.diffSentences = r, Mn.sentenceDiff = void 0;
  var e = t(fn());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = new /*istanbul ignore start*/
  e.default();
  Mn.sentenceDiff = n, n.tokenize = function(i) {
    return i.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  function r(i, a, o) {
    return n.diff(i, a, o);
  }
  return Mn;
}
var Ln = {}, Nu;
function D1() {
  if (Nu) return Ln;
  Nu = 1, Object.defineProperty(Ln, "__esModule", {
    value: !0
  }), Ln.diffCss = r, Ln.cssDiff = void 0;
  var e = t(fn());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = new /*istanbul ignore start*/
  e.default();
  Ln.cssDiff = n, n.tokenize = function(i) {
    return i.split(/([{}:;,]|\s+)/);
  };
  function r(i, a, o) {
    return n.diff(i, a, o);
  }
  return Ln;
}
var pn = {}, Mu;
function R1() {
  if (Mu) return pn;
  Mu = 1, Object.defineProperty(pn, "__esModule", {
    value: !0
  }), pn.diffJson = o, pn.canonicalize = s, pn.jsonDiff = void 0;
  var e = n(fn()), t = As();
  function n(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function r(l) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? r = function(c) {
      return typeof c;
    } : r = function(c) {
      return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
    }, r(l);
  }
  var i = Object.prototype.toString, a = new /*istanbul ignore start*/
  e.default();
  pn.jsonDiff = a, a.useLongestToken = !0, a.tokenize = /*istanbul ignore start*/
  t.lineDiff.tokenize, a.castInput = function(l) {
    var u = (
      /*istanbul ignore end*/
      this.options
    ), c = u.undefinedReplacement, f = u.stringifyReplacer, h = f === void 0 ? function(d, p) {
      return (
        /*istanbul ignore end*/
        typeof p > "u" ? c : p
      );
    } : f;
    return typeof l == "string" ? l : JSON.stringify(s(l, null, null, h), h, "  ");
  }, a.equals = function(l, u) {
    return (
      /*istanbul ignore start*/
      e.default.prototype.equals.call(a, l.replace(/,([\r\n])/g, "$1"), u.replace(/,([\r\n])/g, "$1"))
    );
  };
  function o(l, u, c) {
    return a.diff(l, u, c);
  }
  function s(l, u, c, f, h) {
    u = u || [], c = c || [], f && (l = f(h, l));
    var d;
    for (d = 0; d < u.length; d += 1)
      if (u[d] === l)
        return c[d];
    var p;
    if (i.call(l) === "[object Array]") {
      for (u.push(l), p = new Array(l.length), c.push(p), d = 0; d < l.length; d += 1)
        p[d] = s(l[d], u, c, f, h);
      return u.pop(), c.pop(), p;
    }
    if (l && l.toJSON && (l = l.toJSON()), /*istanbul ignore start*/
    r(
      /*istanbul ignore end*/
      l
    ) === "object" && l !== null) {
      u.push(l), p = {}, c.push(p);
      var m = [], y;
      for (y in l)
        l.hasOwnProperty(y) && m.push(y);
      for (m.sort(), d = 0; d < m.length; d += 1)
        y = m[d], p[y] = s(l[y], u, c, f, y);
      u.pop(), c.pop();
    } else
      p = l;
    return p;
  }
  return pn;
}
var $n = {}, Lu;
function I1() {
  if (Lu) return $n;
  Lu = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.diffArrays = r, $n.arrayDiff = void 0;
  var e = t(fn());
  function t(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var n = new /*istanbul ignore start*/
  e.default();
  $n.arrayDiff = n, n.tokenize = function(i) {
    return i.slice();
  }, n.join = n.removeEmpty = function(i) {
    return i;
  };
  function r(i, a, o) {
    return n.diff(i, a, o);
  }
  return $n;
}
var pr = {}, ri = {}, $u;
function Ps() {
  if ($u) return ri;
  $u = 1, Object.defineProperty(ri, "__esModule", {
    value: !0
  }), ri.parsePatch = e;
  function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.split(/\r\n|[\n\v\f\r\x85]/), i = t.match(/\r\n|[\n\v\f\r\x85]/g) || [], a = [], o = 0;
    function s() {
      var c = {};
      for (a.push(c); o < r.length; ) {
        var f = r[o];
        if (/^(\-\-\-|\+\+\+|@@)\s/.test(f))
          break;
        var h = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(f);
        h && (c.index = h[1]), o++;
      }
      for (l(c), l(c), c.hunks = []; o < r.length; ) {
        var d = r[o];
        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(d))
          break;
        if (/^@@/.test(d))
          c.hunks.push(u());
        else {
          if (d && n.strict)
            throw new Error("Unknown line " + (o + 1) + " " + JSON.stringify(d));
          o++;
        }
      }
    }
    function l(c) {
      var f = /^(---|\+\+\+)\s+(.*)$/.exec(r[o]);
      if (f) {
        var h = f[1] === "---" ? "old" : "new", d = f[2].split("	", 2), p = d[0].replace(/\\\\/g, "\\");
        /^".*"$/.test(p) && (p = p.substr(1, p.length - 2)), c[h + "FileName"] = p, c[h + "Header"] = (d[1] || "").trim(), o++;
      }
    }
    function u() {
      var c = o, f = r[o++], h = f.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), d = {
        oldStart: +h[1],
        oldLines: typeof h[2] > "u" ? 1 : +h[2],
        newStart: +h[3],
        newLines: typeof h[4] > "u" ? 1 : +h[4],
        lines: [],
        linedelimiters: []
      };
      d.oldLines === 0 && (d.oldStart += 1), d.newLines === 0 && (d.newStart += 1);
      for (var p = 0, m = 0; o < r.length && !(r[o].indexOf("--- ") === 0 && o + 2 < r.length && r[o + 1].indexOf("+++ ") === 0 && r[o + 2].indexOf("@@") === 0); o++) {
        var y = r[o].length == 0 && o != r.length - 1 ? " " : r[o][0];
        if (y === "+" || y === "-" || y === " " || y === "\\")
          d.lines.push(r[o]), d.linedelimiters.push(i[o] || `
`), y === "+" ? p++ : y === "-" ? m++ : y === " " && (p++, m++);
        else
          break;
      }
      if (!p && d.newLines === 1 && (d.newLines = 0), !m && d.oldLines === 1 && (d.oldLines = 0), n.strict) {
        if (p !== d.newLines)
          throw new Error("Added line count did not match for hunk at line " + (c + 1));
        if (m !== d.oldLines)
          throw new Error("Removed line count did not match for hunk at line " + (c + 1));
      }
      return d;
    }
    for (; o < r.length; )
      s();
    return a;
  }
  return ri;
}
var ro = {}, Bu;
function N1() {
  return Bu || (Bu = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = t;
    function t(n, r, i) {
      var a = !0, o = !1, s = !1, l = 1;
      return function u() {
        if (a && !s) {
          if (o ? l++ : a = !1, n + l <= i)
            return l;
          s = !0;
        }
        if (!o)
          return s || (a = !0), r <= n - l ? -l++ : (o = !0, u());
      };
    }
  }(ro)), ro;
}
var ju;
function M1() {
  if (ju) return pr;
  ju = 1, Object.defineProperty(pr, "__esModule", {
    value: !0
  }), pr.applyPatch = r, pr.applyPatches = i;
  var e = Ps(), t = n(N1());
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function r(a, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (typeof o == "string" && (o = /*istanbul ignore start*/
    /*istanbul ignore end*/
    /*istanbul ignore start*/
    (0, e.parsePatch)(o)), Array.isArray(o)) {
      if (o.length > 1)
        throw new Error("applyPatch only works with a single input.");
      o = o[0];
    }
    var l = a.split(/\r\n|[\n\v\f\r\x85]/), u = a.match(/\r\n|[\n\v\f\r\x85]/g) || [], c = o.hunks, f = s.compareLine || function(S, J, ee, k) {
      return (
        /*istanbul ignore end*/
        J === k
      );
    }, h = 0, d = s.fuzzFactor || 0, p = 0, m = 0, y, g;
    function w(S, J) {
      for (var ee = 0; ee < S.lines.length; ee++) {
        var k = S.lines[ee], ae = k.length > 0 ? k[0] : " ", oe = k.length > 0 ? k.substr(1) : k;
        if (ae === " " || ae === "-") {
          if (!f(J + 1, l[J], ae, oe) && (h++, h > d))
            return !1;
          J++;
        }
      }
      return !0;
    }
    for (var x = 0; x < c.length; x++) {
      for (var N = c[x], R = l.length - N.oldLines, A = 0, L = m + N.oldStart - 1, C = (
        /*istanbul ignore start*/
        /*istanbul ignore end*/
        /*istanbul ignore start*/
        (0, t.default)(L, p, R)
      ); A !== void 0; A = C())
        if (w(N, L + A)) {
          N.offset = m += A;
          break;
        }
      if (A === void 0)
        return !1;
      p = N.offset + N.oldStart + N.oldLines;
    }
    for (var F = 0, P = 0; P < c.length; P++) {
      var b = c[P], E = b.oldStart + b.offset + F - 1;
      F += b.newLines - b.oldLines;
      for (var O = 0; O < b.lines.length; O++) {
        var T = b.lines[O], M = T.length > 0 ? T[0] : " ", B = T.length > 0 ? T.substr(1) : T, z = b.linedelimiters && b.linedelimiters[O] || `
`;
        if (M === " ")
          E++;
        else if (M === "-")
          l.splice(E, 1), u.splice(E, 1);
        else if (M === "+")
          l.splice(E, 0, B), u.splice(E, 0, z), E++;
        else if (M === "\\") {
          var H = b.lines[O - 1] ? b.lines[O - 1][0] : null;
          H === "+" ? y = !0 : H === "-" && (g = !0);
        }
      }
    }
    if (y)
      for (; !l[l.length - 1]; )
        l.pop(), u.pop();
    else g && (l.push(""), u.push(`
`));
    for (var K = 0; K < l.length - 1; K++)
      l[K] = l[K] + u[K];
    return l.join("");
  }
  function i(a, o) {
    typeof a == "string" && (a = /*istanbul ignore start*/
    /*istanbul ignore end*/
    /*istanbul ignore start*/
    (0, e.parsePatch)(a));
    var s = 0;
    function l() {
      var u = a[s++];
      if (!u)
        return o.complete();
      o.loadFile(u, function(c, f) {
        if (c)
          return o.complete(c);
        var h = r(f, u, o);
        o.patched(u, h, function(d) {
          if (d)
            return o.complete(d);
          l();
        });
      });
    }
    l();
  }
  return pr;
}
var mr = {}, mn = {}, zu;
function Wd() {
  if (zu) return mn;
  zu = 1, Object.defineProperty(mn, "__esModule", {
    value: !0
  }), mn.structuredPatch = s, mn.formatPatch = l, mn.createTwoFilesPatch = u, mn.createPatch = c;
  var e = As();
  function t(f) {
    return a(f) || i(f) || r(f) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function r(f, h) {
    if (f) {
      if (typeof f == "string") return o(f, h);
      var d = Object.prototype.toString.call(f).slice(8, -1);
      if (d === "Object" && f.constructor && (d = f.constructor.name), d === "Map" || d === "Set") return Array.from(f);
      if (d === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)) return o(f, h);
    }
  }
  function i(f) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(f)) return Array.from(f);
  }
  function a(f) {
    if (Array.isArray(f)) return o(f);
  }
  function o(f, h) {
    (h == null || h > f.length) && (h = f.length);
    for (var d = 0, p = new Array(h); d < h; d++)
      p[d] = f[d];
    return p;
  }
  function s(f, h, d, p, m, y, g) {
    g || (g = {}), typeof g.context > "u" && (g.context = 4);
    var w = (
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      /*istanbul ignore start*/
      (0, e.diffLines)(d, p, g)
    );
    if (!w)
      return;
    w.push({
      value: "",
      lines: []
    });
    function x(E) {
      return E.map(function(O) {
        return " " + O;
      });
    }
    for (var N = [], R = 0, A = 0, L = [], C = 1, F = 1, P = function(O) {
      var T = w[O], M = T.lines || T.value.replace(/\n$/, "").split(`
`);
      if (T.lines = M, T.added || T.removed) {
        var B;
        if (!R) {
          var z = w[O - 1];
          R = C, A = F, z && (L = g.context > 0 ? x(z.lines.slice(-g.context)) : [], R -= L.length, A -= L.length);
        }
        (B = /*istanbul ignore end*/
        L).push.apply(
          /*istanbul ignore start*/
          B,
          /*istanbul ignore start*/
          t(
            /*istanbul ignore end*/
            M.map(function(oe) {
              return (T.added ? "+" : "-") + oe;
            })
          )
        ), T.added ? F += M.length : C += M.length;
      } else {
        if (R)
          if (M.length <= g.context * 2 && O < w.length - 2) {
            var H;
            (H = /*istanbul ignore end*/
            L).push.apply(
              /*istanbul ignore start*/
              H,
              /*istanbul ignore start*/
              t(
                /*istanbul ignore end*/
                x(M)
              )
            );
          } else {
            var K, S = Math.min(M.length, g.context);
            (K = /*istanbul ignore end*/
            L).push.apply(
              /*istanbul ignore start*/
              K,
              /*istanbul ignore start*/
              t(
                /*istanbul ignore end*/
                x(M.slice(0, S))
              )
            );
            var J = {
              oldStart: R,
              oldLines: C - R + S,
              newStart: A,
              newLines: F - A + S,
              lines: L
            };
            if (O >= w.length - 2 && M.length <= g.context) {
              var ee = /\n$/.test(d), k = /\n$/.test(p), ae = M.length == 0 && L.length > J.oldLines;
              !ee && ae && d.length > 0 && L.splice(J.oldLines, 0, "\\ No newline at end of file"), (!ee && !ae || !k) && L.push("\\ No newline at end of file");
            }
            N.push(J), R = 0, A = 0, L = [];
          }
        C += M.length, F += M.length;
      }
    }, b = 0; b < w.length; b++)
      P(
        /*istanbul ignore end*/
        b
      );
    return {
      oldFileName: f,
      newFileName: h,
      oldHeader: m,
      newHeader: y,
      hunks: N
    };
  }
  function l(f) {
    if (Array.isArray(f))
      return f.map(l).join(`
`);
    var h = [];
    f.oldFileName == f.newFileName && h.push("Index: " + f.oldFileName), h.push("==================================================================="), h.push("--- " + f.oldFileName + (typeof f.oldHeader > "u" ? "" : "	" + f.oldHeader)), h.push("+++ " + f.newFileName + (typeof f.newHeader > "u" ? "" : "	" + f.newHeader));
    for (var d = 0; d < f.hunks.length; d++) {
      var p = f.hunks[d];
      p.oldLines === 0 && (p.oldStart -= 1), p.newLines === 0 && (p.newStart -= 1), h.push("@@ -" + p.oldStart + "," + p.oldLines + " +" + p.newStart + "," + p.newLines + " @@"), h.push.apply(h, p.lines);
    }
    return h.join(`
`) + `
`;
  }
  function u(f, h, d, p, m, y, g) {
    return l(s(f, h, d, p, m, y, g));
  }
  function c(f, h, d, p, m, y) {
    return u(f, f, h, d, p, m, y);
  }
  return mn;
}
var gr = {}, Uu;
function L1() {
  if (Uu) return gr;
  Uu = 1, Object.defineProperty(gr, "__esModule", {
    value: !0
  }), gr.arrayEqual = e, gr.arrayStartsWith = t;
  function e(n, r) {
    return n.length !== r.length ? !1 : t(n, r);
  }
  function t(n, r) {
    if (r.length > n.length)
      return !1;
    for (var i = 0; i < r.length; i++)
      if (r[i] !== n[i])
        return !1;
    return !0;
  }
  return gr;
}
var Vu;
function $1() {
  if (Vu) return mr;
  Vu = 1, Object.defineProperty(mr, "__esModule", {
    value: !0
  }), mr.calcLineCount = u, mr.merge = c;
  var e = Wd(), t = Ps(), n = L1();
  function r(b) {
    return s(b) || o(b) || a(b) || i();
  }
  function i() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a(b, E) {
    if (b) {
      if (typeof b == "string") return l(b, E);
      var O = Object.prototype.toString.call(b).slice(8, -1);
      if (O === "Object" && b.constructor && (O = b.constructor.name), O === "Map" || O === "Set") return Array.from(b);
      if (O === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O)) return l(b, E);
    }
  }
  function o(b) {
    if (typeof Symbol < "u" && Symbol.iterator in Object(b)) return Array.from(b);
  }
  function s(b) {
    if (Array.isArray(b)) return l(b);
  }
  function l(b, E) {
    (E == null || E > b.length) && (E = b.length);
    for (var O = 0, T = new Array(E); O < E; O++)
      T[O] = b[O];
    return T;
  }
  function u(b) {
    var E = (
      /*istanbul ignore end*/
      P(b.lines)
    ), O = E.oldLines, T = E.newLines;
    O !== void 0 ? b.oldLines = O : delete b.oldLines, T !== void 0 ? b.newLines = T : delete b.newLines;
  }
  function c(b, E, O) {
    b = f(b, O), E = f(E, O);
    var T = {};
    (b.index || E.index) && (T.index = b.index || E.index), (b.newFileName || E.newFileName) && (h(b) ? h(E) ? (T.oldFileName = d(T, b.oldFileName, E.oldFileName), T.newFileName = d(T, b.newFileName, E.newFileName), T.oldHeader = d(T, b.oldHeader, E.oldHeader), T.newHeader = d(T, b.newHeader, E.newHeader)) : (T.oldFileName = b.oldFileName, T.newFileName = b.newFileName, T.oldHeader = b.oldHeader, T.newHeader = b.newHeader) : (T.oldFileName = E.oldFileName || b.oldFileName, T.newFileName = E.newFileName || b.newFileName, T.oldHeader = E.oldHeader || b.oldHeader, T.newHeader = E.newHeader || b.newHeader)), T.hunks = [];
    for (var M = 0, B = 0, z = 0, H = 0; M < b.hunks.length || B < E.hunks.length; ) {
      var K = b.hunks[M] || {
        oldStart: 1 / 0
      }, S = E.hunks[B] || {
        oldStart: 1 / 0
      };
      if (p(K, S))
        T.hunks.push(m(K, z)), M++, H += K.newLines - K.oldLines;
      else if (p(S, K))
        T.hunks.push(m(S, H)), B++, z += S.newLines - S.oldLines;
      else {
        var J = {
          oldStart: Math.min(K.oldStart, S.oldStart),
          oldLines: 0,
          newStart: Math.min(K.newStart + z, S.oldStart + H),
          newLines: 0,
          lines: []
        };
        y(J, K.oldStart, K.lines, S.oldStart, S.lines), B++, M++, T.hunks.push(J);
      }
    }
    return T;
  }
  function f(b, E) {
    if (typeof b == "string") {
      if (/^@@/m.test(b) || /^Index:/m.test(b))
        return (
          /*istanbul ignore start*/
          /*istanbul ignore end*/
          /*istanbul ignore start*/
          (0, t.parsePatch)(b)[0]
        );
      if (!E)
        throw new Error("Must provide a base reference or pass in a patch");
      return (
        /*istanbul ignore start*/
        /*istanbul ignore end*/
        /*istanbul ignore start*/
        (0, e.structuredPatch)(void 0, void 0, E, b)
      );
    }
    return b;
  }
  function h(b) {
    return b.newFileName && b.newFileName !== b.oldFileName;
  }
  function d(b, E, O) {
    return E === O ? E : (b.conflict = !0, {
      mine: E,
      theirs: O
    });
  }
  function p(b, E) {
    return b.oldStart < E.oldStart && b.oldStart + b.oldLines < E.oldStart;
  }
  function m(b, E) {
    return {
      oldStart: b.oldStart,
      oldLines: b.oldLines,
      newStart: b.newStart + E,
      newLines: b.newLines,
      lines: b.lines
    };
  }
  function y(b, E, O, T, M) {
    var B = {
      offset: E,
      lines: O,
      index: 0
    }, z = {
      offset: T,
      lines: M,
      index: 0
    };
    for (N(b, B, z), N(b, z, B); B.index < B.lines.length && z.index < z.lines.length; ) {
      var H = B.lines[B.index], K = z.lines[z.index];
      if ((H[0] === "-" || H[0] === "+") && (K[0] === "-" || K[0] === "+"))
        g(b, B, z);
      else if (H[0] === "+" && K[0] === " ") {
        var S;
        (S = /*istanbul ignore end*/
        b.lines).push.apply(
          /*istanbul ignore start*/
          S,
          /*istanbul ignore start*/
          r(
            /*istanbul ignore end*/
            A(B)
          )
        );
      } else if (K[0] === "+" && H[0] === " ") {
        var J;
        (J = /*istanbul ignore end*/
        b.lines).push.apply(
          /*istanbul ignore start*/
          J,
          /*istanbul ignore start*/
          r(
            /*istanbul ignore end*/
            A(z)
          )
        );
      } else H[0] === "-" && K[0] === " " ? w(b, B, z) : K[0] === "-" && H[0] === " " ? w(b, z, B, !0) : H === K ? (b.lines.push(H), B.index++, z.index++) : x(b, A(B), A(z));
    }
    R(b, B), R(b, z), u(b);
  }
  function g(b, E, O) {
    var T = A(E), M = A(O);
    if (C(T) && C(M)) {
      if (
        /*istanbul ignore start*/
        /*istanbul ignore end*/
        /*istanbul ignore start*/
        (0, n.arrayStartsWith)(T, M) && F(O, T, T.length - M.length)
      ) {
        var B;
        (B = /*istanbul ignore end*/
        b.lines).push.apply(
          /*istanbul ignore start*/
          B,
          /*istanbul ignore start*/
          r(
            /*istanbul ignore end*/
            T
          )
        );
        return;
      } else if (
        /*istanbul ignore start*/
        /*istanbul ignore end*/
        /*istanbul ignore start*/
        (0, n.arrayStartsWith)(M, T) && F(E, M, M.length - T.length)
      ) {
        var z;
        (z = /*istanbul ignore end*/
        b.lines).push.apply(
          /*istanbul ignore start*/
          z,
          /*istanbul ignore start*/
          r(
            /*istanbul ignore end*/
            M
          )
        );
        return;
      }
    } else if (
      /*istanbul ignore start*/
      /*istanbul ignore end*/
      /*istanbul ignore start*/
      (0, n.arrayEqual)(T, M)
    ) {
      var H;
      (H = /*istanbul ignore end*/
      b.lines).push.apply(
        /*istanbul ignore start*/
        H,
        /*istanbul ignore start*/
        r(
          /*istanbul ignore end*/
          T
        )
      );
      return;
    }
    x(b, T, M);
  }
  function w(b, E, O, T) {
    var M = A(E), B = L(O, M);
    if (B.merged) {
      var z;
      (z = /*istanbul ignore end*/
      b.lines).push.apply(
        /*istanbul ignore start*/
        z,
        /*istanbul ignore start*/
        r(
          /*istanbul ignore end*/
          B.merged
        )
      );
    } else
      x(b, T ? B : M, T ? M : B);
  }
  function x(b, E, O) {
    b.conflict = !0, b.lines.push({
      conflict: !0,
      mine: E,
      theirs: O
    });
  }
  function N(b, E, O) {
    for (; E.offset < O.offset && E.index < E.lines.length; ) {
      var T = E.lines[E.index++];
      b.lines.push(T), E.offset++;
    }
  }
  function R(b, E) {
    for (; E.index < E.lines.length; ) {
      var O = E.lines[E.index++];
      b.lines.push(O);
    }
  }
  function A(b) {
    for (var E = [], O = b.lines[b.index][0]; b.index < b.lines.length; ) {
      var T = b.lines[b.index];
      if (O === "-" && T[0] === "+" && (O = "+"), O === T[0])
        E.push(T), b.index++;
      else
        break;
    }
    return E;
  }
  function L(b, E) {
    for (var O = [], T = [], M = 0, B = !1, z = !1; M < E.length && b.index < b.lines.length; ) {
      var H = b.lines[b.index], K = E[M];
      if (K[0] === "+")
        break;
      if (B = B || H[0] !== " ", T.push(K), M++, H[0] === "+")
        for (z = !0; H[0] === "+"; )
          O.push(H), H = b.lines[++b.index];
      K.substr(1) === H.substr(1) ? (O.push(H), b.index++) : z = !0;
    }
    if ((E[M] || "")[0] === "+" && B && (z = !0), z)
      return O;
    for (; M < E.length; )
      T.push(E[M++]);
    return {
      merged: T,
      changes: O
    };
  }
  function C(b) {
    return b.reduce(function(E, O) {
      return E && O[0] === "-";
    }, !0);
  }
  function F(b, E, O) {
    for (var T = 0; T < O; T++) {
      var M = E[E.length - O + T].substr(1);
      if (b.lines[b.index + T] !== " " + M)
        return !1;
    }
    return b.index += O, !0;
  }
  function P(b) {
    var E = 0, O = 0;
    return b.forEach(function(T) {
      if (typeof T != "string") {
        var M = P(T.mine), B = P(T.theirs);
        E !== void 0 && (M.oldLines === B.oldLines ? E += M.oldLines : E = void 0), O !== void 0 && (M.newLines === B.newLines ? O += M.newLines : O = void 0);
      } else
        O !== void 0 && (T[0] === "+" || T[0] === " ") && O++, E !== void 0 && (T[0] === "-" || T[0] === " ") && E++;
    }), {
      oldLines: E,
      newLines: O
    };
  }
  return mr;
}
var ii = {}, Wu;
function B1() {
  if (Wu) return ii;
  Wu = 1, Object.defineProperty(ii, "__esModule", {
    value: !0
  }), ii.reversePatch = r;
  function e(i, a) {
    var o = Object.keys(i);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(i);
      a && (s = s.filter(function(l) {
        return Object.getOwnPropertyDescriptor(i, l).enumerable;
      })), o.push.apply(o, s);
    }
    return o;
  }
  function t(i) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a] != null ? arguments[a] : {};
      a % 2 ? e(Object(o), !0).forEach(function(s) {
        n(i, s, o[s]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : e(Object(o)).forEach(function(s) {
        Object.defineProperty(i, s, Object.getOwnPropertyDescriptor(o, s));
      });
    }
    return i;
  }
  function n(i, a, o) {
    return a in i ? Object.defineProperty(i, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : i[a] = o, i;
  }
  function r(i) {
    return Array.isArray(i) ? i.map(r).reverse() : (
      /*istanbul ignore start*/
      t(t(
        {},
        /*istanbul ignore end*/
        i
      ), {}, {
        oldFileName: i.newFileName,
        oldHeader: i.newHeader,
        newFileName: i.oldFileName,
        newHeader: i.oldHeader,
        hunks: i.hunks.map(function(a) {
          return {
            oldLines: a.newLines,
            oldStart: a.newStart,
            newLines: a.oldLines,
            newStart: a.oldStart,
            linedelimiters: a.linedelimiters,
            lines: a.lines.map(function(o) {
              return o.startsWith("-") ? (
                /*istanbul ignore start*/
                "+".concat(
                  /*istanbul ignore end*/
                  o.slice(1)
                )
              ) : o.startsWith("+") ? (
                /*istanbul ignore start*/
                "-".concat(
                  /*istanbul ignore end*/
                  o.slice(1)
                )
              ) : o;
            })
          };
        })
      })
    );
  }
  return ii;
}
var ai = {}, qu;
function j1() {
  if (qu) return ai;
  qu = 1, Object.defineProperty(ai, "__esModule", {
    value: !0
  }), ai.convertChangesToDMP = e;
  function e(t) {
    for (var n = [], r, i, a = 0; a < t.length; a++)
      r = t[a], r.added ? i = 1 : r.removed ? i = -1 : i = 0, n.push([i, r.value]);
    return n;
  }
  return ai;
}
var oi = {}, Hu;
function z1() {
  if (Hu) return oi;
  Hu = 1, Object.defineProperty(oi, "__esModule", {
    value: !0
  }), oi.convertChangesToXML = e;
  function e(n) {
    for (var r = [], i = 0; i < n.length; i++) {
      var a = n[i];
      a.added ? r.push("<ins>") : a.removed && r.push("<del>"), r.push(t(a.value)), a.added ? r.push("</ins>") : a.removed && r.push("</del>");
    }
    return r.join("");
  }
  function t(n) {
    var r = n;
    return r = r.replace(/&/g, "&amp;"), r = r.replace(/</g, "&lt;"), r = r.replace(/>/g, "&gt;"), r = r.replace(/"/g, "&quot;"), r;
  }
  return oi;
}
var Gu;
function U1() {
  return Gu || (Gu = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "Diff", {
      enumerable: !0,
      get: function() {
        return t.default;
      }
    }), Object.defineProperty(e, "diffChars", {
      enumerable: !0,
      get: function() {
        return n.diffChars;
      }
    }), Object.defineProperty(e, "diffWords", {
      enumerable: !0,
      get: function() {
        return r.diffWords;
      }
    }), Object.defineProperty(e, "diffWordsWithSpace", {
      enumerable: !0,
      get: function() {
        return r.diffWordsWithSpace;
      }
    }), Object.defineProperty(e, "diffLines", {
      enumerable: !0,
      get: function() {
        return i.diffLines;
      }
    }), Object.defineProperty(e, "diffTrimmedLines", {
      enumerable: !0,
      get: function() {
        return i.diffTrimmedLines;
      }
    }), Object.defineProperty(e, "diffSentences", {
      enumerable: !0,
      get: function() {
        return a.diffSentences;
      }
    }), Object.defineProperty(e, "diffCss", {
      enumerable: !0,
      get: function() {
        return o.diffCss;
      }
    }), Object.defineProperty(e, "diffJson", {
      enumerable: !0,
      get: function() {
        return s.diffJson;
      }
    }), Object.defineProperty(e, "canonicalize", {
      enumerable: !0,
      get: function() {
        return s.canonicalize;
      }
    }), Object.defineProperty(e, "diffArrays", {
      enumerable: !0,
      get: function() {
        return l.diffArrays;
      }
    }), Object.defineProperty(e, "applyPatch", {
      enumerable: !0,
      get: function() {
        return u.applyPatch;
      }
    }), Object.defineProperty(e, "applyPatches", {
      enumerable: !0,
      get: function() {
        return u.applyPatches;
      }
    }), Object.defineProperty(e, "parsePatch", {
      enumerable: !0,
      get: function() {
        return c.parsePatch;
      }
    }), Object.defineProperty(e, "merge", {
      enumerable: !0,
      get: function() {
        return f.merge;
      }
    }), Object.defineProperty(e, "reversePatch", {
      enumerable: !0,
      get: function() {
        return h.reversePatch;
      }
    }), Object.defineProperty(e, "structuredPatch", {
      enumerable: !0,
      get: function() {
        return d.structuredPatch;
      }
    }), Object.defineProperty(e, "createTwoFilesPatch", {
      enumerable: !0,
      get: function() {
        return d.createTwoFilesPatch;
      }
    }), Object.defineProperty(e, "createPatch", {
      enumerable: !0,
      get: function() {
        return d.createPatch;
      }
    }), Object.defineProperty(e, "formatPatch", {
      enumerable: !0,
      get: function() {
        return d.formatPatch;
      }
    }), Object.defineProperty(e, "convertChangesToDMP", {
      enumerable: !0,
      get: function() {
        return p.convertChangesToDMP;
      }
    }), Object.defineProperty(e, "convertChangesToXML", {
      enumerable: !0,
      get: function() {
        return m.convertChangesToXML;
      }
    });
    var t = y(fn()), n = A1(), r = P1(), i = As(), a = F1(), o = D1(), s = R1(), l = I1(), u = M1(), c = Ps(), f = $1(), h = B1(), d = Wd(), p = j1(), m = z1();
    function y(g) {
      return g && g.__esModule ? g : { default: g };
    }
  }(to)), to;
}
var bt = {}, Qu;
function V1() {
  if (Qu) return bt;
  Qu = 1;
  function e(d, p) {
    let m = 0;
    for (let y = 0; y < d.length; y++)
      switch (d[y].type) {
        case r:
          m += p[0];
          break;
        case n:
          m += p[1];
          break;
        case i:
          m++;
          break;
        default:
          throw Error("unknown change type: " + d[y].type);
      }
    return m;
  }
  function t(d, p, m) {
    this.changes = m, this.aoff = d, this.boff = p, this._alen = -1, this._blen = -1;
  }
  Object.defineProperty(t.prototype, "alen", {
    get: function() {
      return this._alen === -1 ? this._alen = e(this.changes, [1, 0]) : this._alen;
    }
  }), Object.defineProperty(t.prototype, "blen", {
    get: function() {
      return this._blen === -1 ? this._blen = e(this.changes, [0, 1]) : this._blen;
    }
  }), t.prototype.unified = function() {
    let d = [this.unifiedHeader()];
    return this.changes.forEach(function(p) {
      d.push(p.unified());
    }), d.join(`
`);
  }, t.prototype.unifiedHeader = function() {
    let d = this.alen === 1 ? "" : "," + this.alen, p = this.blen === 1 ? "" : "," + this.blen, m = this.alen === 0 ? 0 : 1, y = this.blen === 0 ? 0 : 1;
    return "@@ -" + (this.aoff + m) + d + " +" + (this.boff + y) + p + " @@";
  }, t.prototype.shorthand = function() {
    return this.changes.reduce(function(d, p) {
      return d + p.type;
    }, "");
  }, t.prototype.toString = function() {
    return "{" + this.shorthand() + "} " + this.unifiedHeader();
  };
  const n = "+", r = "-", i = "s";
  function a(d) {
    return d === "s" ? " " : d;
  }
  function o(d, p) {
    this.type = d, this.text = p;
  }
  o.prototype.unified = function() {
    return a(this.type) + this.text;
  }, o.prototype.toString = function() {
    return this.unified();
  };
  function s(d, p) {
    p = p || 60;
    let m = d.count + ": " + a(d.type), y = Math.min(p - m.length, d.value.length - 1), g = d.value.substring(0, y).replace(/\n/g, ",") + (d.value.length > y + 1 ? "..." : "");
    return m + g;
  }
  function l(d, p) {
    if (p === 0)
      return [];
    let m = [], y = d.value;
    if (p === void 0)
      m = y.split(`
`), m[m.length - 1] || m.pop();
    else if (p > 0) {
      let g = h(y, `
`, 0, p, !1);
      m = y.substring(0, g).split(`
`);
    } else {
      let g = y[y.length - 1] === `
` ? y.length - 1 : y.length, w = h(y, `
`, g - 1, -p, !0);
      m = y.substring(w + 1, g).split(`
`);
    }
    return m.map(function(g) {
      return new o(d.type, g);
    });
  }
  function u(d) {
    return "{" + d.reduce(function(p, m) {
      for (let y = 0; y < m.count; y++) p += m.type;
      return p;
    }, "") + "}";
  }
  function c(d, p) {
    return Array.prototype.push.apply(p, d), p;
  }
  function f(d, p, m) {
    let y = [], g = [], w = 0;
    function x() {
      if (g.length) {
        let N = w, R = w;
        if (y.length) {
          let A = y[y.length - 1];
          N += A.aoff + A.alen, R += A.boff + A.blen;
        }
        y.push(new t(N, R, g)), g = [], w = 0;
      }
    }
    for (let N = 0; N < d.length; N++) {
      let R = d[N];
      if (R.type === i) {
        let A = N > 0 ? m : 0, L = N < d.length - 1 ? p : 0, C = Math.max(R.count - (A + L), 0);
        C > 0 ? (c(l(R, A), g), x(), c(l(R, -L), g), w = C) : c(l(R), g);
      } else
        c(l(R), g);
    }
    return x(), y;
  }
  function h(d, p, m, y, g) {
    let w = g ? -1 : 1;
    m -= w;
    for (let x = 0; x < y; x++)
      m = g ? d.lastIndexOf(p, m + w) : d.indexOf(p, m + w);
    return m;
  }
  return bt.hunk = function(d, p, m) {
    return new t(d, p, m);
  }, bt.linechange = function(d, p) {
    return new o(d, p);
  }, bt.lineChanges = l, bt.change2string = s, bt.changes2shorthand = u, bt.nthIndexOf = h, bt.makeHunks = f, bt.ADDED = n, bt.REMOVED = r, bt.UNMODIFIED = i, bt;
}
var Yu;
function W1() {
  return Yu || (Yu = 1, function(e) {
    let t = U1(), n = V1();
    function r(u) {
      return u.added ? n.ADDED : u.removed ? n.REMOVED : n.UNMODIFIED;
    }
    function i(u) {
      return u.length === 0 ? [] : (u[0].type = r(u[0]), u.reduce(function(c, f, h) {
        if (f.type = r(f), c.type === f.type)
          throw Error("repeating change types are not handled: " + c.type + " (at " + (h - 1) + " and " + h + ")");
        return f;
      }));
    }
    function a(u, c) {
      i(u), c = c || {}, c.aname = c.aname || "a", c.bname = c.bname || "b";
      let f = c.context || c.context === 0 ? c.context : 0;
      c.pre_context = c.pre_context || c.pre_context === 0 ? c.pre_context : f, c.post_context = c.post_context || c.post_context === 0 ? c.post_context : f;
      let h = n.makeHunks(u, c.pre_context, c.post_context);
      if (h.length) {
        let d = [];
        return d.push("--- " + c.aname), d.push("+++ " + c.bname), h.forEach(function(p) {
          d.push(p.unified());
        }), d.join(`
`);
      } else
        return "";
    }
    function o(u, c, f) {
      u = Array.isArray(u) ? u.join(`
`) + `
` : u, c = Array.isArray(c) ? c.join(`
`) + `
` : c;
      let h = t.diffLines(u, c, f);
      return h.length === 1 && !h[0].added && !h[0].removed ? [] : h;
    }
    function s(u, c, f) {
      return a(o(u, c), f);
    }
    function l(u, c, f, h, d) {
      d = d || console.log, f = f.ok || f;
      let p = s(u, c, { context: 3, aname: h + " (actual)", bname: h + " (expected)" });
      f(!p, h), p && p.split(`
`).forEach(function(m) {
        d("  " + m);
      });
    }
    e.assertEqual = l, e.diffAsText = s, e.formatLines = a, e.diffLines = o, Object.keys(t).forEach(function(u) {
      e[u] || (e[u] = t[u]);
    });
  }(eo)), eo;
}
var Ku = W1();
function Ju(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ju(Object(n), !0).forEach(function(r) {
      $o(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ju(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $o(e, t, n) {
  return (t = function(r) {
    var i = function(a, o) {
      if (typeof a != "object" || a === null) return a;
      var s = a[Symbol.toPrimitive];
      if (s !== void 0) {
        var l = s.call(a, o);
        if (typeof l != "object") return l;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (o === "string" ? String : Number)(a);
    }(r, "string");
    return typeof i == "symbol" ? i : String(i);
  }(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qn(e, t) {
  if (e == null) return {};
  var n, r, i = function(o, s) {
    if (o == null) return {};
    var l, u, c = {}, f = Object.keys(o);
    for (u = 0; u < f.length; u++) l = f[u], s.indexOf(l) >= 0 || (c[l] = o[l]);
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function kt(e, t) {
  return H1(e) || function(n, r) {
    var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (i != null) {
      var a, o, s, l, u = [], c = !0, f = !1;
      try {
        if (s = (i = i.call(n)).next, r === 0) {
          if (Object(i) !== i) return;
          c = !1;
        } else for (; !(c = (a = s.call(i)).done) && (u.push(a.value), u.length !== r); c = !0) ;
      } catch (h) {
        f = !0, o = h;
      } finally {
        try {
          if (!c && i.return != null && (l = i.return(), Object(l) !== l)) return;
        } finally {
          if (f) throw o;
        }
      }
      return u;
    }
  }(e, t) || Fs(e, t) || Q1();
}
function q1(e) {
  return function(t) {
    if (Array.isArray(t)) return Bo(t);
  }(e) || G1(e) || Fs(e) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function H1(e) {
  if (Array.isArray(e)) return e;
}
function G1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Fs(e, t) {
  if (e) {
    if (typeof e == "string") return Bo(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Bo(e, t) : void 0;
  }
}
function Bo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Q1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y1(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Fs(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(l) {
        throw l;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a, o = !0, s = !1;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var l = n.next();
    return o = l.done, l;
  }, e: function(l) {
    s = !0, a = l;
  }, f: function() {
    try {
      o || n.return == null || n.return();
    } finally {
      if (s) throw a;
    }
  } };
}
var si = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wr(e, t) {
  return e(t = { exports: {} }, t.exports), t.exports;
}
var gt = Wr(function(e) {
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], i = 0; i < arguments.length; i++) {
        var a = arguments[i];
        if (a) {
          var o = typeof a;
          if (o === "string" || o === "number") r.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var s = n.apply(null, a);
              s && r.push(s);
            }
          } else if (o === "object") {
            if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
              r.push(a.toString());
              continue;
            }
            for (var l in a) t.call(a, l) && a[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
}), at = { hunkClassName: "", lineClassName: "", gutterClassName: "", codeClassName: "", monotonous: !1, gutterType: "default", viewType: "split", widgets: {}, hideGutter: !1, selectedChanges: [], generateAnchorID: function() {
}, generateLineClassName: function() {
}, renderGutter: function(e) {
  var t = e.renderDefault;
  return (0, e.wrapInAnchor)(t());
}, codeEvents: {}, gutterEvents: {} }, qd = Ji(at), K1 = qd.Provider, J1 = function() {
  return Xi(qd);
}, X1 = Wr(function(e, t) {
  (function(n) {
    function r(a) {
      var o = a.slice(11), s = null, l = null;
      switch (o.indexOf('"')) {
        case -1:
          s = (f = o.split(" "))[0].slice(2), l = f[1].slice(2);
          break;
        case 0:
          var u = o.indexOf('"', 2);
          s = o.slice(3, u);
          var c = o.indexOf('"', u + 1);
          l = c < 0 ? o.slice(u + 4) : o.slice(c + 3, -1);
          break;
        default:
          var f;
          s = (f = o.split(" "))[0].slice(2), l = f[1].slice(3, -1);
      }
      return { oldPath: s, newPath: l };
    }
    var i = { parse: function(a) {
      for (var o, s, l, u, c, f = [], h = 2, d = a.split(`
`), p = d.length, m = 0; m < p; ) {
        var y = d[m];
        if (y.indexOf("diff --git") === 0) {
          o = { hunks: [], oldEndingNewLine: !0, newEndingNewLine: !0, oldPath: (c = r(y)).oldPath, newPath: c.newPath }, f.push(o);
          var g, w = null;
          e: for (; g = d[++m]; ) {
            var x = g.indexOf(" "), N = x > -1 ? g.slice(0, x) : N;
            switch (N) {
              case "diff":
                m--;
                break e;
              case "deleted":
              case "new":
                var R = g.slice(x + 1);
                R.indexOf("file mode") === 0 && (o[N === "new" ? "newMode" : "oldMode"] = R.slice(10));
                break;
              case "similarity":
                o.similarity = parseInt(g.split(" ")[2], 10);
                break;
              case "index":
                var A = g.slice(x + 1).split(" "), L = A[0].split("..");
                o.oldRevision = L[0], o.newRevision = L[1], A[1] && (o.oldMode = o.newMode = A[1]);
                break;
              case "copy":
              case "rename":
                var C = g.slice(x + 1);
                C.indexOf("from") === 0 ? o.oldPath = C.slice(5) : o.newPath = C.slice(3), w = N;
                break;
              case "---":
                var F = g.slice(x + 1), P = d[++m].slice(4);
                F === "/dev/null" ? (P = P.slice(2), w = "add") : P === "/dev/null" ? (F = F.slice(2), w = "delete") : (w = "modify", F = F.slice(2), P = P.slice(2)), F && (o.oldPath = F), P && (o.newPath = P), h = 5;
                break e;
            }
          }
          o.type = w || "modify";
        } else if (y.indexOf("Binary") === 0) o.isBinary = !0, o.type = y.indexOf("/dev/null and") >= 0 ? "add" : y.indexOf("and /dev/null") >= 0 ? "delete" : "modify", h = 2, o = null;
        else if (h === 5) if (y.indexOf("@@") === 0) {
          var b = /^@@\s+-([0-9]+)(,([0-9]+))?\s+\+([0-9]+)(,([0-9]+))?/.exec(y);
          s = { content: y, oldStart: b[1] - 0, newStart: b[4] - 0, oldLines: b[3] - 0 || 1, newLines: b[6] - 0 || 1, changes: [] }, o.hunks.push(s), l = s.oldStart, u = s.newStart;
        } else {
          var E = y.slice(0, 1), O = { content: y.slice(1) };
          switch (E) {
            case "+":
              O.type = "insert", O.isInsert = !0, O.lineNumber = u, u++;
              break;
            case "-":
              O.type = "delete", O.isDelete = !0, O.lineNumber = l, l++;
              break;
            case " ":
              O.type = "normal", O.isNormal = !0, O.oldLineNumber = l, O.newLineNumber = u, l++, u++;
              break;
            case "\\":
              var T = s.changes[s.changes.length - 1];
              T.isDelete || (o.newEndingNewLine = !1), T.isInsert || (o.oldEndingNewLine = !1);
          }
          O.type && s.changes.push(O);
        }
        m++;
      }
      return f;
    } };
    e.exports = i;
  })();
});
function qr(e) {
  return e.type === "insert";
}
function an(e) {
  return e.type === "delete";
}
function Ar(e) {
  return e.type === "normal";
}
function Z1(e, t) {
  var n = t.nearbySequences === "zip" ? function(r) {
    var i = r.reduce(function(a, o, s) {
      var l = kt(a, 3), u = l[0], c = l[1], f = l[2];
      return c ? qr(o) && f >= 0 ? (u.splice(f + 1, 0, o), [u, o, f + 2]) : (u.push(o), [u, o, an(o) && an(c) ? f : s]) : (u.push(o), [u, o, an(o) ? s : -1]);
    }, [[], null, -1]);
    return kt(i, 1)[0];
  }(e.changes) : e.changes;
  return je(je({}, e), {}, { isPlain: !1, changes: n });
}
function eS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = function(r) {
    if (r.startsWith("diff --git")) return r;
    var i = r.indexOf(`
`), a = r.indexOf(`
`, i + 1), o = r.slice(0, i), s = r.slice(i + 1, a), l = o.split(" ").slice(1, -3).join(" "), u = s.split(" ").slice(1, -3).join(" ");
    return ["diff --git a/".concat(l, " b/").concat(u), "index 1111111..2222222 100644", "--- a/".concat(l), "+++ b/".concat(u), r.slice(a + 1)].join(`
`);
  }(e.trimStart());
  return X1.parse(n).map(function(r) {
    return function(i, a) {
      var o = i.hunks.map(function(s) {
        return Z1(s, a);
      });
      return je(je({}, i), {}, { hunks: o });
    }(r, t);
  });
}
function tS(e) {
  return e[0];
}
function nS(e) {
  return e[e.length - 1];
}
function jo(e) {
  return ["".concat(e, "Start"), "".concat(e, "Lines")];
}
function Pr(e) {
  return e === "old" ? function(t) {
    return qr(t) ? -1 : Ar(t) ? t.oldLineNumber : t.lineNumber;
  } : function(t) {
    return an(t) ? -1 : Ar(t) ? t.newLineNumber : t.lineNumber;
  };
}
function Hd(e, t) {
  return function(n, r) {
    var i = n[e], a = i + n[t];
    return r >= i && r < a;
  };
}
function rS(e, t) {
  return function(n, r, i) {
    var a = n[e] + n[t], o = r[e];
    return i >= a && i < o;
  };
}
function Gd(e) {
  var t = Pr(e), n = function(r) {
    var i = kt(jo(r), 2), a = Hd(i[0], i[1]);
    return function(o, s) {
      return o.find(function(l) {
        return a(l, s);
      });
    };
  }(e);
  return function(r, i) {
    var a = n(r, i);
    if (a) return a.changes.find(function(o) {
      return t(o) === i;
    });
  };
}
function Ds(e) {
  var t = e === "old" ? "new" : "old", n = kt(jo(e), 2), r = n[0], i = n[1], a = kt(jo(t), 2), o = a[0], s = a[1], l = Pr(e), u = Pr(t), c = Hd(r, i), f = rS(r, i);
  return function(h, d) {
    var p = tS(h);
    if (d < p[r]) {
      var m = p[r] - d;
      return p[o] - m;
    }
    var y = nS(h);
    if (y[r] + y[i] <= d) {
      var g = d - y[r] - y[i];
      return y[o] + y[s] + g;
    }
    for (var w = 0; w < h.length; w++) {
      var x = h[w], N = h[w + 1];
      if (c(x, d)) {
        var R = x.changes.findIndex(function(b) {
          return l(b) === d;
        }), A = x.changes[R];
        if (Ar(A)) return u(A);
        var L = an(A) ? R + 1 : R - 1, C = x.changes[L];
        if (!C) return -1;
        var F = qr(A) ? "delete" : "insert";
        return C.type === F ? u(C) : -1;
      }
      if (f(x, N, d)) {
        var P = d - x[r] - x[i];
        return x[o] + x[s] + P;
      }
    }
    throw new Error("Unexpected line position ".concat(d));
  };
}
var iS = function() {
  this.__data__ = [], this.size = 0;
}, Qd = function(e, t) {
  return e === t || e != e && t != t;
}, xa = function(e, t) {
  for (var n = e.length; n--; ) if (Qd(e[n][0], t)) return n;
  return -1;
}, aS = Array.prototype.splice, oS = function(e) {
  var t = this.__data__, n = xa(t, e);
  return !(n < 0) && (n == t.length - 1 ? t.pop() : aS.call(t, n, 1), --this.size, !0);
}, sS = function(e) {
  var t = this.__data__, n = xa(t, e);
  return n < 0 ? void 0 : t[n][1];
}, lS = function(e) {
  return xa(this.__data__, e) > -1;
}, uS = function(e, t) {
  var n = this.__data__, r = xa(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
};
function Bn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Bn.prototype.clear = iS, Bn.prototype.delete = oS, Bn.prototype.get = sS, Bn.prototype.has = lS, Bn.prototype.set = uS;
var Sa = Bn, cS = function() {
  this.__data__ = new Sa(), this.size = 0;
}, fS = function(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}, dS = function(e) {
  return this.__data__.get(e);
}, hS = function(e) {
  return this.__data__.has(e);
}, Yd = typeof si == "object" && si && si.Object === Object && si, pS = typeof self == "object" && self && self.Object === Object && self, Qt = Yd || pS || Function("return this")(), Bt = Qt.Symbol, Kd = Object.prototype, mS = Kd.hasOwnProperty, gS = Kd.toString, yr = Bt ? Bt.toStringTag : void 0, yS = function(e) {
  var t = mS.call(e, yr), n = e[yr];
  try {
    e[yr] = void 0;
    var r = !0;
  } catch {
  }
  var i = gS.call(e);
  return r && (t ? e[yr] = n : delete e[yr]), i;
}, vS = Object.prototype.toString, bS = function(e) {
  return vS.call(e);
}, Xu = Bt ? Bt.toStringTag : void 0, nr = function(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Xu && Xu in Object(e) ? yS(e) : bS(e);
}, Rs = function(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}, Jd = function(e) {
  if (!Rs(e)) return !1;
  var t = nr(e);
  return t == "[object Function]" || t == "[object GeneratorFunction]" || t == "[object AsyncFunction]" || t == "[object Proxy]";
}, io = Qt["__core-js_shared__"], Zu = function() {
  var e = /[^.]+$/.exec(io && io.keys && io.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}(), wS = function(e) {
  return !!Zu && Zu in e;
}, xS = Function.prototype.toString, Tn = function(e) {
  if (e != null) {
    try {
      return xS.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}, SS = /^\[object .+?Constructor\]$/, CS = Function.prototype, ES = Object.prototype, kS = CS.toString, OS = ES.hasOwnProperty, _S = RegExp("^" + kS.call(OS).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), TS = function(e) {
  return !(!Rs(e) || wS(e)) && (Jd(e) ? _S : SS).test(Tn(e));
}, AS = function(e, t) {
  return e == null ? void 0 : e[t];
}, An = function(e, t) {
  var n = AS(e, t);
  return TS(n) ? n : void 0;
}, Fr = An(Qt, "Map"), Dr = An(Object, "create"), PS = function() {
  this.__data__ = Dr ? Dr(null) : {}, this.size = 0;
}, FS = function(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}, DS = Object.prototype.hasOwnProperty, RS = function(e) {
  var t = this.__data__;
  if (Dr) {
    var n = t[e];
    return n === "__lodash_hash_undefined__" ? void 0 : n;
  }
  return DS.call(t, e) ? t[e] : void 0;
}, IS = Object.prototype.hasOwnProperty, NS = function(e) {
  var t = this.__data__;
  return Dr ? t[e] !== void 0 : IS.call(t, e);
}, MS = function(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Dr && t === void 0 ? "__lodash_hash_undefined__" : t, this;
};
function jn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
jn.prototype.clear = PS, jn.prototype.delete = FS, jn.prototype.get = RS, jn.prototype.has = NS, jn.prototype.set = MS;
var ec = jn, LS = function() {
  this.size = 0, this.__data__ = { hash: new ec(), map: new (Fr || Sa)(), string: new ec() };
}, $S = function(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}, Ca = function(e, t) {
  var n = e.__data__;
  return $S(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}, BS = function(e) {
  var t = Ca(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}, jS = function(e) {
  return Ca(this, e).get(e);
}, zS = function(e) {
  return Ca(this, e).has(e);
}, US = function(e, t) {
  var n = Ca(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
};
function zn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
zn.prototype.clear = LS, zn.prototype.delete = BS, zn.prototype.get = jS, zn.prototype.has = zS, zn.prototype.set = US;
var Ea = zn, VS = function(e, t) {
  var n = this.__data__;
  if (n instanceof Sa) {
    var r = n.__data__;
    if (!Fr || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Ea(r);
  }
  return n.set(e, t), this.size = n.size, this;
};
function Un(e) {
  var t = this.__data__ = new Sa(e);
  this.size = t.size;
}
Un.prototype.clear = cS, Un.prototype.delete = fS, Un.prototype.get = dS, Un.prototype.has = hS, Un.prototype.set = VS;
var Ci = Un, WS = function(e) {
  return this.__data__.set(e, "__lodash_hash_undefined__"), this;
}, qS = function(e) {
  return this.__data__.has(e);
};
function Ei(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Ea(); ++t < n; ) this.add(e[t]);
}
Ei.prototype.add = Ei.prototype.push = WS, Ei.prototype.has = qS;
var HS = Ei, GS = function(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; ) if (t(e[n], n, e)) return !0;
  return !1;
}, QS = function(e, t) {
  return e.has(t);
}, Xd = function(e, t, n, r, i, a) {
  var o = 1 & n, s = e.length, l = t.length;
  if (s != l && !(o && l > s)) return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c) return u == t && c == e;
  var f = -1, h = !0, d = 2 & n ? new HS() : void 0;
  for (a.set(e, t), a.set(t, e); ++f < s; ) {
    var p = e[f], m = t[f];
    if (r) var y = o ? r(m, p, f, t, e, a) : r(p, m, f, e, t, a);
    if (y !== void 0) {
      if (y) continue;
      h = !1;
      break;
    }
    if (d) {
      if (!GS(t, function(g, w) {
        if (!QS(d, w) && (p === g || i(p, g, n, r, a))) return d.push(w);
      })) {
        h = !1;
        break;
      }
    } else if (p !== m && !i(p, m, n, r, a)) {
      h = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), h;
}, tc = Qt.Uint8Array, YS = function(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, i) {
    n[++t] = [i, r];
  }), n;
}, KS = function(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}, nc = Bt ? Bt.prototype : void 0, ao = nc ? nc.valueOf : void 0, JS = function(e, t, n, r, i, a, o) {
  switch (n) {
    case "[object DataView]":
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
      e = e.buffer, t = t.buffer;
    case "[object ArrayBuffer]":
      return !(e.byteLength != t.byteLength || !a(new tc(e), new tc(t)));
    case "[object Boolean]":
    case "[object Date]":
    case "[object Number]":
      return Qd(+e, +t);
    case "[object Error]":
      return e.name == t.name && e.message == t.message;
    case "[object RegExp]":
    case "[object String]":
      return e == t + "";
    case "[object Map]":
      var s = YS;
    case "[object Set]":
      var l = 1 & r;
      if (s || (s = KS), e.size != t.size && !l) return !1;
      var u = o.get(e);
      if (u) return u == t;
      r |= 2, o.set(e, t);
      var c = Xd(s(e), s(t), r, i, a, o);
      return o.delete(e), c;
    case "[object Symbol]":
      if (ao) return ao.call(e) == ao.call(t);
  }
  return !1;
}, XS = function(e, t) {
  for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
  return e;
}, Gt = Array.isArray, ZS = function(e, t, n) {
  var r = t(e);
  return Gt(e) ? r : XS(r, n(e));
}, eC = function(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (a[i++] = o);
  }
  return a;
}, tC = function() {
  return [];
}, nC = Object.prototype.propertyIsEnumerable, rc = Object.getOwnPropertySymbols, rC = rc ? function(e) {
  return e == null ? [] : (e = Object(e), eC(rc(e), function(t) {
    return nC.call(e, t);
  }));
} : tC, iC = function(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}, Yn = function(e) {
  return e != null && typeof e == "object";
}, ic = function(e) {
  return Yn(e) && nr(e) == "[object Arguments]";
}, Zd = Object.prototype, aC = Zd.hasOwnProperty, oC = Zd.propertyIsEnumerable, eh = ic(/* @__PURE__ */ function() {
  return arguments;
}()) ? ic : function(e) {
  return Yn(e) && aC.call(e, "callee") && !oC.call(e, "callee");
}, sC = function() {
  return !1;
}, zo = Wr(function(e, t) {
  var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, i = r && r.exports === n ? Qt.Buffer : void 0, a = (i ? i.isBuffer : void 0) || sC;
  e.exports = a;
}), lC = /^(?:0|[1-9]\d*)$/, th = function(e, t) {
  var n = typeof e;
  return !!(t = t ?? 9007199254740991) && (n == "number" || n != "symbol" && lC.test(e)) && e > -1 && e % 1 == 0 && e < t;
}, Is = function(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= 9007199254740991;
}, Fe = {};
Fe["[object Float32Array]"] = Fe["[object Float64Array]"] = Fe["[object Int8Array]"] = Fe["[object Int16Array]"] = Fe["[object Int32Array]"] = Fe["[object Uint8Array]"] = Fe["[object Uint8ClampedArray]"] = Fe["[object Uint16Array]"] = Fe["[object Uint32Array]"] = !0, Fe["[object Arguments]"] = Fe["[object Array]"] = Fe["[object ArrayBuffer]"] = Fe["[object Boolean]"] = Fe["[object DataView]"] = Fe["[object Date]"] = Fe["[object Error]"] = Fe["[object Function]"] = Fe["[object Map]"] = Fe["[object Number]"] = Fe["[object Object]"] = Fe["[object RegExp]"] = Fe["[object Set]"] = Fe["[object String]"] = Fe["[object WeakMap]"] = !1;
var uC = function(e) {
  return Yn(e) && Is(e.length) && !!Fe[nr(e)];
}, cC = function(e) {
  return function(t) {
    return e(t);
  };
}, ac = Wr(function(e, t) {
  var n = t && !t.nodeType && t, r = n && e && !e.nodeType && e, i = r && r.exports === n && Yd.process, a = function() {
    try {
      var o = r && r.require && r.require("util").types;
      return o || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = a;
}), oc = ac && ac.isTypedArray, nh = oc ? cC(oc) : uC, fC = Object.prototype.hasOwnProperty, dC = function(e, t) {
  var n = Gt(e), r = !n && eh(e), i = !n && !r && zo(e), a = !n && !r && !i && nh(e), o = n || r || i || a, s = o ? iC(e.length, String) : [], l = s.length;
  for (var u in e) !fC.call(e, u) || o && (u == "length" || i && (u == "offset" || u == "parent") || a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || th(u, l)) || s.push(u);
  return s;
}, hC = Object.prototype, pC = function(e) {
  var t = e && e.constructor;
  return e === (typeof t == "function" && t.prototype || hC);
}, mC = /* @__PURE__ */ function(e, t) {
  return function(n) {
    return e(t(n));
  };
}(Object.keys, Object), gC = Object.prototype.hasOwnProperty, yC = function(e) {
  if (!pC(e)) return mC(e);
  var t = [];
  for (var n in Object(e)) gC.call(e, n) && n != "constructor" && t.push(n);
  return t;
}, vC = function(e) {
  return e != null && Is(e.length) && !Jd(e);
}, Ns = function(e) {
  return vC(e) ? dC(e) : yC(e);
}, sc = function(e) {
  return ZS(e, Ns, rC);
}, bC = Object.prototype.hasOwnProperty, wC = function(e, t, n, r, i, a) {
  var o = 1 & n, s = sc(e), l = s.length;
  if (l != sc(t).length && !o) return !1;
  for (var u = l; u--; ) {
    var c = s[u];
    if (!(o ? c in t : bC.call(t, c))) return !1;
  }
  var f = a.get(e), h = a.get(t);
  if (f && h) return f == t && h == e;
  var d = !0;
  a.set(e, t), a.set(t, e);
  for (var p = o; ++u < l; ) {
    var m = e[c = s[u]], y = t[c];
    if (r) var g = o ? r(y, m, c, t, e, a) : r(m, y, c, e, t, a);
    if (!(g === void 0 ? m === y || i(m, y, n, r, a) : g)) {
      d = !1;
      break;
    }
    p || (p = c == "constructor");
  }
  if (d && !p) {
    var w = e.constructor, x = t.constructor;
    w == x || !("constructor" in e) || !("constructor" in t) || typeof w == "function" && w instanceof w && typeof x == "function" && x instanceof x || (d = !1);
  }
  return a.delete(e), a.delete(t), d;
}, Uo = An(Qt, "DataView"), Vo = An(Qt, "Promise"), Wo = An(Qt, "Set"), qo = An(Qt, "WeakMap"), xC = Tn(Uo), SC = Tn(Fr), CC = Tn(Vo), EC = Tn(Wo), kC = Tn(qo), yn = nr;
(Uo && yn(new Uo(new ArrayBuffer(1))) != "[object DataView]" || Fr && yn(new Fr()) != "[object Map]" || Vo && yn(Vo.resolve()) != "[object Promise]" || Wo && yn(new Wo()) != "[object Set]" || qo && yn(new qo()) != "[object WeakMap]") && (yn = function(e) {
  var t = nr(e), n = t == "[object Object]" ? e.constructor : void 0, r = n ? Tn(n) : "";
  if (r) switch (r) {
    case xC:
      return "[object DataView]";
    case SC:
      return "[object Map]";
    case CC:
      return "[object Promise]";
    case EC:
      return "[object Set]";
    case kC:
      return "[object WeakMap]";
  }
  return t;
});
var lc = yn, li = "[object Object]", uc = Object.prototype.hasOwnProperty, OC = function(e, t, n, r, i, a) {
  var o = Gt(e), s = Gt(t), l = o ? "[object Array]" : lc(e), u = s ? "[object Array]" : lc(t), c = (l = l == "[object Arguments]" ? li : l) == li, f = (u = u == "[object Arguments]" ? li : u) == li, h = l == u;
  if (h && zo(e)) {
    if (!zo(t)) return !1;
    o = !0, c = !1;
  }
  if (h && !c) return a || (a = new Ci()), o || nh(e) ? Xd(e, t, n, r, i, a) : JS(e, t, l, n, r, i, a);
  if (!(1 & n)) {
    var d = c && uc.call(e, "__wrapped__"), p = f && uc.call(t, "__wrapped__");
    if (d || p) {
      var m = d ? e.value() : e, y = p ? t.value() : t;
      return a || (a = new Ci()), i(m, y, n, r, a);
    }
  }
  return !!h && (a || (a = new Ci()), wC(e, t, n, r, i, a));
}, rh = function e(t, n, r, i, a) {
  return t === n || (t == null || n == null || !Yn(t) && !Yn(n) ? t != t && n != n : OC(t, n, r, i, e, a));
}, _C = function(e, t, n, r) {
  var i = n.length, a = i;
  if (e == null) return !a;
  for (e = Object(e); i--; ) {
    var o = n[i];
    if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e)) return !1;
  }
  for (; ++i < a; ) {
    var s = (o = n[i])[0], l = e[s], u = o[1];
    if (o[2]) {
      if (l === void 0 && !(s in e)) return !1;
    } else {
      var c = new Ci(), f;
      if (!(f === void 0 ? rh(u, l, 3, r, c) : f)) return !1;
    }
  }
  return !0;
}, ih = function(e) {
  return e == e && !Rs(e);
}, TC = function(e) {
  for (var t = Ns(e), n = t.length; n--; ) {
    var r = t[n], i = e[r];
    t[n] = [r, i, ih(i)];
  }
  return t;
}, ah = function(e, t) {
  return function(n) {
    return n != null && n[e] === t && (t !== void 0 || e in Object(n));
  };
}, AC = function(e) {
  var t = TC(e);
  return t.length == 1 && t[0][2] ? ah(t[0][0], t[0][1]) : function(n) {
    return n === e || _C(n, e, t);
  };
}, Ms = function(e) {
  return typeof e == "symbol" || Yn(e) && nr(e) == "[object Symbol]";
}, PC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, FC = /^\w*$/, Ls = function(e, t) {
  if (Gt(e)) return !1;
  var n = typeof e;
  return !(n != "number" && n != "symbol" && n != "boolean" && e != null && !Ms(e)) || FC.test(e) || !PC.test(e) || t != null && e in Object(t);
};
function $s(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError("Expected a function");
  var n = function() {
    var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(i)) return a.get(i);
    var o = e.apply(this, r);
    return n.cache = a.set(i, o) || a, o;
  };
  return n.cache = new ($s.Cache || Ea)(), n;
}
$s.Cache = Ea;
var DC = $s, RC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, IC = /\\(\\)?/g, NC = function(e) {
  var t = DC(e, function(r) {
    return n.size === 500 && n.clear(), r;
  }), n = t.cache;
  return t;
}(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(RC, function(n, r, i, a) {
    t.push(i ? a.replace(IC, "$1") : r || n);
  }), t;
}), MC = function(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; ) i[n] = t(e[n], n, e);
  return i;
}, cc = Bt ? Bt.prototype : void 0, fc = cc ? cc.toString : void 0, LC = function e(t) {
  if (typeof t == "string") return t;
  if (Gt(t)) return MC(t, e) + "";
  if (Ms(t)) return fc ? fc.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}, $C = function(e) {
  return e == null ? "" : LC(e);
}, oh = function(e, t) {
  return Gt(e) ? e : Ls(e, t) ? [e] : NC($C(e));
}, ka = function(e) {
  if (typeof e == "string" || Ms(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}, sh = function(e, t) {
  for (var n = 0, r = (t = oh(t, e)).length; e != null && n < r; ) e = e[ka(t[n++])];
  return n && n == r ? e : void 0;
}, BC = function(e, t, n) {
  var r = e == null ? void 0 : sh(e, t);
  return r === void 0 ? n : r;
}, jC = function(e, t) {
  return e != null && t in Object(e);
}, zC = function(e, t, n) {
  for (var r = -1, i = (t = oh(t, e)).length, a = !1; ++r < i; ) {
    var o = ka(t[r]);
    if (!(a = e != null && n(e, o))) break;
    e = e[o];
  }
  return a || ++r != i ? a : !!(i = e == null ? 0 : e.length) && Is(i) && th(o, i) && (Gt(e) || eh(e));
}, UC = function(e, t) {
  return e != null && zC(e, t, jC);
}, VC = function(e, t) {
  return Ls(e) && ih(t) ? ah(ka(e), t) : function(n) {
    var r = BC(n, e);
    return r === void 0 && r === t ? UC(n, e) : rh(t, r, 3);
  };
}, WC = function(e) {
  return e;
}, qC = function(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}, HC = function(e) {
  return function(t) {
    return sh(t, e);
  };
}, GC = function(e) {
  return Ls(e) ? qC(ka(e)) : HC(e);
}, QC = function(e) {
  return typeof e == "function" ? e : e == null ? WC : typeof e == "object" ? Gt(e) ? VC(e[0], e[1]) : AC(e) : GC(e);
};
function on(e) {
  if (!e) throw new Error("change is not provided");
  if (Ar(e)) return "N".concat(e.oldLineNumber);
  var t = qr(e) ? "I" : "D";
  return "".concat(t).concat(e.lineNumber);
}
Ds("old");
var Bs = Pr("old"), js = Pr("new");
Gd("old");
Gd("new");
Ds("new");
Ds("old");
var dc = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), YC = function(e, t, n) {
  t == "__proto__" && dc ? dc(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n;
}, KC = function(e) {
  return function(t, n, r) {
    for (var i = -1, a = Object(t), o = r(t), s = o.length; s--; ) {
      var l = o[++i];
      if (n(a[l], l, a) === !1) break;
    }
    return t;
  };
}, JC = KC(), XC = function(e, t) {
  return e && JC(e, t, Ns);
}, lh = function(e, t) {
  var n = {};
  return t = QC(t), XC(e, function(r, i, a) {
    YC(n, i, t(r, i, a));
  }), n;
}, ZC = ["changeKey", "text", "tokens", "renderToken"], hc = function e(t, n) {
  var r = t.type, i = t.value, a = t.markType, o = t.properties, s = t.className, l = t.children, u = function(f) {
    return v("span", { className: f, children: i || l && l.map(e) }, n);
  };
  switch (r) {
    case "text":
      return i;
    case "mark":
      return u("diff-code-mark diff-code-mark-".concat(a));
    case "edit":
      return u("diff-code-edit");
    default:
      var c = o && o.className;
      return u(gt(s || c));
  }
};
function eE(e) {
  if (!Array.isArray(e)) return !0;
  if (e.length > 1) return !1;
  if (e.length === 1) {
    var t = kt(e, 1)[0];
    return t.type === "text" && !t.value;
  }
  return !0;
}
function tE(e) {
  var t = e.changeKey, n = e.text, r = e.tokens, i = e.renderToken, a = Qn(e, ZC), o = i ? function(s, l) {
    return i(s, hc, l);
  } : hc;
  return v("td", je(je({}, a), {}, { "data-change-key": t, children: r ? eE(r) ? " " : r.map(o) : n || " " }));
}
var uh = ea(tE);
function ch(e, t) {
  return function() {
    var n = t === "old" ? Bs(e) : js(e);
    return n === -1 ? void 0 : n;
  };
}
function fh(e, t) {
  return function(n) {
    return e && n ? v("a", { href: t ? "#" + t : void 0, children: n }) : n;
  };
}
function Yi(e, t) {
  return t ? function(n) {
    e(), t(n);
  } : e;
}
function pc(e, t, n, r) {
  return qe(function() {
    var i = lh(e, function(a) {
      return function(o) {
        return a && a(t, o);
      };
    });
    return i.onMouseEnter = Yi(n, i.onMouseEnter), i.onMouseLeave = Yi(r, i.onMouseLeave), i;
  }, [e, n, r, t]);
}
function mc(e, t, n, r, i, a, o, s, l) {
  var u = { change: t, side: r, inHoverState: s, renderDefault: ch(t, r), wrapInAnchor: fh(i, a) };
  return v("td", je(je({ className: e }, o), {}, { "data-change-key": n, children: l(u) }));
}
function nE(e) {
  var t, n, r, i = e.change, a = e.selected, o = e.tokens, s = e.className, l = e.generateLineClassName, u = e.gutterClassName, c = e.codeClassName, f = e.gutterEvents, h = e.codeEvents, d = e.hideGutter, p = e.gutterAnchor, m = e.generateAnchorID, y = e.renderToken, g = e.renderGutter, w = i.type, x = i.content, N = on(i), R = (t = kt(Be(!1), 2), n = t[0], r = t[1], [n, Re(function() {
    return r(!0);
  }, []), Re(function() {
    return r(!1);
  }, [])]), A = kt(R, 3), L = A[0], C = A[1], F = A[2], P = qe(function() {
    return { change: i };
  }, [i]), b = pc(f, P, C, F), E = pc(h, P, C, F), O = m(i), T = l({ changes: [i], defaultGenerate: function() {
    return s;
  } }), M = gt("diff-gutter", "diff-gutter-".concat(w), u, { "diff-gutter-selected": a }), B = gt("diff-code", "diff-code-".concat(w), c, { "diff-code-selected": a });
  return G("tr", { id: O, className: gt("diff-line", T), children: [!d && mc(M, i, N, "old", p, O, b, L, g), !d && mc(M, i, N, "new", p, O, b, L, g), v(uh, je({ className: B, changeKey: N, text: x, tokens: o, renderToken: y }, E))] });
}
var rE = ea(nE);
function iE(e) {
  var t = e.hideGutter, n = e.element;
  return v("tr", { className: "diff-widget", children: v("td", { colSpan: t ? 1 : 3, className: "diff-widget-content", children: n }) });
}
var aE = ["hideGutter", "selectedChanges", "tokens", "lineClassName"], oE = ["hunk", "widgets", "className"];
function sE(e) {
  var t = e.hunk, n = e.widgets, r = e.className, i = Qn(e, oE), a = function(o, s) {
    return o.reduce(function(l, u) {
      var c = on(u);
      l.push(["change", c, u]);
      var f = s[c];
      return f && l.push(["widget", c, f]), l;
    }, []);
  }(t.changes, n);
  return v("tbody", { className: gt("diff-hunk", r), children: a.map(function(o) {
    return function(s, l) {
      var u = kt(s, 3), c = u[0], f = u[1], h = u[2], d = l.hideGutter, p = l.selectedChanges, m = l.tokens, y = l.lineClassName, g = Qn(l, aE);
      if (c === "change") {
        var w = an(h) ? "old" : "new", x = an(h) ? Bs(h) : js(h), N = m ? m[w][x - 1] : null;
        return v(rE, je({ className: y, change: h, hideGutter: d, selected: p.includes(f), tokens: N }, g), "change".concat(f));
      }
      return c === "widget" ? v(iE, { hideGutter: d, element: h }, "widget".concat(f)) : null;
    }(o, i);
  }) });
}
var dh = 0;
function ui(e, t, n, r) {
  var i = Re(function() {
    return t(e);
  }, [e, t]), a = Re(function() {
    return t("");
  }, [t]);
  return qe(function() {
    var o = lh(r, function(s) {
      return function(l) {
        return s && s({ side: e, change: n }, l);
      };
    });
    return o.onMouseEnter = Yi(i, o.onMouseEnter), o.onMouseLeave = Yi(a, o.onMouseLeave), o;
  }, [n, r, i, e, a]);
}
function oo(e) {
  var t = e.change, n = e.side, r = e.selected, i = e.tokens, a = e.gutterClassName, o = e.codeClassName, s = e.gutterEvents, l = e.codeEvents, u = e.anchorID, c = e.gutterAnchor, f = e.gutterAnchorTarget, h = e.hideGutter, d = e.hover, p = e.renderToken, m = e.renderGutter;
  if (!t) {
    var y = gt("diff-gutter", "diff-gutter-omit", a), g = gt("diff-code", "diff-code-omit", o);
    return [!h && v("td", { className: y }, "gutter"), v("td", { className: g }, "code")];
  }
  var w = t.type, x = t.content, N = on(t), R = n === dh ? "old" : "new", A = je({ id: u || void 0, className: gt("diff-gutter", "diff-gutter-".concat(w), $o({ "diff-gutter-selected": r }, "diff-line-hover-" + R, d), a), children: m({ change: t, side: R, inHoverState: d, renderDefault: ch(t, R), wrapInAnchor: fh(c, f) }) }, s), L = gt("diff-code", "diff-code-".concat(w), $o({ "diff-code-selected": r }, "diff-line-hover-" + R, d), o);
  return [!h && v("td", je(je({}, A), {}, { "data-change-key": N }), "gutter"), v(uh, je({ className: L, changeKey: N, text: x, tokens: i, renderToken: p }, l), "code")];
}
function lE(e) {
  var t = e.className, n = e.oldChange, r = e.newChange, i = e.oldSelected, a = e.newSelected, o = e.oldTokens, s = e.newTokens, l = e.monotonous, u = e.gutterClassName, c = e.codeClassName, f = e.gutterEvents, h = e.codeEvents, d = e.hideGutter, p = e.generateAnchorID, m = e.generateLineClassName, y = e.gutterAnchor, g = e.renderToken, w = e.renderGutter, x = kt(Be(""), 2), N = x[0], R = x[1], A = ui("old", R, n, f), L = ui("new", R, r, f), C = ui("old", R, n, h), F = ui("new", R, r, h), P = n && p(n), b = r && p(r), E = m({ changes: [n, r], defaultGenerate: function() {
    return t;
  } }), O = { monotonous: l, hideGutter: d, gutterClassName: u, codeClassName: c, gutterEvents: f, codeEvents: h, renderToken: g, renderGutter: w }, T = je(je({}, O), {}, { change: n, side: dh, selected: i, tokens: o, gutterEvents: A, codeEvents: C, anchorID: P, gutterAnchor: y, gutterAnchorTarget: P, hover: N === "old" }), M = je(je({}, O), {}, { change: r, side: 1, selected: a, tokens: s, gutterEvents: L, codeEvents: F, anchorID: n === r ? null : b, gutterAnchor: y, gutterAnchorTarget: n === r ? P : b, hover: N === "new" });
  if (l) return v("tr", { className: gt("diff-line", E), children: oo(n ? T : M) });
  var B = /* @__PURE__ */ function(z, H) {
    return z && !H ? "diff-line-old-only" : !z && H ? "diff-line-new-only" : z === H ? "diff-line-normal" : "diff-line-compare";
  }(n, r);
  return G("tr", { className: gt("diff-line", B, E), children: [oo(T), oo(M)] });
}
var uE = ea(lE);
function cE(e) {
  var t = e.hideGutter, n = e.oldElement, r = e.newElement;
  return e.monotonous ? v("tr", { className: "diff-widget", children: v("td", { colSpan: t ? 1 : 2, className: "diff-widget-content", children: n || r }) }) : n === r ? v("tr", { className: "diff-widget", children: v("td", { colSpan: t ? 2 : 4, className: "diff-widget-content", children: n }) }) : G("tr", { className: "diff-widget", children: [v("td", { colSpan: t ? 1 : 2, className: "diff-widget-content", children: n }), v("td", { colSpan: t ? 1 : 2, className: "diff-widget-content", children: r })] });
}
var fE = ["selectedChanges", "monotonous", "hideGutter", "tokens", "lineClassName"], dE = ["hunk", "widgets", "className"];
function ci(e, t) {
  return (e ? on(e) : "00") + (t ? on(t) : "00");
}
function hE(e) {
  var t = e.hunk, n = e.widgets, r = e.className, i = Qn(e, dE), a = function(o, s) {
    for (var l = function(g) {
      if (!g) return null;
      var w = on(g);
      return s[w] || null;
    }, u = [], c = 0; c < o.length; c++) {
      var f = o[c];
      if (Ar(f)) u.push(["change", ci(f, f), f, f]);
      else if (an(f)) {
        var h = o[c + 1];
        h && qr(h) ? (c += 1, u.push(["change", ci(f, h), f, h])) : u.push(["change", ci(f, null), f, null]);
      } else u.push(["change", ci(null, f), null, f]);
      var d = u[u.length - 1], p = l(d[2]), m = l(d[3]);
      if (p || m) {
        var y = d[1];
        u.push(["widget", y, p, m]);
      }
    }
    return u;
  }(t.changes, n);
  return v("tbody", { className: gt("diff-hunk", r), children: a.map(function(o) {
    return function(s, l) {
      var u = kt(s, 4), c = u[0], f = u[1], h = u[2], d = u[3], p = l.selectedChanges, m = l.monotonous, y = l.hideGutter, g = l.tokens, w = l.lineClassName, x = Qn(l, fE);
      if (c === "change") {
        var N = !!h && p.includes(on(h)), R = !!d && p.includes(on(d)), A = h && g ? g.old[Bs(h) - 1] : null, L = d && g ? g.new[js(d) - 1] : null;
        return v(uE, je({ className: w, oldChange: h, newChange: d, monotonous: m, hideGutter: y, oldSelected: N, newSelected: R, oldTokens: A, newTokens: L }, x), "change".concat(f));
      }
      return c === "widget" ? v(cE, { monotonous: m, hideGutter: y, oldElement: h, newElement: d }, "widget".concat(f)) : null;
    }(o, i);
  }) });
}
var pE = ["gutterType", "hunkClassName"];
function hh(e) {
  var t = e.hunk, n = J1(), r = n.gutterType, i = n.hunkClassName, a = Qn(n, pE), o = r === "none", s = r === "anchor", l = a.viewType === "unified" ? sE : hE;
  return v(l, je(je({}, a), {}, { hunk: t, hideGutter: o, gutterAnchor: s, className: i }));
}
function mE() {
}
function gc(e, t) {
  var n = t ? "auto" : "none";
  e instanceof HTMLElement && e.style.userSelect !== n && (e.style.userSelect = n);
}
function gE(e) {
  return e.map(function(t) {
    return v(hh, { hunk: t }, function(n) {
      return "-".concat(n.oldStart, ",").concat(n.oldLines, " +").concat(n.newStart, ",").concat(n.newLines);
    }(t));
  });
}
function yE(e) {
  var t = e.diffType, n = e.hunks, r = e.optimizeSelection, i = e.className, a = e.hunkClassName, o = a === void 0 ? at.hunkClassName : a, s = e.lineClassName, l = s === void 0 ? at.lineClassName : s, u = e.generateLineClassName, c = u === void 0 ? at.generateLineClassName : u, f = e.gutterClassName, h = f === void 0 ? at.gutterClassName : f, d = e.codeClassName, p = d === void 0 ? at.codeClassName : d, m = e.gutterType, y = m === void 0 ? at.gutterType : m, g = e.viewType, w = g === void 0 ? at.viewType : g, x = e.gutterEvents, N = x === void 0 ? at.gutterEvents : x, R = e.codeEvents, A = R === void 0 ? at.codeEvents : R, L = e.generateAnchorID, C = L === void 0 ? at.generateAnchorID : L, F = e.selectedChanges, P = F === void 0 ? at.selectedChanges : F, b = e.widgets, E = b === void 0 ? at.widgets : b, O = e.renderGutter, T = O === void 0 ? at.renderGutter : O, M = e.tokens, B = e.renderToken, z = e.children, H = z === void 0 ? gE : z, K = un(null), S = Re(function(ne) {
    var le = ne.target;
    if (ne.button === 0) {
      var we = function(Me, Le) {
        for (var _e = Me; _e && _e !== document.documentElement && !_e.classList.contains(Le); ) _e = _e.parentElement;
        return _e === document.documentElement ? null : _e;
      }(le, "diff-code");
      if (we && we.parentElement) {
        var he = window.getSelection();
        he && he.removeAllRanges();
        var be = q1(we.parentElement.children).indexOf(we);
        if (be === 1 || be === 3) {
          var ie, ce = Y1(K.current ? K.current.querySelectorAll(".diff-line") : []);
          try {
            for (ce.s(); !(ie = ce.n()).done; ) {
              var Ce = ie.value.children;
              gc(Ce[1], be === 1), gc(Ce[3], be === 3);
            }
          } catch (Me) {
            ce.e(Me);
          } finally {
            ce.f();
          }
        }
      }
    }
  }, []), J = y === "none", ee = t === "add" || t === "delete", k = w === "split" && !ee && r ? S : mE, ae = qe(function() {
    return G("colgroup", w === "unified" ? { children: [!J && v("col", { className: "diff-gutter-col" }), !J && v("col", { className: "diff-gutter-col" }), v("col", {})] } : ee ? { children: [!J && v("col", { className: "diff-gutter-col" }), v("col", {})] } : { children: [!J && v("col", { className: "diff-gutter-col" }), v("col", {}), !J && v("col", { className: "diff-gutter-col" }), v("col", {})] });
  }, [w, ee, J]), oe = qe(function() {
    return { hunkClassName: o, lineClassName: l, generateLineClassName: c, gutterClassName: h, codeClassName: p, monotonous: ee, hideGutter: J, viewType: w, gutterType: y, codeEvents: A, gutterEvents: N, generateAnchorID: C, selectedChanges: P, widgets: E, renderGutter: T, tokens: M, renderToken: B };
  }, [p, A, C, h, N, y, J, o, l, c, ee, T, B, P, M, w, E]);
  return v(K1, { value: oe, children: G("table", { ref: K, className: gt("diff", "diff-".concat(w), i), onMouseDown: k, children: [ae, H(n)] }) });
}
var vE = ea(yE);
process.env.NODE_ENV;
Bt && Bt.isConcatSpreadable;
var zs = Wr(function(e) {
  var t = function() {
    this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = 0.5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = 0.5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
  };
  t.Diff = function(n, r) {
    return [n, r];
  }, t.prototype.diff_main = function(n, r, i, a) {
    a === void 0 && (a = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (/* @__PURE__ */ new Date()).getTime() + 1e3 * this.Diff_Timeout);
    var o = a;
    if (n == null || r == null) throw new Error("Null input. (diff_main)");
    if (n == r) return n ? [new t.Diff(0, n)] : [];
    i === void 0 && (i = !0);
    var s = i, l = this.diff_commonPrefix(n, r), u = n.substring(0, l);
    n = n.substring(l), r = r.substring(l), l = this.diff_commonSuffix(n, r);
    var c = n.substring(n.length - l);
    n = n.substring(0, n.length - l), r = r.substring(0, r.length - l);
    var f = this.diff_compute_(n, r, s, o);
    return u && f.unshift(new t.Diff(0, u)), c && f.push(new t.Diff(0, c)), this.diff_cleanupMerge(f), f;
  }, t.prototype.diff_compute_ = function(n, r, i, a) {
    var o;
    if (!n) return [new t.Diff(1, r)];
    if (!r) return [new t.Diff(-1, n)];
    var s = n.length > r.length ? n : r, l = n.length > r.length ? r : n, u = s.indexOf(l);
    if (u != -1) return o = [new t.Diff(1, s.substring(0, u)), new t.Diff(0, l), new t.Diff(1, s.substring(u + l.length))], n.length > r.length && (o[0][0] = o[2][0] = -1), o;
    if (l.length == 1) return [new t.Diff(-1, n), new t.Diff(1, r)];
    var c = this.diff_halfMatch_(n, r);
    if (c) {
      var f = c[0], h = c[1], d = c[2], p = c[3], m = c[4], y = this.diff_main(f, d, i, a), g = this.diff_main(h, p, i, a);
      return y.concat([new t.Diff(0, m)], g);
    }
    return i && n.length > 100 && r.length > 100 ? this.diff_lineMode_(n, r, a) : this.diff_bisect_(n, r, a);
  }, t.prototype.diff_lineMode_ = function(n, r, i) {
    var a = this.diff_linesToChars_(n, r);
    n = a.chars1, r = a.chars2;
    var o = a.lineArray, s = this.diff_main(n, r, !1, i);
    this.diff_charsToLines_(s, o), this.diff_cleanupSemantic(s), s.push(new t.Diff(0, ""));
    for (var l = 0, u = 0, c = 0, f = "", h = ""; l < s.length; ) {
      switch (s[l][0]) {
        case 1:
          c++, h += s[l][1];
          break;
        case -1:
          u++, f += s[l][1];
          break;
        case 0:
          if (u >= 1 && c >= 1) {
            s.splice(l - u - c, u + c), l = l - u - c;
            for (var d = this.diff_main(f, h, !1, i), p = d.length - 1; p >= 0; p--) s.splice(l, 0, d[p]);
            l += d.length;
          }
          c = 0, u = 0, f = "", h = "";
      }
      l++;
    }
    return s.pop(), s;
  }, t.prototype.diff_bisect_ = function(n, r, i) {
    for (var a = n.length, o = r.length, s = Math.ceil((a + o) / 2), l = s, u = 2 * s, c = new Array(u), f = new Array(u), h = 0; h < u; h++) c[h] = -1, f[h] = -1;
    c[l + 1] = 0, f[l + 1] = 0;
    for (var d = a - o, p = d % 2 != 0, m = 0, y = 0, g = 0, w = 0, x = 0; x < s && !((/* @__PURE__ */ new Date()).getTime() > i); x++) {
      for (var N = -x + m; N <= x - y; N += 2) {
        for (var R = l + N, A = (b = N == -x || N != x && c[R - 1] < c[R + 1] ? c[R + 1] : c[R - 1] + 1) - N; b < a && A < o && n.charAt(b) == r.charAt(A); ) b++, A++;
        if (c[R] = b, b > a) y += 2;
        else if (A > o) m += 2;
        else if (p && (F = l + d - N) >= 0 && F < u && f[F] != -1 && b >= (C = a - f[F]))
          return this.diff_bisectSplit_(n, r, b, A, i);
      }
      for (var L = -x + g; L <= x - w; L += 2) {
        for (var C, F = l + L, P = (C = L == -x || L != x && f[F - 1] < f[F + 1] ? f[F + 1] : f[F - 1] + 1) - L; C < a && P < o && n.charAt(a - C - 1) == r.charAt(o - P - 1); ) C++, P++;
        if (f[F] = C, C > a) w += 2;
        else if (P > o) g += 2;
        else if (!p && (R = l + d - L) >= 0 && R < u && c[R] != -1) {
          var b;
          if (A = l + (b = c[R]) - R, b >= (C = a - C)) return this.diff_bisectSplit_(n, r, b, A, i);
        }
      }
    }
    return [new t.Diff(-1, n), new t.Diff(1, r)];
  }, t.prototype.diff_bisectSplit_ = function(n, r, i, a, o) {
    var s = n.substring(0, i), l = r.substring(0, a), u = n.substring(i), c = r.substring(a), f = this.diff_main(s, l, !1, o), h = this.diff_main(u, c, !1, o);
    return f.concat(h);
  }, t.prototype.diff_linesToChars_ = function(n, r) {
    var i = [], a = {};
    function o(u) {
      for (var c = "", f = 0, h = -1, d = i.length; h < u.length - 1; ) {
        (h = u.indexOf(`
`, f)) == -1 && (h = u.length - 1);
        var p = u.substring(f, h + 1);
        (a.hasOwnProperty ? a.hasOwnProperty(p) : a[p] !== void 0) ? c += String.fromCharCode(a[p]) : (d == s && (p = u.substring(f), h = u.length), c += String.fromCharCode(d), a[p] = d, i[d++] = p), f = h + 1;
      }
      return c;
    }
    i[0] = "";
    var s = 4e4, l = o(n);
    return s = 65535, { chars1: l, chars2: o(r), lineArray: i };
  }, t.prototype.diff_charsToLines_ = function(n, r) {
    for (var i = 0; i < n.length; i++) {
      for (var a = n[i][1], o = [], s = 0; s < a.length; s++) o[s] = r[a.charCodeAt(s)];
      n[i][1] = o.join("");
    }
  }, t.prototype.diff_commonPrefix = function(n, r) {
    if (!n || !r || n.charAt(0) != r.charAt(0)) return 0;
    for (var i = 0, a = Math.min(n.length, r.length), o = a, s = 0; i < o; ) n.substring(s, o) == r.substring(s, o) ? s = i = o : a = o, o = Math.floor((a - i) / 2 + i);
    return o;
  }, t.prototype.diff_commonSuffix = function(n, r) {
    if (!n || !r || n.charAt(n.length - 1) != r.charAt(r.length - 1)) return 0;
    for (var i = 0, a = Math.min(n.length, r.length), o = a, s = 0; i < o; ) n.substring(n.length - o, n.length - s) == r.substring(r.length - o, r.length - s) ? s = i = o : a = o, o = Math.floor((a - i) / 2 + i);
    return o;
  }, t.prototype.diff_commonOverlap_ = function(n, r) {
    var i = n.length, a = r.length;
    if (i == 0 || a == 0) return 0;
    i > a ? n = n.substring(i - a) : i < a && (r = r.substring(0, i));
    var o = Math.min(i, a);
    if (n == r) return o;
    for (var s = 0, l = 1; ; ) {
      var u = n.substring(o - l), c = r.indexOf(u);
      if (c == -1) return s;
      l += c, c != 0 && n.substring(o - l) != r.substring(0, l) || (s = l, l++);
    }
  }, t.prototype.diff_halfMatch_ = function(n, r) {
    if (this.Diff_Timeout <= 0) return null;
    var i = n.length > r.length ? n : r, a = n.length > r.length ? r : n;
    if (i.length < 4 || 2 * a.length < i.length) return null;
    var o = this;
    function s(m, y, g) {
      for (var w, x, N, R, A = m.substring(g, g + Math.floor(m.length / 4)), L = -1, C = ""; (L = y.indexOf(A, L + 1)) != -1; ) {
        var F = o.diff_commonPrefix(m.substring(g), y.substring(L)), P = o.diff_commonSuffix(m.substring(0, g), y.substring(0, L));
        C.length < P + F && (C = y.substring(L - P, L) + y.substring(L, L + F), w = m.substring(0, g - P), x = m.substring(g + F), N = y.substring(0, L - P), R = y.substring(L + F));
      }
      return 2 * C.length >= m.length ? [w, x, N, R, C] : null;
    }
    var l, u, c, f, h, d = s(i, a, Math.ceil(i.length / 4)), p = s(i, a, Math.ceil(i.length / 2));
    return d || p ? (l = p ? d && d[4].length > p[4].length ? d : p : d, n.length > r.length ? (u = l[0], c = l[1], f = l[2], h = l[3]) : (f = l[0], h = l[1], u = l[2], c = l[3]), [u, c, f, h, l[4]]) : null;
  }, t.prototype.diff_cleanupSemantic = function(n) {
    for (var r = !1, i = [], a = 0, o = null, s = 0, l = 0, u = 0, c = 0, f = 0; s < n.length; ) n[s][0] == 0 ? (i[a++] = s, l = c, u = f, c = 0, f = 0, o = n[s][1]) : (n[s][0] == 1 ? c += n[s][1].length : f += n[s][1].length, o && o.length <= Math.max(l, u) && o.length <= Math.max(c, f) && (n.splice(i[a - 1], 0, new t.Diff(-1, o)), n[i[a - 1] + 1][0] = 1, a--, s = --a > 0 ? i[a - 1] : -1, l = 0, u = 0, c = 0, f = 0, o = null, r = !0)), s++;
    for (r && this.diff_cleanupMerge(n), this.diff_cleanupSemanticLossless(n), s = 1; s < n.length; ) {
      if (n[s - 1][0] == -1 && n[s][0] == 1) {
        var h = n[s - 1][1], d = n[s][1], p = this.diff_commonOverlap_(h, d), m = this.diff_commonOverlap_(d, h);
        p >= m ? (p >= h.length / 2 || p >= d.length / 2) && (n.splice(s, 0, new t.Diff(0, d.substring(0, p))), n[s - 1][1] = h.substring(0, h.length - p), n[s + 1][1] = d.substring(p), s++) : (m >= h.length / 2 || m >= d.length / 2) && (n.splice(s, 0, new t.Diff(0, h.substring(0, m))), n[s - 1][0] = 1, n[s - 1][1] = d.substring(0, d.length - m), n[s + 1][0] = -1, n[s + 1][1] = h.substring(m), s++), s++;
      }
      s++;
    }
  }, t.prototype.diff_cleanupSemanticLossless = function(n) {
    function r(m, y) {
      if (!m || !y) return 6;
      var g = m.charAt(m.length - 1), w = y.charAt(0), x = g.match(t.nonAlphaNumericRegex_), N = w.match(t.nonAlphaNumericRegex_), R = x && g.match(t.whitespaceRegex_), A = N && w.match(t.whitespaceRegex_), L = R && g.match(t.linebreakRegex_), C = A && w.match(t.linebreakRegex_), F = L && m.match(t.blanklineEndRegex_), P = C && y.match(t.blanklineStartRegex_);
      return F || P ? 5 : L || C ? 4 : x && !R && A ? 3 : R || A ? 2 : x || N ? 1 : 0;
    }
    for (var i = 1; i < n.length - 1; ) {
      if (n[i - 1][0] == 0 && n[i + 1][0] == 0) {
        var a = n[i - 1][1], o = n[i][1], s = n[i + 1][1], l = this.diff_commonSuffix(a, o);
        if (l) {
          var u = o.substring(o.length - l);
          a = a.substring(0, a.length - l), o = u + o.substring(0, o.length - l), s = u + s;
        }
        for (var c = a, f = o, h = s, d = r(a, o) + r(o, s); o.charAt(0) === s.charAt(0); ) {
          a += o.charAt(0), o = o.substring(1) + s.charAt(0), s = s.substring(1);
          var p = r(a, o) + r(o, s);
          p >= d && (d = p, c = a, f = o, h = s);
        }
        n[i - 1][1] != c && (c ? n[i - 1][1] = c : (n.splice(i - 1, 1), i--), n[i][1] = f, h ? n[i + 1][1] = h : (n.splice(i + 1, 1), i--));
      }
      i++;
    }
  }, t.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, t.whitespaceRegex_ = /\s/, t.linebreakRegex_ = /[\r\n]/, t.blanklineEndRegex_ = /\n\r?\n$/, t.blanklineStartRegex_ = /^\r?\n\r?\n/, t.prototype.diff_cleanupEfficiency = function(n) {
    for (var r = !1, i = [], a = 0, o = null, s = 0, l = !1, u = !1, c = !1, f = !1; s < n.length; ) n[s][0] == 0 ? (n[s][1].length < this.Diff_EditCost && (c || f) ? (i[a++] = s, l = c, u = f, o = n[s][1]) : (a = 0, o = null), c = f = !1) : (n[s][0] == -1 ? f = !0 : c = !0, o && (l && u && c && f || o.length < this.Diff_EditCost / 2 && l + u + c + f == 3) && (n.splice(i[a - 1], 0, new t.Diff(-1, o)), n[i[a - 1] + 1][0] = 1, a--, o = null, l && u ? (c = f = !0, a = 0) : (s = --a > 0 ? i[a - 1] : -1, c = f = !1), r = !0)), s++;
    r && this.diff_cleanupMerge(n);
  }, t.prototype.diff_cleanupMerge = function(n) {
    n.push(new t.Diff(0, ""));
    for (var r, i = 0, a = 0, o = 0, s = "", l = ""; i < n.length; ) switch (n[i][0]) {
      case 1:
        o++, l += n[i][1], i++;
        break;
      case -1:
        a++, s += n[i][1], i++;
        break;
      case 0:
        a + o > 1 ? (a !== 0 && o !== 0 && ((r = this.diff_commonPrefix(l, s)) !== 0 && (i - a - o > 0 && n[i - a - o - 1][0] == 0 ? n[i - a - o - 1][1] += l.substring(0, r) : (n.splice(0, 0, new t.Diff(0, l.substring(0, r))), i++), l = l.substring(r), s = s.substring(r)), (r = this.diff_commonSuffix(l, s)) !== 0 && (n[i][1] = l.substring(l.length - r) + n[i][1], l = l.substring(0, l.length - r), s = s.substring(0, s.length - r))), i -= a + o, n.splice(i, a + o), s.length && (n.splice(i, 0, new t.Diff(-1, s)), i++), l.length && (n.splice(i, 0, new t.Diff(1, l)), i++), i++) : i !== 0 && n[i - 1][0] == 0 ? (n[i - 1][1] += n[i][1], n.splice(i, 1)) : i++, o = 0, a = 0, s = "", l = "";
    }
    n[n.length - 1][1] === "" && n.pop();
    var u = !1;
    for (i = 1; i < n.length - 1; ) n[i - 1][0] == 0 && n[i + 1][0] == 0 && (n[i][1].substring(n[i][1].length - n[i - 1][1].length) == n[i - 1][1] ? (n[i][1] = n[i - 1][1] + n[i][1].substring(0, n[i][1].length - n[i - 1][1].length), n[i + 1][1] = n[i - 1][1] + n[i + 1][1], n.splice(i - 1, 1), u = !0) : n[i][1].substring(0, n[i + 1][1].length) == n[i + 1][1] && (n[i - 1][1] += n[i + 1][1], n[i][1] = n[i][1].substring(n[i + 1][1].length) + n[i + 1][1], n.splice(i + 1, 1), u = !0)), i++;
    u && this.diff_cleanupMerge(n);
  }, t.prototype.diff_xIndex = function(n, r) {
    var i, a = 0, o = 0, s = 0, l = 0;
    for (i = 0; i < n.length && (n[i][0] !== 1 && (a += n[i][1].length), n[i][0] !== -1 && (o += n[i][1].length), !(a > r)); i++) s = a, l = o;
    return n.length != i && n[i][0] === -1 ? l : l + (r - s);
  }, t.prototype.diff_prettyHtml = function(n) {
    for (var r = [], i = /&/g, a = /</g, o = />/g, s = /\n/g, l = 0; l < n.length; l++) {
      var u = n[l][0], c = n[l][1].replace(i, "&amp;").replace(a, "&lt;").replace(o, "&gt;").replace(s, "&para;<br>");
      switch (u) {
        case 1:
          r[l] = '<ins style="background:#e6ffe6;">' + c + "</ins>";
          break;
        case -1:
          r[l] = '<del style="background:#ffe6e6;">' + c + "</del>";
          break;
        case 0:
          r[l] = "<span>" + c + "</span>";
      }
    }
    return r.join("");
  }, t.prototype.diff_text1 = function(n) {
    for (var r = [], i = 0; i < n.length; i++) n[i][0] !== 1 && (r[i] = n[i][1]);
    return r.join("");
  }, t.prototype.diff_text2 = function(n) {
    for (var r = [], i = 0; i < n.length; i++) n[i][0] !== -1 && (r[i] = n[i][1]);
    return r.join("");
  }, t.prototype.diff_levenshtein = function(n) {
    for (var r = 0, i = 0, a = 0, o = 0; o < n.length; o++) {
      var s = n[o][0], l = n[o][1];
      switch (s) {
        case 1:
          i += l.length;
          break;
        case -1:
          a += l.length;
          break;
        case 0:
          r += Math.max(i, a), i = 0, a = 0;
      }
    }
    return r += Math.max(i, a);
  }, t.prototype.diff_toDelta = function(n) {
    for (var r = [], i = 0; i < n.length; i++) switch (n[i][0]) {
      case 1:
        r[i] = "+" + encodeURI(n[i][1]);
        break;
      case -1:
        r[i] = "-" + n[i][1].length;
        break;
      case 0:
        r[i] = "=" + n[i][1].length;
    }
    return r.join("	").replace(/%20/g, " ");
  }, t.prototype.diff_fromDelta = function(n, r) {
    for (var i = [], a = 0, o = 0, s = r.split(/\t/g), l = 0; l < s.length; l++) {
      var u = s[l].substring(1);
      switch (s[l].charAt(0)) {
        case "+":
          try {
            i[a++] = new t.Diff(1, decodeURI(u));
          } catch {
            throw new Error("Illegal escape in diff_fromDelta: " + u);
          }
          break;
        case "-":
        case "=":
          var c = parseInt(u, 10);
          if (isNaN(c) || c < 0) throw new Error("Invalid number in diff_fromDelta: " + u);
          var f = n.substring(o, o += c);
          s[l].charAt(0) == "=" ? i[a++] = new t.Diff(0, f) : i[a++] = new t.Diff(-1, f);
          break;
        default:
          if (s[l]) throw new Error("Invalid diff operation in diff_fromDelta: " + s[l]);
      }
    }
    if (o != n.length) throw new Error("Delta length (" + o + ") does not equal source text length (" + n.length + ").");
    return i;
  }, t.prototype.match_main = function(n, r, i) {
    if (n == null || r == null || i == null) throw new Error("Null input. (match_main)");
    return i = Math.max(0, Math.min(i, n.length)), n == r ? 0 : n.length ? n.substring(i, i + r.length) == r ? i : this.match_bitap_(n, r, i) : -1;
  }, t.prototype.match_bitap_ = function(n, r, i) {
    if (r.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
    var a = this.match_alphabet_(r), o = this;
    function s(A, L) {
      var C = A / r.length, F = Math.abs(i - L);
      return o.Match_Distance ? C + F / o.Match_Distance : F ? 1 : C;
    }
    var l = this.Match_Threshold, u = n.indexOf(r, i);
    u != -1 && (l = Math.min(s(0, u), l), (u = n.lastIndexOf(r, i + r.length)) != -1 && (l = Math.min(s(0, u), l)));
    var c, f, h = 1 << r.length - 1;
    u = -1;
    for (var d, p = r.length + n.length, m = 0; m < r.length; m++) {
      for (c = 0, f = p; c < f; ) s(m, i + f) <= l ? c = f : p = f, f = Math.floor((p - c) / 2 + c);
      p = f;
      var y = Math.max(1, i - f + 1), g = Math.min(i + f, n.length) + r.length, w = Array(g + 2);
      w[g + 1] = (1 << m) - 1;
      for (var x = g; x >= y; x--) {
        var N = a[n.charAt(x - 1)];
        if (w[x] = m === 0 ? (w[x + 1] << 1 | 1) & N : (w[x + 1] << 1 | 1) & N | (d[x + 1] | d[x]) << 1 | 1 | d[x + 1], w[x] & h) {
          var R = s(m, x - 1);
          if (R <= l) {
            if (l = R, !((u = x - 1) > i)) break;
            y = Math.max(1, 2 * i - u);
          }
        }
      }
      if (s(m + 1, i) > l) break;
      d = w;
    }
    return u;
  }, t.prototype.match_alphabet_ = function(n) {
    for (var r = {}, i = 0; i < n.length; i++) r[n.charAt(i)] = 0;
    for (i = 0; i < n.length; i++) r[n.charAt(i)] |= 1 << n.length - i - 1;
    return r;
  }, t.prototype.patch_addContext_ = function(n, r) {
    if (r.length != 0) {
      if (n.start2 === null) throw Error("patch not initialized");
      for (var i = r.substring(n.start2, n.start2 + n.length1), a = 0; r.indexOf(i) != r.lastIndexOf(i) && i.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin; ) a += this.Patch_Margin, i = r.substring(n.start2 - a, n.start2 + n.length1 + a);
      a += this.Patch_Margin;
      var o = r.substring(n.start2 - a, n.start2);
      o && n.diffs.unshift(new t.Diff(0, o));
      var s = r.substring(n.start2 + n.length1, n.start2 + n.length1 + a);
      s && n.diffs.push(new t.Diff(0, s)), n.start1 -= o.length, n.start2 -= o.length, n.length1 += o.length + s.length, n.length2 += o.length + s.length;
    }
  }, t.prototype.patch_make = function(n, r, i) {
    var a, o;
    if (typeof n == "string" && typeof r == "string" && i === void 0) a = n, (o = this.diff_main(a, r, !0)).length > 2 && (this.diff_cleanupSemantic(o), this.diff_cleanupEfficiency(o));
    else if (n && typeof n == "object" && r === void 0 && i === void 0) o = n, a = this.diff_text1(o);
    else if (typeof n == "string" && r && typeof r == "object" && i === void 0) a = n, o = r;
    else {
      if (typeof n != "string" || typeof r != "string" || !i || typeof i != "object") throw new Error("Unknown call format to patch_make.");
      a = n, o = i;
    }
    if (o.length === 0) return [];
    for (var s = [], l = new t.patch_obj(), u = 0, c = 0, f = 0, h = a, d = a, p = 0; p < o.length; p++) {
      var m = o[p][0], y = o[p][1];
      switch (u || m === 0 || (l.start1 = c, l.start2 = f), m) {
        case 1:
          l.diffs[u++] = o[p], l.length2 += y.length, d = d.substring(0, f) + y + d.substring(f);
          break;
        case -1:
          l.length1 += y.length, l.diffs[u++] = o[p], d = d.substring(0, f) + d.substring(f + y.length);
          break;
        case 0:
          y.length <= 2 * this.Patch_Margin && u && o.length != p + 1 ? (l.diffs[u++] = o[p], l.length1 += y.length, l.length2 += y.length) : y.length >= 2 * this.Patch_Margin && u && (this.patch_addContext_(l, h), s.push(l), l = new t.patch_obj(), u = 0, h = d, c = f);
      }
      m !== 1 && (c += y.length), m !== -1 && (f += y.length);
    }
    return u && (this.patch_addContext_(l, h), s.push(l)), s;
  }, t.prototype.patch_deepCopy = function(n) {
    for (var r = [], i = 0; i < n.length; i++) {
      var a = n[i], o = new t.patch_obj();
      o.diffs = [];
      for (var s = 0; s < a.diffs.length; s++) o.diffs[s] = new t.Diff(a.diffs[s][0], a.diffs[s][1]);
      o.start1 = a.start1, o.start2 = a.start2, o.length1 = a.length1, o.length2 = a.length2, r[i] = o;
    }
    return r;
  }, t.prototype.patch_apply = function(n, r) {
    if (n.length == 0) return [r, []];
    n = this.patch_deepCopy(n);
    var i = this.patch_addPadding(n);
    r = i + r + i, this.patch_splitMax(n);
    for (var a = 0, o = [], s = 0; s < n.length; s++) {
      var l, u, c = n[s].start2 + a, f = this.diff_text1(n[s].diffs), h = -1;
      if (f.length > this.Match_MaxBits ? (l = this.match_main(r, f.substring(0, this.Match_MaxBits), c)) != -1 && ((h = this.match_main(r, f.substring(f.length - this.Match_MaxBits), c + f.length - this.Match_MaxBits)) == -1 || l >= h) && (l = -1) : l = this.match_main(r, f, c), l == -1) o[s] = !1, a -= n[s].length2 - n[s].length1;
      else if (o[s] = !0, a = l - c, f == (u = h == -1 ? r.substring(l, l + f.length) : r.substring(l, h + this.Match_MaxBits))) r = r.substring(0, l) + this.diff_text2(n[s].diffs) + r.substring(l + f.length);
      else {
        var d = this.diff_main(f, u, !1);
        if (f.length > this.Match_MaxBits && this.diff_levenshtein(d) / f.length > this.Patch_DeleteThreshold) o[s] = !1;
        else {
          this.diff_cleanupSemanticLossless(d);
          for (var p, m = 0, y = 0; y < n[s].diffs.length; y++) {
            var g = n[s].diffs[y];
            g[0] !== 0 && (p = this.diff_xIndex(d, m)), g[0] === 1 ? r = r.substring(0, l + p) + g[1] + r.substring(l + p) : g[0] === -1 && (r = r.substring(0, l + p) + r.substring(l + this.diff_xIndex(d, m + g[1].length))), g[0] !== -1 && (m += g[1].length);
          }
        }
      }
    }
    return [r = r.substring(i.length, r.length - i.length), o];
  }, t.prototype.patch_addPadding = function(n) {
    for (var r = this.Patch_Margin, i = "", a = 1; a <= r; a++) i += String.fromCharCode(a);
    for (a = 0; a < n.length; a++) n[a].start1 += r, n[a].start2 += r;
    var o = n[0], s = o.diffs;
    if (s.length == 0 || s[0][0] != 0) s.unshift(new t.Diff(0, i)), o.start1 -= r, o.start2 -= r, o.length1 += r, o.length2 += r;
    else if (r > s[0][1].length) {
      var l = r - s[0][1].length;
      s[0][1] = i.substring(s[0][1].length) + s[0][1], o.start1 -= l, o.start2 -= l, o.length1 += l, o.length2 += l;
    }
    return (s = (o = n[n.length - 1]).diffs).length == 0 || s[s.length - 1][0] != 0 ? (s.push(new t.Diff(0, i)), o.length1 += r, o.length2 += r) : r > s[s.length - 1][1].length && (l = r - s[s.length - 1][1].length, s[s.length - 1][1] += i.substring(0, l), o.length1 += l, o.length2 += l), i;
  }, t.prototype.patch_splitMax = function(n) {
    for (var r = this.Match_MaxBits, i = 0; i < n.length; i++) if (!(n[i].length1 <= r)) {
      var a = n[i];
      n.splice(i--, 1);
      for (var o = a.start1, s = a.start2, l = ""; a.diffs.length !== 0; ) {
        var u = new t.patch_obj(), c = !0;
        for (u.start1 = o - l.length, u.start2 = s - l.length, l !== "" && (u.length1 = u.length2 = l.length, u.diffs.push(new t.Diff(0, l))); a.diffs.length !== 0 && u.length1 < r - this.Patch_Margin; ) {
          var f = a.diffs[0][0], h = a.diffs[0][1];
          f === 1 ? (u.length2 += h.length, s += h.length, u.diffs.push(a.diffs.shift()), c = !1) : f === -1 && u.diffs.length == 1 && u.diffs[0][0] == 0 && h.length > 2 * r ? (u.length1 += h.length, o += h.length, c = !1, u.diffs.push(new t.Diff(f, h)), a.diffs.shift()) : (h = h.substring(0, r - u.length1 - this.Patch_Margin), u.length1 += h.length, o += h.length, f === 0 ? (u.length2 += h.length, s += h.length) : c = !1, u.diffs.push(new t.Diff(f, h)), h == a.diffs[0][1] ? a.diffs.shift() : a.diffs[0][1] = a.diffs[0][1].substring(h.length));
        }
        l = (l = this.diff_text2(u.diffs)).substring(l.length - this.Patch_Margin);
        var d = this.diff_text1(a.diffs).substring(0, this.Patch_Margin);
        d !== "" && (u.length1 += d.length, u.length2 += d.length, u.diffs.length !== 0 && u.diffs[u.diffs.length - 1][0] === 0 ? u.diffs[u.diffs.length - 1][1] += d : u.diffs.push(new t.Diff(0, d))), c || n.splice(++i, 0, u);
      }
    }
  }, t.prototype.patch_toText = function(n) {
    for (var r = [], i = 0; i < n.length; i++) r[i] = n[i];
    return r.join("");
  }, t.prototype.patch_fromText = function(n) {
    var r = [];
    if (!n) return r;
    for (var i = n.split(`
`), a = 0, o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; a < i.length; ) {
      var s = i[a].match(o);
      if (!s) throw new Error("Invalid patch string: " + i[a]);
      var l = new t.patch_obj();
      for (r.push(l), l.start1 = parseInt(s[1], 10), s[2] === "" ? (l.start1--, l.length1 = 1) : s[2] == "0" ? l.length1 = 0 : (l.start1--, l.length1 = parseInt(s[2], 10)), l.start2 = parseInt(s[3], 10), s[4] === "" ? (l.start2--, l.length2 = 1) : s[4] == "0" ? l.length2 = 0 : (l.start2--, l.length2 = parseInt(s[4], 10)), a++; a < i.length; ) {
        var u = i[a].charAt(0);
        try {
          var c = decodeURI(i[a].substring(1));
        } catch {
          throw new Error("Illegal escape in patch_fromText: " + c);
        }
        if (u == "-") l.diffs.push(new t.Diff(-1, c));
        else if (u == "+") l.diffs.push(new t.Diff(1, c));
        else if (u == " ") l.diffs.push(new t.Diff(0, c));
        else {
          if (u == "@") break;
          if (u !== "") throw new Error('Invalid patch mode "' + u + '" in: ' + c);
        }
        a++;
      }
    }
    return r;
  }, (t.patch_obj = function() {
    this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
  }).prototype.toString = function() {
    for (var n, r = ["@@ -" + (this.length1 === 0 ? this.start1 + ",0" : this.length1 == 1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (this.length2 === 0 ? this.start2 + ",0" : this.length2 == 1 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + ` @@
`], i = 0; i < this.diffs.length; i++) {
      switch (this.diffs[i][0]) {
        case 1:
          n = "+";
          break;
        case -1:
          n = "-";
          break;
        case 0:
          n = " ";
      }
      r[i + 1] = n + encodeURI(this.diffs[i][1]) + `
`;
    }
    return r.join("").replace(/%20/g, " ");
  }, e.exports = t, e.exports.diff_match_patch = t, e.exports.DIFF_DELETE = -1, e.exports.DIFF_INSERT = 1, e.exports.DIFF_EQUAL = 0;
});
zs.DIFF_EQUAL;
zs.DIFF_DELETE;
zs.DIFF_INSERT;
const bE = ({
  oldJson: e,
  newJson: t
}) => {
  const n = Ku.formatLines(
    Ku.diffLines(
      JSON.stringify(e, null, 2),
      JSON.stringify(t, null, 2)
    )
  ), [r] = eS(n, {});
  return !e && !t ? null : /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ G(
      Q,
      {
        sx: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mb: 3
        },
        children: [
          /* @__PURE__ */ v(
            Qe,
            {
              sx: {
                fontSize: "14px",
                color: "neutralGray",
                lineHeight: "20px",
                fontWeight: 600
              },
              children: "Existing"
            }
          ),
          /* @__PURE__ */ v(
            Qe,
            {
              sx: {
                fontSize: "14px",
                color: "neutralGray",
                lineHeight: "20px",
                fontWeight: 600
              },
              children: "Proposed"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ v(vE, { viewType: "split", diffType: r.type, hunks: r.hunks || [], children: (i) => i.map((a) => (
      // Hunk component does not allow to pass children as a prop
      // but that is the typing issue as passing the children
      // is recommended by documentation approach.
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      /* @__PURE__ */ v(hh, { hunk: a, children: a.content }, a.content)
    )) })
  ] });
}, Us = ({
  createdDate: e,
  expiryDate: t,
  expiryEpochNo: n,
  createdEpochNo: r,
  isSliderCard: i
}) => {
  const { screenWidth: a } = Ie(), o = a < 420;
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        border: 1,
        borderColor: "lightBlue",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        mb: i ? "20px" : "32px"
      },
      children: [
        /* @__PURE__ */ G(
          Q,
          {
            sx: {
              alignItems: "center",
              bgcolor: "#D6E2FF80",
              display: "flex",
              flex: 1,
              justifyContent: "center",
              py: "6px",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ G(
                se,
                {
                  variant: "caption",
                  sx: {
                    fontSize: o ? 11 : 12,
                    fontWeight: 300
                  },
                  "data-testid": "submission-date",
                  children: [
                    "Submitted:",
                    " ",
                    /* @__PURE__ */ v(
                      se,
                      {
                        component: "span",
                        sx: {
                          fontSize: o ? 11 : 12,
                          fontWeight: 600
                        },
                        children: ko(e)
                      }
                    ),
                    /* @__PURE__ */ v(
                      se,
                      {
                        component: "span",
                        variant: "caption",
                        sx: {
                          fontSize: o ? 11 : 12,
                          fontWeight: 300
                        },
                        children: ` (Epoch ${r})`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ v(
                Hi,
                {
                  heading: "Submission Date",
                  paragraphOne: "The date when the governance action was submitted on-chain.",
                  placement: "bottom-end",
                  arrow: !0,
                  children: /* @__PURE__ */ v(
                    Ti,
                    {
                      sx: {
                        ml: 0.5,
                        fontSize: o ? "18px" : "19px",
                        color: "#ADAEAD"
                      }
                    }
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ G(
          Q,
          {
            sx: {
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flex: 1,
              py: 0.75,
              width: "100%"
            },
            children: [
              /* @__PURE__ */ G(
                se,
                {
                  variant: "caption",
                  sx: {
                    fontSize: o ? 11 : 12,
                    fontWeight: 300
                  },
                  "data-testid": "expiry-date",
                  children: [
                    "Expires:",
                    " ",
                    /* @__PURE__ */ v(
                      se,
                      {
                        component: "span",
                        sx: {
                          fontSize: o ? 11 : 12,
                          fontWeight: 600
                        },
                        children: t ? ko(t) : "-"
                      }
                    ),
                    /* @__PURE__ */ v(
                      se,
                      {
                        component: "span",
                        variant: "caption",
                        sx: {
                          fontSize: o ? 11 : 12,
                          fontWeight: 300
                        },
                        children: ` (Epoch ${n})`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ v(
                Hi,
                {
                  heading: "Expiry Date",
                  paragraphOne: "The date when the governance action will expiry if it doesn’t reach ratification thresholds.",
                  paragraphTwo: "IMPORTANT: If the governance action is ratified before the expiry date it will be considered ratified and it will not be available to vote on afterwards.",
                  placement: "bottom-end",
                  arrow: !0,
                  children: /* @__PURE__ */ v(
                    Ti,
                    {
                      sx: {
                        ml: 0.5,
                        fontSize: o ? "18px" : "19px",
                        color: "#ADAEAD"
                      }
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}, yc = ({ disabled: e, onClick: t, left: n }) => {
  const {
    palette: { primaryBlue: r, arcticWhite: i, lightBlue: a }
  } = vt;
  return /* @__PURE__ */ v(
    Q,
    {
      onClick: t,
      sx: {
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        border: `1px solid ${a}`,
        backgroundColor: i,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          boxShadow: e ? 0 : 2
        }
      },
      children: /* @__PURE__ */ v(
        Wh,
        {
          sx: {
            transform: `rotate(${n ? 180 : 0}deg)`,
            color: e ? "#C1BED3" : r
          }
        }
      )
    }
  );
}, wE = ({
  currentSlide: e,
  instanceRef: t,
  itemsPerView: n
}) => t.current && /* @__PURE__ */ G(
  Q,
  {
    sx: {
      display: "flex",
      gap: "4px"
    },
    children: [
      /* @__PURE__ */ v(
        yc,
        {
          left: !0,
          onClick: (r) => {
            var i;
            r.stopPropagation(), (i = t.current) == null || i.prev();
          },
          disabled: e === 0
        }
      ),
      /* @__PURE__ */ v(
        yc,
        {
          onClick: (r) => {
            var i;
            r.stopPropagation(), (i = t.current) == null || i.next();
          },
          disabled: e + n >= t.current.track.details.slides.length
        }
      )
    ]
  }
), vc = (e) => {
  const { children: t, value: n, index: r } = e;
  return /* @__PURE__ */ v(
    "div",
    {
      role: "tabpanel",
      hidden: n !== r,
      id: `simple-tabpanel-${r}`,
      "aria-labelledby": `simple-tab-${r}`,
      style: {
        display: "flex",
        flexDirection: "column",
        flex: n !== r ? 0 : 1
      },
      children: n === r && /* @__PURE__ */ v(Q, { pb: 3, children: t })
    }
  );
}, ph = ({
  vote: e,
  width: t,
  maxWidth: n,
  isCC: r
}) => {
  const i = e.toLowerCase(), a = Re(() => {
    switch (i) {
      case "yes":
        return r ? "Constitutional" : "Yes";
      case "no":
        return r ? "Unconstitutional" : "No";
      default:
        return "Abstain";
    }
  }, [r, i]);
  return /* @__PURE__ */ v(
    Q,
    {
      py: 0.75,
      px: 2.25,
      border: 1,
      borderColor: i === "yes" ? "#C0E4BA" : i === "no" ? "#EDACAC" : "#99ADDE",
      bgcolor: i === "yes" ? "#F0F9EE" : i === "no" ? "#FBEBEB" : "#E6EBF7",
      borderRadius: 100,
      textAlign: "center",
      minWidth: "50px",
      maxWidth: n ? `${n}px` : "auto",
      width: t ? `${t}px` : "auto",
      maxHeight: "14px",
      children: /* @__PURE__ */ v(
        Qe,
        {
          textTransform: "uppercase",
          fontSize: 12,
          fontWeight: 400,
          lineHeight: "16px",
          children: a()
        }
      )
    }
  );
}, mh = ({
  votes: {
    dRepYesVotes: e,
    dRepAbstainVotes: t,
    dRepNoVotes: n,
    poolYesVotes: r,
    poolAbstainVotes: i,
    poolNoVotes: a,
    ccYesVotes: o,
    ccAbstainVotes: s,
    ccNoVotes: l
  }
}) => /* @__PURE__ */ G(
  Q,
  {
    sx: {
      display: "flex",
      flexDirection: "column"
    },
    children: [
      /* @__PURE__ */ v(
        "img",
        {
          alt: "ga icon",
          src: Ni.govActionListImage,
          width: "64px",
          height: "64px",
          style: { marginBottom: "24px" }
        }
      ),
      /* @__PURE__ */ v(
        se,
        {
          sx: {
            fontSize: "22px",
            fontWeight: "600",
            lineHeight: "28px"
          },
          children: "Votes submitted"
        }
      ),
      /* @__PURE__ */ v(
        se,
        {
          sx: {
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "28px",
            mb: 3
          },
          children: "for this Governance Action"
        }
      ),
      /* @__PURE__ */ G(
        Q,
        {
          sx: {
            display: "flex",
            flexDirection: "column",
            gap: 4.5
          },
          children: [
            /* @__PURE__ */ v(
              so,
              {
                type: "dReps",
                yesVotes: e,
                noVotes: n,
                abstainVotes: t
              }
            ),
            /* @__PURE__ */ v(
              so,
              {
                type: "sPos",
                yesVotes: r,
                noVotes: a,
                abstainVotes: i
              }
            ),
            /* @__PURE__ */ v(
              so,
              {
                type: "ccCommittee",
                yesVotes: o,
                noVotes: l,
                abstainVotes: s
              }
            )
          ]
        }
      )
    ]
  }
), so = ({
  type: e,
  yesVotes: t,
  noVotes: n,
  abstainVotes: r
}) => {
  const i = Re(() => {
    switch (e) {
      case "ccCommittee":
        return "Constitutional Committee";
      case "dReps":
        return "DReps";
      case "sPos":
        return "SPOs";
      default:
        return "";
    }
  }, [e]);
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      },
      children: [
        /* @__PURE__ */ v(
          se,
          {
            sx: {
              fontSize: "18px",
              fontWeight: "600",
              lineHeight: "24px"
            },
            children: i()
          }
        ),
        /* @__PURE__ */ v(lo, { type: e, vote: "yes", value: t }),
        /* @__PURE__ */ v(lo, { type: e, vote: "abstain", value: r }),
        /* @__PURE__ */ v(lo, { type: e, vote: "no", value: n })
      ]
    }
  );
}, lo = ({ type: e, vote: t, value: n }) => /* @__PURE__ */ G(
  Q,
  {
    sx: {
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      columnGap: 1.5
    },
    children: [
      /* @__PURE__ */ v(ph, { vote: t, width: 115, isCC: e === "ccCommittee" }),
      /* @__PURE__ */ v(
        se,
        {
          "data-testid": `submitted-votes-${e}-${t}`,
          sx: {
            fontSize: 16,
            wordBreak: "break-all"
          },
          children: e === "sPos" ? n : `₳ ${Jm(n)}`
        }
      )
    ]
  }
);
zt(
  ({ control: e, name: t, errors: n, rules: r, ...i }, a) => {
    var l;
    const o = (l = te(n, t)) == null ? void 0 : l.message, s = Re(
      ({ field: u }) => /* @__PURE__ */ v(
        ya.Input,
        {
          ...i,
          ...u,
          errorMessage: o,
          ref: a
        }
      ),
      [o, i, a]
    );
    return /* @__PURE__ */ v(
      My,
      {
        name: t,
        control: e,
        rules: r,
        render: s
      }
    );
  }
);
const xE = ({
  isDashboard: e,
  isDataMissing: t,
  isInProgress: n,
  isVoter: r = !0,
  vote: i,
  proposal: a
}) => {
  const { isEnabled: o } = Ve(), [s, l] = Be(!1), { screenWidth: u, isMobile: c } = Ie(), f = (e && u < 1036) ?? c;
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        borderRadius: "20px",
        display: "grid",
        gridTemplateColumns: f ? void 0 : "0.6fr 0.4fr",
        mt: "12px",
        width: "100%",
        position: "relative",
        boxShadow: n ? "2px 2px 20px 0px rgba(245, 90, 0, 0.20)" : s && !t ? "2px 2px 20px 0px rgba(98, 188, 82, 0.20)" : "2px 2px 20px 0px rgba(47, 98, 220, 0.20)",
        ...t && {
          border: "1px solid #F6D5D5"
        }
      },
      "data-testid": "governance-action-details-card",
      children: [
        (s || n) && /* @__PURE__ */ v(
          Ts,
          {
            variant: s ? "voteSubmitted" : "inProgress"
          }
        ),
        /* @__PURE__ */ v(
          C1,
          {
            isDashboard: e,
            isDataMissing: t,
            isInProgress: n,
            isOneColumn: f,
            isSubmitted: s,
            proposal: a
          }
        ),
        /* @__PURE__ */ v(
          T1,
          {
            setIsVoteSubmitted: l,
            isVoter: r,
            vote: i,
            isDashboard: o,
            isOneColumn: f,
            isInProgress: n,
            proposal: a
          }
        )
      ]
    }
  );
};
zt((e, t) => {
  const { state: n, closeModal: r } = Yt(), { isMobile: i } = Ie(), {
    palette: { primaryBlue: a, fadedPurple: o }
  } = vt;
  return /* @__PURE__ */ G(ga, { dataTestId: "external-link-modal", ref: t, children: [
    /* @__PURE__ */ v(
      "img",
      {
        alt: "Status icon",
        src: Ni.warningYellowImage,
        style: { height: "84px", margin: "0 auto", width: "84px" }
      }
    ),
    /* @__PURE__ */ v(hs, { sx: { marginTop: "34px" }, children: i ? "External Link Safety" : "Be Careful!" }),
    /* @__PURE__ */ G(ma, { children: [
      /* @__PURE__ */ v(Qe, { textAlign: "center", sx: { fontSize: "16px" }, children: i ? "This is an external link:" : "You are about to open an external link to:" }),
      /* @__PURE__ */ v(
        Qe,
        {
          textAlign: "center",
          sx: {
            fontSize: "16px",
            marginBottom: "38px",
            color: a,
            textDecoration: "underline",
            wordBreak: "break-word"
          },
          children: n == null ? void 0 : n.externalLink
        }
      ),
      /* @__PURE__ */ v(
        Qe,
        {
          textAlign: "center",
          sx: {
            fontSize: i ? "16px" : "14px",
            marginBottom: "38px",
            color: o
          },
          children: "Exercise caution and verify the website's authenticity before sharing personal information. To proceed, click 'Continue'. To stay on Cardano, click 'Cancel'."
        }
      )
    ] }),
    /* @__PURE__ */ G(
      Q,
      {
        sx: {
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          gap: "38px"
        },
        children: [
          /* @__PURE__ */ v(
            Wn,
            {
              "data-testid": "continue-modal-button",
              onClick: () => {
                ha((n == null ? void 0 : n.externalLink) || "#"), r();
              },
              sx: {
                borderRadius: 50,
                textTransform: "none",
                height: "40px"
              },
              variant: "contained",
              children: i ? "Continue" : "Continue to texternal link"
            }
          ),
          /* @__PURE__ */ v(
            Wn,
            {
              "data-testid": "cancel-modal-button",
              onClick: () => {
                r();
              },
              sx: {
                borderRadius: 50,
                padding: "10px 26px",
                textTransform: "none",
                height: "40px",
                width: "117px"
              },
              variant: "outlined",
              children: "Cancel"
            }
          )
        ]
      }
    )
  ] });
});
zt((e, t) => {
  const { state: n } = Yt(), { isMobile: r } = Ie();
  return /* @__PURE__ */ G(
    ga,
    {
      dataTestId: n ? n.dataTestId : "loading-modal",
      hideCloseButton: !0,
      ref: t,
      children: [
        /* @__PURE__ */ v($v, { size: 100 }),
        /* @__PURE__ */ v(hs, { sx: { marginTop: "34px", px: r ? 0 : 3 }, children: n == null ? void 0 : n.title }),
        /* @__PURE__ */ v(ma, { children: /* @__PURE__ */ G(
          Qe,
          {
            textAlign: "center",
            sx: { fontSize: "16px", fontWeight: "400" },
            children: [
              n == null ? void 0 : n.message,
              " "
            ]
          }
        ) })
      ]
    }
  );
});
zt((e, t) => {
  const { state: n, closeModal: r } = Yt(), { isMobile: i } = Ie(), a = () => {
    r();
  };
  return /* @__PURE__ */ G(
    ga,
    {
      dataTestId: n ? n.dataTestId : "status-modal",
      ref: t,
      children: [
        /* @__PURE__ */ v(
          "img",
          {
            alt: "Status icon",
            src: (n == null ? void 0 : n.status) === "warning" ? Ni.warningImage : (n == null ? void 0 : n.status) === "success" ? Ni.successImage : Ge.timerIcon,
            style: { height: "84px", margin: "0 auto", width: "84px" }
          }
        ),
        /* @__PURE__ */ v(hs, { sx: { marginTop: "34px", px: i ? 0 : 3 }, children: n == null ? void 0 : n.title }),
        /* @__PURE__ */ v(ma, { children: /* @__PURE__ */ G(
          Qe,
          {
            textAlign: "center",
            sx: {
              fontSize: "16px",
              fontWeight: "400",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 8,
              wordBreak: "break-word",
              whiteSpace: "pre-line"
            },
            children: [
              n == null ? void 0 : n.message,
              " ",
              (n == null ? void 0 : n.link) && /* @__PURE__ */ v(
                na,
                {
                  onClick: () => ha((n == null ? void 0 : n.link) || ""),
                  target: "_blank",
                  sx: [{ "&:hover": { cursor: "pointer" } }],
                  children: (n == null ? void 0 : n.linkText) || "this link"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ v(
          Wn,
          {
            "data-testid": "confirm-modal-button",
            onClick: n != null && n.onSubmit ? n == null ? void 0 : n.onSubmit : r,
            sx: {
              borderRadius: 50,
              margin: "0 auto",
              padding: "10px 26px",
              textTransform: "none",
              marginTop: "38px",
              width: "100%"
            },
            variant: "contained",
            children: (n == null ? void 0 : n.buttonText) || "Confirm"
          }
        ),
        (n == null ? void 0 : n.cancelText) && /* @__PURE__ */ v(
          Wn,
          {
            "data-testid": "cancel-modal-button",
            onClick: n != null && n.onCancel ? n == null ? void 0 : n.onCancel : r,
            sx: {
              borderRadius: 50,
              margin: "0 auto",
              padding: "10px 26px",
              textTransform: "none",
              marginTop: "24px",
              width: "100%"
            },
            variant: "outlined",
            children: n == null ? void 0 : n.cancelText
          }
        ),
        (n == null ? void 0 : n.feedbackText) && /* @__PURE__ */ v(
          Wn,
          {
            "data-testid": "feedback-button",
            onClick: n != null && n.onFeedback ? n == null ? void 0 : n.onFeedback : a,
            sx: {
              borderRadius: 50,
              margin: "0 auto",
              padding: "10px 26px",
              textTransform: "none",
              marginTop: "24px",
              width: "100%"
            },
            variant: "outlined",
            children: n == null ? void 0 : n.feedbackText
          }
        )
      ]
    }
  );
});
zt((e, t) => {
  const { state: n } = Yt();
  return n ? /* @__PURE__ */ v(
    ga,
    {
      dataTestId: "submitted-votes-modal",
      sx: { maxWidth: "372px", paddingBottom: 6 },
      ref: t,
      children: /* @__PURE__ */ v(ma, { children: /* @__PURE__ */ v(Q, { alignItems: "center", children: /* @__PURE__ */ v(mh, { votes: n }) }) })
    }
  ) : null;
});
const SE = ({ link: e }) => {
  const { addSuccessAlert: t } = Ve(), [n, r] = Be(null), [i, a] = Be(!0), o = (f) => {
    r(f.currentTarget);
  }, s = () => {
    r(null);
  }, l = (f) => {
    navigator.clipboard.writeText(e), t("Copied to clipboard"), a(!1), f.stopPropagation();
  }, u = !!n, c = u ? "simple-popover" : void 0;
  return /* @__PURE__ */ G(Ye, { children: [
    /* @__PURE__ */ v(
      Qs,
      {
        "data-testid": "share-button",
        "aria-describedby": c,
        onClick: o,
        sx: (f) => ({
          alignItems: "center",
          bgcolor: u ? "#F7F9FB" : "transparent",
          borderRadius: 50,
          boxShadow: u ? f.shadows[1] : "none",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          padding: 1.5,
          transition: "all 0.3s",
          "&:hover": {
            boxShadow: f.shadows[1],
            bgcolor: "#F7F9FB"
          }
        }),
        children: /* @__PURE__ */ v("img", { alt: "", height: 24, width: 24, src: Ge.share })
      }
    ),
    /* @__PURE__ */ v(
      Lh,
      {
        id: c,
        open: u,
        onClose: s,
        anchorEl: n,
        marginThreshold: 12,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "right"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "right"
        },
        children: /* @__PURE__ */ G(
          Q,
          {
            sx: {
              alignItems: "center",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "12px 24px",
              px: 3,
              width: 148
            },
            children: [
              /* @__PURE__ */ v(se, { sx: { alignSelf: "flex-start" }, children: "Share" }),
              /* @__PURE__ */ v(
                Qs,
                {
                  "data-testid": "copy-link-from-share-button",
                  onClick: l,
                  sx: {
                    alignItems: "center",
                    bgcolor: i ? "lightBlue" : "neutralWhite",
                    borderRadius: 50,
                    boxShadow: (f) => f.shadows[1],
                    cursor: "pointer",
                    display: "flex",
                    height: 48,
                    justifyContent: "center",
                    width: 48,
                    mt: 1.5,
                    mb: 1
                  },
                  children: /* @__PURE__ */ v("img", { alt: "link", height: 24, src: Ge.link, width: 24 })
                }
              ),
              /* @__PURE__ */ v(se, { variant: "caption", children: i ? "Click to copy link" : "Link copied" })
            ]
          }
        )
      }
    )
  ] });
}, gh = ({
  data: e,
  title: t,
  isShowAll: n = !0,
  dataLength: r = 0,
  notSlicedDataLength: i = 0,
  onDashboard: a = !1,
  filters: o,
  searchPhrase: s,
  sorting: l,
  pendingTransaction: u,
  onClickShowAll: c
}) => {
  var F;
  const [f, h] = Be(!1), { isMobile: d, screenWidth: p } = Ie(), {
    palette: { primaryBlue: m, arcticWhite: y, lightBlue: g }
  } = vt, w = {
    mode: "free",
    initial: 0,
    slides: {
      perView: "auto",
      spacing: 20
    }
  }, x = qe(
    () => (
      // Arrows are to be show only on desktop view.
      // 268 - side menu width; 40 - distance needed from the left on
      // disconnected wallet (no side menu); 350 - gov action card width;
      // other values are for paddings and margins
      p < (a ? 268 : 40) + 28 + r * 350 + 20 * r - 5
    ),
    [p, a, r]
  ), { sliderRef: N, instanceRef: R, currentSlide: A, itemsPerView: L } = Py({
    config: w
  }), C = () => {
    var P, b, E, O;
    (b = R.current) == null || b.update((P = R.current) == null ? void 0 : P.options), (E = R.current) == null || E.track.to(0), (O = R.current) == null || O.moveToIdx(0);
  };
  return Mt(() => {
    R.current && h(!0);
  }, [R]), Mt(() => {
    C();
  }, [
    o,
    l,
    s,
    (F = u == null ? void 0 : u.vote) == null ? void 0 : F.resourceId,
    e
  ]), /* @__PURE__ */ G(Q, { children: [
    /* @__PURE__ */ G(
      Q,
      {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          mb: 3.5,
          height: "46px"
        },
        children: [
          /* @__PURE__ */ G(
            Q,
            {
              sx: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2
              },
              children: [
                /* @__PURE__ */ v(se, { variant: "title2", children: t }),
                (i > 6 || d && n) && /* @__PURE__ */ v(
                  Ct,
                  {
                    variant: "contained",
                    size: "medium",
                    sx: {
                      border: `1px solid ${g}`,
                      backgroundColor: y,
                      boxShadow: "none",
                      color: m,
                      minWidth: 93,
                      "&:hover": { backgroundColor: y }
                    },
                    onClick: c,
                    children: "Show All"
                  }
                )
              ]
            }
          ),
          f && x && r > 1 && !d && /* @__PURE__ */ v(
            wE,
            {
              currentSlide: A,
              instanceRef: R,
              itemsPerView: L
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ v(
      "div",
      {
        ref: N,
        className: "keen-slider",
        style: { width: "100%", overflow: "visible" },
        children: e
      }
    )
  ] });
}, CE = ({
  setIsVoteSubmitted: e,
  previousVote: t,
  isInProgress: n,
  proposal: r,
  proposal: { expiryDate: i, expiryEpochNo: a }
}) => {
  const [o, s] = Be(), [l, u] = Be(), [c, f] = Be(!1), { voter: h } = Ve(), { voteContextText: d } = Sy(l), { isMobile: p, screenWidth: m } = Ie(), { openModal: y } = Yt(), {
    areFormErrors: g,
    confirmVote: w,
    isDirty: x,
    isVoteLoading: N,
    registerInput: R,
    setValue: A,
    vote: L,
    canVote: C
  } = Rv({ previousVote: t, voteContextHash: o, voteContextUrl: l }), F = (E, O) => {
    u(E), s(O ?? void 0);
  };
  Mt(() => {
    t != null && t.vote && (A("vote", t.vote), e(!0));
  }, [t == null ? void 0 : t.vote, A, e]), Mt(() => {
    t != null && t.url && u(t.url);
  }, [t == null ? void 0 : t.url, u]);
  const P = qe(
    () => /* @__PURE__ */ v(
      Ct,
      {
        "data-testid": "cancel-button",
        onClick: () => A("vote", (t == null ? void 0 : t.vote) ?? ""),
        variant: "outlined",
        size: "extraLarge",
        sx: {
          width: "100%"
        },
        children: "Cancel"
      }
    ),
    [t == null ? void 0 : t.vote, A]
  ), b = qe(
    () => /* @__PURE__ */ v(
      Ct,
      {
        "data-testid": "change-vote",
        onClick: w,
        disabled: !C,
        isLoading: N,
        variant: "contained",
        sx: {
          borderRadius: 50,
          textTransform: "none",
          width: "100%",
          height: 48
        },
        children: "Change vote"
      }
    ),
    [w, C, N]
  );
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        width: "full",
        ...n && { opacity: 0.5 }
      },
      children: [
        /* @__PURE__ */ G(Q, { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", children: [
          t != null && t.date ? /* @__PURE__ */ G(Ye, { children: [
            /* @__PURE__ */ G(
              se,
              {
                variant: "body1",
                sx: {
                  whiteSpace: "pre-line",
                  fontWeight: 400,
                  mb: 1,
                  alignSelf: "start"
                },
                children: [
                  /* @__PURE__ */ v(
                    se,
                    {
                      variant: "body1",
                      component: "span",
                      sx: {
                        whiteSpace: "pre-line",
                        fontWeight: 600,
                        mb: 1,
                        alignSelf: "start"
                      },
                      children: `You voted ${t == null ? void 0 : t.vote.toLocaleUpperCase()} on this proposal`
                    }
                  ),
                  /* @__PURE__ */ v(
                    se,
                    {
                      sx: {
                        whiteSpace: "pre-line",
                        fontWeight: 400,
                        mb: 1,
                        alignSelf: "start"
                      },
                      children: `on ${ko(t.date)} (Epoch ${t.epochNo})`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ v(
              se,
              {
                variant: "caption",
                sx: { lineHeight: "18px", alignSelf: "start" },
                children: `You can change your vote up to ${i} (Epoch ${a})`
              }
            )
          ] }) : /* @__PURE__ */ v(se, { variant: "body1", children: "Choose how you want to vote:" }),
          /* @__PURE__ */ G(
            Q,
            {
              mt: 3,
              sx: {
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                gap: 2
              },
              children: [
                /* @__PURE__ */ v(
                  ja,
                  {
                    dataTestId: "yes-radio",
                    isChecked: (L == null ? void 0 : L.toLowerCase()) === "yes",
                    name: "vote",
                    register: R,
                    setValue: A,
                    title: "Yes",
                    value: "yes",
                    disabled: n
                  }
                ),
                /* @__PURE__ */ v(
                  ja,
                  {
                    dataTestId: "no-radio",
                    isChecked: (L == null ? void 0 : L.toLowerCase()) === "no",
                    name: "vote",
                    register: R,
                    setValue: A,
                    title: "No",
                    value: "no",
                    disabled: n
                  }
                ),
                /* @__PURE__ */ v(
                  ja,
                  {
                    dataTestId: "abstain-radio",
                    isChecked: (L == null ? void 0 : L.toLowerCase()) === "abstain",
                    name: "vote",
                    register: R,
                    setValue: A,
                    title: "Abstain",
                    value: "abstain",
                    disabled: n
                  }
                )
              ]
            }
          ),
          ((h == null ? void 0 : h.isRegisteredAsDRep) || (h == null ? void 0 : h.isRegisteredAsSoleVoter)) && /* @__PURE__ */ v(
            Ct,
            {
              "data-testid": "show-votes-button",
              variant: "text",
              size: "large",
              disabled: n,
              sx: {
                mt: "26px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "20px"
              },
              onClick: () => {
                y({
                  type: "submittedVotes",
                  state: {
                    ...r,
                    vote: t == null ? void 0 : t.vote
                  }
                });
              },
              children: "Show votes"
            }
          ),
          /* @__PURE__ */ v(
            se,
            {
              variant: "body1",
              sx: {
                textTransform: "uppercase",
                fontSize: "14px",
                color: pi.c400,
                mt: 6
              },
              children: "Optional"
            }
          ),
          /* @__PURE__ */ v(
            se,
            {
              variant: "body2",
              sx: {
                textAlign: "center",
                mt: "5px"
              },
              children: d ? "Context about your vote" : "You can provide context about your vote. This information will be viewable by other users."
            }
          ),
          d && /* @__PURE__ */ G(
            Q,
            {
              sx: {
                display: "flex",
                flexDirection: "column",
                mt: 2
              },
              children: [
                /* @__PURE__ */ v(
                  se,
                  {
                    variant: "body2",
                    sx: {
                      fontWeight: 400,
                      color: "neutralGray",
                      ...!c && {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2
                      }
                    },
                    children: d
                  }
                ),
                /* @__PURE__ */ v(
                  Ct,
                  {
                    onClick: () => {
                      f((E) => !E);
                    },
                    sx: {
                      p: 0,
                      margin: "0 auto",
                      ":hover": {
                        backgroundColor: "transparent"
                      }
                    },
                    disableRipple: !0,
                    variant: "text",
                    "data-testid": "external-modal-button",
                    children: /* @__PURE__ */ v(
                      se,
                      {
                        variant: "body2",
                        sx: {
                          fontWeight: 400,
                          color: "primaryBlue",
                          borderBottom: "1px solid"
                        },
                        children: c ? "Show less" : "Show more"
                      }
                    )
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ v(
            Ct,
            {
              variant: "outlined",
              onClick: () => {
                y({
                  type: "voteContext",
                  state: {
                    onSubmit: F
                  }
                });
              },
              sx: {
                mt: d ? "40px" : "12px",
                fontSize: m < 390 ? "12px" : m < 1036 ? "14px" : m < 1080 ? "10.5px" : m < 1480 ? "11.5px" : "14px"
              },
              "data-testid": "provide-context-button",
              children: d ? "Provide new context about your vote" : "Provide context about your vote"
            }
          )
        ] }),
        /* @__PURE__ */ v(
          se,
          {
            sx: {
              mb: 2,
              mt: 3,
              textAlign: "center",
              visibility: t != null && t.vote ? "visible" : "hidden"
            },
            variant: "caption",
            children: "Select a different option to change your vote"
          }
        ),
        t != null && t.vote && (t == null ? void 0 : t.vote) !== L ? /* @__PURE__ */ G(
          Q,
          {
            display: "flex",
            flexDirection: p ? "column" : "row",
            justifyContent: "space-between",
            children: [
              p ? b : P,
              /* @__PURE__ */ v(Q, { px: 1, py: p ? 1.5 : 0 }),
              p ? P : b
            ]
          }
        ) : /* @__PURE__ */ v(
          Ct,
          {
            "data-testid": "vote-button",
            variant: "contained",
            disabled: !L || (t == null ? void 0 : t.vote) === L || g && x,
            isLoading: N,
            onClick: w,
            size: "extraLarge",
            children: "Vote"
          }
        )
      ]
    }
  );
}, EE = ({
  votedProposal: e,
  inProgress: t
}) => {
  const { useRouter: n, isEnabled: r } = Ve(), i = n(), { proposal: a, vote: o } = e, {
    abstract: s,
    createdDate: l,
    createdEpochNo: u,
    expiryDate: c,
    expiryEpochNo: f,
    index: h,
    metadataStatus: d,
    metadataValid: p,
    txHash: m,
    type: y,
    title: g
  } = a, { isMobile: w, screenWidth: x } = Ie();
  return /* @__PURE__ */ G(
    Q,
    {
      sx: {
        width: x < 420 ? 290 : w ? 324 : 350,
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0px 4px 15px 0px #DDE3F5",
        borderRadius: "20px",
        backgroundColor: p ? "rgba(255, 255, 255, 0.3)" : "rgba(251, 235, 235, 0.50)",
        border: t ? "1px solid #FFCBAD" : p ? "1px solid #C0E4BA" : "1px solid #F6D5D5"
      },
      "data-testid": `govaction-${_r(y)}-card`,
      children: [
        /* @__PURE__ */ v(
          Ts,
          {
            variant: t ? "inProgress" : "voteSubmitted"
          }
        ),
        /* @__PURE__ */ G(
          Q,
          {
            sx: {
              padding: "40px 24px 0"
            },
            children: [
              /* @__PURE__ */ v(
                Ud,
                {
                  title: g,
                  isDataMissing: d
                }
              ),
              /* @__PURE__ */ v(
                St,
                {
                  label: "Abstract",
                  text: s,
                  textVariant: "twoLines",
                  dataTestId: "governance-action-abstract",
                  isSliderCard: !0
                }
              ),
              /* @__PURE__ */ v(
                St,
                {
                  label: "Governance Action Type:",
                  text: kn(y),
                  textVariant: "pill",
                  dataTestId: `${_r(y)}-type`,
                  isSliderCard: !0
                }
              ),
              /* @__PURE__ */ v(
                Us,
                {
                  createdDate: l,
                  expiryDate: c,
                  expiryEpochNo: f,
                  createdEpochNo: u,
                  isSliderCard: !0
                }
              ),
              /* @__PURE__ */ v(
                St,
                {
                  label: "Governance Action ID:",
                  text: pt(m, h),
                  dataTestId: `${pt(m, h)}-id`,
                  isCopyButton: !0,
                  isSliderCard: !0
                }
              ),
              /* @__PURE__ */ v(w1, { voteTxHash: o.txHash, vote: o.vote })
            ]
          }
        ),
        /* @__PURE__ */ v(
          Q,
          {
            bgcolor: "white",
            px: w ? 2 : 5,
            py: 2,
            sx: {
              boxShadow: "0px 4px 15px 0px #DDE3F5",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20
            },
            children: /* @__PURE__ */ v(
              Ct,
              {
                disabled: t,
                "data-testid": `govaction-${pt(
                  m,
                  h
                )}-change-your-vote`,
                onClick: () => i.push(
                  `${r ? "/dashboard" : ""}${qt.governanceActionsAction.replace(
                    ":proposalId",
                    pt(m, h)
                  )}`
                ),
                sx: {
                  width: "100%"
                },
                variant: "contained",
                children: "View details"
              }
            )
          }
        )
      ]
    }
  );
}, yh = Ji(
  {}
);
yh.displayName = "ModalContext";
function Yt() {
  const e = Xi(yh);
  if (e === void 0)
    throw new Error("useModal must be used within a ModalProvider");
  return e;
}
const vh = Ji(void 0), kE = ({
  children: e,
  apiUrl: t,
  walletApi: n,
  validationApiUrl: r,
  cExplorerBaseUrl: i,
  openFeedbackWindow: a,
  isVotingOnGovernanceActionEnabled: o,
  epochParams: s,
  addSuccessAlert: l,
  validateMetadata: u,
  generateJsonld: c,
  createHash: f,
  voter: h,
  routePath: d,
  useLocation: p,
  useParams: m,
  generatePath: y,
  useRouter: g
}) => {
  const w = qe(
    () => ({
      apiUrl: t,
      validationApiUrl: r,
      cExplorerBaseUrl: i,
      openFeedbackWindow: a,
      isVotingOnGovernanceActionEnabled: o,
      epochParams: s,
      addSuccessAlert: l,
      validateMetadata: u,
      generateJsonld: c,
      createHash: f,
      voter: h,
      routePath: d,
      useLocation: p,
      useParams: m,
      generatePath: y,
      useRouter: g,
      ...n || {}
    }),
    [
      t,
      r,
      a,
      o,
      s,
      l,
      u,
      c,
      f,
      h,
      n,
      i,
      d,
      p,
      m,
      y,
      g
    ]
  );
  return /* @__PURE__ */ v(vh.Provider, { value: w, children: /* @__PURE__ */ v(Qc, { client: new Wc(), children: /* @__PURE__ */ v(td, { children: e }) }) });
}, Ve = () => {
  const e = Xi(vh);
  if (e === void 0)
    throw new Error("usePillarContext must be used within a PillarProvider");
  return e;
}, bc = ({
  filters: e,
  onDashboard: t = !0,
  proposals: n,
  searchPhrase: r,
  sorting: i
}) => {
  const { generatePath: a, voter: o, isEnabled: s, useRouter: l } = Ve(), { isMobile: u } = Ie(), c = l(), f = Re(
    (d) => () => {
      c.push(
        `${s ? "/dashboard" : ""}${a(
          qt.governanceActionsAction,
          {
            proposalId: pt(d.txHash, d.index)
          }
        )}`
      );
    },
    [a, c, s]
  ), h = Re(
    (d) => () => {
      c.push(
        `${s ? "/dashboard" : ""}${a(
          qt.governanceActionsCategory,
          {
            category: d
          }
        )}`
      );
    },
    [a, c, s]
  );
  return /* @__PURE__ */ v(Ye, { children: n.length ? /* @__PURE__ */ v(Ye, { children: n == null ? void 0 : n.map((d, p) => /* @__PURE__ */ G(Q, { pb: 2.5, children: [
    /* @__PURE__ */ v(
      gh,
      {
        data: d.actions.slice(0, 6).map((m) => /* @__PURE__ */ v(
          "div",
          {
            className: "keen-slider__slide",
            style: {
              overflow: "visible",
              width: "auto"
            },
            children: /* @__PURE__ */ v(
              ad,
              {
                ...m,
                inProgress: !1,
                isVoter: !!o && s,
                onClick: f(m)
              }
            )
          },
          m.id
        )),
        dataLength: d.actions.slice(0, 6).length,
        filters: e,
        notSlicedDataLength: d.actions.length,
        onDashboard: t,
        searchPhrase: r,
        sorting: i,
        title: uy(d.title),
        onClickShowAll: h(
          d.title
        )
      }
    ),
    p < n.length - 1 && /* @__PURE__ */ v(Q, { height: u ? 40 : 52 })
  ] }, d.title)) }) : /* @__PURE__ */ v(se, { fontWeight: 300, sx: { py: 4 }, children: "No results for the search." }) });
}, OE = ({
  filters: e,
  searchPhrase: t,
  sorting: n
}) => {
  const { generatePath: r, useRouter: i, isEnabled: a } = Ve(), { data: o, areDRepVotesLoading: s } = yy(
    e,
    n,
    t
  ), { isMobile: l } = Ie(), { pendingTransaction: u } = Ve(), c = i(), f = Re(
    (d) => () => {
      c.push(
        `${a ? "/dashboard" : ""}${r(
          qt.governanceActionsCategory,
          {
            category: d
          }
        )}`
      );
    },
    [r, c, a]
  ), h = qe(() => o.length && t ? o.map((d) => ({
    ...d,
    actions: d.actions.filter(
      (p) => pt(p.proposal.txHash, p.proposal.index).toLowerCase().includes(t.toLowerCase())
    )
  })).filter((d) => d.actions.length > 0) : o, [o, t]);
  return s ? /* @__PURE__ */ v(Q, { py: 4, display: "flex", justifyContent: "center", minHeight: "100vh", children: /* @__PURE__ */ v(Gn, {}) }) : /* @__PURE__ */ v(Ye, { children: o.length ? h != null && h.length ? /* @__PURE__ */ v(Ye, { children: h == null ? void 0 : h.map((d) => /* @__PURE__ */ G("div", { children: [
    /* @__PURE__ */ v(
      gh,
      {
        title: kn(d.title),
        searchPhrase: t,
        dataLength: d.actions.slice(0, 6).length,
        onDashboard: !0,
        onClickShowAll: f(
          d.title
        ),
        data: d.actions.map((p) => {
          var m;
          return /* @__PURE__ */ v(
            "div",
            {
              className: "keen-slider__slide",
              style: { overflow: "visible", width: "auto" },
              children: /* @__PURE__ */ v(
                EE,
                {
                  votedProposal: p,
                  inProgress: ((m = u == null ? void 0 : u.vote) == null ? void 0 : m.resourceId) === p.proposal.txHash + p.proposal.index
                }
              )
            },
            `${p == null ? void 0 : p.proposal.id}${p.vote.vote}`
          );
        })
      },
      d.title
    ),
    /* @__PURE__ */ v(Q, { height: l ? 50 : 72 })
  ] }, d.title)) }) : /* @__PURE__ */ v(Qe, { py: 4, fontWeight: "300", children: "No results for the search." }) : /* @__PURE__ */ v(Qe, { py: 4, fontWeight: "300", children: "You haven't voted on any Governance Actions yet. Check the 'To vote on' section to vote on Governance Actions." }) });
}, _E = aa.map(
  (e) => e.key
), TE = () => {
  const { debouncedSearchText: e, ...t } = nd(), { chosenFilters: n, chosenSorting: r } = t, i = n.length > 0 ? n : _E, { isMobile: a, pagePadding: o } = Ie(), { isEnabled: s, voter: l } = Ve(), { proposals: u, isProposalsLoading: c } = wy({
    filters: i,
    sorting: r,
    searchPhrase: e
  }), [f, h] = Be(), d = (p, m) => {
    h(m);
  };
  return Mt(() => {
    window.history.replaceState({}, document.title);
  }, []), /* @__PURE__ */ G(
    Q,
    {
      sx: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        pt: a ? 3.25 : 6.25
      },
      children: [
        /* @__PURE__ */ v(
          se,
          {
            sx: { mb: a ? 3.75 : 6, px: o },
            variant: a ? "title1" : "headline3",
            children: "Governance Actions"
          }
        ),
        a && /* @__PURE__ */ v(
          $h,
          {
            style: {
              borderColor: "#FFFFFF",
              borderWidth: 1,
              marginBottom: 30
            }
          }
        ),
        /* @__PURE__ */ G(
          Q,
          {
            sx: {
              display: "flex",
              flex: 1,
              flexDirection: "column",
              px: o
            },
            children: [
              /* @__PURE__ */ v(
                id,
                {
                  ...t,
                  filterOptions: aa,
                  filtersTitle: "Governance Action Type",
                  sortOptions: Kc
                }
              ),
              !u || c ? /* @__PURE__ */ v(
                Q,
                {
                  sx: {
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    minHeight: "100vh"
                  },
                  children: /* @__PURE__ */ v(Gn, {})
                }
              ) : s && (l != null && l.isRegisteredAsDRep || l != null && l.isRegisteredAsSoleVoter) ? /* @__PURE__ */ G(Ye, { children: [
                /* @__PURE__ */ G(
                  Ic,
                  {
                    sx: {
                      marginTop: 3,
                      display: "flex",
                      fontSize: 16,
                      fontWeight: 500
                    },
                    value: f,
                    indicatorColor: "secondary",
                    onChange: d,
                    "aria-label": "Governance Actions tabs",
                    children: [
                      /* @__PURE__ */ v(
                        Wl,
                        {
                          "data-testid": "to-vote-tab",
                          label: "To vote",
                          sx: {
                            textTransform: "none",
                            width: a ? "50%" : "auto"
                          }
                        }
                      ),
                      /* @__PURE__ */ v(
                        Wl,
                        {
                          "data-testid": "voted-tab",
                          label: "Voted on by me",
                          sx: {
                            textTransform: "none",
                            width: a ? "50%" : "auto"
                          }
                        }
                      )
                    ]
                  }
                ),
                " ",
                /* @__PURE__ */ v(Q, { height: a ? 24 : 60 }),
                /* @__PURE__ */ v(vc, { value: f, index: 0, children: /* @__PURE__ */ v(
                  bc,
                  {
                    filters: n,
                    onDashboard: !0,
                    searchPhrase: e,
                    sorting: r,
                    proposals: u
                  }
                ) }),
                /* @__PURE__ */ v(vc, { value: f, index: 1, children: /* @__PURE__ */ v(
                  OE,
                  {
                    filters: n,
                    searchPhrase: e,
                    sorting: r
                  }
                ) })
              ] }) : /* @__PURE__ */ G(Ye, { children: [
                /* @__PURE__ */ v(Q, { height: a ? 60 : 80 }),
                /* @__PURE__ */ v(
                  bc,
                  {
                    filters: t.chosenFilters,
                    onDashboard: !1,
                    searchPhrase: e,
                    sorting: t.chosenSorting,
                    proposals: u
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, AE = () => {
  var w;
  const { voter: e, useLocation: t, useParams: n, useRouter: r } = Ve(), i = t(), { state: a, hash: o } = i, s = a, l = o.slice(1), u = r(), { pagePadding: c, isMobile: f } = Ie(), { hash: h } = n("/governance_actions/[hash]"), d = h && pt(h, l), p = h && ly(h, l), { data: m, isLoading: y } = vy(
    d ?? "",
    !(s != null && s.proposal)
  ), g = (w = m ?? s) == null ? void 0 : w.proposal;
  return /* @__PURE__ */ v(Q, { display: "flex", flex: 1, flexDirection: "row", pt: 2, px: c, children: /* @__PURE__ */ G(Q, { display: "flex", flex: 1, flexDirection: "column", width: "100%", children: [
    f ? /* @__PURE__ */ v(
      Q,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          padding: "8px 0 24px",
          mb: "10px",
          borderBottom: "1px solid #FFF"
        },
        children: /* @__PURE__ */ v(se, { variant: "title1", children: "Governance Actions" })
      }
    ) : null,
    /* @__PURE__ */ v(
      Wv,
      {
        elementTwo: (g == null ? void 0 : g.title) ?? "",
        isDataMissing: (g == null ? void 0 : g.metadataStatus) ?? null
      }
    ),
    /* @__PURE__ */ G(
      na,
      {
        sx: {
          cursor: "pointer",
          display: "flex",
          textDecoration: "none"
        },
        onClick: u.back,
        children: [
          /* @__PURE__ */ v(
            "img",
            {
              alt: "arrow",
              src: Ge.arrowRightIcon,
              style: { marginRight: "12px", transform: "rotate(180deg)" }
            }
          ),
          /* @__PURE__ */ v(se, { color: "primary", fontWeight: 400, variant: "body2", children: "Back" })
        ]
      }
    ),
    y ? /* @__PURE__ */ v(
      Q,
      {
        alignItems: "center",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        minHeight: "100vh",
        children: /* @__PURE__ */ v(Gn, {})
      }
    ) : g ? /* @__PURE__ */ v(Q, { "data-testid": "governance-action-details", children: /* @__PURE__ */ v(
      xE,
      {
        proposal: g,
        isDataMissing: g.metadataStatus,
        isVoter: !!e
      }
    ) }) : /* @__PURE__ */ G(Q, { display: "flex", flexWrap: "wrap", mt: 4, children: [
      /* @__PURE__ */ v(se, { fontWeight: 300, children: "Governance action with id  " }),
      /* @__PURE__ */ v(se, { fontWeight: 500, children: ` ${p} ` }),
      /* @__PURE__ */ v(se, { fontWeight: 300, children: "  does not exist." })
    ] })
  ] }) });
}, PE = () => {
  const { useParams: e, useRouter: t, voter: n, isEnabled: r } = Ve(), { category: i } = e("/governance_actions/category/[category]"), { debouncedSearchText: a, ...o } = nd(), { chosenSorting: s } = o, { isMobile: l, pagePadding: u, screenWidth: c } = Ie(), f = t(), {
    isProposalsFetching: h,
    isProposalsFetchingNextPage: d,
    isProposalsLoading: p,
    proposals: m,
    proposalsfetchNextPage: y,
    proposalsHaveNextPage: g
  } = by({
    filters: [(i == null ? void 0 : i.replace(/ /g, "")) ?? ""],
    sorting: s,
    searchPhrase: a
  }), w = un(null);
  ky(
    y,
    p || d,
    g
  );
  const x = Oy(
    p,
    h
  ), N = qe(
    () => cy(m),
    [m]
  );
  return /* @__PURE__ */ v(
    Q,
    {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      minHeight: "100vh",
      children: /* @__PURE__ */ v(
        Q,
        {
          flex: 1,
          pt: l ? 3.25 : 6.25,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          children: /* @__PURE__ */ G(Q, { px: u, flex: 1, display: "flex", flexDirection: "column", children: [
            /* @__PURE__ */ G(
              na,
              {
                "data-testid": "back-to-list-link",
                sx: {
                  cursor: "pointer",
                  display: "flex",
                  textDecoration: "none",
                  marginBottom: 4.25
                },
                onClick: f.back,
                children: [
                  /* @__PURE__ */ v(
                    "img",
                    {
                      src: Ge.arrowRightIcon,
                      alt: "arrow",
                      style: { marginRight: "12px", transform: "rotate(180deg)" }
                    }
                  ),
                  /* @__PURE__ */ v(se, { variant: "body2", color: "primary", fontWeight: 400, children: "Back to Governance Actions" })
                ]
              }
            ),
            /* @__PURE__ */ v(
              id,
              {
                ...o,
                isFiltering: !1,
                sortOptions: Kc
              }
            ),
            /* @__PURE__ */ v(
              se,
              {
                variant: "title2",
                sx: {
                  m: "32px 0 32px"
                },
                children: kn(i ?? "")
              }
            ),
            p ? /* @__PURE__ */ v(
              Q,
              {
                alignItems: "center",
                py: 4,
                display: "flex",
                justifyContent: "center",
                flex: 1,
                children: /* @__PURE__ */ v(Gn, {})
              }
            ) : N != null && N.length ? /* @__PURE__ */ G(
              Q,
              {
                columnGap: "20px",
                display: "grid",
                gridTemplateColumns: `repeat(auto-fit, minmax(${c < 420 ? "290px" : l ? "324px" : "350px"}, 1fr))`,
                children: [
                  N.map((R) => /* @__PURE__ */ v(Q, { pb: 4.25, children: /* @__PURE__ */ v(
                    ad,
                    {
                      ...R,
                      isVoter: !!n && r,
                      onClick: () => {
                        x(), f.push(
                          `${r ? "/dashboard" : ""}${qt.governanceActionsAction.replace(
                            ":proposalId",
                            pt(R.txHash, R.index)
                          )}`
                        );
                      }
                    }
                  ) }, R.txHash + R.index)),
                  g && d && /* @__PURE__ */ v(
                    Q,
                    {
                      py: 4,
                      display: "flex",
                      justifyContent: "center",
                      ref: w,
                      children: /* @__PURE__ */ v(Gn, {})
                    }
                  )
                ]
              }
            ) : /* @__PURE__ */ v(
              Kv,
              {
                category: i,
                isSearch: !!a.length
              }
            )
          ] })
        }
      )
    }
  );
};
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Rr() {
  return Rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Rr.apply(this, arguments);
}
var nn;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(nn || (nn = {}));
const wc = "popstate";
function FE(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: a,
      search: o,
      hash: s
    } = r.location;
    return Ho(
      "",
      {
        pathname: a,
        search: o,
        hash: s
      },
      // state defaults to `null` because `window.history.state` does
      i.state && i.state.usr || null,
      i.state && i.state.key || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ir(i);
  }
  return RE(t, n, null, e);
}
function xe(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function jt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function DE() {
  return Math.random().toString(36).substr(2, 8);
}
function xc(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Ho(e, t, n, r) {
  return n === void 0 && (n = null), Rr({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? rr(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || DE()
  });
}
function Ir(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function rr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function RE(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: i = document.defaultView,
    v5Compat: a = !1
  } = r, o = i.history, s = nn.Pop, l = null, u = c();
  u == null && (u = 0, o.replaceState(Rr({}, o.state, {
    idx: u
  }), ""));
  function c() {
    return (o.state || {
      idx: null
    }).idx;
  }
  function f() {
    s = nn.Pop;
    let y = c(), g = y == null ? null : y - u;
    u = y, l && l({
      action: s,
      location: m.location,
      delta: g
    });
  }
  function h(y, g) {
    s = nn.Push;
    let w = Ho(m.location, y, g);
    u = c() + 1;
    let x = xc(w, u), N = m.createHref(w);
    try {
      o.pushState(x, "", N);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError")
        throw R;
      i.location.assign(N);
    }
    a && l && l({
      action: s,
      location: m.location,
      delta: 1
    });
  }
  function d(y, g) {
    s = nn.Replace;
    let w = Ho(m.location, y, g);
    u = c();
    let x = xc(w, u), N = m.createHref(w);
    o.replaceState(x, "", N), a && l && l({
      action: s,
      location: m.location,
      delta: 0
    });
  }
  function p(y) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href, w = typeof y == "string" ? y : Ir(y);
    return w = w.replace(/ $/, "%20"), xe(g, "No window.location.(origin|href) available to create URL for href: " + w), new URL(w, g);
  }
  let m = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(y) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return i.addEventListener(wc, f), l = y, () => {
        i.removeEventListener(wc, f), l = null;
      };
    },
    createHref(y) {
      return t(i, y);
    },
    createURL: p,
    encodeLocation(y) {
      let g = p(y);
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      };
    },
    push: h,
    replace: d,
    go(y) {
      return o.go(y);
    }
  };
  return m;
}
var Sc;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Sc || (Sc = {}));
function IE(e, t, n) {
  return n === void 0 && (n = "/"), NE(e, t, n);
}
function NE(e, t, n, r) {
  let i = typeof t == "string" ? rr(t) : t, a = ln(i.pathname || "/", n);
  if (a == null)
    return null;
  let o = bh(e);
  ME(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = GE(a);
    s = qE(o[l], u);
  }
  return s;
}
function bh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (a, o, s) => {
    let l = {
      relativePath: s === void 0 ? a.path || "" : s,
      caseSensitive: a.caseSensitive === !0,
      childrenIndex: o,
      route: a
    };
    l.relativePath.startsWith("/") && (xe(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length));
    let u = Ht([r, l.relativePath]), c = n.concat(l);
    a.children && a.children.length > 0 && (xe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      a.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
    ), bh(a.children, t, c, u)), !(a.path == null && !a.index) && t.push({
      path: u,
      score: VE(u, a.index),
      routesMeta: c
    });
  };
  return e.forEach((a, o) => {
    var s;
    if (a.path === "" || !((s = a.path) != null && s.includes("?")))
      i(a, o);
    else
      for (let l of wh(a.path))
        i(a, o, l);
  }), t;
}
function wh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
  if (r.length === 0)
    return i ? [a, ""] : [a];
  let o = wh(r.join("/")), s = [];
  return s.push(...o.map((l) => l === "" ? a : [a, l].join("/"))), i && s.push(...o), s.map((l) => e.startsWith("/") && l === "" ? "/" : l);
}
function ME(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : WE(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const LE = /^:[\w-]+$/, $E = 3, BE = 2, jE = 1, zE = 10, UE = -2, Cc = (e) => e === "*";
function VE(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(Cc) && (r += UE), t && (r += BE), n.filter((i) => !Cc(i)).reduce((i, a) => i + (LE.test(a) ? $E : a === "" ? jE : zE), r);
}
function WE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function qE(e, t, n) {
  let {
    routesMeta: r
  } = e, i = {}, a = "/", o = [];
  for (let s = 0; s < r.length; ++s) {
    let l = r[s], u = s === r.length - 1, c = a === "/" ? t : t.slice(a.length) || "/", f = Go({
      path: l.relativePath,
      caseSensitive: l.caseSensitive,
      end: u
    }, c), h = l.route;
    if (!f)
      return null;
    Object.assign(i, f.params), o.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: Ht([a, f.pathname]),
      pathnameBase: JE(Ht([a, f.pathnameBase])),
      route: h
    }), f.pathnameBase !== "/" && (a = Ht([a, f.pathnameBase]));
  }
  return o;
}
function Go(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = HE(e.path, e.caseSensitive, e.end), i = t.match(n);
  if (!i) return null;
  let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let {
        paramName: h,
        isOptional: d
      } = c;
      if (h === "*") {
        let m = s[f] || "";
        o = a.slice(0, a.length - m.length).replace(/(.)\/+$/, "$1");
      }
      const p = s[f];
      return d && !p ? u[h] = void 0 : u[h] = (p || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e
  };
}
function HE(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), jt(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, s, l) => (r.push({
    paramName: s,
    isOptional: l != null
  }), l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function GE(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return jt(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ln(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function QE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = ""
  } = typeof e == "string" ? rr(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : YE(n, t) : t,
    search: XE(r),
    hash: ZE(i)
  };
}
function YE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function uo(e, t, n, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function KE(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function xh(e, t) {
  let n = KE(e);
  return t ? n.map((r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map((r) => r.pathnameBase);
}
function Sh(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string" ? i = rr(e) : (i = Rr({}, e), xe(!i.pathname || !i.pathname.includes("?"), uo("?", "pathname", "search", i)), xe(!i.pathname || !i.pathname.includes("#"), uo("#", "pathname", "hash", i)), xe(!i.search || !i.search.includes("#"), uo("#", "search", "hash", i)));
  let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
  if (o == null)
    s = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; )
        h.shift(), f -= 1;
      i.pathname = h.join("/");
    }
    s = f >= 0 ? t[f] : "/";
  }
  let l = QE(i, s), u = o && o !== "/" && o.endsWith("/"), c = (a || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Ht = (e) => e.join("/").replace(/\/\/+/g, "/"), JE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), XE = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, ZE = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function ek(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Ch = ["post", "put", "patch", "delete"];
new Set(Ch);
const tk = ["get", ...Ch];
new Set(tk);
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
const Hr = /* @__PURE__ */ Z.createContext(null);
process.env.NODE_ENV !== "production" && (Hr.displayName = "DataRouter");
const Vs = /* @__PURE__ */ Z.createContext(null);
process.env.NODE_ENV !== "production" && (Vs.displayName = "DataRouterState");
const nk = /* @__PURE__ */ Z.createContext(null);
process.env.NODE_ENV !== "production" && (nk.displayName = "Await");
const Tt = /* @__PURE__ */ Z.createContext(null);
process.env.NODE_ENV !== "production" && (Tt.displayName = "Navigation");
const Gr = /* @__PURE__ */ Z.createContext(null);
process.env.NODE_ENV !== "production" && (Gr.displayName = "Location");
const Kt = /* @__PURE__ */ Z.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Kt.displayName = "Route");
const Ws = /* @__PURE__ */ Z.createContext(null);
process.env.NODE_ENV !== "production" && (Ws.displayName = "RouteError");
function rk(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t;
  Qr() || (process.env.NODE_ENV !== "production" ? xe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : xe(!1));
  let {
    basename: r,
    navigator: i
  } = Z.useContext(Tt), {
    hash: a,
    pathname: o,
    search: s
  } = Yr(e, {
    relative: n
  }), l = o;
  return r !== "/" && (l = o === "/" ? r : Ht([r, o])), i.createHref({
    pathname: l,
    search: s,
    hash: a
  });
}
function Qr() {
  return Z.useContext(Gr) != null;
}
function ir() {
  return Qr() || (process.env.NODE_ENV !== "production" ? xe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : xe(!1)), Z.useContext(Gr).location;
}
const Eh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function kh(e) {
  Z.useContext(Tt).static || Z.useLayoutEffect(e);
}
function ik() {
  let {
    isDataRoute: e
  } = Z.useContext(Kt);
  return e ? vk() : ak();
}
function ak() {
  Qr() || (process.env.NODE_ENV !== "production" ? xe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : xe(!1));
  let e = Z.useContext(Hr), {
    basename: t,
    future: n,
    navigator: r
  } = Z.useContext(Tt), {
    matches: i
  } = Z.useContext(Kt), {
    pathname: a
  } = ir(), o = JSON.stringify(xh(i, n.v7_relativeSplatPath)), s = Z.useRef(!1);
  return kh(() => {
    s.current = !0;
  }), Z.useCallback(function(u, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && jt(s.current, Eh), !s.current) return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let f = Sh(u, JSON.parse(o), a, c.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Ht([t, f.pathname])), (c.replace ? r.replace : r.push)(f, c.state, c);
  }, [t, r, o, a, e]);
}
function Yr(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    future: r
  } = Z.useContext(Tt), {
    matches: i
  } = Z.useContext(Kt), {
    pathname: a
  } = ir(), o = JSON.stringify(xh(i, r.v7_relativeSplatPath));
  return Z.useMemo(() => Sh(e, JSON.parse(o), a, n === "path"), [e, o, a, n]);
}
function ok(e, t) {
  return sk(e, t);
}
function sk(e, t, n, r) {
  Qr() || (process.env.NODE_ENV !== "production" ? xe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : xe(!1));
  let {
    navigator: i,
    static: a
  } = Z.useContext(Tt), {
    matches: o
  } = Z.useContext(Kt), s = o[o.length - 1], l = s ? s.params : {}, u = s ? s.pathname : "/", c = s ? s.pathnameBase : "/", f = s && s.route;
  if (process.env.NODE_ENV !== "production") {
    let x = f && f.path || "";
    _h(u, !f || x.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + u + '" (under <Route path="' + x + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + x + '"> to <Route ') + ('path="' + (x === "/" ? "*" : x + "/*") + '">.'));
  }
  let h = ir(), d;
  if (t) {
    var p;
    let x = typeof t == "string" ? rr(t) : t;
    c === "/" || (p = x.pathname) != null && p.startsWith(c) || (process.env.NODE_ENV !== "production" ? xe(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + c + '" ') + ('but pathname "' + x.pathname + '" was given in the `location` prop.')) : xe(!1)), d = x;
  } else
    d = h;
  let m = d.pathname || "/", y = m;
  if (c !== "/") {
    let x = c.replace(/^\//, "").split("/");
    y = "/" + m.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let g = IE(e, {
    pathname: y
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && jt(f || g != null, 'No routes matched location "' + d.pathname + d.search + d.hash + '" '), process.env.NODE_ENV !== "production" && jt(g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0 || g[g.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + d.pathname + d.search + d.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let w = dk(g && g.map((x) => Object.assign({}, x, {
    params: Object.assign({}, l, x.params),
    pathname: Ht([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(x.pathname).pathname : x.pathname
    ]),
    pathnameBase: x.pathnameBase === "/" ? c : Ht([
      c,
      // Re-encode pathnames that were decoded inside matchRoutes
      i.encodeLocation ? i.encodeLocation(x.pathnameBase).pathname : x.pathnameBase
    ])
  })), o, n, r);
  return t && w ? /* @__PURE__ */ Z.createElement(Gr.Provider, {
    value: {
      location: Nr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, d),
      navigationType: nn.Pop
    }
  }, w) : w;
}
function lk() {
  let e = yk(), t = ek(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
    padding: "0.5rem",
    backgroundColor: r
  }, a = {
    padding: "2px 4px",
    backgroundColor: r
  }, o = null;
  return process.env.NODE_ENV !== "production" && (console.error("Error handled by React Router default ErrorBoundary:", e), o = /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ Z.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ Z.createElement("code", {
    style: a
  }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ Z.createElement("code", {
    style: a
  }, "errorElement"), " prop on your route."))), /* @__PURE__ */ Z.createElement(Z.Fragment, null, /* @__PURE__ */ Z.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ Z.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ Z.createElement("pre", {
    style: i
  }, n) : null, o);
}
const uk = /* @__PURE__ */ Z.createElement(lk, null);
class ck extends Z.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : n.error,
      location: n.location,
      revalidation: t.revalidation || n.revalidation
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ Z.createElement(Kt.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ Z.createElement(Ws.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function fk(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, i = Z.useContext(Hr);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ Z.createElement(Kt.Provider, {
    value: t
  }, r);
}
function dk(e, t, n, r) {
  var i;
  if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
    var a;
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if ((a = r) != null && a.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let o = e, s = (i = n) == null ? void 0 : i.errors;
  if (s != null) {
    let c = o.findIndex((f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0);
    c >= 0 || (process.env.NODE_ENV !== "production" ? xe(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(s).join(",")) : xe(!1)), o = o.slice(0, Math.min(o.length, c + 1));
  }
  let l = !1, u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id) {
        let {
          loaderData: h,
          errors: d
        } = n, p = f.route.loader && h[f.route.id] === void 0 && (!d || d[f.route.id] === void 0);
        if (f.route.lazy || p) {
          l = !0, u >= 0 ? o = o.slice(0, u + 1) : o = [o[0]];
          break;
        }
      }
    }
  return o.reduceRight((c, f, h) => {
    let d, p = !1, m = null, y = null;
    n && (d = s && f.route.id ? s[f.route.id] : void 0, m = f.route.errorElement || uk, l && (u < 0 && h === 0 ? (_h("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), p = !0, y = null) : u === h && (p = !0, y = f.route.hydrateFallbackElement || null)));
    let g = t.concat(o.slice(0, h + 1)), w = () => {
      let x;
      return d ? x = m : p ? x = y : f.route.Component ? x = /* @__PURE__ */ Z.createElement(f.route.Component, null) : f.route.element ? x = f.route.element : x = c, /* @__PURE__ */ Z.createElement(fk, {
        match: f,
        routeContext: {
          outlet: c,
          matches: g,
          isDataRoute: n != null
        },
        children: x
      });
    };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? /* @__PURE__ */ Z.createElement(ck, {
      location: n.location,
      revalidation: n.revalidation,
      component: m,
      error: d,
      children: w(),
      routeContext: {
        outlet: null,
        matches: g,
        isDataRoute: !0
      }
    }) : w();
  }, null);
}
var Oh = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(Oh || {}), Mr = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Mr || {});
function qs(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function hk(e) {
  let t = Z.useContext(Hr);
  return t || (process.env.NODE_ENV !== "production" ? xe(!1, qs(e)) : xe(!1)), t;
}
function pk(e) {
  let t = Z.useContext(Vs);
  return t || (process.env.NODE_ENV !== "production" ? xe(!1, qs(e)) : xe(!1)), t;
}
function mk(e) {
  let t = Z.useContext(Kt);
  return t || (process.env.NODE_ENV !== "production" ? xe(!1, qs(e)) : xe(!1)), t;
}
function Hs(e) {
  let t = mk(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? xe(!1, e + ' can only be used on routes that contain a unique "id"') : xe(!1)), n.route.id;
}
function gk() {
  return Hs(Mr.UseRouteId);
}
function yk() {
  var e;
  let t = Z.useContext(Ws), n = pk(Mr.UseRouteError), r = Hs(Mr.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function vk() {
  let {
    router: e
  } = hk(Oh.UseNavigateStable), t = Hs(Mr.UseNavigateStable), n = Z.useRef(!1);
  return kh(() => {
    n.current = !0;
  }), Z.useCallback(function(i, a) {
    a === void 0 && (a = {}), process.env.NODE_ENV !== "production" && jt(n.current, Eh), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, Nr({
      fromRouteId: t
    }, a)));
  }, [e, t]);
}
const Ec = {};
function _h(e, t, n) {
  !t && !Ec[e] && (Ec[e] = !0, process.env.NODE_ENV !== "production" && jt(!1, n));
}
const kc = {};
function bk(e, t) {
  process.env.NODE_ENV !== "production" && !kc[t] && (kc[t] = !0, console.warn(t));
}
const Oc = (e, t, n) => bk(e, "⚠️ React Router Future Flag Warning: " + t + ". " + ("You can use the `" + e + "` future flag to opt-in early. ") + ("For more information, see " + n + "."));
function wk(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 && Oc("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 && Oc("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath");
}
function ki(e) {
  process.env.NODE_ENV !== "production" ? xe(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : xe(!1);
}
function xk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = nn.Pop,
    navigator: a,
    static: o = !1,
    future: s
  } = e;
  Qr() && (process.env.NODE_ENV !== "production" ? xe(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : xe(!1));
  let l = t.replace(/^\/*/, "/"), u = Z.useMemo(() => ({
    basename: l,
    navigator: a,
    static: o,
    future: Nr({
      v7_relativeSplatPath: !1
    }, s)
  }), [l, s, a, o]);
  typeof r == "string" && (r = rr(r));
  let {
    pathname: c = "/",
    search: f = "",
    hash: h = "",
    state: d = null,
    key: p = "default"
  } = r, m = Z.useMemo(() => {
    let y = ln(c, l);
    return y == null ? null : {
      location: {
        pathname: y,
        search: f,
        hash: h,
        state: d,
        key: p
      },
      navigationType: i
    };
  }, [l, c, f, h, d, p, i]);
  return process.env.NODE_ENV !== "production" && jt(m != null, '<Router basename="' + l + '"> is not able to match the URL ' + ('"' + c + f + h + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), m == null ? null : /* @__PURE__ */ Z.createElement(Tt.Provider, {
    value: u
  }, /* @__PURE__ */ Z.createElement(Gr.Provider, {
    children: n,
    value: m
  }));
}
function Sk(e) {
  let {
    children: t,
    location: n
  } = e;
  return ok(Qo(t), n);
}
new Promise(() => {
});
function Qo(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return Z.Children.forEach(e, (r, i) => {
    if (!/* @__PURE__ */ Z.isValidElement(r))
      return;
    let a = [...t, i];
    if (r.type === Z.Fragment) {
      n.push.apply(n, Qo(r.props.children, a));
      return;
    }
    r.type !== ki && (process.env.NODE_ENV !== "production" ? xe(!1, "[" + (typeof r.type == "string" ? r.type : r.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : xe(!1)), !r.props.index || !r.props.children || (process.env.NODE_ENV !== "production" ? xe(!1, "An index route cannot have child routes.") : xe(!1));
    let o = {
      id: r.props.id || a.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      Component: r.props.Component,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      ErrorBoundary: r.props.ErrorBoundary,
      hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle,
      lazy: r.props.lazy
    };
    r.props.children && (o.children = Qo(r.props.children, a)), n.push(o);
  }), n;
}
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Kn() {
  return Kn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Kn.apply(this, arguments);
}
function Gs(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
const Oi = "get", _i = "application/x-www-form-urlencoded";
function Oa(e) {
  return e != null && typeof e.tagName == "string";
}
function Ck(e) {
  return Oa(e) && e.tagName.toLowerCase() === "button";
}
function Ek(e) {
  return Oa(e) && e.tagName.toLowerCase() === "form";
}
function kk(e) {
  return Oa(e) && e.tagName.toLowerCase() === "input";
}
function Ok(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _k(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Ok(e);
}
let fi = null;
function Tk() {
  if (fi === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), fi = !1;
    } catch {
      fi = !0;
    }
  return fi;
}
const Ak = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function co(e) {
  return e != null && !Ak.has(e) ? (process.env.NODE_ENV !== "production" && jt(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + _i + '"')), null) : e;
}
function Pk(e, t) {
  let n, r, i, a, o;
  if (Ek(e)) {
    let s = e.getAttribute("action");
    r = s ? ln(s, t) : null, n = e.getAttribute("method") || Oi, i = co(e.getAttribute("enctype")) || _i, a = new FormData(e);
  } else if (Ck(e) || kk(e) && (e.type === "submit" || e.type === "image")) {
    let s = e.form;
    if (s == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let l = e.getAttribute("formaction") || s.getAttribute("action");
    if (r = l ? ln(l, t) : null, n = e.getAttribute("formmethod") || s.getAttribute("method") || Oi, i = co(e.getAttribute("formenctype")) || co(s.getAttribute("enctype")) || _i, a = new FormData(s, e), !Tk()) {
      let {
        name: u,
        type: c,
        value: f
      } = e;
      if (c === "image") {
        let h = u ? u + "." : "";
        a.append(h + "x", "0"), a.append(h + "y", "0");
      } else u && a.append(u, f);
    }
  } else {
    if (Oa(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    n = Oi, r = null, i = _i, o = e;
  }
  return a && i === "text/plain" && (o = a, a = void 0), {
    action: r,
    method: n.toLowerCase(),
    encType: i,
    formData: a,
    body: o
  };
}
const Fk = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], Dk = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], Rk = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], Ik = "6";
try {
  window.__reactRouterVersion = Ik;
} catch {
}
const Th = /* @__PURE__ */ Z.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (Th.displayName = "ViewTransition");
const Nk = /* @__PURE__ */ Z.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (Nk.displayName = "Fetchers");
const Mk = "startTransition", _c = Z[Mk];
function Lk(e) {
  let {
    basename: t,
    children: n,
    future: r,
    window: i
  } = e, a = Z.useRef();
  a.current == null && (a.current = FE({
    window: i,
    v5Compat: !0
  }));
  let o = a.current, [s, l] = Z.useState({
    action: o.action,
    location: o.location
  }), {
    v7_startTransition: u
  } = r || {}, c = Z.useCallback((f) => {
    u && _c ? _c(() => l(f)) : l(f);
  }, [l, u]);
  return Z.useLayoutEffect(() => o.listen(c), [o, c]), Z.useEffect(() => wk(r), [r]), /* @__PURE__ */ Z.createElement(xk, {
    basename: t,
    children: n,
    location: s.location,
    navigationType: s.action,
    navigator: o,
    future: r
  });
}
process.env.NODE_ENV;
const $k = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bk = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ah = /* @__PURE__ */ Z.forwardRef(function(t, n) {
  let {
    onClick: r,
    relative: i,
    reloadDocument: a,
    replace: o,
    state: s,
    target: l,
    to: u,
    preventScrollReset: c,
    viewTransition: f
  } = t, h = Gs(t, Fk), {
    basename: d
  } = Z.useContext(Tt), p, m = !1;
  if (typeof u == "string" && Bk.test(u) && (p = u, $k))
    try {
      let x = new URL(window.location.href), N = u.startsWith("//") ? new URL(x.protocol + u) : new URL(u), R = ln(N.pathname, d);
      N.origin === x.origin && R != null ? u = R + N.search + N.hash : m = !0;
    } catch {
      process.env.NODE_ENV !== "production" && jt(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let y = rk(u, {
    relative: i
  }), g = Vk(u, {
    replace: o,
    state: s,
    target: l,
    preventScrollReset: c,
    relative: i,
    viewTransition: f
  });
  function w(x) {
    r && r(x), x.defaultPrevented || g(x);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ Z.createElement("a", Kn({}, h, {
      href: p || y,
      onClick: m || a ? r : w,
      ref: n,
      target: l
    }))
  );
});
process.env.NODE_ENV !== "production" && (Ah.displayName = "Link");
const jk = /* @__PURE__ */ Z.forwardRef(function(t, n) {
  let {
    "aria-current": r = "page",
    caseSensitive: i = !1,
    className: a = "",
    end: o = !1,
    style: s,
    to: l,
    viewTransition: u,
    children: c
  } = t, f = Gs(t, Dk), h = Yr(l, {
    relative: f.relative
  }), d = ir(), p = Z.useContext(Vs), {
    navigator: m,
    basename: y
  } = Z.useContext(Tt), g = p != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Yk(h) && u === !0, w = m.encodeLocation ? m.encodeLocation(h).pathname : h.pathname, x = d.pathname, N = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
  i || (x = x.toLowerCase(), N = N ? N.toLowerCase() : null, w = w.toLowerCase()), N && y && (N = ln(N, y) || N);
  const R = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
  let A = x === w || !o && x.startsWith(w) && x.charAt(R) === "/", L = N != null && (N === w || !o && N.startsWith(w) && N.charAt(w.length) === "/"), C = {
    isActive: A,
    isPending: L,
    isTransitioning: g
  }, F = A ? r : void 0, P;
  typeof a == "function" ? P = a(C) : P = [a, A ? "active" : null, L ? "pending" : null, g ? "transitioning" : null].filter(Boolean).join(" ");
  let b = typeof s == "function" ? s(C) : s;
  return /* @__PURE__ */ Z.createElement(Ah, Kn({}, f, {
    "aria-current": F,
    className: P,
    ref: n,
    style: b,
    to: l,
    viewTransition: u
  }), typeof c == "function" ? c(C) : c);
});
process.env.NODE_ENV !== "production" && (jk.displayName = "NavLink");
const zk = /* @__PURE__ */ Z.forwardRef((e, t) => {
  let {
    fetcherKey: n,
    navigate: r,
    reloadDocument: i,
    replace: a,
    state: o,
    method: s = Oi,
    action: l,
    onSubmit: u,
    relative: c,
    preventScrollReset: f,
    viewTransition: h
  } = e, d = Gs(e, Rk), p = Gk(), m = Qk(l, {
    relative: c
  }), y = s.toLowerCase() === "get" ? "get" : "post", g = (w) => {
    if (u && u(w), w.defaultPrevented) return;
    w.preventDefault();
    let x = w.nativeEvent.submitter, N = (x == null ? void 0 : x.getAttribute("formmethod")) || s;
    p(x || w.currentTarget, {
      fetcherKey: n,
      method: N,
      navigate: r,
      replace: a,
      state: o,
      relative: c,
      preventScrollReset: f,
      viewTransition: h
    });
  };
  return /* @__PURE__ */ Z.createElement("form", Kn({
    ref: t,
    method: y,
    action: m,
    onSubmit: i ? u : g
  }, d));
});
process.env.NODE_ENV !== "production" && (zk.displayName = "Form");
process.env.NODE_ENV;
var Ki;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Ki || (Ki = {}));
var Tc;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Tc || (Tc = {}));
function Uk(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Ph(e) {
  let t = Z.useContext(Hr);
  return t || (process.env.NODE_ENV !== "production" ? xe(!1, Uk(e)) : xe(!1)), t;
}
function Vk(e, t) {
  let {
    target: n,
    replace: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s
  } = t === void 0 ? {} : t, l = ik(), u = ir(), c = Yr(e, {
    relative: o
  });
  return Z.useCallback((f) => {
    if (_k(f, n)) {
      f.preventDefault();
      let h = r !== void 0 ? r : Ir(u) === Ir(c);
      l(e, {
        replace: h,
        state: i,
        preventScrollReset: a,
        relative: o,
        viewTransition: s
      });
    }
  }, [u, l, c, r, i, n, e, a, o, s]);
}
function Wk() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let qk = 0, Hk = () => "__" + String(++qk) + "__";
function Gk() {
  let {
    router: e
  } = Ph(Ki.UseSubmit), {
    basename: t
  } = Z.useContext(Tt), n = gk();
  return Z.useCallback(function(r, i) {
    i === void 0 && (i = {}), Wk();
    let {
      action: a,
      method: o,
      encType: s,
      formData: l,
      body: u
    } = Pk(r, t);
    if (i.navigate === !1) {
      let c = i.fetcherKey || Hk();
      e.fetch(c, n, i.action || a, {
        preventScrollReset: i.preventScrollReset,
        formData: l,
        body: u,
        formMethod: i.method || o,
        formEncType: i.encType || s,
        flushSync: i.flushSync
      });
    } else
      e.navigate(i.action || a, {
        preventScrollReset: i.preventScrollReset,
        formData: l,
        body: u,
        formMethod: i.method || o,
        formEncType: i.encType || s,
        replace: i.replace,
        state: i.state,
        fromRouteId: n,
        flushSync: i.flushSync,
        viewTransition: i.viewTransition
      });
  }, [e, t, n]);
}
function Qk(e, t) {
  let {
    relative: n
  } = t === void 0 ? {} : t, {
    basename: r
  } = Z.useContext(Tt), i = Z.useContext(Kt);
  i || (process.env.NODE_ENV !== "production" ? xe(!1, "useFormAction must be used inside a RouteContext") : xe(!1));
  let [a] = i.matches.slice(-1), o = Kn({}, Yr(e || ".", {
    relative: n
  })), s = ir();
  if (e == null) {
    o.search = s.search;
    let l = new URLSearchParams(o.search), u = l.getAll("index");
    if (u.some((f) => f === "")) {
      l.delete("index"), u.filter((h) => h).forEach((h) => l.append("index", h));
      let f = l.toString();
      o.search = f ? "?" + f : "";
    }
  }
  return (!e || e === ".") && a.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : Ht([r, o.pathname])), Ir(o);
}
function Yk(e, t) {
  t === void 0 && (t = {});
  let n = Z.useContext(Th);
  n == null && (process.env.NODE_ENV !== "production" ? xe(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : xe(!1));
  let {
    basename: r
  } = Ph(Ki.useViewTransitionState), i = Yr(e, {
    relative: t.relative
  });
  if (!n.isTransitioning)
    return !1;
  let a = ln(n.currentLocation.pathname, r) || n.currentLocation.pathname, o = ln(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return Go(i.pathname, o) != null || Go(i.pathname, a) != null;
}
const PO = ({
  walletApi: e,
  apiUrl: t,
  validationApiUrl: n,
  routePath: r,
  ...i
}) => /* @__PURE__ */ v(
  kE,
  {
    ...i,
    walletApi: e,
    apiUrl: t,
    validationApiUrl: n,
    children: /* @__PURE__ */ v(Qc, { client: new Wc(), children: /* @__PURE__ */ v(Mc, { theme: vt, children: /* @__PURE__ */ v(td, { children: /* @__PURE__ */ v(Lk, { basename: r, children: /* @__PURE__ */ G(Sk, { children: [
      /* @__PURE__ */ v(
        ki,
        {
          path: qt.governanceActions,
          element: /* @__PURE__ */ v(TE, {})
        }
      ),
      /* @__PURE__ */ v(
        ki,
        {
          path: qt.governanceActionsAction,
          element: /* @__PURE__ */ v(AE, {})
        }
      ),
      /* @__PURE__ */ v(
        ki,
        {
          path: qt.governanceActionsCategory,
          element: /* @__PURE__ */ v(PE, {})
        }
      )
    ] }) }) }) }) })
  }
);
export {
  td as DataActionsBarProvider,
  AE as GovernanceActionDetails,
  PE as GovernanceActionsCategory,
  TE as GovernanceActionsPage,
  kE as PillarProvider,
  AO as ThemeWrapper,
  PO as VotingPillar
};
//# sourceMappingURL=govtool-voting-pillar.es.js.map
