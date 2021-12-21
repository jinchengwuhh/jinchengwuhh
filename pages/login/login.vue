<template>
	<view class="content">
		<view class="title">
			<p>登录</p>
		</view>
		<view class="">
			<view class="idstyle">
				<p>账号</p>
				<input type="text" value="" v-model="items.id" class="username" />
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
					id: '',
					password: '',
				},
			}
		},
		methods: {
			...mapMutations(['login']),
			submit(items) {
				this.id = items.id,
				this.password = items.password
				if(this.id != '' && this.password != ''){
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
							provider: 'weixin',
							success: (infoRes) => {
									this.nickName = infoRes.userInfo.nickName
										this.gender = infoRes.userInfo.gender
										this.avatarUrl =  infoRes.userInfo.avatarUrl
										console.log("==========",this.nickName)
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

<style scoped>
.title{
        font-weight: bold;
        margin: 10rpx 0 40rpx 0;
        font-size: 44rpx;
        color: black;
    }
    .username{
        height: 80rpx;
		margin: 20rpx auto;
        /* margin:10rpx 0 40rpx 0; */
        width: 450rpx;
        border-radius: 10rpx;
        border: #007aff 2rpx solid;
        background-color: rgba(200, 199, 204, 0.36);
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
		margin: 20rpx 10rpx;
		line-height: 2;
	}
    .login{
        width: 400rpx;
        margin-top: 150rpx;
        color: black;
    }
</style>
