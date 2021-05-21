import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const SiteHeader = dynamic(() => import('../components/SiteHeader'))
const SearchFilters = dynamic(() => import('../components/SearchFilters'))

export default function Home() {
  return (
    <div id="app" className="min-h-screen bg-gray-200 antialiased">
      <SiteHeader/>
      <SearchFilters/>

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
