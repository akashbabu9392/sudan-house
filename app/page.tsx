import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Users, Scale, FileText, Vote, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Representative Democracy",
      description:
        "Ensuring all Sudanese citizens have a voice through elected representatives who serve their interests.",
    },
    {
      icon: Scale,
      title: "Legislative Authority",
      description: "Enacting laws and policies that promote justice, equality, and prosperity for all Sudanese people.",
    },
    {
      icon: FileText,
      title: "Constitutional Framework",
      description:
        "Operating within a robust constitutional framework that protects rights and establishes clear governance.",
    },
    {
      icon: Vote,
      title: "Democratic Process",
      description: "Upholding democratic principles through transparent voting procedures and accountability.",
    },
    {
      icon: Building2,
      title: "National Unity",
      description: "Fostering unity and cooperation among all regions and communities of Sudan.",
    },
  ]

  const priorities = [
    {
      title: "Constitutional Development",
      description: "Establishing a comprehensive constitutional framework for democratic governance.",
    },
    {
      title: "Legislative Capacity",
      description: "Building institutional capacity for effective lawmaking and oversight.",
    },
    {
      title: "Citizen Engagement",
      description: "Creating channels for meaningful citizen participation in the legislative process.",
    },
    {
      title: "Regional Representation",
      description: "Ensuring fair and proportional representation from all of Sudan's regions.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
                Sudan House of Representatives
              </h1>
              <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
                Building a democratic legislative institution that represents all Sudanese people and works towards a
                prosperous, peaceful, and unified Sudan.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/membership">Join Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="border-b py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground">
                The Sudan House of Representatives is committed to establishing a democratic legislative body that
                serves all Sudanese citizens. We work to create laws and policies that promote justice, equality,
                economic development, and social welfare while respecting the diversity and unity of our nation.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Foundation</h2>
              <p className="text-muted-foreground">Core principles that guide our legislative work</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Priorities */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Current Priorities</h2>
              <p className="text-muted-foreground">Key areas of focus in our nation-building efforts</p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              {priorities.map((priority, index) => (
                <Card key={priority.title}>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg">{priority.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{priority.description}</p>
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
              <h2 className="mb-4 text-3xl font-bold">Get Involved</h2>
              <p className="mb-8 text-balance text-lg text-muted-foreground">
                Your participation is essential to building a democratic Sudan. Learn more about how you can contribute
                to our legislative efforts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/membership">Become a Member</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
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
