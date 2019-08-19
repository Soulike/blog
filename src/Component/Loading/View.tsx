import React from 'react';
import Style from './Style.module.scss';
import Spin from 'antd/lib/spin';
import Icon from 'antd/lib/icon';
import svg from '../../Static/book_lover.svg';

function Loading()
{
    return (
        <div className={Style.Loading}>
            <img src={svg} className={Style.icon} alt={'icon'} />
            <Spin size={'large'} indicator={<Icon type="loading" />} />
        </div>
    );
}

export default React.memo(Loading);