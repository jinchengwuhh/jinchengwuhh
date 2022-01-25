<template>
	<view class="form">
		<view class="choosetime">
			<view class="formmsg">
				预约实验室：
			</view>
			<view class="formtime">
				{{ selected }}
			</view>
<!-- 			<view class="formtime">
				<u-picker @cancel="unshow" @close="close3" :show="flag" ref="uPicker" :columns="columns" @confirm="confirmLab" @change="changeHandler"
					closeOnClickOverlay	:loading="loading"></u-picker>
				<input type="text" value="" @click="flag = true" v-model="labName" placeholder="请选择预约的实验室"></input>
			</view> -->
		</view>
		<view class="choosetime">
			<view class="formmsg">
				<text>开始时间：</text>
			</view>
			<view class="formtime">
				<u-datetime-picker :show="show" closeOnClickOverlay @cancel="cancel" @change="change" @close="close"
					@confirm="confirm" v-model="value1" mode="datetime"></u-datetime-picker>
				<input type="text" placeholder="请选择开始时间" v-model="startTime" @click="show = true"></input>
			</view>
		</view>
		<view class="choosetime">
			<view class="formmsg">
				<text>结束时间：</text>
			</view>
			<view class="formtime">
				<u-datetime-picker :show="show2" closeOnClickOverlay @cancel="cancel2" @close="close2"
					@confirm="confirm2" v-model="value2" mode="datetime"></u-datetime-picker>
				<input type="text" placeholder="请选择结束时间" v-model="endTime" @click="show2 = true"></input>
			</view>
		</view>
		<view class="choosetime">
			<view class="formmsg">
				<text>预约用途：</text>
			</view>
			<view class="formtime">
				<input type="text" placeholder="请输入预约用途" v-model="usage"></input>
			</view>
		</view>
		<view class="choosetime">
			<view class="formmsg">
				<text>联系电话：</text>
			</view>
			<view class="formtime">
				<input type="number" placeholder="请输入联系电话" v-model="mobile"></input>
			</view>
		</view>
		<view class="choosetime">
			<view class="formmsg">
				<text>备注说明：</text>
			</view>
			<view class="formtime">
				<textarea value="" v-model="other" placeholder="请输入备注" border="bottom" autoHeight />
			</view>
		</view>
		<button type="primary" size="normal" style="width: 80%; margin-top: 30rpx;" @click="submit">提交预约</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selected: '',
				current: 0,
				show: false,
				show2: false,
				value1: Number(new Date()),
				value2: Number(new Date()),
				startTime: '',
				endTime: '',
				labName: '',
				flag: false,
				loading: false,
				usage: '',
				mobile: '',
				other: '',
				columns: [
					['学院楼', '逸夫楼'],
					['201', '202', '203', '204']
				],
				columnData: [
					['201', '202', '203', '204'],
					['601', '602', '603', '604']
				]
			}
		},
		onLoad() {
			this.getStorage()
		},
		methods: {
			// 读取上一页面存储的数据
			getStorage() {
				uni.getStorage({
					key: 'listVal',
					success: (res) => {
						this.selected = res.data.selected.lab_name
						console.log("选择的实验室名称",this.selected )
					}
				})
			},
			close() {
				this.show = false
			},
			cancel() {
				this.show = false
			},
			confirm(e) {
				this.show = false
				this.result(e.value, e.mode)
			},
			change(e) {
				console.log('change', e)
			},
			result(time, mode) {
				const timeFormat = uni.$u.timeFormat,
					toast = uni.$u.toast
				switch (mode) {
					case 'datetime':
						// return toast(timeFormat(time, 'yyyy-mm-dd hh:MM'))
						return this.startTime = timeFormat(time, 'yyyy-mm-dd hh:MM')
						/* 					case 'date':
												return toast(timeFormat(time, 'yyyy-mm-dd'))
											case 'year-month':
												return toast(timeFormat(time, 'yyyy-mm'))
											case 'time':
												return toast(time) */
					default:
						return ''
				}

			},
			/* 截止时间 */
			close2() {
				this.show2 = false
			},
			cancel2() {
				this.show2 = false
			},
			confirm2(e) {
				this.show2 = false
				this.result2(e.value, e.mode)
			},
			change2(e) {
				console.log('change', e)
			},
			result2(time, mode) {
				const timeFormat2 = uni.$u.timeFormat,
					toast = uni.$u.toast3
				switch (mode) {
					case 'datetime':
						// return toast(timeFormat(time, 'yyyy-mm-dd hh:MM'))
						return this.endTime = timeFormat2(time, 'yyyy-mm-dd hh:MM')
						/* 					case 'date':
												return toast(timeFormat(time, 'yyyy-mm-dd'))
											case 'year-month':
												return toast(timeFormat(time, 'yyyy-mm'))
											case 'time':
												return toast(time) */
					default:
						return ''
				}
			},
			
			/* 下拉选择实验室 */
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
			unshow() {
				this.flag = false
			},
			close3() {
				this.flag = false
			},
			// 回调参数为包含columnIndex、value、values
			confirmLab(e) {
				this.labName = e.value[0] + e.value[1]
				this.flag = false
			},
			/* 提交预约 */
			submit() {
				if(this.endTime == '' || this.startTime == '' || this.labName == '' || this.usage == '' || this.mobile == '' || this.other ==''){
					uni.showToast({
						title:'*号处不能为空',
						icon: 'error'
					})
				}else if(this.endTime <= this.startTime){
					uni.showToast({
						title: '结束时间不能小于开始时间',
						icon: 'none'
					})
				}else{
					uni.navigateTo({
						url: './myappointment'
					})
				}
			}
		}
	}
</script>

<style>
	.choosetime {
		display: flex;
		flex-direction: row;
		background-color: #FFFFFF;
		border-bottom: 1px solid #f2f2f2;
	}

	.formmsg {
		padding: 30rpx 20rpx;
	}
	.formmsg::before{
		content: '*';
		color: #DD524D;
	}
	.formtime {
		padding: 30rpx 0;
	}

	.loading {
		margin-top: 80%;
	}
	textarea {
		width: 422rpx;
	}
</style>
