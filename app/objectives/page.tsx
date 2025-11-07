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
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">Our Objectives</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                The goals and priorities that guide our work in building a democratic legislative body for Sudan.
              </p>
            </div>
          </div>
        </section>

        {/* Primary Objectives */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Primary Objectives</h2>
              <p className="text-muted-foreground">Our fundamental goals in establishing democratic governance</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {primaryObjectives.map((objective) => (
                <Card key={objective.title} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <objective.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{objective.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{objective.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Areas */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Key Policy Areas</h2>
              <p className="text-muted-foreground">Areas where we will focus our legislative efforts</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {policyAreas.map((area) => (
                <Card key={area.title}>
                  <CardHeader>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <area.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Strategic Goals</h2>
              <p className="text-muted-foreground">Our roadmap for building effective democratic governance</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {strategicGoals.map((goal) => (
                <Card key={goal.number} className="border-2">
                  <CardHeader>
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        {goal.number}
                      </div>
                      <CardTitle className="text-xl">{goal.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {goal.points.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Statement */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Commitment to the People</h2>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground">
                These objectives reflect our unwavering commitment to serve the Sudanese people. Through systematic
                implementation of these goals, we will build a legislative institution that truly represents all
                citizens, protects their rights, and works tirelessly for the betterment of our nation. Every objective
                is designed to contribute to a more democratic, prosperous, and unified Sudan.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
