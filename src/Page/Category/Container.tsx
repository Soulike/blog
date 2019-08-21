import React, {PureComponent} from 'react';
import View from './View';
import {Article} from '../../Class';
import {getArticleByCategoryWithAbstract} from '../../Api/Article';
import qs from 'querystring';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';

interface Props extends RouteComponentProps {}

interface State
{
    articleList: Array<Article>,
    loading: boolean,
}

class Category extends PureComponent<Props, State>
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

        const {location, history} = this.props;

        const {id: idString} = qs.parse(location.search.slice(1));
        let id = NaN;
        if (typeof idString === 'string')
        {
            id = Number.parseInt(idString);
        }

        if (Number.isNaN(id))
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
            return;
        }

        const articleList = await getArticleByCategoryWithAbstract(id);
        if (articleList)
        {
            this.setState({articleList, loading: false});
        }
    }

    async componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any)
    {
        if (this.props.location.search !== prevProps.location.search)
        {
            await this.componentDidMount();
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

export default withRouter(Category);