import React, {Component} from 'react';
//import {connect} from "react-redux";
import {
    NavLink
} from "react-router-dom";
import "./css/index.scss";
// import {getGoodsNum} from "../../actions/cart";

/*@connect(
    state=>({shop:state}),
    {}
)*/
class Index extends Component {
    render() {
        //let num = this.props.shop.cartCount.data || false
        //console.log( num )
        return (
            <div className={'tabbar'}>
                <ul>
                    <li>
                        <NavLink to="/" className={'active'}>
                            <i className={'iconfont icon-icon_home'}></i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/map" >
                            <i className={'iconfont icon-ditu1'}></i>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopcart">
                            <i className={'iconfont icon-gouwuche1'}>
                                <em>11</em>
                            </i>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                            <i className={'iconfont icon-tubiaolunkuo-'}></i>
                            <span>我的</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Index;