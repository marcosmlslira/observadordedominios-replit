import React from "react";
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
  Filter
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

const domains = [
  { id: 1, name: "acme-corp.com", registrar: "GoDaddy", expires: "2024-12-01", status: "Active", autoRenew: true, ssl: true },
  { id: 2, name: "acme-api.io", registrar: "Namecheap", expires: "2024-05-15", status: "Active", autoRenew: true, ssl: true },
  { id: 3, name: "project-x.net", registrar: "Google Domains", expires: "2024-02-28", status: "Expiring Soon", autoRenew: false, ssl: true },
  { id: 4, name: "legacy-app.org", registrar: "GoDaddy", expires: "2024-03-10", status: "Active", autoRenew: true, ssl: false },
  { id: 5, name: "marketing-funnel.com", registrar: "Bluehost", expires: "2025-01-01", status: "Active", autoRenew: true, ssl: true },
];

export default function Domains() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Domains</h1>
            <p className="text-muted-foreground mt-1">Manage and monitor your domain portfolio.</p>
          </div>
          <Button className="gap-2">
             <Plus className="w-4 h-4" /> Add Domain
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>All Domains</CardTitle>
              <div className="flex items-center gap-2">
                 <div className="relative w-full max-w-sm">
                   <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                   <Input type="search" placeholder="Search domains..." className="pl-9 w-[250px]" />
                 </div>
                 <Button variant="outline" size="icon">
                   <Filter className="h-4 w-4" />
                 </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
             <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain Name</TableHead>
                    <TableHead>Registrar</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Expiration</TableHead>
                    <TableHead className="text-center">SSL</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {domains.map((domain) => (
                    <TableRow key={domain.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{domain.name}</span>
                          <span className="text-xs text-muted-foreground">Updated 2h ago</span>
                        </div>
                      </TableCell>
                      <TableCell>{domain.registrar}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={`gap-1 ${
                            domain.status === "Active" 
                              ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800" 
                              : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800"
                          }`}
                        >
                          {domain.status === "Active" ? <ShieldCheck className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {domain.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                         <div className="flex items-center gap-2">
                           <Calendar className="w-3 h-3 text-muted-foreground" />
                           {domain.expires}
                         </div>
                      </TableCell>
                      <TableCell className="text-center">
                        {domain.ssl ? (
                           <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                             <ShieldCheck className="w-3 h-3" />
                           </div>
                        ) : (
                           <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
                             <AlertCircle className="w-3 h-3" />
                           </div>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Check DNS</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Remove Domain</DropdownMenuItem>
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
