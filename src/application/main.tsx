/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2020-12-28 11:27:53
 * @FilePath: /react-ts-redux/src/application/main.tsx
 */
/**
 * @file 项目入口文件
 * @author svon.me@gmail.com
 * @description 配置项目中用到的公共参数
 */

import React from 'react';
// antd 国际化配置
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
// 项目路由
import Routers from 'src/routers/index';

import { Provider } from 'react-redux';
// 引入创建好的store实例
import store from '../store/index';
console.log(store);

import('./config');

export default class Main extends React.Component {
  render(): React.ReactElement {
    // 配置 antd 中文模式
    return (
      <ConfigProvider locale={zhCN} >
        <Provider store={store}>
          <Routers></Routers>
        </Provider>
      </ConfigProvider>
    );
  }
}

