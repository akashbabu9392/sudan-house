import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, BookOpen, Video, Newspaper, Scale, Users, Globe } from "lucide-react"

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

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">Resources & Documents</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Access important documents, publications, and educational materials from the Sudan House of
                Representatives.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Resource Categories</h2>
              <p className="text-muted-foreground">Explore our collection of materials and information</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Card key={category.title} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {category.count}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Official Documents */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Official Documents</h2>
              <p className="text-muted-foreground">Key legislative and procedural documents</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {documents.map((doc) => (
                <Card key={doc.title} className="flex flex-col">
                  <CardHeader>
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <doc.icon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline">{doc.category}</Badge>
                    </div>
                    <CardTitle className="text-base">{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between">
                    <p className="mb-4 text-sm text-muted-foreground">{doc.description}</p>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Publications */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Recent Publications</h2>
              <p className="text-muted-foreground">Latest reports, newsletters, and educational materials</p>
            </div>
            <div className="mx-auto max-w-4xl space-y-4">
              {publications.map((pub) => (
                <Card key={pub.title} className="border-2">
                  <CardHeader>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <Badge>{pub.type}</Badge>
                          <span className="text-sm text-muted-foreground">{pub.date}</span>
                        </div>
                        <CardTitle className="text-lg">{pub.title}</CardTitle>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{pub.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Information Notice */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Requesting Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    We are continuously working to make more resources available to the public. If you need specific
                    documents or information that is not currently available on this page, please contact our office.
                  </p>
                  <p>
                    All official documents will be published in Arabic and made freely available to ensure transparency
                    and accessibility for all Sudanese citizens. Documents marked as "Coming Soon" are currently being
                    prepared and will be published once they are finalized.
                  </p>
                  <div className="pt-4">
                    <Button asChild>
                      <a href="/contact">Contact Us for Resources</a>
                    </Button>
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
