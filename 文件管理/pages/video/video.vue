<template>
	<view class="" style="height: 100vh;">
		<video :src="url" controls autoplay style="width: 750rpx; height: 100vh;" @ended="back"></video>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ""
			}
		},
		onLoad(e) {
			if (!e.url) {
				uni.showToast({
					title: "非法参数",
					icon: "none"
				})
			}
			this.url = e.url
			if (e.title) {
					uni.setNavigationBarTitle({
						title: e.title
					})
				}
		},
		methods: {
			back() {
				uni.navigateTo({
					// 返回上一页
					delta: 1
				})
			}
		}
	}
</script>

<style>

</style>
