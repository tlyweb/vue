<template>
	<ul class="list">
		<li class="item"
		    v-for="item of letters"
		    :key="item"
		    :ref="item"
		    @touchstart.prevent="handleTouchStart"
		    @touchmove="handleTouchMove"
		    @touchend="handleTouchEnd"
			@click="handleLetterClick"
		>{{ item }}</li>
	</ul>
</template>

<script>
	export default {
		name: "CityAlphabet",
		props:{
			cities:Object
		},
		data(){
			return{
				touchStatus:false,
				startY:0,
				timer:null//函数节流
			}
		},
		methods:{
			//点击对应的字母传到list组件
			handleLetterClick(e){
				// 通过子传父
				this.$emit('change',e.target.innerText)
			},
			//当手指触摸屏幕时触发
			handleTouchStart(){
				this.touchStatus = true;
			},
			//当手指触摸后移动
			handleTouchMove(e){
				if (this.touchStatus) {
					//函数截流
					//判断如果有的话就把timer清楚了
					if (this.timer){
						clearTimeout(this.timer);
					}
					//否则就异步创建一个timer 当他创建完的时候移动到下一个了先清楚上一个在执行下一个
					this.timer = setTimeout(()=>{
						//触摸到下一个字母到顶部组件的位置
						const touchY = e.touches[0].clientY - 74;
						//变为整数每个字母到顶部的距离减去A到顶部的距离处于20是每个字母的高度就是触目字母的下标
						const index = Math.floor((touchY - this.startY) / 20);
						//判断他的下标等于0并且下标小于数据的长度
						if (index >= 0 && index < this.letters.length){
							//子传父把letters包含的下标数据发送
							this.$emit('change',this.letters[index]);
						}
					},16)


				}
			},
			//手指触摸结束
			handleTouchEnd(){
				this.touchStatus = false;
			}
		},
		computed:{
			//计算传过来的数据
			letters(){
				const letters = [];
				//不能用map循环因为是对象 用简单的for就可以
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters;
			}
		},
		updated() {
			//获取A这个dom元素到顶部的元素
			this.startY = this.$refs['A'][0].offsetTop;
		}
	}
</script>

<style scoped lang="scss">
.list{
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 1.58rem;
	right: 0;
	bottom: 0;
	width: .4rem;
	.item{
		line-height: .4rem;
		text-align: center;
		color: #00c5c3;
	}
}
</style>
