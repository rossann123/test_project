import React, { useState } from 'react';

const GROCERIES = 'Groceries';
const ALBUM_SHOP = 'Albums';

export default function Products({ setCart, cart }) {
    const [products] = useState([
        {
            category: GROCERIES,
            name: 'Diet Dr Pepper',
            cost: 2.23,
            stock: 6,
            image:
                'https://cdn.shopify.com/s/files/1/0275/8587/1895/products/55c1154f82cf0_6_download.png?v=1593015450',
        },
        {
            category: GROCERIES,
            name: 'Beef Jerky',
            cost: 1.77,
            stock: 0,
            image:
                'https://www.jacklinks.com/shop/pub/media/catalog/product/cache/6df2d0cad2bac7fbf8a69a16c12d71f6/u/b/ubb57geusegcfcwycicv_2.png',
        },
        {
            category: GROCERIES,
            name: 'Chocolate Milk',
            cost: 3.40,
            stock: 22,
            image:
                'https://cdn.shopify.com/s/files/1/0270/6410/7107/products/Screen-Shot-2019-10-24-at-2.18.41-PM_629x.gif?v=1573615589',
        },

        {
            category: ALBUM_SHOP,
            name: 'Manic by Halsey',
            cost: 19.99,
            stock: 34,
            image:
                'https://upload.wikimedia.org/wikipedia/en/c/ce/Halsey_-_Manic.png',
        },
        {
            category: ALBUM_SHOP,
            name: 'Heartbreak Weather by Niall Horan',
            cost: 13.99,
            stock: 12,
            image:
                'https://img.discogs.com/f7tV0IryjXmYrAtjcQ2tnQDwXzA=/fit-in/600x579/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15211806-1588537796-6445.jpeg.jpg',
        },
        {
            category: ALBUM_SHOP,
            name: 'Color Vision by MAX',
            cost: 11.99,
            stock: 33,
            image:
                'https://images.genius.com/574e26b47d512e4572602d5d168e6059.1000x1000x1.png',
        }
    ]);

    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find(
            (item) => product.name === item.name
        );
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            itemInCart = {
                ...product,
                quantity: 1,
            };
            newCart.push(itemInCart);
        }
        setCart(newCart);
    };

    const [category, setCategory] = useState(GROCERIES);

    const getProductsInCategory = () => {
        return products.filter(
            (product) => product.category === category);
    };

    return (
        <>
            Select Department:
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value={GROCERIES}>{GROCERIES}</option>
                <option value={ALBUM_SHOP}>{ALBUM_SHOP}</option>
            </select>
            <div className="products">
                {getProductsInCategory().map((product, idx) => (
                    <div className="product" key={idx} onClick={() => alert(product.name + "\n$ " + product.cost + "\nStock: " + product.stock)}>
                        <h3>{product.name}</h3>
                        <h4>${product.cost}</h4>
                        <h4 className={product.stock <= 10 ? "lowStock" : "highStock"}>Stock: {product.stock}</h4>
                        <img style={{height: '100px', width: '100px'}} src={product.image} alt={product.name} />
                        {product.stock === 0 ? " " : <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>}
                    </div>
                ))}
            </div>
        </>
    );
}