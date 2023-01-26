import { getProviders, signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"

export default function SignIn({ providers }:any) {
    const [Email, setEmail] = useState<string>()
    const router = useRouter()
    const {data:session}=useSession()
    const handleChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    if(session?.user) router.replace("/")
    
  return (
    <div className="flex justify-center items-center min-h-screen">
    <label className="text-xl font-light" >Email: </label>
      <form>
        <input className="border-2 border-b-8 border-l-4 py-2 px-3 rounded-xl m-3 border-black" type="email" value={Email} onChange={(e)=>{handleChange(e)}} />
        <button className="border-2 border-b-8 py-2 px-3 rounded-xl m-3 border-black" onClick={(e)=>{
            e.preventDefault()
            signIn("email",{email:Email,redirect:true})}} >sign in</button>
      </form>
    </div>
  )
}

export async function getServerSideProps(context:any) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}