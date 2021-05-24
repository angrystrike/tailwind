import dynamic from 'next/dynamic'

const SiteHeader = dynamic(() => import('../components/SiteHeader'))
const SearchFilters = dynamic(() => import('../components/SearchFilters'))
const CarouselItem = dynamic(() => import('../components/CarouselItem'))

export default function Home() {
  return (
    <div id="app" className="bg-gray-200 antialiased">
      <SiteHeader />
      <SearchFilters />

      <main className="py-6">
        <div className="px-4">
          <h3 className="text-gray-900 text-x1">Los Angeles</h3>
          <p className="text-gray-600">Live like the stars in these estates</p>
        </div>

        <div className="sm:flex sm:overflow-x-auto sm:-mx-2 sm:pb-8 sm:px-4">
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>         
        </div>

      </main>
    </div>
  )
}
