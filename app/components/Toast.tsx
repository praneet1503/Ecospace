'use client'

import { useEffect, useState } from 'react'
import styles from './Toast.module.css'
import type { ToastType } from '../context/ToastProvider'

interface ToastProps {
  id: string
  type: ToastType
  message: string
  duration?: number
  onClose: () => void
}

export default function Toast({ type, message, duration = 4000, onClose }: ToastProps) {
  const [progress, setProgress] = useState(100)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    if (duration <= 0) return

    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
      setProgress(remaining)

      if (remaining === 0) {
        clearInterval(interval)
        handleClose()
      }
    }, 50)

    return () => clearInterval(interval)
  }, [duration])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(onClose, 300)
  }

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  }

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${isExiting ? styles.exiting : ''}`}
      role="alert"
      aria-live="polite"
      style={{ pointerEvents: 'auto' }}
    >
      <div className={styles.content}>
        <span className={styles.icon}>{icons[type]}</span>
        <p className={styles.message}>{message}</p>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close notification">
          ✕
        </button>
      </div>
      {duration > 0 && (
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  )
}
