"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { fetchItems } from '@/lib/directus'

interface Guide {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
}

export default function GuideList() {
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    const loadGuides = async () => {
      const fetchedGuides = await fetchItems('guides');
      setGuides(fetchedGuides);
    };
    loadGuides();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {guides.map((guide) => (
        <Card key={guide.id}>
          <CardHeader>
            <CardTitle>{guide.title}</CardTitle>
            <CardDescription>{guide.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge variant={guide.status === "Published" ? "default" : "secondary"}>
              {guide.status}
            </Badge>
          </CardContent>
          <CardFooter>
            {guide.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="mr-1">
                {tag}
              </Badge>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}