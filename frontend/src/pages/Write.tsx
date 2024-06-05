import React, { useState, useEffect, MouseEvent } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library
import moment from 'moment';
import addfile from '../assets/addfile.png'

const Write = () => {
  const navigate = useNavigate();
    const backtoHome=()=>{
        navigate('/');
    };
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [metadesc, setMetaDesc] = useState('');
  const [fetchError, setFetchError] = useState(null);
  var date = moment();
  var todaydate = date.format('D/MM/YYYY');


  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'link', 'image', { 'list': 'bullet' }, { 'header': [1, 2, 3] }]
    ]
  };

  const handleChange = (content: string) => {
    console.log('Content:', content); // Log the content received from ReactQuill
    setValue(content); 
  };
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!value.trim()) {
      console.log('Value is empty');
      return;
    }
    const newBlog = {
      title: title,
      content: value,
      author_address: "0x0" 
    };
    console.log('New blog:', newBlog);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/blogs/create/', newBlog); // Axios POST request to create a new blog post
      console.log("response", response);
      // Handle success response if needed
    } catch (error) {
      console.error("Error:", error);
      // Handle error if needed
    }
  }

  const [imageSrc, setImageSrc] = useState('');

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const result = e.target.result;
        if (typeof result === 'string') {
          setImageSrc(result);

        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className='w-screen h-[6.5vh] flex justify-start text-white p-2'>
            <button onClick={()=>backtoHome()}><KeyboardBackspaceIcon  /></button>            
        </div>
    <div className='write'>
      <form action="" method="post">
        <div className="flex p-2">
          <input required value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder='Blog Title' className='w-[65vw] p-2'/>
          <button onClick={handleSubmit} className='w-[35vw] text-white px-4 rounded-none p-1 poppins-regular grad'>Publish</button>
        </div>
        <div className='p-2'>
          <input value={metadesc} onChange={(e) => { setMetaDesc(e.target.value) }} type="text" placeholder='About' className='w-[95vw] p-2'/>
        </div>
        <div className="flex flex-col p-2">
       

          <input
            style={{ height: '30vh' }}
            type="file"
            id="imageUpload"
            name="imageUpload"
            onChange={handleImageUpload}
          />
          <img
            id="defaultImage"
            src={(imageSrc==='')?addfile:imageSrc}
            alt="Default or Uploaded"
            style={{ height: '30vh', display: 'block', marginTop: '-25vh' }}
          />
        </div>
        <div className="flex justify-between p-2">
          <div className="flex text-white">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg" width={'80px'} height={'80px'} style={{ borderRadius: '50%' }} alt="" />
            <p>Jiya</p>
          </div>
          <p className='text-white'>{todaydate}</p>
        </div>
       
        <ReactQuill
          className='h-[50vh] overflow-y-scroll text-white'
          theme="snow"
          value={value}
          onChange={handleChange}
          modules={modules}
          placeholder='Start Writing Here !!!'
        />
      </form>
    </div>
    </>
  );
};

export default Write;


