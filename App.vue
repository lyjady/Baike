<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
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
	@import url("./common/uni.css");
	/* 引入animate.css */
	@import url("./common/animate.css");
	/* 引入图标库 */
	@import url("/static/font/demo.css");
	@import url("/static/font/iconfont.css");
	@import url("/common/common.css");
</style>
