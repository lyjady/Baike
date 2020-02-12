<template>
	<view>
		<block v-for="(problem, index) in problems" :key="index">
			<uni-collapse>
			    <uni-collapse-item :title="problem.problem">
			        <view class="feedback-answer">{{ problem.answer }}</view>
			    </uni-collapse-item>
			</uni-collapse>
		</block>
		<button class="feedback-btn">意见反馈</button>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue';
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue';
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				problems: [
					{
						problem: '客服什么时候上线',
						answer: '上个屁, 要钱要命???'
					},
					{
						problem: '忘记账号/昵称/密码怎么办',
						answer: '忘了不会再注册一个吗???'
					},
					{
						problem: '怎么搜索/查找、关注/取关用户',
						answer: '自己Google'
					}
				]
			};
		}
	}
</script>

<style lang="less">
.feedback-answer {
	background-color: #FFFFFF;
	padding: 24upx;
}

.feedback-btn {
	margin: 30upx;
	background-color: #FFE933;
}
</style>
