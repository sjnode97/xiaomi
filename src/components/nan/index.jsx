import React, {Component} from 'react';
import './index.scss'
class Index extends Component {
    render() {
        return (
            <div className={'not404'}>
                <img src={require('./img/404.png')} alt=""/>
            </div>
        );
    }
}

export default Index;