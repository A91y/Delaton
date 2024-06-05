import React, { useState } from 'react';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import { Sidebar } from 'primereact/sidebar';

import { Link } from 'react-router-dom';

interface Comment {
    comment: string;
    userName: string;
    profilePic: string;
    time: string;
}

interface MyCardProps {
    title: string;
    date: string;
    tags: string[];
    likes: number;
    id:number;
    // comments: number;
    // library: number;
    // shares: number;
    // commentsData: Comment[];
    author: string;
    read_time: number;
    content: string;
}



const BlogCard: React.FC<MyCardProps> = (props) => {
    const [visibleBottom, setVisibleBottom] = useState<boolean>(false);

    return (
        <div className='blog-card bg-midnight league-spartan tracking-widest items-start blog-card flex poppins-regular  flex-col gap-2 py-2 text-white'>
            <div className='flex items-center gap-2 justify-start text-left'>
                <p className='text-sm font-extralight tracking-widest'>{props.author}</p>
                <p>.</p>
                <p className='text-sm font-extralight'>{props.date}</p>
            </div>

            <Link to={`/blogs/${props.id}`}>
                <p className='font-medium text-xl text-left'>{props.title}</p>
            </Link>

            <div className="flex gap-2">
                {props.tags.map((tag, index) => (
                    <p className='font-extralight text-sm' key={index}>{tag} . </p>
                ))}
            </div>

            <div className="flex gap-4">
                <div className="flex flex-col items-center justify-center">
                    <ThumbUpOffAltIcon />
                    <p className='text-xs font-extralight'>{props.likes} likes</p>
                </div>

                <div className="flex flex-col items-center justify-center" onClick={() => setVisibleBottom(true)}>
                    <InsertCommentOutlinedIcon />
                    {/* <p className='text-xs font-extralight'>{props.comments} comments</p> */}
                </div>
                <div className="">
                    <Sidebar id="comment-sidebar" visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                        <div className='poppins-regular'>
                            <h2 className='text-center font-semibold'>Comments</h2>
                            {/* {props.commentsData && Array.isArray(props.commentsData) && props.commentsData.map((comment, index) => (
                            <div key={index} className="flex flex-col p-4 gap-2 items-start justify-start">
                                <div className="flex gap-2 items-center">
                                    <img src={comment.profilePic} alt={comment.userName} className="w-8 h-8 rounded-full" />

                                    <p className=" text-sm font-light">{comment.userName}</p>
                                    <p className="text-xs font-light">{comment.time}</p>
                                </div>


                                <p className='comment-border font-light'>{comment.comment}</p>
                            </div>
                        ))} */}
                        </div>
                    </Sidebar>
                </div>

                <div className="flex flex-col items-center justify-center ">

                    <p className='text-xs font-extralight border-white sorder-solid border-2 rounded-3xl py-[0.1rem] px-[0.4rem]'>{props.read_time}</p>
                    <p className='text-xs font-extralight'>{(props.read_time < 2) ? `min` : `mins`}</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <IosShareOutlinedIcon />
                    {/* <p className='text-xs font-extralight'>{props.shares} shares</p> */}
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
