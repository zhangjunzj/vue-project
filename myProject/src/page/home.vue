<style lang="scss" scoped>
	@import '../style/main.scss';
	.content {
		font-size: px2rem(20px);
	}
	.top {
		width: px2rem(200px);
		.now {
			height: px2rem(200px);
			line-height: px2rem(200px);
			font-size: px2rem(200px);
		}
	}
</style>

<template>
	<div class="content">
		<div class="top">
			<div class="now">22</div>
		</div>
		
		<div>{{weatherData}}</div>
		<button @click='hello'>button</button>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	export default {
		data () {
			return {
				weatherData : null
			}
		},
		computed: {

		},
		methods: {
			...mapActions ([
				'queryForecastData'
			]),
			hello () {
				this.$router.push('/')
			}
		},
		created() {
			console.log('we are in home')
			this.queryForecastData().then((resp) => {
				this.weatherData = resp
			}, (err) => {
				console.log(err)
			})
		}


	}
</script>