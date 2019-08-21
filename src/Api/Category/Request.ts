import {Category, Response} from '../../Class';
import axios, {AxiosResponse} from 'axios';
import {GET_ALL, GET_BY_ID} from './ROUTE';
import {message} from 'antd';

export async function getAllCategory(): Promise<Array<Category> | null>
{
    try
    {
        const {data: {isSuccessful, message: msg, data}}: AxiosResponse<Response<Array<Category>>> =
            await axios.get(GET_ALL);
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

export async function getCategoryById(id: number): Promise<Category | null>
{
    try
    {
        const {data: {isSuccessful, message: msg, data}}: AxiosResponse<Response<Category>>
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