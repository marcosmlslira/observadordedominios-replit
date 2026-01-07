import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
       <Card className="w-full max-w-md shadow-lg">
         <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
               <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                 <ShieldCheck className="w-6 h-6" />
               </div>
            </div>
           <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
           <CardDescription>Enter your email to sign in to your account</CardDescription>
         </CardHeader>
         <CardContent className="space-y-4">
           <div className="space-y-2">
             <Label htmlFor="email">Email</Label>
             <Input id="email" type="email" placeholder="m@example.com" />
           </div>
           <div className="space-y-2">
             <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password">
                  <a className="text-sm text-primary hover:underline">Forgot password?</a>
                </Link>
             </div>
             <Input id="password" type="password" />
           </div>
           <Link href="/dashboard" className="w-full">
             <Button className="w-full" data-testid="button-submit-login">Sign In</Button>
           </Link>
           
           <div className="relative">
             <div className="absolute inset-0 flex items-center">
               <span className="w-full border-t" />
             </div>
             <div className="relative flex justify-center text-xs uppercase">
               <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
             </div>
           </div>
           
           <Button variant="outline" className="w-full">SSO (Enterprise)</Button>
         </CardContent>
         <CardFooter className="justify-center">
           <div className="text-sm text-muted-foreground">
             Don't have an account?{" "}
             <Link href="/signup">
               <a className="text-primary hover:underline font-medium">Sign up</a>
             </Link>
           </div>
         </CardFooter>
       </Card>
    </div>
  );
}
