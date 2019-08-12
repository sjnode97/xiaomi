import React, {Component} from 'react';
import {connect} from "react-redux";


import {Link} from "react-router-dom";
import {addCart} from "../actives/index";

/*import LazyLoad,{ lazyload } from 'react-lazyload';*/
import "./css/index.scss";
// import Shopcart from "../shopcart";

@connect(
    state=>({shop:state}),
    {addCart}
)
/*@lazyload({
        height: 200,
        once: true,
        offset: 100
    })*/
class Index extends Component {
    state = {
        data: {},
        num:0,
        id:0
    }
    componentDidMount() {
        let id = this.props.match.params.shopid
        //console.log(id)
        fetch('http://47.100.98.54:9020/api/buygoods/'+id)
            .then((r)=>{
                return r.json()
            })
            .then((res)=>{
                //console.log(res)
                this.setState({
                    data: res,
                    id
                })
            })

    }
    submitRedux = (e)=>{
        e.preventDefault()
        let {num,id} = this.state
        let {addCart} = this.props
        console.log(1);
        num && (
            // console.log('提交到redux里')
            addCart({
                id,
                num
            })
    )
    }

    // 减少
    reduceGoods = (e)=>{
        let num = this.state.num
        num = num?num-1:num
        this.setState({
            num
        })
        e.preventDefault()
    }
    // 增加
    addGoods = (e)=>{
        let num = this.state.num
            num++
        this.setState({num})
           e.preventDefault()
    }

    render() {
        let {num,data} = this.state
        //console.log(this.props)
        return (
            <div>

                <div className="shopdedatils">

                        <img src={data.picurl} width="80%" alt={data.title}/>

                    <h3 className={'title'}>{data.title}</h3>
                    <h3 className={'des'}>{data.des}</h3>
                    <p className="money">
                        <span className="symbol">{data.symbol}</span>
                        <span className="price">{data.price}</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr" ></span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                            <p className="addNum fr">
                                <Link
                                    to={`/`}
                                    className="reduce"
                                    onClick={this.reduceGoods}
                                >-</Link>
                            <Link to={`/`} className="num">{num}</Link>
                            <Link
                                to={`/`}
                                className="add"
                                onClick={this.addGoods}
                            >+</Link>
                        </p>
                    </div>
                    <div className="buy">
                        <Link
                            to={`/`}
                            className="addCart"
                            onClick={this.submitRedux}
                        >加入购物车</Link>
                        <Link to="/shopcart" className="nowBuy">立即购买</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;