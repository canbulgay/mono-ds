import { cn } from '@design-system/utils';
import React from 'react';

import Spinner from '../Spinner';

import { buttonVariants } from './Button.tailwind';
import type { ButtonProps } from './Button.types';

const Button = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C>
) => {
  const {
    children,
    loading,
    icon,
    size = 'default',
    palette = 'primary',
    shape = 'default',
    block = false,
    ref,
    as: asComp = 'button',
    prefix,
    onClick,
    disabled,
    dataTestId,
    className,
    padding,
    ...rest
  } = props;

  const _disabled = disabled ?? loading;
  const Component = asComp || 'button';

  const handleClick = React.useCallback(
    (e: React.MouseEvent) => {
      if (onClick && !loading) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        onClick(e);
      }
    },
    [onClick, loading]
  );

  const baseClasses = buttonVariants({
    palette,
    size,
    shape,
    block,
  });

  const spinnerSizeMap = {
    default: 'w-5 h-5',
    medium: 'w-4 h-4',
    small: 'w-4 h-4',
    heightless: 'w-4 h-4',
    large: 'w-6 h-6',
  };

  const spinnerSize = spinnerSizeMap[size] || spinnerSizeMap.default;

  return React.createElement(
    Component,
    {
      'data-testid': dataTestId,
      disabled: _disabled,
      onClick: handleClick,
      ref,
      className: cn(
        baseClasses,
        // Apply custom padding if provided
        padding && 'px-0',
        className
      ),
      style: padding ? { padding } : undefined,
      ...rest,
    },
    <>
      {prefix && prefix}
      <div className='flex items-center justify-center'>
        {loading ? (
          <Spinner className={spinnerSize} />
        ) : (
          <span>{children}</span>
        )}
      </div>
      {icon && icon}
    </>
  );
};

export default Button;
