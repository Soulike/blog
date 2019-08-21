import React, {PureComponent} from 'react';
import View from './View';
import {Article} from '../../Class';
import {getAllArticleWithAbstract} from '../../Api/Article';

interface Props {}

interface State
{
    articleList: Array<Article>,
    loading: boolean,
}

class Index extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            articleList: [],
            loading: true,
        };
    }

    async componentDidMount()
    {
        document.title = 'Soulike 的博客';

        const articleList = await getAllArticleWithAbstract();
        if (articleList)
        {
            this.setState({articleList, loading: false});
        }
    }

    render()
    {
        const {articleList, loading} = this.state;
        return (
            <View articleList={articleList} loading={loading} />
        );
    }
}

export default Index;