import SuiButton from "./components/button.component.vue"
import SuiTabs from "./components/tabs.component.vue"
import SuiTimeline from "./components/timeline.component.vue"

const components = {
	SuiButton,
	SuiTabs,
	SuiTimeline
}

if(window.Vue){
	Object.keys(components).forEach(key => {
		window.Vue.component(key, components[key])
	})
}

export default components