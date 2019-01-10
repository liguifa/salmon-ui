<template>
	<div :class="{'sui-switch sui-switch-active':isActive, 'sui-switch':!isActive}" @click="active">
		<div v-if="isActive" class="sui-switch-on">
			<div></div>
			<span>开</span>
		</div>
		<div v-if="!isActive" class="sui-switch-off">
			<span>关</span>
			<div></div>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		checked: {
			type:Boolean
		}
	},
	data(){
		return {
			isActive:this.checked
		}
	},
	methods:{
		active(){
			this.isActive = !this.isActive;
			this.$emit("update:checked", this.isActive);
		}
	}
}
</script>

<style>
.sui-switch{
	height: 22px;
	width: 54px;
	border-radius: 22px;
	overflow: hidden;
	text-overflow: clip;
	cursor: pointer;
	user-select: none;
	border:1px solid #ccc;
}

.sui-switch-active{
	border:1px solid #2d8cf0;
}

.sui-switch-on{
	background: #2d8cf0;
	width: 100%;
	height: 100%;
	padding: 2px;
}

.sui-switch-on div{
	height: 18px;
	width: 18px;
	border-radius: 50%;
	background: #ffffff;
	display: inline-block;
}

.sui-switch-on span{
	color: #ffffff;
	font-size: 14px;
	float: right;
	margin-right: 14px;
	margin-top: -2px;
}

.sui-switch-off{
	background: #ccc;
	width: 100%;
	height: 100%;
	padding: 2px;
}

.sui-switch-off div{
	height: 18px;
	width: 18px;
	border-radius: 50%;
	background: #ffffff;
	float: right;
	margin-right: 6px;
}

.sui-switch-off span{
	color: #ffffff;
	font-size: 14px;
	float: left;
	margin-left: 8px;
	margin-top: -2px;
}
</style>
