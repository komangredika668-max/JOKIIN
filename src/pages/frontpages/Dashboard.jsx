import { products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";

export default function Dashboard() {
  return (
    <div className="px-5">
      <h1 className="text-2xl font-bold mb-4">
        Dashboard Produk
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard
            p={item}
          />
        ))}
      </div>
    </div>
  );
}