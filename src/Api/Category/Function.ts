import {prefix} from '../Function';

export function categoryPrefix(url: string): string
{
    return prefix(`/category${url}`);
}