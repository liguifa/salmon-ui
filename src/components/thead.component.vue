<template>
	<th :align="align" valign="center" class="sui-table-header" @click="sort" :width="width">
		<span style="line-height:23px;float:left;">{{title}}</span>
		<Icon v-if="isSorted && sortType === 'asc'" type="up" size="12" />
		<Icon v-else-if="isSorted" type="down" size="12" />
	</th>
</template>

<script>
import Icon from "./icon.component.vue";

export default {
	props:{
		title: {
			type:String
		},
		key: {
			type: String,
			required: true
		},
		align: {
			type:String,
			default:"left"
		},
		width: {
			type:String
		},
		sortable: {
			type: Boolean,
			default: false
		},
		isSorted: {
			type: Boolean,
			default: false
		},
		sortType: {
			type: String,
			validator: value => ["asc", "desc"].includes(value)
		}
	},
	methods: {
		sort() {
			this.sortType = this.sortType === "asc" ? "desc" : "asc";
			this.$emit("sort", {
				key: this.key,
				type: this.sortType
			});
		}
	},
	components: {
		Icon
	}
}
</script>

<style>
.sui-table-header {
	cursor: pointer;
}

.sui-table-header span{
	cursor: pointer;
}
</style>
