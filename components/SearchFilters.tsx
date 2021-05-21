import Image from 'next/image'
import React, { useEffect, useState } from "react";

export default function SearchFilters() {
    return (
        <section className="bg-gray-800">
            <div className="flex justify-between  px-2 py-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <svg className="ml-1 h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
                    </div>
                    <input className="bg-gray-900 w-60 mr-3 focus:outline-none focus:white text-white rounded-lg pl-10 pr-3 py-2" placeholder="Search by keywords" />
                </div>

                <button className="inline-flex pt-2 bg-gray-700 hover:bg-gray-600 focus:outline-none rounded-lg shadow pl-3 pr-4">
                    <svg className="w-6 h-6 mr-2 text-white" xmlns="http://www.w3.org/2000/svg"><path d="M12 20c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-3.659-3.254c1.013-.781 2.282-1.246 3.659-1.246 1.376 0 2.645.464 3.657 1.245l-.572.821c-.85-.667-1.921-1.066-3.085-1.066s-2.237.399-3.087 1.068l-.572-.822zm-2.859-4.105c1.825-1.346 4.079-2.141 6.518-2.141 2.437 0 4.691.794 6.515 2.139l-.572.821c-1.662-1.232-3.718-1.96-5.943-1.96-2.226 0-4.284.729-5.946 1.962l-.572-.821zm-2.858-4.104c2.635-1.91 5.875-3.037 9.376-3.037 3.499 0 6.737 1.125 9.371 3.034l-.571.821c-2.472-1.796-5.513-2.855-8.8-2.855-3.288 0-6.331 1.06-8.804 2.858l-.572-.821zm-2.624-3.768c3.402-2.375 7.54-3.769 12-3.769 4.458 0 8.593 1.392 11.994 3.765l-.571.82c-3.239-2.259-7.178-3.585-11.423-3.585-4.248 0-8.188 1.327-11.429 3.589l-.571-.82z" /></svg>
                    <span className="text-white font-medium">Filters</span>
                </button>
            </div>

            <div>
                <fieldset>
                    <div>
                        <label>
                            <span>Bedrooms</span>
                            <select className="form-select">
                                <option>4</option>
                            </select>
                        </label>

                        <label>
                            <span>Bathrooms</span>
                            <select>
                                <option>4</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label>
                            <span>Price Range</span>
                            <select>
                                <option>Up to $2,000/wk</option>
                            </select>
                        </label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Property Type</legend>
                    <label>
                        <input type="radio" name="propertyType" value="house"/>
                        House
                    </label>                  
                    <label>
                        <input type="radio" name="propertyType" value="apartment"/>
                        Apartment
                    </label>                  
                    <label>
                        <input type="radio" name="propertyType" value="loft"/>
                        Loft
                    </label>                   
                    <label>
                        <input type="radio" name="propertyType" value="townhouse"/>
                        Townhouse
                    </label>
                </fieldset>

                <form>
                    <legend>Amenities</legend>
                    <label>
                        <input type="checkbox" name="balcony"/>
                        Balcony
                    </label>                  
                    <label>
                        <input type="checkbox" name="air"/>
                        Air
                    </label>                  
                    <label>
                        <input type="checkbox" name="pool"/>
                        Pool
                    </label>                   
                    <label>
                        <input type="checkbox" name="kidFriendly"/>
                        Kid friendly
                    </label>
                    <label>
                        <input type="checkbox" name="parking"/>
                        Parking
                    </label>
                    <div>
                        <button>Update results</button>
                    </div>
                </form>           
            </div>
        </section>
    )
}