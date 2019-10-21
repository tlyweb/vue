<template>
	<div class="header">
		城市选择
		<router-link to="/" tag="div" class="iconfont header-back">&#xe624;</router-link>
	</div>
</template>

<script>
	export default {
		name: "CityHeader"
	}
</script>

<style scoped lang="scss">
.header{
	position: relative;
	overflow: hidden;
	height: .86rem;
	line-height: .86rem;
	text-align: center;
	color: #fff;
	background: #00c5c3;
	font-size: .3rem;
	.header-back{
		position: absolute;
		top: 0;
		left: 0;
		width: .64rem;
		text-align: center;
		font-size: .4rem;
	}
}
</style>
