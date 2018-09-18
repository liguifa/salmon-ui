<template>
	<div class="menu">
		<h2>Rate 评分</h2>
		<p>对事物进行快速的评级操作，或对评价进行展示。</p>
		<h3>示例</h3>
		<div>
			<Rate :max="5" />
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
				["value", "评分值，可用v-model绑定","String","-"],
				["max","星星的个数","Number","5"]
			],
			events:[
				["input","选中值改变时触发","value"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Rate :max="5" />
</template>`
	}
}
</script>

<style>

