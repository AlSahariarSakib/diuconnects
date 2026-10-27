import { useEffect } from "react";

// React owns the page shell. The app engine (feed, chats, Gossip, LoveZone ...)
// is loaded once from /legacy/app.js and draws into the #app container below.
export default function App() {
  useEffect(() => {
    if (window.__diuHubLoaded) return;
    window.__diuHubLoaded = true;
    const s = document.createElement("script");
    s.src = import.meta.env.BASE_URL + "legacy/app.js";
    // the engine starts itself from window.onload, which has already fired by now
    s.onload = () => typeof window.onload === "function" && window.onload();
    document.body.appendChild(s);
  }, []);

  return <div id="app" className="h-full flex flex-col w-full" />;
}
