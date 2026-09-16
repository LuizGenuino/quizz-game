import React from 'react';
import { GLOBAL_CONFIG } from '../config/globalConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// ⚓ Footer geral — aparece em TODAS as rotas
export const Footer: React.FC = () => {
  const f = GLOBAL_CONFIG.footer;

  return (
    <footer className="w-full py-4 flex flex-col items-center gap-1 text-white/60 text-xs sm:text-sm">
      <span>
        {f.text}{' '}
        <a
          href={f.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:text-emerald-300 transition-colors underline underline-offset-2"
        >
          {f.brandName}
        </a>
      </span>
      <a
        href={f.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:text-pink-300 transition-colors"
      >
        <FontAwesomeIcon icon={faInstagram} /> {f.instagramLabel}
      </a>
    </footer>
  );
};
