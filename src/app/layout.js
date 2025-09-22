import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Mixtape",
  description: "A web app that connects to the Spotify API, allowing users to search for songs, build custom playlists, and save them directly to their Spotify account.",
  icons: {
    icon: "/icons/favicon_io/favicon.ico",
    apple: "/icons/favicon_io/apple-touch-icon.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
