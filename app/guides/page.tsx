import SearchBar from '@/components/SearchBar'
import GuideList from '@/components/GuideList'

export default function GuidesPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Guides</h1>
      <SearchBar />
      <GuideList />
    </div>
  )
}