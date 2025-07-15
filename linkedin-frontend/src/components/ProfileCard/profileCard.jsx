import React from 'react'
import Card from '../Card/card'

const ProfileCard = () => {
  return (
   <Card padding={0}>
     <div className='relative h-25'>
        <div className='relative w-full h-22 rounded-md'>
            <img src="https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg" className='rounded-t-md h-full w-full' />
        </div>
        <div className='absolute top-14 left-6 z-10'>
           <img className='rounded-full border-4 h-16 w-16 border-white cursor-pointer' src="/src/assets/img3.jpg"/>
        </div>
     </div>
     <div className='p-5'>
        <div className='text-xl'>Md Danish Ansari</div>
        <div className='text-sm my-1'>Software Developer</div>
        <div className='text-sm my-1'>Delhi, India</div>
        <div className='text-sm my-1'>Google</div>

     </div>
   </Card>
  )
}

export default ProfileCard