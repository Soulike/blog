import {markdownConverter} from '../../Singleton';

export function getFirstSentenceFromMarkdown(markdownText: string): string
{
    const contentWrapper = document.createElement('div');
    contentWrapper.innerHTML = markdownConverter.makeHtml(markdownText);
    return contentWrapper.getElementsByTagName('p')[0].innerText;
}