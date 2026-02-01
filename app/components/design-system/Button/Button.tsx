import styles from './Button.module.css';

/**
 * Button Component
 * 
 * For user actions and form submissions.
 * Use Link component for navigation and downloads.
 * 
 * @example
 * // Form submission
 * <Button type="submit">Send Message</Button>
 * 
 * // Click action
 * <Button onClick={handleClick} variant="secondary">Cancel</Button>
 * 
 * // Dangerous action
 * <Button onClick={handleDelete} variant="danger">Delete Account</Button>
 */

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: 'button' | 'submit' | 'reset';
    'aria-label'?: string;
    className?: string;
}

export default function Button({ 
    variant = 'primary', 
    size = 'medium', 
    disabled = false, 
    loading = false, 
    fullWidth = false, 
    children, 
    onClick, 
    type = 'button',
    'aria-label': ariaLabel,
    className,
    ...props 
}: ButtonProps) {

    const buttonClassName = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        loading && styles.loading,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button 
            className={buttonClassName}
            onClick={onClick} 
            type={type} 
            disabled={disabled || loading}
            aria-disabled={disabled || loading}
            aria-busy={loading}
            aria-label={ariaLabel}
            {...props}
            >
            {loading && (
                <span className={styles.spinnerWrapper} aria-hidden="true">
                <span className={styles.spinner} />
                </span>
            )}
            <span className={loading ? styles.contentHidden : styles.content}>
                {children}
            </span>
        </button>
    );
}
