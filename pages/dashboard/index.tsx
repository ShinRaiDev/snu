import DashBoard from '@/components/DashBoard'
import Container from '@/components/container'
import { Tab } from '@headlessui/react'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

function DashIndex() {
  const [tab, setTab] = useState(1)
  const {data:session}= useSession()

  const [warehouse,setWarehouse]=useState([])
  
  const [ItemCount, setItemCount] = useState(0)
  useEffect(() => {
  
    getWarehouse()
    // getItemCount()
    
  }, [session])

  const getWarehouse = async() => {
    const axiosConfig:any={
      email:session?.user?.email
    }  
    const result: any = await axios.get("/api/db/warehouse/getWarehouse", axiosConfig)
    // console.log(result);
    
    setWarehouse(result.data)
    
  }
  

  const getItemCount:any = async() => {
    const axiosConfig: any = {
      userId:session?.user?.email
      
    }
    const result: any = await axios.get("/api/db/item/getItemcount", axiosConfig)
    console.log(result,"this is ");
    
  
    setItemCount(result.data)
  }

  return (
    <DashBoard>
      <div className='w-full h-full'>
        {tabGroup()}
      </div>
    </DashBoard>
  )
  function tabGroup() {
    return <Tab.Group>
      <Tab.List className="border-2 border-black px-2 mb-3 rounded-2xl border-b-4 border-r-4">
        <Tab onClick={() => { setTab(1) } } className={`border-r-2 border-black mx-1 px-2 pr-4 py-3 ${tab == 1 ? "font-Montserrat font-extrabold font-xl" : ""}`}>Warehouse</Tab>
        <Tab onClick={() => { setTab(2) } } className={`border-r-2 border-black mx-1 px-2 pr-4 py-3 ${tab == 2 ? "font-Montserrat font-extrabold font-xl" : ""}`}>Items</Tab>
        <Tab onClick={() => { setTab(3) } } className={`mx-1 px-2 py-3 ${(tab == 3) ? "font-Montserrat font-extrabold font-xl" : ""}`}>Tab 3</Tab>
      </Tab.List>
      <Container className="border-r-1">
        <Tab.Panels className="">
          <Tab.Panel>Number of warhouse: {warehouse?.length}</Tab.Panel>

          <Tab.Panel>Number of Items: {ItemCount}</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Container>
    </Tab.Group>
  }
}

export default DashIndex