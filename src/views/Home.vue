<template>
  <div class="home">
	  <Home-Header></Home-Header>
	  <Home-Swiper :list="swiperList"></Home-Swiper>
	  <Home-Icons :list="iconList"></Home-Icons>
	  <Home-Recommend :list="recommendList"></Home-Recommend>
	  <Home-Weekend :list="weekendList"></Home-Weekend>
  </div>
</template>

<script>
	import HomeHeader from "../components/home/Header.vue";
	import HomeSwiper from "../components/home/Swiper.vue";
	import HomeIcons from "../components/home/Icons.vue";
	import HomeRecommend from "../components/home/Recommend.vue";
	import HomeWeekend from "../components/home/Weekend.vue";
	import { mapState } from "vuex";
export default {
	name: "home",
	components:{
		HomeHeader,
		HomeSwiper,
		HomeIcons,
		HomeRecommend,
		HomeWeekend
	},
	data(){
		return{
			lastCity:'',
			swiperList: [],
			iconList: [],
			recommendList:[],
			weekendList:[]
		}
	},
	computed:{
		...mapState(['city'])
	},
	methods:{
		//触发axios请求
		getHomeInfo(){
			this.$http.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)
		},
		//获取数据方法
		getHomeInfoSucc(res){
			res = res.data;
			//判断接口为true并且有数据了
			if (res.ret && res.data){
				const data = res.data;
				//swiper组件的数据
				this.swiperList=data.swiperList;
				//两页翻页数据
				this.iconList=data.iconList;
				//热销推荐数据
				this.recommendList=data.recommendList;
				//周末去哪儿数据
				this.weekendList=data.weekendList;
			}
		}
	},
	mounted() {
		this.lastCity = this.city;
		this.getHomeInfo();
	},
	//keep-alive 当页面重新被显示的时候会重新执行
	activated() {
		if (this.lastCity !== this.city){
			this.lastCity = this.city;
			this.getHomeInfo();
		}
	}
};
</script>

