<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			console.log(this.$store.state.ceshi)
			// 初始化用户信息
			this.$store.dispatch('initUser')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 引入官方样式库 */
	@import url("common/uni.css");
	/* 引入公共样式库 */
	@import url("common/common.css");
	/* 引入free样式库 boostrap样式库*/
	@import url("common/free.css");
	/* 引入iocn图标 */
	@import url("common/icon.css");
</style>
