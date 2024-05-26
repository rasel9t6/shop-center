import Category from './Category';

export default function Sidebar({
  categories,
  setSelectedCategory,
  handleCategoryClick,
}) {
  return (
    <div className='w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4'>
      <button
        onClick={() => setSelectedCategory(null)}
        className='hover:border-b border-black block h-6 box-border mt-4'
      >
        All
      </button>
      {categories.map((category, i) => (
        <Category
          category={category}
          key={i}
        />
      ))}
    </div>
  );
}
