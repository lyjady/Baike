<template>
	<view class="change-user-container">
		<view class="change-list">
			<view class="change-item u-f-ac">
				<view class="item-left">
					<view class="u-f-ajc">头像</view>
				</view>
				<view class="item-center u-f-ac">
					<view class="item-center-content">
						<view></view>
						<image :src="avatar" lazy-load></image>
					</view>
				</view>
				<view class="item-right u-f-ajc" @tap="changeAvatar">
					<view class="icon iconfont icon-bianji1">
						
					</view>
				</view>
			</view>
			<view class="change-item u-f-ac">
				<view class="item-left">
					<view class="u-f-ajc">昵称</view>
				</view>
				<view class="item-center u-f-ac">
					<view class="item-center-content">
						<view></view>
						<input class="uni-input" type="text" v-model="nickname"/>
					</view>
				</view>
				<view class="item-right u-f-ajc">
					<view class="icon iconfont icon-bianji1">
						
					</view>
				</view>
			</view>
			<view class="change-item u-f-ac">
				<view class="item-left">
					<view class="u-f-ajc">性别</view>
				</view>
				<view class="item-center u-f-ac">
					<view class="item-center-content">
						<view></view>
						<text>{{ gender }}</text>
					</view>
				</view>
				<view class="item-right u-f-ajc" @tap="change('sex', ['男', '女', '不限'])">
					<view class="icon iconfont icon-bianji1">
						
					</view>
				</view>
			</view>
			<view class="change-item u-f-ac">
				<view class="item-left">
					<view class="u-f-ajc">生日</view>
				</view>
				<view class="item-center u-f-ac">
					<view class="item-center-content">
						<view></view>
						<view>
							<picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindDateChange">
							    <view>{{ birthday }}</view>
							</picker>
						</view>
					</view>
				</view>
				<view class="item-right u-f-ajc">
					<view class="icon iconfont icon-bianji1">
						
					</view>
				</view>
			</view>
			<view class="change-item u-f-ac">
				<view class="item-left">
					<view class="u-f-ajc">情感</view>
				</view>
				<view class="item-center u-f-ac">
					<view class="item-center-content">
						<view></view>
						<text>{{ qg }}</text>
					</view>
				</view>
				<view class="item-right u-f-ajc">
					<view class="icon iconfont icon-bianji1" @tap="change('qg', ['未婚', '已婚'])">
						
					</view>
				</view>
			</view>
			<view class="change-item u-f-ac">
				<view class="item-left">
					<view class="u-f-ajc">职业</view>
				</view>
				<view class="item-center u-f-ac">
					<view class="item-center-content">
						<view></view>
						<input class="uni-input" type="text" v-model="job"/>
					</view>
				</view>
				<view class="item-right u-f-ajc">
					<view class="icon iconfont icon-bianji1">
						
					</view>
				</view>
			</view>
			<view class="change-item u-f-ac">
				<view class="item-left">
					<view class="u-f-ajc">家乡</view>
				</view>
				<view class="item-center u-f-ac">
					<view class="item-center-content">
						<view></view>
						<text @tap="showMulLinkageThreePicker">{{ motherhome }}</text>
					</view>
				</view>
				<view class="item-right u-f-ajc">
					<view class="icon iconfont icon-bianji1">
						
					</view>
				</view>
			</view>
		</view>
		<button class="success-btn">完成</button>
		<mpvue-city-picker themeColor="#007AFF" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				nickname: '楚青',
				gender: '男',
				birthday: '1997-06-10',
				qg: '未婚',
				job: 'IT',
				motherhome: '福建福州',
				cityPickerValueDefault: [0, 1, 1],
				avatar: '../../static/demo/datapic/21.jpg'
			};
		},
		methods: {
			changeAvatar() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed '],
					success: (res => {
						this.avatar = res.tempFilePaths[0]
					})
				})
			},
			showMulLinkageThreePicker() {
				this.$refs.mpvueCityPicker.show();
			},
			onConfirm(e) {
				let arr = e.label.split('-');
				this.motherhome = arr[0].substring(0, arr[0].length - 1) + arr[1].substring(0, arr[1].length - 2);
			},
			getDate(type) {
			    const date = new Date();
			    let year = date.getFullYear();
			    let month = date.getMonth() + 1;
			    let day = date.getDate();
			    if (type === 'start') {
			        year = year - 60;
			    } else if (type === 'end') {
			        year = year + 2;
			    }
			    month = month > 9 ? month : '0' + month;;
			    day = day > 9 ? day : '0' + day;
			    return `${year}-${month}-${day}`;
			},
			bindDateChange(e) {
				this.birthday = e.detail.value
			},
			change(changeTpye, editOpt) {
				switch(changeTpye) {
					case 'sex': 
						uni.showActionSheet({
							itemList: editOpt,
							success: (res => {
								this.gender = editOpt[res.tapIndex]
							})
						})
						break;
					case 'qg': 
						uni.showActionSheet({
							itemList: editOpt,
							success: (res => {
								this.qg = editOpt[res.tapIndex]
							})
						})
						break;
					default: 
						break;
				}
			}
		},
		computed: {
			startDate() {
			    return this.getDate('start');
			},
			endDate() {
			    return this.getDate('end');
			}
		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
	}
</script>

<style lang="less" scoped>
	.change-user-container {
		padding: 0 30upx;
	}
	.change-item {
		border-bottom: 1upx solid #EEEEEE;
		padding-bottom: 40upx;
		margin-bottom: 20upx;
	}
	
	.item-left {
		width: 20%;
		view {
			font-size: 32upx;
			font-weight: bold;
			color: #9B9B9B;
		}
	}
	
	.item-center {
		width: 70%;
	}
	
	.item-right {
		view {
			color: #9B9B9B;
		}
	}
	
	.item-center {
		image {
			height: 100upx;
			width: 100upx;
			border-radius: 100%;
		}
		
		input {
			text-align: right;
			font-size: 32upx;
			padding-right: 0upx;
		}
		
		text {
			font-size: 32upx;
		}
	}
	
	.item-center-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 95%;
	}
	
	.success-btn {
		margin-top: 40upx;
		background-color: #FAE111;
		border: 1upx solid #D2C02A
	}
</style>
