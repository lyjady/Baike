<template>
	<view class="uni-tab-bar">
		<scroll-view class="uni-swiper-tab" scroll-x :show-scrollbar="false">
			<block v-for="(tar, index) in tabBars" :key="index">
				<view class="swiper-tab-list" @tap="changeTar(index)">
					{{ tar.name }}
					<view :class="{ 'swiper-active': index === tarIndex }"></view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:[
			'tabBars',
			'tarIndex'
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
	}
	
	.swiper-active {
		border-top: 2px solid #fafa00;
		border-bottom: 2px solid #fafa00;
		width: 60%;
		margin: auto;
	}
</style>
