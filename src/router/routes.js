import Home from "../views/Home";
import Portfolio from "../views/Portfolio";
import PortfolioView from "../views/PortfolioView";
import Contact from "../views/Contact";
import CV from "../views/CV";
import NotFound from "../components/NotFound";

const progress = {
    func: [
        {call: 'color', modifier: 'temp', argument: '#3d64ff'},
        {call: 'fail', modifier: 'temp', argument: '#6e0000'},
        {call: 'location', modifier: 'temp', argument: 'top'},
        {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
    ]
} ;

export default  [
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
] ;