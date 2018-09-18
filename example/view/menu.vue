<template>
	<div class="menu">
		<h2>Menu 菜单</h2>
		<p>基础组件，为页面和功能提供导航的菜单列表，用于网站顶部。</p>
		<h3>示例</h3>
		<div>
			<Menu title="Salmon UI" logo="./assets/logo.png" isLogin>
				<MenuItem title="首页" url="/" />
				<MenuItem title="课程" url="/" />
				<MenuItem title="价格" url="/" />
				<MenuItem title="讨论" url="/" />
				<MenuItem title="关于" url="/" />
			</Menu>
		</div><br />
		<h3>代码</h3>
		<div class="code" ref="code">
		</div>
		<h3>属性</h3>
		<Table :items="props">
			<Thead title="属性" width="20" />
			<Thead title="说明" width="140" />
			<Thead title="类型" width="40" />
			<Thead title="默认值" width="40" />
		</Table>
		<h3>MenuItem 属性</h3>
		<Table :items="item_props">
			<Thead title="属性" width="20" />
			<Thead title="说明" width="140" />
			<Thead title="类型" width="40" />
			<Thead title="默认值" width="40" />
		</Table>
	</div>
</template>

<script>
export default {
	data(){
		return {
			props:[
				["title", "菜单标题","String","-"],
				["logo", "菜单图标","String","-"],
				["isLogin", "是否显示登录选项","Boolean","false"],
			],
			item_props:[
				["title", "菜单项标题","String","-"],
				["url", "菜单项链接","String","-"]
			],
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Menu title="Salmon UI" logo="./assets/logo.png" isLogin>
		<MenuItem title="首页" url="/" />
		<MenuItem title="课程" url="/" />
		<MenuItem title="价格" url="/" />
		<MenuItem title="讨论" url="/" />
		<MenuItem title="关于" url="/" />
	</Menu>
</template>`
	}
}
</script>

