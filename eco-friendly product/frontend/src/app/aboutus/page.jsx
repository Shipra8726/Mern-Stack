import React from 'react'

const Aboutus = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center  ' >
                <h1 className='font-bold text-color-black text-center text-4xl'>About Us</h1>
                <p className='text-center w-[90%] text-lg text-gray-800'>At Earthly goods, we believe that small actions can create a big impact. Our mission is to make eco-friendly living accessible to everyone by offering sustainable, high-quality products that are kind to both people and the planet. We are committed to reducing waste, conserving resources, and supporting a healthier environment through every item we offer.</p>
            </div>
            <div className='mb-10 h-[70vh] '>
                <div className='flex flex-col m-8  '>
                    <h1 className='font-bold text-start text-pink-500 text-2xl w-[90%]'>Our Mission</h1>
                    <p>Our mission is to provide eco-friendly, sustainable products that reduce environmental impact and inspire conscious living for a healthier planet.</p>
                </div>
                <div className='flex h-[50vh] gap-10  m-8 '>
                    <div className='h-full w-1/3 p-4 shadow-xl shadow-gray-200 '>
                        <img className='h-full w-full object-cover mb-5' src="https://imgmedia.lbb.in/media/2021/01/60113734dd932c1add0563b3_1611740980399.jpg" alt="" />
                        <h1 className='font-bold text-2xl mb-1'>Recycle</h1>
                        <p>"Eco-friendly Recycled Goods"</p>
                    </div>
                    <div className='h-full w-1/3 p-4 shadow-xl shadow-gray-200 '>
                        <img className='h-full w-full object-cover mb-5' src="https://jnjgiftsandmore.com/cdn/shop/files/rn-image_picker_lib_temp_1b8a6a70-1a05-492d-85a2-f792eb101f84.jpg?v=1692806255&width=1946" alt="" />
                        <h1 className='font-bold text-2xl mb-1'>Reusable</h1>
                        <p>Sustainable Reusable Solutions.</p>
                    </div>
                    <div className='h-full w-1/3 p-4 shadow-xl shadow-gray-200  '>
                        <img className='h-full w-full object-cover mb-5 ' src="https://1worldsync.com/wp-content/uploads/2022/08/ECO-FI.jpg" alt="" />
                        <h1 className='font-bold text-2xl mb-1'>Homemade</h1>
                        <p>"Handcrafted Eco Products"</p>
                    </div>
                </div>
            </div>
            <div className=' h-[50vh] flex-col flex items-center text-center mt-10 shadow-xl shadow-gray-200 p-5 '>
                <h1 className='text-pink-600 font-bold text-3xl'>Our Story</h1>
                <p className='text-center w-[90%] mt-5 text-lg text-gray-800'>At Earthly goods, we bring together a curated selection of eco-friendly products from trusted brands and artisans committed to sustainability.
                    Our marketplace is designed to make it easier for conscious consumers to find high-quality,
                    ethically sourced items that align with their values. From reusable household goods and organic personal care products to eco-friendly fashion and handmade crafts,
                    we offer a wide variety of sustainable options that help reduce waste and promote a greener lifestyle.</p>
                <p className='text-center w-[90%] text-lg mt-2 text-gray-800'>We believe that every purchase can be a step toward a more sustainable future.
                    That’s why we partner with vendors who prioritize environmentally responsible practices, fair trade, and cruelty-free production.
                    Whether you're looking to reduce plastic use or support local, eco-conscious creators,
                    Earthly goods is your destination for products that are good for you and kind to the planet.
                    Together, we can create a positive impact, one eco-friendly product at a time.
                </p>
            </div>

            <div className='flex justify-center items-center  flex-col'>
                <div className=' w-full m-8 '>
                    <h3 className='font-bold text-center text-pink-500 text-2xl'>Our Eco-Friendly Product</h3>
                </div>
                <div className='flex gap-8 items-center justify-center flex-wrap'>
                    <div className='h-96 w-96  shadow-xl shadow-gray-200'>
                        <img className='h-80 w-full object-cover' src="https://i.pinimg.com/736x/01/ce/f0/01cef069452d3b6aa7a592c95b751321.jpg" alt="" />
                        <h3 className=' ml-2 text-xl mt-3 font-bold text-gray-900'>Gifts</h3>
                        <p className='ml-2'>Green Gifts, Big Impact.</p>
                    </div>
                    <div className='h-96 w-96  shadow-xl shadow-gray-200'>

                        <img className='h-80 w-full object-cover' src="https://i.pinimg.com/564x/77/83/9b/77839ba48afe212610fb756cb2b7fee3.jpg" alt="" />
                        <h3 className=' ml-2 text-xl mt-3 font-bold text-gray-900'>Fashion Accessories</h3>
                        <p className='ml-2'>Eco-Chic, Always in Fashion.</p>
                    </div>
                    <div className='h-96 w-96  shadow-xl shadow-gray-200'>

                        <img className='h-80 w-full object-cover' src="https://i.pinimg.com/564x/a5/5c/9d/a55c9d29cfa65801d7568e6c4257ebd5.jpg" alt="" />
                        <h3 className=' ml-2 text-xl mt-3 font-bold text-gray-900'>Kitchen</h3>
                        <p className='ml-2'>Waste-Free, Functional Cookware.</p>
                    </div>
                    <div className='h-80 w-96  shadow-xl shadow-gray-200'>

                        <img className='h-80 w-full object-cover' src="https://i.pinimg.com/564x/1c/66/d2/1c66d23c0053c666558d322555d964c4.jpg" alt="" />
                        <h3 className=' ml-2 text-xl mt-3 font-bold text-gray-900'>Bathroom</h3>
                        <p className='ml-2'>Eco-Luxury for Your Bathroom.</p>

                    </div>
                    <div className='h-80 w-96  shadow-xl shadow-gray-200'>

                        <img className='h-80 w-full object-cover' src="https://i.pinimg.com/564x/f6/bf/28/f6bf28fc5ca59538ad8d7698efa7d840.jpg" alt="" />
                        <h3 className=' ml-2 text-xl mt-3 font-bold text-gray-900'>Organic</h3>
                        <p className='ml-2'>Certified Organic, Pure Quality.</p>
                    </div>
                    <div className='h-80 w-96  shadow-xl shadow-gray-200'>

                        <img className='h-80 w-full object-cover' src="https://i.pinimg.com/564x/29/c8/b3/29c8b3abab40145c1dfd02f96dcfc805.jpg" alt="" />
                        <h3 className=' ml-2 text-xl mt-3 font-bold text-gray-900'>Home & Garden</h3>
                        <p className='ml-2'>Nature-Inspired Home Essentials.</p>
                    </div>
                </div>
            </div>
            <div>
                <section className="py-16 mt-5">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-5 text-center">
                            What Our Customers Say
                        </h2>
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full md:w-1/3 p-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <p className="text-gray-600 mb-4">
                                    "earthly goods, offers a fantastic range of eco-friendly products that are both high-quality and sustainable. 
                                    I love supporting ethical brands while making greener choices!"  
                                    </p>
                                    <h4 className="text-xl font-bold">-Mubbasir Sir</h4>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 p-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <p className="text-gray-600 mb-4">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, facilis itaque temporibus consequatur debitis rem?
                                    </p>
                                    <h4 className="text-xl font-bold">-WXYZ</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer Section */}
                <footer className="bg-gray-800 text-white py-3">
                    <div className="container mx-auto text-center">
                        <p>©2024 EcoGoods |Designed with love for the planet.|</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Aboutus