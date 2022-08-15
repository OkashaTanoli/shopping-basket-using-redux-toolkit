import { createServer } from "miragejs";
import White from '../images/white.png'
import Skin from '../images/skin.png'
import Brown from '../images/brown.png'
import Black from '../images/black.png'
import Blue from '../images/blue.png'
import Gray from '../images/gray.png'
import { ProductsType } from "../types/types";

const Products: Array<ProductsType> = [
    {
        id: 1,
        title: 'White T-Shirt',
        description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves',
        price: 150,
        image: White
    },
    {
        id: 2,
        title: 'Blue T-Shirt',
        description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves',
        price: 130,
        image: Blue
    },
    {
        id: 3,
        title: 'Gray T-Shirt',
        description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves',
        price: 175,
        image: Gray
    },
    {
        id: 4,
        title: 'Black T-Shirt',
        description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves',
        price: 139,
        image: Black
    },
    {
        id: 5,
        title: 'Brown T-Shirt',
        description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves',
        price: 120,
        image: Brown
    },
    {
        id: 6,
        title: 'Skin T-Shirt',
        description: 'A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves',
        price: 200,
        image: Skin
    },
]

export const testServer = () =>{
    createServer({
        routes() {
            this.namespace = 'api'
            this.get('/products', () => {
                return Products
            })
        }
    })
    return createServer
}