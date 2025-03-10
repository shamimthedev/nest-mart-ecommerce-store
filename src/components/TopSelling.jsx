import TopProduct from "./TopProduct"
import TopSelling01 from '/top-selling-01.png'
import TopSelling02 from '/top-selling-02.png'
import TopSelling03 from '/top-selling-03.png'

const TopSelling = ({title, className}) => {
  const productsData = [
      {
        id: 1,
        img: TopSelling01,
        title: 'Nestle Original Coffee-Mate Coffee Creamer',
        rating: '2.5',
        oldPrice: '$52.85',
        newPrice: '$55.8',
      },
      {
        id: 2,
        img: TopSelling02,
        title: 'Perdue Simply Smart Organics Gluten Free',
        rating: '3.5',
        oldPrice: '$28.85',
        newPrice: '$32.8',
      },
      {
        id: 3,
        img: TopSelling03,
        title: "Signature Wood-Fired Mushroom and Caramelized",
        rating: '4.0',
        oldPrice: '$48.85',
        newPrice: '$52.8',
      },
    ];
  return (
    <section className={`mt-0 mx-3 mb-3 pt-[30px] ${className}`}>
      <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">{title}</h2>
      <div className="flex flex-col gap-y-[15px]">
        {productsData.map((product) => (
              <div key={product.id} className="w-full h-full">
                <TopProduct title={product.title} img={product.img} oldPrice={product.oldPrice} newPrice={product.newPrice} rating={product.rating}/>
              </div>
            ))}
      </div>
    </section>
  )
}

export default TopSelling