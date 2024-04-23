import React from 'react'

export const Balance = ({balance}) => {
  return (
    <div className='flex items-center px-10 py-7 font-semibold text-xl'>
        <div className=''>Your Balance</div>
        <div className='pl-4'>Rs . {balance}</div>
    </div> 
  )
}
