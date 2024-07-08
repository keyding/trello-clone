import { Medal } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex items-center justify-center gap-4">
        <Medal className="h-14 w-14 text-fuchsia-500" />
        <div className="text-6xl font-bold text-fuchsia-500">Hello Trello</div>
      </div>
    </main>
  )
}
