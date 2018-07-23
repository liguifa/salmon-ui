import SuiButton from "./components/button.component.vue"

const components = {
	SuiButton
}

if(window.Vue){
	Object.keys(components).forEach(key => {
		window.Vue.component(key, components[key])
	})
}

export default components