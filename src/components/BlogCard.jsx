const BlogCard = ({item}) => {
    const {img, title, cat} = item
    return (
        <div className="w-full text-center">
            <img src={img} alt="" className='w-full object-cover' />
            <h6 className='font-bold text-sm text-[#B6B6B6] mt-[19px] mb-[9px]'>{cat}</h6>
            <h3 className='font-bold text-2xl leading-7 mb-3'>{title}</h3>
            <h4 className='mb-7 font-lato text-[13px] leading-[13px] text-[#7E7E7E] flex justify-center items-center gap-x-[22px]'>
                <span className='relative after:absolute after:w-1 after:h-1 after:content-[""] after:bg-[#D2D2D2] after:top-1/2 after:right-[-14px] after:-translate-y-[1/2] after:rounded-full' >25 April 2022</span>
                <span className='relative after:absolute after:w-1 after:h-1 after:content-[""] after:bg-[#D2D2D2] after:top-1/2 after:right-[-14px] after:-translate-y-[1/2] after:rounded-full'>126k Views</span>
                <span>4 mins read</span>
            </h4>
        </div>
    )
}

export default BlogCard