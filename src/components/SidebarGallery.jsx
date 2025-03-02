import GalleryImg01 from '/top-selling-01.png'
import GalleryImg02 from '/top-selling-02.png'
import GalleryImg03 from '/top-selling-03.png'
import GalleryImg04 from '/product-img-gallary-03.png'
import GalleryImg05 from '/product-img-gallary-04.png'
import GalleryImg06 from '/product-img-gallary-01.png'

const SidebarGallery = () => {
    const imgGallery = [
        {
            id: 1,
            src: GalleryImg01
        },
        {
            id: 2,
            src: GalleryImg02
        },
        {
            id: 3,
            src: GalleryImg03
        },
        {
            id: 4,
            src: GalleryImg04
        },
        {
            id: 5,
            src: GalleryImg05
        },
        {
            id: 6,
            src: GalleryImg06
        },
    ]
    return (
        <>
            <section className="w-full p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md">
                <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Gallery</h2>
                <div className="mt-[38px] flex flex-wrap gap-x-[8px] gap-y-[17px]">
                    {imgGallery.map((item, index) => (
                        <img key={index} src={item.src} className="w-[80px]"/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default SidebarGallery