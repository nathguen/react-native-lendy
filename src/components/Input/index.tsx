import React, { useMemo, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { decode } from 'html-entities';

import Colors from '../../common/colors';
import CommonStyles from '../../common/styles';
import Text from '../Text';
import Wrapper from '../Wrapper';

const ValidIcon = () => {
  return (
    <Wrapper style={styles.validIconWrapper}>
      <Wrapper style={styles.validIcon}>
        <Text color={Colors.White} style={styles.validIconText}>
          {decode('&check;')}
        </Text>
      </Wrapper>
    </Wrapper>
  );
};

interface InputProps extends TextInputProps {
  errorMessage?: string;
  required?: boolean;
  isValid?: boolean;
}

const Input = ({ style, ...props }: InputProps) => {
  const { isValid, errorMessage } = props;

  const [isActive, setIsActive] = useState(false);

  const icon = useMemo(() => {
    if (isValid) {
      return <ValidIcon />;
    }

    return null;
  }, [isValid]);

  return (
    <Wrapper>
      <TextInput
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        style={{
          ...styles.input,

          // @ts-ignore
          ...(!!style && style),

          // active style
          ...(isActive && styles.inputActive),

          // error style
          ...(!!errorMessage && styles.inputError),

          ...(props.multiline && {
            paddingTop: 16,
            paddingBottom: 16,
            minHeight: 80,
          }),
          ...(props.editable === false && {
            color: Colors.Gray,
          }),
        }}
        placeholderTextColor={Colors.Gray}
        {...props}
      />

      {!!icon && icon}

      {!!props.required && <Text style={styles.requiredText}>*</Text>}

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
    color: Colors.Red,
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
