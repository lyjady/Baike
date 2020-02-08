<template>
	<view class="amount">
		<view class="number">
			{{ data.number }}
		</view>
		<view class="data-type">
			{{ data.name }}
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			'data'
		]
	}
</script>

<style scoped> 
.amount {
	width: 25%;
	text-align: center;
}

.number, .data-type{
	font-size: 32upx;
}

.number {
	font-weight: 500;
}

.data-type {
	color: #989898;
}
</style>
