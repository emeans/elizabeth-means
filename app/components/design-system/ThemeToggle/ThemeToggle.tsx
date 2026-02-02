import { forwardRef } from 'react';
import styles from './ThemeToggle.module.css';

/**
 * ThemeToggle Component
 * 
 * Toggle button for switching between light and dark themes.
 * Displays appropriate icon and label based on current theme.
 * 
 * @example
 * // Basic usage
 * <ThemeToggle 
 *   theme={theme}
 *   onToggle={toggleTheme}
 * />
 * 
 * @example
 * // Icon only (hide text)
 * <ThemeToggle 
 *   theme={theme}
 *   onToggle={toggleTheme}
 *   showLabel={false}
 * />
 */

interface ThemeToggleProps {
  /** Current theme ('light' or 'dark') */
  theme: 'light' | 'dark';
  
  /** Callback when theme is toggled */
  onToggle: () => void;
  
  /** Icon to show in light mode (defaults to moon emoji) */
  lightIcon?: React.ReactNode;
  
  /** Icon to show in dark mode (defaults to sun emoji) */
  darkIcon?: React.ReactNode;
  
  /** Show text label alongside icon */
  showLabel?: boolean;
  
  /** Custom light mode label */
  lightLabel?: string;
  
  /** Custom dark mode label */
  darkLabel?: string;
  
  /** Additional CSS classes */
  className?: string;
}

const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  function ThemeToggle(
    {
      theme,
      onToggle,
      lightIcon = '🌙',
      darkIcon = '☀️',
      showLabel = true,
      lightLabel = 'Dark',
      darkLabel = 'Light',
      className,
    },
    ref
  ) {
    const isLight = theme === 'light';
    const icon = isLight ? lightIcon : darkIcon;
    const label = isLight ? lightLabel : darkLabel;
    const ariaLabel = isLight 
      ? 'Switch to dark mode' 
      : 'Switch to light mode';
    
    return (
      <button
        ref={ref}
        className={`${styles.themeToggle} ${className || ''}`}
        onClick={onToggle}
        aria-label={ariaLabel}
        title={ariaLabel}
        type="button"
      >
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        {showLabel && (
          <span className={styles.label}>
            {label}
          </span>
        )}
      </button>
    );
  }
);

export default ThemeToggle;
