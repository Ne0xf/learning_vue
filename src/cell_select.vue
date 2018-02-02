<template>
<a class="mint-cell">
	<div class="mint-cell-left"></div>
	
	<div class="mint-cell-wrapper">
		<div class="mint-cell-title">
			<span class="mint-cell-text">{{title}}</span> 
			<span class="mint-cell-label">{{label}}</span>
		</div>
		
		<div class="mint-cell-value" style="flex: 2.5;position: relative;">
			<treeselect v-model="valuecree" :multiple="true" :options="source" :placeholder="placeholder" :searchable="false"/>
		</div>
	</div>
	<div class="mint-cell-right"></div>
</a>

</template>

<script>
import Treeselect from '@riophae/vue-treeselect';

export default {
	name: 'cell-select',
	components: {
		"treeselect":Treeselect,
	},
	props:{
		title:String,
		label:String,
		source:{},
		placeholder:String,
		keys:String,
		value:Array,
	},
	computed:{
		valuecree:{
			get() {
				return this.value;
			},
			set(val) {
				//this.value = val;
				this.$emit('updateselect',{keys:this.keys,value:val});
			}
		}
	}
}
</script>
