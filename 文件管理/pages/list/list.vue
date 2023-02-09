<template>
	<view>
		<view class="flex flex-column" style="height: 100vh;">
			<view class="flex border-bottom border-light-secondary" style="height: 100rpx;">
				<view class="flex align-center flex-column justify-center flex-1  "
				v-for="(item,index) in tabBars" :key="index"
				:class="index === tabIndex? 'text-main': ''"
				@click="changeTab(index)">
					<text class="font-md">{{item.name}}</text>
					<text style="height: 8rpx;width: 30rpx;" class="rounded" :class="tabIndex === index ? 'bg-main' : 'bg-white'"></text>
				</view>
			</view>
			<!-- 列表 手动滑动-->
			<swiper :duration="250" class="flex-1 flex" :current="tabIndex" @change="changeTab($event.detail.current)">
				<swiper-item class="flex-1 flex" v-for="(item,index) in tabBars" :key="index">
					<!-- 手动滑动 -->
					<scroll-view scroll-y="true" class="flex-1">
						<view class="bg-light flex align-center font-sm p-2 text-muted" style="shape-image-threshold: 60rpx;">
							文件下载至：xxx
						</view>
						<view class="px-2 py-3 border-bottom border-light-secondary font text-muted">
							下载中({{downing.length}})
						</view>
							<f-list v-for="(item, index) in downing" :key=" 'i'+ index" :item="item" :index="index" >
								<view class="flex align-center text-main" style=" height: 70rpx;">
									<text class="iconfont icon-zanting"></text>
									<text class="ml-1">{{item.downLoad}}%</text>
								</view>
								<!-- 进度条  插槽的名字bottom-->
								<progress :percent="item.downLoad" activeColor="#009CFF" slot="bottom" :stroke-width="4"/>
							</f-list>
						<view class="px-2 py-3 border-bottom border-light-secondary font text-muted">
							下载完成({{downed.length}})
						</view>
						<f-list v-for="(item,index) in downed" :key=" 'd'+ index" :item="item" :index="index" :showRight="false"></f-list>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		 
	</view>
</template>

<script>
	import fList from "@/components/common/f-list.vue";
	export default {
		components:{
			fList
		},
		data() {
			
			return {
				tabIndex: 0,
				tabBars: [{
					name: "下载列表"
				}, {
					name: "上传列表"
				}],
				list: [
					{
						type: "image",
						name: "风景.jpg",
						create_time: "2023-1-13 11:56",
						data: '/static/logo.png',
						downLoad: 10
					},
					{
						type: "video",
						name: "视频.map4",
						create_time: "2023-1-13 11:56",
						data: "https://haokan.baidu.com/v?pd=wisenatural&vid=3529682065002390309",
						downLoad: 100
					},
					{
						type: "text",
						name: "记事本.txt",
						create_time: "2023-1-13 11:56",
						downLoad: 100
					},
					{
						type: "none",
						name: "压缩包.rar",
						create_time: "2023-1-13 11:56",
						downLoad: 100
					},
					{
						type: "dir",
						name: "笔记本",
						create_time: "2023-1-13 11:56",
						data: '/static/logo.png',
						downLoad: 100
					},
					{
						type: "image",
						name: "风景.jpg",
						create_time: "2023-1-13 11:56",
						data: '/static/logo.png',
						downLoad: 100
					},
					{
						type: "image",
						name: "风景.jpg",
						create_time: "2023-1-13 11:56",
						data: '/static/logo.png',
						downLoad: 100
					}
				],
			}
		},
		methods: {
			// 下载中
			changeTab(index){
				this.tabIndex = index
			},
			// 监听是wiper事件
			changSwiper(e){
				console.log(e.detail.current)
			}
		},
		computed:{
			// 下载完成
			downing(){
				return this.list.filter(item=>{
					return item.downLoad < 100
				})
			},
			
			// 下载完成 downed 是一个数据
			downed(){
				return this.list.filter(item=>{
					return item.downLoad === 100
				})
			}
		}
	}
</script>

<style>

</style>
