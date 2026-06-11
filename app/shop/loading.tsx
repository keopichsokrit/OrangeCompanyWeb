import { Sparkles } from "lucide-react";

export default function ShopLoading() {
  // Array to skeleton map 10 matching loading item placeholders
  const skeletonCards = Array.from({ length: 10 });
  // Array to skeleton map 5 matching loading category side tabs
  const skeletonCategories = Array.from({ length: 5 });

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col antialiased select-none pointer-events-none">
      
      {/* Global Navigation Bar Skeleton */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Left side: Logo */}
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-orange-400 animate-pulse" />
              <span className="text-2xl font-extrabold tracking-tight text-orange-600 opacity-60">Orange Co.</span>
            </div>
            
            {/* Right side wrapper: Links and Auth buttons */}
            <div className="hidden sm:flex items-center gap-8">
              <div className="flex items-center gap-8">
                <span className="text-sm font-semibold text-orange-400 opacity-50">Home</span>
                <span className="text-sm font-semibold text-gray-400">Products</span>
                <span className="text-sm font-semibold text-gray-400">Contact</span>
              </div>

              <div className="h-4 w-px bg-orange-200"></div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-20 h-9 bg-orange-200 rounded-xl animate-pulse"></div>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Main Framework Container */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
        
        {/* Modern Header Banner Skeleton */}
        <header className="mb-10 border-b border-orange-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-3 w-full max-w-xl">
            <div className="w-32 h-5 bg-orange-100 rounded-full animate-pulse"></div>
            <div className="w-3/4 h-9 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="space-y-1.5">
              <div className="w-full h-4 bg-gray-100 rounded animate-pulse"></div>
              <div className="w-5/6 h-4 bg-gray-100 rounded animate-pulse"></div>
            </div>
          </div>
          <div className="w-36 h-7 bg-gray-100 rounded-lg border border-gray-200 animate-pulse self-start md:self-auto"></div>
        </header>

        {/* Workspace Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-10 items-start w-full">
          
          {/* Left Layout Column: Sidebar Categories Skeleton */}
          <nav className="md:col-span-1 lg:col-span-1 bg-gray-50 rounded-2xl p-5 border border-gray-200 md:sticky top-24 w-full space-y-4">
            <div className="w-28 h-3 bg-gray-200 rounded animate-pulse px-1"></div>
            
            <ul className="space-y-2">
              {/* Active Placeholder representing 'All Offerings' */}
              <li>
                <div className="w-full h-9 bg-orange-600/10 border border-orange-200 rounded-xl animate-pulse"></div>
              </li>
              {/* Loop dynamic categories skeleton placeholders */}
              {skeletonCategories.map((_, index) => (
                <li key={index}>
                  <div className="w-full h-9 bg-white border border-gray-200 rounded-xl animate-pulse"></div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Layout Column: Dynamic Product Grid Display Skeleton */}
          <main className="md:col-span-2 lg:col-span-3 w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="w-48 h-6 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-px bg-gray-200 flex-grow mx-4 hidden sm:block"></div>
            </div>
            
            {/* Dynamic Product Grid Matching original item geometry layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skeletonCards.map((_, index) => (
                <article 
                  key={index} 
                  className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col bg-white"
                >
                  {/* Square Aspect Ratio Asset Placeholder Container */}
                  <div className="aspect-square bg-gray-100 animate-pulse border-b border-gray-100"></div>

                  {/* Meta Card Description Area Text Skeletons */}
                  <div className="p-5 flex flex-col flex-grow space-y-3">
                    <div className="w-2/3 h-5 bg-gray-200 rounded animate-pulse mb-1"></div>
                    <div className="space-y-2 flex-grow">
                      <div className="w-full h-3 bg-gray-100 rounded animate-pulse"></div>
                      <div className="w-4/5 h-3 bg-gray-100 rounded animate-pulse"></div>
                    </div>
                    
                    {/* Price and Cart Interaction Block */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                      <div className="space-y-1">
                        <div className="w-8 h-2 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-14 h-5 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                      <div className="w-24 h-8 bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>

        </div>
      </div>

    </div>
  );
}