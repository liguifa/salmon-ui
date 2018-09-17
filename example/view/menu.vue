<template>
	<div class="menu">
		<h2>Button 按钮</h2>
		<p>基础组件，触发业务逻辑时使用。</p>
		<h3>示例</h3>
		<div>
			<Menu title="Salmon UI" logo="./assets/logo.png" isLogin>
				<MenuItem title="首页" url="/" />
				<MenuItem title="课程" url="/" />
				<MenuItem title="价格" url="/" />
				<MenuItem title="讨论" url="/" />
				<MenuItem title="关于" url="/" />
			</Menu>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>
.menu > div > .sui-menu{
	position: relative !important;
	top:0px;
}
</style>

