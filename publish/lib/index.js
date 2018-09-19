import Button from "./components/button.component.vue"
import Tabs from "./components/tabs.component.vue"
import Input from "./components/input.component.vue"
import Timeline from "./components/timeline.component.vue"
import Menu from "./components/menu.component.vue"
import MenuItem from "./components/menuitem.component.vue"
import Broadside from "./components/broadside.component.vue"
import Icon from "./components/icon.component.vue"
import Radio from "./components/radio.component.vue"
import RadioGroup from "./components/radio.group.component.vue"
import Checkbox from "./components/checkbox.component.vue"
import CheckboxGroup from "./components/checkbox.group.component.vue"
import SuiSwitch from "./components/switch.component.vue"
import Table from "./components/table.component.vue"
import Thead from "./components/thead.component.vue"
import Video from "./components/video.component.vue"
import Select from "./components/select.component.vue"
import Rate from "./components/rate.component.vue"
import ColorPicker from "./components/color.picker.component.vue"
import LoadBar from "./common/loadbar"

const components = {
	Button,
	Tabs,
	Input,
	Timeline,
	Menu,
	MenuItem,
	Broadside,
	Icon,
	Radio,
	RadioGroup,
	Checkbox,
	CheckboxGroup,
	SuiSwitch,
	Table,
	Thead,
	Video,
	Select,
	Rate,
	ColorPicker
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

export default {install, LoadBar};