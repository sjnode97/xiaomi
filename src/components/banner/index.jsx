import React, {Component} from 'react';
import {
    Link
}  from "react-router-dom";
import Swiper from "swiper/dist/js/swiper.min"
import "swiper/dist/css/swiper.min.css"
import "./css/index.scss"


class Index extends Component {
    state = {
        data:[]
    }
    play(){
        new Swiper(".swiper-container",{
            autoplay:true,
            pagination:{
                el:".swiper-pagination"
            },
            loop:true
        })
    }
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/banner")
            .then(res=>res.json())
            .then((data)=>{
                // console.log(data)
                if(data.status === 200){
                    this.setState({
                        data:data.data
                    })
                    this.play()

                }


            })
    }


    render()
        {
            return (
                <div className={"banner swiper-container"}>
                    <ul className={"swiper-wrapper"}>
                        {
                            this.state.data.length&&(
                                this.state.data.map((data,index)=>{
                                    return(
                                    <li className={"swiper-slide"} key={data.id}>
                                            <Link to={`/shopbuy/${data.shopid}`}>
                                                <img src={data.picurl} alt={data.alt} />
                                            </Link>
                                    </li>
                                        )
                                })
                            )
                        }
                    </ul>
                </div>
                )
        }
}
export default Index;