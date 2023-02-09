<template>
 <view class="">
 	<!-- 传给父组件处理@click="$emit('click')" -->
 	<view class="p-3 flex align-center border-bottom border-light-secondary" hover-class="bg-light"
 		@click="$emit('click')">
 		<!-- 动态绑定样式 -->
 		<text class="iconfont" :class="iconClass" style="font-size: 60rpx;"></text>
 		<view class="flex flex-column ml-3" style="line-height: 1.2;">
 			<view class="font-md">{{item.name}}</view>
 			<view class="font-sm text-muted">{{item.created_time}}</view>
 		</view>
 		<view v-if="showRight" class="ml-auto">
 			<!-- 匿名插槽 剧名插槽 -->
 			<slot>
 				<view class=" flex align-center justify-center" style="width: 70rpx; height: 70rpx;" @click.stop="select">
 					<text v-if="!item.checked" style="height: 25rpx;width: 25rpx;" class="rounded-circle border"></text>
 					<text v-else class="iconfont icon-xuanze-yixuan text-primary" style="font-size: 20px;"></text>
 				</view>
 			</slot>
 		</view>
 	</view>
	<!-- 插槽就是拿来放将来要给的东西 -->
	<slot name="bottom"></slot>
 </view>
</template>

<script>
	const icons = {
		dir: {
			icon: "icon-file-b-2",
			color: "text-warning"
		},
		image: {
			icon: "icon-file-b-6",
			color: "text-success"
		},
		video: {
			icon: "icon-file-b-9",
			color: "text-primary"
		},
		text: {
			icon: "icon-file-s-7",
			color: "text-info"
		},
		none: {
			icon: "icon-file-b-8",
			color: "text-muted"
		}
	}
	export default {
		props: {
			// 子组件接收父组件传来的值
			item: Object,
			index: [Number, String],
			showRight: {
				default: true,
				type: Boolean
			}
		},
		computed: {
			// 动态绑定样式
			iconClass() {
				// 拿到icon对象  传入对象值  比如this.item.type="image"，则icons[this.item.type]等于icons["image"]
				let item = icons[this.item.type]
				return `${item.icon} ${item.color}`
			}
		},
		methods: {
			// 选中 让父组件去处理
			select() {
				this.$emit('select', {
					// 给index和value赋值
					index: this.index,
					value: !this.item.checked
				})
			}
		}
	}
</script>

<style>
</style>
