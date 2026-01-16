const ProductCardSkeleton = () => {
  return (
    <div className="bg-base-200 rounded-xl overflow-hidden border border-base-300 animate-pulse">
      {/* IMAGE */}
      <div className="h-48 bg-base-300"></div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">
        <div className="h-3 w-20 bg-base-300 rounded"></div>

        <div className="h-4 w-3/4 bg-base-300 rounded"></div>

        <div className="h-3 w-full bg-base-300 rounded"></div>
        <div className="h-3 w-5/6 bg-base-300 rounded"></div>

        <div className="flex justify-between items-center pt-2">
          <div className="h-4 w-16 bg-base-300 rounded"></div>
          <div className="h-4 w-24 bg-base-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
