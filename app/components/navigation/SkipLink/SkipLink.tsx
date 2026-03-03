import { forwardRef, useState } from 'react';
import styles from './SkipLink.module.css';

/**
 * SkipLink Component
 *
 * Accessibility feature that allows keyboard users to skip navigation
 * and jump directly to main content. Hidden by default, appears on focus.
 *
 * This should be the first interactive element on the page.
 *
 * Manages its own focus state. When `content` is provided, wraps it in a
 * container with data-skip-link-focused so layout (e.g. nav margin) can
 * react via CSS (e.g. [data-skip-link-focused="true"] .nav).
 *
 * Supports ref forwarding for callers that need the link element.
 *
 * @example
 * <SkipLink href="#main-content">
 *   Skip to main content
 * </SkipLink>
 *
 * @example
 * // With content wrapper so layout can react to focus
 * <SkipLink content={<main>...</main>}>
 *   Skip to main content
 * </SkipLink>
 */

export interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
  /** When provided, wrapped in a focus-aware container (data-skip-link-focused) */
  content?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(function SkipLink(
  {
    href = '#main-content',
    children = 'Skip to main content',
    content,
    className,
    style,
  },
  ref
) {
  const [focused, setFocused] = useState(false);

  const link = (
    <a
      ref={ref}
      href={href}
      className={`${styles.skipLink} ${className || ''}`.trim()}
      style={style}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </a>
  );

  const skipLinkUI = (
    <div className={styles.skipLinkWrapper}>
      {link}
    </div>
  );

  if (content == null) {
    return skipLinkUI;
  }

  return (
    <>
      {skipLinkUI}
      <div
        className={styles.contentWrapper}
        data-skip-link-focused={focused ? 'true' : undefined}
      >
        {content}
      </div>
    </>
  );
});

export default SkipLink;
