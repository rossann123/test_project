import React, { useState } from 'react';
import './App.css';
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";

const STORE_PAGE = 'StorePage';
const CART_PAGE = 'CartPage';
const ADMIN = 'AdminPage';

function App() {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(STORE_PAGE);

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const getCartTotal = () => {
        return cart.reduce(
            (sum, { quantity }) => sum + quantity,
            0
        );
    };

    return (
        <div className="App">
            <header>
                <button onClick={() => navigateTo(ADMIN)}>
                    Admin
                </button>
                <button onClick={() => navigateTo(STORE_PAGE)}>
                    Store
                </button>
                <button onClick={() => navigateTo(CART_PAGE)}>
                    My Cart ({getCartTotal()})
                </button>
            </header>
            {page === STORE_PAGE && (
                <StorePage cart={cart} setCart={setCart} />
            )}
            {page === CART_PAGE && (
                <CartPage cart={cart} setCart={setCart} />
            )}
        </div>
    );
}

export default App;