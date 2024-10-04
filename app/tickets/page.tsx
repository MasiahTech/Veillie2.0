import SearchBar from '@/components/SearchBar'
import TicketList from '@/components/TicketList'

export default function TicketsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Tickets</h1>
      <SearchBar />
      <TicketList />
    </div>
  )
}