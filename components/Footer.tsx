import { Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p>&copy; 2023 Ticketing System. All rights reserved.</p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
          <Github size={24} />
        </a>
      </div>
    </footer>
  )
}