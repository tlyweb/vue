<template>
	<div class="header">
		<div class="header-left">
			<div class="icon iconfont iconfanhui back-icon"></div>
		</div>
		<div class="header-input">
			<span class="icon iconfont iconsousuo"></span>
			输入城市/景点/游玩主题
		</div>
			<router-link to="/city" tag="div" class="header-right">
				{{this.city}}
				<span class="icon iconfont iconjiantouarrow486 arrow-icon"></span>
			</router-link>
	</div>
</template>

<script>
	import { mapState } from "vuex";
	export default {
		name: "Header",
		computed:{
			...mapState(["city"]),
		}
	}
</script>

<style scoped lang="scss">
.header{
	display:flex;
	line-height: .86rem;
	background: #00c5c3;
	color: #fff;
	.header-left{
		width: .64rem;
		float:left;
		.back-icon{
			text-align: center;
			font-size: .4rem;
		}
	}
	.header-input{
		flex:1;
		height: .64rem;
		line-height: .64rem;
		margin-top: .12rem;
		margin-left: .2rem;
		padding-left: .2rem;
		background: #fff;
		border-radius: .1rem;
		color: #ccc;
	}
	.header-right {
		min-width: 1.04rem;
		padding: 0 .1rem;
		float: right;
		text-align: center;
		.arrow-icon{
			margin-left: -0.08rem;
			font-size: .24rem;
		}
	}
}




</style>
