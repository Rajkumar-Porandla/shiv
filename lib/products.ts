export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: string
  description: string
  features: string[]
  sizes: string[]
  colors: string[]
  isLimited?: boolean
  isNew?: boolean
  isBestseller?: boolean
  rating: number
  reviews: number
  tags: string[]
}

export const products: Product[] = [
  {
    id: 1,
    name: "Neon Rebellion Hoodie",
    price: 89,
    originalPrice: 120,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Hoodies",
    description:
      "Embrace the future with our signature Neon Rebellion Hoodie. Crafted from premium cotton blend with reflective neon accents that glow under UV light. This isn't just clothing—it's a statement of your digital rebellion.",
    features: [
      "Premium 80% cotton, 20% polyester blend",
      "Reflective neon thread detailing",
      "UV-reactive elements",
      "Oversized streetwear fit",
      "Kangaroo pocket with hidden zip compartment",
      "Machine washable",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black/Cyan", "Black/Orange", "Charcoal/Purple"],
    isLimited: true,
    isBestseller: true,
    rating: 4.8,
    reviews: 127,
    tags: ["streetwear", "glow", "oversized", "unisex"],
  },
  {
    id: 2,
    name: "Cyber Edge Jacket",
    price: 149,
    originalPrice: 199,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Jackets",
    description:
      "Step into tomorrow with the Cyber Edge Jacket. Features tech-inspired design elements, water-resistant fabric, and LED-compatible wiring channels for the ultimate cyberpunk aesthetic.",
    features: [
      "Water-resistant ripstop fabric",
      "LED strip integration channels",
      "Multiple utility pockets",
      "Adjustable hood with wire frame",
      "Reflective piping details",
      "YKK zippers throughout",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Matte Black", "Gunmetal Gray", "Electric Blue"],
    isNew: true,
    rating: 4.9,
    reviews: 89,
    tags: ["tech", "cyberpunk", "functional", "waterproof"],
  },
  {
    id: 3,
    name: "Future Punk Tee",
    price: 45,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "T-Shirts",
    description:
      "Express your rebellion with our Future Punk Tee. Featuring holographic print technology and sustainable bamboo fiber blend for comfort that matches your values.",
    features: [
      "60% bamboo fiber, 40% organic cotton",
      "Holographic heat-transfer print",
      "Anti-microbial properties",
      "Breathable and moisture-wicking",
      "Pre-shrunk fabric",
      "Reinforced shoulder seams",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Deep Black", "Midnight Navy", "Ash Gray"],
    isBestseller: true,
    rating: 4.7,
    reviews: 203,
    tags: ["sustainable", "holographic", "basic", "everyday"],
  },
  {
    id: 4,
    name: "Digital Nomad Cargo Pants",
    price: 79,
    originalPrice: 95,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Pants",
    description:
      "Utility meets style in our Digital Nomad Cargo Pants. Designed for the modern rebel who needs function without sacrificing aesthetics. Perfect for urban exploration.",
    features: [
      "Stretch ripstop fabric",
      "8 functional pockets including tech pocket",
      "Adjustable waist with hidden drawstring",
      "Reinforced knee panels",
      "Tapered fit with ankle zips",
      "DWR water-repellent coating",
    ],
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Tactical Black", "Urban Gray", "Olive Drab"],
    rating: 4.6,
    reviews: 156,
    tags: ["cargo", "functional", "techwear", "urban"],
  },
  {
    id: 5,
    name: "Holographic Bomber",
    price: 199,
    originalPrice: 249,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Jackets",
    description:
      "Make a statement with our limited edition Holographic Bomber. Features iridescent fabric that shifts colors in different lighting, perfect for festivals and night scenes.",
    features: [
      "Iridescent holographic fabric",
      "Satin lining with custom print",
      "Ribbed cuffs and hem",
      "Two-way front zipper",
      "Interior phone pocket",
      "Limited edition numbered tag",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rainbow Shift", "Blue-Purple Shift", "Gold-Pink Shift"],
    isLimited: true,
    isNew: true,
    rating: 4.9,
    reviews: 67,
    tags: ["holographic", "festival", "limited", "statement"],
  },
  {
    id: 6,
    name: "Glitch Aesthetic Shorts",
    price: 59,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Shorts",
    description:
      "Summer rebellion starts here. Our Glitch Aesthetic Shorts feature digital-inspired prints and technical fabric for comfort during the hottest days.",
    features: [
      "Quick-dry polyester blend",
      "Digital glitch pattern print",
      "Elastic waistband with drawstring",
      "Side zip pockets",
      "Mesh liner for comfort",
      "UPF 30+ sun protection",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black Glitch", "White Noise", "Neon Static"],
    rating: 4.5,
    reviews: 94,
    tags: ["summer", "digital", "athletic", "quick-dry"],
  },
  {
    id: 7,
    name: "Matrix Code Longsleeve",
    price: 65,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "T-Shirts",
    description:
      "Channel your inner hacker with the Matrix Code Longsleeve. Features cascading code print that's only visible under blacklight, perfect for underground scenes.",
    features: [
      "100% organic cotton",
      "UV-reactive code print",
      "Fitted streetwear cut",
      "Thumb holes in sleeves",
      "Double-stitched seams",
      "Blacklight responsive ink",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Matrix Black", "Terminal Green"],
    isNew: true,
    rating: 4.8,
    reviews: 78,
    tags: ["hacker", "blacklight", "code", "fitted"],
  },
  {
    id: 8,
    name: "Rebel Alliance Crop Top",
    price: 39,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Tops",
    description:
      "Show your allegiance to the rebellion. This crop top features our signature logo with metallic foil printing and a flattering fitted cut.",
    features: [
      "Soft cotton-modal blend",
      "Metallic foil logo print",
      "Cropped fit",
      "Reinforced neckline",
      "Pre-shrunk fabric",
      "Side seam construction",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Jet Black", "Rebel Red", "Electric Blue"],
    isBestseller: true,
    rating: 4.6,
    reviews: 189,
    tags: ["crop", "logo", "metallic", "fitted"],
  },
  {
    id: 9,
    name: "Cyberpunk Utility Vest",
    price: 119,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Vests",
    description:
      "Maximum utility meets minimal design. This tactical-inspired vest features modular attachment points and hidden pockets for the urban explorer.",
    features: [
      "Ripstop nylon construction",
      "MOLLE webbing system",
      "12 hidden pockets",
      "Adjustable side straps",
      "Removable hood",
      "Reflective safety strips",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Tactical Black", "Urban Camo", "Stealth Gray"],
    rating: 4.7,
    reviews: 112,
    tags: ["tactical", "utility", "modular", "urban"],
  },
  {
    id: 10,
    name: "Neon Dreams Track Pants",
    price: 69,
    originalPrice: 85,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Pants",
    description:
      "Comfort meets style in our Neon Dreams Track Pants. Perfect for lounging or making a statement on the streets with reflective side stripes.",
    features: [
      "French terry cotton blend",
      "Reflective side stripe detailing",
      "Elastic waistband with drawstring",
      "Tapered leg with elastic cuffs",
      "Side zip pockets",
      "Embroidered logo",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black/Cyan", "Charcoal/Orange", "Navy/Pink"],
    isBestseller: true,
    rating: 4.5,
    reviews: 167,
    tags: ["comfort", "reflective", "loungewear", "athleisure"],
  },
  {
    id: 11,
    name: "Digital Warrior Tank",
    price: 35,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Tops",
    description:
      "Unleash your inner warrior with this performance tank. Features moisture-wicking fabric and a bold geometric print inspired by digital battlefields.",
    features: [
      "Moisture-wicking polyester",
      "Geometric warrior print",
      "Racerback design",
      "Flatlock seams",
      "UPF 25+ protection",
      "Anti-odor treatment",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Battle Black", "Warrior White", "Combat Gray"],
    rating: 4.4,
    reviews: 143,
    tags: ["performance", "geometric", "athletic", "warrior"],
  },
  {
    id: 12,
    name: "Quantum Flux Windbreaker",
    price: 89,
    originalPrice: 110,
    image: "/placeholder.svg?height=600&width=450",
    images: [
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
      "/placeholder.svg?height=600&width=450",
    ],
    category: "Jackets",
    description:
      "Defy the elements with our Quantum Flux Windbreaker. Features color-changing fabric technology that responds to temperature and movement.",
    features: [
      "Thermochromic color-changing fabric",
      "Wind and water resistant",
      "Packable into chest pocket",
      "Adjustable hood and cuffs",
      "Ventilation zips under arms",
      "Reflective logo placement",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Flux Black", "Quantum Blue", "Thermal Purple"],
    isNew: true,
    isLimited: true,
    rating: 4.9,
    reviews: 56,
    tags: ["color-changing", "packable", "technical", "innovative"],
  },
]

export const categories = ["All", "Hoodies", "Jackets", "T-Shirts", "Tops", "Pants", "Shorts", "Vests"]

export const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $150", min: 100, max: 150 },
  { label: "Over $150", min: 150, max: 999 },
]

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isBestseller || product.isNew || product.isLimited).slice(0, 6)
}

export function getNewProducts(): Product[] {
  return products.filter((product) => product.isNew)
}

export function getBestsellerProducts(): Product[] {
  return products.filter((product) => product.isBestseller)
}

export function getLimitedProducts(): Product[] {
  return products.filter((product) => product.isLimited)
}
