"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t-2 border-slate-200 bg-gradient-to-b from-slate-50/50 to-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-foreground">Sudan House of Representatives</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Building a democratic and representative legislative body for all Sudanese people.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="group relative inline-block text-muted-foreground transition-colors hover:text-blue-700"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/objectives"
                  className="group relative inline-block text-muted-foreground transition-colors hover:text-blue-700"
                >
                  Our Objectives
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/governance"
                  className="group relative inline-block text-muted-foreground transition-colors hover:text-blue-700"
                >
                  Governance
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/constitution"
                  className="group relative inline-block text-muted-foreground transition-colors hover:text-blue-700"
                >
                  Constitution
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/membership"
                  className="group relative inline-block text-muted-foreground transition-colors hover:text-blue-700"
                >
                  Membership
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="group relative inline-block text-muted-foreground transition-colors hover:text-blue-700"
                >
                  Documents
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="mb-4 font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Khartoum, Sudan</li>
              <li>
                <Link
                  href="/contact"
                  className="group relative inline-block transition-colors hover:text-blue-700"
                >
                  Contact Us
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Sudan House of Representatives. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
