import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { cartItemsType } from '../../types/types';
import './cart.css'
import { MdCancel, MdDelete } from 'react-icons/md'
import Empty from '../../images/empty.png'
import { setOpen, removeItem, incrementItem, decrementItem } from '../../reducers/cartSlice';


function Cart() {

    const Cart: cartItemsType = useSelector((state: RootState) => state.cart)

    const dispatch = useDispatch()
    const LimitedDesc = (val: string): string => {
        let newVal: string = '';
        for (let i = 0; i < 67; i++) {
            newVal += val[i];
        }
        return newVal + ' .....'
    }

    const TotalPrice = () => {
        let price = 0
        for (let j = 0; j < Cart.cartItems.length; j++) {
            price += Cart.cartItems[j].price * Cart.cartItems[j].value
        }
        return price
    }

    const TotalItems = () => {
        let items = 0;
        for (let k = 0; k < Cart.cartItems.length; k++) {
            items += Cart.cartItems[k].value
        }
        return items
    }
    return (
        <div className='cart' style={{ marginRight: Cart.isOpen ? '0' : '-550px' }}>
            <div className='cart_first_column'>

                <div className='cancel_div'>
                    <MdCancel className='cancel_icon' onClick={() => dispatch(setOpen(false))} size={40} />
                </div>
                <div className='total_price_div'>
                    <div className='total_price'>Total Price: <span style={{ fontWeight: 900 }}>$ {TotalPrice()}</span></div>
                    <div className='total_price'>Total Items: <span style={{ fontWeight: 900 }}>{TotalItems()}</span></div>
                </div>

                <h1 className='cartHead'>Shopping Cart</h1>
            </div>
            <div className='cart_items_div'>
                {
                    Cart.cartItems.length === 0 ?
                        <div className='empty_cart_div'>
                            <div className='empty_cart_img_div'>
                                <img src={Empty} width='150px' />
                            </div>
                            <h2>Your cart is currently empty !</h2>
                        </div>
                        :
                        Cart.cartItems.map((val, ind) => {
                            return (
                                <div key={ind} className='card_item'>
                                    <div className='cart_img_main_div'>
                                        <div className='cart_img_div'>
                                            <img src={val.image} alt='cart_img' />
                                        </div>
                                    </div>
                                    <div className='cart_content_row'>
                                        <div className='title_div'>
                                            <h4>{val.title}</h4>
                                            <div className='add_sub_div'>
                                                <span onClick={() => dispatch(incrementItem(val.id))}>+</span>
                                                <span onClick={() => dispatch(decrementItem(val.id))}>-</span>
                                            </div>
                                        </div>
                                        <p>{LimitedDesc(val.description)}</p>
                                        <div className='delete_item_icon_div'>
                                            <h4>$ {val.price}</h4>
                                            <p>Qunatity: {val.value}</p>
                                            <MdDelete onClick={() => dispatch(removeItem(val.id))} size={25} className='delete_item_icon' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
}

export default Cart;