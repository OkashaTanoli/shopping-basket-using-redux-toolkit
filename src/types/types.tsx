export type ProductsType = {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string
}

type cartItem = {
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    value: number,
}
export type cartItemsType = {
    cartItems: cartItem[],
    isOpen: boolean
}