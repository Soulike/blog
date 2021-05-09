import {DependencyList, useEffect} from 'react';
import {loadExternalScript, loadScript} from '../Function/Script';

/**
 * @description Load MaxJax to render Math for whole page.
 * Due to the design of Mathjax, the hook need to reload MaxJax files when the content of the page changes.
 *
 * @param config MathJax config
 * @param deps When the items in deps changed, MaxJax will be reloaded.
 * */
function useMaxJax(config: Readonly<any>, deps?: Readonly<DependencyList>)
{
    const configId = 'mathjax-config';
    const CDNId = 'mathjax-cdn';
    const $body = document.body;

    useEffect(() =>
    {
        async function loadMathJax()
        {
            const $config = $body.querySelector(`#${configId}`);
            if (!$config)
            {
                await loadScript(`MathJax = ${JSON.stringify(config)};`, {id: configId});
            }
            await loadExternalScript('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js', {
                id: CDNId,
                async: 'true',
            });
        }

        function unloadMaxJax()
        {
            const $cdn = $body.querySelectorAll(`#${CDNId}`);
            $cdn.forEach(tag => tag.remove());
        }

        loadMathJax();

        return unloadMaxJax;
    }, [$body, config, deps]);
}

export default useMaxJax;