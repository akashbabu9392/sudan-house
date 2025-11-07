"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  BookOpen,
  Video,
  Newspaper,
  Scale,
  Users,
  Globe,
  FileDown,
  Mail,
} from "lucide-react"
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

export default function ResourcesPage() {
  const documents = [
    {
      title: "Draft Constitution",
      description: "Complete text of the proposed constitution for Sudan",
      category: "Constitutional",
      icon: Scale,
    },
    {
      title: "Rules of Procedure",
      description: "Detailed procedures for legislative sessions and voting",
      category: "Procedural",
      icon: FileText,
    },
    {
      title: "Committee Guidelines",
      description: "Operating procedures for standing committees",
      category: "Procedural",
      icon: Users,
    },
    {
      title: "Electoral Framework",
      description: "Guidelines for free and fair elections",
      category: "Electoral",
      icon: Globe,
    },
    {
      title: "Code of Conduct",
      description: "Ethical standards for representatives and staff",
      category: "Ethics",
      icon: BookOpen,
    },
    {
      title: "Citizen's Guide",
      description: "How citizens can participate in the legislative process",
      category: "Public Education",
      icon: Users,
    },
  ]

  const publications = [
    {
      title: "Legislative Update - December 2024",
      date: "December 15, 2024",
      type: "Newsletter",
      description: "Latest news and updates from the House",
    },
    {
      title: "Building Democratic Institutions",
      date: "November 2024",
      type: "Report",
      description: "Progress report on institutional development",
    },
    {
      title: "Constitutional Development Process",
      date: "October 2024",
      type: "White Paper",
      description: "Overview of constitution drafting efforts",
    },
    {
      title: "Citizen Participation Guide",
      date: "September 2024",
      type: "Educational",
      description: "How Sudanese citizens can engage with their representatives",
    },
  ]

  const categories = [
    {
      icon: FileText,
      title: "Official Documents",
      count: "15+ documents",
      description: "Constitutional texts, procedural rules, and official policies",
    },
    {
      icon: Newspaper,
      title: "Publications",
      count: "20+ publications",
      description: "Reports, newsletters, and educational materials",
    },
    {
      icon: Video,
      title: "Media & Videos",
      count: "Coming Soon",
      description: "Recorded sessions, educational videos, and public addresses",
    },
    {
      icon: BookOpen,
      title: "Research Library",
      count: "Coming Soon",
      description: "Policy briefs, research papers, and comparative studies",
    },
  ]

const publicationBadgeStyles: Record<string, string> = {
  Newsletter: "bg-blue-100 text-blue-700",
  Report: "bg-slate-100 text-slate-700",
  "White Paper": "bg-purple-100 text-purple-700",
  Educational: "bg-amber-100 text-amber-700",
}

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative overflow-hidden border-b py-20 md:py-32"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/65 to-slate-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-blue-900/30" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(59,130,246,0.2), transparent 40%), radial-gradient(circle at 80% 10%, rgba(148,163,184,0.25), transparent 45%)`,
            }}
          />
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center text-white"
            >
              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-balance text-4xl font-bold tracking-tight drop-shadow-xl md:text-5xl lg:text-6xl"
              >
                Resources & Documents
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-pretty text-lg leading-relaxed text-blue-50/95 md:text-xl"
              >
                Access important documents, publications, and educational materials from the Sudan House of
                Representatives.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Resource Categories */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Resource Categories</h2>
              <p className="text-muted-foreground">Explore our collection of materials and information</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {categories.map((category) => (
                <motion.div
                  key={category.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="group h-full border-2 border-slate-200 bg-white/90 backdrop-blur-sm transition-all duration-300 ease-out hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/20">
                    <CardHeader>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-500/30">
                        <category.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-800">{category.title}</CardTitle>
                      <Badge
                        variant="outline"
                        className="w-fit rounded-full border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700"
                      >
                        {category.count}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">{category.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Official Documents */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="border-t bg-gradient-to-b from-slate-50/50 via-blue-50/20 to-background py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Official Documents</h2>
              <p className="text-muted-foreground">Key legislative and procedural documents</p>
            </motion.div>
            <motion.div variants={staggerContainer} className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc) => (
                <motion.div
                  key={doc.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="group flex h-full flex-col border-2 border-slate-200 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-out hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/20">
                    <CardHeader>
                      <div className="mb-3 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 text-blue-600 shadow-sm">
                          <doc.icon className="h-6 w-6" />
                        </div>
                        <Badge variant="outline" className="rounded-full border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
                          {doc.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-base font-semibold text-slate-800">{doc.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col justify-between">
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{doc.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/button w-full rounded-full border-blue-300 bg-white/80 font-medium text-blue-600 transition-all duration-300 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg"
                        disabled
                      >
                        <FileDown className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/button:scale-110" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Recent Publications */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="border-t py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Recent Publications</h2>
              <p className="text-muted-foreground">Latest reports, newsletters, and educational materials</p>
            </motion.div>
            <motion.div variants={staggerContainer} className="mx-auto max-w-4xl space-y-6">
              {publications.map((pub) => (
                <motion.div
                  key={pub.title}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="group border-2 border-slate-200 bg-white/95 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/80 hover:shadow-xl hover:shadow-blue-500/15">
                    <CardHeader>
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${publicationBadgeStyles[pub.type] ?? "bg-slate-200 text-slate-700"}`}
                            >
                              {pub.type}
                            </span>
                            <span className="text-sm text-muted-foreground">{pub.date}</span>
                          </div>
                          <CardTitle className="text-lg font-semibold text-slate-800">{pub.title}</CardTitle>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="group/button rounded-full border-blue-300 bg-white/80 text-blue-600 transition-all duration-300 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-lg"
                          disabled
                        >
                          <FileDown className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/button:scale-110" />
                          Download
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{pub.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Information Notice */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeInUp}
          className="border-t bg-gradient-to-b from-slate-50/50 via-blue-50/30 to-background py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="mx-auto max-w-3xl rounded-3xl border border-blue-200/60 bg-blue-50/80 p-10 text-slate-700 shadow-xl shadow-blue-200/40 backdrop-blur"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-slate-900">Requesting Additional Resources</h3>
                <p>
                  We are continuously working to make more resources available to the public. If you need specific
                  documents or information that is not currently available on this page, please contact our office.
                </p>
                <p>
                  All official documents will be published in Arabic and made freely available to ensure transparency and
                  accessibility for all Sudanese citizens. Documents marked as "Coming Soon" are currently being
                  prepared and will be published once they are finalized.
                </p>
                <div className="pt-4">
                  <Button
                    asChild
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-300/40 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl"
                  >
                    <a href="/contact">
                      <Mail className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      Contact Us for Resources
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
