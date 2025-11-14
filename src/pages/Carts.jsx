import React from 'react'
import { Trash2, ShoppingCart } from 'lucide-react'

function Carts({ carts, setCarts }) {

    // ฟังก์ชันลบสินค้าออกจาก carts
    const handleRemove = (id) => {
        setCarts(carts.filter(cart => cart.id !== id))
    }

    return (
        <div className="py-12 min-h-screen  text-zinc-100">
            <div className="container mx-auto w-full max-w-[1290px] px-4">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-zinc-100 mb-3">Your Cart</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {carts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-zinc-400">
                        <ShoppingCart className="w-12 h-12 mb-4 opacity-60" />
                        <p className="text-lg">Your cart is empty</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {carts.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-zinc-800 border border-zinc-700 rounded-2xl shadow-lg shadow-zinc-900/50 overflow-hidden hover:shadow-zinc-800/70 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Product Image */}
                                <div className="relative w-full h-56 bg-zinc-700 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-zinc-600/40 rounded-xl flex items-center justify-center">
                                        <span className="text-zinc-400 text-2xl font-bold opacity-70">
                                            150x150
                                        </span>
                                    </div>

                                    {/* ปุ่มลบสินค้า */}
                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all cursor-pointer shadow-md shadow-red-500/30 active:scale-95"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="text-zinc-100 text-base font-medium text-center mb-4 h-12 flex items-center justify-center line-clamp-2">
                                        {item.title || item.name}
                                    </h3>

                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
                                            ${item.price ? item.price.toFixed(2) : '0.00'}
                                        </span>
                                    </div>

                                    <div className="text-center">
                                        <span className="inline-block px-4 py-1 bg-green-100/10 text-green-400 rounded-full text-sm font-medium">
                                            Quantity: {item.quantity}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Carts
