<template>
	<view class="top">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="back" leftText="返回" @click-left="back"
			@click-right="submit">
			<view class="u-f-ajc" @tap="changelook">
				{{yinsi}}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea name="" id="" value="" placeholder="说一句话吧~"></textarea>
		</view>
		<!-- 上传多图 -->
		<uploud-images @uploud="uploud"></uploud-images>
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			<!-- 弹出广告的信息 -->
			<!-- 1111 -->
			<view class="u-f-ajc gongggao">
				<image src="../../static/common/addinput.webp" alt="" mode="widthFix"></image>
			</view>
			<view>1.涉及黄色，政治，广告及骚扰信息</view>
			<view>2.涉及黄色，政治，广告及骚扰信息</view>
			<view>3.涉及黄色，政治，广告及骚扰信息</view>
			<view>4.涉及黄色，政治，广告及骚扰信息</view>
			<button type="primary" @tap=hidePopup()>朕知道了~</button>
		</uni-popup>
	</view>
</template>

<script>
	let changelook = ['所有人可见', '仅自己可见'];
	// import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	import uploudImages from "../../components/common/uploud-images.vue";
	// 引入弹框组件 的使用
	import uniPopup from "../../components/uni-popup/uni-popup.vue";
	export default {
		components: {
			// uniNavBar
			uniNavBar,
			uploudImages,
			// 弹出公告
			uniPopup
		},
		data() {
			return {
				yinsi: "所有人可见",
				text: "111",
				imglist: [],
				showpopup: true,
				//是否要返回
				isget: false
			}
		},
		onBackPress() {
			//如果有值 
			if (!this.text && this.imglist.length < 1) {
				return
			}
			if (!this.isget) {
				this.baocun();
				return true;
			}
		},
		methods: {
			// 返回
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 发布
			submit() {
				console.log("发布")
			},
			// 隐私
			changelook() {
				uni.showActionSheet({
					itemList: changelook,
					success: (res) => {
						this.yinsi = changelook[res.tapIndex]
					}
				});
			},
			uploud(arr) {
				this.imglist = arr;
				console.log(this.imglist)
			},
			// 隐藏

			hidePopup() {
				this.showpopup = false
			},
			//保存
			baocun() {
				//返回提示
				uni.showModal({
					content: "是否保存为草稿",
					//缓存草稿
					cancelText: "不保存",
					confirmText: "保存",
					success: res => {
						if (res.confirm) {
							console.log("保存")
						} else {
							console.log("不保存")
						}
						this.isget = true
						//返回事件
						uni.navigateBack({
							//返回首页 返回上一页
							delta: 1
						});
					},
				});
			}
		}
	}
</script>

<style>
	.uni-textarea {
		border: 1upx solid #EEEEEE;
	}

	.gongggao {
		width: 50%;
	}
</style>
