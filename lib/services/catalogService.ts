import { prisma } from '@/lib/prisma';

export const catalogService = {
  // Fetch all categories for your shop navigation or filters
  getAllCategories: async () => {
    try {
      const categories = await prisma.category.findMany({
        orderBy: {
          name: 'asc', // Sorts them alphabetically A-Z
        },
      });
      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
};  