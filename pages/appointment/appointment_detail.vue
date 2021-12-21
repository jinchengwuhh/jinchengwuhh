<template>
	<view>
		<view class="appointTime">
			<text>预定时间</text>
			<view class="choosetime">
				<u-datetime-picker :show="show" closeOnClickOverlay @cancel="cancel" @change="change" @close="close"
					@confirm="confirm" v-model="value1" mode="datetime"></u-datetime-picker>
				<u-button @click="show = true">打开</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				show: false,
				value1: Number(new Date()),
				startTime: '',
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
				this.result(e.value, e.mode)
				console.log("time",this.startTime)
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
		}
	}
</script>

<style>

</style>
