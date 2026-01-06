import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Globe, 
  Activity, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle,
  Clock
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Overview of your infrastructure status.</p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline">Export Report</Button>
             <Button>Add Monitor</Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Domains</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground mt-1">
                +2 added this month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Uptime Status</CardTitle>
              <Activity className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.98%</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 text-green-500" />
                Stable over 30 days
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground mt-1">
                2 Warnings, 1 Critical
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blacklist Checks</CardTitle>
              <ShieldAlert className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Clean</div>
              <p className="text-xs text-muted-foreground mt-1">
                No issues detected
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Activity / Status Table */}
          <div className="lg:col-span-2 flex flex-col gap-4">
             <Card>
               <CardHeader>
                 <CardTitle>Recent Monitors</CardTitle>
               </CardHeader>
               <CardContent>
                 <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Service / Domain</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Response</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">api.production.com</TableCell>
                        <TableCell className="text-muted-foreground">HTTP</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200 gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Operational
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono text-xs">24ms</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">auth-service-prod</TableCell>
                        <TableCell className="text-muted-foreground">TCP</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200 gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Operational
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono text-xs">12ms</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">legacy-portal.net</TableCell>
                        <TableCell className="text-muted-foreground">Ping</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200 gap-1">
                            <AlertTriangle className="w-3 h-3" /> High Latency
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono text-xs text-amber-600">450ms</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">mail-server-01</TableCell>
                        <TableCell className="text-muted-foreground">Blacklist</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200 gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Clean
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono text-xs">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">marketing-site.com</TableCell>
                        <TableCell className="text-muted-foreground">SSL</TableCell>
                        <TableCell>
                           <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200 gap-1">
                            <ShieldAlert className="w-3 h-3" /> Expiring Soon
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right font-mono text-xs">2 days</TableCell>
                      </TableRow>
                    </TableBody>
                 </Table>
               </CardContent>
             </Card>
          </div>

          {/* Recent Alerts Sidebar */}
          <div className="flex flex-col gap-4">
             <Card className="h-full">
               <CardHeader>
                 <CardTitle>Recent Alerts</CardTitle>
               </CardHeader>
               <CardContent className="space-y-6">
                 <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">SSL Certificate Expiring</p>
                      <p className="text-xs text-muted-foreground">marketing-site.com expires in 48 hours.</p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 2 hours ago
                      </p>
                    </div>
                 </div>

                 <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">High Latency Detected</p>
                      <p className="text-xs text-muted-foreground">legacy-portal.net response time {'>'} 400ms.</p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 5 hours ago
                      </p>
                    </div>
                 </div>

                 <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New Domain Added</p>
                      <p className="text-xs text-muted-foreground">admin added 'new-project.io'</p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 1 day ago
                      </p>
                    </div>
                 </div>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
