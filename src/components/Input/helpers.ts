import { Colors } from '../../common';

import { styles } from './styles';
import type { InputStylesProps } from './types';

export const getInputStyles = (props?: InputStylesProps) => {
  const { style, isActive, errorMessage, multiline, editable } = props || {};

  return {
    ...styles.input,

    // @ts-ignore
    ...(!!style && style),

    // active style
    ...(isActive && styles.inputActive),

    // error style
    ...(!!errorMessage && styles.inputError),

    ...(multiline && {
      paddingTop: 16,
      paddingBottom: 16,
      minHeight: 80,
    }),
    ...(editable === false && {
      color: Colors.Gray,
    }),
  };
};
