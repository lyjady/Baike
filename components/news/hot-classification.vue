<template>
	<view class="hot-classification">
		<view class="hot-classification-head u-f u-f-jsb">
			<view class="head-left">
				热门分类
			</view>
			<view class="head-right u-f" @tap="jumpPage">
				更多
				<view class="icon iconfont icon iconfont icon-jinru">
					
				</view>
			</view>
		</view>
		<view class="hot-classification-content u-f u-f-jsb">
			<block v-for="(tag, index) in hotClassificationTag" :key="tag.id">
				<view class="content-tag u-f-ajc">
					{{ tag.name }}
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'hotClassificationTag'
		],
		methods: {
			jumpPage() {
				this.$emit('jumpTopicNav');
			}
		}
	}
</script>

<style scoped>
	
	.hot-classification {
		border-top: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
		padding: 20upx 15upx 20upx 15upx;
	}
	
	.hot-classification-head, .hot-classification-content {
		margin-bottom: 20upx;
	}
	
	.head-right {
		color: #D6D6D6;
	}
	
	.content-tag {
		background-color: #F7F7F7;
		border-radius: 10upx;
		width: 110upx;
		height: 70upx;
		color: #A2A2A2;
		margin-left: 10upx;
		margin-right: 10upx;
	}
</style>
