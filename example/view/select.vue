<template>
	<div>
		<h2>Select 选择器</h2>
		<p>表单组件,使用模拟的增强下拉选择器来代替浏览器原生的选择器。</p>
		<h3>示例</h3>
		<div>
			<Select :items="items"></Select>
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
	</div>
</template>

<script>
export default {
	data(){
		return {
			items:[
				{label:"鞍山",value:"as"},
				{label:"沈阳",value:"sy"},
				{label:"大连",value:"dl"},
				{label:"北京",value:"bj"},
				{label:"成都",value:"cd"},
				{label:"贵阳",value:"gy"}
			],
			props:[
				["value", "选择器值，可使用v-model","String","-"],
				["items","选项，数据，label:显示值，value:选择值","Array","-"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Select :items="items"></Select>
	items:[
		{label:"鞍山",value:"as"},
		{label:"沈阳",value:"sy"},
		{label:"大连",value:"dl"},
		{label:"北京",value:"bj"},
		{label:"成都",value:"cd"},
		{label:"贵阳",value:"gy"}
	],
</template>`
	}
}
</script>