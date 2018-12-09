<template>
	<div class="button">
		<h2>Confirm 确认对话框</h2>
		<p>用于二次确认的对话框。</p>
		<h3>示例</h3>
		<div>
			<Confirm text="是否确认删除?">
				<Button text="点我" />
			</Confirm>
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
				["title", "对话框标题", "String", "提示"],
				["text", "对话框文本","Strinig","-"]
			],
			events:[
				["ok","点击确认时触发","-"],
				["cancel", "点击取消时触发", "-"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Confirm text="是否确认删除?">
		<Button text="点我" />
	</Confirm>
</template>`
	}
}
</script>
