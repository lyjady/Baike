<template>
	<view>
		<view class="loading-more">{{ loadingMoreInfo }}</view>
	</view>
</template>

<script>
	export default {
		props: [
			'loadingMoreInfo'
		]
	}
</script>

<style scoped>
	.loading-more {
		padding: 10px;
		text-align: center;
		color: #aaaaaa;
		font-size: 25upx;
	}
</style>
