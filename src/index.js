import SuiButton from "./components/button.component.vue"
import SuiTabs from "./components/tabs.component.vue"

const components = {
	SuiButton,
	SuiTabs
}

if(window.Vue){
	Object.keys(components).forEach(key => {
		window.Vue.component(key, components[key])
	})
}

export default components