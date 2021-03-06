/* chart bar */
// 初始化
const init = (title, name) => ({
  title: {
    text: title,
    left: 'center',
    top: 0,
  },
  toolbox: {
    show: true,
    feature: {
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
    },
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      label: {
        show: true,
        textStyle: {
          color: '#999999',
        },
      },
    },
  },
  grid: {
    left: '2%',
    right: '5%',
    bottom: '2%',
    containLabel: true,
  },
  xAxis: {
    show: false,
    data: [],
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    axisLine: {
      show: false,
    },
  },
  series: [{
    name,
    type: 'bar',
    data: [],
    animationDelay: idx => idx * 10,
  }],
  animationEasing: 'elasticOut',
  animationDelayUpdate: idx => idx * 5,
});
// set data
const update = (xdata, ydata, name) => ({
  xAxis: { data: xdata },
  series: [{ name, type: 'bar', data: ydata }],
});
// loading
const loading = (ref) => {
  ref.showLoading({
    text: '',
    color: '#3399ff',
    maskColor: 'rgba(255, 255, 255, 0.75)',
  });
};

export default {
  init,
  update,
  loading,
};
