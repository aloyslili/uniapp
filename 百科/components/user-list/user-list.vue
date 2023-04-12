<template>
	<view>
		<view class="user_list u-f-ac">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="">
				<view>{{item.username}}</view>
				<view class="sex"><tag-sex-age :age="item.age" :sex="item.sex"></tag-sex-age></view>
			</view>
			<!-- <view class="icon iconfont icon-xuanze u-f-ac"></view> -->
			<view class="icon iconfont icon-zengjia1 u-f-ac"
			:class="[item.isguanzhua ? 'icon-xuanze' : 'icon-zengjia1']"></view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../../components/common/tag-sex-age.vue'
	export default {
		components:{
			tagSexAge
		},
		props:{
			item: Object,
			index: Number
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.user_list {
		padding: 20 0;
		border-bottom: 1px solid #EEEEEE;
	}

 	.user_list image {
 		width: 100upx;
 		height: 100upx;
 		border-radius: 100%;
 		margin-right: 20upx;
 		/* 没有压缩 */
 		/* flex-shrink: 0; */
 	}
	.user_list>view:first-of-type{
		flex: 1;
	}
	.user_list>view:first-of-type>view:first-child{
		font-size: 35upx;
	}
	
	.user_list>view:last-of-type{
		width: 80upx;
		color: #EEEEEE;
	}
	.user_list>view:last-child{
		justify-items: center;
		/* margin-left: 10upx; */
	}
	.body{
		padding: 0 20upx;
	}
	.sex{
		 /* width: 50upx; */
		 /* 包住文中内容 */
		 display: inline-block;
	}
	.icon-zengjia1{
		color: #F8791B !important;
	}
</style>
