import React, {useEffect, useState} from 'react';
import View from './View';
import {Option} from '../../Api';

function About()
{
    const [about, setAbout] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() =>
    {
        const getAbout = async () =>
        {
            const result = await Option.get();
            return result === null ? '' : result.about;
        };

        setLoading(true);
        getAbout()
            .then(about =>
            {
                setAbout(about);
                setLoading(false);
            });
    }, []);

    return <View about={about} loading={loading} />;
}

export default React.memo(About);