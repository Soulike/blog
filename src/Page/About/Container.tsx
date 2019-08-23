import React, {PureComponent} from 'react';
import View from './View';
import {getAbout} from '../../Api/Option';

interface Props {}

interface State
{
    about: string,
    loading: boolean,
}

class About extends PureComponent<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            about: '',
            loading: true,
        };
    }

    async componentDidMount()
    {
        const result = await getAbout();
        if (result !== null)
        {
            this.setState({
                about: result.about,
                loading: false,
            });
        }
    }


    render()
    {
        const {about, loading} = this.state;
        return <View about={about} loading={loading} />;
    }
}

export default About;