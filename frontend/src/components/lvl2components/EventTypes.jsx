import React from 'react'

 const EventTypes = () => {
    return (
        <>
         <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Streamline</span>
          </span>{' '}
           the process of hosting your events with our simple and efficient event management solution.
        </h2>
    


      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <div class="relative">
          {<img  src="/1.png" class="w-full rounded-xl" />}
          {/* <div class="absolute bottom-0 left-0 right-0 text-white p-4">
          <h2 class="text-2xl font-bold">  Virtual Events</h2>
          <p class="mt-2">  Transforming virtual events into unforgettable experiences</p>
          <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
          </a>
          </div> */}
          </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">

          <div class="relative">
          {<img  src="/2.png"
           alt="Image description"
          class="w-full rounded-xl" />}
          {/* <div class="absolute bottom-0 left-0 right-0 text-white p-4">
          <h2 class="text-2xl font-bold">Hybrid events</h2>
          <p class="mt-2">Combining the best of both worlds</p>
          <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
          </a>
          </div> */}
          </div>
  
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <div class="relative">
          {<img  src="/3.png"
           alt="Image description"
          class="w-full rounded-xl" />}
          {/* <div class="absolute bottom-0 left-0 right-0 text-white p-4">
          <h2 class="text-2xl font-bold"> In - Person Events</h2>
          <p class="mt-2">Experience the power of in-person events</p>
          <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
          </a>
          </div> */}
          </div>
          
          </div>
        </div>
      </div>
        </>
       
    );
  };

export default EventTypes