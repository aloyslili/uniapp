<template>
	<view class="content">
		<image class="logo"
			src="https://mp-18b966c1-7765-4a4c-87fc-4426508bcdac.cdn.bspapp.com/cloudstorage/b3fdca2f-a509-4e50-96c5-235756df08e3.jpg">
		</image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="" @click="open">点击</view>
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
			// 页面加载调用云函数
			 
		},
		methods: {
			open(){
				// 调用云函数
				uniCloud.callFunction({
					name:"login",
					// 成功的回调
					success(res) {
						console.log("云函数执行",res)
					}
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
