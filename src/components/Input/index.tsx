import React, { useMemo, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Colors from '../../common/colors';
import CommonStyles from '../../common/styles';
import Text from '../Text';
import Wrapper from '../Wrapper';
import { getInputStyles } from './helpers';
import type { InputProps } from './types';
import ValidIcon from './ValidIcon';

export { getInputStyles } from './helpers';
export { InputProps } from './types';

const Input = (props: InputProps) => {
  const { isValid, errorMessage } = props;

  const [isActive, setIsActive] = useState(false);

  const icon = useMemo(() => {
    if (isValid) {
      return <ValidIcon />;
    }

    return null;
  }, [isValid]);

  const computedStyles = useMemo(
    () => getInputStyles({ ...props, isActive }),
    [props, isActive]
  );

  return (
    <Wrapper>
      <TextInput
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        style={computedStyles}
        placeholderTextColor={Colors.Gray}
        {...props}
      />

      {!!icon && icon}

      {!!props.required && (
        <Text color={Colors.Red} style={styles.requiredText}>
          *
        </Text>
      )}

      {!!errorMessage && (
        <Text color={Colors.Red} style={styles.errorMessage}>
          * {errorMessage}
        </Text>
      )}
    </Wrapper>
  );
};

export const styles = StyleSheet.create({
  input: {
    ...CommonStyles.Body,
    backgroundColor: Colors.White,
    borderRadius: 32,
    paddingHorizontal: 24,
    minHeight: 54,
    textAlignVertical: 'center',
    borderWidth: 2,
    borderColor: Colors.Transparent,
  },

  inputActive: {
    borderColor: Colors.Yellow,
  },

  inputError: {
    borderColor: Colors.Red,
  },

  requiredText: {
    position: 'absolute',
    top: 16,
    right: 16,
  },

  errorMessage: {
    ...CommonStyles.Callout,
    marginTop: 4,
    color: Colors.Red,
  },

  validIconWrapper: {
    position: 'absolute',
    right: 16,
    top: 0,
    bottom: 0,
    height: '100%',
    width: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  validIcon: {
    height: 28,
    width: 28,
    backgroundColor: Colors.Green,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  validIconText: {
    textAlign: 'center',
    color: Colors.White,
  },
});

export default Input;
