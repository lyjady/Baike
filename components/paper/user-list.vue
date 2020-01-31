<template>
	<view class="user-item u-f-ac u-f-jsb animated fadeIn fast">
		<view class="user-avatar"><image :src="user.avatar" lazy-load></image></view>
		<view class="user-item-right u-f-ac u-f-jsb">
			<view class="user-item-info">
				<view class="username">{{ user.username }}</view>
				<view class="user-sex">
					<view class="icon iconfont tag-sex" :class="[user.sex === 1 ? 'man icon-nan' : 'woman icon-nv']">{{ user.age }}</view>
				</view>
			</view>
			<view class="item-option">
				<view v-if="user.isAttention" class="icon iconfont icon-xuanze-yixuan"></view>
				<view v-else class="icon iconfont icon-zengjia1 attation"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'user',
			'index'
		]
	}
</script>

<style lang="less" scoped>
	
	.user-item {
		border-bottom: 1px solid #eeeeee;
		padding-bottom: 20upx;
		margin-bottom: 20upx;
	
		.user-avatar {
			width: 20%;
		}
	
		image {
			height: 100upx;
			width: 100upx;
			border-radius: 100%;
		}
	}
	
	.user-item-right {
		width: 80%;
	}
	
	.user-sex {
		align-items: center;
		width: 80upx;
	}
	
	.tag-sex {
		border-radius: 15px;
		color: #ffffff;
		font-size: 14px;
		padding: 0 8px 0 8px;
		line-height: 18px;
	}
	
	.man {
		background-color: #44b3ff;
	}
	
	.woman {
		background-color: #ff698d;
	}
	
	.username {
		margin-bottom: 10upx;
	}
	
	.item-option {
		color: #cccccc;
	}
	
	.attation {
		color: #f8791b;
	}
</style>
