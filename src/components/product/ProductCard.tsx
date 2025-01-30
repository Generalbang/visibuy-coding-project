import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const words = product?.description.split(" ");
  const first10Words = words.slice(0, 10);
  const result = first10Words.join(" ");

  return (
    <Link
      to={`/product/${product.id}`}
      className='relative shadow-md hover:shadow-xl p-4 rounded'
    >
      <div className='best-card capitalize'>
        <div className='best-card-img relative'>
          <img
            style={{ width: "148px", height: "197px" }}
            src={product.image}
            className='flex mx-auto'
            alt={product.title}
          />
        </div>
        <div>
          <p>
            <strong>{product.title}</strong>
          </p>
          <p>{result}...</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
