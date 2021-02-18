! function(t) {
    var e = {};

    function o(n) { if (e[n]) return e[n].exports; var r = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports }
    o.m = t, o.c = e, o.d = function(t, e, n) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, o.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var r in t) o.d(n, r, function(e) { return t[e] }.bind(null, r));
        return n
    }, o.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "", o(o.s = "./src/ts/parallax-vanilla.ts")
}({
    "./src/less/parallax-vanilla.less":
    /*!****************************************!*\
      !*** ./src/less/parallax-vanilla.less ***!
      \****************************************/
    /*! no static exports found */
        function(t, e, o) {},
    "./src/ts/constants.ts":
    /*!*****************************!*\
      !*** ./src/ts/constants.ts ***!
      \*****************************/
    /*! exports provided: VIDEO_EXTENSIONS, MEDIA_TYPES, ELEMENT_DATA_KEYS, defaultSettings */
        function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "VIDEO_EXTENSIONS", function() { return n }), o.d(e, "MEDIA_TYPES", function() { return r }), o.d(e, "ELEMENT_DATA_KEYS", function() { return s }), o.d(e, "defaultSettings", function() { return i });
        const n = ["3g2", "3gp", "asf", "avi", "flv", "h264", "m4v", "mov", "mp4", "mpg", "mpeg", "rm", "srt", "swf", "vow", "vob", "wmv"],
            r = { IMAGE: "image", VIDEO: "video", NONE: "none" },
            s = { MEDIAPATH: "pv-mediapath", MEDIATYPE: "pv-mediatype", MUTE: "pv-mute", HEIGHT: "pv-height", SPEED: "pv-speed" },
            i = { container: { class: "pv-container", height: "750px" }, block: { class: "pv-block", speed: -Math.PI, mediatype: r.IMAGE, mediapath: null, mute: !1 } }
    },
    "./src/ts/init.ts":
    /*!************************!*\
      !*** ./src/ts/init.ts ***!
      \************************/
    /*! exports provided: default */
        function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o( /*! ./constants */ "./src/ts/constants.ts"),
            r = o( /*! ./initContainer */ "./src/ts/initContainer.ts"),
            s = o( /*! ./initBlock */ "./src/ts/initBlock.ts");
        e.default = t => {
            const e = window.pv;
            e.containerArr = [], e.settings = i(t, n.defaultSettings);
            const o = document.getElementsByClassName(e.settings.container.class);
            for (let t = 0; t < o.length; t++) {
                const i = {};
                i.el = o[t], i.offset = l(i.el), i.el.style.height = Object(r.setContainerHeight)(i, e.settings), i.height = i.el.clientHeight, i.blocks = [];
                const a = o[t].getElementsByClassName(e.settings.block.class);
                for (let t = 0; t < a.length; t++) {
                    const o = {};
                    o.el = a[t], o.speed = Object(s.setBlockSpeed)(o, e.settings);
                    const { mediatype: r, mediapath: l } = Object(s.setBlockMediaProps)(o, e.settings);
                    if (o.mediatype = r, o.mediapath = l, o.mute = Object(s.setBlockMute)(o, e.settings), o.mediatype !== n.MEDIA_TYPES.NONE) {
                        if (o.mediatype === n.MEDIA_TYPES.VIDEO && (i.hasVideoBlock = !0), !Object(s.setBlockVisual)(o)) throw console.error("Did not successfully set media for block:", o), new Error("Did not successfully set media");
                        Object(s.setBlockAttributes)(i, o)
                    }
                    i.blocks.push(o)
                }
                e.containerArr.push(i)
            }
        };
        const i = (t = {}, e) => (Object.keys(t).forEach(o => {
                if (!(t[o] instanceof Object)) throw new Error(`Expected ${o} to be of instance Object`);
                Object.keys(t[o]).forEach(n => {
                    if (t[o][n] instanceof Object) throw new Error(`Expected ${o} to be primitive value`);
                    if (!e[o].hasOwnProperty(n)) throw new Error(`Expected ${n} to match available settings`);
                    e[o][n] = t[o][n]
                })
            }), e),
            l = t => { return t.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) }
    },
    "./src/ts/initBlock.ts":
    /*!*****************************!*\
      !*** ./src/ts/initBlock.ts ***!
      \*****************************/
    /*! exports provided: setBlockSpeed, setBlockMediaProps, setBlockMute, setBlockVisual, setBlockAttributes */
        function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "setBlockSpeed", function() { return r }), o.d(e, "setBlockMediaProps", function() { return s }), o.d(e, "setBlockMute", function() { return i }), o.d(e, "setBlockVisual", function() { return a }), o.d(e, "setBlockAttributes", function() { return c });
        var n = o( /*! ./constants */ "./src/ts/constants.ts");
        const r = (t, e) => {
                let o = t.el.getAttribute(n.ELEMENT_DATA_KEYS.SPEED);
                if (!o) return e.block.speed;
                if ("string" == typeof o) {
                    const e = Number(o);
                    if (isNaN(e)) throw console.error("Invalid type for attribute speed for block: " + t.el), new Error("Invalid type for attribute speed");
                    o = e
                }
                return 0 == o ? e.block.speed : o
            },
            s = (t, e) => { let o = t.el.getAttribute(n.ELEMENT_DATA_KEYS.MEDIATYPE); const r = t.el.getAttribute(n.ELEMENT_DATA_KEYS.MEDIAPATH); if (o === n.MEDIA_TYPES.NONE) return { mediatype: o, mediapath: r }; if (o || (o = e.block.mediatype), r && d(o, r) && (o = n.MEDIA_TYPES.VIDEO), !r && o !== n.MEDIA_TYPES.NONE) throw console.error("Media path not defined for block: " + t.el), new Error("Media path not defined"); return { mediatype: o, mediapath: r } },
            i = (t, e) => { const o = t.el.getAttribute(n.ELEMENT_DATA_KEYS.MUTE); return o ? "true" == o : e.block.mute },
            l = (t, e) => {
                const o = window.pv;
                o.unmutedBlock && o.unmutedBlock.videoEl !== t && (o.unmutedBlock.videoEl.muted = !0, o.unmutedBlock.audioButton.classList.add("mute")), o.unmutedBlock = e, t.muted = !t.muted, e.muted = t.muted, e.audioButton.classList.toggle("mute")
            },
            a = t => {
                const { mediatype: e } = t;
                return e === n.MEDIA_TYPES.IMAGE ? (t => { const { mediapath: e } = t; return t.el.style.backgroundImage = "url('" + e + "')", "none" != window.getComputedStyle(t.el).getPropertyValue("background-image") })(t) : e === n.MEDIA_TYPES.VIDEO && (t => {
                    const { mediapath: e } = t, o = document.createElement("video");
                    if (o.src = e, o.autoplay = !0, o.loop = !0, o.defaultMuted = !0, o.muted = !0, t.muted = !0, t.videoEl = o, t.el.appendChild(o), void 0 === window.orientation && !t.mute) {
                        o.addEventListener("click", function() { l(o, t) });
                        const e = document.createElement("a");
                        e.href = "#", e.className += "audio-icon mute", e.appendChild(document.createElement("span")), e.addEventListener("click", function(e) { e.preventDefault(), l(o, t) }), t.audioButton = e, t.el.insertAdjacentElement("afterend", e)
                    }
                    return !0
                })(t)
            },
            c = (t, e) => {
                const o = window.pv;
                u();
                let n = 0,
                    r = 0,
                    s = 0;
                t.offset < o.windowProps.windowHeight ? (r = (t.height + t.offset) / Math.abs(e.speed), e.speed > 0 ? (n = -Math.abs(t.offset), s = t.height + t.offset) : s = r + t.height) : (s = (r = (t.height + o.windowProps.windowHeight) / Math.abs(e.speed)) + t.height, e.speed > 0 ? (n = -r, s = t.height + o.windowProps.windowHeight / Math.abs(e.speed)) : s = r + t.height), Math.abs(n) >= Math.abs(s) && (s = Math.abs(n) + 1), e.el.style.setProperty("padding-bottom", s + "px", null), e.el.style.setProperty("margin-top", n + "px", null)
            },
            d = (t, e) => t === n.MEDIA_TYPES.VIDEO || -1 !== n.VIDEO_EXTENSIONS.indexOf((t => { const e = t.substr(t.lastIndexOf(".") + 1, t.length).toLowerCase(); if (-1 === e) throw console.error("Invalid extension for media with media path: " + t), new Error("Invalid extension for media"); return e })(e)),
            u = () => { window.pv.windowProps = { scrollTop: window.scrollY || document.documentElement.scrollTop, windowHeight: window.innerHeight, windowMidHeight: window.innerHeight / 2 } }
    },
    "./src/ts/initContainer.ts":
    /*!*********************************!*\
      !*** ./src/ts/initContainer.ts ***!
      \*********************************/
    /*! exports provided: setContainerHeight */
        function(t, e, o) {
        "use strict";
        o.r(e), o.d(e, "setContainerHeight", function() { return r });
        var n = o( /*! ./constants */ "./src/ts/constants.ts");
        const r = (t, e) => { const o = t.el.getAttribute(n.ELEMENT_DATA_KEYS.HEIGHT); if (!o) return e.container.height; if (!isNaN(Number(o))) return o + "px"; const r = o.substr(o.length - 2, o.length); if ("px" === r || "vh" === r) return o; throw new Error('Invalid height suffix, expected "px" or "vh" but got: ' + r) }
    },
    "./src/ts/parallax-vanilla.ts":
    /*!************************************!*\
      !*** ./src/ts/parallax-vanilla.ts ***!
      \************************************/
    /*! no exports provided */
        function(t, e, o) {
        "use strict";
        o.r(e);
        o( /*! ../less/parallax-vanilla.less */ "./src/less/parallax-vanilla.less");
        var n = o( /*! ./init */ "./src/ts/init.ts"),
            r = o( /*! ./translate */ "./src/ts/translate.ts"),
            s = o( /*! ./resize */ "./src/ts/resize.ts");
        (t => {
            void 0 === t.pv ? (t.pv = (() => {
                const e = { init: n.default };
                t.pv = e, void 0 === t.orientation && (t.onresize = () => Object(s.default)()), t.raf = (() => t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) { t.setTimeout(e, 1e3 / 60) })();
                const o = () => { Object(r.default)(), t.raf(o) };
                return t.raf(o), e
            })(), console.log("%c parallax-vanilla defined.", "color: green")) : console.log("%c parallax-vanilla already defined.", "color: red")
        })(window)
    },
    "./src/ts/resize.ts":
    /*!**************************!*\
      !*** ./src/ts/resize.ts ***!
      \**************************/
    /*! exports provided: default */
        function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o( /*! ./constants */ "./src/ts/constants.ts"),
            r = o( /*! ./initBlock */ "./src/ts/initBlock.ts");
        e.default = () => { window.pv.containerArr.forEach(t => { t.height = t.el.clientHeight, t.blocks.forEach(e => { e.mediatype !== n.MEDIA_TYPES.NONE && Object(r.setBlockAttributes)(t, e) }) }) }
    },
    "./src/ts/translate.ts":
    /*!*****************************!*\
      !*** ./src/ts/translate.ts ***!
      \*****************************/
    /*! exports provided: default */
        function(t, e, o) {
        "use strict";
        o.r(e), e.default = () => {
            const t = window.pv;
            t.windowProps.scrollTop = window.scrollY || document.documentElement.scrollTop, t.windowProps.scrollTop !== t.prevScrollTop && (t.prevScrollTop = t.windowProps.scrollTop, t.containerArr.forEach((e, o) => {
                let i = 0;
                if (r(e.offset, e.height)) o > t.mostReContainerInViewport && (t.mostReContainerInViewport = o), i = e.offset < t.windowProps.windowHeight ? t.windowProps.scrollTop : t.windowProps.windowHeight - e.offset + t.windowProps.scrollTop, e.blocks.forEach(e => { e.videoEl && (e.videoEl.play(), e === t.unmutedBlock && (e.muted || (e.videoEl.muted = e.muted, e.muted ? t.unmutedBlock.audioButton.classList.add("mute") : t.unmutedBlock.audioButton.classList.remove("mute")))), n(e.el, "translate3d(0," + Math.round(i / e.speed) + "px, 0)") });
                else {
                    e.hasVideoBlock && e.blocks.forEach(e => { e.videoEl && (e.videoEl.pause(), t.unmutedBlock === e && (e.videoEl.muted = !0)) });
                    const n = t.containerArr[o + 1];
                    if (n && !r(n.offset, n.height) && t.mostReContainerInViewport < o && !s(e, n)) return;
                    n && r(n.offset, n.height) && (t.mostReContainerInViewport = o + 1)
                }
            }))
        };
        const n = (t, e) => { t.style.webkitTransform = e, t.style.MozTransform = e, t.style.msTransform = e, t.style.OTransform = e, t.style.transform = e },
            r = (t, e) => { const o = window.pv; return o.windowProps.scrollTop + o.windowProps.windowHeight - t > 0 && o.windowProps.scrollTop < t + e },
            s = (t, e) => t.offset + t.height > e.offset + e.height
    }
});