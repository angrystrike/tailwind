import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div id="app" className="min-h-screen bg-gray-200 antialiased">
      <header className="flex justify-between items-center bg-gray-900 px-4 py-3">
        <div>
          <Image width="264" height="64" src="/images/logo.png" />
        </div>

        <div className="flex">
          <button>
            <svg className="h-10 w-10 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" /></svg>
          </button>
        </div>
      </header>

      <section className="flex justify-between bg-gray-800 px-2 py-3">
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
      </section>

      <main className="px-4 py-6">
        <h3 className="text-gray-900 text-x1">Los Angeles</h3>
        <p className="text-gray-600">Live like the stars in these estates</p>

        <div className="mt-5">
          <div>
            <div>
              <Image className="rounded-lg shadow-mg" width="350" height="240" src="/images/house.jpeg" />
            </div>

            <div className="relative px-4 -mt-16">
              <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                <div className="flex">
                  <span className="inline-black px-2 py-2 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
                  <div className="mt-1 ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                    3 beds &middot; 2 baths
                  </div>
                </div>

                <h4 className="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
                <div className="mt-1">
                  <span className="text-gray-900">$1,400</span>
                  <span className="ml-1 text-sm text-gray-600">/wk</span>
                </div>

                <div className="mt-2 flex-items-center text-sm text-gray-800">

                  <Image width="20" height="20" src="/images/icons/star.png" />
                  <Image width="20" height="20" src="/images/icons/star.png" />
                  <Image width="20" height="20" src="/images/icons/star.png" />
                  <Image width="20" height="20" src="/images/icons/star.png" />
                  <Image width="20" height="20" src="/images/icons/star.png" />

                  <span className="ml-1 -mt-2">34 reviews</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}
