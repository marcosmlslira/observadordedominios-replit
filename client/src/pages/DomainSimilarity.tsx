import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShieldAlert, 
  Search, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  Filter,
  Eye,
  ArrowRight,
  Shield,
  FileText,
  Gavel,
  Mail,
  Info
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const phishingDomains = [
  { 
    id: 1, 
    domain: "acme-corp-login.com", 
    similarity: "95%", 
    riskLevel: "Critical", 
    detected: "2 hours ago", 
    status: "Active",
    contentMatch: "High (Login Page Clone)",
    actions: ["Report", "Block"]
  },
  { 
    id: 2, 
    domain: "acmme-corp.com", 
    similarity: "88%", 
    riskLevel: "High", 
    detected: "5 hours ago", 
    status: "Parked",
    contentMatch: "Low (Parked Domain)",
    actions: ["Monitor"]
  },
  { 
    id: 3, 
    domain: "acme-support.net", 
    similarity: "82%", 
    riskLevel: "Medium", 
    detected: "1 day ago", 
    status: "Active",
    contentMatch: "Medium (Help Center Mimic)",
    actions: ["Report"]
  },
  { 
    id: 4, 
    domain: "acmecorp-rewards.top", 
    similarity: "75%", 
    riskLevel: "High", 
    detected: "2 days ago", 
    status: "Active",
    contentMatch: "High (Fraudulent Giveaway)",
    actions: ["Report", "Takedown"]
  },
];

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const verifiedSafeDomains = [
  { 
    id: 101, 
    domain: "acme-solutions.co", 
    similarity: "72%", 
    riskLevel: "Low", 
    verifiedAt: "1 week ago", 
    reason: "Legitimate Partner"
  },
  { 
    id: 102, 
    domain: "acme-marketing-agency.com", 
    similarity: "65%", 
    riskLevel: "Low", 
    verifiedAt: "3 days ago", 
    reason: "Sub-processor"
  },
];

export default function DomainSimilarity() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Domain Similarity Monitor</h1>
            <p className="text-muted-foreground mt-1">
              Detect and track malicious domains impersonating your brand.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
            <Button className="gap-2">
              <Search className="w-4 h-4" /> Scan Now
            </Button>
          </div>
        </div>

        {/* Risk Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Critical Threats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> Immediate action required
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">High Similarity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-amber-600 mt-1 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Monitoring active
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Takedowns Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Successfully mitigated
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="suspicious" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="suspicious">Suspicious Domains</TabsTrigger>
            <TabsTrigger value="verified">Verified Safe</TabsTrigger>
          </TabsList>
          
          <TabsContent value="suspicious">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Detected Look-alike Domains</CardTitle>
                    <CardDescription>Domains found using fuzzy matching and homograph detection.</CardDescription>
                  </div>
                  <div className="relative w-full max-w-xs">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search suspicious domains..." className="pl-9" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Suspicious Domain</TableHead>
                      <TableHead>Similarity</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Content Match</TableHead>
                      <TableHead>Detected</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {phishingDomains.map((item) => (
                      <TableRow key={item.id} className="group">
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-medium">{item.domain}</span>
                            <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer" />
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${
                                  parseInt(item.similarity) > 90 ? "bg-red-500" : 
                                  parseInt(item.similarity) > 80 ? "bg-amber-500" : "bg-blue-500"
                                }`}
                                style={{ width: item.similarity }}
                              />
                            </div>
                            <span className="text-xs font-medium">{item.similarity}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={
                              item.riskLevel === "Critical" ? "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400" :
                              item.riskLevel === "High" ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400" :
                              "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-400"
                            }
                          >
                            {item.riskLevel}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">{item.contentMatch}</span>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {item.detected}
                        </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" className={item.riskLevel === "Critical" ? "text-red-600 hover:text-red-700" : ""}>
                              Report
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle className="flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-red-600" />
                                Reporting Procedure
                              </DialogTitle>
                              <DialogDescription>
                                Step-by-step guide to take down <strong>{item.domain}</strong>.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4 text-sm leading-relaxed">
                              <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/50">
                                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                                <div>
                                  <p className="font-semibold flex items-center gap-1.5"><Mail className="w-4 h-4" /> Contact Registrar / Host</p>
                                  <p className="text-muted-foreground">Send an abuse report to the hosting provider and domain registrar with evidence of impersonation.</p>
                                </div>
                              </div>
                              <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/50">
                                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                                <div>
                                  <p className="font-semibold flex items-center gap-1.5"><Shield className="w-4 h-4" /> Report to Google Safe Browsing</p>
                                  <p className="text-muted-foreground">Submit the URL to help block the site across Chrome and other major browsers.</p>
                                </div>
                              </div>
                              <div className="flex gap-3 items-start p-3 rounded-lg bg-muted/50">
                                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                                <div>
                                  <p className="font-semibold flex items-center gap-1.5"><Gavel className="w-4 h-4" /> Legal Action</p>
                                  <p className="text-muted-foreground">If phishing persists, initiate a UDRP (Uniform Domain-Name Dispute-Resolution Policy) complaint.</p>
                                </div>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline" className="w-full" onClick={() => window.open(`https://safebrowsing.google.com/safebrowsing/report_phish/?url=${item.domain}`, '_blank')}>
                                Go to Google Reporting <ExternalLink className="ml-2 w-3 h-3" />
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="verified">
            <Card>
              <CardHeader>
                <CardTitle>Verified Safe Domains</CardTitle>
                <CardDescription>Domains that look similar but have been manually verified as legitimate.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Domain</TableHead>
                      <TableHead>Similarity</TableHead>
                      <TableHead>Verified At</TableHead>
                      <TableHead>Classification</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verifiedSafeDomains.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-mono text-sm">{item.domain}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.similarity}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.verifiedAt}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{item.reason}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">Move to Suspicious</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Alert Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Alert Thresholds</CardTitle>
            <CardDescription>Configure how you receive notifications based on similarity scores.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
              <div className="space-y-1">
                <p className="text-sm font-medium">Critical Threshold (&gt;90%)</p>
                <p className="text-xs text-muted-foreground">Instant SMS and Email alert to all admins.</p>
              </div>
              <Badge>Active</Badge>
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
              <div className="space-y-1">
                <p className="text-sm font-medium">High Threshold (75% - 90%)</p>
                <p className="text-xs text-muted-foreground">Slack notification to #security channel.</p>
              </div>
              <Badge variant="secondary">Active</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
