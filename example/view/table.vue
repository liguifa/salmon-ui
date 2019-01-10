<template>
	<div class="menu">
		<h2>Table 表格</h2>
		<p>基础组件，主要用于展示大量结构化数据。</p>
		<h3>示例</h3>
		<div>
			<Table :items="persons">
				<Thead title="姓名" key="name" isSorted @sort="sort" />
				<Thead title="性别" />
				<Thead title="年龄" />
				<Thead title="手机" />
				<Thead title="工号" />
			</Table>
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
		<h3>Thead 属性</h3>
		<Table :items="thead_props">
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
			persons:[
				["李贵发","男",25,18888888888,5100],
				["公子词","男",76,18762312348,5101],
				["李太白","男",125,18802132134,5102],
				["杜大甫","男",97,19723423423,5103]
			],
			props:[
				["items", "表格数据，二维数组","Array","-"]
			],
			thead_props:[
				["title", "表格头标题","String","-"],
				["width", "表格头宽度","String","-"],
			]
		}
	},
	methods: {
		sort(sortInfo) {
			alert(sortInfo)
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Table :items="persons">
		<Thead title="姓名" />
		<Thead title="性别" />
		<Thead title="年龄" />
		<Thead title="手机" />
		<Thead title="工号" />
	</Table>
</template>`
	}
}
</script>

<style>

</style>

