<template>
	<div class="menu">
		<h2>Input 输入框</h2>
		<p>表单组件，基本输入框。</p>
		<h3>示例</h3>
		<div class="items">
			<Input type="text" placeholder="输入账号" />
			<Input type="email" placeholder="输入邮箱" />
			<Input type="password" placeholder="输入密码器" />
		</div>
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
		<h3>事件</h3>
		<Table :items="events">
			<Thead title="事件名" width="20" />
			<Thead title="说明" width="140" />
			<Thead title="返回值" width="40" />
		</Table>
	</div>
</template>

<script>
export default {
	data(){
		return {
			props:[
				["value", "输入框值,支持v-model双向绑定","String","-"],
				["placeholder", "输入框水印文字","String","-"],
				["type", "输入类型,可选值为 text、email、password或不设置","String","text"],
			],
			events:[
				["input","输入值改变是触发","value"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Input type="text" placeholder="输入账号" />
	<Input type="email" placeholder="输入邮箱" />
	<Input type="password" placeholder="输入密码器" />
</template>`
	}
}
</script>

<style>
.items div{
	margin-bottom: 20px;
}
</style>

