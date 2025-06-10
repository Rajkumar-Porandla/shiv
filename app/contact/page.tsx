"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, MessageCircle, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { InteractiveCursor } from "@/components/interactive-cursor"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <InteractiveCursor />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">CONNECT</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to join the rebellion? Hit us up. We're always down to connect with fellow rebels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Drop Us a Line</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                  />
                  <Input
                    placeholder="Subject"
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 resize-none"
                  />
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-400">hello@shiv.store</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-400">+1 (555) 123-SHIV</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-400">Los Angeles, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Follow the Movement</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-700 hover:border-pink-500 hover:text-pink-500 transition-colors group"
                  >
                    <Instagram className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    Instagram
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-700 hover:border-cyan-500 hover:text-cyan-500 transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    TikTok
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-700 hover:border-red-500 hover:text-red-500 transition-colors group col-span-2"
                  >
                    <Youtube className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                    YouTube
                  </Button>
                </div>

                <p className="text-gray-400 text-sm mt-6 text-center">Join 50K+ rebels worldwide 🔥</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
