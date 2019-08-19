import axios, {AxiosResponse} from 'axios';
import {Article, Response} from '../../Class';
import {GET_ALL_WITHOUT_CONTENT, GET_BY_CATEGORY_WITHOUT_CONTENT, GET_BY_ID} from './ROUTE';
import {message} from 'antd';

export async function getAllArticleWithoutContent(): Promise<Array<Article> | null>
{
    try
    {
        const {data: {isSuccessful, message: msg, data}}: AxiosResponse<Response<Array<Article>>>
            = await axios.get(GET_ALL_WITHOUT_CONTENT, {
            params: {_t: Date.now()},
        });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function getArticleById(id: number): Promise<Article | null>
{
    try
    {
        const {data: {isSuccessful, message: msg, data}}: AxiosResponse<Response<Article>>
            = await axios.get(GET_BY_ID, {
            params: {
                json: JSON.stringify({id}),
                _t: Date.now(),
            },
        });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}

export async function getArticleByCategoryWithoutContent(category: number): Promise<Array<Article> | null>
{
    try
    {
        const {data: {isSuccessful, message: msg, data}}: AxiosResponse<Response<Array<Article>>>
            = await axios.get(GET_BY_CATEGORY_WITHOUT_CONTENT, {
            params: {
                json: JSON.stringify({category}),
                _t: Date.now(),
            },
        });
        if (isSuccessful)
        {
            return data!;
        }
        else
        {
            message.warning(msg);
            return null;
        }
    }
    catch (e)
    {
        message.error('网络异常');
        console.log(e);
        return null;
    }
}