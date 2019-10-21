<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
			<div
					class="search-content"
					ref="search"
					v-show="keyword"
			>
			 	<ul>
					<li
						class="search-item border-bottom"
						v-for="item of list"
						:key="item.id"
						@click="handleCityClick(item.name)"
					>
						{{ item.name }}
					</li>
				    <li class="search-item border-bottom" v-show="hasNoData">
						没有找到匹配数据
				    </li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
	import { mapMutations } from "vuex";
	//滚动插件
	import Bscroll from 'better-scroll';
	export default {
		name: "CitySearch",
		props:{
			cities:Object
		},
		data(){
			return{
				keyword:'',
				list:[],
				timer:null//函数截流
			}
		},
		watch:{
			keyword(){
				//判断有没有有的话清楚
				if (this.timer){
					clearTimeout(this.timer)
				}
				//判断keyword是空的话list数组为空
				if (!this.keyword){
					this.list=[];
					return;
				}

				//否则就加进去
				this.timer = setTimeout(()=>{
					//创建空数组
					const result = [];
					//循环城市数据
					for (let i in this.cities){
						//城市的数据循环
						this.cities[i].forEach((value)=>{
							//判断城市的数据和输入框一直添加到数组
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
								result.push(value);
							}
						})
					}
					//新的数组接受搜索的数据
					this.list = result;
				},100)
			}
		},
		mounted() {
			//滚动插件通过获取dom元素来获取要滚动的数据
			this.scroll = new Bscroll(this.$refs.search)
		},
		computed:{
			//计算他是空的见显示一个没有找到数据
			hasNoData(){
				return !this.list.length;
			}
		},
		methods:{
			handleCityClick(city){
				this.changeCity(city);
				this.$router.push("/");
			},
			...mapMutations(["changeCity"])
		}
	}
</script>

<style scoped lang="scss">
.search{
	height: .72rem;
	padding: 0 .1rem;
	background: #00c5c3;
	.search-input{
		box-sizing: border-box;
		width: 100%;
		height: .62rem;
		padding:0 .1rem;
		line-height: .62rem;
		text-align: center;
		border-radius: .06rem;
		color: #666;
	}
	.search-content{
		z-index: 1;
		overflow: hidden;
		position: absolute;
		top: 1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
		background: #eee;
		.search-item{
			line-height: .62rem;
			padding-left: .2rem;
			background: #fff;
			color: #666;
		}
	}
}
</style>
