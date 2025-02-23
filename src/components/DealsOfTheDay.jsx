import Deals from "./Deals";
import Deals01 from '/deals-01.png'
import Deals02 from '/deals-02.png'
import Deals03 from '/deals-03.png'
import Deals04 from '/deals-04.png'
import { MdKeyboardArrowRight } from "react-icons/md";

const DealsOfTheDay = () => {

  const productsData = [
    {
      id: 1,
      img: Deals01,
      title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
      rating: '2.5',
      author: 'Stouffer',
      oldPrice: '$52.85',
      newPrice: '$55.8',
    },
    {
      id: 2,
      img: Deals02,
      title: 'Perdue Simply Smart Organics Gluten Free',
      rating: '3.5',
      author: 'NestFood',
      oldPrice: '$28.85',
      newPrice: '$32.8',
    },
    {
      id: 3,
      img: Deals03,
      title: "Signature Wood-Fired Mushroom and Caramelized",
      rating: '4.0',
      author: 'StarKist',
      oldPrice: '$48.85',
      newPrice: '$52.8',
    },
    {
      id: 3,
      img: Deals04,
      title: "Simply Lemonade with Raspberry Juice",
      rating: '4.0',
      author: 'StarKist',
      oldPrice: '$48.85',
      newPrice: '$52.8',
    },
  ];
  return (
    <>
      <section className="mt-[55px]" id="dealsOfTheDay">
        <div className="max-w-[1610px] mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-bold text-[32px] leading-[38px]">Deals Of The Day</h2>
            <span className="flex gap-x-1 items-center font-semibold">
              All deals <MdKeyboardArrowRight />
            </span>
          </div>
          <div className="flex gap-x-6">
            {productsData.map((product) => (
              <div key={product.id} className="w-full h-full pr-3">
                <Deals title={product.title} img={product.img} author={product.author} oldPrice={product.oldPrice} newPrice={product.newPrice} rating={product.rating}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DealsOfTheDay