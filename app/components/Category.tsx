type CategoryProps = {
    categories: string[];
    selectedCategory: string;
    setSelectedCategory: (value: string) => void
}

const Category: React.FC<CategoryProps> = ({categories, selectedCategory, setSelectedCategory}) => {
  return (
    <div className="flex items-end justify-end w-full mt-4">
      <div className="flex items-center justify-center space-x-3">
        {Array.from({length: categories.length}, (_, i) => (
        <button
        key={i}
        className={`py-1 px-3 rounded text-white cursor-pointer ${categories[i] === selectedCategory ? 'bg-green-500' : 'bg-gray-900'}`}
        onClick={() => setSelectedCategory(categories[i])}
        >
          {categories[i]}
        </button>
      ))}
      </div>
    </div>
  )
}
export default Category