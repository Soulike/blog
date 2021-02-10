import React, {useEffect, useState} from 'react';
import View from './View';
import {Article} from '../../Class';
import {Article as ArticleApi} from '../../Api';

function Index()
{
    const [articleList, setArticleList] = useState([] as Article[]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>
    {
        document.title = 'Soulike 的博客';
    });

    useEffect(() =>
    {
        setLoading(true);
        ArticleApi.getAllWithAbstract()
            .then(articleList =>
            {
                if (articleList)
                {
                    setArticleList(articleList);
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <View articleList={articleList} loading={loading} />
    );
}

export default React.memo(Index);