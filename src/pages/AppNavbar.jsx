import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function AppNavbar({ product = [], carts = [] }) {
    const linkStyle = "py-3 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-600 bg-gray-700 text-gray-100 hover:bg-gray-600 hover:border-gray-500 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/30 focus:outline-none focus:bg-gray-600 transition-all duration-300 ease-in-out relative"
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        localStorage.removeItem('isLoggedIn')
        navigate('/login')
    }

    return (
        <div className='flex justify-center gap-3 mt-10 flex-wrap px-4'>
            <Link to={'/home'} className={linkStyle}>Home</Link>
            <Link to={'/todos'} className={linkStyle}>Todos</Link>
            <Link to={'/calculator'} className={linkStyle}>Calculator</Link>
            <Link to={'/animation'} className={linkStyle}>Animation</Link>
            <Link to={'/product'} className={linkStyle}>
                Product ({product.length})
            </Link>

            <Link to={'/carts'} className={linkStyle}>
                <span>Carts</span>
                {carts.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md shadow-red-500/30">
                        {carts.length}
                    </span>
                )}
            </Link>

            <Link to={'/components'} className={linkStyle}>Components</Link>

            <button 
                onClick={handleLogout}
                className="py-3 px-6 cursor-pointer inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-600 bg-red-700 text-white hover:bg-red-600 hover:border-red-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 focus:outline-none focus:bg-red-600 transition-all duration-300 ease-in-out"
            > 
                Logout
            </button>
        </div>
    )
}

export default AppNavbar