<template>
	<button :class="classes" @click="onclick">
		<span>{{text}}</span>
	</button>
</template>

<script>
export default {
	props:{
		type:{
			validator:value=>{
				return ["default","primary","normal","warn","danger"].includes(value)
			},
			default:"default"
		},
		text:{
			type:String,
			required:true
		},
		ghost:{
			type:Boolean,
			default:false
		},
		stopPropagation: {
			type: Boolean,
			default: false
		}
	},
	methods:{
		onclick(e){
			this.$emit("on-click");
			if(this.stopPropagation) {
				e.stopPropagation();
			}
		}
	},
	computed:{
		classes(){
			let classes = `sui-button sui-button-${this.type}`;
			if(this.ghost){
				classes += ' sui-button-ghost';
			}
			return classes;
		}
	}
}
</script>

<style>
	.sui-button{
		display: inline-block;
		width: 73px;
		height: 31px;
		margin-bottom: 0;
		font-weight: 400;
		text-align: center;
		-ms-touch-action: manipulation;
		touch-action: manipulation;
		cursor: pointer;
		background-image: none;
		border: 1px solid transparent;
		white-space: nowrap;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		padding: 5px 15px 6px;
		font-size: 12px;
		border-radius: 4px;
		vertical-align: middle;
		line-height: 1.5;
		outline: none;
		transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
	}

	.sui-button:hover{
		opacity: 0.8;
	}

	.sui-button:active{
		opacity: 0.6;
	}

	.sui-button-default{
		color: #515a6e;
    	background-color: #fff;
    	border-color: #dcdee2;
	}

	.sui-button-primary{
		color: #fff;
    	background-color: #2d8cf0;
    	border-color: #2d8cf0;
	}

	.sui-button-normal{
		color: #fff;
    	background-color: #2db7f5;
    	border-color: #2db7f5;
	}

	.sui-button-warn{
		color: #fff;
    	background-color: #ffad33;
    	border-color: #ffad33;
	}

	.sui-button-danger{
		background-color: #FF5722;
		border-color:#FF5722;
		color:#fff;
	}

	.sui-button-ghost{
		background-color: transparent !important;
	}

	.sui-button-ghost.sui-button-default{
		color:#1ab394 !important;
	}

	.sui-button-ghost.sui-button-primary{
		color:#000 !important;
	}

	.sui-button-ghost.sui-button-normal{
		color:#1E9FFF !important;
	}

	.sui-button-ghost.sui-button-warm{
		color:#F7B824 !important;
	}

	.sui-button-ghost.sui-button-danger{
		color:#FF5722 !important;
	}

	.sui-button-ghost:active{
		opacity: 0.6;
	}
</style>
