type SearchFilterProps = {
    searchQuery: string;
    handleSearchQuery: (value:string) => void;
}

const SearchFilter = ({searchQuery, handleSearchQuery}: SearchFilterProps) => {
  return (
    <div className="mb-4 w-full">
        <input 
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearchQuery(e.target.value)}
        className="py-2 px-4 rounded border border-gray-300 w-full "
        placeholder="Search for blogs..."
        />
    </div>
  )
}
export default SearchFilter