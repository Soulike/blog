import React from 'react';
import Style from './Style.module.scss';
import {Layout, Menu} from 'antd';
import avatar from '../../Static/avatar.png';
import {Link} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../CONFIG/PAGE';
import {Category} from '../../Class';
import querystring from 'querystring';
import {HomeOutlined, InfoOutlined, TagOutlined, TagsOutlined} from '@ant-design/icons';

const {Sider, Footer, Content, Header} = Layout;
const {Item, SubMenu} = Menu;

interface Props
{
    children?: React.ReactNode,
    hitokoto: string,
    year: number,
    categoryList: Array<Category>,
}

function FrameView(props: Props)
{
    const {children, hitokoto, year, categoryList} = props;

    return (
        <Layout className={Style.Frame}>
            {/*在宽 500px 以上屏幕显示的 Sider*/}
            <Sider theme={'light'} className={Style.sidebar}>
                <div className={Style.sidebarInner}>
                    <img src={avatar} className={Style.avatar} alt={'avatar'} />
                    <Menu className={Style.menu} mode={'inline'} selectable={false}>
                        <Item className={Style.item}>
                            <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}>
                                <HomeOutlined className={Style.icon} />首页
                            </Link>
                        </Item>
                        <SubMenu title={
                            <span>
                        <TagsOutlined className={Style.icon} />
                        分类
                    </span>
                        } className={Style.item}>
                            {
                                categoryList.map(category =>
                                {
                                    const {id, name} = category;
                                    return (
                                        <Item key={id}>
                                            <Link to={`${PAGE_ID_TO_ROUTE[PAGE_ID.CATEGORY]}?${querystring.encode({id})}`}>
                                                <TagOutlined className={Style.icon} />
                                                {name}
                                            </Link>
                                        </Item>);
                                })
                            }
                        </SubMenu>
                        <Item className={Style.item}>
                            <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.ABOUT]}>
                                <InfoOutlined className={Style.icon} />关于
                            </Link>
                        </Item>
                    </Menu>
                </div>
            </Sider>

            <Layout className={Style.main}>
                {/*在宽 500 px 以下屏幕显示的 Header*/}
                <Header className={Style.header}>
                    <div className={Style.headerInner}>
                        <img src={avatar} className={Style.avatar} alt={'avatar'} />
                        <Menu className={Style.menu} mode={'horizontal'} selectable={false} theme={'dark'}>
                            <Item className={Style.item}>
                                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}>
                                    <HomeOutlined className={Style.icon} />首页
                                </Link>
                            </Item>
                            <SubMenu title={
                                <span>
                                    <TagsOutlined className={Style.icon} />
                                    分类
                                </span>
                            } className={Style.item}>
                                {
                                    categoryList.map(category =>
                                    {
                                        const {id, name} = category;
                                        return (
                                            <Item key={id}>
                                                <Link to={`${PAGE_ID_TO_ROUTE[PAGE_ID.CATEGORY]}?${querystring.encode({id})}`}>
                                                    <TagOutlined className={Style.icon} />
                                                    {name}
                                                </Link>
                                            </Item>);
                                    })
                                }
                            </SubMenu>
                            <Item className={Style.item}>
                                <Link to={PAGE_ID_TO_ROUTE[PAGE_ID.ABOUT]}>
                                    <InfoOutlined className={Style.icon} />关于
                                </Link>
                            </Item>
                        </Menu>
                    </div>
                </Header>
                <Content className={Style.content}>
                    {children}
                </Content>
                <Footer className={Style.footer}>
                    <div className={Style.info}>{year} - Designed & Created by Soulike</div>
                    <div className={Style.hitokoto}>{hitokoto}</div>
                </Footer>
            </Layout>
        </Layout>);
}

export default React.memo(FrameView);