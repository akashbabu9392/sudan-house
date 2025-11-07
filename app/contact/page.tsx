"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission will be implemented when backend is ready
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Parliament Building", "Khartoum, Sudan"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+249 XXX XXX XXX", "Available weekdays 9am-5pm"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sudanhouse.gov.sd", "We respond within 48 hours"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Thursday: 9:00 AM - 5:00 PM", "Friday - Saturday: Closed"],
    },
  ]

  const departments = [
    {
      title: "General Inquiries",
      description: "For general questions about the House and its operations",
      email: "info@sudanhouse.gov.sd",
    },
    {
      title: "Membership Office",
      description: "Questions about membership and application process",
      email: "membership@sudanhouse.gov.sd",
    },
    {
      title: "Public Affairs",
      description: "Media inquiries and public engagement",
      email: "public@sudanhouse.gov.sd",
    },
    {
      title: "Legislative Information",
      description: "Questions about bills, laws, and legislative procedures",
      email: "legislative@sudanhouse.gov.sd",
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
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
              <p className="text-pretty text-lg text-muted-foreground md:text-xl">
                Get in touch with the Sudan House of Representatives. We welcome your questions, feedback, and
                suggestions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Contact Information</h2>
              <p className="text-muted-foreground">Multiple ways to reach us</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <Card key={info.title} className="border-2">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, index) => (
                      <p key={index} className={index === 0 ? "font-medium" : "text-sm text-muted-foreground"}>
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">Send Us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>
              <Card className="border-2">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="membership">Membership</SelectItem>
                          <SelectItem value="legislative">Legislative Information</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled>
                      Send Message (Coming Soon)
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                      Form submission will be enabled once our systems are fully operational. For urgent matters, please
                      use the contact information above.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Contact by Department</h2>
              <p className="text-muted-foreground">Reach the right team for your specific needs</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {departments.map((dept) => (
                <Card key={dept.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{dept.description}</p>
                    <p className="flex items-center gap-2 text-sm font-medium">
                      <Mail className="h-4 w-4 text-primary" />
                      {dept.email}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us */}
        <section className="border-t bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    Members of the public are welcome to visit the Sudan House of Representatives. Guided tours and
                    public sessions are available by appointment.
                  </p>
                  <p>
                    To arrange a visit, please contact our Public Affairs office at least one week in advance. Security
                    procedures require all visitors to present valid identification upon entry.
                  </p>
                  <p className="font-medium text-foreground">
                    We look forward to welcoming you and showing you how your representatives work on behalf of the
                    Sudanese people.
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
