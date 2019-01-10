<template>
	<div class="sui-table">
		<table class="sui-table-title">
			<thead ref="title">
				<tr><slot></slot></tr>
			</thead>
		</table>
		<table class="sui-table-body">
			<tbody ref="body">
				<tr v-for="item in entities" :key="item.key">
					<td v-for="title in item.data" :key="title">{{title}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props:{
		items:{
			type:Array,
			required:true
		}
	},
	data(){
		return {
			entities:this.items.map((item,i) => {
				return {key:i,data:item}
			})
		}
	},
	mounted(){
		let heads = [].filter.call(this.$refs.title.getElementsByTagName("th"), (item)=>{
			return item.nodeType == 1;
		});
		let trs = [].filter.call(this.$refs.body.getElementsByTagName("tr"), (item)=>{
			return item.nodeType == 1;
		});
		trs.forEach(tr => {
			let tds = [].filter.call(tr.getElementsByTagName("td"), (item)=>{
				return item.nodeType == 1;
			});
			for(let i in tds){
				tds[i].style.width = heads[i].clientWidth+1+"px";
			}
		});
	}
}
</script>

<style>
.sui-table{
	width: 100%;
	height: 100%;
}

.sui-table-title{
	width: 100%;
	border-top:2px solid #4CAF50;
	border-bottom:1px solid #DCDEE2;
	border-spacing: 0px;
    border-collapse: collapse;
	box-sizing: border-box;
}

.sui-table-title th{
	border-left: 1px solid #DCDEE2;
	border-right: 1px solid #DCDEE2;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 14px;
	box-sizing: border-box;
}

.sui-table-body{
	width: 100%;
	border-spacing: 0px;
    border-collapse: collapse;
	margin-top: -1px;
}

.sui-table-body td{
	border: 1px solid #DCDEE2;
    padding: 9px 15px;
    min-height: 20px;
    line-height: 20px;
    font-size: 14px;
	box-sizing: border-box;
	
}
</style>
