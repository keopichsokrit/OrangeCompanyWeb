import { shopService } from '@/lib/services/shopService';
import { catalogService } from '@/lib/services/catalogService';
import { Button } from '@/app/component/ui/button';
import { InteractiveButton } from '@/app/component/ui/interactive-button';
import Link from "next/link";
import { 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Footer from "../component/layout/footer";

export const dynamic = 'force-dynamic';

// Define how many items to show on one page index
const ITEMS_PER_PAGE = 10;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>
}) {
  // Resolve the search parameters safely
  const resolvedSearchParams = await searchParams;
  const activeCategory = resolvedSearchParams.category;
  
  // Safely parse the active page index (defaults to 1 if missing or invalid)
  const currentPage = Math.max(1, parseInt(resolvedSearchParams.page || '1', 10));

  let rawProducts: any[] = [];
  let rawCategories: any[] = [];

  try {
    [rawProducts, rawCategories] = await Promise.all([
      shopService.getAllProducts(),
      catalogService.getAllCategories(),
    ]);
  } catch (error) {
    console.error("Error fetching data in ShopPage:", error);
    // Fallback variables remain empty arrays to keep rendering intact without breaking downstream arrays
  }

  // Sorting logic 
  const products = [...rawProducts].sort((a, b) => a.title.localeCompare(b.title));
  const categories = [...rawCategories].sort((a, b) => a.name.localeCompare(b.name));

  // Dynamic Filtering Logic based on URL search query
  const filteredProducts = activeCategory
    ? products.filter((product) => product.category?.toLowerCase() === activeCategory.toLowerCase())
    : products;

  // --- PAGINATION MATH ---
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  
  // Calculate index ranges for the slice operation
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  
  // Slice down to show only 10 products at a time
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Helper utility to persist category parameters when flipping pages
  const createPageLink = (pageNumber: number) => {
    const params = new URLSearchParams();
    if (activeCategory) params.set('category', activeCategory);
    params.set('page', pageNumber.toString());
    return `?${params.toString()}`;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased">
      
      {/* Global Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 group cursor-pointer">
              <Sparkles className="h-6 w-6 text-orange-600 transition-transform group-hover:rotate-12 duration-300" />
              <span className="text-2xl font-extrabold tracking-tight text-orange-600">Orange Co.</span>
            </div>
            <div className="hidden sm:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Home
              </Link>
              <a href="#products" className="text-sm font-semibold text-orange-700 transition-colors">
                Products
              </a>
              <a href="/contact" className="text-sm font-semibold text-gray-700 hover:text-orange-700 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Framework Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
        
        {/* Modern Interactive Header Banner */}
        <header className="mb-10 border-b border-orange-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3">
              <span role="img" aria-label="Lightning bolt icon">⚡</span> Live Marketplace
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Orange <span className="text-orange-600 font-extrabold">Marketplace</span>
            </h1>
            <p className="text-gray-700 text-sm mt-1 max-w-xl leading-relaxed">
              Discover our signature citrus collections, raw cold-pressed configurations, and artisan custom apparel.
            </p>
          </div>
          <div className="text-xs font-mono text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200 self-start md:self-auto">
            Items Tracked: {totalItems} Products
          </div>
        </header>

        {/* Workspace Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10 items-start w-full">
          
          {/* Left Layout Column: Sidebar Filter */}
          <nav aria-label="Product Categories" className="md:col-span-1 lg:col-span-1 bg-gray-50 rounded-2xl p-5 border border-gray-200 md:sticky top-24 w-full">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-4 px-1">
              Filter Categories
            </h2>
            {categories.length === 0 ? (
              <p className="text-xs text-gray-600 italic p-1">No production modules located.</p>
            ) : (
              <ul className="space-y-2">
                <li>
                  <Link href="/shop" scroll={false}>
                    <Button
                      variant="primary"
                      size="sm"
                      aria-current={!activeCategory ? "page" : undefined}
                      className={`w-full text-left justify-start font-bold transition-all duration-200 py-2.5 px-3 rounded-xl border !text-current ${
                        !activeCategory 
                          ? "bg-orange-600 border-orange-600 text-white focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none" 
                          : "bg-white border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white hover:border-orange-600 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                      }`}
                    >
                      <span className={`text-xs mr-2 transition-colors duration-200 ${!activeCategory ? "text-orange-200" : "text-orange-600"}`}>⊙</span>
                      <span className={!activeCategory ? "text-white" : "text-orange-700"}>All Offerings</span>
                    </Button>
                  </Link>
                </li>

                {categories.map((category) => {
                  const isSelected = activeCategory?.toLowerCase() === category.name.toLowerCase();
                  return (
                    <li key={category.id}>
                      <Link href={`?category=${encodeURIComponent(category.name)}`} scroll={false}>
                        <Button
                          variant="primary"
                          size="sm"
                          aria-current={isSelected ? "page" : undefined}
                          className={`w-full text-left justify-start font-bold transition-all duration-200 py-2.5 px-3 rounded-xl border !text-current ${
                            isSelected 
                              ? "bg-orange-600 border-orange-600 text-white focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none" 
                              : "bg-white border-orange-600 text-orange-700 hover:bg-orange-600 hover:text-white hover:border-orange-600 shadow-sm focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
                          }`}
                        >
                          <span className={`text-xs mr-2 transition-colors duration-200 ${isSelected ? "text-orange-200" : "text-orange-600"}`}>⊙</span>
                          <span className={isSelected ? "text-white" : "text-orange-700"}>
                            {category.name}
                          </span>
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </nav>

          {/* Right Layout Column: Dynamic Product Display */}
          <main className="md:col-span-2 lg:col-span-3 w-full" id="products" aria-live="polite">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900 tracking-tight">
                {activeCategory ? `${activeCategory} Collection` : "All Available Offerings"}
              </h2>
              <div className="h-px bg-gray-200 flex-grow mx-4 hidden sm:block"></div>
            </div>
            
            {paginatedProducts.length === 0 ? (
              <div className="text-center py-16 border-2 border-dashed border-orange-300 rounded-2xl bg-gradient-to-b from-orange-50 to-transparent px-4">
                <div className="text-4xl mb-3">📦</div>
                <p className="text-gray-900 font-semibold text-base">No items found in this section.</p>
                <p className="text-xs text-gray-600 mt-1 max-w-xs mx-auto leading-relaxed">
                  Execute your local <code className="font-mono bg-gray-100 text-gray-700 px-1 py-0.5 rounded text-[11px]">prisma db seed</code> utility pipeline to populate data models here!
                </p>
              </div>
            ) : (
              <>
                {/* Product Grid - Shows max 10 items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedProducts.map((product) => (
                    <article 
                      key={product.id} 
                      className="group border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400 transition-all duration-300 flex flex-col bg-white"
                    >
                      <div className="aspect-square bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden flex items-center justify-center border-b border-gray-200">
                        {product.imageUrl ? (
                          <img 
                            src={product.imageUrl} 
                            alt={product.title}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 text-xs gap-1.5 select-none">
                            <span className="text-2xl filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" role="img" aria-label="Missing item asset preview placeholder">🍊</span>
                            <span className="font-medium tracking-wide text-[11px] text-gray-600">No Preview File Loaded</span>
                          </div>
                        )}
                        
                        {product.category && (
                          <span className="absolute top-3 left-3 bg-gray-900 text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md font-bold shadow-sm border border-white/10 group-hover:bg-orange-600 transition-colors duration-300">
                            {product.category}
                          </span>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-bold text-gray-900 text-base min-h-[1.5rem] mb-1 tracking-tight transition-colors duration-200 group-hover:text-orange-600 break-words">
                          {product.title}
                        </h3>
                        <p className="text-gray-700 text-xs min-h-[2.5rem] mb-5 flex-grow leading-relaxed break-words">
                          {product.description || "No customized product narrative context has been configured for this item."}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold tracking-wider text-gray-600 leading-none mb-0.5">Price</span>
                            <span className="text-lg font-black text-gray-900 tracking-tight">
                              ${product.price.toFixed(2)}
                            </span>
                          </div>
                          <InteractiveButton
                            variant="secondary"
                            size="sm"
                            actionType="console"
                            actionMessage={`User clicked Add to Cart for item: ${product.title}`}
                            aria-label={`Add ${product.title} to cart`}
                            className="shadow-sm shadow-orange-500/10 hover:shadow-orange-500/20 text-xs px-3.5 py-2 font-bold tracking-wide rounded-xl transform active:scale-95 transition-all focus:ring-2 focus:ring-orange-500 focus:outline-none"
                          >
                            Add to Cart
                          </InteractiveButton>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* --- INDEX PAGINATION NAV CONTROLLER --- */}
                {totalPages > 1 && (
                  <nav aria-label="Shop Page Navigation" className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-gray-100">
                    
                    {/* Backward Pagination Arrow */}
                    {currentPage > 1 ? (
                      <Link 
                        href={createPageLink(currentPage - 1)} 
                        className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-all"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Link>
                    ) : (
                      <div className="p-2.5 rounded-xl border border-gray-100 text-gray-300 cursor-not-allowed">
                        <ChevronLeft className="h-4 w-4" />
                      </div>
                    )}

                    {/* Numeric Pagination Index Elements */}
                    {Array.from({ length: totalPages }, (_, i) => {
                      const pageNum = i + 1;
                      const isCurrentPage = pageNum === currentPage;

                      return (
                        <Link key={pageNum} href={createPageLink(pageNum)}>
                          <button
                            disabled={isCurrentPage}
                            className={`min-w-[40px] h-10 rounded-xl font-bold text-xs border transition-all duration-200 ${
                              isCurrentPage
                                ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-600/20 cursor-default"
                                : "bg-white border-gray-200 text-gray-700 hover:border-orange-400 hover:text-orange-600"
                            }`}
                          >
                            {pageNum}
                          </button>
                        </Link>
                      );
                    })}

                    {/* Forward Pagination Arrow */}
                    {currentPage < totalPages ? (
                      <Link 
                        href={createPageLink(currentPage + 1)} 
                        className="p-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-all"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <div className="p-2.5 rounded-xl border border-gray-100 text-gray-300 cursor-not-allowed">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    )}

                  </nav>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* Corporate Global App Footer */}
      <Footer/>
    </div>
  );
}