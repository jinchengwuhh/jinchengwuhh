<template>
	<view>
		<view class="info" style="background-color: #f2f2f2; color: #000000;">
			<view class="infomsg">预订实验室：</view>
			<view class="infothing">实验室名称</view>
		</view>
		<view class="info">
			<view class="infomsg">预定时间：</view>
			<view class="infothing">开始至结束</view>
		</view>
		<view class="info">
			<view class="infomsg">联系电话：</view>
			<view class="infothing">联系电话</view>
		</view>
		<view class="info">
			<view class="infomsg">备注：</view>
			<view class="infothing">备注内容</view>
		</view>
		<view class="info" style="color: #E45656;">
			<view class="infomsg">审核状态：</view>
			<view class="infothing">审核状态</view>
			<view class="cancelbtn">取消预约</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.info {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		color: #9c9c9c;
		font-size: 34rpx;
	}
	.infomsg {
		padding: 30rpx 20rpx;
	}
	.infothing {
		padding: 30rpx 0;
	}
	.cancelbtn {
		padding-top: 30rpx;
		padding-left: 260rpx;
	}
</style>
