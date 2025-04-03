! function(o, c, r) {
    async function t() {
        try {
            var o;
            await (o = r, new Promise((r, t) => {
                var n = c.createElement("script");
                n.src = o, n.onload = () => r(n), n.onerror = o => t(o);
                var a = c.getElementsByTagName("script");
                a.length ? a[0].parentNode.insertBefore(n, a[0]) : c.head.append(n)
            })), runOnLoad()
        } catch (t) {
            console.error("Error loading script: " + r)
        }
    }
    runOnLoad = function() {
        async function r() {
            var o = t();
            if (null === o) {
                var {
                    UUID: c
                } = await import("https://cdn.jsdelivr.net/npm/uuidjs@5.0.1/+esm");
                i = o = c.genV1().hexString
            }
            return o
        }

        function t(o) {
            if (i) {
                if (o) {
                    let r = new Date;
                    r.setTime(r.getTime() + 157248e5), c.cookie = "wpcc_uuid=" + i + ";expires=" + r.toUTCString() + ";domain=.ez.anozon.it;Secure;path=/"
                }
                return i
            }
            var t = c.cookie.split("; ").find(o => o.startsWith("wpcc_uuid="));
            return i = t ? t.substring(10) : null
        }

        function n(c) {
            let r = c.categories,
                t = {
                    essential: ["functionality_storage", "security_storage"],
                    marketing: ["ad_storage", "ad_personalization", "ad_user_data"],
                    analytics: ["analytics_storage"],
                    personalization: ["personalization_storage"]
                },
                n = {};
            r.forEach(o => {
                Object.keys(t).includes(o) && (t[o].forEach(o => {
                    n[o] = "granted"
                }), delete t[o])
            }), Object.keys(t).forEach(o => {
                t[o].forEach(o => {
                    n[o] = "denied"
                })
            }), o.wpccGTMConsentData = n, o.wpccGTMConsent ? o.wpccGTMConsent() : (gtag("consent", "update", o.wpccGTMConsentData), o.dataLayer.push({
                event: "wpcc_consent_updated"
            }))
        }
        async function a(r) {
            if ("consent" == r) {
                var n = {
                        uuid: t(!0),
                        action: r,
                        url: o.location.href,
                        live_cookies: function o() {
                            for (var r = c.cookie.split(";"), t = {}, n = 0; n < r.length; n++) {
                                var a = r[n].split("="),
                                    i = a[0].trim(),
                                    l = decodeURIComponent(a[1]);
                                t[i] = l
                            }
                            var s = [];
                            for (var i in t) t.hasOwnProperty(i) && s.push(i);
                            return s
                        }()
                    },
                    a = CookieConsent.getUserPreferences(),
                    i = null;
                i = {
                    accepted_cookies: [],
                    rejected_cookies: []
                }, [{
                    linkedCategory: "essential",
                    cookieTable: {
                        body: []
                    }
                }, {
                    linkedCategory: "analytics",
                    cookieTable: {
                        body: []
                    }
                }, {
                    linkedCategory: "marketing",
                    cookieTable: {
                        body: []
                    }
                }, {
                    linkedCategory: "personalization",
                    cookieTable: {
                        body: []
                    }
                }].forEach(o => {
                    var c = o.linkedCategory;
                    a.acceptedCategories.includes(c) ? o.cookieTable.body.forEach(o => {
                        i.accepted_cookies.push(o)
                    }) : o.cookieTable.body.forEach(o => {
                        i.rejected_cookies.push(o)
                    })
                }), n = {
                    ...n,
                    preferences: a,
                    gpc: null,
                    ...i ? {
                        cookies: i
                    } : {}
                }, console.error("Consent collection is disabled.")
            }
        }
        o.dataLayer = o.dataLayer || [], "undefined" == typeof gtag && (gtag = function() {
            o.dataLayer.push(arguments)
        });
        var i = null;
        "undefined" != typeof CookieConsent && CookieConsent.reset(), o.matchMedia && o.matchMedia("(prefers-color-scheme: dark)").matches && (c.body.classList.contains("cc--darkmode") || c.body.classList.add("cc--darkmode")), o.wpccGTMConsentData = {
            ad_storage: "denied",
            analytics_storage: "denied",
            functionality_storage: "granted",
            personalization_storage: "denied",
            security_storage: "granted",
            ad_personalization: "denied",
            ad_user_data: "denied"
        }, o.wpccGTMConsent || gtag("consent", "default", o.wpccGTMConsentData), CookieConsent.run({
            autoShow: !0,
            mode: "opt-in",
            disablePageInteraction: 0,
            cookie: {
                name: "wpcc_data",
                domain: ".ez.anozon.it",
                expiresAfterDays: 182
            },
            guiOptions: {
                consentModal: {
                    layout: "box inline",
                    position: "bottom right",
                    equalWeightButtons: !0,
                    flipButtons: !1
                },
                preferencesModal: {
                    layout: "box",
                    equalWeightButtons: !0,
                    flipButtons: !1
                }
            },
            language: {
                default: "en",
                rtl: ["ar", "dv", "fa", "ha", "he", "ks", "ku", "ps", "ur", "yi"],
                autoDetect: "document",
                translations: {
                    en: "t8muxov4.json"
                }
            },
            categories: {
                essential: {
                    enabled: !0,
                    readOnly: !0
                },
                analytics: {
                    enabled: !1,
                    readOnly: !1
                },
                marketing: {
                    enabled: !1,
                    readOnly: !1
                },
                personalization: {
                    enabled: !1,
                    readOnly: !1
                }
            },
            onFirstConsent({
                cookie: o
            }) {
                CookieConsent.getUserPreferences().acceptedCategories.includes("do_not_sell") || a("consent")
            },
            onConsent({
                cookie: o
            }) {
                n(o)
            },
            onChange({
                cookie: o,
                changedCategories: c,
                changedServices: r
            }) {
                a("consent"), n(o)
            },
            onModalShow({
                modalName: o
            }) {},
            onModalHide({
                modalName: o
            }) {}
        }).then(() => {
            r().then(() => {
                a("page_view");
                var o = c.getElementById("wpcc-floating-icon");
                if (!o) {
                    (o = c.createElement("div")).id = "wpcc-floating-icon";
                    var r = (new DOMParser).parseFromString('<svg viewBox="0 0 683 683" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:none;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M550.134 294.567c20.248 20.248 45.387 32.627 71.614 37.124 42.014 7.203 68.924 48.401 58.574 89.75-37.563 150.065-173.283 261.225-334.989 261.225C154.395 682.666.001 528.27.001 337.332.002 175.626 111.16 39.91 261.224 2.346c41.35-10.352 82.552 16.56 89.752 58.574 4.497 26.228 16.876 51.365 37.125 71.614 19.359 19.357 43.185 31.521 68.163 36.479a72.944 72.944 0 0 1 57.391 57.39c4.958 24.977 17.12 48.805 36.479 68.164Zm-37.712 37.712c-27.119-27.116-44.135-60.504-51.078-95.492a19.656 19.656 0 0 0-15.463-15.462c-34.99-6.944-68.376-23.962-95.492-51.079-28.361-28.361-45.681-63.578-51.978-100.316-1.947-11.35-13.063-18.644-24.235-15.848-126.878 31.76-220.84 146.528-220.842 283.25 0 161.45 130.549 292 292 292 136.721 0 251.492-93.962 283.252-220.84 2.796-11.173-4.499-22.29-15.85-24.236C576 377.96 540.781 360.64 512.421 332.28Z" fill="currentColor"/><path d="M0 0c0-13.807 11.193-25 25-25S50-13.807 50 0 38.807 25 25 25 0 13.807 0 0" style="fill-rule:none" transform="matrix(1.33333 0 0 -1.33333 310.667 337.333)" fill="currentColor"/><path d="M0 0c0-13.807 11.193-25 25-25S50-13.807 50 0 38.807 25 25 25 0 13.807 0 0" style="fill-rule:none" transform="matrix(1.33333 0 0 -1.33333 197.333 222.667)" fill="currentColor"/><path d="M0 0c0-13.807 11.193-25 25-25S50-13.807 50 0 38.807 25 25 25 0 13.807 0 0" style="fill-rule:none" transform="matrix(1.33333 0 0 -1.33333 197.333 450.667)" fill="currentColor"/><path d="M0 0c0-13.807 11.193-25 25-25S50-13.807 50 0 38.807 25 25 25 0 13.807 0 0" style="fill-rule:none" transform="matrix(1.33333 0 0 -1.33333 437.333 450.667)" fill="currentColor"/><path d="M0 0c0-13.807 11.193-25 25-25S50-13.807 50 0 38.807 25 25 25 0 13.807 0 0" style="fill-rule:none" transform="matrix(1.33333 0 0 -1.33333 477.333 33.333)" fill="currentColor"/><path d="M0 0c0-13.807 11.193-25 25-25S50-13.807 50 0 38.807 25 25 25 0 13.807 0 0" style="fill-rule:none" transform="matrix(1.33333 0 0 -1.33333 616 73.333)" fill="currentColor"/><path d="M0 0c0-13.807 11.193-25 25-25S50-13.807 50 0 38.807 25 25 25 0 13.807 0 0" style="fill-rule:none" transform="matrix(1.33333 0 0 -1.33333 584 220)" fill="currentColor"/></svg>', "image/svg+xml").documentElement;
                    o.appendChild(r), o.style.boxShadow = "0 0.625em 1.875em rgba(0,0,2,.3)", o.style.transition = "all 0.2s ease-in-out", o.classList.add("right"), c.body.appendChild(o)
                }
                var t = function() {
                        o.classList.add("show")
                    },
                    n = function() {
                        o.classList.remove("show")
                    };
                o.addEventListener("click", function() {
                    CookieConsent.showPreferences()
                }), e.addEventListener("cc:onModalShow", function() {
                    n()
                }), e.addEventListener("cc:onModalHide", function(o) {
                    o.detail, t()
                }), CookieConsent.validConsent() ? t() : CookieConsent.show()
            })
        })
    }, (resourceCSS = document.createElement("style")).type = "text/css", resourceCSS.appendChild(document.createTextNode(":root{--cc-primary-color:#2c2f31;--cc-secondary-color:#5e6266;--cc-bg:#ffffff;--cc-footer-bg:#ffffff;--cc-footer-border-color:#f0f4f7;--cc-separator-border-color:#f0f4f7;--cc-btn-primary-bg:#30363c;--cc-btn-primary-hover-bg:#000000;--cc-btn-primary-border-color:#30363c;--cc-btn-primary-hover-border-color:#000000;--cc-btn-primary-color:#ffffff;--cc-btn-primary-hover-color:#ffffff;--cc-btn-secondary-bg:#eaeff2;--cc-btn-secondary-hover-bg:#d4dae0;--cc-btn-secondary-border-color:#eaeff2;--cc-btn-secondary-hover-border-color:#d4dae0;--cc-btn-secondary-color:#2c2f31;--cc-btn-secondary-hover-color:#2c2f31;--cc-cookie-category-block-bg:#f0f4f7;--cc-cookie-category-block-border:#f0f4f7;--cc-cookie-category-block-hover-bg:#e9eff4;--cc-cookie-category-block-hover-border:#e9eff4}.cc--darkmode{--cc-primary-color:#ebf3f6;--cc-secondary-color:#aebbc5;--cc-bg:#161a1c;--cc-footer-bg:#161a1c;--cc-footer-border-color:#222a30;--cc-separator-border-color:#222a30;--cc-btn-primary-bg:#c2d0e0;--cc-btn-primary-hover-bg:#98a7b6;--cc-btn-primary-border-color:#c2d0e0;--cc-btn-primary-hover-border-color:#98a7b6;--cc-btn-primary-color:#161a1c;--cc-btn-primary-hover-color:#161a1c;--cc-btn-secondary-bg:#242c31;--cc-btn-secondary-hover-bg:#353d43;--cc-btn-secondary-border-color:#242c31;--cc-btn-secondary-hover-border-color:#353d43;--cc-btn-secondary-color:#ebf3f6;--cc-btn-secondary-hover-color:#ebf3f6;--cc-cookie-category-block-bg:#1e2428;--cc-cookie-category-block-border:#1e2428;--cc-cookie-category-block-hover-bg:#232a2f;--cc-cookie-category-block-hover-border:#232a2f}.cc--darkmode#cc-main{color-scheme:dark}#wpcc-floating-icon{all:initial;background-color:#2b2b2b;color:#ffffff;position:fixed;bottom:20px;left:20px;right:auto;width:26px;height:26px;padding:10px;border-radius:50%;text-align:center;cursor:pointer;z-index:9999;opacity:0;visibility:hidden}#wpcc-floating-icon:hover{background-color:#121212;color:#ffffff}.cc--darkmode #wpcc-floating-icon{background-color:#ffffff;color:#333333}.cc--darkmode #wpcc-floating-icon:hover{background-color:#e6e6e6;color:#333333}#wpcc-floating-icon.show{opacity:1;visibility:visible}#wpcc-floating-icon.right{left:auto;right:20px}#wpcc-floating-icon:hover{transform:scale(1.1)}")), resourceCSS.dataset.styleGroup = "wpcc", document.head.prepend(resourceCSS);
    var n = document.createElement("link");
    n.href = "https://cdnapp.websitepolicies.net/externals/consents/consents.css", n.media = "all", n.rel = "stylesheet", n.dataset.styleGroup = "wpcc", document.head.prepend(n), document.querySelector('script[src="' + r + '"]') ? runOnLoad() : t()
}(window, document, "https://cdnapp.websitepolicies.net/externals/consents/consents.umd.js");