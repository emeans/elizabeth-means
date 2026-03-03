import NextLink from 'next/link';
import styles from './Link.module.css';

/**
 * Link Component
 * 
 * For navigation, downloads, and external resources.
 * Use Button component for actions (submit, click handlers, etc).
 * 
 * Variants:
 * - nav: Navigation links (animated underline)
 * - inline: Content links (standard underline)
 * - standalone: Footer/isolated links (hover underline)
 * - cta: Call-to-action link styled like a button
 * 
 * @example
 * // Navigation link
 * <Link variant="nav" href="#about">About</Link>
 * 
 * // External link
 * <Link variant="inline" href="https://github.com" external>GitHub</Link>
 * 
 * // Download link styled as CTA
 * <Link variant="cta" href="/resume.pdf" download>Download Resume</Link>
 * 
 * // Internal Next.js route
 * <Link href="/blog">Blog</Link>
 */

interface BaseLinkProps {
    variant?: 'nav' | 'inline' | 'standalone' | 'cta';
    /** When true (e.g. in a mobile nav menu), link uses block layout and full-width styling */
    blockLayout?: boolean;
    /** When true, nav link shows active state (color + underline). Use with current path. */
    active?: boolean;
    /** When true, do not show the open-in-new icon on external links (e.g. icon-only footer links) */
    hideExternalIcon?: boolean;
    children: React.ReactNode;
    className?: string;
    'aria-label'?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface ExternalLinkProps extends BaseLinkProps {
    href: string;
    external: true;
    download?: boolean | string;
}

interface InternalLinkProps extends BaseLinkProps {
    href: string;
    external?: false;
    download?: boolean | string;
}

type LinkProps = ExternalLinkProps | InternalLinkProps;

export default function Link({
    variant = 'inline',
    blockLayout = false,
    active = false,
    hideExternalIcon = false,
    href,
    external = false,
    download,
    children,
    className,
    'aria-label': ariaLabel,
    onClick,
    ...props
}: LinkProps) {

    const linkClassName = [
        styles.link,
        styles[variant],
        blockLayout && styles.navBlock,
        variant === 'nav' && active && styles.navActive,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const wrapInLinkText = variant === 'inline' || variant === 'standalone';
    const linkContent = wrapInLinkText ? (
        <span className={styles.linkText}>{children}</span>
    ) : (
        children
    );

  // External links or downloads use standard anchor tag
    if (external || download) {
        return (
        <a
            className={linkClassName}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            download={download}
            aria-label={ariaLabel || (external ? `${children} (opens in new tab)` : undefined)}
            onClick={onClick}
            {...props}
        >
            {linkContent}
            {external && variant !== 'cta' && !hideExternalIcon && (
                <span className={`${styles.externalIcon} material-symbols-outlined`} aria-hidden="true">
                    open_in_new
                </span>
            )}
        </a>
        );
    }

  // Internal navigation uses Next.js Link for client-side routing
  // Unless it's an anchor link (starts with #)
    if (href.startsWith('#')) {
        return (
        <a
            className={linkClassName}
            href={href}
            aria-label={ariaLabel}
            onClick={onClick}
            {...props}
        >
            {linkContent}
        </a>
        );
    }

    // Next.js Link for internal routes
    return (
        <NextLink
        className={linkClassName}
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        {...props}
        >
        {linkContent}
        </NextLink>
    );
}
