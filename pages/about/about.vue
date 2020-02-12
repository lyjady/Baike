<template>
	<view class="about-container">
		<image src="../../static/common/logo.png" lazy-load></image>
		<view class="version u-f-ajc">
			version 1.0.0
		</view>
		<block v-for="(option, index) in optionList" :key="index">
			<option-list :option="option" :index="index" :isLogin="true"></option-list>
		</block>
	</view>
</template>

<script>
	import optionList from '../../components/home/option-list.vue';
	export default {
		components: {
			optionList
		},
		data() {
			return {
				optionList: [
					{
						name: '新版本检测',
						needLogin: false
					},
					{
						name: '用户协议',
						needLogin: false
					}
				]
			};
		}
	}
</script>

<style lang="less" scoped>
image {
	margin: 100upx 0 25upx 0;
	width: 100%;
	height: 250upx;
}

.about-container {
	padding: 0 30upx;
}

.version {
	color: #CCCCCC;
	margin-bottom: 50upx;
}
</style>
