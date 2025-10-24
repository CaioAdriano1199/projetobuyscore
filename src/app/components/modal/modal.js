"use client";
import { useEffect } from 'react';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  width = 'max-w-lg', // Largura padrão, mas pode ser personalizada
  showCloseButton = true, // Opcional: mostrar ou não o botão de fechar
  className = '' // Classes adicionais para personalização
}) {
  // Fecha o modal quando pressiona ESC
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, onClose]);

  // Previne scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Overlay com efeito de blur */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-99 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Container do Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          className={`relative bg-white rounded-lg shadow-xl ${width} w-full ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cabeçalho do Modal */}
          <div className="flex items-center justify-between p-4">
            <h3 className="text-xl text-[var(--azulescuro)] text-center w-full">
              {title}
            </h3>
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-[var(--azulescuro)] text-xl font-bold hover:text-[var(--azulclaro)] focus:outline-none"
              >
                X
              </button>
            )}
          </div>

          {/* Conteúdo do Modal */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
