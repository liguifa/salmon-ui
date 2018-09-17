<template>
	<li><a :href="url">{{title}}</a></li>
</template>

<script>
export default {
	props:{
		url:{
			type:String,
			required:false
		},
		title:{
			type:String,
			required:false
		},
	}
}
</script>
