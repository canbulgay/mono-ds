import type React from 'react';
import { type ReactNode } from 'react';

import { type PolymorphicComponentProps } from '../../types/polymorph';

export enum ButtonPalettes {
  primary = 'primary',
  blue = 'blue',
  gray = 'gray',
  purple = 'purple',
  decline = 'decline',
}

export type ButtonSizes =
  | 'default'
  | 'medium'
  | 'small'
  | 'heightless'
  | 'large';
export type ButtonShapes = 'default' | 'ghost' | 'outline';
export type ButtonPalette = 'primary' | 'blue' | 'gray' | 'purple' | 'decline';

export type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, StyledButtonProps>;

export interface StyledButtonProps {
  block?: boolean;
  size?: ButtonSizes;
  icon?: ReactNode;
  shape?: ButtonShapes;
  palette?: ButtonPalette;
  loading?: boolean;
  prefix?: ReactNode;
  padding?: string;
  disabled?: boolean;
  dataTestId?: string | number;
}
