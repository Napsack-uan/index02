Vue.component("main-item", {
	props: ["title","maindata","stitle"],
	template: `
		<div class="m-pane" >
		<div class="love_top">
			<div>
				<h1>{{maindata.title}}</h1>
				<span> {{maindata.stitle}}</span>
				<myprice :pricelist="maindata.pricelist"></myprice>
			</div>
		</div>
		<div class="love_middle">
			<a href="#">
				<img :src="maindata.bigimg" />
			</a>
		</div>
		<div class="love_bottom clearbox">
			<div class="love_box" v-for="lovetem in maindata.imglist">
				<div>
					<img :src="lovetem.simg" />
				</div>
				<span class="tejia" v-if="lovetem.type>0"></span>
				<span class="tejia_font" v-if="lovetem.type==1">爆款</span>
				<span class="tejia_font" v-if="lovetem.type==2">热销</span>
				<span class="tejia_font" v-if="lovetem.type==3">特价</span>
				<span class="tejia_font" v-if="lovetem.type==4">推荐</span>
				<p>{{lovetem.descp}}</p>
				<p>
					<span>&yen;{{lovetem.p1}}</span>
					<span>原价 &yen;{{lovetem.p2}}</span>
				</p>
				<p>已售 {{lovetem.num}}</p> 
			</div>				
		</div>
		</div>
	`
})
Vue.component("myprice", {
	props: ["pricelist"],
	template: `
	<p class="fr">
		<a href="#" v-for="myprice in pricelist">{{myprice.name}}</a>						
		<a href="#">查看更多></a>
	</p>
	`
})
