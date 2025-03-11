

const AboutFeatureCard = ({feature}) => {
   const {title, img} = feature
    return (
        <div className="w-full rounded-[15px] border border-[#ECECEC] hover:border-green-100 hover:shadow-md transition-all grid place-items-center gap-y-[30px] px-[34px] py-[51px] leading-6 group">
            <img src={img} alt="" className='w-[100px] h-[100px] object-cover mb-[7px] transition-all ease-in-out duration-200 group-hover:translate-y-[-4px]' />
            <h3 className='font-bold'>{title}</h3>
            <p className='mb-1 font-lato text-center text-[#7E7E7E]'>There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
            <button className='border-none font-lato outline-none text-greeny'>Read more</button>
        </div>
    )
}

export default AboutFeatureCard