import React from 'react'
import { Outlet } from 'react-router-dom'

import AppHeader from '../../pages/AppHeader'
import AppNavbar from '../../pages/AppNavbar'
import AppFooter from '../../pages/AppFooter'

function AppLayouts({ product, carts, setCarts }) {
  return (
    <div className='flex justify-center items-center mt-10  '>
      <div className='w-full max-w-[1290px] h-full  border border-[#3f3f46] bg-[#27272a] shadow-md rounded-2xl text-center p-4'>
        <AppHeader />
        <AppNavbar product={product} carts={carts} />
        <Outlet context={{ product, carts, setCarts }} />
        <AppFooter />
      </div>
    </div>
  )
}

export default AppLayouts