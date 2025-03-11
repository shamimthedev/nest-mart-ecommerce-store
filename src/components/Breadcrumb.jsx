import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="text-sm py-6 mb-[50px] w-full border-b border-[#ECECEC]">
            <div className="container">
                <ul className="flex items-center flex-wrap justify-start space-x-2 text-gray-600 font-semibold leading-6">
                    <li>
                        <Link to="/" className="flex items-center gap-x-1 text-greeny"><AiOutlineHome />Home</Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;

                        return (
                            <li key={to} className="flex items-center">
                                <span className="mx-2"><MdKeyboardArrowRight /></span>
                                {isLast ? (
                                    <span className="capitalize text-[#7E7E7E]">{value}</span>
                                ) : (
                                    <Link to={to} className="hover:text-greeny capitalize">
                                        {value}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
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