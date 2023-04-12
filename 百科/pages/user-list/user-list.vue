<template>
	<view class="body">
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap" scrollItemStyle="width:33%;"
			scrollStyle="border-bottom:0;">
		</swiper-tab-head>

		<!-- 好友列表 -->
		<!-- <block v-for="(item,index) in list" :key="index">
			<user-list :item="item" :index="index"></user-list>
		</block> -->
		<view class="uni-tab-bar" :style="{height:swiperheight+'px'}">
			<swiper class="swiper-box" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<!-- 首页内容 下拉首页内容 主要显示 轮播滚动效果 -->
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length>0">
							<!-- 图文列表 -->
							<block v-for="(item,index1) in list" :key="index1">
								<user-list :item="item" :index="index1"></user-list>
							</block>
								<!-- <block v-for="(item,index1) in items.list" :key="index1">
								<index-list :item="item" :index="index1"></index-list>
							</block> -->
								<!-- 绑定父组件传来的值  上拉加载-->
								<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<!-- 无内容默认 -->
							<no-thing></no-thing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import userList from "../../components/user-list/user-list.vue";
	import loadMore from "../../components/common/load-more.vue";
	import noThing from "../../components/common/no-thing.vue"
	export default {
		components: {
			swiperTabHead,
			userList,
			loadMore,
			noThing
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
						name: "互关",
						id: "huguan",
						num: 10
					},
					{
						name: "关注",
						id: "guanzhu",
						num: 20
					},
					{
						name: "粉丝",
						id: "fensi",
						num: 30
					},
				],
				list: [{
						userpic: '../../static/demo/demo5.jpg',
						username: '小阳呀',
						age: 20,
						sex: 0,
						isguanzhua: true
					},
					{
						userpic: '../../static/demo/demo5.jpg',
						username: '小阳呀',
						age: 20,
						sex: 1,
						isguanzhua: false
					}
				],
				newslist: [{
						loadtext: '上拉加载更多',
						list: [{
								userpic: '../../static/demo/demo5.jpg',
								username: '小阳呀',
								age: 20,
								sex: 0,
								isguanzhua: true
							},
							{
								userpic: '../../static/demo/demo5.jpg',
								username: '小阳呀',
								age: 20,
								sex: 1,
								isguanzhua: false
							}
						]
					},
					{
						loadtext: '上拉加载更多',
						list: [{
								userpic: '../../static/demo/demo5.jpg',
								username: '小阳呀',
								age: 20,
								sex: 0,
								isguanzhua: true
							},
							{
								userpic: '../../static/demo/demo5.jpg',
								username: '小阳呀',
								age: 20,
								sex: 1,
								isguanzhua: false
							}
						]
					}, {
						loadtext: '上拉加载更多',
						list: [{
								userpic: '../../static/demo/demo5.jpg',
								username: '小阳呀',
								age: 20,
								sex: 0,
								isguanzhua: true
							},
							{
								userpic: '../../static/demo/demo5.jpg',
								username: '小阳呀',
								age: 20,
								sex: 1,
								isguanzhua: false
							}
						]
					}
				]
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height;
				}
			});
		},
		// 监听导航按钮事件
		onNavigationBarButtonTap(e) {
			if (e.index == 0) {
				uni.navigateBack({
					delta: 1
				});
			}
		},
		methods: {
			// tabbar点击事件
			tabtap(index) {
				this.tabIndex = index;
			},
			// 滑动事件
			tabChange(e) {
				this.tabIndex = e.detail.current;
			},
			loadmore(index) {
				if (this.newslist[index].loadtext != "上拉加载更多") {
					return;
				}
				// 修改状态
				this.newslist[index].loadtext = "加载中...";
				// 获取数据
				setTimeout(() => {
					//获取完成
					let obj ={
								userpic: '../../static/demo/demo5.jpg',
								username: '小阳呀',
								age: 20,
								sex: 0,
								isguanzhua: true
							};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
				}, 1000);
				// this.newslist[index].loadtext="没有更多数据了";
			}
		}
	}
</script>

<style scoped>

</style>
