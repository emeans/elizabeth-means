import { forwardRef } from 'react';
import styles from './HamburgerButton.module.css';

/**
 * HamburgerButton Component
 *
 * Animated hamburger menu button for mobile navigation.
 * Shows three horizontal lines that animate to an X when open.
 *
 * @example
 * <HamburgerButton
 *   isOpen={mobileMenuOpen}
 *   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
 *   aria-label="Toggle menu"
 * />
 */

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  /** ID of the element this button controls (menu panel). Only set when that element exists in the DOM. */
  'aria-controls'?: string;
  'aria-label'?: string;
  className?: string;
}

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(function HamburgerButton(
  {
    isOpen,
    onClick,
    'aria-controls': ariaControls,
    'aria-label': ariaLabel = 'Toggle menu',
    className,
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={`${styles.hamburger} ${className || ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : ariaLabel}
      aria-expanded={isOpen}
      {...(ariaControls && { 'aria-controls': ariaControls })}
      type="button"
    >
      <span className={styles.line} data-state={isOpen ? 'open' : 'closed'} />
      <span className={styles.line} data-state={isOpen ? 'open' : 'closed'} />
      <span className={styles.line} data-state={isOpen ? 'open' : 'closed'} />
    </button>
  );
});

export default HamburgerButton;
