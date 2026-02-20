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
  Moon,
  ChevronLeft,
  ChevronRight
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AppShellProps {
  children: React.ReactNode;
}

const SidebarItem = ({ href, icon: Icon, label, active, collapsed }: { href: string; icon: any; label: string; active: boolean; collapsed: boolean }) => {
  const content = (
    <Link href={href}>
      <div className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-all duration-300 ${
        active 
          ? "bg-primary/10 text-primary font-semibold" 
          : "text-muted-foreground hover:bg-muted hover:text-foreground"
      } ${collapsed ? "justify-center px-0 w-10 h-10 mx-auto" : ""}`}>
        <Icon className={`h-4 w-4 shrink-0 ${active ? "text-primary" : ""}`} />
        {!collapsed && <span className="truncate">{label}</span>}
      </div>
    </Link>
  );

  if (collapsed) {
    return (
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        <TooltipContent side="right">
          {label}
        </TooltipContent>
      </Tooltip>
    );
  }

  return content;
};

export function AppShell({ children }: AppShellProps) {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

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

  const SidebarContent = ({ collapsed }: { collapsed: boolean }) => (
    <div className={`flex flex-col h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ${collapsed ? "w-20" : "w-64"}`}>
      <div className={`p-6 flex items-center ${collapsed ? "justify-center px-0" : "justify-between"}`}>
        <Link href="/">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            {!collapsed && <span>NetGuardian</span>}
          </div>
        </Link>
      </div>
      
      <div className="flex-1 px-3 py-2 space-y-1 overflow-y-auto overflow-x-hidden">
        {!collapsed && (
          <div className="text-[10px] font-bold text-muted-foreground/60 mb-2 px-2 uppercase tracking-[0.2em]">
            Platform
          </div>
        )}
        {navItems.map((item) => (
          <SidebarItem 
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            active={location === item.href}
            collapsed={collapsed}
          />
        ))}
        
        {!collapsed && (
          <div className="mt-8 text-[10px] font-bold text-muted-foreground/60 mb-2 px-2 uppercase tracking-[0.2em]">
            Settings
          </div>
        )}
        <SidebarItem 
          href="/billing"
          icon={CreditCard}
          label="Billing & Plans"
          active={location === "/billing"}
          collapsed={collapsed}
        />
        <SidebarItem 
          href="/settings"
          icon={Settings}
          label="Configuration"
          active={location === "/settings"}
          collapsed={collapsed}
        />
      </div>

      <div className={`p-4 border-t border-sidebar-border ${collapsed ? "flex flex-col items-center gap-4" : ""}`}>
        <div className={`flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent cursor-pointer transition-colors ${collapsed ? "justify-center" : ""}`}>
          <Avatar className="h-8 w-8 shrink-0">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium leading-none truncate">Jane Doe</p>
              <p className="text-xs text-muted-foreground truncate">Acme Corp</p>
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className={`h-8 w-8 ${collapsed ? "" : "ml-auto"}`}>
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={collapsed ? "center" : "end"} side={collapsed ? "right" : "bottom"}>
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
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link href="/billing">
                  <div className="w-full">Billing</div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="text-destructive cursor-pointer">
                <Link href="/login">
                  <div className="flex items-center w-full">
                    <LogOut className="mr-2 h-4 w-4" /> Log out
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          className={`h-8 w-8 mt-2 transition-transform duration-300 ${collapsed ? "" : "ml-auto"}`}
          onClick={() => setIsCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex text-foreground">
      {/* Desktop Sidebar */}
      <div className={`hidden md:block h-screen sticky top-0 transition-all duration-300 ${isCollapsed ? "w-20" : "w-64"}`}>
        <SidebarContent collapsed={isCollapsed} />
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
              <SidebarContent collapsed={false} />
            </SheetContent>
          </Sheet>
        </div>

        <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </main>
      </div>
    </div>
  );
}
