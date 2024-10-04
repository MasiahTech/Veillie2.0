"use client"

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { fetchItems } from '@/lib/directus'

interface Ticket {
  id: string;
  title: string;
  status: string;
  priority: string;
  assignee: string;
  tags: string[];
}

export default function TicketList() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const loadTickets = async () => {
      const fetchedTickets = await fetchItems('tickets');
      setTickets(fetchedTickets);
    };
    loadTickets();
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.id}</TableCell>
            <TableCell>{ticket.title}</TableCell>
            <TableCell>
              <Badge variant={ticket.status === "Open" ? "default" : ticket.status === "In Progress" ? "secondary" : "outline"}>
                {ticket.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant={ticket.priority === "High" ? "destructive" : ticket.priority === "Medium" ? "default" : "secondary"}>
                {ticket.priority}
              </Badge>
            </TableCell>
            <TableCell>{ticket.assignee}</TableCell>
            <TableCell>
              {ticket.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="mr-1">
                  {tag}
                </Badge>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}