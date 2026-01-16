const ProductDetailsSkeleton = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-6 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* IMAGE */}
          <div className="w-full h-105 bg-base-300 rounded-xl"></div>

          {/* CONTENT */}
          <div className="space-y-6">
            <div className="h-4 w-24 bg-base-300 rounded"></div>

            <div className="h-8 w-3/4 bg-base-300 rounded"></div>

            <div className="space-y-2">
              <div className="h-4 w-full bg-base-300 rounded"></div>
              <div className="h-4 w-5/6 bg-base-300 rounded"></div>
            </div>

            <div className="h-8 w-32 bg-base-300 rounded"></div>

            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-3 w-20 bg-base-300 rounded mb-2"></div>
                  <div className="h-4 w-24 bg-base-300 rounded"></div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-20 bg-base-300 rounded-full"
                ></div>
              ))}
            </div>

            <div className="h-12 w-40 bg-base-300 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
