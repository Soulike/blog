import React from 'react';
import Style from './Style.module.scss';
import {Article, Category} from '../../Class';
import {Card, Empty, Icon, List, Tag} from 'antd';
import {markdownConverter} from '../../Singleton';
import ArticleLink from './Component/ArticleLink';

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
                const contentWrapper = document.createElement('div');
                contentWrapper.innerHTML = markdownConverter.makeHtml(content!);
                const text = contentWrapper.getElementsByTagName('p')[0].innerText;
                const time = new Date(publicationTime!);
                const category = categoryMap.get(categoryId!);

                return (
                    <Item key={id}>
                        <Card className={Style.card}
                              title={
                                  <div className={Style.header}>
                                      <ArticleLink articleId={id!}>
                                          <header className={Style.title}>{title}</header>
                                      </ArticleLink>
                                      <div className={Style.info}>
                                          <Tag color={'purple'}>
                                              <Icon type="clock-circle" className={Style.icon} />
                                              <span>
                                            {`${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2, '0')}-${time.getDate().toString().padStart(2, '0')}`}

                                        </span>
                                          </Tag>
                                          <Tag color={'blue'}>
                                              <Icon type={'tag'} className={Style.icon} />
                                              <span>{category ? category.name : ''}</span>
                                          </Tag>
                                          <Tag color={'geekblue'}>
                                              <Icon type="eye" className={Style.icon} />
                                              <span>{pageViews}</span>
                                          </Tag>
                                      </div>
                                  </div>
                              } bordered={false}>
                            <div className={Style.brief}>
                                {text}……
                            </div>
                            <ArticleLink articleId={id!}>继续阅读 >></ArticleLink>
                        </Card>
                    </Item>
                );
            }}>
            </List>
        </div>
    );
}

export default React.memo(ArticleListView);