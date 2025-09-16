import React from "react";
import App from "@/components/App";

export default function Home() {
  return (
    <main
      className="fixed w-full min-h-screen bg-cover bg-right"
      style={{ backgroundImage: "url('./images/background.jpg')" }}
    >
      <App />
    </main>
  );
}
