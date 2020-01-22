<template>
	<view>
		<view class="uni-list list-pd">
			<view class="uni-list-cell cell-pd">
				<view class="uni-uploader">
					<view class="uni-uploader-head">
						<view class="uni-uploader-title">点击可预览选好的图片</view>
						<view class="uni-uploader-info">{{ imageList.length }}/9</view>
					</view>
					<view class="uni-uploader-body">
						<view class="uni-uploader__files">
							<block v-for="(image, index) in imageList" :key="index">
								<view class="uni-uploader__file">
									<view class="icon iconfont icon-shanchu" @tap="removeImage(index)"></view>
									<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
								</view>
							</block>
							<template v-if="imageList.length <= 8">
								<view class="uni-uploader__input-box"><view class="uni-uploader__input" @tap="chooseImage"></view></view>
							</template>
						</view>
					</view>
				</view>
			</view>
		</view>
		<button type="primary" @tap="uploadImage">上传</button>
	</view>
</template>

<script>
export default {
	props: ['imageList'],
	data() {
		return {
			sourceTypeIndex: 2,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 2,
			sizeType: ['压缩', '原图', '压缩或原图'],
			countIndex: 8,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			sourceTypeArr: [
				['camera'],
				['album'],
				['camera', 'album']
			],
			sizeTypeArr: [
				['compressed'],
				['original'],
				['compressed', 'original']
			]
		}
	},
	methods: {
		removeImage(index) {
			uni.showModal({
				title: '提示',
				content: '是否要删除照片',
				success: res => {
					if (res.confirm) {
						this.imageList.splice(index, 1);
						this.$emit('updateImage', this.imageList);
					}
				}
			})
		},
		previewImage() {
			var current = e.target.dataset.src
			uni.previewImage({
				current: current,
				urls: this.imageList
			})
		},
		async chooseImage() {
			if (this.imageList.length === 9) {
				return;
			}
			uni.chooseImage({
				sourceType: this.sourceTypeArr[this.sourceTypeIndex],
				sizeType: this.sizeTypeArr[this.sizeTypeIndex],
				count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
				success: (res) => {
					this.imageList = this.imageList.concat(res.tempFilePaths);
					this.$emit('updateImage', this.imageList);
				},
				fail: res => {
				}
			})
		},
		uploadImage() {
			console.log(this.imageList.length)
		}
	}
};
</script>

<style scoped>
.cell-pd {
	padding: 22upx 30upx;
}

.list-pd {
	margin-top: 50upx;
}
.icon-shanchu {
	position: absolute;
	right: 0;
	top: 0;
	color: #ffffff;
	z-index: 999;
	padding: 2upx 10upx;
	border-radius: 10upx;
}

.uni-uploader__file {
	position: relative;
}
</style>
