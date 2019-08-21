import React from 'react';
import Style from './Style.module.scss';
import ArticleList from '../../Component/ArticleList';
import {Article} from '../../Class';

interface Props
{
    loading: boolean,
    articleList: Array<Article>
}

function CategoryView(props: Props)
{
    const {loading, articleList} = props;
    return (
        <div className={Style.Category}>
            <ArticleList loading={loading} articleList={articleList} />
        </div>
    );
}

export default React.memo(CategoryView);