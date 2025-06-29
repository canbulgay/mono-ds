import { cn } from '@design-system/utils';
import React from 'react';

import './Spinner.css';
import { iconWrapperVariants, spinnerVariants } from './Spinner.tailwind';
import { type SpinnerProps } from './Spinner.types';

const Spinner: React.FunctionComponent<
  SpinnerProps & { className?: string }
> = props => {
  const {
    icon,
    color = 'primary',
    colorType = 'light',
    size = 'small',
    className,
    ...rest
  } = props;

  const spinnerClasses = spinnerVariants({
    size,
    color,
    colorType,
  });

  const iconClasses = iconWrapperVariants({
    size,
  });

  return (
    <div className='relative inline-flex justify-center items-center'>
      {icon && <div className={iconClasses}>{icon}</div>}
      <svg
        className={cn(spinnerClasses, 'spinner-custom', className)}
        viewBox='0 0 50 50'
        {...rest}
      >
        <circle
          className='spinner-path'
          cx='25'
          cy='25'
          fill='none'
          r='20'
          strokeWidth='4'
        />
      </svg>
    </div>
  );
};

export default Spinner;
