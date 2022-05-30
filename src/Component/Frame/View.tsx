import React from 'react';
import Style from './Style.module.scss';
import {Layout, Menu} from 'antd';
import avatar from '../../Static/avatar.png';
import {Link, Outlet} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG';
import {Category} from '../../Class';
import {HomeOutlined, InfoOutlined, TagOutlined, TagsOutlined} from '@ant-design/icons';

const {Sider, Footer, Content, Header} = Layout;

interface Props
{
    hitokoto: string,
    year: number,
    categoryList: Array<Category>,
}

function FrameView(props: Props)
{
    const {hitokoto, year, categoryList} = props;
    const menuItems = [
        {
            label: (
                <div className={Style.item}>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}>
                        <HomeOutlined className={Style.icon} />首页
                    </Link>
                </div>), key: PAGE_ID_TO_ROUTE[PAGE_ID.INDEX],
        },
        {
            label: (
                <><TagsOutlined className={Style.icon} />
                    分类
                </>),
            key: 'categorySubmenu',
            children: categoryList.map(category =>
            {
                const {id, name} = category;
                const urlSearchParams = new URLSearchParams();
                urlSearchParams.set('id', id.toString());
                return {
                    label: (
                        <div>
                            <Link to={`${PAGE_ID_TO_ROUTE[PAGE_ID.CATEGORY]}?${urlSearchParams.toString()}`}>
                                <TagOutlined className={Style.icon} />
                                {name}
                            </Link>
                        </div>
                    ),
                    key: id,
                };
            }),
        },
        {
            label: (
                <div className={Style.item}>
                    <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.ABOUT]}>
                        <InfoOutlined className={Style.icon} />关于
                    </Link>
                </div>
            ),
            key: PAGE_ID_TO_ROUTE[PAGE_ID.ABOUT],
        },
    ];

    return (
        <Layout className={Style.Frame}>
            {/*在宽 500px 以上屏幕显示的 Sider*/}
            <Sider theme={'light'} className={Style.sidebar}>
                <div className={Style.sidebarInner}>
                    <img src={avatar} className={Style.avatar} alt={'avatar'} />
                    <Menu className={Style.menu} mode={'inline'} selectable={false} items={menuItems} />
                </div>
            </Sider>

            <Layout className={Style.main}>
                {/*在宽 500 px 以下屏幕显示的 Header*/}
                <Header className={Style.header}>
                    <div className={Style.headerInner}>
                        <img src={avatar} className={Style.avatar} alt={'avatar'} />
                        <Menu className={Style.menu}
                              mode={'horizontal'}
                              selectable={false}
                              theme={'dark'}
                              items={menuItems} />
                    </div>
                </Header>
                <Content className={Style.content}>
                    <Outlet />
                </Content>
                <Footer className={Style.footer}>
                    <div className={Style.info}>{year} - Designed & Created by Soulike</div>
                    <div className={Style.hitokoto}>{hitokoto}</div>
                </Footer>
            </Layout>
        </Layout>);
}

export default React.memo(FrameView);