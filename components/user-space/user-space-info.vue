<template>
	<view class="space-info">
		<view class="account-info">
			<view class="account-info-header">
				账号信息
			</view>
			<view class="account-info-data">
				<view>年龄: {{ getRegTime }}</view>
				<view>ID: {{ accoutInfo.id }}</view>
			</view>
		</view>
		<view class="user-info">
			<view class="user-info-header">
				个人信息
			</view>
			<view class="user-info-data">
				<view>星座: {{ getConstellation }}</view>
				<view>职业: {{ userInfo.job }}</view>
				<view>故乡: {{ userInfo.home }}</view>
				<view>情感: {{ userInfo.maritalStatus }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import time from '../../common/time.js';
	export default {
		props: [
			'userInfo',
			'accoutInfo'
		],
		computed: {
			getConstellation() {
				return time.gettime.getHoroscope(this.userInfo.birthday)
			},
			getRegTime() {
				return time.gettime.sumAge(this.accoutInfo.regTime)
			}
		}
	}
</script>

<style lang="less" scoped>
	.space-info {
		margin: 10upx 30upx 0 30upx;
	}
	
	.account-info {
		margin-bottom: 30upx;
	}
	
	.account-info, .user-info {
		border-bottom: 1upx solid #EEEEEE;
	}
	
	.account-info-data, .user-info-data {
		padding: 20upx 0;
		color: #AAAAAA;
		view {
			font-size: 32upx;
		}
	}
	
	.account-info-header, .user-info-header {
		font-size: 32upx;
		font-weight: 600;
	}
	
</style>
