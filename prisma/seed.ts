import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// 1. Set up a standard PostgreSQL connection pool using your loaded environment variable
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

// 2. Initialize Prisma Client with the driver adapter
const prisma = new PrismaClient({ adapter });



async function main() {
  console.log('🌱 Starting expanded Orange-themed database seeding...');

  // --- 1. VERIFY / CREATE ALL 4 CATEGORIES USING UPSERT ---
  // This ensures we never get duplicate errors for existing categories.
  const freshFruitCat = await prisma.category.upsert({
    where: { name: 'Fresh Citrus' }, // Assumes 'name' is unique in your schema
    update: {},
    create: {
      name: 'Fresh Citrus',
      description: 'Juicy, premium quality natural orange fruits and citrus selections.',
    },
  });

  const fashionCat = await prisma.category.upsert({
    where: { name: 'Orange Fashion' },
    update: {},
    create: {
      name: 'Orange Fashion',
      description: 'Vibrant clothing, streetwear, and accessories styled in various shades of orange.',
    },
  });

  const wellnessCat = await prisma.category.upsert({
    where: { name: 'Orange Wellness & Beauty' },
    update: {},
    create: {
      name: 'Orange Wellness & Beauty',
      description: 'Revitalizing skincare, essential oils, and vitamin-rich beauty products derived from citrus elements.',
    },
  });

  const homeCat = await prisma.category.upsert({
    where: { name: 'Orange Home & Living' },
    update: {},
    create: {
      name: 'Orange Home & Living',
      description: 'Warm, vibrant housewares, scented candles, and decor accents inspired by sun-kissed orange tones.',
    },
  });

  console.log('✅ All 4 category definitions verified and synced.');

  // --- 2. YOUR EXPANDED PRODUCT ARRAY (4 Original + 30 Brand New) ---
  const orangeProducts = [
    // === ORIGINAL 4 PRODUCTS ===
    {
      title: 'Premium Navel Oranges (1kg Bag)',
      description: 'Incredibly sweet, juicy, and completely seedless extra-large navel oranges perfect for eating fresh or juicing.',
      price: 4.99,
      imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e',
      category: freshFruitCat.name,
    },
    {
      title: 'Organic Blood Orange Packs',
      description: 'Deep crimson interior with a sweet raspberry-like citrus flavor profile. High in antioxidants.',
      price: 6.25,
      imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b',
      category: freshFruitCat.name,
    },
    {
      title: 'Minimalist Orange Streetwear Hoodie',
      description: 'Heavyweight 100% organic cotton oversized hoodie finished in a rich, bold orange hue.',
      price: 45.00,
      imageUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518',
      category: fashionCat.name,
    },
    {
      title: 'Classic Orange Canvas Sneakers',
      description: 'Low-top retro skater shoes with durable canvas construction and contrast stitching details.',
      price: 32.99,
      imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59',
      category: fashionCat.name,
    },

    // === 30 NEW PRODUCTS ===
    
    // Category 1: Fresh Citrus Extensions (7 New Items)
    {
      title: 'Cold-Pressed Valencia Juice (1L)',
      description: '100% pure, unpasteurized cold-pressed juice crafted solely from ripe late-season Valencia sweet oranges.',
      price: 7.99,
      imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423',
      category: freshFruitCat.name,
    },
    {
      title: 'Gourmet Seville Orange Marmalade',
      description: 'Traditional tart and bitter-sweet British style preserve featuring hand-cut Seville orange peels.',
      price: 5.49,
      imageUrl: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1',
      category: freshFruitCat.name,
    },
    {
      title: 'Zesty Candied Orange Strips',
      description: 'Slow-simmered orange rinds glazed in premium sugar crystal syrup, perfect for baking or snacking.',
      price: 6.99,
      imageUrl: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e',
      category: freshFruitCat.name,
    },
    {
      title: 'Sweet Seedless Clementine Box (2kg)',
      description: 'A rustic wooden crate packed with child-friendly, ultra-sweet, easy-to-peel miniature clementines.',
      price: 11.50,
      imageUrl: 'https://images.unsplash.com/photo-1552089123-2d26226fc2b7',
      category: freshFruitCat.name,
    },
    {
      title: 'Artisanal Cara Cara Orange Honey',
      description: 'Raw, unfiltered clover honey naturally infused by bees foraging in pink-fleshed Cara Cara orange groves.',
      price: 12.99,
      imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38',
      category: freshFruitCat.name,
    },
    {
      title: 'Dehydrated Citrus Cocktail Wheels',
      description: 'Crisp, air-dried orange wheels preserved beautifully to garnish old fashioneds, teas, or water pitchers.',
      price: 9.99,
      imageUrl: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df',
      category: freshFruitCat.name,
    },
    {
      title: 'Dark Chocolate Orange Ganache Bar',
      description: 'Rich 72% Belgian dark chocolate infused with cold-pressed sweet orange essential oils.',
      price: 4.25,
      imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c',
      category: freshFruitCat.name,
    },

    // Category 2: Orange Fashion Extensions (7 New Items)
    {
      title: 'Neon Tangerine Swim Trunks',
      description: 'Quick-dry summer board shorts featuring a vibrant neon tangerine colorway with custom mesh lining.',
      price: 27.99,
      imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      category: fashionCat.name,
    },
    {
      title: 'Vintage Burnt Orange Corduroy Shacket',
      description: 'A rugged yet soft midweight layer combining a shirt and a jacket, woven in retro deep burnt-orange corduroy.',
      price: 54.00,
      imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5',
      category: fashionCat.name,
    },
    {
      title: 'Embroidered Citrus "Dad" Hat',
      description: 'Adjustable, enzyme-washed low-profile cotton baseball cap featuring a tiny embroidered orange slices icon.',
      price: 18.50,
      imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13ce35',
      category: fashionCat.name,
    },
    {
      title: 'Terracotta Ribbed Knit Beanie',
      description: 'Snug, double-layered winter headwear offering excellent warmth in an earthy terracotta orange color block.',
      price: 14.99,
      imageUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9',
      category: fashionCat.name,
    },
    {
      title: 'Waterproof Tiger-Orange Daypack',
      description: 'Heavy-duty 22L laptop commuter backpack built with weather-proof ripstop nylon and reflective safety strings.',
      price: 48.99,
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
      category: fashionCat.name,
    },
    {
      title: 'Geometric Amber Acetate Sunglasses',
      description: 'Bold retro frames sculpted out of glassy transparent amber-orange acetate outfitted with polarized lenses.',
      price: 29.99,
      imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
      category: fashionCat.name,
    },
    {
      title: 'Cozy Orange Checkerboard Socks',
      description: 'Combed cotton crew socks displaying an eye-catching orange and vintage cream-white checkerboard print.',
      price: 8.00,
      imageUrl: 'https://images.unsplash.com/photo-1582966772680-860e372bb558',
      category: fashionCat.name,
    },

    // Category 3: NEW! Orange Wellness & Beauty (8 New Items)
    {
      title: 'Vitamin C Brightening Serum',
      description: 'Potent skin illuminating formula utilizing 15% active orange extract derivatives to target dark spots.',
      price: 24.99,
      imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
      category: wellnessCat.name,
    },
    {
      title: 'Sweet Orange Cold-Pressed Essential Oil',
      description: '100% therapeutic grade pure essential oil steamed from fresh orange rinds, ideal for diffusers.',
      price: 11.25,
      imageUrl: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108',
      category: wellnessCat.name,
    },
    {
      title: 'Exfoliating Citrus Sea Salt Scrub',
      description: 'Deeply moisturizing body scrub balancing dead sea mineral salt grains, shea butter, and orange oil.',
      price: 16.00,
      imageUrl: 'https://images.unsplash.com/photo-1601612628452-9e99ced43524',
      category: wellnessCat.name,
    },
    {
      title: 'Hydrating Orange Blossom Lip Balm',
      description: 'All-natural beeswax balm enriched with soothing orange blossom nectar and vitamin E oils.',
      price: 3.99,
      imageUrl: 'https://images.unsplash.com/photo-1617224908553-8960387f6575',
      category: wellnessCat.name,
    },
    {
      title: 'Citrus Burst Revitalizing Body Wash',
      description: 'Sulfate-free foaming shower gel packing an energizing natural blood orange aromatic punch.',
      price: 13.50,
      imageUrl: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b24',
      category: wellnessCat.name,
    },
    {
      title: 'Saffron & Bitter Orange Clay Mask',
      description: 'Detoxifying kaolin clay mixture that draws out pores while conditioning facial skin complexions.',
      price: 19.99,
      imageUrl: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0',
      category: wellnessCat.name,
    },
    {
      title: 'Citrus Infused Epsom Bath Salts',
      description: 'Premium muscle recovery crystals formulated with dried orange peels and refreshing eucalyptus leaves.',
      price: 14.50,
      imageUrl: 'https://images.unsplash.com/photo-1531250916782-5d7614f85868',
      category: wellnessCat.name,
    },
    {
      title: 'Organic Orange Peel Powder (100g)',
      description: 'Fine sun-dried citrus peel powder perfect for DIY face masks, soaps, or organic skin preparations.',
      price: 8.49,
      imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363',
      category: wellnessCat.name,
    },

    // Category 4: NEW! Orange Home & Living (8 New Items)
    {
      title: 'Citrus Blossom Hand-Poured Soy Candle',
      description: 'Eco-friendly 10oz soy candle casting relaxing top notes of fresh neroli blossom and warm amber wood.',
      price: 16.99,
      imageUrl: 'https://images.unsplash.com/photo-1603006905003-be475563bc59',
      category: homeCat.name,
    },
    {
      title: 'Marigold Geometric Fringe Throw',
      description: 'Super plush, beautifully woven bohemian style couch throw blanket decorated with marigold tassels.',
      price: 39.99,
      imageUrl: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6',
      category: homeCat.name,
    },
    {
      title: 'Matte Orange Insulated Flask (750ml)',
      description: 'Double-walled vacuum sealed beverage container coated in a rugged, grip-friendly matte orange finish.',
      price: 24.50,
      imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8',
      category: homeCat.name,
    },
    {
      title: 'Velvet Tiger Lily Accent Pillow Casing',
      description: 'Ultra-soft velvet decorative throw pillow covers featuring heavy hidden zipper enclosures.',
      price: 15.99,
      imageUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2',
      category: homeCat.name,
    },
    {
      title: 'Minimalist Ceramic Orange Vase',
      description: 'Matte-glazed mid-century modern circular clay pottery designed to host dried botanicals beautifully.',
      price: 22.00,
      imageUrl: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d',
      category: homeCat.name,
    },
    {
      title: 'Retro Orange Citrus Kitchen Timer',
      description: 'Mechanical 60-minute ticking loud countdown alarm shaped like an authentic navel orange fruit.',
      price: 10.99,
      imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e',
      category: homeCat.name,
    },
    {
      title: 'Linen Tangerine Dinner Napkins (Set of 4)',
      description: '100% natural pre-washed soft flax linen table napkins colored in a classic celebratory tangerine tint.',
      price: 18.00,
      imageUrl: 'https://images.unsplash.com/photo-1616627561950-9f746e330187',
      category: homeCat.name,
    },
    {
      title: 'Persimmon Silicon Baking Mat Set',
      description: 'Non-stick, high-temperature culinary grade pastry sheets bordered in bright persimmon orange trim.',
      price: 14.99,
      imageUrl: 'https://images.unsplash.com/photo-1590113789935-e6f6630f9d92',
      category: homeCat.name,
    }
  ];

  // --- 3. PROCESS PRODUCTS VIA UPSERT ---
  // If the product title already exists, update its info. If it's new, insert it!
  for (const item of orangeProducts) {
    const seededProduct = await prisma.product.upsert({
      where: { title: item.title }, // Matches your unique item key identifiers
      update: {
        description: item.description,
        price: item.price,
        imageUrl: item.imageUrl,
        category: item.category,
      },
      create: item,
    });
    console.log(`📦 Synced Product: ${seededProduct.title} (${seededProduct.category})`);
  }

  console.log('✨ Database successfully populated with 34 orange-themed records without duplicates!');
}

main()
  .catch((error) => {
    console.error('❌ Error while execution of seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });