import React, { useState } from "react";
import { Share2 } from "lucide-react"; // ícone de compartilhamento

export default function CopyLink({ t }) {
  const url = window.location.href;
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ url });
        return;
      } catch {
        // Se o usuário cancelar, não faz nada
      }
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // some após 2 segundos
  };
  return (
    <div className="flex items-center gap-2 mx-0 my-0 relative">
      <button
        onClick={copyLink}
        className="flex whitespace-nowrap items-center gap-1 px-3 py-2 rounded-full bg-blue-100 text-sm hover:bg-blue-200 transition"
      >
        <Share2 size={16} />
        {t.copiarLink}
      </button>

      {/* Alerta temporário com fade */}
      {copied && (
        <span className="absolute whitespace-nowrap top-0 left-40 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow opacity-90 animate-fadeOut">
          {t.linkCopiado}
        </span>
      )}
    </div>
  );
}
