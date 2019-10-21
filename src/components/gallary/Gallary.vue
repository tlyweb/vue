<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
				<swiper-slide v-for="(item,index) in imgs" :key="index">
					<img class="gallary-img" :src="item" alt="">
				</swiper-slide>
				<div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Gallary",
		props:{
			imgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				swiperOptions:{
					pagination:".swiper-pagination",//分页按钮
					paginationType:"fraction",//分页变成数字
					observeParents:true,//页面加载宽度还是100%
					observer:true//两个属性都要写不然不执行
				}
			}
		},
		methods:{
			handleGallaryClick(){
				this.$emit('close');//子传夫调用方法
			}
		}
	}
</script>

<style scoped lang="scss">
.container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	z-index: 99;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: #000;
	.wrapper{
		height: 0;
		width: 100%;
		padding-bottom: 100%;
		.gallary-img{
			width: 100%;
		}
		.swiper-pagination{
			color: #fff;
			bottom: -1rem;
		}
	}
	.swiper-container{
		overflow: inherit;
	}
}
</style>
