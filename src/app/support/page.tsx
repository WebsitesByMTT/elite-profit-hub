import React from 'react'

const page = () => {
    return (
        <div className='pt-10'>
            <h2 className="text-4xl text-white font-semibold text-center pb-12 pt-7">
                <span className="text-[#00FFAF]">S</span>upport Form
                <span className='block mx-auto bg-white  rounded-lg mt-1.5 h-[5px] w-[150px] md:w-[190px]'></span>
            </h2>
            <div
                className="w-[92%] mb-[5%] md:w-[60%] bg-[#000000] flex flex-col gap-5 md:gap-5 items-center mx-auto py-[1.5rem] px-4 rounded-2xl boxShadow"
            >
                <form className='w-[90%] mr-auto'>
                    <div className='pb-5'>
                        <div className='p-[.8px] w-full  bg-gradient-to-tr  bg-opacity-30 from-[#FFFFFF] via-[#00FFAF] to-[#FFFFFF]'>
                            <div className='bg-[#010101]'>
                                <input className='w-full bg-transparent p-2.5 text-white placeholder:text-white outline-none' type='text' placeholder='Your Name' />
                            </div>
                        </div>
                    </div>
                    <div className='pb-5'>

                        <div className='p-[1.2px] w-full bg-gradient-to-tr  bg-opacity-30 from-[#FFFFFF] via-[#00FFAF] to-[#FFFFFF]'>
                            <div className='bg-[#010101]'>
                                <input className='w-full bg-transparent p-2.5 text-white placeholder:text-white outline-none' type='email' placeholder='Your Email' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-[1px]  bg-gradient-to-tr bg-opacity-30 outline-none from-[#FFFFFF] via-[#00FFAF] to-[#FFFFFF]'>
                        <div className='w-full bg-[#010101]'>
                            <textarea name="" placeholder='Message' id="" rows={10} className='outline-none text-white placeholder:text-white p-2.5 bg-transparent w-full' >
                            </textarea>

                        </div>

                    </div>
                    <div className='flex justify-center pt-8'>
                       <button className='border-[1px] rounded-lg px-[13%] py-3 text-white text-lg md:text-xl' type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default page
