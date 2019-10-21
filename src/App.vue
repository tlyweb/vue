<template>
  <div id="app">
<!--	  exclude后边跟组件的名字意思就是所除了Detail组件不会被缓存其他都会被缓存-->
<!--	  exclude="Detail"-->
	  <keep-alive>
		  <router-view />
	  </keep-alive>
  </div>
</template>

<style lang="scss">
</style>
