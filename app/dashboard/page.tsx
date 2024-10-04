import Dashboard from '@/components/Dashboard'
import SearchBar from '@/components/SearchBar'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <SearchBar />
      <Dashboard />
    </div>
  )
}