<template>
	<button :class="classes" @click="onclick">{{text}}</button>
</template>

<script>
export default {
	props:{
		type:{
			validator:value=>{
				return ["default"].includes(value)
			},
			default:"default"
		},
		text:{
			type:String,
			required:true
		}
	},
	methods:{
		onclick(){
			this.$emit("on-click")
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
		outline: none;
	}

	.sui-button:hover{
		opacity: 0.8;
	}

	.sui-button:active{
		background-color:red;
		border-color: red;
		color:#fff;
	}

	.sui-button-default{
		background-color: #1ab394;
		border-color: #1ab394;
		color: #FFF;
	}

	.sui-button-primary{
		background-color: #fff;
		border-color:#c9c9c9;
		color:#000;
	}

	.sui-button-normal{
		background-color: #1E9FFF;
		border-color:#1E9FFF;
    	color: #fff;
	}

	.sui-button-warm{
		background-color: #F7B824;
		border-color:#F7B824;
		color:#fff;
	}

	.sui-button-danger{
		background-color: #FF5722;
		border-color:#FF5722;
		color:#fff;
	}
</style>
