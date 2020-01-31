<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" scroll-x :show-scrollbar="false" :style="scrollViewBorderStyle">
			<block v-for="(tar, index) in tabBars" :key="index">
				<view class="swiper-tab-list" @tap="changeTar(index)" :style="scrollViewHeightStyle">
					{{ tar.name }} {{ tar.num ? tar.num : '' }}
					<view :class="{ 'swiper-active': index === tarIndex }"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: [
			'tabBars',
			'tarIndex',
			'scrollViewBorderStyle',
			'scrollViewHeightStyle'
		],
		methods: {
			changeTar(index) {
				this.$emit('changeTar', index)
			}
		}
	}
</script>

<style scoped>
	.uni-swiper-tab {
		border-bottom: none;
	}
	
	.swiper-tab-list {
		font-weight: bolder;
	}
	
	.swiper-active {
		border-top: 2px solid #fafa00;
		border-bottom: 2px solid #fafa00;
		width: 30%;
		margin: auto;
	}
</style>
