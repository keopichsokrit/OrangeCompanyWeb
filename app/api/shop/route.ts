import { NextResponse } from 'next/server';
import { shopService } from '@/lib/services/shopService';
import { catalogService } from '@/lib/services/catalogService';

// Tell Turbopack to treat this entirely as a dynamic backend route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; 

export async function GET() {
  try {
    const [products, categories] = await Promise.all([
      shopService.getAllProducts(),
      catalogService.getAllCategories(),
    ]);

    return NextResponse.json({ products, categories });
  } catch (error) {
    console.error("❌ API Route Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}