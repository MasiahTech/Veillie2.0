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
import { NewNavbar } from './navbar'

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex-1 flex justify-center">
            <NewNavbar />
          </div>
          <div className="flex items-center">
          </div>
        </div>
        <div className="flex items-center space-x-4">
        </div>
      </div>
    </header>
  )
}