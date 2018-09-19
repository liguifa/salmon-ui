<template>
	<div :class="cls"></div>
</template>

<script>
export default {
	data(){
		return {
			isFinish:false
		}
	},
	computed:{
		cls(){
			let cls = "sui-loadbar ";
			cls += this.isFinish ? "sui-loadbar-animation-end" : "sui-loadbar-animation-start";
			return cls;
		}
	},
	methods:{
		start(){
			this.isFinish = false;
		},
		finish(){
			this.isFinish = true;
		}
	}
}
</script>

<style>
.sui-loadbar{
	position: fixed;
	top:0px;
	left: 0px;
	height: 2px;
	z-index: 1000;
	background: #4CAF50;
	width: 0px;
}

@keyframes start {
	0% {width: 0}
	100% {width: 80%}
}

@keyframes end {
	0% {width: 80%}
	99% {width: 100%}
	100% {width: 0%}
}

.sui-loadbar-animation-start{
	animation: 1s 0s start ease-out 1 forwards normal;
}

.sui-loadbar-animation-end{
	animation: 1s 0s end ease-in 1 forwards normal;
}
</style>
