"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Clock, Mail, MapPin, MessageCircle, Phone, Send, Users } from "lucide-react"

export default function ContactPage() {
  const heroBackgroundUrl =
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80"
  const heroSecondaryBackgroundUrl =
    "https://images.unsplash.com/photo-1523952578875-e06b09653f1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2100&q=80"

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

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
      accent: "from-blue-500 via-blue-600 to-slate-700",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+249 XXX XXX XXX", "Available weekdays 9am-5pm"],
      accent: "from-blue-500 via-sky-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sudanhouse.gov.sd", "We respond within 48 hours"],
      accent: "from-slate-800 via-blue-700 to-blue-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Thursday: 9:00 AM - 5:00 PM", "Friday - Saturday: Closed"],
      accent: "from-blue-500 via-slate-800 to-blue-600",
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

  const departmentIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    "General Inquiries": MessageCircle,
    "Membership Office": Users,
    "Public Affairs": Mail,
    "Legislative Information": BookOpen,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative flex min-h-[480px] items-center overflow-hidden border-b py-20 md:min-h-[560px] md:py-28"
        >
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroBackgroundUrl}')` }}
            />
            <div
              className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-overlay"
              style={{ backgroundImage: `url('${heroSecondaryBackgroundUrl}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/65 to-slate-900/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-transparent to-slate-900/60" />
            <div
              className="absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 45%), radial-gradient(circle at 80% 0%, rgba(99,102,241,0.28), transparent 55%)",
              }}
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <motion.div variants={staggerChildren} className="mx-auto max-w-4xl text-center text-white">
              <motion.h1
                variants={fadeInUp}
                className="mb-6 text-balance text-4xl font-bold tracking-tight drop-shadow-xl md:text-5xl lg:text-6xl"
              >
                Contact Us
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-pretty text-lg leading-relaxed text-blue-100/90 md:text-xl"
              >
                Get in touch with the Sudan House of Representatives. We welcome your questions, feedback, and
                suggestions.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerChildren}
          className="bg-gradient-to-b from-background via-slate-50/40 to-background py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                Contact Information
              </h2>
              <p className="text-muted-foreground">Multiple ways to reach us</p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="group"
                >
                  <Card className="h-full rounded-3xl border border-slate-200/60 bg-white/90 shadow-lg shadow-blue-500/5 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-2xl group-hover:shadow-blue-500/15">
                    <CardHeader>
                      <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${info.accent} opacity-90 transition duration-300 group-hover:opacity-100`} />
                        <div className="absolute inset-[2px] rounded-[18px] bg-white/85" />
                        <info.icon className="relative z-10 h-6 w-6 text-blue-700 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-800" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-slate-900">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      {info.details.map((detail, index) => (
                        <p key={index} className={index === 0 ? "text-base font-medium text-slate-800" : "text-muted-foreground"}>
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerChildren}
          className="border-t bg-gradient-to-b from-slate-50/60 via-muted/40 to-muted/60 py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mx-auto max-w-2xl">
              <div className="mb-10 text-center">
                <h2 className="mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>
              <Card className="rounded-3xl border border-slate-200/60 bg-white/90 shadow-xl shadow-blue-500/10 backdrop-blur-sm">
                <CardContent className="pt-8">
                  <motion.form onSubmit={handleSubmit} className="space-y-8" variants={staggerChildren}>
                    <motion.div variants={fadeInUp} className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="rounded-xl border border-slate-200 bg-white/90 py-3 text-base transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
                          className="rounded-xl border border-slate-200 bg-white/90 py-3 text-base transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger
                          id="category"
                          className="rounded-xl border border-slate-200 bg-white/90 py-3 text-left text-base font-medium text-slate-700 transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border border-slate-200 bg-white/95 shadow-lg">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="membership">Membership</SelectItem>
                          <SelectItem value="legislative">Legislative Information</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="rounded-xl border border-slate-200 bg-white/90 py-3 text-base transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 text-base transition-all duration-200 focus-visible:border-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      />
                    </motion.div>

                    <motion.div variants={fadeInUp} className="pt-2">
                      <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                        <Button
                          type="submit"
                          size="lg"
                          className="relative w-full rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-slate-800 py-6 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-500 hover:via-blue-600 hover:to-slate-800 disabled:cursor-not-allowed disabled:opacity-80"
                          disabled
                        >
                          <Send className="mr-2 h-5 w-5" />
                          Send Message (Coming Soon)
                        </Button>
                      </motion.div>
                    </motion.div>

                    <motion.p variants={fadeInUp} className="text-center text-sm text-muted-foreground">
                      Form submission will be enabled once our systems are fully operational. For urgent matters, please
                      use the contact information above.
                    </motion.p>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Departments */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerChildren}
          className="border-t py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mb-12 text-center">
              <h2 className="mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                Contact by Department
              </h2>
              <p className="text-muted-foreground">Reach the right team for your specific needs</p>
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              {departments.map((dept) => {
                const Icon = departmentIcons[dept.title] ?? Mail
                return (
                  <motion.div
                    key={dept.title}
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="group"
                  >
                    <Card className="h-full rounded-3xl border border-slate-200/70 bg-white/95 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                            <Icon className="h-4 w-4" />
                          </span>
                          {dept.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm leading-relaxed text-muted-foreground">{dept.description}</p>
                        <p className="flex items-center gap-2 text-sm font-medium text-slate-800">
                          <Mail className="h-4 w-4 text-blue-600" />
                          {dept.email}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Visit Us */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerChildren}
          className="border-t bg-gradient-to-b from-muted/40 via-blue-50/40 to-background py-16 md:py-20"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeInUp} className="mx-auto max-w-3xl">
              <Card className="rounded-3xl border border-blue-100 bg-white/95 shadow-xl shadow-blue-500/15">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-slate-900">Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Members of the public are welcome to visit the Sudan House of Representatives. Guided tours and
                    public sessions are available by appointment.
                  </p>
                  <p>
                    To arrange a visit, please contact our Public Affairs office at least one week in advance. Security
                    procedures require all visitors to present valid identification upon entry.
                  </p>
                  <p className="font-semibold text-blue-700">
                    We look forward to welcoming you and showing you how your representatives work on behalf of the
                    Sudanese people.
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

