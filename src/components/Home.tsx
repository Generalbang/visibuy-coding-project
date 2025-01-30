import ProductCard from "./product/ProductCard";
import { GlobalState } from "./context/Context";
import Loader from "./Loader";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

function Home() {
  const { products, loading } = GlobalState();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='w-[85%] grid md:grid-cols-3 gap-4 place-self-center'>
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
