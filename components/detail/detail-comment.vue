<template>
	<view class="uni-comment-list" :class="{'u-comment-list-child':(comment.fid > 0)}">
		<view class="uni-comment-face"><image :src="comment.userpic" mode="widthFix"></image></view>
		<view class="uni-comment-body">
			<view class="uni-comment-top"><text>{{comment.username}}</text>
			</view>
			<view class="uni-comment-content">{{comment.data}}</view>
			<view class="uni-comment-date">
				<view>{{comment.time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'comment'
		]
	}
</script>

<style lang="less" scoped>
	.u-comment-list-child{
		padding: 20upx;
		background: #F4F4F4;
		border-bottom: 1upx solid #EEEEEE;
		box-sizing: border-box;
		margin: 0;
		margin-left: 70upx;
		width: auto;
	}
</style>
