import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./widgets/AppHeader";
import AppFooter from "./widgets/AppFooter";
import Home from "./components/Home.vue";
Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [{
        path: "/",
        name: "home",
        components: {
            header: AppHeader,
            default: Home,
            footer: AppFooter
        }
    }, ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});