<template>
	<div>
		<div class="component">
			<Broadside theme="dark">
				<MenuItem title="快速入门" url="#/component/install" />
				<MenuItem title="组件" level="h1" />
				<MenuItem title="图标" url="#/component/icon" />
				<MenuItem title="按钮" url="#/component/button" />
				<MenuItem title="输入框" url="#/component/input" />
				<MenuItem title="单选框" url="#/component/radio" />
				<MenuItem title="复选框" url="#/component/checkbox" />
				<MenuItem title="开关" url="#/component/switch" />
				<MenuItem title="选择器" url="#/component/select" />
				<MenuItem title="评分" url="#/component/rate" />
				<MenuItem title="颜色选择器" url="#/component/color" />
				<MenuItem title="表格" url="#/component/table" />
				<MenuItem title="菜单" url="#/component/menu" />
				<MenuItem title="分页" url="#/component/page" />
				<MenuItem title="时间线" url="#/component/timeline" />
				<MenuItem title="视频播放器" url="#/component/video" />
			</Broadside>
			<div>
				<router-view />
			</div>
		</div>
		<div class="sui-footer">
			<span>版权所有</span><a href="#/">Salmon UI</a>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
html,body,#app{
	overflow-y: auto;
	height: auto;
}

.component{
	background: #ffffff;
	width: calc(100% - 20px);
	/* height: calc(100% - 20px); */
	margin-left: 10px;
	margin-top: 10px;
	box-shadow: 2px 2px 13px 12px rgba(100,100,100,0.15);
	display: flex;
	flex-direction: row;
}

.component > div:first-child{
	flex-grow: 0;
	flex-shrink: 0;
}

.component > div:last-child{
	flex-grow: 0;
	padding: 10px 20px;
	width: calc(100% - 260px)
}

/* h1,h2,h3,h4,span,p{
	color: #41464b;
} */

.sui-footer{
    height: 40px;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    box-sizing: border-box;
    box-shadow: 0px -2px 2px 0px rgba(100,100,100,0.15);
    margin-top: 10px;
	background: #ffffff;
}

.sui-footer a{
	text-decoration: none;
}
</style>
