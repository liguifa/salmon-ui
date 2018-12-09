<template>
	<div class="button">
		<h2>Alert 警告提示</h2>
		<p>静态地呈现一些警告信息，可手动关闭。</p>
		<h3>示例</h3>
		<div>
			<Alert show-icon closable type="info" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
			<Alert show-icon closable type="success" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
			<Alert show-icon closable type="warning" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
			<Alert show-icon closable type="error" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
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
				["type", "警告提示样式，可选值为info、success、warning、error", "String", "warning"],
				["closable", "是否可关闭","Boolean","false"],
				["show-icon","是否显示图标","Boolean","false"]
			],
			events:[
				["on-close","关闭时触发","-"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Alert show-icon closable type="info" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
	<Alert show-icon closable type="success" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
	<Alert show-icon closable type="warning" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
	<Alert show-icon closable type="error" text="生命不息，冲锋不止。前进！前进！！前进！！！" />
</template>`
	}
}
</script>
