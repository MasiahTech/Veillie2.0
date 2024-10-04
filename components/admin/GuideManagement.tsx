"use client"

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const initialGuides = [
  { id: 1, title: "Getting Started", status: "Published" },
  { id: 2, title: "Advanced Features", status: "Draft" },
  { id: 3, title: "Troubleshooting", status: "Published" },
]

export default function GuideManagement() {
  const [guides, setGuides] = useState(initialGuides)
  const [newGuide, setNewGuide] = useState({ title: '', status: 'Draft' })

  const addGuide = () => {
    setGuides([...guides, { ...newGuide, id: guides.length + 1 }])
    setNewGuide({ title: '', status: 'Draft' })
  }

  const deleteGuide = (id: number) => {
    setGuides(guides.filter(guide => guide.id !== id))
  }

  const toggleStatus = (id: number) => {
    setGuides(guides.map(guide => 
      guide.id === id 
        ? { ...guide, status: guide.status === 'Published' ? 'Draft' : 'Published' }
        : guide
    ))
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Guide Title"
          value={newGuide.title}
          onChange={(e) => setNewGuide({ ...newGuide, title: e.target.value })}
        />
        <Button onClick={addGuide}>Add Guide</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {guides.map((guide) => (
            <TableRow key={guide.id}>
              <TableCell>{guide.title}</TableCell>
              <TableCell>
                <Badge variant={guide.status === 'Published' ? 'default' : 'secondary'}>
                  {guide.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2" onClick={() => toggleStatus(guide.id)}>
                  {guide.status === 'Published' ? 'Unpublish' : 'Publish'}
                </Button>
                <Button variant="destructive" onClick={() => deleteGuide(guide.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}