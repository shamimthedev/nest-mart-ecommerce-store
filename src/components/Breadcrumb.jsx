import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="text-sm mt-[30px] mb-[50px]">
            <ul className="flex items-center space-x-2 text-gray-600">
                <li>
                    <Link to="/" className="hover:text-greeny">Home</Link>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={to} className="flex items-center">
                            <span className="mx-2">/</span>
                            {isLast ? (
                                <span className="text-greeny font-semibold capitalize">{value}</span>
                            ) : (
                                <Link to={to} className="hover:text-greeny capitalize">
                                    {value}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;


{/* <div className="mt-[30px] mb-[50px] w-full h-[237px] rounded-[20px] relative">
                    <img src={BreadcrumbImg} alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-[70px] left-[68px]">
                        <div className="px-3">
                            <h1 className="mb-[18px] text-[48px] leading-[58px] font-bold">Snack</h1>
                            <ul className="flex font-semibold font-lato text-sm leading-6 text-[#7E7E7E] items-center gap-x-3">
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Snack</li>
                            </ul>
                        </div>
                    </div>
                </div> */}