<template>
	<div class="button">
		<h2>Button 按钮</h2>
		<p>基础组件，触发业务逻辑时使用。</p>
		<h3>示例</h3>
		<div>
			<Button type="default" text="default" />
			<Button type="primary" text="primary" />
			<Button type="normal" text="normal" />
			<Button type="warn" text="warn" />
			<Button type="danger" text="danger" />
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
				["type", "按钮类型，可选值为 default、primary、normal、warn、danger或者不设置","String","default"],
				["text", "按钮文本","String","-"],
				["ghost","幽灵属性,使按钮背景透明","Boolean","false"]
			],
			events:[
				["on-click","鼠标点击事件","-"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Button type="default" text="default" />
	<Button type="primary" text="primary" />
	<Button type="normal" text="normal" />
	<Button type="warn" text="warn" />
	<Button type="danger" text="danger" />
</template>`
	}
}
</script>
