import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import Navbar from './Navbar';
import Bar from './Bar';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import ConnectWallet from './ConnectWallet';

interface Blog {
    id: number;
    title: string;
    content: string;
    author: string;
    liked_by: string[];
    read_time: number;
}
const Home: React.FC = () => {
    const [blogData, setBlogData] = useState<Blog[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/blogs/');
                setBlogData(response.data);
                setLoading(false);
            } catch (error: any) {
                setError('Error fetching data: ' + error.message);
                setLoading(false);
            }
        };

        fetchBlogData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!blogData) {
        return <div>No data available</div>;
    }

    return (
        <div className='w-[100vw] overflow-hidden'>
            <Navbar />
            <Bar />
            {/* <ConnectWallet/> */}
            <div className="blog-cards mt-[14vh] mb-[10vh] flex flex-col p-4">
                {blogData ? (
                    blogData.map((post, index) => (
                        <BlogCard
                            key={index}
                            id={post.id}
                            title={post.title}
                            date={'03/06/2024'}
                            tags={['HTML', 'CSS', 'JS']}
                            likes={post.liked_by.length}
                            content={post.content}
                            // comments={post.comments}
                            // commentsData={post.commentsData}
                            author={ post.author}
                            read_time={ post.read_time}
                        />
                    ))
                ) : (
                    <div>No blog data available</div>
                )}
            </div>
            <button
                type="button"
                className="fixed bottom-24 right-7 grad py-[0.4rem] px-[0.75rem]"
            >
<Link to="/write">
                <EditIcon fontSize={'large'} className="text-white mb-2" />
                </Link>
            </button>
        </div>
    );

};
export default Home;