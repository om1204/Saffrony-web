// Copyright 2012 Google Inc. All rights reserved.

(function () {
  var data = {
    resource: {
      version: "2",

      macros: [
        { function: "__e" },
        {
          function: "__u",
          vtp_component: "URL",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "HOST",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        {
          function: "__u",
          vtp_component: "PATH",
          vtp_enableMultiQueryKeys: false,
          vtp_enableIgnoreEmptyQueryParam: false,
        },
        { function: "__f", vtp_component: "URL" },
        { function: "__e" },
      ],
      tags: [
        {
          function: "__googtag",
          metadata: ["map"],
          once_per_event: true,
          vtp_tagId: "G-79B1M1F6CX",
          vtp_configSettingsTable: [
            "list",
            ["map", "parameter", "send_page_view", "parameterValue", "true"],
          ],
          tag_id: 3,
        },
      ],
      predicates: [{ function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" }],
      rules: [
        [
          ["if", 0],
          ["add", 0],
        ],
      ],
    },
    runtime: [
      [
        50,
        "__e",
        [46, "a"],
        [
          36,
          [
            13,
            [41, "$0"],
            [3, "$0", ["require", "internal.getEventData"]],
            ["$0", "event"],
          ],
        ],
      ],
      [
        50,
        "__googtag",
        [46, "a"],
        [
          50,
          "l",
          [46, "u", "v"],
          [
            66,
            "w",
            [2, [15, "b"], "keys", [7, [15, "v"]]],
            [46, [43, [15, "u"], [15, "w"], [16, [15, "v"], [15, "w"]]]],
          ],
        ],
        [
          50,
          "m",
          [46],
          [
            36,
            [
              7,
              [17, [17, [15, "d"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
              [17, [17, [15, "d"], "SCHEMA"], "EP_TRANSPORT_URL"],
            ],
          ],
        ],
        [
          50,
          "n",
          [46, "u"],
          [52, "v", ["m"]],
          [
            65,
            "w",
            [15, "v"],
            [
              46,
              [
                53,
                [52, "x", [16, [15, "u"], [15, "w"]]],
                [22, [15, "x"], [46, [36, [15, "x"]]]],
              ],
            ],
          ],
          [36, [44]],
        ],
        [52, "b", ["require", "Object"]],
        [52, "c", ["require", "createArgumentsQueue"]],
        [52, "d", [15, "__module_gtag"]],
        [52, "e", ["require", "internal.gtagConfig"]],
        [52, "f", ["require", "getType"]],
        [52, "g", ["require", "internal.loadGoogleTag"]],
        [52, "h", ["require", "logToConsole"]],
        [52, "i", ["require", "makeNumber"]],
        [52, "j", ["require", "makeString"]],
        [52, "k", ["require", "makeTableMap"]],
        [52, "o", [30, [17, [15, "a"], "tagId"], ""]],
        [
          22,
          [
            30,
            [21, ["f", [15, "o"]], "string"],
            [24, [2, [15, "o"], "indexOf", [7, "-"]], 0],
          ],
          [
            46,
            [
              "h",
              [
                0,
                "Invalid Measurement ID for the GA4 Configuration tag: ",
                [15, "o"],
              ],
            ],
            [2, [15, "a"], "gtmOnFailure", [7]],
            [36],
          ],
        ],
        [52, "p", [30, [17, [15, "a"], "configSettingsVariable"], [8]]],
        [
          52,
          "q",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "configSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "p"], [15, "q"]],
        [52, "r", [30, [17, [15, "a"], "eventSettingsVariable"], [8]]],
        [
          52,
          "s",
          [
            30,
            [
              "k",
              [30, [17, [15, "a"], "eventSettingsTable"], [7]],
              "parameter",
              "parameterValue",
            ],
            [8],
          ],
        ],
        ["l", [15, "r"], [15, "s"]],
        [52, "t", [15, "p"]],
        ["l", [15, "t"], [15, "r"]],
        [
          22,
          [
            30,
            [
              2,
              [15, "t"],
              "hasOwnProperty",
              [7, [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"]],
            ],
            [17, [15, "a"], "userProperties"],
          ],
          [
            46,
            [
              53,
              [
                52,
                "u",
                [
                  30,
                  [
                    16,
                    [15, "t"],
                    [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                  ],
                  [8],
                ],
              ],
              [
                "l",
                [15, "u"],
                [
                  30,
                  [
                    "k",
                    [30, [17, [15, "a"], "userProperties"], [7]],
                    "name",
                    "value",
                  ],
                  [8],
                ],
              ],
              [
                43,
                [15, "t"],
                [17, [17, [15, "d"], "SCHEMA"], "EP_USER_PROPERTIES"],
                [15, "u"],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_BOOLEAN_FIELDS"],
            [
              51,
              "",
              [7, "u"],
              [
                36,
                [
                  39,
                  [20, "false", [2, ["j", [15, "u"]], "toLowerCase", [7]]],
                  false,
                  [28, [28, [15, "u"]]],
                ],
              ],
            ],
          ],
        ],
        [
          2,
          [15, "d"],
          "convertParameters",
          [
            7,
            [15, "t"],
            [17, [15, "d"], "GOLD_NUMERIC_FIELDS"],
            [51, "", [7, "u"], [36, ["i", [15, "u"]]]],
          ],
        ],
        ["g", [15, "o"], [8, "firstPartyUrl", ["n", [15, "t"]]]],
        ["e", [15, "o"], [15, "t"], [8, "noTargetGroup", true]],
        [2, [15, "a"], "gtmOnSuccess", [7]],
      ],
      [
        52,
        "__module_gtag",
        [
          13,
          [41, "$0"],
          [
            3,
            "$0",
            [
              51,
              "",
              [7],
              [
                50,
                "a",
                [46],
                [
                  50,
                  "f",
                  [46, "g", "h", "i"],
                  [
                    65,
                    "j",
                    [15, "h"],
                    [
                      46,
                      [
                        22,
                        [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                        [
                          46,
                          [
                            43,
                            [15, "g"],
                            [15, "j"],
                            ["i", [16, [15, "g"], [15, "j"]]],
                          ],
                        ],
                      ],
                    ],
                  ],
                ],
                [52, "b", ["require", "Object"]],
                [
                  52,
                  "c",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        8,
                        "EP_FIRST_PARTY_COLLECTION",
                        "first_party_collection",
                        "EP_SERVER_CONTAINER_URL",
                        "server_container_url",
                        "EP_TRANSPORT_URL",
                        "transport_url",
                        "EP_USER_PROPERTIES",
                        "user_properties",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "d",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "allow_ad_personalization_signals",
                        "allow_direct_google_requests",
                        "allow_google_signals",
                        "cookie_update",
                        "ignore_referrer",
                        "update",
                        "first_party_collection",
                        "send_page_view",
                      ],
                    ],
                  ],
                ],
                [
                  52,
                  "e",
                  [
                    2,
                    [15, "b"],
                    "freeze",
                    [
                      7,
                      [
                        7,
                        "cookie_expires",
                        "event_timeout",
                        "session_duration",
                        "session_engaged_time",
                        "engagement_time_msec",
                      ],
                    ],
                  ],
                ],
                [
                  36,
                  [
                    8,
                    "SCHEMA",
                    [15, "c"],
                    "GOLD_BOOLEAN_FIELDS",
                    [15, "d"],
                    "GOLD_NUMERIC_FIELDS",
                    [15, "e"],
                    "convertParameters",
                    [15, "f"],
                  ],
                ],
              ],
              [36, ["a"]],
            ],
          ],
          ["$0"],
        ],
      ],
    ],
    entities: {
      __e: { 2: true, 4: true },
      __googtag: { 1: 10 },
    },
    blob: { 1: "2" },
    permissions: {
      __e: {
        read_event_data: {
          eventDataAccess: "specific",
          keyPatterns: ["event"],
        },
      },
      __googtag: {
        logging: { environments: "debug" },
        access_globals: {
          keys: [
            { key: "gtag", read: true, write: true, execute: true },
            { key: "dataLayer", read: true, write: true, execute: false },
          ],
        },
        configure_google_tags: { allowedTagIds: "any" },
        load_google_tags: {
          allowedTagIds: "any",
          allowFirstPartyUrls: true,
          allowedFirstPartyUrls: "any",
        },
      },
    },

    security_groups: {
      google: ["__e", "__googtag"],
    },
  };

  var h,
    ba = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    ca =
      typeof Object.defineProperties == "function"
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    fa = function (a) {
      for (
        var b = [
            "object" == typeof globalThis && globalThis,
            a,
            "object" == typeof window && window,
            "object" == typeof self && self,
            "object" == typeof global && global,
          ],
          c = 0;
        c < b.length;
        ++c
      ) {
        var d = b[c];
        if (d && d.Math == Math) return d;
      }
      throw Error("Cannot find global object");
    },
    ha = fa(this),
    ia = function (a, b) {
      if (b)
        a: {
          for (var c = ha, d = a.split("."), e = 0; e < d.length - 1; e++) {
            var f = d[e];
            if (!(f in c)) break a;
            c = c[f];
          }
          var g = d[d.length - 1],
            k = c[g],
            m = b(k);
          m != k &&
            m != null &&
            ca(c, g, { configurable: !0, writable: !0, value: m });
        }
    };
  ia("Symbol", function (a) {
    if (a) return a;
    var b = function (f, g) {
      this.j = f;
      ca(this, "description", { configurable: !0, writable: !0, value: g });
    };
    b.prototype.toString = function () {
      return this.j;
    };
    var c = "jscomp_symbol_" + ((Math.random() * 1e9) >>> 0) + "_",
      d = 0,
      e = function (f) {
        if (this instanceof e)
          throw new TypeError("Symbol is not a constructor");
        return new b(c + (f || "") + "_" + d++, f);
      };
    return e;
  });
  var ja =
      typeof Object.create == "function"
        ? Object.create
        : function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
          },
    ka;
  if (typeof Object.setPrototypeOf == "function") ka = Object.setPrototypeOf;
  else {
    var la;
    a: {
      var pa = { a: !0 },
        qa = {};
      try {
        qa.__proto__ = pa;
        la = qa.a;
        break a;
      } catch (a) {}
      la = !1;
    }
    ka = la
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var ra = ka,
    sa = function (a, b) {
      a.prototype = ja(b.prototype);
      a.prototype.constructor = a;
      if (ra) ra(a, b);
      else
        for (var c in b)
          if (c != "prototype")
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.Ao = b.prototype;
    },
    l = function (a) {
      var b =
        typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == "number") return { next: ba(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    ta = function (a) {
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      return c;
    },
    ua = function (a) {
      return a instanceof Array ? a : ta(l(a));
    },
    wa = function (a) {
      return va(a, a);
    },
    va = function (a, b) {
      a.raw = b;
      Object.freeze && (Object.freeze(a), Object.freeze(b));
      return a;
    },
    ya =
      typeof Object.assign == "function"
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d)
                for (var e in d)
                  Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  ia("Object.assign", function (a) {
    return a || ya;
  });
  var za = function () {
    for (var a = Number(this), b = [], c = a; c < arguments.length; c++)
      b[c - a] = arguments[c];
    return b;
  }; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var Aa = this || self;
  var Ba = function (a, b) {
    this.type = a;
    this.data = b;
  };
  Ba.prototype.getType = function () {
    return this.type;
  };
  Ba.prototype.getData = function () {
    return this.data;
  };
  var Ca = function () {
    this.map = {};
    this.j = {};
  };
  h = Ca.prototype;
  h.get = function (a) {
    return this.map["dust." + a];
  };
  h.set = function (a, b) {
    var c = "dust." + a;
    this.j.hasOwnProperty(c) || (this.map[c] = b);
  };
  h.Di = function (a, b) {
    this.set(a, b);
    this.j["dust." + a] = !0;
  };
  h.has = function (a) {
    return this.map.hasOwnProperty("dust." + a);
  };
  h.remove = function (a) {
    var b = "dust." + a;
    this.j.hasOwnProperty(b) || delete this.map[b];
  };
  var Da = function (a, b) {
    var c = [],
      d;
    for (d in a.map)
      if (a.map.hasOwnProperty(d)) {
        var e = d.substring(5);
        switch (b) {
          case 1:
            c.push(e);
            break;
          case 2:
            c.push(a.map[d]);
            break;
          case 3:
            c.push([e, a.map[d]]);
        }
      }
    return c;
  };
  Ca.prototype.na = function () {
    return Da(this, 1);
  };
  Ca.prototype.Yb = function () {
    return Da(this, 2);
  };
  Ca.prototype.Ib = function () {
    return Da(this, 3);
  };
  var Ea = function () {};
  Ea.prototype.reset = function () {};
  var Fa = function (a, b) {
    this.K = a;
    this.parent = b;
    this.j = this.C = void 0;
    this.Bc = !1;
    this.H = function (c, d, e) {
      return c.apply(d, e);
    };
    this.values = new Ca();
  };
  Fa.prototype.add = function (a, b) {
    Ha(this, a, b, !1);
  };
  var Ha = function (a, b, c, d) {
    a.Bc || (d ? a.values.Di(b, c) : a.values.set(b, c));
  };
  Fa.prototype.set = function (a, b) {
    this.Bc ||
      (!this.values.has(a) && this.parent && this.parent.has(a)
        ? this.parent.set(a, b)
        : this.values.set(a, b));
  };
  Fa.prototype.get = function (a) {
    return this.values.has(a)
      ? this.values.get(a)
      : this.parent
      ? this.parent.get(a)
      : void 0;
  };
  Fa.prototype.has = function (a) {
    return !!this.values.has(a) || !(!this.parent || !this.parent.has(a));
  };
  var Ia = function (a) {
    var b = new Fa(a.K, a);
    a.C && (b.C = a.C);
    b.H = a.H;
    b.j = a.j;
    return b;
  };
  Fa.prototype.Qd = function () {
    return this.K;
  };
  Fa.prototype.Ia = function () {
    this.Bc = !0;
  };
  function Ja(a, b) {
    for (
      var c, d = l(b), e = d.next();
      !e.done && !((c = Ka(a, e.value)), c instanceof Ba);
      e = d.next()
    );
    return c;
  }
  function Ka(a, b) {
    try {
      var c = l(b),
        d = c.next().value,
        e = ta(c),
        f = a.get(String(d));
      if (!f || typeof f.invoke !== "function")
        throw Error("Attempting to execute non-function " + b[0] + ".");
      return f.invoke.apply(f, [a].concat(ua(e)));
    } catch (k) {
      var g = a.C;
      g && g(k, b.context ? { id: b[0], line: b.context.line } : null);
      throw k;
    }
  }
  var La = function () {
    this.C = new Ea();
    this.j = new Fa(this.C);
  };
  h = La.prototype;
  h.Qd = function () {
    return this.C;
  };
  h.execute = function (a) {
    return this.Ai([a].concat(ua(za.apply(1, arguments))));
  };
  h.Ai = function () {
    for (
      var a, b = l(za.apply(0, arguments)), c = b.next();
      !c.done;
      c = b.next()
    )
      a = Ka(this.j, c.value);
    return a;
  };
  h.Il = function (a) {
    var b = za.apply(1, arguments),
      c = Ia(this.j);
    c.j = a;
    for (var d, e = l(b), f = e.next(); !f.done; f = e.next())
      d = Ka(c, f.value);
    return d;
  };
  h.Ia = function () {
    this.j.Ia();
  };
  var Ma = function () {
    this.oa = !1;
    this.T = new Ca();
  };
  h = Ma.prototype;
  h.get = function (a) {
    return this.T.get(a);
  };
  h.set = function (a, b) {
    this.oa || this.T.set(a, b);
  };
  h.has = function (a) {
    return this.T.has(a);
  };
  h.Di = function (a, b) {
    this.oa || this.T.Di(a, b);
  };
  h.remove = function (a) {
    this.oa || this.T.remove(a);
  };
  h.na = function () {
    return this.T.na();
  };
  h.Yb = function () {
    return this.T.Yb();
  };
  h.Ib = function () {
    return this.T.Ib();
  };
  h.Ia = function () {
    this.oa = !0;
  };
  h.Bc = function () {
    return this.oa;
  };
  function Na() {
    for (var a = Oa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b;
  }
  function Pa() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + ".";
  }
  var Oa, Qa;
  function Ra(a) {
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var b = [], c = 0; c < a.length; c += 3) {
      var d = c + 1 < a.length,
        e = c + 2 < a.length,
        f = a.charCodeAt(c),
        g = d ? a.charCodeAt(c + 1) : 0,
        k = e ? a.charCodeAt(c + 2) : 0,
        m = f >> 2,
        n = ((f & 3) << 4) | (g >> 4),
        p = ((g & 15) << 2) | (k >> 6),
        q = k & 63;
      e || ((q = 64), d || (p = 64));
      b.push(Oa[m], Oa[n], Oa[p], Oa[q]);
    }
    return b.join("");
  }
  function Ta(a) {
    function b(m) {
      for (; d < a.length; ) {
        var n = a.charAt(d++),
          p = Qa[n];
        if (p != null) return p;
        if (!/^[\s\xa0]*$/.test(n))
          throw Error("Unknown base64 encoding at char: " + n);
      }
      return m;
    }
    Oa = Oa || Pa();
    Qa = Qa || Na();
    for (var c = "", d = 0; ; ) {
      var e = b(-1),
        f = b(0),
        g = b(64),
        k = b(64);
      if (k === 64 && e === -1) return c;
      c += String.fromCharCode((e << 2) | (f >> 4));
      g !== 64 &&
        ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
        k !== 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
    }
  }
  var Va = {};
  function Wa(a, b) {
    Va[a] = Va[a] || [];
    Va[a][b] = !0;
  }
  function Xa(a) {
    var b = Va[a];
    if (!b || b.length === 0) return "";
    for (var c = [], d = 0, e = 0; e < b.length; e++)
      e % 8 === 0 && e > 0 && (c.push(String.fromCharCode(d)), (d = 0)),
        b[e] && (d |= 1 << e % 8);
    d > 0 && c.push(String.fromCharCode(d));
    return Ra(c.join("")).replace(/\.+$/, "");
  }
  function Ya() {
    for (var a = [], b = Va.fdr || [], c = 0; c < b.length; c++)
      b[c] && a.push(c);
    return a.length > 0 ? a : void 0;
  }
  function Za() {}
  function $a(a) {
    return typeof a === "function";
  }
  function z(a) {
    return typeof a === "string";
  }
  function ab(a) {
    return typeof a === "number" && !isNaN(a);
  }
  function bb(a) {
    return Array.isArray(a) ? a : [a];
  }
  function cb(a, b) {
    if (a && Array.isArray(a))
      for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
  }
  function db(a, b) {
    if (!ab(a) || !ab(b) || a > b) (a = 0), (b = 2147483647);
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  function eb(a, b) {
    for (var c = new fb(), d = 0; d < a.length; d++) c.set(a[d], !0);
    for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
    return !1;
  }
  function hb(a, b) {
    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
  }
  function ib(a) {
    return (
      !!a &&
      (Object.prototype.toString.call(a) === "[object Arguments]" ||
        Object.prototype.hasOwnProperty.call(a, "callee"))
    );
  }
  function jb(a) {
    return Math.round(Number(a)) || 0;
  }
  function kb(a) {
    return "false" === String(a).toLowerCase() ? !1 : !!a;
  }
  function lb(a) {
    var b = [];
    if (Array.isArray(a))
      for (var c = 0; c < a.length; c++) b.push(String(a[c]));
    return b;
  }
  function mb(a) {
    return a ? a.replace(/^\s+|\s+$/g, "") : "";
  }
  function nb() {
    return new Date(Date.now());
  }
  function ob() {
    return nb().getTime();
  }
  var fb = function () {
    this.prefix = "gtm.";
    this.values = {};
  };
  fb.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b;
  };
  fb.prototype.get = function (a) {
    return this.values[this.prefix + a];
  };
  fb.prototype.contains = function (a) {
    return this.get(a) !== void 0;
  };
  function pb(a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c;
  }
  function qb(a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c();
        } catch (d) {}
      }
    };
  }
  function rb(a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  }
  function sb(a, b) {
    for (var c = [], d = 0; d < a.length; d++)
      c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c;
  }
  function tb(a, b) {
    return a.length >= b.length && a.substring(0, b.length) === b;
  }
  function ub(a, b) {
    return (
      a.length >= b.length && a.substring(a.length - b.length, a.length) === b
    );
  }
  function vb(a, b) {
    var c = A;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (b.indexOf(d) >= 0) return;
    }
    return d;
  }
  function wb(a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++)
      d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c;
  }
  var xb = /^\w{1,9}$/;
  function yb(a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    hb(a, function (d, e) {
      xb.test(d) && e && c.push(d);
    });
    return c.join(b);
  }
  function zb(a, b) {
    function c() {
      e && ++d === b && (e(), (e = null), (c.done = !0));
    }
    var d = 0,
      e = a;
    c.done = !1;
    return c;
  }
  function Ab(a) {
    if (!a) return a;
    var b = a;
    try {
      b = decodeURIComponent(a);
    } catch (d) {}
    var c = b.split(",");
    return c.length === 2 && c[0] === c[1] ? c[0] : a;
  }
  function Bb(a, b, c) {
    function d(n) {
      var p = n.split("=")[0];
      if (a.indexOf(p) < 0) return n;
      if (c !== void 0) return p + "=" + c;
    }
    function e(n) {
      return n
        .split("&")
        .map(d)
        .filter(function (p) {
          return p !== void 0;
        })
        .join("&");
    }
    var f = b.href.split(/[?#]/)[0],
      g = b.search,
      k = b.hash;
    g[0] === "?" && (g = g.substring(1));
    k[0] === "#" && (k = k.substring(1));
    g = e(g);
    k = e(k);
    g !== "" && (g = "?" + g);
    k !== "" && (k = "#" + k);
    var m = "" + f + g + k;
    m[m.length - 1] === "/" && (m = m.substring(0, m.length - 1));
    return m;
  }
  function Cb(a) {
    for (var b = 0; b < 3; ++b)
      try {
        var c = decodeURIComponent(a).replace(/\+/g, " ");
        if (c === a) break;
        a = c;
      } catch (d) {
        return "";
      }
    return a;
  } /*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
  var Db = globalThis.trustedTypes,
    Eb;
  function Fb() {
    var a = null;
    if (!Db) return a;
    try {
      var b = function (c) {
        return c;
      };
      a = Db.createPolicy("goog#html", {
        createHTML: b,
        createScript: b,
        createScriptURL: b,
      });
    } catch (c) {}
    return a;
  }
  function Gb() {
    Eb === void 0 && (Eb = Fb());
    return Eb;
  }
  var Hb = function (a) {
    this.j = a;
  };
  Hb.prototype.toString = function () {
    return this.j + "";
  };
  function Ib(a) {
    var b = a,
      c = Gb();
    return new Hb(c ? c.createScriptURL(b) : b);
  }
  function Jb(a) {
    if (a instanceof Hb) return a.j;
    throw Error("");
  }
  var Kb = wa([""]),
    Lb = va(["\x00"], ["\\0"]),
    Mb = va(["\n"], ["\\n"]),
    Nb = va(["\x00"], ["\\u0000"]);
  function Ob(a) {
    return a.toString().indexOf("`") === -1;
  }
  Ob(function (a) {
    return a(Kb);
  }) ||
    Ob(function (a) {
      return a(Lb);
    }) ||
    Ob(function (a) {
      return a(Mb);
    }) ||
    Ob(function (a) {
      return a(Nb);
    });
  var Pb = function (a) {
    this.j = a;
  };
  Pb.prototype.toString = function () {
    return this.j;
  };
  var Qb = function (a) {
    this.Zm = a;
  };
  function Rb(a) {
    return new Qb(function (b) {
      return b.substr(0, a.length + 1).toLowerCase() === a + ":";
    });
  }
  var Sb = [
    Rb("data"),
    Rb("http"),
    Rb("https"),
    Rb("mailto"),
    Rb("ftp"),
    new Qb(function (a) {
      return /^[^:]*([/?#]|$)/.test(a);
    }),
  ];
  function Tb(a) {
    var b;
    b = b === void 0 ? Sb : b;
    if (a instanceof Pb) return a;
    for (var c = 0; c < b.length; ++c) {
      var d = b[c];
      if (d instanceof Qb && d.Zm(a)) return new Pb(a);
    }
  }
  var Ub = /^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
  function Vb(a) {
    var b;
    if (a instanceof Pb)
      if (a instanceof Pb) b = a.j;
      else throw Error("");
    else b = Ub.test(a) ? a : void 0;
    return b;
  }
  function Wb(a, b) {
    var c = Vb(b);
    c !== void 0 && (a.action = c);
  }
  var Xb = function (a) {
    this.j = a;
  };
  Xb.prototype.toString = function () {
    return this.j + "";
  };
  var Zb = function () {
    this.j = Yb[0].toLowerCase();
  };
  Zb.prototype.toString = function () {
    return this.j;
  };
  function $b(a, b) {
    var c = [new Zb()];
    if (c.length === 0) throw Error("");
    var d = c.map(function (f) {
        var g;
        if (f instanceof Zb) g = f.j;
        else throw Error("");
        return g;
      }),
      e = b.toLowerCase();
    if (
      d.every(function (f) {
        return e.indexOf(f) !== 0;
      })
    )
      throw Error(
        'Attribute "' + b + '" does not match any of the allowed prefixes.'
      );
    a.setAttribute(b, "true");
  }
  var ac = Array.prototype.indexOf
    ? function (a, b) {
        return Array.prototype.indexOf.call(a, b, void 0);
      }
    : function (a, b) {
        if (typeof a === "string")
          return typeof b !== "string" || b.length != 1 ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
        return -1;
      };
  "ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT"
    .split(" ")
    .concat(["BUTTON", "INPUT"]);
  function bc(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a;
  }
  var A = window,
    cc = window.history,
    F = document,
    dc = navigator;
  function ec() {
    var a;
    try {
      a = dc.serviceWorker;
    } catch (b) {
      return;
    }
    return a;
  }
  var fc = F.currentScript,
    gc = fc && fc.src;
  function hc(a, b) {
    var c = A[a];
    A[a] = c === void 0 ? b : c;
    return A[a];
  }
  function ic(a) {
    return (dc.userAgent || "").indexOf(a) !== -1;
  }
  var jc = { async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1 },
    kc = { onload: 1, src: 1, width: 1, height: 1, style: 1 };
  function lc(a, b, c) {
    b &&
      hb(b, function (d, e) {
        d = d.toLowerCase();
        c.hasOwnProperty(d) || a.setAttribute(d, e);
      });
  }
  function mc(a, b, c, d, e) {
    var f = F.createElement("script");
    lc(f, d, jc);
    f.type = "text/javascript";
    f.async = d && d.async === !1 ? !1 : !0;
    var g;
    g = Ib(bc(a));
    f.src = Jb(g);
    var k,
      m = f.ownerDocument;
    m = m === void 0 ? document : m;
    var n,
      p,
      q =
        (p = (n = m).querySelector) == null
          ? void 0
          : p.call(n, "script[nonce]");
    (k = q == null ? "" : q.nonce || q.getAttribute("nonce") || "") &&
      f.setAttribute("nonce", k);
    b && (f.onload = b);
    c && (f.onerror = c);
    if (e) e.appendChild(f);
    else {
      var r = F.getElementsByTagName("script")[0] || F.body || F.head;
      r.parentNode.insertBefore(f, r);
    }
    return f;
  }
  function nc() {
    if (gc) {
      var a = gc.toLowerCase();
      if (a.indexOf("https://") === 0) return 2;
      if (a.indexOf("http://") === 0) return 3;
    }
    return 1;
  }
  function oc(a, b, c, d, e) {
    var f;
    f = f === void 0 ? !0 : f;
    var g = e,
      k = !1;
    g || ((g = F.createElement("iframe")), (k = !0));
    lc(g, c, kc);
    d &&
      hb(d, function (n, p) {
        g.dataset[n] = p;
      });
    f &&
      ((g.height = "0"),
      (g.width = "0"),
      (g.style.display = "none"),
      (g.style.visibility = "hidden"));
    a !== void 0 && (g.src = a);
    if (k) {
      var m = (F.body && F.body.lastChild) || F.body || F.head;
      m.parentNode.insertBefore(g, m);
    }
    b && (g.onload = b);
    return g;
  }
  function pc(a, b, c, d) {
    qc(a, b, c, d);
  }
  function rc(a, b, c, d) {
    a.addEventListener && a.addEventListener(b, c, !!d);
  }
  function sc(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }
  function G(a) {
    A.setTimeout(a, 0);
  }
  function tc(a, b) {
    return a && b && a.attributes && a.attributes[b]
      ? a.attributes[b].value
      : null;
  }
  function uc(a) {
    var b = a.innerText || a.textContent || "";
    b &&
      b !== " " &&
      ((b = b.replace(/^[\s\xa0]+/g, "")), (b = b.replace(/[\s\xa0]+$/g, "")));
    b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b;
  }
  function vc(a) {
    var b = F.createElement("div"),
      c = b,
      d,
      e = bc("A<div>" + a + "</div>"),
      f = Gb();
    d = new Xb(f ? f.createHTML(e) : e);
    if (c.nodeType === 1 && /^(script|style)$/i.test(c.tagName))
      throw Error("");
    var g;
    if (d instanceof Xb) g = d.j;
    else throw Error("");
    c.innerHTML = g;
    b = b.lastChild;
    for (var k = []; b && b.firstChild; ) k.push(b.removeChild(b.firstChild));
    return k;
  }
  function wc(a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement;
    }
    return null;
  }
  function xc(a, b, c) {
    var d;
    try {
      d = dc.sendBeacon && dc.sendBeacon(a);
    } catch (e) {
      Wa("TAGGING", 15);
    }
    d ? b == null || b() : qc(a, b, c);
  }
  function yc(a, b) {
    try {
      return dc.sendBeacon(a, b);
    } catch (c) {
      Wa("TAGGING", 15);
    }
    return !1;
  }
  var zc = {
    cache: "no-store",
    credentials: "include",
    keepalive: !0,
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
  };
  function Ac(a, b, c, d, e) {
    if (Bc()) {
      var f = Object.assign({}, zc);
      b && (f.body = b);
      c &&
        (c.attributionReporting &&
          (f.attributionReporting = c.attributionReporting),
        c.browsingTopics && (f.browsingTopics = c.browsingTopics),
        c.credentials && (f.credentials = c.credentials),
        c.mode && (f.mode = c.mode));
      try {
        var g = A.fetch(a, f);
        if (g)
          return (
            g
              .then(function (m) {
                m && (m.ok || m.status === 0)
                  ? d == null || d()
                  : e == null || e();
              })
              .catch(function () {
                e == null || e();
              }),
            !0
          );
      } catch (m) {}
    }
    if (c && c.Gk) return e == null || e(), !1;
    if (b) {
      var k = yc(a, b);
      k ? d == null || d() : e == null || e();
      return k;
    }
    xc(a, d, e);
    return !0;
  }
  function Bc() {
    return typeof A.fetch === "function";
  }
  function Cc(a, b) {
    var c = a[b];
    c && typeof c.animVal === "string" && (c = c.animVal);
    return c;
  }
  function Dc() {
    var a = A.performance;
    if (a && $a(a.now)) return a.now();
  }
  function Ec() {
    var a,
      b = A.performance;
    if (b && b.getEntriesByType)
      try {
        var c = b.getEntriesByType("navigation");
        c && c.length > 0 && (a = c[0].type);
      } catch (d) {
        return "e";
      }
    if (!a) return "u";
    switch (a) {
      case "navigate":
        return "n";
      case "back_forward":
        return "h";
      case "reload":
        return "r";
      case "prerender":
        return "p";
      default:
        return "x";
    }
  }
  function Fc() {
    return A.performance || void 0;
  }
  function Gc() {
    var a = A.webPixelsManager;
    return a ? a.createShopifyExtend !== void 0 : !1;
  }
  var qc = function (a, b, c, d) {
    var e = new Image(1, 1);
    lc(e, d, {});
    e.onload = function () {
      e.onload = null;
      b && b();
    };
    e.onerror = function () {
      e.onerror = null;
      c && c();
    };
    e.src = a;
    return e;
  };
  function Hc(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function Ic(a, b) {
    return this.evaluate(a) === this.evaluate(b);
  }
  function Jc(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function Kc(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    return String(c).indexOf(String(d)) > -1;
  }
  function Lc(a, b) {
    var c = String(this.evaluate(a)),
      d = String(this.evaluate(b));
    return c.substring(0, d.length) === d;
  }
  function Mc(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    switch (c) {
      case "pageLocation":
        var e = A.location.href;
        d instanceof Ma &&
          d.get("stripProtocol") &&
          (e = e.replace(/^https?:\/\//, ""));
        return e;
    }
  } /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
  var Nc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
    Oc = function (a) {
      if (a == null) return String(a);
      var b = Nc.exec(Object.prototype.toString.call(Object(a)));
      return b ? b[1].toLowerCase() : "object";
    },
    Pc = function (a, b) {
      return Object.prototype.hasOwnProperty.call(Object(a), b);
    },
    Rc = function (a) {
      if (!a || Oc(a) != "object" || a.nodeType || a == a.window) return !1;
      try {
        if (
          a.constructor &&
          !Pc(a, "constructor") &&
          !Pc(a.constructor.prototype, "isPrototypeOf")
        )
          return !1;
      } catch (c) {
        return !1;
      }
      for (var b in a);
      return b === void 0 || Pc(a, b);
    },
    Sc = function (a, b) {
      var c = b || (Oc(a) == "array" ? [] : {}),
        d;
      for (d in a)
        if (Pc(a, d)) {
          var e = a[d];
          Oc(e) == "array"
            ? (Oc(c[d]) != "array" && (c[d] = []), (c[d] = Sc(e, c[d])))
            : Rc(e)
            ? (Rc(c[d]) || (c[d] = {}), (c[d] = Sc(e, c[d])))
            : (c[d] = e);
        }
      return c;
    };
  function Tc(a) {
    if (a == void 0 || Array.isArray(a) || Rc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0;
    }
    return !1;
  }
  function Uc(a) {
    return (
      (typeof a === "number" && a >= 0 && isFinite(a) && a % 1 === 0) ||
      (typeof a === "string" && a[0] !== "-" && a === "" + parseInt(a))
    );
  }
  var Vc = function (a) {
    a = a === void 0 ? [] : a;
    this.T = new Ca();
    this.values = [];
    this.oa = !1;
    for (var b in a)
      a.hasOwnProperty(b) &&
        (Uc(b) ? (this.values[Number(b)] = a[Number(b)]) : this.T.set(b, a[b]));
  };
  h = Vc.prototype;
  h.toString = function (a) {
    if (a && a.indexOf(this) >= 0) return "";
    for (var b = [], c = 0; c < this.values.length; c++) {
      var d = this.values[c];
      d === null || d === void 0
        ? b.push("")
        : d instanceof Vc
        ? ((a = a || []), a.push(this), b.push(d.toString(a)), a.pop())
        : b.push(String(d));
    }
    return b.join(",");
  };
  h.set = function (a, b) {
    if (!this.oa)
      if (a === "length") {
        if (!Uc(b))
          throw Error("RangeError: Length property must be a valid integer.");
        this.values.length = Number(b);
      } else Uc(a) ? (this.values[Number(a)] = b) : this.T.set(a, b);
  };
  h.get = function (a) {
    return a === "length"
      ? this.length()
      : Uc(a)
      ? this.values[Number(a)]
      : this.T.get(a);
  };
  h.length = function () {
    return this.values.length;
  };
  h.na = function () {
    for (var a = this.T.na(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(String(b));
    return a;
  };
  h.Yb = function () {
    for (var a = this.T.Yb(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push(this.values[b]);
    return a;
  };
  h.Ib = function () {
    for (var a = this.T.Ib(), b = 0; b < this.values.length; b++)
      this.values.hasOwnProperty(b) && a.push([String(b), this.values[b]]);
    return a;
  };
  h.remove = function (a) {
    Uc(a) ? delete this.values[Number(a)] : this.oa || this.T.remove(a);
  };
  h.pop = function () {
    return this.values.pop();
  };
  h.push = function () {
    return this.values.push.apply(this.values, ua(za.apply(0, arguments)));
  };
  h.shift = function () {
    return this.values.shift();
  };
  h.splice = function (a, b) {
    var c = za.apply(2, arguments);
    return b === void 0 && c.length === 0
      ? new Vc(this.values.splice(a))
      : new Vc(
          this.values.splice.apply(this.values, [a, b || 0].concat(ua(c)))
        );
  };
  h.unshift = function () {
    return this.values.unshift.apply(this.values, ua(za.apply(0, arguments)));
  };
  h.has = function (a) {
    return (Uc(a) && this.values.hasOwnProperty(a)) || this.T.has(a);
  };
  h.Ia = function () {
    this.oa = !0;
    Object.freeze(this.values);
  };
  h.Bc = function () {
    return this.oa;
  };
  function Wc(a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b;
  }
  var Xc = function (a, b) {
    this.functionName = a;
    this.Pd = b;
    this.T = new Ca();
    this.oa = !1;
  };
  h = Xc.prototype;
  h.toString = function () {
    return this.functionName;
  };
  h.getName = function () {
    return this.functionName;
  };
  h.invoke = function (a) {
    return this.Pd.call.apply(
      this.Pd,
      [new Yc(this, a)].concat(ua(za.apply(1, arguments)))
    );
  };
  h.ib = function (a) {
    var b = za.apply(1, arguments);
    try {
      return this.invoke.apply(this, [a].concat(ua(b)));
    } catch (c) {}
  };
  h.get = function (a) {
    return this.T.get(a);
  };
  h.set = function (a, b) {
    this.oa || this.T.set(a, b);
  };
  h.has = function (a) {
    return this.T.has(a);
  };
  h.remove = function (a) {
    this.oa || this.T.remove(a);
  };
  h.na = function () {
    return this.T.na();
  };
  h.Yb = function () {
    return this.T.Yb();
  };
  h.Ib = function () {
    return this.T.Ib();
  };
  h.Ia = function () {
    this.oa = !0;
  };
  h.Bc = function () {
    return this.oa;
  };
  var Yc = function (a, b) {
    this.Pd = a;
    this.D = b;
  };
  Yc.prototype.evaluate = function (a) {
    var b = this.D;
    return Array.isArray(a) ? Ka(b, a) : a;
  };
  Yc.prototype.getName = function () {
    return this.Pd.getName();
  };
  Yc.prototype.Qd = function () {
    return this.D.Qd();
  };
  var Zc = function () {
    this.map = new Map();
  };
  Zc.prototype.set = function (a, b) {
    this.map.set(a, b);
  };
  Zc.prototype.get = function (a) {
    return this.map.get(a);
  };
  var $c = function () {
    this.keys = [];
    this.values = [];
  };
  $c.prototype.set = function (a, b) {
    this.keys.push(a);
    this.values.push(b);
  };
  $c.prototype.get = function (a) {
    var b = this.keys.indexOf(a);
    if (b > -1) return this.values[b];
  };
  function ad() {
    try {
      return Map ? new Zc() : new $c();
    } catch (a) {
      return new $c();
    }
  }
  var bd = function (a) {
    if (a instanceof bd) return a;
    if (Tc(a)) throw Error("Type of given value has an equivalent Pixie type.");
    this.value = a;
  };
  bd.prototype.getValue = function () {
    return this.value;
  };
  bd.prototype.toString = function () {
    return String(this.value);
  };
  var dd = function (a) {
    this.promise = a;
    this.oa = !1;
    this.T = new Ca();
    this.T.set("then", cd(this));
    this.T.set("catch", cd(this, !0));
    this.T.set("finally", cd(this, !1, !0));
  };
  h = dd.prototype;
  h.get = function (a) {
    return this.T.get(a);
  };
  h.set = function (a, b) {
    this.oa || this.T.set(a, b);
  };
  h.has = function (a) {
    return this.T.has(a);
  };
  h.remove = function (a) {
    this.oa || this.T.remove(a);
  };
  h.na = function () {
    return this.T.na();
  };
  h.Yb = function () {
    return this.T.Yb();
  };
  h.Ib = function () {
    return this.T.Ib();
  };
  var cd = function (a, b, c) {
    b = b === void 0 ? !1 : b;
    c = c === void 0 ? !1 : c;
    return new Xc("", function (d, e) {
      b && ((e = d), (d = void 0));
      c && (e = d);
      d instanceof Xc || (d = void 0);
      e instanceof Xc || (e = void 0);
      var f = Ia(this.D),
        g = function (m) {
          return function (n) {
            return c ? (m.invoke(f), a.promise) : m.invoke(f, n);
          };
        },
        k = a.promise.then(d && g(d), e && g(e));
      return new dd(k);
    });
  };
  dd.prototype.Ia = function () {
    this.oa = !0;
  };
  dd.prototype.Bc = function () {
    return this.oa;
  };
  function H(a, b, c) {
    var d = ad(),
      e = function (g, k) {
        for (var m = g.na(), n = 0; n < m.length; n++) k[m[n]] = f(g.get(m[n]));
      },
      f = function (g) {
        if (g === null || g === void 0) return g;
        var k = d.get(g);
        if (k) return k;
        if (g instanceof Vc) {
          var m = [];
          d.set(g, m);
          for (var n = g.na(), p = 0; p < n.length; p++)
            m[n[p]] = f(g.get(n[p]));
          return m;
        }
        if (g instanceof dd) return g.promise;
        if (g instanceof Ma) {
          var q = {};
          d.set(g, q);
          e(g, q);
          return q;
        }
        if (g instanceof Xc) {
          var r = function () {
            for (
              var v = za.apply(0, arguments), t = [], w = 0;
              w < v.length;
              w++
            )
              t[w] = ed(v[w], b, c);
            var x = new Fa(b ? b.Qd() : new Ea());
            b && (x.j = b.j);
            return f(g.invoke.apply(g, [x].concat(ua(t))));
          };
          d.set(g, r);
          e(g, r);
          return r;
        }
        var u = !1;
        switch (c) {
          case 1:
            u = !0;
            break;
          case 2:
            u = !1;
            break;
          case 3:
            u = !1;
            break;
          default:
        }
        if (g instanceof bd && u) return g.getValue();
        switch (typeof g) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return g;
          case "object":
            if (g === null) return null;
        }
      };
    return f(a);
  }
  function ed(a, b, c) {
    var d = ad(),
      e = function (g, k) {
        for (var m in g) g.hasOwnProperty(m) && k.set(m, f(g[m]));
      },
      f = function (g) {
        var k = d.get(g);
        if (k) return k;
        if (Array.isArray(g) || ib(g)) {
          var m = new Vc([]);
          d.set(g, m);
          for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
          return m;
        }
        if (Rc(g)) {
          var p = new Ma();
          d.set(g, p);
          e(g, p);
          return p;
        }
        if (typeof g === "function") {
          var q = new Xc("", function () {
            for (
              var x = za.apply(0, arguments), y = [], B = 0;
              B < x.length;
              B++
            )
              y[B] = H(this.evaluate(x[B]), b, c);
            return f((0, this.D.H)(g, g, y));
          });
          d.set(g, q);
          e(g, q);
          return q;
        }
        var t = typeof g;
        if (g === null || t === "string" || t === "number" || t === "boolean")
          return g;
        var w = !1;
        switch (c) {
          case 1:
            w = !0;
            break;
          case 2:
            w = !1;
            break;
          default:
        }
        if (g !== void 0 && w) return new bd(g);
      };
    return f(a);
  }
  function fd() {
    var a = !1;
    return a;
  }
  var gd = {
    supportedMethods:
      "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(
        " "
      ),
    concat: function (a) {
      for (var b = [], c = 0; c < this.length(); c++) b.push(this.get(c));
      for (var d = 1; d < arguments.length; d++)
        if (arguments[d] instanceof Vc)
          for (var e = arguments[d], f = 0; f < e.length(); f++)
            b.push(e.get(f));
        else b.push(arguments[d]);
      return new Vc(b);
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
      return !0;
    },
    filter: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
      return new Vc(d);
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        this.has(d) && b.invoke(a, this.get(d), d, this);
    },
    hasOwnProperty: function (a, b) {
      return this.has(b);
    },
    indexOf: function (a, b, c) {
      var d = this.length(),
        e = c === void 0 ? 0 : Number(c);
      e < 0 && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b);
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(),
        e = d - 1;
      c !== void 0 && (e = c < 0 ? d + c : Math.min(c, e));
      for (var f = e; f >= 0; f--)
        if (this.has(f) && this.get(f) === b) return f;
      return -1;
    },
    map: function (a, b) {
      for (
        var c = this.length(), d = [], e = 0;
        e < this.length() && e < c;
        e++
      )
        this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
      return new Vc(d);
    },
    pop: function () {
      return this.pop();
    },
    push: function (a) {
      return this.push.apply(this, ua(za.apply(1, arguments)));
    },
    reduce: function (a, b, c) {
      var d = this.length(),
        e,
        f = 0;
      if (c !== void 0) e = c;
      else {
        if (d === 0) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++)
          if (this.has(g)) {
            e = this.get(g);
            f = g + 1;
            break;
          }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var k = f; k < d; k++)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reduceRight: function (a, b, c) {
      var d = this.length(),
        e,
        f = d - 1;
      if (c !== void 0) e = c;
      else {
        if (d === 0)
          throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++)
          if (this.has(d - g)) {
            e = this.get(d - g);
            f = d - (g + 1);
            break;
          }
        if (g > d)
          throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var k = f; k >= 0; k--)
        this.has(k) && (e = b.invoke(a, e, this.get(k), k, this));
      return e;
    },
    reverse: function () {
      for (var a = Wc(this), b = a.length - 1, c = 0; b >= 0; b--, c++)
        a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
      return this;
    },
    shift: function () {
      return this.shift();
    },
    slice: function (a, b, c) {
      var d = this.length();
      b === void 0 && (b = 0);
      b = b < 0 ? Math.max(d + b, 0) : Math.min(b, d);
      c = c === void 0 ? d : c < 0 ? Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new Vc(e);
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
        if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
      return !1;
    },
    sort: function (a, b) {
      var c = Wc(this);
      b === void 0
        ? c.sort()
        : c.sort(function (e, f) {
            return Number(b.invoke(a, e, f));
          });
      for (var d = 0; d < c.length; d++)
        c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
      return this;
    },
    splice: function (a, b, c) {
      return this.splice.apply(this, [b, c].concat(ua(za.apply(3, arguments))));
    },
    toString: function () {
      return this.toString();
    },
    unshift: function (a) {
      return this.unshift.apply(this, ua(za.apply(1, arguments)));
    },
  };
  var hd = function (a) {
    var b;
    b = Error.call(this, a);
    this.message = b.message;
    "stack" in b && (this.stack = b.stack);
  };
  sa(hd, Error);
  var id = {
      charAt: 1,
      concat: 1,
      indexOf: 1,
      lastIndexOf: 1,
      match: 1,
      replace: 1,
      search: 1,
      slice: 1,
      split: 1,
      substring: 1,
      toLowerCase: 1,
      toLocaleLowerCase: 1,
      toString: 1,
      toUpperCase: 1,
      toLocaleUpperCase: 1,
      trim: 1,
    },
    jd = new Ba("break"),
    kd = new Ba("continue");
  function ld(a, b) {
    return this.evaluate(a) + this.evaluate(b);
  }
  function md(a, b) {
    return this.evaluate(a) && this.evaluate(b);
  }
  function nd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (!(f instanceof Vc))
      throw Error("Error: Non-List argument given to Apply instruction.");
    if (d === null || d === void 0) {
      var g = "TypeError: Can't read property " + e + " of " + d + ".";
      if (fd()) throw new hd(g);
      throw Error(g);
    }
    var k = typeof d === "number";
    if (typeof d === "boolean" || k) {
      if (e === "toString") {
        if (k && f.length()) {
          var m = H(f.get(0));
          try {
            return d.toString(m);
          } catch (D) {}
        }
        return d.toString();
      }
      var n = "TypeError: " + d + "." + e + " is not a function.";
      if (fd()) throw new hd(n);
      throw Error(n);
    }
    if (typeof d === "string") {
      if (id.hasOwnProperty(e)) {
        var p = 2;
        p = 1;
        var q = H(f, void 0, p);
        return ed(d[e].apply(d, q), this.D);
      }
      var r = "TypeError: " + e + " is not a function";
      if (fd()) throw new hd(r);
      throw Error(r);
    }
    if (d instanceof Vc) {
      if (d.has(e)) {
        var u = d.get(String(e));
        if (u instanceof Xc) {
          var v = Wc(f);
          return u.invoke.apply(u, [this.D].concat(ua(v)));
        }
        var t = "TypeError: " + e + " is not a function";
        if (fd()) throw new hd(t);
        throw Error(t);
      }
      if (gd.supportedMethods.indexOf(e) >= 0) {
        var w = Wc(f);
        return gd[e].call.apply(gd[e], [d, this.D].concat(ua(w)));
      }
    }
    if (d instanceof Xc || d instanceof Ma || d instanceof dd) {
      if (d.has(e)) {
        var x = d.get(e);
        if (x instanceof Xc) {
          var y = Wc(f);
          return x.invoke.apply(x, [this.D].concat(ua(y)));
        }
        var B = "TypeError: " + e + " is not a function";
        if (fd()) throw new hd(B);
        throw Error(B);
      }
      if (e === "toString") return d instanceof Xc ? d.getName() : d.toString();
      if (e === "hasOwnProperty") return d.has(f.get(0));
    }
    if (d instanceof bd && e === "toString") return d.toString();
    var C = "TypeError: Object has no '" + e + "' property.";
    if (fd()) throw new hd(C);
    throw Error(C);
  }
  function od(a, b) {
    a = this.evaluate(a);
    if (typeof a !== "string")
      throw Error("Invalid key name given for assignment.");
    var c = this.D;
    if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
    var d = this.evaluate(b);
    c.set(a, d);
    return d;
  }
  function pd() {
    var a = za.apply(0, arguments),
      b = Ia(this.D),
      c = Ja(b, a);
    if (c instanceof Ba) return c;
  }
  function qd() {
    return jd;
  }
  function rd(a) {
    for (var b = this.evaluate(a), c = 0; c < b.length; c++) {
      var d = this.evaluate(b[c]);
      if (d instanceof Ba) return d;
    }
  }
  function sd() {
    for (var a = this.D, b = 0; b < arguments.length - 1; b += 2) {
      var c = arguments[b];
      if (typeof c === "string") {
        var d = this.evaluate(arguments[b + 1]);
        Ha(a, c, d, !0);
      }
    }
  }
  function td() {
    return kd;
  }
  function ud(a, b) {
    return new Ba(a, this.evaluate(b));
  }
  function vd(a, b) {
    for (
      var c = za.apply(2, arguments), d = new Vc(), e = this.evaluate(b), f = 0;
      f < e.length;
      f++
    )
      d.push(e[f]);
    var g = [51, a, d].concat(ua(c));
    this.D.add(a, this.evaluate(g));
  }
  function wd(a, b) {
    return this.evaluate(a) / this.evaluate(b);
  }
  function xd(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b),
      e = c instanceof bd,
      f = d instanceof bd;
    return e || f ? (e && f ? c.getValue() === d.getValue() : !1) : c == d;
  }
  function yd() {
    for (var a, b = 0; b < arguments.length; b++)
      a = this.evaluate(arguments[b]);
    return a;
  }
  function zd(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)),
        g = Ja(f, d);
      if (g instanceof Ba) {
        if (g.getType() === "break") break;
        if (g.getType() === "return") return g;
      }
    }
  }
  function Ad(a, b, c) {
    if (typeof b === "string")
      return zd(
        a,
        function () {
          return b.length;
        },
        function (f) {
          return f;
        },
        c
      );
    if (
      b instanceof Ma ||
      b instanceof dd ||
      b instanceof Vc ||
      b instanceof Xc
    ) {
      var d = b.na(),
        e = d.length;
      return zd(
        a,
        function () {
          return e;
        },
        function (f) {
          return d[f];
        },
        c
      );
    }
  }
  function Bd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Ad(
      function (k) {
        g.set(d, k);
        return g;
      },
      e,
      f
    );
  }
  function Cd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Ad(
      function (k) {
        var m = Ia(g);
        Ha(m, d, k, !0);
        return m;
      },
      e,
      f
    );
  }
  function Dd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Ad(
      function (k) {
        var m = Ia(g);
        m.add(d, k);
        return m;
      },
      e,
      f
    );
  }
  function Ed(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Fd(
      function (k) {
        g.set(d, k);
        return g;
      },
      e,
      f
    );
  }
  function Gd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Fd(
      function (k) {
        var m = Ia(g);
        Ha(m, d, k, !0);
        return m;
      },
      e,
      f
    );
  }
  function Hd(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c),
      g = this.D;
    return Fd(
      function (k) {
        var m = Ia(g);
        m.add(d, k);
        return m;
      },
      e,
      f
    );
  }
  function Fd(a, b, c) {
    if (typeof b === "string")
      return zd(
        a,
        function () {
          return b.length;
        },
        function (d) {
          return b[d];
        },
        c
      );
    if (b instanceof Vc)
      return zd(
        a,
        function () {
          return b.length();
        },
        function (d) {
          return b.get(d);
        },
        c
      );
    if (fd()) throw new hd("The value is not iterable.");
    throw new TypeError("The value is not iterable.");
  }
  function Id(a, b, c, d) {
    function e(q, r) {
      for (var u = 0; u < f.length(); u++) {
        var v = f.get(u);
        r.add(v, q.get(v));
      }
    }
    var f = this.evaluate(a);
    if (!(f instanceof Vc))
      throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.D,
      k = this.evaluate(d),
      m = Ia(g);
    for (e(g, m); Ka(m, b); ) {
      var n = Ja(m, k);
      if (n instanceof Ba) {
        if (n.getType() === "break") break;
        if (n.getType() === "return") return n;
      }
      var p = Ia(g);
      e(m, p);
      Ka(p, c);
      m = p;
    }
  }
  function Jd(a, b) {
    var c = za.apply(2, arguments),
      d = this.D,
      e = this.evaluate(b);
    if (!(e instanceof Vc))
      throw Error("Error: non-List value given for Fn argument names.");
    return new Xc(
      a,
      (function () {
        return function () {
          var f = za.apply(0, arguments),
            g = Ia(d);
          g.j === void 0 && (g.j = this.D.j);
          for (var k = [], m = 0; m < f.length; m++) {
            var n = this.evaluate(f[m]);
            if (n instanceof Ba) return n;
            k[m] = n;
          }
          for (var p = e.get("length"), q = 0; q < p; q++)
            q < k.length ? g.add(e.get(q), k[q]) : g.add(e.get(q), void 0);
          g.add("arguments", new Vc(k));
          var r = Ja(g, c);
          if (r instanceof Ba)
            return r.getType() === "return" ? r.getData() : r;
        };
      })()
    );
  }
  function Kd(a) {
    var b = this.evaluate(a),
      c = this.D;
    if (Ld && !c.has(b)) throw new ReferenceError(b + " is not defined.");
    return c.get(b);
  }
  function Md(a, b) {
    var c,
      d = this.evaluate(a),
      e = this.evaluate(b);
    if (d === void 0 || d === null) {
      var f =
        "TypeError: Cannot read properties of " + d + " (reading '" + b + "')";
      if (fd()) throw new hd(f);
      throw Error(f);
    }
    if (
      d instanceof Ma ||
      d instanceof dd ||
      d instanceof Vc ||
      d instanceof Xc
    )
      c = d.get(e);
    else if (typeof d === "string")
      e === "length" ? (c = d.length) : Uc(e) && (c = d[e]);
    else if (d instanceof bd) return;
    return c;
  }
  function Nd(a, b) {
    return this.evaluate(a) > this.evaluate(b);
  }
  function Od(a, b) {
    return this.evaluate(a) >= this.evaluate(b);
  }
  function Pd(a, b) {
    var c = this.evaluate(a),
      d = this.evaluate(b);
    c instanceof bd && (c = c.getValue());
    d instanceof bd && (d = d.getValue());
    return c === d;
  }
  function Qd(a, b) {
    return !Pd.call(this, a, b);
  }
  function Rd(a, b, c) {
    var d = [];
    this.evaluate(a) ? (d = this.evaluate(b)) : c && (d = this.evaluate(c));
    var e = Ja(this.D, d);
    if (e instanceof Ba) return e;
  }
  var Ld = !1;
  function Sd(a, b) {
    return this.evaluate(a) < this.evaluate(b);
  }
  function Td(a, b) {
    return this.evaluate(a) <= this.evaluate(b);
  }
  function Ud() {
    for (var a = new Vc(), b = 0; b < arguments.length; b++) {
      var c = this.evaluate(arguments[b]);
      a.push(c);
    }
    return a;
  }
  function Vd() {
    for (var a = new Ma(), b = 0; b < arguments.length - 1; b += 2) {
      var c = String(this.evaluate(arguments[b])),
        d = this.evaluate(arguments[b + 1]);
      a.set(c, d);
    }
    return a;
  }
  function Wd(a, b) {
    return this.evaluate(a) % this.evaluate(b);
  }
  function Xd(a, b) {
    return this.evaluate(a) * this.evaluate(b);
  }
  function Yd(a) {
    return -this.evaluate(a);
  }
  function Zd(a) {
    return !this.evaluate(a);
  }
  function $d(a, b) {
    return !xd.call(this, a, b);
  }
  function ae() {
    return null;
  }
  function be(a, b) {
    return this.evaluate(a) || this.evaluate(b);
  }
  function ce(a, b) {
    var c = this.evaluate(a);
    this.evaluate(b);
    return c;
  }
  function de(a) {
    return this.evaluate(a);
  }
  function ee() {
    return za.apply(0, arguments);
  }
  function fe(a) {
    return new Ba("return", this.evaluate(a));
  }
  function ge(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (d === null || d === void 0) {
      var g = "TypeError: Can't set property " + e + " of " + d + ".";
      if (fd()) throw new hd(g);
      throw Error(g);
    }
    (d instanceof Xc || d instanceof Vc || d instanceof Ma) &&
      d.set(String(e), f);
    return f;
  }
  function he(a, b) {
    return this.evaluate(a) - this.evaluate(b);
  }
  function ie(a, b, c) {
    var d = this.evaluate(a),
      e = this.evaluate(b),
      f = this.evaluate(c);
    if (!Array.isArray(e) || !Array.isArray(f))
      throw Error("Error: Malformed switch instruction.");
    for (var g, k = !1, m = 0; m < e.length; m++)
      if (k || d === this.evaluate(e[m]))
        if (((g = this.evaluate(f[m])), g instanceof Ba)) {
          var n = g.getType();
          if (n === "break") return;
          if (n === "return" || n === "continue") return g;
        } else k = !0;
    if (
      f.length === e.length + 1 &&
      ((g = this.evaluate(f[f.length - 1])),
      g instanceof Ba &&
        (g.getType() === "return" || g.getType() === "continue"))
    )
      return g;
  }
  function je(a, b, c) {
    return this.evaluate(a) ? this.evaluate(b) : this.evaluate(c);
  }
  function ke(a) {
    var b = this.evaluate(a);
    return b instanceof Xc ? "function" : typeof b;
  }
  function le() {
    for (var a = this.D, b = 0; b < arguments.length; b++) {
      var c = arguments[b];
      typeof c !== "string" || a.add(c, void 0);
    }
  }
  function me(a, b, c, d) {
    var e = this.evaluate(d);
    if (this.evaluate(c)) {
      var f = Ja(this.D, e);
      if (f instanceof Ba) {
        if (f.getType() === "break") return;
        if (f.getType() === "return") return f;
      }
    }
    for (; this.evaluate(a); ) {
      var g = Ja(this.D, e);
      if (g instanceof Ba) {
        if (g.getType() === "break") break;
        if (g.getType() === "return") return g;
      }
      this.evaluate(b);
    }
  }
  function ne(a) {
    return ~Number(this.evaluate(a));
  }
  function oe(a, b) {
    return Number(this.evaluate(a)) << Number(this.evaluate(b));
  }
  function pe(a, b) {
    return Number(this.evaluate(a)) >> Number(this.evaluate(b));
  }
  function qe(a, b) {
    return Number(this.evaluate(a)) >>> Number(this.evaluate(b));
  }
  function re(a, b) {
    return Number(this.evaluate(a)) & Number(this.evaluate(b));
  }
  function se(a, b) {
    return Number(this.evaluate(a)) ^ Number(this.evaluate(b));
  }
  function te(a, b) {
    return Number(this.evaluate(a)) | Number(this.evaluate(b));
  }
  function ue() {}
  function ve(a, b, c, d, e) {
    var f = !0;
    try {
      var g = this.evaluate(c);
      if (g instanceof Ba) return g;
    } catch (r) {
      if (!(r instanceof hd && a)) throw ((f = r instanceof hd), r);
      var k = Ia(this.D),
        m = new bd(r);
      k.add(b, m);
      var n = this.evaluate(d),
        p = Ja(k, n);
      if (p instanceof Ba) return p;
    } finally {
      if (f && e !== void 0) {
        var q = this.evaluate(e);
        if (q instanceof Ba) return q;
      }
    }
  }
  var xe = function () {
    this.j = new La();
    we(this);
  };
  xe.prototype.execute = function (a) {
    return this.j.Ai(a);
  };
  var we = function (a) {
    var b = function (c, d) {
      var e = new Xc(String(c), d);
      e.Ia();
      a.j.j.set(String(c), e);
    };
    b("map", Vd);
    b("and", Hc);
    b("contains", Kc);
    b("equals", Ic);
    b("or", Jc);
    b("startsWith", Lc);
    b("variable", Mc);
  };
  var ze = function () {
    this.C = !1;
    this.j = new La();
    ye(this);
    this.C = !0;
  };
  ze.prototype.execute = function (a) {
    return Ae(this.j.Ai(a));
  };
  var Be = function (a, b, c) {
    return Ae(a.j.Il(b, c));
  };
  ze.prototype.Ia = function () {
    this.j.Ia();
  };
  var ye = function (a) {
    var b = function (c, d) {
      var e = String(c),
        f = new Xc(e, d);
      f.Ia();
      a.j.j.set(e, f);
    };
    b(0, ld);
    b(1, md);
    b(2, nd);
    b(3, od);
    b(56, re);
    b(57, oe);
    b(58, ne);
    b(59, te);
    b(60, pe);
    b(61, qe);
    b(62, se);
    b(53, pd);
    b(4, qd);
    b(5, rd);
    b(52, sd);
    b(6, td);
    b(49, ud);
    b(7, Ud);
    b(8, Vd);
    b(9, rd);
    b(50, vd);
    b(10, wd);
    b(12, xd);
    b(13, yd);
    b(51, Jd);
    b(47, Bd);
    b(54, Cd);
    b(55, Dd);
    b(63, Id);
    b(64, Ed);
    b(65, Gd);
    b(66, Hd);
    b(15, Kd);
    b(16, Md);
    b(17, Md);
    b(18, Nd);
    b(19, Od);
    b(20, Pd);
    b(21, Qd);
    b(22, Rd);
    b(23, Sd);
    b(24, Td);
    b(25, Wd);
    b(26, Xd);
    b(27, Yd);
    b(28, Zd);
    b(29, $d);
    b(45, ae);
    b(30, be);
    b(32, ce);
    b(33, ce);
    b(34, de);
    b(35, de);
    b(46, ee);
    b(36, fe);
    b(43, ge);
    b(37, he);
    b(38, ie);
    b(39, je);
    b(67, ve);
    b(40, ke);
    b(44, ue);
    b(41, le);
    b(42, me);
  };
  ze.prototype.Qd = function () {
    return this.j.Qd();
  };
  function Ae(a) {
    if (
      a instanceof Ba ||
      a instanceof Xc ||
      a instanceof Vc ||
      a instanceof Ma ||
      a instanceof dd ||
      a instanceof bd ||
      a === null ||
      a === void 0 ||
      typeof a === "string" ||
      typeof a === "number" ||
      typeof a === "boolean"
    )
      return a;
  }
  var Ce = function (a) {
    this.message = a;
  };
  function De(a) {
    var b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
      a
    ];
    return b === void 0
      ? new Ce(
          "Value " + a + " can not be encoded in web-safe base64 dictionary."
        )
      : b;
  }
  function Ee(a) {
    switch (a) {
      case 1:
        return "1";
      case 2:
      case 4:
        return "0";
      default:
        return "-";
    }
  }
  var Fe = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;
  function Ge(a, b) {
    for (var c = "", d = !0; a > 7; ) {
      var e = a & 31;
      a >>= 5;
      d ? (d = !1) : (e |= 32);
      c = "" + De(e) + c;
    }
    a <<= 2;
    d || (a |= 32);
    return (c = "" + De(a | b) + c);
  }
  var He = (function () {
    function a(b) {
      return {
        toString: function () {
          return b;
        },
      };
    }
    return {
      fl: a("consent"),
      Pi: a("convert_case_to"),
      Qi: a("convert_false_to"),
      Ri: a("convert_null_to"),
      Si: a("convert_true_to"),
      Ti: a("convert_undefined_to"),
      Sn: a("debug_mode_metadata"),
      wa: a("function"),
      Bh: a("instance_name"),
      Ll: a("live_only"),
      Ml: a("malware_disabled"),
      METADATA: a("metadata"),
      Pl: a("original_activity_id"),
      ho: a("original_vendor_template_id"),
      fo: a("once_on_load"),
      Ol: a("once_per_event"),
      fk: a("once_per_load"),
      jo: a("priority_override"),
      ko: a("respected_consent_types"),
      nk: a("setup_tags"),
      Re: a("tag_id"),
      tk: a("teardown_tags"),
    };
  })();
  var cf;
  var df = [],
    ef = [],
    ff = [],
    gf = [],
    hf = [],
    mf = {},
    nf,
    of;
  function pf(a) {
    of = of || a;
  }
  function qf(a) {}
  var rf,
    sf = [],
    tf = [];
  function uf(a, b) {
    var c = {};
    c[He.wa] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c;
  }
  function vf(a, b, c) {
    try {
      return nf(wf(a, b, c));
    } catch (d) {
      JSON.stringify(a);
    }
    return 2;
  }
  function xf(a) {
    var b = a[He.wa];
    if (!b) throw Error("Error: No function name given for function call.");
    return !!mf[b];
  }
  var wf = function (a, b, c) {
      c = c || [];
      var d = {},
        e;
      for (e in a) a.hasOwnProperty(e) && (d[e] = yf(a[e], b, c));
      return d;
    },
    yf = function (a, b, c) {
      if (Array.isArray(a)) {
        var d;
        switch (a[0]) {
          case "function_id":
            return a[1];
          case "list":
            d = [];
            for (var e = 1; e < a.length; e++) d.push(yf(a[e], b, c));
            return d;
          case "macro":
            var f = a[1];
            if (c[f]) return;
            var g = df[f];
            if (!g || b.isBlocked(g)) return;
            c[f] = !0;
            var k = String(g[He.Bh]);
            try {
              var m = wf(g, b, c);
              m.vtp_gtmEventId = b.id;
              b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
              d = zf(m, { event: b, index: f, type: 2, name: k });
              rf && (d = rf.hm(d, m));
            } catch (y) {
              b.logMacroError && b.logMacroError(y, Number(f), k), (d = !1);
            }
            c[f] = !1;
            return d;
          case "map":
            d = {};
            for (var n = 1; n < a.length; n += 2)
              d[yf(a[n], b, c)] = yf(a[n + 1], b, c);
            return d;
          case "template":
            d = [];
            for (var p = !1, q = 1; q < a.length; q++) {
              var r = yf(a[q], b, c);
              of && (p = p || of.Wm(r));
              d.push(r);
            }
            return of && p ? of.km(d) : d.join("");
          case "escape":
            d = yf(a[1], b, c);
            if (of && Array.isArray(a[1]) && a[1][0] === "macro" && of.Xm(a))
              return of.sn(d);
            d = String(d);
            for (var u = 2; u < a.length; u++) Oe[a[u]] && (d = Oe[a[u]](d));
            return d;
          case "tag":
            var v = a[1];
            if (!gf[v])
              throw Error("Unable to resolve tag reference " + v + ".");
            return { zk: a[2], index: v };
          case "zb":
            var t = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
            t[He.wa] = a[1];
            var w = vf(t, b, c),
              x = !!a[4];
            return x || w !== 2 ? x !== (w === 1) : null;
          default:
            throw Error(
              "Attempting to expand unknown Value type: " + a[0] + "."
            );
        }
      }
      return a;
    },
    zf = function (a, b) {
      var c = a[He.wa],
        d = b && b.event;
      if (!c) throw Error("Error: No function name given for function call.");
      var e = mf[c],
        f =
          b &&
          b.type === 2 &&
          (d == null ? void 0 : d.reportMacroDiscrepancy) &&
          e &&
          sf.indexOf(c) !== -1,
        g = {},
        k = {},
        m;
      for (m in a)
        a.hasOwnProperty(m) &&
          tb(m, "vtp_") &&
          (e && (g[m] = a[m]), !e || f) &&
          (k[m.substring(4)] = a[m]);
      e &&
        d &&
        d.cachedModelValues &&
        (g.vtp_gtmCachedValues = d.cachedModelValues);
      if (b) {
        if (b.name == null) {
          var n;
          a: {
            var p = b.type,
              q = b.index;
            if (q == null) n = "";
            else {
              var r;
              switch (p) {
                case 2:
                  r = df[q];
                  break;
                case 1:
                  r = gf[q];
                  break;
                default:
                  n = "";
                  break a;
              }
              var u = r && r[He.Bh];
              n = u ? String(u) : "";
            }
          }
          b.name = n;
        }
        e && ((g.vtp_gtmEntityIndex = b.index), (g.vtp_gtmEntityName = b.name));
      }
      var v, t, w;
      if (f && tf.indexOf(c) === -1) {
        tf.push(c);
        var x = ob();
        v = e(g);
        var y = ob() - x,
          B = ob();
        t = cf(c, k, b);
        w = y - (ob() - B);
      } else if ((e && (v = e(g)), !e || f)) t = cf(c, k, b);
      f &&
        d &&
        (d.reportMacroDiscrepancy(d.id, c, void 0, !0),
        Tc(v)
          ? (Array.isArray(v)
              ? Array.isArray(t)
              : Rc(v)
              ? Rc(t)
              : typeof v === "function"
              ? typeof t === "function"
              : v === t) || d.reportMacroDiscrepancy(d.id, c)
          : v !== t && d.reportMacroDiscrepancy(d.id, c),
        w !== void 0 && d.reportMacroDiscrepancy(d.id, c, w));
      return e ? v : t;
    };
  var Af = function (a, b, c) {
    var d;
    d = Error.call(this, c);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.permissionId = a;
    this.parameters = b;
    this.name = "PermissionError";
  };
  sa(Af, Error);
  Af.prototype.getMessage = function () {
    return this.message;
  };
  function Bf(a, b) {
    if (Array.isArray(a)) {
      Object.defineProperty(a, "context", { value: { line: b[0] } });
      for (var c = 1; c < a.length; c++) Bf(a[c], b[c]);
    }
  }
  var Cf = function (a, b) {
    var c;
    c = Error.call(
      this,
      "Wrapped error for Dust debugging. Original error message: " + a.message
    );
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.nn = a;
    this.j = [];
    this.C = b;
  };
  sa(Cf, Error);
  function Df() {
    return function (a, b) {
      a instanceof Cf || (a = new Cf(a, Ef));
      b && a instanceof Cf && a.j.push(b);
      throw a;
    };
  }
  function Ef(a) {
    if (!a.length) return a;
    a.push({ id: "main", line: 0 });
    for (var b = a.length - 1; b > 0; b--) ab(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; c > 0; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a;
  }
  function Ff(a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0;
    }
    for (var c = [], d = [], e = Gf(a), f = 0; f < ef.length; f++) {
      var g = ef[f],
        k = Hf(g, e);
      if (k) {
        for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
        b(g.block || []);
      } else k === null && b(g.block || []);
    }
    for (var p = [], q = 0; q < gf.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p;
  }
  function Hf(a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (e === 0) return !1;
      if (e === 2) return null;
    }
    for (var f = a.unless || [], g = 0; g < f.length; g++) {
      var k = b(f[g]);
      if (k === 2) return null;
      if (k === 1) return !1;
    }
    return !0;
  }
  function Gf(a) {
    var b = [];
    return function (c) {
      b[c] === void 0 && (b[c] = vf(ff[c], a));
      return b[c];
    };
  }
  function If(a, b) {
    b[He.Pi] &&
      typeof a === "string" &&
      (a = b[He.Pi] === 1 ? a.toLowerCase() : a.toUpperCase());
    b.hasOwnProperty(He.Ri) && a === null && (a = b[He.Ri]);
    b.hasOwnProperty(He.Ti) && a === void 0 && (a = b[He.Ti]);
    b.hasOwnProperty(He.Si) && a === !0 && (a = b[He.Si]);
    b.hasOwnProperty(He.Qi) && a === !1 && (a = b[He.Qi]);
    return a;
  }
  var Jf = function () {
      this.j = {};
    },
    Lf = function (a, b) {
      var c = Kf.j,
        d;
      (d = c.j)[a] != null || (d[a] = []);
      c.j[a].push(function () {
        return b.apply(null, ua(za.apply(0, arguments)));
      });
    };
  function Mf(a, b, c, d) {
    if (a)
      for (var e = 0; e < a.length; e++) {
        var f = void 0,
          g = "A policy function denied the permission request";
        try {
          (f = a[e](b, c, d)), (g += ".");
        } catch (k) {
          g =
            typeof k === "string"
              ? g + (": " + k)
              : k instanceof Error
              ? g + (": " + k.message)
              : g + ".";
        }
        if (!f) throw new Af(c, d, g);
      }
  }
  function Nf(a, b, c) {
    return function (d) {
      if (d) {
        var e = a.j[d],
          f = a.j.all;
        if (e || f) {
          var g = c.apply(void 0, [d].concat(ua(za.apply(1, arguments))));
          Mf(e, b, d, g);
          Mf(f, b, d, g);
        }
      }
    };
  }
  var Rf = function () {
      var a = data.permissions || {},
        b = Of.ctid,
        c = this;
      this.C = {};
      this.j = new Jf();
      var d = {},
        e = {},
        f = Nf(this.j, b, function (g) {
          return g && d[g]
            ? d[g].apply(void 0, [g].concat(ua(za.apply(1, arguments))))
            : {};
        });
      hb(a, function (g, k) {
        function m(p) {
          var q = za.apply(1, arguments);
          if (!n[p])
            throw Pf(
              p,
              {},
              "The requested additional permission " + p + " is not configured."
            );
          f.apply(null, [p].concat(ua(q)));
        }
        var n = {};
        hb(k, function (p, q) {
          var r = Qf(p, q);
          n[p] = r.assert;
          d[p] || (d[p] = r.M);
          r.vk && !e[p] && (e[p] = r.vk);
        });
        c.C[g] = function (p, q) {
          var r = n[p];
          if (!r)
            throw Pf(
              p,
              {},
              "The requested permission " + p + " is not configured."
            );
          var u = Array.prototype.slice.call(arguments, 0);
          r.apply(void 0, u);
          f.apply(void 0, u);
          var v = e[p];
          v && v.apply(null, [m].concat(ua(u.slice(1))));
        };
      });
    },
    Sf = function (a) {
      return Kf.C[a] || function () {};
    };
  function Qf(a, b) {
    var c = uf(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Pf;
    try {
      return zf(c);
    } catch (d) {
      return {
        assert: function (e) {
          throw new Af(e, {}, "Permission " + e + " is unknown.");
        },
        M: function () {
          throw new Af(a, {}, "Permission " + a + " is unknown.");
        },
      };
    }
  }
  function Pf(a, b, c) {
    return new Af(a, b, c);
  }
  var Tf = !1;
  var Uf = {};
  Uf.Uk = kb("");
  Uf.qm = kb("");
  var $f = {},
    ag =
      (($f.uaa = !0),
      ($f.uab = !0),
      ($f.uafvl = !0),
      ($f.uamb = !0),
      ($f.uam = !0),
      ($f.uap = !0),
      ($f.uapv = !0),
      ($f.uaw = !0),
      $f);
  var ig = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a,
          e = b[c];
        if (!gg.exec(e)) throw Error("Invalid key wildcard");
        var f = e.indexOf(".*"),
          g = f !== -1 && f === e.length - 2,
          k = g ? e.slice(0, e.length - 2) : e,
          m;
        a: if (d.length === 0) m = !1;
        else {
          for (var n = d.split("."), p = 0; p < n.length; p++)
            if (!hg.exec(n[p])) {
              m = !1;
              break a;
            }
          m = !0;
        }
        if (
          !m || k.length > d.length || (!g && d.length !== e.length)
            ? 0
            : g
            ? tb(d, k) && (d === k || d.charAt(k.length) === ".")
            : d === k
        )
          return !0;
      }
      return !1;
    },
    hg = /^[a-z$_][\w$]*$/i,
    gg = /^(?:[a-z_$][a-z_$0-9]*\.)*[a-z_$][a-z_$0-9]*(?:\.\*)?$/i;
  var jg = [
    "matches",
    "webkitMatchesSelector",
    "mozMatchesSelector",
    "msMatchesSelector",
    "oMatchesSelector",
  ];
  function kg(a, b) {
    var c = String(a),
      d = String(b),
      e = c.length - d.length;
    return e >= 0 && c.indexOf(d, e) === e;
  }
  var lg = new fb();
  function mg(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + String(d),
        f = lg.get(e);
      f || ((f = new RegExp(b, d)), lg.set(e, f));
      return f.test(a);
    } catch (g) {
      return !1;
    }
  }
  function ng(a, b) {
    return String(a).indexOf(String(b)) >= 0;
  }
  function og(a, b) {
    return String(a) === String(b);
  }
  function pg(a, b) {
    return Number(a) >= Number(b);
  }
  function qg(a, b) {
    return Number(a) <= Number(b);
  }
  function rg(a, b) {
    return Number(a) > Number(b);
  }
  function sg(a, b) {
    return Number(a) < Number(b);
  }
  function tg(a, b) {
    return tb(String(a), String(b));
  }
  var Ag =
      /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
    Bg = { Fn: "function", PixieMap: "Object", List: "Array" };
  function Cg(a, b) {
    for (var c = ["input:!*"], d = 0; d < c.length; d++) {
      var e = Ag.exec(c[d]);
      if (!e) throw Error("Internal Error in " + a);
      var f = e[1],
        g = e[2] === "!",
        k = e[3],
        m = b[d];
      if (m == null) {
        if (g)
          throw Error(
            "Error in " + a + ". Required argument " + f + " not supplied."
          );
      } else if (k !== "*") {
        var n = typeof m;
        m instanceof Xc
          ? (n = "Fn")
          : m instanceof Vc
          ? (n = "List")
          : m instanceof Ma
          ? (n = "PixieMap")
          : m instanceof dd
          ? (n = "PixiePromise")
          : m instanceof bd && (n = "OpaqueValue");
        if (n !== k)
          throw Error(
            "Error in " +
              a +
              ". Argument " +
              f +
              " has type " +
              ((Bg[n] || n) + ", which does not match required type ") +
              ((Bg[k] || k) + ".")
          );
      }
    }
  }
  function J(a, b, c) {
    for (var d = [], e = l(c), f = e.next(); !f.done; f = e.next()) {
      var g = f.value;
      g instanceof Xc
        ? d.push("function")
        : g instanceof Vc
        ? d.push("Array")
        : g instanceof Ma
        ? d.push("Object")
        : g instanceof dd
        ? d.push("Promise")
        : g instanceof bd
        ? d.push("OpaqueValue")
        : d.push(typeof g);
    }
    return Error(
      "Argument error in " +
        a +
        ". Expected argument types [" +
        (b.join(",") + "], but received [") +
        (d.join(",") + "].")
    );
  }
  function Dg(a) {
    return a instanceof Ma;
  }
  function Eg(a) {
    return Dg(a) || a === null || Fg(a);
  }
  function Gg(a) {
    return a instanceof Xc;
  }
  function Hg(a) {
    return Gg(a) || a === null || Fg(a);
  }
  function Ig(a) {
    return a instanceof Vc;
  }
  function Jg(a) {
    return a instanceof bd;
  }
  function M(a) {
    return typeof a === "string";
  }
  function Kg(a) {
    return M(a) || a === null || Fg(a);
  }
  function Lg(a) {
    return typeof a === "boolean";
  }
  function Mg(a) {
    return Lg(a) || a === null || Fg(a);
  }
  function Ng(a) {
    return typeof a === "number";
  }
  function Fg(a) {
    return a === void 0;
  }
  function Og(a) {
    return "" + a;
  }
  function Pg(a, b) {
    var c = [];
    return c;
  }
  function Qg(a, b) {
    var c = new Xc(a, function () {
      for (
        var d = Array.prototype.slice.call(arguments, 0), e = 0;
        e < d.length;
        e++
      )
        d[e] = this.evaluate(d[e]);
      try {
        return b.apply(this, d);
      } catch (g) {
        if (fd()) throw new hd(g.message);
        throw g;
      }
    });
    c.Ia();
    return c;
  }
  function Rg(a, b) {
    var c = new Ma(),
      d;
    for (d in b)
      if (b.hasOwnProperty(d)) {
        var e = b[d];
        $a(e)
          ? c.set(d, Qg(a + "_" + d, e))
          : Rc(e)
          ? c.set(d, Rg(a + "_" + d, e))
          : (ab(e) || z(e) || typeof e === "boolean") && c.set(d, e);
      }
    c.Ia();
    return c;
  }
  function Sg(a, b) {
    if (!M(a)) throw J(this.getName(), ["string"], arguments);
    if (!Kg(b)) throw J(this.getName(), ["string", "undefined"], arguments);
    var c = {},
      d = new Ma();
    return (d = Rg("AssertApiSubject", c));
  }
  function Tg(a, b) {
    if (!Kg(b)) throw J(this.getName(), ["string", "undefined"], arguments);
    if (a instanceof dd)
      throw Error(
        "Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported."
      );
    var c = {},
      d = new Ma();
    return (d = Rg("AssertThatSubject", c));
  }
  function Ug(a) {
    return function () {
      for (
        var b = za.apply(0, arguments), c = [], d = this.D, e = 0;
        e < b.length;
        ++e
      )
        c.push(H(b[e], d));
      return ed(a.apply(null, c));
    };
  }
  function Vg() {
    for (var a = Math, b = Wg, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = Ug(a[e].bind(a)));
    }
    return c;
  }
  function Xg(a) {
    var b;
    return b;
  }
  function Yg(a) {
    var b;
    return b;
  }
  function Zg(a) {
    try {
      return encodeURI(a);
    } catch (b) {}
  }
  function $g(a) {
    try {
      return encodeURIComponent(String(a));
    } catch (b) {}
  }
  function eh(a) {
    if (!Kg(a)) throw J(this.getName(), ["string|undefined"], arguments);
  }
  function fh(a, b) {
    if (!Ng(a) || !Ng(b))
      throw J(this.getName(), ["number", "number"], arguments);
    return db(a, b);
  }
  function gh() {
    return new Date().getTime();
  }
  function hh(a) {
    if (a === null) return "null";
    if (a instanceof Vc) return "array";
    if (a instanceof Xc) return "function";
    if (a instanceof bd) {
      var b = a.getValue();
      if (
        (b == null ? void 0 : b.constructor) === void 0 ||
        b.constructor.name === void 0
      ) {
        var c = String(b);
        return c.substring(8, c.length - 1);
      }
      return String(b.constructor.name);
    }
    return typeof a;
  }
  function ih(a) {
    function b(c) {
      return function (d) {
        try {
          return c(d);
        } catch (e) {
          (Tf || Uf.Uk) && a.call(this, e.message);
        }
      };
    }
    return {
      parse: b(function (c) {
        return ed(JSON.parse(c));
      }),
      stringify: b(function (c) {
        return JSON.stringify(H(c));
      }),
      R: "JSON",
    };
  }
  function jh(a) {
    return jb(H(a, this.D));
  }
  function kh(a) {
    return Number(H(a, this.D));
  }
  function lh(a) {
    return a === null ? "null" : a === void 0 ? "undefined" : a.toString();
  }
  function mh(a, b, c) {
    var d = null,
      e = !1;
    if (!Ig(a) || !M(b) || !M(c))
      throw J(this.getName(), ["Array", "string", "string"], arguments);
    d = new Ma();
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof Ma &&
        g.has(b) &&
        g.has(c) &&
        (d.set(g.get(b), g.get(c)), (e = !0));
    }
    return e ? d : null;
  }
  var Wg = "floor ceil round max min abs pow sqrt".split(" ");
  function nh() {
    var a = {};
    return {
      Bm: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0;
      },
      Rk: function (b, c) {
        a[b] = c;
      },
      reset: function () {
        a = {};
      },
    };
  }
  function oh(a, b) {
    return function () {
      return Xc.prototype.invoke.apply(
        a,
        [b].concat(ua(za.apply(0, arguments)))
      );
    };
  }
  function ph(a, b) {
    if (!M(a)) throw J(this.getName(), ["string", "any"], arguments);
  }
  function qh(a, b) {
    if (!M(a) || !Dg(b))
      throw J(this.getName(), ["string", "PixieMap"], arguments);
  }
  var rh = {};
  var sh = function (a) {
    var b = new Ma();
    if (a instanceof Vc)
      for (var c = a.na(), d = 0; d < c.length; d++) {
        var e = c[d];
        a.has(e) && b.set(e, a.get(e));
      }
    else if (a instanceof Xc)
      for (var f = a.na(), g = 0; g < f.length; g++) {
        var k = f[g];
        b.set(k, a.get(k));
      }
    else for (var m = 0; m < a.length; m++) b.set(m, a[m]);
    return b;
  };
  rh.keys = function (a) {
    Cg(this.getName(), arguments);
    if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = sh(a);
    if (a instanceof Ma || a instanceof dd) return new Vc(a.na());
    return new Vc();
  };
  rh.values = function (a) {
    Cg(this.getName(), arguments);
    if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = sh(a);
    if (a instanceof Ma || a instanceof dd) return new Vc(a.Yb());
    return new Vc();
  };
  rh.entries = function (a) {
    Cg(this.getName(), arguments);
    if (a instanceof Vc || a instanceof Xc || typeof a === "string") a = sh(a);
    if (a instanceof Ma || a instanceof dd)
      return new Vc(
        a.Ib().map(function (b) {
          return new Vc(b);
        })
      );
    return new Vc();
  };
  rh.freeze = function (a) {
    (a instanceof Ma ||
      a instanceof dd ||
      a instanceof Vc ||
      a instanceof Xc) &&
      a.Ia();
    return a;
  };
  rh.delete = function (a, b) {
    if (a instanceof Ma && !a.Bc()) return a.remove(b), !0;
    return !1;
  };
  function N(a, b) {
    var c = za.apply(2, arguments),
      d = a.D.j;
    if (!d) throw Error("Missing program state.");
    if (d.yn) {
      try {
        d.wk.apply(null, [b].concat(ua(c)));
      } catch (e) {
        throw (Wa("TAGGING", 21), e);
      }
      return;
    }
    d.wk.apply(null, [b].concat(ua(c)));
  }
  var th = function () {
    this.C = {};
    this.j = {};
    this.H = !0;
  };
  th.prototype.get = function (a, b) {
    var c = this.contains(a) ? this.C[a] : void 0;
    return c;
  };
  th.prototype.contains = function (a) {
    return this.C.hasOwnProperty(a);
  };
  th.prototype.add = function (a, b, c) {
    if (this.contains(a))
      throw Error(
        "Attempting to add a function which already exists: " + a + "."
      );
    if (this.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add an API with an existing private API name: " + a + "."
      );
    this.C[a] = c ? void 0 : $a(b) ? Qg(a, b) : Rg(a, b);
  };
  function uh(a, b) {
    var c = void 0;
    return c;
  }
  function vh(a, b) {}
  vh.F = "internal.safeInvoke";
  function wh() {
    var a = {};
    return a;
  }
  var P = {
      g: {
        ya: "ad_personalization",
        N: "ad_storage",
        O: "ad_user_data",
        U: "analytics_storage",
        sb: "region",
        hc: "consent_updated",
        de: "wait_for_update",
        Vi: "app_remove",
        Wi: "app_store_refund",
        Xi: "app_store_subscription_cancel",
        Yi: "app_store_subscription_convert",
        Zi: "app_store_subscription_renew",
        ml: "consent_update",
        Gg: "add_payment_info",
        Hg: "add_shipping_info",
        Ec: "add_to_cart",
        Fc: "remove_from_cart",
        Ig: "view_cart",
        ic: "begin_checkout",
        Gc: "select_item",
        ub: "view_item_list",
        Pb: "select_promotion",
        vb: "view_promotion",
        Ma: "purchase",
        Hc: "refund",
        Sa: "view_item",
        Jg: "add_to_wishlist",
        nl: "exception",
        aj: "first_open",
        bj: "first_visit",
        fa: "gtag.config",
        ab: "gtag.get",
        cj: "in_app_purchase",
        jc: "page_view",
        ol: "screen_view",
        dj: "session_start",
        Un: "source_update",
        pl: "timing_complete",
        ql: "track_social",
        fd: "user_engagement",
        rl: "user_id_update",
        he: "gclid_link_decoration_source",
        ie: "gclid_storage_source",
        wb: "gclgb",
        cb: "gclid",
        ej: "gclid_len",
        gd: "gclgs",
        hd: "gcllp",
        jd: "gclst",
        ma: "ads_data_redaction",
        fj: "gad_source",
        gj: "gad_source_src",
        ij: "ndclid",
        jj: "ngad_source",
        kj: "ngbraid",
        lj: "ngclid",
        mj: "ngclsrc",
        je: "gclid_url",
        nj: "gclsrc",
        Kg: "gbraid",
        Gf: "wbraid",
        qa: "allow_ad_personalization_signals",
        Hf: "allow_custom_scripts",
        ke: "allow_direct_google_requests",
        If: "allow_display_features",
        me: "allow_enhanced_conversions",
        jb: "allow_google_signals",
        Fa: "allow_interest_groups",
        sl: "app_id",
        tl: "app_installer_id",
        vl: "app_name",
        wl: "app_version",
        xb: "auid",
        oj: "auto_detection_enabled",
        kc: "aw_remarketing",
        Jf: "aw_remarketing_only",
        ne: "discount",
        oe: "aw_feed_country",
        pe: "aw_feed_language",
        ia: "items",
        qe: "aw_merchant_id",
        Lg: "aw_basket_type",
        kd: "campaign_content",
        ld: "campaign_id",
        md: "campaign_medium",
        nd: "campaign_name",
        od: "campaign",
        pd: "campaign_source",
        rd: "campaign_term",
        yb: "client_id",
        pj: "rnd",
        Mg: "consent_update_type",
        qj: "content_group",
        rj: "content_type",
        kb: "conversion_cookie_prefix",
        sd: "conversion_id",
        za: "conversion_linker",
        sj: "conversion_linker_disabled",
        mc: "conversion_api",
        Kf: "cookie_deprecation",
        Ta: "cookie_domain",
        Ua: "cookie_expires",
        eb: "cookie_flags",
        Ic: "cookie_name",
        zb: "cookie_path",
        Na: "cookie_prefix",
        nc: "cookie_update",
        Jc: "country",
        Ba: "currency",
        Ng: "customer_buyer_stage",
        se: "customer_lifetime_value",
        Og: "customer_loyalty",
        Pg: "customer_ltv_bucket",
        ud: "custom_map",
        Qg: "gcldc",
        te: "dclid",
        Rg: "debug_mode",
        ja: "developer_id",
        tj: "disable_merchant_reported_purchases",
        vd: "dc_custom_params",
        uj: "dc_natural_search",
        Sg: "dynamic_event_settings",
        Tg: "affiliation",
        ue: "checkout_option",
        Lf: "checkout_step",
        Ug: "coupon",
        wd: "item_list_name",
        Mf: "list_name",
        vj: "promotions",
        xd: "shipping",
        Nf: "tax",
        ve: "engagement_time_msec",
        we: "enhanced_client_id",
        xe: "enhanced_conversions",
        Vg: "enhanced_conversions_automatic_settings",
        ye: "estimated_delivery_date",
        Of: "euid_logged_in_state",
        yd: "event_callback",
        xl: "event_category",
        nb: "event_developer_id_string",
        yl: "event_label",
        Kc: "event",
        ze: "event_settings",
        Ae: "event_timeout",
        zl: "description",
        Al: "fatal",
        wj: "experiments",
        Pf: "firebase_id",
        Lc: "first_party_collection",
        Be: "_x_20",
        Ab: "_x_19",
        xj: "fledge_drop_reason",
        Wg: "fledge",
        Xg: "flight_error_code",
        Yg: "flight_error_message",
        yj: "fl_activity_category",
        zj: "fl_activity_group",
        Zg: "fl_advertiser_id",
        Aj: "fl_ar_dedupe",
        ah: "match_id",
        Bj: "fl_random_number",
        Cj: "tran",
        Dj: "u",
        Ce: "gac_gclid",
        Mc: "gac_wbraid",
        bh: "gac_wbraid_multiple_conversions",
        eh: "ga_restrict_domain",
        fh: "ga_temp_client_id",
        Bl: "ga_temp_ecid",
        oc: "gdpr_applies",
        gh: "geo_granularity",
        Qb: "value_callback",
        Bb: "value_key",
        Nc: "_google_ng",
        Oc: "google_signals",
        hh: "google_tld",
        De: "groups",
        ih: "gsa_experiment_id",
        Ej: "gtm_up",
        Rb: "iframe_state",
        zd: "ignore_referrer",
        Qf: "internal_traffic_results",
        qc: "is_legacy_converted",
        Sb: "is_legacy_loaded",
        Ee: "is_passthrough",
        Bd: "_lps",
        Va: "language",
        Fe: "legacy_developer_id_string",
        Aa: "linker",
        Pc: "accept_incoming",
        Cb: "decorate_forms",
        X: "domains",
        Tb: "url_position",
        Rf: "merchant_feed_label",
        Sf: "merchant_feed_language",
        Tf: "merchant_id",
        jh: "method",
        Cl: "name",
        Fj: "navigation_type",
        Cd: "new_customer",
        kh: "non_interaction",
        Gj: "optimize_id",
        lh: "page_hostname",
        Dd: "page_path",
        Ga: "page_referrer",
        fb: "page_title",
        mh: "passengers",
        nh: "phone_conversion_callback",
        Hj: "phone_conversion_country_code",
        oh: "phone_conversion_css_class",
        Ij: "phone_conversion_ids",
        ph: "phone_conversion_number",
        qh: "phone_conversion_options",
        Dl: "_platinum_request_status",
        rh: "_protected_audience_enabled",
        Ed: "quantity",
        Ge: "redact_device_info",
        Uf: "referral_exclusion_definition",
        Vn: "_request_start_time",
        Db: "restricted_data_processing",
        Jj: "retoken",
        El: "sample_rate",
        Vf: "screen_name",
        Ub: "screen_resolution",
        Kj: "_script_source",
        Lj: "search_term",
        Oa: "send_page_view",
        rc: "send_to",
        Fd: "server_container_url",
        Gd: "session_duration",
        He: "session_engaged",
        Wf: "session_engaged_time",
        Eb: "session_id",
        Ie: "session_number",
        Xf: "_shared_user_id",
        Hd: "delivery_postal_code",
        Wn: "_tag_firing_delay",
        Xn: "_tag_firing_time",
        Fl: "temporary_client_id",
        Yf: "topmost_url",
        Mj: "tracking_id",
        Zf: "traffic_type",
        Ca: "transaction_id",
        Vb: "transport_url",
        sh: "trip_type",
        uc: "update",
        hb: "url_passthrough",
        Nj: "uptgs",
        cg: "_user_agent_architecture",
        dg: "_user_agent_bitness",
        eg: "_user_agent_full_version_list",
        fg: "_user_agent_mobile",
        gg: "_user_agent_model",
        hg: "_user_agent_platform",
        ig: "_user_agent_platform_version",
        jg: "_user_agent_wow64",
        Da: "user_data",
        th: "user_data_auto_latency",
        uh: "user_data_auto_meta",
        vh: "user_data_auto_multi",
        wh: "user_data_auto_selectors",
        xh: "user_data_auto_status",
        Id: "user_data_mode",
        Je: "user_data_settings",
        Ea: "user_id",
        pb: "user_properties",
        Oj: "_user_region",
        Jd: "us_privacy_string",
        ra: "value",
        yh: "wbraid_multiple_conversions",
        Kd: "_fpm_parameters",
        Vj: "_host_name",
        Wj: "_in_page_command",
        Xj: "_ip_override",
        Yj: "_is_passthrough_cid",
        Wb: "non_personalized_ads",
        Pe: "_sst_parameters",
        lb: "conversion_label",
        sa: "page_location",
        ob: "global_developer_id_string",
        sc: "tc_privacy_string",
      },
    },
    xh = {},
    yh = Object.freeze(
      ((xh[P.g.qa] = 1),
      (xh[P.g.If] = 1),
      (xh[P.g.me] = 1),
      (xh[P.g.jb] = 1),
      (xh[P.g.ia] = 1),
      (xh[P.g.Ta] = 1),
      (xh[P.g.Ua] = 1),
      (xh[P.g.eb] = 1),
      (xh[P.g.Ic] = 1),
      (xh[P.g.zb] = 1),
      (xh[P.g.Na] = 1),
      (xh[P.g.nc] = 1),
      (xh[P.g.ud] = 1),
      (xh[P.g.ja] = 1),
      (xh[P.g.Sg] = 1),
      (xh[P.g.yd] = 1),
      (xh[P.g.ze] = 1),
      (xh[P.g.Ae] = 1),
      (xh[P.g.Lc] = 1),
      (xh[P.g.eh] = 1),
      (xh[P.g.Oc] = 1),
      (xh[P.g.hh] = 1),
      (xh[P.g.De] = 1),
      (xh[P.g.Qf] = 1),
      (xh[P.g.qc] = 1),
      (xh[P.g.Sb] = 1),
      (xh[P.g.Aa] = 1),
      (xh[P.g.Uf] = 1),
      (xh[P.g.Db] = 1),
      (xh[P.g.Oa] = 1),
      (xh[P.g.rc] = 1),
      (xh[P.g.Fd] = 1),
      (xh[P.g.Gd] = 1),
      (xh[P.g.Wf] = 1),
      (xh[P.g.Hd] = 1),
      (xh[P.g.Vb] = 1),
      (xh[P.g.uc] = 1),
      (xh[P.g.Je] = 1),
      (xh[P.g.pb] = 1),
      (xh[P.g.Pe] = 1),
      xh)
    );
  Object.freeze([
    P.g.sa,
    P.g.Ga,
    P.g.fb,
    P.g.Va,
    P.g.Vf,
    P.g.Ea,
    P.g.Pf,
    P.g.qj,
  ]);
  var zh = {},
    Ah = Object.freeze(
      ((zh[P.g.Vi] = 1),
      (zh[P.g.Wi] = 1),
      (zh[P.g.Xi] = 1),
      (zh[P.g.Yi] = 1),
      (zh[P.g.Zi] = 1),
      (zh[P.g.aj] = 1),
      (zh[P.g.bj] = 1),
      (zh[P.g.cj] = 1),
      (zh[P.g.dj] = 1),
      (zh[P.g.fd] = 1),
      zh)
    ),
    Bh = {},
    Ch = Object.freeze(
      ((Bh[P.g.Gg] = 1),
      (Bh[P.g.Hg] = 1),
      (Bh[P.g.Ec] = 1),
      (Bh[P.g.Fc] = 1),
      (Bh[P.g.Ig] = 1),
      (Bh[P.g.ic] = 1),
      (Bh[P.g.Gc] = 1),
      (Bh[P.g.ub] = 1),
      (Bh[P.g.Pb] = 1),
      (Bh[P.g.vb] = 1),
      (Bh[P.g.Ma] = 1),
      (Bh[P.g.Hc] = 1),
      (Bh[P.g.Sa] = 1),
      (Bh[P.g.Jg] = 1),
      Bh)
    ),
    Dh = Object.freeze([
      P.g.qa,
      P.g.ke,
      P.g.jb,
      P.g.nc,
      P.g.Lc,
      P.g.zd,
      P.g.Oa,
      P.g.uc,
    ]),
    Eh = Object.freeze([].concat(ua(Dh))),
    Fh = Object.freeze([P.g.Ua, P.g.Ae, P.g.Gd, P.g.Wf, P.g.ve]),
    Gh = Object.freeze([].concat(ua(Fh))),
    Hh = {},
    Ih =
      ((Hh[P.g.N] = "1"),
      (Hh[P.g.U] = "2"),
      (Hh[P.g.O] = "3"),
      (Hh[P.g.ya] = "4"),
      Hh),
    Jh = {},
    Kh = Object.freeze(
      ((Jh[P.g.he] = 1),
      (Jh[P.g.ie] = 1),
      (Jh[P.g.qa] = 1),
      (Jh[P.g.ke] = 1),
      (Jh[P.g.me] = 1),
      (Jh[P.g.Fa] = 1),
      (Jh[P.g.kc] = 1),
      (Jh[P.g.Jf] = 1),
      (Jh[P.g.ne] = 1),
      (Jh[P.g.oe] = 1),
      (Jh[P.g.pe] = 1),
      (Jh[P.g.ia] = 1),
      (Jh[P.g.qe] = 1),
      (Jh[P.g.kb] = 1),
      (Jh[P.g.za] = 1),
      (Jh[P.g.Ta] = 1),
      (Jh[P.g.Ua] = 1),
      (Jh[P.g.eb] = 1),
      (Jh[P.g.Na] = 1),
      (Jh[P.g.Ba] = 1),
      (Jh[P.g.Ng] = 1),
      (Jh[P.g.se] = 1),
      (Jh[P.g.Og] = 1),
      (Jh[P.g.Pg] = 1),
      (Jh[P.g.ja] = 1),
      (Jh[P.g.tj] = 1),
      (Jh[P.g.xe] = 1),
      (Jh[P.g.ye] = 1),
      (Jh[P.g.Pf] = 1),
      (Jh[P.g.Lc] = 1),
      (Jh[P.g.qc] = 1),
      (Jh[P.g.Sb] = 1),
      (Jh[P.g.Va] = 1),
      (Jh[P.g.Rf] = 1),
      (Jh[P.g.Sf] = 1),
      (Jh[P.g.Tf] = 1),
      (Jh[P.g.Cd] = 1),
      (Jh[P.g.sa] = 1),
      (Jh[P.g.Ga] = 1),
      (Jh[P.g.nh] = 1),
      (Jh[P.g.oh] = 1),
      (Jh[P.g.ph] = 1),
      (Jh[P.g.qh] = 1),
      (Jh[P.g.Db] = 1),
      (Jh[P.g.Oa] = 1),
      (Jh[P.g.rc] = 1),
      (Jh[P.g.Fd] = 1),
      (Jh[P.g.Hd] = 1),
      (Jh[P.g.Ca] = 1),
      (Jh[P.g.Vb] = 1),
      (Jh[P.g.uc] = 1),
      (Jh[P.g.hb] = 1),
      (Jh[P.g.Da] = 1),
      (Jh[P.g.Ea] = 1),
      (Jh[P.g.ra] = 1),
      Jh)
    ),
    Lh = {},
    Mh = Object.freeze(
      ((Lh.search = "s"),
      (Lh.youtube = "y"),
      (Lh.playstore = "p"),
      (Lh.shopping = "h"),
      (Lh.ads = "a"),
      (Lh.maps = "m"),
      Lh)
    );
  Object.freeze(P.g);
  var R = {},
    Nh =
      ((R[P.g.hc] = "gcu"),
      (R[P.g.wb] = "gclgb"),
      (R[P.g.cb] = "gclaw"),
      (R[P.g.ej] = "gclid_len"),
      (R[P.g.gd] = "gclgs"),
      (R[P.g.hd] = "gcllp"),
      (R[P.g.jd] = "gclst"),
      (R[P.g.ij] = "ndclid"),
      (R[P.g.jj] = "ngad_source"),
      (R[P.g.kj] = "ngbraid"),
      (R[P.g.lj] = "ngclid"),
      (R[P.g.mj] = "ngclsrc"),
      (R[P.g.xb] = "auid"),
      (R[P.g.ne] = "dscnt"),
      (R[P.g.oe] = "fcntr"),
      (R[P.g.pe] = "flng"),
      (R[P.g.qe] = "mid"),
      (R[P.g.Lg] = "bttype"),
      (R[P.g.lb] = "label"),
      (R[P.g.mc] = "capi"),
      (R[P.g.Kf] = "pscdl"),
      (R[P.g.Ba] = "currency_code"),
      (R[P.g.Ng] = "clobs"),
      (R[P.g.se] = "vdltv"),
      (R[P.g.Og] = "clolo"),
      (R[P.g.Pg] = "clolb"),
      (R[P.g.Rg] = "_dbg"),
      (R[P.g.ye] = "oedeld"),
      (R[P.g.nb] = "edid"),
      (R[P.g.xj] = "fdr"),
      (R[P.g.Wg] = "fledge"),
      (R[P.g.Ce] = "gac"),
      (R[P.g.Mc] = "gacgb"),
      (R[P.g.bh] = "gacmcov"),
      (R[P.g.oc] = "gdpr"),
      (R[P.g.ob] = "gdid"),
      (R[P.g.Nc] = "_ng"),
      (R[P.g.ih] = "gsaexp"),
      (R[P.g.Rb] = "frm"),
      (R[P.g.Ee] = "gtm_up"),
      (R[P.g.Bd] = "lps"),
      (R[P.g.Fe] = "did"),
      (R[P.g.Rf] = "fcntr"),
      (R[P.g.Sf] = "flng"),
      (R[P.g.Tf] = "mid"),
      (R[P.g.Cd] = void 0),
      (R[P.g.fb] = "tiba"),
      (R[P.g.Db] = "rdp"),
      (R[P.g.Eb] = "ecsid"),
      (R[P.g.Xf] = "ga_uid"),
      (R[P.g.Hd] = "delopc"),
      (R[P.g.sc] = "gdpr_consent"),
      (R[P.g.Ca] = "oid"),
      (R[P.g.Nj] = "uptgs"),
      (R[P.g.cg] = "uaa"),
      (R[P.g.dg] = "uab"),
      (R[P.g.eg] = "uafvl"),
      (R[P.g.fg] = "uamb"),
      (R[P.g.gg] = "uam"),
      (R[P.g.hg] = "uap"),
      (R[P.g.ig] = "uapv"),
      (R[P.g.jg] = "uaw"),
      (R[P.g.th] = "ec_lat"),
      (R[P.g.uh] = "ec_meta"),
      (R[P.g.vh] = "ec_m"),
      (R[P.g.wh] = "ec_sel"),
      (R[P.g.xh] = "ec_s"),
      (R[P.g.Id] = "ec_mode"),
      (R[P.g.Ea] = "userId"),
      (R[P.g.Jd] = "us_privacy"),
      (R[P.g.ra] = "value"),
      (R[P.g.yh] = "mcov"),
      (R[P.g.Vj] = "hn"),
      (R[P.g.Wj] = "gtm_ee"),
      (R[P.g.Wb] = "npa"),
      (R[P.g.sd] = null),
      (R[P.g.Ub] = null),
      (R[P.g.Va] = null),
      (R[P.g.ia] = null),
      (R[P.g.sa] = null),
      (R[P.g.Ga] = null),
      (R[P.g.Yf] = null),
      (R[P.g.Kd] = null),
      (R[P.g.he] = null),
      (R[P.g.ie] = null),
      R);
  function Oh(a, b) {
    if (a) {
      var c = a.split("x");
      c.length === 2 && (Ph(b, "u_w", c[0]), Ph(b, "u_h", c[1]));
    }
  }
  function Qh(a, b) {
    a &&
      (a.length === 2
        ? Ph(b, "hl", a)
        : a.length === 5 &&
          (Ph(b, "hl", a.substring(0, 2)), Ph(b, "gl", a.substring(3, 5))));
  }
  function Rh(a) {
    var b = Sh;
    b = b === void 0 ? Th : b;
    var c;
    var d = b;
    if (a && a.length) {
      for (var e = [], f = 0; f < a.length; ++f) {
        var g = a[f];
        g &&
          e.push({
            item_id: d(g),
            quantity: g.quantity,
            value: g.price,
            start_date: g.start_date,
            end_date: g.end_date,
          });
      }
      c = e;
    } else c = [];
    var k;
    var m = c;
    if (m) {
      for (var n = [], p = 0; p < m.length; p++) {
        var q = m[p],
          r = [];
        q &&
          (r.push(Uh(q.value)),
          r.push(Uh(q.quantity)),
          r.push(Uh(q.item_id)),
          r.push(Uh(q.start_date)),
          r.push(Uh(q.end_date)),
          n.push("(" + r.join("*") + ")"));
      }
      k = n.length > 0 ? n.join("") : "";
    } else k = "";
    return k;
  }
  function Th(a) {
    return Vh(a.item_id, a.id, a.item_name);
  }
  function Vh() {
    for (
      var a = l(za.apply(0, arguments)), b = a.next();
      !b.done;
      b = a.next()
    ) {
      var c = b.value;
      if (c !== null && c !== void 0) return c;
    }
  }
  function Wh(a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date
          ? b.push("" + d.estimated_delivery_date)
          : b.push("");
      }
      return b.join(",");
    }
  }
  function Ph(a, b, c) {
    c === void 0 || c === null || (c === "" && !ag[b]) || (a[b] = c);
  }
  function Uh(a) {
    return typeof a !== "number" && typeof a !== "string" ? "" : a.toString();
  }
  function Xh(a) {
    return Yh ? F.querySelectorAll(a) : null;
  }
  function Zh(a, b) {
    if (!Yh) return null;
    if (Element.prototype.closest)
      try {
        return a.closest(b);
      } catch (e) {
        return null;
      }
    var c =
        Element.prototype.matches ||
        Element.prototype.webkitMatchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector,
      d = a;
    if (!F.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d;
      } catch (e) {
        break;
      }
      d = d.parentElement || d.parentNode;
    } while (d !== null && d.nodeType === 1);
    return null;
  }
  var $h = !1;
  if (F.querySelectorAll)
    try {
      var ai = F.querySelectorAll(":root");
      ai && ai.length == 1 && ai[0] == F.documentElement && ($h = !0);
    } catch (a) {}
  var Yh = $h;
  function bi(a) {
    switch (a) {
      case 0:
        break;
      case 9:
        return "e4";
      case 6:
        return "e5";
      case 14:
        return "e6";
      default:
        return "e7";
    }
  }
  var ci = /^[0-9A-Fa-f]{64}$/;
  function di(a) {
    try {
      return new TextEncoder().encode(a);
    } catch (e) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        d < 128
          ? b.push(d)
          : d < 2048
          ? b.push(192 | (d >> 6), 128 | (d & 63))
          : d < 55296 || d >= 57344
          ? b.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
          : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
            b.push(
              240 | (d >> 18),
              128 | ((d >> 12) & 63),
              128 | ((d >> 6) & 63),
              128 | (d & 63)
            ));
      }
      return new Uint8Array(b);
    }
  }
  function ei(a) {
    if (a === "" || a === "e0") return Promise.resolve(a);
    var b;
    if ((b = A.crypto) == null ? 0 : b.subtle) {
      if (ci.test(a)) return Promise.resolve(a);
      try {
        var c = di(a);
        return A.crypto.subtle
          .digest("SHA-256", c)
          .then(function (d) {
            var e = Array.from(new Uint8Array(d))
              .map(function (f) {
                return String.fromCharCode(f);
              })
              .join("");
            return A.btoa(e)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          })
          .catch(function () {
            return "e2";
          });
      } catch (d) {
        return Promise.resolve("e2");
      }
    } else return Promise.resolve("e1");
  }
  function ii(a, b) {
    if (a === "") return b;
    var c = Number(a);
    return isNaN(c) ? b : c;
  }
  var ji = [],
    ki = {};
  function li(a) {
    return ji[a] === void 0 ? !1 : ji[a];
  }
  var mi = [];
  function ni(a) {
    switch (a) {
      case 0:
        return 0;
      case 50:
        return 1;
      case 51:
        return 2;
      case 52:
        return 7;
      case 84:
        return 3;
      case 113:
        return 4;
      case 115:
        return 5;
      case 132:
        return 9;
      case 133:
        return 6;
    }
  }
  function oi(a, b) {
    mi[a] = b;
    var c = ni(a);
    c !== void 0 && (ji[c] = b);
  }
  function S(a) {
    oi(a, !0);
  }
  S(38);
  S(33);
  S(34);
  S(35);
  S(36);
  S(54);
  S(101);
  S(19);
  S(145);
  S(18);
  S(152);
  S(144);
  S(85);
  S(116);
  S(7);
  S(55);
  S(4);
  S(107);
  S(140);
  S(98);
  S(91);
  S(114);
  S(158);
  S(127);
  S(128);
  S(20);
  S(106);
  S(82);
  S(111);
  S(112);
  S(153);
  S(115);
  S(5);
  oi(23, !1), S(24);
  ki[1] = ii("1", 6e4);
  ki[3] = ii("10", 1);
  ki[2] = ii("", 50);
  S(28);
  S(13);
  S(90);
  S(142);
  S(119);
  S(141);
  var qi = !1;
  S(120);
  S(77);
  S(156);
  S(133);
  S(123);
  S(27);
  S(80);
  S(132);
  S(93);
  S(97);
  S(110);
  S(61);
  S(96);
  S(131);
  S(113);
  S(94);
  S(30);
  S(57);
  S(22);
  S(58);
  S(149);
  S(81);
  S(150);
  S(56);
  S(137);
  S(105);
  S(14);
  function T(a) {
    return !!mi[a];
  }
  function pi(a, b) {
    for (var c = !1, d = !1, e = 0; c === d; )
      if (
        ((c = (((Math.random() * 4294967296) | 0) & 1) === 0),
        (d = (((Math.random() * 4294967296) | 0) & 1) === 0),
        e++,
        e > 30)
      )
        return;
    c ? S(b) : S(a);
  }
  var ri = {
      kl: "1000",
      Wl: "102015666~102067808~102081485~102123608~102482433~102528644~102539968~102546754~102556565",
    },
    si = { om: Number(ri.kl) || 0, Pn: ri.Wl };
  function U(a) {
    Wa("GTM", a);
  }
  var Zi = {},
    $i = (A.google_tag_manager = A.google_tag_manager || {});
  Zi.Dh = "51u0";
  Zi.Oe = Number("0") || 0;
  Zi.tb = "dataLayer";
  Zi.Rn =
    "ChEIgIbyvAYQ88qUvoy0mbqMARIkAJCtRK5dlC24+dHUFzM44vzWdXkXw8XJRE3pRTvWuIgOVYf5GgLv+g\x3d\x3d";
  var aj = {
      __cl: 1,
      __ecl: 1,
      __ehl: 1,
      __evl: 1,
      __fal: 1,
      __fil: 1,
      __fsl: 1,
      __hl: 1,
      __jel: 1,
      __lcl: 1,
      __sdl: 1,
      __tl: 1,
      __ytl: 1,
    },
    bj = { __paused: 1, __tg: 1 },
    cj;
  for (cj in aj) aj.hasOwnProperty(cj) && (bj[cj] = 1);
  var dj = kb(""),
    ej = !1,
    fj,
    gj = !1;
  fj = gj;
  var hj,
    ij = !1;
  hj = ij;
  var jj,
    kj = !1;
  jj = kj;
  Zi.Ff = "www.googletagmanager.com";
  var lj = "" + Zi.Ff + (fj ? "/gtag/js" : "/gtm.js"),
    mj = null,
    nj = null,
    oj = {},
    pj = {};
  function qj() {
    var a = $i.sequence || 1;
    $i.sequence = a + 1;
    return a;
  }
  Zi.il = "";
  var rj = "";
  Zi.Eh = rj;
  var sj = function () {
      this.j = new Set();
    },
    uj = function () {
      return Array.from(tj.Fb.j).join("~");
    },
    tj = new (function () {
      this.Fb = new sj();
      this.C = !1;
      this.j = 0;
      this.aa = this.Ha = this.vc = this.K = "";
      this.P = this.H = !1;
    })();
  function vj() {
    var a = tj.K.length;
    return tj.K[a - 1] === "/" ? tj.K.substring(0, a - 1) : tj.K;
  }
  function wj() {
    return tj.C ? (T(88) ? tj.j === 0 : tj.j !== 1) : !1;
  }
  function xj(a) {
    for (var b = {}, c = l(a.split("|")), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return b;
  }
  var yj = new fb(),
    zj = {},
    Aj = {},
    Dj = {
      name: Zi.tb,
      set: function (a, b) {
        Sc(wb(a, b), zj);
        Bj();
      },
      get: function (a) {
        return Cj(a, 2);
      },
      reset: function () {
        yj = new fb();
        zj = {};
        Bj();
      },
    };
  function Cj(a, b) {
    return b != 2 ? yj.get(a) : Ej(a);
  }
  function Ej(a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = zj, e = 0; e < c.length; e++) {
      if (d === null) return !1;
      if (d === void 0) break;
      d = d[c[e]];
      if (b.indexOf(d) !== -1) return;
    }
    return d;
  }
  function Fj(a, b) {
    Aj.hasOwnProperty(a) || (yj.set(a, b), Sc(wb(a, b), zj), Bj());
  }
  function Gj() {
    for (
      var a = [
          "gtm.allowlist",
          "gtm.blocklist",
          "gtm.whitelist",
          "gtm.blacklist",
          "tagTypeBlacklist",
        ],
        b = 0;
      b < a.length;
      b++
    ) {
      var c = a[b],
        d = Cj(c, 1);
      if (Array.isArray(d) || Rc(d)) d = Sc(d, null);
      Aj[c] = d;
    }
  }
  function Bj(a) {
    hb(Aj, function (b, c) {
      yj.set(b, c);
      Sc(wb(b), zj);
      Sc(wb(b, c), zj);
      a && delete Aj[b];
    });
  }
  function Hj(a, b) {
    var c,
      d = (b === void 0 ? 2 : b) !== 1 ? Ej(a) : yj.get(a);
    Oc(d) === "array" || Oc(d) === "object" ? (c = Sc(d, null)) : (c = d);
    return c;
  }
  var Mj = /:[0-9]+$/,
    Nj = /^\d+\.fls\.doubleclick\.net$/;
  function Oj(a, b, c, d) {
    for (var e = [], f = l(a.split("&")), g = f.next(); !g.done; g = f.next()) {
      var k = l(g.value.split("=")),
        m = k.next().value,
        n = ta(k);
      if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
        var p = n.join("=");
        if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
        e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")));
      }
    }
    return c ? e : void 0;
  }
  function Pj(a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if (b === "protocol" || b === "port")
      a.protocol = Qj(a.protocol) || Qj(A.location.protocol);
    b === "port"
      ? (a.port = String(
          Number(a.hostname ? a.port : A.location.port) ||
            (a.protocol === "http" ? 80 : a.protocol === "https" ? 443 : "")
        ))
      : b === "host" &&
        (a.hostname = (a.hostname || A.location.hostname)
          .replace(Mj, "")
          .toLowerCase());
    return Rj(a, b, c, d, e);
  }
  function Rj(a, b, c, d, e) {
    var f,
      g = Qj(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = Sj(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(Mj, "").toLowerCase();
        if (c) {
          var k = /^www\d*\./.exec(f);
          k && k[0] && (f = f.substring(k[0].length));
        }
        break;
      case "port":
        f = String(
          Number(a.port) || (g === "http" ? 80 : g === "https" ? 443 : "")
        );
        break;
      case "path":
        a.pathname || a.hostname || Wa("TAGGING", 1);
        f = a.pathname.substring(0, 1) === "/" ? a.pathname : "/" + a.pathname;
        var m = f.split("/");
        (d || []).indexOf(m[m.length - 1]) >= 0 && (m[m.length - 1] = "");
        f = m.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = Oj(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = n.length > 1 ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href;
    }
    return f;
  }
  function Qj(a) {
    return a ? a.replace(":", "").toLowerCase() : "";
  }
  function Sj(a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = c < 0 ? a.href : a.href.substring(0, c);
    }
    return b;
  }
  var Tj = {},
    Uj = 0;
  function Vj(a) {
    var b = Tj[a];
    if (!b) {
      var c = F.createElement("a");
      a && (c.href = a);
      var d = c.pathname;
      d[0] !== "/" && (a || Wa("TAGGING", 1), (d = "/" + d));
      var e = c.hostname.replace(Mj, "");
      b = {
        href: c.href,
        protocol: c.protocol,
        host: c.host,
        hostname: e,
        pathname: d,
        search: c.search,
        hash: c.hash,
        port: c.port,
      };
      Uj < 5 && ((Tj[a] = b), Uj++);
    }
    return b;
  }
  function Wj(a) {
    var b = Vj(A.location.href),
      c = Pj(b, "host", !1);
    if (c && c.match(Nj)) {
      var d = Pj(b, "path");
      if (d) {
        var e = d.split(a + "=");
        if (e.length > 1) return e[1].split(";")[0].split("?")[0];
      }
    }
  }
  var Xj = {
    "https://www.google.com": "/g",
    "https://www.googleadservices.com": "/as",
    "https://pagead2.googlesyndication.com": "/gs",
  };
  function Yj(a, b) {
    if (a) {
      var c = "" + a;
      c.indexOf("http://") !== 0 &&
        c.indexOf("https://") !== 0 &&
        (c = "https://" + c);
      c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
      return Vj("" + c + b).href;
    }
  }
  function Zj(a, b) {
    if (wj() || hj) return Yj(a, b);
  }
  function ak() {
    return !!Zi.Eh && Zi.Eh.split("@@").join("") !== "SGTM_TOKEN";
  }
  function bk(a) {
    for (var b = l([P.g.Fd, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
      var d = W(a, c.value);
      if (d) return d;
    }
  }
  function ck(a, b) {
    return wj() ? "" + vj() + (b ? Xj[a] || "" : "") : a;
  }
  function dk(a) {
    var b = String(a[He.wa] || "").replace(/_/g, "");
    return tb(b, "cvt") ? "cvt" : b;
  }
  var ek =
    A.location.search.indexOf("?gtm_latency=") >= 0 ||
    A.location.search.indexOf("&gtm_latency=") >= 0;
  var fk = { sampleRate: "0.005000", Zk: "", On: "0.01" },
    gk = Math.random(),
    hk;
  if (!(hk = ek)) {
    var ik = fk.sampleRate;
    hk = gk < Number(ik);
  }
  var jk = hk,
    kk =
      (gc == null ? void 0 : gc.includes("gtm_debug=d")) ||
      ek ||
      gk >= 1 - Number(fk.On);
  var lk = /gtag[.\/]js/,
    mk = /gtm[.\/]js/,
    nk = !1;
  function ok(a) {
    if (nk) return "1";
    var b,
      c = (b = a.scriptElement) == null ? void 0 : b.src;
    if (c) {
      if (lk.test(c)) return "3";
      if (mk.test(c)) return "2";
    }
    return "0";
  }
  function pk(a, b) {
    var c = qk();
    c.pending || (c.pending = []);
    cb(c.pending, function (d) {
      return (
        d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
      );
    }) || c.pending.push({ target: a, onLoad: b });
  }
  function rk() {
    var a = A.google_tags_first_party;
    Array.isArray(a) || (a = []);
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next())
      b[d.value] = !0;
    return Object.freeze(b);
  }
  var sk = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {};
    this.pending = [];
    this.siloed = [];
    this.injectedFirstPartyContainers = {};
    this.injectedFirstPartyContainers = rk();
  };
  function qk() {
    var a = hc("google_tag_data", {}),
      b = a.tidr;
    (b && typeof b === "object") || ((b = new sk()), (a.tidr = b));
    var c = b;
    c.container || (c.container = {});
    c.destination || (c.destination = {});
    c.canonical || (c.canonical = {});
    c.pending || (c.pending = []);
    c.siloed || (c.siloed = []);
    c.injectedFirstPartyContainers || (c.injectedFirstPartyContainers = rk());
    return c;
  }
  var tk = {},
    uk = !1,
    Of = {
      ctid: "GTM-T4QW35M",
      canonicalContainerId: "116728426",
      Hk: "GTM-T4QW35M",
      Ik: "GTM-T4QW35M",
    };
  tk.Le = kb("");
  function vk() {
    return (
      tk.Le &&
      wk().some(function (a) {
        return a === Of.ctid;
      })
    );
  }
  function xk() {
    var a = yk();
    return uk ? a.map(zk) : a;
  }
  function Ak() {
    var a = wk();
    return uk ? a.map(zk) : a;
  }
  function Bk() {
    var a = Ak();
    if (T(136) && !uk)
      for (var b = l([].concat(ua(a))), c = b.next(); !c.done; c = b.next()) {
        var d = zk(c.value),
          e = qk().destination[d];
        (e && e.state !== 0) || a.push(d);
      }
    return a;
  }
  function Ck() {
    return Dk(Of.ctid);
  }
  function Fk() {
    return Dk(Of.canonicalContainerId || "_" + Of.ctid);
  }
  function yk() {
    return Of.Hk ? Of.Hk.split("|") : [Of.ctid];
  }
  function wk() {
    return Of.Ik ? Of.Ik.split("|") : [];
  }
  function Gk() {
    var a = Hk(Ik()),
      b = a && a.parent;
    if (b) return Hk(b);
  }
  function Hk(a) {
    var b = qk();
    return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid];
  }
  function Dk(a) {
    return uk ? zk(a) : a;
  }
  function zk(a) {
    return "siloed_" + a;
  }
  function Jk(a) {
    return T(136) ? Kk(a) : uk ? Kk(a) : a;
  }
  function Kk(a) {
    a = String(a);
    return tb(a, "siloed_") ? a.substring(7) : a;
  }
  function Lk() {
    if (tj.H) {
      var a = qk();
      if (a.siloed) {
        for (
          var b = [], c = yk().map(zk), d = wk().map(zk), e = {}, f = 0;
          f < a.siloed.length;
          e = { og: void 0 }, f++
        )
          (e.og = a.siloed[f]),
            !uk &&
            cb(
              e.og.isDestination ? d : c,
              (function (g) {
                return function (k) {
                  return k === g.og.ctid;
                };
              })(e)
            )
              ? (uk = !0)
              : b.push(e.og);
        a.siloed = b;
      }
    }
  }
  function Mk() {
    var a = qk();
    if (a.pending) {
      for (
        var b, c = [], d = !1, e = xk(), f = Bk(), g = {}, k = 0;
        k < a.pending.length;
        g = { wf: void 0 }, k++
      )
        (g.wf = a.pending[k]),
          cb(
            g.wf.target.isDestination ? f : e,
            (function (m) {
              return function (n) {
                return n === m.wf.target.ctid;
              };
            })(g)
          )
            ? d || ((b = g.wf.onLoad), (d = !0))
            : c.push(g.wf);
      a.pending = c;
      if (b)
        try {
          b(Fk());
        } catch (m) {}
    }
  }
  function Nk() {
    for (
      var a = Of.ctid,
        b = xk(),
        c = Bk(),
        d = function (p, q) {
          var r = {
            canonicalContainerId: Of.canonicalContainerId,
            scriptContainerId: a,
            state: 2,
            containers: b.slice(),
            destinations: c.slice(),
          };
          fc && (r.scriptElement = fc);
          gc && (r.scriptSource = gc);
          if (Gk() === void 0) {
            var u;
            a: {
              if ((r.scriptContainerId || "").indexOf("GTM-") >= 0) {
                var v;
                b: {
                  var t,
                    w = (t = r.scriptElement) == null ? void 0 : t.src;
                  if (w) {
                    for (
                      var x = tj.C,
                        y = Vj(w),
                        B = x ? y.pathname : "" + y.hostname + y.pathname,
                        C = F.scripts,
                        D = "",
                        E = 0;
                      E < C.length;
                      ++E
                    ) {
                      var K = C[E];
                      if (
                        !(
                          K.innerHTML.length === 0 ||
                          (!x &&
                            K.innerHTML.indexOf(
                              r.scriptContainerId || "SHOULD_NOT_BE_SET"
                            ) < 0) ||
                          K.innerHTML.indexOf(B) < 0
                        )
                      ) {
                        if (K.innerHTML.indexOf("(function(w,d,s,l,i)") >= 0) {
                          v = String(E);
                          break b;
                        }
                        D = String(E);
                      }
                    }
                    if (D) {
                      v = D;
                      break b;
                    }
                  }
                  v = void 0;
                }
                var L = v;
                if (L) {
                  nk = !0;
                  u = L;
                  break a;
                }
              }
              var Q = [].slice.call(document.scripts);
              u = r.scriptElement ? String(Q.indexOf(r.scriptElement)) : "-1";
            }
            r.htmlLoadOrder = u;
            r.loadScriptType = ok(r);
          }
          var I = q ? e.destination : e.container,
            V = I[p];
          V ? (q && V.state === 0 && U(93), Object.assign(V, r)) : (I[p] = r);
        },
        e = qk(),
        f = l(b),
        g = f.next();
      !g.done;
      g = f.next()
    )
      d(g.value, !1);
    for (var k = l(c), m = k.next(); !m.done; m = k.next()) {
      var n = m.value;
      T(136) && !uk && tb(n, "siloed_") ? delete e.destination[n] : d(n, !0);
    }
    e.canonical[Fk()] = {};
    Mk();
  }
  function Ok(a) {
    return !!qk().container[a];
  }
  function Pk(a) {
    var b = qk().destination[a];
    return !!b && !!b.state;
  }
  function Ik() {
    return { ctid: Ck(), isDestination: tk.Le };
  }
  function Qk(a) {
    var b = qk();
    (b.siloed = b.siloed || []).push(a);
  }
  function Rk() {
    var a = qk().container,
      b;
    for (b in a) if (a.hasOwnProperty(b) && a[b].state === 1) return !0;
    return !1;
  }
  function Sk() {
    var a = {};
    hb(qk().destination, function (b, c) {
      c.state === 0 && (a[Kk(b)] = c);
    });
    return a;
  }
  function Tk(a) {
    return !!(
      a &&
      a.parent &&
      a.context &&
      a.context.source === 1 &&
      a.parent.ctid.indexOf("GTM-") !== 0
    );
  }
  function Uk(a) {
    var b = qk();
    return b.destination[a] ? 1 : b.destination[zk(a)] ? 2 : 0;
  }
  var Vk = "/td?id=" + Of.ctid,
    Wk = ["v", "t", "pid", "dl", "tdp"],
    Xk = ["mcc"],
    Yk = {},
    Zk = {};
  function $k(a, b, c) {
    Zk[a] = b;
    (c === void 0 || c) && al(a);
  }
  function al(a, b) {
    if (Yk[a] === void 0 || (b === void 0 ? 0 : b)) Yk[a] = !0;
  }
  function bl(a) {
    a = a === void 0 ? !1 : a;
    var b = Object.keys(Yk)
      .filter(function (c) {
        return Yk[c] === !0 && Zk[c] !== void 0 && (a || !Xk.includes(c));
      })
      .map(function (c) {
        var d = Zk[c];
        typeof d === "function" && (d = d());
        return d ? "&" + c + "=" + d : "";
      })
      .join("");
    return "" + ck("https://www.googletagmanager.com") + Vk + ("" + b + "&z=0");
  }
  function cl() {
    Object.keys(Yk).forEach(function (a) {
      Wk.indexOf(a) < 0 && (Yk[a] = !1);
    });
  }
  function dl(a) {
    a = a === void 0 ? !1 : a;
    if ((!T(6) || tj.P) && kk && Of.ctid) {
      var b = bl(a);
      a ? Ac(b) : qc(b);
      cl();
    }
  }
  var el = {};
  function fl() {
    Object.keys(Yk).filter(function (a) {
      return Yk[a] && !Wk.includes(a);
    }).length > 0 && dl(!0);
  }
  var gl = db();
  function hl() {
    gl = db();
  }
  function il() {
    $k("v", "3");
    $k("t", "t");
    $k("pid", function () {
      return String(gl);
    });
    rc(A, "pagehide", fl);
    A.setInterval(hl, 864e5);
  }
  function jl() {
    var a = hc("google_tag_data", {});
    return (a.ics = a.ics || new kl());
  }
  var kl = function () {
    this.entries = {};
    this.waitPeriodTimedOut =
      this.wasSetLate =
      this.accessedAny =
      this.accessedDefault =
      this.usedImplicit =
      this.usedUpdate =
      this.usedDefault =
      this.usedDeclare =
      this.active =
        !1;
    this.j = [];
  };
  kl.prototype.default = function (a, b, c, d, e, f, g) {
    this.usedDefault ||
      this.usedDeclare ||
      (!this.accessedDefault && !this.accessedAny) ||
      (this.wasSetLate = !0);
    this.usedDefault = this.active = !0;
    Wa("TAGGING", 19);
    b == null ? Wa("TAGGING", 18) : ll(this, a, b === "granted", c, d, e, f, g);
  };
  kl.prototype.waitForUpdate = function (a, b, c) {
    for (var d = 0; d < a.length; d++)
      ll(this, a[d], void 0, void 0, "", "", b, c);
  };
  var ll = function (a, b, c, d, e, f, g, k) {
    var m = a.entries,
      n = m[b] || {},
      p = n.region,
      q = d && z(d) ? d.toUpperCase() : void 0;
    e = e.toUpperCase();
    f = f.toUpperCase();
    if (e === "" || q === f || (q === e ? p !== f : !q && !p)) {
      var r = !!(g && g > 0 && n.update === void 0),
        u = {
          region: q,
          declare_region: n.declare_region,
          implicit: n.implicit,
          default: c !== void 0 ? c : n.default,
          declare: n.declare,
          update: n.update,
          quiet: r,
        };
      if (e !== "" || n.default !== !1) m[b] = u;
      r &&
        A.setTimeout(function () {
          m[b] === u &&
            u.quiet &&
            (Wa("TAGGING", 2),
            (a.waitPeriodTimedOut = !0),
            a.clearTimeout(b, void 0, k),
            a.notifyListeners());
        }, g);
    }
  };
  h = kl.prototype;
  h.clearTimeout = function (a, b, c) {
    var d = [a],
      e = c.delegatedConsentTypes,
      f;
    for (f in e) e.hasOwnProperty(f) && e[f] === a && d.push(f);
    var g = this.entries[a] || {},
      k = this.getConsentState(a, c);
    if (g.quiet) {
      g.quiet = !1;
      for (var m = l(d), n = m.next(); !n.done; n = m.next()) ml(this, n.value);
    } else if (b !== void 0 && k !== b)
      for (var p = l(d), q = p.next(); !q.done; q = p.next()) ml(this, q.value);
  };
  h.update = function (a, b, c) {
    this.usedDefault ||
      this.usedDeclare ||
      this.usedUpdate ||
      !this.accessedAny ||
      (this.wasSetLate = !0);
    this.usedUpdate = this.active = !0;
    if (b != null) {
      var d = this.getConsentState(a, c),
        e = this.entries;
      (e[a] = e[a] || {}).update = b === "granted";
      this.clearTimeout(a, d, c);
    }
  };
  h.declare = function (a, b, c, d, e) {
    this.usedDeclare = this.active = !0;
    var f = this.entries,
      g = f[a] || {},
      k = g.declare_region,
      m = c && z(c) ? c.toUpperCase() : void 0;
    d = d.toUpperCase();
    e = e.toUpperCase();
    if (d === "" || m === e || (m === d ? k !== e : !m && !k)) {
      var n = {
        region: g.region,
        declare_region: m,
        declare: b === "granted",
        implicit: g.implicit,
        default: g.default,
        update: g.update,
        quiet: g.quiet,
      };
      if (d !== "" || g.declare !== !1) f[a] = n;
    }
  };
  h.implicit = function (a, b) {
    this.usedImplicit = !0;
    var c = this.entries,
      d = (c[a] = c[a] || {});
    d.implicit !== !1 && (d.implicit = b === "granted");
  };
  h.getConsentState = function (a, b) {
    var c = this.entries,
      d = c[a] || {},
      e = d.update;
    if (e !== void 0) return e ? 1 : 2;
    if (b.usedContainerScopedDefaults) {
      var f = b.containerScopedDefaults[a];
      if (f === 3) return 1;
      if (f === 2) return 2;
    } else if (((e = d.default), e !== void 0)) return e ? 1 : 2;
    if (b == null ? 0 : b.delegatedConsentTypes.hasOwnProperty(a)) {
      var g = b.delegatedConsentTypes[a],
        k = c[g] || {};
      e = k.update;
      if (e !== void 0) return e ? 1 : 2;
      if (b.usedContainerScopedDefaults) {
        var m = b.containerScopedDefaults[g];
        if (m === 3) return 1;
        if (m === 2) return 2;
      } else if (((e = k.default), e !== void 0)) return e ? 1 : 2;
    }
    e = d.declare;
    if (e !== void 0) return e ? 1 : 2;
    e = d.implicit;
    return e !== void 0 ? (e ? 3 : 4) : 0;
  };
  h.addListener = function (a, b) {
    this.j.push({ consentTypes: a, Pd: b });
  };
  var ml = function (a, b) {
    for (var c = 0; c < a.j.length; ++c) {
      var d = a.j[c];
      Array.isArray(d.consentTypes) &&
        d.consentTypes.indexOf(b) !== -1 &&
        (d.Jk = !0);
    }
  };
  kl.prototype.notifyListeners = function (a, b) {
    for (var c = 0; c < this.j.length; ++c) {
      var d = this.j[c];
      if (d.Jk) {
        d.Jk = !1;
        try {
          d.Pd({ consentEventId: a, consentPriorityId: b });
        } catch (e) {}
      }
    }
  };
  var nl = !1,
    ol = !1,
    pl = {},
    ql = {
      delegatedConsentTypes: {},
      corePlatformServices: {},
      usedCorePlatformServices: !1,
      selectedAllCorePlatformServices: !1,
      containerScopedDefaults:
        ((pl.ad_storage = 1),
        (pl.analytics_storage = 1),
        (pl.ad_user_data = 1),
        (pl.ad_personalization = 1),
        pl),
      usedContainerScopedDefaults: !1,
    };
  function rl(a) {
    var b = jl();
    b.accessedAny = !0;
    return (z(a) ? [a] : a).every(function (c) {
      switch (b.getConsentState(c, ql)) {
        case 1:
        case 3:
          return !0;
        case 2:
        case 4:
          return !1;
        default:
          return !0;
      }
    });
  }
  function sl(a) {
    var b = jl();
    b.accessedAny = !0;
    return b.getConsentState(a, ql);
  }
  function tl(a) {
    for (var b = {}, c = l(a), d = c.next(); !d.done; d = c.next()) {
      var e = d.value;
      b[e] = ql.corePlatformServices[e] !== !1;
    }
    return b;
  }
  function ul(a) {
    var b = jl();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet;
  }
  function vl() {
    if (!li(8)) return !1;
    var a = jl();
    a.accessedAny = !0;
    if (a.active) return !0;
    if (!ql.usedContainerScopedDefaults) return !1;
    for (
      var b = l(Object.keys(ql.containerScopedDefaults)), c = b.next();
      !c.done;
      c = b.next()
    )
      if (ql.containerScopedDefaults[c.value] !== 1) return !0;
    return !1;
  }
  function wl(a, b) {
    jl().addListener(a, b);
  }
  function xl(a, b) {
    jl().notifyListeners(a, b);
  }
  function yl(a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!ul(b[e])) return !0;
      return !1;
    }
    if (c()) {
      var d = !1;
      wl(b, function (e) {
        d || c() || ((d = !0), a(e));
      });
    } else a({});
  }
  function zl(a, b) {
    function c() {
      for (var k = [], m = 0; m < e.length; m++) {
        var n = e[m];
        rl(n) && !f[n] && k.push(n);
      }
      return k;
    }
    function d(k) {
      for (var m = 0; m < k.length; m++) f[k[m]] = !0;
    }
    var e = z(b) ? [b] : b,
      f = {},
      g = c();
    g.length !== e.length &&
      (d(g),
      wl(e, function (k) {
        function m(q) {
          q.length !== 0 && (d(q), (k.consentTypes = q), a(k));
        }
        var n = c();
        if (n.length !== 0) {
          var p = Object.keys(f).length;
          n.length + p >= e.length
            ? m(n)
            : A.setTimeout(function () {
                m(c());
              }, 500);
        }
      }));
  }
  var Al = [
      "ad_storage",
      "analytics_storage",
      "ad_user_data",
      "ad_personalization",
    ],
    Bl = [
      P.g.Fd,
      P.g.Vb,
      P.g.Lc,
      P.g.yb,
      P.g.Eb,
      P.g.Ea,
      P.g.Aa,
      P.g.Na,
      P.g.Ta,
      P.g.zb,
    ],
    Cl = !1,
    Dl = !1,
    El = {},
    Fl = {};
  function Gl() {
    !Dl &&
      Cl &&
      (Al.some(function (a) {
        return ql.containerScopedDefaults[a] !== 1;
      }) ||
        Hl("mbc"));
    Dl = !0;
  }
  function Hl(a) {
    kk && ($k(a, "1"), dl());
  }
  function Il(a, b) {
    if (!El[b] && ((El[b] = !0), Fl[b]))
      for (var c = l(Bl), d = c.next(); !d.done; d = c.next())
        if (a.hasOwnProperty(d.value)) {
          Hl("erc");
          break;
        }
  }
  function Jl(a) {
    Wa("HEALTH", a);
  }
  var Kl;
  try {
    Kl = JSON.parse(
      Ta(
        "eyIwIjoiR0IiLCIxIjoiIiwiMiI6ZmFsc2UsIjMiOiJnb29nbGUuY28udWsiLCI0IjoicmVnaW9uMSIsIjUiOmZhbHNlLCI2IjpmYWxzZSwiNyI6ImFkX3N0b3JhZ2V8YW5hbHl0aWNzX3N0b3JhZ2V8YWRfdXNlcl9kYXRhfGFkX3BlcnNvbmFsaXphdGlvbiJ9"
      )
    );
  } catch (a) {
    U(123), Jl(2), (Kl = {});
  }
  function Ll() {
    return Kl["0"] || "";
  }
  function Ml() {
    return Kl["1"] || "";
  }
  function Nl() {
    var a = !1;
    return a;
  }
  function Ol() {
    return Kl["6"] !== !1;
  }
  function Pl() {
    var a = "";
    return a;
  }
  function Ql() {
    var a = !1;
    return a;
  }
  function Rl() {
    var a = "";
    return a;
  }
  function Sl(a) {
    return a && a.indexOf("pending:") === 0 ? Tl(a.substr(8)) : !1;
  }
  function Tl(a) {
    if (a == null || a.length === 0) return !1;
    var b = Number(a),
      c = ob();
    return b < c + 3e5 && b > c - 9e5;
  }
  var Ul = "",
    Vl = "",
    Wl = { ctid: "", isDestination: !1 },
    Xl = !1,
    Yl = !1,
    Zl = !1,
    $l = !1,
    am = 0,
    bm = !1,
    cm = [];
  function dm(a, b) {
    b = b === void 0 ? {} : b;
    b.groupId = Ul;
    var c,
      d = b,
      e = { publicId: Vl };
    d.eventId != null && (e.eventId = d.eventId);
    d.priorityId != null && (e.priorityId = d.priorityId);
    d.eventName && (e.eventName = d.eventName);
    d.groupId && (e.groupId = d.groupId);
    d.tagName && (e.tagName = d.tagName);
    c = { containerProduct: "GTM", key: e, version: "2", messageType: a };
    c.containerProduct = Xl ? "OGT" : "GTM";
    c.key.targetRef = Wl;
    return c;
  }
  function em(a) {
    if (am === 0) {
      if (bm) {
        var b;
        (b = cm) == null || b.push(a);
      }
    } else if (am !== 2 && bm) {
      var c = hc("google.tagmanager.ta.prodqueue", []);
      c.length >= 50 && c.shift();
      c.push(a);
    }
  }
  function fm() {
    gm();
    sc(F, "TAProdDebugSignal", fm);
  }
  function gm() {
    if (!Zl) {
      Zl = !0;
      hm();
      var a = cm;
      cm = void 0;
      a == null ||
        a.forEach(function (b) {
          em(b);
        });
    }
  }
  function hm() {
    var a = F.documentElement.getAttribute("data-tag-assistant-prod-present");
    Tl(a)
      ? (am = 1)
      : !Sl(a) || Yl || $l
      ? (am = 2)
      : (($l = !0),
        rc(F, "TAProdDebugSignal", fm, !1),
        A.setTimeout(function () {
          gm();
          Yl = !0;
        }, 200));
  }
  function im(a, b) {
    var c = yk(),
      d = wk();
    if (am !== 2 && bm) {
      var e = dm("INIT_PROD");
      e.containerLoadSource = a != null ? a : 0;
      b && (e.parentTargetReference = b);
      e.aliases = c;
      e.destinations = d;
      em(e);
    }
  }
  function jm(a) {
    var b = a.request,
      c = a.Xa,
      d;
    d = a.targetId;
    if (am !== 2 && bm) {
      var e = dm("GTAG_HIT_PROD", {
        eventId: c.eventId,
        priorityId: c.priorityId,
      });
      e.target = d;
      e.url = b.url;
      b.postBody && (e.postBody = b.postBody);
      e.parameterEncoding = b.parameterEncoding;
      e.endpoint = b.endpoint;
      em(e);
    }
  }
  var km = [P.g.N, P.g.U, P.g.O, P.g.ya],
    lm,
    mm;
  function nm(a) {
    for (
      var b = a[P.g.sb], c = Array.isArray(b) ? b : [b], d = { hf: 0 };
      d.hf < c.length;
      d = { hf: d.hf }, ++d.hf
    )
      hb(
        a,
        (function (e) {
          return function (f, g) {
            if (f !== P.g.sb) {
              var k = c[e.hf],
                m = Ll(),
                n = Ml();
              ol = !0;
              nl && Wa("TAGGING", 20);
              jl().declare(f, g, k, m, n);
            }
          };
        })(d)
      );
  }
  function om(a) {
    Gl();
    !mm && lm && Hl("crc");
    mm = !0;
    var b = a[P.g.sb];
    b && U(40);
    var c = a[P.g.de];
    c && U(41);
    for (
      var d = Array.isArray(b) ? b : [b], e = { jf: 0 };
      e.jf < d.length;
      e = { jf: e.jf }, ++e.jf
    )
      hb(
        a,
        (function (f) {
          return function (g, k) {
            if (g !== P.g.sb && g !== P.g.de) {
              var m = d[f.jf],
                n = Number(c),
                p = Ll(),
                q = Ml();
              n = n === void 0 ? 0 : n;
              nl = !0;
              ol && Wa("TAGGING", 20);
              jl().default(g, k, m, p, q, n, ql);
            }
          };
        })(e)
      );
  }
  function pm(a) {
    ql.usedContainerScopedDefaults = !0;
    var b = a[P.g.sb];
    if (b) {
      var c = Array.isArray(b) ? b : [b];
      if (!c.includes(Ml()) && !c.includes(Ll())) return;
    }
    hb(a, function (d, e) {
      switch (d) {
        case "ad_storage":
        case "analytics_storage":
        case "ad_user_data":
        case "ad_personalization":
          break;
        default:
          return;
      }
      ql.usedContainerScopedDefaults = !0;
      ql.containerScopedDefaults[d] = e === "granted" ? 3 : 2;
    });
  }
  function qm(a, b) {
    Gl();
    lm = !0;
    hb(a, function (c, d) {
      nl = !0;
      ol && Wa("TAGGING", 20);
      jl().update(c, d, ql);
    });
    xl(b.eventId, b.priorityId);
  }
  function rm(a) {
    a.hasOwnProperty("all") &&
      ((ql.selectedAllCorePlatformServices = !0),
      hb(Mh, function (b) {
        ql.corePlatformServices[b] = a.all === "granted";
        ql.usedCorePlatformServices = !0;
      }));
    hb(a, function (b, c) {
      b !== "all" &&
        ((ql.corePlatformServices[b] = c === "granted"),
        (ql.usedCorePlatformServices = !0));
    });
  }
  function X(a) {
    Array.isArray(a) || (a = [a]);
    return a.every(function (b) {
      return rl(b);
    });
  }
  function sm(a, b) {
    wl(a, b);
  }
  function tm(a, b) {
    zl(a, b);
  }
  function um(a, b) {
    yl(a, b);
  }
  function vm() {
    var a = [P.g.N, P.g.ya, P.g.O];
    jl().waitForUpdate(a, 500, ql);
  }
  function wm(a) {
    for (var b = l(a), c = b.next(); !c.done; c = b.next()) {
      var d = c.value;
      jl().clearTimeout(d, void 0, ql);
    }
    xl();
  }
  var xm = !1,
    ym = [];
  var zm = {
      mk: "service_worker_endpoint",
      Fh: "shared_user_id",
      Gh: "shared_user_id_requested",
      Qe: "shared_user_id_source",
      Ef: "cookie_deprecation_label",
    },
    Am;
  function Bm(a) {
    if (!Am) {
      Am = {};
      for (var b = l(Object.keys(zm)), c = b.next(); !c.done; c = b.next())
        Am[zm[c.value]] = !0;
    }
    return !!Am[a];
  }
  function Cm(a, b) {
    b = b === void 0 ? !1 : b;
    if (Bm(a)) {
      var c,
        d,
        e =
          (d = (c = hc("google_tag_data", {})).xcd) != null ? d : (c.xcd = {});
      if (e[a]) return e[a];
      if (b) {
        var f = void 0,
          g = 1,
          k = {},
          m = {
            set: function (n) {
              f = n;
              m.notify();
            },
            get: function () {
              return f;
            },
            subscribe: function (n) {
              k[String(g)] = n;
              return g++;
            },
            unsubscribe: function (n) {
              var p = String(n);
              return k.hasOwnProperty(p) ? (delete k[p], !0) : !1;
            },
            notify: function () {
              for (
                var n = l(Object.keys(k)), p = n.next();
                !p.done;
                p = n.next()
              ) {
                var q = p.value;
                try {
                  k[q](a, f);
                } catch (r) {}
              }
            },
          };
        return (e[a] = m);
      }
    }
  }
  function Dm(a, b) {
    var c = Cm(a, !0);
    c && c.set(b);
  }
  function Em(a) {
    var b;
    return (b = Cm(a)) == null ? void 0 : b.get();
  }
  function Fm(a, b) {
    if (typeof b === "function") {
      var c;
      return (c = Cm(a, !0)) == null ? void 0 : c.subscribe(b);
    }
  }
  function Gm(a, b) {
    var c = Cm(a);
    return c ? c.unsubscribe(b) : !1;
  }
  function Hm() {
    if ($i.pscdl !== void 0) Em(zm.Ef) === void 0 && Dm(zm.Ef, $i.pscdl);
    else {
      var a = function (c) {
          $i.pscdl = c;
          Dm(zm.Ef, c);
        },
        b = function () {
          a("error");
        };
      try {
        dc.cookieDeprecationLabel
          ? (a("pending"),
            dc.cookieDeprecationLabel.getValue().then(a).catch(b))
          : a("noapi");
      } catch (c) {
        b(c);
      }
    }
  }
  function Im(a, b) {
    b &&
      hb(b, function (c, d) {
        typeof d !== "object" && d !== void 0 && (a["1p." + c] = String(d));
      });
  }
  var Jm = /[A-Z]+/,
    Km = /\s/;
  function Lm(a, b) {
    if (z(a)) {
      a = mb(a);
      var c = a.indexOf("-");
      if (!(c < 0)) {
        var d = a.substring(0, c);
        if (Jm.test(d)) {
          var e = a.substring(c + 1),
            f;
          if (b) {
            var g = function (n) {
              var p = n.indexOf("/");
              return p < 0 ? [n] : [n.substring(0, p), n.substring(p + 1)];
            };
            f = g(e);
            if (d === "DC" && f.length === 2) {
              var k = g(f[1]);
              k.length === 2 && ((f[1] = k[0]), f.push(k[1]));
            }
          } else {
            f = e.split("/");
            for (var m = 0; m < f.length; m++)
              if (!f[m] || (Km.test(f[m]) && (d !== "AW" || m !== 1))) return;
          }
          return { id: a, prefix: d, destinationId: d + "-" + f[0], ids: f };
        }
      }
    }
  }
  function Mm(a, b) {
    for (var c = {}, d = 0; d < a.length; ++d) {
      var e = Lm(a[d], b);
      e && (c[e.id] = e);
    }
    Nm(c);
    var f = [];
    hb(c, function (g, k) {
      f.push(k);
    });
    return f;
  }
  function Nm(a) {
    var b = [],
      c;
    for (c in a)
      if (a.hasOwnProperty(c)) {
        var d = a[c];
        d.prefix === "AW" && d.ids[Om[2]] && b.push(d.destinationId);
      }
    for (var e = 0; e < b.length; ++e) delete a[b[e]];
  }
  var Pm = {},
    Om =
      ((Pm[0] = 0),
      (Pm[1] = 0),
      (Pm[2] = 1),
      (Pm[3] = 0),
      (Pm[4] = 1),
      (Pm[5] = 2),
      (Pm[6] = 0),
      (Pm[7] = 0),
      (Pm[8] = 0),
      Pm);
  var Qm = Number("") || 500,
    Rm = {},
    Sm = {},
    Tm = { initialized: 11, complete: 12, interactive: 13 },
    Um = {},
    Vm = Object.freeze(((Um[P.g.Oa] = !0), Um)),
    Wm = void 0;
  function Xm(a, b) {
    if (b.length && kk) {
      var c;
      (c = Rm)[a] != null || (c[a] = []);
      Sm[a] != null || (Sm[a] = []);
      var d = b.filter(function (e) {
        return !Sm[a].includes(e);
      });
      Rm[a].push.apply(Rm[a], ua(d));
      Sm[a].push.apply(Sm[a], ua(d));
      !Wm &&
        d.length > 0 &&
        (al("tdc", !0),
        (Wm = A.setTimeout(function () {
          dl();
          Rm = {};
          Wm = void 0;
        }, Qm)));
    }
  }
  function Ym(a, b) {
    var c = {},
      d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c;
  }
  function Zm(a, b, c, d) {
    c = c === void 0 ? {} : c;
    d = d === void 0 ? "" : d;
    if (a === b) return [];
    var e = function (r, u) {
        var v;
        Oc(u) === "object" ? (v = u[r]) : Oc(u) === "array" && (v = u[r]);
        return v === void 0 ? Vm[r] : v;
      },
      f = Ym(a, b),
      g;
    for (g in f)
      if (f.hasOwnProperty(g)) {
        var k = (d ? d + "." : "") + g,
          m = e(g, a),
          n = e(g, b),
          p = Oc(m) === "object" || Oc(m) === "array",
          q = Oc(n) === "object" || Oc(n) === "array";
        if (p && q) Zm(m, n, c, k);
        else if (p || q || m !== n) c[k] = !0;
      }
    return Object.keys(c);
  }
  function $m() {
    $k(
      "tdc",
      function () {
        Wm && (A.clearTimeout(Wm), (Wm = void 0));
        var a = [],
          b;
        for (b in Rm) Rm.hasOwnProperty(b) && a.push(b + "*" + Rm[b].join("."));
        return a.length ? a.join("!") : void 0;
      },
      !1
    );
  }
  var an = function (a, b, c, d, e, f, g, k, m, n, p) {
      this.eventId = a;
      this.priorityId = b;
      this.j = c;
      this.P = d;
      this.H = e;
      this.K = f;
      this.C = g;
      this.eventMetadata = k;
      this.onSuccess = m;
      this.onFailure = n;
      this.isGtmEvent = p;
    },
    bn = function (a, b) {
      var c = [];
      switch (b) {
        case 3:
          c.push(a.j);
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 2:
          c.push(a.j);
          break;
        case 1:
          c.push(a.P);
          c.push(a.H);
          c.push(a.K);
          c.push(a.C);
          break;
        case 4:
          c.push(a.j), c.push(a.P), c.push(a.H), c.push(a.K);
      }
      return c;
    },
    W = function (a, b, c, d) {
      for (
        var e = l(bn(a, d === void 0 ? 3 : d)), f = e.next();
        !f.done;
        f = e.next()
      ) {
        var g = f.value;
        if (g[b] !== void 0) return g[b];
      }
      return c;
    },
    cn = function (a) {
      for (
        var b = {}, c = bn(a, 4), d = l(c), e = d.next();
        !e.done;
        e = d.next()
      )
        for (
          var f = Object.keys(e.value), g = l(f), k = g.next();
          !k.done;
          k = g.next()
        )
          b[k.value] = 1;
      return Object.keys(b);
    },
    dn = function (a, b, c) {
      function d(n) {
        Rc(n) &&
          hb(n, function (p, q) {
            f = !0;
            e[p] = q;
          });
      }
      var e = {},
        f = !1,
        g = bn(a, c === void 0 ? 3 : c);
      g.reverse();
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) d(m.value[b]);
      return f ? e : void 0;
    },
    en = function (a) {
      for (
        var b = [P.g.od, P.g.kd, P.g.ld, P.g.md, P.g.nd, P.g.pd, P.g.rd],
          c = bn(a, 3),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        for (
          var f = e.value, g = {}, k = !1, m = l(b), n = m.next();
          !n.done;
          n = m.next()
        ) {
          var p = n.value;
          f[p] !== void 0 && ((g[p] = f[p]), (k = !0));
        }
        var q = k ? g : void 0;
        if (q) return q;
      }
      return {};
    },
    fn = function (a, b) {
      this.eventId = a;
      this.priorityId = b;
      this.C = {};
      this.P = {};
      this.j = {};
      this.H = {};
      this.aa = {};
      this.K = {};
      this.eventMetadata = {};
      this.isGtmEvent = !1;
      this.onSuccess = function () {};
      this.onFailure = function () {};
    },
    gn = function (a, b) {
      a.C = b;
      return a;
    },
    hn = function (a, b) {
      a.P = b;
      return a;
    },
    jn = function (a, b) {
      a.j = b;
      return a;
    },
    kn = function (a, b) {
      a.H = b;
      return a;
    },
    ln = function (a, b) {
      a.aa = b;
      return a;
    },
    mn = function (a, b) {
      a.K = b;
      return a;
    },
    nn = function (a, b) {
      a.eventMetadata = b || {};
      return a;
    },
    on = function (a, b) {
      a.onSuccess = b;
      return a;
    },
    pn = function (a, b) {
      a.onFailure = b;
      return a;
    },
    qn = function (a, b) {
      a.isGtmEvent = b;
      return a;
    },
    rn = function (a) {
      return new an(
        a.eventId,
        a.priorityId,
        a.C,
        a.P,
        a.j,
        a.H,
        a.K,
        a.eventMetadata,
        a.onSuccess,
        a.onFailure,
        a.isGtmEvent
      );
    };
  var sn = { Yk: Number("5"), Bo: Number("") },
    tn = [];
  function un(a) {
    tn.push(a);
  }
  var vn = "?id=" + Of.ctid,
    wn = void 0,
    xn = {},
    yn = void 0,
    zn = new (function () {
      var a = 5;
      sn.Yk > 0 && (a = sn.Yk);
      this.C = a;
      this.j = 0;
      this.H = [];
    })(),
    An = 1e3;
  function Bn(a, b) {
    var c = wn;
    if (c === void 0)
      if (b) c = qj();
      else return "";
    for (
      var d = [ck("https://www.googletagmanager.com"), "/a", vn],
        e = l(tn),
        f = e.next();
      !f.done;
      f = e.next()
    )
      for (
        var g = f.value, k = g({ eventId: c, ed: !!a }), m = l(k), n = m.next();
        !n.done;
        n = m.next()
      ) {
        var p = l(n.value),
          q = p.next().value,
          r = p.next().value;
        d.push("&" + q + "=" + r);
      }
    d.push("&z=0");
    return d.join("");
  }
  function Cn() {
    if (!T(6) || tj.P)
      if ((yn && (A.clearTimeout(yn), (yn = void 0)), wn !== void 0 && Dn)) {
        var a;
        (a = xn[wn]) || (a = zn.j < zn.C ? !1 : ob() - zn.H[zn.j % zn.C] < 1e3);
        if (a || An-- <= 0) U(1), (xn[wn] = !0);
        else {
          var b = zn.j++ % zn.C;
          zn.H[b] = ob();
          var c = Bn(!0);
          qc(c);
          Dn = !1;
        }
      }
  }
  var Dn = !1;
  function En(a) {
    xn[a] ||
      (a !== wn && (Cn(), (wn = a)),
      (Dn = !0),
      yn || (yn = A.setTimeout(Cn, 500)),
      Bn().length >= 2022 && Cn());
  }
  var Fn = db();
  function Gn() {
    Fn = db();
  }
  function Hn() {
    return [
      ["v", "3"],
      ["t", "t"],
      ["pid", String(Fn)],
    ];
  }
  var In = {};
  function Jn(a, b, c) {
    jk && a !== void 0 && ((In[a] = In[a] || []), In[a].push(c + b), En(a));
  }
  function Kn(a) {
    var b = a.eventId,
      c = a.ed,
      d = [],
      e = In[b] || [];
    e.length && d.push(["epr", e.join(".")]);
    c && delete In[b];
    return d;
  }
  var Ln = {},
    Mn = ((Ln[0] = 0), (Ln[1] = 0), (Ln[2] = 0), (Ln[3] = 0), Ln),
    Nn = function (a, b) {
      this.j = a;
      this.consentTypes = b;
    };
  Nn.prototype.isConsentGranted = function () {
    switch (this.j) {
      case 0:
        return this.consentTypes.every(function (a) {
          return rl(a);
        });
      case 1:
        return this.consentTypes.some(function (a) {
          return rl(a);
        });
      default:
        throw Error("consentsRequired had an unknown type");
    }
  };
  var On = {},
    Pn =
      ((On[0] = new Nn(0, [])),
      (On[1] = new Nn(0, ["ad_storage"])),
      (On[2] = new Nn(0, ["analytics_storage"])),
      (On[3] = new Nn(1, ["ad_storage", "analytics_storage"])),
      On);
  var Qn = function (a) {
    var b = this;
    this.type = a;
    this.j = [];
    sm(Pn[a].consentTypes, function () {
      (Mn[b.type] === 2 && !Pn[b.type].isConsentGranted()) || b.flush();
    });
  };
  Qn.prototype.flush = function () {
    for (var a = l(this.j), b = a.next(); !b.done; b = a.next()) {
      var c = b.value;
      c();
    }
    this.j = [];
  };
  var Rn = function (a, b) {
      Mn[a.type] !== 2 || Pn[a.type].isConsentGranted() ? b() : a.j.push(b);
    },
    Sn = new Map();
  function Tn(a) {
    Sn.has(a) || Sn.set(a, new Qn(a));
    return Sn.get(a);
  }
  function Un(a, b, c) {
    var d = Lm(Dk(a), !0);
    d && Vn.register(d, b, c);
  }
  function Wn(a, b, c, d) {
    var e = Lm(c, d.isGtmEvent);
    e && (ej && (d.deferrable = !0), Vn.push("event", [b, a], e, d));
  }
  function Xn(a, b, c, d) {
    var e = Lm(c, d.isGtmEvent);
    e && Vn.push("get", [a, b], e, d);
  }
  function Yn(a) {
    var b = Lm(Dk(a), !0),
      c;
    b ? (c = Zn(Vn, b).j) : (c = {});
    return c;
  }
  function $n(a, b) {
    var c = Lm(Dk(a), !0);
    if (c) {
      var d = Vn,
        e = Sc(b, null);
      Sc(Zn(d, c).j, e);
      Zn(d, c).j = e;
    }
  }
  var ao = function () {
      this.P = {};
      this.j = {};
      this.C = {};
      this.aa = null;
      this.K = {};
      this.H = !1;
      this.status = 1;
    },
    bo = function (a, b, c, d) {
      this.C = ob();
      this.j = b;
      this.args = c;
      this.messageContext = d;
      this.type = a;
    },
    co = function () {
      this.destinations = {};
      this.j = {};
      this.commands = [];
    },
    Zn = function (a, b) {
      var c = b.destinationId;
      T(136) && !uk && (c = Jk(c));
      return (a.destinations[c] = a.destinations[c] || new ao());
    },
    eo = function (a, b, c, d) {
      if (d.j) {
        var e = Zn(a, d.j),
          f = e.aa;
        if (f) {
          var g = d.j.id;
          T(136) && !uk && (g = Jk(g));
          var k = Sc(c, null),
            m = Sc(e.P[g], null),
            n = Sc(e.K, null),
            p = Sc(e.j, null),
            q = Sc(a.j, null),
            r = {};
          if (jk)
            try {
              r = Sc(zj, null);
            } catch (x) {
              U(72);
            }
          var u = d.j.prefix,
            v = function (x) {
              Jn(d.messageContext.eventId, u, x);
            },
            t = rn(
              qn(
                pn(
                  on(
                    nn(
                      ln(
                        kn(
                          mn(
                            jn(
                              hn(
                                gn(
                                  new fn(
                                    d.messageContext.eventId,
                                    d.messageContext.priorityId
                                  ),
                                  k
                                ),
                                m
                              ),
                              n
                            ),
                            p
                          ),
                          q
                        ),
                        r
                      ),
                      d.messageContext.eventMetadata
                    ),
                    function () {
                      if (v) {
                        var x = v;
                        v = void 0;
                        x("2");
                        if (d.messageContext.onSuccess)
                          d.messageContext.onSuccess();
                      }
                    }
                  ),
                  function () {
                    if (v) {
                      var x = v;
                      v = void 0;
                      x("3");
                      if (d.messageContext.onFailure)
                        d.messageContext.onFailure();
                    }
                  }
                ),
                !!d.messageContext.isGtmEvent
              )
            ),
            w = function () {
              try {
                Jn(d.messageContext.eventId, u, "1");
                var x = d.type,
                  y = d.j.id;
                if (kk && x === "config") {
                  var B,
                    C = (B = Lm(y)) == null ? void 0 : B.ids;
                  if (!(C && C.length > 1)) {
                    var D,
                      E = hc("google_tag_data", {});
                    E.td || (E.td = {});
                    D = E.td;
                    var K = Sc(t.K);
                    Sc(t.j, K);
                    var L = [],
                      Q;
                    for (Q in D)
                      D.hasOwnProperty(Q) && Zm(D[Q], K).length && L.push(Q);
                    L.length &&
                      (Xm(y, L), Wa("TAGGING", Tm[F.readyState] || 14));
                    D[y] = K;
                  }
                }
                f(d.j.id, b, d.C, t);
              } catch (I) {
                Jn(d.messageContext.eventId, u, "4");
              }
            };
          b === "gtag.get" ? w() : T(108) ? Rn(e.Ha, w) : w();
        }
      }
    };
  co.prototype.register = function (a, b, c) {
    var d = Zn(this, a);
    d.status !== 3 &&
      ((d.aa = b), (d.status = 3), T(108) && (d.Ha = Tn(c)), this.flush());
  };
  co.prototype.push = function (a, b, c, d) {
    c !== void 0 &&
      (Zn(this, c).status === 1 &&
        ((Zn(this, c).status = 2), this.push("require", [{}], c, {})),
      Zn(this, c).H && (d.deferrable = !1));
    this.commands.push(new bo(a, c, b, d));
    d.deferrable || this.flush();
  };
  co.prototype.flush = function (a) {
    for (
      var b = this, c = [], d = !1, e = {};
      this.commands.length;
      e = { yc: void 0, Xh: void 0 }
    ) {
      var f = this.commands[0],
        g = f.j;
      if (f.messageContext.deferrable)
        !g || Zn(this, g).H
          ? ((f.messageContext.deferrable = !1), this.commands.push(f))
          : c.push(f),
          this.commands.shift();
      else {
        switch (f.type) {
          case "require":
            if (Zn(this, g).status !== 3 && !a) {
              this.commands.push.apply(this.commands, c);
              return;
            }
            break;
          case "set":
            hb(f.args[0], function (u, v) {
              Sc(wb(u, v), b.j);
            });
            break;
          case "config":
            var k = Zn(this, g);
            e.yc = {};
            hb(
              f.args[0],
              (function (u) {
                return function (v, t) {
                  Sc(wb(v, t), u.yc);
                };
              })(e)
            );
            var m = !!e.yc[P.g.uc];
            delete e.yc[P.g.uc];
            var n = g.destinationId === g.id;
            m || (n ? (k.K = {}) : (k.P[g.id] = {}));
            (k.H && m) || eo(this, P.g.fa, e.yc, f);
            k.H = !0;
            n ? Sc(e.yc, k.K) : (Sc(e.yc, k.P[g.id]), U(70));
            d = !0;
            Il(e.yc, g.id);
            T(56) && (Cl = !0);
            break;
          case "event":
            e.Xh = {};
            hb(
              f.args[0],
              (function (u) {
                return function (v, t) {
                  Sc(wb(v, t), u.Xh);
                };
              })(e)
            );
            eo(this, f.args[1], e.Xh, f);
            var p = void 0;
            !f.j ||
              ((p = f.messageContext.eventMetadata) == null ? 0 : p.em_event) ||
              (Fl[f.j.id] = !0);
            T(56) && (Cl = !0);
            break;
          case "get":
            var q = {},
              r = ((q[P.g.Bb] = f.args[0]), (q[P.g.Qb] = f.args[1]), q);
            eo(this, P.g.ab, r, f);
            T(56) && (Cl = !0);
        }
        this.commands.shift();
        fo(this, f);
      }
    }
    this.commands.push.apply(this.commands, c);
    d && this.flush();
  };
  var fo = function (a, b) {
      if (b.type !== "require")
        if (b.j)
          for (var c = Zn(a, b.j).C[b.type] || [], d = 0; d < c.length; d++)
            c[d]();
        else
          for (var e in a.destinations)
            if (a.destinations.hasOwnProperty(e)) {
              var f = a.destinations[e];
              if (f && f.C)
                for (var g = f.C[b.type] || [], k = 0; k < g.length; k++)
                  g[k]();
            }
    },
    Vn = new co();
  var go = function (a, b) {
      var c = function () {};
      c.prototype = a.prototype;
      var d = new c();
      a.apply(d, Array.prototype.slice.call(arguments, 1));
      return d;
    },
    ho = function (a) {
      var b = a;
      return function () {
        if (b) {
          var c = b;
          b = null;
          c();
        }
      };
    };
  var io = function (a, b, c) {
      a.addEventListener && a.addEventListener(b, c, !1);
    },
    jo = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    };
  var ko, lo;
  a: {
    for (var mo = ["CLOSURE_FLAGS"], no = Aa, oo = 0; oo < mo.length; oo++)
      if (((no = no[mo[oo]]), no == null)) {
        lo = null;
        break a;
      }
    lo = no;
  }
  var po = lo && lo[610401301];
  ko = po != null ? po : !1;
  function qo() {
    var a = Aa.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b;
    }
    return "";
  }
  var ro,
    so = Aa.navigator;
  ro = so ? so.userAgentData || null : null;
  function to(a) {
    return ko
      ? ro
        ? ro.brands.some(function (b) {
            var c;
            return (c = b.brand) && c.indexOf(a) != -1;
          })
        : !1
      : !1;
  }
  function uo(a) {
    return qo().indexOf(a) != -1;
  }
  function vo() {
    return ko ? !!ro && ro.brands.length > 0 : !1;
  }
  function wo() {
    return vo() ? !1 : uo("Opera");
  }
  function xo() {
    return uo("Firefox") || uo("FxiOS");
  }
  function yo() {
    return vo()
      ? to("Chromium")
      : ((uo("Chrome") || uo("CriOS")) && !(vo() ? 0 : uo("Edge"))) ||
          uo("Silk");
  }
  var zo = function (a) {
    zo[" "](a);
    return a;
  };
  zo[" "] = function () {};
  var Ao = function (a, b, c, d) {
      for (var e = b, f = c.length; (e = a.indexOf(c, e)) >= 0 && e < d; ) {
        var g = a.charCodeAt(e - 1);
        if (g == 38 || g == 63) {
          var k = a.charCodeAt(e + f);
          if (!k || k == 61 || k == 38 || k == 35) return e;
        }
        e += f + 1;
      }
      return -1;
    },
    Bo = /#|$/,
    Co = function (a, b) {
      var c = a.search(Bo),
        d = Ao(a, 0, b, c);
      if (d < 0) return null;
      var e = a.indexOf("&", d);
      if (e < 0 || e > c) e = c;
      d += b.length + 1;
      return decodeURIComponent(
        a.slice(d, e !== -1 ? e : 0).replace(/\+/g, " ")
      );
    },
    Do = /[?&]($|#)/,
    Eo = function (a, b, c) {
      for (
        var d, e = a.search(Bo), f = 0, g, k = [];
        (g = Ao(a, f, b, e)) >= 0;

      )
        k.push(a.substring(f, g)),
          (f = Math.min(a.indexOf("&", g) + 1 || e, e));
      k.push(a.slice(f));
      d = k.join("").replace(Do, "$1");
      var m,
        n = c != null ? "=" + encodeURIComponent(String(c)) : "";
      var p = b + n;
      if (p) {
        var q,
          r = d.indexOf("#");
        r < 0 && (r = d.length);
        var u = d.indexOf("?"),
          v;
        u < 0 || u > r ? ((u = r), (v = "")) : (v = d.substring(u + 1, r));
        q = [d.slice(0, u), v, d.slice(r)];
        var t = q[1];
        q[1] = p ? (t ? t + "&" + p : p) : t;
        m = q[0] + (q[1] ? "?" + q[1] : "") + q[2];
      } else m = d;
      return m;
    };
  function Fo() {
    return ko ? !!ro && !!ro.platform : !1;
  }
  function Go() {
    return uo("iPhone") && !uo("iPod") && !uo("iPad");
  }
  function Ho() {
    Go() || uo("iPad") || uo("iPod");
  }
  wo();
  vo() || uo("Trident") || uo("MSIE");
  uo("Edge");
  !uo("Gecko") ||
    (qo().toLowerCase().indexOf("webkit") != -1 && !uo("Edge")) ||
    uo("Trident") ||
    uo("MSIE") ||
    uo("Edge");
  qo().toLowerCase().indexOf("webkit") != -1 && !uo("Edge") && uo("Mobile");
  Fo() || uo("Macintosh");
  Fo() || uo("Windows");
  (Fo() ? ro.platform === "Linux" : uo("Linux")) || Fo() || uo("CrOS");
  Fo() || uo("Android");
  Go();
  uo("iPad");
  uo("iPod");
  Ho();
  qo().toLowerCase().indexOf("kaios");
  var Io = function (a) {
      try {
        var b;
        if ((b = !!a && a.location.href != null))
          a: {
            try {
              zo(a.foo);
              b = !0;
              break a;
            } catch (c) {}
            b = !1;
          }
        return b;
      } catch (c) {
        return !1;
      }
    },
    Jo = function (a, b) {
      if (a)
        for (var c in a)
          Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a);
    },
    Ko = function (a) {
      if (A.top == A) return 0;
      if (a === void 0 ? 0 : a) {
        var b = A.location.ancestorOrigins;
        if (b) return b[b.length - 1] == A.location.origin ? 1 : 2;
      }
      return Io(A.top) ? 1 : 2;
    },
    Lo = function (a) {
      a = a === void 0 ? document : a;
      return a.createElement("img");
    },
    Mo = function () {
      for (var a = A, b = a; a && a != a.parent; )
        (a = a.parent), Io(a) && (b = a);
      return b;
    };
  function No(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    a.google_image_requests || (a.google_image_requests = []);
    var e = Lo(a.document);
    if (c) {
      var f = function () {
        if (c) {
          var g = a.google_image_requests,
            k = ac(g, e);
          k >= 0 && Array.prototype.splice.call(g, k, 1);
        }
        jo(e, "load", f);
        jo(e, "error", f);
      };
      io(e, "load", f);
      io(e, "error", f);
    }
    d && (e.attributionSrc = "");
    e.src = b;
    a.google_image_requests.push(e);
  }
  var Po = function (a) {
      var b;
      b = b === void 0 ? !1 : b;
      var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
      Jo(a, function (d, e) {
        if (d || d === 0) c += "&" + e + "=" + encodeURIComponent("" + d);
      });
      Oo(c, b);
    },
    Oo = function (a, b) {
      var c = window,
        d;
      b = b === void 0 ? !1 : b;
      d = d === void 0 ? !1 : d;
      if (c.fetch) {
        var e = {
          keepalive: !0,
          credentials: "include",
          redirect: "follow",
          method: "get",
          mode: "no-cors",
        };
        d &&
          ((e.mode = "cors"),
          "setAttributionReporting" in XMLHttpRequest.prototype
            ? (e.attributionReporting = {
                eventSourceEligible: "true",
                triggerEligible: "false",
              })
            : (e.headers = {
                "Attribution-Reporting-Eligible": "event-source",
              }));
        c.fetch(a, e);
      } else No(c, a, b === void 0 ? !1 : b, d === void 0 ? !1 : d);
    };
  var Qo = function () {
    this.P = this.P;
    this.C = this.C;
  };
  Qo.prototype.P = !1;
  Qo.prototype.dispose = function () {
    this.P || ((this.P = !0), this.Ha());
  };
  Qo.prototype[Symbol.dispose] = function () {
    this.dispose();
  };
  Qo.prototype.addOnDisposeCallback = function (a, b) {
    this.P
      ? b !== void 0
        ? a.call(b)
        : a()
      : (this.C || (this.C = []), b && (a = a.bind(b)), this.C.push(a));
  };
  Qo.prototype.Ha = function () {
    if (this.C) for (; this.C.length; ) this.C.shift()();
  };
  function Ro(a) {
    a.addtlConsent !== void 0 &&
      typeof a.addtlConsent !== "string" &&
      (a.addtlConsent = void 0);
    a.gdprApplies !== void 0 &&
      typeof a.gdprApplies !== "boolean" &&
      (a.gdprApplies = void 0);
    return (a.tcString !== void 0 && typeof a.tcString !== "string") ||
      (a.listenerId !== void 0 && typeof a.listenerId !== "number")
      ? 2
      : a.cmpStatus && a.cmpStatus !== "error"
      ? 0
      : 3;
  }
  var So = function (a, b) {
    b = b === void 0 ? {} : b;
    Qo.call(this);
    this.j = null;
    this.aa = {};
    this.kg = 0;
    this.K = null;
    this.H = a;
    var c;
    this.vc = (c = b.Jn) != null ? c : 500;
    var d;
    this.Fb = (d = b.ro) != null ? d : !1;
  };
  sa(So, Qo);
  So.prototype.Ha = function () {
    this.aa = {};
    this.K && (jo(this.H, "message", this.K), delete this.K);
    delete this.aa;
    delete this.H;
    delete this.j;
    Qo.prototype.Ha.call(this);
  };
  var Uo = function (a) {
    return typeof a.H.__tcfapi === "function" || To(a) != null;
  };
  So.prototype.addEventListener = function (a) {
    var b = this,
      c = { internalBlockOnErrors: this.Fb },
      d = ho(function () {
        return a(c);
      }),
      e = 0;
    this.vc !== -1 &&
      (e = setTimeout(function () {
        c.tcString = "tcunavailable";
        c.internalErrorState = 1;
        d();
      }, this.vc));
    var f = function (g, k) {
      clearTimeout(e);
      g
        ? ((c = g),
          (c.internalErrorState = Ro(c)),
          (c.internalBlockOnErrors = b.Fb),
          (k && c.internalErrorState === 0) ||
            ((c.tcString = "tcunavailable"), k || (c.internalErrorState = 3)))
        : ((c.tcString = "tcunavailable"), (c.internalErrorState = 3));
      a(c);
    };
    try {
      Vo(this, "addEventListener", f);
    } catch (g) {
      (c.tcString = "tcunavailable"),
        (c.internalErrorState = 3),
        e && (clearTimeout(e), (e = 0)),
        d();
    }
  };
  So.prototype.removeEventListener = function (a) {
    a && a.listenerId && Vo(this, "removeEventListener", null, a.listenerId);
  };
  var Xo = function (a, b, c) {
      var d;
      d = d === void 0 ? "755" : d;
      var e;
      a: {
        if (a.publisher && a.publisher.restrictions) {
          var f = a.publisher.restrictions[b];
          if (f !== void 0) {
            e = f[d === void 0 ? "755" : d];
            break a;
          }
        }
        e = void 0;
      }
      var g = e;
      if (g === 0) return !1;
      var k = c;
      c === 2
        ? ((k = 0), g === 2 && (k = 1))
        : c === 3 && ((k = 1), g === 1 && (k = 0));
      var m;
      if (k === 0)
        if (a.purpose && a.vendor) {
          var n = Wo(a.vendor.consents, d === void 0 ? "755" : d);
          m =
            n && b === "1" && a.purposeOneTreatment && a.publisherCC === "CH"
              ? !0
              : n && Wo(a.purpose.consents, b);
        } else m = !0;
      else
        m =
          k === 1
            ? a.purpose && a.vendor
              ? Wo(a.purpose.legitimateInterests, b) &&
                Wo(a.vendor.legitimateInterests, d === void 0 ? "755" : d)
              : !0
            : !0;
      return m;
    },
    Wo = function (a, b) {
      return !(!a || !a[b]);
    },
    Vo = function (a, b, c, d) {
      c || (c = function () {});
      var e = a.H;
      if (typeof e.__tcfapi === "function") {
        var f = e.__tcfapi;
        f(b, 2, c, d);
      } else if (To(a)) {
        Yo(a);
        var g = ++a.kg;
        a.aa[g] = c;
        if (a.j) {
          var k = {};
          a.j.postMessage(
            ((k.__tcfapiCall = {
              command: b,
              version: 2,
              callId: g,
              parameter: d,
            }),
            k),
            "*"
          );
        }
      } else c({}, !1);
    },
    To = function (a) {
      if (a.j) return a.j;
      var b;
      a: {
        for (var c = a.H, d = 0; d < 50; ++d) {
          var e;
          try {
            e = !(!c.frames || !c.frames.__tcfapiLocator);
          } catch (k) {
            e = !1;
          }
          if (e) {
            b = c;
            break a;
          }
          var f;
          b: {
            try {
              var g = c.parent;
              if (g && g != c) {
                f = g;
                break b;
              }
            } catch (k) {}
            f = null;
          }
          if (!(c = f)) break;
        }
        b = null;
      }
      a.j = b;
      return a.j;
    },
    Yo = function (a) {
      if (!a.K) {
        var b = function (c) {
          try {
            var d;
            d = (typeof c.data === "string" ? JSON.parse(c.data) : c.data)
              .__tcfapiReturn;
            a.aa[d.callId](d.returnValue, d.success);
          } catch (e) {}
        };
        a.K = b;
        io(a.H, "message", b);
      }
    },
    Zo = function (a) {
      if (a.gdprApplies === !1) return !0;
      a.internalErrorState === void 0 && (a.internalErrorState = Ro(a));
      return a.cmpStatus === "error" || a.internalErrorState !== 0
        ? a.internalBlockOnErrors
          ? (Po({ e: String(a.internalErrorState) }), !1)
          : !0
        : a.cmpStatus !== "loaded" ||
          (a.eventStatus !== "tcloaded" &&
            a.eventStatus !== "useractioncomplete")
        ? !1
        : !0;
    };
  var $o = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
  function ap() {
    var a = $i.tcf || {};
    return ($i.tcf = a);
  }
  var bp = function () {
    return new So(A, { Jn: -1 });
  };
  function cp() {
    var a = ap(),
      b = bp();
    Uo(b) && !lp() && !mp() && U(124);
    if (!a.active && Uo(b)) {
      lp() &&
        ((a.active = !0),
        (a.Cc = {}),
        (a.cmpId = 0),
        (a.tcfPolicyVersion = 0),
        (jl().active = !0),
        (a.tcString = "tcunavailable"));
      vm();
      try {
        b.addEventListener(function (c) {
          if (c.internalErrorState !== 0)
            np(a), wm([P.g.N, P.g.ya, P.g.O]), (jl().active = !0);
          else if (
            ((a.gdprApplies = c.gdprApplies),
            (a.cmpId = c.cmpId),
            (a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode),
            mp() && (a.active = !0),
            !op(c) || lp() || mp())
          ) {
            a.tcfPolicyVersion = c.tcfPolicyVersion;
            var d;
            if (c.gdprApplies === !1) {
              var e = {},
                f;
              for (f in $o) $o.hasOwnProperty(f) && (e[f] = !0);
              d = e;
              b.removeEventListener(c);
            } else if (op(c)) {
              var g = {},
                k;
              for (k in $o)
                if ($o.hasOwnProperty(k))
                  if (k === "1") {
                    var m,
                      n = c,
                      p = { Am: !0 };
                    p = p === void 0 ? {} : p;
                    m = Zo(n)
                      ? n.gdprApplies === !1
                        ? !0
                        : n.tcString === "tcunavailable"
                        ? !p.Dk
                        : (p.Dk || n.gdprApplies !== void 0 || p.Am) &&
                          (p.Dk ||
                            (typeof n.tcString === "string" &&
                              n.tcString.length))
                        ? Xo(n, "1", 0)
                        : !0
                      : !1;
                    g["1"] = m;
                  } else g[k] = Xo(c, k, $o[k]);
              d = g;
            }
            if (d) {
              a.tcString = c.tcString || "tcempty";
              a.Cc = d;
              var q = {},
                r = ((q[P.g.N] = a.Cc["1"] ? "granted" : "denied"), q);
              a.gdprApplies !== !0
                ? (wm([P.g.N, P.g.ya, P.g.O]), (jl().active = !0))
                : ((r[P.g.ya] = a.Cc["3"] && a.Cc["4"] ? "granted" : "denied"),
                  typeof a.tcfPolicyVersion === "number" &&
                  a.tcfPolicyVersion >= 4
                    ? (r[P.g.O] = a.Cc["1"] && a.Cc["7"] ? "granted" : "denied")
                    : wm([P.g.O]),
                  qm(
                    r,
                    { eventId: 0 },
                    {
                      gdprApplies: a ? a.gdprApplies : void 0,
                      tcString: pp() || "",
                    }
                  ));
            }
          } else wm([P.g.N, P.g.ya, P.g.O]);
        });
      } catch (c) {
        np(a), wm([P.g.N, P.g.ya, P.g.O]), (jl().active = !0);
      }
    }
  }
  function np(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
  }
  function op(a) {
    return (
      a.eventStatus === "tcloaded" ||
      a.eventStatus === "useractioncomplete" ||
      a.eventStatus === "cmpuishown"
    );
  }
  function lp() {
    return A.gtag_enable_tcf_support === !0;
  }
  function mp() {
    return ap().enableAdvertiserConsentMode === !0;
  }
  function pp() {
    var a = ap();
    if (a.active) return a.tcString;
  }
  function qp() {
    var a = ap();
    if (a.active && a.gdprApplies !== void 0) return a.gdprApplies ? "1" : "0";
  }
  function rp(a) {
    if (!$o.hasOwnProperty(String(a))) return !0;
    var b = ap();
    return b.active && b.Cc ? !!b.Cc[String(a)] : !0;
  }
  var sp = [P.g.N, P.g.U, P.g.O, P.g.ya],
    tp = {},
    up = ((tp[P.g.N] = 1), (tp[P.g.U] = 2), tp);
  function vp(a) {
    if (a === void 0) return 0;
    switch (W(a, P.g.qa)) {
      case void 0:
        return 1;
      case !1:
        return 3;
      default:
        return 2;
    }
  }
  function wp(a) {
    if (Ml() === "US-CO" && dc.globalPrivacyControl === !0) return !1;
    var b = vp(a);
    if (b === 3) return !1;
    switch (sl(P.g.ya)) {
      case 1:
      case 3:
        return !0;
      case 2:
        return !1;
      case 4:
        return b === 2;
      case 0:
        return !0;
      default:
        return !1;
    }
  }
  function xp() {
    return vl() || !rl(P.g.N) || !rl(P.g.U);
  }
  function yp() {
    var a = {},
      b;
    for (b in up) up.hasOwnProperty(b) && (a[up[b]] = sl(b));
    return "G1" + Ee(a[1] || 0) + Ee(a[2] || 0);
  }
  var zp = {},
    Ap =
      ((zp[P.g.N] = 0), (zp[P.g.U] = 1), (zp[P.g.O] = 2), (zp[P.g.ya] = 3), zp);
  function Bp(a) {
    switch (a) {
      case void 0:
        return 1;
      case !0:
        return 3;
      case !1:
        return 2;
      default:
        return 0;
    }
  }
  function Cp(a) {
    for (var b = "1", c = 0; c < sp.length; c++) {
      var d = b,
        e,
        f = sp[c],
        g = ql.delegatedConsentTypes[f];
      e = g === void 0 ? 0 : Ap.hasOwnProperty(g) ? 12 | Ap[g] : 8;
      var k = jl();
      k.accessedAny = !0;
      var m = k.entries[f] || {};
      e = (e << 2) | Bp(m.implicit);
      b =
        d +
        ("" +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            e
          ] +
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
            (Bp(m.declare) << 4) | (Bp(m.default) << 2) | Bp(m.update)
          ]);
    }
    var n = b,
      p = (Ml() === "US-CO" && dc.globalPrivacyControl === !0 ? 1 : 0) << 3,
      q = (vl() ? 1 : 0) << 2,
      r = vp(a);
    b =
      n +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        p | q | r
      ];
    return (b +=
      "" +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (ql.containerScopedDefaults.ad_storage << 4) |
          (ql.containerScopedDefaults.analytics_storage << 2) |
          ql.containerScopedDefaults.ad_user_data
      ] +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        ((ql.usedContainerScopedDefaults ? 1 : 0) << 2) |
          ql.containerScopedDefaults.ad_personalization
      ]);
  }
  function Dp() {
    if (!rl(P.g.O)) return "-";
    for (
      var a = Object.keys(Mh), b = tl(a), c = "", d = l(a), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value;
      b[f] && (c += Mh[f]);
    }
    (ql.usedCorePlatformServices ? ql.selectedAllCorePlatformServices : 1) &&
      (c += "o");
    return c || "-";
  }
  function Ep() {
    return Ol() || ((lp() || mp()) && qp() === "1") ? "1" : "0";
  }
  function Fp() {
    return (Ol() ? !0 : !(!lp() && !mp()) && qp() === "1") || !rl(P.g.O);
  }
  function Gp() {
    var a = "0",
      b = "0",
      c;
    var d = ap();
    c = d.active ? d.cmpId : void 0;
    typeof c === "number" &&
      c >= 0 &&
      c <= 4095 &&
      ((a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        (c >> 6) & 63
      ]),
      (b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        c & 63
      ]));
    var e = "0",
      f;
    var g = ap();
    f = g.active ? g.tcfPolicyVersion : void 0;
    typeof f === "number" &&
      f >= 0 &&
      f <= 63 &&
      (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[
        f
      ]);
    var k = 0;
    Ol() && (k |= 1);
    qp() === "1" && (k |= 2);
    lp() && (k |= 4);
    var m;
    var n = ap();
    m =
      n.enableAdvertiserConsentMode !== void 0
        ? n.enableAdvertiserConsentMode
          ? "1"
          : "0"
        : void 0;
    m === "1" && (k |= 8);
    jl().waitPeriodTimedOut && (k |= 16);
    return (
      "1" +
      a +
      b +
      e +
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_"[k]
    );
  }
  function Hp() {
    return Ml() === "US-CO";
  }
  function Ip() {
    var a = !1;
    return a;
  }
  var Jp = { UA: 1, AW: 2, DC: 3, G: 4, GF: 5, GT: 12, GTM: 14, HA: 6, MC: 7 };
  function Kp(a) {
    a = a === void 0 ? {} : a;
    var b = Of.ctid.split("-")[0].toUpperCase(),
      c = {
        ctid: Of.ctid,
        xn: Zi.Oe,
        zn: Zi.Dh,
        bn: tk.Le ? 2 : 1,
        En: a.Ci,
        Ve: Of.canonicalContainerId,
      };
    c.Ve !== a.xa && (c.xa = a.xa);
    var d = Gk();
    c.on = d ? d.canonicalContainerId : void 0;
    fj ? ((c.zg = Jp[b]), c.zg || (c.zg = 0)) : (c.zg = jj ? 13 : 10);
    tj.C
      ? ((c.xg = 0), (c.bm = 2))
      : hj
      ? (c.xg = 1)
      : Ip()
      ? (c.xg = 2)
      : (c.xg = 3);
    var e = {};
    e[6] = uk;
    tj.j === 2 ? (e[7] = !0) : tj.j === 1 && (e[2] = !0);
    if (gc) {
      var f = Pj(Vj(gc), "host");
      f && (e[8] = f.match(/^(www\.)?googletagmanager\.com$/) === null);
    }
    c.gm = e;
    var g = a.mg,
      k;
    var m = c.zg,
      n = c.xg;
    m === void 0
      ? (k = "")
      : (n || (n = 0), (k = "" + Ge(1, 1) + De((m << 2) | n)));
    var p = c.bm,
      q = "4" + k + (p ? "" + Ge(2, 1) + De(p) : ""),
      r,
      u = c.zn;
    r = u && Fe.test(u) ? "" + Ge(3, 2) + u : "";
    var v,
      t = c.xn;
    v = t ? "" + Ge(4, 1) + De(t) : "";
    var w;
    var x = c.ctid;
    if (x && g) {
      var y = x.split("-"),
        B = y[0].toUpperCase();
      if (B !== "GTM" && B !== "OPT") w = "";
      else {
        var C = y[1];
        w = "" + Ge(5, 3) + De(1 + C.length) + (c.bn || 0) + C;
      }
    } else w = "";
    var D = c.En,
      E = c.Ve,
      K = c.xa,
      L = c.zo,
      Q =
        q +
        r +
        v +
        w +
        (D ? "" + Ge(6, 1) + De(D) : "") +
        (E ? "" + Ge(7, 3) + De(E.length) + E : "") +
        (K ? "" + Ge(8, 3) + De(K.length) + K : "") +
        (L ? "" + Ge(9, 3) + De(L.length) + L : ""),
      I;
    var V = c.gm;
    V = V === void 0 ? {} : V;
    for (
      var da = [], ea = l(Object.keys(V)), aa = ea.next();
      !aa.done;
      aa = ea.next()
    ) {
      var O = aa.value;
      da[Number(O)] = V[O];
    }
    if (da.length) {
      var oa = Ge(10, 3),
        ma;
      if (da.length === 0) ma = De(0);
      else {
        for (var na = [], Ga = 0, Sa = !1, xa = 0; xa < da.length; xa++) {
          Sa = !0;
          var Ua = xa % 6;
          da[xa] && (Ga |= 1 << Ua);
          Ua === 5 && (na.push(De(Ga)), (Ga = 0), (Sa = !1));
        }
        Sa && na.push(De(Ga));
        ma = na.join("");
      }
      var gb = ma;
      I = "" + oa + De(gb.length) + gb;
    } else I = "";
    var Qc = c.on;
    return Q + I + (Qc ? "" + Ge(11, 3) + De(Qc.length) + Qc : "");
  }
  function Lp(a) {
    var b = 1,
      c,
      d,
      e;
    if (a)
      for (b = 0, d = a.length - 1; d >= 0; d--)
        (e = a.charCodeAt(d)),
          (b = ((b << 6) & 268435455) + e + (e << 14)),
          (c = b & 266338304),
          (b = c !== 0 ? b ^ (c >> 21) : b);
    return b;
  }
  function Mp(a) {
    return a.origin !== "null";
  }
  function Np(a, b, c, d) {
    var e;
    if (Op(d)) {
      for (
        var f = [], g = String(b || Pp()).split(";"), k = 0;
        k < g.length;
        k++
      ) {
        var m = g[k].split("="),
          n = m[0].replace(/^\s*|\s*$/g, "");
        if (n && n === a) {
          var p = m
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          p && c && (p = decodeURIComponent(p));
          f.push(p);
        }
      }
      e = f;
    } else e = [];
    return e;
  }
  function Qp(a, b, c, d, e) {
    if (Op(e)) {
      var f = Rp(a, d, e);
      if (f.length === 1) return f[0].id;
      if (f.length !== 0) {
        f = Sp(
          f,
          function (g) {
            return g.mm;
          },
          b
        );
        if (f.length === 1) return f[0].id;
        f = Sp(
          f,
          function (g) {
            return g.qn;
          },
          c
        );
        return f[0] ? f[0].id : void 0;
      }
    }
  }
  function Tp(a, b, c, d) {
    var e = Pp(),
      f = window;
    Mp(f) && (f.document.cookie = a);
    var g = Pp();
    return e !== g || (c !== void 0 && Np(b, g, !1, d).indexOf(c) >= 0);
  }
  function Up(a, b, c, d) {
    function e(w, x, y) {
      if (y == null) return delete k[x], w;
      k[x] = y;
      return w + "; " + x + "=" + y;
    }
    function f(w, x) {
      if (x == null) return w;
      k[x] = !0;
      return w + "; " + x;
    }
    if (!Op(c.Mb)) return 2;
    var g;
    b == null
      ? (g = a + "=deleted; expires=" + new Date(0).toUTCString())
      : (c.encode && (b = encodeURIComponent(b)),
        (b = Vp(b)),
        (g = a + "=" + b));
    var k = {};
    g = e(g, "path", c.path);
    var m;
    c.expires instanceof Date
      ? (m = c.expires.toUTCString())
      : c.expires != null && (m = "" + c.expires);
    g = e(g, "expires", m);
    g = e(g, "max-age", c.hn);
    g = e(g, "samesite", c.An);
    c.secure && (g = f(g, "secure"));
    var n = c.domain;
    if (n && n.toLowerCase() === "auto") {
      for (var p = Wp(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var v = p[u] !== "none" ? p[u] : void 0,
          t = e(g, "domain", v);
        t = f(t, c.flags);
        try {
          d && d(a, k);
        } catch (w) {
          q = w;
          continue;
        }
        r = !0;
        if (!Xp(v, c.path) && Tp(t, a, b, c.Mb)) return 0;
      }
      if (q && !r) throw q;
      return 1;
    }
    n && n.toLowerCase() !== "none" && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, k);
    return Xp(n, c.path) ? 1 : Tp(g, a, b, c.Mb) ? 0 : 1;
  }
  function Yp(a, b, c) {
    c.path == null && (c.path = "/");
    c.domain || (c.domain = "auto");
    return Up(a, b, c);
  }
  function Sp(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var k = a[g],
        m = b(k);
      m === c
        ? d.push(k)
        : f === void 0 || m < f
        ? ((e = [k]), (f = m))
        : m === f && e.push(k);
    }
    return d.length > 0 ? d : e;
  }
  function Rp(a, b, c) {
    for (var d = [], e = Np(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."),
        k = g.shift();
      if (!b || !k || b.indexOf(k) !== -1) {
        var m = g.shift();
        if (m) {
          var n = m.split("-");
          d.push({
            id: g.join("."),
            mm: Number(n[0]) || 1,
            qn: Number(n[1]) || 1,
          });
        }
      }
    }
    return d;
  }
  function Vp(a) {
    a && a.length > 1200 && (a = a.substring(0, 1200));
    return a;
  }
  var Zp = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
    $p = /(^|\.)doubleclick\.net$/i;
  function Xp(a, b) {
    return (
      a !== void 0 &&
      ($p.test(window.document.location.hostname) || (b === "/" && Zp.test(a)))
    );
  }
  function aq(a) {
    if (!a) return 1;
    var b = a;
    li(7) && a === "none" && (b = window.document.location.hostname);
    b = b.indexOf(".") === 0 ? b.substring(1) : b;
    return b.split(".").length;
  }
  function bq(a) {
    if (!a || a === "/") return 1;
    a[0] !== "/" && (a = "/" + a);
    a[a.length - 1] !== "/" && (a += "/");
    return a.split("/").length - 1;
  }
  function cq(a, b) {
    var c = "" + aq(a),
      d = bq(b);
    d > 1 && (c += "-" + d);
    return c;
  }
  var Pp = function () {
      return Mp(window) ? window.document.cookie : "";
    },
    Op = function (a) {
      return a && li(8)
        ? (Array.isArray(a) ? a : [a]).every(function (b) {
            return ul(b) && rl(b);
          })
        : !0;
    },
    Wp = function () {
      var a = [],
        b = window.document.location.hostname.split(".");
      if (b.length === 4) {
        var c = b[b.length - 1];
        if (Number(c).toString() === c) return ["none"];
      }
      for (var d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
      var e = window.document.location.hostname;
      $p.test(e) || Zp.test(e) || a.push("none");
      return a;
    };
  function dq(a) {
    var b = Math.round(Math.random() * 2147483647);
    return a ? String(b ^ (Lp(a) & 2147483647)) : String(b);
  }
  function eq(a) {
    return [dq(a), Math.round(ob() / 1e3)].join(".");
  }
  function fq(a, b, c, d, e) {
    var f = aq(b);
    return Qp(a, f, bq(c), d, e);
  }
  function gq(a, b, c, d) {
    return [b, cq(c, d), a].join(".");
  }
  function hq(a, b, c, d) {
    var e,
      f = Number(a.Lb != null ? a.Lb : void 0);
    f !== 0 && (e = new Date((b || ob()) + 1e3 * (f || 7776e3)));
    return {
      path: a.path,
      domain: a.domain,
      flags: a.flags,
      encode: !!c,
      expires: e,
      Mb: d,
    };
  }
  var iq;
  function jq() {
    function a(g) {
      c(g.target || g.srcElement || {});
    }
    function b(g) {
      d(g.target || g.srcElement || {});
    }
    var c = kq,
      d = lq,
      e = mq();
    if (!e.init) {
      rc(F, "mousedown", a);
      rc(F, "keyup", a);
      rc(F, "submit", b);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        d(this);
        f.call(this);
      };
      e.init = !0;
    }
  }
  function nq(a, b, c, d, e) {
    var f = {
      callback: a,
      domains: b,
      fragment: c === 2,
      placement: c,
      forms: d,
      sameHost: e,
    };
    mq().decorators.push(f);
  }
  function oq(a, b, c) {
    for (var d = mq().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g = d[f],
        k;
      if ((k = !c || g.forms))
        a: {
          var m = g.domains,
            n = a,
            p = !!g.sameHost;
          if (m && (p || n !== F.location.hostname))
            for (var q = 0; q < m.length; q++)
              if (m[q] instanceof RegExp) {
                if (m[q].test(n)) {
                  k = !0;
                  break a;
                }
              } else if (n.indexOf(m[q]) >= 0 || (p && m[q].indexOf(n) >= 0)) {
                k = !0;
                break a;
              }
          k = !1;
        }
      if (k) {
        var r = g.placement;
        r === void 0 && (r = g.fragment ? 2 : 1);
        r === b && rb(e, g.callback());
      }
    }
    return e;
  }
  function mq() {
    var a = hc("google_tag_data", {}),
      b = a.gl;
    (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
    return b;
  }
  var pq = /(.*?)\*(.*?)\*(.*)/,
    qq = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    rq = /^(?:www\.|m\.|amp\.)+/,
    sq = /([^?#]+)(\?[^#]*)?(#.*)?/;
  function tq(a) {
    var b = sq.exec(a);
    if (b) return { oi: b[1], query: b[2], fragment: b[3] };
  }
  function uq(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
  }
  function vq(a, b) {
    var c = [
        dc.userAgent,
        new Date().getTimezoneOffset(),
        dc.userLanguage || dc.language,
        Math.floor(ob() / 60 / 1e3) - (b === void 0 ? 0 : b),
        a,
      ].join("*"),
      d;
    if (!(d = iq)) {
      for (var e = Array(256), f = 0; f < 256; f++) {
        for (var g = f, k = 0; k < 8; k++)
          g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
        e[f] = g;
      }
      d = e;
    }
    iq = d;
    for (var m = 4294967295, n = 0; n < c.length; n++)
      m = (m >>> 8) ^ iq[(m ^ c.charCodeAt(n)) & 255];
    return ((m ^ -1) >>> 0).toString(36);
  }
  function wq(a) {
    return function (b) {
      var c = Vj(A.location.href),
        d = c.search.replace("?", ""),
        e = Oj(d, "_gl", !1, !0) || "";
      b.query = xq(e) || {};
      var f = Pj(c, "fragment"),
        g;
      var k = -1;
      if (tb(f, "_gl=")) k = 4;
      else {
        var m = f.indexOf("&_gl=");
        m > 0 && (k = m + 3 + 2);
      }
      if (k < 0) g = void 0;
      else {
        var n = f.indexOf("&", k);
        g = n < 0 ? f.substring(k) : f.substring(k, n);
      }
      b.fragment = xq(g || "") || {};
      a && yq(c, d, f);
    };
  }
  function zq(a, b) {
    var c = uq(a).exec(b),
      d = b;
    if (c) {
      var e = c[2],
        f = c[4];
      d = c[1];
      f && (d = d + e + f);
    }
    return d;
  }
  function yq(a, b, c) {
    function d(g, k) {
      var m = zq("_gl", g);
      m.length && (m = k + m);
      return m;
    }
    if (cc && cc.replaceState) {
      var e = uq("_gl");
      if (e.test(b) || e.test(c)) {
        var f = Pj(a, "path");
        b = d(b, "?");
        c = d(c, "#");
        cc.replaceState({}, "", "" + f + b + c);
      }
    }
  }
  function Aq(a, b) {
    var c = wq(!!b),
      d = mq();
    d.data || ((d.data = { query: {}, fragment: {} }), c(d.data));
    var e = {},
      f = d.data;
    f && (rb(e, f.query), a && rb(e, f.fragment));
    return e;
  }
  var xq = function (a) {
    try {
      var b = Bq(a, 3);
      if (b !== void 0) {
        for (
          var c = {}, d = b ? b.split("*") : [], e = 0;
          e + 1 < d.length;
          e += 2
        ) {
          var f = d[e],
            g = Ta(d[e + 1]);
          c[f] = g;
        }
        Wa("TAGGING", 6);
        return c;
      }
    } catch (k) {
      Wa("TAGGING", 8);
    }
  };
  function Bq(a, b) {
    if (a) {
      var c;
      a: {
        for (var d = a, e = 0; e < 3; ++e) {
          var f = pq.exec(d);
          if (f) {
            c = f;
            break a;
          }
          d = decodeURIComponent(d);
        }
        c = void 0;
      }
      var g = c;
      if (g && g[1] === "1") {
        var k = g[3],
          m;
        a: {
          for (var n = g[2], p = 0; p < b; ++p)
            if (n === vq(k, p)) {
              m = !0;
              break a;
            }
          m = !1;
        }
        if (m) return k;
        Wa("TAGGING", 7);
      }
    }
  }
  function Cq(a, b, c, d, e) {
    function f(p) {
      p = zq(a, p);
      var q = p.charAt(p.length - 1);
      p && q !== "&" && (p += "&");
      return p + n;
    }
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var g = tq(c);
    if (!g) return "";
    var k = g.query || "",
      m = g.fragment || "",
      n = a + "=" + b;
    d
      ? (m.substring(1).length !== 0 && e) || (m = "#" + f(m.substring(1)))
      : (k = "?" + f(k.substring(1)));
    return "" + g.oi + k + m;
  }
  function Dq(a, b) {
    function c(n, p, q) {
      var r;
      a: {
        for (var u in n)
          if (n.hasOwnProperty(u)) {
            r = !0;
            break a;
          }
        r = !1;
      }
      if (r) {
        var v,
          t = [],
          w;
        for (w in n)
          if (n.hasOwnProperty(w)) {
            var x = n[w];
            x !== void 0 &&
              x === x &&
              x !== null &&
              x.toString() !== "[object Object]" &&
              (t.push(w), t.push(Ra(String(x))));
          }
        var y = t.join("*");
        v = ["1", vq(y), y].join("*");
        d
          ? (li(3) || li(1) || !p) && Eq("_gl", v, a, p, q)
          : Fq("_gl", v, a, p, q);
      }
    }
    var d = (a.tagName || "").toUpperCase() === "FORM",
      e = oq(b, 1, d),
      f = oq(b, 2, d),
      g = oq(b, 4, d),
      k = oq(b, 3, d);
    c(e, !1, !1);
    c(f, !0, !1);
    li(1) && c(g, !0, !0);
    for (var m in k) k.hasOwnProperty(m) && Gq(m, k[m], a);
  }
  function Gq(a, b, c) {
    c.tagName.toLowerCase() === "a"
      ? Fq(a, b, c)
      : c.tagName.toLowerCase() === "form" && Eq(a, b, c);
  }
  function Fq(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    var f;
    if ((f = c.href)) {
      var g;
      if (!(g = !li(5) || d)) {
        var k = A.location.href,
          m = tq(c.href),
          n = tq(k);
        g = !(m && n && m.oi === n.oi && m.query === n.query && m.fragment);
      }
      f = g;
    }
    if (f) {
      var p = Cq(a, b, c.href, d, e);
      Ub.test(p) && (c.href = p);
    }
  }
  function Eq(a, b, c, d, e) {
    d = d === void 0 ? !1 : d;
    e = e === void 0 ? !1 : e;
    if (c && c.action) {
      var f = (c.method || "").toLowerCase();
      if (f !== "get" || d) {
        if (f === "get" || f === "post") {
          var g = Cq(a, b, c.action, d, e);
          Ub.test(g) && (c.action = g);
        }
      } else {
        for (var k = c.childNodes || [], m = !1, n = 0; n < k.length; n++) {
          var p = k[n];
          if (p.name === a) {
            p.setAttribute("value", b);
            m = !0;
            break;
          }
        }
        if (!m) {
          var q = F.createElement("input");
          q.setAttribute("type", "hidden");
          q.setAttribute("name", a);
          q.setAttribute("value", b);
          c.appendChild(q);
        }
      }
    }
  }
  function kq(a) {
    try {
      var b;
      a: {
        for (var c = a, d = 100; c && d > 0; ) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a;
          }
          c = c.parentNode;
          d--;
        }
        b = null;
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        (f !== "http:" && f !== "https:") || Dq(e, e.hostname);
      }
    } catch (g) {}
  }
  function lq(a) {
    try {
      if (a.action) {
        var b = Pj(Vj(a.action), "host");
        Dq(a, b);
      }
    } catch (c) {}
  }
  function Hq(a, b, c, d) {
    jq();
    var e = c === "fragment" ? 2 : 1;
    d = !!d;
    nq(a, b, e, d, !1);
    e === 2 && Wa("TAGGING", 23);
    d && Wa("TAGGING", 24);
  }
  function Iq(a, b) {
    jq();
    nq(a, [Rj(A.location, "host", !0)], b, !0, !0);
  }
  function Jq() {
    var a = F.location.hostname,
      b = qq.exec(F.referrer);
    if (!b) return !1;
    var c = b[2],
      d = b[1],
      e = "";
    if (c) {
      var f = c.split("/"),
        g = f[1];
      e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
    } else if (d) {
      if (d.indexOf("xn--") === 0) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-");
    }
    var k = a.replace(rq, ""),
      m = e.replace(rq, "");
    return k === m || ub(k, "." + m);
  }
  function Kq(a, b) {
    return a === !1 ? !1 : a || b || Jq();
  }
  var Lq = ["1"],
    Mq = {},
    Nq = {};
  function Oq(a, b) {
    b = b === void 0 ? !0 : b;
    var c = Pq(a.prefix);
    if (!Mq[c])
      if (Qq(c, a.path, a.domain)) {
        var d = Nq[Pq(a.prefix)];
        b && Rq(a, d ? d.id : void 0, d ? d.ii : void 0);
      } else {
        var e = Wj("auiddc");
        if (e) Wa("TAGGING", 17), (Mq[c] = e);
        else if (b) {
          var f = Pq(a.prefix),
            g = eq();
          Sq(f, g, a);
          Qq(c, a.path, a.domain);
        }
      }
  }
  function Rq(a, b, c) {
    var d = Pq(a.prefix),
      e = Mq[d];
    if (e) {
      var f = e.split(".");
      if (f.length === 2) {
        var g = Number(f[1]) || 0;
        if (g) {
          var k = e;
          b && (k = e + "." + b + "." + (c ? c : Math.floor(ob() / 1e3)));
          Sq(d, k, a, g * 1e3);
        }
      }
    }
  }
  function Sq(a, b, c, d) {
    var e = gq(b, "1", c.domain, c.path),
      f = hq(c, d);
    f.Mb = Tq();
    Yp(a, e, f);
  }
  function Qq(a, b, c) {
    var d = fq(a, b, c, Lq, Tq());
    if (!d) return !1;
    Uq(a, d);
    return !0;
  }
  function Uq(a, b) {
    var c = b.split(".");
    c.length === 5
      ? ((Mq[a] = c.slice(0, 2).join(".")),
        (Nq[a] = { id: c.slice(2, 4).join("."), ii: Number(c[4]) || 0 }))
      : c.length === 3
      ? (Nq[a] = { id: c.slice(0, 2).join("."), ii: Number(c[2]) || 0 })
      : (Mq[a] = b);
  }
  function Pq(a) {
    return (a || "_gcl") + "_au";
  }
  function Vq(a) {
    function b() {
      rl(c) && a();
    }
    var c = Tq();
    yl(function () {
      b();
      rl(c) || zl(b, c);
    }, c);
  }
  function Wq(a) {
    var b = Aq(!0),
      c = Pq(a.prefix);
    Vq(function () {
      var d = b[c];
      if (d) {
        Uq(c, d);
        var e = Number(Mq[c].split(".")[1]) * 1e3;
        if (e) {
          Wa("TAGGING", 16);
          var f = hq(a, e);
          f.Mb = Tq();
          var g = gq(d, "1", a.domain, a.path);
          Yp(c, g, f);
        }
      }
    });
  }
  function Xq(a, b, c, d, e) {
    e = e || {};
    var f = function () {
      var g = {},
        k = fq(a, e.path, e.domain, Lq, Tq());
      k && (g[a] = k);
      return g;
    };
    Vq(function () {
      Hq(f, b, c, d);
    });
  }
  function Tq() {
    return ["ad_storage", "ad_user_data"];
  }
  var Yq = {},
    Zq =
      ((Yq.k = { ba: /^[\w-]+$/ }),
      (Yq.b = { ba: /^[\w-]+$/, yi: !0 }),
      (Yq.i = { ba: /^[1-9]\d*$/ }),
      (Yq.u = { ba: /^[1-9]\d*$/ }),
      Yq);
  var $q = {},
    cr =
      (($q[5] = { al: { 2: ar }, Oh: ["k", "i", "b", "u"] }),
      ($q[4] = { al: { 2: ar, GCL: br }, Oh: ["k", "i", "b"] }),
      $q);
  function dr(a) {
    var b = cr[5];
    if (b) {
      var c = a.split(".")[0];
      if (c) {
        var d = b.al[c];
        if (d) return d(a, 5);
      }
    }
  }
  function ar(a, b) {
    var c = a.split(".");
    if (c.length === 3) {
      var d = {},
        e = cr[b];
      if (e) {
        for (
          var f = e.Oh, g = l(c[2].split("$")), k = g.next();
          !k.done;
          k = g.next()
        ) {
          var m = k.value,
            n = m[0];
          if (f.indexOf(n) !== -1)
            try {
              var p = decodeURIComponent(m.substring(1)),
                q = Zq[n];
              q && (q.yi ? ((d[n] = d[n] || []), d[n].push(p)) : (d[n] = p));
            } catch (r) {}
        }
        return d;
      }
    }
  }
  function er(a, b) {
    var c = cr[5];
    if (c) {
      for (var d = [], e = l(c.Oh), f = e.next(); !f.done; f = e.next()) {
        var g = f.value,
          k = Zq[g];
        if (k) {
          var m = a[g];
          if (m !== void 0)
            if (k.yi && Array.isArray(m))
              for (var n = l(m), p = n.next(); !p.done; p = n.next())
                d.push(encodeURIComponent("" + g + p.value));
            else d.push(encodeURIComponent("" + g + m));
        }
      }
      return ["2", b || "1", d.join("$")].join(".");
    }
  }
  function br(a) {
    var b = a.split(".");
    b.shift();
    var c = b.shift(),
      d = b.shift(),
      e = {};
    return (e.k = d), (e.i = c), (e.b = b), e;
  }
  var fr = new Map([
    [5, "ad_storage"],
    [4, ["ad_storage", "ad_user_data"]],
  ]);
  function gr(a) {
    if (cr[5]) {
      for (
        var b = [],
          c = Np(a, void 0, void 0, fr.get(5)),
          d = l(c),
          e = d.next();
        !e.done;
        e = d.next()
      ) {
        var f = dr(e.value);
        f && (hr(f), b.push(f));
      }
      return b;
    }
  }
  function ir(a, b, c, d) {
    c = c || {};
    var e = cq(c.domain, c.path),
      f = er(b, e);
    if (f) {
      var g = hq(c, d, void 0, fr.get(5));
      Yp(a, f, g);
    }
  }
  function jr(a, b) {
    var c = b.ba;
    return typeof c === "function" ? c(a) : c.test(a);
  }
  function hr(a) {
    for (
      var b = l(Object.keys(a)), c = b.next(), d = {};
      !c.done;
      d = { Xe: void 0 }, c = b.next()
    ) {
      var e = c.value,
        f = a[e];
      d.Xe = Zq[e];
      d.Xe
        ? d.Xe.yi
          ? (a[e] = Array.isArray(f)
              ? f.filter(
                  (function (g) {
                    return function (k) {
                      return jr(k, g.Xe);
                    };
                  })(d)
                )
              : void 0)
          : (typeof f === "string" && jr(f, d.Xe)) || (a[e] = void 0)
        : (a[e] = void 0);
    }
  }
  function kr(a) {
    for (
      var b = [],
        c = F.cookie.split(";"),
        d = new RegExp(
          "^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"
        ),
        e = 0;
      e < c.length;
      e++
    ) {
      var f = c[e].match(d);
      f &&
        b.push({
          Ii: f[1],
          value: f[2],
          timestamp: Number(f[2].split(".")[1]) || 0,
        });
    }
    b.sort(function (g, k) {
      return k.timestamp - g.timestamp;
    });
    return b;
  }
  function lr(a, b) {
    var c = kr(a),
      d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (
        !(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) &&
        Number(f[1])
      ) {
        d[c[e].Ii] || (d[c[e].Ii] = []);
        var g = { version: f[0], timestamp: Number(f[1]) * 1e3, W: f[2] };
        b && f.length > 3 && (g.labels = f.slice(3));
        d[c[e].Ii].push(g);
      }
    }
    return d;
  }
  function mr() {
    var a = String,
      b = A.location.hostname,
      c = A.location.pathname,
      d = (b = Cb(b));
    d.split(".").length > 2 &&
      (d = d.replace(/^(www[0-9]*|web|ftp|wap|home|m|w|amp|mobile)\./, ""));
    b = d;
    c = Cb(c);
    var e = c.split(";")[0];
    e = e.replace(/\/(ar|slp|web|index)?\/?$/, "");
    return a(Lp(("" + b + e).toLowerCase()));
  }
  var nr = ["ad_storage", "ad_user_data"];
  function or() {
    var a = pr();
    if (a.error !== 0) return a;
    if (!a.value) return { error: 2 };
    if (!("gclid" in a.value)) return { value: void 0, error: 15 };
    var b = a.value.gclid;
    return b === null || b === void 0 || b === ""
      ? { value: void 0, error: 11 }
      : { value: b, error: 0 };
  }
  function pr(a) {
    a = a === void 0 ? !0 : a;
    if (!rl(nr)) return { error: 3 };
    try {
      if (!A.localStorage) return { error: 1 };
    } catch (f) {
      return { error: 14 };
    }
    var b = { schema: "gcl", version: 1 },
      c = void 0;
    try {
      c = A.localStorage.getItem("_gcl_ls");
    } catch (f) {
      return { error: 13 };
    }
    try {
      if (c) {
        var d = JSON.parse(c);
        if (d && typeof d === "object") b = d;
        else return { error: 12 };
      }
    } catch (f) {
      return { error: 8 };
    }
    if (b.schema !== "gcl") return { error: 4 };
    if (b.version !== 1) return { error: 5 };
    try {
      var e = qr(b);
      a && e && rr({ value: b, error: 0 });
    } catch (f) {
      return { error: 8 };
    }
    return { value: b, error: 0 };
  }
  function qr(a) {
    if (!a || typeof a !== "object") return !1;
    if ("expires" in a && "value" in a) {
      var b;
      typeof a.expires === "number"
        ? (b = a.expires)
        : (b = typeof a.expires === "string" ? Number(a.expires) : NaN);
      if (isNaN(b) || !(Date.now() <= b))
        return (a.value = null), (a.error = 9), !0;
    } else {
      for (
        var c = !1, d = l(Object.keys(a)), e = d.next();
        !e.done;
        e = d.next()
      )
        c = qr(a[e.value]) || c;
      return c;
    }
    return !1;
  }
  function rr(a) {
    if (!a.error && a.value) {
      var b = a.value,
        c;
      try {
        c = JSON.stringify(b);
      } catch (d) {
        return;
      }
      try {
        A.localStorage.setItem("_gcl_ls", c);
      } catch (d) {}
    }
  }
  var sr = /^\w+$/,
    tr = /^[\w-]+$/,
    ur = {},
    vr =
      ((ur.aw = "_aw"),
      (ur.dc = "_dc"),
      (ur.gf = "_gf"),
      (ur.gp = "_gp"),
      (ur.gs = "_gs"),
      (ur.ha = "_ha"),
      (ur.ag = "_ag"),
      (ur.gb = "_gb"),
      ur);
  function wr() {
    return ["ad_storage", "ad_user_data"];
  }
  function xr(a) {
    return !li(8) || rl(a);
  }
  function yr(a, b) {
    function c() {
      var d = xr(b);
      d && a();
      return d;
    }
    yl(function () {
      c() || zl(c, b);
    }, b);
  }
  function zr(a) {
    return Ar(a).map(function (b) {
      return b.W;
    });
  }
  function Br(a) {
    return Cr(a)
      .filter(function (b) {
        return b.W;
      })
      .map(function (b) {
        return b.W;
      });
  }
  function Cr(a) {
    var b = Dr(a.prefix),
      c = Er("gb", b),
      d = Er("ag", b);
    if (!d || !c) return [];
    var e = function (k) {
        return function (m) {
          m.type = k;
          return m;
        };
      },
      f = Ar(c).map(e("gb")),
      g = Fr(d).map(e("ag"));
    return f.concat(g).sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
  }
  function Gr(a, b, c, d, e, f) {
    var g = cb(a, function (k) {
      return k.W === c;
    });
    g
      ? (g.timestamp < d && ((g.timestamp = d), (g.Ud = f)),
        (g.labels = Hr(g.labels || [], e || [])))
      : a.push({ version: b, W: c, timestamp: d, labels: e, Ud: f });
  }
  function Fr(a) {
    for (
      var b = gr(a) || [], c = [], d = l(b), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = e.value,
        g = f,
        k = g.k,
        m = g.b,
        n = Ir(f);
      if (n) {
        var p = void 0;
        li(9) && (p = f.u);
        Gr(c, "2", k, n, m || [], p);
      }
    }
    return c.sort(function (q, r) {
      return r.timestamp - q.timestamp;
    });
  }
  function Ar(a) {
    for (
      var b = [], c = Np(a, F.cookie, void 0, wr()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Jr(e.value);
      if (f != null) {
        var g = f;
        Gr(b, g.version, g.W, g.timestamp, g.labels);
      }
    }
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Kr(b);
  }
  function Lr(a, b) {
    for (var c = [], d = l(a), e = d.next(); !e.done; e = d.next()) {
      var f = e.value;
      c.includes(f) || c.push(f);
    }
    for (var g = l(b), k = g.next(); !k.done; k = g.next()) {
      var m = k.value;
      c.includes(m) || c.push(m);
    }
    return c;
  }
  function Mr(a, b) {
    var c = cb(a, function (d) {
      return d.W === b.W;
    });
    c
      ? (c.timestamp < b.timestamp &&
          ((c.timestamp = b.timestamp), (c.Ud = b.Ud)),
        (c.Qa = c.Qa
          ? b.Qa
            ? c.timestamp < b.timestamp
              ? b.Qa
              : c.Qa
            : c.Qa || 0
          : b.Qa || 0),
        (c.labels = Lr(c.labels || [], b.labels || [])),
        (c.dd = Lr(c.dd || [], b.dd || [])))
      : a.push(b);
  }
  function Nr() {
    var a = or();
    if (!a || a.error || !a.value || typeof a.value !== "object") return null;
    var b = a.value;
    try {
      if (!("value" in b && b.value) || typeof b.value !== "object")
        return null;
      var c = b.value,
        d = c.value;
      return d && d.match(tr)
        ? {
            version: "",
            W: d,
            timestamp: Number(c.creationTimeMs) || 0,
            labels: [],
            Qa: c.linkDecorationSource || 0,
            dd: [2],
          }
        : null;
    } catch (e) {
      return null;
    }
  }
  function Or(a) {
    for (
      var b = [], c = Np(a, F.cookie, void 0, wr()), d = l(c), e = d.next();
      !e.done;
      e = d.next()
    ) {
      var f = Jr(e.value);
      f != null && ((f.Ud = void 0), (f.Qa = 0), (f.dd = [1]), Mr(b, f));
    }
    var g = Nr();
    g && ((g.Ud = void 0), (g.Qa = g.Qa || 0), (g.dd = g.dd || [2]), Mr(b, g));
    b.sort(function (k, m) {
      return m.timestamp - k.timestamp;
    });
    return Kr(b);
  }
  function Hr(a, b) {
    if (!a.length) return b;
    if (!b.length) return a;
    var c = {};
    return a.concat(b).filter(function (d) {
      return c.hasOwnProperty(d) ? !1 : (c[d] = !0);
    });
  }
  function Dr(a) {
    return a && typeof a === "string" && a.match(sr) ? a : "_gcl";
  }
  function Pr(a, b, c) {
    var d = Vj(a),
      e = Pj(d, "query", !1, void 0, "gclsrc"),
      f = { value: Pj(d, "query", !1, void 0, "gclid"), Qa: c ? 4 : 2 };
    if (b && (!f.value || !e)) {
      var g = d.hash.replace("#", "");
      f.value || ((f.value = Oj(g, "gclid", !1)), (f.Qa = 3));
      e || (e = Oj(g, "gclsrc", !1));
    }
    return !f.value || (e !== void 0 && e !== "aw" && e !== "aw.ds") ? [] : [f];
  }
  function Qr(a, b) {
    var c = Vj(a),
      d = Pj(c, "query", !1, void 0, "gclid"),
      e = Pj(c, "query", !1, void 0, "gclsrc"),
      f = Pj(c, "query", !1, void 0, "wbraid");
    f = Ab(f);
    var g = Pj(c, "query", !1, void 0, "gbraid"),
      k = Pj(c, "query", !1, void 0, "gad_source"),
      m = Pj(c, "query", !1, void 0, "dclid");
    if (b && !(d && e && f && g)) {
      var n = c.hash.replace("#", "");
      d = d || Oj(n, "gclid", !1);
      e = e || Oj(n, "gclsrc", !1);
      f = f || Oj(n, "wbraid", !1);
      g = g || Oj(n, "gbraid", !1);
      k = k || Oj(n, "gad_source", !1);
    }
    return Rr(d, e, m, f, g, k);
  }
  function Sr() {
    return Qr(A.location.href, !0);
  }
  function Rr(a, b, c, d, e, f) {
    var g = {},
      k = function (m, n) {
        g[n] || (g[n] = []);
        g[n].push(m);
      };
    g.gclid = a;
    g.gclsrc = b;
    g.dclid = c;
    if (a !== void 0 && a.match(tr))
      switch (b) {
        case void 0:
          k(a, "aw");
          break;
        case "aw.ds":
          k(a, "aw");
          k(a, "dc");
          break;
        case "ds":
          k(a, "dc");
          break;
        case "3p.ds":
          k(a, "dc");
          break;
        case "gf":
          k(a, "gf");
          break;
        case "ha":
          k(a, "ha");
      }
    c && k(c, "dc");
    d !== void 0 && tr.test(d) && ((g.wbraid = d), k(d, "gb"));
    e !== void 0 && tr.test(e) && ((g.gbraid = e), k(e, "ag"));
    f !== void 0 && tr.test(f) && ((g.gad_source = f), k(f, "gs"));
    return g;
  }
  function Tr(a) {
    for (
      var b = Sr(), c = !0, d = l(Object.keys(b)), e = d.next();
      !e.done;
      e = d.next()
    )
      if (b[e.value] !== void 0) {
        c = !1;
        break;
      }
    c && ((b = Qr(A.document.referrer, !1)), (b.gad_source = void 0));
    Ur(b, !1, a);
  }
  function Vr(a) {
    Tr(a);
    var b = Pr(A.location.href, !0, !1);
    b.length || (b = Pr(A.document.referrer, !1, !0));
    if (b.length) {
      var c = b[0];
      a = a || {};
      var d = ob(),
        e = hq(a, d, !0),
        f = wr(),
        g = function () {
          if (xr(f) && e.expires !== void 0) {
            var k = {
              value: {
                value: c.value,
                creationTimeMs: d,
                linkDecorationSource: c.Qa,
              },
              expires: Number(e.expires),
            };
            if (k !== null && k !== void 0 && k !== "") {
              var m = pr(!1);
              m.error === 0 && m.value && ((m.value.gclid = k), rr(m));
            }
          }
        };
      yl(function () {
        g();
        xr(f) || zl(g, f);
      }, f);
    }
  }
  function Ur(a, b, c, d, e) {
    c = c || {};
    e = e || [];
    var f = Dr(c.prefix),
      g = d || ob(),
      k = Math.round(g / 1e3),
      m = wr(),
      n = !1,
      p = !1,
      q = function () {
        if (xr(m)) {
          var r = hq(c, g, !0);
          r.Mb = m;
          for (
            var u = function (L, Q) {
                var I = Er(L, f);
                I && (Yp(I, Q, r), L !== "gb" && (n = !0));
              },
              v = function (L) {
                var Q = ["GCL", k, L];
                e.length > 0 && Q.push(e.join("."));
                return Q.join(".");
              },
              t = l(["aw", "dc", "gf", "ha", "gp"]),
              w = t.next();
            !w.done;
            w = t.next()
          ) {
            var x = w.value;
            a[x] && u(x, v(a[x][0]));
          }
          if (!n && a.gb) {
            var y = a.gb[0],
              B = Er("gb", f);
            (!b &&
              Ar(B).some(function (L) {
                return L.W === y && L.labels && L.labels.length > 0;
              })) ||
              u("gb", v(y));
          }
        }
        if (!p && a.gbraid && xr("ad_storage") && ((p = !0), !n)) {
          var C = a.gbraid,
            D = Er("ag", f);
          if (
            b ||
            !Fr(D).some(function (L) {
              return L.W === C && L.labels && L.labels.length > 0;
            })
          ) {
            var E = {},
              K = ((E.k = C), (E.i = "" + k), (E.b = e), E);
            ir(D, K, c, g);
          }
        }
        Wr(a, f, g, c);
      };
    yl(function () {
      q();
      xr(m) || zl(q, m);
    }, m);
  }
  function Wr(a, b, c, d) {
    if (a.gad_source !== void 0 && xr("ad_storage")) {
      if (li(4)) {
        var e = Ec();
        if (e === "r" || e === "h") return;
      }
      var f = a.gad_source,
        g = Er("gs", b);
      if (g) {
        var k = Math.round((ob() - (Dc() || 0)) / 1e3),
          m;
        if (li(9)) {
          var n = mr(),
            p = {};
          m = ((p.k = f), (p.i = "" + k), (p.u = n), p);
        } else {
          var q = {};
          m = ((q.k = f), (q.i = "" + k), q);
        }
        ir(g, m, d, c);
      }
    }
  }
  function Xr(a, b) {
    var c = Aq(!0);
    yr(function () {
      for (var d = Dr(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (vr[f] !== void 0) {
          var g = Er(f, d),
            k = c[g];
          if (k) {
            var m = Math.min(Yr(k), ob()),
              n;
            b: {
              for (
                var p = m, q = Np(g, F.cookie, void 0, wr()), r = 0;
                r < q.length;
                ++r
              )
                if (Yr(q[r]) > p) {
                  n = !0;
                  break b;
                }
              n = !1;
            }
            if (!n) {
              var u = hq(b, m, !0);
              u.Mb = wr();
              Yp(g, k, u);
            }
          }
        }
      }
      Ur(Rr(c.gclid, c.gclsrc), !1, b);
    }, wr());
  }
  function Zr(a) {
    var b = ["ag"],
      c = Aq(!0),
      d = Dr(a.prefix);
    yr(
      function () {
        for (var e = 0; e < b.length; ++e) {
          var f = Er(b[e], d);
          if (f) {
            var g = c[f];
            if (g) {
              var k = dr(g);
              if (k) {
                var m = Ir(k);
                m || (m = ob());
                var n;
                a: {
                  for (var p = m, q = gr(f), r = 0; r < q.length; ++r)
                    if (Ir(q[r]) > p) {
                      n = !0;
                      break a;
                    }
                  n = !1;
                }
                if (n) break;
                k.i = "" + Math.round(m / 1e3);
                ir(f, k, a, m);
              }
            }
          }
        }
      },
      ["ad_storage"]
    );
  }
  function Er(a, b) {
    var c = vr[a];
    if (c !== void 0) return b + c;
  }
  function Yr(a) {
    return $r(a.split(".")).length !== 0
      ? (Number(a.split(".")[1]) || 0) * 1e3
      : 0;
  }
  function Ir(a) {
    return a ? (Number(a.i) || 0) * 1e3 : 0;
  }
  function Jr(a) {
    var b = $r(a.split("."));
    return b.length === 0
      ? null
      : {
          version: b[0],
          W: b[2],
          timestamp: (Number(b[1]) || 0) * 1e3,
          labels: b.slice(3),
        };
  }
  function $r(a) {
    return a.length < 3 ||
      (a[0] !== "GCL" && a[0] !== "1") ||
      !/^\d+$/.test(a[1]) ||
      !tr.test(a[2])
      ? []
      : a;
  }
  function as(a, b, c, d, e) {
    if (Array.isArray(b) && Mp(A)) {
      var f = Dr(e),
        g = function () {
          for (var k = {}, m = 0; m < a.length; ++m) {
            var n = Er(a[m], f);
            if (n) {
              var p = Np(n, F.cookie, void 0, wr());
              p.length && (k[n] = p.sort()[p.length - 1]);
            }
          }
          return k;
        };
      yr(function () {
        Hq(g, b, c, d);
      }, wr());
    }
  }
  function bs(a, b, c, d) {
    if (Array.isArray(a) && Mp(A)) {
      var e = ["ag"],
        f = Dr(d),
        g = function () {
          for (var k = {}, m = 0; m < e.length; ++m) {
            var n = Er(e[m], f);
            if (!n) return {};
            var p = gr(n);
            if (p.length) {
              var q = p.sort(function (r, u) {
                return Ir(u) - Ir(r);
              })[0];
              k[n] = er(q);
            }
          }
          return k;
        };
      yr(
        function () {
          Hq(g, a, b, c);
        },
        ["ad_storage"]
      );
    }
  }
  function Kr(a) {
    return a.filter(function (b) {
      return tr.test(b.W);
    });
  }
  function cs(a, b) {
    if (Mp(A)) {
      for (var c = Dr(b.prefix), d = {}, e = 0; e < a.length; e++)
        vr[a[e]] && (d[a[e]] = vr[a[e]]);
      yr(function () {
        hb(d, function (f, g) {
          var k = Np(c + g, F.cookie, void 0, wr());
          k.sort(function (u, v) {
            return Yr(v) - Yr(u);
          });
          if (k.length) {
            var m = k[0],
              n = Yr(m),
              p = $r(m.split(".")).length !== 0 ? m.split(".").slice(3) : [],
              q = {},
              r;
            r = $r(m.split(".")).length !== 0 ? m.split(".")[2] : void 0;
            q[f] = [r];
            Ur(q, !0, b, n, p);
          }
        });
      }, wr());
    }
  }
  function ds(a) {
    var b = ["ag"],
      c = ["gbraid"];
    yr(
      function () {
        for (var d = Dr(a.prefix), e = 0; e < b.length; ++e) {
          var f = Er(b[e], d);
          if (!f) break;
          var g = gr(f);
          if (g.length) {
            var k = g.sort(function (q, r) {
                return Ir(r) - Ir(q);
              })[0],
              m = Ir(k),
              n = k.b,
              p = {};
            p[c[e]] = k.k;
            Ur(p, !0, a, m, n);
          }
        }
      },
      ["ad_storage"]
    );
  }
  function es(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1;
  }
  function fs(a) {
    function b(k, m, n) {
      n && (k[m] = n);
    }
    if (vl()) {
      var c = Sr(),
        d;
      a.includes("gad_source") &&
        (d = c.gad_source !== void 0 ? c.gad_source : Aq(!1)._gs);
      if (es(c, a) || d) {
        var e = {};
        b(e, "gclid", c.gclid);
        b(e, "dclid", c.dclid);
        b(e, "gclsrc", c.gclsrc);
        b(e, "wbraid", c.wbraid);
        b(e, "gbraid", c.gbraid);
        Iq(function () {
          return e;
        }, 3);
        var f = {},
          g = ((f._up = "1"), f);
        b(g, "_gs", d);
        Iq(function () {
          return g;
        }, 1);
      }
    }
  }
  function gs(a) {
    if (!li(1)) return null;
    var b = Aq(!0).gad_source;
    if (b != null) return (A.location.hash = ""), b;
    if (li(2)) {
      var c = Vj(A.location.href);
      b = Pj(c, "query", !1, void 0, "gad_source");
      if (b != null) return b;
      var d = Sr();
      if (es(d, a)) return "0";
    }
    return null;
  }
  function hs(a) {
    var b = gs(a);
    b != null &&
      Iq(function () {
        var c = {};
        return (c.gad_source = b), c;
      }, 4);
  }
  function is(a, b, c) {
    var d = [];
    if (b.length === 0) return d;
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        k = g.type ? g.type : "gcl";
      (g.labels || []).indexOf(c) === -1
        ? (a.push(0), e[k] || d.push(g))
        : a.push(1);
      e[k] = !0;
    }
    return d;
  }
  function js(a, b, c, d) {
    var e = [];
    c = c || {};
    if (!xr(wr())) return e;
    var f = Ar(a),
      g = is(e, f, b);
    if (g.length && !d)
      for (var k = l(g), m = k.next(); !m.done; m = k.next()) {
        var n = m.value,
          p = n.timestamp,
          q = [n.version, Math.round(p / 1e3), n.W]
            .concat(n.labels || [], [b])
            .join("."),
          r = hq(c, p, !0);
        r.Mb = wr();
        Yp(a, q, r);
      }
    return e;
  }
  function ks(a, b) {
    var c = [];
    b = b || {};
    var d = Cr(b),
      e = is(c, d, a);
    if (e.length)
      for (var f = l(e), g = f.next(); !g.done; g = f.next()) {
        var k = g.value,
          m = Dr(b.prefix),
          n = Er(k.type, m);
        if (!n) break;
        var p = k,
          q = p.version,
          r = p.W,
          u = p.labels,
          v = p.timestamp,
          t = Math.round(v / 1e3);
        if (k.type === "ag") {
          var w = {},
            x = ((w.k = r), (w.i = "" + t), (w.b = (u || []).concat([a])), w);
          ir(n, x, b, v);
        } else if (k.type === "gb") {
          var y = [q, t, r].concat(u || [], [a]).join("."),
            B = hq(b, v, !0);
          B.Mb = wr();
          Yp(n, y, B);
        }
      }
    return c;
  }
  function ls(a, b) {
    var c = Dr(b),
      d = Er(a, c);
    if (!d) return 0;
    var e;
    e = a === "ag" ? Fr(d) : Ar(d);
    for (var f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f;
  }
  function ms(a) {
    for (var b = 0, c = l(Object.keys(a)), d = c.next(); !d.done; d = c.next())
      for (var e = a[d.value], f = 0; f < e.length; f++)
        b = Math.max(b, Number(e[f].timestamp));
    return b;
  }
  function ns(a) {
    var b = Math.max(ls("aw", a), ms(xr(wr()) ? lr() : {})),
      c = Math.max(ls("gb", a), ms(xr(wr()) ? lr("_gac_gb", !0) : {}));
    c = Math.max(c, ls("ag", a));
    return c > b;
  }
  function Ds() {
    $i.dedupe_gclid || ($i.dedupe_gclid = eq());
    return $i.dedupe_gclid;
  }
  var Es = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
    Fs = /^www.googleadservices.com$/;
  function Gs(a) {
    a || (a = Hs());
    return a.Nn
      ? !1
      : a.Lm || a.Mm || a.Pm || a.Nm || a.df || a.zm || a.Om || a.Dm
      ? !0
      : !1;
  }
  function Hs() {
    var a = {},
      b = Aq(!0);
    a.Nn = !!b._up;
    var c = Sr();
    a.Lm = c.aw !== void 0;
    a.Mm = c.dc !== void 0;
    a.Pm = c.wbraid !== void 0;
    a.Nm = c.gbraid !== void 0;
    a.Om = c.gclsrc === "aw.ds";
    a.df = qs().df;
    var d = F.referrer ? Pj(Vj(F.referrer), "host") : "";
    a.Dm = Es.test(d);
    a.zm = Fs.test(d);
    return a;
  }
  var Is = RegExp(
      "^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"
    ),
    Js = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
    Ks = /^\d+\.fls\.doubleclick\.net$/,
    Ls = /;gac=([^;?]+)/,
    Ms = /;gacgb=([^;?]+)/;
  function Ns(a, b) {
    if (Ks.test(F.location.host)) {
      var c = F.location.href.match(b);
      return c && c.length === 2 && c[1].match(Is)
        ? decodeURIComponent(c[1])
        : "";
    }
    for (
      var d = [], e = l(Object.keys(a)), f = e.next();
      !f.done;
      f = e.next()
    ) {
      for (var g = f.value, k = [], m = a[g], n = 0; n < m.length; n++)
        k.push(m[n].W);
      d.push(g + ":" + k.join(","));
    }
    return d.length > 0 ? d.join(";") : "";
  }
  function Os(a, b, c) {
    for (
      var d = xr(wr()) ? lr("_gac_gb", !0) : {},
        e = [],
        f = !1,
        g = l(Object.keys(d)),
        k = g.next();
      !k.done;
      k = g.next()
    ) {
      var m = k.value,
        n = js("_gac_gb_" + m, a, b, c);
      f =
        f ||
        (n.length !== 0 &&
          n.some(function (p) {
            return p === 1;
          }));
      e.push(m + ":" + n.join(","));
    }
    return { ym: f ? e.join(";") : "", xm: Ns(d, Ms) };
  }
  function Ps(a) {
    var b = F.location.href.match(new RegExp(";" + a + "=([^;?]+)"));
    return b && b.length === 2 && b[1].match(Js) ? b[1] : void 0;
  }
  function Qs(a) {
    var b = li(9),
      c = {},
      d,
      e,
      f;
    Ks.test(F.location.host) &&
      ((d = Ps("gclgs")), (e = Ps("gclst")), b && (f = Ps("gcllp")));
    if (d && e && (!b || f)) (c.pg = d), (c.rg = e), (c.qg = f);
    else {
      var g = ob(),
        k = Fr((a || "_gcl") + "_gs"),
        m = k.map(function (q) {
          return q.W;
        }),
        n = k.map(function (q) {
          return g - q.timestamp;
        }),
        p = [];
      b &&
        (p = k.map(function (q) {
          return q.Ud;
        }));
      m.length > 0 &&
        n.length > 0 &&
        (!b || p.length > 0) &&
        ((c.pg = m.join(".")),
        (c.rg = n.join(".")),
        b && p.length > 0 && (c.qg = p.join(".")));
    }
    return c;
  }
  function Rs(a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (Ks.test(F.location.host)) {
      var e = Ps(c);
      if (e) return [{ W: e }];
    } else {
      if (b === "gclid") {
        var f = (a || "_gcl") + "_aw";
        return d ? Or(f) : Ar(f);
      }
      if (b === "wbraid") return Ar((a || "_gcl") + "_gb");
      if (b === "braids") return Cr({ prefix: a });
    }
    return [];
  }
  function Ss(a) {
    return Rs(a, "gclid", "gclaw")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Ts(a) {
    var b = Rs(a, "gclid", "gclaw", !0),
      c = b
        .map(function (f) {
          return f.W;
        })
        .join("."),
      d = b
        .map(function (f) {
          return f.Qa || 0;
        })
        .join("."),
      e = b
        .map(function (f) {
          for (
            var g = 0, k = l(f.dd || []), m = k.next();
            !m.done;
            m = k.next()
          ) {
            var n = m.value;
            n === 1 && (g |= 1);
            n === 2 && (g |= 2);
          }
          return g.toString();
        })
        .join(".");
    return { W: c, Bk: d, Ck: e };
  }
  function Us(a) {
    return Rs(a, "braids", "gclgb")
      .map(function (b) {
        return b.W;
      })
      .join(".");
  }
  function Vs(a) {
    return Ks.test(F.location.host) ? !(Ps("gclaw") || Ps("gac")) : ns(a);
  }
  function Ws(a, b, c) {
    var d;
    d = c ? ks(a, b) : js(((b && b.prefix) || "_gcl") + "_gb", a, b);
    return d.length === 0 ||
      d.every(function (e) {
        return e === 0;
      })
      ? ""
      : d.join(".");
  }
  function Xs() {
    var a = A.__uspapi;
    if ($a(a)) {
      var b = "";
      try {
        a("getUSPData", 1, function (c, d) {
          if (d && c) {
            var e = c.uspString;
            e && RegExp("^[\\da-zA-Z-]{1,20}$").test(e) && (b = e);
          }
        });
      } catch (c) {}
      return b;
    }
  }
  function gt(a) {
    var b = W(a.m, P.g.Sb),
      c = W(a.m, P.g.qc);
    b && !c
      ? (a.eventName !== P.g.fa && a.eventName !== P.g.fd && U(131),
        (a.isAborted = !0))
      : !b && c && (U(132), (a.isAborted = !0));
  }
  function ht(a) {
    var b = X(P.g.N) ? $i.pscdl : "denied";
    b != null && (a.j[P.g.Kf] = b);
  }
  function it(a) {
    var b = Ko(!0);
    a.j[P.g.Rb] = b;
  }
  function jt(a) {
    Hp() && (a.j[P.g.Nc] = 1);
  }
  function $s() {
    var a = F.title;
    if (a === void 0 || a === "") return "";
    var b = function (d) {
      try {
        return decodeURIComponent(d), !0;
      } catch (e) {
        return !1;
      }
    };
    a = encodeURIComponent(a);
    for (var c = 256; c > 0 && !b(a.substring(0, c)); ) c--;
    return decodeURIComponent(a.substring(0, c));
  }
  function kt(a) {
    lt(a, "ce", W(a.m, P.g.Ua));
  }
  function lt(a, b, c) {
    a.j[P.g.Kd] || (a.j[P.g.Kd] = {});
    a.j[P.g.Kd][b] = c;
  }
  function rt(a, b, c, d) {
    var e = nc(),
      f;
    if (e === 1)
      a: {
        var g = lj;
        g = g.toLowerCase();
        for (
          var k = "https://" + g,
            m = "http://" + g,
            n = 1,
            p = F.getElementsByTagName("script"),
            q = 0;
          q < p.length && q < 100;
          q++
        ) {
          var r = p[q].src;
          if (r) {
            r = r.toLowerCase();
            if (r.indexOf(m) === 0) {
              f = 3;
              break a;
            }
            n === 1 && r.indexOf(k) === 0 && (n = 2);
          }
        }
        f = n;
      }
    else f = e;
    return (f === 2 || d || "http:" !== A.location.protocol ? a : b) + c;
  }
  function st(a) {
    return typeof a !== "object" || a === null ? {} : a;
  }
  function tt(a) {
    return a === void 0 || a === null
      ? ""
      : typeof a === "object"
      ? a.toString()
      : String(a);
  }
  function ut(a) {
    if (a !== void 0 && a !== null) return tt(a);
  }
  function vt(a) {
    return typeof a === "number" ? a : ut(a);
  }
  function It(a) {
    return {
      getDestinationId: function () {
        return a.target.destinationId;
      },
      getEventName: function () {
        return a.eventName;
      },
      setEventName: function (b) {
        a.eventName = b;
      },
      getHitData: function (b) {
        return a.j[b];
      },
      setHitData: function (b, c) {
        a.j[b] = c;
      },
      setHitDataIfNotDefined: function (b, c) {
        a.j[b] === void 0 && (a.j[b] = c);
      },
      copyToHitData: function (b, c) {
        a.copyToHitData(b, c);
      },
      getMetadata: function (b) {
        return a.metadata[b];
      },
      setMetadata: function (b, c) {
        a.metadata[b] = c;
      },
      isAborted: function () {
        return a.isAborted;
      },
      abort: function () {
        a.isAborted = !0;
      },
      getFromEventContext: function (b) {
        return W(a.m, b);
      },
      Xb: function () {
        return a;
      },
      getHitKeys: function () {
        return Object.keys(a.j);
      },
    };
  }
  function Pt(a) {
    var b,
      c = A,
      d = [];
    try {
      c.navigation && c.navigation.entries && (d = c.navigation.entries());
    } catch (k) {}
    b = d;
    for (var e = b.length - 1; e >= 0; e--) {
      var f = b[e],
        g = f.url && f.url.match("[?&#]" + a + "=([^&#]+)");
      if (g && g.length === 2) return g[1];
    }
  }
  var Qt,
    Rt = !1;
  function St() {
    Rt = !0;
    Qt = Qt || {};
  }
  function Tt(a) {
    Rt || St();
    return Qt[a];
  }
  function Ut() {
    var a = A.screen;
    return { width: a ? a.width : 0, height: a ? a.height : 0 };
  }
  function Vt(a) {
    if (F.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top === b.bottom || b.left === b.right || !A.getComputedStyle)
      return !0;
    var c = A.getComputedStyle(a, null);
    if (c.visibility === "hidden") return !0;
    for (var d = a, e = c; d; ) {
      if (e.display === "none") return !0;
      var f = e.opacity,
        g = e.filter;
      if (g) {
        var k = g.indexOf("opacity(");
        k >= 0 &&
          ((g = g.substring(k + 8, g.indexOf(")", k))),
          g.charAt(g.length - 1) === "%" && (g = g.substring(0, g.length - 1)),
          (f = String(Math.min(Number(g), Number(f)))));
      }
      if (f !== void 0 && Number(f) <= 0) return !0;
      (d = d.parentElement) && (e = A.getComputedStyle(d, null));
    }
    return !1;
  }
  var Kf;
  var jv = Number("") || 5,
    kv = Number("") || 50,
    lv = db();
  var qv = {
    Ul: Number("") || 500,
    Hl: Number("") || 5e3,
    bk: Number("20") || 10,
    jl: Number("") || 5e3,
  };
  function rv(a) {
    return (a.performance && a.performance.now()) || Date.now();
  }
  var sv = function (a, b) {
    var c;
    return c;
  };
  var tv;
  function Av() {
    var a = Nf(Kf.j, "", function () {
      return {};
    });
    try {
      return a("internal_sw_allowed"), !0;
    } catch (b) {
      return !1;
    }
  }
  function Bv(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  var Cv = function (a, b, c, d) {};
  function Dv(a, b, c, d, e) {}
  function Ev(a, b, c, d) {}
  var Fv = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      e < 128
        ? (b[c++] = e)
        : (e < 2048
            ? (b[c++] = (e >> 6) | 192)
            : ((e & 64512) == 55296 &&
              d + 1 < a.length &&
              (a.charCodeAt(d + 1) & 64512) == 56320
                ? ((e =
                    65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023)),
                  (b[c++] = (e >> 18) | 240),
                  (b[c++] = ((e >> 12) & 63) | 128))
                : (b[c++] = (e >> 12) | 224),
              (b[c++] = ((e >> 6) & 63) | 128)),
          (b[c++] = (e & 63) | 128));
    }
    return b;
  };
  xo();
  Go() || uo("iPod");
  uo("iPad");
  !uo("Android") || yo() || xo() || wo() || uo("Silk");
  yo();
  !uo("Safari") ||
    yo() ||
    (vo() ? 0 : uo("Coast")) ||
    wo() ||
    (vo() ? 0 : uo("Edge")) ||
    (vo() ? to("Microsoft Edge") : uo("Edg/")) ||
    (vo() ? to("Opera") : uo("OPR")) ||
    xo() ||
    uo("Silk") ||
    uo("Android") ||
    Ho();
  var Gv = {},
    Hv = null,
    Iv = function (a) {
      for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        e > 255 && ((b[c++] = e & 255), (e >>= 8));
        b[c++] = e;
      }
      var f = 4;
      f === void 0 && (f = 0);
      if (!Hv) {
        Hv = {};
        for (
          var g =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                ""
              ),
            k = ["+/=", "+/", "-_=", "-_.", "-_"],
            m = 0;
          m < 5;
          m++
        ) {
          var n = g.concat(k[m].split(""));
          Gv[m] = n;
          for (var p = 0; p < n.length; p++) {
            var q = n[p];
            Hv[q] === void 0 && (Hv[q] = p);
          }
        }
      }
      for (
        var r = Gv[f],
          u = Array(Math.floor(b.length / 3)),
          v = r[64] || "",
          t = 0,
          w = 0;
        t < b.length - 2;
        t += 3
      ) {
        var x = b[t],
          y = b[t + 1],
          B = b[t + 2],
          C = r[x >> 2],
          D = r[((x & 3) << 4) | (y >> 4)],
          E = r[((y & 15) << 2) | (B >> 6)],
          K = r[B & 63];
        u[w++] = "" + C + D + E + K;
      }
      var L = 0,
        Q = v;
      switch (b.length - t) {
        case 2:
          (L = b[t + 1]), (Q = r[(L & 15) << 2] || v);
        case 1:
          var I = b[t];
          u[w] = "" + r[I >> 2] + r[((I & 3) << 4) | (L >> 4)] + Q + v;
      }
      return u.join("");
    };
  var Jv =
    "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(
      " "
    );
  function Kv(a) {
    var b;
    return (b = a.google_tag_data) != null ? b : (a.google_tag_data = {});
  }
  function Lv() {
    var a = A.google_tag_data,
      b;
    if (a != null && a.uach) {
      var c = a.uach,
        d = Object.assign({}, c);
      c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
      b = d;
    } else b = null;
    return b;
  }
  function Mv() {
    var a, b;
    return (b = (a = A.google_tag_data) == null ? void 0 : a.uach_promise) !=
      null
      ? b
      : null;
  }
  function Nv(a) {
    var b, c;
    return (
      typeof ((b = a.navigator) == null
        ? void 0
        : (c = b.userAgentData) == null
        ? void 0
        : c.getHighEntropyValues) === "function"
    );
  }
  function Ov() {
    var a = A;
    if (!Nv(a)) return null;
    var b = Kv(a);
    if (b.uach_promise) return b.uach_promise;
    var c = a.navigator.userAgentData
      .getHighEntropyValues(Jv)
      .then(function (d) {
        b.uach != null || (b.uach = d);
        return d;
      });
    return (b.uach_promise = c);
  }
  function Vv(a) {
    var b;
    b = b === void 0 ? document : b;
    var c;
    return !((c = b.featurePolicy) == null || !c.allowedFeatures().includes(a));
  }
  function Wv() {
    return Vv("join-ad-interest-group") && $a(dc.joinAdInterestGroup);
  }
  function Xv(a, b) {
    var c = ki[3] === void 0 ? 1 : ki[3],
      d = 'iframe[data-tagging-id="' + b + '"]',
      e = [];
    try {
      if (c === 1) {
        var f = F.querySelector(d);
        f && (e = [f]);
      } else e = Array.from(F.querySelectorAll(d));
    } catch (q) {}
    var g;
    a: {
      try {
        g = F.querySelectorAll(
          'iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]'
        );
        break a;
      } catch (q) {}
      g = void 0;
    }
    var k = g,
      m =
        ((k == null ? void 0 : k.length) || 0) >=
        (ki[2] === void 0 ? 50 : ki[2]),
      n;
    if ((n = e.length >= 1)) {
      var p = Number(e[e.length - 1].dataset.loadTime);
      p !== void 0 && ob() - p < (ki[1] === void 0 ? 6e4 : ki[1])
        ? (Wa("TAGGING", 9), (n = !0))
        : (n = !1);
    }
    if (!n) {
      if (c === 1)
        if (e.length >= 1) Yv(e[0]);
        else {
          if (m) {
            Wa("TAGGING", 10);
            return;
          }
        }
      else e.length >= c ? Yv(e[0]) : m && Yv(k[0]);
      oc(
        a,
        void 0,
        { allow: "join-ad-interest-group" },
        { taggingId: b, loadTime: ob() }
      );
    }
  }
  function Yv(a) {
    try {
      a.parentNode.removeChild(a);
    } catch (b) {}
  }
  function Zv() {
    return "https://td.doubleclick.net";
  }
  function $v(a) {
    var b = a.location.href;
    if (a === a.top) return { url: b, Ym: !0 };
    var c = !1,
      d = a.document;
    d && d.referrer && ((b = d.referrer), a.parent === a.top && (c = !0));
    var e = a.location.ancestorOrigins;
    if (e) {
      var f = e[e.length - 1];
      f && b.indexOf(f) === -1 && ((c = !1), (b = f));
    }
    return { url: b, Ym: c };
  }
  var Vw = {
    J: {
      Ki: "ads_conversion_hit",
      ee: "container_execute_start",
      Ni: "container_setup_end",
      Dg: "container_setup_start",
      Li: "container_blocking_end",
      Mi: "container_execute_end",
      Oi: "container_yield_end",
      Eg: "container_yield_start",
      Qj: "event_execute_end",
      Pj: "event_evaluation_end",
      zh: "event_evaluation_start",
      Rj: "event_setup_end",
      Ke: "event_setup_start",
      Tj: "ga4_conversion_hit",
      Me: "page_load",
      io: "pageview",
      wc: "snippet_load",
      pk: "tag_callback_error",
      qk: "tag_callback_failure",
      rk: "tag_callback_success",
      sk: "tag_execute_end",
      Ld: "tag_execute_start",
    },
  };
  function Ww() {
    function a(c, d) {
      var e = Xa(d);
      e && b.push([c, e]);
    }
    var b = [];
    a("u", "GTM");
    a("ut", "TAGGING");
    a("h", "HEALTH");
    return b;
  }
  var Xw = !1;
  function Gx(a, b) {}
  function Hx(a, b) {}
  function Ix(a, b) {}
  function Jx(a, b) {}
  function Kx() {
    var a = {};
    return a;
  }
  function yx(a) {
    a = a === void 0 ? !0 : a;
    var b = {};
    return b;
  }
  function Lx() {}
  function Mx(a, b) {}
  function Nx(a, b, c) {}
  function Ox() {}
  function Px(a, b) {
    var c = A,
      d,
      e = c.GooglebQhCsO;
    e || ((e = {}), (c.GooglebQhCsO = e));
    d = e;
    if (d[a]) return !1;
    d[a] = [];
    d[a][0] = b;
    return !0;
  }
  function Qx(a, b, c, d) {
    var e = Co(a, "fmt");
    if (b) {
      var f = Co(a, "random"),
        g = Co(a, "label") || "";
      if (!f) return !1;
      var k = Iv(
        decodeURIComponent(g.replace(/\+/g, " ")) +
          ":" +
          decodeURIComponent(f.replace(/\+/g, " "))
      );
      if (!Px(k, b)) return !1;
    }
    e && Number(e) !== 4 && (a = Eo(a, "rfmt", e));
    var m = Eo(a, "fmt", 4);
    mc(
      m,
      function () {
        A.google_noFurtherRedirects &&
          b &&
          ((A.google_noFurtherRedirects = null), b());
      },
      c,
      d,
      F.getElementsByTagName("script")[0].parentElement || void 0
    );
    return !0;
  }
  function zy(a, b) {
    if (data.entities) {
      var c = data.entities[a];
      if (c) return c[b];
    }
  }
  function Ay(a, b, c) {
    c = c === void 0 ? !1 : c;
    By().addRestriction(0, a, b, c);
  }
  function Cy(a, b, c) {
    c = c === void 0 ? !1 : c;
    By().addRestriction(1, a, b, c);
  }
  function Dy() {
    var a = Fk();
    return By().getRestrictions(1, a);
  }
  var Ey = function () {
      this.container = {};
      this.j = {};
    },
    Fy = function (a, b) {
      var c = a.container[b];
      c ||
        ((c = {
          _entity: { internal: [], external: [] },
          _event: { internal: [], external: [] },
        }),
        (a.container[b] = c));
      return c;
    };
  Ey.prototype.addRestriction = function (a, b, c, d) {
    d = d === void 0 ? !1 : d;
    if (!d || !this.j[b]) {
      var e = Fy(this, b);
      a === 0
        ? d
          ? e._entity.external.push(c)
          : e._entity.internal.push(c)
        : a === 1 &&
          (d ? e._event.external.push(c) : e._event.internal.push(c));
    }
  };
  Ey.prototype.getRestrictions = function (a, b) {
    var c = Fy(this, b);
    if (a === 0) {
      var d, e;
      return [].concat(
        ua(
          (c == null
            ? void 0
            : (d = c._entity) == null
            ? void 0
            : d.internal) || []
        ),
        ua(
          (c == null
            ? void 0
            : (e = c._entity) == null
            ? void 0
            : e.external) || []
        )
      );
    }
    if (a === 1) {
      var f, g;
      return [].concat(
        ua(
          (c == null ? void 0 : (f = c._event) == null ? void 0 : f.internal) ||
            []
        ),
        ua(
          (c == null ? void 0 : (g = c._event) == null ? void 0 : g.external) ||
            []
        )
      );
    }
    return [];
  };
  Ey.prototype.getExternalRestrictions = function (a, b) {
    var c = Fy(this, b),
      d,
      e;
    return a === 0
      ? (c == null ? void 0 : (d = c._entity) == null ? void 0 : d.external) ||
          []
      : (c == null ? void 0 : (e = c._event) == null ? void 0 : e.external) ||
          [];
  };
  Ey.prototype.removeExternalRestrictions = function (a) {
    var b = Fy(this, a);
    b._event && (b._event.external = []);
    b._entity && (b._entity.external = []);
    this.j[a] = !0;
  };
  function By() {
    var a = $i.r;
    a || ((a = new Ey()), ($i.r = a));
    return a;
  }
  var Gy = new RegExp(
      /^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/
    ),
    Hy = {
      cl: ["ecl"],
      customPixels: ["nonGooglePixels"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: [
        "customScripts",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      customScripts: [
        "html",
        "customPixels",
        "nonGooglePixels",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGooglePixels: [],
      nonGoogleScripts: ["nonGooglePixels"],
      nonGoogleIframes: ["nonGooglePixels"],
    },
    Iy = {
      cl: ["ecl"],
      customPixels: ["customScripts", "html"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
      html: ["customScripts"],
      customScripts: ["html"],
      nonGooglePixels: [
        "customPixels",
        "customScripts",
        "html",
        "nonGoogleScripts",
        "nonGoogleIframes",
      ],
      nonGoogleScripts: ["customScripts", "html"],
      nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    },
    Jy =
      "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(
        " "
      );
  function Ky() {
    var a = Cj("gtm.allowlist") || Cj("gtm.whitelist");
    a && U(9);
    fj && (a = ["google", "gtagfl", "lcl", "zone"]);
    Gy.test(A.location && A.location.hostname) &&
      (fj
        ? U(116)
        : (U(117),
          Ly &&
            ((a = []),
            window.console &&
              window.console.log &&
              window.console.log("GTM blocked. See go/13687728."))));
    var b = a && sb(lb(a), Hy),
      c = Cj("gtm.blocklist") || Cj("gtm.blacklist");
    c || ((c = Cj("tagTypeBlacklist")) && U(3));
    c ? U(8) : (c = []);
    Gy.test(A.location && A.location.hostname) &&
      ((c = lb(c)),
      c.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    lb(c).indexOf("google") >= 0 && U(2);
    var d = c && sb(lb(c), Iy),
      e = {};
    return function (f) {
      var g = f && f[He.wa];
      if (!g || typeof g !== "string") return !0;
      g = g.replace(/^_*/, "");
      if (e[g] !== void 0) return e[g];
      var k = pj[g] || [],
        m = !0;
      if (a) {
        var n;
        if ((n = m))
          a: {
            if (b.indexOf(g) < 0)
              if (k && k.length > 0)
                for (var p = 0; p < k.length; p++) {
                  if (b.indexOf(k[p]) < 0) {
                    U(11);
                    n = !1;
                    break a;
                  }
                }
              else {
                n = !1;
                break a;
              }
            n = !0;
          }
        m = n;
      }
      var q = !1;
      if (c) {
        var r = d.indexOf(g) >= 0;
        if (r) q = r;
        else {
          var u = eb(d, k || []);
          u && U(10);
          q = u;
        }
      }
      var v = !m || q;
      v ||
        !(k.indexOf("sandboxedScripts") >= 0) ||
        (b && b.indexOf("sandboxedScripts") !== -1) ||
        (v = eb(d, Jy));
      return (e[g] = v);
    };
  }
  var Ly = !1;
  Ly = !0;
  function My() {
    uk &&
      Ay(Fk(), function (a) {
        var b = uf(a.entityId),
          c;
        if (xf(b)) {
          var d = b[He.wa];
          if (!d)
            throw Error("Error: No function name given for function call.");
          var e = mf[d];
          c = !!e && !!e.runInSiloedMode;
        } else c = !!zy(b[He.wa], 4);
        return c;
      });
  }
  function Ny(a, b, c, d, e) {
    if (!Oy()) {
      var f = d.siloed ? zk(a) : a;
      if (!Ok(f)) {
        d.siloed && Qk({ ctid: f, isDestination: !1 });
        var g = Ik();
        qk().container[f] = { state: 1, context: d, parent: g };
        pk({ ctid: f, isDestination: !1 }, e);
        var k = Py(a);
        if (wj()) mc(vj() + "/" + k);
        else {
          var m = tb(a, "GTM-"),
            n = ak(),
            p = c ? "/gtag/js" : "/gtm.js",
            q = Zj(b, p + k);
          if (!q) {
            var r = Zi.Ff + p;
            n &&
              gc &&
              m &&
              (r = gc.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
            q = rt("https://", "http://", r + k);
          }
          mc(q);
        }
      }
    }
  }
  function Qy(a, b, c, d) {
    if (!Oy()) {
      var e = c.siloed ? zk(a) : a;
      if (!Pk(e))
        if ((!T(139) && c.siloed) || !Rk())
          if (
            (c.siloed && Qk({ ctid: e, isDestination: !0 }),
            (qk().destination[e] = { state: 1, context: c, parent: Ik() }),
            pk({ ctid: e, isDestination: !0 }, d),
            wj())
          )
            mc(vj() + ("/gtd" + Py(a, !0)));
          else {
            var f = "/gtag/destination" + Py(a, !0),
              g = Zj(b, f);
            g || (g = rt("https://", "http://", Zi.Ff + f));
            mc(g);
          }
        else
          (qk().destination[e] = {
            state: 0,
            transportUrl: b,
            context: c,
            parent: Ik(),
          }),
            pk({ ctid: e, isDestination: !0 }, d),
            U(91);
    }
  }
  function Py(a, b) {
    b = b === void 0 ? !1 : b;
    var c = "?id=" + encodeURIComponent(a) + "&l=" + Zi.tb;
    if (!tb(a, "GTM-") || b) c += "&cx=c";
    c += "&gtm=" + Kp();
    ak() && (c += "&sign=" + Zi.Eh);
    var d = tj.j;
    d === 1 ? (c += "&fps=fc") : d === 2 && (c += "&fps=fe");
    return c;
  }
  function Oy() {
    if (Ip()) {
      return !0;
    }
    return !1;
  }
  var Ry = function () {
    this.C = 0;
    this.j = {};
  };
  Ry.prototype.addListener = function (a, b, c) {
    var d = ++this.C;
    this.j[a] = this.j[a] || {};
    this.j[a][String(d)] = { listener: b, Nb: c };
    return d;
  };
  Ry.prototype.removeListener = function (a, b) {
    var c = this.j[a],
      d = String(b);
    if (!c || !c[d]) return !1;
    delete c[d];
    return !0;
  };
  var Ty = function (a, b) {
    var c = [];
    hb(Sy.j[a], function (d, e) {
      c.indexOf(e.listener) < 0 &&
        (e.Nb === void 0 || b.indexOf(e.Nb) >= 0) &&
        c.push(e.listener);
    });
    return c;
  };
  function Uy(a, b, c) {
    return {
      entityType: a,
      indexInOriginContainer: b,
      nameInOriginContainer: c,
      originContainerId: Ck(),
    };
  }
  var Wy = function (a, b) {
      this.j = !1;
      this.K = [];
      this.eventData = { tags: [] };
      this.P = !1;
      this.C = this.H = 0;
      Vy(this, a, b);
    },
    Xy = function (a, b, c, d) {
      if (bj.hasOwnProperty(b) || b === "__zone") return -1;
      var e = {};
      Rc(d) && (e = Sc(d, e));
      e.id = c;
      e.status = "timeout";
      return a.eventData.tags.push(e) - 1;
    },
    Yy = function (a, b, c, d) {
      var e = a.eventData.tags[b];
      e && ((e.status = c), (e.executionTime = d));
    },
    Zy = function (a) {
      if (!a.j) {
        for (var b = a.K, c = 0; c < b.length; c++) b[c]();
        a.j = !0;
        a.K.length = 0;
      }
    },
    Vy = function (a, b, c) {
      b !== void 0 && a.Se(b);
      c &&
        A.setTimeout(function () {
          Zy(a);
        }, Number(c));
    };
  Wy.prototype.Se = function (a) {
    var b = this,
      c = qb(function () {
        G(function () {
          a(Ck(), b.eventData);
        });
      });
    this.j ? c() : this.K.push(c);
  };
  var $y = function (a) {
      a.H++;
      return qb(function () {
        a.C++;
        a.P && a.C >= a.H && Zy(a);
      });
    },
    az = function (a) {
      a.P = !0;
      a.C >= a.H && Zy(a);
    };
  var bz = {};
  function cz() {
    return A[dz()];
  }
  function dz() {
    return A.GoogleAnalyticsObject || "ga";
  }
  function gz() {
    var a = Ck();
  }
  function hz(a, b) {
    return function () {
      var c = cz(),
        d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"),
            k = f.get("hitCallback"),
            m = g.indexOf("&tid=" + b) < 0;
          m &&
            (f.set(
              "hitPayload",
              g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b),
              !0
            ),
            f.set("hitCallback", void 0, !0));
          e(f);
          m &&
            (f.set("hitPayload", g, !0),
            f.set("hitCallback", k, !0),
            f.set("_x_19", void 0, !0),
            e(f));
        });
      }
    };
  }
  var mz = ["es", "1"],
    nz = {},
    oz = {};
  function pz(a, b) {
    if (jk) {
      var c;
      c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
      nz[a] = [
        ["e", c],
        ["eid", a],
      ];
      En(a);
    }
  }
  function qz(a) {
    var b = a.eventId,
      c = a.ed;
    if (!nz[b]) return [];
    var d = [];
    oz[b] || d.push(mz);
    d.push.apply(d, ua(nz[b]));
    c && (oz[b] = !0);
    return d;
  }
  var rz = {},
    sz = {},
    tz = {};
  function uz(a, b, c, d) {
    jk &&
      T(116) &&
      ((d === void 0 ? 0 : d)
        ? ((tz[b] = tz[b] || 0), ++tz[b])
        : c !== void 0
        ? ((sz[a] = sz[a] || {}), (sz[a][b] = Math.round(c)))
        : ((rz[a] = rz[a] || {}), (rz[a][b] = (rz[a][b] || 0) + 1)));
  }
  function vz(a) {
    var b = a.eventId,
      c = a.ed,
      d = rz[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete rz[b];
    return e.length ? [["md", e.join(".")]] : [];
  }
  function wz(a) {
    var b = a.eventId,
      c = a.ed,
      d = sz[b] || {},
      e = [],
      f;
    for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
    c && delete sz[b];
    return e.length ? [["mtd", e.join(".")]] : [];
  }
  function xz() {
    for (
      var a = [], b = l(Object.keys(tz)), c = b.next();
      !c.done;
      c = b.next()
    ) {
      var d = c.value;
      a.push("" + d + tz[d]);
    }
    return a.length ? [["mec", a.join(".")]] : [];
  }
  var yz = {},
    zz = {};
  function Az(a, b, c) {
    if (jk && b) {
      var d = dk(b);
      yz[a] = yz[a] || [];
      yz[a].push(c + d);
      var e = (xf(b) ? "1" : "2") + d;
      zz[a] = zz[a] || [];
      zz[a].push(e);
      En(a);
    }
  }
  function Bz(a) {
    var b = a.eventId,
      c = a.ed,
      d = [],
      e = yz[b] || [];
    e.length && d.push(["tr", e.join(".")]);
    var f = zz[b] || [];
    f.length && d.push(["ti", f.join(".")]);
    c && (delete yz[b], delete zz[b]);
    return d;
  }
  function Cz(a, b, c, d) {
    var e = gf[a],
      f = Dz(a, b, c, d);
    if (!f) return null;
    var g = yf(e[He.nk], c, []);
    if (g && g.length) {
      var k = g[0];
      f = Cz(
        k.index,
        {
          onSuccess: f,
          onFailure: k.zk === 1 ? b.terminate : f,
          terminate: b.terminate,
        },
        c,
        d
      );
    }
    return f;
  }
  function Dz(a, b, c, d) {
    function e() {
      function w() {
        Jl(3);
        var K = ob() - E;
        Az(c.id, f, "7");
        Yy(c.xc, C, "exception", K);
        T(100) && Nx(c, f, Vw.J.pk);
        D || ((D = !0), k());
      }
      if (f[He.Ml]) k();
      else {
        var x = wf(f, c, []),
          y = x[He.fl];
        if (y != null)
          for (var B = 0; B < y.length; B++)
            if (!X(y[B])) {
              k();
              return;
            }
        var C = Xy(c.xc, String(f[He.wa]), Number(f[He.Re]), x[He.METADATA]),
          D = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!D) {
            D = !0;
            var K = ob() - E;
            Az(c.id, gf[a], "5");
            Yy(c.xc, C, "success", K);
            T(100) && Nx(c, f, Vw.J.rk);
            g();
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!D) {
            D = !0;
            var K = ob() - E;
            Az(c.id, gf[a], "6");
            Yy(c.xc, C, "failure", K);
            T(100) && Nx(c, f, Vw.J.qk);
            k();
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        Az(c.id, f, "1");
        T(100) && Mx(c, f);
        var E = ob();
        try {
          zf(x, { event: c, index: a, type: 1 });
        } catch (K) {
          w(K);
        }
        T(100) && Nx(c, f, Vw.J.sk);
      }
    }
    var f = gf[a],
      g = b.onSuccess,
      k = b.onFailure,
      m = b.terminate;
    if (c.isBlocked(f)) return null;
    var n = yf(f[He.tk], c, []);
    if (n && n.length) {
      var p = n[0],
        q = Cz(p.index, { onSuccess: g, onFailure: k, terminate: m }, c, d);
      if (!q) return null;
      g = q;
      k = p.zk === 2 ? m : q;
    }
    if (f[He.fk] || f[He.Ol]) {
      var r = f[He.fk] ? hf : c.Gn,
        u = g,
        v = k;
      if (!r[a]) {
        var t = Ez(a, r, qb(e));
        g = t.onSuccess;
        k = t.onFailure;
      }
      return function () {
        r[a](u, v);
      };
    }
    return e;
  }
  function Ez(a, b, c) {
    var d = [],
      e = [];
    b[a] = Fz(d, e, c);
    return {
      onSuccess: function () {
        b[a] = Gz;
        for (var f = 0; f < d.length; f++) d[f]();
      },
      onFailure: function () {
        b[a] = Hz;
        for (var f = 0; f < e.length; f++) e[f]();
      },
    };
  }
  function Fz(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c();
    };
  }
  function Gz(a) {
    a();
  }
  function Hz(a, b) {
    b();
  }
  var Kz = function (a, b) {
    for (var c = [], d = 0; d < gf.length; d++)
      if (a[d]) {
        var e = gf[d];
        var f = $y(b.xc);
        try {
          var g = Cz(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
          if (g) {
            var k = e[He.wa];
            if (!k)
              throw Error("Error: No function name given for function call.");
            var m = mf[k];
            c.push({
              Tk: d,
              Kk: (m ? m.priorityOverride || 0 : 0) || zy(e[He.wa], 1) || 0,
              execute: g,
            });
          } else Iz(d, b), f();
        } catch (p) {
          f();
        }
      }
    c.sort(Jz);
    for (var n = 0; n < c.length; n++) c[n].execute();
    return c.length > 0;
  };
  function Lz(a, b) {
    if (!Sy) return !1;
    var c = a["gtm.triggers"] && String(a["gtm.triggers"]),
      d = Ty(a.event, c ? String(c).split(",") : []);
    if (!d.length) return !1;
    for (var e = 0; e < d.length; ++e) {
      var f = $y(b);
      try {
        d[e](a, f);
      } catch (g) {
        f();
      }
    }
    return !0;
  }
  function Jz(a, b) {
    var c,
      d = b.Kk,
      e = a.Kk;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (c !== 0) f = c;
    else {
      var g = a.Tk,
        k = b.Tk;
      f = g > k ? 1 : g < k ? -1 : 0;
    }
    return f;
  }
  function Iz(a, b) {
    if (jk) {
      var c = function (d) {
        var e = b.isBlocked(gf[d]) ? "3" : "4",
          f = yf(gf[d][He.nk], b, []);
        f && f.length && c(f[0].index);
        Az(b.id, gf[d], e);
        var g = yf(gf[d][He.tk], b, []);
        g && g.length && c(g[0].index);
      };
      c(a);
    }
  }
  var Mz = !1,
    Sy;
  function Nz() {
    Sy || (Sy = new Ry());
    return Sy;
  }
  function Oz(a) {
    var b = a["gtm.uniqueEventId"],
      c = a["gtm.priorityId"],
      d = a.event;
    if (T(100)) {
    }
    if (d === "gtm.js") {
      if (Mz) return !1;
      Mz = !0;
    }
    var e = !1,
      f = Dy(),
      g = Sc(a, null);
    if (
      !f.every(function (u) {
        return u({ originalEventData: g });
      })
    ) {
      if (d !== "gtm.js" && d !== "gtm.init" && d !== "gtm.init_consent")
        return !1;
      e = !0;
    }
    pz(b, d);
    var k = a.eventCallback,
      m = a.eventTimeout,
      n = {
        id: b,
        priorityId: c,
        name: d,
        isBlocked: hA(g, e),
        Gn: [],
        logMacroError: function () {
          U(6);
          Jl(0);
        },
        cachedModelValues: iA(),
        xc: new Wy(function () {
          if (T(100)) {
          }
          k && k.apply(k, Array.prototype.slice.call(arguments, 0));
        }, m),
        originalEventData: g,
      };
    T(116) && jk && (n.reportMacroDiscrepancy = uz);
    T(100) && Ix(n.id, n.name);
    var p = Ff(n);
    T(100) && Jx(n.id, n.name);
    e && (p = jA(p));
    if (T(100)) {
    }
    var q = Kz(p, n),
      r = Lz(a, n.xc);
    az(n.xc);
    (d !== "gtm.js" && d !== "gtm.sync") || gz();
    return kA(p, q) || r;
  }
  function iA() {
    var a = {};
    a.event = Hj("event", 1);
    a.ecommerce = Hj("ecommerce", 1);
    a.gtm = Hj("gtm");
    a.eventModel = Hj("eventModel");
    return a;
  }
  function hA(a, b) {
    var c = Ky();
    return function (d) {
      if (c(d)) return !0;
      var e = d && d[He.wa];
      if (!e || typeof e !== "string") return !0;
      e = e.replace(/^_*/, "");
      var f,
        g = Fk();
      f = By().getRestrictions(0, g);
      var k = a;
      b &&
        ((k = Sc(a, null)), (k["gtm.uniqueEventId"] = Number.MAX_SAFE_INTEGER));
      for (var m = pj[e] || [], n = l(f), p = n.next(); !p.done; p = n.next()) {
        var q = p.value;
        try {
          if (!q({ entityId: e, securityGroups: m, originalEventData: k }))
            return !0;
        } catch (r) {
          return !0;
        }
      }
      return !1;
    };
  }
  function jA(a) {
    for (var b = [], c = 0; c < a.length; c++)
      if (a[c]) {
        var d = String(gf[c][He.wa]);
        if (aj[d] || gf[c][He.Pl] !== void 0 || zy(d, 2)) b[c] = !0;
      }
    return b;
  }
  function kA(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++)
      if (a[c] && gf[c] && !bj[String(gf[c][He.wa])]) return !0;
    return !1;
  }
  function lA() {
    T(6) &&
      Nz().addListener("gtm.init", function (a, b) {
        tj.P = !0;
        dl();
        b();
      });
  }
  var mA = !1,
    nA = 0,
    oA = [];
  function pA(a) {
    if (!mA) {
      var b = F.createEventObject,
        c = F.readyState === "complete",
        d = F.readyState === "interactive";
      if (!a || a.type !== "readystatechange" || c || (!b && d)) {
        mA = !0;
        for (var e = 0; e < oA.length; e++) G(oA[e]);
      }
      oA.push = function () {
        for (var f = za.apply(0, arguments), g = 0; g < f.length; g++) G(f[g]);
        return 0;
      };
    }
  }
  function qA() {
    if (!mA && nA < 140) {
      nA++;
      try {
        var a, b;
        (b = (a = F.documentElement).doScroll) == null || b.call(a, "left");
        pA();
      } catch (c) {
        A.setTimeout(qA, 50);
      }
    }
  }
  function rA(a) {
    mA ? a() : oA.push(a);
  }
  var sA = 0;
  function tA(a, b) {
    return arguments.length === 1 ? uA("set", a) : uA("set", a, b);
  }
  function vA(a, b) {
    return arguments.length === 1 ? uA("config", a) : uA("config", a, b);
  }
  function wA(a, b, c) {
    c = c || {};
    c[P.g.rc] = a;
    return uA("event", b, c);
  }
  function uA() {
    return arguments;
  }
  var xA = function () {
    this.messages = [];
    this.j = [];
  };
  xA.prototype.enqueue = function (a, b, c) {
    var d = this.messages.length + 1;
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    var e = Object.assign({}, c, {
        eventId: b,
        priorityId: d,
        fromContainerExecution: !0,
      }),
      f = { message: a, notBeforeEventId: b, priorityId: d, messageContext: e };
    this.messages.push(f);
    for (var g = 0; g < this.j.length; g++)
      try {
        this.j[g](f);
      } catch (k) {}
  };
  xA.prototype.listen = function (a) {
    this.j.push(a);
  };
  xA.prototype.get = function () {
    for (var a = {}, b = 0; b < this.messages.length; b++) {
      var c = this.messages[b],
        d = a[c.notBeforeEventId];
      d || ((d = []), (a[c.notBeforeEventId] = d));
      d.push(c);
    }
    return a;
  };
  xA.prototype.prune = function (a) {
    for (var b = [], c = [], d = 0; d < this.messages.length; d++) {
      var e = this.messages[d];
      e.notBeforeEventId === a ? b.push(e) : c.push(e);
    }
    this.messages = c;
    return b;
  };
  function yA(a, b, c) {
    c.eventMetadata = c.eventMetadata || {};
    c.eventMetadata.source_canonical_id = Of.canonicalContainerId;
    zA().enqueue(a, b, c);
  }
  function AA() {
    var a = BA;
    zA().listen(a);
  }
  function zA() {
    var a = $i.mb;
    a || ((a = new xA()), ($i.mb = a));
    return a;
  }
  var CA = {},
    DA = {};
  function EA(a, b) {
    for (
      var c = [], d = [], e = {}, f = 0;
      f < a.length;
      e = { si: void 0, Zh: void 0 }, f++
    ) {
      var g = a[f];
      if (g.indexOf("-") >= 0) {
        if (((e.si = Lm(g, b)), e.si)) {
          var k = Bk();
          cb(
            k,
            (function (r) {
              return function (u) {
                return r.si.destinationId === u;
              };
            })(e)
          )
            ? c.push(g)
            : d.push(g);
        }
      } else {
        var m = CA[g] || [];
        e.Zh = {};
        m.forEach(
          (function (r) {
            return function (u) {
              r.Zh[u] = !0;
            };
          })(e)
        );
        for (var n = xk(), p = 0; p < n.length; p++)
          if (e.Zh[n[p]]) {
            c = c.concat(Ak());
            break;
          }
        var q = DA[g] || [];
        q.length && (c = c.concat(q));
      }
    }
    return { fn: c, jn: d };
  }
  function FA(a) {
    hb(CA, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  function GA(a) {
    hb(DA, function (b, c) {
      var d = c.indexOf(a);
      d >= 0 && c.splice(d, 1);
    });
  }
  var HA = "HA GF G UA AW DC MC".split(" "),
    IA = !1,
    JA = !1;
  function KA(a, b) {
    a.hasOwnProperty("gtm.uniqueEventId") ||
      Object.defineProperty(a, "gtm.uniqueEventId", { value: qj() });
    b.eventId = a["gtm.uniqueEventId"];
    b.priorityId = a["gtm.priorityId"];
    return { eventId: b.eventId, priorityId: b.priorityId };
  }
  var LA = void 0,
    MA = void 0;
  function NA(a, b, c) {
    var d = Sc(a, null);
    d.eventId = void 0;
    d.inheritParentConfig = void 0;
    Object.keys(b).some(function (f) {
      return b[f] !== void 0;
    }) && U(136);
    var e = Sc(b, null);
    Sc(c, e);
    yA(vA(xk()[0], e), a.eventId, d);
  }
  function OA(a) {
    for (var b = l([P.g.Fd, P.g.Vb]), c = b.next(); !c.done; c = b.next()) {
      var d = c.value,
        e = (a && a[d]) || Vn.j[d];
      if (e) return e;
    }
  }
  var PA = {
      config: function (a, b) {
        var c = KA(a, b);
        if (!(a.length < 2) && z(a[1])) {
          var d = {};
          if (a.length > 2) {
            if ((a[2] !== void 0 && !Rc(a[2])) || a.length > 3) return;
            d = a[2];
          }
          var e = Lm(a[1], b.isGtmEvent);
          if (e) {
            var f, g, k;
            a: {
              if (!tk.Le) {
                var m = Hk(Ik());
                if (Tk(m)) {
                  var n = m.parent,
                    p = n.isDestination;
                  k = { pn: Hk(n), dn: p };
                  break a;
                }
              }
              k = void 0;
            }
            var q = k;
            q && ((f = q.pn), (g = q.dn));
            pz(c.eventId, "gtag.config");
            var r = e.destinationId,
              u = e.id !== r;
            if (u ? Ak().indexOf(r) === -1 : xk().indexOf(r) === -1) {
              if (!b.inheritParentConfig && !d[P.g.Sb]) {
                var v = OA(d);
                if (u)
                  Qy(r, v, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
                else if (f !== void 0 && f.containers.indexOf(r) !== -1) {
                  var t = d;
                  LA ? NA(b, t, LA) : MA || (MA = Sc(t, null));
                } else
                  Ny(r, v, !0, {
                    source: 2,
                    fromContainerExecution: b.fromContainerExecution,
                  });
              }
            } else {
              if (f && (U(128), g && U(130), b.inheritParentConfig)) {
                var w;
                var x = d;
                MA
                  ? (NA(b, MA, x), (w = !1))
                  : ((!x[P.g.uc] && dj && LA) || (LA = Sc(x, null)), (w = !0));
                w && f.containers && f.containers.join(",");
                return;
              }
              !kk || (!T(112) && uk) || (sA === 1 && (Yk.mcc = !1), (sA = 2));
              T(56) || (Cl = !0);
              if (dj && !u && !d[P.g.uc]) {
                var y = JA;
                JA = !0;
                if (y) return;
              }
              IA || U(43);
              if (!b.noTargetGroup)
                if (u) {
                  GA(e.id);
                  var B = e.id,
                    C = d[P.g.De] || "default";
                  C = String(C).split(",");
                  for (var D = 0; D < C.length; D++) {
                    var E = DA[C[D]] || [];
                    DA[C[D]] = E;
                    E.indexOf(B) < 0 && E.push(B);
                  }
                } else {
                  FA(e.id);
                  var K = e.id,
                    L = d[P.g.De] || "default";
                  L = L.toString().split(",");
                  for (var Q = 0; Q < L.length; Q++) {
                    var I = CA[L[Q]] || [];
                    CA[L[Q]] = I;
                    I.indexOf(K) < 0 && I.push(K);
                  }
                }
              delete d[P.g.De];
              var V = b.eventMetadata || {};
              V.hasOwnProperty("is_external_event") ||
                (V.is_external_event = !b.fromContainerExecution);
              b.eventMetadata = V;
              delete d[P.g.yd];
              for (var da = u ? [e.id] : Ak(), ea = 0; ea < da.length; ea++) {
                var aa = d,
                  O = da[ea],
                  oa = Sc(b, null),
                  ma = Lm(O, oa.isGtmEvent);
                ma && Vn.push("config", [aa], ma, oa);
              }
            }
          }
        }
      },
      consent: function (a, b) {
        if (a.length === 3) {
          U(39);
          var c = KA(a, b),
            d = a[1],
            e;
          if (T(134)) {
            var f = {},
              g = st(a[2]),
              k;
            for (k in g)
              if (g.hasOwnProperty(k)) {
                var m = g[k];
                f[k] =
                  k === P.g.de
                    ? Array.isArray(m)
                      ? NaN
                      : Number(m)
                    : k === P.g.sb
                    ? (Array.isArray(m) ? m : [m]).map(tt)
                    : ut(m);
              }
            e = f;
          } else e = a[2];
          var n = e;
          b.fromContainerExecution || (n[P.g.O] && U(139), n[P.g.ya] && U(140));
          d === "default"
            ? om(n)
            : d === "update"
            ? qm(n, c)
            : d === "declare" && b.fromContainerExecution && nm(n);
        }
      },
      event: function (a, b) {
        var c = a[1];
        if (!(a.length < 2) && z(c)) {
          var d = void 0;
          if (a.length > 2) {
            if ((!Rc(a[2]) && a[2] !== void 0) || a.length > 3) return;
            d = a[2];
          }
          var e = d,
            f = {},
            g = ((f.event = c), f);
          e &&
            ((g.eventModel = Sc(e, null)),
            e[P.g.yd] && (g.eventCallback = e[P.g.yd]),
            e[P.g.Ae] && (g.eventTimeout = e[P.g.Ae]));
          var k = KA(a, b),
            m = k.eventId,
            n = k.priorityId;
          g["gtm.uniqueEventId"] = m;
          n && (g["gtm.priorityId"] = n);
          if (c === "optimize.callback")
            return (g.eventModel = g.eventModel || {}), g;
          var p;
          var q = d,
            r = q && q[P.g.rc];
          r === void 0 &&
            ((r = Cj(P.g.rc, 2)), r === void 0 && (r = "default"));
          if (z(r) || Array.isArray(r)) {
            var u;
            u = b.isGtmEvent
              ? z(r)
                ? [r]
                : r
              : r.toString().replace(/\s+/g, "").split(",");
            var v = EA(u, b.isGtmEvent),
              t = v.fn,
              w = v.jn;
            if (w.length)
              for (var x = OA(q), y = 0; y < w.length; y++) {
                var B = Lm(w[y], b.isGtmEvent);
                if (B) {
                  var C = B.destinationId,
                    D;
                  if ((D = T(137))) {
                    var E;
                    if (!(E = tb(C, "siloed_"))) {
                      var K = B.destinationId,
                        L = qk().destination[K];
                      E = !!L && L.state === 0;
                    }
                    D = E;
                  }
                  D ||
                    Qy(C, x, {
                      source: 3,
                      fromContainerExecution: b.fromContainerExecution,
                    });
                }
              }
            p = Mm(t, b.isGtmEvent);
          } else p = void 0;
          var Q = p;
          if (Q) {
            pz(m, c);
            for (var I = [], V = 0; V < Q.length; V++) {
              var da = Q[V],
                ea = Sc(b, null);
              if (HA.indexOf(Jk(da.prefix)) !== -1) {
                var aa = Sc(d, null),
                  O = ea.eventMetadata || {};
                O.hasOwnProperty("is_external_event") ||
                  (O.is_external_event = !ea.fromContainerExecution);
                ea.eventMetadata = O;
                delete aa[P.g.yd];
                Wn(c, aa, da.id, ea);
                kk &&
                  (T(112) ? O.source_canonical_id === void 0 : !uk) &&
                  sA === 0 &&
                  ($k("mcc", "1"), (sA = 1));
                T(56) || (Cl = !0);
              }
              I.push(da.id);
            }
            g.eventModel = g.eventModel || {};
            Q.length > 0
              ? (g.eventModel[P.g.rc] = I.join())
              : delete g.eventModel[P.g.rc];
            IA || U(43);
            b.noGtmEvent === void 0 &&
              b.eventMetadata &&
              b.eventMetadata.syn_or_mod &&
              (b.noGtmEvent = !0);
            g.eventModel[P.g.qc] && (b.noGtmEvent = !0);
            return b.noGtmEvent ? void 0 : g;
          }
        }
      },
      get: function (a, b) {
        U(53);
        if (a.length === 4 && z(a[1]) && z(a[2]) && $a(a[3])) {
          var c = Lm(a[1], b.isGtmEvent),
            d = String(a[2]),
            e = a[3];
          if (c) {
            IA || U(43);
            var f = OA();
            if (
              !cb(Ak(), function (k) {
                return c.destinationId === k;
              })
            )
              Qy(c.destinationId, f, {
                source: 4,
                fromContainerExecution: b.fromContainerExecution,
              });
            else if (HA.indexOf(Jk(c.prefix)) !== -1) {
              T(56) || (Cl = !0);
              KA(a, b);
              var g = {};
              Sc(((g[P.g.Bb] = d), (g[P.g.Qb] = e), g), null);
              Xn(
                d,
                function (k) {
                  G(function () {
                    e(k);
                  });
                },
                c.id,
                b
              );
            }
          }
        }
      },
      js: function (a, b) {
        if (a.length === 2 && a[1].getTime) {
          IA = !0;
          var c = KA(a, b),
            d = c.eventId,
            e = c.priorityId,
            f = {};
          return (
            (f.event = "gtm.js"),
            (f["gtm.start"] = a[1].getTime()),
            (f["gtm.uniqueEventId"] = d),
            (f["gtm.priorityId"] = e),
            f
          );
        }
      },
      policy: function (a) {
        if (a.length === 3 && z(a[1]) && $a(a[2])) {
          if ((Lf(a[1], a[2]), U(74), a[1] === "all")) {
            U(75);
            var b = !1;
            try {
              b = a[2](Ck(), "unknown", {});
            } catch (c) {}
            b || U(76);
          }
        } else U(73);
      },
      set: function (a, b) {
        var c = void 0;
        a.length === 2 && Rc(a[1])
          ? (c = Sc(a[1], null))
          : a.length === 3 &&
            z(a[1]) &&
            ((c = {}),
            Rc(a[2]) || Array.isArray(a[2])
              ? (c[a[1]] = Sc(a[2], null))
              : (c[a[1]] = a[2]));
        if (c) {
          var d = KA(a, b),
            e = d.eventId,
            f = d.priorityId;
          Sc(c, null);
          var g = Sc(c, null);
          Vn.push("set", [g], void 0, b);
          c["gtm.uniqueEventId"] = e;
          f && (c["gtm.priorityId"] = f);
          delete c.event;
          b.overwriteModelFields = !0;
          return c;
        }
      },
    },
    QA = { policy: !0 };
  var SA = function (a) {
    if (RA(a)) return a;
    this.value = a;
  };
  SA.prototype.getUntrustedMessageValue = function () {
    return this.value;
  };
  var RA = function (a) {
    return !a || Oc(a) !== "object" || Rc(a)
      ? !1
      : "getUntrustedMessageValue" in a;
  };
  SA.prototype.getUntrustedMessageValue = SA.prototype.getUntrustedMessageValue;
  var TA = !1,
    UA = [];
  function VA() {
    if (!TA) {
      TA = !0;
      for (var a = 0; a < UA.length; a++) G(UA[a]);
    }
  }
  function WA(a) {
    TA ? G(a) : UA.push(a);
  }
  var XA = 0,
    YA = {},
    ZA = [],
    $A = [],
    aB = !1,
    bB = !1;
  function cB(a, b) {
    return (
      a.messageContext.eventId - b.messageContext.eventId ||
      a.messageContext.priorityId - b.messageContext.priorityId
    );
  }
  function dB(a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return eB(a);
  }
  function fB(a, b) {
    if (!ab(b) || b < 0) b = 0;
    var c = $i[Zi.tb],
      d = 0,
      e = !1,
      f = void 0;
    f = A.setTimeout(function () {
      e || ((e = !0), a());
      f = void 0;
    }, b);
    return function () {
      var g = c ? c.subscribers : 1;
      ++d === g &&
        (f && (A.clearTimeout(f), (f = void 0)), e || (a(), (e = !0)));
    };
  }
  function gB(a, b) {
    var c = a._clear || b.overwriteModelFields;
    hb(a, function (e, f) {
      e !== "_clear" && (c && Fj(e), Fj(e, f));
    });
    mj || (mj = a["gtm.start"]);
    var d = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    typeof d !== "number" &&
      ((d = qj()), (a["gtm.uniqueEventId"] = d), Fj("gtm.uniqueEventId", d));
    return Oz(a);
  }
  function hB(a) {
    if (a == null || typeof a !== "object") return !1;
    if (a.event) return !0;
    if (ib(a)) {
      var b = a[0];
      if (b === "config" || b === "event" || b === "js" || b === "get")
        return !0;
    }
    return !1;
  }
  function iB() {
    var a;
    if ($A.length) a = $A.shift();
    else if (ZA.length) a = ZA.shift();
    else return;
    var b;
    var c = a;
    if (aB || !hB(c.message)) b = c;
    else {
      aB = !0;
      var d = c.message["gtm.uniqueEventId"];
      typeof d !== "number" &&
        (T(105) && (qj(), qj()), (d = c.message["gtm.uniqueEventId"] = qj()));
      var e = {},
        f = {
          message:
            ((e.event = "gtm.init_consent"),
            (e["gtm.uniqueEventId"] = d - 2),
            e),
          messageContext: { eventId: d - 2 },
        },
        g = {},
        k = {
          message:
            ((g.event = "gtm.init"), (g["gtm.uniqueEventId"] = d - 1), g),
          messageContext: { eventId: d - 1 },
        };
      ZA.unshift(k, c);
      T(6) || (kk && dl());
      b = f;
    }
    return b;
  }
  function jB() {
    for (var a = !1, b; !bB && (b = iB()); ) {
      bB = !0;
      delete zj.eventModel;
      Bj();
      var c = b,
        d = c.message,
        e = c.messageContext;
      if (d == null) bB = !1;
      else {
        e.fromContainerExecution && Gj();
        try {
          if ($a(d))
            try {
              d.call(Dj);
            } catch (v) {}
          else if (Array.isArray(d)) {
            if (z(d[0])) {
              var f = d[0].split("."),
                g = f.pop(),
                k = d.slice(1),
                m = Cj(f.join("."), 2);
              if (m != null)
                try {
                  m[g].apply(m, k);
                } catch (v) {}
            }
          } else {
            var n = void 0;
            if (ib(d))
              a: {
                if (d.length && z(d[0])) {
                  var p = PA[d[0]];
                  if (p && (!e.fromContainerExecution || !QA[d[0]])) {
                    n = p(d, e);
                    break a;
                  }
                }
                n = void 0;
              }
            else n = d;
            n && (a = gB(n, e) || a);
          }
        } finally {
          e.fromContainerExecution && Bj(!0);
          var q = d["gtm.uniqueEventId"];
          if (typeof q === "number") {
            for (var r = YA[String(q)] || [], u = 0; u < r.length; u++)
              $A.push(kB(r[u]));
            r.length && $A.sort(cB);
            delete YA[String(q)];
            q > XA && (XA = q);
          }
          bB = !1;
        }
      }
    }
    return !a;
  }
  function lB() {
    if (T(100)) {
      var a = !tj.H;
    }
    var b = jB();
    if (T(100)) {
    }
    try {
      var c = Ck(),
        d = A[Zi.tb].hide;
      if (d && d[c] !== void 0 && d.end) {
        d[c] = !1;
        var e = !0,
          f;
        for (f in d)
          if (d.hasOwnProperty(f) && d[f] === !0) {
            e = !1;
            break;
          }
        e && (d.end(), (d.end = null));
      }
    } catch (g) {}
    return b;
  }
  function BA(a) {
    if (XA < a.notBeforeEventId) {
      var b = String(a.notBeforeEventId);
      YA[b] = YA[b] || [];
      YA[b].push(a);
    } else
      $A.push(kB(a)),
        $A.sort(cB),
        G(function () {
          bB || jB();
        });
  }
  function kB(a) {
    return { message: a.message, messageContext: a.messageContext };
  }
  function mB() {
    function a(f) {
      var g = {};
      if (RA(f)) {
        var k = f;
        f = RA(k) ? k.getUntrustedMessageValue() : void 0;
        g.fromContainerExecution = !0;
      }
      return { message: f, messageContext: g };
    }
    var b = hc(Zi.tb, []),
      c = ($i[Zi.tb] = $i[Zi.tb] || {});
    c.pruned === !0 && U(83);
    YA = zA().get();
    AA();
    rA(function () {
      if (!c.gtmDom) {
        c.gtmDom = !0;
        var f = {};
        b.push(((f.event = "gtm.dom"), f));
      }
    });
    WA(function () {
      if (!c.gtmLoad) {
        c.gtmLoad = !0;
        var f = {};
        b.push(((f.event = "gtm.load"), f));
      }
    });
    c.subscribers = (c.subscribers || 0) + 1;
    var d = b.push;
    b.push = function () {
      var f;
      if ($i.SANDBOXED_JS_SEMAPHORE > 0) {
        f = [];
        for (var g = 0; g < arguments.length; g++) f[g] = new SA(arguments[g]);
      } else f = [].slice.call(arguments, 0);
      var k = f.map(function (q) {
        return a(q);
      });
      ZA.push.apply(ZA, k);
      var m = d.apply(b, f),
        n = Math.max(100, Number("1000") || 300);
      if (this.length > n)
        for (U(4), c.pruned = !0; this.length > n; ) this.shift();
      var p = typeof m !== "boolean" || m;
      return jB() && p;
    };
    var e = b.slice(0).map(function (f) {
      return a(f);
    });
    ZA.push.apply(ZA, e);
    if (!tj.H) {
      if (T(100)) {
      }
      G(lB);
    }
  }
  var eB = function (a) {
    return A[Zi.tb].push(a);
  };
  var nB = /^(https?:)?\/\//;
  function IB() {}
  var JB = function () {};
  JB.prototype.toString = function () {
    return "undefined";
  };
  var KB = new JB();
  function RB(a, b) {
    function c(g) {
      var k = Vj(g),
        m = Pj(k, "protocol"),
        n = Pj(k, "host", !0),
        p = Pj(k, "port"),
        q = Pj(k, "path").toLowerCase().replace(/\/$/, "");
      if (
        m === void 0 ||
        (m === "http" && p === "80") ||
        (m === "https" && p === "443")
      )
        (m = "web"), (p = "default");
      return [m, n, p, q];
    }
    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
      if (d[f] !== e[f]) return !1;
    return !0;
  }
  function SB(a) {
    return TB(a) ? 1 : 0;
  }
  function TB(a) {
    var b = a.arg0,
      c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = Sc(a, {});
        Sc({ arg1: c[d], any_of: void 0 }, e);
        if (SB(e)) return !0;
      }
      return !1;
    }
    switch (a["function"]) {
      case "_cn":
        return ng(b, c);
      case "_css":
        var f;
        a: {
          if (b)
            try {
              for (var g = 0; g < jg.length; g++) {
                var k = jg[g];
                if (b[k] != null) {
                  f = b[k](c);
                  break a;
                }
              }
            } catch (m) {}
          f = !1;
        }
        return f;
      case "_ew":
        return kg(b, c);
      case "_eq":
        return og(b, c);
      case "_ge":
        return pg(b, c);
      case "_gt":
        return rg(b, c);
      case "_lc":
        return String(b).split(",").indexOf(String(c)) >= 0;
      case "_le":
        return qg(b, c);
      case "_lt":
        return sg(b, c);
      case "_re":
        return mg(b, c, a.ignore_case);
      case "_sw":
        return tg(b, c);
      case "_um":
        return RB(b, c);
    }
    return !1;
  }
  function UB() {
    var a;
    a = a === void 0 ? "" : a;
    var b, c;
    return (
      (b = data) == null ? 0 : (c = b.blob) == null ? 0 : c.hasOwnProperty(1)
    )
      ? String(data.blob[1])
      : a;
  }
  function VB() {
    var a = [
      ["cv", T(141) ? UB() : "2"],
      ["rv", Zi.Dh],
      [
        "tc",
        gf.filter(function (b) {
          return b;
        }).length,
      ],
    ];
    Zi.Oe && a.push(["x", Zi.Oe]);
    uj() && a.push(["tag_exp", uj()]);
    return a;
  }
  var WB = {},
    XB = ((WB[1] = {}), (WB[2] = {}), (WB[3] = {}), (WB[4] = {}), WB);
  function YB(a) {
    switch (a) {
      case "script-src":
      case "script-src-elem":
        return 1;
      case "frame-src":
        return 4;
      case "connect-src":
        return 2;
      case "img-src":
        return 3;
    }
  }
  function ZB() {
    T(53) &&
      kk &&
      A.addEventListener("securitypolicyviolation", function (a) {
        if (a.disposition === "enforce") {
          var b = YB(a.effectiveDirective);
          if (b) {
            var c;
            var d;
            b: {
              try {
                var e = new URL(a.blockedURI);
                d = e.origin + e.pathname;
                break b;
              } catch (g) {}
              d = void 0;
            }
            var f = d;
            c = f ? XB[b][f] : void 0;
            c &&
              ((el[String(c.endpoint)] = !0),
              $k("csp", Object.keys(el).join("~")));
          }
        }
      });
  }
  var $B = {},
    aC = {};
  function bC(a, b) {
    var c = cC(void 0);
    if (jk) {
      var d = String(c) + b;
      $B[a] = $B[a] || [];
      $B[a].push(d);
      aC[a] = aC[a] || [];
      aC[a].push("p" + b);
    }
  }
  function dC(a) {
    var b = a.eventId,
      c = a.ed,
      d = [],
      e = $B[b] || [];
    e.length && d.push(["hf", e.join(".")]);
    var f = aC[b] || [];
    f.length && d.push(["ht", f.join(".")]);
    c && (delete $B[b], delete aC[b]);
    return d;
  }
  function eC() {
    return !1;
  }
  function fC() {
    var a = {};
    return function (b, c, d) {};
  }
  function gC() {
    var a = hC;
    return function (b, c, d) {
      var e = d && d.event;
      (b === "__html" && T(104)) || iC(c);
      var f = tb(b, "__cvt_") ? void 0 : 1,
        g = new Ma();
      hb(c, function (r, u) {
        var v = ed(u, void 0, f);
        v === void 0 && u !== void 0 && U(44);
        g.set(r, v);
      });
      a.j.j.C = Df();
      var k = {
        wk: Sf(b),
        eventId: e == null ? void 0 : e.id,
        priorityId: e !== void 0 ? e.priorityId : void 0,
        Se:
          e !== void 0
            ? function (r) {
                e.xc.Se(r);
              }
            : void 0,
        qb: function () {
          return b;
        },
        log: function () {},
        wm: {
          index: d == null ? void 0 : d.index,
          type: d == null ? void 0 : d.type,
          name: d == null ? void 0 : d.name,
        },
        yn: !!zy(b, 3),
        originalEventData: e == null ? void 0 : e.originalEventData,
      };
      e &&
        e.cachedModelValues &&
        (k.cachedModelValues = {
          gtm: e.cachedModelValues.gtm,
          ecommerce: e.cachedModelValues.ecommerce,
        });
      if (eC()) {
        var m = fC(),
          n,
          p;
        k.Za = {
          Hi: [],
          Te: {},
          Jb: function (r, u, v) {
            u === 1 && (n = r);
            u === 7 && (p = v);
            m(r, u, v);
          },
          yg: nh(),
        };
        k.log = function (r) {
          var u = za.apply(1, arguments);
          n && m(n, 4, { level: r, source: p, message: u });
        };
      }
      var q = Be(a, k, [b, g]);
      a.j.j.C = void 0;
      q instanceof Ba &&
        (q.getType() === "return" ? (q = q.getData()) : (q = void 0));
      return H(q, void 0, f);
    };
  }
  function iC(a) {
    var b = a.gtmOnSuccess,
      c = a.gtmOnFailure;
    $a(b) &&
      (a.gtmOnSuccess = function () {
        G(b);
      });
    $a(c) &&
      (a.gtmOnFailure = function () {
        G(c);
      });
  }
  function jC(a) {}
  jC.F = "internal.addAdsClickIds";
  function kC(a, b) {
    var c = this;
  }
  kC.R = "addConsentListener";
  var lC = !1;
  function mC(a) {
    for (var b = 0; b < a.length; ++b)
      if (lC)
        try {
          a[b]();
        } catch (c) {
          U(77);
        }
      else a[b]();
  }
  function nC(a, b, c) {
    var d = this,
      e;
    return e;
  }
  nC.F = "internal.addDataLayerEventListener";
  function oC(a, b, c) {}
  oC.R = "addDocumentEventListener";
  function pC(a, b, c, d) {}
  pC.R = "addElementEventListener";
  function qC(a) {
    return a.D.j;
  }
  function rC(a) {}
  rC.R = "addEventCallback";
  function HC(a) {}
  HC.F = "internal.addFormAbandonmentListener";
  function IC(a, b, c, d) {}
  IC.F = "internal.addFormData";
  var JC = {},
    KC = [],
    LC = {},
    MC = 0,
    NC = 0;
  function UC(a, b) {}
  UC.F = "internal.addFormInteractionListener";
  function aD(a, b) {}
  aD.F = "internal.addFormSubmitListener";
  function fD(a) {}
  fD.F = "internal.addGaSendListener";
  function gD(a) {
    if (!a) return {};
    var b = a.wm;
    return Uy(b.type, b.index, b.name);
  }
  function hD(a) {
    return a ? { originatingEntity: gD(a) } : {};
  }
  var jD = function (a, b, c) {
      iD().updateZone(a, b, c);
    },
    lD = function (a, b, c, d, e, f) {
      var g = iD();
      c = c && sb(c, kD);
      for (var k = g.createZone(a, c), m = 0; m < b.length; m++) {
        var n = String(b[m]);
        if (g.registerChild(n, Ck(), k)) {
          var p = n,
            q = a,
            r = d,
            u = e,
            v = f;
          if (tb(p, "GTM-"))
            Ny(p, void 0, !1, { source: 1, fromContainerExecution: !0 });
          else {
            var t = uA("js", nb());
            Ny(p, void 0, !0, { source: 1, fromContainerExecution: !0 });
            var w = { originatingEntity: u, inheritParentConfig: v };
            T(146) || yA(t, q, w);
            yA(vA(p, r), q, w);
          }
        }
      }
      return k;
    },
    iD = function () {
      var a = $i.zones;
      a || (a = $i.zones = new mD());
      return a;
    },
    nD = {
      zone: 1,
      cn: 1,
      css: 1,
      ew: 1,
      eq: 1,
      ge: 1,
      gt: 1,
      lc: 1,
      le: 1,
      lt: 1,
      re: 1,
      sw: 1,
      um: 1,
    },
    kD = {
      cl: ["ecl"],
      ecl: ["cl"],
      ehl: ["hl"],
      gaawc: ["googtag"],
      hl: ["ehl"],
    },
    mD = function () {
      this.j = {};
      this.C = {};
      this.H = 0;
    };
  h = mD.prototype;
  h.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c) return !0;
    if (!this.isActive([c.ri], b)) return !1;
    for (var e = 0; e < c.Df.length; e++) if (this.C[c.Df[e]].Rd(b)) return !0;
    return !1;
  };
  h.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a, b))
      return function () {
        return !1;
      };
    for (var c, d = 0; d < a.length && !(c = this.j[a[d]]); d++);
    if (!c)
      return function () {
        return !0;
      };
    for (var e = [], f = 0; f < c.Df.length; f++) {
      var g = this.C[c.Df[f]];
      g.Rd(b) && e.push(g);
    }
    if (!e.length)
      return function () {
        return !1;
      };
    var k = this.getIsAllowedFn([c.ri], b);
    return function (m, n) {
      n = n || [];
      if (!k(m, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].H(m, n)) return !0;
      return !1;
    };
  };
  h.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.j[a[b]];
  };
  h.createZone = function (a, b) {
    var c = String(++this.H);
    this.C[c] = new oD(a, b);
    return c;
  };
  h.updateZone = function (a, b, c) {
    var d = this.C[a];
    d && d.K(b, c);
  };
  h.registerChild = function (a, b, c) {
    var d = this.j[a];
    if ((!d && $i[a]) || (!d && Ok(a)) || (d && d.ri !== b)) return !1;
    if (d) return d.Df.push(c), !1;
    this.j[a] = { ri: b, Df: [c] };
    return !0;
  };
  var oD = function (a, b) {
    this.C = null;
    this.j = [{ eventId: a, Rd: !0 }];
    if (b) {
      this.C = {};
      for (var c = 0; c < b.length; c++) this.C[b[c]] = !0;
    }
  };
  oD.prototype.K = function (a, b) {
    var c = this.j[this.j.length - 1];
    a <= c.eventId || (c.Rd !== b && this.j.push({ eventId: a, Rd: b }));
  };
  oD.prototype.Rd = function (a) {
    for (var b = this.j.length - 1; b >= 0; b--)
      if (this.j[b].eventId <= a) return this.j[b].Rd;
    return !1;
  };
  oD.prototype.H = function (a, b) {
    b = b || [];
    if (!this.C || nD[a] || this.C[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.C[b[c]]) return !0;
    return !1;
  };
  function pD(a) {
    var b = $i.zones;
    return b
      ? b.getIsAllowedFn(xk(), a)
      : function () {
          return !0;
        };
  }
  function qD() {
    Cy(Fk(), function (a) {
      var b = a.originalEventData["gtm.uniqueEventId"],
        c = $i.zones;
      return c ? c.isActive(xk(), b) : !0;
    });
    Ay(Fk(), function (a) {
      var b, c;
      b = a.entityId;
      c = a.securityGroups;
      return pD(Number(a.originalEventData["gtm.uniqueEventId"]))(b, c);
    });
  }
  var rD = function (a, b) {
    this.tagId = a;
    this.Ve = b;
  };
  function sD(a, b) {
    var c = this,
      d = void 0;
    if (!M(a) || (!Dg(b) && !Fg(b)))
      throw J(this.getName(), ["string", "Object|undefined"], arguments);
    var e = H(b, this.D, 1) || {},
      f = e.firstPartyUrl,
      g = e.onLoad,
      k = e.loadByDestination === !0,
      m = e.isGtmEvent === !0,
      n = e.siloed === !0;
    d = n ? zk(a) : a;
    mC([
      function () {
        N(c, "load_google_tags", a, f);
      },
    ]);
    if (k) {
      if (Pk(a)) return d;
    } else if (Ok(a)) return d;
    var p = 6,
      q = qC(this);
    m && (p = 7);
    q.qb() === "__zone" && (p = 1);
    var r = { source: p, fromContainerExecution: !0, siloed: n },
      u = function (v) {
        Ay(
          v,
          function (t) {
            for (
              var w = By().getExternalRestrictions(0, Fk()),
                x = l(w),
                y = x.next();
              !y.done;
              y = x.next()
            ) {
              var B = y.value;
              if (!B(t)) return !1;
            }
            return !0;
          },
          !0
        );
        Cy(
          v,
          function (t) {
            for (
              var w = By().getExternalRestrictions(1, Fk()),
                x = l(w),
                y = x.next();
              !y.done;
              y = x.next()
            ) {
              var B = y.value;
              if (!B(t)) return !1;
            }
            return !0;
          },
          !0
        );
        g && g(new rD(a, v));
      };
    k ? Qy(a, f, r, u) : Ny(a, f, !tb(a, "GTM-"), r, u);
    g &&
      q.qb() === "__zone" &&
      lD(Number.MIN_SAFE_INTEGER, [a], null, {}, gD(qC(this)));
    return d;
  }
  sD.F = "internal.loadGoogleTag";
  function tD(a) {
    return new Xc("", function (b) {
      var c = this.evaluate(b);
      if (c instanceof Xc)
        return new Xc("", function () {
          var d = za.apply(0, arguments),
            e = this,
            f = Sc(qC(this), null);
          f.eventId = a.eventId;
          f.priorityId = a.priorityId;
          f.originalEventData = a.originalEventData;
          var g = d.map(function (m) {
              return e.evaluate(m);
            }),
            k = Ia(this.D);
          k.j = f;
          return c.ib.apply(c, [k].concat(ua(g)));
        });
    });
  }
  function uD(a, b, c) {
    var d = this;
  }
  uD.F = "internal.addGoogleTagRestriction";
  var vD = {},
    wD = [];
  function DD(a, b) {}
  DD.F = "internal.addHistoryChangeListener";
  function ED(a, b, c) {}
  ED.R = "addWindowEventListener";
  function FD(a, b) {
    return !0;
  }
  FD.R = "aliasInWindow";
  function GD(a, b, c) {}
  GD.F = "internal.appendRemoteConfigParameter";
  function HD(a) {
    var b;
    return b;
  }
  HD.R = "callInWindow";
  function ID(a) {}
  ID.R = "callLater";
  function JD(a) {}
  JD.F = "callOnDomReady";
  function KD(a) {}
  KD.F = "callOnWindowLoad";
  function LD(a, b) {
    var c;
    return c;
  }
  LD.F = "internal.computeGtmParameter";
  function MD(a, b) {
    var c = this;
  }
  MD.F = "internal.consentScheduleFirstTry";
  function ND(a, b) {
    var c = this;
  }
  ND.F = "internal.consentScheduleRetry";
  function OD(a) {
    var b;
    return b;
  }
  OD.F = "internal.copyFromCrossContainerData";
  function PD(a, b) {
    var c;
    var d = ed(c, this.D, tb(qC(this).qb(), "__cvt_") ? 2 : 1);
    d === void 0 && c !== void 0 && U(45);
    return d;
  }
  PD.R = "copyFromDataLayer";
  function QD(a) {
    var b = void 0;
    return b;
  }
  QD.F = "internal.copyFromDataLayerCache";
  function RD(a) {
    var b;
    return b;
  }
  RD.R = "copyFromWindow";
  function SD(a) {
    var b = void 0;
    return ed(b, this.D, 1);
  }
  SD.F = "internal.copyKeyFromWindow";
  var TD = function (a, b, c) {
    this.eventName = b;
    this.m = c;
    this.j = {};
    this.isAborted = !1;
    this.target = a;
    this.metadata = Sc(c.eventMetadata || {}, {});
  };
  TD.prototype.copyToHitData = function (a, b, c) {
    var d = W(this.m, a);
    d === void 0 && (d = b);
    if (d !== void 0 && c !== void 0 && z(d) && T(91))
      try {
        d = c(d);
      } catch (e) {}
    d !== void 0 && (this.j[a] = d);
  };
  var ev = function (a, b, c) {
    var d = a.target.destinationId;
    T(136) && !uk && (d = Jk(d));
    var e = Tt(d);
    return e && e[b] !== void 0 ? e[b] : c;
  };
  function UD(a, b) {
    var c;
    return c;
  }
  UD.F = "internal.copyPreHit";
  function VD(a, b) {
    var c = null;
    if (!M(a) || !M(b))
      throw J(this.getName(), ["string", "string"], arguments);
    N(this, "access_globals", "readwrite", a);
    N(this, "access_globals", "readwrite", b);
    var d = [A, F],
      e = a.split("."),
      f = vb(e, d),
      g = e[e.length - 1];
    if (f === void 0) throw Error("Path " + a + " does not exist.");
    var k = f[g];
    if (k) return $a(k) ? ed(k, this.D, 2) : null;
    var m;
    k = function () {
      if (!$a(m.push))
        throw Error("Object at " + b + " in window is not an array.");
      m.push.call(m, arguments);
    };
    f[g] = k;
    var n = b.split("."),
      p = vb(n, d),
      q = n[n.length - 1];
    if (p === void 0) throw Error("Path " + n + " does not exist.");
    m = p[q];
    m === void 0 && ((m = []), (p[q] = m));
    c = function () {
      k.apply(k, Array.prototype.slice.call(arguments, 0));
    };
    return ed(c, this.D, 2);
  }
  VD.R = "createArgumentsQueue";
  function WD(a) {
    return ed(
      function (c) {
        var d = cz();
        if (typeof c === "function")
          d(function () {
            c(function (f, g, k) {
              var m = cz(),
                n = m && m.getByName && m.getByName(f);
              return new A.gaplugins.Linker(n).decorate(g, k);
            });
          });
        else if (Array.isArray(c)) {
          var e = String(c[0]).split(".");
          b[e.length === 1 ? e[0] : e[1]] && d.apply(null, c);
        } else if (c === "isLoaded") return !!d.loaded;
      },
      this.D,
      1
    );
  }
  WD.F = "internal.createGaCommandQueue";
  function XD(a) {
    return ed(
      function () {
        if (!$a(e.push))
          throw Error("Object at " + a + " in window is not an array.");
        e.push.apply(e, Array.prototype.slice.call(arguments, 0));
      },
      this.D,
      tb(qC(this).qb(), "__cvt_") ? 2 : 1
    );
  }
  XD.R = "createQueue";
  function YD(a, b) {
    var c = null;
    return c;
  }
  YD.F = "internal.createRegex";
  function ZD() {
    var a = {};
    return a;
  }
  function $D(a) {}
  $D.F = "internal.declareConsentState";
  function aE(a) {
    var b = "";
    return b;
  }
  aE.F = "internal.decodeUrlHtmlEntities";
  function bE(a, b, c) {
    var d;
    return d;
  }
  bE.F = "internal.decorateUrlWithGaCookies";
  function cE() {}
  cE.F = "internal.deferCustomEvents";
  function dE(a) {
    var b;
    return b;
  }
  dE.F = "internal.detectUserProvidedData";
  function iE(a, b) {
    return f;
  }
  iE.F = "internal.enableAutoEventOnClick";
  function qE(a, b) {
    return p;
  }
  qE.F = "internal.enableAutoEventOnElementVisibility";
  function rE() {}
  rE.F = "internal.enableAutoEventOnError";
  var sE = {},
    tE = [],
    uE = {},
    vE = 0,
    wE = 0;
  function CE(a, b) {
    var c = this;
    return d;
  }
  CE.F = "internal.enableAutoEventOnFormInteraction";
  function HE(a, b) {
    var c = this;
    return f;
  }
  HE.F = "internal.enableAutoEventOnFormSubmit";
  function ME() {
    var a = this;
  }
  ME.F = "internal.enableAutoEventOnGaSend";
  var NE = {},
    OE = [];
  function VE(a, b) {
    var c = this;
    return f;
  }
  VE.F = "internal.enableAutoEventOnHistoryChange";
  var WE = ["http://", "https://", "javascript:", "file://"];
  function $E(a, b) {
    var c = this;
    return k;
  }
  $E.F = "internal.enableAutoEventOnLinkClick";
  var aF, bF;
  function mF(a, b) {
    var c = this;
    return d;
  }
  mF.F = "internal.enableAutoEventOnScroll";
  function nF(a) {
    return function () {
      if (a.limit && a.li >= a.limit) a.wg && A.clearInterval(a.wg);
      else {
        a.li++;
        var b = ob();
        eB({
          event: a.eventName,
          "gtm.timerId": a.wg,
          "gtm.timerEventNumber": a.li,
          "gtm.timerInterval": a.interval,
          "gtm.timerLimit": a.limit,
          "gtm.timerStartTime": a.Sk,
          "gtm.timerCurrentTime": b,
          "gtm.timerElapsedTime": b - a.Sk,
          "gtm.triggers": a.Ln,
        });
      }
    };
  }
  function oF(a, b) {
    return f;
  }
  oF.F = "internal.enableAutoEventOnTimer";
  var Yb = wa(["data-gtm-yt-inspected-"]),
    qF = ["www.youtube.com", "www.youtube-nocookie.com"],
    rF,
    sF = !1;
  function CF(a, b) {
    var c = this;
    return e;
  }
  CF.F = "internal.enableAutoEventOnYouTubeActivity";
  function DF(a, b) {
    if (!M(a) || !Eg(b))
      throw J(this.getName(), ["string", "Object|undefined"], arguments);
    var c = b ? H(b) : {},
      d = a,
      e = !1;
    return e;
  }
  DF.F = "internal.evaluateBooleanExpression";
  var EF;
  function FF(a) {
    var b = !1;
    return b;
  }
  FF.F = "internal.evaluateMatchingRules";
  function mG() {
    return rp(7) && rp(9) && rp(10);
  }
  function hH(a, b, c, d) {}
  hH.F = "internal.executeEventProcessor";
  function iH(a) {
    var b;
    return ed(b, this.D, 1);
  }
  iH.F = "internal.executeJavascriptString";
  function jH(a) {
    var b;
    return b;
  }
  function kH(a) {
    var b = {};
    return ed(b);
  }
  kH.F = "internal.getAdsCookieWritingOptions";
  function lH(a) {
    var b = !1;
    return b;
  }
  lH.F = "internal.getAllowAdPersonalization";
  function mH(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  mH.F = "internal.getAuid";
  var nH = null;
  function oH() {
    var a = new Ma();
    return a;
  }
  oH.R = "getContainerVersion";
  function pH(a, b) {
    b = b === void 0 ? !0 : b;
    var c;
    return c;
  }
  pH.R = "getCookieValues";
  function qH() {
    return Ll();
  }
  qH.F = "internal.getCountryCode";
  function rH() {
    var a = [];
    return ed(a);
  }
  rH.F = "internal.getDestinationIds";
  function sH(a) {
    var b = new Ma();
    return b;
  }
  sH.F = "internal.getDeveloperIds";
  function tH(a, b) {
    var c = null;
    return c;
  }
  tH.F = "internal.getElementAttribute";
  function uH(a) {
    var b = null;
    return b;
  }
  uH.F = "internal.getElementById";
  function vH(a) {
    var b = "";
    return b;
  }
  vH.F = "internal.getElementInnerText";
  function wH(a, b) {
    var c = null;
    return ed(c);
  }
  wH.F = "internal.getElementProperty";
  function xH(a) {
    var b;
    return b;
  }
  xH.F = "internal.getElementValue";
  function yH(a) {
    var b = 0;
    return b;
  }
  yH.F = "internal.getElementVisibilityRatio";
  function zH(a) {
    var b = null;
    return b;
  }
  zH.F = "internal.getElementsByCssSelector";
  function AH(a) {
    var b;
    if (!M(a)) throw J(this.getName(), ["string"], arguments);
    N(this, "read_event_data", a);
    var c;
    a: {
      var d = a,
        e = qC(this).originalEventData;
      if (e) {
        for (
          var f = e, g = {}, k = {}, m = {}, n = [], p = d.split("\\\\"), q = 0;
          q < p.length;
          q++
        ) {
          for (var r = p[q].split("\\."), u = 0; u < r.length; u++) {
            for (var v = r[u].split("."), t = 0; t < v.length; t++)
              n.push(v[t]), t !== v.length - 1 && n.push(m);
            u !== r.length - 1 && n.push(k);
          }
          q !== p.length - 1 && n.push(g);
        }
        for (
          var w = [], x = "", y = l(n), B = y.next();
          !B.done;
          B = y.next()
        ) {
          var C = B.value;
          C === m
            ? (w.push(x), (x = ""))
            : (x = C === g ? x + "\\" : C === k ? x + "." : x + C);
        }
        x && w.push(x);
        for (var D = l(w), E = D.next(); !E.done; E = D.next()) {
          if (f == null) {
            c = void 0;
            break a;
          }
          f = f[E.value];
        }
        c = f;
      } else c = void 0;
    }
    b = ed(c, this.D, 1);
    return b;
  }
  AH.F = "internal.getEventData";
  var BH = {};
  BH.enableAWFledge = T(33);
  BH.enableAdsConversionValidation = T(18);
  BH.enableAdsSupernovaParams = T(29);
  BH.enableAutoPhoneAndAddressDetection = T(31);
  BH.enableAutoPiiOnPhoneAndAddress = T(32);
  BH.enableCachedEcommerceData = T(41);
  BH.enableCloudRecommentationsErrorLogging = T(42);
  BH.enableCloudRecommentationsSchemaIngestion = T(43);
  BH.enableCloudRetailInjectPurchaseMetadata = T(45);
  BH.enableCloudRetailLogging = T(44);
  BH.enableCloudRetailPageCategories = T(46);
  BH.enableConsentDisclosureActivity = T(48);
  BH.enableDCFledge = T(54);
  BH.enableDataLayerSearchExperiment = T(125);
  BH.enableDecodeUri = T(91);
  BH.enableDeferAllEnhancedMeasurement = T(55);
  BH.enableFormSkipValidation = T(85);
  BH.enableGa4OutboundClicksFix = T(94);
  BH.enableGaAdsConversions = T(117);
  BH.enableMerchantRenameForBasketData = T(111);
  BH.enableUnsiloedModeGtmTags = T(138);
  BH.enableUrlDecodeEventUsage = T(140);
  BH.enableZoneConfigInChildContainers = T(143);
  BH.useEnableAutoEventOnFormApis = T(155);
  BH.autoPiiEligible = Ql();
  function CH() {
    return ed(BH);
  }
  CH.F = "internal.getFlags";
  function DH() {
    return new bd(KB);
  }
  DH.F = "internal.getHtmlId";
  function EH(a) {
    var b;
    return b;
  }
  EH.F = "internal.getIframingState";
  function FH(a, b) {
    var c = {};
    return ed(c);
  }
  FH.F = "internal.getLinkerValueFromLocation";
  function GH() {
    var a = new Ma();
    return a;
  }
  GH.F = "internal.getPrivacyStrings";
  function HH(a, b) {
    var c;
    return c;
  }
  HH.F = "internal.getProductSettingsParameter";
  function IH(a, b) {
    var c;
    return c;
  }
  IH.R = "getQueryParameters";
  function JH(a, b) {
    var c;
    return c;
  }
  JH.R = "getReferrerQueryParameters";
  function KH(a) {
    var b = "";
    return b;
  }
  KH.R = "getReferrerUrl";
  function LH() {
    return Ml();
  }
  LH.F = "internal.getRegionCode";
  function MH(a, b) {
    var c;
    return c;
  }
  MH.F = "internal.getRemoteConfigParameter";
  function NH() {
    var a = new Ma();
    a.set("width", 0);
    a.set("height", 0);
    return a;
  }
  NH.F = "internal.getScreenDimensions";
  function OH() {
    var a = "";
    return a;
  }
  OH.F = "internal.getTopSameDomainUrl";
  function PH() {
    var a = "";
    return a;
  }
  PH.F = "internal.getTopWindowUrl";
  function QH(a) {
    var b = "";
    return b;
  }
  QH.R = "getUrl";
  function RH() {
    N(this, "get_user_agent");
    return dc.userAgent;
  }
  RH.F = "internal.getUserAgent";
  function SH() {
    var a;
    return a ? ed(Pv(a)) : a;
  }
  SH.F = "internal.getUserAgentClientHints";
  function $H() {
    return (A.gaGlobal = A.gaGlobal || {});
  }
  function aI() {
    var a = $H();
    a.hid = a.hid || db();
    return a.hid;
  }
  function bI(a, b) {
    var c = $H();
    if (c.vid === void 0 || (b && !c.from_cookie))
      (c.vid = a), (c.from_cookie = b);
  }
  function xI(a) {
    if (hv(a) || wj()) a.j[P.g.Oj] = Ml() || Ll();
    !hv(a) && wj() && (a.j[P.g.Xj] = "::");
  }
  function yI(a) {
    if (T(87) && wj()) {
      kt(a);
      lt(a, "cpf", vt(W(a.m, P.g.Na)));
      var b = W(a.m, P.g.nc);
      lt(a, "cu", b === !0 ? 1 : b === !1 ? 0 : void 0);
      lt(a, "cf", vt(W(a.m, P.g.eb)));
      lt(a, "cd", cq(ut(W(a.m, P.g.Ta)), ut(W(a.m, P.g.zb))));
    }
  }
  var OI = function (a) {
      this.H = a;
      this.j = "";
    },
    PI = function (a, b) {
      a.C = b;
      return a;
    },
    QI = function (a, b) {
      b = a.j + b;
      for (var c = b.indexOf("\n\n"); c !== -1; ) {
        var d = a,
          e;
        a: {
          var f = l(b.substring(0, c).split("\n")),
            g = f.next().value,
            k = f.next().value;
          if (g.indexOf("event: message") === 0 && k.indexOf("data: ") === 0)
            try {
              e = JSON.parse(k.substring(k.indexOf(":") + 1));
              break a;
            } catch (L) {}
          e = void 0;
        }
        var m = d,
          n = e;
        if (n) {
          var p = n.send_pixel,
            q = n.options,
            r = m.H;
          if (p) {
            var u = p || [];
            if (Array.isArray(u))
              for (
                var v = Rc(q) ? q : {}, t = l(u), w = t.next();
                !w.done;
                w = t.next()
              )
                r(w.value, v);
          }
          var x = n.create_iframe,
            y = n.options,
            B = m.C;
          if (x && B) {
            var C = x || [];
            if (Array.isArray(C))
              for (
                var D = Rc(y) ? y : {}, E = l(C), K = E.next();
                !K.done;
                K = E.next()
              )
                B(K.value, D);
          }
        }
        b = b.substring(c + 2);
        c = b.indexOf("\n\n");
      }
      a.j = b;
    };
  function RI(a) {
    var b = a.search;
    return (
      a.protocol +
      "//" +
      a.hostname +
      a.pathname +
      (b ? b + "&richsstsse" : "?richsstsse")
    );
  }
  var EJ = window,
    FJ = document,
    GJ = function (a) {
      var b = EJ._gaUserPrefs;
      if (
        (b && b.ioo && b.ioo()) ||
        FJ.documentElement.hasAttribute("data-google-analytics-opt-out") ||
        (a && EJ["ga-disable-" + a] === !0)
      )
        return !0;
      try {
        var c = EJ.external;
        if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
      } catch (p) {}
      for (
        var d = [], e = String(FJ.cookie).split(";"), f = 0;
        f < e.length;
        f++
      ) {
        var g = e[f].split("="),
          k = g[0].replace(/^\s*|\s*$/g, "");
        if (k && k == "AMP_TOKEN") {
          var m = g
            .slice(1)
            .join("=")
            .replace(/^\s*|\s*$/g, "");
          m && (m = decodeURIComponent(m));
          d.push(m);
        }
      }
      for (var n = 0; n < d.length; n++) if (d[n] == "$OPT_OUT") return !0;
      return FJ.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
  function RJ(a) {
    hb(a, function (c) {
      c.charAt(0) === "_" && delete a[c];
    });
    var b = a[P.g.pb] || {};
    hb(b, function (c) {
      c.charAt(0) === "_" && delete b[c];
    });
  }
  function xK(a, b) {}
  function yK(a, b) {
    var c = function () {};
    return c;
  }
  function zK(a, b, c) {}
  var AK = yK;
  var BK = function (a, b, c) {
    for (var d = 0; d < b.length; d++)
      a.hasOwnProperty(b[d]) && (a[String(b[d])] = c(a[String(b[d])]));
  };
  function CK(a, b, c) {
    var d = this;
    if (!M(a) || !Eg(b) || !Eg(c))
      throw J(
        this.getName(),
        ["string", "Object|undefined", "Object|undefined"],
        arguments
      );
    var e = b ? H(b) : {};
    mC([
      function () {
        return N(d, "configure_google_tags", a, e);
      },
    ]);
    var f = c ? H(c) : {},
      g = qC(this);
    f.originatingEntity = gD(g);
    yA(vA(a, e), g.eventId, f);
  }
  CK.F = "internal.gtagConfig";
  function DK() {
    var a = {};
    return a;
  }
  function FK(a, b) {}
  FK.R = "gtagSet";
  function GK() {
    var a = {};
    return a;
  }
  function HK(a, b) {}
  HK.R = "injectHiddenIframe";
  var cC = (function () {
    var a = 0;
    return function (b) {
      switch (b) {
        case 1:
          a |= 1;
          break;
        case 2:
          a |= 2;
          break;
        case 3:
          a |= 4;
      }
      return a;
    };
  })();
  function IK(a, b, c, d, e) {
    var f = this;
  }
  IK.F = "internal.injectHtml";
  var MK = {};
  function OK(a, b, c, d) {}
  var PK = { dl: 1, id: 1 },
    QK = {};
  function RK(a, b, c, d) {}
  OK.R = "injectScript";
  RK.F = "internal.injectScript";
  function SK(a) {
    var b = !0;
    return b;
  }
  SK.R = "isConsentGranted";
  function TK(a) {
    var b = !1;
    return b;
  }
  TK.F = "internal.isDebugMode";
  function UK() {
    return Ol();
  }
  UK.F = "internal.isDmaRegion";
  function VK(a) {
    var b = !1;
    return b;
  }
  VK.F = "internal.isEntityInfrastructure";
  function WK() {
    var a = !1;
    return a;
  }
  WK.F = "internal.isLandingPage";
  function XK() {
    var a = ih(function (b) {
      qC(this).log("error", b);
    });
    a.R = "JSON";
    return a;
  }
  function YK(a) {
    var b = void 0;
    return ed(b);
  }
  YK.F = "internal.legacyParseUrl";
  function ZK() {
    return !1;
  }
  var $K = {
    getItem: function (a) {
      var b = null;
      return b;
    },
    setItem: function (a, b) {
      return !1;
    },
    removeItem: function (a) {},
  };
  function aL() {
    try {
      N(this, "logging");
    } catch (c) {
      return;
    }
    if (!console) return;
    for (
      var a = Array.prototype.slice.call(arguments, 0), b = 0;
      b < a.length;
      b++
    )
      a[b] = H(a[b], this.D);
    console.log.apply(console, a);
  }
  aL.R = "logToConsole";
  function bL(a, b) {}
  bL.F = "internal.mergeRemoteConfig";
  function cL(a, b, c) {
    c = c === void 0 ? !0 : c;
    var d = [];
    return ed(d);
  }
  cL.F = "internal.parseCookieValuesFromString";
  function dL(a) {
    var b = void 0;
    return b;
  }
  dL.R = "parseUrl";
  function eL(a) {}
  eL.F = "internal.processAsNewEvent";
  function fL(a, b, c) {
    var d;
    return d;
  }
  fL.F = "internal.pushToDataLayer";
  function gL(a) {
    var b = za.apply(1, arguments),
      c = !1;
    return c;
  }
  gL.R = "queryPermission";
  function hL(a) {
    var b = this;
  }
  hL.F = "internal.queueAdsTransmission";
  function iL() {
    var a = "";
    return a;
  }
  iL.R = "readCharacterSet";
  function jL() {
    return Zi.tb;
  }
  jL.F = "internal.readDataLayerName";
  function kL() {
    var a = "";
    return a;
  }
  kL.R = "readTitle";
  function lL(a, b) {
    var c = this;
  }
  lL.F = "internal.registerCcdCallback";
  function mL(a) {
    return !0;
  }
  mL.F = "internal.registerDestination";
  var nL = ["config", "event", "get", "set"];
  function oL(a, b, c) {}
  oL.F = "internal.registerGtagCommandListener";
  function pL(a, b) {
    var c = !1;
    return c;
  }
  pL.F = "internal.removeDataLayerEventListener";
  function qL(a, b) {}
  qL.F = "internal.removeFormData";
  function rL() {}
  rL.R = "resetDataLayer";
  function sL(a, b, c) {
    var d = void 0;
    return d;
  }
  sL.F = "internal.scrubUrlParams";
  function tL(a) {}
  tL.F = "internal.sendAdsHit";
  function uL(a, b, c, d) {}
  uL.F = "internal.sendGtagEvent";
  function vL(a, b, c) {}
  vL.R = "sendPixel";
  function wL(a, b) {}
  wL.F = "internal.setAnchorHref";
  function xL(a) {}
  xL.F = "internal.setContainerConsentDefaults";
  function yL(a, b, c, d) {
    var e = this;
    d = d === void 0 ? !0 : d;
    var f = !1;
    return f;
  }
  yL.R = "setCookie";
  function zL(a) {}
  zL.F = "internal.setCorePlatformServices";
  function AL(a, b) {}
  AL.F = "internal.setDataLayerValue";
  function BL(a) {}
  BL.R = "setDefaultConsentState";
  function CL(a, b) {}
  CL.F = "internal.setDelegatedConsentType";
  function DL(a, b) {}
  DL.F = "internal.setFormAction";
  function EL(a, b, c) {
    c = c === void 0 ? !1 : c;
  }
  EL.F = "internal.setInCrossContainerData";
  function FL(a, b, c) {
    return !1;
  }
  FL.R = "setInWindow";
  function GL(a, b, c) {}
  GL.F = "internal.setProductSettingsParameter";
  function HL(a, b, c) {}
  HL.F = "internal.setRemoteConfigParameter";
  var IL = { unspecified: 0, limited: 1, none: 2 },
    JL = { unspecified: 0, ads: 1, analytics: 2, monitoring: 3 };
  function KL(a, b) {}
  KL.F = "internal.setTransmissionMode";
  function LL(a, b, c, d) {
    var e = this;
  }
  LL.R = "sha256";
  function ML(a, b, c) {}
  ML.F = "internal.sortRemoteConfigParameters";
  function NL(a, b) {
    var c = void 0;
    return c;
  }
  NL.F = "internal.subscribeToCrossContainerData";
  var OL = {},
    PL = {};
  OL.getItem = function (a) {
    var b = null;
    return b;
  };
  OL.setItem = function (a, b) {};
  OL.removeItem = function (a) {};
  OL.clear = function () {};
  OL.R = "templateStorage";
  function QL(a, b) {
    var c = !1;
    return c;
  }
  QL.F = "internal.testRegex";
  function RL(a) {
    var b;
    return b;
  }
  function SL(a) {
    var b;
    return b;
  }
  SL.F = "internal.unsiloId";
  function TL(a, b) {
    var c;
    return c;
  }
  TL.F = "internal.unsubscribeFromCrossContainerData";
  function UL(a) {}
  UL.R = "updateConsentState";
  var VL;
  function WL(a, b, c) {
    VL = VL || new th();
    VL.add(a, b, c);
  }
  function XL(a, b) {
    var c = (VL = VL || new th());
    if (c.j.hasOwnProperty(a))
      throw Error(
        "Attempting to add a private function which already exists: " + a + "."
      );
    if (c.contains(a))
      throw Error(
        "Attempting to add a private function with an existing API name: " +
          a +
          "."
      );
    c.j[a] = $a(b) ? Qg(a, b) : Rg(a, b);
  }
  function YL() {
    return function (a) {
      var b;
      var c = VL;
      if (c.contains(a)) b = c.get(a, this);
      else {
        var d;
        if ((d = c.j.hasOwnProperty(a))) {
          var e = !1,
            f = this.D.j;
          if (f) {
            var g = f.qb();
            if (g) {
              g.indexOf("__cvt_") !== 0 && (e = !0);
            }
          } else e = !0;
          d = e;
        }
        if (d) {
          var k = c.j.hasOwnProperty(a) ? c.j[a] : void 0;
          b = k;
        } else throw Error(a + " is not a valid API name.");
      }
      return b;
    };
  }
  function ZL() {
    var a = function (c) {
        return void XL(c.F, c);
      },
      b = function (c) {
        return void WL(c.R, c);
      };
    b(kC);
    b(rC);
    b(FD);
    b(HD);
    b(ID);
    b(PD);
    b(RD);
    b(VD);
    b(XK());
    b(XD);
    b(oH);
    b(pH);
    b(IH);
    b(JH);
    b(KH);
    b(QH);
    b(FK);
    b(HK);
    b(OK);
    b(SK);
    b(aL);
    b(dL);
    b(gL);
    b(iL);
    b(kL);
    b(vL);
    b(yL);
    b(BL);
    b(FL);
    b(LL);
    b(OL);
    b(UL);
    WL("Math", Vg());
    WL("Object", rh);
    WL("TestHelper", wh());
    WL("assertApi", Sg);
    WL("assertThat", Tg);
    WL("decodeUri", Xg);
    WL("decodeUriComponent", Yg);
    WL("encodeUri", Zg);
    WL("encodeUriComponent", $g);
    WL("fail", eh);
    WL("generateRandom", fh);
    WL("getTimestamp", gh);
    WL("getTimestampMillis", gh);
    WL("getType", hh);
    WL("makeInteger", jh);
    WL("makeNumber", kh);
    WL("makeString", lh);
    WL("makeTableMap", mh);
    WL("mock", ph);
    WL("mockObject", qh);
    WL("fromBase64", jH, !("atob" in A));
    WL("localStorage", $K, !ZK());
    WL("toBase64", RL, !("btoa" in A));
    a(jC);
    a(nC);
    a(IC);
    a(UC);
    a(aD);
    a(fD);
    a(uD);
    a(DD);
    a(GD);
    a(JD);
    a(KD);
    a(LD);
    a(MD);
    a(ND);
    a(OD);
    a(QD);
    a(SD);
    a(UD);
    a(WD);
    a(YD);
    a($D);
    a(aE);
    a(bE);
    a(cE);
    a(dE);
    a(iE);
    a(qE);
    a(rE);
    a(CE);
    a(HE);
    a(ME);
    a(VE);
    a($E);
    a(mF);
    a(oF);
    a(CF);
    a(DF);
    a(FF);
    a(hH);
    a(iH);
    a(kH);
    a(lH);
    a(mH);
    a(qH);
    a(rH);
    a(sH);
    a(tH);
    a(uH);
    a(vH);
    a(wH);
    a(xH);
    a(yH);
    a(zH);
    a(AH);
    a(CH);
    a(DH);
    a(EH);
    a(FH);
    a(GH);
    a(HH);
    a(LH);
    a(MH);
    a(NH);
    a(OH);
    a(PH);
    a(SH);
    a(CK);
    a(IK);
    a(RK);
    a(TK);
    a(UK);
    a(VK);
    a(WK);
    a(YK);
    a(sD);
    a(bL);
    a(cL);
    a(eL);
    a(fL);
    a(hL);
    a(jL);
    a(lL);
    a(mL);
    a(oL);
    a(pL);
    a(qL);
    a(vh);
    a(sL);
    a(tL);
    a(uL);
    a(wL);
    a(xL);
    a(zL);
    a(AL);
    a(CL);
    a(DL);
    a(EL);
    a(GL);
    a(HL);
    a(KL);
    a(ML);
    a(NL);
    a(QL);
    a(SL);
    a(TL);
    XL("internal.CrossContainerSchema", ZD());
    XL("internal.GtagSchema", DK());
    XL("internal.IframingStateSchema", GK());
    return YL();
  }
  var hC;
  function $L() {
    hC.j.j.H = function (a, b, c) {
      $i.SANDBOXED_JS_SEMAPHORE = $i.SANDBOXED_JS_SEMAPHORE || 0;
      $i.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c);
      } finally {
        $i.SANDBOXED_JS_SEMAPHORE--;
      }
    };
  }
  function aM(a) {
    a &&
      hb(a, function (b, c) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d].replace(/^_*/, "");
          pj[e] = pj[e] || [];
          pj[e].push(b);
        }
      });
  }
  function bM(a) {
    yA(tA("developer_id." + a, !0), 0, {});
  }
  var cM = Array.isArray;
  function dM(a, b) {
    return Sc(a, b || null);
  }
  function Y(a) {
    return window.encodeURIComponent(a);
  }
  function eM(a, b, c) {
    qc(a, b, c);
  }
  function fM(a, b) {
    if (!a) return !1;
    var c = Pj(Vj(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        f > 0 && e.charAt(0) !== "." && (f--, (e = "." + e));
        if (f >= 0 && c.indexOf(e, f) === f) return !0;
      }
    }
    return !1;
  }
  function gM(a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
      a[f] &&
        a[f].hasOwnProperty(b) &&
        a[f].hasOwnProperty(c) &&
        ((d[a[f][b]] = a[f][c]), (e = !0));
    return e ? d : null;
  }
  var pM = A.clearTimeout,
    qM = A.setTimeout;
  function rM(a, b, c) {
    if (Ip()) {
      b && G(b);
    } else return mc(a, b, c);
  }
  function sM() {
    return A.location.href;
  }
  function tM(a, b) {
    return Cj(a, b || 2);
  }
  function uM(a, b) {
    A[a] = b;
  }
  function vM(a, b, c) {
    b && (A[a] === void 0 || (c && !A[a])) && (A[a] = b);
    return A[a];
  }
  function wM(a, b) {
    if (Ip()) {
      b && G(b);
    } else oc(a, b);
  }
  var xM = {};
  var Z = { securityGroups: {} };
  (Z.securityGroups.f = ["google"]),
    (Z.__f = function (a) {
      var b = tM("gtm.referrer", 1) || F.referrer;
      return b
        ? a.vtp_component && a.vtp_component != "URL"
          ? Pj(
              Vj(String(b)),
              a.vtp_component,
              a.vtp_stripWww,
              a.vtp_defaultPages,
              a.vtp_queryKey
            )
          : Sj(Vj(String(b)))
        : String(b);
    }),
    (Z.__f.o = "f"),
    (Z.__f.isVendorTemplate = !0),
    (Z.__f.priorityOverride = 0),
    (Z.__f.isInfrastructure = !0),
    (Z.__f.runInSiloedMode = !1);

  (Z.securityGroups.access_globals = ["google"]),
    (function () {
      function a(b, c, d) {
        var e = { key: d, read: !1, write: !1, execute: !1 };
        switch (c) {
          case "read":
            e.read = !0;
            break;
          case "write":
            e.write = !0;
            break;
          case "readwrite":
            e.read = e.write = !0;
            break;
          case "execute":
            e.execute = !0;
            break;
          default:
            throw Error("Invalid " + b + " request " + c);
        }
        return e;
      }
      (function (b) {
        Z.__access_globals = b;
        Z.__access_globals.o = "access_globals";
        Z.__access_globals.isVendorTemplate = !0;
        Z.__access_globals.priorityOverride = 0;
        Z.__access_globals.isInfrastructure = !1;
        Z.__access_globals.runInSiloedMode = !1;
      })(function (b) {
        for (
          var c = b.vtp_keys || [],
            d = b.vtp_createPermissionError,
            e = [],
            f = [],
            g = [],
            k = 0;
          k < c.length;
          k++
        ) {
          var m = c[k],
            n = m.key;
          m.read && e.push(n);
          m.write && f.push(n);
          m.execute && g.push(n);
        }
        return {
          assert: function (p, q, r) {
            if (!z(r)) throw d(p, {}, "Key must be a string.");
            if (q === "read") {
              if (e.indexOf(r) > -1) return;
            } else if (q === "write") {
              if (f.indexOf(r) > -1) return;
            } else if (q === "readwrite") {
              if (f.indexOf(r) > -1 && e.indexOf(r) > -1) return;
            } else if (q === "execute") {
              if (g.indexOf(r) > -1) return;
            } else
              throw d(
                p,
                {},
                "Operation must be either 'read', 'write', or 'execute', was " +
                  q
              );
            throw d(
              p,
              {},
              "Prohibited " + q + " on global variable: " + r + "."
            );
          },
          M: a,
        };
      });
    })();
  (Z.securityGroups.u = ["google"]),
    (function () {
      var a = function (b) {
        return {
          toString: function () {
            return b;
          },
        };
      };
      (function (b) {
        Z.__u = b;
        Z.__u.o = "u";
        Z.__u.isVendorTemplate = !0;
        Z.__u.priorityOverride = 0;
        Z.__u.isInfrastructure = !0;
        Z.__u.runInSiloedMode = !1;
      })(function (b) {
        var c;
        c =
          (c = b.vtp_customUrlSource
            ? b.vtp_customUrlSource
            : tM("gtm.url", 1)) || sM();
        var d = b[a("vtp_component")];
        if (!d || d == "URL") return Sj(Vj(String(c)));
        var e = Vj(String(c)),
          f;
        if (d === "QUERY")
          a: {
            var g = b[a("vtp_multiQueryKeys").toString()],
              k = b[a("vtp_queryKey").toString()] || "",
              m = b[a("vtp_ignoreEmptyQueryParam").toString()],
              n;
            n = g
              ? Array.isArray(k)
                ? k
                : String(k).replace(/\s+/g, "").split(",")
              : [String(k)];
            for (var p = 0; p < n.length; p++) {
              var q = Pj(e, "QUERY", void 0, void 0, n[p]);
              if (q != void 0 && (!m || q !== "")) {
                f = q;
                break a;
              }
            }
            f = void 0;
          }
        else
          f = Pj(
            e,
            d,
            d == "HOST" ? b[a("vtp_stripWww")] : void 0,
            d == "PATH" ? b[a("vtp_defaultPages")] : void 0
          );
        return f;
      });
    })();

  (Z.securityGroups.read_event_data = ["google"]),
    (function () {
      function a(b, c) {
        return { key: c };
      }
      (function (b) {
        Z.__read_event_data = b;
        Z.__read_event_data.o = "read_event_data";
        Z.__read_event_data.isVendorTemplate = !0;
        Z.__read_event_data.priorityOverride = 0;
        Z.__read_event_data.isInfrastructure = !1;
        Z.__read_event_data.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_eventDataAccess,
          d = b.vtp_keyPatterns || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (g != null && !z(g))
              throw e(f, { key: g }, "Key must be a string.");
            if (c !== "any") {
              try {
                if (c === "specific" && g != null && ig(g, d)) return;
              } catch (k) {
                throw e(f, { key: g }, "Invalid key filter.");
              }
              throw e(f, { key: g }, "Prohibited read from event data.");
            }
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.load_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, firstPartyUrl: d };
      }
      (function (b) {
        Z.__load_google_tags = b;
        Z.__load_google_tags.o = "load_google_tags";
        Z.__load_google_tags.isVendorTemplate = !0;
        Z.__load_google_tags.priorityOverride = 0;
        Z.__load_google_tags.isInfrastructure = !1;
        Z.__load_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_allowFirstPartyUrls || !1,
          e = b.vtp_allowedFirstPartyUrls || "specific",
          f = b.vtp_urls || [],
          g = b.vtp_tagIds || [],
          k = b.vtp_createPermissionError;
        return {
          assert: function (m, n, p) {
            (function (q) {
              if (!z(q)) throw k(m, {}, "Tag ID must be a string.");
              if (c !== "any" && (c !== "specific" || g.indexOf(q) === -1))
                throw k(m, {}, "Prohibited Tag ID: " + q + ".");
            })(n);
            (function (q) {
              if (q !== void 0) {
                if (!z(q)) throw k(m, {}, "First party URL must be a string.");
                if (d) {
                  if (e === "any") return;
                  if (e === "specific")
                    try {
                      if (zg(Vj(q), f)) return;
                    } catch (r) {
                      throw k(m, {}, "Invalid first party URL filter.");
                    }
                }
                throw k(m, {}, "Prohibited first party URL: " + q);
              }
            })(p);
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.logging = ["google"]),
    (function () {
      function a() {
        return {};
      }
      (function (b) {
        Z.__logging = b;
        Z.__logging.o = "logging";
        Z.__logging.isVendorTemplate = !0;
        Z.__logging.priorityOverride = 0;
        Z.__logging.isInfrastructure = !1;
        Z.__logging.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_environments || "debug",
          d = b.vtp_createPermissionError;
        return {
          assert: function (e) {
            var f;
            if ((f = c !== "all" && !0)) {
              var g = !1;
              f = !g;
            }
            if (f) throw d(e, {}, "Logging is not enabled in all environments");
          },
          M: a,
        };
      });
    })();

  (Z.securityGroups.configure_google_tags = ["google"]),
    (function () {
      function a(b, c, d) {
        return { tagId: c, configuration: d };
      }
      (function (b) {
        Z.__configure_google_tags = b;
        Z.__configure_google_tags.o = "configure_google_tags";
        Z.__configure_google_tags.isVendorTemplate = !0;
        Z.__configure_google_tags.priorityOverride = 0;
        Z.__configure_google_tags.isInfrastructure = !1;
        Z.__configure_google_tags.runInSiloedMode = !1;
      })(function (b) {
        var c = b.vtp_allowedTagIds || "specific",
          d = b.vtp_tagIds || [],
          e = b.vtp_createPermissionError;
        return {
          assert: function (f, g) {
            if (!z(g)) throw e(f, {}, "Tag ID must be a string.");
            if (c !== "any" && (c !== "specific" || d.indexOf(g) === -1))
              throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
          },
          M: a,
        };
      });
    })();

  var yM = {
    dataLayer: Dj,
    callback: function (a) {
      oj.hasOwnProperty(a) && $a(oj[a]) && oj[a]();
      delete oj[a];
    },
    bootstrap: 0,
  };
  function zM() {
    $i[Ck()] = $i[Ck()] || yM;
    Nk();
    Rk() ||
      hb(Sk(), function (d, e) {
        Qy(d, e.transportUrl, e.context);
        U(92);
      });
    rb(pj, Z.securityGroups);
    var a = Hk(Ik()),
      b,
      c = a == null ? void 0 : (b = a.context) == null ? void 0 : b.source;
    im(c, a == null ? void 0 : a.parent);
    (c !== 2 && c !== 4 && c !== 3) || U(142);
    rf = { hm: If };
  }
  var AM = !1;
  (function (a) {
    function b() {
      n = F.documentElement.getAttribute("data-tag-assistant-present");
      Tl(n) && (m = k.Sj);
    }
    function c() {
      m && gc ? g(m) : a();
    }
    if (!A["__TAGGY_INSTALLED"]) {
      var d = !1;
      if (F.referrer) {
        var e = Vj(F.referrer);
        d = Rj(e, "host") === "cct.google";
      }
      if (!d) {
        var f = Np("googTaggyReferrer");
        d = !(!f.length || !f[0].length);
      }
      d &&
        ((A["__TAGGY_INSTALLED"] = !0),
        mc("https://cct.google/taggy/agent.js"));
    }
    var g = function (v) {
        var t = "GTM",
          w = "GTM";
        fj && ((t = "OGT"), (w = "GTAG"));
        var x = A["google.tagmanager.debugui2.queue"];
        x ||
          ((x = []),
          (A["google.tagmanager.debugui2.queue"] = x),
          mc(
            "https://" +
              Zi.Ff +
              "/debug/bootstrap?id=" +
              Of.ctid +
              "&src=" +
              w +
              "&cond=" +
              v +
              "&gtm=" +
              Kp()
          ));
        var y = {
          messageType: "CONTAINER_STARTING",
          data: {
            scriptSource: gc,
            containerProduct: t,
            debug: !1,
            id: Of.ctid,
            targetRef: { ctid: Of.ctid, isDestination: vk() },
            aliases: yk(),
            destinations: wk(),
          },
        };
        y.data.resume = function () {
          a();
        };
        Zi.il && (y.data.initialPublish = !0);
        x.push(y);
      },
      k = { Gl: 1, Uj: 2, kk: 3, Ui: 4, Sj: 5 };
    k[k.Gl] = "GTM_DEBUG_LEGACY_PARAM";
    k[k.Uj] = "GTM_DEBUG_PARAM";
    k[k.kk] = "REFERRER";
    k[k.Ui] = "COOKIE";
    k[k.Sj] = "EXTENSION_PARAM";
    var m = void 0,
      n = void 0,
      p = Pj(A.location, "query", !1, void 0, "gtm_debug");
    Tl(p) && (m = k.Uj);
    if (!m && F.referrer) {
      var q = Vj(F.referrer);
      Rj(q, "host") === "tagassistant.google.com" && (m = k.kk);
    }
    if (!m) {
      var r = Np("__TAG_ASSISTANT");
      r.length && r[0].length && (m = k.Ui);
    }
    m || b();
    if (!m && Sl(n)) {
      var u = !1;
      rc(
        F,
        "TADebugSignal",
        function () {
          u || ((u = !0), b(), c());
        },
        !1
      );
      A.setTimeout(function () {
        u || ((u = !0), b(), c());
      }, 200);
    } else c();
  })(function () {
    try {
      var a;
      if (!(a = AM)) {
        var b;
        a: {
          for (var c = qk(), d = l(xk()), e = d.next(); !e.done; e = d.next())
            if (c.injectedFirstPartyContainers[e.value]) {
              b = !0;
              break a;
            }
          b = !1;
        }
        a = !b;
      }
      if (a) {
        var f = tj.Fb,
          g = si.Pn;
        f.j = new Set();
        if (g !== "")
          for (var k = l(g.split("~")), m = k.next(); !m.done; m = k.next()) {
            var n = Number(m.value);
            isNaN(n) || f.j.add(n);
          }
        tj.K = "";
        tj.vc = "ad_storage|analytics_storage|ad_user_data|ad_personalization";
        tj.Ha = "ad_storage|analytics_storage|ad_user_data";
        tj.aa = "51n0";
        tj.aa = "51n0";
        Lk();
        if (T(100)) {
        }
        ji[8] = !0;
        var p = Of.ctid,
          q = vk();
        T(118) &&
          ((am = 0),
          (Ul = ""),
          (Vl = p),
          (Xl = fj),
          (Wl = { ctid: p, isDestination: q }),
          (bm = !0),
          hm());
        if (!xm) {
          xm = !0;
          for (var r = ym.length - 1; r >= 0; r--) ym[r]();
          ym = [];
        }
        cp();
        Hm();
        var u = Fk();
        if (qk().canonical[u]) {
          var v = $i.zones;
          v && v.unregisterChild(xk());
          By().removeExternalRestrictions(Fk());
        } else {
          My();
          for (
            var t = data.resource || {}, w = t.macros || [], x = 0;
            x < w.length;
            x++
          )
            df.push(w[x]);
          for (var y = t.tags || [], B = 0; B < y.length; B++) gf.push(y[B]);
          for (var C = t.predicates || [], D = 0; D < C.length; D++)
            ff.push(C[D]);
          for (var E = t.rules || [], K = 0; K < E.length; K++) {
            for (var L = E[K], Q = {}, I = 0; I < L.length; I++) {
              var V = L[I][0];
              Q[V] = Array.prototype.slice.call(L[I], 1);
              (V !== "if" && V !== "unless") || qf(Q[V]);
            }
            ef.push(Q);
          }
          mf = Z;
          nf = SB;
          Kf = new Rf();
          var da = data.sandboxed_scripts,
            ea = data.security_groups;
          a: {
            var aa = data.runtime || [],
              O = data.runtime_lines;
            hC = new ze();
            $L();
            cf = gC();
            var oa = hC,
              ma = ZL(),
              na = new Xc("require", ma);
            na.Ia();
            oa.j.j.set("require", na);
            for (var Ga = [], Sa = 0; Sa < aa.length; Sa++) {
              var xa = aa[Sa];
              if (!Array.isArray(xa) || xa.length < 3) {
                if (xa.length === 0) continue;
                break a;
              }
              O && O[Sa] && O[Sa].length && Bf(xa, O[Sa]);
              try {
                hC.execute(xa), T(116) && jk && xa[0] === 50 && Ga.push(xa[1]);
              } catch (dp) {}
            }
            T(116) && (sf = Ga);
          }
          if (da && da.length)
            for (var Ua = ["sandboxedScripts"], gb = 0; gb < da.length; gb++) {
              var Qc = da[gb].replace(/^_*/, "");
              pj[Qc] = Ua;
            }
          aM(ea);
          zM();
          if (!jj)
            for (
              var jf = Ol() ? xj(tj.Ha) : xj(tj.vc), kf = 0;
              kf < km.length;
              kf++
            ) {
              var Pz = km[kf],
                BM = Pz,
                CM = jf[Pz] ? "granted" : "denied";
              jl().implicit(BM, CM);
            }
          mB();
          mA = !1;
          nA = 0;
          if (
            (F.readyState === "interactive" && !F.createEventObject) ||
            F.readyState === "complete"
          )
            pA();
          else {
            rc(F, "DOMContentLoaded", pA);
            rc(F, "readystatechange", pA);
            if (F.createEventObject && F.documentElement.doScroll) {
              var Qz = !0;
              try {
                Qz = !A.frameElement;
              } catch (dp) {}
              Qz && qA();
            }
            rc(A, "load", pA);
          }
          TA = !1;
          F.readyState === "complete" ? VA() : rc(A, "load", VA);
          lA();
          jk &&
            (un(Hn),
            A.setInterval(Gn, 864e5),
            un(VB),
            un(qz),
            un(Ww),
            un(Kn),
            un(dC),
            un(Bz),
            T(116) && (un(vz), un(wz), un(xz)),
            ZB());
          if (kk) {
            il();
            $m();
            var Rz,
              Sz = Vj(A.location.href);
            (Rz = Sz.hostname + Sz.pathname) &&
              $k("dl", encodeURIComponent(Rz));
            var ep;
            var Tz = Of.ctid;
            if (Tz) {
              var EM = tk.Le ? 1 : 0,
                fi,
                Uz = Hk(Ik());
              fi = Uz && Uz.context;
              ep =
                Tz +
                ";" +
                Of.canonicalContainerId +
                ";" +
                (fi && fi.fromContainerExecution ? 1 : 0) +
                ";" +
                ((fi && fi.source) || 0) +
                ";" +
                EM;
            } else ep = void 0;
            var Vz = ep;
            Vz && $k("tdp", Vz);
            var Wz = Ko(!0);
            Wz !== void 0 && $k("frm", String(Wz));
            var fp;
            var gi = Hk(Ik());
            if (gi) {
              for (; gi.parent; ) {
                var Xz = Hk(gi.parent);
                if (!Xz) break;
                gi = Xz;
              }
              fp = gi;
            } else fp = void 0;
            var lf = fp;
            if (!lf) U(144);
            else if (T(58) || lf.canonicalContainerId) {
              var gp;
              a: {
                var Yz,
                  Zz = (Yz = lf.scriptElement) == null ? void 0 : Yz.src;
                if (Zz) {
                  var hp;
                  try {
                    var $z;
                    hp =
                      ($z = Fc()) == null
                        ? void 0
                        : $z.getEntriesByType("resource");
                  } catch (dp) {}
                  if (hp) {
                    for (
                      var aA = -1, bA = l(hp), ip = bA.next();
                      !ip.done;
                      ip = bA.next()
                    ) {
                      var cA = ip.value;
                      if (cA.initiatorType === "script") {
                        aA += 1;
                        var jp = cA.name,
                          kp = Zz;
                        T(57) &&
                          ((jp = jp.replace(nB, "")),
                          (kp = kp.replace(nB, "")));
                        if (jp === kp) {
                          gp = aA;
                          break a;
                        }
                      }
                    }
                    U(146);
                  } else U(145);
                }
                gp = void 0;
              }
              var dA = gp;
              dA !== void 0 &&
                (lf.canonicalContainerId &&
                  $k("rtg", String(lf.canonicalContainerId)),
                $k("slo", String(dA)),
                $k("hlo", lf.htmlLoadOrder || "-1"),
                $k("lst", String(lf.loadScriptType || "0")));
            }
            var Ek;
            var hi = Gk();
            if (hi)
              if (hi.canonicalContainerId) Ek = hi.canonicalContainerId;
              else {
                var eA,
                  fA =
                    hi.scriptContainerId ||
                    ((eA = hi.destinations) == null ? void 0 : eA[0]);
                Ek = fA ? "_" + fA : void 0;
              }
            else Ek = void 0;
            var gA = Ek;
            gA && $k("pcid", gA);
            T(40) &&
              ($k("bt", String(tj.C ? 2 : hj ? 1 : 0)),
              $k("ct", String(tj.C ? 0 : hj ? 1 : Ip() ? 2 : 3)));
          }
          IB();
          Jl(1);
          qD();
          nj = ob();
          yM.bootstrap = nj;
          tj.H && lB();
          if (T(100)) {
          }
          T(131) &&
            (typeof A.name === "string" &&
            tb(A.name, "web-pixel-sandbox-CUSTOM") &&
            Gc()
              ? bM("dMDg0Yz")
              : A.Shopify && Gc() && bM("dNTU0Yz"));
        }
      }
    } catch (dp) {
      if ((Jl(4), jk && (!T(6) || tj.P))) {
        var FM = Bn(!0, !0);
        qc(FM);
      }
    }
  });
})();
