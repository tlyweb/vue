export default {
	changeCity(state,city){
	state.city = city;
	//方法里面直接存就行
	try {
		localStorage.city = city;
	}catch(e){}

	}
}
