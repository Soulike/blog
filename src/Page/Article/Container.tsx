import React, {useEffect, useState} from 'react';
import View from './View';
import {Article as ArticleClass, Category} from '../../Class';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {Article as ArticleApi, Category as CategoryApi} from '../../Api';

function Article()
{
    const [article, setArticle] = useState(new ArticleClass(0, '', '', 0, '', '', 0, true));
    const [category, setCategory] = useState(new Category(0, ''));
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() =>
    {
        const getArticle = async (idNum: number) =>
        {
            return await ArticleApi.getById(idNum);
        };

        const getCategory = async (categoryId: number) =>
        {
            return await CategoryApi.getById(categoryId);
        };

        // 兼容性代码，第一版博客设置查询字符串为 articleId，第二版修改为 id
        const id = searchParams.get('id') ?? searchParams.get('articleId');

        if (id === null)
        {
            navigate(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX], {replace: true});
        }
        else
        {
            const idNum = Number.parseInt(id);
            if (Number.isNaN(idNum))
            {
                navigate(PAGE_ID_TO_ROUTE[PAGE_ID.INDEX], {replace: true});
            }
            else
            {
                setLoading(true);
                getArticle(idNum)
                    .then(article =>
                    {
                        if (article !== null)
                        {
                            document.title = `${article.title} - Soulike 的博客`;
                            setArticle(article);
                            const {category: categoryId} = article;
                            return getCategory(categoryId);
                        }
                    })
                    .then(category =>
                    {
                        if (category !== null && category !== undefined)
                        {
                            setCategory(category);
                        }
                    })
                    .finally(() => setLoading(false));
            }
        }
    }, [navigate, searchParams]);

    const {title, content, publicationTime, modificationTime} = article;
    return (
        <View title={title}
              content={content}
              publicationTime={publicationTime}
              modificationTime={modificationTime}
              loading={loading}
              category={category} />
    );
}

export default React.memo(Article);