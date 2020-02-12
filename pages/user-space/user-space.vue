<template>
	<view>
		<user-space :userInfo="userInfo"></user-space>
		<view class="space-data u-f-ajc">
			<block v-for="(data, index) in dataList" :key="index">
				<home-data :data="data"></home-data>
			</block>
		</view>
		<view style="background-color: #F4F4F4; height: 15upx;"></view>
		<tar-swiper-header :tabBars="tabBars" :tarIndex="tarIndex" @changeTar="changeTar" scrollViewBorderStyle="border-bottom: 0;" scrollViewHeightStyle="width: 33.33%;"></tar-swiper-header>
	</view>
</template>

<script>
	import homeData from '../../components/home/home-data.vue'; 
	import userSpace from '../../components/user-space/user-space.vue';
	import tarSwiperHeader from '../../components/index/tar-swiper-header.vue';
	export default {
		components: {
			homeData,
			userSpace,
			tarSwiperHeader
		},
		data() {
			return {
				dataList: [
					{ name: '获赞', number: '10k' },
					{ name: '关注', number: '24' },
					{ name: '粉丝', number: '42' }
				],
				userInfo: {
					isAttention: true,
					bg: '../../static/bgimg/1.jpg',
					bgIndex: 1,
					nickname: '楚青',
					gender: 0,
					age: 23
				},
				tabBars: [
					{ id: 1, name: '主页' },
					{ id: 2, name: '糗事' },
					{ id: 3, name: '动态' }
				],
				tarIndex: 0,
				
			};
		},
		methods: {
			changeTar(index) {
				this.tarIndex = index;
			}
		}
	}
</script>

<style lang="less" scoped>
.space-data {
	position: relative;
	font-weight: bolder;
	border-top-left-radius: 20upx;
	border-top-right-radius: 20upx;
	margin-top: -35upx;
	z-index: 200;
	background-color: #FFFFFF;
	padding-top: 20upx;
	margin-bottom: 20upx;
}
</style>
