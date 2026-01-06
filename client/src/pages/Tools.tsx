import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Search, ArrowRight, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Tools() {
  return (
    <AppShell>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Diagnostic Tools</h1>
          <p className="text-muted-foreground mt-1">
            Free tools to investigate network and domain issues.
          </p>
        </div>

        <Tabs defaultValue="dns" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="dns">DNS Lookup</TabsTrigger>
            <TabsTrigger value="ip">IP Lookup</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dns" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>DNS Records</CardTitle>
                <CardDescription>Retrieve A, AAAA, MX, NS, and TXT records for any domain.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <Input placeholder="Enter domain (e.g. google.com)" className="h-12 text-lg" />
                  <Button size="lg" className="h-12 px-8">Lookup</Button>
                </div>
                
                {/* Result Mockup */}
                <div className="border rounded-md divide-y">
                   <div className="p-4 bg-muted/30 font-medium text-sm flex justify-between">
                     <span>Result for: <span className="text-foreground">google.com</span></span>
                     <span className="text-muted-foreground">ID: 948102</span>
                   </div>
                   <div className="p-4 space-y-4">
                     <div>
                       <div className="flex items-center gap-2 mb-2">
                         <Badge variant="outline" className="font-mono">A</Badge>
                         <span className="text-sm text-muted-foreground">TTL 300</span>
                       </div>
                       <div className="bg-muted p-3 rounded font-mono text-sm flex justify-between items-center">
                         142.250.190.46
                         <Button variant="ghost" size="icon" className="h-6 w-6"><Copy className="h-3 w-3" /></Button>
                       </div>
                     </div>
                     
                     <div>
                       <div className="flex items-center gap-2 mb-2">
                         <Badge variant="outline" className="font-mono">AAAA</Badge>
                         <span className="text-sm text-muted-foreground">TTL 300</span>
                       </div>
                       <div className="bg-muted p-3 rounded font-mono text-sm flex justify-between items-center">
                         2607:f8b0:4009:804::200e
                         <Button variant="ghost" size="icon" className="h-6 w-6"><Copy className="h-3 w-3" /></Button>
                       </div>
                     </div>

                     <div>
                       <div className="flex items-center gap-2 mb-2">
                         <Badge variant="outline" className="font-mono">MX</Badge>
                         <span className="text-sm text-muted-foreground">TTL 3600</span>
                       </div>
                       <div className="space-y-2">
                         <div className="bg-muted p-3 rounded font-mono text-sm flex justify-between items-center">
                           10 smtp.google.com
                         </div>
                       </div>
                     </div>
                   </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ip" className="space-y-6">
            <Card>
              <CardHeader>
                 <CardTitle>IP Geolocation</CardTitle>
                 <CardDescription>Find location and ISP information for an IP address.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <Input placeholder="Enter IP address (e.g. 8.8.8.8)" className="h-12 text-lg" />
                  <Button size="lg" className="h-12 px-8">Search</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6 space-y-4">
                     <h3 className="font-semibold text-lg flex items-center gap-2">
                       <Globe className="w-4 h-4 text-muted-foreground" /> 
                       Location Data
                     </h3>
                     <div className="space-y-2 text-sm">
                       <div className="flex justify-between py-2 border-b">
                         <span className="text-muted-foreground">Country</span>
                         <span className="font-medium">United States 🇺🇸</span>
                       </div>
                       <div className="flex justify-between py-2 border-b">
                         <span className="text-muted-foreground">Region</span>
                         <span className="font-medium">California</span>
                       </div>
                       <div className="flex justify-between py-2 border-b">
                         <span className="text-muted-foreground">City</span>
                         <span className="font-medium">Mountain View</span>
                       </div>
                       <div className="flex justify-between py-2 pt-2">
                         <span className="text-muted-foreground">Timezone</span>
                         <span className="font-medium">America/Los_Angeles</span>
                       </div>
                     </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 space-y-4">
                     <h3 className="font-semibold text-lg flex items-center gap-2">
                       <Search className="w-4 h-4 text-muted-foreground" /> 
                       Network Info
                     </h3>
                     <div className="space-y-2 text-sm">
                       <div className="flex justify-between py-2 border-b">
                         <span className="text-muted-foreground">ISP</span>
                         <span className="font-medium">Google LLC</span>
                       </div>
                       <div className="flex justify-between py-2 border-b">
                         <span className="text-muted-foreground">ASN</span>
                         <span className="font-medium font-mono">AS15169</span>
                       </div>
                       <div className="flex justify-between py-2 pt-2">
                         <span className="text-muted-foreground">Organization</span>
                         <span className="font-medium">Google</span>
                       </div>
                     </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppShell>
  );
}
