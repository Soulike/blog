import {PAGE_ID} from './PAGE_ID';

export const PAGE_ID_TO_ROUTE = {
    [PAGE_ID.INDEX]: '/',
    [PAGE_ID.ARTICLE]: '/article/:id',
    [PAGE_ID.ABOUT]: '/about',
    [PAGE_ID.CATEGORY]: '/category/:id',
    [PAGE_ID.ARCHIVE]: '/archive',
};