import React from 'react'

export default function Cart({ handleClose, addToCart, productList, loadData }) {
    // ham tat form cart
    const handleCloseForm = () => {
        handleClose();
    }

    // ham xoa san pham
    const removeProduct = (id) => {
        const newList = productList.filter(p => p.id !== id);
        localStorage.setItem('productList', JSON.stringify(newList));
        loadData(newList);
    }
    // ham giam so luong
    const handleDecrease = (id) => {
        const newList = productList.map(p => {
            if (p.id === id) {
                if (p.quantity > 0) {
                    return { ...p, quantity: p.quantity - 1 }
                } else {
                    // const newList = productList.filter(p => p.id !== id);
                    const index = productList.findIndex(p => p.id === id)
                    console.log(index);
                    productList.splice(productList[index], 1);
                    localStorage.setItem('productList', JSON.stringify(productList));
                    loadData(productList);
                }
            }
            return p;
        })
        localStorage.setItem('productList', JSON.stringify(newList));
        loadData(newList);
    }
    // ham tang so luong
    const handleIncrease = (id) => {
        const newList = productList.map(p => {
            if (p.id === id) {
                return { ...p, quantity: p.quantity + 1 }
            }
            return p;
        })
        localStorage.setItem('productList', JSON.stringify(newList));
        loadData(newList);
    }
    // ham tinh tong
    const handleTotal = () => {
        let total = 0;
        productList.map(p => {
            total += p.price * p.quantity;
        })
        return total;
        // const total = productList.reduce((total, p) => { return total += (p.quantity * p.price) }, 0)
        // return total;
    }
    return (
        <div>
            <div
                className="relative z-10"
                aria-labelledby="slide-over-title"
                role="dialog"
                aria-modal="true"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                        <div className="flex items-start justify-between">
                                            <h2
                                                className="text-lg font-medium text-gray-900"
                                                id="slide-over-title"
                                            >
                                                Shopping cart
                                            </h2>
                                            <div className="ml-3 flex h-7 items-center">
                                                <button
                                                    type="button"
                                                    className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                >
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only" >Close panel</span>
                                                    <svg onClick={handleCloseForm}
                                                        className="h-6 w-6"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <div className="flow-root">
                                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                    {productList.length === 0 ? (<li>No Product</li>) : (productList.map(pro => (
                                                        <li className="flex py-6" key={pro.id}>
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img
                                                                    src={pro.imageSrc}
                                                                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                                                    className="h-full w-full object-cover object-center"
                                                                />
                                                            </div>
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            <a href="#">{pro.name}</a>
                                                                        </h3>
                                                                        <p className="ml-4">{pro.price}</p>
                                                                        <p className="text-gray-500"> <button onClick={() => handleDecrease(pro.id)} style={{ width: 20, border: "1px solid #000", textAlign: "center" }} >-</button> {pro.quantity}<button onClick={() => handleIncrease(pro.id)} style={{ width: 20, border: "1px solid #000", textAlign: "center" }} value="+">+</button></p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">

                                                                    <div className="flex">
                                                                        <button onClick={() => removeProduct(pro.id)}
                                                                            type="button"
                                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )))}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <p>Subtotal</p>
                                            <p>{handleTotal}</p>
                                        </div>

                                        <div className="mt-6">
                                            <a onClick={handleCloseForm}
                                                href="#"
                                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                            >
                                                Close
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
