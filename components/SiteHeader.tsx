import Image from 'next/image'
import React, { useEffect, useState } from "react";

export default function SiteHeader() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <header className="bg-gray-900">
            <div className="flex justify-between px-4 py-3">
                <div>
                    <Image width="264" height="64" src="/images/logo.png" />
                </div>

                <div className="flex">
                    <button onClick={toggle} type="button" className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
                        <svg style={{ display: showMe?"none":"block" }} className="h-10 w-10 fill-current text-gray-500 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                        </svg>                      
                        <svg style={{ display: showMe?"block":"none" }} className="h-10 w-10 fill-current text-gray-500 hover:text-white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M256 33C132.3 33 32 133.3 32 257s100.3 224 224 224 224-100.3 224-224S379.7 33 256 33zm108.3 299.5c1.5 1.5 2.3 3.5 2.3 5.6 0 2.1-.8 4.2-2.3 5.6l-21.6 21.7c-1.6 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3L256 289.8l-75.4 75.7c-1.5 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6 0-2.1.8-4.2 2.3-5.6l75.7-76-75.9-75c-3.1-3.1-3.1-8.2 0-11.3l21.6-21.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l75.7 74.7 75.7-74.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l21.6 21.7c3.1 3.1 3.1 8.2 0 11.3l-75.9 75 75.6 75.9z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <nav style={{ display: showMe?"block":"none" }}>
                <div className="px-2 pt-3 pb-5 border-b border-gray-800">
                    <a href="#" className="block px-2 py-1 rounded font-semibold text-white hover:bg-gray-800">List your property</a>
                    <a href="#" className="mt-1 block px-2 py-1 rounded font-semibold text-white hover:bg-gray-800">Trips</a>
                    <a href="#" className="mt-1 block px-2 py-1 rounded font-semibold text-white hover:bg-gray-800">Messages</a>
                </div>

                <div className="px-5 py-5">
                    <div className="flex items-center">
                        <Image className="h-10 w-10 object-cover rounded-full border-2 border-gray-600" width="256" height="150" src="/images/hat.jpeg" />
                        <span className="ml-4 font-semibold text-gray-200">Isla Schoger</span>
                    </div>

                    <div className="mt-5">
                        <a href="#" className="block text-gray-400 hover:text-white">Account settings</a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">Support</a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">Sign out</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}