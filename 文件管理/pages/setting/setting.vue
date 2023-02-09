<template>
	<view style="display: flex; justify-content: center; justify-items: center;">
		<view style="margin-top: 20rpx; line-height: 50px; width: 200px; height: 50px;
		background-color: chocolate; border-radius: 20px; text-align: center;"  @click="goout">退出登录</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			 
			goout() {
				// 调用vuex的方法成功之后做的一些事情
				this.$store.dispatch('logout').then(res => {
					uni.showToast({
						title: '退出成功',
						icon: 'none'
					});
				})
			}
		}
	}
</script>

<style>

</style>
