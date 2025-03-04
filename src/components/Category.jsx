import { categoryData } from "../data/DB"

const Category = ({ onclick }) => {

  return (
    <>
      <section className="w-full p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md">
        <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Category</h2>
        <div className="flex flex-col gap-y-[15px]">
          {categoryData.map((category) => {
            return (
              <div key={category.id} className="w-full flex px-[19px] py-[10px] rounded-[5px] border border-[#F2F3F4] justify-between items-center font-lato cursor-pointer transition-all ease-in-out duration-200 hover:border-green-200 hover:shadow-sm" onClick={onclick}>
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

export default Category;