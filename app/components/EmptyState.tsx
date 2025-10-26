'use client'

import styles from './EmptyState.module.css'
import Image from 'next/image'
import { analyticsEvents } from '../../lib/analytics'

interface EmptyStateProps {
  title?: string
  message?: string
  actionLabel?: string
  onAction?: () => void
  illustration?: string
}

export default function EmptyState({
  title = 'Oops! Data Taking a Break',
  message = 'We\'re having trouble loading the environmental data right now. Don\'t worry—our planet is still here! Try refreshing in a moment.',
  actionLabel = 'Refresh Page',
  onAction,
  illustration = '/illustrations/empty-state.svg'
}: EmptyStateProps) {
  return (
    <div className={styles.container}>
      <div className={styles.illustration}>
        <Image 
          src={illustration} 
          alt="Empty state illustration" 
          width={200} 
          height={200}
          priority
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>
        
        {onAction && (
          <button 
            className={styles.actionButton} 
            onClick={() => {
              analyticsEvents.emptyStateRefreshClicked()
              onAction()
            }}
            aria-label={actionLabel}
          >
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  )
}
