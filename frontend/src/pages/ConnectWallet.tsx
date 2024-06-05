import React from 'react'
import coin from '../assets/coin.png'

const ConnectWallet = () => {
  return (
    <div className='w-screen h-screen backdrop-blur-xl absolute top-0 z-[100] text-white flex justify-center items-center poppins-regular'>
      <div className='flex flex-col h-[50vh] w-[80vw] bg-blugrad justify-evenly pb-8 rounded-3xl items-center'>
        <div className='flex flex-col items-center justify-center'>
        <img src={coin} alt="" className='w-[50px]' />
        <p className='font-bold'>DELATON</p>
        <p>Welcomes You!!!</p>
        </div>
        
        <div className='flex gap-2 bg-skyblu p-3 rounded-2xl w-[60vw] shadow-mshadow justify-center '>
            <p> $0</p><p> in</p><img src={coin} className='w-[18px] ' alt="" /> <p> USDT</p>
        </div>
        <div><button className='border border-white rounded-2xl shadow-mshadow bg-mudblue p-3 w-[60vw]'>
            <p className='font-bold'>
            CONNECT TON WALLET     
            </p>
            </button></div>
      </div>
    </div>
  )
}

export default ConnectWallet
//  linear-gradient(129.35deg, #05B6EC 62.82%, #036786 101.24%);
