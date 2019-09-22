import React, {Component} from 'react';
import "./css/index.scss";
import {addCart,delCart,getGoodsNum} from "../../actions/run";
import {connect} from "react-redux";


@connect(
    state=>({shop:state}),
    {addCart,delCart,getGoodsNum}
)
class Index extends Component {
   constructor(props) {
        super(props);

        this.state = {
            adr: '湖南长沙',
            goods:[],
            zongshu:0,
            jiage:0,
            map: ''
        }
    }

    getData =()=>{
       let {cartCount} = this.props.shop
       let {goods} = this.state
       let shopid = Object.keys(cartCount)

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
                        console.log(shopid);
                    })
            }



        })
        this.getResoult()
    }
    reduceGoods =(index)=>{

        let goods = this.state.goods
        let {addCart} = this.props
        let id = goods[index].shopid
        if(goods[index].num){
            goods[index].num--
            this.setState({goods})
        }
        addCart({
            id,
            num:-1
        })
        this.zongjia()
    }
    addGoods = (index) =>{

        let goods = this.state.goods

        let {addCart} = this.props
        let id = goods[index].shopid
        //let num = goods[index].num
        goods[index].num++

        this.setState({goods})
        addCart({
            id,
            num:1
        })
        this.zongjia()
    }
    delGoods =(index)=>{

        let goods = this.state.goods
        let {delCart} = this.props
        delCart(goods[index]["shopid"])
        goods.splice(index,1)
        this.setState({goods})
        this.zongjia()
    }
    getResoult = () =>{
       let {cartCount} = this.props.shop

        let timer = setTimeout(()=>{
           clearTimeout(timer)
           this.zongjia()
       },200)
        if(cartCount.map){
            this.setState({
                map:cartCount.map
            })
        }else {
            this.setState({
                map:"请输入地址"
            })
        }
    }
    zongjia = () =>{
        let goods = this.state.goods
        let {getGoodsNum} = this.props
        let zongshu = 0
        let jiage = 0
        for (let key of goods) {
            jiage += key.num*key.price
            zongshu += key.num
        }
        this.setState({
            zongshu,
            jiage
        })
        getGoodsNum({data:zongshu})
    }
    componentDidMount() {
        this.getData()

    }

    render() {
         let {goods,jiage,zongshu,adr,map} = this.state
         console.log(this.state)
        return (
            <div className={'shopcart'}>

                <div className="shopArea mb">
                    <p className="location clearFix">
                        <span className="fl">送到地点:{map&&map}</span>
                        <span className="fr">编辑地址</span>
                    </p>
                    {
                        goods.length>0&&(
                            goods.map((data,index)=>{
                                return (
                                    <div key={index} className="shop ">
                                        <div className="shopShow">
                                            <div className="pic ">
                                                <img src={data.picurl}  alt={data.title}/>
                                                <img src={data.picurl}  alt={data.title}/>
                                                <img src={data.picurl}  alt={data.title}/>
                                            </div>

                                        </div>
                                        <div className="title ">{data.title}</div>
                                        <div className="des ">{data.des}</div>
                                        <div className="buyNum ">
                                            <p className=" buyfont">{data.symbol} {data.price}</p>
                                            <p className="addNum ">
                                                <span
                                                    className="reduce"
                                                    onClick={this.reduceGoods.bind(this,index)}
                                                >-</span>
                                                <span  className="num">{data.num}</span>
                                                <span
                                                    className="add"
                                                    onClick={this.addGoods.bind(this,index)}
                                                >+</span>
                                            </p>
                                            <span
                                                className="del"
                                                onClick={this.delGoods.bind(this,index)}
                                            >删除</span>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    }
                    <div className="totalPrice">

                        <div className="total">
                            <p className="totalMoney">
                                <span className="font">总计:</span> <span>￥ {jiage}</span>
                            </p>
                            <p className="preferential">
                                总金额￥ 优惠￥0.00
                            </p>
                        </div>
                        <div className="goPayment">
                            <span className="font">去结算</span><span className="num">({zongshu}件)</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Index;