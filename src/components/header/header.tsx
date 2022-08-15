import React from 'react';
import './header.css'
import OutfitLogo from '../../images/logo.png'
import { MdShoppingCart } from 'react-icons/md'
import { setOpen } from '../../reducers/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { cartItemsType } from '../../types/types';

const Header = () => {

    const Cart: cartItemsType = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch()
    return (
        <div className='header'>
            <img src={OutfitLogo} alt="logo" />
            <div className='cart_icon_div' onClick={() => dispatch(setOpen(true))}>
                <div className='total_items'>{Cart.cartItems.length}</div>
                <MdShoppingCart className='cart_icon' size={25} />
            </div>
        </div>
    );
};

export default Header;