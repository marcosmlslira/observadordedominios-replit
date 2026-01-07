import React from "react";
import { Link } from "wouter";
import { ShieldCheck, ArrowRight, Check, Activity, Globe, Search, Lock, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function LandingPage() {
  const { theme, setTheme } = useTheme();
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
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link href="/login">
              <Button variant="ghost" className="hidden md:inline-flex" data-testid="button-login">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button data-testid="button-signup">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden">
          {/* Prisma-like Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50"></div>
          
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              v2.0 is now live for Enterprise
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Infrastructure that <br className="hidden md:block"/>
              fits how you scale
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              A corporate monitoring platform that fits neatly into your workflow, scales with your app, and gets out of your way. From first domain to global infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
              <Link href="/signup">
                <Button size="lg" className="h-12 px-8 text-base bg-white text-black hover:bg-white/90">
                  Get Started Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 h-12 rounded-lg text-sm font-mono text-white/80">
                <span className="opacity-50">$</span> npx netguardian init
                <button className="ml-2 p-1 hover:bg-white/10 rounded transition-colors">
                  <Check className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Feature Grid - Prisma Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24">
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] text-left hover:bg-white/[0.04] transition-colors">
                <Globe className="w-5 h-5 text-blue-400 mb-4" />
                <h3 className="font-bold mb-2">Local and Remote DNS</h3>
                <p className="text-sm text-muted-foreground">Sync DNS configs and manage databases from your local environment seamlessly.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] text-left hover:bg-white/[0.04] transition-colors">
                <Activity className="w-5 h-5 text-emerald-400 mb-4" />
                <h3 className="font-bold mb-2">Real-time Uptime</h3>
                <p className="text-sm text-muted-foreground">Manage and explore systemic infrastructure with a visual data browser built for speed.</p>
              </div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] text-left hover:bg-white/[0.04] transition-colors">
                <Search className="w-5 h-5 text-purple-400 mb-4" />
                <h3 className="font-bold mb-2">Advanced Similarity</h3>
                <p className="text-sm text-muted-foreground">Code-level integration with type-safe monitoring and automated threat detection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Sections */}
        <section className="py-24 px-6 border-t border-white/5">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-6">Infrastructure that fits your stack.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Works with your existing stack, wherever you deploy. Next.js on Vercel, Hono on Cloudflare, or rolling your own auth. Your choice of tools, they all just connect.
              </p>
              <div className="flex flex-wrap gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                <div className="w-8 h-8 bg-white/10 rounded"></div>
                <div className="w-8 h-8 bg-white/10 rounded"></div>
                <div className="w-8 h-8 bg-white/10 rounded"></div>
                <div className="w-8 h-8 bg-white/10 rounded"></div>
              </div>
            </div>
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent aspect-square p-8 overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f620_0%,transparent_100%)]"></div>
               <div className="relative w-full h-full flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-blue-500/50" />
               </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative rounded-2xl border border-white/10 bg-black/50 aspect-video overflow-hidden">
               <div className="p-4 border-b border-white/10 flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                 <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                 <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
               </div>
               <div className="p-8 font-mono text-sm text-white/40">
                 <p className="text-blue-400">const</p> monitor = <p className="text-purple-400">new</p> <p className="text-emerald-400">NetGuardian</p>()<br/>
                 monitor.<p className="text-blue-400">watch</p>(<p className="text-amber-400">'acme-corp.com'</p>)<br/>
                 <br/>
                 <p className="text-white/20">// Continuous security scans active</p>
               </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold tracking-tighter mb-6">Real Monitoring. Better experience.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The NetGuardian platform scales from your first user to millions. Automatic backups, observability and compliance. Production ready from day one, managed automatically.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 text-center border-t border-white/5">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Ready to secure your infra?</h2>
          <Link href="/signup">
            <Button size="lg" className="h-14 px-10 text-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">Deploy a monitoring node in an instant. No credit card required.</p>
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
