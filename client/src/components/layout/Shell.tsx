import React from "react";
import { Link, useLocation } from "wouter";
import { 
  Activity, 
  ShieldCheck, 
  Globe, 
  Search, 
  Users, 
  Bell, 
  LogOut, 
  LayoutDashboard,
  Settings,
  Menu,
  CreditCard,
  Sun,
  Moon
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

interface AppShellProps {
  children: React.ReactNode;
}

const SidebarItem = ({ href, icon: Icon, label, active }: { href: string; icon: any; label: string; active: boolean }) => (
  <Link href={href}>
    <a className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      active 
        ? "bg-primary/10 text-primary" 
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`}>
      <Icon className="h-4 w-4" />
      {label}
    </a>
  </Link>
);

export function AppShell({ children }: AppShellProps) {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/domains", icon: Globe, label: "Domains" },
    { href: "/similarity", icon: ShieldCheck, label: "Similarity Monitor" },
    { href: "/uptime", icon: Activity, label: "Uptime" },
    { href: "/blacklist", icon: ShieldCheck, label: "Blacklist" },
    { href: "/tools", icon: Search, label: "Free Tools" },
    { href: "/alerts", icon: Bell, label: "Alerts" },
    { href: "/team", icon: Users, label: "Team" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <Link href="/">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            NetGuardian
          </div>
        </Link>
      </div>
      
      <div className="flex-1 px-4 py-2 space-y-1">
        <div className="text-xs font-semibold text-muted-foreground mb-2 px-2 uppercase tracking-wider">
          Platform
        </div>
        {navItems.map((item) => (
          <SidebarItem 
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={location === item.href}
          />
        ))}
        
        <div className="mt-8 text-xs font-semibold text-muted-foreground mb-2 px-2 uppercase tracking-wider">
          Settings
        </div>
        <SidebarItem 
          href="/billing"
          icon={CreditCard}
          label="Billing & Plans"
          active={location === "/billing"}
        />
        <SidebarItem 
          href="/settings"
          icon={Settings}
          label="Configuration"
          active={location === "/settings"}
        />
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-none truncate">Jane Doe</p>
            <p className="text-xs text-muted-foreground truncate">Acme Corp</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 ml-auto">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="cursor-pointer">
                {theme === "dark" ? (
                  <>
                    <Sun className="mr-2 h-4 w-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="mr-2 h-4 w-4" /> Dark Mode
                  </>
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <Link href="/billing">
                <DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <Link href="/login">
                <DropdownMenuItem className="text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-screen sticky top-0">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b bg-background sticky top-0 z-50">
          <div className="flex items-center gap-2 font-bold text-lg">
            <ShieldCheck className="w-5 h-5 text-primary" />
            NetGuardian
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <SidebarContent />
            </SheetContent>
          </Sheet>
        </div>

        <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
          {children}
        </main>
      </div>
    </div>
  );
}
