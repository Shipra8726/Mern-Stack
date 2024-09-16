import React from 'react'
import Link from 'next/link'

const page = () => {
  return (

    <>

      <div
        className="relative overflow-hidden   h-[90vh] w-[100%] bg-no-repeat object-cover">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bgimg.mp4"
          autoPlay
          loop
          muted

        />
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className=" blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] " />
          <div className=" blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] " />
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                  Lorem ipsum dolor sit amet consectetur.
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem voluptas itaque laborum numquam, officia delectus alias repellendus reiciendis adipisci.
                  Facilis saepe reprehenderit atque, commodi iste sed libero quod assumenda enim.
                </p>
              </div>
              <div className="mt-8 gap-3 flex justify-center">
                <Link
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="/shop"
                >
                  Shop Now
                </Link>
                <Link
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="/learnmore"
                >     Learn More
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='flex w-[95%] items-center justify-center flex-col'>
        <div className='h-28  text-center mt-8'>
          <h1 className='text-3xl font-bold'>Our Best For you</h1>
          <p className='mt-2'>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='w-full'>

          <div className='flex items-center justify-center pl-16 text-center font-bold p-2'>
            <div className='h-[40vh] w-80'>
              <img className='size-48 rounded-full object-cover block m-auto' src="https://i.pinimg.com/564x/2f/75/cd/2f75cd52ad88030afe3618aad6bc1c57.jpg" alt="" />
              <h1 className=' mt-2'>Accessories</h1>
            </div>
            <div className='h-[40vh] w-80 '>
              <img className='size-48 rounded-full  object-cover ' src="https://i.pinimg.com/564x/cc/e1/18/cce1180bc5416534065cb66e012b5e78.jpg" alt="" />
              <h1 className=' mt-2'>Bathroom</h1>
            </div>
            <div className='h-[40vh] w-80 '>
              <img className=' size-48 rounded-full object-cover ' src="https://i.pinimg.com/564x/dc/ba/e0/dcbae0dd35a0d3fc98d7c74986d228da.jpg" alt="" />
              <h1 className=' mt-2'>Beauty</h1>
            </div>
            <div className='h-[40vh] w-80 '>
              <img className='size-48 rounded-full object-cover ' src="https://i.pinimg.com/564x/07/8f/b3/078fb340256bd7e140fb55e217f564ed.jpg" alt="" />
              <h1 className=' mt-2'>Garden&Home</h1>
            </div>
            <div className='h-[40vh] w-80 '>
              <img className='size-48 rounded-full object-cover ' src="https://i.pinimg.com/564x/6d/c1/47/6dc147ecc6191f982d0639d591b34566.jpg" alt="" />
              <h1 className=' mt-2'>Kitchen</h1>
            </div>
            <div className='h-[40vh] w-80 '>
              <img className='size-48 rounded-full object-cover ' src="https://i.pinimg.com/236x/c9/d0/b0/c9d0b07d126eccabc354c3e1790138ae.jpg" alt="" />
              <h1 className=' mt-2'>Gifts</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-6 h-[70vh] justify-center gap-3 ml-9 items-center w-[95%] '>
        <div className=' h-[65vh] w-1/3 relative'>
          <div className='bottom-0 flex flex-col items-center justify-center   absolute p-4 h-auto w-full'>
            <h1 className=' text-3xl text-gray-600 dark:text-black font-3xl text-center flex justify-center text-bottom font-bold'>Kitchen</h1>
            <button className='mt-2  inline-flex items-center justify-center text-center bg-white w-32 rounded-3xl py-1 shadow-xl'>Shop Now
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <video
            className="h-full object-cover w-full "
            src="/pnvdo.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className=' flex h-[65vh] w-1/3 relative '>
          <div className='bottom-0 flex flex-col items-center justify-center   absolute p-4 h-auto w-full'>
            <h1 className=' text-3xl text-gray-600 dark:text-black font-3xl text-center flex justify-center text-bottom font-bold'>Beauty</h1>
            <button className=' mt-2 inline-flex items-center justify-center text-center bg-white w-32 rounded-3xl py-1 shadow-xl'>Shop Now
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <video
            className="h-full w-full object-cover"
            src="/pnvdo2.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className=' flex h-[65vh] w-1/3 relative '>
          <div className='bottom-0 flex flex-col items-center justify-center   absolute p-4 h-auto w-full'>
            <h1 className=' text-3xl text-gray-600 dark:text-black font-3xl text-center flex justify-center text-bottom font-bold'>Kitchen&Garden</h1>
            <button className='mt-2 inline-flex items-center justify-center text-center bg-white w-32 rounded-3xl py-1 shadow-xl'>Shop Now
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <video
            className="h-full w-full object-cover"
            src="/pnvdo3.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
      <div className='w-[100%]'>
        <div className='flex font-bold text-xl justify-center mt-4 items-center gap-10' >
          <h1>Best Sellers </h1>
          <h1 className='text-gray-500'>New Arrivals</h1>
          <h1 className='text-gray-500'>Sale</h1>
        </div>
        <div className='flex-wrap flex gap-7 justify-center h-[100vh] w-[100%] mt-3 p-7'>
          <div className='h-1/2 w-[300px]'>
            <img className='h-full w-full object-cover ' src="https://i.pinimg.com/736x/d4/6c/28/d46c2830df59c46f835f03f8e9b72cf7.jpg" alt="" />
          </div>
          <div className='h-1/2 w-[300px]'>
            <img className='h-full w-full object-cover' src="https://i.pinimg.com/236x/e1/1c/ad/e11cad5458c19dafac74baeb6fcd054c.jpg" alt="" />
          </div>
          <div className='h-1/2 w-[300px]'>
            <img className=' h-full w-full object-cover ' src="https://i.pinimg.com/236x/10/12/8e/10128e74ca91b2e8cc4301554185664c.jpg" alt="" />
          </div>
          <div className='h-1/2 w-[300px]'>
            <img className='h-full w-full object-cover ' src="https://i.pinimg.com/236x/e3/3b/06/e33b06d17da9067c37c0469c059ce9af.jpg" alt="" />
          </div>
          <div className='h-1/2 w-[300px]'>
            <img className='h-full w-full object-cover ' src="https://i.pinimg.com/736x/36/0b/cf/360bcfcf28f04dc57d38df549194c33e.jpg" alt="" />
          </div>
          <div className='h-1/2 w-[300px]'>
            <img className='h-full w-full object-cover ' src="https://i.pinimg.com/236x/16/d4/20/16d420c487190b87e6904473698f1d9f.jpg" alt="" />
          </div>
          <div className='h-1/2 w-[300px]'>
            <img className='h-full w-full object-cover ' src="https://i.pinimg.com/236x/24/fa/84/24fa84285ddffac95f063fe1030204cd.jpg" alt="" />
          </div>
          <div className='h-1/2 w-[300px]'>
            <img className='h-full w-full object-cover ' src="https://i.pinimg.com/236x/be/47/bf/be47bf13b507f26d8adf4a73fa8722c9.jpg" alt="" />
          </div>
        </div>



        <footer className=" w-full mt-7 max-w-[85rem] py-8 px-4 sm:px-6 lg:px-8 mx-auto">

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-10">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <a
                className="flex-none font-semibold text-xl text-black "
                href="#"
                aria-label="Brand"
              >
                Brand
              </a>
              <p className="mt-3 text-base text-gray-600 ">
                Earthly Goods
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 uppercase ">
                Product
              </h4>
              <div className="mt-3 grid space-y-3 text-base">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Pricing
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Changelog
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Docs
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 uppercase ">
                Company
              </h4>
              <div className="mt-3 grid space-y-3 text-base">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    About us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Blog
                  </a>
                </p>

                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Customers
                  </a>
                </p>


              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 uppercase ">
                Resources
              </h4>
              <div className="mt-3 grid space-y-3 text-base">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Community
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 "
                    href="#"
                  >
                    Help &amp; Support
                  </a>
                </p>


              </div>
            </div>



          </div>

          <div className="pt-5 mt-5 border-t border-gray-200 ">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex flex-wrap items-center gap-3">

                <div className="hs-dropdown [--placement:top-left] relative inline-flex">
                  <button
                    id="hs-footer-language-dropdown"
                    type="button"
                    className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50   disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >

                    English (US)

                  </button>
                  <div
                    className="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-footer-language-dropdown"
                  >
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >

                      English (US)
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >

                      Deutsch
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >


                      Dansk
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >

                      Italiano
                    </a>
                    <a
                      className="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                      href="#"
                    >

                    </a>
                  </div>
                </div>

                <div className="space-x-4 text-sm">
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Terms
                  </a>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Privacy
                  </a>
                  <a
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >
                    Status
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="mt-3 sm:hidden">
                  <a
                    className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                    href="#"
                    aria-label="Brand"
                  >
                    Brand
                  </a>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
                    © 2022 Preline.
                  </p>
                </div>

                <div className="space-x-4">
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >

                  </a>
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >

                  </a>
                  <a
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                    href="#"
                  >

                  </a>
                </div>

              </div>

            </div>
          </div>
        </footer>

      </div>


    </>
  )
}

export default page