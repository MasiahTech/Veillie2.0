import SearchBar from '@/components/SearchBar'
import CourseList from '@/components/CourseList'

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Courses</h1>
      <SearchBar />
      <CourseList />
    </div>
  )
}