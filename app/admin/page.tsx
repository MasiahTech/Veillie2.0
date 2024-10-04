"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserManagement from '@/components/admin/UserManagement'
import TagManagement from '@/components/admin/TagManagement'
import GuideManagement from '@/components/admin/GuideManagement'
import CourseManagement from '@/components/admin/CourseManagement'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('users')

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="tags">Tags</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        <TabsContent value="tags">
          <TagManagement />
        </TabsContent>
        <TabsContent value="guides">
          <GuideManagement />
        </TabsContent>
        <TabsContent value="courses">
          <CourseManagement />
        </TabsContent>
      </Tabs>
    </div>
  )
}