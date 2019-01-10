<template>
	<div :class="classes">
		<ul>
			<slot></slot>
		</ul>
	</div>
</template>

<script>
export default {
	props:{
		theme: {
			type: String,
			default: "light"
		}
	},
	computed: {
		classes() {
			return `sui-broadside sui-broadside-theme-${this.theme}`;
		}
	}
}
</script>

<style>
.sui-broadside{
	width: 220px;
	/* height: 100%; */
	background: #ffffff;
	border-right: #DCDEE2 solid 1px;
}

.sui-broadside-theme-dark{
	background: #363e4f;
	border-right: none;
}

.sui-broadside-theme-dark a{
	color: #ffffff !important;
}

.sui-broadside-theme-dark .sui-menuitem-li-h1{
	background: #515a6e;
	padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    transition: all .2s ease-in-out;
}

.sui-broadside > ul{
	list-style: none;
	margin: 0px;
	padding: 0px;
	padding-top: 20px;
}

.sui-broadside > ul > li{
	line-height: 30px;
	padding: 0px 30px;
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

.sui-menuitem-li-h1{
	padding: 10px 15px !important;
}

.sui-menuitem-li-h1 > a{
	font-size: 16px !important;
}

.sui-menuitem-li-h1 > a:hover{
	color:#41464b !important;
}
</style>
