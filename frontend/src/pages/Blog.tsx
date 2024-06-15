import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

interface Blog {
    id: number;
    title: string;
    content: string;
    author: string;
    liked_by: string[];
    read_time: number;
}

const BlogDetail: React.FC = () => {
    const navigate = useNavigate();
    const backtoHome=()=>{
        navigate('/');
    };
    const { id } = useParams<{ id: string }>();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get<Blog>(`http://127.0.0.1:8000/api/blogs/${id}/`);
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching blog data');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (<>
        <div className='w-screen h-[6.5vh] flex justify-start text-white p-2'>
            <button onClick={()=>backtoHome()}><KeyboardBackspaceIcon  /></button>            
        </div>
        <div className="w-screen h-fit blog-detail text-white">
            <div className='text-center border-solid border-[1px] p-2 border-white'>
                <h2 className='font-bold text-xl'>{blog.title}</h2>
                <p>Author: {blog.author}</p>
                <div>                
                <p>{(blog.read_time < 2) ? `${blog.read_time} min` :`${blog.read_time} mins`}</p> </div>
            </div>
            <div className='preview text-white p-4 text-left' dangerouslySetInnerHTML={{ __html: blog.content }}></div>


        </div>
        <div className='text-white grad flex-col gap-2 px-[0.4rem] fixed right-0 top-[35vh]'>
        <div className="flex-col gap-0">
            <button><ThumbUpOffAltIcon/></button>
            <p className='font-extralight'>{blog.liked_by.length}</p>
            </div>
            <div className="flex-col">
                <button><InsertCommentOutlinedIcon /></button>                
            </div>
            <button><IosShareOutlinedIcon /></button>
        </div>
    </>
    );
};

export default BlogDetail;
