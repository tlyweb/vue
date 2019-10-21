<script src="../../main.js"></script>
<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
			<!-- slides -->
			<swiper-slide v-for="(item,index) of list" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" alt="">
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
<!--			<div class="swiper-button-prev" slot="button-prev"></div>-->
<!--			<div class="swiper-button-next" slot="button-next"></div>-->
<!--			<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
		</swiper>
	</div>
</template>

<script>
export default {
	name: "HomeSwiper",
	props:{
		list:Array
	},
	data (){
		return{
			swiperOption:{
				pagination:'.swiper-pagination',//分页小圆点
				loop:true,//循环轮播
				autoplay:5000
			},
		}
	},
	computed:{
		showSwiper(){
			return this.list.length
		}
	}
}
</script>

<style scoped lang="scss">
	.wrapper{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 31.25%;
		background: #eee;

		.swiper-container-horizontal > .swiper-pagination-bullets{
			top: 2rem;
		}
		.swiper-pagination{
			.swiper-pagination-bullet-active{
				background: white!important;
			}
		}
		.swiper-img{
			width: 100%;
		}
	}

</style>
