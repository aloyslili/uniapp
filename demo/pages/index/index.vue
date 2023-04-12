<template>
	<view class="content">
		<view class="header">首页</view>
		<view class="top-content">
			<view class="mian">
				<view class="">
					<span>2453</span>
					<span>单</span>
				</view>
				<view class="main1">
					贷款中
				</view>
			</view>
			<view class="mian">
				<view class="">
					<span>2453</span>
					<span>单</span>
				</view>
				<view class="main1">
					贷款完成
				</view>
			</view>
			<view class="mian">
				<view class="">
					<span>2.6w</span>
					<span>单</span>
				</view>
				<view class="main1">
					贷款总额
				</view>
			</view>
		</view>
		<view class="min-container">
			<view class="top">
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
			</view>
			<view class="top">
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
				<view>
					<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
					<view class="">预约</view>
				</view>
			</view>
			<view class="number">
				<view class="" style="margin-left: 10px;">
					<span class="iconfont icon-shujutu" style="color: darkorange"></span>
					<span class="title">数据情况</span>
				</view>
				<view class="shujuxianshi">
					<view>
						<view>今日访客</view>
						<view style="font-size: 1.2rem; font-weight: 500;">126
						<span style="font-size: 0.8rem; font-weight: 500;">人</span></view>
						<view style="font-size: 0.8rem; font-weight: 500; color: darkgray;">较昨日
						<span class="iconfont icon-xiasanjiao" style="color: dodgerblue; font-size: 1.1rem; padding: 0 5px 0 5px ;"><span style="color: dodgerblue; font-size: 0.8rem;">5%</span></span>
						</view>
					</view>
					<view>
						<view>今日访客</view>
						<view style="font-size: 1.2rem; font-weight: 500;">126
						<span style="font-size: 0.8rem; font-weight: 500;">人</span></view>
						<view style="font-size: 0.8rem; font-weight: 500; color: darkgray;">较昨日
						<span class="iconfont icon-shangsanjiao" style="color:coral; font-size: 1.1rem; padding: 0 5px 0 5px ;"><span style="color: dodgerblue; font-size: 0.8rem;">5%</span></span>
						</view>
					</view>
				</view>
				<view class="shujuxianshi">
					<view>
						<view>今日访客</view>
						<view style="font-size: 1.2rem; font-weight: 500;">126
						<span style="font-size: 0.8rem; font-weight: 500;">人</span></view>
						<view style="font-size: 0.8rem; font-weight: 500; color: darkgray;">较昨日
						<span class="iconfont icon-shangsanjiao" style="color: dodgerblue; font-size: 1.1rem; padding: 0 5px 0 5px ;"><span style="color: dodgerblue; font-size: 0.8rem;">5%</span></span>
						</view>
					</view>
					<view>
						<view>今日访客</view>
						<view style="font-size: 1.2rem; font-weight: 500;">126
						<span style="font-size: 0.8rem; font-weight: 500;">人</span></view>
						<view style="font-size: 0.8rem; font-weight: 500; color: darkgray;">较昨日
						<span class="iconfont icon-shangsanjiao" style="color: dodgerblue; font-size: 1.1rem; padding: 0 5px 0 5px ;"><span style="color: dodgerblue; font-size: 0.8rem;">5%</span></span>
						</view>
					</view>
				</view>
				<view></view>
			</view>
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

	.top-content {
		display: flex;
		/* justify-content: center; */
		/* justify-items: center; */
		background-color: rgb(0, 145, 255);
		width: 95%;
		height: 150px;
		border-radius: 5px;
		margin: 10px auto;
	}

	.top-content view {
		display: flex;
		justify-content: space-around;
		/* background-color: aqua; */
		margin: 8px auto;
		width: 70px;
	}

	.mian {
		display: flex;
		flex-wrap: wrap;
		height: 50px;
	}

	.mian view span:first-child {
		font-size: 1.5rem;
		color: aliceblue;
		font-weight: 300;
	}

	.mian view span:last-child {
		font-size: 0.8rem;
		color: aliceblue;
		font-weight: 100;
		margin-top: 12px;
		margin-left: 5px;
	}

	.main1 {
		color: azure;
		font-size: 0.8rem;
		font-weight: 100;
		padding-top: -10px;
	}

	.min-container {
		width: 100%;
		height: 350px;
		/* background-color: rgb(247, 247, 247); */
		border-radius: 20px;
		position: absolute;
		top: 160px;
		background:rgba(247, 247, 247,0.8);
	}

	.top {
		display: flex;
		justify-content: space-around;
	}

	.top view image {
		width: 40px;
		height: 40px;
		border-radius: 100%;
	}

	.top>view {
		text-align:center;
		align-items:center;
		justify-content: center;
		margin-top: 10px;
	}
	.number{
		/* background:rgba(255, 255, 255,1); */
		width: 95%;
		height: 170px;
		border-radius: 5px;
		margin: 8px auto;
		background-color: rgb(255, 255, 255) ;
		
	}
	.title{
		color: black ;
		padding-left: 5px;
	}
	.shujuxianshi{
		display: flex;
	}
	.shujuxianshi>view{
		width: 50%;
		margin-left: 10px;
	}
	.shujuxianshi>view >view:first-child {
		font-size: 1.0rem;
		font-weight: 300;
	}
</style>
