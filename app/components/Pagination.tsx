interface PaginationProps  {
    totalPages: number,
    currentPage: number,
    setCurrentPage: (value:number) => void
}

const Pagination: React.FC<PaginationProps> = ({totalPages, currentPage, setCurrentPage}) => {
  return (
    <div className="justify-center flex gap-2 mt-8">
      {Array.from({length: totalPages}, (_, index) => (
        <button
        key={index + 1}
        className={`px-2 py-1 cursor-pointer rounded ${currentPage === index + 1 ? 'bg-green-600 text-white': 'bg-gray-900 text-gray-200'}`}
        onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1 }
        </button>
      ))}
    </div>
  )
}
export default Pagination