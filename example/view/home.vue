<template>
	<div class="home">
		<div class="home-bg">	
		</div>
		<div class="home-title">
			<img src="../../assets/logo.png" />
			<h1>基于VUE的简单的前端组件库</h1>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
html,body,#app{
	height: 100%;
	width: 100%;
	overflow: hidden;
}

.home{
	width: 100%;
	height: 100%;
}

.home-bg{
	background: url("../../assets/200912092147545.jpg");
	background-size: cover;
	width: 100%;
	height: 100%;
    filter: blur(4px);
}

.home-title{
	position: fixed;
	top:0px;
	left: 0px;
	width: 100%;
	height: 100%;
	text-align: center;
	padding-top: 300px;
	color: #ffffff;
}

.home-title h1{
	color:#ffffff;
}
</style>
