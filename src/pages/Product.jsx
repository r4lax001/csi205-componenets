import { ShoppingCart, Check, Plus } from 'lucide-react'

function Product({ product, carts, setCarts }) {
    
    const handleAddToCart = (item) => {
        const existingItem = carts.find(cart => cart.id === item.id)
        if (!existingItem) {
            setCarts([...carts, { ...item, quantity: 1 }])
        }
    }

    const isInCart = (productId) => carts.some(cart => cart.id === productId)
    const getQuantityInCart = (productId) => {
        const item = carts.find(cart => cart.id === productId)
        return item ? item.quantity : 0
    }
    
    return (
        <div className="py-12 min-h-screen  text-zinc-100">
            <div className="container mx-auto w-full max-w-[1290px] px-4">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-zinc-100 mb-3">Our Products</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-400 mx-auto rounded-full"></div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {product.map((item) => {
                        const inCart = isInCart(item.id)
                        const quantity = getQuantityInCart(item.id)
                        
                        return (
                            <div 
                                key={item.id} 
                                className="group bg-zinc-800 border border-zinc-700 rounded-2xl shadow-lg shadow-zinc-900/50 overflow-hidden hover:shadow-zinc-800/70 transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Product Image */}
                                <div className="relative w-full h-56 bg-zinc-700 flex items-center justify-center">
                                    {inCart && (
                                        <div className="absolute top-3 right-3 bg-zinc-900 rounded-full p-2 shadow-md shadow-zinc-950">
                                            <ShoppingCart className="w-5 h-5 text-green-400" />
                                        </div>
                                    )}
                                    <div className="w-32 h-32 bg-zinc-600/40 rounded-xl flex items-center justify-center">
                                        <span className="text-zinc-400 text-2xl font-bold opacity-70">
                                            150x150
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Product Info */}
                                <div className="p-6">
                                    <h3 className="text-zinc-100 text-base font-medium text-center mb-4 h-12 flex items-center justify-center line-clamp-2">
                                        {item.title || item.name}
                                    </h3>
                                    
                                    {/* ราคา (ให้เด่นขึ้นด้วย gradient text) */}
                                    <div className="flex items-center justify-center gap-2 mb-6">
                                        <span className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
                                            ${item.price ? item.price.toFixed(2) : '0.00'}
                                        </span>
                                    </div>
                                    
                                    {/* Quantity Badge */}
                                    {inCart && quantity > 0 && (
                                        <div className="text-center mb-3">
                                            <span className="inline-block px-4 py-1 bg-green-100/10 text-green-400 rounded-full text-sm font-medium">
                                                {quantity} in cart
                                            </span>
                                        </div>
                                    )}
                                    
                                    {/* Add to Cart Button */}
                                    <button
                                        onClick={() => !inCart && handleAddToCart(item)}
                                        disabled={inCart}
                                        className={`w-full py-3 px-4 rounded-xl font-medium transition-all cursor-pointer duration-300 flex items-center justify-center gap-2 transform active:scale-95 ${
                                            inCart 
                                                ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white opacity-70 cursor-not-allowed' 
                                                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-pink-500/30'
                                        }`}
                                    >
                                        {inCart ? (
                                            <>
                                                <Check className="w-5 h-5" />
                                                Added
                                            </>
                                        ) : (
                                            <>
                                                <Plus className="w-5 h-5" />
                                                Add to Cart
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product
