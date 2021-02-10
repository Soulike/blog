import React from 'react';
import Style from './Style.module.scss';
import {Article, Category} from '../../Class';
import {Empty, List} from 'antd';
import ArticlePreviewCard from './Component/ArticlePreviewCard';
import {getFirstSentenceFromMarkdown} from './Function';

const {Item} = List;

interface Props
{
    articleList: Array<Article>,
    categoryMap: Map<number, Category>,
    loading: boolean,
}

function ArticleListView(props: Props)
{
    const {articleList, categoryMap, loading} = props;
    const ref = React.createRef<HTMLDivElement>();
    return (
        <div className={Style.ArticleList} ref={ref}>
            <List loading={loading} dataSource={articleList} split={false} locale={{
                emptyText: (<Empty description={'暂无文章'} />),
            }} pagination={{
                pageSize: 10,
                position: 'bottom',
                hideOnSinglePage: true,
                onChange: () =>
                {
                    if (ref.current !== null)
                    {
                        ref.current.scrollTo({
                            top: 0,
                        });
                    }
                },
            }} renderItem={article =>
            {
                const {id, title, content, category: categoryId, publicationTime, pageViews} = article;
                const text = getFirstSentenceFromMarkdown(content);
                const time = new Date(publicationTime);
                const category = categoryMap.get(categoryId);

                return (
                    <Item key={id}>
                        <ArticlePreviewCard articleId={id}
                                            articleTitle={title}
                                            articleTime={time}
                                            articleCategory={category}
                                            articleViewAmount={pageViews}
                                            articleBriefText={text} />
                    </Item>
                );
            }}>
            </List>
        </div>
    );
}

export default React.memo(ArticleListView);