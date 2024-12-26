import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between px-5'>
        <div className='w-1/3 flex justify-center'>
            <p className='text-xs'>
            © 2024 MUNCH AND GO | All Rights Reserved.
            </p>
        </div>
        <div className='w-1/3 flex justify-center'>

    <img src="/Logoo.png" alt="logo" className='h-28 object-contain' />
</div>
<div className='w-1/3 flex justify-center'>

<p className='text-xs'>Munch and Go</p>
</div>
    </div>
  )
}

export default Footer;