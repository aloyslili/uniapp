<template>
<!-- 小纸条列表 -->
<view class="paper-list u-f-ac" @tap="opendetail">
				<image :src="item.userpic" mode="widthFix" lazy-load></image>
				<view>
					<view class="u-f-ac u-f-jsb">{{item.username}} <view>10:21</view>
					</view>
					<view class="u-f-ac u-f-jsb">{{item.data}} 
					<template v-if="item.noreadnum>0">
						<uni-badge :text="item.noreadnum" type="error"></uni-badge>
					</template>
					</view>
				</view>
			</view>
</template>

<script>
	import uniBadge from "../../components/uni-badge/uni-badge.vue";
	export default{
		components:{
			uniBadge
		},
		props:{
			// item是一个数组对象
			item: Object,
			index: Number
		} ,
		methods:{
			opendetail(){
				uni.navigateTo({
					url: '../../pages/user-chat/user-chat'
				})
			}
		}
	}
</script>

<style scoped>
	.body {
		/* 内边距 */
		padding: 0 20upx;
	
	}
	
	.paper-list {
		border-bottom: 1upx solid #EEEEEE;
		padding: 20upx;
	}
	
	.paper-list>image {
		height: 100upx;
		width: 100upx;
		margin-right: 20upx;
		/* 图片不会被挤压 */
		flex-shrink: 0;
	}
	
	.paper-list>view {
		flex: 1;
	}
	
	.paper-list>view>view:first-child>view {
		color: #CBCBCB;
	}
	
	.paper-list>view>view:last-child {
		color: #CBCBCB;
	}
	
	.paper-list>view>view:first-child {
		font-size: 35upx;
	}
</style>