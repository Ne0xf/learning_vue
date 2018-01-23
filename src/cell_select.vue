<template>
<a class="mint-cell">
	<div class="mint-cell-left"></div>
	
	<div class="mint-cell-wrapper">
		<div class="mint-cell-title">
			<span class="mint-cell-text">{{title}}</span> 
			<span class="mint-cell-label">{{label}}</span>
		</div>
		
		<div class="mint-cell-value" style="flex: 2.5;position: relative;">
			<treeselect v-model="valuecree" :multiple="true" :options="source" :placeholder="placeholder"/>
		</div>
	</div>
	<div class="mint-cell-right"></div>
</a>

</template>

<script>

  export default {
	name: 'cell-select',
	props:{
		title:String,
		label:String,
		source:{},
		placeholder:String,
		keys:String
	},
	computed:{
		valuecree:{
			get() {
				
			},
			set(val) {
				this.$emit('updateselect',{key:this.keys,value:val});
			}
		}
	}
  }
</script>
