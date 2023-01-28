import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Tab } from '@headlessui/react'
import { AiOutlineUser } from 'react-icons/ai'
import Container from '@/components/container'
import { useSession } from 'next-auth/react'
import axios from 'axios'


function DashBoard({children}:any) {
  const {data:session}= useSession()

  const [warehouse,setWarehouse]=useState([])
  const [invetory, setinventory]=useState([])
  useEffect(() => {
  
    getWarehouse()
    
  }, [session])

  const getWarehouse = async() => {
    const axiosConfig:any={
      email:session?.user?.email
    }  
    const result: any = await axios.get("/api/db/warehouse/getWarehouse", axiosConfig)
    console.log(result);
    
    setWarehouse(result.data)
    
  }
  const getInventory = async() => {
    const axiosConfig:any={
      warehouseid:session?.user?.email
    }  
    const result: any = await axios.get("/api/db/warehouse/getInventory", axiosConfig)
    console.log(result);
    
    setinventory(result.data)
    
  }
  
  return (
    <div className='flex'>
      <div className='h-screen bg-indigo-300 w-1/5 border border-r-1 border-black relative'>
        <div className='flex flex-col justify-between'>
          <div className='font-bold mt-5 items-center text-center text-4xl p-4'>
            <Link href='/'>Title</Link>
          </div>
          <div className='justify-betweeen'>
            <ul className='mt-10 text-xl'>
              <button className='border-t-[1px] text-center my-3 p-3 w-full border-black'>Dashboard</button>
              <button className='border-t-[1px] text-center my-3 p-3 w-full border-black'>Warehouse</button>
              <button className='border-t-[1px] text-center my-3 p-3 w-full border-black'>Items</button>
            </ul>
          </div>
          <div className='justify-betweeen absolute bottom-10 items-center text-center text-xl border-t-[1px] border-black pt-2'>
            <button>Log Out</button>
          </div>
        </div>
      </div>

      <div className='w-4/5  min-h-screen '>
        <div className='flex border-y-2 border-black'>
          <div className=' flex font-bold text-xl h-full ml-5 border-r-2 border-black p-4 w-3/4 items-center text-center '>DashBoard</div>
          <div className=' flex border-r-2 border-black items-center text-center p-4'><input type="text" className='rounded-full border-r-2 bg-yellow-500 border-black  ' placeholder='Search Here' /></div>
          <div className=' flex border-r-2 border-black items-center text-center p-4'><Link href='/'><AiOutlineUser size={30} /> {session?.user?.name}</Link></div>
        </div>
        <div className="flex">
        
          <div className='p-5 flex flex-col'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )


}

export default DashBoard
