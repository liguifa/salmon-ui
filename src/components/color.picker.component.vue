<template>
	<div class="sui-color">
		<div class="sui-color-title" @click="active">
			<div :style="{background:color}"></div>
			<Icon v-if="!isActive" type="angle_down" />
			<Icon v-if="isActive" type="angle_up" />
		</div>
		<div v-if="isActive" class="sui-color-body">
			<div class="sui-color-body-color" :style="{background:background}" @click="choose">
				<div class="sui-color-body-color-dot" :style="{left:dotleft,top:dottop}"></div>
			</div>
			<div class="sui-color-body-bar" @click="chooseSpan">
				<div class="sui-color-body-bar-active" :style="{left:spanleft}"></div>
			</div>
			<div class="sui-color-body-input">
				<input v-model="color" />
				<Button text="确定" @on-click="ok" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		value:{
			type:String,
			default:"#000000"
		}
	},
	data(){
		return {
			color: this.value,
			activeColor: this.value,
			isActive:false,
			colorSpans:[
				{from:"black", to:"blue"},
				{from:"blue", to:"red"},
				{from:"red", to:"yellow"},
				{from:"yellow", to:"green"},
				{from:"green", to:"white"},
			],
			colors:{
				black:{r:0, g:0, b:0},
				blue:{r:0, g:0, b:255},
				red:{r:255, g:0, b:0},
				yellow:{r:255, g:255, b:0},
				green:{r:0, g:255, b:0},
				white:{r:255, g:255, b:255},
			},
			currentSpan:{from:"black", to:"blue"},
			spanleft:0,
			dotleft:0,
			dottop:0
		}
	},
	computed:{
		background(){
			return `linear-gradient(to right, ${this.currentSpan.from}, ${this.currentSpan.to})`
		}
	},
	methods:{
		active(){
			this.isActive = !this.isActive;
			if(!this.isActive){
				this.color = this.activeColor;
			}
		},
		chooseSpan(e){
			let span = parseInt((e.offsetX / 240) * 5);
			this.spanleft = e.offsetX + "px";
			this.currentSpan = this.colorSpans[span];
		},
		choose(e){
			this.dotleft = e.offsetX + "px";
			this.dottop = e.offsetY + "px";
			let start = this.colors[this.currentSpan.from];
			let end = this.colors[this.currentSpan.to];
			let percentage = e.offsetX / 240;
			let r = parseInt(Math.abs(end.r - start.r) * percentage);
			let g = parseInt(Math.abs(end.g - start.g) * percentage);
			let b = parseInt(Math.abs(end.b - start.b) * percentage);
			this.color = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
		},
		ok(){
			this.activeColor = this.color;
			this.$emit("input", this.color);
			this.active();
		}
	}
}
</script>

<style>
.sui-color{
	position: relative;
}

.sui-color-title{
	height: 34px;
	width: 60px;
    border:1px solid #e5e6e7;
    box-sizing: border-box;
    color:#676a6c;
	border-radius: 2px;
	cursor: pointer;
}

.sui-color-title div{
	width: 20px;
	height: 20px;
	margin-top: 7px;
	margin-left: 7px;
	float: left;
}

.sui-color-title i{
	margin-top: 7px;
	margin-right: 5px;
	font-size: 18px;
	float: right;
}

.sui-color-body{
	width: 256px;
	height: 254px;
	box-shadow: 0 1px 6px rgba(0,0,0,.2);
	position: absolute;
	top: 34px;
	left: 1px;
	background: #ffffff;
}

.sui-color-body-color{
	width: 240px;
	height: 180px;
	margin: 8px;
	cursor: pointer;
	position: relative;
}

.sui-color-body-color-dot{
	width: 4px;
    height: 4px;
    box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
    border-radius: 50%;
    -webkit-transform: translate(-2px,-2px);
    transform: translate(-2px,-2px);
	position: absolute;
}

.sui-color-body-bar{
	width: 240px;
	height: 10px;
	margin-left: 8px;
	background: linear-gradient(to right, black, blue, red, yellow, green, white);
	margin-bottom: 8px;
	cursor: pointer;
	position: relative;
}

.sui-color-body-input{
	border-top:1px solid #DCDEE2;
	width: 100%;
	padding:8px;
	box-sizing: border-box;
}

.sui-color-body-input input{
	width: 171px;
	height: 18px;
	border:1px solid #DCDEE2;
	border-radius: 2px;
	padding: 2px;
	padding-left: 4px;
	outline: none;
}

.sui-color-body-input button{
	width: 50px;
	height: 24px;
	float: right;
	border: none;
	text-align: center;
	font-size: 14px;
	padding: 0px;
}

.sui-color-body-bar-active{
	cursor: pointer;
    margin-top: 1px;
    width: 4px;
    border-radius: 1px;
    height: 8px;
    box-shadow: 0 0 2px rgba(0,0,0,.6);
    background: #fff;
    -webkit-transform: translateX(-2px);
    transform: translateX(-2px);
	position: absolute;
	top:0px;
	margin-top: 1px;
}
</style>
