
const Feature = ({title, sub, img}) => {
    return (
        <div className="w-full flex gap-x-5 bg-[#F4F6FA] rounded-[10px] p-5 group">
            <img src={img} alt="" className="transition-all ease-in-out duration-200 group-hover:translate-y-[-5px]"/>
            <div>
                <p className='mb-[5px] font-semibold text-lg leading-[21px]'>{title}</p>
                <span className='font-lato leading-6 text-[#ADADAD]'>{sub}</span>
            </div>
        </div>
    )
}

export default Feature