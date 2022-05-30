import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from './serviceWorker';
import './ModuleConfig/Antd';
import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from 'antd';
import './GlobalStyle';
import App from './App';

const container = ReactDOM.createRoot(document.getElementById('root')!);

container.render((
    <React.StrictMode>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </React.StrictMode>));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
