import React, { useState } from 'react'
const products = [
    {
        id: 1,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 2,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 3,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
    {
        id: 4,
        name: "Basic Tee",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "Black",
    },
];

const [showCart, setShowCart] = useState(false);
// ham hien form cart
const handleShow = () => {
    setShowCart(true);
}
export default function Card() {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className='header'>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                            Shopping Cart
                        </h2>
                        <i className="fa-solid fa-cart-shopping"></i>
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
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                            <p className="text-sm font-medium text-gray-900">
                                                {product.price}
                                            </p>
                                        </h3>
                                    </div>

                                </div>
                                <div>
                                    <button
                                        className=""
                                        style={{
                                            padding: 7,
                                            borderRadius: 5,
                                            border: "1px solid #adadad",
                                            width: "100%",
                                            backgroundColor: "#000",
                                            color: "#fff",
                                        }}
                                    >
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
