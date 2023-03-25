import type { ButtonProps as RNButtonProps } from 'react-native';

export type ButtonSize = 'small' | 'medium' | 'large';
export enum ButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type ButtonType = 'primary' | 'secondary' | 'tertiary';
export enum ButtonTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export interface ButtonProps extends RNButtonProps {
  type?: ButtonType | ButtonTypes;
  onPress?: () => void;

  backgroundColor?: string;
  color?: string;
  size?: ButtonSize;
  buttonStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  loading?: boolean;
  loadingColor?: string;
  disabled?: boolean;
  icon?: any;
  iconPosition?: 'left' | 'right';
  borderColor?: string;

  fullWidth?: boolean; // indicates if the button should take up its full width
}
