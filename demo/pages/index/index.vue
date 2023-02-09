<template>
	<view class="content">
		<view class="header">首页</view>
		<view class="top-content">
			<view>1</view>
			<view>2</view>
			<view>3</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.header {
	margin-left: 10px;
	font-size: 30px;
	font-weight: 500;
}
.top-content{
	display: flex;
	/* justify-content: center; */
	/* justify-items: center; */
	background-color: blue;
	width: 90%;
	height: 100px;
	border-radius: 5px;
	margin: 10px auto;
}
.top-content view {
	display: flex;
	justify-content: space-between;
	
}
</style>
