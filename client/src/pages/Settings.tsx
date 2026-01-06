import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function Settings() {
  return (
    <AppShell>
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configuration</h1>
          <p className="text-muted-foreground mt-1">
            Manage your organization settings and preferences.
          </p>
        </div>

        <div className="grid gap-6">
           <Card>
             <CardHeader>
               <CardTitle>Organization Profile</CardTitle>
               <CardDescription>General information about your workspace.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
               <div className="grid gap-2">
                 <Label>Organization Name</Label>
                 <Input defaultValue="Acme Corp" />
               </div>
               <div className="grid gap-2">
                 <Label>Support Email</Label>
                 <Input defaultValue="support@acme.com" />
               </div>
               <Button className="w-fit">Save Changes</Button>
             </CardContent>
           </Card>

           <Card>
             <CardHeader>
               <CardTitle>Notification Preferences</CardTitle>
               <CardDescription>Choose how you want to be alerted.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6">
               <div className="flex items-center justify-between">
                 <div className="space-y-0.5">
                   <Label className="text-base">Email Alerts</Label>
                   <p className="text-sm text-muted-foreground">Receive downtime alerts via email.</p>
                 </div>
                 <Switch defaultChecked />
               </div>
               <Separator />
               <div className="flex items-center justify-between">
                 <div className="space-y-0.5">
                   <Label className="text-base">SMS Notifications</Label>
                   <p className="text-sm text-muted-foreground">Critical alerts sent to your phone.</p>
                 </div>
                 <Switch />
               </div>
               <Separator />
               <div className="flex items-center justify-between">
                 <div className="space-y-0.5">
                   <Label className="text-base">Weekly Reports</Label>
                   <p className="text-sm text-muted-foreground">Summary of uptime and incidents.</p>
                 </div>
                 <Switch defaultChecked />
               </div>
             </CardContent>
           </Card>
           
           <Card className="border-red-200 dark:border-red-900/50">
             <CardHeader>
               <CardTitle className="text-red-600">Danger Zone</CardTitle>
               <CardDescription>Irreversible actions.</CardDescription>
             </CardHeader>
             <CardContent>
                <Button variant="destructive">Delete Organization</Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </AppShell>
  );
}
