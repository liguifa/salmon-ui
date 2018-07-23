<template>
	<button :class="classes"></button>
</template>

<script>
export default {
	props:{
		type:{
			validator:value=>{
				return ["default"].includes(value)
			},
			default:"default"
		}
	},
	computed:{
		classes(){
			return `sui-button sui-button-${this.type}`
		}
	}
}
</script>

<style>
	.sui-button{
		font: inherit;
		height: 32px;
		line-height: 32px;
		padding: 0 15px;
		color: #FFF;
		white-space: nowrap;
		text-align: center;
		border: 1px solid #DDD;
		border-radius: 0;
		cursor: pointer;
		transition: all .2s;
	}

	.sui-button-default{
		background-color: #1ab394;
		border-color: #1ab394;
		color: #FFF;
	}
</style>
