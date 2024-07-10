import React, { useContext, useState } from 'react'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { AppContext } from '../context/AppContext';

const Header = () => {
  const {darkMode,darkhandle}= useContext(AppContext)
  return (
    <div className='w-full border shadow-md flex justify-evenly gap-x-3 items-center py-4 fixed top-0 bg-white dark:bg-gray-900 dark:border-none'>
      <header className='text-center' >
        <h1 className='text-3xl font-bold uppercase dark:text-white'>Technical Blogs</h1>
      </header>
      {/* <div className='w-[30px] h-[30px] rounded-full border dark:bg-white flex items-center justify-center'>
      </div> */}
        <button className='bg-white rounded-full w-[30px] h-[30px] border flex items-center justify-center ' onClick={darkhandle}>{darkMode?(<CiLight size={25}/>):(<CiDark size={25} />)}</button>
    </div>
  )
}

export default Header
