var e = { store: null, root: "object" == typeof global && global && global.Math === Math && global.Array === Array ? global : self || window || global || function () { return this }(), mapping: {}, isMultiStore: !1, ignoreAttrs: !1 };
/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */function t(e) { var t = document.createElement("style"); return t.textContent = e, t } function n(e) { return e.replace(/-(\w)/g, (function (e, t) { return t.toUpperCase() })) } function r(e) { return e.children } function o(e, t) { for (var n in t) e[n] = t[n]; return e } function i(e, t) { null != e && ("function" == typeof e ? e(t) : e.current = t) } function s(e) { return "[object Array]" === Object.prototype.toString.call(e) } function a(e, t, n, r) { var o = []; return t.forEach((function (t, n) { if ("string" == typeof t) o[n] = p(e, t); else { var r = Object.keys(t)[0], i = t[r]; if ("string" == typeof i) o[n] = p(e, i); else { var s = i[0]; if ("string" == typeof s) { var a = p(e, s); o[n] = i[1] ? i[1](a) : a } else { var c = []; s.forEach((function (t) { c.push(p(e, t)) })), o[n] = i[1].apply(null, c) } } o[r] = o[n] } })), n && (n[r] = o), o } function c(e) { return "string" == typeof e && e ? e.replace(/]/g, "").replace(/\[/g, ".").split(".") : [] } function p(e, t) { for (var n = c(t), r = e, o = 0, i = n.length; o < i; o++)r = r[n[o]]; return r } !function () { if (void 0 !== window.Reflect && void 0 !== window.customElements && !window.customElements.hasOwnProperty("polyfillWrapFlushCallback")) { var e = HTMLElement; window.HTMLElement = function () { return Reflect.construct(e, [], this.constructor) }, HTMLElement.prototype = e.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e) } }(), "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout; var l = /\B([A-Z])/g; function u(e, t, n) { var r = {}; return e.forEach((function (e) { if ("string" == typeof e) r[e] = !0; else { var t = e[Object.keys(e)[0]]; "string" == typeof t ? r[t] = !0 : "string" == typeof t[0] ? r[t[0]] = !0 : t[0].forEach((function (e) { return r[e] = !0 })) } })), t && (t[n] = r), r } function f(e, t) { if (t) for (var n = 0, r = t.length; n < r; n++)if (t[n] === e) { t.splice(n, 1); break } } var h = []; function d(t, n) { var o, i, s, a, c = []; for (a = arguments.length; a-- > 2;)h.push(arguments[a]); for (n && null != n.children && (h.length || h.push(n.children), delete n.children); h.length;)if ((i = h.pop()) && void 0 !== i.pop) for (a = i.length; a--;)h.push(i[a]); else "boolean" == typeof i && (i = null), (s = "function" != typeof t) && (null == i ? i = "" : "number" == typeof i ? i = String(i) : "string" != typeof i && (s = !1)), s && o ? c[c.length - 1] += i : 0 === c.length ? c = [i] : c.push(i), o = s; if (t === r) return c; var p = { nodeName: t, children: c, attributes: null == n ? void 0 : n, key: null == n ? void 0 : n.key }; return void 0 !== e.vnode && e.vnode(p), p } var y = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i; function v(e, t) { return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase() } var m = {}; function g(e) { return this._listeners[e.type](e) } function b(e) { var t = e.parentNode; t && t.removeChild(e) } function S(e, t, n, r, o, s) { if ("className" === t && (t = "class"), "o" == t[0] && "-" == t[1]) m[t] && m[t](e, r, s); else if ("key" === t); else if ("ref" === t) i(n, null), i(r, e); else if ("class" !== t || o) if ("style" === t) { if (r && "string" != typeof r && "string" != typeof n || (e.style.cssText = r || ""), r && "object" == typeof r) { if ("string" != typeof n) for (var a in n) a in r || (e.style[a] = ""); for (var a in r) e.style[a] = "number" == typeof r[a] && !1 === y.test(a) ? r[a] + "px" : r[a] } } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || ""); else if ("_" == t[0] && "o" == t[1] && "n" == t[2] && "WeElement" === e.constructor.is) P(e, t.replace("_", ""), r, n); else if ("o" == t[0] && "n" == t[1]) P(e, t, r, n); else if ("INPUT" === e.nodeName && "value" === t) e[t] = null == r ? "" : r; else if ("list" !== t && "type" !== t && "css" !== t && !o && t in e && "" !== r) { try { e[t] = null == r ? "" : r } catch (p) { } null != r && !1 !== r || "spellcheck" == t || (e.pureRemoveAttribute ? e.pureRemoveAttribute(t) : e.removeAttribute(t)) } else { var c = o && t !== (t = t.replace(/^xlink:?/, "")); null == r || !1 === r ? c ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.pureRemoveAttribute ? e.pureRemoveAttribute(t) : e.removeAttribute(t) : "function" != typeof r && (c ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.pureSetAttribute ? e.pureSetAttribute(t, r) : e.setAttribute(t, r)) } else e.className = r || "" } function w(t) { return this._listeners[t.type](e.event && e.event(t) || t) } function P(e, t, n, r) { var o = t !== (t = t.replace(/Capture$/, "")), i = t.toLowerCase(); t = (i in e ? i : t).slice(2), n ? r || e.addEventListener(t, w, o) : e.removeEventListener(t, w, o), (e._listeners || (e._listeners = {}))[t] = n } var E = 0, O = !1, C = !1; function N(e, t, n, o, i) { var a; if (e || t) return E++ || (O = null != n && void 0 !== n.ownerSVGElement, C = null != e && !("prevProps" in e)), t && t.nodeName === r && (t = t.children), s(t) ? n ? j(n, t, C, o, i) : (a = [], t.forEach((function (t, n) { var r = x(0 === n ? e : null, t, o, i); a.push(r) }))) : (s(e) ? e.forEach((function (e, n) { 0 === n ? a = x(e, t, o, i) : _(e, !1) })) : a = x(e, t, o, i), n && a.parentNode !== n && n.appendChild(a)), --E || (C = !1), a } function x(t, r, o, i) { t && r && t.props && (t.props.children = r.children); var s = t, a = O; if (null != r && "boolean" != typeof r || (r = ""), "string" == typeof r || "number" == typeof r) return t && void 0 !== t.splitText && t.parentNode && (!t._component || o) ? t.nodeValue != r && (t.nodeValue = r) : (s = document.createTextNode(r), t && (t.parentNode && t.parentNode.replaceChild(s, t), _(t, !0))), s.prevProps = !0, s; var c, p, l = r.nodeName; if ("function" == typeof l) for (var u in e.mapping) if (e.mapping[u] === l) { l = u, r.nodeName = u; break } if (O = "svg" === l || "foreignObject" !== l && O, l = String(l), (!t || !v(t, l)) && (c = l, (p = O ? document.createElementNS("http://www.w3.org/2000/svg", c) : document.createElement(c)).normalizedNodeName = c, s = p, t)) { for (; t.firstChild;)s.appendChild(t.firstChild); t.parentNode && t.parentNode.replaceChild(s, t), _(t, !0) } var f = s.firstChild, h = s.prevProps, d = r.children; if (null == h) { h = s.prevProps = {}; for (var y = s.attributes, m = y.length; m--;)h[y[m].name] = y[m].value } return !C && d && 1 === d.length && "string" == typeof d[0] && null != f && void 0 !== f.splitText && null == f.nextSibling ? f.nodeValue != d[0] && (f.nodeValue = d[0]) : (d && d.length || null != f) && ("WeElement" == s.constructor.is && s.constructor.noSlot || j(s, d, C || null != h.dangerouslySetInnerHTML, o, i)), function (e, t, r, o, i) { var s, a, c = e.update; e.receiveProps && (a = Object.assign({}, r)); for (s in r) t && null != t[s] || null == r[s] || (S(e, s, r[s], r[s] = void 0, O, o), c && delete e.props[s]); for (s in t) if (c && "object" == typeof t[s] && "ref" !== s) { "style" === s && S(e, s, r[s], r[s] = t[s], O, o); var p = n(s); e.props[p] = r[p] = t[s] } else if ("children" !== s && (!(s in r) || t[s] !== ("value" === s || "checked" === s ? e[s] : r[s]))) if (S(e, s, r[s], t[s], O, o), -1 !== e.nodeName.indexOf("-")) { e.props = e.props || {}; var l = n(s); e.props[l] = r[l] = t[s] } else r[s] = t[s]; c && !i && e.parentNode && !1 !== e.receiveProps(e.props, a) && e.update() }(s, r.attributes, h, o, i), s.props && (s.props.children = r.children), O = a, s } function j(t, n, r, o, i) { var s, a, c, p, l, u, f, h, d = t.childNodes, y = [], m = {}, g = 0, S = 0, w = d.length, P = 0, E = n ? n.length : 0; if (0 !== w) for (var O = 0; O < w; O++) { var C = d[O], N = C.prevProps; null != (j = E && N ? C._component ? C._component.__key : N.key : null) ? (g++, m[j] = C) : (N || (void 0 !== C.splitText ? !r || C.nodeValue.trim() : r)) && (y[P++] = C) } if (0 !== E) for (O = 0; O < E; O++) { var j; if (l = null, null != (j = (p = n[O]).key)) g && void 0 !== m[j] && (l = m[j], m[j] = void 0, g--); else if (!l && S < P) for (s = S; s < P; s++)if (void 0 !== y[s] && (u = a = y[s], h = r, "string" == typeof (f = p) || "number" == typeof f ? void 0 !== u.splitText : "string" == typeof f.nodeName ? !u._componentConstructor && v(u, f.nodeName) : "function" == typeof f.nodeName ? e.mapping[u.nodeName.toLowerCase()] === f.nodeName : h || u._componentConstructor === f.nodeName)) { l = a, y[s] = void 0, s === P - 1 && P--, s === S && S++; break } l = x(l, p, o, i), c = d[O], l && l !== t && l !== c && (null == c ? t.appendChild(l) : l === c.nextSibling ? b(c) : t.insertBefore(l, c)) } if (g) for (var O in m) void 0 !== m[O] && _(m[O], !1); for (; S <= P;)void 0 !== (l = y[P--]) && _(l, !1) } function _(e, t) { null != e.prevProps && e.prevProps.ref && ("function" == typeof e.prevProps.ref ? e.prevProps.ref(null) : e.prevProps.ref.current && (e.prevProps.ref.current = null)), !1 !== t && null != e.prevProps || b(e), function (e) { e = e.lastChild; for (; e;) { var t = e.previousSibling; _(e, !0), e = t } }(e) } var T = 0, M = function (n) { function r() { !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, r); var e = function (e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }(this, n.call(this)); return e.props = Object.assign({}, e.constructor.defaultProps, e.props), e.elementId = T++, e.computed = {}, e.isInstalled = !1, e } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(r, n), r.prototype.connectedCallback = function () { for (var n, r, o = this.parentNode; o && !this.store;)this.store = o.store, o = o.parentNode || o.host; if (this.attrsToProps(), this.props.use && (this.use = this.props.use), this.props.useSelf && (this.use = this.props.useSelf), this.use) { var i = "function" == typeof this.use ? this.use() : this.use; if (e.isMultiStore) { var c = {}, p = {}; for (var l in i) c[l] = {}, p[l] = {}, u(i[l], c, l), a(this.store[l].data, i[l], p, l), this.store[l].instances.push(this); this.using = p, this._updatePath = c } else this._updatePath = u(i), this.using = a(this.store.data, i), this.store.instances.push(this) } if (this.useSelf) { var f = "function" == typeof this.useSelf ? this.useSelf() : this.useSelf; if (e.isMultiStore) { var h = {}, d = {}; for (var y in f) u(f[y], h, y), a(this.store[y].data, f[y], d, y), this.store[y].updateSelfInstances.push(this); this.usingSelf = d, this._updateSelfPath = h } else this._updateSelfPath = u(f), this.usingSelf = a(this.store.data, f), this.store.updateSelfInstances.push(this) } if (this.compute) for (var v in this.compute) this.computed[v] = this.compute[v].call(e.isMultiStore ? this.store : this.store.data); if (this.beforeInstall(), this.install(), this.afterInstall(), this.constructor.isLightDOM) n = this; else if (this.shadowRoot) for (n = this.shadowRoot; r = n.firstChild;)n.removeChild(r); else n = this.attachShadow({ mode: "open" }); var m = this.constructor.css; if (m) if ("string" == typeof m) { var g = new CSSStyleSheet; g.replaceSync(m), n.adoptedStyleSheets = [g] } else if ("[object Array]" === Object.prototype.toString.call(m)) { var b = []; m.forEach((function (e) { if ("string" == typeof e) { var t = new CSSStyleSheet; t.replaceSync(e), b.push(t) } else b.push(e); n.adoptedStyleSheets = b })) } else n.adoptedStyleSheets = [m]; this.beforeRender(), e.afterInstall && e.afterInstall(this); var S = this.render(this.props, this.store); this.rootNode = N(null, S, null, this), this.rendered(), this.css && n.appendChild(t("function" == typeof this.css ? this.css() : this.css)), this.props.css && (this._customStyleElement = t(this.props.css), this._customStyleContent = this.props.css, n.appendChild(this._customStyleElement)), s(this.rootNode) ? this.rootNode.forEach((function (e) { n.appendChild(e) })) : this.rootNode && n.appendChild(this.rootNode), this.installed(), this.isInstalled = !0 }, r.prototype.disconnectedCallback = function () { if (this.uninstall(), this.isInstalled = !1, this.store) if (e.isMultiStore) for (var t in this.store) { var n = this.store[t]; f(this, n.instances), f(this, n.updateSelfInstances) } else f(this, this.store.instances), f(this, this.store.updateSelfInstances) }, r.prototype.update = function (e, t) { this._willUpdate = !0, this.beforeUpdate(), this.beforeRender(), this._customStyleContent != this.props.css && (this._customStyleContent = this.props.css, this._customStyleElement.textContent = this._customStyleContent), this.attrsToProps(e); var n = this.render(this.props, this.store); this.rendered(), this.rootNode = N(this.rootNode, n, this.constructor.isLightDOM ? this : this.shadowRoot, this, t), this._willUpdate = !1, this.updated() }, r.prototype.forceUpdate = function () { this.update(!0) }, r.prototype.updateProps = function (e) { var t = this; Object.keys(e).forEach((function (n) { t.props[n] = e[n], t.prevProps && (t.prevProps[n] = e[n]) })), this.forceUpdate() }, r.prototype.updateSelf = function (e) { this.update(e, !0) }, r.prototype.removeAttribute = function (e) { n.prototype.removeAttribute.call(this, e), this.isInstalled && this.update() }, r.prototype.setAttribute = function (e, t) { t && "object" == typeof t ? n.prototype.setAttribute.call(this, e, JSON.stringify(t)) : n.prototype.setAttribute.call(this, e, t), this.isInstalled && this.update() }, r.prototype.pureRemoveAttribute = function (e) { n.prototype.removeAttribute.call(this, e) }, r.prototype.pureSetAttribute = function (e, t) { n.prototype.setAttribute.call(this, e, t) }, r.prototype.attrsToProps = function (t) { if (!(e.ignoreAttrs || t || this.store && this.store.ignoreAttrs)) { var n = this; n.props.css = n.getAttribute("css"); var r = this.constructor.propTypes; r && Object.keys(r).forEach((function (e) { var t, o, i = r[e], s = n.getAttribute(e.replace(l, "-$1").toLowerCase()); if (null !== s) switch (i) { case String: n.props[e] = s; break; case Number: n.props[e] = Number(s); break; case Boolean: n.props[e] = "false" !== s && "0" !== s; break; case Array: case Object: ":" === s[0] ? n.props[e] = (t = s.substr(1), o = Omi.$, c(t).forEach((function (e) { o = o[e] })), o) : n.props[e] = JSON.parse(s.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4').replace(/'([\s\S]*?)'/g, '"$1"').replace(/,(\s*})/g, "$1")) } else n.constructor.defaultProps && n.constructor.defaultProps.hasOwnProperty(e) ? n.props[e] = n.constructor.defaultProps[e] : n.props[e] = null })) } }, r.prototype.fire = function (e, t) { this.dispatchEvent(new CustomEvent(e, { detail: t })) }, r.prototype.beforeInstall = function () { }, r.prototype.install = function () { }, r.prototype.afterInstall = function () { }, r.prototype.installed = function () { }, r.prototype.uninstall = function () { }, r.prototype.beforeUpdate = function () { }, r.prototype.updated = function () { }, r.prototype.beforeRender = function () { }, r.prototype.rendered = function () { }, r.prototype.receiveProps = function () { }, r }(HTMLElement); M.is = "WeElement";
/*!
 * https://github.com/Palindrom/JSONPatcherProxy
 * (c) 2017 Starcounter
 * MIT license
 */
var R = function () { function e(e) { return -1 == e.indexOf("/") && -1 == e.indexOf("~") ? e : e.replace(/~/g, "~0").replace(/\//g, "~1") } function t(e, t) { for (var n = [], r = e.parenthoodMap.get(t); r && r.path;)n.unshift(r.path), r = e.parenthoodMap.get(r.parent); return n.length ? "/" + n.join("/") : "" } function n() { var e = this; this.defaultCallback = function (t) { e.isRecording && e.patches.push(t), e.userCallback && e.userCallback(t) }, this.isObserving = !0 } function r() { this.defaultCallback = function () { }, this.isObserving = !1 } function o(e, t) { this.isProxifyingTreeNow = !1, this.isObserving = !1, this.proxifiedObjectsMap = new Map, this.parenthoodMap = new Map, "boolean" != typeof t && (t = !0), this.showDetachedWarning = t, this.originalObject = e, this.cachedProxy = null, this.isRecording = !1, this.userCallback, this.resume = n.bind(this), this.pause = r.bind(this) } return o.deepClone = function (e) { switch (typeof e) { case "object": return JSON.parse(JSON.stringify(e)); case "undefined": return null; default: return e } }, o.escapePathComponent = e, o.prototype.generateProxyAtPath = function (n, r, o) { var i = this; if (!r) return r; var s = { set: function (n, r, o, s) { return function (n, r, o, i) { var s = t(n, r) + "/" + e(o); if (n.proxifiedObjectsMap.has(i)) { var a = n.proxifiedObjectsMap.get(i); n.parenthoodMap.set(a.originalObject, { parent: r, path: o }) } var c = n.proxifiedObjectsMap.get(i); c && !n.isProxifyingTreeNow && (c.inherited = !0), i && "object" == typeof i && !n.proxifiedObjectsMap.has(i) && (n.parenthoodMap.set(i, { parent: r, path: o }), i = n._proxifyObjectTreeRecursively(r, i, o)); var p = { op: "remove", path: s }; if (void 0 === i) { if (!Array.isArray(r) && !r.hasOwnProperty(o)) return Reflect.set(r, o, i); Array.isArray(r) && (p.op = "replace", p.value = null); var l = n.proxifiedObjectsMap.get(r[o]); l && (n.parenthoodMap.delete(r[o]), n.disableTrapsForProxy(l), n.proxifiedObjectsMap.delete(l)) } else { if (Array.isArray(r) && !Number.isInteger(+o.toString())) return "length" != o && console.warn("JSONPatcherProxy noticed a non-integer prop was set for an array. This will not emit a patch"), Reflect.set(r, o, i); p.op = "add", r.hasOwnProperty(o) && (void 0 !== r[o] || Array.isArray(r)) && (p.op = "replace"), p.value = i } p.oldValue = r[o]; var u = Reflect.set(r, o, i); return n.defaultCallback(p), u }(i, n, r, o) }, deleteProperty: function (n, r) { return function (n, r, o) { if (void 0 !== r[o]) { var i = t(n, r) + "/" + e(o), s = n.proxifiedObjectsMap.get(r[o]); s && (s.inherited ? s.inherited = !1 : (n.parenthoodMap.delete(s.originalObject), n.disableTrapsForProxy(s), n.proxifiedObjectsMap.delete(r[o]))); var a = Reflect.deleteProperty(r, o); return n.defaultCallback({ op: "remove", path: i }), a } }(i, n, r) } }, a = Proxy.revocable(r, s); return a.trapsInstance = s, a.originalObject = r, this.parenthoodMap.set(r, { parent: n, path: o }), this.proxifiedObjectsMap.set(a.proxy, a), a.proxy }, o.prototype._proxifyObjectTreeRecursively = function (t, n, r) { for (var o in n) n.hasOwnProperty(o) && n[o] instanceof Object && (n[o] = this._proxifyObjectTreeRecursively(n, n[o], e(o))); return this.generateProxyAtPath(t, n, r) }, o.prototype.proxifyObjectTree = function (e) { this.pause(), this.isProxifyingTreeNow = !0; var t = this._proxifyObjectTreeRecursively(void 0, e, ""); return this.isProxifyingTreeNow = !1, this.resume(), t }, o.prototype.disableTrapsForProxy = function (e) { if (this.showDetachedWarning) { var t = "You're accessing an object that is detached from the observedObject tree, see https://github.com/Palindrom/JSONPatcherProxy#detached-objects"; e.trapsInstance.set = function (e, n, r) { return console.warn(t), Reflect.set(e, n, r) }, e.trapsInstance.set = function (e, n, r) { return console.warn(t), Reflect.set(e, n, r) }, e.trapsInstance.deleteProperty = function (e, t) { return Reflect.deleteProperty(e, t) } } else delete e.trapsInstance.set, delete e.trapsInstance.get, delete e.trapsInstance.deleteProperty }, o.prototype.observe = function (e, t) { if (!e && !t) throw new Error("You need to either record changes or pass a callback"); return this.isRecording = e, this.userCallback = t, e && (this.patches = []), this.cachedProxy = this.proxifyObjectTree(this.originalObject), this.cachedProxy }, o.prototype.generate = function () { if (!this.isRecording) throw new Error("You should set record to true to get patches later"); return this.patches.splice(0, this.patches.length) }, o.prototype.revoke = function () { this.proxifiedObjectsMap.forEach((function (e) { e.revoke() })) }, o.prototype.disableTraps = function () { this.proxifiedObjectsMap.forEach(this.disableTrapsForProxy, this) }, o }(); function A(e, t, n) { return t = "string" == typeof t ? document.querySelector(t) : t, n && (n.data && function (e, t) { e.instances = [], e.updateSelfInstances = [], function (e, t) { e.update = function (n) { Object.keys(n).length > 0 && (this.instances.forEach((function (r) { I(r, t), t ? r._updatePath && r._updatePath[t] && L(n, r._updatePath[t]) && (r.use && a(e.data, ("function" == typeof r.use ? r.use() : r.use)[t], r.using, t), r.update()) : r._updatePath && L(n, r._updatePath) && (r.use && (r.using = a(e.data, "function" == typeof r.use ? r.use() : r.use)), r.update()) })), this.updateSelfInstances.forEach((function (r) { I(r, t), t ? r._updateSelfPath && r._updateSelfPath[t] && L(n, r._updateSelfPath[t]) && (r.useSelf && a(e.data, ("function" == typeof r.useSelf ? r.useSelf() : r.useSelf)[t], r.usingSelf, t), r.updateSelf()) : r._updateSelfPath && L(n, r._updateSelfPath) && (r.usingSelf = a(e.data, "function" == typeof r.useSelf ? r.useSelf() : r.useSelf), r.updateSelf()) })), this.onChange && this.onChange(n)) } }(e, t), e.data = new R(e.data).observe(!1, (function (t) { var n, r, o = {}; if ("remove" === t.op) { var i = function (e, t) { for (var n = e.replace("/", "").split("/"), r = t.data[n[0]], o = 1, i = n.length; o < i - 1; o++)r = r[n[o]]; return { k: F(e), v: r } }(t.path, e); o[i.k] = i.v, k(o, e) } else { o[(n = t.path, r = "", n.replace("/", "").split("/").forEach((function (e, t) { t ? isNaN(Number(e)) ? r += "." + e : r += "[" + e + "]" : r += e })), r)] = t.value, k(o, e) } })) }(n), t.store = n), N(null, e, t, !1) } function k(e, t) { t.update(e) } function I(e, t) { if (e.compute) for (var n in e.compute) e.computed[n] = e.compute[n].call(t ? e.store : e.store.data) } function L(e, t) { for (var n in e) { if (t[n]) return !0; for (var r in t) if (W(n, r)) return !0 } return !1 } function W(e, t) { if (0 === e.indexOf(t)) { var n = e.substr(t.length, 1); if ("[" === n || "." === n) return !0 } return !1 } function F(e) { var t = "", n = e.replace("/", "").split("/"), r = n.length; return n.forEach((function (e, n) { n < r - 1 && (n ? isNaN(Number(e)) ? t += "." + e : t += "[" + e + "]" : t += e) })), t } function D(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function H(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t } var $ = ["use", "useSelf"]; function J(t, n, r) { if (!customElements.get(t) && !e.mapping[t]) if ("WeElement" === n.is) customElements.define(t, n), e.mapping[t] = n; else { r = "string" == typeof r ? { css: r } : r || {}; var o = function (e) { function t() { var n, o; D(this, t); for (var i = arguments.length, s = Array(i), a = 0; a < i; a++)s[a] = arguments[a]; return n = o = H(this, e.call.apply(e, [this].concat(s))), o.compute = r.compute, H(o, n) } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(t, e), t.prototype.render = function () { return n.call(this, this) }, t }(M); o.css = r.css, o.propTypes = r.propTypes, o.defaultProps = r.defaultProps, o.isLightDOM = r.isLightDOM; var i = function (e) { "function" == typeof r[e] && (o.prototype[e] = function () { return r[e].apply(this, arguments) }) }; for (var s in r) i(s); $.forEach((function (e) { r[e] && "function" !== r[e] && (o.prototype[e] = function () { return r[e] }) })), customElements.define(t, o), e.mapping[t] = o } } function U(e) { return function (t) { J(e, t) } } function V(e) { return e.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, (function (e, t) { return window.innerWidth * Number(t) / 750 + "px" })) } var z = {}.hasOwnProperty; function B() { for (var e = [], t = 0; t < arguments.length; t++) { var n = arguments[t]; if (n) { var r = typeof n; if ("string" === r || "number" === r) e.push(n); else if (Array.isArray(n) && n.length) { var o = B.apply(null, n); o && e.push(o) } else if ("object" === r) for (var i in n) z.call(n, i) && n[i] && e.push(i) } } return e.join(" ") } !function () { if (!("adoptedStyleSheets" in document)) { var e = "ShadyCSS" in window && !ShadyCSS.nativeShadow, t = document.implementation.createHTMLDocument("boot"), n = new WeakMap, r = "object" == typeof DOMException ? Error : DOMException, o = Object.defineProperty, i = Array.prototype.forEach, s = /@import.+?;?$/gm, a = CSSStyleSheet.prototype; a.replace = function () { return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets.")) }, a.replaceSync = function () { throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.") }; var c = new WeakMap, p = new WeakMap, l = new WeakMap, u = x.prototype; u.replace = function (e) { try { return this.replaceSync(e), Promise.resolve(this) } catch (t) { return Promise.reject(t) } }, u.replaceSync = function (e) { if (N(this), "string" == typeof e) { var t = this, n = c.get(t).ownerNode; n.textContent = function (e) { var t = e.replace(s, ""); return t !== e && console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"), t.trim() }(e), c.set(t, n.sheet), p.get(t).forEach((function (e) { e.isConnected() && C(t, O(t, e)) })) } }, o(u, "cssRules", { configurable: !0, enumerable: !0, get: function () { return N(this), c.get(this).cssRules } }), ["addImport", "addPageRule", "addRule", "deleteRule", "insertRule", "removeImport", "removeRule"].forEach((function (e) { u[e] = function () { var t = this; N(t); var n = arguments, r = c.get(t), o = p.get(t), i = r[e].apply(r, n); return o.forEach((function (r) { if (r.isConnected()) { var o = O(t, r).sheet; o[e].apply(o, n) } })), i } })), o(x, Symbol.hasInstance, { configurable: !0, value: P }); var f = { childList: !0, subtree: !0 }, h = new WeakMap, d = new WeakMap, y = new WeakMap, v = new WeakMap, m = A.prototype; if (m.isConnected = function () { var e = d.get(this); return e instanceof Document ? "loading" !== e.readyState : function (e) { return "isConnected" in e ? e.isConnected : document.contains(e) }(e.host) }, m.connect = function () { var e = M(this); v.get(this).observe(e, f), y.get(this).length > 0 && R(this), T(e, (function (e) { j(e).connect() })) }, m.disconnect = function () { v.get(this).disconnect() }, m.update = function (e) { var t = this, n = d.get(t) === document ? "Document" : "ShadowRoot"; if (!Array.isArray(e)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + n + ": Iterator getter is not callable."); if (!e.every(P)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + n + ": Failed to convert value to 'CSSStyleSheet'"); if (e.some(E)) throw new TypeError("Failed to set the 'adoptedStyleSheets' property on " + n + ": Can't adopt non-constructed stylesheets"); t.sheets = e; var r, o, i = y.get(t), s = (r = e).filter((function (e, t) { return r.indexOf(e) === t })); (o = s, i.filter((function (e) { return -1 === o.indexOf(e) }))).forEach((function (e) { var n; (n = O(e, t)).parentNode.removeChild(n), function (e, t) { l.get(e).delete(t), p.set(e, p.get(e).filter((function (e) { return e !== t }))) }(e, t) })), y.set(t, s), t.isConnected() && s.length > 0 && R(t) }, window.CSSStyleSheet = x, _(Document), "ShadowRoot" in window) { _(ShadowRoot); var g = Element.prototype, b = g.attachShadow; g.attachShadow = function (e) { var t = b.call(this, e); return "closed" === e.mode && n.set(this, t), t } } var S = j(document); S.isConnected() ? S.connect() : document.addEventListener("DOMContentLoaded", S.connect.bind(S)) } function w(e) { return e.shadowRoot || n.get(e) } function P(e) { return "object" == typeof e && (u.isPrototypeOf(e) || a.isPrototypeOf(e)) } function E(e) { return "object" == typeof e && a.isPrototypeOf(e) } function O(e, t) { return l.get(e).get(t) } function C(e, t) { requestAnimationFrame((function () { var n, r; !function (e) { for (var t = 0; t < e.cssRules.length; t++)e.deleteRule(0) }(t.sheet), n = c.get(e), r = t.sheet, i.call(n.cssRules, (function (e, t) { r.insertRule(e.cssText, t) })) })) } function N(e) { if (!c.has(e)) throw new TypeError("Illegal invocation") } function x() { var e = this, n = document.createElement("style"); t.body.appendChild(n), c.set(e, n.sheet), p.set(e, []), l.set(e, new WeakMap) } function j(e) { var t = h.get(e); return t || (t = new A(e), h.set(e, t)), t } function _(e) { o(e.prototype, "adoptedStyleSheets", { configurable: !0, enumerable: !0, get: function () { return j(this).sheets }, set: function (e) { j(this).update(e) } }) } function T(e, t) { for (var n = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, (function (e) { return w(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT }), null, !1), r = void 0; r = n.nextNode();)t(w(r)) } function M(e) { var t = d.get(e); return t instanceof Document ? t.body : t } function R(e) { var t = document.createDocumentFragment(), n = y.get(e), r = v.get(e), o = M(e); r.disconnect(), n.forEach((function (n) { t.appendChild(O(n, e) || function (e, t) { var n = document.createElement("style"); return l.get(e).set(t, n), p.get(e).push(t), n }(n, e)) })), o.insertBefore(t, null), r.observe(o, f), n.forEach((function (t) { C(t, O(t, e)) })) } function A(t) { var n = this; n.sheets = [], d.set(n, t), y.set(n, []), v.set(n, new MutationObserver((function (t, r) { document ? t.forEach((function (t) { e || i.call(t.addedNodes, (function (e) { e instanceof Element && T(e, (function (e) { j(e).connect() })) })), i.call(t.removedNodes, (function (t) { t instanceof Element && (function (e, t) { return t instanceof HTMLStyleElement && y.get(e).some((function (t) { return O(t, e) })) }(n, t) && R(n), e || T(t, (function (e) { j(e).disconnect() }))) })) })) : r.disconnect() }))) } }(), d.f = r; var Y = M, q = J, G = e.mapping, Z = { tag: U, WeElement: M, Component: Y, render: A, h: d, createElement: d, options: e, define: J, cloneElement: function (e, t) { return d(e.nodeName, o(o({}, e.attributes), t), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children) }, getHost: function (e) { for (var t = e.parentNode; t;) { if (t.host) return t.host; if (t.shadowRoot && t.shadowRoot.host) return t.shadowRoot.host; t = t.parentNode } }, rpx: V, defineElement: q, classNames: B, extractClass: function () { var e = Array.prototype.slice.call(arguments, 0), t = e[0], n = e.slice(1); if (t.class ? (n.unshift(t.class), delete t.class) : t.className && (n.unshift(t.className), delete t.className), n.length > 0) return { class: B.apply(null, n) } }, createRef: function () { return {} }, o: function (e) { return JSON.stringify(e) }, elements: G, $: {}, extend: function (e, t) { m["o-" + e] = t }, get: function (e, t) { for (var n = c(t), r = e, o = 0, i = n.length; o < i; o++)r = r[n[o]]; return r }, set: function (e, t, n) { for (var r = c(t), o = e, i = 0, s = r.length; i < s; i++)i === s - 1 ? o[r[i]] = n : o = o[r[i]] }, bind: function (e, t, n) { e._listeners = e._listeners || {}, e._listeners[t] = n, e.addEventListener(t, g) }, unbind: function (e, t) { e.removeEventListener(t, g) }, JSONProxy: R }; e.root.Omi = Z, e.root.omi = Z, e.root.Omi.version = "6.19.23"; export { M as W, A as a, d as h, V as r, U as t };
