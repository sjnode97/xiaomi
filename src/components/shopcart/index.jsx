import React, {Component} from 'react';
import "./css/index.scss";
/*
import {addCart,delCart,getGoodsNum} from "../../actions/cart";
import {connect} from "react-redux";
*/

/*@connect(
    state=>({shop:state}),
    {addCart,delCart,getGoodsNum}
)*/
class Index extends Component {
   /* constructor(props) {
        super(props);

        this.state = {
            adr: '湖南长沙',
            goods:[],
            count:0,
            price:0,
            map: ''
        }
    }
    // 删除商品
    delGoods = (index)=>{
        let goods = this.state.goods
        let {delCart} = this.props
        delCart(goods[index]['shopid'])
        goods.splice(index,1)
        this.setState({goods})

        this.totalPrice()
    }

    // 减少
    reduceGoods = (index)=>{
        // console.log(index)
        let goods = this.state.goods
        let {addCart} = this.props
        let id = goods[index].shopid
        if( goods[index].num ){
            goods[index].num--
            this.setState({goods})
            addCart({
                id,
                num:-1
            })
        }
        this.totalPrice()
    }
    // 增加
    addGoods = (index)=>{
        //console.log(index)
        let goods = this.state.goods
        let {addCart} = this.props
        let id = goods[index].shopid
        goods[index].num ++

        this.setState({goods})

        addCart({
            id,
            num:1
        })
        this.totalPrice()
    }
    getData = ()=>{
        let {cartCount} = this.props.shop  //{11: 1, 12: 2, 21: 7,data:5,map:''}
        let {goods} = this.state
        let shopid = Object.keys(cartCount)  // [11,12,21,data,abc]
        shopid.forEach((item,index)=>{
            if( !isNaN(item) ){ // 必须判断是数字（商品id）
                fetch('http://47.100.98.54:9020/api/buygoods/'+item)
                    .then((r)=>r.json())
                    .then((res)=>{
                        // 挂载此商品对应的数量
                        res['num'] = cartCount[item]
                        goods.push(res)
                        this.setState({
                            goods
                        })
                    })
            }


        })
        //console.log(cartCount)
        this.getResoult()
    }
    getResoult = ()=>{
        let {cartCount} = this.props.shop
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            this.totalPrice()

        },200)
        if( cartCount.map ){
            this.setState({
                map: cartCount.map
            })
        }

    }

    componentDidUpdate() {
        // this.totalPrice()
    }

    totalPrice = ()=>{
        let goods = this.state.goods
        let {getGoodsNum} = this.props
        let count = 0
        let price = 0

        for (let key of goods){
            //console.log(key)
            price += key.num * key.price
            count += key.num
        }

        this.setState({
            count,
            price
        })

        getGoodsNum({data:count})

    }
    componentDidMount() {
        this.getData()
    }
*/
    render() {
        // let {adr,goods,price,count,map} = this.state
        // console.log( this.props )
        return (
            <div className={'shopcart'}>

                <div className="shopArea mb">
                    <p className="location clearFix">
                        <span className="fl">送到地点:</span>
                        <span className="fr">编辑地址</span>
                    </p>
                    {
                       /* goods.length>0 && (
                            goods.map((item,index)=>{
                                return (
                                    <div key={index} className="shop ">
                                        <div className="shopShow">
                                            <div className="pic ">
                                                <img src={item.picurl}  alt={item.title}/>
                                                <img src={item.picurl}  alt={item.title}/>
                                                <img src={item.picurl}  alt={item.title}/>
                                            </div>

                                        </div>
                                        <div className="title ">{item.title}</div>
                                        <div className="des ">{item.des}</div>
                                        <div className="buyNum ">
                                            <p className=" buyfont">{item.symbol} {item.price}</p>
                                            <p className="addNum ">
                                                <a
                                                    href="javascript:;"
                                                    className="reduce"
                                                    onClick={this.reduceGoods.bind(this,index)}
                                                >-</a>
                                                <a href="javascript:;" className="num">{item.num}</a>
                                                <a
                                                    href="javascript:;"
                                                    className="add"
                                                    onClick={this.addGoods.bind(this,index)}
                                                >+</a>
                                            </p>
                                            <a
                                                href="javascript:;"
                                                className="del"
                                                onClick={this.delGoods.bind(this,index)}
                                            >删除</a>
                                        </div>
                                    </div>
                                )
                            })
                        )*/
                    }
                    <div className="totalPrice">

                        <div className="total">
                            <p className="totalMoney">
                                <span className="font">总计:</span> <span>￥ 666</span>
                            </p>
                            <p className="preferential">
                                总金额￥ 优惠￥0.00
                            </p>
                        </div>
                        <div className="goPayment">
                            <span className="font">去结算</span><span className="num">(件)</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Index;