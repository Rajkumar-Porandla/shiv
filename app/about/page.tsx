"use client"

import { motion } from "framer-motion"
import { Zap, Target, Users, Sparkles } from "lucide-react"
import { InteractiveCursor } from "@/components/interactive-cursor"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <InteractiveCursor />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-6xl md:text-8xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                ABOUT SHIV
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We don't just make clothes. We craft identities for the fearless, the rebels, the ones who refuse to blend
              in.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                SHIV was born from the digital underground, where creativity meets rebellion. We believe fashion should
                be a weapon of self-expression, not conformity.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every piece we create is designed for the misfits, the dreamers, the ones who dare to be different.
                We're not just a brand—we're a movement.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
                <Zap className="w-32 h-32 text-cyan-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Authenticity",
                description: "Be real. Be raw. Be unapologetically you.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a tribe of rebels who support each other.",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Pushing boundaries in design, tech, and sustainability.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50"
              >
                <value.icon className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">The SHIV Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Founded in 2024 by a collective of digital artists, streetwear designers, and tech rebels, SHIV emerged
              from the need for clothing that speaks the language of the new generation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're not just selling clothes—we're selling a lifestyle, an attitude, a way of being that says "I'm here,
              I'm different, and I'm proud of it."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
