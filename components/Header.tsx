import Link from 'next/link'
import { UserNav } from './UserNav'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="mr-4 lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through the application
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="/" className="font-medium">Home</Link>
                <Link href="/dashboard" className="font-medium">Dashboard</Link>
                <Link href="/tickets" className="font-medium">Tickets</Link>
                <Link href="/guides" className="font-medium">Guides</Link>
                <Link href="/courses" className="font-medium">Courses</Link>
                <Link href="/admin" className="font-medium">Admin</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="text-2xl font-bold">TicketPro</Link>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <Link href="/" className="font-medium">Home</Link>
          <Link href="/dashboard" className="font-medium">Dashboard</Link>
          <Link href="/tickets" className="font-medium">Tickets</Link>
          <Link href="/guides" className="font-medium">Guides</Link>
          <Link href="/courses" className="font-medium">Courses</Link>
          <Link href="/admin" className="font-medium">Admin</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}