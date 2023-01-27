import React from 'react'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { AiOutlineUser } from 'react-icons/ai'
function DashBoard() {
  return (
    <div className='flex'>
      <div className='  min-h-screen bg-slate-600 w-1/5  border-r-2 border-black'>
        <div className='h-full flex-col justify-between'>
          <div className='font-bold items-center text-center text-4xl p-4'>
            <Link href='/'>Title</Link>
          </div>
          <div className='mt-16  items-center'>
            <ul className='w-full text-xl'>
              <li className='border-t-[1px] text-center items-center my-3 p-3 w-full border-black'>Dashboard</li>
              <li className='border-t-[1px] text-center items-center my-3 p-3 w-full border-black'>Course</li>
              <li className='border-t-[1px] text-center items-center my-3 p-3 w-full border-black'>Chat</li>
              <li className='border-y-[1px] text-center items-center my-3 p-3 w-full border-black'>Schedule</li>
            </ul>
          </div>
          <div className='items-center text-center text-xl mt-56 border-t-[1px] border-black pt-2'>
            Log Out
          </div>
        </div>

      </div>

      <div className='w-4/5  min-h-screen '>
        <div className='flex border-y-2 border-black'>
          <div className=' flex font-bold text-xl h-full ml-5 border-r-2 border-black p-4 w-3/4 items-center text-center '>DashBoard</div>
          <div className=' flex border-r-2 border-black items-center text-center p-4'><input type="text" className='rounded-full border-r-2 bg-yellow-500 border-black  ' placeholder='Search Here' /></div>
          <div className=' flex border-r-2 border-black items-center text-center p-4'><Link href='/'><AiOutlineUser size={30} /></Link></div>
        </div>
        <div className='p-5 flex items-end'>
          <Tab.Group >
            <Tab.List className="">
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
