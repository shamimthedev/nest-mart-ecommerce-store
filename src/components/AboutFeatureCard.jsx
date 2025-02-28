import AboutFeature01 from '/about-feature-01.svg'

const AboutFeatureCard = () => {
    return (
        <div className="w-[423px] rounded-[15px] border border-[#ECECEC] hover:border-green-100 hover:shadow-md transition-all grid place-items-center gap-y-8 px-[34px] py-[51px]">
            <img src={AboutFeature01} alt="" className='w-[100px] h-[100px] object-cover' />
            <h3>Best Prices & Offers</h3>
            <p>There are many variations of passages of Lorem
                Ipsum available, but the majority have suffered
                alteration in some form</p>
            <button>Read more</button>
        </div>
    )
}

export default AboutFeatureCard