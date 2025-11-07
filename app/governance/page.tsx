import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Users, Building, Scale, FileCheck, UserCheck, Clock, Vote, Shield } from "lucide-react"

export default function GovernancePage() {
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
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">Governance Structure</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Understanding how the Sudan House of Representatives is organized and operates to serve the people.
              </p>
            </div>
          </div>
        </section>

        {/* Organizational Structure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Organizational Structure</h2>
              <p className="text-muted-foreground">The key components that make up our legislative body</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {structure.map((item) => (
                <Card key={item.title} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Governing Principles */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Governing Principles</h2>
              <p className="text-muted-foreground">Fundamental principles that guide our operations</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <Card key={principle.title}>
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
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

        {/* Legislative Process */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Legislative Process</h2>
              <p className="text-muted-foreground">How bills become laws in the Sudan House of Representatives</p>
            </div>
            <div className="mx-auto max-w-4xl space-y-6">
              {procedures.map((procedure, index) => (
                <Card key={procedure.step} className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                        {procedure.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{procedure.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{procedure.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Standing Committees */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Standing Committees</h2>
              <p className="text-muted-foreground">Specialized committees that examine legislation in detail</p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {committees.map((committee) => (
                      <div key={committee} className="flex items-center gap-2 rounded-lg border p-3">
                        <div className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-sm font-medium">{committee}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transparency & Accountability */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-center text-3xl font-bold">Transparency & Accountability</h2>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The Sudan House of Representatives is committed to operating with complete transparency. All
                      legislative sessions are open to the public, and records of votes and proceedings are made
                      available to citizens.
                    </p>
                    <Separator />
                    <p>
                      Representatives are accountable to their constituents and are required to maintain regular
                      communication with the people they serve. Ethics rules ensure that representatives act in the
                      public interest and avoid conflicts of interest.
                    </p>
                    <Separator />
                    <p>
                      Citizens have the right to petition their representatives, attend public hearings, and participate
                      in the democratic process. We believe that an informed and engaged citizenry is essential to
                      effective democratic governance.
                    </p>
                  </div>
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
