import { forwardRef } from 'react'
import styles from './ThemeToggle.module.css'

/**
 * ThemeToggle Component
 *
 * Slide switch for light/dark theme. Thumb shows sun (light mode) or moon (dark mode) via Material Symbols.
 * WCAG: keyboard (Enter/Space), focus-visible outline, role="switch" with aria-checked and aria-label,
 * minimum 44×44px touch target, prefers-reduced-motion for animation.
 *
 * @example
 * <ThemeToggle theme={theme} onToggle={toggleTheme} />
 */

interface ThemeToggleProps {
  /** Current theme ('light' or 'dark') */
  theme: 'light' | 'dark'
  /** Callback when theme is toggled */
  onToggle: () => void
  /** Show text label alongside switch (e.g. in mobile menu) */
  showLabel?: boolean
  /** Additional CSS classes */
  className?: string
}

const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  function ThemeToggle(
    {
      theme,
      onToggle,
      showLabel = false,
      className,
    },
    ref
  ) {
    const isLight = theme === 'light'
    const ariaLabel = isLight
      ? 'Switch to dark mode'
      : 'Switch to light mode'

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={!isLight}
        aria-label={ariaLabel}
        title={ariaLabel}
        className={`${styles.themeToggle} ${className ?? ''}`.trim()}
        onClick={onToggle}
        data-theme={theme}
      >
        <span className={styles.track}>
          <span className={styles.thumb}>
            <span
              className={`material-symbols-outlined ${styles.icon}`}
              aria-hidden
            >
              {isLight ? 'light_mode' : 'dark_mode'}
            </span>
          </span>
        </span>
        {showLabel && (
          <span className={styles.label}>
            {isLight ? 'Dark' : 'Light'}
          </span>
        )}
      </button>
    )
  }
)

export default ThemeToggle
