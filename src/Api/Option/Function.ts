import {prefix} from '../Function';

export function optionPrefix(url: string): string
{
    return prefix(`/option${url}`);
}