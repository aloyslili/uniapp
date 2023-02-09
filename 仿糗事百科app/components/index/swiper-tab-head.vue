<template>
	<view class="uni-tab-bar">
		<scroll-view scroll-x class="uni-swiper-tab">
			<block v-for="(tab,index) in tabBars" :key="tab.id">
				<view class="swiper-tab-list" 
				:class="{'active':tabIndex==index}"
				@tap="tabtap(index)">
					{{tab.name}}
					<view class="swiper-tab-line"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		// 滑动组件 子组件
		props:{
			// 传入tabBars tabIndex
			tabBars:Array, //数组
			tabIndex:Number   //number类型
		},
		methods:{
			// 修改父组件的index
			tabtap(index){
				// 把子组件的index传给父组件
				// 子组件所选中的值
				// 子组件把数据传给父组件 监听tabtap事件
				this.$emit('tabtap',index);
			},
		}
	}
</script>

<style>
.uni-swiper-tab{
	border-bottom: 1upx solid #EEEEEE;
}
.swiper-tab-list{
	color: #969696;
	font-weight: bold;
}
.uni-tab-bar{
	max-height: 7.5vh;
}
.uni-tab-bar .active{
	color: #343434;
}
.active .swiper-tab-line{
	border-bottom: 6upx solid #FEDE33;
	width: 70upx;
	margin: auto;
	border-top: 6upx solid #FEDE33;
	border-radius:20upx;
}
</style>
