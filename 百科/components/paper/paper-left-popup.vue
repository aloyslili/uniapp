<template>
	<view class="">
		<!-- 操作菜单 -->
		<view class="paper-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="paper-left-popup" v-show="show">
			<view class="u-f-ac" hover-class="paper-left-popup-h" @click="addfriend">
				<view class="icon iconfont icon-sousuo "></view>加好友
			</view>
			<view class="u-f-ac" hover-class="paper-left-popup-h" @click="clear">
				<view class="icon iconfont icon-qingchu "></view>清除缓存
			</view>
		</view>
	</view>
</template>

<script>
	// import Name from './components/Name.vue'
	
	export default {
		props:{
			// 传值
			show: Boolean
		},
		methods:{
			hidepopup(){
				this.$emit('hide')
			},
			addfriend(){
				this.$emit('addfriend')
			},
			clear(){
				this.$emit('clear')
			}
		}
	}
</script>

<style scoped>
	.paper-left-popup{
		position: fixed;
		right: 0;
		top: 10upx;
		background: #FFFFFF;
		z-index: 2000;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
	}
	.paper-left-popup>view{
		padding: 20upx;
		font-size: 35upx;
	}
	.paper-left-popup>view>view{
		margin-right: 10upx;
		font-family: 500;
	}
	.paper-left-popup-h {
		background: #EEEEEE;
	}
	.paper-left-popup-mask{
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		z-inden: 1999;
	}
</style>
