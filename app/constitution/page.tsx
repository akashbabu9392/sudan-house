"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Scale, Users, Shield, FileText, ScrollText } from "lucide-react"
import { motion } from "framer-motion"

export default function ConstitutionPage() {
  const principles = [
    {
      icon: Scale,
      title: "Rule of Law",
      description:
        "All citizens and institutions are subject to and accountable under the law, which is fairly applied and enforced.",
    },
    {
      icon: Users,
      title: "Popular Sovereignty",
      description:
        "Ultimate authority rests with the people, who exercise power through elected representatives and democratic processes.",
    },
    {
      icon: Shield,
      title: "Protection of Rights",
      description:
        "Fundamental human rights and freedoms are guaranteed and protected for all citizens without discrimination.",
    },
    {
      icon: FileText,
      title: "Separation of Powers",
      description:
        "Government powers are divided among legislative, executive, and judicial branches to prevent concentration of authority.",
    },
  ]

  const articles = [
    {
      title: "Article I: Foundational Principles",
      sections: [
        {
          title: "Section 1: Nature of the State",
          content:
            "Sudan is a democratic republic founded on the principles of human dignity, equality, and justice. Sovereignty belongs to the people, who exercise it through their elected representatives.",
        },
        {
          title: "Section 2: National Unity",
          content:
            "Sudan is one indivisible nation that respects and celebrates its diverse ethnic, cultural, and religious heritage. All citizens are equal regardless of ethnicity, religion, gender, or region of origin.",
        },
        {
          title: "Section 3: Official Languages",
          content:
            "Arabic is the official language of Sudan. The state recognizes and respects all national languages and works to preserve linguistic diversity.",
        },
      ],
    },
    {
      title: "Article II: Fundamental Rights and Freedoms",
      sections: [
        {
          title: "Section 1: Human Dignity",
          content:
            "Human dignity is inviolable. Every person has inherent dignity and the right to have their dignity respected and protected.",
        },
        {
          title: "Section 2: Equality",
          content:
            "All citizens are equal before the law and entitled to equal protection and benefit of the law. The state may not discriminate based on race, gender, religion, ethnicity, or any other status.",
        },
        {
          title: "Section 3: Life and Security",
          content:
            "Every person has the right to life, physical integrity, and security of person. No one may be subjected to torture, cruel, inhuman, or degrading treatment.",
        },
        {
          title: "Section 4: Freedom of Expression",
          content:
            "Every citizen has the right to freedom of expression, including freedom of the press and other media. This right includes freedom to seek, receive, and impart information and ideas.",
        },
      ],
    },
    {
      title: "Article III: The Legislative Branch",
      sections: [
        {
          title: "Section 1: Establishment",
          content:
            "Legislative power is vested in the House of Representatives, which consists of members elected by the people through free and fair elections.",
        },
        {
          title: "Section 2: Powers",
          content:
            "The House has the power to make laws, levy taxes, appropriate funds, declare war, ratify treaties, and provide oversight of the executive branch.",
        },
        {
          title: "Section 3: Composition",
          content:
            "The House shall be composed of representatives elected from constituencies throughout Sudan, ensuring fair and proportional representation of all regions and communities.",
        },
        {
          title: "Section 4: Terms and Elections",
          content:
            "Representatives serve terms of four years and may be re-elected. Elections shall be held in accordance with electoral laws that ensure fairness, transparency, and equal opportunity.",
        },
      ],
    },
    {
      title: "Article IV: The Executive Branch",
      sections: [
        {
          title: "Section 1: Executive Authority",
          content:
            "Executive power is vested in the President and the Council of Ministers. The President is elected by the people and serves as head of state and government.",
        },
        {
          title: "Section 2: Presidential Powers",
          content:
            "The President implements laws passed by the House, conducts foreign policy, serves as commander-in-chief, and appoints ministers subject to House approval.",
        },
        {
          title: "Section 3: Accountability",
          content:
            "The President and ministers are accountable to the House and may be removed from office through established constitutional procedures.",
        },
      ],
    },
    {
      title: "Article V: The Judicial Branch",
      sections: [
        {
          title: "Section 1: Judicial Independence",
          content:
            "Judicial power is vested in independent courts. Judges are independent and subject only to the constitution and the law.",
        },
        {
          title: "Section 2: Supreme Court",
          content:
            "The Supreme Court is the highest court and has final authority on constitutional matters, ensuring laws comply with the constitution.",
        },
        {
          title: "Section 3: Access to Justice",
          content:
            "Every person has the right to have disputes resolved by fair and impartial courts. The state ensures access to justice for all citizens.",
        },
      ],
    },
    {
      title: "Article VI: Amendment Procedures",
      sections: [
        {
          title: "Section 1: Amendment Process",
          content:
            "This constitution may be amended by a two-thirds vote of the House, followed by approval through a national referendum.",
        },
        {
          title: "Section 2: Protected Provisions",
          content:
            "Fundamental rights, democratic principles, and the independence of the judiciary may not be amended in ways that diminish their protections.",
        },
      ],
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="relative flex min-h-[460px] items-center overflow-hidden border-b bg-slate-900/90 py-16 md:min-h-[520px] md:py-24">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue-900/30" />
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 45%), radial-gradient(circle at 80% 10%, rgba(37,99,235,0.2), transparent 50%)",
            }}
          />
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 6px, rgba(255,255,255,0.06) 6px, rgba(255,255,255,0.06) 12px)",
            }}
          />
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto max-w-3xl text-center text-white"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-8 flex justify-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                  <BookOpen className="h-8 w-8" />
                </div>
              </motion.div>
              <motion.h1
                variants={fadeInUp}
                className="mb-4 text-balance text-4xl font-bold tracking-tight drop-shadow-xl md:text-5xl lg:text-6xl"
              >
                Draft Constitution
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-pretty text-lg leading-relaxed text-slate-100/90 md:text-xl"
              >
                The foundational document establishing democratic governance, protecting rights, and defining the
                structure of government.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeIn}
          className="py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeInUp}
              className="mx-auto max-w-4xl"
            >
              <Card className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/85 shadow-2xl shadow-blue-900/10 backdrop-blur-md">
                <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
                <CardHeader className="pb-0">
                  <div className="mb-6 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg shadow-primary/30">
                      <ScrollText className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-3xl font-semibold tracking-tight">Preamble</CardTitle>
                  <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-blue-500" />
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-10 pt-8 text-lg leading-relaxed text-slate-600 md:px-12 md:text-xl">
                  <p>
                    We, the people of Sudan, united in our diversity and committed to building a democratic nation
                    founded on justice, equality, and human dignity, do hereby establish this Constitution as the
                    supreme law of our land.
                  </p>
                  <p>
                    Recognizing our shared history and aspirations for peace and prosperity, affirming our commitment to
                    democratic governance and the rule of law, and respecting the fundamental rights and freedoms of all
                    citizens, we establish this framework for governance that will guide our nation toward a brighter
                    future.
                  </p>
                  <p>
                    This Constitution guarantees the sovereignty of the people, establishes clear separation of powers,
                    protects fundamental rights, and creates institutions that serve the common good while remaining
                    accountable to the citizens they serve.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Constitutional Principles */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeIn}
          className="border-t bg-gradient-to-b from-slate-50/60 via-blue-50/30 to-background py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">Constitutional Principles</h2>
              <p className="text-slate-600 md:text-lg">The core values that underpin our constitutional framework</p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              className="grid gap-8 md:grid-cols-2"
            >
              {principles.map((principle) => (
                <motion.div
                  key={principle.title}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <Card className="group h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-xl shadow-blue-900/5 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-blue-500/15">
                    <CardHeader>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 via-blue-500/15 to-primary/25 text-primary transition-all duration-300 group-hover:scale-105">
                        <principle.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-800">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg leading-relaxed text-slate-600">{principle.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Constitutional Articles */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeIn}
          className="border-t py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">Constitutional Articles</h2>
              <p className="text-slate-600 md:text-lg">Detailed provisions of the draft constitution</p>
            </motion.div>
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="space-y-5">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <AccordionItem
                      value={`article-${index}`}
                      className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 px-6 shadow-xl shadow-blue-900/5 backdrop-blur transition-all duration-300 hover:border-primary/40 data-[state=open]:border-primary/50 data-[state=open]:shadow-2xl"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 transition-all duration-300 hover:no-underline">
                        <span>{article.title}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-6 border-t border-slate-200/60 pt-6">
                          {article.sections.map((section, sIndex) => (
                            <div key={sIndex} className="transition-all duration-300">
                              <h4 className="mb-2 text-lg font-semibold text-slate-800">{section.title}</h4>
                              <p className="leading-relaxed text-slate-600">{section.content}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.section>

        {/* Download Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeIn}
          className="border-t bg-gradient-to-r from-primary/10 via-blue-100/20 to-primary/10 py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">Download the Constitution</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Access the complete draft constitution document for detailed review and study.
              </p>
              <Button
                size="lg"
                disabled
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-6 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-90"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  Download PDF (Coming Soon)
                </span>
              </Button>
              <p className="mt-5 text-sm text-slate-600">
                The complete document will be available once the drafting process is finalized.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Public Comment */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeIn}
          className="border-t py-16 md:py-24"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mx-auto max-w-3xl">
              <Card className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 text-center shadow-xl shadow-blue-900/5 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold tracking-tight text-slate-800">Public Participation</CardTitle>
                  <div className="mx-auto mt-4 h-0.5 w-20 rounded-full bg-gradient-to-r from-primary to-blue-500" />
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-12 text-lg leading-relaxed text-slate-600 md:px-12">
                  <p>
                    This draft constitution is open for public review and comment. We encourage all Sudanese citizens to
                    read, discuss, and provide feedback on these foundational provisions.
                  </p>
                  <p>
                    Your input is essential to ensuring that our constitution truly reflects the values, aspirations,
                    and needs of all Sudanese people. Public consultations and town halls will be held across the
                    country to gather feedback.
                  </p>
                  <p>
                    The final version will be subject to approval through a national referendum, giving every citizen a
                    voice in shaping our nation's future.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
