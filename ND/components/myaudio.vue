<template>
	<view class="fixed-bottom bg-danger bg-danger mx-1 mb-2" 
	style="height: 160px; background-color: #d1ccc0;opacity: 0.9;">
		
		<!-- 进度条 -->
		 <view class="flex align-center justify-center font " style="#7a8388">
		 	<view class="">00:00</view>
			<view class="width: 500rpx"><slider @change="" block-size="16" activeColor="#e48267" backgroundColor="eef2f3"/></view>
			<view class="">00:00</view>
		 </view>
	</view>
</template>

<script>
	export default {
		name:"myadio",
		data() {
			return {
				
			};
		}
	}
</script>

<style>

</style>