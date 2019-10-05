import React, {PureComponent} from 'react';
import View from './View';
import {Article, Category} from '../../Class';
import {Category as CategoryApi} from '../../Api';
import {RouteComponentProps, withRouter} from 'react-router-dom';

interface Props extends RouteComponentProps
{
    articleList: Array<Article>,
    loading: boolean,
}

interface State
{
    categoryMap: Map<number, Category>,
    loading: boolean,
}

class ArticleList extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            categoryMap: new Map<number, Category>(),
            loading: true,
        };
    }

    async componentDidMount()
    {
        const categoryList = await CategoryApi.getAll();
        const categoryMap = new Map<number, Category>();
        if (categoryList !== null)
        {
            categoryList.forEach(category =>
            {
                categoryMap.set(category.id, category);
            });
        }
        this.setState({categoryMap, loading: false});
    }

    render()
    {
        const {articleList} = this.props;
        const {categoryMap} = this.state;
        return (
            <View articleList={articleList}
                  categoryMap={categoryMap}
                  loading={this.props.loading || this.state.loading} />
        );
    }
}

export default withRouter(ArticleList);