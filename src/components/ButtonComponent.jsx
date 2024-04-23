import React from 'react'

export const ButtonComponent = ({text , onClick}) => {
  
    return(
        <button className='bg-neutral-900 w-4/5 mt-6 rounded-lg font-semibold text-white py-2 hover:bg-slate-900' onClick={onClick} type='button'>{text}</button> 
    );

}
