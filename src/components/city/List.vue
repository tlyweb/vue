<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area"
			     v-for="(item,key) of cities"
			     :key="key"
			     :ref="key"
			>
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div class="item border-bottom"
					     v-for="innerItem of item"
					     :key="innerItem.id"
					     @click="handleCityClick(innerItem.name)"
					>{{ innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState,mapMutations } from "vuex";
	import Bscroll from "better-scroll";
	export default {
		name: "CityList",
		props:{
			hot:Array,
			cities:Object,//对象的形式接受数据他的key值就是a-z
			letter:String
		},
		mounted() {
			//下载scroll插件并且new一个实例通过refs找到组件的wrapper class属性调用实现下拉
			this.scroll = new Bscroll(this.$refs.wrapper)
		},
		watch:{
			//监听传递过来的是什么数据
			letter(){
				if(this.letter){
					//通过给cities加一个ref获取他的dom元素通过$refs获取元素加个下标获取当前的
					const element = this.$refs[this.letter][0];
						this.scroll.scrollToElement(element);
				}
			}
		},
		methods:{
			handleCityClick(city){
				this.changeCity(city);
				this.$router.push("/");
			},
			...mapMutations(["changeCity"])
		},
		computed:{
			...mapState(["city"])
		}
	}
</script>

<style scoped lang="scss">
	.list{
		overflow: hidden;
		position: absolute;
		top: 1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
		.title{
			line-height: .54rem;
			background: #eee;
			padding-left: .2rem;
			color: #666;
			font-size: .26rem;
		}
		.border-topbottom{
			&:before{
				border-color: #ccc;
			}
			&:after{
				border-color: #ccc;
			}
		}
		.border-bottom{
			&:before{
				border-color: #ccc;
			}
		}
		.button-list{
			overflow: hidden;
			padding: .1rem .6rem .1rem .1rem;
			.button-wrapper {
				float: left;
				width: 33.33%;
				.button{
					margin: .1rem;
					padding: .1rem 0;
					text-align: center;
					border: .02rem solid #ccc;
					border-radius: .06rem;
				}
			}
		}
		.item-list{
			.item{
				line-height: .64rem;
				color: #666;
				padding-left: .2rem;
			}
		}
	}

</style>
