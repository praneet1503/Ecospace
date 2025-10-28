'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

const Toast: React.FC<ToastMessage & { onClose?: () => void }> = ({ type, message, onClose }) => {
  const background =
    type === 'success' ? '#16a34a' :
    type === 'error' ? '#dc2626' :
    type === 'warning' ? '#f59e0b' :
    '#2563eb'

  return (
    <div
      style={{
        pointerEvents: 'auto',
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        background,
        color: 'white',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ marginRight: '0.75rem' }}>{message}</div>
      <button
        onClick={onClose}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'rgba(255,255,255,0.9)',
          cursor: 'pointer',
          fontSize: '1rem',
          padding: 0,
        }}
        aria-label="Close toast"
      >
        ×
      </button>
    </div>
  )
}

export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface ToastMessage {
  id: string
  type: ToastType
  message: string
  duration?: number
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void
  hideToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const showToast = useCallback((message: string, type: ToastType = 'info', duration = 4000) => {
    const id = crypto.randomUUID()
    const newToast: ToastMessage = { id, type, message, duration }
    
    setToasts((prev) => [...prev, newToast])

    if (duration > 0) {
      setTimeout(() => {
        hideToast(id)
      }, duration)
    }
  }, [])

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          maxWidth: '400px',
          pointerEvents: 'none',
        }}
      >
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onClose={() => hideToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
