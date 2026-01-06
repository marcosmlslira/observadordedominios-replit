import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, ShieldCheck, ShieldAlert, Check, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const blacklistData = [
  { id: 1, domain: "mail.acme-corp.com", ip: "192.168.1.10", status: "clean", detected: 0, scanned: 52 },
  { id: 2, domain: "smtp-out.acme.com", ip: "192.168.1.12", status: "clean", detected: 0, scanned: 52 },
  { id: 3, domain: "marketing.acme.com", ip: "203.0.113.45", status: "blacklisted", detected: 3, scanned: 52, lists: ["Spamhaus", "Barracuda", "SORBS"] },
  { id: 4, domain: "legacy-mail.org", ip: "198.51.100.2", status: "clean", detected: 0, scanned: 52 },
];

export default function Blacklist() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Blacklist Monitor</h1>
            <p className="text-muted-foreground mt-1">
              Check if your domains or IPs are listed on Real-time Blackhole Lists (RBLs).
            </p>
          </div>
          <Button className="gap-2">
             <Plus className="w-4 h-4" /> Add Asset
          </Button>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Monitored Assets</CardTitle>
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search assets..." className="pl-9" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Detections</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blacklistData.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.domain}</TableCell>
                    <TableCell className="text-muted-foreground font-mono text-sm">{item.ip}</TableCell>
                    <TableCell>
                      {item.status === "clean" ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800 gap-1">
                          <ShieldCheck className="w-3 h-3" /> Clean
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800 gap-1">
                          <ShieldAlert className="w-3 h-3" /> Blacklisted
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <span className="text-sm">
                          <span className={item.detected > 0 ? "font-bold text-red-600" : "font-medium"}>{item.detected}</span>
                          <span className="text-muted-foreground"> / {item.scanned} lists</span>
                        </span>
                        {item.lists && (
                          <div className="flex gap-1 flex-wrap">
                            {item.lists.map(l => (
                              <span key={l} className="text-[10px] px-1.5 py-0.5 bg-red-100 text-red-700 rounded-sm">
                                {l}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" size="sm">Details</Button>
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
