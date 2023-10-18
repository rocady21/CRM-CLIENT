'use client'
import React from "react"
import Sidebar from "./Sidebar"
import { useRouter } from "next/router"
import "../app/globals.css"

const Layout = ({children})=> {
    const router = useRouter()
    return (
        <>
            {
                router.pathname === "/login" || router.pathname === "/nuevacuenta" ? <div className="bg-gray-800 min-h-screen flex flex-col justify-center">
                    <div>
                        {children}
                    </div>
            </div> : <div className="bg-gray-200 min-h-screen">
                <div className="flex flex-row min-h-screen">
                    <Sidebar/>

                    <main className="sm:w-2/3 xl:w-4/5 sn:min-h-screen p-5">
                        {children}
                    </main>


                </div>

            </div>

            }

        </>
    )
}

export default Layout