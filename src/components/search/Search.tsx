import { useEffect, useState } from "react";
import { GlobalState } from "../context/Context";
import ProductCard from "../product/ProductCard";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

function Search() {
  const { products, searchQuery, setSearchQuery } = GlobalState();

  const [searchResult, setSearchResult] = useState<Product[]>(products);

  useEffect(() => {
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResult(result);
  }, [searchQuery, products]);

  return (
    <div className='flex flex-col items-center'>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='Search...'
        className='focus:ring-2 focus:ring-gray-500 focus:outline-none appearance-none w-[90%] md:w-[75%] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm'
      />
      <div className='w-[85%] grid md:grid-cols-3 gap-4 place-self-center'>
        {searchResult.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Search;
