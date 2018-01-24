<template>
<a class="mint-cell">
	<div class="mint-cell-left"></div>
	<div class="mint-cell-wrapper">
	<div class="mint-cell-title">
	<span class="mint-cell-text">报警食物</span> 
	<span class="mint-cell-label">食物量:{{datafood}}</span></div>
	<div class="mint-cell-value" style="flex: 2.5;position: relative;"><mt-range v-model="model_value" :min="10" :max="500" :step="5">
		<div slot="start" >10</div>
		<div slot="end">500</div>
	</mt-range></div>
	</div>
	<div class="mint-cell-right"></div>
</a>
</template>

<script>
import { Range } from 'mint-ui';

export default {
	name:"MtFood",
	components: { "mt-range":Range },
	data(){
		return {
			datafood:this.value
		}
	},
	props:{
		value:{
			type:Number,
			default:150
		}
	},
	computed:{
		model_value:{
			get(){
				//console.log(model_value)
				return this.value
			},
			set(val){
				this.datafood=val
				this.$emit('range_emit',val);
			}
		}
	},
};
</script>

<style>
</style>
