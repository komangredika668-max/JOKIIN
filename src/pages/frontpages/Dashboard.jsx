import { products } from "../../utils/data";
import ProductCard from "../../components/ProductCard";

export default function Dashboard() {
  return (
    <div className="px-5 mx-4">
      <h1 className="text-3xl font-bold mb-2">
        Game yang Tersedia 
      </h1>
      <p className="mb-5">Pilih game pavoritmu untuk melihat daftar layanan</p>

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