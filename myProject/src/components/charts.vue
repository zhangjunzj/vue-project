<template>
	<div>
		<div>{{msg}}</div>
		<button @click='home'>home page</button>
		<chart :options="lineOption"></chart>
		<chart :options="barOption"></chart>
		<button @click="showHistory">history</button>
		<div></div>
	</div>
</template>

<script>
	import ECharts from 'vue-echarts/components/ECharts'
	import 'echarts/lib/chart/bar'
	import 'echarts/lib/chart/line'
	import 'echarts/lib/component/tooltip'
	export default {
		data () {
			return {
				msg: 'test for chart',
				lineOption: {
					tooltip: {},
				    xAxis: {
				        type: 'category',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
				        data: [820, 932, 901, 934, 1290, 1330, 1320],
				        type: 'line'
				    }]
				},
				barOption: {
					tooltip: {},
				    xAxis: {
				        type: 'category',
				        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
				    },
				    yAxis: {
				        type: 'value'
				    },
				    series: [{
				        data: [820, 932, 901, 934, 1290, 1330, 1320],
				        type: 'bar',
				        color: '#f90'
				    }]
				}
			}
		},
		components: {
			'chart': ECharts
		},
		computed: {

		},
		methods: {
			showHistory () {
				console.log(window.history)
			},
			home () {

				this.$router.push('./home');
			}
		},
		destroyed () {
			console.log('模块 destroyed')
		},
		beforeDestory () {
			console.log('模块 beforeDestory')
		},
		update () {
			console.log('模块 update')
		},
		beforeUpdate () {
			console.log('模块 beforeupdate')
		},
		mounted () {
			console.log('模块 mounted')
			console.log(this.msg)
			console.log(this.$el)
		},
		beforeMount () {
			console.log('模块 beforeCreated')
			console.log(this.msg)
			console.log(this.$el)
		},
		created () {
			console.log('模块 created')
			console.log(this.msg)
			console.log(this.$el)
			var params = {
				location: '上海',
				key: 'cd3d61a4afe04a9eb2bb82d92d800cf4'
			}
			this.$Http.run('getForecast', params, false, function(resp) {
				console.log(resp)

			})
		},
		beforeCreated () {
			console.log('模块 beforeCreated')
			console.log(this.msg)
			console.log(this.$el)
		}
	}
</script>

<style>
	.echarts {
		width: 200px;
	}
	button {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}
</style>