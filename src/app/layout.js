import "./globals.css";

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
      <body className=" qantialiased">
        {children}
      </body>
    </html>
  );
}
