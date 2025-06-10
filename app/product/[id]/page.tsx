"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ShoppingBag, Heart, Share2, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InteractiveCursor } from "@/components/interactive-cursor"
import { ProductModel3D } from "@/components/product-model-3d"

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <InteractiveCursor />

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link href="/shop">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Shop
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Product Images/3D Model */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                <div className="w-full h-full rounded-xl overflow-hidden bg-black">
                  <ProductModel3D />
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square relative overflow-hidden rounded-lg bg-gray-800 cursor-pointer hover:ring-2 hover:ring-cyan-400 transition-all"
                  >
                    <Image
                      src={`/placeholder.svg?height=100&width=100`}
                      alt={`Product view ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Product Title & Rating */}
              <div>
                <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">Limited Edition</Badge>
                <h1 className="text-4xl md:text-5xl font-black mb-4">Neon Rebellion Hoodie</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-400">(127 reviews)</span>
                </div>
                <p className="text-3xl font-black text-cyan-400 mb-6">$89.00</p>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold mb-4">Description</h3>
                <p className="text-gray-300 leading-relaxed">
                  Embrace the future with our Neon Rebellion Hoodie. Crafted from premium cotton blend with reflective
                  neon accents that glow under UV light. This isn't just clothing—it's a statement of your digital
                  rebellion.
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-xl font-bold mb-4">Size</h3>
                <div className="grid grid-cols-5 gap-3">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <Button
                      key={size}
                      variant="outline"
                      className="border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  <ShoppingBag className="w-5 h-5 mr-3" />
                  Add to Cart
                </Button>

                <div className="flex gap-4">
                  <Button variant="outline" size="lg" className="flex-1 border-gray-700 hover:bg-gray-800">
                    <Heart className="w-5 h-5 mr-2" />
                    Wishlist
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 border-gray-700 hover:bg-gray-800">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Premium cotton blend fabric</li>
                  <li>• Reflective neon accents</li>
                  <li>• UV-reactive elements</li>
                  <li>• Oversized streetwear fit</li>
                  <li>• Machine washable</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
