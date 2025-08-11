export default function ShopLoading() {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-900">Loading products...</p>
          <p className="text-gray-600">Preparing your shopping experience</p>
        </div>
      </div>
    );
  }