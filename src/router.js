import Vue from "vue";

import Router from "vue-router";

import Home from "./pages/home/index.vue";

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "/",
			redirect: "/home",
		},
		{
			path: "/home",
			name: "home",
			component: Home,
			meta: {
				footShow: true, // true显示，false隐藏
			},
		},
		{
			path: "/user-center",
			name: "user-center",
			component: () => import("./pages/user-center/index.vue"),
			meta: {
				footShow: true, // true显示，false隐藏
			},
		},
		{
			path: "/shopping-cart",
			name: "shopping-cart",
			component: () => import("./pages/shopping-cart/index.vue"),
			meta: {
				footShow: true, // true显示，false隐藏
			},
		},
		{
			path: "/categroy",
			name: "categroy",
			component: () => import("./pages/categroy/index.vue"),
			meta: {
				footShow: true, // true显示，false隐藏
			},
		},
		{
			path: "/product-list",
			name: "product-list",
			component: () => import("./pages/product-list/index.vue"),
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
		{
			path: "/login",
			name: "login",
			component: () => import("./pages/login/index.vue"),
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
		{
			path: "/order",
			name: "order",
			component: () => import("./pages/order/index.vue"),
			meta: {
				footShow: false, // true显示，false隐藏
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	let token = window.localStorage.getItem("token");
	const needLogin = ["/shopping-cart", "/user-center", "/order"];
	console.log(to.path, token);
	if (to.path === "/login") {
		next();
	}
	if (!token) {
		if (needLogin.indexOf(to.path) > -1) {
			console.log("我没登录去 登录页面");
			next("/login");
		} else {
			next();
		}
	} else {
		next();
	}
});
export default router;
