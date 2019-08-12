import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./css/index.scss";
class Index extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/recommend')
            .then(res=>res.json())
            .then((data)=>{
                if( data.status === 200 ){
                    this.setState({
                        data:data.data
                    })
                }
                //console.log(data)
            })
    }

    render() {
        const data = this.state.data
        return (
            <div className={'recommend'}>
                {
                    //
                    data.shopid && (
                        <Link to={`/shopbuy/${data.shopid}`}>
                            <img src={data.picurl} alt={data.title}/>
                        </Link>
                    )
                }

            </div>
        );
    }
}

export default Index;