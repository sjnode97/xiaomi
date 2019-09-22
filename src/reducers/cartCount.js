import shopTools from "../tos/shoptools"
export default function (state={},action) {
    let goods = action.data
    let newS = Object.assign({},state)
    switch (action.type) {
        case "CART_ADD":
            shopTools.addUpdate(goods)
            return shopTools.getShop()
        case "CART_DEL":
            shopTools.delete(goods)
            return shopTools.getShop()
        case "CART_GOODS_NUM":
            let newState = Object.assign({},newS,state,goods)
            return newState
        case "GET_USER_INFO":
            let newMapInfo = Object.assign({},newS,action.map)
            console.log(action);
            return newMapInfo
        default:
            return shopTools.getShop()
    }
}