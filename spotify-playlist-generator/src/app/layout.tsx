import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Playlist Generator',
  description: 'Create amazing playlists with AI-powered recommendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#121212] text-white min-h-screen`}>
        <div className="bg-gradient-to-b from-[#1DB954] to-[#121212] fixed inset-0 -z-10" />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
} 