"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Users, FileText, Vote, Award, Mail } from "lucide-react"

export default function MembershipPage() {
  const heroImage = "/membership-hero.jpg"

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const benefits = [
    "Participate in shaping legislation that affects all Sudanese citizens",
    "Vote on important national matters and policy decisions",
    "Serve on committees focused on specific policy areas",
    "Represent your constituency and their interests",
    "Access to legislative research and resources",
    "Networking with fellow representatives and leaders",
    "Training and capacity building opportunities",
    "Platform to advocate for your community's needs",
  ]

  const categories = [
    {
      icon: Vote,
      title: "Elected Representatives",
      description: "Members elected by their constituencies to serve in the House of Representatives.",
      requirements: [
        "Sudanese citizenship",
        "Minimum age of 25 years",
        "Registered voter in constituency",
        "No criminal convictions",
        "Meet electoral law requirements",
      ],
      badge: "Primary Membership",
    },
    {
      icon: Users,
      title: "Associate Members",
      description: "Civic leaders and experts who contribute to legislative development without voting rights.",
      requirements: [
        "Sudanese citizenship or residency",
        "Demonstrated expertise in relevant field",
        "Commitment to democratic values",
        "Nomination by current member or committee",
      ],
      badge: "Advisory Role",
    },
    {
      icon: Award,
      title: "Observer Status",
      description: "International partners and civil society organizations monitoring democratic development.",
      requirements: [
        "Recognized organization or institution",
        "Interest in democratic governance",
        "Agreement to observation protocols",
        "Application and approval process",
      ],
      badge: "Non-Voting",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Review Requirements",
      description: "Understand the eligibility criteria and responsibilities for your desired membership category.",
    },
    {
      step: "2",
      title: "Prepare Documentation",
      description: "Gather required documents including identification, proof of residency, and relevant credentials.",
    },
    {
      step: "3",
      title: "Submit Application",
      description: "Complete and submit the membership application form with all supporting documents.",
    },
    {
      step: "4",
      title: "Review Process",
      description: "Your application will be reviewed by the membership committee for verification and approval.",
    },
    {
      step: "5",
      title: "Orientation",
      description:
        "Approved members participate in orientation sessions to understand procedures and responsibilities.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[520px] items-center overflow-hidden border-b bg-slate-900 py-20 md:min-h-[620px] md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 via-slate-900/55 to-slate-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/35 via-blue-800/25 to-transparent" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 45%), radial-gradient(circle at 80% 30%, rgba(15,118,110,0.2), transparent 45%)",
            }}
          />
          <div className="container relative z-10 mx-auto px-4">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="mx-auto max-w-4xl text-center">
              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-balance text-4xl font-bold tracking-tight text-white drop-shadow-xl md:text-5xl lg:text-6xl"
              >
                Membership
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-pretty text-lg leading-relaxed text-blue-50/90 md:text-xl"
              >
                Join the Sudan House of Representatives and contribute to building a democratic future for our nation.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative border-b border-slate-100/60 bg-gradient-to-b from-background via-slate-50/70 to-background py-16 md:py-24">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 opacity-60" />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-4 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Be Part of Democratic Change
              </motion.h2>
              <motion.div variants={fadeIn} className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
              <motion.p
                variants={fadeInUp}
                className="text-balance text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                Membership in the Sudan House of Representatives is an opportunity to serve your country and make a meaningful difference in the lives of Sudanese people. Whether as an elected representative, associate member, or observer, your participation strengthens our democratic institutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Membership Categories */}
        <section className="relative border-b border-slate-100 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-background py-16 md:py-24">
          <div className="absolute inset-0 pointer-events-none opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.35), transparent 45%), radial-gradient(circle at 85% 25%, rgba(56,189,248,0.25), transparent 50%)",
            }}
          />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mb-14 text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-3 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Membership Categories
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600">
                Different ways to participate in our legislative work
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {categories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <Card className="h-full border border-transparent bg-white/95 shadow-lg shadow-blue-500/5 transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/15">
                    <CardHeader className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700 text-white shadow-lg shadow-blue-500/30">
                          <category.icon className="h-7 w-7" />
                        </div>
                        <Badge className="rounded-full bg-blue-50 text-xs font-semibold text-blue-700 shadow-sm">
                          {category.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-semibold text-slate-800">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5 text-slate-600">
                      <p>{category.description}</p>
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Requirements:</h4>
                        <ul className="space-y-3">
                          {category.requirements.map((req) => (
                            <li key={req} className="group flex items-start gap-3 text-sm leading-relaxed">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative border-b border-slate-100 bg-gradient-to-b from-background via-slate-50 to-background py-16 md:py-24">
          <div className="container relative mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="mb-12 text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-3 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl"
              >
                Membership Benefits
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-600">
                What you gain by being part of the House
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <div className="flex h-full flex-col gap-4 rounded-2xl border border-transparent bg-white/95 p-6 shadow-md shadow-blue-500/5 transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/15">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-base font-medium text-slate-700 leading-relaxed">{benefit}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Application Process */}
        <section className="relative border-b border-slate-100 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-16 text-slate-100 md:py-24">
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(148,163,184,0.15), rgba(148,163,184,0.15) 1px, transparent 1px, transparent 80px), repeating-linear-gradient(0deg, rgba(148,163,184,0.08), rgba(148,163,184,0.08) 1px, transparent 1px, transparent 80px)",
            }}
          />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mb-14 text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-3 text-3xl font-bold tracking-tight md:text-4xl"
              >
                Application Process
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-slate-300">
                Steps to become a member of the House
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-140px" }}
              variants={stagger}
              className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-stretch"
            >
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`relative flex-1` +
                    (index !== process.length - 1
                      ? " md:after:absolute md:after:top-1/2 md:after:left-[calc(100%+12px)] md:after:h-px md:after:w-16 md:after:-translate-y-1/2 md:after:bg-gradient-to-r md:after:from-blue-400/50 md:after:via-blue-300/30 md:after:to-transparent"
                      : "")}
                >
                  <Card className="relative h-full overflow-hidden rounded-3xl border border-slate-700/40 bg-slate-900/80 backdrop-blur-md transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/15">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400" />
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 text-lg font-bold text-slate-900 shadow-lg shadow-blue-500/30">
                          {step.step}
                        </div>
                        <CardTitle className="text-xl font-semibold text-slate-100">{step.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-slate-300">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-blue-50 via-emerald-50/60 to-white py-16 md:py-24">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(37,99,235,0.45), transparent 50%), radial-gradient(circle at 80% 40%, rgba(56,189,248,0.35), transparent 55%)",
            }}
          />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              variants={stagger}
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
              >
                Ready to Join?
              </motion.h2>
              <motion.div variants={fadeIn} className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />
              <motion.p
                variants={fadeInUp}
                className="mb-10 text-balance text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                Take the first step in contributing to Sudan's democratic future. Contact us to learn more about membership opportunities.
              </motion.p>
              <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Button
                    size="lg"
                    disabled
                    className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 text-base font-semibold shadow-lg shadow-blue-500/30 transition-transform duration-300"
                  >
                    <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20" style={{ background: "linear-gradient(120deg, rgba(255,255,255,0.6), transparent 60%)" }} />
                    <FileText className="mr-2 h-4 w-4" />
                    Apply Now (Coming Soon)
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="rounded-full border-blue-500/40 bg-white/80 px-8 text-base font-semibold text-blue-700 shadow-inner shadow-blue-500/10 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50/80 hover:text-blue-800"
                  >
                    <a href="/contact" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Contact Us
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
