import React from 'react'
import ProfileCard from '../../components/ProfileCard/profileCard'
import Card from '../../components/Card/card'
import VideoFileIcon from '@mui/icons-material/VideoFile';
import PhotoIcon from '@mui/icons-material/Photo';
import ArticleIcon from '@mui/icons-material/Article';
import Advertisement from '../../components/Advertisement/advertisement';
import Post from '../../components/Post/post';

const Feeds = () => {
  return (
    <div className='px-5 xl:px-50 py-9 flex gap-5 w-full mt-5 bg-gray-100'>
        {/* left */}
        <div className='w-[21%] sm:block sm:w-[23%] hidden py-5 '>
            <div className='h-fit'>
                <ProfileCard />
            </div>
            <div className='w-full my-5'>  
                <Card padding={1}>
                     <div className='w-full flex justify-between'>
                      <div>Profile Viewers</div>
                      <div className='text-blue-900'>23</div>
                     </div>
                     <div className='w-full flex justify-between'>
                      <div>Post Impressional</div>
                      <div className='text-blue-900'>80</div>
                     </div>
                </Card>
            </div>
        </div>

       {/* middle */}
        <div className='w-[100%] py-5 sm:w-[50%]'>

         {/* Post section */}
            <div>
              <Card padding={1}>
                <div className='flex gap-2 items-center'>
                  <img src="/src/assets/img3.jpg" className='rounded-4xl w-13 h-13 border-2 border-white cursor-pointer' />
                  <div className='w-full border-1 py-3 px-3 rounded-3xl cursor-pointer hover:bg-gray-100'>Start a post</div>
                </div>

                <div className='w-full flex mt-3'>
                    <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100 '><VideoFileIcon sx={{color: "green"}}/>  Video</div>
                    <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100 '><PhotoIcon sx={{color: "blue"}}/>photo</div>
                    <div className='flex gap-2 p-2 cursor-pointer justify-center rounded-lg w-[33%] hover:bg-gray-100 '><ArticleIcon sx={{color: "orange"}}/>Article</div>
                </div>
              </Card>
            </div>

            <div className='border-b-1 border-gray-400 w-[100%] my-5 '/>
            
            <div className='w-full flex flex-col gap-5'>
              <Post />
            </div>

        </div>
   
        {/* right */} 
        <div className='w-[26%] py-5 hidden md:block '>
           
           <div>
             <Card padding={1}>
              <div className='text-xl'>Linkedin News</div>
              <div className='text-gray-600'>Top stories</div>
              <div className='my-1'>
                <div className='text-md'>Buffett to remain Berkshir chair</div>
                <div className='text-xs text-gray-400'>2h ago</div>
              </div>
              <div className='my-1'>
                <div className='text-md'>Foreign investment surge again</div>
                <div className='text-xs text-gray-400'>3h ago</div>
              </div>
             </Card> 
           </div>
          
            {/* Advertisement section */}
           <div className='my-5 sticky top-19'>
             <Advertisement />
           </div>

        </div>
    </div>
  )
}

export default Feeds