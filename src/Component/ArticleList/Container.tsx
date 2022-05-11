import React, {useEffect, useState} from 'react';
import View from './View';
import {Article, Category} from '../../Class';
import {Category as CategoryApi} from '../../Api';
import {useMaxJax} from '../../Hook';

interface IProps
{
    articleList: Array<Article>,
    loading: boolean,
}

function ArticleList(props: IProps)
{
    const [categoryMap, setCategoryMap] = useState(new Map<number, Category>());
    const [selfLoading, setSelfLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const {articleList, loading} = props;

    const onPageNumberChange = (pageNumber: number) => setPageNumber(pageNumber);

    useEffect(() =>
    {
        const getCategoryMap = async () =>
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
            return categoryMap;
        };

        setSelfLoading(true);
        getCategoryMap()
            .then(categoryMap =>
            {
                setCategoryMap(categoryMap);
                setSelfLoading(false);
            });
    }, []);

    useMaxJax([pageNumber]);

    return (
        <View onPageNumberChange={onPageNumberChange}
              articleList={articleList}
              categoryMap={categoryMap}
              loading={loading || selfLoading} />
    );
}

export default React.memo(ArticleList);