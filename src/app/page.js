import React from "react";
import App from "@/components/App";

export default function Home() {
  return (
    <main
      className="w-full min-h-screen bg-right bg-cover"
      style={{ backgroundImage: "url('./images/background.jpg')" }}
    >
      <App />
    </main>
  );
}
