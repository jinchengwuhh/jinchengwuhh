<template>
	<view class="my">
		<view class="top">
			<view class="pic">
				<image style="width: 150rpx; height:150rpx; border-radius:50%;" :src="avatarUrl" mode=""></image>
				<view class="">
					<p style="font-size: 30rpx;">用户名：{{ username }}</p>
				</view>
			</view>
		</view>
		<!-- 我的预约 -->
		<view class="mytab">
			<view class="leftcont">
				<image src="../../static/my/myappoint.png" mode=""></image>
				<text>我的预约</text>
			</view>
			<view class="rit">
				<image src="../../static/my/next.png" mode=""></image>
			</view>
		</view>
		<!-- 用户信息 -->
		<view class="mytab">
			<view class="leftcont">
				<image src="../../static/my/mymsg.png" mode=""></image>
				<text>用户信息</text>
			</view>
			<view class="rit">
				<image src="../../static/my/next.png" mode=""></image>
			</view>
		</view>
		<!-- 退出登录 -->
		<view class="mytab" @click="exitLogin">
			<view class="leftcont">
				<image src="../../static/my/exit.png" mode=""></image>
				<text>退出登录</text>
			</view>
			<view class="rit">
				<image src="../../static/my/next.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex';//封装在index.js中的退出登录方法，还没用到
	export default {
		data() {
			return {
				username: "",
				sex: '',
				avatarUrl: "",
				Info: {},
				
			}
		},
		created() {
			
		},
		onLoad() {
			this.getStorage()
		},
		methods: {
			...mapMutations(['logout']),
			getStorage(){
								uni.getStorage({
								    key: 'pagePara',
								    success: (res) =>{
								        this.Info = res.data
										this.username = this.Info.nickName
										this.sex = this.Info.gender
										this.avatarUrl = this.Info.avatarUrl  //头像
								    }
								    });
							},
							/* 退出登录 */
							exitLogin(){
								
							            uni.removeStorageSync('token');
							            uni.removeStorageSync('user');
							            uni.reLaunch({
							                url:"/pages/login/login"
							            })
							        },
		}
	}
</script>

<style>
	page{
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}
	.top{
		height: 200rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #007AFF80;
	}
	.pic{
		padding-left: 30rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.mytab{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100rpx;
		background-color: #FFFFFF;
		margin-top: 10rpx;
	}
	.mytab .leftcont {
		padding-left: 30rpx;
	}
	.mytab .leftcont image{
		vertical-align: middle;
	}
	.mytab text {
		padding-left: 10rpx;
		font-size: 34rpx;
		vertical-align: middle;
	}
	.mytab image {
		width: 50rpx;
		height: 50rpx;
	}
</style>
