<template>
	<view class="content">
		<view class="bigbox">
			<view class="title">
				<p>登录</p>
			</view>
			<view class="">
				<view class="idstyle">
					<p>账号</p>
					<input type="text" value="" v-model="items.username" class="username" />
				</view>
				<view class="idstyle">
					<p>密码</p>
					<input type="text" value="" v-model="items.password" class="username" />
				</view>
			
			</view>
			<view class="">
				<button type="primary" class="login" @click="submit(items)">登录</button>
			</view>
			<view class="">
				<image style="width: 70rpx; height: 70rpx;" src="../../static/weixin.png"  @click.stop="getuserinfo()"></image>
				<!-- <button type="default" open-type="getUserInfo" @getuserinfo="getuserinfo()">获取用户信息</button> -->
			</view>
		</view>

	</view>
</template>

<script>
import { mapMutations } from 'vuex';
	export default {
		data() {
			return {				
					nickName: '',
					gender: '',
					avatarUrl:'',
					province:'',
					city:''		,		
				items:{
					username: '',
					password: '',
				},
			}
		},
		methods: {
			...mapMutations(['login']),
			submit(items) {
				this.username = items.username,
				this.password = items.password
				if(this.username != '' && this.password != ''){
					uni.switchTab({
						url: '../index/index?id='+this.id + '&password='+this.password//不能有多余空格
					})
					// uni.$emit('except',this.id)
				}else{
					uni.showToast({
						icon:'none',
						title:'请输入账号密码'
					})
				}

			},

		getuserinfo() {
			uni.getProvider({
				service: "oauth",
				success: (res) => {
					if(~res.provider.indexOf('weixin')){
						/* 判断是否授权成功 */
/* 						uni.login({
							provider: 'weixin',
							success: (loginRes) => {
								console.log("微信授权登录成功",loginRes))
							}
						}), */
						uni.getUserProfile({
							desc: 'Weixin',
							success: (infoRes) => {
									this.nickName = infoRes.userInfo.nickName
										this.gender = infoRes.userInfo.gender
										this.avatarUrl =  infoRes.userInfo.avatarUrl
										/* switchTab向页面传递参数 使用 setStorage存储*/
									uni.setStorage({
										key: 'pagePara',
										data: {
											nickName: this.nickName,
											gender: this.gender,
											avatarUrl: this.avatarUrl
										}
									})
									uni.switchTab({
										url:'../my/my'
									})
								
							},
							fail: (res) => {
								console.log("用户授权失败",res)
							}
						})
					}
				}
			})

		}
	},
	}
</script>

<style>

.title{
        font-weight: bold;
        margin: 10rpx 0 40rpx 0;
        font-size: 44rpx;
        color: black;
    }
	.title p{
		padding-top: 20rpx;
	}
    .username{
        height: 80rpx;
		margin: 20rpx 20rpx;
        /* margin:10rpx 0 40rpx 0; */
        width: 450rpx;
        border-radius: 10rpx;
      //  border: #ffffff 2rpx solid;
        background-color: #ffffff;
    }
    .content {		
        background-size: 100% 100%;
        padding: 50rpx;
        margin: 0 auto;
        text-align: center;
        height: 90.3vh;
    }
	.idstyle{
		display: flex;
		flex-direction: row;
	}
	.idstyle p{
		margin: 20rpx 30rpx;
		line-height: 2;
	}
    .login{
        width: 400rpx;
        margin-top: 150rpx;
        color: black;
    }
	.bigbox{
		background-color: rgba(242,242,242,0.8);
		/* background-color: rgba(162,181,205,0.4); */
		text-align: center;
		border-radius: 20rpx;
	}
</style>
