import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { useState } from 'react'

function OnBoarding() {
    const [Name, setName] = useState<string>()
    const [meeting, setMeeting] = useState<string>()
    const { data: session } = useSession()
    const router = useRouter()
    const email=session?.user?.email
    const handleSubmit = (e:any) => {
        e.preventDefault()
        axios.post("/api/newUser", {
            email,name:Name,meeting
        }).then((res)=>{if(res.status==200)router.replace("/")})
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit}>
            <label className="text-xl font-light" >Name: </label>
            <input className="border-2 border-b-8 border-l-4 py-2 px-3 rounded-xl m-3 border-black" type="name" value={Name} onChange={(e)=>setName(e.target.value)} />
            <label className="text-xl font-light" >meeting: </label>
            <input className="border-2 border-b-8 border-l-4 py-2 px-3 rounded-xl m-3 border-black" type="name" value={meeting} onChange={(e)=>setMeeting(e.target.value)} />
            <button type="submit" >Submit</button>
        </form>
    </div>
  )
}

export default OnBoarding