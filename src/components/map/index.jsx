import React, {Component} from 'react';
// import {connect} from "react-redux";
// import {getUserInfo} from "../../actions/cart";

import "./css/index.scss";

/*@connect(
    state=>({shop:state}),
    {getUserInfo}
)*/
class Index extends Component {
 /*   componentDidMount() {
        let {getUserInfo} = this.props
        // 百度地图API功能
        let {BMap,BMAP_STATUS_SUCCESS} = window
        let map = new BMap.Map("allmap");
        let point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        let geoc = new BMap.Geocoder();
        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() === BMAP_STATUS_SUCCESS){
                let mk = new BMap.Marker(r.point);
                let pt = r.point;
                map.addOverlay(mk);
                map.panTo(pt);
                //alert('您的位置：'+r.point.lng+','+r.point.lat);


                geoc.getLocation(pt, function(rs){
                    let addComp = rs.addressComponents;
                    let info = addComp.province + " " + addComp.city + " " + addComp.district + " " //+ addComp.street + " " + addComp.streetNumber
                    //console.log(addComp.province + " " + addComp.city + " " + addComp.district + " " + addComp.street + " " + addComp.streetNumber);
                    getUserInfo({map:info})
                });

            }
            else {
                alert('failed'+this.getStatus());
            }
        },{enableHighAccuracy: true})
    }
*/
    render() {
        return (
            <div className={'map'} id={'allmap'}>
                    666
            </div>
        );
    }
}

export default Index;