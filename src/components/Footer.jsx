import React from 'react'
import { AiOutlineMail,AiOutlinePhone,AiOutlineInstagram   } from "react-icons/ai";

const copyright = String.fromCodePoint(0x00a9);
const trademark = String.fromCodePoint(0x02122);

function Footer() {
  return (
    <footer className='grid xl:grid-cols-5 tertiary-color text-white text-center xl:text-left'>
        <div className='source-sans-pro-bold text-2xl xl:ml-[45px] ml-[30px] my-3'>The Knowledge Nugget</div>
        <div className='xl:text-center xl:col-span-2 source-sans-pro my-auto'>Copyright {copyright}2024 Knowledge Nugget{trademark}</div>
        <div className='grid justify-center xl:flex xl:flex-cols-3 xl:col-span-2 xl:justify-end xl:gap-4 md:gap-4 xl:mx-10 source-sans-pro my-auto'>
            <div className='flex my-4 xl:my-0'> 
                <AiOutlineMail size={20} className='mr-2 xl:my-auto'/>
                dnmegatmehat@gmail.com</div>
            <div className='flex my-4 xl:my-0'>
                <AiOutlinePhone size={20} className='mr-2 my-auto'/>
                +6012-480-8247</div>
            <div className='flex my-4 xl:my-0'>
                <AiOutlineInstagram size={20} className='mr-2 my-auto'/>
                @megathaq</div>
        </div>
    </footer>
  )
}

export default Footer