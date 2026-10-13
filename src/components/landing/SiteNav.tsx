import { useEffect, useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#plan-builder", label: "90-Day Plan" },
  { href: "#careers", label: "Career Paths" },
  { href: "#courses", label: "Courses" },
  { href: "#pricing", label: "Pricing" },
  { href: "#waitlist", label: "Waitlist" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function handleNavClick() {
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled || open
          ? "border-border/80 bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/40 backdrop-blur-sm",
      )}
    >
      <div className="container flex h-16 items-center justify-between gap-4 px-4">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight" onClick={handleNavClick}>
          <span className="flex h-9 w-9 items-center justify-center border border-primary/30 bg-primary/10">
            <Shield className="h-4 w-4 text-primary" />
          </span>
          <span className="hidden sm:inline">Remnant Security</span>
          <span className="sm:hidden">Remnant</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#plan-builder"
            className={cn(buttonVariants({ size: "sm" }), "cyber-button hidden sm:inline-flex")}
          >
            Build My Plan
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="border border-transparent px-3 py-3 text-sm text-muted-foreground transition-colors hover:border-border hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#plan-builder"
              onClick={handleNavClick}
              className={cn(buttonVariants({ size: "sm" }), "cyber-button mt-2 justify-center")}
            >
              Build My Plan
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
