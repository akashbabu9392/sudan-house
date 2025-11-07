"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Users, Building, Scale, FileCheck, UserCheck, Clock, Vote, Shield } from "lucide-react"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function GovernancePage() {
  const heroImage = "/governance-hero.jpg"

  const structure = [
    {
      icon: Users,
      title: "House Leadership",
      description:
        "Speaker of the House, Deputy Speakers, and Majority/Minority Leaders who guide legislative proceedings and maintain order.",
    },
    {
      icon: Building,
      title: "Standing Committees",
      description:
        "Specialized committees focusing on specific policy areas such as finance, defense, health, and education.",
    },
    {
      icon: FileCheck,
      title: "Legislative Staff",
      description:
        "Professional staff providing research, legal analysis, and administrative support to representatives.",
    },
    {
      icon: UserCheck,
      title: "Representatives",
      description:
        "Elected members representing constituencies across Sudan, responsible for debating and voting on legislation.",
    },
  ]

  const committees = [
    "Constitutional Affairs",
    "Finance and Economic Development",
    "Foreign Affairs and International Relations",
    "Defense and National Security",
    "Health and Social Welfare",
    "Education and Youth Affairs",
    "Agriculture and Food Security",
    "Infrastructure and Transportation",
    "Justice and Human Rights",
    "Environment and Natural Resources",
    "Labor and Employment",
    "Trade and Industry",
  ]

  const principles = [
    {
      icon: Scale,
      title: "Separation of Powers",
      description:
        "Clear distinction between legislative, executive, and judicial branches to ensure checks and balances.",
    },
    {
      icon: Vote,
      title: "Democratic Decision-Making",
      description: "All major decisions made through transparent voting processes with proper quorum requirements.",
    },
    {
      icon: Clock,
      title: "Regular Sessions",
      description:
        "Scheduled legislative sessions to ensure continuous governance and timely response to national needs.",
    },
    {
      icon: Shield,
      title: "Accountability",
      description:
        "Representatives accountable to their constituents through regular reporting and electoral processes.",
    },
  ]

  const procedures = [
    {
      step: "1",
      title: "Bill Introduction",
      description:
        "Any representative can introduce a bill, which is then assigned to the relevant committee for review.",
    },
    {
      step: "2",
      title: "Committee Review",
      description:
        "The committee examines the bill, holds hearings, and may amend it before recommending it to the full House.",
    },
    {
      step: "3",
      title: "House Debate",
      description:
        "The bill is debated on the House floor, where representatives discuss its merits and propose amendments.",
    },
    {
      step: "4",
      title: "Voting",
      description: "The House votes on the bill. If passed, it moves to the next stage in the legislative process.",
    },
    {
      step: "5",
      title: "Implementation",
      description: "Once fully approved, the law is published and implemented, with the House providing oversight.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-blue-50/20 to-background text-slate-800">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b py-20 md:py-28">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            initial={{ scale: 1.05, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 0.9 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-emerald-900/50" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(80% 60% at 50% 40%, rgba(63, 132, 241, 0.6) 0%, rgba(12, 44, 92, 0) 60%)",
            }}
          />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'160\' height=\'160\' viewBox=\'0 0 160 160\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'rgba(255,255,255,0.12)\' stroke-width=\'0.5\'%3E%3Cpath d=\'M80 0v160M0 80h160\'/%3E%3C/g%3E%3C/svg%3E')] opacity-[0.12]" />

          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-balance text-4xl font-bold tracking-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl"
              >
                Governance Structure
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-pretty text-lg leading-relaxed text-blue-100/90 md:text-xl"
              >
                Understanding how the Sudan House of Representatives is organized and operates to serve the people.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Organizational Structure */}
        <motion.section
          className="py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Organizational Structure</h2>
              <p className="text-base text-slate-600 md:text-lg">
                The key components that make up our legislative body
              </p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {structure.map((item) => (
                <motion.div key={item.title} variants={fadeInUp} whileHover={{ y: -10 }} transition={{ duration: 0.2 }}>
                  <Card className="group h-full overflow-hidden rounded-2xl border border-blue-100/60 bg-white/80 backdrop-blur-sm shadow-lg shadow-blue-500/5 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/20">
                    <CardHeader className="relative">
                      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/40">
                        <item.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-relaxed text-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Governing Principles */}
        <motion.section
          className="border-t bg-gradient-to-r from-blue-900/5 via-blue-50/60 to-emerald-900/5 py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Governing Principles</h2>
              <p className="text-base text-slate-600 md:text-lg">Fundamental principles that guide our operations</p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
              {principles.map((principle) => (
                <motion.div
                  key={principle.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group h-full overflow-hidden rounded-2xl border border-blue-100/60 bg-white/90 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/25">
                    <CardHeader className="relative">
                      <div className="absolute -top-8 -left-8 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl transition-opacity duration-300 group-hover:opacity-80" />
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/40">
                        <principle.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-900">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-relaxed text-slate-600">{principle.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Legislative Process */}
        <motion.section
          className="border-t py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Legislative Process</h2>
              <p className="text-base text-slate-600 md:text-lg">
                How bills become laws in the Sudan House of Representatives
              </p>
            </motion.div>
            <div className="mx-auto max-w-5xl">
              <div className="relative">
                <div className="absolute inset-x-6 top-12 hidden h-[calc(100%-3rem)] border-l border-dashed border-blue-200 md:block" />
                <div className="space-y-6">
                  {procedures.map((procedure) => (
                    <motion.div key={procedure.step} variants={fadeInUp} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                      <Card className="group relative overflow-hidden rounded-2xl border border-blue-100/60 bg-white/90 shadow-lg shadow-blue-500/10 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/20">
                        <CardHeader className="relative">
                          <div className="absolute -left-8 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-blue-400 md:block" />
                          <div className="flex items-center gap-4">
                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-2xl font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 group-hover:scale-105">
                              {procedure.step.padStart(2, "0")}
                            </div>
                            <div>
                              <CardTitle className="text-2xl font-semibold text-slate-900">{procedure.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-base leading-relaxed text-slate-600">{procedure.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Standing Committees */}
        <motion.section
          className="border-t bg-gradient-to-b from-blue-900/5 via-blue-50/60 to-emerald-900/5 py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Standing Committees</h2>
              <p className="text-base text-slate-600 md:text-lg">
                Specialized committees that examine legislation in detail
              </p>
            </motion.div>
            <div className="mx-auto max-w-5xl">
              <Card className="overflow-hidden rounded-2xl border border-blue-100/60 bg-white/85 shadow-lg shadow-blue-500/10 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {committees.map((committee) => (
                      <motion.span
                        key={committee}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center rounded-full border border-blue-100 bg-gradient-to-r from-white via-blue-50/40 to-white px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm shadow-blue-500/10 transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:shadow-blue-500/20"
                      >
                        {committee}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Transparency & Accountability */}
        <motion.section
          className="border-t bg-gradient-to-b from-background via-blue-50/40 to-background py-16 md:py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <motion.h2
                variants={fadeInUp}
                className="mb-6 text-center text-3xl font-bold text-slate-900 md:text-4xl"
              >
                Transparency & Accountability
              </motion.h2>
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden rounded-2xl border border-blue-100/70 bg-white/90 shadow-xl shadow-blue-500/10 backdrop-blur md:p-1">
                  <CardContent className="space-y-6 pt-8 text-base leading-relaxed text-slate-600 md:text-lg">
                    <p>
                      The Sudan House of Representatives is committed to operating with complete transparency. All
                      legislative sessions are open to the public, and records of votes and proceedings are made
                      available to citizens.
                    </p>
                    <Separator className="border-blue-100" />
                    <p>
                      Representatives are accountable to their constituents and are required to maintain regular
                      communication with the people they serve. Ethics rules ensure that representatives act in the
                      public interest and avoid conflicts of interest.
                    </p>
                    <Separator className="border-blue-100" />
                    <p>
                      Citizens have the right to petition their representatives, attend public hearings, and participate
                      in the democratic process. We believe that an informed and engaged citizenry is essential to
                      effective democratic governance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
