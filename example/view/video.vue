<template>
	<div class="menu">
		<h2>Video 视频播放器</h2>
		<p>网页视频播放器。</p>
		<h3>示例</h3>
		<div>
			<Video src="http://img.ksbbs.com/asset/Mon_1605/25d705200a4eab4.mp4" preload />
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
			props:[
				["src", "视频路径","String","-"],
				["preload","是否预加载视频资源","Boolean","false"]
			]
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Video src="http://img.ksbbs.com/asset/Mon_1605/25d705200a4eab4.mp4" preload />
</template>`
	}
}
</script>

<style>

