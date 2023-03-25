import type { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  errorMessage?: string;
  required?: boolean;
  isValid?: boolean;
}

export interface InputStylesProps extends InputProps {
  isActive?: boolean;
}
