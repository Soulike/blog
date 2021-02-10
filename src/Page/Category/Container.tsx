import React, {useEffect, useState} from 'react';
import View from './View';
import {Article} from '../../Class';
import qs from 'querystring';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {useHistory, useLocation} from 'react-router-dom';
import {Article as ArticleApi} from '../../Api';


function Category()
{
    const [articleList, setArticleList] = useState([] as Article[]);
    const [loading, setLoading] = useState(false);

    const {search} = useLocation();
    const history = useHistory();

    useEffect(() =>
    {
        document.title = 'Soulike 的博客';
    }, []);

    useEffect(() =>
    {
        const getArticleList = async (categoryId: number) =>
            await ArticleApi.getByCategoryWithAbstract(categoryId);

        const {id: idString} = qs.parse(search.slice(1));
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

        setLoading(true);
        getArticleList(id)
            .then(articleList =>
            {
                if (articleList)
                {
                    setArticleList(articleList);
                }
            })
            .finally(() => setLoading(false));
    }, [search, history]);

    return (
        <View articleList={articleList} loading={loading} />
    );
}

export default React.memo(Category);