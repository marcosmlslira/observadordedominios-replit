import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
  Filter, 
  Clock,
  Archive
} from "lucide-react";

const alerts = [
  { id: 1, type: "SSL", title: "SSL Certificate Expiring Soon", message: "The SSL certificate for marketing-site.com expires in 48 hours.", severity: "critical", time: "2 hours ago", status: "active" },
  { id: 2, type: "Uptime", title: "High Latency Detected", message: "Response time for legacy-portal.net exceeded 400ms threshold (450ms).", severity: "warning", time: "5 hours ago", status: "active" },
  { id: 3, type: "Domain", title: "New Domain Added", message: "User 'admin' added 'new-project.io' to monitoring.", severity: "info", time: "1 day ago", status: "read" },
  { id: 4, type: "Blacklist", title: "IP Blacklisted", message: "IP 203.0.113.45 was listed on Spamhaus PBL.", severity: "critical", time: "2 days ago", status: "resolved" },
  { id: 5, type: "Uptime", title: "Service Down: Worker Node 3", message: "Ping check failed 3 consecutive times.", severity: "critical", time: "3 days ago", status: "resolved" },
];

export default function Alerts() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Alerts Center</h1>
            <p className="text-muted-foreground mt-1">
              History of all incidents and notifications.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon"><Filter className="w-4 h-4" /></Button>
            <Button variant="outline" size="icon"><Archive className="w-4 h-4" /></Button>
            <Button>Mark All Read</Button>
          </div>
        </div>

        <div className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`flex flex-col md:flex-row gap-4 p-4 rounded-lg border bg-card transition-all hover:shadow-sm ${
                alert.status === "active" ? "border-l-4 border-l-primary" : ""
              }`}
            >
              <div className="flex-shrink-0 pt-1">
                 {alert.severity === "critical" && <div className="p-2 rounded-full bg-red-100 text-red-600"><ShieldAlert className="w-5 h-5" /></div>}
                 {alert.severity === "warning" && <div className="p-2 rounded-full bg-amber-100 text-amber-600"><AlertTriangle className="w-5 h-5" /></div>}
                 {alert.severity === "info" && <div className="p-2 rounded-full bg-blue-100 text-blue-600"><Bell className="w-5 h-5" /></div>}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                   <h3 className="font-semibold text-lg">{alert.title}</h3>
                   <span className="text-xs text-muted-foreground flex items-center gap-1">
                     <Clock className="w-3 h-3" /> {alert.time}
                   </span>
                </div>
                <p className="text-muted-foreground text-sm">{alert.message}</p>
                <div className="flex items-center gap-2 mt-3">
                   <Badge variant="secondary" className="text-xs">{alert.type}</Badge>
                   {alert.status === "resolved" && <Badge variant="outline" className="text-green-600 bg-green-50 border-green-200">Resolved</Badge>}
                </div>
              </div>

              <div className="flex items-center gap-2 md:self-center">
                 {alert.status !== "resolved" && (
                    <Button variant="outline" size="sm">Acknowledge</Button>
                 )}
                 <Button variant="ghost" size="sm">Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
