"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Scale,
  Building2,
  Users,
  FileText,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Heart,
  Home,
  Briefcase,
  Leaf,
  Globe2,
} from "lucide-react"
import { motion, type Variants } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const heroBackgroundUrl = "/objectives-hero.jpg"

export default function ObjectivesPage() {
  const primaryObjectives = [
    {
      icon: Scale,
      title: "Establish Rule of Law",
      description:
        "Create and enforce a comprehensive legal framework that protects rights, ensures justice, and provides equal treatment under the law for all citizens.",
    },
    {
      icon: Building2,
      title: "Build Democratic Institutions",
      description:
        "Develop strong, transparent, and accountable governmental institutions that serve the people and operate according to democratic principles.",
    },
    {
      icon: Users,
      title: "Ensure Representation",
      description:
        "Guarantee that all regions, communities, and groups within Sudan have fair and proportional representation in the legislative process.",
    },
    {
      icon: FileText,
      title: "Develop Constitution",
      description:
        "Draft and ratify a comprehensive constitution that defines the structure of government, protects fundamental rights, and establishes clear governance mechanisms.",
    },
  ]

  const policyAreas = [
    {
      icon: ShieldCheck,
      title: "Security & Peace",
      description:
        "Establish laws and policies that promote national security, peaceful coexistence, and protection of all citizens.",
    },
    {
      icon: TrendingUp,
      title: "Economic Development",
      description:
        "Create legislation that fosters economic growth, job creation, and sustainable development across all sectors.",
    },
    {
      icon: GraduationCap,
      title: "Education & Youth",
      description:
        "Develop policies that ensure quality education and create opportunities for young Sudanese to thrive.",
    },
    {
      icon: Heart,
      title: "Healthcare & Welfare",
      description: "Enact laws that provide access to healthcare services and social protection for all citizens.",
    },
    {
      icon: Home,
      title: "Housing & Infrastructure",
      description: "Support legislation for adequate housing, modern infrastructure, and urban development.",
    },
    {
      icon: Briefcase,
      title: "Labor & Employment",
      description: "Create fair labor laws that protect workers' rights and promote employment opportunities.",
    },
    {
      icon: Leaf,
      title: "Environment & Resources",
      description: "Develop sustainable policies for managing natural resources and protecting the environment.",
    },
    {
      icon: Globe2,
      title: "Foreign Relations",
      description: "Oversee international agreements and promote Sudan's interests in the global community.",
    },
  ]

  const strategicGoals = [
    {
      number: "01",
      title: "Constitutional Framework",
      points: [
        "Draft comprehensive constitution",
        "Establish checks and balances",
        "Define governmental structure",
        "Protect fundamental rights",
      ],
    },
    {
      number: "02",
      title: "Legislative Capacity",
      points: [
        "Build institutional infrastructure",
        "Train legislative staff",
        "Develop research capabilities",
        "Establish committee systems",
      ],
    },
    {
      number: "03",
      title: "Citizen Engagement",
      points: [
        "Create public participation mechanisms",
        "Ensure transparency in proceedings",
        "Establish feedback channels",
        "Promote civic education",
      ],
    },
    {
      number: "04",
      title: "National Unity",
      points: [
        "Bridge regional divides",
        "Promote inclusive dialogue",
        "Address historical grievances",
        "Foster national identity",
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-slate-950/5">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden border-b">
          <div
            className="relative flex items-center justify-center bg-fixed bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackgroundUrl})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/65 to-slate-950/85" />
            <div className="relative z-10 w-full py-24 md:py-32">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="mx-auto max-w-3xl text-center text-white"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    className="mb-6 text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                  >
                    Our Objectives
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                    className="text-pretty text-lg text-slate-100/90 md:text-xl"
                  >
                    The goals and priorities that guide our work in building a democratic legislative body for Sudan.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Objectives */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Primary Objectives</h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Our fundamental goals in establishing democratic governance
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
            >
              {primaryObjectives.map((objective) => (
                <motion.div key={objective.title} variants={fadeInUp}>
                  <Card className="group h-full rounded-3xl border border-slate-200 bg-white/90 shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:shadow-xl">
                    <CardHeader className="space-y-4">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 via-slate-50 to-white text-primary shadow-inner">
                        <div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-blue-500/70 shadow-sm" />
                        <objective.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900">
                        {objective.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                        {objective.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Policy Areas */}
        <section className="border-t bg-gradient-to-b from-slate-50 to-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Key Policy Areas</h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Areas where we will focus our legislative efforts
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {policyAreas.map((area) => (
                <motion.div key={area.title} variants={fadeInUp}>
                  <Card className="group h-full rounded-3xl border border-slate-200/70 bg-white shadow-sm shadow-blue-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-2xl">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
                          <area.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-900">
                          {area.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="border-t bg-background py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Strategic Goals</h2>
              <p className="text-base text-muted-foreground md:text-lg">
                Our roadmap for building effective democratic governance
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2"
            >
              {strategicGoals.map((goal, index) => (
                <motion.div key={goal.number} variants={fadeInUp}>
                  <Card className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl">
                    <span className="pointer-events-none absolute -right-10 top-8 text-7xl font-black text-blue-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <CardHeader className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-lg font-semibold text-white shadow-lg shadow-blue-500/30">
                          {goal.number}
                        </div>
                        <CardTitle className="text-xl font-semibold text-slate-900">
                          {goal.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {goal.points.map((point) => (
                          <li key={point} className="flex items-start gap-3 text-slate-600">
                            <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                            <span className="text-sm leading-relaxed md:text-base">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="relative border-t bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 py-24">
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%)]" />
          </div>
          <div className="container relative mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-center text-white"
            >
              <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Commitment to the People</h2>
              <p className="text-balance text-lg leading-relaxed text-slate-100/90 md:text-xl">
                These objectives reflect our unwavering commitment to serve the Sudanese people. Through systematic
                implementation of these goals, we will build a legislative institution that truly represents all
                citizens, protects their rights, and works tirelessly for the betterment of our nation. Every objective
                is designed to contribute to a more democratic, prosperous, and unified Sudan.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
