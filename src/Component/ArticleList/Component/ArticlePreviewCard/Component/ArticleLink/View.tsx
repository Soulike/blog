import React from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '../../../../../../CONFIG';

interface Props extends Partial<LinkProps>
{
    articleId: number
}

function ArticleLink(props: Props)
{
    const {children, articleId, ...rest} = props;
    const urlQueryParams = new URLSearchParams();
    urlQueryParams.set('id', articleId.toString());
    return (
        <Link to={`${PAGE_ID_TO_ROUTE[PAGE_ID.ARTICLE]}?${urlQueryParams.toString()}`}
              target={'_blank'}
              rel="noopener norefferrer" {...rest}>
            {children}
        </Link>
    );
}

export default React.memo(ArticleLink);