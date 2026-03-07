'use client'

import { useEffect, useRef, useState } from 'react'
import Tag from '@components/primitives/Tag'
import styles from './Flow.module.css'

export interface FlowSection {
  title: string
  values: string[]
  displayAs: 'tags' | 'text'
}

export interface FlowItem {
  value: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  arrowLabel?: React.ReactNode
  sections?: FlowSection[]
}

export interface FlowProps {
  title?: React.ReactNode
  intro?: React.ReactNode
  items: FlowItem[]
  layout?: 'vertical' | 'horizontal'
  className?: string
  /** Opt in to staggered entrance animation on scroll entry */
  animate?: boolean
}

function FlowArrowVertical({ label }: { label?: React.ReactNode }) {
  return (
    <div className={styles.arrow}>
      <div className={styles.arrowGraphic} aria-hidden>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <path d="M12 2v20M6 18l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {label != null && <div className={styles.arrowLabel}>{label}</div>}
    </div>
  )
}

function FlowArrowHorizontal() {
  return (
    <div className={styles.arrowHorizontal} aria-hidden>
      <div className={styles.arrowGraphic}>
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
          <path d="M12 2v20M6 18l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function FlowCardContent({ item, showSections }: { item: FlowItem; showSections: boolean }) {
  const hasSections = showSections && item.sections != null && item.sections.length > 0
  return (
    <>
      <div className={styles.value}>{item.value}</div>
      <div className={`${styles.title} text-body text-bold`}>{item.title}</div>
      {item.description != null && <p className={styles.description}>{item.description}</p>}
      {hasSections && (
        <>
          <hr className={styles.hairline} />
          <div className={styles.sections}>
            {item.sections!.map((section, si) => (
              <div key={si} className={styles.section}>
                <div className={styles.sectionTitle}>{section.title}</div>
                {section.displayAs === 'tags' ? (
                  <div className={styles.tags}>
                    {section.values.map((v, vi) => <Tag key={vi} variant="secondary">{v}</Tag>)}
                  </div>
                ) : (
                  <div className={styles.sectionText}>
                    {section.values.map((v, vi) => <div key={vi}>{v}</div>)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default function Flow({ title, intro, items, layout = 'vertical', className, animate }: FlowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!animate) return
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0, rootMargin: '0px 0px -35% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  if (items.length === 0) return null

  const isHorizontal = layout === 'horizontal'
  const showSections = isHorizontal || items.some((item) => item.sections?.length)

  return (
    <div
      ref={ref}
      className={[
        styles.flow,
        isHorizontal ? styles.flowHorizontal : '',
        animate ? styles.flowAnimate : '',
        animate && isVisible ? styles.flowVisible : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {title != null && (
        <div className={styles.flowTitleWrapper}>
          <div className={`${styles.flowTitle} text-lg`}>{title}</div>
          {intro != null && <div className={styles.flowIntro}>{intro}</div>}
        </div>
      )}
      {title == null && intro != null && <div className={styles.flowIntro}>{intro}</div>}

      <ul className={isHorizontal ? styles.listHorizontal : styles.list}>
        {items.map((item, i) => (
          <li
            key={i}
            className={isHorizontal ? styles.itemHorizontal : styles.item}
            // --i on the item drives stagger for both the card and its following arrow
            style={{ '--i': i } as React.CSSProperties}
          >
            <div className={styles.content}>
              <FlowCardContent item={item} showSections={showSections} />
            </div>
            {i < items.length - 1 &&
              (isHorizontal ? <FlowArrowHorizontal /> : <FlowArrowVertical label={item.arrowLabel} />)}
          </li>
        ))}
      </ul>
    </div>
  )
}
