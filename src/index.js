import SuiButton from "./components/button.component.vue"
import SuiTabs from "./components/tabs.component.vue"
import SuiInput from "./components/input.component.vue"

const components = {
	SuiButton,
	SuiTabs,
	SuiInput,
}

if(window.Vue){
	Object.keys(components).forEach(key => {
		window.Vue.component(key, components[key])
	})
}

export default components