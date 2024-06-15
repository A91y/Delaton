import React, { useState } from 'react';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import { Sidebar } from 'primereact/sidebar';
import NotifiData from './data.json';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from 'react-router-dom';

const Bar = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);

  return (
    <div className='py-2 flex h-[9vh]  justify-between  bg-midnight m-0 p-0 gap-4 fixed top-[43px] left-0 right-0 z-10'>
      <button onClick={() => setVisibleLeft(true)} className='h-[6.7vh] w-[17vw] justify-self-start px-4 ml-[-12px] rounded-2xl p-1 grad text-white'>
        <NotificationsActiveIcon />
      </button>

      <Sidebar header="Notifications" id="notifi-sidebar" className='bg-midnight text-white poppins-regular' visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
        <div className='text-white poppins-regular my-6'>
          {NotifiData.notifications
            .filter(notification => notification.user === "Jiya")
            .flatMap(notification =>
              notification.msgs.map((message, index) => (
                <li className='px-6 py-2'
                 style={{background:'linear-gradient(123.74deg, rgba(8, 16, 73, 0.116) -109.92%, rgba(226, 227, 238, 0.2) 1.93%)'}}
                key={index}> {message.msg}</li>
                // <p key={index}>{message.msg}</p>
              ))
            )
          }
        </div>
      </Sidebar>
      <button className='text-white px-4 h-[6.7vh] rounded-2xl p-1 w-[31vw] poppins-regular grad'>Following</button>
      <button className='text-white px-4 h-[6.7vh] rounded-2xl p-1 w-[31vw] poppins-regular grad'>Trending</button>
      <button className='justify-self-end px-4 h-[6.7vh] mr-[-12px] w-[17vw] rounded-2xl p-1 text-white grad'>
        <Link to="/profile">
        <Person2Icon/></Link>
        </button>
    </div>
  );
};

export default Bar;
