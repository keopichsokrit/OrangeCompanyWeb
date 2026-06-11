'use client';

import { useEffect } from 'react';
import { Button } from '@/app/component/ui/button';
import { InteractiveButton } from '@/app/component/ui/interactive-button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ShopError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Captured Runtime Shop Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between">
      
      {/* Fallback View Nav Bar matching global theme */}
      <nav className="bg-white border-b border-orange-100 shadow-sm w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-2">
          <span className="text-3xl">🍊</span>
          <span className="text-2xl font-bold text-orange-600">Orange Juice Co.</span>
        </div>
      </nav>

      {/* Main Error Frame */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-md w-full border border-orange-100 rounded-2xl bg-orange-50/10 p-8 text-center shadow-sm">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
            ⚠️
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-2">Failed to load storefront</h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            An unexpected error occurred while streaming product details from our server.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto text-xs px-4 py-2"
            >
              Refresh Page
            </Button>
            
            <InteractiveButton
              variant="secondary"
              size="sm"
              onClick={() => reset()}
              className="w-full sm:w-auto text-xs px-4 py-2 shadow-sm"
            >
              Try Again
            </InteractiveButton>
          </div>
        </div>
      </div>

      {/* Simplified Footer structure for system states */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center text-sm border-t border-gray-800">
        <p className="text-gray-400">&copy; 2026 Orange Juice Co. All rights reserved.</p>
      </footer>
    </div>
  );
}