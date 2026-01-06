import React from "react";
import { Link } from "wouter";
import { ShieldCheck, ArrowRight, Check, Activity, Globe, Search, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            NetGuardian
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#tools" className="text-muted-foreground hover:text-foreground transition-colors">Free Tools</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#enterprise" className="text-muted-foreground hover:text-foreground transition-colors">Enterprise</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="hidden md:inline-flex">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 border-b">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              v2.0 is now live for Enterprise
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Infrastructure monitoring <br className="hidden md:block"/>
              <span className="text-muted-foreground">reimagined for teams.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              Monitor domains, track uptime, and prevent blacklist issues with a platform designed for reliability and collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Link href="/signup">
                <Button size="lg" className="h-12 px-8 text-base">
                  Create Free Account
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/tools">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base">
                  Try Free Tools
                </Button>
              </Link>
            </div>

            {/* Hero Visual */}
            <div className="mt-20 relative rounded-xl border bg-card shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-1000 delay-500">
              <div className="aspect-[16/9] bg-muted/50 flex items-center justify-center text-muted-foreground">
                <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                  {/* Abstract UI Mockup Placeholder */}
                  <div className="p-8 w-full h-full flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="w-1/4 h-32 bg-background border rounded-lg shadow-sm"></div>
                      <div className="w-1/4 h-32 bg-background border rounded-lg shadow-sm"></div>
                      <div className="w-1/4 h-32 bg-background border rounded-lg shadow-sm"></div>
                      <div className="w-1/4 h-32 bg-background border rounded-lg shadow-sm"></div>
                    </div>
                    <div className="flex-1 bg-background border rounded-lg shadow-sm w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Tools Section */}
        <section id="tools" className="py-24 px-6 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Instant Diagnostics</h2>
              <p className="text-muted-foreground text-lg">Powerful tools available without login.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-colors">
                <div className="mb-6 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">DNS Lookup</h3>
                <p className="text-muted-foreground mb-6">Instantly resolve DNS records for any domain worldwide.</p>
                <div className="flex gap-2">
                  <input className="flex-1 h-10 rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="example.com" />
                  <Button variant="secondary">Check</Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border bg-background p-8 hover:border-primary/50 transition-colors">
                <div className="mb-6 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">IP Lookup</h3>
                <p className="text-muted-foreground mb-6">Get detailed geolocation and ISP data for any IP address.</p>
                <div className="flex gap-2">
                  <input className="flex-1 h-10 rounded-md border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="8.8.8.8" />
                  <Button variant="secondary">Search</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="py-24 px-6 border-t">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Domain Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Never lose a domain again. Get automated alerts for expiration dates, SSL certificate validity, and DNS changes.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Uptime & Status</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Monitor HTTP/HTTPS, TCP, and Ping endpoints from global locations. Instant alerts via Email, Slack, or SMS.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">Blacklist Monitor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automatically check your IP reputation across 100+ RBLs to ensure your email deliverability remains high.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-24 px-6 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for teams that scale.</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
              Collaborate with your entire engineering team. Manage permissions, share dashboards, and consolidate billing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-12 text-left md:text-center">
              <div>
                <div className="font-bold text-2xl mb-1">99.9%</div>
                <div className="text-sm opacity-80">SLA Guarantee</div>
              </div>
              <div>
                <div className="font-bold text-2xl mb-1">24/7</div>
                <div className="text-sm opacity-80">Expert Support</div>
              </div>
              <div>
                <div className="font-bold text-2xl mb-1">SSO</div>
                <div className="text-sm opacity-80">SAML Integration</div>
              </div>
              <div>
                <div className="font-bold text-2xl mb-1">API</div>
                <div className="text-sm opacity-80">Full Access</div>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Contact Sales
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t bg-muted/20">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-lg">
            <ShieldCheck className="w-5 h-5" />
            NetGuardian
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 NetGuardian Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
