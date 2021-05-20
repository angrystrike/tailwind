import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div id="app" class="bg-gray-200 antialiased">
      <header class="flex justify-between items-center g-gray-500 px-4 py-3">
        <div>
          <svg class="h-4" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M238.04 223.123c-1.93 14.344-11.583 26.756-25.097 32.272-6.62 2.755-13.79 3.585-20.962 2.755-6.894-.826-13.79-3.033-20.96-7.166-9.93-5.522-19.859-14.068-31.442-26.756 18.204-22.34 29.233-42.75 33.372-60.95 1.931-8.551 2.206-16.274 1.38-23.446-1.102-6.894-3.585-13.24-7.448-18.755-8.55-12.41-22.89-19.582-38.887-19.582s-30.338 7.448-38.888 19.582c-3.863 5.516-6.342 11.861-7.447 18.755-1.102 7.172-.827 15.17 1.38 23.447 4.136 18.198 15.443 38.885 33.372 61.221-11.308 12.691-21.513 21.24-31.443 26.757-7.17 4.138-14.066 6.345-20.96 7.169a44.124 44.124 0 01-20.961-2.755c-13.515-5.516-23.166-17.932-25.098-32.273-.826-6.893-.275-13.787 2.483-21.51.826-2.76 2.207-5.513 3.584-8.825 1.932-4.411 4.139-9.103 6.343-13.793l.278-.548c19.028-41.097 39.439-83.018 60.676-123.835l.827-1.658c2.207-4.133 4.411-8.544 6.62-12.683 2.205-4.414 4.687-8.552 7.72-12.14 5.792-6.62 13.515-10.205 22.065-10.205s16.272 3.585 22.064 10.206c3.034 3.587 5.516 7.725 7.723 12.14 2.207 4.138 4.411 8.549 6.618 12.682l.83 1.658c20.959 41.092 41.37 83.013 60.4 124.11v.273c2.207 4.414 4.136 9.382 6.343 13.793 1.38 3.312 2.758 6.064 3.584 8.825 2.207 7.17 3.034 14.068 1.932 21.235zm-110.044-12.964c-14.892-18.752-24.547-36.405-27.856-51.294-1.377-6.345-1.656-11.861-.826-16.826.55-4.414 2.207-8.277 4.41-11.589 5.241-7.44 14.066-12.137 24.272-12.137 10.205 0 19.306 4.417 24.27 12.137 2.205 3.312 3.861 7.175 4.412 11.589.827 4.965.551 10.756-.827 16.826-3.309 14.616-12.963 32.267-27.855 51.294zm124.386-14.34c-1.378-3.31-2.758-6.894-4.136-9.928-2.207-4.962-4.414-9.654-6.345-14.068l-.276-.273c-19.028-41.373-39.439-83.294-60.952-124.658l-.826-1.66c-2.207-4.137-4.414-8.551-6.618-12.963-2.76-4.967-5.519-10.202-9.93-15.17C154.47 6.067 141.786 0 128.27 0c-13.79 0-26.2 6.067-35.303 16.55-4.135 4.963-7.169 10.203-9.927 15.171-2.207 4.411-4.414 8.825-6.62 12.964l-.827 1.65c-21.235 41.37-41.921 83.294-60.952 124.664l-.275.551c-1.932 4.411-4.139 9.098-6.346 14.066a182.774 182.774 0 00-4.135 9.93C.298 205.748-.804 215.403.574 225.33 3.61 246.016 17.4 263.394 36.43 271.114c7.169 3.036 14.616 4.414 22.34 4.414 2.206 0 4.964-.276 7.171-.554 9.1-1.105 18.477-4.133 27.577-9.376 11.31-6.343 22.067-15.443 34.201-28.682 12.134 13.239 23.167 22.34 34.199 28.682 9.103 5.243 18.479 8.271 27.58 9.376 2.207.278 4.965.554 7.171.554 7.723 0 15.444-1.378 22.34-4.414 19.306-7.72 32.82-25.373 35.854-45.784 2.207-9.655 1.102-19.303-2.482-29.512z" fill="#E0565B"/></svg>
        </div>

        <div class="flex">
          <button>
            <Image width="64" height="64" src="/hamburger-icon.png" />
          </button>
        </div>
      </header>

      <section class="flex justify-between bg-gray-800 px-4 py-3">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center ">
            <Image class="h-6 w-6 fill-current" width="64" height="64" src="/search-icon.png" />
          </div>
          <input class="bg-gray-900 focus:outline-none focus:white text-white rounded-lg pl-10 pr-3 py-2" placeholder="Search by keywords"/>
        </div>
        <button class="inline-flex bg-gray-700 hover:bg-gray-600 focus:outline-none rounded-lg shadow pl-3 pr-4">
          <Image class="" width="64" height="64" src="/filter-icon.png" />
          <span class="ml-1 text-white font-medium">Filters</span>
        </button>
      </section>

      <main claass="px-4 py-6">
        <h3 class="text-gray-900 text-x1">Los Angeles</h3>
        <p class="text-gray-600">Live like the stars in these estates</p>

        <div>
          <div>
            <div>
              <Image class="rounded-lg shadow-mg" width="280" height="240" src="/house.jpeg"/>
            </div>

            <div class="relative px-4 -mt-16">
              <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
                <div class="flex">
                  <span class="inline-black px-2 py-2 leading-none bg-teal-200 text-teal-800 rounded-full font-semibold uppercase tracking-wide text-xs">Plus</span>
                  <div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                    3 beds &middot; 2 baths
                  </div>
                </div>

                <h4 class="mt-1 text-gray-900 font-semibold text-lg">Modern home in city center</h4>
                <div claas="mt-1">
                  <span class="text-gray-900">$1,400</span>
                  <span class="ml-1 text-sm text-gray-600">/wk</span>
                </div>

                <div class="text-sm text-gray-800">
                  34 reviews
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}
