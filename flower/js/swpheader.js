Vue.component("swp-header",{
	props:["leftdata"],
	template:`
	<div class="swipaere">
		<div id="banner" class="swiper-container">
			<ul class="swiper-wrapper" >
				<li class="swiper-slide" v-for="item in swiperdatas"><img :src="item" /></li>				
			</ul>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>			    
			<!-- 如果需要导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>	
		</div>
		<div class="nav">
			<div v-for="item in leftdata" >
				<h3>{{item.title}}</h3>
				<p>
					<a href="#" v-for="flow in item.menuList">{{flow.name}}</a>						
				</p>
			</div>		
		</div>
	</div>
	`,
	data(){
		
		return{			
			swiperdatas:["img/index/banner/bg1.jpg","img/index/banner/bg2.jpg",
			"img/index/banner/bg3.jpg","img/index/banner/bg4.jpg"]			
		}
	}
})