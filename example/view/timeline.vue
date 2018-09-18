<template>
	<div class="menu">
		<h2>Timeline 时间线</h2>
		<p>对一系列信息进行时间排序时。</p>
		<h3>示例</h3>
		<div>
			<Timeline :items="items" />
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
				{title:"春",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"},
				{title:"夏",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"},
				{title:"秋",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"},
				{title:"冬",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"}
			],
			props:[
				["items", "时间线项","Array","-"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Timeline :items="items" />
	items:[
		{title:"春",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"},
		{title:"夏",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"},
		{title:"秋",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"},
		{title:"冬",icon:"./assets/logo.png",introduction:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。",content:"Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。Visual Studio Code 无法监视这个大型工作区的文件变化。请访问说明链接解决此问题。"}
	],
</template>`
	}
}
</script>

<style>

