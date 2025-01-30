import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalState } from "../context/Context";
import Loader from "./../Loader";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

function ProductDetails() {
  const [data, setData] = useState<Product | undefined>(undefined);
  const [count, setCount] = useState<number>(1);
  const { setLoading, loading } = GlobalState();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get<Product>(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error", err);
        setLoading(false);
      });
  }, [id, setLoading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='h-[100%] w-[90%] p-8'>
      <h4>Home &gt; products &gt; {data?.title}</h4>

      <div className='flex flex-col md:grid md:grid-cols-2 py-8'>
        <div style={{ width: "100%" }} className='h-[90%] flex justify-center'>
          <img
            src={data?.image}
            alt={data?.title}
            style={{ width: "75%", height: "80%" }}
          />
        </div>
        <div className='md:w-md'>
          <h2 className='font-bold text-2xl'>{data?.title}</h2>
          <h2 className='font-semibold capitalize text-xl'>{data?.category}</h2>
          <h3 className='mt-4'>
            {data?.rating?.rate} Stars ({data?.rating?.count} Reviews)
          </h3>
          <h2>${data?.price}</h2>
          <p className='mt-4'>{data?.description}</p>
          <div className='flex gap-2 md:gap-4'>
            <div className='flex items-center text-center bg-gray-200 rounded justify-center h-12 mt-6'>
              {count === 1 ? (
                <button className='px-4'>-</button>
              ) : (
                <button
                  onClick={() => setCount((count) => count - 1)}
                  className='px-4 hover:bg-gray-400 hover:rounded cursor-pointer h-full flex items-center'
                >
                  -
                </button>
              )}
              <span className='px-4 h-full flex items-center bg-gray-500'>
                {count}
              </span>

              <button
                className='px-4 hover:bg-gray-400 hover:rounded cursor-pointer h-full flex items-center'
                onClick={() => setCount((count) => count + 1)}
              >
                +
              </button>
            </div>
            <button
              className='w-full h-12 mt-6 px-2 md:px-6 font-semibold rounded-md bg-black text-white cursor-pointer hover:bg-black-400'
              type='submit'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
