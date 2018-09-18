<template>
	<th :align="align" :width="width">{{title}}</th>
</template>

<script>
export default {
	props:{
		title:{
			type:String
		},
		align:{
			type:String,
			default:"left"
		},
		width:{
			type:String
		}
	}
}
</script>

<style>

</style>
