import Layout from "@/components/Layout"
import React from "react"

const Login = ()=> {


    return (
        <Layout>
            <div className="text-center text-2xl text-white font-light">Login</div>

            <div className="flex justify-center mt-5">
                <div className="w-full max-w-sm">
                    <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4  ">
                        <div className="mb-4">
                            <label className="bloc text-gray-700 text-sm font-bold mb-2 " htmlFor="nombre">Email</label>
                            <input placeholder="Email Usuario" type="text" id="nombre" className="shadow apparence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <div className="mb-4">
                            <label className="bloc text-gray-700 text-sm font-bold mb-2 " htmlFor="password">Password</label>
                            <input type="password" id="password" className="shadow apparence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <input type="submit" className="bg-gray-700 w-full mt-5 p-2 text-white uppercase hover:bg-gray-900" value={"Iniciar Sesion"}/>
                        
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login