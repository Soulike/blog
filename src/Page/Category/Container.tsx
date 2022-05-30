import React, {useEffect, useState} from 'react';
import View from './View';
import {Article} from '../../Class';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {Article as ArticleApi} from '../../Api';

function Category()
{
    const [articleList, setArticleList] = useState([] as Article[]);
    const [loading, setLoading] = useState(false);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() =>
    {
        document.title = 'Soulike 的博客';
    }, []);

    useEffect(() =>
    {
        const getArticleList = async (categoryId: number) =>
            await ArticleApi.getByCategoryWithAbstract(categoryId);

        const idString = searchParams.get('id');
        let id = NaN;
        if (typeof idString === 'string')
        {
            id = Number.parseInt(idString);
        }

        if (Number.isNaN(id))
        {
            navigate(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX], {replace: true});
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
    }, [searchParams, navigate]);

    return (
        <View articleList={articleList} loading={loading} />
    );
}

export default React.memo(Category);