export default function CarouselItem() {
    return (
        <div className="sm:max-w-xs sm:w-full sm:flex-shrink-0 my-3 pb-5 sm:px-2">
            <div className="relative pb-5/6">
                <img className="absolute inset-0 h-full object-cover rounded-lg shadow-md" src="https://images.unsplash.com/photo-1613544723162-35d3f5a62bf1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </div>
            <div className="relative px-4 -mt-16">
                <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                    <div className="flex">
                        <span className="inline-black px-2 py-2 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
                        <div className="mt-2 ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                            3 bed &middot; 2 baths
                        </div>
                    </div>
                    <h4 className="text-gray-900 font-semibold text-lg ">Modern house in center of Los Angeles</h4>
                    <div className="mt-1">
                        <span className="text-gray-900">$1.400</span>
                        <span className="ml-1 text-sm text-gray-600">/wk</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-2 flex items-center">
                        <svg className="h-4 w-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
                        <svg className="h-4 w-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
                        <svg className="h-4 w-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
                        <svg className="h-4 w-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
                        <svg className="h-4 w-4 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
                        <span className="ml-2">34 reviews</span>
                    </div>
                </div>
            </div>
        </div>
    )
}