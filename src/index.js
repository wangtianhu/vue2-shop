import Vue from "vue";
import Swipe from "vant/lib/swipe";
import VanImage from "vant/lib/image";
import Lazyload from "vant/lib/lazyload";
import "@/assets/css/common.css";
import SwipeItem from "vant/lib/swipe-item";
import Form from "vant/lib/form";
import Field from "vant/lib/field";
import Button from "vant/lib/button";
import Toast from "vant/lib/toast";
import CellGroup from "vant/lib/toast";
import Cell from "vant/lib/cell";
import Tab from "vant/lib/tab";
import Tabs from "vant/lib/tabs";

import router from "./router";
import Index from "./index.vue";
import store from "./store";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.use(Toast);
Vue.use(CellGroup);
Vue.use(Cell);
Vue.use(Tab);
Vue.use(Tabs);
new Vue({
	store,
	router,
	render: (h) => h(Index),
}).$mount("#app");
