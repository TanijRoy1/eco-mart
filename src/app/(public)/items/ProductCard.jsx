import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const { _id, name, description, price, image, category } = product;

  return (
    <div className="bg-base-200 rounded-xl overflow-hidden border border-base-300 hover:border-primary transition">
      <div className="relative h-48 bg-base-300">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <span className="text-xs text-primary font-medium">{category}</span>

        <h3 className="font-semibold text-base-content line-clamp-1">{name}</h3>

        <p className="text-sm text-base-content/70 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-3">
          <span className="font-bold text-primary">${price}</span>

          <Link
            href={`/items/${_id}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
