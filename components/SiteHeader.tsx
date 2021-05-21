import Image from 'next/image'
import React, { useEffect, useState } from "react";

export default function SiteHeader() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <header className="bg-gray-800 sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-between px-4 py-3">
                <div>
                    <Image width="264" height="64" src="/images/logo.png" />
                </div>

                {/* <div className="flex"> */}
                    <button onClick={toggle} type="button" className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white sm:hidden">
                        <svg className="h-10 w-10 fill-current text-gray-500 hover:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                        </svg>                               
                    </button>
                {/* </div> */}
            </div>
            <nav className="sm:flex sm:items-center sm:pr-4" style={{ display: showMe?"block":"none" }}>
                <div className="px-2 pt-3 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm-py-0 sm:px-0">
                    <a href="#" className="block px-2 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2">List your property</a>
                    <a href="#" className="mt-1 sm:mt-0 block px-2 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2">Trips</a>
                    <a href="#" className="mt-1 sm:mt-0 block px-2 py-1 rounded font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2">Messages</a>
                </div>

                <div className="px-5 py-5 sm:py-0 sm:ml-4 sm:px-0">
                    <div className="flex items-center">
                        <Image className="h-10 w-10 sm:h-8 sm:w-8 object-cover rounded-full border-2 border-gray-600" width="25" height="25" src="/images/people.png" />
                        <span className="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
                    </div>

                    <div className="mt-5 sm:hidden">
                        <a href="#" className="block text-gray-400 hover:text-white">Account settings</a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">Support</a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">Sign out</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}