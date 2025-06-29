import React from 'react';

export interface SpinnerProps {
  color?: 'primary' | 'secondary' | 'darkBlue' | 'red' | 'purple' | 'sky' | 'enlaci' | 'enred';
  colorType?: 'lighter' | 'light' | 'normal' | 'dark';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
}
