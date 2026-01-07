import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Activity, CheckCircle2, AlertTriangle, XCircle, MoreVertical } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const monitors = [
  { id: 1, name: "API Production", url: "https://api.acme.com", type: "HTTPS", interval: "1m", status: "up", uptime: "99.99%", avgRes: "120ms" },
  { id: 2, name: "Marketing Site", url: "https://acme.com", type: "HTTPS", interval: "5m", status: "up", uptime: "100%", avgRes: "45ms" },
  { id: 3, name: "Legacy Portal", url: "http://portal.legacy.net", type: "HTTP", interval: "5m", status: "warning", uptime: "98.5%", avgRes: "850ms" },
  { id: 4, name: "Database Primary", url: "tcp://db-01:5432", type: "TCP", interval: "30s", status: "up", uptime: "99.99%", avgRes: "5ms" },
  { id: 5, name: "Worker Node 3", url: "192.168.1.50", type: "PING", interval: "1m", status: "down", uptime: "92.1%", avgRes: "TIMEOUT" },
];

export default function Uptime() {
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
          <Button className="gap-2">
             <Plus className="w-4 h-4" /> Add Monitor
          </Button>
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
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
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
