import NotFound from '/page-404.png'
import { AiOutlineHome } from "react-icons/ai";

const Error = () => {
    return (
        <>
            <section className="max-w-[1610px] mx-auto py-11">
                <div className="w-[75%] p-[100px] text-center m-auto h-auto">
                    <img src={NotFound} alt="Not Found" className='max-w-[350px] mx-auto mb-5 transition-all ease-in-out duration-300 hover:translate-y-[-6px]' />
                    <h1 className='mb-6 font-bold text-7xl leading-[72px]'>Page Not Found</h1>
                    <p className='text-[#7E7E7E] leading-6 mb-8 max-w-[70%] mx-auto'>The link you clicked may be broken or the page may have been removed.
                        visit the <span className='text-greeny'>Homepage</span> or <span className='text-greeny'>Contact us</span> about the problem</p>
                    <div className="flex justify-center">
                        <button className="w-[240px] font-bold leading-[21px] tracking-[0.5px] bg-greeny rounded-sm text-white py-3 px-4 flex justify-center items-center gap-2 transition-all ease-in-out duration-300 hover:translate-y-[-4px] cursor-pointer hover:bg-[#FDC040]">
                            <AiOutlineHome className="w-4 h-4" />
                            Back To Home Page
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error