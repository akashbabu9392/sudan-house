"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart, Globe } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Democracy",
      description:
        "We believe in the fundamental right of all Sudanese citizens to participate in governance through free and fair representation.",
    },
    {
      icon: Target,
      title: "Transparency",
      description:
        "All our proceedings, decisions, and legislative activities are conducted with openness and accountability to the people.",
    },
    {
      icon: Heart,
      title: "Unity",
      description:
        "We work to bridge divides and bring together all regions and communities of Sudan in the spirit of national solidarity.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "Every voice matters. We ensure representation across ethnic, religious, regional, and social lines.",
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
        <section className="relative overflow-hidden border-b py-20 md:py-32 min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Background Image - Parliament/Democracy theme */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            }}
          />
          
          {/* Dark Overlay for Text Readability with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/80" />
          
          {/* Additional Blue/Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-blue-800/30" />
          
          {/* Radial Gradient for Depth */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)',
            }}
          />
          
          {/* Subtle Pattern Overlay for Professional Look */}
          <div 
            className="absolute inset-0 opacity-10"
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
                className="mb-6 text-balance text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl"
              >
                About Us
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-pretty text-lg leading-relaxed text-blue-50/95 md:text-xl lg:text-2xl"
              >
                Learn about the Sudan House of Representatives and our commitment to building a democratic future for
                all Sudanese people.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Introduction - Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto max-w-4xl"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Our Story
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-6 text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                <p>
                  The Sudan House of Representatives represents a historic effort to establish a democratic legislative
                  institution that truly serves the interests of all Sudanese people. Born from the aspirations of
                  millions who dream of a peaceful, prosperous, and unified Sudan, our institution is committed to
                  building a framework for governance that respects human rights, upholds the rule of law, and promotes
                  social justice.
                </p>
                <p>
                  Throughout Sudan's complex history, the need for representative democracy has been clear. Our house
                  aims to provide a platform where diverse voices can come together, debate constructively, and make
                  decisions that benefit the entire nation. We recognize that building democratic institutions takes
                  time, dedication, and the active participation of citizens from all walks of life.
                </p>
                <p>
                  As we work to establish this institution, we are guided by principles of inclusivity, transparency,
                  and accountability. We believe that every Sudanese citizen deserves to have their voice heard and
                  their rights protected. Through careful constitutional development, capacity building, and citizen
                  engagement, we are laying the groundwork for a legislative body that will serve Sudan for generations
                  to come.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
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
                Our Core Values
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-600 md:text-lg"
              >
                The principles that guide every decision and action we take
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group h-full text-center border-2 border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700 text-white shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/40">
                        <value.icon className="h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-800">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-slate-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="border-t py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group h-full border-2 border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-slate-800">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="leading-relaxed text-slate-600">
                      A democratic Sudan where every citizen's voice is heard, where laws protect the rights and dignity
                      of all people, and where governance is transparent, accountable, and serves the common good.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                      We envision a nation united in its diversity, prosperous in its economy, and peaceful in its
                      communities, led by representatives who truly serve the people's interests.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group h-full border-2 border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-slate-800">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="leading-relaxed text-slate-600">
                      To establish and maintain a democratic House of Representatives that enacts just laws, provides
                      effective oversight, and represents the diverse interests of all Sudanese people.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                      We are committed to building institutional capacity, fostering citizen participation, and creating a
                      legislative framework that promotes peace, development, and social justice across Sudan.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Commitment */}
        <section className="border-t bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-background py-16 md:py-24 relative overflow-hidden">
          {/* Subtle decorative background */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-8 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Our Commitment
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-balance text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                We pledge to work tirelessly for the betterment of Sudan and its people. Through dedication to
                democratic principles, respect for human rights, and commitment to the rule of law, we strive to build a
                legislative institution that all Sudanese can be proud of. Together, we will create a brighter future
                for our nation.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
