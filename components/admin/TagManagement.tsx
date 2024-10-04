"use client"

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const initialTags = [
  { id: 1, name: "Bug", color: "red" },
  { id: 2, name: "Feature", color: "blue" },
  { id: 3, name: "Enhancement", color: "green" },
]

export default function TagManagement() {
  const [tags, setTags] = useState(initialTags)
  const [newTag, setNewTag] = useState({ name: '', color: '' })

  const addTag = () => {
    setTags([...tags, { ...newTag, id: tags.length + 1 }])
    setNewTag({ name: '', color: '' })
  }

  const deleteTag = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id))
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Tag Name"
          value={newTag.name}
          onChange={(e) => setNewTag({ ...newTag, name: e.target.value })}
        />
        <Input
          placeholder="Color (e.g., red, #ff0000)"
          value={newTag.color}
          onChange={(e) => setNewTag({ ...newTag, color: e.target.value })}
        />
        <Button onClick={addTag}>Add Tag</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tags.map((tag) => (
            <TableRow key={tag.id}>
              <TableCell>
                <Badge style={{ backgroundColor: tag.color }}>{tag.name}</Badge>
              </TableCell>
              <TableCell>{tag.color}</TableCell>
              <TableCell>
                <Button variant="destructive" onClick={() => deleteTag(tag.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}