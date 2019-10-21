let defaultCity = "北京";
//用try主要是为了做本地存储
//为了防止其他游览器有隐式保护不能用本地存储用try来维护兼容
try {
	//里面判断有的话变量赋值
	if (localStorage.city){
		defaultCity = localStorage.city;
	}
} catch (e) {}//用try后边就要跟一个catch

export default {
	city:defaultCity
}
