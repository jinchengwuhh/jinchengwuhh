<script>
    import Vue from 'vue';
    export default Vue.extend({
        mpType: 'app',
        onLaunch() {
            console.log('App Launch')
        },
        onShow() {
            console.log('App Show')
        },
        onHide() {
            console.log('App Hide')
        }
    });
</script>

<style lang="scss">
    /*每个页面公共css */
	 /* 引入 uview 基础样式 */
	@import "uview-ui/index.scss";
	page{
		width: 100%;
		height: 100%;
		background-color: #f2f2f2;
	}
</style>
