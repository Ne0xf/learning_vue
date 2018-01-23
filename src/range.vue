<template>
<a class="mint-cell">
	<div class="mint-cell-left"></div>
	<div class="mint-cell-wrapper">
	<div class="mint-cell-title">
	<span class="mint-cell-text">报警食物</span> 
	<span class="mint-cell-label">食物量:{{value}}</span></div>
	<div class="mint-cell-value" style="flex: 2.5;position: relative;"><mt-range v-model="valuecree" :min="10" :max="500" :step="5">
		<div slot="start" >10</div>
		<div slot="end">500</div>
	</mt-range></div>
	</div>
	<div class="mint-cell-right"></div>
</a>
</template>

<script type="text/babel">
export default {

	data:function(){
		return {
			value:150
		}
	},
	computed:{
		valuecree:{
			get(){
			
			},
			set(val){
				this.value=val
				this.$emit('range_emit',val);
			}
		}
	},
	mounted:function(){
		this.value=150
	}
};
</script>

<style>
</style>
