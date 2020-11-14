Vue.component("nav-header",{
	template:`
		<div class="header_bottom">
			<p>
				<span class="iconfont icon-daohang"></span>
				<span>鲜花导航</span>
			</p>
			<p>
				<a href="#" v-for="item in navList">{{item}}</a>					
			</p>
		</div>
	`,
	data(){
		return{
			navList:["首页","鲜花","永生花","礼品","每周一花","花语","企业团购"]
		}
		// 组件中的数据必须是一个函数  且有自己的独立的区域
	}
	
})