<template>
	<view>
		<view class="paper-list">
			<block  v-for="(paper, index) in paperList" :key="index">
				<paper-list :paper="paper"></paper-list>
			</block>
		</view>
	</view>
</template>

<script>
	import paperList from '../../components/paper/paper-list.vue';
	export default {
		components: {
			paperList
		},
		data() {
			return {
				paperList: [
					{
						username: '习近平',
						avatar: '/static/demo/datapic/20.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '李克强',
						avatar: '/static/demo/datapic/21.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '王岐山',
						avatar: '/static/demo/datapic/22.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '胡锦涛',
						avatar: '/static/demo/datapic/23.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '江泽民',
						avatar: '/static/demo/datapic/24.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					},
					{
						username: '邓小平',
						avatar: '/static/demo/datapic/25.jpg',
						sendTime: '13:58',
						content: '大佬, 中国民族的伟大复兴就靠你了',
						unread: 1
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
.paper-list {
	padding: 20upx;
}


</style>
