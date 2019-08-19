import {prefix} from '../Function';

export function articlePrefix(url: string): string
{
    return prefix(`/article${url}`);
}