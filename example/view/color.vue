<template>
	<div class="button">
		<h2>ColorPicker 颜色选择器</h2>
		<p>表单组件，用于颜色选择，支持多种颜色格式，支持颜色预设。。</p>
		<h3>示例</h3>
		<div>
			<ColorPicker value="#823456" />
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
				["value", "选中颜色值,可使用v-model绑定","String","-"]
			],
			events:[
				["input","颜色值改变时触发","-"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<ColorPicker value="#823456" />
</template>`
	}
}
</script>
