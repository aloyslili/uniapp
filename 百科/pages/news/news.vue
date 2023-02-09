<template>
	<view>
		<!-- 自定义导航栏 监听子组件的tabBars changeTab-->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="changeTab">
		</news-nav-bar>
		<!-- 列表 监听item和index-->
		<view class="uni-tab-bar" :style="{height:swiperheight+'px'}">
			<!-- 切换轮播 -->
			<swiper class="swiper-box" :current="tabIndex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item>
					<!-- 触底监听事件 -->
					<scroll-view scroll-y class="list" @scrolltolower="loadmore()">
						<block v-for="(item,index) in guanzhu.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
						<!-- 上拉加载 上拉加载组件-->
						<load-more :loadtext="guanzhu.loadtext"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y class="list">
						<!-- 话题内容 -->
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder-class="topic-search icon iconfont icon-sousuo"
								placeholder="搜索内容" />
						</view>
						<!-- 轮播图框 -->
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000"
							:duration="1000">
							<block v-for="(item,index) in topic.swiper" :key="index">
								<swiper-item>
									<image :src="item.src" mode="widthFix" lazy-load></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 父组件监听子组件的nav  prop里面又nav所以就要：nav 监听-->
						<topic-nav :nav="topic.nav"></topic-nav>
						<!-- 最近更新 -->
						<view class="topic-new">
							<view class="">最近更新</view>
							<block v-for="(item,index) in topic.list" :key="index">
								<!-- 监听index和item -->
								<topic-list :item="item" :index="index"></topic-list>
							</block>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import newsNavBar from "../../components/news/news-nav-bar.vue";
	import commonList from "../../components/common/common-list.vue";
	import loadMore from "../../components/common/load-more.vue";
	import topicNav from "../../components/news/topic-nav.vue";
	import topicList from "../../components/news/topic-list.vue";
	export default {
		components: {
			newsNavBar,
			commonList,
			loadMore,
			topicNav,
			topicList
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "话题",
						id: "topic"
					}
				],
				guanzhu: {
					loadtext: "上拉加载更多",
					list: [
						// 文字
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 图文
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: false,
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 视频
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "../../static/demo/datapic/13.jpg",
							video: {
								looknum: "20w",
								long: "2:47"
							},
							share: false,
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
						// 分享
						{
							userpic: "../../static/demo/userpic/12.jpg",
							username: "哈哈",
							sex: 0, //0 男 1 女
							age: 25,
							isguanzhu: false,
							title: "我是标题",
							titlepic: "",
							video: false,
							share: {
								title: "我是分享的标题",
								titlepic: "../../static/demo/datapic/14.jpg"
							},
							path: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							goodnum: 20
						},
					]
				},
				topic: {
					swiper: [{
							src: "../../static/demo/demo10.jpg"
						},
						{
							src: "../../static/demo/demo10.jpg"
						},
						{
							src: "../../static/demo/demo10.jpg"
						}
					],
					nav: [{
							name: "最新"
						},
						{
							name: "游戏"
						},
						{
							name: "打卡"
						},
						{
							name: "情感"
						},
						{
							name: "故事"
						},
						{
							name: "喜爱"
						},
					],
					list: [{
							titlepic: "../../static/demo/demo5.jpg",
							title: "话题名称",
							desc: "我是话题描述",
							totalnum: 50,
							todaynum: 10
						},
						{
							titlepic: "../../static/demo/demo5.jpg",
							title: "话题名称",
							desc: "我是话题描述",
							totalnum: 50,
							todaynum: 10
						},
						{
							titlepic: "../../static/demo/demo5.jpg",
							title: "话题名称",
							desc: "我是话题描述",
							totalnum: 50,
							todaynum: 10
						}
					]
				},
			};
		},
		methods: {
			changeTab(index) {
				this.tabIndex = index;
			},
			// 滑动事件 轮播事件
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			// 上拉加载
			loadmore(index) {
				// 如果loadtext不等于“上拉加载更多，终止上拉加载”
				if (this.guanzhu.loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.guanzhu.loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					//获取完成
					let obj = {
						userpic: "../../static/demo/userpic/12.jpg",
						username: "哈哈",
						sex: 0, //0 男 1 女
						age: 25,
						isguanzhu: false,
						title: "我是标题",
						titlepic: "../../static/demo/datapic/13.jpg",
						video: false,
						share: false,
						path: "深圳 龙岗",
						sharenum: 20,
						commentnum: 30,
						goodnum: 20
					};
					this.guanzhu.list.push(obj);
					this.guanzhu.loadtext = "上拉加载更多";
				}, 1000);
				// this.guanzhu.loadtext="没有更多数据了";
			}
		},
		// 切换轮播事件  及时更新屏幕大小
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height;
				}
			});
		}
	}
</script>

<style>
	.search-input {
		padding: 20upx;
	}

	.search-input>input {
		background: #f4f4f4;
		border-radius: 10upx;
	}

	.topic-search {
		display: flex;
		justify-content: center;
		font-size: 25upx;
	}

	.topic-new {
		padding: 20upx;
	}
	.topic-swiper{
		padding: 0 20upx 20upx 20upx;
	}
	.topic-swiper image{
		width: 100%;
	}
</style>
