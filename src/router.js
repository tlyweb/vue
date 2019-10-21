import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import City from "./views/City";
import Detail from "./views/Detail";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
	  {
	  	path:"/city",
		name:"City",
		component:City
	  },
	  {
	  	path:"/detail/:id",
		  name:"Detail",
		  component:Detail
	  }
  ],
	scrollBehavior(to,from,savedPosition){
  	    return {x:0,y:0}
	}
});
