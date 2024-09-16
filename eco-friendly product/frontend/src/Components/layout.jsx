import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <>

        <header className="  mb-2 flex flex-wrap md:justify-start ">
          <nav className="  w-full  ps-5  md:flex md:items-center md:justify-between  mx-2  z-50 w-full ">
            <div className="flex  items-center text-black justify-between">

              <div className='h-20 flex w-52 '>
                <img className=" w-20" src="https://i.pinimg.com/236x/d0/1d/cc/d01dcc7f720e4810ebf49229daf1c33c.jpg" alt="" />
                <h1 className="rounded-md text-xl text-center mt-7 font-semibold ">Earthly Goods</h1>
              </div>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-navbar-floating-dark-collapse"
                  aria-expanded="false"
                  aria-controls="hs-navbar-floating-dark"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-floating-dark"
                >
                  <svg
                    className="hs-collapse-open:hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="hs-navbar-floating-dark"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-navbar-floating-dark-collapse"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
                <Link
                  className="p-3 ps-px sm:px-3 md:py-4 text-base text-black"
                  href="/"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  className="p-3 ps-px sm:px-3 md:py-4 text-base text-black"
                  href="/aboutus"
                >
                  About Us
                </Link>
                <Link
                  className="p-3 ps-px sm:px-3 md:py-4 text-base text-black"
                  href="/addproduct"
                >
                  Add Product
                </Link>
     
                  <Link
                    className="group inline-flex items-center gap-x-2 py-2 px-3 text-base "
                    href="/contact"
                  >
                    Contact us
                  </Link>
                
                <div className='px-2'>
                  <Link
                    className="group inline-flex items-center gap-x-2 py-2 px-6 bg-[#ff0] font-medium text-base rounded-3xl"
                    href="/login"
                  >
                    Login 
                  </Link>
                </div>
                
              </div>
            </div>

          </nav>
        </header>

      </>

    </div>
  )
}

export default Navbar