import React, {Component} from 'react';
import Head from "../indextop/index"
import Banner from "../banner/index"
import Category from "../category/index"
import Recommend from "../recommend/index"
import Conference from "../conference/index"
import Goods from "../goods/index"
import LazyLoad from 'react-lazyload';
class Index extends Component {
    render() {
        return (
            <div  className="App">
                <Head/>
                <Banner/>
                <Category/>
                <Recommend/>
                <Conference/>
                <LazyLoad>
                <Goods/>
                </LazyLoad>
            </div>
        )
    }
}

export default Index;