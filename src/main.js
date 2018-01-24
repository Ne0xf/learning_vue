import Vue from 'vue'
import axios from 'axios'
import { Navbar, TabItem ,TabContainer, TabContainerItem, Cell,Button,Indicator,Toast,Switch} from 'mint-ui';
//Vue.component(Range.name, Range);
import cell_select from './cell_select';
import food from './range';

Vue.config.productionTip = false;
/* eslint-disable no-new */

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)
        return  unescape(r[2]);
      return null;
}

new Vue({
  el: '#app',
	components: {
		"mt-navbar":Navbar,
		"mt-tab-item":TabItem,
		"mt-tab-container":TabContainer,
		"mt-tab-container-item":TabContainerItem,
		"mt-cell":Cell,
		"mt-food":food,
		"mt-switch":Switch,
		"cell-select":cell_select,
		"mt-button":Button,
	},
	
	data:{
		selected:"1",
		switch_label:null,
		sel_source:[
		{id:'a',label:'1队'},
		{id:'b',label:'2队'},
		{id:'c',label:'3队'},
		{id:'d',label:'4队'},
		{id:'e',label:'5队'},
		],
		switch_label2:null,
		sel2_source:[
		{id:'a',label:'挖矿'},
		{id:'b',label:'扎营'},
		{id:'c',label:'竞技场'},
		{id:'d',label:'点广告'},
		{id:'e',label:'点分享'},
		{id:'f',label:'砍树'},
		{id:'g',label:'刷S'},
		{id:'h',label:'刷SS'},
		],

		sel3_source:[
		{id:'a',label:'1图:庇护所之地'},
		{id:'b',label:'2图:荒野'},
		{id:'c',label:'3图:失落之城'},
		{id:'d',label:'4图:流放之路'},
		{id:'e',label:'5图:湿地'},
		{id:'f',label:'6图:极寒之地'},
		{id:'g',label:'7图:幻境森林'},
		{id:'h',label:'8图:季风平原'},
		{id:'i',label:'9图:王城'},
		{id:'j',label:'10图:祭品村落'},
		{id:'k',label:'11图:巨龙之路'},
		{id:'l',label:'12图:冰峰谷'},
		{id:'m',label:'13图:迷雾城'},
		{id:'n',label:'14图:遗忘之地'},
		{id:'o',label:'15图:世界尽头'},
		{id:'p',label:'16图:南部海域'},
		],
		sel4_source:[
		{id:'a',label:'秘银'},
		{id:'b',label:'大型秘银'},
		{id:'c',label:'木材'},
		{id:'d',label:'大型木材'},
		{id:'e',label:'食物'},
		{id:'f',label:'大型食物'},
		{id:'g',label:'铁'},
		{id:'h',label:'大型铁'},
		{id:'i',label:'水晶'},
		{id:'j',label:'大型水晶'},
		{id:'k',label:'强者血液'},
		{id:'l',label:'稀土'},
		{id:'m',label:'乙太'},
		],
		postdata:{
			food:100,
			home:null,
			find:null,
			troop:null,
			attached:null,
			map:null,
			shop:null,
			game:"dxcb",
			sid:null,
		},
	},
	mounted:function() {
		this.postdata.troop = ['a','b']
		this.postdata.attached = ['a','b']
		//this.switch_value = false
		if(!this.switch_value){
			this.switch_label='道具回城'
		}else{
			this.switch_label='走路回城'
		}
		
		if(!this.switch_value2){
			this.switch_label2='自动寻怪'
		}else{
			this.switch_label2='自定路线'
		}
	},
	methods:{
		handleChange:function(m){
			if(m){
				this.switch_label='道具回城'
			}else{
				this.switch_label='走路回城'
			}
			
		},
		handleChange2:function(m){
			if(m){
				this.switch_label2='自动寻怪'
			}else{
				this.switch_label2='自定路线'
			}
			
		},
		submit:function(){
			console.log(GetQueryString('sid'));
			console.log(this.postdata);
			Indicator.open({
				text: '正在提交...',
				spinnerType: 'fading-circle'
			});
			let sid = GetQueryString('sid')
			
			if(sid != ''){
				this.postdata.sid = sid
			}
			
			
			axios.post('', this.postdata)
			.then(function (res) {
				console.log(res);
				Indicator.close();
				if(res.code==1){
					Toast({
						message: res.msg,
						iconClass: 'mintui mintui-success'
					});
				}else{
					Toast(res.msg);
				}
				
			})
			.catch(function (error) {
				Indicator.close()
				//console.log(error);
				Toast({
					message: "错误,请联系管理员",
					iconClass: 'mintui mintui-field-error'
				});
			});
		},
		getselect(val){
			this['postdata'][val.key] = val.value
		},
		getfood(val){
			//console.log(val)
			this.postdata.food = val
		}
	}
})