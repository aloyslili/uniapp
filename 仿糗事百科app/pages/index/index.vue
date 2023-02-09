<template>
	<view class="uni_Content">
		<!-- @tabtap子组件传来的值 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap">
		</swiper-tab-head>

		<!-- <view class="uni-tab-bar"> -->
		<swiper class="swiper" :style="{ width: windowWidth + 'px'}" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(items,index) in newslist" :key="index">
				<scroll-view scroll-y class="list">
					<!-- 图文列表 -->
					<block v-for="(item,index1) in items.list" :key="index1">
						<index-list :item="item" :index="index1"></index-list>
					</block>
					<!-- 上拉加载 -->
					<view class="load-more">
						{{items.loadtext}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- </view> -->
	</view>
</template>


<script>
	import indexList from "../../components/index/index-list.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	export default {
		components: {
			indexList,
			swiperTabHead
		},
		data() {
			return {
				// swiperheight: 500,
				currentTab: 0,
				swiperHeight:'',
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "推荐",
						id: "tuijian"
					},
					{
						name: "体育",
						id: "tiyu"
					},
					{
						name: "热点",
						id: "redian"
					},
					{
						name: "财经",
						id: "caijing"
					},
					{
						name: "娱乐",
						id: "yule"
					},
				],
				newslist: [{
						//上拉加载状态
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								loadtext: "上拉加载更多",
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [

							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: false,
								title: "我是标题",
								type: "img", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								infonum: {
									index: 0, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							},
							{
								userpic: "../../static/demo/userpic/12.jpg",
								username: "昵称",
								isguanzhu: true,
								title: "我是标题",
								type: "video", // img:图文,video:视频
								titlepic: "../../static/demo/datapic/11.jpg",
								playnum: "20w",
								long: "2:47",
								infonum: {
									index: 1, //0:没有操作，1:顶,2:踩；
									dingnum: 11,
									cainum: 11,
								},
								commentnum: 10,
								sharenum: 10,
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: []
					},
					{
						loadtext: "上拉加载更多",
						list: []
					},
					{
						loadtext: "上拉加载更多",
						list: []
					}
				],


			}
		},
		mounted() {
			uni.getSystemInfo({
				success: (res) => {
					console.log("首页获取到的页面高度:windowHeight", res.windowHeight);
					console.log("首页获取到的页面高度:windowWidth", res.windowWidth);
					this.windowWidth = res.windowWidth;
					this.screenHeight = res.windowHeight;
				}
			});
		},
		methods: {
			// tabbar点击事件
			tabtap(index) {
				this.tabIndex = index;
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current;
			}
		},
		create(){
			this.setSwiperHeight()
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
	}

	.uni_Content {
		height: 100vh;
	}

	.swiper {
		width: 100%;
		/* height: 100%; */
		height: calc(100% - 7.5vh);
	}

	.swiper /deep/.uni-swiper-wrapper  {
		/* overflow-anchor: none;
		overflow-x: hidden;
		overflow-y: auto;
		scrollbar-width: none;
		-ms-overflow-style: none; */
		border: 1px solid red;
	}

	.swiper /deep/.uni-swiper-wrapper .uni-swiper-slides .uni-swiper-slide-frame .uni-swiper-item::-webkit-scrollbar {
		width: 0;
		height: 0;
	}


	.load-more {
		text-align: center;
		color: #AAAAAA;
		padding: 10upx;
	}
</style>
