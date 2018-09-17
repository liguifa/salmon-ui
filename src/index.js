import Button from "./components/button.component.vue"
import Tabs from "./components/tabs.component.vue"
import Input from "./components/input.component.vue"
import Timeline from "./components/timeline.component.vue"
import Menu from "./components/menu.component.vue"
import MenuItem from "./components/menuitem.component.vue"
import Broadside from "./components/broadside.component.vue"

const components = {
	Button,
	Tabs,
	Input,
	Timeline,
	Menu,
	MenuItem,
	Broadside
}

if(window.Vue){
	Object.keys(components).forEach(key => {
		window.Vue.component(key, components[key])
	})
}

const install = function(Vue, opts = {}) {
	Vue.mixin({
		components:components
	});
};

export default {install};