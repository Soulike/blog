import React from 'react';
import Style from './Style.module.scss';
import {Article, Category} from '../../Class';
import {Card, Empty, Icon, List, Tag} from 'antd';
import {markdownConverter} from '../../Singleton';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import qs from 'querystring';

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
                        <Link to={`${PAGE_ID_TO_ROUTE[PAGE_ID.ARTICLE]}?${qs.encode({id})}`}
                              target={'_blank'}
                              rel="noopener norefferrer">
                            <Card className={Style.card}
                                  title={
                                      <div className={Style.header}>
                                          <header className={Style.title}>{title}</header>
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
                                {text}……
                            </Card>
                        </Link>
                    </Item>
                );
            }}>

            </List>
        </div>
    );
}

export default React.memo(ArticleListView);