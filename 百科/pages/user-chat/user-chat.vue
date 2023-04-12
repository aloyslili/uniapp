<template>
	<view>
		<!-- 聊天列表-->
		<view class="user-chat-time u-f-ac">12：00</view>
		<view class="user-chat-list u-f user-chat-me">
			<!-- <image src="../../static/demo/demo66.jpg" mode="widthFix" lazy-load></image> -->
			<view class="user-user-chat-list-body">
				<!-- 文字 -->
				<!-- <text>发</text> -->
				<image src="../../static/demo/datapic/1.jpg" mode="widthFix" lazy-load></image>
			</view>
			<image src="../../static/demo/demo66.jpg" mode="widthFix" lazy-load></image>
		</view>
		<user-chat-bottom @submit='submit'></user-chat-bottom>
	</view>
</template>

<script>
	import userChatBottom from '../../components/user-chat-bottom.vue'
	export default {
		components: {
			userChatBottom
		},
		data() {
			return {
				text : '',
				list:[
					{
						isme: false,
						userpic: '',
						type: 'text',
						data: "哈哈哈",
						time: '2023-2-19'
					}
				]
			}
		},
		methods: {
			submit(data) {
				console.log("当前手动的是什么：" + data)
			}
		}
	}
</script>

<style>
	.user-chat-list {
		margin-top: 20upx;
	}

	.user-chat-list>image {
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		/* 图片不压缩 */
		flex-shrink: 0;
	}

	.user-user-chat-list-body {
		position: relative;
		background: #f4f4ff;
		padding: 25upx;
		margin-left: 20upx;
		border-radius: 20upx;
		margin-right: 100upx;
	}

	/* 聊天界面的左三角 */
	.user-user-chat-list-body:after {
		position: absolute;
		left: -30upx;
		right: 0;
		content: "";
		width: 0;
		height: 0;
		border: 16upx solid #f4f4ff;
		top: 20upx;
		border-color: transparent #f4f4ff transparent transparent;
	}

	.user-chat-me {
		justify-conten t: flex-end;
	}

	.user-chat-me .user-user-chat-list-body {
		margin-right: 20upx;
		margin-left: 100upx;
	}

	.user-chat-me .user-user-chat-list-body:after {
		left: auto;
		right: -30upx;
		border-color: transparent transparent transparent #f4f4ff;
	}
	.user-user-chat-list-body>image{
		max-width: 150upx;
		max-height: 200upx;
	}
	.user-chat-time{
		padding: 50uox 0;
		color: #a2a2a2;
		font-size: 12upx;
	}
</style>
