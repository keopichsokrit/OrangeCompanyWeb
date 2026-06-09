'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../component/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center border-2 border-red-200">
        <div className="text-6xl mb-4">⚠️</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-2">Error in Catalog Page</p>
        <p className="text-gray-500 text-sm mb-8 bg-gray-100 p-4 rounded-lg break-words">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={reset}
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold"
          >
            Try Again
          </Button>
          <Link href="/">
            <Button size="lg" variant="secondary" className="text-white font-bold">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
