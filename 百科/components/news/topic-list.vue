<template>
	<view class="topic-list u-f animated rotateIn" @tap="opendetail()">
		<image :src="item.titlepic" mode="widthFix" lazy-load></image>
		<view>
			<view>#{{item.title}}#</view>
			<view>{{item.desc}}</view>
			<view>动态{{item.totalnum}} 今日{{item.todaynum}}</view>
		</view>
	</view>
</template>

<script>
	export default{
		props: {
			// 接收item和index
			item: Object,
			index: Number
		},
		methods:{
			opendetail(){
				uni.navigateTo({
					url: '../../pages/topic-detail/topic-detail',
				});
				console.log("hhh")
			}
		}
	}
</script>

<style scoped>
	.topic-list>view:first-child {
		padding-bottom: 5upx;
		font-size: 32upx;
	}
	
	.topic-list {
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	
	.topic-list image {
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 10upx;
	}
	
	.topic-list>view>view {
		color: #a4a4a4;
	}
	
	.topic-list>view>view:first-child {
		color: #333333;
		font-size: 32upx;
	}
</style>