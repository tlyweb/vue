<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list
				:cities="cities"
				:hot="hotCities"
				:letter="letter"
		></city-list>
		<city-alphabet
				:cities="cities"
				@change="handleLetterChange"
		></city-alphabet>
	</div>
</template>

<script>
	import CityHeader from "../components/city/Header";
	import CitySearch from "../components/city/Search";
	import CityList from "../components/city/List";
	import CityAlphabet from "../components/city/Alphabet";
	export default {
		name: "City",
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data(){
			return{
				cities:{},
				hotCities:[],
				letter:''
			}
		},
		methods:{
			getCityInfo(){
				//获取数据
				this.$http.get("/api/city.json").then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc(res){
				res = res.data;
				if (res.ret && res.data){
					const data = res.data;
					//a-z城市数据
					this.cities = data.cities;
					//热门城市数据
					this.hotCities = data.hotCities;
				}
			},
			handleLetterChange(letter){
				//接受alphabet组件穿来的数据，数据在传递给list组件
				this.letter = letter;
			}
		},
		mounted(){
			this.getCityInfo()
		}
	}
</script>

<style scoped>

</style>
