import Product from "./Product"
import { productsData } from './../data/DB';

const PopularProducts = () => {
  return (
    <>
      <section className="mt-[55px]">
        <div className="max-w-[1610px] mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-bold text-[32px] leading-[38px]">Popular Products</h2>
            <div>
              <ul className="flex gap-x-7 items-center font-semibold">
                <li>All</li>
                <li>Milks & Dairies</li>
                <li>Coffees & Teas</li>
                <li>Pet Foods</li>
                <li>Meats</li>
                <li>Vegetables</li>
                <li>Fruits</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            {productsData.map((product, index)=>(
              <div className="w-[300px]" key={index}>
                <Product product={product}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularProducts