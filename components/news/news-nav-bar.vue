<template>
	<view>
		<uni-nav-bar :statusBar="true" :fixed="true" @clickRight="jumpRelease">
			<!-- 左边 -->
			<block slot="left">
				<view class="nav-left u-f-ajc"><view class="icon iconfont icon-qiandao"></view></view>
			</block>
			<!-- 中间 -->
			<view class="nav-tab-bar u-f-ajc">
				<block v-for="(tar, index) in tarBars" :key="tar.id">
					<view>
						<view :class="{ 'text-active': tarIndex === index }" @click="change(index)">{{ tar.name }}</view>
						<view :class="[tarIndex === index ? 'active-line' : 'line']"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right u-f-ajc"><view class="icon iconfont icon-bianji1"></view></view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		props: [
			'tarBars',
			'tarIndex'
		],
		methods: {
			change(index) {
				this.$emit('changeBar', index);
			},
			jumpRelease() {
				uni.navigateTo({
					url: '../../pages/release/release'
				})
			}
		},
		components: {
			uniNavBar
		}
	}
</script>

<style lang="less" scoped>
	.nav-left {
		width: 30px;
		height: 30px;
	
		view {
			color: #ff9619;
		}
	}
	
	.nav-right {
		padding-left: 30px;
		width: 30px;
		height: 30px;
	}
	
	.nav-left > view,
	.nav-right > view {
		font-size: 40upx;
	}
	
	.nav-tab-bar {
		width: 100%;
		position: relative;
	
		view {
			color: #969696;
			font-weight: bold;
			padding: 0 15upx;
	
			.text-active {
				color: #000000;
			}
		}
	}
	
	.active-line {
		border-top: 2px solid #fede33;
		border-bottom: 2px solid #fede33;
		border-radius: 10px;
		width: 65%;
	}
	
	.line {
		width: 65%;
		border-top: 2px solid #ffffff;
		border-bottom: 2px solid #ffffff;
	}
</style>
