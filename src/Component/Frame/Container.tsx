import React, {PureComponent} from 'react';
import View from './View';
import axios from 'axios';
import {Category} from '../../Class';
import {Category as CategoryApi} from '../../Api';

interface Props
{
    children?: React.ReactNode,
}

interface State
{
    hitokoto: string,
    year: number,
    categoryList: Array<Category>
}

class Frame extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            hitokoto: '这里应该有一句话',
            year: 0,
            categoryList: [],
        };
    }

    async componentDidMount()
    {
        // 设定当前年份
        const date = new Date();
        this.setState({year: date.getFullYear()});

        // 设定 hitokoto
        const {data} = await axios.get('https://v1.hitokoto.cn/', {
            params: {
                c: 'a',
                encode: 'text',
                _t: Date.now(),
            },
        });

        this.setState({
            hitokoto: data,
        });

        // 获取所有分类
        const categoryList = await CategoryApi.getAll();
        if (categoryList !== null)
        {
            this.setState({categoryList});
        }
    }

    render()
    {
        const {children} = this.props;
        const {hitokoto, year, categoryList} = this.state;
        return (
            <View hitokoto={hitokoto} year={year} categoryList={categoryList}>
                {children}
            </View>
        );
    }
}

export default Frame;