import { forwardRef } from 'react';
import NextLink from 'next/link';
import styles from './LogoLink.module.css';

/**
 * LogoLink Component
 * 
 * Site branding link that appears in navigation.
 * Currently displays text, designed to support logo image in the future.
 * 
 * @example
 * // Text only
 * <LogoLink>Elizabeth Means</LogoLink>
 * 
 * @example
 * // With logo
 * <LogoLink logo="/logo.svg">Elizabeth Means</LogoLink>
 * 
 * @example
 * // Logo only
 * <LogoLink logo="/logo.svg" hideText />
 */

interface LogoLinkProps {
  logo?: string;
  logoAlt?: string;
  children?: React.ReactNode;
  hideText?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const LogoLink = forwardRef<HTMLAnchorElement, LogoLinkProps>(
  function LogoLink(
    {
      logo,
      logoAlt = 'Site logo',
      children = 'Elizabeth Means',
      hideText = false,
      href = '#home',
      onClick,
      className,
    },
    ref
  ) {
    return (
      <NextLink
        ref={ref}
        href={href}
        className={`${styles.logoLink} ${className || ''}`}
        onClick={onClick}
        aria-label="Go to homepage"
      >
        {logo && (
          <img
            src={logo}
            alt={logoAlt}
            className={styles.logoImage}
            aria-hidden={!hideText}
          />
        )}
        {!hideText && (
          <span className={styles.logoText}>
            {children}
          </span>
        )}
      </NextLink>
    );
  }
);

export default LogoLink;
