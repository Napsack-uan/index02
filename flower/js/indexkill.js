Vue.component("index-kill",{
	template:`
		<div id="wrap" >
			<div v-for="item in killdata">
			<div class="wrap_top">
				<div>
					<h1>{{item.kltitle}}</h1>
					<span>{{item.kldescp}}</span>
				</div>
			</div>
			<div class="wrap_bottom clearbox">
				<div class="wrap_box" v-for="item in item.klist">
					<div>
						<img :src="item.kimg" />
					</div>
					<span class="tejia" v-if="item.type>0"></span>
					<span class="tejia_font" v-if="item.type==1">特价</span>
					<span class="tejia_font" v-if="item.type==2">爆款</span>
					<p>{{item.kcontent}}</p>
					<p>
						<span>&yen;{{item.pri1}}.00</span>
						<span>直降{{item.pri2}}</span>
					</p>
				</div>				
			</div>
		</div>
		</div>
	`,
	data(){
		return{
			killdata:[
				{
				id:1,
				kltitle:"今日疯抢",
				kldescp:"凡今日下单均赠送价值300元优惠券！",
				klist:[
					{
						id:1,
						kimg:"img/index/wrap/t1.jpg",
						type:1,//特价
						kcontent:"情意绵绵·9枝红玫瑰纯美花束",
						pri1:138,
						pri2:180
					},
					{
						id:2,
						kimg:"img/index/wrap/t2.jpg",
						type:2,//爆款
						kcontent:"爱情密码·13枝红玫瑰纯美花束",
						pri1:178,
						pri2:220
					},
					{
						id:3,
						kimg:"img/index/wrap/t3.jpg",
						type:0,//无特殊标识
						kcontent:"今生与你相伴·9枝红玫瑰韩式花束",
						pri1:238,
						pri2:150
					},
					{
						id:4,
						kimg:"img/index/wrap/t4.jpg",
						type:0,//无特殊标识
						kcontent:"一心一意·11枝红玫瑰韩式花束",
						pri1:158,
						pri2:100
					}
				]
			}]
		}
	}
})