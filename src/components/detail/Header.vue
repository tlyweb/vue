  <template>
	<div>
		<router-link
				tag="div"
				to="/"
				class="header-abs"
				v-show="showAbs">
			<div class="icon iconfont iconfanhui header-abs-back"></div>
		</router-link>
		<div
			class="header-fixed"
			v-show="!showAbs"
			:style="opacityStyle"
		>
			<router-link to="/" tag="div" class="icon iconfont iconfanhui header-fixed-back"></router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		name: "DetailHeader",
		data(){
			return{
				showAbs:true,//用来下滑显示头部
				opacityStyle:{
					opacity: 0//透明度
				}
			}
		},
		methods:{
			handleScroll(){
				//获取scrolltop移动的值
				const top = document.documentElement.scrollTop;
				//移动的位置大于60头部显示
				if (top > 60){
					//让滑动的值全部除以140的高度
					let opacity = top / 140;
					//三木运算opacity他的值大于1他就为了不大于就是opacity只能等于1
					opacity = opacity > 1 ? 1 : opacity;
					//透明度就是算出的透明度只能是一就是显示
					this.opacityStyle={opacity}
					this.showAbs=false;
				} else{
					//反之就消失
					this.showAbs=true;
				}
			}
		},
		//组件会被重复显示所以用这个函数
		activated() {
			//用他来给页面添加一个scroll事件插件里面有scroll才可以添加不然无效，添加他触发一个事件
			window.addEventListener("scroll",this.handleScroll)
		}
	}
</script>

<style scoped lang="scss">
.header-abs{
	position: absolute;
	left: .2rem;
	top: .2rem;
	width: .8rem;
	height: .8rem;
	line-height: .8rem;
	border-radius: .4rem;
	text-align: center;
	background: rgba(0,0,0,0.8);
	.header-abs-back{
		color: #fff;
		font-size: .4rem;
	}
}
.header-fixed{
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: .86rem;
	line-height: .86rem;
	text-align: center;
	color: #fff;
	background: #00c5c3;
	font-size: .32rem;
	.header-fixed-back{
		position: absolute;
		top: 0;
		left: 0;
		width: .64rem;
		text-align: center;
		font-size: .4rem;
	}
}
</style>
