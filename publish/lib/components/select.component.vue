<template>
	<div class="sui-select">
		<div class="sui-select-title" @click="active">
			<span>{{current}}</span>
			<Icon v-if="!isActive" type="angle_down" />
			<Icon v-if="isActive" type="angle_up" />
		</div>
		<div v-if="isActive" class="sui-select-menu">
			<slot>
				<div class="sui-select-menu-item" v-for="item in items" :key="item.value" @click="choose(item)">{{item.label}}</div>
			</slot>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		value:{
			type:String
		},
		items:{
			type:Array
		}
	},
	data(){
		return {
			current:this.value,
			isActive:false
		}
	},
	methods:{
		active(){
			this.isActive = !this.isActive;
		},
		choose(item){
			this.current = item.label;
			this.isActive = false;
			this.$emit("input", item.value);
		}
	}
}
</script>

<style>
.sui-select{
	width: 100%;
	position: relative;
}

.sui-select-title{
	height: 34px;
	width: 100%;
    border:1px solid #e5e6e7;
    padding: 6px 12px;
    box-sizing: border-box;
    color:#676a6c;
	border-radius: 2px;
	cursor: pointer;
}
.sui-select-title span{
	margin-top: 0px;
	margin-left: 4px;
}

.sui-select-title i{
	float: right;
	font-size: 22px;
	margin-right: -4px;
	margin-top: 0px;
	user-select: none;;
}

.sui-select-menu{
	border:1px solid #e5e6e7;
	border-top: 0px;
	width: 100%;
	position: absolute;
	top:34px;
	left: 0px;
	background: #ffffff;
	box-sizing: border-box;
}

.sui-select-menu-item{
	width: 100%;
	height: 40px;
	padding: 10px 0px;
	padding-left: 14px;
	box-sizing: border-box;
	cursor: pointer;
}

.sui-select-menu-item:hover{
	background: #4CAF50;
	color:#ffffff;
}
</style>
