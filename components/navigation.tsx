"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/objectives", label: "Objectives" },
      { href: "/governance", label: "Governance" },
      { href: "/constitution", label: "Constitution" },
      { href: "/membership", label: "Membership" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Contact" },
    ],
    [],
  )

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname?.startsWith(href)
  }

  return (
    <header
      className={cn(
        "relative sticky top-0 z-50 w-full border-b border-transparent transition-all duration-500 ease-out",
        "before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/30 before:to-transparent",
        "after:content-[''] after:absolute after:inset-x-4 after:-bottom-1.5 after:h-px after:rounded-full after:bg-gradient-to-r after:from-blue-500/0 after:via-blue-500/20 after:to-blue-500/0",
        scrolled
          ? "bg-background/95 shadow-lg shadow-blue-500/10 backdrop-blur-lg backdrop-saturate-150 border-border/70"
          : "bg-background/75 shadow-none backdrop-blur-md backdrop-saturate-150",
      )}
    >
      <div className="relative mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-left"
          aria-label="Sudan House of Representatives homepage"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white shadow-lg shadow-blue-600/20 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-blue-600/30 group-hover:ring-white/20 sm:h-12 sm:w-12">
            <span className="text-lg font-semibold tracking-wider">SH</span>
          </div>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.08em] text-foreground/90 transition-colors duration-200 group-hover:text-blue-700 sm:inline-block lg:text-base">
            Sudan House of Representatives
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={cn(
                "group relative flex items-center justify-center px-1.5 text-sm font-semibold tracking-wide text-foreground/80 transition-colors duration-200 ease-out",
                "after:absolute after:-bottom-2 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:via-blue-600 after:to-blue-700 after:opacity-0 after:transition-all after:duration-300 after:ease-out",
                "hover:text-blue-700 hover:after:w-full hover:after:opacity-100",
                isActiveLink(link.href) && "text-blue-700 after:w-full after:opacity-100",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/40 p-0 text-foreground/80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-white/60 hover:text-blue-700 hover:shadow-md"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="max-h-[90vh] w-full border-none bg-background/92 px-6 py-12 shadow-2xl backdrop-blur-xl"
          >
            <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white shadow-lg shadow-blue-600/20">
                  <span className="text-lg font-semibold tracking-wider">SH</span>
                </div>
                <span className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/80">
                  Sudan House of Representatives
                </span>
              </div>
              <nav className="flex w-full flex-col gap-3 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActiveLink(link.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-full px-4 py-2 text-base font-semibold tracking-wide text-foreground/85 transition-all duration-200 ease-out",
                      "hover:bg-blue-50/70 hover:text-blue-700",
                      isActiveLink(link.href) && "bg-blue-50 text-blue-700 shadow-sm",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
