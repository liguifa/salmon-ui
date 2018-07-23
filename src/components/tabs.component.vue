<template>
	<div class="sui-tabs">
		<ul class="sui-tabs-bar">
			<li class="sui-tabs-arrow sui-tabs-arrow-left"><img src="../assets/sui-arrow-left.png" /></li>
			<li :class="{'sui-tabs-active':tab.isActive}" v-for="tab in tabs" :key="tab.title" @click="active(tab.title)">{{tab.title}}</li>
			<li class="sui-tabs-arrow sui-tabs-arrow-right"><img src="../assets/sui-arrow-right.png" /></li>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return {
			tabs:[]
		}
	},
	methods:{
		active(title){
			this.tabs = this.tabs.map(tab=>{
				return {...tab,isActive:tab.title === title}
			})
		}
	},
	mounted(){
		this.tabs = this.$slots.default.filter(slot=>slot.tag).map(slot=>{
			return {title:slot.data.attrs.title,isActive:false}
		})
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
	}

	.sui-tabs-bar > li{
		display: inline-block;
		border-right:#eee 1px solid;
		cursor: pointer;
		width:90px;
		line-height: 40px;
		vertical-align: middle;
		text-align: center;
		color: #777;
		background: #fafafa;
	}

	.sui-tabs-bar > li:hover{
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
