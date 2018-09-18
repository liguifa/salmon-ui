<template>
	<div>
		<Checkbox v-for="checkbox in checkboxs" :key="checkbox.name" v-bind="checkbox.props" @update:checked="checked=>change(checkbox,checked)" />
	</div>
</template>

<script>
export default {
	props:{
		value:{
			type:String
		}
	},
	data(){
		return {
			checkboxs:[]
		}
	},
	methods:{
		change(checkbox,checked){
			this.checkboxs = this.checkboxs.map(r => {
				if(r.props.value == checkbox.props.value){
					r.props.checked = checked;
				}
				return r;
			});
			let actives = this.checkboxs.filter(c => {
				return c.props.checked;
			}).map(c => {
				return c.props.value;
			})
			this.$emit("input", actives);
		},
		getCheckboxs(){
			return this.$slots.default.filter(checkbox => {
				return checkbox.componentOptions;
			}).map((checkbox,i) => {
				return {
					key:i,
					props:Object.assign(checkbox.componentOptions.propsData,{
						checked:this.value == checkbox.componentOptions.propsData.value ? true : checkbox.componentOptions.propsData.checked
					}),
					methods:checkbox.componentOptions.listeners
				};
			});
		}
	},
	created(){
		this.checkboxs = this.getCheckboxs();
	}
}
</script>

<style>

</style>
