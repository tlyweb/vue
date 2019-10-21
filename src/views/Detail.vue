<template>
	<div>
		<detail-banner
				:sightName="sightName"
				:bannerImg="bannerImg"
				:bannerImgs="gallaryImgs"
		></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
	</template>

	<script>
	import DetailBanner from "../components/detail/Banner";
	import DetailHeader from "../components/detail/Header";
	import DetailList from "../components/detail/List";
	export default {
		name: "Detail",//1，递归组件的时候会用到name
		               //2 不需要缓存该组件的时候会用到
		               //3，vue开发调试的插件也会显示name
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data(){
			return{
				sightName:"",//banner组件数据
				bannerImg:"",//banner组件数据
				gallaryImgs:[],//banner组件数据
				list:[]
			}
		},
		methods:{
			getDetailInfo(){
				this.$http.get("/api/detail.json",{
					params:{
						id:this.$route.params.id
					}
				}).then(this.handleGetDataSucc);
			},
			handleGetDataSucc(res){
				res = res.data;
				if (res.ret && res.data){
					const data = res.data;
					//banner组件数据
					this.sightName = data.sightName;
					//banner组件数据
					this.bannerImg = data.bannerImg;
					//banner组件数据
					this.gallaryImgs = data.gallaryImgs;
					this.list = data.categoryList;
				}
			}
		},
		watch:{
			"$route"(to,form){
				this.getDetailInfo();
			}
		},
		mounted() {
			this.getDetailInfo();
		}
	}
</script>

<style scoped lang="scss">
.content{
	height: 50rem;
}
</style>
