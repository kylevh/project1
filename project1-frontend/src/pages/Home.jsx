import React from 'react'
import NavBar from '../components/NavBar';

export default function Home() {
    return (
        <>
            <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
                <img src="/tesla-hero.png" alt="Tesla Hero" style={{ height: '100vh', width: 'auto', objectFit: 'cover', position: 'absolute', left: 0 }} />
                <div className="absolute top-0 right-0 h-full w-5/12 bg-[#0F0F0F] text-white flex flex-col grid-cols-3 justify-center items-center">
                    <div className="w-full col-span-1 col-start-3 top-0">
                    </div>
                    <div className="col-span-1 col-start-1 mr-24">
                        <h2 className="text-white text-4xl font-sfpro font-medium ml-4">Organize. <br className="mb-2"/> Manage. <br className="mb-2"/> Inventory.</h2>
                        
                        <p className="text-white text-lg font-sfpro ml-4 pt-5">Easily manage your vehicle<br/> inventory with our intuitive<br/> system</p>
                    <a href="/admin">
                        <button className="rounded-full ml-4 col-span-1 col-start-3 border-white border-2 p-2 mr-4 duration-200 mt-6 w-40 text-center text-lg hover:bg-white hover:text-black">
                            Dashboard
                        </button>
                    </a>

                    </div>
                </div>
                <img src="/tesla-logo.png" alt="Logo" className="absolute top-6 left-6 m-4 w-42" />
                <h1 className="absolute top-[370px] left-6 m-4 w-42 text-white font-sfpro font-medium text-6xl">Inventory <br /> Manager</h1>
            </div>
        </>

    )
}