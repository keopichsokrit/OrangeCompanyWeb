import { prisma } from '@/lib/prisma';

export const shopService = {
  /**
   * Fetches all products from the database,
   * sorted by the newest items first.
   */
  getAllProducts: async () => {
    try {
      const products = await prisma.product.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      return products;
    } catch (error) {
      console.error("Error fetching products in shopService:", error);
      throw error;
    }
  }
};