<template>
	<div class="sui-broadside">
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.sui-broadside{
	width: 220px;
	height: 100%;
	background: #ffffff;
	border-right: #DCDEE2 solid 1px;
}

.sui-broadside > ul{
	list-style: none;
	margin: 0px;
	padding: 0px;
	padding-top: 20px;
}

.sui-broadside > ul > li{
	line-height: 30px;
	padding: 0px 20px;
	height: auto;
}

.sui-broadside > ul > li > a{
	color:#41464b;
	font-size: 14px;
	text-decoration: none;
	margin: 0px;
	padding: 0px;
}

.sui-broadside > ul > li > a:hover{
	color: #4CAF50 !important;
}
</style>
