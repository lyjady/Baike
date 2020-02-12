<template>
	<view>
		<view class="user-settng-list">
			<block v-for="(option, index) in settingList" :key="index">
				<option-list :option="option" :index="index" :isLogin="isLogin"></option-list>
			</block>
		</view>
		<button class="logout-btn">退出登录</button>
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
				settingList: [
					{
						name: '账号与安全',
						needLogin: true,
						routerType: 'navigateTo',
						url : '../change-password/change-password'
					},
					{
						name: '绑定邮箱',
						needLogin: true,
						routerType: 'navigateTo',
						url : '../bind-email/bind-email'
					},
					{
						name: '编辑资料',
						needLogin: true,
						routerType: 'navigateTo',
						url : '../change-user-info/change-user-info'
					},
					{
						name: '小纸条',
						needLogin: true,
						routerType: 'navigateTo',
						url : ''
					},
					{
						name: '清除缓存',
						needLogin: true,
						routerType: 'navigateTo',
						url : ''
					},
					{
						name: '意见反馈',
						needLogin: true,
						routerType: 'navigateTo',
						url : '../feedback/feedback'
					},
					{
						name: '关于百科',
						needLogin: true,
						routerType: 'navigateTo',
						url : '../about/about'
					}
				],
				isLogin: true
			};
		}
	}
</script>

<style lang="less">
.user-settng-list {
	margin-bottom: 30upx;
}

.logout-btn {
	margin: 0 30upx !important;
	background-color: #FAE111 !important;
	border: 1upx solid #D2C02A !important;
}
</style>
