<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onNavigationBarSearchInputChanged(e) {
			console.log(JSON.stringify(e))
		},
		onNavigationBarSearchInputConfirmed(e) {
			console.log(JSON.stringify(e))
		}
	}
</script>

<style lang="less">

</style>
