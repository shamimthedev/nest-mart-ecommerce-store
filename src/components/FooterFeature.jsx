import Feature from './Feature'
import Feature1 from '/feature01.svg'
import Feature2 from '/feature02.svg'
import Feature3 from '/feature03.svg'
import Feature4 from '/feature04.svg'
import Feature5 from '/feature05.svg'
import Feature6 from '/feature-06.svg'

const FooterFeature = () => {
    const featureData = [
        {
            id: 1,
            img: Feature1,
            title: 'Best prices & offers',
            sub: 'Orders $50 or more'
        },
        {
            id: 2,
            img: Feature2,
            title: 'Free delivery',
            sub: '24/7 amazing services'
        },
        {
            id: 3,
            img: Feature3,
            title: 'Great daily deal',
            sub: 'When you sign up'
        },
        {
            id: 4,
            img: Feature4,
            title: 'Wide assortment',
            sub: 'Mega Discounts'
        },
        {
            id: 5,
            img: Feature5,
            title: 'Easy returns',
            sub: 'Within 30 days'
        },
        {
            id: 6,
            img: Feature6,
            title: 'Safe delivery',
            sub: 'Within 30 days'
        },
    ]
    return (
        <>
            <div className="container flex flex-wrap gap-[15px]">
                {featureData.map((feature) => {
                    return (
                        <div className="w-full sm:w-[300px]" key={feature.id}>
                            <Feature title={feature.title} sub={feature.sub} img={feature.img} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FooterFeature