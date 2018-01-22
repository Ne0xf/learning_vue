<template>
<a class="mint-cell">
	<div class="mint-cell-left"></div>
	
	<div class="mint-cell-wrapper">
		<div class="mint-cell-title">
			<span class="mint-cell-text">{{title}}</span> 
			<span class="mint-cell-label">{{label}}</span>
		</div>
		
		<div class="mint-cell-value" style="flex: 2.5;position: relative;">
			<treeselect v-model="value" :multiple="true" :options="source" />
		</div>
	</div>
	<div class="mint-cell-right"></div>
</a>

</template>

<style>

</style>

<script>

  export default {
	name: 'cell-select',
	data(){
		return{
			value:null,
		}
	},
	props:{
		'title':{},
		'label':{},
		'source':{}
	},
  }
</script>
