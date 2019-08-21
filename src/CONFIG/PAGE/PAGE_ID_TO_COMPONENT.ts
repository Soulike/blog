import {PAGE_ID} from './PAGE_ID';
import React from 'react';

const Index = React.lazy(() => import('../../Page/Index'));
const Article = React.lazy(() => import('../../Page/Article'));

export const PAGE_ID_TO_COMPONENT = {
    [PAGE_ID.INDEX]: Index,
    [PAGE_ID.ARTICLE]: Article,
    [PAGE_ID.ABOUT]: undefined,
    [PAGE_ID.CATEGORY]: undefined,
    [PAGE_ID.ARCHIVE]: undefined,
};