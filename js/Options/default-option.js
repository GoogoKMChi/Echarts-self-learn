var defaultOption = {
	title: {
		text: '示例标题',
		subtext: '纯属虚构',
		x: 'center', //示例标题所在的位置
	},
	visualMap: [{ //你会看到的，在本示例图表的下方，一个范围选择
		min: -10,
		max: 20,
		type: 'piecewise',
		calculable: true,
		orient: 'horizontal',
		left: 'center',
		pieces: [{ //定义每个等级块的颜色
			gt: -10,
			lte: 3,
			color: '#43cd15'
		}, {
			gt: 3,
			lte: 6,
			color: '#eedc30'
		}, {
			gt: 6,
			lte: 9,
			color: '#ffab03'
		}, {
			gt: 9,
			lte: 12,
			color: '#ff401b'
		}, {
			gt: 12,
			lte: 15,
			color: '#d2003f'
		}, {
			gt: 15,
			color: '#9d0a4e'
		}]
	}],
	grid: {
		left: '0%', // 图表主体的位置指定
		right: '5%',
		bottom: '13%',
		containLabel: true
	},
	tooltip: { //提示框组件
		show: true, //是否显示，默认显示
		trigger: 'axis', //触发类型。axis坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。item数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。none什么都不触发
		axisPointer: { //坐标轴指示器
			type: 'cross'
		}
	},
	dataZoom: [{ //缩放功能
		type: 'slider', //滑块缩放
		show: true,
		yAxisIndex: [0],
		left: '97%',
		start: 0,
		end: 100 //百分比，表示默认显示0%~100%之间的内容
	}, {
		type: 'slider',
		show: true,
		xAxisIndex: [0], //不是有两组数据嘛这里，这个表示以第一组数据为基准
		left: '3%',
		right: '3%',
		top: '90%',
	}],
	legend: { //图例组件。
		data: ['legend1', 'legend2'], //在示例中可以看到这两个值，在标题的右方，通过这个可以控制数据的显示
		left: '64%', //指定在图表中的位置
		top: '3%',
		show: true,
		zlevel: 20 //层级，保证不被别的内容覆盖就行
	},
	toolbox: { //工具箱，有放大缩小，选中区域，保存图片，还原和图表类型切换等功能
		show: true,
		feature: {
			dataZoom: {
				yAxisIndex: 'none'
			},
			dataView: {
				readOnly: false
			},
			magicType: {
				type: ['line', 'bar']
			},
			restore: {},
			saveAsImage: {}
		}
	},
	xAxis: { //X轴  每一个数据点对应的X轴的名称
		type: 'category',
		boundaryGap: false,
		data: ['1', '2', '3', '4', '5', '6', '7']
	},
	yAxis: { //Y轴 每一个数据点对应的Y轴的名称
		type: 'value',
		axisLabel: {
			formatter: '{value} -whatever' //可以通过这种方式自定义Y轴的显示，结果为‘数值-自定义’文字的组合
		}
		//data: ['1', '2', '3', '4', '5', '6', '7'] //当然也可以通过这种方式来手动设置
	},
	series: [{
			name: 'legend1', //这一组数据的名称，如果写了legend的话需要对应上不然legend没有效果
			type: 'line', //显示的类型，line为折线图
			data: [11, 11, 15, 13, 12, 13, 10],
			markPoint: { //标志点，可以标志出最大最小点等
				data: [{
						type: 'max',
						name: '最大值'
					},
					{
						type: 'min',
						name: '最小值'
					}
				]
			},
			lineStyle: { //线条样式
				normal: {
					width: 5,
					shadowColor: 'rgba(0, 0, 0, 0.7)',
					shadowBlur: 20
				},
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		},
		{
			name: 'legend2',
			type: 'line',
			data: [1, -2, 2, 5, 3, 2, 0],
			lineStyle: {
				normal: {
					width: 5,
				},
			},
			markLine: {
				data: [{
						type: 'average',
						name: '平均值'
					},
					[{
						symbol: 'none',
						x: '90%',
						yAxis: 'max'
					}, {
						symbol: 'circle',
						label: {
							normal: {
								position: 'start',
								formatter: '最大值'
							}
						},
						type: 'max',
						name: '最高点'
					}]
				]
			}
		}
	]
};