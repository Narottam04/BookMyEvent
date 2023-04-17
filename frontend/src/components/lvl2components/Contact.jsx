import React from "react";

const Contact = () => {
  return (
    <div className="relative ">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
            Join our community
            <br className="hidden md:block" />
            and stay up-to-date on all our events.
            <span className="relative inline-block">
              Subscribe now!
              <div className="w-full h-3 -mt-3 " />
            </span>
          </h2>
          {/* <p className="mb-6 text-base font-thin tracking-wide text-black md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p> */}
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Email"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
