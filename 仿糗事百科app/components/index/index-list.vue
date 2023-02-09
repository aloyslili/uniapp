<template>
		<view class="index-list">
			<view class="index-list1 u-f-ac">
				<view class=" u-f-ac">
					<!-- 头像组件  图片 demo压缩 宽度自动缩放 lazy懒加载-->
					<image :src="item.userpic" mode="widthFix" lazy-load></image>
					{{item.username}}
				</view>
				<view class="" v-show="item.isguanzhu">
					<view class="icon iconfont icon-zengjia">关注</view>
				</view>
			</view>
			<view class="index-list2">{{item.title}}</view>
			<view class="index-list3 ">
				<!-- 图片 -->
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.type==='video'">
					<view class=" icon iconfont icon-bofang index-list-play"></view>
					<view class="index-list-play-info">{{item.playnum}}次播放 {{item.long}}</view>
				</template>
			</view>
			<view class="index-list4">
				<view>
					<!-- 动态绑定样式 -->
					<view :class="{'active':item.infonum.index == 1}">
						<view class="icon iconfont icon-icon_xiaolian-mian">{{item.infonum.dingnum}}</view>
						 
					</view>
					<view :class="{'active':item.infonum.index == 2}">
						<view class="icon iconfont icon-kulian">{{item.infonum.cainum}}</view>
						 
					</view>
				</view>
				<view>
					<view class="">
						<view class="icon iconfont icon-pinglun1">{{item.commentnum}}</view>
					</view>
					<view class="">
						<view class="icon iconfont icon-zhuanfa">{{item.sharanum}}</view>
					</view>
				</view>
			</view>
		</view>
</template>

<script>
	// 从父组件给子组件传值 对象形式
	export default {
		props:{
			item: Object,
			index:Number
		}
	}
</script>

<style scoped>
	/* 封装样式 */
	.u-f,
	.u-f-ac,
	.u-f-ajc {
		display: flex;
	}
	
	.u-f-ac,
	.u-f-ajc {
		align-items: center;
	}
	
	.u-f-ajc {
		justify-content: space-between;
	}
	
	.index-list {
		padding: 20upx;
		border: 1upx solid #EEEEEE;
	}
	
	.index-list1 {
		/* display: flex; */
		justify-content: space-between;
		/* align-items: center; */
	}
	
	.index-list1>view:first-child {
		/* 	display: flex;
	align-items: center; */
		color: #999999;
	}
	
	.index-list1>view:first-child image {
		width: 85upx;
		height: 85upx;
		border-radius: 100%;
		margin-right: 10upx;
	}
	
	.index-list1>view:last-child {
		display: flex;
		align-items: center;
		background: #F4F4F4;
		border-radius: 5upx;
		padding: 0 10upx;
	}
	
	.index-list2 {
		padding-top: 15upx;
		font-size: 32upx;
	}
	
	.index-list3 {
		position: relative;
		padding-top: 15upx;
	}
	
	.index-list3 image {
		width: 100%;
		border-radius: 20upx;
	}
	
	.index-list4 {
		padding-top: 15upx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.index-list4 view {
		color: #999999;
	}
	
	.index-list4:view:first-child {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.index-list4:view:last-child {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.index-list4>view {
		display: flex;
		align-items: center;
	}
	
	.index-list4>view>view>view {
		margin-right: 10upx;
	}
	
	.index-list4>view>view:first-child {
		margin-right: 10upx;
	}
	
	.index-list-play {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 20%;
		color: #F4F4F4;
		font-size: 140upx;
	}
	
	.index-list-play-info {
		position: absolute;
		background: rgba(51, 51, 61, 0.72);
		color: #FFFFFF;
		bottom: 15upx;
		width: 250upx;
		right: 8upx;
		border-radius: 40upx;
		text-align: center;
	}
	.index-list4 .active,.index-list4 .active>view  {
		color: #C5F61C;
	}
	
</style>