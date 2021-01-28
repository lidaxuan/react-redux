/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李继玄（15201002062@163.com）
 * @Date: 2021-01-04 18:19:50
 * @FilePath: /react-ts-redux/config/development.js
 */
/**
 * @file 环境变量
 * @author svon.me@gmail.com
 */

const production = require('./production');

const data = Object.assign(production, {
  port: 1230,
  domain: 'devlivemanage.myrtb.net',
  quclouds: 'http://qdev.core.myrtb.net/basis/config?secretkey=E3yN5mGvl4UgwQK7'
});

module.exports = data;