<template>
	<div>
		<Radio v-for="radio in radios" :key="radio.name" v-bind="radio.props" @update:checked="checked=>change(radio,checked)" />
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
			radios:[]
		}
	},
	methods:{
		change(radio,checked){
			this.radios = this.radios.map(r => {
				return {...r, props:{...r.props, checked:radio.props.value == r.props.value}};
			});
			this.$emit("input", radio.props.value);
		},
		getRadios(){
			return this.$slots.default.filter(radio => {
				return radio.componentOptions;
			}).map((radio,i) => {
				return {
					key:i,
					props:Object.assign(radio.componentOptions.propsData,{
						checked:this.value == radio.componentOptions.propsData.value ? true : radio.componentOptions.propsData.checked
					}),
					methods:radio.componentOptions.listeners
				};
			});
		}
	},
	created(){
		this.radios = this.getRadios();
	}
}
</script>

<style>

</style>
