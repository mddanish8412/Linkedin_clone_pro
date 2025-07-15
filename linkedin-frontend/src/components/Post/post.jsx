import React from 'react'
import Card from '../Card/card'
import { useState } from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
const Post = () => {

    const [seeMore, setSeeMore] = useState(false);

    const desc = `     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  return (
    <Card padding={1}>
        <div className='flex gap-3 p-4'>
              <div className='w-12 h-12 rounded-4xl'>
                <img src="/src/assets/img3.jpg" className='rounded-4xl w-12 h-12 border-2 border-white cursor-pointer' />
              </div>
              <div>
                <div className='text-lg font-semibold'>Dummy User</div>
                <div className='text-xs text-gray-500'>SDE-I Eng. @Google</div>
              </div>
        </div>

        <div className='text-md p-4 my-3 whitespace-pre-line flex-grow'>
        {seeMore? desc:`${desc.slice(0, 50)}...`} <span onClick={()=> setSeeMore(prev =>!prev)} className='cursor-pointer text-gray-500'>{seeMore?"See Less": "See More"}</span>
        </div>
 
          <div className='w-[100%] h-[300px] ' >
                  <img className='w-full h-full ' src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg" alt="" />
          </div>
        
          <div className='my-2 p-4 flex justify-between items-center'>
               <div className='flex gap-1 items-center'>
                  <ThumbUpIcon sx={{color: "blue", fontSize: 12}} /> <div className='text-sm text-gray-600'>1 Likes</div>
               </div>
                <div className='flex gap-1 items-center'>
                   <div className='text-sm text-gray-600'>2 Comments</div>
               </div>
          </div>

          <div className='flex p-1'>
              <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100 '><ThumbUpIcon sx={{fontSize:32, color: "blue"}} /> <span>Like</span></div>
              <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100 '><CommentIcon sx={{fontSize:32,}} /> <span>Comment</span></div>
              <div className='w-[33%] justify-center flex gap-2 items-center border-r-1 border-gray-100 p-2 cursor-pointer hover:bg-gray-100 '><SendIcon sx={{fontSize:32,}} /> <span>Share</span></div>
          </div>

         {/* Cemment sections */}
         <div className='p-4 w-full'>
            <div className='flex gap-3 items-center'>
                <img className='rounded-full w-12 h-12 border-2 border-white cursor-pointer' src="/src/assets/img3.jpg" />

                <form className='w-full'>
                  <input placeholder='Add a comment...' className='w-full border-1 py-3 px-5 rounded-3xl hover:bg-gray-100' />
                </form>
            </div>
         </div>

     </Card>   
  )
}

export default Post