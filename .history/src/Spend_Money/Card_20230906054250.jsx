import React, { useEffect, useState } from 'react'
import Cart from './Cart';
const products = [
    {
        id: 1,
        name: "Basic Tee 1",
        imageSrc:
            "https://img.thesitebase.net/10379/10379579/products/ver_1007658a0c4b49a8a47e8963424c97d54/0x2048@16833667793670629d93.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
    },
    {
        id: 2,
        name: "Basic Tee 2",
        imageSrc:
            "https://xtee.vn/wp-content/uploads/2021/11/BSX750D.png",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$25",

    },
    {
        id: 3,
        name: "Basic Tee 3",
        imageSrc:
            "https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d1-tieu.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$30",

    },
    {
        id: 4,
        name: "Basic Tee 4",
        imageSrc:
            "https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d2-vang.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$40",
    },
    {
        id: 5,
        name: "Basic Tee 5",
        imageSrc:
            "https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d2-vang.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$26",
    },
    {
        id: 6,
        name: "Basic Tee 6",
        imageSrc:
            "https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d2-vang.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$34",
    },
    {
        id: 7,
        name: "Basic Tee 7",
        imageSrc:
            "https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d2-vang.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$29",
    },
    {
        id: 8,
        name: "Basic Tee 8",
        imageSrc:
            "https://thoitrangmantis.com/wp-content/uploads/2019/01/ao-phong-co-tron-meo-3d2-vang.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$44",
    },
];


export default function Card() {
    const [showCart, setShowCart] = useState(false);
    const [count, setCount] = useState(0);
    const [productList, setProductList] = useState(() => {
        const products = JSON.parse(localStorage.getItem("productList")) || [];
        return products;
    });

    // ham load du lieu
    const loadData = (newList) => {
        setProductList(newList);
    }

    // ham hien form cart
    const handleShow = () => {
        setShowCart(true);
    }
    // ham an form cart
    const handleClose = () => {
        setShowCart(false);
    }
    // ham add to cart
    const addToCart = (id) => {
        const product = products.find(p => p.id === id);
        const addProduct = { ...product, quantity: 1 };
        const index = productList.findIndex(p => p.id === addProduct.id);
        if (index == -1) {
            // neu sp chua co trong gio hang thi them moi
            productList.push(addProduct);
            setProductList(productList);
            setCount(count + 1);
            alert("Thêm vào giỏ hàng thành công!")
            localStorage.setItem("productList", JSON.stringify(productList));
            return;
        } else {
            // neu da co roi thi tang so luong len 1
            productList[index].quantity += 1;
            localStorage.setItem("productList", JSON.stringify(productList))
            return;
        }
    }
    // ham hien thi count tren item shopping cart
    const showCountProduct = (productList) => {
        setCount(productList.length);
    }
    useEffect(() => {
        showCountProduct(productList);
    }, [productList.length])
    return (
        <>
            {showCart ? (<Cart handleClose={handleClose} addToCart={addToCart} productList={productList} loadData={loadData} />) : (<></>)}
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className='header'>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Shopping Cart
                        </h2>
                        <div className='cart-count'>
                            <i className="fa-solid fa-cart-shopping" onClick={handleShow} style={{ fontSize: 25 }}></i>
                            <span className='count-product' style={{ color: "red" }}>{count}</span>
                        </div>
                    </div>


                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative"
                                style={{
                                    border: "1px solid #efefef",
                                    padding: "5px 5px 20px",
                                    borderRadius: 5,
                                }}
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between show-product">
                                    {/* <div> */}
                                    {/* <h3 className="text-sm text-gray-700"> */}
                                    <h3 href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </h3>
                                    <p className="text-sm font-medium text-gray-900">
                                        {product.price}
                                    </p>
                                    {/* </h3> */}
                                    {/* </div> */}
                                </div>
                                <div>
                                    <button onClick={() => addToCart(product.id)}
                                        className="btn-addToCart">
                                        Add to card
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
