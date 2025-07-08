var wn = Object.defineProperty;
var nr = (t) => {
  throw TypeError(t);
};
var yn = (t, e, r) => e in t ? wn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var de = (t, e, r) => yn(t, typeof e != "symbol" ? e + "" : e, r), ir = (t, e, r) => e.has(t) || nr("Cannot " + r);
var te = (t, e, r) => (ir(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ct = (t, e, r) => e.has(t) ? nr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), St = (t, e, r, n) => (ir(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const kn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(kn);
const Dt = 1, Ft = 2, _r = 4, En = 8, $n = 16, Cn = 1, Sn = 4, qn = 8, In = 16, Nn = 4, An = 1, Tn = 2, gr = "[", Pt = "[!", Bt = "]", Ge = {}, ne = Symbol(), mr = !1;
function Ut(t) {
  console.warn("hydration_mismatch");
}
var Vt = Array.isArray, Gt = Array.from, vt = Object.keys, dt = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, zn = Object.getOwnPropertyDescriptors, jn = Object.prototype, On = Array.prototype, It = Object.getPrototypeOf;
function Rn(t) {
  return typeof t == "function";
}
const Ve = () => {
};
function br(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const ye = 2, xr = 4, mt = 8, bt = 16, ge = 32, Qe = 64, Ue = 128, ft = 256, ae = 512, Ie = 1024, et = 2048, he = 4096, tt = 8192, wr = 16384, xt = 32768, Hn = 1 << 18, yr = 1 << 19, Le = Symbol("$state"), Ln = Symbol("");
function kr(t) {
  return t === this.v;
}
function Mn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Er(t) {
  return !Mn(t, this.v);
}
function Dn() {
  throw new Error("effect_update_depth_exceeded");
}
function Fn() {
  throw new Error("hydration_failed");
}
function Pn(t) {
  throw new Error("props_invalid_value");
}
function Bn() {
  throw new Error("state_descriptors_fixed");
}
function Un() {
  throw new Error("state_prototype_fixed");
}
function Vn() {
  throw new Error("state_unsafe_local_read");
}
function Gn() {
  throw new Error("state_unsafe_mutation");
}
let $r = !1;
function oe(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: kr,
    version: 0
  };
}
function we(t) {
  return /* @__PURE__ */ Yn(oe(t));
}
// @__NO_SIDE_EFFECTS__
function Yt(t, e = !1) {
  const r = oe(t);
  return e || (r.equals = Er), r;
}
// @__NO_SIDE_EFFECTS__
function Yn(t) {
  return M !== null && M.f & ye && (pe === null ? ei([t]) : pe.push(t)), t;
}
function F(t, e) {
  return M !== null && ri() && M.f & (ye | bt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (pe === null || !pe.includes(t)) && Gn(), Nt(t, e);
}
function Nt(t, e) {
  return t.equals(e) || (t.v = e, t.version = Fr(), Cr(t, Ie), T !== null && T.f & ae && !(T.f & ge) && (W !== null && W.includes(t) ? (ke(T, Ie), kt(T)) : qe === null ? ti([t]) : qe.push(t))), e;
}
function Cr(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & Ie || (ke(a, e), l & (ae | Ue) && (l & ye ? Cr(
        /** @type {Derived} */
        a,
        et
      ) : kt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ke(t) {
  var e = ye | Ie;
  T === null ? e |= Ue : T.f |= yr;
  const r = {
    children: null,
    ctx: _e,
    deps: null,
    equals: kr,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: T
  };
  if (M !== null && M.f & ye) {
    var n = (
      /** @type {Derived} */
      M
    );
    (n.children ?? (n.children = [])).push(r);
  }
  return r;
}
function Sr(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var r = 0; r < e.length; r += 1) {
      var n = e[r];
      n.f & ye ? Jt(
        /** @type {Derived} */
        n
      ) : je(
        /** @type {Effect} */
        n
      );
    }
  }
}
function qr(t) {
  var e, r = T;
  re(t.parent);
  try {
    Sr(t), e = Pr(t);
  } finally {
    re(r);
  }
  return e;
}
function Ir(t) {
  var e = qr(t), r = (Re || t.f & Ue) && t.deps !== null ? et : ae;
  ke(t, r), t.equals(e) || (t.v = e, t.version = Fr());
}
function Jt(t) {
  Sr(t), Xe(t, 0), ke(t, tt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Jn(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function rt(t, e, r, n = !0) {
  var i = (t & Qe) !== 0, a = T, l = {
    ctx: _e,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Ie,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var s = Me;
    try {
      ar(!0), yt(l), l.f |= wr;
    } catch (c) {
      throw je(l), c;
    } finally {
      ar(s);
    }
  } else e !== null && kt(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & yr) === 0;
  if (!u && !i && n && (a !== null && Jn(l, a), M !== null && M.f & ye)) {
    var o = (
      /** @type {Derived} */
      M
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function Nr(t) {
  const e = rt(Qe, t, !0);
  return () => {
    je(e);
  };
}
function nt(t) {
  return rt(xr, t, !1);
}
function Kt(t) {
  return rt(mt, t, !0);
}
function N(t) {
  return Wt(t);
}
function Wt(t, e = 0) {
  return rt(mt | bt | e, t, !0);
}
function We(t, e = !0) {
  return rt(mt | ge, t, !0, e);
}
function Ar(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = M;
    ce(null);
    try {
      e.call(null);
    } finally {
      ce(r);
    }
  }
}
function Tr(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      Jt(e[r]);
  }
}
function zr(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    je(r, e), r = n;
  }
}
function Kn(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & ge || je(e), e = r;
  }
}
function je(t, e = !0) {
  var r = !1;
  if ((e || t.f & Hn) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ee(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  zr(t, e && !r), Tr(t), Xe(t, 0), ke(t, tt);
  var l = t.transitions;
  if (l !== null)
    for (const u of l)
      u.stop();
  Ar(t);
  var s = t.parent;
  s !== null && s.first !== null && jr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function jr(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function At(t, e) {
  var r = [];
  Zt(t, r, !0), Or(r, () => {
    je(t), e && e();
  });
}
function Or(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var i of t)
      i.out(n);
  } else
    e();
}
function Zt(t, e, r) {
  if (!(t.f & he)) {
    if (t.f ^= he, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var i = n.next, a = (n.f & xt) !== 0 || (n.f & ge) !== 0;
      Zt(n, e, a ? r : !1), n = i;
    }
  }
}
function ht(t) {
  Rr(t, !0);
}
function Rr(t, e) {
  if (t.f & he) {
    it(t) && yt(t), t.f ^= he;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & xt) !== 0 || (r.f & ge) !== 0;
      Rr(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
const Wn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let pt = !1, _t = !1, Tt = [], zt = [];
function Hr() {
  pt = !1;
  const t = Tt.slice();
  Tt = [], br(t);
}
function Lr() {
  _t = !1;
  const t = zt.slice();
  zt = [], br(t);
}
function wt(t) {
  pt || (pt = !0, queueMicrotask(Hr)), Tt.push(t);
}
function Zn(t) {
  _t || (_t = !0, Wn(Lr)), zt.push(t);
}
function Xn() {
  pt && Hr(), _t && Lr();
}
const Mr = 0, Qn = 1;
let ut = Mr, Ze = !1, Me = !1;
function ar(t) {
  Me = t;
}
let Ae = [], De = 0;
let M = null;
function ce(t) {
  M = t;
}
let T = null;
function re(t) {
  T = t;
}
let pe = null;
function ei(t) {
  pe = t;
}
let W = null, ie = 0, qe = null;
function ti(t) {
  qe = t;
}
let Dr = 0, Re = !1, _e = null;
function Fr() {
  return ++Dr;
}
function ri() {
  return !$r;
}
function it(t) {
  var l, s;
  var e = t.f;
  if (e & Ie)
    return !0;
  if (e & et) {
    var r = t.deps, n = (e & Ue) !== 0;
    if (r !== null) {
      var i;
      if (e & ft) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= ft;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (it(
          /** @type {Derived} */
          a
        ) && Ir(
          /** @type {Derived} */
          a
        ), n && T !== null && !Re && !((s = a == null ? void 0 : a.reactions) != null && s.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
          return !0;
      }
    }
    n || ke(t, ae);
  }
  return !1;
}
function ni(t, e, r) {
  throw t;
}
function Pr(t) {
  var v;
  var e = W, r = ie, n = qe, i = M, a = Re, l = pe, s = _e, u = t.f;
  W = /** @type {null | Value[]} */
  null, ie = 0, qe = null, M = u & (ge | Qe) ? null : t, Re = !Me && (u & Ue) !== 0, pe = null, _e = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), c = t.deps;
    if (W !== null) {
      var f;
      if (Xe(t, ie), c !== null && ie > 0)
        for (c.length = ie + W.length, f = 0; f < W.length; f++)
          c[ie + f] = W[f];
      else
        t.deps = c = W;
      if (!Re)
        for (f = ie; f < c.length; f++)
          ((v = c[f]).reactions ?? (v.reactions = [])).push(t);
    } else c !== null && ie < c.length && (Xe(t, ie), c.length = ie);
    return o;
  } finally {
    W = e, ie = r, qe = n, M = i, Re = a, pe = l, _e = s;
  }
}
function ii(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = r.indexOf(t);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = e.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && e.f & ye && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (W === null || !W.includes(e)) && (ke(e, et), e.f & (Ue | ft) || (e.f ^= ft), Xe(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Xe(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      ii(t, r[n]);
}
function yt(t) {
  var e = t.f;
  if (!(e & tt)) {
    ke(t, ae);
    var r = T;
    T = t;
    try {
      e & bt ? Kn(t) : zr(t), Tr(t), Ar(t);
      var n = Pr(t);
      t.teardown = typeof n == "function" ? n : null, t.version = Dr;
    } catch (i) {
      ni(
        /** @type {Error} */
        i
      );
    } finally {
      T = r;
    }
  }
}
function Br() {
  De > 1e3 && (De = 0, Dn()), De++;
}
function Ur(t) {
  var e = t.length;
  if (e !== 0) {
    Br();
    var r = Me;
    Me = !0;
    try {
      for (var n = 0; n < e; n++) {
        var i = t[n];
        i.f & ae || (i.f ^= ae);
        var a = [];
        Vr(i, a), ai(a);
      }
    } finally {
      Me = r;
    }
  }
}
function ai(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      !(n.f & (tt | he)) && it(n) && (yt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? jr(n) : n.fn = null));
    }
}
function li() {
  if (Ze = !1, De > 1001)
    return;
  const t = Ae;
  Ae = [], Ur(t), Ze || (De = 0);
}
function kt(t) {
  ut === Mr && (Ze || (Ze = !0, queueMicrotask(li)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (Qe | ge)) {
      if (!(r & ae)) return;
      e.f ^= ae;
    }
  }
  Ae.push(e);
}
function Vr(t, e) {
  var r = t.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & ge) !== 0, l = a && (i & ae) !== 0;
    if (!l && !(i & he))
      if (i & mt) {
        a ? r.f ^= ae : it(r) && yt(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & xr && n.push(r);
    var u = r.next;
    if (u === null) {
      let f = r.parent;
      for (; f !== null; ) {
        if (t === f)
          break e;
        var o = f.next;
        if (o !== null) {
          r = o;
          continue e;
        }
        f = f.parent;
      }
    }
    r = u;
  }
  for (var c = 0; c < n.length; c++)
    s = n[c], e.push(s), Vr(s, e);
}
function Gr(t) {
  var e = ut, r = Ae;
  try {
    Br();
    const i = [];
    ut = Qn, Ae = i, Ze = !1, Ur(r);
    var n = t == null ? void 0 : t();
    return Xn(), (Ae.length > 0 || i.length > 0) && Gr(), De = 0, n;
  } finally {
    ut = e, Ae = r;
  }
}
function m(t) {
  var s;
  var e = t.f, r = (e & ye) !== 0;
  if (r && e & tt) {
    var n = qr(
      /** @type {Derived} */
      t
    );
    return Jt(
      /** @type {Derived} */
      t
    ), n;
  }
  if (M !== null) {
    pe !== null && pe.includes(t) && Vn();
    var i = M.deps;
    W === null && i !== null && i[ie] === t ? ie++ : W === null ? W = [t] : W.push(t), qe !== null && T !== null && T.f & ae && !(T.f & ge) && qe.includes(t) && (ke(T, Ie), kt(T));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((s = l.deriveds) != null && s.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, it(a) && Ir(a)), t.v;
}
function gt(t) {
  const e = M;
  try {
    return M = null, t();
  } finally {
    M = e;
  }
}
const si = ~(Ie | et | ae);
function ke(t, e) {
  t.f = t.f & si | e;
}
function X(t, e = !1, r) {
  _e = {
    p: _e,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function Q(t) {
  const e = _e;
  if (e !== null) {
    const l = e.e;
    if (l !== null) {
      var r = T, n = M;
      e.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          re(a.effect), ce(a.reaction), nt(a.fn);
        }
      } finally {
        re(r), ce(n);
      }
    }
    _e = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function D(t, e = null, r) {
  if (typeof t != "object" || t === null || Le in t)
    return t;
  const n = It(t);
  if (n !== jn && n !== On)
    return t;
  var i = /* @__PURE__ */ new Map(), a = Vt(t), l = oe(0);
  a && i.set("length", oe(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, o, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Bn();
        var f = i.get(o);
        return f === void 0 ? (f = oe(c.value), i.set(o, f)) : F(f, D(c.value, s)), !0;
      },
      deleteProperty(u, o) {
        var c = i.get(o);
        if (c === void 0)
          o in u && i.set(o, oe(ne));
        else {
          if (a && typeof o == "string") {
            var f = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(o);
            Number.isInteger(v) && v < f.v && F(f, v);
          }
          F(c, ne), lr(l);
        }
        return !0;
      },
      get(u, o, c) {
        var d;
        if (o === Le)
          return t;
        var f = i.get(o), v = o in u;
        if (f === void 0 && (!v || (d = Te(u, o)) != null && d.writable) && (f = oe(D(v ? u[o] : ne, s)), i.set(o, f)), f !== void 0) {
          var p = m(f);
          return p === ne ? void 0 : p;
        }
        return Reflect.get(u, o, c);
      },
      getOwnPropertyDescriptor(u, o) {
        var c = Reflect.getOwnPropertyDescriptor(u, o);
        if (c && "value" in c) {
          var f = i.get(o);
          f && (c.value = m(f));
        } else if (c === void 0) {
          var v = i.get(o), p = v == null ? void 0 : v.v;
          if (v !== void 0 && p !== ne)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return c;
      },
      has(u, o) {
        var p;
        if (o === Le)
          return !0;
        var c = i.get(o), f = c !== void 0 && c.v !== ne || Reflect.has(u, o);
        if (c !== void 0 || T !== null && (!f || (p = Te(u, o)) != null && p.writable)) {
          c === void 0 && (c = oe(f ? D(u[o], s) : ne), i.set(o, c));
          var v = m(c);
          if (v === ne)
            return !1;
        }
        return f;
      },
      set(u, o, c, f) {
        var g;
        var v = i.get(o), p = o in u;
        if (a && o === "length")
          for (var d = c; d < /** @type {Source<number>} */
          v.v; d += 1) {
            var h = i.get(d + "");
            h !== void 0 ? F(h, ne) : d in u && (h = oe(ne), i.set(d + "", h));
          }
        v === void 0 ? (!p || (g = Te(u, o)) != null && g.writable) && (v = oe(void 0), F(v, D(c, s)), i.set(o, v)) : (p = v.v !== ne, F(v, D(c, s)));
        var b = Reflect.getOwnPropertyDescriptor(u, o);
        if (b != null && b.set && b.set.call(f, c), !p) {
          if (a && typeof o == "string") {
            var x = (
              /** @type {Source<number>} */
              i.get("length")
            ), E = Number(o);
            Number.isInteger(E) && E >= x.v && F(x, E + 1);
          }
          lr(l);
        }
        return !0;
      },
      ownKeys(u) {
        m(l);
        var o = Reflect.ownKeys(u).filter((v) => {
          var p = i.get(v);
          return p === void 0 || p.v !== ne;
        });
        for (var [c, f] of i)
          f.v !== ne && !(c in u) && o.push(c);
        return o;
      },
      setPrototypeOf() {
        Un();
      }
    }
  );
}
function lr(t, e = 1) {
  F(t, t.v + e);
}
function sr(t) {
  return t !== null && typeof t == "object" && Le in t ? t[Le] : t;
}
function oi(t, e) {
  return Object.is(sr(t), sr(e));
}
var or, Yr, Jr;
function jt() {
  if (or === void 0) {
    or = window;
    var t = Element.prototype, e = Node.prototype;
    Yr = Te(e, "firstChild").get, Jr = Te(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Be(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function ze(t) {
  return Yr.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ee(t) {
  return Jr.call(t);
}
function w(t, e) {
  if (!j)
    return /* @__PURE__ */ ze(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(H)
  );
  if (r === null)
    r = H.appendChild(Be());
  else if (e && r.nodeType !== 3) {
    var n = Be();
    return r == null || r.before(n), fe(n), n;
  }
  return fe(r), r;
}
function ue(t, e) {
  if (!j) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ze(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ee(r) : r;
  }
  return H;
}
function I(t, e = 1, r = !1) {
  let n = j ? H : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ee(n);
  if (!j)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = Be();
    return n == null || n.before(a), fe(a), a;
  }
  return fe(n), /** @type {TemplateNode} */
  n;
}
function Kr(t) {
  t.textContent = "";
}
let j = !1;
function xe(t) {
  j = t;
}
let H;
function fe(t) {
  if (t === null)
    throw Ut(), Ge;
  return H = t;
}
function at() {
  return fe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ee(H)
  );
}
function _(t) {
  if (j) {
    if (/* @__PURE__ */ Ee(H) !== null)
      throw Ut(), Ge;
    H = t;
  }
}
function ui(t = 1) {
  if (j) {
    for (var e = t, r = H; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(r);
    H = r;
  }
}
function Ot() {
  for (var t = 0, e = H; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Bt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === gr || r === Pt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(e)
    );
    e.remove(), e = n;
  }
}
let ur = !1;
function Wr() {
  ur || (ur = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = r.__on_r) == null || e.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function ci(t) {
  var e = M, r = T;
  ce(null), re(null);
  try {
    return t();
  } finally {
    ce(e), re(r);
  }
}
function Zr(t, e, r, n = r) {
  t.addEventListener(e, () => ci(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n();
  } : t.__on_r = n, Wr();
}
const Xr = /* @__PURE__ */ new Set(), Rt = /* @__PURE__ */ new Set();
function ee(t) {
  for (var e = 0; e < t.length; e++)
    Xr.add(t[e]);
  for (var r of Rt)
    r(t);
}
function lt(t) {
  var E;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((E = t.composedPath) == null ? void 0 : E.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  ), l = 0, s = t.__root;
  if (s) {
    var u = i.indexOf(s);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = i.indexOf(e);
    if (o === -1)
      return;
    u <= o && (l = u);
  }
  if (a = /** @type {Element} */
  i[l] || t.target, a !== e) {
    dt(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = M, f = T;
    ce(null), re(null);
    try {
      for (var v, p = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var h = a["__" + n];
          if (h !== void 0 && !/** @type {any} */
          a.disabled)
            if (Vt(h)) {
              var [b, ...x] = h;
              b.apply(a, [t, ...x]);
            } else
              h.call(a, t);
        } catch (g) {
          v ? p.push(g) : v = g;
        }
        if (t.cancelBubble || d === e || d === null)
          break;
        a = d;
      }
      if (v) {
        for (let g of p)
          queueMicrotask(() => {
            throw g;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ce(c), re(f);
    }
  }
}
function vi(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Fe(t, e) {
  var r = (
    /** @type {Effect} */
    T
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function S(t, e) {
  var r = (e & An) !== 0, n = (e & Tn) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (j)
      return Fe(H, null), H;
    i === void 0 && (i = vi(a ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ ze(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ze(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Fe(s, u);
    } else
      Fe(l, l);
    return l;
  };
}
function He() {
  if (j)
    return Fe(H, null), H;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Be();
  return t.append(e, r), Fe(e, r), t;
}
function $(t, e) {
  if (j) {
    T.nodes_end = H, at();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const di = ["touchstart", "touchmove"];
function fi(t) {
  return di.includes(t);
}
let Ht = !0;
function L(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function Qr(t, e) {
  return en(t, e);
}
function hi(t, e) {
  jt(), e.intro = e.intro ?? !1;
  const r = e.target, n = j, i = H;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== gr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(a);
    if (!a)
      throw Ge;
    xe(!0), fe(
      /** @type {Comment} */
      a
    ), at();
    const l = en(t, { ...e, anchor: a });
    if (H === null || H.nodeType !== 8 || /** @type {Comment} */
    H.data !== Bt)
      throw Ut(), Ge;
    return xe(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === Ge)
      return e.recover === !1 && Fn(), jt(), Kr(r), xe(!1), Qr(t, e);
    throw l;
  } finally {
    xe(n), fe(i);
  }
}
const Oe = /* @__PURE__ */ new Map();
function en(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  jt();
  var s = /* @__PURE__ */ new Set(), u = (f) => {
    for (var v = 0; v < f.length; v++) {
      var p = f[v];
      if (!s.has(p)) {
        s.add(p);
        var d = fi(p);
        e.addEventListener(p, lt, { passive: d });
        var h = Oe.get(p);
        h === void 0 ? (document.addEventListener(p, lt, { passive: d }), Oe.set(p, 1)) : Oe.set(p, h + 1);
      }
    }
  };
  u(Gt(Xr)), Rt.add(u);
  var o = void 0, c = Nr(() => {
    var f = r ?? e.appendChild(Be());
    return We(() => {
      if (a) {
        X({});
        var v = (
          /** @type {ComponentContext} */
          _e
        );
        v.c = a;
      }
      i && (n.$$events = i), j && Fe(
        /** @type {TemplateNode} */
        f,
        null
      ), Ht = l, o = t(f, n) || {}, Ht = !0, j && (T.nodes_end = H), a && Q();
    }), () => {
      var d;
      for (var v of s) {
        e.removeEventListener(v, lt);
        var p = (
          /** @type {number} */
          Oe.get(v)
        );
        --p === 0 ? (document.removeEventListener(v, lt), Oe.delete(v)) : Oe.set(v, p);
      }
      Rt.delete(u), Lt.delete(o), f !== r && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return Lt.set(o, c), o;
}
let Lt = /* @__PURE__ */ new WeakMap();
function pi(t) {
  const e = Lt.get(t);
  e && e();
}
function O(t, e, r, n = null, i = !1) {
  j && at();
  var a = t, l = null, s = null, u = null, o = i ? xt : 0;
  Wt(() => {
    if (u === (u = !!e())) return;
    let c = !1;
    if (j) {
      const f = (
        /** @type {Comment} */
        a.data === Pt
      );
      u === f && (a = Ot(), fe(a), xe(!1), c = !0);
    }
    u ? (l ? ht(l) : l = We(() => r(a)), s && At(s, () => {
      s = null;
    })) : (s ? ht(s) : n && (s = We(() => n(a))), l && At(l, () => {
      l = null;
    })), c && xe(!0);
  }, o), j && (a = H);
}
function G(t, e) {
  return e;
}
function _i(t, e, r, n) {
  for (var i = [], a = e.length, l = 0; l < a; l++)
    Zt(e[l].e, i, !0);
  var s = a > 0 && i.length === 0 && r !== null;
  if (s) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Kr(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), Ce(t, e[0].prev, e[a - 1].next);
  }
  Or(i, () => {
    for (var o = 0; o < a; o++) {
      var c = e[o];
      s || (n.delete(c.k), Ce(t, c.prev, c.next)), je(c.e, !s);
    }
  });
}
function Y(t, e, r, n, i, a = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & _r) !== 0;
  if (u) {
    var o = (
      /** @type {Element} */
      t
    );
    l = j ? fe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ ze(o)
    ) : o.appendChild(Be());
  }
  j && at();
  var c = null, f = !1;
  Wt(() => {
    var v = r(), p = Vt(v) ? v : v == null ? [] : Gt(v), d = p.length;
    if (f && d === 0)
      return;
    f = d === 0;
    let h = !1;
    if (j) {
      var b = (
        /** @type {Comment} */
        l.data === Pt
      );
      b !== (d === 0) && (l = Ot(), fe(l), xe(!1), h = !0);
    }
    if (j) {
      for (var x = null, E, g = 0; g < d; g++) {
        if (H.nodeType === 8 && /** @type {Comment} */
        H.data === Bt) {
          l = /** @type {Comment} */
          H, h = !0, xe(!1);
          break;
        }
        var k = p[g], y = n(k, g);
        E = tn(H, s, x, null, k, y, g, i, e), s.items.set(y, E), x = E;
      }
      d > 0 && fe(Ot());
    }
    if (!j) {
      var q = (
        /** @type {Effect} */
        M
      );
      gi(p, s, l, i, e, (q.f & he) !== 0, n);
    }
    a !== null && (d === 0 ? c ? ht(c) : c = We(() => a(l)) : c !== null && At(c, () => {
      c = null;
    })), h && xe(!0), r();
  }), j && (l = H);
}
function gi(t, e, r, n, i, a, l) {
  var V, le, $e, Ne;
  var s = (i & En) !== 0, u = (i & (Dt | Ft)) !== 0, o = t.length, c = e.items, f = e.first, v = f, p, d = null, h, b = [], x = [], E, g, k, y;
  if (s)
    for (y = 0; y < o; y += 1)
      E = t[y], g = l(E, y), k = c.get(g), k !== void 0 && ((V = k.a) == null || V.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(k));
  for (y = 0; y < o; y += 1) {
    if (E = t[y], g = l(E, y), k = c.get(g), k === void 0) {
      var q = v ? (
        /** @type {TemplateNode} */
        v.e.nodes_start
      ) : r;
      d = tn(
        q,
        e,
        d,
        d === null ? e.first : d.next,
        E,
        g,
        y,
        n,
        i
      ), c.set(g, d), b = [], x = [], v = d.next;
      continue;
    }
    if (u && mi(k, E, y, i), k.e.f & he && (ht(k.e), s && ((le = k.a) == null || le.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(k))), k !== v) {
      if (p !== void 0 && p.has(k)) {
        if (b.length < x.length) {
          var R = x[0], z;
          d = R.prev;
          var Z = b[0], J = b[b.length - 1];
          for (z = 0; z < b.length; z += 1)
            cr(b[z], R, r);
          for (z = 0; z < x.length; z += 1)
            p.delete(x[z]);
          Ce(e, Z.prev, J.next), Ce(e, d, Z), Ce(e, J, R), v = R, d = J, y -= 1, b = [], x = [];
        } else
          p.delete(k), cr(k, v, r), Ce(e, k.prev, k.next), Ce(e, k, d === null ? e.first : d.next), Ce(e, d, k), d = k;
        continue;
      }
      for (b = [], x = []; v !== null && v.k !== g; )
        (a || !(v.e.f & he)) && (p ?? (p = /* @__PURE__ */ new Set())).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      k = v;
    }
    b.push(k), d = k, v = k.next;
  }
  if (v !== null || p !== void 0) {
    for (var P = p === void 0 ? [] : Gt(p); v !== null; )
      (a || !(v.e.f & he)) && P.push(v), v = v.next;
    var K = P.length;
    if (K > 0) {
      var ve = i & _r && o === 0 ? r : null;
      if (s) {
        for (y = 0; y < K; y += 1)
          ($e = P[y].a) == null || $e.measure();
        for (y = 0; y < K; y += 1)
          (Ne = P[y].a) == null || Ne.fix();
      }
      _i(e, P, ve, c);
    }
  }
  s && wt(() => {
    var me;
    if (h !== void 0)
      for (k of h)
        (me = k.a) == null || me.apply();
  }), T.first = e.first && e.first.e, T.last = d && d.e;
}
function mi(t, e, r, n) {
  n & Dt && Nt(t.v, e), n & Ft ? Nt(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function tn(t, e, r, n, i, a, l, s, u) {
  var o = (u & Dt) !== 0, c = (u & $n) === 0, f = o ? c ? /* @__PURE__ */ Yt(i) : oe(i) : i, v = u & Ft ? oe(l) : l, p = {
    i: v,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return p.e = We(() => s(t, f, v), j), p.e.prev = r && r.e, p.e.next = n && n.e, r === null ? e.first = p : (r.next = p, r.e.next = p.e), n !== null && (n.prev = p, n.e.prev = p.e), p;
  } finally {
  }
}
function cr(t, e, r) {
  for (var n = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : r, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ee(a)
    );
    i.before(a), a = l;
  }
}
function Ce(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function Xt(t, e, r, n, i) {
  var s;
  j && at();
  var a = (s = e.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
}
function B(t, e) {
  wt(() => {
    var r = t.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, n.appendChild(i);
    }
  });
}
function Et(t) {
  if (j) {
    var e = !1, r = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var n = t.value;
          A(t, "value", null), t.value = n;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          A(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = r, Zn(r), Wr();
  }
}
function A(t, e, r, n) {
  var i = t.__attributes ?? (t.__attributes = {});
  j && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Ln] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && rn(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function qt(t, e, r) {
  var n = M, i = T;
  ce(null), re(null);
  try {
    rn(t).includes(e) ? t[e] = r : A(t, e, r);
  } finally {
    ce(n), re(i);
  }
}
var vr = /* @__PURE__ */ new Map();
function rn(t) {
  var e = vr.get(t.nodeName);
  if (e) return e;
  vr.set(t.nodeName, e = []);
  for (var r, n = It(t), i = Element.prototype; i !== n; ) {
    r = zn(n);
    for (var a in r)
      r[a].set && e.push(a);
    n = It(n);
  }
  return e;
}
function Ye(t, e) {
  var r = t.__className, n = bi(e);
  j && t.className === n ? t.__className = n : (r !== n || j && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
}
function bi(t) {
  return t ?? "";
}
function Pe(t, e, r) {
  if (r) {
    if (t.classList.contains(e)) return;
    t.classList.add(e);
  } else {
    if (!t.classList.contains(e)) return;
    t.classList.remove(e);
  }
}
const xi = () => performance.now(), Se = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => xi(),
  tasks: /* @__PURE__ */ new Set()
};
function nn(t) {
  Se.tasks.forEach((e) => {
    e.c(t) || (Se.tasks.delete(e), e.f());
  }), Se.tasks.size !== 0 && Se.tick(nn);
}
function wi(t) {
  let e;
  return Se.tasks.size === 0 && Se.tick(nn), {
    promise: new Promise((r) => {
      Se.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      Se.tasks.delete(e);
    }
  };
}
function st(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function yi(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function dr(t) {
  const e = {}, r = t.split(";");
  for (const n of r) {
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const l = yi(i.trim());
    e[l] = a.trim();
  }
  return e;
}
const ki = (t) => t;
function Ei(t, e, r, n) {
  var i = (t & Nn) !== 0, a = "both", l, s = e.inert, u, o;
  function c() {
    var h = M, b = T;
    ce(null), re(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ce(h), re(b);
    }
  }
  var f = {
    is_global: i,
    in() {
      e.inert = s, st(e, "introstart"), u = Mt(e, c(), o, 1, () => {
        st(e, "introend"), u == null || u.abort(), u = l = void 0;
      });
    },
    out(h) {
      e.inert = !0, st(e, "outrostart"), o = Mt(e, c(), u, 0, () => {
        st(e, "outroend"), h == null || h();
      });
    },
    stop: () => {
      u == null || u.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    T
  );
  if ((v.transitions ?? (v.transitions = [])).push(f), Ht) {
    var p = i;
    if (!p) {
      for (var d = (
        /** @type {Effect | null} */
        v.parent
      ); d && d.f & xt; )
        for (; (d = d.parent) && !(d.f & bt); )
          ;
      p = !d || (d.f & wr) !== 0;
    }
    p && nt(() => {
      gt(() => f.in());
    });
  }
}
function Mt(t, e, r, n, i) {
  var a = n === 1;
  if (Rn(e)) {
    var l, s = !1;
    return wt(() => {
      if (!s) {
        var b = e({ direction: a ? "in" : "out" });
        l = Mt(t, b, r, n, i);
      }
    }), {
      abort: () => {
        s = !0, l == null || l.abort();
      },
      deactivate: () => l.deactivate(),
      reset: () => l.reset(),
      t: () => l.t()
    };
  }
  if (r == null || r.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: Ve,
      deactivate: Ve,
      reset: Ve,
      t: () => n
    };
  const { delay: u = 0, css: o, tick: c, easing: f = ki } = e;
  var v = [];
  if (a && r === void 0 && (c && c(0, 1), o)) {
    var p = dr(o(0, 1));
    v.push(p, p);
  }
  var d = () => 1 - n, h = t.animate(v, { duration: u });
  return h.onfinish = () => {
    var b = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var x = n - b, E = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), g = [];
    if (E > 0) {
      if (o)
        for (var k = Math.ceil(E / 16.666666666666668), y = 0; y <= k; y += 1) {
          var q = b + x * f(y / k), R = o(q, 1 - q);
          g.push(dr(R));
        }
      d = () => {
        var z = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          h.currentTime
        );
        return b + x * f(z / E);
      }, c && wi(() => {
        if (h.playState !== "running") return !1;
        var z = d();
        return c(z, 1 - z), !0;
      });
    }
    h = t.animate(g, { duration: E, fill: "forwards" }), h.onfinish = () => {
      d = () => n, c == null || c(n, 1 - n), i();
    };
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null, h.onfinish = Ve);
    },
    deactivate: () => {
      i = Ve;
    },
    reset: () => {
      n === 0 && (c == null || c(1, 0));
    },
    t: () => d()
  };
}
function $t(t, e, r = e) {
  Zr(t, "input", () => {
    var n = fr(t) ? hr(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), Kt(() => {
    var n = e();
    if (j && t.defaultValue !== t.value) {
      r(t.value);
      return;
    }
    fr(t) && n === hr(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function fr(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function hr(t) {
  return t === "" ? null : +t;
}
function an(t, e, r) {
  if (t.multiple)
    return Ci(t, e);
  for (var n of t.options) {
    var i = Je(n);
    if (oi(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function $i(t, e) {
  nt(() => {
    var r = new MutationObserver(() => {
      var n = t.__value;
      an(t, n);
    });
    return r.observe(t, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      r.disconnect();
    };
  });
}
function ln(t, e, r = e) {
  var n = !0;
  Zr(t, "change", () => {
    var i;
    if (t.multiple)
      i = [].map.call(t.querySelectorAll(":checked"), Je);
    else {
      var a = t.querySelector(":checked");
      i = a && Je(a);
    }
    r(i);
  }), nt(() => {
    var i = e();
    if (an(t, i, n), n && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = Je(a), r(i));
    }
    t.__value = i, n = !1;
  }), $i(t);
}
function Ci(t, e) {
  for (var r of t.options)
    r.selected = ~e.indexOf(Je(r));
}
function Je(t) {
  return "__value" in t ? t.__value : t.value;
}
function pr(t, e) {
  return t === e || (t == null ? void 0 : t[Le]) === e;
}
function sn(t = {}, e, r, n) {
  return nt(() => {
    var i, a;
    return Kt(() => {
      i = a, a = (n == null ? void 0 : n()) || [], gt(() => {
        t !== r(...a) && (e(t, ...a), i && pr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      wt(() => {
        a && pr(r(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
let ot = !1;
function Si(t) {
  var e = ot;
  try {
    return ot = !1, [t(), ot];
  } finally {
    ot = e;
  }
}
function qi(t) {
  for (var e = T, r = T; e !== null && !(e.f & (ge | Qe)); )
    e = e.parent;
  try {
    return re(e), t();
  } finally {
    re(r);
  }
}
function C(t, e, r, n) {
  var y;
  var i = (r & Cn) !== 0, a = !$r, l = (r & qn) !== 0, s = (r & In) !== 0, u = !1, o;
  l ? [o, u] = Si(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var c = (y = Te(t, e)) == null ? void 0 : y.set, f = (
    /** @type {V} */
    n
  ), v = !0, p = !1, d = () => (p = !0, v && (v = !1, s ? f = gt(
    /** @type {() => V} */
    n
  ) : f = /** @type {V} */
  n), f);
  o === void 0 && n !== void 0 && (c && a && Pn(), o = d(), c && c(o));
  var h;
  if (h = () => {
    var q = (
      /** @type {V} */
      t[e]
    );
    return q === void 0 ? d() : (v = !0, p = !1, q);
  }, !(r & Sn))
    return h;
  if (c) {
    var b = t.$$legacy;
    return function(q, R) {
      return arguments.length > 0 ? ((!R || b || u) && c(R ? h() : q), q) : h();
    };
  }
  var x = !1, E = !1, g = /* @__PURE__ */ Yt(o), k = qi(
    () => /* @__PURE__ */ Ke(() => {
      var q = h(), R = m(g);
      return x ? (x = !1, E = !0, R) : (E = !1, g.v = q);
    })
  );
  return i || (k.equals = Er), function(q, R) {
    if (arguments.length > 0) {
      const z = R ? m(k) : l ? D(q) : q;
      return k.equals(z) || (x = !0, F(g, z), p && f !== void 0 && (f = z), gt(() => m(k))), q;
    }
    return m(k);
  };
}
function Ii(t) {
  return new Ni(t);
}
var be, se;
class Ni {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Ct(this, be);
    /** @type {Record<string, any>} */
    Ct(this, se);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, s) => {
      var u = /* @__PURE__ */ Yt(s);
      return r.set(l, u), u;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, s) {
          return m(r.get(s) ?? n(s, Reflect.get(l, s)));
        },
        has(l, s) {
          return m(r.get(s) ?? n(s, Reflect.get(l, s))), Reflect.has(l, s);
        },
        set(l, s, u) {
          return F(r.get(s) ?? n(s, u), u), Reflect.set(l, s, u);
        }
      }
    );
    St(this, se, (e.hydrate ? hi : Qr)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && Gr(), St(this, be, i.$$events);
    for (const l of Object.keys(te(this, se)))
      l === "$set" || l === "$destroy" || l === "$on" || dt(this, l, {
        get() {
          return te(this, se)[l];
        },
        /** @param {any} value */
        set(s) {
          te(this, se)[l] = s;
        },
        enumerable: !0
      });
    te(this, se).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, te(this, se).$destroy = () => {
      pi(te(this, se));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    te(this, se).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    te(this, be)[e] = te(this, be)[e] || [];
    const n = (...i) => r.call(this, ...i);
    return te(this, be)[e].push(n), () => {
      te(this, be)[e] = te(this, be)[e].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    te(this, se).$destroy();
  }
}
be = new WeakMap(), se = new WeakMap();
let on;
typeof HTMLElement == "function" && (on = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    de(this, "$$ctor");
    /** Slots */
    de(this, "$$s");
    /** @type {any} The Svelte component instance */
    de(this, "$$c");
    /** Whether or not the custom element is connected */
    de(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    de(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    de(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    de(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    de(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    de(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    de(this, "$$me");
    this.$$ctor = e, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, r, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const i = this.$$c.$on(e, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(e, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, r, n) {
    if (super.removeEventListener(e, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return (a) => {
          const l = document.createElement("slot");
          i !== "default" && (l.name = i), $(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Ai(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = ct(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ii({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Nr(() => {
        Kt(() => {
          var i;
          this.$$r = !0;
          for (const a of vt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = ct(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, l);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const l = this.$$c.$on(i, a);
          this.$$l_u.set(a, l);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, r, n) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ct(e, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return vt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function ct(t, e, r, n) {
  var a;
  const i = (a = r[t]) == null ? void 0 : a.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !r[t])
    return e;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function Ai(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function U(t, e, r, n, i, a) {
  let l = class extends on {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return vt(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return vt(e).forEach((s) => {
    dt(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(u) {
        var f;
        u = ct(s, u, e), this.$$d[s] = u;
        var o = this.$$c;
        if (o) {
          var c = (f = Te(o, s)) == null ? void 0 : f.get;
          c ? o[s] = u : o.$set({ [s]: u });
        }
      }
    });
  }), n.forEach((s) => {
    dt(l.prototype, s, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[s];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
var Ti = /* @__PURE__ */ S('<button type="button"><!></button>');
const zi = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function ji(t, e) {
  B(t, zi);
  const r = C(e, "type", 3, "primary"), n = C(e, "size", 3, "medium");
  C(e, "label", 3, "Button");
  const i = C(e, "onClick", 3, void 0);
  var a = Ti();
  a.__click = function(...s) {
    var u;
    (u = i()) == null || u.apply(this, s);
  };
  var l = w(a);
  Xt(l, e, "default", {}), _(a), N(() => Ye(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), $(t, a);
}
ee(["click"]);
customElements.define("ing-button", U(ji, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Oi = /* @__PURE__ */ S('<button type="button"><!></button>');
const Ri = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function Hi(t, e) {
  B(t, Ri), C(e, "type", 3, "primary");
  const r = C(e, "size", 3, "medium");
  C(e, "label", 3, "Button");
  const n = C(e, "onClick", 3, void 0);
  var i = Oi();
  i.__click = function(...l) {
    var s;
    (s = n()) == null || s.apply(this, l);
  };
  var a = w(i);
  Xt(a, e, "default", {}), _(i), N(() => Ye(i, `${"button button--" + r()} svelte-1c7d33o`)), $(t, i);
}
ee(["click"]);
customElements.define("ing-button-gray", U(Hi, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Li = /* @__PURE__ */ S('<div class="input_label svelte-1hyy719"> </div>'), Mi = /* @__PURE__ */ S('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), Di = (t, e) => {
  e(t);
}, Fi = /* @__PURE__ */ S('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const Pi = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function Qt(t, e) {
  X(e, !0), B(t, Pi);
  let r = C(e, "inputId", 3, ""), n = C(e, "label", 3, ""), i = C(e, "icon", 3, ""), a = C(e, "type", 3, "text"), l = C(e, "placeholder", 3, ""), s = C(e, "input", 15, ""), u = C(e, "inputStyle", 3, "");
  const o = (h) => {
    if (h && h.target && e.$$host) {
      let b = "";
      h.target.value && (b = h.target.value), e.$$host.innerText = b, document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: e.$$host.id, input: b }
      })), e.$$host.dispatchEvent(new CustomEvent("inputchanged", { detail: { input: b } }));
    }
  };
  var c = Fi(), f = w(c);
  O(f, n, (h) => {
    var b = Li(), x = w(b, !0);
    _(b), N(() => L(x, n())), $(h, b);
  });
  var v = I(f, 2), p = w(v);
  O(p, i, (h) => {
    var b = Mi(), x = w(b);
    _(b), N(() => A(x, "src", i())), $(h, b);
  });
  var d = I(p, 2);
  Et(d), d.__input = [Di, o], _(v), _(c), N(() => {
    A(c, "style", u()), A(d, "id", r()), A(d, "type", a()), A(d, "placeholder", l());
  }), $t(d, s), $(t, c), Q();
}
ee(["input"]);
customElements.define("ing-input", U(
  Qt,
  {
    input: { reflect: !0 },
    inputId: {},
    label: {},
    icon: {},
    type: {},
    placeholder: {},
    inputStyle: {}
  },
  [],
  [],
  !0
));
var Bi = /* @__PURE__ */ S('<a class="svelte-hcumdc"> </a>'), Ui = (t, e, r) => e(m(r).title), Vi = /* @__PURE__ */ S('<button class="menu_item_button svelte-hcumdc"> </button>'), Gi = /* @__PURE__ */ S('<div class="menu_item svelte-hcumdc"><!></div>'), Yi = /* @__PURE__ */ S('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const Ji = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function er(t, e) {
  X(e, !0), B(t, Ji);
  let r = C(e, "position", 19, () => ({})), n = C(e, "menuItems", 19, () => []);
  function i(s) {
    console.log("Sending event: " + s), document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var a = Yi(), l = I(w(a), 2);
  Y(l, 21, n, G, (s, u) => {
    var o = Gi(), c = w(o);
    O(
      c,
      () => m(u).url,
      (f) => {
        var v = Bi(), p = w(v, !0);
        _(v), N(() => {
          A(v, "href", m(u).url), L(p, m(u).title);
        }), $(f, v);
      },
      (f) => {
        var v = Vi();
        v.__click = [Ui, i, u];
        var p = w(v, !0);
        _(v), N(() => L(p, m(u).title)), $(f, v);
      }
    ), _(o), $(s, o);
  }), _(l), _(a), N(() => A(a, "style", `top: ${r().top}; left: ${r().left};`)), $(t, a), Q();
}
ee(["click"]);
customElements.define("mv-elegant-dropdown", U(er, { position: {}, menuItems: {} }, [], [], !0));
var Ki = /* @__PURE__ */ S('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), Wi = (t, e) => {
  F(e, !m(e));
}, Zi = /* @__PURE__ */ S('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), Xi = /* @__PURE__ */ S("<span></span>"), Qi = /* @__PURE__ */ S('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const ea = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function un(t, e) {
  X(e, !0), B(t, ea), C(e, "title", 3, "Apint.org");
  const r = C(e, "searchicon", 3, ""), n = C(e, "notificationicon", 3, ""), i = C(e, "supportuser", 3, !1), a = C(e, "username", 3, ""), l = C(e, "userpic", 3, "");
  let s = "", u = we(!1), o = we(void 0);
  function c() {
    let x = {}, E;
    if (m(o) && (E = m(o)), E) {
      var g = E.getBoundingClientRect();
      x.top = (g.top + g.height + 12).toString() + "px", x.left = (g.left - 115).toString() + "px", console.log(x);
    }
    return x;
  }
  var f = Qi(), v = w(f), p = w(v);
  Qt(p, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var d = I(p, 2);
  d.textContent = s, _(v);
  var h = I(v, 2), b = w(h);
  O(
    b,
    i,
    (x) => {
      var E = Zi(), g = ue(E), k = w(g);
      O(k, n, (J) => {
        var P = Ki(), K = ue(P);
        ui(2), N(() => A(K, "src", n())), $(J, P);
      });
      var y = I(k, 2);
      y.__click = [Wi, u];
      var q = w(y), R = I(q, 2), z = w(R, !0);
      _(R), _(y), sn(y, (J) => F(o, J), () => m(o)), _(g);
      var Z = I(g, 2);
      O(Z, () => m(u), (J) => {
        var P = /* @__PURE__ */ Ke(c);
        er(J, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return m(P);
          }
        });
      }), N(() => {
        A(q, "src", l()), L(z, a());
      }), $(x, E);
    },
    (x) => {
      var E = He(), g = ue(E);
      O(
        g,
        i,
        (k) => {
          var y = Xi();
          $(k, y);
        },
        null,
        !0
      ), $(x, E);
    }
  ), _(h), _(f), $(t, f), Q();
}
ee(["click"]);
customElements.define("ing-headerlite", U(
  un,
  {
    title: {},
    searchicon: {},
    notificationicon: {},
    supportuser: {},
    username: {},
    userpic: {}
  },
  [],
  [],
  !0
));
function ta(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ra(t, { delay: e = 0, duration: r = 400, easing: n = ta, axis: i = "y" } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, s = i === "y" ? "height" : "width", u = parseFloat(a[s]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], c = o.map(
    (x) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${x[0].toUpperCase()}${x.slice(1)}`
    )
  ), f = parseFloat(a[`padding${c[0]}`]), v = parseFloat(a[`padding${c[1]}`]), p = parseFloat(a[`margin${c[0]}`]), d = parseFloat(a[`margin${c[1]}`]), h = parseFloat(
    a[`border${c[0]}Width`]
  ), b = parseFloat(
    a[`border${c[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (x) => `overflow: hidden;opacity: ${Math.min(x * 20, 1) * l};${s}: ${x * u}px;padding-${o[0]}: ${x * f}px;padding-${o[1]}: ${x * v}px;margin-${o[0]}: ${x * p}px;margin-${o[1]}: ${x * d}px;border-${o[0]}-width: ${x * h}px;border-${o[1]}-width: ${x * b}px;`
  };
}
function na(t) {
  return t;
}
var ia = (t, e, r) => e(m(r).title), aa = /* @__PURE__ */ S('<img alt="option" width="18px">'), la = /* @__PURE__ */ S('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), sa = /* @__PURE__ */ S('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), oa = (t, e, r) => e(m(r).title), ua = /* @__PURE__ */ S('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), ca = /* @__PURE__ */ S('<div class="menu_item_frame svelte-v1mgvt"></div>'), va = /* @__PURE__ */ S('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), da = /* @__PURE__ */ S('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const fa = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function ha(t, e) {
  X(e, !0), B(t, fa), C(e, "title", 3, "Mapp"), C(e, "icon", 3, "");
  let r = C(e, "searchicon", 3, ""), n = C(e, "notificationicon", 3, ""), i = C(e, "supportuser", 3, !0), a = C(e, "username", 3, ""), l = C(e, "userpic", 3, ""), s = C(e, "activeitem", 3, ""), u = C(e, "menuconfig", 7, void 0);
  typeof u() == "string" && u(JSON.parse(u()));
  let o = D({});
  if (s()) {
    o[s()] = !0;
    for (let E of u().items)
      if (E.subitems) {
        for (let g of E.subitems)
          if (g.title == s()) {
            o[E.title] = !0;
            break;
          }
      }
  }
  let c = (E) => {
    let g = u().items.find((k) => k.title === E);
    o[E] ? g && (!g.url || g.url === "#") && (o[E] = !o[E]) : o[E] = !0;
  };
  var f = da(), v = w(f), p = w(v);
  Y(p, 21, () => u().items, G, (E, g) => {
    var k = va(), y = ue(k);
    y.__click = [ia, c, g];
    var q = w(y), R = w(q), z = w(R);
    O(
      z,
      () => m(g).icon,
      (ve) => {
        var V = aa();
        N(() => A(V, "src", m(g).icon)), $(ve, V);
      },
      (ve) => {
        var V = la();
        $(ve, V);
      }
    ), _(R);
    var Z = I(R, 2), J = w(Z, !0);
    _(Z);
    var P = I(Z, 2);
    O(P, () => m(g).subitems, (ve) => {
      var V = sa();
      N(() => Ye(V, `${(o[m(g).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), $(ve, V);
    }), _(q), _(y);
    var K = I(y, 2);
    O(K, () => o[m(g).title] && m(g).subitems, (ve) => {
      var V = ca();
      Y(V, 21, () => m(g).subitems, G, ($e, Ne) => {
        var me = ua();
        me.__click = [oa, c, Ne];
        var tr = w(me), rr = I(w(tr), 2), xn = w(rr, !0);
        _(rr), _(tr), _(me), N(() => {
          A(me, "href", m(Ne).url), Ye(me, `${(m(Ne).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(xn, m(Ne).title);
        }), $($e, me);
      }), _(V), Ei(3, V, () => ra, () => ({ duration: 300, easing: na })), $(ve, V);
    }), N(() => {
      A(y, "href", m(g).url), Ye(y, `${(m(g).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), L(J, m(g).title);
    }), $(E, k);
  }), _(p), _(v);
  var d = I(v, 2), h = w(d);
  un(h, {
    get searchicon() {
      return r();
    },
    get notificationicon() {
      return n();
    },
    get supportuser() {
      return i();
    },
    get username() {
      return a();
    },
    get userpic() {
      return l();
    }
  });
  var b = I(h, 2), x = w(b);
  Xt(x, e, "default", {}), _(b), _(d), _(f), $(t, f), Q();
}
ee(["click"]);
customElements.define("ing-buffet", U(
  ha,
  {
    title: {},
    icon: {},
    searchicon: {},
    notificationicon: {},
    supportuser: {},
    username: {},
    userpic: {},
    activeitem: {},
    menuconfig: {}
  },
  ["default"],
  [],
  !0
));
var pa = /* @__PURE__ */ S('<div class="input_label svelte-18z4bwo"> </div>'), _a = /* @__PURE__ */ S('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), ga = (t, e) => {
  e(t);
}, ma = /* @__PURE__ */ S("<option> </option>"), ba = /* @__PURE__ */ S('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo"></select></div></div>');
const xa = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function cn(t, e) {
  X(e, !0), B(t, xa);
  let r = C(e, "label", 3, ""), n = C(e, "icon", 3, ""), i = C(e, "placeholder", 3, ""), a = C(e, "items", 3, ""), l = C(e, "input", 15, ""), s = C(e, "selectStyle", 3, ""), u = a().split(",");
  const o = (h) => {
    if (h && h.target && e.$$host) {
      let b = "";
      h.target.value && (b = h.target.value), e.$$host.innerText = b, document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: e.$$host.id, input: b }
      })), e.$$host.dispatchEvent(new CustomEvent("inputchanged", { detail: { input: b } }));
    }
  };
  var c = ba(), f = w(c);
  O(f, r, (h) => {
    var b = pa(), x = w(b, !0);
    _(b), N(() => L(x, r())), $(h, b);
  });
  var v = I(f, 2), p = w(v);
  O(p, n, (h) => {
    var b = _a(), x = w(b);
    _(b), N(() => A(x, "src", n())), $(h, b);
  });
  var d = I(p, 2);
  d.__input = [ga, o], Y(d, 21, () => u, G, (h, b) => {
    var x = ma(), E = {}, g = w(x, !0);
    _(x), N(() => {
      E !== (E = m(b)) && (x.value = (x.__value = m(b)) == null ? "" : m(b)), L(g, m(b));
    }), $(h, x);
  }), _(d), _(v), _(c), N(() => {
    A(c, "style", s()), A(d, "placeholder", i());
  }), ln(d, l), $(t, c), Q();
}
ee(["input"]);
customElements.define("ing-select", U(
  cn,
  {
    label: {},
    icon: {},
    placeholder: {},
    items: {},
    input: {},
    selectStyle: {}
  },
  [],
  [],
  !0
));
var wa = /* @__PURE__ */ S('<div style="width: 100%;"><h3> </h3></div>'), ya = /* @__PURE__ */ S('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const ka = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function Ea(t, e) {
  X(e, !0), B(t, ka);
  let r = C(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let u = {};
    for (const [o, c] of Object.entries(r().properties))
      u[o] = c.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: u } }));
  }
  var i = ya(), a = w(i);
  O(a, r, (u) => {
    var o = He(), c = ue(o);
    Y(c, 17, () => Object.entries(r().properties), G, (f, v) => {
      let p = () => m(v)[0], d = () => m(v)[1];
      var h = He(), b = ue(h);
      O(
        b,
        () => d().format == "header",
        (x) => {
          var E = wa(), g = w(E), k = w(g, !0);
          _(g), _(E), N(() => L(k, d().value)), $(x, E);
        },
        (x) => {
          var E = He(), g = ue(E);
          O(
            g,
            () => d().format == "select",
            (k) => {
              var y = /* @__PURE__ */ Ke(() => "width: " + d().length + ";");
              cn(k, {
                get input() {
                  return d().value;
                },
                set input(q) {
                  d().value = q;
                },
                get selectStyle() {
                  return m(y);
                },
                get label() {
                  return d().description;
                },
                get items() {
                  return d().value;
                }
              });
            },
            (k) => {
              var y = He(), q = ue(y);
              O(
                q,
                () => d().type == "string",
                (R) => {
                  var z = /* @__PURE__ */ Ke(() => "width: " + d().length + ";");
                  Qt(R, {
                    get inputId() {
                      return p();
                    },
                    get inputStyle() {
                      return m(z);
                    },
                    get label() {
                      return d().description;
                    },
                    get type() {
                      return d().format;
                    },
                    get placeholder() {
                      return d().placeholder;
                    },
                    get input() {
                      return d().value;
                    },
                    set input(Z) {
                      d().value = Z;
                    }
                  });
                },
                null,
                !0
              ), $(k, y);
            },
            !0
          ), $(x, E);
        }
      ), $(f, h);
    }), $(u, o);
  });
  var l = I(a, 2), s = w(l);
  qt(s, "size", "small"), qt(s, "id", "submit-button"), qt(s, "type", "secondary"), s.__click = n, _(l), _(i), $(t, i), Q();
}
ee(["click"]);
customElements.define("ing-form", U(Ea, { schema: {} }, [], [], !0));
function $a(t, e, r, n, i, a) {
  if (m(e)) {
    let l = [];
    for (let s of r()) {
      let u = !1;
      for (let o of n())
        if ((i().length === 0 || i().includes(o)) && s[o].toString().toLowerCase().includes(m(e).toLowerCase())) {
          u = !0;
          break;
        }
      u && l.push(s);
    }
    F(a, D(l));
  } else
    F(a, D(r()));
}
var Ca = /* @__PURE__ */ S('<th class="svelte-15ql2st"> </th>'), Sa = /* @__PURE__ */ S('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), qa = /* @__PURE__ */ S('<tr class="svelte-15ql2st"></tr>'), Ia = /* @__PURE__ */ S('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Na = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function Aa(t, e) {
  X(e, !0), B(t, Na);
  let r = C(e, "headers", 23, () => []), n = C(e, "headerssearchable", 23, () => []), i = C(e, "rows", 23, () => []), a = C(e, "linkprefix", 3, ""), l = C(e, "linkcolumnname", 3, ""), s = C(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let u = we(D(i())), o = we("");
  const c = (g) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: g } })), s() && s()({ detail: { rowIndex: g } });
  };
  var f = Ia(), v = w(f), p = I(w(v), 2), d = I(w(p));
  Et(d), d.__keyup = [
    $a,
    o,
    i,
    r,
    n,
    u
  ], _(p), _(v);
  var h = I(v, 2), b = w(h), x = w(b);
  Y(x, 21, r, G, (g, k) => {
    var y = Ca(), q = w(y, !0);
    _(y), N(() => L(q, m(k))), $(g, y);
  }), _(x), _(b);
  var E = I(b);
  Y(E, 21, () => m(u), G, (g, k, y) => {
    var q = qa();
    q.__click = () => {
      c(y);
    }, Y(q, 21, () => Object.entries(m(k)), G, (z, Z) => {
      var J = Sa(), P = w(J), K = w(P, !0);
      _(P), _(J), N(() => {
        A(P, "href", a() + m(k)[l()]), L(K, m(Z)[1]);
      }), $(z, J);
    }), _(q), $(g, q);
  }), _(E), _(h), _(f), $t(d, () => m(o), (g) => F(o, g)), $(t, f), Q();
}
ee(["keyup", "click"]);
customElements.define("ing-table", U(
  Aa,
  {
    headers: {},
    headerssearchable: {},
    rows: {},
    linkprefix: {},
    linkcolumnname: {},
    update: {}
  },
  [],
  [],
  !0
));
var Ta = /* @__PURE__ */ S('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), za = /* @__PURE__ */ S('<span class="title_text svelte-3ovj26"> </span>'), ja = /* @__PURE__ */ S('<a href="https://google.com" target="_blank" class="title svelte-3ovj26"><!> <!></a>'), Oa = (t, e, r) => e(t, m(r).title), Ra = /* @__PURE__ */ S('<img class="menu_icon svelte-3ovj26">'), Ha = (t, e, r) => e(t, m(r)), La = /* @__PURE__ */ S('<span class="menu_text svelte-3ovj26"> </span>'), Ma = /* @__PURE__ */ S('<button class="menu_button svelte-3ovj26"><!></button> <!>', 1), Da = /* @__PURE__ */ S('<div class="header svelte-3ovj26"><!> <div class="right_menus svelte-3ovj26"></div></div>');
const Fa = {
  hash: "svelte-3ovj26",
  code: ".header.svelte-3ovj26 {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:2;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-3ovj26 {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-3ovj26:link {text-decoration:none;}.title.svelte-3ovj26:visited {text-decoration:none;color:#222;}.title.svelte-3ovj26:hover {text-decoration:none;color:darkgray}.title.svelte-3ovj26:active {text-decoration:none;}.title_text.svelte-3ovj26 {display:flex;align-items:center;}.right_menus.svelte-3ovj26 {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-3ovj26 {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-3ovj26 {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-3ovj26:hover {cursor:pointer;}.menu_text.svelte-3ovj26 {font-weight:700;}.round.svelte-3ovj26 {height:40px;width:40px;border-radius:50%;}"
};
function vn(t, e) {
  X(e, !0), B(t, Fa);
  let r = C(e, "title", 3, ""), n = C(e, "titleImageUrl", 3, ""), i = C(e, "headerMenus", 23, () => []);
  typeof i() == "string" && i(JSON.parse(i()));
  let a = D({}), l = D({});
  function s(d, h) {
    d && d.stopPropagation();
    for (const b of Object.keys(a))
      b != h && (a[b] = !1);
    a[h] ? a[h] = !1 : a[h] = !0;
  }
  function u(d, h) {
    d.stopPropagation(), h.url ? window.location.href = h.url : e.$$host && document.dispatchEvent(new CustomEvent(h.title, { detail: {} }));
  }
  function o(d) {
    let h = {}, b;
    if (l[d] && (b = l[d]), b) {
      var x = b.getBoundingClientRect();
      h.top = (x.top + x.height + 12).toString() + "px", h.left = (x.left - 150).toString() + "px", console.log(h);
    } else
      console.log("Could not find element with id: " + d);
    return h;
  }
  function c(d) {
    return d.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const h of Object.keys(a))
      a[h] = !1;
  };
  var f = Da(), v = w(f);
  O(v, () => r() || n(), (d) => {
    var h = ja(), b = w(h);
    O(b, n, (E) => {
      var g = Ta();
      N(() => A(g, "src", n())), $(E, g);
    });
    var x = I(b, 2);
    O(x, r, (E) => {
      var g = za(), k = w(g, !0);
      _(g), N(() => L(k, r())), $(E, g);
    }), _(h), $(d, h);
  });
  var p = I(v, 2);
  Y(p, 21, i, G, (d, h) => {
    var b = Ma(), x = ue(b);
    N(() => A(x, "id", c(m(h).title + "_button"))), x.__click = [Oa, s, h];
    var E = w(x);
    O(
      E,
      () => m(h).imageUrl,
      (k) => {
        var y = Ra();
        sn(y, (q, R) => l[c(R.title + "_button")] = q, (q) => l == null ? void 0 : l[c(q.title + "_button")], () => [m(h)]), N(() => {
          A(y, "alt", m(h).title), A(y, "src", m(h).imageUrl), Pe(y, "round", m(h).imageShape === "round");
        }), $(k, y);
      },
      (k) => {
        var y = La();
        y.__click = [Ha, u, h];
        var q = w(y, !0);
        _(y), N(() => L(q, m(h).title)), $(k, y);
      }
    ), _(x);
    var g = I(x, 2);
    O(g, () => a[m(h).title], (k) => {
      var y = /* @__PURE__ */ Ke(() => o(c(m(h).title + "_button")));
      er(k, {
        get menuItems() {
          return m(h).items;
        },
        get position() {
          return m(y);
        }
      });
    }), $(d, b);
  }), _(p), _(f), $(t, f), Q();
}
ee(["click"]);
customElements.define("mv-elegant-header", U(
  vn,
  {
    title: {},
    titleImageUrl: {},
    headerMenus: {}
  },
  [],
  [],
  !0
));
function Pa(t, e, r, n) {
  e.searchloadresults && F(r, D(e.searchloadresults(n())));
}
function Ba(t, e, r, n) {
  t.key === "Escape" ? F(e, D([])) : t.key === "Enter" && (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n(""));
}
var Ua = /* @__PURE__ */ S('<div class="result svelte-ihhy65"> </div>'), Va = /* @__PURE__ */ S('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), Ga = /* @__PURE__ */ S('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const Ya = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function dn(t, e) {
  X(e, !0), B(t, Ya);
  let r = C(e, "searchtext", 15), n = we(D([]));
  document.addEventListener("SearchResults", (o) => {
    o.detail.results && F(n, D(o.detail.results));
  });
  var i = Ga(), a = ue(i), l = w(a), s = I(w(l), 2);
  Et(s), s.__input = [Pa, e, n, r], s.__keyup = [Ba, n, e, r], _(l), _(a);
  var u = I(a, 2);
  O(u, () => m(n).length > 0, (o) => {
    var c = Va(), f = w(c), v = w(f);
    Y(v, 21, () => m(n), G, (p, d) => {
      var h = Ua(), b = w(h, !0);
      _(h), N(() => L(b, m(d))), $(p, h);
    }), _(v), _(f), _(c), $(o, c);
  }), $t(s, r), $(t, i), Q();
}
ee(["input", "keyup"]);
customElements.define("mv-elegant-search", U(
  dn,
  {
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
var Ja = /* @__PURE__ */ S('<img class="hero_image svelte-pm9u4t" alt="logo">'), Ka = /* @__PURE__ */ S('<div class="hero svelte-pm9u4t"><div class="hero_logo svelte-pm9u4t"><!> <div class="hero_logo_text svelte-pm9u4t"> </div></div> <div class="hero_search svelte-pm9u4t"><!></div></div>');
const Wa = {
  hash: "svelte-pm9u4t",
  code: '.hero.svelte-pm9u4t {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-pm9u4t {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-pm9u4t {width:50px;height:50px;}.hero_logo_text.svelte-pm9u4t {padding-left:12px;}.hero_search.svelte-pm9u4t {width:400px;}'
};
function fn(t, e) {
  B(t, Wa);
  let r = C(e, "height", 3, "80px"), n = C(e, "title", 3, ""), i = C(e, "titleImageUrl", 3, ""), a = C(e, "searchtext", 15);
  var l = Ka(), s = w(l), u = w(s);
  O(u, i, (p) => {
    var d = Ja();
    N(() => {
      A(d, "height", `${r()}`), A(d, "src", i());
    }), $(p, d);
  });
  var o = I(u, 2), c = w(o, !0);
  _(o), _(s);
  var f = I(s, 2), v = w(f);
  dn(v, {
    get searchtext() {
      return a();
    },
    set searchtext(p) {
      a(p);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  }), _(f), _(l), N(() => {
    A(s, "style", `height: ${r()};`), L(c, n());
  }), $(t, l);
}
customElements.define("mv-elegant-hero-search", U(
  fn,
  {
    text: { reflect: !0 },
    height: {},
    title: {},
    titleImageUrl: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
function Za(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var Xa = /* @__PURE__ */ S('<option class="svelte-1im86kb"> </option>'), Qa = /* @__PURE__ */ S('<div class="select svelte-1im86kb"><select name="source" id="source" class="svelte-1im86kb"></select></div>');
const el = {
  hash: "svelte-1im86kb",
  code: `.select.svelte-1im86kb,
.select.svelte-1im86kb :where(.svelte-1im86kb) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-1im86kb {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-1im86kb select:where(.svelte-1im86kb) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-1im86kb select:where(.svelte-1im86kb):active, .select.svelte-1im86kb select:where(.svelte-1im86kb):focus {outline:none;box-shadow:none;}.select.svelte-1im86kb:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function hn(t, e) {
  X(e, !0), B(t, el);
  let r = C(e, "input", 15), n = C(e, "options", 19, () => []);
  var i = Qa(), a = w(i);
  a.__input = [Za, r, e], Y(a, 21, n, G, (l, s) => {
    var u = Xa(), o = {}, c = w(u, !0);
    _(u), N(() => {
      o !== (o = m(s)) && (u.value = (u.__value = m(s)) == null ? "" : m(s)), L(c, m(s));
    }), $(l, u);
  }), _(a), _(i), ln(a, r), $(t, i), Q();
}
ee(["input"]);
customElements.define("mv-elegant-select", U(hn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function tl(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var rl = (t, e, r) => e(m(r).name), nl = /* @__PURE__ */ S('<div class="icon svelte-lvweti">✓</div>'), il = /* @__PURE__ */ S('<div class="icon svelte-lvweti"> </div>'), al = /* @__PURE__ */ S('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), ll = /* @__PURE__ */ S('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), sl = /* @__PURE__ */ S('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), ol = /* @__PURE__ */ S('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const ul = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function pn(t, e) {
  X(e, !0), B(t, ul);
  let r = C(e, "view", 15, "card"), n = D({});
  function i(v) {
    n[v] ? n[v] = !1 : n[v] = !0, e.typeselect && e.typeselect(n);
  }
  function a(v) {
    e.sortselect && e.sortselect(v);
  }
  var l = ol(), s = w(l);
  Y(s, 21, () => e.types, G, (v, p) => {
    var d = al();
    d.__click = [rl, i, p];
    var h = w(d);
    O(
      h,
      () => n[m(p).name] === !0,
      (E) => {
        var g = nl();
        $(E, g);
      },
      (E) => {
        var g = il(), k = w(g, !0);
        _(g), N(() => L(k, m(p).icon)), $(E, g);
      }
    );
    var b = I(h, 2), x = w(b, !0);
    _(b), _(d), N(() => {
      Pe(d, "filterbar_option_selected", n[m(p).name]), L(x, m(p).name);
    }), $(v, d);
  }), _(s);
  var u = I(s, 2), o = w(u);
  o.__click = [tl, r, e];
  var c = w(o);
  O(
    c,
    () => r() === "CARD",
    (v) => {
      var p = ll();
      $(v, p);
    },
    (v) => {
      var p = sl();
      $(v, p);
    }
  ), _(o);
  var f = I(o, 2);
  hn(f, {
    input: "Latest",
    get options() {
      return e.sorts;
    },
    onInput: a
  }), _(u), _(l), $(t, l), Q();
}
ee(["click"]);
customElements.define("mv-elegant-filtertypes", U(
  pn,
  {
    types: {},
    sorts: {},
    typeselect: {},
    sortselect: {},
    view: {},
    viewselect: {}
  },
  [],
  [],
  !0
));
var cl = /* @__PURE__ */ S('<img alt="type icon" class="svelte-1feueb0">'), vl = /* @__PURE__ */ S('<img alt="type icon" class="svelte-1feueb0">'), dl = /* @__PURE__ */ S('<div class="card_frame svelte-1feueb0"><div class="top_left_label svelte-1feueb0"><span class="svelte-1feueb0"> </span> <div class="top_right_icons svelte-1feueb0"></div></div> <img class="header_image svelte-1feueb0" alt="header preview"> <a class="title svelte-1feueb0"> </a> <a class="author svelte-1feueb0" target="_blank"><img alt="profile" class="svelte-1feueb0"> </a> <div class="footer svelte-1feueb0"><div class="description svelte-1feueb0"> </div> <div class="link svelte-1feueb0"><a target="_blank" class="svelte-1feueb0">Open asset ↗</a> <div class="type_box svelte-1feueb0"></div></div></div></div>');
const fl = {
  hash: "svelte-1feueb0",
  code: ".card_frame.svelte-1feueb0 {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1feueb0 {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1feueb0 span:where(.svelte-1feueb0) {white-space:nowrap;}.top_right_icons.svelte-1feueb0 {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1feueb0 {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1feueb0 {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1feueb0:hover {color:#7c7c7c;}.author.svelte-1feueb0 {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1feueb0 img:where(.svelte-1feueb0) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1feueb0:hover {color:#757a79;}.footer.svelte-1feueb0 {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1feueb0 {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1feueb0 {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1feueb0 a:where(.svelte-1feueb0) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1feueb0 a:where(.svelte-1feueb0):hover {color:#82aae9;}.type_box.svelte-1feueb0 {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1feueb0 img:where(.svelte-1feueb0) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function _n(t, e) {
  X(e, !0), B(t, fl);
  let r = C(e, "item", 19, () => ({
    dateTime: "",
    categories: [],
    imageUrl: "",
    title: "",
    authorImageUrl: "",
    authorName: "",
    authorUrl: "",
    description: "",
    link: "",
    types: []
  }));
  var n = dl(), i = w(n), a = w(i), l = w(a, !0);
  _(a);
  var s = I(a, 2);
  Y(s, 21, () => r().categories, G, (k, y) => {
    var q = cl();
    N(() => {
      A(q, "src", m(y).url), A(q, "title", m(y).title);
    }), $(k, q);
  }), _(s), _(i);
  var u = I(i, 2), o = I(u, 2), c = w(o, !0);
  _(o);
  var f = I(o, 2), v = w(f), p = I(v);
  _(f);
  var d = I(f, 2), h = w(d), b = w(h, !0);
  _(h);
  var x = I(h, 2), E = w(x), g = I(E, 2);
  Y(g, 21, () => r().types, G, (k, y) => {
    var q = vl();
    N(() => {
      A(q, "src", m(y).url), A(q, "title", m(y).title);
    }), $(k, q);
  }), _(g), _(x), _(d), _(n), N(() => {
    L(l, r().dateTime), A(u, "src", r().imageUrl), A(o, "href", r().link), L(c, r().description), A(f, "href", r().authorUrl), A(v, "src", r().authorImageUrl), L(p, ` ${r().authorName ?? ""}`), L(b, r().description), A(E, "href", r().link);
  }), $(t, n), Q();
}
customElements.define("mv-elegant-card", U(_n, { item: {} }, [], [], !0));
var hl = /* @__PURE__ */ S('<div class="menu_frame svelte-1dvvvu9"></div>');
const pl = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function gn(t, e) {
  B(t, pl);
  let r = C(e, "items", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  var n = hl();
  Y(n, 21, r, G, (i, a) => {
    _n(i, {
      get item() {
        return m(a);
      }
    });
  }), _(n), $(t, n);
}
customElements.define("mv-elegant-cardpage", U(gn, { items: {} }, [], [], !0));
var _l = (t, e, r) => e(m(r).name), gl = /* @__PURE__ */ S('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), ml = /* @__PURE__ */ S('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const bl = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function mn(t, e) {
  X(e, !0), B(t, bl);
  let r = D({});
  function n(a) {
    r[a] ? r[a] = !1 : r[a] = !0, e.categoryselect && e.categoryselect(r);
  }
  var i = ml();
  Y(i, 21, () => e.categories, G, (a, l) => {
    var s = gl(), u = w(s);
    u.__click = [_l, n, l];
    var o = w(u, !0);
    _(u);
    var c = I(u, 2), f = w(c, !0);
    _(c), _(s), N(() => {
      Pe(u, "letter_selected", r[m(l).name]), L(o, m(l).letter), L(f, m(l).name);
    }), $(a, s);
  }), _(i), $(t, i), Q();
}
ee(["click"]);
customElements.define("mv-elegant-filtercats", U(mn, { categories: {}, categoryselect: {} }, [], [], !0));
function xl(t, e, r, n, i) {
  if (m(e)) {
    let a = [];
    for (let l of r()) {
      let s = !1;
      for (let u of n())
        if (u.searchable && l[u.name] && l[u.name].toString().toLowerCase().includes(m(e).toLowerCase())) {
          s = !0;
          break;
        }
      s && a.push(l);
    }
    F(i, D(a));
  } else
    F(i, D(r()));
}
var wl = /* @__PURE__ */ S('<th class="svelte-1nbcvq9"> </th>'), yl = /* @__PURE__ */ S('<a class="table_row svelte-1nbcvq9"> </a>'), kl = /* @__PURE__ */ S('<span class="table_row svelte-1nbcvq9"> </span>'), El = /* @__PURE__ */ S('<td class="svelte-1nbcvq9"><!></td>'), $l = /* @__PURE__ */ S("<td></td>"), Cl = /* @__PURE__ */ S('<tr class="svelte-1nbcvq9"></tr>'), Sl = /* @__PURE__ */ S('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const ql = {
  hash: "svelte-1nbcvq9",
  code: `.frame.svelte-1nbcvq9 {
    /* border-color: #eaedf2 !important; */
    /* box-shadow: 0 2px 18px rgba(0, 0, 0, 0.02) !important; */min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;
    /* border: 0.0625rem solid rgba(46, 54, 80, 0.125); */border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-1nbcvq9 {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-1nbcvq9 thead:where(.svelte-1nbcvq9) tr:where(.svelte-1nbcvq9) th:where(.svelte-1nbcvq9) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-1nbcvq9 {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;display:block;}table.svelte-1nbcvq9 tbody:where(.svelte-1nbcvq9) tr:where(.svelte-1nbcvq9):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}.table_row_selected.svelte-1nbcvq9 {background-color:#eff0f2;border-radius:0.5rem;}

  @container (width <= 768px) {.column_sm.svelte-1nbcvq9 {display:none;}
  }a.svelte-1nbcvq9:link {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:visited {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:hover {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:active {text-decoration:none;}td.svelte-1nbcvq9 a:where(.svelte-1nbcvq9) {display:block;}.filter.svelte-1nbcvq9 {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-1nbcvq9 {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-1nbcvq9 {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function bn(t, e) {
  X(e, !0), B(t, ql);
  let r = C(e, "tableHeaders", 23, () => []), n = C(e, "tableRows", 23, () => []), i = C(e, "linkprefix", 3, ""), a = C(e, "linkcolumnname", 3, ""), l = C(e, "tableRowClick", 3, void 0);
  if (typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), (!r() || r().length === 0) && n() && n().length > 0) {
    r([]);
    for (let g of Object.keys(n()[0]))
      r().push({
        name: g,
        displayName: g,
        searchable: !0,
        hideNarrow: !1
      });
  }
  let s = we(D(n())), u = we(""), o = we(-1);
  const c = (g) => {
    F(o, D(g)), l() && l()({ detail: { rowIndex: g } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: g } }));
  };
  var f = Sl(), v = w(f), p = I(w(v), 2), d = I(w(p));
  Et(d), d.__keyup = [
    xl,
    u,
    n,
    r,
    s
  ], _(p), _(v);
  var h = I(v, 2), b = w(h), x = w(b);
  Y(x, 21, r, G, (g, k) => {
    var y = wl(), q = w(y, !0);
    _(y), N(() => {
      Pe(y, "column_sm", m(k).hideNarrow), L(q, m(k).displayName);
    }), $(g, y);
  }), _(x), _(b);
  var E = I(b);
  Y(E, 21, () => m(s), G, (g, k, y) => {
    var q = Cl();
    q.__click = () => {
      c(y);
    }, Y(q, 21, r, G, (R, z) => {
      var Z = He(), J = ue(Z);
      O(
        J,
        () => m(k)[m(z).name],
        (P) => {
          var K = El(), ve = w(K);
          O(
            ve,
            a,
            (V) => {
              var le = yl(), $e = w(le, !0);
              _(le), N(() => {
                A(le, "href", i() + m(k)[a()]), L($e, m(k)[m(z).name]);
              }), $(V, le);
            },
            (V) => {
              var le = kl(), $e = w(le, !0);
              _(le), N(() => L($e, m(k)[m(z).name])), $(V, le);
            }
          ), _(K), N(() => Pe(K, "column_sm", m(z).hideNarrow)), $(P, K);
        },
        (P) => {
          var K = $l();
          $(P, K);
        }
      ), $(R, Z);
    }), _(q), N(() => Pe(q, "table_row_selected", y === m(o))), $(g, q);
  }), _(E), _(h), _(f), $t(d, () => m(u), (g) => F(u, g)), $(t, f), Q();
}
ee(["keyup", "click"]);
customElements.define("mv-elegant-table", U(
  bn,
  {
    tableHeaders: {},
    tableRows: {},
    linkprefix: {},
    linkcolumnname: {},
    tableRowClick: {}
  },
  [],
  [],
  !0
));
var Il = /* @__PURE__ */ S("<!> <!> <!> <!> <!>", 1);
const Nl = { hash: "svelte-32ttx", code: "" };
function Al(t, e) {
  B(t, Nl);
  let r = C(e, "title", 3, ""), n = C(e, "titleImageUrl", 3, ""), i = C(e, "headerMenus", 19, () => []), a = C(e, "searchtext", 7, ""), l = C(e, "categories", 19, () => []), s = C(e, "types", 19, () => []), u = C(e, "sorts", 19, () => []), o = we("CARD"), c = D([
    {
      name: "dateTime",
      displayName: "Date",
      searchable: !1
    },
    {
      name: "authorName",
      displayName: "Author",
      searchable: !0
    },
    {
      name: "title",
      displayName: "Title",
      searchable: !0
    }
  ]);
  var f = Il(), v = ue(f);
  vn(v, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
    get headerMenus() {
      return i();
    }
  });
  var p = I(v, 2);
  fn(p, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
    get searchtext() {
      return a();
    },
    set searchtext(x) {
      a(x);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  });
  var d = I(p, 2);
  mn(d, {
    get categories() {
      return l();
    },
    get categoryselect() {
      return e.categoryselect;
    }
  });
  var h = I(d, 2);
  pn(h, {
    get types() {
      return s();
    },
    get sorts() {
      return u();
    },
    get typeselect() {
      return e.typeselect;
    },
    get sortselect() {
      return e.sortselect;
    },
    get view() {
      return m(o);
    },
    set view(x) {
      F(o, D(x));
    }
  });
  var b = I(h, 2);
  O(
    b,
    () => m(o) === "CARD",
    (x) => {
      gn(x, {
        get items() {
          return e.items;
        }
      });
    },
    (x) => {
      bn(x, {
        get tableHeaders() {
          return c;
        },
        get tableRows() {
          return e.items;
        },
        linkprefix: "",
        linkcolumnname: "link",
        update: void 0
      });
    }
  ), $(t, f);
}
customElements.define("mv-elegant-buffet", U(
  Al,
  {
    title: {},
    titleImageUrl: {},
    headerMenus: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {},
    categories: {},
    categoryselect: {},
    types: {},
    typeselect: {},
    sorts: {},
    sortselect: {},
    items: {}
  },
  [],
  [],
  !0
));
var Tl = /* @__PURE__ */ S('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
const zl = {
  hash: "svelte-nag87b",
  code: `.lds-ring.svelte-nag87b {
  /* display: inline-block;
  position: relative; */display:inline-block;position:absolute;width:99%;text-align:center;height:80px;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b) {box-sizing:border-box;position:absolute;left:48%;top:42%;width:32px;height:32px;margin:8px;border:4px solid #3367d6;border-radius:50%;
  animation: svelte-nag87b-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#3367d6 transparent transparent transparent;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(1) {animation-delay:-0.45s;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(2) {animation-delay:-0.3s;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(3) {animation-delay:-0.15s;}
@keyframes svelte-nag87b-lds-ring {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}`
};
function jl(t, e) {
  B(t, zl);
  var r = Tl();
  $(t, r);
}
customElements.define("mv-elegant-spinner", U(jl, {}, [], [], !0));
export {
  Al as ElegantBuffet,
  vn as ElegantHeader,
  fn as ElegantHeroSearch,
  dn as ElegantSearch,
  jl as ElegantSpinner,
  bn as ElegantTable,
  ha as IngBuffet,
  ji as IngButton,
  Hi as IngButtonGray,
  Ea as IngForm,
  un as IngHeaderLite,
  Qt as IngInput,
  cn as IngSelect,
  Aa as IngTable
};
