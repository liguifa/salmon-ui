<template>
	<div class="sui-tabs">
		<ul class="sui-tabs-bar">
			<li class="sui-tabs-arrow sui-tabs-arrow-left" @click="leftMove()"><img src="../assets/sui-arrow-left.png" /></li>
			<li class="sui-tabs-bar-body">
				<ul :style="{left:left+'px'}">
					<li :class="{'sui-tabs-active':tab.isActive}" v-for="tab in tabData" :key="tab.title" @click="active(tab.title)">{{tab.title}}</li>
				</ul>
			</li>
			<li class="sui-tabs-arrow sui-tabs-arrow-right" @click="rightMove()"><img src="../assets/sui-arrow-right.png" /></li>
		</ul>
		<!-- <slot name="extra"> -->
			<div v-html="activeContent"></div>
		<!-- </slot> -->
	</div>
</template>

<script>
export default {
	props:{
		tabs:{
			type:Array,
			default:[]
		}
	},
	data(){
		return {
			left:0
		}
	},
	methods:{
		active(title){
			this.tabs = this.tabs.map(tab=>{
				return {...tab,isActive:tab.title === title}
			})
		},
		leftMove(){
			let width = this.tabData.length*91
			if(this.left > (0 - width)){
				this.left -= 91
			}
		},
		rightMove(){
			if(this.left < 0){
				this.left += 91
			}
		}
	},
	computed:{
		tabData(){
			if(this.$slots && this.$slots.default){
				let tabs = this.$slots.default.filter(slot=>slot.tag).map(slot=>{
					return {title:slot.data.attrs.title,isActive:slot.data.attrs["is-active"]!=undefined?true:false}
				})
				if(this.tabs){
					return tabs.concat(this.tabs)
				}
				return tabs
			}
			return this.tabs
		},
		activeContent(){
			let tabs = this.tabData;
			let active = tabs.find(tab=>{
				return tab.isActive
			})
			return active ? active.content : ""
		}
	},
	mounted(){
		
	}
}
</script>

<style>
	.sui-tabs{
		width:100%;
		height: 100%;
	}

	.sui-tabs-bar{
		list-style-type: none;
		margin:0px;
		padding: 0px;
		height: 40px;
		width: 100%;
		border-bottom: solid 2px #2f4050;
		border-top:solid 1px #eee;
		overflow: hidden;
		text-overflow: ellipsis;
		display: flex;
		flex-direction: row;
	}

	.sui-tabs-bar-body{
		height: 40px;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		flex-grow: 1;
	}

	.sui-tabs-bar-body > ul{
		padding: 0px;
		margin:0px;
		list-style-type: none;
		position: relative;
	}

	.sui-tabs-bar > li,.sui-tabs-bar-body ul>li{
		display: inline-block;
		border-right:#eee 1px solid;
		cursor: pointer;
		width:90px;
		line-height: 40px;
		vertical-align: middle;
		text-align: center;
		color: #777;
		background: #fafafa;
		text-overflow:ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}

	.sui-tabs-arrow:hover,.sui-tabs-bar-body ul > li:hover{
		background-color:#eee;
	}

	.sui-tabs-arrow{
		width: 40px !important;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: #ffffff !important;
	}

	.sui-tabs-arrow img{
		width: 18px;
		height: 18px;
		vertical-align: middle;
		text-align: center;
	}

	.sui-tabs-arrow-left{
		float:left;
	}

	.sui-tabs-arrow-right{
		float:right;
		border-left:#eee 1px solid;
	}

	.sui-tabs-active{
		background: #2f4050 !important;
		color:#ffffff !important;
		border-top:#2f4050 1px solid;
		margin-top: -1px;
	}
</style>
