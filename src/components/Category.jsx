import Category1 from '/category-1.svg.svg'
import Category3 from '/category-2.svg.svg'
import Category2 from '/category-3.svg.svg'
import Category4 from '/category-4.svg.svg'
import Category5 from '/category-5.svg.svg'

const Category = () => {
  const categoryData = [
    {
      id: 1,
      img: Category3,
      title: 'Milks & Dairies',
      qty: 3
    },
    {
      id: 2,
      img: Category2,
      title: 'Clothing',
      qty: 4
    },
    {
      id: 3,
      img: Category4,
      title: 'Pet Foods',
      qty: 5
    },
    {
      id: 4,
      img: Category5,
      title: 'Baking material',
      qty: 8
    },
    {
      id: 5,
      img: Category1,
      title: 'Fresh Fruit',
      qty: 10
    },
  ]
  return (
    <>
      <section className="w-full p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md">
        <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Category</h2>
        <div className="flex flex-col gap-y-[15px]">
          {categoryData.map((category) => {
            return (
              <div key={category.id} className="w-full flex px-[19px] py-[10px] rounded-[5px] border border-[#F2F3F4] justify-between items-center font-lato">
                <div className="flex gap-x-[15px] items-center">
                  <img src={category.img} alt={category.title} className='w-[30px] h-[30px]' />
                  <h3 className='text-sm leading-[21px]'>{category.title}</h3>
                </div>
                <div className="flex items-center justify-center bg-[#BCE3C9] rounded-full h-6 w-6 text-xs leading-">
                  <span>{category.qty}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Category