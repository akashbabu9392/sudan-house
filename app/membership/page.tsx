import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, FileText, Vote, Award } from "lucide-react"

export default function MembershipPage() {
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
        {/* Header */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">Membership</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Join the Sudan House of Representatives and contribute to building a democratic future for our nation.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Be Part of Democratic Change</h2>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground">
                Membership in the Sudan House of Representatives is an opportunity to serve your country and make a
                meaningful difference in the lives of Sudanese people. Whether as an elected representative, associate
                member, or observer, your participation strengthens our democratic institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Categories */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Membership Categories</h2>
              <p className="text-muted-foreground">Different ways to participate in our legislative work</p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
              {categories.map((category) => (
                <Card key={category.title} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <category.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="secondary">{category.badge}</Badge>
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{category.description}</p>
                    <div>
                      <h4 className="mb-3 font-semibold">Requirements:</h4>
                      <ul className="space-y-2">
                        {category.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Membership Benefits</h2>
              <p className="text-muted-foreground">What you gain by being part of the House</p>
            </div>
            <div className="mx-auto max-w-4xl">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 rounded-lg border p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Application Process</h2>
              <p className="text-muted-foreground">Steps to become a member of the House</p>
            </div>
            <div className="mx-auto max-w-4xl space-y-4">
              {process.map((step) => (
                <Card key={step.step} className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold">Ready to Join?</h2>
              <p className="mb-8 text-balance text-lg text-muted-foreground">
                Take the first step in contributing to Sudan's democratic future. Contact us to learn more about
                membership opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" disabled>
                  <FileText className="mr-2 h-4 w-4" />
                  Apply Now (Coming Soon)
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
