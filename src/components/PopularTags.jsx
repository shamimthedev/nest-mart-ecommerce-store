import { RxCross2 } from "react-icons/rx";

const PopularTags = () => {
    const tagsList = [
        {
            id: 1,
            tag: 'Cabbage'
        },
        {
            id: 2,
            tag: 'Broccoli'
        },
        {
            id: 3,
            tag: 'Smoothie'
        },
        {
            id: 4,
            tag: 'Fruit'
        },
        {
            id: 5,
            tag: 'Salad'
        },
        {
            id: 6,
            tag: 'Appetizer'
        },
    ]
    return (
        <>
            <section className="w-full p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md">
                <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Popular Tags</h2>
                <div className="mt-[30px] flex flex-wrap gap-x-[8px] gap-y-[17px]">
                    {tagsList.map((item, index) => (
                        <div key={index} className="w-fit px-[21px] py-3 h-[46px] flex items-center justify-center gap-x-[10px] border border-[#ECECEC] rounded-[30px] bg-white shadow-md text-greeny" >
                            <RxCross2 size={10} color="#B6B6B6"/>
                            <span className="font-bold text-[17px] leading-6">{item.tag}</span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default PopularTags