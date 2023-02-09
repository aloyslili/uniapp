<template>
	<uni-popup ref="dialog">
		<view style="width: 600rpx;" class="bg-white rounded">
			<view class="flex align-center justify-center font-weight-bold border-bottom border-light-secondary"
				style="height: 100rpx;">{{title}}</view>
			<view class="flex align-center justify-center  p-3">
				<slot></slot>
			</view>
			<view class="flex  border-top border-light-secondary" style="height: 100rpx; ">
				<view class="flex-1 text-muted flex align-center justify-center"
				@click="cancel">{{cancelText}}</view>
				<view class="flex-1 text-main flex align-center justify-center"
				@click="comfirm">{{confirmText}}</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
	import uniPopup from "@/components/uni-ui/uni-popup/uni-popup.vue"
	export default {
		components: {
			uniPopup
		},
		props:{
			title:{
				type: String,
				// 默认值
				default: "提示"
			},
			cancelText:{
				type: String ,
				default: "取消"
			},
			confirmText:{
				type: String,
				default: "确定"
			}
		},
		data(){
			return {
				callback: false
			}
		},
		methods:{
			// 打开弹出层
			open(callback= false){
				this.callback = callback
				this.$refs.dialog.open()
			},
			// 取消
			cancel(){
				// 通知父组件我要关闭了
				this.$emit('cancel')
				// 调用父组件的一个方法
				this.$refs.dialog.close()
			},
			// 确定
			comfirm(){
				if(typeof this.callback === 'function'){
					this.callback(()=>{
						this.cancel()
					})
				}else{
					this.$emit('comfirm')
					this.cancel()
				}
			}
		}
	}
</script>

<style>
</style>
