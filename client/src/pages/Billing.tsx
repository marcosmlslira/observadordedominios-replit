import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Zap, Shield, Crown, History } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Ideal for small personal projects and basic monitoring.",
    features: [
      "Up to 5 domains",
      "Standard DNS monitoring",
      "Daily security scans",
      "Community support",
      "Basic similarity detection"
    ],
    buttonText: "Current Plan",
    current: true
  },
  {
    name: "Professional",
    price: "$49",
    description: "Perfect for growing businesses needing real-time alerts.",
    features: [
      "Up to 50 domains",
      "Real-time DNS monitoring",
      "Hourly security scans",
      "Priority Email support",
      "Advanced similarity detection",
      "Slack & Webhook alerts"
    ],
    buttonText: "Upgrade to Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "Full protection for large corporate infrastructures.",
    features: [
      "Unlimited domains",
      "Sub-second monitoring",
      "Continuous security scans",
      "24/7 Dedicated support",
      "Custom threat intelligence",
      "API access",
      "Legal takedown assistance"
    ],
    buttonText: "Contact Sales"
  }
];

const invoices = [
  { id: "INV-001", date: "Dec 1, 2025", amount: "$0.00", status: "Paid" },
  { id: "INV-002", date: "Jan 1, 2026", amount: "$0.00", status: "Paid" }
];

export default function Billing() {
  return (
    <AppShell>
      <div className="flex flex-col gap-8 pb-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Billing & Plans</h1>
          <p className="text-muted-foreground mt-1">
            Manage your subscription, view invoices, and upgrade your protection.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? 'border-primary shadow-lg ring-1 ring-primary/20' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {plan.name}
                  {plan.name === "Starter" && <Zap className="w-4 h-4 text-muted-foreground" />}
                  {plan.name === "Professional" && <Shield className="w-4 h-4 text-primary" />}
                  {plan.name === "Enterprise" && <Crown className="w-4 h-4 text-amber-500" />}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.current ? "outline" : plan.popular ? "default" : "outline"}
                  disabled={plan.current}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <CreditCard className="w-5 h-5" /> Payment Method
            </CardTitle>
            <CardDescription>Update your credit card details.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-zinc-900 rounded flex items-center justify-center text-[10px] text-white font-bold italic">
                  VISA
                </div>
                <div>
                  <p className="text-sm font-medium">Visa ending in 4242</p>
                  <p className="text-xs text-muted-foreground">Expires 12/26</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <History className="w-5 h-5" /> Billing History
            </CardTitle>
            <CardDescription>Your recent invoices and payments.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium text-sm">{invoice.id}</TableCell>
                    <TableCell className="text-sm">{invoice.date}</TableCell>
                    <TableCell className="text-sm">{invoice.amount}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400">
                        {invoice.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">Download</Button>
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
