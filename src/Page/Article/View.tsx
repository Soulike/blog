import React from 'react';
import Style from './Style.module.scss';
import ArticleShower from '../../Component/ArticleShower';
import {Category} from '../../Class';
import {Alert, Icon, Skeleton, Tag} from 'antd';
import {markdownConverter} from '../../Singleton';

interface Props
{
    title: string,
    content: string,
    publicationTime: string,
    modificationTime: string,
    category: Category,
    loading: boolean,
}

function ArticleView(props: Props)
{
    const {
        title,
        content,
        publicationTime: publicationTimeString,
        modificationTime: modificationTimeString,
        category,
        loading,
    } = props;
    const contentWrapper = document.createElement('div');
    contentWrapper.innerHTML = markdownConverter.makeHtml(content!);
    const publicationTime = new Date(publicationTimeString!);
    const modificationTime = new Date(modificationTimeString!);
    const nowTime = new Date();
    const timeDiff = nowTime.getTime() - modificationTime.getTime();
    const ONE_MONTH = 30 * 24 * 60 * 60 * 1000; // 一个月，单位毫秒
    const ONE_DAY = 24 * 60 * 60 * 1000;
    return (
        <div className={Style.Article}>
            <Skeleton loading={loading} active={true} title={true} paragraph={{
                rows: 20,
            }}>
                <header className={Style.header}>
                    <h1 className={Style.title}>{title}</h1>
                    <div className={Style.info}>
                        <Tag color={'purple'}>
                            <Icon type="clock-circle" className={Style.icon} />
                            <span>
                                            {`${publicationTime.getFullYear()}-${(publicationTime.getMonth() + 1).toString().padStart(2, '0')}-${publicationTime.getDate().toString().padStart(2, '0')}`}

                                        </span>
                        </Tag>
                        <Tag color={'blue'}>
                            <Icon type={'tag'} className={Style.icon} />
                            <span>{category ? category.name : ''}</span>
                        </Tag>
                    </div>
                </header>
                {
                    timeDiff > ONE_MONTH
                        ? (<Alert className={Style.alert} type={'warning'} banner={true} message={
                            `本文最后编辑于 ${Math.floor(timeDiff / ONE_DAY)} 天前，可能已不具有时效性，请谨慎阅读`
                        } />) :
                        null
                }
                <ArticleShower HTMLContent={contentWrapper.innerHTML} />
            </Skeleton>
        </div>
    );
}

export default React.memo(ArticleView);