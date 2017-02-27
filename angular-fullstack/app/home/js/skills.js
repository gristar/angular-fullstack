/**
 * Created by chenshng on 2017/1/26.
 * Home http://www.gristar.cn
 */
$(function(){
    var charts = echarts.init(document.getElementById("chart"));
    option = {
        backgroundColor: 'rgba(204, 255, 255, .5)',
        tooltip: {},
        series: [{
            type: 'wordCloud',
            gridSize: 20,
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            shape: 'circle',
            textStyle: {
                normal: {
                    color: function() {
                        return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [{
                name: 'html',
                value: 10000,
                textStyle: {
                    normal: {
                        color: 'black'
                    },
                    emphasis: {
                        color: 'red'
                    }
                }
            }, {
                name: 'css',
                value: 6181
            }, {
                name: 'html5',
                value: 4386
            }, {
                name: 'css3',
                value: 4055
            }, {
                name: 'javascript',
                value: 2467
            }, {
                name: 'webpack',
                value: 2244
            }, {
                name: 'bower',
                value: 1898
            }, {
                name: 'angular',
                value: 1484
            }, {
                name: 'react',
                value: 1112
            }, {
                name: 'less',
                value: 965
            }, {
                name: 'coffeescript',
                value: 847
            }, {
                name: 'npm',
                value: 582
            }, {
                name: 'node.js',
                value: 555
            }, {
                name: 'java',
                value: 550
            }, {
                name: 'web页面设计',
                value: 462
            }, {
                name: '英语4级',
                value: 366
            }, {
                name: '微信公众号开发',
                value: 360
            }, {
                name: '微信智能硬件',
                value: 282
            }, {
                name: '前端mvc',
                value: 273
            }, {
                name: '性能优化',
                value: 265
            }]
        }]
    };

    charts.setOption(option);
});

