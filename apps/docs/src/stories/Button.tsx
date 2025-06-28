import { cn } from '@design-system/utils';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: 'h-9 px-3 text-sm',
    medium: 'h-10 py-2 px-4',
    large: 'h-11 px-8',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
        primary
          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
          : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        sizeClasses[size],
        'bg-red'
      )}
      type='button'
      {...props}
    >
      {label}
    </button>
  );
};
