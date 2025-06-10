"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Star, Flame, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InteractiveCursor } from "@/components/interactive-cursor"
import { getFeaturedProducts, getNewProducts, getBestsellerProducts, getLimitedProducts } from "@/lib/products"

export default function FeaturedPage() {
  const featuredProducts = getFeaturedProducts()
  const newProducts = getNewProducts()
  const bestsellerProducts = getBestsellerProducts()
  const limitedProducts = getLimitedProducts()

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
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">FEATURED</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The rebellion's finest. Curated pieces that define the SHIV aesthetic.
            </p>
          </motion.div>
        </div>
      </div>

      {/* New Arrivals */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Sparkles className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl md:text-4xl font-black">New Arrivals</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product, index) => (
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

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          <Badge className="bg-green-500 text-black font-bold">NEW</Badge>
                          {product.isLimited && <Badge className="bg-red-500 text-white font-bold">LIMITED</Badge>}
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
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
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">({product.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <p className="text-2xl font-black text-white">${product.price}</p>
                          {product.originalPrice && (
                            <p className="text-lg text-gray-500 line-through">${product.originalPrice}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <Flame className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-black">Bestsellers</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                    <div className="relative overflow-hidden rounded-lg bg-black">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute top-3 left-3">
                          <Badge className="bg-yellow-500 text-black font-bold text-xs">BESTSELLER</Badge>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-bold mb-1 group-hover:text-cyan-400 transition-colors text-sm">
                          {product.name}
                        </h3>
                        <p className="text-lg font-black text-white">${product.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Edition */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-black text-sm">!</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black">Limited Edition</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {limitedProducts.slice(0, 2).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                className="group cursor-pointer"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/30 to-pink-900/30 p-1">
                    <div className="relative overflow-hidden rounded-xl bg-black">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute top-4 left-4">
                          <Badge className="bg-red-500 text-white font-bold">LIMITED EDITION</Badge>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-black mb-2 group-hover:text-cyan-400 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <p className="text-2xl font-black text-white">${product.price}</p>
                              {product.originalPrice && (
                                <p className="text-lg text-gray-500 line-through">${product.originalPrice}</p>
                              )}
                            </div>
                            <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                              Shop Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
