import React, { useEffect, useState } from "react";

export default function SearchFilters() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }

    return (
        <section className="bg-gray-800">
            <div className="flex justify-between px-4 py-3">
                <div className="relative max-w-xs w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg className="ml-1 h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
                    </div>
                    <input className="block w-full bg-gray-900 mr-4 focus:outline-none focus:white text-white rounded-lg pl-10 pr-3 py-2" placeholder="Search by keywords" />
                </div>

                <button onClick={toggle} type="button" className="ml-4 inline-flex pt-2 bg-gray-700 hover:bg-gray-600 focus:outline-none rounded-lg shadow pl-3 pr-4">
                    <svg className="w-6 h-6 mr-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-3.659-3.254c1.013-.781 2.282-1.246 3.659-1.246 1.376 0 2.645.464 3.657 1.245l-.572.821c-.85-.667-1.921-1.066-3.085-1.066s-2.237.399-3.087 1.068l-.572-.822zm-2.859-4.105c1.825-1.346 4.079-2.141 6.518-2.141 2.437 0 4.691.794 6.515 2.139l-.572.821c-1.662-1.232-3.718-1.96-5.943-1.96-2.226 0-4.284.729-5.946 1.962l-.572-.821zm-2.858-4.104c2.635-1.91 5.875-3.037 9.376-3.037 3.499 0 6.737 1.125 9.371 3.034l-.571.821c-2.472-1.796-5.513-2.855-8.8-2.855-3.288 0-6.331 1.06-8.804 2.858l-.572-.821zm-2.624-3.768c3.402-2.375 7.54-3.769 12-3.769 4.458 0 8.593 1.392 11.994 3.765l-.571.82c-3.239-2.259-7.178-3.585-11.423-3.585-4.248 0-8.188 1.327-11.429 3.589l-.571-.82z" /></svg>
                    <span className="text-white font-medium">Filters</span>
                </button>
            </div>

            <form style={{ display: showMe ? "block" : "none" }}>
                <div className="px-4 py-4 border-t border-gray-900 sm:flex">
                    <div className="flex -mx-2 sm:w-1/2 sm:mx-0">
                        <label className="block w-1/2 px-2">
                            <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
                            <select className="mt-1 form-select block w-full bg-gray-500 text-white shadow focus:bg-gray-600">
                                <option>4</option>
                            </select>
                        </label>

                        <label className="block w-1/2 px-2">
                            <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
                            <select className="mt-1 form-select block w-full bg-gray-500 text-white shadow focus:bg-gray-600 border-current">
                                <option>4</option>
                            </select>
                        </label>
                    </div>

                    <div className="mt-4 sm:w-1/2 sm:mt-0 sm:px-2">
                        <label>
                            <span className="text-sm font-semibold text-gray-500">Price Range</span>
                            <select className="mt-1 form-select bg-gray-500 text-white shadow block w-full focus:bg-gray-600">
                                <option>Up to $2,000/wk</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="px-4 py-4 border-t border-gray-900">
                    <span className="block text-sm font-semibold text-gray-500">Property Type</span>
                    <div className="sm:flex sm:-mx-2">
                        <label className="mt-3 sm:w-1/4 sm:px-2 sm:flex items-center">
                            <input className="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="house" />
                            <span className="ml-2 text-white">House</span>
                        </label>
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                            <input className="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="apartment" />
                            <span className="ml-2 text-white">Apartment</span>
                        </label>
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                            <input className="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="loft" />
                            <span className="ml-2 text-white">Loft</span>
                        </label>
                        <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                            <input className="form-radio bg-gray-900 focus:bg-gray-700" type="radio" name="propertyType" value="townhouse" />
                            <span className="ml-2 text-white">Townhouse</span>
                        </label>
                    </div>
                </div>

                <div className="px-4 py-4 border-2 border-gray-900">
                    <span className="text-sm font-semibold text-gray-500">Amenities</span>
                    <div className="sm:flex sm:-mx-2 sm:flex-wrap">
                        <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
                            <input className="form-checkbox bg-gray-900" type="checkbox" name="balcony" />
                            <span className="ml-2 text-white">Balcony</span>
                        </label>
                        <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
                            <input className="form-checkbox bg-gray-900" type="checkbox" name="air" />
                            <span className="ml-2 text-white">Air</span>
                        </label>
                        <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
                            <input className="form-checkbox bg-gray-900" type="checkbox" name="pool" />
                            <span className="ml-2 text-white">Pool</span>
                        </label>
                        <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
                            <input className="form-checkbox bg-gray-900" type="checkbox" name="kidFriendly" />
                            <span className="ml-2 text-white">Kid friendly</span>
                        </label>
                        <label className="mt-3 flex items-center sm:w-1/4 sm:px-2">
                            <input className="form-checkbox bg-gray-900" type="checkbox" name="parking" />
                            <span className="ml-2 text-white">Parking</span>
                        </label>
                    </div>
                </div>

                <div className="bg-gray-900 px-4 py-4 sm:text-left">
                    <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg">Update results</button>
                </div>
            </form>
        </section>
    )
}