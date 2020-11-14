Vue.component("top-search",{
	template:`
	<div class="header_middle">
		<div class="fl">
			<input class="fl" type="search" placeholder="请输入关键词搜索" />
			<button class="fl">
				<span class="iconfont icon-sousuo"></span>
				<span>搜索</span>
			</button>
		</div>
		<ul class="fr">
			<li>
				<span class="iconfont icon-shizhong"></span>
				<span>全国1小时到达</span>
			</li>
			<li>
				<span class="iconfont icon-xiangxia"></span>
				<span>低价折扣</span>
			</li>
			<li>
				<span class="iconfont icon-dunpai"></span>
				<span>退款服务</span>
			</li>
		</ul>
	</div>
	`
})