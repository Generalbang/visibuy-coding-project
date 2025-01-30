import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface VisiContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const VisiContext = createContext<VisiContextType | null>(null);

interface VisiProviderProps {
  children: ReactNode;
}

function VisiProvider({ children }: VisiProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error", err);
        setLoading(false);
      });
  }, []);

  return (
    <VisiContext.Provider
      value={{
        products,
        setProducts,
        loading,
        setLoading,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </VisiContext.Provider>
  );
}

// GlobalState hook with context types
function GlobalState() {
  const context = useContext(VisiContext);
  if (context === null) {
    throw new Error("GlobalState must be used within a VisiProvider");
  }
  return context;
}

export { VisiContext, VisiProvider, GlobalState };
