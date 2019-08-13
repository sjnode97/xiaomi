let shopTools = {};
let shop = JSON.parse(window.localStorage.getItem("shopInfo")||"{}")
shopTools.addUpdate= function (goods) {
    if (shop[goods.id]){
        shop[goods.id]+=goods.num
    }else {
        shop[goods.id]=goods.num
    }
    this.save()
}
shopTools.delete = function (id) {
    delete shop[id]
    this.save()
}
shopTools.getShop = function(){
    return JSON.parse(window.localStorage.getItem("shopInfo")||"{}")
}
shopTools.save=function () {
    window.localStorage.setItem("shopInfo",JSON.stringify(shop))
}
    
export default shopTools