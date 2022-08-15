import React, { useEffect } from 'react';
import './App.css';
import Products from './components/products/products';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncProducts } from './reducers/productsSlice';
import Header from './components/header/header';
import Cart from './components/cart/cart';
import { RootState } from './store/store';

function App() {

  const dispatch = useDispatch()
  const cartIsOpen: boolean = useSelector((state: RootState) => state.cart.isOpen)

  useEffect(() => {
    dispatch(AsyncProducts())
    // fetch('/api/products')
    //   .then((data) => data.json())
    //   .then((data) => {
    //     dispatch(ProductsAdd(data))
    //   })
  }, [])

  return (
    <div className="App" id={cartIsOpen ? 'hidden' : 'auto'} >
      <Header />
      <Products />
      <Cart />
    </div >
  );
}

export default App;
