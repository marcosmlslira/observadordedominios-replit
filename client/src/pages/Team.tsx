import React from "react";
import { AppShell } from "@/components/layout/Shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Plus, MoreHorizontal, Mail, Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const users = [
  { id: 1, name: "Jane Doe", email: "jane@acme.com", role: "Owner", lastActive: "Just now", avatar: "JD" },
  { id: 2, name: "John Smith", email: "john@acme.com", role: "Admin", lastActive: "2 hours ago", avatar: "JS" },
  { id: 3, name: "Sarah Wilson", email: "sarah@acme.com", role: "Editor", lastActive: "1 day ago", avatar: "SW" },
  { id: 4, name: "Mike Brown", email: "mike@acme.com", role: "Viewer", lastActive: "3 days ago", avatar: "MB" },
];

export default function Team() {
  return (
    <AppShell>
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Team Management</h1>
            <p className="text-muted-foreground mt-1">
              Manage access and permissions for your workspace.
            </p>
          </div>
          <Button className="gap-2">
             <Plus className="w-4 h-4" /> Invite Member
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Members</CardTitle>
            <CardDescription>People with access to the Acme Corp workspace.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback>{user.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                           <span className="font-medium">{user.name}</span>
                           <span className="text-xs text-muted-foreground">{user.email}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="font-normal">{user.role}</Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{user.lastActive}</TableCell>
                    <TableCell className="text-right">
                       <DropdownMenu>
                         <DropdownMenuTrigger asChild>
                           <Button variant="ghost" size="icon">
                             <MoreHorizontal className="h-4 w-4" />
                           </Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent align="end">
                           <DropdownMenuItem>Edit Role</DropdownMenuItem>
                           <DropdownMenuItem className="text-destructive">Remove Access</DropdownMenuItem>
                         </DropdownMenuContent>
                       </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
           <CardHeader>
             <CardTitle>Pending Invites</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-sm text-muted-foreground italic">No pending invitations.</div>
           </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
