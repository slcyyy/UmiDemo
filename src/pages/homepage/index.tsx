/*
 * @Date: 2021-02-02 09:46:43
 * @LastEditors: LuoChun
 * @LastEditTime: 2021-05-10 09:57:06
 */
import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { Space } from 'antd';
import styles from './index.less';

// import { Line, Area, Column } from '@ant-design/charts';
export default () => {
  return (
    <div className={styles.homepage}>
      <h1 className={styles.title}>Page Index</h1>
      <div className={styles.chartWrapper}>
        {/* 这里如果不写成箭头函数会报错如下，因为onClick希望返回的是一个函数. */}
        {/* Type 'void' is not assignable to type 'MouseEventHandler<HTMLAnchorElement> | undefined' */}
        <Space>
          <a onClick={() => history.push('/react-study')}>react学习 </a>
          <a onClick={() => history.push('/editor')}>可视化编辑器</a>
          zahuishi1111
          zahuishi1122222
        </Space>
      </div>
    </div>
  );
};

// const [data, setData] = useState([]);
// var data2 = [
//   {
//     name: 'London',
//     month: 'Jan.',
//     rain: 18.9,
//   },
//   {
//     name: 'London',
//     month: 'Feb.',
//     rain: 28.8,
//   },
//   {
//     name: 'London',
//     month: 'Mar.',
//     rain: 39.3,
//   },
//   {
//     name: 'London',
//     month: 'Apr.',
//     rain: 81.4,
//   },
//   {
//     name: 'London',
//     month: 'May',
//     rain: 47,
//   },
//   {
//     name: 'London',
//     month: 'Jun.',
//     rain: 20.3,
//   },
//   {
//     name: 'London',
//     month: 'Jul.',
//     rain: 24,
//   },
//   {
//     name: 'London',
//     month: 'Aug.',
//     rain: 35.6,
//   },
//   {
//     name: 'Berlin',
//     month: 'Jan.',
//     rain: 12.4,
//     sun: 14,
//   },
//   {
//     name: 'Berlin',
//     month: 'Feb.',
//     rain: 23.2,
//     sun: 14,
//   },
//   {
//     name: 'Berlin',
//     month: 'Mar.',
//     rain: 34.5,
//     sun: 14,
//   },
//   {
//     name: 'Berlin',
//     month: 'Apr.',
//     rain: 99.7,
//     sun: 14,
//   },
//   {
//     name: 'Berlin',
//     month: 'May',
//     rain: 52.6,
//     sun: 14,
//   },
//   {
//     name: 'Berlin',
//     month: 'Jun.',
//     rain: 35.5,
//     sun: 14,
//   },
//   {
//     name: 'Berlin',
//     month: 'Jul.',
//     rain: 37.4,
//     sun: 14,
//   },
//   {
//     name: 'Berlin',
//     month: 'Aug.',
//     rain: 42.4,
//     sun: 14,
//   },
// ];
// let ref;
// useEffect(() => {
//   asyncFetch();
// }, []);
// const asyncFetch = () => {
//   fetch(
//     'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
//   )
//     .then((response) => response.json())
//     .then((json) => setData(json))
//     .catch((error) => {
//       console.log('fetch data failed', error);
//     });
// };
// var config1 = {
//   data: data,
//   xField: 'Date',
//   yField: 'scales',
//   xAxis: {
//     type: 'timeCat',
//     tickCount: 5, //x轴坐标刻度个数 5个刻度
//   },
//   color: '#a8ddb5', // 改变颜色
//   lineStyle: {
//     // 折线图图形样式，shapeStyle或function
//     fill: 'red', //渐变
//     fillOpacity: 0.5,
//     stroke: '#5B8FF8', //图形的描边 描边一定会有的，就算不写也会有个默认颜色
//     lineWidth: 2, // 描边宽度
//     lineDash: [4, 5], // 虚线 第一个数字时虚线的长度，第二个时虚线间的距离
//     strokeOpacity: 0.7, //描边透明度
//     shadowColor: '#1890ff', //阴影
//     shadowBlur: 10, // shadow的高斯模糊系数
//     shadowOffsetX: 5,
//     shadowOffsetY: 5,
//     cursor: 'pointer', //鼠标样式 手型
//   },
//   autoFit: true,
// };

// var config2 = {
//   data: data,
//   xField: 'Date',
//   yField: 'scales',
//   xAxis: { tickCount: 5 },
//   areaStyle: function areaStyle() {
//     return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
//   },
//   // smooth:true
// };

// var config3 = {
//   data: data2,
//   isGroup: true,
//   xField: 'month',
//   yField: 'rain',
//   seriesField: 'name',
//   autoFit: true,
//   columnWidthRatio: 0.3,
//   marginRatio: 0.5,
//   // meta: {
//   //   type: { alias: '类别' },
//   //   sales: { alias: '销售额' },
//   //   reject: { alias:'退货' }
//   // },
//   tooltip: {
//     fields: ['month', 'rain', 'sun'], //指定 tooltip 中显示的字段
//     formatter: (data) => {
//       console.log(data);
//       return { name: '月均降雨量', value: data.rain };
//     },
//     // title:'reject' //标题，设为字段值则会根据字段值变化，没有就不显示 无改字段默认x坐标
//     showCrosshairs: true,
//     crosshairs: {
//       //坐标内轴线
//       type: 'xy',
//     },
//     shared: false,
//     showMarkers: true, //就是每个柱子上的圈圈，多组合柱子这样有利于看清楚时点的谁的
//   },
//   columnStyle: {
//     cursor: 'pointer',
//   },
// };
