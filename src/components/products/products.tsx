import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './products.css'
import { RootState } from '../../store/store';
import { ProductsType } from '../../types/types';
import { addItem } from '../../reducers/cartSlice';

function Products() {

    const dispatch = useDispatch()
    const Products: { productsList: ProductsType[], isLoading: boolean } = useSelector((state: RootState) => state.products)


    if (Products.isLoading) {
        return <div className="loader"></div>
    }
    return (
        <div className='main_product'>

            <div className='products'>
                {
                    Products.productsList.map((val, ind) => {
                        return (
                            <div key={val.id} className='product_item'>
                                <div className='img_div'>
                                    <div className='hover_div'>
                                        <div onClick={() => dispatch(addItem(val))} className='add_to_cart'>
                                            Add to Cart
                                        </div>
                                    </div>
                                    <img src={val.image} alt="img" />
                                </div>
                                <div className='details'>
                                    <div className='title_div'>
                                        <h3>{val.title}</h3>
                                        <h3>$ {val.price}</h3>
                                    </div>
                                    <p>{val.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;