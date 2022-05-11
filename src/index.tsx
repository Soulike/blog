import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './ModuleConfig/Antd';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';
import './GlobalStyle';
import App from './App';

// React Router V5 在新的 render API 下 useLocation 似乎存在 bug（体现在侧边栏标签的选择上），在升级之前要测试
ReactDOM.render(
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </React.StrictMode>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
