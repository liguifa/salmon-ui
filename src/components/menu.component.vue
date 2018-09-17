<template>
	<div class="sui-menu">
		<div class="sui-menu-title">
			<img :src="logo" />
			<h1>{{title}}</h1>	
		</div>
		<div class="sui-menu-items">
			<ul>
				<slot></slot>
				<slot name="login">
					<li v-if="isLogin" class="sui-menu-items-login"><a href="/login">登录/注册</a></li>
				</slot>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		logo:{
			type: String,
			default: ""
		},
		title:{
			type: String,
			required:true
		},
		isLogin:{
			type: Boolean
		}
	}
}
</script>

<style>
	.sui-menu{
		height: 50px;
		width: 100%;
		background: #ffffff;
		box-shadow: 0 2px 3px 0 rgba(100,100,100,0.15);
		position: fixed;
		top:0px;
		left: 0px;
		z-index: 999;
	}

	.sui-menu-title{
		display: flex;
		flex-direction: row;
		line-height: 50px;
		float: left;
		margin-left: 10px;
	}

	.sui-menu-title > img{
		height: 46px;
		width: 46px;
	}

	.sui-menu-title > h1{
		color: #41464b;
		font-size: 22px;
		margin-top: 4px;
	}

	.sui-menu-items{
		float: right;
		margin-right: 10px;
		height: 50px;
		line-height: 50px !important;
	}

	.sui-menu-items > ul{
		padding: 0px;
		margin: 0px;
		list-style: none;
	}

	.sui-menu-items > ul > li{
		line-height: 50px;
		display: inline-block;
	}

	.sui-menu-items > ul > li > a{
		color: #41464b;
		font-size: 16px;
		padding: 15px 12px;
		text-decoration: none;
		font-weight: bold;
	}

	.sui-menu-items > ul > li > a:hover{
		color: #4CAF50;
	}

	.sui-menu-items-login > a{
		color:#FF9900 !important;
	}
</style>
