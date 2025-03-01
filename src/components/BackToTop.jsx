import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 w-8 h-8 grid place-items-center z-50 text-[#253D4E] border border-[#253D4E] rounded-full shadow-lg transition-all ease-in-out duration-300 cursor-pointer hover:translate-y-[-4px] ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Back to top"
        >
            <BsArrowUp size={20} />
        </button>
    );
};

export default BackToTop;
