"use client"

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const initialCourses = [
  { id: 1, title: "Introduction to Web Development", status: "Active" },
  { id: 2, title: "Advanced JavaScript", status: "Draft" },
  { id: 3, title: "React Fundamentals", status: "Active" },
]

export default function CourseManagement() {
  const [courses, setCourses] = useState(initialCourses)
  const [newCourse, setNewCourse] = useState({ title: '', status: 'Draft' })

  const addCourse = () => {
    setCourses([...courses, { ...newCourse, id: courses.length + 1 }])
    setNewCourse({ title: '', status: 'Draft' })
  }

  const deleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id))
  }

  const toggleStatus = (id: number) => {
    setCourses(courses.map(course => 
      course.id === id 
        ? { ...course, status: course.status === 'Active' ? 'Draft' : 'Active' }
        : course
    ))
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          placeholder="Course Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <Button onClick={addCourse}>Add Course</Button>
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
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.title}</TableCell>
              <TableCell>
                <Badge variant={course.status === 'Active' ? 'default' : 'secondary'}>
                  {course.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" className="mr-2" onClick={() => toggleStatus(course.id)}>
                  {course.status === 'Active' ? 'Deactivate' : 'Activate'}
                </Button>
                <Button variant="destructive" onClick={() => deleteCourse(course.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}