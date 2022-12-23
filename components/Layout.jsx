import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const Layout = ({ children }) => {
  return (<div className='wrapper max-w-[1440px] mx-auto h-[100vh]'>
    <SideBar/>
    <Header/>
    <section className='content'>
        {children}
    </section>
    </div>)
}

export default Layout