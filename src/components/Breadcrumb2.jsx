import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import Breadcrumb2Img from '/breadcrumb.png'

const Breadcrumb2 = ({title}) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <nav className="text-sm mt-[30px] mb-[50px] w-full">
            <div className="container relative">
                <img src={Breadcrumb2Img} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 left-20 2xl:left-24 transform -translate-y-1/2">
                    <h1 className="mb-[18px] text-[48px] leading-[58px] font-bold">{title}</h1>
                    <ul className="flex items-center justify-start space-x-2 text-gray-600 font-semibold leading-6">
                        <li>
                            <Link to="/" className="flex items-center gap-x-1 text-greeny"><AiOutlineHome />Home</Link>
                        </li>
                        {pathnames.map((value, index) => {
                            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                            const isLast = index === pathnames.length - 1;

                            return (
                                <li key={to} className="flex items-center">
                                    <span className="mx-2">/</span>
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
            </div>
        </nav>
    );
};

export default Breadcrumb2;