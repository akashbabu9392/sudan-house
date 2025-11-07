import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Democracy",
      description:
        "We believe in the fundamental right of all Sudanese citizens to participate in governance through free and fair representation.",
    },
    {
      icon: Target,
      title: "Transparency",
      description:
        "All our proceedings, decisions, and legislative activities are conducted with openness and accountability to the people.",
    },
    {
      icon: Heart,
      title: "Unity",
      description:
        "We work to bridge divides and bring together all regions and communities of Sudan in the spirit of national solidarity.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "Every voice matters. We ensure representation across ethnic, religious, regional, and social lines.",
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
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">About Us</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Learn about the Sudan House of Representatives and our commitment to building a democratic future for
                all Sudanese people.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  The Sudan House of Representatives represents a historic effort to establish a democratic legislative
                  institution that truly serves the interests of all Sudanese people. Born from the aspirations of
                  millions who dream of a peaceful, prosperous, and unified Sudan, our institution is committed to
                  building a framework for governance that respects human rights, upholds the rule of law, and promotes
                  social justice.
                </p>
                <p>
                  Throughout Sudan's complex history, the need for representative democracy has been clear. Our house
                  aims to provide a platform where diverse voices can come together, debate constructively, and make
                  decisions that benefit the entire nation. We recognize that building democratic institutions takes
                  time, dedication, and the active participation of citizens from all walks of life.
                </p>
                <p>
                  As we work to establish this institution, we are guided by principles of inclusivity, transparency,
                  and accountability. We believe that every Sudanese citizen deserves to have their voice heard and
                  their rights protected. Through careful constitutional development, capacity building, and citizen
                  engagement, we are laying the groundwork for a legislative body that will serve Sudan for generations
                  to come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Our Core Values</h2>
              <p className="text-muted-foreground">The principles that guide every decision and action we take</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A democratic Sudan where every citizen's voice is heard, where laws protect the rights and dignity
                    of all people, and where governance is transparent, accountable, and serves the common good.
                  </p>
                  <p className="text-muted-foreground">
                    We envision a nation united in its diversity, prosperous in its economy, and peaceful in its
                    communities, led by representatives who truly serve the people's interests.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To establish and maintain a democratic House of Representatives that enacts just laws, provides
                    effective oversight, and represents the diverse interests of all Sudanese people.
                  </p>
                  <p className="text-muted-foreground">
                    We are committed to building institutional capacity, fostering citizen participation, and creating a
                    legislative framework that promotes peace, development, and social justice across Sudan.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold">Our Commitment</h2>
              <p className="text-balance text-lg leading-relaxed text-muted-foreground">
                We pledge to work tirelessly for the betterment of Sudan and its people. Through dedication to
                democratic principles, respect for human rights, and commitment to the rule of law, we strive to build a
                legislative institution that all Sudanese can be proud of. Together, we will create a brighter future
                for our nation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
