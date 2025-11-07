import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, Scale, Users, Shield, FileText } from "lucide-react"

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

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BookOpen className="h-8 w-8" />
                </div>
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">Draft Constitution</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                The foundational document establishing democratic governance, protecting rights, and defining the
                structure of government.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="border-2 bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Preamble</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    We, the people of Sudan, united in our diversity and committed to building a democratic nation
                    founded on justice, equality, and human dignity, do hereby establish this Constitution as the
                    supreme law of our land.
                  </p>
                  <p className="leading-relaxed">
                    Recognizing our shared history and aspirations for peace and prosperity, affirming our commitment to
                    democratic governance and the rule of law, and respecting the fundamental rights and freedoms of all
                    citizens, we establish this framework for governance that will guide our nation toward a brighter
                    future.
                  </p>
                  <p className="leading-relaxed">
                    This Constitution guarantees the sovereignty of the people, establishes clear separation of powers,
                    protects fundamental rights, and creates institutions that serve the common good while remaining
                    accountable to the citizens they serve.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Constitutional Principles */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Constitutional Principles</h2>
              <p className="text-muted-foreground">The core values that underpin our constitutional framework</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <Card key={principle.title} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <principle.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Constitutional Articles */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Constitutional Articles</h2>
              <p className="text-muted-foreground">Detailed provisions of the draft constitution</p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="space-y-4">
                {articles.map((article, index) => (
                  <AccordionItem key={index} value={`article-${index}`} className="rounded-lg border-2 bg-card px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="text-lg font-semibold">{article.title}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-6 pt-4">
                        {article.sections.map((section, sIndex) => (
                          <div key={sIndex}>
                            <h4 className="mb-2 font-semibold text-foreground">{section.title}</h4>
                            <p className="leading-relaxed text-muted-foreground">{section.content}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Download the Constitution</h2>
              <p className="mb-8 text-muted-foreground">
                Access the complete draft constitution document for detailed review and study.
              </p>
              <Button size="lg" disabled>
                <Download className="mr-2 h-4 w-4" />
                Download PDF (Coming Soon)
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                The complete document will be available once the drafting process is finalized.
              </p>
            </div>
          </div>
        </section>

        {/* Public Comment */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Public Participation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
