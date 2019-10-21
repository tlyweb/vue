<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: "HomeIcons",
	props:{
		list:Array
	},
	data(){
		return{
			swiperOption:{
				autoplay:false
			}
		}
	},
	computed: {
		pages () {
			//设置一个空数组
			const pages = [];
			//循环一下空数组
			this.list.forEach((item, index) => {
				//他的下标除以8为了让他页面显示8个
				const page = Math.floor(index / 8)
				//非空数组里面有八个了就等于空
				if (!pages[page]) {
					pages[page] = []
				}
				//空数组里面包含的数据添加成list的数据
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style scoped lang="scss">
.icons{
	margin-top: .1rem;
	.swiper-container{
		height: 0;
		padding-bottom: 50%;
	}
	.icon{
		position: relative;
		overflow: hidden;
		float: left;
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		.icon-img{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: .44rem;
			box-sizing: border-box;
			padding: .1rem;
			.icon-img-content{
				display: block;
				margin: 0 auto;
				height: 100%;
			}
		}
		.icon-desc{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: .44rem;
			line-height: .44rem;
			text-align: center;
			color: #333;
			font-size: .2rem;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
}
</style>
