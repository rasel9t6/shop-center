export default function Category({ category }) {
  return (
    <button className='hover:border-b border-black block h-6 box-border mt-5'>
      {category}
    </button>
  );
}
