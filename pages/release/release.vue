<template>
	<view class="release-container">
		<uni-nav-bar :statusBar="true" leftIcon="back" leftText="返回" rightText="发布" @clickLeft="back" @clickRight="release">
			<view class="u-f-ajc permission" @tap="changeLook">
				{{ visible }}
				<view class="icon iconfont icon-xialazhankai"></view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea"><textarea v-model="content" class="textarea-content" placeholder="请输入内容" maxlength="300" @updateImage="updateImage"></textarea></view>
		<upload-image :imageList="imageList" @updateImage="updateImage"></upload-image>
		<uni-popup ref="showRules" type="center">
			<view class="release-rules" >
				<image src="../../static/common/addinput.png" mode="widthFix"></image>
				<text>1.涉及黄色, 政治人生攻击, 广告以及骚扰信息\n</text>
				<text>2.涉及人生攻击\n</text>
				<text>3.留联系方式, 涉及他人隐私\n</text>
				<text>一经核实情节严重将被封禁, 情节严重者永久封禁</text>
				<button type="primary" @tap="closePopup">朕知道了</button>
			</view>
		</uni-popup>
	</view>
</template>

<script>
import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
import uploadImage from '../../components/common/upload-image.vue';
import uniPopup from '../../components/uni-popup/uni-popup.vue';
export default {
	data() {
		return {
			visibles: ['所有人可见', '尽自己可见'],
			visible: '所有人可见',
			content: '',
			imageList: [],
			showPopup: true,
			isFirstBack: true
		};
	},
	components: {
		uniNavBar,
		uploadImage,
		uniPopup
	},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		release() {
			console.log('发布');
		},
		changeLook() {
			uni.showActionSheet({
				itemList: this.visibles,
				success: res => {
					this.visible = this.visibles[res.tapIndex];
				}
			});
		},
		lookup() {
			console.log(this.imageList.length);
		},
		updateImage(sonImageList) {
			this.imageList = sonImageList;
		},
		open() {
			this.$refs.showRules.open();
		},
		closePopup() {
			this.$refs.showRules.close();
		}
	},
	onReady() {
		this.$refs.showRules.open();
	},
	onBackPress() {
		if (this.isFirstBack) {
			if (this.content.length > 0 || this.imageList.length > 0) {
				uni.showModal({
					content: '是否要保存草稿',
					confirmText: '保存',
					cancelText: '不保存',
					success: res => {
						if (res.confirm) {
							console.log('保存草稿');
						} else {
							console.log('不保存草稿');
						}
						this.isFirstBack = false;
						uni.navigateBack({
							delta: 1
						});
					}
				});
				return true;
			}
		}
	}
};
</script>

<style lang="less" scoped>
.permission {
	margin: auto;
}

.textarea-content {
	border: 1px solid #eeeeee;
	overflow-x: hidden;
	height: 200upx;
}

.release-rules {
	background-color: #FFFFFF;
	padding: 20upx;
	border-radius: 10px;
	image {
		margin: auto;
		display: block;
		width: 70%;
	}
	
	text {
		margin-bottom: 5px;
		display: block;
	}
	
	button {
		display: block;
		margin-top: 5px;
		background-color: #FFE934;
	}
}
</style>
