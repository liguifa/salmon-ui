<template>
	<div>
		<h2>Page 分页</h2>
		<p>基础组件，当数据量较多时，使用分页可以快速进行数据切换。</p>
		<h3>示例</h3>
		<div>
			<Page />
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
		<h3>RadioGroup 属性</h3>
		<Table :items="group_props">
			<Thead title="属性" width="20" />
			<Thead title="说明" width="140" />
			<Thead title="类型" width="40" />
			<Thead title="默认值" width="40" />
		</Table>
		<h3>RadioGroup 事件</h3>
		<Table :items="group_events">
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
				["label", "显示的文字","String","-"],
				["value", "选项框的值","String","-"],
				["checked", "是否选中,单独使用时有效，支持.sync","Boolean","false"],
			],
			events:[
				["update:checked","选中状态改变时触发，单独使用时有效","checked"]
			],
			group_props:[
				["value", "选项框的值，支持v-model","String","-"]
			],
			group_events:[
				["input","选中值改变时触发","value"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Page />
</template>`
	}
}
</script>