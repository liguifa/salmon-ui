<template>
	<div class="sui-radio" @click="active">
		<div :class="{'sui-radio-icon':true,'sui-radio-icon-active':checked}">
			<Icon type="ok" />
		</div>
		<span>{{label}}</span>
	</div>
</template>

<script>
export default {
	props:{
		name:{
			type:String
		},
		value:{
			type:String
		},
		checked:{
			type:Boolean
		},
		label:{
			type:String
		}
	},
	data(){
		return {
			isActive:this.checked
		}
	},
	methods:{
		active(e){
			this.isActive = !this.isActive;
			this.$emit("update:checked", this.isActive);
		}
	}
}
</script>

<style>
.sui-radio{
	display: inline-block;
	margin-right: 10px;
	cursor: pointer;
}

.sui-radio-icon{
	width: 22px;
	height: 22px;
	border-radius: 50%;
	border:1px solid #DCDEE2;
	display: inline-block;
	cursor: pointer;
	user-select: none;
	text-align: center；
}

.sui-radio-icon > .sui-icon{
	font-size: 16px;
	margin-top: 3px;
	color: #ffffff;
}

.sui-radio-icon-active{
	background: #4CAF50;
}
</style>
