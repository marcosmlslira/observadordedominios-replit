import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
       <Card className="w-full max-w-md shadow-lg">
         <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
               <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                 <ShieldCheck className="w-6 h-6" />
               </div>
            </div>
           <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
           <CardDescription>Get started with enterprise-grade monitoring</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
           <div className="grid grid-cols-2 gap-4">
             <div className="space-y-2">
               <Label htmlFor="firstName">First name</Label>
               <Input id="firstName" placeholder="Max" />
             </div>
             <div className="space-y-2">
               <Label htmlFor="lastName">Last name</Label>
               <Input id="lastName" placeholder="Robinson" />
             </div>
           </div>
           <div className="space-y-2">
             <Label htmlFor="email">Work Email</Label>
             <Input id="email" type="email" placeholder="max@company.com" />
           </div>
           <div className="space-y-2">
             <Label htmlFor="password">Password</Label>
             <Input id="password" type="password" />
           </div>
           <div className="space-y-2">
             <Label htmlFor="confirmPassword">Confirm Password</Label>
             <Input id="confirmPassword" type="password" />
           </div>
           <Link href="/dashboard" className="w-full">
             <Button className="w-full" data-testid="button-submit-signup">Create Account</Button>
           </Link>
           <p className="text-xs text-muted-foreground text-center px-4">
             By clicking "Create Account", you agree to our Terms of Service and Privacy Policy.
           </p>
         </CardContent>
         <CardFooter className="justify-center">
           <div className="text-sm text-muted-foreground">
             Already have an account?{" "}
             <Link href="/login">
               <a className="text-primary hover:underline font-medium">Log in</a>
             </Link>
           </div>
         </CardFooter>
       </Card>
    </div>
  );
}
