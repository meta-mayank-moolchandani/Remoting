/*
 * This code is for Internal Salesforce use only, and subject to change without notice.
 * Customers shouldn't reference this file in any web pages.
 */
(function(G) {
    function r(a, b, c, d) {
        var e, f, g, s, k, w = b && b.ownerDocument,
            u = b ? b.nodeType : 9;
        c = c || [];
        if ("string" !== typeof a || !a || 1 !== u && 9 !== u && 11 !== u) return c;
        if (!d && ((b ? b.ownerDocument || b : x) !== h && H(b), b = b || h, B)) {
            if (11 !== u && (s = va.exec(a)))
                if (e = s[1])
                    if (9 === u)
                        if (f = b.getElementById(e)) {
                            if (f.id === e) return c.push(f), c
                        } else return c;
            else {
                if (w && (f = w.getElementById(e)) && Q(b, f) && f.id === e) return c.push(f), c
            } else {
                if (s[2]) return I.apply(c, b.getElementsByTagName(a)), c;
                if ((e = s[3]) && p.getElementsByClassName && b.getElementsByClassName) return I.apply(c,
                    b.getElementsByClassName(e)), c
            }
            if (p.qsa && !T[a + " "] && (!v || !v.test(a))) {
                if (1 !== u) w = b, k = a;
                else if ("object" !== b.nodeName.toLowerCase()) {
                    (g = b.getAttribute("id")) ? g = g.replace(ka, la): b.setAttribute("id", g = n);
                    f = R(a);
                    for (e = f.length; e--;) f[e] = "#" + g + " " + U(f[e]);
                    k = f.join(",");
                    w = ba.test(a) && ca(b.parentNode) || b
                }
                if (k) try {
                    return I.apply(c, w.querySelectorAll(k)), c
                } catch (q) {} finally {
                    g === n && b.removeAttribute("id")
                }
            }
        }
        return ma(a.replace(V, "$1"), b, c, d)
    }

    function da() {
        function a(c, d) {
            b.push(c + " ") > l.cacheLength && delete a[b.shift()];
            return a[c + " "] = d
        }
        var b = [];
        return a
    }

    function A(a) {
        a[n] = !0;
        return a
    }

    function C(a) {
        var b = h.createElement("fieldset");
        try {
            return !!a(b)
        } catch (c) {
            return !1
        } finally {
            b.parentNode && b.parentNode.removeChild(b)
        }
    }

    function ea(a, b) {
        for (var c = a.split("|"), d = c.length; d--;) l.attrHandle[c[d]] = b
    }

    function na(a, b) {
        var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
        if (d) return d;
        if (c)
            for (; c = c.nextSibling;)
                if (c === b) return -1;
        return a ? 1 : -1
    }

    function wa(a) {
        return function(b) {
            return "input" === b.nodeName.toLowerCase() &&
                b.type === a
        }
    }

    function xa(a) {
        return function(b) {
            var c = b.nodeName.toLowerCase();
            return ("input" === c || "button" === c) && b.type === a
        }
    }

    function oa(a) {
        return function(b) {
            return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && !1 === b.disabled && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ya(b)) !== a)
        }
    }

    function K(a) {
        return A(function(b) {
            b = +b;
            return A(function(c, d) {
                for (var e, f = a([], c.length, b), g = f.length; g--;)
                    if (c[e = f[g]]) c[e] = !(d[e] = c[e])
            })
        })
    }

    function ca(a) {
        return a && "undefined" !== typeof a.getElementsByTagName &&
            a
    }

    function pa() {}

    function U(a) {
        for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
        return d
    }

    function W(a, b, c) {
        var d = b.dir,
            e = b.next,
            f = e || d,
            g = c && "parentNode" === f,
            s = za++;
        return b.first ? function(c, b, e) {
            for (; c = c[d];)
                if (1 === c.nodeType || g) return a(c, b, e)
        } : function(c, b, u) {
            var q, y, m = [D, s];
            if (u)
                for (; c = c[d];) {
                    if ((1 === c.nodeType || g) && a(c, b, u)) return !0
                } else
                    for (; c = c[d];)
                        if (1 === c.nodeType || g)
                            if (y = c[n] || (c[n] = {}), y = y[c.uniqueID] || (y[c.uniqueID] = {}), e && e === c.nodeName.toLowerCase()) c = c[d] || c;
                            else {
                                if ((q = y[f]) && q[0] ===
                                    D && q[1] === s) return m[2] = q[2];
                                y[f] = m;
                                if (m[2] = a(c, b, u)) return !0
                            }
        }
    }

    function fa(a) {
        return 1 < a.length ? function(b, c, d) {
            for (var e = a.length; e--;)
                if (!a[e](b, c, d)) return !1;
            return !0
        } : a[0]
    }

    function X(a, b, c, d, e) {
        for (var f, g = [], s = 0, k = a.length, w = null != b; s < k; s++)
            if (f = a[s])
                if (!c || c(f, d, e)) g.push(f), w && b.push(s);
        return g
    }

    function ga(a, b, c, d, e, f) {
        d && !d[n] && (d = ga(d));
        e && !e[n] && (e = ga(e, f));
        return A(function(f, s, k, w) {
            var u, q, y = [],
                m = [],
                l = s.length,
                h;
            if (!(h = f)) {
                h = b || "*";
                for (var t = k.nodeType ? [k] : k, p = [], n = 0, v = t.length; n < v; n++) r(h,
                    t[n], p);
                h = p
            }
            h = a && (f || !b) ? X(h, y, a, k, w) : h;
            t = c ? e || (f ? a : l || d) ? [] : s : h;
            c && c(h, t, k, w);
            if (d) {
                u = X(t, m);
                d(u, [], k, w);
                for (k = u.length; k--;)
                    if (q = u[k]) t[m[k]] = !(h[m[k]] = q)
            }
            if (f) {
                if (e || a) {
                    if (e) {
                        u = [];
                        for (k = t.length; k--;)
                            if (q = t[k]) u.push(h[k] = q);
                        e(null, t = [], u, w)
                    }
                    for (k = t.length; k--;)
                        if ((q = t[k]) && -1 < (u = e ? L(f, q) : y[k])) f[u] = !(s[u] = q)
                }
            } else t = X(t === s ? t.splice(l, t.length) : t), e ? e(null, s, t, w) : I.apply(s, t)
        })
    }

    function ha(a) {
        var b, c, d, e = a.length,
            f = l.relative[a[0].type];
        c = f || l.relative[" "];
        for (var g = f ? 1 : 0, s = W(function(a) {
                return a ===
                    b
            }, c, !0), k = W(function(a) {
                return -1 < L(b, a)
            }, c, !0), h = [function(a, c, d) {
                a = !f && (d || c !== Y) || ((b = c).nodeType ? s(a, c, d) : k(a, c, d));
                b = null;
                return a
            }]; g < e; g++)
            if (c = l.relative[a[g].type]) h = [W(fa(h), c)];
            else {
                c = l.filter[a[g].type].apply(null, a[g].matches);
                if (c[n]) {
                    for (d = ++g; d < e && !l.relative[a[d].type]; d++);
                    return ga(1 < g && fa(h), 1 < g && U(a.slice(0, g - 1).concat({
                        value: " " === a[g - 2].type ? "*" : ""
                    })).replace(V, "$1"), c, g < d && ha(a.slice(g, d)), d < e && ha(a = a.slice(d)), d < e && U(a))
                }
                h.push(c)
            } return fa(h)
    }

    function Aa(a, b) {
        var c = 0 < b.length,
            d = 0 < a.length,
            e = function(e, g, s, k, w) {
                var u, q, y, m = 0,
                    n = "0",
                    p = e && [],
                    t = [],
                    v = Y,
                    x = e || d && l.find.TAG("*", w),
                    z = D += null == v ? 1 : Math.random() || 0.1,
                    A = x.length;
                for (w && (Y = g === h || g || w); n !== A && null != (u = x[n]); n++) {
                    if (d && u) {
                        q = 0;
                        !g && u.ownerDocument !== h && (H(u), s = !B);
                        for (; y = a[q++];)
                            if (y(u, g || h, s)) {
                                k.push(u);
                                break
                            } w && (D = z)
                    }
                    c && ((u = !y && u) && m--, e && p.push(u))
                }
                m += n;
                if (c && n !== m) {
                    for (q = 0; y = b[q++];) y(p, t, g, s);
                    if (e) {
                        if (0 < m)
                            for (; n--;) !p[n] && !t[n] && (t[n] = Ba.call(k));
                        t = X(t)
                    }
                    I.apply(k, t);
                    w && (!e && 0 < t.length && 1 < m + b.length) && r.uniqueSort(k)
                }
                w &&
                    (D = z, Y = v);
                return p
            };
        return c ? A(e) : e
    }
    var O, p, l, Z, qa, R, ia, ma, Y, J, P, H, h, z, B, v, M, $, Q, n = "sizzle" + 1 * new Date,
        x = G.document,
        D = 0,
        za = 0,
        ra = da(),
        sa = da(),
        T = da(),
        ja = function(a, b) {
            a === b && (P = !0);
            return 0
        },
        Ca = {}.hasOwnProperty,
        N = [],
        Ba = N.pop,
        Da = N.push,
        I = N.push,
        ta = N.slice,
        L = function(a, b) {
            for (var c = 0, d = a.length; c < d; c++)
                if (a[c] === b) return c;
            return -1
        },
        Ea = /[\x20\t\r\n\f]+/g,
        V = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Fa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Ga = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        Ha = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        Ia = RegExp(":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
        Ja = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        aa = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
            ATTR: RegExp("^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]"),
            PSEUDO: RegExp("^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)"),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[\x3e+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?\x3d[^-]|$)",
                "i")
        },
        Ka = /^(?:input|select|textarea|button)$/i,
        La = /^h\d$/i,
        S = /^[^{]+\{\s*\[native \w/,
        va = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ba = /[+~]/,
        E = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,
        F = function(a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
        },
        ka = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
        la = function(a, b) {
            return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        },
        ua = function() {
            H()
        },
        ya = W(function(a) {
            return !0 === a.disabled
        }, {
            dir: "parentNode",
            next: "legend"
        });
    try {
        I.apply(N = ta.call(x.childNodes), x.childNodes), N[x.childNodes.length].nodeType
    } catch (Na) {
        I = {
            apply: N.length ? function(a, b) {
                Da.apply(a, ta.call(b))
            } : function(a, b) {
                for (var c = a.length, d = 0; a[c++] = b[d++];);
                a.length = c - 1
            }
        }
    }
    p = r.support = {};
    qa = r.isXML = function(a) {
        return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
    };
    H = r.setDocument = function(a) {
        var b;
        a = a ? a.ownerDocument || a : x;
        if (a === h || 9 !== a.nodeType || !a.documentElement) return h;
        h = a;
        z = h.documentElement;
        B = !qa(h);
        if (x !== h && (b = h.defaultView) && b.top !== b) b.addEventListener ? b.addEventListener("unload", ua, !1) : b.attachEvent && b.attachEvent("onunload", ua);
        p.attributes = C(function(a) {
            a.className = "i";
            return !a.getAttribute("className")
        });
        p.getElementsByTagName = C(function(a) {
            a.appendChild(h.createComment(""));
            return !a.getElementsByTagName("*").length
        });
        p.getElementsByClassName = S.test(h.getElementsByClassName);
        p.getById = C(function(a) {
            z.appendChild(a).id = n;
            return !h.getElementsByName || !h.getElementsByName(n).length
        });
        p.getById ? (l.find.ID = function(a, b) {
            if ("undefined" !== typeof b.getElementById && B) {
                var e = b.getElementById(a);
                return e ? [e] : []
            }
        }, l.filter.ID = function(a) {
            var b = a.replace(E, F);
            return function(a) {
                return a.getAttribute("id") === b
            }
        }) : (delete l.find.ID, l.filter.ID = function(a) {
            var b = a.replace(E, F);
            return function(a) {
                return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
            }
        });
        l.find.TAG = p.getElementsByTagName ? function(a, b) {
            if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a);
            if (p.qsa) return b.querySelectorAll(a)
        } : function(a, b) {
            var e, f = [],
                g = 0,
                s = b.getElementsByTagName(a);
            if ("*" === a) {
                for (; e = s[g++];) 1 === e.nodeType && f.push(e);
                return f
            }
            return s
        };
        l.find.CLASS = p.getElementsByClassName && function(a, b) {
            if ("undefined" !== typeof b.getElementsByClassName && B) return b.getElementsByClassName(a)
        };
        M = [];
        v = [];
        if (p.qsa = S.test(h.querySelectorAll)) C(function(a) {
            z.appendChild(a).innerHTML = "\x3ca id\x3d'" + n + "'\x3e\x3c/a\x3e\x3cselect id\x3d'" + n + "-\r\\' msallowcapture\x3d''\x3e\x3coption selected\x3d''\x3e\x3c/option\x3e\x3c/select\x3e";
            a.querySelectorAll("[msallowcapture^\x3d'']").length && v.push("[*^$]\x3d[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            a.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            a.querySelectorAll("[id~\x3d" + n + "-]").length || v.push("~\x3d");
            a.querySelectorAll(":checked").length || v.push(":checked");
            a.querySelectorAll("a#" + n + "+*").length || v.push(".#.+[+~]")
        }), C(function(a) {
            a.innerHTML =
                "\x3ca href\x3d'' disabled\x3d'disabled'\x3e\x3c/a\x3e\x3cselect disabled\x3d'disabled'\x3e\x3coption/\x3e\x3c/select\x3e";
            var b = h.createElement("input");
            b.setAttribute("type", "hidden");
            a.appendChild(b).setAttribute("name", "D");
            a.querySelectorAll("[name\x3dd]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?\x3d");
            2 !== a.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled");
            z.appendChild(a).disabled = !0;
            2 !== a.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled");
            a.querySelectorAll("*,:x");
            v.push(",.*:")
        });
        (p.matchesSelector = S.test($ = z.matches || z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector)) && C(function(a) {
            p.disconnectedMatch = $.call(a, "*");
            $.call(a, "[s!\x3d'']:x");
            M.push("!\x3d", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?\x3d)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)")
        });
        v = v.length && RegExp(v.join("|"));
        M = M.length && RegExp(M.join("|"));
        Q = (b = S.test(z.compareDocumentPosition)) || S.test(z.contains) ? function(a, b) {
            var e = 9 === a.nodeType ? a.documentElement : a,
                f = b && b.parentNode;
            return a === f || !(!f || !(1 === f.nodeType && (e.contains ? e.contains(f) : a.compareDocumentPosition && a.compareDocumentPosition(f) & 16)))
        } : function(a, b) {
            if (b)
                for (; b = b.parentNode;)
                    if (b === a) return !0;
            return !1
        };
        ja = b ? function(a, b) {
            if (a === b) return P = !0, 0;
            var e = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (e) return e;
            e = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
            return e & 1 || !p.sortDetached && b.compareDocumentPosition(a) === e ? a === h || a.ownerDocument === x && Q(x, a) ? -1 : b === h || b.ownerDocument === x && Q(x, b) ? 1 : J ? L(J, a) - L(J, b) : 0 : e & 4 ? -1 : 1
        } : function(a, b) {
            if (a === b) return P = !0, 0;
            var e, f = 0;
            e = a.parentNode;
            var g = b.parentNode,
                s = [a],
                k = [b];
            if (!e || !g) return a === h ? -1 : b === h ? 1 : e ? -1 : g ? 1 : J ? L(J, a) - L(J, b) : 0;
            if (e === g) return na(a, b);
            for (e = a; e = e.parentNode;) s.unshift(e);
            for (e = b; e = e.parentNode;) k.unshift(e);
            for (; s[f] ===
                k[f];) f++;
            return f ? na(s[f], k[f]) : s[f] === x ? -1 : k[f] === x ? 1 : 0
        };
        return h
    };
    r.matches = function(a, b) {
        return r(a, null, null, b)
    };
    r.matchesSelector = function(a, b) {
        (a.ownerDocument || a) !== h && H(a);
        b = b.replace(Ha, "\x3d'$1']");
        if (p.matchesSelector && B && !T[b + " "] && (!M || !M.test(b)) && (!v || !v.test(b))) try {
            var c = $.call(a, b);
            if (c || p.disconnectedMatch || a.document && 11 !== a.document.nodeType) return c
        } catch (d) {}
        return 0 < r(b, h, null, [a]).length
    };
    r.contains = function(a, b) {
        (a.ownerDocument || a) !== h && H(a);
        return Q(a, b)
    };
    r.attr = function(a,
        b) {
        (a.ownerDocument || a) !== h && H(a);
        var c = l.attrHandle[b.toLowerCase()],
            c = c && Ca.call(l.attrHandle, b.toLowerCase()) ? c(a, b, !B) : void 0;
        return void 0 !== c ? c : p.attributes || !B ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
    };
    r.escape = function(a) {
        return (a + "").replace(ka, la)
    };
    r.error = function(a) {
        throw Error("Syntax error, unrecognized expression: " + a);
    };
    r.uniqueSort = function(a) {
        var b, c = [],
            d = 0,
            e = 0;
        P = !p.detectDuplicates;
        J = !p.sortStable && a.slice(0);
        a.sort(ja);
        if (P) {
            for (; b = a[e++];) b === a[e] &&
                (d = c.push(e));
            for (; d--;) a.splice(c[d], 1)
        }
        J = null;
        return a
    };
    Z = r.getText = function(a) {
        var b, c = "",
            d = 0;
        if (b = a.nodeType)
            if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += Z(a)
            } else {
                if (3 === b || 4 === b) return a.nodeValue
            }
        else
            for (; b = a[d++];) c += Z(b);
        return c
    };
    l = r.selectors = {
        cacheLength: 50,
        createPseudo: A,
        match: aa,
        attrHandle: {},
        find: {},
        relative: {
            "\x3e": {
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
            ATTR: function(a) {
                a[1] = a[1].replace(E, F);
                a[3] = (a[3] || a[4] || a[5] || "").replace(E, F);
                "~\x3d" === a[2] && (a[3] = " " + a[3] + " ");
                return a.slice(0, 4)
            },
            CHILD: function(a) {
                a[1] = a[1].toLowerCase();
                "nth" === a[1].slice(0, 3) ? (a[3] || r.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && r.error(a[0]);
                return a
            },
            PSEUDO: function(a) {
                var b, c = !a[6] && a[2];
                if (aa.CHILD.test(a[0])) return null;
                if (a[3]) a[2] = a[4] || a[5] || "";
                else if (c && Ia.test(c) && (b = R(c, !0)) && (b = c.indexOf(")",
                        c.length - b) - c.length)) a[0] = a[0].slice(0, b), a[2] = c.slice(0, b);
                return a.slice(0, 3)
            }
        },
        filter: {
            TAG: function(a) {
                var b = a.replace(E, F).toLowerCase();
                return "*" === a ? function() {
                    return !0
                } : function(a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b
                }
            },
            CLASS: function(a) {
                var b = ra[a + " "];
                return b || (b = RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && ra(a, function(a) {
                    return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                })
            },
            ATTR: function(a,
                b, c) {
                return function(d) {
                    d = r.attr(d, a);
                    if (null == d) return "!\x3d" === b;
                    if (!b) return !0;
                    d += "";
                    return "\x3d" === b ? d === c : "!\x3d" === b ? d !== c : "^\x3d" === b ? c && 0 === d.indexOf(c) : "*\x3d" === b ? c && -1 < d.indexOf(c) : "$\x3d" === b ? c && d.slice(-c.length) === c : "~\x3d" === b ? -1 < (" " + d.replace(Ea, " ") + " ").indexOf(c) : "|\x3d" === b ? d === c || d.slice(0, c.length + 1) === c + "-" : !1
                }
            },
            CHILD: function(a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice(-4),
                    s = "of-type" === b;
                return 1 === d && 0 === e ? function(a) {
                    return !!a.parentNode
                } : function(b, c, h) {
                    var q,
                        l, m, p, r;
                    c = f !== g ? "nextSibling" : "previousSibling";
                    var t = b.parentNode,
                        v = s && b.nodeName.toLowerCase();
                    h = !h && !s;
                    q = !1;
                    if (t) {
                        if (f) {
                            for (; c;) {
                                for (m = b; m = m[c];)
                                    if (s ? m.nodeName.toLowerCase() === v : 1 === m.nodeType) return !1;
                                r = c = "only" === a && !r && "nextSibling"
                            }
                            return !0
                        }
                        r = [g ? t.firstChild : t.lastChild];
                        if (g && h) {
                            m = t;
                            l = m[n] || (m[n] = {});
                            l = l[m.uniqueID] || (l[m.uniqueID] = {});
                            q = l[a] || [];
                            q = (p = q[0] === D && q[1]) && q[2];
                            for (m = p && t.childNodes[p]; m = ++p && m && m[c] || (q = p = 0) || r.pop();)
                                if (1 === m.nodeType && ++q && m === b) {
                                    l[a] = [D, p, q];
                                    break
                                }
                        } else if (h &&
                            (m = b, l = m[n] || (m[n] = {}), l = l[m.uniqueID] || (l[m.uniqueID] = {}), q = l[a] || [], q = p = q[0] === D && q[1]), !1 === q)
                            for (; m = ++p && m && m[c] || (q = p = 0) || r.pop();)
                                if ((s ? m.nodeName.toLowerCase() === v : 1 === m.nodeType) && ++q)
                                    if (h && (l = m[n] || (m[n] = {}), l = l[m.uniqueID] || (l[m.uniqueID] = {}), l[a] = [D, q]), m === b) break;
                        q -= e;
                        return q === d || 0 === q % d && 0 <= q / d
                    }
                }
            },
            PSEUDO: function(a, b) {
                var c, d = l.pseudos[a] || l.setFilters[a.toLowerCase()] || r.error("unsupported pseudo: " + a);
                return d[n] ? d(b) : 1 < d.length ? (c = [a, a, "", b], l.setFilters.hasOwnProperty(a.toLowerCase()) ?
                    A(function(a, c) {
                        for (var g, h = d(a, b), k = h.length; k--;) g = L(a, h[k]), a[g] = !(c[g] = h[k])
                    }) : function(a) {
                        return d(a, 0, c)
                    }) : d
            }
        },
        pseudos: {
            not: A(function(a) {
                var b = [],
                    c = [],
                    d = ia(a.replace(V, "$1"));
                return d[n] ? A(function(a, b, c, h) {
                    h = d(a, null, h, []);
                    for (var k = a.length; k--;)
                        if (c = h[k]) a[k] = !(b[k] = c)
                }) : function(a, f, g) {
                    b[0] = a;
                    d(b, null, g, c);
                    b[0] = null;
                    return !c.pop()
                }
            }),
            has: A(function(a) {
                return function(b) {
                    return 0 < r(a, b).length
                }
            }),
            contains: A(function(a) {
                a = a.replace(E, F);
                return function(b) {
                    return -1 < (b.textContent || b.innerText ||
                        Z(b)).indexOf(a)
                }
            }),
            lang: A(function(a) {
                Ja.test(a || "") || r.error("unsupported lang: " + a);
                a = a.replace(E, F).toLowerCase();
                return function(b) {
                    var c;
                    do
                        if (c = B ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1
                }
            }),
            target: function(a) {
                var b = G.location && G.location.hash;
                return b && b.slice(1) === a.id
            },
            root: function(a) {
                return a === z
            },
            focus: function(a) {
                return a === h.activeElement && (!h.hasFocus || h.hasFocus()) &&
                    !(!a.type && !a.href && !~a.tabIndex)
            },
            enabled: oa(!1),
            disabled: oa(!0),
            checked: function(a) {
                var b = a.nodeName.toLowerCase();
                return "input" === b && !!a.checked || "option" === b && !!a.selected
            },
            selected: function(a) {
                a.parentNode && a.parentNode.selectedIndex;
                return !0 === a.selected
            },
            empty: function(a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                    if (6 > a.nodeType) return !1;
                return !0
            },
            parent: function(a) {
                return !l.pseudos.empty(a)
            },
            header: function(a) {
                return La.test(a.nodeName)
            },
            input: function(a) {
                return Ka.test(a.nodeName)
            },
            button: function(a) {
                var b =
                    a.nodeName.toLowerCase();
                return "input" === b && "button" === a.type || "button" === b
            },
            text: function(a) {
                var b;
                return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
            },
            first: K(function() {
                return [0]
            }),
            last: K(function(a, b) {
                return [b - 1]
            }),
            eq: K(function(a, b, c) {
                return [0 > c ? c + b : c]
            }),
            even: K(function(a, b) {
                for (var c = 0; c < b; c += 2) a.push(c);
                return a
            }),
            odd: K(function(a, b) {
                for (var c = 1; c < b; c += 2) a.push(c);
                return a
            }),
            lt: K(function(a, b, c) {
                for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                return a
            }),
            gt: K(function(a, b, c) {
                for (c = 0 > c ? c + b : c; ++c < b;) a.push(c);
                return a
            })
        }
    };
    l.pseudos.nth = l.pseudos.eq;
    for (O in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) l.pseudos[O] = wa(O);
    for (O in {
            submit: !0,
            reset: !0
        }) l.pseudos[O] = xa(O);
    pa.prototype = l.filters = l.pseudos;
    l.setFilters = new pa;
    R = r.tokenize = function(a, b) {
        var c, d, e, f, g, h, k;
        if (g = sa[a + " "]) return b ? 0 : g.slice(0);
        g = a;
        h = [];
        for (k = l.preFilter; g;) {
            if (!c || (d = Fa.exec(g))) d && (g = g.slice(d[0].length) || g), h.push(e = []);
            c = !1;
            if (d = Ga.exec(g)) c = d.shift(), e.push({
                value: c,
                type: d[0].replace(V, " ")
            }), g = g.slice(c.length);
            for (f in l.filter)
                if ((d = aa[f].exec(g)) && (!k[f] || (d = k[f](d)))) c = d.shift(), e.push({
                    value: c,
                    type: f,
                    matches: d
                }), g = g.slice(c.length);
            if (!c) break
        }
        return b ? g.length : g ? r.error(a) : sa(a, h).slice(0)
    };
    ia = r.compile = function(a, b) {
        var c, d = [],
            e = [],
            f = T[a + " "];
        if (!f) {
            b || (b = R(a));
            for (c = b.length; c--;) f = ha(b[c]), f[n] ? d.push(f) : e.push(f);
            f = T(a, Aa(e, d));
            f.selector = a
        }
        return f
    };
    ma = r.select = function(a, b, c, d) {
        var e, f, g, h, k = "function" === typeof a && a,
            n = !d && R(a = k.selector || a);
        c = c || [];
        if (1 === n.length) {
            f = n[0] = n[0].slice(0);
            if (2 < f.length && "ID" === (g = f[0]).type && p.getById && 9 === b.nodeType && B && l.relative[f[1].type]) {
                if (b = (l.find.ID(g.matches[0].replace(E, F), b) || [])[0]) k && (b = b.parentNode);
                else return c;
                a = a.slice(f.shift().value.length)
            }
            for (e = aa.needsContext.test(a) ? 0 : f.length; e--;) {
                g = f[e];
                if (l.relative[h = g.type]) break;
                if (h = l.find[h])
                    if (d = h(g.matches[0].replace(E, F), ba.test(f[0].type) && ca(b.parentNode) || b)) {
                        f.splice(e, 1);
                        a = d.length && U(f);
                        if (!a) return I.apply(c, d), c;
                        break
                    }
            }
        }(k || ia(a,
            n))(d, b, !B, c, !b || ba.test(a) && ca(b.parentNode) || b);
        return c
    };
    p.sortStable = n.split("").sort(ja).join("") === n;
    p.detectDuplicates = !!P;
    H();
    p.sortDetached = C(function(a) {
        return a.compareDocumentPosition(h.createElement("fieldset")) & 1
    });
    C(function(a) {
        a.innerHTML = "\x3ca href\x3d'#'\x3e\x3c/a\x3e";
        return "#" === a.firstChild.getAttribute("href")
    }) || ea("type|href|height|width", function(a, b, c) {
        if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    });
    (!p.attributes || !C(function(a) {
        a.innerHTML = "\x3cinput/\x3e";
        a.firstChild.setAttribute("value", "");
        return "" === a.firstChild.getAttribute("value")
    })) && ea("value", function(a, b, c) {
        if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
    });
    C(function(a) {
        return null == a.getAttribute("disabled")
    }) || ea("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, c) {
        var d;
        if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    });
    var Ma = G.Sizzle;
    r.noConflict =
        function() {
            G.Sizzle === r && (G.Sizzle = Ma);
            return r
        };
    "function" === typeof define && define.amd ? define(function() {
        return r
    }) : "undefined" !== typeof module && module.exports ? module.exports = r : G.Sizzle || (G.Sizzle = r)
})(window);
this.Sfdc || (Sfdc = {});
if ("undefined" === typeof SfdcFramework) {
    var SfdcFramework = function(k, b) {
        function x(a, c, d) {
            var e = !1;
            b.isArray(d) && (e = !r(d));
            m[a] = {
                pending: e,
                name: a,
                ctr: c,
                dependencies: d
            };
            e ? b.require(d, function() {
                var b = m[a];
                b && (b.pending = !1);
                u(a)
            }) : u(a)
        }

        function u(a) {
            if (a in n) {
                for (var c = n[a], d = [], e, f = 0; f < c.length; f++) e = s[c[f]], r(e) && d.push(c[f]);
                delete n[a];
                a = d
            } else a = [];
            if (b.isArray(a) && 0 < a.length)
                for (c = 0; c < a.length; c++) t(a[c], s[a[c]])
        }

        function t(a, c) {
            var d = [];
            b.isArray(c) || (c = []);
            for (var e, f, g = 0; g < c.length; g++)(e =
                m[c[g]]) && !e.pending && (f = t(e.ctr, e.dependencies)), d.push(f);
            return a.apply(this, d)
        }

        function r(a) {
            b.assert(b.isArray(a), "Required ModulesList is an Array");
            for (var c, d = 0; d < a.length; d++)
                if (c = a[d], b.isEmpty(c) && b.error("A specified ModuleName must be a non empty string"), c = m[c], !c || c.pending) return !1;
            return !0
        }
        b || (b = {});
        var v = k.Sizzle,
            p = k.document,
            w = [],
            y = 0,
            q = Object.prototype.toString,
            m = {},
            s = {},
            n = {};
        b.isDebug = function() {
            var a = p && (p.head || p.getElementsByTagName("head")[0]);
            return a && "true" === a.getAttribute("debug")
        }();
        b.userAgent = new function() {
            var a = k.navigator && k.navigator.userAgent || "",
                b = -1 != a.indexOf("Chromium"),
                d = -1 != a.indexOf("AppleWebKit"),
                e = d && -1 != a.indexOf("Chrome/"),
                f = d && !e,
                g = -1 != a.indexOf("Firefox/"),
                h = -1 != a.indexOf("MSIE ") || -1 != a.indexOf("Trident/"),
                l = parseInt(a.split("MSIE")[1], 10) || -1;
            h && (-1 == l && -1 != a.indexOf("Trident/7.0")) && (l = 11);
            return {
                isIE: h,
                isIE11: h && 11 == l,
                isIE10: h && 10 == l,
                isIE9: h && 9 == l,
                isIE8: h && 8 == l,
                isIE7: h && 7 == l,
                isIE6: h && 6 == l,
                ieVersion: l,
                isWebkit: d,
                isChrome: e,
                isChromeFrame: e && "undefined" !=
                    typeof k.externalHost,
                isChromium: b,
                isSafari: f,
                isSafari3: f && -1 != a.indexOf("Version/3"),
                isSafariIpad: d && -1 != a.indexOf("iPad"),
                isSafariIOS: f && (-1 != a.indexOf("iPad") || -1 != a.indexOf("iPhone")),
                isFirefox: g,
                isFirefox3: g && -1 != a.indexOf("Firefox/3"),
                isOpera: -1 != a.indexOf("Opera"),
                isNetscape: -1 != a.indexOf("Netscape/")
            }
        };
        b.ns = function() {
            for (var a = Array.prototype.slice.call(arguments), b = null; a.length;)
                for (var d = (a.shift() || "").toString().split("."), b = k; d.length;) {
                    var e = d.shift();
                    if (!e.length) break;
                    b[e] || (b[e] = {});
                    b = b[e]
                }
            return b
        };
        b.provide = function(a, c) {
            if (a && c) {
                var d = b.resolve(a);
                if (!d) {
                    var e = a.split("."),
                        d = e.pop(),
                        e = b.ns(e.join("."));
                    c.$constructor && (b.assert(b.Class, "Sfdc.provide(): Sfdc.Class is required when providing $constructor 'classOrFunction' notation."), c = new b.Class(c));
                    b.define(a, function() {
                        return c
                    });
                    return e[d] = c
                }
                return d
            }
        };
        b.resolve = function(a, b) {
            var d = b || k;
            if (void 0 != a && a.length)
                for (var e = a.split("."); d && e.length;) d = d[e.shift()];
            return void 0 != d ? d : null
        };
        b.apply = function(a, b, d) {
            if (d)
                for (var e in b) b.hasOwnProperty(e) &&
                    (a[e] = b[e]);
            else
                for (var f in b) a.hasOwnProperty(f) || (a[f] = b[f]);
            return a
        };
        b.clone = function(a, c) {
            c = !!c;
            if (!a) return a;
            var d = b.isArray(a),
                e = b.isObject(a);
            if (!d && !e) return a;
            if (c) {
                if (d)
                    for (var d = [], f = 0, e = a.length; f < e; f++) d.push(b.clone(a[f], !0));
                else
                    for (f in d = {}, a) a.hasOwnProperty(f) && (d[f] = b.clone(a[f], !0));
                return d
            }
            return d ? a.slice() : b.apply({}, a)
        };
        b.each = function(a, c, d) {
            b.assert(b.Array, "Sfdc.each(): Sfdc.Array is required for calls to Sfdc.each().");
            if (b.isArray(a)) return b.Array.forEach(a, c,
                d);
            if ("length" in a) return b.Array.forEach(b.Array.toArray(a), c, d);
            b.error("You tried to iterate over an object that is not yet supported.");
            return null
        };
        b.onReady = function(a) {
            b.assert(b.Dom, "Sfdc.onReady(): Sfdc.Dom is required for calls to Sfdc.onReady().");
            return b.Dom.onReady(a)
        };
        b.onload = function(a) {
            b.assert(b.Dom, "Sfdc.onload(): Sfdc.Dom is required for calls to Sfdc.onload().");
            return b.Dom.onload(a)
        };
        b.isArray = function(a) {
            return void 0 === a || null === a ? !1 : "[object Array]" === q.call(a)
        };
        b.isObject =
            function(a) {
                return null != a ? "object" === typeof a && !b.isArray(a) : !1
            };
        b.isString = function(a) {
            return "[object String]" === q.call(a)
        };
        b.isBoolean = function(a) {
            return "[object Boolean]" === q.call(a)
        };
        b.isFunction = function(a) {
            return "function" === typeof a
        };
        b.isNumber = function(a) {
            return "[object Number]" === q.call(a)
        };
        b.select = function(a, c) {
            b.assert(v, "Sfdc.select(): There is no selection engine specified.");
            return v(a, c)
        };
        b.get = function(a, c) {
            if (!b.isString(a)) return a;
            var d = p;
            if (/^[>\.#\\]/.test(a)) return b.first(a,
                c);
            c ? d = c.getElementById ? c : c.ownerDocument : c = d;
            d = d.getElementById(a);
            return null === d || d.getAttribute("id") === a ? d : c.all ? c.all[a] : null
        };
        b.first = function(a, c) {
            return b.select(a, c)[0] || null
        };
        b.assert = function(a, c) {
            if (void 0 === a || null === a || !1 === !!a) throw "error" in b && b.error(c), Error(c);
            return a
        };
        b.isDefAndNotNull = function(a) {
            return void 0 !== a && null !== a
        };
        b.on = function(a, c, d, e, f) {
            b.assert(b.Event, "Sfdc.on(): Sfdc.Event is required to use Sfdc.on().");
            b.assert(a, "Sfdc.on(): 'element' must be a valid Object or Node.");
            b.assert(c, "Sfdc.on(): 'eventName' must be a valid String.");
            b.Event.add(a, c, d, e, f);
            return b
        };
        b.un = function(a, c, d, e) {
            b.assert(b.Event, "Sfdc.un(): Sfdc.Event is required to use Sfdc.un().");
            b.assert(a, "Sfdc.un(): 'element' must be a valid Object or Node.");
            b.assert(c, "Sfdc.un(): 'eventName' must be a valid String.");
            b.Event.remove(a, c, d, e);
            return b
        };
        b.getConst = function(a, c) {
            b.assert(void 0 !== k[a], "That Constants group does not exist.");
            return k[a][c]
        };
        b.getUID = function(a) {
            if (a.getAttribute) {
                var c =
                    a.getAttribute("data-uidSfdc");
                if (c) return c;
                c = b.newUID();
                a.setAttribute("data-uidSfdc", c);
                return c
            }
            return (c = a["data-uidSfdc"]) ? c : a["data-uidSfdc"] = b.newUID()
        };
        b.hasUID = function(a) {
            return a ? a.getAttribute ? null != a.getAttribute("data-uidSfdc") : a.hasOwnProperty ? a.hasOwnProperty("data-uidSfdc") : "data-uidSfdc" in a : !1
        };
        b.newUID = function() {
            return ++y
        };
        b.log = function(a, b, d) {
            void 0 !== a && w.push({
                msg: a,
                level: b,
                args: d
            });
            return w
        };
        b.isEmpty = function(a) {
            if (b.isObject(a)) {
                for (var c in a)
                    if (a.hasOwnProperty(c)) return !1;
                return !0
            }
            return null === a || void 0 === a || "" === a || b.isArray(a) && !a.length
        };
        b.inherits = function(a, c) {
            if (!b.isFunction(a)) throw Error("Sfdc.inherit(): 'type' must be a valid Function pointer.");
            for (var d = c; d;) {
                if (a === d || d instanceof a || a === d.constructor) return !0;
                d = d.prototype
            }
            return !1
        };
        b.implies = function(a, c, d) {
            if (!b.isObject(a)) throw Error("Sfdc.implies(): 'contract' must be a valid Object.");
            if (null == c) return d && (d.reason = "Instance was undefined."), !1;
            var e = null,
                f = null,
                g;
            for (g in a) {
                if (void 0 === c[g]) return d &&
                    (d.reason = b.String.format("Instance member not implemented. Expected: '{0}{1}'.", [g, b.isFunction(a[g]) ? b.String.format("({0})", [b.Function.getParameters(a[g]).join(", ")]) : ""])), !1;
                if (b.isFunction(a[g])) {
                    if (b.inherits(a[g], c[g])) continue;
                    if (b.isFunction(c[g]) && b.isDebug && (e = b.Function.getParameters(a[g]).join(", "), f = b.Function.getParameters(c[g]).join(", "), e != f)) return d && (d.reason = b.String.format("Instance member signature mismatch on '{0}()'. Expected '{0}({1})', found '{0}({2})'.", [g, e, f])),
                        !1
                }
                if (b.isObject(a[g])) {
                    if (null !== c[g] && !b.implies(a[g], c[g], d)) return d && (d.reason = b.String.format("Instance member type mismatch on '{0}': {1}", [g, d.reason])), !1
                } else if (typeof a[g] !== typeof c[g]) return d && (d.reason = b.String.format("Instance member type mismatch on '{0}'. Expected '{1}', found '{2}'.", [g, typeof a[g], typeof c[g]])), !1
            }
            return !0
        };
        b.isAssignableFrom = function(a, c, d) {
            if (void 0 == a) throw Error("Sfdc.isAssignableFrom(): 'type' must be a valid Function or Object.");
            if (void 0 != c) switch (typeof a) {
                case "object":
                    if (a.constructor !=
                        Object && b.inherits(a.constructor, c) || b.implies(a, c, d)) return !0;
                    break;
                case "function":
                    if (b.inherits(a, c)) return !0
            }
            return !1
        };
        b.define = function(a, c, d) {
            b.assert(b.isString(a) && 0 < a.length, "ModuleName is required and must be a string of length greater than 0.");
            b.isFunction(c) ? (d = c, c = null) : (b.assert(b.isFunction(d), "ModuleConstructor parameter must be a function that returns an instance of the module."), b.assert(b.isArray(c), "Dependencies for your module must be specified as an Array."));
            var e = m[a];
            e ? (c =
                (e.dependencies || []).toString() === (c || []).toString(), (e.ctr.toString() !== d.toString() || !c) && b.error("Cannot redefine an existing module (" + a + ").")) : x(a, d, c)
        };
        b.require = function(a, c) {
            b.assert(!b.isEmpty(a), "Required Modules are required");
            b.isArray(a) || (a = Array.prototype.slice.call(arguments), c = a.pop());
            b.assert(b.isFunction(c), "Callback must be a function");
            if (r(a)) t(c, a);
            else {
                var d = c,
                    e = a;
                s[d] = e;
                for (var f, g, h = 0; h < e.length; h++)
                    if (f = e[h], g = m[f], !g || g.pending) !1 === f in n && (n[f] = []), n[f].push(d)
            }
        };
        b.error =
            function(a) {
                throw Error(a);
            };
        return b
    };
    new SfdcFramework(this, Sfdc)
};
var VSMetadataSender = function() {
    var b, c, d;
    return {
        createAppDomainFrame: function() {
            var a = {
                    sfdcIFrameOrigin: this.getOrigin()
                },
                a = Sfdc.Url.generateUrl(c + "/apexpages/devmode/devConsoleViewStateMetadataReceiver.apexp", a);
            b = Sfdc.Dom.create(document.body, {
                id: "SfdcApp.AppDomain.frame",
                src: a
            }, "iframe");
            b.setAttribute("style", "display:none;");
            return b
        },
        sendViewStateMetadata: function() {
            var a = VSMetadataSender.getViewStateMetadata();
            a && b && this.sendMetadata(a)
        },
        getQueryParamJSONString: function(a) {
            if (!d) {
                var b = Sfdc.Url.getUrlParameters(window.location.href);
                d = Sfdc.JSON.stringify([{
                    qualifiedPageName: a,
                    queryParam: b
                }])
            }
            return d
        },
        setAppDomain: function(a) {
            c = a
        },
        sendMetadata: function(a) {
            b.contentWindow.postMessage(a, c)
        },
        getViewStateMetadata: function() {
            var a = document.getElementById("SfdcApp.Visualforce.viewstate.ViewstateMetadata");
            return Sfdc.isDefAndNotNull(a) && !Sfdc.isEmpty(a.innerHTML) ? a.innerHTML : null
        },
        getOrigin: function() {
            var a = window.location.origin;
            a || (a = window.location.protocol + "//" + window.location.hostname, window.location.port && (a += ":" + window.location.port));
            return a
        }
    }
}();
Sfdc.provide("SfdcApp.Visualforce.viewstate.ViewstateSender", {
    getParentWindow: function() {
        return window.opener
    },
    sendViewstate: function(b, c) {
        if (this.getParentWindow()) {
            VSMetadataSender.setAppDomain(b);
            var d = VSMetadataSender.createAppDomainFrame(),
                a = VSMetadataSender.getViewStateMetadata();
            d.onload = function() {
                a && VSMetadataSender.sendMetadata(a);
                VSMetadataSender.sendMetadata(VSMetadataSender.getQueryParamJSONString(c))
            }
        }
    },
    resend: function() {
        VSMetadataSender.sendViewStateMetadata()
    }
});

//# sourceMappingURL=/javascript/1551802935000/sfdc/source/VFMetadataSender.js.map