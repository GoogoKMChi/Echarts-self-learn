//事实上柱状图和折线图可以完全一样的设置，这个例子为了展示一些其他的什么比如渐变色等

var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 500;
var dataShadow = [];

for(var i = 0; i < data.length; i++) {
	dataShadow.push(yMax);
}

barOption = {
	title: {
		text: '特性示例：渐变色 阴影，点击需要将注释打开',
		subtext: '官网拔下来的，稍加解释'
	},
	xAxis: {
		data: dataAxis,
		axisLabel: { //这里的设置使X轴的每一点对应的字放到柱状图中
			inside: true,
			textStyle: {
				color: '#fff'
			}
		},
		axisTick: {
			show: false
		},
		axisLine: {
			show: false
		},
		z: 10
	},
	yAxis: {
		axisLine: {
			show: false
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			textStyle: {
				color: '#999'
			}
		}
	},
	dataZoom: [{ //可以鼠标滑轮缩放横向
		type: 'inside'
	}],
	series: [{ 
			type: 'bar', //设置为柱状图类型,这里的data作为背景
			itemStyle: {
				normal: {
					color: 'rgba(0,0,0,0.05)'
				}
			},
			barGap: '-100%',
			barCategoryGap: '40%',
			data: dataShadow,
			animation: false
		},
		{
			type: 'bar',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient( //使柱状图有渐变色
						0, 0, 0, 1, [{
								offset: 0,
								color: '#83bff6'
							},
							{
								offset: 0.5,
								color: '#188df0'
							},
							{
								offset: 1,
								color: '#188df0'
							}
						]
					)
				},
			},
			data: data
		}
	]
};

