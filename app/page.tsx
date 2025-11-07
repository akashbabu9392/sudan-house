"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Scale, FileText, Vote, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Representative Democracy",
      description:
        "Ensuring all Sudanese citizens have a voice through elected representatives who serve their interests.",
    },
    {
      icon: Scale,
      title: "Legislative Authority",
      description: "Enacting laws and policies that promote justice, equality, and prosperity for all Sudanese people.",
    },
    {
      icon: FileText,
      title: "Constitutional Framework",
      description:
        "Operating within a robust constitutional framework that protects rights and establishes clear governance.",
    },
    {
      icon: Vote,
      title: "Democratic Process",
      description: "Upholding democratic principles through transparent voting procedures and accountability.",
    },
    {
      icon: Building2,
      title: "National Unity",
      description: "Fostering unity and cooperation among all regions and communities of Sudan.",
    },
  ]

  const priorities = [
    {
      title: "Constitutional Development",
      description: "Establishing a comprehensive constitutional framework for democratic governance.",
    },
    {
      title: "Legislative Capacity",
      description: "Building institutional capacity for effective lawmaking and oversight.",
    },
    {
      title: "Citizen Engagement",
      description: "Creating channels for meaningful citizen participation in the legislative process.",
    },
    {
      title: "Regional Representation",
      description: "Ensuring fair and proportional representation from all of Sudan's regions.",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b py-20 md:py-32 min-h-[600px] md:min-h-[700px] flex items-center">
          {/* Background Image - Government/Parliament Building */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero-background.jpg')",
            }}
          />
          
          {/* Dark Overlay for Text Readability with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/85" />
          
          {/* Additional Blue/Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-blue-800/40" />
          
          {/* Radial Gradient for Depth */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }}
          />
          
          {/* Subtle Pattern Overlay for Professional Look */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 2px,
                  rgba(255,255,255,0.03) 2px,
                  rgba(255,255,255,0.03) 4px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 100px,
                  rgba(255,255,255,0.05) 100px,
                  rgba(255,255,255,0.05) 102px
                )
              `,
            }}
          />
          
          {/* Content */}
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-4xl text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-balance bg-gradient-to-r from-white via-blue-50 to-emerald-50 bg-clip-text text-5xl font-bold tracking-tight text-transparent drop-shadow-2xl md:text-7xl lg:text-8xl"
              >
                Sudan House of Representatives
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mb-8 text-pretty text-lg leading-relaxed text-blue-100/90 md:text-xl lg:text-2xl"
              >
                Building a democratic legislative institution that represents all Sudanese people and works towards a
                prosperous, peaceful, and unified Sudan.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="group h-12 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 px-8 text-base font-semibold text-white shadow-xl shadow-blue-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/60"
                >
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group h-12 rounded-lg border-2 border-blue-400/50 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:bg-white/20 hover:shadow-lg"
                >
                  <Link href="/membership">Join Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="border-b bg-gradient-to-b from-slate-50 via-blue-50/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Our Mission
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-balance text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                The Sudan House of Representatives is committed to establishing a democratic legislative body that
                serves all Sudanese citizens. We work to create laws and policies that promote justice, equality,
                economic development, and social welfare while respecting the diversity and unity of our nation.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-12 text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Our Foundation
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 md:text-lg"
              >
                Core principles that guide our legislative work
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group h-full border-2 border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20">
                    <CardHeader>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
                        <feature.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Current Priorities */}
        <section className="border-t bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-12 text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Current Priorities
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 md:text-lg"
              >
                Key areas of focus in our nation-building efforts
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
            >
              {priorities.map((priority, index) => (
                <motion.div
                  key={priority.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group h-full border-2 border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20">
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700 text-sm font-bold text-white shadow-md shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/40">
                          {index + 1}
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-800">{priority.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-slate-600">{priority.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t bg-gradient-to-b from-background to-slate-50/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Get Involved
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mb-8 text-balance text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                Your participation is essential to building a democratic Sudan. Learn more about how you can contribute
                to our legislative efforts.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center gap-4"
              >
                <Button
                  size="lg"
                  asChild
                  className="group h-12 rounded-lg bg-gradient-to-r from-blue-600 via-blue-700 to-slate-700 px-8 text-base font-semibold text-white shadow-xl shadow-blue-900/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/50"
                >
                  <Link href="/membership">Become a Member</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="group h-12 rounded-lg border-2 border-blue-600 px-8 text-base font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-md"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
