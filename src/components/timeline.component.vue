<template>
	<div class="sui-timeline">
		<div class="sui-timeline-line">
			<div class="sui-timeline-line-center"></div>
			<ul class="sui-timeline-line-icon">
				<li v-for="item in items" :key="item.icon"><img :src="item.icon" /></li>
			</ul>
		</div>
		<div class="sui-timeline-content">
			<div class="sui-timeline-content-item" v-for="item in items" :key="item.title">
				<h2>{{item.title}}</h2>
				<p>{{item.introduction}}</p>
				<div><p>{{item.content}}</p></div>
			</div>
		</div>
	</div>
</template>

<script>
import SuiButton from "./button.component.vue"

export default {
	props:{
		items:{
			type:Array,
			default:[]
		}
	},
	components:{
		SuiButton
	}
}
</script>

<style>
	.sui-timeline{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: row;
	}

	.sui-timeline-line{
		width:40px;
		flex-grow: 0;
		position: relative;
	}

	.sui-timeline-content{
		flex-grow: 1;
		margin-left: 30px;
		width:100px;
	}

	.sui-timeline-content-item{
		height: 130px;
		width: calc(100% - 20px);
		margin-bottom: 26px;
		background: #f3f3f4;
		padding: 0px 10px 10px 10px;
		color:#676a6c;
		box-sizing: border-box;
	}

	.sui-timeline-content-item > h2{
		font-size: 18px;
		font-weight: 400;
		margin-top:4px;
		margin-bottom: 4px;
	}

	.sui-timeline-content-item > p{
		margin: 1px;
		font-size: 13px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.sui-timeline-content-item > div{
		height: 70px;
		width:100%;
		font-size: 13px;
		text-indent: 2em;
	}

	.sui-timeline-content-item > div > p{
		overflow: hidden;
		text-overflow: ellipsis;
		height: 60px;
	}

	.sui-timeline-line-center{
		position: absolute;
		top:0px;
		left:50%;
		height: 100%;
		width: 4px;
		background: #e7eaec;
	}

	.sui-timeline-line-icon{
		position: absolute;
		top:0px;
		left:calc(50% - 18px);
		width: 40px;
		height: 100%;
		list-style: none;
		margin:0px;
		padding: 0px
	}

	.sui-timeline-line-icon > li{
		width: 40px;
		height: 40px;
		background: #1AB394;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 116px;
	}

	.sui-timeline-line-icon > li > img{
		vertical-align: middle;
		width: 36px;
		height:36px;
	}
</style>
