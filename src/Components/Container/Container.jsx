import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-width-full bg-amber-900 pt-[44px] px-[32px]'>
    {children}
    </div>
  )
}

export default Container