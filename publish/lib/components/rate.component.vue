<template>
	<div class="sui-rate">
		<div class="sui-rate-star" @mousemove="choose" @mouseout="cancel" @click="active">
			<Icon v-for="star in stars" :key="star.value" :value="star.value" :type="star.icon" :class="{'sui-rate-icon-active':star.isActive}" />
		</div>
		<span>{{value}}星</span>
	</div>
</template>

<script>
export default {
	props:{
		max:{
			type:Number,
			default:5
		},
		value:{
			type:Number,
			default:1
		}
	},
	data(){
		return {
			current:this.value,
			isChoose:false
		}
	},
	methods:{
		choose(e){
			if(e.target.attributes["value"]){
				this.current = parseInt(e.target.attributes["value"].value);
				this.isChoose = true;
			}
		},
		cancel(){
			this.current = this.value;
			this.isChoose = false;
		},
		active(){
			if(this.isChoose){
				this.value = this.current;
				this.$emit("input", this.current);
			}
		}
	},
	computed:{
		stars(){
			let stars = []
			for(let i=1;i<=this.max;i++){
				stars.push({
					value:i,
					isActive:i<=this.current,
					icon:i<=this.current ? "star": "star_empty"
				});
			}
			return stars;
		}
	}
}
</script>

<style>
.sui-rate-star{
	display: inline-block;
}

.sui-rate-icon-active{
	color:#F5A623;
}
</style>
