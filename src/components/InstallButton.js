"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    const installedHandler = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", installedHandler);

    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      window.removeEventListener("appinstalled", installedHandler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setInstalled(true);
    }
    setDeferredPrompt(null);
  };

  if (installed) return null;

  return (
    <button
      onClick={handleInstall}
      className="flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 w-full justify-center"
    >
      <Download size={16} />
      Install Aplikasi
    </button>
  );
}
