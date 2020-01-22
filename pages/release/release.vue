<template>
	<view class="release-container">
		<uni-nav-bar :statusBar="true" leftIcon="back" leftText="返回" rightText="发布" @clickLeft="back" @clickRight="release">
			<view class="u-f-ajc permission" @tap="changeLook">
				{{ visible }}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea">
			<textarea v-model="content" class="textarea-content" placeholder="请输入内容" maxlength="300"></textarea>
		</view>
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue';
export default {
	data() {
		return {
			visibles: [
				'所有人可见',
				'尽自己可见'
			],
			visible: '所有人可见',
			content: ''
		};
	},
	components: {
		uniNavBar,
		uniStatusBar
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		release() {
			console.log('发布')
		},
		changeLook() {
			uni.showActionSheet({
				itemList: this.visibles,
				success: res => {
					this.visible = this.visibles[res.tapIndex];
				}
			})
		}
	}
};
</script>

<style lang="less" scoped>
.permission {
	margin: auto;
}

.textarea-content {
	border: 1px solid #EEEEEE;
	overflow-x: hidden;
	height: 200upx;
}

</style>
