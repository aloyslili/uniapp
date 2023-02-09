<template>
	<view class="topic-nav">
		<view class="u-f-ac u-f-jsb">
			<view>热门分类</view>
			<view class="u-f-ac" @tap="openTopicNav">更多<view class="icon  iconfont icon-jinru"></view></view>
		</view>
		<view class="u-f-ac">
			<block v-for="(item,index) in nav" :key="index">
				<view>{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			// 接收nav， 是父组件传来的一个数组5
			nav: Array
		},
		methods:{
			openTopicNav(){
				// 路由跳转 就是页面跳转
				uni.navigateTo({
					url: '../../pages/topic-nav/topic-nav'
				})
			}
		}
	}
</script>

<style scoped>
	.topic-swiper{
		padding: 0 20upx 20upx 20upx;
	}
	.topic-swiper image{
		width: 100%;
	}
	.topic-nav{
		border-bottom: 1upx solid #EEEEEE;
		border-top:  1upx solid #EEEEEE;
		padding: 20upx;
	}
	.topic-nav>view:first-child{
		margin-bottom: 10upx;
	}
	.topic-nav>view:last-child>view{
		flex: 1;
		background: #EEEEEE;
		color: #9e9e9e;
		border-radius: 10upx;
		margin: 0 10upx;
		text-align: center;
	}
	.topic-nav>view:first-child view{
	color:  #9e9e9e;
	}
	.topic-nav>view:first-child>view:first-child{
		color: #333333;
		font-size: 32upx;
	}
</style>