import { defineStore, createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
import $$1 from "jquery";
import "popper.js";
import "bootstrap";
import { useI18n, createI18n } from "vue-i18n";
import { useHead } from "@vueuse/head";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, withDirectives, vModelText, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrGetDynamicModelProps } from "vue/server-renderer";
import axios from "axios";
import VueWriter from "vue-writer";
import { defineRule, configure, Form, Field } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import { required, email, min, max } from "@vee-validate/rules";
import VueProgressBar from "@aacassandra/vue3-progressbar";
const useStore = defineStore("main", {
  state() {
    return {
      author: "Picasso Houessou",
      aboutMe: {
        name: "Picasso Houessou",
        birthday: "04 Avril 1998",
        address: "Fifadji, Cotonou R\xE9p. B\xE9nin",
        zipCode: "none",
        email: "houessoupicasso@yahoo.fr",
        phone: "+29995718340",
        website: document.baseURI
      },
      alertMessage: {
        show: false,
        message: ""
      }
    };
  },
  actions: {
    updateAlertMessage(amount) {
      if (typeof amount == "string") {
        this.alertMessage.show = true;
        this.alertMessage.message = amount;
      } else {
        this.alertMessage.show = true;
        this.alertMessage.message = amount.message;
      }
    },
    closeAlert(context) {
      this.alertMessage.show = false;
      this.alertMessage.message = "";
    }
  }
});
var App_vue_vue_type_style_index_0_lang = "";
function block0$a(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "head": {
          "keywords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bienvenue sur mon site personnel. Je m'appelle Picasso Houessou"]);
          }
        }
      },
      "en": {
        "head": {
          "keywords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bienvenue sur mon site personnel. Je m'appelle Picasso Houessou"]);
          }
        }
      }
    }
  });
}
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$h = {
  name: "App",
  components: {},
  computed: {
    alertMessage() {
      return this.store.alertMessage;
    }
  },
  setup() {
    const store = useStore();
    const { locale, t } = useI18n({
      inheritLocale: true
    });
    useHead({
      title: "Picasso Houessou ",
      meta: [
        {
          name: `author`,
          content: store.author
        },
        {
          name: `keywords`,
          content: t("head.keywords")
        },
        {
          name: `description`,
          content: t("head.description")
        }
      ]
    });
    return {
      store,
      t
    };
  },
  mounted() {
    this.$Progress.finish();
  },
  updated() {
  },
  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== void 0) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
  methods: {
    closeAlert(e) {
      e.preventDefault();
      this.store.closeAlert();
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_vue_progress_bar = resolveComponent("vue-progress-bar");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(ssrRenderComponent(_component_vue_progress_bar, null, null, _parent));
  _push(`</div>`);
}
if (typeof block0$a === "function")
  block0$a(_sfc_main$h);
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$f]]);
var HomeNavBar_vue_vue_type_style_index_0_scoped_true_lang = "";
function block0$9(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "menu": {
          "menu": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Menu"]);
          },
          "home": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Accueil"]);
          },
          "about": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\xC0 Propos"]);
          },
          "services": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Services"]);
          },
          "resume": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["R\xE9sum\xE9"]);
          },
          "portfolio": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Portfolio"]);
          },
          "contact": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Contact"]);
          }
        }
      },
      "en": {
        "menu": {
          "menu": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Menu"]);
          },
          "home": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Home"]);
          },
          "about": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["About Me"]);
          },
          "services": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Services"]);
          },
          "resume": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Summary"]);
          },
          "portfolio": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Portfolio"]);
          },
          "contact": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Contact"]);
          }
        }
      }
    }
  });
}
const _sfc_main$g = {
  name: "NavBar",
  mounted() {
    burgerMenu$1();
    scrollWindow$1();
  },
  setup() {
    const { t, locale, availableLocales, d } = useI18n(
      {
        inheritLocale: true
      }
    );
    return { t, locale, availableLocales };
  }
};
var burgerMenu$1 = function() {
  $$1("body").on("click", ".js-fh5co-nav-toggle", function(event) {
    event.preventDefault();
    if ($$1("#ftco-nav").is(":visible")) {
      $$1(this).removeClass("active");
    } else {
      $$1(this).addClass("active");
    }
  });
};
var scrollWindow$1 = function() {
  $$1(window).scroll(function() {
    var $w = $$1(this), st = $w.scrollTop(), navbar = $$1(".ftco_navbar"), sd = $$1(".js-scroll-wrap");
    if (st > 150) {
      if (!navbar.hasClass("scrolled")) {
        navbar.addClass("scrolled");
      }
    }
    if (st < 150) {
      if (navbar.hasClass("scrolled")) {
        navbar.removeClass("scrolled sleep");
      }
    }
    if (st > 350) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }
      if (sd.length > 0) {
        sd.addClass("sleep");
      }
    }
    if (st < 350) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
      if (sd.length > 0) {
        sd.removeClass("sleep");
      }
    }
  });
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target",
    id: "ftco-navbar"
  }, _attrs))} data-v-1c48f798><div class="container" data-v-1c48f798>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home" },
    class: "navbar-brand"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-1c48f798${_scopeId}>p</span>icassoHouessou`);
      } else {
        return [
          createVNode("span", null, "p"),
          createTextVNode("icassoHouessou")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" data-target="#ftco-nav" data-toggle="collapse" type="button" data-v-1c48f798><span class="oi oi-menu" data-v-1c48f798></span> ${ssrInterpolate($setup.t("menu.menu"))}</button><div class="collapse navbar-collapse" id="ftco-nav" data-v-1c48f798><ul class="navbar-nav nav ml-auto" data-v-1c48f798><li class="nav-item" data-v-1c48f798>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#home-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-1c48f798${_scopeId}>${ssrInterpolate($setup.t("menu.home"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-1c48f798>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#about-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-1c48f798${_scopeId}>${ssrInterpolate($setup.t("menu.about"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.about")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-1c48f798>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#resume-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-1c48f798${_scopeId}>${ssrInterpolate($setup.t("menu.resume"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.resume")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-1c48f798>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#services-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-1c48f798${_scopeId}>${ssrInterpolate($setup.t("menu.services"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.services")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-1c48f798>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Portfolio" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-1c48f798${_scopeId}>${ssrInterpolate($setup.t("menu.portfolio"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.portfolio")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-1c48f798>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Contact" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span data-v-1c48f798${_scopeId}>${ssrInterpolate($setup.t("menu.contact"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.contact")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item" data-v-1c48f798><form data-v-1c48f798><select class="custom-select" data-v-1c48f798><option value="fr" data-v-1c48f798>Fran\xE7ais</option><option value="en" data-v-1c48f798>English</option></select></form></li></ul></div></div></nav>`);
}
if (typeof block0$9 === "function")
  block0$9(_sfc_main$g);
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/HomeNavBar.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var NavBar$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-1c48f798"]]);
var Footer_vue_vue_type_style_index_0_lang = "";
function block0$8(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xC0 Propos"]);
        },
        "\xC0 Propos": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xC0 Propos"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Je suis un jeune informaticien administrateur syst\xE8me et r\xE9seau. Je suis \xE9galement un d\xE9veloppeur web.."]);
        },
        "Liens utiles": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Liens utiles"]);
        },
        "Accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Accueil"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Services"]);
        },
        "Projets": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Projets"]);
        },
        "Contact": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contact"]);
        },
        "R\xE9seau": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["R\xE9seau"]);
        },
        "D\xE9veloppement Web": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["D\xE9veloppement Web"]);
        },
        "D\xE9veloppement d'Application": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["D\xE9veloppement d'Application"]);
        },
        "Formation": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["D\xE9veloppement Web"]);
        },
        "Tous les droits r\xE9serv\xE9s": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tous les droits r\xE9serv\xE9s"]);
        }
      },
      "en": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["About Us"]);
        },
        "\xC0 Propos": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["About Us"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["I am a young computer scientist system and network administrator. I am also a web developer."]);
        },
        "Liens utiles": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Useful Links"]);
        },
        "Accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Services"]);
        },
        "Projets": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Projects"]);
        },
        "Contact": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contact Us"]);
        },
        "R\xE9seau": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Network"]);
        },
        "D\xE9veloppement Web": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Web Development "]);
        },
        "D\xE9veloppement d'Application": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Application Development"]);
        },
        "Formation": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Training"]);
        },
        "Tous les droits r\xE9serv\xE9s": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["All rights reserved"]);
        }
      }
    }
  });
}
const _sfc_main$f = {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
      contact: "+22995718340",
      email: "houessoupicasso@yahoo.fr",
      address: "Fifadji, Cotonou R\xE9p. B\xE9nin"
    };
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true
    });
    return { t };
  },
  methods: {
    click() {
      return false;
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "ftco-footer ftco-section" }, _attrs))}><div class="container"><div class="row mb-5"><div class="col-md"><div class="ftco-footer-widget mb-4"><h2 class="ftco-heading-2">${ssrInterpolate($setup.t("title"))}</h2><p>${ssrInterpolate($setup.t("description"))}</p><ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5"><li class="ftco-animate"><a href="http://github.com/picassoHouessou"><span class="icon-github"></span></a></li><li class="ftco-animate"><a href="www.facebook.com/picasso.houessou.5"><span class="icon-facebook"></span></a></li></ul></div></div><div class="col-md"><div class="ftco-footer-widget mb-4 ml-md-4"><h2 class="ftco-heading-2">${ssrInterpolate($setup.t("Liens utiles"))}</h2><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "Home" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("Accueil"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("Accueil")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "Home", hash: "#about-section" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("\xC0 Propos"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("\xC0 Propos")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "Home", hash: "#services-section" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("Services"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("Services")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#projects-section" },
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("Projets"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("Projets")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Contact" },
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>Contact `);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode("Contact ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-md"><div class="ftco-footer-widget mb-4"><h2 class="ftco-heading-2">Services</h2><ul class="list-unstyled"><li>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "Home", hash: "#services-section" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("R\xE9seau"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("R\xE9seau")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#services-section" },
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("D\xE9veloppement Web"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("D\xE9veloppement Web")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#services-section" },
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("D\xE9veloppement d'Application"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("D\xE9veloppement d'Application")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#services-section" },
    href: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="icon-long-arrow-right mr-2"${_scopeId}></span>${ssrInterpolate($setup.t("Formation"))}`);
      } else {
        return [
          createVNode("span", { class: "icon-long-arrow-right mr-2" }),
          createTextVNode(toDisplayString($setup.t("Formation")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-md"><div class="ftco-footer-widget mb-4"><h2 class="ftco-heading-2">${ssrInterpolate($setup.t("Contact"))}</h2><div class="block-23 mb-3"><ul><li><span class="icon icon-map-marker"></span><span class="text">${ssrInterpolate($data.address)}</span></li><li><a href="#"><span class="icon icon-phone"></span><span class="text">${ssrInterpolate($data.contact)}</span></a></li><li><a${ssrRenderAttr("href", "mailto:" + $data.email)}><span class="icon icon-envelope"></span><span class="text">${ssrInterpolate($data.email)}</span></a></li></ul></div></div></div></div><div class="row"><div class="col-md-12 text-center"><p> Copyright \xA9 2021 ${ssrInterpolate($setup.t("Tous les droits r\xE9serv\xE9s"))} | <a href="https://picassohouessou.com">picassoHouessou</a></p></div></div></div></footer>`);
}
if (typeof block0$8 === "function")
  block0$8(_sfc_main$f);
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var Footer = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$d]]);
var $ = $$1;
const _sfc_main$e = {
  name: "Skill",
  props: {
    skillName: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true,
      default: 0
    }
  },
  mounted() {
    loadPercentage();
  }
};
const loadPercentage = function() {
  $(".progress").each(function() {
    var value = $(this).attr("data-value");
    var left = $(this).find(".progress-left .progress-bar");
    var right = $(this).find(".progress-right .progress-bar");
    if (value > 0) {
      if (value <= 50) {
        right.css("transform", "rotate(" + percentageToDegrees(value) + "deg)");
      } else {
        right.css("transform", "rotate(180deg)");
        left.css("transform", "rotate(" + percentageToDegrees(value - 50) + "deg)");
      }
    }
  });
  function percentageToDegrees(percentage) {
    return percentage / 100 * 360;
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-lg-4 mb-4" }, _attrs))}><div class="bg-white rounded-lg shadow p-4"><h2 class="h5 font-weight-bold text-center mb-4">${ssrInterpolate($props.skillName)}</h2><div class="progress mx-auto"${ssrRenderAttr("data-value", +$props.percentage)}><span class="progress-left"><span class="progress-bar border-primary"></span></span><span class="progress-right"><span class="progress-bar border-primary"></span></span><div class="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"><div class="h2 font-weight-bold">${ssrInterpolate(+$props.percentage)}<sup class="small">%</sup></div></div></div></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Skill.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var Skill = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$c]]);
axios.defaults.baseURL = "https://backend.picassohouessou.com/api";
const _sfc_main$d = {
  name: "SkillBar",
  props: {
    skillName: {
      type: String,
      required: true
    },
    percentage: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-md-6 animate-box" }, _attrs))}><div class="progress-wrap ftco-animate"><h3>${ssrInterpolate($props.skillName)}</h3><div class="progress"><div aria-valuemax="100" aria-valuemin="0"${ssrRenderAttr("aria-valuenow", +$props.percentage)} class="progress-bar color-1" role="progressbar" style="${ssrRenderStyle("width:" + $props.percentage + "%;")}"><span>${ssrInterpolate($props.percentage)}%</span></div></div></div></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SkillBar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var SkillBar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$c = {
  name: "ServiceCard",
  props: {
    cName: {
      required: true,
      type: String
    },
    description: {
      required: false,
      default: "",
      type: String
    },
    icon: {
      required: false,
      default: "flaticon-analysis",
      type: String
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-md-4 text-center d-flex ftco-animate" }, _attrs))}><a href="#" class="services-1 shadow"><span class="icon"><i class="${ssrRenderClass($props.icon)}"></i></span><div class="desc"><h3 class="mb-5">${ssrInterpolate($props.cName)}</h3><p>${ssrInterpolate($props.description)}</p></div></a></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ServiceCard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var ServiceCard = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$b = {
  name: "PortfolioItem",
  data() {
    return {};
  },
  props: [
    "url",
    "title",
    "image",
    "category"
  ],
  methods: {
    click(target) {
      target.preventDefault();
      this.$router.push({ name: "PortfolioShow", params: { url: this.url } });
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "project img ftco-animate d-flex justify-content-center align-items-center",
    style: { "background-image": "url(../assets/images/portfolio/" + $props.image + ")", "backround-size": "cover", "background-repeat": "no-repeat", "cursor": "pointer" }
  }, _attrs))}><div class="overlay"></div><div class="text text-center p-4"><h3><a${ssrRenderAttr("href", $props.url)}>${ssrInterpolate($props.title)}</a></h3><span>${ssrInterpolate($props.category)}</span></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PortfolioItem.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var PortfolioItem = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$9]]);
var Home_vue_vue_type_style_index_0_lang = "";
function block0$7(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "head": {
          "keywords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bienvenue sur mon site. Je suis un jeune d\xE9veloppeur et administrateur r\xE9seau informatique"]);
          }
        },
        "hero": {
          "web": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["D\xE9veloppeur Web."]);
          },
          "network": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Administrateur R\xE9seau."]);
          },
          "application": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["D\xE9veloppeur Application de Bureau"]);
          }
        },
        "myName": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Salut!Je m'appelle"]);
        },
        "Je suis un": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Je suis un"]);
        },
        "aboutMe": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\xC0 Propos"]);
          },
          "subtitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\xC0 Propos de moi"]);
          },
          "about": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Je suis un passionn\xE9 de l\u2019informatique. J\u2019ai \xE9tudi\xE9 l\u2019administration des Syst\xE8mes et R\xE9seaux Informatiques."]);
          }
        },
        "Nom :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nom :"]);
        },
        "Date de Naissance:": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date de Naissance:"]);
        },
        "Adresse :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Adresse :"]);
        },
        "Email :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Email : "]);
        },
        "T\xE9l\xE9phone :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["T\xE9l\xE9phone"]);
        },
        "Education": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Education"]);
        },
        "Exp\xE9riences": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Exp\xE9riences"]);
        },
        "Comp\xE9tences": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Comp\xE9tences"]);
        },
        "T\xE9l\xE9charger mon CV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["T\xE9l\xE9charger mon CV"]);
        },
        "Licence en Informatique de Gestion": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        },
        "education": {
          "bepc": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Brevet d'Etude du Premier Cycle"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coll\xE8ge d\u2019Enseignement G\xE9n\xE9ral Albarika"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Le CEG Albarika est situ\xE9 dans la ville de Parakou, R\xE9publique du B\xE9nin.J'y ai obtenu mon BEPC"]);
            }
          },
          "bac": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Baccalaur\xE9at Scientifique(s\xE9rie D)"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coll\xE8ge d\u2019Enseignement G\xE9n\xE9ral Albarika"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Le CEG Albarika est situ\xE9 dans la ville de Parakou, R\xE9publique du B\xE9nin. J'y ai obtenu mon BAC"]);
            }
          },
          "licence": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Licence en Informatique de Gestion"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ENEAM UAC"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Durant 3 ann\xE9es j'ai \xE9tudi\xE9 l'Informatique de Gestion et en fin de cycle je me suis sp\xE9cialis\xE9 en Administration des R\xE9seaux Informatiques"]);
            }
          }
        },
        "experience": {
          "jeunesseInstitut": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Formateur"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Jeunesse Institut"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A dispens\xE9 des cours en informatique g\xE9n\xE9rale"]);
            }
          },
          "hgtech": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["D\xE9veloppeur Wordpress"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Stage : maintenance, administration sous Windows Server, d\xE9veloppement de site web en PHP et avec Wordpress"]);
            }
          },
          "jscom": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["D\xE9veloppeur PHP"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["JSCOM BENIN"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Stage : atelier de formation, pr\xE9paration et r\xE9daction de m\xE9moire de fin d\u2019\xE9tude pour l\u2019obtention de la licence"]);
            }
          },
          "self": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Formateur"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A son propre compte"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A dispens\xE9 des cours en informatique g\xE9n\xE9rale"]);
            }
          }
        },
        "skill": {
          "php": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["PHP"]);
          },
          "javascript": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Javascript"]);
          },
          "cpp": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["C++"]);
          },
          "windowsServer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Windows Server"]);
          },
          "linuxServer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Linux Server"]);
          },
          "virtualisation": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Virtualisation et Conteneur"]);
          },
          "symfony": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Symfony"]);
          },
          "vuejs": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Vue.js"]);
          },
          "nodejs": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["NodeJS"]);
          },
          "qt": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Qt"]);
          },
          "wordpress": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Wordpress"]);
          },
          "seo": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["SEO"]);
          }
        },
        "services": {
          "brief": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Services"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Services"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mes comp\xE9tences et les services que j'offre"]);
            }
          },
          "network": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["r\xE9seau"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Installation et configuration de r\xE9seau de PME."]);
            }
          },
          "web": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["D\xE9veloppement Web"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Je con\xE7ois tout type de site web."]);
            }
          },
          "desktop": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["D\xE9veloppement d'application"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["D\xE9veloppement d'applications de bureaux multiplateforme."]);
            }
          },
          "training": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Formation"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Apprentissage de l'informatique bureautique et de la cr\xE9ation de site web."]);
            }
          }
        },
        "Accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Accueil"]);
        },
        "Mes Projets": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mes Projets"]);
        },
        "Quelques r\xE9alisations de Picasso": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quelques r\xE9alisations de Picasso"]);
        },
        "Voir Mes R\xE9alisations": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Voir Mes R\xE9alisations"]);
        },
        "contact": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Je suis <span>Disponible</span> en freelance"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tr\xE8s ouvert je suis disponible pour travailler en \xE9quipe ou en solo vos projets."]);
          },
          "button": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Me Contacter"]);
          }
        }
      },
      "en": {
        "head": {
          "keywords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Welcome to my website. I am a young developer and network administrator"]);
          }
        },
        "hero": {
          "web": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Web Developer."]);
          },
          "network": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Network Administrator."]);
          },
          "application": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Desktop Application Developer"]);
          }
        },
        "myName": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hi! My name is"]);
        },
        "Je suis un": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["I am a"]);
        },
        "aboutMe": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["About Me"]);
          },
          "subtitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["About Me"]);
          },
          "about": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["I am passionate about computers. I studied Computer Systems and Networks Administration."]);
          }
        },
        "Nom :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name:"]);
        },
        "Date de Naissance:": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date of Birth:"]);
        },
        "Adresse :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Address:"]);
        },
        "Email :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Email:"]);
        },
        "T\xE9l\xE9phone :": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Phone"]);
        },
        "Education": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Education"]);
        },
        "Exp\xE9riences": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Experiences"]);
        },
        "Comp\xE9tences": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Skills"]);
        },
        "T\xE9l\xE9charger mon CV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download my resume"]);
        },
        "Licence en Informatique de Gestion": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        },
        "education": {
          "bepc": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["BEPC (former examination at the end of the first stage of secondary education)"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coll\xE8ge d\u2019Enseignement G\xE9n\xE9ral Albarika (Secondary School)"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["The CEG Albarika is located in the city of Parakou, Republic of Benin, where I obtained my BEPC."]);
            }
          },
          "bac": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Scientific Baccalaureate (series D)"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coll\xE8ge d\u2019Enseignement G\xE9n\xE9ral Albarika (Secondary School)"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["CEG Albarika is located in the city of Parakou, Republic of Benin. I obtained my baccalaureate there"]);
            }
          },
          "licence": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Bachelor's degree in Computer Science"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ENEAM UAC"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["During 3 years I studied Computer Management and at the end of the cycle I specialized in Computer Network Administration"]);
            }
          }
        },
        "experience": {
          "jeunesseInstitut": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Trainer"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Jeunesse Institut"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Taught courses in general computer science"]);
            }
          },
          "hgtech": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Wordpress Developer"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Internship: maintenance, administration under Windows Server, website development in PHP and with Wordpress"]);
            }
          },
          "jscom": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["PHP Developer"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["JSCOM BENIN"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Internship: training workshop, preparation and writing of thesis for the degree"]);
            }
          },
          "self": {
            "date": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Trainer"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Self-employed"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Taught courses in general computer science"]);
            }
          }
        },
        "skill": {
          "php": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["PHP"]);
          },
          "javascript": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Javascript"]);
          },
          "cpp": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["C++"]);
          },
          "windowsServer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Windows Server"]);
          },
          "linuxServer": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Linux Server"]);
          },
          "virtualisation": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Virtualization & Container"]);
          },
          "symfony": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Symfony"]);
          },
          "vuejs": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Vue.js"]);
          },
          "nodejs": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["NodeJS"]);
          },
          "qt": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Qt"]);
          },
          "wordpress": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Wordpress"]);
          },
          "seo": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["SEO"]);
          }
        },
        "services": {
          "brief": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Services"]);
            },
            "subtitle": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Services"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["My skills and the services I offer"]);
            }
          },
          "network": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Network"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Installation and configuration of SME network."]);
            }
          },
          "web": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Web Development"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["I design any type of website."]);
            }
          },
          "desktop": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Application development"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Development of cross-platform desktop applications."]);
            }
          },
          "training": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Training"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Learn how to use computers and create a website."]);
            }
          }
        },
        "Accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home"]);
        },
        "Mes Projets": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["My Projects"]);
        },
        "Quelques r\xE9alisations de Picasso": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Some of Picasso's achievements"]);
        },
        "Voir Mes R\xE9alisations": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["See My Work"]);
        },
        "contact": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["I am <span>Available</span> in freelance"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Very open-minded I am available to work in team or solo your projects."]);
          },
          "button": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Contact Us"]);
          }
        }
      }
    }
  });
}
const CV_URL = "https://backend.picassohouessou.com/cv/download";
const _sfc_main$a = {
  name: "Home",
  components: {
    PortfolioItem,
    ServiceCard,
    SkillBar,
    Footer,
    NavBar: NavBar$1,
    Skill,
    VueWriter
  },
  setup() {
    console.log(this);
    const { locale, t } = useI18n({
      inheritLocale: true
    });
    useHead({
      title: "Picasso Houessou | Accueil",
      meta: [
        {
          name: `author`,
          content: `Picasso Houessou`
        },
        {
          name: `keywords`,
          content: ``
        },
        {
          name: `description`,
          content: t("head.description")
        }
      ]
    });
    return { t };
  },
  mounted() {
    goHere();
    fullHeight();
  },
  data() {
    return {
      aboutMe: {
        name: "Picasso Houessou",
        birthday: "04 Avril 1998",
        address: "Fifadji, Cotonou R\xE9p. B\xE9nin",
        zipCode: "none",
        email: "houessoupicasso@yahoo.fr",
        phone: "+29995718340"
      },
      item: {
        url: CV_URL
      },
      portfolios: [
        {
          "url": "https://annefornet-immobilier.wimtec.fun/",
          "image": "anne-marie-fornet.jpg",
          "title": "Anne Marie Fornet",
          "category": "Immobilier"
        },
        {
          "url": "https://tableaupeinturesaratamjidi.wimtec.solutions/",
          "image": "art-lover-for-ever.jpg",
          "title": "Art Lover",
          "category": "Artiste"
        },
        {
          "url": "https://sylvielitaudon.wimtec.fun/",
          "image": "sylvielitaudon.jpg",
          "title": "Sylvie Litaudon",
          "category": "Ecole de danse"
        }
      ]
    };
  },
  methods: {
    downloadMyCv({ url, label }) {
      this.$Progress.start();
      axios.get(url + "?lang=" + this.$i18n.locale, { responseType: "blob" }).then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = label;
        link.click();
        URL.revokeObjectURL(link.href);
        this.$Progress.finish();
      }).catch((error) => {
        console.log(error);
        this.$Progress.finish();
      });
    }
  }
};
var goHere = function() {
  $$1(".mouse-icon").on("click", function(event) {
    event.preventDefault();
    $$1("html,body").animate({
      scrollTop: $$1(".goto-here").offset().top
    }, 500, "easeInOutExpo");
    return false;
  });
};
var fullHeight = function() {
  $$1(".js-fullheight").css("height", $$1(window).height());
  $$1(window).resize(function() {
    $$1(".js-fullheight").css("height", $$1(window).height());
  });
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  const _component_VueWriter = resolveComponent("VueWriter");
  const _component_Skill = resolveComponent("Skill");
  const _component_SkillBar = resolveComponent("SkillBar");
  const _component_ServiceCard = resolveComponent("ServiceCard");
  const _component_PortfolioItem = resolveComponent("PortfolioItem");
  const _component_router_link = resolveComponent("router-link");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<section class="hero-wrap js-fullheight" id="home-section"><div class="overlay"></div><div class="container"><div class="row no-gutters slider-text js-fullheight justify-content-center align-items-center"><div class="col-lg-8 col-md-6 ftco-animate d-flex align-items-center"><div class="text text-center"><span class="subheading">${ssrInterpolate($setup.t("myName"))}</span><h1>Picasso Houessou</h1><div class="d-inline-flex"><h2>${ssrInterpolate($setup.t("Je suis un"))}</h2>`);
  _push(ssrRenderComponent(_component_VueWriter, {
    class: "",
    array: [$setup.t("hero.web"), $setup.t("hero.network"), $setup.t("hero.application")]
  }, null, _parent));
  _push(`</div></div></div></div></div><div class="mouse"><a class="mouse-icon" href="#resume-section"><div class="mouse-wheel"><span class="ion-ios-arrow-round-down"></span></div></a></div></section><section class="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section"><div class="container"><div class="row d-flex no-gutters"><div class="col-md-6 col-lg-6 d-flex"><div class="img-about img d-flex align-items-stretch"><div class="overlay"></div><div class="img d-flex align-self-stretch align-items-center photo-picasso" style="${ssrRenderStyle({ "background-image": "url('/assets/images/picasso/home-about.png')", "background-size": "contain" })}"></div></div></div><div class="col-md-6 col-lg-6 pl-md-5 py-5"><div class="row justify-content-start pb-3"><div class="col-md-12 heading-section ftco-animate"><h1 class="big">${ssrInterpolate($setup.t("\xC0 Propos"))}</h1><h2 class="mb-4">${ssrInterpolate($setup.t("aboutMe.subtitle"))}</h2><p>${ssrInterpolate($setup.t("aboutMe.about"))}</p><ul class="about-info mt-4 px-md-0 px-2"><li class="d-flex"><span>${ssrInterpolate($setup.t("Nom :"))}</span> <span>${ssrInterpolate($data.aboutMe.name)}</span></li><li class="d-flex"><span>${ssrInterpolate($setup.t("Date de Naissance:"))}</span> <span>${ssrInterpolate($data.aboutMe.birthday)}</span></li><li class="d-flex"><span>${ssrInterpolate($setup.t("Adresse :"))}</span> <span>${ssrInterpolate($data.aboutMe.address)}</span></li><li class="d-flex"><span>${ssrInterpolate($setup.t("Email :"))}</span> <span>${ssrInterpolate($data.aboutMe.email)}</span></li><li class="d-flex"><span>${ssrInterpolate($setup.t("T\xE9l\xE9phone :"))}</span> <span>${ssrInterpolate($data.aboutMe.phone)}</span></li></ul></div></div><div class="counter-wrap ftco-animate d-flex mt-md-3"><div class="text"><p><a class="btn btn-primary py-3 px-3" id="downloadMyCv"${ssrRenderAttr("href", $data.item.url)}>${ssrInterpolate($setup.t("T\xE9l\xE9charger mon CV"))}</a></p></div></div></div></div></div></section><section class="ftco-section ftco-no-pb goto-here" id="resume-section"><div class="container"><div class="row"><div class="col-md-3"><nav id="navi"><ul><li><a href="#page-1">${ssrInterpolate($setup.t("Education"))}</a></li><li><a href="#page-2">${ssrInterpolate($setup.t("Exp\xE9riences"))}</a></li><li><a href="#page-3">${ssrInterpolate($setup.t("Comp\xE9tences"))}</a></li></ul></nav></div><div class="col-md-9"><div class="page one" id="page-1"><h2 class="heading">${ssrInterpolate($setup.t("Education"))}</h2><div class="resume-wrap d-flex ftco-animate"><div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-ideas"></span></div><div class="text pl-3"><span class="date">2018-2019</span><h2>${ssrInterpolate($setup.t("education.licence.title"))}</h2><span class="position">${ssrInterpolate($setup.t("education.licence.subtitle"))}</span><p>${ssrInterpolate($setup.t("education.licence.description"))}</p></div></div><div class="resume-wrap d-flex ftco-animate"><div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-ideas"></span></div><div class="text pl-3"><span class="date">2015-2016</span><h2>${ssrInterpolate($setup.t("education.bac.title"))}</h2><span class="position">${ssrInterpolate($setup.t("education.bac.subtitle"))}</span><p>${ssrInterpolate($setup.t("education.bac.description"))}</p></div></div></div><div class="page two" id="page-2"><h2 class="heading">${ssrInterpolate($setup.t("Exp\xE9riences"))}</h2><div class="resume-wrap d-flex ftco-animate"><div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-ideas"></span></div><div class="text pl-3"><span class="date">2020-2020</span><h2>${ssrInterpolate($setup.t("experience.jeunesseInstitut.title"))}</h2><span class="position">${ssrInterpolate($setup.t("experience.jeunesseInstitut.subtitle"))}</span><p>${ssrInterpolate($setup.t("experience.jeunesseInstitut.description"))}.</p></div></div><div class="resume-wrap d-flex ftco-animate"><div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-ideas"></span></div><div class="text pl-3"><span class="date">2020-2020</span><h2>${ssrInterpolate($setup.t("experience.self.title"))}</h2><span class="position">${ssrInterpolate($setup.t("experience.self.subtitle"))}</span><p>${ssrInterpolate($setup.t("experience.self.description"))}</p></div></div><div class="resume-wrap d-flex ftco-animate"><div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-ideas"></span></div><div class="text pl-3"><span class="date">2019-2020</span><h2>${ssrInterpolate($setup.t("experience.jscom.title"))}</h2><span class="position">${ssrInterpolate($setup.t("experience.jscom.subtitle"))}</span><p>${ssrInterpolate($setup.t("experience.jscom.description"))}.</p></div></div><div class="resume-wrap d-flex ftco-animate"><div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-ideas"></span></div><div class="text pl-3"><span class="date">2018-2019</span><h2>${ssrInterpolate($setup.t("experience.hgtech.title"))}</h2><span class="position">${ssrInterpolate($setup.t("experience.hgtech.subtitle"))}</span><p>${ssrInterpolate($setup.t("experience.hgtech.description"))}</p></div></div></div><div class="page three" id="page-3"><h2 class="heading">${ssrInterpolate($setup.t("Comp\xE9tences"))}</h2><div class="row progress-circle mb-5">`);
  _push(ssrRenderComponent(_component_Skill, {
    skillName: $setup.t("skill.php"),
    percentage: 80
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skill, {
    skillName: $setup.t("skill.javascript"),
    percentage: 70
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skill, {
    skillName: $setup.t("skill.cpp"),
    percentage: 60
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skill, {
    skillName: $setup.t("skill.windowsServer"),
    percentage: 70
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skill, {
    skillName: $setup.t("skill.linuxServer"),
    percentage: 75
  }, null, _parent));
  _push(ssrRenderComponent(_component_Skill, {
    skillName: $setup.t("skill.virtualisation"),
    percentage: 70
  }, null, _parent));
  _push(`</div><div class="row">`);
  _push(ssrRenderComponent(_component_SkillBar, {
    skillName: $setup.t("skill.symfony"),
    percentage: 75
  }, null, _parent));
  _push(ssrRenderComponent(_component_SkillBar, {
    "skill-name": $setup.t("skill.vuejs"),
    percentage: 65
  }, null, _parent));
  _push(ssrRenderComponent(_component_SkillBar, {
    "skill-name": $setup.t("skill.nodejs"),
    percentage: 50
  }, null, _parent));
  _push(ssrRenderComponent(_component_SkillBar, {
    "skill-name": $setup.t("skill.qt"),
    percentage: 60
  }, null, _parent));
  _push(ssrRenderComponent(_component_SkillBar, {
    "skill-name": $setup.t("skill.wordpress"),
    percentage: 70
  }, null, _parent));
  _push(ssrRenderComponent(_component_SkillBar, {
    "skill-name": $setup.t("skill.seo"),
    percentage: 60
  }, null, _parent));
  _push(`</div></div></div></div></div></section><section class="ftco-section" id="services-section"><div class="container-fluid px-md-5"><div class="row justify-content-center py-5 mt-5"><div class="col-md-12 heading-section text-center ftco-animate"><h1 class="big big-2">${ssrInterpolate($setup.t("services.brief.title"))}</h1><h2 class="mb-4">${ssrInterpolate($setup.t("services.brief.title"))}</h2><p>${ssrInterpolate($setup.t("services.brief.description"))}</p></div></div><div class="row">`);
  _push(ssrRenderComponent(_component_ServiceCard, {
    "c-name": $setup.t("services.network.title"),
    description: $setup.t("services.network.description")
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceCard, {
    "c-name": $setup.t("services.web.title"),
    icon: "flaticon-ideas",
    description: $setup.t("services.web.description")
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceCard, {
    "c-name": $setup.t("services.desktop.title"),
    icon: "flaticon-innovation",
    description: $setup.t("services.desktop.title")
  }, null, _parent));
  _push(ssrRenderComponent(_component_ServiceCard, {
    class: "offset-md-4",
    "c-name": $setup.t("services.training.title"),
    icon: "flaticon-idea",
    description: $setup.t("services.training.description")
  }, null, _parent));
  _push(`</div></div></section><section class="ftco-section ftco-project" id="projects-section"><div class="container-fluid px-md-0"><div class="row no-gutters justify-content-center pb-5"><div class="col-md-12 heading-section text-center ftco-animate"><h1 class="big big-2">${ssrInterpolate($setup.t("Accueil"))}</h1><h2 class="mb-4">${ssrInterpolate($setup.t("Mes Projets"))}</h2><p>${ssrInterpolate($setup.t("Quelques r\xE9alisations de Picasso"))}</p></div></div><div class="row no-gutters"><!--[-->`);
  ssrRenderList($data.portfolios, (portfolio2) => {
    _push(`<div class="col-md-4">`);
    _push(ssrRenderComponent(_component_PortfolioItem, {
      title: portfolio2.title,
      url: portfolio2.url,
      category: portfolio2.category,
      image: portfolio2.image
    }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><div class="d-flex justify-content-center align-items-center p-4">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Portfolio" },
    class: "btn btn-primary py-3 px-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.t("Voir Mes R\xE9alisations"))}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.t("Voir Mes R\xE9alisations")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></section><section class="ftco-section ftco-hireme img" style="${ssrRenderStyle({ "background-image": "url(images/bg_1.jpg)" })}"><div class="overlay"></div><div class="container"><div class="row justify-content-center"><div class="col-md-7 ftco-animate text-center"><h2>${$setup.t("contact.title")}</h2><p>${ssrInterpolate($setup.t("contact.description"))}</p><p class="mb-0">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Contact", hash: "#contactUsForm" },
    class: "btn btn-primary py-3 px-5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.t("contact.button"))}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.t("contact.button")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div></div></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
if (typeof block0$7 === "function")
  block0$7(_sfc_main$a);
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$8]]);
const portfolios = [
  {
    "url": "https://alexassystemes.wimtec.solutions",
    "image": "alexas-systemes.jpg",
    "title": "Alexas Syst\xE8me",
    "category": "B\xE2timent"
  },
  {
    "url": "https://tableaupeinturesaratamjidi.wimtec.solutions/",
    "image": "art-lover-for-ever.jpg",
    "title": "Art Lover",
    "category": "Artiste"
  },
  {
    "url": "https://annefornet-immobilier.wimtec.fun/",
    "image": "anne-marie-fornet.jpg",
    "title": "Anne Marie Fornet",
    "category": "Immobilier"
  },
  {
    "url": "https://assises-et-toiles-dejouy.wimtec.fun/",
    "image": "assises-toiles-dejouy.jpg",
    "title": "Assises & Toile Dejouy",
    "category": "Artiste"
  },
  {
    "url": "https://autoecoleladestrousse.wimtec.solutions",
    "image": "auto-ecole-la-destrousse-conduite.jpg",
    "title": "Destrouss' Conduite",
    "category": "Auto Ecole"
  },
  {
    "url": "https://autosprestige91.wimtec.solutions/",
    "image": "autos-prestige-91.jpg",
    "title": "Auto Prestige",
    "category": "Auto"
  },
  {
    "url": "https://boldnect.com",
    "image": "boldnect.jpg",
    "title": "Boldnect",
    "category": "Investissement"
  },
  {
    "url": "https://cshcoworking.wimtec.solutions/",
    "image": "csh-coworking.jpg",
    "title": "CSH Coworking",
    "category": "Coworking"
  },
  {
    "url": "https://ecoledelarespiration.wimtec.fun/",
    "image": "ecole-de-la-respiration.jpg",
    "title": "Ecole de la respiration",
    "category": "Ecole"
  },
  {
    "url": "https://jardineriechampsfleurs.wimtec.solutions/",
    "image": "la-jardinerie-champs-fleurs.jpg",
    "title": "La jardinerie champs fleurs",
    "category": "Jardin"
  },
  {
    "url": "https://patinesetjupons.wimtec.solutions/",
    "image": "patines-jupons.jpg",
    "title": "Patines & jupons",
    "category": "D\xE9coration"
  },
  {
    "url": "https://pscformation.wimtec.solutions/",
    "image": "psc-formation.jpg",
    "title": "PSC Formation",
    "category": "Formation"
  },
  {
    "url": "https://stephiepianopiano.wimtec.fun/",
    "image": "stephie-piano-piano.jpg",
    "title": "Stephie Piano Piano",
    "category": "Musique"
  },
  {
    "url": "https://sylvielitaudon.wimtec.fun/",
    "image": "sylvielitaudon.jpg",
    "title": "Sylvie Litaudon",
    "category": "Ecole de danse"
  },
  {
    "url": "https://tourisme-arc.wimtec.solutions/",
    "image": "tourisme-arc.jpg",
    "title": "Tourisme Arc",
    "category": "Tourisme"
  },
  {
    "url": "https://vignobledelaroseraie.wimtec.solutions/",
    "image": "vignoble-de-la-roseraie.jpg",
    "title": "Vignoble de la roseraie",
    "category": "Vignoble"
  }
];
function block0$6(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "Accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Accueil"]);
        },
        "Mes Projets": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mes Projets"]);
        },
        "Quelques r\xE9alisations de Picasso": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quelques r\xE9alisations de Picasso"]);
        }
      },
      "en": {
        "Accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home"]);
        },
        "Mes Projets": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["My Projects"]);
        },
        "Quelques r\xE9alisations de Picasso": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Some of Picasso's achievements"]);
        }
      }
    }
  });
}
const _sfc_main$9 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n({
      inheritLocale: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "ftco-section ftco-project",
        id: "projects-section"
      }, _attrs))}><div class="container-fluid px-md-0"><div class="row no-gutters justify-content-center pb-5"><div class="col-md-12 heading-section text-center ftco-animate"><h1 class="big big-2">${ssrInterpolate(unref(t)("Accueil"))}</h1><h2 class="mb-4">${ssrInterpolate(unref(t)("Mes Projets"))}</h2><p>${ssrInterpolate(unref(t)("Quelques r\xE9alisations de Picasso"))}</p></div></div><div class="row no-gutters"><!--[-->`);
      ssrRenderList(unref(portfolios), (portfolio2) => {
        _push(`<div class="col-md-4">`);
        _push(ssrRenderComponent(PortfolioItem, {
          title: portfolio2.title,
          url: portfolio2.url,
          category: portfolio2.category,
          image: portfolio2.image
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
if (typeof block0$6 === "function")
  block0$6(_sfc_main$9);
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Portfolio.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var NavBar_vue_vue_type_style_index_0_lang = "";
function block0$5(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "menu": {
          "menu": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Menu"]);
          },
          "home": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Accueil"]);
          },
          "about": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\xC0 Propos"]);
          },
          "services": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Services"]);
          },
          "resume": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["R\xE9sum\xE9"]);
          },
          "portfolio": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Portfolio"]);
          },
          "contact": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Contact"]);
          },
          "french": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Francais"]);
          },
          "english": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Anglais"]);
          }
        }
      },
      "en": {
        "menu": {
          "menu": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Menu"]);
          },
          "home": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Home"]);
          },
          "about": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["About Me"]);
          },
          "services": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Services"]);
          },
          "resume": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Summary"]);
          },
          "portfolio": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Portfolio"]);
          },
          "contact": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Contact"]);
          },
          "french": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["French"]);
          },
          "english": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["English"]);
          }
        }
      }
    }
  });
}
const _sfc_main$8 = {
  name: "NavBar",
  mounted() {
    burgerMenu();
    scrollWindow();
  },
  setup() {
    const { t, availableLocales, locale } = useI18n();
    return { t };
  }
};
var burgerMenu = function() {
  $$1("body").on("click", ".js-fh5co-nav-toggle", function(event) {
    event.preventDefault();
    if ($$1("#ftco-nav").is(":visible")) {
      $$1(this).removeClass("active");
    } else {
      $$1(this).addClass("active");
    }
  });
};
var scrollWindow = function() {
  $$1(window).scroll(function() {
    var $w = $$1(this), st = $w.scrollTop(), navbar = $$1(".ftco_navbar"), sd = $$1(".js-scroll-wrap");
    if (st > 150) {
      if (!navbar.hasClass("scrolled")) {
        navbar.addClass("scrolled");
      }
    }
    if (st < 150) {
      if (navbar.hasClass("scrolled")) {
        navbar.removeClass("scrolled sleep");
      }
    }
    if (st > 350) {
      if (!navbar.hasClass("awake")) {
        navbar.addClass("awake");
      }
      if (sd.length > 0) {
        sd.addClass("sleep");
      }
    }
    if (st < 350) {
      if (navbar.hasClass("awake")) {
        navbar.removeClass("awake");
        navbar.addClass("sleep");
      }
      if (sd.length > 0) {
        sd.removeClass("sleep");
      }
    }
  });
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target",
    id: "ftco-navbar"
  }, _attrs))}><div class="container">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home" },
    class: "navbar-brand"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>p</span>icassoHouessou`);
      } else {
        return [
          createVNode("span", null, "p"),
          createTextVNode("icassoHouessou")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<button aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" data-target="#ftco-nav" data-toggle="collapse" type="button"><span class="oi oi-menu"></span> Menu </button><div class="collapse navbar-collapse" id="ftco-nav"><ul class="navbar-nav nav ml-auto"><li class="nav-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#home-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($setup.t("menu.home"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#about-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($setup.t("menu.about"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.about")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#resume-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($setup.t("menu.resume"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.resume")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home", hash: "#services-section" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($setup.t("menu.services"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.services")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Portfolio" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($setup.t("menu.portfolio"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.portfolio")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Contact" },
    class: "nav-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>${ssrInterpolate($setup.t("menu.contact"))}</span>`);
      } else {
        return [
          createVNode("span", null, toDisplayString($setup.t("menu.contact")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item"><form><select class="custom-select"><option value="fr">${ssrInterpolate($setup.t("menu.french"))}</option><option value="en">${ssrInterpolate($setup.t("menu.english"))}</option></select></form></li></ul></div></div></nav>`);
}
if (typeof block0$5 === "function")
  block0$5(_sfc_main$8);
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NavBar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
function block0$4(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "head": {
          "keywords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Voir tous les projets que j'ai r\xE9alis\xE9"]);
          }
        }
      },
      "en": {
        "head": {
          "keywords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou."]);
          }
        }
      }
    }
  });
}
const _sfc_main$7 = {
  components: {
    Portfolio: _sfc_main$9,
    Footer,
    NavBar
  },
  setup() {
    const { t } = useI18n({
      inheritLocale: true
    });
    useHead({
      title: "Picasso Houessou | Portfolio",
      meta: [
        {
          name: `description`,
          content: t("head.description")
        }
      ]
    });
    return {
      t
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  const _component_Portfolio = resolveComponent("Portfolio", true);
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(ssrRenderComponent(_component_Portfolio, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
if (typeof block0$4 === "function")
  block0$4(_sfc_main$7);
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Portfolio.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Portfolio = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
var Loader_vue_vue_type_style_index_0_scoped_true_lang = "";
function block0$3(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "message": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["En cours de chargement..."]);
        }
      },
      "en": {
        "message": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Loading..."]);
        }
      }
    }
  });
}
const _sfc_main$6 = {
  __name: "Loader",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, t } = useI18n({
      inheritLocale: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-005b30f0><div class="loader" data-v-005b30f0></div><p class="m-2 text-center" data-v-005b30f0>${ssrInterpolate(unref(t)("message"))}</p></div>`);
    };
  }
};
if (typeof block0$3 === "function")
  block0$3(_sfc_main$6);
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Loader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Loader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-005b30f0"]]);
var PortfolioView_vue_vue_type_style_index_0_scoped_true_lang = "";
var PortfolioView_vue_vue_type_style_index_1_scoped_true_lang = "";
function block0$2(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "Pr\xE9visualisation": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Pr\xE9visualisation"]);
        }
      },
      "en": {
        "Pr\xE9visualisation": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Preview"]);
        }
      }
    }
  });
}
const _sfc_main$5 = {
  components: {
    Footer,
    NavBar,
    Loader
  },
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: true
    });
    return { t };
  },
  data() {
    return {
      isLoading: true
    };
  },
  props: ["url"],
  methods: {
    onLoad(frame) {
      this.isLoading = false;
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  const _component_Loader = resolveComponent("Loader");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-36bf7946>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<section class="ftco-section ftco-project" id="portfolio-view" data-v-36bf7946><div class="container-fluid px-md-0" data-v-36bf7946><div class="row no-gutters justify-content-center" data-v-36bf7946><div class="col-md-12 heading-section text-center ftco-animate" data-v-36bf7946><h1 class="big big-2" data-v-36bf7946>${ssrInterpolate($setup.t("Pr\xE9visualisation"))}</h1><h2 class="mb-4" data-v-36bf7946>${ssrInterpolate($setup.t("Pr\xE9visualisation"))}</h2></div></div><div class="row no-gutters" data-v-36bf7946><div class="${ssrRenderClass([{ "d-flex justify-content-center align-items-center": $data.isLoading }, "col-md-12"])}" data-v-36bf7946>`);
  if ($data.isLoading) {
    _push(ssrRenderComponent(_component_Loader, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<iframe${ssrRenderAttr("src", $props.url)} frameborder="0" width="100%" height="800" loading="eager" style="${ssrRenderStyle(!$data.isLoading ? null : { display: "none" })}" data-v-36bf7946></iframe></div></div></div></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
if (typeof block0$2 === "function")
  block0$2(_sfc_main$5);
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/PortfolioView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var PortfolioView = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-36bf7946"]]);
const _sfc_main$4 = {
  name: "ContactCard",
  props: {
    cName: {
      required: false,
      type: String
    },
    content: {
      required: false,
      default: "",
      type: String
    },
    icon: {
      required: false,
      default: "",
      type: String
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-md-6 col-lg-3 d-flex ftco-animate" }, _attrs))}><div class="align-self-stretch box text-center p-4 shadow"><div class="icon d-flex align-items-center justify-content-center"><span class="${ssrRenderClass($props.icon)}"></span></div><div><h3 class="mb-4">${ssrInterpolate($props.cName)}</h3><p>${ssrInterpolate($props.content)}</p></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var ContactCard = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const code$1 = "en";
const messages$1 = {
  _default: "The {field} is not valid",
  alpha: "The {field} field may only contain alphabetic characters",
  alpha_num: "The {field} field may only contain alpha-numeric characters",
  alpha_dash: "The {field} field may contain alpha-numeric characters as well as dashes and underscores",
  alpha_spaces: "The {field} field may only contain alphabetic characters as well as spaces",
  between: "The {field} field must be between 0:{min} and 1:{max}",
  confirmed: "The {field} field confirmation does not match",
  digits: "The {field} field must be numeric and exactly contain 0:{length} digits",
  dimensions: "The {field} field must be 0:{width} pixels by 1:{height} pixels",
  email: "The {field} field must be a valid email",
  not_one_of: "The {field} field is not a valid value",
  ext: "The {field} field is not a valid file",
  image: "The {field} field must be an image",
  integer: "The {field} field must be an integer",
  length: "The {field} field must be 0:{length} long",
  max_value: "The {field} field must be 0:{max} or less",
  max: "The {field} field may not be greater than 0:{length} characters",
  mimes: "The {field} field must have a valid file type",
  min_value: "The {field} field must be 0:{min} or more",
  min: "The {field} field must be at least 0:{length} characters",
  numeric: "The {field} field may only contain numeric characters",
  one_of: "The {field} field is not a valid value",
  regex: "The {field} field format is invalid",
  required_if: "The {field} field is required",
  required: "The {field} field is required",
  size: "The {field} field size must be less than 0:{size}KB",
  url: "The {field} field is not a valid URL"
};
var en$1 = {
  code: code$1,
  messages: messages$1
};
const code = "fr";
const messages = {
  _default: "Le champ {field} est invalide",
  alpha: "Le champ {field} ne peut contenir que des lettres",
  alpha_num: "Le champ {field} ne peut contenir que des caract\xE8res alpha-num\xE9riques",
  alpha_dash: "Le champ {field} ne peut contenir que des caract\xE8res alpha-num\xE9riques, tirets ou soulign\xE9s",
  alpha_spaces: "Le champ {field} ne peut contenir que des lettres ou des espaces",
  between: "Le champ {field} doit \xEAtre compris entre 0:{min} et 1:{max}",
  confirmed: "Le champ {field} ne correspond pas",
  digits: "Le champ {field} doit \xEAtre un nombre entier de 0:{length} chiffres",
  dimensions: "Le champ {field} doit avoir une taille de 0:{width} pixels par 1:{height} pixels",
  email: "Le champ {field} doit \xEAtre une adresse e-mail valide",
  not_one_of: "Le champ {field} doit \xEAtre une valeur valide",
  ext: "Le champ {field} doit \xEAtre un fichier valide",
  image: "Le champ {field} doit \xEAtre une image",
  integer: "Le champ {field} doit \xEAtre un entier",
  length: "Le champ {field} doit contenir 0:{length} caract\xE8res",
  max_value: "Le champ {field} doit avoir une valeur de 0:{max} ou moins",
  max: "Le champ {field} ne peut pas contenir plus de 0:{length} caract\xE8res",
  mimes: "Le champ {field} doit avoir un type MIME valide",
  min_value: "Le champ {field} doit avoir une valeur de 0:{min} ou plus",
  min: "Le champ {field} doit contenir au minimum 0:{length} caract\xE8res",
  numeric: "Le champ {field} ne peut contenir que des chiffres",
  one_of: "Le champ {field} doit \xEAtre une valeur valide",
  regex: "Le champ {field} est invalide",
  required: "Le champ {field} est obligatoire",
  required_if: "Le champ {field} est obligatoire lorsque {target} poss\xE8de cette valeur",
  size: "Le champ {field} doit avoir un poids inf\xE9rieur \xE0 0:{size}KB"
};
var fr$1 = {
  code,
  messages
};
var Contact_vue_vue_type_style_index_0_scoped_true_lang = "";
function block0$1(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "head": {
          "keywords": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Besoin de me joindre ? Je r\xE9ponds \xE0 toutes vos pr\xE9occupations."]);
          }
        },
        "Contact": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contact"]);
        },
        "Me contacter": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Me contacter"]);
        },
        "Envie d'un service ou pour un partenariat": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Envie d'un service ou pour un partenariat"]);
        },
        "Adresse": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Adresse"]);
        },
        "Num\xE9ro de T\xE9l\xE9phone": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Num\xE9ro de T\xE9l\xE9phone"]);
        },
        "Adresse Email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Adresse Email"]);
        },
        "Site Web": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Site Web"]);
        },
        "Votre nom": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Votre nom"]);
        },
        "Votre Email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Votre Email"]);
        },
        "Objet": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Objet"]);
        },
        "Entrez votre message ici": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Entrez votre message ici"]);
        },
        "Envoyer": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Envoyer"]);
        },
        "formSuccessMessage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Votre message a \xE9t\xE9 correctement envoy\xE9"]);
        },
        "formErrorMessage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Une erreur a \xE9t\xE9 rencontr\xE9e. Veuillez r\xE9essayer"]);
        }
      },
      "en": {
        "head": {
          "keyword": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Picasso Houessou, Picasso Houessou-Dossou, D\xE9veloppeur web, D\xE9veloppeur backend, d\xE9veloppeur frontend, frontend, backend, HTML, CSS, symfony, laravel, wordpress, d\xE9veloppeur wordpress, d\xE9veloppeur PHP, d\xE9veloppeur vue.js, cr\xE9ation de site web au b\xE9nin, web designer au b\xE9nin, d\xE9veloppeur d'API, cr\xE9ation de site web \xE0 cotonou, refonte de site web"]);
          },
          "description": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Need to reach me? I will answer all your concerns."]);
          }
        },
        "Contact": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["My Contacts"]);
        },
        "Me contacter": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contact Us"]);
        },
        "Envie d'un service ou pour un partenariat": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Looking for a service or for a partnership"]);
        },
        "Adresse": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Address"]);
        },
        "Num\xE9ro de T\xE9l\xE9phone": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Phone Number"]);
        },
        "Adresse Email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Email Address"]);
        },
        "Site Web": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Website"]);
        },
        "Votre nom": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Your Name"]);
        },
        "Votre Email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Your Email"]);
        },
        "Objet": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Object"]);
        },
        "Entrez votre message ici": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Type your message here"]);
        },
        "Envoyer": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Send"]);
        },
        "formSuccessMessage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Your message has been sent correctly"]);
        },
        "formErrorMessage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["An error has been encountered. Please try again"]);
        }
      }
    }
  });
}
defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
configure({
  generateMessage: localize({
    en: en$1,
    fr: fr$1
  })
});
const _sfc_main$3 = {
  name: "Contact",
  components: {
    ContactCard,
    Footer,
    NavBar,
    VeeForm: Form,
    Field
  },
  computed: {
    aboutMe() {
      return this.store.aboutMe;
    }
  },
  setup() {
    const store = useStore();
    const { locale, t } = useI18n({
      inheritLocale: true
    });
    useHead({
      title: "Picasso Houessou | Contact",
      meta: [
        {
          name: `keywords`,
          content: t("head.keywords")
        },
        {
          name: `description`,
          content: t("head.description")
        }
      ]
    });
    return {
      store,
      locale,
      t
    };
  },
  data() {
    return {
      form: {
        message: "",
        fullName: "",
        email: "",
        subject: ""
      }
    };
  },
  mounted() {
    setLocale(this.$i18n.locale);
  },
  methods: {
    async recaptcha() {
      await this.$recaptchaLoaded();
      this.form.recaptcha = await this.$recaptcha("homepage");
    },
    submit() {
      this.$Progress.start();
      axios.post(
        "/contact_uses",
        this.form
      ).then(() => {
        this.$Progress.finish();
        this.store.updateAlertMessage(this.t("formSuccessMessage"));
      }).catch((error) => {
        this.$Progress.fail();
        console.log(error);
        this.store.updateAlertMessage(this.t("formErrorMessage"));
      });
    },
    progress() {
      this.$Progress.start();
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  const _component_ContactCard = resolveComponent("ContactCard");
  const _component_VeeForm = resolveComponent("VeeForm");
  const _component_Field = resolveComponent("Field");
  const _component_Footer = resolveComponent("Footer");
  let _temp0, _temp1, _temp2;
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "page" }, _attrs))} data-v-b371987c>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<section class="ftco-section contact-section ftco-no-pb" id="contact-section" data-v-b371987c><div class="container" data-v-b371987c><div class="row justify-content-center mb-5 pb-3" data-v-b371987c><div class="col-md-7 heading-section text-center ftco-animate" data-v-b371987c><h1 class="big big-2" data-v-b371987c>${ssrInterpolate($setup.t("Contact"))}</h1><h2 class="mb-4" data-v-b371987c>${ssrInterpolate($setup.t("Me contacter"))}</h2><p data-v-b371987c>${ssrInterpolate($setup.t("Envie d'un service ou pour un partenariat"))}</p></div></div><div class="row d-flex contact-info mb-5" data-v-b371987c>`);
  _push(ssrRenderComponent(_component_ContactCard, {
    "c-name": $setup.t("Adresse"),
    icon: "icon-map-signs",
    content: $options.aboutMe.address
  }, null, _parent));
  _push(ssrRenderComponent(_component_ContactCard, {
    "c-name": $setup.t("Num\xE9ro de T\xE9l\xE9phone"),
    icon: "icon-phone2",
    content: $options.aboutMe.phone
  }, null, _parent));
  _push(ssrRenderComponent(_component_ContactCard, {
    "c-name": $setup.t("Adresse Email"),
    icon: "icon-paper-plane",
    content: $options.aboutMe.email
  }, null, _parent));
  _push(ssrRenderComponent(_component_ContactCard, {
    "c-name": $setup.t("Site Web"),
    icon: "icon-globe",
    content: $options.aboutMe.website
  }, null, _parent));
  _push(`</div><div class="row no-gutters block-9" data-v-b371987c><div class="col-md-6 order-md-last d-flex" data-v-b371987c><div class="col-md-12" data-v-b371987c>`);
  _push(ssrRenderComponent(_component_VeeForm, { as: "div" }, {
    default: withCtx(({ invalid, handleSubmit, reset }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<form method="post" class="bg-light p-4 p-md-5 contact-form" id="contactUsForm" novalidate="novalidate" data-v-b371987c${_scopeId}><div class="form-group" data-v-b371987c${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          name: "name",
          rules: "required"
        }, {
          default: withCtx(({ field, errors }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input${ssrRenderAttrs((_temp0 = mergeProps({
                class: [{ "input-error": errors[0] }, "form-control"],
                placeholder: $setup.t("Votre nom"),
                type: "text"
              }, field, {
                value: $data.form.fullName
              }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, $data.form.fullName))))} data-v-b371987c${_scopeId2}><span class="validation-error" data-v-b371987c${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
            } else {
              return [
                withDirectives(createVNode("input", mergeProps({
                  class: [{ "input-error": errors[0] }, "form-control"],
                  placeholder: $setup.t("Votre nom"),
                  type: "text"
                }, field, {
                  "onUpdate:modelValue": ($event) => $data.form.fullName = $event
                }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                  [vModelText, $data.form.fullName]
                ]),
                createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</div><div class="form-group" data-v-b371987c${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          name: "email",
          rules: "email|required"
        }, {
          default: withCtx(({ field, errors }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input${ssrRenderAttrs((_temp1 = mergeProps({
                class: "form-control",
                placeholder: $setup.t("Votre Email"),
                type: "email"
              }, field, {
                value: $data.form.email,
                class: { "input-error": errors[0] }
              }), mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, $data.form.email))))} data-v-b371987c${_scopeId2}><span class="validation-error" data-v-b371987c${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
            } else {
              return [
                withDirectives(createVNode("input", mergeProps({
                  class: "form-control",
                  placeholder: $setup.t("Votre Email"),
                  type: "email"
                }, field, {
                  "onUpdate:modelValue": ($event) => $data.form.email = $event,
                  class: { "input-error": errors[0] }
                }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                  [vModelText, $data.form.email]
                ]),
                createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</div><div class="form-group" data-v-b371987c${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          name: "subject",
          rules: "required"
        }, {
          default: withCtx(({ field, errors }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<input${ssrRenderAttrs((_temp2 = mergeProps({
                class: "form-control",
                placeholder: $setup.t("Objet"),
                type: "text"
              }, field, {
                value: $data.form.subject,
                class: { "input-error": errors[0] }
              }), mergeProps(_temp2, ssrGetDynamicModelProps(_temp2, $data.form.subject))))} data-v-b371987c${_scopeId2}><span class="validation-error" data-v-b371987c${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
            } else {
              return [
                withDirectives(createVNode("input", mergeProps({
                  class: "form-control",
                  placeholder: $setup.t("Objet"),
                  type: "text"
                }, field, {
                  "onUpdate:modelValue": ($event) => $data.form.subject = $event,
                  class: { "input-error": errors[0] }
                }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                  [vModelText, $data.form.subject]
                ]),
                createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</div><div class="form-group" data-v-b371987c${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Field, {
          name: "message",
          rules: "required|min:30|max:5000"
        }, {
          default: withCtx(({ field, errors }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<textarea${ssrRenderAttrs(mergeProps({
                class: "form-control",
                cols: "30",
                id: "",
                placeholder: $setup.t("Entrez votre message ici"),
                rows: "7"
              }, field, {
                class: { "input-error": errors[0] }
              }), "textarea")} data-v-b371987c${_scopeId2}>${ssrInterpolate($data.form.message)}</textarea><span class="validation-error" data-v-b371987c${_scopeId2}>${ssrInterpolate(errors[0])}</span>`);
            } else {
              return [
                withDirectives(createVNode("textarea", mergeProps({
                  class: "form-control",
                  cols: "30",
                  id: "",
                  placeholder: $setup.t("Entrez votre message ici"),
                  rows: "7"
                }, field, {
                  "onUpdate:modelValue": ($event) => $data.form.message = $event,
                  class: { "input-error": errors[0] }
                }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                  [vModelText, $data.form.message]
                ]),
                createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(`</div><div class="form-group" data-v-b371987c${_scopeId}><button class="btn btn-primary py-3 px-5 submit-contact" type="submit" data-v-b371987c${_scopeId}>${ssrInterpolate($setup.t("Envoyer"))}</button></div></form>`);
      } else {
        return [
          createVNode("form", {
            onReset: withModifiers(reset, ["prevent"]),
            onSubmit: ($event) => handleSubmit($event, $options.submit),
            method: "post",
            class: "bg-light p-4 p-md-5 contact-form",
            id: "contactUsForm",
            novalidate: "novalidate"
          }, [
            createVNode("div", { class: "form-group" }, [
              createVNode(_component_Field, {
                name: "name",
                rules: "required"
              }, {
                default: withCtx(({ field, errors }) => [
                  withDirectives(createVNode("input", mergeProps({
                    class: [{ "input-error": errors[0] }, "form-control"],
                    placeholder: $setup.t("Votre nom"),
                    type: "text"
                  }, field, {
                    "onUpdate:modelValue": ($event) => $data.form.fullName = $event
                  }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                    [vModelText, $data.form.fullName]
                  ]),
                  createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "form-group" }, [
              createVNode(_component_Field, {
                name: "email",
                rules: "email|required"
              }, {
                default: withCtx(({ field, errors }) => [
                  withDirectives(createVNode("input", mergeProps({
                    class: "form-control",
                    placeholder: $setup.t("Votre Email"),
                    type: "email"
                  }, field, {
                    "onUpdate:modelValue": ($event) => $data.form.email = $event,
                    class: { "input-error": errors[0] }
                  }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                    [vModelText, $data.form.email]
                  ]),
                  createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "form-group" }, [
              createVNode(_component_Field, {
                name: "subject",
                rules: "required"
              }, {
                default: withCtx(({ field, errors }) => [
                  withDirectives(createVNode("input", mergeProps({
                    class: "form-control",
                    placeholder: $setup.t("Objet"),
                    type: "text"
                  }, field, {
                    "onUpdate:modelValue": ($event) => $data.form.subject = $event,
                    class: { "input-error": errors[0] }
                  }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                    [vModelText, $data.form.subject]
                  ]),
                  createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "form-group" }, [
              createVNode(_component_Field, {
                name: "message",
                rules: "required|min:30|max:5000"
              }, {
                default: withCtx(({ field, errors }) => [
                  withDirectives(createVNode("textarea", mergeProps({
                    class: "form-control",
                    cols: "30",
                    id: "",
                    placeholder: $setup.t("Entrez votre message ici"),
                    rows: "7"
                  }, field, {
                    "onUpdate:modelValue": ($event) => $data.form.message = $event,
                    class: { "input-error": errors[0] }
                  }), null, 16, ["placeholder", "onUpdate:modelValue"]), [
                    [vModelText, $data.form.message]
                  ]),
                  createVNode("span", { class: "validation-error" }, toDisplayString(errors[0]), 1)
                ]),
                _: 1
              })
            ]),
            createVNode("div", { class: "form-group" }, [
              createVNode("button", {
                class: "btn btn-primary py-3 px-5 submit-contact",
                type: "submit"
              }, toDisplayString($setup.t("Envoyer")), 1)
            ])
          ], 40, ["onReset", "onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="col-md-6 d-flex" data-v-b371987c><div class="img photo-picasso" style="${ssrRenderStyle({ "background-image": "url(/assets/images/picasso/home-about.png)" })}" data-v-b371987c></div></div></div></div></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
if (typeof block0$1 === "function")
  block0$1(_sfc_main$3);
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Contact.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Contact = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-b371987c"]]);
const _sfc_main$2 = {
  components: {
    NavBar
  },
  data() {
    return {
      currentPage: 1,
      pageCount: 0
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<section class="ftco-section contact-section ftco-no-pb"><div class="container"><div class="row justify-content-center mb-5 pb-3"><div class="col-md-7 heading-section text-center ftco-animate"><h1 class="big big-2">CV</h1><h2 class="mb-4">My CV</h2></div></div><div class="container"><div class="row"><div class="col-md-12">${ssrInterpolate($data.currentPage)} / ${ssrInterpolate($data.pageCount)} </div></div></div></div></section></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/CV.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var CV = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "fr": {
        "La page que vous demand\xE9e semble introuvable": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La page que vous demand\xE9e semble introuvable"]);
        },
        "Retour \xE0 l'accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Retour \xE0 l'accueil"]);
        }
      },
      "en": {
        "La page que vous demand\xE9e semble introuvable": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["The page you requested cannot be found"]);
        },
        "Retour \xE0 l'accueil": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Back to home page"]);
        }
      }
    }
  });
}
const _sfc_main$1 = {
  name: "NotFound",
  components: {
    NavBar
  },
  setup() {
    const { locale, t } = useI18n({
      inheritLocale: true
    });
    return { t };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  const _component_router_link = resolveComponent("router-link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<section class="ftco-section ftco-project" id="portfolio-view"><div class="row justify-content-center align-items-center"><div class="col-md-7 ftco-animate text-center"><h2>${ssrInterpolate($setup.t("La page que vous demand\xE9e semble introuvable"))}</h2><p class="mb-0">`);
  _push(ssrRenderComponent(_component_router_link, {
    to: { name: "Home" },
    class: "btn btn-primary py-3 px-5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($setup.t("Retour \xE0 l'accueil"))}`);
      } else {
        return [
          createTextVNode(toDisplayString($setup.t("Retour \xE0 l'accueil")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div></section></div>`);
}
if (typeof block0 === "function")
  block0(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NotFound.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const progress = {
  func: [
    { call: "color", modifier: "temp", argument: "#3d64ff" },
    { call: "fail", modifier: "temp", argument: "#6e0000" },
    { call: "location", modifier: "temp", argument: "top" },
    { call: "transition", modifier: "temp", argument: { speed: "1.5s", opacity: "0.6s", termination: 400 } }
  ]
};
var routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      progress
    }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      progress
    }
  },
  {
    path: "/portfolio-view/:url",
    name: "PortfolioShow",
    component: PortfolioView,
    props: true,
    meta: {
      progress
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      progress
    }
  },
  {
    path: "/cv",
    name: "CV",
    component: CV
  },
  {
    path: "/about",
    name: "About",
    component: () => Promise.resolve().then(function() {
      return About$1;
    })
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
];
var defaultConfig = {
  expireTimes: "1d",
  path: "; path=/",
  domain: "",
  secure: false,
  sameSite: "; SameSite=Lax"
};
var VueCookiesManager = function() {
  function VueCookiesManager2() {
    this.current_default_config = defaultConfig;
  }
  VueCookiesManager2.prototype.config = function(config) {
    for (var propertyName in this.current_default_config) {
      this.current_default_config[propertyName] = config[propertyName] ? config[propertyName] : defaultConfig[propertyName];
    }
  };
  VueCookiesManager2.prototype.get = function(keyName) {
    var value = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(keyName).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    if (value && value.substring(0, 1) === "{" && value.substring(value.length - 1, value.length) === "}") {
      try {
        value = JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  };
  VueCookiesManager2.prototype.set = function(keyName, value, expireTimes, path, domain, secure, sameSite) {
    if (!keyName) {
      throw new Error("Cookie name is not found in the first argument.");
    } else if (/^(?:expires|max-age|path|domain|secure|SameSite)$/i.test(keyName)) {
      throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]	 current key name: ' + keyName);
    }
    if (value && value.constructor === Object) {
      value = JSON.stringify(value);
    }
    var _expires = "";
    if (expireTimes == void 0) {
      expireTimes = this.current_default_config.expireTimes ? this.current_default_config.expireTimes : "";
    }
    if (expireTimes && expireTimes != 0) {
      switch (expireTimes.constructor) {
        case Number:
          if (expireTimes === Infinity || expireTimes === -1)
            _expires = "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
          else
            _expires = "; max-age=" + expireTimes;
          break;
        case String:
          if (/^(?:\d+(y|m|d|h|min|s))$/i.test(expireTimes)) {
            var _expireTime = expireTimes.replace(/^(\d+)(?:y|m|d|h|min|s)$/i, "$1");
            switch (expireTimes.replace(/^(?:\d+)(y|m|d|h|min|s)$/i, "$1").toLowerCase()) {
              case "m":
                _expires = "; max-age=" + +_expireTime * 2592e3;
                break;
              case "d":
                _expires = "; max-age=" + +_expireTime * 86400;
                break;
              case "h":
                _expires = "; max-age=" + +_expireTime * 3600;
                break;
              case "min":
                _expires = "; max-age=" + +_expireTime * 60;
                break;
              case "s":
                _expires = "; max-age=" + _expireTime;
                break;
              case "y":
                _expires = "; max-age=" + +_expireTime * 31104e3;
                break;
            }
          } else {
            _expires = "; expires=" + expireTimes;
          }
          break;
        case Date:
          _expires = "; expires=" + expireTimes.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(keyName) + "=" + encodeURIComponent(value) + _expires + (domain ? "; domain=" + domain : this.current_default_config.domain ? this.current_default_config.domain : "") + (path ? "; path=" + path : this.current_default_config.path ? this.current_default_config.path : "; path=/") + (secure == void 0 ? this.current_default_config.secure ? "; Secure" : "" : secure ? "; Secure" : "") + (sameSite == void 0 ? this.current_default_config.sameSite ? "; SameSute=" + this.current_default_config.sameSite : "" : sameSite ? "; SameSite=" + sameSite : "");
    return this;
  };
  VueCookiesManager2.prototype.remove = function(keyName, path, domain) {
    if (!keyName || !this.isKey(keyName)) {
      return false;
    }
    document.cookie = encodeURIComponent(keyName) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? "; domain=" + domain : this.current_default_config.domain ? this.current_default_config.domain : "") + (path ? "; path=" + path : this.current_default_config.path ? this.current_default_config.path : "; path=/") + "; SameSite=Lax";
    return true;
  };
  VueCookiesManager2.prototype.isKey = function(keyName) {
    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(keyName).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
  };
  VueCookiesManager2.prototype.keys = function() {
    if (!document.cookie)
      return [];
    var _keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var _index = 0; _index < _keys.length; _index++) {
      _keys[_index] = decodeURIComponent(_keys[_index]);
    }
    return _keys;
  };
  return VueCookiesManager2;
}();
var VueCookies = {
  install: function(app, options2) {
    app.config.globalProperties.$cookies = new VueCookiesManager();
    if (options2) {
      app.config.globalProperties.$cookies.config(options2);
    }
  }
};
const hello$1 = "";
const Menu$1 = "";
const home$1 = "";
const about$1 = "About Me";
const resume$1 = "";
const services$1 = "";
const portfolio$1 = "";
const contact$1 = {
  title: "",
  description: "",
  button: ""
};
const myName$1 = "";
const hero$1 = {
  web: "",
  network: "",
  application: ""
};
const aboutMe$1 = {
  about: ""
};
const Education$1 = "";
const education$1 = {
  licence: {
    title: "",
    subtitle: "",
    description: ""
  },
  bac: {
    description: ""
  },
  bepc: {
    description: ""
  }
};
const Formateur$1 = "";
const experience$1 = {
  jeunesseInstitut: {
    description: ""
  },
  self: {
    subtitle: "",
    description: ""
  },
  jscom: {
    description: ""
  },
  htech: {
    description: ""
  }
};
const Services$1 = "";
var en = {
  hello: hello$1,
  Menu: Menu$1,
  home: home$1,
  about: about$1,
  resume: resume$1,
  services: services$1,
  portfolio: portfolio$1,
  contact: contact$1,
  myName: myName$1,
  "Je suis un": "",
  hero: hero$1,
  "\xC0 Propos": "",
  aboutMe: aboutMe$1,
  "Nom :": "",
  "Date de Naissance:": "",
  "Adresse :": "",
  "Email :": "",
  "T\xE9l\xE9phone :": "",
  Education: Education$1,
  education: education$1,
  "Baccalaur\xE9at Scientifique(s\xE9rie D)": "",
  "Coll\xE8ge d\u2019Enseignement G\xE9n\xE9ral Albarika": "",
  "Exp\xE9rience": "",
  Formateur: Formateur$1,
  "Jeunesse Institut": "",
  experience: experience$1,
  "D\xE9veloppeur Wordpress": "",
  "Comp\xE9tences": "",
  Services: Services$1,
  "Mes comp\xE9tences et les services que j'offre": "",
  "D\xE9veloppement Web": "",
  "Voir Mes R\xE9alisations": ""
};
const hello = "";
const Menu = "Menu";
const home = "Accueil";
const about = "\xC0 Propos";
const resume = "R\xE9sum\xE9";
const services = "Services";
const portfolio = "Portfolio";
const contact = {
  title: "Je suis <span>Disponible</span> en freelance",
  description: "Tr\xE8s ouvert je suis disponible pour travailler en \xE9quipe ou en solo vos projets.",
  button: "Me Contacter"
};
const myName = "Salut!Je m'appelle";
const aboutMe = {
  about: "Je suis un passionn\xE9 de l\u2019informatique. J\u2019ai \xE9tudi\xE9 l\u2019administration des Syst\xE8mes et R\xE9seaux Informatiques."
};
const Education = "Education";
const education = {
  bepc: {
    title: "",
    subtitle: "",
    description: "Le CEG Albarika est situ\xE9 dans la ville de Parakou, R\xE9publique du B\xE9nin.J'y ai obtenu mon BEPC"
  },
  bac: {
    title: "",
    subtitle: "",
    description: "Le CEG Albarika est situ\xE9 dans la ville de Parakou, R\xE9publique du B\xE9nin. J'y ai obtenu mon BAC"
  },
  licence: {
    title: "Licence en Informatique de Gestion",
    subtitle: "ENEAM UAC",
    description: "Durant 3 ann\xE9es j'ai \xE9tudi\xE9 l'Informatique de Gestion et en fin de cycle je me suis sp\xE9cialis\xE9 en Administration des R\xE9seaux Informatiques"
  }
};
const Formateur = "";
const experience = {
  jeunesseInstitut: {
    date: "",
    title: "",
    subtitle: "",
    description: "A dispens\xE9 des cours en informatique g\xE9n\xE9rale"
  },
  hgtech: {
    date: "",
    title: "",
    subtitle: "",
    description: "Stage : maintenance, administration sous Windows Server, d\xE9veloppement de site web en PHP et avec Wordpress"
  },
  jscom: {
    date: "",
    title: "",
    subtitle: "",
    description: "Stage : atelier de formation, pr\xE9paration et r\xE9daction de m\xE9moire de fin d\u2019\xE9tude pour l\u2019obtention de la licence"
  },
  self: {
    date: "",
    title: "",
    subtitle: "A son propre compte",
    description: "A dispens\xE9 des cours en informatique g\xE9n\xE9rale"
  }
};
const Services = "";
const hero = {
  web: "D\xE9veloppeur Web.",
  network: "Administrateur R\xE9seau.",
  application: "D\xE9veloppeur Application de Bureau."
};
var fr = {
  hello,
  Menu,
  home,
  about,
  resume,
  services,
  portfolio,
  contact,
  myName,
  "Je suis un": "Je suis un",
  "D\xE9veloppeur Web": "",
  "Administrateur R\xE9seau": "",
  "D\xE9veloppeur Application de Bureau": "",
  "\xC0 Propos": "",
  aboutMe,
  "Nom :": "Nom :",
  "Date de Naissance:": "Date de Naissance:",
  "Adresse :": "Adresse :",
  "Email :": "Email :",
  "T\xE9l\xE9phone :": "T\xE9l\xE9phone",
  Education,
  "Licence en Informatique de Gestion": "Licence en Informatique de Gestion",
  education,
  "Baccalaur\xE9at Scientifique(s\xE9rie D)": "",
  "Coll\xE8ge d\u2019Enseignement G\xE9n\xE9ral Albarika": "",
  "Exp\xE9rience": "",
  Formateur,
  "Jeunesse Institut": "",
  experience,
  "D\xE9veloppeur Wordpress": "",
  "Comp\xE9tences": "",
  Services,
  "Mes comp\xE9tences et les services que j'offre": "",
  "D\xE9veloppement Web": "",
  hero,
  "Voir Mes R\xE9alisations": ""
};
const options = {
  color: "#3d64ff",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false,
  autoFinish: false
};
const i18n = createI18n({
  locale: "fr",
  legacy: false,
  fallbackLocale: "fr",
  globalInjection: true,
  messages: {
    fr,
    en
  }
});
const createApp = ViteSSG(
  App,
  {
    mode: "history",
    base: "/",
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash
        };
      }
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    }
  },
  ({ app, router, routes: routes2, isClient, initialState }) => {
    app.use(i18n);
    const pinia = createPinia();
    app.use(pinia);
    app.use(VueProgressBar, options);
    app.use(VueCookies);
  }
);
const _sfc_main = {
  components: {
    NavBar
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NavBar = resolveComponent("NavBar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var About$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": About
}, Symbol.toStringTag, { value: "Module" }));
export { createApp };
