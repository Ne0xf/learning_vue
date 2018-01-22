// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Picker ,Navbar, TabItem ,TabContainer, TabContainerItem, Cell,Range,Button ,Switch} from 'mint-ui';
import cell_select from './cell_select';
import food from './range';
import Treeselect from '@riophae/vue-treeselect'

Vue.component(Switch.name, Switch);
Vue.component(Cell.name, Cell);
Vue.component(Range.name, Range);
Vue.component(Picker.name, Picker);
Vue.component(Button.name, Button);
Vue.component('treeselect', Treeselect);

Vue.config.productionTip = false;
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
	components: {
		"mt-navbar":Navbar,
		"mt-tab-item":TabItem,
		"mt-tab-container":TabContainer,
		"mt-tab-container-item":TabContainerItem,
		"mt-food":food,
		"cell-select":cell_select,
	},
	
	data:{
		selected:"1",
		rangeValue:10,
		select_value:null,
		sel_title:'选择人员',
		sel_label:'支持多选',
		sel_source:[
		{id:'a',label:'ffffffffffffffffffffffff'},
		{id:'b',label:'ffffffffffffffffffffffff'},
		{id:'c',label:'ffffffffffffffffffffffff'},
		{id:'d',label:'ffffffffffffffffffffffff'},
		{id:'e',label:'ffffffffffffffffffffffff'},
		{id:'f',label:'ffffffffffffffffffffffff'},
		{id:'g',label:'ffffffffffffffffffffffff'},
		{id:'h',label:'ffffffffffffffffffffffff'},
		],
		sel2_title:'选择人员2',
		sel2_label:'支持多选2',
		sel2_source:[
		{id:'a',label:'ffffffffffffffffffffffff'},
		{id:'b',label:'ffffffffffffffffffffffff'},
		{id:'c',label:'ffffffffffffffffffffffff'},
		{id:'d',label:'ffffffffffffffffffffffff'},
		{id:'e',label:'ffffffffffffffffffffffff'},
		{id:'f',label:'ffffffffffffffffffffffff'},
		{id:'g',label:'ffffffffffffffffffffffff'},
		{id:'h',label:'ffffffffffffffffffffffff'},
		],
		sel3_title:'选择人员3',
		sel3_label:'支持多选3',
		sel3_source:[
		{id:'a',label:'ffffffffffffffffffffffff'},
		{id:'b',label:'ffffffffffffffffffffffff'},
		{id:'c',label:'ffffffffffffffffffffffff'},
		{id:'d',label:'ffffffffffffffffffffffff'},
		{id:'e',label:'ffffffffffffffffffffffff'},
		{id:'f',label:'ffffffffffffffffffffffff'},
		{id:'g',label:'ffffffffffffffffffffffff'},
		{id:'h',label:'ffffffffffffffffffffffff'},
		],
		sel4_title:'选择人员4',
		sel4_label:'支持多选4',
		sel4_source:[
		{id:'a',label:'ffffffffffffffffffffffff'},
		{id:'b',label:'ffffffffffffffffffffffff'},
		{id:'c',label:'ffffffffffffffffffffffff'},
		{id:'d',label:'ffffffffffffffffffffffff'},
		{id:'e',label:'ffffffffffffffffffffffff'},
		{id:'f',label:'ffffffffffffffffffffffff'},
		{id:'g',label:'ffffffffffffffffffffffff'},
		{id:'h',label:'ffffffffffffffffffffffff'},
		],
		switch_value:true,
		switch_label:null,
		//handleChange:null,
	},
	mounted:function() {
		this.switch_value = false
		if(this.switch_value==true){
			this.switch_label='ok'
		}else{
			this.switch_label='no'
		}
	},
	methods:{
		handleChange:function(m){
			console.log(m)
			if(m==true){
				this.switch_label='ok'
			}else{
				this.switch_label='no'
			}
			
		},
	}
})