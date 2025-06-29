import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center text-center font-bold outline-2 outline-transparent outline-offset-2 cursor-pointer transition-all duration-200 ease-in-out relative disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      palette: {
        primary: '',
        blue: '',
        gray: '',
        purple: '',
        decline: '',
      },
      size: {
        default: 'h-[50px] text-base px-6',
        medium: 'h-10 text-sm px-6',
        small: 'h-9 text-sm px-6',
        heightless: 'h-auto px-6',
        large: 'h-[60px] text-lg px-6',
      },
      shape: {
        default: '',
        ghost: '',
        outline: 'border border-solid',
      },
      block: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    compoundVariants: [
      // Primary palette variants
      {
        palette: 'primary',
        shape: 'default',
        className:
          'bg-primary-normal text-white hover:bg-primary-hover focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-primary-lighter disabled:text-primary-light',
      },
      {
        palette: 'primary',
        shape: 'ghost',
        className:
          'bg-transparent text-primary-normal hover:bg-primary-lighter focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-primary-lighter disabled:text-primary-light',
      },
      {
        palette: 'primary',
        shape: 'outline',
        className:
          'bg-transparent text-primary-normal border-sky-light hover:bg-primary-lighter hover:border-primary-normal focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-primary-lighter disabled:text-primary-light',
      },

      // Blue palette variants
      {
        palette: 'blue',
        shape: 'default',
        className:
          'bg-secondary-normal text-white hover:bg-secondary-hover focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-secondary-lighter disabled:text-secondary-light',
      },
      {
        palette: 'blue',
        shape: 'ghost',
        className:
          'bg-transparent text-secondary-normal hover:bg-secondary-lighter focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-secondary-lighter disabled:text-secondary-light',
      },
      {
        palette: 'blue',
        shape: 'outline',
        className:
          'bg-transparent text-secondary-normal border-sky-light hover:bg-secondary-lighter hover:border-secondary-normal focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-secondary-lighter disabled:text-secondary-light',
      },

      // Gray palette variants
      {
        palette: 'gray',
        shape: 'default',
        className:
          'bg-sky-normal text-black hover:bg-sky-hover focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-sky-extraLight disabled:text-text-lighter',
      },
      {
        palette: 'gray',
        shape: 'ghost',
        className:
          'bg-transparent text-black hover:bg-sky-extraLight focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-sky-extraLight disabled:text-text-lighter',
      },
      {
        palette: 'gray',
        shape: 'outline',
        className:
          'bg-transparent text-black border-sky-light hover:bg-sky-extraLight hover:border-sky-normal focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-sky-extraLight disabled:text-text-lighter',
      },

      // Purple palette variants
      {
        palette: 'purple',
        shape: 'default',
        className:
          'bg-enpurple-normal text-white hover:bg-enpurple-hover focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-enpurple-lighter disabled:text-enpurple-light',
      },
      {
        palette: 'purple',
        shape: 'ghost',
        className:
          'bg-transparent text-enpurple-normal hover:bg-enpurple-lighter focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-enpurple-lighter disabled:text-enpurple-light',
      },
      {
        palette: 'purple',
        shape: 'outline',
        className:
          'bg-transparent text-enpurple-normal border-sky-light hover:bg-enpurple-lighter hover:border-enpurple-normal focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-enpurple-lighter disabled:text-enpurple-light',
      },

      // Decline palette variants
      {
        palette: 'decline',
        shape: 'default',
        className:
          'bg-sky-normal text-text-dark hover:bg-sky-hover focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-sky-extraLight disabled:text-sky-light',
      },
      {
        palette: 'decline',
        shape: 'ghost',
        className:
          'bg-transparent text-text-dark hover:bg-sky-extraLight focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-sky-extraLight disabled:text-sky-light',
      },
      {
        palette: 'decline',
        shape: 'outline',
        className:
          'bg-white text-text-dark border-white hover:bg-sky-extraLight hover:border-white focus-visible:shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.15)] disabled:bg-sky-extraLight disabled:text-sky-light',
      },
    ],
    defaultVariants: {
      palette: 'primary',
      size: 'default',
      shape: 'default',
      block: false,
    },
  }
);

export { buttonVariants };
export type ButtonVariants = VariantProps<typeof buttonVariants>;
