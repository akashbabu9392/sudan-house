import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Sudan House of Representatives</h3>
            <p className="text-sm text-muted-foreground">
              Building a democratic and representative legislative body for all Sudanese people.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/objectives" className="text-muted-foreground transition-colors hover:text-primary">
                  Our Objectives
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-muted-foreground transition-colors hover:text-primary">
                  Governance
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/constitution" className="text-muted-foreground transition-colors hover:text-primary">
                  Constitution
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-muted-foreground transition-colors hover:text-primary">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground transition-colors hover:text-primary">
                  Documents
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Khartoum, Sudan</li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sudan House of Representatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
