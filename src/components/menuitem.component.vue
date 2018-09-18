<template>
	<li :class="cls"><a :href="url">{{title}}</a></li>
</template>

<script>
export default {
	props:{
		url:{
			type:String,
			required:false
		},
		title:{
			type:String,
			required:false
		},
		level:{
			type:String,
			default:"item"
		}
	},
	data(){
		return {
			isActive:false
		}
	},
	computed:{
		cls(){
			let cls = `sui-menuitem-li-${this.level}`;
			if(this.isActive){
				cls += " sui-menuitem-active";
			}
			return cls;
		}
	}
}
</script>
