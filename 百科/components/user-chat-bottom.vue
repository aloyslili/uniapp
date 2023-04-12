<template>
	<view>
		<!-- 输入框 -->
		<view class="user-chat-bottom u-f-ac">
			<input type="text" value="" placeholder="文明发言" v-model="text"/>
			<view class="icon iconfont icon-fabu" @tap="submit"></view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"user-chat-bottom",
		data() {
			return {
				text:''
			};
		},
		methods:{
			// 发送逻辑
			submit(){
				// console.log(this.text)
				this.$emit('submit',this.text)
				this.text = ''
			}
		}
	}
</script>

<style>
.user-chat-bottom{
	/* 固定定位 */
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100upx;
	padding: 20upx 0;
	border-top: 1px solid #EEEEEE;
}
.user-chat-bottom>input{
	flex: 1;
	margin-right: 20upx;
	padding: 10upx;
	border-radius: 10upx;
}
.user-chat-bottom>view{
	width: 80upx;
	font-size: 45upx;
}
</style>