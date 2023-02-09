<template>
	<view>
		搜索
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// 监听原生标题导航按钮点击事件
		onNavigationBarButtonTap(e){
			// 参数是一个对象 变成对象
			// console.log(JSON.stringify(e)) index等于0的时候是点击了的意思
			 if(e.index == 0){
				 uni.navigateBack({
				 	delta: 1
				 })
			 }
		},
		onNavigationBarSearchInputChanged(e){
			
		},
		// 手机上的搜索按钮
		onNavigationBarSearchInputConfirmed(e){
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
