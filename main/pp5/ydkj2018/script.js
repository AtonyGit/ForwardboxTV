var gd = Object.defineProperty;
var md = (t, e, n) => e in t ? gd(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var at = (t, e, n) => (md(t, typeof e != "symbol" ? e + "" : e, n), n);
const yd = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const f of a)
            if (f.type === "childList")
                for (const y of f.addedNodes) y.tagName === "LINK" && y.rel === "modulepreload" && i(y)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(a) {
        const f = {};
        return a.integrity && (f.integrity = a.integrity), a.referrerpolicy && (f.referrerPolicy = a.referrerpolicy), a.crossorigin === "use-credentials" ? f.credentials = "include" : a.crossorigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const f = n(a);
        fetch(a.href, f)
    }
};
yd();
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function wd(t) {
    var e = t.default;
    if (typeof e == "function") {
        var n = function() {
            return e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(t).forEach(function(i) {
        var a = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(n, i, a.get ? a : {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    }), n
}
var Bi = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            a = Array.prototype,
            f = Object.prototype,
            y = Function.prototype,
            S = a.push,
            I = a.slice,
            O = f.toString,
            R = f.hasOwnProperty,
            V = Array.isArray,
            X = Object.keys,
            ie = y.bind,
            J = Object.create,
            oe = function() {},
            m = function(l) {
                if (l instanceof m) return l;
                if (!(this instanceof m)) return new m(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = m), e._ = m, m.VERSION = "1.8.3";
        var L = function(l, g, x) {
                if (g === void 0) return l;
                switch (x == null ? 3 : x) {
                    case 1:
                        return function(A) {
                            return l.call(g, A)
                        };
                    case 2:
                        return function(A, M) {
                            return l.call(g, A, M)
                        };
                    case 3:
                        return function(A, M, D) {
                            return l.call(g, A, M, D)
                        };
                    case 4:
                        return function(A, M, D, te) {
                            return l.call(g, A, M, D, te)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            z = function(l, g, x) {
                return l == null ? m.identity : m.isFunction(l) ? L(l, g, x) : m.isObject(l) ? m.matcher(l) : m.property(l)
            };
        m.iteratee = function(l, g) {
            return z(l, g, 1 / 0)
        };
        var ae = function(l, g) {
                return function(x) {
                    var A = arguments.length;
                    if (A < 2 || x == null) return x;
                    for (var M = 1; M < A; M++)
                        for (var D = arguments[M], te = l(D), Se = te.length, de = 0; de < Se; de++) {
                            var Oe = te[de];
                            (!g || x[Oe] === void 0) && (x[Oe] = D[Oe])
                        }
                    return x
                }
            },
            re = function(l) {
                if (!m.isObject(l)) return {};
                if (J) return J(l);
                oe.prototype = l;
                var g = new oe;
                return oe.prototype = null, g
            },
            ye = function(l) {
                return function(g) {
                    return g == null ? void 0 : g[l]
                }
            },
            c = Math.pow(2, 53) - 1,
            Ee = ye("length"),
            _e = function(l) {
                var g = Ee(l);
                return typeof g == "number" && g >= 0 && g <= c
            };
        m.each = m.forEach = function(l, g, x) {
            g = L(g, x);
            var A, M;
            if (_e(l))
                for (A = 0, M = l.length; A < M; A++) g(l[A], A, l);
            else {
                var D = m.keys(l);
                for (A = 0, M = D.length; A < M; A++) g(l[D[A]], D[A], l)
            }
            return l
        }, m.map = m.collect = function(l, g, x) {
            g = z(g, x);
            for (var A = !_e(l) && m.keys(l), M = (A || l).length, D = Array(M), te = 0; te < M; te++) {
                var Se = A ? A[te] : te;
                D[te] = g(l[Se], Se, l)
            }
            return D
        };

        function Le(l) {
            function g(x, A, M, D, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var de = D ? D[te] : te;
                    M = A(M, x[de], de, x)
                }
                return M
            }
            return function(x, A, M, D) {
                A = L(A, D, 4);
                var te = !_e(x) && m.keys(x),
                    Se = (te || x).length,
                    de = l > 0 ? 0 : Se - 1;
                return arguments.length < 3 && (M = x[te ? te[de] : de], de += l), g(x, A, M, te, de, Se)
            }
        }
        m.reduce = m.foldl = m.inject = Le(1), m.reduceRight = m.foldr = Le(-1), m.find = m.detect = function(l, g, x) {
            var A;
            if (_e(l) ? A = m.findIndex(l, g, x) : A = m.findKey(l, g, x), A !== void 0 && A !== -1) return l[A]
        }, m.filter = m.select = function(l, g, x) {
            var A = [];
            return g = z(g, x), m.each(l, function(M, D, te) {
                g(M, D, te) && A.push(M)
            }), A
        }, m.reject = function(l, g, x) {
            return m.filter(l, m.negate(z(g)), x)
        }, m.every = m.all = function(l, g, x) {
            g = z(g, x);
            for (var A = !_e(l) && m.keys(l), M = (A || l).length, D = 0; D < M; D++) {
                var te = A ? A[D] : D;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, m.some = m.any = function(l, g, x) {
            g = z(g, x);
            for (var A = !_e(l) && m.keys(l), M = (A || l).length, D = 0; D < M; D++) {
                var te = A ? A[D] : D;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(l, g, x, A) {
            return _e(l) || (l = m.values(l)), (typeof x != "number" || A) && (x = 0), m.indexOf(l, g, x) >= 0
        }, m.invoke = function(l, g) {
            var x = I.call(arguments, 2),
                A = m.isFunction(g);
            return m.map(l, function(M) {
                var D = A ? g : M[g];
                return D == null ? D : D.apply(M, x)
            })
        }, m.pluck = function(l, g) {
            return m.map(l, m.property(g))
        }, m.where = function(l, g) {
            return m.filter(l, m.matcher(g))
        }, m.findWhere = function(l, g) {
            return m.find(l, m.matcher(g))
        }, m.max = function(l, g, x) {
            var A = -1 / 0,
                M = -1 / 0,
                D, te;
            if (g == null && l != null) {
                l = _e(l) ? l : m.values(l);
                for (var Se = 0, de = l.length; Se < de; Se++) D = l[Se], D > A && (A = D)
            } else g = z(g, x), m.each(l, function(Oe, Re, ot) {
                te = g(Oe, Re, ot), (te > M || te === -1 / 0 && A === -1 / 0) && (A = Oe, M = te)
            });
            return A
        }, m.min = function(l, g, x) {
            var A = 1 / 0,
                M = 1 / 0,
                D, te;
            if (g == null && l != null) {
                l = _e(l) ? l : m.values(l);
                for (var Se = 0, de = l.length; Se < de; Se++) D = l[Se], D < A && (A = D)
            } else g = z(g, x), m.each(l, function(Oe, Re, ot) {
                te = g(Oe, Re, ot), (te < M || te === 1 / 0 && A === 1 / 0) && (A = Oe, M = te)
            });
            return A
        }, m.shuffle = function(l) {
            for (var g = _e(l) ? l : m.values(l), x = g.length, A = Array(x), M = 0, D; M < x; M++) D = m.random(0, M), D !== M && (A[M] = A[D]), A[D] = g[M];
            return A
        }, m.sample = function(l, g, x) {
            return g == null || x ? (_e(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
        }, m.sortBy = function(l, g, x) {
            return g = z(g, x), m.pluck(m.map(l, function(A, M, D) {
                return {
                    value: A,
                    index: M,
                    criteria: g(A, M, D)
                }
            }).sort(function(A, M) {
                var D = A.criteria,
                    te = M.criteria;
                if (D !== te) {
                    if (D > te || D === void 0) return 1;
                    if (D < te || te === void 0) return -1
                }
                return A.index - M.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, x, A) {
                var M = {};
                return x = z(x, A), m.each(g, function(D, te) {
                    var Se = x(D, te, g);
                    l(M, D, Se)
                }), M
            }
        };
        m.groupBy = lt(function(l, g, x) {
            m.has(l, x) ? l[x].push(g) : l[x] = [g]
        }), m.indexBy = lt(function(l, g, x) {
            l[x] = g
        }), m.countBy = lt(function(l, g, x) {
            m.has(l, x) ? l[x]++ : l[x] = 1
        }), m.toArray = function(l) {
            return l ? m.isArray(l) ? I.call(l) : _e(l) ? m.map(l, m.identity) : m.values(l) : []
        }, m.size = function(l) {
            return l == null ? 0 : _e(l) ? l.length : m.keys(l).length
        }, m.partition = function(l, g, x) {
            g = z(g, x);
            var A = [],
                M = [];
            return m.each(l, function(D, te, Se) {
                (g(D, te, Se) ? A : M).push(D)
            }), [A, M]
        }, m.first = m.head = m.take = function(l, g, x) {
            if (l != null) return g == null || x ? l[0] : m.initial(l, l.length - g)
        }, m.initial = function(l, g, x) {
            return I.call(l, 0, Math.max(0, l.length - (g == null || x ? 1 : g)))
        }, m.last = function(l, g, x) {
            if (l != null) return g == null || x ? l[l.length - 1] : m.rest(l, Math.max(0, l.length - g))
        }, m.rest = m.tail = m.drop = function(l, g, x) {
            return I.call(l, g == null || x ? 1 : g)
        }, m.compact = function(l) {
            return m.filter(l, m.identity)
        };
        var Ne = function(l, g, x, A) {
            for (var M = [], D = 0, te = A || 0, Se = Ee(l); te < Se; te++) {
                var de = l[te];
                if (_e(de) && (m.isArray(de) || m.isArguments(de))) {
                    g || (de = Ne(de, g, x));
                    var Oe = 0,
                        Re = de.length;
                    for (M.length += Re; Oe < Re;) M[D++] = de[Oe++]
                } else x || (M[D++] = de)
            }
            return M
        };
        m.flatten = function(l, g) {
            return Ne(l, g, !1)
        }, m.without = function(l) {
            return m.difference(l, I.call(arguments, 1))
        }, m.uniq = m.unique = function(l, g, x, A) {
            m.isBoolean(g) || (A = x, x = g, g = !1), x != null && (x = z(x, A));
            for (var M = [], D = [], te = 0, Se = Ee(l); te < Se; te++) {
                var de = l[te],
                    Oe = x ? x(de, te, l) : de;
                g ? ((!te || D !== Oe) && M.push(de), D = Oe) : x ? m.contains(D, Oe) || (D.push(Oe), M.push(de)) : m.contains(M, de) || M.push(de)
            }
            return M
        }, m.union = function() {
            return m.uniq(Ne(arguments, !0, !0))
        }, m.intersection = function(l) {
            for (var g = [], x = arguments.length, A = 0, M = Ee(l); A < M; A++) {
                var D = l[A];
                if (!m.contains(g, D)) {
                    for (var te = 1; te < x && m.contains(arguments[te], D); te++);
                    te === x && g.push(D)
                }
            }
            return g
        }, m.difference = function(l) {
            var g = Ne(arguments, !0, !0, 1);
            return m.filter(l, function(x) {
                return !m.contains(g, x)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(l) {
            for (var g = l && m.max(l, Ee).length || 0, x = Array(g), A = 0; A < g; A++) x[A] = m.pluck(l, A);
            return x
        }, m.object = function(l, g) {
            for (var x = {}, A = 0, M = Ee(l); A < M; A++) g ? x[l[A]] = g[A] : x[l[A][0]] = l[A][1];
            return x
        };

        function Q(l) {
            return function(g, x, A) {
                x = z(x, A);
                for (var M = Ee(g), D = l > 0 ? 0 : M - 1; D >= 0 && D < M; D += l)
                    if (x(g[D], D, g)) return D;
                return -1
            }
        }
        m.findIndex = Q(1), m.findLastIndex = Q(-1), m.sortedIndex = function(l, g, x, A) {
            x = z(x, A, 1);
            for (var M = x(g), D = 0, te = Ee(l); D < te;) {
                var Se = Math.floor((D + te) / 2);
                x(l[Se]) < M ? D = Se + 1 : te = Se
            }
            return D
        };

        function je(l, g, x) {
            return function(A, M, D) {
                var te = 0,
                    Se = Ee(A);
                if (typeof D == "number") l > 0 ? te = D >= 0 ? D : Math.max(D + Se, te) : Se = D >= 0 ? Math.min(D + 1, Se) : D + Se + 1;
                else if (x && D && Se) return D = x(A, M), A[D] === M ? D : -1;
                if (M !== M) return D = g(I.call(A, te, Se), m.isNaN), D >= 0 ? D + te : -1;
                for (D = l > 0 ? te : Se - 1; D >= 0 && D < Se; D += l)
                    if (A[D] === M) return D;
                return -1
            }
        }
        m.indexOf = je(1, m.findIndex, m.sortedIndex), m.lastIndexOf = je(-1, m.findLastIndex), m.range = function(l, g, x) {
            g == null && (g = l || 0, l = 0), x = x || 1;
            for (var A = Math.max(Math.ceil((g - l) / x), 0), M = Array(A), D = 0; D < A; D++, l += x) M[D] = l;
            return M
        };
        var G = function(l, g, x, A, M) {
            if (!(A instanceof g)) return l.apply(x, M);
            var D = re(l.prototype),
                te = l.apply(D, M);
            return m.isObject(te) ? te : D
        };
        m.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, I.call(arguments, 1));
            if (!m.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var x = I.call(arguments, 2),
                A = function() {
                    return G(l, A, g, this, x.concat(I.call(arguments)))
                };
            return A
        }, m.partial = function(l) {
            var g = I.call(arguments, 1),
                x = function() {
                    for (var A = 0, M = g.length, D = Array(M), te = 0; te < M; te++) D[te] = g[te] === m ? arguments[A++] : g[te];
                    for (; A < arguments.length;) D.push(arguments[A++]);
                    return G(l, x, this, this, D)
                };
            return x
        }, m.bindAll = function(l) {
            var g, x = arguments.length,
                A;
            if (x <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < x; g++) A = arguments[g], l[A] = m.bind(l[A], l);
            return l
        }, m.memoize = function(l, g) {
            var x = function(A) {
                var M = x.cache,
                    D = "" + (g ? g.apply(this, arguments) : A);
                return m.has(M, D) || (M[D] = l.apply(this, arguments)), M[D]
            };
            return x.cache = {}, x
        }, m.delay = function(l, g) {
            var x = I.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, x)
            }, g)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(l, g, x) {
            var A, M, D, te = null,
                Se = 0;
            x || (x = {});
            var de = function() {
                Se = x.leading === !1 ? 0 : m.now(), te = null, D = l.apply(A, M), te || (A = M = null)
            };
            return function() {
                var Oe = m.now();
                !Se && x.leading === !1 && (Se = Oe);
                var Re = g - (Oe - Se);
                return A = this, M = arguments, Re <= 0 || Re > g ? (te && (clearTimeout(te), te = null), Se = Oe, D = l.apply(A, M), te || (A = M = null)) : !te && x.trailing !== !1 && (te = setTimeout(de, Re)), D
            }
        }, m.debounce = function(l, g, x) {
            var A, M, D, te, Se, de = function() {
                var Oe = m.now() - te;
                Oe < g && Oe >= 0 ? A = setTimeout(de, g - Oe) : (A = null, x || (Se = l.apply(D, M), A || (D = M = null)))
            };
            return function() {
                D = this, M = arguments, te = m.now();
                var Oe = x && !A;
                return A || (A = setTimeout(de, g)), Oe && (Se = l.apply(D, M), D = M = null), Se
            }
        }, m.wrap = function(l, g) {
            return m.partial(g, l)
        }, m.negate = function(l) {
            return function() {
                return !l.apply(this, arguments)
            }
        }, m.compose = function() {
            var l = arguments,
                g = l.length - 1;
            return function() {
                for (var x = g, A = l[g].apply(this, arguments); x--;) A = l[x].call(this, A);
                return A
            }
        }, m.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, m.before = function(l, g) {
            var x;
            return function() {
                return --l > 0 && (x = g.apply(this, arguments)), l <= 1 && (g = null), x
            }
        }, m.once = m.partial(m.before, 2);
        var se = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Te = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function ve(l, g) {
            var x = Te.length,
                A = l.constructor,
                M = m.isFunction(A) && A.prototype || f,
                D = "constructor";
            for (m.has(l, D) && !m.contains(g, D) && g.push(D); x--;) D = Te[x], D in l && l[D] !== M[D] && !m.contains(g, D) && g.push(D)
        }
        m.keys = function(l) {
            if (!m.isObject(l)) return [];
            if (X) return X(l);
            var g = [];
            for (var x in l) m.has(l, x) && g.push(x);
            return se && ve(l, g), g
        }, m.allKeys = function(l) {
            if (!m.isObject(l)) return [];
            var g = [];
            for (var x in l) g.push(x);
            return se && ve(l, g), g
        }, m.values = function(l) {
            for (var g = m.keys(l), x = g.length, A = Array(x), M = 0; M < x; M++) A[M] = l[g[M]];
            return A
        }, m.mapObject = function(l, g, x) {
            g = z(g, x);
            for (var A = m.keys(l), M = A.length, D = {}, te, Se = 0; Se < M; Se++) te = A[Se], D[te] = g(l[te], te, l);
            return D
        }, m.pairs = function(l) {
            for (var g = m.keys(l), x = g.length, A = Array(x), M = 0; M < x; M++) A[M] = [g[M], l[g[M]]];
            return A
        }, m.invert = function(l) {
            for (var g = {}, x = m.keys(l), A = 0, M = x.length; A < M; A++) g[l[x[A]]] = x[A];
            return g
        }, m.functions = m.methods = function(l) {
            var g = [];
            for (var x in l) m.isFunction(l[x]) && g.push(x);
            return g.sort()
        }, m.extend = ae(m.allKeys), m.extendOwn = m.assign = ae(m.keys), m.findKey = function(l, g, x) {
            g = z(g, x);
            for (var A = m.keys(l), M, D = 0, te = A.length; D < te; D++)
                if (M = A[D], g(l[M], M, l)) return M
        }, m.pick = function(l, g, x) {
            var A = {},
                M = l,
                D, te;
            if (M == null) return A;
            m.isFunction(g) ? (te = m.allKeys(M), D = L(g, x)) : (te = Ne(arguments, !1, !1, 1), D = function(ot, Ct, on) {
                return Ct in on
            }, M = Object(M));
            for (var Se = 0, de = te.length; Se < de; Se++) {
                var Oe = te[Se],
                    Re = M[Oe];
                D(Re, Oe, M) && (A[Oe] = Re)
            }
            return A
        }, m.omit = function(l, g, x) {
            if (m.isFunction(g)) g = m.negate(g);
            else {
                var A = m.map(Ne(arguments, !1, !1, 1), String);
                g = function(M, D) {
                    return !m.contains(A, D)
                }
            }
            return m.pick(l, g, x)
        }, m.defaults = ae(m.allKeys, !0), m.create = function(l, g) {
            var x = re(l);
            return g && m.extendOwn(x, g), x
        }, m.clone = function(l) {
            return m.isObject(l) ? m.isArray(l) ? l.slice() : m.extend({}, l) : l
        }, m.tap = function(l, g) {
            return g(l), l
        }, m.isMatch = function(l, g) {
            var x = m.keys(g),
                A = x.length;
            if (l == null) return !A;
            for (var M = Object(l), D = 0; D < A; D++) {
                var te = x[D];
                if (g[te] !== M[te] || !(te in M)) return !1
            }
            return !0
        };
        var we = function(l, g, x, A) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof m && (l = l._wrapped), g instanceof m && (g = g._wrapped);
            var M = O.call(l);
            if (M !== O.call(g)) return !1;
            switch (M) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + g;
                case "[object Number]":
                    return +l != +l ? +g != +g : +l == 0 ? 1 / +l === 1 / g : +l == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +g
            }
            var D = M === "[object Array]";
            if (!D) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    Se = g.constructor;
                if (te !== Se && !(m.isFunction(te) && te instanceof te && m.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
            }
            x = x || [], A = A || [];
            for (var de = x.length; de--;)
                if (x[de] === l) return A[de] === g;
            if (x.push(l), A.push(g), D) {
                if (de = l.length, de !== g.length) return !1;
                for (; de--;)
                    if (!we(l[de], g[de], x, A)) return !1
            } else {
                var Oe = m.keys(l),
                    Re;
                if (de = Oe.length, m.keys(g).length !== de) return !1;
                for (; de--;)
                    if (Re = Oe[de], !(m.has(g, Re) && we(l[Re], g[Re], x, A))) return !1
            }
            return x.pop(), A.pop(), !0
        };
        m.isEqual = function(l, g) {
            return we(l, g)
        }, m.isEmpty = function(l) {
            return l == null ? !0 : _e(l) && (m.isArray(l) || m.isString(l) || m.isArguments(l)) ? l.length === 0 : m.keys(l).length === 0
        }, m.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, m.isArray = V || function(l) {
            return O.call(l) === "[object Array]"
        }, m.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            m["is" + l] = function(g) {
                return O.call(g) === "[object " + l + "]"
            }
        }), m.isArguments(arguments) || (m.isArguments = function(l) {
            return m.has(l, "callee")
        }), typeof /./ != "function" && typeof Int8Array != "object" && (m.isFunction = function(l) {
            return typeof l == "function" || !1
        }), m.isFinite = function(l) {
            return isFinite(l) && !isNaN(parseFloat(l))
        }, m.isNaN = function(l) {
            return m.isNumber(l) && l !== +l
        }, m.isBoolean = function(l) {
            return l === !0 || l === !1 || O.call(l) === "[object Boolean]"
        }, m.isNull = function(l) {
            return l === null
        }, m.isUndefined = function(l) {
            return l === void 0
        }, m.has = function(l, g) {
            return l != null && R.call(l, g)
        }, m.noConflict = function() {
            return n._ = i, this
        }, m.identity = function(l) {
            return l
        }, m.constant = function(l) {
            return function() {
                return l
            }
        }, m.noop = function() {}, m.property = ye, m.propertyOf = function(l) {
            return l == null ? function() {} : function(g) {
                return l[g]
            }
        }, m.matcher = m.matches = function(l) {
            return l = m.extendOwn({}, l),
                function(g) {
                    return m.isMatch(g, l)
                }
        }, m.times = function(l, g, x) {
            var A = Array(Math.max(0, l));
            g = L(g, x, 1);
            for (var M = 0; M < l; M++) A[M] = g(M);
            return A
        }, m.random = function(l, g) {
            return g == null && (g = l, l = 0), l + Math.floor(Math.random() * (g - l + 1))
        }, m.now = Date.now || function() {
            return new Date().getTime()
        };
        var ue = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            xe = m.invert(ue),
            Ie = function(l) {
                var g = function(D) {
                        return l[D]
                    },
                    x = "(?:" + m.keys(l).join("|") + ")",
                    A = RegExp(x),
                    M = RegExp(x, "g");
                return function(D) {
                    return D = D == null ? "" : "" + D, A.test(D) ? D.replace(M, g) : D
                }
            };
        m.escape = Ie(ue), m.unescape = Ie(xe), m.result = function(l, g, x) {
            var A = l == null ? void 0 : l[g];
            return A === void 0 && (A = x), m.isFunction(A) ? A.call(l) : A
        };
        var Ve = 0;
        m.uniqueId = function(l) {
            var g = ++Ve + "";
            return l ? l + g : g
        }, m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var Ke = /(.)^/,
            ct = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Nt = /\\|'|\r|\n|\u2028|\u2029/g,
            Wt = function(l) {
                return "\\" + ct[l]
            };
        m.template = function(l, g, x) {
            !g && x && (g = x), g = m.defaults({}, g, m.templateSettings);
            var A = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                M = 0,
                D = "__p+='";
            l.replace(A, function(Oe, Re, ot, Ct, on) {
                return D += l.slice(M, on).replace(Nt, Wt), M = on + Oe.length, Re ? D += `'+
((__t=(` + Re + `))==null?'':_.escape(__t))+
'` : ot ? D += `'+
((__t=(` + ot + `))==null?'':__t)+
'` : Ct && (D += `';
` + Ct + `
__p+='`), Oe
            }), D += `';
`, g.variable || (D = `with(obj||{}){
` + D + `}
`), D = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + D + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", D)
            } catch (Oe) {
                throw Oe.source = D, Oe
            }
            var Se = function(Oe) {
                    return te.call(this, Oe, m)
                },
                de = g.variable || "obj";
            return Se.source = "function(" + de + `){
` + D + "}", Se
        }, m.chain = function(l) {
            var g = m(l);
            return g._chain = !0, g
        };
        var E = function(l, g) {
            return l._chain ? m(g).chain() : g
        };
        m.mixin = function(l) {
            m.each(m.functions(l), function(g) {
                var x = m[g] = l[g];
                m.prototype[g] = function() {
                    var A = [this._wrapped];
                    return S.apply(A, arguments), E(this, x.apply(m, A))
                }
            })
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = a[l];
            m.prototype[l] = function() {
                var x = this._wrapped;
                return g.apply(x, arguments), (l === "shift" || l === "splice") && x.length === 0 && delete x[0], E(this, x)
            }
        }), m.each(["concat", "join", "slice"], function(l) {
            var g = a[l];
            m.prototype[l] = function() {
                return E(this, g.apply(this._wrapped, arguments))
            }
        }), m.prototype.value = function() {
            return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(yt)
})(Bi, Bi.exports);
const Je = Bi.exports;
var Na = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function(t) {
    (function(e, n) {
        t.exports = e.document ? n(e, !0) : function(i) {
            if (!i.document) throw new Error("jQuery requires a window with a document");
            return n(i)
        }
    })(typeof window < "u" ? window : yt, function(e, n) {
        var i = [],
            a = Object.getPrototypeOf,
            f = i.slice,
            y = i.flat ? function(o) {
                return i.flat.call(o)
            } : function(o) {
                return i.concat.apply([], o)
            },
            S = i.push,
            I = i.indexOf,
            O = {},
            R = O.toString,
            V = O.hasOwnProperty,
            X = V.toString,
            ie = X.call(Object),
            J = {},
            oe = function(r) {
                return typeof r == "function" && typeof r.nodeType != "number" && typeof r.item != "function"
            },
            m = function(r) {
                return r != null && r === r.window
            },
            L = e.document,
            z = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function ae(o, r, u) {
            u = u || L;
            var p, v, C = u.createElement("script");
            if (C.text = o, r)
                for (p in z) v = r[p] || r.getAttribute && r.getAttribute(p), v && C.setAttribute(p, v);
            u.head.appendChild(C).parentNode.removeChild(C)
        }

        function re(o) {
            return o == null ? o + "" : typeof o == "object" || typeof o == "function" ? O[R.call(o)] || "object" : typeof o
        }
        var ye = "3.6.0",
            c = function(o, r) {
                return new c.fn.init(o, r)
            };
        c.fn = c.prototype = {
            jquery: ye,
            constructor: c,
            length: 0,
            toArray: function() {
                return f.call(this)
            },
            get: function(o) {
                return o == null ? f.call(this) : o < 0 ? this[o + this.length] : this[o]
            },
            pushStack: function(o) {
                var r = c.merge(this.constructor(), o);
                return r.prevObject = this, r
            },
            each: function(o) {
                return c.each(this, o)
            },
            map: function(o) {
                return this.pushStack(c.map(this, function(r, u) {
                    return o.call(r, u, r)
                }))
            },
            slice: function() {
                return this.pushStack(f.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(c.grep(this, function(o, r) {
                    return (r + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(c.grep(this, function(o, r) {
                    return r % 2
                }))
            },
            eq: function(o) {
                var r = this.length,
                    u = +o + (o < 0 ? r : 0);
                return this.pushStack(u >= 0 && u < r ? [this[u]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: S,
            sort: i.sort,
            splice: i.splice
        }, c.extend = c.fn.extend = function() {
            var o, r, u, p, v, C, T = arguments[0] || {},
                H = 1,
                F = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[H] || {}, H++), typeof T != "object" && !oe(T) && (T = {}), H === F && (T = this, H--); H < F; H++)
                if ((o = arguments[H]) != null)
                    for (r in o) p = o[r], !(r === "__proto__" || T === p) && (Z && p && (c.isPlainObject(p) || (v = Array.isArray(p))) ? (u = T[r], v && !Array.isArray(u) ? C = [] : !v && !c.isPlainObject(u) ? C = {} : C = u, v = !1, T[r] = c.extend(Z, C, p)) : p !== void 0 && (T[r] = p));
            return T
        }, c.extend({
            expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(o) {
                throw new Error(o)
            },
            noop: function() {},
            isPlainObject: function(o) {
                var r, u;
                return !o || R.call(o) !== "[object Object]" ? !1 : (r = a(o), r ? (u = V.call(r, "constructor") && r.constructor, typeof u == "function" && X.call(u) === ie) : !0)
            },
            isEmptyObject: function(o) {
                var r;
                for (r in o) return !1;
                return !0
            },
            globalEval: function(o, r, u) {
                ae(o, {
                    nonce: r && r.nonce
                }, u)
            },
            each: function(o, r) {
                var u, p = 0;
                if (Ee(o))
                    for (u = o.length; p < u && r.call(o[p], p, o[p]) !== !1; p++);
                else
                    for (p in o)
                        if (r.call(o[p], p, o[p]) === !1) break;
                return o
            },
            makeArray: function(o, r) {
                var u = r || [];
                return o != null && (Ee(Object(o)) ? c.merge(u, typeof o == "string" ? [o] : o) : S.call(u, o)), u
            },
            inArray: function(o, r, u) {
                return r == null ? -1 : I.call(r, o, u)
            },
            merge: function(o, r) {
                for (var u = +r.length, p = 0, v = o.length; p < u; p++) o[v++] = r[p];
                return o.length = v, o
            },
            grep: function(o, r, u) {
                for (var p, v = [], C = 0, T = o.length, H = !u; C < T; C++) p = !r(o[C], C), p !== H && v.push(o[C]);
                return v
            },
            map: function(o, r, u) {
                var p, v, C = 0,
                    T = [];
                if (Ee(o))
                    for (p = o.length; C < p; C++) v = r(o[C], C, u), v != null && T.push(v);
                else
                    for (C in o) v = r(o[C], C, u), v != null && T.push(v);
                return y(T)
            },
            guid: 1,
            support: J
        }), typeof Symbol == "function" && (c.fn[Symbol.iterator] = i[Symbol.iterator]), c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(o, r) {
            O["[object " + r + "]"] = r.toLowerCase()
        });

        function Ee(o) {
            var r = !!o && "length" in o && o.length,
                u = re(o);
            return oe(o) || m(o) ? !1 : u === "array" || r === 0 || typeof r == "number" && r > 0 && r - 1 in o
        }
        var _e = function(o) {
            var r, u, p, v, C, T, H, F, Z, le, be, ne, he, We, st, $e, Ht, Bt, un, xt = "sizzle" + 1 * new Date,
                nt = o.document,
                sn = 0,
                ft = 0,
                Rt = Qi(),
                Si = Qi(),
                Yi = Qi(),
                dn = Qi(),
                Qn = function(q, j) {
                    return q === j && (be = !0), 0
                },
                Xn = {}.hasOwnProperty,
                an = [],
                Pn = an.pop,
                wn = an.push,
                Cn = an.push,
                Ir = an.slice,
                Kn = function(q, j) {
                    for (var Y = 0, ce = q.length; Y < ce; Y++)
                        if (q[Y] === j) return Y;
                    return -1
                },
                Fo = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Tr = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                Go = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Tr + ")*)|.*)\\)|)",
                _r = new RegExp(gt + "+", "g"),
                Ii = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ar = new RegExp("^" + gt + "*," + gt + "*"),
                qr = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                js = new RegExp(gt + "|>"),
                Hs = new RegExp(Go),
                Fs = new RegExp("^" + Zn + "$"),
                Ji = {
                    ID: new RegExp("^#(" + Zn + ")"),
                    CLASS: new RegExp("^\\.(" + Zn + ")"),
                    TAG: new RegExp("^(" + Zn + "|[*])"),
                    ATTR: new RegExp("^" + Tr),
                    PSEUDO: new RegExp("^" + Go),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Fo + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                Gs = /HTML$/i,
                Ws = /^(?:input|select|textarea|button)$/i,
                zs = /^h\d$/i,
                Ti = /^[^{]+\{\s*\[native \w/,
                Us = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Wo = /[+~]/,
                _n = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                En = function(q, j) {
                    var Y = "0x" + q.slice(1) - 65536;
                    return j || (Y < 0 ? String.fromCharCode(Y + 65536) : String.fromCharCode(Y >> 10 | 55296, Y & 1023 | 56320))
                },
                zo = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Or = function(q, j) {
                    return j ? q === "\0" ? "\uFFFD" : q.slice(0, -1) + "\\" + q.charCodeAt(q.length - 1).toString(16) + " " : "\\" + q
                },
                Rr = function() {
                    ne()
                },
                Ys = eo(function(q) {
                    return q.disabled === !0 && q.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = Ir.call(nt.childNodes), nt.childNodes), an[nt.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(j, Y) {
                        wn.apply(j, Ir.call(Y))
                    } : function(j, Y) {
                        for (var ce = j.length, ee = 0; j[ce++] = Y[ee++];);
                        j.length = ce - 1
                    }
                }
            }

            function St(q, j, Y, ce) {
                var ee, me, Ce, Ae, Pe, He, Ge, Ye = j && j.ownerDocument,
                    dt = j ? j.nodeType : 9;
                if (Y = Y || [], typeof q != "string" || !q || dt !== 1 && dt !== 9 && dt !== 11) return Y;
                if (!ce && (ne(j), j = j || he, st)) {
                    if (dt !== 11 && (Pe = Us.exec(q)))
                        if (ee = Pe[1]) {
                            if (dt === 9)
                                if (Ce = j.getElementById(ee)) {
                                    if (Ce.id === ee) return Y.push(Ce), Y
                                } else return Y;
                            else if (Ye && (Ce = Ye.getElementById(ee)) && un(j, Ce) && Ce.id === ee) return Y.push(Ce), Y
                        } else {
                            if (Pe[2]) return Cn.apply(Y, j.getElementsByTagName(q)), Y;
                            if ((ee = Pe[3]) && u.getElementsByClassName && j.getElementsByClassName) return Cn.apply(Y, j.getElementsByClassName(ee)), Y
                        } if (u.qsa && !dn[q + " "] && (!$e || !$e.test(q)) && (dt !== 1 || j.nodeName.toLowerCase() !== "object")) {
                        if (Ge = q, Ye = j, dt === 1 && (js.test(q) || qr.test(q))) {
                            for (Ye = Wo.test(q) && Uo(j.parentNode) || j, (Ye !== j || !u.scope) && ((Ae = j.getAttribute("id")) ? Ae = Ae.replace(zo, Or) : j.setAttribute("id", Ae = xt)), He = T(q), me = He.length; me--;) He[me] = (Ae ? "#" + Ae : ":scope") + " " + Zi(He[me]);
                            Ge = He.join(",")
                        }
                        try {
                            return Cn.apply(Y, Ye.querySelectorAll(Ge)), Y
                        } catch {
                            dn(q, !0)
                        } finally {
                            Ae === xt && j.removeAttribute("id")
                        }
                    }
                }
                return F(q.replace(Ii, "$1"), j, Y, ce)
            }

            function Qi() {
                var q = [];

                function j(Y, ce) {
                    return q.push(Y + " ") > p.cacheLength && delete j[q.shift()], j[Y + " "] = ce
                }
                return j
            }

            function cn(q) {
                return q[xt] = !0, q
            }

            function vn(q) {
                var j = he.createElement("fieldset");
                try {
                    return !!q(j)
                } catch {
                    return !1
                } finally {
                    j.parentNode && j.parentNode.removeChild(j), j = null
                }
            }

            function Xi(q, j) {
                for (var Y = q.split("|"), ce = Y.length; ce--;) p.attrHandle[Y[ce]] = j
            }

            function Ki(q, j) {
                var Y = j && q,
                    ce = Y && q.nodeType === 1 && j.nodeType === 1 && q.sourceIndex - j.sourceIndex;
                if (ce) return ce;
                if (Y) {
                    for (; Y = Y.nextSibling;)
                        if (Y === j) return -1
                }
                return q ? 1 : -1
            }

            function Js(q) {
                return function(j) {
                    var Y = j.nodeName.toLowerCase();
                    return Y === "input" && j.type === q
                }
            }

            function Qs(q) {
                return function(j) {
                    var Y = j.nodeName.toLowerCase();
                    return (Y === "input" || Y === "button") && j.type === q
                }
            }

            function Pr(q) {
                return function(j) {
                    return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === q : j.disabled === q : j.isDisabled === q || j.isDisabled !== !q && Ys(j) === q : j.disabled === q : "label" in j ? j.disabled === q : !1
                }
            }

            function An(q) {
                return cn(function(j) {
                    return j = +j, cn(function(Y, ce) {
                        for (var ee, me = q([], Y.length, j), Ce = me.length; Ce--;) Y[ee = me[Ce]] && (Y[ee] = !(ce[ee] = Y[ee]))
                    })
                })
            }

            function Uo(q) {
                return q && typeof q.getElementsByTagName < "u" && q
            }
            u = St.support = {}, C = St.isXML = function(q) {
                var j = q && q.namespaceURI,
                    Y = q && (q.ownerDocument || q).documentElement;
                return !Gs.test(j || Y && Y.nodeName || "HTML")
            }, ne = St.setDocument = function(q) {
                var j, Y, ce = q ? q.ownerDocument || q : nt;
                return ce == he || ce.nodeType !== 9 || !ce.documentElement || (he = ce, We = he.documentElement, st = !C(he), nt != he && (Y = he.defaultView) && Y.top !== Y && (Y.addEventListener ? Y.addEventListener("unload", Rr, !1) : Y.attachEvent && Y.attachEvent("onunload", Rr)), u.scope = vn(function(ee) {
                    return We.appendChild(ee).appendChild(he.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = vn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = vn(function(ee) {
                    return ee.appendChild(he.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = Ti.test(he.getElementsByClassName), u.getById = vn(function(ee) {
                    return We.appendChild(ee).id = xt, !he.getElementsByName || !he.getElementsByName(xt).length
                }), u.getById ? (p.filter.ID = function(ee) {
                    var me = ee.replace(_n, En);
                    return function(Ce) {
                        return Ce.getAttribute("id") === me
                    }
                }, p.find.ID = function(ee, me) {
                    if (typeof me.getElementById < "u" && st) {
                        var Ce = me.getElementById(ee);
                        return Ce ? [Ce] : []
                    }
                }) : (p.filter.ID = function(ee) {
                    var me = ee.replace(_n, En);
                    return function(Ce) {
                        var Ae = typeof Ce.getAttributeNode < "u" && Ce.getAttributeNode("id");
                        return Ae && Ae.value === me
                    }
                }, p.find.ID = function(ee, me) {
                    if (typeof me.getElementById < "u" && st) {
                        var Ce, Ae, Pe, He = me.getElementById(ee);
                        if (He) {
                            if (Ce = He.getAttributeNode("id"), Ce && Ce.value === ee) return [He];
                            for (Pe = me.getElementsByName(ee), Ae = 0; He = Pe[Ae++];)
                                if (Ce = He.getAttributeNode("id"), Ce && Ce.value === ee) return [He]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(ee, me) {
                    if (typeof me.getElementsByTagName < "u") return me.getElementsByTagName(ee);
                    if (u.qsa) return me.querySelectorAll(ee)
                } : function(ee, me) {
                    var Ce, Ae = [],
                        Pe = 0,
                        He = me.getElementsByTagName(ee);
                    if (ee === "*") {
                        for (; Ce = He[Pe++];) Ce.nodeType === 1 && Ae.push(Ce);
                        return Ae
                    }
                    return He
                }, p.find.CLASS = u.getElementsByClassName && function(ee, me) {
                    if (typeof me.getElementsByClassName < "u" && st) return me.getElementsByClassName(ee)
                }, Ht = [], $e = [], (u.qsa = Ti.test(he.querySelectorAll)) && (vn(function(ee) {
                    var me;
                    We.appendChild(ee).innerHTML = "<a id='" + xt + "'></a><select id='" + xt + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && $e.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || $e.push("\\[" + gt + "*(?:value|" + Fo + ")"), ee.querySelectorAll("[id~=" + xt + "-]").length || $e.push("~="), me = he.createElement("input"), me.setAttribute("name", ""), ee.appendChild(me), ee.querySelectorAll("[name='']").length || $e.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || $e.push(":checked"), ee.querySelectorAll("a#" + xt + "+*").length || $e.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), $e.push("[\\r\\n\\f]")
                }), vn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var me = he.createElement("input");
                    me.setAttribute("type", "hidden"), ee.appendChild(me).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && $e.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && $e.push(":enabled", ":disabled"), We.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && $e.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), $e.push(",.*:")
                })), (u.matchesSelector = Ti.test(Bt = We.matches || We.webkitMatchesSelector || We.mozMatchesSelector || We.oMatchesSelector || We.msMatchesSelector)) && vn(function(ee) {
                    u.disconnectedMatch = Bt.call(ee, "*"), Bt.call(ee, "[s!='']:x"), Ht.push("!=", Go)
                }), $e = $e.length && new RegExp($e.join("|")), Ht = Ht.length && new RegExp(Ht.join("|")), j = Ti.test(We.compareDocumentPosition), un = j || Ti.test(We.contains) ? function(ee, me) {
                    var Ce = ee.nodeType === 9 ? ee.documentElement : ee,
                        Ae = me && me.parentNode;
                    return ee === Ae || !!(Ae && Ae.nodeType === 1 && (Ce.contains ? Ce.contains(Ae) : ee.compareDocumentPosition && ee.compareDocumentPosition(Ae) & 16))
                } : function(ee, me) {
                    if (me) {
                        for (; me = me.parentNode;)
                            if (me === ee) return !0
                    }
                    return !1
                }, Qn = j ? function(ee, me) {
                    if (ee === me) return be = !0, 0;
                    var Ce = !ee.compareDocumentPosition - !me.compareDocumentPosition;
                    return Ce || (Ce = (ee.ownerDocument || ee) == (me.ownerDocument || me) ? ee.compareDocumentPosition(me) : 1, Ce & 1 || !u.sortDetached && me.compareDocumentPosition(ee) === Ce ? ee == he || ee.ownerDocument == nt && un(nt, ee) ? -1 : me == he || me.ownerDocument == nt && un(nt, me) ? 1 : le ? Kn(le, ee) - Kn(le, me) : 0 : Ce & 4 ? -1 : 1)
                } : function(ee, me) {
                    if (ee === me) return be = !0, 0;
                    var Ce, Ae = 0,
                        Pe = ee.parentNode,
                        He = me.parentNode,
                        Ge = [ee],
                        Ye = [me];
                    if (!Pe || !He) return ee == he ? -1 : me == he ? 1 : Pe ? -1 : He ? 1 : le ? Kn(le, ee) - Kn(le, me) : 0;
                    if (Pe === He) return Ki(ee, me);
                    for (Ce = ee; Ce = Ce.parentNode;) Ge.unshift(Ce);
                    for (Ce = me; Ce = Ce.parentNode;) Ye.unshift(Ce);
                    for (; Ge[Ae] === Ye[Ae];) Ae++;
                    return Ae ? Ki(Ge[Ae], Ye[Ae]) : Ge[Ae] == nt ? -1 : Ye[Ae] == nt ? 1 : 0
                }), he
            }, St.matches = function(q, j) {
                return St(q, null, null, j)
            }, St.matchesSelector = function(q, j) {
                if (ne(q), u.matchesSelector && st && !dn[j + " "] && (!Ht || !Ht.test(j)) && (!$e || !$e.test(j))) try {
                    var Y = Bt.call(q, j);
                    if (Y || u.disconnectedMatch || q.document && q.document.nodeType !== 11) return Y
                } catch {
                    dn(j, !0)
                }
                return St(j, he, null, [q]).length > 0
            }, St.contains = function(q, j) {
                return (q.ownerDocument || q) != he && ne(q), un(q, j)
            }, St.attr = function(q, j) {
                (q.ownerDocument || q) != he && ne(q);
                var Y = p.attrHandle[j.toLowerCase()],
                    ce = Y && Xn.call(p.attrHandle, j.toLowerCase()) ? Y(q, j, !st) : void 0;
                return ce !== void 0 ? ce : u.attributes || !st ? q.getAttribute(j) : (ce = q.getAttributeNode(j)) && ce.specified ? ce.value : null
            }, St.escape = function(q) {
                return (q + "").replace(zo, Or)
            }, St.error = function(q) {
                throw new Error("Syntax error, unrecognized expression: " + q)
            }, St.uniqueSort = function(q) {
                var j, Y = [],
                    ce = 0,
                    ee = 0;
                if (be = !u.detectDuplicates, le = !u.sortStable && q.slice(0), q.sort(Qn), be) {
                    for (; j = q[ee++];) j === q[ee] && (ce = Y.push(ee));
                    for (; ce--;) q.splice(Y[ce], 1)
                }
                return le = null, q
            }, v = St.getText = function(q) {
                var j, Y = "",
                    ce = 0,
                    ee = q.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof q.textContent == "string") return q.textContent;
                        for (q = q.firstChild; q; q = q.nextSibling) Y += v(q)
                    } else if (ee === 3 || ee === 4) return q.nodeValue
                } else
                    for (; j = q[ce++];) Y += v(j);
                return Y
            }, p = St.selectors = {
                cacheLength: 50,
                createPseudo: cn,
                match: Ji,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(q) {
                        return q[1] = q[1].replace(_n, En), q[3] = (q[3] || q[4] || q[5] || "").replace(_n, En), q[2] === "~=" && (q[3] = " " + q[3] + " "), q.slice(0, 4)
                    },
                    CHILD: function(q) {
                        return q[1] = q[1].toLowerCase(), q[1].slice(0, 3) === "nth" ? (q[3] || St.error(q[0]), q[4] = +(q[4] ? q[5] + (q[6] || 1) : 2 * (q[3] === "even" || q[3] === "odd")), q[5] = +(q[7] + q[8] || q[3] === "odd")) : q[3] && St.error(q[0]), q
                    },
                    PSEUDO: function(q) {
                        var j, Y = !q[6] && q[2];
                        return Ji.CHILD.test(q[0]) ? null : (q[3] ? q[2] = q[4] || q[5] || "" : Y && Hs.test(Y) && (j = T(Y, !0)) && (j = Y.indexOf(")", Y.length - j) - Y.length) && (q[0] = q[0].slice(0, j), q[2] = Y.slice(0, j)), q.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(q) {
                        var j = q.replace(_n, En).toLowerCase();
                        return q === "*" ? function() {
                            return !0
                        } : function(Y) {
                            return Y.nodeName && Y.nodeName.toLowerCase() === j
                        }
                    },
                    CLASS: function(q) {
                        var j = Rt[q + " "];
                        return j || (j = new RegExp("(^|" + gt + ")" + q + "(" + gt + "|$)")) && Rt(q, function(Y) {
                            return j.test(typeof Y.className == "string" && Y.className || typeof Y.getAttribute < "u" && Y.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(q, j, Y) {
                        return function(ce) {
                            var ee = St.attr(ce, q);
                            return ee == null ? j === "!=" : j ? (ee += "", j === "=" ? ee === Y : j === "!=" ? ee !== Y : j === "^=" ? Y && ee.indexOf(Y) === 0 : j === "*=" ? Y && ee.indexOf(Y) > -1 : j === "$=" ? Y && ee.slice(-Y.length) === Y : j === "~=" ? (" " + ee.replace(_r, " ") + " ").indexOf(Y) > -1 : j === "|=" ? ee === Y || ee.slice(0, Y.length + 1) === Y + "-" : !1) : !0
                        }
                    },
                    CHILD: function(q, j, Y, ce, ee) {
                        var me = q.slice(0, 3) !== "nth",
                            Ce = q.slice(-4) !== "last",
                            Ae = j === "of-type";
                        return ce === 1 && ee === 0 ? function(Pe) {
                            return !!Pe.parentNode
                        } : function(Pe, He, Ge) {
                            var Ye, dt, Tt, Ue, Ft, Xt, fn = me !== Ce ? "nextSibling" : "previousSibling",
                                _t = Pe.parentNode,
                                h = Ae && Pe.nodeName.toLowerCase(),
                                d = !Ge && !Ae,
                                b = !1;
                            if (_t) {
                                if (me) {
                                    for (; fn;) {
                                        for (Ue = Pe; Ue = Ue[fn];)
                                            if (Ae ? Ue.nodeName.toLowerCase() === h : Ue.nodeType === 1) return !1;
                                        Xt = fn = q === "only" && !Xt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Xt = [Ce ? _t.firstChild : _t.lastChild], Ce && d) {
                                    for (Ue = _t, Tt = Ue[xt] || (Ue[xt] = {}), dt = Tt[Ue.uniqueID] || (Tt[Ue.uniqueID] = {}), Ye = dt[q] || [], Ft = Ye[0] === sn && Ye[1], b = Ft && Ye[2], Ue = Ft && _t.childNodes[Ft]; Ue = ++Ft && Ue && Ue[fn] || (b = Ft = 0) || Xt.pop();)
                                        if (Ue.nodeType === 1 && ++b && Ue === Pe) {
                                            dt[q] = [sn, Ft, b];
                                            break
                                        }
                                } else if (d && (Ue = Pe, Tt = Ue[xt] || (Ue[xt] = {}), dt = Tt[Ue.uniqueID] || (Tt[Ue.uniqueID] = {}), Ye = dt[q] || [], Ft = Ye[0] === sn && Ye[1], b = Ft), b === !1)
                                    for (;
                                        (Ue = ++Ft && Ue && Ue[fn] || (b = Ft = 0) || Xt.pop()) && !((Ae ? Ue.nodeName.toLowerCase() === h : Ue.nodeType === 1) && ++b && (d && (Tt = Ue[xt] || (Ue[xt] = {}), dt = Tt[Ue.uniqueID] || (Tt[Ue.uniqueID] = {}), dt[q] = [sn, b]), Ue === Pe)););
                                return b -= ee, b === ce || b % ce === 0 && b / ce >= 0
                            }
                        }
                    },
                    PSEUDO: function(q, j) {
                        var Y, ce = p.pseudos[q] || p.setFilters[q.toLowerCase()] || St.error("unsupported pseudo: " + q);
                        return ce[xt] ? ce(j) : ce.length > 1 ? (Y = [q, q, "", j], p.setFilters.hasOwnProperty(q.toLowerCase()) ? cn(function(ee, me) {
                            for (var Ce, Ae = ce(ee, j), Pe = Ae.length; Pe--;) Ce = Kn(ee, Ae[Pe]), ee[Ce] = !(me[Ce] = Ae[Pe])
                        }) : function(ee) {
                            return ce(ee, 0, Y)
                        }) : ce
                    }
                },
                pseudos: {
                    not: cn(function(q) {
                        var j = [],
                            Y = [],
                            ce = H(q.replace(Ii, "$1"));
                        return ce[xt] ? cn(function(ee, me, Ce, Ae) {
                            for (var Pe, He = ce(ee, null, Ae, []), Ge = ee.length; Ge--;)(Pe = He[Ge]) && (ee[Ge] = !(me[Ge] = Pe))
                        }) : function(ee, me, Ce) {
                            return j[0] = ee, ce(j, null, Ce, Y), j[0] = null, !Y.pop()
                        }
                    }),
                    has: cn(function(q) {
                        return function(j) {
                            return St(q, j).length > 0
                        }
                    }),
                    contains: cn(function(q) {
                        return q = q.replace(_n, En),
                            function(j) {
                                return (j.textContent || v(j)).indexOf(q) > -1
                            }
                    }),
                    lang: cn(function(q) {
                        return Fs.test(q || "") || St.error("unsupported lang: " + q), q = q.replace(_n, En).toLowerCase(),
                            function(j) {
                                var Y;
                                do
                                    if (Y = st ? j.lang : j.getAttribute("xml:lang") || j.getAttribute("lang")) return Y = Y.toLowerCase(), Y === q || Y.indexOf(q + "-") === 0; while ((j = j.parentNode) && j.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(q) {
                        var j = o.location && o.location.hash;
                        return j && j.slice(1) === q.id
                    },
                    root: function(q) {
                        return q === We
                    },
                    focus: function(q) {
                        return q === he.activeElement && (!he.hasFocus || he.hasFocus()) && !!(q.type || q.href || ~q.tabIndex)
                    },
                    enabled: Pr(!1),
                    disabled: Pr(!0),
                    checked: function(q) {
                        var j = q.nodeName.toLowerCase();
                        return j === "input" && !!q.checked || j === "option" && !!q.selected
                    },
                    selected: function(q) {
                        return q.parentNode && q.parentNode.selectedIndex, q.selected === !0
                    },
                    empty: function(q) {
                        for (q = q.firstChild; q; q = q.nextSibling)
                            if (q.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(q) {
                        return !p.pseudos.empty(q)
                    },
                    header: function(q) {
                        return zs.test(q.nodeName)
                    },
                    input: function(q) {
                        return Ws.test(q.nodeName)
                    },
                    button: function(q) {
                        var j = q.nodeName.toLowerCase();
                        return j === "input" && q.type === "button" || j === "button"
                    },
                    text: function(q) {
                        var j;
                        return q.nodeName.toLowerCase() === "input" && q.type === "text" && ((j = q.getAttribute("type")) == null || j.toLowerCase() === "text")
                    },
                    first: An(function() {
                        return [0]
                    }),
                    last: An(function(q, j) {
                        return [j - 1]
                    }),
                    eq: An(function(q, j, Y) {
                        return [Y < 0 ? Y + j : Y]
                    }),
                    even: An(function(q, j) {
                        for (var Y = 0; Y < j; Y += 2) q.push(Y);
                        return q
                    }),
                    odd: An(function(q, j) {
                        for (var Y = 1; Y < j; Y += 2) q.push(Y);
                        return q
                    }),
                    lt: An(function(q, j, Y) {
                        for (var ce = Y < 0 ? Y + j : Y > j ? j : Y; --ce >= 0;) q.push(ce);
                        return q
                    }),
                    gt: An(function(q, j, Y) {
                        for (var ce = Y < 0 ? Y + j : Y; ++ce < j;) q.push(ce);
                        return q
                    })
                }
            }, p.pseudos.nth = p.pseudos.eq;
            for (r in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) p.pseudos[r] = Js(r);
            for (r in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[r] = Qs(r);

            function Mr() {}
            Mr.prototype = p.filters = p.pseudos, p.setFilters = new Mr, T = St.tokenize = function(q, j) {
                var Y, ce, ee, me, Ce, Ae, Pe, He = Si[q + " "];
                if (He) return j ? 0 : He.slice(0);
                for (Ce = q, Ae = [], Pe = p.preFilter; Ce;) {
                    (!Y || (ce = Ar.exec(Ce))) && (ce && (Ce = Ce.slice(ce[0].length) || Ce), Ae.push(ee = [])), Y = !1, (ce = qr.exec(Ce)) && (Y = ce.shift(), ee.push({
                        value: Y,
                        type: ce[0].replace(Ii, " ")
                    }), Ce = Ce.slice(Y.length));
                    for (me in p.filter)(ce = Ji[me].exec(Ce)) && (!Pe[me] || (ce = Pe[me](ce))) && (Y = ce.shift(), ee.push({
                        value: Y,
                        type: me,
                        matches: ce
                    }), Ce = Ce.slice(Y.length));
                    if (!Y) break
                }
                return j ? Ce.length : Ce ? St.error(q) : Si(q, Ae).slice(0)
            };

            function Zi(q) {
                for (var j = 0, Y = q.length, ce = ""; j < Y; j++) ce += q[j].value;
                return ce
            }

            function eo(q, j, Y) {
                var ce = j.dir,
                    ee = j.next,
                    me = ee || ce,
                    Ce = Y && me === "parentNode",
                    Ae = ft++;
                return j.first ? function(Pe, He, Ge) {
                    for (; Pe = Pe[ce];)
                        if (Pe.nodeType === 1 || Ce) return q(Pe, He, Ge);
                    return !1
                } : function(Pe, He, Ge) {
                    var Ye, dt, Tt, Ue = [sn, Ae];
                    if (Ge) {
                        for (; Pe = Pe[ce];)
                            if ((Pe.nodeType === 1 || Ce) && q(Pe, He, Ge)) return !0
                    } else
                        for (; Pe = Pe[ce];)
                            if (Pe.nodeType === 1 || Ce)
                                if (Tt = Pe[xt] || (Pe[xt] = {}), dt = Tt[Pe.uniqueID] || (Tt[Pe.uniqueID] = {}), ee && ee === Pe.nodeName.toLowerCase()) Pe = Pe[ce] || Pe;
                                else {
                                    if ((Ye = dt[me]) && Ye[0] === sn && Ye[1] === Ae) return Ue[2] = Ye[2];
                                    if (dt[me] = Ue, Ue[2] = q(Pe, He, Ge)) return !0
                                } return !1
                }
            }

            function to(q) {
                return q.length > 1 ? function(j, Y, ce) {
                    for (var ee = q.length; ee--;)
                        if (!q[ee](j, Y, ce)) return !1;
                    return !0
                } : q[0]
            }

            function Xs(q, j, Y) {
                for (var ce = 0, ee = j.length; ce < ee; ce++) St(q, j[ce], Y);
                return Y
            }

            function no(q, j, Y, ce, ee) {
                for (var me, Ce = [], Ae = 0, Pe = q.length, He = j != null; Ae < Pe; Ae++)(me = q[Ae]) && (!Y || Y(me, ce, ee)) && (Ce.push(me), He && j.push(Ae));
                return Ce
            }

            function Yo(q, j, Y, ce, ee, me) {
                return ce && !ce[xt] && (ce = Yo(ce)), ee && !ee[xt] && (ee = Yo(ee, me)), cn(function(Ce, Ae, Pe, He) {
                    var Ge, Ye, dt, Tt = [],
                        Ue = [],
                        Ft = Ae.length,
                        Xt = Ce || Xs(j || "*", Pe.nodeType ? [Pe] : Pe, []),
                        fn = q && (Ce || !j) ? no(Xt, Tt, q, Pe, He) : Xt,
                        _t = Y ? ee || (Ce ? q : Ft || ce) ? [] : Ae : fn;
                    if (Y && Y(fn, _t, Pe, He), ce)
                        for (Ge = no(_t, Ue), ce(Ge, [], Pe, He), Ye = Ge.length; Ye--;)(dt = Ge[Ye]) && (_t[Ue[Ye]] = !(fn[Ue[Ye]] = dt));
                    if (Ce) {
                        if (ee || q) {
                            if (ee) {
                                for (Ge = [], Ye = _t.length; Ye--;)(dt = _t[Ye]) && Ge.push(fn[Ye] = dt);
                                ee(null, _t = [], Ge, He)
                            }
                            for (Ye = _t.length; Ye--;)(dt = _t[Ye]) && (Ge = ee ? Kn(Ce, dt) : Tt[Ye]) > -1 && (Ce[Ge] = !(Ae[Ge] = dt))
                        }
                    } else _t = no(_t === Ae ? _t.splice(Ft, _t.length) : _t), ee ? ee(null, Ae, _t, He) : Cn.apply(Ae, _t)
                })
            }

            function Jo(q) {
                for (var j, Y, ce, ee = q.length, me = p.relative[q[0].type], Ce = me || p.relative[" "], Ae = me ? 1 : 0, Pe = eo(function(Ye) {
                        return Ye === j
                    }, Ce, !0), He = eo(function(Ye) {
                        return Kn(j, Ye) > -1
                    }, Ce, !0), Ge = [function(Ye, dt, Tt) {
                        var Ue = !me && (Tt || dt !== Z) || ((j = dt).nodeType ? Pe(Ye, dt, Tt) : He(Ye, dt, Tt));
                        return j = null, Ue
                    }]; Ae < ee; Ae++)
                    if (Y = p.relative[q[Ae].type]) Ge = [eo(to(Ge), Y)];
                    else {
                        if (Y = p.filter[q[Ae].type].apply(null, q[Ae].matches), Y[xt]) {
                            for (ce = ++Ae; ce < ee && !p.relative[q[ce].type]; ce++);
                            return Yo(Ae > 1 && to(Ge), Ae > 1 && Zi(q.slice(0, Ae - 1).concat({
                                value: q[Ae - 2].type === " " ? "*" : ""
                            })).replace(Ii, "$1"), Y, Ae < ce && Jo(q.slice(Ae, ce)), ce < ee && Jo(q = q.slice(ce)), ce < ee && Zi(q))
                        }
                        Ge.push(Y)
                    } return to(Ge)
            }

            function Lr(q, j) {
                var Y = j.length > 0,
                    ce = q.length > 0,
                    ee = function(me, Ce, Ae, Pe, He) {
                        var Ge, Ye, dt, Tt = 0,
                            Ue = "0",
                            Ft = me && [],
                            Xt = [],
                            fn = Z,
                            _t = me || ce && p.find.TAG("*", He),
                            h = sn += fn == null ? 1 : Math.random() || .1,
                            d = _t.length;
                        for (He && (Z = Ce == he || Ce || He); Ue !== d && (Ge = _t[Ue]) != null; Ue++) {
                            if (ce && Ge) {
                                for (Ye = 0, !Ce && Ge.ownerDocument != he && (ne(Ge), Ae = !st); dt = q[Ye++];)
                                    if (dt(Ge, Ce || he, Ae)) {
                                        Pe.push(Ge);
                                        break
                                    } He && (sn = h)
                            }
                            Y && ((Ge = !dt && Ge) && Tt--, me && Ft.push(Ge))
                        }
                        if (Tt += Ue, Y && Ue !== Tt) {
                            for (Ye = 0; dt = j[Ye++];) dt(Ft, Xt, Ce, Ae);
                            if (me) {
                                if (Tt > 0)
                                    for (; Ue--;) Ft[Ue] || Xt[Ue] || (Xt[Ue] = Pn.call(Pe));
                                Xt = no(Xt)
                            }
                            Cn.apply(Pe, Xt), He && !me && Xt.length > 0 && Tt + j.length > 1 && St.uniqueSort(Pe)
                        }
                        return He && (sn = h, Z = fn), Ft
                    };
                return Y ? cn(ee) : ee
            }
            return H = St.compile = function(q, j) {
                var Y, ce = [],
                    ee = [],
                    me = Yi[q + " "];
                if (!me) {
                    for (j || (j = T(q)), Y = j.length; Y--;) me = Jo(j[Y]), me[xt] ? ce.push(me) : ee.push(me);
                    me = Yi(q, Lr(ee, ce)), me.selector = q
                }
                return me
            }, F = St.select = function(q, j, Y, ce) {
                var ee, me, Ce, Ae, Pe, He = typeof q == "function" && q,
                    Ge = !ce && T(q = He.selector || q);
                if (Y = Y || [], Ge.length === 1) {
                    if (me = Ge[0] = Ge[0].slice(0), me.length > 2 && (Ce = me[0]).type === "ID" && j.nodeType === 9 && st && p.relative[me[1].type]) {
                        if (j = (p.find.ID(Ce.matches[0].replace(_n, En), j) || [])[0], j) He && (j = j.parentNode);
                        else return Y;
                        q = q.slice(me.shift().value.length)
                    }
                    for (ee = Ji.needsContext.test(q) ? 0 : me.length; ee-- && (Ce = me[ee], !p.relative[Ae = Ce.type]);)
                        if ((Pe = p.find[Ae]) && (ce = Pe(Ce.matches[0].replace(_n, En), Wo.test(me[0].type) && Uo(j.parentNode) || j))) {
                            if (me.splice(ee, 1), q = ce.length && Zi(me), !q) return Cn.apply(Y, ce), Y;
                            break
                        }
                }
                return (He || H(q, Ge))(ce, j, !st, Y, !j || Wo.test(q) && Uo(j.parentNode) || j), Y
            }, u.sortStable = xt.split("").sort(Qn).join("") === xt, u.detectDuplicates = !!be, ne(), u.sortDetached = vn(function(q) {
                return q.compareDocumentPosition(he.createElement("fieldset")) & 1
            }), vn(function(q) {
                return q.innerHTML = "<a href='#'></a>", q.firstChild.getAttribute("href") === "#"
            }) || Xi("type|href|height|width", function(q, j, Y) {
                if (!Y) return q.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !vn(function(q) {
                return q.innerHTML = "<input/>", q.firstChild.setAttribute("value", ""), q.firstChild.getAttribute("value") === ""
            })) && Xi("value", function(q, j, Y) {
                if (!Y && q.nodeName.toLowerCase() === "input") return q.defaultValue
            }), vn(function(q) {
                return q.getAttribute("disabled") == null
            }) || Xi(Fo, function(q, j, Y) {
                var ce;
                if (!Y) return q[j] === !0 ? j.toLowerCase() : (ce = q.getAttributeNode(j)) && ce.specified ? ce.value : null
            }), St
        }(e);
        c.find = _e, c.expr = _e.selectors, c.expr[":"] = c.expr.pseudos, c.uniqueSort = c.unique = _e.uniqueSort, c.text = _e.getText, c.isXMLDoc = _e.isXML, c.contains = _e.contains, c.escapeSelector = _e.escape;
        var Le = function(o, r, u) {
                for (var p = [], v = u !== void 0;
                    (o = o[r]) && o.nodeType !== 9;)
                    if (o.nodeType === 1) {
                        if (v && c(o).is(u)) break;
                        p.push(o)
                    } return p
            },
            lt = function(o, r) {
                for (var u = []; o; o = o.nextSibling) o.nodeType === 1 && o !== r && u.push(o);
                return u
            },
            Ne = c.expr.match.needsContext;

        function Q(o, r) {
            return o.nodeName && o.nodeName.toLowerCase() === r.toLowerCase()
        }
        var je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function G(o, r, u) {
            return oe(r) ? c.grep(o, function(p, v) {
                return !!r.call(p, v, p) !== u
            }) : r.nodeType ? c.grep(o, function(p) {
                return p === r !== u
            }) : typeof r != "string" ? c.grep(o, function(p) {
                return I.call(r, p) > -1 !== u
            }) : c.filter(r, o, u)
        }
        c.filter = function(o, r, u) {
            var p = r[0];
            return u && (o = ":not(" + o + ")"), r.length === 1 && p.nodeType === 1 ? c.find.matchesSelector(p, o) ? [p] : [] : c.find.matches(o, c.grep(r, function(v) {
                return v.nodeType === 1
            }))
        }, c.fn.extend({
            find: function(o) {
                var r, u, p = this.length,
                    v = this;
                if (typeof o != "string") return this.pushStack(c(o).filter(function() {
                    for (r = 0; r < p; r++)
                        if (c.contains(v[r], this)) return !0
                }));
                for (u = this.pushStack([]), r = 0; r < p; r++) c.find(o, v[r], u);
                return p > 1 ? c.uniqueSort(u) : u
            },
            filter: function(o) {
                return this.pushStack(G(this, o || [], !1))
            },
            not: function(o) {
                return this.pushStack(G(this, o || [], !0))
            },
            is: function(o) {
                return !!G(this, typeof o == "string" && Ne.test(o) ? c(o) : o || [], !1).length
            }
        });
        var se, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            ve = c.fn.init = function(o, r, u) {
                var p, v;
                if (!o) return this;
                if (u = u || se, typeof o == "string")
                    if (o[0] === "<" && o[o.length - 1] === ">" && o.length >= 3 ? p = [null, o, null] : p = Te.exec(o), p && (p[1] || !r))
                        if (p[1]) {
                            if (r = r instanceof c ? r[0] : r, c.merge(this, c.parseHTML(p[1], r && r.nodeType ? r.ownerDocument || r : L, !0)), je.test(p[1]) && c.isPlainObject(r))
                                for (p in r) oe(this[p]) ? this[p](r[p]) : this.attr(p, r[p]);
                            return this
                        } else return v = L.getElementById(p[2]), v && (this[0] = v, this.length = 1), this;
                else return !r || r.jquery ? (r || u).find(o) : this.constructor(r).find(o);
                else {
                    if (o.nodeType) return this[0] = o, this.length = 1, this;
                    if (oe(o)) return u.ready !== void 0 ? u.ready(o) : o(c)
                }
                return c.makeArray(o, this)
            };
        ve.prototype = c.fn, se = c(L);
        var we = /^(?:parents|prev(?:Until|All))/,
            ue = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        c.fn.extend({
            has: function(o) {
                var r = c(o, this),
                    u = r.length;
                return this.filter(function() {
                    for (var p = 0; p < u; p++)
                        if (c.contains(this, r[p])) return !0
                })
            },
            closest: function(o, r) {
                var u, p = 0,
                    v = this.length,
                    C = [],
                    T = typeof o != "string" && c(o);
                if (!Ne.test(o)) {
                    for (; p < v; p++)
                        for (u = this[p]; u && u !== r; u = u.parentNode)
                            if (u.nodeType < 11 && (T ? T.index(u) > -1 : u.nodeType === 1 && c.find.matchesSelector(u, o))) {
                                C.push(u);
                                break
                            }
                }
                return this.pushStack(C.length > 1 ? c.uniqueSort(C) : C)
            },
            index: function(o) {
                return o ? typeof o == "string" ? I.call(c(o), this[0]) : I.call(this, o.jquery ? o[0] : o) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(o, r) {
                return this.pushStack(c.uniqueSort(c.merge(this.get(), c(o, r))))
            },
            addBack: function(o) {
                return this.add(o == null ? this.prevObject : this.prevObject.filter(o))
            }
        });

        function xe(o, r) {
            for (;
                (o = o[r]) && o.nodeType !== 1;);
            return o
        }
        c.each({
            parent: function(o) {
                var r = o.parentNode;
                return r && r.nodeType !== 11 ? r : null
            },
            parents: function(o) {
                return Le(o, "parentNode")
            },
            parentsUntil: function(o, r, u) {
                return Le(o, "parentNode", u)
            },
            next: function(o) {
                return xe(o, "nextSibling")
            },
            prev: function(o) {
                return xe(o, "previousSibling")
            },
            nextAll: function(o) {
                return Le(o, "nextSibling")
            },
            prevAll: function(o) {
                return Le(o, "previousSibling")
            },
            nextUntil: function(o, r, u) {
                return Le(o, "nextSibling", u)
            },
            prevUntil: function(o, r, u) {
                return Le(o, "previousSibling", u)
            },
            siblings: function(o) {
                return lt((o.parentNode || {}).firstChild, o)
            },
            children: function(o) {
                return lt(o.firstChild)
            },
            contents: function(o) {
                return o.contentDocument != null && a(o.contentDocument) ? o.contentDocument : (Q(o, "template") && (o = o.content || o), c.merge([], o.childNodes))
            }
        }, function(o, r) {
            c.fn[o] = function(u, p) {
                var v = c.map(this, r, u);
                return o.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (v = c.filter(p, v)), this.length > 1 && (ue[o] || c.uniqueSort(v), we.test(o) && v.reverse()), this.pushStack(v)
            }
        });
        var Ie = /[^\x20\t\r\n\f]+/g;

        function Ve(o) {
            var r = {};
            return c.each(o.match(Ie) || [], function(u, p) {
                r[p] = !0
            }), r
        }
        c.Callbacks = function(o) {
            o = typeof o == "string" ? Ve(o) : c.extend({}, o);
            var r, u, p, v, C = [],
                T = [],
                H = -1,
                F = function() {
                    for (v = v || o.once, p = r = !0; T.length; H = -1)
                        for (u = T.shift(); ++H < C.length;) C[H].apply(u[0], u[1]) === !1 && o.stopOnFalse && (H = C.length, u = !1);
                    o.memory || (u = !1), r = !1, v && (u ? C = [] : C = "")
                },
                Z = {
                    add: function() {
                        return C && (u && !r && (H = C.length - 1, T.push(u)), function le(be) {
                            c.each(be, function(ne, he) {
                                oe(he) ? (!o.unique || !Z.has(he)) && C.push(he) : he && he.length && re(he) !== "string" && le(he)
                            })
                        }(arguments), u && !r && F()), this
                    },
                    remove: function() {
                        return c.each(arguments, function(le, be) {
                            for (var ne;
                                (ne = c.inArray(be, C, ne)) > -1;) C.splice(ne, 1), ne <= H && H--
                        }), this
                    },
                    has: function(le) {
                        return le ? c.inArray(le, C) > -1 : C.length > 0
                    },
                    empty: function() {
                        return C && (C = []), this
                    },
                    disable: function() {
                        return v = T = [], C = u = "", this
                    },
                    disabled: function() {
                        return !C
                    },
                    lock: function() {
                        return v = T = [], !u && !r && (C = u = ""), this
                    },
                    locked: function() {
                        return !!v
                    },
                    fireWith: function(le, be) {
                        return v || (be = be || [], be = [le, be.slice ? be.slice() : be], T.push(be), r || F()), this
                    },
                    fire: function() {
                        return Z.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!p
                    }
                };
            return Z
        };

        function Ke(o) {
            return o
        }

        function ct(o) {
            throw o
        }

        function Nt(o, r, u, p) {
            var v;
            try {
                o && oe(v = o.promise) ? v.call(o).done(r).fail(u) : o && oe(v = o.then) ? v.call(o, r, u) : r.apply(void 0, [o].slice(p))
            } catch (C) {
                u.apply(void 0, [C])
            }
        }
        c.extend({
            Deferred: function(o) {
                var r = [
                        ["notify", "progress", c.Callbacks("memory"), c.Callbacks("memory"), 2],
                        ["resolve", "done", c.Callbacks("once memory"), c.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", c.Callbacks("once memory"), c.Callbacks("once memory"), 1, "rejected"]
                    ],
                    u = "pending",
                    p = {
                        state: function() {
                            return u
                        },
                        always: function() {
                            return v.done(arguments).fail(arguments), this
                        },
                        catch: function(C) {
                            return p.then(null, C)
                        },
                        pipe: function() {
                            var C = arguments;
                            return c.Deferred(function(T) {
                                c.each(r, function(H, F) {
                                    var Z = oe(C[F[4]]) && C[F[4]];
                                    v[F[1]](function() {
                                        var le = Z && Z.apply(this, arguments);
                                        le && oe(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[F[0] + "With"](this, Z ? [le] : arguments)
                                    })
                                }), C = null
                            }).promise()
                        },
                        then: function(C, T, H) {
                            var F = 0;

                            function Z(le, be, ne, he) {
                                return function() {
                                    var We = this,
                                        st = arguments,
                                        $e = function() {
                                            var Bt, un;
                                            if (!(le < F)) {
                                                if (Bt = ne.apply(We, st), Bt === be.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Bt && (typeof Bt == "object" || typeof Bt == "function") && Bt.then, oe(un) ? he ? un.call(Bt, Z(F, be, Ke, he), Z(F, be, ct, he)) : (F++, un.call(Bt, Z(F, be, Ke, he), Z(F, be, ct, he), Z(F, be, Ke, be.notifyWith))) : (ne !== Ke && (We = void 0, st = [Bt]), (he || be.resolveWith)(We, st))
                                            }
                                        },
                                        Ht = he ? $e : function() {
                                            try {
                                                $e()
                                            } catch (Bt) {
                                                c.Deferred.exceptionHook && c.Deferred.exceptionHook(Bt, Ht.stackTrace), le + 1 >= F && (ne !== ct && (We = void 0, st = [Bt]), be.rejectWith(We, st))
                                            }
                                        };
                                    le ? Ht() : (c.Deferred.getStackHook && (Ht.stackTrace = c.Deferred.getStackHook()), e.setTimeout(Ht))
                                }
                            }
                            return c.Deferred(function(le) {
                                r[0][3].add(Z(0, le, oe(H) ? H : Ke, le.notifyWith)), r[1][3].add(Z(0, le, oe(C) ? C : Ke)), r[2][3].add(Z(0, le, oe(T) ? T : ct))
                            }).promise()
                        },
                        promise: function(C) {
                            return C != null ? c.extend(C, p) : p
                        }
                    },
                    v = {};
                return c.each(r, function(C, T) {
                    var H = T[2],
                        F = T[5];
                    p[T[1]] = H.add, F && H.add(function() {
                        u = F
                    }, r[3 - C][2].disable, r[3 - C][3].disable, r[0][2].lock, r[0][3].lock), H.add(T[3].fire), v[T[0]] = function() {
                        return v[T[0] + "With"](this === v ? void 0 : this, arguments), this
                    }, v[T[0] + "With"] = H.fireWith
                }), p.promise(v), o && o.call(v, v), v
            },
            when: function(o) {
                var r = arguments.length,
                    u = r,
                    p = Array(u),
                    v = f.call(arguments),
                    C = c.Deferred(),
                    T = function(H) {
                        return function(F) {
                            p[H] = this, v[H] = arguments.length > 1 ? f.call(arguments) : F, --r || C.resolveWith(p, v)
                        }
                    };
                if (r <= 1 && (Nt(o, C.done(T(u)).resolve, C.reject, !r), C.state() === "pending" || oe(v[u] && v[u].then))) return C.then();
                for (; u--;) Nt(v[u], T(u), C.reject);
                return C.promise()
            }
        });
        var Wt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        c.Deferred.exceptionHook = function(o, r) {
            e.console && e.console.warn && o && Wt.test(o.name) && e.console.warn("jQuery.Deferred exception: " + o.message, o.stack, r)
        }, c.readyException = function(o) {
            e.setTimeout(function() {
                throw o
            })
        };
        var E = c.Deferred();
        c.fn.ready = function(o) {
            return E.then(o).catch(function(r) {
                c.readyException(r)
            }), this
        }, c.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(o) {
                (o === !0 ? --c.readyWait : c.isReady) || (c.isReady = !0, !(o !== !0 && --c.readyWait > 0) && E.resolveWith(L, [c]))
            }
        }), c.ready.then = E.then;

        function l() {
            L.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), c.ready()
        }
        L.readyState === "complete" || L.readyState !== "loading" && !L.documentElement.doScroll ? e.setTimeout(c.ready) : (L.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(o, r, u, p, v, C, T) {
                var H = 0,
                    F = o.length,
                    Z = u == null;
                if (re(u) === "object") {
                    v = !0;
                    for (H in u) g(o, r, H, u[H], !0, C, T)
                } else if (p !== void 0 && (v = !0, oe(p) || (T = !0), Z && (T ? (r.call(o, p), r = null) : (Z = r, r = function(le, be, ne) {
                        return Z.call(c(le), ne)
                    })), r))
                    for (; H < F; H++) r(o[H], u, T ? p : p.call(o[H], H, r(o[H], u)));
                return v ? o : Z ? r.call(o) : F ? r(o[0], u) : C
            },
            x = /^-ms-/,
            A = /-([a-z])/g;

        function M(o, r) {
            return r.toUpperCase()
        }

        function D(o) {
            return o.replace(x, "ms-").replace(A, M)
        }
        var te = function(o) {
            return o.nodeType === 1 || o.nodeType === 9 || !+o.nodeType
        };

        function Se() {
            this.expando = c.expando + Se.uid++
        }
        Se.uid = 1, Se.prototype = {
            cache: function(o) {
                var r = o[this.expando];
                return r || (r = {}, te(o) && (o.nodeType ? o[this.expando] = r : Object.defineProperty(o, this.expando, {
                    value: r,
                    configurable: !0
                }))), r
            },
            set: function(o, r, u) {
                var p, v = this.cache(o);
                if (typeof r == "string") v[D(r)] = u;
                else
                    for (p in r) v[D(p)] = r[p];
                return v
            },
            get: function(o, r) {
                return r === void 0 ? this.cache(o) : o[this.expando] && o[this.expando][D(r)]
            },
            access: function(o, r, u) {
                return r === void 0 || r && typeof r == "string" && u === void 0 ? this.get(o, r) : (this.set(o, r, u), u !== void 0 ? u : r)
            },
            remove: function(o, r) {
                var u, p = o[this.expando];
                if (p !== void 0) {
                    if (r !== void 0)
                        for (Array.isArray(r) ? r = r.map(D) : (r = D(r), r = r in p ? [r] : r.match(Ie) || []), u = r.length; u--;) delete p[r[u]];
                    (r === void 0 || c.isEmptyObject(p)) && (o.nodeType ? o[this.expando] = void 0 : delete o[this.expando])
                }
            },
            hasData: function(o) {
                var r = o[this.expando];
                return r !== void 0 && !c.isEmptyObject(r)
            }
        };
        var de = new Se,
            Oe = new Se,
            Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ot = /[A-Z]/g;

        function Ct(o) {
            return o === "true" ? !0 : o === "false" ? !1 : o === "null" ? null : o === +o + "" ? +o : Re.test(o) ? JSON.parse(o) : o
        }

        function on(o, r, u) {
            var p;
            if (u === void 0 && o.nodeType === 1)
                if (p = "data-" + r.replace(ot, "-$&").toLowerCase(), u = o.getAttribute(p), typeof u == "string") {
                    try {
                        u = Ct(u)
                    } catch {}
                    Oe.set(o, r, u)
                } else u = void 0;
            return u
        }
        c.extend({
            hasData: function(o) {
                return Oe.hasData(o) || de.hasData(o)
            },
            data: function(o, r, u) {
                return Oe.access(o, r, u)
            },
            removeData: function(o, r) {
                Oe.remove(o, r)
            },
            _data: function(o, r, u) {
                return de.access(o, r, u)
            },
            _removeData: function(o, r) {
                de.remove(o, r)
            }
        }), c.fn.extend({
            data: function(o, r) {
                var u, p, v, C = this[0],
                    T = C && C.attributes;
                if (o === void 0) {
                    if (this.length && (v = Oe.get(C), C.nodeType === 1 && !de.get(C, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = D(p.slice(5)), on(C, p, v[p])));
                        de.set(C, "hasDataAttrs", !0)
                    }
                    return v
                }
                return typeof o == "object" ? this.each(function() {
                    Oe.set(this, o)
                }) : g(this, function(H) {
                    var F;
                    if (C && H === void 0) return F = Oe.get(C, o), F !== void 0 || (F = on(C, o), F !== void 0) ? F : void 0;
                    this.each(function() {
                        Oe.set(this, o, H)
                    })
                }, null, r, arguments.length > 1, null, !0)
            },
            removeData: function(o) {
                return this.each(function() {
                    Oe.remove(this, o)
                })
            }
        }), c.extend({
            queue: function(o, r, u) {
                var p;
                if (o) return r = (r || "fx") + "queue", p = de.get(o, r), u && (!p || Array.isArray(u) ? p = de.access(o, r, c.makeArray(u)) : p.push(u)), p || []
            },
            dequeue: function(o, r) {
                r = r || "fx";
                var u = c.queue(o, r),
                    p = u.length,
                    v = u.shift(),
                    C = c._queueHooks(o, r),
                    T = function() {
                        c.dequeue(o, r)
                    };
                v === "inprogress" && (v = u.shift(), p--), v && (r === "fx" && u.unshift("inprogress"), delete C.stop, v.call(o, T, C)), !p && C && C.empty.fire()
            },
            _queueHooks: function(o, r) {
                var u = r + "queueHooks";
                return de.get(o, u) || de.access(o, u, {
                    empty: c.Callbacks("once memory").add(function() {
                        de.remove(o, [r + "queue", u])
                    })
                })
            }
        }), c.fn.extend({
            queue: function(o, r) {
                var u = 2;
                return typeof o != "string" && (r = o, o = "fx", u--), arguments.length < u ? c.queue(this[0], o) : r === void 0 ? this : this.each(function() {
                    var p = c.queue(this, o, r);
                    c._queueHooks(this, o), o === "fx" && p[0] !== "inprogress" && c.dequeue(this, o)
                })
            },
            dequeue: function(o) {
                return this.each(function() {
                    c.dequeue(this, o)
                })
            },
            clearQueue: function(o) {
                return this.queue(o || "fx", [])
            },
            promise: function(o, r) {
                var u, p = 1,
                    v = c.Deferred(),
                    C = this,
                    T = this.length,
                    H = function() {
                        --p || v.resolveWith(C, [C])
                    };
                for (typeof o != "string" && (r = o, o = void 0), o = o || "fx"; T--;) u = de.get(C[T], o + "queueHooks"), u && u.empty && (p++, u.empty.add(H));
                return H(), v.promise(r)
            }
        });
        var ht = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            vt = new RegExp("^(?:([+-])=|)(" + ht + ")([a-z%]*)$", "i"),
            kt = ["Top", "Right", "Bottom", "Left"],
            Qt = L.documentElement,
            Ze = function(o) {
                return c.contains(o.ownerDocument, o)
            },
            Mt = {
                composed: !0
            };
        Qt.getRootNode && (Ze = function(o) {
            return c.contains(o.ownerDocument, o) || o.getRootNode(Mt) === o.ownerDocument
        });
        var $ = function(o, r) {
            return o = r || o, o.style.display === "none" || o.style.display === "" && Ze(o) && c.css(o, "display") === "none"
        };

        function B(o, r, u, p) {
            var v, C, T = 20,
                H = p ? function() {
                    return p.cur()
                } : function() {
                    return c.css(o, r, "")
                },
                F = H(),
                Z = u && u[3] || (c.cssNumber[r] ? "" : "px"),
                le = o.nodeType && (c.cssNumber[r] || Z !== "px" && +F) && vt.exec(c.css(o, r));
            if (le && le[3] !== Z) {
                for (F = F / 2, Z = Z || le[3], le = +F || 1; T--;) c.style(o, r, le + Z), (1 - C) * (1 - (C = H() / F || .5)) <= 0 && (T = 0), le = le / C;
                le = le * 2, c.style(o, r, le + Z), u = u || []
            }
            return u && (le = +le || +F || 0, v = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = v)), v
        }
        var U = {};

        function P(o) {
            var r, u = o.ownerDocument,
                p = o.nodeName,
                v = U[p];
            return v || (r = u.body.appendChild(u.createElement(p)), v = c.css(r, "display"), r.parentNode.removeChild(r), v === "none" && (v = "block"), U[p] = v, v)
        }

        function W(o, r) {
            for (var u, p, v = [], C = 0, T = o.length; C < T; C++) p = o[C], p.style && (u = p.style.display, r ? (u === "none" && (v[C] = de.get(p, "display") || null, v[C] || (p.style.display = "")), p.style.display === "" && $(p) && (v[C] = P(p))) : u !== "none" && (v[C] = "none", de.set(p, "display", u)));
            for (C = 0; C < T; C++) v[C] != null && (o[C].style.display = v[C]);
            return o
        }
        c.fn.extend({
            show: function() {
                return W(this, !0)
            },
            hide: function() {
                return W(this)
            },
            toggle: function(o) {
                return typeof o == "boolean" ? o ? this.show() : this.hide() : this.each(function() {
                    $(this) ? c(this).show() : c(this).hide()
                })
            }
        });
        var fe = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Be = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var o = L.createDocumentFragment(),
                r = o.appendChild(L.createElement("div")),
                u = L.createElement("input");
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), r.appendChild(u), J.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, r.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!r.cloneNode(!0).lastChild.defaultValue, r.innerHTML = "<option></option>", J.option = !!r.lastChild
        })();
        var De = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        De.tbody = De.tfoot = De.colgroup = De.caption = De.thead, De.th = De.td, J.option || (De.optgroup = De.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(o, r) {
            var u;
            return typeof o.getElementsByTagName < "u" ? u = o.getElementsByTagName(r || "*") : typeof o.querySelectorAll < "u" ? u = o.querySelectorAll(r || "*") : u = [], r === void 0 || r && Q(o, r) ? c.merge([o], u) : u
        }

        function $t(o, r) {
            for (var u = 0, p = o.length; u < p; u++) de.set(o[u], "globalEval", !r || de.get(r[u], "globalEval"))
        }
        var Qe = /<|&#?\w+;/;

        function On(o, r, u, p, v) {
            for (var C, T, H, F, Z, le, be = r.createDocumentFragment(), ne = [], he = 0, We = o.length; he < We; he++)
                if (C = o[he], C || C === 0)
                    if (re(C) === "object") c.merge(ne, C.nodeType ? [C] : C);
                    else if (!Qe.test(C)) ne.push(r.createTextNode(C));
            else {
                for (T = T || be.appendChild(r.createElement("div")), H = (pe.exec(C) || ["", ""])[1].toLowerCase(), F = De[H] || De._default, T.innerHTML = F[1] + c.htmlPrefilter(C) + F[2], le = F[0]; le--;) T = T.lastChild;
                c.merge(ne, T.childNodes), T = be.firstChild, T.textContent = ""
            }
            for (be.textContent = "", he = 0; C = ne[he++];) {
                if (p && c.inArray(C, p) > -1) {
                    v && v.push(C);
                    continue
                }
                if (Z = Ze(C), T = pt(be.appendChild(C), "script"), Z && $t(T), u)
                    for (le = 0; C = T[le++];) Be.test(C.type || "") && u.push(C)
            }
            return be
        }
        var Ln = /^([^.]*)(?:\.(.+)|)/;

        function rt() {
            return !0
        }

        function Rn() {
            return !1
        }

        function mi(o, r) {
            return o === To() == (r === "focus")
        }

        function To() {
            try {
                return L.activeElement
            } catch {}
        }

        function Tn(o, r, u, p, v, C) {
            var T, H;
            if (typeof r == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (H in r) Tn(o, H, u, p, r[H], C);
                return o
            }
            if (p == null && v == null ? (v = u, p = u = void 0) : v == null && (typeof u == "string" ? (v = p, p = void 0) : (v = p, p = u, u = void 0)), v === !1) v = Rn;
            else if (!v) return o;
            return C === 1 && (T = v, v = function(F) {
                return c().off(F), T.apply(this, arguments)
            }, v.guid = T.guid || (T.guid = c.guid++)), o.each(function() {
                c.event.add(this, r, v, p, u)
            })
        }
        c.event = {
            global: {},
            add: function(o, r, u, p, v) {
                var C, T, H, F, Z, le, be, ne, he, We, st, $e = de.get(o);
                if (!!te(o))
                    for (u.handler && (C = u, u = C.handler, v = C.selector), v && c.find.matchesSelector(Qt, v), u.guid || (u.guid = c.guid++), (F = $e.events) || (F = $e.events = Object.create(null)), (T = $e.handle) || (T = $e.handle = function(Ht) {
                            return typeof c < "u" && c.event.triggered !== Ht.type ? c.event.dispatch.apply(o, arguments) : void 0
                        }), r = (r || "").match(Ie) || [""], Z = r.length; Z--;) H = Ln.exec(r[Z]) || [], he = st = H[1], We = (H[2] || "").split(".").sort(), he && (be = c.event.special[he] || {}, he = (v ? be.delegateType : be.bindType) || he, be = c.event.special[he] || {}, le = c.extend({
                        type: he,
                        origType: st,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: v,
                        needsContext: v && c.expr.match.needsContext.test(v),
                        namespace: We.join(".")
                    }, C), (ne = F[he]) || (ne = F[he] = [], ne.delegateCount = 0, (!be.setup || be.setup.call(o, p, We, T) === !1) && o.addEventListener && o.addEventListener(he, T)), be.add && (be.add.call(o, le), le.handler.guid || (le.handler.guid = u.guid)), v ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), c.event.global[he] = !0)
            },
            remove: function(o, r, u, p, v) {
                var C, T, H, F, Z, le, be, ne, he, We, st, $e = de.hasData(o) && de.get(o);
                if (!(!$e || !(F = $e.events))) {
                    for (r = (r || "").match(Ie) || [""], Z = r.length; Z--;) {
                        if (H = Ln.exec(r[Z]) || [], he = st = H[1], We = (H[2] || "").split(".").sort(), !he) {
                            for (he in F) c.event.remove(o, he + r[Z], u, p, !0);
                            continue
                        }
                        for (be = c.event.special[he] || {}, he = (p ? be.delegateType : be.bindType) || he, ne = F[he] || [], H = H[2] && new RegExp("(^|\\.)" + We.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = C = ne.length; C--;) le = ne[C], (v || st === le.origType) && (!u || u.guid === le.guid) && (!H || H.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(C, 1), le.selector && ne.delegateCount--, be.remove && be.remove.call(o, le));
                        T && !ne.length && ((!be.teardown || be.teardown.call(o, We, $e.handle) === !1) && c.removeEvent(o, he, $e.handle), delete F[he])
                    }
                    c.isEmptyObject(F) && de.remove(o, "handle events")
                }
            },
            dispatch: function(o) {
                var r, u, p, v, C, T, H = new Array(arguments.length),
                    F = c.event.fix(o),
                    Z = (de.get(this, "events") || Object.create(null))[F.type] || [],
                    le = c.event.special[F.type] || {};
                for (H[0] = F, r = 1; r < arguments.length; r++) H[r] = arguments[r];
                if (F.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, F) === !1)) {
                    for (T = c.event.handlers.call(this, F, Z), r = 0;
                        (v = T[r++]) && !F.isPropagationStopped();)
                        for (F.currentTarget = v.elem, u = 0;
                            (C = v.handlers[u++]) && !F.isImmediatePropagationStopped();)(!F.rnamespace || C.namespace === !1 || F.rnamespace.test(C.namespace)) && (F.handleObj = C, F.data = C.data, p = ((c.event.special[C.origType] || {}).handle || C.handler).apply(v.elem, H), p !== void 0 && (F.result = p) === !1 && (F.preventDefault(), F.stopPropagation()));
                    return le.postDispatch && le.postDispatch.call(this, F), F.result
                }
            },
            handlers: function(o, r) {
                var u, p, v, C, T, H = [],
                    F = r.delegateCount,
                    Z = o.target;
                if (F && Z.nodeType && !(o.type === "click" && o.button >= 1)) {
                    for (; Z !== this; Z = Z.parentNode || this)
                        if (Z.nodeType === 1 && !(o.type === "click" && Z.disabled === !0)) {
                            for (C = [], T = {}, u = 0; u < F; u++) p = r[u], v = p.selector + " ", T[v] === void 0 && (T[v] = p.needsContext ? c(v, this).index(Z) > -1 : c.find(v, this, null, [Z]).length), T[v] && C.push(p);
                            C.length && H.push({
                                elem: Z,
                                handlers: C
                            })
                        }
                }
                return Z = this, F < r.length && H.push({
                    elem: Z,
                    handlers: r.slice(F)
                }), H
            },
            addProp: function(o, r) {
                Object.defineProperty(c.Event.prototype, o, {
                    enumerable: !0,
                    configurable: !0,
                    get: oe(r) ? function() {
                        if (this.originalEvent) return r(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[o]
                    },
                    set: function(u) {
                        Object.defineProperty(this, o, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: u
                        })
                    }
                })
            },
            fix: function(o) {
                return o[c.expando] ? o : new c.Event(o)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(o) {
                        var r = this || o;
                        return fe.test(r.type) && r.click && Q(r, "input") && rn(r, "click", rt), !1
                    },
                    trigger: function(o) {
                        var r = this || o;
                        return fe.test(r.type) && r.click && Q(r, "input") && rn(r, "click"), !0
                    },
                    _default: function(o) {
                        var r = o.target;
                        return fe.test(r.type) && r.click && Q(r, "input") && de.get(r, "click") || Q(r, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(o) {
                        o.result !== void 0 && o.originalEvent && (o.originalEvent.returnValue = o.result)
                    }
                }
            }
        };

        function rn(o, r, u) {
            if (!u) {
                de.get(o, r) === void 0 && c.event.add(o, r, rt);
                return
            }
            de.set(o, r, !1), c.event.add(o, r, {
                namespace: !1,
                handler: function(p) {
                    var v, C, T = de.get(this, r);
                    if (p.isTrigger & 1 && this[r]) {
                        if (T.length)(c.event.special[r] || {}).delegateType && p.stopPropagation();
                        else if (T = f.call(arguments), de.set(this, r, T), v = u(this, r), this[r](), C = de.get(this, r), T !== C || v ? de.set(this, r, !1) : C = {}, T !== C) return p.stopImmediatePropagation(), p.preventDefault(), C && C.value
                    } else T.length && (de.set(this, r, {
                        value: c.event.trigger(c.extend(T[0], c.Event.prototype), T.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        c.removeEvent = function(o, r, u) {
            o.removeEventListener && o.removeEventListener(r, u)
        }, c.Event = function(o, r) {
            if (!(this instanceof c.Event)) return new c.Event(o, r);
            o && o.type ? (this.originalEvent = o, this.type = o.type, this.isDefaultPrevented = o.defaultPrevented || o.defaultPrevented === void 0 && o.returnValue === !1 ? rt : Rn, this.target = o.target && o.target.nodeType === 3 ? o.target.parentNode : o.target, this.currentTarget = o.currentTarget, this.relatedTarget = o.relatedTarget) : this.type = o, r && c.extend(this, r), this.timeStamp = o && o.timeStamp || Date.now(), this[c.expando] = !0
        }, c.Event.prototype = {
            constructor: c.Event,
            isDefaultPrevented: Rn,
            isPropagationStopped: Rn,
            isImmediatePropagationStopped: Rn,
            isSimulated: !1,
            preventDefault: function() {
                var o = this.originalEvent;
                this.isDefaultPrevented = rt, o && !this.isSimulated && o.preventDefault()
            },
            stopPropagation: function() {
                var o = this.originalEvent;
                this.isPropagationStopped = rt, o && !this.isSimulated && o.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var o = this.originalEvent;
                this.isImmediatePropagationStopped = rt, o && !this.isSimulated && o.stopImmediatePropagation(), this.stopPropagation()
            }
        }, c.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, c.event.addProp), c.each({
            focus: "focusin",
            blur: "focusout"
        }, function(o, r) {
            c.event.special[o] = {
                setup: function() {
                    return rn(this, o, mi), !1
                },
                trigger: function() {
                    return rn(this, o), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: r
            }
        }), c.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(o, r) {
            c.event.special[o] = {
                delegateType: r,
                bindType: r,
                handle: function(u) {
                    var p, v = this,
                        C = u.relatedTarget,
                        T = u.handleObj;
                    return (!C || C !== v && !c.contains(v, C)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = r), p
                }
            }
        }), c.fn.extend({
            on: function(o, r, u, p) {
                return Tn(this, o, r, u, p)
            },
            one: function(o, r, u, p) {
                return Tn(this, o, r, u, p, 1)
            },
            off: function(o, r, u) {
                var p, v;
                if (o && o.preventDefault && o.handleObj) return p = o.handleObj, c(o.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof o == "object") {
                    for (v in o) this.off(v, r, o[v]);
                    return this
                }
                return (r === !1 || typeof r == "function") && (u = r, r = void 0), u === !1 && (u = Rn), this.each(function() {
                    c.event.remove(this, o, u, r)
                })
            }
        });
        var _o = /<script|<style|<link/i,
            Ao = /checked\s*(?:[^=]|=\s*.checked.)/i,
            yi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $i(o, r) {
            return Q(o, "table") && Q(r.nodeType !== 11 ? r : r.firstChild, "tr") && c(o).children("tbody")[0] || o
        }

        function wi(o) {
            return o.type = (o.getAttribute("type") !== null) + "/" + o.type, o
        }

        function vi(o) {
            return (o.type || "").slice(0, 5) === "true/" ? o.type = o.type.slice(5) : o.removeAttribute("type"), o
        }

        function ji(o, r) {
            var u, p, v, C, T, H, F;
            if (r.nodeType === 1) {
                if (de.hasData(o) && (C = de.get(o), F = C.events, F)) {
                    de.remove(r, "handle events");
                    for (v in F)
                        for (u = 0, p = F[v].length; u < p; u++) c.event.add(r, v, F[v][u])
                }
                Oe.hasData(o) && (T = Oe.access(o), H = c.extend({}, T), Oe.set(r, H))
            }
        }

        function Hi(o, r) {
            var u = r.nodeName.toLowerCase();
            u === "input" && fe.test(o.type) ? r.checked = o.checked : (u === "input" || u === "textarea") && (r.defaultValue = o.defaultValue)
        }

        function yn(o, r, u, p) {
            r = y(r);
            var v, C, T, H, F, Z, le = 0,
                be = o.length,
                ne = be - 1,
                he = r[0],
                We = oe(he);
            if (We || be > 1 && typeof he == "string" && !J.checkClone && Ao.test(he)) return o.each(function(st) {
                var $e = o.eq(st);
                We && (r[0] = he.call(this, st, $e.html())), yn($e, r, u, p)
            });
            if (be && (v = On(r, o[0].ownerDocument, !1, o, p), C = v.firstChild, v.childNodes.length === 1 && (v = C), C || p)) {
                for (T = c.map(pt(v, "script"), wi), H = T.length; le < be; le++) F = v, le !== ne && (F = c.clone(F, !0, !0), H && c.merge(T, pt(F, "script"))), u.call(o[le], F, le);
                if (H)
                    for (Z = T[T.length - 1].ownerDocument, c.map(T, vi), le = 0; le < H; le++) F = T[le], Be.test(F.type || "") && !de.access(F, "globalEval") && c.contains(Z, F) && (F.src && (F.type || "").toLowerCase() !== "module" ? c._evalUrl && !F.noModule && c._evalUrl(F.src, {
                        nonce: F.nonce || F.getAttribute("nonce")
                    }, Z) : ae(F.textContent.replace(yi, ""), F, Z))
            }
            return o
        }

        function Fi(o, r, u) {
            for (var p, v = r ? c.filter(r, o) : o, C = 0;
                (p = v[C]) != null; C++) !u && p.nodeType === 1 && c.cleanData(pt(p)), p.parentNode && (u && Ze(p) && $t(pt(p, "script")), p.parentNode.removeChild(p));
            return o
        }
        c.extend({
            htmlPrefilter: function(o) {
                return o
            },
            clone: function(o, r, u) {
                var p, v, C, T, H = o.cloneNode(!0),
                    F = Ze(o);
                if (!J.noCloneChecked && (o.nodeType === 1 || o.nodeType === 11) && !c.isXMLDoc(o))
                    for (T = pt(H), C = pt(o), p = 0, v = C.length; p < v; p++) Hi(C[p], T[p]);
                if (r)
                    if (u)
                        for (C = C || pt(o), T = T || pt(H), p = 0, v = C.length; p < v; p++) ji(C[p], T[p]);
                    else ji(o, H);
                return T = pt(H, "script"), T.length > 0 && $t(T, !F && pt(o, "script")), H
            },
            cleanData: function(o) {
                for (var r, u, p, v = c.event.special, C = 0;
                    (u = o[C]) !== void 0; C++)
                    if (te(u)) {
                        if (r = u[de.expando]) {
                            if (r.events)
                                for (p in r.events) v[p] ? c.event.remove(u, p) : c.removeEvent(u, p, r.handle);
                            u[de.expando] = void 0
                        }
                        u[Oe.expando] && (u[Oe.expando] = void 0)
                    }
            }
        }), c.fn.extend({
            detach: function(o) {
                return Fi(this, o, !0)
            },
            remove: function(o) {
                return Fi(this, o)
            },
            text: function(o) {
                return g(this, function(r) {
                    return r === void 0 ? c.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = r)
                    })
                }, null, o, arguments.length)
            },
            append: function() {
                return yn(this, arguments, function(o) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var r = $i(this, o);
                        r.appendChild(o)
                    }
                })
            },
            prepend: function() {
                return yn(this, arguments, function(o) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var r = $i(this, o);
                        r.insertBefore(o, r.firstChild)
                    }
                })
            },
            before: function() {
                return yn(this, arguments, function(o) {
                    this.parentNode && this.parentNode.insertBefore(o, this)
                })
            },
            after: function() {
                return yn(this, arguments, function(o) {
                    this.parentNode && this.parentNode.insertBefore(o, this.nextSibling)
                })
            },
            empty: function() {
                for (var o, r = 0;
                    (o = this[r]) != null; r++) o.nodeType === 1 && (c.cleanData(pt(o, !1)), o.textContent = "");
                return this
            },
            clone: function(o, r) {
                return o = o == null ? !1 : o, r = r == null ? o : r, this.map(function() {
                    return c.clone(this, o, r)
                })
            },
            html: function(o) {
                return g(this, function(r) {
                    var u = this[0] || {},
                        p = 0,
                        v = this.length;
                    if (r === void 0 && u.nodeType === 1) return u.innerHTML;
                    if (typeof r == "string" && !_o.test(r) && !De[(pe.exec(r) || ["", ""])[1].toLowerCase()]) {
                        r = c.htmlPrefilter(r);
                        try {
                            for (; p < v; p++) u = this[p] || {}, u.nodeType === 1 && (c.cleanData(pt(u, !1)), u.innerHTML = r);
                            u = 0
                        } catch {}
                    }
                    u && this.empty().append(r)
                }, null, o, arguments.length)
            },
            replaceWith: function() {
                var o = [];
                return yn(this, arguments, function(r) {
                    var u = this.parentNode;
                    c.inArray(this, o) < 0 && (c.cleanData(pt(this)), u && u.replaceChild(r, this))
                }, o)
            }
        }), c.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(o, r) {
            c.fn[o] = function(u) {
                for (var p, v = [], C = c(u), T = C.length - 1, H = 0; H <= T; H++) p = H === T ? this : this.clone(!0), c(C[H])[r](p), S.apply(v, p.get());
                return this.pushStack(v)
            }
        });
        var bi = new RegExp("^(" + ht + ")(?!px)[a-z%]+$", "i"),
            Fn = function(o) {
                var r = o.ownerDocument.defaultView;
                return (!r || !r.opener) && (r = e), r.getComputedStyle(o)
            },
            Gi = function(o, r, u) {
                var p, v, C = {};
                for (v in r) C[v] = o.style[v], o.style[v] = r[v];
                p = u.call(o);
                for (v in r) o.style[v] = C[v];
                return p
            },
            ki = new RegExp(kt.join("|"), "i");
        (function() {
            function o() {
                if (!!Z) {
                    F.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Qt.appendChild(F).appendChild(Z);
                    var le = e.getComputedStyle(Z);
                    u = le.top !== "1%", H = r(le.marginLeft) === 12, Z.style.right = "60%", C = r(le.right) === 36, p = r(le.width) === 36, Z.style.position = "absolute", v = r(Z.offsetWidth / 3) === 12, Qt.removeChild(F), Z = null
                }
            }

            function r(le) {
                return Math.round(parseFloat(le))
            }
            var u, p, v, C, T, H, F = L.createElement("div"),
                Z = L.createElement("div");
            !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = Z.style.backgroundClip === "content-box", c.extend(J, {
                boxSizingReliable: function() {
                    return o(), p
                },
                pixelBoxStyles: function() {
                    return o(), C
                },
                pixelPosition: function() {
                    return o(), u
                },
                reliableMarginLeft: function() {
                    return o(), H
                },
                scrollboxSize: function() {
                    return o(), v
                },
                reliableTrDimensions: function() {
                    var le, be, ne, he;
                    return T == null && (le = L.createElement("table"), be = L.createElement("tr"), ne = L.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", be.style.cssText = "border:1px solid", be.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Qt.appendChild(le).appendChild(be).appendChild(ne), he = e.getComputedStyle(be), T = parseInt(he.height, 10) + parseInt(he.borderTopWidth, 10) + parseInt(he.borderBottomWidth, 10) === be.offsetHeight, Qt.removeChild(le)), T
                }
            }))
        })();

        function tt(o, r, u) {
            var p, v, C, T, H = o.style;
            return u = u || Fn(o), u && (T = u.getPropertyValue(r) || u[r], T === "" && !Ze(o) && (T = c.style(o, r)), !J.pixelBoxStyles() && bi.test(T) && ki.test(r) && (p = H.width, v = H.minWidth, C = H.maxWidth, H.minWidth = H.maxWidth = H.width = T, T = u.width, H.width = p, H.minWidth = v, H.maxWidth = C)), T !== void 0 ? T + "" : T
        }

        function w(o, r) {
            return {
                get: function() {
                    if (o()) {
                        delete this.get;
                        return
                    }
                    return (this.get = r).apply(this, arguments)
                }
            }
        }
        var s = ["Webkit", "Moz", "ms"],
            k = L.createElement("div").style,
            _ = {};

        function K(o) {
            for (var r = o[0].toUpperCase() + o.slice(1), u = s.length; u--;)
                if (o = s[u] + r, o in k) return o
        }

        function ke(o) {
            var r = c.cssProps[o] || _[o];
            return r || (o in k ? o : _[o] = K(o) || o)
        }
        var ze = /^(none|table(?!-c[ea]).+)/,
            Ot = /^--/,
            Ut = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Gn = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Bn(o, r, u) {
            var p = vt.exec(r);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : r
        }

        function Wn(o, r, u, p, v, C) {
            var T = r === "width" ? 1 : 0,
                H = 0,
                F = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (F += c.css(o, u + kt[T], !0, v)), p ? (u === "content" && (F -= c.css(o, "padding" + kt[T], !0, v)), u !== "margin" && (F -= c.css(o, "border" + kt[T] + "Width", !0, v))) : (F += c.css(o, "padding" + kt[T], !0, v), u !== "padding" ? F += c.css(o, "border" + kt[T] + "Width", !0, v) : H += c.css(o, "border" + kt[T] + "Width", !0, v));
            return !p && C >= 0 && (F += Math.max(0, Math.ceil(o["offset" + r[0].toUpperCase() + r.slice(1)] - C - F - H - .5)) || 0), F
        }

        function qo(o, r, u) {
            var p = Fn(o),
                v = !J.boxSizingReliable() || u,
                C = v && c.css(o, "boxSizing", !1, p) === "border-box",
                T = C,
                H = tt(o, r, p),
                F = "offset" + r[0].toUpperCase() + r.slice(1);
            if (bi.test(H)) {
                if (!u) return H;
                H = "auto"
            }
            return (!J.boxSizingReliable() && C || !J.reliableTrDimensions() && Q(o, "tr") || H === "auto" || !parseFloat(H) && c.css(o, "display", !1, p) === "inline") && o.getClientRects().length && (C = c.css(o, "boxSizing", !1, p) === "border-box", T = F in o, T && (H = o[F])), H = parseFloat(H) || 0, H + Wn(o, r, u || (C ? "border" : "content"), T, p, H) + "px"
        }
        c.extend({
            cssHooks: {
                opacity: {
                    get: function(o, r) {
                        if (r) {
                            var u = tt(o, "opacity");
                            return u === "" ? "1" : u
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(o, r, u, p) {
                if (!(!o || o.nodeType === 3 || o.nodeType === 8 || !o.style)) {
                    var v, C, T, H = D(r),
                        F = Ot.test(r),
                        Z = o.style;
                    if (F || (r = ke(H)), T = c.cssHooks[r] || c.cssHooks[H], u !== void 0) {
                        if (C = typeof u, C === "string" && (v = vt.exec(u)) && v[1] && (u = B(o, r, v), C = "number"), u == null || u !== u) return;
                        C === "number" && !F && (u += v && v[3] || (c.cssNumber[H] ? "" : "px")), !J.clearCloneStyle && u === "" && r.indexOf("background") === 0 && (Z[r] = "inherit"), (!T || !("set" in T) || (u = T.set(o, u, p)) !== void 0) && (F ? Z.setProperty(r, u) : Z[r] = u)
                    } else return T && "get" in T && (v = T.get(o, !1, p)) !== void 0 ? v : Z[r]
                }
            },
            css: function(o, r, u, p) {
                var v, C, T, H = D(r),
                    F = Ot.test(r);
                return F || (r = ke(H)), T = c.cssHooks[r] || c.cssHooks[H], T && "get" in T && (v = T.get(o, !0, u)), v === void 0 && (v = tt(o, r, p)), v === "normal" && r in Gn && (v = Gn[r]), u === "" || u ? (C = parseFloat(v), u === !0 || isFinite(C) ? C || 0 : v) : v
            }
        }), c.each(["height", "width"], function(o, r) {
            c.cssHooks[r] = {
                get: function(u, p, v) {
                    if (p) return ze.test(c.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Gi(u, Ut, function() {
                        return qo(u, r, v)
                    }) : qo(u, r, v)
                },
                set: function(u, p, v) {
                    var C, T = Fn(u),
                        H = !J.scrollboxSize() && T.position === "absolute",
                        F = H || v,
                        Z = F && c.css(u, "boxSizing", !1, T) === "border-box",
                        le = v ? Wn(u, r, v, Z, T) : 0;
                    return Z && H && (le -= Math.ceil(u["offset" + r[0].toUpperCase() + r.slice(1)] - parseFloat(T[r]) - Wn(u, r, "border", !1, T) - .5)), le && (C = vt.exec(p)) && (C[3] || "px") !== "px" && (u.style[r] = p, p = c.css(u, r)), Bn(u, p, le)
                }
            }
        }), c.cssHooks.marginLeft = w(J.reliableMarginLeft, function(o, r) {
            if (r) return (parseFloat(tt(o, "marginLeft")) || o.getBoundingClientRect().left - Gi(o, {
                marginLeft: 0
            }, function() {
                return o.getBoundingClientRect().left
            })) + "px"
        }), c.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(o, r) {
            c.cssHooks[o + r] = {
                expand: function(u) {
                    for (var p = 0, v = {}, C = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) v[o + kt[p] + r] = C[p] || C[p - 2] || C[0];
                    return v
                }
            }, o !== "margin" && (c.cssHooks[o + r].set = Bn)
        }), c.fn.extend({
            css: function(o, r) {
                return g(this, function(u, p, v) {
                    var C, T, H = {},
                        F = 0;
                    if (Array.isArray(p)) {
                        for (C = Fn(u), T = p.length; F < T; F++) H[p[F]] = c.css(u, p[F], !1, C);
                        return H
                    }
                    return v !== void 0 ? c.style(u, p, v) : c.css(u, p)
                }, o, r, arguments.length > 1)
            }
        });

        function Yt(o, r, u, p, v) {
            return new Yt.prototype.init(o, r, u, p, v)
        }
        c.Tween = Yt, Yt.prototype = {
            constructor: Yt,
            init: function(o, r, u, p, v, C) {
                this.elem = o, this.prop = u, this.easing = v || c.easing._default, this.options = r, this.start = this.now = this.cur(), this.end = p, this.unit = C || (c.cssNumber[u] ? "" : "px")
            },
            cur: function() {
                var o = Yt.propHooks[this.prop];
                return o && o.get ? o.get(this) : Yt.propHooks._default.get(this)
            },
            run: function(o) {
                var r, u = Yt.propHooks[this.prop];
                return this.options.duration ? this.pos = r = c.easing[this.easing](o, this.options.duration * o, 0, 1, this.options.duration) : this.pos = r = o, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : Yt.propHooks._default.set(this), this
            }
        }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
            _default: {
                get: function(o) {
                    var r;
                    return o.elem.nodeType !== 1 || o.elem[o.prop] != null && o.elem.style[o.prop] == null ? o.elem[o.prop] : (r = c.css(o.elem, o.prop, ""), !r || r === "auto" ? 0 : r)
                },
                set: function(o) {
                    c.fx.step[o.prop] ? c.fx.step[o.prop](o) : o.elem.nodeType === 1 && (c.cssHooks[o.prop] || o.elem.style[ke(o.prop)] != null) ? c.style(o.elem, o.prop, o.now + o.unit) : o.elem[o.prop] = o.now
                }
            }
        }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
            set: function(o) {
                o.elem.nodeType && o.elem.parentNode && (o.elem[o.prop] = o.now)
            }
        }, c.easing = {
            linear: function(o) {
                return o
            },
            swing: function(o) {
                return .5 - Math.cos(o * Math.PI) / 2
            },
            _default: "swing"
        }, c.fx = Yt.prototype.init, c.fx.step = {};
        var jt, Wi, Cs = /^(?:toggle|show|hide)$/,
            Es = /queueHooks$/;

        function Oo() {
            Wi && (L.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Oo) : e.setTimeout(Oo, c.fx.interval), c.fx.tick())
        }

        function Ro() {
            return e.setTimeout(function() {
                jt = void 0
            }), jt = Date.now()
        }

        function zi(o, r) {
            var u, p = 0,
                v = {
                    height: o
                };
            for (r = r ? 1 : 0; p < 4; p += 2 - r) u = kt[p], v["margin" + u] = v["padding" + u] = o;
            return r && (v.opacity = v.width = o), v
        }

        function yr(o, r, u) {
            for (var p, v = (kn.tweeners[r] || []).concat(kn.tweeners["*"]), C = 0, T = v.length; C < T; C++)
                if (p = v[C].call(u, r, o)) return p
        }

        function xs(o, r, u) {
            var p, v, C, T, H, F, Z, le, be = "width" in r || "height" in r,
                ne = this,
                he = {},
                We = o.style,
                st = o.nodeType && $(o),
                $e = de.get(o, "fxshow");
            u.queue || (T = c._queueHooks(o, "fx"), T.unqueued == null && (T.unqueued = 0, H = T.empty.fire, T.empty.fire = function() {
                T.unqueued || H()
            }), T.unqueued++, ne.always(function() {
                ne.always(function() {
                    T.unqueued--, c.queue(o, "fx").length || T.empty.fire()
                })
            }));
            for (p in r)
                if (v = r[p], Cs.test(v)) {
                    if (delete r[p], C = C || v === "toggle", v === (st ? "hide" : "show"))
                        if (v === "show" && $e && $e[p] !== void 0) st = !0;
                        else continue;
                    he[p] = $e && $e[p] || c.style(o, p)
                } if (F = !c.isEmptyObject(r), !(!F && c.isEmptyObject(he))) {
                be && o.nodeType === 1 && (u.overflow = [We.overflow, We.overflowX, We.overflowY], Z = $e && $e.display, Z == null && (Z = de.get(o, "display")), le = c.css(o, "display"), le === "none" && (Z ? le = Z : (W([o], !0), Z = o.style.display || Z, le = c.css(o, "display"), W([o]))), (le === "inline" || le === "inline-block" && Z != null) && c.css(o, "float") === "none" && (F || (ne.done(function() {
                    We.display = Z
                }), Z == null && (le = We.display, Z = le === "none" ? "" : le)), We.display = "inline-block")), u.overflow && (We.overflow = "hidden", ne.always(function() {
                    We.overflow = u.overflow[0], We.overflowX = u.overflow[1], We.overflowY = u.overflow[2]
                })), F = !1;
                for (p in he) F || ($e ? "hidden" in $e && (st = $e.hidden) : $e = de.access(o, "fxshow", {
                    display: Z
                }), C && ($e.hidden = !st), st && W([o], !0), ne.done(function() {
                    st || W([o]), de.remove(o, "fxshow");
                    for (p in he) c.style(o, p, he[p])
                })), F = yr(st ? $e[p] : 0, p, ne), p in $e || ($e[p] = F.start, st && (F.end = F.start, F.start = 0))
            }
        }

        function wr(o, r) {
            var u, p, v, C, T;
            for (u in o)
                if (p = D(u), v = r[p], C = o[u], Array.isArray(C) && (v = C[1], C = o[u] = C[0]), u !== p && (o[p] = C, delete o[u]), T = c.cssHooks[p], T && "expand" in T) {
                    C = T.expand(C), delete o[p];
                    for (u in C) u in o || (o[u] = C[u], r[u] = v)
                } else r[p] = v
        }

        function kn(o, r, u) {
            var p, v, C = 0,
                T = kn.prefilters.length,
                H = c.Deferred().always(function() {
                    delete F.elem
                }),
                F = function() {
                    if (v) return !1;
                    for (var be = jt || Ro(), ne = Math.max(0, Z.startTime + Z.duration - be), he = ne / Z.duration || 0, We = 1 - he, st = 0, $e = Z.tweens.length; st < $e; st++) Z.tweens[st].run(We);
                    return H.notifyWith(o, [Z, We, ne]), We < 1 && $e ? ne : ($e || H.notifyWith(o, [Z, 1, 0]), H.resolveWith(o, [Z]), !1)
                },
                Z = H.promise({
                    elem: o,
                    props: c.extend({}, r),
                    opts: c.extend(!0, {
                        specialEasing: {},
                        easing: c.easing._default
                    }, u),
                    originalProperties: r,
                    originalOptions: u,
                    startTime: jt || Ro(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(be, ne) {
                        var he = c.Tween(o, Z.opts, be, ne, Z.opts.specialEasing[be] || Z.opts.easing);
                        return Z.tweens.push(he), he
                    },
                    stop: function(be) {
                        var ne = 0,
                            he = be ? Z.tweens.length : 0;
                        if (v) return this;
                        for (v = !0; ne < he; ne++) Z.tweens[ne].run(1);
                        return be ? (H.notifyWith(o, [Z, 1, 0]), H.resolveWith(o, [Z, be])) : H.rejectWith(o, [Z, be]), this
                    }
                }),
                le = Z.props;
            for (wr(le, Z.opts.specialEasing); C < T; C++)
                if (p = kn.prefilters[C].call(Z, o, le, Z.opts), p) return oe(p.stop) && (c._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return c.map(le, yr, Z), oe(Z.opts.start) && Z.opts.start.call(o, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), c.fx.timer(c.extend(F, {
                elem: o,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        c.Animation = c.extend(kn, {
                tweeners: {
                    "*": [function(o, r) {
                        var u = this.createTween(o, r);
                        return B(u.elem, o, vt.exec(r), u), u
                    }]
                },
                tweener: function(o, r) {
                    oe(o) ? (r = o, o = ["*"]) : o = o.match(Ie);
                    for (var u, p = 0, v = o.length; p < v; p++) u = o[p], kn.tweeners[u] = kn.tweeners[u] || [], kn.tweeners[u].unshift(r)
                },
                prefilters: [xs],
                prefilter: function(o, r) {
                    r ? kn.prefilters.unshift(o) : kn.prefilters.push(o)
                }
            }), c.speed = function(o, r, u) {
                var p = o && typeof o == "object" ? c.extend({}, o) : {
                    complete: u || !u && r || oe(o) && o,
                    duration: o,
                    easing: u && r || r && !oe(r) && r
                };
                return c.fx.off ? p.duration = 0 : typeof p.duration != "number" && (p.duration in c.fx.speeds ? p.duration = c.fx.speeds[p.duration] : p.duration = c.fx.speeds._default), (p.queue == null || p.queue === !0) && (p.queue = "fx"), p.old = p.complete, p.complete = function() {
                    oe(p.old) && p.old.call(this), p.queue && c.dequeue(this, p.queue)
                }, p
            }, c.fn.extend({
                fadeTo: function(o, r, u, p) {
                    return this.filter($).css("opacity", 0).show().end().animate({
                        opacity: r
                    }, o, u, p)
                },
                animate: function(o, r, u, p) {
                    var v = c.isEmptyObject(o),
                        C = c.speed(r, u, p),
                        T = function() {
                            var H = kn(this, c.extend({}, o), C);
                            (v || de.get(this, "finish")) && H.stop(!0)
                        };
                    return T.finish = T, v || C.queue === !1 ? this.each(T) : this.queue(C.queue, T)
                },
                stop: function(o, r, u) {
                    var p = function(v) {
                        var C = v.stop;
                        delete v.stop, C(u)
                    };
                    return typeof o != "string" && (u = r, r = o, o = void 0), r && this.queue(o || "fx", []), this.each(function() {
                        var v = !0,
                            C = o != null && o + "queueHooks",
                            T = c.timers,
                            H = de.get(this);
                        if (C) H[C] && H[C].stop && p(H[C]);
                        else
                            for (C in H) H[C] && H[C].stop && Es.test(C) && p(H[C]);
                        for (C = T.length; C--;) T[C].elem === this && (o == null || T[C].queue === o) && (T[C].anim.stop(u), v = !1, T.splice(C, 1));
                        (v || !u) && c.dequeue(this, o)
                    })
                },
                finish: function(o) {
                    return o !== !1 && (o = o || "fx"), this.each(function() {
                        var r, u = de.get(this),
                            p = u[o + "queue"],
                            v = u[o + "queueHooks"],
                            C = c.timers,
                            T = p ? p.length : 0;
                        for (u.finish = !0, c.queue(this, o, []), v && v.stop && v.stop.call(this, !0), r = C.length; r--;) C[r].elem === this && C[r].queue === o && (C[r].anim.stop(!0), C.splice(r, 1));
                        for (r = 0; r < T; r++) p[r] && p[r].finish && p[r].finish.call(this);
                        delete u.finish
                    })
                }
            }), c.each(["toggle", "show", "hide"], function(o, r) {
                var u = c.fn[r];
                c.fn[r] = function(p, v, C) {
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(zi(r, !0), p, v, C)
                }
            }), c.each({
                slideDown: zi("show"),
                slideUp: zi("hide"),
                slideToggle: zi("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(o, r) {
                c.fn[o] = function(u, p, v) {
                    return this.animate(r, u, p, v)
                }
            }), c.timers = [], c.fx.tick = function() {
                var o, r = 0,
                    u = c.timers;
                for (jt = Date.now(); r < u.length; r++) o = u[r], !o() && u[r] === o && u.splice(r--, 1);
                u.length || c.fx.stop(), jt = void 0
            }, c.fx.timer = function(o) {
                c.timers.push(o), c.fx.start()
            }, c.fx.interval = 13, c.fx.start = function() {
                Wi || (Wi = !0, Oo())
            }, c.fx.stop = function() {
                Wi = null
            }, c.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, c.fn.delay = function(o, r) {
                return o = c.fx && c.fx.speeds[o] || o, r = r || "fx", this.queue(r, function(u, p) {
                    var v = e.setTimeout(u, o);
                    p.stop = function() {
                        e.clearTimeout(v)
                    }
                })
            },
            function() {
                var o = L.createElement("input"),
                    r = L.createElement("select"),
                    u = r.appendChild(L.createElement("option"));
                o.type = "checkbox", J.checkOn = o.value !== "", J.optSelected = u.selected, o = L.createElement("input"), o.value = "t", o.type = "radio", J.radioValue = o.value === "t"
            }();
        var Po, Ci = c.expr.attrHandle;
        c.fn.extend({
            attr: function(o, r) {
                return g(this, c.attr, o, r, arguments.length > 1)
            },
            removeAttr: function(o) {
                return this.each(function() {
                    c.removeAttr(this, o)
                })
            }
        }), c.extend({
            attr: function(o, r, u) {
                var p, v, C = o.nodeType;
                if (!(C === 3 || C === 8 || C === 2)) {
                    if (typeof o.getAttribute > "u") return c.prop(o, r, u);
                    if ((C !== 1 || !c.isXMLDoc(o)) && (v = c.attrHooks[r.toLowerCase()] || (c.expr.match.bool.test(r) ? Po : void 0)), u !== void 0) {
                        if (u === null) {
                            c.removeAttr(o, r);
                            return
                        }
                        return v && "set" in v && (p = v.set(o, u, r)) !== void 0 ? p : (o.setAttribute(r, u + ""), u)
                    }
                    return v && "get" in v && (p = v.get(o, r)) !== null ? p : (p = c.find.attr(o, r), p == null ? void 0 : p)
                }
            },
            attrHooks: {
                type: {
                    set: function(o, r) {
                        if (!J.radioValue && r === "radio" && Q(o, "input")) {
                            var u = o.value;
                            return o.setAttribute("type", r), u && (o.value = u), r
                        }
                    }
                }
            },
            removeAttr: function(o, r) {
                var u, p = 0,
                    v = r && r.match(Ie);
                if (v && o.nodeType === 1)
                    for (; u = v[p++];) o.removeAttribute(u)
            }
        }), Po = {
            set: function(o, r, u) {
                return r === !1 ? c.removeAttr(o, u) : o.setAttribute(u, u), u
            }
        }, c.each(c.expr.match.bool.source.match(/\w+/g), function(o, r) {
            var u = Ci[r] || c.find.attr;
            Ci[r] = function(p, v, C) {
                var T, H, F = v.toLowerCase();
                return C || (H = Ci[F], Ci[F] = T, T = u(p, v, C) != null ? F : null, Ci[F] = H), T
            }
        });
        var Ss = /^(?:input|select|textarea|button)$/i,
            Is = /^(?:a|area)$/i;
        c.fn.extend({
            prop: function(o, r) {
                return g(this, c.prop, o, r, arguments.length > 1)
            },
            removeProp: function(o) {
                return this.each(function() {
                    delete this[c.propFix[o] || o]
                })
            }
        }), c.extend({
            prop: function(o, r, u) {
                var p, v, C = o.nodeType;
                if (!(C === 3 || C === 8 || C === 2)) return (C !== 1 || !c.isXMLDoc(o)) && (r = c.propFix[r] || r, v = c.propHooks[r]), u !== void 0 ? v && "set" in v && (p = v.set(o, u, r)) !== void 0 ? p : o[r] = u : v && "get" in v && (p = v.get(o, r)) !== null ? p : o[r]
            },
            propHooks: {
                tabIndex: {
                    get: function(o) {
                        var r = c.find.attr(o, "tabindex");
                        return r ? parseInt(r, 10) : Ss.test(o.nodeName) || Is.test(o.nodeName) && o.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), J.optSelected || (c.propHooks.selected = {
            get: function(o) {
                var r = o.parentNode;
                return r && r.parentNode && r.parentNode.selectedIndex, null
            },
            set: function(o) {
                var r = o.parentNode;
                r && (r.selectedIndex, r.parentNode && r.parentNode.selectedIndex)
            }
        }), c.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            c.propFix[this.toLowerCase()] = this
        });

        function zn(o) {
            var r = o.match(Ie) || [];
            return r.join(" ")
        }

        function Un(o) {
            return o.getAttribute && o.getAttribute("class") || ""
        }

        function Mo(o) {
            return Array.isArray(o) ? o : typeof o == "string" ? o.match(Ie) || [] : []
        }
        c.fn.extend({
            addClass: function(o) {
                var r, u, p, v, C, T, H, F = 0;
                if (oe(o)) return this.each(function(Z) {
                    c(this).addClass(o.call(this, Z, Un(this)))
                });
                if (r = Mo(o), r.length) {
                    for (; u = this[F++];)
                        if (v = Un(u), p = u.nodeType === 1 && " " + zn(v) + " ", p) {
                            for (T = 0; C = r[T++];) p.indexOf(" " + C + " ") < 0 && (p += C + " ");
                            H = zn(p), v !== H && u.setAttribute("class", H)
                        }
                }
                return this
            },
            removeClass: function(o) {
                var r, u, p, v, C, T, H, F = 0;
                if (oe(o)) return this.each(function(Z) {
                    c(this).removeClass(o.call(this, Z, Un(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (r = Mo(o), r.length) {
                    for (; u = this[F++];)
                        if (v = Un(u), p = u.nodeType === 1 && " " + zn(v) + " ", p) {
                            for (T = 0; C = r[T++];)
                                for (; p.indexOf(" " + C + " ") > -1;) p = p.replace(" " + C + " ", " ");
                            H = zn(p), v !== H && u.setAttribute("class", H)
                        }
                }
                return this
            },
            toggleClass: function(o, r) {
                var u = typeof o,
                    p = u === "string" || Array.isArray(o);
                return typeof r == "boolean" && p ? r ? this.addClass(o) : this.removeClass(o) : oe(o) ? this.each(function(v) {
                    c(this).toggleClass(o.call(this, v, Un(this), r), r)
                }) : this.each(function() {
                    var v, C, T, H;
                    if (p)
                        for (C = 0, T = c(this), H = Mo(o); v = H[C++];) T.hasClass(v) ? T.removeClass(v) : T.addClass(v);
                    else(o === void 0 || u === "boolean") && (v = Un(this), v && de.set(this, "__className__", v), this.setAttribute && this.setAttribute("class", v || o === !1 ? "" : de.get(this, "__className__") || ""))
                })
            },
            hasClass: function(o) {
                var r, u, p = 0;
                for (r = " " + o + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + zn(Un(u)) + " ").indexOf(r) > -1) return !0;
                return !1
            }
        });
        var Ts = /\r/g;
        c.fn.extend({
            val: function(o) {
                var r, u, p, v = this[0];
                return arguments.length ? (p = oe(o), this.each(function(C) {
                    var T;
                    this.nodeType === 1 && (p ? T = o.call(this, C, c(this).val()) : T = o, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = c.map(T, function(H) {
                        return H == null ? "" : H + ""
                    })), r = c.valHooks[this.type] || c.valHooks[this.nodeName.toLowerCase()], (!r || !("set" in r) || r.set(this, T, "value") === void 0) && (this.value = T))
                })) : v ? (r = c.valHooks[v.type] || c.valHooks[v.nodeName.toLowerCase()], r && "get" in r && (u = r.get(v, "value")) !== void 0 ? u : (u = v.value, typeof u == "string" ? u.replace(Ts, "") : u == null ? "" : u)) : void 0
            }
        }), c.extend({
            valHooks: {
                option: {
                    get: function(o) {
                        var r = c.find.attr(o, "value");
                        return r != null ? r : zn(c.text(o))
                    }
                },
                select: {
                    get: function(o) {
                        var r, u, p, v = o.options,
                            C = o.selectedIndex,
                            T = o.type === "select-one",
                            H = T ? null : [],
                            F = T ? C + 1 : v.length;
                        for (C < 0 ? p = F : p = T ? C : 0; p < F; p++)
                            if (u = v[p], (u.selected || p === C) && !u.disabled && (!u.parentNode.disabled || !Q(u.parentNode, "optgroup"))) {
                                if (r = c(u).val(), T) return r;
                                H.push(r)
                            } return H
                    },
                    set: function(o, r) {
                        for (var u, p, v = o.options, C = c.makeArray(r), T = v.length; T--;) p = v[T], (p.selected = c.inArray(c.valHooks.option.get(p), C) > -1) && (u = !0);
                        return u || (o.selectedIndex = -1), C
                    }
                }
            }
        }), c.each(["radio", "checkbox"], function() {
            c.valHooks[this] = {
                set: function(o, r) {
                    if (Array.isArray(r)) return o.checked = c.inArray(c(o).val(), r) > -1
                }
            }, J.checkOn || (c.valHooks[this].get = function(o) {
                return o.getAttribute("value") === null ? "on" : o.value
            })
        }), J.focusin = "onfocusin" in e;
        var Lo = /^(?:focusinfocus|focusoutblur)$/,
            Yn = function(o) {
                o.stopPropagation()
            };
        c.extend(c.event, {
            trigger: function(o, r, u, p) {
                var v, C, T, H, F, Z, le, be, ne = [u || L],
                    he = V.call(o, "type") ? o.type : o,
                    We = V.call(o, "namespace") ? o.namespace.split(".") : [];
                if (C = be = T = u = u || L, !(u.nodeType === 3 || u.nodeType === 8) && !Lo.test(he + c.event.triggered) && (he.indexOf(".") > -1 && (We = he.split("."), he = We.shift(), We.sort()), F = he.indexOf(":") < 0 && "on" + he, o = o[c.expando] ? o : new c.Event(he, typeof o == "object" && o), o.isTrigger = p ? 2 : 3, o.namespace = We.join("."), o.rnamespace = o.namespace ? new RegExp("(^|\\.)" + We.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, o.result = void 0, o.target || (o.target = u), r = r == null ? [o] : c.makeArray(r, [o]), le = c.event.special[he] || {}, !(!p && le.trigger && le.trigger.apply(u, r) === !1))) {
                    if (!p && !le.noBubble && !m(u)) {
                        for (H = le.delegateType || he, Lo.test(H + he) || (C = C.parentNode); C; C = C.parentNode) ne.push(C), T = C;
                        T === (u.ownerDocument || L) && ne.push(T.defaultView || T.parentWindow || e)
                    }
                    for (v = 0;
                        (C = ne[v++]) && !o.isPropagationStopped();) be = C, o.type = v > 1 ? H : le.bindType || he, Z = (de.get(C, "events") || Object.create(null))[o.type] && de.get(C, "handle"), Z && Z.apply(C, r), Z = F && C[F], Z && Z.apply && te(C) && (o.result = Z.apply(C, r), o.result === !1 && o.preventDefault());
                    return o.type = he, !p && !o.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), r) === !1) && te(u) && F && oe(u[he]) && !m(u) && (T = u[F], T && (u[F] = null), c.event.triggered = he, o.isPropagationStopped() && be.addEventListener(he, Yn), u[he](), o.isPropagationStopped() && be.removeEventListener(he, Yn), c.event.triggered = void 0, T && (u[F] = T)), o.result
                }
            },
            simulate: function(o, r, u) {
                var p = c.extend(new c.Event, u, {
                    type: o,
                    isSimulated: !0
                });
                c.event.trigger(p, null, r)
            }
        }), c.fn.extend({
            trigger: function(o, r) {
                return this.each(function() {
                    c.event.trigger(o, r, this)
                })
            },
            triggerHandler: function(o, r) {
                var u = this[0];
                if (u) return c.event.trigger(o, r, u, !0)
            }
        }), J.focusin || c.each({
            focus: "focusin",
            blur: "focusout"
        }, function(o, r) {
            var u = function(p) {
                c.event.simulate(r, p.target, c.event.fix(p))
            };
            c.event.special[r] = {
                setup: function() {
                    var p = this.ownerDocument || this.document || this,
                        v = de.access(p, r);
                    v || p.addEventListener(o, u, !0), de.access(p, r, (v || 0) + 1)
                },
                teardown: function() {
                    var p = this.ownerDocument || this.document || this,
                        v = de.access(p, r) - 1;
                    v ? de.access(p, r, v) : (p.removeEventListener(o, u, !0), de.remove(p, r))
                }
            }
        });
        var Ei = e.location,
            Bo = {
                guid: Date.now()
            },
            Ui = /\?/;
        c.parseXML = function(o) {
            var r, u;
            if (!o || typeof o != "string") return null;
            try {
                r = new e.DOMParser().parseFromString(o, "text/xml")
            } catch {}
            return u = r && r.getElementsByTagName("parsererror")[0], (!r || u) && c.error("Invalid XML: " + (u ? c.map(u.childNodes, function(p) {
                return p.textContent
            }).join(`
`) : o)), r
        };
        var _s = /\[\]$/,
            vr = /\r?\n/g,
            As = /^(?:submit|button|image|reset|file)$/i,
            qs = /^(?:input|select|textarea|keygen)/i;

        function Do(o, r, u, p) {
            var v;
            if (Array.isArray(r)) c.each(r, function(C, T) {
                u || _s.test(o) ? p(o, T) : Do(o + "[" + (typeof T == "object" && T != null ? C : "") + "]", T, u, p)
            });
            else if (!u && re(r) === "object")
                for (v in r) Do(o + "[" + v + "]", r[v], u, p);
            else p(o, r)
        }
        c.param = function(o, r) {
            var u, p = [],
                v = function(C, T) {
                    var H = oe(T) ? T() : T;
                    p[p.length] = encodeURIComponent(C) + "=" + encodeURIComponent(H == null ? "" : H)
                };
            if (o == null) return "";
            if (Array.isArray(o) || o.jquery && !c.isPlainObject(o)) c.each(o, function() {
                v(this.name, this.value)
            });
            else
                for (u in o) Do(u, o[u], r, v);
            return p.join("&")
        }, c.fn.extend({
            serialize: function() {
                return c.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var o = c.prop(this, "elements");
                    return o ? c.makeArray(o) : this
                }).filter(function() {
                    var o = this.type;
                    return this.name && !c(this).is(":disabled") && qs.test(this.nodeName) && !As.test(o) && (this.checked || !fe.test(o))
                }).map(function(o, r) {
                    var u = c(this).val();
                    return u == null ? null : Array.isArray(u) ? c.map(u, function(p) {
                        return {
                            name: r.name,
                            value: p.replace(vr, `\r
`)
                        }
                    }) : {
                        name: r.name,
                        value: u.replace(vr, `\r
`)
                    }
                }).get()
            }
        });
        var Os = /%20/g,
            Rs = /#.*$/,
            Ps = /([?&])_=[^&]*/,
            Jn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            br = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ms = /^(?:GET|HEAD)$/,
            Ls = /^\/\//,
            kr = {},
            No = {},
            Cr = "*/".concat("*"),
            Vo = L.createElement("a");
        Vo.href = Ei.href;

        function Er(o) {
            return function(r, u) {
                typeof r != "string" && (u = r, r = "*");
                var p, v = 0,
                    C = r.toLowerCase().match(Ie) || [];
                if (oe(u))
                    for (; p = C[v++];) p[0] === "+" ? (p = p.slice(1) || "*", (o[p] = o[p] || []).unshift(u)) : (o[p] = o[p] || []).push(u)
            }
        }

        function xr(o, r, u, p) {
            var v = {},
                C = o === No;

            function T(H) {
                var F;
                return v[H] = !0, c.each(o[H] || [], function(Z, le) {
                    var be = le(r, u, p);
                    if (typeof be == "string" && !C && !v[be]) return r.dataTypes.unshift(be), T(be), !1;
                    if (C) return !(F = be)
                }), F
            }
            return T(r.dataTypes[0]) || !v["*"] && T("*")
        }

        function $o(o, r) {
            var u, p, v = c.ajaxSettings.flatOptions || {};
            for (u in r) r[u] !== void 0 && ((v[u] ? o : p || (p = {}))[u] = r[u]);
            return p && c.extend(!0, o, p), o
        }

        function Bs(o, r, u) {
            for (var p, v, C, T, H = o.contents, F = o.dataTypes; F[0] === "*";) F.shift(), p === void 0 && (p = o.mimeType || r.getResponseHeader("Content-Type"));
            if (p) {
                for (v in H)
                    if (H[v] && H[v].test(p)) {
                        F.unshift(v);
                        break
                    }
            }
            if (F[0] in u) C = F[0];
            else {
                for (v in u) {
                    if (!F[0] || o.converters[v + " " + F[0]]) {
                        C = v;
                        break
                    }
                    T || (T = v)
                }
                C = C || T
            }
            if (C) return C !== F[0] && F.unshift(C), u[C]
        }

        function Ds(o, r, u, p) {
            var v, C, T, H, F, Z = {},
                le = o.dataTypes.slice();
            if (le[1])
                for (T in o.converters) Z[T.toLowerCase()] = o.converters[T];
            for (C = le.shift(); C;)
                if (o.responseFields[C] && (u[o.responseFields[C]] = r), !F && p && o.dataFilter && (r = o.dataFilter(r, o.dataType)), F = C, C = le.shift(), C) {
                    if (C === "*") C = F;
                    else if (F !== "*" && F !== C) {
                        if (T = Z[F + " " + C] || Z["* " + C], !T) {
                            for (v in Z)
                                if (H = v.split(" "), H[1] === C && (T = Z[F + " " + H[0]] || Z["* " + H[0]], T)) {
                                    T === !0 ? T = Z[v] : Z[v] !== !0 && (C = H[0], le.unshift(H[1]));
                                    break
                                }
                        }
                        if (T !== !0)
                            if (T && o.throws) r = T(r);
                            else try {
                                r = T(r)
                            } catch (be) {
                                return {
                                    state: "parsererror",
                                    error: T ? be : "No conversion from " + F + " to " + C
                                }
                            }
                    }
                } return {
                state: "success",
                data: r
            }
        }
        c.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ei.href,
                type: "GET",
                isLocal: br.test(Ei.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Cr,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": c.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(o, r) {
                return r ? $o($o(o, c.ajaxSettings), r) : $o(c.ajaxSettings, o)
            },
            ajaxPrefilter: Er(kr),
            ajaxTransport: Er(No),
            ajax: function(o, r) {
                typeof o == "object" && (r = o, o = void 0), r = r || {};
                var u, p, v, C, T, H, F, Z, le, be, ne = c.ajaxSetup({}, r),
                    he = ne.context || ne,
                    We = ne.context && (he.nodeType || he.jquery) ? c(he) : c.event,
                    st = c.Deferred(),
                    $e = c.Callbacks("once memory"),
                    Ht = ne.statusCode || {},
                    Bt = {},
                    un = {},
                    xt = "canceled",
                    nt = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Rt;
                            if (F) {
                                if (!C)
                                    for (C = {}; Rt = Jn.exec(v);) C[Rt[1].toLowerCase() + " "] = (C[Rt[1].toLowerCase() + " "] || []).concat(Rt[2]);
                                Rt = C[ft.toLowerCase() + " "]
                            }
                            return Rt == null ? null : Rt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return F ? v : null
                        },
                        setRequestHeader: function(ft, Rt) {
                            return F == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Bt[ft] = Rt), this
                        },
                        overrideMimeType: function(ft) {
                            return F == null && (ne.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Rt;
                            if (ft)
                                if (F) nt.always(ft[nt.status]);
                                else
                                    for (Rt in ft) Ht[Rt] = [Ht[Rt], ft[Rt]];
                            return this
                        },
                        abort: function(ft) {
                            var Rt = ft || xt;
                            return u && u.abort(Rt), sn(0, Rt), this
                        }
                    };
                if (st.promise(nt), ne.url = ((o || ne.url || Ei.href) + "").replace(Ls, Ei.protocol + "//"), ne.type = r.method || r.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(Ie) || [""], ne.crossDomain == null) {
                    H = L.createElement("a");
                    try {
                        H.href = ne.url, H.href = H.href, ne.crossDomain = Vo.protocol + "//" + Vo.host != H.protocol + "//" + H.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = c.param(ne.data, ne.traditional)), xr(kr, ne, r, nt), F) return nt;
                Z = c.event && ne.global, Z && c.active++ === 0 && c.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Ms.test(ne.type), p = ne.url.replace(Rs, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Os, "+")) : (be = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Ui.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Ps, "$1"), be = (Ui.test(p) ? "&" : "?") + "_=" + Bo.guid++ + be), ne.url = p + be), ne.ifModified && (c.lastModified[p] && nt.setRequestHeader("If-Modified-Since", c.lastModified[p]), c.etag[p] && nt.setRequestHeader("If-None-Match", c.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || r.contentType) && nt.setRequestHeader("Content-Type", ne.contentType), nt.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + Cr + "; q=0.01" : "") : ne.accepts["*"]);
                for (le in ne.headers) nt.setRequestHeader(le, ne.headers[le]);
                if (ne.beforeSend && (ne.beforeSend.call(he, nt, ne) === !1 || F)) return nt.abort();
                if (xt = "abort", $e.add(ne.complete), nt.done(ne.success), nt.fail(ne.error), u = xr(No, ne, r, nt), !u) sn(-1, "No Transport");
                else {
                    if (nt.readyState = 1, Z && We.trigger("ajaxSend", [nt, ne]), F) return nt;
                    ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                        nt.abort("timeout")
                    }, ne.timeout));
                    try {
                        F = !1, u.send(Bt, sn)
                    } catch (ft) {
                        if (F) throw ft;
                        sn(-1, ft)
                    }
                }

                function sn(ft, Rt, Si, Yi) {
                    var dn, Qn, Xn, an, Pn, wn = Rt;
                    F || (F = !0, T && e.clearTimeout(T), u = void 0, v = Yi || "", nt.readyState = ft > 0 ? 4 : 0, dn = ft >= 200 && ft < 300 || ft === 304, Si && (an = Bs(ne, nt, Si)), !dn && c.inArray("script", ne.dataTypes) > -1 && c.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = Ds(ne, an, nt, dn), dn ? (ne.ifModified && (Pn = nt.getResponseHeader("Last-Modified"), Pn && (c.lastModified[p] = Pn), Pn = nt.getResponseHeader("etag"), Pn && (c.etag[p] = Pn)), ft === 204 || ne.type === "HEAD" ? wn = "nocontent" : ft === 304 ? wn = "notmodified" : (wn = an.state, Qn = an.data, Xn = an.error, dn = !Xn)) : (Xn = wn, (ft || !wn) && (wn = "error", ft < 0 && (ft = 0))), nt.status = ft, nt.statusText = (Rt || wn) + "", dn ? st.resolveWith(he, [Qn, wn, nt]) : st.rejectWith(he, [nt, wn, Xn]), nt.statusCode(Ht), Ht = void 0, Z && We.trigger(dn ? "ajaxSuccess" : "ajaxError", [nt, ne, dn ? Qn : Xn]), $e.fireWith(he, [nt, wn]), Z && (We.trigger("ajaxComplete", [nt, ne]), --c.active || c.event.trigger("ajaxStop")))
                }
                return nt
            },
            getJSON: function(o, r, u) {
                return c.get(o, r, u, "json")
            },
            getScript: function(o, r) {
                return c.get(o, void 0, r, "script")
            }
        }), c.each(["get", "post"], function(o, r) {
            c[r] = function(u, p, v, C) {
                return oe(p) && (C = C || v, v = p, p = void 0), c.ajax(c.extend({
                    url: u,
                    type: r,
                    dataType: C,
                    data: p,
                    success: v
                }, c.isPlainObject(u) && u))
            }
        }), c.ajaxPrefilter(function(o) {
            var r;
            for (r in o.headers) r.toLowerCase() === "content-type" && (o.contentType = o.headers[r] || "")
        }), c._evalUrl = function(o, r, u) {
            return c.ajax({
                url: o,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(p) {
                    c.globalEval(p, r, u)
                }
            })
        }, c.fn.extend({
            wrapAll: function(o) {
                var r;
                return this[0] && (oe(o) && (o = o.call(this[0])), r = c(o, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && r.insertBefore(this[0]), r.map(function() {
                    for (var u = this; u.firstElementChild;) u = u.firstElementChild;
                    return u
                }).append(this)), this
            },
            wrapInner: function(o) {
                return oe(o) ? this.each(function(r) {
                    c(this).wrapInner(o.call(this, r))
                }) : this.each(function() {
                    var r = c(this),
                        u = r.contents();
                    u.length ? u.wrapAll(o) : r.append(o)
                })
            },
            wrap: function(o) {
                var r = oe(o);
                return this.each(function(u) {
                    c(this).wrapAll(r ? o.call(this, u) : o)
                })
            },
            unwrap: function(o) {
                return this.parent(o).not("body").each(function() {
                    c(this).replaceWith(this.childNodes)
                }), this
            }
        }), c.expr.pseudos.hidden = function(o) {
            return !c.expr.pseudos.visible(o)
        }, c.expr.pseudos.visible = function(o) {
            return !!(o.offsetWidth || o.offsetHeight || o.getClientRects().length)
        }, c.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch {}
        };
        var Ns = {
                0: 200,
                1223: 204
            },
            xi = c.ajaxSettings.xhr();
        J.cors = !!xi && "withCredentials" in xi, J.ajax = xi = !!xi, c.ajaxTransport(function(o) {
            var r, u;
            if (J.cors || xi && !o.crossDomain) return {
                send: function(p, v) {
                    var C, T = o.xhr();
                    if (T.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (C in o.xhrFields) T[C] = o.xhrFields[C];
                    o.mimeType && T.overrideMimeType && T.overrideMimeType(o.mimeType), !o.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (C in p) T.setRequestHeader(C, p[C]);
                    r = function(H) {
                        return function() {
                            r && (r = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, H === "abort" ? T.abort() : H === "error" ? typeof T.status != "number" ? v(0, "error") : v(T.status, T.statusText) : v(Ns[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
                                binary: T.response
                            } : {
                                text: T.responseText
                            }, T.getAllResponseHeaders()))
                        }
                    }, T.onload = r(), u = T.onerror = T.ontimeout = r("error"), T.onabort !== void 0 ? T.onabort = u : T.onreadystatechange = function() {
                        T.readyState === 4 && e.setTimeout(function() {
                            r && u()
                        })
                    }, r = r("abort");
                    try {
                        T.send(o.hasContent && o.data || null)
                    } catch (H) {
                        if (r) throw H
                    }
                },
                abort: function() {
                    r && r()
                }
            }
        }), c.ajaxPrefilter(function(o) {
            o.crossDomain && (o.contents.script = !1)
        }), c.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(o) {
                    return c.globalEval(o), o
                }
            }
        }), c.ajaxPrefilter("script", function(o) {
            o.cache === void 0 && (o.cache = !1), o.crossDomain && (o.type = "GET")
        }), c.ajaxTransport("script", function(o) {
            if (o.crossDomain || o.scriptAttrs) {
                var r, u;
                return {
                    send: function(p, v) {
                        r = c("<script>").attr(o.scriptAttrs || {}).prop({
                            charset: o.scriptCharset,
                            src: o.url
                        }).on("load error", u = function(C) {
                            r.remove(), u = null, C && v(C.type === "error" ? 404 : 200, C.type)
                        }), L.head.appendChild(r[0])
                    },
                    abort: function() {
                        u && u()
                    }
                }
            }
        });
        var jo = [],
            Ho = /(=)\?(?=&|$)|\?\?/;
        c.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var o = jo.pop() || c.expando + "_" + Bo.guid++;
                return this[o] = !0, o
            }
        }), c.ajaxPrefilter("json jsonp", function(o, r, u) {
            var p, v, C, T = o.jsonp !== !1 && (Ho.test(o.url) ? "url" : typeof o.data == "string" && (o.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ho.test(o.data) && "data");
            if (T || o.dataTypes[0] === "jsonp") return p = o.jsonpCallback = oe(o.jsonpCallback) ? o.jsonpCallback() : o.jsonpCallback, T ? o[T] = o[T].replace(Ho, "$1" + p) : o.jsonp !== !1 && (o.url += (Ui.test(o.url) ? "&" : "?") + o.jsonp + "=" + p), o.converters["script json"] = function() {
                return C || c.error(p + " was not called"), C[0]
            }, o.dataTypes[0] = "json", v = e[p], e[p] = function() {
                C = arguments
            }, u.always(function() {
                v === void 0 ? c(e).removeProp(p) : e[p] = v, o[p] && (o.jsonpCallback = r.jsonpCallback, jo.push(p)), C && oe(v) && v(C[0]), C = v = void 0
            }), "script"
        }), J.createHTMLDocument = function() {
            var o = L.implementation.createHTMLDocument("").body;
            return o.innerHTML = "<form></form><form></form>", o.childNodes.length === 2
        }(), c.parseHTML = function(o, r, u) {
            if (typeof o != "string") return [];
            typeof r == "boolean" && (u = r, r = !1);
            var p, v, C;
            return r || (J.createHTMLDocument ? (r = L.implementation.createHTMLDocument(""), p = r.createElement("base"), p.href = L.location.href, r.head.appendChild(p)) : r = L), v = je.exec(o), C = !u && [], v ? [r.createElement(v[1])] : (v = On([o], r, C), C && C.length && c(C).remove(), c.merge([], v.childNodes))
        }, c.fn.load = function(o, r, u) {
            var p, v, C, T = this,
                H = o.indexOf(" ");
            return H > -1 && (p = zn(o.slice(H)), o = o.slice(0, H)), oe(r) ? (u = r, r = void 0) : r && typeof r == "object" && (v = "POST"), T.length > 0 && c.ajax({
                url: o,
                type: v || "GET",
                dataType: "html",
                data: r
            }).done(function(F) {
                C = arguments, T.html(p ? c("<div>").append(c.parseHTML(F)).find(p) : F)
            }).always(u && function(F, Z) {
                T.each(function() {
                    u.apply(this, C || [F.responseText, Z, F])
                })
            }), this
        }, c.expr.pseudos.animated = function(o) {
            return c.grep(c.timers, function(r) {
                return o === r.elem
            }).length
        }, c.offset = {
            setOffset: function(o, r, u) {
                var p, v, C, T, H, F, Z, le = c.css(o, "position"),
                    be = c(o),
                    ne = {};
                le === "static" && (o.style.position = "relative"), H = be.offset(), C = c.css(o, "top"), F = c.css(o, "left"), Z = (le === "absolute" || le === "fixed") && (C + F).indexOf("auto") > -1, Z ? (p = be.position(), T = p.top, v = p.left) : (T = parseFloat(C) || 0, v = parseFloat(F) || 0), oe(r) && (r = r.call(o, u, c.extend({}, H))), r.top != null && (ne.top = r.top - H.top + T), r.left != null && (ne.left = r.left - H.left + v), "using" in r ? r.using.call(o, ne) : be.css(ne)
            }
        }, c.fn.extend({
            offset: function(o) {
                if (arguments.length) return o === void 0 ? this : this.each(function(v) {
                    c.offset.setOffset(this, o, v)
                });
                var r, u, p = this[0];
                if (!!p) return p.getClientRects().length ? (r = p.getBoundingClientRect(), u = p.ownerDocument.defaultView, {
                    top: r.top + u.pageYOffset,
                    left: r.left + u.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (!!this[0]) {
                    var o, r, u, p = this[0],
                        v = {
                            top: 0,
                            left: 0
                        };
                    if (c.css(p, "position") === "fixed") r = p.getBoundingClientRect();
                    else {
                        for (r = this.offset(), u = p.ownerDocument, o = p.offsetParent || u.documentElement; o && (o === u.body || o === u.documentElement) && c.css(o, "position") === "static";) o = o.parentNode;
                        o && o !== p && o.nodeType === 1 && (v = c(o).offset(), v.top += c.css(o, "borderTopWidth", !0), v.left += c.css(o, "borderLeftWidth", !0))
                    }
                    return {
                        top: r.top - v.top - c.css(p, "marginTop", !0),
                        left: r.left - v.left - c.css(p, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var o = this.offsetParent; o && c.css(o, "position") === "static";) o = o.offsetParent;
                    return o || Qt
                })
            }
        }), c.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(o, r) {
            var u = r === "pageYOffset";
            c.fn[o] = function(p) {
                return g(this, function(v, C, T) {
                    var H;
                    if (m(v) ? H = v : v.nodeType === 9 && (H = v.defaultView), T === void 0) return H ? H[r] : v[C];
                    H ? H.scrollTo(u ? H.pageXOffset : T, u ? T : H.pageYOffset) : v[C] = T
                }, o, p, arguments.length)
            }
        }), c.each(["top", "left"], function(o, r) {
            c.cssHooks[r] = w(J.pixelPosition, function(u, p) {
                if (p) return p = tt(u, r), bi.test(p) ? c(u).position()[r] + "px" : p
            })
        }), c.each({
            Height: "height",
            Width: "width"
        }, function(o, r) {
            c.each({
                padding: "inner" + o,
                content: r,
                "": "outer" + o
            }, function(u, p) {
                c.fn[p] = function(v, C) {
                    var T = arguments.length && (u || typeof v != "boolean"),
                        H = u || (v === !0 || C === !0 ? "margin" : "border");
                    return g(this, function(F, Z, le) {
                        var be;
                        return m(F) ? p.indexOf("outer") === 0 ? F["inner" + o] : F.document.documentElement["client" + o] : F.nodeType === 9 ? (be = F.documentElement, Math.max(F.body["scroll" + o], be["scroll" + o], F.body["offset" + o], be["offset" + o], be["client" + o])) : le === void 0 ? c.css(F, Z, H) : c.style(F, Z, le, H)
                    }, r, T ? v : void 0, T)
                }
            })
        }), c.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(o, r) {
            c.fn[r] = function(u) {
                return this.on(r, u)
            }
        }), c.fn.extend({
            bind: function(o, r, u) {
                return this.on(o, null, r, u)
            },
            unbind: function(o, r) {
                return this.off(o, null, r)
            },
            delegate: function(o, r, u, p) {
                return this.on(r, o, u, p)
            },
            undelegate: function(o, r, u) {
                return arguments.length === 1 ? this.off(o, "**") : this.off(r, o || "**", u)
            },
            hover: function(o, r) {
                return this.mouseenter(o).mouseleave(r || o)
            }
        }), c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(o, r) {
            c.fn[r] = function(u, p) {
                return arguments.length > 0 ? this.on(r, null, u, p) : this.trigger(r)
            }
        });
        var Sr = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        c.proxy = function(o, r) {
            var u, p, v;
            if (typeof r == "string" && (u = o[r], r = o, o = u), !!oe(o)) return p = f.call(arguments, 2), v = function() {
                return o.apply(r || this, p.concat(f.call(arguments)))
            }, v.guid = o.guid = o.guid || c.guid++, v
        }, c.holdReady = function(o) {
            o ? c.readyWait++ : c.ready(!0)
        }, c.isArray = Array.isArray, c.parseJSON = JSON.parse, c.nodeName = Q, c.isFunction = oe, c.isWindow = m, c.camelCase = D, c.type = re, c.now = Date.now, c.isNumeric = function(o) {
            var r = c.type(o);
            return (r === "number" || r === "string") && !isNaN(o - parseFloat(o))
        }, c.trim = function(o) {
            return o == null ? "" : (o + "").replace(Sr, "")
        };
        var Vs = e.jQuery,
            $s = e.$;
        return c.noConflict = function(o) {
            return e.$ === c && (e.$ = $s), o && e.jQuery === c && (e.jQuery = Vs), c
        }, typeof n > "u" && (e.jQuery = e.$ = c), c
    })
})(Na);
const Me = Na.exports;
var Xe = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof yt == "object" && yt.global === yt && yt; {
            var i = Bi.exports,
                a;
            try {
                a = Na.exports
            } catch {}
            e(n, t, i, a)
        }
    })(function(e, n, i, a) {
        var f = e.Backbone,
            y = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = a, n.noConflict = function() {
            return e.Backbone = f, this
        }, n.emulateHTTP = !1, n.emulateJSON = !1;
        var S = function(E, l, g) {
                switch (E) {
                    case 1:
                        return function() {
                            return i[l](this[g])
                        };
                    case 2:
                        return function(x) {
                            return i[l](this[g], x)
                        };
                    case 3:
                        return function(x, A) {
                            return i[l](this[g], O(x, this), A)
                        };
                    case 4:
                        return function(x, A, M) {
                            return i[l](this[g], O(x, this), A, M)
                        };
                    default:
                        return function() {
                            var x = y.call(arguments);
                            return x.unshift(this[g]), i[l].apply(i, x)
                        }
                }
            },
            I = function(E, l, g) {
                i.each(l, function(x, A) {
                    i[A] && (E.prototype[A] = S(x, A, g))
                })
            },
            O = function(E, l) {
                return i.isFunction(E) ? E : i.isObject(E) && !l._isModel(E) ? R(E) : i.isString(E) ? function(g) {
                    return g.get(E)
                } : E
            },
            R = function(E) {
                var l = i.matches(E);
                return function(g) {
                    return l(g.attributes)
                }
            },
            V = n.Events = {},
            X = /\s+/,
            ie = function(E, l, g, x, A) {
                var M = 0,
                    D;
                if (g && typeof g == "object")
                    for (x !== void 0 && ("context" in A) && A.context === void 0 && (A.context = x), D = i.keys(g); M < D.length; M++) l = ie(E, l, D[M], g[D[M]], A);
                else if (g && X.test(g))
                    for (D = g.split(X); M < D.length; M++) l = E(l, D[M], x, A);
                else l = E(l, g, x, A);
                return l
            };
        V.on = function(E, l, g) {
            return J(this, E, l, g)
        };
        var J = function(E, l, g, x, A) {
            if (E._events = ie(oe, E._events || {}, l, g, {
                    context: x,
                    ctx: E,
                    listening: A
                }), A) {
                var M = E._listeners || (E._listeners = {});
                M[A.id] = A
            }
            return E
        };
        V.listenTo = function(E, l, g) {
            if (!E) return this;
            var x = E._listenId || (E._listenId = i.uniqueId("l")),
                A = this._listeningTo || (this._listeningTo = {}),
                M = A[x];
            if (!M) {
                var D = this._listenId || (this._listenId = i.uniqueId("l"));
                M = A[x] = {
                    obj: E,
                    objId: x,
                    id: D,
                    listeningTo: A,
                    count: 0
                }
            }
            return J(E, l, g, this, M), this
        };
        var oe = function(E, l, g, x) {
            if (g) {
                var A = E[l] || (E[l] = []),
                    M = x.context,
                    D = x.ctx,
                    te = x.listening;
                te && te.count++, A.push({
                    callback: g,
                    context: M,
                    ctx: M || D,
                    listening: te
                })
            }
            return E
        };
        V.off = function(E, l, g) {
            return this._events ? (this._events = ie(m, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, V.stopListening = function(E, l, g) {
            var x = this._listeningTo;
            if (!x) return this;
            for (var A = E ? [E._listenId] : i.keys(x), M = 0; M < A.length; M++) {
                var D = x[A[M]];
                if (!D) break;
                D.obj.off(l, g, this)
            }
            return this
        };
        var m = function(E, l, g, x) {
            if (!!E) {
                var A = 0,
                    M, D = x.context,
                    te = x.listeners;
                if (!l && !g && !D) {
                    for (var Se = i.keys(te); A < Se.length; A++) M = te[Se[A]], delete te[M.id], delete M.listeningTo[M.objId];
                    return
                }
                for (var de = l ? [l] : i.keys(E); A < de.length; A++) {
                    l = de[A];
                    var Oe = E[l];
                    if (!Oe) break;
                    for (var Re = [], ot = 0; ot < Oe.length; ot++) {
                        var Ct = Oe[ot];
                        g && g !== Ct.callback && g !== Ct.callback._callback || D && D !== Ct.context ? Re.push(Ct) : (M = Ct.listening, M && --M.count === 0 && (delete te[M.id], delete M.listeningTo[M.objId]))
                    }
                    Re.length ? E[l] = Re : delete E[l]
                }
                return E
            }
        };
        V.once = function(E, l, g) {
            var x = ie(L, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(x, l, g)
        }, V.listenToOnce = function(E, l, g) {
            var x = ie(L, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, x)
        };
        var L = function(E, l, g, x) {
            if (g) {
                var A = E[l] = i.once(function() {
                    x(l, A), g.apply(this, arguments)
                });
                A._callback = g
            }
            return E
        };
        V.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), x = 0; x < l; x++) g[x] = arguments[x + 1];
            return ie(z, this._events, E, void 0, g), this
        };
        var z = function(E, l, g, x) {
                if (E) {
                    var A = E[l],
                        M = E.all;
                    A && M && (M = M.slice()), A && ae(A, x), M && ae(M, [l].concat(x))
                }
                return E
            },
            ae = function(E, l) {
                var g, x = -1,
                    A = E.length,
                    M = l[0],
                    D = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++x < A;)(g = E[x]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++x < A;)(g = E[x]).callback.call(g.ctx, M);
                        return;
                    case 2:
                        for (; ++x < A;)(g = E[x]).callback.call(g.ctx, M, D);
                        return;
                    case 3:
                        for (; ++x < A;)(g = E[x]).callback.call(g.ctx, M, D, te);
                        return;
                    default:
                        for (; ++x < A;)(g = E[x]).callback.apply(g.ctx, l);
                        return
                }
            };
        V.bind = V.on, V.unbind = V.off, i.extend(n, V);
        var re = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var x = i.result(this, "defaults");
            g = i.defaults(i.extend({}, x, g), x), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(re.prototype, V, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function() {},
            toJSON: function(E) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            get: function(E) {
                return this.attributes[E]
            },
            escape: function(E) {
                return i.escape(this.get(E))
            },
            has: function(E) {
                return this.get(E) != null
            },
            matches: function(E) {
                return !!i.iteratee(E, this)(this.attributes)
            },
            set: function(E, l, g) {
                if (E == null) return this;
                var x;
                if (typeof E == "object" ? (x = E, g = l) : (x = {})[E] = l, g || (g = {}), !this._validate(x, g)) return !1;
                var A = g.unset,
                    M = g.silent,
                    D = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var Se = this.attributes,
                    de = this.changed,
                    Oe = this._previousAttributes;
                for (var Re in x) l = x[Re], i.isEqual(Se[Re], l) || D.push(Re), i.isEqual(Oe[Re], l) ? delete de[Re] : de[Re] = l, A ? delete Se[Re] : Se[Re] = l;
                if (this.idAttribute in x && (this.id = this.get(this.idAttribute)), !M) {
                    D.length && (this._pending = g);
                    for (var ot = 0; ot < D.length; ot++) this.trigger("change:" + D[ot], this, Se[D[ot]], g)
                }
                if (te) return this;
                if (!M)
                    for (; this._pending;) g = this._pending, this._pending = !1, this.trigger("change", this, g);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(E, l) {
                return this.set(E, void 0, i.extend({}, l, {
                    unset: !0
                }))
            },
            clear: function(E) {
                var l = {};
                for (var g in this.attributes) l[g] = void 0;
                return this.set(l, i.extend({}, E, {
                    unset: !0
                }))
            },
            hasChanged: function(E) {
                return E == null ? !i.isEmpty(this.changed) : i.has(this.changed, E)
            },
            changedAttributes: function(E) {
                if (!E) return this.hasChanged() ? i.clone(this.changed) : !1;
                var l = this._changing ? this._previousAttributes : this.attributes,
                    g = {};
                for (var x in E) {
                    var A = E[x];
                    i.isEqual(l[x], A) || (g[x] = A)
                }
                return i.size(g) ? g : !1
            },
            previous: function(E) {
                return E == null || !this._previousAttributes ? null : this._previousAttributes[E]
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            fetch: function(E) {
                E = i.extend({
                    parse: !0
                }, E);
                var l = this,
                    g = E.success;
                return E.success = function(x) {
                    var A = E.parse ? l.parse(x, E) : x;
                    if (!l.set(A, E)) return !1;
                    g && g.call(E.context, l, x, E), l.trigger("sync", l, x, E)
                }, Wt(this, E), this.sync("read", this, E)
            },
            save: function(E, l, g) {
                var x;
                E == null || typeof E == "object" ? (x = E, g = l) : (x = {})[E] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var A = g.wait;
                if (x && !A) {
                    if (!this.set(x, g)) return !1
                } else if (!this._validate(x, g)) return !1;
                var M = this,
                    D = g.success,
                    te = this.attributes;
                g.success = function(Oe) {
                    M.attributes = te;
                    var Re = g.parse ? M.parse(Oe, g) : Oe;
                    if (A && (Re = i.extend({}, x, Re)), Re && !M.set(Re, g)) return !1;
                    D && D.call(g.context, M, Oe, g), M.trigger("sync", M, Oe, g)
                }, Wt(this, g), x && A && (this.attributes = i.extend({}, te, x));
                var Se = this.isNew() ? "create" : g.patch ? "patch" : "update";
                Se === "patch" && !g.attrs && (g.attrs = x);
                var de = this.sync(Se, this, g);
                return this.attributes = te, de
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    x = E.wait,
                    A = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(D) {
                    x && A(), g && g.call(E.context, l, D, E), l.isNew() || l.trigger("sync", l, D, E)
                };
                var M = !1;
                return this.isNew() ? i.defer(E.success) : (Wt(this, E), M = this.sync("delete", this, E)), x || A(), M
            },
            url: function() {
                var E = i.result(this, "urlRoot") || i.result(this.collection, "url") || Nt();
                if (this.isNew()) return E;
                var l = this.get(this.idAttribute);
                return E.replace(/[^\/]$/, "$&/") + encodeURIComponent(l)
            },
            parse: function(E, l) {
                return E
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(E) {
                return this._validate({}, i.extend({}, E, {
                    validate: !0
                }))
            },
            _validate: function(E, l) {
                if (!l.validate || !this.validate) return !0;
                E = i.extend({}, this.attributes, E);
                var g = this.validationError = this.validate(E, l) || null;
                return g ? (this.trigger("invalid", this, g, i.extend(l, {
                    validationError: g
                })), !1) : !0
            }
        });
        var ye = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        I(re, ye, "attributes");
        var c = n.Collection = function(E, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), E && this.reset(E, i.extend({
                    silent: !0
                }, l))
            },
            Ee = {
                add: !0,
                remove: !0,
                merge: !0
            },
            _e = {
                add: !0,
                remove: !1
            },
            Le = function(E, l, g) {
                g = Math.min(Math.max(g, 0), E.length);
                var x = Array(E.length - g),
                    A = l.length,
                    M;
                for (M = 0; M < x.length; M++) x[M] = E[M + g];
                for (M = 0; M < A; M++) E[M + g] = l[M];
                for (M = 0; M < x.length; M++) E[M + A + g] = x[M]
            };
        i.extend(c.prototype, V, {
            model: re,
            initialize: function() {},
            toJSON: function(E) {
                return this.map(function(l) {
                    return l.toJSON(E)
                })
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            add: function(E, l) {
                return this.set(E, i.extend({
                    merge: !1
                }, l, _e))
            },
            remove: function(E, l) {
                l = i.extend({}, l);
                var g = !i.isArray(E);
                E = g ? [E] : E.slice();
                var x = this._removeModels(E, l);
                return !l.silent && x.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: x
                }, this.trigger("update", this, l)), g ? x[0] : x
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, Ee, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var x = l.at;
                    x != null && (x = +x), x > this.length && (x = this.length), x < 0 && (x += this.length + 1);
                    var A = [],
                        M = [],
                        D = [],
                        te = [],
                        Se = {},
                        de = l.add,
                        Oe = l.merge,
                        Re = l.remove,
                        ot = !1,
                        Ct = this.comparator && x == null && l.sort !== !1,
                        on = i.isString(this.comparator) ? this.comparator : null,
                        ht, vt;
                    for (vt = 0; vt < E.length; vt++) {
                        ht = E[vt];
                        var kt = this.get(ht);
                        if (kt) {
                            if (Oe && ht !== kt) {
                                var Qt = this._isModel(ht) ? ht.attributes : ht;
                                l.parse && (Qt = kt.parse(Qt, l)), kt.set(Qt, l), D.push(kt), Ct && !ot && (ot = kt.hasChanged(on))
                            }
                            Se[kt.cid] || (Se[kt.cid] = !0, A.push(kt)), E[vt] = kt
                        } else de && (ht = E[vt] = this._prepareModel(ht, l), ht && (M.push(ht), this._addReference(ht, l), Se[ht.cid] = !0, A.push(ht)))
                    }
                    if (Re) {
                        for (vt = 0; vt < this.length; vt++) ht = this.models[vt], Se[ht.cid] || te.push(ht);
                        te.length && this._removeModels(te, l)
                    }
                    var Ze = !1,
                        Mt = !Ct && de && Re;
                    if (A.length && Mt ? (Ze = this.length !== A.length || i.some(this.models, function($, B) {
                            return $ !== A[B]
                        }), this.models.length = 0, Le(this.models, A, 0), this.length = this.models.length) : M.length && (Ct && (ot = !0), Le(this.models, M, x == null ? this.length : x), this.length = this.models.length), ot && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (vt = 0; vt < M.length; vt++) x != null && (l.index = x + vt), ht = M[vt], ht.trigger("add", ht, this, l);
                        (ot || Ze) && this.trigger("sort", this, l), (M.length || te.length || D.length) && (l.changes = {
                            added: M,
                            removed: te,
                            merged: D
                        }, this.trigger("update", this, l))
                    }
                    return g ? E[0] : E
                }
            },
            reset: function(E, l) {
                l = l ? i.clone(l) : {};
                for (var g = 0; g < this.models.length; g++) this._removeReference(this.models[g], l);
                return l.previousModels = this.models, this._reset(), E = this.add(E, i.extend({
                    silent: !0
                }, l)), l.silent || this.trigger("reset", this, l), E
            },
            push: function(E, l) {
                return this.add(E, i.extend({
                    at: this.length
                }, l))
            },
            pop: function(E) {
                var l = this.at(this.length - 1);
                return this.remove(l, E)
            },
            unshift: function(E, l) {
                return this.add(E, i.extend({
                    at: 0
                }, l))
            },
            shift: function(E) {
                var l = this.at(0);
                return this.remove(l, E)
            },
            slice: function() {
                return y.apply(this.models, arguments)
            },
            get: function(E) {
                if (E != null) return this._byId[E] || this._byId[this.modelId(E.attributes || E)] || E.cid && this._byId[E.cid]
            },
            has: function(E) {
                return this.get(E) != null
            },
            at: function(E) {
                return E < 0 && (E += this.length), this.models[E]
            },
            where: function(E, l) {
                return this[l ? "find" : "filter"](E)
            },
            findWhere: function(E) {
                return this.where(E, !0)
            },
            sort: function(E) {
                var l = this.comparator;
                if (!l) throw new Error("Cannot sort a set without a comparator");
                E || (E = {});
                var g = l.length;
                return i.isFunction(l) && (l = i.bind(l, this)), g === 1 || i.isString(l) ? this.models = this.sortBy(l) : this.models.sort(l), E.silent || this.trigger("sort", this, E), this
            },
            pluck: function(E) {
                return this.map(E + "")
            },
            fetch: function(E) {
                E = i.extend({
                    parse: !0
                }, E);
                var l = E.success,
                    g = this;
                return E.success = function(x) {
                    var A = E.reset ? "reset" : "set";
                    g[A](x, E), l && l.call(E.context, g, x, E), g.trigger("sync", g, x, E)
                }, Wt(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var x = this,
                    A = l.success;
                return l.success = function(M, D, te) {
                    g && x.add(M, te), A && A.call(te.context, M, D, te)
                }, E.save(null, l), E
            },
            parse: function(E, l) {
                return E
            },
            clone: function() {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function(E) {
                return E[this.model.prototype.idAttribute || "id"]
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(E, l) {
                if (this._isModel(E)) return E.collection || (E.collection = this), E;
                l = l ? i.clone(l) : {}, l.collection = this;
                var g = new this.model(E, l);
                return g.validationError ? (this.trigger("invalid", this, g.validationError, l), !1) : g
            },
            _removeModels: function(E, l) {
                for (var g = [], x = 0; x < E.length; x++) {
                    var A = this.get(E[x]);
                    if (!!A) {
                        var M = this.indexOf(A);
                        this.models.splice(M, 1), this.length--, delete this._byId[A.cid];
                        var D = this.modelId(A.attributes);
                        D != null && delete this._byId[D], l.silent || (l.index = M, A.trigger("remove", A, this, l)), g.push(A), this._removeReference(A, l)
                    }
                }
                return g
            },
            _isModel: function(E) {
                return E instanceof re
            },
            _addReference: function(E, l) {
                this._byId[E.cid] = E;
                var g = this.modelId(E.attributes);
                g != null && (this._byId[g] = E), E.on("all", this._onModelEvent, this)
            },
            _removeReference: function(E, l) {
                delete this._byId[E.cid];
                var g = this.modelId(E.attributes);
                g != null && delete this._byId[g], this === E.collection && delete E.collection, E.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(E, l, g, x) {
                if (l) {
                    if ((E === "add" || E === "remove") && g !== this) return;
                    if (E === "destroy" && this.remove(l, x), E === "change") {
                        var A = this.modelId(l.previousAttributes()),
                            M = this.modelId(l.attributes);
                        A !== M && (A != null && delete this._byId[A], M != null && (this._byId[M] = l))
                    }
                }
                this.trigger.apply(this, arguments)
            }
        });
        var lt = {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3
        };
        I(c, lt, "models");
        var Ne = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, je)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            Q = /^(\S+)\s*(.*)$/,
            je = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Ne.prototype, V, {
            tagName: "div",
            $: function(E) {
                return this.$el.find(E)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function() {
                this.$el.remove()
            },
            setElement: function(E) {
                return this.undelegateEvents(), this._setElement(E), this.delegateEvents(), this
            },
            _setElement: function(E) {
                this.$el = E instanceof n.$ ? E : n.$(E), this.el = this.$el[0]
            },
            delegateEvents: function(E) {
                if (E || (E = i.result(this, "events")), !E) return this;
                this.undelegateEvents();
                for (var l in E) {
                    var g = E[l];
                    if (i.isFunction(g) || (g = this[g]), !!g) {
                        var x = l.match(Q);
                        this.delegate(x[1], x[2], i.bind(g, this))
                    }
                }
                return this
            },
            delegate: function(E, l, g) {
                return this.$el.on(E + ".delegateEvents" + this.cid, l, g), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(E, l, g) {
                return this.$el.off(E + ".delegateEvents" + this.cid, l, g), this
            },
            _createElement: function(E) {
                return document.createElement(E)
            },
            _ensureElement: function() {
                if (this.el) this.setElement(i.result(this, "el"));
                else {
                    var E = i.extend({}, i.result(this, "attributes"));
                    this.id && (E.id = i.result(this, "id")), this.className && (E.class = i.result(this, "className")), this.setElement(this._createElement(i.result(this, "tagName"))), this._setAttributes(E)
                }
            },
            _setAttributes: function(E) {
                this.$el.attr(E)
            }
        }), n.sync = function(E, l, g) {
            var x = G[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var A = {
                type: x,
                dataType: "json"
            };
            if (g.url || (A.url = i.result(l, "url") || Nt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (A.contentType = "application/json", A.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (A.contentType = "application/x-www-form-urlencoded", A.data = A.data ? {
                    model: A.data
                } : {}), g.emulateHTTP && (x === "PUT" || x === "DELETE" || x === "PATCH")) {
                A.type = "POST", g.emulateJSON && (A.data._method = x);
                var M = g.beforeSend;
                g.beforeSend = function(Se) {
                    if (Se.setRequestHeader("X-HTTP-Method-Override", x), M) return M.apply(this, arguments)
                }
            }
            A.type !== "GET" && !g.emulateJSON && (A.processData = !1);
            var D = g.error;
            g.error = function(Se, de, Oe) {
                g.textStatus = de, g.errorThrown = Oe, D && D.call(g.context, Se, de, Oe)
            };
            var te = g.xhr = n.ajax(i.extend(A, g));
            return l.trigger("request", l, te, g), te
        };
        var G = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        n.ajax = function() {
            return n.$.ajax.apply(n.$, arguments)
        };
        var se = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Te = /\((.*?)\)/g,
            ve = /(\(\?)?:\w+/g,
            we = /\*\w+/g,
            ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(se.prototype, V, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var x = this;
                return n.history.route(E, function(A) {
                    var M = x._extractParameters(E, A);
                    x.execute(g, M, l) !== !1 && (x.trigger.apply(x, ["route:" + l].concat(M)), x.trigger("route", l, M), n.history.trigger("route", x, l, M))
                }), this
            },
            execute: function(E, l, g) {
                E && E.apply(this, l)
            },
            navigate: function(E, l) {
                return n.history.navigate(E, l), this
            },
            _bindRoutes: function() {
                if (!!this.routes) {
                    this.routes = i.result(this, "routes");
                    for (var E, l = i.keys(this.routes);
                        (E = l.pop()) != null;) this.route(E, this.routes[E])
                }
            },
            _routeToRegExp: function(E) {
                return E = E.replace(ue, "\\$&").replace(Te, "(?:$1)?").replace(ve, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(we, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(E, l) {
                var g = E.exec(l).slice(1);
                return i.map(g, function(x, A) {
                    return A === g.length - 1 ? x || null : x ? decodeURIComponent(x) : null
                })
            }
        });
        var xe = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Ie = /^[#\/]|\s+$/g,
            Ve = /^\/+|\/+$/g,
            Ke = /#.*$/;
        xe.started = !1, i.extend(xe.prototype, V, {
            interval: 50,
            atRoot: function() {
                var E = this.location.pathname.replace(/[^\/]$/, "$&/");
                return E === this.root && !this.getSearch()
            },
            matchRoot: function() {
                var E = this.decodeFragment(this.location.pathname),
                    l = E.slice(0, this.root.length - 1) + "/";
                return l === this.root
            },
            decodeFragment: function(E) {
                return decodeURI(E.replace(/%25/g, "%2525"))
            },
            getSearch: function() {
                var E = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return E ? E[0] : ""
            },
            getHash: function(E) {
                var l = (E || this).location.href.match(/#(.*)$/);
                return l ? l[1] : ""
            },
            getPath: function() {
                var E = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return E.charAt(0) === "/" ? E.slice(1) : E
            },
            getFragment: function(E) {
                return E == null && (this._usePushState || !this._wantsHashChange ? E = this.getPath() : E = this.getHash()), E.replace(Ie, "")
            },
            start: function(E) {
                if (xe.started) throw new Error("Backbone.history has already been started");
                if (xe.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, E), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(Ve, "/"), this._wantsHashChange && this._wantsPushState)
                    if (!this._hasPushState && !this.atRoot()) {
                        var l = this.root.slice(0, -1) || "/";
                        return this.location.replace(l + "#" + this.getPath()), !0
                    } else this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    });
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var g = document.body,
                        x = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    x.document.open(), x.document.close(), x.location.hash = "#" + this.fragment
                }
                var A = window.addEventListener || function(M, D) {
                    return attachEvent("on" + M, D)
                };
                if (this._usePushState ? A("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? A("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var E = window.removeEventListener || function(l, g) {
                    return detachEvent("on" + l, g)
                };
                this._usePushState ? E("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && E("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), xe.started = !1
            },
            route: function(E, l) {
                this.handlers.unshift({
                    route: E,
                    callback: l
                })
            },
            checkUrl: function(E) {
                var l = this.getFragment();
                if (l === this.fragment && this.iframe && (l = this.getHash(this.iframe.contentWindow)), l === this.fragment) return !1;
                this.iframe && this.navigate(l), this.loadUrl()
            },
            loadUrl: function(E) {
                return this.matchRoot() ? (E = this.fragment = this.getFragment(E), i.some(this.handlers, function(l) {
                    if (l.route.test(E)) return l.callback(E), !0
                })) : !1
            },
            navigate: function(E, l) {
                if (!xe.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), E = this.getFragment(E || "");
                var g = this.root;
                (E === "" || E.charAt(0) === "?") && (g = g.slice(0, -1) || "/");
                var x = g + E;
                if (E = this.decodeFragment(E.replace(Ke, "")), this.fragment !== E) {
                    if (this.fragment = E, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, x);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, E, l.replace), this.iframe && E !== this.getHash(this.iframe.contentWindow)) {
                            var A = this.iframe.contentWindow;
                            l.replace || (A.document.open(), A.document.close()), this._updateHash(A.location, E, l.replace)
                        }
                    } else return this.location.assign(x);
                    if (l.trigger) return this.loadUrl(E)
                }
            },
            _updateHash: function(E, l, g) {
                if (g) {
                    var x = E.href.replace(/(javascript:|#).*$/, "");
                    E.replace(x + "#" + l)
                } else E.hash = "#" + l
            }
        }), n.history = new xe;
        var ct = function(E, l) {
            var g = this,
                x;
            return E && i.has(E, "constructor") ? x = E.constructor : x = function() {
                return g.apply(this, arguments)
            }, i.extend(x, g, l), x.prototype = i.create(g.prototype, E), x.prototype.constructor = x, x.__super__ = g.prototype, x
        };
        re.extend = c.extend = se.extend = Ne.extend = xe.extend = ct;
        var Nt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Wt = function(E, l) {
                var g = l.error;
                l.error = function(x) {
                    g && g.call(l.context, E, x, l), E.trigger("error", E, x, l)
                }
            };
        return n
    })
})(Xe);
var kh = {
        exports: {}
    },
    Zs = {
        exports: {}
    },
    ml;

function vd() {
    return ml || (ml = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Bi.exports, Xe)
        })(yt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
                    return typeof m
                } : function(m) {
                    return m && typeof Symbol == "function" && m.constructor === Symbol ? "symbol" : typeof m
                },
                f = i.Radio,
                y = i.Radio = {};
            y.VERSION = "2.0.0", y.noConflict = function() {
                return i.Radio = f, this
            }, y.DEBUG = !1, y._debugText = function(m, L, z) {
                return m + (z ? " on the " + z + " channel" : "") + ': "' + L + '"'
            }, y.debugLog = function(m, L, z) {
                y.DEBUG && console && console.warn && console.warn(y._debugText(m, L, z))
            };
            var S = /\s+/;
            y._eventsApi = function(m, L, z, ae) {
                if (!z) return !1;
                var re = {};
                if ((typeof z > "u" ? "undefined" : a(z)) === "object") {
                    for (var ye in z) {
                        var c = m[L].apply(m, [ye, z[ye]].concat(ae));
                        S.test(ye) ? n.extend(re, c) : re[ye] = c
                    }
                    return re
                }
                if (S.test(z)) {
                    for (var Ee = z.split(S), _e = 0, Le = Ee.length; _e < Le; _e++) re[Ee[_e]] = m[L].apply(m, [Ee[_e]].concat(ae));
                    return re
                }
                return !1
            }, y._callHandler = function(m, L, z) {
                var ae = z[0],
                    re = z[1],
                    ye = z[2];
                switch (z.length) {
                    case 0:
                        return m.call(L);
                    case 1:
                        return m.call(L, ae);
                    case 2:
                        return m.call(L, ae, re);
                    case 3:
                        return m.call(L, ae, re, ye);
                    default:
                        return m.apply(L, z)
                }
            };

            function I(m, L, z, ae) {
                var re = m[L];
                if ((!z || z === re.callback || z === re.callback._callback) && (!ae || ae === re.context)) return delete m[L], !0
            }

            function O(m, L, z, ae) {
                m || (m = {});
                for (var re = L ? [L] : n.keys(m), ye = !1, c = 0, Ee = re.length; c < Ee; c++) L = re[c], !!m[L] && I(m, L, z, ae) && (ye = !0);
                return ye
            }
            var R = {};

            function V(m) {
                return R[m] || (R[m] = n.bind(y.log, y, m))
            }
            n.extend(y, {
                log: function(L, z) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + L + '] "' + z + '"', ae)
                    }
                },
                tuneIn: function(L) {
                    var z = y.channel(L);
                    return z._tunedIn = !0, z.on("all", V(L)), this
                },
                tuneOut: function(L) {
                    var z = y.channel(L);
                    return z._tunedIn = !1, z.off("all", V(L)), delete R[L], this
                }
            });

            function X(m) {
                return n.isFunction(m) ? m : function() {
                    return m
                }
            }
            y.Requests = {
                request: function(L) {
                    var z = n.toArray(arguments).slice(1),
                        ae = y._eventsApi(this, "request", L, z);
                    if (ae) return ae;
                    var re = this.channelName,
                        ye = this._requests;
                    if (re && this._tunedIn && y.log.apply(this, [re, L].concat(z)), ye && (ye[L] || ye.default)) {
                        var c = ye[L] || ye.default;
                        return z = ye[L] ? z : arguments, y._callHandler(c.callback, c.context, z)
                    } else y.debugLog("An unhandled request was fired", L, re)
                },
                reply: function(L, z, ae) {
                    return y._eventsApi(this, "reply", L, [z, ae]) ? this : (this._requests || (this._requests = {}), this._requests[L] && y.debugLog("A request was overwritten", L, this.channelName), this._requests[L] = {
                        callback: X(z),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(L, z, ae) {
                    if (y._eventsApi(this, "replyOnce", L, [z, ae])) return this;
                    var re = this,
                        ye = n.once(function() {
                            return re.stopReplying(L), X(z).apply(this, arguments)
                        });
                    return this.reply(L, ye, ae)
                },
                stopReplying: function(L, z, ae) {
                    return y._eventsApi(this, "stopReplying", L) ? this : (!L && !z && !ae ? delete this._requests : O(this._requests, L, z, ae) || y.debugLog("Attempted to remove the unregistered request", L, this.channelName), this)
                }
            }, y._channels = {}, y.channel = function(m) {
                if (!m) throw new Error("You must provide a name for the channel.");
                return y._channels[m] ? y._channels[m] : y._channels[m] = new y.Channel(m)
            }, y.Channel = function(m) {
                this.channelName = m
            }, n.extend(y.Channel.prototype, i.Events, y.Requests, {
                reset: function() {
                    return this.off(), this.stopListening(), this.stopReplying(), this
                }
            });
            var ie, J, oe = [i.Events, y.Requests];
            return n.each(oe, function(m) {
                n.each(m, function(L, z) {
                    y[z] = function(ae) {
                        return J = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[z].apply(ie, J)
                    }
                })
            }), y.reset = function(m) {
                var L = m ? [this._channels[m]] : this._channels;
                n.each(L, function(z) {
                    z.reset()
                })
            }, y
        })
    }(Zs)), Zs.exports
}
/**
 * @license
 * MarionetteJS (Backbone.Marionette)
 * ----------------------------------
 * v3.5.1
 *
 * Copyright (c)2017 Derick Bailey, Muted Solutions, LLC.
 * Distributed under MIT license
 *
 * http://marionettejs.com
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i(Xe, Bi.exports, vd())
    })(yt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            y = function(s) {
                return function(k) {
                    for (var _ = arguments.length, K = Array(_ > 1 ? _ - 1 : 0), ke = 1; ke < _; ke++) K[ke - 1] = arguments[ke];
                    return s.apply(k, K)
                }
            },
            S = n.Model.extend,
            I = function w(s, k) {
                i.isObject(s) && (s = s.prev + " is going to be removed in the future. Please use " + s.next + " instead." + (s.url ? " See: " + s.url : "")), !!tt.DEV_MODE && (k === void 0 || !k) && !w._cache[s] && (w._warn("Deprecation warning: " + s), w._cache[s] = !0)
            };
        I._console = typeof console < "u" ? console : {}, I._warn = function() {
            var w = I._console.warn || I._console.log || i.noop;
            return w.apply(I._console, arguments)
        }, I._cache = {};
        var O = function(s) {
                return document.documentElement.contains(s && s.parentNode)
            },
            R = function(s, k) {
                var _ = this;
                !s || i.each(k, function(K) {
                    var ke = s[K];
                    ke !== void 0 && (_[K] = ke)
                })
            },
            V = function(s) {
                if (!!s) return this.options && this.options[s] !== void 0 ? this.options[s] : this[s]
            },
            X = function(s) {
                var k = this;
                return i.reduce(s, function(_, K, ke) {
                    return i.isFunction(K) || (K = k[K]), K && (_[ke] = K), _
                }, {})
            },
            ie = /(^|:)(\w)/gi;

        function J(w, s, k) {
            return k.toUpperCase()
        }
        var oe = i.memoize(function(w) {
            return "on" + w.replace(ie, J)
        });

        function m(w) {
            for (var s = arguments.length, k = Array(s > 1 ? s - 1 : 0), _ = 1; _ < s; _++) k[_ - 1] = arguments[_];
            var K = oe(w),
                ke = V.call(this, K),
                ze = void 0;
            return i.isFunction(ke) && (ze = ke.apply(this, k)), this.trigger.apply(this, arguments), ze
        }

        function L(w) {
            for (var s = arguments.length, k = Array(s > 1 ? s - 1 : 0), _ = 1; _ < s; _++) k[_ - 1] = arguments[_];
            return i.isFunction(w.triggerMethod) ? w.triggerMethod.apply(w, k) : m.apply(w, k)
        }

        function z(w, s, k) {
            !w._getImmediateChildren || i.each(w._getImmediateChildren(), function(_) {
                !k(_) || L(_, s, _)
            })
        }

        function ae(w) {
            return !w._isAttached
        }

        function re(w) {
            return ae(w) ? (w._isAttached = !0, !0) : !1
        }

        function ye(w) {
            return w._isAttached
        }

        function c(w) {
            return ye(w) ? (w._isAttached = !1, !0) : !1
        }

        function Ee(w) {
            w._isAttached && w._isRendered && L(w, "dom:refresh", w)
        }

        function _e(w) {
            w._isAttached && w._isRendered && L(w, "dom:remove", w)
        }

        function Le() {
            z(this, "before:attach", ae)
        }

        function lt() {
            z(this, "attach", re), Ee(this)
        }

        function Ne() {
            z(this, "before:detach", ye), _e(this)
        }

        function Q() {
            z(this, "detach", c)
        }

        function je() {
            _e(this)
        }

        function G() {
            Ee(this)
        }

        function se(w) {
            w._areViewEventsMonitored || w.monitorViewEvents === !1 || (w._areViewEventsMonitored = !0, w.on({
                "before:attach": Le,
                attach: lt,
                "before:detach": Ne,
                detach: Q,
                "before:render": je,
                render: G
            }))
        }
        var Te = ["description", "fileName", "lineNumber", "name", "message", "number"],
            ve = S.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(s, k) {
                    i.isObject(s) ? (k = s, s = k.message) : k || (k = {});
                    var _ = Error.call(this, s);
                    i.extend(this, i.pick(_, Te), i.pick(k, Te)), this.captureStackTrace(), k.url && (this.url = this.urlRoot + k.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, ve)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        ve.extend = S;

        function we(w, s, k, _, K) {
            var ke = _.split(/\s+/);
            ke.length > 1 && I("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(ke, function(ze) {
                var Ot = w[ze];
                if (!Ot) throw new ve('Method "' + ze + '" was configured as an event handler, but does not exist.');
                w[K](s, k, Ot)
            })
        }

        function ue(w, s, k, _) {
            if (!i.isObject(k)) throw new ve({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(k, function(K, ke) {
                if (i.isString(K)) {
                    we(w, s, ke, K, _);
                    return
                }
                w[_](s, ke, K)
            })
        }

        function xe(w, s) {
            return !w || !s ? this : (ue(this, w, s, "listenTo"), this)
        }

        function Ie(w, s) {
            return w ? s ? (ue(this, w, s, "stopListening"), this) : (this.stopListening(w), this) : this
        }

        function Ve(w, s, k, _) {
            if (!i.isObject(k)) throw new ve({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var K = X.call(w, k);
            s[_](K, w)
        }

        function Ke(w, s) {
            return !w || !s ? this : (Ve(this, w, s, "reply"), this)
        }

        function ct(w, s) {
            return w ? s ? (Ve(this, w, s, "stopReplying"), this) : (w.stopReplying(null, null, this), this) : this
        }
        var Nt = function(s) {
                this.options = i.extend({}, i.result(this, "options"), s)
            },
            Wt = {
                normalizeMethods: X,
                _setOptions: Nt,
                mergeOptions: R,
                getOption: V,
                bindEvents: xe,
                unbindEvents: Ie
            },
            E = {
                _initRadio: function() {
                    var s = i.result(this, "channelName");
                    if (!!s) {
                        if (!a) throw new ve({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var k = this._channel = a.channel(s),
                            _ = i.result(this, "radioEvents");
                        this.bindEvents(k, _);
                        var K = i.result(this, "radioRequests");
                        this.bindRequests(k, K), this.on("destroy", this._destroyRadio)
                    }
                },
                _destroyRadio: function() {
                    this._channel.stopReplying(null, null, this)
                },
                getChannel: function() {
                    return this._channel
                },
                bindEvents: xe,
                unbindEvents: Ie,
                bindRequests: Ke,
                unbindRequests: ct
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(s) {
                this.hasOwnProperty("options") || this._setOptions(s), this.mergeOptions(s, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = S, i.extend(g.prototype, n.Events, Wt, E, {
            cidPrefix: "mno",
            _isDestroyed: !1,
            isDestroyed: function() {
                return this._isDestroyed
            },
            initialize: function() {},
            _setCid: function() {
                this.cid || (this.cid = i.uniqueId(this.cidPrefix))
            },
            destroy: function() {
                if (this._isDestroyed) return this;
                for (var s = arguments.length, k = Array(s), _ = 0; _ < s; _++) k[_] = arguments[_];
                return this.triggerMethod.apply(this, ["before:destroy", this].concat(k)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(k)), this.stopListening(), this
            },
            triggerMethod: m
        });
        var x = function(s) {
            this.templateId = s
        };
        i.extend(x, {
            templateCaches: {},
            get: function(s, k) {
                var _ = this.templateCaches[s];
                return _ || (_ = new x(s), this.templateCaches[s] = _), _.load(k)
            },
            clear: function() {
                for (var s = void 0, k = arguments.length, _ = Array(k), K = 0; K < k; K++) _[K] = arguments[K];
                var ke = _.length;
                if (ke > 0)
                    for (s = 0; s < ke; s++) delete this.templateCaches[_[s]];
                else this.templateCaches = {}
            }
        }), i.extend(x.prototype, {
            load: function(s) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var k = this.loadTemplate(this.templateId, s);
                return this.compiledTemplate = this.compileTemplate(k, s), this.compiledTemplate
            },
            loadTemplate: function(s, k) {
                var _ = n.$(s);
                if (!_.length) throw new ve({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + s + '"'
                });
                return _.html()
            },
            compileTemplate: function(s, k) {
                return i.template(s, k)
            }
        });
        var A = i.invokeMap || i.invoke;

        function M(w, s) {
            return w.behaviorClass ? w.behaviorClass : i.isFunction(w) ? w : i.isFunction(tt.Behaviors.behaviorsLookup) ? tt.Behaviors.behaviorsLookup(w, s)[s] : tt.Behaviors.behaviorsLookup[s]
        }

        function D(w, s) {
            return i.chain(s).map(function(k, _) {
                var K = M(k, _),
                    ke = k === K ? {} : k,
                    ze = new K(ke, w),
                    Ot = D(w, i.result(ze, "behaviors"));
                return [ze].concat(Ot)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var s = i.result(this, "behaviors");
                    return i.isObject(s) ? D(this, s) : {}
                },
                _getBehaviorTriggers: function() {
                    var s = A(this._behaviors, "getTriggers");
                    return i.reduce(s, function(k, _) {
                        return i.extend(k, _)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var s = A(this._behaviors, "getEvents");
                    return i.reduce(s, function(k, _) {
                        return i.extend(k, _)
                    }, {})
                },
                _proxyBehaviorViewProperties: function() {
                    A(this._behaviors, "proxyViewProperties")
                },
                _delegateBehaviorEntityEvents: function() {
                    A(this._behaviors, "delegateEntityEvents")
                },
                _undelegateBehaviorEntityEvents: function() {
                    A(this._behaviors, "undelegateEntityEvents")
                },
                _destroyBehaviors: function() {
                    for (var s = arguments.length, k = Array(s), _ = 0; _ < s; _++) k[_] = arguments[_];
                    A.apply(void 0, [this._behaviors, "destroy"].concat(k))
                },
                _removeBehavior: function(s) {
                    this._isDestroyed || (this.undelegate(".trig" + s.cid + " ." + s.cid), this._behaviors = i.without(this._behaviors, s))
                },
                _bindBehaviorUIElements: function() {
                    A(this._behaviors, "bindUIElements")
                },
                _unbindBehaviorUIElements: function() {
                    A(this._behaviors, "unbindUIElements")
                },
                _triggerEventOnBehaviors: function() {
                    for (var s = this._behaviors, k = 0, _ = s && s.length; k < _; k++) m.apply(s[k], arguments)
                }
            },
            Se = {
                _delegateEntityEvents: function(s, k) {
                    var _ = i.result(this, "modelEvents");
                    _ && (Ie.call(this, s, _), xe.call(this, s, _));
                    var K = i.result(this, "collectionEvents");
                    K && (Ie.call(this, k, K), xe.call(this, k, K))
                },
                _undelegateEntityEvents: function(s, k) {
                    var _ = i.result(this, "modelEvents");
                    Ie.call(this, s, _);
                    var K = i.result(this, "collectionEvents");
                    Ie.call(this, k, K)
                }
            },
            de = /^(\S+)\s*(.*)$/,
            Oe = function(s, k) {
                var _ = s.match(de);
                return _[1] + "." + k + " " + _[2]
            },
            Re = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function ot(w) {
            return !!Re[w]
        }

        function Ct(w, s) {
            return Re[w] = s
        }

        function on(w, s) {
            i.isString(s) && (s = {
                event: s
            });
            var k = s.event,
                _ = !!s.preventDefault;
            ot("triggersPreventDefault") && (_ = s.preventDefault !== !1);
            var K = !!s.stopPropagation;
            return ot("triggersStopPropagation") && (K = s.stopPropagation !== !1),
                function(ke) {
                    _ && ke.preventDefault(), K && ke.stopPropagation(), w.triggerMethod(k, w, ke)
                }
        }
        var ht = {
                _getViewTriggers: function(s, k) {
                    var _ = this;
                    return i.reduce(k, function(K, ke, ze) {
                        return ze = Oe(ze, "trig" + _.cid), K[ze] = on(s, ke), K
                    }, {})
                }
            },
            vt = function(s, k) {
                return i.reduce(s, function(_, K, ke) {
                    var ze = kt(ke, k);
                    return _[ze] = K, _
                }, {})
            },
            kt = function(s, k) {
                return s.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(_) {
                    return k[_.slice(4)]
                })
            },
            Qt = function w(s, k, _) {
                return i.each(s, function(K, ke) {
                    i.isString(K) ? s[ke] = kt(K, k) : i.isObject(K) && i.isArray(_) && (i.extend(K, w(i.pick(K, _), k)), i.each(_, function(ze) {
                        var Ot = K[ze];
                        i.isString(Ot) && (K[ze] = kt(Ot, k))
                    }))
                }), s
            },
            Ze = {
                normalizeUIKeys: function(s) {
                    var k = this._getUIBindings();
                    return vt(s, k)
                },
                normalizeUIString: function(s) {
                    var k = this._getUIBindings();
                    return kt(s, k)
                },
                normalizeUIValues: function(s, k) {
                    var _ = this._getUIBindings();
                    return Qt(s, _, k)
                },
                _getUIBindings: function() {
                    var s = i.result(this, "_uiBindings"),
                        k = i.result(this, "ui");
                    return s || k
                },
                _bindUIElements: function() {
                    var s = this;
                    if (!!this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var k = i.result(this, "_uiBindings");
                        this._ui = {}, i.each(k, function(_, K) {
                            s._ui[K] = s.$(_)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var s = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(k, _) {
                        delete s.ui[_]
                    }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui)
                },
                _getUI: function(s) {
                    return this._ui[s]
                }
            };

        function Mt(w) {
            return w instanceof n.$ ? w : n.$(w)
        }

        function $(w) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, w), this
        }
        var B = {
                createBuffer: function() {
                    return document.createDocumentFragment()
                },
                getEl: function(s) {
                    return Mt(s)
                },
                findEl: function(s, k) {
                    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt(s);
                    return _.find(k)
                },
                hasEl: function(s, k) {
                    return s.contains(k && k.parentNode)
                },
                detachEl: function(s) {
                    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mt(s);
                    k.detach()
                },
                replaceEl: function(s, k) {
                    if (s !== k) {
                        var _ = k.parentNode;
                        !_ || _.replaceChild(s, k)
                    }
                },
                swapEl: function(s, k) {
                    if (s !== k) {
                        var _ = s.parentNode,
                            K = k.parentNode;
                        if (!(!_ || !K)) {
                            var ke = s.nextSibling,
                                ze = k.nextSibling;
                            _.insertBefore(k, ke), K.insertBefore(s, ze)
                        }
                    }
                },
                setContents: function(s, k) {
                    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt(s);
                    _.html(k)
                },
                appendContents: function(s, k) {
                    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        K = _._$el,
                        ke = K === void 0 ? Mt(s) : K,
                        ze = _._$contents,
                        Ot = ze === void 0 ? Mt(k) : ze;
                    ke.append(Ot)
                },
                hasContents: function(s) {
                    return !!s && s.hasChildNodes()
                },
                detachContents: function(s) {
                    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mt(s);
                    k.contents().detach()
                }
            },
            U = {
                Dom: B,
                supportsRenderLifecycle: !0,
                supportsDestroyLifecycle: !0,
                _isDestroyed: !1,
                isDestroyed: function() {
                    return !!this._isDestroyed
                },
                _isRendered: !1,
                isRendered: function() {
                    return !!this._isRendered
                },
                _isAttached: !1,
                isAttached: function() {
                    return !!this._isAttached
                },
                delegateEvents: function(s) {
                    this._proxyBehaviorViewProperties(), this._buildEventProxies();
                    var k = this._getEvents(s);
                    typeof s > "u" && (this.events = k);
                    var _ = i.extend({}, this._getBehaviorEvents(), k, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, _), this
                },
                _getEvents: function(s) {
                    var k = s || this.events;
                    return i.isFunction(k) ? this.normalizeUIKeys(k.call(this)) : this.normalizeUIKeys(k)
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var s = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this, s)
                    }
                },
                delegateEntityEvents: function() {
                    return this._delegateEntityEvents(this.model, this.collection), this._delegateBehaviorEntityEvents(), this
                },
                undelegateEntityEvents: function() {
                    return this._undelegateEntityEvents(this.model, this.collection), this._undelegateBehaviorEntityEvents(), this
                },
                destroy: function() {
                    if (this._isDestroyed) return this;
                    for (var s = this._isAttached && !this._shouldDisableEvents, k = arguments.length, _ = Array(k), K = 0; K < k; K++) _[K] = arguments[K];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(_)), s && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), s && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, _), this.triggerMethod.apply(this, ["destroy", this].concat(_)), this.stopListening(), this
                },
                _removeElement: function() {
                    this.$el.off().removeData(), this.Dom.detachEl(this.el, this.$el)
                },
                bindUIElements: function() {
                    return this._bindUIElements(), this._bindBehaviorUIElements(), this
                },
                unbindUIElements: function() {
                    return this._unbindUIElements(), this._unbindBehaviorUIElements(), this
                },
                getUI: function(s) {
                    return this._getUI(s)
                },
                childViewEventPrefix: function() {
                    return ot("childViewEventPrefix") ? "childview" : !1
                },
                triggerMethod: function() {
                    var s = m.apply(this, arguments);
                    return this._triggerEventOnBehaviors.apply(this, arguments), s
                },
                _buildEventProxies: function() {
                    this._childViewEvents = i.result(this, "childViewEvents"), this._childViewTriggers = i.result(this, "childViewTriggers")
                },
                _proxyChildViewEvents: function(s) {
                    this.listenTo(s, "all", this._childViewEventHandler)
                },
                _childViewEventHandler: function(s) {
                    for (var k = this.normalizeMethods(this._childViewEvents), _ = arguments.length, K = Array(_ > 1 ? _ - 1 : 0), ke = 1; ke < _; ke++) K[ke - 1] = arguments[ke];
                    typeof k < "u" && i.isFunction(k[s]) && k[s].apply(this, K);
                    var ze = this._childViewTriggers;
                    ze && i.isString(ze[s]) && this.triggerMethod.apply(this, [ze[s]].concat(K));
                    var Ot = i.result(this, "childViewEventPrefix");
                    if (Ot !== !1) {
                        var Ut = Ot + ":" + s;
                        this.triggerMethod.apply(this, [Ut].concat(K))
                    }
                }
            };
        i.extend(U, te, Wt, Se, ht, Ze);

        function P(w) {
            w._isRendered || (w.supportsRenderLifecycle || L(w, "before:render", w), w.render(), w.supportsRenderLifecycle || (w._isRendered = !0, L(w, "render", w)))
        }

        function W(w) {
            if (w.destroy) {
                w.destroy();
                return
            }
            w.supportsDestroyLifecycle || L(w, "before:destroy", w);
            var s = w._isAttached && !w._shouldDisableEvents;
            s && L(w, "before:detach", w), w.remove(), s && (w._isAttached = !1, L(w, "detach", w)), w._isDestroyed = !0, w.supportsDestroyLifecycle || L(w, "destroy", w)
        }
        var fe = ["allowMissingEl", "parentEl", "replaceElement"],
            pe = g.extend({
                Dom: B,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(s) {
                    if (this._setOptions(s), this.mergeOptions(s, fe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new ve({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, s)
                },
                show: function(s, k) {
                    if (!!this._ensureElement(k)) return s = this._getView(s, k), s === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, s, k), s._isAttached || this.empty(k), this._setupChildView(s), this.currentView = s, P(s), this._attachView(s, k), this.triggerMethod("show", this, s, k), this._isSwappingView = !1, this)
                },
                _setupChildView: function(s) {
                    se(s), this._proxyChildViewEvents(s), s.on("destroy", this._empty, this)
                },
                _proxyChildViewEvents: function(s) {
                    var k = this._parentView;
                    !k || k._proxyChildViewEvents(s)
                },
                _shouldDisableMonitoring: function() {
                    return this._parentView && this._parentView.monitorViewEvents === !1
                },
                _attachView: function(s) {
                    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = !s._isAttached && O(this.el) && !this._shouldDisableMonitoring(),
                        K = typeof k.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!k.replaceElement;
                    _ && L(s, "before:attach", s), K ? this._replaceEl(s) : this.attachHtml(s), _ && (s._isAttached = !0, L(s, "attach", s))
                },
                _ensureElement: function() {
                    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var k = typeof s.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!s.allowMissingEl;
                        if (k) return !1;
                        throw new ve('An "el" must exist in DOM for this region ' + this.cid)
                    }
                    return !0
                },
                _getView: function(s) {
                    if (!s) throw new ve({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                    });
                    if (s._isDestroyed) throw new ve({
                        name: "ViewDestroyedError",
                        message: 'View (cid: "' + s.cid + '") has already been destroyed and cannot be used.'
                    });
                    if (s instanceof n.View) return s;
                    var k = this._getViewOptions(s);
                    return new Ln(k)
                },
                _getViewOptions: function(s) {
                    if (i.isFunction(s)) return {
                        template: s
                    };
                    if (i.isObject(s)) return s;
                    var k = function() {
                        return s
                    };
                    return {
                        template: k
                    }
                },
                getEl: function(s) {
                    var k = i.result(this, "parentEl");
                    return k && i.isString(s) ? this.Dom.findEl(k, s) : this.Dom.getEl(s)
                },
                _replaceEl: function(s) {
                    this._restoreEl(), s.on("before:destroy", this._restoreEl, this), this.Dom.replaceEl(s.el, this.el), this._isReplaced = !0
                },
                _restoreEl: function() {
                    if (!!this._isReplaced) {
                        var s = this.currentView;
                        !s || (this._detachView(s), this._isReplaced = !1)
                    }
                },
                isReplaced: function() {
                    return !!this._isReplaced
                },
                isSwappingView: function() {
                    return !!this._isSwappingView
                },
                attachHtml: function(s) {
                    this.Dom.appendContents(this.el, s.el, {
                        _$el: this.$el,
                        _$contents: s.$el
                    })
                },
                empty: function() {
                    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                            allowMissingEl: !0
                        },
                        k = this.currentView;
                    if (!k) return this._ensureElement(s) && this.detachHtml(), this;
                    var _ = !s.preventDestroy;
                    return _ || I("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(k, _), this
                },
                _empty: function(s, k) {
                    s.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, s), this._restoreEl(), delete this.currentView, s._isDestroyed || (k ? this.removeView(s) : this._detachView(s), this._stopChildViewEvents(s)), this.triggerMethod("empty", this, s)
                },
                _stopChildViewEvents: function(s) {
                    var k = this._parentView;
                    !k || this._parentView.stopListening(s)
                },
                destroyView: function(s) {
                    return s._isDestroyed || (s._shouldDisableEvents = this._shouldDisableMonitoring(), W(s)), s
                },
                removeView: function(s) {
                    this.destroyView(s)
                },
                detachView: function() {
                    var s = this.currentView;
                    if (!!s) return this._empty(s), s
                },
                _detachView: function(s) {
                    var k = s._isAttached && !this._shouldDisableMonitoring(),
                        _ = this._isReplaced;
                    k && L(s, "before:detach", s), _ ? this.Dom.replaceEl(this.el, s.el) : this.detachHtml(), k && (s._isAttached = !1, L(s, "detach", s))
                },
                detachHtml: function() {
                    this.Dom.detachContents(this.el, this.$el)
                },
                hasView: function() {
                    return !!this.currentView
                },
                reset: function(s) {
                    return this.empty(s), this.$el && (this.el = this._initEl), delete this.$el, this
                },
                destroy: function(s) {
                    return this._isDestroyed ? this : (this.reset(s), this._name && this._parentView._removeReferences(this._name), delete this._parentView, delete this._name, g.prototype.destroy.apply(this, arguments))
                }
            }, {
                setDomApi: $
            }),
            Be = function(w, s) {
                return w instanceof pe ? w : De(w, s)
            };

        function De(w, s) {
            var k = i.extend({}, s);
            if (i.isString(w)) return i.extend(k, {
                el: w
            }), pt(k);
            if (i.isFunction(w)) return i.extend(k, {
                regionClass: w
            }), pt(k);
            if (i.isObject(w)) return w.selector && I("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(k, {
                el: w.selector
            }, w), pt(k);
            throw new ve({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function pt(w) {
            var s = w.regionClass,
                k = i.omit(w, "regionClass");
            return new s(k)
        }
        var $t = {
                regionClass: pe,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    A(this._regions, "reset")
                },
                addRegion: function(s, k) {
                    var _ = {};
                    return _[s] = k, this.addRegions(_)[s]
                },
                addRegions: function(s) {
                    if (!i.isEmpty(s)) return s = this.normalizeUIValues(s, ["selector", "el"]), this.regions = i.extend({}, this.regions, s), this._addRegions(s)
                },
                _addRegions: function(s) {
                    var k = this,
                        _ = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(s, function(K, ke, ze) {
                        return K[ze] = Be(ke, _), k._addRegion(K[ze], ze), K
                    }, {})
                },
                _addRegion: function(s, k) {
                    this.triggerMethod("before:add:region", this, k, s), s._parentView = this, s._name = k, this._regions[k] = s, this.triggerMethod("add:region", this, k, s)
                },
                removeRegion: function(s) {
                    var k = this._regions[s];
                    return this._removeRegion(k, s), k
                },
                removeRegions: function() {
                    var s = this._getRegions();
                    return i.each(this._regions, i.bind(this._removeRegion, this)), s
                },
                _removeRegion: function(s, k) {
                    this.triggerMethod("before:remove:region", this, k, s), s.destroy(), this.triggerMethod("remove:region", this, k, s)
                },
                _removeReferences: function(s) {
                    delete this.regions[s], delete this._regions[s]
                },
                emptyRegions: function() {
                    var s = this.getRegions();
                    return A(s, "empty"), s
                },
                hasRegion: function(s) {
                    return !!this.getRegion(s)
                },
                getRegion: function(s) {
                    return this._isRendered || this.render(), this._regions[s]
                },
                _getRegions: function() {
                    return i.clone(this._regions)
                },
                getRegions: function() {
                    return this._isRendered || this.render(), this._getRegions()
                },
                showChildView: function(s, k) {
                    for (var _ = this.getRegion(s), K = arguments.length, ke = Array(K > 2 ? K - 2 : 0), ze = 2; ze < K; ze++) ke[ze - 2] = arguments[ze];
                    return _.show.apply(_, [k].concat(ke))
                },
                detachChildView: function(s) {
                    return this.getRegion(s).detachView()
                },
                getChildView: function(s) {
                    return this.getRegion(s).currentView
                }
            },
            Qe = {
                render: function(s, k) {
                    if (!s) throw new ve({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var _ = i.isFunction(s) ? s : x.get(s);
                    return _(k)
                }
            },
            On = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Ln = n.View.extend({
                constructor: function(s) {
                    this.render = i.bind(this.render, this), this._setOptions(s), this.mergeOptions(s, On), se(this), this._initBehaviors(), this._initRegions();
                    var k = Array.prototype.slice.call(arguments);
                    k[0] = this.options, n.View.prototype.constructor.apply(this, k), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                serializeData: function() {
                    return !this.model && !this.collection ? {} : this.model ? this.serializeModel() : {
                        items: this.serializeCollection()
                    }
                },
                serializeModel: function() {
                    return this.model ? i.clone(this.model.attributes) : {}
                },
                serializeCollection: function() {
                    return this.collection ? this.collection.map(function(s) {
                        return i.clone(s.attributes)
                    }) : {}
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = O(this.el), this._isRendered && this.bindUIElements(), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._isRendered && this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                _renderTemplate: function() {
                    var s = this.getTemplate();
                    if (s === !1) {
                        I("template:false is deprecated.  Use _.noop.");
                        return
                    }
                    var k = this.mixinTemplateContext(this.serializeData()),
                        _ = this._renderHtml(s, k);
                    this.attachElContent(_)
                },
                _renderHtml: function(s, k) {
                    return Qe.render(s, k, this)
                },
                getTemplate: function() {
                    return this.template
                },
                mixinTemplateContext: function() {
                    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        k = i.result(this, "templateContext");
                    return i.extend(s, k)
                },
                attachElContent: function(s) {
                    return this.Dom.setContents(this.el, s, this.$el), this
                },
                _removeChildren: function() {
                    this.removeRegions()
                },
                _getImmediateChildren: function() {
                    return i.chain(this._getRegions()).map("currentView").compact().value()
                }
            }, {
                setRenderer: function(s) {
                    return this.prototype._renderHtml = s, this
                },
                setDomApi: $
            });
        i.extend(Ln.prototype, U, $t);
        var rt = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Rn = function(s, k) {
                i.each(rt, function(_) {
                    s[_] = function() {
                        var K = i.result(this, k),
                            ke = Array.prototype.slice.call(arguments);
                        return i[_].apply(i, [K].concat(ke))
                    }
                })
            },
            mi = function(s) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(s, i.bind(this.add, this))
            };
        Rn(mi.prototype, "_getViews"), i.extend(mi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(s, k) {
                return this._add(s, k)._updateLength()
            },
            _add: function(s, k) {
                var _ = s.cid;
                return this._views[_] = s, s.model && (this._indexByModel[s.model.cid] = _), k && (this._indexByCustom[k] = _), this
            },
            findByModel: function(s) {
                return this.findByModelCid(s.cid)
            },
            findByModelCid: function(s) {
                var k = this._indexByModel[s];
                return this.findByCid(k)
            },
            findByCustom: function(s) {
                var k = this._indexByCustom[s];
                return this.findByCid(k)
            },
            findByIndex: function(s) {
                return i.values(this._views)[s]
            },
            findByCid: function(s) {
                return this._views[s]
            },
            remove: function(s) {
                return this._remove(s)._updateLength()
            },
            _remove: function(s) {
                var k = s.cid;
                return s.model && delete this._indexByModel[s.model.cid], i.some(this._indexByCustom, i.bind(function(_, K) {
                    if (_ === k) return delete this._indexByCustom[K], !0
                }, this)), delete this._views[k], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var To = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            Tn = n.View.extend({
                sort: !0,
                constructor: function(s) {
                    this.render = i.bind(this.render, this), this._setOptions(s), this.mergeOptions(s, To), se(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var k = Array.prototype.slice.call(arguments);
                    k[0] = this.options, n.View.prototype.constructor.apply(this, k), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var s = this._isAttached && this.monitorViewEvents !== !1,
                        k = s ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(k, function(_) {
                        L(_, "before:attach", _)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(k, function(_) {
                        _._isAttached = !0, L(_, "attach", _)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(s, k, _) {
                    var K = _.at !== void 0 && (_.index || k.indexOf(s));
                    (this.filter || K === !1) && (K = i.indexOf(this._filteredSortedModels(K), s)), this._shouldAddChild(s, K) && (this._destroyEmptyView(), this._addChild(s, K))
                },
                _onCollectionUpdate: function(s, k) {
                    var _ = k.changes;
                    this._removeChildModels(_.removed)
                },
                _removeChildModels: function(s) {
                    var k = this._getRemovedViews(s);
                    !k.length || (this.children._updateLength(), this._updateIndices(k, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(s) {
                    var k = this;
                    return i.reduce(s, function(_, K) {
                        var ke = K && k.children.findByModel(K);
                        return !ke || ke._isDestroyed || (k._removeChildView(ke), _.push(ke)), _
                    }, [])
                },
                _removeChildView: function(s) {
                    this.triggerMethod("before:remove:child", this, s), this.children._remove(s), s._shouldDisableEvents = this.monitorViewEvents === !1, W(s), this.stopListening(s), this.triggerMethod("remove:child", this, s)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = O(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(s) {
                    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = k.preventRender,
                        K = this._isRendered && !this._isDestroyed,
                        ke = this.filter !== s,
                        ze = K && ke && !_;
                    if (ze) {
                        var Ot = this._filteredSortedModels();
                        this.filter = s;
                        var Ut = this._filteredSortedModels();
                        this._applyModelDeltas(Ut, Ot)
                    } else this.filter = s;
                    return this
                },
                removeFilter: function(s) {
                    return this.setFilter(null, s)
                },
                _applyModelDeltas: function(s, k) {
                    var _ = this,
                        K = {};
                    i.each(s, function(ze, Ot) {
                        var Ut = !_.children.findByModel(ze);
                        Ut && _._onCollectionAdd(ze, _.collection, {
                            at: Ot
                        }), K[ze.cid] = !0
                    });
                    var ke = i.filter(k, function(ze) {
                        return !K[ze.cid] && _.children.findByModel(ze)
                    });
                    this._removeChildModels(ke)
                },
                reorder: function() {
                    var s = this,
                        k = this.children,
                        _ = this._filteredSortedModels();
                    if (!_.length && this._showingEmptyView) return this;
                    var K = i.some(_, function(Ut) {
                        return !k.findByModel(Ut)
                    });
                    if (K) this.render();
                    else {
                        var ke = [],
                            ze = i.reduce(this.children._views, function(Ut, Gn) {
                                var Bn = i.indexOf(_, Gn.model);
                                return Bn === -1 ? (ke.push(Gn.model), Ut) : (Gn._index = Bn, Ut[Bn] = Gn.el, Ut)
                            }, new Array(_.length));
                        this.triggerMethod("before:reorder", this);
                        var Ot = this.Dom.createBuffer();
                        i.each(ze, function(Ut) {
                            s.Dom.appendContents(Ot, Ut)
                        }), this._appendReorderedChildren(Ot), this._removeChildModels(ke), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var s = this,
                        k = this._filteredSortedModels(),
                        _ = i.find(k, function(K, ke) {
                            var ze = s.children.findByModel(K);
                            return !ze || ze._index !== ke
                        });
                    _ && this.resortView()
                },
                _emptyViewIndex: -1,
                _appendReorderedChildren: function(s) {
                    this.Dom.appendContents(this.el, s, {
                        _$el: this.$el
                    })
                },
                _renderChildren: function() {
                    this._isRendered && (this._destroyEmptyView(), this._destroyChildren());
                    var s = this._filteredSortedModels();
                    this.isEmpty({
                        processedModels: s
                    }) ? this._showEmptyView() : (this.triggerMethod("before:render:children", this), this._startBuffering(), this._showCollection(s), this._endBuffering(), this.triggerMethod("render:children", this))
                },
                _createView: function(s, k) {
                    var _ = this._getChildView(s),
                        K = this._getChildViewOptions(s, k),
                        ke = this.buildChildView(s, _, K);
                    return ke
                },
                _setupChildView: function(s, k) {
                    se(s), this._proxyChildViewEvents(s), this.sort && (s._index = k)
                },
                _showCollection: function(s) {
                    i.each(s, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(s) {
                    if (!this.collection || !this.collection.length) return [];
                    var k = this.getViewComparator(),
                        _ = this.collection.models;
                    if (s = Math.min(Math.max(s, 0), _.length - 1), k) {
                        var K = void 0;
                        s && (K = _[s], _ = _.slice(0, s).concat(_.slice(s + 1))), _ = this._sortModelsBy(_, k), K && _.splice(s, 0, K)
                    }
                    return _ = this._filterModels(_), _
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(s) {
                    var k = this;
                    return this.filter && (s = i.filter(s, function(_, K) {
                        return k._shouldAddChild(_, K)
                    })), s
                },
                _sortModelsBy: function(s, k) {
                    return typeof k == "string" ? i.sortBy(s, function(_) {
                        return _.get(k)
                    }) : k.length === 1 ? i.sortBy(s, i.bind(k, this)) : i.clone(s).sort(i.bind(k, this))
                },
                _showEmptyView: function() {
                    var s = this._getEmptyView();
                    if (s && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var k = new n.Model,
                            _ = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(_) && (_ = _.call(this, k, this._emptyViewIndex));
                        var K = this.buildChildView(k, s, _);
                        this.triggerMethod("before:render:empty", this, K), this.addChildView(K, 0), this.triggerMethod("render:empty", this, K)
                    }
                },
                _destroyEmptyView: function() {
                    this._showingEmptyView && (this.triggerMethod("before:remove:empty", this), this._destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty", this))
                },
                _getEmptyView: function() {
                    var s = this.emptyView;
                    if (!!s) return this._getView(s)
                },
                _getChildView: function(s) {
                    var k = this.childView;
                    if (!k) throw new ve({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (k = this._getView(k, s), !k) throw new ve({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return k
                },
                _getView: function(s, k) {
                    if (s.prototype instanceof n.View || s === n.View) return s;
                    if (i.isFunction(s)) return s.call(this, k)
                },
                _addChild: function(s, k) {
                    var _ = this._createView(s, k);
                    return this.addChildView(_, k), _
                },
                _getChildViewOptions: function(s, k) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(s, k) : this.childViewOptions
                },
                addChildView: function(s, k) {
                    return this.triggerMethod("before:add:child", this, s), this._setupChildView(s, k), this._isBuffering ? this.children._add(s) : (this._updateIndices(s, !0), this.children.add(s)), P(s), this._attachView(s, k), this.triggerMethod("add:child", this, s), s
                },
                _updateIndices: function(s, k) {
                    if (!!this.sort) {
                        if (!k) {
                            i.each(i.sortBy(this.children._views, "_index"), function(K, ke) {
                                K._index = ke
                            });
                            return
                        }
                        var _ = i.isArray(s) ? i.max(s, "_index") : s;
                        i.isObject(_) && i.each(this.children._views, function(K) {
                            K._index >= _._index && (K._index += 1)
                        })
                    }
                },
                _attachView: function(s, k) {
                    var _ = !s._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    _ && L(s, "before:attach", s), this.attachHtml(this, s, k), _ && (s._isAttached = !0, L(s, "attach", s))
                },
                buildChildView: function(s, k, _) {
                    var K = i.extend({
                        model: s
                    }, _);
                    return new k(K)
                },
                removeChildView: function(s) {
                    return !s || s._isDestroyed || (this._removeChildView(s), this.children._updateLength(), this._updateIndices(s, !1)), s
                },
                isEmpty: function(s) {
                    var k = void 0;
                    return i.result(s, "processedModels") ? k = s.processedModels : (k = this.collection ? this.collection.models : [], k = this._filterModels(k)), k.length === 0
                },
                attachBuffer: function(s, k) {
                    this.Dom.appendContents(s.el, k, {
                        _$el: s.$el
                    })
                },
                _createBuffer: function() {
                    var s = this,
                        k = this.Dom.createBuffer();
                    return i.each(this._bufferedChildren, function(_) {
                        s.Dom.appendContents(k, _.el, {
                            _$contents: _.$el
                        })
                    }), k
                },
                attachHtml: function(s, k, _) {
                    s._isBuffering ? s._bufferedChildren.splice(_, 0, k) : s._insertBefore(k, _) || s._insertAfter(k)
                },
                _insertBefore: function(s, k) {
                    var _ = void 0,
                        K = this.sort && k < this.children.length - 1;
                    return K && (_ = i.find(this.children._views, function(ke) {
                        return ke._index === k + 1
                    })), _ ? (this.beforeEl(_.el, s.el), !0) : !1
                },
                beforeEl: function(s, k) {
                    this.$(s).before(k)
                },
                _insertAfter: function(s) {
                    this.Dom.appendContents(this.el, s.el, {
                        _$el: this.$el,
                        _$contents: s.$el
                    })
                },
                _initChildViewStorage: function() {
                    this.children = new mi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(s) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(s, k) {
                    var _ = this.filter;
                    return !i.isFunction(_) || _.call(this, s, k, this.collection)
                }
            }, {
                setDomApi: $
            });
        i.extend(Tn.prototype, U);
        var rn = function() {
            this._init()
        };
        Rn(rn.prototype, "_views");

        function _o(w, s) {
            return s.model && s.model.get(w)
        }
        i.extend(rn.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(s) {
                var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    _ = s.cid;
                this._viewsByCid[_] = s, s.model && (this._indexByModel[s.model.cid] = _), this._views.splice(k, 0, s), this._updateLength()
            },
            _sort: function(s, k) {
                return typeof s == "string" ? (s = i.partial(_o, s), this._sortBy(s)) : s.length === 1 ? this._sortBy(i.bind(s, k)) : this._views.sort(i.bind(s, k))
            },
            _sortBy: function(s) {
                var k = i.sortBy(this._views, s);
                return this._set(k), k
            },
            _set: function(s) {
                this._views.length = 0, this._views.push.apply(this._views, s.slice(0)), this._updateLength()
            },
            _swap: function(s, k) {
                var _ = this.findIndexByView(s),
                    K = this.findIndexByView(k);
                if (!(_ === -1 || K === -1)) {
                    var ke = this._views[_];
                    this._views[_] = this._views[K], this._views[K] = ke
                }
            },
            findByModel: function(s) {
                return this.findByModelCid(s.cid)
            },
            findByModelCid: function(s) {
                var k = this._indexByModel[s];
                return this.findByCid(k)
            },
            findByIndex: function(s) {
                return this._views[s]
            },
            findIndexByView: function(s) {
                return this._views.indexOf(s)
            },
            findByCid: function(s) {
                return this._viewsByCid[s]
            },
            hasView: function(s) {
                return !!this.findByCid(s.cid)
            },
            _remove: function(s) {
                if (!!this._viewsByCid[s.cid]) {
                    s.model && delete this._indexByModel[s.model.cid], delete this._viewsByCid[s.cid];
                    var k = this.findIndexByView(s);
                    this._views.splice(k, 1), this._updateLength()
                }
            },
            _updateLength: function() {
                this.length = this._views.length
            }
        });
        var Ao = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            yi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(s) {
                    this._setOptions(s), this.mergeOptions(s, Ao), se(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var k = Array.prototype.slice.call(arguments);
                    k[0] = this.options, n.View.prototype.constructor.apply(this, k), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _initChildViewStorage: function() {
                    this.children = new rn
                },
                getEmptyRegion: function() {
                    return this._emptyRegion && !this._emptyRegion.isDestroyed() ? this._emptyRegion : (this._emptyRegion = new pe({
                        el: this.el,
                        replaceElement: !1
                    }), this._emptyRegion._parentView = this, this._emptyRegion)
                },
                _initialEvents: function() {
                    this.listenTo(this.collection, {
                        sort: this._onCollectionSort,
                        reset: this._onCollectionReset,
                        update: this._onCollectionUpdate
                    })
                },
                _onCollectionSort: function(s, k) {
                    var _ = k.add,
                        K = k.merge,
                        ke = k.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || _ || ke || K || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(s, k) {
                    var _ = k.changes,
                        K = _.removed.length && this._removeChildModels(_.removed);
                    this._addedViews = _.added.length && this._addChildModels(_.added), this._detachChildren(K), this._showChildren(), this._removeChildViews(K)
                },
                _removeChildModels: function(s) {
                    var k = this;
                    return i.reduce(s, function(_, K) {
                        var ke = k._removeChildModel(K);
                        return ke && _.push(ke), _
                    }, [])
                },
                _removeChildModel: function(s) {
                    var k = this.children.findByModel(s);
                    return k && this._removeChild(k), k
                },
                _removeChild: function(s) {
                    this.triggerMethod("before:remove:child", this, s), this.children._remove(s), this.triggerMethod("remove:child", this, s)
                },
                _addChildModels: function(s) {
                    return i.map(s, i.bind(this._addChildModel, this))
                },
                _addChildModel: function(s) {
                    var k = this._createChildView(s);
                    return this._addChild(k), k
                },
                _createChildView: function(s) {
                    var k = this._getChildView(s),
                        _ = this._getChildViewOptions(s),
                        K = this.buildChildView(s, k, _);
                    return K
                },
                _addChild: function(s, k) {
                    this.triggerMethod("before:add:child", this, s), this._setupChildView(s), this.children._add(s, k), this.triggerMethod("add:child", this, s)
                },
                _getChildView: function(s) {
                    var k = this.childView;
                    if (!k) throw new ve({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (k = this._getView(k, s), !k) throw new ve({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return k
                },
                _getView: function(s, k) {
                    if (s.prototype instanceof n.View || s === n.View) return s;
                    if (i.isFunction(s)) return s.call(this, k)
                },
                _getChildViewOptions: function(s) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(s) : this.childViewOptions
                },
                buildChildView: function(s, k, _) {
                    var K = i.extend({
                        model: s
                    }, _);
                    return new k(K)
                },
                _setupChildView: function(s) {
                    se(s), s.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(s)
                },
                _getImmediateChildren: function() {
                    return this.children._views
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = O(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._destroyChildren(), this.children._init(), this.collection && this._addChildModels(this.collection.models), this._showChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                sort: function() {
                    return this._isDestroyed ? this : this.children.length ? (this._showChildren(), this) : this
                },
                _showChildren: function() {
                    if (this.isEmpty()) {
                        this._showEmptyView();
                        return
                    }
                    this._sortChildren(), this.filter()
                },
                isEmpty: function(s) {
                    return s || !this.children.length
                },
                _showEmptyView: function() {
                    var s = this._getEmptyView();
                    if (!!s) {
                        var k = this._getEmptyViewOptions(),
                            _ = this.getEmptyRegion();
                        _.show(new s(k))
                    }
                },
                _getEmptyView: function() {
                    var s = this.emptyView;
                    if (!!s) return this._getView(s)
                },
                _destroyEmptyView: function() {
                    var s = this.getEmptyRegion();
                    s.hasView() && s.empty()
                },
                _getEmptyViewOptions: function() {
                    var s = this.emptyViewOptions || this.childViewOptions;
                    return i.isFunction(s) ? s.call(this) : s
                },
                _sortChildren: function() {
                    var s = this.getComparator();
                    !s || (delete this._addedViews, this.triggerMethod("before:sort", this), this.children._sort(s, this), this.triggerMethod("sort", this))
                },
                setComparator: function(s) {
                    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = k.preventRender,
                        K = this.viewComparator !== s,
                        ke = K && !_;
                    return this.viewComparator = s, ke && this.sort(), this
                },
                removeComparator: function(s) {
                    return this.setComparator(null, s)
                },
                getComparator: function() {
                    return this.viewComparator ? this.viewComparator : !this.sortWithCollection || this.viewComparator === !1 || !this.collection ? !1 : this._viewComparator
                },
                _viewComparator: function(s) {
                    return this.collection.indexOf(s.model)
                },
                filter: function() {
                    if (this._isDestroyed) return this;
                    if (!this.children.length) return this;
                    var s = this._filterChildren();
                    return this._renderChildren(s), this
                },
                _filterChildren: function() {
                    var s = this,
                        k = this._getFilter(),
                        _ = this._addedViews;
                    if (delete this._addedViews, !k) return _ || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var K = [],
                        ke = [];
                    return i.each(this.children._views, function(ze, Ot, Ut) {
                        (k.call(s, ze, Ot, Ut) ? K : ke).push(ze)
                    }), this._detachChildren(ke), this.triggerMethod("filter", this, K, ke), K
                },
                _getFilter: function() {
                    var s = this.getFilter();
                    if (!s) return !1;
                    if (i.isFunction(s)) return s;
                    if (i.isObject(s)) {
                        var k = i.matches(s);
                        return function(_) {
                            return k(_.model && _.model.attributes)
                        }
                    }
                    if (i.isString(s)) return function(_) {
                        return _.model && _.model.get(s)
                    };
                    throw new ve({
                        name: "InvalidViewFilterError",
                        message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'
                    })
                },
                getFilter: function() {
                    return this.viewFilter
                },
                setFilter: function(s) {
                    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = k.preventRender,
                        K = this.viewFilter !== s,
                        ke = K && !_;
                    return this.viewFilter = s, ke && this.filter(), this
                },
                removeFilter: function(s) {
                    return this.setFilter(null, s)
                },
                _detachChildren: function(s) {
                    i.each(s, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(s) {
                    var k = s._isAttached && this.monitorViewEvents !== !1;
                    k && L(s, "before:detach", s), this.detachHtml(s), k && (s._isAttached = !1, L(s, "detach", s))
                },
                detachHtml: function(s) {
                    this.Dom.detachEl(s.el, s.$el)
                },
                _renderChildren: function(s) {
                    if (this.isEmpty(!s.length)) {
                        this._showEmptyView();
                        return
                    }
                    this._destroyEmptyView(), this.triggerMethod("before:render:children", this, s);
                    var k = this._getBuffer(s);
                    this._attachChildren(k, s), this.triggerMethod("render:children", this, s)
                },
                _attachChildren: function(s, k) {
                    var _ = this._isAttached && this.monitorViewEvents !== !1;
                    k = _ ? k : [], i.each(k, function(K) {
                        K._isAttached || L(K, "before:attach", K)
                    }), this.attachHtml(s), i.each(k, function(K) {
                        K._isAttached || (K._isAttached = !0, L(K, "attach", K))
                    })
                },
                _getBuffer: function(s) {
                    var k = this,
                        _ = this.Dom.createBuffer();
                    return i.each(s, function(K) {
                        P(K), k.Dom.appendContents(_, K.el, {
                            _$contents: K.$el
                        })
                    }), _
                },
                attachHtml: function(s) {
                    this.Dom.appendContents(this.el, s, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(s, k) {
                    if (!this.children.hasView(s) || !this.children.hasView(k)) throw new ve({
                        name: "ChildSwapError",
                        message: "Both views must be children of the collection view"
                    });
                    return this.children._swap(s, k), this.Dom.swapEl(s.el, k.el), this.Dom.hasEl(this.el, s.el) !== this.Dom.hasEl(this.el, k.el) && this.filter(), this
                },
                addChildView: function(s, k) {
                    return !s || s._isDestroyed || ((!k || k >= this.children.length) && (this._addedViews = [s]), this._addChild(s, k), this._showChildren()), s
                },
                detachChildView: function(s) {
                    return this.removeChildView(s, {
                        shouldDetach: !0
                    }), s
                },
                removeChildView: function(s, k) {
                    return s && (this._removeChildView(s, k), this._removeChild(s), this.isEmpty() && this._showEmptyView(), s)
                },
                _removeChildViews: function(s) {
                    i.each(s, i.bind(this._removeChildView, this))
                },
                _removeChildView: function(s) {
                    var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = k.shouldDetach;
                    s.off("destroy", this.removeChildView, this), _ ? this._detachChildView(s) : this._destroyChildView(s), this.stopListening(s)
                },
                _destroyChildView: function(s) {
                    s._isDestroyed || (s._shouldDisableEvents = this.monitorViewEvents === !1, W(s))
                },
                _removeChildren: function() {
                    this._destroyChildren();
                    var s = this.getEmptyRegion();
                    s.destroy(), delete this._addedViews
                },
                _destroyChildren: function() {
                    !this.children || !this.children.length || (this.triggerMethod("before:destroy:children", this), this.monitorViewEvents === !1 && this.Dom.detachContents(this.el, this.$el), i.each(this.children._views, i.bind(this._removeChildView, this)), this.triggerMethod("destroy:children", this))
                }
            }, {
                setDomApi: $
            });
        i.extend(yi.prototype, U);
        var $i = ["childViewContainer", "template", "templateContext"],
            wi = Tn.extend({
                constructor: function(s) {
                    I("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(s, $i), Tn.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(s) {
                    var k = this.childView;
                    if (!k) return this.constructor;
                    if (k = this._getView(k, s), !k) throw new ve({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return k
                },
                serializeData: function() {
                    return this.serializeModel()
                },
                render: function() {
                    return this._isDestroyed ? this : (this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.renderChildren(), this._isRendering = !1, this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                renderChildren: function() {
                    (this._isRendered || this._isRendering) && Tn.prototype._renderChildren.call(this)
                },
                attachBuffer: function(s, k) {
                    var _ = this.getChildViewContainer(s);
                    this.Dom.appendContents(_[0], k, {
                        _$el: _
                    })
                },
                _insertAfter: function(s) {
                    var k = this.getChildViewContainer(this, s);
                    this.Dom.appendContents(k[0], s.el, {
                        _$el: k,
                        _$contents: s.$el
                    })
                },
                _appendReorderedChildren: function(s) {
                    var k = this.getChildViewContainer(this);
                    this.Dom.appendContents(k[0], s, {
                        _$el: k
                    })
                },
                getChildViewContainer: function(s, k) {
                    if (s.$childViewContainer) return s.$childViewContainer;
                    var _ = void 0,
                        K = s.childViewContainer;
                    if (K) {
                        var ke = i.result(s, "childViewContainer");
                        if (ke.charAt(0) === "@" && s.ui ? _ = s.ui[ke.substr(4)] : _ = this.$(ke), _.length <= 0) throw new ve({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + s.childViewContainer
                        })
                    } else _ = s.$el;
                    return s.$childViewContainer = _, _
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            vi = i.pick(Ln.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(wi.prototype, vi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Hi = g.extend({
                cidPrefix: "mnb",
                constructor: function(s, k) {
                    this.view = k, this.defaults && I("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, s)), this.mergeOptions(this.options, ji), this.ui = i.extend({}, i.result(this, "ui"), i.result(k, "ui")), g.apply(this, arguments)
                },
                $: function() {
                    return this.view.$.apply(this.view, arguments)
                },
                destroy: function() {
                    return this.stopListening(), this.view._removeBehavior(this), this
                },
                proxyViewProperties: function() {
                    return this.$el = this.view.$el, this.el = this.view.el, this
                },
                bindUIElements: function() {
                    return this._bindUIElements(), this
                },
                unbindUIElements: function() {
                    return this._unbindUIElements(), this
                },
                getUI: function(s) {
                    return this._getUI(s)
                },
                delegateEntityEvents: function() {
                    return this._delegateEntityEvents(this.view.model, this.view.collection), this
                },
                undelegateEntityEvents: function() {
                    return this._undelegateEntityEvents(this.view.model, this.view.collection), this
                },
                getEvents: function() {
                    var s = this,
                        k = this.normalizeUIKeys(i.result(this, "events"));
                    return i.reduce(k, function(_, K, ke) {
                        return i.isFunction(K) || (K = s[K]), K && (ke = Oe(ke, s.cid), _[ke] = i.bind(K, s)), _
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var s = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, s)
                    }
                }
            });
        i.extend(Hi.prototype, Se, ht, Ze);
        var yn = ["region", "regionClass"],
            Fi = g.extend({
                cidPrefix: "mna",
                constructor: function(s) {
                    this._setOptions(s), this.mergeOptions(s, yn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: pe,
                _initRegion: function() {
                    var s = this.region;
                    if (!!s) {
                        var k = {
                            regionClass: this.regionClass
                        };
                        this._region = Be(s, k)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(s) {
                    for (var k = this.getRegion(), _ = arguments.length, K = Array(_ > 1 ? _ - 1 : 0), ke = 1; ke < _; ke++) K[ke - 1] = arguments[ke];
                    return k.show.apply(k, [s].concat(K))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(s) {
                    return this.triggerMethod("before:start", this, s), this.triggerMethod("start", this, s), this
                }
            }),
            bi = ["appRoutes", "controller"],
            Fn = n.Router.extend({
                constructor: function(s) {
                    this._setOptions(s), this.mergeOptions(s, bi), n.Router.apply(this, arguments);
                    var k = this.appRoutes,
                        _ = this._getController();
                    this.processAppRoutes(_, k), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(s, k) {
                    var _ = this._getController();
                    return this._addAppRoute(_, s, k), this
                },
                _processOnRoute: function(s, k) {
                    if (i.isFunction(this.onRoute)) {
                        var _ = i.invert(this.appRoutes)[s];
                        this.onRoute(s, _, k)
                    }
                },
                processAppRoutes: function(s, k) {
                    var _ = this;
                    if (!k) return this;
                    var K = i.keys(k).reverse();
                    return i.each(K, function(ke) {
                        _._addAppRoute(s, ke, k[ke])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(s, k, _) {
                    var K = s[_];
                    if (!K) throw new ve('Method "' + _ + '" was not found on the controller');
                    this.route(k, _, i.bind(K, s))
                },
                triggerMethod: m
            });
        i.extend(Fn.prototype, Wt);

        function Gi() {
            throw new ve({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var ki = n.Marionette,
            tt = n.Marionette = {};
        return tt.noConflict = function() {
            return n.Marionette = ki, this
        }, tt.bindEvents = y(xe), tt.unbindEvents = y(Ie), tt.bindRequests = y(Ke), tt.unbindRequests = y(ct), tt.mergeOptions = y(R), tt.getOption = y(V), tt.normalizeMethods = y(X), tt.extend = S, tt.isNodeAttached = O, tt.deprecate = I, tt.triggerMethod = y(m), tt.triggerMethodOn = L, tt.isEnabled = ot, tt.setEnabled = Ct, tt.monitorViewEvents = se, tt.Behaviors = {}, tt.Behaviors.behaviorsLookup = Gi, tt.Application = Fi, tt.AppRouter = Fn, tt.Renderer = Qe, tt.TemplateCache = x, tt.View = Ln, tt.CollectionView = Tn, tt.NextCollectionView = yi, tt.CompositeView = wi, tt.Behavior = Hi, tt.Region = pe, tt.Error = ve, tt.Object = g, tt.DEV_MODE = !1, tt.FEATURES = Re, tt.VERSION = f, tt.DomApi = B, tt.setDomApi = function(w) {
            Tn.setDomApi(w), wi.setDomApi(w), yi.setDomApi(w), pe.setDomApi(w), Ln.setDomApi(w)
        }, tt
    }), yt && yt.Marionette && (yt.Mn = yt.Marionette)
})(kh);
const wt = kh.exports;
class bd {
    static setup() {
        gtag("config", "G-V1QJVQMYF1", {
            send_page_view: !1
        })
    }
    static pageView(e) {
        gtag("event", "page_view", {
            page_title: e,
            page_location: `https://jackbox.tv/${e}`
        })
    }
    static gameStarted(e, n) {
        const i = {
            tag: e
        };
        n.isUGC !== void 0 && (i.is_ugc = n.isUGC), n.isSequel !== void 0 && (i.is_sequel = n.isSequel), n.locale !== void 0 && (i.locale = n.locale), n.mode !== void 0 && (i.mode = n.mode), n.numberOfPlayer !== void 0 && (i.number_of_players = n.numberOfPlayer), gtag("event", "game_start", i)
    }
    static bannerClick(e, n) {
        gtag("event", "banner_click", {
            url: e,
            location: n
        })
    }
    static externalLinkClick(e, n) {
        gtag("event", "external_link_click", {
            url: e,
            location: n
        })
    }
    static galleryClick(e, n) {
        gtag("event", "gallery_click", {
            category_id: e,
            location: n
        })
    }
    static galleryImpression(e, n) {
        gtag("event", "gallery_impression", {
            category_id: e,
            location: n
        })
    }
    static moderatorConnected(e) {
        gtag("event", "moderator_connected", {
            tag: e
        })
    }
    static itemModerated(e, n) {
        gtag("event", "item_moderated", {
            tag: e,
            was_rejected: n
        })
    }
    static playerKicked(e, n) {
        gtag("event", "player_kicked", {
            tag: e,
            is_lobby: n
        })
    }
}

function kd() {
    this.__data__ = [], this.size = 0
}
var Cd = kd;

function Ed(t, e) {
    return t === e || t !== t && e !== e
}
var us = Ed,
    xd = us;

function Sd(t, e) {
    for (var n = t.length; n--;)
        if (xd(t[n][0], e)) return n;
    return -1
}
var ds = Sd,
    Id = ds,
    Td = Array.prototype,
    _d = Td.splice;

function Ad(t) {
    var e = this.__data__,
        n = Id(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : _d.call(e, n, 1), --this.size, !0
}
var qd = Ad,
    Od = ds;

function Rd(t) {
    var e = this.__data__,
        n = Od(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Pd = Rd,
    Md = ds;

function Ld(t) {
    return Md(this.__data__, t) > -1
}
var Bd = Ld,
    Dd = ds;

function Nd(t, e) {
    var n = this.__data__,
        i = Dd(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Vd = Nd,
    $d = Cd,
    jd = qd,
    Hd = Pd,
    Fd = Bd,
    Gd = Vd;

function ko(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
ko.prototype.clear = $d;
ko.prototype.delete = jd;
ko.prototype.get = Hd;
ko.prototype.has = Fd;
ko.prototype.set = Gd;
var cs = ko,
    Wd = cs;

function zd() {
    this.__data__ = new Wd, this.size = 0
}
var Ud = zd;

function Yd(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Jd = Yd;

function Qd(t) {
    return this.__data__.get(t)
}
var Xd = Qd;

function Kd(t) {
    return this.__data__.has(t)
}
var Zd = Kd,
    ec = typeof yt == "object" && yt && yt.Object === Object && yt,
    Ch = ec,
    tc = Ch,
    nc = typeof self == "object" && self && self.Object === Object && self,
    ic = tc || nc || Function("return this")(),
    Co = ic,
    oc = Co,
    rc = oc.Symbol,
    Eh = rc,
    yl = Eh,
    xh = Object.prototype,
    sc = xh.hasOwnProperty,
    ac = xh.toString,
    Qo = yl ? yl.toStringTag : void 0;

function lc(t) {
    var e = sc.call(t, Qo),
        n = t[Qo];
    try {
        t[Qo] = void 0;
        var i = !0
    } catch {}
    var a = ac.call(t);
    return i && (e ? t[Qo] = n : delete t[Qo]), a
}
var hc = lc,
    uc = Object.prototype,
    dc = uc.toString;

function cc(t) {
    return dc.call(t)
}
var fc = cc,
    wl = Eh,
    pc = hc,
    gc = fc,
    mc = "[object Null]",
    yc = "[object Undefined]",
    vl = wl ? wl.toStringTag : void 0;

function wc(t) {
    return t == null ? t === void 0 ? yc : mc : vl && vl in Object(t) ? pc(t) : gc(t)
}
var fs = wc;

function vc(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Ni = vc,
    bc = fs,
    kc = Ni,
    Cc = "[object AsyncFunction]",
    Ec = "[object Function]",
    xc = "[object GeneratorFunction]",
    Sc = "[object Proxy]";

function Ic(t) {
    if (!kc(t)) return !1;
    var e = bc(t);
    return e == Ec || e == xc || e == Cc || e == Sc
}
var Va = Ic,
    Tc = Co,
    _c = Tc["__core-js_shared__"],
    Ac = _c,
    ea = Ac,
    bl = function() {
        var t = /[^.]+$/.exec(ea && ea.keys && ea.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function qc(t) {
    return !!bl && bl in t
}
var Oc = qc,
    Rc = Function.prototype,
    Pc = Rc.toString;

function Mc(t) {
    if (t != null) {
        try {
            return Pc.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Lc = Mc,
    Bc = Va,
    Dc = Oc,
    Nc = Ni,
    Vc = Lc,
    $c = /[\\^$.*+?()[\]{}|]/g,
    jc = /^\[object .+?Constructor\]$/,
    Hc = Function.prototype,
    Fc = Object.prototype,
    Gc = Hc.toString,
    Wc = Fc.hasOwnProperty,
    zc = RegExp("^" + Gc.call(Wc).replace($c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Uc(t) {
    if (!Nc(t) || Dc(t)) return !1;
    var e = Bc(t) ? zc : jc;
    return e.test(Vc(t))
}
var Yc = Uc;

function Jc(t, e) {
    return t == null ? void 0 : t[e]
}
var Qc = Jc,
    Xc = Yc,
    Kc = Qc;

function Zc(t, e) {
    var n = Kc(t, e);
    return Xc(n) ? n : void 0
}
var $a = Zc,
    ef = $a,
    tf = Co,
    nf = ef(tf, "Map"),
    Sh = nf,
    of = $a,
    rf = of(Object, "create"),
    ps = rf,
    kl = ps;

function sf() {
    this.__data__ = kl ? kl(null) : {}, this.size = 0
}
var af = sf;

function lf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var hf = lf,
    uf = ps,
    df = "__lodash_hash_undefined__",
    cf = Object.prototype,
    ff = cf.hasOwnProperty;

function pf(t) {
    var e = this.__data__;
    if (uf) {
        var n = e[t];
        return n === df ? void 0 : n
    }
    return ff.call(e, t) ? e[t] : void 0
}
var gf = pf,
    mf = ps,
    yf = Object.prototype,
    wf = yf.hasOwnProperty;

function vf(t) {
    var e = this.__data__;
    return mf ? e[t] !== void 0 : wf.call(e, t)
}
var bf = vf,
    kf = ps,
    Cf = "__lodash_hash_undefined__";

function Ef(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = kf && e === void 0 ? Cf : e, this
}
var xf = Ef,
    Sf = af,
    If = hf,
    Tf = gf,
    _f = bf,
    Af = xf;

function Eo(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Eo.prototype.clear = Sf;
Eo.prototype.delete = If;
Eo.prototype.get = Tf;
Eo.prototype.has = _f;
Eo.prototype.set = Af;
var qf = Eo,
    Cl = qf,
    Of = cs,
    Rf = Sh;

function Pf() {
    this.size = 0, this.__data__ = {
        hash: new Cl,
        map: new(Rf || Of),
        string: new Cl
    }
}
var Mf = Pf;

function Lf(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Bf = Lf,
    Df = Bf;

function Nf(t, e) {
    var n = t.__data__;
    return Df(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var gs = Nf,
    Vf = gs;

function $f(t) {
    var e = Vf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var jf = $f,
    Hf = gs;

function Ff(t) {
    return Hf(this, t).get(t)
}
var Gf = Ff,
    Wf = gs;

function zf(t) {
    return Wf(this, t).has(t)
}
var Uf = zf,
    Yf = gs;

function Jf(t, e) {
    var n = Yf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Qf = Jf,
    Xf = Mf,
    Kf = jf,
    Zf = Gf,
    ep = Uf,
    tp = Qf;

function xo(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xo.prototype.clear = Xf;
xo.prototype.delete = Kf;
xo.prototype.get = Zf;
xo.prototype.has = ep;
xo.prototype.set = tp;
var np = xo,
    ip = cs,
    op = Sh,
    rp = np,
    sp = 200;

function ap(t, e) {
    var n = this.__data__;
    if (n instanceof ip) {
        var i = n.__data__;
        if (!op || i.length < sp - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new rp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var lp = ap,
    hp = cs,
    up = Ud,
    dp = Jd,
    cp = Xd,
    fp = Zd,
    pp = lp;

function So(t) {
    var e = this.__data__ = new hp(t);
    this.size = e.size
}
So.prototype.clear = up;
So.prototype.delete = dp;
So.prototype.get = cp;
So.prototype.has = fp;
So.prototype.set = pp;
var gp = So,
    mp = $a,
    yp = function() {
        try {
            var t = mp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Ih = yp,
    El = Ih;

function wp(t, e, n) {
    e == "__proto__" && El ? El(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var ja = wp,
    vp = ja,
    bp = us;

function kp(t, e, n) {
    (n !== void 0 && !bp(t[e], n) || n === void 0 && !(e in t)) && vp(t, e, n)
}
var Th = kp;

function Cp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), y = i(e), S = y.length; S--;) {
            var I = y[t ? S : ++a];
            if (n(f[I], I, f) === !1) break
        }
        return e
    }
}
var Ep = Cp,
    xp = Ep,
    Sp = xp(),
    Ip = Sp,
    Ca = {
        exports: {}
    };
(function(t, e) {
    var n = Co,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        y = f ? n.Buffer : void 0,
        S = y ? y.allocUnsafe : void 0;

    function I(O, R) {
        if (R) return O.slice();
        var V = O.length,
            X = S ? S(V) : new O.constructor(V);
        return O.copy(X), X
    }
    t.exports = I
})(Ca, Ca.exports);
var Tp = Co,
    _p = Tp.Uint8Array,
    Ap = _p,
    xl = Ap;

function qp(t) {
    var e = new t.constructor(t.byteLength);
    return new xl(e).set(new xl(t)), e
}
var Op = qp,
    Rp = Op;

function Pp(t, e) {
    var n = e ? Rp(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Mp = Pp;

function Lp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Bp = Lp,
    Dp = Ni,
    Sl = Object.create,
    Np = function() {
        function t() {}
        return function(e) {
            if (!Dp(e)) return {};
            if (Sl) return Sl(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Vp = Np;

function $p(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var jp = $p,
    Hp = jp,
    Fp = Hp(Object.getPrototypeOf, Object),
    _h = Fp,
    Gp = Object.prototype;

function Wp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || Gp;
    return t === n
}
var Ah = Wp,
    zp = Vp,
    Up = _h,
    Yp = Ah;

function Jp(t) {
    return typeof t.constructor == "function" && !Yp(t) ? zp(Up(t)) : {}
}
var Qp = Jp;

function Xp(t) {
    return t != null && typeof t == "object"
}
var cr = Xp,
    Kp = fs,
    Zp = cr,
    eg = "[object Arguments]";

function tg(t) {
    return Zp(t) && Kp(t) == eg
}
var ng = tg,
    Il = ng,
    ig = cr,
    qh = Object.prototype,
    og = qh.hasOwnProperty,
    rg = qh.propertyIsEnumerable,
    sg = Il(function() {
        return arguments
    }()) ? Il : function(t) {
        return ig(t) && og.call(t, "callee") && !rg.call(t, "callee")
    },
    Oh = sg,
    ag = Array.isArray,
    Rh = ag,
    lg = 9007199254740991;

function hg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= lg
}
var Ph = hg,
    ug = Va,
    dg = Ph;

function cg(t) {
    return t != null && dg(t.length) && !ug(t)
}
var Ha = cg,
    fg = Ha,
    pg = cr;

function gg(t) {
    return pg(t) && fg(t)
}
var mg = gg,
    Kr = {
        exports: {}
    };

function yg() {
    return !1
}
var wg = yg;
(function(t, e) {
    var n = Co,
        i = wg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        y = f && f.exports === a,
        S = y ? n.Buffer : void 0,
        I = S ? S.isBuffer : void 0,
        O = I || i;
    t.exports = O
})(Kr, Kr.exports);
var vg = fs,
    bg = _h,
    kg = cr,
    Cg = "[object Object]",
    Eg = Function.prototype,
    xg = Object.prototype,
    Mh = Eg.toString,
    Sg = xg.hasOwnProperty,
    Ig = Mh.call(Object);

function Tg(t) {
    if (!kg(t) || vg(t) != Cg) return !1;
    var e = bg(t);
    if (e === null) return !0;
    var n = Sg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Mh.call(n) == Ig
}
var _g = Tg,
    Ag = fs,
    qg = Ph,
    Og = cr,
    Rg = "[object Arguments]",
    Pg = "[object Array]",
    Mg = "[object Boolean]",
    Lg = "[object Date]",
    Bg = "[object Error]",
    Dg = "[object Function]",
    Ng = "[object Map]",
    Vg = "[object Number]",
    $g = "[object Object]",
    jg = "[object RegExp]",
    Hg = "[object Set]",
    Fg = "[object String]",
    Gg = "[object WeakMap]",
    Wg = "[object ArrayBuffer]",
    zg = "[object DataView]",
    Ug = "[object Float32Array]",
    Yg = "[object Float64Array]",
    Jg = "[object Int8Array]",
    Qg = "[object Int16Array]",
    Xg = "[object Int32Array]",
    Kg = "[object Uint8Array]",
    Zg = "[object Uint8ClampedArray]",
    em = "[object Uint16Array]",
    tm = "[object Uint32Array]",
    Pt = {};
Pt[Ug] = Pt[Yg] = Pt[Jg] = Pt[Qg] = Pt[Xg] = Pt[Kg] = Pt[Zg] = Pt[em] = Pt[tm] = !0;
Pt[Rg] = Pt[Pg] = Pt[Wg] = Pt[Mg] = Pt[zg] = Pt[Lg] = Pt[Bg] = Pt[Dg] = Pt[Ng] = Pt[Vg] = Pt[$g] = Pt[jg] = Pt[Hg] = Pt[Fg] = Pt[Gg] = !1;

function nm(t) {
    return Og(t) && qg(t.length) && !!Pt[Ag(t)]
}
var im = nm;

function om(t) {
    return function(e) {
        return t(e)
    }
}
var rm = om,
    Ea = {
        exports: {}
    };
(function(t, e) {
    var n = Ch,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        y = f && n.process,
        S = function() {
            try {
                var I = a && a.require && a.require("util").types;
                return I || y && y.binding && y.binding("util")
            } catch {}
        }();
    t.exports = S
})(Ea, Ea.exports);
var sm = im,
    am = rm,
    Tl = Ea.exports,
    _l = Tl && Tl.isTypedArray,
    lm = _l ? am(_l) : sm,
    Lh = lm;

function hm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Bh = hm,
    um = ja,
    dm = us,
    cm = Object.prototype,
    fm = cm.hasOwnProperty;

function pm(t, e, n) {
    var i = t[e];
    (!(fm.call(t, e) && dm(i, n)) || n === void 0 && !(e in t)) && um(t, e, n)
}
var gm = pm,
    mm = gm,
    ym = ja;

function wm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, y = e.length; ++f < y;) {
        var S = e[f],
            I = i ? i(n[S], t[S], S, n, t) : void 0;
        I === void 0 && (I = t[S]), a ? ym(n, S, I) : mm(n, S, I)
    }
    return n
}
var vm = wm;

function bm(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var km = bm,
    Cm = 9007199254740991,
    Em = /^(?:0|[1-9]\d*)$/;

function xm(t, e) {
    var n = typeof t;
    return e = e == null ? Cm : e, !!e && (n == "number" || n != "symbol" && Em.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Dh = xm,
    Sm = km,
    Im = Oh,
    Tm = Rh,
    _m = Kr.exports,
    Am = Dh,
    qm = Lh,
    Om = Object.prototype,
    Rm = Om.hasOwnProperty;

function Pm(t, e) {
    var n = Tm(t),
        i = !n && Im(t),
        a = !n && !i && _m(t),
        f = !n && !i && !a && qm(t),
        y = n || i || a || f,
        S = y ? Sm(t.length, String) : [],
        I = S.length;
    for (var O in t)(e || Rm.call(t, O)) && !(y && (O == "length" || a && (O == "offset" || O == "parent") || f && (O == "buffer" || O == "byteLength" || O == "byteOffset") || Am(O, I))) && S.push(O);
    return S
}
var Mm = Pm;

function Lm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Bm = Lm,
    Dm = Ni,
    Nm = Ah,
    Vm = Bm,
    $m = Object.prototype,
    jm = $m.hasOwnProperty;

function Hm(t) {
    if (!Dm(t)) return Vm(t);
    var e = Nm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !jm.call(t, i)) || n.push(i);
    return n
}
var Fm = Hm,
    Gm = Mm,
    Wm = Fm,
    zm = Ha;

function Um(t) {
    return zm(t) ? Gm(t, !0) : Wm(t)
}
var Nh = Um,
    Ym = vm,
    Jm = Nh;

function Qm(t) {
    return Ym(t, Jm(t))
}
var Xm = Qm,
    Al = Th,
    Km = Ca.exports,
    Zm = Mp,
    ey = Bp,
    ty = Qp,
    ql = Oh,
    Ol = Rh,
    ny = mg,
    iy = Kr.exports,
    oy = Va,
    ry = Ni,
    sy = _g,
    ay = Lh,
    Rl = Bh,
    ly = Xm;

function hy(t, e, n, i, a, f, y) {
    var S = Rl(t, n),
        I = Rl(e, n),
        O = y.get(I);
    if (O) {
        Al(t, n, O);
        return
    }
    var R = f ? f(S, I, n + "", t, e, y) : void 0,
        V = R === void 0;
    if (V) {
        var X = Ol(I),
            ie = !X && iy(I),
            J = !X && !ie && ay(I);
        R = I, X || ie || J ? Ol(S) ? R = S : ny(S) ? R = ey(S) : ie ? (V = !1, R = Km(I, !0)) : J ? (V = !1, R = Zm(I, !0)) : R = [] : sy(I) || ql(I) ? (R = S, ql(S) ? R = ly(S) : (!ry(S) || oy(S)) && (R = ty(I))) : V = !1
    }
    V && (y.set(I, R), a(R, I, i, f, y), y.delete(I)), Al(t, n, R)
}
var uy = hy,
    dy = gp,
    cy = Th,
    fy = Ip,
    py = uy,
    gy = Ni,
    my = Nh,
    yy = Bh;

function Vh(t, e, n, i, a) {
    t !== e && fy(e, function(f, y) {
        if (a || (a = new dy), gy(f)) py(t, e, y, n, Vh, i, a);
        else {
            var S = i ? i(yy(t, y), f, y + "", t, e, a) : void 0;
            S === void 0 && (S = f), cy(t, y, S)
        }
    }, my)
}
var wy = Vh;

function vy(t) {
    return t
}
var $h = vy;

function by(t, e, n) {
    switch (n.length) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, n[0]);
        case 2:
            return t.call(e, n[0], n[1]);
        case 3:
            return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
}
var ky = by,
    Cy = ky,
    Pl = Math.max;

function Ey(t, e, n) {
    return e = Pl(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = Pl(i.length - e, 0), y = Array(f); ++a < f;) y[a] = i[e + a];
            a = -1;
            for (var S = Array(e + 1); ++a < e;) S[a] = i[a];
            return S[e] = n(y), Cy(t, this, S)
        }
}
var xy = Ey;

function Sy(t) {
    return function() {
        return t
    }
}
var Iy = Sy,
    Ty = Iy,
    Ml = Ih,
    _y = $h,
    Ay = Ml ? function(t, e) {
        return Ml(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ty(e),
            writable: !0
        })
    } : _y,
    qy = Ay,
    Oy = 800,
    Ry = 16,
    Py = Date.now;

function My(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Py(),
            a = Ry - (i - n);
        if (n = i, a > 0) {
            if (++e >= Oy) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Ly = My,
    By = qy,
    Dy = Ly,
    Ny = Dy(By),
    Vy = Ny,
    $y = $h,
    jy = xy,
    Hy = Vy;

function Fy(t, e) {
    return Hy(jy(t, e, $y), t + "")
}
var Gy = Fy,
    Wy = us,
    zy = Ha,
    Uy = Dh,
    Yy = Ni;

function Jy(t, e, n) {
    if (!Yy(n)) return !1;
    var i = typeof e;
    return (i == "number" ? zy(n) && Uy(e, n.length) : i == "string" && e in n) ? Wy(n[e], t) : !1
}
var Qy = Jy,
    Xy = Gy,
    Ky = Qy;

function Zy(t) {
    return Xy(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            y = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, y && Ky(n[0], n[1], y) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var S = n[i];
            S && t(e, S, i, f)
        }
        return e
    })
}
var ew = Zy,
    tw = wy,
    nw = ew,
    iw = nw(function(t, e, n) {
        tw(t, e, n)
    }),
    ow = iw;
class xa {
    static set(e) {
        if (e && this.isSupported(e)) {
            this.locale = e;
            return
        }
        this.locale = this.getPreferredDeviceLocale()
    }
    static getPreferredDeviceLocale() {
        const e = navigator.languages;
        for (let n = 0; n < e.length; n++)
            if (this.isSupported(e[n])) return e[n];
        return this.supported[0]
    }
    static isSupported(e) {
        return Object.values(this.supported).includes(e)
    }
    static mergeMessages(...e) {
        return ow(e[0], ...e)
    }
}
at(xa, "locale"), at(xa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const gl = class {
    static get serverUrl() {
        var n;
        const e = (n = this.getQueryParam("server")) != null ? n : this.getQueryParam("s");
        return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
    }
    static get isCanvasSupported() {
        const e = document.createElement("canvas");
        return !!(e.getContext && e.getContext("2d"))
    }
    static toPrecision(e, n) {
        const i = 10 ** n;
        return Math.round((e + Number.EPSILON) * i) / i
    }
    static htmlUnescape(e) {
        return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }
    static htmlEscape(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    static sanitize(e) {
        const n = this.sanitizeInput(e).replace(/'/g, "\u2019");
        return this.htmlEscape(n).trim()
    }
    static sanitizeName(e) {
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
    }
    static sanitizeInput(e) {
        return e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
    }
    static sanitizeEmoji(e) {
        return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
    }
    static safeText(e) {
        const n = document.createElement("div");
        return n.textContent = e, n.innerHTML
    }
    static htmlTagsToBBCode(e, n) {
        if (!n.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
        return n.reduce((i, a) => (i.replaceAll(`<${a[0]}>`, `[${a[1]}]`), i.replaceAll(`</${a[0]}>`, `</${a[1]}>`), i), e)
    }
    static hexToRgb(e) {
        const n = new ArrayBuffer(4);
        new DataView(n).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const a = new Uint8Array(n);
        return `${a[1]},${a[2]},${a[3]}`
    }
    static adjustColor(e, n) {
        let i = !1,
            a = e;
        a[0] === "#" && (a = a.slice(1), i = !0);
        const f = parseInt(a, 16),
            y = Math.min(Math.max(0, (f >> 16) * n), 255),
            S = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let O = (Math.min(Math.max(0, (f & 255) * n), 255) | S << 8 | y << 16).toString(16);
        for (; O.length < a.length;) O = `0${O}`;
        return (i ? "#" : "") + O
    }
    static isInTolerance(e, n, i) {
        return !(Math.abs(e.x - n.x) < i || Math.abs(e.y - n.y) > i)
    }
    static getDistanceBetweenPoints(e, n) {
        const i = [e.x - n.x, e.y - n.y],
            a = Math.hypot(...i);
        return Math.round(a * 100) / 100
    }
    static getMidpoint(e, n) {
        return {
            x: (e.x + n.x) / 2,
            y: (e.y + n.y) / 2
        }
    }
    static getAngleBetweenPoints(e, n) {
        let a = Math.atan2(n.y - e.y, n.x - e.x) * (180 / Math.PI);
        return a < 0 && (a += 360), 360 - a
    }
    static getAngularDistance(e, n) {
        let i = (n - e) % 360;
        const a = i < 0 ? 1 : -1;
        return i = Math.abs(i), i > 180 ? a * (360 - i) : a * i
    }
    static getVelocity(e, n, i, a) {
        return this.getDistanceBetweenPoints(e, i) / (a - n)
    }
    static isInsideElement(e, n) {
        const i = n.getBoundingClientRect();
        return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
    }
};
let nn = gl;
at(nn, "queryParams", new URLSearchParams(window.location.search)), at(nn, "getQueryParam", e => gl.queryParams.get(e)), at(nn, "sleep", e => new Promise(n => {
    window.setTimeout(n, e)
}));
class Zt {
    static get namespace() {
        var e, n;
        return (n = (e = window.tv.storage) == null ? void 0 : e.namespace) != null ? n : this.defaultNamespace
    }
    static get isDisabled() {
        var e, n;
        return (n = (e = window.tv.storage) == null ? void 0 : e.isDisabled) != null ? n : !1
    }
    static get tag() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.tag
    }
    static get code() {
        var e;
        return (e = window.tv.storage) == null ? void 0 : e.code
    }
    static get isSupported() {
        if (this.isDisabled) return !1;
        try {
            return window.localStorage ? (window.localStorage.setItem("support-check", "1"), window.localStorage.removeItem("support-check"), !0) : !1
        } catch {
            return !1
        }
    }
    static setup(e, n) {
        var i, a;
        delete window.tv.storage, window.tv.storage = {
            namespace: (a = (i = nn.getQueryParam("namespace")) != null ? i : nn.getQueryParam("ns")) != null ? a : this.defaultNamespace,
            isDisabled: nn.queryParams.has("incognito") || nn.queryParams.has("nc")
        }, e && (window.tv.storage.tag = e), n && (window.tv.storage.code = n.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
    }
    static get(e, n) {
        return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, n)) : null
    }
    static set(e, n, i = "none") {
        if (!!this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, i), n)
    }
    static remove(e, n) {
        if (!!this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, n))
    }
    static setTag(e) {
        var y;
        const n = e.toLowerCase(),
            i = (y = this.get("tags")) != null ? y : "[]",
            a = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(S => {
            const I = S.split("-")[0];
            return a !== I
        }), f.push(n), this.set("tags", JSON.stringify(f))
    }
    static getScopedKey(e, n) {
        const i = `${this.namespace}:${e}`,
            a = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            f = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (n === "none") return i;
        if (n === "tag") {
            if (!a) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return a
        }
        if (n === "code") {
            if (!f) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return f
        }
        return f && window.localStorage.getItem(f) !== null ? f : a && window.localStorage.getItem(a) !== null ? a : i
    }
    static getScopedSetKey(e, n = "none") {
        if (n === "tag") {
            if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
            return `${this.namespace}:${e}:tag:${this.tag}`
        }
        if (n === "code") {
            if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return `${this.namespace}:${e}:code:${this.code}`
        }
        return `${this.namespace}:${e}`
    }
    static clearCodeScopedKeys(e) {
        !this.isSupported || Object.keys(window.localStorage).forEach(n => {
            const i = n.split(":code:");
            i.length <= 1 || i[1] !== e && window.localStorage.removeItem(n)
        })
    }
    static migrateNamespace(e, n) {
        !this.isSupported || Object.keys(window.localStorage).forEach(i => {
            if (!i.startsWith(`${e}-`)) return;
            const a = i.replace(`${e}-`, `${n}:`),
                f = window.localStorage.getItem(i);
            !f || (window.localStorage.setItem(a, f), window.localStorage.removeItem(i))
        })
    }
}
at(Zt, "defaultNamespace", "tv");
class Di {
    constructor() {
        at(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Di.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!Zt.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            y = Zt.get("galleries") || "[]";
        try {
            const S = JSON.parse(y) || [];
            if (S.some(I => I.url === f)) return;
            S.unshift({
                url: f,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), Zt.set("galleries", JSON.stringify(S.slice(0, 40)))
        } catch {
            console.warn("[Artifacts] Unable to add artifact to local storage")
        }
    }
    remove(e) {
        if (!Zt.isSupported) return;
        const n = Zt.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.splice(e, 1), Zt.set("galleries", JSON.stringify(i)), this.artifacts = this.list()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    setAsViewed(e) {
        Di.setAsViewed(e), this.artifacts = this.list()
    }
    static setAsViewed(e) {
        if (!Zt.isSupported) return;
        const n = Zt.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.length && (i[e].viewed = !0), Zt.set("galleries", JSON.stringify(i))
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    static isTestArtifact(e) {
        var n;
        return ((n = e == null ? void 0 : e.rootId) == null ? void 0 : n.indexOf("test")) !== -1
    }
    list() {
        if (!Zt.isSupported) return [];
        const e = new Intl.DateTimeFormat(xa.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = Zt.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const y = new Date(f.time),
                    S = e.format(y),
                    I = f.url.split("/"),
                    O = I[I.length - 1] === "" ? I[I.length - 2] : I[I.length - 1];
                let R = f.categoryId;
                return R || (f.url.indexOf("Quiplash2") !== -1 ? R = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? R = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? R = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (R = "TriviaDeathResults")), {
                    id: O,
                    gameName: R,
                    date: S,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Sa = {
    exports: {}
};
(function(t, e) {
    var n = typeof self < "u" ? self : yt,
        i = function() {
            function f() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return f.prototype = n, new f
        }();
    (function(f) {
        (function(y) {
            var S = {
                searchParams: "URLSearchParams" in f,
                iterable: "Symbol" in f && "iterator" in Symbol,
                blob: "FileReader" in f && "Blob" in f && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in f,
                arrayBuffer: "ArrayBuffer" in f
            };

            function I(G) {
                return G && DataView.prototype.isPrototypeOf(G)
            }
            if (S.arrayBuffer) var O = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                R = ArrayBuffer.isView || function(G) {
                    return G && O.indexOf(Object.prototype.toString.call(G)) > -1
                };

            function V(G) {
                if (typeof G != "string" && (G = String(G)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(G)) throw new TypeError("Invalid character in header field name");
                return G.toLowerCase()
            }

            function X(G) {
                return typeof G != "string" && (G = String(G)), G
            }

            function ie(G) {
                var se = {
                    next: function() {
                        var Te = G.shift();
                        return {
                            done: Te === void 0,
                            value: Te
                        }
                    }
                };
                return S.iterable && (se[Symbol.iterator] = function() {
                    return se
                }), se
            }

            function J(G) {
                this.map = {}, G instanceof J ? G.forEach(function(se, Te) {
                    this.append(Te, se)
                }, this) : Array.isArray(G) ? G.forEach(function(se) {
                    this.append(se[0], se[1])
                }, this) : G && Object.getOwnPropertyNames(G).forEach(function(se) {
                    this.append(se, G[se])
                }, this)
            }
            J.prototype.append = function(G, se) {
                G = V(G), se = X(se);
                var Te = this.map[G];
                this.map[G] = Te ? Te + ", " + se : se
            }, J.prototype.delete = function(G) {
                delete this.map[V(G)]
            }, J.prototype.get = function(G) {
                return G = V(G), this.has(G) ? this.map[G] : null
            }, J.prototype.has = function(G) {
                return this.map.hasOwnProperty(V(G))
            }, J.prototype.set = function(G, se) {
                this.map[V(G)] = X(se)
            }, J.prototype.forEach = function(G, se) {
                for (var Te in this.map) this.map.hasOwnProperty(Te) && G.call(se, this.map[Te], Te, this)
            }, J.prototype.keys = function() {
                var G = [];
                return this.forEach(function(se, Te) {
                    G.push(Te)
                }), ie(G)
            }, J.prototype.values = function() {
                var G = [];
                return this.forEach(function(se) {
                    G.push(se)
                }), ie(G)
            }, J.prototype.entries = function() {
                var G = [];
                return this.forEach(function(se, Te) {
                    G.push([Te, se])
                }), ie(G)
            }, S.iterable && (J.prototype[Symbol.iterator] = J.prototype.entries);

            function oe(G) {
                if (G.bodyUsed) return Promise.reject(new TypeError("Already read"));
                G.bodyUsed = !0
            }

            function m(G) {
                return new Promise(function(se, Te) {
                    G.onload = function() {
                        se(G.result)
                    }, G.onerror = function() {
                        Te(G.error)
                    }
                })
            }

            function L(G) {
                var se = new FileReader,
                    Te = m(se);
                return se.readAsArrayBuffer(G), Te
            }

            function z(G) {
                var se = new FileReader,
                    Te = m(se);
                return se.readAsText(G), Te
            }

            function ae(G) {
                for (var se = new Uint8Array(G), Te = new Array(se.length), ve = 0; ve < se.length; ve++) Te[ve] = String.fromCharCode(se[ve]);
                return Te.join("")
            }

            function re(G) {
                if (G.slice) return G.slice(0);
                var se = new Uint8Array(G.byteLength);
                return se.set(new Uint8Array(G)), se.buffer
            }

            function ye() {
                return this.bodyUsed = !1, this._initBody = function(G) {
                    this._bodyInit = G, G ? typeof G == "string" ? this._bodyText = G : S.blob && Blob.prototype.isPrototypeOf(G) ? this._bodyBlob = G : S.formData && FormData.prototype.isPrototypeOf(G) ? this._bodyFormData = G : S.searchParams && URLSearchParams.prototype.isPrototypeOf(G) ? this._bodyText = G.toString() : S.arrayBuffer && S.blob && I(G) ? (this._bodyArrayBuffer = re(G.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : S.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(G) || R(G)) ? this._bodyArrayBuffer = re(G) : this._bodyText = G = Object.prototype.toString.call(G) : this._bodyText = "", this.headers.get("content-type") || (typeof G == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : S.searchParams && URLSearchParams.prototype.isPrototypeOf(G) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, S.blob && (this.blob = function() {
                    var G = oe(this);
                    if (G) return G;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? oe(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(L)
                }), this.text = function() {
                    var G = oe(this);
                    if (G) return G;
                    if (this._bodyBlob) return z(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, S.formData && (this.formData = function() {
                    return this.text().then(Le)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Ee(G) {
                var se = G.toUpperCase();
                return c.indexOf(se) > -1 ? se : G
            }

            function _e(G, se) {
                se = se || {};
                var Te = se.body;
                if (G instanceof _e) {
                    if (G.bodyUsed) throw new TypeError("Already read");
                    this.url = G.url, this.credentials = G.credentials, se.headers || (this.headers = new J(G.headers)), this.method = G.method, this.mode = G.mode, this.signal = G.signal, !Te && G._bodyInit != null && (Te = G._bodyInit, G.bodyUsed = !0)
                } else this.url = String(G);
                if (this.credentials = se.credentials || this.credentials || "same-origin", (se.headers || !this.headers) && (this.headers = new J(se.headers)), this.method = Ee(se.method || this.method || "GET"), this.mode = se.mode || this.mode || null, this.signal = se.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Te) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Te)
            }
            _e.prototype.clone = function() {
                return new _e(this, {
                    body: this._bodyInit
                })
            };

            function Le(G) {
                var se = new FormData;
                return G.trim().split("&").forEach(function(Te) {
                    if (Te) {
                        var ve = Te.split("="),
                            we = ve.shift().replace(/\+/g, " "),
                            ue = ve.join("=").replace(/\+/g, " ");
                        se.append(decodeURIComponent(we), decodeURIComponent(ue))
                    }
                }), se
            }

            function lt(G) {
                var se = new J,
                    Te = G.replace(/\r?\n[\t ]+/g, " ");
                return Te.split(/\r?\n/).forEach(function(ve) {
                    var we = ve.split(":"),
                        ue = we.shift().trim();
                    if (ue) {
                        var xe = we.join(":").trim();
                        se.append(ue, xe)
                    }
                }), se
            }
            ye.call(_e.prototype);

            function Ne(G, se) {
                se || (se = {}), this.type = "default", this.status = se.status === void 0 ? 200 : se.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in se ? se.statusText : "OK", this.headers = new J(se.headers), this.url = se.url || "", this._initBody(G)
            }
            ye.call(Ne.prototype), Ne.prototype.clone = function() {
                return new Ne(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new J(this.headers),
                    url: this.url
                })
            }, Ne.error = function() {
                var G = new Ne(null, {
                    status: 0,
                    statusText: ""
                });
                return G.type = "error", G
            };
            var Q = [301, 302, 303, 307, 308];
            Ne.redirect = function(G, se) {
                if (Q.indexOf(se) === -1) throw new RangeError("Invalid status code");
                return new Ne(null, {
                    status: se,
                    headers: {
                        location: G
                    }
                })
            }, y.DOMException = f.DOMException;
            try {
                new y.DOMException
            } catch {
                y.DOMException = function(se, Te) {
                    this.message = se, this.name = Te;
                    var ve = Error(se);
                    this.stack = ve.stack
                }, y.DOMException.prototype = Object.create(Error.prototype), y.DOMException.prototype.constructor = y.DOMException
            }

            function je(G, se) {
                return new Promise(function(Te, ve) {
                    var we = new _e(G, se);
                    if (we.signal && we.signal.aborted) return ve(new y.DOMException("Aborted", "AbortError"));
                    var ue = new XMLHttpRequest;

                    function xe() {
                        ue.abort()
                    }
                    ue.onload = function() {
                        var Ie = {
                            status: ue.status,
                            statusText: ue.statusText,
                            headers: lt(ue.getAllResponseHeaders() || "")
                        };
                        Ie.url = "responseURL" in ue ? ue.responseURL : Ie.headers.get("X-Request-URL");
                        var Ve = "response" in ue ? ue.response : ue.responseText;
                        Te(new Ne(Ve, Ie))
                    }, ue.onerror = function() {
                        ve(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        ve(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        ve(new y.DOMException("Aborted", "AbortError"))
                    }, ue.open(we.method, we.url, !0), we.credentials === "include" ? ue.withCredentials = !0 : we.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && S.blob && (ue.responseType = "blob"), we.headers.forEach(function(Ie, Ve) {
                        ue.setRequestHeader(Ve, Ie)
                    }), we.signal && (we.signal.addEventListener("abort", xe), ue.onreadystatechange = function() {
                        ue.readyState === 4 && we.signal.removeEventListener("abort", xe)
                    }), ue.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                })
            }
            return je.polyfill = !0, f.fetch || (f.fetch = je, f.Headers = J, f.Request = _e, f.Response = Ne), y.Headers = J, y.Request = _e, y.Response = Ne, y.fetch = je, Object.defineProperty(y, "__esModule", {
                value: !0
            }), y
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Sa, Sa.exports);
var rw = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            n = Symbol("test"),
            i = Object(n);
        if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]") return !1;
        var a = 42;
        e[n] = a;
        for (n in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var f = Object.getOwnPropertySymbols(e);
        if (f.length !== 1 || f[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var y = Object.getOwnPropertyDescriptor(e, n);
            if (y.value !== a || y.enumerable !== !0) return !1
        }
        return !0
    },
    Ll = typeof Symbol < "u" && Symbol,
    sw = rw,
    aw = function() {
        return typeof Ll != "function" || typeof Symbol != "function" || typeof Ll("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : sw()
    },
    lw = "Function.prototype.bind called on incompatible ",
    ta = Array.prototype.slice,
    hw = Object.prototype.toString,
    uw = "[object Function]",
    dw = function(e) {
        var n = this;
        if (typeof n != "function" || hw.call(n) !== uw) throw new TypeError(lw + n);
        for (var i = ta.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var R = n.apply(this, i.concat(ta.call(arguments)));
                    return Object(R) === R ? R : this
                } else return n.apply(e, i.concat(ta.call(arguments)))
            }, y = Math.max(0, n.length - i.length), S = [], I = 0; I < y; I++) S.push("$" + I);
        if (a = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var O = function() {};
            O.prototype = n.prototype, a.prototype = new O, O.prototype = null
        }
        return a
    },
    cw = dw,
    Fa = Function.prototype.bind || cw,
    fw = Fa,
    pw = fw.call(Function.call, Object.prototype.hasOwnProperty),
    mt, yo = SyntaxError,
    jh = Function,
    co = TypeError,
    na = function(t) {
        try {
            return jh('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Li = Object.getOwnPropertyDescriptor;
if (Li) try {
    Li({}, "")
} catch {
    Li = null
}
var ia = function() {
        throw new co
    },
    gw = Li ? function() {
        try {
            return arguments.callee, ia
        } catch {
            try {
                return Li(arguments, "callee").get
            } catch {
                return ia
            }
        }
    }() : ia,
    oo = aw(),
    hi = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    ao = {},
    mw = typeof Uint8Array > "u" ? mt : hi(Uint8Array),
    fo = {
        "%AggregateError%": typeof AggregateError > "u" ? mt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? mt : ArrayBuffer,
        "%ArrayIteratorPrototype%": oo ? hi([][Symbol.iterator]()) : mt,
        "%AsyncFromSyncIteratorPrototype%": mt,
        "%AsyncFunction%": ao,
        "%AsyncGenerator%": ao,
        "%AsyncGeneratorFunction%": ao,
        "%AsyncIteratorPrototype%": ao,
        "%Atomics%": typeof Atomics > "u" ? mt : Atomics,
        "%BigInt%": typeof BigInt > "u" ? mt : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? mt : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? mt : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? mt : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? mt : FinalizationRegistry,
        "%Function%": jh,
        "%GeneratorFunction%": ao,
        "%Int8Array%": typeof Int8Array > "u" ? mt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? mt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? mt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": oo ? hi(hi([][Symbol.iterator]())) : mt,
        "%JSON%": typeof JSON == "object" ? JSON : mt,
        "%Map%": typeof Map > "u" ? mt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !oo ? mt : hi(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? mt : Promise,
        "%Proxy%": typeof Proxy > "u" ? mt : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? mt : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? mt : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !oo ? mt : hi(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? mt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": oo ? hi("" [Symbol.iterator]()) : mt,
        "%Symbol%": oo ? Symbol : mt,
        "%SyntaxError%": yo,
        "%ThrowTypeError%": gw,
        "%TypedArray%": mw,
        "%TypeError%": co,
        "%Uint8Array%": typeof Uint8Array > "u" ? mt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? mt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? mt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? mt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? mt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? mt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? mt : WeakSet
    },
    yw = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = na("async function () {}");
        else if (e === "%GeneratorFunction%") n = na("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = na("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = hi(a.prototype))
        }
        return fo[e] = n, n
    },
    Bl = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    fr = Fa,
    Zr = pw,
    ww = fr.call(Function.call, Array.prototype.concat),
    vw = fr.call(Function.apply, Array.prototype.splice),
    Dl = fr.call(Function.call, String.prototype.replace),
    es = fr.call(Function.call, String.prototype.slice),
    bw = fr.call(Function.call, RegExp.prototype.exec),
    kw = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Cw = /\\(\\)?/g,
    Ew = function(e) {
        var n = es(e, 0, 1),
            i = es(e, -1);
        if (n === "%" && i !== "%") throw new yo("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new yo("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Dl(e, kw, function(f, y, S, I) {
            a[a.length] = S ? Dl(I, Cw, "$1") : y || f
        }), a
    },
    xw = function(e, n) {
        var i = e,
            a;
        if (Zr(Bl, i) && (a = Bl[i], i = "%" + a[0] + "%"), Zr(fo, i)) {
            var f = fo[i];
            if (f === ao && (f = yw(i)), typeof f > "u" && !n) throw new co("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new yo("intrinsic " + e + " does not exist!")
    },
    Ga = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new co("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new co('"allowMissing" argument must be a boolean');
        if (bw(/^%?[^%]*%?$/g, e) === null) throw new yo("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = Ew(e),
            a = i.length > 0 ? i[0] : "",
            f = xw("%" + a + "%", n),
            y = f.name,
            S = f.value,
            I = !1,
            O = f.alias;
        O && (a = O[0], vw(i, ww([0, 1], O)));
        for (var R = 1, V = !0; R < i.length; R += 1) {
            var X = i[R],
                ie = es(X, 0, 1),
                J = es(X, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || J === '"' || J === "'" || J === "`") && ie !== J) throw new yo("property names with quotes must have matching quotes");
            if ((X === "constructor" || !V) && (I = !0), a += "." + X, y = "%" + a + "%", Zr(fo, y)) S = fo[y];
            else if (S != null) {
                if (!(X in S)) {
                    if (!n) throw new co("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Li && R + 1 >= i.length) {
                    var oe = Li(S, X);
                    V = !!oe, V && "get" in oe && !("originalValue" in oe.get) ? S = oe.get : S = S[X]
                } else V = Zr(S, X), S = S[X];
                V && !I && (fo[y] = S)
            }
        }
        return S
    },
    Hh = {
        exports: {}
    };
(function(t) {
    var e = Fa,
        n = Ga,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(a, i),
        y = n("%Object.getOwnPropertyDescriptor%", !0),
        S = n("%Object.defineProperty%", !0),
        I = n("%Math.max%");
    if (S) try {
        S({}, "a", {
            value: 1
        })
    } catch {
        S = null
    }
    t.exports = function(V) {
        var X = f(e, a, arguments);
        if (y && S) {
            var ie = y(X, "length");
            ie.configurable && S(X, "length", {
                value: 1 + I(0, V.length - (arguments.length - 1))
            })
        }
        return X
    };
    var O = function() {
        return f(e, i, arguments)
    };
    S ? S(t.exports, "apply", {
        value: O
    }) : t.exports.apply = O
})(Hh);
var Fh = Ga,
    Gh = Hh.exports,
    Sw = Gh(Fh("String.prototype.indexOf")),
    Iw = function(e, n) {
        var i = Fh(e, !!n);
        return typeof i == "function" && Sw(e, ".prototype.") > -1 ? Gh(i) : i
    };
const Tw = {},
    _w = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Tw
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Aw = wd(_w);
var Wa = typeof Map == "function" && Map.prototype,
    oa = Object.getOwnPropertyDescriptor && Wa ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    ts = Wa && oa && typeof oa.get == "function" ? oa.get : null,
    qw = Wa && Map.prototype.forEach,
    za = typeof Set == "function" && Set.prototype,
    ra = Object.getOwnPropertyDescriptor && za ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    ns = za && ra && typeof ra.get == "function" ? ra.get : null,
    Ow = za && Set.prototype.forEach,
    Rw = typeof WeakMap == "function" && WeakMap.prototype,
    ir = Rw ? WeakMap.prototype.has : null,
    Pw = typeof WeakSet == "function" && WeakSet.prototype,
    or = Pw ? WeakSet.prototype.has : null,
    Mw = typeof WeakRef == "function" && WeakRef.prototype,
    Nl = Mw ? WeakRef.prototype.deref : null,
    Lw = Boolean.prototype.valueOf,
    Bw = Object.prototype.toString,
    Dw = Function.prototype.toString,
    Nw = String.prototype.match,
    Ua = String.prototype.slice,
    fi = String.prototype.replace,
    Vw = String.prototype.toUpperCase,
    Vl = String.prototype.toLowerCase,
    Wh = RegExp.prototype.test,
    $l = Array.prototype.concat,
    $n = Array.prototype.join,
    $w = Array.prototype.slice,
    jl = Math.floor,
    Ia = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    sa = Object.getOwnPropertySymbols,
    Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    wo = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    hn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === wo ? "object" : "symbol") ? Symbol.toStringTag : null,
    zh = Object.prototype.propertyIsEnumerable,
    Hl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Fl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Wh.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -jl(-t) : jl(t);
        if (i !== t) {
            var a = String(i),
                f = Ua.call(e, a.length + 1);
            return fi.call(a, n, "$&_") + "." + fi.call(fi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return fi.call(e, n, "$&_")
}
var _a = Aw,
    Gl = _a.custom,
    Wl = Yh(Gl) ? Gl : null,
    jw = function t(e, n, i, a) {
        var f = n || {};
        if (ui(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (ui(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var y = ui(f, "customInspect") ? f.customInspect : !0;
        if (typeof y != "boolean" && y !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (ui(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (ui(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var S = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Qh(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var I = String(e);
            return S ? Fl(e, I) : I
        }
        if (typeof e == "bigint") {
            var O = String(e) + "n";
            return S ? Fl(e, O) : O
        }
        var R = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= R && R > 0 && typeof e == "object") return Aa(e) ? "[Array]" : "[Object]";
        var V = rv(f, i);
        if (typeof a > "u") a = [];
        else if (Jh(a, e) >= 0) return "[Circular]";

        function X(je, G, se) {
            if (G && (a = $w.call(a), a.push(G)), se) {
                var Te = {
                    depth: f.depth
                };
                return ui(f, "quoteStyle") && (Te.quoteStyle = f.quoteStyle), t(je, Te, i + 1, a)
            }
            return t(je, f, i + 1, a)
        }
        if (typeof e == "function" && !zl(e)) {
            var ie = Qw(e),
                J = Br(e, X);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (J.length > 0 ? " { " + $n.call(J, ", ") + " }" : "")
        }
        if (Yh(e)) {
            var oe = wo ? fi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ta.call(e);
            return typeof e == "object" && !wo ? Xo(oe) : oe
        }
        if (nv(e)) {
            for (var m = "<" + Vl.call(String(e.nodeName)), L = e.attributes || [], z = 0; z < L.length; z++) m += " " + L[z].name + "=" + Uh(Hw(L[z].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Vl.call(String(e.nodeName)) + ">", m
        }
        if (Aa(e)) {
            if (e.length === 0) return "[]";
            var ae = Br(e, X);
            return V && !ov(ae) ? "[" + qa(ae, V) + "]" : "[ " + $n.call(ae, ", ") + " ]"
        }
        if (Gw(e)) {
            var re = Br(e, X);
            return !("cause" in Error.prototype) && "cause" in e && !zh.call(e, "cause") ? "{ [" + String(e) + "] " + $n.call($l.call("[cause]: " + X(e.cause), re), ", ") + " }" : re.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + $n.call(re, ", ") + " }"
        }
        if (typeof e == "object" && y) {
            if (Wl && typeof e[Wl] == "function" && _a) return _a(e, {
                depth: R - i
            });
            if (y !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Xw(e)) {
            var ye = [];
            return qw.call(e, function(je, G) {
                ye.push(X(G, e, !0) + " => " + X(je, e))
            }), Ul("Map", ts.call(e), ye, V)
        }
        if (ev(e)) {
            var c = [];
            return Ow.call(e, function(je) {
                c.push(X(je, e))
            }), Ul("Set", ns.call(e), c, V)
        }
        if (Kw(e)) return aa("WeakMap");
        if (tv(e)) return aa("WeakSet");
        if (Zw(e)) return aa("WeakRef");
        if (zw(e)) return Xo(X(Number(e)));
        if (Yw(e)) return Xo(X(Ia.call(e)));
        if (Uw(e)) return Xo(Lw.call(e));
        if (Ww(e)) return Xo(X(String(e)));
        if (!Fw(e) && !zl(e)) {
            var Ee = Br(e, X),
                _e = Hl ? Hl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Le = e instanceof Object ? "" : "null prototype",
                lt = !_e && hn && Object(e) === e && hn in e ? Ua.call(gi(e), 8, -1) : Le ? "Object" : "",
                Ne = _e || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Q = Ne + (lt || Le ? "[" + $n.call($l.call([], lt || [], Le || []), ": ") + "] " : "");
            return Ee.length === 0 ? Q + "{}" : V ? Q + "{" + qa(Ee, V) + "}" : Q + "{ " + $n.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function Uh(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function Hw(t) {
    return fi.call(String(t), /"/g, "&quot;")
}

function Aa(t) {
    return gi(t) === "[object Array]" && (!hn || !(typeof t == "object" && hn in t))
}

function Fw(t) {
    return gi(t) === "[object Date]" && (!hn || !(typeof t == "object" && hn in t))
}

function zl(t) {
    return gi(t) === "[object RegExp]" && (!hn || !(typeof t == "object" && hn in t))
}

function Gw(t) {
    return gi(t) === "[object Error]" && (!hn || !(typeof t == "object" && hn in t))
}

function Ww(t) {
    return gi(t) === "[object String]" && (!hn || !(typeof t == "object" && hn in t))
}

function zw(t) {
    return gi(t) === "[object Number]" && (!hn || !(typeof t == "object" && hn in t))
}

function Uw(t) {
    return gi(t) === "[object Boolean]" && (!hn || !(typeof t == "object" && hn in t))
}

function Yh(t) {
    if (wo) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Ta) return !1;
    try {
        return Ta.call(t), !0
    } catch {}
    return !1
}

function Yw(t) {
    if (!t || typeof t != "object" || !Ia) return !1;
    try {
        return Ia.call(t), !0
    } catch {}
    return !1
}
var Jw = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function ui(t, e) {
    return Jw.call(t, e)
}

function gi(t) {
    return Bw.call(t)
}

function Qw(t) {
    if (t.name) return t.name;
    var e = Nw.call(Dw.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Jh(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function Xw(t) {
    if (!ts || !t || typeof t != "object") return !1;
    try {
        ts.call(t);
        try {
            ns.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function Kw(t) {
    if (!ir || !t || typeof t != "object") return !1;
    try {
        ir.call(t, ir);
        try {
            or.call(t, or)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function Zw(t) {
    if (!Nl || !t || typeof t != "object") return !1;
    try {
        return Nl.call(t), !0
    } catch {}
    return !1
}

function ev(t) {
    if (!ns || !t || typeof t != "object") return !1;
    try {
        ns.call(t);
        try {
            ts.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function tv(t) {
    if (!or || !t || typeof t != "object") return !1;
    try {
        or.call(t, or);
        try {
            ir.call(t, ir)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function nv(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Qh(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Qh(Ua.call(t, 0, e.maxStringLength), e) + i
    }
    var a = fi.call(fi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, iv);
    return Uh(a, "single", e)
}

function iv(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Vw.call(e.toString(16))
}

function Xo(t) {
    return "Object(" + t + ")"
}

function aa(t) {
    return t + " { ? }"
}

function Ul(t, e, n, i) {
    var a = i ? qa(n, i) : $n.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function ov(t) {
    for (var e = 0; e < t.length; e++)
        if (Jh(t[e], `
`) >= 0) return !1;
    return !0
}

function rv(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = $n.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: $n.call(Array(e + 1), n)
    }
}

function qa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + $n.call(t, "," + n) + `
` + e.prev
}

function Br(t, e) {
    var n = Aa(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = ui(t, a) ? e(t[a], t) : ""
    }
    var f = typeof sa == "function" ? sa(t) : [],
        y;
    if (wo) {
        y = {};
        for (var S = 0; S < f.length; S++) y["$" + f[S]] = f[S]
    }
    for (var I in t) !ui(t, I) || n && String(Number(I)) === I && I < t.length || wo && y["$" + I] instanceof Symbol || (Wh.call(/[^\w$]/, I) ? i.push(e(I, t) + ": " + e(t[I], t)) : i.push(I + ": " + e(t[I], t)));
    if (typeof sa == "function")
        for (var O = 0; O < f.length; O++) zh.call(t, f[O]) && i.push("[" + e(f[O]) + "]: " + e(t[f[O]], t));
    return i
}
var Ya = Ga,
    Io = Iw,
    sv = jw,
    av = Ya("%TypeError%"),
    Dr = Ya("%WeakMap%", !0),
    Nr = Ya("%Map%", !0),
    lv = Io("WeakMap.prototype.get", !0),
    hv = Io("WeakMap.prototype.set", !0),
    uv = Io("WeakMap.prototype.has", !0),
    dv = Io("Map.prototype.get", !0),
    cv = Io("Map.prototype.set", !0),
    fv = Io("Map.prototype.has", !0),
    Ja = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    pv = function(t, e) {
        var n = Ja(t, e);
        return n && n.value
    },
    gv = function(t, e, n) {
        var i = Ja(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    mv = function(t, e) {
        return !!Ja(t, e)
    },
    yv = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new av("Side channel does not contain " + sv(f))
            },
            get: function(f) {
                if (Dr && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return lv(e, f)
                } else if (Nr) {
                    if (n) return dv(n, f)
                } else if (i) return pv(i, f)
            },
            has: function(f) {
                if (Dr && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return uv(e, f)
                } else if (Nr) {
                    if (n) return fv(n, f)
                } else if (i) return mv(i, f);
                return !1
            },
            set: function(f, y) {
                Dr && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Dr), hv(e, f, y)) : Nr ? (n || (n = new Nr), cv(n, f, y)) : (i || (i = {
                    key: {},
                    next: null
                }), gv(i, f, y))
            }
        };
        return a
    },
    wv = String.prototype.replace,
    vv = /%20/g,
    la = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Qa = {
        default: la.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return wv.call(t, vv, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: la.RFC1738,
        RFC3986: la.RFC3986
    },
    bv = Qa,
    ha = Object.prototype.hasOwnProperty,
    Pi = Array.isArray,
    Nn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    kv = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Pi(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    Xh = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    Cv = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Pi(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !ha.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Pi(e) && !Pi(n) && (a = Xh(e, i)), Pi(e) && Pi(n) ? (n.forEach(function(f, y) {
            if (ha.call(e, y)) {
                var S = e[y];
                S && typeof S == "object" && f && typeof f == "object" ? e[y] = t(S, f, i) : e.push(f)
            } else e[y] = f
        }), e) : Object.keys(n).reduce(function(f, y) {
            var S = n[y];
            return ha.call(f, y) ? f[y] = t(f[y], S, i) : f[y] = S, f
        }, a)
    },
    Ev = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    xv = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Sv = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var y = e;
        if (typeof e == "symbol" ? y = Symbol.prototype.toString.call(e) : typeof e != "string" && (y = String(e)), i === "iso-8859-1") return escape(y).replace(/%u[0-9a-f]{4}/gi, function(R) {
            return "%26%23" + parseInt(R.slice(2), 16) + "%3B"
        });
        for (var S = "", I = 0; I < y.length; ++I) {
            var O = y.charCodeAt(I);
            if (O === 45 || O === 46 || O === 95 || O === 126 || O >= 48 && O <= 57 || O >= 65 && O <= 90 || O >= 97 && O <= 122 || f === bv.RFC1738 && (O === 40 || O === 41)) {
                S += y.charAt(I);
                continue
            }
            if (O < 128) {
                S = S + Nn[O];
                continue
            }
            if (O < 2048) {
                S = S + (Nn[192 | O >> 6] + Nn[128 | O & 63]);
                continue
            }
            if (O < 55296 || O >= 57344) {
                S = S + (Nn[224 | O >> 12] + Nn[128 | O >> 6 & 63] + Nn[128 | O & 63]);
                continue
            }
            I += 1, O = 65536 + ((O & 1023) << 10 | y.charCodeAt(I) & 1023), S += Nn[240 | O >> 18] + Nn[128 | O >> 12 & 63] + Nn[128 | O >> 6 & 63] + Nn[128 | O & 63]
        }
        return S
    },
    Iv = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], y = f.obj[f.prop], S = Object.keys(y), I = 0; I < S.length; ++I) {
                var O = S[I],
                    R = y[O];
                typeof R == "object" && R !== null && i.indexOf(R) === -1 && (n.push({
                    obj: y,
                    prop: O
                }), i.push(R))
            }
        return kv(n), e
    },
    Tv = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    _v = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Av = function(e, n) {
        return [].concat(e, n)
    },
    qv = function(e, n) {
        if (Pi(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    Kh = {
        arrayToObject: Xh,
        assign: Ev,
        combine: Av,
        compact: Iv,
        decode: xv,
        encode: Sv,
        isBuffer: _v,
        isRegExp: Tv,
        maybeMap: qv,
        merge: Cv
    },
    Zh = yv,
    Oa = Kh,
    rr = Qa,
    Ov = Object.prototype.hasOwnProperty,
    Yl = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, n) {
            return e + "[" + n + "]"
        },
        repeat: function(e) {
            return e
        }
    },
    ei = Array.isArray,
    Rv = String.prototype.split,
    Pv = Array.prototype.push,
    eu = function(t, e) {
        Pv.apply(t, ei(e) ? e : [e])
    },
    Mv = Date.prototype.toISOString,
    Jl = rr.default,
    tn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Oa.encode,
        encodeValuesOnly: !1,
        format: Jl,
        formatter: rr.formatters[Jl],
        indices: !1,
        serializeDate: function(e) {
            return Mv.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Lv = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    ua = {},
    Bv = function t(e, n, i, a, f, y, S, I, O, R, V, X, ie, J, oe, m) {
        for (var L = e, z = m, ae = 0, re = !1;
            (z = z.get(ua)) !== void 0 && !re;) {
            var ye = z.get(e);
            if (ae += 1, typeof ye < "u") {
                if (ye === ae) throw new RangeError("Cyclic object value");
                re = !0
            }
            typeof z.get(ua) > "u" && (ae = 0)
        }
        if (typeof I == "function" ? L = I(n, L) : L instanceof Date ? L = V(L) : i === "comma" && ei(L) && (L = Oa.maybeMap(L, function(ue) {
                return ue instanceof Date ? V(ue) : ue
            })), L === null) {
            if (f) return S && !J ? S(n, tn.encoder, oe, "key", X) : n;
            L = ""
        }
        if (Lv(L) || Oa.isBuffer(L)) {
            if (S) {
                var c = J ? n : S(n, tn.encoder, oe, "key", X);
                if (i === "comma" && J) {
                    for (var Ee = Rv.call(String(L), ","), _e = "", Le = 0; Le < Ee.length; ++Le) _e += (Le === 0 ? "" : ",") + ie(S(Ee[Le], tn.encoder, oe, "value", X));
                    return [ie(c) + (a && ei(L) && Ee.length === 1 ? "[]" : "") + "=" + _e]
                }
                return [ie(c) + "=" + ie(S(L, tn.encoder, oe, "value", X))]
            }
            return [ie(n) + "=" + ie(String(L))]
        }
        var lt = [];
        if (typeof L > "u") return lt;
        var Ne;
        if (i === "comma" && ei(L)) Ne = [{
            value: L.length > 0 ? L.join(",") || null : void 0
        }];
        else if (ei(I)) Ne = I;
        else {
            var Q = Object.keys(L);
            Ne = O ? Q.sort(O) : Q
        }
        for (var je = a && ei(L) && L.length === 1 ? n + "[]" : n, G = 0; G < Ne.length; ++G) {
            var se = Ne[G],
                Te = typeof se == "object" && typeof se.value < "u" ? se.value : L[se];
            if (!(y && Te === null)) {
                var ve = ei(L) ? typeof i == "function" ? i(je, se) : je : je + (R ? "." + se : "[" + se + "]");
                m.set(e, ae);
                var we = Zh();
                we.set(ua, m), eu(lt, t(Te, ve, i, a, f, y, S, I, O, R, V, X, ie, J, oe, we))
            }
        }
        return lt
    },
    Dv = function(e) {
        if (!e) return tn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || tn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = rr.default;
        if (typeof e.format < "u") {
            if (!Ov.call(rr.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = rr.formatters[i],
            f = tn.filter;
        return (typeof e.filter == "function" || ei(e.filter)) && (f = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : tn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? tn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : tn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? tn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : tn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : tn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : tn.encodeValuesOnly,
            filter: f,
            format: i,
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : tn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : tn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : tn.strictNullHandling
        }
    },
    Nv = function(t, e) {
        var n = t,
            i = Dv(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, a = f);
        var y = [];
        if (typeof n != "object" || n === null) return "";
        var S;
        e && e.arrayFormat in Yl ? S = e.arrayFormat : e && "indices" in e ? S = e.indices ? "indices" : "repeat" : S = "indices";
        var I = Yl[S];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var O = I === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var R = Zh(), V = 0; V < a.length; ++V) {
            var X = a[V];
            i.skipNulls && n[X] === null || eu(y, Bv(n[X], X, I, O, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, R))
        }
        var ie = y.join(i.delimiter),
            J = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? J += "utf8=%26%2310003%3B&" : J += "utf8=%E2%9C%93&"), ie.length > 0 ? J + ie : ""
    },
    vo = Kh,
    Ra = Object.prototype.hasOwnProperty,
    Vv = Array.isArray,
    Kt = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: vo.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    $v = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    tu = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    jv = "utf8=%26%2310003%3B",
    Hv = "utf8=%E2%9C%93",
    Fv = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            y = a.split(n.delimiter, f),
            S = -1,
            I, O = n.charset;
        if (n.charsetSentinel)
            for (I = 0; I < y.length; ++I) y[I].indexOf("utf8=") === 0 && (y[I] === Hv ? O = "utf-8" : y[I] === jv && (O = "iso-8859-1"), S = I, I = y.length);
        for (I = 0; I < y.length; ++I)
            if (I !== S) {
                var R = y[I],
                    V = R.indexOf("]="),
                    X = V === -1 ? R.indexOf("=") : V + 1,
                    ie, J;
                X === -1 ? (ie = n.decoder(R, Kt.decoder, O, "key"), J = n.strictNullHandling ? null : "") : (ie = n.decoder(R.slice(0, X), Kt.decoder, O, "key"), J = vo.maybeMap(tu(R.slice(X + 1), n), function(oe) {
                    return n.decoder(oe, Kt.decoder, O, "value")
                })), J && n.interpretNumericEntities && O === "iso-8859-1" && (J = $v(J)), R.indexOf("[]=") > -1 && (J = Vv(J) ? [J] : J), Ra.call(i, ie) ? i[ie] = vo.combine(i[ie], J) : i[ie] = J
            } return i
    },
    Gv = function(t, e, n, i) {
        for (var a = i ? e : tu(e, n), f = t.length - 1; f >= 0; --f) {
            var y, S = t[f];
            if (S === "[]" && n.parseArrays) y = [].concat(a);
            else {
                y = n.plainObjects ? Object.create(null) : {};
                var I = S.charAt(0) === "[" && S.charAt(S.length - 1) === "]" ? S.slice(1, -1) : S,
                    O = parseInt(I, 10);
                !n.parseArrays && I === "" ? y = {
                    0: a
                } : !isNaN(O) && S !== I && String(O) === I && O >= 0 && n.parseArrays && O <= n.arrayLimit ? (y = [], y[O] = a) : I !== "__proto__" && (y[I] = a)
            }
            a = y
        }
        return a
    },
    Wv = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                y = /(\[[^[\]]*])/,
                S = /(\[[^[\]]*])/g,
                I = i.depth > 0 && y.exec(f),
                O = I ? f.slice(0, I.index) : f,
                R = [];
            if (O) {
                if (!i.plainObjects && Ra.call(Object.prototype, O) && !i.allowPrototypes) return;
                R.push(O)
            }
            for (var V = 0; i.depth > 0 && (I = S.exec(f)) !== null && V < i.depth;) {
                if (V += 1, !i.plainObjects && Ra.call(Object.prototype, I[1].slice(1, -1)) && !i.allowPrototypes) return;
                R.push(I[1])
            }
            return I && R.push("[" + f.slice(I.index) + "]"), Gv(R, n, i, a)
        }
    },
    zv = function(e) {
        if (!e) return Kt;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = typeof e.charset > "u" ? Kt.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? Kt.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Kt.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Kt.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Kt.arrayLimit,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Kt.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : Kt.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : Kt.decoder,
            delimiter: typeof e.delimiter == "string" || vo.isRegExp(e.delimiter) ? e.delimiter : Kt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Kt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Kt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Kt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Kt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Kt.strictNullHandling
        }
    },
    Uv = function(t, e) {
        var n = zv(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? Fv(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), y = 0; y < f.length; ++y) {
            var S = f[y],
                I = Wv(S, i[S], n, typeof t == "string");
            a = vo.merge(a, I, n)
        }
        return n.allowSparse === !0 ? a : vo.compact(a)
    },
    Yv = Nv,
    Jv = Uv,
    Qv = Qa,
    nu = {
        formats: Qv,
        parse: Jv,
        stringify: Yv
    };
class Xv {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Kv {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Zv {
    constructor(e) {
        this.connections = e.connections
    }
}
class eb {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class tb {}
var ms = {
    CreateRoomReply: Xv,
    GetRoomReply: Kv,
    GetAudienceReply: Zv,
    RoomExit: eb,
    RoomLock: tb
};
const Ql = Sa.exports,
    nb = nu,
    {
        CreateRoomReply: ib,
        GetRoomReply: ob
    } = ms;
class rb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = nb.stringify(n);
            return `${this.scheme}://${this.host}/api/v2${e}?${i}`
        }
        return `${this.scheme}://${this.host}/api/v2${e}`
    }
    async createRoom(e) {
        let n = {
            userId: e.userId || "fart",
            appTag: e.appTag || "test"
        };
        e.password && (n.password = e.password), e.moderatorPassword && (n.moderatorPassword = e.moderatorPassword), e.twitchLocked && (n.twitchLocked = e.twitchLocked), e.locale && (n.locale = e.locale), e.keepalive && (n.keepalive = e.keepalive), e.controllerBranch && (n.controllerBranch = e.controllerBranch);
        let i = this.url("/rooms", n),
            y = await (await Ql(i, {
                method: "POST"
            })).json();
        if (!y.ok) throw new Error(`failed to create room: ${y.error}`);
        let S = y.body;
        return new ib({
            code: S.code,
            token: S.token,
            host: S.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Ql(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
        return new ob({
            appId: f.appId,
            appTag: f.appTag,
            audienceEnabled: f.audienceEnabled,
            code: f.code,
            host: f.host,
            audienceHost: f.audienceHost,
            locked: f.locked,
            full: f.full,
            moderationEnabled: f.moderationEnabled,
            passwordRequired: f.passwordRequired,
            twitchLocked: f.twitchLocked,
            locale: f.locale,
            keepalive: f.keepalive,
            controllerBranch: f.controllerBranch
        })
    }
}
var sb = {
        APIClient: rb
    },
    lo = null;
typeof WebSocket < "u" ? lo = WebSocket : typeof MozWebSocket < "u" ? lo = MozWebSocket : typeof yt < "u" ? lo = yt.WebSocket || yt.MozWebSocket : typeof window < "u" ? lo = window.WebSocket || window.MozWebSocket : typeof self < "u" && (lo = self.WebSocket || self.MozWebSocket);
var ab = lo,
    Xa = {
        exports: {}
    },
    po = typeof Reflect == "object" ? Reflect : null,
    Xl = po && typeof po.apply == "function" ? po.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Wr;
po && typeof po.ownKeys == "function" ? Wr = po.ownKeys : Object.getOwnPropertySymbols ? Wr = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Wr = function(e) {
    return Object.getOwnPropertyNames(e)
};

function lb(t) {
    console && console.warn && console.warn(t)
}
var iu = Number.isNaN || function(e) {
    return e !== e
};

function qt() {
    qt.init.call(this)
}
Xa.exports = qt;
Xa.exports.once = cb;
qt.EventEmitter = qt;
qt.prototype._events = void 0;
qt.prototype._eventsCount = 0;
qt.prototype._maxListeners = void 0;
var Kl = 10;

function ys(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(qt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Kl
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || iu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Kl = t
    }
});
qt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
qt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || iu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function ou(t) {
    return t._maxListeners === void 0 ? qt.defaultMaxListeners : t._maxListeners
}
qt.prototype.getMaxListeners = function() {
    return ou(this)
};
qt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var a = e === "error",
        f = this._events;
    if (f !== void 0) a = a && f.error === void 0;
    else if (!a) return !1;
    if (a) {
        var y;
        if (n.length > 0 && (y = n[0]), y instanceof Error) throw y;
        var S = new Error("Unhandled error." + (y ? " (" + y.message + ")" : ""));
        throw S.context = y, S
    }
    var I = f[e];
    if (I === void 0) return !1;
    if (typeof I == "function") Xl(I, this, n);
    else
        for (var O = I.length, R = hu(I, O), i = 0; i < O; ++i) Xl(R[i], this, n);
    return !0
};

function ru(t, e, n, i) {
    var a, f, y;
    if (ys(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), y = f[e]), y === void 0) y = f[e] = n, ++t._eventsCount;
    else if (typeof y == "function" ? y = f[e] = i ? [n, y] : [y, n] : i ? y.unshift(n) : y.push(n), a = ou(t), a > 0 && y.length > a && !y.warned) {
        y.warned = !0;
        var S = new Error("Possible EventEmitter memory leak detected. " + y.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        S.name = "MaxListenersExceededWarning", S.emitter = t, S.type = e, S.count = y.length, lb(S)
    }
    return t
}
qt.prototype.addListener = function(e, n) {
    return ru(this, e, n, !1)
};
qt.prototype.on = qt.prototype.addListener;
qt.prototype.prependListener = function(e, n) {
    return ru(this, e, n, !0)
};

function hb() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function su(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = hb.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
qt.prototype.once = function(e, n) {
    return ys(n), this.on(e, su(this, e, n)), this
};
qt.prototype.prependOnceListener = function(e, n) {
    return ys(n), this.prependListener(e, su(this, e, n)), this
};
qt.prototype.removeListener = function(e, n) {
    var i, a, f, y, S;
    if (ys(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, y = i.length - 1; y >= 0; y--)
            if (i[y] === n || i[y].listener === n) {
                S = i[y].listener, f = y;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : ub(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, S || n)
    }
    return this
};
qt.prototype.off = qt.prototype.removeListener;
qt.prototype.removeAllListeners = function(e) {
    var n, i, a;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var f = Object.keys(i),
            y;
        for (a = 0; a < f.length; ++a) y = f[a], y !== "removeListener" && this.removeAllListeners(y);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (a = n.length - 1; a >= 0; a--) this.removeListener(e, n[a]);
    return this
};

function au(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? db(a) : hu(a, a.length)
}
qt.prototype.listeners = function(e) {
    return au(this, e, !0)
};
qt.prototype.rawListeners = function(e) {
    return au(this, e, !1)
};
qt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : lu.call(t, e)
};
qt.prototype.listenerCount = lu;

function lu(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
qt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Wr(this._events) : []
};

function hu(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function ub(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function db(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function cb(t, e) {
    return new Promise(function(n, i) {
        function a(y) {
            t.removeListener(e, f), i(y)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        uu(t, e, f, {
            once: !0
        }), e !== "error" && fb(t, a, {
            once: !0
        })
    })
}

function fb(t, e, n) {
    typeof t.on == "function" && uu(t, "error", e, n)
}

function uu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class pb {
    constructor(e) {
        e && (this.error = e.error, this.to = e.to)
    }
    toString() {
        return `ObservedError{
	to:${this.to}
	error:${this.error}
}`
    }
}
class ws extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class pr extends ws {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class du extends pr {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class cu extends pr {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class fu extends pr {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class It extends ws {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class pu extends It {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class gu extends It {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class mu extends It {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class yu extends It {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class wu extends It {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class vu extends It {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class bu extends It {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class ku extends It {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class Cu extends It {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Eu extends It {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class xu extends It {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Su extends It {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Iu extends It {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Tu extends It {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class _u extends It {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Au extends It {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class qu extends It {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Ou extends It {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Ru extends It {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Pu extends It {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Mu extends It {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Lu extends It {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Bu extends It {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Du extends It {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Nu extends It {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Vu extends It {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class $u extends It {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class ju extends It {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function gb({
    code: t,
    message: e
}) {
    const n = mb[t];
    return n ? new n({
        message: e
    }) : new ws({
        message: e
    })
}
var ti = {
    createError: gb,
    CallError: ws,
    EcastServerError: pr,
    EcastCreateRoomFailed: du,
    EcastDialRoomFailed: cu,
    EcastServerIsShuttingDown: fu,
    EcastClientError: It,
    EcastParseError: pu,
    EcastRequestIsMissingOpcode: gu,
    EcastRequestHasInvalidOpcode: mu,
    EcastRequestHasInvalidArguments: yu,
    EcastEntityNotFound: wu,
    EcastEntityAlreadyExists: vu,
    EcastEntityTypeError: bu,
    EcastNoSuchClient: ku,
    EcastRoomIsLocked: Cu,
    EcastRoomIsFull: Eu,
    EcastLicenseNotFound: xu,
    EcastLicenseCheckFailed: Su,
    EcastRoomNotFound: Iu,
    EcastInvalidRole: Tu,
    EcastTwitchLoginRequired: _u,
    EcastInvalidOption: Au,
    EcastPasswordRequired: qu,
    EcastInvalidPassword: Ou,
    EcastNameRequired: Ru,
    EcastFilterError: Pu,
    EcastNoSuchFilter: Mu,
    EcastPermissionDenied: Lu,
    EcastNotConnected: Bu,
    EcastIllegalOperation: Du,
    EcastACLChangeDenied: Nu,
    EcastRoomHasEnded: Vu,
    EcastEntityLocked: $u,
    EcastRateLimitExceeded: ju,
    ObservedError: pb
};
const mb = {
    1e3: pr,
    1001: du,
    1002: cu,
    1003: fu,
    2e3: It,
    2001: pu,
    2002: gu,
    2003: mu,
    2004: yu,
    2005: wu,
    2006: vu,
    2007: bu,
    2008: ku,
    2009: Cu,
    2010: Eu,
    2011: xu,
    2012: Su,
    2013: Iu,
    2014: Tu,
    2015: _u,
    2016: Au,
    2017: qu,
    2018: Ou,
    2019: Ru,
    2021: Pu,
    2022: Mu,
    2023: Lu,
    2024: Bu,
    2025: Du,
    2026: Nu,
    2027: Vu,
    2028: $u,
    2420: ju
};
class yb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class wb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class vb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class bb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class kb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ka = {
    ClientConnected: wb,
    ClientDisconnected: vb,
    ClientKicked: kb,
    ClientSend: bb,
    ClientWelcome: yb
};
class Cb {
    constructor(e) {
        this.choices = e.choices, this.key = e.key, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `CountGroup{
	choices: ${this.choices}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
var Za = {
    CountGroup: Cb
};
class Eb {
    constructor(e) {
        this.key = e.key, this.count = e.count, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `GCounter{
	count:${this.count}
	meta:${this.meta}
}`
    }
}
var el = {
    GCounter: Eb
};
class xb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var Hu = {
    Notification: xb
};
class Sb {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.val = e.val, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `ObjectEntity{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
	meta:${JSON.stringify(this.meta)}
}`
    }
    toBlob() {
        return this.val
    }
}
class Ib {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var tl = {
    ObjectEntity: Sb,
    ObjectEcho: Ib
};
class Tb {
    constructor(e) {
        this.key = e.key, this.count = e.count, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `PNCounter{
	count:${this.count}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
var nl = {
    PNCounter: Tb
};
class _b {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var Fu = {
    Reply: _b
};
class Ab {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var qb = {
    Request: Ab
};
class Ob {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.text = e.text, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this, e.emit("text " + this.key, this)
    }
    toString() {
        return `TextEntity{
	key:${this.key}
	text: ${this.text}
	meta:${JSON.stringify(this.meta)}
}`
    }
    toBlob() {
        return JSON.parse(this.text)
    }
}
class Rb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var il = {
    TextEntity: Ob,
    TextEcho: Rb
};
class Pb {
    constructor(e) {
        this.key = e.key, this.elements = e.elements, this.limit = e.limit, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `TextRing{
	elements: ${this.elements}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
var ol = {
    TextRing: Pb
};
class Mb {
    constructor(e) {
        this.key = e.key, this.artifactId = e.artifactId, this.categoryId = e.categoryId, this.rootId = e.rootId, this.meta = e.meta || {}
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `ArtifactEntity${JSON.stringify(this)}
`
    }
}
var Gu = {
    ArtifactEntity: Mb
};
class Lb {
    constructor(e) {
        this.key = e.key, this.colors = e.colors, this.lines = e.lines, this.live = e.live, this.maxPoints = e.maxPoints, this.size = e.size, this.weights = e.weights, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `Doodle{
	key:${this.key}
	colors:${this.colors}
	lines:${this.lines}
	live:${this.live}
	maxPoints:${this.maxPoints}
	size:${this.size}
	weights:${this.weights}
	meta:${JSON.stringify(this.meta)}
}`
    }
}
class Bb {
    constructor(e) {
        this.key = e.key, this.line = e.line
    }
    whenReceived(e) {
        e.entities[this.key].lines.push(this.line)
    }
    toString() {
        return `DoodleLine{
	val:${this.line}
}`
    }
}
class Db {
    constructor(e) {
        this.key = e.key, this.index = e.index
    }
    whenReceived(e) {
        e.entities[this.key].lines.splice(this.index, 1)
    }
    toString() {
        return `DoodleLineRemoved{
	index:${this.index}
}`
    }
}
var rl = {
    DoodleEntity: Lb,
    DoodleLine: Bb,
    DoodleLineRemoved: Db
};
class Nb {
    constructor(e) {
        this.key = e.key, this.size = e.size, this.version = e.version, this.from = e.from, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenRecived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `Stack{
	key:${this.key}
	size:${this.size}
	version:${this.version}
	from:${this.from}
	meta:${this.meta}
}`
    }
}
class Vb {
    constructor(e) {
        this.key = e.key, this.val = e.val
    }
    toString() {
        return `StackElement{
	key:${this.key}
	value: ${JSON.stringify(this.val)}
}`
    }
}
class $b {
    constructor(e) {
        this.key = e.key, this.vals = e.vals
    }
    toString() {
        return `StackElements{
	key:${this.key}
	values: ${JSON.stringify(this.vals)}
}`
    }
}
var Wu = {
    StackEntity: Nb,
    StackElement: Vb,
    StackElements: $b
};
class jb {
    constructor(e) {
        this.key = e.key
    }
    whenReceived(e) {
        delete e.entities[this.key]
    }
    toString() {
        return `DropEntity{
	key:${this.key}
}`
    }
}
var zu = {
    DropEntity: jb
};
class Hb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var Fb = {
    Echo: Hb
};
class Gb {
    constructor(e) {
        this.key = e.key, this.from = e.from
    }
    whenReceived(e) {
        e.entities[this.key] && (e.entities[this.key].meta.locked = !0)
    }
    toString() {
        return `LockEntity{
	key:${this.key}
}`
    }
}
var Wb = {
    LockEntity: Gb
};
class zb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Uu = {
    OK: zb
};
class Ub {
    constructor(e) {
        this.from = e.from, this.key = e.key, this.val = e.val, this.restrictions = e.restrictions, this.version = e.version, this.meta = e.meta || {}, e.acl && (this.acl = e.acl)
    }
    whenReceived(e) {
        e.entities[this.key] = this
    }
    toString() {
        return `NumberEntity{
	key:${this.key}
	val: ${this.val}
	restrictions: ${JSON.stringify(this.restrictions)}
	meta: ${JSON.stringify(this.meta)}
}`
    }
}
var Yu = {
    NumberEntity: Ub
};
const {
    ArtifactEntity: Yb
} = Gu, {
    ClientWelcome: Jb,
    ClientConnected: Qb,
    ClientDisconnected: Xb,
    ClientKicked: Kb,
    ClientSend: Zb
} = Ka, {
    CountGroup: e0
} = Za, {
    DoodleEntity: t0,
    DoodleLine: n0,
    DoodleLineRemoved: i0
} = rl, {
    StackEntity: o0,
    StackElement: r0,
    StackElements: s0
} = Wu, {
    DropEntity: a0
} = zu, {
    Echo: l0
} = Fb, {
    LockEntity: h0
} = Wb, {
    GCounter: u0
} = el, {
    GetAudienceReply: d0,
    RoomExit: c0,
    RoomLock: f0
} = ms, {
    Notification: p0
} = Hu, {
    OK: g0
} = Uu, {
    NumberEntity: m0
} = Yu, {
    ObjectEcho: y0,
    ObjectEntity: w0
} = tl, {
    PNCounter: Zl
} = nl, {
    Reply: v0
} = Fu, {
    TextEcho: b0,
    TextEntity: k0
} = il, {
    TextRing: C0
} = ol, {
    createError: eh,
    ObservedError: E0
} = ti;

function Pa(t, e, n) {
    switch (t) {
        case "ok":
            return new g0;
        case "echo":
            return new l0({
                message: e.message
            });
        case "lock":
            return new h0({
                key: e.key,
                from: e.from
            });
        case "error":
            return eh({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new E0({
                to: e.to,
                error: eh({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new k0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new b0({
                message: e.message
            });
        case "object":
            return new w0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new y0({
                message: e.message
            });
        case "drop":
            return new a0({
                key: e.key
            });
        case "artifact":
            return new Yb({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new Qb({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Xb({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Kb({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Zb({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Jb({
                id: e.id,
                name: e.name,
                secret: e.secret,
                reconnect: e.reconnect,
                here: e.here,
                profile: e.profile,
                replayEnd: e.replayEnd
            });
            if (e.entities) {
                let a = {};
                Object.entries(e.entities).forEach(([f, y]) => {
                    a[f] = Pa(y[0], y[1], y[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new t0({
                key: e.key,
                colors: e.val.colors,
                lines: e.val.lines,
                live: e.val.live,
                maxPoints: e.val.maxPoints,
                size: e.val.size,
                weights: e.val.weights,
                meta: n,
                acl: e.acl
            });
        case "doodle/line":
            return new n0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new i0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new o0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new r0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new s0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new m0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new c0({
                cause: e.cause
            });
        case "room/lock":
            return new f0;
        case "room/get-audience":
            return new d0({
                connections: e.connections
            });
        case "audience":
            return new Zl({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new e0({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new C0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new u0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new Zl({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function x0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new v0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Pa(n, e.result)
    }) : new p0({
        pc: e.pc,
        opcode: n,
        result: Pa(n, e.result)
    })
}
var S0 = {
    parseResponseMessage: x0
};
const th = ab,
    I0 = nu,
    T0 = Xa.exports,
    {
        CallError: _0
    } = ti,
    {
        ClientWelcome: A0
    } = Ka,
    {
        CountGroup: q0
    } = Za,
    {
        GCounter: O0
    } = el,
    {
        Notification: nh
    } = Hu,
    {
        ObjectEntity: da
    } = tl,
    {
        PNCounter: R0
    } = nl,
    {
        Reply: P0
    } = Fu,
    {
        Request: M0
    } = qb,
    {
        TextEntity: ca
    } = il,
    {
        TextRing: L0
    } = ol,
    {
        parseResponseMessage: B0
    } = S0,
    {
        DoodleEntity: D0
    } = rl,
    {
        StackEntity: N0
    } = Wu,
    V0 = 1e3 + Math.floor(Math.random() * 500),
    ih = 13e3;
class $0 extends T0 {
    constructor(e) {
        if (super(), this.debug = e.debug || !1, !e.host) throw new Error("unable to create ecast WSClient: no host provided");
        if (this.host = e.host, !e.code) throw new Error("unable to create ecast WSClient: no room code provided");
        if (this.code = e.code, e.scheme ? this.scheme = e.scheme : this.scheme = "wss", e.secret && e.id) this.id = e.id, this.secret = e.secret;
        else {
            switch (e.role) {
                case "player":
                    if (!e.name) throw new Error("unable to create ecast WSClient: no name provided");
                    break;
                case "host":
                    if (!e.token) throw new Error("unable to create ecast WSClient: tried to connect with host role but without host token");
                    this.token = e.token;
                    break;
                case "moderator":
                    if (!e.password) throw new Error("unable to create ecast WSClient: tried to connect with moderator role but without password");
                    break
            }
            e.password && (this.password = e.password), e.twitchToken && (this.twitchToken = e.twitchToken)
        }
        this.name = e.name, this.role = e.role, this.deviceId = e.deviceId, this.userId = e.userId, this.conn = null, this.seq = 0, this.pending = {}, this.entities = {}, e.role == "host" && (this.replaySince = e.replaySince || 0, this.syncEntities = e.syncEntities || !1)
    }
    connect() {
        const e = {
            id: this.id,
            role: this.role,
            name: this.name,
            format: "json",
            "user-id": this.userId,
            password: this.password
        };
        this.deviceId && (e["device-id"] = this.deviceId), this.twitchToken && (e["twitch-token"] = this.twitchToken), this.secret && (e.secret = this.secret), this.role === "host" && (e["host-token"] = this.token, this.replaySince > 0 && (e["replay-since"] = this.replaySince), this.syncEntities && (e["sync-entities"] = this.syncEntities));
        const n = I0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let y = !1,
                S = !1,
                I = R => {
                    a(R), y = !0
                },
                O = R => {
                    f(R), y = !0
                };
            this.conn = new th(i, "ecast-v0"), this.conn.onmessage = R => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(R.data),null,2)}`);
                const V = B0(R);
                if (V instanceof P0) this.onReply(V);
                else if (V instanceof nh) {
                    if (V.result instanceof A0) S = !0, this.id = V.result.id, this.deviceId = V.result.deviceId, this.entities = V.result.entities, this.secret = V.result.secret, V.result.name && (this.name = V.result.name), I(V.result);
                    else if (!y) {
                        O(V.result);
                        return
                    }
                    this.onNotification(V)
                } else console.error(`failed to parse response messsage: ${V}`)
            }, this.conn.onerror = R => {
                y ? this.emit("socketError", R) : O(R)
            }, this.conn.onclose = R => {
                this.debugLog("onclose", R.code), S && R.code === 1006 ? this.reconnect() : this.emit("socketClose", R)
            }, this.conn.onopen = R => {
                this.emit("socketOpen", R)
            }
        })
    }
    sleep(e) {
        return new Promise(n => setTimeout(n, e))
    }
    debugLog(...e) {
        !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...e)
    }
    async reconnect() {
        this.disconnect(), this.debugLog("Attempting to reconnect");
        let e = 1,
            n = V0;
        for (;;) try {
            this.emit("connection", {
                status: "connecting",
                attempt: e
            }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                status: "connected"
            });
            return
        } catch (i) {
            if (this.debugLog("reconnect error", i), i.code === 1005 || i.code === 1e3) {
                this.debugLog("unable to reconnect!", i), this.emit("socketClose", i);
                return
            }
            if (n >= ih) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(ih, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new nh(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof _0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== th.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new M0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((S, I) => {
                this.pending[i] = {
                    resolve: S,
                    reject: I,
                    request: a
                }
            }),
            y = JSON.stringify(a);
        return this.debugLog(`send -> ${y}`), this.conn.send(y), f
    }
    lockRoom() {
        return this.send("room/lock")
    }
    startAudience() {
        return this.send("room/start-audience")
    }
    getAudience() {
        return this.send("room/get-audience")
    }
    mail(e, n) {
        return this.send("client/send", {
            from: this.id,
            to: e,
            body: n
        })
    }
    kick(e, n = !1, i) {
        return this.send("client/kick", {
            id: e,
            ban: n,
            reason: i
        })
    }
    async drop(e) {
        const n = await this.send("drop", {
            key: e
        });
        return delete this.entities[e], n
    }
    echo(e) {
        return this.send("echo", {
            message: e
        })
    }
    async lock(e) {
        const n = await this.send("lock", {
            key: e
        });
        return this.entities[e].meta.locked = !0, n
    }
    async getNumber(e) {
        const n = await this.send("number/get", {
            key: e
        });
        return this.entities[e].val = n.val, this.entities[e].restrictions = n.restrictions, n
    }
    async updateNumber(e, n) {
        const i = await this.send("number/update", {
            key: e,
            val: n
        });
        return this.entities[e].val = n, i
    }
    async createObject(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/create", a);
        return this.entities[e] = new da({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), f
    }
    echoObject(e) {
        return this.send("object/echo", {
            message: e
        })
    }
    async setObject(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/set", a);
        return this.entities[e] = new da({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), f
    }
    async updateObject(e, n) {
        const i = await this.send("object/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new da({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), i
    }
    echoText(e) {
        return this.send("text/echo", {
            message: e
        })
    }
    getText(e) {
        return this.send("text/get", {
            key: e
        })
    }
    async createText(e, n, i) {
        const a = {
                key: e,
                val: n
            },
            {
                acl: f,
                accept: y,
                reject: S
            } = i;
        f && (a.acl = f), y && (a.accept = y), S && (a.reject = S);
        const I = await this.send("text/create", a);
        return this.entities[e] = new ca({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), I
    }
    async setText(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("text/set", a);
        return this.entities[e] = new ca({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), f
    }
    async updateText(e, n) {
        const i = await this.send("text/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new ca({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), i
    }
    async createDoodle(e, n) {
        let i = {
            key: e
        };
        const {
            acl: a,
            colors: f,
            live: y,
            maxPoints: S,
            size: I,
            weights: O
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = y, S != null && (i.maxPoints = S), I && (i.size = I), O && (i.weights = O);
        const R = await this.send("doodle/create", i);
        return this.entities[e] = new D0({
            key: e,
            colors: f,
            lines: [],
            live: y,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: I,
            weights: O,
            meta: {
                locked: !1
            }
        }), R
    }
    async getDoodle(e) {
        return this.send("doodle/get", {
            key: e
        })
    }
    async strokeDoodle(e, n) {
        const {
            layer: i,
            color: a,
            weight: f,
            points: y
        } = n, S = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: f,
            points: y
        }), I = {
            layer: i,
            color: a,
            weight: f,
            points: y
        };
        return this.entities[e].lines.push(I), S
    }
    async undoDoodle(e) {
        const n = await this.send("doodle/undo", {
            key: e
        });
        return this.entities[e].lines.pop(), n
    }
    async createStack(e, n) {
        const i = {
            key: e
        };
        n && (i.acl = n);
        const a = await this.send("stack/create", i);
        return this.entities[e] = new N0({
            key: e,
            size: 0,
            meta: {
                locked: !1
            }
        }), a
    }
    async pushStack(e, n) {
        return await this.send("stack/push", {
            key: e,
            val: n
        })
    }
    async bulkPushStack(e, n) {
        return await this.send("stack/bulkpush", {
            key: e,
            vals: n
        })
    }
    async peekStack(e, n) {
        return await this.send("stack/peek", {
            key: e,
            size: n
        })
    }
    async popStack(e) {
        return await this.send("stack/pop", {
            key: e
        })
    }
    async createCountGroup(e, n) {
        const i = await this.send("audience/count-group/create", {
            name: e,
            options: n
        });
        return this.entities[e] = new q0({
            key: e,
            choices: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementCountGroupCounter(e, n, i = 1) {
        return this.send("audience/count-group/increment", {
            name: e,
            vote: n,
            times: i
        })
    }
    getCountGroup(e) {
        return this.send("audience/count-group/get", {
            name: e
        })
    }
    async createGCounter(e, n) {
        const i = await this.send("audience/g-counter/create", {
            key: e,
            count: n
        });
        return this.entities[e] = new O0({
            key: e,
            count: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementGCounter(e, n) {
        return this.send("audience/g-counter/increment", {
            key: e,
            times: n
        })
    }
    getGCounter(e) {
        return this.send("audience/g-counter/get", {
            key: e
        })
    }
    async createPNCounter(e, n) {
        const i = await this.send("audience/pn-counter/create", {
            key: e,
            count: n
        });
        return this.entities[e] = new R0({
            key: e,
            count: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementPNCounter(e, n) {
        return this.send("audience/pn-counter/increment", {
            key: e,
            times: n
        })
    }
    decrementPNCounter(e, n) {
        return this.send("audience/pn-counter/decrement", {
            key: e,
            times: n
        })
    }
    getPNCounter(e) {
        return this.send("audience/pn-counter/get", {
            key: e
        })
    }
    async createTextRing(e, n) {
        const i = {
                key: e
            },
            {
                limit: a,
                accept: f,
                reject: y
            } = n;
        a && (i.limit = a), f && (i.accept = f), y && (i.reject = y);
        const S = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new L0({
            key: e,
            elements: [],
            limit: a,
            meta: {
                locked: !1
            }
        }), S
    }
    getTextRing(e) {
        return this.send("audience/text-ring/get", {
            name: e
        })
    }
    pushTextRing(e, n) {
        return this.send("audience/text-ring/push", {
            name: e,
            text: n
        })
    }
}
var j0 = {
    WSClient: $0
};
const {
    APIClient: H0
} = sb, {
    WSClient: F0
} = j0, {
    CreateRoomReply: G0,
    GetRoomReply: W0
} = ms, {
    ClientWelcome: z0,
    ClientDisconnected: U0
} = Ka, {
    ArtifactEntity: Y0
} = Gu, {
    GCounter: J0
} = el, {
    NumberEntity: Q0
} = Yu, {
    TextEntity: X0
} = il, {
    DoodleEntity: K0
} = rl, {
    ObjectEntity: Z0
} = tl, {
    CountGroup: ek
} = Za, {
    DropEntity: tk
} = zu, {
    OK: nk
} = Uu, {
    RoomExit: ik
} = ms, {
    TextRing: ok
} = ol, {
    PNCounter: rk
} = nl;
var Oi = {
    APIClient: H0,
    WSClient: F0,
    ClientWelcome: z0,
    CreateRoomReply: G0,
    DropEntity: tk,
    GetRoomReply: W0,
    ClientDisconnected: U0,
    RoomExit: ik,
    OK: nk,
    ArtifactEntity: Y0,
    DoodleEntity: K0,
    NumberEntity: Q0,
    CountGroup: ek,
    GCounter: J0,
    ObjectEntity: Z0,
    PNCounter: rk,
    TextEntity: X0,
    TextRing: ok
};

function oh(...t) {
    console.log(...t)
}

function sk(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var rh = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(yt, function(n) {
        var i = typeof window < "u" ? window : typeof yt < "u" ? yt : typeof self < "u" ? self : {},
            a = function(B, U) {
                if (U = U.split(":")[0], B = +B, !B) return !1;
                switch (U) {
                    case "http":
                    case "ws":
                        return B !== 80;
                    case "https":
                    case "wss":
                        return B !== 443;
                    case "ftp":
                        return B !== 21;
                    case "gopher":
                        return B !== 70;
                    case "file":
                        return !1
                }
                return B !== 0
            },
            f = Object.prototype.hasOwnProperty,
            y;

        function S($) {
            try {
                return decodeURIComponent($.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function I($) {
            try {
                return encodeURIComponent($)
            } catch {
                return null
            }
        }

        function O($) {
            for (var B = /([^=?#&]+)=?([^&]*)/g, U = {}, P; P = B.exec($);) {
                var W = S(P[1]),
                    fe = S(P[2]);
                W === null || fe === null || W in U || (U[W] = fe)
            }
            return U
        }

        function R($, B) {
            B = B || "";
            var U = [],
                P, W;
            typeof B != "string" && (B = "?");
            for (W in $)
                if (f.call($, W)) {
                    if (P = $[W], !P && (P === null || P === y || isNaN(P)) && (P = ""), W = I(W), P = I(P), W === null || P === null) continue;
                    U.push(W + "=" + P)
                } return U.length ? B + U.join("&") : ""
        }
        var V = R,
            X = O,
            ie = {
                stringify: V,
                parse: X
            },
            J = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            oe = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            m = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            L = new RegExp("^" + m + "+");

        function z($) {
            return ($ || "").toString().replace(L, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(B, U) {
                    return c(U.protocol) ? B.replace(/\\/g, "/") : B
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            re = {
                hash: 1,
                query: 1
            };

        function ye($) {
            var B;
            typeof window < "u" ? B = window : typeof i < "u" ? B = i : typeof self < "u" ? B = self : B = {};
            var U = B.location || {};
            $ = $ || U;
            var P = {},
                W = typeof $,
                fe;
            if ($.protocol === "blob:") P = new Le(unescape($.pathname), {});
            else if (W === "string") {
                P = new Le($, {});
                for (fe in re) delete P[fe]
            } else if (W === "object") {
                for (fe in $) fe in re || (P[fe] = $[fe]);
                P.slashes === void 0 && (P.slashes = J.test($.href))
            }
            return P
        }

        function c($) {
            return $ === "file:" || $ === "ftp:" || $ === "http:" || $ === "https:" || $ === "ws:" || $ === "wss:"
        }

        function Ee($, B) {
            $ = z($), B = B || {};
            var U = oe.exec($),
                P = U[1] ? U[1].toLowerCase() : "",
                W = !!U[2],
                fe = !!U[3],
                pe = 0,
                Be;
            return W ? fe ? (Be = U[2] + U[3] + U[4], pe = U[2].length + U[3].length) : (Be = U[2] + U[4], pe = U[2].length) : fe ? (Be = U[3] + U[4], pe = U[3].length) : Be = U[4], P === "file:" ? pe >= 2 && (Be = Be.slice(2)) : c(P) ? Be = U[4] : P ? W && (Be = Be.slice(2)) : pe >= 2 && c(B.protocol) && (Be = U[4]), {
                protocol: P,
                slashes: W || c(P),
                slashesCount: pe,
                rest: Be
            }
        }

        function _e($, B) {
            if ($ === "") return B;
            for (var U = (B || "/").split("/").slice(0, -1).concat($.split("/")), P = U.length, W = U[P - 1], fe = !1, pe = 0; P--;) U[P] === "." ? U.splice(P, 1) : U[P] === ".." ? (U.splice(P, 1), pe++) : pe && (P === 0 && (fe = !0), U.splice(P, 1), pe--);
            return fe && U.unshift(""), (W === "." || W === "..") && U.push(""), U.join("/")
        }

        function Le($, B, U) {
            if ($ = z($), !(this instanceof Le)) return new Le($, B, U);
            var P, W, fe, pe, Be, De, pt = ae.slice(),
                $t = typeof B,
                Qe = this,
                On = 0;
            for ($t !== "object" && $t !== "string" && (U = B, B = null), U && typeof U != "function" && (U = ie.parse), B = ye(B), W = Ee($ || "", B), P = !W.protocol && !W.slashes, Qe.slashes = W.slashes || P && B.slashes, Qe.protocol = W.protocol || B.protocol || "", $ = W.rest, (Qe.protocol === "file:" || !W.slashes && (W.protocol || W.slashesCount < 2 || !c(Qe.protocol))) && (pt[3] = [/(.*)/, "pathname"]); On < pt.length; On++) {
                if (pe = pt[On], typeof pe == "function") {
                    $ = pe($, Qe);
                    continue
                }
                fe = pe[0], De = pe[1], fe !== fe ? Qe[De] = $ : typeof fe == "string" ? ~(Be = $.indexOf(fe)) && (typeof pe[2] == "number" ? (Qe[De] = $.slice(0, Be), $ = $.slice(Be + pe[2])) : (Qe[De] = $.slice(Be), $ = $.slice(0, Be))) : (Be = fe.exec($)) && (Qe[De] = Be[1], $ = $.slice(0, Be.index)), Qe[De] = Qe[De] || P && pe[3] && B[De] || "", pe[4] && (Qe[De] = Qe[De].toLowerCase())
            }
            U && (Qe.query = U(Qe.query)), P && B.slashes && Qe.pathname.charAt(0) !== "/" && (Qe.pathname !== "" || B.pathname !== "") && (Qe.pathname = _e(Qe.pathname, B.pathname)), Qe.pathname.charAt(0) !== "/" && c(Qe.protocol) && (Qe.pathname = "/" + Qe.pathname), a(Qe.port, Qe.protocol) || (Qe.host = Qe.hostname, Qe.port = ""), Qe.username = Qe.password = "", Qe.auth && (pe = Qe.auth.split(":"), Qe.username = pe[0] || "", Qe.password = pe[1] || ""), Qe.origin = Qe.protocol !== "file:" && c(Qe.protocol) && Qe.host ? Qe.protocol + "//" + Qe.host : "null", Qe.href = Qe.toString()
        }

        function lt($, B, U) {
            var P = this;
            switch ($) {
                case "query":
                    typeof B == "string" && B.length && (B = (U || ie.parse)(B)), P[$] = B;
                    break;
                case "port":
                    P[$] = B, a(B, P.protocol) ? B && (P.host = P.hostname + ":" + B) : (P.host = P.hostname, P[$] = "");
                    break;
                case "hostname":
                    P[$] = B, P.port && (B += ":" + P.port), P.host = B;
                    break;
                case "host":
                    P[$] = B, /:\d+$/.test(B) ? (B = B.split(":"), P.port = B.pop(), P.hostname = B.join(":")) : (P.hostname = B, P.port = "");
                    break;
                case "protocol":
                    P.protocol = B.toLowerCase(), P.slashes = !U;
                    break;
                case "pathname":
                case "hash":
                    if (B) {
                        var W = $ === "pathname" ? "/" : "#";
                        P[$] = B.charAt(0) !== W ? W + B : B
                    } else P[$] = B;
                    break;
                default:
                    P[$] = B
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (P[pe[1]] = P[pe[1]].toLowerCase())
            }
            return P.origin = P.protocol !== "file:" && c(P.protocol) && P.host ? P.protocol + "//" + P.host : "null", P.href = P.toString(), P
        }

        function Ne($) {
            (!$ || typeof $ != "function") && ($ = ie.stringify);
            var B, U = this,
                P = U.protocol;
            P && P.charAt(P.length - 1) !== ":" && (P += ":");
            var W = P + (U.slashes || c(U.protocol) ? "//" : "");
            return U.username && (W += U.username, U.password && (W += ":" + U.password), W += "@"), W += U.host + U.pathname, B = typeof U.query == "object" ? $(U.query) : U.query, B && (W += B.charAt(0) !== "?" ? "?" + B : B), U.hash && (W += U.hash), W
        }
        Le.prototype = {
            set: lt,
            toString: Ne
        }, Le.extractProtocol = Ee, Le.location = ye, Le.trimLeft = z, Le.qs = ie;
        var Q = Le;

        function je($, B) {
            setTimeout(function(U) {
                return $.call(U)
            }, 4, B)
        }

        function G($, B) {
            typeof process < "u" && console[$].call(null, B)
        }

        function se($, B) {
            $ === void 0 && ($ = []);
            var U = [];
            return $.forEach(function(P) {
                B(P) || U.push(P)
            }), U
        }

        function Te($, B) {
            $ === void 0 && ($ = []);
            var U = [];
            return $.forEach(function(P) {
                B(P) && U.push(P)
            }), U
        }
        var ve = function() {
            this.listeners = {}
        };
        ve.prototype.addEventListener = function(B, U) {
            typeof U == "function" && (Array.isArray(this.listeners[B]) || (this.listeners[B] = []), Te(this.listeners[B], function(P) {
                return P === U
            }).length === 0 && this.listeners[B].push(U))
        }, ve.prototype.removeEventListener = function(B, U) {
            var P = this.listeners[B];
            this.listeners[B] = se(P, function(W) {
                return W === U
            })
        }, ve.prototype.dispatchEvent = function(B) {
            for (var U = this, P = [], W = arguments.length - 1; W-- > 0;) P[W] = arguments[W + 1];
            var fe = B.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Be) {
                P.length > 0 ? Be.apply(U, P) : Be.call(U, B)
            }), !0) : !1
        };

        function we($) {
            var B = $.indexOf("?");
            return B >= 0 ? $.slice(0, B) : $
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(B, U) {
            var P = we(U),
                W = this.urlMap[P];
            if (W && W.server && W.websockets.indexOf(B) === -1) return W.websockets.push(B), W.server
        }, ue.prototype.addMembershipToRoom = function(B, U) {
            var P = this.urlMap[we(B.url)];
            P && P.server && P.websockets.indexOf(B) !== -1 && (P.roomMemberships[U] || (P.roomMemberships[U] = []), P.roomMemberships[U].push(B))
        }, ue.prototype.attachServer = function(B, U) {
            var P = we(U),
                W = this.urlMap[P];
            if (!W) return this.urlMap[P] = {
                server: B,
                websockets: [],
                roomMemberships: {}
            }, B
        }, ue.prototype.serverLookup = function(B) {
            var U = we(B),
                P = this.urlMap[U];
            if (P) return P.server
        }, ue.prototype.websocketsLookup = function(B, U, P) {
            var W = we(B),
                fe, pe = this.urlMap[W];
            if (fe = pe ? pe.websockets : [], U) {
                var Be = pe.roomMemberships[U];
                fe = Be || []
            }
            return P ? fe.filter(function(De) {
                return De !== P
            }) : fe
        }, ue.prototype.removeServer = function(B) {
            delete this.urlMap[we(B)]
        }, ue.prototype.removeWebSocket = function(B, U) {
            var P = we(U),
                W = this.urlMap[P];
            W && (W.websockets = se(W.websockets, function(fe) {
                return fe === B
            }))
        }, ue.prototype.removeMembershipFromRoom = function(B, U) {
            var P = this.urlMap[we(B.url)],
                W = P.roomMemberships[U];
            P && W !== null && (P.roomMemberships[U] = se(W, function(fe) {
                return fe === B
            }))
        };
        var xe = new ue,
            Ie = {
                CLOSE_NORMAL: 1e3,
                CLOSE_GOING_AWAY: 1001,
                CLOSE_PROTOCOL_ERROR: 1002,
                CLOSE_UNSUPPORTED: 1003,
                CLOSE_NO_STATUS: 1005,
                CLOSE_ABNORMAL: 1006,
                UNSUPPORTED_DATA: 1007,
                POLICY_VIOLATION: 1008,
                CLOSE_TOO_LARGE: 1009,
                MISSING_EXTENSION: 1010,
                INTERNAL_ERROR: 1011,
                SERVICE_RESTART: 1012,
                TRY_AGAIN_LATER: 1013,
                TLS_HANDSHAKE: 1015
            },
            Ve = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Ke = function() {};
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(B, U, P) {
            B === void 0 && (B = "undefined"), U === void 0 && (U = !1), P === void 0 && (P = !1), this.type = "" + B, this.bubbles = Boolean(U), this.cancelable = Boolean(P)
        };
        var ct = function($) {
                function B(U, P) {
                    if (P === void 0 && (P = {}), $.call(this), !U) throw new TypeError(Ve.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof P != "object") throw new TypeError(Ve.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var W = P.bubbles,
                        fe = P.cancelable;
                    this.type = "" + U, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = W ? Boolean(W) : !1
                }
                return $ && (B.__proto__ = $), B.prototype = Object.create($ && $.prototype), B.prototype.constructor = B, B
            }(Ke),
            Nt = function($) {
                function B(U, P) {
                    if (P === void 0 && (P = {}), $.call(this), !U) throw new TypeError(Ve.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof P != "object") throw new TypeError(Ve.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var W = P.bubbles,
                        fe = P.cancelable,
                        pe = P.data,
                        Be = P.origin,
                        De = P.lastEventId,
                        pt = P.ports;
                    this.type = "" + U, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = W ? Boolean(W) : !1, this.origin = "" + Be, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (De || "")
                }
                return $ && (B.__proto__ = $), B.prototype = Object.create($ && $.prototype), B.prototype.constructor = B, B
            }(Ke),
            Wt = function($) {
                function B(U, P) {
                    if (P === void 0 && (P = {}), $.call(this), !U) throw new TypeError(Ve.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof P != "object") throw new TypeError(Ve.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var W = P.bubbles,
                        fe = P.cancelable,
                        pe = P.code,
                        Be = P.reason,
                        De = P.wasClean;
                    this.type = "" + U, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = W ? Boolean(W) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Be || ""), this.wasClean = De ? Boolean(De) : !1
                }
                return $ && (B.__proto__ = $), B.prototype = Object.create($ && $.prototype), B.prototype.constructor = B, B
            }(Ke);

        function E($) {
            var B = $.type,
                U = $.target,
                P = new ct(B);
            return U && (P.target = U, P.srcElement = U, P.currentTarget = U), P
        }

        function l($) {
            var B = $.type,
                U = $.origin,
                P = $.data,
                W = $.target,
                fe = new Nt(B, {
                    data: P,
                    origin: U
                });
            return W && (fe.target = W, fe.srcElement = W, fe.currentTarget = W), fe
        }

        function g($) {
            var B = $.code,
                U = $.reason,
                P = $.type,
                W = $.target,
                fe = $.wasClean;
            fe || (fe = B === Ie.CLOSE_NORMAL || B === Ie.CLOSE_NO_STATUS);
            var pe = new Wt(P, {
                code: B,
                reason: U,
                wasClean: fe
            });
            return W && (pe.target = W, pe.srcElement = W, pe.currentTarget = W), pe
        }

        function x($, B, U) {
            $.readyState = Re.CLOSING;
            var P = xe.serverLookup($.url),
                W = g({
                    type: "close",
                    target: $.target,
                    code: B,
                    reason: U
                }),
                fe = g({
                    type: "server::close",
                    target: $,
                    code: B,
                    reason: U
                });
            je(function() {
                xe.removeWebSocket($, $.url), $.readyState = Re.CLOSED, $.dispatchEvent(W), $.dispatchEvent(fe), P && P.dispatchEvent(W, P)
            }, $)
        }

        function A($, B, U) {
            $.readyState = Re.CLOSING;
            var P = xe.serverLookup($.url),
                W = g({
                    type: "close",
                    target: $.target,
                    code: B,
                    reason: U,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: $,
                    code: B,
                    reason: U,
                    wasClean: !1
                }),
                pe = E({
                    type: "error",
                    target: $.target
                });
            je(function() {
                xe.removeWebSocket($, $.url), $.readyState = Re.CLOSED, $.dispatchEvent(pe), $.dispatchEvent(W), $.dispatchEvent(fe), P && P.dispatchEvent(W, P)
            }, $)
        }

        function M($) {
            return Object.prototype.toString.call($) !== "[object Blob]" && !($ instanceof ArrayBuffer) && ($ = String($)), $
        }
        var D = new WeakMap;

        function te($) {
            if (D.has($)) return D.get($);
            var B = new Proxy($, {
                get: function(P, W) {
                    return W === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Be = pe.code || Ie.CLOSE_NORMAL,
                            De = pe.reason || "";
                        x(B, Be, De)
                    } : W === "send" ? function(pe) {
                        pe = M(pe), $.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: $
                        }))
                    } : W === "on" ? function(pe, Be) {
                        $.addEventListener("server::" + pe, Be)
                    } : W === "target" ? $ : P[W]
                }
            });
            return D.set($, B), B
        }

        function Se($) {
            var B = encodeURIComponent($).match(/%[89ABab]/g);
            return $.length + (B ? B.length : 0)
        }

        function de($) {
            var B = new Q($),
                U = B.pathname,
                P = B.protocol,
                W = B.hash;
            if (!$) throw new TypeError(Ve.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (U || (B.pathname = "/"), P === "") throw new SyntaxError(Ve.CONSTRUCTOR_ERROR + " The URL '" + B.toString() + "' is invalid.");
            if (P !== "ws:" && P !== "wss:") throw new SyntaxError(Ve.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + P + "' is not allowed.");
            if (W !== "") throw new SyntaxError(Ve.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + W + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return B.toString()
        }

        function Oe($) {
            if ($ === void 0 && ($ = []), !Array.isArray($) && typeof $ != "string") throw new SyntaxError(Ve.CONSTRUCTOR_ERROR + " The subprotocol '" + $.toString() + "' is invalid.");
            typeof $ == "string" && ($ = [$]);
            var B = $.map(function(P) {
                    return {
                        count: 1,
                        protocol: P
                    }
                }).reduce(function(P, W) {
                    return P[W.protocol] = (P[W.protocol] || 0) + W.count, P
                }, {}),
                U = Object.keys(B).filter(function(P) {
                    return B[P] > 1
                });
            if (U.length > 0) throw new SyntaxError(Ve.CONSTRUCTOR_ERROR + " The subprotocol '" + U[0] + "' is duplicated.");
            return $
        }
        var Re = function($) {
            function B(P, W) {
                $.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = de(P), W = Oe(W), this.protocol = W[0] || "", this.binaryType = "blob", this.readyState = B.CONNECTING;
                var fe = te(this),
                    pe = xe.attachWebSocket(fe, this.url);
                je(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = B.CLOSED, G("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), xe.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Ie.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var De = pe.options.selectProtocol(W),
                                    pt = De !== "",
                                    $t = W.indexOf(De) !== -1;
                                if (pt && !$t) {
                                    this.readyState = B.CLOSED, G("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), xe.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: Ie.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = De
                            }
                            this.readyState = B.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), pe.dispatchEvent(E({
                                type: "connection"
                            }), fe)
                        }
                    else this.readyState = B.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    })), G("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            $ && (B.__proto__ = $), B.prototype = Object.create($ && $.prototype), B.prototype.constructor = B;
            var U = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return U.onopen.get = function() {
                return this._onopen
            }, U.onmessage.get = function() {
                return this._onmessage
            }, U.onclose.get = function() {
                return this._onclose
            }, U.onerror.get = function() {
                return this._onerror
            }, U.onopen.set = function(P) {
                this.removeEventListener("open", this._onopen), this._onopen = P, this.addEventListener("open", P)
            }, U.onmessage.set = function(P) {
                this.removeEventListener("message", this._onmessage), this._onmessage = P, this.addEventListener("message", P)
            }, U.onclose.set = function(P) {
                this.removeEventListener("close", this._onclose), this._onclose = P, this.addEventListener("close", P)
            }, U.onerror.set = function(P) {
                this.removeEventListener("error", this._onerror), this._onerror = P, this.addEventListener("error", P)
            }, B.prototype.send = function(W) {
                var fe = this;
                if (this.readyState === B.CLOSING || this.readyState === B.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: M(W)
                    }),
                    Be = xe.serverLookup(this.url);
                Be && je(function() {
                    fe.dispatchEvent(pe, W)
                }, Be)
            }, B.prototype.close = function(W, fe) {
                if (W !== void 0 && (typeof W != "number" || W !== 1e3 && (W < 3e3 || W > 4999))) throw new TypeError(Ve.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + W + " is neither.");
                if (fe !== void 0) {
                    var pe = Se(fe);
                    if (pe > 123) throw new SyntaxError(Ve.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === B.CLOSING || this.readyState === B.CLOSED)) {
                    var Be = te(this);
                    this.readyState === B.CONNECTING ? A(Be, W || Ie.CLOSE_ABNORMAL, fe) : x(Be, W || Ie.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(B.prototype, U), B
        }(ve);
        Re.CONNECTING = 0, Re.prototype.CONNECTING = Re.CONNECTING, Re.OPEN = 1, Re.prototype.OPEN = Re.OPEN, Re.CLOSING = 2, Re.prototype.CLOSING = Re.CLOSING, Re.CLOSED = 3, Re.prototype.CLOSED = Re.CLOSED;
        var ot = function($) {
            return $.reduce(function(B, U) {
                return B.indexOf(U) > -1 ? B : B.concat(U)
            }, [])
        };

        function Ct() {
            return typeof window < "u" ? window : typeof process == "object" && typeof sk == "function" && typeof yt == "object" ? yt : this
        }
        var on = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ht = function($) {
                function B(U, P) {
                    P === void 0 && (P = on), $.call(this);
                    var W = new Q(U);
                    W.pathname || (W.pathname = "/"), this.url = W.toString(), this.originalWebSocket = null;
                    var fe = xe.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, on, P), this.options.mock && this.mockWebsocket()
                }
                return $ && (B.__proto__ = $), B.prototype = Object.create($ && $.prototype), B.prototype.constructor = B, B.prototype.mockWebsocket = function() {
                    var P = Ct();
                    this.originalWebSocket = P.WebSocket, P.WebSocket = Re
                }, B.prototype.restoreWebsocket = function() {
                    var P = Ct();
                    this.originalWebSocket !== null && (P.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, B.prototype.stop = function(P) {
                    P === void 0 && (P = function() {}), this.options.mock && this.restoreWebsocket(), xe.removeServer(this.url), typeof P == "function" && P()
                }, B.prototype.on = function(P, W) {
                    this.addEventListener(P, W)
                }, B.prototype.close = function(P) {
                    P === void 0 && (P = {});
                    var W = P.code,
                        fe = P.reason,
                        pe = P.wasClean,
                        Be = xe.websocketsLookup(this.url);
                    xe.removeServer(this.url), Be.forEach(function(De) {
                        De.readyState = Re.CLOSED, De.dispatchEvent(g({
                            type: "close",
                            target: De.target,
                            code: W || Ie.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, B.prototype.emit = function(P, W, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Be = fe.websockets;
                    Be || (Be = xe.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (W = Array.prototype.slice.call(arguments, 1, arguments.length), W = W.map(function(De) {
                        return M(De)
                    })) : W = M(W), Be.forEach(function(De) {
                        Array.isArray(W) ? De.dispatchEvent.apply(De, [l({
                            type: P,
                            data: W,
                            origin: pe.url,
                            target: De.target
                        })].concat(W)) : De.dispatchEvent(l({
                            type: P,
                            data: W,
                            origin: pe.url,
                            target: De.target
                        }))
                    })
                }, B.prototype.clients = function() {
                    return xe.websocketsLookup(this.url)
                }, B.prototype.to = function(P, W, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Be = this,
                        De = ot(fe.concat(xe.websocketsLookup(this.url, P, W)));
                    return {
                        to: function(pt, $t) {
                            return pe.to.call(pe, pt, $t, De)
                        },
                        emit: function($t, Qe) {
                            Be.emit($t, Qe, {
                                websockets: De
                            })
                        }
                    }
                }, B.prototype.in = function() {
                    for (var P = [], W = arguments.length; W--;) P[W] = arguments[W];
                    return this.to.apply(null, P)
                }, B.prototype.simulate = function(P) {
                    var W = xe.websocketsLookup(this.url);
                    P === "error" && W.forEach(function(fe) {
                        fe.readyState = Re.CLOSED, fe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, B
            }(ve);
        ht.of = function(B) {
            return new ht(B)
        };
        var vt = function($) {
            function B(P, W) {
                var fe = this;
                P === void 0 && (P = "socket.io"), W === void 0 && (W = ""), $.call(this), this.binaryType = "blob";
                var pe = new Q(P);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = B.CONNECTING, this.protocol = "", this.target = this, typeof W == "string" || typeof W == "object" && W !== null ? this.protocol = W : Array.isArray(W) && W.length > 0 && (this.protocol = W[0]);
                var Be = xe.attachWebSocket(this, this.url);
                je(function() {
                    Be ? (this.readyState = B.OPEN, Be.dispatchEvent(E({
                        type: "connection"
                    }), Be, this), Be.dispatchEvent(E({
                        type: "connect"
                    }), Be, this), this.dispatchEvent(E({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = B.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    })), G("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(De) {
                    fe.dispatchEvent(g({
                        type: "disconnect",
                        target: De.target,
                        code: De.code
                    }))
                })
            }
            $ && (B.__proto__ = $), B.prototype = Object.create($ && $.prototype), B.prototype.constructor = B;
            var U = {
                broadcast: {}
            };
            return B.prototype.close = function() {
                if (this.readyState === B.OPEN) {
                    var W = xe.serverLookup(this.url);
                    return xe.removeWebSocket(this, this.url), this.readyState = B.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    })), W && W.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    }), W), this
                }
            }, B.prototype.disconnect = function() {
                return this.close()
            }, B.prototype.emit = function(W) {
                for (var fe = [], pe = arguments.length - 1; pe-- > 0;) fe[pe] = arguments[pe + 1];
                if (this.readyState !== B.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Be = l({
                        type: W,
                        origin: this.url,
                        data: fe
                    }),
                    De = xe.serverLookup(this.url);
                return De && De.dispatchEvent.apply(De, [Be].concat(fe)), this
            }, B.prototype.send = function(W) {
                return this.emit("message", W), this
            }, U.broadcast.get = function() {
                if (this.readyState !== B.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var P = this,
                    W = xe.serverLookup(this.url);
                if (!W) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Be) {
                        return W.emit(pe, Be, {
                            websockets: xe.websocketsLookup(P.url, null, P)
                        }), P
                    },
                    to: function(pe) {
                        return W.to(pe, P)
                    },
                    in: function(pe) {
                        return W.in(pe, P)
                    }
                }
            }, B.prototype.on = function(W, fe) {
                return this.addEventListener(W, fe), this
            }, B.prototype.off = function(W, fe) {
                this.removeEventListener(W, fe)
            }, B.prototype.hasListeners = function(W) {
                var fe = this.listeners[W];
                return Array.isArray(fe) ? !!fe.length : !1
            }, B.prototype.join = function(W) {
                xe.addMembershipToRoom(this, W)
            }, B.prototype.leave = function(W) {
                xe.removeMembershipFromRoom(this, W)
            }, B.prototype.to = function(W) {
                return this.broadcast.to(W)
            }, B.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, B.prototype.dispatchEvent = function(W) {
                for (var fe = this, pe = [], Be = arguments.length - 1; Be-- > 0;) pe[Be] = arguments[Be + 1];
                var De = W.type,
                    pt = this.listeners[De];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function($t) {
                    pe.length > 0 ? $t.apply(fe, pe) : $t.call(fe, W.data ? W.data : W)
                })
            }, Object.defineProperties(B.prototype, U), B
        }(ve);
        vt.CONNECTING = 0, vt.OPEN = 1, vt.CLOSING = 2, vt.CLOSED = 3;
        var kt = function(B, U) {
            return new vt(B, U)
        };
        kt.connect = function(B, U) {
            return kt(B, U)
        };
        var Qt = ht,
            Ze = Re,
            Mt = kt;
        n.Server = Qt, n.WebSocket = Ze, n.SocketIO = Mt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(rh, rh.exports);
var ak = {
    exports: {}
};
(function(t) {
    (function() {
        function e(S, I) {
            var O = S.x - I.x,
                R = S.y - I.y;
            return O * O + R * R
        }

        function n(S, I, O) {
            var R = I.x,
                V = I.y,
                X = O.x - R,
                ie = O.y - V;
            if (X !== 0 || ie !== 0) {
                var J = ((S.x - R) * X + (S.y - V) * ie) / (X * X + ie * ie);
                J > 1 ? (R = O.x, V = O.y) : J > 0 && (R += X * J, V += ie * J)
            }
            return X = S.x - R, ie = S.y - V, X * X + ie * ie
        }

        function i(S, I) {
            for (var O = S[0], R = [O], V, X = 1, ie = S.length; X < ie; X++) V = S[X], e(V, O) > I && (R.push(V), O = V);
            return O !== V && R.push(V), R
        }

        function a(S, I, O, R, V) {
            for (var X = R, ie, J = I + 1; J < O; J++) {
                var oe = n(S[J], S[I], S[O]);
                oe > X && (ie = J, X = oe)
            }
            X > R && (ie - I > 1 && a(S, I, ie, R, V), V.push(S[ie]), O - ie > 1 && a(S, ie, O, R, V))
        }

        function f(S, I) {
            var O = S.length - 1,
                R = [S[0]];
            return a(S, 0, O, I, R), R.push(S[O]), R
        }

        function y(S, I, O) {
            if (S.length <= 2) return S;
            var R = I !== void 0 ? I * I : 1;
            return S = O ? S : i(S, R), S = f(S, R), S
        }
        t.exports = y, t.exports.default = y
    })()
})(ak);
const lk = wt.View.extend({
    el: "#banner",
    template: Je.template(`
        <div class="banner-image"></div>
        <div class="banner-text"></div>
        <div class="banner-cta"></div>
    `),
    events: {
        click: "onBannerClick"
    },
    bindings: {
        ":el": {
            attributes: [{
                name: "class",
                observe: ["visible", "theme"],
                onGet([t, e]) {
                    let n = e || "no-theme";
                    return t && (n += " show"), n
                }
            }]
        },
        ".banner-text": "copy",
        ".banner-cta": "cta"
    },
    initialize() {
        this.render(), this.listenTo(this.model, "change:visible", this.visibleDidChange)
    },
    onBannerClick() {
        bd.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            Me(window).trigger("resize")
        }, .5)
    },
    getCampaign() {
        const t = this.model.get("url");
        if (!t) return "";
        let e = "";
        return t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || ""), e
    }
});
class ni {
    static get isVisible() {
        return this.view ? this.view.state === "on" : !1
    }
    static async update(e, n) {
        if (!n || n.lobbyState !== "PostGame") {
            this.hide();
            return
        }
        this.view || await this.init(e, n), this.show()
    }
    static async init(e) {
        if (!e) {
            this.bannerData = !1;
            return
        }
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new lk({
            model: new Xe.Model(this.bannerData)
        }), this.isInitialized = !0)
    }
    static show() {
        !this.view || this.view.model.set({
            visible: !0
        })
    }
    static hide() {
        !this.view || this.view.model.set({
            visible: !1
        })
    }
    static async loadBannerData(e) {
        try {
            const i = await (await fetch({
                TV_ADROLL_ADVERTISABLE_ID: "WN335VM7RVAMPDZAOWMIHP",
                TV_ADROLL_PIXEL_ID: "WN335VM7RVAMPDZAOWMIHP",
                TV_CDN_IMAGES_URL: "https://s3.amazonaws.com/static.jackboxgames.com/game-images",
                TV_DEBUG: "false",
                TV_DOMAINS: "https://dev.jackbox.tv,https://qa.jackbox.tv,https://jackbox.tv,https://tinyshirts.jackboxgames.com",
                TV_ECAST: "ecast.jackboxgames.com",
                TV_GA_STREAM_ID: "3795853220",
                TV_GA_MEASUREMENT_ID: "G-V1QJVQMYF1",
                TV_S3_BUNDLES: "https://bundles.jackbox.tv",
                TV_S3_DEBUG: "https://jbg-ops.s3.amazonaws.com",
                TV_SENTRY_ALLOWED_URLS: "/(http|https):\\/\\/(\\S*\\.)?jackbox\\.tv/i",
                TV_SENTRY_DSN: "https://bb026273d98c4b99ab11c1de369f521f@o420318.ingest.sentry.io/6387933",
                TV_SENTRY_RATE: "0.2",
                TV_SLACK_DEBUG: "https://hooks.slack.com/services/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",
                TV_TWITCH_CLIENT_ID: "32ghgheygev2ibgh1tiizcphlt8ll3",
                BASE_URL: "https://bundles.jackbox.tv/main/pp5-ydkj2018/",
                MODE: "production",
                DEV: !1,
                PROD: !0
            }.TV_BANNERS_URL)).json();
            return !i || !i.postGameBanners ? !1 : i.postGameBanners[e]
        } catch (n) {
            return console.error("Unable to load banner data", n), !1
        }
    }
}
at(ni, "view", null), at(ni, "isInitialized", !1), at(ni, "bannerConfig", null);
var hk = {};
(function(t) {
    (function(e) {
        e(Bi.exports, Xe, t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(m) {
            m = e.map(e.flatten([m]), function(L) {
                return e.defaults({}, L, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(m)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(m, L) {
                if (e.isObject(L)) {
                    e.each(L, function(re, ye) {
                        this.unstickit(m, ye)
                    }, this);
                    return
                }
                var z = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(re) {
                    if (!(m && re.model !== m) && !(L && re.config.selector != L)) return re.model.off(re.event, re.fn), ae.push(re.config._destroy), z.push(re.model), !0
                }), e.invoke(e.uniq(z), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(re) {
                    re.call(this)
                }, this), this.$el.off(".stickit" + (m ? "." + m.cid : ""), L)
            },
            stickit: function(m, L) {
                var z = m || this.model,
                    ae = L || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(z, ae);
                var re = this.remove;
                return re.stickitWrapped || (this.remove = function() {
                    var ye = this;
                    return this.unstickit(), re && (ye = re.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(m, L, z) {
                var ae = m || this.model,
                    re = ".stickit." + ae.cid;
                if (z = z || {}, e.isObject(L)) {
                    var ye = L;
                    e.each(ye, function(Q, je) {
                        this.addBinding(ae, je, Q)
                    }, this);
                    return
                }
                var c = L === ":el" ? this.$el : this.$(L);
                if (this.unstickit(ae, L), !!c.length) {
                    e.isString(z) && (z = {
                        observe: z
                    }), e.isFunction(z.observe) && (z.observe = z.observe.call(this));
                    var Ee = V(c, z),
                        _e = Ee.observe;
                    Ee.selector = L, Ee.view = this;
                    var Le = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            y.call(this, Ee.destroy, c, ae, Ee)
                        }, X(c, Ee, ae, _e), J(c, Ee, ae, _e), ie(c, Ee, ae), _e) {
                        e.each(Ee.events, function(Q) {
                            var je = Q + re,
                                G = function(Te) {
                                    var ve = y.call(this, Ee.getVal, c, Te, Ee, a.call(arguments, 1)),
                                        we = S(Ee.updateModel, ve, Te, Ee);
                                    we && O(ae, _e, ve, lt, Ee)
                                },
                                se = L === ":el" ? "" : L;
                            this.$el.on(je, se, e.bind(G, this))
                        }, this), e.each(e.flatten([_e]), function(Q) {
                            I(ae, "change:" + Q, Ee, function(je, G, se) {
                                var Te = se && se.stickitChange && se.stickitChange.bindId;
                                if (Te !== Le) {
                                    var ve = R(ae, _e, Ee);
                                    oe(c, Ee, ve, ae)
                                }
                            })
                        });
                        var Ne = R(ae, _e, Ee);
                        oe(c, Ee, Ne, ae, !0)
                    }
                    y.call(this, Ee.initialize, c, ae, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(m, L) {
                var z = (L || "").split("."),
                    ae = e.reduce(z, function(re, ye) {
                        return re[ye]
                    }, m);
                return ae == null ? m : ae
            },
            y = function(m) {
                if (m = e.isString(m) ? f(this, m) : m, m) return m.apply(this, a.call(arguments, 1))
            },
            S = function(m, L, z) {
                if (e.isBoolean(m)) return m;
                if (e.isFunction(m) || e.isString(m)) {
                    var ae = e.last(arguments).view;
                    return y.apply(ae, arguments)
                }
                return !1
            },
            I = function(m, L, z, ae) {
                var re = z.view;
                m.on(L, ae, re), re._modelBindings.push({
                    model: m,
                    event: L,
                    fn: ae,
                    config: z
                })
            },
            O = function(m, L, z, ae, re) {
                var ye = {},
                    c = re.view;
                re.onSet && (z = y.call(c, re.onSet, z, re)), re.set ? y.call(c, re.set, L, z, ae, re) : (ye[L] = z, e.isArray(L) && e.isArray(z) && (ye = e.reduce(L, function(Ee, _e, Le) {
                    return Ee[_e] = e.has(z, Le) ? z[Le] : null, Ee
                }, {})), m.set(ye, ae))
            },
            R = function(m, L, z) {
                var ae = z.view,
                    re = function(Ee) {
                        return m[z.escape ? "escape" : "get"](Ee)
                    },
                    ye = function(Ee) {
                        return Ee == null ? "" : Ee
                    },
                    c = e.isArray(L) ? e.map(L, re) : re(L);
                return z.onGet && (c = y.call(ae, z.onGet, c, z)), e.isArray(c) ? e.map(c, ye) : ye(c)
            },
            V = i.getConfiguration = function(m, L) {
                var z = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(re, ye, c, Ee) {
                        re[Ee.updateMethod] && re[Ee.updateMethod](ye)
                    },
                    getVal: function(re, ye, c) {
                        return re[c.updateMethod]()
                    }
                }];
                z = z.concat(e.filter(i._handlers, function(re) {
                    return m.is(re.selector)
                })), z.push(L);
                var ae = e.extend.apply(e, z);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            X = function(m, L, z, ae) {
                var re = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = L.view;
                e.each(L.attributes || [], function(c) {
                    c = e.clone(c), c.view = ye;
                    var Ee = "",
                        _e = c.observe || (c.observe = ae),
                        Le = function() {
                            var lt = e.contains(re, c.name) ? "prop" : "attr",
                                Ne = R(z, _e, c);
                            c.name === "class" ? (m.removeClass(Ee).addClass(Ne), Ee = Ne) : m[lt](c.name, Ne)
                        };
                    e.each(e.flatten([_e]), function(lt) {
                        I(z, "change:" + lt, L, Le)
                    }), Le()
                })
            },
            ie = function(m, L, z, ae) {
                e.each(L.classes || [], function(re, ye) {
                    e.isString(re) && (re = {
                        observe: re
                    }), re.view = L.view;
                    var c = re.observe,
                        Ee = function() {
                            var _e = R(z, c, re);
                            m.toggleClass(ye, !!_e)
                        };
                    e.each(e.flatten([c]), function(_e) {
                        I(z, "change:" + _e, L, Ee)
                    }), Ee()
                })
            },
            J = function(m, L, z, ae) {
                if (L.visible != null) {
                    var re = L.view,
                        ye = function() {
                            var c = L.visible,
                                Ee = L.visibleFn,
                                _e = R(z, ae, L),
                                Le = !!_e;
                            (e.isFunction(c) || e.isString(c)) && (Le = !!y.call(re, c, _e, L)), Ee ? y.call(re, Ee, m, Le, L) : m.toggle(Le)
                        };
                    e.each(e.flatten([ae]), function(c) {
                        I(z, "change:" + c, L, ye)
                    }), ye()
                }
            },
            oe = function(m, L, z, ae, re) {
                var ye = L.view;
                !S(L.updateView, z, L) || (y.call(ye, L.update, m, z, ae, L), re || y.call(ye, L.afterUpdate, m, z, L))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(m, L) {
                m.val(L)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(m, L) {
                m.val(L)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(m, L) {
                m.filter('[value="' + L + '"]').prop("checked", !0)
            },
            getVal: function(m) {
                return m.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(m, L, z, ae) {
                if (m.length > 1) L || (L = []), m.each(function(ye, c) {
                    var Ee = n.$(c),
                        _e = e.contains(L, Ee.val());
                    Ee.prop("checked", _e)
                });
                else {
                    var re = e.isBoolean(L) ? L : L === m.val();
                    m.prop("checked", re)
                }
            },
            getVal: function(m) {
                var L;
                if (m.length > 1) L = e.reduce(m, function(ae, re) {
                    var ye = n.$(re);
                    return ye.prop("checked") && ae.push(ye.val()), ae
                }, []);
                else {
                    L = m.prop("checked");
                    var z = m.val();
                    z !== "on" && z != null && (L = L ? m.val() : null)
                }
                return L
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(m, L, z, ae) {
                var re, ye = ae.selectOptions,
                    c = ye && ye.collection || void 0,
                    Ee = m.prop("multiple");
                if (!ye) {
                    ye = {};
                    var _e = function(ue) {
                        return ue.map(function(xe, Ie) {
                            var Ve = n.$(Ie).data("stickit-bind-val");
                            return {
                                value: Ve !== void 0 ? Ve : Ie.value,
                                label: Ie.text
                            }
                        }).get()
                    };
                    m.find("optgroup").length ? (c = {
                        opt_labels: []
                    }, m.find("> option").length && (c.opt_labels.push(void 0), e.each(m.find("> option"), function(ue) {
                        c[void 0] = _e(n.$(ue))
                    })), e.each(m.find("optgroup"), function(ue) {
                        var xe = n.$(ue).attr("label");
                        c.opt_labels.push(xe), c[xe] = _e(n.$(ue).find("option"))
                    })) : c = _e(m.find("option"))
                }
                ye.valuePath = ye.valuePath || "value", ye.labelPath = ye.labelPath || "label", ye.disabledPath = ye.disabledPath || "disabled";
                var Le = function(ue, xe, Ie) {
                    e.each(ue, function(Ve) {
                        var Ke = n.$("<option/>"),
                            ct = Ve,
                            Nt = function(x, A, M) {
                                Ke.text(x), ct = A, Ke.data("stickit-bind-val", ct), !e.isArray(ct) && !e.isObject(ct) && Ke.val(ct), M === !0 && Ke.prop("disabled", "disabled")
                            },
                            Wt, E, l;
                        Ve === "__default__" ? (Wt = Ie.label, E = Ie.value, l = Ie.disabled) : (Wt = f(Ve, ye.labelPath), E = f(Ve, ye.valuePath), l = f(Ve, ye.disabledPath)), Nt(Wt, E, l);
                        var g = function() {
                            return !Ee && ct != null && Ie != null && ct === Ie ? !0 : !!(e.isObject(Ie) && e.isEqual(ct, Ie))
                        };
                        g() ? Ke.prop("selected", !0) : Ee && e.isArray(Ie) && e.each(Ie, function(x) {
                            e.isObject(x) && (x = f(x, ye.valuePath)), (x === ct || e.isObject(x) && e.isEqual(ct, x)) && Ke.prop("selected", !0)
                        }), xe.append(Ke)
                    })
                };
                if (m.find("*").remove(), e.isString(c)) {
                    var lt = window;
                    c.indexOf("this.") === 0 && (lt = this), c = c.replace(/^[a-z]*\.(.+)$/, "$1"), re = f(lt, c)
                } else e.isFunction(c) ? re = y.call(this, c, m, ae) : re = c;
                if (re instanceof n.Collection) {
                    var Ne = re,
                        Q = function() {
                            var ue = R(z, ae.observe, ae);
                            y.call(this, ae.update, m, ue, z, ae)
                        },
                        je = function() {
                            Ne.off("add remove reset sort", Q)
                        },
                        G = function() {
                            je(), Ne.off("stickit:selectRefresh"), z.off("stickit:selectRefresh")
                        };
                    Ne.trigger("stickit:selectRefresh"), Ne.once("stickit:selectRefresh", je, this), Ne.on("add remove reset sort", Q, this), z.trigger("stickit:selectRefresh"), z.once("stickit:selectRefresh", function() {
                        z.off("stickit:unstuck", G)
                    }), z.once("stickit:unstuck", G, this), re = re.toJSON()
                }
                if (ye.defaultOption) {
                    var se = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, m, ae) : ye.defaultOption;
                    Le(["__default__"], m, se)
                }
                if (e.isArray(re)) Le(re, m, L);
                else if (re.opt_labels) e.each(re.opt_labels, function(ue) {
                    var xe = n.$("<optgroup/>").attr("label", ue);
                    Le(re[ue], xe, L), m.append(xe)
                });
                else {
                    var Te = [],
                        ve;
                    for (var we in re) ve = {}, ve[ye.valuePath] = we, ve[ye.labelPath] = re[we], Te.push(ve);
                    Te = e.sortBy(Te, ye.comparator || ye.labelPath), Le(Te, m, L)
                }
            },
            getVal: function(m) {
                var L = m.find("option:selected");
                return m.prop("multiple") ? e.map(L, function(z) {
                    return n.$(z).data("stickit-bind-val")
                }) : L.data("stickit-bind-val")
            }
        }]), i
    })
})(hk);
const Ju = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    is = wt.View.extend({
        template: Je.template(Ju),
        model: new Xe.Model({}),
        className() {
            let t = "button-group btn-group";
            return this.options.block !== !1 && (t += " btn-block"), t
        },
        events: {
            "click .button": "onClick"
        },
        bindings: {
            ":el": {
                observe: "visible",
                visible(t) {
                    return t !== !1
                },
                visibleFn(t, e) {
                    t.css("display", e ? "" : "none")
                },
                attributes: [{
                    name: "class",
                    observe: ["className", "selected", "disabled", "active"],
                    onGet([t, e, n, i]) {
                        let a = "";
                        return t && (a += t), e && (a += " selected"), n && (a += " disabled"), i && (a += " active"), a
                    }
                }]
            },
            "button:first": {
                observe: ["text", "html", "label"],
                updateMethod: "html",
                onGet([t, e, n]) {
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || Me("<div />").text(t).html()
                },
                attributes: [{
                    name: "disabled",
                    observe: "disabled"
                }, {
                    name: "data-action",
                    observe: "action",
                    onGet(t) {
                        return t || "choose"
                    }
                }, {
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "data-key",
                    observe: "key"
                }, {
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        if (!t) return "";
                        let e = "";
                        return t.text && (e += `color: ${t.text};`), t.background && (e += `background-color: ${t.background};`), e
                    }
                }, {
                    name: "type",
                    observe: "action",
                    onGet(t) {
                        return t === "submit" ? "submit" : "button"
                    }
                }]
            },
            ".censor-button": {
                observe: "censorable",
                visible: !0,
                visibleFn(t, e) {
                    e || t.remove()
                },
                attributes: [{
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "class",
                    observe: ["className", "isWarned"],
                    onGet(t) {
                        if (!t) return null;
                        let e = "";
                        return t[0] && (e += t[0]), t[1] && (e += " isWarned"), e
                    }
                }]
            }
        },
        onRender() {
            this.model.set("index", this.getOption("index")), this.getOption("action") && this.model.set("action", this.getOption("action")), this.stickit()
        },
        onClick(t) {
            const e = Me(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var _i, Vr, sr = typeof Map == "function" ? new Map : (_i = [], Vr = [], {
        has: function(t) {
            return _i.indexOf(t) > -1
        },
        get: function(t) {
            return Vr[_i.indexOf(t)]
        },
        set: function(t, e) {
            _i.indexOf(t) === -1 && (_i.push(t), Vr.push(e))
        },
        delete: function(t) {
            var e = _i.indexOf(t);
            e > -1 && (_i.splice(e, 1), Vr.splice(e, 1))
        }
    }),
    Qu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Qu = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function uk(t) {
    var e = sr.get(t);
    e && e.destroy()
}

function dk(t) {
    var e = sr.get(t);
    e && e.update()
}
var Ko = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Ko = function(t) {
    return t
}).destroy = function(t) {
    return t
}, Ko.update = function(t) {
    return t
}) : ((Ko = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !sr.has(i)) {
                var a, f = null,
                    y = null,
                    S = null,
                    I = function() {
                        i.clientWidth !== y && X()
                    },
                    O = function(ie) {
                        window.removeEventListener("resize", I, !1), i.removeEventListener("input", X, !1), i.removeEventListener("keyup", X, !1), i.removeEventListener("autosize:destroy", O, !1), i.removeEventListener("autosize:update", X, !1), Object.keys(ie).forEach(function(J) {
                            i.style[J] = ie[J]
                        }), sr.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", O, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", X, !1), window.addEventListener("resize", I, !1), i.addEventListener("input", X, !1), i.addEventListener("autosize:update", X, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", sr.set(i, {
                    destroy: O,
                    update: X
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), f = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(f) && (f = 0), X()
            }

            function R(ie) {
                var J = i.style.width;
                i.style.width = "0px", i.style.width = J, i.style.overflowY = ie
            }

            function V() {
                if (i.scrollHeight !== 0) {
                    var ie = function(oe) {
                            for (var m = []; oe && oe.parentNode && oe.parentNode instanceof Element;) oe.parentNode.scrollTop && m.push({
                                node: oe.parentNode,
                                scrollTop: oe.parentNode.scrollTop
                            }), oe = oe.parentNode;
                            return m
                        }(i),
                        J = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", y = i.clientWidth, ie.forEach(function(oe) {
                        oe.node.scrollTop = oe.scrollTop
                    }), J && (document.documentElement.scrollTop = J)
                }
            }

            function X() {
                V();
                var ie = Math.round(parseFloat(i.style.height)),
                    J = window.getComputedStyle(i, null),
                    oe = J.boxSizing === "content-box" ? Math.round(parseFloat(J.height)) : i.offsetHeight;
                if (oe < ie ? J.overflowY === "hidden" && (R("scroll"), V(), oe = J.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : J.overflowY !== "hidden" && (R("hidden"), V(), oe = J.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), S !== oe) {
                    S = oe;
                    var m = Qu("autosize:resized");
                    try {
                        i.dispatchEvent(m)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], uk), t
}, Ko.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], dk), t
});
var sh = Ko;
const ck = `<form>\r
    <div class="form-group">\r
        <div class="inputGroup">\r
            <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>\r
            <span class="inlineSubmit">\r
                <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button>\r
            </span>\r
            <span id="helpBlock2" class="help-block errorText"></span>\r
            <div class="charCountDisplay"><span class="charRemaining">70</span></div>\r
        </div>\r
    </div>\r
</form>`,
    os = wt.View.extend({
        tagName: "div",
        className: "input",
        model: new Xe.Model({}),
        template: Je.template(ck),
        events: {
            "keypress textarea": "onKeypress",
            "click .inlineSubmitButton": "onSubmitClick",
            "input textarea": "onInputChange"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "hidden",
                    onGet(t) {
                        return t === !0 ? "display: none;" : "display: block;"
                    }
                }, {
                    name: "class",
                    observe: "className",
                    onGet(t) {
                        return `input ${t!==void 0?t:""}`
                    }
                }]
            },
            textarea: {
                attributes: [{
                    name: "maxlength",
                    observe: "maxLength"
                }, {
                    name: "placeholder",
                    observe: "placeholder"
                }, {
                    name: "autocapitalize",
                    observe: "autocapitalize"
                }, {
                    name: "class",
                    observe: "className",
                    onGet(t) {
                        return `form-control ${t!==void 0?t:""}`
                    }
                }]
            },
            ".inputGroup": {
                attributes: [{
                    name: "class",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "input-group" : ""
                    }
                }]
            },
            ".inlineSubmit": {
                attributes: [{
                    name: "class",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "input-group-btn" : ""
                    }
                }, {
                    name: "style",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "" : "display:none;"
                    }
                }]
            },
            ".inlineSubmitText": {
                observe: "inlineSubmitText",
                onGet(t) {
                    return t !== void 0 ? t : "Send"
                }
            },
            ".form-group": {
                attributes: [{
                    name: "class",
                    observe: "error",
                    onGet(t) {
                        return t ? "has-error" : ""
                    }
                }]
            },
            ".errorText": {
                observe: "error",
                updateMethod: "html",
                visible: !0,
                updateView: !0,
                onGet(t) {
                    return t ? typeof t == "object" ? t.html ? t.html : Me("<div />").text(t.text).html() : t : null
                }
            },
            ".charRemaining": "remaining",
            ".maxChars": "maxLength",
            ".charCountDisplay": {
                observe: ["maxLength", "counter"],
                visible(t) {
                    return t[0] && t[1]
                }
            }
        },
        render() {
            this.$el.html(this.template()), this.stickit(), this.model.set("remaining", this.model.get("maxLength"))
        },
        onAttach() {
            this.getOption("preventAutosize") || sh(Me("textarea"))
        },
        onSubmitClick() {
            return Me("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (Me("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            Me(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = Me(this.$el).find("textarea");
            Me(t).val(""), this.getOption("preventAutosize") || sh.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Me(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return nn.sanitize(this.getValue())
        },
        sanitize(t) {
            return nn.sanitize(t)
        },
        sanitizeInput(t) {
            return nn.sanitizeInput(t)
        }
    }),
    fk = '<div class="text"></div>',
    Vi = wt.View.extend({
        tagName: "div",
        template: Je.template(fk),
        model: new Xe.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : Me("<div />").text(t).html()
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "background",
                    onGet(t) {
                        return t ? `background-color: ${t};` : ""
                    }
                }, {
                    name: "class",
                    observe: "className"
                }]
            }
        },
        onRender() {
            this.stickit()
        }
    }),
    oi = wt.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? os : t.get("type") === "text" ? Vi : is
        },
        collection: new Xe.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block", "action"])
        },
        childViewOptions(t, e) {
            let n = !0,
                i;
            return t.get("block") !== void 0 ? n = t.get("block") : this.getOption("block") !== void 0 && (n = this.getOption("block")), t.get("action") !== void 0 ? i = t.get("action") : this.getOption("action") !== void 0 && (i = this.getOption("action")), {
                block: n,
                action: i,
                index: t.get("key") !== void 0 ? t.get("key") : e
            }
        }
    });
let ah = {};

function Xu(t, ...e) {
    !ah[t] || ah[t].map(n => n(...e))
}
let Zo, zr;

function Mi() {
    return Zo
}

function vs() {
    return zr
}

function pk(t) {
    if (Zo = document.getElementById(t) || t || document.querySelector("canvas"), !Zo) throw Error("You must provide a canvas element for the game");
    return zr = Zo.getContext("2d"), zr.imageSmoothingEnabled = !1, Xu("init"), {
        canvas: Zo,
        context: zr
    }
}
class sl {
    constructor({
        spriteSheet: e,
        frames: n,
        frameRate: i,
        loop: a = !0
    } = {}) {
        this.spriteSheet = e, this.frames = n, this.frameRate = i, this.loop = a;
        let {
            width: f,
            height: y,
            margin: S = 0
        } = e.frame;
        this.width = f, this.height = y, this.margin = S, this._f = 0, this._a = 0
    }
    clone() {
        return bs(this)
    }
    reset() {
        this._f = 0, this._a = 0
    }
    update(e = 1 / 60) {
        if (!(!this.loop && this._f == this.frames.length - 1))
            for (this._a += e; this._a * this.frameRate >= 1;) this._f = ++this._f % this.frames.length, this._a -= 1 / this.frameRate
    }
    render({
        x: e,
        y: n,
        width: i = this.width,
        height: a = this.height,
        context: f = vs()
    } = {}) {
        let y = this.frames[this._f] / this.spriteSheet._f | 0,
            S = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, S * this.width + (S * 2 + 1) * this.margin, y * this.height + (y * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function bs(t) {
    return new sl(t)
}
bs.prototype = sl.prototype;
bs.class = sl;
const gk = () => {};

function mk() {
    let t = Mi();
    vs().clearRect(0, 0, t.width, t.height)
}

function yk({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        y = 1 / t,
        S = e ? mk : gk,
        I, O, R, V, X;
    const ie = window.performance || Date;

    function J() {
        if (O = requestAnimationFrame(J), R = ie.now(), V = R - I, I = R, !(V > 1e3)) {
            for (Xu("tick"), a += V; a >= f;) X.update(y), a -= f;
            S(), X.render()
        }
    }
    return X = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            I = ie.now(), this.isStopped = !1, requestAnimationFrame(J)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(O)
        },
        _frame: J,
        set _last(oe) {
            I = oe
        }
    }, X
}
class wk {
    constructor({
        create: e,
        maxSize: n = 1024
    } = {}) {
        let i;
        if (!e || !(i = e()) || !(i.update && i.init && i.isAlive)) throw Error("Must provide create() function which returns an object with init(), update(), and isAlive() functions");
        this._c = e, this.objects = [e()], this.size = 0, this.maxSize = n
    }
    get(e = {}) {
        if (this.size === this.objects.length) {
            if (this.size === this.maxSize) return;
            for (let i = 0; i < this.size && this.objects.length < this.maxSize; i++) this.objects.push(this._c())
        }
        let n = this.objects[this.size];
        return this.size++, n.init(e), n
    }
    getAliveObjects() {
        return this.objects.slice(0, this.size)
    }
    clear() {
        this.size = this.objects.length = 0, this.objects.push(this._c())
    }
    update(e) {
        let n, i = !1;
        for (let a = this.size; a--;) n = this.objects[a], n.update(e), n.isAlive() || (i = !0, this.size--);
        i && this.objects.sort((a, f) => f.isAlive() - a.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
wk.prototype;

function lh(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        y = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), y && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), y && n.push(3)), n
}
class al {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Mi();
        this.bounds = i || {
            x: 0,
            y: 0,
            width: a.width,
            height: a.height
        }, this._b = !1, this._d = 0, this._o = [], this._s = [], this._p = null
    }
    clear() {
        this._s.map(function(e) {
            e.clear()
        }), this._b = !1, this._o.length = 0
    }
    get(e) {
        let n = new Set,
            i, a;
        for (; this._s.length && this._b;) {
            for (i = lh(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
            return Array.from(n)
        }
        return this._o.filter(f => f !== e)
    }
    add() {
        let e, n, i, a;
        for (n = 0; n < arguments.length; n++) {
            if (i = arguments[n], Array.isArray(i)) {
                this.add.apply(this, i);
                continue
            }
            if (this._b) {
                this._a(i);
                continue
            }
            if (this._o.push(i), this._o.length > this.maxObjects && this._d < this.maxDepth) {
                for (this._sp(), e = 0; a = this._o[e]; e++) this._a(a);
                this._o.length = 0
            }
        }
    }
    _a(e, n, i) {
        for (n = lh(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = ll({
                bounds: {
                    x: this.bounds.x + (i % 2 === 1 ? e : 0),
                    y: this.bounds.y + (i >= 2 ? n : 0),
                    width: e,
                    height: n
                },
                maxDepth: this.maxDepth,
                maxObjects: this.maxObjects
            }), this._s[i]._d = this._d + 1, this._s[i]._p = this
    }
}

function ll(t) {
    return new al(t)
}
ll.prototype = al.prototype;
ll.class = al;
class hl {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return go(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
    }
    clamp(e, n, i, a) {
        this._c = !0, this._a = e, this._b = n, this._d = i, this._e = a
    }
    get x() {
        return this._x
    }
    get y() {
        return this._y
    }
    set x(e) {
        this._x = this._c ? Math.min(Math.max(this._a, e), this._d) : e
    }
    set y(e) {
        this._y = this._c ? Math.min(Math.max(this._b, e), this._e) : e
    }
}

function go(t, e, n = {}) {
    let i = new hl(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
go.prototype = hl.prototype;
go.class = hl;
class ul {
    constructor(e) {
        this.init(e)
    }
    init(e = {}) {
        let {
            x: n,
            y: i,
            dx: a,
            dy: f,
            ddx: y,
            ddy: S,
            width: I,
            height: O,
            image: R
        } = e;
        this.position = go(n, i), this.velocity = go(a, f), this.acceleration = go(y, S), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = vs();
        for (let V in e) this[V] = e[V];
        R && (this.width = I !== void 0 ? I : R.width, this.height = O !== void 0 ? O : R.height), this.sx = 0, this.sy = 0
    }
    get x() {
        return this.position.x
    }
    get y() {
        return this.position.y
    }
    get dx() {
        return this.velocity.x
    }
    get dy() {
        return this.velocity.y
    }
    get ddx() {
        return this.acceleration.x
    }
    get ddy() {
        return this.acceleration.y
    }
    get animations() {
        return this._a
    }
    get viewX() {
        return this.x - this.sx
    }
    get viewY() {
        return this.y - this.sy
    }
    get width() {
        return this._w
    }
    get height() {
        return this._h
    }
    set x(e) {
        this.position.x = e
    }
    set y(e) {
        this.position.y = e
    }
    set dx(e) {
        this.velocity.x = e
    }
    set dy(e) {
        this.velocity.y = e
    }
    set ddx(e) {
        this.acceleration.x = e
    }
    set ddy(e) {
        this.acceleration.y = e
    }
    set animations(e) {
        let n, i;
        this._a = {};
        for (n in e) this._a[n] = e[n].clone(), i = i || this._a[n];
        this.currentAnimation = i, this.width = this.width || i.width, this.height = this.height || i.height
    }
    set viewX(e) {}
    set viewY(e) {}
    set width(e) {
        let n = e < 0 ? -1 : 1;
        this._fx = n, this._w = e * n
    }
    set height(e) {
        let n = e < 0 ? -1 : 1;
        this._fy = n, this._h = e * n
    }
    isAlive() {
        return this.ttl > 0
    }
    collidesWith(e) {
        if (this.rotation || e.rotation) return null;
        let n = this.x - this.width * this.anchor.x,
            i = this.y - this.height * this.anchor.y,
            a = e.x,
            f = e.y;
        return e.anchor && (a -= e.width * e.anchor.x, f -= e.height * e.anchor.y), n < a + e.width && n + this.width > a && i < f + e.height && i + this.height > f
    }
    update(e) {
        this.advance(e)
    }
    render() {
        this.draw()
    }
    playAnimation(e) {
        this.currentAnimation = this.animations[e], this.currentAnimation.loop || this.currentAnimation.reset()
    }
    advance(e) {
        this.velocity = this.velocity.add(this.acceleration, e), this.position = this.position.add(this.velocity, e), this.ttl--, this.currentAnimation && this.currentAnimation.update(e)
    }
    draw() {
        let e = -this.width * this.anchor.x,
            n = -this.height * this.anchor.y;
        if (this.context.save(), this.context.translate(this.viewX, this.viewY), this.rotation && this.context.rotate(this.rotation), this._fx == -1 || this._fy == -1) {
            let i = this.width / 2 + e,
                a = this.height / 2 + n;
            this.context.translate(i, a), this.context.scale(this._fx, this._fy), this.context.translate(-i, -a)
        }
        this.image ? this.context.drawImage(this.image, e, n, this.width, this.height) : this.currentAnimation ? this.currentAnimation.render({
            x: e,
            y: n,
            width: this.width,
            height: this.height,
            context: this.context
        }) : (this.context.fillStyle = this.color, this.context.fillRect(e, n, this.width, this.height)), this.context.restore()
    }
}

function dl(t) {
    return new ul(t)
}
dl.prototype = ul.prototype;
dl.class = ul;

function vk(t) {
    if (+t === t) return t;
    let e = [],
        n = t.split(".."),
        i = +n[0],
        a = +n[1],
        f = i;
    if (i < a)
        for (; f <= a; f++) e.push(f);
    else
        for (; f >= a; f--) e.push(f);
    return e
}
class bk {
    constructor({
        image: e,
        frameWidth: n,
        frameHeight: i,
        frameMargin: a,
        animations: f
    } = {}) {
        if (!e) throw Error("You must provide an Image for the SpriteSheet");
        this.animations = {}, this.image = e, this.frame = {
            width: n,
            height: i,
            margin: a
        }, this._f = e.width / n | 0, this.createAnimations(f)
    }
    createAnimations(e) {
        let n, i;
        for (i in e) {
            let {
                frames: a,
                frameRate: f,
                loop: y
            } = e[i];
            if (n = [], a === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(a).map(S => {
                n = n.concat(vk(S))
            }), this.animations[i] = bs({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: y
            })
        }
    }
}
bk.prototype;
var Ku = {
    exports: {}
};
/*!
 * sweetalert2 v11.4.26
 * Released under the MIT License.
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i()
    })(yt, function() {
        const n = "SweetAlert2:",
            i = h => {
                const d = [];
                for (let b = 0; b < h.length; b++) d.indexOf(h[b]) === -1 && d.push(h[b]);
                return d
            },
            a = h => h.charAt(0).toUpperCase() + h.slice(1),
            f = h => {
                console.warn("".concat(n, " ").concat(typeof h == "object" ? h.join(" ") : h))
            },
            y = h => {
                console.error("".concat(n, " ").concat(h))
            },
            S = [],
            I = h => {
                S.includes(h) || (S.push(h), f(h))
            },
            O = (h, d) => {
                I('"'.concat(h, '" is deprecated and will be removed in the next major release. Please use "').concat(d, '" instead.'))
            },
            R = h => typeof h == "function" ? h() : h,
            V = h => h && typeof h.toPromise == "function",
            X = h => V(h) ? h.toPromise() : Promise.resolve(h),
            ie = h => h && Promise.resolve(h) === h,
            J = h => h[Math.floor(Math.random() * h.length)],
            oe = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                footer: "",
                icon: void 0,
                iconColor: void 0,
                iconHtml: void 0,
                template: void 0,
                toast: !1,
                showClass: {
                    popup: "swal2-show",
                    backdrop: "swal2-backdrop-show",
                    icon: "swal2-icon-show"
                },
                hideClass: {
                    popup: "swal2-hide",
                    backdrop: "swal2-backdrop-hide",
                    icon: "swal2-icon-hide"
                },
                customClass: {},
                target: "body",
                color: void 0,
                backdrop: !0,
                heightAuto: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                stopKeydownPropagation: !0,
                keydownListenerCapture: !1,
                showConfirmButton: !0,
                showDenyButton: !1,
                showCancelButton: !1,
                preConfirm: void 0,
                preDeny: void 0,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: void 0,
                denyButtonText: "No",
                denyButtonAriaLabel: "",
                denyButtonColor: void 0,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: void 0,
                buttonsStyling: !0,
                reverseButtons: !1,
                focusConfirm: !0,
                focusDeny: !1,
                focusCancel: !1,
                returnFocus: !0,
                showCloseButton: !1,
                closeButtonHtml: "&times;",
                closeButtonAriaLabel: "Close this dialog",
                loaderHtml: "",
                showLoaderOnConfirm: !1,
                showLoaderOnDeny: !1,
                imageUrl: void 0,
                imageWidth: void 0,
                imageHeight: void 0,
                imageAlt: "",
                timer: void 0,
                timerProgressBar: !1,
                width: void 0,
                padding: void 0,
                background: void 0,
                input: void 0,
                inputPlaceholder: "",
                inputLabel: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputAttributes: {},
                inputValidator: void 0,
                returnInputValueOnDeny: !1,
                validationMessage: void 0,
                grow: !1,
                position: "center",
                progressSteps: [],
                currentProgressStep: void 0,
                progressStepsDistance: void 0,
                willOpen: void 0,
                didOpen: void 0,
                didRender: void 0,
                willClose: void 0,
                didClose: void 0,
                didDestroy: void 0,
                scrollbarPadding: !0
            },
            m = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            L = {},
            z = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = h => Object.prototype.hasOwnProperty.call(oe, h),
            re = h => m.indexOf(h) !== -1,
            ye = h => L[h],
            c = h => {
                ae(h) || f('Unknown parameter "'.concat(h, '"'))
            },
            Ee = h => {
                z.includes(h) && f('The parameter "'.concat(h, '" is incompatible with toasts'))
            },
            _e = h => {
                ye(h) && O(h, ye(h))
            },
            Le = h => {
                !h.backdrop && h.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const d in h) c(d), h.toast && Ee(d), _e(d)
            },
            lt = "swal2-",
            Ne = h => {
                const d = {};
                for (const b in h) d[h[b]] = lt + h[b];
                return d
            },
            Q = Ne(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            je = Ne(["success", "warning", "info", "question", "error"]),
            G = () => document.body.querySelector(".".concat(Q.container)),
            se = h => {
                const d = G();
                return d ? d.querySelector(h) : null
            },
            Te = h => se(".".concat(h)),
            ve = () => Te(Q.popup),
            we = () => Te(Q.icon),
            ue = () => Te(Q.title),
            xe = () => Te(Q["html-container"]),
            Ie = () => Te(Q.image),
            Ve = () => Te(Q["progress-steps"]),
            Ke = () => Te(Q["validation-message"]),
            ct = () => se(".".concat(Q.actions, " .").concat(Q.confirm)),
            Nt = () => se(".".concat(Q.actions, " .").concat(Q.deny)),
            Wt = () => Te(Q["input-label"]),
            E = () => se(".".concat(Q.loader)),
            l = () => se(".".concat(Q.actions, " .").concat(Q.cancel)),
            g = () => Te(Q.actions),
            x = () => Te(Q.footer),
            A = () => Te(Q["timer-progress-bar"]),
            M = () => Te(Q.close),
            D = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
            te = () => {
                const h = Array.from(ve().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, N) => {
                        const ge = parseInt(b.getAttribute("tabindex")),
                            Fe = parseInt(N.getAttribute("tabindex"));
                        return ge > Fe ? 1 : ge < Fe ? -1 : 0
                    }),
                    d = Array.from(ve().querySelectorAll(D)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(h.concat(d)).filter(b => pe(b))
            },
            Se = () => Ct(document.body, Q.shown) && !Ct(document.body, Q["toast-shown"]) && !Ct(document.body, Q["no-backdrop"]),
            de = () => ve() && Ct(ve(), Q.toast),
            Oe = () => ve().hasAttribute("data-loading"),
            Re = {
                previousBodyPadding: null
            },
            ot = (h, d) => {
                if (h.textContent = "", d) {
                    const N = new DOMParser().parseFromString(d, "text/html");
                    Array.from(N.querySelector("head").childNodes).forEach(ge => {
                        h.appendChild(ge)
                    }), Array.from(N.querySelector("body").childNodes).forEach(ge => {
                        h.appendChild(ge)
                    })
                }
            },
            Ct = (h, d) => {
                if (!d) return !1;
                const b = d.split(/\s+/);
                for (let N = 0; N < b.length; N++)
                    if (!h.classList.contains(b[N])) return !1;
                return !0
            },
            on = (h, d) => {
                Array.from(h.classList).forEach(b => {
                    !Object.values(Q).includes(b) && !Object.values(je).includes(b) && !Object.values(d.showClass).includes(b) && h.classList.remove(b)
                })
            },
            ht = (h, d, b) => {
                if (on(h, d), d.customClass && d.customClass[b]) {
                    if (typeof d.customClass[b] != "string" && !d.customClass[b].forEach) return f("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof d.customClass[b], '"'));
                    Ze(h, d.customClass[b])
                }
            },
            vt = (h, d) => {
                if (!d) return null;
                switch (d) {
                    case "select":
                    case "textarea":
                    case "file":
                        return h.querySelector(".".concat(Q.popup, " > .").concat(Q[d]));
                    case "checkbox":
                        return h.querySelector(".".concat(Q.popup, " > .").concat(Q.checkbox, " input"));
                    case "radio":
                        return h.querySelector(".".concat(Q.popup, " > .").concat(Q.radio, " input:checked")) || h.querySelector(".".concat(Q.popup, " > .").concat(Q.radio, " input:first-child"));
                    case "range":
                        return h.querySelector(".".concat(Q.popup, " > .").concat(Q.range, " input"));
                    default:
                        return h.querySelector(".".concat(Q.popup, " > .").concat(Q.input))
                }
            },
            kt = h => {
                if (h.focus(), h.type !== "file") {
                    const d = h.value;
                    h.value = "", h.value = d
                }
            },
            Qt = (h, d, b) => {
                !h || !d || (typeof d == "string" && (d = d.split(/\s+/).filter(Boolean)), d.forEach(N => {
                    Array.isArray(h) ? h.forEach(ge => {
                        b ? ge.classList.add(N) : ge.classList.remove(N)
                    }) : b ? h.classList.add(N) : h.classList.remove(N)
                }))
            },
            Ze = (h, d) => {
                Qt(h, d, !0)
            },
            Mt = (h, d) => {
                Qt(h, d, !1)
            },
            $ = (h, d) => {
                const b = Array.from(h.children);
                for (let N = 0; N < b.length; N++) {
                    const ge = b[N];
                    if (ge instanceof HTMLElement && Ct(ge, d)) return ge
                }
            },
            B = (h, d, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? h.style[d] = typeof b == "number" ? "".concat(b, "px") : b : h.style.removeProperty(d)
            },
            U = function(h) {
                let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                h.style.display = d
            },
            P = h => {
                h.style.display = "none"
            },
            W = (h, d, b, N) => {
                const ge = h.querySelector(d);
                ge && (ge.style[b] = N)
            },
            fe = function(h, d) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                d ? U(h, b) : P(h)
            },
            pe = h => !!(h && (h.offsetWidth || h.offsetHeight || h.getClientRects().length)),
            Be = () => !pe(ct()) && !pe(Nt()) && !pe(l()),
            De = h => h.scrollHeight > h.clientHeight,
            pt = h => {
                const d = window.getComputedStyle(h),
                    b = parseFloat(d.getPropertyValue("animation-duration") || "0"),
                    N = parseFloat(d.getPropertyValue("transition-duration") || "0");
                return b > 0 || N > 0
            },
            $t = function(h) {
                let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const b = A();
                pe(b) && (d && (b.style.transition = "none", b.style.width = "100%"), setTimeout(() => {
                    b.style.transition = "width ".concat(h / 1e3, "s linear"), b.style.width = "0%"
                }, 10))
            },
            Qe = () => {
                const h = A(),
                    d = parseInt(window.getComputedStyle(h).width);
                h.style.removeProperty("transition"), h.style.width = "100%";
                const b = parseInt(window.getComputedStyle(h).width),
                    N = d / b * 100;
                h.style.removeProperty("transition"), h.style.width = "".concat(N, "%")
            },
            On = () => typeof window > "u" || typeof document > "u",
            Ln = 100,
            rt = {},
            Rn = () => {
                rt.previousActiveElement instanceof HTMLElement ? (rt.previousActiveElement.focus(), rt.previousActiveElement = null) : document.body && document.body.focus()
            },
            mi = h => new Promise(d => {
                if (!h) return d();
                const b = window.scrollX,
                    N = window.scrollY;
                rt.restoreFocusTimeout = setTimeout(() => {
                    Rn(), d()
                }, Ln), window.scrollTo(b, N)
            }),
            To = `
 <div aria-labelledby="`.concat(Q.title, '" aria-describedby="').concat(Q["html-container"], '" class="').concat(Q.popup, `" tabindex="-1">
   <button type="button" class="`).concat(Q.close, `"></button>
   <ul class="`).concat(Q["progress-steps"], `"></ul>
   <div class="`).concat(Q.icon, `"></div>
   <img class="`).concat(Q.image, `" />
   <h2 class="`).concat(Q.title, '" id="').concat(Q.title, `"></h2>
   <div class="`).concat(Q["html-container"], '" id="').concat(Q["html-container"], `"></div>
   <input class="`).concat(Q.input, `" />
   <input type="file" class="`).concat(Q.file, `" />
   <div class="`).concat(Q.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(Q.select, `"></select>
   <div class="`).concat(Q.radio, `"></div>
   <label for="`).concat(Q.checkbox, '" class="').concat(Q.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(Q.label, `"></span>
   </label>
   <textarea class="`).concat(Q.textarea, `"></textarea>
   <div class="`).concat(Q["validation-message"], '" id="').concat(Q["validation-message"], `"></div>
   <div class="`).concat(Q.actions, `">
     <div class="`).concat(Q.loader, `"></div>
     <button type="button" class="`).concat(Q.confirm, `"></button>
     <button type="button" class="`).concat(Q.deny, `"></button>
     <button type="button" class="`).concat(Q.cancel, `"></button>
   </div>
   <div class="`).concat(Q.footer, `"></div>
   <div class="`).concat(Q["timer-progress-bar-container"], `">
     <div class="`).concat(Q["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            Tn = () => {
                const h = G();
                return h ? (h.remove(), Mt([document.documentElement, document.body], [Q["no-backdrop"], Q["toast-shown"], Q["has-column"]]), !0) : !1
            },
            rn = () => {
                rt.currentInstance.resetValidationMessage()
            },
            _o = () => {
                const h = ve(),
                    d = $(h, Q.input),
                    b = $(h, Q.file),
                    N = h.querySelector(".".concat(Q.range, " input")),
                    ge = h.querySelector(".".concat(Q.range, " output")),
                    Fe = $(h, Q.select),
                    Gt = h.querySelector(".".concat(Q.checkbox, " input")),
                    Dn = $(h, Q.textarea);
                d.oninput = rn, b.onchange = rn, Fe.onchange = rn, Gt.onchange = rn, Dn.oninput = rn, N.oninput = () => {
                    rn(), ge.value = N.value
                }, N.onchange = () => {
                    rn(), ge.value = N.value
                }
            },
            Ao = h => typeof h == "string" ? document.querySelector(h) : h,
            yi = h => {
                const d = ve();
                d.setAttribute("role", h.toast ? "alert" : "dialog"), d.setAttribute("aria-live", h.toast ? "polite" : "assertive"), h.toast || d.setAttribute("aria-modal", "true")
            },
            $i = h => {
                window.getComputedStyle(h).direction === "rtl" && Ze(G(), Q.rtl)
            },
            wi = h => {
                const d = Tn();
                if (On()) {
                    y("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = Q.container, d && Ze(b, Q["no-transition"]), ot(b, To);
                const N = Ao(h.target);
                N.appendChild(b), yi(h), $i(N), _o()
            },
            vi = (h, d) => {
                h instanceof HTMLElement ? d.appendChild(h) : typeof h == "object" ? ji(h, d) : h && ot(d, h)
            },
            ji = (h, d) => {
                h.jquery ? Hi(d, h) : ot(d, h.toString())
            },
            Hi = (h, d) => {
                if (h.textContent = "", 0 in d)
                    for (let b = 0; b in d; b++) h.appendChild(d[b].cloneNode(!0));
                else h.appendChild(d.cloneNode(!0))
            },
            yn = (() => {
                if (On()) return !1;
                const h = document.createElement("div"),
                    d = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const b in d)
                    if (Object.prototype.hasOwnProperty.call(d, b) && typeof h.style[b] < "u") return d[b];
                return !1
            })(),
            Fi = () => {
                const h = document.createElement("div");
                h.className = Q["scrollbar-measure"], document.body.appendChild(h);
                const d = h.getBoundingClientRect().width - h.clientWidth;
                return document.body.removeChild(h), d
            },
            bi = (h, d) => {
                const b = g(),
                    N = E();
                !d.showConfirmButton && !d.showDenyButton && !d.showCancelButton ? P(b) : U(b), ht(b, d, "actions"), Fn(b, N, d), ot(N, d.loaderHtml), ht(N, d, "loader")
            };

        function Fn(h, d, b) {
            const N = ct(),
                ge = Nt(),
                Fe = l();
            ki(N, "confirm", b), ki(ge, "deny", b), ki(Fe, "cancel", b), Gi(N, ge, Fe, b), b.reverseButtons && (b.toast ? (h.insertBefore(Fe, N), h.insertBefore(ge, N)) : (h.insertBefore(Fe, d), h.insertBefore(ge, d), h.insertBefore(N, d)))
        }

        function Gi(h, d, b, N) {
            if (!N.buttonsStyling) return Mt([h, d, b], Q.styled);
            Ze([h, d, b], Q.styled), N.confirmButtonColor && (h.style.backgroundColor = N.confirmButtonColor, Ze(h, Q["default-outline"])), N.denyButtonColor && (d.style.backgroundColor = N.denyButtonColor, Ze(d, Q["default-outline"])), N.cancelButtonColor && (b.style.backgroundColor = N.cancelButtonColor, Ze(b, Q["default-outline"]))
        }

        function ki(h, d, b) {
            fe(h, b["show".concat(a(d), "Button")], "inline-block"), ot(h, b["".concat(d, "ButtonText")]), h.setAttribute("aria-label", b["".concat(d, "ButtonAriaLabel")]), h.className = Q[d], ht(h, b, "".concat(d, "Button")), Ze(h, b["".concat(d, "ButtonClass")])
        }
        const tt = (h, d) => {
            const b = G();
            !b || (w(b, d.backdrop), s(b, d.position), k(b, d.grow), ht(b, d, "container"))
        };

        function w(h, d) {
            typeof d == "string" ? h.style.background = d : d || Ze([document.documentElement, document.body], Q["no-backdrop"])
        }

        function s(h, d) {
            d in Q ? Ze(h, Q[d]) : (f('The "position" parameter is not valid, defaulting to "center"'), Ze(h, Q.center))
        }

        function k(h, d) {
            if (d && typeof d == "string") {
                const b = "grow-".concat(d);
                b in Q && Ze(h, Q[b])
            }
        }
        var _ = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const K = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            ke = (h, d) => {
                const b = ve(),
                    N = _.innerParams.get(h),
                    ge = !N || d.input !== N.input;
                K.forEach(Fe => {
                    const Gt = $(b, Q[Fe]);
                    Ut(Fe, d.inputAttributes), Gt.className = Q[Fe], ge && P(Gt)
                }), d.input && (ge && ze(d), Gn(d))
            },
            ze = h => {
                if (!jt[h.input]) return y('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(h.input, '"'));
                const d = qo(h.input),
                    b = jt[h.input](d, h);
                U(d), setTimeout(() => {
                    kt(b)
                })
            },
            Ot = h => {
                for (let d = 0; d < h.attributes.length; d++) {
                    const b = h.attributes[d].name;
                    ["type", "value", "style"].includes(b) || h.removeAttribute(b)
                }
            },
            Ut = (h, d) => {
                const b = vt(ve(), h);
                if (!!b) {
                    Ot(b);
                    for (const N in d) b.setAttribute(N, d[N])
                }
            },
            Gn = h => {
                const d = qo(h.input);
                typeof h.customClass == "object" && Ze(d, h.customClass.input)
            },
            Bn = (h, d) => {
                (!h.placeholder || d.inputPlaceholder) && (h.placeholder = d.inputPlaceholder)
            },
            Wn = (h, d, b) => {
                if (b.inputLabel) {
                    h.id = Q.input;
                    const N = document.createElement("label"),
                        ge = Q["input-label"];
                    N.setAttribute("for", h.id), N.className = ge, typeof b.customClass == "object" && Ze(N, b.customClass.inputLabel), N.innerText = b.inputLabel, d.insertAdjacentElement("beforebegin", N)
                }
            },
            qo = h => $(ve(), Q[h] || Q.input),
            Yt = (h, d) => {
                ["string", "number"].includes(typeof d) ? h.value = "".concat(d) : ie(d) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof d, '"'))
            },
            jt = {};
        jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = (h, d) => (Yt(h, d.inputValue), Wn(h, h, d), Bn(h, d), h.type = d.input, h), jt.file = (h, d) => (Wn(h, h, d), Bn(h, d), h), jt.range = (h, d) => {
            const b = h.querySelector("input"),
                N = h.querySelector("output");
            return Yt(b, d.inputValue), b.type = d.input, Yt(N, d.inputValue), Wn(b, h, d), h
        }, jt.select = (h, d) => {
            if (h.textContent = "", d.inputPlaceholder) {
                const b = document.createElement("option");
                ot(b, d.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, h.appendChild(b)
            }
            return Wn(h, h, d), h
        }, jt.radio = h => (h.textContent = "", h), jt.checkbox = (h, d) => {
            const b = vt(ve(), "checkbox");
            b.value = "1", b.id = Q.checkbox, b.checked = Boolean(d.inputValue);
            const N = h.querySelector("span");
            return ot(N, d.inputPlaceholder), b
        }, jt.textarea = (h, d) => {
            Yt(h, d.inputValue), Bn(h, d), Wn(h, h, d);
            const b = N => parseInt(window.getComputedStyle(N).marginLeft) + parseInt(window.getComputedStyle(N).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const N = parseInt(window.getComputedStyle(ve()).width),
                        ge = () => {
                            const Fe = h.offsetWidth + b(h);
                            Fe > N ? ve().style.width = "".concat(Fe, "px") : ve().style.width = null
                        };
                    new MutationObserver(ge).observe(h, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), h
        };
        const Wi = (h, d) => {
                const b = xe();
                ht(b, d, "htmlContainer"), d.html ? (vi(d.html, b), U(b, "block")) : d.text ? (b.textContent = d.text, U(b, "block")) : P(b), ke(h, d)
            },
            Cs = (h, d) => {
                const b = x();
                fe(b, d.footer), d.footer && vi(d.footer, b), ht(b, d, "footer")
            },
            Es = (h, d) => {
                const b = M();
                ot(b, d.closeButtonHtml), ht(b, d, "closeButton"), fe(b, d.showCloseButton), b.setAttribute("aria-label", d.closeButtonAriaLabel)
            },
            Oo = (h, d) => {
                const b = _.innerParams.get(h),
                    N = we();
                if (b && d.icon === b.icon) {
                    wr(N, d), Ro(N, d);
                    return
                }
                if (!d.icon && !d.iconHtml) {
                    P(N);
                    return
                }
                if (d.icon && Object.keys(je).indexOf(d.icon) === -1) {
                    y('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon, '"')), P(N);
                    return
                }
                U(N), wr(N, d), Ro(N, d), Ze(N, d.showClass.icon)
            },
            Ro = (h, d) => {
                for (const b in je) d.icon !== b && Mt(h, je[b]);
                Ze(h, je[d.icon]), kn(h, d), zi(), ht(h, d, "icon")
            },
            zi = () => {
                const h = ve(),
                    d = window.getComputedStyle(h).getPropertyValue("background-color"),
                    b = h.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let N = 0; N < b.length; N++) b[N].style.backgroundColor = d
            },
            yr = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
            xs = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            wr = (h, d) => {
                let b = h.innerHTML,
                    N;
                d.iconHtml ? N = Po(d.iconHtml) : d.icon === "success" ? (N = yr, b = b.replace(/ style=".*?"/g, "")) : d.icon === "error" ? N = xs : N = Po({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [d.icon]), b.trim() !== N.trim() && ot(h, N)
            },
            kn = (h, d) => {
                if (!!d.iconColor) {
                    h.style.color = d.iconColor, h.style.borderColor = d.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) W(h, b, "backgroundColor", d.iconColor);
                    W(h, ".swal2-success-ring", "borderColor", d.iconColor)
                }
            },
            Po = h => '<div class="'.concat(Q["icon-content"], '">').concat(h, "</div>"),
            Ci = (h, d) => {
                const b = Ie();
                if (!d.imageUrl) return P(b);
                U(b, ""), b.setAttribute("src", d.imageUrl), b.setAttribute("alt", d.imageAlt), B(b, "width", d.imageWidth), B(b, "height", d.imageHeight), b.className = Q.image, ht(b, d, "image")
            },
            Ss = (h, d) => {
                const b = Ve();
                if (!d.progressSteps || d.progressSteps.length === 0) return P(b);
                U(b), b.textContent = "", d.currentProgressStep >= d.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), d.progressSteps.forEach((N, ge) => {
                    const Fe = Is(N);
                    if (b.appendChild(Fe), ge === d.currentProgressStep && Ze(Fe, Q["active-progress-step"]), ge !== d.progressSteps.length - 1) {
                        const Gt = zn(d);
                        b.appendChild(Gt)
                    }
                })
            },
            Is = h => {
                const d = document.createElement("li");
                return Ze(d, Q["progress-step"]), ot(d, h), d
            },
            zn = h => {
                const d = document.createElement("li");
                return Ze(d, Q["progress-step-line"]), h.progressStepsDistance && B(d, "width", h.progressStepsDistance), d
            },
            Un = (h, d) => {
                const b = ue();
                fe(b, d.title || d.titleText, "block"), d.title && vi(d.title, b), d.titleText && (b.innerText = d.titleText), ht(b, d, "title")
            },
            Mo = (h, d) => {
                const b = G(),
                    N = ve();
                d.toast ? (B(b, "width", d.width), N.style.width = "100%", N.insertBefore(E(), we())) : B(N, "width", d.width), B(N, "padding", d.padding), d.color && (N.style.color = d.color), d.background && (N.style.background = d.background), P(Ke()), Ts(N, d)
            },
            Ts = (h, d) => {
                h.className = "".concat(Q.popup, " ").concat(pe(h) ? d.showClass.popup : ""), d.toast ? (Ze([document.documentElement, document.body], Q["toast-shown"]), Ze(h, Q.toast)) : Ze(h, Q.modal), ht(h, d, "popup"), typeof d.customClass == "string" && Ze(h, d.customClass), d.icon && Ze(h, Q["icon-".concat(d.icon)])
            },
            Lo = (h, d) => {
                Mo(h, d), tt(h, d), Ss(h, d), Oo(h, d), Ci(h, d), Un(h, d), Es(h, d), Wi(h, d), bi(h, d), Cs(h, d), typeof d.didRender == "function" && d.didRender(ve())
            },
            Yn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            Ei = () => {
                Array.from(document.body.children).forEach(d => {
                    d === G() || d.contains(G()) || (d.hasAttribute("aria-hidden") && d.setAttribute("data-previous-aria-hidden", d.getAttribute("aria-hidden")), d.setAttribute("aria-hidden", "true"))
                })
            },
            Bo = () => {
                Array.from(document.body.children).forEach(d => {
                    d.hasAttribute("data-previous-aria-hidden") ? (d.setAttribute("aria-hidden", d.getAttribute("data-previous-aria-hidden")), d.removeAttribute("data-previous-aria-hidden")) : d.removeAttribute("aria-hidden")
                })
            },
            Ui = ["swal-title", "swal-html", "swal-footer"],
            _s = h => {
                const d = typeof h.template == "string" ? document.querySelector(h.template) : h.template;
                if (!d) return {};
                const b = d.content;
                return Ps(b), Object.assign(vr(b), As(b), qs(b), Do(b), Os(b), Rs(b, Ui))
            },
            vr = h => {
                const d = {};
                return Array.from(h.querySelectorAll("swal-param")).forEach(N => {
                    Jn(N, ["name", "value"]);
                    const ge = N.getAttribute("name"),
                        Fe = N.getAttribute("value");
                    typeof oe[ge] == "boolean" && Fe === "false" && (d[ge] = !1), typeof oe[ge] == "object" && (d[ge] = JSON.parse(Fe))
                }), d
            },
            As = h => {
                const d = {};
                return Array.from(h.querySelectorAll("swal-button")).forEach(N => {
                    Jn(N, ["type", "color", "aria-label"]);
                    const ge = N.getAttribute("type");
                    d["".concat(ge, "ButtonText")] = N.innerHTML, d["show".concat(a(ge), "Button")] = !0, N.hasAttribute("color") && (d["".concat(ge, "ButtonColor")] = N.getAttribute("color")), N.hasAttribute("aria-label") && (d["".concat(ge, "ButtonAriaLabel")] = N.getAttribute("aria-label"))
                }), d
            },
            qs = h => {
                const d = {},
                    b = h.querySelector("swal-image");
                return b && (Jn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (d.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (d.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (d.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (d.imageAlt = b.getAttribute("alt"))), d
            },
            Do = h => {
                const d = {},
                    b = h.querySelector("swal-icon");
                return b && (Jn(b, ["type", "color"]), b.hasAttribute("type") && (d.icon = b.getAttribute("type")), b.hasAttribute("color") && (d.iconColor = b.getAttribute("color")), d.iconHtml = b.innerHTML), d
            },
            Os = h => {
                const d = {},
                    b = h.querySelector("swal-input");
                b && (Jn(b, ["type", "label", "placeholder", "value"]), d.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (d.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (d.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (d.inputValue = b.getAttribute("value")));
                const N = Array.from(h.querySelectorAll("swal-input-option"));
                return N.length && (d.inputOptions = {}, N.forEach(ge => {
                    Jn(ge, ["value"]);
                    const Fe = ge.getAttribute("value"),
                        Gt = ge.innerHTML;
                    d.inputOptions[Fe] = Gt
                })), d
            },
            Rs = (h, d) => {
                const b = {};
                for (const N in d) {
                    const ge = d[N],
                        Fe = h.querySelector(ge);
                    Fe && (Jn(Fe, []), b[ge.replace(/^swal-/, "")] = Fe.innerHTML.trim())
                }
                return b
            },
            Ps = h => {
                const d = Ui.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(h.children).forEach(b => {
                    const N = b.tagName.toLowerCase();
                    d.indexOf(N) === -1 && f("Unrecognized element <".concat(N, ">"))
                })
            },
            Jn = (h, d) => {
                Array.from(h.attributes).forEach(b => {
                    d.indexOf(b.name) === -1 && f(['Unrecognized attribute "'.concat(b.name, '" on <').concat(h.tagName.toLowerCase(), ">."), "".concat(d.length ? "Allowed attributes are: ".concat(d.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var br = {
            email: (h, d) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(h) ? Promise.resolve() : Promise.resolve(d || "Invalid email address"),
            url: (h, d) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(h) ? Promise.resolve() : Promise.resolve(d || "Invalid URL")
        };

        function Ms(h) {
            h.inputValidator || Object.keys(br).forEach(d => {
                h.input === d && (h.inputValidator = br[d])
            })
        }

        function Ls(h) {
            (!h.target || typeof h.target == "string" && !document.querySelector(h.target) || typeof h.target != "string" && !h.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), h.target = "body")
        }

        function kr(h) {
            Ms(h), h.showLoaderOnConfirm && !h.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Ls(h), typeof h.title == "string" && (h.title = h.title.split(`
`).join("<br />")), wi(h)
        }
        class No {
            constructor(d, b) {
                this.callback = d, this.remaining = b, this.running = !1, this.start()
            }
            start() {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
            stop() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
            }
            increase(d) {
                const b = this.running;
                return b && this.stop(), this.remaining += d, b && this.start(), this.remaining
            }
            getTimerLeft() {
                return this.running && (this.stop(), this.start()), this.remaining
            }
            isRunning() {
                return this.running
            }
        }
        const Cr = () => {
                Re.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Re.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Re.previousBodyPadding + Fi(), "px"))
            },
            Vo = () => {
                Re.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Re.previousBodyPadding, "px"), Re.previousBodyPadding = null)
            },
            Er = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, Q.iosfix)) {
                    const d = document.body.scrollTop;
                    document.body.style.top = "".concat(d * -1, "px"), Ze(document.body, Q.iosfix), $o(), xr()
                }
            },
            xr = () => {
                const h = navigator.userAgent,
                    d = !!h.match(/iPad/i) || !!h.match(/iPhone/i),
                    b = !!h.match(/WebKit/i);
                d && b && !h.match(/CriOS/i) && ve().scrollHeight > window.innerHeight - 44 && (G().style.paddingBottom = "".concat(44, "px"))
            },
            $o = () => {
                const h = G();
                let d;
                h.ontouchstart = b => {
                    d = Bs(b)
                }, h.ontouchmove = b => {
                    d && (b.preventDefault(), b.stopPropagation())
                }
            },
            Bs = h => {
                const d = h.target,
                    b = G();
                return Ds(h) || Ns(h) ? !1 : d === b || !De(b) && d.tagName !== "INPUT" && d.tagName !== "TEXTAREA" && !(De(xe()) && xe().contains(d))
            },
            Ds = h => h.touches && h.touches.length && h.touches[0].touchType === "stylus",
            Ns = h => h.touches && h.touches.length > 1,
            xi = () => {
                if (Ct(document.body, Q.iosfix)) {
                    const h = parseInt(document.body.style.top, 10);
                    Mt(document.body, Q.iosfix), document.body.style.top = "", document.body.scrollTop = h * -1
                }
            },
            jo = 10,
            Ho = h => {
                const d = G(),
                    b = ve();
                typeof h.willOpen == "function" && h.willOpen(b);
                const ge = window.getComputedStyle(document.body).overflowY;
                o(d, b, h), setTimeout(() => {
                    Vs(d, b)
                }, jo), Se() && ($s(d, h.scrollbarPadding, ge), Ei()), !de() && !rt.previousActiveElement && (rt.previousActiveElement = document.activeElement), typeof h.didOpen == "function" && setTimeout(() => h.didOpen(b)), Mt(d, Q["no-transition"])
            },
            Sr = h => {
                const d = ve();
                if (h.target !== d) return;
                const b = G();
                d.removeEventListener(yn, Sr), b.style.overflowY = "auto"
            },
            Vs = (h, d) => {
                yn && pt(d) ? (h.style.overflowY = "hidden", d.addEventListener(yn, Sr)) : h.style.overflowY = "auto"
            },
            $s = (h, d, b) => {
                Er(), d && b !== "hidden" && Cr(), setTimeout(() => {
                    h.scrollTop = 0
                })
            },
            o = (h, d, b) => {
                Ze(h, b.showClass.backdrop), d.style.setProperty("opacity", "0", "important"), U(d, "grid"), setTimeout(() => {
                    Ze(d, b.showClass.popup), d.style.removeProperty("opacity")
                }, jo), Ze([document.documentElement, document.body], Q.shown), b.heightAuto && b.backdrop && !b.toast && Ze([document.documentElement, document.body], Q["height-auto"])
            },
            r = h => {
                let d = ve();
                d || new _t, d = ve();
                const b = E();
                de() ? P(we()) : u(d, h), U(b), d.setAttribute("data-loading", "true"), d.setAttribute("aria-busy", "true"), d.focus()
            },
            u = (h, d) => {
                const b = g(),
                    N = E();
                !d && pe(ct()) && (d = ct()), U(b), d && (P(d), N.setAttribute("data-button-to-replace", d.className)), N.parentNode.insertBefore(N, d), Ze([h, b], Q.loading)
            },
            p = (h, d) => {
                d.input === "select" || d.input === "radio" ? F(h, d) : ["text", "email", "number", "tel", "textarea"].includes(d.input) && (V(d.inputValue) || ie(d.inputValue)) && (r(ct()), Z(h, d))
            },
            v = (h, d) => {
                const b = h.getInput();
                if (!b) return null;
                switch (d.input) {
                    case "checkbox":
                        return C(b);
                    case "radio":
                        return T(b);
                    case "file":
                        return H(b);
                    default:
                        return d.inputAutoTrim ? b.value.trim() : b.value
                }
            },
            C = h => h.checked ? 1 : 0,
            T = h => h.checked ? h.value : null,
            H = h => h.files.length ? h.getAttribute("multiple") !== null ? h.files : h.files[0] : null,
            F = (h, d) => {
                const b = ve(),
                    N = ge => le[d.input](b, be(ge), d);
                V(d.inputOptions) || ie(d.inputOptions) ? (r(ct()), X(d.inputOptions).then(ge => {
                    h.hideLoading(), N(ge)
                })) : typeof d.inputOptions == "object" ? N(d.inputOptions) : y("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof d.inputOptions))
            },
            Z = (h, d) => {
                const b = h.getInput();
                P(b), X(d.inputValue).then(N => {
                    b.value = d.input === "number" ? parseFloat(N) || 0 : "".concat(N), U(b), b.focus(), h.hideLoading()
                }).catch(N => {
                    y("Error in inputValue promise: ".concat(N)), b.value = "", U(b), b.focus(), h.hideLoading()
                })
            },
            le = {
                select: (h, d, b) => {
                    const N = $(h, Q.select),
                        ge = (Fe, Gt, Dn) => {
                            const pn = document.createElement("option");
                            pn.value = Dn, ot(pn, Gt), pn.selected = ne(Dn, b.inputValue), Fe.appendChild(pn)
                        };
                    d.forEach(Fe => {
                        const Gt = Fe[0],
                            Dn = Fe[1];
                        if (Array.isArray(Dn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Gt, pn.disabled = !1, N.appendChild(pn), Dn.forEach(io => ge(pn, io[1], io[0]))
                        } else ge(N, Dn, Gt)
                    }), N.focus()
                },
                radio: (h, d, b) => {
                    const N = $(h, Q.radio);
                    d.forEach(Fe => {
                        const Gt = Fe[0],
                            Dn = Fe[1],
                            pn = document.createElement("input"),
                            io = document.createElement("label");
                        pn.type = "radio", pn.name = Q.radio, pn.value = Gt, ne(Gt, b.inputValue) && (pn.checked = !0);
                        const Ks = document.createElement("span");
                        ot(Ks, Dn), Ks.className = Q.label, io.appendChild(pn), io.appendChild(Ks), N.appendChild(io)
                    });
                    const ge = N.querySelectorAll("input");
                    ge.length && ge[0].focus()
                }
            },
            be = h => {
                const d = [];
                return typeof Map < "u" && h instanceof Map ? h.forEach((b, N) => {
                    let ge = b;
                    typeof ge == "object" && (ge = be(ge)), d.push([N, ge])
                }) : Object.keys(h).forEach(b => {
                    let N = h[b];
                    typeof N == "object" && (N = be(N)), d.push([b, N])
                }), d
            },
            ne = (h, d) => d && d.toString() === h.toString();

        function he() {
            const h = _.innerParams.get(this);
            if (!h) return;
            const d = _.domCache.get(this);
            P(d.loader), de() ? h.icon && U(we()) : We(d), Mt([d.popup, d.actions], Q.loading), d.popup.removeAttribute("aria-busy"), d.popup.removeAttribute("data-loading"), d.confirmButton.disabled = !1, d.denyButton.disabled = !1, d.cancelButton.disabled = !1
        }
        const We = h => {
            const d = h.popup.getElementsByClassName(h.loader.getAttribute("data-button-to-replace"));
            d.length ? U(d[0], "inline-block") : Be() && P(h.actions)
        };

        function st(h) {
            const d = _.innerParams.get(h || this),
                b = _.domCache.get(h || this);
            return b ? vt(b.popup, d.input) : null
        }
        var $e = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const Ht = () => pe(ve()),
            Bt = () => ct() && ct().click(),
            un = () => Nt() && Nt().click(),
            xt = () => l() && l().click(),
            nt = h => {
                h.keydownTarget && h.keydownHandlerAdded && (h.keydownTarget.removeEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !1)
            },
            sn = (h, d, b, N) => {
                nt(d), b.toast || (d.keydownHandler = ge => Yi(h, ge, N), d.keydownTarget = b.keydownListenerCapture ? window : ve(), d.keydownListenerCapture = b.keydownListenerCapture, d.keydownTarget.addEventListener("keydown", d.keydownHandler, {
                    capture: d.keydownListenerCapture
                }), d.keydownHandlerAdded = !0)
            },
            ft = (h, d, b) => {
                const N = te();
                if (N.length) return d = d + b, d === N.length ? d = 0 : d === -1 && (d = N.length - 1), N[d].focus();
                ve().focus()
            },
            Rt = ["ArrowRight", "ArrowDown"],
            Si = ["ArrowLeft", "ArrowUp"],
            Yi = (h, d, b) => {
                const N = _.innerParams.get(h);
                !N || d.isComposing || d.keyCode === 229 || (N.stopKeydownPropagation && d.stopPropagation(), d.key === "Enter" ? dn(h, d, N) : d.key === "Tab" ? Qn(d, N) : [...Rt, ...Si].includes(d.key) ? Xn(d.key) : d.key === "Escape" && an(d, N, b))
            },
            dn = (h, d, b) => {
                if (!!R(b.allowEnterKey) && d.target && h.getInput() && d.target instanceof HTMLElement && d.target.outerHTML === h.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Bt(), d.preventDefault()
                }
            },
            Qn = (h, d) => {
                const b = h.target,
                    N = te();
                let ge = -1;
                for (let Fe = 0; Fe < N.length; Fe++)
                    if (b === N[Fe]) {
                        ge = Fe;
                        break
                    } h.shiftKey ? ft(d, ge, -1) : ft(d, ge, 1), h.stopPropagation(), h.preventDefault()
            },
            Xn = h => {
                const d = ct(),
                    b = Nt(),
                    N = l();
                if (document.activeElement instanceof HTMLElement && ![d, b, N].includes(document.activeElement)) return;
                const ge = Rt.includes(h) ? "nextElementSibling" : "previousElementSibling";
                let Fe = document.activeElement;
                for (let Gt = 0; Gt < g().children.length; Gt++) {
                    if (Fe = Fe[ge], !Fe) return;
                    if (Fe instanceof HTMLButtonElement && pe(Fe)) break
                }
                Fe instanceof HTMLButtonElement && Fe.focus()
            },
            an = (h, d, b) => {
                R(d.allowEscapeKey) && (h.preventDefault(), b(Yn.esc))
            };

        function Pn(h, d, b, N) {
            de() ? _r(h, N) : (mi(b).then(() => _r(h, N)), nt(rt)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (d.setAttribute("style", "display:none !important"), d.removeAttribute("class"), d.innerHTML = "") : d.remove(), Se() && (Vo(), xi(), Bo()), wn()
        }

        function wn() {
            Mt([document.documentElement, document.body], [Q.shown, Q["height-auto"], Q["no-backdrop"], Q["toast-shown"]])
        }

        function Cn(h) {
            h = Zn(h);
            const d = $e.swalPromiseResolve.get(this),
                b = Kn(this);
            this.isAwaitingPromise() ? h.isDismissed || (gt(this), d(h)) : b && d(h)
        }

        function Ir() {
            return !!_.awaitingPromise.get(this)
        }
        const Kn = h => {
            const d = ve();
            if (!d) return !1;
            const b = _.innerParams.get(h);
            if (!b || Ct(d, b.hideClass.popup)) return !1;
            Mt(d, b.showClass.popup), Ze(d, b.hideClass.popup);
            const N = G();
            return Mt(N, b.showClass.backdrop), Ze(N, b.hideClass.backdrop), Tr(h, d, b), !0
        };

        function Fo(h) {
            const d = $e.swalPromiseReject.get(this);
            gt(this), d && d(h)
        }
        const gt = h => {
                h.isAwaitingPromise() && (_.awaitingPromise.delete(h), _.innerParams.get(h) || h._destroy())
            },
            Zn = h => typeof h > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, h),
            Tr = (h, d, b) => {
                const N = G(),
                    ge = yn && pt(d);
                typeof b.willClose == "function" && b.willClose(d), ge ? Go(h, d, N, b.returnFocus, b.didClose) : Pn(h, N, b.returnFocus, b.didClose)
            },
            Go = (h, d, b, N, ge) => {
                rt.swalCloseEventFinishedCallback = Pn.bind(null, h, b, N, ge), d.addEventListener(yn, function(Fe) {
                    Fe.target === d && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback)
                })
            },
            _r = (h, d) => {
                setTimeout(() => {
                    typeof d == "function" && d.bind(h.params)(), h._destroy()
                })
            };

        function Ii(h, d, b) {
            const N = _.domCache.get(h);
            d.forEach(ge => {
                N[ge].disabled = b
            })
        }

        function Ar(h, d) {
            if (!h) return !1;
            if (h.type === "radio") {
                const N = h.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < N.length; ge++) N[ge].disabled = d
            } else h.disabled = d
        }

        function qr() {
            Ii(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function js() {
            Ii(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function Hs() {
            return Ar(this.getInput(), !1)
        }

        function Fs() {
            return Ar(this.getInput(), !0)
        }

        function Ji(h) {
            const d = _.domCache.get(this),
                b = _.innerParams.get(this);
            ot(d.validationMessage, h), d.validationMessage.className = Q["validation-message"], b.customClass && b.customClass.validationMessage && Ze(d.validationMessage, b.customClass.validationMessage), U(d.validationMessage);
            const N = this.getInput();
            N && (N.setAttribute("aria-invalid", !0), N.setAttribute("aria-describedby", Q["validation-message"]), kt(N), Ze(N, Q.inputerror))
        }

        function Gs() {
            const h = _.domCache.get(this);
            h.validationMessage && P(h.validationMessage);
            const d = this.getInput();
            d && (d.removeAttribute("aria-invalid"), d.removeAttribute("aria-describedby"), Mt(d, Q.inputerror))
        }

        function Ws() {
            return _.domCache.get(this).progressSteps
        }

        function zs(h) {
            const d = ve(),
                b = _.innerParams.get(this);
            if (!d || Ct(d, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const N = Ti(h),
                ge = Object.assign({}, b, N);
            Lo(this, ge), _.innerParams.set(this, ge), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, h),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Ti = h => {
            const d = {};
            return Object.keys(h).forEach(b => {
                re(b) ? d[b] = h[b] : f("Invalid parameter to update: ".concat(b))
            }), d
        };

        function Us() {
            const h = _.domCache.get(this),
                d = _.innerParams.get(this);
            if (!d) {
                _n(this);
                return
            }
            h.popup && rt.swalCloseEventFinishedCallback && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback), typeof d.didDestroy == "function" && d.didDestroy(), Wo(this)
        }
        const Wo = h => {
                _n(h), delete h.params, delete rt.keydownHandler, delete rt.keydownTarget, delete rt.currentInstance
            },
            _n = h => {
                h.isAwaitingPromise() ? (En(_, h), _.awaitingPromise.set(h, !0)) : (En($e, h), En(_, h))
            },
            En = (h, d) => {
                for (const b in h) h[b].delete(d)
            };
        var zo = Object.freeze({
            hideLoading: he,
            disableLoading: he,
            getInput: st,
            close: Cn,
            isAwaitingPromise: Ir,
            rejectPromise: Fo,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: qr,
            disableButtons: js,
            enableInput: Hs,
            disableInput: Fs,
            showValidationMessage: Ji,
            resetValidationMessage: Gs,
            getProgressSteps: Ws,
            update: zs,
            _destroy: Us
        });
        const Or = h => {
                const d = _.innerParams.get(h);
                h.disableButtons(), d.input ? St(h, "confirm") : Ki(h, !0)
            },
            Rr = h => {
                const d = _.innerParams.get(h);
                h.disableButtons(), d.returnInputValueOnDeny ? St(h, "deny") : cn(h, !1)
            },
            Ys = (h, d) => {
                h.disableButtons(), d(Yn.cancel)
            },
            St = (h, d) => {
                const b = _.innerParams.get(h);
                if (!b.input) {
                    y('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(d)));
                    return
                }
                const N = v(h, b);
                b.inputValidator ? Qi(h, N, d) : h.getInput().checkValidity() ? d === "deny" ? cn(h, N) : Ki(h, N) : (h.enableButtons(), h.showValidationMessage(b.validationMessage))
            },
            Qi = (h, d, b) => {
                const N = _.innerParams.get(h);
                h.disableInput(), Promise.resolve().then(() => X(N.inputValidator(d, N.validationMessage))).then(Fe => {
                    h.enableButtons(), h.enableInput(), Fe ? h.showValidationMessage(Fe) : b === "deny" ? cn(h, d) : Ki(h, d)
                })
            },
            cn = (h, d) => {
                const b = _.innerParams.get(h || void 0);
                b.showLoaderOnDeny && r(Nt()), b.preDeny ? (_.awaitingPromise.set(h || void 0, !0), Promise.resolve().then(() => X(b.preDeny(d, b.validationMessage))).then(ge => {
                    ge === !1 ? (h.hideLoading(), gt(h)) : h.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? d : ge
                    })
                }).catch(ge => Xi(h || void 0, ge))) : h.close({
                    isDenied: !0,
                    value: d
                })
            },
            vn = (h, d) => {
                h.close({
                    isConfirmed: !0,
                    value: d
                })
            },
            Xi = (h, d) => {
                h.rejectPromise(d)
            },
            Ki = (h, d) => {
                const b = _.innerParams.get(h || void 0);
                b.showLoaderOnConfirm && r(), b.preConfirm ? (h.resetValidationMessage(), _.awaitingPromise.set(h || void 0, !0), Promise.resolve().then(() => X(b.preConfirm(d, b.validationMessage))).then(ge => {
                    pe(Ke()) || ge === !1 ? (h.hideLoading(), gt(h)) : vn(h, typeof ge > "u" ? d : ge)
                }).catch(ge => Xi(h || void 0, ge))) : vn(h, d)
            },
            Js = (h, d, b) => {
                _.innerParams.get(h).toast ? Qs(h, d, b) : (Uo(d), Mr(d), Zi(h, d, b))
            },
            Qs = (h, d, b) => {
                d.popup.onclick = () => {
                    const N = _.innerParams.get(h);
                    N && (Pr(N) || N.timer || N.input) || b(Yn.close)
                }
            },
            Pr = h => h.showConfirmButton || h.showDenyButton || h.showCancelButton || h.showCloseButton;
        let An = !1;
        const Uo = h => {
                h.popup.onmousedown = () => {
                    h.container.onmouseup = function(d) {
                        h.container.onmouseup = void 0, d.target === h.container && (An = !0)
                    }
                }
            },
            Mr = h => {
                h.container.onmousedown = () => {
                    h.popup.onmouseup = function(d) {
                        h.popup.onmouseup = void 0, (d.target === h.popup || h.popup.contains(d.target)) && (An = !0)
                    }
                }
            },
            Zi = (h, d, b) => {
                d.container.onclick = N => {
                    const ge = _.innerParams.get(h);
                    if (An) {
                        An = !1;
                        return
                    }
                    N.target === d.container && R(ge.allowOutsideClick) && b(Yn.backdrop)
                }
            },
            eo = h => typeof h == "object" && h.jquery,
            to = h => h instanceof Element || eo(h),
            Xs = h => {
                const d = {};
                return typeof h[0] == "object" && !to(h[0]) ? Object.assign(d, h[0]) : ["title", "html", "icon"].forEach((b, N) => {
                    const ge = h[N];
                    typeof ge == "string" || to(ge) ? d[b] = ge : ge !== void 0 && y("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), d
            };

        function no() {
            const h = this;
            for (var d = arguments.length, b = new Array(d), N = 0; N < d; N++) b[N] = arguments[N];
            return new h(...b)
        }

        function Yo(h) {
            class d extends this {
                _main(N, ge) {
                    return super._main(N, Object.assign({}, h, ge))
                }
            }
            return d
        }
        const Jo = () => rt.timeout && rt.timeout.getTimerLeft(),
            Lr = () => {
                if (rt.timeout) return Qe(), rt.timeout.stop()
            },
            q = () => {
                if (rt.timeout) {
                    const h = rt.timeout.start();
                    return $t(h), h
                }
            },
            j = () => {
                const h = rt.timeout;
                return h && (h.running ? Lr() : q())
            },
            Y = h => {
                if (rt.timeout) {
                    const d = rt.timeout.increase(h);
                    return $t(d, !0), d
                }
            },
            ce = () => rt.timeout && rt.timeout.isRunning();
        let ee = !1;
        const me = {};

        function Ce() {
            let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            me[h] = this, ee || (document.body.addEventListener("click", Ae), ee = !0)
        }
        const Ae = h => {
            for (let d = h.target; d && d !== document; d = d.parentNode)
                for (const b in me) {
                    const N = d.getAttribute(b);
                    if (N) {
                        me[b].fire({
                            template: N
                        });
                        return
                    }
                }
        };
        var Pe = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: re,
            isDeprecatedParameter: ye,
            argsToParams: Xs,
            isVisible: Ht,
            clickConfirm: Bt,
            clickDeny: un,
            clickCancel: xt,
            getContainer: G,
            getPopup: ve,
            getTitle: ue,
            getHtmlContainer: xe,
            getImage: Ie,
            getIcon: we,
            getInputLabel: Wt,
            getCloseButton: M,
            getActions: g,
            getConfirmButton: ct,
            getDenyButton: Nt,
            getCancelButton: l,
            getLoader: E,
            getFooter: x,
            getTimerProgressBar: A,
            getFocusableElements: te,
            getValidationMessage: Ke,
            isLoading: Oe,
            fire: no,
            mixin: Yo,
            showLoading: r,
            enableLoading: r,
            getTimerLeft: Jo,
            stopTimer: Lr,
            resumeTimer: q,
            toggleTimer: j,
            increaseTimer: Y,
            isTimerRunning: ce,
            bindClickHandler: Ce
        });
        let He;
        class Ge {
            constructor() {
                if (typeof window > "u") return;
                He = this;
                for (var d = arguments.length, b = new Array(d), N = 0; N < d; N++) b[N] = arguments[N];
                const ge = Object.freeze(this.constructor.argsToParams(b));
                Object.defineProperties(this, {
                    params: {
                        value: ge,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const Fe = He._main(He.params);
                _.promise.set(this, Fe)
            }
            _main(d) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Le(Object.assign({}, b, d)), rt.currentInstance && (rt.currentInstance._destroy(), Se() && Bo()), rt.currentInstance = He;
                const N = dt(d, b);
                kr(N), Object.freeze(N), rt.timeout && (rt.timeout.stop(), delete rt.timeout), clearTimeout(rt.restoreFocusTimeout);
                const ge = Tt(He);
                return Lo(He, N), _.innerParams.set(He, N), Ye(He, ge, N)
            }
            then(d) {
                return _.promise.get(this).then(d)
            } finally(d) {
                return _.promise.get(this).finally(d)
            }
        }
        const Ye = (h, d, b) => new Promise((N, ge) => {
                const Fe = Gt => {
                    h.closePopup({
                        isDismissed: !0,
                        dismiss: Gt
                    })
                };
                $e.swalPromiseResolve.set(h, N), $e.swalPromiseReject.set(h, ge), d.confirmButton.onclick = () => Or(h), d.denyButton.onclick = () => Rr(h), d.cancelButton.onclick = () => Ys(h, Fe), d.closeButton.onclick = () => Fe(Yn.close), Js(h, d, Fe), sn(h, rt, b, Fe), p(h, b), Ho(b), Ue(rt, b, Fe), Ft(d, b), setTimeout(() => {
                    d.container.scrollTop = 0
                })
            }),
            dt = (h, d) => {
                const b = _s(h),
                    N = Object.assign({}, oe, d, b, h);
                return N.showClass = Object.assign({}, oe.showClass, N.showClass), N.hideClass = Object.assign({}, oe.hideClass, N.hideClass), N
            },
            Tt = h => {
                const d = {
                    popup: ve(),
                    container: G(),
                    actions: g(),
                    confirmButton: ct(),
                    denyButton: Nt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: M(),
                    validationMessage: Ke(),
                    progressSteps: Ve()
                };
                return _.domCache.set(h, d), d
            },
            Ue = (h, d, b) => {
                const N = A();
                P(N), d.timer && (h.timeout = new No(() => {
                    b("timer"), delete h.timeout
                }, d.timer), d.timerProgressBar && (U(N), ht(N, d, "timerProgressBar"), setTimeout(() => {
                    h.timeout && h.timeout.running && $t(d.timer)
                })))
            },
            Ft = (h, d) => {
                if (!d.toast) {
                    if (!R(d.allowEnterKey)) return fn();
                    Xt(h, d) || ft(d, -1, 1)
                }
            },
            Xt = (h, d) => d.focusDeny && pe(h.denyButton) ? (h.denyButton.focus(), !0) : d.focusCancel && pe(h.cancelButton) ? (h.cancelButton.focus(), !0) : d.focusConfirm && pe(h.confirmButton) ? (h.confirmButton.focus(), !0) : !1,
            fn = () => {
                document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
            };
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
            const h = document.createElement("div");
            h.className = "leave-russia-now-and-apply-your-skills-to-the-world";
            const d = J([{
                text: `\u0412 \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0442\u043E\u043C,
        <strong>\u0447\u0442\u043E\u0431\u044B \u044D\u0442\u0430 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u0431\u0435\u0441\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043D\u0430\u044F \u0432\u043E\u0439\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C</strong>:`,
                id: "4CfDhaRkw7I"
            }, {
                text: "\u042D\u043C\u043F\u0430\u0442\u0438\u044F - \u0433\u043B\u0430\u0432\u043D\u043E\u0435 <strong>\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0435</strong> \u0447\u0443\u0432\u0441\u0442\u0432\u043E. \u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044C. <strong>\u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E.</strong>",
                id: "s-GLAIY4DXA"
            }]);
            ot(h, `
      <div>
        \u0415\u0441\u043B\u0438 \u043C\u044B \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C \u0432\u043E\u0439\u043D\u0443, \u043E\u043D\u0430 \u043F\u0440\u0438\u0434\u0435\u0442 \u0432 \u0434\u043E\u043C <strong>\u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043D\u0430\u0441</strong> \u0438 \u0435\u0451 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0431\u0443\u0434\u0443\u0442 <strong>\u0443\u0436\u0430\u0441\u0430\u044E\u0449\u0438\u043C\u0438</strong>.
      </div>
      <div>
        \u041F\u0443\u0442\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u0437\u0430 20 \u0441 \u043B\u0438\u0448\u043D\u0438\u043C \u043B\u0435\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0434\u043E\u043B\u0431\u0438\u043B \u043D\u0430\u043C, \u0447\u0442\u043E \u043C\u044B \u0431\u0435\u0441\u0441\u0438\u043B\u044C\u043D\u044B \u0438 \u043E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C. <strong>\u042D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A!</strong>
      </div>
      <div>
        `.concat(d.text, `
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/`).concat(d.id, `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
        \u041D\u0435\u0442 \u0432\u043E\u0439\u043D\u0435!
      </div>
      `));
            const b = document.createElement("button");
            b.innerHTML = "&times;", b.onclick = () => h.remove(), h.appendChild(b), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(h)
                }, 1e3)
            })
        }
        Object.assign(Ge.prototype, zo), Object.assign(Ge, Pe), Object.keys(zo).forEach(h => {
            Ge[h] = function() {
                if (He) return He[h](...arguments)
            }
        }), Ge.DismissReason = Yn, Ge.version = "11.4.26";
        const _t = Ge;
        return _t.default = _t, _t
    }), typeof yt < "u" && yt.Sweetalert2 && (yt.swal = yt.sweetAlert = yt.Swal = yt.SweetAlert = yt.Sweetalert2), typeof document < "u" && function(n, i) {
        var a = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.disabled || (a.styleSheet.cssText = i);
        else try {
            a.innerHTML = i
        } catch {
            a.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(Ku);
const mn = Ku.exports;
class At {
    static get DismissReason() {
        return mn.DismissReason
    }
    static show(e, n = {}) {
        switch (mn.isVisible() && mn.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
            case "alert":
                return this.showAlert(n);
            case "custom":
                return this.showCustom(n);
            case "error":
                return this.showError(n);
            case "toast":
                return this.showToast(n);
            default:
                console.warn("Unknown alert type", e)
        }
        return !1
    }
    static close() {
        mn.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", mn.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp5/ydkj2018/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), mn.fire(e)
    }
    static async showCustom(e) {
        return mn.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", mn.fire(e)
    }
}
const kk = `<div class="canvasContainer">\r
    <video id="cameraVideo" class="cameraVideo" autoplay playsinline class=""></video>\r
    <canvas id='cameraCanvas' class="cameraCanvas resizableCanvas" width="300px" height="408px" class=""></canvas>\r
    <img id="cameraImage" class="cameraImage visuallyhidden" />\r
</div>\r
<div class="cameraControls">\r
    <button id="exitButton" class="button exitButton"></button>\r
    <div class="buttons pre">\r
        <button id="switchButton" class="button switchButton"></button>\r
        <button id="snapshotButton" class="button snapshotButton"></button>\r
    </div>\r
    <div class="buttons post">\r
        <button id="cancelButton" class="button cancelButton"></button>\r
        <button id="confirmButton" class="button confirmButton"></button>\r
    </div>\r
</div>\r
<div style="display:none;">\r
    <img id="Mask" src='../../general/images/oval.png' />\r
</div>`,
    Ck = {
        type: "camera",
        width: 300,
        height: 408,
        offsetX: 0,
        offsetY: 0,
        transmitting: !1,
        previewImage: null,
        mirror: !0,
        mask: !0,
        update(t) {
            if (this.video || (this.video = document.getElementById("cameraVideo")), this.image || (this.image = document.getElementById("Mask")), !this.video || !this.image) return;
            const e = this.video.videoWidth,
                n = this.video.videoHeight,
                i = Mi().width,
                a = Mi().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = vs();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Mi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Mi().width, Mi().height))
        }
    },
    Ek = wt.View.extend({
        template: Je.template(kk),
        className: "CameraUser",
        model: new Xe.Model({
            image: null,
            width: 300,
            height: 408,
            transmitting: !1,
            access: !1,
            showSwitchButton: !1
        }),
        sprites: [],
        bindings: {
            ".pre": {
                classes: {
                    visible: {
                        observe: "image",
                        onGet(t) {
                            return !t
                        }
                    }
                }
            },
            ".post": {
                classes: {
                    visible: {
                        observe: "image",
                        onGet(t) {
                            return t
                        }
                    }
                }
            }
        },
        events: {
            "click #switchButton": "switchClicked",
            "click #snapshotButton": "snapshotClicked",
            "click #confirmButton": "confirmClicked",
            "click #cancelButton": "cancelClicked",
            "click #exitButton": "exitClicked"
        },
        initialize() {
            this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), this.update()
        },
        update() {
            !this.cameraSprite || (this.model.get("image") ? (this.previewImage = this.previewImage || new Image, this.previewImage.onload = () => {
                this.cameraSprite.preview = this.previewImage
            }, this.previewImage.src = this.model.get("image")) : this.cameraSprite.preview = null, this.cameraSprite.transmitting = this.model.get("transmitting"), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), this.$("#cameraCanvas").width(`${this.model.get("width")}px`), this.$("#cameraCanvas").height(`${this.model.get("height")}px`), this.onResize())
        },
        onRender() {
            this.stickit()
        },
        onAttach() {
            const t = this;
            pk("cameraCanvas"), t.sprites = [], t.gameLoop = yk({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = dl(Ck), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
        },
        async startCamera() {
            this.canvas = document.getElementById("cameraCanvas"), this.image = document.getElementById("cameraImage"), this.video = document.getElementById("cameraVideo");
            const t = this.altOption || "drawing";
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const n = {
                    video: {
                        facingMode: this.facingMode,
                        width: 1280
                    },
                    audio: !1
                };
                try {
                    const i = await navigator.mediaDevices.getUserMedia(n),
                        a = await navigator.mediaDevices.enumerateDevices();
                    this.currentStream = i, this.video.srcObject = i, await this.video.play(), this.gotDevices(a)
                } catch (i) {
                    console.error(i), At.show("alert", {
                        titleText: "Unable to Access Camera",
                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else At.show("alert", {
                titleText: "No Camera Access",
                text: `It looks like camera access isn't available from this browser. Try the ${t} option instead.`,
                willClose: () => {
                    this.cameraAccessDenied()
                }
            })
        },
        gotDevices(t) {
            let e = 0;
            t.forEach(n => {
                n.kind === "videoinput" && (e += 1)
            }), this.model.set("showSwitchButton", e > 1)
        },
        stopMediaTracks() {
            this.currentStream.getTracks().forEach(e => {
                e.stop()
            }), this.video.srcObject = null, this.model.unset("image")
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext);
            const t = this;
            for (let n = 0; n < t.sprites.length; n++) t.sprites[n].ttl = 0;
            t.gameLoop.update(1 / 60), t.gameLoop.stop(), this.currentStream && this.stopMediaTracks();
            const e = document.getElementsByClassName("pt-page");
            !e.length || (e[0].style.display = "table", e[0].style.display = "block")
        },
        switchClicked() {
            this.currentStream && this.stopMediaTracks(), this.facingMode = this.facingMode === "user" ? "environment" : "user", this.cameraSprite.mirror = this.facingMode === "user", this.startCamera()
        },
        snapshotClicked() {
            const t = this.canvas.toDataURL();
            this.model.set("image", t), this.model.set("transmitting", !1)
        },
        confirmClicked() {
            const t = this.model.get("sizesToSend") || [{
                    width: this.model.get("width"),
                    height: this.model.get("height")
                }],
                e = [];
            t.forEach(n => {
                if (!n.width || !n.height) return;
                const i = document.createElement("canvas");
                i.width = n.width, i.height = n.height;
                const a = i.getContext("2d");
                this.previewImage && a.drawImage(this.previewImage, 0, 0, i.width, i.height), this.model.set("transmitting", !0);
                const f = i.toDataURL().split(",")[1];
                e.push({
                    size: n,
                    picture: f
                })
            }), this.triggerMethod("camera:snapshot", e)
        },
        cancelClicked() {
            this.model.unset("image")
        },
        exitClicked() {
            this.triggerMethod("camera:exit")
        },
        cameraAccessDenied() {
            this.model.set("failed", !0), this.triggerMethod("camera:exit")
        },
        onResize() {
            const t = this.model.get("width"),
                e = this.model.get("height");
            if (!t || !e) return;
            const n = document.getElementById("cameraCanvas"),
                i = Me(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(Me(window).innerHeight(), 250),
                y = Math.min(a / t, f / e),
                S = t * y,
                I = e * y;
            n.style.width = `${S}px`, n.style.height = `${I}px`, n.width = S, n.height = I
        }
    }),
    ai = Xe.Model.extend({
        defaults: {},
        set(t, e) {
            const n = Je.extend({}, this.attributes, this.defaults, t);
            return Xe.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = Je.extend({}, this.defaults, this.attributes, t);
            return Xe.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    xk = ai.extend({
        defaults: {
            size: {
                width: 300,
                height: 408
            },
            sizesToSend: null,
            mask: !0,
            strings: {
                exitButton: "X",
                switchButton: `
                <svg width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-switch"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M 7.96875 2.578125 C 7.144531 2.578125 6.371094 2.8125 5.652344 3.289062
                        C 4.933594 3.753906 4.367188 4.394531 3.945312 5.210938
                        C 3.527344 6.03125 3.316406 6.921875 3.316406 7.878906 L 3.316406 8.058594 L 3.324219 8.242188
                        L 1.917969 8.347656 L 1.90625 7.878906 C 1.882812 7.273438 1.945312 6.683594 2.085938 6.113281
                        C 2.226562 5.542969 2.433594 4.992188 2.703125 4.457031
                        C 3.242188 3.378906 3.972656 2.527344 4.898438 1.898438
                        C 5.832031 1.273438 6.851562 0.960938 7.957031 0.960938
                        C 8.984375 0.960938 9.949219 1.242188 10.851562 1.808594 L 12.203125 0.15625 L 12.558594 4.71875
                        L 8.328125 4.882812 L 9.847656 3.023438 C 9.546875 2.875 9.238281 2.761719 8.925781 2.6875
                        C 8.617188 2.613281 8.296875 2.578125 7.96875 2.578125 Z M 12.632812 7.558594
                        L 14.03125 7.453125 L 14.039062 7.6875 L 14.039062 7.921875
                        C 14.039062 9.160156 13.761719 10.316406 13.210938 11.394531
                        C 12.664062 12.476562 11.929688 13.320312 11.007812 13.929688
                        C 10.089844 14.53125 9.082031 14.832031 7.980469 14.832031
                        C 6.992188 14.832031 6.035156 14.554688 5.105469 13.992188 L 3.746094 15.644531
                        L 3.394531 11.074219 L 7.621094 10.917969 L 6.101562 12.777344
                        C 6.402344 12.925781 6.710938 13.039062 7.027344 13.113281
                        C 7.339844 13.1875 7.65625 13.222656 7.980469 13.222656
                        C 8.835938 13.222656 9.613281 12.988281 10.316406 12.511719
                        C 11.039062 12.035156 11.601562 11.378906 12.007812 10.554688
                        C 12.433594 9.726562 12.644531 8.839844 12.644531 7.898438 L 12.644531 7.738281
                        Z M 12.632812 7.558594 "
                />
            </svg>`,
                snapshotButton: `
                <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-camera"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3
                            H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12
                            a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172
                            a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828
                            A2 2 0 0 1 3.172 4H2z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                    <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
            `,
                cancelButton: "Cancel",
                confirmButton: "Confirm"
            }
        }
    }),
    Sk = wt.View.extend({
        template: Je.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new xk,
        regions: {
            camera: "#cameraRegion"
        },
        bindings: {
            "#exitButton": {
                observe: "strings",
                onGet: t => t.exitButton
            },
            "#switchButton": {
                observe: "strings",
                updateMethod: "html",
                onGet: t => t.switchButton
            },
            "#snapshotButton": {
                observe: "strings",
                updateMethod: "html",
                onGet: t => t.snapshotButton
            },
            "#cancelButton": {
                observe: "strings",
                onGet: t => t.cancelButton
            },
            "#confirmButton": {
                observe: "strings",
                onGet: t => t.confirmButton
            }
        },
        initialize(t) {
            this.cameraView = this.cameraView || new Ek(t), this.listenTo(this.model, "change", this.update, this), this.update()
        },
        update() {
            this.cameraView.model.set("width", this.model.get("size").width), this.cameraView.model.set("height", this.model.get("size").height), this.cameraView.model.set("mask", this.model.get("mask")), this.cameraView.model.set("sizesToSend", this.model.get("sizesToSend"))
        },
        onBeforeDestroy() {
            this.getRegion("camera").empty()
        },
        onRender() {
            this.showChildView("camera", this.cameraView)
        },
        onChildviewCameraSnapshot(t) {
            t.length === 1 ? this.triggerMethod("client:message", {
                action: "camera",
                ...t[0]
            }) : this.triggerMethod("client:message", {
                action: "camera",
                pictures: t
            })
        },
        onAttach() {
            this.stickit()
        },
        onChildviewCameraExit() {
            this.triggerMethod("client:message", {
                action: "cancel"
            })
        }
    }),
    Ik = '<a class="change-color button-color btn"></a>',
    Tk = wt.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: Je.template(Ik),
        events: {
            click: "onClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    observe: ["className", "selected"],
                    name: "class",
                    onGet(t) {
                        let e = "";
                        return t[0] && (e += t[0]), t[1] && (e += " selected"), e
                    }
                }, {
                    name: "data-thickness",
                    observe: "thickness"
                }, {
                    name: "data-color",
                    observe: "hex"
                }]
            },
            "a.button-color": {
                attributes: [{
                    name: "data-color",
                    observe: "hex"
                }, {
                    name: "style",
                    observe: "hex",
                    onGet(t) {
                        return this.getOption("transparent") ? "" : `background-color: ${t};`
                    }
                }]
            }
        },
        onRender() {
            this.stickit()
        },
        onClick() {
            this.triggerMethod("palette:select", this.model)
        }
    }),
    _k = wt.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: Tk,
        collection: new Xe.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    Ak = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp5/ydkj2018/assets/5f12600b.png"/></svg>\r
        </button>\r
    </li>\r
    <li class="pull-left button-pad"> \r
        <button id="thicknessButton" class="thickness button">  \r
            <div class="thickness-circle"></div>  \r
        </button>  \r
    </li> \r
    <li class="pull-right button-pad">\r
        <button id="showPaletteButton" class="showPalette button">\r
        </button>\r
    </li>\r
    <li class="pull-right button-pad">\r
        <button aria-label="choose color" id="currentColorButton" class="button currentColorButton">\r
            <div id="currentColor" class="currentColor"></div>\r
        </button>\r
    </li>\r
    <li id="color-palette" class="hide">\r
    </li>\r
</ul>\r
<div id="colorPaletteRegion" class="colorPaletteRegion">\r
`,
    qk = wt.View.extend({
        tagName: "div",
        className: "picker",
        template: Je.template(Ak),
        model: new Xe.Model({}),
        regions: {
            colorPalette: "#colorPaletteRegion"
        },
        events: {
            "click #currentColorButton": "onPaletteClick",
            "click #showPaletteButton": "onPaletteClick"
        },
        triggers: {
            "click #thicknessButton": "choose:thickness",
            "click #undoButton": "choose:undo"
        },
        bindings: {
            "#currentColor": {
                attributes: [{
                    name: "style",
                    observe: "currentColor",
                    onGet(t) {
                        return `background-color: ${t}`
                    }
                }]
            },
            ".colorPaletteRegion": {
                classes: {
                    visible: {
                        observe: "visiblePalette"
                    }
                }
            },
            ".thickness-circle": {
                attributes: [{
                    name: "style",
                    observe: "thickness",
                    onGet(t) {
                        return `width: ${t*3}px; height: ${t*3}px;`
                    }
                }]
            }
        },
        initialize() {
            this.colorPaletteComponent = this.colorPaletteComponent || new _k({
                collection: new Xe.Collection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("colorPalette", this.colorPaletteComponent)
        },
        onAttach() {
            this.stickit()
        },
        update() {
            const t = this.model.get("colors").map(e => typeof e == "object" ? e : {
                hex: e
            });
            this.colorPaletteComponent.collection.set(t)
        },
        onLine() {
            this.showPalette(!1)
        },
        onPaletteClick() {
            this.showPalette(!0)
        },
        showPalette(t = !0) {
            this.model.set("visiblePalette", t)
        },
        onChildviewChildviewPaletteSelect(t) {
            this.triggerMethod("choose:color", t), this.showPalette(!1)
        }
    });
class Zu {
    constructor(e, n, i) {
        at(this, "options");
        at(this, "canvas");
        at(this, "canvasCTX");
        at(this, "tipCanvas");
        at(this, "tipCanvasCTX");
        at(this, "lines", []);
        at(this, "image");
        at(this, "startX", null);
        at(this, "startY", null);
        at(this, "smoothedMouseX", null);
        at(this, "smoothedMouseY", null);
        at(this, "lastMouse", {});
        at(this, "lastMouseChangeVector", {});
        at(this, "lastSmoothedMouse", {});
        at(this, "lastThickness");
        at(this, "lastRotation");
        at(this, "colorLevel");
        this.options = i, this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = n, this.canvasCTX = this.canvas.getContext("2d"), this.tipCanvas = document.createElement("canvas"), this.tipCanvas.width = e, this.tipCanvas.height = n, this.tipCanvasCTX = this.tipCanvas.getContext("2d")
    }
    addLine(e, n, i, a) {
        this.lines.push({
            thickness: e,
            color: n,
            highlighter: i,
            points: []
        }), this.addPoint(a), this.update()
    }
    updateSize(e, n) {
        this.canvas.width = e, this.canvas.height = n
    }
    addPoint(e) {
        const n = {
                x: parseInt(e.x, 10),
                y: parseInt(e.y, 10)
            },
            i = this.lines[this.lines.length - 1];
        if (!(!i || !i.points)) {
            if (i.points.length !== 0) {
                const a = i.points[i.points.length - 1];
                if (a.x === n.x && a.y === n.y) return
            }
            i.points.push(n), i.points.length === 2 && i.points.unshift(i.points[1]), this.update()
        }
    }
    setLines(e) {
        const n = e.map(i => {
            let a = i.points;
            return typeof a == "string" ? a = i.points.split("|").map(f => ({
                x: parseInt(f.split(",")[0], 10),
                y: parseInt(f.split(",")[1], 10)
            })) : a = a.map(f => ({
                x: parseInt(f.x, 10),
                y: parseInt(f.y, 10)
            })), {
                color: i.color,
                thickness: i.thickness,
                points: a
            }
        });
        this.lines = n, this.update()
    }
    setImage(e) {
        this.image = e, this.update()
    }
    reset() {
        this.lines = [], this.image = null, this.update()
    }
    getLastLine() {
        const e = this.lines[this.lines.length - 1];
        return e ? {
            thickness: e.thickness,
            color: e.color,
            points: e.points.map(n => `${n.x},${n.y}`).join("|")
        } : null
    }
    getLines() {
        return this.lines.map(e => ({
            thickness: e.thickness,
            color: e.color,
            points: e.points.map(n => `${n.x},${n.y}`).join("|")
        }))
    }
    update() {
        this.canvasCTX && this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tipCanvasCTX && this.tipCanvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.image && this.canvasCTX.drawImage(this.image, 0, 0), this.lines && this.lines.forEach(e => this.drawLine(e))
    }
    startLineInContext(e, n, i) {
        const a = e * this.options.minThickness;
        this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, a * this.options.dotMultiplier, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.options.cappedEnds && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.lastMouseChangeVector = {
            x: 0,
            y: 0
        }, this.startX = n, this.lastMouse.x = n, this.smoothedMouseX = n, this.lastSmoothedMouse.x = n, this.startY = i, this.lastMouse.y = i, this.smoothedMouseY = i, this.lastSmoothedMouse.y = i, this.lastThickness = a, this.lastRotation = void 0, this.colorLevel = 0
    }
    continueLineInContext(e, n, i) {
        const a = n - this.lastMouse.x,
            f = i - this.lastMouse.y;
        a * this.lastMouseChangeVector.x + f * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (n - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
        const y = this.smoothedMouseX - this.lastSmoothedMouse.x,
            S = this.smoothedMouseY - this.lastSmoothedMouse.y,
            I = Math.sqrt(y * y + S * S);
        let O;
        I !== 0 ? O = Math.PI / 2 + Math.atan2(S, y) : O = 0;
        const R = this.options.minThickness * e + this.options.thicknessFactor * I,
            V = this.lastThickness + this.options.thicknessSmoothingFactor * (R - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = O);
        const X = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(O),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(O),
            J = Math.sin(O),
            oe = Math.cos(O),
            m = this.lastThickness * X,
            L = this.lastThickness * ie,
            z = V * J,
            ae = V * oe,
            re = .33 * I * X,
            ye = -.33 * I * ie,
            c = this.lastSmoothedMouse.x + L + re,
            Ee = this.lastSmoothedMouse.y + m + ye,
            _e = this.lastSmoothedMouse.x - L + re,
            Le = this.lastSmoothedMouse.y - m + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + L, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(c, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + z), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - z), this.canvasCTX.quadraticCurveTo(_e, Le, this.lastSmoothedMouse.x - L, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * V;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + z), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * z), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * z), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - z), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = O, this.lastThickness = V, this.lastMouseChangeVector = {
            x: a,
            y: f
        }, this.lastMouse = {
            x: n,
            y: i
        }
    }
    drawLine(e) {
        if (!(!e || !e.color || !e.points || !e.thickness) && !(!this.canvasCTX || !this.tipCanvasCTX)) {
            this.canvasCTX.strokeStyle = e.color, this.canvasCTX.lineWidth = this.options.borderWidth, this.canvasCTX.lineCap = "round", this.canvasCTX.lineJoin = "bevel", this.canvasCTX.fillStyle = e.color, this.canvasCTX.strokeStyle = e.color, this.tipCanvasCTX.lineWidth = this.options.borderWidth, this.tipCanvasCTX.fillStyle = e.color, this.tipCanvasCTX.strokeStyle = e.color;
            for (let n = 0; n < e.points.length; n++) {
                const i = e.points[n];
                n === 0 && this.startLineInContext(e.thickness, i.x, i.y), this.continueLineInContext(e.thickness, i.x, i.y)
            }
            this.canvasCTX.drawImage(this.tipCanvas, 0, 0)
        }
    }
}
const hh = {
    color: "#000000",
    thickness: 3,
    highlighter: !1,
    sketchOptions: {
        minThickness: .5,
        thicknessFactor: .1,
        smoothingFactor: .55,
        thicknessSmoothingFactor: .6,
        tipTaperFactor: .7,
        cappedEnds: !1,
        borderWidth: 2,
        dotMultiplier: 2
    }
};
class Ok {
    constructor(e, n = {}) {
        at(this, "canvasSelector");
        at(this, "canvas");
        at(this, "ctx");
        at(this, "options");
        at(this, "history");
        at(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Me(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(hh, n), this.history = [], this.layerNames.forEach(i => {
            const a = new Zu(this.canvas.width, this.canvas.height, this.options.sketchOptions);
            a.name = i, this[i] = a
        })
    }
    update() {
        !this.ctx || (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.layerNames.forEach(e => {
            this.ctx.drawImage(this[e].canvas, 0, 0)
        }))
    }
    updateSize(e) {
        this.layerNames.forEach(n => {
            this[n].updateSize(e.width, e.height)
        })
    }
    setThickness(e) {
        this.options.thickness = e
    }
    setColor(e) {
        this.options.color = e
    }
    getHighlighter() {
        return !!this.options.highlighter
    }
    setHighlighter(e) {
        this.options.highlighter = e
    }
    setOptions(e) {
        const n = Object.assign(hh.sketchOptions, e);
        this.layerNames.forEach(i => {
            this[i].options = n, this[i].update()
        }), this.update()
    }
    startLine(e) {
        (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addLine(this.options.thickness, this.options.color, this.options.highlighter, e)
    }
    moveLine(e) {
        (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addPoint(e), this.update()
    }
    endLine() {
        const e = this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch,
            n = e.lines.pop();
        n.points && n.points.length > 1 && n.points.push(n.points[n.points.length - 2]), this.options.highlighter ? (this.highlighterSketch.lines.push(n), this.highlighterSketch.update(), this.history.push("highlighterSketch")) : (this.markerSketch.lines.push(n), this.markerSketch.update(), this.history.push("markerSketch")), e.reset(), this.update()
    }
    undoLine() {
        if (!this.history.length) return;
        const e = this.history.pop();
        this[e].lines.pop() && this[e].update()
    }
    isClean() {
        return !this.history.length
    }
    setLayerLines(e, n) {
        if (this.layerNames.indexOf(e) === -1) {
            console.error("invalid layer name", e);
            return
        }
        this[e].setLines(n), this.update()
    }
    setLayerImage(e, n) {
        this[e].setImage(n), this.update()
    }
    getLastLine() {
        return this.history.length === 0 ? null : this[this.history[this.history.length - 1]].getLastLine() || null
    }
    getLines() {
        return [...this.highlighterSketch.getLines(), ...this.markerSketch.getLines()]
    }
    getDataURL(e, n) {
        e === void 0 && (e = 1);
        const i = document.createElement("canvas"),
            a = this.canvas.width * e,
            f = this.canvas.height * e;
        i.width = a, i.height = f;
        const y = i.getContext("2d");
        return n && (y.fillStyle = n, y.fillRect(0, 0, a, f)), y.drawImage(this.highlighterSketch.canvas, 0, 0, a, f), y.drawImage(this.markerSketch.canvas, 0, 0, a, f), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const Rk = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    Pk = wt.View.extend({
        className: "Sketchpad canvasContainer",
        template: Je.template(Rk),
        images: {},
        myViewOptions: ["color", "thickness", "background", "image"],
        sketchpad: null,
        bindings: {
            ".sketchpad": {
                attributes: [{
                    name: "width",
                    observe: "size",
                    onGet(t) {
                        return t ? t.width : ""
                    }
                }, {
                    name: "height",
                    observe: "size",
                    onGet(t) {
                        return t ? t.height : ""
                    }
                }, {
                    name: "style",
                    observe: ["background", "backgroundImageUrl"],
                    onGet([t, e]) {
                        let n = "";
                        return e && (n += `background-image:url(${e});`), t && (n += `background-color:${t};`), n
                    }
                }]
            }
        },
        events: {
            "contextmenu canvas": "handleContextMenu",
            "mousedown canvas": "start",
            "touchstart canvas": "start",
            "mousemove canvas": "move",
            "touchmove canvas": "move"
        },
        initialize(t) {
            this.color = "black", this.thicknessScale = -1, this.mergeOptions(t, this.myViewOptions), this.model.on("change:size", this.onUpdateSize, this), this.endWithContext = this.end.bind(this)
        },
        onUpdateSize() {
            this.sketchpad && this.sketchpad.updateSize(this.model.get("size"))
        },
        onRender() {
            this.stickit(), document.addEventListener("touchend", this.endWithContext), document.addEventListener("mouseup", this.endWithContext)
        },
        onAttach() {
            const t = `sketchpad-${this.model.cid}`;
            this.$("#fullLayer").addClass(t), this.sketchpad = new Ok(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = Me(n)[0].width / Me(n).width(),
                a = n.getBoundingClientRect(),
                f = this.model.get("size"),
                y = this.sketchpad.options.thickness;
            let S = (e.clientX - a.left) * i;
            S = Math.min(f.width - y, Math.max(y, S));
            let I = (e.clientY - a.top) * i;
            return I = Math.min(f.height - y, Math.max(y, I)), {
                x: S,
                y: I
            }
        },
        fullImageCoord(t) {
            return `${parseInt(t.x+this.viewportOffset.x,10)},${parseInt(t.y+this.viewportOffset.y,10)}`
        },
        start(t) {
            const e = this.getCoords(t);
            this.sketchpad.startLine(e), this.isDrawing = !0
        },
        move(t) {
            if (!this.isDrawing) return;
            const e = this.getCoords(t);
            this.sketchpad.moveLine(e)
        },
        end(t, e) {
            !this.isDrawing || (this.isDrawing = !1, this.sketchpad.endLine(), e || this.triggerMethod("sketchpad:line", this.sketchpad.getLastLine()))
        },
        onBeforeDestroy() {
            this.getOption("mode") !== null && this.end(null, !0), document.removeEventListener("touchend", this.endWithContext), document.removeEventListener("mouseup", this.endWithContext)
        },
        leave() {
            this.getOption("mode") !== "draw" && this.tipShape.graphics.clear()
        },
        undoLine() {
            this.sketchpad.undoLine(), this.sketchpad.update(), this.triggerMethod("sketchpad:undo", this.sketchpad.history.length)
        },
        resetAll() {
            this.sketchpad && this.sketchpad.resetAll()
        },
        getColor() {
            return this.color
        },
        setColor(t) {
            this.color = t, this.sketchpad && this.sketchpad.setColor(t)
        },
        getThickness() {
            return this.thicknessScale
        },
        setThickness(t) {
            this.thicknessScale = t, this.sketchpad && this.sketchpad.setThickness(t)
        },
        getHighlighter() {
            return this.sketchpad ? this.sketchpad.getHighlighter() : !1
        },
        setHighlighter(t) {
            this.sketchpad && this.sketchpad.setHighlighter(t)
        },
        setOptions(t) {
            this.sketchpad && this.sketchpad.setOptions(t)
        },
        getLines() {
            return this.sketchpad ? this.sketchpad.getLines() : []
        },
        getImageData() {
            return this.sketchpad ? this.sketchpad.getDataURL(1, this.model.get("background")) : null
        },
        getThumbnailImage() {
            return this.sketchpad ? this.sketchpad.getDataURL(.33) : null
        },
        setLines(t) {
            !this.sketchpad || this.sketchpad.setLayerLines("backgroundSketch", t)
        },
        setImage(t) {
            const e = this.getOption("images")[t];
            if (!e) return;
            const n = new Image;
            n.onload = i => {
                const a = i.target;
                this.sketchpad.setLayerImage("backgroundSketch", a)
            }, n.src = e
        },
        handleContextMenu(t) {
            t.preventDefault()
        }
    }),
    Mk = `<div class="controller-content">\r
    <div class="canvas-container">\r
        <div id="prompt" class="prompt"></div>\r
        <div id="toolbar" class="toolbar"></div>\r
        <div id="sketchpad"></div>\r
        <div id="buttons" class="buttons"></div>\r
        <div id="post-sketchpad" class="post-sketchpad">\r
            <div id="submit">\r
                <button id='submitdrawing' class="button submitDrawing">Submit</button><br/>\r
            </div>\r
            <button id='censorOptions' class='button'>Censor Options</button>\r
            <div class="footer"></div>\r
        </div>\r
        </div>\r
    </div>\r
</div>\r
`,
    Lk = ai.extend({
        defaults: {
            drawId: 0,
            objectKey: void 0,
            size: {
                width: 240,
                height: 300
            },
            actions: !1,
            colors: ["#3c6e6f", "#007727", "#b8aa01", "#0350a0", "#000000", "#966401", "#48019d", "#730075", "#9c0e3e"],
            background: "",
            thicknesses: [3, 6],
            defaultIndex: 4,
            classes: [],
            prompt: {
                html: ""
            },
            live: !1,
            image: !1,
            backgroundImageUrl: !1,
            lines: !1,
            hideSubmit: !1,
            autoSubmit: !1,
            allowEmpty: !1,
            disabled: !1,
            debug: !1,
            strings: {
                drawing_empty: "You must draw something!",
                submit: "submit",
                ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!"
            }
        }
    }),
    Bk = wt.View.extend({
        className: "Draw",
        template: Je.template(Mk),
        model: new Lk,
        regions: {
            prompt: "#prompt",
            sketchpad: "#sketchpad",
            toolbar: "#toolbar",
            buttons: "#buttons"
        },
        events: {
            "click #submitdrawing": "onChildviewButtonSubmit"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            "#censorOptions": {
                visible: !1
            },
            ".footer": {
                observe: "footer",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : null
                }
            },
            ".submitDrawing": {
                observe: ["hideSubmit", "actions", "strings"],
                visible: !0,
                updateView: !0,
                onGet(t) {
                    return t[0] || t[1] ? !1 : t[2] === void 0 ? "" : t[2].submit || "Submit"
                }
            }
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Vi({}), this.toolbarComponent = this.toolbarComponent || new qk({
                model: new Xe.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new Pk({
                model: new Xe.Model
            }), this.buttonsCollection = this.buttonsCollection || new Xe.Collection([]), this.buttonsComponent = this.buttonsComponent || new oi({
                block: !1,
                collection: this.buttonsCollection
            }), this.options.thicknessIndex = -1, this.options.colorIndex = -1, this.drawId = this.model.get("drawId"), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        update() {
            this.model.get("drawId") !== this.getOption("drawId") && (this.resetDrawing(), this.drawId = this.model.get("drawId")), this.model.get("prompt") && this.promptComponent.model.set(this.model.get("prompt")), this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                width: 720,
                height: 900
            }), this.model.get("image") && (this.sketchpadComponent.setImage(this.images[this.model.get("image")]), this.onResize()), this.model.get("background") && this.sketchpadComponent.model.set("background", this.model.get("background")), this.model.get("backgroundImageUrl") && this.sketchpadComponent.model.set("backgroundImageUrl", this.model.get("backgroundImageUrl")), this.toolbarComponent && this.toolbarComponent.model.set("colors", this.model.get("colors")), this.model.get("actions") && this.buttonsCollection.set(this.model.get("actions")), this.model.get("autoSubmit") && this.autoSubmit(), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.onResize()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("toolbar", this.toolbarComponent), this.showChildView("sketchpad", this.sketchpadComponent), this.showChildView("buttons", this.buttonsComponent)
        },
        onChildviewAttach() {
            this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                width: 720,
                height: 900
            })
        },
        onAttach() {
            this.stickit(), this.update(), this.onResize(), At.vibrate()
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext)
        },
        resetDrawing() {
            this.sketchpadComponent.resetAll(), this.onChildviewSketchpadReady()
        },
        onChildviewSketchpadReady() {
            this.model.get("thicknesses") && this.options.thicknessIndex === -1 && this.onChildviewChooseThickness(), this.model.get("colors") && this.options.colorIndex === -1 && this.model.get("colors") && this.model.get("defaultIndex") !== void 0 && this.chooseColorByIndex(this.model.get("defaultIndex")), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.model.get("lines") && this.sketchpadComponent.setLines(this.model.get("lines"))
        },
        chooseColorByIndex(t) {
            (t < 0 || t > this.model.get("colors").length) && (t = 0);
            let e = this.model.get("colors")[t];
            typeof e != "object" && (e = {
                hex: e
            }), this.chooseColor(e.hex, e)
        },
        onChildviewChooseColor(t) {
            this.chooseColor(t.get("hex"), t.attributes)
        },
        onChildviewChooseThickness() {
            this.options.thicknessIndex = (this.options.thicknessIndex + 1) % this.model.get("thicknesses").length;
            const t = this.model.get("thicknesses")[this.options.thicknessIndex];
            this.sketchpadComponent.setThickness(t), this.toolbarComponent && this.toolbarComponent.model.set("thickness", t)
        },
        onChildviewChooseUndo() {
            this.sketchpadComponent.undoLine()
        },
        chooseColor(t, e = {}) {
            this.sketchpadComponent.setColor(t), this.sketchpadComponent.setHighlighter(e.highlighter), this.toolbarComponent.model.set("highlighter", e.highlighter), e.thickness !== void 0 && this.sketchpadComponent.setThickness(e.thickness), this.toolbarComponent.model.set("currentColor", t)
        },
        onChildviewSketchpadLine(t) {
            if (this.toolbarComponent && this.toolbarComponent.onLine && this.toolbarComponent.onLine(), this.model.get("live")) {
                const e = {
                        line: t,
                        highlighter: this.sketchpadComponent.getHighlighter(),
                        action: "line"
                    },
                    n = this.model.get("objectKey");
                if (n !== void 0) {
                    const i = this.sketchpadComponent.getLines();
                    e.objectKey = n, e.val = {
                        lines: i
                    }
                }
                this.triggerMethod("client:message", e)
            }
        },
        onChildviewSketchpadUndo(t) {
            if (this.model.get("live")) {
                const e = {
                        action: "undo",
                        linesLength: t
                    },
                    n = this.model.get("objectKey");
                n !== void 0 && (e.objectKey = n, e.val = {
                    lines: this.sketchpadComponent.getLines()
                }), this.triggerMethod("client:message", e)
            }
        },
        autoSubmit() {
            this.sketchpadComponent.end(), this.sketchpadComponent.getLines().length > 0 && this.onChildviewButtonSubmit()
        },
        onChildviewChildviewButtonChoose(t) {
            this.onChildviewButtonChoose(t)
        },
        onChildviewButtonChoose(t) {
            this.triggerMethod("client:message", {
                action: "choose",
                index: t.get("key")
            })
        },
        onChildviewChildviewButtonSubmit() {
            this.onChildviewButtonSubmit()
        },
        onChildviewButtonSubmit() {
            const t = this.sketchpadComponent.getLines();
            if (t.length === 0 && !this.model.get("allowEmpty")) return At.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                    lines: t,
                    action: "submit"
                },
                n = this.model.get("objectKey");
            return n && (e.objectKey = n, e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), this.model.get("debug") && At.show("custom", {
                html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
            }), !1
        },
        onObjectFilterError() {
            At.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
        },
        onResize() {
            const t = Me("#sketchpad"),
                e = Me("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(Me(".controller-content").css("border-top-width"), 10) * 2 + Me(".playerTopBar").innerHeight() + Me("#prompt").innerHeight() + Me("#toolbar").innerHeight() + parseInt(Me(".canvasContainer").css("border-top-width"), 10) * 2 + Me("#buttons").innerHeight() + Me("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(Me(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(Me(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(Me(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                y = 2,
                S = Math.min(t.width() - i, a * y),
                I = Math.max(Me("#controller-container").innerHeight() - n, 250),
                O = Math.min(S / a, I / f),
                R = a * O,
                V = f * O;
            e.style.width = `${R}px`, e.style.height = `${V}px`, window.scrollTo(0, 0)
        }
    }),
    Dk = `<div>
    <div id="controller" class="state-controller controller-content">
        <form class="enterSingleTextForm">
            <fieldset class="enterSingleTextFieldset">
                <div id="prompt" class="prompt">prompt</div>
                <div id="input-region" class=""></div>
                <div id="buttons" class="">buttons</div>
            </fieldset>
        </form>
        <div class="enterSingleTextDone">
            <span class="doneText"></span>
        </div>
    </div>
</div>
`,
    Nk = ai.extend({
        defaults: {
            state: "EnterSingleText",
            actions: [{
                text: "submit",
                action: "submit"
            }],
            allowEmpty: !1,
            autoSubmit: !1,
            classes: [],
            doneText: "",
            entryId: void 0,
            entry: null,
            live: !1,
            maxLength: 500,
            textKey: void 0,
            textRingName: null,
            placeholder: "",
            autocapitalize: !1,
            className: "",
            inlineSubmit: !1,
            inlineSubmitText: "Submit",
            error: "",
            strings: {
                ERROR_NOTHING_ENTERED: "You need to enter something!",
                ERROR_REJECTED_TEXT: "That's not allowed, enter something else! (You can change the level of filtering in the game's settings menu)"
            }
        }
    }),
    Vk = wt.View.extend({
        className: "EnterSingleText scrollable",
        template: Je.template(Dk),
        model: new Nk,
        sessionModule: "comment",
        sessionName: " Comments",
        regions: {
            prompt: "#prompt",
            input: "#input-region",
            buttons: "#buttons"
        },
        events: {
            "submit form": "onChildviewInputSubmit"
        },
        bindings: {
            ".enterSingleTextForm": {
                observe: "entry",
                visible(t) {
                    return !t
                }
            },
            ".enterSingleTextDone": {
                observe: "entry",
                visible: !0
            },
            ".doneText": {
                observe: "doneText",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : ""
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor}`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                    }
                }]
            }
        },
        initialize() {
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new Vi({
                model: new Xe.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new os({
                model: new Xe.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new Xe.Collection([{
                text: "submit"
            }]), this.buttonsComponent = this.buttonsComponent || new oi({
                block: !0,
                collection: this.buttonsCollection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        update() {
            this.model.get("isAudience") && ((this.model.get("entryId") === void 0 || this.model.get("entryId") !== this.entryId) && (this.audienceEntry = void 0), this.audienceEntry && this.model.setUpdate({
                entry: this.audienceEntry,
                entryId: this.model.get("entryId") || 0
            })), this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.inputComponent.model.set(this.model.attributes), this.buttonsComponent.options.block = this.model.get("block"), this.buttonsCollection.set(this.model.get("actions") || [{
                text: "submit",
                action: "submit"
            }]), this.model.get("entryId") && this.model.get("entryId") !== this.currentEntry && (this.inputComponent.clearInput(), this.currentEntry = this.model.get("entryId")), this.$el.find(".enterSingleTextFieldset").prop("disabled", !1), this.$el.find("textarea").focus(), this.stickit(), this.model.get("autoSubmit") && this.shouldSubmit && this.onChildviewInputSubmit()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("input", this.inputComponent), this.showChildView("buttons", this.buttonsComponent), this.stickit()
        },
        onAttach() {
            this.update(), At.vibrate()
        },
        onChildviewInputText(t) {
            let e = t.getValue();
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = Je.throttle(() => {
                const n = t.getSanitizedValue();
                if (n.length === 0) return;
                const i = {
                        action: "write-live",
                        entry: n
                    },
                    a = this.model.get("textKey");
                a !== void 0 && (i.textKey = a, i.val = n), this.triggerMethod("client:message", i)
            }, 500)), this.throttledSend())
        },
        onChildviewInputSubmit() {
            let t = this.inputComponent.getValue(),
                e = this.inputComponent.getSanitizedValue();
            if (this.model.setUpdate({
                    error: null
                }), e.length === 0 && !this.model.get("allowEmpty")) return this.model.setUpdate({
                error: this.model.get("strings").ERROR_NOTHING_ENTERED
            }), !1;
            t.length > this.model.get("maxLength") && (this.inputComponent.setValue(t.substr(0, this.model.get("maxLength"))), t = this.inputComponent.getValue(), e = this.inputComponent.getSanitizedValue()), this.shouldSubmit = !1;
            const n = {
                    action: "write",
                    entry: e
                },
                i = this.model.get("textKey");
            return i && (n.textKey = i, n.val = e), this.triggerMethod("client:message", n), this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = e, this.entryId = this.model.get("entryId") || 0, this.model.setUpdate({
                entry: this.audienceEntry,
                shotId: this.entryId
            })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1
        },
        onTextFilterError() {
            this.model.setUpdate({
                error: this.model.get("strings").ERROR_REJECTED_TEXT
            })
        },
        onChildviewChildviewButtonSuggestion() {
            const t = this.model.get("suggestions"),
                e = this.inputComponent.getSanitizedValue(),
                n = Je.without(t, e);
            return this.inputComponent.setValue(Je.shuffle(n)[0]), !1
        },
        onChildviewChildviewButtonChoose(t) {
            return this.triggerMethod("client:message", {
                action: t.get("key")
            }), !1
        },
        onChildviewChildviewButtonHelp() {
            return this.triggerMethod("client:message", {
                action: "help"
            }), !1
        }
    });
wt.View.extend({
    model: new Xe.Model({}),
    myViewOptions: ["width", "height", "sketchOptions"],
    template: Je.template(`
        <h1 class='title'>ImageView</h1>
        <img class='imageData'>
    `),
    initialize(t) {
        this.mergeOptions(t, this.myViewOptions), this.model.on({
            "change:lines": this.setImageFromLines.bind(this)
        })
    },
    bindings: {
        ".title": {
            observe: "title",
            visible: !0,
            updateView: !0
        },
        ".imageData": {
            attributes: [{
                name: "src",
                observe: "src"
            }]
        }
    },
    setImageFromLines() {
        const t = this.getOption("width") || 640,
            e = this.getOption("height") || 640,
            n = this.getOption("sketchOptions"),
            i = this.model.get("lines") || [];
        if (!i.length || !n) return;
        const a = new Zu(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
wt.View.extend({
    appId: "legacymain",
    appTag: "legacymain",
    template: null,
    client: null,
    initialize(t) {
        this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new Xe.Model({});
        const e = this.client.parseEntities();
        this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
            this.update().catch(this.caughtError)
        }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
    },
    render() {
        this.model.set("username", nn.safeText(this.client.name), {
            silent: !0
        }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
    },
    onEntityDidChange(t, e) {
        this.model.unset(t, {
            silent: !0
        }), this.model.set(t, e)
    },
    controllerUpdate() {
        const t = this.model.get("room") || {},
            e = t.state || "";
        let n = t.lobbyState;
        !n && e.indexOf("_") !== -1 && (n = t.state.split("_")[1]), n === "PostGame" || e === "Credits" || e === "GameOver" || e === "PostGame" || e === "DayEnd" || t.gameResults ? ni.isInitialized ? ni.show() : ni.init(this.getOption("appTag")).then(() => {
            ni.show()
        }) : ni.hide(), t.platformId && Zt.setTag(`platform-${t.platformId}`)
    },
    async update() {
        return null
    },
    caughtError(t) {
        throw t
    },
    onAttach() {
        this.update().catch(this.caughtError), Me(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
    },
    showTwitchBroadcasterDialog(t) {
        let e = `<div class='icon-${this.client.roles.broadcaster.platform}'>${this.client.roles.broadcaster.name}</div>`;
        e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), At.show("custom", {
            html: e,
            position: "bottom",
            timer: t,
            backdrop: "transparent",
            customClass: {
                container: "jbgTwitchContainer",
                popup: "jbgTwitchPopup",
                htmlContainer: "jbgTwitchContent",
                closeButton: "jbgCloseButton"
            },
            showCloseButton: !0,
            closeButtonHtml: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path><path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" /></svg >',
            showConfirmButton: !1,
            showClass: {
                popup: "jbgTwitchShow"
            },
            hideClass: {
                popup: "jbgTwitchHide"
            }
        })
    },
    onBeforeDestroy() {
        this.model.stopListening(), this.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.off("client:connection", this.onConnectionMessageWithContext), this.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.off("client:disconnected", this.onDisconnectedWithContext)
    },
    artifactClicked() {
        Di.setAsViewed(0)
    },
    showScreen(t, e) {
        const n = Me(t);
        return this.activeScreen && t === this.activeScreen || (this.activeScreen && (Me(this.activeScreen).fadeOut("fast", () => {}), Me(this.activeScreen).show(), Me(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
            e && e()
        }), this.activeScreen = t, this.onResize()), !1
    },
    notify() {
        At.vibrate()
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), At.show("error", {
            titleText: "Verbindung getrennt",
            text: "Danke für's spielen!",
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        At.show("error", {
            titleText: "Verbindung getrennt",
            text: "Deine Verbindung wurde getrennt.",
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
        if (At.show("toast", {
                text: e
            }), t.status === "connected") {
            const n = this.client.parseEntities();
            this.model.set(n)
        }
    },
    onResize() {
        const t = Me("#player").outerHeight(!0) || 0,
            e = ni.isVisible ? Me("#slide-in-banner").outerHeight(!0) : 0,
            n = Me(window).width(),
            i = Me(window).height() - t;
        Me(`.${this.getOption("appTag")}-page`).css("height", i - e), Me(`.${this.getOption("appTag")}-page`).attr("height", i - e), Me(`.${this.getOption("appTag")}-page`).css("top", t), Me(`.${this.getOption("appTag")}-page`).css("width", n), Me(`.${this.getOption("appTag")}-page`).attr("width", n)
    }
});
const $k = `<div id="controller" class="state-controller controller-content">
    <div id="title" class="lobbyTitle">title</div>
    <div id="vipMenu" class="vipMenu">
        <div id="choices" class="choicesContainer">choices</div>
    </div>
    <div class="characterSelect">
        <div id="charactersPrompt" class="charactersPrompt">
            <span id="charactersPromptText" class="charactersPromptText"></span>
        </div>
        <div id="characters" class="charactersContainer"></div>
    </div>
    <div id="artifactId" class="artifactContainer text">
        <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
            <button id="artifactButton" class="artifactButton"></button>
        </a>
    </div>
</div>`,
    jk = ai.extend({
        defaults: {
            canChangeName: !1,
            playerIsVIP: !1,
            playerCanStartGame: !1,
            playerCanCensor: !1,
            gameCanStart: !1,
            gameIsStarting: !1,
            gameEnded: !1,
            game: {
                familyFriendly: !1,
                extendedTimers: !1,
                requireTwitch: !1,
                controllerOnly: !1,
                skipTutorials: !1
            },
            choices: [],
            artifact: null,
            characters: null,
            censorablePlayers: [],
            playerCanDoEpisodes: !1,
            playerCanReport: !1,
            playerCanViewAuthor: !1,
            lastUGCResult: null,
            history: [],
            activeContentId: null,
            formattedActiveContentId: null,
            isLocal: !1,
            strings: {
                wait: "Lehn dich zurück und entspanne!",
                vip_waiting: "Warte auf die anderen Spieler",
                vip_canStart: "Drücke diesen Knopf, wenn alle bereit sind",
                vip_cancel: "Drücke diesen Knopf, um den Spielstart abzubrechen",
                vip_postgame: "Was möchtet ihr jetzt machen?",
                vip_episodes_menu: "Episoden Menü",
                vip_episodes_unload: "Episode deaktivieren",
                vip_episodes_report: "Episode melden",
                vip_episodes_warning: "Warnung: Nutzergenerierte Inhalte werden nicht geprüft",
                vip_episodes_load: "Lade Episode mit ID:",
                vip_episodes_select: "Oder wähle eine Episode:",
                vip_episodes_back: "Zurück",
                vip_episodes_submit: "senden",
                vip_episodes_view_author: "Autor anzeigen",
                button_start: "Alle Bereit",
                button_cancel: "Abbrechen",
                button_changename: "Name ändern",
                button_sameplayers: "Gleiche Spieler",
                button_newplayers: "Andere Spieler",
                prompt_entername: "Gib deinen Namen ein",
                prompt_choosecharacter: "Wähle deinen Charakter",
                button_censorOptions: "Zensur Einstellungen",
                censor_prompt: ""
            }
        }
    }),
    Hk = wt.View.extend({
        tagName: "button",
        template: Je.template('<span class="flex-item"></span>'),
        className() {
            return `characters ${this.model.get("name")}`
        },
        events: {
            click: "onCharacterClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "bgcolor",
                    onGet(t) {
                        return t ? `background-color: ${t};` : ""
                    }
                }, {
                    name: "aria-label",
                    observe: "name"
                }, {
                    name: "disabled",
                    observe: "available",
                    onGet(t) {
                        return t !== void 0 ? !t : null
                    }
                }],
                classes: {
                    active: "active",
                    selected: {
                        observe: "selected",
                        onGet(t) {
                            return t
                        }
                    },
                    disabled: {
                        observe: "available",
                        onGet(t) {
                            return !t
                        }
                    }
                }
            }
        },
        onCharacterClick() {
            this.trigger("character:click", this.model)
        },
        onRender() {
            this.stickit()
        }
    }),
    Fk = wt.View.extend({
        className: "Lobby scrollable",
        template: Je.template($k),
        model: new jk,
        titleComponent: null,
        choicesListView: null,
        charactersListView: null,
        regions: {
            title: "#title",
            choices: "#choices",
            characters: "#characters"
        },
        events: {
            "click .choice-button": "onButtonClick",
            "click .artifactLink": "onArtifactClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor};`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".artifactContainer": {
                observe: "artifact",
                visible: !0
            },
            ".artifactLink": {
                attributes: [{
                    name: "href",
                    observe: "artifact",
                    onGet(t) {
                        if (!t) return null;
                        let e = "games.jackbox.tv";
                        return t.rootId.indexOf("test") !== -1 && (e = "games-test.jackbox.tv"), `https://${e}/artifact/${t.categoryId}/${t.artifactId}/`
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                    }
                }]
            },
            ".characterSelect": {
                observe: "characters",
                visible: !0
            },
            ".charactersPrompt": {
                observe: "characters",
                visible: !0,
                onGet(t) {
                    return t && !Je.isEmpty(t)
                }
            },
            ".charactersPromptText": {
                observe: "strings",
                onGet() {
                    return this.getOption("strings").prompt_choosecharacter
                }
            }
        },
        strings: {},
        initialize() {
            this.titleComponent = new Vi({
                model: new Xe.Model({})
            }), this.choicesListView = this.choicesListView || new oi, this.charactersListView = new wt.CollectionView({
                childView: Hk,
                className: "charactersList",
                collection: new Xe.Collection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        update() {
            if (this.strings = this.model.get("strings"), this.choicesListView.collection.reset(), this.titleComponent.model.set("html", this.getOption("strings").wait), this.model.get("playerIsVIP") && (this.model.get("gameCanStart") ? this.model.get("playerCanStartGame") && (this.model.get("gameIsStarting") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_cancel), this.choicesListView.collection.add({
                    className: "vipCancel",
                    html: this.getOption("strings").button_cancel,
                    action: "cancel"
                })) : this.model.get("gameFinished") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_postgame), this.choicesListView.collection.add({
                    html: this.getOption("strings").button_sameplayers,
                    action: "PostGame_Continue"
                }), this.choicesListView.collection.add({
                    html: this.getOption("strings").button_newplayers,
                    action: "PostGame_NewGame"
                })) : (this.titleComponent.model.set("html", this.getOption("strings").vip_canStart), this.choicesListView.collection.add({
                    className: "vipStart",
                    html: this.getOption("strings").button_start,
                    action: "start"
                }), this.model.get("playerCanCensor") && this.model.get("censorablePlayers").length > 0 && this.choicesListView.collection.add({
                    className: "vipCensorOptions",
                    html: this.getOption("strings").button_censorOptions,
                    action: "censorOptions"
                }))) : this.titleComponent.model.set("html", this.getOption("strings").vip_waiting)), this.model.get("playerCanDoEpisodes")) {
                if (this.model.get("activeContentId")) {
                    const n = this.model.get("activeContentId"),
                        i = this.model.get("history").find(f => n === (f.remoteContentId || f.localContentId)),
                        a = i && i.metadata ? nn.htmlUnescape(i.metadata.title) : null;
                    a && this.choicesListView.collection.add({
                        type: "text",
                        text: a
                    }), this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_unload,
                        action: "ugc-unload",
                        block: !1
                    }), this.model.get("playerCanReport") && this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_report,
                        action: "ugc-report",
                        block: !1
                    }), this.model.get("playerCanViewAuthor") && this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_view_author,
                        action: "ugc-view-author",
                        block: !1
                    })
                } else this.choicesListView.collection.add({
                    className: "vipEpisodesMenu",
                    html: this.getOption("strings").vip_episodes_menu,
                    action: "ugc"
                });
                const e = this.model.get("lastUGCResult");
                e && e.error && this.lastUGCResultId !== e.id && (At.show("alert", {
                    text: e.error
                }), this.lastUGCResultId = e.id)
            }
            this.model.get("canChangeName") && this.choicesListView.collection.add({
                html: this.getOption("strings").button_changename,
                action: "changeName"
            }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
            const t = this.model.get("characters") || [];
            this.charactersListView.collection.set(Je.map(t, e => {
                const n = this.model.get("playerInfo") || {},
                    i = e;
                return i.bgcolor = n.buttonColor, i.selected = n.avatar === i.name, i
            })), this.stickit()
        },
        onRender() {
            this.showChildView("title", this.titleComponent), this.showChildView("choices", this.choicesListView), this.showChildView("characters", this.charactersListView), this.update()
        },
        onArtifactClick() {
            this.triggerMethod("track:event", {
                category: "PostGame",
                action: "galleryClicked"
            }), Di.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = Me(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const a = await At.show("custom", {
                            input: "text",
                            title: this.getOption("strings").prompt_entername,
                            customClass: {
                                input: "playerName"
                            },
                            inputAttributes: {
                                maxlength: 12
                            },
                            inputValidator: f => f ? f.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
                        });
                        if (a.dismiss) return;
                        this.triggerMethod("client:message", {
                            name: a.value
                        })
                    } catch {} else if (i === "censorOptions") At.show("custom", {
                        target: this.el,
                        html: "",
                        confirmButtonText: this.model.get("strings").button_cancel,
                        customClass: {
                            popup: "censorOptionsModal",
                            confirmButton: "cancelButton"
                        },
                        didOpen() {
                            const a = new oi({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new Xe.Collection
                                }),
                                f = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(y => ({
                                    action: "censorConfirm",
                                    html: y.name,
                                    key: y.id
                                }))];
                            a.collection.set(f), a.render(), e.listenTo(a, "childview:button:censorConfirm", e.censorPlayer)
                        }
                    });
                    else if (i === "ugc-unload") this.triggerMethod("client:message", {
                clearContentId: !0
            });
            else if (i === "ugc-report") {
                const a = "http://support.jackboxgames.com/",
                    f = this.model.get("formattedActiveContentId");
                window.open(`${a}?episodeID=${f}`, "_blank")
            } else i === "ugc-view-author" ? this.triggerMethod("client:message", {
                viewAuthor: !0
            }) : i === "ugc" ? At.show("custom", {
                target: this.el,
                html: "",
                showConfirmButton: !1,
                customClass: {
                    popup: "episodesModal"
                },
                background: e.model.get("playerInfo") && e.model.get("playerInfo").bgColor ? e.model.get("playerInfo").bgColor : null,
                padding: "10px 5px",
                didOpen: () => {
                    const a = new oi({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new Xe.Collection([])
                    });
                    a.collection.add({
                        html: this.model.get("strings").vip_episodes_back || "Back",
                        action: "back",
                        className: "backButton"
                    }), a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_load || "Load an episode by id:",
                        className: "header"
                    }), a.collection.add({
                        type: "input",
                        preventAutosize: !0,
                        placeholder: "???-????",
                        inlineSubmit: !0,
                        inlineSubmitText: this.model.get("strings").vip_episodes_submit || "SUBMIT",
                        className: "lobbyUgcInput"
                    }), a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_warning || "Warning: user generated content is not rated",
                        className: "danger"
                    }), e.model.get("history").length && (a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_select || "Or select an episode:",
                        className: "episodesListHeader"
                    }), a.collection.add(e.model.get("history").map(f => ({
                        action: "activateContentId",
                        html: f.remoteContentId ? `${f.metadata.title}<br/>${f.formattedRemoteContentId}` : `${f.metadata.title}`,
                        key: f.remoteContentId || f.localContentId
                    })))), a.render(), Me(".lobbyUgcInput").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), e.listenTo(a, "childview:button:activateContentId", e.activateContentId), e.listenTo(a, "childview:button:back", () => {
                        At.close()
                    }), e.listenTo(a, "childview:input:submit", e.activateContentIdFromInput)
                }
            }) : this.triggerMethod("client:message", {
                action: i
            })
        },
        censorPlayer(t) {
            At.close(), this.triggerMethod("client:message", {
                action: "censor",
                id: t.get("key")
            })
        },
        activateContentId(t) {
            At.close(), this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.get("key")
            })
        },
        activateContentIdFromInput(t) {
            (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
            }), At.close())
        },
        onChildviewChildviewCharacterClick(t) {
            t.get("available") && !t.get("selected") && (this.triggerMethod("client:message", {
                action: "avatar",
                name: t.get("name")
            }), this.charactersListView.collection.forEach(e => {
                e.unset("active"), e.set("bgcolor", this.model.get("playerInfo").buttonColor)
            }), t.set("active", !0), t.set("bgcolor", this.model.get("playerInfo").textColor))
        }
    }),
    Gk = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    Wk = ai.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    zk = wt.View.extend({
        className: "Logo",
        template: Je.template(Gk),
        model: new Wk,
        events: {
            touchstart: "onTouchStart",
            "click .artifactButton": "onArtifactClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return (t || []).join(" ")
                    }
                }]
            },
            ".message": {
                attributes: [{
                    name: "style",
                    observe: "message",
                    onGet(t) {
                        let e = "";
                        return t && (t.html || t.text) || (e += "display: none;"), e
                    }
                }]
            },
            ".messageText": {
                observe: "message",
                updateMethod: "html",
                onGet(t) {
                    return !t || !t.html && !t.text ? null : t.html ? t.html : Me("<div />").text(t.text).html()
                }
            },
            "#action": "action",
            ".artifactContainer": {
                observe: "artifact",
                visible: !0
            },
            ".artifactLink": {
                attributes: [{
                    name: "href",
                    observe: "artifact",
                    onGet(t) {
                        const e = t || {
                            rootId: "",
                            categoryId: "",
                            artifactId: ""
                        };
                        let n = "games.jackbox.tv";
                        return e.rootId.indexOf("test") !== -1 && (n = "games-test.jackbox.tv"), `https://${n}/artifact/${e.categoryId}/${e.artifactId}/`
                    }
                }]
            }
        },
        onRender() {
            this.stickit()
        },
        onTouchStart(t) {
            t.target.tagName.toLowerCase() !== "button" && t.preventDefault()
        },
        onArtifactClick() {
            this.triggerMethod("track:event", {
                category: "PostGame",
                action: "galleryClicked"
            }), Di.setAsViewed(0)
        }
    }),
    $r = {
        en: {
            LANGUAGE_NAME: "English",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Language",
            LOGIN: "Login",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Verbindung getrennt",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Danke für's spielen!"
        },
        fr: {
            LANGUAGE_NAME: "Fran\xE7ais",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Langue",
            LOGIN: "Connexion",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "D\xE9connect\xE9",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Vous avez \xE9t\xE9 d\xE9connect\xE9"
        },
        it: {
            LANGUAGE_NAME: "Italiano",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Lingua",
            LOGIN: "Accesso",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnesso",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Disconnesso"
        },
        de: {
            LANGUAGE_NAME: "Deutsche",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Sprache",
            LOGIN: "Login",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Getrennt",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Getrennt"
        },
        es: {
            LANGUAGE_NAME: "Espa\xF1ol",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "idioma",
            LOGIN: "Iniciar sesi\xF3n",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Desconectado",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Desconectado"
        }
    },
    Uk = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    Yk = wt.View.extend({
        className: "playerTopBarView",
        template: Je.template(Uk),
        model: new Xe.Model,
        bindings: {
            ":el": {
                observe: ["username", "hidden"],
                visible(t) {
                    return t[0] && !t[1]
                },
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return (t || []).join(" ")
                    }
                }]
            },
            "#playername": {
                observe: "username",
                attributes: [{
                    name: "style",
                    observe: "textColor",
                    onGet(t) {
                        return t ? `color: ${t}` : ""
                    }
                }]
            },
            ".playerTopBar": {
                observe: "username",
                visible: !0,
                attributes: [{
                    name: "style",
                    observe: "topBarColor",
                    onGet(t) {
                        return t ? `background-color: ${t}` : ""
                    }
                }]
            },
            "#playericon": {
                observe: "avatar",
                visible: !0,
                attributes: [{
                    name: "class",
                    observe: "avatar"
                }]
            }
        },
        onRender() {
            this.stickit()
        }
    }),
    ed = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    Jk = ai.extend({
        defaults: {
            choiceId: void 0,
            type: "single",
            censorDialog: "none",
            chosen: null,
            choices: [],
            prompt: {},
            error: null,
            block: !0,
            classes: [],
            maxVotes: 16,
            doneText: {},
            announcePrompt: !1,
            countGroupName: null,
            strings: {
                your_choice: "Thank you. Your choice: ",
                censor_prompt: "Censor this?",
                censor_confirm: "Yes, Censor!",
                censor_cancel: "No!"
            }
        }
    }),
    ii = wt.View.extend({
        className: "MakeSingleChoice scrollable",
        template: Je.template(ed),
        model: new Jk,
        sessionModule: "vote",
        sessionName: " Vote",
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        bindings: {
            ".chosen": {
                observe: "chosen",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : null
                }
            },
            ".choices": {
                observe: "chosen",
                visible(t) {
                    return t === "" || t === null
                }
            },
            ".error": {
                observe: "error",
                visible: !0,
                updateView: !0
            },
            ".makeSingleChoiceDone": {
                observe: "chosen",
                visible(t) {
                    return t !== null && t !== ""
                }
            },
            ".doneText": {
                observe: "doneText",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : null
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor}`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color:${t.buttonColor}` : null
                    }
                }]
            }
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Vi({
                model: new Xe.Model
            }), this.choicesList = this.choicesList || new oi({
                action: "choose",
                collection: new Xe.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && Je.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
                text: "Submit",
                action: "submit",
                block: !1
            }), this.model.get("isAudience") && ((this.model.get("choiceId") === void 0 || this.model.get("choiceId") !== this.getOption("choiceId")) && (this.selected = [], this.audienceChoice = void 0, this.votesLeft = void 0), this.selected.length > 0 && (this.model.get("type") === "multiple" ? this.choicesList.children.forEach(t => {
                this.selected.find(e => e === t.getOption("index")) !== void 0 && t.model.set("selected", !0)
            }) : this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.model.get("choiceId") || 0
            }))), this.choiceId = this.model.get("choiceId") || 0, this.stickit()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.choicesList), this.stickit()
        },
        onAttach() {
            this.update(), At.vibrate()
        },
        onChildviewChildviewButtonChoose(t) {
            const e = t.get("action") || "choose",
                n = t.get("index"),
                i = this.model.get("type");
            switch (this.choicesList.children.forEach(a => {
                    a.model.set("disabled", i === "single"), a.model.set("active", !1)
                }), i) {
                case "multiple":
                    if (this.model.get("toggle") ? t.set("selected", !t.get("selected")) : t.set("selected", !0), this.model.get("isAudience")) {
                        const a = [];
                        this.choicesList.children.forEach(f => {
                            f.model.get("selected") && a.push(f.getOption("index"))
                        }), this.selected = a
                    }
                    return !1;
                case "repeating":
                    if (this.votesLeft === void 0 && (this.votesLeft = this.model.get("maxVotes")), this.delaySubmit || this.votesLeft <= 0 && this.model.get("isAudience")) return !1;
                    this.delaySubmit = !0, window.setTimeout(() => {
                        this.delaySubmit = !1
                    }, 101), this.votesLeft -= 1;
                    break;
                case "single":
                    t.set("selected", !0), t.set("active", !0);
                    break
            }
            return this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                action: e,
                choice: n
            }) : this.model.get("isAudience") && (this.selected = [t.get("index")], this.triggerMethod("client:countGroup", {
                name: this.model.get("countGroupName"),
                vote: n
            }), i !== "repeating" && this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.choiceId
            })), !1
        },
        displayAudienceChoice(t) {
            let e = "Thank you.";
            const n = t.map(a => {
                const f = this.choicesList.children.find(y => y.model.get("index") === a);
                return f ? f.model.get("html") || f.model.get("text") : ""
            });
            return t !== void 0 && this.model.get("strings") && (e = this.model.get("strings").your_choice + n.join(", ")), {
                html: e
            }
        },
        onChildviewChildviewButtonCensor(t) {
            const e = t.get("index"),
                n = t.get("html");
            if (this.model.get("censorDialog") === "confirm") t.get("isWarned") ? this.triggerMethod("client:message", {
                action: "censor",
                choice: e
            }) : t.set("isWarned", !0);
            else {
                if (this.model.get("censorDialog") === "warning") return mn.close(), mn.fire({
                    customClass: {
                        popup: "Dialog",
                        container: "container",
                        content: "content",
                        title: "title",
                        closeButton: "button closeButton",
                        cancelButton: "button cancelButton",
                        confirmButton: "button confirmButton",
                        denyButton: "button denyButton"
                    },
                    title: this.model.get("strings").censor_prompt,
                    text: n,
                    showCancelButton: !0,
                    confirmButtonText: this.model.get("strings").censor_confirm,
                    cancelButtonText: this.model.get("strings").censor_cancel,
                    confirmButtonColor: "#900"
                }).then(i => {
                    i.value && this.triggerMethod("client:message", {
                        action: "censor",
                        choice: e
                    })
                }), !1;
                this.triggerMethod("client:message", {
                    action: "censor",
                    choice: e
                })
            }
            return !1
        },
        onChildviewChildviewButtonSubmit() {
            let t = [];
            this.choicesList.children.forEach(n => {
                n.model.get("selected") && t.push(n.getOption("index"))
            });
            const e = t.join(",");
            this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                action: "submit",
                choice: e
            }) : this.model.get("isAudience") && (this.triggerMethod("client:countGroup", {
                name: this.model.get("countGroupName"),
                vote: e
            }), this.model.get("type") !== "repeating" && (t = [], this.choicesList.children.forEach(n => {
                n.model.get("selected") && t.push(n.getOption("index"))
            }), this.selected = t, this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.choiceId
            })))
        }
    });
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function uh(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function Hn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? uh(Object(n), !0).forEach(function(i) {
            Qk(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : uh(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Ur(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ur = function(e) {
        return typeof e
    } : Ur = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Ur(t)
}

function Qk(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function si() {
    return si = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, si.apply(this, arguments)
}

function Xk(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function Kk(t, e) {
    if (t == null) return {};
    var n = Xk(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var Zk = "1.15.0";

function ri(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var li = ri(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    gr = ri(/Edge/i),
    dh = ri(/firefox/i),
    ar = ri(/safari/i) && !ri(/chrome/i) && !ri(/android/i),
    td = ri(/iP(ad|od|hone)/i),
    nd = ri(/chrome/i) && ri(/android/i),
    id = {
        capture: !1,
        passive: !1
    };

function Et(t, e, n) {
    t.addEventListener(e, n, !li && id)
}

function bt(t, e, n) {
    t.removeEventListener(e, n, !li && id)
}

function rs(t, e) {
    if (!!e) {
        if (e[0] === ">" && (e = e.substring(1)), t) try {
            if (t.matches) return t.matches(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
        } catch {
            return !1
        }
        return !1
    }
}

function eC(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function Vn(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && rs(t, e) : rs(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = eC(t))
    }
    return null
}
var ch = /\s+/g;

function xn(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(ch, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(ch, " ")
        }
}

function it(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function mo(t, e) {
    var n = "";
    if (typeof t == "string") n = t;
    else
        do {
            var i = it(t, "transform");
            i && i !== "none" && (n = i + " " + n)
        } while (!e && (t = t.parentNode));
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function od(t, e, n) {
    if (t) {
        var i = t.getElementsByTagName(e),
            a = 0,
            f = i.length;
        if (n)
            for (; a < f; a++) n(i[a], a);
        return i
    }
    return []
}

function jn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Jt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, y, S, I, O, R, V;
        if (t !== window && t.parentNode && t !== jn() ? (f = t.getBoundingClientRect(), y = f.top, S = f.left, I = f.bottom, O = f.right, R = f.height, V = f.width) : (y = 0, S = 0, I = window.innerHeight, O = window.innerWidth, R = window.innerHeight, V = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !li))
            do
                if (a && a.getBoundingClientRect && (it(a, "transform") !== "none" || n && it(a, "position") !== "static")) {
                    var X = a.getBoundingClientRect();
                    y -= X.top + parseInt(it(a, "border-top-width")), S -= X.left + parseInt(it(a, "border-left-width")), I = y + f.height, O = S + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = mo(a || t),
                J = ie && ie.a,
                oe = ie && ie.d;
            ie && (y /= oe, S /= J, V /= J, R /= oe, I = y + R, O = S + V)
        }
        return {
            top: y,
            left: S,
            bottom: I,
            right: O,
            width: V,
            height: R
        }
    }
}

function fh(t, e, n) {
    for (var i = pi(t, !0), a = Jt(t)[e]; i;) {
        var f = Jt(i)[n],
            y = void 0;
        if (n === "top" || n === "left" ? y = a >= f : y = a <= f, !y) return i;
        if (i === jn()) break;
        i = pi(i, !1)
    }
    return !1
}

function bo(t, e, n, i) {
    for (var a = 0, f = 0, y = t.children; f < y.length;) {
        if (y[f].style.display !== "none" && y[f] !== et.ghost && (i || y[f] !== et.dragged) && Vn(y[f], n.draggable, t, !1)) {
            if (a === e) return y[f];
            a++
        }
        f++
    }
    return null
}

function cl(t, e) {
    for (var n = t.lastElementChild; n && (n === et.ghost || it(n, "display") === "none" || e && !rs(n, e));) n = n.previousElementSibling;
    return n || null
}

function qn(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== et.clone && (!e || rs(t, e)) && n++;
    return n
}

function ph(t) {
    var e = 0,
        n = 0,
        i = jn();
    if (t)
        do {
            var a = mo(t),
                f = a.a,
                y = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * y
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function tC(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function pi(t, e) {
    if (!t || !t.getBoundingClientRect) return jn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = it(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return jn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return jn()
}

function nC(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function fa(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var lr;

function rd(t, e) {
    return function() {
        if (!lr) {
            var n = arguments,
                i = this;
            n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), lr = setTimeout(function() {
                lr = void 0
            }, e)
        }
    }
}

function iC() {
    clearTimeout(lr), lr = void 0
}

function sd(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function ad(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var In = "Sortable" + new Date().getTime();

function oC() {
    var t = [],
        e;
    return {
        captureAnimationState: function() {
            if (t = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(a) {
                    if (!(it(a, "display") === "none" || a === et.ghost)) {
                        t.push({
                            target: a,
                            rect: Jt(a)
                        });
                        var f = Hn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var y = mo(a, !0);
                            y && (f.top -= y.f, f.left -= y.e)
                        }
                        a.fromRect = f
                    }
                })
            }
        },
        addAnimationState: function(i) {
            t.push(i)
        },
        removeAnimationState: function(i) {
            t.splice(tC(t, {
                target: i
            }), 1)
        },
        animateAll: function(i) {
            var a = this;
            if (!this.options.animation) {
                clearTimeout(e), typeof i == "function" && i();
                return
            }
            var f = !1,
                y = 0;
            t.forEach(function(S) {
                var I = 0,
                    O = S.target,
                    R = O.fromRect,
                    V = Jt(O),
                    X = O.prevFromRect,
                    ie = O.prevToRect,
                    J = S.rect,
                    oe = mo(O, !0);
                oe && (V.top -= oe.f, V.left -= oe.e), O.toRect = V, O.thisAnimationDuration && fa(X, V) && !fa(R, V) && (J.top - V.top) / (J.left - V.left) === (R.top - V.top) / (R.left - V.left) && (I = sC(J, X, ie, a.options)), fa(V, R) || (O.prevFromRect = R, O.prevToRect = V, I || (I = a.options.animation), a.animate(O, J, V, I)), I && (f = !0, y = Math.max(y, I), clearTimeout(O.animationResetTimer), O.animationResetTimer = setTimeout(function() {
                    O.animationTime = 0, O.prevFromRect = null, O.fromRect = null, O.prevToRect = null, O.thisAnimationDuration = null
                }, I), O.thisAnimationDuration = I)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, y) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, y) {
            if (y) {
                it(i, "transition", ""), it(i, "transform", "");
                var S = mo(this.el),
                    I = S && S.a,
                    O = S && S.d,
                    R = (a.left - f.left) / (I || 1),
                    V = (a.top - f.top) / (O || 1);
                i.animatingX = !!R, i.animatingY = !!V, it(i, "transform", "translate3d(" + R + "px," + V + "px,0)"), this.forRepaintDummy = rC(i), it(i, "transition", "transform " + y + "ms" + (this.options.easing ? " " + this.options.easing : "")), it(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    it(i, "transition", ""), it(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, y)
            }
        }
    }
}

function rC(t) {
    return t.offsetWidth
}

function sC(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var ro = [],
    pa = {
        initializeByDefault: !0
    },
    mr = {
        mount: function(e) {
            for (var n in pa) pa.hasOwnProperty(n) && !(n in e) && (e[n] = pa[n]);
            ro.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), ro.push(e)
        },
        pluginEvent: function(e, n, i) {
            var a = this;
            this.eventCanceled = !1, i.cancel = function() {
                a.eventCanceled = !0
            };
            var f = e + "Global";
            ro.forEach(function(y) {
                !n[y.pluginName] || (n[y.pluginName][f] && n[y.pluginName][f](Hn({
                    sortable: n
                }, i)), n.options[y.pluginName] && n[y.pluginName][e] && n[y.pluginName][e](Hn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            ro.forEach(function(S) {
                var I = S.pluginName;
                if (!(!e.options[I] && !S.initializeByDefault)) {
                    var O = new S(e, n, e.options);
                    O.sortable = e, O.options = e.options, e[I] = O, si(i, O.defaults)
                }
            });
            for (var f in e.options)
                if (!!e.options.hasOwnProperty(f)) {
                    var y = this.modifyOption(e, f, e.options[f]);
                    typeof y < "u" && (e.options[f] = y)
                }
        },
        getEventProperties: function(e, n) {
            var i = {};
            return ro.forEach(function(a) {
                typeof a.eventProperties == "function" && si(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return ro.forEach(function(f) {
                !e[f.pluginName] || f.optionListeners && typeof f.optionListeners[n] == "function" && (a = f.optionListeners[n].call(e[f.pluginName], i))
            }), a
        }
    };

function aC(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        f = t.cloneEl,
        y = t.toEl,
        S = t.fromEl,
        I = t.oldIndex,
        O = t.newIndex,
        R = t.oldDraggableIndex,
        V = t.newDraggableIndex,
        X = t.originalEvent,
        ie = t.putSortable,
        J = t.extraEventProperties;
    if (e = e || n && n[In], !!e) {
        var oe, m = e.options,
            L = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !li && !gr ? oe = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (oe = document.createEvent("Event"), oe.initEvent(i, !0, !0)), oe.to = y || n, oe.from = S || n, oe.item = a || n, oe.clone = f, oe.oldIndex = I, oe.newIndex = O, oe.oldDraggableIndex = R, oe.newDraggableIndex = V, oe.originalEvent = X, oe.pullMode = ie ? ie.lastPutMode : void 0;
        var z = Hn(Hn({}, J), mr.getEventProperties(i, e));
        for (var ae in z) oe[ae] = z[ae];
        n && n.dispatchEvent(oe), m[L] && m[L].call(e, oe)
    }
}
var lC = ["evt"],
    bn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = Kk(i, lC);
        mr.pluginEvent.bind(et)(e, n, Hn({
            dragEl: qe,
            parentEl: Vt,
            ghostEl: ut,
            rootEl: Lt,
            nextEl: Ri,
            lastDownEl: Yr,
            cloneEl: Dt,
            cloneHidden: ci,
            dragStarted: er,
            putSortable: en,
            activeSortable: et.active,
            originalEvent: a,
            oldIndex: uo,
            oldDraggableIndex: hr,
            newIndex: Sn,
            newDraggableIndex: di,
            hideGhostForTarget: dd,
            unhideGhostForTarget: cd,
            cloneNowHidden: function() {
                ci = !0
            },
            cloneNowShown: function() {
                ci = !1
            },
            dispatchSortableEvent: function(S) {
                gn({
                    sortable: n,
                    name: S,
                    originalEvent: a
                })
            }
        }, f))
    };

function gn(t) {
    aC(Hn({
        putSortable: en,
        cloneEl: Dt,
        targetEl: qe,
        rootEl: Lt,
        oldIndex: uo,
        oldDraggableIndex: hr,
        newIndex: Sn,
        newDraggableIndex: di
    }, t))
}
var qe, Vt, ut, Lt, Ri, Yr, Dt, ci, uo, Sn, hr, di, jr, en, ho = !1,
    ss = !1,
    as = [],
    Ai, Mn, ga, ma, gh, mh, er, so, ur, dr = !1,
    Hr = !1,
    Jr, ln, ya = [],
    Ma = !1,
    ls = [],
    ks = typeof document < "u",
    Fr = td,
    yh = gr || li ? "cssFloat" : "float",
    hC = ks && !nd && !td && "draggable" in document.createElement("div"),
    ld = function() {
        if (!!ks) {
            if (li) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    hd = function(e, n) {
        var i = it(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = bo(e, 0, n),
            y = bo(e, 1, n),
            S = f && it(f),
            I = y && it(y),
            O = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Jt(f).width,
            R = I && parseInt(I.marginLeft) + parseInt(I.marginRight) + Jt(y).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && S.float && S.float !== "none") {
            var V = S.float === "left" ? "left" : "right";
            return y && (I.clear === "both" || I.clear === V) ? "vertical" : "horizontal"
        }
        return f && (S.display === "block" || S.display === "flex" || S.display === "table" || S.display === "grid" || O >= a && i[yh] === "none" || y && i[yh] === "none" && O + R > a) ? "vertical" : "horizontal"
    },
    uC = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            y = i ? e.width : e.height,
            S = i ? n.left : n.top,
            I = i ? n.right : n.bottom,
            O = i ? n.width : n.height;
        return a === S || f === I || a + y / 2 === S + O / 2
    },
    dC = function(e, n) {
        var i;
        return as.some(function(a) {
            var f = a[In].options.emptyInsertThreshold;
            if (!(!f || cl(a))) {
                var y = Jt(a),
                    S = e >= y.left - f && e <= y.right + f,
                    I = n >= y.top - f && n <= y.bottom + f;
                if (S && I) return i = a
            }
        }), i
    },
    ud = function(e) {
        function n(f, y) {
            return function(S, I, O, R) {
                var V = S.options.group.name && I.options.group.name && S.options.group.name === I.options.group.name;
                if (f == null && (y || V)) return !0;
                if (f == null || f === !1) return !1;
                if (y && f === "clone") return f;
                if (typeof f == "function") return n(f(S, I, O, R), y)(S, I, O, R);
                var X = (y ? S : I).options.group.name;
                return f === !0 || typeof f == "string" && f === X || f.join && f.indexOf(X) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Ur(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    dd = function() {
        !ld && ut && it(ut, "display", "none")
    },
    cd = function() {
        !ld && ut && it(ut, "display", "")
    };
ks && !nd && document.addEventListener("click", function(t) {
    if (ss) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ss = !1, !1
}, !0);
var qi = function(e) {
        if (qe) {
            e = e.touches ? e.touches[0] : e;
            var n = dC(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[In]._onDragOver(i)
            }
        }
    },
    cC = function(e) {
        qe && qe.parentNode[In]._isOutsideThisEl(e.target)
    };

function et(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = si({}, e), t[In] = this;
    var n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return hd(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(y, S) {
            y.setData("Text", S.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: et.supportPointer !== !1 && "PointerEvent" in window && !ar,
        emptyInsertThreshold: 5
    };
    mr.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    ud(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : hC, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Et(t, "pointerdown", this._onTapStart) : (Et(t, "mousedown", this._onTapStart), Et(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Et(t, "dragover", this), Et(t, "dragenter", this)), as.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), si(this, oC())
}
et.prototype = {
    constructor: et,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (so = null)
    },
    _getDirection: function(e, n) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, qe) : this.options.direction
    },
    _onTapStart: function(e) {
        if (!!e.cancelable) {
            var n = this,
                i = this.el,
                a = this.options,
                f = a.preventOnFilter,
                y = e.type,
                S = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                I = (S || e).target,
                O = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || I,
                R = a.filter;
            if (bC(i), !qe && !(/mousedown|pointerdown/.test(y) && e.button !== 0 || a.disabled) && !O.isContentEditable && !(!this.nativeDraggable && ar && I && I.tagName.toUpperCase() === "SELECT") && (I = Vn(I, a.draggable, i, !1), !(I && I.animated) && Yr !== I)) {
                if (uo = qn(I), hr = qn(I, a.draggable), typeof R == "function") {
                    if (R.call(this, e, I, this)) {
                        gn({
                            sortable: n,
                            rootEl: O,
                            name: "filter",
                            targetEl: I,
                            toEl: i,
                            fromEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (R && (R = R.split(",").some(function(V) {
                        if (V = Vn(O, V.trim(), i, !1), V) return gn({
                            sortable: n,
                            rootEl: V,
                            name: "filter",
                            targetEl: I,
                            fromEl: i,
                            toEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), !0
                    }), R)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !Vn(O, a.handle, i, !1) || this._prepareDragStart(e, S, I)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            f = a.el,
            y = a.options,
            S = f.ownerDocument,
            I;
        if (i && !qe && i.parentNode === f) {
            var O = Jt(i);
            if (Lt = f, qe = i, Vt = qe.parentNode, Ri = qe.nextSibling, Yr = i, jr = y.group, et.dragged = qe, Ai = {
                    target: qe,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, gh = Ai.clientX - O.left, mh = Ai.clientY - O.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, qe.style["will-change"] = "all", I = function() {
                    if (bn("delayEnded", a, {
                            evt: e
                        }), et.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !dh && a.nativeDraggable && (qe.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), xn(qe, y.chosenClass, !0)
                }, y.ignore.split(",").forEach(function(R) {
                    od(qe, R.trim(), wa)
                }), Et(S, "dragover", qi), Et(S, "mousemove", qi), Et(S, "touchmove", qi), Et(S, "mouseup", a._onDrop), Et(S, "touchend", a._onDrop), Et(S, "touchcancel", a._onDrop), dh && this.nativeDraggable && (this.options.touchStartThreshold = 4, qe.draggable = !0), bn("delayStart", this, {
                    evt: e
                }), y.delay && (!y.delayOnTouchOnly || n) && (!this.nativeDraggable || !(gr || li))) {
                if (et.eventCanceled) {
                    this._onDrop();
                    return
                }
                Et(S, "mouseup", a._disableDelayedDrag), Et(S, "touchend", a._disableDelayedDrag), Et(S, "touchcancel", a._disableDelayedDrag), Et(S, "mousemove", a._delayedDragTouchMoveHandler), Et(S, "touchmove", a._delayedDragTouchMoveHandler), y.supportPointer && Et(S, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(I, y.delay)
            } else I()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        qe && wa(qe), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._disableDelayedDrag), bt(e, "touchend", this._disableDelayedDrag), bt(e, "touchcancel", this._disableDelayedDrag), bt(e, "mousemove", this._delayedDragTouchMoveHandler), bt(e, "touchmove", this._delayedDragTouchMoveHandler), bt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Et(document, "pointermove", this._onTouchMove) : n ? Et(document, "touchmove", this._onTouchMove) : Et(document, "mousemove", this._onTouchMove) : (Et(qe, "dragend", this), Et(Lt, "dragstart", this._onDragStart));
        try {
            document.selection ? Qr(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (ho = !1, Lt && qe) {
            bn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && Et(document, "dragover", cC);
            var i = this.options;
            !e && xn(qe, i.dragClass, !1), xn(qe, i.ghostClass, !0), et.active = this, e && this._appendGhost(), gn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Mn) {
            this._lastX = Mn.clientX, this._lastY = Mn.clientY, dd();
            for (var e = document.elementFromPoint(Mn.clientX, Mn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Mn.clientX, Mn.clientY), e !== n);) n = e;
            if (qe.parentNode[In]._isOutsideThisEl(e), n)
                do {
                    if (n[In]) {
                        var i = void 0;
                        if (i = n[In]._onDragOver({
                                clientX: Mn.clientX,
                                clientY: Mn.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            cd()
        }
    },
    _onTouchMove: function(e) {
        if (Ai) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                y = ut && mo(ut, !0),
                S = ut && y && y.a,
                I = ut && y && y.d,
                O = Fr && ln && ph(ln),
                R = (f.clientX - Ai.clientX + a.x) / (S || 1) + (O ? O[0] - ya[0] : 0) / (S || 1),
                V = (f.clientY - Ai.clientY + a.y) / (I || 1) + (O ? O[1] - ya[1] : 0) / (I || 1);
            if (!et.active && !ho) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                y ? (y.e += R - (ga || 0), y.f += V - (ma || 0)) : y = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: R,
                    f: V
                };
                var X = "matrix(".concat(y.a, ",").concat(y.b, ",").concat(y.c, ",").concat(y.d, ",").concat(y.e, ",").concat(y.f, ")");
                it(ut, "webkitTransform", X), it(ut, "mozTransform", X), it(ut, "msTransform", X), it(ut, "transform", X), ga = R, ma = V, Mn = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Lt,
                n = Jt(qe, !0, Fr, !0, e),
                i = this.options;
            if (Fr) {
                for (ln = e; it(ln, "position") === "static" && it(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = jn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = jn(), ya = ph(ln)
            }
            ut = qe.cloneNode(!0), xn(ut, i.ghostClass, !1), xn(ut, i.fallbackClass, !0), xn(ut, i.dragClass, !0), it(ut, "transition", ""), it(ut, "transform", ""), it(ut, "box-sizing", "border-box"), it(ut, "margin", 0), it(ut, "top", n.top), it(ut, "left", n.left), it(ut, "width", n.width), it(ut, "height", n.height), it(ut, "opacity", "0.8"), it(ut, "position", Fr ? "absolute" : "fixed"), it(ut, "zIndex", "100000"), it(ut, "pointerEvents", "none"), et.ghost = ut, e.appendChild(ut), it(ut, "transform-origin", gh / parseInt(ut.style.width) * 100 + "% " + mh / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            a = e.dataTransfer,
            f = i.options;
        if (bn("dragStart", this, {
                evt: e
            }), et.eventCanceled) {
            this._onDrop();
            return
        }
        bn("setupClone", this), et.eventCanceled || (Dt = ad(qe), Dt.removeAttribute("id"), Dt.draggable = !1, Dt.style["will-change"] = "", this._hideClone(), xn(Dt, this.options.chosenClass, !1), et.clone = Dt), i.cloneId = Qr(function() {
            bn("clone", i), !et.eventCanceled && (i.options.removeCloneOnHide || Lt.insertBefore(Dt, qe), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && xn(qe, f.dragClass, !0), n ? (ss = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (bt(document, "mouseup", i._onDrop), bt(document, "touchend", i._onDrop), bt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, qe)), Et(document, "drop", i), it(qe, "transform", "translateZ(0)")), ho = !0, i._dragStartId = Qr(i._dragStarted.bind(i, n, e)), Et(document, "selectstart", i), er = !0, ar && it(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, y, S = this.options,
            I = S.group,
            O = et.active,
            R = jr === I,
            V = S.sort,
            X = en || O,
            ie, J = this,
            oe = !1;
        if (Ma) return;

        function m(we, ue) {
            bn(we, J, Hn({
                evt: e,
                isOwner: R,
                axis: ie ? "vertical" : "horizontal",
                revert: y,
                dragRect: a,
                targetRect: f,
                canSort: V,
                fromSortable: X,
                target: i,
                completed: z,
                onMove: function(Ie, Ve) {
                    return Gr(Lt, n, qe, a, Ie, Jt(Ie), e, Ve)
                },
                changed: ae
            }, ue))
        }

        function L() {
            m("dragOverAnimationCapture"), J.captureAnimationState(), J !== X && X.captureAnimationState()
        }

        function z(we) {
            return m("dragOverCompleted", {
                insertion: we
            }), we && (R ? O._hideClone() : O._showClone(J), J !== X && (xn(qe, en ? en.options.ghostClass : O.options.ghostClass, !1), xn(qe, S.ghostClass, !0)), en !== J && J !== et.active ? en = J : J === et.active && en && (en = null), X === J && (J._ignoreWhileAnimating = i), J.animateAll(function() {
                m("dragOverAnimationComplete"), J._ignoreWhileAnimating = null
            }), J !== X && (X.animateAll(), X._ignoreWhileAnimating = null)), (i === qe && !qe.animated || i === n && !i.animated) && (so = null), !S.dragoverBubble && !e.rootEl && i !== document && (qe.parentNode[In]._isOutsideThisEl(e.target), !we && qi(e)), !S.dragoverBubble && e.stopPropagation && e.stopPropagation(), oe = !0
        }

        function ae() {
            Sn = qn(qe), di = qn(qe, S.draggable), gn({
                sortable: J,
                name: "change",
                toEl: n,
                newIndex: Sn,
                newDraggableIndex: di,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = Vn(i, S.draggable, n, !0), m("dragOver"), et.eventCanceled) return oe;
        if (qe.contains(e.target) || i.animated && i.animatingX && i.animatingY || J._ignoreWhileAnimating === i) return z(!1);
        if (ss = !1, O && !S.disabled && (R ? V || (y = Vt !== Lt) : en === this || (this.lastPutMode = jr.checkPull(this, O, qe, e)) && I.checkPut(this, O, qe, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Jt(qe), m("dragOverValid"), et.eventCanceled) return oe;
            if (y) return Vt = Lt, L(), this._hideClone(), m("revert"), et.eventCanceled || (Ri ? Lt.insertBefore(qe, Ri) : Lt.appendChild(qe)), z(!0);
            var re = cl(n, S.draggable);
            if (!re || mC(e, ie, this) && !re.animated) {
                if (re === qe) return z(!1);
                if (re && n === e.target && (i = re), i && (f = Jt(i)), Gr(Lt, n, qe, a, i, f, e, !!i) !== !1) return L(), re && re.nextSibling ? n.insertBefore(qe, re.nextSibling) : n.appendChild(qe), Vt = n, ae(), z(!0)
            } else if (re && gC(e, ie, this)) {
                var ye = bo(n, 0, S, !0);
                if (ye === qe) return z(!1);
                if (i = ye, f = Jt(i), Gr(Lt, n, qe, a, i, f, e, !1) !== !1) return L(), n.insertBefore(qe, ye), Vt = n, ae(), z(!0)
            } else if (i.parentNode === n) {
                f = Jt(i);
                var c = 0,
                    Ee, _e = qe.parentNode !== n,
                    Le = !uC(qe.animated && qe.toRect || a, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Ne = fh(i, "top", "top") || fh(qe, "top", "top"),
                    Q = Ne ? Ne.scrollTop : void 0;
                so !== i && (Ee = f[lt], dr = !1, Hr = !Le && S.invertSwap || _e), c = yC(e, i, f, ie, Le ? 1 : S.swapThreshold, S.invertedSwapThreshold == null ? S.swapThreshold : S.invertedSwapThreshold, Hr, so === i);
                var je;
                if (c !== 0) {
                    var G = qn(qe);
                    do G -= c, je = Vt.children[G]; while (je && (it(je, "display") === "none" || je === ut))
                }
                if (c === 0 || je === i) return z(!1);
                so = i, ur = c;
                var se = i.nextElementSibling,
                    Te = !1;
                Te = c === 1;
                var ve = Gr(Lt, n, qe, a, i, f, e, Te);
                if (ve !== !1) return (ve === 1 || ve === -1) && (Te = ve === 1), Ma = !0, setTimeout(pC, 30), L(), Te && !se ? n.appendChild(qe) : i.parentNode.insertBefore(qe, Te ? se : i), Ne && sd(Ne, 0, Q - Ne.scrollTop), Vt = qe.parentNode, Ee !== void 0 && !Hr && (Jr = Math.abs(Ee - Jt(i)[lt])), ae(), z(!0)
            }
            if (n.contains(qe)) return z(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        bt(document, "mousemove", this._onTouchMove), bt(document, "touchmove", this._onTouchMove), bt(document, "pointermove", this._onTouchMove), bt(document, "dragover", qi), bt(document, "mousemove", qi), bt(document, "touchmove", qi)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._onDrop), bt(e, "touchend", this._onDrop), bt(e, "pointerup", this._onDrop), bt(e, "touchcancel", this._onDrop), bt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (Sn = qn(qe), di = qn(qe, i.draggable), bn("drop", this, {
                evt: e
            }), Vt = qe && qe.parentNode, Sn = qn(qe), di = qn(qe, i.draggable), et.eventCanceled) {
            this._nulling();
            return
        }
        ho = !1, Hr = !1, dr = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), La(this.cloneId), La(this._dragStartId), this.nativeDraggable && (bt(document, "drop", this), bt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ar && it(document.body, "user-select", ""), it(qe, "transform", ""), e && (er && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Lt === Vt || en && en.lastPutMode !== "clone") && Dt && Dt.parentNode && Dt.parentNode.removeChild(Dt), qe && (this.nativeDraggable && bt(qe, "dragend", this), wa(qe), qe.style["will-change"] = "", er && !ho && xn(qe, en ? en.options.ghostClass : this.options.ghostClass, !1), xn(qe, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: Vt,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Lt !== Vt ? (Sn >= 0 && (gn({
            rootEl: Vt,
            name: "add",
            toEl: Vt,
            fromEl: Lt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "remove",
            toEl: Vt,
            originalEvent: e
        }), gn({
            rootEl: Vt,
            name: "sort",
            toEl: Vt,
            fromEl: Lt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: Vt,
            originalEvent: e
        })), en && en.save()) : Sn !== uo && Sn >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: Vt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: Vt,
            originalEvent: e
        })), et.active && ((Sn == null || Sn === -1) && (Sn = uo, di = hr), gn({
            sortable: this,
            name: "end",
            toEl: Vt,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        bn("nulling", this), Lt = qe = Vt = ut = Ri = Dt = Yr = ci = Ai = Mn = er = Sn = di = uo = hr = so = ur = en = jr = et.dragged = et.ghost = et.clone = et.active = null, ls.forEach(function(e) {
            e.checked = !0
        }), ls.length = ga = ma = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                qe && (this._onDragOver(e), fC(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, y = this.options; a < f; a++) n = i[a], Vn(n, y.draggable, this.el, !1) && e.push(n.getAttribute(y.dataIdAttr) || vC(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, y) {
            var S = a.children[y];
            Vn(S, this.options.draggable, a, !1) && (i[f] = S)
        }, this), n && this.captureAnimationState(), e.forEach(function(f) {
            i[f] && (a.removeChild(i[f]), a.appendChild(i[f]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return Vn(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var a = mr.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && ud(i)
    },
    destroy: function() {
        bn("destroy", this);
        var e = this.el;
        e[In] = null, bt(e, "mousedown", this._onTapStart), bt(e, "touchstart", this._onTapStart), bt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (bt(e, "dragover", this), bt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), as.splice(as.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ci) {
            if (bn("hideClone", this), et.eventCanceled) return;
            it(Dt, "display", "none"), this.options.removeCloneOnHide && Dt.parentNode && Dt.parentNode.removeChild(Dt), ci = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ci) {
            if (bn("showClone", this), et.eventCanceled) return;
            qe.parentNode == Lt && !this.options.group.revertClone ? Lt.insertBefore(Dt, qe) : Ri ? Lt.insertBefore(Dt, Ri) : Lt.appendChild(Dt), this.options.group.revertClone && this.animate(qe, Dt), it(Dt, "display", ""), ci = !1
        }
    }
};

function fC(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Gr(t, e, n, i, a, f, y, S) {
    var I, O = t[In],
        R = O.options.onMove,
        V;
    return window.CustomEvent && !li && !gr ? I = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (I = document.createEvent("Event"), I.initEvent("move", !0, !0)), I.to = e, I.from = t, I.dragged = n, I.draggedRect = i, I.related = a || e, I.relatedRect = f || Jt(e), I.willInsertAfter = S, I.originalEvent = y, t.dispatchEvent(I), R && (V = R.call(O, I, y)), V
}

function wa(t) {
    t.draggable = !1
}

function pC() {
    Ma = !1
}

function gC(t, e, n) {
    var i = Jt(bo(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function mC(t, e, n) {
    var i = Jt(cl(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function yC(t, e, n, i, a, f, y, S) {
    var I = i ? t.clientY : t.clientX,
        O = i ? n.height : n.width,
        R = i ? n.top : n.left,
        V = i ? n.bottom : n.right,
        X = !1;
    if (!y) {
        if (S && Jr < O * a) {
            if (!dr && (ur === 1 ? I > R + O * f / 2 : I < V - O * f / 2) && (dr = !0), dr) X = !0;
            else if (ur === 1 ? I < R + Jr : I > V - Jr) return -ur
        } else if (I > R + O * (1 - a) / 2 && I < V - O * (1 - a) / 2) return wC(e)
    }
    return X = X || y, X && (I < R + O * f / 2 || I > V - O * f / 2) ? I > R + O / 2 ? 1 : -1 : 0
}

function wC(t) {
    return qn(qe) < qn(t) ? 1 : -1
}

function vC(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function bC(t) {
    ls.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && ls.push(i)
    }
}

function Qr(t) {
    return setTimeout(t, 0)
}

function La(t) {
    return clearTimeout(t)
}
ks && Et(document, "touchmove", function(t) {
    (et.active || ho) && t.cancelable && t.preventDefault()
});
et.utils = {
    on: Et,
    off: bt,
    css: it,
    find: od,
    is: function(e, n) {
        return !!Vn(e, n, e, !1)
    },
    extend: nC,
    throttle: rd,
    closest: Vn,
    toggleClass: xn,
    clone: ad,
    index: qn,
    nextTick: Qr,
    cancelNextTick: La,
    detectDirection: hd,
    getChild: bo
};
et.get = function(t) {
    return t[In]
};
et.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (et.utils = Hn(Hn({}, et.utils), i.utils)), mr.mount(i)
    })
};
et.create = function(t, e) {
    return new et(t, e)
};
et.version = Zk;
var zt = [],
    tr, Ba, Da = !1,
    va, ba, hs, nr;

function kC() {
    function t() {
        this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0
        };
        for (var e in this) e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this))
    }
    return t.prototype = {
        dragStarted: function(n) {
            var i = n.originalEvent;
            this.sortable.nativeDraggable ? Et(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Et(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? Et(document, "touchmove", this._handleFallbackAutoScroll) : Et(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(n) {
            var i = n.originalEvent;
            !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i)
        },
        drop: function() {
            this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : (bt(document, "pointermove", this._handleFallbackAutoScroll), bt(document, "touchmove", this._handleFallbackAutoScroll), bt(document, "mousemove", this._handleFallbackAutoScroll)), wh(), Xr(), iC()
        },
        nulling: function() {
            hs = Ba = tr = Da = nr = va = ba = null, zt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                y = (n.touches ? n.touches[0] : n).clientY,
                S = document.elementFromPoint(f, y);
            if (hs = n, i || this.options.forceAutoScrollFallback || gr || li || ar) {
                ka(n, this.options, S, i);
                var I = pi(S, !0);
                Da && (!nr || f !== va || y !== ba) && (nr && wh(), nr = setInterval(function() {
                    var O = pi(document.elementFromPoint(f, y), !0);
                    O !== I && (I = O, Xr()), ka(n, a.options, O, i)
                }, 10), va = f, ba = y)
            } else {
                if (!this.options.bubbleScroll || pi(S, !0) === jn()) {
                    Xr();
                    return
                }
                ka(n, this.options, pi(S, !1), !1)
            }
        }
    }, si(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Xr() {
    zt.forEach(function(t) {
        clearInterval(t.pid)
    }), zt = []
}

function wh() {
    clearInterval(nr)
}
var ka = rd(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                y = e.scrollSensitivity,
                S = e.scrollSpeed,
                I = jn(),
                O = !1,
                R;
            Ba !== n && (Ba = n, Xr(), tr = e.scroll, R = e.scrollFn, tr === !0 && (tr = pi(n, !0)));
            var V = 0,
                X = tr;
            do {
                var ie = X,
                    J = Jt(ie),
                    oe = J.top,
                    m = J.bottom,
                    L = J.left,
                    z = J.right,
                    ae = J.width,
                    re = J.height,
                    ye = void 0,
                    c = void 0,
                    Ee = ie.scrollWidth,
                    _e = ie.scrollHeight,
                    Le = it(ie),
                    lt = ie.scrollLeft,
                    Ne = ie.scrollTop;
                ie === I ? (ye = ae < Ee && (Le.overflowX === "auto" || Le.overflowX === "scroll" || Le.overflowX === "visible"), c = re < _e && (Le.overflowY === "auto" || Le.overflowY === "scroll" || Le.overflowY === "visible")) : (ye = ae < Ee && (Le.overflowX === "auto" || Le.overflowX === "scroll"), c = re < _e && (Le.overflowY === "auto" || Le.overflowY === "scroll"));
                var Q = ye && (Math.abs(z - a) <= y && lt + ae < Ee) - (Math.abs(L - a) <= y && !!lt),
                    je = c && (Math.abs(m - f) <= y && Ne + re < _e) - (Math.abs(oe - f) <= y && !!Ne);
                if (!zt[V])
                    for (var G = 0; G <= V; G++) zt[G] || (zt[G] = {});
                (zt[V].vx != Q || zt[V].vy != je || zt[V].el !== ie) && (zt[V].el = ie, zt[V].vx = Q, zt[V].vy = je, clearInterval(zt[V].pid), (Q != 0 || je != 0) && (O = !0, zt[V].pid = setInterval(function() {
                    i && this.layer === 0 && et.active._onTouchMove(hs);
                    var se = zt[this.layer].vy ? zt[this.layer].vy * S : 0,
                        Te = zt[this.layer].vx ? zt[this.layer].vx * S : 0;
                    typeof R == "function" && R.call(et.dragged.parentNode[In], Te, se, t, hs, zt[this.layer].el) !== "continue" || sd(zt[this.layer].el, Te, se)
                }.bind({
                    layer: V
                }), 24))), V++
            } while (e.bubbleScroll && X !== I && (X = pi(X, !1)));
            Da = O
        }
    }, 30),
    fd = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            y = e.dispatchSortableEvent,
            S = e.hideGhostForTarget,
            I = e.unhideGhostForTarget;
        if (!!n) {
            var O = i || f;
            S();
            var R = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                V = document.elementFromPoint(R.clientX, R.clientY);
            I(), O && !O.el.contains(V) && (y("spill"), this.onSpill({
                dragEl: a,
                putSortable: i
            }))
        }
    };

function fl() {}
fl.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var a = bo(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: fd
};
si(fl, {
    pluginName: "revertOnSpill"
});

function pl() {}
pl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
    },
    drop: fd
};
si(pl, {
    pluginName: "removeOnSpill"
});
et.mount(new kC);
et.mount(pl, fl);
const CC = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    EC = ai.extend({
        defaults: {
            choiceId: void 0,
            type: "single",
            censorDialog: "none",
            chosen: null,
            choices: [],
            prompt: {},
            error: null,
            block: !0,
            classes: [],
            maxVotes: 16,
            doneText: {},
            announcePrompt: !1,
            strings: {
                your_choice: "Thank you. Your choice: ",
                censor_prompt: "Censor this?",
                censor_confirm: "Yes, Censor!",
                censor_cancel: "No!"
            }
        }
    }),
    xC = wt.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: Je.template("<div class='text'></div>"),
        model: new Xe.Model({}),
        bindings: {
            ":el": {
                attributes: [{
                    name: "data-id",
                    observe: "key"
                }]
            },
            ".text": "html"
        },
        onAttach() {
            this.stickit()
        }
    }),
    vh = wt.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: xC,
        collection: new Xe.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    SC = wt.View.extend({
        className: "SorterView",
        template: Je.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new Xe.Model({
            rankedLength: 1,
            choices: []
        }),
        bindings: {
            ".instructions": {
                observe: "rankedLength",
                visible: !0,
                onGet(t) {
                    return t < 3
                }
            },
            "#unrankedChoicesRegion": {
                observe: ["rankedLength", "choices"],
                visible: !0,
                onGet(t) {
                    return t[0] !== t[1].length
                }
            },
            "#lockInRegion": {
                observe: ["rankedLength", "choices"],
                visible: !0,
                onGet(t) {
                    return t[0] === t[1].length
                }
            }
        },
        regions: {
            rankedChoices: "#rankedChoicesRegion",
            unrankedChoices: "#unrankedChoicesRegion",
            lockInRegion: "#lockInRegion"
        },
        initialize() {
            this.rankedCollectionView = this.rankedCollectionView || new vh({
                collection: new Xe.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new vh({
                className: "sortable-collection unranked",
                collection: new Xe.Collection([])
            }), this.lockInView = this.lockInView || new is({
                block: !1,
                model: new Xe.Model({
                    action: "lock",
                    html: "Lock In"
                })
            }), this.listenTo(this.model, "change:choices", this.update, this)
        },
        onAttach() {
            this.showChildView("rankedChoices", this.rankedCollectionView), this.showChildView("unrankedChoices", this.unrankedCollectionView), this.showChildView("lockInRegion", this.lockInView), this.stickit(), this.update()
        },
        update() {
            const t = this.model.get("choices"),
                e = t.slice(0, 1),
                n = t.slice(1);
            this.rankedSortable && this.rankedSortable.destroy(), this.rankedCollectionView.collection.set(e), this.rankedSortable = et.create(this.rankedCollectionView.el, {
                group: "shared",
                onSort: this.handleOnSort.bind(this),
                animation: 100,
                delay: 100
            }), this.unrankedSortable && this.unrankedSortable.destroy(), this.unrankedCollectionView.collection.set(n), this.unrankedSortable = et.create(this.unrankedCollectionView.el, {
                className: "unranked",
                group: {
                    name: "shared",
                    put: !1
                },
                sort: !1
            })
        },
        moveItemInArray(t, e, n) {
            const i = t.slice(0);
            if (e === n) return i;
            const a = i[e];
            return i.splice(e, 1), i.splice(n, 0, a), i
        },
        handleOnSort() {
            const t = this.model.get("choices"),
                e = this.rankedSortable.toArray();
            e.length === t.length && this.triggerMethod("sorted", e), this.model.set("rankedLength", e.length)
        },
        onChildviewButtonLock() {
            const t = this.rankedSortable.toArray();
            this.triggerMethod("lock", t)
        }
    }),
    IC = wt.View.extend({
        className: "Sortable scrollable",
        template: Je.template(CC),
        model: new EC,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Vi({
                model: new Xe.Model
            }), this.sorterView = this.sorterView || new SC({}), this.listenTo(this.model, "change", this.update, this)
        },
        onAttach() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.sorterView)
        },
        update() {
            this.promptComponent.model.set(this.model.get("prompt")), this.model.get("choices").length !== this.sorterView.model.get("choices").length && this.sorterView.model.set("choices", this.model.get("choices"))
        },
        onChildviewSorted(t) {
            this.triggerMethod("client:message", {
                action: "sort",
                order: t
            })
        },
        onChildviewLock(t) {
            this.triggerMethod("client:message", {
                action: "sort",
                lock: !0,
                order: t
            })
        }
    }),
    TC = `<div id="controller" class="state-controller controller-content">
	<div class="ugc-action-toggle-visibility">
    	<span class="text toggle_prompts_prompt">toggle_prompts_prompt</span><br/>
    	<button id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-controller" data-target="controller"></button>
    	<button id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button  ugc-toggle-visibility-button-screen" data-target="screen"></button>
    </div>
    <div class="ugc-action-play">
        <div class="ugc-episode-name"></div>
    </div>
	<div class="ugc-action-new">
		<button class="button action-button create_new_episode" type="button" id="ugc-new-button">create_new_episode</button>
	</div>

	<div class="ugc-action-load">
    	<p class="ugc-option text-box ugc-load previous_episodes">previous_episodes</p>
		<div id="episodesRegion"></div>
	</div>

    <div id="prompt" class="prompt ugc-text"></div>
    <div id="ugc-no-actions">
    	<div id="ugc-no-actions-text"></div>
    </div>

    <div class="ugc-action-add">
    	<div id="inputRegion"></div>
    </div>

    <div class="ugc-action-title">
		<p class="text-box">
            <span class='text create_new_name_prompt'>create_new_name_prompt</span>
        </p>
    	<div id="titleInputRegion"></div>
    </div>

    <div class="ugc-action-close">
    	<button class="button action-button button_close" data-action="close">button_close</button>
    </div>
    <div class="ugc-action-unlock">
    	<button class="button action-button button_edit" data-action="unlock">button_edit</button>
    </div>
	<div class="ugc-action-done">
    	<button class="button action-button button_done" data-action="done">button_done</button>
    </div>
	<div class="ugc-action-submit">
    	<button class="button action-button button_publish" data-action="submit">button_publish</button>
    </div>

    <div class="ugc-action-play">
        <button class="button action-button button_play" data-action="play">button_play</button>
    </div>

    <div class="ugc-action-remove-content">
        <button class="button action-button button_delete" data-action="remove-content">button_delete</button>
    </div>

    <div class="ugc-action-exit">
        <button class="button action-button button_back_to_menu" data-action="exit">button_back_to_menu</button>
    </div>

    <div class="ugc-action-episodes">
        <button class="button action-button button_back_to_episodes" data-action="episodes">button_back_to_episodes</button>
    </div>

    <div class="ugc-action-remove">
        <div id="promptsCount" class="promptsCount"></div>
    	<div id="promptsRegion"></div>
    </div>
</div>`,
    _C = ai.extend({
        defaults: {
            controllerVisibility: !0,
            episodes: [],
            episodeTitle: "",
            index: 0,
            maxContentLength: 45,
            maxTitleLength: 20,
            name: "",
            noActionsText: "",
            prompts: [],
            screenVisibility: !0,
            state: "UGC",
            text: "",
            validActions: [],
            strings: {
                tos_warning: "By sharing content, you agree to our Terms of service",
                tos_warning_agree: "agree and share",
                tos_warning_back: "back to menu",
                create_new_episode: "create a new episode",
                create_new_name_prompt: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                create_new_button: "create",
                button_back_to_episodes: "back to episodes",
                button_back_to_menu: "back to menu",
                previous_episodes: "previous episodes:",
                toggle_prompts_prompt: "tap to show/hide prompts",
                button_close: "close",
                button_done: "done",
                button_add: "add prompt",
                input_placeholder: "enter a prompt",
                label_hidden: "hidden",
                button_edit: "edit",
                button_save: "save",
                button_publish: "publish",
                button_play: "play",
                button_delete: "delete",
                delete_warning: "Are you sure you want to delete this episode?",
                delete_warning_confirm: "Yes",
                delete_warning_cancel: "No"
            }
        }
    }),
    AC = wt.View.extend({
        className: "UGC scrollable",
        template: Je.template(TC),
        model: new _C,
        regions: {
            prompt: "#prompt",
            episodes: "#episodesRegion",
            input: "#inputRegion",
            titleInput: "#titleInputRegion",
            prompts: "#promptsRegion"
        },
        events: {
            "click #ugc-new-button": "onNewButtonClicked",
            "click #ugc-toggle-visibility-button-controller": "onToggleVisibilityController",
            "click #ugc-toggle-visibility-button-screen": "onToggleVisibilityScreen",
            "click .action-button": "onActionButtonClicked"
        },
        bindings: {
            ".ugc-text": {
                observe: "text",
                visible: !0,
                updateView: !0
            },
            ".ugc-action-add": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("add") !== -1
                }
            },
            ".ugc-action-close": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("close") !== -1
                }
            },
            ".ugc-action-exit": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("exit") !== -1
                }
            },
            ".ugc-action-load": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("load") !== -1
                }
            },
            ".ugc-action-new": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("new") !== -1
                }
            },
            ".ugc-action-play": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("play") !== -1
                }
            },
            ".ugc-action-remove": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("remove") !== -1
                }
            },
            ".ugc-action-remove-content": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("remove-content") !== -1
                }
            },
            ".ugc-action-done": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("done") !== -1
                }
            },
            ".ugc-action-submit": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("submit") !== -1
                }
            },
            ".ugc-action-title": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("title") !== -1
                }
            },
            ".ugc-action-toggle-visibility": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("toggle-visibility") !== -1
                }
            },
            ".ugc-action-unlock": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("unlock") !== -1
                }
            },
            ".ugc-action-episodes": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("episodes") !== -1
                }
            },
            "#ugc-no-actions": {
                observe: "validActions",
                visible(t) {
                    return !t || t.length === 0
                }
            },
            "#ugc-no-actions-text": {
                observe: "noActionsText",
                onGet(t) {
                    return typeof t == "string" ? t : ""
                }
            },
            "#ugc-toggle-visibility-button-controller": {
                classes: {
                    on: "controllerVisibility"
                }
            },
            "#ugc-toggle-visibility-button-screen": {
                classes: {
                    on: "screenVisibility"
                }
            },
            ".ugc-episode-name": "episodeTitle",
            ".create_new_episode": {
                observe: "strings",
                onGet(t) {
                    return t.create_new_episode || "create_new_episode"
                }
            },
            ".previous_episodes": {
                observe: "strings",
                onGet(t) {
                    return t.previous_episodes || "previous_episodes"
                }
            },
            ".toggle_prompts_prompt": {
                observe: "strings",
                onGet(t) {
                    return t.toggle_prompts_prompt || "toggle_prompts_prompt"
                }
            },
            ".create_new_name_prompt": {
                observe: "strings",
                onGet(t) {
                    return t.create_new_name_prompt || "create_new_name_prompt"
                }
            },
            ".button_close": {
                observe: "strings",
                onGet(t) {
                    return t.button_close || "button_close"
                }
            },
            ".button_edit": {
                observe: "strings",
                onGet(t) {
                    return t.button_edit || "button_edit"
                }
            },
            ".button_done": {
                observe: "strings",
                onGet(t) {
                    return t.button_done || "button_done"
                }
            },
            ".button_publish": {
                observe: "strings",
                onGet(t) {
                    return t.button_publish || "button_publish"
                }
            },
            ".button_play": {
                observe: "strings",
                onGet(t) {
                    return t.button_play || "button_play"
                }
            },
            ".button_delete": {
                observe: "strings",
                onGet(t) {
                    return t.button_delete || "button_delete"
                }
            },
            ".button_back_to_episodes": {
                observe: "strings",
                onGet(t) {
                    return t.button_back_to_episodes || "button_back_to_episodes"
                }
            },
            ".button_back_to_menu": {
                observe: "strings",
                onGet(t) {
                    return t.button_back_to_menu || "button_back_to_menu"
                }
            },
            "#promptsCount": {
                observe: ["prompts", "strings", "count", "maxCount"],
                onGet() {
                    const t = this.model.get("count"),
                        e = this.model.get("maxCount"),
                        n = this.model.get("prompts") || [],
                        i = this.model.get("strings").label_hidden || "hidden",
                        a = n.length;
                    let f = `${t}/${e}`;
                    return a < t && (f += ` (${t-a} ${i})`), f
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.promptComponent = this.promptComponent || new Vi({
                model: new Xe.Model
            }), this.episodesList = this.episodesList || new oi({
                action: "load",
                collection: new Xe.Collection
            }), this.inputComponent = this.inputComponent || new os({
                model: new Xe.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new os({
                model: new Xe.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new oi({
                action: "remove",
                collection: new Xe.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("episodes", this.episodesList), this.showChildView("input", this.inputComponent), this.showChildView("titleInput", this.titleInputComponent), this.showChildView("prompts", this.promptsList)
        },
        onAttach() {
            this.stickit(), this.update(), At.vibrate()
        },
        update() {
            const t = this.model.get("validActions").length === 0 ? this.model.get("noActionsText") : this.model.get("text");
            this.promptComponent.model.set("text", t);
            const e = this.model.get("episodes").map(n => {
                const i = nn.htmlUnescape(n.metadata.title);
                let a = nn.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = Je.extend({}, n);
                i.text = nn.htmlUnescape(n.text);
                let a = n.author !== this.client.userId ? "other" : "self";
                return n.className && (a += ` ${n.className}`), {
                    ...i,
                    className: a
                }
            }))
        },
        onNewButtonClicked() {
            this.triggerMethod("client:message", {
                action: "new"
            })
        },
        onChildviewInputSubmit() {
            let t, e;
            this.model.get("validActions").indexOf("add") !== -1 ? (t = "add", e = this.inputComponent.getSanitizedValue(), this.inputComponent.clearInput(), this.inputComponent.focus()) : this.model.get("validActions").indexOf("title") !== -1 && (t = "title", e = this.titleInputComponent.getValue(), this.titleInputComponent.clearInput()), !(!t || !e) && this.triggerMethod("client:message", {
                action: t,
                text: e
            })
        },
        onChildviewChildviewButtonLoad(t) {
            this.triggerMethod("client:message", {
                action: "load",
                contentId: t.get("key")
            })
        },
        onChildviewChildviewButtonRemove(t) {
            this.triggerMethod("client:message", {
                action: "remove",
                key: t.get("key")
            })
        },
        onToggleVisibilityController() {
            this.triggerMethod("client:message", {
                action: "toggle-visibility",
                target: "controller"
            })
        },
        onToggleVisibilityScreen() {
            this.triggerMethod("client:message", {
                action: "toggle-visibility",
                target: "screen"
            })
        },
        onActionButtonClicked(t) {
            const e = Me(t.currentTarget).data("action");
            if (e === "submit") {
                this.showTermsOfService();
                return
            }
            if (e === "remove-content") {
                this.showConfirmDeleteDialog();
                return
            }
            this.triggerMethod("client:message", {
                action: e
            })
        },
        showTermsOfService() {
            const t = `
            <a href='https://www.jackboxgames.com/terms-of-service/' target='_blank' >
                <br>
                <div class="tosLink">
                    <svg
                        class="bi bi-link-45deg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243
                                l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337
                                L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                        />
                        <path
                            d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896
                                l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z"
                        />
                        <path
                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346
                                L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287
                                l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"
                        />
                        <path
                            d="M10 9.5a2.99 2.99 0 0 0 .288-1.46
                                l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896
                                l-.167.167A3.004 3.004 0 0 0 10 9.501z"
                        />
                    </svg>
                </div>
            </a>
        `;
            mn.fire({
                target: this.el,
                html: `${this.model.get("strings").tos_warning}${t}`,
                showCancelButton: !0,
                confirmButtonText: this.model.get("strings").tos_warning_agree,
                cancelButtonText: this.model.get("strings").tos_warning_back,
                customClass: {
                    popup: "ugcModal",
                    confirmButton: "button confirmButton",
                    cancelButton: "button cancelButton"
                }
            }).then(e => {
                e.value && this.triggerMethod("client:message", {
                    action: "submit"
                })
            })
        },
        showConfirmDeleteDialog() {
            mn.fire({
                target: this.el,
                text: this.model.get("strings").delete_warning,
                showCancelButton: !0,
                confirmButtonText: this.model.get("strings").delete_warning_confirm,
                cancelButtonText: this.model.get("strings").delete_warning_cancel,
                customClass: {
                    popup: "ugcModal",
                    confirmButton: "button confirmButton",
                    cancelButton: "button cancelButton"
                }
            }).then(t => {
                t.value && this.triggerMethod("client:message", {
                    action: "remove-content"
                })
            })
        },
        onChildviewChildviewButtonChoose(t) {
            const e = t.get("text");
            this.triggerMethod("client:message", {
                action: "remove",
                text: e
            })
        }
    }),
    qC = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
    <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:rgb(0,0,0); stop-opacity:0.5" />
            <stop offset="60%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />
            <stop offset="80%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.7" />
        </radialGradient>
        <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.67 271.33">
            <title>astroIcon</title>
            <path class="cls-1" d="M253.83,108.17H210.89A57.83,57.83,0,0,1,160,138.5H140a57.83,57.83,0,0,1-50.89-30.33H46.17a19.5,19.5,0,0,0-19.5,19.5v11a19.5,19.5,0,0,0,19.5,19.5H70.4a19.5,19.5,0,0,1,19.5,19.5V259.8a17.37,17.37,0,0,0,17.36,17.37H115A17.37,17.37,0,0,0,132.4,259.8V236.53a17.37,17.37,0,0,1,17.37-17.36h0a17.36,17.36,0,0,1,17.36,17.36V259.8a17.37,17.37,0,0,0,17.37,17.37h9a17.37,17.37,0,0,0,17.36-17.37V177.67a19.5,19.5,0,0,1,19.5-19.5h23.49a19.5,19.5,0,0,0,19.5-19.5v-11A19.5,19.5,0,0,0,253.83,108.17Z" transform="translate(-18.17 -14.33)"/>
            <rect class="cls-1" x="64" y="8.5" width="135.67" height="115.67" rx="57.83" ry="57.83"/>
        </svg>
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           height="55"
           width="40"
           xml:space="preserve"
           viewBox="-20 -27.5 40 55"
           y="0px"
           x="0px"
           id="Layer_1"
           version="1.1"><metadata
           id="metadata10"><rdf:RDF><cc:Work
               rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                 rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
           id="defs8" />
        <path
           style="fill:#ffffff"
           d="m -20,27.5 20,-55 20,55 -20,-13 z"
           class="st0"
           id="aimArrow" />
        </svg>

    </defs>

    <circle class="background" r="16" cx="0" cy="0" />
    <circle class="background-gradient" r="32" cx="0" cy="0" fill="url(#grad1)" />
    <circle class="background-border" r=33 cx=0 cy=0 stroke="black" stroke-width="2" fill="none" />
    <circle id="health-display" class="health-display" r="33" cx="0" cy="0" />
    <circle class="circle-deadzone" fill="black" fill-opacity="0.8" r=1 cx=0 cy=0 stroke="white" stroke-width="0.3" stroke-dasharray="3.5 1.52" />
    
    <circle class="crosshair-center" r=1 cx=0 cy=0 />
    <circle class="circle-border-white" r="32" cx="0" cy="0" stroke="#ffffff" stroke-width="0.3" fill="none"/>
    <line class="line-helper-left" x1="-32" y1="0" x2="0" y2="0" ></line>
    <line class="line-helper-right" x1="32" y1="0" x2="0" y2="0" ></line>
    <circle class="locked-in-fade" r="17" cx="0" cy="0" />
    <line class="locked-in-line" x1="0" y1="0" x2="0" y2="0" display="inline"></line>
    <use class="aimArrow" xlink:href="#Layer_1" transform="rotate(180)" x="-2" y="-2.5" width="4" height="5"></use>
    <use class="astro" xlink:href="#Layer_3" transform="translate(-8, -8)" width="16" height="16"></use>
    <text id="text" class="text" x=0 y=10 text-anchor="middle" font-size=30 stroke="white">H</text>
</svg>`,
    OC = wt.View.extend({
        className: "RadialView",
        template: Je.template(qC),
        model: new Xe.Model({
            isTouching: !1,
            angle: 0,
            vector: {
                x: 0,
                y: 0
            },
            touchBuffer: 5
        }),
        events: {
            "mousedown .range-picker": "start",
            "touchstart .range-picker": "start",
            "touchmove .range-picker": "start",
            touchmove: "move",
            touchend: "end"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "lockedIn" : ""
                    }
                }]
            },
            ".background": {
                attributes: [{
                    name: "style",
                    observe: "accentColor",
                    onGet(t) {
                        return `stroke: ${t}`
                    }
                }]
            },
            ".health-display": {
                attributes: [{
                    name: "style",
                    observe: ["selector", "accentColor"],
                    onGet(t) {
                        let e = "";
                        const n = t[0],
                            i = t[1];
                        i && (e += `stroke:${i};`);
                        const a = n * 207,
                            f = 207 * (1 - n);
                        return e += `stroke-dasharray:${a} ${f};`, e += `transform:rotate(${-360*n-90}deg);`, e
                    }
                }]
            },
            ".line-helper-left": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "none" : "inline"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".line-helper-right": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "none" : "inline"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".locked-in-line": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "inline" : "none"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".circle-deadzone": {
                attributes: [{
                    name: "r",
                    observe: "isTouching",
                    onGet(t) {
                        return "9.6"
                    }
                }]
            },
            ".text": "text",
            ".astro": {
                attributes: [{
                    name: "style",
                    observe: ["accentColor", "lockedIn"],
                    onGet(t) {
                        let e = "";
                        return e += `fill:${t[1]?"black":t[0]};`, e += `stroke:${t[1]?"#cccccc":"#ff00ff"};`, e
                    }
                }, {
                    name: "x",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }, {
                    name: "width",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? 8 : 16
                    }
                }, {
                    name: "height",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? 8 : 16
                    }
                }, {
                    name: "transform",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "translate(-4, -4)" : "translate(-8,-8)"
                    }
                }]
            },
            ".locked-in-fade": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "inline" : "none"
                    }
                }]
            },
            ".aimArrow": {
                attributes: [{
                    name: "transform",
                    observe: "angle",
                    onGet(t) {
                        let e = "";
                        return e += ` rotate(${t+180})`, e
                    }
                }, {
                    name: "display",
                    observe: ["lockedIn", "vector"],
                    onGet(t) {
                        return t[0] && this.getDistance(t[1]) > 0 ? "inline" : "none"
                    }
                }]
            }
        },
        initialize() {
            this.model.on("change:angle", this.updateAngle, this), this.model.on("change:vector", this.updateVector, this), this.model.on("change:isTouching", this.updateIsTouching, this)
        },
        updateAngle() {
            this.triggerMethod("angle", this.model.get("angle"))
        },
        updateVector() {
            this.triggerMethod("vector", this.getNormalizedVector())
        },
        updateIsTouching() {
            this.triggerMethod("isTouching", this.model.get("isTouching"))
        },
        onRender() {
            this.stickit()
        },
        start(t) {
            const e = this.eventToCoord(t);
            this.startCoord || (this.startCoord = e)
        },
        move(t) {
            t.preventDefault();
            const e = this.eventToCoord(t);
            if (!this.model.get("isTouching") && this.startCoord && this.getDistance(e, this.startCoord) > this.model.get("touchBuffer") && this.model.set("isTouching", !0), !this.model.get("isTouching") || this.model.get("lockedIn")) return;
            const n = this.coordToVector(e);
            this.model.set("vector", n);
            const i = this.coordToAngle(e);
            this.model.set("angle", i)
        },
        end() {
            this.startCoord = null, this.model.get("isTouching") && (this.model.set("isTouching", !1), this.triggerMethod("end", this.model))
        },
        getDistance(t, e) {
            e || (e = {
                x: 0,
                y: 0
            });
            const n = {
                x: e.x - t.x,
                y: e.y - t.y
            };
            return Math.sqrt(n.x ** 2 + n.y ** 2)
        },
        getNormalizedVector() {
            const t = Je.extend({}, this.model.get("vector"));
            return t.x /= 32, t.y /= 32, t
        },
        eventToCoord(t) {
            const e = this.$el[0].getBoundingClientRect();
            return t.targetTouches && t.targetTouches instanceof TouchList && t.targetTouches.length > 0 ? {
                x: t.targetTouches[0].pageX - e.left,
                y: t.targetTouches[0].pageY - e.top
            } : {
                x: t.clientX - e.left,
                y: t.clientY - e.top
            }
        },
        coordToAngle(t) {
            const e = this.coordToVector(t);
            let n = Math.atan2(-e.x, e.y);
            return n += Math.PI, n = parseInt(n * 180 / Math.PI, 10), n
        },
        coordToVector(t) {
            const e = this.$el[0].getBoundingClientRect(),
                n = {
                    x: t.x - parseInt(e.width, 10) / 2,
                    y: t.y - parseInt(e.height, 10) / 2
                },
                i = 76 / e.width;
            n.x *= i, n.y *= i;
            const a = this.getDistance(n);
            if (a > 32) {
                const f = 32 / a;
                n.x *= f, n.y *= f
            }
            return n
        }
    }),
    RC = `<div id="status-bar" class="health text">\r
    <div id="weaponBorder" class="weaponBorder">\r
        <div id="weaponIcon" class="weaponIcon"></div>\r
    </div>\r
</div>\r
<div id="radial" class="radial"></div>\r
<div id="control-panel" class="control-panel">\r
    <div class="message text">message</div>\r
    <div class="weaponNameContainer text">\r
        <div class="weaponIcon small"></div>\r
        <span class="weaponName">weapon name</span>\r
    </div>\r
    <div class="weaponText text">weapon text</div>\r
</div>`,
    PC = ai.extend({
        defaults: {
            shotId: void 0,
            state: "Shoot",
            throttle: 44,
            weapon: {},
            playerCanSwap: !1,
            characterCurrentHealth: null,
            characterMaxHealth: null,
            lockedIn: !1,
            selectorCircle: !0,
            classes: [],
            message: ""
        }
    }),
    MC = wt.View.extend({
        model: new PC,
        template: Je.template(RC),
        className: "Shoot",
        client: null,
        regions: {
            radial: "#radial"
        },
        events: {
            "click .swap-button": "swapPlayer",
            touchstart: "eat",
            "click #reconnect": "reconnect"
        },
        eat(t) {
            t.preventDefault()
        },
        move(t) {
            this.radialComponent.move(t)
        },
        end(t) {
            this.radialComponent.end(t)
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.bgcolor ? `background-color:${t.bgcolor}` : ""
                    }
                }]
            },
            ".swap-button": {
                observe: "playerCanSwap",
                visible: !0
            },
            ".health": {
                observe: "characterCurrentHealth",
                visible(t) {
                    return t !== null
                }
            },
            ".currentHealth": "characterCurrentHealth",
            ".maxHealth": "characterMaxHealth",
            ".weaponText": {
                observe: "weapon",
                onGet(t) {
                    return t.text
                }
            },
            ".message": "message",
            ".weaponBorder": {
                attributes: [{
                    name: "class",
                    observe: "weapon",
                    onGet(t) {
                        return t ? t.count ? `count-${t.count}` : "" : null
                    }
                }]
            },
            ".weaponIcon": {
                attributes: [{
                    name: "class",
                    observe: "weapon",
                    onGet(t) {
                        return t ? t.id : ""
                    }
                }]
            },
            ".weaponName": {
                observe: "weapon",
                onGet(t) {
                    return t ? t.name ? t.name : t.id : ""
                }
            }
        },
        onChildviewVector(t) {
            this.throttledUpdate && this.throttledUpdate(t)
        },
        updateVector(t) {
            this.model.get("isAudience") || t.x === 0 && t.y === 0 || !this.radialComponent.model.get("isTouching") || this.triggerMethod("client:message", {
                action: "move",
                type: "move",
                vector: t
            })
        },
        onChildviewEnd() {
            if (this.model.get("lockedIn")) return;
            const t = this.radialComponent.getNormalizedVector();
            if (Math.sqrt(t.x * t.x + t.y * t.y) < .3) {
                this.radialComponent.model.set("vector", {
                    x: 0,
                    y: 0
                }), this.radialComponent.model.set("angle", 180), this.model.get("isPlayer") && this.triggerMethod("client:message", {
                    action: "cancel",
                    type: "cancel"
                });
                return
            }
            const n = this.model.get("weapon"),
                i = n.id ? n.id : this.model.get("weapon"),
                a = this.radialComponent.model.get("angle"),
                f = Math.floor(a / 10);
            this.triggerMethod("client:message", {
                action: "fire",
                type: "fire",
                weapon: i,
                vector: t
            }), this.model.get("isAudience") && (this.audienceShot = f * 10, this.shotId = this.model.get("shotId") || 0, this.model.setUpdate({
                lockedIn: !0,
                shotId: this.shotId
            }))
        },
        initialize(t) {
            this.client = t.client, this.radialComponent = new OC({
                model: new Xe.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = Je.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Me(window).on("mousemove", this.move.bind(this)), Me(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), Me(window).off("mousemove"), Me(window).off("mouseup")
        },
        update() {
            const t = this.model.get("characterCurrentHealth"),
                e = this.model.get("characterMaxHealth");
            if (this.radialComponent.model.set("selector", t / e), this.radialComponent.model.set("accentColor", this.model.get("characterColor")), this.radialComponent.model.set("lockedIn", this.model.get("lockedIn")), this.radialComponent.model.set("text", ""), this.client.isRole("audience") && ((this.model.get("shotId") === void 0 || this.model.get("shotId") !== this.shotId) && (this.audienceShot = void 0), this.audienceShot && (this.model.setUpdate({
                    lockedIn: !0,
                    shotId: this.model.get("shotId") || 0
                }), this.radialComponent.model.set("text", `${this.audienceShot}\xB0`))), !this.model.get("lockedIn") && !this.radialComponent.model.get("isTouching") && this.radialComponent.model.set("vector", {
                    x: 0,
                    y: 0
                }), this.throttledUpdate = Je.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
            else {
                if (!this.notified && this.model.get("state") === "Shoot") {
                    const n = {
                        ClusterBombs: [45, 60, 45, 60, 45, 60],
                        PlayerWeapon: [100, 100],
                        RainbowCannon: [45, 60, 45, 60, 45, 60],
                        Repeater: [45, 60, 45, 60, 45, 60],
                        Seeker: [45, 60, 45, 60, 45, 60],
                        Shield: [45, 60, 45, 60, 45, 60],
                        Stun: [45, 60, 45, 60, 45, 60],
                        SuperBlaster: [45, 60, 45, 60, 45, 60]
                    } [this.model.get("weapon").id];
                    At.vibrate(n)
                }
                this.notified = !0
            }
        },
        onRender() {
            this.showChildView("radial", this.radialComponent), this.stickit()
        },
        onAttach() {
            this.update(), this.onResize(), At.vibrate()
        },
        onResize() {
            const t = Me(".radial"),
                e = Me("#status-bar").outerHeight() + Me(".playerTopBar").outerHeight() + Me("#control-panel").outerHeight() + 10,
                n = Me(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
        }
    }),
    LC = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
<div id="controller-container" class="state-controller controller-page">
    <div id="playerRegion"></div>
    <div id="controller-main">
        <div class="loadingSpinner">
            <i class="fas fa-spinner fa-spin" style="font-size:48px"></i>
        </div>
    </div>
</div>
<div id="broadcaster" role="button" aria-label="twitch broadcaster information" style="display:none;" class="twitchBroadcasterIcon"></div>
`;
const bh = wt.View.extend({
    client: null,
    template: Je.template(LC),
    playerTopBar: null,
    className() {
        return `pt-page ${this.getOption("appTag")}`
    },
    regions: {
        player: "#playerRegion",
        controller: {
            el: "#controller-main",
            replaceElement: !0
        }
    },
    events: {
        "click .twitchBroadcasterIcon": "onTwitchBroadcasterIconClick"
    },
    bindings: {
        ":el": {
            attributes: [{
                name: "class",
                observe: "blob",
                onGet(t) {
                    let e = `pt-page ${this.getOption("appTag")}`;
                    return t && t.locale && (e += ` ${t.locale}`), e
                }
            }]
        },
        ".twitchBroadcasterIcon": {
            observe: ["broadcaster", "blob"],
            visible: !0,
            onGet([t, e]) {
                return t && e && !e.artifact && ["Lobby", "Logo"].includes(e.state)
            }
        }
    },
    initialize(t) {
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new Yk, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new Xe.Model({});
        const e = t.client.parseEntities();
        this.model.set(e), this.model.on({
            "change:player": this.setBlob,
            "change:room": this.setBlob,
            "change:audiencePlayer": this.setBlob,
            "change:blob": this.update
        }, this), this.render(), this.setBlob(), window.addEventListener("resize", this.onResize)
    },
    onRender() {
        this.update(), this.stickit()
    },
    onAttach() {
        this.showChildView("player", this.playerTopBar), this.onResize(), this.client.isRole("broadcaster") && (this.model.set("broadcaster", this.client.isRole("broadcaster")), this.showTwitchBroadcasterDialog(20 * 1e3))
    },
    onBeforeDestroy() {
        this.model.stopListening(), this.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.off("client:textDescriptions", this.onTextDescriptionsWithContext), this.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.off("client:disconnected", this.onDisconnectedWithContext), this.client.off("client:connection", this.onConnectionMessageWithContext)
    },
    updateLayout() {
        const e = this.model.get("blob").state;
        if (this.getGameLayout(e) !== -1) return null;
        switch (e) {
            case "Draw":
                return this.setLayout(Bk);
            case "EnterSingleText":
                return this.setLayout(Vk);
            case "Lobby":
                return this.setLayout(Fk);
            case "Logo":
                return this.setLayout(zk);
            case "MakeSingleChoice":
                return this.setLayout(ii);
            case "Shoot":
                return this.setLayout(MC);
            case "Sortable":
                return this.setLayout(IC);
            case "Camera":
                return this.setLayout(Sk);
            case "UGC":
                return this.setLayout(AC);
            default:
                return new Error("No common layout found")
        }
    },
    setLayout(t) {
        const e = new t(this.options),
            n = this.getRegion("controller");
        !n || (n.reset(), e.model.set(this.model.get("blob")), this.showChildView("controller", e), this.currentLayout = e, this.currentState = this.model.get("blob").state)
    },
    onEntityDidChange(t, e) {
        this.model.unset(t, {
            silent: !0
        }), this.model.set(t, e)
    },
    onTextDescriptions(t, e) {
        this.setTextDescriptions(e.latestDescriptions)
    },
    setBlob() {
        const t = this.model.get("player"),
            e = this.model.get("room"),
            n = this.model.get("audiencePlayer");
        let i = {};
        t && !Je.isEmpty(t) ? i = {
            ...Je.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...Je.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...Je.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && Zt.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: Je.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Di.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), Me("#textDescriptions").append(Me("<p />").text(e.text)))
        }))
    },
    parseBlob(t) {
        return t
    },
    getGameLayout() {
        return -1
    },
    formatSessionMessage(t) {
        return t
    },
    onTwitchBroadcasterIconClick() {
        this.showTwitchBroadcasterDialog()
    },
    showTwitchBroadcasterDialog(t) {
        let e = `
            <div class='icon-${this.client.roles.broadcaster.platform}'>
                ${this.client.roles.broadcaster.name}
            </div>`;
        e += `
            <div class='success'>
                You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.
            </div>`, this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), At.show("custom", {
            html: e,
            position: "bottom",
            timer: t,
            backdrop: "transparent",
            customClass: {
                container: "jbgTwitchContainer",
                popup: "jbgTwitchPopup",
                htmlContainer: "jbgTwitchContent",
                closeButton: "jbgCloseButton"
            },
            showCloseButton: !0,
            closeButtonHtml: `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path>
                    <path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" />
                </svg>`,
            showConfirmButton: !1,
            showClass: {
                popup: "jbgTwitchShow"
            },
            hideClass: {
                popup: "jbgTwitchHide"
            }
        })
    },
    onResize() {
        const t = Me(window).width(),
            e = Me(window).height();
        Me(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), At.show("error", {
            titleText: $r[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: $r[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        At.show("error", {
            titleText: $r[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: $r[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
        if (At.show("toast", {
                text: e
            }), t.status === "connected") {
            const n = this.client.parseEntities();
            this.model.set(n)
        }
    },
    async onChildviewClientMessage(t) {
        if (this.client.isRole("player"))
            if (t.textKey) try {
                await this.client.updateText(t.textKey, t.val)
            } catch (e) {
                if (e instanceof ti.EcastEntityNotFound || e instanceof ti.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                else if (e instanceof ti.EcastFilterError) this.currentLayout.onTextFilterError && this.currentLayout.onTextFilterError(e);
                else throw console.error(`Unhandled error updating text entity ${t.textKey}`), e
            } else if (t.objectKey) try {
                await this.client.updateObject(t.objectKey, t.val)
            } catch (e) {
                if (e instanceof ti.EcastEntityNotFound || e instanceof ti.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                else if (e instanceof ti.EcastFilterError) this.currentLayout.onObjectFilterError && this.currentLayout.onObjectFilterError(e);
                else throw console.error(`Unhandled error updating object entity ${t.objectKey}`), e
            } else {
                const e = this.formatSessionMessage(t);
                this.client.send("SendMessageToRoomOwner", e)
            } else if (this.client.isRole("audience")) {
                const e = this.currentLayout.sessionModule,
                    n = this.formatSessionMessage(t);
                if (!e) return;
                if (e === "vote") {
                    const i = this.currentLayout.model.get("countGroupName"),
                        a = n.vote;
                    this.onChildviewClientCountGroup({
                        name: i,
                        vote: a
                    })
                }
                if (e === "comment") {
                    const i = this.currentLayout.model.get("textRingName"),
                        a = n.entry;
                    this.onChildviewClientTextRing({
                        name: i,
                        text: a
                    })
                }
            }
    },
    onChildviewClientSessionMessage(t) {
        this.client.sessionSend(t.sessionModule, t.sessionName, t.sessionMessage)
    },
    onChildviewClientCountGroup({
        name: t,
        vote: e
    }) {
        t || (t = this.sessionModulePrefix + this.currentLayout.sessionName), this.client.incrementCountGroupCounter(t, e)
    },
    onChildviewClientGCounter({
        key: t,
        times: e
    }) {
        this.client.incrementGCounter(t, e)
    },
    onChildviewClientTextRing({
        name: t,
        text: e
    }) {
        t || (t = this.sessionModulePrefix + this.currentLayout.sessionName), this.client.pushTextRing(t, e)
    }
});
var pd = {
    exports: {}
};
/*!
 * EventEmitter v5.2.9 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */
(function(t) {
    (function(e) {
        function n() {}
        var i = n.prototype,
            a = e.EventEmitter;

        function f(I, O) {
            for (var R = I.length; R--;)
                if (I[R].listener === O) return R;
            return -1
        }

        function y(I) {
            return function() {
                return this[I].apply(this, arguments)
            }
        }
        i.getListeners = function(O) {
            var R = this._getEvents(),
                V, X;
            if (O instanceof RegExp) {
                V = {};
                for (X in R) R.hasOwnProperty(X) && O.test(X) && (V[X] = R[X])
            } else V = R[O] || (R[O] = []);
            return V
        }, i.flattenListeners = function(O) {
            var R = [],
                V;
            for (V = 0; V < O.length; V += 1) R.push(O[V].listener);
            return R
        }, i.getListenersAsObject = function(O) {
            var R = this.getListeners(O),
                V;
            return R instanceof Array && (V = {}, V[O] = R), V || R
        };

        function S(I) {
            return typeof I == "function" || I instanceof RegExp ? !0 : I && typeof I == "object" ? S(I.listener) : !1
        }
        i.addListener = function(O, R) {
            if (!S(R)) throw new TypeError("listener must be a function");
            var V = this.getListenersAsObject(O),
                X = typeof R == "object",
                ie;
            for (ie in V) V.hasOwnProperty(ie) && f(V[ie], R) === -1 && V[ie].push(X ? R : {
                listener: R,
                once: !1
            });
            return this
        }, i.on = y("addListener"), i.addOnceListener = function(O, R) {
            return this.addListener(O, {
                listener: R,
                once: !0
            })
        }, i.once = y("addOnceListener"), i.defineEvent = function(O) {
            return this.getListeners(O), this
        }, i.defineEvents = function(O) {
            for (var R = 0; R < O.length; R += 1) this.defineEvent(O[R]);
            return this
        }, i.removeListener = function(O, R) {
            var V = this.getListenersAsObject(O),
                X, ie;
            for (ie in V) V.hasOwnProperty(ie) && (X = f(V[ie], R), X !== -1 && V[ie].splice(X, 1));
            return this
        }, i.off = y("removeListener"), i.addListeners = function(O, R) {
            return this.manipulateListeners(!1, O, R)
        }, i.removeListeners = function(O, R) {
            return this.manipulateListeners(!0, O, R)
        }, i.manipulateListeners = function(O, R, V) {
            var X, ie, J = O ? this.removeListener : this.addListener,
                oe = O ? this.removeListeners : this.addListeners;
            if (typeof R == "object" && !(R instanceof RegExp))
                for (X in R) R.hasOwnProperty(X) && (ie = R[X]) && (typeof ie == "function" ? J.call(this, X, ie) : oe.call(this, X, ie));
            else
                for (X = V.length; X--;) J.call(this, R, V[X]);
            return this
        }, i.removeEvent = function(O) {
            var R = typeof O,
                V = this._getEvents(),
                X;
            if (R === "string") delete V[O];
            else if (O instanceof RegExp)
                for (X in V) V.hasOwnProperty(X) && O.test(X) && delete V[X];
            else delete this._events;
            return this
        }, i.removeAllListeners = y("removeEvent"), i.emitEvent = function(O, R) {
            var V = this.getListenersAsObject(O),
                X, ie, J, oe, m;
            for (oe in V)
                if (V.hasOwnProperty(oe))
                    for (X = V[oe].slice(0), J = 0; J < X.length; J++) ie = X[J], ie.once === !0 && this.removeListener(O, ie.listener), m = ie.listener.apply(this, R || []), m === this._getOnceReturnValue() && this.removeListener(O, ie.listener);
            return this
        }, i.trigger = y("emitEvent"), i.emit = function(O) {
            var R = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(O, R)
        }, i.setOnceReturnValue = function(O) {
            return this._onceReturnValue = O, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = a, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : yt || {})
})(pd);
const BC = pd.exports;
class DC extends BC {
    constructor(n, i) {
        super();
        at(this, "wsClient");
        at(this, "name");
        at(this, "id");
        at(this, "userId");
        at(this, "uuid");
        at(this, "joinAs", "player");
        at(this, "room");
        at(this, "roles", {});
        at(this, "code", null);
        at(this, "host");
        at(this, "onPlayerWelcome", n => {
            this.id = n.id, this.roles = n.profile ? n.profile.roles : {}, n.here && (this.host = Object.values(n.here).find(({
                roles: i
            }) => i.host)), this.emit("client:didJoinRoom", {
                appId: this.room.appId,
                appTag: this.room.appTag,
                id: n.id,
                reconnect: `${n.id}:${this.joinAs}:${n.secret}`
            })
        });
        at(this, "parseEntities", () => {
            if (!this.wsClient) return {};
            const n = this.wsClient.entities,
                i = {};
            return Object.keys(n).forEach(a => {
                const f = n[a];
                a === "room" || a === "bc:room" || a === "roomBlob" ? (f instanceof Oi.TextEntity && (i.room = f.toBlob()), f instanceof Oi.ObjectEntity && (i.room = f.val)) : a === "player" || a === `player:${this.id}` || a === `bc:customer:${this.userId}` ? (f instanceof Oi.TextEntity && (i.player = f.toBlob()), f instanceof Oi.ObjectEntity && (i.player = f.val)) : a === "audiencePlayer" && (f instanceof Oi.TextEntity && (i.audiencePlayer = f.toBlob()), f instanceof Oi.ObjectEntity && (i.audiencePlayer = f.val))
            }), i
        });
        this.wsClient = n, this.name = n.name, this.userId = n.userId, this.uuid = n.userId, this.joinAs = n.role, this.room = i.room, n.on("object", this.onObject.bind(this)), n.on("room/exit", this.onRoomExit.bind(this)), n.on("socketClose", this.onSocketClose.bind(this)), n.on("connection", this.onConnection.bind(this)), n.on("text", this.onText.bind(this)), this.onPlayerWelcome(i.welcome)
    }
    get entities() {
        return this.wsClient ? this.wsClient.entities : {
            none: !0
        }
    }
    get isReady() {
        var n;
        return ((n = this.wsClient) == null ? void 0 : n.conn.readyState) === WebSocket.OPEN
    }
    isRole(n) {
        const i = Object.keys(this.roles);
        return !i.length && n === "audience" ? !0 : i.includes(n)
    }
    disconnect() {
        !this.wsClient || (this.wsClient.disconnect(), this.wsClient = null)
    }
    onText(n) {
        const i = n.key,
            a = n.text;
        let f = n.text;
        try {
            f = JSON.parse(f)
        } catch {
            oh(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const y = f;
        i === "room" ? this.emit("client:entityDidChange", i, y) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", y) : i === "bc:room" ? this.emit("client:entityDidChange", "room", y) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", y) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", y) : oh(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            a = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, a) : i === "player" ? this.emit("client:entityDidChange", "player", a) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", a) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, a) : i === "bc:room" ? this.emit("client:entityDidChange", "room", a) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", a) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", a) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onSocketClose(n) {
        n instanceof ti.EcastServerError || n.code === 1005 || n.code === 1e3 ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
    }
    onRoomExit(n) {
        this.emit("client:disconnected", n), this.disconnect()
    }
    onConnection(n) {
        this.emit("client:connection", n)
    }
    async send(n, i) {
        var a, f;
        if (!!this.isReady) try {
            if (n === "SendMessageToRoomOwner") {
                const y = (f = (a = this.host) == null ? void 0 : a.id) != null ? f : "1";
                await this.wsClient.mail(y, i)
            } else await this.wsClient.send(n, i)
        } catch (y) {
            console.error(y)
        }
    }
    sessionSend(n, i, a) {
        !this.isReady || (n === "vote" && this.incrementCountGroupCounter(i, `${a.vote}`), n === "comment" && this.pushTextRing(i, `${a.comment}`))
    }
    async updateText(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateText(n, i)
        } catch (a) {
            throw console.warn("Text update rejected.", a), a
        }
    }
    async updateObject(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateObject(n, i)
        } catch (a) {
            throw console.warn("Object update rejected.", a), a
        }
    }
    async incrementCountGroupCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementCountGroupCounter(n, `${i}`)
        } catch (a) {
            console.error(a)
        }
    }
    async incrementGCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementGCounter(n, i)
        } catch (a) {
            console.error(a)
        }
    }
    async pushTextRing(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.pushTextRing(n, `${i}`)
        } catch (a) {
            console.error(a)
        }
    }
}
const NC = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(Me)
})(function(t) {
    var e, n = navigator.userAgent,
        i = /iphone/i.test(n),
        a = /chrome/i.test(n),
        f = /android/i.test(n);
    t.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, t.fn.extend({
        caret: function(y, S) {
            var I;
            if (this.length !== 0 && !this.is(":hidden")) return typeof y == "number" ? (S = typeof S == "number" ? S : y, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(y, S) : this.createTextRange && (I = this.createTextRange(), I.collapse(!0), I.moveEnd("character", S), I.moveStart("character", y), I.select())
            })) : (this[0].setSelectionRange ? (y = this[0].selectionStart, S = this[0].selectionEnd) : document.selection && document.selection.createRange && (I = document.selection.createRange(), y = 0 - I.duplicate().moveStart("character", -1e5), S = y + I.text.length), {
                begin: y,
                end: S
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(y, S) {
            var I, O, R, V, X, ie, J, oe;
            if (!y && this.length > 0) {
                I = t(this[0]);
                var m = I.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return S = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, S), O = t.mask.definitions, R = [], V = J = y.length, X = null, t.each(y.split(""), function(L, z) {
                z == "?" ? (J--, V = L) : O[z] ? (R.push(new RegExp(O[z])), X === null && (X = R.length - 1), V > L && (ie = R.length - 1)) : R.push(null)
            }), this.trigger("unmask").each(function() {
                function L() {
                    if (S.completed) {
                        for (var we = X; ie >= we; we++)
                            if (R[we] && se[we] === z(we)) return;
                        S.completed.call(G)
                    }
                }

                function z(we) {
                    return S.placeholder.charAt(we < S.placeholder.length ? we : 0)
                }

                function ae(we) {
                    for (; ++we < J && !R[we];);
                    return we
                }

                function re(we) {
                    for (; --we >= 0 && !R[we];);
                    return we
                }

                function ye(we, ue) {
                    var xe, Ie;
                    if (!(0 > we)) {
                        for (xe = we, Ie = ae(ue); J > xe; xe++)
                            if (R[xe]) {
                                if (!(J > Ie && R[xe].test(se[Ie]))) break;
                                se[xe] = se[Ie], se[Ie] = z(Ie), Ie = ae(Ie)
                            } Q(), G.caret(Math.max(X, we))
                    }
                }

                function c(we) {
                    var ue, xe, Ie, Ve;
                    for (ue = we, xe = z(we); J > ue; ue++)
                        if (R[ue]) {
                            if (Ie = ae(ue), Ve = se[ue], se[ue] = xe, !(J > Ie && R[Ie].test(Ve))) break;
                            xe = Ve
                        }
                }

                function Ee() {
                    var we = G.val(),
                        ue = G.caret();
                    if (oe && oe.length && oe.length > we.length) {
                        for (je(!0); ue.begin > 0 && !R[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < X && !R[ue.begin];) ue.begin++;
                        G.caret(ue.begin, ue.begin)
                    } else {
                        for (je(!0); ue.begin < J && !R[ue.begin];) ue.begin++;
                        G.caret(ue.begin, ue.begin)
                    }
                    L()
                }

                function _e() {
                    je(), G.val() != ve && G.change()
                }

                function Le(we) {
                    if (!G.prop("readonly")) {
                        var ue, xe, Ie, Ve = we.which || we.keyCode;
                        oe = G.val(), Ve === 8 || Ve === 46 || i && Ve === 127 ? (ue = G.caret(), xe = ue.begin, Ie = ue.end, Ie - xe === 0 && (xe = Ve !== 46 ? re(xe) : Ie = ae(xe - 1), Ie = Ve === 46 ? ae(Ie) : Ie), Ne(xe, Ie), ye(xe, Ie - 1), we.preventDefault()) : Ve === 13 ? _e.call(this, we) : Ve === 27 && (G.val(ve), G.caret(0, je()), we.preventDefault())
                    }
                }

                function lt(we) {
                    if (!G.prop("readonly")) {
                        var ue, xe, Ie, Ve = we.which || we.keyCode,
                            Ke = G.caret();
                        if (!(we.ctrlKey || we.altKey || we.metaKey || 32 > Ve) && Ve && Ve !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Ne(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), ue = ae(Ke.begin - 1), J > ue && (xe = String.fromCharCode(Ve), R[ue].test(xe))) {
                                if (c(ue), se[ue] = xe, Q(), Ie = ae(ue), f) {
                                    var ct = function() {
                                        t.proxy(t.fn.caret, G, Ie)()
                                    };
                                    setTimeout(ct, 0)
                                } else G.caret(Ie);
                                Ke.begin <= ie && L()
                            }
                            we.preventDefault()
                        }
                    }
                }

                function Ne(we, ue) {
                    var xe;
                    for (xe = we; ue > xe && J > xe; xe++) R[xe] && (se[xe] = z(xe))
                }

                function Q() {
                    G.val(se.join(""))
                }

                function je(we) {
                    var ue, xe, Ie, Ve = G.val(),
                        Ke = -1;
                    for (ue = 0, Ie = 0; J > ue; ue++)
                        if (R[ue]) {
                            for (se[ue] = z(ue); Ie++ < Ve.length;)
                                if (xe = Ve.charAt(Ie - 1), R[ue].test(xe)) {
                                    se[ue] = xe, Ke = ue;
                                    break
                                } if (Ie > Ve.length) {
                                Ne(ue + 1, J);
                                break
                            }
                        } else se[ue] === Ve.charAt(Ie) && Ie++, V > ue && (Ke = ue);
                    return we ? Q() : V > Ke + 1 ? S.autoclear || se.join("") === Te ? (G.val() && G.val(""), Ne(0, J)) : Q() : (Q(), G.val(G.val().substring(0, Ke + 1))), V ? ue : X
                }
                var G = t(this),
                    se = t.map(y.split(""), function(we, ue) {
                        return we != "?" ? O[we] ? z(ue) : we : void 0
                    }),
                    Te = se.join(""),
                    ve = G.val();
                G.data(t.mask.dataName, function() {
                    return t.map(se, function(we, ue) {
                        return R[ue] && we != z(ue) ? we : null
                    }).join("")
                }), G.one("unmask", function() {
                    G.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!G.prop("readonly")) {
                        clearTimeout(e);
                        var we;
                        ve = G.val(), we = je(), e = setTimeout(function() {
                            G.get(0) === document.activeElement && (Q(), we == y.replace("?", "").length ? G.caret(0, we) : G.caret(we))
                        }, 10)
                    }
                }).on("blur.mask", _e).on("keydown.mask", Le).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    G.prop("readonly") || setTimeout(function() {
                        var we = je(!0);
                        G.caret(we), L()
                    }, 0)
                }), a && f && G.off("input.mask").on("input.mask", Ee), je()
            })
        }
    })
});
window.$ = Me;
window.jQuery = Me;
const VC = wt.View.extend({
        className: "app-root",
        template: Je.template(NC),
        regions: {
            content: "#content-region",
            dialog: "#dialog-region",
            debug: "#debug-region"
        },
        showView(t, e = {}) {
            const n = new t(e);
            this.showChildView("content", n)
        }
    }),
    $C = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Oi.WSClient(n), e.connect()),
            mount: n => {
                const i = new DC(e, n);
                let a = new wt.Application({
                    region: "#app",
                    onStart() {
                        const f = new VC;
                        this.showView(f), f.showView(t.MainView, {
                            appId: n.room.appId,
                            appTag: n.room.appTag,
                            replayer: n.replayer,
                            client: i
                        })
                    }
                });
                return a.start(), () => {
                    a.destroy(), a = null
                }
            },
            info: n => ({
                branch: n.branch,
                tag: n.app,
                type: n.type,
                version: n.version,
                wrapper: "marionette"
            })
        })
    },
    jC = is.extend({
        bindings: Je.extend(is.prototype.bindings, {
            ".choice-button": {
                attributes: [{
                    observe: ["timeInfo", "selected"],
                    name: "style",
                    onGet(t) {
                        let e = "";
                        if (t[1]) return e;
                        if (t[0] && t[0].startedGameTime) {
                            e += "background-image: linear-gradient(to left,black,black 50%,#ffad2b 50%,#ffad2b);", e += "background-size: 210% 100%;";
                            const n = t[0].totalTime / 1e3,
                                i = (t[0].startedGameTime - t[0].currentGameTime) / 1e3;
                            e += `animation-duration: ${n}s;`, e += `animation-delay:${i}s;`, e += `background-position:${100-Math.floor(i/n*100)}% 0%`
                        }
                        return e
                    }
                }]
            }
        })
    }),
    HC = ii.extend({
        bindings: Je.extend({}, ii.prototype.bindings, {
            ".choice-button": null
        }),
        events: {
            "mousedown .choice-button": "JackAttackButtonPress",
            "touchstart .choice-button": "JackAttackButtonPress"
        },
        JackAttackButtonPress(t) {
            t.preventDefault();
            const e = Me(t.currentTarget).data("action"),
                n = Me(t.currentTarget).data("index"),
                i = this.choicesList.children.find(a => a.model.get("index") === n);
            i.model.get("disabled") || (e === "submit" ? ii.prototype.onChildviewChildviewButtonSubmit.apply(this, [i.model]) : ii.prototype.onChildviewChildviewButtonChoose.apply(this, [i.model]))
        },
        onChildviewChildviewButtonChoose() {
            return null
        },
        initialize() {
            this.choicesList = new oi({
                childView: jC,
                action: "choose",
                collection: new Xe.Collection
            }), ii.prototype.initialize.apply(this)
        }
    }),
    FC = wt.View.extend({
        template: Je.template(Ju),
        events: {
            "click button": "handleClick"
        },
        className() {
            let t = "button-group btn-group";
            return this.options.block !== !1 && (t += " btn-block"), t
        },
        bindings: {
            ":el": {
                observe: "visible",
                visible(t) {
                    return t !== !1
                },
                visibleFn(t, e) {
                    t.css("display", e ? "" : "none")
                },
                attributes: [{
                    name: "class",
                    observe: ["className", "selected", "disabled"],
                    onGet(t) {
                        if (!t) return null;
                        let e = "";
                        return t[0] && (e += t[0]), t[1] && (e += " selected"), t[2] && (e += " disabled"), e
                    }
                }]
            },
            "button:first": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet(t) {
                    return t[1] ? t[1] : Me("<div />").text(t[0]).html()
                },
                attributes: [{
                    name: "disabled",
                    observe: "disabled"
                }, {
                    name: "data-action",
                    observe: "action",
                    onGet(t) {
                        return t || "choose"
                    }
                }, {
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "data-key",
                    observe: "key"
                }, {
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        if (!t) return "";
                        let e = "";
                        return t.text && (e += `color:${t.text};`), t.background && (e += `background-color:${t.background};`), e
                    }
                }, {
                    name: "type",
                    observe: "action",
                    onGet(t) {
                        return t === "submit" ? "submit" : "button"
                    }
                }]
            },
            ".censor-button": {
                observe: "censorable",
                visible: !0,
                visibleFn(t, e) {
                    e || t.remove()
                },
                attributes: [{
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "class",
                    observe: "className"
                }]
            }
        },
        onRender() {
            this.model.set("index", this.getOption("index")), this.stickit()
        },
        handleClick(t) {
            const e = Me(t.target).data("action") || "choose";
            this.triggerMethod(`button:${e}`, this.model)
        }
    }),
    GC = wt.CollectionView.extend({
        collection: new Xe.Collection([]),
        tagName: "div",
        className: "choices",
        childView: FC,
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["background", "color", "block"])
        },
        childViewOptions(t, e) {
            let n = !0;
            return this.options.block !== void 0 && (n = this.options.block), t.get("block") !== void 0 && (n = t.get("block")), {
                index: t.get("key") || e,
                block: n,
                background: this.background,
                color: this.color
            }
        }
    }),
    WC = ii.extend({
        template: Je.template(`${ed}<div class='logo-image'></div>`),
        bindings: Je.extend({}, ii.prototype.bindings, {
            ".choices": {
                observe: ["chosen", "persistButtons"],
                visible(t) {
                    return t[0] === "" || t[0] === null || t[1]
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color:${t.bgColor}`
                    }
                }, {
                    name: "class",
                    observe: ["classes", "chosen"],
                    onGet(t) {
                        const e = t[0] || [];
                        return t[1] !== null && e.push("chosen"), e.join(" ")
                    }
                }]
            }
        }),
        initialize() {
            this.choicesList = this.choicesList || new GC({
                action: "choose",
                collection: new Xe.Collection
            }), ii.prototype.initialize.apply(this)
        },
        update() {
            this.promptComponent.model.set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && Je.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
                text: "Submit",
                action: "submit",
                block: !1
            }), this.model.get("isAudience") && ((this.model.get("choiceId") === void 0 || this.model.get("choiceId") !== this.choiceId) && (this.audienceChoice = null), this.audienceChoice !== null && (this.model.get("type") === "multiple" ? (this.audienceChoice = this.audienceChoice || [], this.choicesList.children.forEach(t => {
                this.audienceChoice.indexOf(t.getOption("index")) !== -1 && t.model.set("selected", !0)
            })) : (this.choicesList.children.forEach(t => {
                t.model.set("disabled", !0), this.audienceChoice === t.getOption("index") && t.model.set("selected", !0)
            }), Me(".playerTopBarView").addClass("chosen")))), this.choiceId = this.model.get("choiceId") || 0, this.stickit()
        },
        onChildviewChildviewButtonChoose(t) {
            const e = this.choicesList.children.findByModel(t),
                n = t.get("index");
            let i = t.get("action");
            if (i || (i = "choose"), Me("button").removeClass("active"), e.$el.addClass("active"), this.model.get("type") === "single" && t.set("selected", !0), this.model.get("type") === "multiple") {
                if (t.set("selected", !0), this.model.get("isAudience")) {
                    const a = [];
                    this.choicesList.children.forEach(f => {
                        f.model.get("selected") && a.push(f.getOption("index"))
                    }), this.audienceChoice = a
                }
                return !1
            }
            return this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                action: i,
                choice: n
            }) : this.model.get("isAudience") && (this.selected = [t.get("index")], this.triggerMethod("client:countGroup", {
                name: this.model.get("countGroupName"),
                vote: n
            }), this.model.get("type") !== "repeating" && (this.audienceChoice = t.get("index"), this.model.set(Je.extend({}, this.model.attributes, {
                chosen: this.audienceChoice,
                choiceId: this.choiceId
            })))), !1
        }
    }),
    zC = `<div id="header" class="header text">Du wurdest<br/>GENAGELT!</div>
<div id="screw-type-text" class="secondary-text">Nagel-Typ:</div>
<div id="message" class="content secondary-text">
	<span class="screw-name"></span>
</div>
<div id="footer" class="footer text">
	<span>Viel Glück!</span>
</div>
`,
    UC = wt.View.extend({
        className: "Screw",
        template: Je.template(zC),
        model: new Xe.Model({}),
        bindings: {
            ".screw-name": {
                observe: "activeScrew",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.name : null
                }
            }
        },
        onRender() {
            this.stickit()
        }
    }),
const JC = ["Cinnamon", "Snake Vomit", "Queemus", "Monkey Buns", "Fudge Me", "The Stank", "Oh No", "Will Lose", "Poopy", "Crank It", "Blech", "Capt No No", "Balls", "Face Problem", "Mr. Tickle", "Dr Nah", "Mrs Barf", "Hoo Ha", "The Diaper", "Sad Kevin", "Cat Butt", "The Anus", "Meh", "2% Milk", "Dr Lastplace", "Johnny Fail", "DJ Badmusic", "Smelly J Dog", "Evil Tim", "The Bad Twin", "Mad Pigeon", "Thistleham", "The Munch", "Doug Taco", "Bone Ranger", "Gronch", "Wittle Kitty", "Gorgonzola", "\u201CChuck\u201D", "The Beast", "Jorb-Norb", "ShrimpLovah8", "Jalvin", "Croxxus", "Garflin", "Petite Elf", "8 Ferrets", "Tide Pod", "Broy", "RyanDiGiorgi", "Wrong-O", "Stupid David", "Unimpressive", "Handsome Jan", "Ben Voyage", "Lil Good Try", "Lice Magnet", "Don't Bother", "Show Pony", "TaxWriteOff", "SS Friendly", "AgentBigtime", "CannonFodder", "Daphne Maybe", "Coach Couch", "Lint", "Who?", "Juror #6", "MadamOttoman", "Just Alan", "Nobody Cool", "Generic Nerd", "Ms. Good Try", "Empty Vessel"],
    QC = bh.extend({
        sessionModulePrefix: "YDKJ2018",
        initialize(t) {
            bh.prototype.initialize.apply(this, [t])
        },
        getGameLayout(t) {
            switch (t) {
                case "JackAttack":
                    return this.setLayout(HC);
                case "MakeSingleChoice":
                    return this.setLayout(WC);
                case "Screw":
                    return this.setLayout(UC);
                default:
                    return -1
            }
        },
        parseBlob(t) {
            t = Me.extend(!0, {}, t), this.client.isRole("audience") && (t.playerInfo = t.playerInfo || {}, t.playerInfo.username = "Audience", this.ydkjaudiencename && (t.playerInfo.username = this.ydkjaudiencename)), t.classes = t.classes || [], t.roundType === "Gibberish" && (t.counter = !1, t.block = !1), t.state === "MakeSingleChoice" && (Object.prototype.hasOwnProperty.call(t, "chosen") && (t.state = "Logo"), t.roundType === "DisOrDat" && (t.block = !1), t.roundType === "JackAttack" && (t.state = "JackAttack"), t.activeScrew && t.activeScrew.name ? (t.activeScrew.intro ? (t.state = "Screw", t.roundType = "Screw") : t.activeScrew.behaviorData && (t.activeScrew.behaviorData.isScreensaver && t.classes.push("screensaver"), t.activeScrew.behaviorData.isFlipped && t.classes.push("flipped"), t.activeScrew.behaviorData.isMirrored && t.classes.push("mirrored"), t.activeScrew.behaviorData.isTos && !this.hasActiveScrew && !t.activeScrew.behaviorData.accepted && (this.hasActiveScrew = !0, mn.fire({
                customClass: {
                    popup: "binjpipeTos"
                },
                showClass: {
                    popup: "",
                    backdrop: "",
                    icon: ""
                },
                hideClass: {
                    popup: "",
                    backdrop: "",
                    icon: ""
                },
                allowOutsideClick: !1,
                showCancelButton: !1,
                showCloseButton: !1,
                allowEscapeKey: !1,
                confirmButtonText: "AKZEPTIEREN",
                timer: 2e4,
                title: "Du wurdest genagelt",
                html: YC
            }).then(i => {
                const a = i.value === !0;
                this.onChildviewClientMessage({
                    action: "screw-action",
                    type: "tos",
                    accepted: a
                }), this.hasActiveScrew = !1
            })), t.activeScrew.behaviorData.code && !this.hasActiveScrew && !t.activeScrew.behaviorData.isPassed && (At.show("custom", {
                customClass: {
                    popup: "ydkj2018 passcode"
                },
                showClass: {
                    popup: "",
                    backdrop: "",
                    icon: ""
                },
                hideClass: {
                    popup: "",
                    backdrop: "",
                    icon: ""
                },
                allowOutsideClick: !1,
                showCancelButton: !1,
                showCloseButton: !1,
                allowEscapeKey: !1,
                timer: 2e4,
                input: "text",
                title: "Du wurdest genagelt",
                text: `Gib das Passwort ein: ${t.activeScrew.behaviorData.code}`,
                inputValidator: i => {
                    const a = i.toUpperCase() === t.activeScrew.behaviorData.code.toUpperCase();
                    return a && this.client.isRole("player") && this.onChildviewClientMessage({
                        action: "screw-action",
                        type: "enter-code",
                        code: i
                    }), a ? !1 : "Falsch!"
                }
            }), this.hasActiveScrew = !0), t.activeScrew.id === "NameChange" && (this.client.isRole("player") ? t.activeScrew.behaviorData.text && mn.fire({
                showClass: {
                    popup: "",
                    backdrop: "",
                    icon: ""
                },
                hideClass: {
                    popup: "",
                    backdrop: "",
                    icon: ""
                },
                allowOutsideClick: !1,
                text: t.activeScrew.behaviorData.text,
                showCancelButton: !0,
                confirmButtonText: "Yes",
                cancelButtonText: "No"
            }).then(i => {
                const a = i.value === !0;
                this.client.isRole("player") && this.onChildviewClientMessage({
                    action: "screw-action",
                    choice: a
                })
            }) : this.namesSample || (this.namesSample = Je.sample(JC, 3), this.nameChange(0)))), this.client.isRole("audience") && this.currentLayout && (t.chosen = this.currentLayout.model.get("chosen"), t.choiceId = this.currentLayout.model.get("choiceId"), t.chosen && (t.state = "Logo"))) : this.hasActiveScrew = !1), t.playerInfo && (t.playerInfo.classes = t.playerInfo.classes || []);
            const e = t.roundType || "",
                n = t.state || "";
            return t.playerInfo && (t.playerInfo.classes.push(e), t.playerInfo.classes.push(n)), t.classes.push(e), t.classes = Je.uniq(t.classes), t.artifact && (t.artifact.artifactId !== this.artifactId && (this.shouldHideArtifact = !1, this.artifactId = t.artifact.artifactId), t.state !== "Lobby" && t.state !== "Logo" && (this.shouldHideArtifact = !0), this.shouldHideArtifact && delete t.artifact), t.censorablePlayers && delete t.censorablePlayers, t
        },
        nameChange(t) {
            if (t >= 3) return;
            const e = `Möchtest du deinen Namen zu ${this.namesSample[t]} ändern?`,
                n = {
                    showClass: {
                        popup: "",
                        backdrop: "",
                        icon: ""
                    },
                    hideClass: {
                        popup: "",
                        backdrop: "",
                        icon: ""
                    },
                    allowOutsideClick: !1,
                    text: e,
                    showCancelButton: !0,
                    confirmButtonText: "Ja",
                    cancelButtonText: "Nein"
                },
                i = a => {
                    a.value === !0 ? (this.ydkjaudiencename = this.namesSample[t], this.setBlob()) : (t += 1, this.nameChange(t))
                };
            mn.fire(n).then(i)
        },
        onChildviewClientMessage(t) {
            if (this.client.isRole("player")) {
                const e = this.formatSessionMessage(t);
                this.client.send("SendMessageToRoomOwner", e);
                return
            }
            if (this.client.isRole("audience")) {
                const e = this.currentLayout.sessionModule,
                    n = this.formatSessionMessage(t);
                if (!e) return;
                if (e === "vote") {
                    const i = this.currentLayout.model.get("countGroupName"),
                        a = n.vote;
                    this.onChildviewClientCountGroup({
                        name: i,
                        key: a
                    })
                }
                if (e === "comment") {
                    const i = n.entry;
                    this.onChildviewClientCountGroup({
                        name: `${this.sessionModulePrefix} Vote`,
                        key: i
                    })
                }
            }
        }
    });
$C({
    MainView: QC
});
//# sourceMappingURL=a64e92e4.js.map