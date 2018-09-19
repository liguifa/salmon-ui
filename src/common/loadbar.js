import LoadBar from "../components/loadbar.component.vue"
import Vue from "vue"

export default {
	start(){
		if(this.el){
			this.el.remove();
		}
		let node = (new Vue({
			render(h){
				return h(LoadBar);
			}
		})).$mount();
		document.body.appendChild(node.$el);
		this.node = node.$children[0];
		this.el = node.$el;
	},

	finish(){
		this.node.finish();
	}
}