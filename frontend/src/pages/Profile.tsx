import React from 'react'
import { useState, useEffect } from 'react';
import defaultuserimg from '../assets/defaultuserimg.png'
import coin from '../assets/coin.png'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from 'axios';
import c1 from '../assets/c1.jpeg'
import c2 from '../assets/c2.jpeg'
import c3 from '../assets/c3.jpeg'
import c4 from '../assets/c4.jpeg'
import c5 from '../assets/c5.jpeg'
import c6 from '../assets/c6.jpeg'
import c7 from '../assets/c7.jpeg'
import c8 from '../assets/c8.jpeg'

const Profile = () => {
    const navigate = useNavigate();
    const backtoHome=()=>{
        navigate('/');
    };
    interface Blog {
        id: number;
        title: string;
        content: string;
        author: string;
        liked_by: string[];
        read_time: number;
    }
    const [blogData, setBlogData] = useState<Blog[] | undefined>(undefined);
    const [filteredBlogData, setFilteredBlogData] = useState<Blog[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogs/');
                setBlogData(response.data);
                
                setLoading(false);
            } catch (error: any) {
                setLoading(false);
            }
        };

        fetchBlogData();
        
    }, []);
    
    useEffect(()=>{
        if (blogData) {
            const ffilteredBlogData = blogData.filter((post, index) => post.author === "0x0");
    setFilteredBlogData(ffilteredBlogData);}
    },[blogData]);
    

    return (
        <div className='text-white poppins-regular'>
            <div className='w-screen h-[6.5vh] flex justify-start text-white p-2'>
                <button onClick={() => backtoHome()}><KeyboardBackspaceIcon /></button>
            </div>
            <div className='text-white poppins-regular flex justify-center flex-col'>
                <div className='grad text-white min-h-[8vh] w-screen rounded-none'></div>
                <div className='flex items-center min-h-[18vh]'>
                    <div className='w-[35vw] flex justify-center'>
                        <img width={'105px'} src={defaultuserimg} alt="" />
                    </div>
                    <div className='flex flex-col w-[65vw] justify-start items-start gap-4 p-3'>
                        <p className='ml-3'>username</p>
                        <div className='grad flex gap-2 w-fit border'>
                            <img  width={'22px'} src={coin} alt="" />
                            <p>10000</p>
                        </div>
                    </div>
                    
                </div>
                <div className='flex p-4 w-[80vw]'>
                        <p>bio</p>
                    </div>
            </div>
            <div className='w-screen  h-[6.5vh] flex justify-start text-white p-2 border-t border-b border-white'>
                <p>Blogs</p>
            </div>
            <div className='user_blogs flex gap-2 w-screen overflow-x-scroll p-2'>
        {filteredBlogData ? (
                    filteredBlogData.map((post, index) => (
                        <div className="user_blog min-w-[80vw] flex flex-col gap-2 justify-center items-center">
        <img src="https://flowbite.com/docs/images/examples/image-1@2x.jpg" className='rounded-3xl' alt="" />

        <p className='border border-white rounded-3xl px-4 py-2 w-auto'>{post.title}</p>
        </div>
                    ))
                ) : (
                    <div>No blog data available</div>
                )}
            </div>
            <div className='w-screen h-[6.5vh] flex justify-start text-white p-2 border-t border-b  border-white'>
            <p>NFT'S</p>
            </div>
            <div className='flex flex-wrap'>
            <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c1} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c2} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c3} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c4} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c5} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c6} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c7} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                <div className='p-4 w-[50vw] border border-white flex items-center justify-center'>
                    <div className='h-[160px] overflow-hidden'>
                        <div>
                            <img height={'120px'} width={'137px'} className=' overflow-hidden rounded-t-3xl h-[120px] w-[137px]' src={c8} alt="" />
                        </div>
                        <div className='bg-[#05B6EC] w-[137px] rounded-b-3xl flex justify-center items-center gap-3 p-2'>
                            <img width={'17px'} src={coin} alt="" />
                            <p>763</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            </div>
    )
}

export default Profile
