import React from 'react'

const Layout = ({children}) => {

    const data = {
        color: "white"
    }


    const style = {
        backgroundColor: data.color,
       }


  return (
    <div style={style} className='md:ml-64 '>
        {children}
    </div>
  )
}

export default Layout;