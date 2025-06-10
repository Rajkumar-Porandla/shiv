"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThreeBackground } from "@/components/three-background"
import { InteractiveCursor } from "@/components/interactive-cursor"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <InteractiveCursor />
      <ThreeBackground />

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tighter">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                SHIV
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-4">Wear Your Edge</p>
            <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Unleash your rebellion. Express your truth. SHIV is where fashion meets fearless creativity.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/shop">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  Shop the Vibe
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full blur-xl opacity-30"
          />

          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-xl opacity-40"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
