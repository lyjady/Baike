<template>
	<view>
		<h3>Home</h3>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onNavigationBarButtonTap(e) {
			if (e.index === 0) {
				console.log('跳转到设置页');
			}
		}
	}
</script>

<style>

</style>
