import { cva, type VariantProps } from 'class-variance-authority';

const spinnerVariants = cva(
  // Base styles for the SVG spinner
  'animate-spin',
  {
    variants: {
      size: {
        small: 'w-[25px] h-[25px]',
        medium: 'w-[30px] h-[30px]',
        large: 'w-[50px] h-[50px]',
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        darkBlue: 'text-blue-800',
        red: 'text-red-500',
        purple: 'text-purple-500',
        sky: 'text-sky-500',
        enlaci: 'text-blue-600',
        enred: 'text-red-600',
      },
      colorType: {
        lighter: 'opacity-40',
        light: 'opacity-60',
        normal: 'opacity-100',
        dark: 'opacity-80',
      },
    },
    defaultVariants: {
      size: 'small',
      color: 'primary',
      colorType: 'light',
    },
  }
);

const iconWrapperVariants = cva(
  // Base styles for icon wrapper
  'absolute',
  {
    variants: {
      size: {
        small: 'left-[17%]',
        medium: 'left-[23%]',
        large: 'left-[33%]',
      },
    },
    defaultVariants: {
      size: 'small',
    },
  }
);

export { iconWrapperVariants, spinnerVariants };
export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
export type IconWrapperVariants = VariantProps<typeof iconWrapperVariants>;
