<template>
	<div class="sui-page">
		<ul>
			<li><Icon type="left_oper" /></li>
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
			<li><a href="#">4</a></li>
			<li><a href="#">5</a></li>
			<li><Icon type="right_oper" /></li>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<style>
.sui-page ul{
	list-style: none;
	padding: 0px;
	margin: 0px;
}

.sui-page ul li{
	display: inline-block;
	width: 32px;
	height: 32px;
	font-weight: 500;
	border: 1px solid #dcdee2;
    border-radius: 4px;
    transition: border .2s ease-in-out,color .2s ease-in-out;
	line-height: 38px;
	text-align: center;
	font-size: 14px;
}

.sui-page ul li:hover{
	border-color: #4CAF50;
}

.sui-page ul li a,.sui-page ul li i{
	text-align: center;
	text-decoration: none;
	color: black;
	width: 100%;
	height: 100%;
	display: inline-block;
	font-size: 14px;
}

.sui-page ul li a:hover,.sui-page ul li i:hover{
	color: #4CAF50;
}
</style>
