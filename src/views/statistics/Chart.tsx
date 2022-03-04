import React, {FC, lazy, Suspense} from 'react';
import {EChartOption} from 'echarts';
import {useRecords} from '../../hooks/useRecords';
import dayjs from 'dayjs';
import {mainColor} from '../../color';

const Echarts = lazy(() => import('../../components/ECharts'));

interface Props {
  day: Date;
  dateType: 'month' | 'year';
}

const Chart: FC<Props> = (props) => {
  const {day, dateType} = props;
  const {getRecordsByTime} = useRecords();

  const daysArray = Array(dayjs(day).daysInMonth()).fill(0).map((_, index) => index + 1);
  const monthsArray = Array(12).fill(0).map((_, index) => index + 1);
// 某月每天收入支出统计
  const getSumForDay_Month = (date: Date) => {
    const recordsByMonth = getRecordsByTime(date, 'month');
    const ret = {
      '+': daysArray.map(_ => 0),
      '-': daysArray.map(_ => 0)
    };
    return recordsByMonth.reduce((acc, record) => {
      acc[record.category][dayjs(record.createdAt).date() - 1] += record.amount;
      return acc;
    }, ret);
  };
// 某年每月收入支出统计
  const getSumForMonth_Year = (date: Date) => {
    const recordsByYear = getRecordsByTime(date, 'year');
    const ret = {
      '-': monthsArray.map(_ => 0),
      '+': monthsArray.map(_ => 0)
    };
    return recordsByYear.reduce((acc, record) => {
      acc[record.category][dayjs(record.createdAt).month()] += record.amount;
      return acc;
    }, ret);
  };

  const xData = dateType === 'month' ? daysArray : monthsArray;
  const yData = dateType === 'month' ? getSumForDay_Month(day) : getSumForMonth_Year(day);

  const option: EChartOption = {
    tooltip: {
      show: true,
      trigger: 'axis',
      transitionDuration: 0,
      formatter: `{b}${dateType === 'year' ? '月' : '日'}<br/>{a} : {c}元`,
      textStyle: {
        fontSize: 12,
      },
      confine: true,
      position: function (point) {
        return [point[0], '30%'];
      }
    },
    grid: {
      top: 40,
      bottom: 20,
      left: 10,
      right: 10
    },
    color: [mainColor],
    legend: {
      selectedMode: 'single',
      right: 10,
      icon: 'roundRect',
      textStyle: {
        fontSize: 12,
      }
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      name: '支出',
      seriesLayoutBy: 'row',
      type: 'line',
      symbol: 'emptycircle',
      symbolSize: 6,
      lineStyle: {
        color: '#bbb',
        width: 1,
      },
      data: yData['-']
    }, {
      name: '收入',
      seriesLayoutBy: 'row',
      type: 'line',
      symbol: 'emptycircle',
      symbolSize: 6,
      lineStyle: {
        color: '#bbb',
        width: 1,
      },
      data: yData['+']
    }]
  };

  return (
    <Suspense fallback={'加载中'}>
      <Echarts option={option} style={{height: '200px'}}/>
    </Suspense>
  );
};

export {Chart};