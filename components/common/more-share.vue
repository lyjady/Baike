<template>
	<view>
		<view class="share-model" v-show="enableShare" @tap="toggle(false)"></view>
		<view class="share-container animated fadeInUp fast" v-show="enableShare">
			<view class="share-header">分享到</view>
			<scroll-view scroll-x class="share-content">
				<view class="share-list">
					<block v-for="(provider, index) in providerList" :key="index">
						<view class="share-item" hover-class="share-hover" @tap="share(provider, index)">
							<view class="icon iconfont" :class="[provider.sIcon, provider.sClass]"></view>
							<view>{{ provider.name }}</view>
						</view>
					</block>
				</view>
			</scroll-view>
			<view class="share-bottom" @tap="toggle(false)">取消</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'enableShare'
		],
		data() {
			return {
				shareText: 'uni-app可以同时发布成原生App、小程序、H5，邀请你一起体验！',
				href:"https://uniapp.dcloud.io",
				image: '',
				// 1: 文字, 2: 图片, 0: 图文, 5: 小程序
				shareType:1,
				providerList: [
					{
						id: 'weixin',
						name: '微信好友',
						sIcon: 'icon-weixin',
						sClass: 'weixin',
					},
					{
						id: 'weixin',
						name: '朋友圈',
						sIcon: 'icon-weixin',
						sClass: 'pengyouquan',
					},
					{
						id: 'sinaweibo',
						name: '新浪微博',
						sIcon: 'icon-xinlangweibo',
						sClass: 'weibo',
					},
					{
						id: 'qq',
						name: 'QQ好友',
						sIcon: 'icon-QQ',
						sClass: 'qq',
					}
				]
			}
		},
		methods: {
			toggle(isEnable) {
				this.$emit('toggle', isEnable);
			},
			share(provider, index) {
				if (provider.id === 'weixin' && index === 0) {
					uni.share({
						provider: provider.id,
						title: 'uni-app分享测试(title)',
						scene: 'WXSceneSession',
						type: 0,
						href: 'http://uniapp.dcloud.io/',
						summary: "uni-app分享测试(summary)",
						imageUrl: "http://uc.bisicdn.xyz/uc_server/images/noavatar_middle.gif",
						success: (res => {
							console.log(JSON.stringify(res))
						})
					})
				} else if (provider.id === 'weixin' && index === 1) {
					uni.share({
						provider: provider.id,
						title: 'uni-app分享测试(title)',
						scene: 'WXSenceTimeline',
						type: 0,
						href: 'http://uniapp.dcloud.io/',
						summary: "uni-app分享测试(summary)",
						imageUrl: "http://uc.bisicdn.xyz/uc_server/images/noavatar_middle.gif",
						success: (res => {
							console.log(JSON.stringify(res))
						})
					})
				} else if (provider.id === 'sinaweibo') {
					uni.share({
						provider: provider.id,
						title: 'uni-app分享测试(title)',
						type: 0,
						href: 'http://uniapp.dcloud.io/',
						summary: "uni-app分享测试(summary)",
						imageUrl: "http://uc.bisicdn.xyz/uc_server/images/noavatar_middle.gif",
						success: (res => {
							console.log(JSON.stringify(res))
						})
					})
				} else  if (provider.id === 'qq') {
					uni.share({
						provider: provider.id,
						title: 'uni-app分享测试(title)',
						type: 0,
						href: 'http://uniapp.dcloud.io/',
						summary: "uni-app分享测试(summary)",
						imageUrl: "http://uc.bisicdn.xyz/uc_server/images/noavatar_middle.gif",
						success: (res => {
							console.log(JSON.stringify(res))
						})
					})
				}
			}
		}
	}
</script>

<style scoped>
	.share-container {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: #FFFFFF;
		z-index: 101;
	}
	
	.share-header {
		text-align: center;
		padding: 20upx 0;
		font-size: 40upx;
	}
	
	.share-list {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #EEEEEE;
		padding-bottom: 20upx;
	}
	
	.share-item {
		width: 25%;
		text-align: center;
		margin: auto;
	}
	
	.share-bottom {
		text-align: center;
		font-size: 40upx;
		padding: 20upx 0;
	}
	
	.weixin, .pengyouquan, .weibo, .qq {
		font-size: 60upx;
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		color: #FFFFFF;
		margin: 0 auto;
		margin-top: 10upx;
	}
	
	.pengyouquan {
		background-color: #2AD19B;
	}
	
	.weixin {
		background-color: #514D4C;
	}
	
	.weibo {
		background-color: #EE5E5E;
	}
	
	.qq {
		background-color: #5280CE;
	}
	
	.share-hover {
		background-color: #EEEEEE;
	}
	
	.share-model {
		background:rgba(51, 51, 51, 0.49);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
	}
</style>
