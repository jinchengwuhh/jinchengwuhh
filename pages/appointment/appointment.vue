<template>
	<view>
		<view class="searchlab">
			<u-search @confirm="search" shape="round" @input="input" bg-color="#FFFFFF"></u-search>
		</view>
		<!-- 实验室列表 -->
		<view class="lab" v-for="(item,i) in list">
			<view class="labname">
				<text>{{ item }}</text>
			</view>
			<view class="appbtn">
				<button type="primary" size="mini" @tap="jump">预约</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					"逸夫楼601",
					"逸夫楼602",
					"逸夫楼603",
					"逸夫楼604",
					"逸夫楼605",
					"逸夫楼606",
				]
			}
		},
		methods: {
			jump() {
				uni.navigateTo({
					url: './appointment_detail'
				})
			}
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}
	.lab {
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;
		margin-top: 5rpx;
	}
	.labname {
		padding-left: 20rpx;
	}
	.lab .appbtn {
		padding-right: 20rpx;
	}
	.lab .appbtn button{
		border: none;
	}
	.searchlab {
	}
</style>
