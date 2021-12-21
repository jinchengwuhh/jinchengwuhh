<template>
	<view class="content">
		<!-- 图片 -->
		<view class="labpic">
			<image style="height: 280rpx; overflow: hidden;" src="../../static/index/yifulou.jpg" mode=""></image>
		</view>
		<!-- 消息 -->
		<view class="msg">
			<view class="msgicon">
				<image style="width: 40rpx; height:40rpx; vertical-align: middle;" src="../../static/index/msgicon.png" mode=""></image>
			</view>
			<view class="msgtxt">
				<text>{{ title }}</text>
			</view>
		</view>
		<!-- 预约 -->
		<view class="div1">
			<view class="appointmentlab">
				<view class="iconappoint">
					<image src="../../static/index/index_appointment.png" mode=""></image>
				</view>
				<view class="textstyle">
					<text>预约实验室</text>
				</view>
			</view>
			<view class="appointmentlab">
				<view class="iconappoint">
					<image src="../../static/index/appointed.png" mode=""></image>
				</view>
				<view class="textstyle">
					<text>我的预约</text>
				</view>
			</view>
		</view>
		<!-- 预约情况、签到 -->
		<view class="div1">
			<view class="appointmentlab">
				<view class="iconappoint">
					<image src="../../static/index/situation.png" mode=""></image>
				</view>
				<view class="textstyle">
					<text>预约情况</text>
				</view>
			</view>
			<view class="appointmentlab">
				<view class="iconappoint">
					<image src="../../static/index/sign.png" mode=""></image>
				</view>
				<view class="textstyle">
					<text>签到</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
    export default {
        data() {
            return {
				title: "登录成功",
				username: '',
				password: ''
            }
        },
		onLoad: function (options) {
			this.username = options.id
			this.password = options.password
		},
        methods: {

        }
    }
</script>

<style>

	page{
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.msg{
		height: 80rpx;
		display: flex;
		margin: 10rpx 10rpx;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		background-color: #FFFFFF;
		border-radius: 25rpx;
	}
	.msgicon {
		padding: 0 20rpx;
	}
	.msgtxt {
		font-size: 32rpx;
		color:#555555
	}
	.labpic{
	}
	.div1{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.appointmentlab{
		width: 48%;
		height: 300rpx;
		/* line-height: 350rpx; */
		background-color: #FFFFFF;
		margin: 10rpx 10rpx;
		text-align: center;
		border-radius: 5px;
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
	}
	.appointmentlab image {
		width: 30%;
		height: 100rpx;
		margin-top: 40rpx;
	}
	.appointmentlab .textstyle{
		color:#767676 ;
		      /* 上下 左右 */
	}
</style>
