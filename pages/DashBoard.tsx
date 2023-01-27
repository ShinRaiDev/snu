import React from 'react'
import Link from 'next/link'
function DashBoard() {
  return (
    <div>
        <div className="min-h-screen w-1/5 border-x-2 border-black bg-slate-500">
            <div>
                <Link href='/'>Title<Link/>
            </div>
        </div>
    </div>
  )
}

export default DashBoard
