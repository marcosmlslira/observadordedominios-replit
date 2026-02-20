import React, { useState } from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Activity, CheckCircle2, AlertTriangle, XCircle, MoreVertical, Globe, Clock, Shield, RefreshCcw, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const monitors = [
  { id: 1, name: "API Production", url: "https://api.acme.com", type: "HTTPS", interval: "1m", status: "up", uptime: "99.99%", avgRes: "120ms" },
  { id: 2, name: "Marketing Site", url: "https://acme.com", type: "HTTPS", interval: "5m", status: "up", uptime: "100%", avgRes: "45ms" },
  { id: 3, name: "Legacy Portal", url: "http://portal.legacy.net", type: "HTTP", interval: "5m", status: "warning", uptime: "98.5%", avgRes: "850ms" },
  { id: 4, name: "Database Primary", url: "tcp://db-01:5432", type: "TCP", interval: "30s", status: "up", uptime: "99.99%", avgRes: "5ms" },
  { id: 5, name: "Worker Node 3", url: "192.168.1.50", type: "PING", interval: "1m", status: "down", uptime: "92.1%", avgRes: "TIMEOUT" },
];

export default function Uptime() {
  const { toast } = useToast();
  const [isAddOpen, setIsAddOpen] = useState(false);

  const handleAddMonitor = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddOpen(false);
    toast({
      title: "Monitor added successfully",
      description: "NetGuardian is now monitoring your service.",
    });
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Uptime Monitoring</h1>
            <p className="text-muted-foreground mt-1">
              Track the availability and performance of your services.
            </p>
          </div>
          
          <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-emerald-500 hover:bg-emerald-600 text-white border-none shadow-lg shadow-emerald-500/20">
                 <Plus className="w-4 h-4" /> Add Monitor
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px] bg-[#0a0a0b] border-white/5">
              <form onSubmit={handleAddMonitor}>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">Add New Monitor</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Configure a new endpoint to monitor its availability and response time.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-6 py-6">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-sm font-medium text-white/70">Friendly Name</Label>
                    <Input id="name" placeholder="e.g. My Website" className="bg-white/5 border-white/10 focus:border-emerald-500/50" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="url" className="text-sm font-medium text-white/70">URL (HTTP/S) or IP</Label>
                    <Input id="url" placeholder="https://example.com" className="bg-white/5 border-white/10 focus:border-emerald-500/50" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="type" className="text-sm font-medium text-white/70">Monitor Type</Label>
                      <Select defaultValue="https">
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0a0b] border-white/10">
                          <SelectItem value="https">HTTPS</SelectItem>
                          <SelectItem value="http">HTTP</SelectItem>
                          <SelectItem value="ping">Ping</SelectItem>
                          <SelectItem value="tcp">Port (TCP)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="interval" className="text-sm font-medium text-white/70">Check Interval</Label>
                      <Select defaultValue="5m">
                        <SelectTrigger className="bg-white/5 border-white/10">
                          <SelectValue placeholder="Select interval" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0a0a0b] border-white/10">
                          <SelectItem value="30s">30 seconds</SelectItem>
                          <SelectItem value="1m">1 minute</SelectItem>
                          <SelectItem value="5m">5 minutes</SelectItem>
                          <SelectItem value="10m">10 minutes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="ghost" onClick={() => setIsAddOpen(false)} className="text-white/50 hover:text-white">Cancel</Button>
                  <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600 text-white">Create Monitor</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
           <Card className="bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-900/50">
             <CardContent className="p-4 flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-green-700 dark:text-green-400">Operational</p>
                 <p className="text-2xl font-bold text-green-800 dark:text-green-300">4</p>
               </div>
               <CheckCircle2 className="w-8 h-8 text-green-500/50" />
             </CardContent>
           </Card>
           <Card className="bg-amber-50/50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-900/50">
             <CardContent className="p-4 flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-amber-700 dark:text-amber-400">Degraded</p>
                 <p className="text-2xl font-bold text-amber-800 dark:text-amber-300">1</p>
               </div>
               <AlertTriangle className="w-8 h-8 text-amber-500/50" />
             </CardContent>
           </Card>
           <Card className="bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-900/50">
             <CardContent className="p-4 flex items-center justify-between">
               <div>
                 <p className="text-sm font-medium text-red-700 dark:text-red-400">Down</p>
                 <p className="text-2xl font-bold text-red-800 dark:text-red-300">1</p>
               </div>
               <XCircle className="w-8 h-8 text-red-500/50" />
             </CardContent>
           </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Monitors</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Interval</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Uptime (30d)</TableHead>
                  <TableHead className="text-right">Response</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monitors.map((m) => (
                  <TableRow key={m.id} className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => window.location.href = `/uptime/${m.id}`}>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{m.name}</span>
                        <span className="text-xs text-muted-foreground font-mono truncate max-w-[200px]">{m.url}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-mono text-xs">{m.type}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{m.interval}</TableCell>
                    <TableCell>
                       {m.status === "up" && (
                         <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 gap-1">
                           <CheckCircle2 className="w-3 h-3" /> Up
                         </Badge>
                       )}
                       {m.status === "warning" && (
                         <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800 gap-1">
                           <AlertTriangle className="w-3 h-3" /> Slow
                         </Badge>
                       )}
                       {m.status === "down" && (
                         <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800 gap-1">
                           <XCircle className="w-3 h-3" /> Down
                         </Badge>
                       )}
                    </TableCell>
                    <TableCell className="font-mono text-sm">{m.uptime}</TableCell>
                    <TableCell className={`text-right font-mono text-sm ${
                      m.status === "down" ? "text-red-600 font-bold" : 
                      m.status === "warning" ? "text-amber-600" : ""
                    }`}>
                      {m.avgRes}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[#0a0a0b] border-white/10">
                          <DropdownMenuLabel>Monitor Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem className="cursor-pointer gap-2" onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = `/uptime/${m.id}`;
                          }}>
                            <Activity className="w-4 h-4" /> View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer gap-2" onClick={(e) => {
                            e.stopPropagation();
                            toast({ title: "Check Triggered", description: `Manual check started for ${m.name}` });
                          }}>
                            <RefreshCcw className="w-4 h-4" /> Check Now
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem className="cursor-pointer gap-2 text-red-500 focus:text-red-400" onClick={(e) => {
                            e.stopPropagation();
                            toast({ title: "Monitor Deleted", description: `${m.name} removed.`, variant: "destructive" });
                          }}>
                            <Trash2 className="w-4 h-4" /> Delete
                          </DropdownMenuItem>
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
