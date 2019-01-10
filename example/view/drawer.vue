<template>
	<div class="button">
		<h2>Drawer 抽屉</h2>
		<p>抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。</p>
		<h3>示例</h3>
		<div>
			<Drawer v-model="isShow" title="详细信息" :mask-closable="false" :show-footer="false" :width="800">
				<Table :items=files>
					<Thead title="属性" width="20" />
					<Thead title="值" width="140" />
				</Table>
			</Drawer>
			<Button text="点我" @on-click="isShow = true" />
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
				["value", "是否显示抽屉，可使用v-model绑定", "Boolean", "false"],
				["title", "抽屉标题","String",""],
				["okText","确认按钮文本","String","确定"],
				["cancelText","取消按钮文本","String","取消"],
				["width", "抽屉的宽度", "Number", "400"],
				["mask", "是否显示遮罩层", "Boolean", "true"],
				["show-header", "是否显示头部标题", "Boolean", "true"],
				["show-footer", "是否显示尾部", "Boolean", "true"],
				["closable", "是否可以关闭", "Boolean", "true"],
				["mask-closable", "点击遮罩是否可以关闭", "Boolean", "true"],
			],
			events:[
				["ok","点击确定时触发","-"],
				["cancel","点击取消时触发","-"]
			],
			files:[
				["文件名", "index.html"],
				["文件路径", "/users/liguifa/codes/"],
				["文件大小", "23 k"],
				["文件类型", "网页文件"],
				["创建时间", "2018/12/12 12:12:12"],
				["修改时间", "2018/12/12 12:12:12"],
				["作者", "liguifa"]
			],
			isShow: false
		}
	},
	mounted(){
		this.$refs.code.innerText = `<template>
	<Drawer v-model="isShow" title="详细信息" :mask-closable="false" :show-footer="false" :width="800">
		<Table :items=files>
			<Thead title="属性" width="20" />
			<Thead title="值" width="140" />
		</Table>
	</Drawer>
	<Button text="点我" @on-click="isShow = true" />
</template>`
	}
}
</script>
