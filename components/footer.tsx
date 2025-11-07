"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-gradient-to-b from-white via-slate-50/80 to-blue-50/40 shadow-[0_-4px_24px_rgba(59,130,246,0.08)]">
      {/* Top border gradient divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(59,130,246,0.1) 2px,
              rgba(59,130,246,0.1) 4px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              rgba(59,130,246,0.08) 100px,
              rgba(59,130,246,0.08) 102px
            )
          `,
        }}
      />

      <div className="relative container mx-auto px-4 py-16 md:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-10 md:grid-cols-4 md:gap-8 lg:gap-12"
        >
          {/* Column 1: Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl lg:tracking-tighter">
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                Sudan House of Representatives
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base md:leading-7">
              Building a democratic and representative legislative body for all Sudanese people.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <h4 className="text-base font-bold tracking-wide text-foreground md:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="group relative inline-flex items-center text-muted-foreground transition-colors duration-300 ease-in-out hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="relative">
                    About Us
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/objectives"
                  className="group relative inline-flex items-center text-muted-foreground transition-colors duration-300 ease-in-out hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="relative">
                    Our Objectives
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="group relative inline-flex items-center text-muted-foreground transition-colors duration-300 ease-in-out hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="relative">
                    Governance
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-5"
          >
            <h4 className="text-base font-bold tracking-wide text-foreground md:text-lg">
              Resources
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/constitution"
                  className="group relative inline-flex items-center text-muted-foreground transition-colors duration-300 ease-in-out hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="relative">
                    Constitution
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="group relative inline-flex items-center text-muted-foreground transition-colors duration-300 ease-in-out hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="relative">
                    Membership
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="group relative inline-flex items-center text-muted-foreground transition-colors duration-300 ease-in-out hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  <span className="relative">
                    Documents
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-5"
          >
            <h4 className="text-base font-bold tracking-wide text-foreground md:text-lg">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600/70" aria-hidden="true" />
                <span className="leading-relaxed">Khartoum, Sudan</span>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 ease-in-out hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 rounded-sm"
                >
                  <Mail className="h-4 w-4 shrink-0 text-blue-600/70 transition-colors duration-300 group-hover:text-blue-700" aria-hidden="true" />
                  <span className="relative">
                    Contact Us
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 border-t border-slate-200/60 bg-gradient-to-b from-transparent to-blue-50/20 pt-8 md:mt-16"
        >
          <div className="relative">
            {/* Subtle top border gradient */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-300/20 to-transparent" />
            <p className="text-center text-xs text-muted-foreground/80 md:text-sm">
              &copy; {new Date().getFullYear()} Sudan House of Representatives. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
