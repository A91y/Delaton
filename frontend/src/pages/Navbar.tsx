import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Navbar : React.FC = () => {
  return (
    <div className='flex items-center justify-between px-4 p-2 bg-midnight text-white 
    fixed top-0 left-0 right-0 z-10 h-[7vh]
   
    '>
      <div>
        
      <p className='text-xl poppins-regular'>Blogging</p>
   
      </div>
      <div className='flex gap-2'>
<MonetizationOnIcon/>
<p className='oleo-script-swash-caps-regular'>1278</p>
      </div>
    </div>
  )
}

export default Navbar;
