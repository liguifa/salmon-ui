<template>
	<div class="component">
		<Broadside>
			<MenuItem title="快速入门" url="#/component/install" />
			<MenuItem title="按钮" url="#/component/button" />
			<MenuItem title="菜单" url="#/component/menu" />
			<MenuItem title="时间线" url="#/component/timeline" />
		</Broadside>
		<div>
			<router-view />
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
}

.component > div:last-child{
	flex-grow: 1;
	padding: 10px 20px;
}

.component *{
	color: #41464b;
}
</style>
