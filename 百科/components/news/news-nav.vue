<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :fixed="true" :statusBar="true" @click-right="openAdd">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block>
			<!-- 中间 -->
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tab,index) in tabBars" :key="tab.id">
					<view class="u-f-ajc" 
					:class="{'active':tabIndex==index}" 
					@tap="changeTab(index)">
						{{tab.name}}
						<view v-if="(tabIndex==index)" class="nav-tab-bar-line"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right u-f-ajc">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	export default {
		data() {
			return {
				components:{
					uniNavBar
				},
				props: {
					tabBars: Array,
					tabIndex: Number
				}
			}
		},
		methods: {
			// 父亲的方法
			changeTab(index){
				// this.tabIndex=index; chang-tab这是一个事件，子组件的事件
				this.$emit('chang-tab', index)
			},
			openAdd(){
				// 打开发布页面
				uni.navigateTo({
					url: '../add-input/add-input',
				});
			}
		}
	}
</script>

<style scoped>
	.nav-left>view,.nav-right>view{
		font-size: 40upx;
	}
	.nav-left>view{
		color: #FF9619;
	}
	.nav-left{
		margin-left: 16upx;
	}
	.nav-right{
		width: 100%;
	}
	.nav-tab-bar{
		width: 100%;
		margin-left: -20upx;
		position: relative;
	}
	.nav-tab-bar>view{
		font-size: 32upx;
		padding: 0 15upx;
		font-weight: bold;
		color: #969696;
	}
	.active{
		color: #333333!important;
	}
	.nav-tab-bar-line{
		border-bottom: 5upx solid #FEDE33;
		border-top: 5upx solid #FEDE33;
		width: 70upx;
		border-radius: 20upx;
		position: absolute;
		bottom: 12upx;
	}
</style>
