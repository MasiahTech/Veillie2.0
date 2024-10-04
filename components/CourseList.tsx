"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { fetchItems } from '@/lib/directus'

interface Course {
  id: string;
  title: string;
  description: string;
  status: string;
  enrolled: number;
  duration: string;
}

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const loadCourses = async () => {
      const fetchedCourses = await fetchItems('courses');
      setCourses(fetchedCourses);
    };
    loadCourses();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <Badge variant={course.status === "Active" ? "default" : "secondary"}>
              {course.status}
            </Badge>
            <p className="mt-2">Enrolled: {course.enrolled}</p>
            <p>Duration: {course.duration}</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={course.status !== "Active"}>
              {course.status === "Active" ? "Enroll Now" : "Coming Soon"}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}