import React, { useState } from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MoreHorizontal, 
  Plus, 
  Search, 
  ShieldCheck, 
  AlertCircle,
  Calendar,
  Filter,
  Globe,
  Loader2
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const domainsData = [
  { id: 1, name: "acme-corp.com", registrar: "GoDaddy", expires: "2024-12-01", status: "Active", autoRenew: true, ssl: true },
  { id: 2, name: "acme-api.io", registrar: "Namecheap", expires: "2024-05-15", status: "Active", autoRenew: true, ssl: true },
  { id: 3, name: "project-x.net", registrar: "Google Domains", expires: "2024-02-28", status: "Expiring Soon", autoRenew: false, ssl: true },
  { id: 4, name: "legacy-app.org", registrar: "GoDaddy", expires: "2024-03-10", status: "Active", autoRenew: true, ssl: false },
  { id: 5, name: "marketing-funnel.com", registrar: "Bluehost", expires: "2025-01-01", status: "Active", autoRenew: true, ssl: true },
];

export default function Domains() {
  const { toast } = useToast();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddDomain = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsAddOpen(false);
      toast({
        title: "Domain added",
        description: "The domain has been successfully added to your portfolio.",
      });
    }, 1500);
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Domains</h1>
            <p className="text-muted-foreground mt-1">Manage and monitor your domain portfolio.</p>
          </div>
          
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white border-none shadow-lg shadow-emerald-500/20 transition-all">
                 <Plus className="w-4 h-4" /> Add Domain
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#0a0a0b] border-white/5">
              <form onSubmit={handleAddDomain}>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
                    <Globe className="w-6 h-6 text-emerald-500" />
                    Add Domain
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Enter the domain name you want to monitor. We'll automatically fetch WHOIS and DNS data.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-6">
                  <div className="grid gap-2">
                    <Label htmlFor="domain" className="text-sm font-medium text-white/70 text-left">Domain Name</Label>
                    <Input 
                      id="domain" 
                      placeholder="example.com" 
                      className="bg-white/5 border-white/10 focus:border-emerald-500/50" 
                      required 
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3">
                    <p className="text-xs text-emerald-500/80 leading-relaxed">
                      <strong>Tip:</strong> Adding a domain will enable automatic uptime monitoring, SSL tracking, and expiry alerts.
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={() => setIsAddOpen(false)} 
                    className="text-white/50 hover:text-white"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-emerald-500 hover:bg-emerald-600 text-white min-w-[120px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Adding...</>
                    ) : (
                      "Add Domain"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="bg-card/50 border-white/5">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between gap-4">
              <CardTitle>All Domains</CardTitle>
              <div className="flex items-center gap-2">
                 <div className="relative w-full max-w-sm">
                   <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                   <Input type="search" placeholder="Search domains..." className="pl-9 w-[200px] md:w-[250px] bg-white/5 border-white/10" />
                 </div>
                 <Button variant="outline" size="icon" className="border-white/10 bg-white/5">
                   <Filter className="h-4 w-4" />
                 </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-white/5">
                    <TableHead className="text-white/40">Domain Name</TableHead>
                    <TableHead className="text-white/40">Registrar</TableHead>
                    <TableHead className="text-white/40">Status</TableHead>
                    <TableHead className="text-white/40">Expiration</TableHead>
                    <TableHead className="text-center text-white/40">SSL</TableHead>
                    <TableHead className="text-right text-white/40">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {domainsData.map((domain) => (
                    <TableRow key={domain.id} className="border-white/5 hover:bg-white/[0.02] transition-colors group">
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">{domain.name}</span>
                          <span className="text-xs text-muted-foreground">Updated 2h ago</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-white/70">{domain.registrar}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={`gap-1 px-2 py-0.5 border-none shadow-sm ${
                            domain.status === "Active" 
                              ? "bg-emerald-500/10 text-emerald-400" 
                              : "bg-amber-500/10 text-amber-400"
                          }`}
                        >
                          {domain.status === "Active" ? <ShieldCheck className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {domain.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-white/60">
                         <div className="flex items-center gap-2">
                           <Calendar className="w-3 h-3 text-white/40" />
                           {domain.expires}
                         </div>
                      </TableCell>
                      <TableCell className="text-center">
                        {domain.ssl ? (
                           <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-500">
                             <ShieldCheck className="w-3.5 h-3.5" />
                           </div>
                        ) : (
                           <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-500">
                             <AlertCircle className="w-3.5 h-3.5" />
                           </div>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="hover:bg-white/5 text-white/40 hover:text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-[#0a0a0b] border-white/5">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="cursor-pointer focus:bg-emerald-500/10 focus:text-emerald-400">View Details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer focus:bg-emerald-500/10 focus:text-emerald-400">Check DNS</DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-white/5" />
                            <DropdownMenuItem className="text-red-400 focus:bg-red-500/10 focus:text-red-400 cursor-pointer">Remove Domain</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
             </Table>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

