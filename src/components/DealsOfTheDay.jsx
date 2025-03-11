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
        <div className="container">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-bold text-[32px] leading-[38px]">Deals Of The Day</h2>
            <span className="hidden md:flex gap-x-1 items-center font-semibold">
              All deals <MdKeyboardArrowRight />
            </span>
          </div>
          
          {/* Show only 2 items on small devices */}
          <div className="flex flex-wrap gap-6 lg:hidden">
            {productsData.slice(0, 2).map((product) => (
              <div key={product.id} className="w-full xs:w-[340px]">
                <Deals
                  title={product.title}
                  img={product.img}
                  author={product.author}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  rating={product.rating}
                />
              </div>
            ))}
          </div>

          {/* Show the rest of the items on larger devices */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 2xl:hidden">
            {productsData.slice(0, 3).map((product) => (
              <div key={product.id} className="lg:w-[340px]">
                <Deals
                  title={product.title}
                  img={product.img}
                  author={product.author}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  rating={product.rating}
                />
              </div>
            ))}
          </div>

          {/* Show the rest of the items on larger devices */}
          <div className="hidden 2xl:grid 2xl:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <div key={product.id} className="2xl:w-[340px]">
                <Deals
                  title={product.title}
                  img={product.img}
                  author={product.author}
                  oldPrice={product.oldPrice}
                  newPrice={product.newPrice}
                  rating={product.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DealsOfTheDay