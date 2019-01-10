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
	display: block;
    box-sizing: border-box;
    outline: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
	border: 1px solid #dcdee2;
	height: 32px;
	padding: 2px 4px;
	transition: all .2s ease-in-out;
	font-size: 16px;
	color: #515a6e;
}
.sui-select-title span{
	margin-top: 0px;
	margin-left: 4px;
}

.sui-select-title i{
	float: right;
	margin-right: 8px;
	margin-top: 2px;
	user-select: none;
	font-size: 24px !important;
    color: #808695;
    transition: all .2s ease-in-out;
}

.sui-select-menu{
	min-width: 200px;
    position: absolute;
    will-change: top, left;
	transform-origin: center bottom 0px;
	max-height: 300px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    position: absolute;
    z-index: 900;
	width: 100%;
}

.sui-select-menu-item{
	margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: #515a6e;
    font-size: 12px!important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background .2s ease-in-out;
}

.sui-select-menu-item:hover{
	background: #2d8cf0;
	color:#ffffff;
}
</style>
