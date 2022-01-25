<template>
	<view>
		<view class="infomation">
			<view class="formmsg">
				姓名：
			</view>
			<view class="forminfo">
				<input type="text" v-model="name" placeholder="请输入姓名"></input>
			</view>
		</view>
		<view class="infomation">
			<view class="formmsg">
				学号/工号：
			</view>
			<view class="forminfo">
				<input type="text" v-model="id" placeholder="请输入学号/工号"></input>
			</view>
		</view>
<!-- 		<view class="infomation">
			<view class="formmsg">
				学院：
			</view>
			<view class="forminfo">
				<u-picker :show="show" :columns="columns" @change="change" @cancel="cancel" @confirm="confirm">
				</u-picker>
				<input type="text" v-model="academy" closeOnClickOverlay placeholder="请选择学院" @click="show = true"></input>
			</view>
		</view> -->
		<view class="infomation">
			<view class="formmsg">
				学院及专业：
			</view>
			<view class="forminfo">
				<u-picker @cancel="cancel" @close="close" :show="show" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler"
					closeOnClickOverlay	:loading="loading"></u-picker>
				<input type="text" v-model="major" placeholder="请选择专业及班级" @click="show = true"></input>
			</view>
		</view>
		<view class="infomation">
			<view class="formmsg">
				班级：
			</view>
			<view class="forminfo">
				<input type="text" v-model="clazz" placeholder="请输入班级" @click="show = true"></input>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				id: '',
				clazz: '',
				show: false,
				academy: '',
				loading: '',
				columns: [
					['管理学院', '文学院', '国际教育学院', '法学院', '理学院', '人工智能学院', '艺术学院'],
					['财务管理', '行政管理', '市场影响', '人力资源管理']
				],
				columnData: [
					['财务管理', '行政管理', '市场影响', '人力资源管理'],
					['601', '602', '603', '604'],
					['财务管理', '行政管理', '市场影响', '人力资源管理'],
					['财务管理', '行政管理', '市场影响', '人力资源管理'],
					['财务管理', '行政管理', '市场影响', '人力资源管理'],
					['财务管理', '行政管理', '市场影响', '人力资源管理'],
					['财务管理', '行政管理', '市场影响', '人力资源管理'],
				]
			}
		},
		methods: {
			close() {
				this.show = false
			},
			cancel() {
				this.show = false
			},
			confirm(e) {
				this.show = false
				this.academy = e.value
				// console.log("学院",this.academy)
			},
			change(e) {
				// console.log('change', e)
			},
			changeHandler(e) {
				const {
					columnIndex,
					value,
					values, // values为当前变化列的数组内容
					index,
					// 微信小程序无法将picker实例传出来，只能通过ref操作
					picker = this.$refs.uPicker
				} = e
				// 当第一列值发生变化时，变化第二列(后一列)对应的选项
				if (columnIndex === 0) {
					this.loading = true
					uni.$u.sleep(500).then(() => {
						// picker为选择器this实例，变化第二列对应的选项
						picker.setColumnValues(1, this.columnData[index])
						this.loading = false
					})
				}
			},
		}
	}
</script>

<style>
	.infomation {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		border-bottom: 1px solid #f2f2f2;
	}

	.formmsg {
		padding: 30rpx 20rpx;
	}

	.formmsg::before {
		content: '*';
		color: #DD524D;
	}

	.forminfo {
		padding: 30rpx 0;
	}
</style>
