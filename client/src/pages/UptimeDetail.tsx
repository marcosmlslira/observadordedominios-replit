import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ExternalLink, 
  Play, 
  Pause, 
  Settings, 
  MoreVertical, 
  Clock, 
  Shield, 
  BarChart3,
  ChevronRight,
  RefreshCcw
} from "lucide-react";
import { Link, useParams } from "wouter";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const responseTimeData = [
  { time: "21:40", value: 210 },
  { time: "21:50", value: 195 },
  { time: "22:00", value: 205 },
  { time: "22:10", value: 200 },
  { time: "22:20", value: 215 },
  { time: "22:30", value: 190 },
  { time: "22:40", value: 200 },
  { time: "22:50", value: 210 },
  { time: "23:00", value: 205 },
];

export default function UptimeDetail() {
  const { id } = useParams();
  
  return (
    <AppShell>
      <div className="flex flex-col gap-6 pb-10">
        {/* Header Navigation */}
        <div className="flex items-center justify-between">
          <Link href="/uptime">
            <Button variant="ghost" size="sm" className="gap-2 -ml-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" /> Monitoring
            </Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCcw className="w-4 h-4" /> Test Notification
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Pause className="w-4 h-4" /> Pause
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Settings className="w-4 h-4" /> Edit
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Main Title Section */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
            <div className="w-6 h-6 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight truncate">sindicoai.com.br</h1>
              <ExternalLink className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground" />
            </div>
            <p className="text-muted-foreground">
              HTTP/S monitor for <span className="text-emerald-500 hover:underline cursor-pointer">https://sindicoai.com.br</span>
            </p>
          </div>
        </div>

        {/* Status Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card/50 border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs uppercase tracking-wider font-semibold">Current status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-500">Up</div>
              <p className="text-xs text-muted-foreground mt-1">Currently up for 1mo 18d 0h</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-white/5">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs uppercase tracking-wider font-semibold">Last check</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4m, 34s ago</div>
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-2">
                Checked every 5m <span className="text-emerald-500 cursor-pointer hover:underline">Get 60 sec. checks</span>
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-white/5">
            <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
              <CardDescription className="text-xs uppercase tracking-wider font-semibold">Last 24 hours</CardDescription>
              <span className="text-xs font-bold text-emerald-500">100%</span>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1 h-8 mt-1">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="flex-1 bg-emerald-500 rounded-sm opacity-90 hover:opacity-100 transition-all hover:scale-y-110 cursor-pointer" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">0 incidents, 0m down</p>
            </CardContent>
          </Card>
        </div>

        {/* Uptime Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Last 7 days", value: "100%", sub: "0 incidents, 0m down" },
            { label: "Last 30 days", value: "100%", sub: "0 incidents, 0m down" },
            { label: "Last 365 days", value: "--.--%", sub: "Unlock with paid plans", link: true },
            { label: "Pick a date range", value: "--.--%", sub: "- incidents, - down", icon: Clock },
          ].map((stat, i) => (
            <Card key={i} className="bg-card/50 border-white/5">
              <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
                <CardDescription className="text-xs uppercase tracking-wider font-semibold">{stat.label}</CardDescription>
                {stat.icon && <stat.icon className="w-3 h-3 text-muted-foreground" />}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={`text-xs mt-1 ${stat.link ? 'text-emerald-500 cursor-pointer hover:underline' : 'text-muted-foreground'}`}>
                  {stat.sub}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Response Time Chart */}
        <Card className="bg-card/50 border-white/5">
          <CardHeader className="flex flex-row items-center justify-between pb-8">
            <div>
              <CardTitle className="text-lg">Response time.</CardTitle>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground flex items-center gap-1 cursor-pointer hover:text-emerald-500">
                <Shield className="w-3 h-3" /> Setup alerts for slow response times
              </span>
              <Button variant="ghost" size="sm" className="text-xs h-7 gap-1">
                Last hour <ChevronRight className="w-3 h-3 rotate-90" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={responseTimeData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y2="1" x2="0" y1="0">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#ffffff05" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#888'}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fontSize: 10, fill: '#888'}}
                    tickFormatter={(value) => `${value}ms`}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
