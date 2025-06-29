import * as React from 'react';

import { cn } from '@design-system/utils';
import { iconWrapperVariants, spinnerVariants } from './Spinner.tailwind';
import { type SpinnerProps } from './Spinner.types';
import './Spinner.css';

const Spinner: React.FunctionComponent<SpinnerProps & { className?: string }> = (props) => {
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
    <div className="relative inline-flex justify-center items-center">
      {icon && (
        <div className={iconClasses}>
          {icon}
        </div>
      )}
      <svg
        viewBox="0 0 50 50"
        className={cn(spinnerClasses, 'spinner-custom', className)}
        {...rest}
      >
        <circle
          className="spinner-path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

Spinner.defaultProps = {
  color: 'primary',
  colorType: 'light',
  size: 'small',
};

export default Spinner;
