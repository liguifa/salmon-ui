<template>
	<div>
		<h2>Checkbox 复选框</h2>
		<p>表单组件，复选框，主要用于一组可选项多项选择，或者单独用于标记切换某种状态。</p>
		<h3>示例</h3>
		<div>
			<CheckboxGroup v-model="city">
				<Checkbox label="鞍山" value="as" />
				<Checkbox label="沈阳" value="sy" />
				<Checkbox label="大连" value="dl" />
				<Checkbox label="北京" value="bj" />
				<Checkbox label="成都" value="cd" />
				<Checkbox label="贵阳" value="gy" />
			</CheckboxGroup>
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
		<h3>CheckboxGroup 属性</h3>
		<Table :items="group_props">
			<Thead title="属性" width="20" />
			<Thead title="说明" width="140" />
			<Thead title="类型" width="40" />
			<Thead title="默认值" width="40" />
		</Table>
		<h3>CheckboxGroup 事件</h3>
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
	<CheckboxGroup v-model="city">
		<Checkbox label="鞍山" value="as" />
		<Checkbox label="沈阳" value="sy" />
		<Checkbox label="大连" value="dl" />
		<Checkbox label="北京" value="bj" />
		<Checkbox label="成都" value="cd" />
		<Checkbox label="贵阳" value="gy" />
	</CheckboxGroup>
</template>`
	}
}
</script>

