<template>
	<view>
		<view class="searchlab">
			<u-search @confirm="search" shape="round" @input="input" bg-color="#FFFFFF"></u-search>
		</view>
		<!-- 实验室列表 -->
		<view class="lab" v-for="(item,i) in list" :key="item">
			<view class="labname">
				<text>{{ item.lab_name }}</text>
			</view>
			<view class="appbtn"  v-if="item.state == '暂用' == true">
				<button type="primary" disabled size="mini" @click = "jump(item)" >暂用</button>
			</view>
			<view class="appbtn"  v-if="item.state == '可预约' == true">
				<button type="primary" size="mini" @click = "jump(item)" >预约</button>
			</view>
			<view class="appbtn"  v-if="item.state == '维修' == true">
				<button type="primary" disabled size="mini" @click = "jump(item)" >维修</button>
			</view>
<!-- 			<view class="appbtn">
				<button type="primary" v-if="UnChoose.state == '暂用' == false" size="mini" @click = "jump(item)" >预约</button>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: {},
				labList: [],
				list: [],
				labInfo: [],
				state: '',
				/* disabled: false, */
				UnChoose: []
			}
		},
		created() {
			uni.request({
				url: `${this.$baseUrl}/lab/findAll`,
				method: 'GET',
				success: (res) => {
					this.list = res.data
					this.OnBtnChange()
				},
				fail: () => {
					console.log("加载失败")
				}
				});				
		},
		methods: {	
						
			jump(item) {
					this.labInfo = item
				uni.setStorage({
					key: 'listVal',
					data: {
						selected: this.labInfo
					}
				})
				uni.navigateTo({
					url: './appointment_detail'
				});
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
