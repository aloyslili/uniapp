<template>
	<view>
		<!-- view视图容器 -->
		<!-- 绑定演示 -->
		<view :class="classname">
			<view>{{value}}</view>
			<view>测试2</view>
			<view>测试3</view>
		</view>
		<!-- 点击事件用tab -->
		<button @tab="changeClass()">改变样式</button>
		
<!-- 		<view class="box3" :class="['bor','fs']">
			box
		</view> -->
		<!-- 动态绑定样式  绑定变量 通过事件去操作使用它-->
		<view class="box3" :class="[class1,class2]">
			box
		</view>
		
		<!-- 条件渲染 -->
		<view class="box4" v-if='isShow'></view>
		<button @tap="changShow()">改变显示或者隐藏</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: "蛤蛤蛤",
				classname: "box",
				class1: 'fs',
				class2: 'bor',
				// ishsow: false
				isShow: true
			}
		},
		methods: {
			changeClass:function(){
				this.classname = "box2"
			},
				
			changShow(){
				this.isShow = !this.isShow
			}
		}
	}
</script>

<style>
	.box {
		border: 1px solid red;
		height: 500upx;
		width: 100%;
		display: flex;
		background-color: blue;
	}
	.box >view {
		border: 1px solid rebeccapurple;
		color:  white;
		font-weight: bold;
		flex: 1;
		height: 500upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px solid darkblue;
	}
	.box2 {
		border: 1px solid red;
		height: 500upx;
		width: 100%;
		display: flex;
		background-color: rebeccapurple;
	}
	.box3{
		background: red;
		color: white;
		width: 350upx;
		height: 350upx;
		border-radius: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 40upx;
	}
	.fs{
		font-size: 80upx;
	}
	.bor {
		border: 10upx solid red;
	}
	.box4 {
		background: red;
		color: white;
		font-size: 50upx;
		width: 300upx;
		height: 300upx;
	}
</style>
