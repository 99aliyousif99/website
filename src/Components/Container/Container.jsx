import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-width-full bg-amber-900 '>
    {children}
    </div>
  )
}

export default Container