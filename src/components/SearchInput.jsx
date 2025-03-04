import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/slices/filterSlice';
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.filter.searchQuery);

  const handleSearch = () => {
    // Handle search action (if needed, like redirecting to a search results page)
    console.log('Searching for:', searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex-grow flex items-center px-3 xl:px-5 relative">
      <input
        className="w-full h-full outline-none border-none text-[#838383] text-xs xl:text-sm placeholder-gray-400"
        type="text"
        placeholder="Search for items..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        onKeyDown={handleKeyPress}
      />
      <IoIosSearch 
        className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400" 
        onClick={handleSearch} 
      />
    </div>
  );
};

export default SearchInput;
