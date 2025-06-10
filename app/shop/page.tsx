"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Filter, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { InteractiveCursor } from "@/components/interactive-cursor"

const products = [
  {
    id: 1,
    name: "Neon Rebellion Hoodie",
    price: 89,
    image: "/placeholder.svg?height=400&width=300",
    category: "Hoodies",
  },
  {
    id: 2,
    name: "Cyber Edge Jacket",
    price: 149,
    image: "/placeholder.svg?height=400&width=300",
    category: "Jackets",
  },
  {
    id: 3,
    name: "Future Punk Tee",
    price: 45,
    image: "/placeholder.svg?height=400&width=300",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "Digital Nomad Pants",
    price: 79,
    image: "/placeholder.svg?height=400&width=300",
    category: "Pants",
  },
  {
    id: 5,
    name: "Holographic Bomber",
    price: 199,
    image: "/placeholder.svg?height=400&width=300",
    category: "Jackets",
  },
  {
    id: 6,
    name: "Glitch Aesthetic Shorts",
    price: 59,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shorts",
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <InteractiveCursor />

      {/* Header */}
      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SHOP</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover pieces that define your rebellion. Each item crafted for the fearless.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12"
          >
            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                All Categories
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input placeholder="Search products..." className="pl-10 bg-gray-900 border-gray-700 text-white w-64" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                    <div className="relative overflow-hidden rounded-xl bg-black">
                      <div className="aspect-[3/4] relative overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button className="bg-white text-black hover:bg-gray-200 font-bold">
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Quick Add
                          </Button>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-xs text-cyan-400 font-medium uppercase tracking-wider">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-2xl font-black text-white">${product.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
