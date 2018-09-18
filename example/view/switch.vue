<template>
	<div class="menu">
		<h2>SuiSwitch 开关</h2>
		<p>表单组件，在两种状态间切换时用到的开关选择器。</p>
		<h3>示例</h3>
		<div>
			<SuiSwitch />
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
				["checked", "是否选中,单独使用时有效，支持.sync","Boolean","false"]
			],
			events:[
				["update:checked","选中状态改变时触发，单独使用时有效","checked"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<SuiSwitch />
</template>`
	}
}
</script>
