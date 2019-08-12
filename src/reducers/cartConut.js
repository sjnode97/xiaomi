export default function (state={},action) {
    let goods = action.data
    switch (action.type) {
        case "CART_ADD":
            return "CART_ADD"
        case "CART_DEL":
            return "CART_DEL"
        case "CART_GOODS_NUM":
            return "CART_GOODS_NUM"
        default:
            return "sunjian"
    }
}