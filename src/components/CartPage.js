import React from 'react';

export default function CartPage({ cart, setCart }) {
    const getTotalSum = () => {
        return cart.reduce(
            (sum, { cost, quantity }) => sum + cost * quantity,
            0
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
    };

    const removeFromCart = (productToRemove) => {
        setCart(
            cart.filter((product) => product !== productToRemove)
        );
    };
    return (
        <>
            <h1>Cart</h1>
            {cart.length > 0 && (
                <button onClick={clearCart}>Clear</button>
            )}
            <div className="products">
                {cart.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>${product.cost}</h4>
                        <h4 className={product.stock <= 10 ? "lowStock" : "highStock"}>Stock: {product.stock}</h4>
                        <h3>{product.stock < 10 ? "Low Stock!" : ""}</h3>
                        <input
                            value={product.quantity}
                            onChange={(e) =>
                                setQuantity(
                                    product,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                        <img style={{height: '100px', width: '100px'}} src={product.image} alt={product.name} />
                        <button onClick={() => removeFromCart(product)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div>Total Cost: ${getTotalSum()}</div>
            {cart.length === 0 ? " " : <button onClick={() => alert('Thank you for purchasing from us!')}>
                Finish
            </button>}
        </>
    );
}