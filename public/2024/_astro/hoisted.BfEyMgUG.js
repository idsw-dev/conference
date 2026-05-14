const p = typeof window < "u" ? window : void 0,
  X = typeof globalThis < "u" ? globalThis : p,
  Ks = Array.prototype,
  es = Ks.forEach,
  ts = Ks.indexOf,
  ee = X?.navigator,
  m = X?.document,
  J = X?.location,
  Oi = X?.fetch,
  Ni =
    X != null && X.XMLHttpRequest && "withCredentials" in new X.XMLHttpRequest()
      ? X.XMLHttpRequest
      : void 0,
  is = X?.AbortController,
  H = ee?.userAgent,
  E = p ?? {},
  xe = { DEBUG: !1, LIB_VERSION: "1.180.1" },
  sr = Array.isArray,
  Zs = Object.prototype,
  en = Zs.hasOwnProperty,
  Xt = Zs.toString,
  q =
    sr ||
    function (s) {
      return Xt.call(s) === "[object Array]";
    },
  se = function (s) {
    return typeof s == "function";
  },
  D = function (s) {
    return s === Object(s) && !q(s);
  },
  ht = function (s) {
    if (D(s)) {
      for (const e in s) if (en.call(s, e)) return !1;
      return !0;
    }
    return !1;
  },
  S = function (s) {
    return s === void 0;
  },
  W = function (s) {
    return Xt.call(s) == "[object String]";
  },
  ss = function (s) {
    return W(s) && s.trim().length === 0;
  },
  Me = function (s) {
    return s === null;
  },
  M = function (s) {
    return S(s) || Me(s);
  },
  Z = function (s) {
    return Xt.call(s) == "[object Number]";
  },
  Re = function (s) {
    return Xt.call(s) === "[object Boolean]";
  },
  nr = (s) => s instanceof FormData,
  ns = "[PostHog.js]",
  g = {
    _log: function (s) {
      if (p && (xe.DEBUG || E.POSTHOG_DEBUG) && !S(p.console) && p.console) {
        const n =
          "__rrweb_original__" in p.console[s]
            ? p.console[s].__rrweb_original__
            : p.console[s];
        for (
          var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1;
          i < e;
          i++
        )
          t[i - 1] = arguments[i];
        n(ns, ...t);
      }
    },
    info: function () {
      for (var s = arguments.length, e = new Array(s), t = 0; t < s; t++)
        e[t] = arguments[t];
      g._log("log", ...e);
    },
    warn: function () {
      for (var s = arguments.length, e = new Array(s), t = 0; t < s; t++)
        e[t] = arguments[t];
      g._log("warn", ...e);
    },
    error: function () {
      for (var s = arguments.length, e = new Array(s), t = 0; t < s; t++)
        e[t] = arguments[t];
      g._log("error", ...e);
    },
    critical: function () {
      for (var s = arguments.length, e = new Array(s), t = 0; t < s; t++)
        e[t] = arguments[t];
      console.error(ns, ...e);
    },
    uninitializedWarning: (s) => {
      g.error(`You must initialize PostHog before calling ${s}`);
    },
  },
  rs = (s, e, t) => {
    if (s.config.disable_external_dependency_loading)
      return (
        g.warn(
          `${e} was requested but loading of external scripts is disabled.`,
        ),
        t("Loading of external scripts is disabled")
      );
    const i = () => {
      if (!m) return t("document not found");
      const n = m.createElement("script");
      ((n.type = "text/javascript"),
        (n.crossOrigin = "anonymous"),
        (n.src = e),
        (n.onload = (a) => t(void 0, a)),
        (n.onerror = (a) => t(a)));
      const r = m.querySelectorAll("body > script");
      var o;
      r.length > 0
        ? (o = r[0].parentNode) === null ||
          o === void 0 ||
          o.insertBefore(n, r[0])
        : m.body.appendChild(n);
    };
    m != null && m.body ? i() : m?.addEventListener("DOMContentLoaded", i);
  };
((E.__PosthogExtensions__ = E.__PosthogExtensions__ || {}),
  (E.__PosthogExtensions__.loadExternalDependency = (s, e, t) => {
    let i = `/static/${e}.js?v=${s.version}`;
    e === "toolbar" && (i = `${i}&t=${Math.floor(Date.now() / 3e5) * 3e5}`);
    const n = s.requestRouter.endpointFor("assets", i);
    rs(s, n, t);
  }),
  (E.__PosthogExtensions__.loadSiteApp = (s, e, t) => {
    const i = s.requestRouter.endpointFor("api", e);
    rs(s, i, t);
  }));
const At = {},
  Yt = function (s) {
    return s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
function Xe(s, e, t) {
  if (q(s)) {
    if (es && s.forEach === es) s.forEach(e, t);
    else if ("length" in s && s.length === +s.length) {
      for (let i = 0, n = s.length; i < n; i++)
        if (i in s && e.call(t, s[i], i) === At) return;
    }
  }
}
function R(s, e, t) {
  if (!M(s)) {
    if (q(s)) return Xe(s, e, t);
    if (nr(s)) {
      for (const i of s.entries()) if (e.call(t, i[1], i[0]) === At) return;
    } else
      for (const i in s) if (en.call(s, i) && e.call(t, s[i], i) === At) return;
  }
}
const Q = function (s) {
  for (
    var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), i = 1;
    i < e;
    i++
  )
    t[i - 1] = arguments[i];
  return (
    Xe(t, function (n) {
      for (const r in n) n[r] !== void 0 && (s[r] = n[r]);
    }),
    s
  );
};
function I(s, e) {
  return s.indexOf(e) !== -1;
}
function Tt(s) {
  const e = Object.keys(s);
  let t = e.length;
  const i = new Array(t);
  for (; t--; ) i[t] = [e[t], s[e[t]]];
  return i;
}
const os = function (s) {
    try {
      return s();
    } catch {
      return;
    }
  },
  rr = function (s) {
    return function () {
      try {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
          t[i] = arguments[i];
        return s.apply(this, t);
      } catch (n) {
        (g.critical(
          "Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A.",
        ),
          g.critical(n));
      }
    };
  },
  Lt = function (s) {
    const e = {};
    return (
      R(s, function (t, i) {
        W(t) && t.length > 0 && (e[i] = t);
      }),
      e
    );
  },
  di = function (s) {
    return s.replace(/^\$/, "");
  };
function or(s, e) {
  return (function (t, i) {
    const n = new Set();
    return (function r(o, a) {
      if (o !== Object(o)) return i ? i(o, a) : o;
      if (n.has(o)) return;
      let l;
      return (
        n.add(o),
        q(o)
          ? ((l = []),
            Xe(o, (c) => {
              l.push(r(c));
            }))
          : ((l = {}),
            R(o, (c, d) => {
              n.has(c) || (l[d] = r(c, d));
            })),
        l
      );
    })(t);
  })(s, (t) => (W(t) && !Me(e) ? t.slice(0, e) : t));
}
const ar = function (s) {
    let e,
      t,
      i,
      n = "",
      r = 0;
    for (
      e = t = 0,
        r = (s = (s + "")
          .replace(
            /\r\n/g,
            `
`,
          )
          .replace(
            /\r/g,
            `
`,
          )).length,
        i = 0;
      i < r;
      i++
    ) {
      const o = s.charCodeAt(i);
      let a = null;
      (o < 128
        ? t++
        : (a =
            o > 127 && o < 2048
              ? String.fromCharCode((o >> 6) | 192, (63 & o) | 128)
              : String.fromCharCode(
                  (o >> 12) | 224,
                  ((o >> 6) & 63) | 128,
                  (63 & o) | 128,
                )),
        Me(a) ||
          (t > e && (n += s.substring(e, t)), (n += a), (e = t = i + 1)));
    }
    return (t > e && (n += s.substring(e, s.length)), n);
  },
  ve = (function () {
    function s(e) {
      return (
        e &&
          ((e.preventDefault = s.preventDefault),
          (e.stopPropagation = s.stopPropagation)),
        e
      );
    }
    return (
      (s.preventDefault = function () {
        this.returnValue = !1;
      }),
      (s.stopPropagation = function () {
        this.cancelBubble = !0;
      }),
      function (e, t, i, n, r) {
        if (e)
          if (e.addEventListener && !n) e.addEventListener(t, i, !!r);
          else {
            const o = "on" + t,
              a = e[o];
            e[o] = (function (l, c, d) {
              return function (u) {
                if (!(u = u || s(p?.event))) return;
                let h,
                  _ = !0;
                se(d) && (h = d(u));
                const f = c.call(l, u);
                return ((h !== !1 && f !== !1) || (_ = !1), _);
              };
            })(e, i, a);
          }
        else g.error("No valid element provided to register_event");
      }
    );
  })();
function lr(s) {
  const e = s?.hostname;
  return !!W(e) && e.split(".").slice(-2).join(".") !== "herokuapp.com";
}
function tn(s, e) {
  for (let t = 0; t < s.length; t++) if (e(s[t])) return s[t];
}
let le;
(function (s) {
  ((s.GZipJS = "gzip-js"), (s.Base64 = "base64"));
})(le || (le = {}));
const sn = "$people_distinct_id",
  lt = "__alias",
  ct = "__timers",
  as = "$autocapture_disabled_server_side",
  hi = "$heatmaps_enabled_server_side",
  ls = "$exception_capture_enabled_server_side",
  cs = "$exception_capture_endpoint_suffix",
  us = "$web_vitals_enabled_server_side",
  ds = "$dead_clicks_enabled_server_side",
  hs = "$web_vitals_allowed_metrics",
  pi = "$session_recording_enabled_server_side",
  ps = "$console_log_recording_enabled_server_side",
  _s = "$session_recording_network_payload_capture",
  gs = "$session_recording_canvas_recording",
  fs = "$replay_sample_rate",
  vs = "$replay_minimum_duration",
  Dt = "$sesid",
  ut = "$session_is_sampled",
  wt = "$session_recording_url_trigger_activated_session",
  St = "$session_recording_url_trigger_status",
  Qe = "$enabled_feature_flags",
  _i = "$early_access_features",
  Je = "$stored_person_properties",
  ke = "$stored_group_properties",
  gi = "$surveys",
  Et = "$surveys_activated",
  Ot = "$flag_call_reported",
  ge = "$user_state",
  fi = "$client_session_props",
  vi = "$capture_rate_limit",
  mi = "$initial_campaign_params",
  yi = "$initial_referrer_info",
  ms = "$initial_person_info",
  Nt = "$epp",
  bi = "__POSTHOG_TOOLBAR__",
  cr = [
    sn,
    lt,
    "__cmpns",
    ct,
    pi,
    hi,
    Dt,
    Qe,
    ge,
    _i,
    ke,
    Je,
    gi,
    Ot,
    fi,
    vi,
    mi,
    yi,
    Nt,
  ],
  si = "$active_feature_flags",
  xt = "$override_feature_flags",
  ys = "$feature_flag_payloads",
  bs = (s) => {
    const e = {};
    for (const [t, i] of Tt(s || {})) i && (e[t] = i);
    return e;
  };
class ur {
  constructor(e) {
    ((this.instance = e),
      (this._override_warning = !1),
      (this.featureFlagEventHandlers = []),
      (this.reloadFeatureFlagsQueued = !1),
      (this.reloadFeatureFlagsInAction = !1));
  }
  getFlags() {
    return Object.keys(this.getFlagVariants());
  }
  getFlagVariants() {
    const e = this.instance.get_property(Qe),
      t = this.instance.get_property(xt);
    if (!t) return e || {};
    const i = Q({}, e),
      n = Object.keys(t);
    for (let r = 0; r < n.length; r++) i[n[r]] = t[n[r]];
    return (
      this._override_warning ||
        (g.warn(" Overriding feature flags!", {
          enabledFlags: e,
          overriddenFlags: t,
          finalFlags: i,
        }),
        (this._override_warning = !0)),
      i
    );
  }
  getFlagPayloads() {
    return this.instance.get_property(ys) || {};
  }
  reloadFeatureFlags() {
    this.reloadFeatureFlagsQueued ||
      ((this.reloadFeatureFlagsQueued = !0), this._startReloadTimer());
  }
  setAnonymousDistinctId(e) {
    this.$anon_distinct_id = e;
  }
  setReloadingPaused(e) {
    this.reloadFeatureFlagsInAction = e;
  }
  resetRequestQueue() {
    this.reloadFeatureFlagsQueued = !1;
  }
  _startReloadTimer() {
    this.reloadFeatureFlagsQueued &&
      !this.reloadFeatureFlagsInAction &&
      setTimeout(() => {
        !this.reloadFeatureFlagsInAction &&
          this.reloadFeatureFlagsQueued &&
          ((this.reloadFeatureFlagsQueued = !1),
          this._reloadFeatureFlagsRequest());
      }, 5);
  }
  _reloadFeatureFlagsRequest() {
    if (this.instance.config.advanced_disable_feature_flags) return;
    this.setReloadingPaused(!0);
    const e = this.instance.config.token,
      t = this.instance.get_property(Je),
      i = this.instance.get_property(ke),
      n = {
        token: e,
        distinct_id: this.instance.get_distinct_id(),
        groups: this.instance.getGroups(),
        $anon_distinct_id: this.$anon_distinct_id,
        person_properties: t,
        group_properties: i,
        disable_flags:
          this.instance.config.advanced_disable_feature_flags || void 0,
      };
    this.instance._send_request({
      method: "POST",
      url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
      data: n,
      compression: this.instance.config.disable_compression
        ? void 0
        : le.Base64,
      timeout: this.instance.config.feature_flag_request_timeout_ms,
      callback: (r) => {
        var o;
        this.setReloadingPaused(!1);
        let a = !0;
        (r.statusCode === 200 && ((this.$anon_distinct_id = void 0), (a = !1)),
          this.receivedFeatureFlags(
            (o = r.json) !== null && o !== void 0 ? o : {},
            a,
          ),
          this._startReloadTimer());
      },
    });
  }
  getFeatureFlag(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (
      !(
        this.instance.decideEndpointWasHit ||
        (this.getFlags() && this.getFlags().length > 0)
      )
    )
      return void g.warn(
        'getFeatureFlag for key "' +
          e +
          `" failed. Feature flags didn't load in time.`,
      );
    const i = this.getFlagVariants()[e],
      n = `${i}`,
      r = this.instance.get_property(Ot) || {};
    var o;
    return (
      (!t.send_event && "send_event" in t) ||
        (e in r && r[e].includes(n)) ||
        (q(r[e]) ? r[e].push(n) : (r[e] = [n]),
        (o = this.instance.persistence) === null ||
          o === void 0 ||
          o.register({ [Ot]: r }),
        this.instance.capture("$feature_flag_called", {
          $feature_flag: e,
          $feature_flag_response: i,
        })),
      i
    );
  }
  getFeatureFlagPayload(e) {
    return this.getFlagPayloads()[e];
  }
  isFeatureEnabled(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (
      this.instance.decideEndpointWasHit ||
      (this.getFlags() && this.getFlags().length > 0)
    )
      return !!this.getFeatureFlag(e, t);
    g.warn(
      'isFeatureEnabled for key "' +
        e +
        `" failed. Feature flags didn't load in time.`,
    );
  }
  addFeatureFlagsHandler(e) {
    this.featureFlagEventHandlers.push(e);
  }
  removeFeatureFlagsHandler(e) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(
      (t) => t !== e,
    );
  }
  receivedFeatureFlags(e, t) {
    if (!this.instance.persistence) return;
    this.instance.decideEndpointWasHit = !0;
    const i = this.getFlagVariants(),
      n = this.getFlagPayloads();
    ((function (r, o) {
      let a =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      const c = r.featureFlags,
        d = r.featureFlagPayloads;
      if (!c) return;
      if (q(c)) {
        const _ = {};
        if (c) for (let f = 0; f < c.length; f++) _[c[f]] = !0;
        return void (o && o.register({ [si]: c, [Qe]: _ }));
      }
      let u = c,
        h = d;
      (r.errorsWhileComputingFlags &&
        ((u = { ...a, ...u }), (h = { ...l, ...h })),
        o &&
          o.register({
            [si]: Object.keys(bs(u)),
            [Qe]: u || {},
            [ys]: h || {},
          }));
    })(e, this.instance.persistence, i, n),
      this._fireFeatureFlagsCallbacks(t));
  }
  override(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (!this.instance.__loaded || !this.instance.persistence)
      return g.uninitializedWarning("posthog.feature_flags.override");
    if (((this._override_warning = t), e === !1))
      this.instance.persistence.unregister(xt);
    else if (q(e)) {
      const i = {};
      for (let n = 0; n < e.length; n++) i[e[n]] = !0;
      this.instance.persistence.register({ [xt]: i });
    } else this.instance.persistence.register({ [xt]: e });
  }
  onFeatureFlags(e) {
    if ((this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit)) {
      const { flags: t, flagVariants: i } =
        this._prepareFeatureFlagsForCallbacks();
      e(t, i);
    }
    return () => this.removeFeatureFlagsHandler(e);
  }
  updateEarlyAccessFeatureEnrollment(e, t) {
    var i;
    const n = { [`$feature_enrollment/${e}`]: t };
    (this.instance.capture("$feature_enrollment_update", {
      $feature_flag: e,
      $feature_enrollment: t,
      $set: n,
    }),
      this.setPersonPropertiesForFlags(n, !1));
    const r = { ...this.getFlagVariants(), [e]: t };
    ((i = this.instance.persistence) === null ||
      i === void 0 ||
      i.register({ [si]: Object.keys(bs(r)), [Qe]: r }),
      this._fireFeatureFlagsCallbacks());
  }
  getEarlyAccessFeatures(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    const i = this.instance.get_property(_i);
    if (i && !t) return e(i);
    this.instance._send_request({
      transport: "XHR",
      url: this.instance.requestRouter.endpointFor(
        "api",
        `/api/early_access_features/?token=${this.instance.config.token}`,
      ),
      method: "GET",
      callback: (n) => {
        var r;
        if (!n.json) return;
        const o = n.json.earlyAccessFeatures;
        return (
          (r = this.instance.persistence) === null ||
            r === void 0 ||
            r.register({ [_i]: o }),
          e(o)
        );
      },
    });
  }
  _prepareFeatureFlagsForCallbacks() {
    const e = this.getFlags(),
      t = this.getFlagVariants();
    return {
      flags: e.filter((i) => t[i]),
      flagVariants: Object.keys(t)
        .filter((i) => t[i])
        .reduce((i, n) => ((i[n] = t[n]), i), {}),
    };
  }
  _fireFeatureFlagsCallbacks(e) {
    const { flags: t, flagVariants: i } =
      this._prepareFeatureFlagsForCallbacks();
    this.featureFlagEventHandlers.forEach((n) => n(t, i, { errorsLoading: e }));
  }
  setPersonPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    const i = this.instance.get_property(Je) || {};
    (this.instance.register({ [Je]: { ...i, ...e } }),
      t && this.instance.reloadFeatureFlags());
  }
  resetPersonPropertiesForFlags() {
    this.instance.unregister(Je);
  }
  setGroupPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    const i = this.instance.get_property(ke) || {};
    (Object.keys(i).length !== 0 &&
      Object.keys(i).forEach((n) => {
        ((i[n] = { ...i[n], ...e[n] }), delete e[n]);
      }),
      this.instance.register({ [ke]: { ...i, ...e } }),
      t && this.instance.reloadFeatureFlags());
  }
  resetGroupPropertiesForFlags(e) {
    if (e) {
      const t = this.instance.get_property(ke) || {};
      this.instance.register({ [ke]: { ...t, [e]: {} } });
    } else this.instance.unregister(ke);
  }
}
/**
 * uuidv7: An experimental implementation of the proposed UUID Version 7
 *
 * @license Apache-2.0
 * @copyright 2021-2023 LiosK
 * @packageDocumentation
 *
 * from https://github.com/LiosK/uuidv7/blob/e501462ea3d23241de13192ceae726956f9b3b7d/src/index.ts
 */ (Math.trunc ||
  (Math.trunc = function (s) {
    return s < 0 ? Math.ceil(s) : Math.floor(s);
  }),
  Number.isInteger ||
    (Number.isInteger = function (s) {
      return Z(s) && isFinite(s) && Math.floor(s) === s;
    }));
const ws = "0123456789abcdef";
class qt {
  constructor(e) {
    if (((this.bytes = e), e.length !== 16))
      throw new TypeError("not 128-bit length");
  }
  static fromFieldsV7(e, t, i, n) {
    if (
      !Number.isInteger(e) ||
      !Number.isInteger(t) ||
      !Number.isInteger(i) ||
      !Number.isInteger(n) ||
      e < 0 ||
      t < 0 ||
      i < 0 ||
      n < 0 ||
      e > 0xffffffffffff ||
      t > 4095 ||
      i > 1073741823 ||
      n > 4294967295
    )
      throw new RangeError("invalid field value");
    const r = new Uint8Array(16);
    return (
      (r[0] = e / 2 ** 40),
      (r[1] = e / 2 ** 32),
      (r[2] = e / 2 ** 24),
      (r[3] = e / 65536),
      (r[4] = e / 256),
      (r[5] = e),
      (r[6] = 112 | (t >>> 8)),
      (r[7] = t),
      (r[8] = 128 | (i >>> 24)),
      (r[9] = i >>> 16),
      (r[10] = i >>> 8),
      (r[11] = i),
      (r[12] = n >>> 24),
      (r[13] = n >>> 16),
      (r[14] = n >>> 8),
      (r[15] = n),
      new qt(r)
    );
  }
  toString() {
    let e = "";
    for (let t = 0; t < this.bytes.length; t++)
      ((e = e + ws.charAt(this.bytes[t] >>> 4) + ws.charAt(15 & this.bytes[t])),
        (t !== 3 && t !== 5 && t !== 7 && t !== 9) || (e += "-"));
    if (e.length !== 36) throw new Error("Invalid UUIDv7 was generated");
    return e;
  }
  clone() {
    return new qt(this.bytes.slice(0));
  }
  equals(e) {
    return this.compareTo(e) === 0;
  }
  compareTo(e) {
    for (let t = 0; t < 16; t++) {
      const i = this.bytes[t] - e.bytes[t];
      if (i !== 0) return Math.sign(i);
    }
    return 0;
  }
}
class dr {
  timestamp = 0;
  counter = 0;
  random = new hr();
  generate() {
    const e = this.generateOrAbort();
    if (S(e)) {
      this.timestamp = 0;
      const t = this.generateOrAbort();
      if (S(t))
        throw new Error("Could not generate UUID after timestamp reset");
      return t;
    }
    return e;
  }
  generateOrAbort() {
    const e = Date.now();
    if (e > this.timestamp) ((this.timestamp = e), this.resetCounter());
    else {
      if (!(e + 1e4 > this.timestamp)) return;
      (this.counter++,
        this.counter > 4398046511103 &&
          (this.timestamp++, this.resetCounter()));
    }
    return qt.fromFieldsV7(
      this.timestamp,
      Math.trunc(this.counter / 2 ** 30),
      this.counter & (2 ** 30 - 1),
      this.random.nextUint32(),
    );
  }
  resetCounter() {
    this.counter =
      1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  }
}
let Ss,
  nn = (s) => {
    if (typeof UUIDV7_DENY_WEAK_RNG < "u" && UUIDV7_DENY_WEAK_RNG)
      throw new Error("no cryptographically strong RNG available");
    for (let e = 0; e < s.length; e++)
      s[e] =
        65536 * Math.trunc(65536 * Math.random()) +
        Math.trunc(65536 * Math.random());
    return s;
  };
p &&
  !S(p.crypto) &&
  crypto.getRandomValues &&
  (nn = (s) => crypto.getRandomValues(s));
class hr {
  buffer = new Uint32Array(8);
  cursor = 1 / 0;
  nextUint32() {
    return (
      this.cursor >= this.buffer.length && (nn(this.buffer), (this.cursor = 0)),
      this.buffer[this.cursor++]
    );
  }
}
const Fe = () => pr().toString(),
  pr = () => (Ss || (Ss = new dr())).generate(),
  _r = "Thu, 01 Jan 1970 00:00:00 GMT";
let nt = "";
const gr = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
function fr(s, e) {
  if (e) {
    let t = (function (i) {
      let n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : m;
      if (nt) return nt;
      if (!n || ["localhost", "127.0.0.1"].includes(i)) return "";
      const r = i.split(".");
      let o = Math.min(r.length, 8);
      const a = "dmn_chk_" + Fe(),
        l = new RegExp("(^|;)\\s*" + a + "=1");
      for (; !nt && o--; ) {
        const c = r.slice(o).join("."),
          d = a + "=1;domain=." + c;
        ((n.cookie = d),
          l.test(n.cookie) && ((n.cookie = d + ";expires=" + _r), (nt = c)));
      }
      return nt;
    })(s);
    if (!t) {
      const i = ((n) => {
        const r = n.match(gr);
        return r ? r[0] : "";
      })(s);
      (i !== t && g.info("Warning: cookie subdomain discovery mismatch", i, t),
        (t = i));
    }
    return t ? "; domain=." + t : "";
  }
  return "";
}
const ye = {
  is_supported: () => !!m,
  error: function (s) {
    g.error("cookieStore error: " + s);
  },
  get: function (s) {
    if (m) {
      try {
        const e = s + "=",
          t = m.cookie.split(";").filter((i) => i.length);
        for (let i = 0; i < t.length; i++) {
          let n = t[i];
          for (; n.charAt(0) == " "; ) n = n.substring(1, n.length);
          if (n.indexOf(e) === 0)
            return decodeURIComponent(n.substring(e.length, n.length));
        }
      } catch {}
      return null;
    }
  },
  parse: function (s) {
    let e;
    try {
      e = JSON.parse(ye.get(s)) || {};
    } catch {}
    return e;
  },
  set: function (s, e, t, i, n) {
    if (m)
      try {
        let r = "",
          o = "";
        const a = fr(m.location.hostname, i);
        if (t) {
          const c = new Date();
          (c.setTime(c.getTime() + 24 * t * 60 * 60 * 1e3),
            (r = "; expires=" + c.toUTCString()));
        }
        n && (o = "; secure");
        const l =
          s +
          "=" +
          encodeURIComponent(JSON.stringify(e)) +
          r +
          "; SameSite=Lax; path=/" +
          a +
          o;
        return (
          l.length > 3686.4 &&
            g.warn("cookieStore warning: large cookie, len=" + l.length),
          (m.cookie = l),
          l
        );
      } catch {
        return;
      }
  },
  remove: function (s, e) {
    try {
      ye.set(s, "", -1, e);
    } catch {
      return;
    }
  },
};
let ni = null;
const N = {
    is_supported: function () {
      if (!Me(ni)) return ni;
      let s = !0;
      if (S(p)) s = !1;
      else
        try {
          const e = "__mplssupport__";
          (N.set(e, "xyz"), N.get(e) !== '"xyz"' && (s = !1), N.remove(e));
        } catch {
          s = !1;
        }
      return (
        s || g.error("localStorage unsupported; falling back to cookie store"),
        (ni = s),
        s
      );
    },
    error: function (s) {
      g.error("localStorage error: " + s);
    },
    get: function (s) {
      try {
        return p?.localStorage.getItem(s);
      } catch (e) {
        N.error(e);
      }
      return null;
    },
    parse: function (s) {
      try {
        return JSON.parse(N.get(s)) || {};
      } catch {}
      return null;
    },
    set: function (s, e) {
      try {
        p?.localStorage.setItem(s, JSON.stringify(e));
      } catch (t) {
        N.error(t);
      }
    },
    remove: function (s) {
      try {
        p?.localStorage.removeItem(s);
      } catch (e) {
        N.error(e);
      }
    },
  },
  vr = ["distinct_id", Dt, ut, Nt],
  kt = {
    ...N,
    parse: function (s) {
      try {
        let e = {};
        try {
          e = ye.parse(s) || {};
        } catch {}
        const t = Q(e, JSON.parse(N.get(s) || "{}"));
        return (N.set(s, t), t);
      } catch {}
      return null;
    },
    set: function (s, e, t, i, n, r) {
      try {
        N.set(s, e, void 0, void 0, r);
        const o = {};
        (vr.forEach((a) => {
          e[a] && (o[a] = e[a]);
        }),
          Object.keys(o).length && ye.set(s, o, t, i, n, r));
      } catch (o) {
        N.error(o);
      }
    },
    remove: function (s, e) {
      try {
        (p?.localStorage.removeItem(s), ye.remove(s, e));
      } catch (t) {
        N.error(t);
      }
    },
  },
  It = {},
  mr = {
    is_supported: function () {
      return !0;
    },
    error: function (s) {
      g.error("memoryStorage error: " + s);
    },
    get: function (s) {
      return It[s] || null;
    },
    parse: function (s) {
      return It[s] || null;
    },
    set: function (s, e) {
      It[s] = e;
    },
    remove: function (s) {
      delete It[s];
    },
  };
let De = null;
const U = {
    is_supported: function () {
      if (!Me(De)) return De;
      if (((De = !0), S(p))) De = !1;
      else
        try {
          const s = "__support__";
          (U.set(s, "xyz"), U.get(s) !== '"xyz"' && (De = !1), U.remove(s));
        } catch {
          De = !1;
        }
      return De;
    },
    error: function (s) {
      g.error("sessionStorage error: ", s);
    },
    get: function (s) {
      try {
        return p?.sessionStorage.getItem(s);
      } catch (e) {
        U.error(e);
      }
      return null;
    },
    parse: function (s) {
      try {
        return JSON.parse(U.get(s)) || null;
      } catch {}
      return null;
    },
    set: function (s, e) {
      try {
        p?.sessionStorage.setItem(s, JSON.stringify(e));
      } catch (t) {
        U.error(t);
      }
    },
    remove: function (s) {
      try {
        p?.sessionStorage.removeItem(s);
      } catch (e) {
        U.error(e);
      }
    },
  },
  yr = ["localhost", "127.0.0.1"],
  pt = (s) => {
    const e = m?.createElement("a");
    return S(e) ? null : ((e.href = s), e);
  },
  Ze = function (s, e) {
    return (
      !!(function (t) {
        try {
          new RegExp(t);
        } catch {
          return !1;
        }
        return !0;
      })(e) && new RegExp(e).test(s)
    );
  },
  br = function (s) {
    let e,
      t,
      i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "&";
    const n = [];
    return (
      R(s, function (r, o) {
        S(r) ||
          S(o) ||
          o === "undefined" ||
          ((e = encodeURIComponent(
            ((a) => a instanceof File)(r) ? r.name : r.toString(),
          )),
          (t = encodeURIComponent(o)),
          (n[n.length] = t + "=" + e));
      }),
      n.join(i)
    );
  },
  Bt = function (s, e) {
    const t = ((s.split("#")[0] || "").split("?")[1] || "").split("&");
    let i;
    for (let n = 0; n < t.length; n++) {
      const r = t[n].split("=");
      if (r[0] === e) {
        i = r;
        break;
      }
    }
    if (!q(i) || i.length < 2) return "";
    {
      let n = i[1];
      try {
        n = decodeURIComponent(n);
      } catch {
        g.error("Skipping decoding for malformed query param: " + n);
      }
      return n.replace(/\+/g, " ");
    }
  },
  Ht = function (s, e) {
    const t = s.match(new RegExp(e + "=([^&]*)"));
    return t ? t[1] : null;
  },
  ne = "Mobile",
  Ut = "iOS",
  he = "Android",
  vt = "Tablet",
  rn = he + " " + vt,
  on = "iPad",
  an = "Apple",
  ln = an + " Watch",
  mt = "Safari",
  et = "BlackBerry",
  cn = "Samsung",
  un = cn + "Browser",
  dn = cn + " Internet",
  $e = "Chrome",
  wr = $e + " OS",
  hn = $e + " " + Ut,
  qi = "Internet Explorer",
  pn = qi + " " + ne,
  Bi = "Opera",
  Sr = Bi + " Mini",
  Hi = "Edge",
  _n = "Microsoft " + Hi,
  Ye = "Firefox",
  gn = Ye + " " + Ut,
  yt = "Nintendo",
  bt = "PlayStation",
  Ke = "Xbox",
  fn = he + " " + ne,
  vn = ne + " " + mt,
  dt = "Windows",
  wi = dt + " Phone",
  Es = "Nokia",
  Si = "Ouya",
  mn = "Generic",
  Er = mn + " " + ne.toLowerCase(),
  yn = mn + " " + vt.toLowerCase(),
  Ei = "Konqueror",
  j = "(\\d+(\\.\\d+)?)",
  ri = new RegExp("Version/" + j),
  xr = new RegExp(Ke, "i"),
  kr = new RegExp(bt + " \\w+", "i"),
  Ir = new RegExp(yt + " \\w+", "i"),
  Ui = new RegExp(et + "|PlayBook|BB10", "i"),
  Pr = {
    "NT3.51": "NT 3.11",
    "NT4.0": "NT 4.0",
    "5.0": "2000",
    5.1: "XP",
    5.2: "XP",
    "6.0": "Vista",
    6.1: "7",
    6.2: "8",
    6.3: "8.1",
    6.4: "10",
    "10.0": "10",
  },
  Rr = (s, e) =>
    (e && I(e, an)) ||
    (function (t) {
      return I(t, mt) && !I(t, $e) && !I(t, he);
    })(s),
  xs = function (s, e) {
    return (
      (e = e || ""),
      I(s, " OPR/") && I(s, "Mini")
        ? Sr
        : I(s, " OPR/")
          ? Bi
          : Ui.test(s)
            ? et
            : I(s, "IE" + ne) || I(s, "WPDesktop")
              ? pn
              : I(s, un)
                ? dn
                : I(s, Hi) || I(s, "Edg/")
                  ? _n
                  : I(s, "FBIOS")
                    ? "Facebook " + ne
                    : I(s, "UCWEB") || I(s, "UCBrowser")
                      ? "UC Browser"
                      : I(s, "CriOS")
                        ? hn
                        : I(s, "CrMo")
                          ? $e
                          : I(s, he) && I(s, mt)
                            ? fn
                            : I(s, $e)
                              ? $e
                              : I(s, "FxiOS")
                                ? gn
                                : I(s.toLowerCase(), Ei.toLowerCase())
                                  ? Ei
                                  : Rr(s, e)
                                    ? I(s, ne)
                                      ? vn
                                      : mt
                                    : I(s, Ye)
                                      ? Ye
                                      : I(s, "MSIE") || I(s, "Trident/")
                                        ? qi
                                        : I(s, "Gecko")
                                          ? Ye
                                          : ""
    );
  },
  Fr = {
    [pn]: [new RegExp("rv:" + j)],
    [_n]: [new RegExp(Hi + "?\\/" + j)],
    [$e]: [new RegExp("(" + $e + "|CrMo)\\/" + j)],
    [hn]: [new RegExp("CriOS\\/" + j)],
    "UC Browser": [new RegExp("(UCBrowser|UCWEB)\\/" + j)],
    [mt]: [ri],
    [vn]: [ri],
    [Bi]: [new RegExp("(Opera|OPR)\\/" + j)],
    [Ye]: [new RegExp(Ye + "\\/" + j)],
    [gn]: [new RegExp("FxiOS\\/" + j)],
    [Ei]: [new RegExp("Konqueror[:/]?" + j, "i")],
    [et]: [new RegExp(et + " " + j), ri],
    [fn]: [new RegExp("android\\s" + j, "i")],
    [dn]: [new RegExp(un + "\\/" + j)],
    [qi]: [new RegExp("(rv:|MSIE )" + j)],
    Mozilla: [new RegExp("rv:" + j)],
  },
  ks = [
    [
      new RegExp(Ke + "; " + Ke + " (.*?)[);]", "i"),
      (s) => [Ke, (s && s[1]) || ""],
    ],
    [new RegExp(yt, "i"), [yt, ""]],
    [new RegExp(bt, "i"), [bt, ""]],
    [Ui, [et, ""]],
    [
      new RegExp(dt, "i"),
      (s, e) => {
        if (/Phone/.test(e) || /WPDesktop/.test(e)) return [wi, ""];
        if (new RegExp(ne).test(e) && !/IEMobile\b/.test(e))
          return [dt + " " + ne, ""];
        const t = /Windows NT ([0-9.]+)/i.exec(e);
        if (t && t[1]) {
          const i = t[1];
          let n = Pr[i] || "";
          return (/arm/i.test(e) && (n = "RT"), [dt, n]);
        }
        return [dt, ""];
      },
    ],
    [
      /((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/,
      (s) => {
        if (s && s[3]) {
          const e = [s[3], s[4], s[5] || "0"];
          return [Ut, e.join(".")];
        }
        return [Ut, ""];
      },
    ],
    [
      /(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i,
      (s) => {
        let e = "";
        return (
          s && s.length >= 3 && (e = S(s[2]) ? s[3] : s[2]),
          ["watchOS", e]
        );
      },
    ],
    [
      new RegExp("(" + he + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + he + ")", "i"),
      (s) => {
        if (s && s[2]) {
          const e = [s[2], s[3], s[4] || "0"];
          return [he, e.join(".")];
        }
        return [he, ""];
      },
    ],
    [
      /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i,
      (s) => {
        const e = ["Mac OS X", ""];
        if (s && s[1]) {
          const t = [s[1], s[2], s[3] || "0"];
          e[1] = t.join(".");
        }
        return e;
      },
    ],
    [/Mac/i, ["Mac OS X", ""]],
    [/CrOS/, [wr, ""]],
    [/Linux|debian/i, ["Linux", ""]],
  ],
  Is = function (s) {
    return Ir.test(s)
      ? yt
      : kr.test(s)
        ? bt
        : xr.test(s)
          ? Ke
          : new RegExp(Si, "i").test(s)
            ? Si
            : new RegExp("(" + wi + "|WPDesktop)", "i").test(s)
              ? wi
              : /iPad/.test(s)
                ? on
                : /iPod/.test(s)
                  ? "iPod Touch"
                  : /iPhone/.test(s)
                    ? "iPhone"
                    : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(s)
                      ? ln
                      : Ui.test(s)
                        ? et
                        : /(kobo)\s(ereader|touch)/i.test(s)
                          ? "Kobo"
                          : new RegExp(Es, "i").test(s)
                            ? Es
                            : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(s) ||
                                /(kf[a-z]+)( bui|\)).+silk\//i.test(s)
                              ? "Kindle Fire"
                              : /(Android|ZTE)/i.test(s)
                                ? !new RegExp(ne).test(s) ||
                                  /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(
                                    s,
                                  )
                                  ? (/pixel[\daxl ]{1,6}/i.test(s) &&
                                      !/pixel c/i.test(s)) ||
                                    /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(
                                      s,
                                    ) ||
                                    (/lmy47v/i.test(s) && !/QTAQZ3/i.test(s))
                                    ? he
                                    : rn
                                  : he
                                : new RegExp("(pda|" + ne + ")", "i").test(s)
                                  ? Er
                                  : new RegExp(vt, "i").test(s) &&
                                      !new RegExp(vt + " pc", "i").test(s)
                                    ? yn
                                    : "";
  },
  Pt = "https?://(.*)",
  Cr = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
    "gad_source",
    "gclsrc",
    "dclid",
    "gbraid",
    "wbraid",
    "fbclid",
    "msclkid",
    "twclid",
    "li_fat_id",
    "mc_cid",
    "igshid",
    "ttclid",
    "rdt_cid",
  ],
  L = {
    campaignParams: function (s) {
      return m ? this._campaignParamsFromUrl(m.URL, s) : {};
    },
    _campaignParamsFromUrl: function (s, e) {
      const t = Cr.concat(e || []),
        i = {};
      return (
        R(t, function (n) {
          const r = Bt(s, n);
          i[n] = r || null;
        }),
        i
      );
    },
    _searchEngine: function (s) {
      return s
        ? s.search(Pt + "google.([^/?]*)") === 0
          ? "google"
          : s.search(Pt + "bing.com") === 0
            ? "bing"
            : s.search(Pt + "yahoo.com") === 0
              ? "yahoo"
              : s.search(Pt + "duckduckgo.com") === 0
                ? "duckduckgo"
                : null
        : null;
    },
    _searchInfoFromReferrer: function (s) {
      const e = L._searchEngine(s),
        t = e != "yahoo" ? "q" : "p",
        i = {};
      if (!Me(e)) {
        i.$search_engine = e;
        const n = m ? Bt(m.referrer, t) : "";
        n.length && (i.ph_keyword = n);
      }
      return i;
    },
    searchInfo: function () {
      const s = m?.referrer;
      return s ? this._searchInfoFromReferrer(s) : {};
    },
    browser: xs,
    browserVersion: function (s, e) {
      const t = xs(s, e),
        i = Fr[t];
      if (S(i)) return null;
      for (let n = 0; n < i.length; n++) {
        const r = i[n],
          o = s.match(r);
        if (o) return parseFloat(o[o.length - 2]);
      }
      return null;
    },
    browserLanguage: function () {
      return navigator.language || navigator.userLanguage;
    },
    os: function (s) {
      for (let e = 0; e < ks.length; e++) {
        const [t, i] = ks[e],
          n = t.exec(s),
          r = n && (se(i) ? i(n, s) : i);
        if (r) return r;
      }
      return ["", ""];
    },
    device: Is,
    deviceType: function (s) {
      const e = Is(s);
      return e === on ||
        e === rn ||
        e === "Kobo" ||
        e === "Kindle Fire" ||
        e === yn
        ? vt
        : e === yt || e === Ke || e === bt || e === Si
          ? "Console"
          : e === ln
            ? "Wearable"
            : e
              ? ne
              : "Desktop";
    },
    referrer: function () {
      return m?.referrer || "$direct";
    },
    referringDomain: function () {
      var s;
      return (
        (m != null &&
          m.referrer &&
          ((s = pt(m.referrer)) === null || s === void 0 ? void 0 : s.host)) ||
        "$direct"
      );
    },
    referrerInfo: function () {
      return {
        $referrer: this.referrer(),
        $referring_domain: this.referringDomain(),
      };
    },
    initialPersonInfo: function () {
      return { r: this.referrer(), u: J?.href };
    },
    initialPersonPropsFromInfo: function (s) {
      var e;
      const { r: t, u: i } = s,
        n = {
          $initial_referrer: t,
          $initial_referring_domain:
            t == null
              ? void 0
              : t == "$direct"
                ? "$direct"
                : (e = pt(t)) === null || e === void 0
                  ? void 0
                  : e.host,
        };
      if (i) {
        n.$initial_current_url = i;
        const r = pt(i);
        ((n.$initial_host = r?.host),
          (n.$initial_pathname = r?.pathname),
          R(this._campaignParamsFromUrl(i), function (o, a) {
            n["$initial_" + di(a)] = o;
          }));
      }
      return (
        t &&
          R(this._searchInfoFromReferrer(t), function (r, o) {
            n["$initial_" + di(o)] = r;
          }),
        n
      );
    },
    timezone: function () {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch {
        return;
      }
    },
    properties: function () {
      if (!H) return {};
      const [s, e] = L.os(H);
      return Q(
        Lt({
          $os: s,
          $os_version: e,
          $browser: L.browser(H, navigator.vendor),
          $device: L.device(H),
          $device_type: L.deviceType(H),
          $timezone: L.timezone(),
        }),
        {
          $current_url: J?.href,
          $host: J?.host,
          $pathname: J?.pathname,
          $raw_user_agent: H.length > 1e3 ? H.substring(0, 997) + "..." : H,
          $browser_version: L.browserVersion(H, navigator.vendor),
          $browser_language: L.browserLanguage(),
          $screen_height: p?.screen.height,
          $screen_width: p?.screen.width,
          $viewport_height: p?.innerHeight,
          $viewport_width: p?.innerWidth,
          $lib: "web",
          $lib_version: xe.LIB_VERSION,
          $insert_id:
            Math.random().toString(36).substring(2, 10) +
            Math.random().toString(36).substring(2, 10),
          $time: Date.now() / 1e3,
        },
      );
    },
    people_properties: function () {
      if (!H) return {};
      const [s, e] = L.os(H);
      return Q(
        Lt({
          $os: s,
          $os_version: e,
          $browser: L.browser(H, navigator.vendor),
        }),
        { $browser_version: L.browserVersion(H, navigator.vendor) },
      );
    },
  },
  $r = [
    "cookie",
    "localstorage",
    "localstorage+cookie",
    "sessionstorage",
    "memory",
  ];
class oi {
  constructor(e) {
    ((this.config = e),
      (this.props = {}),
      (this.campaign_params_saved = !1),
      (this.name = ((t) => {
        let i = "";
        return (
          t.token &&
            (i = t.token
              .replace(/\+/g, "PL")
              .replace(/\//g, "SL")
              .replace(/=/g, "EQ")),
          t.persistence_name
            ? "ph_" + t.persistence_name
            : "ph_" + i + "_posthog"
        );
      })(e)),
      (this.storage = this.buildStorage(e)),
      this.load(),
      e.debug && g.info("Persistence loaded", e.persistence, { ...this.props }),
      this.update_config(e, e),
      this.save());
  }
  buildStorage(e) {
    let t;
    $r.indexOf(e.persistence.toLowerCase()) === -1 &&
      (g.critical(
        "Unknown persistence type " +
          e.persistence +
          "; falling back to localStorage+cookie",
      ),
      (e.persistence = "localStorage+cookie"));
    const i = e.persistence.toLowerCase();
    return (
      (t =
        i === "localstorage" && N.is_supported()
          ? N
          : i === "localstorage+cookie" && kt.is_supported()
            ? kt
            : i === "sessionstorage" && U.is_supported()
              ? U
              : i === "memory"
                ? mr
                : i === "cookie"
                  ? ye
                  : kt.is_supported()
                    ? kt
                    : ye),
      t
    );
  }
  properties() {
    const e = {};
    return (
      R(this.props, function (t, i) {
        if (i === Qe && D(t)) {
          const n = Object.keys(t);
          for (let r = 0; r < n.length; r++) e[`$feature/${n[r]}`] = t[n[r]];
        } else
          (function (n, r) {
            let o = !1;
            return Me(n)
              ? o
              : ts && n.indexOf === ts
                ? n.indexOf(r) != -1
                : (R(n, function (a) {
                    if (o || (o = a === r)) return At;
                  }),
                  o);
          })(cr, i) || (e[i] = t);
      }),
      e
    );
  }
  load() {
    if (this.disabled) return;
    const e = this.storage.parse(this.name);
    e && (this.props = Q({}, e));
  }
  save() {
    this.disabled ||
      this.storage.set(
        this.name,
        this.props,
        this.expire_days,
        this.cross_subdomain,
        this.secure,
        this.config.debug,
      );
  }
  remove() {
    (this.storage.remove(this.name, !1), this.storage.remove(this.name, !0));
  }
  clear() {
    (this.remove(), (this.props = {}));
  }
  register_once(e, t, i) {
    if (D(e)) {
      (S(t) && (t = "None"),
        (this.expire_days = S(i) ? this.default_expiry : i));
      let n = !1;
      if (
        (R(e, (r, o) => {
          (this.props.hasOwnProperty(o) && this.props[o] !== t) ||
            ((this.props[o] = r), (n = !0));
        }),
        n)
      )
        return (this.save(), !0);
    }
    return !1;
  }
  register(e, t) {
    if (D(e)) {
      this.expire_days = S(t) ? this.default_expiry : t;
      let i = !1;
      if (
        (R(e, (n, r) => {
          e.hasOwnProperty(r) &&
            this.props[r] !== n &&
            ((this.props[r] = n), (i = !0));
        }),
        i)
      )
        return (this.save(), !0);
    }
    return !1;
  }
  unregister(e) {
    e in this.props && (delete this.props[e], this.save());
  }
  update_campaign_params() {
    if (!this.campaign_params_saved) {
      const e = L.campaignParams(this.config.custom_campaign_params);
      (ht(Lt(e)) ||
        this.register(L.campaignParams(this.config.custom_campaign_params)),
        (this.campaign_params_saved = !0));
    }
  }
  update_search_keyword() {
    this.register(L.searchInfo());
  }
  update_referrer_info() {
    this.register_once(L.referrerInfo(), void 0);
  }
  set_initial_person_info() {
    this.props[mi] ||
      this.props[yi] ||
      this.register_once({ [ms]: L.initialPersonInfo() }, void 0);
  }
  get_referrer_info() {
    return Lt({
      $referrer: this.props.$referrer,
      $referring_domain: this.props.$referring_domain,
    });
  }
  get_initial_props() {
    const e = {};
    R([yi, mi], (i) => {
      const n = this.props[i];
      n &&
        R(n, function (r, o) {
          e["$initial_" + di(o)] = r;
        });
    });
    const t = this.props[ms];
    if (t) {
      const i = L.initialPersonPropsFromInfo(t);
      Q(e, i);
    }
    return e;
  }
  safe_merge(e) {
    return (
      R(this.props, function (t, i) {
        i in e || (e[i] = t);
      }),
      e
    );
  }
  update_config(e, t) {
    if (
      ((this.default_expiry = this.expire_days = e.cookie_expiration),
      this.set_disabled(e.disable_persistence),
      this.set_cross_subdomain(e.cross_subdomain_cookie),
      this.set_secure(e.secure_cookie),
      e.persistence !== t.persistence)
    ) {
      const i = this.buildStorage(e),
        n = this.props;
      (this.clear(), (this.storage = i), (this.props = n), this.save());
    }
  }
  set_disabled(e) {
    ((this.disabled = e), this.disabled ? this.remove() : this.save());
  }
  set_cross_subdomain(e) {
    e !== this.cross_subdomain &&
      ((this.cross_subdomain = e), this.remove(), this.save());
  }
  get_cross_subdomain() {
    return !!this.cross_subdomain;
  }
  set_secure(e) {
    e !== this.secure && ((this.secure = e), this.remove(), this.save());
  }
  set_event_timer(e, t) {
    const i = this.props[ct] || {};
    ((i[e] = t), (this.props[ct] = i), this.save());
  }
  remove_event_timer(e) {
    const t = (this.props[ct] || {})[e];
    return (S(t) || (delete this.props[ct][e], this.save()), t);
  }
  get_property(e) {
    return this.props[e];
  }
  set_property(e, t) {
    ((this.props[e] = t), this.save());
  }
}
function Wt(s) {
  var e;
  return (
    ((e = JSON.stringify(
      s,
      (function () {
        const t = [];
        return function (i, n) {
          if (D(n)) {
            for (; t.length > 0 && t.at(-1) !== this; ) t.pop();
            return t.includes(n) ? "[Circular]" : (t.push(n), n);
          }
          return n;
        };
      })(),
    )) === null || e === void 0
      ? void 0
      : e.length) || 0
  );
}
function xi(s) {
  let e =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : 66060288e-1;
  if (s.size >= e && s.data.length > 1) {
    const t = Math.floor(s.data.length / 2),
      i = s.data.slice(0, t),
      n = s.data.slice(t);
    return [
      xi({
        size: Wt(i),
        data: i,
        sessionId: s.sessionId,
        windowId: s.windowId,
      }),
      xi({
        size: Wt(n),
        data: n,
        sessionId: s.sessionId,
        windowId: s.windowId,
      }),
    ].flatMap((r) => r);
  }
  return [s];
}
var Ie = ((s) => (
    (s[(s.DomContentLoaded = 0)] = "DomContentLoaded"),
    (s[(s.Load = 1)] = "Load"),
    (s[(s.FullSnapshot = 2)] = "FullSnapshot"),
    (s[(s.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
    (s[(s.Meta = 4)] = "Meta"),
    (s[(s.Custom = 5)] = "Custom"),
    (s[(s.Plugin = 6)] = "Plugin"),
    s
  ))(Ie || {}),
  ae = ((s) => (
    (s[(s.Mutation = 0)] = "Mutation"),
    (s[(s.MouseMove = 1)] = "MouseMove"),
    (s[(s.MouseInteraction = 2)] = "MouseInteraction"),
    (s[(s.Scroll = 3)] = "Scroll"),
    (s[(s.ViewportResize = 4)] = "ViewportResize"),
    (s[(s.Input = 5)] = "Input"),
    (s[(s.TouchMove = 6)] = "TouchMove"),
    (s[(s.MediaInteraction = 7)] = "MediaInteraction"),
    (s[(s.StyleSheetRule = 8)] = "StyleSheetRule"),
    (s[(s.CanvasMutation = 9)] = "CanvasMutation"),
    (s[(s.Font = 10)] = "Font"),
    (s[(s.Log = 11)] = "Log"),
    (s[(s.Drag = 12)] = "Drag"),
    (s[(s.StyleDeclaration = 13)] = "StyleDeclaration"),
    (s[(s.Selection = 14)] = "Selection"),
    (s[(s.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet"),
    (s[(s.CustomElement = 16)] = "CustomElement"),
    s
  ))(ae || {});
function Ps(s) {
  var e;
  return (
    s.id === bi ||
    !((e = s.closest) === null || e === void 0 || !e.call(s, "#" + bi))
  );
}
function Kt(s) {
  return !!s && s.nodeType === 1;
}
function Te(s, e) {
  return !!s && !!s.tagName && s.tagName.toLowerCase() === e.toLowerCase();
}
function bn(s) {
  return !!s && s.nodeType === 3;
}
function wn(s) {
  return !!s && s.nodeType === 11;
}
function Wi(s) {
  return s ? Yt(s).split(/\s+/) : [];
}
function Rs(s) {
  const e = p?.location.href;
  return !!(e && s && s.some((t) => e.match(t)));
}
function zt(s) {
  let e = "";
  switch (typeof s.className) {
    case "string":
      e = s.className;
      break;
    case "object":
      e =
        (s.className && "baseVal" in s.className
          ? s.className.baseVal
          : null) ||
        s.getAttribute("class") ||
        "";
      break;
    default:
      e = "";
  }
  return Wi(e);
}
function Sn(s) {
  return M(s)
    ? null
    : Yt(s)
        .split(/(\s+)/)
        .filter((e) => tt(e))
        .join("")
        .replace(/[\r\n]/g, " ")
        .replace(/[ ]+/g, " ")
        .substring(0, 255);
}
function Zt(s) {
  let e = "";
  return (
    Ii(s) &&
      !kn(s) &&
      s.childNodes &&
      s.childNodes.length &&
      R(s.childNodes, function (t) {
        var i;
        bn(t) &&
          t.textContent &&
          (e += (i = Sn(t.textContent)) !== null && i !== void 0 ? i : "");
      }),
    Yt(e)
  );
}
function En(s) {
  return S(s.target)
    ? s.srcElement || null
    : (e = s.target) !== null && e !== void 0 && e.shadowRoot
      ? s.composedPath()[0] || null
      : s.target || null;
  var e;
}
const ki = ["a", "button", "form", "input", "select", "textarea", "label"];
function xn(s) {
  const e = s.parentNode;
  return !(!e || !Kt(e)) && e;
}
function Tr(s, e) {
  let t =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0,
    i = arguments.length > 3 ? arguments[3] : void 0,
    n = arguments.length > 4 ? arguments[4] : void 0;
  if (
    !p ||
    !s ||
    Te(s, "html") ||
    !Kt(s) ||
    (t != null && t.url_allowlist && !Rs(t.url_allowlist)) ||
    (t != null && t.url_ignorelist && Rs(t.url_ignorelist))
  )
    return !1;
  if (t != null && t.dom_event_allowlist) {
    const u = t.dom_event_allowlist;
    if (u && !u.some((h) => e.type === h)) return !1;
  }
  let r = !1;
  const o = [s];
  let a = !0,
    l = s;
  for (; l.parentNode && !Te(l, "body"); )
    if (wn(l.parentNode)) (o.push(l.parentNode.host), (l = l.parentNode.host));
    else {
      if (((a = xn(l)), !a)) break;
      if (i || ki.indexOf(a.tagName.toLowerCase()) > -1) r = !0;
      else {
        const u = p.getComputedStyle(a);
        u && u.getPropertyValue("cursor") === "pointer" && (r = !0);
      }
      (o.push(a), (l = a));
    }
  if (
    !(function (u, h) {
      const _ = h?.element_allowlist;
      if (S(_)) return !0;
      for (const f of u)
        if (_.some((v) => f.tagName.toLowerCase() === v)) return !0;
      return !1;
    })(o, t) ||
    !(function (u, h) {
      const _ = h?.css_selector_allowlist;
      if (S(_)) return !0;
      for (const f of u) if (_.some((v) => f.matches(v))) return !0;
      return !1;
    })(o, t)
  )
    return !1;
  const c = p.getComputedStyle(s);
  if (c && c.getPropertyValue("cursor") === "pointer" && e.type === "click")
    return !0;
  const d = s.tagName.toLowerCase();
  switch (d) {
    case "html":
      return !1;
    case "form":
      return (n || ["submit"]).indexOf(e.type) >= 0;
    case "input":
    case "select":
    case "textarea":
      return (n || ["change", "click"]).indexOf(e.type) >= 0;
    default:
      return r
        ? (n || ["click"]).indexOf(e.type) >= 0
        : (n || ["click"]).indexOf(e.type) >= 0 &&
            (ki.indexOf(d) > -1 ||
              s.getAttribute("contenteditable") === "true");
  }
}
function Ii(s) {
  for (let i = s; i.parentNode && !Te(i, "body"); i = i.parentNode) {
    const n = zt(i);
    if (I(n, "ph-sensitive") || I(n, "ph-no-capture")) return !1;
  }
  if (I(zt(s), "ph-include")) return !0;
  const e = s.type || "";
  if (W(e))
    switch (e.toLowerCase()) {
      case "hidden":
      case "password":
        return !1;
    }
  const t = s.name || s.id || "";
  return !(
    W(t) &&
    /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
      t.replace(/[^a-zA-Z0-9]/g, ""),
    )
  );
}
function kn(s) {
  return !!(
    (Te(s, "input") &&
      !["button", "checkbox", "submit", "reset"].includes(s.type)) ||
    Te(s, "select") ||
    Te(s, "textarea") ||
    s.getAttribute("contenteditable") === "true"
  );
}
const In =
    "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
  Mr = new RegExp(`^(?:${In})$`),
  Ar = new RegExp(In),
  Pn = "\\d{3}-?\\d{2}-?\\d{4}",
  Lr = new RegExp(`^(${Pn})$`),
  Dr = new RegExp(`(${Pn})`);
function tt(s) {
  let e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  return !(
    M(s) ||
    (W(s) &&
      ((s = Yt(s)),
      (e ? Mr : Ar).test((s || "").replace(/[- ]/g, "")) ||
        (e ? Lr : Dr).test(s)))
  );
}
function Rn(s) {
  let e = Zt(s);
  return ((e = `${e} ${Fn(s)}`.trim()), tt(e) ? e : "");
}
function Fn(s) {
  let e = "";
  return (
    s &&
      s.childNodes &&
      s.childNodes.length &&
      R(s.childNodes, function (t) {
        var i;
        if (
          t &&
          ((i = t.tagName) === null || i === void 0
            ? void 0
            : i.toLowerCase()) === "span"
        )
          try {
            const n = Zt(t);
            ((e = `${e} ${n}`.trim()),
              t.childNodes &&
                t.childNodes.length &&
                (e = `${e} ${Fn(t)}`.trim()));
          } catch (n) {
            g.error(n);
          }
      }),
    e
  );
}
function Or(s) {
  return (function (e) {
    return e
      .map((i) => {
        var n, r;
        let o = "";
        if ((i.tag_name && (o += i.tag_name), i.attr_class)) {
          i.attr_class.sort();
          for (const c of i.attr_class) o += `.${c.replace(/"/g, "")}`;
        }
        const a = {
            ...(i.text ? { text: i.text } : {}),
            "nth-child": (n = i.nth_child) !== null && n !== void 0 ? n : 0,
            "nth-of-type": (r = i.nth_of_type) !== null && r !== void 0 ? r : 0,
            ...(i.href ? { href: i.href } : {}),
            ...(i.attr_id ? { attr_id: i.attr_id } : {}),
            ...i.attributes,
          },
          l = {};
        return (
          Tt(a)
            .sort((c, d) => {
              let [u] = c,
                [h] = d;
              return u.localeCompare(h);
            })
            .forEach((c) => {
              let [d, u] = c;
              return (l[Fs(d.toString())] = Fs(u.toString()));
            }),
          (o += ":"),
          (o += Tt(a)
            .map((c) => {
              let [d, u] = c;
              return `${d}="${u}"`;
            })
            .join("")),
          o
        );
      })
      .join(";");
  })(
    (function (e) {
      return e.map((t) => {
        var i, n;
        const r = {
          text:
            (i = t.$el_text) === null || i === void 0
              ? void 0
              : i.slice(0, 400),
          tag_name: t.tag_name,
          href:
            (n = t.attr__href) === null || n === void 0
              ? void 0
              : n.slice(0, 2048),
          attr_class: Nr(t),
          attr_id: t.attr__id,
          nth_child: t.nth_child,
          nth_of_type: t.nth_of_type,
          attributes: {},
        };
        return (
          Tt(t)
            .filter((o) => {
              let [a] = o;
              return a.indexOf("attr__") === 0;
            })
            .forEach((o) => {
              let [a, l] = o;
              return (r.attributes[a] = l);
            }),
          r
        );
      });
    })(s),
  );
}
function Fs(s) {
  return s.replace(/"|\\"/g, '\\"');
}
function Nr(s) {
  const e = s.attr__class;
  return e ? (q(e) ? e : Wi(e)) : void 0;
}
const Pi = "[SessionRecording]",
  Ri = "redacted",
  Rt = {
    initiatorTypes: [
      "audio",
      "beacon",
      "body",
      "css",
      "early-hint",
      "embed",
      "fetch",
      "frame",
      "iframe",
      "icon",
      "image",
      "img",
      "input",
      "link",
      "navigation",
      "object",
      "ping",
      "script",
      "track",
      "video",
      "xmlhttprequest",
    ],
    maskRequestFn: (s) => s,
    recordHeaders: !1,
    recordBody: !1,
    recordInitialRequests: !1,
    recordPerformance: !1,
    performanceEntryTypeToObserve: [
      "first-input",
      "navigation",
      "paint",
      "resource",
    ],
    payloadSizeLimitBytes: 1e6,
    payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io"],
  },
  qr = [
    "authorization",
    "x-forwarded-for",
    "authorization",
    "cookie",
    "set-cookie",
    "x-api-key",
    "x-real-ip",
    "remote-addr",
    "forwarded",
    "proxy-authorization",
    "x-csrf-token",
    "x-csrftoken",
    "x-xsrf-token",
  ],
  Br = [
    "password",
    "secret",
    "passwd",
    "api_key",
    "apikey",
    "auth",
    "credentials",
    "mysql_pwd",
    "privatekey",
    "private_key",
    "token",
  ],
  Hr = ["/s/", "/e/", "/i/"];
function Cs(s, e, t, i) {
  if (M(s)) return s;
  let n =
    e?.["content-length"] ||
    (function (r) {
      return new Blob([r]).size;
    })(s);
  return (
    W(n) && (n = parseInt(n)),
    n > t ? Pi + ` ${i} body too large to record (${n} bytes)` : s
  );
}
function $s(s, e) {
  if (M(s)) return s;
  let t = s;
  return (
    tt(t, !1) || (t = Pi + " " + e + " body " + Ri),
    R(Br, (i) => {
      var n, r;
      (n = t) !== null &&
        n !== void 0 &&
        n.length &&
        ((r = t) === null || r === void 0 ? void 0 : r.indexOf(i)) !== -1 &&
        (t = Pi + " " + e + " body " + Ri + " as might contain: " + i);
    }),
    t
  );
}
const Ur = (s, e) => {
  const t = {
      payloadSizeLimitBytes: Rt.payloadSizeLimitBytes,
      performanceEntryTypeToObserve: [...Rt.performanceEntryTypeToObserve],
      payloadHostDenyList: [
        ...(e.payloadHostDenyList || []),
        ...Rt.payloadHostDenyList,
      ],
    },
    i = s.session_recording.recordHeaders !== !1 && e.recordHeaders,
    n = s.session_recording.recordBody !== !1 && e.recordBody,
    r = s.capture_performance !== !1 && e.recordPerformance,
    o = ((c) => {
      var d;
      const u = Math.min(
        1e6,
        (d = c.payloadSizeLimitBytes) !== null && d !== void 0 ? d : 1e6,
      );
      return (h) => (
        h != null &&
          h.requestBody &&
          (h.requestBody = Cs(h.requestBody, h.requestHeaders, u, "Request")),
        h != null &&
          h.responseBody &&
          (h.responseBody = Cs(
            h.responseBody,
            h.responseHeaders,
            u,
            "Response",
          )),
        h
      );
    })(t),
    a = (c) =>
      o(
        ((d) => {
          const u = pt(d.name);
          if (!(u && u.pathname && Hr.some((h) => u.pathname.indexOf(h) === 0)))
            return d;
        })(
          ((d) => {
            const u = d.requestHeaders;
            return (
              M(u) ||
                R(Object.keys(u ?? {}), (h) => {
                  qr.includes(h.toLowerCase()) && (u[h] = Ri);
                }),
              d
            );
          })(c),
        ),
      ),
    l = se(s.session_recording.maskNetworkRequestFn);
  return (
    l &&
      se(s.session_recording.maskCapturedNetworkRequestFn) &&
      g.warn(
        "Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.",
      ),
    l &&
      (s.session_recording.maskCapturedNetworkRequestFn = (c) => {
        const d = s.session_recording.maskNetworkRequestFn({ url: c.name });
        return { ...c, name: d?.url };
      }),
    (t.maskRequestFn = se(s.session_recording.maskCapturedNetworkRequestFn)
      ? (c) => {
          var d, u, h;
          const _ = a(c);
          return _ &&
            (d =
              (u = (h = s.session_recording).maskCapturedNetworkRequestFn) ===
                null || u === void 0
                ? void 0
                : u.call(h, _)) !== null &&
            d !== void 0
            ? d
            : void 0;
        }
      : (c) =>
          (function (d) {
            if (!S(d))
              return (
                (d.requestBody = $s(d.requestBody, "Request")),
                (d.responseBody = $s(d.responseBody, "Response")),
                d
              );
          })(a(c))),
    {
      ...Rt,
      ...t,
      recordHeaders: i,
      recordBody: n,
      recordPerformance: r,
      recordInitialRequests: r,
    }
  );
};
function me(s, e, t, i) {
  return (
    e > t && (g.warn("min cannot be greater than max."), (e = t)),
    Z(s)
      ? s > t
        ? (i &&
            g.warn(
              i +
                " cannot be  greater than max: " +
                t +
                ". Using max value instead.",
            ),
          t)
        : s < e
          ? (i &&
              g.warn(
                i +
                  " cannot be less than min: " +
                  e +
                  ". Using min value instead.",
              ),
            e)
          : s
      : (i && g.warn(i + " must be a number. Defaulting to max value:" + t), t)
  );
}
class Wr {
  bucketSize = 100;
  refillRate = 10;
  mutationBuckets = {};
  loggedTracker = {};
  constructor(e) {
    var t, i;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.rrweb = e),
      (this.options = n),
      (this.refillRate = me(
        (t = this.options.refillRate) !== null && t !== void 0
          ? t
          : this.refillRate,
        0,
        100,
        "mutation throttling refill rate",
      )),
      (this.bucketSize = me(
        (i = this.options.bucketSize) !== null && i !== void 0
          ? i
          : this.bucketSize,
        0,
        100,
        "mutation throttling bucket size",
      )),
      setInterval(() => {
        this.refillBuckets();
      }, 1e3));
  }
  refillBuckets = () => {
    Object.keys(this.mutationBuckets).forEach((e) => {
      ((this.mutationBuckets[e] = this.mutationBuckets[e] + this.refillRate),
        this.mutationBuckets[e] >= this.bucketSize &&
          delete this.mutationBuckets[e]);
    });
  };
  getNodeOrRelevantParent = (e) => {
    const t = this.rrweb.mirror.getNode(e);
    if (t?.nodeName !== "svg" && t instanceof Element) {
      const i = t.closest("svg");
      if (i) return [this.rrweb.mirror.getId(i), i];
    }
    return [e, t];
  };
  numberOfChanges = (e) => {
    var t, i, n, r, o, a, l, c;
    return (
      ((t = (i = e.removes) === null || i === void 0 ? void 0 : i.length) !==
        null && t !== void 0
        ? t
        : 0) +
      ((n = (r = e.attributes) === null || r === void 0 ? void 0 : r.length) !==
        null && n !== void 0
        ? n
        : 0) +
      ((o = (a = e.texts) === null || a === void 0 ? void 0 : a.length) !==
        null && o !== void 0
        ? o
        : 0) +
      ((l = (c = e.adds) === null || c === void 0 ? void 0 : c.length) !==
        null && l !== void 0
        ? l
        : 0)
    );
  };
  throttleMutations = (e) => {
    if (e.type !== 3 || e.data.source !== 0) return e;
    const t = e.data,
      i = this.numberOfChanges(t);
    t.attributes &&
      (t.attributes = t.attributes.filter((r) => {
        var o;
        const [a, l] = this.getNodeOrRelevantParent(r.id);
        if (this.mutationBuckets[a] === 0) return !1;
        var c, d;
        return (
          (this.mutationBuckets[a] =
            (o = this.mutationBuckets[a]) !== null && o !== void 0
              ? o
              : this.bucketSize),
          (this.mutationBuckets[a] = Math.max(this.mutationBuckets[a] - 1, 0)),
          this.mutationBuckets[a] === 0 &&
            (this.loggedTracker[a] ||
              ((this.loggedTracker[a] = !0),
              (c = (d = this.options).onBlockedNode) === null ||
                c === void 0 ||
                c.call(d, a, l))),
          r
        );
      }));
    const n = this.numberOfChanges(t);
    return n !== 0 || i === n ? e : void 0;
  };
}
var re = Uint8Array,
  Y = Uint16Array,
  it = Uint32Array,
  zi = new re([
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
    5, 5, 5, 0, 0, 0, 0,
  ]),
  Vi = new re([
    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
    11, 11, 12, 12, 13, 13, 0, 0,
  ]),
  Ts = new re([
    16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
  ]),
  Cn = function (s, e) {
    for (var t = new Y(31), i = 0; i < 31; ++i) t[i] = e += 1 << s[i - 1];
    var n = new it(t[30]);
    for (i = 1; i < 30; ++i)
      for (var r = t[i]; r < t[i + 1]; ++r) n[r] = ((r - t[i]) << 5) | i;
    return [t, n];
  },
  $n = Cn(zi, 2),
  zr = $n[0],
  Fi = $n[1];
((zr[28] = 258), (Fi[258] = 28));
for (var Ms = Cn(Vi, 0)[1], Tn = new Y(32768), F = 0; F < 32768; ++F) {
  var Oe = ((43690 & F) >>> 1) | ((21845 & F) << 1);
  ((Oe =
    ((61680 & (Oe = ((52428 & Oe) >>> 2) | ((13107 & Oe) << 2))) >>> 4) |
    ((3855 & Oe) << 4)),
    (Tn[F] = (((65280 & Oe) >>> 8) | ((255 & Oe) << 8)) >>> 1));
}
var _t = function (s, e, t) {
    for (var i = s.length, n = 0, r = new Y(e); n < i; ++n) ++r[s[n] - 1];
    var o,
      a = new Y(e);
    for (n = 0; n < e; ++n) a[n] = (a[n - 1] + r[n - 1]) << 1;
    for (o = new Y(i), n = 0; n < i; ++n)
      o[n] = Tn[a[s[n] - 1]++] >>> (15 - s[n]);
    return o;
  },
  We = new re(288);
for (F = 0; F < 144; ++F) We[F] = 8;
for (F = 144; F < 256; ++F) We[F] = 9;
for (F = 256; F < 280; ++F) We[F] = 7;
for (F = 280; F < 288; ++F) We[F] = 8;
var Vt = new re(32);
for (F = 0; F < 32; ++F) Vt[F] = 5;
var Vr = _t(We, 9),
  Gr = _t(Vt, 5),
  Mn = function (s) {
    return ((s / 8) >> 0) + (7 & s && 1);
  },
  An = function (s, e, t) {
    (t == null || t > s.length) && (t = s.length);
    var i = new (s instanceof Y ? Y : s instanceof it ? it : re)(t - e);
    return (i.set(s.subarray(e, t)), i);
  },
  _e = function (s, e, t) {
    t <<= 7 & e;
    var i = (e / 8) >> 0;
    ((s[i] |= t), (s[i + 1] |= t >>> 8));
  },
  rt = function (s, e, t) {
    t <<= 7 & e;
    var i = (e / 8) >> 0;
    ((s[i] |= t), (s[i + 1] |= t >>> 8), (s[i + 2] |= t >>> 16));
  },
  ai = function (s, e) {
    for (var t = [], i = 0; i < s.length; ++i)
      s[i] && t.push({ s: i, f: s[i] });
    var n = t.length,
      r = t.slice();
    if (!n) return [new re(0), 0];
    if (n == 1) {
      var o = new re(t[0].s + 1);
      return ((o[t[0].s] = 1), [o, 1]);
    }
    (t.sort(function (P, O) {
      return P.f - O.f;
    }),
      t.push({ s: -1, f: 25001 }));
    var a = t[0],
      l = t[1],
      c = 0,
      d = 1,
      u = 2;
    for (t[0] = { s: -1, f: a.f + l.f, l: a, r: l }; d != n - 1; )
      ((a = t[t[c].f < t[u].f ? c++ : u++]),
        (l = t[c != d && t[c].f < t[u].f ? c++ : u++]),
        (t[d++] = { s: -1, f: a.f + l.f, l: a, r: l }));
    var h = r[0].s;
    for (i = 1; i < n; ++i) r[i].s > h && (h = r[i].s);
    var _ = new Y(h + 1),
      f = Ci(t[d - 1], _, 0);
    if (f > e) {
      i = 0;
      var v = 0,
        b = f - e,
        w = 1 << b;
      for (
        r.sort(function (P, O) {
          return _[O.s] - _[P.s] || P.f - O.f;
        });
        i < n;
        ++i
      ) {
        var y = r[i].s;
        if (!(_[y] > e)) break;
        ((v += w - (1 << (f - _[y]))), (_[y] = e));
      }
      for (v >>>= b; v > 0; ) {
        var k = r[i].s;
        _[k] < e ? (v -= 1 << (e - _[k]++ - 1)) : ++i;
      }
      for (; i >= 0 && v; --i) {
        var T = r[i].s;
        _[T] == e && (--_[T], ++v);
      }
      f = e;
    }
    return [new re(_), f];
  },
  Ci = function (s, e, t) {
    return s.s == -1
      ? Math.max(Ci(s.l, e, t + 1), Ci(s.r, e, t + 1))
      : (e[s.s] = t);
  },
  As = function (s) {
    for (var e = s.length; e && !s[--e]; );
    for (
      var t = new Y(++e),
        i = 0,
        n = s[0],
        r = 1,
        o = function (l) {
          t[i++] = l;
        },
        a = 1;
      a <= e;
      ++a
    )
      if (s[a] == n && a != e) ++r;
      else {
        if (!n && r > 2) {
          for (; r > 138; r -= 138) o(32754);
          r > 2 &&
            (o(r > 10 ? ((r - 11) << 5) | 28690 : ((r - 3) << 5) | 12305),
            (r = 0));
        } else if (r > 3) {
          for (o(n), --r; r > 6; r -= 6) o(8304);
          r > 2 && (o(((r - 3) << 5) | 8208), (r = 0));
        }
        for (; r--; ) o(n);
        ((r = 1), (n = s[a]));
      }
    return [t.subarray(0, i), e];
  },
  ot = function (s, e) {
    for (var t = 0, i = 0; i < e.length; ++i) t += s[i] * e[i];
    return t;
  },
  $i = function (s, e, t) {
    var i = t.length,
      n = Mn(e + 2);
    ((s[n] = 255 & i),
      (s[n + 1] = i >>> 8),
      (s[n + 2] = 255 ^ s[n]),
      (s[n + 3] = 255 ^ s[n + 1]));
    for (var r = 0; r < i; ++r) s[n + r + 4] = t[r];
    return 8 * (n + 4 + i);
  },
  Ls = function (s, e, t, i, n, r, o, a, l, c, d) {
    (_e(e, d++, t), ++n[256]);
    for (
      var u = ai(n, 15),
        h = u[0],
        _ = u[1],
        f = ai(r, 15),
        v = f[0],
        b = f[1],
        w = As(h),
        y = w[0],
        k = w[1],
        T = As(v),
        P = T[0],
        O = T[1],
        C = new Y(19),
        x = 0;
      x < y.length;
      ++x
    )
      C[31 & y[x]]++;
    for (x = 0; x < P.length; ++x) C[31 & P[x]]++;
    for (
      var $ = ai(C, 7), z = $[0], Ae = $[1], te = 19;
      te > 4 && !z[Ts[te - 1]];
      --te
    );
    var pe,
      ce,
      ue,
      ze,
      be = (c + 5) << 3,
      Le = ot(n, We) + ot(r, Vt) + o,
      de =
        ot(n, h) +
        ot(r, v) +
        o +
        14 +
        3 * te +
        ot(C, z) +
        (2 * C[16] + 3 * C[17] + 7 * C[18]);
    if (be <= Le && be <= de) return $i(e, d, s.subarray(l, l + c));
    if ((_e(e, d, 1 + (de < Le)), (d += 2), de < Le)) {
      ((pe = _t(h, _)), (ce = h), (ue = _t(v, b)), (ze = v));
      var we = _t(z, Ae);
      for (
        _e(e, d, k - 257),
          _e(e, d + 5, O - 1),
          _e(e, d + 10, te - 4),
          d += 14,
          x = 0;
        x < te;
        ++x
      )
        _e(e, d + 3 * x, z[Ts[x]]);
      d += 3 * te;
      for (var Ve = [y, P], V = 0; V < 2; ++V) {
        var ie = Ve[V];
        for (x = 0; x < ie.length; ++x) {
          var K = 31 & ie[x];
          (_e(e, d, we[K]),
            (d += z[K]),
            K > 15 && (_e(e, d, (ie[x] >>> 5) & 127), (d += ie[x] >>> 12)));
        }
      }
    } else ((pe = Vr), (ce = We), (ue = Gr), (ze = Vt));
    for (x = 0; x < a; ++x)
      if (i[x] > 255) {
        ((K = (i[x] >>> 18) & 31),
          rt(e, d, pe[K + 257]),
          (d += ce[K + 257]),
          K > 7 && (_e(e, d, (i[x] >>> 23) & 31), (d += zi[K])));
        var Ge = 31 & i[x];
        (rt(e, d, ue[Ge]),
          (d += ze[Ge]),
          Ge > 3 && (rt(e, d, (i[x] >>> 5) & 8191), (d += Vi[Ge])));
      } else (rt(e, d, pe[i[x]]), (d += ce[i[x]]));
    return (rt(e, d, pe[256]), d + ce[256]);
  },
  jr = new it([
    65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
  ]),
  Qr = (function () {
    for (var s = new it(256), e = 0; e < 256; ++e) {
      for (var t = e, i = 9; --i; ) t = (1 & t && 3988292384) ^ (t >>> 1);
      s[e] = t;
    }
    return s;
  })(),
  Jr = function () {
    var s = 4294967295;
    return {
      p: function (e) {
        for (var t = s, i = 0; i < e.length; ++i)
          t = Qr[(255 & t) ^ e[i]] ^ (t >>> 8);
        s = t;
      },
      d: function () {
        return 4294967295 ^ s;
      },
    };
  },
  Xr = function (s, e, t, i, n) {
    return (function (r, o, a, l, c, d) {
      var u = r.length,
        h = new re(l + u + 5 * (1 + Math.floor(u / 7e3)) + c),
        _ = h.subarray(l, h.length - c),
        f = 0;
      if (!o || u < 8)
        for (var v = 0; v <= u; v += 65535) {
          var b = v + 65535;
          b < u
            ? (f = $i(_, f, r.subarray(v, b)))
            : ((_[v] = d), (f = $i(_, f, r.subarray(v, u))));
        }
      else {
        for (
          var w = jr[o - 1],
            y = w >>> 13,
            k = 8191 & w,
            T = (1 << a) - 1,
            P = new Y(32768),
            O = new Y(T + 1),
            C = Math.ceil(a / 3),
            x = 2 * C,
            $ = function (ii) {
              return (r[ii] ^ (r[ii + 1] << C) ^ (r[ii + 2] << x)) & T;
            },
            z = new it(25e3),
            Ae = new Y(288),
            te = new Y(32),
            pe = 0,
            ce = 0,
            ue = ((v = 0), 0),
            ze = 0,
            be = 0;
          v < u;
          ++v
        ) {
          var Le = $(v),
            de = 32767 & v,
            we = O[Le];
          if (((P[de] = we), (O[Le] = de), ze <= v)) {
            var Ve = u - v;
            if ((pe > 7e3 || ue > 24576) && Ve > 423) {
              ((f = Ls(r, _, 0, z, Ae, te, ce, ue, be, v - be, f)),
                (ue = pe = ce = 0),
                (be = v));
              for (var V = 0; V < 286; ++V) Ae[V] = 0;
              for (V = 0; V < 30; ++V) te[V] = 0;
            }
            var ie = 2,
              K = 0,
              Ge = k,
              Se = (de - we) & 32767;
            if (Ve > 2 && Le == $(v - Se))
              for (
                var Zn = Math.min(y, Ve) - 1,
                  er = Math.min(32767, v),
                  tr = Math.min(258, Ve);
                Se <= er && --Ge && de != we;

              ) {
                if (r[v + ie] == r[v + ie - Se]) {
                  for (
                    var Ee = 0;
                    Ee < tr && r[v + Ee] == r[v + Ee - Se];
                    ++Ee
                  );
                  if (Ee > ie) {
                    if (((ie = Ee), (K = Se), Ee > Zn)) break;
                    var ir = Math.min(Se, Ee - 2),
                      Xi = 0;
                    for (V = 0; V < ir; ++V) {
                      var ti = (v - Se + V + 32768) & 32767,
                        Yi = (ti - P[ti] + 32768) & 32767;
                      Yi > Xi && ((Xi = Yi), (we = ti));
                    }
                  }
                }
                Se += ((de = we) - (we = P[de]) + 32768) & 32767;
              }
            if (K) {
              z[ue++] = 268435456 | (Fi[ie] << 18) | Ms[K];
              var Ki = 31 & Fi[ie],
                Zi = 31 & Ms[K];
              ((ce += zi[Ki] + Vi[Zi]),
                ++Ae[257 + Ki],
                ++te[Zi],
                (ze = v + ie),
                ++pe);
            } else ((z[ue++] = r[v]), ++Ae[r[v]]);
          }
        }
        f = Ls(r, _, d, z, Ae, te, ce, ue, be, v - be, f);
      }
      return An(h, 0, l + Mn(f) + c);
    })(
      s,
      e.level == null ? 6 : e.level,
      e.mem == null
        ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(s.length))))
        : 12 + e.mem,
      t,
      i,
      !n,
    );
  },
  Ti = function (s, e, t) {
    for (; t; ++e) ((s[e] = t), (t >>>= 8));
  },
  Yr = function (s, e) {
    var t = e.filename;
    if (
      ((s[0] = 31),
      (s[1] = 139),
      (s[2] = 8),
      (s[8] = e.level < 2 ? 4 : e.level == 9 ? 2 : 0),
      (s[9] = 3),
      e.mtime != 0 &&
        Ti(s, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)),
      t)
    ) {
      s[3] = 8;
      for (var i = 0; i <= t.length; ++i) s[i + 10] = t.charCodeAt(i);
    }
  },
  Kr = function (s) {
    return 10 + ((s.filename && s.filename.length + 1) || 0);
  };
function Ln(s, e) {
  e === void 0 && (e = {});
  var t = Jr(),
    i = s.length;
  t.p(s);
  var n = Xr(s, e, Kr(e), 8),
    r = n.length;
  return (Yr(n, e), Ti(n, r - 8, t.d()), Ti(n, r - 4, i), n);
}
function Dn(s, e) {
  var t = s.length;
  if (typeof TextEncoder < "u") return new TextEncoder().encode(s);
  for (
    var i = new re(s.length + (s.length >>> 1)),
      n = 0,
      r = function (c) {
        i[n++] = c;
      },
      o = 0;
    o < t;
    ++o
  ) {
    if (n + 5 > i.length) {
      var a = new re(n + 8 + ((t - o) << 1));
      (a.set(i), (i = a));
    }
    var l = s.charCodeAt(o);
    l < 128 || e
      ? r(l)
      : l < 2048
        ? (r(192 | (l >>> 6)), r(128 | (63 & l)))
        : l > 55295 && l < 57344
          ? (r(
              240 |
                ((l = (65536 + (1047552 & l)) | (1023 & s.charCodeAt(++o))) >>>
                  18),
            ),
            r(128 | ((l >>> 12) & 63)),
            r(128 | ((l >>> 6) & 63)),
            r(128 | (63 & l)))
          : (r(224 | (l >>> 12)), r(128 | ((l >>> 6) & 63)), r(128 | (63 & l)));
  }
  return An(i, 0, n);
}
const Zr = 3e5,
  eo = [
    ae.MouseMove,
    ae.MouseInteraction,
    ae.Scroll,
    ae.ViewportResize,
    ae.Input,
    ae.TouchMove,
    ae.MediaInteraction,
    ae.Drag,
  ],
  to = ["trigger_activated", "trigger_pending", "trigger_disabled"],
  Ds = (s) => ({ rrwebMethod: s, enqueuedAt: Date.now(), attempt: 1 }),
  G = "[SessionRecording]";
function Ne(s) {
  return (function (e, t) {
    for (var i = "", n = 0; n < e.length; ) {
      var r = e[n++];
      r < 128 || t
        ? (i += String.fromCharCode(r))
        : r < 224
          ? (i += String.fromCharCode(((31 & r) << 6) | (63 & e[n++])))
          : r < 240
            ? (i += String.fromCharCode(
                ((15 & r) << 12) | ((63 & e[n++]) << 6) | (63 & e[n++]),
              ))
            : ((r =
                (((15 & r) << 18) |
                  ((63 & e[n++]) << 12) |
                  ((63 & e[n++]) << 6) |
                  (63 & e[n++])) -
                65536),
              (i += String.fromCharCode(
                55296 | (r >> 10),
                56320 | (1023 & r),
              )));
    }
    return i;
  })(Ln(Dn(JSON.stringify(s))), !0);
}
function Os(s) {
  return s.type === Ie.Custom && s.data.tag === "sessionIdle";
}
class io {
  queuedRRWebEvents = [];
  isIdle = !1;
  _linkedFlagSeen = !1;
  _lastActivityTimestamp = Date.now();
  _linkedFlag = null;
  _removePageViewCaptureHook = void 0;
  _onSessionIdListener = void 0;
  _persistDecideOnSessionListener = void 0;
  _samplingSessionListener = void 0;
  _urlTriggers = [];
  _forceAllowLocalhostNetworkCapture = !1;
  get sessionIdleThresholdMilliseconds() {
    return (
      this.instance.config.session_recording.session_idle_threshold_ms || 3e5
    );
  }
  get rrwebRecord() {
    var e, t;
    return E == null ||
      (e = E.__PosthogExtensions__) === null ||
      e === void 0 ||
      (t = e.rrweb) === null ||
      t === void 0
      ? void 0
      : t.record;
  }
  get started() {
    return this._captureStarted;
  }
  get sessionManager() {
    if (!this.instance.sessionManager)
      throw new Error(G + " must be started with a valid sessionManager.");
    return this.instance.sessionManager;
  }
  get fullSnapshotIntervalMillis() {
    var e, t;
    return this.urlTriggerStatus === "trigger_pending"
      ? 6e4
      : (e =
            (t = this.instance.config.session_recording) === null ||
            t === void 0
              ? void 0
              : t.full_snapshot_interval_millis) !== null && e !== void 0
        ? e
        : Zr;
  }
  get isSampled() {
    const e = this.instance.get_property(ut);
    return Re(e) ? e : null;
  }
  get sessionDuration() {
    var e, t;
    const i =
        (e = this.buffer) === null || e === void 0
          ? void 0
          : e.data[
              ((t = this.buffer) === null || t === void 0
                ? void 0
                : t.data.length) - 1
            ],
      { sessionStartTimestamp: n } =
        this.sessionManager.checkAndGetSessionAndWindowId(!0);
    return i ? i.timestamp - n : null;
  }
  get isRecordingEnabled() {
    const e = !!this.instance.get_property(pi),
      t = !this.instance.config.disable_session_recording;
    return p && e && t;
  }
  get isConsoleLogCaptureEnabled() {
    const e = !!this.instance.get_property(ps),
      t = this.instance.config.enable_recording_console_log;
    return t ?? e;
  }
  get canvasRecording() {
    var e, t, i, n, r, o;
    const a = this.instance.config.session_recording.captureCanvas,
      l = this.instance.get_property(gs),
      c =
        (e =
          (t = a?.recordCanvas) !== null && t !== void 0 ? t : l?.enabled) !==
          null &&
        e !== void 0 &&
        e,
      d =
        (i = (n = a?.canvasFps) !== null && n !== void 0 ? n : l?.fps) !==
          null && i !== void 0
          ? i
          : 0,
      u =
        (r =
          (o = a?.canvasQuality) !== null && o !== void 0 ? o : l?.quality) !==
          null && r !== void 0
          ? r
          : 0;
    return {
      enabled: c,
      fps: me(d, 0, 12, "canvas recording fps"),
      quality: me(u, 0, 1, "canvas recording quality"),
    };
  }
  get networkPayloadCapture() {
    var e, t;
    const i = this.instance.get_property(_s),
      n = {
        recordHeaders:
          (e = this.instance.config.session_recording) === null || e === void 0
            ? void 0
            : e.recordHeaders,
        recordBody:
          (t = this.instance.config.session_recording) === null || t === void 0
            ? void 0
            : t.recordBody,
      },
      r = n?.recordHeaders || i?.recordHeaders,
      o = n?.recordBody || i?.recordBody,
      a = D(this.instance.config.capture_performance)
        ? this.instance.config.capture_performance.network_timing
        : this.instance.config.capture_performance,
      l = !!(Re(a) ? a : i?.capturePerformance);
    return r || o || l
      ? { recordHeaders: r, recordBody: o, recordPerformance: l }
      : void 0;
  }
  get sampleRate() {
    const e = this.instance.get_property(fs);
    return Z(e) ? e : null;
  }
  get minimumDuration() {
    const e = this.instance.get_property(vs);
    return Z(e) ? e : null;
  }
  get status() {
    return this.receivedDecide
      ? this.isRecordingEnabled
        ? M(this._linkedFlag) || this._linkedFlagSeen
          ? this.urlTriggerStatus === "trigger_pending"
            ? "buffering"
            : Re(this.isSampled)
              ? this.isSampled
                ? "sampled"
                : "disabled"
              : "active"
          : "buffering"
        : "disabled"
      : "buffering";
  }
  get urlTriggerStatus() {
    var e, t;
    if (this.receivedDecide && this._urlTriggers.length === 0)
      return "trigger_disabled";
    const i =
      (e = this.instance) === null || e === void 0
        ? void 0
        : e.get_property(St);
    var n, r, o, a;
    return ((t = this.instance) === null || t === void 0
      ? void 0
      : t.get_property(wt)) !== this.sessionId
      ? ((n = this.instance) === null ||
          n === void 0 ||
          (r = n.persistence) === null ||
          r === void 0 ||
          r.unregister(wt),
        (o = this.instance) === null ||
          o === void 0 ||
          (a = o.persistence) === null ||
          a === void 0 ||
          a.unregister(St),
        "trigger_pending")
      : to.includes(i)
        ? i
        : "trigger_pending";
  }
  set urlTriggerStatus(e) {
    var t, i;
    (t = this.instance) === null ||
      t === void 0 ||
      (i = t.persistence) === null ||
      i === void 0 ||
      i.register({ [wt]: this.sessionId, [St]: e });
  }
  constructor(e) {
    if (
      ((this.instance = e),
      (this._captureStarted = !1),
      (this._endpoint = "/s/"),
      (this.stopRrweb = void 0),
      (this.receivedDecide = !1),
      !this.instance.sessionManager)
    )
      throw (
        g.error(G + " started without valid sessionManager"),
        new Error(G + " started without valid sessionManager. This is a bug.")
      );
    const { sessionId: t, windowId: i } =
      this.sessionManager.checkAndGetSessionAndWindowId();
    ((this.sessionId = t),
      (this.windowId = i),
      (this.buffer = this.clearBuffer()),
      this.sessionIdleThresholdMilliseconds >=
        this.sessionManager.sessionTimeoutMs &&
        g.warn(
          G +
            ` session_idle_threshold_ms (${this.sessionIdleThresholdMilliseconds}) is greater than the session timeout (${this.sessionManager.sessionTimeoutMs}). Session will never be detected as idle`,
        ));
  }
  _onBeforeUnload = () => {
    this._flushBuffer();
  };
  _onOffline = () => {
    this._tryAddCustomEvent("browser offline", {});
  };
  _onOnline = () => {
    this._tryAddCustomEvent("browser online", {});
  };
  _onVisibilityChange = () => {
    if (m != null && m.visibilityState) {
      const e = "window " + m.visibilityState;
      this._tryAddCustomEvent(e, {});
    }
  };
  startIfEnabledOrStop(e) {
    this.isRecordingEnabled
      ? (this._startCapture(e),
        p?.addEventListener("beforeunload", this._onBeforeUnload),
        p?.addEventListener("offline", this._onOffline),
        p?.addEventListener("online", this._onOnline),
        p?.addEventListener("visibilitychange", this._onVisibilityChange),
        this._setupSampling(),
        M(this._removePageViewCaptureHook) &&
          (this._removePageViewCaptureHook = this.instance._addCaptureHook(
            (t) => {
              try {
                if (t === "$pageview") {
                  const i = p ? this._maskUrl(p.location.href) : "";
                  if (!i) return;
                  this._tryAddCustomEvent("$pageview", { href: i });
                }
              } catch (i) {
                g.error("Could not add $pageview to rrweb session", i);
              }
            },
          )),
        this._onSessionIdListener ||
          (this._onSessionIdListener = this.sessionManager.onSessionId(
            (t, i, n) => {
              var r, o, a, l;
              n &&
                (this._tryAddCustomEvent("$session_id_change", {
                  sessionId: t,
                  windowId: i,
                  changeReason: n,
                }),
                (r = this.instance) === null ||
                  r === void 0 ||
                  (o = r.persistence) === null ||
                  o === void 0 ||
                  o.unregister(wt),
                (a = this.instance) === null ||
                  a === void 0 ||
                  (l = a.persistence) === null ||
                  l === void 0 ||
                  l.unregister(St));
            },
          )))
      : this.stopRecording();
  }
  stopRecording() {
    var e, t, i;
    this._captureStarted &&
      this.stopRrweb &&
      (this.stopRrweb(),
      (this.stopRrweb = void 0),
      (this._captureStarted = !1),
      p?.removeEventListener("beforeunload", this._onBeforeUnload),
      p?.removeEventListener("offline", this._onOffline),
      p?.removeEventListener("online", this._onOnline),
      p?.removeEventListener("visibilitychange", this._onVisibilityChange),
      this.clearBuffer(),
      clearInterval(this._fullSnapshotTimer),
      (e = this._removePageViewCaptureHook) === null ||
        e === void 0 ||
        e.call(this),
      (this._removePageViewCaptureHook = void 0),
      (t = this._onSessionIdListener) === null || t === void 0 || t.call(this),
      (this._onSessionIdListener = void 0),
      (i = this._samplingSessionListener) === null ||
        i === void 0 ||
        i.call(this),
      (this._samplingSessionListener = void 0),
      g.info(G + " stopped"));
  }
  makeSamplingDecision(e) {
    var t;
    const i = this.sessionId !== e,
      n = this.sampleRate;
    var r;
    if (!Z(n))
      return void (
        (r = this.instance.persistence) === null ||
        r === void 0 ||
        r.register({ [ut]: null })
      );
    const o = this.isSampled;
    let a;
    const l = i || !Re(o);
    (l ? (a = Math.random() < n) : (a = o),
      l &&
        (a
          ? this._reportStarted("sampling")
          : g.warn(
              G +
                ` Sample rate (${n}) has determined that this sessionId (${e}) will not be sent to the server.`,
            ),
        this._tryAddCustomEvent("samplingDecisionMade", {
          sampleRate: n,
          isSampled: a,
        })),
      (t = this.instance.persistence) === null ||
        t === void 0 ||
        t.register({ [ut]: a }));
  }
  afterDecideResponse(e) {
    var t, i, n, r;
    if (
      (this._persistDecideResponse(e),
      (this._linkedFlag =
        ((t = e.sessionRecording) === null || t === void 0
          ? void 0
          : t.linkedFlag) || null),
      (i = e.sessionRecording) !== null &&
        i !== void 0 &&
        i.endpoint &&
        (this._endpoint =
          (r = e.sessionRecording) === null || r === void 0
            ? void 0
            : r.endpoint),
      this._setupSampling(),
      !M(this._linkedFlag) && !this._linkedFlagSeen)
    ) {
      const o = W(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
        a = W(this._linkedFlag) ? null : this._linkedFlag.variant;
      this.instance.onFeatureFlags((l, c) => {
        const d = D(c) && o in c,
          u = a ? c[o] === a : d;
        if (u) {
          const h = { linkedFlag: o, linkedVariant: a },
            _ = "linked flag matched";
          (g.info(G + " " + _, h),
            this._tryAddCustomEvent(_, h),
            this._reportStarted("linked_flag_match"));
        }
        this._linkedFlagSeen = u;
      });
    }
    ((n = e.sessionRecording) !== null &&
      n !== void 0 &&
      n.urlTriggers &&
      (this._urlTriggers = e.sessionRecording.urlTriggers),
      (this.receivedDecide = !0),
      this.startIfEnabledOrStop());
  }
  _setupSampling() {
    Z(this.sampleRate) &&
      M(this._samplingSessionListener) &&
      (this._samplingSessionListener = this.sessionManager.onSessionId((e) => {
        this.makeSamplingDecision(e);
      }));
  }
  _persistDecideResponse(e) {
    if (this.instance.persistence) {
      var t;
      const i = this.instance.persistence,
        n = () => {
          var r, o, a, l, c, d, u;
          const h =
              (r = e.sessionRecording) === null || r === void 0
                ? void 0
                : r.sampleRate,
            _ = M(h) ? null : parseFloat(h),
            f =
              (o = e.sessionRecording) === null || o === void 0
                ? void 0
                : o.minimumDurationMilliseconds;
          i.register({
            [pi]: !!e.sessionRecording,
            [ps]:
              (a = e.sessionRecording) === null || a === void 0
                ? void 0
                : a.consoleLogRecordingEnabled,
            [_s]: {
              capturePerformance: e.capturePerformance,
              ...((l = e.sessionRecording) === null || l === void 0
                ? void 0
                : l.networkPayloadCapture),
            },
            [gs]: {
              enabled:
                (c = e.sessionRecording) === null || c === void 0
                  ? void 0
                  : c.recordCanvas,
              fps:
                (d = e.sessionRecording) === null || d === void 0
                  ? void 0
                  : d.canvasFps,
              quality:
                (u = e.sessionRecording) === null || u === void 0
                  ? void 0
                  : u.canvasQuality,
            },
            [fs]: _,
            [vs]: S(f) ? null : f,
          });
        };
      (n(),
        (t = this._persistDecideOnSessionListener) === null ||
          t === void 0 ||
          t.call(this),
        (this._persistDecideOnSessionListener =
          this.sessionManager.onSessionId(n)));
    }
  }
  log(e) {
    var t;
    let i =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "log";
    (t = this.instance.sessionRecording) === null ||
      t === void 0 ||
      t.onRRwebEmit({
        type: 6,
        data: {
          plugin: "rrweb/console@1",
          payload: { level: i, trace: [], payload: [JSON.stringify(e)] },
        },
        timestamp: Date.now(),
      });
  }
  _startCapture(e) {
    if (
      !S(Object.assign) &&
      !S(Array.from) &&
      !(
        this._captureStarted ||
        this.instance.config.disable_session_recording ||
        this.instance.consent.isOptedOut()
      )
    ) {
      var t, i;
      ((this._captureStarted = !0),
        this.sessionManager.checkAndGetSessionAndWindowId(),
        this.rrwebRecord
          ? this._onScriptLoaded()
          : (t = E.__PosthogExtensions__) === null ||
            t === void 0 ||
            (i = t.loadExternalDependency) === null ||
            i === void 0 ||
            i.call(t, this.instance, "recorder", (n) => {
              if (n) return g.error(G + " could not load recorder", n);
              this._onScriptLoaded();
            }),
        g.info(G + " starting"),
        this.status === "active" &&
          this._reportStarted(e || "recording_initialized"));
    }
  }
  isInteractiveEvent(e) {
    var t;
    return (
      e.type === 3 &&
      eo.indexOf((t = e.data) === null || t === void 0 ? void 0 : t.source) !==
        -1
    );
  }
  _updateWindowAndSessionIds(e) {
    const t = this.isInteractiveEvent(e);
    !t &&
      !this.isIdle &&
      e.timestamp - this._lastActivityTimestamp >
        this.sessionIdleThresholdMilliseconds &&
      ((this.isIdle = !0),
      clearInterval(this._fullSnapshotTimer),
      this._tryAddCustomEvent("sessionIdle", {
        eventTimestamp: e.timestamp,
        lastActivityTimestamp: this._lastActivityTimestamp,
        threshold: this.sessionIdleThresholdMilliseconds,
        bufferLength: this.buffer.data.length,
        bufferSize: this.buffer.size,
      }),
      this._flushBuffer());
    let i = !1;
    if (
      (t &&
        ((this._lastActivityTimestamp = e.timestamp),
        this.isIdle &&
          ((this.isIdle = !1),
          this._tryAddCustomEvent("sessionNoLongerIdle", {
            reason: "user activity",
            type: e.type,
          }),
          (i = !0))),
      this.isIdle)
    )
      return;
    const { windowId: n, sessionId: r } =
        this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
      o = this.sessionId !== r,
      a = this.windowId !== n;
    ((this.windowId = n),
      (this.sessionId = r),
      o || a
        ? (this.stopRecording(),
          this.startIfEnabledOrStop("session_id_changed"))
        : i && this._scheduleFullSnapshot());
  }
  _tryRRWebMethod(e) {
    try {
      return (e.rrwebMethod(), !0);
    } catch (t) {
      return (
        this.queuedRRWebEvents.length < 10
          ? this.queuedRRWebEvents.push({
              enqueuedAt: e.enqueuedAt || Date.now(),
              attempt: e.attempt++,
              rrwebMethod: e.rrwebMethod,
            })
          : g.warn(G + " could not emit queued rrweb event.", t, e),
        !1
      );
    }
  }
  _tryAddCustomEvent(e, t) {
    return this._tryRRWebMethod(
      Ds(() => this.rrwebRecord.addCustomEvent(e, t)),
    );
  }
  _tryTakeFullSnapshot() {
    return this._tryRRWebMethod(Ds(() => this.rrwebRecord.takeFullSnapshot()));
  }
  _onScriptLoaded() {
    var e;
    const t = {
        blockClass: "ph-no-capture",
        blockSelector: void 0,
        ignoreClass: "ph-ignore-input",
        maskTextClass: "ph-mask",
        maskTextSelector: void 0,
        maskTextFn: void 0,
        maskAllInputs: !0,
        maskInputOptions: { password: !0 },
        maskInputFn: void 0,
        slimDOMOptions: {},
        collectFonts: !1,
        inlineStylesheet: !0,
        recordCrossOriginIframes: !1,
      },
      i = this.instance.config.session_recording;
    for (const [r, o] of Object.entries(i || {}))
      r in t &&
        (r === "maskInputOptions"
          ? (t.maskInputOptions = { password: !0, ...o })
          : (t[r] = o));
    if (
      (this.canvasRecording &&
        this.canvasRecording.enabled &&
        ((t.recordCanvas = !0),
        (t.sampling = { canvas: this.canvasRecording.fps }),
        (t.dataURLOptions = {
          type: "image/webp",
          quality: this.canvasRecording.quality,
        })),
      !this.rrwebRecord)
    )
      return void g.error(
        G +
          "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.",
      );
    this.mutationRateLimiter =
      (e = this.mutationRateLimiter) !== null && e !== void 0
        ? e
        : new Wr(this.rrwebRecord, {
            refillRate:
              this.instance.config.session_recording
                .__mutationRateLimiterRefillRate,
            bucketSize:
              this.instance.config.session_recording
                .__mutationRateLimiterBucketSize,
            onBlockedNode: (r, o) => {
              const a = `Too many mutations on node '${r}'. Rate limiting. This could be due to SVG animations or something similar`;
              (g.info(a, { node: o }), this.log(G + " " + a, "warn"));
            },
          });
    const n = this._gatherRRWebPlugins();
    ((this.stopRrweb = this.rrwebRecord({
      emit: (r) => {
        this.onRRwebEmit(r);
      },
      plugins: n,
      ...t,
    })),
      (this._lastActivityTimestamp = Date.now()),
      (this.isIdle = !1),
      this._tryAddCustomEvent("$session_options", {
        sessionRecordingOptions: t,
        activePlugins: n.map((r) => r?.name),
      }),
      this._tryAddCustomEvent("$posthog_config", {
        config: this.instance.config,
      }));
  }
  _scheduleFullSnapshot() {
    if (
      (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer),
      this.isIdle)
    )
      return;
    const e = this.fullSnapshotIntervalMillis;
    e &&
      (this._fullSnapshotTimer = setInterval(() => {
        this._tryTakeFullSnapshot();
      }, e));
  }
  _gatherRRWebPlugins() {
    var e, t, i, n;
    const r = [],
      o =
        (e = E.__PosthogExtensions__) === null ||
        e === void 0 ||
        (t = e.rrwebPlugins) === null ||
        t === void 0
          ? void 0
          : t.getRecordConsolePlugin;
    o && this.isConsoleLogCaptureEnabled && r.push(o());
    const a =
      (i = E.__PosthogExtensions__) === null ||
      i === void 0 ||
      (n = i.rrwebPlugins) === null ||
      n === void 0
        ? void 0
        : n.getRecordNetworkPlugin;
    return (
      this.networkPayloadCapture &&
        se(a) &&
        (!yr.includes(location.hostname) ||
        this._forceAllowLocalhostNetworkCapture
          ? r.push(a(Ur(this.instance.config, this.networkPayloadCapture)))
          : g.info(
              G + " NetworkCapture not started because we are on localhost.",
            )),
      r
    );
  }
  onRRwebEmit(e) {
    var t;
    if ((this._processQueuedEvents(), !e || !D(e))) return;
    if (e.type === Ie.Meta) {
      const a = this._maskUrl(e.data.href);
      if (((this._lastHref = a), !a)) return;
      e.data.href = a;
    } else this._pageViewFallBack();
    (this._checkUrlTrigger(),
      e.type === Ie.FullSnapshot && this._scheduleFullSnapshot(),
      e.type === Ie.FullSnapshot &&
        this.urlTriggerStatus === "trigger_pending" &&
        this.clearBuffer());
    const i = this.mutationRateLimiter
      ? this.mutationRateLimiter.throttleMutations(e)
      : e;
    if (!i) return;
    const n = (function (a) {
      const l = a;
      if (
        l &&
        D(l) &&
        l.type === 6 &&
        D(l.data) &&
        l.data.plugin === "rrweb/console@1"
      ) {
        l.data.payload.payload.length > 10 &&
          ((l.data.payload.payload = l.data.payload.payload.slice(0, 10)),
          l.data.payload.payload.push("...[truncated]"));
        const c = [];
        for (let d = 0; d < l.data.payload.payload.length; d++)
          l.data.payload.payload[d] && l.data.payload.payload[d].length > 2e3
            ? c.push(l.data.payload.payload[d].slice(0, 2e3) + "...[truncated]")
            : c.push(l.data.payload.payload[d]);
        return ((l.data.payload.payload = c), a);
      }
      return a;
    })(i);
    if ((this._updateWindowAndSessionIds(n), this.isIdle && !Os(n))) return;
    if (Os(n)) {
      const a = n.data.payload;
      if (a) {
        const l = a.lastActivityTimestamp,
          c = a.threshold;
        n.timestamp = l + c;
      }
    }
    const r =
        (t = this.instance.config.session_recording.compress_events) === null ||
        t === void 0 ||
        t
          ? (function (a) {
              if (Wt(a) < 1024) return a;
              try {
                if (a.type === Ie.FullSnapshot)
                  return { ...a, data: Ne(a.data), cv: "2024-10" };
                if (
                  a.type === Ie.IncrementalSnapshot &&
                  a.data.source === ae.Mutation
                )
                  return {
                    ...a,
                    cv: "2024-10",
                    data: {
                      ...a.data,
                      texts: Ne(a.data.texts),
                      attributes: Ne(a.data.attributes),
                      removes: Ne(a.data.removes),
                      adds: Ne(a.data.adds),
                    },
                  };
                if (
                  a.type === Ie.IncrementalSnapshot &&
                  a.data.source === ae.StyleSheetRule
                )
                  return {
                    ...a,
                    cv: "2024-10",
                    data: {
                      ...a.data,
                      adds: Ne(a.data.adds),
                      removes: Ne(a.data.removes),
                    },
                  };
              } catch (l) {
                g.error(
                  G + " could not compress event - will use uncompressed event",
                  l,
                );
              }
              return a;
            })(n)
          : n,
      o = {
        $snapshot_bytes: Wt(r),
        $snapshot_data: r,
        $session_id: this.sessionId,
        $window_id: this.windowId,
      };
    this.status !== "disabled"
      ? this._captureSnapshotBuffered(o)
      : this.clearBuffer();
  }
  _pageViewFallBack() {
    if (this.instance.config.capture_pageview || !p) return;
    const e = this._maskUrl(p.location.href);
    this._lastHref !== e &&
      (this._tryAddCustomEvent("$url_changed", { href: e }),
      (this._lastHref = e));
  }
  _processQueuedEvents() {
    if (this.queuedRRWebEvents.length) {
      const e = [...this.queuedRRWebEvents];
      ((this.queuedRRWebEvents = []),
        e.forEach((t) => {
          Date.now() - t.enqueuedAt <= 2e3 && this._tryRRWebMethod(t);
        }));
    }
  }
  _maskUrl(e) {
    const t = this.instance.config.session_recording;
    if (t.maskNetworkRequestFn) {
      var i;
      let n = { url: e };
      return (
        (n = t.maskNetworkRequestFn(n)),
        (i = n) === null || i === void 0 ? void 0 : i.url
      );
    }
    return e;
  }
  clearBuffer() {
    return (
      (this.buffer = {
        size: 0,
        data: [],
        sessionId: this.sessionId,
        windowId: this.windowId,
      }),
      this.buffer
    );
  }
  _flushBuffer() {
    this.flushBufferTimer &&
      (clearTimeout(this.flushBufferTimer), (this.flushBufferTimer = void 0));
    const e = this.minimumDuration,
      t = this.sessionDuration,
      i = Z(t) && t >= 0,
      n = Z(e) && i && t < e;
    return this.status === "buffering" || n
      ? ((this.flushBufferTimer = setTimeout(() => {
          this._flushBuffer();
        }, 2e3)),
        this.buffer)
      : (this.buffer.data.length > 0 &&
          xi(this.buffer).forEach((r) => {
            this._captureSnapshot({
              $snapshot_bytes: r.size,
              $snapshot_data: r.data,
              $session_id: r.sessionId,
              $window_id: r.windowId,
            });
          }),
        this.clearBuffer());
  }
  _captureSnapshotBuffered(e) {
    var t;
    const i =
      2 +
      (((t = this.buffer) === null || t === void 0 ? void 0 : t.data.length) ||
        0);
    (!this.isIdle &&
      (this.buffer.size + e.$snapshot_bytes + i > 943718.4 ||
        this.buffer.sessionId !== this.sessionId) &&
      (this.buffer = this._flushBuffer()),
      (this.buffer.size += e.$snapshot_bytes),
      this.buffer.data.push(e.$snapshot_data),
      this.flushBufferTimer ||
        this.isIdle ||
        (this.flushBufferTimer = setTimeout(() => {
          this._flushBuffer();
        }, 2e3)));
  }
  _captureSnapshot(e) {
    this.instance.capture("$snapshot", e, {
      _url: this.instance.requestRouter.endpointFor("api", this._endpoint),
      _noTruncate: !0,
      _batchKey: "recordings",
      skip_client_rate_limiting: !0,
    });
  }
  _checkUrlTrigger() {
    if (p === void 0 || !p.location.href) return;
    const e = p.location.href;
    this._urlTriggers.some(
      (t) => t.matching === "regex" && new RegExp(t.url).test(e),
    ) && this._activateUrlTrigger();
  }
  _activateUrlTrigger() {
    this.urlTriggerStatus === "trigger_pending" &&
      ((this.urlTriggerStatus = "trigger_activated"),
      this._tryAddCustomEvent("url trigger activated", {}),
      this._flushBuffer(),
      g.info(G + " recording triggered by URL pattern match"));
  }
  overrideLinkedFlag() {
    ((this._linkedFlagSeen = !0), this._reportStarted("linked_flag_override"));
  }
  overrideSampling() {
    var e;
    ((e = this.instance.persistence) === null ||
      e === void 0 ||
      e.register({ [ut]: !0 }),
      this._reportStarted("sampling_override"));
  }
  _reportStarted(e) {
    (arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : () => !0)() &&
      this.instance.register_for_session({
        $session_recording_start_reason: e,
      });
  }
}
class so {
  constructor(e) {
    ((this.instance = e),
      (this.instance.decideEndpointWasHit =
        this.instance._hasBootstrappedFeatureFlags()));
  }
  call() {
    const e = {
      token: this.instance.config.token,
      distinct_id: this.instance.get_distinct_id(),
      groups: this.instance.getGroups(),
      person_properties: this.instance.get_property(Je),
      group_properties: this.instance.get_property(ke),
      disable_flags:
        this.instance.config.advanced_disable_feature_flags ||
        this.instance.config.advanced_disable_feature_flags_on_first_load ||
        void 0,
    };
    this.instance._send_request({
      method: "POST",
      url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
      data: e,
      compression: this.instance.config.disable_compression
        ? void 0
        : le.Base64,
      timeout: this.instance.config.feature_flag_request_timeout_ms,
      callback: (t) => this.parseDecideResponse(t.json),
    });
  }
  parseDecideResponse(e) {
    (this.instance.featureFlags.setReloadingPaused(!1),
      this.instance.featureFlags._startReloadTimer());
    const t = !e;
    if (
      (this.instance.config.advanced_disable_feature_flags_on_first_load ||
        this.instance.config.advanced_disable_feature_flags ||
        this.instance.featureFlags.receivedFeatureFlags(e ?? {}, t),
      t)
    )
      g.error("Failed to fetch feature flags from PostHog.");
    else {
      if (!m || !m.body)
        return (
          g.info("document not ready yet, trying again in 500 milliseconds..."),
          void setTimeout(() => {
            this.parseDecideResponse(e);
          }, 500)
        );
      if ((this.instance._afterDecideResponse(e), e.siteApps))
        if (this.instance.config.opt_in_site_apps)
          for (const { id: o, url: a } of e.siteApps) {
            var i, n, r;
            ((E[`__$$ph_site_app_${o}`] = this.instance),
              (i = E.__PosthogExtensions__) === null ||
                i === void 0 ||
                (n = (r = i).loadSiteApp) === null ||
                n === void 0 ||
                n.call(r, this.instance, a, (l) => {
                  if (l)
                    return g.error(
                      `Error while initializing PostHog app with config id ${o}`,
                      l,
                    );
                }));
          }
        else
          e.siteApps.length > 0 &&
            g.error(
              'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.',
            );
    }
  }
}
const no =
    p != null && p.location
      ? Ht(p.location.hash, "__posthog") || Ht(location.hash, "state")
      : null,
  Ns = "_postHogToolbarParams";
var fe;
(function (s) {
  ((s[(s.UNINITIALIZED = 0)] = "UNINITIALIZED"),
    (s[(s.LOADING = 1)] = "LOADING"),
    (s[(s.LOADED = 2)] = "LOADED"));
})(fe || (fe = {}));
class ro {
  constructor(e) {
    this.instance = e;
  }
  setToolbarState(e) {
    E.ph_toolbar_state = e;
  }
  getToolbarState() {
    var e;
    return (e = E.ph_toolbar_state) !== null && e !== void 0
      ? e
      : fe.UNINITIALIZED;
  }
  maybeLoadToolbar() {
    var e, t;
    let i =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0,
      n =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
      r =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    if (!p || !m) return !1;
    ((i = (e = i) !== null && e !== void 0 ? e : p.location),
      (r = (t = r) !== null && t !== void 0 ? t : p.history));
    try {
      if (!n) {
        try {
          (p.localStorage.setItem("test", "test"),
            p.localStorage.removeItem("test"));
        } catch {
          return !1;
        }
        n = p?.localStorage;
      }
      const o = no || Ht(i.hash, "__posthog") || Ht(i.hash, "state");
      let a;
      const l = o
        ? os(() => JSON.parse(atob(decodeURIComponent(o)))) ||
          os(() => JSON.parse(decodeURIComponent(o)))
        : null;
      return (
        l && l.action === "ph_authorize"
          ? ((a = l),
            (a.source = "url"),
            a &&
              Object.keys(a).length > 0 &&
              (l.desiredHash
                ? (i.hash = l.desiredHash)
                : r
                  ? r.replaceState(r.state, "", i.pathname + i.search)
                  : (i.hash = "")))
          : ((a = JSON.parse(n.getItem(Ns) || "{}")),
            (a.source = "localstorage"),
            delete a.userIntent),
        !(!a.token || this.instance.config.token !== a.token) &&
          (this.loadToolbar(a), !0)
      );
    } catch {
      return !1;
    }
  }
  _callLoadToolbar(e) {
    (E.ph_load_toolbar || E.ph_load_editor)(e, this.instance);
  }
  loadToolbar(e) {
    const t = !(m == null || !m.getElementById(bi));
    if (!p || t) return !1;
    const i =
        this.instance.requestRouter.region === "custom" &&
        this.instance.config.advanced_disable_toolbar_metrics,
      n = {
        token: this.instance.config.token,
        ...e,
        apiURL: this.instance.requestRouter.endpointFor("ui"),
        ...(i ? { instrument: !1 } : {}),
      };
    if (
      (p.localStorage.setItem(Ns, JSON.stringify({ ...n, source: void 0 })),
      this.getToolbarState() === fe.LOADED)
    )
      this._callLoadToolbar(n);
    else if (this.getToolbarState() === fe.UNINITIALIZED) {
      var r, o;
      (this.setToolbarState(fe.LOADING),
        (r = E.__PosthogExtensions__) === null ||
          r === void 0 ||
          (o = r.loadExternalDependency) === null ||
          o === void 0 ||
          o.call(r, this.instance, "toolbar", (a) => {
            if (a)
              return (
                g.error("Failed to load toolbar", a),
                void this.setToolbarState(fe.UNINITIALIZED)
              );
            (this.setToolbarState(fe.LOADED), this._callLoadToolbar(n));
          }),
        ve(p, "turbolinks:load", () => {
          (this.setToolbarState(fe.UNINITIALIZED), this.loadToolbar(n));
        }));
    }
    return !0;
  }
  _loadEditor(e) {
    return this.loadToolbar(e);
  }
  maybeLoadEditor() {
    let e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0,
      t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
      i =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
    return this.maybeLoadToolbar(e, t, i);
  }
}
class oo {
  isPaused = !0;
  queue = [];
  flushTimeoutMs = 3e3;
  constructor(e) {
    this.sendRequest = e;
  }
  enqueue(e) {
    (this.queue.push(e), this.flushTimeout || this.setFlushTimeout());
  }
  unload() {
    this.clearFlushTimeout();
    const e = this.queue.length > 0 ? this.formatQueue() : {},
      t = Object.values(e);
    [
      ...t.filter((n) => n.url.indexOf("/e") === 0),
      ...t.filter((n) => n.url.indexOf("/e") !== 0),
    ].map((n) => {
      this.sendRequest({ ...n, transport: "sendBeacon" });
    });
  }
  enable() {
    ((this.isPaused = !1), this.setFlushTimeout());
  }
  setFlushTimeout() {
    this.isPaused ||
      (this.flushTimeout = setTimeout(() => {
        if ((this.clearFlushTimeout(), this.queue.length > 0)) {
          const e = this.formatQueue();
          for (const t in e) {
            const i = e[t],
              n = new Date().getTime();
            (i.data &&
              q(i.data) &&
              R(i.data, (r) => {
                ((r.offset = Math.abs(r.timestamp - n)), delete r.timestamp);
              }),
              this.sendRequest(i));
          }
        }
      }, this.flushTimeoutMs));
  }
  clearFlushTimeout() {
    (clearTimeout(this.flushTimeout), (this.flushTimeout = void 0));
  }
  formatQueue() {
    const e = {};
    return (
      R(this.queue, (t) => {
        var i;
        const n = t,
          r = (n ? n.batchKey : null) || n.url;
        (S(e[r]) && (e[r] = { ...n, data: [] }),
          (i = e[r].data) === null || i === void 0 || i.push(n.data));
      }),
      (this.queue = []),
      e
    );
  }
}
const ao = !!Ni || !!Oi,
  qs = "text/plain",
  Gt = (s, e) => {
    const [t, i] = s.split("?"),
      n = { ...e };
    i?.split("&").forEach((o) => {
      const [a] = o.split("=");
      delete n[a];
    });
    let r = br(n);
    return ((r = r ? (i ? i + "&" : "") + r : i), `${t}?${r}`);
  },
  Gi = (s) => {
    let { data: e, compression: t } = s;
    if (!e) return;
    if (t === le.GZipJS) {
      const n = Ln(Dn(JSON.stringify(e)), { mtime: 0 }),
        r = new Blob([n], { type: qs });
      return { contentType: qs, body: r, estimatedSize: r.size };
    }
    if (t === le.Base64) {
      const n = (function (o) {
          const a =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          let l,
            c,
            d,
            u,
            h,
            _,
            f,
            v,
            b = 0,
            w = 0,
            y = "";
          const k = [];
          if (!o) return o;
          o = ar(o);
          do
            ((l = o.charCodeAt(b++)),
              (c = o.charCodeAt(b++)),
              (d = o.charCodeAt(b++)),
              (v = (l << 16) | (c << 8) | d),
              (u = (v >> 18) & 63),
              (h = (v >> 12) & 63),
              (_ = (v >> 6) & 63),
              (f = 63 & v),
              (k[w++] = a.charAt(u) + a.charAt(h) + a.charAt(_) + a.charAt(f)));
          while (b < o.length);
          switch (((y = k.join("")), o.length % 3)) {
            case 1:
              y = y.slice(0, -2) + "==";
              break;
            case 2:
              y = y.slice(0, -1) + "=";
          }
          return y;
        })(JSON.stringify(e)),
        r = ((o) =>
          "data=" +
          encodeURIComponent(typeof o == "string" ? o : JSON.stringify(o)))(n);
      return {
        contentType: "application/x-www-form-urlencoded",
        body: r,
        estimatedSize: new Blob([r]).size,
      };
    }
    const i = JSON.stringify(e);
    return {
      contentType: "application/json",
      body: i,
      estimatedSize: new Blob([i]).size,
    };
  },
  lo = (s) => {
    var e;
    const t = new Ni();
    t.open(s.method || "GET", s.url, !0);
    const { contentType: i, body: n } =
      (e = Gi(s)) !== null && e !== void 0 ? e : {};
    (R(s.headers, function (r, o) {
      t.setRequestHeader(o, r);
    }),
      i && t.setRequestHeader("Content-Type", i),
      s.timeout && (t.timeout = s.timeout),
      (t.withCredentials = !0),
      (t.onreadystatechange = () => {
        if (t.readyState === 4) {
          var r;
          const o = { statusCode: t.status, text: t.responseText };
          if (t.status === 200)
            try {
              o.json = JSON.parse(t.responseText);
            } catch {}
          (r = s.callback) === null || r === void 0 || r.call(s, o);
        }
      }),
      t.send(n));
  },
  co = (s) => {
    var e, t;
    const {
        contentType: i,
        body: n,
        estimatedSize: r,
      } = (e = Gi(s)) !== null && e !== void 0 ? e : {},
      o = new Headers();
    (R(s.headers, function (c, d) {
      o.append(d, c);
    }),
      i && o.append("Content-Type", i));
    const a = s.url;
    let l = null;
    if (is) {
      const c = new is();
      l = { signal: c.signal, timeout: setTimeout(() => c.abort(), s.timeout) };
    }
    Oi(a, {
      method: s?.method || "GET",
      headers: o,
      keepalive: s.method === "POST" && (r || 0) < 52428.8,
      body: n,
      signal: (t = l) === null || t === void 0 ? void 0 : t.signal,
    })
      .then((c) =>
        c.text().then((d) => {
          var u;
          const h = { statusCode: c.status, text: d };
          if (c.status === 200)
            try {
              h.json = JSON.parse(d);
            } catch (_) {
              g.error(_);
            }
          (u = s.callback) === null || u === void 0 || u.call(s, h);
        }),
      )
      .catch((c) => {
        var d;
        (g.error(c),
          (d = s.callback) === null ||
            d === void 0 ||
            d.call(s, { statusCode: 0, text: c }));
      })
      .finally(() => (l ? clearTimeout(l.timeout) : null));
  },
  uo = (s) => {
    const e = Gt(s.url, { beacon: "1" });
    try {
      var t;
      const { contentType: i, body: n } =
          (t = Gi(s)) !== null && t !== void 0 ? t : {},
        r = typeof n == "string" ? new Blob([n], { type: i }) : n;
      ee.sendBeacon(e, r);
    } catch {}
  },
  gt = [];
(Ni && gt.push({ transport: "XHR", method: lo }),
  Oi && gt.push({ transport: "fetch", method: co }),
  ee != null &&
    ee.sendBeacon &&
    gt.push({ transport: "sendBeacon", method: uo }));
class ho {
  isPolling = !1;
  pollIntervalMs = 3e3;
  queue = [];
  constructor(e) {
    ((this.instance = e),
      (this.queue = []),
      (this.areWeOnline = !0),
      !S(p) &&
        "onLine" in p.navigator &&
        ((this.areWeOnline = p.navigator.onLine),
        p.addEventListener("online", () => {
          ((this.areWeOnline = !0), this.flush());
        }),
        p.addEventListener("offline", () => {
          this.areWeOnline = !1;
        })));
  }
  retriableRequest(e) {
    let { retriesPerformedSoFar: t, ...i } = e;
    (Z(t) && t > 0 && (i.url = Gt(i.url, { retry_count: t })),
      this.instance._send_request({
        ...i,
        callback: (n) => {
          var r;
          n.statusCode !== 200 &&
          (n.statusCode < 400 || n.statusCode >= 500) &&
          (t ?? 0) < 10
            ? this.enqueue({ retriesPerformedSoFar: t, ...i })
            : (r = i.callback) === null || r === void 0 || r.call(i, n);
        },
      }));
  }
  enqueue(e) {
    const t = e.retriesPerformedSoFar || 0;
    e.retriesPerformedSoFar = t + 1;
    const i = (function (o) {
        const a = 3e3 * 2 ** o,
          l = a / 2,
          c = Math.min(18e5, a),
          d = (Math.random() - 0.5) * (c - l);
        return Math.ceil(c + d);
      })(t),
      n = Date.now() + i;
    this.queue.push({ retryAt: n, requestOptions: e });
    let r = `Enqueued failed request for retry in ${i}`;
    (navigator.onLine || (r += " (Browser is offline)"),
      g.warn(r),
      this.isPolling || ((this.isPolling = !0), this.poll()));
  }
  poll() {
    (this.poller && clearTimeout(this.poller),
      (this.poller = setTimeout(() => {
        (this.areWeOnline && this.queue.length > 0 && this.flush(),
          this.poll());
      }, this.pollIntervalMs)));
  }
  flush() {
    const e = Date.now(),
      t = [],
      i = this.queue.filter((n) => n.retryAt < e || (t.push(n), !1));
    if (((this.queue = t), i.length > 0))
      for (const { requestOptions: n } of i) this.retriableRequest(n);
  }
  unload() {
    this.poller && (clearTimeout(this.poller), (this.poller = void 0));
    for (const { requestOptions: e } of this.queue)
      try {
        this.instance._send_request({ ...e, transport: "sendBeacon" });
      } catch (t) {
        g.error(t);
      }
    this.queue = [];
  }
}
class po {
  _sessionIdChangedHandlers = [];
  constructor(e, t, i, n) {
    var r;
    ((this.config = e),
      (this.persistence = t),
      (this._windowId = void 0),
      (this._sessionId = void 0),
      (this._sessionStartTimestamp = null),
      (this._sessionActivityTimestamp = null),
      (this._sessionIdGenerator = i || Fe),
      (this._windowIdGenerator = n || Fe));
    const o = e.persistence_name || e.token,
      a = e.session_idle_timeout_seconds || 1800;
    if (
      ((this._sessionTimeoutMs =
        1e3 * me(a, 60, 1800, "session_idle_timeout_seconds")),
      (this._window_id_storage_key = "ph_" + o + "_window_id"),
      (this._primary_window_exists_storage_key =
        "ph_" + o + "_primary_window_exists"),
      this._canUseSessionStorage())
    ) {
      const l = U.parse(this._window_id_storage_key),
        c = U.parse(this._primary_window_exists_storage_key);
      (l && !c ? (this._windowId = l) : U.remove(this._window_id_storage_key),
        U.set(this._primary_window_exists_storage_key, !0));
    }
    if ((r = this.config.bootstrap) !== null && r !== void 0 && r.sessionID)
      try {
        const l = ((c) => {
          const d = c.replace(/-/g, "");
          if (d.length !== 32) throw new Error("Not a valid UUID");
          if (d[12] !== "7") throw new Error("Not a UUIDv7");
          return parseInt(d.substring(0, 12), 16);
        })(this.config.bootstrap.sessionID);
        this._setSessionId(
          this.config.bootstrap.sessionID,
          new Date().getTime(),
          l,
        );
      } catch (l) {
        g.error("Invalid sessionID in bootstrap", l);
      }
    this._listenToReloadWindow();
  }
  get sessionTimeoutMs() {
    return this._sessionTimeoutMs;
  }
  onSessionId(e) {
    return (
      S(this._sessionIdChangedHandlers) &&
        (this._sessionIdChangedHandlers = []),
      this._sessionIdChangedHandlers.push(e),
      this._sessionId && e(this._sessionId, this._windowId),
      () => {
        this._sessionIdChangedHandlers = this._sessionIdChangedHandlers.filter(
          (t) => t !== e,
        );
      }
    );
  }
  _canUseSessionStorage() {
    return (
      this.config.persistence !== "memory" &&
      !this.persistence.disabled &&
      U.is_supported()
    );
  }
  _setWindowId(e) {
    e !== this._windowId &&
      ((this._windowId = e),
      this._canUseSessionStorage() && U.set(this._window_id_storage_key, e));
  }
  _getWindowId() {
    return this._windowId
      ? this._windowId
      : this._canUseSessionStorage()
        ? U.parse(this._window_id_storage_key)
        : null;
  }
  _setSessionId(e, t, i) {
    (e === this._sessionId &&
      t === this._sessionActivityTimestamp &&
      i === this._sessionStartTimestamp) ||
      ((this._sessionStartTimestamp = i),
      (this._sessionActivityTimestamp = t),
      (this._sessionId = e),
      this.persistence.register({ [Dt]: [t, e, i] }));
  }
  _getSessionId() {
    if (
      this._sessionId &&
      this._sessionActivityTimestamp &&
      this._sessionStartTimestamp
    )
      return [
        this._sessionActivityTimestamp,
        this._sessionId,
        this._sessionStartTimestamp,
      ];
    const e = this.persistence.props[Dt];
    return (q(e) && e.length === 2 && e.push(e[0]), e || [0, null, 0]);
  }
  resetSessionId() {
    this._setSessionId(null, null, null);
  }
  _listenToReloadWindow() {
    p?.addEventListener("beforeunload", () => {
      this._canUseSessionStorage() &&
        U.remove(this._primary_window_exists_storage_key);
    });
  }
  checkAndGetSessionAndWindowId() {
    let e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const t =
      (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null) ||
      new Date().getTime();
    let [i, n, r] = this._getSessionId(),
      o = this._getWindowId();
    const a = Z(r) && r > 0 && Math.abs(t - r) > 864e5;
    let l = !1;
    const c = !n,
      d = !e && Math.abs(t - i) > this.sessionTimeoutMs;
    c || d || a
      ? ((n = this._sessionIdGenerator()),
        (o = this._windowIdGenerator()),
        g.info("[SessionId] new session ID generated", {
          sessionId: n,
          windowId: o,
          changeReason: {
            noSessionId: c,
            activityTimeout: d,
            sessionPastMaximumLength: a,
          },
        }),
        (r = t),
        (l = !0))
      : o || ((o = this._windowIdGenerator()), (l = !0));
    const u = i === 0 || !e || a ? t : i,
      h = r === 0 ? new Date().getTime() : r;
    return (
      this._setWindowId(o),
      this._setSessionId(n, u, h),
      l &&
        this._sessionIdChangedHandlers.forEach((_) =>
          _(
            n,
            o,
            l
              ? {
                  noSessionId: c,
                  activityTimeout: d,
                  sessionPastMaximumLength: a,
                }
              : void 0,
          ),
        ),
      {
        sessionId: n,
        windowId: o,
        sessionStartTimestamp: h,
        changeReason: l
          ? { noSessionId: c, activityTimeout: d, sessionPastMaximumLength: a }
          : void 0,
        lastActivityTimestamp: i,
      }
    );
  }
}
let Ue;
(function (s) {
  ((s.US = "us"), (s.EU = "eu"), (s.CUSTOM = "custom"));
})(Ue || (Ue = {}));
const Bs = "i.posthog.com";
class _o {
  _regionCache = {};
  constructor(e) {
    this.instance = e;
  }
  get apiHost() {
    const e = this.instance.config.api_host.trim().replace(/\/$/, "");
    return e === "https://app.posthog.com" ? "https://us.i.posthog.com" : e;
  }
  get uiHost() {
    var e;
    let t =
      (e = this.instance.config.ui_host) === null || e === void 0
        ? void 0
        : e.replace(/\/$/, "");
    return (
      t || (t = this.apiHost.replace(`.${Bs}`, ".posthog.com")),
      t === "https://app.posthog.com" ? "https://us.posthog.com" : t
    );
  }
  get region() {
    return (
      this._regionCache[this.apiHost] ||
        (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
          ? (this._regionCache[this.apiHost] = Ue.US)
          : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost)
            ? (this._regionCache[this.apiHost] = Ue.EU)
            : (this._regionCache[this.apiHost] = Ue.CUSTOM)),
      this._regionCache[this.apiHost]
    );
  }
  endpointFor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    if ((t && (t = t[0] === "/" ? t : `/${t}`), e === "ui"))
      return this.uiHost + t;
    if (this.region === Ue.CUSTOM) return this.apiHost + t;
    const i = Bs + t;
    switch (e) {
      case "assets":
        return `https://${this.region}-assets.${i}`;
      case "api":
        return `https://${this.region}.${i}`;
    }
  }
}
const On = "posthog-js";
function Nn(s) {
  let {
    organization: e,
    projectId: t,
    prefix: i,
    severityAllowList: n = ["error"],
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return (r) => {
    var o, a, l, c, d;
    if (!(n === "*" || n.includes(r.level)) || !s.__loaded) return r;
    r.tags || (r.tags = {});
    const u = s.requestRouter.endpointFor(
      "ui",
      `/project/${s.config.token}/person/${s.get_distinct_id()}`,
    );
    ((r.tags["PostHog Person URL"] = u),
      s.sessionRecordingStarted() &&
        (r.tags["PostHog Recording URL"] = s.get_session_replay_url({
          withTimestamp: !0,
        })));
    const h =
        ((o = r.exception) === null || o === void 0 ? void 0 : o.values) || [],
      _ = {
        $exception_message:
          ((a = h[0]) === null || a === void 0 ? void 0 : a.value) || r.message,
        $exception_type: (l = h[0]) === null || l === void 0 ? void 0 : l.type,
        $exception_personURL: u,
        $exception_level: r.level,
        $exception_list: h,
        $sentry_event_id: r.event_id,
        $sentry_exception: r.exception,
        $sentry_exception_message:
          ((c = h[0]) === null || c === void 0 ? void 0 : c.value) || r.message,
        $sentry_exception_type:
          (d = h[0]) === null || d === void 0 ? void 0 : d.type,
        $sentry_tags: r.tags,
        $level: r.level,
      };
    return (
      e &&
        t &&
        (_.$sentry_url =
          (i || "https://sentry.io/organizations/") +
          e +
          "/issues/?project=" +
          t +
          "&query=" +
          r.event_id),
      s.exceptions.sendExceptionEvent(_),
      r
    );
  };
}
class go {
  constructor(e, t, i, n, r) {
    ((this.name = On),
      (this.setupOnce = function (o) {
        o(
          Nn(e, {
            organization: t,
            projectId: i,
            prefix: n,
            severityAllowList: r,
          }),
        );
      }));
  }
}
function fo(s, e) {
  const t = s.config.segment;
  if (!t) return e();
  (function (i, n) {
    const r = i.config.segment;
    if (!r) return n();
    const o = (l) => {
        const c = () => l.anonymousId() || Fe();
        ((i.config.get_device_id = c),
          l.id() &&
            (i.register({ distinct_id: l.id(), $device_id: c() }),
            i.persistence.set_property(ge, "identified")),
          n());
      },
      a = r.user();
    "then" in a && se(a.then) ? a.then((l) => o(l)) : o(a);
  })(s, () => {
    t.register(
      ((i) => {
        (Promise && Promise.resolve) ||
          g.warn(
            "This browser does not have Promise support, and can not use the segment integration",
          );
        const n = (r, o) => {
          var a;
          if (!o) return r;
          (r.event.userId ||
            r.event.anonymousId === i.get_distinct_id() ||
            (g.info(
              "Segment integration does not have a userId set, resetting PostHog",
            ),
            i.reset()),
            r.event.userId &&
              r.event.userId !== i.get_distinct_id() &&
              (g.info(
                "Segment integration has a userId set, identifying with PostHog",
              ),
              i.identify(r.event.userId)));
          const l = i._calculate_event_properties(
            o,
            (a = r.event.properties) !== null && a !== void 0 ? a : {},
            new Date(),
          );
          return (
            (r.event.properties = Object.assign({}, l, r.event.properties)),
            r
          );
        };
        return {
          name: "PostHog JS",
          type: "enrichment",
          version: "1.0.0",
          isLoaded: () => !0,
          load: () => Promise.resolve(),
          track: (r) => n(r, r.event.event),
          page: (r) => n(r, "$pageview"),
          identify: (r) => n(r, "$identify"),
          screen: (r) => n(r, "$screen"),
        };
      })(s),
    ).then(() => {
      e();
    });
  });
}
class vo {
  constructor(e) {
    this._instance = e;
  }
  doPageView(e) {
    var t;
    const i = this._previousPageViewProperties(e);
    return (
      (this._currentPath =
        (t = p?.location.pathname) !== null && t !== void 0 ? t : ""),
      this._instance.scrollManager.resetContext(),
      (this._prevPageviewTimestamp = e),
      i
    );
  }
  doPageLeave(e) {
    return this._previousPageViewProperties(e);
  }
  _previousPageViewProperties(e) {
    const t = this._currentPath,
      i = this._prevPageviewTimestamp,
      n = this._instance.scrollManager.getContext();
    if (!i) return {};
    let r = {};
    if (n) {
      let {
        maxScrollHeight: o,
        lastScrollY: a,
        maxScrollY: l,
        maxContentHeight: c,
        lastContentY: d,
        maxContentY: u,
      } = n;
      S(o) ||
        S(a) ||
        S(l) ||
        S(c) ||
        S(d) ||
        S(u) ||
        ((o = Math.ceil(o)),
        (a = Math.ceil(a)),
        (l = Math.ceil(l)),
        (c = Math.ceil(c)),
        (d = Math.ceil(d)),
        (u = Math.ceil(u)),
        (r = {
          $prev_pageview_last_scroll: a,
          $prev_pageview_last_scroll_percentage: o <= 1 ? 1 : me(a / o, 0, 1),
          $prev_pageview_max_scroll: l,
          $prev_pageview_max_scroll_percentage: o <= 1 ? 1 : me(l / o, 0, 1),
          $prev_pageview_last_content: d,
          $prev_pageview_last_content_percentage: c <= 1 ? 1 : me(d / c, 0, 1),
          $prev_pageview_max_content: u,
          $prev_pageview_max_content_percentage: c <= 1 ? 1 : me(u / c, 0, 1),
        }));
    }
    return (
      t && (r.$prev_pageview_pathname = t),
      i && (r.$prev_pageview_duration = (e.getTime() - i.getTime()) / 1e3),
      r
    );
  }
}
let Hs, jt, oe;
((function (s) {
  ((s.Popover = "popover"), (s.API = "api"), (s.Widget = "widget"));
})(Hs || (Hs = {})),
  (function (s) {
    ((s.Open = "open"),
      (s.MultipleChoice = "multiple_choice"),
      (s.SingleChoice = "single_choice"),
      (s.Rating = "rating"),
      (s.Link = "link"));
  })(jt || (jt = {})),
  (function (s) {
    ((s.NextQuestion = "next_question"),
      (s.End = "end"),
      (s.ResponseBased = "response_based"),
      (s.SpecificQuestion = "specific_question"));
  })(oe || (oe = {})));
class qn {
  events = {};
  constructor() {
    this.events = {};
  }
  on(e, t) {
    return (
      this.events[e] || (this.events[e] = []),
      this.events[e].push(t),
      () => {
        this.events[e] = this.events[e].filter((i) => i !== t);
      }
    );
  }
  emit(e, t) {
    for (const i of this.events[e] || []) i(t);
    for (const i of this.events["*"] || []) i(e, t);
  }
}
class Be {
  _debugEventEmitter = new qn();
  constructor(e) {
    ((this.instance = e),
      (this.actionEvents = new Set()),
      (this.actionRegistry = new Set()));
  }
  init() {
    var e;
    if (
      !S(
        (e = this.instance) === null || e === void 0
          ? void 0
          : e._addCaptureHook,
      )
    ) {
      var t;
      const i = (n, r) => {
        this.on(n, r);
      };
      (t = this.instance) === null || t === void 0 || t._addCaptureHook(i);
    }
  }
  register(e) {
    var t, i;
    if (
      !S(
        (t = this.instance) === null || t === void 0
          ? void 0
          : t._addCaptureHook,
      ) &&
      (e.forEach((r) => {
        var o, a;
        ((o = this.actionRegistry) === null || o === void 0 || o.add(r),
          (a = r.steps) === null ||
            a === void 0 ||
            a.forEach((l) => {
              var c;
              (c = this.actionEvents) === null ||
                c === void 0 ||
                c.add(l?.event || "");
            }));
      }),
      (i = this.instance) !== null && i !== void 0 && i.autocapture)
    ) {
      var n;
      const r = new Set();
      (e.forEach((o) => {
        var a;
        (a = o.steps) === null ||
          a === void 0 ||
          a.forEach((l) => {
            l != null && l.selector && r.add(l?.selector);
          });
      }),
        (n = this.instance) === null ||
          n === void 0 ||
          n.autocapture.setElementSelectors(r));
    }
  }
  on(e, t) {
    var i;
    t != null &&
      e.length != 0 &&
      (this.actionEvents.has(e) || this.actionEvents.has(t?.event)) &&
      this.actionRegistry &&
      ((i = this.actionRegistry) === null || i === void 0 ? void 0 : i.size) >
        0 &&
      this.actionRegistry.forEach((n) => {
        this.checkAction(t, n) &&
          this._debugEventEmitter.emit("actionCaptured", n.name);
      });
  }
  _addActionHook(e) {
    this.onAction("actionCaptured", (t) => e(t));
  }
  checkAction(e, t) {
    if (t?.steps == null) return !1;
    for (const i of t.steps) if (this.checkStep(e, i)) return !0;
    return !1;
  }
  onAction(e, t) {
    return this._debugEventEmitter.on(e, t);
  }
  checkStep = (e, t) =>
    this.checkStepEvent(e, t) &&
    this.checkStepUrl(e, t) &&
    this.checkStepElement(e, t);
  checkStepEvent = (e, t) => t == null || !t.event || e?.event === t?.event;
  checkStepUrl(e, t) {
    if (t != null && t.url) {
      var i;
      const n =
        e == null || (i = e.properties) === null || i === void 0
          ? void 0
          : i.$current_url;
      if (
        !n ||
        typeof n != "string" ||
        !Be.matchString(n, t?.url, t?.url_matching || "contains")
      )
        return !1;
    }
    return !0;
  }
  static matchString(e, t, i) {
    switch (i) {
      case "regex":
        return !!p && Ze(e, t);
      case "exact":
        return t === e;
      case "contains":
        const n = Be.escapeStringRegexp(t)
          .replace(/_/g, ".")
          .replace(/%/g, ".*");
        return Ze(e, n);
      default:
        return !1;
    }
  }
  static escapeStringRegexp(e) {
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  checkStepElement(e, t) {
    if (
      ((t != null && t.href) ||
        (t != null && t.tag_name) ||
        (t != null && t.text)) &&
      !this.getElementsList(e).some(
        (n) =>
          !(
            t != null &&
            t.href &&
            !Be.matchString(n.href || "", t?.href, t?.href_matching || "exact")
          ) &&
          (t == null || !t.tag_name || n.tag_name === t?.tag_name) &&
          !(
            t != null &&
            t.text &&
            !Be.matchString(
              n.text || "",
              t?.text,
              t?.text_matching || "exact",
            ) &&
            !Be.matchString(
              n.$el_text || "",
              t?.text,
              t?.text_matching || "exact",
            )
          ),
      )
    )
      return !1;
    if (t != null && t.selector) {
      var i;
      const n =
        e == null || (i = e.properties) === null || i === void 0
          ? void 0
          : i.$element_selectors;
      if (!n || !n.includes(t?.selector)) return !1;
    }
    return !0;
  }
  getElementsList(e) {
    return e?.properties.$elements == null ? [] : e?.properties.$elements;
  }
}
class Qt {
  static SURVEY_SHOWN_EVENT_NAME = "survey shown";
  constructor(e) {
    ((this.instance = e),
      (this.eventToSurveys = new Map()),
      (this.actionToSurveys = new Map()));
  }
  register(e) {
    var t;
    S(
      (t = this.instance) === null || t === void 0 ? void 0 : t._addCaptureHook,
    ) || (this.setupEventBasedSurveys(e), this.setupActionBasedSurveys(e));
  }
  setupActionBasedSurveys(e) {
    const t = e.filter((i) => {
      var n, r, o, a;
      return (
        ((n = i.conditions) === null || n === void 0 ? void 0 : n.actions) &&
        ((r = i.conditions) === null ||
        r === void 0 ||
        (o = r.actions) === null ||
        o === void 0 ||
        (a = o.values) === null ||
        a === void 0
          ? void 0
          : a.length) > 0
      );
    });
    if (t.length !== 0) {
      if (this.actionMatcher == null) {
        ((this.actionMatcher = new Be(this.instance)),
          this.actionMatcher.init());
        const i = (n) => {
          this.onAction(n);
        };
        this.actionMatcher._addActionHook(i);
      }
      t.forEach((i) => {
        var n, r, o, a, l, c, d, u, h, _;
        i.conditions &&
          (n = i.conditions) !== null &&
          n !== void 0 &&
          n.actions &&
          (r = i.conditions) !== null &&
          r !== void 0 &&
          (o = r.actions) !== null &&
          o !== void 0 &&
          o.values &&
          ((a = i.conditions) === null ||
          a === void 0 ||
          (l = a.actions) === null ||
          l === void 0 ||
          (c = l.values) === null ||
          c === void 0
            ? void 0
            : c.length) > 0 &&
          ((d = this.actionMatcher) === null ||
            d === void 0 ||
            d.register(i.conditions.actions.values),
          (u = i.conditions) === null ||
            u === void 0 ||
            (h = u.actions) === null ||
            h === void 0 ||
            (_ = h.values) === null ||
            _ === void 0 ||
            _.forEach((f) => {
              if (f && f.name) {
                const v = this.actionToSurveys.get(f.name);
                (v && v.push(i.id),
                  this.actionToSurveys.set(f.name, v || [i.id]));
              }
            }));
      });
    }
  }
  setupEventBasedSurveys(e) {
    var t;
    e.filter((i) => {
      var n, r, o, a;
      return (
        ((n = i.conditions) === null || n === void 0 ? void 0 : n.events) &&
        ((r = i.conditions) === null ||
        r === void 0 ||
        (o = r.events) === null ||
        o === void 0 ||
        (a = o.values) === null ||
        a === void 0
          ? void 0
          : a.length) > 0
      );
    }).length !== 0 &&
      ((t = this.instance) === null ||
        t === void 0 ||
        t._addCaptureHook((i, n) => {
          this.onEvent(i, n);
        }),
      e.forEach((i) => {
        var n, r, o;
        (n = i.conditions) === null ||
          n === void 0 ||
          (r = n.events) === null ||
          r === void 0 ||
          (o = r.values) === null ||
          o === void 0 ||
          o.forEach((a) => {
            if (a && a.name) {
              const l = this.eventToSurveys.get(a.name);
              (l && l.push(i.id), this.eventToSurveys.set(a.name, l || [i.id]));
            }
          });
      }));
  }
  onEvent(e, t) {
    var i, n;
    const r =
      ((i = this.instance) === null ||
      i === void 0 ||
      (n = i.persistence) === null ||
      n === void 0
        ? void 0
        : n.props[Et]) || [];
    if (Qt.SURVEY_SHOWN_EVENT_NAME == e && t && r.length > 0) {
      var o;
      const a =
        t == null || (o = t.properties) === null || o === void 0
          ? void 0
          : o.$survey_id;
      if (a) {
        const l = r.indexOf(a);
        l >= 0 && (r.splice(l, 1), this._updateActivatedSurveys(r));
      }
    } else
      this.eventToSurveys.has(e) &&
        this._updateActivatedSurveys(
          r.concat(this.eventToSurveys.get(e) || []),
        );
  }
  onAction(e) {
    var t, i;
    const n =
      ((t = this.instance) === null ||
      t === void 0 ||
      (i = t.persistence) === null ||
      i === void 0
        ? void 0
        : i.props[Et]) || [];
    this.actionToSurveys.has(e) &&
      this._updateActivatedSurveys(n.concat(this.actionToSurveys.get(e) || []));
  }
  _updateActivatedSurveys(e) {
    var t, i;
    (t = this.instance) === null ||
      t === void 0 ||
      (i = t.persistence) === null ||
      i === void 0 ||
      i.register({ [Et]: [...new Set(e)] });
  }
  getSurveys() {
    var e, t;
    return (
      ((e = this.instance) === null ||
      e === void 0 ||
      (t = e.persistence) === null ||
      t === void 0
        ? void 0
        : t.props[Et]) || []
    );
  }
  getEventToSurveys() {
    return this.eventToSurveys;
  }
  _getActionMatcher() {
    return this.actionMatcher;
  }
}
var Bn,
  A,
  Hn,
  He,
  Us,
  Un,
  Mi,
  Wn,
  Ai = {},
  zn = [],
  mo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  ji = Array.isArray;
function Ce(s, e) {
  for (var t in e) s[t] = e[t];
  return s;
}
function Vn(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function li(s, e, t, i, n) {
  var r = {
    type: s,
    props: e,
    key: t,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: n ?? ++Hn,
    __i: -1,
    __u: 0,
  };
  return (n == null && A.vnode != null && A.vnode(r), r);
}
function Qi(s) {
  return s.children;
}
function Mt(s, e) {
  ((this.props = s), (this.context = e));
}
function st(s, e) {
  if (e == null) return s.__ ? st(s.__, s.__i + 1) : null;
  for (var t; e < s.__k.length; e++)
    if ((t = s.__k[e]) != null && t.__e != null) return t.__e;
  return typeof s.type == "function" ? st(s) : null;
}
function Gn(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return Gn(s);
  }
}
function Li(s) {
  ((!s.__d && (s.__d = !0) && He.push(s) && !Jt.__r++) ||
    Us !== A.debounceRendering) &&
    ((Us = A.debounceRendering) || Un)(Jt);
}
function Jt() {
  var s, e, t, i, n, r, o, a, l;
  for (He.sort(Mi); (s = He.shift()); )
    s.__d &&
      ((e = He.length),
      (i = void 0),
      (r = (n = (t = s).__v).__e),
      (a = []),
      (l = []),
      (o = t.__P) &&
        (((i = Ce({}, n)).__v = n.__v + 1),
        A.vnode && A.vnode(i),
        Jn(
          o,
          i,
          n,
          t.__n,
          o.ownerSVGElement !== void 0,
          32 & n.__u ? [r] : null,
          a,
          r ?? st(n),
          !!(32 & n.__u),
          l,
        ),
        (i.__.__k[i.__i] = i),
        wo(a, i, l),
        i.__e != r && Gn(i)),
      He.length > e && He.sort(Mi));
  Jt.__r = 0;
}
function jn(s, e, t, i, n, r, o, a, l, c, d) {
  var u,
    h,
    _,
    f,
    v,
    b = (i && i.__k) || zn,
    w = e.length;
  for (t.__d = l, yo(t, e, b), l = t.__d, u = 0; u < w; u++)
    (_ = t.__k[u]) != null &&
      typeof _ != "boolean" &&
      typeof _ != "function" &&
      ((h = _.__i === -1 ? Ai : b[_.__i] || Ai),
      (_.__i = u),
      Jn(s, _, h, n, r, o, a, l, c, d),
      (f = _.__e),
      _.ref &&
        h.ref != _.ref &&
        (h.ref && Ji(h.ref, null, _), d.push(_.ref, _.__c || f, _)),
      v == null && f != null && (v = f),
      65536 & _.__u || h.__k === _.__k
        ? (l = Qn(_, l, s))
        : typeof _.type == "function" && _.__d !== void 0
          ? (l = _.__d)
          : f && (l = f.nextSibling),
      (_.__d = void 0),
      (_.__u &= -196609));
  ((t.__d = l), (t.__e = v));
}
function yo(s, e, t) {
  var i,
    n,
    r,
    o,
    a,
    l = e.length,
    c = t.length,
    d = c,
    u = 0;
  for (s.__k = [], i = 0; i < l; i++)
    (n = s.__k[i] =
      (n = e[i]) == null || typeof n == "boolean" || typeof n == "function"
        ? null
        : typeof n == "string" ||
            typeof n == "number" ||
            typeof n == "bigint" ||
            n.constructor == String
          ? li(null, n, null, null, n)
          : ji(n)
            ? li(Qi, { children: n }, null, null, null)
            : n.constructor === void 0 && n.__b > 0
              ? li(n.type, n.props, n.key, n.ref ? n.ref : null, n.__v)
              : n) != null
      ? ((n.__ = s),
        (n.__b = s.__b + 1),
        (a = bo(n, t, (o = i + u), d)),
        (n.__i = a),
        (r = null),
        a !== -1 && (d--, (r = t[a]) && (r.__u |= 131072)),
        r == null || r.__v === null
          ? (a == -1 && u--, typeof n.type != "function" && (n.__u |= 65536))
          : a !== o &&
            (a === o + 1
              ? u++
              : a > o
                ? d > l - o
                  ? (u += a - o)
                  : u--
                : (u = a < o && a == o - 1 ? a - o : 0),
            a !== i + u && (n.__u |= 65536)))
      : (r = t[i]) &&
        r.key == null &&
        r.__e &&
        (r.__e == s.__d && (s.__d = st(r)), Di(r, r, !1), (t[i] = null), d--);
  if (d)
    for (i = 0; i < c; i++)
      (r = t[i]) != null &&
        !(131072 & r.__u) &&
        (r.__e == s.__d && (s.__d = st(r)), Di(r, r));
}
function Qn(s, e, t) {
  var i, n;
  if (typeof s.type == "function") {
    for (i = s.__k, n = 0; i && n < i.length; n++)
      i[n] && ((i[n].__ = s), (e = Qn(i[n], e, t)));
    return e;
  }
  return (
    s.__e != e && (t.insertBefore(s.__e, e || null), (e = s.__e)),
    e && e.nextSibling
  );
}
function bo(s, e, t, i) {
  var n = s.key,
    r = s.type,
    o = t - 1,
    a = t + 1,
    l = e[t];
  if (l === null || (l && n == l.key && r === l.type)) return t;
  if (i > (l != null && !(131072 & l.__u) ? 1 : 0))
    for (; o >= 0 || a < e.length; ) {
      if (o >= 0) {
        if ((l = e[o]) && !(131072 & l.__u) && n == l.key && r === l.type)
          return o;
        o--;
      }
      if (a < e.length) {
        if ((l = e[a]) && !(131072 & l.__u) && n == l.key && r === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Ws(s, e, t) {
  e[0] === "-"
    ? s.setProperty(e, t ?? "")
    : (s[e] =
        t == null ? "" : typeof t != "number" || mo.test(e) ? t : t + "px");
}
function Ft(s, e, t, i, n) {
  var r;
  e: if (e === "style")
    if (typeof t == "string") s.style.cssText = t;
    else {
      if ((typeof i == "string" && (s.style.cssText = i = ""), i))
        for (e in i) (t && e in t) || Ws(s.style, e, "");
      if (t) for (e in t) (i && t[e] === i[e]) || Ws(s.style, e, t[e]);
    }
  else if (e[0] === "o" && e[1] === "n")
    ((r = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1"))),
      (e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2)),
      s.l || (s.l = {}),
      (s.l[e + r] = t),
      t
        ? i
          ? (t.u = i.u)
          : ((t.u = Date.now()), s.addEventListener(e, r ? Vs : zs, r))
        : s.removeEventListener(e, r ? Vs : zs, r));
  else {
    if (n) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      e !== "width" &&
      e !== "height" &&
      e !== "href" &&
      e !== "list" &&
      e !== "form" &&
      e !== "tabIndex" &&
      e !== "download" &&
      e !== "rowSpan" &&
      e !== "colSpan" &&
      e !== "role" &&
      e in s
    )
      try {
        s[e] = t ?? "";
        break e;
      } catch {}
    typeof t == "function" ||
      (t == null || (t === !1 && e[4] !== "-")
        ? s.removeAttribute(e)
        : s.setAttribute(e, t));
  }
}
function zs(s) {
  var e = this.l[s.type + !1];
  if (s.t) {
    if (s.t <= e.u) return;
  } else s.t = Date.now();
  return e(A.event ? A.event(s) : s);
}
function Vs(s) {
  return this.l[s.type + !0](A.event ? A.event(s) : s);
}
function Jn(s, e, t, i, n, r, o, a, l, c) {
  var d,
    u,
    h,
    _,
    f,
    v,
    b,
    w,
    y,
    k,
    T,
    P,
    O,
    C,
    x,
    $ = e.type;
  if (e.constructor !== void 0) return null;
  (128 & t.__u && ((l = !!(32 & t.__u)), (r = [(a = e.__e = t.__e)])),
    (d = A.__b) && d(e));
  e: if (typeof $ == "function")
    try {
      if (
        ((w = e.props),
        (y = (d = $.contextType) && i[d.__c]),
        (k = d ? (y ? y.props.value : d.__) : i),
        t.__c
          ? (b = (u = e.__c = t.__c).__ = u.__E)
          : ("prototype" in $ && $.prototype.render
              ? (e.__c = u = new $(w, k))
              : ((e.__c = u = new Mt(w, k)),
                (u.constructor = $),
                (u.render = Eo)),
            y && y.sub(u),
            (u.props = w),
            u.state || (u.state = {}),
            (u.context = k),
            (u.__n = i),
            (h = u.__d = !0),
            (u.__h = []),
            (u._sb = [])),
        u.__s == null && (u.__s = u.state),
        $.getDerivedStateFromProps != null &&
          (u.__s == u.state && (u.__s = Ce({}, u.__s)),
          Ce(u.__s, $.getDerivedStateFromProps(w, u.__s))),
        (_ = u.props),
        (f = u.state),
        (u.__v = e),
        h)
      )
        ($.getDerivedStateFromProps == null &&
          u.componentWillMount != null &&
          u.componentWillMount(),
          u.componentDidMount != null && u.__h.push(u.componentDidMount));
      else {
        if (
          ($.getDerivedStateFromProps == null &&
            w !== _ &&
            u.componentWillReceiveProps != null &&
            u.componentWillReceiveProps(w, k),
          !u.__e &&
            ((u.shouldComponentUpdate != null &&
              u.shouldComponentUpdate(w, u.__s, k) === !1) ||
              e.__v === t.__v))
        ) {
          for (
            e.__v !== t.__v && ((u.props = w), (u.state = u.__s), (u.__d = !1)),
              e.__e = t.__e,
              e.__k = t.__k,
              e.__k.forEach(function (z) {
                z && (z.__ = e);
              }),
              T = 0;
            T < u._sb.length;
            T++
          )
            u.__h.push(u._sb[T]);
          ((u._sb = []), u.__h.length && o.push(u));
          break e;
        }
        (u.componentWillUpdate != null && u.componentWillUpdate(w, u.__s, k),
          u.componentDidUpdate != null &&
            u.__h.push(function () {
              u.componentDidUpdate(_, f, v);
            }));
      }
      if (
        ((u.context = k),
        (u.props = w),
        (u.__P = s),
        (u.__e = !1),
        (P = A.__r),
        (O = 0),
        "prototype" in $ && $.prototype.render)
      ) {
        for (
          u.state = u.__s,
            u.__d = !1,
            P && P(e),
            d = u.render(u.props, u.state, u.context),
            C = 0;
          C < u._sb.length;
          C++
        )
          u.__h.push(u._sb[C]);
        u._sb = [];
      } else
        do
          ((u.__d = !1),
            P && P(e),
            (d = u.render(u.props, u.state, u.context)),
            (u.state = u.__s));
        while (u.__d && ++O < 25);
      ((u.state = u.__s),
        u.getChildContext != null && (i = Ce(Ce({}, i), u.getChildContext())),
        h ||
          u.getSnapshotBeforeUpdate == null ||
          (v = u.getSnapshotBeforeUpdate(_, f)),
        jn(
          s,
          ji(
            (x =
              d != null && d.type === Qi && d.key == null
                ? d.props.children
                : d),
          )
            ? x
            : [x],
          e,
          t,
          i,
          n,
          r,
          o,
          a,
          l,
          c,
        ),
        (u.base = e.__e),
        (e.__u &= -161),
        u.__h.length && o.push(u),
        b && (u.__E = u.__ = null));
    } catch (z) {
      ((e.__v = null),
        l || r != null
          ? ((e.__e = a), (e.__u |= l ? 160 : 32), (r[r.indexOf(a)] = null))
          : ((e.__e = t.__e), (e.__k = t.__k)),
        A.__e(z, e, t));
    }
  else
    r == null && e.__v === t.__v
      ? ((e.__k = t.__k), (e.__e = t.__e))
      : (e.__e = So(t.__e, e, t, i, n, r, o, l, c));
  (d = A.diffed) && d(e);
}
function wo(s, e, t) {
  e.__d = void 0;
  for (var i = 0; i < t.length; i++) Ji(t[i], t[++i], t[++i]);
  (A.__c && A.__c(e, s),
    s.some(function (n) {
      try {
        ((s = n.__h),
          (n.__h = []),
          s.some(function (r) {
            r.call(n);
          }));
      } catch (r) {
        A.__e(r, n.__v);
      }
    }));
}
function So(s, e, t, i, n, r, o, a, l) {
  var c,
    d,
    u,
    h,
    _,
    f,
    v,
    b = t.props,
    w = e.props,
    y = e.type;
  if ((y === "svg" && (n = !0), r != null)) {
    for (c = 0; c < r.length; c++)
      if (
        (_ = r[c]) &&
        "setAttribute" in _ == !!y &&
        (y ? _.localName === y : _.nodeType === 3)
      ) {
        ((s = _), (r[c] = null));
        break;
      }
  }
  if (s == null) {
    if (y === null) return document.createTextNode(w);
    ((s = n
      ? document.createElementNS("http://www.w3.org/2000/svg", y)
      : document.createElement(y, w.is && w)),
      (r = null),
      (a = !1));
  }
  if (y === null) b === w || (a && s.data === w) || (s.data = w);
  else {
    if (
      ((r = r && Bn.call(s.childNodes)), (b = t.props || Ai), !a && r != null)
    )
      for (b = {}, c = 0; c < s.attributes.length; c++)
        b[(_ = s.attributes[c]).name] = _.value;
    for (c in b)
      ((_ = b[c]),
        c == "children" ||
          (c == "dangerouslySetInnerHTML"
            ? (u = _)
            : c === "key" || c in w || Ft(s, c, null, _, n)));
    for (c in w)
      ((_ = w[c]),
        c == "children"
          ? (h = _)
          : c == "dangerouslySetInnerHTML"
            ? (d = _)
            : c == "value"
              ? (f = _)
              : c == "checked"
                ? (v = _)
                : c === "key" ||
                  (a && typeof _ != "function") ||
                  b[c] === _ ||
                  Ft(s, c, _, b[c], n));
    if (d)
      (a ||
        (u && (d.__html === u.__html || d.__html === s.innerHTML)) ||
        (s.innerHTML = d.__html),
        (e.__k = []));
    else if (
      (u && (s.innerHTML = ""),
      jn(
        s,
        ji(h) ? h : [h],
        e,
        t,
        i,
        n && y !== "foreignObject",
        r,
        o,
        r ? r[0] : t.__k && st(t, 0),
        a,
        l,
      ),
      r != null)
    )
      for (c = r.length; c--; ) r[c] != null && Vn(r[c]);
    a ||
      ((c = "value"),
      f !== void 0 &&
        (f !== s[c] ||
          (y === "progress" && !f) ||
          (y === "option" && f !== b[c])) &&
        Ft(s, c, f, b[c], !1),
      (c = "checked"),
      v !== void 0 && v !== s[c] && Ft(s, c, v, b[c], !1));
  }
  return s;
}
function Ji(s, e, t) {
  try {
    typeof s == "function" ? s(e) : (s.current = e);
  } catch (i) {
    A.__e(i, t);
  }
}
function Di(s, e, t) {
  var i, n;
  if (
    (A.unmount && A.unmount(s),
    (i = s.ref) && ((i.current && i.current !== s.__e) || Ji(i, null, e)),
    (i = s.__c) != null)
  ) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount();
      } catch (r) {
        A.__e(r, e);
      }
    ((i.base = i.__P = null), (s.__c = void 0));
  }
  if ((i = s.__k))
    for (n = 0; n < i.length; n++)
      i[n] && Di(i[n], e, t || typeof s.type != "function");
  (t || s.__e == null || Vn(s.__e), (s.__ = s.__e = s.__d = void 0));
}
function Eo(s, e, t) {
  return this.constructor(s, t);
}
((Bn = zn.slice),
  (A = {
    __e: function (s, e, t, i) {
      for (var n, r, o; (e = e.__); )
        if ((n = e.__c) && !n.__)
          try {
            if (
              ((r = n.constructor) &&
                r.getDerivedStateFromError != null &&
                (n.setState(r.getDerivedStateFromError(s)), (o = n.__d)),
              n.componentDidCatch != null &&
                (n.componentDidCatch(s, i || {}), (o = n.__d)),
              o)
            )
              return (n.__E = n);
          } catch (a) {
            s = a;
          }
      throw s;
    },
  }),
  (Hn = 0),
  (Mt.prototype.setState = function (s, e) {
    var t;
    ((t =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = Ce({}, this.state))),
      typeof s == "function" && (s = s(Ce({}, t), this.props)),
      s && Ce(t, s),
      s != null && this.__v && (e && this._sb.push(e), Li(this)));
  }),
  (Mt.prototype.forceUpdate = function (s) {
    this.__v && ((this.__e = !0), s && this.__h.push(s), Li(this));
  }),
  (Mt.prototype.render = Qi),
  (He = []),
  (Un =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Mi = function (s, e) {
    return s.__v.__b - e.__v.__b;
  }),
  (Jt.__r = 0),
  (Wn = 0));
(function (s, e) {
  var t = {
    __c: (e = "__cC" + Wn++),
    __: s,
    Consumer: function (i, n) {
      return i.children(n);
    },
    Provider: function (i) {
      var n, r;
      return (
        this.getChildContext ||
          ((n = []),
          ((r = {})[e] = this),
          (this.getChildContext = function () {
            return r;
          }),
          (this.shouldComponentUpdate = function (o) {
            this.props.value !== o.value &&
              n.some(function (a) {
                ((a.__e = !0), Li(a));
              });
          }),
          (this.sub = function (o) {
            n.push(o);
            var a = o.componentWillUnmount;
            o.componentWillUnmount = function () {
              (n.splice(n.indexOf(o), 1), a && a.call(o));
            };
          })),
        i.children
      );
    },
  };
  t.Provider.__ = t.Consumer.contextType = t;
})({
  isPreviewMode: !1,
  previewPageIndex: 0,
  handleCloseSurveyPopup: () => {},
  isPopup: !0,
});
const at = "[Surveys]",
  xo = {
    icontains: (s) =>
      !!p && p.location.href.toLowerCase().indexOf(s.toLowerCase()) > -1,
    not_icontains: (s) =>
      !!p && p.location.href.toLowerCase().indexOf(s.toLowerCase()) === -1,
    regex: (s) => !!p && Ze(p.location.href, s),
    not_regex: (s) => !!p && !Ze(p.location.href, s),
    exact: (s) => p?.location.href === s,
    is_not: (s) => p?.location.href !== s,
  };
class ko {
  constructor(e) {
    ((this.instance = e), (this._surveyEventReceiver = null));
  }
  afterDecideResponse(e) {
    ((this._decideServerResponse = !!e.surveys), this.loadIfEnabled());
  }
  reset() {
    (localStorage.removeItem("lastSeenSurveyDate"),
      (() => {
        const t = [];
        for (let i = 0; i < localStorage.length; i++) {
          const n = localStorage.key(i);
          n != null && n.startsWith("seenSurvey_") && t.push(n);
        }
        return t;
      })().forEach((t) => localStorage.removeItem(t)));
  }
  loadIfEnabled() {
    var e;
    const t =
      E == null || (e = E.__PosthogExtensions__) === null || e === void 0
        ? void 0
        : e.generateSurveys;
    var i, n;
    this.instance.config.disable_surveys ||
      !this._decideServerResponse ||
      t ||
      (this._surveyEventReceiver == null &&
        (this._surveyEventReceiver = new Qt(this.instance)),
      (i = E.__PosthogExtensions__) === null ||
        i === void 0 ||
        (n = i.loadExternalDependency) === null ||
        n === void 0 ||
        n.call(i, this.instance, "surveys", (r) => {
          var o, a;
          if (r) return g.error(at, "Could not load surveys script", r);
          this._surveyManager =
            (o = E.__PosthogExtensions__) === null ||
            o === void 0 ||
            (a = o.generateSurveys) === null ||
            a === void 0
              ? void 0
              : a.call(o, this.instance);
        }));
  }
  getSurveys(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    if (this.instance.config.disable_surveys) return e([]);
    this._surveyEventReceiver == null &&
      (this._surveyEventReceiver = new Qt(this.instance));
    const i = this.instance.get_property(gi);
    if (i && !t) return e(i);
    this.instance._send_request({
      url: this.instance.requestRouter.endpointFor(
        "api",
        `/api/surveys/?token=${this.instance.config.token}`,
      ),
      method: "GET",
      transport: "XHR",
      callback: (n) => {
        var r;
        if (n.statusCode !== 200 || !n.json) return e([]);
        const o = n.json.surveys || [],
          a = o.filter((c) => {
            var d, u, h, _, f, v, b, w, y, k, T, P;
            return (
              (((d = c.conditions) === null || d === void 0
                ? void 0
                : d.events) &&
                ((u = c.conditions) === null ||
                u === void 0 ||
                (h = u.events) === null ||
                h === void 0
                  ? void 0
                  : h.values) &&
                ((_ = c.conditions) === null ||
                _ === void 0 ||
                (f = _.events) === null ||
                f === void 0 ||
                (v = f.values) === null ||
                v === void 0
                  ? void 0
                  : v.length) > 0) ||
              (((b = c.conditions) === null || b === void 0
                ? void 0
                : b.actions) &&
                ((w = c.conditions) === null ||
                w === void 0 ||
                (y = w.actions) === null ||
                y === void 0
                  ? void 0
                  : y.values) &&
                ((k = c.conditions) === null ||
                k === void 0 ||
                (T = k.actions) === null ||
                T === void 0 ||
                (P = T.values) === null ||
                P === void 0
                  ? void 0
                  : P.length) > 0)
            );
          });
        var l;
        return (
          a.length > 0 &&
            ((l = this._surveyEventReceiver) === null ||
              l === void 0 ||
              l.register(a)),
          (r = this.instance.persistence) === null ||
            r === void 0 ||
            r.register({ [gi]: o }),
          e(o)
        );
      },
    });
  }
  getActiveMatchingSurveys(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    this.getSurveys((i) => {
      var n;
      const r = i
          .filter((l) => !(!l.start_date || l.end_date))
          .filter((l) => {
            var c, d, u, h;
            if (!l.conditions) return !0;
            const _ =
                (c = l.conditions) === null ||
                c === void 0 ||
                !c.url ||
                xo[
                  (d =
                    (u = l.conditions) === null || u === void 0
                      ? void 0
                      : u.urlMatchType) !== null && d !== void 0
                    ? d
                    : "icontains"
                ](l.conditions.url),
              f =
                (h = l.conditions) === null ||
                h === void 0 ||
                !h.selector ||
                m?.querySelector(l.conditions.selector);
            return _ && f;
          }),
        o =
          (n = this._surveyEventReceiver) === null || n === void 0
            ? void 0
            : n.getSurveys(),
        a = r.filter((l) => {
          var c, d, u, h, _, f, v, b, w, y;
          if (
            !l.linked_flag_key &&
            !l.targeting_flag_key &&
            !l.internal_targeting_flag_key
          )
            return !0;
          const k =
              !l.linked_flag_key ||
              this.instance.featureFlags.isFeatureEnabled(l.linked_flag_key),
            T =
              !l.targeting_flag_key ||
              this.instance.featureFlags.isFeatureEnabled(l.targeting_flag_key),
            P =
              ((c = l.conditions) === null || c === void 0
                ? void 0
                : c.events) &&
              ((d = l.conditions) === null ||
              d === void 0 ||
              (u = d.events) === null ||
              u === void 0
                ? void 0
                : u.values) &&
              ((h = l.conditions) === null ||
              h === void 0 ||
              (_ = h.events) === null ||
              _ === void 0
                ? void 0
                : _.values.length) > 0,
            O =
              ((f = l.conditions) === null || f === void 0
                ? void 0
                : f.actions) &&
              ((v = l.conditions) === null ||
              v === void 0 ||
              (b = v.actions) === null ||
              b === void 0
                ? void 0
                : b.values) &&
              ((w = l.conditions) === null ||
              w === void 0 ||
              (y = w.actions) === null ||
              y === void 0
                ? void 0
                : y.values.length) > 0,
            C = (!P && !O) || o?.includes(l.id),
            x = this._canActivateRepeatedly(l),
            $ =
              !(l.internal_targeting_flag_key && !x) ||
              this.instance.featureFlags.isFeatureEnabled(
                l.internal_targeting_flag_key,
              );
          return k && T && $ && C;
        });
      return e(a);
    }, t);
  }
  getNextSurveyStep(e, t, i) {
    var n;
    const r = e.questions[t],
      o = t + 1;
    if ((n = r.branching) === null || n === void 0 || !n.type)
      return t === e.questions.length - 1 ? oe.End : o;
    if (r.branching.type === oe.End) return oe.End;
    if (r.branching.type === oe.SpecificQuestion) {
      if (Number.isInteger(r.branching.index)) return r.branching.index;
    } else if (r.branching.type === oe.ResponseBased) {
      if (r.type === jt.SingleChoice) {
        var a, l;
        const u = r.choices.indexOf(`${i}`);
        if (
          (a = r.branching) !== null &&
          a !== void 0 &&
          (l = a.responseValues) !== null &&
          l !== void 0 &&
          l.hasOwnProperty(u)
        ) {
          const h = r.branching.responseValues[u];
          return Number.isInteger(h) ? h : h === oe.End ? oe.End : o;
        }
      } else if (r.type === jt.Rating) {
        var c, d;
        if (typeof i != "number" || !Number.isInteger(i))
          throw new Error("The response type must be an integer");
        const u = (function (h, _) {
          if (_ === 3) {
            if (h < 1 || h > 3)
              throw new Error("The response must be in range 1-3");
            return h === 1 ? "negative" : h === 2 ? "neutral" : "positive";
          }
          if (_ === 5) {
            if (h < 1 || h > 5)
              throw new Error("The response must be in range 1-5");
            return h <= 2 ? "negative" : h === 3 ? "neutral" : "positive";
          }
          if (_ === 7) {
            if (h < 1 || h > 7)
              throw new Error("The response must be in range 1-7");
            return h <= 3 ? "negative" : h === 4 ? "neutral" : "positive";
          }
          if (_ === 10) {
            if (h < 0 || h > 10)
              throw new Error("The response must be in range 0-10");
            return h <= 6 ? "detractors" : h <= 8 ? "passives" : "promoters";
          }
          throw new Error("The scale must be one of: 3, 5, 7, 10");
        })(i, r.scale);
        if (
          (c = r.branching) !== null &&
          c !== void 0 &&
          (d = c.responseValues) !== null &&
          d !== void 0 &&
          d.hasOwnProperty(u)
        ) {
          const h = r.branching.responseValues[u];
          return Number.isInteger(h) ? h : h === oe.End ? oe.End : o;
        }
      }
      return o;
    }
    return (
      g.warn(
        at,
        "Falling back to next question index due to unexpected branching type",
      ),
      o
    );
  }
  _canActivateRepeatedly(e) {
    var t;
    return M(
      (t = E.__PosthogExtensions__) === null || t === void 0
        ? void 0
        : t.canActivateRepeatedly,
    )
      ? (g.warn(
          at,
          "canActivateRepeatedly is not defined, must init before calling",
        ),
        !1)
      : E.__PosthogExtensions__.canActivateRepeatedly(e);
  }
  canRenderSurvey(e) {
    M(this._surveyManager)
      ? g.warn(
          at,
          "canActivateRepeatedly is not defined, must init before calling",
        )
      : this.getSurveys((t) => {
          const i = t.filter((n) => n.id === e)[0];
          this._surveyManager.canRenderSurvey(i);
        });
  }
  renderSurvey(e, t) {
    M(this._surveyManager)
      ? g.warn(
          at,
          "canActivateRepeatedly is not defined, must init before calling",
        )
      : this.getSurveys((i) => {
          const n = i.filter((r) => r.id === e)[0];
          this._surveyManager.renderSurvey(n, m?.querySelector(t));
        });
  }
}
class Io {
  serverLimits = {};
  lastEventRateLimited = !1;
  constructor(e) {
    var t, i;
    ((this.instance = e),
      (this.captureEventsPerSecond =
        ((t = e.config.rate_limiting) === null || t === void 0
          ? void 0
          : t.events_per_second) || 10),
      (this.captureEventsBurstLimit = Math.max(
        ((i = e.config.rate_limiting) === null || i === void 0
          ? void 0
          : i.events_burst_limit) || 10 * this.captureEventsPerSecond,
        this.captureEventsPerSecond,
      )),
      (this.lastEventRateLimited =
        this.clientRateLimitContext(!0).isRateLimited));
  }
  clientRateLimitContext() {
    var e, t, i;
    let n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
    const r = new Date().getTime(),
      o =
        (e =
          (t = this.instance.persistence) === null || t === void 0
            ? void 0
            : t.get_property(vi)) !== null && e !== void 0
          ? e
          : { tokens: this.captureEventsBurstLimit, last: r };
    ((o.tokens += ((r - o.last) / 1e3) * this.captureEventsPerSecond),
      (o.last = r),
      o.tokens > this.captureEventsBurstLimit &&
        (o.tokens = this.captureEventsBurstLimit));
    const a = o.tokens < 1;
    return (
      a || n || (o.tokens = Math.max(0, o.tokens - 1)),
      !a ||
        this.lastEventRateLimited ||
        n ||
        this.instance.capture(
          "$$client_ingestion_warning",
          {
            $$client_ingestion_warning_message: `posthog-js client rate limited. Config is set to ${this.captureEventsPerSecond} events per second and ${this.captureEventsBurstLimit} events burst limit.`,
          },
          { skip_client_rate_limiting: !0 },
        ),
      (this.lastEventRateLimited = a),
      (i = this.instance.persistence) === null ||
        i === void 0 ||
        i.set_property(vi, o),
      { isRateLimited: a, remainingTokens: o.tokens }
    );
  }
  isServerRateLimited(e) {
    const t = this.serverLimits[e || "events"] || !1;
    return t !== !1 && new Date().getTime() < t;
  }
  checkForLimiting = (e) => {
    const t = e.text;
    if (t && t.length)
      try {
        (JSON.parse(t).quota_limited || []).forEach((n) => {
          (g.info(`[RateLimiter] ${n || "events"} is quota limited.`),
            (this.serverLimits[n] = new Date().getTime() + 6e4));
        });
      } catch (i) {
        return void g.warn(
          `[RateLimiter] could not rate limit - continuing. Error: "${i?.message}"`,
          { text: t },
        );
      }
  };
}
const Po = () => ({
  initialPathName: J?.pathname || "",
  referringDomain: L.referringDomain(),
  ...L.campaignParams(),
});
class Ro {
  constructor(e, t, i) {
    ((this._sessionIdManager = e),
      (this._persistence = t),
      (this._sessionSourceParamGenerator = i || Po),
      this._sessionIdManager.onSessionId(this._onSessionIdCallback));
  }
  _getStoredProps() {
    return this._persistence.props[fi];
  }
  _onSessionIdCallback = (e) => {
    const t = this._getStoredProps();
    if (t && t.sessionId === e) return;
    const i = { sessionId: e, props: this._sessionSourceParamGenerator() };
    this._persistence.register({ [fi]: i });
  };
  getSessionProps() {
    var e;
    const t =
      (e = this._getStoredProps()) === null || e === void 0 ? void 0 : e.props;
    return t
      ? {
          $client_session_initial_referring_host: t.referringDomain,
          $client_session_initial_pathname: t.initialPathName,
          $client_session_initial_utm_source: t.utm_source,
          $client_session_initial_utm_campaign: t.utm_campaign,
          $client_session_initial_utm_medium: t.utm_medium,
          $client_session_initial_utm_content: t.utm_content,
          $client_session_initial_utm_term: t.utm_term,
        }
      : {};
  }
}
const Fo = [
    "ahrefsbot",
    "ahrefssiteaudit",
    "applebot",
    "baiduspider",
    "bingbot",
    "bingpreview",
    "bot.htm",
    "bot.php",
    "crawler",
    "deepscan",
    "duckduckbot",
    "facebookexternal",
    "facebookcatalog",
    "gptbot",
    "http://yandex.com/bots",
    "hubspot",
    "ia_archiver",
    "linkedinbot",
    "mj12bot",
    "msnbot",
    "nessus",
    "petalbot",
    "pinterest",
    "prerender",
    "rogerbot",
    "screaming frog",
    "semrushbot",
    "sitebulb",
    "slurp",
    "turnitin",
    "twitterbot",
    "vercelbot",
    "yahoo! slurp",
    "yandexbot",
    "headlesschrome",
    "cypress",
    "Google-HotelAdsVerifier",
    "adsbot-google",
    "apis-google",
    "duplexweb-google",
    "feedfetcher-google",
    "google favicon",
    "google web preview",
    "google-read-aloud",
    "googlebot",
    "googleweblight",
    "mediapartners-google",
    "storebot-google",
    "Bytespider;",
  ],
  Gs = function (s, e) {
    if (!s) return !1;
    const t = s.toLowerCase();
    return Fo.concat(e || []).some((i) => {
      const n = i.toLowerCase();
      return t.indexOf(n) !== -1;
    });
  },
  Xn = function (s, e) {
    if (!s) return !1;
    const t = s.userAgent;
    if (t && Gs(t, e)) return !0;
    try {
      const i = s?.userAgentData;
      if (i != null && i.brands && i.brands.some((n) => Gs(n?.brand, e)))
        return !0;
    } catch {}
    return !!s.webdriver;
  };
class Yn {
  constructor() {
    this.clicks = [];
  }
  isRageClick(e, t, i) {
    const n = this.clicks[this.clicks.length - 1];
    if (
      n &&
      Math.abs(e - n.x) + Math.abs(t - n.y) < 30 &&
      i - n.timestamp < 1e3
    ) {
      if (
        (this.clicks.push({ x: e, y: t, timestamp: i }),
        this.clicks.length === 3)
      )
        return !0;
    } else this.clicks = [{ x: e, y: t, timestamp: i }];
    return !1;
  }
}
class Co {
  rageclicks = new Yn();
  _enabledServerSide = !1;
  _initialized = !1;
  _flushInterval = null;
  constructor(e) {
    var t;
    ((this.instance = e),
      (this._enabledServerSide = !(
        (t = this.instance.persistence) === null ||
        t === void 0 ||
        !t.props[hi]
      )),
      p?.addEventListener("beforeunload", () => {
        this.flush();
      }));
  }
  get flushIntervalMilliseconds() {
    let e = 5e3;
    return (
      D(this.instance.config.capture_heatmaps) &&
        this.instance.config.capture_heatmaps.flush_interval_milliseconds &&
        (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds),
      e
    );
  }
  get isEnabled() {
    return S(this.instance.config.capture_heatmaps)
      ? S(this.instance.config.enable_heatmaps)
        ? this._enabledServerSide
        : this.instance.config.enable_heatmaps
      : this.instance.config.capture_heatmaps !== !1;
  }
  startIfEnabled() {
    if (this.isEnabled) {
      if (this._initialized) return;
      (g.info("[heatmaps] starting..."),
        this._setupListeners(),
        (this._flushInterval = setInterval(
          this.flush.bind(this),
          this.flushIntervalMilliseconds,
        )));
    } else {
      var e;
      (clearInterval(
        (e = this._flushInterval) !== null && e !== void 0 ? e : void 0,
      ),
        this.getAndClearBuffer());
    }
  }
  afterDecideResponse(e) {
    const t = !!e.heatmaps;
    (this.instance.persistence &&
      this.instance.persistence.register({ [hi]: t }),
      (this._enabledServerSide = t),
      this.startIfEnabled());
  }
  getAndClearBuffer() {
    const e = this.buffer;
    return ((this.buffer = void 0), e);
  }
  _setupListeners() {
    p &&
      m &&
      (ve(m, "click", (e) => this._onClick(e || p?.event), !1, !0),
      ve(m, "mousemove", (e) => this._onMouseMove(e || p?.event), !1, !0),
      (this._initialized = !0));
  }
  _getProperties(e, t) {
    const i = this.instance.scrollManager.scrollY(),
      n = this.instance.scrollManager.scrollX(),
      r = this.instance.scrollManager.scrollElement(),
      o = (function (a, l, c) {
        let d = a;
        for (; d && Kt(d) && !Te(d, "body"); ) {
          if (d === c) return !1;
          if (I(l, p?.getComputedStyle(d).position)) return !0;
          d = xn(d);
        }
        return !1;
      })(En(e), ["fixed", "sticky"], r);
    return {
      x: e.clientX + (o ? 0 : n),
      y: e.clientY + (o ? 0 : i),
      target_fixed: o,
      type: t,
    };
  }
  _onClick(e) {
    var t;
    if (Ps(e.target)) return;
    const i = this._getProperties(e, "click");
    ((t = this.rageclicks) !== null &&
      t !== void 0 &&
      t.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
      this._capture({ ...i, type: "rageclick" }),
      this._capture(i));
  }
  _onMouseMove(e) {
    Ps(e.target) ||
      (clearTimeout(this._mouseMoveTimeout),
      (this._mouseMoveTimeout = setTimeout(() => {
        this._capture(this._getProperties(e, "mousemove"));
      }, 500)));
  }
  _capture(e) {
    if (!p) return;
    const t = p.location.href;
    ((this.buffer = this.buffer || {}),
      this.buffer[t] || (this.buffer[t] = []),
      this.buffer[t].push(e));
  }
  flush() {
    this.buffer &&
      !ht(this.buffer) &&
      this.instance.capture("$$heatmap", {
        $heatmap_data: this.getAndClearBuffer(),
      });
  }
}
class $o {
  constructor(e) {
    this.instance = e;
  }
  getContext() {
    return this.context;
  }
  resetContext() {
    const e = this.context;
    return (setTimeout(this._updateScrollData, 0), e);
  }
  _updateScrollData = () => {
    var e, t, i, n;
    this.context || (this.context = {});
    const r = this.scrollElement(),
      o = this.scrollY(),
      a = r ? Math.max(0, r.scrollHeight - r.clientHeight) : 0,
      l = o + (r?.clientHeight || 0),
      c = r?.scrollHeight || 0;
    ((this.context.lastScrollY = Math.ceil(o)),
      (this.context.maxScrollY = Math.max(
        o,
        (e = this.context.maxScrollY) !== null && e !== void 0 ? e : 0,
      )),
      (this.context.maxScrollHeight = Math.max(
        a,
        (t = this.context.maxScrollHeight) !== null && t !== void 0 ? t : 0,
      )),
      (this.context.lastContentY = l),
      (this.context.maxContentY = Math.max(
        l,
        (i = this.context.maxContentY) !== null && i !== void 0 ? i : 0,
      )),
      (this.context.maxContentHeight = Math.max(
        c,
        (n = this.context.maxContentHeight) !== null && n !== void 0 ? n : 0,
      )));
  };
  startMeasuringScrollPosition() {
    (p?.addEventListener("scroll", this._updateScrollData, !0),
      p?.addEventListener("scrollend", this._updateScrollData, !0),
      p?.addEventListener("resize", this._updateScrollData));
  }
  scrollElement() {
    if (!this.instance.config.scroll_root_selector)
      return p?.document.documentElement;
    {
      const e = q(this.instance.config.scroll_root_selector)
        ? this.instance.config.scroll_root_selector
        : [this.instance.config.scroll_root_selector];
      for (const t of e) {
        const i = p?.document.querySelector(t);
        if (i) return i;
      }
    }
  }
  scrollY() {
    if (this.instance.config.scroll_root_selector) {
      const e = this.scrollElement();
      return (e && e.scrollTop) || 0;
    }
    return (
      (p &&
        (p.scrollY || p.pageYOffset || p.document.documentElement.scrollTop)) ||
      0
    );
  }
  scrollX() {
    if (this.instance.config.scroll_root_selector) {
      const e = this.scrollElement();
      return (e && e.scrollLeft) || 0;
    }
    return (
      (p &&
        (p.scrollX ||
          p.pageXOffset ||
          p.document.documentElement.scrollLeft)) ||
      0
    );
  }
}
const ci = "$copy_autocapture";
function ui(s, e) {
  return e.length > s ? e.slice(0, s) + "..." : e;
}
function To(s) {
  if (s.previousElementSibling) return s.previousElementSibling;
  let e = s;
  do e = e.previousSibling;
  while (e && !Kt(e));
  return e;
}
function Mo(s, e, t, i) {
  const n = s.tagName.toLowerCase(),
    r = { tag_name: n };
  ki.indexOf(n) > -1 &&
    !t &&
    (n.toLowerCase() === "a" || n.toLowerCase() === "button"
      ? (r.$el_text = ui(1024, Rn(s)))
      : (r.$el_text = ui(1024, Zt(s))));
  const o = zt(s);
  (o.length > 0 &&
    (r.classes = o.filter(function (d) {
      return d !== "";
    })),
    R(s.attributes, function (d) {
      var u;
      if (
        (!kn(s) ||
          ["name", "id", "class", "aria-label"].indexOf(d.name) !== -1) &&
        (i == null || !i.includes(d.name)) &&
        !e &&
        tt(d.value) &&
        ((u = d.name),
        !W(u) ||
          (u.substring(0, 10) !== "_ngcontent" &&
            u.substring(0, 7) !== "_nghost"))
      ) {
        let h = d.value;
        (d.name === "class" && (h = Wi(h).join(" ")),
          (r["attr__" + d.name] = ui(1024, h)));
      }
    }));
  let a = 1,
    l = 1,
    c = s;
  for (; (c = To(c)); ) (a++, c.tagName === s.tagName && l++);
  return ((r.nth_child = a), (r.nth_of_type = l), r);
}
function Ao(s, e) {
  var t, i;
  let {
    e: n,
    maskAllElementAttributes: r,
    maskAllText: o,
    elementAttributeIgnoreList: a,
    elementsChainAsString: l,
  } = e;
  const c = [s];
  let d = s;
  for (; d.parentNode && !Te(d, "body"); )
    wn(d.parentNode)
      ? (c.push(d.parentNode.host), (d = d.parentNode.host))
      : (c.push(d.parentNode), (d = d.parentNode));
  const u = [],
    h = {};
  let _,
    f = !1,
    v = !1;
  if (
    (R(c, (y) => {
      const k = Ii(y);
      (y.tagName.toLowerCase() === "a" &&
        ((f = y.getAttribute("href")), (f = k && f && tt(f) && f)),
        I(zt(y), "ph-no-capture") && (v = !0),
        u.push(Mo(y, r, o, a)));
      const T = (function (P) {
        if (!Ii(P)) return {};
        const O = {};
        return (
          R(P.attributes, function (C) {
            if (C.name && C.name.indexOf("data-ph-capture-attribute") === 0) {
              const x = C.name.replace("data-ph-capture-attribute-", ""),
                $ = C.value;
              x && $ && tt($) && (O[x] = $);
            }
          }),
          O
        );
      })(y);
      Q(h, T);
    }),
    v)
  )
    return { props: {}, explicitNoCapture: v };
  if (
    (o ||
      (s.tagName.toLowerCase() === "a" || s.tagName.toLowerCase() === "button"
        ? (u[0].$el_text = Rn(s))
        : (u[0].$el_text = Zt(s))),
    f)
  ) {
    var b, w;
    u[0].attr__href = f;
    const y = (b = pt(f)) === null || b === void 0 ? void 0 : b.host,
      k =
        p == null || (w = p.location) === null || w === void 0
          ? void 0
          : w.host;
    y && k && y !== k && (_ = f);
  }
  return {
    props: Q(
      { $event_type: n.type, $ce_version: 1 },
      l ? { $elements_chain: Or(u) } : { $elements: u },
      (t = u[0]) !== null && t !== void 0 && t.$el_text
        ? {
            $el_text: (i = u[0]) === null || i === void 0 ? void 0 : i.$el_text,
          }
        : {},
      _ && n.type === "click" ? { $external_click_url: _ } : {},
      h,
    ),
  };
}
class Lo {
  _initialized = !1;
  _isDisabledServerSide = null;
  rageclicks = new Yn();
  _elementsChainAsString = !1;
  constructor(e) {
    ((this.instance = e), (this._elementSelectors = null));
  }
  get config() {
    var e, t;
    const i = D(this.instance.config.autocapture)
      ? this.instance.config.autocapture
      : {};
    return (
      (i.url_allowlist =
        (e = i.url_allowlist) === null || e === void 0
          ? void 0
          : e.map((n) => new RegExp(n))),
      (i.url_ignorelist =
        (t = i.url_ignorelist) === null || t === void 0
          ? void 0
          : t.map((n) => new RegExp(n))),
      i
    );
  }
  _addDomEventHandlers() {
    if (!this.isBrowserSupported())
      return void g.info(
        "Disabling Automatic Event Collection because this browser is not supported",
      );
    if (!p || !m) return;
    const e = (i) => {
        i = i || p?.event;
        try {
          this._captureEvent(i);
        } catch (n) {
          g.error("Failed to capture event", n);
        }
      },
      t = (i) => {
        ((i = i || p?.event), this._captureEvent(i, ci));
      };
    (ve(m, "submit", e, !1, !0),
      ve(m, "change", e, !1, !0),
      ve(m, "click", e, !1, !0),
      this.config.capture_copied_text &&
        (ve(m, "copy", t, !1, !0), ve(m, "cut", t, !1, !0)));
  }
  startIfEnabled() {
    this.isEnabled &&
      !this._initialized &&
      (this._addDomEventHandlers(), (this._initialized = !0));
  }
  afterDecideResponse(e) {
    (e.elementsChainAsString &&
      (this._elementsChainAsString = e.elementsChainAsString),
      this.instance.persistence &&
        this.instance.persistence.register({ [as]: !!e.autocapture_opt_out }),
      (this._isDisabledServerSide = !!e.autocapture_opt_out),
      this.startIfEnabled());
  }
  setElementSelectors(e) {
    this._elementSelectors = e;
  }
  getElementSelectors(e) {
    var t;
    const i = [];
    return (
      (t = this._elementSelectors) === null ||
        t === void 0 ||
        t.forEach((n) => {
          const r = m?.querySelectorAll(n);
          r?.forEach((o) => {
            e === o && i.push(n);
          });
        }),
      i
    );
  }
  get isEnabled() {
    var e, t;
    const i =
        (e = this.instance.persistence) === null || e === void 0
          ? void 0
          : e.props[as],
      n = this._isDisabledServerSide;
    if (Me(n) && !Re(i) && !this.instance.config.advanced_disable_decide)
      return !1;
    const r =
      (t = this._isDisabledServerSide) !== null && t !== void 0 ? t : !!i;
    return !!this.instance.config.autocapture && !r;
  }
  _captureEvent(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : "$autocapture";
    if (!this.isEnabled) return;
    let i = En(e);
    var n;
    (bn(i) && (i = i.parentNode || null),
      t === "$autocapture" &&
        e.type === "click" &&
        e instanceof MouseEvent &&
        this.instance.config.rageclick &&
        (n = this.rageclicks) !== null &&
        n !== void 0 &&
        n.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
        this._captureEvent(e, "$rageclick"));
    const r = t === ci;
    if (i && Tr(i, e, this.config, r, r ? ["copy", "cut"] : void 0)) {
      const { props: a, explicitNoCapture: l } = Ao(i, {
        e,
        maskAllElementAttributes:
          this.instance.config.mask_all_element_attributes,
        maskAllText: this.instance.config.mask_all_text,
        elementAttributeIgnoreList: this.config.element_attribute_ignorelist,
        elementsChainAsString: this._elementsChainAsString,
      });
      if (l) return !1;
      const c = this.getElementSelectors(i);
      if ((c && c.length > 0 && (a.$element_selectors = c), t === ci)) {
        var o;
        const d = Sn(
            p == null || (o = p.getSelection()) === null || o === void 0
              ? void 0
              : o.toString(),
          ),
          u = e.type || "clipboard";
        if (!d) return !1;
        ((a.$selected_content = d), (a.$copy_type = u));
      }
      return (this.instance.capture(t, a), !0);
    }
  }
  isBrowserSupported() {
    return se(m?.querySelectorAll);
  }
}
class Do {
  _restoreXHRPatch = void 0;
  _restoreFetchPatch = void 0;
  constructor(e) {
    this.instance = e;
  }
  _loadScript(e) {
    var t, i, n;
    ((t = E.__PosthogExtensions__) !== null &&
      t !== void 0 &&
      t.tracingHeadersPatchFns &&
      e(),
      (i = E.__PosthogExtensions__) === null ||
        i === void 0 ||
        (n = i.loadExternalDependency) === null ||
        n === void 0 ||
        n.call(i, this.instance, "tracing-headers", (r) => {
          if (r) return g.error("[TRACING-HEADERS] failed to load script", r);
          e();
        }));
  }
  startIfEnabledOrStop() {
    var e, t;
    this.instance.config.__add_tracing_headers
      ? this._loadScript(this._startCapturing)
      : ((e = this._restoreXHRPatch) === null || e === void 0 || e.call(this),
        (t = this._restoreFetchPatch) === null || t === void 0 || t.call(this),
        (this._restoreXHRPatch = void 0),
        (this._restoreFetchPatch = void 0));
  }
  _startCapturing = () => {
    var e, t, i, n;
    (S(this._restoreXHRPatch) &&
      ((e = E.__PosthogExtensions__) === null ||
        e === void 0 ||
        (t = e.tracingHeadersPatchFns) === null ||
        t === void 0 ||
        t._patchXHR(this.instance.sessionManager)),
      S(this._restoreFetchPatch) &&
        ((i = E.__PosthogExtensions__) === null ||
          i === void 0 ||
          (n = i.tracingHeadersPatchFns) === null ||
          n === void 0 ||
          n._patchFetch(this.instance.sessionManager)));
  };
}
let Pe;
(function (s) {
  ((s[(s.PENDING = -1)] = "PENDING"),
    (s[(s.DENIED = 0)] = "DENIED"),
    (s[(s.GRANTED = 1)] = "GRANTED"));
})(Pe || (Pe = {}));
class Oo {
  constructor(e) {
    this.instance = e;
  }
  get config() {
    return this.instance.config;
  }
  get consent() {
    return this.getDnt() ? Pe.DENIED : this.storedConsent;
  }
  isOptedOut() {
    return (
      this.consent === Pe.DENIED ||
      (this.consent === Pe.PENDING && this.config.opt_out_capturing_by_default)
    );
  }
  isOptedIn() {
    return !this.isOptedOut();
  }
  optInOut(e) {
    this.storage.set(
      this.storageKey,
      e ? 1 : 0,
      this.config.cookie_expiration,
      this.config.cross_subdomain_cookie,
      this.config.secure_cookie,
    );
  }
  reset() {
    this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie);
  }
  get storageKey() {
    const { token: e, opt_out_capturing_cookie_prefix: t } =
      this.instance.config;
    return (t || "__ph_opt_in_out_") + e;
  }
  get storedConsent() {
    const e = this.storage.get(this.storageKey);
    return e === "1" ? Pe.GRANTED : e === "0" ? Pe.DENIED : Pe.PENDING;
  }
  get storage() {
    if (!this._storage) {
      const e = this.config.opt_out_capturing_persistence_type;
      this._storage = e === "localStorage" ? N : ye;
      const t = e === "localStorage" ? ye : N;
      t.get(this.storageKey) &&
        (this._storage.get(this.storageKey) ||
          this.optInOut(t.get(this.storageKey) === "1"),
        t.remove(this.storageKey, this.config.cross_subdomain_cookie));
    }
    return this._storage;
  }
  getDnt() {
    return (
      !!this.config.respect_dnt &&
      !!tn([ee?.doNotTrack, ee?.msDoNotTrack, E.doNotTrack], (e) =>
        I([!0, 1, "1", "yes"], e),
      )
    );
  }
}
const Ct = "[Exception Autocapture]";
class No {
  originalOnUnhandledRejectionHandler = void 0;
  constructor(e) {
    var t;
    ((this.instance = e),
      (this.remoteEnabled = !(
        (t = this.instance.persistence) === null ||
        t === void 0 ||
        !t.props[ls]
      )),
      this.startIfEnabled());
  }
  get isEnabled() {
    var e;
    return (e = this.remoteEnabled) !== null && e !== void 0 && e;
  }
  get isCapturing() {
    var e;
    return !(
      p == null ||
      (e = p.onerror) === null ||
      e === void 0 ||
      !e.__POSTHOG_INSTRUMENTED__
    );
  }
  get hasHandlers() {
    return this.originalOnUnhandledRejectionHandler || this.unwrapOnError;
  }
  startIfEnabled() {
    this.isEnabled &&
      !this.isCapturing &&
      (g.info(Ct + " enabled, starting..."),
      this.loadScript(this.startCapturing));
  }
  loadScript(e) {
    var t, i;
    (this.hasHandlers && e(),
      (t = E.__PosthogExtensions__) === null ||
        t === void 0 ||
        (i = t.loadExternalDependency) === null ||
        i === void 0 ||
        i.call(t, this.instance, "exception-autocapture", (n) => {
          if (n) return g.error(Ct + " failed to load script", n);
          e();
        }));
  }
  startCapturing = () => {
    var e, t, i, n;
    if (!p || !this.isEnabled || this.hasHandlers || this.isCapturing) return;
    const r =
        (e = E.__PosthogExtensions__) === null ||
        e === void 0 ||
        (t = e.errorWrappingFunctions) === null ||
        t === void 0
          ? void 0
          : t.wrapOnError,
      o =
        (i = E.__PosthogExtensions__) === null ||
        i === void 0 ||
        (n = i.errorWrappingFunctions) === null ||
        n === void 0
          ? void 0
          : n.wrapUnhandledRejection;
    if (r && o)
      try {
        ((this.unwrapOnError = r(this.captureException.bind(this))),
          (this.unwrapUnhandledRejection = o(
            this.captureException.bind(this),
          )));
      } catch (a) {
        (g.error(Ct + " failed to start", a), this.stopCapturing());
      }
    else
      g.error(Ct + " failed to load error wrapping functions - cannot start");
  };
  stopCapturing() {
    var e, t;
    ((e = this.unwrapOnError) === null || e === void 0 || e.call(this),
      (t = this.unwrapUnhandledRejection) === null ||
        t === void 0 ||
        t.call(this));
  }
  afterDecideResponse(e) {
    const t = e.autocaptureExceptions;
    ((this.remoteEnabled = !!t || !1),
      this.instance.persistence &&
        this.instance.persistence.register({ [ls]: this.remoteEnabled }),
      this.startIfEnabled());
  }
  captureException(e) {
    const t = this.instance.requestRouter.endpointFor("ui");
    ((e.$exception_personURL = `${t}/project/${this.instance.config.token}/person/${this.instance.get_distinct_id()}`),
      this.instance.exceptions.sendExceptionEvent(e));
  }
}
const js = 9e5,
  qe = "[Web Vitals]";
class qo {
  _enabledServerSide = !1;
  _initialized = !1;
  buffer = { url: void 0, metrics: [], firstMetricTimestamp: void 0 };
  constructor(e) {
    var t;
    ((this.instance = e),
      (this._enabledServerSide = !(
        (t = this.instance.persistence) === null ||
        t === void 0 ||
        !t.props[us]
      )),
      this.startIfEnabled());
  }
  get allowedMetrics() {
    var e, t;
    const i = D(this.instance.config.capture_performance)
      ? (e = this.instance.config.capture_performance) === null || e === void 0
        ? void 0
        : e.web_vitals_allowed_metrics
      : void 0;
    return S(i)
      ? ((t = this.instance.persistence) === null || t === void 0
          ? void 0
          : t.props[hs]) || ["CLS", "FCP", "INP", "LCP"]
      : i;
  }
  get flushToCaptureTimeoutMs() {
    return (
      (D(this.instance.config.capture_performance)
        ? this.instance.config.capture_performance.web_vitals_delayed_flush_ms
        : void 0) || 5e3
    );
  }
  get _maxAllowedValue() {
    const e =
      D(this.instance.config.capture_performance) &&
      Z(this.instance.config.capture_performance.__web_vitals_max_value)
        ? this.instance.config.capture_performance.__web_vitals_max_value
        : js;
    return 0 < e && e <= 6e4 ? js : e;
  }
  get isEnabled() {
    const e = D(this.instance.config.capture_performance)
      ? this.instance.config.capture_performance.web_vitals
      : void 0;
    return Re(e) ? e : this._enabledServerSide;
  }
  startIfEnabled() {
    this.isEnabled &&
      !this._initialized &&
      (g.info(qe + " enabled, starting..."),
      this.loadScript(this._startCapturing));
  }
  afterDecideResponse(e) {
    const t = D(e.capturePerformance) && !!e.capturePerformance.web_vitals,
      i = D(e.capturePerformance)
        ? e.capturePerformance.web_vitals_allowed_metrics
        : void 0;
    (this.instance.persistence &&
      (this.instance.persistence.register({ [us]: t }),
      this.instance.persistence.register({ [hs]: i })),
      (this._enabledServerSide = t),
      this.startIfEnabled());
  }
  loadScript(e) {
    var t, i, n;
    ((t = E.__PosthogExtensions__) !== null &&
      t !== void 0 &&
      t.postHogWebVitalsCallbacks &&
      e(),
      (i = E.__PosthogExtensions__) === null ||
        i === void 0 ||
        (n = i.loadExternalDependency) === null ||
        n === void 0 ||
        n.call(i, this.instance, "web-vitals", (r) => {
          r ? g.error(qe + " failed to load script", r) : e();
        }));
  }
  _currentURL() {
    const e = p ? p.location.href : void 0;
    return (e || g.error(qe + "Could not determine current URL"), e);
  }
  _flushToCapture = () => {
    (clearTimeout(this._delayedFlushTimer),
      this.buffer.metrics.length !== 0 &&
        (this.instance.capture(
          "$web_vitals",
          this.buffer.metrics.reduce(
            (e, t) => ({
              ...e,
              [`$web_vitals_${t.name}_event`]: { ...t },
              [`$web_vitals_${t.name}_value`]: t.value,
            }),
            {},
          ),
        ),
        (this.buffer = {
          url: void 0,
          metrics: [],
          firstMetricTimestamp: void 0,
        })));
  };
  _addToBuffer = (e) => {
    var t;
    const i =
      (t = this.instance.sessionManager) === null || t === void 0
        ? void 0
        : t.checkAndGetSessionAndWindowId(!0);
    if (S(i))
      return void g.error(qe + "Could not read session ID. Dropping metrics!");
    this.buffer = this.buffer || {
      url: void 0,
      metrics: [],
      firstMetricTimestamp: void 0,
    };
    const n = this._currentURL();
    if (!S(n)) {
      if (M(e?.name) || M(e?.value))
        return void g.error(qe + "Invalid metric received", e);
      if (this._maxAllowedValue && e.value >= this._maxAllowedValue)
        return void g.error(
          qe + "Ignoring metric with value >= " + this._maxAllowedValue,
          e,
        );
      (this.buffer.url !== n &&
        (this._flushToCapture(),
        (this._delayedFlushTimer = setTimeout(
          this._flushToCapture,
          this.flushToCaptureTimeoutMs,
        ))),
        S(this.buffer.url) && (this.buffer.url = n),
        (this.buffer.firstMetricTimestamp = S(this.buffer.firstMetricTimestamp)
          ? Date.now()
          : this.buffer.firstMetricTimestamp),
        e.attribution &&
          e.attribution.interactionTargetElement &&
          (e.attribution.interactionTargetElement = void 0),
        this.buffer.metrics.push({
          ...e,
          $current_url: n,
          $session_id: i.sessionId,
          $window_id: i.windowId,
          timestamp: Date.now(),
        }),
        this.buffer.metrics.length === this.allowedMetrics.length &&
          this._flushToCapture());
    }
  };
  _startCapturing = () => {
    let e, t, i, n;
    const r = E.__PosthogExtensions__;
    (S(r) ||
      S(r.postHogWebVitalsCallbacks) ||
      ({
        onLCP: e,
        onCLS: t,
        onFCP: i,
        onINP: n,
      } = r.postHogWebVitalsCallbacks),
      e && t && i && n
        ? (this.allowedMetrics.indexOf("LCP") > -1 &&
            e(this._addToBuffer.bind(this)),
          this.allowedMetrics.indexOf("CLS") > -1 &&
            t(this._addToBuffer.bind(this)),
          this.allowedMetrics.indexOf("FCP") > -1 &&
            i(this._addToBuffer.bind(this)),
          this.allowedMetrics.indexOf("INP") > -1 &&
            n(this._addToBuffer.bind(this)),
          (this._initialized = !0))
        : g.error(qe + "web vitals callbacks not loaded - not starting"));
  };
}
const Bo = {
  icontains: (s, e) =>
    !!p && e.href.toLowerCase().indexOf(s.toLowerCase()) > -1,
  not_icontains: (s, e) =>
    !!p && e.href.toLowerCase().indexOf(s.toLowerCase()) === -1,
  regex: (s, e) => !!p && Ze(e.href, s),
  not_regex: (s, e) => !!p && !Ze(e.href, s),
  exact: (s, e) => e.href === s,
  is_not: (s, e) => e.href !== s,
};
class B {
  constructor(e) {
    this.instance = e;
    const t = (i) => {
      this.applyFeatureFlagChanges(i);
    };
    (this.instance.onFeatureFlags && this.instance.onFeatureFlags(t),
      (this._flagToExperiments = new Map()));
  }
  applyFeatureFlagChanges(e) {
    M(this._flagToExperiments) ||
      this.instance.config.disable_web_experiments ||
      (B.logInfo("applying feature flags", e),
      e.forEach((t) => {
        var i;
        if (
          this._flagToExperiments &&
          (i = this._flagToExperiments) !== null &&
          i !== void 0 &&
          i.has(t)
        ) {
          var n;
          const r = this.instance.getFeatureFlag(t),
            o =
              (n = this._flagToExperiments) === null || n === void 0
                ? void 0
                : n.get(t);
          r &&
            o != null &&
            o.variants[r] &&
            this.applyTransforms(o.name, r, o.variants[r].transforms);
        }
      }));
  }
  afterDecideResponse(e) {
    this._is_bot()
      ? B.logInfo(
          "Refusing to render web experiment since the viewer is a likely bot",
        )
      : ((this._featureFlags = e.featureFlags),
        this.loadIfEnabled(),
        this.previewWebExperiment());
  }
  previewWebExperiment() {
    const e = B.getWindowLocation();
    if (e != null && e.search) {
      const t = Bt(e?.search, "__experiment_id"),
        i = Bt(e?.search, "__experiment_variant");
      t &&
        i &&
        (B.logInfo(`previewing web experiments ${t} && ${i}`),
        this.getWebExperiments(
          (n) => {
            this.showPreviewWebExperiment(parseInt(t), i, n);
          },
          !1,
          !0,
        ));
    }
  }
  loadIfEnabled() {
    this.instance.config.disable_web_experiments ||
      this.getWebExperimentsAndEvaluateDisplayLogic();
  }
  getWebExperimentsAndEvaluateDisplayLogic = (() => {
    var e = this;
    return function () {
      let t = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      e.getWebExperiments((i) => {
        (B.logInfo("retrieved web experiments from the server"),
          (e._flagToExperiments = new Map()),
          i.forEach((n) => {
            if (
              n.feature_flag_key &&
              e._featureFlags &&
              e._featureFlags[n.feature_flag_key]
            ) {
              var r;
              e._flagToExperiments &&
                (B.logInfo(
                  "setting flag key ",
                  n.feature_flag_key,
                  " to web experiment ",
                  n,
                ),
                (r = e._flagToExperiments) === null ||
                  r === void 0 ||
                  r.set(n.feature_flag_key, n));
              const o = e._featureFlags[n.feature_flag_key];
              o &&
                n.variants[o] &&
                e.applyTransforms(n.name, o, n.variants[o].transforms);
            } else if (n.variants)
              for (const o in n.variants) {
                const a = n.variants[o];
                B.matchesTestVariant(a) &&
                  e.applyTransforms(n.name, o, a.transforms);
              }
          }));
      }, t);
    };
  })();
  getWebExperiments(e, t, i) {
    if (this.instance.config.disable_web_experiments && !i) return e([]);
    const n = this.instance.get_property("$web_experiments");
    if (n && !t) return e(n);
    this.instance._send_request({
      url: this.instance.requestRouter.endpointFor(
        "api",
        `/api/web_experiments/?token=${this.instance.config.token}`,
      ),
      method: "GET",
      transport: "XHR",
      callback: (r) => {
        if (r.statusCode !== 200 || !r.json) return e([]);
        const o = r.json.experiments || [];
        return e(o);
      },
    });
  }
  showPreviewWebExperiment(e, t, i) {
    const n = i.filter((r) => r.id === e);
    n &&
      n.length > 0 &&
      (B.logInfo(
        `Previewing web experiment [${n[0].name}] with variant [${t}]`,
      ),
      this.applyTransforms(n[0].name, t, n[0].variants[t].transforms, !0));
  }
  static matchesTestVariant(e) {
    return (
      !M(e.conditions) && B.matchUrlConditions(e) && B.matchUTMConditions(e)
    );
  }
  static matchUrlConditions(e) {
    var t;
    if (
      M(e.conditions) ||
      M((t = e.conditions) === null || t === void 0 ? void 0 : t.url)
    )
      return !0;
    const i = B.getWindowLocation();
    if (i) {
      var n, r, o;
      return (
        (n = e.conditions) === null ||
        n === void 0 ||
        !n.url ||
        Bo[
          (r =
            (o = e.conditions) === null || o === void 0
              ? void 0
              : o.urlMatchType) !== null && r !== void 0
            ? r
            : "icontains"
        ](e.conditions.url, i)
      );
    }
    return !1;
  }
  static getWindowLocation() {
    return p?.location;
  }
  static matchUTMConditions(e) {
    var t;
    if (
      M(e.conditions) ||
      M((t = e.conditions) === null || t === void 0 ? void 0 : t.utm)
    )
      return !0;
    const i = L.campaignParams();
    if (i.utm_source) {
      var n, r, o, a, l, c, d, u, h, _, f, v, b, w, y, k;
      const T =
          (n = e.conditions) === null ||
          n === void 0 ||
          (r = n.utm) === null ||
          r === void 0 ||
          !r.utm_campaign ||
          ((o = e.conditions) === null ||
          o === void 0 ||
          (a = o.utm) === null ||
          a === void 0
            ? void 0
            : a.utm_campaign) == i.utm_campaign,
        P =
          (l = e.conditions) === null ||
          l === void 0 ||
          (c = l.utm) === null ||
          c === void 0 ||
          !c.utm_source ||
          ((d = e.conditions) === null ||
          d === void 0 ||
          (u = d.utm) === null ||
          u === void 0
            ? void 0
            : u.utm_source) == i.utm_source,
        O =
          (h = e.conditions) === null ||
          h === void 0 ||
          (_ = h.utm) === null ||
          _ === void 0 ||
          !_.utm_medium ||
          ((f = e.conditions) === null ||
          f === void 0 ||
          (v = f.utm) === null ||
          v === void 0
            ? void 0
            : v.utm_medium) == i.utm_medium,
        C =
          (b = e.conditions) === null ||
          b === void 0 ||
          (w = b.utm) === null ||
          w === void 0 ||
          !w.utm_term ||
          ((y = e.conditions) === null ||
          y === void 0 ||
          (k = y.utm) === null ||
          k === void 0
            ? void 0
            : k.utm_term) == i.utm_term;
      return T && O && C && P;
    }
    return !1;
  }
  static logInfo(e) {
    for (
      var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1;
      n < t;
      n++
    )
      i[n - 1] = arguments[n];
    g.info(`[WebExperiments] ${e}`, i);
  }
  applyTransforms(e, t, i, n) {
    var r;
    this._is_bot()
      ? B.logInfo(
          "Refusing to render web experiment since the viewer is a likely bot",
        )
      : t !== "control"
        ? i.forEach((o) => {
            if (o.selector) {
              var a;
              B.logInfo(
                `applying transform of variant ${t} for experiment ${e} `,
                o,
              );
              let c = 0;
              const d =
                (a = document) === null || a === void 0
                  ? void 0
                  : a.querySelectorAll(o.selector);
              var l;
              (d?.forEach((u) => {
                const h = u;
                ((c += 1),
                  o.attributes &&
                    o.attributes.forEach((_) => {
                      switch (_.name) {
                        case "text":
                          h.innerText = _.value;
                          break;
                        case "html":
                          h.innerHTML = _.value;
                          break;
                        case "cssClass":
                          h.className = _.value;
                          break;
                        default:
                          h.setAttribute(_.name, _.value);
                      }
                    }),
                  o.text && (h.innerText = o.text),
                  o.html &&
                    (h.parentElement
                      ? (h.parentElement.innerHTML = o.html)
                      : (h.innerHTML = o.html)),
                  o.css && h.setAttribute("style", o.css));
              }),
                this.instance &&
                  this.instance.capture &&
                  this.instance.capture("$web_experiment_applied", {
                    $web_experiment_name: e,
                    $web_experiment_variant: t,
                    $web_experiment_preview: n,
                    $web_experiment_document_url:
                      (l = B.getWindowLocation()) === null || l === void 0
                        ? void 0
                        : l.href,
                    $web_experiment_elements_modified: c,
                  }));
            }
          })
        : (B.logInfo("Control variants leave the page unmodified."),
          this.instance &&
            this.instance.capture &&
            this.instance.capture("$web_experiment_applied", {
              $web_experiment_name: e,
              $web_experiment_preview: n,
              $web_experiment_variant: t,
              $web_experiment_document_url:
                (r = B.getWindowLocation()) === null || r === void 0
                  ? void 0
                  : r.href,
              $web_experiment_elements_modified: 0,
            }));
  }
  _is_bot() {
    return ee && this.instance
      ? Xn(ee, this.instance.config.custom_blocked_useragents)
      : void 0;
  }
}
const Qs = "/e/";
class Ho {
  constructor(e) {
    var t;
    ((this.instance = e),
      (this._endpointSuffix =
        ((t = this.instance.persistence) === null || t === void 0
          ? void 0
          : t.props[cs]) || Qs));
  }
  get endpoint() {
    return this.instance.requestRouter.endpointFor("api", this._endpointSuffix);
  }
  afterDecideResponse(e) {
    const t = e.autocaptureExceptions;
    ((this._endpointSuffix = (D(t) && t.endpoint) || Qs),
      this.instance.persistence &&
        this.instance.persistence.register({ [cs]: this._endpointSuffix }));
  }
  sendExceptionEvent(e) {
    this.instance.capture("$exception", e, {
      _noTruncate: !0,
      _batchKey: "exceptionEvent",
      _url: this.endpoint,
    });
  }
}
const $t = "[Dead Clicks]";
class Uo {
  get lazyLoadedDeadClicksAutocapture() {
    return this._lazyLoadedDeadClicksAutocapture;
  }
  constructor(e) {
    ((this.instance = e), this.startIfEnabled());
  }
  get isRemoteEnabled() {
    var e;
    return !(
      (e = this.instance.persistence) === null ||
      e === void 0 ||
      !e.get_property(ds)
    );
  }
  get isEnabled() {
    const e = this.instance.config.capture_dead_clicks;
    return Re(e) ? e : this.isRemoteEnabled;
  }
  afterDecideResponse(e) {
    (this.instance.persistence &&
      this.instance.persistence.register({ [ds]: e?.captureDeadClicks }),
      this.startIfEnabled());
  }
  startIfEnabled() {
    this.isEnabled && this.loadScript(this.start.bind(this));
  }
  loadScript(e) {
    var t, i, n;
    ((t = E.__PosthogExtensions__) !== null &&
      t !== void 0 &&
      t.initDeadClicksAutocapture &&
      e(),
      (i = E.__PosthogExtensions__) === null ||
        i === void 0 ||
        (n = i.loadExternalDependency) === null ||
        n === void 0 ||
        n.call(i, this.instance, "dead-clicks-autocapture", (r) => {
          r ? g.error($t + " failed to load script", r) : e();
        }));
  }
  start() {
    var e;
    m
      ? !this._lazyLoadedDeadClicksAutocapture &&
        (e = E.__PosthogExtensions__) !== null &&
        e !== void 0 &&
        e.initDeadClicksAutocapture &&
        ((this._lazyLoadedDeadClicksAutocapture =
          E.__PosthogExtensions__.initDeadClicksAutocapture(
            this.instance,
            D(this.instance.config.capture_dead_clicks)
              ? this.instance.config.capture_dead_clicks
              : void 0,
          )),
        this._lazyLoadedDeadClicksAutocapture.start(m),
        g.info(`${$t} starting...`))
      : g.error($t + " `document` not found. Cannot start.");
  }
  stop() {
    this._lazyLoadedDeadClicksAutocapture &&
      (this._lazyLoadedDeadClicksAutocapture.stop(),
      (this._lazyLoadedDeadClicksAutocapture = void 0),
      g.info(`${$t} stopping...`));
  }
}
const ft = {},
  Js = () => {},
  je = "posthog";
let Kn = !ao && H?.indexOf("MSIE") === -1 && H?.indexOf("Mozilla") === -1;
const Xs = () => {
    var s;
    return {
      api_host: "https://us.i.posthog.com",
      ui_host: null,
      token: "",
      autocapture: !0,
      rageclick: !0,
      cross_subdomain_cookie: lr(m?.location),
      persistence: "localStorage+cookie",
      persistence_name: "",
      loaded: Js,
      store_google: !0,
      custom_campaign_params: [],
      custom_blocked_useragents: [],
      save_referrer: !0,
      capture_pageview: !0,
      capture_pageleave: "if_capture_pageview",
      debug:
        (J &&
          W(J?.search) &&
          J.search.indexOf("__posthog_debug=true") !== -1) ||
        !1,
      verbose: !1,
      cookie_expiration: 365,
      upgrade: !1,
      disable_session_recording: !1,
      disable_persistence: !1,
      disable_web_experiments: !0,
      disable_surveys: !1,
      enable_recording_console_log: void 0,
      secure_cookie:
        (p == null || (s = p.location) === null || s === void 0
          ? void 0
          : s.protocol) === "https:",
      ip: !0,
      opt_out_capturing_by_default: !1,
      opt_out_persistence_by_default: !1,
      opt_out_useragent_filter: !1,
      opt_out_capturing_persistence_type: "localStorage",
      opt_out_capturing_cookie_prefix: null,
      opt_in_site_apps: !1,
      property_denylist: [],
      respect_dnt: !1,
      sanitize_properties: null,
      request_headers: {},
      inapp_protocol: "//",
      inapp_link_new_window: !1,
      request_batching: !0,
      properties_string_max_length: 65535,
      session_recording: {},
      mask_all_element_attributes: !1,
      mask_all_text: !1,
      advanced_disable_decide: !1,
      advanced_disable_feature_flags: !1,
      advanced_disable_feature_flags_on_first_load: !1,
      advanced_disable_toolbar_metrics: !1,
      feature_flag_request_timeout_ms: 3e3,
      on_request_error: (e) => {
        const t = "Bad HTTP status: " + e.statusCode + " " + e.text;
        g.error(t);
      },
      get_device_id: (e) => e,
      _onCapture: Js,
      capture_performance: void 0,
      name: "posthog",
      bootstrap: {},
      disable_compression: !1,
      session_idle_timeout_seconds: 1800,
      person_profiles: "identified_only",
      __add_tracing_headers: !1,
    };
  },
  Ys = (s) => {
    const e = {};
    (S(s.process_person) || (e.person_profiles = s.process_person),
      S(s.xhr_headers) || (e.request_headers = s.xhr_headers),
      S(s.cookie_name) || (e.persistence_name = s.cookie_name),
      S(s.disable_cookie) || (e.disable_persistence = s.disable_cookie));
    const t = Q({}, e, s);
    return (
      q(s.property_blacklist) &&
        (S(s.property_denylist)
          ? (t.property_denylist = s.property_blacklist)
          : q(s.property_denylist)
            ? (t.property_denylist = [
                ...s.property_blacklist,
                ...s.property_denylist,
              ])
            : g.error(
                "Invalid value for property_denylist config: " +
                  s.property_denylist,
              )),
      t
    );
  };
class Wo {
  get _forceAllowLocalhost() {
    return this.__forceAllowLocalhost;
  }
  set _forceAllowLocalhost(e) {
    (g.error(
      "WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`",
    ),
      (this.__forceAllowLocalhost = e));
  }
  __forceAllowLocalhost = !1;
}
class ei {
  webPerformance = new Wo();
  version = xe.LIB_VERSION;
  _internalEventEmitter = new qn();
  constructor() {
    ((this.config = Xs()),
      (this.decideEndpointWasHit = !1),
      (this.SentryIntegration = go),
      (this.sentryIntegration = (e) =>
        (function (t, i) {
          const n = Nn(t, i);
          return { name: On, processEvent: (r) => n(r) };
        })(this, e)),
      (this.__request_queue = []),
      (this.__loaded = !1),
      (this.analyticsDefaultEndpoint = "/e/"),
      (this._initialPageviewCaptured = !1),
      (this._initialPersonProfilesConfig = null),
      (this.featureFlags = new ur(this)),
      (this.toolbar = new ro(this)),
      (this.scrollManager = new $o(this)),
      (this.pageViewManager = new vo(this)),
      (this.surveys = new ko(this)),
      (this.experiments = new B(this)),
      (this.exceptions = new Ho(this)),
      (this.rateLimiter = new Io(this)),
      (this.requestRouter = new _o(this)),
      (this.consent = new Oo(this)),
      (this.people = {
        set: (e, t, i) => {
          const n = W(e) ? { [e]: t } : e;
          (this.setPersonProperties(n), i?.({}));
        },
        set_once: (e, t, i) => {
          const n = W(e) ? { [e]: t } : e;
          (this.setPersonProperties(void 0, n), i?.({}));
        },
      }),
      this.on("eventCaptured", (e) => g.info(`send "${e?.event}"`, e)));
  }
  init(e, t, i) {
    if (i && i !== je) {
      var n;
      const r = (n = ft[i]) !== null && n !== void 0 ? n : new ei();
      return (r._init(e, t, i), (ft[i] = r), (ft[je][i] = r), r);
    }
    return this._init(e, t, i);
  }
  _init(e) {
    var t, i;
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = arguments.length > 2 ? arguments[2] : void 0;
    if (S(e) || ss(e))
      return (
        g.critical(
          "PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()",
        ),
        this
      );
    if (this.__loaded)
      return (
        g.warn(
          "You have already initialized PostHog! Re-initializing is a no-op",
        ),
        this
      );
    ((this.__loaded = !0),
      (this.config = {}),
      (this._triggered_notifs = []),
      n.person_profiles &&
        (this._initialPersonProfilesConfig = n.person_profiles),
      this.set_config(Q({}, Xs(), Ys(n), { name: r, token: e })),
      this.config.on_xhr_error &&
        g.error(
          "[posthog] on_xhr_error is deprecated. Use on_request_error instead",
        ),
      (this.compression = n.disable_compression ? void 0 : le.GZipJS),
      (this.persistence = new oi(this.config)),
      (this.sessionPersistence =
        this.config.persistence === "sessionStorage"
          ? this.persistence
          : new oi({ ...this.config, persistence: "sessionStorage" })));
    const o = { ...this.persistence.props },
      a = { ...this.sessionPersistence.props };
    if (
      ((this._requestQueue = new oo((h) => this._send_retriable_request(h))),
      (this._retryQueue = new ho(this)),
      (this.__request_queue = []),
      (this.sessionManager = new po(this.config, this.persistence)),
      (this.sessionPropsManager = new Ro(
        this.sessionManager,
        this.persistence,
      )),
      new Do(this).startIfEnabledOrStop(),
      (this.sessionRecording = new io(this)),
      this.sessionRecording.startIfEnabledOrStop(),
      this.config.disable_scroll_properties ||
        this.scrollManager.startMeasuringScrollPosition(),
      (this.autocapture = new Lo(this)),
      this.autocapture.startIfEnabled(),
      this.surveys.loadIfEnabled(),
      (this.heatmaps = new Co(this)),
      this.heatmaps.startIfEnabled(),
      (this.webVitalsAutocapture = new qo(this)),
      (this.exceptionObserver = new No(this)),
      this.exceptionObserver.startIfEnabled(),
      (this.deadClicksAutocapture = new Uo(this)),
      this.deadClicksAutocapture.startIfEnabled(),
      (xe.DEBUG = xe.DEBUG || this.config.debug),
      xe.DEBUG &&
        g.info("Starting in debug mode", {
          this: this,
          config: n,
          thisC: { ...this.config },
          p: o,
          s: a,
        }),
      this._sync_opt_out_with_persistence(),
      ((t = n.bootstrap) === null || t === void 0 ? void 0 : t.distinctID) !==
        void 0)
    ) {
      var l, c;
      const h = this.config.get_device_id(Fe()),
        _ =
          (l = n.bootstrap) !== null && l !== void 0 && l.isIdentifiedID
            ? h
            : n.bootstrap.distinctID;
      (this.persistence.set_property(
        ge,
        (c = n.bootstrap) !== null && c !== void 0 && c.isIdentifiedID
          ? "identified"
          : "anonymous",
      ),
        this.register({ distinct_id: n.bootstrap.distinctID, $device_id: _ }));
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var d, u;
      const h = Object.keys(
          ((d = n.bootstrap) === null || d === void 0
            ? void 0
            : d.featureFlags) || {},
        )
          .filter((f) => {
            var v, b;
            return !(
              (v = n.bootstrap) === null ||
              v === void 0 ||
              (b = v.featureFlags) === null ||
              b === void 0 ||
              !b[f]
            );
          })
          .reduce((f, v) => {
            var b, w;
            return (
              (f[v] =
                ((b = n.bootstrap) === null ||
                b === void 0 ||
                (w = b.featureFlags) === null ||
                w === void 0
                  ? void 0
                  : w[v]) || !1),
              f
            );
          }, {}),
        _ = Object.keys(
          ((u = n.bootstrap) === null || u === void 0
            ? void 0
            : u.featureFlagPayloads) || {},
        )
          .filter((f) => h[f])
          .reduce((f, v) => {
            var b, w, y, k;
            return (
              (b = n.bootstrap) !== null &&
                b !== void 0 &&
                (w = b.featureFlagPayloads) !== null &&
                w !== void 0 &&
                w[v] &&
                (f[v] =
                  (y = n.bootstrap) === null ||
                  y === void 0 ||
                  (k = y.featureFlagPayloads) === null ||
                  k === void 0
                    ? void 0
                    : k[v]),
              f
            );
          }, {});
      this.featureFlags.receivedFeatureFlags({
        featureFlags: h,
        featureFlagPayloads: _,
      });
    }
    if (!this.get_distinct_id()) {
      const h = this.config.get_device_id(Fe());
      (this.register_once({ distinct_id: h, $device_id: h }, ""),
        this.persistence.set_property(ge, "anonymous"));
    }
    return (
      p == null ||
        (i = p.addEventListener) === null ||
        i === void 0 ||
        i.call(
          p,
          "onpagehide" in self ? "pagehide" : "unload",
          this._handle_unload.bind(this),
        ),
      this.toolbar.maybeLoadToolbar(),
      n.segment ? fo(this, () => this._loaded()) : this._loaded(),
      se(this.config._onCapture) &&
        this.on("eventCaptured", (h) => this.config._onCapture(h.event, h)),
      this
    );
  }
  _afterDecideResponse(e) {
    var t, i, n, r, o, a, l, c, d, u;
    ((this.compression = void 0),
      e.supportedCompression &&
        !this.config.disable_compression &&
        (this.compression = I(e.supportedCompression, le.GZipJS)
          ? le.GZipJS
          : I(e.supportedCompression, le.Base64)
            ? le.Base64
            : void 0),
      (t = e.analytics) !== null &&
        t !== void 0 &&
        t.endpoint &&
        (this.analyticsDefaultEndpoint = e.analytics.endpoint),
      this.set_config({
        person_profiles: this._initialPersonProfilesConfig
          ? this._initialPersonProfilesConfig
          : e.defaultIdentifiedOnly
            ? "identified_only"
            : "always",
      }),
      (i = this.sessionRecording) === null ||
        i === void 0 ||
        i.afterDecideResponse(e),
      (n = this.autocapture) === null ||
        n === void 0 ||
        n.afterDecideResponse(e),
      (r = this.heatmaps) === null || r === void 0 || r.afterDecideResponse(e),
      (o = this.experiments) === null ||
        o === void 0 ||
        o.afterDecideResponse(e),
      (a = this.surveys) === null || a === void 0 || a.afterDecideResponse(e),
      (l = this.webVitalsAutocapture) === null ||
        l === void 0 ||
        l.afterDecideResponse(e),
      (c = this.exceptions) === null ||
        c === void 0 ||
        c.afterDecideResponse(e),
      (d = this.exceptionObserver) === null ||
        d === void 0 ||
        d.afterDecideResponse(e),
      (u = this.deadClicksAutocapture) === null ||
        u === void 0 ||
        u.afterDecideResponse(e));
  }
  _loaded() {
    const e = this.config.advanced_disable_decide;
    e || this.featureFlags.setReloadingPaused(!0);
    try {
      this.config.loaded(this);
    } catch (t) {
      g.critical("`loaded` function failed", t);
    }
    (this._start_queue_if_opted_in(),
      this.config.capture_pageview &&
        setTimeout(() => {
          this.consent.isOptedIn() && this._captureInitialPageview();
        }, 1),
      e || (new so(this).call(), this.featureFlags.resetRequestQueue()));
  }
  _start_queue_if_opted_in() {
    var e;
    this.has_opted_out_capturing() ||
      (this.config.request_batching &&
        ((e = this._requestQueue) === null || e === void 0 || e.enable()));
  }
  _dom_loaded() {
    (this.has_opted_out_capturing() ||
      Xe(this.__request_queue, (e) => this._send_retriable_request(e)),
      (this.__request_queue = []),
      this._start_queue_if_opted_in());
  }
  _handle_unload() {
    var e, t;
    this.config.request_batching
      ? (this._shouldCapturePageleave() && this.capture("$pageleave"),
        (e = this._requestQueue) === null || e === void 0 || e.unload(),
        (t = this._retryQueue) === null || t === void 0 || t.unload())
      : this._shouldCapturePageleave() &&
        this.capture("$pageleave", null, { transport: "sendBeacon" });
  }
  _send_request(e) {
    this.__loaded &&
      (Kn
        ? this.__request_queue.push(e)
        : this.rateLimiter.isServerRateLimited(e.batchKey) ||
          ((e.transport = e.transport || this.config.api_transport),
          (e.url = Gt(e.url, { ip: this.config.ip ? 1 : 0 })),
          (e.headers = { ...this.config.request_headers }),
          (e.compression =
            e.compression === "best-available"
              ? this.compression
              : e.compression),
          ((t) => {
            var i, n, r;
            const o = { ...t };
            ((o.timeout = o.timeout || 6e4),
              (o.url = Gt(o.url, {
                _: new Date().getTime().toString(),
                ver: xe.LIB_VERSION,
                compression: o.compression,
              })));
            const a = (i = o.transport) !== null && i !== void 0 ? i : "XHR",
              l =
                (n =
                  (r = tn(gt, (c) => c.transport === a)) === null ||
                  r === void 0
                    ? void 0
                    : r.method) !== null && n !== void 0
                  ? n
                  : gt[0].method;
            if (!l) throw new Error("No available transport method");
            l(o);
          })({
            ...e,
            callback: (t) => {
              var i, n, r;
              (this.rateLimiter.checkForLimiting(t),
                t.statusCode >= 400 &&
                  ((n = (r = this.config).on_request_error) === null ||
                    n === void 0 ||
                    n.call(r, t)),
                (i = e.callback) === null || i === void 0 || i.call(e, t));
            },
          })));
  }
  _send_retriable_request(e) {
    this._retryQueue
      ? this._retryQueue.retriableRequest(e)
      : this._send_request(e);
  }
  _execute_array(e) {
    let t;
    const i = [],
      n = [],
      r = [];
    Xe(e, (a) => {
      a &&
        ((t = a[0]),
        q(t)
          ? r.push(a)
          : se(a)
            ? a.call(this)
            : q(a) && t === "alias"
              ? i.push(a)
              : q(a) && t.indexOf("capture") !== -1 && se(this[t])
                ? r.push(a)
                : n.push(a));
    });
    const o = function (a, l) {
      Xe(
        a,
        function (c) {
          if (q(c[0])) {
            let d = l;
            R(c, function (u) {
              d = d[u[0]].apply(d, u.slice(1));
            });
          } else this[c[0]].apply(this, c.slice(1));
        },
        l,
      );
    };
    (o(i, this), o(n, this), o(r, this));
  }
  _hasBootstrappedFeatureFlags() {
    var e, t;
    return (
      (((e = this.config.bootstrap) === null || e === void 0
        ? void 0
        : e.featureFlags) &&
        Object.keys(
          (t = this.config.bootstrap) === null || t === void 0
            ? void 0
            : t.featureFlags,
        ).length > 0) ||
      !1
    );
  }
  push(e) {
    this._execute_array([e]);
  }
  capture(e, t, i) {
    var n;
    if (
      !(
        this.__loaded &&
        this.persistence &&
        this.sessionPersistence &&
        this._requestQueue
      )
    )
      return void g.uninitializedWarning("posthog.capture");
    if (this.consent.isOptedOut()) return;
    if (S(e) || !W(e))
      return void g.error("No event name provided to posthog.capture");
    if (!this.config.opt_out_useragent_filter && this._is_bot()) return;
    const r =
      i != null && i.skip_client_rate_limiting
        ? void 0
        : this.rateLimiter.clientRateLimitContext();
    if (r != null && r.isRateLimited)
      return void g.critical(
        "This capture call is ignored due to client rate limiting.",
      );
    (this.sessionPersistence.update_search_keyword(),
      this.config.store_google &&
        this.sessionPersistence.update_campaign_params(),
      this.config.save_referrer &&
        this.sessionPersistence.update_referrer_info(),
      (this.config.store_google || this.config.save_referrer) &&
        this.persistence.set_initial_person_info());
    const o = new Date(),
      a = i?.timestamp || o;
    let l = {
      uuid: Fe(),
      event: e,
      properties: this._calculate_event_properties(e, t || {}, a),
    };
    (r && (l.properties.$lib_rate_limit_remaining_tokens = r.remainingTokens),
      i?.$set && (l.$set = i?.$set));
    const c = this._calculate_set_once_properties(i?.$set_once);
    (c && (l.$set_once = c),
      (l = or(
        l,
        i != null && i._noTruncate
          ? null
          : this.config.properties_string_max_length,
      )),
      (l.timestamp = a),
      S(i?.timestamp) ||
        ((l.properties.$event_time_override_provided = !0),
        (l.properties.$event_time_override_system_time = o)));
    const d = { ...l.properties.$set, ...l.$set };
    (ht(d) || this.setPersonPropertiesForFlags(d),
      this._internalEventEmitter.emit("eventCaptured", l));
    const u = {
      method: "POST",
      url:
        (n = i?._url) !== null && n !== void 0
          ? n
          : this.requestRouter.endpointFor(
              "api",
              this.analyticsDefaultEndpoint,
            ),
      data: l,
      compression: "best-available",
      batchKey: i?._batchKey,
    };
    return (
      !this.config.request_batching ||
      (i && (i == null || !i._batchKey)) ||
      (i != null && i.send_instantly)
        ? this._send_retriable_request(u)
        : this._requestQueue.enqueue(u),
      l
    );
  }
  _addCaptureHook(e) {
    return this.on("eventCaptured", (t) => e(t.event, t));
  }
  _calculate_event_properties(e, t, i) {
    if (((i = i || new Date()), !this.persistence || !this.sessionPersistence))
      return t;
    const n = this.persistence.remove_event_timer(e);
    let r = { ...t };
    if (((r.token = this.config.token), e === "$snapshot")) {
      const c = {
        ...this.persistence.properties(),
        ...this.sessionPersistence.properties(),
      };
      return (
        (r.distinct_id = c.distinct_id),
        ((!W(r.distinct_id) && !Z(r.distinct_id)) || ss(r.distinct_id)) &&
          g.error(
            "Invalid distinct_id for replay event. This indicates a bug in your implementation",
          ),
        r
      );
    }
    const o = L.properties();
    if (this.sessionManager) {
      const { sessionId: c, windowId: d } =
        this.sessionManager.checkAndGetSessionAndWindowId();
      ((r.$session_id = c), (r.$window_id = d));
    }
    if (
      (this.requestRouter.region === Ue.CUSTOM &&
        (r.$lib_custom_api_host = this.config.api_host),
      this.sessionPropsManager &&
        this.config.__preview_send_client_session_params &&
        (e === "$pageview" || e === "$pageleave" || e === "$autocapture"))
    ) {
      const c = this.sessionPropsManager.getSessionProps();
      r = Q(r, c);
    }
    if (!this.config.disable_scroll_properties) {
      let c = {};
      (e === "$pageview"
        ? (c = this.pageViewManager.doPageView(i))
        : e === "$pageleave" && (c = this.pageViewManager.doPageLeave(i)),
        (r = Q(r, c)));
    }
    if ((e === "$pageview" && m && (r.title = m.title), !S(n))) {
      const c = i.getTime() - n;
      r.$duration = parseFloat((c / 1e3).toFixed(3));
    }
    (H &&
      this.config.opt_out_useragent_filter &&
      (r.$browser_type = this._is_bot() ? "bot" : "browser"),
      (r = Q(
        {},
        o,
        this.persistence.properties(),
        this.sessionPersistence.properties(),
        r,
      )),
      (r.$is_identified = this._isIdentified()),
      q(this.config.property_denylist)
        ? R(this.config.property_denylist, function (c) {
            delete r[c];
          })
        : g.error(
            "Invalid value for property_denylist config: " +
              this.config.property_denylist +
              " or property_blacklist config: " +
              this.config.property_blacklist,
          ));
    const a = this.config.sanitize_properties;
    a && (r = a(r, e));
    const l = this._hasPersonProcessing();
    return (
      (r.$process_person_profile = l),
      l && this._requirePersonProcessing("_calculate_event_properties"),
      r
    );
  }
  _calculate_set_once_properties(e) {
    if (!this.persistence || !this._hasPersonProcessing()) return e;
    let t = Q({}, this.persistence.get_initial_props(), e || {});
    const i = this.config.sanitize_properties;
    return (i && (t = i(t, "$set_once")), ht(t) ? void 0 : t);
  }
  register(e, t) {
    var i;
    (i = this.persistence) === null || i === void 0 || i.register(e, t);
  }
  register_once(e, t, i) {
    var n;
    (n = this.persistence) === null || n === void 0 || n.register_once(e, t, i);
  }
  register_for_session(e) {
    var t;
    (t = this.sessionPersistence) === null || t === void 0 || t.register(e);
  }
  unregister(e) {
    var t;
    (t = this.persistence) === null || t === void 0 || t.unregister(e);
  }
  unregister_for_session(e) {
    var t;
    (t = this.sessionPersistence) === null || t === void 0 || t.unregister(e);
  }
  _register_single(e, t) {
    this.register({ [e]: t });
  }
  getFeatureFlag(e, t) {
    return this.featureFlags.getFeatureFlag(e, t);
  }
  getFeatureFlagPayload(e) {
    const t = this.featureFlags.getFeatureFlagPayload(e);
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  isFeatureEnabled(e, t) {
    return this.featureFlags.isFeatureEnabled(e, t);
  }
  reloadFeatureFlags() {
    this.featureFlags.reloadFeatureFlags();
  }
  updateEarlyAccessFeatureEnrollment(e, t) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t);
  }
  getEarlyAccessFeatures(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    return this.featureFlags.getEarlyAccessFeatures(e, t);
  }
  on(e, t) {
    return this._internalEventEmitter.on(e, t);
  }
  onFeatureFlags(e) {
    return this.featureFlags.onFeatureFlags(e);
  }
  onSessionId(e) {
    var t, i;
    return (t =
      (i = this.sessionManager) === null || i === void 0
        ? void 0
        : i.onSessionId(e)) !== null && t !== void 0
      ? t
      : () => {};
  }
  getSurveys(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    this.surveys.getSurveys(e, t);
  }
  getActiveMatchingSurveys(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    this.surveys.getActiveMatchingSurveys(e, t);
  }
  renderSurvey(e, t) {
    this.surveys.renderSurvey(e, t);
  }
  canRenderSurvey(e) {
    this.surveys.canRenderSurvey(e);
  }
  getNextSurveyStep(e, t, i) {
    return this.surveys.getNextSurveyStep(e, t, i);
  }
  identify(e, t, i) {
    if (!this.__loaded || !this.persistence)
      return g.uninitializedWarning("posthog.identify");
    if (
      (Z(e) &&
        ((e = e.toString()),
        g.warn(
          "The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.",
        )),
      !e)
    )
      return void g.error(
        "Unique user id has not been set in posthog.identify",
      );
    if (["distinct_id", "distinctid"].includes(e.toLowerCase()))
      return void g.critical(
        `The string "${e}" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.`,
      );
    if (!this._requirePersonProcessing("posthog.identify")) return;
    const n = this.get_distinct_id();
    if ((this.register({ $user_id: e }), !this.get_property("$device_id"))) {
      const o = n;
      this.register_once({ $had_persisted_distinct_id: !0, $device_id: o }, "");
    }
    e !== n &&
      e !== this.get_property(lt) &&
      (this.unregister(lt), this.register({ distinct_id: e }));
    const r =
      (this.persistence.get_property(ge) || "anonymous") === "anonymous";
    (e !== n && r
      ? (this.persistence.set_property(ge, "identified"),
        this.setPersonPropertiesForFlags(t || {}, !1),
        this.capture(
          "$identify",
          { distinct_id: e, $anon_distinct_id: n },
          { $set: t || {}, $set_once: i || {} },
        ),
        this.featureFlags.setAnonymousDistinctId(n))
      : (t || i) && this.setPersonProperties(t, i),
      e !== n && (this.reloadFeatureFlags(), this.unregister(Ot)));
  }
  setPersonProperties(e, t) {
    (e || t) &&
      this._requirePersonProcessing("posthog.setPersonProperties") &&
      (this.setPersonPropertiesForFlags(e || {}),
      this.capture("$set", { $set: e || {}, $set_once: t || {} }));
  }
  group(e, t, i) {
    if (!e || !t)
      return void g.error("posthog.group requires a group type and group key");
    if (!this._requirePersonProcessing("posthog.group")) return;
    const n = this.getGroups();
    (n[e] !== t && this.resetGroupPropertiesForFlags(e),
      this.register({ $groups: { ...n, [e]: t } }),
      i &&
        (this.capture("$groupidentify", {
          $group_type: e,
          $group_key: t,
          $group_set: i,
        }),
        this.setGroupPropertiesForFlags({ [e]: i })),
      n[e] === t || i || this.reloadFeatureFlags());
  }
  resetGroups() {
    (this.register({ $groups: {} }),
      this.resetGroupPropertiesForFlags(),
      this.reloadFeatureFlags());
  }
  setPersonPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") &&
      this.featureFlags.setPersonPropertiesForFlags(e, t);
  }
  resetPersonPropertiesForFlags() {
    this.featureFlags.resetPersonPropertiesForFlags();
  }
  setGroupPropertiesForFlags(e) {
    let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") &&
      this.featureFlags.setGroupPropertiesForFlags(e, t);
  }
  resetGroupPropertiesForFlags(e) {
    this.featureFlags.resetGroupPropertiesForFlags(e);
  }
  reset(e) {
    var t, i, n, r, o;
    if ((g.info("reset"), !this.__loaded))
      return g.uninitializedWarning("posthog.reset");
    const a = this.get_property("$device_id");
    (this.consent.reset(),
      (t = this.persistence) === null || t === void 0 || t.clear(),
      (i = this.sessionPersistence) === null || i === void 0 || i.clear(),
      (n = this.surveys) === null || n === void 0 || n.reset(),
      (r = this.persistence) === null ||
        r === void 0 ||
        r.set_property(ge, "anonymous"),
      (o = this.sessionManager) === null || o === void 0 || o.resetSessionId());
    const l = this.config.get_device_id(Fe());
    this.register_once({ distinct_id: l, $device_id: e ? l : a }, "");
  }
  get_distinct_id() {
    return this.get_property("distinct_id");
  }
  getGroups() {
    return this.get_property("$groups") || {};
  }
  get_session_id() {
    var e, t;
    return (e =
      (t = this.sessionManager) === null || t === void 0
        ? void 0
        : t.checkAndGetSessionAndWindowId(!0).sessionId) !== null &&
      e !== void 0
      ? e
      : "";
  }
  get_session_replay_url(e) {
    if (!this.sessionManager) return "";
    const { sessionId: t, sessionStartTimestamp: i } =
      this.sessionManager.checkAndGetSessionAndWindowId(!0);
    let n = this.requestRouter.endpointFor(
      "ui",
      `/project/${this.config.token}/replay/${t}`,
    );
    if (e != null && e.withTimestamp && i) {
      var r;
      const o = (r = e.timestampLookBack) !== null && r !== void 0 ? r : 10;
      if (!i) return n;
      n += `?t=${Math.max(Math.floor((new Date().getTime() - i) / 1e3) - o, 0)}`;
    }
    return n;
  }
  alias(e, t) {
    return e === this.get_property(sn)
      ? (g.critical(
          "Attempting to create alias for existing People user - aborting.",
        ),
        -2)
      : this._requirePersonProcessing("posthog.alias")
        ? (S(t) && (t = this.get_distinct_id()),
          e !== t
            ? (this._register_single(lt, e),
              this.capture("$create_alias", { alias: e, distinct_id: t }))
            : (g.warn("alias matches current distinct_id - skipping api call."),
              this.identify(e),
              -1))
        : void 0;
  }
  set_config(e) {
    const t = { ...this.config };
    var i, n, r, o;
    D(e) &&
      (Q(this.config, Ys(e)),
      (i = this.persistence) === null ||
        i === void 0 ||
        i.update_config(this.config, t),
      (this.sessionPersistence =
        this.config.persistence === "sessionStorage"
          ? this.persistence
          : new oi({ ...this.config, persistence: "sessionStorage" })),
      N.is_supported() &&
        N.get("ph_debug") === "true" &&
        (this.config.debug = !0),
      this.config.debug &&
        ((xe.DEBUG = !0),
        g.info("set_config", {
          config: e,
          oldConfig: t,
          newConfig: { ...this.config },
        })),
      (n = this.sessionRecording) === null ||
        n === void 0 ||
        n.startIfEnabledOrStop(),
      (r = this.autocapture) === null || r === void 0 || r.startIfEnabled(),
      (o = this.heatmaps) === null || o === void 0 || o.startIfEnabled(),
      this.surveys.loadIfEnabled(),
      this._sync_opt_out_with_persistence());
  }
  startSessionRecording(e) {
    const t = Re(e) && e;
    if (t || (e != null && e.sampling) || (e != null && e.linked_flag)) {
      var i;
      const o =
        (i = this.sessionManager) === null || i === void 0
          ? void 0
          : i.checkAndGetSessionAndWindowId();
      var n, r;
      ((t || (e != null && e.sampling)) &&
        ((n = this.sessionRecording) === null ||
          n === void 0 ||
          n.overrideSampling(),
        g.info(
          "Session recording started with sampling override for session: ",
          o?.sessionId,
        )),
        (t || (e != null && e.linked_flag)) &&
          ((r = this.sessionRecording) === null ||
            r === void 0 ||
            r.overrideLinkedFlag(),
          g.info("Session recording started with linked_flags override")));
    }
    this.set_config({ disable_session_recording: !1 });
  }
  stopSessionRecording() {
    this.set_config({ disable_session_recording: !0 });
  }
  sessionRecordingStarted() {
    var e;
    return !(
      (e = this.sessionRecording) === null ||
      e === void 0 ||
      !e.started
    );
  }
  captureException(e, t) {
    var i;
    const n = new Error("PostHog syntheticException"),
      r = se(
        (i = E.__PosthogExtensions__) === null || i === void 0
          ? void 0
          : i.parseErrorAsProperties,
      )
        ? E.__PosthogExtensions__.parseErrorAsProperties(
            [e.message, void 0, void 0, void 0, e],
            { syntheticException: n },
          )
        : {
            $exception_level: "error",
            $exception_list: [
              {
                type: e.name,
                value: e.message,
                mechanism: { handled: !0, synthetic: !1 },
              },
            ],
            ...t,
          };
    this.exceptions.sendExceptionEvent(r);
  }
  loadToolbar(e) {
    return this.toolbar.loadToolbar(e);
  }
  get_property(e) {
    var t;
    return (t = this.persistence) === null || t === void 0
      ? void 0
      : t.props[e];
  }
  getSessionProperty(e) {
    var t;
    return (t = this.sessionPersistence) === null || t === void 0
      ? void 0
      : t.props[e];
  }
  toString() {
    var e;
    let t = (e = this.config.name) !== null && e !== void 0 ? e : je;
    return (t !== je && (t = je + "." + t), t);
  }
  _isIdentified() {
    var e, t;
    return (
      ((e = this.persistence) === null || e === void 0
        ? void 0
        : e.get_property(ge)) === "identified" ||
      ((t = this.sessionPersistence) === null || t === void 0
        ? void 0
        : t.get_property(ge)) === "identified"
    );
  }
  _hasPersonProcessing() {
    var e, t, i, n;
    return !(
      this.config.person_profiles === "never" ||
      (this.config.person_profiles === "identified_only" &&
        !this._isIdentified() &&
        ht(this.getGroups()) &&
        ((e = this.persistence) === null ||
          e === void 0 ||
          (t = e.props) === null ||
          t === void 0 ||
          !t[lt]) &&
        ((i = this.persistence) === null ||
          i === void 0 ||
          (n = i.props) === null ||
          n === void 0 ||
          !n[Nt]))
    );
  }
  _shouldCapturePageleave() {
    return (
      this.config.capture_pageleave === !0 ||
      (this.config.capture_pageleave === "if_capture_pageview" &&
        this.config.capture_pageview)
    );
  }
  createPersonProfile() {
    this._hasPersonProcessing() ||
      (this._requirePersonProcessing("posthog.createPersonProfile") &&
        this.setPersonProperties({}, {}));
  }
  _requirePersonProcessing(e) {
    return this.config.person_profiles === "never"
      ? (g.error(
          e +
            ' was called, but process_person is set to "never". This call will be ignored.',
        ),
        !1)
      : (this._register_single(Nt, !0), !0);
  }
  _sync_opt_out_with_persistence() {
    var e, t;
    const i = this.consent.isOptedOut(),
      n = this.config.opt_out_persistence_by_default,
      r = this.config.disable_persistence || (i && !!n);
    var o, a;
    (((e = this.persistence) === null || e === void 0 ? void 0 : e.disabled) !==
      r &&
      ((o = this.persistence) === null || o === void 0 || o.set_disabled(r)),
      ((t = this.sessionPersistence) === null || t === void 0
        ? void 0
        : t.disabled) !== r &&
        ((a = this.sessionPersistence) === null ||
          a === void 0 ||
          a.set_disabled(r)));
  }
  opt_in_capturing(e) {
    var t;
    (this.consent.optInOut(!0),
      this._sync_opt_out_with_persistence(),
      (S(e?.captureEventName) || (e != null && e.captureEventName)) &&
        this.capture(
          (t = e?.captureEventName) !== null && t !== void 0 ? t : "$opt_in",
          e?.captureProperties,
          { send_instantly: !0 },
        ),
      this.config.capture_pageview && this._captureInitialPageview());
  }
  opt_out_capturing() {
    (this.consent.optInOut(!1), this._sync_opt_out_with_persistence());
  }
  has_opted_in_capturing() {
    return this.consent.isOptedIn();
  }
  has_opted_out_capturing() {
    return this.consent.isOptedOut();
  }
  clear_opt_in_out_capturing() {
    (this.consent.reset(), this._sync_opt_out_with_persistence());
  }
  _is_bot() {
    return ee ? Xn(ee, this.config.custom_blocked_useragents) : void 0;
  }
  _captureInitialPageview() {
    m &&
      !this._initialPageviewCaptured &&
      ((this._initialPageviewCaptured = !0),
      this.capture("$pageview", { title: m.title }, { send_instantly: !0 }));
  }
  debug(e) {
    e === !1
      ? (p?.console.log("You've disabled debug mode."),
        localStorage && localStorage.removeItem("ph_debug"),
        this.set_config({ debug: !1 }))
      : (p?.console.log(
          "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`.",
        ),
        localStorage && localStorage.setItem("ph_debug", "true"),
        this.set_config({ debug: !0 }));
  }
}
(function (s, e) {
  for (let t = 0; t < e.length; t++) s.prototype[e[t]] = rr(s.prototype[e[t]]);
})(ei, ["identify"]);
const zo = (function () {
    const s = (ft[je] = new ei());
    return (
      (function () {
        function e() {
          e.done ||
            ((e.done = !0),
            (Kn = !1),
            R(ft, function (t) {
              t._dom_loaded();
            }));
        }
        (m != null &&
          m.addEventListener &&
          (m.readyState === "complete"
            ? e()
            : m.addEventListener("DOMContentLoaded", e, !1)),
          p && ve(p, "load", e, !0));
      })(),
      s
    );
  })(),
  Vo = void 0;
zo.init(`${Vo}`, { api_host: "https://us.i.posthog.com" });
