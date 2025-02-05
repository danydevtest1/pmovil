import React from 'react'
import { Menu } from '../components/Menu'

export  function Layout({children}) {
  return (
    <div>
        <div className=''>
            <Menu/>
        </div>
        {children}
    </div>
  )
}
