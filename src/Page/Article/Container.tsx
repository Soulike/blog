import React, {PureComponent} from 'react';
import View from './View';
import {Article as ArticleObj, Category} from '../../Class';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import qs from 'querystring';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import {getArticleById} from '../../Api/Article';
import {getCategoryById} from '../../Api/Category';

interface Props extends RouteComponentProps {}

interface State
{
    article: ArticleObj,
    category: Category,
    loading: boolean,
}

class Article extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            article: new ArticleObj(),
            category: new Category(),
            loading: true,
        };
    }

    async componentDidMount()
    {
        // 兼容性代码，第一版博客设置查询字符串为 articleId，第二版修改为 id
        const {location: {search}, history} = this.props;
        let {articleId, id} = qs.decode(search.slice(1));

        if (typeof id === 'undefined')
        {
            id = articleId;
        }

        let idNum = NaN;
        if (typeof id === 'string')
        {
            idNum = parseInt(id, 10);
        }
        else if (typeof id === typeof Array)
        {
            idNum = parseInt(id[0], 10);
        }

        if (Number.isNaN(idNum))
        {
            history.replace(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]);
        }
        else
        {
            const article = await getArticleById(idNum);
            if (article !== null)
            {
                document.title = `${article.title} - Soulike 的博客`;

                this.setState({article});
                const {category: categoryId} = article;
                const category = await getCategoryById(categoryId!);
                if (category !== null)
                {
                    this.setState({category});
                }
                this.setState({
                    loading: false,
                });
            }
        }
    }

    render()
    {
        const {
            article: {title, content, publicationTime, modificationTime},
            category,
            loading,
        } = this.state;
        return (
            <View title={title!}
                  content={content!}
                  publicationTime={publicationTime!}
                  modificationTime={modificationTime!}
                  loading={loading}
                  category={category} />
        );
    }

}

export default withRouter(Article);