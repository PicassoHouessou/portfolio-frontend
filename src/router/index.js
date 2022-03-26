import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Contact from "../views/Contact.vue";
import CV from "../views/CV.vue";
import Portfolio from "../views/Portfolio.vue";
import PortfolioView from "../views/PortfolioView.vue";
//import {SUPPORT_LOCALES, setI18nLanguage, loadLocaleMessages} from "../i18n";
import NotFound from "../components/NotFound";


const progress = {
  func: [
    {call: 'color', modifier: 'temp', argument: '#3d64ff'},
    {call: 'fail', modifier: 'temp', argument: '#6e0000'},
    {call: 'location', modifier: 'temp', argument: 'top'},
    {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
  ]
} ;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        progress
      }
    }, {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: {
        progress
      }
    },{
      path: '/portfolio-view/:url',
      name: 'PortfolioShow',
      component: PortfolioView,
      props: true,
      meta: {
        progress
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        progress
      }
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    },
      /*
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
      */
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    // will match everything and put it under `$route.params.pathMatch`
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
        // , offset: { x: 0, y: 10 }
      }
    }
    return { x: 0, y: 0 }
  }
});
/*
const locale =  'fr';
router.beforeEach(async (to, from, next) => {
  const paramsLocale = to.params.locale

  // use locale if paramsLocale is not in SUPPORT_LOCALES
  console.log(paramsLocale)
  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    return next(`/${locale}`)
  }

  // load locale messages
  if (!i18n.global.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(i18n, paramsLocale)
  }

  // set i18n language
  setI18nLanguage(i18n, paramsLocale)

  return next()
})

*/
export default router;
